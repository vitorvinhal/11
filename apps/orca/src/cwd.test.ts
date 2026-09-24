import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  getAllowedRoots,
  getDefaultRoot,
  isUnderRoot,
  sanitizeCwd,
} from "./cwd";

describe("orca cwd sandbox", () => {
  const defaultRoot = getDefaultRoot();

  it("default root is the project/repo root (has pnpm-workspace.yaml or .git)", () => {
    expect(fs.existsSync(path.join(defaultRoot, "pnpm-workspace.yaml"))).toBe(
      true,
    );
  });

  it("getAllowedRoots uses ORCA_ALLOWED_ROOTS when set", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "orca-root-"));
    try {
      const roots = getAllowedRoots({ ORCA_ALLOWED_ROOTS: tmp });
      expect(roots).toEqual([path.resolve(tmp)]);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it("getAllowedRoots falls back to project root when env empty", () => {
    const roots = getAllowedRoots({});
    expect(roots).toEqual([defaultRoot]);
  });

  it("isUnderRoot allows path inside root and the root itself", () => {
    const inside = path.join(defaultRoot, "apps", "orca");
    expect(isUnderRoot(inside, [defaultRoot])).toBe(true);
    expect(isUnderRoot(defaultRoot, [defaultRoot])).toBe(true);
  });

  it("isUnderRoot rejects absolute path outside the root (no startsWith prefix bug)", () => {
    const outside = path.resolve(path.join(defaultRoot, "..", "sibling-evil"));
    expect(isUnderRoot(outside, [defaultRoot])).toBe(false);
    expect(isUnderRoot("C:\\Windows\\System32", [defaultRoot])).toBe(false);
    expect(isUnderRoot("/etc", [defaultRoot])).toBe(false);
  });

  it("isUnderRoot rejects sibling dir sharing a path prefix", () => {
    const root = path.join(defaultRoot, "root");
    const evilSibling = path.join(defaultRoot, "root-evil");
    expect(isUnderRoot(evilSibling, [root])).toBe(false);
  });

  it("sanitizeCwd returns null for ../.. escape", () => {
    const attack = path.join(defaultRoot, "apps", "..", "..", "..", "Windows");
    expect(sanitizeCwd(attack, defaultRoot, [defaultRoot])).toBeNull();
    expect(sanitizeCwd("../../../etc", defaultRoot, [defaultRoot])).toBeNull();
  });

  it("sanitizeCwd returns null for absolute path outside the root", () => {
    const outside = path.resolve(
      path.join(defaultRoot, "..", "outside-root-dir"),
    );
    expect(sanitizeCwd(outside, defaultRoot, [defaultRoot])).toBeNull();
    expect(sanitizeCwd("C:\\Windows", defaultRoot, [defaultRoot])).toBeNull();
    expect(sanitizeCwd("/etc", defaultRoot, [defaultRoot])).toBeNull();
  });

  it("sanitizeCwd returns null for shell metacharacters in cwd", () => {
    expect(
      sanitizeCwd(`${defaultRoot}; id`, defaultRoot, [defaultRoot]),
    ).toBeNull();
    expect(
      sanitizeCwd(`${defaultRoot} && whoami`, defaultRoot, [defaultRoot]),
    ).toBeNull();
    expect(
      sanitizeCwd(`${defaultRoot}|id`, defaultRoot, [defaultRoot]),
    ).toBeNull();
  });

  it("sanitizeCwd accepts a valid directory inside the root", () => {
    const inside = path.join(defaultRoot, "apps");
    expect(sanitizeCwd(inside, defaultRoot, [defaultRoot])).toBe(
      path.resolve(inside),
    );
  });

  it("sanitizeCwd accepts default root itself and fallback inside root", () => {
    expect(sanitizeCwd(defaultRoot, defaultRoot, [defaultRoot])).toBe(
      path.resolve(defaultRoot),
    );
    expect(sanitizeCwd(null, defaultRoot, [defaultRoot])).toBe(
      path.resolve(defaultRoot),
    );
    expect(sanitizeCwd("", defaultRoot, [defaultRoot])).toBe(
      path.resolve(defaultRoot),
    );
  });

  it("sanitizeCwd rejects fallback outside the root when no cwd given", () => {
    expect(sanitizeCwd(null, "C:\\Windows", [defaultRoot])).toBeNull();
    expect(sanitizeCwd(undefined, "/etc", [defaultRoot])).toBeNull();
  });

  it("sanitizeCwd rejects non-string cwd", () => {
    expect(sanitizeCwd(42, defaultRoot, [defaultRoot])).toBeNull();
    expect(sanitizeCwd({ p: 1 }, defaultRoot, [defaultRoot])).toBeNull();
  });

  it("sanitizeCwd rejects non-existent path inside root", () => {
    const missing = path.join(defaultRoot, "definitely-missing-dir-xyz");
    expect(sanitizeCwd(missing, defaultRoot, [defaultRoot])).toBeNull();
  });
});
