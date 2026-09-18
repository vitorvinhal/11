/**
 * Skill System — FASE 9B
 *
 * Testes unitários do sistema de skills.
 */

import { SkillManager, BUILTIN_SKILLS } from './skill-system';
import type { SkillDefinition, SkillRestrictions } from './skill-system';

describe('Skill System — FASE 9B', () => {
  beforeEach(() => {
    // Re-register built-in skills
    for (const s of BUILTIN_SKILLS) {
      SkillManager.register(s);
    }
  });

  // ── Built-in skills ──
  describe('Built-in skills', () => {
    test('has 4 built-in skills', () => {
      expect(BUILTIN_SKILLS).toHaveLength(4);
    });

    test('code-writer skill exists', () => {
      const skill = SkillManager.getSkill('code-writer');
      expect(skill).toBeDefined();
      expect(skill?.name).toBe('Code Writer');
    });

    test('researcher skill is read-only', () => {
      const skill = SkillManager.getSkill('researcher');
      expect(skill?.restrictions?.readOnly).toBe(true);
    });

    test('devops skill has forbidden actions', () => {
      const skill = SkillManager.getSkill('devops');
      expect(skill?.restrictions?.forbiddenActions).toContain('filesystem.delete');
    });
  });

  // ── Registration ──
  describe('register()', () => {
    test('registers custom skill', () => {
      const custom: SkillDefinition = {
        id: 'custom',
        name: 'Custom Skill',
        description: 'A custom skill',
        systemPrompt: 'You are custom.',
        tools: ['file_read'],
        config: {},
      };
      SkillManager.register(custom);
      expect(SkillManager.getSkill('custom')).toBeDefined();
    });
  });

  // ── System prompt ──
  describe('buildSystemPrompt()', () => {
    test('builds prompt from enabled skills', () => {
      const prompt = SkillManager.buildSystemPrompt(['code-writer', 'researcher']);
      expect(prompt).toContain('Code Writer');
      expect(prompt).toContain('Researcher');
    });

    test('empty for no skills', () => {
      const prompt = SkillManager.buildSystemPrompt([]);
      expect(prompt).toBe('');
    });

    test('ignores unknown skills', () => {
      const prompt = SkillManager.buildSystemPrompt(['nonexistent']);
      expect(prompt).toBe('');
    });
  });

  // ── Tools ──
  describe('getEnabledTools()', () => {
    test('combines tools from multiple skills', () => {
      const tools = SkillManager.getEnabledTools(['code-writer', 'researcher']);
      expect(tools).toContain('file_read');
      expect(tools).toContain('file_write');
      expect(tools).toContain('terminal_exec');
    });

    test('deduplicates tools', () => {
      const tools = SkillManager.getEnabledTools(['code-writer', 'devops']);
      const unique = new Set(tools);
      expect(tools.length).toBe(unique.size);
    });

    test('empty for no skills', () => {
      const tools = SkillManager.getEnabledTools([]);
      expect(tools).toHaveLength(0);
    });
  });

  // ── Restrictions ──
  describe('validateAction()', () => {
    test('allows all actions with no restrictions', () => {
      const result = SkillManager.validateAction('filesystem.write', ['code-writer']);
      expect(result.allowed).toBe(true);
    });

    test('blocks write in read-only skill', () => {
      const result = SkillManager.validateAction('filesystem.write', ['researcher']);
      expect(result.allowed).toBe(false);
      expect(result.reason).toContain('read-only');
    });

    test('blocks terminal in no-terminal skill', () => {
      const result = SkillManager.validateAction('terminal.exec', ['doc-writer']);
      expect(result.allowed).toBe(false);
      expect(result.reason).toContain('terminal');
    });

    test('blocks forbidden action', () => {
      const result = SkillManager.validateAction('filesystem.delete', ['devops']);
      expect(result.allowed).toBe(false);
      expect(result.reason).toContain('proíbe');
    });

    test('allows safe action in devops', () => {
      const result = SkillManager.validateAction('git.status', ['devops']);
      expect(result.allowed).toBe(true);
    });

    test('empty skills allows everything', () => {
      const result = SkillManager.validateAction('filesystem.delete', []);
      expect(result.allowed).toBe(true);
    });
  });

  // ── Stats ──
  describe('stats', () => {
    test('tracks registered skills', () => {
      expect(SkillManager.stats.skills).toBeGreaterThanOrEqual(4);
    });
  });
});
