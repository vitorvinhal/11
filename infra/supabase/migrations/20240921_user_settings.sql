-- Migration: Create user_settings table
CREATE TABLE IF NOT EXISTS user_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  settings JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "user_settings_isolated" ON user_settings;
CREATE POLICY "user_settings_isolated" ON user_settings FOR ALL USING (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_user_settings_user ON user_settings(user_id);