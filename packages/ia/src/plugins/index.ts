/**
 * Plugins & Skills — FASE 9
 *
 * Sistema de extensibilidade do agente.
 */

export { PluginRegistry, savePlugin, listInstalledPlugins, togglePlugin } from './plugin-registry';
export { SkillManager, BUILTIN_SKILLS, saveSkill, listInstalledSkills } from './skill-system';

export type {
  PluginDefinition,
  PluginTool,
  PluginContext,
  InstalledPlugin,
} from './plugin-registry';

export type {
  SkillDefinition,
  SkillRestrictions,
  InstalledSkill,
} from './skill-system';
