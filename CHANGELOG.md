# Changelog ΓÇö 11

Todas as altera├º├╡es significativas s├úo documentadas aqui.
O versionamento segue: `v0.{MAIOR}.{MENOR}-{canal}` (alpha ΓåÆ rc ΓåÆ est├ível).

Vers├úo atual em `apps/web/public/version.json`. Bump autom├ítico:

```bash
pnpm version:patch   # v0.6.0-alpha ΓåÆ v0.6.1-alpha
pnpm version:minor   # v0.6.0-alpha ΓåÆ v0.7.0-alpha
pnpm version:major   # v0.6.0-alpha ΓåÆ v1.0.0-alpha
pnpm version:rc      # patch e troca canal para rc
```

Bump com notas de release:

```bash
node scripts/version.js minor --change "Multi-tenancy: auth reutiliz├ível + ownership checks"
```

---

## v2.12.2-alpha ΓÇö 2026-09-22

- Re-trigger do agente ap├│s aprova├º├úo: job aprovado e executado volta ao chat com o resultado (agent-bus + ChatPanel)
- PC Agent: CORS default com mais origens; novas chaves settings (timezone set/get, region); spawn no Tauri com JWT_SECRET default local
- Builds: APK release assinado (6.4MB), instaladores desktop 2.12.1; sa├¡da do servidor Node separada em dist-server (vite j├í n├úo apaga server.js)
- Deploy em produ├º├úo: merge na main (PR #2) + buildCommand do Vercel cwd-independente ΓåÆ produ├º├úo live (11-app-sage.vercel.app)
- Builds 2.12.2: URLs padr├úo apontando p/ produ├º├úo; permiss├╡es iOS (c├ómera/fotos/microfone) prontas no Capacitor; /downloads atualizados
- **Eleven Code = Orca**: UI completa do Orca (stablyai/orca) embutida como bundle ├║nico na aba "Eleven Code" (sem iframe/servidor pr├│prio); sistema legacy "Eleven Coder" + Monaco/XTerm removidos; bundle regenerado no deploy via `scripts/build-orca-bundle.mjs` (clone pinned `e476193b` → `vite.eleven.config.ts` → `mountOrca`) com fallback resiliente (status 0) no buildCommand do Vercel; lint 0 erros · testes web 130/130 · build OK
- fix(ci): node 24 no GitHub Actions (Playwright exige 20+); webhooks usa `node:crypto` (compat node 18)

## v2.12.1-alpha ΓÇö 2026-09-21

- Downloads da nova vers├úo hospedados no site (/downloads): 11-desktop-setup.exe, 11-desktop.msi e 11-mobile.apk ΓÇö /api/updates aponta para eles por padr├úo

## v2.12.0-alpha ΓÇö 2026-09-21

- Sistema de atualiza├º├úo no app (mobile e desktop): notifica├º├úo de nova vers├úo, badge no perfil, aba Atualiza├º├╡es com download
- Nova rota GET /api/updates (vers├úo + changelog + links de download por plataforma)
- Update client: versionCode como refer├¬ncia; acknowledge/notify persistido; notifica├º├úo nativa via DeviceBridge (mobile) e PC Agent/browser (desktop)

## v2.11.0-alpha ΓÇö 2026-09-19

### Agente de Dispositivo (PC + Mobile) ΓÇö TASK-DEVICE-001

- Agente PC e Agente Mobile agora s├úo **agentes de dispositivo 100% funcionais** (base: nousresearch/hermes-agent, MIT): acesso a arquivos, fotos/m├¡dia, apps, configura├º├╡es, captura de tela e estado do sistema no dispositivo.
- **Visibilidade nativa pura**: `Agente PC` s├│ em `desktop-app` (Tauri), `Agente Mobile` s├│ em `mobile-app` (Capacitor). Escondidos em qualquer browser.
- **Pareamento real**: `devices` (deviceId persistente + secret) via `/api/devices/register`; deviceId em localStorage, segredo retornado uma ├║nica vez.
- **Fila de jobs** `device_jobs` no Supabase + polling HTTP por dispositivo (transport Vercel-compat├¡vel; WS serverless n├úo suportado) com rotas `poll`, `result`, `approve`.
- **Function calling ligado**: adapter 9Router agora envia `tools` e parseia `tool_calls`; agentLoop exp├╡e 21 tools `device.*` e roteia pelos jobs; aprova├º├úo DESTRUCTIVE ΓåÆ `awaiting_approval` ΓåÆ UI.
- **PC (desktop)**: executor de tools em `device-tools.ts` (Windows/Node+PowerShell), rotas `/device/pair` + `/device/tool`, spawn autom├ítico dos servi├ºos locais no boot do Tauri.
- **Mobile**: 8 plugins Capacitor instalados (filesystem, camera, device, network, clipboard, app, preferences, local-notifications) + `DeviceBridge` injetado no WebView executando tools nativamente.
- **UI**: pain├⌐is Agente PC/Mobile reescritos (status, jobs em execu├º├úo, aprova├º├╡es, hist├│rico, comando r├ípido); chat usa `/api/agent` com deviceId nos apps nativos; fix do painel mobile que chamava rota inexistente `/api/agent/mobile`.
- Testes: 3 novos no adapter 9Router (tools no body, parse tool_calls, retrocompat) ΓÇö 257 total no `@11/ia`.

## v2.10.15-alpha ΓÇö 2026-09-19

- Fix build Vercel: caminho dos scripts no buildCommand ΓÇö cwd do Vercel ├⌐ `apps/web` (rootDirectory), paths corrigidos para `../../scripts/*`; scripts `clear-next-cache.mjs`/`build-monaco-workers.mjs` agora detectam cwd e limpam/geram no lugar certo

## v2.10.14-alpha ΓÇö 2026-09-19

- Fix definitivo build Vercel (`Hash.update(undefined)`): workers do Monaco deixam de ser assets do webpack
- Novo `scripts/build-monaco-workers.mjs` (esbuild): pr├⌐-bundle standalone dos 5 workers + `onig.wasm` ΓåÆ `apps/web/public/vs/`
- `monaco-setup.ts`/`textmate-token-provider.ts` apontam para `/vs/*` (sem `new URL(..., import.meta.url)`)
- `apps/web/public/vs/` adicionado ao `.gitignore` (gerado no build); `esbuild` no root devDeps

## v2.10.13-alpha ΓÇö 2026-09-19

- Fix build Vercel intermitente (`uncaughtException Hash.update(undefined)` no webpack do Next 13.5, erro de cache incremental)
- Novo `scripts/clear-next-cache.mjs`: limpa `.next` antes do `next build` no buildCommand do Vercel ΓåÆ build determin├¡stico (sem cache corrompido)

## v2.10.12-alpha ΓÇö 2026-09-19

- Eleven Code (CodeWorkspace) agora abre no modo Editor (Monaco) por padr├úo ΓÇö antes abria no terminal
- Sidebar: aba "Code & Terminal" renomeada para "Eleven Code" (editor Monaco + terminal integrado via Ctrl+`)

## v2.10.11-alpha ΓÇö 2026-09-19

- Fix deploy Vercel: removida propriedade `rootDirectory` do `vercel.json` (inv├ílida no schema atual) ΓÇö root est├í no project settings; deploys autom├íticos do GitHub voltaram a passar
- Produ├º├úo atualizada: `11-app-sage.vercel.app`

## v2.10.10-alpha ΓÇö 2026-09-19

- Sem notas de release.

## v2.10.9-alpha ΓÇö 2026-09-19

- Novo `TerminalPane.tsx`: terminal xterm integrado reutiliz├ível (REST+SSE, busca Ctrl+F via addon-search) ΓÇö estilo Orca
- Eleven Code (CodePanel): split editor+terminal (bot├úo Terminal / Ctrl+`), mesmo conceito do workbench do Orca
- Eleven Coder: busca no buffer com `@xterm/addon-search` (Ctrl+F, prev/next com wrap)

## v2.10.8-alpha ΓÇö 2026-09-19

- Sem notas de release.

## v2.10.7-alpha ΓÇö 2026-09-19

- Eleven Code agora usa Monaco Editor (portado do Orca/stablyai): syntax highlight real, minimap, busca com seed da sele├º├úo, fontes JetBrains Mono, multi-arquivo
- Novo module `lib/monaco-setup.ts` (workers JSON/CSS/HTML/TS + linguagens Vue/Svelte/Astro/Nim/JSONL + aliases shell) portado do Orca
- Adicionadas deps `monaco-editor@^0.55.1`, `@monaco-editor/react@^4.7.0`, `vscode-textmate`, `vscode-oniguruma`, `@xterm/addon-search@0.16.0`
- `layout.tsx` importa `monaco-editor` css global

## v2.10.6-alpha ΓÇö 2026-09-19

- Import third-party skill libraries: mattpocock-skills (engineering/productivity) + OpenMontage (agentic video production)

## v2.10.5-alpha ΓÇö 2026-09-19

- Fix health/admin dashboards, plugins config->metadata, pc-agent health, CSP allowlist CDN

## v2.10.4-alpha ΓÇö 2026-09-19

- Fix Tauri desktop app detection: withGlobalTauri + multiple detection signals

## v2.10.3-alpha ΓÇö 2026-09-19

- Sessions panel: vers├úo do app, plataforma detalhada, features por plataforma, expans├úo de detalhes

## v2.10.2-alpha ΓÇö 2026-09-19

- Add Vercel Analytics + Speed Insights

## v2.10.1-alpha ΓÇö 2026-09-19

- Fix Canvas CDN error handling, Agent PC platform filter + WebSocket port, Skills/Plugins Discover external search via GitHub API, AGENTS.md versioning rule

## v2.10.0-alpha ΓÇö 2026-09-18

- OpenRouter provider + perfis de roteamento cost/latency/quality
- Modo comparacao lado a lado /api/compare (ate 3 modelos)
- Memoria auditavel: supersede + memory_events + paginas /memoria /contexto
- /reverter: rollback de checkpoints com before_state
- FinOps: /api/finops + CostBreaker com custos reais por provedor
- Migrations 20240927: action_risk_rules, tenant_vault, memories origin/scope/superseded
- PWA offline: SW + fila IndexedDB + Background Sync + banner GATEWAY_UNAVAILABLE
- UI Astra: fundo #05050A, glassmorphism, sidebar por data, rotas /coder /canvas /neural /memoria
- Ajustes: vector(768) unificado, CLI templates, mobile noEmit, .env OPENROUTER_*

### Valida├º├úo de Seguran├ºa (2026-09-18)

- **safePath fix**: Corrigido bug de bypass em sibling-dir em `router9/index.ts` ΓÇö `isInsideRoot()` usa `path.sep` + fallback de traversal
- **safePath test**: 8 testes unit├írios em `safePath.test.ts` (todos passando)
- **Baseline completa**: typecheck/lint/test/build todos OK (385 testes, 30 suites, 0 erros)
- **RLS audit**: 10/10 tabelas de neg├│cio com RLS habilitado + policy `auth.uid() = user_id`
- **bridge.ts**: 4 ops seguras no allowlist, `ops/run-command` removido (j├í corrigido FASE 1)
- **Docs**: `baseline.md`, `TLOG.md`, `CHANGELOG.md` atualizados

## v2.9.0-alpha ΓÇö 2026-09-17

### ≡ƒÜÇ FASE 22-30 ΓÇö Infrastructure & DevOps

- **FASE 22 ΓÇö CORS**: `cors.ts` ΓÇö Configura├º├úo CORS (origins, methods, headers, preflight, credentials)
- **FASE 23 ΓÇö IP Rate Limiting**: `ip-rate-limiter.ts` ΓÇö Rate limiting global por IP com whitelist e auto-block
- **FASE 24 ΓÇö Error Logger**: `server-error-logger.ts` ΓÇö Logger estruturado para erros 5xx com contexto do servidor
- **FASE 25 ΓÇö Backup**: `backup.ts` ΓÇö Sistema de backup autom├ítico de dados Supabase com cleanup
- **FASE 26 ΓÇö API Versioning**: `api-versioning.ts` ΓÇö Versionamento v1/v2 com headers de depreca├º├úo
- **FASE 27 ΓÇö OpenAPI**: `openapi.ts` + `/api/docs` ΓÇö Documenta├º├úo OpenAPI 3.0 completa
- **FASE 28 ΓÇö Webhooks**: `webhooks.ts` + `/api/webhooks` ΓÇö Sistema de webhooks com HMAC signing, retry e delivery history
- **FASE 29 ΓÇö Job Queue**: `job-queue.ts` ΓÇö Fila de jobs com prioridade, concorr├¬ncia e backoff retry
- **FASE 30 ΓÇö Load Tests**: `load-tests/load-test.js` ΓÇö Testes de carga k6 (smoke, ramp, stress)
- **41 novos testes** (CORS, IP limiter, API versioning, webhooks, job queue)

---

## v2.8.0-alpha ΓÇö 2026-09-17

### ≡ƒöÆ FASE 21 ΓÇö Security Hardening

- **`validation.ts`**: Input validation utilities ΓÇö `validate`, `required`, `string`, `email`, `number`, `array`, `object` with constraints (minLength, maxLength, pattern, min, max, integer, minItems, maxItems)
- **`middleware.ts`**: Security headers middleware ΓÇö CSP, HSTS, X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- 16 unit tests for validation rules

---

## v2.0.0-alpha ΓÇö 2026-09-17

### ≡ƒôè FASE 16 ΓÇö Monitoring & Observability

- **`logger.ts`**: Logger estruturado com formata├º├úo JSON (produ├º├úo) e leg├¡vel (dev)
  - N├¡veis: debug, info, warn, error
  - Timer para m├⌐tricas de performance
  - Sub-loggers com contexto fixo
- **`error-tracking.ts`**: Rastreamento de erros com:
  - IDs ├║nicos para cada erro
  - Severidade autom├ítica (low/medium/high/critical)
  - Middleware `withErrorTracking` para API routes
  - Handlers globais para erros n├úo capturados
- **`performance.ts`**: Monitoramento de performance com:
  - M├⌐tricas de lat├¬ncia por request
  - Headers `X-Response-Time`
  - Tracking de requests lentos (> 1s)
  - Resumo de performance (avg, p95, error rate)
- **13 novos testes** para m├│dulos de monitoramento

---

## v1.9.0-alpha ΓÇö 2026-09-17

### ≡ƒÜÇ FASE 15 ΓÇö CI/CD Improvements

- **GitHub Actions**: E2E tests rodando no CI (job `e2e` separado)
- **pnpm caching**: Cache de store entre runs para builds mais r├ípidos
- **Playwright report**: Upload de artifacts quando testes falham
- **Pre-commit hooks**: Husky + lint-staged para lint autom├ítico antes de commits
- **Deploy s├│ roda ap├│s E2E passar**: `needs: [gate, e2e]`

---

## v1.8.0-alpha ΓÇö 2026-09-17

### ≡ƒº¬ FASE 14 ΓÇö E2E Tests

- **Playwright setup**: Configura├º├úo completa com Chromium
- **Smoke tests**: 11 testes E2E para caminhos cr├¡ticos
  - Home page load + title
  - Health, Version, Plugins, Skills, Metrics API
  - Auth verification (401 without token)
  - Health & Admin dashboard pages
  - Rate limiting verification

---

## v1.7.0-alpha ΓÇö 2026-09-17

### ≡ƒôÜ FASE 13 ΓÇö Documentation

- **`docs/api.md`**: Refer├¬ncia completa da API (todos os endpoints, request/response, rate limits)
- **`docs/architecture.md`**: Vis├úo geral da arquitetura (diagramas, packages, safety engine, agent loop, DB schema)
- **`README.md`**: Reescrito com tech stack, quick start, features, endpoints, estrutura

---

## v1.6.0-alpha ΓÇö 2026-09-17

### ≡ƒôè FASE 12 ΓÇö Admin Dashboard

- **`/api/metrics`**: GET para resumo de m├⌐tricas do agente, DELETE para limpar
- **`/api/version`**: GET com vers├úo atual do sistema
- **`/admin`**: Dashboard administrativo com:
  - Overview de vers├úo e features
  - System health status
  - Agent metrics (requests, tokens, latency, error rate, tool calls by risk)
  - Lista de plugins instalados
  - Lista de skills instaladas
  - Auto-refresh 30s

---

## v1.5.0-alpha ΓÇö 2026-09-17

### ≡ƒÅÑ FASE 11 ΓÇö Health & Monitoring

- **`/api/health`**: Health check aggregado de todos os subsystems (sem auth, para load balancers)
- **`/api/health/router`**: Health check do Model Gateway
- **`/api/health/plugins`**: Health check do Plugin Registry (contagem de plugins instalados)
- **`/api/health/skills`**: Health check do Skill System (contagem de skills instaladas)
- **`/health`**: Dashboard web com status em tempo real (auto-refresh 30s)

---

## v1.4.0-alpha ΓÇö 2026-09-17

### ≡ƒöî FASE 10A ΓÇö Plugins API

- **`/api/plugins`**: rotas GET (listar) e POST (instalar/desinstalar) plugins
- Persist├¬ncia via Supabase com RLS

### ≡ƒºá FASE 10B ΓÇö Skills API

- **`/api/skills`**: rotas GET (listar built-in + custom) e POST (enable/disable)
- 4 skills built-in: Code Writer, Researcher, DevOps Engineer, Documentation Writer

### ΓÅ▒∩╕Å FASE 10C ΓÇö Rate Limiter Integration

- Rate limiter aplicado em `/api/chat` e `/api/agent`
- Headers HTTP: `Retry-After`, `X-RateLimit-Remaining`

### ≡ƒöº Build Fixes

- **`@11/ia`** adicionado como depend├¬ncia do web app
- `officegen` externalizado do webpack (incompat├¡vel com bundler)
- `seed.json` inlineado no m├│dulo `seed.ts` (eliminou readFileSync em build time)
- `AgentToolCall`/`AgentToolResult` renomeados para evitar conflito com tipos do router
- Export do m├│dulo `plugins` adicionado ao barrel do `@11/ia`
- `pnpm-lock.yaml` atualizado com `readable-stream`

---

## v1.3.0-alpha ΓÇö 2026-09-17

### ≡ƒöî FASE 9A ΓÇö Plugin Registry

- **`PluginRegistry`**: sistema de registro e discovery de plugins/tools
- Plugins registram tools + risk rules automaticamente
- `executeTool()`: executa handlers de plugins com contexto
- Suporte a persist├¬ncia via Supabase

### ≡ƒÄ» FASE 9B ΓÇö Skill System

- **`SkillManager`**: 4 built-in skills:
  - **Code Writer**: especialista em c├│digo limpo (TypeScript)
  - **Researcher**: pesquisador read-only
  - **DevOps Engineer**: deploy com restri├º├╡es de seguran├ºa
  - **Documentation Writer**: documenta├º├úo read-only
- `buildSystemPrompt()`: combina prompts de skills habilitadas
- `validateAction()`: verifica restri├º├╡es (read-only, no-terminal, forbidden)
- 32 testes unit├írios

### ≡ƒôè Testes

- 296 testes passando (254 IA + 42 web)
- 13 suites de teste no pacote IA

---

## v1.2.0-alpha ΓÇö 2026-09-17

### ≡ƒûÑ∩╕Å FASE 8A ΓÇö Frontend AgentCore Integration

- **ChatPanel**: novo modelo "Agent ┬╖ Tools + Safety" no seletor
- Quando selecionado, usa `/api/agent` em vez de `/api/chat`
- Suporte a streaming em ambos os modos

### ≡ƒ¢í∩╕Å FASE 8B ΓÇö Rate Limiting

- **`rate-limiter.ts`**: classe RateLimiter com check(), getHeaders(), cleanup()
- Presets: chat (30/min), agent (10/min), auth (5/min), upload (20/min)
- Headers HTTP padr├úo: X-RateLimit-Limit, Remaining, Reset, Retry-After
- Cleanup autom├ítico a cada 5 minutos
- 13 testes unit├írios

### ≡ƒôè Testes

- 264 testes passando (222 IA + 42 web)

---

## v1.1.0-alpha ΓÇö 2026-09-17

### ≡ƒôí FASE 7A ΓÇö Streaming SSE

- **`/api/agent`** agora suporta `stream: true` ΓÇö eventos em tempo real: `meta`, `delta`, `done`, `error`
- Efeito "digitando" para respostas do agente

### Γ£à FASE 7B ΓÇö Tool Approval Flow

- **POST `/api/agent/approve`**: aprovar ou rejeitar a├º├╡es pendentes (DESTRUCTIVE)
- **GET `/api/agent/approve`**: listar a├º├╡es pendentes do usu├írio
- Ownership check: cada usu├írio s├│ v├¬ suas pr├│prias a├º├╡es

### ≡ƒôè FASE 7C ΓÇö Agent Metrics

- **`agent/metrics.ts`**: coleta de m├⌐tricas em tempo real
- M├⌐tricas: lat├¬ncia, tool calls, distribui├º├úo de risco, erros, tokens
- `getMetricSummary()`: resumo agregado para dashboards
- 17 testes unit├írios

### ≡ƒôè Testes

- 251 testes passando (222 IA + 29 web)
- 11 suites de teste no pacote IA

---

## v1.0.0-alpha ΓÇö 2026-09-17

### ≡ƒ¢í∩╕Å FASE 4 ΓÇö Safety Engine

- **Risk Engine**: 50+ regras de classifica├º├úo (SAFE/REVERSIBLE/DESTRUCTIVE) para filesystem, terminal, git, SQL, network, deploy, AI, memory, user, plugin, skill
- **Dry-Run Engine**: simula├º├úo real antes de executar ΓÇö SQL via SELECT, CLI via --dry-run, filesystem via verifica├º├úo de path
- **Checkpoint & Rollback**: createCheckpoint() antes de a├º├╡es REVERSIBLE, restoreCheckpoint() em caso de falha
- **Pending Actions**: fila de aprova├º├úo para a├º├╡es DESTRUCTIVE
- Migration SQL: `checkpoints` + `pending_actions` com RLS

### ≡ƒñû FASE 5 ΓÇö Agent Core

- **AgentCore**: loop LLM ΓåÆ tool_calls ΓåÆ safety check ΓåÆ execute ΓåÆ repeat (max 10 itera├º├╡es)
- **ToolExecutor**: pipeline completo com classify ΓåÆ dry-run ΓåÆ checkpoint ΓåÆ execute ΓåÆ rollback
- **Session Manager**: persist├¬ncia de sess├╡es com TTL (24h), token usage tracking
- 7 tools: file_read, file_write, file_delete, terminal_exec, git_status, git_diff, git_commit

### ≡ƒöî FASE 6 ΓÇö API + Memory

- **Agent API** (`/api/agent`): endpoint para AgentCore com autentica├º├úo
- **Memory Module**: saveMemory(), searchMemories() por similaridade, getRecentMemories()
- **Integration Tests**: 17 testes de integra├º├úo Safety ΓåÆ Agent ΓåÆ Memory

### ≡ƒôè Testes

- 234 testes passando (205 IA + 29 web)
- 10 suites de teste no pacote IA

---

## v0.9.0-alpha ΓÇö 2026-09-17

### ≡ƒöÉ Security Fix ΓÇö IDOR em Connectors Google

- **google/drive, gmail, calendar**: adicionado `requireUser()` ΓÇö antes qualquer request com userId no query acessava dados de qualquer usu├írio (IDOR cr├¡tico)
- **google/gmail**: Supabase key corrigida de `ANON` para JWT via `requireUser()`

### ≡ƒîÉ Deploy Fix ΓÇö Dom├¡nio de Produ├º├úo

- Dom├¡nio `11-five-umber.vercel.app` estava associado ao projeto Vercel errado (`eleven` ao inv├⌐s de `11-app`)
- Corrigido via `vercel domains add --force` ΓÇö agora serve v0.9.0-alpha
- **Vers├úo hardcoded** em `/api/version` como fallback (garante display correto mesmo com cache CDN)

### ≡ƒº╣ Limpeza do Reposit├│rio

- Removidos 11 PNGs de mockup (`_*.png`) do git tracking
- Removido `apps/dist/` (build Vite desktop) do tracking
- `.gitignore` atualizado com padr├úo `_*.png`

### ≡ƒôè Auditoria de Connectors

- 13 rotas de connectors auditadas
- 3 rotas Google com IDOR corrigido (drive/gmail/calendar)
- 4 rotas OAuth callback: Google tem CSRF cookie Γ£à, GitHub/Slack/Notion sem CSRF (risco m├⌐dio, aceit├ível para fluxo OAuth)
- Todas as 16 tabelas Supabase com RLS habilitado e pol├¡ticas corretas

---

## v0.8.0-alpha ΓÇö 2026-09-17

### ≡ƒöÉ Consist├¬ncia de Auth

- **Settings route** migrada para `requireUser()` ΓÇö todas as 13 rotas API agora usam o mesmo padr├úo

### ≡ƒº╣ Limpeza

- **`@inferencesh/sdk`** removido do root `package.json` (depend├¬ncia fantasma, nunca importada)

### ≡ƒôè Auditoria do Checklist

- 15 itens verificados: 8 DONE, 5 PARTIAL (cosm├⌐tico), 1 NOT DONE (relat├│rio)
- Migrations SQL completas em `infra/supabase/migrations/`

### ≡ƒÜÇ Deploy

- `vercel.json` sem `routes` ΓÇö routing autom├ítico do Next.js habilitado
- **IMPORTANTE:** Verifique o Vercel Dashboard ΓåÆ Settings ΓåÆ Root Directory deve ser `.` (repo root)

---

## v0.7.0-alpha ΓÇö 2026-09-17

### ≡ƒÜÇ Deploy Fix

- **vercel.json**: Removido `routes` que sobrepunha o routing autom├ítico do Next.js ΓÇö causa do deploy n├úo atualizar o sistema

### ≡ƒÆ░ CostBreaker ΓÇö Contabiliza├º├úo Real

- **`cost-breaker.ts`**: `track()` agora aceita `inputTokens` e `outputTokens`; `persist()` sempre grava uso (antes s├│ gravava quando `spent > 0`)
- **`router/index.ts`**: Fallback para `estimateCost()` quando adapter retorna `costUnits=0`; passa token counts para `track()`
- **`9router.ts`**: `parseUsage()` extrai `prompt_tokens` e `completion_tokens` da resposta OpenAI-compat├¡vel (JSON puro e SSE)
- **`gemini.ts`**: Token counts j├í eram retornados; agora s├úo persistidos corretamente

### ≡ƒôè Auditoria FASE 3

- 7/8 itens j├í fixados na FASE 1 (1.1-1.5, 1.7-1.8)
- 1.6 CostBreaker corrigido nesta vers├úo

---

## v0.6.0-alpha ΓÇö 2026-09-17

### ≡ƒöÉ Multi-Tenancy & Isolamento (FASE 2)

- **Helper `requireUser()`** criado em `lib/auth-helpers.ts` ΓÇö extrai JWT do header, valida com Supabase, retorna userId server-side
- **Todas as 12 rotas API** agora usam JWT-based auth (antes: 4 faziam, 8 dependiam de RLS ou n├úo tinham auth)
- **Ownership checks** em PATCH/DELETE para projects, skills, plugins, connectors, artifacts, memories
- **Chat route**: autentica├º├úo obrigat├│ria (antes era aberta sem auth); userId derivado do JWT
- **Connectors test route**: migrada para `requireUser()` (antes usava userId do body)
- **Bugs corrigidos**: query builder em plugins e artifacts n├úo reatribuava `q` (filtro podia falhar)

### ≡ƒôè Rotas corrigidas

| Rota                   | Antes                             | Depois                                |
| ---------------------- | --------------------------------- | ------------------------------------- |
| `/api/chat`            | Sem auth, userId do body          | JWT obrigat├│rio, userId do token     |
| `/api/memories`        | RLS-only, userId opcional         | JWT obrigat├│rio, userId do token     |
| `/api/projects`        | Sem ownership em PATCH/DELETE     | `assertRowOwnership` em PATCH/DELETE  |
| `/api/plugins`         | Sem ownership, bug query builder  | Ownership + bug fix                   |
| `/api/skills`          | Sem ownership em PATCH/DELETE     | `assertRowOwnership` em PATCH/DELETE  |
| `/api/connectors`      | userId do body em POST/DELETE     | JWT obrigat├│rio, ownership em DELETE |
| `/api/artifacts`       | userId do body, bug query builder | JWT + ownership + bug fix             |
| `/api/connectors/test` | userId do body                    | JWT obrigat├│rio                      |

### ≡ƒ¢á∩╕Å Arquivos criados

| Arquivo                            | Descri├º├úo                                                    |
| ---------------------------------- | -------------------------------------------------------------- |
| `apps/web/src/lib/auth-helpers.ts` | Helper de auth reutiliz├ível (requireUser, assertRowOwnership) |

### ≡ƒôè Arquivos modificados

| Arquivo                                         | Mudan├ºa                          |
| ----------------------------------------------- | --------------------------------- |
| `apps/web/src/app/api/chat/route.ts`            | Auth obrigat├│ria via requireUser |
| `apps/web/src/app/api/memories/route.ts`        | Auth + ownership em DELETE        |
| `apps/web/src/app/api/projects/route.ts`        | Auth + ownership em PATCH/DELETE  |
| `apps/web/src/app/api/plugins/route.ts`         | Auth + ownership + bug fix        |
| `apps/web/src/app/api/skills/route.ts`          | Auth + ownership em PATCH/DELETE  |
| `apps/web/src/app/api/connectors/route.ts`      | Auth + ownership em DELETE        |
| `apps/web/src/app/api/connectors/test/route.ts` | Migrada para requireUser          |
| `apps/web/src/app/api/artifacts/route.ts`       | Auth + ownership + bug fix        |
| `package.json`                                  | Vers├úo 0.6.0-alpha               |
| `apps/web/public/version.json`                  | Vers├úo 0.6.0-alpha               |
| `docs/TLOG.md`                                  | Entrada v0.6.0-alpha              |

---

## v0.5.0-alpha ΓÇö 2026-09-17

### ≡ƒöÉ Seguran├ºa Cr├¡tica (FASE 1)

- **Router9 protegido**: JWT authentication obrigat├│ria + path sandbox com `fs.realpath` e valida├º├úo de symlink
- **PC Agent protegido**: `authMiddleware` adicionado em `PATCH /cancel` e `DELETE` (antes expostos)
- **JWT_SECRET fail-fast**: Servidor recusa iniciar sem `JWT_SECRET` definido (remove fallback `dev-secret-change-in-production`)
- **CORS corrigido**: Wildcard `*` substitu├¡do por `ALLOWED_ORIGINS` em ambos os servidores
- **Terminal auth obrigat├│ria**: Bloqueado em produ├º├úo sem Supabase configurado
- **Bridge seguro**: `ops/run-command` removido do allowlist (impedia execu├º├úo arbitr├íria)

### ≡ƒ¢á∩╕Å Deploy

- **vercel.json**: Removido `builds` que sobrepunha Project Settings; adicionado `--no-frozen-lockfile`
- Deploy agora reflete altera├º├╡es de c├│digo corretamente

### ≡ƒôè Arquivos modificados

| Arquivo                                       | Mudan├ºa                                                    |
| --------------------------------------------- | ----------------------------------------------------------- |
| `apps/desktop/src/server.ts`                  | JWT auth + helmet + CORS + rate limit                       |
| `apps/desktop/src/router9/index.ts`           | Auth middleware + ROOT_DIR sandbox + fs.realpath            |
| `apps/desktop/src/pc-agent/server.ts`         | authMiddleware em todas as rotas + JWT fail-fast + CORS fix |
| `apps/web/src/app/api/terminal/exec/route.ts` | Auth obrigat├│ria em produ├º├úo                             |
| `packages/ia/src/tools/bridge.ts`             | ops/run-command removido do allowlist                       |
| `vercel.json`                                 | builds removido, installCommand com --no-frozen-lockfile    |

## v0.4.1-alpha ΓÇö 2026-09-17

### ≡ƒ¢á∩╕Å Corre├º├úo lockfile

- `pnpm install --no-frozen-lockfile` sincroniza lockfile com package.json, impede erro `ERR_PNPM_OUTDATED_LOCKFILE`.
- Deploy Vercel agora reflete altera├º├╡es de c├│digo.

### ≡ƒûÑ∩╕Å Eleven Coder (Terminal Interativo)

- **PTY Session Manager**: sess├╡es PTY reais com node-pty, suporte a bash/zsh/powershell/cmd
- **WebSocket Gateway**: NestJS WebSocket com autentica├º├úo JWT Supabase, eventos create-session/input/output/resize/kill
- **Frontend xterm.js**: UI IDE-style com:
  - Tabs de sess├úo com indicadores de status (conectado/desconectado)
  - HUD footer com info de conex├úo e contagem de sess├╡es
  - A├º├╡es: copiar sele├º├úo, colar, limpar terminal, reconectar
  - Tema OLED (#05050A) com cyan/magenta accents
  - Fonte JetBrains Mono, cursor bar com blink
  - Suporte a web links clic├íveis
- **Sidebar**: aba "Eleven Coder" integrada ├á navega├º├úo principal

### ≡ƒºá Rede Neural (NeuralGraph)

- **Redesign completo**: visual futurista OLED (#05050A), glassmorphism panels
- **Part├¡culas animadas**: sistema de part├¡culas no fundo com movimento org├ónico
- **Energy beams**: conex├╡es entre n├│s com gradiente cyanΓåÆmagenta e anima├º├úo
- **Layout em clusters**: n├│s agrupados por tipo (core, ia, memory, integration)
- **HUD overlays**: contadores animados, legenda por tipo de n├│
- **Search filter**: filtro por label com highlighting de matches
- **Node detail panel**: sidebar com info detalhada do n├│ selecionado

### ≡ƒöÉ Seguran├ºa (CRITICAL)

- **Service role key fallback removido** em 12 arquivos ΓÇö user-facing clients agora usam apenas `NEXT_PUBLIC_SUPABASE_ANON_KEY`, admin clients usam `SUPABASE_SERVICE_ROLE_KEY`
- **Hardcoded Supabase URL removida** de `health.controller.ts`
- **CORS wildcard corrigido** ΓÇö `main.ts` agora usa `ALLOWED_ORIGINS` env var (comma-separated)
- **Settings route** ΓÇö verifica├º├úo de ownership: userId autenticado deve coincidir com userId solicitado
- **Media route** ΓÇö service role key substitu├¡da por anon key no client user-facing
- **Orphaned `exec.controller.js`** removido do tracking (execu├º├úo arbitr├íria sem auth/valida├º├úo)

### ≡ƒº╣ Limpeza do Reposit├│rio

- `.gitignore` reescrito com regras para `dist/`, `*.tsbuildinfo`, `.expo/`, `*.log`
- `dist/` removido de todos os packages do git tracking (~100+ arquivos)
- `.tsbuildinfo` removido de todos os packages
- `.expo/` removido do tracking
- `packages/tsconfig.json` duplicado removido
- `.eslintignore` redundante removido
- `@types/*` movidos de `dependencies` para `devDependencies` no root
- `workspaces` key removida do root `package.json`

### ≡ƒöº Infra & Corre├º├╡es

- **socket.io-client**: adicionado ao frontend para WebSocket
- **@nestjs/websockets + socket.io**: adicionados ao packages/api
- **node-pty**: PTY nativo para sess├╡es de terminal reais, movido para `optionalDependencies`
- **next.config.js**: fallbacks webpack para m├│dulos Node.js (fs, net, crypto, etc.)
- **terminal-validate**: fun├º├úo `validate` agora aceita `allowedRoots` customiz├íveis
- **Testes**: 17/17 passando (valida├º├úo de comandos, path containment, baseCommand)
- **Todos os package.json** sincronizados em `0.4.0-alpha`

---

## v0.3.0-alpha ΓÇö 2026-09-17

### ΓÜí Streaming & Chat

- **Streaming SSE no chat** (`/api/chat` com `stream:true` ΓåÆ eventos `meta`/`delta`/`done`) + efeito "digitando" no `ChatPanel`; contrato JSON mantido quando `stream` n├úo ├⌐ enviado
- **Web search real** (flag `webSearch` antes ignorada): injeta contexto do DuckDuckGo Instant Answer, sem chave
- Persist├¬ncia de mensagens/mem├│rias movida para antes da transmiss├úo SSE (n├úo duplica se o cliente abortar)

### ≡ƒöÉ Seguran├ºa

- **`getAuthClient` agora usa ANON key** (RLS sempre aplicado): sem token, nenhuma rota vaza dados ΓÇö antes usava service role como base e listava tudo sem auth
- **`/api/code` auth corrigida**: aceita Supabase JWT (claim `sub`) e JWT legado; removido `JWT_SECRET` com default hardcoded
- **Media**: `DELETE`/`PATCH` com verifica├º├úo de ownership (`assertOwnership`, 403 sem dono) ΓÇö fecha IDOR
- **PKCE Google**: cookie `secure` apenas em HTTPS (antes quebrava em `http://localhost`)
- **CSRF OAuth Google**: o `state` retornado agora ├⌐ comparado com o cookie emitido no in├¡cio do fluxo
- **Provider pinning**: chave de sess├úo convertida para UUID (antes md5-hex era rejeitado pela coluna `uuid` e nunca persistia)
- **Plugins/Artifacts** persistidos no Supabase com RLS por `auth.uid()` (antes: localStorage / estado local)

### ≡ƒûÑ∩╕Å Terminal & UI

- Terminal xterm.js com containers isolados por aba (sem empilhar divs) e cwd persistente
- `MobileAgent`: `wsUrl` edit├ível agora chega ao hook `useMobileAgent({ wsUrl })`
- `VersionBadge`: link web relativo ao origin (sem URL hardcoded)
- `skill-catalog`: removido caractere CJK na descri├º├úo pt-BR
- `settings`: erros propagados (antes o POST sempre retornava `{ ok: true }`)

### ≡ƒº⌐ Artefatos

- `generatePPTXAdvanced` grava bin├írio via `writeFileBuffer` (antes `buf.toString('binary')` por utf8 corrompia o arquivo)

### ≡ƒöº Infra & Corre├º├╡es

- `9Router` resiliente: combos padr├úo/fallback (`kr/glm-5`, `kr/claude-sonnet-4.5`, `gemini/gemini-3.6-flash`) + parser de resposta JSON **e** SSE
- Health check `GET /api/health/router` (testa local + t├║nel em todos os combos)
- Loader de `.env` multi-camada (raiz do monorepo ΓåÆ app), compat├¡vel com Vercel
- Persist├¬ncia do chat end-to-end: trigger `handle_new_user` (auth.users ΓåÆ users) resolve FK `sessions` (23503)
- Build de produ├º├úo no Node 22+/24: `hashFunction: sha256` (md4 removido do Webpack)
- `@11/ia` e `@11/cli` com `dist/index.js` funcional + c├│pia de assets n├úo-TS no build
- **Vers├╡es reconciliadas**: todos os `package.json` + `version.json` agora em `0.3.0-alpha`

### ≡ƒùâ∩╕Å Supabase

- Migration `20240924_artifacts_plugins.sql`: tabelas `artifacts` e `plugins` (RLS multi-tenant)
- Migration `20240923_users_sync.sql`: trigger `handle_new_user` (auth.users ΓåÆ users)

---

## v0.2.0-alpha ΓÇö 2026-09-15

### ≡ƒÄÖ∩╕Å Chat & Voz

- Live chat por voz: Web Speech API (ptΓÇæBR) em navegadores + fallback ElevenLabs via `/api/stt`
- Transcri├º├úo real enviada de volta ao input antes do envio
- Anexos: arquivos de texto, imagens com thumbnail e screenshot da tela

### ≡ƒºá Mem├│ria

- Inje├º├úo de mem├│rias relevantes do usu├írio como contexto no `/api/chat`
- Salvamento compacto de conversas na tabela `memories` (Supabase)
- Painel de mem├│rias nas configura├º├╡es: listar, remover, carregar

### ≡ƒÆ¼ Eleven Code

- Editor multiΓÇæarquivo com execu├º├úo JS/TS/HTML/CSS no navegador
- Console colorido por tipo, preview HTML/CSS em iframe sandboxed
- API `/api/code` com sess├╡es, aprova├º├úo, sanitiza├º├úo, timeout e rate limit

### ≡ƒôè Conectores

- Painel Connectors com OAuth real (Google, Slack, GitHub, Notion)
- Teste de conex├úo por provedor com dados reais (`/api/connectors/test`)

### ≡ƒû╝∩╕Å M├¡dia

- Upload de imagem/v├¡deo com an├ílise de IA (9Router/Gemini) via `/api/media`
- An├ílise autom├ítica com tags e anota├º├╡es (OCR/descri├º├úo)

### ≡ƒûÑ∩╕Å Agente de PC (desktop)

- PC Agent: servidor HTTP + WebSocket (JWT), sess├╡es, aprova├º├úo e execu├º├úo com streaming
- Router9 corrigido para API real do `@inferencesh/sdk`, com SQLite de logs

### ≡ƒô▒ Agente Mobile

- Bridge Capacitor + hook `useMobileAgent` para comunica├º├úo em tempo real (WSS)
- Cria├º├úo, aprova├º├úo e cancelamento de sess├╡es remotas

### ≡ƒöº Infra & Corre├º├╡es

- Build, lint e typecheck limpos em web/desktop/mobile
- Corre├º├úo de erros pr├⌐ΓÇæexistentes (PKCE, alias `@/*`, `ui/button`, `no-case-declarations`, `supabaseKey`)
- `.env.example` com todas as vari├íveis de ambiente documentadas

---

## v0.1.0-alpha ΓÇö 2026-09-15

### ≡ƒîî Visual

- Gal├íxia espiral animada estilo GPTΓÇæAstra com 24k+ estrelas, glow central e estrelas individuais (shader custom twinkle + esp├¡cula)
- Layout mobileΓÇæfirst com drawer de conversas (estilo Claude/GPT)
- Login/Cadastro minimalista estilo ChatGPT (fundo escuro, card limpo)
- ├ìcone favicon SVG (gal├íxia) usado em web, desktop e mobile
- Remo├º├úo completa de bordas/linhas brancas ΓÇö visual s├│lido e clean

### ≡ƒÆ¼ Chat

- Chat estilo GPT/Claude com sidebar de conversas (desktop) ou drawer (mobile)
- Sugest├╡es r├ípidas, input fixo no rodap├⌐, bot├╡es de a├º├úo por mensagem
- Persist├¬ncia de sess├╡es no Supabase (sessions + messages)

### ≡ƒöÉ Auth

- Cadastro/login por e-mail + senha (Supabase Auth, autoconfirm)
- MultiΓÇætenant: qualquer usu├írio cria conta; dados isolados por RLS

### ≡ƒ¢í∩╕Å Seguran├ºa

- Bridge: opera├º├╡es nomeadas (list-files, read-file, run-build) ΓÇö sem shell arbitr├írio
- Rate limiting no endpoint de opera├º├╡es remotas
- Audit log appendΓÇæonly (bridge_audit_log) com RLS adminΓÇæonly
- Whitelist de diret├│rios para opera├º├╡es de arquivo

### ≡ƒôí Infra

- Cloudflare Tunnel configurado para crossΓÇædevice (PC Γçä Celular)
- ModelGateway multiΓÇæprovedor (9Router ΓåÆ Gemini ΓåÆ fallback local)
- Sess├╡es de chat com hist├│rico vetorial no Supabase
- KeepΓÇæalive autom├ítico do banco (GitHub Actions a cada 3 dias)
- Deploy via Vercel (pipeline CI com lint ΓåÆ test ΓåÆ build)

### ≡ƒô▒ App

- Mobile: Capacitor + WebView ΓåÆ OTA via Vercel (sem reinstalar APK)
- Desktop: Tauri 2 + WebView ΓåÆ OTA via Vercel (sem reinstalar exe)
- ├ìcones: gal├íxia SVG regenerados para Tauri (icns/ico/png) e Android (mipmaps)

### ≡ƒöº Backend

- API NestJS com endpoints: /health, /keep-alive, /api/chat, /api/ops/*
- Bridge de opera├º├╡es seguras (list-files, read-file, write-file, run-build, run-command)
- Deploy broker com tokens de curta dura├º├úo e circuit breaker
- Sess├╡es de chat persistidas (sessions + messages table)

### ≡ƒôè Supabase

- Migration: users, personas, messages, embeddings (pgvector), products, agent_states, access_rules
- Migration: sessions + messages.session_id + provider
- Migration: deploy_requests, deploy_tokens, deploy_history
- Migration: model_sessions, model_usage
- Migration: bridge_audit_log
- RPC select_one para keep-alive
- RLS multiΓÇætenant em todas as tabelas
