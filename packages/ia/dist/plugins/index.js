"use strict";
/**
 * Plugins & Skills — FASE 9
 *
 * Sistema de extensibilidade do agente.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.listInstalledSkills = exports.saveSkill = exports.BUILTIN_SKILLS = exports.SkillManager = exports.togglePlugin = exports.listInstalledPlugins = exports.savePlugin = exports.PluginRegistry = void 0;
var plugin_registry_1 = require("./plugin-registry");
Object.defineProperty(exports, "PluginRegistry", { enumerable: true, get: function () { return plugin_registry_1.PluginRegistry; } });
Object.defineProperty(exports, "savePlugin", { enumerable: true, get: function () { return plugin_registry_1.savePlugin; } });
Object.defineProperty(exports, "listInstalledPlugins", { enumerable: true, get: function () { return plugin_registry_1.listInstalledPlugins; } });
Object.defineProperty(exports, "togglePlugin", { enumerable: true, get: function () { return plugin_registry_1.togglePlugin; } });
var skill_system_1 = require("./skill-system");
Object.defineProperty(exports, "SkillManager", { enumerable: true, get: function () { return skill_system_1.SkillManager; } });
Object.defineProperty(exports, "BUILTIN_SKILLS", { enumerable: true, get: function () { return skill_system_1.BUILTIN_SKILLS; } });
Object.defineProperty(exports, "saveSkill", { enumerable: true, get: function () { return skill_system_1.saveSkill; } });
Object.defineProperty(exports, "listInstalledSkills", { enumerable: true, get: function () { return skill_system_1.listInstalledSkills; } });
