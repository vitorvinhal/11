# TLOG — Technical Log

Registro técnico de todas as versões do projeto 11.

---

## v2.10.0-alpha — 2026-09-18 (validação de segurança)

### Validação de 6 itens — safePath fix, baseline, RLS, bridge, docs

#### Item 1 — safePath fix (router9)

- **`apps/desktop/src/router9/index.ts`** — Corrigido bug de bypass em sibling-dir:
  - Nova função `isInsideRoot()` usa `path.sep` em vez de `startsWith` (que falhava com paths compartilhados como `C:\Users`)
  - Fallback de traversal: quando nem path nem parent existem, sobe até diretório existente, valida com `isInsideRoot`
  - Exemplo: `C:\Users\Admin\Documents\11\outro\file` + root `C:\Users\Admin\Documents\11` → `outro` parent não existe, sobe para `Documents` (que existe) → `isInsideRoot` bloqueia porque `Documents` não está dentro de `Documents\11`
- **`apps/desktop/src/router9/safePath.test.ts`** — 8 testes unitários (sibling-dir bypass, absolute path, parent dir, same dir, valid read)

#### Item 2 — Baseline completa

- `pnpm install` → OK
- `npx tsc --noEmit` (web, ia, shared) → OK
- `npx next lint` (web) → PASS (7 warnings, 0 errors — todos pre-existing)
- `npx jest` → PASS (385/385 testes, 30 suites)
- `pnpm build` → OK (shared → ia → web, 24 pages)
- `docs/audit/baseline.md` atualizado com resultados

#### Item 3 — RLS audit

- Todas as 10 tabelas de negócio verificadas: `sessions`, `messages`, `memories`, `projects`, `skills`, `plugins`, `artifacts`, `media`, `pending_actions`, `checkpoints`
- Todas com `ENABLE ROW LEVEL SECURITY` + policy `FOR ALL USING (auth.uid() = user_id)`
- Nenhuma migration corretiva necessária

#### Item 4 — bridge.ts verification

- Allowlist: `ops/list-files`, `ops/read-file`, `ops/run-build`, `ops/run-tests` (4 ops seguras)
- `ops/run-command` removido (já corrigido na FASE 1)
- Chamadas via REST API (`callOpsApi`), sem shell arbitrário
- Auth: JWT incluído quando disponível
- Timeout: 60s via `AbortSignal.timeout`

#### Item 5 — Docs update

- `docs/audit/baseline.md` — resultados atualizados, problemas críticos marcados como CORRIGIDOS
- `docs/TLOG.md` — entrada adicionada para esta validação
- `CHANGELOG.md` — entrada adicionada

---

## v2.10.0-alpha — 2026-09-18

### Modo Astra — UI/UX, OpenRouter, Salvaguardas e Resiliência Offline

#### Core de IA (`packages/ia`)

- **`src/router/adapters/openrouter.ts`** — novo adapter OpenRouter (custo real por tokens, fallback entre modelos permitidos)
- **`src/router/adapters/index.ts`** — registry com OpenRouter (9Router → Gemini → OpenRouter → Anthropic → MiniMax)
- **`src/router/index.ts`** — perfis de roteamento `cost`/`latency`/`quality`, método `compare()` (até 3 provedores em paralelo), export `costBreaker`
- **`src/router/types.ts`** — `ProviderAdapter.id` inclui `'openrouter'`; tipos `RoutingProfile`
- **`src/agent/memory.ts`** — `supersedeMemory` (consolidação sem DELETE físico), `logMemoryEvent`, `getMemoryAudit`
- **`src/agent/index.ts`** — novos exports de auditoria de memória

#### Segurança & Config

- **`infra/supabase/migrations/20240927_audit_vault_memory.sql`** — `action_risk_rules`, `tenant_vault`, colunas `origin`/`scope`/`status`/`superseded_by`/`superseded_at` em `memories`, trilha append-only `memory_events`
- **`infra/supabase/migrations/20240919_skills_projects.sql`** — `memories.embedding` unificado em `vector(768)` (fonte única: Gemini text-embedding-004)
- **`packages/cli/templates/{web,api,mobile}/main.hbs`** — templates criados (codegen.ts sem crash)
- **`apps/mobile/tsconfig.json`** — `noEmit: false` para build via tsc
- **`.env.example`** — `OPENROUTER_API_KEY`, `OPENROUTER_MODEL`, `OPENROUTER_ALLOWED_MODELS`, `PAID_MODEL_DAILY_BUDGET`
- **`apps/web/package.json`** — dev server em porta fixa `3000`

#### Web — UI Astra + Rotas

- **`src/components/AppShell.tsx`** — shell autenticado extraído (sidebar + painéis)
- **`src/app/{coder,canvas,neural,memoria}/page.tsx`** — rotas dedicadas
- **`src/components/{CanvasPanel,MemoriaPanel,FinOpsPanel}.tsx`** — playground generativo, auditoria de memória, dashboard FinOps
- **`src/components/Sidebar.tsx`** — histórico agrupado por data, nav Canvas/Memória/FinOps
- **`src/components/ChatPanel.tsx`** — seletor de perfil de roteamento, botão/mod modal Comparar, banner `GATEWAY_UNAVAILABLE`, fila offline
- **`src/styles/globals.css`** — fundo absoluto `#05050A`, utilitários `glassmorph`/`glassmorph-strong`
- **`src/components/ServiceWorkerRegister.tsx`** + **`public/sw.js`** + **`src/lib/offline-queue.ts`** — PWA offline-first (cache shell, fila IndexedDB, Background Sync)

#### APIs

- **`src/app/api/compare/route.ts`** — comparação lado a lado via ModelGateway
- **`src/app/api/reverter/route.ts`** — listar/restaurar checkpoints
- **`src/app/api/memoria/route.ts`** — trilha de auditoria + consolidação de memórias
- **`src/app/api/finops/route.ts`** — consumo real de tokens/custos por provedor + estado do CostBreaker
- **`src/app/api/chat/route.ts`** — roteamento respeita `profile` (fallback em cascata)

#### Correções de lint/typecheck (pré-existentes)

- `web/src/lib/{cache,event-emitter,job-queue}.test.ts`, `packages/ia/src/safety/risk-engine.test.ts`, `packages/api/src/modules/terminal/pty-manager.service.ts`, `apps/desktop/src/router9/index.ts` (duplicidade de export), `apps/web/load-tests/load-test.js` (globals k6), `apps/desktop/tsconfig.json` (escopo vite/node)

#### Testes

- 254 IA + 130 web + 1 shared — 385 testes passando
- Typecheck web/api/desktop/mobile OK
- Lint 0 erros (warnings pré-existentes)

---

## v2.9.0-alpha — 2026-09-17

### FASE 22-30 — Infrastructure & DevOps

- **`apps/web/src/lib/cors.ts`** — CORS middleware (configurable origins, preflight, credentials)
- **`apps/web/src/lib/ip-rate-limiter.ts`** — Global IP rate limiter (whitelist, auto-block, blocked IPs)
- **`apps/web/src/lib/server-error-logger.ts`** — Structured 5xx error logger (server context, memory, timing)
- **`apps/web/src/lib/backup.ts`** — Automated backup system (Supabase, auto-cleanup, history)
- **`apps/web/src/lib/api-versioning.ts`** — API versioning v1/v2 (deprecation headers, detection)
- **`apps/web/src/lib/openapi.ts`** — OpenAPI 3.0 spec generator
- **`apps/web/src/app/api/docs/route.ts`** — `/api/docs` endpoint
- **`apps/web/src/lib/webhooks.ts`** — Webhook system (HMAC signing, retry, delivery history)
- **`apps/web/src/app/api/webhooks/route.ts`** — `/api/webhooks` CRUD endpoint
- **`apps/web/src/lib/job-queue.ts`** — Job queue (priority, concurrency, backoff retry, builtin handlers)
- **`apps/web/load-tests/load-test.js`** — k6 load tests (smoke, ramp, stress scenarios)
- **41 novos testes** unitários

### Testes

- 130 web unit tests passando

---

## v2.8.0-alpha — 2026-09-17

### FASE 21 — Security Hardening

- **`apps/web/src/lib/validation.ts`** — Input validation utilities (required, string, email, number, array, object, validate)
- **`apps/web/src/middleware.ts`** — Security headers (CSP, HSTS, X-Frame-Options, Permissions-Policy, etc.)
- 16 unit tests for validation rules

### Testes

- 352 testes passando (288 IA + 44 E2E/web)

---

## v2.0.0-alpha — 2026-09-17

### FASE 16 — Monitoring & Observability

- **`apps/web/src/lib/logger.ts`** — Logger estruturado (JSON/legível)
- **`apps/web/src/lib/error-tracking.ts`** — Rastreamento de erros + middleware
- **`apps/web/src/lib/performance.ts`** — Monitoramento de performance
- **13 novos testes** para módulos de monitoramento

### Testes

- 309 testes passando (254 IA + 55 web)

---

## v1.9.0-alpha — 2026-09-17

### FASE 15 — CI/CD Improvements

- **`.github/workflows/ci.yml`** — E2E job, pnpm caching, Playwright artifacts
- **`.husky/pre-commit`** — lint-staged hook
- **`package.json`** — lint-staged config, prepare script

### Testes

- 296 unit tests (254 IA + 42 web)
- 11 E2E tests (Playwright)

---

## v1.8.0-alpha — 2026-09-17

### FASE 14 — E2E Tests

- **`apps/web/playwright.config.ts`** — Configuração Playwright
- **`apps/web/e2e/smoke.spec.ts`** — 11 testes E2E (smoke tests)
- **`@playwright/test`** — Adicionado como devDependency

### Testes

- 296 unit tests (254 IA + 42 web)
- 11 E2E tests (Playwright)

---

## v1.7.0-alpha — 2026-09-17

### FASE 13 — Documentation

- **`docs/api.md`** — Referência completa da API
- **`docs/architecture.md`** — Visão geral da arquitetura
- **`README.md`** — Reescrito com visão moderna

### Testes

- 296 testes passando (254 IA + 42 web)

---

## v1.6.0-alpha — 2026-09-17

### FASE 12 — Admin Dashboard

- **`apps/web/src/app/api/metrics/route.ts`** — GET/DELETE /api/metrics
- **`apps/web/src/app/api/version/route.ts`** — GET /api/version
- **`apps/web/src/app/admin/page.tsx`** — Admin dashboard com métricas, health, plugins, skills

### Testes

- 296 testes passando (254 IA + 42 web)

---

## v1.5.0-alpha — 2026-09-17

### FASE 11 — Health & Monitoring

- **`apps/web/src/app/api/health/route.ts`** — GET /api/health (agregado, sem auth)
- **`apps/web/src/app/api/health/router/route.ts`** — GET /api/health/router
- **`apps/web/src/app/api/health/plugins/route.ts`** — GET /api/health/plugins
- **`apps/web/src/app/api/health/skills/route.ts`** — GET /api/health/skills
- **`apps/web/src/app/health/page.tsx`** — Dashboard /health com auto-refresh

### Testes

- 296 testes passando (254 IA + 42 web)

---

## v1.4.0-alpha — 2026-09-17

### FASE 10 — Plugins & Skills API

- **`apps/web/src/app/api/plugins/route.ts`** — GET/POST para listar e gerenciar plugins via Supabase.
- **`apps/web/src/app/api/skills/route.ts`** — GET/POST para listar e habilitar/desabilitar skills.
- **Rate limiter** integrado em `/api/chat` e `/api/agent` com headers HTTP.

### Build Fixes

- `@11/ia` agora é dependência do `@11/web` e buildado antes dele.
- `officegen` externalizado do webpack (era incompatível com bundler do Next.js).
- `seed.json` inlineado em `seed.ts` (eliminou `readFileSync` em build time).
- `AgentToolCall`/`AgentToolResult` renomeados para evitar conflito de tipos com router.
- Export do módulo `plugins` adicionado ao barrel do `@11/ia`.

### Testes

- 296 testes passando (254 IA + 42 web)

---

## v1.3.0-alpha — 2026-09-17

### FASE 4 — Safety Engine

- **`packages/ia/src/safety/risk-engine.ts`** — 50+ regras de classificação (SAFE/REVERSIBLE/DESTRUCTIVE). Default deny: ação desconhecida = DESTRUCTIVE.
- **`packages/ia/src/safety/dry-run.ts`** — Simulação real: SQL via SELECT, CLI via --dry-run, filesystem via verificação de path.
- **`packages/ia/src/safety/checkpoint.ts`** — createCheckpoint(), restoreCheckpoint(), createPendingAction(), approveAction(), rejectAction().
- **`infra/supabase/migrations/20240926_checkpoints_pending_actions.sql`** — Tabelas `checkpoints` + `pending_actions` com RLS.

### FASE 5 — Agent Core

- **`packages/ia/src/agent/agent-core.ts`** — agentLoop(): loop LLM → tool_calls → safety → execute → repeat.
- **`packages/ia/src/agent/tool-executor.ts`** — executeTool(): pipeline completo com classify → dry-run → checkpoint → execute → rollback.
- **`packages/ia/src/agent/session-manager.ts`** — createSession(), addMessage(), getMessages(), expireOldSessions().

### FASE 6 — API + Memory

- **`apps/web/src/app/api/agent/route.ts`** — Endpoint /api/agent para AgentCore com autenticação.
- **`packages/ia/src/agent/memory.ts`** — saveMemory(), searchMemories() por similaridade, getRecentMemories(), deleteMemory().

### Testes

- 234 testes passando (205 IA + 29 web)
- 10 suites de teste no pacote IA
- 17 testes de integração Safety → Agent → Memory

---

## v0.9.0-alpha — 2026-09-17

### Security Fix — IDOR em Connectors Google

- **`apps/web/src/app/api/connectors/google/drive/route.ts`** — Adicionado `requireUser()`. Antes: qualquer request com `userId` no query param acessava dados de qualquer usuário (IDOR crítico).
- **`apps/web/src/app/api/connectors/google/gmail/route.ts`** — IDOR fix + correção de Supabase key (era `ANON`, agora usa JWT via `requireUser()`).
- **`apps/web/src/app/api/connectors/google/calendar/route.ts`** — IDOR fix com `requireUser()`.

### Deploy Fix — Domínio de Produção

- Domínio `11-five-umber.vercel.app` estava associado ao projeto Vercel errado (`eleven` ao invés de `11-app`).
- Corrigido via `vercel domains add --force 11-five-umber.vercel.app 11-app`.
- **`apps/web/src/app/api/version/route.ts`** — Rota API com fallback hardcoded para versão (garante display correto mesmo com cache CDN).

### Connector Audit

- 13 rotas de connectors auditadas para auth e ownership.
- 3 rotas Google com IDOR corrigido.
- 4 rotas OAuth callback: Google tem CSRF cookie ✅, GitHub/Slack/Notion sem CSRF (risco médio aceitável).
- Todas as 16 tabelas Supabase com RLS habilitado e políticas corretas.

### File Cleanup

- 11 PNGs de mockup (`_*.png`) removidos do git tracking.
- `apps/dist/` (build Vite desktop) removido do tracking.
- `.gitignore` atualizado com padrão `_*.png`.

### CI Fix

- **`.github/workflows/ci.yml`** — Node 18 (era 24), `supabase` CLI (era `@supabase/cli`), `--no-frozen-lockfile`, typecheck step adicionado.
- **`.github/workflows/build.yml`** — Node 18, `pnpm lint` (era `pnpx eslint`), removido `|| echo` que engolia erros de teste.

### Terminal E2E Test

- 5 testes de API ao vivo: auth (401), comando vazio (400), JSON inválido (400), destrutivo (401), GET status (200).
- 22 testes de validação local: whitelist, DANGEROUS patterns, baseCommand, isUnderRoot — todos pass.

---

## v0.8.0-alpha — 2026-09-17

### Consistência de Auth

- **`apps/web/src/app/api/settings/route.ts`** — Migrada de `getAuthClient()` + manual `getUser()` para `requireUser()`. Agora todas as rotas usam o mesmo padrão.

### Limpeza

- **`package.json`** — `@inferencesh/sdk` removido (era dependência fantasma: listada mas nunca importada)

### Auditoria Completa do Checklist

- 15 itens verificados: 8 DONE, 5 PARTIAL (cosmético), 1 NOT DONE (relatório de testes)
- Deploy v0.2.0-alpha identificado como problema de configuração Vercel (Root Directory)

### Migrations SQL

- 11 arquivos em `infra/supabase/migrations/` cobrindo: users, messages, embeddings, sessions, memories, skills, projects, media, connectors, artifacts, plugins, user_settings
- `apply-migrations.js` para aplicar via RPC

---

## v0.7.0-alpha — 2026-09-17

### Deploy Fix

- **`vercel.json`** — Removido `routes` que sobrepunha o routing automático do Next.js no Vercel

### CostBreaker — Contabilização Real

- **`packages/ia/src/router/cost-breaker.ts`** — `track()` agora aceita `inputTokens` e `outputTokens`; `persist()` sempre grava (antes só gravava quando `spent > 0`)
- **`packages/ia/src/router/index.ts`** — Fallback para `estimateCost()` quando adapter retorna `costUnits=0`; passa token counts para `track()`
- **`packages/ia/src/router/adapters/9router.ts`** — `parseUsage()` extrai `prompt_tokens` e `completion_tokens` da resposta OpenAI-compatível (JSON puro e SSE)
- **`packages/ia/src/router/adapters/gemini.ts`** — Já retornava token counts; agora são persistidos via track()

### Auditoria FASE 3

- 7/8 itens já estavam fixados (FASE 1): router9 auth, PC Agent auth, JWT_SECRET fail-fast, terminal auth, embeddings 768, bridge seguro, CLI/Mobile/Envs
- 1.6 CostBreaker corrigido nesta versão

---

## v0.6.0-alpha — 2026-09-17

### Multi-Tenancy & Isolamento (FASE 2)

#### Auditoria de Isolamento

- Auditoria completa de 12 rotas API: 8 FAIL, 4 PASS
- Rotas que passavam: `/api/settings`, `/api/code`, `/api/account`, `/api/media`
- Rotas que falhavam: `/api/chat`, `/api/memories`, `/api/projects`, `/api/plugins`, `/api/skills`, `/api/connectors`, `/api/artifacts`, `/api/terminal/exec`

#### Helper de Auth Reutilizável

- **`apps/web/src/lib/auth-helpers.ts`** — `requireUser(req)` extrai JWT do header Authorization, valida com Supabase e retorna `{ sb, userId }`
- **`requireUserOrUnauthorized(req)`** — wrapper que retorna 401 automaticamente
- **`assertRowOwnership(sb, table, rowId, userId)`** — verifica que o registro pertence ao usuário

#### Rotas Corrigidas (8 arquivos)

| Rota                   | Mudança                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| `/api/chat`            | Auth obrigatória via `requireUser()`, userId derivado do JWT (antes: corpo da requisição, sem auth) |
| `/api/memories`        | Auth em GET/POST/DELETE, userId do JWT, DELETE com `.eq('user_id', userId)`                         |
| `/api/projects`        | Auth em GET/POST/PATCH/DELETE, ownership check via `assertRowOwnership` em PATCH/DELETE             |
| `/api/plugins`         | Auth em GET/POST/PATCH/DELETE, ownership check em PATCH/DELETE, bug do query builder corrigido      |
| `/api/skills`          | Auth em GET/POST/PATCH/DELETE, ownership check em PATCH/DELETE                                      |
| `/api/connectors`      | Auth em GET/POST/DELETE, ownership check em DELETE por id                                           |
| `/api/artifacts`       | Auth em GET/POST/DELETE, ownership check em DELETE, bug do query builder corrigido                  |
| `/api/connectors/test` | Migrada de `getAuthClient` para `requireUser()`                                                     |

#### Padrão de Segurança Estabelecido

- Todas as rotas agora extraem `userId` do JWT (nunca do body/query params)
- DELETE e PATCH verificam ownership antes de executar
- Rotas OAuth (Google/GitHub) mantêm query param `userId` (redirect do browser não envia JWT)
- Front-end não precisa alterar: `userId` nos params é ignorado, JWT é a fonte de verdade

---

## v0.5.0-alpha — 2026-09-17

### Segurança Crítica (FASE 1)

- **`apps/desktop/src/router9/index.ts`** — Auth middleware JWT + path sandbox com `fs.realpath` + validação de symlink + `ROOT_DIR` fixo
- **`apps/desktop/src/server.ts`** — JWT_SECRET fail-fast + helmet + CORS com `ALLOWED_ORIGINS` + rate limit
- **`apps/desktop/src/pc-agent/server.ts`** — `authMiddleware` em `PATCH /cancel` e `DELETE` + JWT fail-fast + CORS fix
- **`apps/web/src/app/api/terminal/exec/route.ts`** — Auth obrigatória em produção (bloqueia sem Supabase)
- **`packages/ia/src/tools/bridge.ts`** — `ops/run-command` removido do allowlist

### Deploy

- **`vercel.json`** — `builds` removido, `installCommand` com `--no-frozen-lockfile`, `framework: nextjs`

### Auditoria

- **`docs/audit/baseline.md`** — Documento de baseline criado (FASE 0)
- **`.task_state.md`** — Rastro de estado para recuperação automática

---

## v0.4.0-alpha — 2026-09-17

### Eleven Coder (Terminal Interativo)

- **`packages/api/src/modules/terminal/pty-manager.service.ts`** — PTY Session Manager com node-pty, suporte bash/zsh/powershell/cmd, sessões por usuário (max 5), timeout 30min
- **`packages/api/src/modules/terminal/terminal.gateway.ts`** — WebSocket Gateway NestJS com autenticação JWT Supabase, eventos: create-session, input, output, resize, kill-session
- **`packages/api/src/modules/terminal/terminal.module.ts`** — Módulo NestJS para terminal
- **`apps/web/src/components/ElevenCoder.tsx`** — Frontend xterm.js com UI IDE-style: tabs, HUD, copiar/colar/reconectar, tema OLED
- **`apps/web/src/app/coder/page.tsx`** — Rota `/coder`

### NeuralGraph Redesign

- **`apps/web/src/components/NeuralGraph.tsx`** — Reescrito: OLED (#05050A), glassmorphism, partículas animadas, energy beams, layout clusters, search filter

### Segurança (CRITICAL fixes)

- **Service role key fallback removido** em 12 arquivos — user-facing clients agora usam apenas `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Hardcoded Supabase URL removida** em `health.controller.ts`
- **CORS wildcard corrigido** em `main.ts` — usa `ALLOWED_ORIGINS` env var
- **Settings route** — verificação de ownership (userId autenticado === userId solicitado)
- **Media route** — service role key substituída por anon key no client user-facing
- **Orphaned `exec.controller.js`** removido do tracking (execução arbitrária sem auth)

### Infra & CI/CD

- **`.gitignore`** — reescrito com regras para `dist/`, `*.tsbuildinfo`, `.expo/`, `*.log`
- **`dist/` removido** de todos os packages do git tracking (~100+ arquivos)
- **`.tsbuildinfo` removido** de todos os packages
- **`.expo/` removido** do tracking
- **`packages/tsconfig.json`** duplicado removido
- **`.eslintignore`** redundante removido (coberto por `.eslintrc.cjs`)
- **`@types/*`** movidos de `dependencies` para `devDependencies` no root
- **`workspaces` key** removida do root `package.json` (pnpm não usa)
- **`node-pty`** movido para `optionalDependencies` no `packages/api`
- **`socket.io-client`** adicionado ao `apps/web`
- **`@nestjs/websockets` + `socket.io`** adicionados ao `packages/api`
- **`next.config.js`** — fallbacks webpack para módulos Node.js

### Testes

- **terminal-validate** — 17/17 passando (validação de comandos, path containment, baseCommand)
- **`validate()`** agora aceita `allowedRoots` customizáveis

### Arquivos criados

| Arquivo                                                    | Descrição           |
| ---------------------------------------------------------- | ------------------- |
| `packages/api/src/modules/terminal/pty-manager.service.ts` | PTY Session Manager |
| `packages/api/src/modules/terminal/terminal.gateway.ts`    | WebSocket Gateway   |
| `packages/api/src/modules/terminal/terminal.module.ts`     | Terminal Module     |
| `apps/web/src/components/ElevenCoder.tsx`                  | Frontend terminal   |
| `apps/web/src/app/coder/page.tsx`                          | Rota /coder         |
| `docs/TLOG.md`                                             | Este arquivo        |

### Arquivos modificados

| Arquivo                                      | Mudança                             |
| -------------------------------------------- | ----------------------------------- |
| `packages/api/src/modules/app.module.ts`     | TerminalModule importado            |
| `packages/api/src/main.ts`                   | CORS com ALLOWED_ORIGINS            |
| `packages/api/package.json`                  | node-pty optional, websockets deps  |
| `apps/web/next.config.js`                    | webpack fallbacks                   |
| `apps/web/package.json`                      | socket.io-client                    |
| `apps/web/src/components/NeuralGraph.tsx`    | Redesign completo                   |
| `apps/web/src/components/Sidebar.tsx`        | Aba Eleven Coder                    |
| `apps/web/src/app/page.tsx`                  | Import ElevenCoder                  |
| `apps/web/src/lib/terminal-validate.ts`      | allowedRoots param                  |
| `apps/web/src/lib/terminal-validate.test.ts` | TEST_ROOTS                          |
| `.gitignore`                                 | Regras expandidas                   |
| `vercel.json`                                | builds config restaurado            |
| `package.json`                               | @types→devDeps, workspaces removido |
| 12 arquivos backend                          | Service role key fix                |

### Arquivos removidos do tracking

- `packages/*/dist/`, `apps/mobile/dist/`, `apps/web/tsconfig.tsbuildinfo`, `packages/*/tsconfig.tsbuildinfo`, `apps/mobile/.expo/`, `.eslintignore`, `packages/tsconfig.json`

---

## v0.3.0-alpha — 2026-09-17

(Veja CHANGELOG.md para detalhes completos)
