# 📋 PLANO DE EXECUÇÃO - TAREFA TASK-BRAIN-003

**Status:** 🟢 CONCLUÍDO COM SUCESSO (PÓS-ALTERAÇÃO)
**Agente:** BRAIN
**Data:** 2026-09-23
**Patch:** 2.17.0-alpha (consolidado — incluso no patch atual, sem release avulso)

---

## 🎯 Objetivo Geral

Implementar no repositório a curadoria de MCPs (Model Context Protocol) — top 10 do vídeo + Figma MCP como opcional — cobrindo as 3 IDEs alvo (Antigravity, Trae AI, VS Code/Cline) e Claude Code, **sem nunca hardcodar secrets** (regra absoluta de segurança do `AGENTS.md`).

## 📌 Metas Esperadas

- [x] `.mcp.json` na raiz (Claude Code / Antigravity) — core: filesystem, github, sequential-thinking, chrome-devtools, context7, supabase (refs `${ENV}`)
- [x] `docs/mcp/mcp.full.example.json` — 13 MCPs (top 10 + chrome-devtools/context7/figma/firecrawl) com placeholders
- [x] `docs/mcp/README.md` — curadoria, anti-inflação de MCPs, config por IDE (Antigravity/Trae/Cline/Claude/Cursor), obtenção de tokens, segurança
- [x] `docs/mcp/figma-design-system-prompt.md` — prompt bidirecional Figma (2º vídeo)
- [x] `.env.example` — seção `==== MCP ====` (15 vars, todas vazias)
- [x] `docs/README.md` — linha `mcp/` no mapa
- [x] `.task_state.md` — AG2 validado + TASK-BRAIN-003 registrada
- [x] Relatório pós + commit (push só na FASE D)

## 🗺️ Roteiro

| #   | O que fazer                | Como fazer                                                                                                                                                                                                                                                           | Arquivos afetados                       |
| --- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 1   | Config core                | Servers: filesystem, github, sequential-thinking, puppeteer, supabase — env via `${VAR}`                                                                                                                                                                             | `.mcp.json` (novo)                      |
| 2   | Template completo          | Todos os 10 + nota Figma MCP opcional, placeholders `SEU_TOKEN`                                                                                                                                                                                                      | `docs/mcp/mcp.full.example.json` (novo) |
| 3   | Guia por IDE               | Antigravity (…→ MCP Servers→View Config), Trae (Settings→MCPs→manual), VS Code/Cline (extensão Cline→Configure MCP Servers), Claude Code (`.mcp.json`), Cursor; obtção de tokens (GitHub PAT, Sentry, Slack, Firebase, Supabase, Stripe, Sonar); regras de segurança | `docs/mcp/README.md` (novo)             |
| 4   | Curadoria p/ o 11          | Core = filesystem/github/sequential-thinking/puppeteer/supabase (Supabase já é stack do projeto). Opcionais = sentry/slack/firebase/stripe/sonarqube/f=figma (fora do stack atual)                                                                                   | README docs/mcp                         |
| 5   | Env                        | Nova seção `# ==== MCP (docs/mcp/) ====`                                                                                                                                                                                                                             | `.env.example`                          |
| 6   | Mapa                       | Linha `docs/mcp/`                                                                                                                                                                                                                                                    | `docs/README.md`                        |
| 7   | State + relatório + commit | Pré→exec→pós                                                                                                                                                                                                                                                         | `.task_state.md`, este arquivo          |

## ⚠️ Restrições (Brain)

- NÃO editar `apps/` nem `packages/` (arquivos de orquestração/docs apenas).
- NUNCA commitar token real — só `${ENV}` ou `SEU_TOKEN`.
- Sem bump de versão/CHANGELOG: muda só tooling/docs, nada de funcionalidade do produto (se o lint-staged reclamar, seguir padrão do repo).
- FASE D (push/deploy) permanece exclusiva do Brain e só após gate verde.

## 🔄 Diário de Execução em Tempo Real

_(será preenchido durante a execução)_

## 🏁 Relatório Pós-Alteração (Status Final)

**Status Final:** 🟢 CONCLUÍDO COM SUCESSO

### Resumo das alterações

- [x] `.mcp.json` — 6 servers core com expansão `${ENV}` (zero secret commitado)
- [x] `docs/mcp/mcp.full.example.json` — template dos 13 MCPs (top 10 dos dois vídeos + chrome-devtools, context7, figma, firecrawl) com placeholders `SEU_TOKEN`
- [x] `docs/mcp/README.md` — guia completo: regra anti-inflação, curadoria core vs opcional, tabela de IDEs, obtenção de tokens, 5 regras de segurança
- [x] `docs/mcp/figma-design-system-prompt.md` — prompt de Design System bidirecional
- [x] `.env.example` — seção MCP com 15 vars vazias (MCP_FS_ROOT, GITHUB_PERSONAL_ACCESS_TOKEN + opcionais)
- [x] `docs/README.md` — mapa atualizado
- [x] `.task_state.md` — AG2 validado (BRAIN_SYNC), AG3 commit confirmado, TASK-BRAIN-003 registrada

### Ocorrências

- Nenhum erro em tempo real. `node JSON.parse` validou os 2 JSONs = OK.
- Curadoria: `chrome-devtools` no core (substitui `puppeteer` — overlap documentado); `firebase`/`stripe`/`sonarqube`/`sentry`/`slack` só no template opcional (fora do stack do 11).
- Sem bump de versão/CHANGELOG: docs/tooling apenas — não altera funcionalidade do produto.

<!-- BRAIN_SYNC_START -->

- TASK_ID: TASK-BRAIN-003
- BRANCH: vitorvinhal/piranha
- STATUS: GREEN
- AFFECTED_FILES: .mcp.json, docs/mcp/README.md, docs/mcp/mcp.full.example.json, docs/mcp/figma-design-system-prompt.md, .env.example, docs/README.md, .task_state.md, relatorios_agente/TASK-BRAIN-003_20260923_plano.md
- TEST_SUMMARY: n/a (config/docs only); JSON.parse dos 2 arquivos = OK
- REQUIRES_SMOKE_TEST: false

<!-- BRAIN_SYNC_END -->
