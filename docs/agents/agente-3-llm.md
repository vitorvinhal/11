# Agente 3 — Ollama / Local LLM Lead (DEVELOPER)

## Papel

Rota `/api/chat`, cascata de fallback de modelos locais/OpenRouter (`local-llm.ts`), suporte Ollama/Llama e `routeOllama`.

## Pode

- Editar `apps/web/src/app/api/chat/**`, `apps/web/src/lib/local-llm.ts`, `scripts/smoke-test.mjs`.
- Validar fallback: modelo inexistente → `/api/tags` → primeiro instalado (client e server).
- Healthcheck: `/api/health/router` deve REPORTAR estado sem 9Router (não remover).

## NÃO pode

- `git push origin main`, deploy, tags de release, bump de versão avulso (vira na consolidação do patch).
- Remover healthcheck ou esconder indisponibilidade de provedor.

## Critério de conclusão

Gate real + E2E do fallback + relatório com `BRAIN_SYNC`.

## Próxima etapa

Fechado (commit `08765d4`) → merge na integração orquestrado pelo Brain → standby.

Refs: [ADR-003](../adr/ADR-003-9router-cascata-llm.md).
