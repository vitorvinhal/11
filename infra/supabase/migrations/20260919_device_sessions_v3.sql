-- Migration v3: display_name, geolocation, activity log

-- Add display_name for custom session labels
ALTER TABLE device_sessions
  ADD COLUMN IF NOT EXISTS display_name TEXT DEFAULT NULL;

-- Add IP and location for geolocation
ALTER TABLE device_sessions
  ADD COLUMN IF NOT EXISTS ip_address TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS city TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS country TEXT DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS country_code TEXT DEFAULT NULL;

-- Session activity log for timeline
CREATE TABLE IF NOT EXISTS session_activity_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES device_sessions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  action TEXT NOT NULL DEFAULT 'active',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_session_activity_session_id ON session_activity_log(session_id);
CREATE INDEX IF NOT EXISTS idx_session_activity_created_at ON session_activity_log(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_session_activity_user_id ON session_activity_log(user_id);

-- RLS for activity log
ALTER TABLE session_activity_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users read own activity"
  ON session_activity_log FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users insert own activity"
  ON session_activity_log FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role manages all activity"
  ON session_activity_log FOR ALL
  USING (true)
  WITH CHECK (true);
