---
description: Encontra variantes de um bug conhecido no codebase
---

Encontre **variantes** do seguinte bug/padrão: $ARGUMENTS

## Processo em 5 passos:

### Passo 1: Entenda o bug original
- Qual é a causa raiz?
- Quais condições são necessárias?
- Qual é o impacto/exploitability?
- Documente o padrão exato

### Passo 2: Crie match exato
Busque o padrão exato usando Grep:
- Identifique o código vulnerável
- Crie um pattern que match SOMENTE o bug conhecido
- Confirme que encontra o original

### Passo 3: Identifique pontos de abstração
O que pode ser generalizado?
- Mesmo padrão com funções/métodos diferentes?
- Mesmo fluxo de dados com sources/sinks diferentes?
- Mesmo tipo de erro em módulos diferentes?
- Mesma lógica com variáveis renomeadas?

### Passo 4: Generalize iterativamente
Para cada ponto de abstração:
1. Mude UMA coisa por vez
2. Busque com o pattern generalizado
3. Verifique se os resultados são relevantes
4. Se muito broad, refine
5. Se muito narrow, expanda

Ferramentas por cenário:
| Cenário | Ferramenta | Motivo |
|---------|-----------|--------|
| Busca rápida de superfície | Grep | Rápido, sem setup |
| Pattern matching simples | Semgrep (se disponível) | Syntax fácil |
| Data flow tracking | Análise manual | Segue valores entre funções |
| Cross-function analysis | Análise manual profunda | Melhor interprocedural |

### Passo 5: Analise e faça triage
Para cada variante encontrada:
- **Confiança**: ALTA / MÉDIA / BAIXA
- **Exploitability**: Fácil / Médio / Difícil
- **Prioridade**: P0 (fix now) / P1 (fix soon) / P2 (backlog)
- **Evidence**: arquivo:linha + explicação

## Armadilhas a evitar:
- Escopo muito estreito → busque em TODOS os módulos, não só no original
- Pattern muito específico → perde variantes com nomes diferentes
- Classe única → o root cause pode causar bugs de tipos diferentes
- Ignorar edge cases → teste cenários não-óbvios

## Output:
Relatório markdown com:
1. Bug original (resumo)
2. Padrão generalizado
3. Lista de variantes encontradas (com confiança e prioridade)
4. Recomendação de fix sistêmico (se aplicável)
