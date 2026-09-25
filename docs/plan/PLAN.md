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

| Versão             | Status             | Conteúdo                                                                                                    |
| ------------------ | ------------------ | ----------------------------------------------------------------------------------------------------------- |
| `2.17.0-alpha`     | ✅ No ar (code 34) | AG1-4 do patch de abertura                                                                                  |
| `2.18.0-alpha`     | ✅ No ar (code 35) | Ciclo 2: DEVICE-E2E, AUTH-GAPS, CI-MIN, UI-PERF                                                             |
| `2.18.1-alpha`     | ✅ No ar (code 36) | Hotfix mobile scripts/cwd.test                                                                              |
| `2.18.2-alpha`     | ✅ No ar (code 37) | CI-TRAV-001 + Java 21 + gradlew — **todos workflows verdes**                                                |
| **`2.19.0-alpha`** | 🟡 **EM MONTAGEM** | Governança v1: Discovery/auditoria, PRD/ADR/SPEC/PLAN, AGENTS.md Agent Loop, agents/, aba ADM/Desenvolvedor |
| **`2.20.0-alpha`** | 📋 Planejada       | Governança v2: Skills Pipeline + MCP Governance runtime + loop executável + auditoria + testes              |
| `2.21.0-alpha`+    | 📋 Planejada       | MVP2 (pós-BETA) + CI-002 adiada                                                                             |
| `future`           | 📋 Backlog         | Itens adiados `[~]` migraram para cá                                                                        |

---

## 📦 Versão atual: `2.19.0-alpha` — EM MONTAGEM (MAJOR: Governança v1)

> Origem: MASTER PROMPT + prompts 1–7 do usuário (metodologia 11, Skills Discovery≠Trust≠Installa-
> tion, MCP Governance, loop D→T→R, sistema documental). Divisão em **2 versões** decidida pelo
> usuário em 2026-09-25. Relatório: `relatorios_agente/GOV-001_20260925_plano.md`.
> Cada item só vira `[x]` com evidência real.

### FASE 0/1 — Discovery & Auditoria (obrigatórias antes de código)

- [x] `docs/architecture/system-map.md` — inventário: arquitetura, módulos, dependências, agentes,
      skills, MCP, ModelGateway, auth/tenant/permissões, execução, memória, auditoria, frontend,
      backend, testes — cada componente classificado IMPLEMENTED/PARTIAL/MISSING/DUPLICATED/BROKEN/UNKNOWN
      (FEITO 2026-09-25: 2 varreduras explore; 7 artefatos PHASE 1 dentro do doc; evidência = caminhos citados)
- [ ] Relatório de conflitos/duplicações/mocks/stubs (FOUND/NOT_FOUND/PARTIAL) + Implementation Plan
      (PARCIAL: seção 6/7 do system-map cobrem conflitos+plano; decidir se vira doc separado)

### FASE 2/3/4 — Sistema documental (prompt 3 + 7)

- [ ] `docs/prd/product-requirements.md` (visão, problema, personas, escopo, RF/RNF, multi-tenancy,
      segurança, autonomia, agentes, skills, MCP, memória, auditoria, métricas) + `docs/prd/_template.md`
- [ ] `docs/adr/_template.md` (ID/Title/Status/Context/Problem/Decision/Alternatives/Trade-offs/
      Consequences/Risks/Migration) + ADRs essenciais (arquitetura de agentes, skills D→T→I, sandbox, permissões)
- [ ] `docs/specs/_template.md` + `docs/specs/templates/spec-template.md` (24 seções exigidas)
- [ ] `docs/plans/_template.md` + `docs/plans/templates/implementation-plan.md` (checklist estados `[] [-] [x] [!] [?]`)
- [ ] Validador documental (SPEC/plan existentes, refs válidas, estados válidos, docs ausentes,
      links quebrados, IDs duplicados) — **executado com evidência** (não só criado)

### FASE 2-AGENTS — AGENTS.md Agent OS (prompt 2) + agentes (prompt 4)

- [ ] AGENTS.md: hierarquia de autoridade (segurança>permissões>AGENTS>PRD>ADR>SPEC>PLAN>código>skills>
      conhecimento), stop conditions, estados de incerteza (UNKNOWN/DECISION_REQUIRED/NOT_VALIDATED/BLOCKED/
      FAILED), autonomia progressiva L0–L5, default deny, não-duplicação, não-confundir ausência de erro com sucesso
- [ ] `agents/` — `README.md` + `developer.md`/`tester.md`/`reviewer.md` (+ avaliar architect/researcher/
      planner/security-reviewer) com YAML: name/role/inputs/outputs/permissions/forbidden/skills/mcp/workflow/completion/escalation
- [ ] Loop Developer→Tester→Reviewer documentado com MAX_ITERATIONS=5 → BLOCKED + `iteration_id/timestamp/
  agent/status/reason/evidence`

### Aba ADM — Desenvolvedor (pedido do usuário 2026-09-25)

- [ ] Painel ADM no web com aba/seção **Desenvolvedor**: calendário de versões + checklist por versão
      (estados `[] [-] [x] [!] [?] [~]`), espelhando o PLAN.md (fonte de dados estruturada no app)
- [ ] Nav: item "ADM" na navegação + rota `/adm` com `AuthGate`; padrão visual existente (glass/Text-tailwind)
- [ ] Rota API nova com `requireUser()` na primeira linha (GET incluído)

### Fechamento 2.19.0-alpha

- [ ] Gate: `pnpm -r lint && pnpm -r build && pnpm -r test` verdes + evidência
- [ ] Bump `pnpm version:patch` + `CHANGELOG.md` + `version.json`
- [ ] FASE D: deploy `2.19.0-alpha` (Brain, exclusivo)

---

## 📦 `2.20.0-alpha` — MAJOR: Governança v2 (Runtime & Validação)

> Prompt 5 (Skills D→T→I), prompt 6 (MCP Governance), prompt 4 (loop runtime), fases 5–13.

### Skills & MCP — pipeline real (prompts 5+6)

- [ ] SPEC primeiro: `docs/specs/` para Skills Pipeline e MCP Governance (sem spec não desenvolve)
- [ ] Discovery: fontes configuráveis (GitHub/registries/marketplaces/externas/admin/Naltropi) → só
      CANDIDATOS (nome, descrição, origem, URL, versão, autor, deps, capabilities, permissões, ferramentas, manifest) — **não instala**
- [ ] Inspection: relatório (manifest, deps, scripts, permissões, comandos, rede, filesystem, código, comportamento suspeito)
- [ ] Trust Engine: UNKNOWN/LOW/MEDIUM/HIGH/TRUSTED/BLOCKED (+score 0-29 B / 30-59 U / 60-79 RR / 80-100 T)
      com JUSTIFICATIVA obrigatória (nunca "parece confiável"); regra crítica bloqueia mesmo com score alto
- [ ] Permissions: filesystem.read/write, network.read, terminal.execute, browser.control, git.read/write — menor privilégio, default deny
- [ ] User Approval: registro (usuário, tenant, skill, versão, permissões, timestamp, decisão)
- [ ] Integrity: hash, versão, origem, integridade, diff entre versões
- [ ] Sandbox (fs/rede/processos/recursos/secrets) quando tecnicamente possível
- [ ] Installation só com D+I+T+P+A+Int → Health Check (HEALTHY/DEGRADED/FAILED) → Enable (só HEALTHY)
- [ ] Hot reload: atualização refaz Inspection→Trust→Integrity→Permission→Health (trust nunca permanente)
- [ ] MCPRegistry/Discovery/Trust/Installer/Validator/Runtime/Permissions/Audit (adaptar nomes à arquitetura
      existente; **NÃO duplicar** se equivalente existir — preferir EXTEND)
- [ ] `.mcp.json` sem secrets; Context7, Playwright (`@playwright/mcp`), GitHub MCP — validação real de conexão
      (sem conexão verificada = NOT_VALIDATED, nunca "funcionando")
- [ ] Revocation: disable/uninstall/revoke/block + audit log (DISCOVERY/TRUST/INSTALL/ENABLE/DISABLE/EXECUTE/UPDATE/REVOKE/DELETE)
- [ ] APIs `/api/mcp/*` (descobrir equivalentes existentes primeiro) — TODAS com `requireUser()`; operações
      destrutivas com confirmação explícita; UI "Settings→MCP" ou integração em Skills/Connectors/Plugins
- [ ] Matriz Agent×MCP (Developer/Tester/Reviewer/… × Context7/Playwright/GitHub) com permissões

### Loop runtime + autonomia + auditoria

- [ ] Loop D→T→R executável com ITERATION record (iteration_id/timestamp/agent/status/reason/evidence);
      FAIL/CHANGES_REQUESTED → Developer; só APPROVED gera DONE; MAX 5 → BLOCKED + relatório
- [ ] Autonomia segura: ACTION→RISK→PERMISSION→DRY-RUN→APPROVAL→CHECKPOINT→EXECUTE→VERIFY→AUDIT→ROLLBACK
      (terminal, fs, git, browser, install, deploy, secrets, banco, APIs)
- [ ] Auditoria: eventos reais de sistema (não texto gerado por agente) — agente, usuário, tenant, modelo, ação, risco, resultado, evidência
- [ ] Anti-prompt-injection: saída MCP como UNTRUSTED DATA; classificação DATA/INSTRUCTION/CODE/SECRET/UNTRUSTED_CONTENT
- [ ] Evidence model (`Evidence` type: terminal/test/build/browser/api/git/mcp/screenshot + verified/failed)
- [ ] Skills do projeto (`skills/`): mcp/{discover,assess-trust,install,validate,revoke,troubleshoot},
      context7/documentation-research, playwright/browser-validation, github/repository-review
- [ ] Testes: discovery/trust/install/validation/activation/revocation/permissions/auth/anti-injection +
      segurança (cross-user, escalation, secret leakage, path traversal, SSRF) + E2E fluxo MCP completo
- [ ] CLAUDE.md espelhado (Context7=autoridade doc, Playwright=validação browser, GitHub=evidência repo/PR)

### Fechamento 2.20.0-alpha

- [ ] `docs/reports/mcp-agent-system-final.md` (WHAT WAS FOUND/EXISTED/CHANGED/INSTALLED + matriz status:
      IMPLEMENTED/PARTIAL/MISSING/BLOCKED/NOT_VALIDATED)
- [ ] Gate verdes + smoke `node scripts/smoke-test.mjs` + evidência
- [ ] Bump + CHANGELOG + FASE D: deploy `2.20.0-alpha` (Brain)

---

## 📋 Tarefas carregadas de versões anteriores (aguardando decisão)

- [ ] AG1 — TASK-ORCA-PAIR-003 (pareamento/URL real Orca) — prompt pronto, aguardando dispatch
- [ ] AG2 — TASK-DEVICE-E2E-003 (device E2E) — prompt pronto, aguardando dispatch
- [~] AG3 — TASK-CI-002 (CI mínima) — adiada pelo usuário (candidata a `2.21.0-alpha`)
- [ ] AG4 — TASK-AUTH-UI-003 (auth UI gaps) — prompt pronto, aguardando dispatch

---

## 📋 `2.21.0-alpha`+ — MVP2 (pós-BETA) — planejada

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
