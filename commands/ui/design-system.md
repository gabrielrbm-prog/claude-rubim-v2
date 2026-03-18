---
description: Cria ou valida design system/tokens a partir de um projeto existente
---

Analise e crie um **design system** para: $ARGUMENTS

## Processo:

### 1. Extraia tokens do código existente
Procure por padrões de:
- **Cores**: classes Tailwind, CSS variables, hex/rgb values
- **Tipografia**: font families, sizes, weights, line-heights
- **Espaçamento**: margins, paddings, gaps
- **Sombras**: box-shadow values
- **Border-radius**: valores usados
- **Breakpoints**: media queries, Tailwind responsive prefixes

### 2. Identifique inconsistências
- Cores similares mas diferentes (ex: #333 e #2d2d2d)
- Espaçamentos fora do grid (ex: 13px, 17px)
- Tipografia sem hierarquia clara
- Sombras diferentes para mesmo tipo de componente

### 3. Gere o Design System
Crie `tailwind.config.ts` com:
```
colors: { primary, secondary, accent, neutral, success, warning, error }
spacing: { sistema 4px }
fontSize: { hierarquia completa }
borderRadius: { sm, md, lg, full }
boxShadow: { sm, md, lg, xl }
```

### 4. Crie componentes base
- Button (primary, secondary, ghost, sizes)
- Input (text, select, checkbox, radio)
- Card (com header, body, footer)
- Badge (status colors)
- Typography (h1-h6, body, caption)

### 5. Output:
- `tailwind.config.ts` com tokens
- CSS variables file
- Componentes base em React + TypeScript
- Guia de uso (quando usar cada variante)
