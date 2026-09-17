import { NextResponse } from 'next/server';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export interface AuthResult {
  sb: SupabaseClient;
  userId: string;
}

/**
 * Extrai o JWT do header Authorization, valida com Supabase e retorna
 * o client autenticado + userId. Retorna null se o token for inválido.
 * Usa a ANON key para que o RLS seja sempre aplicado.
 */
export async function requireUser(req: Request): Promise<AuthResult | null> {
  const auth = req.headers.get('authorization') ?? '';
  const token = auth.replace('Bearer ', '').trim();
  if (!token) return null;

  const sb = createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: { Authorization: `Bearer ${token}` } },
  });

  const { data } = await sb.auth.getUser();
  if (!data?.user?.id) return null;

  return { sb, userId: data.user.id };
}

/**
 * Retorna 401 se o usuário não estiver autenticado.
 * Uso: const auth = await requireUserOrUnauthorized(req);
 *       if (!auth) return; // já retornou 401
 */
export async function requireUserOrUnauthorized(
  req: Request,
): Promise<AuthResult | NextResponse> {
  const result = await requireUser(req);
  if (!result) {
    return NextResponse.json(
      { error: 'Não autenticado' },
      { status: 401 },
    );
  }
  return result;
}

/**
 * Verifica que o registro pertence ao usuário autenticado.
 * Retorna o userId se ok, null se não.
 */
export async function assertRowOwnership(
  sb: SupabaseClient,
  table: string,
  rowId: string,
  userId: string,
): Promise<boolean> {
  const { data } = await sb
    .from(table)
    .select('user_id')
    .eq('id', rowId)
    .single();
  return data?.user_id === userId;
}
