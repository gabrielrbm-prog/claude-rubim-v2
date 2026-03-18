---
description: Remove "AI slop" visual e deixa o UI com cara profissional
---

Faça um **polish premium** no UI de: $ARGUMENTS

## O que é "AI Slop" visual (e como eliminar):

### 1. Gradientes genéricos
- ❌ `bg-gradient-to-r from-blue-500 to-purple-600` (o clássico gradient de IA)
- ✅ Cores sólidas com personalidade, ou gradients sutis e intencionais
- Fix: use uma paleta de 2-3 cores com propósito

### 2. Layout "template"
- ❌ Hero gigante → 3 cards → CTA → Footer (toda landing page de IA)
- ✅ Layout que serve o conteúdo, com ritmo visual variado
- Fix: varie tamanhos de seções, use asymmetric grids

### 3. Tipografia sem alma
- ❌ Inter 400 para tudo
- ✅ Contraste tipográfico (bold headers, light body, diferentes sizes)
- Fix: mín 3 font-weights, hierarquia clara

### 4. Sombras exageradas
- ❌ `shadow-2xl` em tudo, glow effects neon
- ✅ Sombras sutis e naturais que criam depth
- Fix: `shadow-sm` para cards, `shadow-md` para modals, `shadow-lg` para dropdowns

### 5. Espaçamento inconsistente
- ❌ Paddings/margins aleatórios
- ✅ Sistema de 4px/8px rigoroso
- Fix: use apenas multiples de 4 (p-2, p-4, p-6, p-8)

### 6. Ícones misturados
- ❌ Lucide + Heroicons + Font Awesome no mesmo projeto
- ✅ Uma library só, estilo consistente (outline ou filled, não mix)
- Fix: padronize em Lucide ou Heroicons

### 7. Animações demais
- ❌ Tudo anima, bounce effects, delays longos
- ✅ Animações com propósito (feedback, transição, atenção)
- Fix: 200-300ms, ease-out, apenas onde melhora UX

### 8. Dark mode como afterthought
- ❌ Cores estranhas no dark, contraste ruim
- ✅ Paleta dark intencional, não inversão automática
- Fix: defina tokens separados para dark mode

## Processo:
1. Leia todos os componentes UI do projeto
2. Identifique cada padrão de "AI slop" acima
3. Aplique os fixes com código concreto
4. Valide com Playwright (screenshot antes/depois)

## Output:
- Lista de "AI slop" encontrado (com arquivo e linha)
- Código corrigido para cada item
- Screenshots antes vs depois
