# Master Engineering Directive — 11

## Documentation Map (read first)

Business and process docs live under `docs/` — see `docs/README.md` for the full map:

- `docs/prd/PRD.md` — business vision (no tech).
- `docs/adr/` — architecture decisions (create only on real impact).
- `docs/specs/` — line-by-line spec **before** developing a feature.
- `docs/plan/PLAN.md` — living checklist of the current patch.
- `docs/agents/` — roles + developer→tester→reviewer loop.
- `AGENTS.md` — operational context (Codex/CLI) + Brain deploy monopoly.

Never develop a feature without a spec. Gate = `pnpm -r lint && pnpm -r build && pnpm -r test` (`pnpm -r typecheck` is broken at root — do not use).

## Identity & Context

This is the **11** monorepo — an autonomous AI assistant platform. Architecture: Next.js 13 web app, Tauri desktop, Capacitor mobile, shared `@11/ia` package.

**Stack:** TypeScript, Supabase (auth + DB + storage), 9Router AI gateway, Vercel deployment.

## Core Principles

1. **Resilience over perfection** — Every feature must degrade gracefully. Never show blank screens. Always show meaningful error states.
2. **Platform parity** — Features must work on desktop-web, desktop-app, mobile-web, mobile-app unless explicitly excluded.
3. **Auth first** — Every API route must check authentication. No exceptions.
4. **Best-effort persistence** — Chat, memories, usage tracking are best-effort. Never block user interaction for background writes.
5. **No silent failures** — Every catch block must log. Every error boundary must show fallback UI.

## Code Conventions

- **Components:** `'use client'` at top. Functional components only. Lazy-load heavy deps (xterm, force-graph).
- **API routes:** `export const runtime = "nodejs"; export const dynamic = "force-dynamic";`
- **Styling:** Tailwind + inline styles for OLED theme (`#05050A` background, glassmorphism, `#00e5ff` accent).
- **State:** `useState` + `useRef` for mutable state. `useCallback` for stable references.
- **Error handling:** `try/catch` with `console.error`. Never swallow silently.
- **No comments** in code unless explaining non-obvious logic.

## Architecture

```
apps/web/          → Next.js 13 (App Router)
apps/desktop/      → Tauri (Rust + WebView)
apps/mobile/       → Capacitor (iOS/Android)
packages/ia/       → Shared AI logic (router, skills, plugins, metrics)
packages/api/      → Shared API types
packages/shared/   → Shared utilities
infra/             → Supabase migrations, deploy scripts
```

## Platform Detection

```typescript
// apps/web/src/lib/platform.ts
type Platform = "desktop-app" | "mobile-app" | "desktop-web" | "mobile-web";
// Detection: __TAURI__ → desktop-app, Capacitor → mobile-app, UA regex → mobile-web, else → desktop-web
```

## Navigation Items

All nav items in `Sidebar.tsx` must specify `platforms` array. Default: all platforms.

| ID         | Label           | Platforms                            |
| ---------- | --------------- | ------------------------------------ |
| conversas  | Conversas       | desktop-app, desktop-web, mobile-web |
| projetos   | Projects        | desktop-app, desktop-web             |
| artifacts  | Artifacts       | desktop-app, desktop-web             |
| canvas     | Canvas          | desktop-app, desktop-web             |
| code       | Code & Terminal | desktop-app, desktop-web, mobile-app |
| coder      | Eleven Coder    | desktop-app, desktop-web, mobile-app |
| neural     | Rede Neural     | desktop-app, desktop-web             |
| memoria    | Memória         | desktop-app, desktop-web, mobile-web |
| finops     | FinOps          | desktop-app, desktop-web             |
| skills     | Skills          | desktop-app, desktop-web             |
| connectors | Connectors      | desktop-app, desktop-web             |
| media      | Mídia           | desktop-app, desktop-web, mobile-web |
| agent      | Agente PC       | desktop-app                          |
| mobile     | Agente Mobile   | mobile-app, mobile-web               |
| plugins    | Plugins         | desktop-app, desktop-web             |

## API Routes Pattern

Every route must:

1. Import `loadRootEnv()` and call it at top
2. Export `runtime = "nodejs"` and `dynamic = "force-dynamic"`
3. Use `requireUser(req)` for auth (returns `{ userId }` or null)
4. Return proper HTTP status codes (401, 400, 404, 500, 502)
5. Use `createClient(SUPABASE_URL, SERVICE_ROLE_KEY)` for admin operations

## Terminal Architecture

- **REST+SSE** pattern (NOT socket.io)
- `POST /api/terminal/exec` → spawns process, returns SSE stream
- `GET /api/terminal/exec?sessionId=X` → returns current cwd
- xterm.js with FitAddon, WebLinksAddon
- Command whitelist in `terminal-validate.ts`

## Chat Provider Cascade

```
9Router (tunnel → endpoint → Arcenal → fallbacks) → Gemini → Anthropic → Ollama (local)
```

Each provider is a function: `route9Router()`, `routeGemini()`, `routeAnthropic()`, `routeOllama()`.

## Settings Structure (7 tabs)

1. **Geral** — Avatar, name, instructions, changelog, backup
2. **Conta** — Email, password, delete account
3. **Aparência** — Theme, fonts, motion
4. **IA Provider** — 9Router keys + Ollama config
5. **Sessões** — Active devices, revoke
6. **Privacidade** — Incognito, export, capabilities
7. **Customização** — Skills | Connectors | Plugins

## Forbidden Patterns

- ❌ `console.log` in production code (use `console.error` or `console.warn`)
- ❌ `any` type without justification
- ❌ Hardcoded secrets or API keys
- ❌ Silent `catch {}` without logging
- ❌ `Promise.all` where `Promise.allSettled` is more appropriate
- ❌ Socket.io (use REST+SSE)
- ❌ CSS-in-JS libraries (use Tailwind + inline)

## Deploy Pipeline

1. `git push` → triggers Vercel preview deploy
2. Preview URL tested manually
3. Merge to main → production deploy
4. Post-deploy: smoke test chat, terminal, settings

## Emergency Procedures

- **Chat down:** Check ngrok tunnel, 9Router gateway, API keys
- **Terminal down:** Check `/api/terminal/exec` endpoint, spawn permissions
- **Auth down:** Check Supabase URL, anon key, service role key
- **Vercel down:** Check build logs, environment variables, function limits
