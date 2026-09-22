-- Migration: Device jobs — expires_at + approval audit
-- Adiciona TTL para aprovações pendentes e audit trail de decisões.

-- Coluna expires_at para TTL de aprovações
ALTER TABLE device_jobs ADD COLUMN IF NOT EXISTS expires_at TIMESTAMPTZ DEFAULT NULL;

-- Índice para queries de expiração eficientes
CREATE INDEX IF NOT EXISTS idx_device_jobs_expires_at ON device_jobs(expires_at)
  WHERE status = 'awaiting_approval';

-- Tabela de audit trail de aprovações
CREATE TABLE IF NOT EXISTS device_job_approvals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES device_jobs(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  action TEXT NOT NULL CHECK (action IN ('approved', 'rejected', 'expired')),
  reason TEXT DEFAULT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_device_job_approvals_job_id ON device_job_approvals(job_id);
CREATE INDEX IF NOT EXISTS idx_device_job_approvals_user_id ON device_job_approvals(user_id);

ALTER TABLE device_job_approvals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own approval logs"
  ON device_job_approvals FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own approval logs"
  ON device_job_approvals FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role manages all approval logs"
  ON device_job_approvals FOR ALL
  USING (true)
  WITH CHECK (true);
