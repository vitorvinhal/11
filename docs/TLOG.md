# TLOG — Technical Log

Registro técnico de todas as versões do projeto 11.

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
| Rota | Mudança |
|------|---------|
| `/api/chat` | Auth obrigatória via `requireUser()`, userId derivado do JWT (antes: corpo da requisição, sem auth) |
| `/api/memories` | Auth em GET/POST/DELETE, userId do JWT, DELETE com `.eq('user_id', userId)` |
| `/api/projects` | Auth em GET/POST/PATCH/DELETE, ownership check via `assertRowOwnership` em PATCH/DELETE |
| `/api/plugins` | Auth em GET/POST/PATCH/DELETE, ownership check em PATCH/DELETE, bug do query builder corrigido |
| `/api/skills` | Auth em GET/POST/PATCH/DELETE, ownership check em PATCH/DELETE |
| `/api/connectors` | Auth em GET/POST/DELETE, ownership check em DELETE por id |
| `/api/artifacts` | Auth em GET/POST/DELETE, ownership check em DELETE, bug do query builder corrigido |
| `/api/connectors/test` | Migrada de `getAuthClient` para `requireUser()` |

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
| Arquivo | Descrição |
|---------|-----------|
| `packages/api/src/modules/terminal/pty-manager.service.ts` | PTY Session Manager |
| `packages/api/src/modules/terminal/terminal.gateway.ts` | WebSocket Gateway |
| `packages/api/src/modules/terminal/terminal.module.ts` | Terminal Module |
| `apps/web/src/components/ElevenCoder.tsx` | Frontend terminal |
| `apps/web/src/app/coder/page.tsx` | Rota /coder |
| `docs/TLOG.md` | Este arquivo |

### Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `packages/api/src/modules/app.module.ts` | TerminalModule importado |
| `packages/api/src/main.ts` | CORS com ALLOWED_ORIGINS |
| `packages/api/package.json` | node-pty optional, websockets deps |
| `apps/web/next.config.js` | webpack fallbacks |
| `apps/web/package.json` | socket.io-client |
| `apps/web/src/components/NeuralGraph.tsx` | Redesign completo |
| `apps/web/src/components/Sidebar.tsx` | Aba Eleven Coder |
| `apps/web/src/app/page.tsx` | Import ElevenCoder |
| `apps/web/src/lib/terminal-validate.ts` | allowedRoots param |
| `apps/web/src/lib/terminal-validate.test.ts` | TEST_ROOTS |
| `.gitignore` | Regras expandidas |
| `vercel.json` | builds config restaurado |
| `package.json` | @types→devDeps, workspaces removido |
| 12 arquivos backend | Service role key fix |

### Arquivos removidos do tracking
- `packages/*/dist/`, `apps/mobile/dist/`, `apps/web/tsconfig.tsbuildinfo`, `packages/*/tsconfig.tsbuildinfo`, `apps/mobile/.expo/`, `.eslintignore`, `packages/tsconfig.json`

---

## v0.3.0-alpha — 2026-09-17
(Veja CHANGELOG.md para detalhes completos)
