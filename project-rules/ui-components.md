---
globs: "*.tsx,*.jsx,**/*.css"
---
# Regras para UI Components

## Mobile-First obrigatório
- CSS base = mobile, adicionar breakpoints para desktop
- Tailwind: estilos sem prefixo são mobile, use sm:/md:/lg: para desktop
- Touch targets mínimo 44x44px

## Anti "AI Slop"
- PROIBIDO: gradientes blue-500 to purple-600 genéricos
- PROIBIDO: layout hero + 3 cards + CTA padrão (varie o ritmo)
- PROIBIDO: misturar icon libraries (escolha 1: Lucide ou Heroicons)
- PROIBIDO: animações bounce ou delays > 300ms
- Use sombras sutis (shadow-sm para cards, shadow-md para modals)
- Espaçamento: apenas múltiplos de 4px (p-1, p-2, p-3, p-4...)

## Qualidade obrigatória
- Loading states em toda operação async
- Error states com mensagem clara e ação de retry
- Empty states descritivos (não tela branca)
- Dark mode support com `dark:` prefix
- Acessibilidade: aria-labels, keyboard nav, focus visible
- Responsive: testar em 375px, 768px, 1280px

## Componentes
- TypeScript com interface de Props
- Variantes via props (size, variant, color)
- Composição > herança (Compound Components pattern)
- Forwarded refs para componentes base
