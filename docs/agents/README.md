# Agents — Definições de Papéis e Loop

## Loop fechado (developer → tester → reviewer)

```
[Brain monta spec/plano]
        ↓
[DEVELOPER — Agente 1-4] implementa seguindo a spec/relatório
        ↓
[TESTER — gate + smoke]  pnpm -r lint && build && test + smoke do escopo
        ↓ passou? ── NÃO ──→ devolve pro DEVELOPER (com erro/relatório)
        ↓ SIM
[REVIEWER — Brain] lê relatório, valida BRAIN_SYNC, confere spec vs entrega
        ↓ aprovou? ── NÃO ──→ devolve pro DEVELOPER
        ↓ SIM
[USUÁRIO/PO] + [Brain FASE D — deploy]
```

**Regra prática:** sempre chame o agente explicitamente no prompt — evita que dois agentes achem que a tarefa é deles (alucinação de papéis é mais cara de corrigir do que nomear).

## Compatibilidade multi-ferramenta

Mesmo conteúdo, três locais (sem conflito — cada ferramenta lê a sua):

- **Codex/CLI:** `AGENTS.md` (raiz) — contexto operacional.
- **Claude Code:** `CLAUDE.md` (raiz) — diretrizes de engenharia.
- **Copilot:** `.github/` (futuro `.github/instructions/`) — mesmo conteúdo adaptado.

Skills ficam em `skills/` (raiz). System prompt do agente em `agent/system_prompt.md`.

## Definições

| Agente   | Arquivo                                          | Papel                                                |
| -------- | ------------------------------------------------ | ---------------------------------------------------- |
| Brain    | [brain.md](brain.md)                             | Orquestra, revisa, aprova e é o ÚNICO que faz deploy |
| Agente 1 | [agente-1-orca.md](agente-1-orca.md)             | Orca / sandboxing / `/api/code`                      |
| Agente 2 | [agente-2-mobile.md](agente-2-mobile.md)         | Mobile / Desktop / bridges / offline-first           |
| Agente 3 | [agente-3-llm.md](agente-3-llm.md)               | Ollama / local LLM / `/api/chat`                     |
| Agente 4 | [agente-4-unify-auth.md](agente-4-unify-auth.md) | Unify-auth / integração de branches                  |

## Quando usar skill

Cada skill em `skills/` descreve **quando usar** (não só porquê). O agente decide pela description se a skill se aplica. Sem skill aplicável, ele usa conhecimento próprio — por isso a spec (linha-a-linha) é obrigatória antes de desenvolver.
