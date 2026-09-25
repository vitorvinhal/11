# 🗺️ SYSTEM MAP — 11 (FASE 0 / PHASE 1 — DISCOVERY)

> **Status do documento:** IMPLEMENTED (gerado com evidência em 2026-09-25, HEAD `7753391`, v `2.18.2-alpha`).
> **Método:** varredura real do repositório (2 inventários independentes: arquitetura + governança).
> **Regra:** classificação honesta — IMPLEMENTED / PARTIAL / MISSING / DUPLICATED / BROKEN / UNKNOWN.
> Nenhuma alteração estrutural foi feita antes deste diagnóstico (exigência da FASE 0).

---

## 1. Architecture Inventory (Inventário de Arquitetura)

### 1.1 Stack / Runtime

| Componente                                                     | Status      | Evidência                           | Observação                                                  |
| -------------------------------------------------------------- | ----------- | ----------------------------------- | ----------------------------------------------------------- |
| Monorepo pnpm + Turborepo                                      | IMPLEMENTED | `pnpm-workspace.yaml`, `turbo.json` | pnpm 8.15.9 pinado; `lint → test → build`                   |
| `apps/web` (Next 13 + React 18 + Tailwind 3 + R3F/three)       | IMPLEMENTED | `apps/web/package.json`             | 64 rotas `route.ts`                                         |
| `apps/desktop` (Tauri 2 + Vite; servidor Node `src/server.ts`) | IMPLEMENTED | `apps/desktop/src/server.ts:14-43`  | Sobe Router9 (3002) + PC Agent (3001)                       |
| `apps/mobile` (Expo + Capacitor híbrido)                       | IMPLEMENTED | `apps/mobile/capacitor.config.ts`   | 0 testes                                                    |
| `apps/orca` (Express + node-pty, porta 4001)                   | IMPLEMENTED | `apps/orca/src/server.ts:42-130`    | Execução com allowlist                                      |
| `packages/ia` (core de IA)                                     | IMPLEMENTED | `packages/ia/src/`                  | router/safety/agent/plugins                                 |
| `packages/shared`                                              | PARTIAL     | `packages/shared/src/`              | Muito fino (store/types/utils)                              |
| `packages/api` (NestJS)                                        | PARTIAL     | `packages/api/src/modules/`         | **Legacy**, fora do build raiz, sem testes                  |
| `packages/cli`                                                 | PARTIAL     | `packages/cli/src/`                 | Sem testes                                                  |
| `pnpm -r typecheck`                                            | **BROKEN**  | root `package.json` vs 8 workspaces | Nenhum workspace define o script; CI engole com `\|\| echo` |
| Redis / S3-CDN (prometido em doc)                              | MISSING     | `docs/architecture.md` Data Layer   | Zero ocorrências de `ioredis`/`@aws-sdk/client-s3`          |

### 1.2 ModelGateway / Roteamento de LLM

| Componente                          | Status             | Evidência                                                         | Observação                                                            |
| ----------------------------------- | ------------------ | ----------------------------------------------------------------- | --------------------------------------------------------------------- |
| Classe `ModelGateway`               | IMPLEMENTED        | `packages/ia/src/router/index.ts:43` (classe), `:213` (singleton) | modos auto/pinned, perfis cost/latency/quality                        |
| Registry de adapters (5 provedores) | IMPLEMENTED        | `packages/ia/src/router/adapters/index.ts:16-22`                  | 9router, gemini, openrouter, anthropic, minimax                       |
| Circuit breaker de custo            | IMPLEMENTED        | `packages/ia/src/router/cost-breaker.ts`                          | usado pelo gateway                                                    |
| **`/api/chat` usa o gateway?**      | **DUPLICATED**     | `apps/web/src/app/api/chat/route.ts:401-653`                      | **NÃO** — roteador próprio inline + 4 fallbacks próprios              |
| Consumidores do gateway             | PARTIAL            | `api/compare`, `api/health/router`, `agent-core.ts:709`           | só 3 rotas                                                            |
| `AgentRouter.handleMessage`         | BROKEN (dead code) | `packages/ia/src/router/AgentRouter.ts:28`                        | exportado, 0 imports                                                  |
| Health do gateway                   | **BROKEN (stub)**  | `api/health/router/route.ts:23`                                   | `gateway !== null` → sempre true; smoke-test espera shape inexistente |

### 1.3 Agents

| Componente                                                 | Status         | Evidência                                                                    | Observação                                                                  |
| ---------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Agent loop                                                 | IMPLEMENTED    | `packages/ia/src/agent/agent-core.ts:693-804`                                | LLM → tool_calls → safety → execute (max 10 iterações)                      |
| Exposição HTTP + SSE                                       | PARTIAL        | `api/agent/route.ts:90,135`                                                  | SSE "pós-fato" (resposta fatiada depois)                                    |
| Tools base (7) + device (21)                               | IMPLEMENTED    | `agent-core.ts:104-434`; `apps/desktop/src/pc-agent/device-tools.ts:406-426` | 21 device tools confirmadas                                                 |
| Safety no loop (risk + dryRun)                             | PARTIAL        | `agent-core.ts:497-526`                                                      | **não** usa checkpoint                                                      |
| `tool-executor.ts` (executor paralelo c/ checkpoint+audit) | **DUPLICATED** | `packages/ia/src/agent/tool-executor.ts:1-321`                               | exportado, testado, **nunca usado pelo loop**                               |
| Sandbox path nas tools do agente                           | **BROKEN**     | `agent-core.ts:635-650`                                                      | `resolve(cwd,…)` sem `ALLOWED_ROOTS` (ao contrário de `/api/terminal/exec`) |
| Approval de ações device                                   | IMPLEMENTED    | `agent-core.ts:578-584` + `api/agent/approve`                                | job → approve → poll → result                                               |

### 1.4 Skills (produto) — 4 fontes desconectadas

| Componente                                  | Status            | Evidência                                        | Observação                                          |
| ------------------------------------------- | ----------------- | ------------------------------------------------ | --------------------------------------------------- |
| `skills/` na raiz (60 dirs, 3.294 arquivos) | MISSING (runtime) | 0 referências em `apps/`+`packages/`+`scripts/`  | biblioteca p/ agentes de dev, não lida pelo produto |
| `BUILTIN_SKILLS` (4) + `SkillManager`       | IMPLEMENTED       | `packages/ia/src/plugins/skill-system.ts:61-140` | code-writer, researcher, devops, doc-writer         |
| `SKILL_CATALOG` (160 hardcoded)             | DUPLICATED        | `apps/web/src/lib/skill-catalog.ts`              | 3ª fonte, usada pela UI                             |
| `GET /api/skills`                           | PARTIAL           | `api/skills/route.ts:56-65`                      | retorna só os 4 builtin                             |
| Discover GitHub                             | PARTIAL           | `api/skills/discover/route.ts:112-136`           | lista com `installed:false` hardcoded               |
| **Install pipeline**                        | MISSING           | grep `handleInstall` = 0                         | discover → ponta morta                              |
| **Trust/integridade**                       | MISSING           | grep `trust\|signature\|verify` em plugins = 0   | zero verificação de origem                          |
| `PluginRegistry` (espelho de skills)        | IMPLEMENTED       | `plugins/plugin-registry.ts` + `/api/plugins*`   | sistema paralelo 1:1                                |

### 1.5 MCP

| Componente                                     | Status      | Evidência                                                           | Observação                                                                                                                 |
| ---------------------------------------------- | ----------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Cliente/servidor MCP no runtime do produto** | **MISSING** | grep `modelcontextprotocol\|mcpServers\|McpClient` em `*.ts(x)` = 0 | não existe integração MCP no app                                                                                           |
| `.mcp.json` (dev tooling)                      | IMPLEMENTED | `.mcp.json:1-39`                                                    | 6 servers: filesystem, github, sequential-thinking, chrome-devtools, context7, supabase — via npx + `${ENV}` (sem secrets) |
| Curadoria/docs MCP                             | IMPLEMENTED | `docs/mcp/README.md`, `mcp.full.example.json`                       | tiers, segurança                                                                                                           |

### 1.6 Auth / Tenant / Permissions

| Componente                                        | Status         | Evidência                                                                     | Observação                                            |
| ------------------------------------------------- | -------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------- |
| `requireUser` #1 (auth-helpers, rigorosa)         | IMPLEMENTED    | `lib/auth-helpers.ts:17-30`                                                   | ~40 rotas                                             |
| `requireUser` #2 (auth-unify, c/ bypass dev-user) | **DUPLICATED** | `lib/auth-unify.ts:5-17`                                                      | ~13 rotas; sem Supabase em dev → `dev-user`           |
| `requireUser` #3 (code/security)                  | **DUPLICATED** | `api/code/services/security.ts`                                               | 2 rotas; JWT legado + rate-limit                      |
| Rotas sem auth                                    | PARTIAL        | 9 de 64                                                                       | callbacks OAuth + docs/health/version (ok por design) |
| RLS por usuário                                   | IMPLEMENTED    | `infra/supabase/migrations/20240917_multitenant_rls.sql:10-72` + 4 migrations | padrão `*_isolate` consistente                        |
| **Multi-tenancy de organização**                  | MISSING        | grep `org_id\|memberships\|is_admin` = 0                                      | single-user por conta, não SaaS multi-tenant          |
| `tenant_id`                                       | PARTIAL        | `checkpoints`/`audit` migrations; `AgentContext.tenantId`                     | coluna existe, **nunca setada**                       |
| Roles/admin no app                                | MISSING        | `admin/page.tsx` sem checagem de papel                                        | gate só nas APIs                                      |

### 1.7 Execução (terminal / fs / git / browser)

| Componente                              | Status      | Evidência                           | Observação                                 |
| --------------------------------------- | ----------- | ----------------------------------- | ------------------------------------------ |
| Terminal web (spawn, rate-limit, audit) | IMPLEMENTED | `api/terminal/exec/route.ts`        | indexado por `userId:sessionId`            |
| Validador de comando + path             | IMPLEMENTED | `lib/terminal-validate.ts` + testes | `ALLOWED_ROOTS`, `isUnderRoot`             |
| Terminal Orca (node-pty)                | IMPLEMENTED | `apps/orca/src/server.ts`           | allowlist de metacaracteres                |
| Filesystem do agente                    | PARTIAL     | `agent-core.ts:638-655`             | **sem sandbox**                            |
| Git do agente                           | PARTIAL     | `agent-core.ts:663-680`             | `execSync`, sem validação de path          |
| **Browser/computer-use como tool**      | MISSING     | Playwright só em `apps/web/e2e`     | é suíte de teste, não ferramenta do agente |

### 1.8 Memória / Auditoria / Dry-run / Checkpoints

| Componente                                 | Status             | Evidência                                                                                                  | Observação                                                                                     |
| ------------------------------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| CRUD memórias + audit `memory_events`      | IMPLEMENTED        | `agent/memory.ts:79-109,364-391`                                                                           | evento tipado append-only                                                                      |
| Busca vetorial                             | **MISSING/BROKEN** | `memory.ts:111-180` keyword `ILIKE`; embeddings rejeitados (`router/index.ts:200-206` manda `[0]` → 1 dim) | nunca grava vetor                                                                              |
| Memória no agent loop                      | MISSING            | `agent-core.ts` sem import de memory                                                                       | não consulta nem grava                                                                         |
| Audit terminal (comando+exit_code+blocked) | IMPLEMENTED        | `20260922_terminal_audit_log.sql` + `exec/route.ts:50-73`                                                  | log de comando, não evento de domínio tipado                                                   |
| Events SSE                                 | PARTIAL            | `api/events/route.ts`                                                                                      | em memória, não persiste                                                                       |
| **Dry-run engine**                         | IMPLEMENTED        | `packages/ia/src/safety/dry-run.ts` (312 linhas)                                                           | honesto (`unavailable` quando não simula)                                                      |
| Checkpoint engine                          | PARTIAL            | `safety/checkpoint.ts:82-125` + migration                                                                  | `createCheckpoint` só chamado por `tool-executor` (dead) → **nenhum checkpoint real é criado** |
| **Rollback**                               | **BROKEN**         | `checkpoint.ts:131-172`; `api/reverter/route.ts:74-88`                                                     | só muda status no banco; **não reaplica estado**                                               |

### 1.9 Frontend

| Componente                              | Status      | Evidência                                                 | Observação                                 |
| --------------------------------------- | ----------- | --------------------------------------------------------- | ------------------------------------------ |
| Shell + Sidebar (14 abas, NavTab union) | IMPLEMENTED | `AppShell.tsx:219-282`, `Sidebar.tsx:43-57,129-216`       | filtro por plataforma; lazy-load           |
| Páginas standalone                      | IMPLEMENTED | `app/{about,admin,canvas,health,memoria,neural}/page.tsx` | `/admin` legado (CSS inline, sem AuthGate) |
| Design system                           | PARTIAL     | só `ui/button.tsx`, `ui/input.tsx`                        | tabs/cards feitos à mão nos painéis        |

### 1.10 Testes / CI

| Componente                        | Status      | Evidência                                                                        | Observação                             |
| --------------------------------- | ----------- | -------------------------------------------------------------------------------- | -------------------------------------- |
| Jest multi-projeto                | PARTIAL     | `jest.config.js`                                                                 | web(24), ia(14), orca(2), shared(1)    |
| api/cli/desktop/mobile sem testes | MISSING     | `scripts.test` vazio                                                             | 4 de 8 workspaces                      |
| Teste órfão desktop               | BROKEN      | `apps/desktop/src/router9/safePath.test.ts`                                      | fora do jest config → nunca roda       |
| E2E Playwright                    | IMPLEMENTED | `apps/web/e2e/*.spec.ts`                                                         | job `e2e` do ci.yml                    |
| Testes de segurança               | IMPLEMENTED | 7 arquivos (`auth-gaps`, `ssrf`, `traversal`, `injection`, `terminal-validate`…) | + workflow `security-regression.yml`   |
| **Smoke test**                    | **BROKEN**  | `scripts/smoke-test.mjs:57-69` vs `api/health/router`                            | espera shape inexistente + cai em 401  |
| CI `ci.yml`                       | PARTIAL     | gate `\|\| echo` em typecheck/lint; `deploy-prod`/`migrate` `exit 0` sem secret  | **3 pontos em que falha vira sucesso** |
| `build.yml`                       | DUPLICATED  | duplica 100% o gate do ci.yml                                                    | trabalho duplicado                     |

---

## 2. Existing Agent Inventory (Inventário de Agentes)

| Item                                          | Status      | Evidência                          | Observação                                                                                                    |
| --------------------------------------------- | ----------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `agent/system_prompt.md` + `agent/rules.md`   | IMPLEMENTED | raiz `agent/`                      | ciclo pré/durante/pós-relatório, pt-BR                                                                        |
| `agent/agente.py`                             | MISSING     | —                                  | só como exemplo embutido em `docs/AGENTE.md`                                                                  |
| `docs/agents/` (README, brain, agente-1..4)   | PARTIAL     | 6 fichas curtas                    | loop D→T→R documentado no README, **mas não existem `tester.md` nem `reviewer.md`** (Brain concentra os dois) |
| `docs/AGENTE.md` (281 linhas)                 | IMPLEMENTED | seções 1-8                         | protocolo completo, BRAIN_SYNC, Zero Degradation                                                              |
| `AGENTS.md` (29 KB)                           | PARTIAL     | ~18 blocos concatenados            | inclui **cópia integral do CLAUDE.md** embutida                                                               |
| `CLAUDE.md` (6,3 KB)                          | IMPLEMENTED | 15 seções                          | Master Engineering Directive                                                                                  |
| `.github/copilot-instructions.md`             | MISSING     | `.github/` só tem workflows        | Copilot citado como "futuro" em `docs/agents/README.md`                                                       |
| `agents/` na raiz (developer/tester/reviewer) | **MISSING** | —                                  | exigido pelos prompts 2/4/6                                                                                   |
| Loop Developer→Tester→Reviewer formal         | MISSING     | grep "Agent Loop" em AGENTS.md = 0 | sem `iteration_id`, sem MAX_ITERATIONS=5                                                                      |

## 3. Existing Skill Inventory (Inventário de Skills)

| Item                                                            | Status      | Evidência                                  |
| --------------------------------------------------------------- | ----------- | ------------------------------------------ |
| `skills/` — 60 dirs (24 com `SKILL.md` no topo; 304 recursivos) | PARTIAL     | conteúdo rico, **0 ligação com runtime**   |
| `skills/responder-em-portugues`, `preflight_and_reporting.md`   | IMPLEMENTED | usados pela governança (cite em AGENTS.md) |
| `skills/SKILLS-SUMMARY.md`                                      | BROKEN      | diz "75+"; lista 5 skills inexistentes     |
| Runtime: `BUILTIN_SKILLS` (4) + `SkillManager` + Supabase       | IMPLEMENTED | `skill-system.ts`                          |
| UI: `SKILL_CATALOG` 160 entradas                                | DUPLICATED  | `lib/skill-catalog.ts`                     |
| Discover (`/api/skills/discover`)                               | PARTIAL     | `installed:false` sem install endpoint     |
| Pipeline Discovery→Trust→Installation                           | **MISSING** | alvo do prompt 5 (v2)                      |

## 4. Existing MCP Inventory

| Item                                                                                                      | Status      | Evidência                       |
| --------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------- |
| Cliente MCP no produto                                                                                    | MISSING     | grep = 0 em `apps/`+`packages/` |
| `.mcp.json` (6 servers dev: filesystem, github, sequential-thinking, chrome-devtools, context7, supabase) | IMPLEMENTED | raiz, sem secrets (`${ENV}`)    |
| `docs/mcp/` curadoria                                                                                     | IMPLEMENTED | README + example + figma prompt |
| MCP Registry/Trust/Install runtime                                                                        | MISSING     | alvo do prompt 6 (v2)           |

## 5. Configuration Inventory (Inventário de Configuração)

| Item                                                              | Status      | Evidência                                                |
| ----------------------------------------------------------------- | ----------- | -------------------------------------------------------- |
| `AGENTS.md` (29 KB)                                               | IMPLEMENTED | inclui bloco duplicado do CLAUDE.md                      |
| `CLAUDE.md` (6,3 KB)                                              | IMPLEMENTED | 15 seções                                                |
| `.github/` (Copilot)                                              | MISSING     | só `workflows/`                                          |
| `.claude/`, `.opencode/`, `opencode.json`, `.cursor/`, `.vscode/` | MISSING     | NOT_FOUND                                                |
| `.mimocode/`                                                      | PARTIAL     | só `.cron-lock` + `.gitignore`                           |
| `.mcp.json`                                                       | IMPLEMENTED | 6 servers, sem secrets                                   |
| `docs/` estrutura (adr/agents/audit/mcp/plan/prd/reports/specs)   | IMPLEMENTED | `docs/README.md` mapa                                    |
| `docs/architecture/`, `docs/plans/`, `docs/evidence/`             | MISSING     | NOT_FOUND (só `docs/architecture.md` avulso)             |
| `_template.md` em docs                                            | MISSING     | 0 resultados (templates inline nos READMEs de adr/specs) |
| `docs/prd/PRD.md` (2,1 KB)                                        | PARTIAL     | sem RF/RNF/métricas                                      |
| `docs/adr/ADR-001..005`                                           | IMPLEMENTED | todos `aceito`                                           |
| `docs/specs/SPEC-001-terminal-exec.md`                            | PARTIAL     | 1 spec                                                   |
| `relatorios_agente/` (34 arqs)                                    | PARTIAL     | 44% com `BRAIN_SYNC` (só pós 23/09)                      |
| `CHANGELOG.md`                                                    | PARTIAL     | cabeçalho ainda documenta padrão `v0.x`                  |
| `scripts/version.js` + `version.json`                             | IMPLEMENTED | sincroniza package.json/Cargo/tauri                      |

## 6. Conflict Report (Conflitos / Duplicações — TOP 10)

1. **`requireUser` ×3 implementações divergentes** (auth-helpers / auth-unify c/ bypass `dev-user` / code-security) — ADR-002 promete auth unificada.
2. **Dois roteadores de LLM paralelos** — `/api/chat` não usa `ModelGateway`; `AgentRouter` é dead code.
3. **Rollback é casca** — `restoreCheckpoint` não reaplica; `createCheckpoint` nunca roda no caminho vivo.
4. **Embeddings nunca gravados** — `embedding:[0]` rejeitado; busca de memória é `ILIKE`, não vetorial.
5. **4 fontes de skills desconectadas** (fs / builtin 4 / catálogo 160 / discover) + discover sem install e sem trust.
6. **`tool-executor.ts` paralelo morto** — checkpoint+audit+retry exportados, loop não usa.
7. **Health check fake + smoke-test quebrado** — `gateway !== null` sempre true; smoke espera shape errado e 401.
8. **MCP inexistente no runtime** — `.mcp.json` é só dev tooling.
9. **CI com 3 pontos em que falha vira sucesso** (`|| echo` ×2, `exit 0` ×2) + `build.yml` duplica `ci.yml`.
10. **Docs desatualizados** — `architecture.md` promete Redis/S3; `audit/baseline.md` cita arquivos apagados; `AGENTS.md` embute `CLAUDE.md`; `SKILLS-SUMMARY.md` quebrado; `typecheck` documentado mas inexistente.

**Menções honrosas:** SSE simulado (fatia de 3 chars) em `/api/chat` e `/api/agent`; fs/git do agente sem sandbox; `tenantId` nunca setado; "Eleven Code" = bundle externo `stablyai/orca` sem testes.

---

## 7. Implementation Plan (Plano derivado — detalhado no PLAN.md)

> Fonte viva: `docs/plan/PLAN.md`. Resumo executivo da divisão aprovada pelo usuário:

- **`2.19.0-alpha` (v1 — Governança fundação):** este system-map ✅ → PRD/ADR/SPEC/PLAN templates + conteúdo → AGENTS.md Agent OS (hierarquia, stop conditions, evidência, anti-alucinação) → `agents/{developer,tester,reviewer,…}.md` → loop documentado (MAX 5) → **aba ADM/Desenvolvedor** no web (calendário/checklist por versão) → validador documental executado → gate + deploy.
- **`2.20.0-alpha` (v2 — Runtime):** SPEC de Skills/MCP primeiro → pipeline Discovery→Inspection→Trust→Permission→Approval→Integrity→Sandbox→Install→Health→Enable (código+APIs com `requireUser`) → MCP Registry/Trust/Installer/Validator/Audit → `.mcp.json` + validação real Context7/Playwright/GitHub (sem conexão = NOT_VALIDATED) → loop executável D→T→R com ITERATION record → auditoria de sistema, dry-run/checkpoints/default-deny → testes de segurança + E2E fluxo MCP → relatório final + matriz com evidência.

### Decisões registradas nesta FASE (DECISION_REQUIRED → resolvido pelo usuário)

- Divisão em **2 versões** (usuário, 2026-09-25).
- MVP2 movido para `2.21.0-alpha`+ (adiado, `[~]`).

### Riscos abertos

- Rollback/checkpoints reais (item 3 do TOP 10) exigem ADR antes de mexer — candidato a `2.20.0-alpha`.
- Unificação das 3 `requireUser` quebra testes de auth existentes se feita sem cuidado — manter contrato, extender.
- `ci.yml` gates `|| echo`: endurecer sem perder sinal verde é decisão de release (ADR).

---

_Gerado por: Brain (FASE 0/1) · Evidência: 2 varreduras explore + conferência de arquivos · 2026-09-25_
