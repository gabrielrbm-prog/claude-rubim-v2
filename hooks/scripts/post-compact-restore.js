const fs = require("fs");
const path = require("path");
const os = require("os");

const stateFile = path.join(os.homedir(), ".claude", "sessions", "pre-compact-state.json");

if (fs.existsSync(stateFile)) {
  try {
    const state = JSON.parse(fs.readFileSync(stateFile, "utf8"));
    const age = (Date.now() - new Date(state.timestamp).getTime()) / 1000 / 60;

    if (age < 30) { // Only restore if saved less than 30 min ago
      console.log(JSON.stringify({
        notification: `Context was compacted. Previous state saved at ${state.timestamp}. Working directory was: ${state.cwd}. Resume from where you left off.`
      }));
    }
  } catch (e) {}
}
