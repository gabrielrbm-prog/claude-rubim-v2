---
name: smart-commit
description: Create well-formatted git commits following conventional commits
argument-hint: "[files or description]"
disable-model-invocation: true
allowed-tools: Bash(git *), Bash(ls *), Read, Grep
---

Create a smart git commit:

1. Run `git status` and `git diff --staged` to understand changes
2. If no files are staged, analyze `git diff` and stage the relevant files
3. Generate a commit message following **Conventional Commits**:
   - `feat:` — new feature
   - `fix:` — bug fix
   - `docs:` — documentation
   - `refactor:` — code restructuring
   - `style:` — formatting only
   - `test:` — adding/updating tests
   - `chore:` — maintenance tasks
4. Keep the subject line under 72 characters
5. Add a body if the change is non-trivial
6. Commit and show the result

If arguments are provided: $ARGUMENTS
