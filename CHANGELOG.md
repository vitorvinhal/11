# Changelog — 11

Todas as alterações significativas são documentadas aqui.
O versionamento segue: `v0.{MAIOR}.{MENOR}-{canal}` (alpha → rc → estável).

Versão atual em `apps/web/public/version.json`. Bump automático:

```bash
pnpm version:patch   # v0.6.0-alpha → v0.6.1-alpha
pnpm version:minor   # v0.6.0-alpha → v0.7.0-alpha
pnpm version:major   # v0.6.0-alpha → v1.0.0-alpha
pnpm version:rc      # patch e troca canal para rc
```

Bump com notas de release:

```bash
node scripts/version.js minor --change "Multi-tenancy: auth reutilizável + ownership checks"
```

---

## v1.2.0-alpha — 2026-09-17

### 🖥️ FASE 8A — Frontend AgentCore Integration
- **ChatPanel**: novo modelo "Agent · Tools + Safety" no seletor
- Quando selecionado, usa `/api/agent` em vez de `/api/chat`
- Suporte a streaming em ambos os modos

### 🛡️ FASE 8B — Rate Limiting
- **`rate-limiter.ts`**: classe RateLimiter com check(), getHeaders(), cleanup()
- Presets: chat (30/min), agent (10/min), auth (5/min), upload (20/min)
- Headers HTTP padrão: X-RateLimit-Limit, Remaining, Reset, Retry-After
- Cleanup automático a cada 5 minutos
- 13 testes unitários

### 📊 Testes
- 264 testes passando (222 IA + 42 web)

---

## v1.1.0-alpha — 2026-09-17

### 📡 FASE 7A — Streaming SSE
- **`/api/agent`** agora suporta `stream: true` — eventos em tempo real: `meta`, `delta`, `done`, `error`
- Efeito "digitando" para respostas do agente

### ✅ FASE 7B — Tool Approval Flow
- **POST `/api/agent/approve`**: aprovar ou rejeitar ações pendentes (DESTRUCTIVE)
- **GET `/api/agent/approve`**: listar ações pendentes do usuário
- Ownership check: cada usuário só vê suas próprias ações

### 📊 FASE 7C — Agent Metrics
- **`agent/metrics.ts`**: coleta de métricas em tempo real
- Métricas: latência, tool calls, distribuição de risco, erros, tokens
- `getMetricSummary()`: resumo agregado para dashboards
- 17 testes unitários

### 📊 Testes
- 251 testes passando (222 IA + 29 web)
- 11 suites de teste no pacote IA

---

## v1.0.0-alpha — 2026-09-17

### 🛡️ FASE 4 — Safety Engine
- **Risk Engine**: 50+ regras de classificação (SAFE/REVERSIBLE/DESTRUCTIVE) para filesystem, terminal, git, SQL, network, deploy, AI, memory, user, plugin, skill
- **Dry-Run Engine**: simulação real antes de executar — SQL via SELECT, CLI via --dry-run, filesystem via verificação de path
- **Checkpoint & Rollback**: createCheckpoint() antes de ações REVERSIBLE, restoreCheckpoint() em caso de falha
- **Pending Actions**: fila de aprovação para ações DESTRUCTIVE
- Migration SQL: `checkpoints` + `pending_actions` com RLS

### 🤖 FASE 5 — Agent Core
- **AgentCore**: loop LLM → tool_calls → safety check → execute → repeat (max 10 iterações)
- **ToolExecutor**: pipeline completo com classify → dry-run → checkpoint → execute → rollback
- **Session Manager**: persistência de sessões com TTL (24h), token usage tracking
- 7 tools: file_read, file_write, file_delete, terminal_exec, git_status, git_diff, git_commit

### 🔌 FASE 6 — API + Memory
- **Agent API** (`/api/agent`): endpoint para AgentCore com autenticação
- **Memory Module**: saveMemory(), searchMemories() por similaridade, getRecentMemories()
- **Integration Tests**: 17 testes de integração Safety → Agent → Memory

### 📊 Testes
- 234 testes passando (205 IA + 29 web)
- 10 suites de teste no pacote IA

---

## v0.9.0-alpha — 2026-09-17

### 🔐 Security Fix — IDOR em Connectors Google
- **google/drive, gmail, calendar**: adicionado `requireUser()` — antes qualquer request com userId no query acessava dados de qualquer usuário (IDOR crítico)
- **google/gmail**: Supabase key corrigida de `ANON` para JWT via `requireUser()`

### 🌐 Deploy Fix — Domínio de Produção
- Domínio `11-five-umber.vercel.app` estava associado ao projeto Vercel errado (`eleven` ao invés de `11-app`)
- Corrigido via `vercel domains add --force` — agora serve v0.9.0-alpha
- **Versão hardcoded** em `/api/version` como fallback (garante display correto mesmo com cache CDN)

### 🧹 Limpeza do Repositório
- Removidos 11 PNGs de mockup (`_*.png`) do git tracking
- Removido `apps/dist/` (build Vite desktop) do tracking
- `.gitignore` atualizado com padrão `_*.png`

### 📊 Auditoria de Connectors
- 13 rotas de connectors auditadas
- 3 rotas Google com IDOR corrigido (drive/gmail/calendar)
- 4 rotas OAuth callback: Google tem CSRF cookie ✅, GitHub/Slack/Notion sem CSRF (risco médio, aceitável para fluxo OAuth)
- Todas as 16 tabelas Supabase com RLS habilitado e políticas corretas

---

## v0.8.0-alpha — 2026-09-17

### 🔐 Consistência de Auth
- **Settings route** migrada para `requireUser()` — todas as 13 rotas API agora usam o mesmo padrão

### 🧹 Limpeza
- **`@inferencesh/sdk`** removido do root `package.json` (dependência fantasma, nunca importada)

### 📊 Auditoria do Checklist
- 15 itens verificados: 8 DONE, 5 PARTIAL (cosmético), 1 NOT DONE (relatório)
- Migrations SQL completas em `infra/supabase/migrations/`

### 🚀 Deploy
- `vercel.json` sem `routes` — routing automático do Next.js habilitado
- **IMPORTANTE:** Verifique o Vercel Dashboard → Settings → Root Directory deve ser `.` (repo root)

---

## v0.7.0-alpha — 2026-09-17

### 🚀 Deploy Fix
- **vercel.json**: Removido `routes` que sobrepunha o routing automático do Next.js — causa do deploy não atualizar o sistema

### 💰 CostBreaker — Contabilização Real
- **`cost-breaker.ts`**: `track()` agora aceita `inputTokens` e `outputTokens`; `persist()` sempre grava uso (antes só gravava quando `spent > 0`)
- **`router/index.ts`**: Fallback para `estimateCost()` quando adapter retorna `costUnits=0`; passa token counts para `track()`
- **`9router.ts`**: `parseUsage()` extrai `prompt_tokens` e `completion_tokens` da resposta OpenAI-compatível (JSON puro e SSE)
- **`gemini.ts`**: Token counts já eram retornados; agora são persistidos corretamente

### 📊 Auditoria FASE 3
- 7/8 itens já fixados na FASE 1 (1.1-1.5, 1.7-1.8)
- 1.6 CostBreaker corrigido nesta versão

---

## v0.6.0-alpha — 2026-09-17

### 🔐 Multi-Tenancy & Isolamento (FASE 2)
- **Helper `requireUser()`** criado em `lib/auth-helpers.ts` — extrai JWT do header, valida com Supabase, retorna userId server-side
- **Todas as 12 rotas API** agora usam JWT-based auth (antes: 4 faziam, 8 dependiam de RLS ou não tinham auth)
- **Ownership checks** em PATCH/DELETE para projects, skills, plugins, connectors, artifacts, memories
- **Chat route**: autenticação obrigatória (antes era aberta sem auth); userId derivado do JWT
- **Connectors test route**: migrada para `requireUser()` (antes usava userId do body)
- **Bugs corrigidos**: query builder em plugins e artifacts não reatribuava `q` (filtro podia falhar)

### 📊 Rotas corrigidas
| Rota | Antes | Depois |
|------|-------|--------|
| `/api/chat` | Sem auth, userId do body | JWT obrigatório, userId do token |
| `/api/memories` | RLS-only, userId opcional | JWT obrigatório, userId do token |
| `/api/projects` | Sem ownership em PATCH/DELETE | `assertRowOwnership` em PATCH/DELETE |
| `/api/plugins` | Sem ownership, bug query builder | Ownership + bug fix |
| `/api/skills` | Sem ownership em PATCH/DELETE | `assertRowOwnership` em PATCH/DELETE |
| `/api/connectors` | userId do body em POST/DELETE | JWT obrigatório, ownership em DELETE |
| `/api/artifacts` | userId do body, bug query builder | JWT + ownership + bug fix |
| `/api/connectors/test` | userId do body | JWT obrigatório |

### 🛠️ Arquivos criados
| Arquivo | Descrição |
|---------|-----------|
| `apps/web/src/lib/auth-helpers.ts` | Helper de auth reutilizável (requireUser, assertRowOwnership) |

### 📊 Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `apps/web/src/app/api/chat/route.ts` | Auth obrigatória via requireUser |
| `apps/web/src/app/api/memories/route.ts` | Auth + ownership em DELETE |
| `apps/web/src/app/api/projects/route.ts` | Auth + ownership em PATCH/DELETE |
| `apps/web/src/app/api/plugins/route.ts` | Auth + ownership + bug fix |
| `apps/web/src/app/api/skills/route.ts` | Auth + ownership em PATCH/DELETE |
| `apps/web/src/app/api/connectors/route.ts` | Auth + ownership em DELETE |
| `apps/web/src/app/api/connectors/test/route.ts` | Migrada para requireUser |
| `apps/web/src/app/api/artifacts/route.ts` | Auth + ownership + bug fix |
| `package.json` | Versão 0.6.0-alpha |
| `apps/web/public/version.json` | Versão 0.6.0-alpha |
| `docs/TLOG.md` | Entrada v0.6.0-alpha |

---

## v0.5.0-alpha — 2026-09-17

### 🔐 Segurança Crítica (FASE 1)
- **Router9 protegido**: JWT authentication obrigatória + path sandbox com `fs.realpath` e validação de symlink
- **PC Agent protegido**: `authMiddleware` adicionado em `PATCH /cancel` e `DELETE` (antes expostos)
- **JWT_SECRET fail-fast**: Servidor recusa iniciar sem `JWT_SECRET` definido (remove fallback `dev-secret-change-in-production`)
- **CORS corrigido**: Wildcard `*` substituído por `ALLOWED_ORIGINS` em ambos os servidores
- **Terminal auth obrigatória**: Bloqueado em produção sem Supabase configurado
- **Bridge seguro**: `ops/run-command` removido do allowlist (impedia execução arbitrária)

### 🛠️ Deploy
- **vercel.json**: Removido `builds` que sobrepunha Project Settings; adicionado `--no-frozen-lockfile`
- Deploy agora reflete alterações de código corretamente

### 📊 Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `apps/desktop/src/server.ts` | JWT auth + helmet + CORS + rate limit |
| `apps/desktop/src/router9/index.ts` | Auth middleware + ROOT_DIR sandbox + fs.realpath |
| `apps/desktop/src/pc-agent/server.ts` | authMiddleware em todas as rotas + JWT fail-fast + CORS fix |
| `apps/web/src/app/api/terminal/exec/route.ts` | Auth obrigatória em produção |
| `packages/ia/src/tools/bridge.ts` | ops/run-command removido do allowlist |
| `vercel.json` | builds removido, installCommand com --no-frozen-lockfile |

## v0.4.1-alpha — 2026-09-17

### 🛠️ Correção lockfile
- `pnpm install --no-frozen-lockfile` sincroniza lockfile com package.json, impede erro `ERR_PNPM_OUTDATED_LOCKFILE`.
- Deploy Vercel agora reflete alterações de código.



### 🖥️ Eleven Coder (Terminal Interativo)
- **PTY Session Manager**: sessões PTY reais com node-pty, suporte a bash/zsh/powershell/cmd
- **WebSocket Gateway**: NestJS WebSocket com autenticação JWT Supabase, eventos create-session/input/output/resize/kill
- **Frontend xterm.js**: UI IDE-style com:
  - Tabs de sessão com indicadores de status (conectado/desconectado)
  - HUD footer com info de conexão e contagem de sessões
  - Ações: copiar seleção, colar, limpar terminal, reconectar
  - Tema OLED (#05050A) com cyan/magenta accents
  - Fonte JetBrains Mono, cursor bar com blink
  - Suporte a web links clicáveis
- **Sidebar**: aba "Eleven Coder" integrada à navegação principal

### 🧠 Rede Neural (NeuralGraph)
- **Redesign completo**: visual futurista OLED (#05050A), glassmorphism panels
- **Partículas animadas**: sistema de partículas no fundo com movimento orgânico
- **Energy beams**: conexões entre nós com gradiente cyan→magenta e animação
- **Layout em clusters**: nós agrupados por tipo (core, ia, memory, integration)
- **HUD overlays**: contadores animados, legenda por tipo de nó
- **Search filter**: filtro por label com highlighting de matches
- **Node detail panel**: sidebar com info detalhada do nó selecionado

### 🔐 Segurança (CRITICAL)
- **Service role key fallback removido** em 12 arquivos — user-facing clients agora usam apenas `NEXT_PUBLIC_SUPABASE_ANON_KEY`, admin clients usam `SUPABASE_SERVICE_ROLE_KEY`
- **Hardcoded Supabase URL removida** de `health.controller.ts`
- **CORS wildcard corrigido** — `main.ts` agora usa `ALLOWED_ORIGINS` env var (comma-separated)
- **Settings route** — verificação de ownership: userId autenticado deve coincidir com userId solicitado
- **Media route** — service role key substituída por anon key no client user-facing
- **Orphaned `exec.controller.js`** removido do tracking (execução arbitrária sem auth/validação)

### 🧹 Limpeza do Repositório
- `.gitignore` reescrito com regras para `dist/`, `*.tsbuildinfo`, `.expo/`, `*.log`
- `dist/` removido de todos os packages do git tracking (~100+ arquivos)
- `.tsbuildinfo` removido de todos os packages
- `.expo/` removido do tracking
- `packages/tsconfig.json` duplicado removido
- `.eslintignore` redundante removido
- `@types/*` movidos de `dependencies` para `devDependencies` no root
- `workspaces` key removida do root `package.json`

### 🔧 Infra & Correções
- **socket.io-client**: adicionado ao frontend para WebSocket
- **@nestjs/websockets + socket.io**: adicionados ao packages/api
- **node-pty**: PTY nativo para sessões de terminal reais, movido para `optionalDependencies`
- **next.config.js**: fallbacks webpack para módulos Node.js (fs, net, crypto, etc.)
- **terminal-validate**: função `validate` agora aceita `allowedRoots` customizáveis
- **Testes**: 17/17 passando (validação de comandos, path containment, baseCommand)
- **Todos os package.json** sincronizados em `0.4.0-alpha`

---

## v0.3.0-alpha — 2026-09-17

### ⚡ Streaming & Chat
- **Streaming SSE no chat** (`/api/chat` com `stream:true` → eventos `meta`/`delta`/`done`) + efeito "digitando" no `ChatPanel`; contrato JSON mantido quando `stream` não é enviado
- **Web search real** (flag `webSearch` antes ignorada): injeta contexto do DuckDuckGo Instant Answer, sem chave
- Persistência de mensagens/memórias movida para antes da transmissão SSE (não duplica se o cliente abortar)

### 🔐 Segurança
- **`getAuthClient` agora usa ANON key** (RLS sempre aplicado): sem token, nenhuma rota vaza dados — antes usava service role como base e listava tudo sem auth
- **`/api/code` auth corrigida**: aceita Supabase JWT (claim `sub`) e JWT legado; removido `JWT_SECRET` com default hardcoded
- **Media**: `DELETE`/`PATCH` com verificação de ownership (`assertOwnership`, 403 sem dono) — fecha IDOR
- **PKCE Google**: cookie `secure` apenas em HTTPS (antes quebrava em `http://localhost`)
- **CSRF OAuth Google**: o `state` retornado agora é comparado com o cookie emitido no início do fluxo
- **Provider pinning**: chave de sessão convertida para UUID (antes md5-hex era rejeitado pela coluna `uuid` e nunca persistia)
- **Plugins/Artifacts** persistidos no Supabase com RLS por `auth.uid()` (antes: localStorage / estado local)

### 🖥️ Terminal & UI
- Terminal xterm.js com containers isolados por aba (sem empilhar divs) e cwd persistente
- `MobileAgent`: `wsUrl` editável agora chega ao hook `useMobileAgent({ wsUrl })`
- `VersionBadge`: link web relativo ao origin (sem URL hardcoded)
- `skill-catalog`: removido caractere CJK na descrição pt-BR
- `settings`: erros propagados (antes o POST sempre retornava `{ ok: true }`)

### 🧩 Artefatos
- `generatePPTXAdvanced` grava binário via `writeFileBuffer` (antes `buf.toString('binary')` por utf8 corrompia o arquivo)

### 🔧 Infra & Correções
- `9Router` resiliente: combos padrão/fallback (`kr/glm-5`, `kr/claude-sonnet-4.5`, `gemini/gemini-3.6-flash`) + parser de resposta JSON **e** SSE
- Health check `GET /api/health/router` (testa local + túnel em todos os combos)
- Loader de `.env` multi-camada (raiz do monorepo → app), compatível com Vercel
- Persistência do chat end-to-end: trigger `handle_new_user` (auth.users → users) resolve FK `sessions` (23503)
- Build de produção no Node 22+/24: `hashFunction: sha256` (md4 removido do Webpack)
- `@11/ia` e `@11/cli` com `dist/index.js` funcional + cópia de assets não-TS no build
- **Versões reconciliadas**: todos os `package.json` + `version.json` agora em `0.3.0-alpha`

### 🗃️ Supabase
- Migration `20240924_artifacts_plugins.sql`: tabelas `artifacts` e `plugins` (RLS multi-tenant)
- Migration `20240923_users_sync.sql`: trigger `handle_new_user` (auth.users → users)

---

## v0.2.0-alpha — 2026-09-15

### 🎙️ Chat & Voz
- Live chat por voz: Web Speech API (pt‑BR) em navegadores + fallback ElevenLabs via `/api/stt`
- Transcrição real enviada de volta ao input antes do envio
- Anexos: arquivos de texto, imagens com thumbnail e screenshot da tela

### 🧠 Memória
- Injeção de memórias relevantes do usuário como contexto no `/api/chat`
- Salvamento compacto de conversas na tabela `memories` (Supabase)
- Painel de memórias nas configurações: listar, remover, carregar

### 💬 Eleven Code
- Editor multi‑arquivo com execução JS/TS/HTML/CSS no navegador
- Console colorido por tipo, preview HTML/CSS em iframe sandboxed
- API `/api/code` com sessões, aprovação, sanitização, timeout e rate limit

### 📊 Conectores
- Painel Connectors com OAuth real (Google, Slack, GitHub, Notion)
- Teste de conexão por provedor com dados reais (`/api/connectors/test`)

### 🖼️ Mídia
- Upload de imagem/vídeo com análise de IA (9Router/Gemini) via `/api/media`
- Análise automática com tags e anotações (OCR/descrição)

### 🖥️ Agente de PC (desktop)
- PC Agent: servidor HTTP + WebSocket (JWT), sessões, aprovação e execução com streaming
- Router9 corrigido para API real do `@inferencesh/sdk`, com SQLite de logs

### 📱 Agente Mobile
- Bridge Capacitor + hook `useMobileAgent` para comunicação em tempo real (WSS)
- Criação, aprovação e cancelamento de sessões remotas

### 🔧 Infra & Correções
- Build, lint e typecheck limpos em web/desktop/mobile
- Correção de erros pré‑existentes (PKCE, alias `@/*`, `ui/button`, `no-case-declarations`, `supabaseKey`)
- `.env.example` com todas as variáveis de ambiente documentadas

---

## v0.1.0-alpha — 2026-09-15

### 🌌 Visual
- Galáxia espiral animada estilo GPT‑Astra com 24k+ estrelas, glow central e estrelas individuais (shader custom twinkle + espícula)
- Layout mobile‑first com drawer de conversas (estilo Claude/GPT)
- Login/Cadastro minimalista estilo ChatGPT (fundo escuro, card limpo)
- Ícone favicon SVG (galáxia) usado em web, desktop e mobile
- Remoção completa de bordas/linhas brancas — visual sólido e clean

### 💬 Chat
- Chat estilo GPT/Claude com sidebar de conversas (desktop) ou drawer (mobile)
- Sugestões rápidas, input fixo no rodapé, botões de ação por mensagem
- Persistência de sessões no Supabase (sessions + messages)

### 🔐 Auth
- Cadastro/login por e-mail + senha (Supabase Auth, autoconfirm)
- Multi‑tenant: qualquer usuário cria conta; dados isolados por RLS

### 🛡️ Segurança
- Bridge: operações nomeadas (list-files, read-file, run-build) — sem shell arbitrário
- Rate limiting no endpoint de operações remotas
- Audit log append‑only (bridge_audit_log) com RLS admin‑only
- Whitelist de diretórios para operações de arquivo

### 📡 Infra
- Cloudflare Tunnel configurado para cross‑device (PC ⇄ Celular)
- ModelGateway multi‑provedor (9Router → Gemini → fallback local)
- Sessões de chat com histórico vetorial no Supabase
- Keep‑alive automático do banco (GitHub Actions a cada 3 dias)
- Deploy via Vercel (pipeline CI com lint → test → build)

### 📱 App
- Mobile: Capacitor + WebView → OTA via Vercel (sem reinstalar APK)
- Desktop: Tauri 2 + WebView → OTA via Vercel (sem reinstalar exe)
- Ícones: galáxia SVG regenerados para Tauri (icns/ico/png) e Android (mipmaps)

### 🔧 Backend
- API NestJS com endpoints: /health, /keep-alive, /api/chat, /api/ops/*
- Bridge de operações seguras (list-files, read-file, write-file, run-build, run-command)
- Deploy broker com tokens de curta duração e circuit breaker
- Sessões de chat persistidas (sessions + messages table)

### 📊 Supabase
- Migration: users, personas, messages, embeddings (pgvector), products, agent_states, access_rules
- Migration: sessions + messages.session_id + provider
- Migration: deploy_requests, deploy_tokens, deploy_history
- Migration: model_sessions, model_usage
- Migration: bridge_audit_log
- RPC select_one para keep-alive
- RLS multi‑tenant em todas as tabelas
