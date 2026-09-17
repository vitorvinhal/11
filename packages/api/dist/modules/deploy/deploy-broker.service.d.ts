export type DeployAction = 'vercel' | 'supabase' | 'database' | 'web';
export interface DeployRequestInput {
    action: DeployAction;
    target?: string;
    metadata?: Record<string, unknown>;
}
/**
 * DeployBrokerService — substitui credenciais estáticas por tokens de curta duração
 * e escopo mínimo. Aprovação humana é obrigatória antes de qualquer release.
 * Inclui circuit breaker (máx. N deploys/hora) e rollback de um clique.
 */
export declare class DeployBrokerService {
    private readonly supabase;
    private readonly circuit;
    constructor();
    /** 1) IA solicita deploy: cria request pendente. */
    requestDeploy(userId: string, input: DeployRequestInput): Promise<{
        requestId: string;
        status: string;
        message: string;
    }>;
    /** 2) Humano aprova: emite token curto, escopo mínimo, com hash armazenado. */
    approveDeploy(requestId: string, approverId: string): Promise<{
        token: string;
        expiresInMs: number;
    }>;
    /** 3) O token gerado permite 1 execução de release (bandeira `used`). */
    executeWithToken(token: string, runner: (scope: DeployAction) => Promise<{
        ok: boolean;
        revision?: string;
    }>): Promise<unknown>;
    /** 4) Rollback de um clique: regrava deploy anterior (revision) no histórico. */
    rollback(requestId: string): Promise<{
        ok: boolean;
        revision: string | null;
    }>;
    /** Circuit breaker: máximo N deploys por janela de 1h. */
    private assertNotTripped;
    private recordDeploy;
    circuitStatus(): {
        maxPerHour: number;
        recent: Record<string, number>;
    };
}
