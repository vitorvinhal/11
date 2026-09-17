import { parseCompletionContent } from '../../lib/parse-completion';

describe('parseCompletionContent', () => {
  test('SSE with multiple data lines', () => {
    const sse = `data: {"choices":[{"delta":{"content":"Hello"}}]}\n\n` +
                `data: {"choices":[{"delta":{"content":" World"}}]}\n\n` +
                `data: [DONE]\n`;
    expect(parseCompletionContent(sse)).toBe('Hello World');
  });

  test('JSON response with message.content', () => {
    const json = JSON.stringify({ choices: [{ message: { content: 'Hi' } }] });
    expect(parseCompletionContent(json)).toBe('Hi');
  });

  test('JSON response with delta.content', () => {
    const json = JSON.stringify({ choices: [{ delta: { content: 'Hey' } }] });
    expect(parseCompletionContent(json)).toBe('Hey');
  });

  test('JSON response with output_text', () => {
    const json = JSON.stringify({ output_text: 'Result' });
    expect(parseCompletionContent(json)).toBe('Result');
  });

  test('Malformed chunk ignored', () => {
    const sse = `data: notjson\n\n`;
    expect(parseCompletionContent(sse)).toBeNull();
  });

  test('Empty string returns null', () => {
    expect(parseCompletionContent('')).toBeNull();
  });
});
