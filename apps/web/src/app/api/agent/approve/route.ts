/**
 * FASE 7B — Tool Approval API
 *
 * Endpoint para aprovar/rejeitar ações pendentes do agente.
 * Fluxo: agente detecta DESTRUCTIVE → cria pending_action → humano aprova → executa
 */

import { NextResponse } from 'next/server';
import { requireUser } from '../../../../lib/auth-helpers';
import { loadRootEnv } from '../../../../lib/server-env';
import { createClient } from '@supabase/supabase-js';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface ApprovalBody {
  actionId: string;
  decision: 'approve' | 'reject';
}

/**
 * POST /api/agent/approve — Aprovar ou rejeitar uma ação pendente
 */
export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }
    const { userId } = auth;

    const body = (await req.json()) as ApprovalBody;
    const { actionId, decision } = body;

    if (!actionId || !decision) {
      return NextResponse.json(
        { error: 'actionId e decision são obrigatórios' },
        { status: 400 }
      );
    }

    if (!['approve', 'reject'].includes(decision)) {
      return NextResponse.json(
        { error: 'decision deve ser "approve" ou "reject"' },
        { status: 400 }
      );
    }

    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
    );

    // Buscar ação pendente com ownership check
    const { data: pending, error: fetchError } = await sb
      .from('pending_actions')
      .select('*')
      .eq('id', actionId)
      .eq('user_id', userId)
      .eq('status', 'pending')
      .single();

    if (fetchError || !pending) {
      return NextResponse.json(
        { error: 'Ação pendente não encontrada ou já processada' },
        { status: 404 }
      );
    }

    // Atualizar status
    const newStatus = decision === 'approve' ? 'approved' : 'rejected';
    const { error: updateError } = await sb
      .from('pending_actions')
      .update({
        status: newStatus,
        approved_at: new Date().toISOString(),
        approved_by: userId,
      })
      .eq('id', actionId);

    if (updateError) {
      return NextResponse.json(
        { error: `Falha ao atualizar: ${updateError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      actionId,
      decision: newStatus,
      action: pending.action,
      riskLevel: pending.risk_level,
    });
  } catch (err) {
    console.error('[agent-approve] Erro:', err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}

/**
 * GET /api/agent/approve — Listar ações pendentes do usuário
 */
export async function GET(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }
    const { userId } = auth;

    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
    );

    const { data, error } = await sb
      .from('pending_actions')
      .select('id, action, risk_level, status, params, created_at')
      .eq('user_id', userId)
      .eq('status', 'pending')
      .order('created_at', { ascending: false })
      .limit(20);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      pending: (data ?? []).map((d) => ({
        id: d.id,
        action: d.action,
        riskLevel: d.risk_level,
        status: d.status,
        params: JSON.parse(d.params ?? '{}'),
        createdAt: d.created_at,
      })),
    });
  } catch (err) {
    console.error('[agent-approve] Erro:', err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
