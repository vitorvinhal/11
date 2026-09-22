"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const risk_engine_1 = require("./risk-engine");
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
            const result = (0, risk_engine_1.classifyAction)(action);
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
            const result = (0, risk_engine_1.classifyAction)(action);
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
            const result = (0, risk_engine_1.classifyAction)(action);
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
            const result = (0, risk_engine_1.classifyAction)(action);
            expect(result.risk).toBe("DESTRUCTIVE");
            expect(result.requiresApproval).toBe(true);
            expect(result.known).toBe(false);
            expect(result.reason).toContain("desconhecida");
        });
    });
    // ── getRisk shortcut ──
    describe("getRisk() shortcut", () => {
        test("returns SAFE for read actions", () => {
            expect((0, risk_engine_1.getRisk)("filesystem.read")).toBe("SAFE");
        });
        test("returns REVERSIBLE for write actions", () => {
            expect((0, risk_engine_1.getRisk)("filesystem.write")).toBe("REVERSIBLE");
        });
        test("returns DESTRUCTIVE for delete actions", () => {
            expect((0, risk_engine_1.getRisk)("filesystem.delete")).toBe("DESTRUCTIVE");
        });
    });
    // ── requiresApproval shortcut ──
    describe("requiresApproval() shortcut", () => {
        test("false for SAFE", () => {
            expect((0, risk_engine_1.requiresApproval)("filesystem.read")).toBe(false);
        });
        test("true for REVERSIBLE", () => {
            expect((0, risk_engine_1.requiresApproval)("filesystem.write")).toBe(true);
        });
        test("true for DESTRUCTIVE", () => {
            expect((0, risk_engine_1.requiresApproval)("filesystem.delete")).toBe(true);
        });
    });
    // ── Custom rules ──
    describe("Custom rules", () => {
        afterEach(() => {
            // Clean up custom rules
            const rules = (0, risk_engine_1.getAllRules)();
            rules.length = 0;
        });
        test("addCustomRule adds a new rule", () => {
            const remove = (0, risk_engine_1.addCustomRule)({
                pattern: /^custom\.action$/i,
                risk: "SAFE",
                description: "Custom safe action",
            });
            const result = (0, risk_engine_1.classifyAction)("custom.action");
            expect(result.risk).toBe("SAFE");
            expect(result.known).toBe(true);
            expect(result.reason).toBe("Custom safe action");
            remove();
        });
        test("custom rule can override built-in", () => {
            const remove = (0, risk_engine_1.addCustomRule)({
                pattern: /^filesystem\.read$/i,
                risk: "DESTRUCTIVE",
                description: "Overridden to destructive",
            });
            const result = (0, risk_engine_1.classifyAction)("filesystem.read");
            expect(result.risk).toBe("DESTRUCTIVE");
            remove();
        });
        test("remove function works", () => {
            const remove = (0, risk_engine_1.addCustomRule)({
                pattern: /^temp\.action$/i,
                risk: "SAFE",
                description: "Temporary",
            });
            expect((0, risk_engine_1.classifyAction)("temp.action").risk).toBe("SAFE");
            remove();
            // After removal, falls back to default (DESTRUCTIVE for unknown)
            expect((0, risk_engine_1.classifyAction)("temp.action").risk).toBe("DESTRUCTIVE");
        });
    });
    // ── Edge cases ──
    describe("Edge cases", () => {
        test("empty string → DESTRUCTIVE", () => {
            const result = (0, risk_engine_1.classifyAction)("");
            expect(result.risk).toBe("DESTRUCTIVE");
            expect(result.known).toBe(false);
        });
        test("case insensitive matching", () => {
            expect((0, risk_engine_1.classifyAction)("FILESYSTEM.READ").risk).toBe("SAFE");
            expect((0, risk_engine_1.classifyAction)("Filesystem.Read").risk).toBe("SAFE");
            expect((0, risk_engine_1.classifyAction)("GIT.PUSH").risk).toBe("DESTRUCTIVE");
        });
        test("returns reason for all classifications", () => {
            const safe = (0, risk_engine_1.classifyAction)("filesystem.read");
            expect(safe.reason).toBeTruthy();
            const unknown = (0, risk_engine_1.classifyAction)("something.weird");
            expect(unknown.reason).toBeTruthy();
        });
    });
});
