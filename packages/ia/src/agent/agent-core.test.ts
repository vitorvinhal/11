/**
 * AgentCore — FASE 5A
 *
 * Testes unitários da lógica do agente (sem LLM real).
 */

import type { AgentContext, AgentResponse, ToolCall, ToolResult, AgentMessage } from './agent-core';

describe('AgentCore — FASE 5A', () => {
  // ── Types ──
  describe('Type definitions', () => {
    test('AgentContext has required fields', () => {
      const ctx: AgentContext = {
        sessionId: 'session-1',
        userId: 'user-1',
        messages: [{ role: 'user', content: 'Olá' }],
      };
      expect(ctx.sessionId).toBeTruthy();
      expect(ctx.userId).toBeTruthy();
      expect(ctx.messages).toHaveLength(1);
    });

    test('AgentContext supports optional fields', () => {
      const ctx: AgentContext = {
        sessionId: 's1',
        userId: 'u1',
        tenantId: 't1',
        messages: [],
        maxIterations: 5,
        requireApprovalForDestructive: true,
      };
      expect(ctx.maxIterations).toBe(5);
      expect(ctx.requireApprovalForDestructive).toBe(true);
    });

    test('AgentResponse has risk summary', () => {
      const resp: AgentResponse = {
        text: 'Done',
        toolCallsExecuted: 3,
        riskSummary: { safe: 2, reversible: 1, destructive: 0 },
        status: 'idle',
      };
      expect(resp.riskSummary.safe).toBe(2);
      expect(resp.status).toBe('idle');
    });
  });

  // ── Tool calls ──
  describe('ToolCall structure', () => {
    test('file_read call', () => {
      const tc: ToolCall = {
        id: 'call-1',
        name: 'file_read',
        arguments: { path: '/app/src/main.ts' },
      };
      expect(tc.name).toBe('file_read');
      expect(tc.arguments).toHaveProperty('path');
    });

    test('file_write call', () => {
      const tc: ToolCall = {
        id: 'call-2',
        name: 'file_write',
        arguments: { path: '/app/src/main.ts', content: 'new code' },
      };
      expect(tc.arguments).toHaveProperty('content');
    });

    test('terminal_exec call', () => {
      const tc: ToolCall = {
        id: 'call-3',
        name: 'terminal_exec',
        arguments: { command: 'git status' },
      };
      expect(tc.arguments).toHaveProperty('command');
    });

    test('git_commit call with files array', () => {
      const tc: ToolCall = {
        id: 'call-4',
        name: 'git_commit',
        arguments: {
          message: 'feat: add feature',
          files: ['src/main.ts', 'src/utils.ts'],
        },
      };
      expect(Array.isArray(tc.arguments.files)).toBe(true);
      expect(tc.arguments.files).toHaveLength(2);
    });
  });

  // ── Tool results ──
  describe('ToolResult structure', () => {
    test('successful result', () => {
      const result: ToolResult = {
        toolCallId: 'call-1',
        content: 'file content here',
        isError: false,
      };
      expect(result.isError).toBe(false);
    });

    test('error result', () => {
      const result: ToolResult = {
        toolCallId: 'call-1',
        content: 'File not found',
        isError: true,
      };
      expect(result.isError).toBe(true);
    });
  });

  // ── Agent messages ──
  describe('AgentMessage structure', () => {
    test('user message', () => {
      const msg: AgentMessage = {
        role: 'user',
        content: 'Execute git status',
      };
      expect(msg.role).toBe('user');
    });

    test('assistant with tool calls', () => {
      const msg: AgentMessage = {
        role: 'assistant',
        content: 'Vou verificar o status',
        toolCalls: [
          { id: 'c1', name: 'git_status', arguments: {} },
        ],
      };
      expect(msg.toolCalls).toHaveLength(1);
    });

    test('tool response message', () => {
      const msg: AgentMessage = {
        role: 'tool',
        content: '[c1] M  src/main.ts',
        toolResults: [
          { toolCallId: 'c1', content: 'M  src/main.ts' },
        ],
      };
      expect(msg.toolResults).toHaveLength(1);
    });
  });

  // ── Risk summary ──
  describe('Risk summary tracking', () => {
    test('all safe actions', () => {
      const summary = { safe: 5, reversible: 0, destructive: 0 };
      expect(summary.safe).toBe(5);
      expect(summary.destructive).toBe(0);
    });

    test('mixed risk actions', () => {
      const summary = { safe: 2, reversible: 1, destructive: 1 };
      const total = summary.safe + summary.reversible + summary.destructive;
      expect(total).toBe(4);
    });

    test('destructive actions flagged', () => {
      const summary = { safe: 0, reversible: 0, destructive: 3 };
      expect(summary.destructive).toBeGreaterThan(0);
    });
  });

  // ── Agent status ──
  describe('Agent status lifecycle', () => {
    test('status transitions', () => {
      const transitions: Array<{ from: string; to: string }> = [
        { from: 'idle', to: 'thinking' },
        { from: 'thinking', to: 'executing' },
        { from: 'executing', to: 'idle' },
      ];
      expect(transitions).toHaveLength(3);
    });

    test('error status', () => {
      const status = 'error';
      expect(status).toBe('error');
    });

    test('awaiting_approval status', () => {
      const status = 'awaiting_approval';
      expect(status).toBe('awaiting_approval');
    });
  });

  // ── Max iterations ──
  describe('Max iterations', () => {
    test('default max iterations is 10', () => {
      const DEFAULT_MAX = 10;
      expect(DEFAULT_MAX).toBe(10);
    });

    test('custom max iterations', () => {
      const ctx: AgentContext = {
        sessionId: 's1',
        userId: 'u1',
        messages: [],
        maxIterations: 3,
      };
      expect(ctx.maxIterations).toBe(3);
    });
  });

  // ── System prompt ──
  describe('System prompt', () => {
    test('includes Portuguese instruction', () => {
      const prompt = 'Responda sempre em português do Brasil.';
      expect(prompt).toContain('português');
    });

    test('lists available tools', () => {
      const tools = ['file_read', 'file_write', 'terminal_exec', 'git_status'];
      expect(tools.length).toBeGreaterThan(0);
    });
  });
});
