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

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { addCustomRule } from '../safety/risk-engine';
import type { RiskRule } from '../safety/risk-engine';

// ─── Tipos ──────────────────────────────────────────────────────────────────

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

// ─── Plugin Registry ────────────────────────────────────────────────────────

class PluginRegistryClass {
  private plugins: Map<string, PluginDefinition> = new Map();
  private tools: Map<string, PluginTool> = new Map();
  private riskRules: Map<string, () => void> = new Map();

  /**
   * Registra um plugin.
   */
  register(plugin: PluginDefinition): void {
    this.plugins.set(plugin.id, plugin);

    // Registrar tools
    for (const tool of plugin.tools) {
      this.tools.set(tool.name, tool);

      // Registrar regra de risco customizada
      const removeRule = addCustomRule({
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
  unregister(pluginId: string): void {
    const plugin = this.plugins.get(pluginId);
    if (!plugin) return;

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
  getPlugin(pluginId: string): PluginDefinition | undefined {
    return this.plugins.get(pluginId);
  }

  /**
   * Lista todos os plugins registrados.
   */
  listPlugins(): PluginDefinition[] {
    return Array.from(this.plugins.values());
  }

  /**
   * Busca uma tool por nome.
   */
  getTool(toolName: string): PluginTool | undefined {
    return this.tools.get(toolName);
  }

  /**
   * Lista todas as tools registradas.
   */
  listTools(): PluginTool[] {
    return Array.from(this.tools.values());
  }

  /**
   * Retorna definições de tools no formato do agent loop.
   */
  getToolDefinitions(): Array<{
    name: string;
    description: string;
    parameters: Record<string, unknown>;
  }> {
    return Array.from(this.tools.values()).map((t) => ({
      name: t.name,
      description: t.description,
      parameters: t.parameters,
    }));
  }

  /**
   * Executa uma tool de plugin.
   */
  async executeTool(
    toolName: string,
    args: Record<string, unknown>,
    ctx: PluginContext
  ): Promise<unknown> {
    const tool = this.tools.get(toolName);
    if (!tool) throw new Error(`Tool de plugin não encontrada: ${toolName}`);
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
export const PluginRegistry = new PluginRegistryClass();

// ─── Supabase Operations ────────────────────────────────────────────────────

function createServiceClient(): SupabaseClient {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
  );
}

/**
 * Salva um plugin no banco de dados.
 */
export async function savePlugin(
  plugin: PluginDefinition,
  userId: string,
  sb?: SupabaseClient
): Promise<void> {
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
export async function listInstalledPlugins(
  userId: string,
  sb?: SupabaseClient
): Promise<InstalledPlugin[]> {
  const client = sb ?? createServiceClient();

  const { data, error } = await client
    .from('plugins')
    .select('*')
    .eq('user_id', userId)
    .eq('enabled', true);

  if (error || !data) return [];

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
export async function togglePlugin(
  pluginId: string,
  userId: string,
  enabled: boolean,
  sb?: SupabaseClient
): Promise<boolean> {
  const client = sb ?? createServiceClient();

  const { error } = await client
    .from('plugins')
    .update({ enabled })
    .eq('id', pluginId)
    .eq('user_id', userId);

  return !error;
}
