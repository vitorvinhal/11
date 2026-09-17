import { LongContextManager } from './long-context';
const manager = new LongContextManager();

describe('LongContextManager utilities', () => {
  test('estimateTokens approximates chars/4', () => {
    const msg = { role: 'assistant', content: [{ type: 'text', text: 'a'.repeat(100) }] } as any;
    expect(manager.estimateTokens([msg])).toBe(25);
  });

  test('compact respects limits', () => {
    const msgs = Array.from({ length: 50 }, (_, i) => ({ role: 'assistant', content: [{ type: 'text', text: 'x'.repeat(i) }] }) as any);
    const res = manager.compact(msgs);
    expect(res.messages.length).toBeLessThanOrEqual(manager['policy'].maxMessages);
    const totalTokens = res.messages.reduce((a, m) => a + manager.estimateTokens([m]), 0);
    expect(totalTokens).toBeLessThanOrEqual(manager['policy'].maxTokens);
  });
});


describe('long-context utilities', () => {
  test('estimateTokens approximates chars/4', () => {
    const msg = 'a'.repeat(100);
    expect(estimateTokens(msg)).toBe(25);
  });

  test('compact respects maxMessages and maxTokens', () => {
    const msgs = Array.from({ length: 100 }, (_, i) => ({ role: 'assistant', content: 'x'.repeat(i) }));
    const res = compact(msgs, { maxMessages: 10, maxTokens: 200 });
    expect(res.messages.length).toBeLessThanOrEqual(10);
    // tokens roughly sum of lengths/4
    const totalTokens = res.messages.reduce((a, m) => a + estimateTokens(m.content), 0);
    expect(totalTokens).toBeLessThanOrEqual(200);
  });
});
