import { LongContextManager } from './long-context';
const manager = new LongContextManager();

describe('LongContextManager utilities', () => {
  test('estimateTokens approximates chars/4', () => {
    const msg = { role: 'assistant', content: [{ type: 'text', text: 'a'.repeat(100) }] } as any;
    expect(manager.estimateTokens([msg])).toBe(25);
  });

  test('compact respects limits', () => {
    const msgs = Array.from({ length: 30 }, (_, i) => ({ role: 'assistant', content: [{ type: 'text', text: 'x'.repeat(i) }] }) as any);
    const res = manager.compact(msgs);
    expect(res.messages.length).toBeLessThanOrEqual((manager as any).policy.maxMessages);
    const totalTokens = res.messages.reduce((a, m) => a + manager.estimateTokens([m]), 0);
    expect(totalTokens).toBeLessThanOrEqual((manager as any).policy.maxTokens);
  });
});




