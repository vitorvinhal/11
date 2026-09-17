/**
 * Bridge tool — delega comandos remotos nomeados para a API (accuracy>=4) e
 * conversa ao ModelGateway. Não executa shell arbitrário aqui.
 */
export declare function handleBridgeCommand(command: string, args: string[]): Promise<{
    command: string;
    args: string[];
    accepted: boolean;
}>;
export declare function askAgent(sessionId: string, userId: string, prompt: string): Promise<{
    text: string;
    provider: string;
}>;
