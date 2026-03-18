/**
 * Async Lint/Type Check Hook (PostToolUse)
 *
 * Roda lint e type-check em background após edições.
 * Não bloqueia o fluxo — apenas reporta problemas encontrados.
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const cwd = process.cwd();

// Detectar o tipo de projeto e rodar checks apropriados
const checks = [];

// Node.js / TypeScript
if (fs.existsSync(path.join(cwd, "package.json"))) {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(cwd, "package.json"), "utf8"));
    const scripts = pkg.scripts || {};

    if (scripts.lint) {
      checks.push({ name: "lint", cmd: "npm run lint --silent 2>&1 | tail -5" });
    }
    if (scripts.typecheck || scripts["type-check"]) {
      const cmd = scripts.typecheck ? "typecheck" : "type-check";
      checks.push({ name: "typecheck", cmd: `npm run ${cmd} --silent 2>&1 | tail -5` });
    }
  } catch (e) {}
}

// Python
if (fs.existsSync(path.join(cwd, "pyproject.toml")) || fs.existsSync(path.join(cwd, "setup.py"))) {
  // Verificar se ruff está disponível
  try {
    execSync("which ruff", { stdio: "pipe" });
    checks.push({ name: "ruff", cmd: "ruff check . --quiet 2>&1 | tail -5" });
  } catch (e) {
    try {
      execSync("which flake8", { stdio: "pipe" });
      checks.push({ name: "flake8", cmd: "flake8 . --max-line-length=120 --quiet 2>&1 | tail -5" });
    } catch (e2) {}
  }

  // mypy
  try {
    execSync("which mypy", { stdio: "pipe" });
    checks.push({ name: "mypy", cmd: "mypy . --ignore-missing-imports --quiet 2>&1 | tail -5" });
  } catch (e) {}
}

if (checks.length === 0) {
  console.log(JSON.stringify({ decision: "approve" }));
  process.exit(0);
}

const issues = [];

for (const check of checks) {
  try {
    const output = execSync(check.cmd, { cwd, timeout: 15000, stdio: "pipe" }).toString().trim();
    if (output && output.length > 0) {
      issues.push(`[${check.name}] ${output}`);
    }
  } catch (e) {
    if (e.stdout) {
      const output = e.stdout.toString().trim();
      if (output) {
        issues.push(`[${check.name}] ${output}`);
      }
    }
  }
}

const result = { decision: "approve" };
if (issues.length > 0) {
  result.reason = `Lint/Type issues encontrados:\n${issues.join("\n")}`;
}
console.log(JSON.stringify(result));
