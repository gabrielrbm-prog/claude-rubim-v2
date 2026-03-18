---
description: Pesquisa profunda com múltiplas fontes em paralelo
allowed-tools: Agent, Read, Glob, Grep, WebSearch, WebFetch
---

Faça uma **pesquisa profunda** sobre: $ARGUMENTS

## Estratégia:
Lance 3 agentes de pesquisa em paralelo:

1. **Pesquisador Web** — Use WebSearch e WebFetch para encontrar artigos, docs, tutoriais recentes
2. **Pesquisador de Código** — Use GitHub MCP para buscar repositórios, exemplos, implementações
3. **Pesquisador Local** — Use Glob/Grep/Read para verificar se já temos algo relacionado no workspace

## Output:
Consolide os resultados em um relatório com:
- **Resumo** (3-5 bullets)
- **Fontes encontradas** (links e descrições)
- **Código/exemplos relevantes**
- **Recomendação** (o que usar/fazer baseado na pesquisa)
- **Próximos passos** sugeridos
