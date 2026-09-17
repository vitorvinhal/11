import { Injectable, Scope } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

/**
 * AuditLogService — grava operações remotas em `bridge_audit_log`.
 * A tabela é append-only (RLS sem UPDATE/DELETE para clientes).
 */
@Injectable({ scope: Scope.DEFAULT })
export class AuditLogService {
  private readonly supabase = createClient(
    process.env.SUPABASE_URL ?? '',
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_ANON_KEY ?? ''
  );

  async record(userId: string | undefined, operation: string, payload: unknown): Promise<void> {
    try {
      await this.supabase.from('bridge_audit_log').insert({
        user_id: userId ?? null,
        operation,
        payload: typeof payload === 'string' ? { value: payload } : payload,
      });
    } catch (err) {
      // Auditoria é best-effort: falha não deve derrubar a operação.
      console.error('[audit] falha ao gravar log', (err as Error).message);
    }
  }
}