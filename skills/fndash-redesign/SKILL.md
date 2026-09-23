---
name: fndash-redesign
description: >
  Use quando for redesenhar, atualizar visuais, criar novos layouts,
  ou modificar tokens CSS do FinDash. Engloba: novo design system,
  micro-interações, animações, responsividade, e qualquer decisão
  visual do dashboard. NÃO usar para lógica de dados ou backend.
---

# FN Dash — Redesign Skill

Governança visual do redesign completo do FinDash, do "Purple Noir"
para um design system moderno dark, inspirado em fintechs premium
(Pierre, Nubank, Mercury).

## Tokens Visuais

### Paleta — "Midnight Teal"

```css
:root {
  /* Backgrounds */
  --bg-deep:      #070A0F;
  --bg-base:      #0B0E14;
  --bg-surface:   #111620;
  --bg-card:      #161C28;
  --bg-elevated:  #1C2435;
  --bg-hover:     #222D42;

  /* Borders */
  --border-subtle:  rgba(56,189,248,0.08);
  --border-default: rgba(56,189,248,0.15);
  --border-strong:  rgba(56,189,248,0.25);
  --border-accent:  rgba(0,212,170,0.4);

  /* Text */
  --text-primary:   #E8ECF1;
  --text-secondary: #94A3B8;
  --text-muted:     #64748B;
  --text-faint:     #475569;

  /* Accent — Teal */
  --accent:         #00D4AA;
  --accent-2:       #38BDF8;
  --accent-dim:     rgba(0,212,170,0.1);
  --accent-border:  rgba(0,212,170,0.3);
  --accent-grad:    linear-gradient(135deg, #00D4AA, #38BDF8);

  /* Semantic */
  --green:    #34D399;
  --green-bg: rgba(52,211,153,0.1);
  --red:      #F87171;
  --red-bg:   rgba(248,113,113,0.1);
  --orange:   #FBBF24;
  --cyan:     #22D3EE;

  /* Shadows */
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(56,189,248,0.05);
  --shadow-md:  0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(56,189,248,0.08);
  --shadow-lg:  0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(56,189,248,0.1);
  --shadow-glow: 0 0 30px rgba(0,212,170,0.2);

  /* Radius */
  --r-xs: 6px;
  --r-sm: 10px;
  --r-md: 14px;
  --r-lg: 20px;
  --r-xl: 28px;
  --r-full: 999px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;

  /* Layout */
  --sidebar-w: 260px;
  --sidebar-collapsed-w: 72px;
  --bottom-nav-h: 72px;
  --topbar-h: 64px;

  /* Motion */
  --ease: cubic-bezier(0.22, 0.61, 0.36, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
}
```

### Tipografia

| Uso | Fonte | Peso |
|-----|-------|------|
| Display/Headings | Space Grotesk | 500-700 |
| Body/Data | DM Sans | 400-600 |
| Monospace/Numbers | JetBrains Mono | 500 |

### Animações

- **Cards:** hover glow + translateY(-4px)
- **Numbers:** counter animation via requestAnimationFrame
- **Page transitions:** fade + slide-up (200ms)
- **Stagger:** 60ms delay per item em grids
- **Skeleton:** shimmer com gradiente teal sutil
- **Toast:** slide-in from right + spring
- **Modals:** scale from 0.95 + fade
- **Sidebar:** width transition com spring easing
- **Bottom nav:** active indicator slide

### Componentes

- Cards: bg `--bg-card`, border sutil, radius `--r-lg`, hover glow
- Buttons: gradient teal primary, ghost com hover bg
- Inputs: bg `--bg-surface`, border `--border-subtle`, focus ring teal
- Pills: bg dim do cor, border 1px solid
- Tables: rows com hover bg, responsive card no mobile
- Modals: backdrop blur, card com spring animation

### Responsividade

- Desktop (>1024px): sidebar fixa + grid 4 cols
- Tablet (768-1024px): sidebar colapsada + grid 2-3 cols
- Mobile (<768px): bottom nav + drawer + grid 1 col

### Acessibilidade

- `prefers-reduced-motion`: desabilitar animações
- Focus ring visível em todos os elementos interativos
- Labels em todos os inputs
- aria-live para updates dinâmicos
- Contrast ratio >= 4.5:1 para texto
