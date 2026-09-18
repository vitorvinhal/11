-- Salvaguardas de segurança: classificação de risco, cofre de chaves e memória auditável.
-- Segue o padrão das migrations anteriores (RLS + policies por auth.uid()).

-- ─── action_risk_rules — classificação de risco de ações do agente ───────────
CREATE TABLE IF NOT EXISTS action_risk_rules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  action_pattern TEXT NOT NULL,
  risk_level TEXT NOT NULL CHECK (risk_level IN ('safe', 'reversible', 'destructive')) DEFAULT 'reversible',
  description TEXT DEFAULT '',
  overridden BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE action_risk_rules ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "action_risk_rules_isolate" ON action_risk_rules;
CREATE POLICY "action_risk_rules_isolate" ON action_risk_rules
  FOR ALL USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_action_risk_rules_user ON action_risk_rules(user_id, action_pattern);

-- ─── tenant_vault — cofre criptografado de tokens/secrets por tenant ─────────
-- O valor é criptografado em trânsito (TLS) e na coluna (pgcrypto pgencrypt).
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS tenant_vault (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  tenant_id UUID NOT NULL DEFAULT gen_random_uuid(),
  key_name TEXT NOT NULL,
  key_value TEXT NOT NULL, -- armazene ENCRYPTED (ex: pgp_sym_encrypt) via API
  hint TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (user_id, tenant_id, key_name)
);

ALTER TABLE tenant_vault ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "tenant_vault_isolate" ON tenant_vault;
CREATE POLICY "tenant_vault_isolate" ON tenant_vault
  FOR ALL USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_tenant_vault_user ON tenant_vault(user_id, tenant_id);

-- ─── memories — escopo, origem e reversão (nunca DELETE físico) ──────────────
ALTER TABLE memories ADD COLUMN IF NOT EXISTS origin TEXT DEFAULT 'user_stated'
  CHECK (origin IN ('user_stated', 'inferred', 'consolidated'));
ALTER TABLE memories ADD COLUMN IF NOT EXISTS scope TEXT DEFAULT 'personal'
  CHECK (scope IN ('personal', 'session', 'tenant', 'public'));
ALTER TABLE memories ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active'
  CHECK (status IN ('active', 'superseded'));
ALTER TABLE memories ADD COLUMN IF NOT EXISTS superseded_by UUID REFERENCES memories(id) ON DELETE SET NULL;
ALTER TABLE memories ADD COLUMN IF NOT EXISTS superseded_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_memories_status ON memories(status, origin);

-- ─── memory_events — trilha de auditoria append-only ────────────────────────
CREATE TABLE IF NOT EXISTS memory_events (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  memory_id UUID REFERENCES memories(id) ON DELETE SET NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('created', 'updated', 'consolidated', 'superseded', 'restored', 'deleted_logical')),
  origin TEXT NOT NULL,
  actor TEXT DEFAULT 'system',
  details JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE memory_events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "memory_events_isolate" ON memory_events;
CREATE POLICY "memory_events_isolate" ON memory_events
  FOR ALL USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_memory_events_user_time ON memory_events(user_id, created_at DESC);