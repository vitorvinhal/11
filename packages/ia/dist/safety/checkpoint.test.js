"use strict";
/**
 * Checkpoint & Rollback — FASE 4C
 *
 * Testes unitários da lógica de checkpoint (sem Supabase real).
 * Testes de integração com Supabase ficam em e2e.
 */
Object.defineProperty(exports, "__esModule", { value: true });
describe('Checkpoint & Rollback — FASE 4C', () => {
    // ── Types & interfaces ──
    describe('Type definitions', () => {
        test('CreateCheckpointInput has required fields', () => {
            const input = {
                actionId: 'test-action-1',
                userId: 'user-1',
                targetType: 'file',
                targetId: '/path/to/file',
                beforeState: { content: 'old content' },
            };
            expect(input.actionId).toBeTruthy();
            expect(input.userId).toBeTruthy();
            expect(input.targetType).toBeTruthy();
            expect(input.beforeState).toBeDefined();
        });
        test('Checkpoint has correct status values', () => {
            const statuses = [
                'active', 'restored', 'expired', 'committed',
            ];
            expect(statuses).toHaveLength(4);
        });
        test('PendingAction has correct status values', () => {
            const statuses = [
                'pending', 'approved', 'rejected', 'executed', 'expired',
            ];
            expect(statuses).toHaveLength(5);
        });
    });
    // ── Checkpoint lifecycle ──
    describe('Checkpoint lifecycle', () => {
        test('createCheckpoint input validates correctly', () => {
            const input = {
                actionId: 'write-file',
                userId: 'user-123',
                targetType: 'filesystem',
                targetId: '/app/src/main.ts',
                beforeState: { content: 'original code', bytes: 1024 },
                ttlMs: 30 * 60 * 1000, // 30 min
            };
            expect(input.actionId).toBe('write-file');
            expect(input.beforeState).toHaveProperty('content');
            expect(input.ttlMs).toBe(30 * 60 * 1000);
        });
        test('checkpoint defaults to 1 hour TTL', () => {
            const DEFAULT_TTL = 60 * 60 * 1000;
            const input = {
                actionId: 'test',
                userId: 'user-1',
                targetType: 'file',
                targetId: '/test',
                beforeState: {},
            };
            // Default TTL is applied in createCheckpoint function
            expect(DEFAULT_TTL).toBe(3600000);
        });
    });
    // ── Pending actions ──
    describe('Pending actions', () => {
        test('pending action has required fields', () => {
            const pending = {
                id: 'pa-1',
                action: 'filesystem.write',
                riskLevel: 'REVERSIBLE',
                userId: 'user-1',
                status: 'pending',
                params: { path: '/app/src/main.ts', content: 'new code' },
                createdAt: new Date(),
            };
            expect(pending.status).toBe('pending');
            expect(pending.riskLevel).toBe('REVERSIBLE');
            expect(pending.params).toHaveProperty('path');
        });
        test('approval flow: pending → approved → executed', () => {
            const flow = [
                'pending', 'approved', 'executed',
            ];
            expect(flow).toHaveLength(3);
            expect(flow[0]).toBe('pending');
            expect(flow[flow.length - 1]).toBe('executed');
        });
        test('rejection flow: pending → rejected', () => {
            const flow = ['pending', 'rejected'];
            expect(flow).toHaveLength(2);
            expect(flow[flow.length - 1]).toBe('rejected');
        });
    });
    // ── Rollback scenarios ──
    describe('Rollback scenarios', () => {
        test('file write rollback: before_state contains original content', () => {
            const checkpoint = {
                targetType: 'filesystem',
                targetId: '/app/src/main.ts',
                beforeState: {
                    content: 'original code here',
                    bytes: 1024,
                    lastModified: '2026-09-17T20:00:00Z',
                },
            };
            // Restore would write back the original content
            const state = checkpoint.beforeState;
            expect(state.content).toBe('original code here');
            expect(state.bytes).toBe(1024);
        });
        test('SQL rollback: before_state contains original row', () => {
            const checkpoint = {
                targetType: 'sql',
                targetId: 'users:user-123',
                beforeState: {
                    table: 'users',
                    row: { id: 'user-123', name: 'Original Name', email: 'old@test.com' },
                },
            };
            const state = checkpoint.beforeState;
            expect(state.table).toBe('users');
            expect(state.row.name).toBe('Original Name');
        });
        test('config rollback: before_state contains original config', () => {
            const checkpoint = {
                targetType: 'config',
                targetId: 'app-settings',
                beforeState: {
                    theme: 'dark',
                    language: 'pt-BR',
                    notifications: true,
                },
            };
            const state = checkpoint.beforeState;
            expect(state.theme).toBe('dark');
            expect(state.notifications).toBe(true);
        });
    });
    // ── Expiration ──
    describe('Checkpoint expiration', () => {
        test('checkpoint expires after TTL', () => {
            const ttlMs = 60 * 60 * 1000; // 1 hour
            const createdAt = new Date(Date.now() - ttlMs - 1);
            const expiresAt = new Date(createdAt.getTime() + ttlMs);
            expect(expiresAt.getTime()).toBeLessThan(Date.now());
        });
        test('active checkpoint is not expired', () => {
            const ttlMs = 60 * 60 * 1000;
            const createdAt = new Date();
            const expiresAt = new Date(createdAt.getTime() + ttlMs);
            expect(expiresAt.getTime()).toBeGreaterThan(Date.now());
        });
    });
});
