/**
 * HTTP Webhook Notification Hook
 *
 * Envia notificações para webhooks externos (n8n, Slack, etc.)
 * quando eventos importantes acontecem no Claude Code.
 *
 * Configuração via variáveis de ambiente:
 *   CLAUDE_WEBHOOK_URL — URL do webhook (n8n, Slack, etc.)
 *   CLAUDE_WEBHOOK_ENABLED — "true" para ativar
 */
const https = require("https");
const http = require("http");
const url = require("url");

const webhookUrl = process.env.CLAUDE_WEBHOOK_URL;
const enabled = process.env.CLAUDE_WEBHOOK_ENABLED === "true";

if (!enabled || !webhookUrl) {
  console.log(JSON.stringify({ decision: "approve" }));
  process.exit(0);
}

// Coletar info do evento
const event = {
  type: "claude-code-event",
  timestamp: new Date().toISOString(),
  cwd: process.cwd(),
  tool: process.env.CLAUDE_TOOL_NAME || "unknown",
  user: process.env.USER || "unknown",
};

// Ler stdin para context (se disponível)
let stdinData = "";
try {
  const fs = require("fs");
  stdinData = fs.readFileSync("/dev/stdin", "utf8");
  if (stdinData) {
    try {
      event.context = JSON.parse(stdinData);
    } catch (e) {
      event.context = stdinData.substring(0, 500);
    }
  }
} catch (e) {
  // stdin não disponível, ok
}

// Enviar webhook (fire-and-forget, não bloqueia)
const parsed = new URL(webhookUrl);
const transport = parsed.protocol === "https:" ? https : http;

const postData = JSON.stringify(event);
const options = {
  hostname: parsed.hostname,
  port: parsed.port,
  path: parsed.pathname + parsed.search,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(postData),
  },
  timeout: 3000,
};

const req = transport.request(options, () => {});
req.on("error", () => {}); // silenciar erros — não bloquear
req.write(postData);
req.end();

// Sempre aprovar — webhook é fire-and-forget
console.log(JSON.stringify({ decision: "approve" }));
