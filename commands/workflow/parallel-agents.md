---
description: Executa múltiplos agentes em paralelo usando worktrees isoladas
---

Execute a seguinte tarefa usando **agentes em paralelo com worktree isolation**:

## Tarefa: $ARGUMENTS

## Instruções:
1. Analise a tarefa e quebre em sub-tarefas independentes
2. Para cada sub-tarefa, lance um Agent com `isolation: "worktree"` para trabalhar em uma cópia isolada do repositório
3. Lance todos os agentes em paralelo (múltiplos Agent tool calls na mesma mensagem)
4. Quando todos terminarem, consolide os resultados
5. Se algum agente fez mudanças em sua worktree, informe o usuário sobre a branch criada

## Regras:
- Máximo 4 agentes em paralelo
- Cada agente deve ter um objetivo claro e independente
- Use worktree para tarefas que modificam código
- Use agentes normais para tarefas de pesquisa/análise
