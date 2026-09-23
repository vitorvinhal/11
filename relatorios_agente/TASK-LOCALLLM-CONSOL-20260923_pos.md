# 📋 RELATÓRIO PÓS-ALTERAÇÃO — TASK-LOCALLLM-CONSOL-20260923

- **ID da Tarefa:** `TASK-LOCALLLM-CONSOL-20260923`
- **Agente:** 3 (Ollama/Local LLM Lead)
- **Data/Hora de Conclusão:** 2026-09-23
- **Status Final:** 🟢 CONCLUÍDO COM SUCESSO
- **Branch:** `agente3/localllm-20260923` (não em `main`)
- **Plano pré:** `relatorios_agente/TASK-LOCALLLM-CONSOL-20260923_plano.md`

---

## 🎯 Objetivo (executado)

Consolidar IA local Ollama: paridade client/server, fix smoke-test auth 401, docs modo local vs nuvem, validação E2E ≥2 modelos, gate real, bump de versão.

## ✅ Metas

- [x] `scripts/smoke-test.mjs`: `POST /api/chat` sem auth espera **401** (não 400).
- [x] Paridade default: client e server usam **`llama3.2:3b`**.
- [x] Fallback modelo inexistente intacto (client `isModelNotFound`+`discoverFirstModel`; server `candidates` via `/api/tags`).
- [x] `/api/health/router` **não removido** — continua com `requireUser` → 401 sem sessão; autenticado reporta `{ ok, service: "router" }`.
- [x] Sessões em memória por `userId` (`terminal/exec`: `sessionKey(userId, sessionId)`).
- [x] `AGENTS.md`: seção **Modo local vs nuvem (IA)** documentada.
- [x] E2E ≥2 modelos + fallback 404.
- [x] Versão **2.16.4-alpha** (code 33) + `CHANGELOG.md` + `version.json`.
- [x] Gate `pnpm -r lint` / `pnpm -r build` / `pnpm -r test`.

## 📝 Alterações

| Arquivo                                    | Mudança                                                                                |
| ------------------------------------------ | -------------------------------------------------------------------------------------- |
| `scripts/smoke-test.mjs`                   | chat auth check `400` → `401`; label atualizado                                        |
| `apps/web/src/app/api/chat/route.ts`       | `routeOllama` default `qwen3:4b` → `llama3.2:3b` (paridade)                            |
| `AGENTS.md`                                | docs modo local/nuvem, fallback, Ollama off, health router, sessions userId, smoke 401 |
| `CHANGELOG.md`                             | entrada `v2.16.4-alpha — 2026-09-23`                                                   |
| `apps/web/public/version.json`             | `2.16.4-alpha` / code `33`                                                             |
| `package.json` (root + 6 workspaces)       | bump via `pnpm version:patch`                                                          |
| `.task_state.md`                           | checkpoint da task                                                                     |
| `relatorios_agente/TASK-LOCALLLM-CONSOL-*` | plano pré + este pós                                                                   |

## 🔎 Evidência por código (item 2 do Brain)

**routeOllama trata modelo inexistente:**

```
route.ts:574  const candidates = [requested];
route.ts:577  const tags = await fetch(`${endpoint}/api/tags`, ...);
route.ts:583  if (first && first !== requested) candidates.push(first);
route.ts:588  for (const modelId of candidates) { ... }
route.ts:573  model ?? process.env["OLLAMA_MODEL"] ?? "llama3.2:3b"
```

**Fallback client (local-llm.ts):**

```
local-llm.ts:224  if (isModelNotFound(err)) {
local-llm.ts:225    const fallback = await discoverFirstModel(cfg.baseUrl);
local-llm.ts:240  async function discoverFirstModel(baseUrl: string)
```

**/api/health/router intacto (não removido):**

```
apps/web/src/app/api/health/router/route.ts
  L13 requireUser → 401 se sem sessão
  L25-32 JSON { ok, service: "router", timestamp, data.available }
```

Sem 9Router: comportamento **esperado** = 401 sem auth; com auth `ok:false|true` conforme gateway — healthcheck **não** some.

**Erro claro sem crash (Ollama off):**

```
ChatPanel.tsx:273  `(Provedor local indisponível: ... Ollama rodando? Para site https, use OLLAMA_ORIGINS="*" no seu PC.)`
```

**Sessões por userId:**

```
terminal/exec/route.ts:83-84  sessionKey(userId, sessionId) => `${userId}:${sessionId}`
terminal/exec/route.ts:198-206 sessions.set(key, sess)
```

## 🧪 E2E Ollama (local, 2026-09-23)

```
TAGS: llama3.2:3b, gemma3:4b, qwen3:4b, dolphin3:8b
CHAT llama3.2:3b => model=llama3.2:3b len=2 content=OK
CHAT gemma3:4b => model=gemma3:4b len=3 content=OK
BADMODEL nao-existe:99b => 404 (esperado)
FALLBACK llama3.2:3b => len=2 (discover + retry OK)
```

## 🚦 Gate real (OUTPUT)

Comando: `pnpm -r lint` → exit **0**  
Comando: `pnpm -r build` (via cmd) → exit **0**  
Comando: `pnpm -r test` → exit **0**

### LINT (resumo fiel do output — 0 errors)

```
Scope: 7 of 8 workspace projects
apps/desktop lint: ✖ 2 problems (0 errors, 2 warnings) — safePath.test.ts unused imports
packages/ia lint: ✖ 18 problems (0 errors, 18 warnings) — unused vars pré-existentes
apps/web lint: ✖ 17 problems (0 errors, 17 warnings) — pré-existentes
packages/cli/api/shared/mobile lint: Done
LINT_EXIT=0
```

### BUILD (exit 0 — todos os workspaces Done)

```
packages/api build: Done
packages/cli build: Done (assets copiados)
apps/mobile build: Done
packages/shared build: Done
packages/ia build: Done (assets copiados)
apps/desktop build: Finished release profile; Built desktop.exe;
  Finished 2 bundles: msi + nsis; Done
apps/web build: ✓ Compiled successfully; ✓ Generating static pages (24/24); Done
BUILD_EXIT=0
```

> Nota: 1ª tentativa `pnpm -r build` em PowerShell falhou intermitentemente com `Exit status 4294967295` em `packages/api`/`desktop` **sem erro de TypeScript** (artefacto de stderr/noise no shell Windows). Reexecutado isolado e em `cmd /c` → **0 em todos**. Builds isolados: api/cli/mobile/shared/ia/desktop web = exit 0; `npx tsc -p packages/api` = 0; web `next build` = OK.

### TEST (exit 0)

```
packages/shared: Test Suites: 1 passed | Tests: 1 passed
packages/ia: Test Suites: 14 passed | Tests: 257 passed
apps/web: Test Suites: 16 passed | Tests: 157 passed
(worker force-exit warning pré-existente em job-queue — não é falha)
TEST_EXIT=0
===== GATE END lint=0 build=0 test=0 =====
```

**Totais: 415 testes, 31 suites, 0 falhas.**

## 🔄 Diário de execução

> 🚨 **PROBLEMA [build flaky PowerShell]** `pnpm -r build` reportou `4294967295` em packages/api sem mensagem de erro tsc; reexecução isolada e via `cmd` → 0. Não é regressão do código desta task.

> 🔄 `skills/preflight_and_reporting.md` inexistente no repo — protocolo seguido via `docs/AGENTE.md` + pedido do Brain (plano pré + pós + BRAIN_SYNC).

> 🔄 `apps/orca` inexistente — smoke porta 4001 N/A para Agente 3.

## 📌 Itens NÃO feitos (fora de escopo / Brain)

- Sem `git push` / deploy / tag.
- CI mínima api/cli/desktop/mobile: **só proposta** no plano pré (aguarda go).
- `/api/code` ainda usa `verifyToken` (Agente 4).
- Sem smoke em porta 4001.

---

<!-- BRAIN_SYNC_START -->

- TASK_ID: TASK-LOCALLLM-CONSOL-20260923
- BRANCH: agente3/localllm-20260923
- STATUS: SUCCESS
- AFFECTED_FILES: [scripts/smoke-test.mjs, apps/web/src/app/api/chat/route.ts, AGENTS.md, CHANGELOG.md, apps/web/public/version.json, package.json, apps/web/package.json, apps/desktop/package.json, apps/mobile/package.json, packages/api/package.json, packages/cli/package.json, packages/ia/package.json, packages/shared/package.json, .task_state.md, relatorios_agente/TASK-LOCALLLM-CONSOL-20260923_plano.md, relatorios_agente/TASK-LOCALLLM-CONSOL-20260923_pos.md]
- TEST_SUMMARY: Lint: PASS | Build: PASS | Tests: PASS
- REQUIRES_SMOKE_TEST: NO

<!-- BRAIN_SYNC_END -->
