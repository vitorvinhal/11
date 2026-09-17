"use strict";
/**
 * Formato canônico de mensagem do ModelGateway.
 * Todos os provedores convertem para este formato (role + content blocks + tool_calls).
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_LONG_CONTEXT = void 0;
exports.DEFAULT_LONG_CONTEXT = {
    maxMessages: 40,
    maxTokens: 60_000,
};
