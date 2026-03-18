/**
 * Anti-Rationalization Gate (Stop Hook)
 *
 * Verifica se o agente realmente completou o trabalho antes de parar.
 * Injeta lembretes no contexto para evitar que o agente "racionalize"
 * que terminou quando ainda há trabalho pendente.
 */
const fs = require("fs");
const path = require("path");
const os = require("os");

const contextFile = path.join(os.homedir(), ".claude", "session-context.json");
const cwd = process.cwd();

let context = {};
if (fs.existsSync(contextFile)) {
  try {
    context = JSON.parse(fs.readFileSync(contextFile, "utf8"));
  } catch (e) {}
}

const sessionData = context[cwd] || {};
const editCount = sessionData.editCount || 0;

const checklist = [];

// Verificações baseadas no contexto do projeto
if (editCount > 0) {
  // Verificar se há arquivos modificados não commitados
  checklist.push("Verifique: todos os arquivos modificados estão salvos e corretos?");
}

if (editCount > 3) {
  checklist.push("Verifique: rodou os testes após as mudanças?");
  checklist.push("Verifique: há erros de linting ou tipagem?");
}

// Verificar se há TODOs pendentes nos arquivos recém editados
if (editCount > 0) {
  checklist.push("Verifique: não deixou TODOs ou placeholders no código?");
}

// Verificar se o objetivo original foi atingido
checklist.push("Verifique: o pedido original do usuário foi completamente atendido?");

// Sempre aprovar, mas incluir lembretes como contexto
const result = {
  decision: "approve",
};

if (checklist.length > 0) {
  result.reason = `Checklist de finalização:\n${checklist.map((c, i) => `  ${i + 1}. ${c}`).join("\n")}`;
}

console.log(JSON.stringify(result));
