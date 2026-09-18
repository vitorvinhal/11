/**
 * Agent Core — FASE 5
 *
 * Loop de execução do agente com integração ao Safety Engine.
 */

export { agentLoop, executeToolCall } from './agent-core';
export { executeTool } from './tool-executor';
export {
  createSession,
  getSession,
  updateSessionStatus,
  listActiveSessions,
  addMessage,
  getMessages,
  expireOldSessions,
} from './session-manager';

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

export type {
  AgentSession,
  SessionMessage,
  CreateSessionInput,
  AddMessageInput,
  SessionStatus,
} from './session-manager';
