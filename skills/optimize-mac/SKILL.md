---
name: optimize-mac
description: Analyze and optimize macOS performance (RAM, disk, processes)
disable-model-invocation: true
allowed-tools: Bash, Read, Glob, Grep
---

Perform a comprehensive macOS optimization analysis:

1. **Disk space**: Run `df -h /` and identify large files/folders
2. **RAM usage**: Run `top -l 1 -s 0 | head -12` and list top memory consumers with `ps aux | sort -k6 -rn | head -20`
3. **Caches**: Check sizes of `~/Library/Caches`, `~/Library/Logs`, browser caches
4. **Launch Agents**: List all in `~/Library/LaunchAgents/` and `/Library/LaunchDaemons/` — identify unnecessary ones
5. **Downloads**: Check `~/Downloads` for old files (>30 days)
6. **Large files**: Find files >500MB with `find ~ -size +500M -type f 2>/dev/null`

Present findings as a table and propose cleanup actions with estimated space savings.
Always ask before executing destructive actions.

$ARGUMENTS
