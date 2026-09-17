/**
 * HealthController — endpoint leve que valida conectividade com o Supabase.
 * Usado por: /api/keep-alive (CI), start.sh do túnel e monitoramento.
 */
export declare class HealthController {
    private readonly supabase;
    health(): Promise<{
        status: string;
        ts: string;
    }>;
    keepAlive(): Promise<{
        status: string;
        db: boolean;
        latencyMs: number;
    }>;
}
