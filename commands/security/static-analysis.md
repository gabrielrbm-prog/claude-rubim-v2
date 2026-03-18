---
description: Scan de segurança completo com Semgrep (CodeQL se disponível)
---

Execute um **scan de segurança estático** em: $ARGUMENTS

## Processo:

### Fase 1: Reconhecimento
1. Identifique as linguagens do projeto (Python, JS/TS, Go, Java, etc.)
2. Mapeie entrypoints (APIs, CLI, handlers)
3. Identifique dependências externas

### Fase 2: Semgrep Scan
Execute Semgrep com rulesets de segurança:
```bash
# Verifique se semgrep está instalado
semgrep --version || pip install semgrep

# Scan com regras de segurança
semgrep scan --config=auto --severity=ERROR --severity=WARNING --json --output=semgrep-results.json .

# Se disponível, use regras específicas
semgrep scan --config=p/owasp-top-ten --config=p/security-audit .
```

### Fase 3: CodeQL (se disponível)
```bash
# Verifique se codeql está instalado
codeql --version 2>/dev/null && echo "CodeQL available"
```
Se CodeQL disponível:
1. Crie database: `codeql database create codeql-db --language=<lang>`
2. Analise: `codeql database analyze codeql-db --format=sarif-latest --output=codeql-results.sarif`

### Fase 4: Análise Manual Complementar
Use Grep para buscar padrões perigosos:
- SQL injection: concatenação de strings em queries
- XSS: output sem sanitização
- Command injection: exec/spawn com input de usuário
- Path traversal: file operations com input de usuário
- Hardcoded secrets: tokens, passwords, API keys
- Insecure deserialization: pickle.loads, eval, JSON.parse em dados não confiáveis

### Fase 5: Relatório
Para cada finding:
1. **Severidade**: CRITICAL / HIGH / MEDIUM / LOW
2. **Arquivo:Linha**: localização exata
3. **Descrição**: o que está errado
4. **Impacto**: o que um atacante poderia fazer
5. **Fix**: código corrigido
6. **CWE**: referência CWE quando aplicável

## Regras:
- Zero findings precisa de investigação, não celebração
- Priorize: auth > crypto > injection > info disclosure
- Sempre forneça o fix, não só o problema
- False positives devem ser marcados como tal com justificativa
