-- Migration: add version and app columns to device_sessions

ALTER TABLE device_sessions
  ADD COLUMN IF NOT EXISTS app_version TEXT DEFAULT 'unknown',
  ADD COLUMN IF NOT EXISTS app_name TEXT DEFAULT 'web';

-- Backfill existing rows
UPDATE device_sessions SET app_version = 'unknown' WHERE app_version IS NULL;
UPDATE device_sessions SET app_name = 'web' WHERE app_name IS NULL;
