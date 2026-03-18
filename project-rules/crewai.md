---
globs: "crewai-starter/**/*.py,**/crew*.py"
---
# Regras para CrewAI

- Cada agente: role específico, goal claro, backstory detalhada (3+ linhas)
- Tasks: description com contexto completo, expected_output com formato exato
- Máximo 5-7 agentes por Crew
- Começar com Process.sequential, evoluir para hierarchical
- Usar {variáveis} para inputs dinâmicos
- verbose=True durante desenvolvimento
- Uma responsabilidade por agente (não misturar pesquisa com escrita)
