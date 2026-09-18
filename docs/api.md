# API Reference — 11

Referência completa dos endpoints da aplicação.

## Autenticação

Todos os endpoints (exceto `/api/health` e `/api/version`) requerem autenticação via JWT Bearer token no header `Authorization`.

```
Authorization: Bearer <token>
```

O token é obtido via Supabase Auth (Magic Link ou OAuth).

---

## Health & Status

### `GET /api/health`
Health check agregado de todos os subsystems. Não requer auth.

**Response:**
```json
{
  "ok": true,
  "timestamp": "2026-09-17T12:00:00Z",
  "version": "1.6.0-alpha",
  "checks": [
    { "service": "router", "ok": true, "latencyMs": 12 },
    { "service": "plugins", "ok": true, "latencyMs": 8 },
    { "service": "skills", "ok": true, "latencyMs": 6 }
  ]
}
```

### `GET /api/health/router`
Health check do Model Gateway.

### `GET /api/health/plugins`
Health check do Plugin Registry. Retorna contagem de plugins instalados.

### `GET /api/health/skills`
Health check do Skill System. Retorna contagem de skills instaladas.

### `GET /api/version`
Retorna versão atual do sistema.

**Response:**
```json
{
  "ok": true,
  "data": {
    "version": "1.6.0-alpha",
    "buildDate": "2026-09-17",
    "phase": "FASE 12 Complete",
    "features": ["..."]
  }
}
```

---

## Chat

### `POST /api/chat`
Envia mensagem e recebe resposta do modelo.

**Request:**
```json
{
  "message": "Olá, como vai?",
  "history": [],
  "model": "gpt-4"
}
```

**Response:**
```json
{
  "reply": "Olá! Estou bem, como posso ajudar?",
  "model": "gpt-4",
  "usage": { "inputTokens": 10, "outputTokens": 15 }
}
```

**Rate Limit:** 30 req/min por usuário.

---

## Agent

### `POST /api/agent`
Envia mensagem para o agente autônomo com execução de tools.

**Request:**
```json
{
  "message": "Analise o repositório e sugira melhorias",
  "sessionId": "optional-session-id",
  "config": {
    "enableTools": true,
    "maxIterations": 10,
    "stream": false
  }
}
```

**Response (non-streaming):**
```json
{
  "text": "Analisei o repositório...",
  "toolCallsExecuted": 3,
  "riskSummary": { "safe": 2, "reversible": 1, "destructive": 0 },
  "status": "idle"
}
```

**Response (streaming):** SSE com eventos:
- `meta` — informações da sessão
- `delta` — chunks de texto
- `done` — conclusão
- `error` — erro

**Rate Limit:** 10 req/min por usuário.

### `POST /api/agent/approve`
Aprova ou rejeita uma tool pendente.

**Request:**
```json
{
  "actionId": "uuid",
  "approved": true
}
```

### `GET /api/agent/approve`
Lista ações pendentes de aprovação.

---

## Plugins

### `GET /api/plugins`
Lista plugins instalados.

**Response:**
```json
{
  "ok": true,
  "data": {
    "plugins": [
      { "id": "plugin-1", "name": "My Plugin", "enabled": true }
    ]
  }
}
```

### `POST /api/plugins`
Instala ou desinstala um plugin.

**Request:**
```json
{
  "action": "install",
  "plugin": { "name": "My Plugin", "tools": [...] }
}
```

---

## Skills

### `GET /api/skills`
Lista skills built-in e customizadas.

**Response:**
```json
{
  "ok": true,
  "data": {
    "skills": [
      { "id": "code-writer", "name": "Code Writer", "enabled": true },
      { "id": "researcher", "name": "Researcher", "enabled": true }
    ]
  }
}
```

### `POST /api/skills`
Habilita ou desabilita uma skill.

**Request:**
```json
{
  "action": "enable",
  "skillId": "code-writer"
}
```

---

## Memories

### `GET /api/memories`
Busca memórias do usuário.

**Query Params:**
- `q` — termo de busca
- `limit` — limite de resultados (default: 20)

### `POST /api/memories`
Salva uma nova memória.

**Request:**
```json
{
  "content": "Usuário prefere respostas em português",
  "kind": "preference"
}
```

---

## Metrics

### `GET /api/metrics`
Resumo das métricas do agente.

**Response:**
```json
{
  "ok": true,
  "data": {
    "totalRequests": 150,
    "totalTokens": 45000,
    "avgLatencyMs": 850,
    "errorRate": 0.02,
    "toolCallsByRisk": { "safe": 120, "reversible": 25, "destructive": 5 }
  }
}
```

### `DELETE /api/metrics`
Limpa todas as métricas.

---

## Code Execution

### `POST /api/code`
Executa código em sandbox isolado.

**Request:**
```json
{
  "language": "python",
  "code": "print('Hello')",
  "sessionId": "optional"
}
```

---

## Media

### `POST /api/media`
Upload de mídia (imagens, áudio).

### `GET /api/media`
Lista mídias do usuário.

---

## Connectors

### `GET /api/connectors`
Lista conectores disponíveis (Google, GitHub, Slack, Notion).

### `GET /api/connectors/{provider}`
Status do conector.

### `GET /api/connectors/{provider}/callback`
Callback OAuth2 após autorização.

---

## Settings

### `GET /api/settings`
Retorna configurações do usuário.

### `POST /api/settings`
Atualiza configurações do usuário.

---

## Projects

### `GET /api/projects`
Lista projetos do usuário.

### `POST /api/projects`
Cria um novo projeto.

---

## TTS / STT

### `POST /api/tts`
Text-to-Speech via ElevenLabs.

### `POST /api/stt`
Speech-to-Text via ElevenLabs.

---

## Terminal

### `POST /api/terminal/exec`
Executa comando no terminal (requer auth + risk check).

**Request:**
```json
{
  "command": "ls -la",
  "sessionId": "terminal-1"
}
```

---

## Erros

Todos os endpoints retornam erros no formato:

```json
{
  "error": "Mensagem de erro"
}
```

Códigos HTTP comuns:
- `401` — Não autenticado
- `403` — Sem permissão (ownership check falhou)
- `429` — Rate limit excedido
- `500` — Erro interno
