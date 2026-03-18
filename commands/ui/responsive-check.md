---
description: Testa a responsividade de uma página em 4 viewports (mobile, tablet, desktop, wide)
---

Faça um **teste de responsividade** completo da página: $ARGUMENTS

## Processo:

### 1. Abra a página no Playwright
Use `browser_navigate` para abrir a URL fornecida.

### 2. Teste nos 4 breakpoints padrão
Para cada viewport, use `browser_resize` e depois `browser_take_screenshot`:

| Dispositivo | Largura | Altura |
|---|---|---|
| Mobile (iPhone SE) | 375 | 667 |
| Tablet (iPad) | 768 | 1024 |
| Desktop | 1280 | 800 |
| Wide (ultrawide) | 1920 | 1080 |

### 3. Para cada viewport, analise:
- Layout está correto? Elementos não estão sobrepostos?
- Textos estão legíveis? Não cortados?
- Navegação está acessível? Menu mobile funciona?
- Imagens estão proporcionais?
- Espaçamentos estão adequados?
- Botões e links têm tamanho mínimo de toque (44x44px em mobile)?
- Scroll horizontal indesejado?

### 4. Output:
Relatório com:
- Screenshot de cada viewport
- Issues encontrados por viewport (com severidade)
- Sugestões de CSS/Tailwind para corrigir
- Score geral de responsividade (0-100)
