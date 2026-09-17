import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Deploy tool — governado pelo DeployBroker (ver packages/api/src/modules/deploy).
 *  - NUNCA usa credenciais estáticas de Vercel/Supabase.
 *  - Solicita request (pending) → humano aprova → recebe token curto.
 *  - Token é utilizado 1x via runner.
 */

let _supabase: SupabaseClient | null = null;
function supa(): SupabaseClient {
  if (!_supabase) {
    _supabase = createClient(
      process.env.SUPABASE_URL ?? '',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
    );
  }
  return _supabase;
}

export async function requestDeploy(
  action: 'vercel' | 'supabase' | 'database' | 'web',
  metadata: Record<string, unknown> = {}
): Promise<{ requestId: string; status: string }> {
  const { data, error } = await supa()
    .from('deploy_requests')
    .insert({ user_id: metadata.sub ?? 'agent', action, metadata })
    .select()
    .single();
  if (error) throw new Error(`Falha ao solicitar deploy: ${error.message}`);
  return { requestId: (data as { id: string }).id, status: 'pending' };
}

export async function runDeploy(token: string, scope: 'vercel' | 'supabase'): Promise<{ ok: boolean }> {
  const url = process.env.API_URL ?? 'http://localhost:4000';
  const res = await fetch(`${url}/deploy/execute`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ token, scope }),
  });
  if (!res.ok) throw new Error(`deploy executado com erro ${res.status}`);
  return { ok: true };
}