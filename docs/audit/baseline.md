# Phase 0 Audit Baseline — 2026-09-19

## Build Status

- **TypeScript:** ✅ PASS (no errors)
- **ESLint:** ✅ PASS (0 errors, warnings only)
- **Next.js Build:** ✅ PASS

## Changes Made (Phase 0-7)

### FASE 0 — Fix Crashes

- `apps/web/src/app/api/chat/route.ts`: `break` → `continue` in route9Router; added usage recording; added Ollama fallback
- `apps/web/src/app/error.tsx`: NEW — page error boundary
- `apps/web/src/app/global-error.tsx`: NEW — root error boundary
- `apps/web/src/components/ErrorBoundary.tsx`: NEW — reusable class boundary
- `apps/web/src/lib/version.ts`: NEW — parseVersionPayload() helper
- `apps/web/src/components/VersionBadge.tsx`: Fixed to use parser
- `apps/web/src/components/ProfileDialog.tsx`: Fixed changelog parsing; restructured 12→7 tabs
- `apps/web/src/app/api/version/route.ts`: Flattened response (removed `{ok, data}` wrapper)

### FASE 1 — Terminal

- `apps/web/src/components/ElevenCoder.tsx`: REWRITTEN from socket.io to REST+SSE
- `apps/web/src/components/TerminalPanel.tsx`: Fixed xterm init (removed `display:none`)
- `apps/web/src/components/Sidebar.tsx`: Added Code/Terminal to mobile-app platforms

### FASE 2 — Neural Graph

- `apps/web/src/components/NeuralGraph.tsx`: Fixed skills shape mismatch; Promise.all → allSettled; improved edge visibility

### FASE 3 — FinOps

- `packages/ia/src/router/cost-breaker.ts`: Fixed env var (SUPABASE_URL → NEXT_PUBLIC_SUPABASE_URL); always persist
- `apps/web/src/app/api/chat/route.ts`: Added usage recording to model_usage

### FASE 4 — Canvas

- `apps/web/src/components/CanvasPanel.tsx`: Added JSX mode (Babel + React UMD); className→class transform; 3 modes: HTML/Tailwind, React/JSX, SVG

### FASE 5 — Settings

- `apps/web/src/components/AvatarUpload.tsx`: NEW — Supabase Storage upload
- `apps/web/src/components/OllamaPanel.tsx`: NEW — Ollama config + model selector
- `apps/web/src/components/SessionsPanel.tsx`: NEW — device sessions display
- `apps/web/src/components/ProfileDialog.tsx`: Restructured to 7 tabs
- `apps/web/src/app/api/devices/route.ts`: NEW — CRUD for device_sessions
- `apps/web/src/app/api/settings/test-ollama/route.ts`: NEW — test Ollama connection
- `infra/supabase/migrations/20260919_device_sessions.sql`: NEW — device_sessions table
- `infra/supabase/migrations/20260919_avatars_bucket.sql`: NEW — avatars storage bucket

### FASE 6 — Bug Fixes

- `apps/web/src/app/api/skills/route.ts`: Removed non-existent columns (system_prompt, config, icon, builtin)
- `apps/web/src/app/api/plugins/route.ts`: Removed version column from GET/POST
- `apps/web/src/app/api/account/route.ts`: Added artifacts, plugins, device_sessions, model_usage to cleanup

### FASE 7 — Master Directive

- `CLAUDE.md`: NEW — 170+ item engineering directive

## Warnings (non-blocking)

- AvatarUpload: unused `getAccessToken`, `<img>` vs `<Image />`
- ChatPanel: missing deps in useCallback
- Loading: unused ReactNode import
- api-versioning.test: unused isVersionDeprecated

## Next Steps

- Run SQL migrations on Supabase
- Create avatars bucket in Supabase Storage
- Deploy to Vercel
- Smoke test: chat, terminal, neural graph, settings, canvas
