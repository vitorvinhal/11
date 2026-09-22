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
export * from './safety/index';
export * from './agent/index';
export * from './plugins/index';
