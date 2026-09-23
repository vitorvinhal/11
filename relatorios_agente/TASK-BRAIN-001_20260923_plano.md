# 📋 PLANO DE EXECUÇÃO - TAREFA TASK-BRAIN-001

- **ID da Tarefa:** `TASK-BRAIN-001`
- **Data/Hora de Início:** 2026-09-23
- **Status Inicial:** 🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)
- **Agente:** Brain (Master Orchestrator) — orquestração de docs e skills, sem toque em apps/packages.

---

## 🎯 Objetivo Geral

Adicionar cláusulas de orquestração do Agente Brain ao protocolo do projeto:

1. **`docs/AGENTE.md`**: anexar seções 6 (Protocolo do Agente Brain / monpolio de deploy), 7 (Guardrails de UI & Performance — Zero Degradation) e 8 (Checklist de Ambiente e Smoke Test Pré-Integração).
2. **`skills/preflight_and_reporting.md`** (novo): Skill `skill-11-preflight-reporting` v1.0.0 para pré-checagem e auto-reporting dos agentes executores.
3. **`AGENTS.md`** (raiz): nota curta reforçando o monopólio de deploy do Brain e apontando os agentes para a skill de preflight.

## 📌 Metas Esperadas

- [ ] Seções 6/7/8 anexadas ao final de `docs/AGENTE.md`
- [ ] `skills/preflight_and_reporting.md` criado com ações de plano/preflight/pos
- [ ] Nota do Brain adicionada ao `AGENTS.md` raiz
- [ ] `.task_state.md` atualizado com rastro da sub-tarefa
- [ ] Adaptações aprovadas: `typecheck` → `lint && build && test`; markdown dos blocos de código íntegro; nomenclatura de relatórios alinhada ao padrão do repo

## 🗺️ Roteiro Detalhado de Ação

### Passo 1: Criar plano pré-alteração

- **O que fazer:** Registrar este plano antes de qualquer edição.
- **Como fazer:** Gravar `relatorios_agente/TASK-BRAIN-001_20260923_plano.md`.
- **Arquivos afetados:** `relatorios_agente/TASK-BRAIN-001_20260923_plano.md`

### Passo 2: Anexar seções 6/7/8 a `docs/AGENTE.md`

- **O que fazer:** Adicionar ao final do arquivo (após bloco Python) as seções 6, 7 e 8.
- **Como fazer:** Append com edit tool, preservando o formato markdown existente.
- **Arquivos afetados:** `docs/AGENTE.md`

### Passo 3: Criar `skills/preflight_and_reporting.md`

- **O que fazer:** Criar skill com Ação 1 (relatório pré), Ação 2 (preflight), Ação 3 (relatório pós + bloco Brain).
- **Como fazer:** Adaptar o conteúdo enviado: substituir `pnpm -r typecheck` (quebrado no root) por `pnpm -r lint && pnpm -r build && pnpm -r test`; corrigir codeblocks; padronizar nome do relatório.
- **Arquivos afetados:** `skills/preflight_and_reporting.md`

### Passo 4: Adicionar nota do Brain ao `AGENTS.md`

- **O que fazer:** Inserir seção curta sobre monopólio de deploy e zero degradação de UI.
- **Como fazer:** Inserir após o cabeçalho inicial, antes da REGRA DE RESILIÊNCIA.
- **Arquivos afetados:** `AGENTS.md`

### Passo 5: Atualizar `.task_state.md`

- **O que fazer:** Registrar a conclusão da infraestrutura de orquestração.
- **Como fazer:** Edição pontual anexando estado da sub-tarefa.
- **Arquivos afetados:** `.task_state.md`

---

_Plano gerado pelo Brain antes da execução._

---

## 🏁 Relatório Pós-Alteração (Status Final)

- **Data/Hora de Conclusão:** 2026-09-23
- **Status Final:** 🟢 CONCLUÍDO COM SUCESSO

### 📝 Resumo das Alterações Efetivadas:

- [x] `docs/AGENTE.md` — anexadas seções 6 (Protocolo Brain / monopólio de deploy), 7 (Guardrails UI / zero degradation) e 8 (Checklist ambiente e smoke test), com correção do gate (`lint && build && test`, sem typecheck).
- [x] `skills/preflight_and_reporting.md` — criada skill `skill-11-preflight-reporting` v1.0.0 (Ações 1-3 + bloco BRAIN_SYNC + regras de compliance).
- [x] `AGENTS.md` raiz — seção "🧠 AGENTE BRAIN — MONOPÓLIO DE DEPLOY E ORQUESTRAÇÃO".
- [x] `.task_state.md` — rastro da sub-tarefa anexado.
- [x] Adaptações aplicadas: typecheck→lint/build/test, codeblocks íntegros, nomenclatura `TASK-<ID>_<YYYYMMDD>`.

### ⚠️ Ocorrências e Problemas Resolvidos:

- Nenhum erro durante a execução (alterações de docs/skills, sem build necessário).

<!-- BRAIN_SYNC_START -->

- TASK_ID: TASK-BRAIN-001
- BRANCH: vitorvinhal/piranha
- STATUS: SUCCESS
- AFFECTED_FILES: [docs/AGENTE.md, skills/preflight_and_reporting.md, AGENTS.md, .task_state.md, relatorios_agente/TASK-BRAIN-001_20260923_plano.md]
- TEST_SUMMARY: Lint: N/A (docs/skills) | Build: N/A | Tests: N/A
- REQUIRES_SMOKE_TEST: NO

<!-- BRAIN_SYNC_END -->
