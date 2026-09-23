# PRD — 11 (Ecossistema IA Autônomo)

> Documento de NEGÓCIO. Sem detalhes técnicos. É a visão que o produto espera resolver.

## Visão geral

A **11** é uma IA autônoma e imersiva que conecta PC, celular e web num único ambiente. O usuário conversa, executa código, gerencia tarefas, memórias e conexões — tudo numa interface só, com segurança e auditoria.

## Objetivo do negócio

- Dar ao usuário um copiloto autônomo que opera as próprias máquinas (desktop/mobile) com aprovação humana.
- Manter o usuário no controle: nada destrutivo acontece sem aprovação explícita.
- Chegar ao estágio **BETA rápido**, ativando tudo que já existe no produto (prioridade atual).

## Personas / Usuários

- **Persona principal — Desenvolvedor/Power user:** usa terminal, code, canvas e plugins no dia a dia; quer autonomia com controle.
- **Persona secundária — Usuário comum:** usa chat, memória e conectores; quer respostas rápidas e simplicidade.

## Escopo macro

- Chat multi-provedor de IA com fallback inteligente.
- Terminal e execução de código com sandbox e aprovação.
- Agente de dispositivo (PC/Mobile): automação no OS com jobs aprovados.
- Memória, artifacts, canvas, finops, skills/plugins/conectores.
- Experiência multi-plataforma: web, desktop e mobile com paridade.

## Fora de escopo (por ora)

- Micro-atualizações de versão (política: patches consolidados).
- Recursos novos grandes enquanto o produto não sair do alpha para BETA.

## Métricas de sucesso

- BETA no ar com gate `lint/build/test` 100% verde.
- Smoke test de chat, terminal e settings passando em produção.
- Usuário consegue operar desktop/mobile com aprovação de jobs ponta a ponta.

## MVPs

- **MVP1 (em consolidação — patch 2.17.0-alpha):** unificação de auth, Orca server, fallback Ollama/Llama, offline-first mobile/desktop, reorganização documental.
- **MVP2 (próximo):** itens do `docs/plan/PLAN.md` — streaming SSE no chat, plugins persistidos, artifacts no servidor, rate limit persistente, PTY real, i18n.
