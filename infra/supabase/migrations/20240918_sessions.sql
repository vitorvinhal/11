-- =============================================================================
-- Sessões de chat + histórico persistente por sessão
-- =============================================================================

-- sessions: agrupador de conversas por usuário
create table if not exists sessions (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid references users(id),
  title       text not null default 'Nova conversa',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

alter table sessions enable row level security;

drop policy if exists "sessions_all_own" on sessions;
create policy "sessions_all_own" on sessions
  for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- messages: adiciona session_id (relaciona mensagem à sessão)
alter table messages add column if not exists session_id uuid references sessions(id);
alter table messages add column if not exists provider text;

-- índice para consulta de histórico rápido
create index if not exists idx_messages_session on messages (session_id, created_at);