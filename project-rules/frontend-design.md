---
globs: "*.tsx,*.jsx,*.html,*.css,*.vue,*.svelte"
---
# Frontend Design Skill (Anthropic Official)

This rule guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics.

## Design Thinking (BEFORE coding)
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick a BOLD direction: brutally minimal, maximalist, retro-futuristic, organic, luxury, playful, editorial, brutalist, art deco, soft/pastel, industrial
- **Differentiation**: What makes this UNFORGETTABLE?

## Frontend Aesthetics Guidelines
- **Typography**: Choose distinctive fonts. AVOID generic (Inter, Roboto, Arial, system fonts). Pair display font with refined body font.
- **Color & Theme**: Commit to cohesive aesthetic. CSS variables for consistency. Dominant colors with sharp accents > timid even palettes.
- **Motion**: High-impact moments: staggered page load reveals (animation-delay), scroll-triggered effects, surprising hover states. CSS-only preferred for HTML.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Details**: Gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, custom cursors, grain overlays.

## NEVER (AI Slop Patterns)
- Overused fonts (Inter, Roboto, Arial)
- Purple-to-blue gradients on white backgrounds
- Hero + 3 cards + CTA template layout
- shadow-2xl everywhere, glow neon effects
- Mixing icon libraries
- Bounce animations, delays > 300ms
- Generic dark mode (just color inversion)

## ALWAYS
- Mobile-first CSS (base = mobile, sm:/md:/lg: for desktop)
- Touch targets min 44x44px
- Loading states on async operations
- Error states with clear message + retry action
- Empty states (not blank screens)
- Accessible: aria-labels, keyboard nav, focus visible
- Dark mode with intentional palette (dark: prefix)
