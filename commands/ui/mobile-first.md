---
description: Converte/cria componentes com abordagem mobile-first real
---

Aplique **mobile-first** de verdade em: $ARGUMENTS

## Princípios Mobile-First:

### 1. CSS Mobile-First
- Base styles = mobile (sem prefixo)
- Adicione complexidade com `sm:`, `md:`, `lg:`, `xl:`
- ❌ `hidden md:block` (esconde no mobile e mostra no desktop)
- ✅ `block md:hidden` (mostra no mobile, esconde no desktop se necessário)

### 2. Touch-First
- Targets mínimos: 44x44px para botões/links
- Espaçamento entre elementos clicáveis: 8px mínimo
- Swipe gestures onde faz sentido (carousels, dismiss)
- Não depender de hover (mobile não tem hover)

### 3. Performance Mobile
- Imagens: use `next/image` com sizes responsivos
- Fonts: max 2 families, subset otimizado
- Lazy loading abaixo do fold
- Skeleton loading ao invés de spinners
- Prefetch de rotas mais prováveis

### 4. Navigation Mobile
- Bottom navigation para ações frequentes
- Hamburger menu para navegação secundária
- Breadcrumbs colapsáveis em mobile
- Back button sempre acessível

### 5. Forms Mobile
- Input types corretos (tel, email, url, number)
- Autocomplete attributes
- Labels visíveis (não placeholder-only)
- Teclado virtual não esconde inputs
- Validação inline, não no submit

### 6. Content Mobile
- Textos concisos (40% menos que desktop)
- Tabelas horizontais scrolláveis ou transformadas em cards
- Imagens full-width em mobile
- Accordion para conteúdo secundário

## Processo:
1. Analise o código atual
2. Identifique violations de mobile-first
3. Refatore para mobile-first (menor para maior)
4. Teste com Playwright em 375px
5. Valide que desktop continua funcionando

## Output:
- Código refatorado mobile-first
- Screenshots mobile (375px) e desktop (1280px)
- Checklist de mobile-first compliance
