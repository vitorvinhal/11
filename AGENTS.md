# Responda sempre em português do Brasil.

Todos os textos, mensagens e respostas da IA devem ser em pt‑BR.

---

## 🧠 AGENTE BRAIN — MONOPÓLIO DE DEPLOY E ORQUESTRAÇÃO

- **Brain = planejamento, análise, orquestração e release.** O Brain NÃO edita código de `apps/` nem `packages/`; estes correções são dos Agentes Executores (1 a 4).
- **Deploy exclusivo do Brain:** Agentes Executores estão PROIBIDOS de `git push origin main`, disparar builds de produção (Vercel/Railway) e criar tags de release. Apenas o Brain executa a FASE D (Release & Deploy), após validar `pnpm -r lint`, `pnpm -r build` e `pnpm -r test` 100% verdes.
- **Relatórios padronizados:** todo relatório dos Agentes em `relatorios_agente/` termina com o bloco `<!-- BRAIN_SYNC_START -->` — ver `docs/AGENTE.md` seção 6 e `skills/preflight_and_reporting.md`.
- **Zero Degradation de UI:** reduções de partículas do AstroSphere 3D, resolução de shaders ou `backdrop-filter` só via fallback dinâmico em runtime (hardware detection), nunca estático no CSS — ver `docs/AGENTE.md` seção 7.
- **Gate de tipo:** `pnpm -r typecheck` é QUEBRADO na raiz. Usar `pnpm -r lint && pnpm -r build && pnpm -r test` (ou `tsc -p <pkg>/tsconfig.json` para pacote isolado).
- **Política de Release por Patches (2026-09-23):** releases são CONSOLIDADOS — o usuário envia uma lista de problemas, o Brain junta tudo em um patch (ex.: `2.17.1`), orquestra os 4 agentes, só parte para o próximo patch quando TODAS as alterações estiverem feitas, gate verde e deploy da versão no ar. Micro-correções isoladas (`2.17.0 → 2.17.1` avulsas) SÓ em casos excepcionalmente pequenos. Objetivo atual: tirar o projeto do alpha para BETA rápido, ativando tudo que já existe no projeto; micro-updates ficam para fases mais avançadas de desenvolvimento.

---

## 🗂️ ESTRUTURA DE DOCUMENTAÇÃO (PADRÃO PRD/ADR/SPEC/PLAN)

Mapa completo em `docs/README.md`. Resumo do fluxo obrigatório:

```
docs/prd/PRD.md          → porquê do produto (negócio, sem técnico)
docs/adr/                → decisão arquitetural (só quando houver impacto real)
docs/specs/              → especificação linha-a-linha ANTES de desenvolver feature
docs/plan/PLAN.md        → checklist vivo do patch (feito/andamento/pendência)
docs/agents/             → papéis + loop developer→tester→reviewer
relatorios_agente/       → relatório pré/pós de cada tarefa (BRAIN_SYNC)
```

- **Loop:** DEVELOPER (Agente 1-4) → TESTER (gate+smoke) → REVIEWER (Brain) → [não aprovou = devolve pro DEVELOPER] → usuário/PO + FASE D.
- **Sem spec não desenvolve.** Chame o agente sempre pelo nome no prompt (evita alucinação de papéis).
- Multi-ferramenta: `AGENTS.md` (Codex/CLI), `CLAUDE.md` (Claude Code), `.github/` (Copilot) — mesmo conteúdo, locais diferentes, sem conflito.

---

## REGRA DE RESILIÊNCIA E RECUPERAÇÃO AUTOMÁTICA DE SESSÃO

### Criação de rastro em tempo real (`.task_state.md`)

- Objetivo Global: <descrição sucinta da tarefa ativa>
- Concluído: <lista de passos já executados>
- Em Andamento: <arquivo/função/módulo atual>
- Próximo Passo: <ação exata a ser executada>

### Micro‑checkpoints de Git

- Commit local a cada sub‑etapa concluída que não quebre o build.

### Protocolo de inicialização / recovery (toda nova sessão)

1. Ler `.task_state.md` (se existir).
2. Executar `git status` e `git diff`.
3. Executar `git log -n 3 --oneline`.
4. Apresentar resumo de 3 linhas ao usuário e pedir confirmação para prosseguir.

### Regra de recuperação de crash

- Antes de qualquer comando ou edição, manter `.task_state.md` atualizado com:
  - Objetivo Atual: <resumo>
  - Concluído: <lista>
  - Em Andamento: <arquivo/função>
  - Próximo Passo: <ação pendente>

---

# PROTOCOLO DE PLANEJAMENTO, AUDITORIA E SYSTEM PROMPT DO AGENTE

Protocolo oficial de referência: `docs/AGENTE.md`. System Prompt carregado: `agent/system_prompt.md`. Regras: `agent/rules.md`.

## Regra absoluta do fluxo de trabalho

Nenhuma linha de código ou arquivo de projeto pode ser alterada sem o ciclo abaixo (obrigatório para tarefas com ID, ex.: `TASK-123`):

```
[1. RECEBER ID DA TAREFA]
         ↓
[2. GERAR PLANO PRÉ-ALTERAÇÃO (.md)]  <-- Salvo em relatorios_agente/
         ↓
[3. EXECUTAR ALTERAÇÕES & REGISTRAR ERROS EM TEMPO REAL]
         ↓
[4. ATUALIZAR RELATÓRIO PÓS-ALTERAÇÃO (.md)]
```

## Ciclo de execução obrigatório

1. **PRÉ-ALTERAÇÃO (antes de codar):** criar `relatorios_agente/ID_[TASK_ID]_[TIMESTAMP]_plano.md` com Objetivo Geral, Metas Esperadas, Roteiro passo a passo e arquivos afetados. Só então editar código.
2. **EXECUÇÃO E LOG (em tempo real):** erros, exceptions e avisos devem ser registrados imediatamente no `.md` da tarefa.
3. **PÓS-ALTERAÇÃO (ao concluir):** atualizar rodapé do `.md` com Status Final (`🟢 CONCLUÍDO COM SUCESSO` / `🔴 FINALIZADO COM ERROS`) + resumo das alterações.

## Estrutura do relatório .md (`relatorios_agente/`)

- Estágio 1 — pré: `# 📋 PLANO DE EXECUÇÃO - TAREFA [ID]`, status inicial `🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)`, Objetivo, Metas `- [ ]`, Roteiro com O que fazer / Como fazer / Arquivos afetados.
- Estágio 2 — durante: `## 🔄 Diário de Execução em Tempo Real`, blocos `> 🚨 **PROBLEMA/ERRO DETECTADO [HH:MM:SS]**`.
- Estágio 3 — pós: `## 🏁 Relatório Pós-Alteração (Status Final)`, resumo das alterações `- [x] ...` e ocorrências resolvidas.

## Arquivos do protocolo

- `agent/system_prompt.md` — System Prompt oficial do agente (usar como instruções do sistema).
- `agent/rules.md` — regras de conduta e estrutura dos relatórios.

## Regra obrigatória de Versionamento e Changelog

Toda alteração de código que modifique funcionalidade, corrija bug ou adicione feature **deve** atualizar:

1. **Versão** — Bump no `package.json` raiz e em todos os workspaces (`apps/*`, `packages/*`) usando `pnpm version:patch`, `pnpm version:minor` ou `pnpm version:major`. A versão segue o padrão `v0.{MAJOR}.{MINOR}-{canal}` (alpha → rc → estável).
2. **CHANGELOG.md** — Adicionar entrada na raiz do projeto (`CHANGELOG.md`) com a versão, data e descrição das mudanças.
3. **`apps/web/public/version.json`** — Atualizar `version` e `buildTime` (feito automaticamente pelo script `scripts/version.js`).

**Fluxo obrigatório ao concluir tarefa:**

```
[pós-alteração]
→ rodar pnpm version:patch (ou minor/major conforme impacto)
→ adicionar entrada no CHANGELOG.md
→ commit incluindo: version bump + changelog + código alterado

```

**NUNCA** fazer commit de alterações funcionais sem bump de versão e atualização do CHANGELOG.

- `docs/AGENTE.md` — protocolo completo de referência (incluindo `agent/agente.py` de exemplo).
- `relatorios_agente/` — pasta onde os relatórios das tarefas são salvos.

---

# Notas técnicas do repo

## Monorepo e ferramentas

- pnpm 8.15.9 (PINADO em `packageManager`), workspaces `apps/*` + `packages/*`. Use `pnpm`, nunca npm/yarn. `.npmrc`: `shamefully-hoist=true`.
- Turvo `turbo.json`: `test` depende de `lint`, `build` depende de `test`. Build completo roda lint+tests de todo workspace.
- Husky `pre-commit` roda `pnpm lint-staged` → `eslint --fix` + `prettier --write` nos staged. Commit falha se um arquivo staged não passar.

## Ordem de build (importante)

- `@11/shared`, `@11/ia` e `@11/cli` têm `main: <dist>/index.js` — **`dist/` precisa existir antes de consumir**.
- `apps/web` declara `@11/shared` e `@11/ia` como `workspace:*`. O script `build` do web só builda `@11/shared`; **`@11/ia` precisa build manual**.
- Root `pnpm build` resolve tudo na ordem certa: shared → ia → web. Para build isolado do web:
  `pnpm --filter @11/shared build; pnpm --filter @11/ia build; pnpm --filter @11/web build`
- `@11/ia` e `@11/cli` rodam `node ../../scripts/copy-assets.js src dist` no build (copia assets não‑TS). Não apague `dist` inteiro manualmente se tiver assets customizados.

## Comandos

- Verificação de rotina (nesta ordem): `pnpm lint` → `pnpm test` → `pnpm build`.
- **`pnpm typecheck` está quebrado**: root chama `pnpm -r typecheck`, mas NENHUM workspace define esse script → falha. Use `pnpm build` ou `tsc -p <pkg>/tsconfig.json` como substitute.
- Testes = jest multi-projeto (`jest.config.js`): `apps/web`, `packages/ia`, `packages/shared`. `pnpm --filter @11/web test` roda só o web. api/cli/desktop/mobile não têm testes.
- Dev servers: `pnpm dev:web` (porta 3000), `pnpm dev:api` (NestJS legacy, `dist/main.js` precisa build antes), `pnpm dev:mobile` (Expo), `pnpm dev:desktop` (Tauri/Vite).
- **Router unificado do desktop**: `apps/desktop/src/server.ts` sobe os dois serviços — Router9 (`ROUTER9_PORT`, default 3002) e PC Agent (`PC_AGENT_PORT`, default 3001). Para rodar só como servidor: `pnpm --filter @11/desktop router`.
- Smoke test: `node scripts/smoke-test.mjs [baseURL]` (default `http://localhost:3099`). Testa endpoints críticos incl. `/api/health/router`, terminal auth, PWA manifest.

## Env e runtime gotchas

- `.env.example` (raiz) documenta TODAS as variáveis. `apps/web` usa `.env.local` (gitignored, secrets reais). Desktop lê env do processo/`.env` em `src-tauri`.
- 9Router local default `ROUTER9_ENDPOINT=http://localhost:20128`, modelo default `ROUTER9_MODEL=Arcenal` com `ROUTER9_FALLBACK_MODELS` (Arcenal, kr/glm-5, kr/claude-sonnet-4.5, gemini/gemini-3.6-flash). Sem o 9Router rodando, `/api/chat` e `/api/health/router` falham.
- `apps/web/src/lib/server-env.ts` + `server-supabase.ts`: env de servidor é validado no boot. Vars obrigatórias ausentes derrubam requests específicos (ex.: Supabase sem anon key).
- `next.config.js`: headers de segurança + CSP com `'unsafe-eval' 'unsafe-inline'` em script-src (exigido pelo runtime — não remover sem testar). `officegen`/`readable-stream` são externalizados no server bundle (incompatíveis com webpack).

## Estrutura

- `apps/web/src/app/api/*` = todas as rotas Next (30+, ver `.task_state.md`/docs para contrato). Rotas de plataforma: `/api/pc-agent`, `/api/mobile-agent`.
- `apps/web/src/lib/platform.ts` + `platform-guard.ts`: detecção de plataforma (desktop/mobile/web) e guards de UI.
- `packages/ia` = core de IA (router, safety, agent, plugins/skills). `packages/api` = NestJS **legacy**, mantido por compat.
- `infra/supabase` = migrations; `scripts/deploy-vps.sh|ps1` = deploy VPS (Oracle Cloud A1 ARM).
- **CI existe (básico)**: `.github/workflows/` tem `build.yml` (lint+test+build em `main`), `ci.yml`, `supabase-keepalive.yml`, `build-android.yml` (APK release) e `build-ios.yml` (IPA em macOS runner). **Ainda sem**: testes para `api`/`cli`/`desktop`/`mobile`, suíte de regressão de segurança, e cobertura de deploy (Vercel é disparado por push a `main` + `vercel --prod` manual). Deploy web em produção: domínio `candlefish.vercel.app` (alias `11-app-sage.vercel.app` é manual — re-apontar após deploy).
- Skills da IA 11 moram em `skills/` (ex.: `responder-em-portugues`), não em `.claude/`. Responder sempre pt-BR com usuário; códigos, logs, commits e comandos podem ficar em inglês.

---

# REGRAS DE SEGURANÇA — NUNCA REGREDIR

Estas correções já foram aplicadas e verificadas. Qualquer PR/tarefa que
reintroduza um destes padrões deve ser bloqueado na revisão, mesmo que a
motivação pareça razoável (ex.: "evitar crash", "facilitar dev local").

- **Nunca hardcode um valor de fallback para secret/token/JWT_SECRET em
  nenhuma camada** — nem no Node, nem no launcher Tauri (`src-tauri/`), nem
  em scripts de dev. Regra: ausente = FAIL FAST, nunca um valor conhecido.
  (Regrediu uma vez em `apps/desktop/src-tauri/src/lib.rs` depois de já
  corrigido em `pc-agent/server.ts` e `router9/index.ts` — o bug volta em
  qualquer nova camada que gere/injete env vars antes do processo Node subir.
  ✅ Corrigido novamente em `lib.rs` — o spawn agora apenas herda o env.)
- **Nunca valide um comando de shell só pela primeira palavra e depois
  execute a string inteira via `bash -lc`/`powershell -Command`.** Allowlist
  de string não funciona contra shell completo (`;`, `&&`, `|`, backtick,
  `$()` sempre furam). Ver `apps/web/src/lib/terminal-validate.ts` — se
  esse arquivo for tocado, os testes de bypass por encadeamento (`;`, `&&`,
  `|`) são obrigatórios antes de merge.
- **Nunca valide sandbox de path com `string.startsWith(root)`.** Sempre
  `path.relative(root, target)` + checar que não começa com `..` (ver
  `isInsideRoot()` em `router9/index.ts` e `isWithinRoot()` em
  `terminal-validate.ts` como referência de implementação correta).
  `startsWith` aceita diretórios irmãos com prefixo igual
  (`/app/root` vs `/app/root-evil`).
- **Nunca combine `sandbox="allow-scripts allow-same-origin"` num iframe
  que renderiza conteúdo gerado por IA/usuário** (`CanvasPanel.tsx` e
  qualquer preview futuro). Essa combinação anula o isolamento de origem.
- **Toda rota nova em `apps/web/src/app/api/**` que não seja pública por
  design precisa de `requireUser()` logo na primeira linha do handler** —
  incluindo `GET`, não só `POST`/`PATCH`/`DELETE` (já regrediu uma vez:
  `GET /api/terminal/exec` ficou sem auth enquanto o `POST` tinha).
- **Toda rota que aceita uma URL/endpoint vindo do body ou query e faz
  `fetch()` nela no servidor precisa validar contra allowlist de host**
  antes do fetch (SSRF) — nunca aceitar URL arbitrária do cliente.
  (Regrediu em `/api/settings/test-ollama`; ✅ a rota foi **removida** —
  o teste do Ollama agora é client-side via `apps/web/src/lib/local-llm.ts`,
  sem rota de proxy no servidor. Nova rota de proxy LLM só com allowlist.)
- **Toda `Map`/estrutura de sessão em memória (não banco) precisa ser
  indexada por `userId`, nunca só por um id gerado pelo cliente** — senão
  vira sessão cross-user por adivinhação/colisão de id.

# TESTING — estado real (não confiar em "deve funcionar")

- `pnpm typecheck` está quebrado na raiz (nenhum workspace define o
  script) — não usar como sinal de "tipo ok". Rodar
  `pnpm --filter <pkg> build` ou `tsc -p <pkg>/tsconfig.json` direto.
- Cobertura de teste real hoje: `apps/web`, `packages/ia`, `packages/shared`
  via jest. **`api`, `cli`, `desktop`, `mobile` não têm testes** — qualquer
  mudança nesses pacotes é validada só por build + smoke test manual
  (`scripts/smoke-test.mjs`), não por CI automatizado.
- Testes de segurança (path traversal, auth bypass, SSRF, command
  injection) não têm suíte própria ainda — ao corrigir qualquer item da
  seção acima, criar o teste no mesmo PR, não depois.
- **Smoke do desktop (local services)**: `pnpm --filter @11/desktop router`
  sobe Router9 (3002) + PC Agent (3001); validar com
  `curl http://localhost:3001/health` (espera `paired: true`) e
  `curl http://localhost:3001/device/tools` (espera as 21 tools).
- **LLM local (Ollama/Zen)**: chamadas agora são **client-side** direto do
  WebView (a nuvem não enxerga `localhost`). Ao testar, usar o override de
  plataforma (`localStorage.setItem('eleven_platform_override','desktop-app')`).

# CI — estado real (linha do tempo)

`.github/workflows/` hoje tem: `build.yml` (lint+test+build em `main`,
ubuntu), `ci.yml`, `supabase-keepalive.yml`, `build-android.yml` (APK release
via Actions) e `build-ios.yml` (IPA em runner macOS, sem código + sideload).
**Ainda não coberto por CI**: testes de `api`/`cli`/`desktop`/`mobile`,
suíte de regressão de segurança, e deploy automatizado (produção sobe por
push a `main` — GitHub/Vercel — e por `vercel --prod` manual; o alias
`11-app-sage.vercel.app` precisa ser re-apontado para o último deploy
sempre que rodar deploy manual ou mergear a main).

Até a suíte de segurança existir, tratar a checklist manual como obrigatória,
não opcional — principalmente antes de qualquer merge que toque nos arquivos
listados na seção de segurança acima. Husky `pre-commit` (eslint+prettier nos
staged) não cobre o repositório inteiro, só o que foi alterado.

# CONSOLIDAÇÃO COM CLAUDE.md

`CLAUDE.md` (diretiva de engenharia de 170+ itens) e este `AGENTS.md` têm
propósitos diferentes: este arquivo é o contexto operacional do dia a dia
(comandos, gotchas, protocolo de relatório); `CLAUDE.md` é o roadmap de
fases de longo prazo. Ao editar um, checar se o outro ficou desatualizado —
nenhuma seção deveria contradizer a outra (ex.: se uma fase de segurança
do `CLAUDE.md` já foi concluída, isso deveria refletir aqui como regra
permanente, como as da seção acima).

# 9Router — lembrete operacional

- `ROUTER9_MODEL` pode ser o nome de um **combo** (cadeia de fallback
  configurada no dashboard do 9Router), não só um model id isolado —
  nenhuma mudança de código é necessária pra trocar de modelo pra combo,
  só a env var.
- Se `ROUTER9_ENDPOINT`/túnel estiver acessível fora de `localhost`,
  confirmar `REQUIRE_API_KEY=true` no `.env` do **próprio 9Router**
  (serviço separado, não confundir com o `.env` deste projeto) — sem isso,
  qualquer um que ache a URL do túnel gasta sua cota sem autenticação.

# PR — formato mínimo

- Título: `[<área>] <resumo curto>` — ex. `[terminal] corrige bypass de allowlist via shell`
- Corpo: o que mudou, por que, quais testes rodaram (colar output real, não
  descrever), e se algum item da seção "REGRAS DE SEGURANÇA" foi tocado —
  se sim, linkar o teste de regressão correspondente.
- Nunca abrir PR com `pnpm typecheck` como evidência de tipo (está
  quebrado, ver seção Testing) — usar `build` do pacote afetado.

# Master Engineering Directive — 11

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

apps/web/ → Next.js 13 (App Router)
apps/desktop/ → Tauri (Rust + WebView)
apps/mobile/ → Capacitor (iOS/Android)
packages/ia/ → Shared AI logic (router, skills, plugins, metrics)
packages/api/ → Shared API types
packages/shared/ → Shared utilities
infra/ → Supabase migrations, deploy scripts

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

# PROTOCOLO DE GOVERNANÇA, CONCORRÊNCIA E ARQUITETURA MULTI-AGENTE

Este documento estabelece as regras rígidas que todos os agentes (terminais e instâncias) devem seguir obrigatoriamente para evitar conflitos de versão, sobreposição de código, estouro de contexto e perda de alterações.

---

## 1. Regra de Ouro (Isolamento de Escopo e Concorrência)

- **Escopo Estrito:** Nunca altere arquivos fora do escopo ou da função atribuída à sua instância específica.
- **Checagem de Dependência:** Verifique se a etapa ou versão anterior da qual sua tarefa depende foi devidamente finalizada e validada antes de iniciar.

---

## 2. Gestão de Contexto e Economia de Memória

- **Leitura Enxuta:** Não carregue históricos de chat longos ou arquivos desnecessários. Leia apenas as regras deste arquivo, o escopo do seu módulo e o relatório imediato da versão anterior (ex: `agent-v[N-1]-report.md`).
- **Respeito ao Arquivo de Resumo:** Se houver um arquivo `docs/reports/archive-summary.md`, consulte-o apenas se precisar de contexto histórico profundo.

---

## 3. Rotina Obrigatória de Relatório (`.md`)

Antes e depois de qualquer alteração no código, você deve criar ou atualizar o seu arquivo de rastreabilidade na pasta de relatórios (`docs/reports/agent-[ID]-report.md`). O arquivo deve seguir **exatamente** esta estrutura:

```markdown
# RELATÓRIO DE EXECUÇÃO DE TAREFA - [ID_DO_AGENTE / VERSÃO]

## 1. Metadados da Tarefa

- **ID do Agente / Terminal:** [Ex: Agent-1, Agent-Llama, Agent-QuickFix]
- **Data e Hora de Início:** [YYYY-MM-DD HH:MM]
- **Status Atual:** [EM ANDAMENTO / CONCLUÍDO / FALHA / BLOQUEADO]
- **Escopo Atribuído:** [Ex: src/components/eleven-coder/]

## 2. Diagnóstico Prévio (Pré-Execução)

_(Preencha obrigatoriamente antes de modificar qualquer linha de código)_

- **Arquivos Alvo:**
  - `caminho/para/arquivo1.py`
- **Estado de Dependência:** [Explique se depende de outra versão ou se há risco de conflito]
- **Plano Detalhado de Implementação:**
  1. [Passo técnico 1]
  2. [Passo técnico 2]

## 3. Log de Execução e Modificações

_(Preencha durante ou logo após as alterações)_

- **Modificações Realizadas:**
  - `[ARQUIVO]`: [Descrição da alteração feita]
- **Problemas Encontrados / Alertas de Conflito:**
  - [Nenhum / Descrever divergências encontradas]

## 4. Validação e Pós-Execução

_(Preencha após salvar os códigos)_

- **Status do Build / Testes:** [Passou / Falhou]
- **Arquivos Liberados:** [Indique quais arquivos agora estão prontos para o próximo agente]
- **Observações Finais para o Próximo Agente:** [Avisos importantes]
```
