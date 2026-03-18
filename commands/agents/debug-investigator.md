---
description: Investiga e resolve bugs de forma metódica
allowed-tools: Read, Glob, Grep, Bash, Agent
---

Investigue e resolva o bug: $ARGUMENTS

## Método de investigação:

### 1. Reproduzir
- Entenda os sintomas descritos
- Localize o código relevante
- Tente reproduzir mentalmente o fluxo que causa o bug

### 2. Diagnosticar
- Trace o fluxo de dados do input ao output
- Identifique onde o comportamento diverge do esperado
- Verifique: dados corretos? Lógica correta? Estado correto?

### 3. Hipóteses
- Liste 3 possíveis causas (mais provável primeiro)
- Para cada hipótese, identifique como confirmar ou descartar

### 4. Confirmar
- Teste cada hipótese na ordem
- Quando encontrar a causa raiz, explique claramente

### 5. Corrigir
- Implemente o fix mais simples e correto
- Adicione teste que previne regressão
- Verifique se o fix não quebra nada

## Output: Explique o que causava o bug, o que foi corrigido, e o teste adicionado.
