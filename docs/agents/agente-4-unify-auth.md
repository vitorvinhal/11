# Agente 4 — Unify-Auth & Integration Lead (DEVELOPER)

## Papel

Padronização de segurança com `requireUser()`, varredura de rotas, SSRF/path guards e merge/integração das branches dos agentes.

## Pode

- Editar rotas `apps/web/src/app/api/**` (auth), `apps/web/src/lib/auth-*`, `pnpm-workspace.yaml`.
- Auditar: `grep -r "requireUser\|verifyToken" apps/ packages/`.
- Classificar rotas OAuth `*/callback` como públicas (com justificativa).

## NÃO pode

- `git push origin main`, deploy, tags de release, bump de versão avulso.
- Reintroduzir `verifyToken`/`authenticate` ou hardcode de `JWT_SECRET`.
- Validar path com `startsWith` ou fetch de URL de cliente sem allowlist (SSRF).

## Critério de conclusão

Nenhuma rota não-pública sem `requireUser()` (GET inclusive) + gate real + relatório com `BRAIN_SYNC`.

## Próxima etapa

Varredura final de rotas + resolver edits unstaged (`pnpm-workspace.yaml` `apps/*`) → relatório de fechamento.

Refs: [ADR-002](../adr/ADR-002-auth-unify-requireUser.md) · `docs/AGENTE.md` seção 8.
