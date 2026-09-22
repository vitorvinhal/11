/**
 * Executa operação remota nomeada via API.
 * Seguro: apenas leitura e build controlado.
 */
export declare function handleBridgeCommand(command: string, args?: string[], options?: Record<string, unknown>): Promise<any>;
export declare function askAgent(sessionId: string, userId: string, prompt: string): Promise<{
    text: string;
    provider: string;
}>;
