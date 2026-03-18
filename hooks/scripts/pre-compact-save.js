const fs = require("fs");
const path = require("path");
const os = require("os");

// Save critical state before compaction
const stateDir = path.join(os.homedir(), ".claude", "sessions");
fs.mkdirSync(stateDir, { recursive: true });

const stateFile = path.join(stateDir, "pre-compact-state.json");
const contextFile = path.join(os.homedir(), ".claude", "session-context.json");

let context = {};
if (fs.existsSync(contextFile)) {
  try {
    context = JSON.parse(fs.readFileSync(contextFile, "utf8"));
  } catch (e) {}
}

const state = {
  timestamp: new Date().toISOString(),
  cwd: process.cwd(),
  context,
  message: "State saved before compact. Critical decisions and progress should be preserved in the conversation summary."
};

fs.writeFileSync(stateFile, JSON.stringify(state, null, 2));

// Output reminder to Claude
console.log(JSON.stringify({
  notification: "⚠️ Context compaction imminent. Before compacting, ensure all critical decisions, current task progress, and active file paths are included in the summary. Check ~/.claude/sessions/pre-compact-state.json for saved state."
}));
