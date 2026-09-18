/**
 * Agent Core — FASE 5
 *
 * Loop de execução do agente com integração ao Safety Engine.
 */

export { agentLoop, executeToolCall } from './agent-core';
export { executeTool } from './tool-executor';

export type {
  AgentContext,
  AgentResponse,
  AgentStatus,
  ToolCall,
  ToolResult,
  AgentMessage,
} from './agent-core';

export type {
  ExecutionContext,
  ExecutionResult,
  ExecutionStatus,
} from './tool-executor';
