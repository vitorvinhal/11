# Relatório Completo — Auditoria de Menus e Funcionalidades

Versão: **2.10.0-alpha** · Data: 2026-09-18

---

## 1. Resumo Executivo

Auditoria completa de 14 menus laterais, 33 rotas de API e 15 componentes de painel.
**Resultado: 10 menus funcionais, 2 com bugs de contrato API, 2 quebrados no web (servidor ausente), 1 sem uso.**

---

## 2. Status de Cada Menu Lateral

### ✅ FUNCIONAIS (10)

| Menu            | Componente        | Status     | Observação                                      |
| --------------- | ----------------- | ---------- | ----------------------------------------------- |
| Conversas       | `ChatPanel`       | ✅ OK      | Chat funcional com combo Arcenal via 9Router    |
| Projects        | `ProjectsPanel`   | ✅ OK      | CRUD completo Supabase                          |
| Artifacts       | `ArtifactsPanel`  | ✅ OK      | Visualização + delete (criação via chat)        |
| Canvas          | `CanvasPanel`     | ✅ OK      | Preview HTML/SVG em tempo real                  |
| Code & Terminal | `CodeWorkspace`   | ✅ OK      | Editor + terminal funcional                     |
| Rede Neural     | `NeuralGraph`     | ✅ OK      | Visualização force-directed com dados reais     |
| Memoria         | `MemoriaPanel`    | ✅ OK      | Auditoria + consolidação + checkpoints          |
| FinOps          | `FinOpsPanel`     | ✅ OK      | Dashboard de custos/tokens real                 |
| Skills          | `SkillsPanel`     | ⚠️ PARCIAL | Leitura OK, criação com bug de contrato         |
| Connectors      | `ConnectorsPanel` | ✅ OK      | OAuth real (Google PKCE, GitHub, Slack, Notion) |

### ⚠️ COM BUGS (2)

| Menu    | Componente     | Bug                                                                          | Severidade |
| ------- | -------------- | ---------------------------------------------------------------------------- | ---------- |
| Skills  | `SkillsPanel`  | POST envia `{userId, name, description}` mas API espera `{pluginId, action}` | ALTO       |
| Plugins | `PluginsPanel` | POST envia `{id, userId, name}` mas API espera `{pluginId, action}`          | ALTO       |

### ❌ QUEBRADOS NO WEB (2)

| Menu         | Componente    | Motivo                          | Funciona em     |
| ------------ | ------------- | ------------------------------- | --------------- |
| Eleven Coder | `ElevenCoder` | Socket.IO server ausente no web | Desktop (Tauri) |
| Agente PC    | `MobileAgent` | WebSocket server ausente no web | Desktop (Tauri) |

### ⏸️ SEM USO (1)

| Menu  | Componente     | Motivo                                               |
| ----- | -------------- | ---------------------------------------------------- |
| Mídia | `MediaGallery` | Funcional mas redundante (upload via chat já existe) |

---

## 3. Rotas de API — Status

### ✅ FUNCIONAIS (30/33)

| Rota                  | Status | Auth    |
| --------------------- | ------ | ------- |
| `/api/health`         | 200    | Público |
| `/api/version`        | 200    | Público |
| `/api/docs`           | 200    | Público |
| `/api/keep-alive`     | 200    | Público |
| `/api/system`         | 200    | Público |
| `/api/terminal/exec`  | 200    | Público |
| `/api/media`          | 200    | Público |
| `/api/health/router`  | 401    | JWT     |
| `/api/health/plugins` | 401    | JWT     |
| `/api/health/skills`  | 401    | JWT     |
| `/api/metrics`        | 401    | JWT     |
| `/api/memories`       | 401    | JWT     |
| `/api/projects`       | 401    | JWT     |
| `/api/skills`         | 401    | JWT     |
| `/api/plugins`        | 401    | JWT     |
| `/api/connectors`     | 401    | JWT     |
| `/api/settings`       | 401    | JWT     |
| `/api/artifacts`      | 401    | JWT     |
| `/api/reverter`       | 401    | JWT     |
| `/api/memoria`        | 401    | JWT     |
| `/api/finops`         | 401    | JWT     |
| `/api/webhooks`       | 401    | JWT     |
| `/api/events`         | 401    | JWT     |
| `/api/export`         | 401    | JWT     |
| `/api/performance`    | 401    | JWT     |
| `/api/chat`           | 401    | JWT     |
| `/api/agent`          | 401    | JWT     |
| `/api/code`           | 401    | JWT     |
| `/api/compare`        | 401    | JWT     |
| `/api/import`         | 401    | JWT     |

### ⚠️ WARNING (1)

| Rota           | Status | Motivo                                  |
| -------------- | ------ | --------------------------------------- |
| `/api/account` | 405    | GET não suportado (só PUT/PATCH/DELETE) |

### ❌ QUEBRADAS (2)

| Rota       | Status | Motivo                           |
| ---------- | ------ | -------------------------------- |
| `/api/stt` | 500    | Sem `ELEVENLABS_KEY` configurada |
| `/api/tts` | 500    | Sem chave de TTS configurada     |

---

## 4. Correções Aplicadas

### Sobreposição do ThemeToggle

- **Problema:** `ThemeToggle` posicionado `fixed top-4 right-4 z-50` sobreponha conteúdo
- **Correção:** Removido do `layout.tsx` (ProfileDialog já tem seletor dark/light/system completo)

---

## 5. Recomendações

| Prioridade | Ação                                                                                   |
| ---------- | -------------------------------------------------------------------------------------- |
| **ALTA**   | Corrigir contrato API SkillsPanel/PluginsPanel (POST body mismatch)                    |
| **ALTA**   | Remover ou ocultar menus "Eleven Coder" e "Agente PC" no web (só funcionam no desktop) |
| **MÉDIA**  | Configurar `ELEVENLABS_KEY` para STT/TTS, ou remover rotas                             |
| **MÉDIA**  | Remover menu "Mídia" se redundante, ou integrar com chat                               |
| **BAixa**  | Adicionar syntax highlighting ao CodePanel (usar Monaco/CodeMirror)                    |
