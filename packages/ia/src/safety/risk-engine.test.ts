import {
  classifyAction,
  getRisk,
  requiresApproval,
  addCustomRule,
  getAllRules,
} from "./risk-engine";

describe("Risk Engine — FASE 4A", () => {
  // ── SAFE actions ──
  describe("SAFE actions (read-only)", () => {
    const safeActions = [
      "filesystem.read",
      "filesystem.exists",
      "filesystem.list",
      "filesystem.stat",
      "git.status",
      "git.log",
      "git.diff",
      "git.branch",
      "sql.select",
      "network.fetch",
      "ai.complete",
      "ai.embed",
      "memory.read",
      "user.read",
      "deploy.preview",
    ];

    test.each(safeActions)("%s → SAFE", (action) => {
      const result = classifyAction(action);
      expect(result.risk).toBe("SAFE");
      expect(result.requiresApproval).toBe(false);
      expect(result.known).toBe(true);
    });
  });

  // ── REVERSIBLE actions ──
  describe("REVERSIBLE actions (can be undone)", () => {
    const reversibleActions = [
      "filesystem.write",
      "filesystem.mkdir",
      "git.stash",
      "git.commit",
      "sql.insert",
      "sql.update",
      "network.post",
      "deploy.rollback",
      "memory.write",
      "user.update",
      "plugin.enable",
      "plugin.disable",
    ];

    test.each(reversibleActions)("%s → REVERSIBLE", (action) => {
      const result = classifyAction(action);
      expect(result.risk).toBe("REVERSIBLE");
      expect(result.requiresApproval).toBe(true);
      expect(result.known).toBe(true);
    });
  });

  // ── DESTRUCTIVE actions ──
  describe("DESTRUCTIVE actions (permanent or dangerous)", () => {
    const destructiveActions = [
      "filesystem.delete",
      "filesystem.move",
      "filesystem.chmod",
      "terminal.exec",
      "terminal.spawn",
      "git.push",
      "git.pull",
      "git.reset",
      "git.checkout",
      "git.merge",
      "git.rebase",
      "git.forcePush",
      "git.clean",
      "sql.delete",
      "sql.drop",
      "sql.alter",
      "sql.truncate",
      "sql.exec",
      "deploy.production",
      "memory.delete",
      "user.delete",
      "plugin.install",
      "plugin.uninstall",
      "skill.install",
      "skill.uninstall",
    ];

    test.each(destructiveActions)("%s → DESTRUCTIVE", (action) => {
      const result = classifyAction(action);
      expect(result.risk).toBe("DESTRUCTIVE");
      expect(result.requiresApproval).toBe(true);
      expect(result.known).toBe(true);
    });
  });

  // ── Unknown actions → DESTRUCTIVE (default deny) ──
  describe("Unknown actions → DESTRUCTIVE (default deny)", () => {
    const unknownActions = [
      "random.action",
      "evil.deleteAll",
      "system.shutdown",
      "admin.grantPermission",
      "secret.extract",
      "unknown",
    ];

    test.each(unknownActions)("%s → DESTRUCTIVE (unknown)", (action) => {
      const result = classifyAction(action);
      expect(result.risk).toBe("DESTRUCTIVE");
      expect(result.requiresApproval).toBe(true);
      expect(result.known).toBe(false);
      expect(result.reason).toContain("desconhecida");
    });
  });

  // ── getRisk shortcut ──
  describe("getRisk() shortcut", () => {
    test("returns SAFE for read actions", () => {
      expect(getRisk("filesystem.read")).toBe("SAFE");
    });

    test("returns REVERSIBLE for write actions", () => {
      expect(getRisk("filesystem.write")).toBe("REVERSIBLE");
    });

    test("returns DESTRUCTIVE for delete actions", () => {
      expect(getRisk("filesystem.delete")).toBe("DESTRUCTIVE");
    });
  });

  // ── requiresApproval shortcut ──
  describe("requiresApproval() shortcut", () => {
    test("false for SAFE", () => {
      expect(requiresApproval("filesystem.read")).toBe(false);
    });

    test("true for REVERSIBLE", () => {
      expect(requiresApproval("filesystem.write")).toBe(true);
    });

    test("true for DESTRUCTIVE", () => {
      expect(requiresApproval("filesystem.delete")).toBe(true);
    });
  });

  // ── Custom rules ──
  describe("Custom rules", () => {
    afterEach(() => {
      // Clean up custom rules
      const rules = getAllRules();
      rules.length = 0;
    });

    test("addCustomRule adds a new rule", () => {
      const remove = addCustomRule({
        pattern: /^custom\.action$/i,
        risk: "SAFE",
        description: "Custom safe action",
      });

      const result = classifyAction("custom.action");
      expect(result.risk).toBe("SAFE");
      expect(result.known).toBe(true);
      expect(result.reason).toBe("Custom safe action");

      remove();
    });

    test("custom rule can override built-in", () => {
      const remove = addCustomRule({
        pattern: /^filesystem\.read$/i,
        risk: "DESTRUCTIVE",
        description: "Overridden to destructive",
      });

      const result = classifyAction("filesystem.read");
      expect(result.risk).toBe("DESTRUCTIVE");

      remove();
    });

    test("remove function works", () => {
      const remove = addCustomRule({
        pattern: /^temp\.action$/i,
        risk: "SAFE",
        description: "Temporary",
      });

      expect(classifyAction("temp.action").risk).toBe("SAFE");

      remove();
      // After removal, falls back to default (DESTRUCTIVE for unknown)
      expect(classifyAction("temp.action").risk).toBe("DESTRUCTIVE");
    });
  });

  // ── Edge cases ──
  describe("Edge cases", () => {
    test("empty string → DESTRUCTIVE", () => {
      const result = classifyAction("");
      expect(result.risk).toBe("DESTRUCTIVE");
      expect(result.known).toBe(false);
    });

    test("case insensitive matching", () => {
      expect(classifyAction("FILESYSTEM.READ").risk).toBe("SAFE");
      expect(classifyAction("Filesystem.Read").risk).toBe("SAFE");
      expect(classifyAction("GIT.PUSH").risk).toBe("DESTRUCTIVE");
    });

    test("returns reason for all classifications", () => {
      const safe = classifyAction("filesystem.read");
      expect(safe.reason).toBeTruthy();

      const unknown = classifyAction("something.weird");
      expect(unknown.reason).toBeTruthy();
    });
  });
});
