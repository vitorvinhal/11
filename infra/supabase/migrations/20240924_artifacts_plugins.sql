-- =============================================================================
-- Artifacts + Plugins persistidos (antes: localStorage / estado local)
-- =============================================================================

-- Artefatos gerados durante conversas (documentos, código, gráficos)
CREATE TABLE IF NOT EXISTS artifacts (
  id         TEXT PRIMARY KEY,
  user_id    UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name       TEXT NOT NULL,
  type       TEXT NOT NULL DEFAULT 'document'
             CHECK (type IN ('document','code','image','chart')),
  content    TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE artifacts ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "artifacts_isolate" ON artifacts;
CREATE POLICY "artifacts_isolate" ON artifacts
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_artifacts_user ON artifacts(user_id);

-- Plugins instalados pelo usuário
CREATE TABLE IF NOT EXISTS plugins (
  id         TEXT PRIMARY KEY,
  user_id    UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name       TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  category   TEXT NOT NULL DEFAULT '',
  author     TEXT NOT NULL DEFAULT '',
  icon       TEXT NOT NULL DEFAULT '',
  enabled    BOOLEAN NOT NULL DEFAULT true,
  metadata   JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE plugins ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "plugins_isolate" ON plugins;
CREATE POLICY "plugins_isolate" ON plugins
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX IF NOT EXISTS idx_plugins_user ON plugins(user_id);