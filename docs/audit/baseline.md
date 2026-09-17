# Baseline — Projeto 11

Data: 2026-09-17
Versão: 0.4.1-alpha

## 1. Arquitetura Mapeada

### Monorepo (pnpm workspaces)

| Camada | Pacote | Descrição |
|--------|--------|-----------|
| **Frontend** | `apps/web` | Next.js 14+ (App Router), UI ChatGPT-style, API routes |
| **Desktop** | `apps/desktop` | Tauri 2 + Express (PC Agent + Router9) |
| **Mobile** | `apps/mobile` | Capacitor + React Native |
| **API** | `packages/api` | NestJS (auth, bridge, store, deploy, terminal) |
| **IA** | `packages/ia` | ModelGateway, adapters (9Router/Gemini/Anthropic/MiniMax), tools, cost-breaker |
| **Shared** | `packages/shared` | Redux store, tipos compartilhados |
| **CLI** | `packages/cli` | Codegen, deploy scripts, git-guard |

### APIs Principais (apps/web)

| Rota | Método | Função |
|------|--------|--------|
| `/api/chat` | POST | Chat com routing multi-provider (9Router/Gemini/Anthropic) |
| `/api/terminal/exec` | POST/GET | Terminal web via spawn (PowerShell/bash) |
| `/api/code` | POST | Executor de código sandboxed |
| `/api/connectors/*` | GET/POST | OAuth connectors (Google, GitHub, Slack, Notion) |
| `/api/media` | POST | Upload + análise de mídia via IA |
| `/api/memories` | GET/POST | Memórias do usuário |
| `/api/settings` | GET/POST | Configurações do usuário |
| `/api/skills` | GET | Catálogo de skills |
| `/api/plugins` | GET | Plugins instalados |

### APIs Desktop

| Servidor | Porta | Rotas |
|----------|-------|-------|
| **Router9** (`server.ts`) | 3001/3002 | `POST /router9` (stt, file, remote, media, health) |
| **PC Agent** (`pc-agent/server.ts`) | 3001 | `GET/POST/PATCH/DELETE /api/sessions/*`, WebSocket |

### APIs NestJS (packages/api)

| Módulo | Rotas | Guard |
|--------|-------|-------|
| AuthModule | `POST /auth/magic-link`, `GET /auth/me` | SessionGuard |
| BridgeModule | `GET/POST /ops/*` (list-files, read-file, write-file, run-build, run-command, run-tests) | RateLimitGuard + SessionGuard |
| TerminalModule | WebSocket `/terminal` (node-pty) | Supabase JWT via WS handshake |
| StoreModule | CRUD genérico | — |
| DeployModule | Deploy management | — |

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
- **Status**: ✅ PASS (com warnings de peer dependencies react-native)
- **Lockfile**: Sincronizado via `--no-frozen-lockfile`

### pnpm typecheck
- **Status**: ⚠️ NENHUM SCRIPT DEFINIDO
- Nenhum pacote workspace tem script `typecheck`. Tipo verificado apenas via `tsc` no build do shared.

### pnpm lint
- **Status**: ✅ PASS (2 warnings, 0 errors)
  - `security.test.ts:6` — unused var `token` (warning)
  - `ElevenCoder.tsx:132` — ref em cleanup de effect (warning)

### pnpm test
- **Status**: ✅ PASS (35/35 testes)
  - `packages/ia`: 5 testes (long-context, provider-pinning)
  - `packages/shared`: 1 teste (store)
  - `apps/web`: 29 testes (security, terminal-validate, session-manager, parse-completion)

### pnpm build
- **Status**: ✅ PASS (com warnings)
  - `@11/shared` → tsc OK
  - `@11/web` → next build OK
  - Warnings: `bufferutil` e `utf-8-validate` não resolvidos (dependências opcionais de `ws`)

---

## 3. Problemas Críticos Identificados

### CRÍTICO 1: Router9 sem Autenticação + Path Traversal

**Arquivos**: `apps/desktop/src/server.ts:28`, `apps/desktop/src/router9/index.ts:43-65`

```typescript
// server.ts — rota exposta sem nenhum middleware de auth
app.post('/router9', routerHandler);

// router9/index.ts — fileOp aceita qualquer path sem validação
async function fileOp(payload: any) {
  const absPath = path.resolve(targetPath ?? '.'); // SEM validação!
  // read/write/list em qualquer path do filesystem
}
```

**Impacto**: Qualquer pessoa na rede pode ler/escrever/arquivos arbitrários no servidor. RCE indireto.

**Testes necessários**:
- [ ] Sem JWT → 401
- [ ] JWT inválido → 401
- [ ] Path traversal (`../../etc/passwd`) → bloqueado
- [ ] Absolute path fora do root → bloqueado
- [ ] Symlink escape → bloqueado
- [ ] Caminho válido dentro do root → permitido

---

### CRÍTICO 2: PC Agent — Auth Middleware Ausente + JWT Secret Hardcoded

**Arquivo**: `apps/desktop/src/pc-agent/server.ts`

```typescript
// Linha 9 — fallback inseguro
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production';

// Linha 190 — SEM authMiddleware (req.user.userId = undefined)
app.patch('/api/sessions/:id/cancel', async (req, res) => {
  const userId = (req as any).user.userId; // CRASH ou bypass

// Linha 219 — SEM authMiddleware
app.delete('/api/sessions/:id', async (req, res) => {
  const userId = (req as any).user.userId; // CRASH ou bypass

// Linha 54 — CORS wildcard como fallback
app.use(cors({ origin: process.env.ALLOWED_ORIGINS?.split(',') ?? '*', credentials: true }));
```

**Impacto**: Qualquer um pode cancelar/deletar sessões de outro usuário. JWT forjável em produção se `JWT_SECRET` não estiver setado.

**Testes necessários**:
- [ ] Sem auth → 401
- [ ] Usuário errado → 403
- [ ] Usuário correto → permitido
- [ ] Produção sem JWT_SECRET → startup failure

---

### CRÍTICO 3: Terminal Auth Bypass + Bridge Arbitrário

**Arquivos**: `apps/web/src/app/api/terminal/exec/route.ts:58-68`, `packages/ia/src/tools/bridge.ts:8`

```typescript
// terminal/exec/route.ts — auth pulada se Supabase não configurado
const hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
if (hasSupabase) {
  // ... auth check
}
// Se !hasSupabase → QUALQUER UM executa comandos

// bridge.ts — ops/run-command no allowlist = execução arbitrária
const ALLOWED_OPS = new Set(['ops/list-files', 'ops/read-file', 'ops/run-build', 'ops/run-command', 'ops/run-tests']);
```

**Impacto**: Em dev local, terminal é totalmente aberto. Bridge permite execução de comandos arbitrários via API.

---

## 4. Dívida Técnica Registrada

| ID | Arquivo | Problema | Severidade |
|----|---------|----------|------------|
| DT-001 | `packages/cli/src/generators/codegen.ts:10` | Pasta `templates` não existe — codegen falha | HIGH |
| DT-002 | `apps/mobile/tsconfig.json` | `noEmit` pode conflitar com `extends` | MEDIUM |
| DT-003 | `.env.example` | Variáveis faltantes: `OPENROUTER_API_KEY` | LOW |
| DT-004 | `packages/ia/src/router/cost-breaker.ts:13` | `spentPaid` em memória — reset a cada cold start | HIGH |
| DT-005 | `packages/ia/src/tools/bridge.ts:8` | `ops/run-command` no allowlist = RCE | CRITICAL |
| DT-006 | `supabase/` | Migrações SQL não versionadas no repo | MEDIUM |
| DT-007 | Root `package.json` | Sem script `typecheck` definido | LOW |
| DT-008 | `packages/ia/src/router/cost-breaker.ts:19-22` | Supabase client com credenciais vazias = fail silencioso | MEDIUM |
| DT-009 | `apps/web/src/app/api/terminal/exec/route.ts:29` | `resolveCwd` só substitui primeiro `~` | LOW |
| DT-010 | `apps/web/src/app/api/terminal/exec/route.ts:180-188` | GET expõe session state sem auth | MEDIUM |

---

## 5. Resumo do Deploy (Investigação)

**Causa raiz do deploy não atualizar**: O `vercel.json` usa `"builds"` que sobrepõe Project Settings. O `pnpm install` falha com `ERR_PNPM_OUTDATED_LOCKFILE` porque o `pnpm-lock.yaml` ficava desincronizado. Resolvido com `--no-frozen-lockfile` no `installCommand`.

**Status atual**: Deploy funciona (v0.4.1-alpha publicada com tag).
