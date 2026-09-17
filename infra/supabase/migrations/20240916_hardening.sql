-- =============================================================================
-- Hardening: Governance, Audit, ModelGateway e Cleanup de Camuflagem
-- Aplicar DEPOIS de 20240915_init.sql
-- =============================================================================

-- -------------------------------------------------------------------------------
-- 0) LIMPEZA — Remover Sistema de Camuflagem de Resultados
--    Guarda idempotente: se em algum ambiente remoto existir a coluna
--    `profiles.camuflagem_resultados` (ou regra relacionada), remove.
-- -------------------------------------------------------------------------------
alter table if exists profiles
  drop column if exists camuflagem_resultados;

-- Policies só podem ser dropadas se a relação existir (guarda com to_regclass).
do $$
begin
  if to_regclass('public.profiles') is not null then
    drop policy if exists "profiles_camuflagem_self" on profiles;
    drop policy if exists "profiles_camuflagem_admin" on profiles;
  end if;
end
$$;

-- -------------------------------------------------------------------------------
-- 1) AUDIT LOG — operações remotas do bridge (append-only)
--    RLS: insert para qualquer autenticado/logado; select apenas para admin.
--    Sem update/delete → append-only garantido por policies ausentes.
-- -------------------------------------------------------------------------------
create table if not exists bridge_audit_log (
  id          bigserial primary key,
  user_id     uuid,
  operation   text        not null,
  payload     jsonb       not null default '{}'::jsonb,
  created_at  timestamptz not null default now()
);

alter table bridge_audit_log enable row level security;

create policy "bridge_audit_insert" on bridge_audit_log
  for insert
  to authenticated, anon
  with check (true);

-- select apenas via service_role (admin). Nenhuma policy read/update/delete
-- para roles de app → audit log é append-only e imutável por clientes.

-- -------------------------------------------------------------------------------
-- 2) GOVERNANÇA DE DEPLOY — broker de tokens de curta duração + aprovação humana
-- -------------------------------------------------------------------------------
create table if not exists deploy_requests (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid references users(id),
  action      text not null check (action in ('vercel','supabase','database','web')),
  status      text not null default 'pending'
              check (status in ('pending','approved','rejected','released')),
  requested_at timestamptz not null default now(),
  decided_at   timestamptz,
  decided_by   uuid,
  metadata     jsonb not null default '{}'::jsonb
);

create table if not exists deploy_tokens (
  id         uuid primary key default gen_random_uuid(),
  request_id uuid references deploy_requests(id),
  scope      text not null,
  token_hash text not null,
  expires_at timestamptz not null,
  used       boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists deploy_history (
  id             bigserial primary key,
  request_id     uuid references deploy_requests(id),
  user_id        uuid,
  action         text not null,
  target         text,
  revision       text,
  status         text not null default 'started',
  created_at     timestamptz not null default now(),
  finished_at    timestamptz
);

alter table deploy_requests enable row level security;
alter table deploy_tokens enable row level security;
alter table deploy_history enable row level security;

-- apenas o dono vê seus pedidos; admin vê todos (via service_role/RPC)
create policy "deploy_requests_owner_read" on deploy_requests
  for select to authenticated
  using (auth.uid() = user_id);

create policy "deploy_history_owner_read" on deploy_history
  for select to authenticated
  using (auth.uid() = user_id);

-- -------------------------------------------------------------------------------
-- 3) MODELGATEWAY — pinagem de provedor por sessão + circuit breaker de custo
-- -------------------------------------------------------------------------------
create table if not exists model_sessions (
  session_id     uuid primary key default gen_random_uuid(),
  user_id        uuid references users(id),
  provider       text not null,
  pinned_until   timestamptz,
  reason         text,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

create table if not exists model_usage (
  id           bigserial primary key,
  session_id   uuid references model_sessions(session_id),
  provider     text not null,
  input_tokens bigint not null default 0,
  output_tokens bigint not null default 0,
  cost_units   numeric not null default 0,
  invoked_at   timestamptz not null default now()
);

alter table model_sessions enable row level security;
alter table model_usage enable row level security;

create policy "model_sessions_self" on model_sessions
  for select to authenticated
  using (auth.uid() = user_id);

create policy "model_usage_self" on model_usage
  for select to authenticated
  using (auth.uid() = (select user_id from model_sessions where session_id = model_usage.session_id));

-- -------------------------------------------------------------------------------
-- 4) KEEP-ALIVE — RPC `select_one` (SELECT 1) para validar conectividade
-- -------------------------------------------------------------------------------
create or replace function public.select_one()
returns integer
language sql
stable
security invoker
as $$
  select 1;
$$;

grant execute on function public.select_one() to anon, authenticated;