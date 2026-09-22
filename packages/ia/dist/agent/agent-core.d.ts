/**
 * FASE 5A — AgentCore
 *
 * Loop principal de execução do agente.
 * Fluxo: user_msg → LLM → tool_calls → safety check → execute → loop até resposta final
 *
 * Integra com:
 *   - Risk Engine (FASE 4A): classifica ações
 *   - Dry-Run (FASE 4B): simula antes de executar
 *   - Checkpoint (FASE 4C): salva estado para rollback
 */
export type AgentStatus = "idle" | "thinking" | "executing" | "awaiting_approval" | "error";
export interface AgentToolCall {
    id: string;
    name: string;
    arguments: Record<string, unknown>;
}
export interface AgentToolResult {
    toolCallId: string;
    content: string;
    isError?: boolean;
}
export interface AgentMessage {
    role: "system" | "user" | "assistant" | "tool";
    content: string;
    toolCalls?: AgentToolCall[];
    toolResults?: AgentToolResult[];
    /** id da tool call que originou esta mensagem de tool */
    toolCallId?: string;
}
export interface AgentContext {
    sessionId: string;
    userId: string;
    tenantId?: string;
    messages: AgentMessage[];
    maxIterations?: number;
    /** Se true, ações destrutivas precisam de aprovação humana */
    requireApprovalForDestructive?: boolean;
    /** deviceId alvo para tools `device.*` (Agente PC / Mobile). */
    deviceId?: string;
}
export interface AgentResponse {
    text: string;
    toolCallsExecuted: number;
    riskSummary: {
        safe: number;
        reversible: number;
        destructive: number;
    };
    status: AgentStatus;
    error?: string;
}
/**
 * Loop principal do agente.
 * Envia mensagem ao LLM, executa tool calls, repete até resposta final.
 */
export declare function agentLoop(ctx: AgentContext): Promise<AgentResponse>;
