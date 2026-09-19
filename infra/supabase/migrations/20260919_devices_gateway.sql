-- Migration: Devices do Agente de Dispositivo (PC / Mobile)
-- Tabela `devices`: pareamento real entre apps nativos e a nuvem.

CREATE TABLE IF NOT EXISTS devices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  device_id TEXT NOT NULL,
  platform TEXT NOT NULL CHECK (platform IN ('desktop-app', 'mobile-app')),
  display_name TEXT DEFAULT NULL,
  os TEXT DEFAULT NULL,
  os_version TEXT DEFAULT NULL,
  model TEXT DEFAULT NULL,
  app_version TEXT DEFAULT NULL,
  device_secret_hash TEXT DEFAULT NULL,
  last_seen TIMESTAMPTZ DEFAULT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_devices_user_device ON devices(user_id, device_id);
CREATE INDEX IF NOT EXISTS idx_devices_user_id ON devices(user_id);
CREATE INDEX IF NOT EXISTS idx_devices_last_seen ON devices(last_seen DESC);

-- RLS
ALTER TABLE devices ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own devices"
  ON devices FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own devices"
  ON devices FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own devices"
  ON devices FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users delete own devices"
  ON devices FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Service role manages all devices"
  ON devices FOR ALL
  USING (true)
  WITH CHECK (true);

-- Keep updated_at fresh (service role / trigger)
CREATE OR REPLACE FUNCTION trigger_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_devices_updated_at ON devices;
CREATE TRIGGER trg_devices_updated_at
  BEFORE UPDATE ON devices
  FOR EACH ROW
  EXECUTE FUNCTION trigger_set_updated_at();

-- ── Fila de jobs do agente de dispositivo ─────────────────────────────────
-- Transporte Vercel-compatível: dispositivo faz polling e executa tools.
CREATE TABLE IF NOT EXISTS device_jobs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  device_id TEXT NOT NULL,
  name TEXT NOT NULL,
  args JSONB DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'queued'
    CHECK (status IN ('queued','awaiting_approval','running','completed','failed','rejected','cancelled','timeout')),
  requires_approval BOOLEAN NOT NULL DEFAULT false,
  risk TEXT DEFAULT NULL,
  result JSONB DEFAULT NULL,
  error TEXT DEFAULT NULL,
  request_id TEXT DEFAULT NULL,
  delivered_at TIMESTAMPTZ DEFAULT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  started_at TIMESTAMPTZ DEFAULT NULL,
  completed_at TIMESTAMPTZ DEFAULT NULL
);

CREATE INDEX IF NOT EXISTS idx_device_jobs_device_status ON device_jobs(device_id, status);
CREATE INDEX IF NOT EXISTS idx_device_jobs_user_id ON device_jobs(user_id);
CREATE INDEX IF NOT EXISTS idx_device_jobs_created_at ON device_jobs(created_at DESC);

ALTER TABLE device_jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own jobs"
  ON device_jobs FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own jobs"
  ON device_jobs FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users update own jobs"
  ON device_jobs FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users delete own jobs"
  ON device_jobs FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Service role manages all jobs"
  ON device_jobs FOR ALL
  USING (true)
  WITH CHECK (true);