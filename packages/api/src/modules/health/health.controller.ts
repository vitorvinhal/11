import { Controller, Get } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

/**
 * HealthController — endpoint leve que valida conectividade com o Supabase.
 * Usado por: /api/keep-alive (CI), start.sh do túnel e monitoramento.
 */
@Controller()
export class HealthController {
  private readonly supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY ?? ''
  );

  @Get('health')
  async health() {
    return { status: 'ok', ts: new Date().toISOString() };
  }

  @Get('keep-alive')
  async keepAlive() {
    const started = Date.now();
    try {
      await this.supabase.rpc('select_one'); // fallback abaixo se rpc não existir
      return { status: 'ok', db: true, latencyMs: Date.now() - started };
    } catch {
      // RPC pode não existir ainda — `{ data }` consulta trivial para validar conexão.
      const { error } = await this.supabase.from('agent_states').select('user_id').limit(1);
      if (error) throw error;
      return { status: 'ok', db: true, latencyMs: Date.now() - started };
    }
  }
}