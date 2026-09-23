# 📋 PLANO DE EXECUÇÃO - TAREFA INTEGR-AGENTS-001

**Data/Hora:** 2026-09-23 (sessão atual)
**Agente:** Agente 4 (Unify-Auth & Integration Lead)
**Status Inicial:** 🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)

---

## 🎯 Objetivo Geral

Integrar as 4 branches de agente em uma única branch de integração
`integration/agents-20260923` e padronizar segurança das rotas API
(requireUser em toda rota nova/GET, remover verifyToken legado, SSRF
allowlist, path com path.relative), rodando os gates de validação
(lint + build + test).

## 📌 Nota de Preflight

- `skills/preflight_and_reporting.md` **não existe** no repo
  (verificado: `Test-Path skills/preflight_and_reporting.md` = False).
  Protocolo manual (pré → execução com log → pós) segue este documento.
- Conflito de instrução: AGENTS.md exige bump de versão + CHANGELOG em
  toda alteração funcional; a restrição do Agente 4 PROÍBE alterar
  CHANGELOG.md/version.json (responsabilidade do Brain). **Resolução:**
  merge preserva o conteúdo das branches (sem bump adicional);
  changelog/version bump fica para o Brain no deploy.

## ✅ Metas Esperadas

- [x] Branch `integration/agents-20260923` criada a partir de `vitorvinhal/candlefish`
- [x] Merge de `vitorvinhal/whiting` (Ollama — chat/route.ts candidates loop mantido) → `f647acf`
- [x] Merge de `fix/orca-browser` (mobile/desktop) → `9ffa295`
- [x] Merge de `main` (Orca — por último; converter verifyToken → requireUser em code/read) → `c65737f` (+ `b3cc100` fix/orca-agent1)
- [x] requireUser() em toda rota nova/GET introduzida pelos merges
- [x] verifyToken residual = 0 em apps/web/src
- [x] SSRF: allowlist de host antes de fetch de URL vinda do cliente (bases em env / hosts fixos)
- [x] path sandbox com path.relative (nunca startsWith) — `resolveCwd` → `isUnderRoot`
- [x] `pnpm -r lint` → 0 erros
- [x] `pnpm -r build` → OK
- [x] `pnpm -r test` → todos passam (157 / web 16 suites)
- [x] Relatório pós com bloco `<!-- BRAIN_SYNC_START -->` + `BRANCH: integration/agents-20260923`
- [x] Commit SEM alterar CHANGELOG.md/version.json (Brain cuida disso) — merge combinou entradas existentes

## 🗺️ Roteiro

### 1. Criar branch de integração

- **O que:** `git checkout -b integration/agents-20260923` a partir de `vitorvinhal/candlefish` @ 3d256a6
- **Como:** worktree atual já está nessa base, tree limpo
- **Arquivos:** nenhum (git)

### 2. Merge vitorvinhal/whiting (Agente 3 — Ollama)

- **O que:** trazer fallback cascata + candidates loop de chat/route.ts
- **Como:** `git merge vitorvinhal/whiting`; em conflito de `apps/web/src/app/api/chat/route.ts` → manter versão whiting (candidates + ROUTER9_TUNNEL)
- **Arquivos:** apps/web/src/app/api/chat/*, lib/local-llm related, relatorios

### 3. Merge fix/orca-browser (Agente 2 — mobile/desktop)

- **O que:** bridges mobile/desktop, platform-guard
- **Como:** `git merge fix/orca-browser`; resolver conflitos preservando restrições de plataforma
- **Arquivos:** apps/web/src/lib/platform*, components UI, apps/desktop, apps/mobile

### 4. Merge main (Agente 1 — Orca) — POR ÚLTIMO

- **O que:** apps/orca + rotas /api/code novas do main
- **Como:** `git merge main`; MAIOR risco de conflito:
  - `apps/web/src/app/api/code/read/route.ts` (novo do main): trocar `verifyToken` → `requireUser()` de `@/lib/auth-unify` ou `security.ts` local
  - `code/services/session-manager.ts`, `Sidebar.tsx`: preservar comportamento candlefish (plataformas com mobile-app)
  - version.json/package.json/CHANGELOG: aceitar conteúdo do merge sem bump próprio
- **Arquivos:** apps/orca/**, apps/web/src/app/api/code/**, Sidebar, version.json

### 5. Pass de segurança pós-merge

- **O que:** grep verifyToken (deve = 0), grep startsWith em path sandbox (trocar por path.relative), checar fetch de URL client-side vs allowlist
- **Como:** revisão de cada rota nova; correções mínimas
- **Arquivos:** code/read/route.ts, terminal/exec (resolveCwd — já usa path.relative em isUnderRoot? verificar), health/all

### 6. Gates

- **O que:** `pnpm -r lint` → `pnpm -r build` → `pnpm -r test`
- **Como:** registrar output real; se falhar, reportar ANTES de prosseguir

### 7. Commit + relatório pós

- **O que:** commit na branch de integração (NUNCA em main), relatório pós com BRAIN_SYNC
- **Arquivos:** relatorios_agente/INTEGR-AGENTS-001_*.md, código mergeado

## 📁 Arquivos Afetados (previstos)

- `apps/web/src/app/api/chat/route.ts` (conflito → versão whiting)
- `apps/web/src/app/api/code/read/route.ts` (verifyToken → requireUser)
- `apps/web/src/app/api/code/services/session-manager.ts`
- `apps/web/src/components/Sidebar.tsx`
- `apps/orca/**` (novo, vindo de main)
- `relatorios_agente/INTEGR-AGENTS-001_20260923_plano.md` (este)
- Possivelmente rotas com SSRF/path pendentes

## ⛔ Restrições (Agente 4)

- ❌ `git push origin main`
- ❌ Builds de produção (Vercel/Railway)
- ❌ Tags de release
- ❌ Alterar CHANGELOG.md / version.json (Brain)
- ❌ `pnpm typecheck` (quebrado no root)
- ❌ Hardcoded secrets
- ❌ Reduzir partículas/blur/quality estaticamente
- ❌ Commit direto em main

---

## 🔄 Diário de Execução em Tempo Real

- Merges sequenciais: whiting `f647acf` → fix/orca-browser `9ffa295` → main `c65737f` → fix/orca-agent1 `b3cc100`
- Corrida de `index.lock`/`MERGE_HEAD` contornada com git estritamente sequencial
- Security post-merge `7529e70` + fix de import path em `code/read` (quebrava `next build`)
- Gates reais: lint 0 errors · build OK · test EXIT=0 (157 passed)

---

## 🏁 Relatório Pós-Alteração (Status Final)

**Status:** ✅ CONCLUÍDO (gates OK) · pendente: push da branch + smoke 4001/3001
**Relatório completo:** `relatorios_agente/INTEGR-AGENTS-001_20260923_relatorio.md`
**BRAIN_SYNC:** BRANCH `integration/agents-20260923` · REQUIRES_SMOKE_TEST: YES
