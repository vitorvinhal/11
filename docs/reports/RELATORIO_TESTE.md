# RELATÓRIO — Teste completo da interface e do sistema 11

Data: 2026-09-19 · Versão testada: `2.10.2-alpha` · Ambiente: Windows, Next dev (porta 3000), Supabase real, 9Router local (20128) UP.

**Método:** probe automatizado com Playwright (browser Chromium real, conta criada via signup na UI), probe HTTP de todas as 53 rotas API, e2e suite Playwright existente (20 testes), lint, testes unitários (jest). Screenshots em `apps/web/_shots/`.

---

## 1. Resumo executivo

| Frente                                                                     | Resultado                                                                                                                                   |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Testes unitários (jest)                                                    | ✅ **385/385** (ia 254 + web 130 + shared 1)                                                                                                |
| Lint                                                                       | ✅ 0 erros (15 warnings pré-existentes)                                                                                                     |
| E2E existente                                                              | ⚠️ 19/20 (1 falha: contrato `/api/version` desatualizado)                                                                                   |
| Landing + login/signup                                                     | ✅ Funcionam (signup com validação nativa, sessão criada, shell renderiza)                                                                  |
| 13/13 abas do shell autenticado                                            | ✅ Renderizam (Plugins, Skills, Projects, Memória, FinOps, Artifacts, Canvas, Code, Coder, Neural, Connectors, Mídia, Agente PC, Conversas) |
| Rotas separadas `/health` `/admin` `/neural` `/memoria` `/coder` `/canvas` | ⚠️ `/health` e `/admin` com defeitos reais (abaixo)                                                                                         |
| Rotas API (53)                                                             | ⚠️ 3 rotas com bugs reais confirmados                                                                                                       |

**Veredito: base saudável (auth, chat com 9Router real, terminal, memórias, métricas, finops, devices, webhooks, reverter OK), mas 5 bugs reais na interface/páginas e 2 divergências de contrato docs/teste↔código.**

---

## 2. BUGS REAIS CONFIRMADOS

### 🔴 B1 — `/health` (dashboard de saúde) quebra por completo no cliente

- `apps/web/src/app/health/page.tsx:85` → `status?.checks.map(...)` lança `TypeError: Cannot read properties of undefined (reading 'map')`.
- Causa: a página espera shape `{checks: [...]}` mas `GET /api/health` retorna `{ok, timestamp, version, services: {...}}` (sem `checks`). **Contrato rota↔página quebrado** (inclusive duplicado no `/admin`).
- Efeito: tela mostra só o error boundary "Algo deu errado". O e2e `smoke.spec.ts` **não pega** porque só checa HTTP 200.
- Também: `Warning: setState during render` em `health/page.tsx:13` (`fetchHealth()` chamado durante render).
- Fix sugerido: página deve ler `services` e iterar entries, ou rota deve expor `checks`.

### 🔴 B2 — `/api/plugins` sempre 500 com usuário real (`column plugins.config does not exist`)

- `apps/web/src/app/api/plugins/route.ts:51,66,119,131` usam coluna `config` na tabela `plugins`.
- A migration `infra/supabase/migrations/20240924_artifacts_plugins.sql` define a tabela com **`metadata`** (e sem `config`). **Schema → código dessincronizados.**
- GET (listar instalados) → 500; POST (instalar) → insert falha → 500. O painel Plugins mostra catalogo local, mas instalação/lista persistida **não funcionam**.
- Fix sugerido: usar `metadata` (ou rodar migration `ALTER TABLE plugins ADD COLUMN config JSONB` e ajustar select/insert).

### 🔴 B3 — CSP bloqueia scripts essenciais → Canvas degradado e telemetria morta

`next.config.js` CSP `script-src 'self' 'unsafe-eval' 'unsafe-inline'`:

- `https://cdn.tailwindcss.com/` **bloqueado** → preview do Canvas (`CanvasPanel`) renderiza HTML **sem estilos** (Tailwind CDN não carrega). Confirmado em screenshot.
- `https://va.vercel-scripts.com/v1/script.debug.js` (Analytics) e `/speed-insights/script.debug.js` **bloqueados** → Vercel Analytics + Speed Insights **não carregam** (dev e provavelmente prod), apesar de terem sido adicionados (changelog "Add Vercel Analytics + Speed Insights").
- Fix sugerido: adicionar `https://cdn.tailwindcss.com` e `https://va.vercel-scripts.com` ao `script-src` (ou remover Tailwind CDN e bundlar Tailwind).

### 🟠 B4 — `/api/pc-agent` health check quebra (`Request with GET/HEAD method cannot have body`)

- `apps/web/src/app/api/pc-agent/route.ts:225` chama `callPCAgent("/health", "GET", {})`; `callPCAgent` (linhas 64-91) **sempre** manda `body: JSON.stringify(data)` até em GET → Node fetch lança erro.
- Resposta: `{status:"ok", router9:{error:"fetch failed"}, pcAgent:{error:"GET cannot have body"}}` — status enganoso (ok com os dois serviços em erro).
- router9 também mira `localhost:3002` (desktop) que não existe no deploy web → sempre "fetch failed".
- Fix sugerido: não enviar body em GET (como já feito no fluxo `routeAction` de sessions) e refletir degraded no `status`.

### 🟠 B5 — Inconsistência de autenticação nas rotas consumidas por painéis

- Painel Plugins envia token e recebe 500 (B2). Já o Admin (`admin/page.tsx`) faz `fetch('/api/plugins')`, `/api/skills`, `/api/metrics` **sem header `Authorization`** → 401. Com sessão válida via PowerShell, as MESMAS rotas devolvem 200 → confirma que o problema é o cliente não anexar o JWT.
- Consequência: `/admin` mostra sempre "No metrics available / Plugins (0) / Skills (0)" e versão vazia (espera `{ok,data}` não é atendido — ver D1).
- Fix sugerido: reusar `getAccessToken()` + `Authorization` nos fetches de `admin/page.tsx` (health page idem).

---

## 3. DIVERGÊNCIAS DE CONTRATO (docs/testes vs código)

### 🟡 D1 — `/api/version` (e2e falha: 19/20)

- Retorna flatten: `{version, versionCode, name, channel, changelog}` (mudança intencional, `docs/audit/baseline.md`).
- Mas `docs/api.md:45-59` documenta `{ok, data:{...}}` e `e2e/smoke.spec.ts:36` espera `body.ok`. **Teste e doc desatualizados**.
- `/admin` assume `data.version → undefined` (tela com versão vazia).
- Fix sugerido: atualizar teste + doc para o contrato flat.

### 🟡 D2 — `/api/events` e `/api/account`

- `/api/events` retorna 401 mesmo com Bearer válido (provável exigir query `userId`). Checar código da rota.
- `/api/account` GET → 405 (rota só DELETE). Confirmado no código (`docs` citam DELETE). Não é bug, mas GET 405 deve ser esperado.

---

## 4. O QUE FUNCIONA (verificado de ponta a ponta)

- **Auth: signup/login** (email+senha) com sessão imediata; logout via dropdown; validação nativa (email/`minLength=6`) no cliente.
- **Landing `/`**: carrega, hero, features, footer. Redireciona pro AppShell quando logado.
- **Chat** (`POST /api/chat` com sessionId): ✅ responde `{"content":"OK","provider":"astra"}` via **9Router real (20128)** — fallback chain funcionando. Sem sessionId → 400 (correto, smoke test passa).
- **Terminal** (`POST /api/terminal/exec`): ✅ SSE streaming `stdout`/`exit`, shell PowerShell, cwd. `echo` real executado.
- **Memórias** (`/api/memories` GET/POST): ✅ escrita e leitura no Supabase.
- **Artifacts, Projects, Media, Reverter, Devices, FinOps, Settings, Webhooks**: ✅ 200 com dados válidos (arrays/seções).
- **`/api/skills`**: ✅ 200 (4 skills builtin).
- **`/api/metrics`**: ✅ 200 (zeros, sem uso).
- **`/api/health` + `/api/health/router`**: ✅ 200 (router ok via 9Router).
- **`/api/plugins/discover`, `/api/skills/discover`**: ✅ 200 (API GitHub, `[]` sem query).
- **`/api/settings/test-ollama`**: ✅ 200 (lista llama3.2, gemma3, qwen3, dolphin3).
- **AppShell logado**: navegação completa das 13 abas + composer + nova conversa + avatar. Screenshots em `apps/web/_shots/`.

---

## 5. E2E — nota sobre o dev server Next

- O dev server Next 13.5 **crashou 2x** com `Cannot find module './7739.js'` durante testes (chunk do webpack dev GC'd). Não é bug do app (não acontece em `next start`/Vercel), mas **deixa os e2e flaky** em dev Windows + pnpm. Recomendação: rodar e2e contra `next build + next start`, ou `pnpm build` antes.
- Execução e2e limpa: **19/20 passou** (48s). A única falha é o contrato D1.

---

## 6. Limpeza pendente (feita/por fazer)

- ❗ Usuário de teste criado no Supabase durante o probe (e-mail temporário `uiqa…@gmail.com`, senha `Teste@12345`) + 1 memória de teste + conversa-sessão. **Remover** via dashboard Supabase (relatório anterior seguiu essa prática). Credenciais completas não versionadas — ver `apps/web/_shots/`.
- Foram criados artefatos temporários e removidos (scripts de probe). Screenshots mantidos em `apps/web/_shots/`.
- Servidor dev parado ao final.

---

## 7. Priorização sugerida

| Prio | Item                                                                              | Esforço |
| ---- | --------------------------------------------------------------------------------- | ------- |
| 1    | B2 — migration/`config`→`metadata` de `plugins`                                   | Baixo   |
| 1    | B1 — `/health` ler `services` (e `/admin` versions/metrics/health)                | Baixo   |
| 2    | B3 — CSP add tailwindcdn + va.vercel-scripts                                      | Baixo   |
| 2    | B4 — `callPCAgent` GET sem body + status refletir erro                            | Baixo   |
| 3    | B5 — fetches do `/admin` com Bearer                                               | Baixo   |
| 3    | D1 — atualizar `smoke.spec.ts` + `docs/api.md` p/ contrato flat de `/api/version` | Baixo   |
