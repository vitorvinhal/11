# 📋 PLANO DE EXECUÇÃO - TAREFA TASK-BRAIN-002

- **ID da Tarefa:** `TASK-BRAIN-002`
- **Data/Hora de Início:** 2026-09-23
- **Status Inicial:** 🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)
- **Agente:** Brain — reorganização de documentação/orquestração (não toca em `apps/` nem `packages/`).

---

## 🎯 Objetivo Geral

Reorganizar a documentação raiz do projeto seguindo o padrão do vídeo de referência (Nando Garcia — estrutura PRD/ADR/SPEC/PLAN + agents/skills + loop developer→tester→reviewer), para respostas mais rápidas, contexto enxuto e auxílio simples.

## 📌 Metas Esperadas

- [ ] `docs/prd/PRD.md` — visão de negócio (sem técnico)
- [ ] `docs/adr/` — README (template + quando criar) + 5 ADRs semeados com decisões reais
- [ ] `docs/specs/` — README (template + regras) + SPEC-001 exemplo real
- [ ] `docs/plan/PLAN.md` — checklist vivo (migra conteúdo do `TODO.md`)
- [ ] `docs/agents/` — README (loop) + definições Brain/AG1/AG2/AG3/AG4
- [ ] Raiz limpa: `RELATORIO*.md` → `docs/reports/`; `TODO.md` removido (supersedido por PLAN)
- [ ] `AGENTS.md` + `CLAUDE.md` com seção hub apontando a nova estrutura

## 🗺️ Roteiro

1. Criar plano pré (este arquivo).
2. Criar `docs/prd`, `docs/adr` (README + 5 ADRs), `docs/specs` (README + SPEC-001), `docs/plan/PLAN.md`, `docs/agents` (README + 5 definições).
3. `git mv RELATORIO*.md docs/reports/`; migrar TODO → PLAN; `git rm TODO.md`.
4. Editar `AGENTS.md` e `CLAUDE.md` (seções hub + loop).
5. Atualizar `.task_state.md`, commit, relatório pós com BRAIN_SYNC.

**Arquivos afetados:** apenas `docs/`, `AGENTS.md`, `CLAUDE.md`, `.task_state.md`, `relatorios_agente/` e movimentação na raiz. **Zero toque em `apps/`/`packages/`.**

**Risco:** SAFE (docs apenas). Sem bump de versão (não é funcionalidade) — entra no patch consolidado 2.17.0.

---

## 🏁 Relatório Pós-Alteração (Status Final)

- **Data/Hora de Conclusão:** 2026-09-23
- **Status Final:** 🟢 CONCLUÍDO COM SUCESSO

### 📝 Resumo das Alterações Efetivadas:

- [x] `docs/prd/PRD.md` — visão de negócio (personas, escopo, MVP1/MVP2, métricas).
- [x] `docs/adr/` — README (template+quando criar) + ADR-001..005 semeados (monorepo, unify-auth, 9router, REST+SSE, Orca isolado).
- [x] `docs/specs/` — README (template+regras) + SPEC-001 (terminal exec, retroativo).
- [x] `docs/plan/PLAN.md` — checklist vivo; migrou conteúdo do TODO.md.
- [x] `docs/agents/` — README (loop dev→tester→reviewer + multi-ferramenta) + brain/agente-1..4.
- [x] `docs/README.md` — mapa completo da pasta docs.
- [x] `git mv RELATORIO*.md` → `docs/reports/`; `TODO.md` removido.
- [x] `AGENTS.md` — seção "ESTRUTURA DE DOCUMENTAÇÃO" + loop.
- [x] `CLAUDE.md` — "Documentation Map (read first)".
- [x] `.task_state.md` — rastro TASK-BRAIN-002.

### ⚠️ Ocorrências e Problemas Resolvidos:

- Nenhum erro. Verificação prévia de referências a `RELATORIO*.md`/`TODO.md` antes do movimento (só em .md históricos).

<!-- BRAIN_SYNC_START -->

- TASK_ID: TASK-BRAIN-002
- BRANCH: vitorvinhal/piranha
- STATUS: SUCCESS
- AFFECTED_FILES: [docs/README.md, docs/prd/PRD.md, docs/adr/_, docs/specs/_, docs/plan/PLAN.md, docs/agents/_, docs/reports/RELATORIO_.md, AGENTS.md, CLAUDE.md, .task_state.md, relatorios_agente/TASK-BRAIN-002_20260923_plano.md, TODO.md (removido)]
- TEST_SUMMARY: Lint: PASS (prettier/husky no commit) | Build: N/A (docs) | Tests: N/A (docs)
- REQUIRES_SMOKE_TEST: NO

<!-- BRAIN_SYNC_END -->
