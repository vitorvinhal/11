-- =============================================================================
-- Multi-Tenant RLS: isolamento estrito por auth.uid() — sem perfis fixos.
-- Qualquer usuário autenticado cria sua conta e só acessa os próprios dados.
-- =============================================================================

-- users: owner = auth.uid(); sem anon inserts não-autenticados.
alter table users enable row level security;

drop policy if exists "users_select_own" on users;
create policy "users_select_own" on users
  for select to authenticated
  using (id = auth.uid());

drop policy if exists "users_insert_own" on users;
create policy "users_insert_own" on users
  for insert to authenticated
  with check (id = auth.uid());

-- personas: dono = auth.uid()
alter table personas enable row level security;

drop policy if exists "personas_select_own" on personas;
create policy "personas_select_own" on personas
  for select to authenticated
  using (user_id = auth.uid());

-- messages: isoladas por usuário
alter table messages enable row level security;

drop policy if exists "messages_all_own" on messages;
create policy "messages_all_own" on messages
  for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- embeddings: isolados por usuário
alter table embeddings enable row level security;

drop policy if exists "embeddings_all_own" on embeddings;
create policy "embeddings_all_own" on embeddings
  for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

-- products (loja): por coluna owner_id
alter table products add column if not exists owner_id uuid default auth.uid();

alter table products enable row level security;

drop policy if exists "products_select_own" on products;
create policy "products_select_own" on products
  for select to authenticated
  using (owner_id = auth.uid());

drop policy if exists "products_insert_own" on products;
create policy "products_insert_own" on products
  for insert to authenticated
  with check (owner_id = auth.uid());

drop policy if exists "products_update_own" on products;
create policy "products_update_own" on products
  for update to authenticated
  using (owner_id = auth.uid());

-- agent_states: isolado por usuário
alter table agent_states enable row level security;

drop policy if exists "agent_states_all_own" on agent_states;
create policy "agent_states_all_own" on agent_states
  for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());