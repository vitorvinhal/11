export declare function requestDeploy(action: 'vercel' | 'supabase' | 'database' | 'web', metadata?: Record<string, unknown>): Promise<{
    requestId: string;
    status: string;
}>;
export declare function runDeploy(token: string, scope: 'vercel' | 'supabase'): Promise<{
    ok: boolean;
}>;
