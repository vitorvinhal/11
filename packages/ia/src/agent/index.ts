/**
 * Agent Core — FASE 5-7
 *
 * Loop de execução do agente com integração ao Safety Engine.
 */

export { agentLoop } from './agent-core';
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
export {
  saveMemory,
  searchMemories,
  getRecentMemories,
  deleteMemory,
} from './memory';
export {
  recordMetric,
  recordLatency,
  recordToolCalls,
  recordError,
  recordTokens,
  getMetricSummary,
  getRawMetrics,
  clearMetrics,
} from './metrics';

export type {
  AgentContext,
  AgentResponse,
  AgentStatus,
  AgentToolCall,
  AgentToolResult,
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

export type {
  Memory,
  SaveMemoryInput,
  SearchMemoryInput,
  MemorySearchResult,
  MemoryKind,
} from './memory';

export type {
  AgentMetric,
  MetricType,
  MetricSummary,
} from './metrics';
