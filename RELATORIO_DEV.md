# Relatório de coordenação entre devs (sessões paralelas no MESMO repo)

> Dois agentes trabalham simultaneamente em `C:\Users\Administrator\Documents\11`.
> Este arquivo serve pra sincronizar: **o que já foi feito**, **o que falta** e
> **áreas quentes** (arquivos que ambos podem tocar). Ao fazer sua parte, edite a
> seção "Registro do outro dev" no final.

---

## 1) O que JÁ ESTÁ FEITO (validado)

### 9Router resiliente — não depende mais de rodar só local
| Arquivo | Mudança |
|---|---|
| `apps/web/src/app/api/chat/route.ts` | Rota tenta endpoints em ordem: chave do usuário → `9ROUTER_ENDPOINT` (local) → `9ROUTER_TUNNEL` (público). Cadeia de modelos: `9ROUTER_MODEL` → `9ROUTER_FALLBACK_MODELS` → combos (`kr/glm-5`, `kr/claude-sonnet-4.5`, `gemini/gemini-3.6-flash`). Parsing SSE mesmo com `stream:false` (`parseCompletionContent`). `case 'astra'/'minimax'` → direto via 9Router. |
| `packages/ia/src/router/adapters/9router.ts` | Mesmo fallback local→túnel + fallback de modelos no `NineRouterAdapter` (ModelGateway). |
| `apps/desktop/src/router9/index.ts` | `mediaOp` usa fallback local→túnel; removido import do `@inferencesh/sdk` (quebrava loader ESM). |
| `.env` | `9ROUTER_ENDPOINT=http://localhost:20128`, `9ROUTER_TUNNEL=https://rdri7er.abc-tunnel.us`, `9ROUTER_TOKEN=…`, `9ROUTER_MODEL=kr/glm-5`, `9ROUTER_FALLBACK_MODELS=…`. |
| `.env.example` | Adicionados `9ROUTER_TUNNEL`, `9ROUTER_MODEL` correto, seções atualizadas. |
| `infra/vercel/README.md` | Documentado `9ROUTER_TUNNEL` + como 9Router funciona fora do PC (Vercel/remoto). |

### Bots de auth/500 nas rotas da API web
| Arquivo | Mudança |
|---|---|
| `apps/web/src/lib/server-supabase.ts` | Novo `getAuthClient(req)`: envia `Authorization` só quando há token (evita "Empty JWT"). |
| `apps/web/src/app/api/{skills,projects,memories,settings,connectors}/route.ts` | Usam `getAuthClient` (antes mandavam `Bearer ` vazio → 500 em todas as rotas sem token). |
| `apps/web/src/app/api/connectors/test/route.ts` | Import path corrigido (`../../../../lib/...`) — quebrava typecheck. |

### Desktop / router9 portátil
| Arquivo | Mudança |
|---|---|
| `apps/desktop/tsconfig.json` | `module: CommonJS` (ts-node/ESM quebrava rótulos sem extensão). |
| `apps/desktop/src/server.ts` | Carrega `.env` local + `.env` da raiz do monorepo (antes 9ROUTER nunca chegava no processo). |
| `apps/desktop/package.json` | Script `router` = `tsc && node dist/server.js` (era `ts-node` quebrado). |

### Supabase
| Arquivo | Mudança |
|---|---|
| `apps/web/.env` | `SUPABASE_SERVICE_ROLE_KEY` era `sb_publishable_*` (sem permissão, RLS bloqueava persistência do chat). Trocada pelo JWT service role real (do root `.env`). |

### Limpeza
Removidos: `TODO_DELETE_ME.md`, `deploy.log`, `deploy2.log`, `apps/web/build.log`, `apps/desktop/dist/router9/router9.db` (artefato de teste).

### Bugs web corrigidos (T1 — rodada atual, 2026-09-17)
| Arquivo | Mudança |
|---|---|
| `apps/web/src/app/api/code/services/security.ts` | `verifyToken` agora valida o JWT **do Supabase** via `auth.getUser` (claim `sub`). Removido secret `JWT_SECRET` hardcoded (`'dev-secret-change-in-production'`) e claims inventadas `userId`/`email`. |
| `apps/web/src/app/api/code/route.ts` | Adicionado `loadRootEnv()` (rotas irmãs já tinham; sem isso envs do monorepo não chegavam). |
| `apps/web/src/app/api/settings/route.ts` | Deixou de engolir erro: GET/POST retornam 500 com mensagem real em vez de `{}`/`{ok:true}`. |
| `apps/web/src/app/api/media/route.ts` | DELETE/PATCH exigem JWT (`getAuthedUserId` → 401) e filtram por `user_id` + `select('id')` (404 se não achou/permissão). Antes: service role sem token apagava qualquer mídia. |
| `apps/web/src/lib/skill-catalog.ts` | Removidos caracteres chineses acidentais no skill `plano-milionario`. |
| `apps/web/src/components/TerminalPanel.tsx` | Abas inativas ocultadas (`display:none`) — antes containers só se empilhavam e trocar pra aba antiga mostrava terminal vazio. Handle expõe `id`+`container`. |
| `apps/web/src/app/api/connectors/google/route.ts` | Cookie PKCE `secure` só em produção (`NODE_ENV==='production'`) — em dev http://localhost o cookie Secure não persistia e o callbak quebrava. |

**Validação:** `tsc --noEmit` limpo · eslint limpo.

### Validação executada (servidor no ar)
- `/api/chat`: `9router`, `astra`, combo `9router/kr/glm-5`, chave `"endpoint|apikey"` via túnel → responderam.
- 9Router direto: local e túnel OK (gateway oscilou 503 em `gemini-3.8`; 3.6/kr/glm-5 estáveis).
- `/api/code` GET/POST com JWT válido.
- `/api/skills|projects|memories|settings|connectors|media` → 200 (com userId UUID válido; com userId inválido retorna 500 "invalid uuid", comportamento normal).
- Builds/typecheck/lint OK: `web`, `shared`, `ia`, `api`, `desktop`.

---

## 2) O que AINDA FALTA / pendências

1. **Persistência do chat end-to-end não 100% validada com usuário real**: o fix da chave service role está em `apps/web/.env`, mas o servidor precisa de **restart** pra carregar o env novo. Testar: logar na web, mandar mensagem, conferir se `messages` e `memories` gravam no Supabase.
2. **`/api/stt`**: depende de `ELEVENLABS_KEY` (vazia no `.env`). Se for usar transcrição, configurar.
3. **Conectores OAuth (Google/GitHub/Notion/Slack)**: rotas existem mas exigem `GOOGLE_CLIENT_ID/SECRET`, `GITHUB_CLIENT_ID`, etc. — não testados por falta de credenciais.
4. **`packages/ia`/`packages/cli`**: `main: dist/index.js` aponta pra arquivo que não existe (não há `src/index.ts`). Build passa, mas `require('@11/ia')`/bin `11-cli` quebram. Decidir: criar `index.ts` ou remover `main`/`bin`.
5. **Dev servers instáveis**: várias instâncias `next dev` (3000 e 3099) brigando + servidores que caem. Padronizar: **um** dev server na porta padrão 3000, rodar só via `pnpm --filter @11/web dev`.
6. **Mobile/PC Agent (ws://localhost:4500)**: `apps/mobile/src/utils/bridge.ts` e `useMobileAgent.ts` apontam pra 4500, mas `PC_AGENT_PORT` default é 3001. Reconciliar ou documentar.
7. **Atualizar `apps/web/.env.local`** se quiser centralizar (hoje só tem 2 vars; o `.env` do app tem a service role).

---

## 3) ÁREAS QUENTES (evitar edição simultânea dos dois devs)

- `apps/web/src/app/api/chat/route.ts` ← o outro dev refez parte (combos/SSE); mexer em conjunto = risco de sobrescrita.
- `apps/web/src/lib/server-env.ts` ← também foi refeito (caminha até achar todos `.env`).
- `.env`, `apps/web/.env`, `apps/web/.env.local` — config que os dois usam pra testar.
- `packages/ia/src/router/adapters/9router.ts` — foi tocado por mim.
- Qualquer arquivo que um de vocês estiver editando, marcar aqui antes de começar.

---

## 4) REGRAS de coordenação

- Antes de mexer num arquivo, declare aqui (seção abaixo) **quem vai tocar o quê**.
- Não rode 2 dev servers; mantenha um só (porta 3001 é do router9 desktop, 3000 do web).
- Suba apenas um `next dev` por vez.

---

## 5) Registro do outro dev

> Anexado em 2026-09-17 — **DE-V2** (terminal opencode paralelo)

**9Router** — problema era combo morto (`gemini/gemini-3.8-flash` com quota 429), não o gateway. Local e túnel funcionam. Corrigidos:
- Combo padrão `kr/glm-5` + fallbacks (`kr/claude-sonnet-4.5`, `gemini/gemini-3.6-flash`).
- Bug real: 9Router devolve SSE (`data: {...}`) mesmo com `stream:false` → parser não entendia → respostas vazias. Adicionado parser JSON+SSE.
- `server-env.ts` mesclava só o 1º `.env` → agora mescla toda a cadeia.
- Novo `GET /api/health/router` (testa local + túnel × combos).

**Favicon/icons** — refeitos: `favicon.ico`, PNGs 16→1024, `manifest.json` PWA, mipmaps Android, AppIcons iOS, ícones Tauri + `icon.ico`.

**UI GPT/ELEVEN** — empty state central, cards 2x2, composer arredondado, avatares, sidebar 272px.

**Perfil** — Account (email/senha/excluir conta), Privacy (incognito + exportar dados), Capabilities persistidas, Reflect com stats reais, Time com Pomodoro, Skills/Connectors/Plugins embutidos. Tema light funcional.

**Terminal** — xterm.js real + SSE streaming + PowerShell no Windows. Testado: echo, cd, pwd, ls, Get-Date, `rm -rf /` bloqueado, 401 sem auth.

**Verificação** — typecheck limpo (web+ia), lint sem erros, build de produção OK (corrigido md4/Node 24 via `hashFunction: sha256`), smoke test 9/9.

> ⚠️ Para produção: definir no dashboard Vercel as envs `9ROUTER_ENDPOINT`/`9ROUTER_TUNNEL`/`9ROUTER_TOKEN`/`9ROUTER_MODEL`/`9ROUTER_FALLBACK_MODELS` — o túnel é obrigatório pois `localhost` não existe no servidor.

---

> Registro **T1 (Runtime/App web)** — 2026-09-17 · rodada concluída por este terminal.
>
> **Implementado nesta rodada (10 itens):**
> | Item | Arquivo | O que foi feito |
> |---|---|---|
> | SSE no chat | `apps/web/src/app/api/chat/route.ts` + `components/ChatPanel.tsx` | `stream:true` → SSE (`meta`/`delta`/`done`), placeholder do assistente preenchido incrementalmente. JSON sem `stream` mantido p/ compat. |
> | Web search real | `api/chat/route.ts` | flag `webSearch` agora injeta contexto (DuckDuckGo Instant Answer, sem chave) |
> | `/api/code` auth | `api/code/services/security.ts` | `verifyToken` async: aceita Supabase JWT (claim `sub`) e legado `JWT_SECRET`; **sem default hardcoded** |
> | Media ownership | `api/media/route.ts` | `assertOwnership` em DELETE/PATCH (403 sem dono); remove admin-bypass |
> | PKCE localhost | `api/connectors/google/route.ts` | cookie `secure` só em HTTPS |
> | Plugins persistidos | `api/plugins/route.ts` (novo) + `components/PluginsPanel.tsx` | Supabase, fallback local |
> | Artifacts persistidos | `api/artifacts/route.ts` (novo) + `components/ArtifactsPanel.tsx` + ChatPanel | Supabase; botão "Abrir no Code" grava |
> | MobileAgent wsUrl | `components/MobileAgent.tsx` | `wsUrl` agora chega ao hook (`useMobileAgent({ wsUrl })`) |
> | TerminalPanel | `components/TerminalPanel.tsx` | containers absolute+display; sem empilhar divs |
> | VersionBadge | `components/VersionBadge.tsx` | link web = origin atual (sem URL hardcoded) |
>
> Migration nova: `infra/supabase/migrations/20240924_artifacts_plugins.sql` (tabelas `artifacts` + `plugins`, RLS por `auth.uid()`).
>
> **Validação:** `tsc --noEmit` limpo · `next lint` sem erros (só warnings pré-existentes `<img>`) · `next build` OK (rotas `/api/artifacts` e `/api/plugins` registradas).
>
> **Ainda no radar (bloqueado/aguardando):**
> - `.env` canônico do Vercel (URLs `11-app` vs `11-five-umber` vs `11-vitorvinhal90`): decisão do T2.
> - `pnpm test` funcional: aguardando T2.
> - `alert()` no code block (ChatPanel) — cosmético, não bloqueia.
> - `JWT_SECRET` hardcoded remanescente em `apps/desktop/src/pc-agent/server.ts` (território T2).
>
> T2 = infra/CI/secrets/desktop-mobile/bridge-WS. T3 = QA/bugs/testes. chat/route.ts permanece meu.

**Handshake T1:** rodada 1 — `runtime web OK` (10 itens, typecheck+lint+build limpos). Migration nova pendente de aplicar no Supabase.

> Registro **T2 (infra/CI/secrets/desktop-mobile)** — 2026-09-17, plano aprovado por T1.
>
> **Fase A (agora):** A1 apagar `apply_migration.ps1` + varrer segredos · A2 limpeza (`TODO_DELETE_ME.md`, `*.log`, `apps/desktop/dist/`, `.turbo/`, `src-tauri/target/`) · A3 `pnpm-workspace.yaml` remover `allowBuilds` (pnpm 8 ignora) · A4 `git init` + commit inicial (autorizado, ordem A1→A4).
>
> **Fase B:** B1 `supabase/config.toml` · B2 `ci.yml` (setup-node@v4, node 24) · B3 apagar `build.yml`.
>
> **Fase C:** C1 apagar `Dockerfile` · C2 `desktop/src/server.ts` router9→`ROUTER9_PORT||3002` · C3 `bridge.ts`→3001 · C4 `useMobileAgent.ts`→3001 · C5 `.env.example`.
>
> **Fase D:** D1 checklist envs Vercel (`infra/vercel/README.md`) · D2 aplicar `20240925_memories_embedding_768.sql` quando T1 avisar (`node --env-file=.env scripts/apply-migrations.js <arquivo>`).
>
> **Adicionado do quadro T1 (seção 7, donos T2):** #2 auth DELETE/PATCH pc-agent · #3 auth `/router9` + sandbox `fileOp` · #17 `apply-migrations.js` remover fallback ANON_KEY silencioso · #20 router9 ler `9ROUTER_FALLBACK_MODELS` · #25 URLs apk/desktop canônicas · #28 `apps/mobile/tsconfig.json` `noEmit:false` · #29 deps desktop p/ package.json.
>
> **NÃO toco:** `MobileAgent.tsx`, `chat/route.ts`, `server-env.ts`, `server-supabase.ts`, `9router.ts`, bugs web. Handshake por arquivo antes de editar.

---

## 6) Rodada de conclusão (eu, segundo agente)

### Pendências resolvidas nesta rodada
| Item | O que foi feito | Validação |
|---|---|---|
| **Persistência chat end-to-end** | Causa real achada: usuários novos NUNCA ganhavam linha em `users` pública → FK de `sessions` (23503) bloqueava messages/memories. Nova migration `infra/supabase/migrations/20240923_users_sync.sql` + trigger `handle_new_user` (auth.users → users). Script `scripts/apply-migrations.js` aplica via `exec_sql`. | ✅ Criado user real via admin API → linha em `users`; session + chat pelo `/api/chat` → **messages (2) e memories gravadas**. Dados de teste removidos. |
| **`packages/ia` sem `dist/index.js`** | Criado `src/index.ts` (exporta modelGateway, AgentRouter, tools, personality). Supabase clients viraram lazy (`SupabaseClient` criado sob demanda) — antes `require('@11/ia')` lançava `supabaseUrl is required`. | ✅ `require` OK, 24 exports. |
| **`packages/cli` sem `dist/index.js`** | Criado `src/index.ts` com commander (`deploy`, `codegen`, `git-guard`). `tsconfig` já tinha `noEmit` herdado → setado `noEmit:false` + CommonJS. `deploy.ts` supabase lazy. | ✅ `11-cli --help` OK. |
| **Assets não-TS no build** | `seed.json` não era copiado (tsc não copia JSON). Novo `scripts/copy-assets.js` + build de ia/cli copia `src → dist`. | ✅ `PERSONAS_SEED` carregado. |

### Ainda em aberto (para você)
- **STT**: `ELEVENLABS_KEY` vazia no `.env` — precisa da chave real.
- **Conectores OAuth** (Google/GitHub/Notion/Slack): exigem credenciais — não testados.
- **Envs no dashboard Vercel** (listadas acima) — obrigatório para produção.
- **FK `users_id_fkey` cascade** NÃO adicionada: seeds `vitor/giovana/renata` usam ids que não existem em `auth.users` (falha na constraint). Decidir destino dos seeds antes.
- Padronizar **um** dev server (`pnpm --filter @11/web dev`), portas web=3000, router9=3001.

---

## 7) Bugs consolidados (varredura T2 + T3) — status

> Consolidado por **T1**. Legenda: ✅ corrigido · ⏳ pendente (com dono).

### CRÍTICO
| # | Local | Descrição | Status |
|---|---|---|---|
| 1 | `apply_migration.ps1` | Token Supabase mgmt `sbp_…` hardcoded | ⏳ T2 (rotacionar + remover) |
| 2 | `apps/desktop/src/pc-agent/server.ts` (DELETE/PATCH `/api/sessions/:id`) | sem `authMiddleware` — só owner check | ⏳ T2 |
| 3 | `apps/desktop/src/server.ts` + `router9/index.ts` | `POST /router9` sem auth; `fileOp` sem sandbox de FS | ⏳ T2 |
| 4 | `apps/web/src/lib/server-supabase.ts` | `getAuthClient` usava service role → vazava tudo sem token | ✅ T1 (agora ANON + RLS) |

### ALTO
| # | Local | Descrição | Status |
|---|---|---|---|
| 5 | `code/services/security.ts`, `pc-agent/server.ts` | `JWT_SECRET` fallback hardcoded | ✅ web (T1) · ⏳ desktop (T2) |
| 6 | `code/services/security.ts` | `verifyToken` não lia `sub` | ✅ T1 |
| 7 | `media/route.ts` | DELETE/PATCH sem ownership (IDOR) | ✅ T1 |
| 8 | `memories/projects/skills/connectors/media` (GET) | listavam tudo sem `userId` quando sem token | ✅ mitigado (T1: ANON+RLS) |
| 9 | `tools/artifacts.ts` | PPTX corrompido (`binary` via utf8) | ✅ T1 (`writeFileBuffer`) |
| 10 | `connectors/google/callback` | cookie `state` nunca validado (CSRF) | ✅ T1 |
| 11 | `init.sql` (768) vs `skills_projects.sql` (1536) | dims de embedding inconsistentes | ⏳ schema (decisão) |
| 12 | `terminal/exec/route.ts` | sem auth quando Supabase ausente; `isUnderRoot` sem realpath | ⏳ (dev-only; avaliar `realpath`) |
| 13 | `MobileAgent.tsx` | `wsUrl` não chegava ao hook; 4500 vs 3001; ws em https | ✅ wiring (T1) · ⏳ porta/ws (T2) |

### MÉDIO / BAIXO
| # | Local | Descrição | Status |
|---|---|---|---|
| 14 | `settings/route.ts` | catch engolia erro → `{ok:true}` | ✅ (já corrigido) |
| 15 | `provider-pinning.ts` | md5-hex em coluna `uuid` → pin nunca persistia | ✅ T1 |
| 16 | `router/index.ts` | CostBreaker inerte (`canAfford(0)`, `track(0)`) | ⏳ IA |
| 17 | `apply-migrations.js` | fallback silencioso p/ ANON_KEY | ⏳ T2 |
| 18 | `connectors/google/route.ts` | `secure:true` quebrava em localhost | ✅ T1 |
| 19 | CI `ci.yml` | `@supabase/cli` (pacote errado); `pnpm test` sem testes; node 20 vs 24 | ⏳ T2 |
| 20 | `router9/index.ts` | `9ROUTER_FALLBACK_MODELS` nunca lido; default ≠ `.env` | ⏳ T2 |
| 21 | `cli/codegen.ts` | `packages/cli/templates` não existe | ⏳ |
| 22 | `tools/bridge.ts` | `handleBridgeCommand` retorna `{accepted:true}` sem executar | ⏳ |
| 23 | `office.ts`, `deploy.ts` | dead code | ⏳ |
| 24 | `skill-catalog.ts:68` | CJK `专门` em text pt-BR | ✅ (já corrigido) |
| 25 | `VersionBadge.tsx`, `version.json` | URL hardcoded / placeholders github `user/11` | ✅ link (T1) · ⏳ apk/desktop URL (T2) |
| 26 | `Dockerfile` | só builder, sem runtime; node20 vs 24 | ⏳ T2 |
| 27 | `.env.example` | faltam `EMBEDDING_DIMS`, `PAID_MODEL_DAILY_BUDGET`, `RATE_LIMIT_*`, `DEPLOY_*`, `BRIDGE_*` | ⏳ T2 |
| 28 | `apps/mobile/tsconfig.json` | não sobrescreve `noEmit` → build não emite | ⏳ T2 |
| 29 | deps desktop (express/axios/sqlite3/ws/jwt) | só na `node_modules` raiz — frágil | ⏳ T2 |
| 30 | **divergência de versão** | `version.json` 0.3.0 vs `package.json` 0.2.0 | ✅ T1 (reconciliado p/ 0.3.0-alpha) |
| 31 | `scripts/version.js` | doc `--v` vs código `--version`; replace hack | ✅ T1 |

### Falsos positivos confirmados
- `src-tauri/tauri.conf.json`: ícones **não** vazios (16 entradas, todas existem).
- `packages/cli/dist/index.js`: existe e `11-cli --help` OK; só falta `templates/`.

---