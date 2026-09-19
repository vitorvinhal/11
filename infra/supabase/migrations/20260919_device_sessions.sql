-- Migration: device_sessions table for tracking active sessions
-- Run after existing migrations

CREATE TABLE IF NOT EXISTS device_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  platform TEXT NOT NULL DEFAULT 'unknown',
  device TEXT NOT NULL DEFAULT 'unknown',
  browser TEXT NOT NULL DEFAULT 'unknown',
  last_active TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for fast user lookups
CREATE INDEX IF NOT EXISTS idx_device_sessions_user_id ON device_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_device_sessions_last_active ON device_sessions(last_active DESC);

-- RLS policies
ALTER TABLE device_sessions ENABLE ROW LEVEL SECURITY;

-- Users can read their own sessions
CREATE POLICY "Users read own sessions"
  ON device_sessions FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own sessions
CREATE POLICY "Users insert own sessions"
  ON device_sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own sessions
CREATE POLICY "Users update own sessions"
  ON device_sessions FOR UPDATE
  USING (auth.uid() = user_id);

-- Users can delete their own sessions
CREATE POLICY "Users delete own sessions"
  ON device_sessions FOR DELETE
  USING (auth.uid() = user_id);

-- Service role can manage all (for API routes)
CREATE POLICY "Service role manages all sessions"
  ON device_sessions FOR ALL
  USING (true)
  WITH CHECK (true);
