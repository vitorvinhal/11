# 📋 PLANO DE EXECUÇÃO - TAREFA TASK-LOCALLLM-CONSOL-20260923

🟡→🟢 PLANO EXECUTADO (ver `_pos.md`)

**Status final:** 🟢 CONCLUÍDO COM SUCESSO — evidência em `relatorios_agente/TASK-LOCALLLM-CONSOL-20260923_pos.md` (gate lint/build/test = 0; E2E Ollama OK; v2.16.4-alpha).

**Agente:** Executor monorepo "11" · **Branch de trabalho:** `vitorvinhal/whiting` (ou nova `integration/agents-20260923` se necessário)  
**Data:** 2026-09-23  
**Restrições Executor:** sem `git push origin main`; sem deploy Vercel/Railway; sem tags; **sem alterar `CHANGELOG.md` / `version.json`** (Brain faz versionamento); sem `pnpm typecheck`; gate = `pnpm -r lint` + `pnpm -r build` + `pnpm -r test`; sem secrets hardcoded; `requireUser()` em rota nova.

## Objetivo Geral

Consolidar o fluxo de IA local (Ollama) como sistema oficial, corrigir pendência do smoke-test (400→401), alinhar paridade client/server de modelo e fallback, documentar modo local vs nuvem no AGENTS.md, e propor (não implementar sem aprovação) suíte mínima de CI para `api`/`cli`/`desktop`/`mobile`.

## Metas Esperadas

- [ ] Fix `scripts/smoke-test.mjs`: `POST /api/chat` sem auth → esperar **401** (pós unify-auth), não 400.
- [ ] Confirmar consistência client-side (`localhost:11434` / `local-llm.ts`) vs server-side (`routeOllama()`).
- [ ] Paridade de modelo: eliminar divergência de default/lista/fallback entre client e server.
- [ ] Documentar no `AGENTS.md`: como ligar/desligar modo local vs nuvem; comportamento se Ollama fora do ar (erro claro, sem crash).
- [ ] Validação E2E com ≥2 modelos instalados (`llama3.2:3b`, `gemma3:4b`, …).
- [ ] Proposta de escopo CI mínima para `api`/`cli`/`desktop`/`mobile` (**apenas proposta — implementar só com ok do Brain**).
- [ ] Relatório pós com bloco `<!-- BRAIN_SYNC_START -->`.

## Achados da investigação (pré-código)

### A. Skill de protocolo

- `skills/preflight_and_reporting.md` **não existe** no repo. Fallback: protocolo do `AGENTS.md` (plano pré em `relatorios_agente/`, pós com BRAIN_SYNC).

### B. Mapa dos 4 papéis vs repo real

| Papel                     | Existe?                                                                    | Achado                                                                                       |
| ------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Agente 1 `apps/orca`      | **NÃO** — só `desktop`/`mobile`/`web`                                      | Proxy relevante: `apps/web/src/app/api/code/*` (usa `verifyToken` legado, não `requireUser`) |
| Agente 2 desktop server   | `apps/desktop` existe; smoke 3001/3002 fora do escopo imediato de IA local | —                                                                                            |
| Agente 3 Ollama/local LLM | **Este é o foco**                                                          | `local-llm.ts` + `routeOllama` + `ChatPanel`/`OllamaPanel`                                   |
| Agente 4 unify-auth       | Parcial                                                                    | `/api/code` ainda chama `verifyToken` (5 handlers)                                           |

### C. Pendência smoke-test

- `scripts/smoke-test.mjs:95` espera `400` em `POST /api/chat` → rota retorna **400** só após auth; sem sessão retorna **401** (`requireUser` linha 50–53 de `route.ts`).
- `POST /api/terminal/exec` já espera 401 (ok).
- GETs `/api/health/router` e `/api/terminal/exec` também passam por `requireUser` → sem token = 401; checks atuais usam `r.ok` e falhariam. **Escopo mínimo pedido:** corrigir 400→401 no chat; opcional: alinhar GETs para aceitar 401 como "auth requerida" documentado (fora do pedido literal — perguntar).

### D. Divergências client vs server (paridade)

| Item          | Client (`local-llm.ts`)                          | Server (`routeOllama`)               | Status                         |
| ------------- | ------------------------------------------------ | ------------------------------------ | ------------------------------ |
| Default model | `llama3.2:3b`                                    | `OLLAMA_MODEL` env ?? **`qwen3:4b`** | **DIVERGE**                    |
| Lista popular | `OLLAMA_POPULAR` (8)                             | não usa lista                        | asymétrico (ok se documentado) |
| Fallback 404  | `isModelNotFound` + `discoverFirstModel` + retry | candidates via `/api/tags`           | mesma ideia, código duplicado  |
| Endpoint      | localStorage `ollama_config.endpoint`            | `OLLAMA_ENDPOINT` env                | esperado (device vs server)    |

Fluxo web real: `ChatPanel` early-return → `sendLocalCompat` (**client**). `routeOllama` só via POST direto à API.

### E. Ollama local

- Binário presente; 4 modelos: `llama3.2:3b`, `gemma3:4b`, `qwen3:4b`, `dolphin3:8b`.
- Na 1ª varredura a API 11434 deu timeout (servidor subindo); revalidar no E2E.

### F. Cobertura de testes / CI hoje

- Testes unitários: `apps/web` (vários), `packages/ia`, `packages/shared`, 1 arquivo em `apps/desktop` (`safePath.test.ts` — sem script `test` no package.json).
- **Sem** testes em: `apps/api` (pasta inexistente), `apps/cli` (inexistente), `apps/mobile` (0), desktop sem runner configurado.
- Workflows: `build.yml`, `ci.yml` (gate+e2e+deploy), `build-android`, `build-ios`, `supabase-keepalive`.
- `pnpm -r test` só falha se algum workspace com script `test` falhar — workspaces sem `test` são pulados pelo pnpm.

### G. Proposta CI mínima (NÃO implementar sem ok)

1. **Não criar** `apps/api`/`apps/cli` fantasma só para CI.
2. **Desktop:** adicionar script `test` que rode `safePath.test.ts` (jest/ts-jest ou `node --test` se trivial) + incluir no `pnpm -r test`.
3. **Mobile:** adicionar smoke de tipo/lint já existe (`lint`/`build`); testes unitários mínimos só se houver lógica pura extraível — senão documentar "sem testes unitários" no AGENTS.md.
4. **Não** adicionar job de deploy novo; não mexer em `deploy-prod`.
5. Opcional: job `matrix` em `ci.yml` já cobre `pnpm -r test` — basta os workspaces ganharem script `test`.

## Roteiro Passo a Passo

1. Criar branch própria se commits forem necessários (não em `main`).
2. Editar `scripts/smoke-test.mjs` — chat auth → `401`.
3. Paridade: exportar default/const compartilhada ou alinhar `routeOllama` default para `llama3.2:3b` (ou env `OLLAMA_MODEL` documentado com mesmo default).
4. Garantir mensagem de erro clara no client quando Ollama offline (já existe catch em `sendLocalCompat` — validar texto; não quebrar UI).
5. Documentar seção **Modo local vs nuvem** no `AGENTS.md`.
6. E2E manual: tags + chat client com ≥2 modelos; fallback com modelo inexistente.
7. Gate: `pnpm -r lint`, `pnpm -r build`, `pnpm -r test`.
8. Relatório pós + `<!-- BRAIN_SYNC_START -->`.
9. CI: **só proposta** neste relatório; implementar após aprovação.

## Arquivos Afetados (previstos)

- `scripts/smoke-test.mjs`
- `apps/web/src/lib/local-llm.ts` (se precisar exportar default compartilhado)
- `apps/web/src/app/api/chat/route.ts` (paridade default `routeOllama`)
- `apps/web/src/components/ChatPanel.tsx` / `OllamaPanel.tsx` (só se mensagem de erro/clarity exigir)
- `AGENTS.md` (docs modo local)
- `relatorios_agente/TASK-LOCALLLM-CONSOL-20260923_plano.md` (este arquivo)

## Fora de escopo (sem pedido explícito do Brain)

- Alterar `CHANGELOG.md` / `version.json` / bump de versão.
- `git push` / deploy / tags.
- Remover healthcheck do `/api/health/router` (comportamento 401/9Router offline = esperado, documentar).
- Remover `verifyToken` de `/api/code` (Agente 4 — só se escopo for expandido).
- Criar `apps/orca` inexistente.
- Implementar job CI novo sem aprovação.

## Próximo Passo

- Aguardar confirmação do Brain para executar itens 2–8; item CI (F/G) só com go separado.
