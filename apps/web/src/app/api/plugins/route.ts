/**
 * FASE 10A — Plugins API
 *
 * GET  /api/plugins — listar plugins instalados
 * POST /api/plugins — instalar/desinstalar plugin
 */

import { NextResponse } from 'next/server';
import { requireUser } from '../../../lib/auth-helpers';
import { loadRootEnv } from '../../../lib/server-env';
import { createClient } from '@supabase/supabase-js';
import { PluginRegistry } from '@11/ia';
import type { PluginDefinition } from '@11/ia';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface PluginBody {
  pluginId: string;
  action: 'install' | 'uninstall';
  config?: Record<string, unknown>;
}

/**
 * GET /api/plugins — Lista plugins do usuário
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
      .from('plugins')
      .select('id, name, description, version, author, enabled, config, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      plugins: (data ?? []).map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description,
        version: p.version,
        author: p.author,
        enabled: p.enabled,
        config: JSON.parse(p.config ?? '{}'),
        createdAt: p.created_at,
      })),
    });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

/**
 * POST /api/plugins — Instalar ou desinstalar plugin
 */
export async function POST(req: Request) {
  try {
    const auth = await requireUser(req);
    if (!auth) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 });
    }
    const { userId } = auth;

    const body = (await req.json()) as PluginBody;
    const { pluginId, action, config } = body;

    if (!pluginId || !action) {
      return NextResponse.json(
        { error: 'pluginId e action são obrigatórios' },
        { status: 400 }
      );
    }

    const sb = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
    );

    if (action === 'install') {
      // Verificar se já está instalado
      const { data: existing } = await sb
        .from('plugins')
        .select('id')
        .eq('id', pluginId)
        .eq('user_id', userId)
        .single();

      if (existing) {
        // Já instalado — apenas habilitar
        await sb
          .from('plugins')
          .update({ enabled: true, config: JSON.stringify(config ?? {}) })
          .eq('id', pluginId)
          .eq('user_id', userId);
      } else {
        // Novo plugin
        await sb.from('plugins').insert({
          id: pluginId,
          user_id: userId,
          name: pluginId,
          description: `Plugin ${pluginId}`,
          version: '1.0.0',
          author: 'community',
          enabled: true,
          config: JSON.stringify(config ?? {}),
        });
      }

      // Registrar no PluginRegistry em memória
      const definition: PluginDefinition = {
        id: pluginId,
        name: pluginId,
        description: `Plugin ${pluginId}`,
        version: '1.0.0',
        author: 'community',
        category: 'community',
        tools: [],
        config,
      };
      PluginRegistry.register(definition);

      return NextResponse.json({ success: true, action: 'installed', pluginId });
    }

    if (action === 'uninstall') {
      await sb
        .from('plugins')
        .update({ enabled: false })
        .eq('id', pluginId)
        .eq('user_id', userId);

      PluginRegistry.unregister(pluginId);

      return NextResponse.json({ success: true, action: 'uninstalled', pluginId });
    }

    return NextResponse.json(
      { error: 'action deve ser "install" ou "uninstall"' },
      { status: 400 }
    );
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
