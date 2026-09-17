import { Request } from 'express';
import { DeployBrokerService } from './deploy-broker.service';
/**
 * DeployController — governança de deploy.
 *  - IA só cria requests (pending) e NUNCA tem credenciais estáticas.
 *  - Humano aprova e recebe token curto de escopo mínimo.
 *  - Circuit breaker + rollback de um clique no mesmo controlador.
 */
export declare class DeployController {
    private readonly broker;
    constructor(broker: DeployBrokerService);
    request(req: Request, body: {
        action: 'vercel' | 'supabase' | 'database' | 'web';
        target?: string;
        metadata?: Record<string, unknown>;
    }): Promise<{
        requestId: string;
        status: string;
        message: string;
    }>;
    approve(requestId: string, req: Request): Promise<{
        token: string;
        expiresInMs: number;
    }>;
    execute(body: {
        token: string;
    }): Promise<unknown>;
    rollback(requestId: string): Promise<{
        ok: boolean;
        revision: string | null;
    }>;
    circuit(): {
        maxPerHour: number;
        recent: Record<string, number>;
    };
}
