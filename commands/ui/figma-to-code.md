---
description: Converte um design do Figma em código pixel-perfect
---

Converta o design do Figma em código: $ARGUMENTS

## Processo:

### 1. Extraia o design do Figma
Use o Figma MCP para ler o arquivo/frame especificado.
Extraia: cores, tipografia, espaçamentos, componentes, layout.

### 2. Analise a estrutura
- Identifique componentes reutilizáveis
- Mapeie a hierarquia de layout (grid, flex, stack)
- Note os breakpoints implícitos no design
- Identifique design tokens (cores, shadows, border-radius, spacing)

### 3. Gere o código
- **Stack**: React + TypeScript + Tailwind CSS
- **Mobile-first**: comece pelo layout mobile, adicione breakpoints
- **Componentes**: cada componente em arquivo separado, tipado
- **Design tokens**: extraia para `tailwind.config.ts` ou CSS variables
- **Pixel-perfect**: respeite exatamente espaçamentos, cores, fontes do Figma

### 4. Valide
- Abra no Playwright e compare visualmente com o Figma
- Teste em mobile (375px) e desktop (1280px)
- Verifique acessibilidade básica

### 5. Output:
- Componentes React prontos para usar
- Configuração Tailwind com design tokens
- Screenshot do resultado vs original do Figma
