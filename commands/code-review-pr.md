---
description: Code review a pull request with parallel agents and confidence scoring
argument-hint: "[--comment] to post as PR comment"
---

# Code Review PR

Provide a code review for the current pull request.

## Steps:
1. Check if PR is closed, draft, trivial, or already reviewed. If so, stop.
2. Find all relevant CLAUDE.md files in the repo
3. View the PR and summarize changes
4. Launch 4 agents in parallel:
   - Agent 1+2: CLAUDE.md compliance (sonnet) - audit changes for guideline compliance
   - Agent 3: Bug detector (opus) - scan for obvious bugs in diff only. HIGH SIGNAL only.
   - Agent 4: Bug detector (opus) - look for security issues, incorrect logic in changed code

   CRITICAL: Only flag issues where:
   - Code will fail to compile/parse
   - Code will definitely produce wrong results
   - Clear CLAUDE.md violations with exact rule quoted

   DO NOT flag: style concerns, potential issues, subjective suggestions

5. For each issue from agents 3+4, launch validation subagents to confirm the issue is real
6. Filter out unvalidated issues (gives high-signal list)
7. Output summary. If --comment provided and issues found, post inline comments on GitHub using `gh pr comment`

False positives to avoid: Pre-existing issues, pedantic nitpicks, linter-catchable issues, general quality concerns unless in CLAUDE.md.
