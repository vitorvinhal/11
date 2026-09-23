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
