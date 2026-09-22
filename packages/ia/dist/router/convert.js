"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textOf = textOf;
exports.parseContentBlocks = parseContentBlocks;
exports.toPlainMessages = toPlainMessages;
/** Extrai texto simples de uma mensagem canônica. */
function textOf(message) {
    return message.content.map((c) => c.text ?? '').join('\n');
}
/** Converte texto bruto em content blocks canônicos. */
function parseContentBlocks(text) {
    return [{ type: 'text', text }];
}
/** Converte conteúdo para o formato "texto puro" de provedores sem blocks. */
function toPlainMessages(messages) {
    return messages.map((m) => ({ role: m.role, content: textOf(m) }));
}
