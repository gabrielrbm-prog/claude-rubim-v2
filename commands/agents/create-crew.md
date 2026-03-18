---
description: Cria um novo time CrewAI baseado na necessidade
---

Você é um especialista em CrewAI. Crie um time de agentes completo para: $ARGUMENTS

## Siga estas regras:
1. Defina 3-5 agentes com roles específicos
2. Cada agente precisa: role detalhado, goal claro, backstory de 3+ linhas
3. Crie 1 task por agente com description detalhada e expected_output com formato
4. Use Process.sequential
5. Use {variáveis} para inputs dinâmicos
6. Inclua verbose=True

## Template base:
Salve em `crewai-starter/crew_{nome}.py` seguindo o padrão dos arquivos existentes.

## Referência:
Leia `crewai-starter/crew_dev_team.py` como exemplo de formatação e estrutura.
