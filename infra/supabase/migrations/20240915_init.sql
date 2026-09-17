-- init migration for Supabase

-- usuários
create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  role text default 'user'
);

-- personas (mirroring)
create table personas (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  style jsonb,
  created_at timestamp default now()
);

-- mensagens rápidas (cache local será SQLite; aqui só para histórico persistente)
create table messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  role text,
  content text,
  created_at timestamp default now()
);

-- embeddings vetoriais (pgvector)
create extension if not exists vector;
create table embeddings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id),
  embedding vector(768),
  metadata jsonb,
  created_at timestamp default now()
);

-- loja Renata Modas
create table products (
  id uuid primary key default gen_random_uuid(),
  image_url text,
  description text,
  price numeric,
  created_at timestamp default now()
);

-- estado de humor da IA
create type mood as enum ('calma','caotica','focada','prestativa');
create table agent_states (
  user_id uuid references users(id),
  mood mood default 'calma',
  updated_at timestamp default now()
);

-- regras de acesso cruzado
create table access_rules (
  requester_id uuid references users(id),
  target_id uuid references users(id),
  scope text check (scope in ('messages','embeddings')),
  allowed boolean default false,
  primary key (requester_id, target_id, scope)
);
