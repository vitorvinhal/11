# Design System — "Purple Noir"

## Tokens (usar sempre como CSS custom properties, nunca hardcoded)

```css
:root {
  --bg: #000000;
  --card-bg: #0A0A0A;
  --accent: #6D28D9;
  --accent-glow: rgba(109, 40, 217, 0.35);
  --radius-sm: 10px;
  --radius-lg: 26px;
  --font-heading: 'Syne', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Tokens extendidos (do CSS existente)

```css
:root {
  --bg-base:      #000000;
  --bg-surface:   #050505;
  --bg-elevated:  #0A0A0A;
  --bg-card:      #0A0A0A;
  --bg-hover:     #121212;

  --border-subtle:  rgba(109,40,217,0.15);
  --border-default: rgba(109,40,217,0.25);
  --border-strong:  rgba(109,40,217,0.45);

  --text-primary:   #F3F4F6;
  --text-secondary: #9CA3AF;
  --text-muted:     #6B7280;
  --text-faint:     #4B5563;

  --accent:         #6D28D9;
  --accent-2:       #8B5CF6;
  --accent-dim:     rgba(109,40,217,0.12);
  --accent-border:  rgba(109,40,217,0.35);
  --accent-grad:    linear-gradient(135deg, #6D28D9, #7C3AED, #8B5CF6);

  --green:    #34D399;
  --green-bg: rgba(52,211,153,0.12);
  --red:      #F87171;
  --red-bg:   rgba(248,113,113,0.12);
  --orange:   #FBBF24;
  --cyan:     #22D3EE;

  --shadow-sm: 0 1px 2px rgba(0,0,0,0.6), 0 0 0 1px rgba(109,40,217,0.08);
  --shadow-md: 0 8px 28px rgba(0,0,0,0.5), 0 0 0 1px rgba(109,40,217,0.1);
  --shadow-lg: 0 18px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(109,40,217,0.12), 0 0 60px rgba(109,40,217,0.08);
  --shadow-glow: 0 8px 30px rgba(109,40,217,0.35);

  --r-sm: 10px;
  --r-md: 14px;
  --r-lg: 18px;
  --r-xl: 26px;

  --sidebar-w: 240px;
  --sidebar-collapsed-w: 72px;
  --bottom-nav-h: 72px;
  --ease: cubic-bezier(0.22, 0.61, 0.36, 1);
}
```

## Light mode

Light mode: mesmos tokens, versão clara — **não inventar uma paleta nova**, apenas inverter luminância mantendo `--accent`.

- Preferência de tema salva em `localStorage`, chave única (`fd_theme`).
- Toggle via botão **E** via `Alt+T`.

## Sombras

Sombras usam glow roxo (`box-shadow: 0 0 24px var(--accent-glow)`), **não** sombras pretas genéricas.

## Bordas arredondadas

- 10px em elementos pequenos (inputs, badges)
- Até 26px em cards grandes/modais

## Scrollbar e `::selection`

Customizados com o tom de roxo do accent:

```css
::-webkit-scrollbar{ width: 6px; height: 6px; }
::-webkit-scrollbar-track{ background: #0A0A0A; }
::-webkit-scrollbar-thumb{ background: rgba(109,40,217,0.4); border-radius: 6px; }
::-webkit-scrollbar-thumb:hover{ background: rgba(109,40,217,0.6); }
::selection{ background: rgba(109,40,217,0.4); color: #fff; }
```

---

## Componentes padrão (reutilizar, não recriar por módulo)

### Card
- `--card-bg`, borda sutil, `--radius-lg`, usado para todo bloco de conteúdo (KPI, item de lista, formulário).
- Hover: `transform: translateY(-4px)`, borda `#7C3AED`, `box-shadow` glow.

### Modal
- Fundo `--card-bg`, focus trap obrigatório, fecha com `Escape`.
- Animação: `popIn` (0.28s ease).
- Largura máxima: 560px, max-height 90vh com scroll.

### Toast
- Usado tanto para sucesso quanto para erro (ver `ux-and-notifications.md`).
- Animação slide-in/slide-out.

### Badge
- Para status (Ativo/Em Desenvolvimento, canal de venda, categoria).
- Classes: `.pill.green`, `.pill.red`, `.pill.amber`, `.pill.blue`, `.pill.purple`.

---

## Tipografia

| Uso | Fonte | Peso |
|-----|-------|------|
| Títulos/headings | Syne | 600-800 |
| Corpo/texto | Inter | 300-800 |

Não introduzir uma terceira fonte sem necessidade explícita do usuário.

---

## Grid e responsividade

- Breakpoints fixos: `768px` (mobile/tablet) e `1024px` (tablet/desktop).
- Desktop: sidebar fixa + área de conteúdo em grid responsivo.
- Tablet: layout adaptado (sidebar ainda visível, grid menos colunas).
- Mobile: sidebar vira drawer + bottom nav aparece.
- Alvo de toque mínimo: 44px em qualquer elemento clicável no mobile.

---

## Sidebar & navegação

- Estado colapsável (expandido/colapsado) persistido.
- Drawer no mobile.
- Bottom nav exclusivo do mobile — não duplicar itens que já estão na sidebar quando ela está visível.
- Atalhos: `Alt+N` nova entrada, `Alt+T` tema, `Alt+S` sidebar, `Escape` fecha modal — registrar globalmente uma vez só (não por componente).

---

## Animações

- Motor de animação via `requestAnimationFrame`, **não** `setInterval`/CSS puro para animações numéricas (contadores).
- Easings customizados: ease-out, ease-in, ease-in-out, bounce — reutilizar as mesmas funções em todo o app.
- Stagger em grids de cards (delay incremental por item).
- Fade-in de página na troca de módulo.
- Sempre checar `prefers-reduced-motion` e desativar/reduzir animação quando o usuário tiver essa preferência no SO.
