/**
 * @11/ia — ponto de entrada do pacote de IA.
 * Expõe o ModelGateway (roteador multi-provedor), o AgentRouter, AgentCore e as tools.
 */
export * from './router/types';
export * from './router/convert';
export * from './router/index';
export * from './router/AgentRouter';
export { modelGateway } from './router/index';
export { handleMessage, handleMessageLegacy } from './router/AgentRouter';
export * from './tools/index';
export * from './personality/seed';

// FASE 4 — Safety Engine
export * from './safety/index';

// FASE 5 — Agent Core
export * from './agent/index';