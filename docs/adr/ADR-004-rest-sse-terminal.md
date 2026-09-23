# ADR-004 — Terminal em REST+SSE (não socket.io)

- **Status:** `aceito`
- **Data:** 2026-09-05 (registro retroativo)

## Contexto

O terminal (xterm.js) precisa de streaming de stdout/stderr em tempo real. A plataforma é serverless (Vercel) — conexões long-lived são caras/instáveis.

## Decisão

`POST /api/terminal/exec` retorna **SSE** (`text/event-stream`) via `ReadableStream`, com eventos `stdout`/`stderr`/`exit`. Sessões (cwd persistente) ficam em memória indexadas por `userId:sessionId`. `GET /api/terminal/exec?sessionId` devolve cwd/histórico. socket.io é **proibido** (CLAUDE.md Forbidden Patterns).

## Alternativas consideradas

- socket.io/WebSocket — descartado: serverless não mantém socket vivo sem infra extra; forbidden pattern do projeto.
- Polling REST — descartado: latência inaceitável para terminal interativo.

## Consequências

- ✅ Compatível com serverless; audit log em `terminal_audit_log`; rate limit 30 cmd/min por sessão.
- ⚠️ Sessões morrem com o cold start da função — aceito para o modelo atual (PTY contínuo é ADR-005/Orca).
