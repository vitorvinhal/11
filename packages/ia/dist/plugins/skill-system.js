"use strict";
/**
 * FASE 9B — Skill System
 *
 * Skills são templates de comportamento do agente.
 * Diferente de plugins (que registram tools), skills definem:
 *   - Instruções de system prompt
 *   - Configurações padrão
 *   - Tools habilitadas
 *   - Restrições de segurança
 *
 * Tabelas Supabase:
 *   skills: id, name, description, system_prompt, tools, config, enabled, created_at
 *   skills_projects: id, skill_id, project_id, enabled
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillManager = exports.BUILTIN_SKILLS = void 0;
exports.saveSkill = saveSkill;
exports.listInstalledSkills = listInstalledSkills;
const supabase_js_1 = require("@supabase/supabase-js");
// ─── Built-in Skills ────────────────────────────────────────────────────────
exports.BUILTIN_SKILLS = [
    {
        id: 'code-writer',
        name: 'Code Writer',
        description: 'Especialista em escrever código limpo e eficiente',
        systemPrompt: `Você é um especialista em programação.
Sempre escreva código limpo, bem documentado e seguindo boas práticas.
Use TypeScript quando possível. Inclua tratamento de erros.`,
        tools: ['file_read', 'file_write', 'terminal_exec'],
        config: { language: 'typescript', style: 'clean' },
    },
    {
        id: 'researcher',
        name: 'Researcher',
        description: 'Pesquisador que busca e analisa informações',
        systemPrompt: `Você é um pesquisador especializado.
Sempre busque fontes confiáveis. Cite suas fontes.
Apresente dados de forma clara e objetiva.`,
        tools: ['file_read', 'terminal_exec'],
        config: { depth: 'thorough' },
        restrictions: { readOnly: true },
    },
    {
        id: 'devops',
        name: 'DevOps Engineer',
        description: 'Especialista em deploy, CI/CD e infraestrutura',
        systemPrompt: `Você é um engenheiro DevOps.
Cuidado com comandos destrutivos. Sempre confirme antes de executar.
Prefira comandos seguros e reversíveis.`,
        tools: ['file_read', 'file_write', 'terminal_exec', 'git_status', 'git_diff', 'git_commit'],
        config: { safeMode: true },
        restrictions: { forbiddenActions: ['filesystem.delete'] },
    },
    {
        id: 'doc-writer',
        name: 'Documentation Writer',
        description: 'Especialista em documentação técnica',
        systemPrompt: `Você é um especialista em documentação.
Escreva documentação clara, concisa e bem estruturada.
Use Markdown. Inclua exemplos de código.`,
        tools: ['file_read', 'file_write'],
        config: { format: 'markdown' },
        restrictions: { readOnly: true, noTerminal: true },
    },
];
// ─── Skill Manager ──────────────────────────────────────────────────────────
class SkillManagerClass {
    skills = new Map();
    constructor() {
        // Registrar built-in skills
        for (const skill of exports.BUILTIN_SKILLS) {
            this.skills.set(skill.id, skill);
        }
    }
    /**
     * Registra uma skill customizada.
     */
    register(skill) {
        this.skills.set(skill.id, skill);
    }
    /**
     * Remove uma skill.
     */
    unregister(skillId) {
        this.skills.delete(skillId);
    }
    /**
     * Busca uma skill por ID.
     */
    getSkill(skillId) {
        return this.skills.get(skillId);
    }
    /**
     * Lista todas as skills disponíveis.
     */
    listSkills() {
        return Array.from(this.skills.values());
    }
    /**
     * Retorna o system prompt combinado de skills habilitadas.
     */
    buildSystemPrompt(enabledSkillIds) {
        const prompts = [];
        for (const id of enabledSkillIds) {
            const skill = this.skills.get(id);
            if (skill) {
                prompts.push(`## Skill: ${skill.name}\n${skill.systemPrompt}`);
            }
        }
        return prompts.join('\n\n');
    }
    /**
     * Retorna tools combinadas de skills habilitadas.
     */
    getEnabledTools(enabledSkillIds) {
        const tools = new Set();
        for (const id of enabledSkillIds) {
            const skill = this.skills.get(id);
            if (skill) {
                for (const t of skill.tools) {
                    tools.add(t);
                }
            }
        }
        return Array.from(tools);
    }
    /**
     * Valida se uma ação é permitida pelas restrições das skills.
     */
    validateAction(action, enabledSkillIds) {
        for (const id of enabledSkillIds) {
            const skill = this.skills.get(id);
            if (!skill?.restrictions)
                continue;
            const r = skill.restrictions;
            if (r.readOnly && (action.startsWith('filesystem.write') || action.startsWith('filesystem.delete'))) {
                return { allowed: false, reason: `Skill "${skill.name}" é read-only` };
            }
            if (r.noTerminal && action.startsWith('terminal.')) {
                return { allowed: false, reason: `Skill "${skill.name}" não permite terminal` };
            }
            if (r.noNetwork && action.startsWith('network.')) {
                return { allowed: false, reason: `Skill "${skill.name}" não permite acesso à rede` };
            }
            if (r.forbiddenActions?.includes(action)) {
                return { allowed: false, reason: `Skill "${skill.name}" proíbe a ação "${action}"` };
            }
        }
        return { allowed: true };
    }
    get stats() {
        return { skills: this.skills.size };
    }
}
// Singleton
exports.SkillManager = new SkillManagerClass();
// ─── Supabase Operations ────────────────────────────────────────────────────
function createServiceClient() {
    return (0, supabase_js_1.createClient)(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '', process.env.SUPABASE_SERVICE_ROLE_KEY ?? '');
}
/**
 * Salva uma skill no banco de dados.
 */
async function saveSkill(skill, sb) {
    const client = sb ?? createServiceClient();
    await client.from('skills').upsert({
        id: skill.id,
        name: skill.name,
        description: skill.description,
        system_prompt: skill.systemPrompt,
        tools: JSON.stringify(skill.tools),
        config: JSON.stringify(skill.config),
        enabled: true,
    });
}
/**
 * Lista skills instaladas.
 */
async function listInstalledSkills(sb) {
    const client = sb ?? createServiceClient();
    const { data, error } = await client
        .from('skills')
        .select('*')
        .eq('enabled', true);
    if (error || !data)
        return [];
    return data.map((s) => ({
        id: s.id,
        name: s.name,
        description: s.description,
        systemPrompt: s.system_prompt,
        tools: JSON.parse(s.tools ?? '[]'),
        config: JSON.parse(s.config ?? '{}'),
    }));
}
