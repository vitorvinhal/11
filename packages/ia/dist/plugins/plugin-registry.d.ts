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
import { SupabaseClient } from '@supabase/supabase-js';
export interface PluginDefinition {
    /** ID único do plugin */
    id: string;
    /** Nome amigável */
    name: string;
    /** Descrição */
    description: string;
    /** Versão semântica */
    version: string;
    /** Autor */
    author: string;
    /** Categoria */
    category: string;
    /** Tools que o plugin registra */
    tools: PluginTool[];
    /** Configuração do plugin */
    config?: Record<string, unknown>;
}
export interface PluginTool {
    /** Nome da tool (ex: 'myplugin.do_something') */
    name: string;
    /** Descrição */
    description: string;
    /** Ação do risk engine */
    action: string;
    /** Schema dos parâmetros (JSON Schema) */
    parameters: Record<string, unknown>;
    /** Handler da tool */
    handler: (args: Record<string, unknown>, ctx: PluginContext) => Promise<unknown>;
}
export interface PluginContext {
    userId: string;
    tenantId?: string;
    sessionId: string;
    config: Record<string, unknown>;
}
export interface InstalledPlugin {
    id: string;
    pluginId: string;
    userId: string;
    enabled: boolean;
    config: Record<string, unknown>;
    installedAt: Date;
}
declare class PluginRegistryClass {
    private plugins;
    private tools;
    private riskRules;
    /**
     * Registra um plugin.
     */
    register(plugin: PluginDefinition): void;
    /**
     * Desregistra um plugin.
     */
    unregister(pluginId: string): void;
    /**
     * Busca um plugin por ID.
     */
    getPlugin(pluginId: string): PluginDefinition | undefined;
    /**
     * Lista todos os plugins registrados.
     */
    listPlugins(): PluginDefinition[];
    /**
     * Busca uma tool por nome.
     */
    getTool(toolName: string): PluginTool | undefined;
    /**
     * Lista todas as tools registradas.
     */
    listTools(): PluginTool[];
    /**
     * Retorna definições de tools no formato do agent loop.
     */
    getToolDefinitions(): Array<{
        name: string;
        description: string;
        parameters: Record<string, unknown>;
    }>;
    /**
     * Executa uma tool de plugin.
     */
    executeTool(toolName: string, args: Record<string, unknown>, ctx: PluginContext): Promise<unknown>;
    /**
     * Retorna o número de plugins/tools registrados.
     */
    get stats(): {
        plugins: number;
        tools: number;
        riskRules: number;
    };
}
export declare const PluginRegistry: PluginRegistryClass;
/**
 * Salva um plugin no banco de dados.
 */
export declare function savePlugin(plugin: PluginDefinition, userId: string, sb?: SupabaseClient): Promise<void>;
/**
 * Lista plugins instalados de um usuário.
 */
export declare function listInstalledPlugins(userId: string, sb?: SupabaseClient): Promise<InstalledPlugin[]>;
/**
 * Habilita/desabilita um plugin.
 */
export declare function togglePlugin(pluginId: string, userId: string, enabled: boolean, sb?: SupabaseClient): Promise<boolean>;
export {};
