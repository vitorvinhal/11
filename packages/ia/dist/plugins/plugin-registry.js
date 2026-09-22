"use strict";
/**
 * FASE 9A — Plugin Registry
 *
 * Sistema de registro e discovery de plugins/tools para o agente.
 * Plugins podem registrar tools, hooks e configs.
 *
 * Tabelas Supabase:
 *   plugins: id, user_id, name, description, version, author, enabled, config, created_at
 *   plugin_tools: id, plugin_id, name, description, action, parameters, created_at
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginRegistry = void 0;
exports.savePlugin = savePlugin;
exports.listInstalledPlugins = listInstalledPlugins;
exports.togglePlugin = togglePlugin;
const supabase_js_1 = require("@supabase/supabase-js");
const risk_engine_1 = require("../safety/risk-engine");
// ─── Plugin Registry ────────────────────────────────────────────────────────
class PluginRegistryClass {
    plugins = new Map();
    tools = new Map();
    riskRules = new Map();
    /**
     * Registra um plugin.
     */
    register(plugin) {
        this.plugins.set(plugin.id, plugin);
        // Registrar tools
        for (const tool of plugin.tools) {
            this.tools.set(tool.name, tool);
            // Registrar regra de risco customizada
            const removeRule = (0, risk_engine_1.addCustomRule)({
                pattern: new RegExp(`^${tool.action.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`),
                risk: 'REVERSIBLE', // Plugins default para REVERSIBLE
                description: `Plugin: ${plugin.name} — ${tool.description}`,
            });
            this.riskRules.set(`${plugin.id}:${tool.name}`, removeRule);
        }
    }
    /**
     * Desregistra um plugin.
     */
    unregister(pluginId) {
        const plugin = this.plugins.get(pluginId);
        if (!plugin)
            return;
        // Remover tools
        for (const tool of plugin.tools) {
            this.tools.delete(tool.name);
        }
        // Remover regras de risco
        for (const key of this.riskRules.keys()) {
            if (key.startsWith(`${pluginId}:`)) {
                this.riskRules.get(key)?.();
                this.riskRules.delete(key);
            }
        }
        this.plugins.delete(pluginId);
    }
    /**
     * Busca um plugin por ID.
     */
    getPlugin(pluginId) {
        return this.plugins.get(pluginId);
    }
    /**
     * Lista todos os plugins registrados.
     */
    listPlugins() {
        return Array.from(this.plugins.values());
    }
    /**
     * Busca uma tool por nome.
     */
    getTool(toolName) {
        return this.tools.get(toolName);
    }
    /**
     * Lista todas as tools registradas.
     */
    listTools() {
        return Array.from(this.tools.values());
    }
    /**
     * Retorna definições de tools no formato do agent loop.
     */
    getToolDefinitions() {
        return Array.from(this.tools.values()).map((t) => ({
            name: t.name,
            description: t.description,
            parameters: t.parameters,
        }));
    }
    /**
     * Executa uma tool de plugin.
     */
    async executeTool(toolName, args, ctx) {
        const tool = this.tools.get(toolName);
        if (!tool)
            throw new Error(`Tool de plugin não encontrada: ${toolName}`);
        return tool.handler(args, ctx);
    }
    /**
     * Retorna o número de plugins/tools registrados.
     */
    get stats() {
        return {
            plugins: this.plugins.size,
            tools: this.tools.size,
            riskRules: this.riskRules.size,
        };
    }
}
// Singleton
exports.PluginRegistry = new PluginRegistryClass();
// ─── Supabase Operations ────────────────────────────────────────────────────
function createServiceClient() {
    return (0, supabase_js_1.createClient)(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '', process.env.SUPABASE_SERVICE_ROLE_KEY ?? '');
}
/**
 * Salva um plugin no banco de dados.
 */
async function savePlugin(plugin, userId, sb) {
    const client = sb ?? createServiceClient();
    await client.from('plugins').upsert({
        id: plugin.id,
        user_id: userId,
        name: plugin.name,
        description: plugin.description,
        version: plugin.version,
        author: plugin.author,
        enabled: true,
        config: JSON.stringify(plugin.config ?? {}),
    });
}
/**
 * Lista plugins instalados de um usuário.
 */
async function listInstalledPlugins(userId, sb) {
    const client = sb ?? createServiceClient();
    const { data, error } = await client
        .from('plugins')
        .select('*')
        .eq('user_id', userId)
        .eq('enabled', true);
    if (error || !data)
        return [];
    return data.map((p) => ({
        id: p.id,
        pluginId: p.id,
        userId: p.user_id,
        enabled: p.enabled,
        config: JSON.parse(p.config ?? '{}'),
        installedAt: new Date(p.created_at),
    }));
}
/**
 * Habilita/desabilita um plugin.
 */
async function togglePlugin(pluginId, userId, enabled, sb) {
    const client = sb ?? createServiceClient();
    const { error } = await client
        .from('plugins')
        .update({ enabled })
        .eq('id', pluginId)
        .eq('user_id', userId);
    return !error;
}
