---
name: organize-files
description: Organize files in a directory by type, date, or project
argument-hint: "[directory path]"
disable-model-invocation: true
allowed-tools: Bash, Read, Glob, Grep
---

Organize files in the specified directory (default: ~/Downloads):

1. **Analyze** the directory contents — list all files with types and sizes
2. **Propose** an organization strategy:
   - By type: PDFs → Documentos/, Images → Imagens/, Videos → Vídeos/, Audio → Áudio/, Installers → Instaladores/, Spreadsheets → Planilhas/, Archives → Arquivos/
   - By date: group into month folders if many files
   - By project: if files share naming patterns
3. **Show the plan** before executing — list every move
4. **Execute** only after user confirmation
5. **Report** what was moved and the final structure

Target directory: $ARGUMENTS

If no directory specified, organize ~/Downloads.
