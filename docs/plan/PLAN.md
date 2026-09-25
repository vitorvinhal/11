# 📅 PLAN — Calendário de Versões + Checklist Vivo (FONTE-MESTRA)

> **Regra:** este é o arquivo de orquestração do projeto. Todo prompt de implementação
> recebido pelo Brain vira item aqui, atribuído a uma versão, antes de qualquer edição de código.
> **Um patch/versão só fecha quando TODOS os itens dela estão `[x]`, gate verde e deploy no ar.**
> Fonte de negócio: `docs/prd/PRD.md` · Decisões: `docs/adr/` · Detalhe técnico: `docs/specs/`.

## 🔖 Legenda de estados (checklist)

| Símbolo | Estado           | Significado                                                |
| ------- | ---------------- | ---------------------------------------------------------- |
| `[ ]`   | **Falta**        | Planejado, ainda não iniciado                              |
| `[-]`   | **Em andamento** | Agente executando / Brain implementando                    |
| `[x]`   | **Adicionado**   | Código feito, gate verde, commit com bump+CHANGELOG        |
| `[!]`   | **Bloqueado**    | Impedido (infra, falta de device, dependência externa)     |
| `[?]`   | **Decisão**      | Aguarda escolha do usuário/PO                              |
| `[~]`   | **Adiado**       | Removido do escopo desta versão, movido para versão futura |

**Regras de fechamento de versão:**

1. Nenhum item fecha sem `[x]`.
2. Itens `[~]` devem aparecer explicitamente na seção da versão futura (nunca somem).
3. `[?]` e `[!]` bloqueiam o fechamento — precisam virar `[x]` ou `[~]`.
4. Gate obrigatório: `pnpm -r lint && pnpm -r build && pnpm -r test` verdes.
5. FASE D (deploy, exclusiva do Brain) concluída → marca a versão como ✅ **NO AR**.

---

## 🗓️ Calendário de versões (ordem cronológica)

| Versão             | Status             | Conteúdo                                                     |
| ------------------ | ------------------ | ------------------------------------------------------------ |
| `2.17.0-alpha`     | ✅ No ar (code 34) | AG1-4 do patch de abertura                                   |
| `2.18.0-alpha`     | ✅ No ar (code 35) | Ciclo 2: DEVICE-E2E, AUTH-GAPS, CI-MIN, UI-PERF              |
| `2.18.1-alpha`     | ✅ No ar (code 36) | Hotfix mobile scripts/cwd.test                               |
| `2.18.2-alpha`     | ✅ No ar (code 37) | CI-TRAV-001 + Java 21 + gradlew — **todos workflows verdes** |
| **`2.19.0-alpha`** | 🟡 **EM MONTAGEM** | Próximo consolidado — itens abaixo                           |
| `2.20.0-alpha`     | 📋 Planejada       | MVP2 (pós-BETA)                                              |
| `future`           | 📋 Backlog         | Itens adiados `[~]` migraram para cá                         |

---

## 📦 Versão atual: `2.19.0-alpha` — EM MONTAGEM

> Aguardando prompts de implementação do usuário (MCP Governance + Agents + Skills +
> PRD/ADR/SPEC/Plan + Discovery→Trust→Installation). Cada prompt recebido = item novo aqui,
> orquestrado ao Agente 1-4 conforme a área.

### Governança MCP + Agentes + Skills (MASTER PROMPT — fases)

- [ ] PHASE 1 — DISCOVERY: inventário real (arquitetura, agents, skills, MCP, config, testes, conflitos) → artefatos `docs/evidence/` + plano
- [ ] PHASE 2 — TRUST: validação de config existente (`AGENTS.md`, `CLAUDE.md`, `.claude/`, `.mcp.json`) — FOUND/NOT_FOUND/PARTIAL
- [ ] PHASE 3 — Context7 MCP (docs/SDK sempre disponíveis)
- [ ] PHASE 4 — Playwright MCP (verificação visual/e2e)
- [ ] PHASE 5 — GitHub MCP (PRs/issues/reviews)
- [ ] PHASE 6 — Agentes `developer` / `tester` / `reviewer` formais + loop Developer→Tester→Reviewer (MAX_ITERATIONS=5)
- [ ] PHASE 7 — Anti-hallucination: exigência de evidência (caminho de arquivo + linha) em toda resposta técnica
- [ ] PHASE 8 — Evidence model: resultados de build/test como prova obrigatória
- [ ] PHASE 9 — Skills de governança (padrões de prompt, templates de relatório)
- [ ] PHASE 10 — Instalação: `.mcp.json` + skills em `skills/` + docs espelhados (AGENTS/CLAUDE/.github)
- [ ] PHASE 11 — Estrutura PRD/ADR/SPEC/Plan/evidence completa (`docs/*` com `_template.md`)
- [ ] PHASE 12 — Validação final: gate verde + smoke + relatório BRAIN_SYNC + bump + CHANGELOG
- [ ] Gate: `pnpm -r lint && pnpm -r build && pnpm -r test`
- [ ] FASE D: deploy `2.19.0-alpha` (Brain, exclusivo)

### Tarefas já orquestradas para esta versão (adiadas do ciclo anterior)

- [ ] AG1 — TASK-ORCA-PAIR-003 (pareamento/URL real Orca) — prompt pronto, aguardando dispatch
- [ ] AG2 — TASK-DEVICE-E2E-003 (device E2E) — prompt pronto, aguardando dispatch
- [ ] AG3 — TASK-CI-002 (CI mínima) — **[~] adiada pelo usuário** → mover para `2.20.0-alpha` ao confirmar
- [ ] AG4 — TASK-AUTH-UI-003 (auth UI gaps) — prompt pronto, aguardando dispatch

---

## 📋 `2.20.0-alpha` — MVP2 (pós-BETA) — planejada

- [ ] Streaming SSE no chat (efeito "digitando")
- [ ] Persistir Plugins no Supabase (hoje localStorage)
- [ ] Artifacts no servidor (tabela `artifacts`)
- [ ] Rate limit persistente (Redis/Supabase)
- [ ] Túnel estável 9Router (Cloudflare nomeado)
- [ ] Terminal PTY contínuo via Orca (node-pty)
- [ ] Command Palette (Cmd+K) + split view
- [ ] i18n (pt-BR/en/es) + temas customizados
- [ ] RLS endurecida para projetos/mídia/artifacts
- [ ] AG3 — TASK-CI-002 (adiada de 2.19.0-alpha)

---

## 📁 Backlog / histórico (itens `[~]` e concluídos de versões antigas)

- [x] **2.17.0-alpha**: AG1 Orca+proxy `/api/code` sandbox · AG2 offline-first · AG3 Ollama `llama3.2:3b` · AG4 unify-auth `requireUser()` · Reorganização documental (TASK-BRAIN-002)
- [x] **2.18.0-alpha**: ORCA-PAIR-002 `5f099ee` · DEVICE-E2E-002 `cad29ad` · CI-MIN-001 `1aef257` · AUTH-GAPS-002 `5dc853e` · UI-PERF `4a99b3a`
- [x] **2.18.1-alpha**: mobile scripts/cwd.test platform-safe `ac3915a` · Android Node 24 `f66f8b1`
- [x] **2.18.2-alpha**: CI-TRAV-001 `path.resolve` `170a19d` · gradlew 100755 `3c6b027` · setup-java Temurin 21 `914abfb` · task_state `7e64233`
- [x] 9Router em produção (combos, fallback, JSON+SSE, `/api/health/router`)
- [x] Terminal real (xterm.js + SSE) com sandbox e auditoria
- [x] Agente PC/Mobile: 21 tools, pareamento, jobs, approval
- [x] Sistema de upgrade + builds desktop/APK
- [x] CI GitHub Actions: build, Android (APK verde), iOS (IPA)
- [x] Safety engine 50+ regras, agent loop, plugins/skills

---

## ❓ Decisões pendentes (precisam do usuário)

- [?] Hospedar binários fora de `/downloads` (`NEXT_PUBLIC_DOWNLOAD_*_URL`)?
- [?] Ordem de prioridade do MVP2?
- [?] Realizar agora os 3 agentes adiados (ORCA-PAIR-003, DEVICE-E2E-003, AUTH-UI-003)?

---

_Atualizado: 2026-09-25 · Próximo passo: receber prompts de implementação e preencher `2.19.0-alpha`._
