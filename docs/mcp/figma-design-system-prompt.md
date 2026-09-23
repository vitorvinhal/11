# Prompt — Design System completo no Figma via MCP

Requer MCP `figma` ativo (ver [README.md](README.md)). Funciona no Claude Code,
Cursor, Antigravity, Trae, Copilot — qualquer IDE com MCP.

Cole, preencha os colchetes e execute:

---

Você tem acesso ao Figma MCP. Seu trabalho é criar um Design System completo diretamente no Figma para o meu projeto.

## INFORMAÇÕES DO PROJETO

- Nome: [nome do projeto]
- O que faz: [descrição curta]
- Pra quem: [público-alvo]
- Sensação visual: [ex: clean e profissional / dark e sofisticado]
- Referências visuais: [ex: Linear, Notion, Spotify, Raycast]

## O QUE CRIAR NO FIGMA

### 1. VARIÁVEIS — Color Primitives

Crie uma collection "Primitives" com 12-16 cores base que refletem a identidade do projeto:

- Neutros (4-5): do mais escuro ao branco
- Cinzas (2-3): tons intermediários
- Cor principal da marca (3-4 variações: light, base, dark)
- Cor de acento/destaque (1-2)
- Cor de erro/perigo (1)

### 2. VARIÁVEIS — Semantic Color Tokens

Crie uma collection "Color" com tokens semânticos apontando para os primitives. Dois modos: Light e Dark. Grupos:

- **text (5):** primary, secondary, muted, on-dark, brand
- **surface (5):** page, sidebar, card, elevated, canvas
- **action (3):** primary, primary-hover, secondary
- **border (3):** default, subtle, focus
- **status (3):** success, warning, error
- **brand (4):** [plataformas relevantes do projeto]

### 3. VARIÁVEIS — Spacing

Collection "Spacing": space-1 (4px), space-2 (8), space-3 (12), space-4 (16), space-6 (24), space-8 (32), space-10 (40), space-12 (48), space-16 (64), space-20 (80), space-24 (96), space-32 (128), space-40 (160).

### 4. TEXT STYLES

- heading/1 a heading/4 (display, bold/semibold)
- body/base, body/small (UI, regular)
- label, caption (UI, medium, tamanhos menores)

### 5. EFFECT STYLES

- shadow (cards e elementos elevados)

### 6. COMPONENTES (usando variáveis semânticas)

- **Button** — variantes: primary, secondary, outline, ghost, link, destructive; tamanhos sm/md/lg; estados default/hover/active/disabled
- **Badge** — default, success, warning, error, outline
- **Avatar** — sm/md/lg, com e sem imagem (fallback com iniciais)
- **Card** — surface-card + border-default + shadow, padding space-6

### 7. PÁGINA FOUNDATIONS

Página "Foundations" documentando: Colors (swatches primitives + semantic por grupo), Typography (exemplo de cada text style), Components (cada componente com todas as variantes visíveis).

## REGRAS

- Use APENAS variáveis semânticas nos componentes, nunca hex direto
- Todo componente com auto layout
- Nomeie em inglês, lowercase, com `/` para grupos (ex: text/primary, surface/card)
- Ordem: primitives → semantic tokens → componentes → página Foundations
