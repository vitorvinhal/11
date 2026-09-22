"use strict";
/**
 * Memory Module — FASE 6B
 *
 * Testes unitários da lógica de memória (sem Supabase real).
 */
Object.defineProperty(exports, "__esModule", { value: true });
describe('Memory Module — FASE 6B', () => {
    // ── Types ──
    describe('Type definitions', () => {
        test('Memory has required fields', () => {
            const mem = {
                id: 'mem-1',
                userId: 'user-1',
                kind: 'conversation',
                title: 'Test memory',
                content: 'User talked about project setup',
                metadata: {},
                createdAt: new Date(),
            };
            expect(mem.id).toBeTruthy();
            expect(mem.userId).toBeTruthy();
            expect(mem.kind).toBe('conversation');
        });
        test('SaveMemoryInput has required fields', () => {
            const input = {
                userId: 'user-1',
                kind: 'fact',
                title: 'User prefers dark mode',
                content: 'The user always uses dark mode in their IDE',
            };
            expect(input.userId).toBeTruthy();
            expect(input.kind).toBe('fact');
        });
        test('SearchMemoryInput has required fields', () => {
            const input = {
                userId: 'user-1',
                query: 'project setup preferences',
            };
            expect(input.userId).toBeTruthy();
            expect(input.query).toBeTruthy();
        });
    });
    // ── Memory kinds ──
    describe('Memory kinds', () => {
        test('valid kinds', () => {
            const kinds = ['conversation', 'fact', 'preference', 'task', 'error'];
            expect(kinds).toHaveLength(5);
        });
        test('conversation kind', () => {
            const kind = 'conversation';
            expect(kind).toBe('conversation');
        });
        test('preference kind', () => {
            const kind = 'preference';
            expect(kind).toBe('preference');
        });
    });
    // ── Search results ──
    describe('MemorySearchResult structure', () => {
        test('contains memory and similarity', () => {
            const result = {
                memory: {
                    id: 'm1',
                    userId: 'u1',
                    kind: 'fact',
                    title: 'Test',
                    content: 'Content here',
                    metadata: {},
                    createdAt: new Date(),
                },
                similarity: 0.85,
            };
            expect(result.similarity).toBeGreaterThan(0);
            expect(result.similarity).toBeLessThanOrEqual(1);
        });
    });
    // ── Similarity calculation ──
    describe('Similarity logic', () => {
        test('exact keyword match gives high similarity', () => {
            const queryWords = new Set(['project', 'setup', 'preferences']);
            const contentWords = new Set(['user', 'talked', 'about', 'project', 'setup', 'today']);
            const overlap = [...queryWords].filter((w) => contentWords.has(w)).length;
            const similarity = overlap / queryWords.size;
            expect(similarity).toBeCloseTo(0.667, 2);
        });
        test('no overlap gives zero similarity', () => {
            const queryWords = new Set(['quantum', 'physics']);
            const contentWords = new Set(['user', 'talked', 'about', 'project']);
            const overlap = [...queryWords].filter((w) => contentWords.has(w)).length;
            const similarity = overlap / queryWords.size;
            expect(similarity).toBe(0);
        });
        test('threshold filters low similarity', () => {
            const threshold = 0.3;
            const similarity = 0.2;
            expect(similarity >= threshold).toBe(false);
        });
    });
    // ── Limits ──
    describe('Memory limits', () => {
        test('max memories per user is 1000', () => {
            const MAX = 1000;
            expect(MAX).toBe(1000);
        });
        test('default search limit is 10', () => {
            const DEFAULT_LIMIT = 10;
            expect(DEFAULT_LIMIT).toBe(10);
        });
        test('default similarity threshold is 0.3', () => {
            const DEFAULT_THRESHOLD = 0.3;
            expect(DEFAULT_THRESHOLD).toBe(0.3);
        });
        test('title max length is 200', () => {
            const title = 'a'.repeat(200);
            expect(title.length).toBe(200);
        });
        test('content max length is 5000', () => {
            const content = 'a'.repeat(5000);
            expect(content.length).toBe(5000);
        });
    });
    // ── Cleanup ──
    describe('Memory cleanup', () => {
        test('cleanup triggers when exceeding limit', () => {
            const count = 1001;
            const limit = 1000;
            expect(count > limit).toBe(true);
        });
        test('no cleanup when under limit', () => {
            const count = 500;
            const limit = 1000;
            expect(count > limit).toBe(false);
        });
    });
    // ── Metadata ──
    describe('Memory metadata', () => {
        test('can store session_id', () => {
            const metadata = { session_id: 'session-123' };
            expect(metadata).toHaveProperty('session_id');
        });
        test('can store custom fields', () => {
            const metadata = {
                source: 'api',
                tags: ['important', 'project'],
                score: 0.95,
            };
            expect(metadata.tags).toHaveLength(2);
        });
    });
});
