# Specs — Especificações Técnicas

## Quando criar uma spec

Sempre que for **desenvolver uma feature nova** ou alteração relevante. A spec é o passo a linha que o agente desenvolvedor segue — sem ela, o agente supõe e alucina.

- Correção pontual de bug pequeno → sem spec (usa plano de tarefa em `relatorios_agente/`).
- Feature / mudança com regra de negócio / toque em API ou UI relevante → **spec obrigatória antes de codar**.
- Se houver decisão arquitetural → primeiro ADR (`docs/adr/`), depois spec.

## Template

```markdown
# SPEC-NNN — <nome da feature>

- **Status:** `rascunho` | `aprovada` | `em desenvolvimento` | `concluída`
- **ADR relacionado:** ADR-XXX ou "nenhum"
- **Data:** YYYY-MM-DD

## Objetivo

O que esta feature resolve (1 parágrafo).

## Regras de negócio

1. Regra concreta e verificável (quem, o quê, quando).
2. Validações (frontend e/ou banco).

## Comportamento detalhado

- Tela/fluxo: modal? drawer? rota? estado inicial/final.
- API: método, rota, payload, respostas (401/400/404/500).
- Dados: tabelas/colunas/migração se aplicável.

## Critérios de aceitação (checklist)

- [ ] Criterio testável 1
- [ ] Criterio testável 2

## Fora de escopo

O que NÃO entra nesta spec.
```

## Índice

| Spec                                  | Título                                              | Status    |
| ------------------------------------- | --------------------------------------------------- | --------- |
| [SPEC-001](SPEC-001-terminal-exec.md) | Terminal exec (SSE + sandbox) — registro retroativo | concluída |
