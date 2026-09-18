# Architecture — 11

Visão geral da arquitetura do ecossistema 11.

## Visão Geral

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │   Web    │  │  Mobile  │  │ Desktop  │  │   CLI    │  │
│  │ Next.js  │  │Capacitor │  │  Tauri   │  │  Node.js │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘  │
│       └──────────────┴──────────────┴──────────────┘        │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS
┌──────────────────────────┴──────────────────────────────────┐
│                        Backend                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                   Next.js API Routes                  │  │
│  │  /api/chat  /api/agent  /api/plugins  /api/skills    │  │
│  └──────────────────────────┬───────────────────────────┘  │
│                              │                              │
│  ┌──────────────────────────┴───────────────────────────┐  │
│  │                    @11/ia Package                     │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌────────┐ │  │
│  │  │ Router  │  │ Safety  │  │ Agent   │  │Plugins │ │  │
│  │  │Gateway  │  │ Engine  │  │  Core   │  │& Skills│ │  │
│  │  └────┬────┘  └────┬────┘  └────┬────┘  └────┬───┘ │  │
│  └───────┴────────────┴────────────┴─────────────┴──────┘  │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────┴──────────────────────────────────┐
│                      Data Layer                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Supabase │  │  Redis   │  │  S3/CDN  │  │  SQLite  │  │
│  │PostgreSQL│  │ (cache)  │  │ (media)  │  │ (local)  │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Packages

### `@11/ia` — Intelligence Core
O pacote central que contém toda a lógica de IA:

```
packages/ia/src/
├── router/           # Roteador multi-provedor
│   ├── index.ts      # ModelGateway (auto/pinned mode)
│   ├── types.ts      # CanonicalMessage, ToolCall, ToolResult
│   ├── adapters/     # 9Router, Gemini, Anthropic, MiniMax
│   ├── cost-breaker  # Circuit breaker de custo
│   ├── provider-pinning # Pinagem estável por sessão
│   └── long-context  # Compactação de contexto
│
├── safety/           # Engine de segurança (FASE 4)
│   ├── risk-engine   # classifyAction, getRisk, requiresApproval
│   ├── dry-run       # Simulação antes de executar
│   └── checkpoint    # Create/restore checkpoints, pending actions
│
├── agent/            # Core do agente (FASE 5-7)
│   ├── agent-core    # agentLoop: LLM → tools → safety → execute
│   ├── tool-executor # Pipeline: classify → dry-run → checkpoint → execute
│   ├── session-manager # Gerenciamento de sessões
│   ├── memory        # Memórias de longo prazo
│   └── metrics       # Métricas de performance
│
├── plugins/          # Sistema de extensibilidade (FASE 9)
│   ├── plugin-registry # Registro e discovery de plugins
│   └── skill-system    # Skills built-in e customizadas
│
├── tools/            # Tools disponíveis
│   ├── file-ops      # file_read, file_write
│   ├── terminal      # terminal_exec
│   ├── git           # git_commit, git_diff
│   ├── database      # sql_query (SELECT only)
│   ├── web           # web_search, web_fetch
│   └── artifacts     # Geração de documentos
│
└── personality/      # Personalização
    └── seed          # Referência de personas
```

### `@11/shared` — Utilities compartilhados
Tipos, utilitários e constantes usados por todos os packages.

### `@11/web` — Frontend Next.js
```
apps/web/src/
├── app/
│   ├── api/          # API Routes
│   │   ├── chat/     # Chat com modelo
│   │   ├── agent/    # Agente autônomo
│   │   ├── plugins/  # Gerenciamento de plugins
│   │   ├── skills/   # Gerenciamento de skills
│   │   ├── health/   # Health checks
│   │   ├── metrics/  # Métricas do agente
│   │   └── ...       # Outros endpoints
│   ├── admin/        # Dashboard administrativo
│   ├── health/       # Dashboard de saúde
│   └── coder/        # Interface de código
│
├── components/       # Componentes React
│   ├── ChatPanel     # Painel de chat principal
│   ├── ElevenCoder   # Interface de código
│   └── AstroSphere   # Visual 3D
│
└── lib/              # Utilitários
    ├── auth-helpers  # requireUser, assertRowOwnership
    ├── rate-limiter  # Rate limiting por endpoint
    └── server-env    # Carregamento de variáveis
```

## Safety Engine

O Safety Engine é o coração da segurança do sistema:

```
User Action
    │
    ▼
┌─────────────┐
│ Risk Engine │ ← 50+ regras de classificação
│ (FASE 4A)   │
└──────┬──────┘
       │
       ├── SAFE → Executa direto
       │
       ├── REVERSIBLE → Dry-run → Checkpoint → Execute
       │
       └── DESTRUCTIVE → Dry-run → Aprovação humana → Execute
```

### Classificação de Risco
- **SAFE**: Leitura, busca, ações sem efeito colateral
- **REVERSIBLE**: Escrita, commits, ações com rollback possível
- **DESTRUCTIVE**: Delete, deploy, ações irreversíveis

### Default Deny
Ações desconhecidas são classificadas como DESTRUCTIVE por padrão.

## Agent Loop

```
┌─────────────────────────────────────────┐
│              Agent Loop                  │
│                                          │
│  1. User Message                         │
│       │                                  │
│       ▼                                  │
│  2. LLM Completion                       │
│       │                                  │
│       ▼                                  │
│  3. Tool Calls?                          │
│       │                                  │
│       ├── Não → Return final answer      │
│       │                                  │
│       └── Sim → 4. Safety Check          │
│                    │                     │
│                    ▼                     │
│              5. Execute Tool             │
│                    │                     │
│                    ▼                     │
│              6. Add result to context    │
│                    │                     │
│                    └── Loop para 2       │
│                                          │
│  Max Iterations: 10 (configurable)       │
└─────────────────────────────────────────┘
```

## Database Schema (Supabase)

### Tabelas Principais
- `users` — Usuários (via Supabase Auth)
- `memories` — Memórias de longo prazo
- `installed_plugins` — Plugins instalados
- `installed_skills` — Skills instaladas
- `checkpoints` — Checkpoints para rollback
- `pending_actions` — Ações aguardando aprovação
- `agent_sessions` — Sessões do agente
- `agent_messages` — Mensagens das sessões

### RLS (Row Level Security)
Todas as tabelas usam RLS com `auth.uid()` para isolamento de dados.

## Deploy

```
GitHub → GitHub Actions → Vercel (Web) + Supabase (DB)
```

### Variáveis de Ambiente
- `NEXT_PUBLIC_SUPABASE_URL` — URL do Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Chave anônima
- `SUPABASE_SERVICE_ROLE_KEY` — Chave de serviço
- `OPENAI_API_KEY` — Chave OpenAI (opcional)
- `ELEVENLABS_API_KEY` — Chave ElevenLabs (opcional)
