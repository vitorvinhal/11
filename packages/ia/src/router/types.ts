/**
 * Formato canônico de mensagem do ModelGateway.
 * Todos os provedores convertem para este formato (role + content blocks + tool_calls).
 */

export type Role = "system" | "user" | "assistant" | "tool";

export interface ContentBlock {
  type: "text" | "image" | "audio" | "file";
  text?: string;
  data?: string; // base64
  mimeType?: string;
}

export interface ToolCall {
  id: string;
  name: string;
  arguments: Record<string, unknown>;
}

export interface ToolResult {
  toolCallId: string;
  name: string;
  result: unknown;
}

export interface CanonicalMessage {
  role: Role;
  content: ContentBlock[];
  toolCalls?: ToolCall[];
  toolResults?: ToolResult[];
  toolCallId?: string;
  /** metadados de sessão longa (flag de contexto comprimido) */
  summarized?: boolean;
  /** timestamp para run-length cut */
  ts?: number;
}

export interface GatewayCompletionResult {
  provider: string;
  model: string;
  message: CanonicalMessage;
  usage: {
    inputTokens: number;
    outputTokens: number;
    costUnits: number;
  };
  /** quando provider switchou por falha, motivo */
  fallbackReason?: string;
}

export interface LongContextPolicy {
  /** máx de mensagens antes de compactar */
  maxMessages: number;
  /** máx de tokens do prompt estimado */
  maxTokens: number;
}

export const DEFAULT_LONG_CONTEXT: LongContextPolicy = {
  maxMessages: 40,
  maxTokens: 60_000,
};

export interface ProviderAdapter {
  readonly id: "9router" | "anthropic" | "gemini" | "minimax" | "openrouter";
  readonly isPaid: boolean;
  complete(
    messages: CanonicalMessage[],
    opts: { sessionId: string; model?: string },
  ): Promise<GatewayCompletionResult>;
}
