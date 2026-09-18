# 11 – Ecossistema IA Autônomo

## Visão geral
A **11** é uma IA autônoma e imersiva que conecta PC, celular e web. Possui safety engine com 50+ regras, agent loop com execução de tools, sistema de plugins/skills, e dashboard administrativo.

## Tech Stack
- **Frontend**: Next.js 13 (App Router) + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes + @11/ia package
- **Database**: Supabase (PostgreSQL + RLS)
- **IA**: Multi-provider (9Router, Gemini, Anthropic, MiniMax)
- **Auth**: Supabase Auth (Magic Link / OAuth)
- **CI/CD**: GitHub Actions → Vercel

## Quick Start

```bash
# 1. Clone
git clone https://github.com/vitorvinhal/11.git && cd 11

# 2. Install
pnpm install

# 3. Configure
cp .env.example .env
# Edit .env with your Supabase credentials

# 4. Run
pnpm dev:web      # http://localhost:3000
```

## Architecture

```
Frontend (Next.js)
    │
    ▼
API Routes (/api/*)
    │
    ▼
@11/ia (Safety Engine + Agent Core + Plugins)
    │
    ▼
Supabase (PostgreSQL + RLS)
```

### Key Packages
- **`@11/ia`** — Intelligence core: router, safety, agent, plugins
- **`@11/shared`** — Shared utilities and types
- **`@11/web`** — Next.js frontend application

## Features

### Safety Engine (FASE 4)
- 50+ risk classification rules
- Dry-run simulation before execution
- Checkpoint & rollback for reversible actions
- Human approval for destructive actions

### Agent Core (FASE 5-7)
- Autonomous agent loop: LLM → tools → safety → execute
- Session management with token tracking
- Long-term memory system
- Real-time metrics

### Plugins & Skills (FASE 9-10)
- Plugin registry with auto risk rule registration
- 4 built-in skills (Code Writer, Researcher, DevOps, Docs)
- API endpoints for management

### Health & Monitoring (FASE 11-12)
- `/api/health` — Aggregated health checks
- `/health` — Real-time dashboard
- `/admin` — Admin dashboard with metrics
- Rate limiting on all endpoints

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/chat` | POST | Chat with model |
| `/api/agent` | POST | Autonomous agent |
| `/api/agent/approve` | POST | Approve tool execution |
| `/api/plugins` | GET/POST | Manage plugins |
| `/api/skills` | GET/POST | Manage skills |
| `/api/memories` | GET/POST | User memories |
| `/api/metrics` | GET/DELETE | Agent metrics |
| `/api/health` | GET | Health checks |
| `/api/version` | GET | System version |

Full API reference: [docs/api.md](docs/api.md)

## Project Structure

```
/11
├── apps/
│   ├── web/           # Next.js frontend
│   ├── mobile/        # Capacitor mobile app
│   └── desktop/       # Tauri desktop app
│
├── packages/
│   ├── ia/            # Intelligence core
│   ├── shared/        # Shared utilities
│   ├── api/           # NestJS API (legacy)
│   └── cli/           # CLI tool
│
├── infra/
│   ├── supabase/      # Database migrations
│   └── tunnel/        # Cloudflare tunnel
│
└── docs/
    ├── api.md         # API reference
    ├── architecture.md # Architecture overview
    └── TLOG.md        # Technical log
```

## Development

```bash
# Run tests
pnpm test

# Build all packages
pnpm build

# Lint
pnpm lint

# Type check
pnpm typecheck
```

## Versioning

We use semantic versioning with alpha channel:

```bash
pnpm version:patch   # v1.6.0-alpha → v1.6.1-alpha
pnpm version:minor   # v1.6.0-alpha → v1.7.0-alpha
pnpm version:major   # v1.6.0-alpha → v2.0.0-alpha
```

## Documentation

- [API Reference](docs/api.md)
- [Architecture](docs/architecture.md)
- [Technical Log](docs/TLOG.md)
- [Changelog](CHANGELOG.md)

## License

MIT — 100% gratuito.
