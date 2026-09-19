# Baseline — Projeto 11

Data: 2026-09-18 (última verificação)
Versão: 2.10.0-alpha

## 1. Arquitetura Mapeada

### Monorepo (pnpm workspaces)

| Camada       | Pacote            | Descrição                                                                      |
| ------------ | ----------------- | ------------------------------------------------------------------------------ |
| **Frontend** | `apps/web`        | Next.js 14+ (App Router), UI ChatGPT-style, API routes                         |
| **Desktop**  | `apps/desktop`    | Tauri 2 + Express (PC Agent + Router9)                                         |
| **Mobile**   | `apps/mobile`     | Capacitor + React Native                                                       |
| **API**      | `packages/api`    | NestJS (auth, bridge, store, deploy, terminal)                                 |
| **IA**       | `packages/ia`     | ModelGateway, adapters (9Router/Gemini/Anthropic/MiniMax), tools, cost-breaker |
| **Shared**   | `packages/shared` | Redux store, tipos compartilhados                                              |
| **CLI**      | `packages/cli`    | Codegen, deploy scripts, git-guard                                             |

### APIs Principais (apps/web)

| Rota                 | Método   | Função                                                     |
| -------------------- | -------- | ---------------------------------------------------------- |
| `/api/chat`          | POST     | Chat com routing multi-provider (9Router/Gemini/Anthropic) |
| `/api/terminal/exec` | POST/GET | Terminal web via spawn (PowerShell/bash)                   |
| `/api/code`          | POST     | Executor de código sandboxed                               |
| `/api/connectors/*`  | GET/POST | OAuth connectors (Google, GitHub, Slack, Notion)           |
| `/api/media`         | POST     | Upload + análise de mídia via IA                           |
| `/api/memories`      | GET/POST | Memórias do usuário                                        |
| `/api/settings`      | GET/POST | Configurações do usuário                                   |
| `/api/skills`        | GET      | Catálogo de skills                                         |
| `/api/plugins`       | GET      | Plugins instalados                                         |

### APIs Desktop

| Servidor                            | Porta     | Rotas                                              |
| ----------------------------------- | --------- | -------------------------------------------------- |
| **Router9** (`server.ts`)           | 3001/3002 | `POST /router9` (stt, file, remote, media, health) |
| **PC Agent** (`pc-agent/server.ts`) | 3001      | `GET/POST/PATCH/DELETE /api/sessions/*`, WebSocket |

### APIs NestJS (packages/api)

| Módulo         | Rotas                                                                                    | Guard                         |
| -------------- | ---------------------------------------------------------------------------------------- | ----------------------------- |
| AuthModule     | `POST /auth/magic-link`, `GET /auth/me`                                                  | SessionGuard                  |
| BridgeModule   | `GET/POST /ops/*` (list-files, read-file, write-file, run-build, run-command, run-tests) | RateLimitGuard + SessionGuard |
| TerminalModule | WebSocket `/terminal` (node-pty)                                                         | Supabase JWT via WS handshake |
| StoreModule    | CRUD genérico                                                                            | —                             |
| DeployModule   | Deploy management                                                                        | —                             |

### ModelGateway (packages/ia)

```
Request → Compactação Contexto → Provider Selection → Adapter.complete() → CostBreaker.track() → Response
```

Adapters: 9router (free) → gemini (free) → anthropic (paid) → minimax (paid)
Fallback cascata com provider pinning por sessão.

### Banco de Dados (Supabase)

Tabelas identificadas no código:

- `users`, `sessions`, `messages`, `memories`, `embeddings`
- `agent_states`, `artifacts`, `plugins`
- `bridge_audit_log`, `model_usage`
- `projects`, `skills_projects`

**⚠️ Migrações SQL não estão no repositório** — gerenciadas externamente via Supabase Dashboard.

---

## 2. Resultados da Baseline

### pnpm install

- **Status**: ✅ OK

### Typecheck (por pacote)

- **Status**: ✅ OK (npx tsc --noEmit para web, ia, shared)
- Todos os 3 pacotes passam sem erros

### Lint (apps/web)

- **Status**: ✅ PASS (7 warnings, 0 errors)
  - `agent/route.ts:53` — unused var `provider` (pre-existing)
  - `security.test.ts:6` — unused var `token` (pre-existing)
  - `ChatPanel.tsx:440,499` — missing deps `getAccessToken`/`user` (pre-existing)
  - `ElevenCoder.tsx:132` — ref em cleanup de effect (pre-existing)
  - `Loading.tsx:3` — unused import `ReactNode` (pre-existing)
  - `api-versioning.test.ts:4` — unused `isVersionDeprecated` (pre-existing)

### Test (npx jest)

- **Status**: ✅ PASS (385/385 testes, 30 suites)
  - `packages/ia`: 11 testes
  - `apps/web`: 374 testes
  - Todos passando, 0 falhas

### Build (pnpm build)

- **Status**: ✅ OK
  - `@11/shared` → tsc OK
  - `@11/ia` → tsc + copy-assets OK
  - `@11/web` → next build OK (24 pages)
  - Warnings: `bufferutil`/`utf-8-validate` não resolvidos (deps opcionais de `ws`) — pre-existing

---

## 3. Problemas Críticos — Status (2026-09-18)

### ✅ CRÍTICO 1: Router9 Path Traversal — CORRIGIDO

**Arquivo**: `apps/desktop/src/router9/index.ts`

- Adicionada função `isInsideRoot()` que valida com `path.sep` (antes usava `startsWith` simples)
- Adicionado fallback de traversal: quando path nem parent existem, sobe até diretório existente e valida
- Teste unitário criado: `safePath.test.ts` — 8/8 testes passando (sibling-dir, absolute, parent-dir, same-dir, valid read)

### ✅ CRÍTICO 2: PC Agent Auth — JÁ CORRIGIDO (FASE 1)

- `authMiddleware` aplicado em `PATCH /cancel` e `DELETE` em `pc-agent/server.ts`
- JWT_SECRET com fail-fast (sem fallback hardcoded)
- CORS usa `ALLOWED_ORIGINS`

### ✅ CRÍTICO 3: Terminal + Bridge — JÁ CORRIGIDO (FASE 1)

- `bridge.ts`: `ops/run-command` removido do allowlist (agora só 4 ops seguras)
- `terminal/exec`: auth obrigatória em produção (bloqueia sem Supabase)

### ✅ RLS: 10/10 tabelas de negócio com RLS habilitado

`sessions`, `messages`, `memories`, `projects`, `skills`, `plugins`, `artifacts`, `media`, `pending_actions`, `checkpoints` — todas com policy `auth.uid() = user_id`.

## 4. Dívida Técnica Registrada

| ID     | Arquivo                                               | Problema                                                 | Severidade       |
| ------ | ----------------------------------------------------- | -------------------------------------------------------- | ---------------- |
| DT-001 | `packages/cli/src/generators/codegen.ts:10`           | Pasta `templates` não existe — codegen falha             | HIGH             |
| DT-002 | `apps/mobile/tsconfig.json`                           | `noEmit` pode conflitar com `extends`                    | MEDIUM           |
| DT-003 | `.env.example`                                        | Variáveis faltantes: `OPENROUTER_API_KEY`                | LOW              |
| DT-004 | `packages/ia/src/router/cost-breaker.ts:13`           | `spentPaid` em memória — reset a cada cold start         | HIGH             |
| DT-005 | `packages/ia/src/tools/bridge.ts:8`                   | ~~`ops/run-command` no allowlist = RCE~~ **CORRIGIDO**   | CRITICAL → FIXED |
| DT-006 | `supabase/`                                           | Migrações SQL não versionadas no repo                    | MEDIUM           |
| DT-007 | Root `package.json`                                   | Sem script `typecheck` definido                          | LOW              |
| DT-008 | `packages/ia/src/router/cost-breaker.ts:19-22`        | Supabase client com credenciais vazias = fail silencioso | MEDIUM           |
| DT-009 | `apps/web/src/app/api/terminal/exec/route.ts:29`      | `resolveCwd` só substitui primeiro `~`                   | LOW              |
| DT-010 | `apps/web/src/app/api/terminal/exec/route.ts:180-188` | GET expõe session state sem auth                         | MEDIUM           |

---

## 5. Resumo do Deploy (Investigação)

**Causa raiz do deploy não atualizar**: O `vercel.json` usa `"builds"` que sobrepõe Project Settings. O `pnpm install` falha com `ERR_PNPM_OUTDATED_LOCKFILE` porque o `pnpm-lock.yaml` ficava desincronizado. Resolvido com `--no-frozen-lockfile` no `installCommand`.

**Status atual**: Deploy funciona (v0.4.1-alpha publicada com tag).
