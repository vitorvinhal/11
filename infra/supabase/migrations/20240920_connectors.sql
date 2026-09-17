-- Migration: Create connectors table for OAuth tokens
CREATE TABLE IF NOT EXISTS connectors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  provider TEXT NOT NULL,
  access_token TEXT,
  refresh_token TEXT,
  expires_at TIMESTAMPTZ,
  scope TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, provider)
);

ALTER TABLE connectors ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "connectors_isolated" ON connectors;
CREATE POLICY "connectors_isolated" ON connectors FOR ALL USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_connectors_user_provider ON connectors(user_id, provider);