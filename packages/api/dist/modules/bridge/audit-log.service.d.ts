/**
 * AuditLogService — grava operações remotas em `bridge_audit_log`.
 * A tabela é append-only (RLS sem UPDATE/DELETE para clientes).
 */
export declare class AuditLogService {
    private readonly supabase;
    record(userId: string | undefined, operation: string, payload: unknown): Promise<void>;
}
