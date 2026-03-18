---
description: Faz review visual completo de uma página/componente usando Playwright
---

Faça um **review visual premium** da página: $ARGUMENTS

## Processo:

### 1. Capture a página
Use Playwright para navegar até a URL e tirar screenshot em desktop (1280x800).

### 2. Analise visualmente (olhando o screenshot):

#### Design System Consistency
- Cores consistentes? Paleta coerente?
- Tipografia com hierarquia clara? (h1 > h2 > h3 > body)
- Espaçamentos consistentes? (8px grid system?)
- Componentes seguem o mesmo padrão visual?

#### Layout & Composição
- Alinhamento correto de elementos?
- Grid/flexbox bem estruturado?
- Whitespace adequado? (não apertado, não vazio demais)
- Visual hierarchy clara? (o que é mais importante se destaca?)

#### UI Quality (Anti "AI Slop")
- Gradientes genéricos demais? (azul-roxo padrão de IA)
- Sombras exageradas?
- Border-radius inconsistentes?
- Ícones misturados de diferentes libraries?
- Fontes genéricas? (Inter/Roboto sem personalidade)
- Layout muito "template"? (hero + 3 cards + CTA)

#### Acessibilidade Visual
- Contraste suficiente? (WCAG AA mínimo 4.5:1)
- Textos legíveis? (min 16px body, 14px secondary)
- Estados de foco visíveis?
- Cores não são o único indicador (ex: erro só em vermelho)

#### Polish & Detalhes
- Hover states definidos?
- Transições suaves?
- Loading states?
- Empty states?
- Favicon e metadata?

### 3. Output:
- Score por categoria (0-10)
- Top 5 melhorias de maior impacto
- Código CSS/Tailwind sugerido para cada fix
- Score geral de qualidade visual (0-100)
