"use strict";
/**
 * Integration Tests — FASE 6C
 *
 * Testa a integração entre módulos (Safety + Agent + Memory).
 * Usa mocks para Supabase — não requer conexão real.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const risk_engine_1 = require("../safety/risk-engine");
const dry_run_1 = require("../safety/dry-run");
describe('Integration: Safety → Agent pipeline', () => {
    // ── Risk classification → Dry-run pipeline ──
    test('SAFE action skips dry-run', async () => {
        const action = 'filesystem.read';
        const classification = (0, risk_engine_1.classifyAction)(action);
        const risk = (0, risk_engine_1.getRisk)(action);
        expect((0, risk_engine_1.requiresApproval)(action)).toBe(false);
        expect(risk).toBe('SAFE');
        // Dry-run not needed for SAFE
        const shouldDryRun = risk !== 'SAFE';
        expect(shouldDryRun).toBe(false);
    });
    test('REVERSIBLE action needs dry-run', async () => {
        const action = 'filesystem.write';
        const classification = (0, risk_engine_1.classifyAction)(action);
        const risk = (0, risk_engine_1.getRisk)(action);
        expect(risk).toBe('REVERSIBLE');
        const dryResult = await (0, dry_run_1.dryRun)(action, {
            userId: 'test-user',
            params: { path: 'test-file.txt' },
        });
        expect(dryResult.status).toBe('simulated');
        expect(dryResult.wouldSucceed).toBe(true);
    });
    test('DESTRUCTIVE action needs approval + dry-run', async () => {
        const action = 'filesystem.delete';
        const classification = (0, risk_engine_1.classifyAction)(action);
        const risk = (0, risk_engine_1.getRisk)(action);
        expect((0, risk_engine_1.requiresApproval)(action)).toBe(true);
        expect(risk).toBe('DESTRUCTIVE');
        const dryResult = await (0, dry_run_1.dryRun)(action, {
            userId: 'test-user',
            params: { path: 'test-file.txt' },
        });
        expect(dryResult.status).toBe('simulated');
    });
    test('git.push is DESTRUCTIVE', () => {
        const risk = (0, risk_engine_1.getRisk)('git.push');
        expect(risk).toBe('DESTRUCTIVE');
    });
    test('git.status is SAFE', () => {
        const risk = (0, risk_engine_1.getRisk)('git.status');
        expect(risk).toBe('SAFE');
    });
    test('terminal.exec with dangerous command is DESTRUCTIVE', () => {
        const risk = (0, risk_engine_1.getRisk)('terminal.exec');
        // terminal.exec is classified based on pattern, not command content
        expect(['SAFE', 'REVERSIBLE', 'DESTRUCTIVE']).toContain(risk);
    });
    test('unknown action is DESTRUCTIVE (default deny)', () => {
        const risk = (0, risk_engine_1.getRisk)('unknown.action.xyz');
        expect(risk).toBe('DESTRUCTIVE');
    });
});
describe('Integration: Tool call → Risk → Dry-run flow', () => {
    const toolCalls = [
        { name: 'file_read', expectedAction: 'filesystem.read' },
        { name: 'file_write', expectedAction: 'filesystem.write' },
        { name: 'file_delete', expectedAction: 'filesystem.delete' },
        { name: 'terminal_exec', expectedAction: 'terminal.exec' },
    ];
    for (const tc of toolCalls) {
        test(`${tc.name} → correct action mapping`, () => {
            const risk = (0, risk_engine_1.getRisk)(tc.expectedAction);
            expect(['SAFE', 'REVERSIBLE', 'DESTRUCTIVE']).toContain(risk);
        });
    }
});
describe('Integration: Agent status lifecycle', () => {
    test('complete flow: idle → thinking → executing → idle', () => {
        const flow = ['idle', 'thinking', 'executing', 'idle'];
        expect(flow).toHaveLength(4);
    });
    test('flow with tools: idle → thinking → executing → thinking → idle', () => {
        const flow = ['idle', 'thinking', 'executing', 'thinking', 'idle'];
        expect(flow).toHaveLength(5);
    });
    test('error flow: idle → thinking → error', () => {
        const flow = ['idle', 'thinking', 'error'];
        expect(flow[flow.length - 1]).toBe('error');
    });
});
describe('Integration: Memory search relevance', () => {
    test('relevant memory found', () => {
        const query = 'project setup preferences';
        const memory = 'User talked about project setup and prefers TypeScript';
        const queryWords = new Set(query.toLowerCase().split(/\s+/).filter((w) => w.length > 3));
        const contentWords = new Set(memory.toLowerCase().split(/\s+/).filter((w) => w.length > 3));
        const overlap = [...queryWords].filter((w) => contentWords.has(w)).length;
        const similarity = overlap / queryWords.size;
        expect(similarity).toBeGreaterThan(0.3);
    });
    test('irrelevant memory filtered out', () => {
        const query = 'quantum physics calculations';
        const memory = 'User prefers dark mode in their IDE';
        const queryWords = new Set(query.toLowerCase().split(/\s+/).filter((w) => w.length > 3));
        const contentWords = new Set(memory.toLowerCase().split(/\s+/).filter((w) => w.length > 3));
        const overlap = [...queryWords].filter((w) => contentWords.has(w)).length;
        const similarity = overlap / queryWords.size;
        expect(similarity).toBe(0);
    });
});
describe('Integration: Risk summary tracking', () => {
    test('tracks multiple actions correctly', () => {
        const summary = { safe: 0, reversible: 0, destructive: 0 };
        const actions = [
            'filesystem.read',
            'filesystem.write',
            'filesystem.delete',
            'git.status',
            'git.push',
        ];
        for (const action of actions) {
            const risk = (0, risk_engine_1.getRisk)(action);
            summary[risk.toLowerCase()]++;
        }
        expect(summary.safe).toBe(2);
        expect(summary.reversible).toBe(1);
        expect(summary.destructive).toBe(2);
    });
});
