/**
 * FASE 10B — Skills API
 *
 * GET  /api/skills — listar skills disponíveis e instaladas
 * POST /api/skills — habilitar/desabilitar skill
 */

import { NextResponse } from 'next/server';
import { requireUser } from '../../../lib/auth-helpers';
import { loadRootEnv } from '../../../lib/server-env';
import { createClient } from '@supabase/supabase-js';
import { SkillManager, BUILTIN_SKILLS } from '@11/ia';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface SkillBody {
  skillId: string;
  action: 'enable' | 'disable';
}

/**
 * GET /api/skills — Lista skills disponíveis
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

    // Skills habilitadas pelo usuário
    const { data: userSkills } = await sb
      .from('skills')
      .select('id, enabled')
      .eq('user_id', userId);

    const enabledIds = new Set(
      (userSkills ?? []).filter((s) => s.enabled).map((s) => s.id)
    );

    // Combinar built-in + customizadas
    const allSkills = [
      ...BUILTIN_SKILLS.map((s) => ({
        id: s.id,
        name: s.name,
        description: s.description,
        tools: s.tools,
        enabled: enabledIds.has(s.id),
        builtin: true,
      })),
    ];

    return NextResponse.json({ skills: allSkills });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

/**
 * POST /api/skills — Habilitar ou desabilitar skill
 */
export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }
    const { userId } = auth;

    const body = (await req.json()) as SkillBody;
    const { skillId, action } = body;

    if (!skillId || !action) {
      return NextResponse.json(
        { error: 'skillId e action são obrigatórios' },
        { status: 400 }
      );
    }

    // Verificar se a skill existe
    const skill = SkillManager.getSkill(skillId);
    if (!skill) {
      return NextResponse.json(
        { error: `Skill não encontrada: ${skillId}` },
        { status: 404 }
      );
    }

    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
    );

    if (action === 'enable') {
      await sb.from('skills').upsert({
        id: skillId,
        user_id: userId,
        name: skill.name,
        description: skill.description,
        system_prompt: skill.systemPrompt,
        tools: JSON.stringify(skill.tools),
        config: JSON.stringify(skill.config),
        enabled: true,
      });

      return NextResponse.json({ success: true, action: 'enabled', skillId });
    }

    if (action === 'disable') {
      await sb
        .from('skills')
        .update({ enabled: false })
        .eq('id', skillId)
        .eq('user_id', userId);

      return NextResponse.json({ success: true, action: 'disabled', skillId });
    }

    return NextResponse.json(
      { error: 'action deve ser "enable" ou "disable"' },
      { status: 400 }
    );
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
