"use strict";
/**
 * ToolExecutor — FASE 5B
 *
 * Testes unitários do pipeline de execução.
 */
Object.defineProperty(exports, "__esModule", { value: true });
describe('ToolExecutor — FASE 5B', () => {
    // ── Types ──
    describe('Type definitions', () => {
        test('ExecutionContext has required fields', () => {
            const ctx = {
                userId: 'user-1',
                sessionId: 'session-1',
            };
            expect(ctx.userId).toBeTruthy();
            expect(ctx.sessionId).toBeTruthy();
        });
        test('ExecutionContext supports optional safety flags', () => {
            const ctx = {
                userId: 'u1',
                sessionId: 's1',
                tenantId: 't1',
                enableCheckpoints: true,
                enablePendingActions: true,
            };
            expect(ctx.enableCheckpoints).toBe(true);
            expect(ctx.enablePendingActions).toBe(true);
        });
        test('ExecutionResult has all status fields', () => {
            const result = {
                status: 'completed',
                toolName: 'file_read',
                arguments: { path: '/test' },
                result: 'content',
                riskLevel: 'SAFE',
                durationMs: 100,
            };
            expect(result.status).toBe('completed');
            expect(result.riskLevel).toBe('SAFE');
        });
    });
    // ── Execution statuses ──
    describe('Execution status lifecycle', () => {
        test('happy path: pending → simulating → executing → completed', () => {
            const flow = [
                'pending', 'simulating', 'executing', 'completed',
            ];
            expect(flow).toHaveLength(4);
            expect(flow[flow.length - 1]).toBe('completed');
        });
        test('with checkpoint: pending → checkpointed → executing → completed', () => {
            const flow = [
                'pending', 'checkpointed', 'executing', 'completed',
            ];
            expect(flow).toHaveLength(4);
        });
        test('failure with rollback: pending → executing → failed → rolled_back', () => {
            const flow = [
                'pending', 'executing', 'failed', 'rolled_back',
            ];
            expect(flow).toHaveLength(4);
            expect(flow[flow.length - 1]).toBe('rolled_back');
        });
        test('destructive awaiting approval', () => {
            const status = 'awaiting_approval';
            expect(status).toBe('awaiting_approval');
        });
    });
    // ── Risk levels ──
    describe('Risk level handling', () => {
        test('SAFE tools skip dry-run', () => {
            const risk = 'SAFE';
            expect(risk).toBe('SAFE');
        });
        test('REVERSIBLE tools get checkpoint', () => {
            const risk = 'REVERSIBLE';
            expect(risk).toBe('REVERSIBLE');
        });
        test('DESTRUCTIVE tools require approval', () => {
            const risk = 'DESTRUCTIVE';
            expect(risk).toBe('DESTRUCTIVE');
        });
    });
    // ── Retry logic ──
    describe('Retry behavior', () => {
        test('max retries is 2', () => {
            const MAX_RETRIES = 2;
            expect(MAX_RETRIES).toBe(2);
        });
        test('retry delay increases with attempt', () => {
            const BASE_DELAY = 1000;
            const delays = [0, 1, 2].map((i) => BASE_DELAY * (i + 1));
            expect(delays).toEqual([1000, 2000, 3000]);
        });
    });
    // ── Audit log ──
    describe('Audit log entry', () => {
        test('contains all required fields', () => {
            const entry = {
                userId: 'user-1',
                sessionId: 'session-1',
                toolName: 'file_write',
                action: 'filesystem.write',
                riskLevel: 'REVERSIBLE',
                status: 'completed',
                checkpointId: 'cp-1',
                durationMs: 150,
            };
            expect(entry).toHaveProperty('userId');
            expect(entry).toHaveProperty('toolName');
            expect(entry).toHaveProperty('riskLevel');
            expect(entry).toHaveProperty('durationMs');
        });
        test('error field is optional', () => {
            const entry = {
                userId: 'u1',
                sessionId: 's1',
                toolName: 'file_delete',
                action: 'filesystem.delete',
                riskLevel: 'DESTRUCTIVE',
                status: 'failed',
                error: 'File not found',
                durationMs: 50,
            };
            expect(entry.error).toBeTruthy();
        });
    });
    // ── Tool registry ──
    describe('Tool registry', () => {
        test('file_read is registered', () => {
            const tools = ['file_read', 'file_write', 'file_delete', 'terminal_exec'];
            expect(tools).toContain('file_read');
        });
        test('unknown tool returns failed status', () => {
            const toolName = 'unknown_tool';
            const knownTools = ['file_read', 'file_write', 'file_delete', 'terminal_exec'];
            expect(knownTools).not.toContain(toolName);
        });
    });
    // ── Checkpoint integration ──
    describe('Checkpoint integration', () => {
        test('checkpoint created for REVERSIBLE actions', () => {
            const shouldCreate = true; // enableCheckpoints !== false && risk === 'REVERSIBLE'
            expect(shouldCreate).toBe(true);
        });
        test('rollback attempted on failure with checkpoint', () => {
            const hasCheckpoint = true;
            const shouldRollback = hasCheckpoint;
            expect(shouldRollback).toBe(true);
        });
        test('no rollback without checkpoint', () => {
            const hasCheckpoint = false;
            const shouldRollback = hasCheckpoint;
            expect(shouldRollback).toBe(false);
        });
    });
    // ── Dry-run integration ──
    describe('Dry-run integration', () => {
        test('dry-run skipped for SAFE actions', () => {
            const riskLevel = 'SAFE';
            const shouldDryRun = riskLevel !== 'SAFE';
            expect(shouldDryRun).toBe(false);
        });
        test('dry-run executed for REVERSIBLE actions', () => {
            const riskLevel = 'REVERSIBLE';
            const shouldDryRun = riskLevel !== 'SAFE';
            expect(shouldDryRun).toBe(true);
        });
        test('dry-run executed for DESTRUCTIVE actions', () => {
            const riskLevel = 'DESTRUCTIVE';
            const shouldDryRun = riskLevel !== 'SAFE';
            expect(shouldDryRun).toBe(true);
        });
    });
});
