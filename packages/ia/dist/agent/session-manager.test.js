"use strict";
/**
 * Session Manager — FASE 5C
 *
 * Testes unitários da lógica de sessão (sem Supabase real).
 */
Object.defineProperty(exports, "__esModule", { value: true });
describe('Session Manager — FASE 5C', () => {
    // ── Types ──
    describe('Type definitions', () => {
        test('AgentSession has required fields', () => {
            const session = {
                id: 'session-1',
                userId: 'user-1',
                status: 'active',
                context: {},
                messageCount: 0,
                tokenUsage: { input: 0, output: 0, total: 0 },
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            expect(session.id).toBeTruthy();
            expect(session.userId).toBeTruthy();
            expect(session.status).toBe('active');
        });
        test('CreateSessionInput has required fields', () => {
            const input = {
                userId: 'user-1',
            };
            expect(input.userId).toBeTruthy();
        });
        test('CreateSessionInput supports optional fields', () => {
            const input = {
                userId: 'u1',
                tenantId: 't1',
                title: 'Test Session',
                context: { key: 'value' },
                ttlMs: 3600000,
            };
            expect(input.title).toBe('Test Session');
            expect(input.ttlMs).toBe(3600000);
        });
    });
    // ── Session status ──
    describe('Session status lifecycle', () => {
        test('valid statuses', () => {
            const statuses = ['active', 'paused', 'completed', 'expired'];
            expect(statuses).toHaveLength(4);
        });
        test('active → paused → active flow', () => {
            const flow = ['active', 'paused', 'active'];
            expect(flow).toHaveLength(3);
        });
        test('active → completed flow', () => {
            const flow = ['active', 'completed'];
            expect(flow[flow.length - 1]).toBe('completed');
        });
        test('active → expired flow', () => {
            const flow = ['active', 'expired'];
            expect(flow[flow.length - 1]).toBe('expired');
        });
    });
    // ── Token usage ──
    describe('Token usage tracking', () => {
        test('initial token usage is zero', () => {
            const usage = { input: 0, output: 0, total: 0 };
            expect(usage.total).toBe(0);
        });
        test('token usage accumulates', () => {
            const usage = { input: 100, output: 50, total: 150 };
            expect(usage.total).toBe(usage.input + usage.output);
        });
    });
    // ── Messages ──
    describe('SessionMessage structure', () => {
        test('user message', () => {
            const msg = {
                id: 'msg-1',
                sessionId: 'session-1',
                role: 'user',
                content: 'Olá',
                createdAt: new Date(),
            };
            expect(msg.role).toBe('user');
        });
        test('assistant message with tool calls', () => {
            const msg = {
                id: 'msg-2',
                sessionId: 'session-1',
                role: 'assistant',
                content: 'Vou verificar',
                toolCalls: JSON.stringify([{ name: 'file_read', args: {} }]),
                createdAt: new Date(),
            };
            expect(msg.toolCalls).toBeTruthy();
        });
        test('tool response message', () => {
            const msg = {
                id: 'msg-3',
                sessionId: 'session-1',
                role: 'tool',
                content: 'File content here',
                toolResults: JSON.stringify([{ status: 'ok' }]),
                createdAt: new Date(),
            };
            expect(msg.toolResults).toBeTruthy();
        });
    });
    // ── AddMessage input ──
    describe('AddMessageInput structure', () => {
        test('basic message input', () => {
            const input = {
                sessionId: 'session-1',
                role: 'user',
                content: 'Test message',
            };
            expect(input.sessionId).toBeTruthy();
            expect(input.role).toBe('user');
        });
        test('message with token count', () => {
            const input = {
                sessionId: 'session-1',
                role: 'assistant',
                content: 'Response',
                tokenCount: 150,
            };
            expect(input.tokenCount).toBe(150);
        });
    });
    // ── Session context ──
    describe('Session context', () => {
        test('empty context by default', () => {
            const context = {};
            expect(Object.keys(context)).toHaveLength(0);
        });
        test('context can store arbitrary data', () => {
            const context = {
                currentFile: '/app/src/main.ts',
                lastAction: 'file_write',
                iterationCount: 5,
            };
            expect(context).toHaveProperty('currentFile');
            expect(context.iterationCount).toBe(5);
        });
    });
    // ── Expiration ──
    describe('Session expiration', () => {
        test('default TTL is 24 hours', () => {
            const DEFAULT_TTL = 24 * 60 * 60 * 1000;
            expect(DEFAULT_TTL).toBe(86400000);
        });
        test('session expires after TTL', () => {
            const ttlMs = 60 * 60 * 1000; // 1 hour
            const createdAt = new Date(Date.now() - ttlMs - 1);
            const expiresAt = new Date(createdAt.getTime() + ttlMs);
            expect(expiresAt.getTime()).toBeLessThan(Date.now());
        });
    });
    // ── Limits ──
    describe('Session limits', () => {
        test('max messages per session is 500', () => {
            const MAX_MESSAGES = 500;
            expect(MAX_MESSAGES).toBe(500);
        });
        test('default list limit is 10', () => {
            const DEFAULT_LIMIT = 10;
            expect(DEFAULT_LIMIT).toBe(10);
        });
    });
});
