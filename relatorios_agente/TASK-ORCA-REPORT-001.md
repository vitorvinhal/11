# GAP ANALYSIS – Orca integration

## Current state

- `ElevenOrca.tsx` loads ESM bundle `public/orca-inline/orca.js` (renderer only).
- Backend (`node-pty`, git worktrees, parallel agents) **absent**.
- `/api/code` implements session‑based command execution via in‑memory store and `child_process.spawn`.
- `/api/code` runs as Next.js API route → serverless function; no long‑living process, no PTY, no persistent state across invocations.
- Mobile (Capacitor) and desktop‑Rust layers untouched.

## Missing Orca features

1. PTY allocation for interactive terminal.
2. Persistent worktree handling (git checkout, branch management).
3. Agent orchestration (parallel agents, session tracking).
4. Real‑time streaming of PTY output (WebSocket/SSE expects continuous stream).
5. Security sandbox for command whitelist – already present but limited to simple exec.

## Decision

- **Run separate Node Orca server** (`pnpm --filter orca start` placeholder) as long‑living process on `localhost:xxxx`.
- Route `/api/code` will proxy to this server for exec/pty, preserving existing auth/rate‑limit checks.
- Rationale: serverless API cannot keep PTY alive; spawning separate process aligns with Router9/PC‑Agent model and avoids breaking existing function‑as‑a‑service constraints.

## Implementation plan

1. Add `apps/orca` workspace (if not exists) with minimal Express server exposing `/orca/exec` that uses `node-pty` and existing `executeCommand` logic.
2. Update `/api/code` handlers to forward approved sessions to Orca server via HTTP (maintain auth).
3. Adjust `ElevenOrca.tsx` to point to new backend endpoint (`/orca/exec`) – bundle remains unchanged.
4. Update `Sidebar.tsx` NavItem `code` visibility: keep for desktop‑app/web, hide on mobile‑app (read‑only mode).
5. Add lightweight read‑only mobile API (`/api/code/read`) returning session output only.
6. Create report file (this one) and commit with version bump and changelog entry.

## Next steps

- Scaffold Orca server.
- Implement proxy in `/api/code`.
- Modify UI visibility.
- Run lint, test, build.
- Update CHANGELOG, bump version.
