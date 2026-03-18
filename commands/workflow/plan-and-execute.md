---
description: Planeja uma implementação complexa antes de executar
---

Planeje e execute: $ARGUMENTS

## Fase 1 — Planejamento (use Agent com subagent_type=Plan)
1. Analise o escopo completo da tarefa
2. Identifique todos os arquivos que serão afetados
3. Liste os passos de implementação em ordem
4. Identifique riscos e dependências
5. Apresente o plano ao usuário para aprovação

## Fase 2 — Execução (só após aprovação)
1. Implemente cada passo do plano aprovado
2. Teste cada mudança incrementalmente
3. Use commits atômicos (1 commit por passo lógico)

## Regras:
- NUNCA pule a fase de planejamento
- Se o plano tiver mais de 10 passos, quebre em fases
- Pergunte ao usuário se houver ambiguidade
