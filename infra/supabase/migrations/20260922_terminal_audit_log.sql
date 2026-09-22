-- Migration: Terminal audit log
-- Registra todas as execuções de comandos para auditoria e compliance.

CREATE TABLE IF NOT EXISTS terminal_audit_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  command TEXT NOT NULL,
  cwd TEXT NOT NULL,
  exit_code INTEGER DEFAULT NULL,
  output_bytes INTEGER DEFAULT 0,
  blocked BOOLEAN NOT NULL DEFAULT false,
  block_reason TEXT DEFAULT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_terminal_audit_user_id ON terminal_audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_terminal_audit_created_at ON terminal_audit_log(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_terminal_audit_blocked ON terminal_audit_log(blocked) WHERE blocked = true;

ALTER TABLE terminal_audit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own audit logs"
  ON terminal_audit_log FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own audit logs"
  ON terminal_audit_log FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role manages all audit logs"
  ON terminal_audit_log FOR ALL
  USING (true)
  WITH CHECK (true);
