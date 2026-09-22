"use strict";
/**
 * Skill System — FASE 9B
 *
 * Testes unitários do sistema de skills.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const skill_system_1 = require("./skill-system");
describe('Skill System — FASE 9B', () => {
    beforeEach(() => {
        // Re-register built-in skills
        for (const s of skill_system_1.BUILTIN_SKILLS) {
            skill_system_1.SkillManager.register(s);
        }
    });
    // ── Built-in skills ──
    describe('Built-in skills', () => {
        test('has 4 built-in skills', () => {
            expect(skill_system_1.BUILTIN_SKILLS).toHaveLength(4);
        });
        test('code-writer skill exists', () => {
            const skill = skill_system_1.SkillManager.getSkill('code-writer');
            expect(skill).toBeDefined();
            expect(skill?.name).toBe('Code Writer');
        });
        test('researcher skill is read-only', () => {
            const skill = skill_system_1.SkillManager.getSkill('researcher');
            expect(skill?.restrictions?.readOnly).toBe(true);
        });
        test('devops skill has forbidden actions', () => {
            const skill = skill_system_1.SkillManager.getSkill('devops');
            expect(skill?.restrictions?.forbiddenActions).toContain('filesystem.delete');
        });
    });
    // ── Registration ──
    describe('register()', () => {
        test('registers custom skill', () => {
            const custom = {
                id: 'custom',
                name: 'Custom Skill',
                description: 'A custom skill',
                systemPrompt: 'You are custom.',
                tools: ['file_read'],
                config: {},
            };
            skill_system_1.SkillManager.register(custom);
            expect(skill_system_1.SkillManager.getSkill('custom')).toBeDefined();
        });
    });
    // ── System prompt ──
    describe('buildSystemPrompt()', () => {
        test('builds prompt from enabled skills', () => {
            const prompt = skill_system_1.SkillManager.buildSystemPrompt(['code-writer', 'researcher']);
            expect(prompt).toContain('Code Writer');
            expect(prompt).toContain('Researcher');
        });
        test('empty for no skills', () => {
            const prompt = skill_system_1.SkillManager.buildSystemPrompt([]);
            expect(prompt).toBe('');
        });
        test('ignores unknown skills', () => {
            const prompt = skill_system_1.SkillManager.buildSystemPrompt(['nonexistent']);
            expect(prompt).toBe('');
        });
    });
    // ── Tools ──
    describe('getEnabledTools()', () => {
        test('combines tools from multiple skills', () => {
            const tools = skill_system_1.SkillManager.getEnabledTools(['code-writer', 'researcher']);
            expect(tools).toContain('file_read');
            expect(tools).toContain('file_write');
            expect(tools).toContain('terminal_exec');
        });
        test('deduplicates tools', () => {
            const tools = skill_system_1.SkillManager.getEnabledTools(['code-writer', 'devops']);
            const unique = new Set(tools);
            expect(tools.length).toBe(unique.size);
        });
        test('empty for no skills', () => {
            const tools = skill_system_1.SkillManager.getEnabledTools([]);
            expect(tools).toHaveLength(0);
        });
    });
    // ── Restrictions ──
    describe('validateAction()', () => {
        test('allows all actions with no restrictions', () => {
            const result = skill_system_1.SkillManager.validateAction('filesystem.write', ['code-writer']);
            expect(result.allowed).toBe(true);
        });
        test('blocks write in read-only skill', () => {
            const result = skill_system_1.SkillManager.validateAction('filesystem.write', ['researcher']);
            expect(result.allowed).toBe(false);
            expect(result.reason).toContain('read-only');
        });
        test('blocks terminal in no-terminal skill', () => {
            const result = skill_system_1.SkillManager.validateAction('terminal.exec', ['doc-writer']);
            expect(result.allowed).toBe(false);
            expect(result.reason).toContain('terminal');
        });
        test('blocks forbidden action', () => {
            const result = skill_system_1.SkillManager.validateAction('filesystem.delete', ['devops']);
            expect(result.allowed).toBe(false);
            expect(result.reason).toContain('proíbe');
        });
        test('allows safe action in devops', () => {
            const result = skill_system_1.SkillManager.validateAction('git.status', ['devops']);
            expect(result.allowed).toBe(true);
        });
        test('empty skills allows everything', () => {
            const result = skill_system_1.SkillManager.validateAction('filesystem.delete', []);
            expect(result.allowed).toBe(true);
        });
    });
    // ── Stats ──
    describe('stats', () => {
        test('tracks registered skills', () => {
            expect(skill_system_1.SkillManager.stats.skills).toBeGreaterThanOrEqual(4);
        });
    });
});
