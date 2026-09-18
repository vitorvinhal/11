-- =============================================================================
-- FASE 4C — Checkpoint & Rollback tables
-- =============================================================================

-- Checkpoints: estado ANTES de ações modificadoras (para rollback)
CREATE TABLE IF NOT EXISTS checkpoints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  action_id TEXT NOT NULL,
  tenant_id UUID,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  target_type TEXT NOT NULL,
  target_id TEXT NOT NULL,
  before_state JSONB NOT NULL DEFAULT '{}',
  storage_path TEXT,
  status TEXT NOT NULL DEFAULT 'active'
    CHECK (status IN ('active', 'restored', 'expired', 'committed')),
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE checkpoints ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "checkpoints_isolate" ON checkpoints;
CREATE POLICY "checkpoints_isolate" ON checkpoints
  FOR ALL USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_checkpoints_user ON checkpoints(user_id, status);
CREATE INDEX IF NOT EXISTS idx_checkpoints_expires ON checkpoints(expires_at) WHERE status = 'active';

-- Pending actions: fila de aprovação para ações de risco
CREATE TABLE IF NOT EXISTS pending_actions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  action TEXT NOT NULL,
  risk_level TEXT NOT NULL,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  tenant_id UUID,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'rejected', 'executed', 'expired')),
  checkpoint_id UUID REFERENCES checkpoints(id) ON DELETE SET NULL,
  params JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  approved_at TIMESTAMPTZ,
  approved_by UUID
);

ALTER TABLE pending_actions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "pending_actions_isolate" ON pending_actions;
CREATE POLICY "pending_actions_isolate" ON pending_actions
  FOR ALL USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_pending_actions_user ON pending_actions(user_id, status);
CREATE INDEX IF NOT EXISTS idx_pending_actions_pending ON pending_actions(created_at) WHERE status = 'pending';
