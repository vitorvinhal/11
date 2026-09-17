import { createClient, SupabaseClient } from '@supabase/supabase-js';

let cached: SupabaseClient | null = null;

export function getServerClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ?? '';
  if (!url || !key) return null;
  if (cached) return cached;
  cached = createClient(url, key);
  return cached;
}

/**
 * Cliente autenticado com o JWT do usuário (header Authorization).
 * Usa a ANON key como base para que o RLS seja SEMPRE aplicado — sem token,
 * nada é retornado (antes usava service role e vazava todos os dados).
 * Operações administrativas usam `getServerClient()` (service role).
 */
export function getAuthClient(req: Request): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
  const auth = req.headers.get('authorization') ?? '';
  const token = auth.replace('Bearer ', '').trim();
  return createClient(url, key, {
    global: { headers: token ? { Authorization: `Bearer ${token}` } : {} },
  });
}