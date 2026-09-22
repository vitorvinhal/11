"use strict";
/**
 * Plugin Registry — FASE 9A
 *
 * Testes unitários do registry de plugins.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_registry_1 = require("./plugin-registry");
describe('Plugin Registry — FASE 9A', () => {
    beforeEach(() => {
        // Limpar plugins de testes anteriores
        for (const p of plugin_registry_1.PluginRegistry.listPlugins()) {
            plugin_registry_1.PluginRegistry.unregister(p.id);
        }
    });
    const mockTool = {
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
    const mockPlugin = {
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
            plugin_registry_1.PluginRegistry.register(mockPlugin);
            expect(plugin_registry_1.PluginRegistry.getPlugin('test-plugin')).toBeDefined();
            expect(plugin_registry_1.PluginRegistry.listTools()).toHaveLength(1);
        });
        test('registers multiple tools', () => {
            const plugin = {
                ...mockPlugin,
                tools: [
                    mockTool,
                    { ...mockTool, name: 'test.other_thing', action: 'test.other_thing' },
                ],
            };
            plugin_registry_1.PluginRegistry.register(plugin);
            expect(plugin_registry_1.PluginRegistry.listTools()).toHaveLength(2);
        });
        test('stats are updated', () => {
            plugin_registry_1.PluginRegistry.register(mockPlugin);
            expect(plugin_registry_1.PluginRegistry.stats.plugins).toBe(1);
            expect(plugin_registry_1.PluginRegistry.stats.tools).toBe(1);
        });
    });
    // ── Unregistration ──
    describe('unregister()', () => {
        test('removes plugin and its tools', () => {
            plugin_registry_1.PluginRegistry.register(mockPlugin);
            expect(plugin_registry_1.PluginRegistry.getPlugin('test-plugin')).toBeDefined();
            plugin_registry_1.PluginRegistry.unregister('test-plugin');
            expect(plugin_registry_1.PluginRegistry.getPlugin('test-plugin')).toBeUndefined();
            expect(plugin_registry_1.PluginRegistry.listTools()).toHaveLength(0);
        });
        test('does nothing for unknown plugin', () => {
            plugin_registry_1.PluginRegistry.unregister('nonexistent');
            expect(plugin_registry_1.PluginRegistry.stats.plugins).toBe(0);
        });
    });
    // ── Tool lookup ──
    describe('getTool()', () => {
        test('finds registered tool', () => {
            plugin_registry_1.PluginRegistry.register(mockPlugin);
            const tool = plugin_registry_1.PluginRegistry.getTool('test.do_thing');
            expect(tool).toBeDefined();
            expect(tool?.name).toBe('test.do_thing');
        });
        test('returns undefined for unknown tool', () => {
            expect(plugin_registry_1.PluginRegistry.getTool('unknown.tool')).toBeUndefined();
        });
    });
    // ── Tool definitions ──
    describe('getToolDefinitions()', () => {
        test('returns tools in agent format', () => {
            plugin_registry_1.PluginRegistry.register(mockPlugin);
            const defs = plugin_registry_1.PluginRegistry.getToolDefinitions();
            expect(defs).toHaveLength(1);
            expect(defs[0]).toHaveProperty('name');
            expect(defs[0]).toHaveProperty('description');
            expect(defs[0]).toHaveProperty('parameters');
        });
    });
    // ── Tool execution ──
    describe('executeTool()', () => {
        test('executes plugin tool handler', async () => {
            plugin_registry_1.PluginRegistry.register(mockPlugin);
            const ctx = {
                userId: 'user-1',
                sessionId: 'session-1',
                config: {},
            };
            const result = await plugin_registry_1.PluginRegistry.executeTool('test.do_thing', { input: 'hello' }, ctx);
            expect(result).toBe('Resultado: hello');
        });
        test('throws for unknown tool', async () => {
            const ctx = {
                userId: 'user-1',
                sessionId: 'session-1',
                config: {},
            };
            await expect(plugin_registry_1.PluginRegistry.executeTool('unknown.tool', {}, ctx)).rejects.toThrow('Tool de plugin não encontrada');
        });
    });
    // ── Plugin listing ──
    describe('listPlugins()', () => {
        test('lists all registered plugins', () => {
            plugin_registry_1.PluginRegistry.register(mockPlugin);
            const list = plugin_registry_1.PluginRegistry.listPlugins();
            expect(list).toHaveLength(1);
            expect(list[0].id).toBe('test-plugin');
        });
        test('empty list when no plugins', () => {
            expect(plugin_registry_1.PluginRegistry.listPlugins()).toHaveLength(0);
        });
    });
    // ── Multiple plugins ──
    describe('Multiple plugins', () => {
        test('can register multiple plugins', () => {
            plugin_registry_1.PluginRegistry.register(mockPlugin);
            plugin_registry_1.PluginRegistry.register({
                ...mockPlugin,
                id: 'other-plugin',
                tools: [{ ...mockTool, name: 'other.tool', action: 'other.tool' }],
            });
            expect(plugin_registry_1.PluginRegistry.stats.plugins).toBe(2);
            expect(plugin_registry_1.PluginRegistry.stats.tools).toBe(2);
        });
        test('unregister one does not affect others', () => {
            plugin_registry_1.PluginRegistry.register(mockPlugin);
            plugin_registry_1.PluginRegistry.register({
                ...mockPlugin,
                id: 'other-plugin',
                tools: [{ ...mockTool, name: 'other.tool', action: 'other.tool' }],
            });
            plugin_registry_1.PluginRegistry.unregister('test-plugin');
            expect(plugin_registry_1.PluginRegistry.stats.plugins).toBe(1);
            expect(plugin_registry_1.PluginRegistry.getPlugin('other-plugin')).toBeDefined();
        });
    });
});
