-- Fix: run only the parts that failed (RLS policies)
-- Check and create policies only if they don't exist

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Users read own activity' AND tablename = 'session_activity_log') THEN
    CREATE POLICY "Users read own activity"
      ON session_activity_log FOR SELECT
      USING (auth.uid() = user_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Users insert own activity' AND tablename = 'session_activity_log') THEN
    CREATE POLICY "Users insert own activity"
      ON session_activity_log FOR INSERT
      WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Service role manages all activity' AND tablename = 'session_activity_log') THEN
    CREATE POLICY "Service role manages all activity"
      ON session_activity_log FOR ALL
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;
