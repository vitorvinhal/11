# ADR-005 — Orca como servidor isolado (não serverless)

- **Status:** `aceito`
- **Data:** 2026-09-22

## Contexto

O Orca precisa de **PTY interativa**, git worktrees e agentes paralelos. API route do Next (serverless) não mantém processo vivo entre invocações — não há PTY persistente, nem estado, nem stream contínuo.

## Decisão

Servidor **Orca isolado de longa duração** (`apps/orca`, porta **4001**, bind `127.0.0.1`) expondo `/orca/exec`. A rota `/api/code` vira **proxy** para o servidor Orca, preservando auth (`requireUser`) e rate limit. Sandbox com allowlist de comandos + guards de metacharactere/cwd (4/4 payloads de bypass bloqueados com 400).

## Alternativas consideradas

- Rodar PTY dentro da API route serverless — descartado: processo morre entre invocações.
- node-pty na função Next com keep-alive — descartado: limite de tempo e memória da função.

## Consequências

- ✅ PTY real, worktrees e execução sandboxed com bind localhost.
- ⚠️ Exige serviço rodando em produção (não serverless puro) — entra no checklist de smoke (`POST localhost:4001/orca/exec`).
- ⚠️ `pnpm-workspace.yaml` deve declarar `apps/*` para incluir o workspace Orca.
