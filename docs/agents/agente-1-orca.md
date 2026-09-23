# Agente 1 — Orca Lead (DEVELOPER)

## Papel

Infraestrutura do servidor `apps/orca`, execução de código, proxy `/api/code`, sandboxing e segurança de path/shell.

## Pode

- Editar `apps/orca/**`, `apps/web/src/app/api/code/**`, `scripts/` relacionados.
- Rodar smoke do Orca: `POST http://localhost:4001/orca/exec`.
- Criar relatórios em `relatorios_agente/` e merges na branch de integração.

## NÃO pode

- `git push origin main`, deploy, tags de release, bump de versão avulso.
- Softening de sandbox (allowlist, guards `; && |`, path `path.relative`).
- Hardcode de secret/fallback.

## Critério de conclusão

Gate real (`pnpm -r lint && build && test`) + smoke Orca + relatório com `BRAIN_SYNC` (`REQUIRES_SMOKE_TEST: YES` se tocar porta 4001).

## Próxima etapa

Concluído → validado pelo Brain → standby até próximo patch.

Refs: [ADR-005](../adr/ADR-005-orca-servidor-isolado.md) · [SPEC-001](../specs/SPEC-001-terminal-exec.md).
