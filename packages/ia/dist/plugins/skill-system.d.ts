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
import { SupabaseClient } from '@supabase/supabase-js';
export interface SkillDefinition {
    /** ID único da skill */
    id: string;
    /** Nome amigável */
    name: string;
    /** Descrição */
    description: string;
    /** System prompt que a skill injeta */
    systemPrompt: string;
    /** Tools habilitadas por esta skill */
    tools: string[];
    /** Configurações padrão */
    config: Record<string, unknown>;
    /** Restrições de segurança */
    restrictions?: SkillRestrictions;
}
export interface SkillRestrictions {
    /** Se true, não pode escrever arquivos */
    readOnly?: boolean;
    /** Se true, não pode executar comandos no terminal */
    noTerminal?: boolean;
    /** Se true, não pode acessar rede */
    noNetwork?: boolean;
    /** Paths permitidos (se definido, só estes paths são acessíveis) */
    allowedPaths?: string[];
    /** Ações proibidas */
    forbiddenActions?: string[];
}
export interface InstalledSkill {
    id: string;
    skillId: string;
    projectId?: string;
    enabled: boolean;
    config: Record<string, unknown>;
    installedAt: Date;
}
export declare const BUILTIN_SKILLS: SkillDefinition[];
declare class SkillManagerClass {
    private skills;
    constructor();
    /**
     * Registra uma skill customizada.
     */
    register(skill: SkillDefinition): void;
    /**
     * Remove uma skill.
     */
    unregister(skillId: string): void;
    /**
     * Busca uma skill por ID.
     */
    getSkill(skillId: string): SkillDefinition | undefined;
    /**
     * Lista todas as skills disponíveis.
     */
    listSkills(): SkillDefinition[];
    /**
     * Retorna o system prompt combinado de skills habilitadas.
     */
    buildSystemPrompt(enabledSkillIds: string[]): string;
    /**
     * Retorna tools combinadas de skills habilitadas.
     */
    getEnabledTools(enabledSkillIds: string[]): string[];
    /**
     * Valida se uma ação é permitida pelas restrições das skills.
     */
    validateAction(action: string, enabledSkillIds: string[]): {
        allowed: boolean;
        reason?: string;
    };
    get stats(): {
        skills: number;
    };
}
export declare const SkillManager: SkillManagerClass;
/**
 * Salva uma skill no banco de dados.
 */
export declare function saveSkill(skill: SkillDefinition, sb?: SupabaseClient): Promise<void>;
/**
 * Lista skills instaladas.
 */
export declare function listInstalledSkills(sb?: SupabaseClient): Promise<SkillDefinition[]>;
export {};
