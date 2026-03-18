const fs = require("fs");
const path = require("path");
const os = require("os");

// Track conversation depth via message count proxy
const contextFile = path.join(os.homedir(), ".claude", "session-context.json");

let context = {};
if (fs.existsSync(contextFile)) {
  try {
    context = JSON.parse(fs.readFileSync(contextFile, "utf8"));
  } catch (e) {}
}

const cwd = process.cwd();
const sessionData = context[cwd] || {};
const messageCount = (sessionData.messageCount || 0) + 1;
sessionData.messageCount = messageCount;
sessionData.lastMessage = new Date().toISOString();
context[cwd] = sessionData;

fs.writeFileSync(contextFile, JSON.stringify(context, null, 2));

const output = {};

// Warn at different thresholds based on message count
// Typical context fills around 80-120 messages depending on complexity
if (messageCount === 40) {
  output.notification = "📊 Session at ~40 messages. Context is healthy. Consider delegating large research tasks to subagents to preserve main context.";
} else if (messageCount === 70) {
  output.notification = "⚠️ Session at ~70 messages. Context approaching 60%. Good time to /compact with a detailed summary of current progress and decisions.";
} else if (messageCount === 90) {
  output.notification = "🔴 Session at ~90 messages. Context likely degrading. Strongly recommend: 1) Save state with /session:handoff 2) Start fresh session 3) Or /compact immediately with explicit decision log.";
}

if (output.notification) {
  console.log(JSON.stringify(output));
}
