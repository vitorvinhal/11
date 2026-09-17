# 11 – Ecossistema IA gratuito e imersivo

## Visão geral
A **11** é uma IA de mente única, totalmente autônoma e sem custos, que conecta PC, celular e web através de um túnel Cloudflare seguro. Possui visual galáctico inspirado no GPT‑4o Astra/Nexomic, gera código full‑stack, cria mídia, e evolui seu próprio código.

## Tecnologias principais
- **Frontend Web**: Next.js 13 (App Router) + TypeScript + Tailwind CSS + Shadcn UI
- **Mobile**: Capacitor + React (WebView) – OTA via Vercel
- **Desktop**: Tauri + React (TypeScript)
- **Backend**: NestJS (TypeScript) + Supabase (PostgreSQL + pgvector)
- **IA**: 9Router (gateway local) + fallback Google Gemini (gratuito)
- **Tunnel**: Cloudflare Tunnel (token‑protected)
- **Motion & Visual**: Three.js + GLSL shaders + GSAP/Framer Motion
- **CI/CD**: GitHub Actions → Vercel Deploy + Supabase migrations

## Começar (gratuito)
1. **Clone**
   ```bash
   git clone https://github.com/SEU_USUARIO/11.git && cd 11
   ```
2. **Instale dependências** (pnpm recomendado)
   ```bash
   npm i -g pnpm && pnpm install
   ```
3. **Configure variáveis de ambiente**
   ```bash
   cp .env.example .env
   # preencha SUPABASE_*, CF_TUNNEL_TOKEN, 9ROUTER_TOKEN, VERCEL_TOKEN
   ```
4. **Supabase** – crie um projeto gratuito e rode migrations:
   ```bash
   npx supabase db push
   ```
5. **Inicie o túnel**
   ```bash
   cd infra/tunnel && ./start.sh
   ```
6. **Rodar apps**
   ```bash
   pnpm dev:web      # http://localhost:3000
   pnpm dev:mobile   # expo start (WebView)
   pnpm dev:desktop  # pnpm tauri dev
   ```
7. **Autentique** – Magic Link Supabase (login@example.com) e experimente a IA.

## Estrutura do monorepo
```
/11
├─ apps/      # web, mobile, desktop
├─ packages/  # api (NestJS), ia (router & tools), shared, cli
├─ infra/     # vercel, supabase migrations, tunnel scripts
└─ turbo.json
```

## Documentação detalhada
- **Infraestrutura**: `infra/README.md`
- **API**: `packages/api/README.md`
- **IA Core**: `packages/ia/README.md`
- **Visual Astra**: `apps/web/src/components/AstroSphere.tsx`
- **CLI**: `packages/cli/README.md`

## Licença
MIT – 100 % gratuito.
