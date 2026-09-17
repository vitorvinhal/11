-- Galeria de mídia (uploads do usuário)
CREATE TABLE IF NOT EXISTS media (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  filename TEXT NOT NULL DEFAULT '',
  mime_type TEXT NOT NULL DEFAULT 'application/octet-stream',
  size BIGINT NOT NULL DEFAULT 0,
  url TEXT NOT NULL DEFAULT '',
  thumbnail_url TEXT,
  analysis TEXT,
  kind TEXT NOT NULL DEFAULT 'other' CHECK (kind IN ('image','video','audio','other')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE media ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "media_isolate" ON media;
CREATE POLICY "media_isolate" ON media FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_media_user ON media(user_id);
CREATE INDEX IF NOT EXISTS idx_media_kind ON media(kind);