# ADRs — Architecture Decision Records

## Quando criar um ADR

Só crie ADR quando houver **impacto arquitetural real**:

- Mudança de banco de dados ou esquema de dados crítico.
- Comunicação entre serviços (protocolo, gateway, filas).
- Adição/remoção de framework ou biblioteca estrutural.
- Troca de estratégia de autenticação, deploy ou infra.

Não precisa de ADR para correções pontuais ou features simples — use `docs/specs/`.

## Template

```markdown
# ADR-NNN — <título curto da decisão>

- **Status:** `proposto` | `aceito` | `obsoleto` | `substituído por ADR-XXX`
- **Data:** YYYY-MM-DD

## Contexto

Qual problema/força exige a decisão. O que estava em jogo.

## Decisão

O que foi decidido (frase única + detalhes).

## Alternativas consideradas

- Alternativa A — por que descartada
- Alternativa B — por que descartada

## Consequências

Positivas e negativas esperadas da decisão.
```

## Índice

| ADR                                          | Título                                      | Status |
| -------------------------------------------- | ------------------------------------------- | ------ |
| [ADR-001](ADR-001-monorepo-pnpm-turbo.md)    | Monorepo pnpm + Turbo                       | aceito |
| [ADR-002](ADR-002-auth-unify-requireUser.md) | Auth unificada via `requireUser()`          | aceito |
| [ADR-003](ADR-003-9router-cascata-llm.md)    | Gateway 9Router + cascata de LLM            | aceito |
| [ADR-004](ADR-004-rest-sse-terminal.md)      | Terminal em REST+SSE (não socket.io)        | aceito |
| [ADR-005](ADR-005-orca-servidor-isolado.md)  | Orca como servidor isolado (não serverless) | aceito |
