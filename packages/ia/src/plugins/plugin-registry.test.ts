/**
 * Plugin Registry — FASE 9A
 *
 * Testes unitários do registry de plugins.
 */

import { PluginRegistry } from './plugin-registry';
import type { PluginDefinition, PluginTool, PluginContext } from './plugin-registry';

describe('Plugin Registry — FASE 9A', () => {
  beforeEach(() => {
    // Limpar plugins de testes anteriores
    for (const p of PluginRegistry.listPlugins()) {
      PluginRegistry.unregister(p.id);
    }
  });

  const mockTool: PluginTool = {
    name: 'test.do_thing',
    description: 'Faz uma coisa teste',
    action: 'test.do_thing',
    parameters: {
      type: 'object',
      properties: {
        input: { type: 'string', description: 'Input' },
      },
      required: ['input'],
    },
    handler: async (args) => `Resultado: ${args.input}`,
  };

  const mockPlugin: PluginDefinition = {
    id: 'test-plugin',
    name: 'Test Plugin',
    description: 'Plugin de teste',
    version: '1.0.0',
    author: 'Test Author',
    category: 'Test',
    tools: [mockTool],
  };

  // ── Registration ──
  describe('register()', () => {
    test('registers a plugin with tools', () => {
      PluginRegistry.register(mockPlugin);
      expect(PluginRegistry.getPlugin('test-plugin')).toBeDefined();
      expect(PluginRegistry.listTools()).toHaveLength(1);
    });

    test('registers multiple tools', () => {
      const plugin: PluginDefinition = {
        ...mockPlugin,
        tools: [
          mockTool,
          { ...mockTool, name: 'test.other_thing', action: 'test.other_thing' },
        ],
      };
      PluginRegistry.register(plugin);
      expect(PluginRegistry.listTools()).toHaveLength(2);
    });

    test('stats are updated', () => {
      PluginRegistry.register(mockPlugin);
      expect(PluginRegistry.stats.plugins).toBe(1);
      expect(PluginRegistry.stats.tools).toBe(1);
    });
  });

  // ── Unregistration ──
  describe('unregister()', () => {
    test('removes plugin and its tools', () => {
      PluginRegistry.register(mockPlugin);
      expect(PluginRegistry.getPlugin('test-plugin')).toBeDefined();
      PluginRegistry.unregister('test-plugin');
      expect(PluginRegistry.getPlugin('test-plugin')).toBeUndefined();
      expect(PluginRegistry.listTools()).toHaveLength(0);
    });

    test('does nothing for unknown plugin', () => {
      PluginRegistry.unregister('nonexistent');
      expect(PluginRegistry.stats.plugins).toBe(0);
    });
  });

  // ── Tool lookup ──
  describe('getTool()', () => {
    test('finds registered tool', () => {
      PluginRegistry.register(mockPlugin);
      const tool = PluginRegistry.getTool('test.do_thing');
      expect(tool).toBeDefined();
      expect(tool?.name).toBe('test.do_thing');
    });

    test('returns undefined for unknown tool', () => {
      expect(PluginRegistry.getTool('unknown.tool')).toBeUndefined();
    });
  });

  // ── Tool definitions ──
  describe('getToolDefinitions()', () => {
    test('returns tools in agent format', () => {
      PluginRegistry.register(mockPlugin);
      const defs = PluginRegistry.getToolDefinitions();
      expect(defs).toHaveLength(1);
      expect(defs[0]).toHaveProperty('name');
      expect(defs[0]).toHaveProperty('description');
      expect(defs[0]).toHaveProperty('parameters');
    });
  });

  // ── Tool execution ──
  describe('executeTool()', () => {
    test('executes plugin tool handler', async () => {
      PluginRegistry.register(mockPlugin);
      const ctx: PluginContext = {
        userId: 'user-1',
        sessionId: 'session-1',
        config: {},
      };
      const result = await PluginRegistry.executeTool('test.do_thing', { input: 'hello' }, ctx);
      expect(result).toBe('Resultado: hello');
    });

    test('throws for unknown tool', async () => {
      const ctx: PluginContext = {
        userId: 'user-1',
        sessionId: 'session-1',
        config: {},
      };
      await expect(
        PluginRegistry.executeTool('unknown.tool', {}, ctx)
      ).rejects.toThrow('Tool de plugin não encontrada');
    });
  });

  // ── Plugin listing ──
  describe('listPlugins()', () => {
    test('lists all registered plugins', () => {
      PluginRegistry.register(mockPlugin);
      const list = PluginRegistry.listPlugins();
      expect(list).toHaveLength(1);
      expect(list[0].id).toBe('test-plugin');
    });

    test('empty list when no plugins', () => {
      expect(PluginRegistry.listPlugins()).toHaveLength(0);
    });
  });

  // ── Multiple plugins ──
  describe('Multiple plugins', () => {
    test('can register multiple plugins', () => {
      PluginRegistry.register(mockPlugin);
      PluginRegistry.register({
        ...mockPlugin,
        id: 'other-plugin',
        tools: [{ ...mockTool, name: 'other.tool', action: 'other.tool' }],
      });
      expect(PluginRegistry.stats.plugins).toBe(2);
      expect(PluginRegistry.stats.tools).toBe(2);
    });

    test('unregister one does not affect others', () => {
      PluginRegistry.register(mockPlugin);
      PluginRegistry.register({
        ...mockPlugin,
        id: 'other-plugin',
        tools: [{ ...mockTool, name: 'other.tool', action: 'other.tool' }],
      });
      PluginRegistry.unregister('test-plugin');
      expect(PluginRegistry.stats.plugins).toBe(1);
      expect(PluginRegistry.getPlugin('other-plugin')).toBeDefined();
    });
  });
});
