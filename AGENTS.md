# Responda sempre em português do Brasil.

Todos os textos, mensagens e respostas da IA devem ser em pt‑BR.

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
- Smoke test: `node scripts/smoke-test.mjs [baseURL]` (default `http://localhost:3099`). Testa endpoints críticos incl. `/api/health/router`, terminal auth, PWA manifest. Rotas com `requireUser()` sem sessão retornam **401** (pós unify-auth), não 400.

## Modo local vs nuvem (IA)

- **Como ligar o modo local:** no seletor de provider do chat escolha **Ollama** (ou **Zen**). O app então usa `sendLocalCompat` → `apps/web/src/lib/local-llm.ts` e chama `http://localhost:11434` **direto do device** (client-side). A nuvem (Vercel) não alcança `localhost`.
- **Como voltar para a nuvem:** provider **9router** / **Gemini** / **Anthropic** / default — o fluxo vai para `POST /api/chat` no servidor (server-side).
- **Config do Ollama:** `OllamaPanel` grava `localStorage.ollama_config` (`endpoint` + `selectedModel`). Default de modelo: **`llama3.2:3b`** (client e server `routeOllama` — paridade). Override server: env `OLLAMA_MODEL` / `OLLAMA_ENDPOINT`.
- **Fallback de modelo inexistente:** se o modelo não existir (404), client consulta `GET /api/tags` e repete com o primeiro instalado; server monta lista de candidatos igual. Lista 1-clique: `OLLAMA_POPULAR` em `local-llm.ts`.
- **Ollama desligado:** não crasha a UI — `sendLocalCompat` captura o erro e mostra no assistant: `(Provedor local indisponível: … Ollama rodando? Para site https, use OLLAMA_ORIGINS="*" no seu PC.)`. Painel mostra "Desconectado" + link `ollama.com`.
- **Sem 9Router (`ROUTER9_ENDPOINT`):** `/api/health/router` continua existindo — sem auth → **401**; autenticado → `{ ok: false|true, service: "router" }` (reporta estado; **não remover o healthcheck**). `/api/chat` com provider 9router falha com 502/mensagem de dica — comportamento esperado offline.
- **Sessões em memória:** chaves por `userId` (ex.: terminal `sessionKey(userId, sessionId)` em `terminal/exec`) — nunca só id do cliente.

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
