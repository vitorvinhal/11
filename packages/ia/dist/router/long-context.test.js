"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const long_context_1 = require("./long-context");
const manager = new long_context_1.LongContextManager();
describe('LongContextManager utilities', () => {
    test('estimateTokens approximates chars/4', () => {
        const msg = { role: 'assistant', content: [{ type: 'text', text: 'a'.repeat(100) }] };
        expect(manager.estimateTokens([msg])).toBe(25);
    });
    test('compact respects limits', () => {
        const msgs = Array.from({ length: 30 }, (_, i) => ({ role: 'assistant', content: [{ type: 'text', text: 'x'.repeat(i) }] }));
        const res = manager.compact(msgs);
        expect(res.messages.length).toBeLessThanOrEqual(manager.policy.maxMessages);
        const totalTokens = res.messages.reduce((a, m) => a + manager.estimateTokens([m]), 0);
        expect(totalTokens).toBeLessThanOrEqual(manager.policy.maxTokens);
    });
});
