# ADR-003 — Gateway 9Router + cascata de LLM

- **Status:** `aceito`
- **Data:** 2026-09-15 (registro retroativo)

## Contexto

Múltiplos provedores de IA (9Router, Gemini, Anthropic, Ollama local) com chaves e disponibilidade distintas. O chat não pode morrer quando um provedor cai ou um modelo não existe.

## Decisão

`/api/chat` encadeia provedores: **9Router (tunnel → endpoint → Arcenal → `ROUTER9_FALLBACK_MODELS`) → Gemini → Anthropic → Ollama local**. Cada provedor é uma função `route9Router()`, `routeGemini()`, `routeAnthropic()`, `routeOllama()`. `routeOllama` consulta `/api/tags` e faz fallback para o primeiro modelo instalado quando o solicitado não existe (client-side: `isModelNotFound()` + `discoverFirstModel()`).

## Alternativas consideradas

- Chamar provedores direto (sem gateway) — descartado: N formas de key management e sem combos de fallback.
- Só Ollama local — descartado: sem fallback em nuvem, indisponível em dispositivos fracos.

## Consequências

- ✅ Resiliência: um provedor fora não derruba o chat; modelo inexistente vira fallback automático.
- ⚠️ `/api/health/router` sem 9Router reporta estado (esperado, não é bug). Exige `REQUIRE_API_KEY=true` no serviço 9Router se a URL for pública.
