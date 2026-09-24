/**
 * CI-MIN-001 — Regressão de segurança: PATH TRAVERSAL.
 *
 * Cobertura exigida:
 * - attempts ../.. e ..\\ bloqueados
 * - path absoluto fora da raiz bloqueado
 * - prefixo irmão (sibling dir) não passa por startsWith-like
 * - cwd fora das raízes bloqueado no validate()
 *
 * Alvos: isWithinRoot/validateFileArgs/validate (terminal-validate.ts),
 * usados por resolveCwd no handler do terminal.
 */

import {
  isWithinRoot,
  isUnderRoot,
  validateFileArgs,
  validate,
} from "./terminal-validate";
import { resolve } from "path";

const ROOT = resolve("/tmp/ci-min-root");
const SIBLING = resolve("/tmp/ci-min-root-evil");
const OUTSIDE = resolve("/etc");

describe("traversal-regression — isWithinRoot", () => {
  test("relativo ../.. saindo da raiz → false", () => {
    expect(isWithinRoot(resolve(ROOT, "../../etc/passwd"), [ROOT])).toBe(false);
  });

  test("relativo ..\\..\\ saindo da raiz → false", () => {
    expect(
      isWithinRoot(resolve(ROOT, "..\\..\\Windows\\System32"), [ROOT]),
    ).toBe(false);
  });

  test("path absoluto fora da raiz → false", () => {
    expect(isWithinRoot(OUTSIDE, [ROOT])).toBe(false);
    expect(isWithinRoot("C:\\Windows\\System32\\config", [ROOT])).toBe(false);
  });

  test("prefixo irmão (/tmp/ci-min-root-evil vs raiz /tmp/ci-min-root) → false", () => {
    expect(isWithinRoot(SIBLING, [ROOT])).toBe(false);
  });

  test("caminho dentro da raiz → true", () => {
    expect(isWithinRoot(resolve(ROOT, "sub/arquivo.txt"), [ROOT])).toBe(true);
    expect(isWithinRoot(ROOT, [ROOT])).toBe(true);
  });

  test("isUnderRoot é alias compatível de isWithinRoot", () => {
    expect(isUnderRoot(OUTSIDE, [ROOT])).toBe(false);
    expect(isUnderRoot(ROOT, [ROOT])).toBe(true);
  });
});

describe("traversal-regression — validateFileArgs", () => {
  test("cat com ../.. fora da raiz → bloqueado", () => {
    expect(validateFileArgs("cat ../../etc/passwd", ROOT).ok).toBe(false);
  });

  test("cat com ..\\..\\ fora da raiz → bloqueado", () => {
    expect(validateFileArgs("cat ..\\..\\secrets.txt", ROOT).ok).toBe(false);
  });

  test("cat com path absoluto fora da raiz → bloqueado", () => {
    expect(validateFileArgs(`cat ${OUTSIDE}/passwd`, ROOT).ok).toBe(false);
  });

  test("cat de arquivo dentro da raiz → permitido", () => {
    // validateFileArgs valida args contra ALLOWED_ROOTS global (= process.cwd() no teste).
    const inside = process.cwd();
    expect(validateFileArgs(`cat ${inside}/ok.txt`, inside).ok).toBe(true);
  });
});

describe("traversal-regression — validate (cwd fora da raiz)", () => {
  test("cwd absoluto fora das raízes → bloqueado", () => {
    expect(validate("ls", OUTSIDE, [ROOT]).ok).toBe(false);
  });

  test("cwd com ../.. além da raiz → bloqueado", () => {
    expect(validate("ls", resolve(ROOT, "../.."), [ROOT]).ok).toBe(false);
  });

  test("cwd dentro da raiz → permitido (controle positivo)", () => {
    expect(validate("ls", ROOT, [ROOT]).ok).toBe(true);
  });
});
