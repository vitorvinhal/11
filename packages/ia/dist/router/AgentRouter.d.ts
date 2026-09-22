export interface AgentRequest {
    sessionId: string;
    userId: string;
    prompt: string;
    mode?: 'auto' | 'pinned';
    provider?: string;
}
/**
 * AgentRouter — ponto de entrada da IA.
 * Converte a mensagem para o formato canônico e delega ao ModelGateway.
 */
export declare function handleMessage(input: AgentRequest): Promise<{
    text: string;
    provider: string;
}>;
export declare function handleMessageLegacy(prompt: string, userId: string): Promise<{
    text: string;
    provider: string;
}>;
