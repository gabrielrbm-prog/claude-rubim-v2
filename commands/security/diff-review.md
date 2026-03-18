---
description: Review de segurança focado em diffs/PRs/commits
---

Faça um **review de segurança** das mudanças em: $ARGUMENTS

## Princípios:
1. **Risk-First** — Foque em auth, crypto, transferência de valor, calls externas
2. **Evidence-Based** — Todo finding com arquivo:linha e git history
3. **Adaptativo** — Escale pela quantidade de arquivos
4. **Honesto** — Declare limites de cobertura

## Escala por tamanho:
| Tamanho | Abordagem |
|---------|-----------|
| <20 arquivos | DEEP — leia todas as deps, full git blame |
| 20-200 arquivos | FOCUSED — 1-hop deps, arquivos prioritários |
| 200+ arquivos | SURGICAL — critical paths only |

## Processo:

### Fase 0: Triage
1. Liste todos os arquivos modificados
2. Classifique risco de cada arquivo:
   - CRITICAL: auth, crypto, pagamentos, permissões
   - HIGH: APIs, database queries, file I/O, user input
   - MEDIUM: business logic, configuração
   - LOW: UI, testes, docs

### Fase 1: Code Analysis
Para cada arquivo (maior risco primeiro):
- O que mudou e por quê?
- Input validation adequado?
- Error handling correto?
- Race conditions possíveis?
- Dados sensíveis expostos?

### Fase 2: Test Coverage
- Testes cobrem os novos code paths?
- Edge cases testados?
- Testes negativos (inputs inválidos)?

### Fase 3: Blast Radius
- Quantos callers dependem do código modificado?
- Mudança quebra contratos/interfaces?
- Side effects em outros módulos?

### Fase 4: Adversarial Thinking
Pense como atacante:
- Posso bypass a nova validação?
- Posso forçar um code path não testado?
- A mudança abre uma superfície de ataque nova?

## Red Flags (PARE e investigue):
- Código removido de commits com "security", "CVE", ou "fix"
- Access control removido (ex: onlyOwner → public)
- Validação removida sem substituição
- External calls adicionadas sem checks
- High blast radius (50+ callers) + risco HIGH

## Output:
Relatório com:
1. **Resumo** — 2-3 frases sobre as mudanças
2. **Risk Assessment** — tabela de arquivos com classificação
3. **Findings** — problemas encontrados (severidade + fix sugerido)
4. **Cobertura** — o que foi revisado vs o que não foi
5. **Veredicto** — APPROVE / REQUEST CHANGES / BLOCK
