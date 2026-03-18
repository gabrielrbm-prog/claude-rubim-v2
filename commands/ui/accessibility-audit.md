---
description: Auditoria completa de acessibilidade (WCAG 2.1 AA)
---

Faça uma **auditoria de acessibilidade** de: $ARGUMENTS

## Processo:

### 1. Analise o código
Use Glob/Grep/Read para encontrar componentes de UI e analisar:

#### Semântica HTML
- Headings em ordem correta? (h1 → h2 → h3, sem pular)
- Landmarks corretos? (nav, main, aside, footer)
- Listas para itens repetidos? (ul/ol, não divs)
- Botões vs links usados corretamente?
- Formulários com labels associados?

#### Interatividade
- Todos os elementos interativos focáveis?
- Focus visible em todos os elementos?
- Tab order lógica?
- Keyboard shortcuts para ações comuns?
- Skip links para navegação?
- Modais prendem o foco?

#### Visual
- Contraste mínimo 4.5:1 para texto normal?
- Contraste mínimo 3:1 para texto grande (18px+)?
- Texto redimensionável até 200% sem quebrar layout?
- Informação não depende só de cor?
- Animações respeitam `prefers-reduced-motion`?

#### ARIA
- `aria-label` em elementos sem texto visível?
- `aria-expanded` em accordions/dropdowns?
- `aria-live` para conteúdo dinâmico?
- `role` correto em componentes custom?
- `aria-describedby` para mensagens de erro?

#### Imagens e Mídia
- `alt` text descritivo em todas as imagens?
- Imagens decorativas com `alt=""`?
- Captions em vídeos?

### 2. Teste com Playwright
Use `browser_snapshot` para obter a accessibility tree e verificar:
- Todos os elementos têm nomes acessíveis?
- Roles estão corretos?
- Estados (expanded, selected, checked) comunicados?

### 3. Output:
- Issues por severidade (CRITICAL / HIGH / MEDIUM / LOW)
- WCAG criterion violado para cada issue
- Fix sugerido com código
- Score de acessibilidade (0-100)
- Checklist WCAG 2.1 AA completo
