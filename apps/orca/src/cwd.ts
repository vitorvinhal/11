import fs from "node:fs";
import path from "node:path";

const SHELL_METACHARS = /[;&|<>()`$%!\r\n]/;
const PROJECT_MARKERS = ["pnpm-workspace.yaml", ".git"];

function findProjectRoot(start: string): string {
  let dir = path.resolve(start);
  for (let i = 0; i < 12; i++) {
    for (const marker of PROJECT_MARKERS) {
      if (fs.existsSync(path.join(dir, marker))) {
        return dir;
      }
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return path.resolve(start);
}

export function getDefaultRoot(): string {
  return findProjectRoot(__dirname);
}

export function getAllowedRoots(
  env: Record<string, string | undefined> = process.env,
): string[] {
  const raw = env.ORCA_ALLOWED_ROOTS;
  if (typeof raw === "string" && raw.trim().length > 0) {
    const roots = raw
      .split(path.delimiter)
      .map((r) => r.trim())
      .filter(Boolean)
      .map((r) => path.resolve(r));
    if (roots.length > 0) return roots;
  }
  return [getDefaultRoot()];
}

/**
 * true se `target` está dentro de alguma raiz permitida.
 * Usa path.relative (NUNCA startsWith no path completo).
 */
export function isUnderRoot(target: string, roots: string[]): boolean {
  if (!roots.length) return false;
  const abs = path.resolve(target);
  const cmp =
    process.platform === "win32"
      ? (s: string) => s.toLowerCase()
      : (s: string) => s;
  return roots.some((root) => {
    const rootAbs = cmp(path.resolve(root));
    const rel = path.relative(rootAbs, cmp(abs));
    return rel === "" || (!rel.startsWith("..") && !path.isAbsolute(rel));
  });
}

export function sanitizeCwd(
  input: unknown,
  fallback: string,
  roots?: string[],
): string | null {
  const allowedRoots = roots ?? getAllowedRoots();

  if (input == null || input === "") {
    const fb = path.resolve(fallback);
    return isUnderRoot(fb, allowedRoots) ? fb : null;
  }
  if (typeof input !== "string") {
    return null;
  }
  if (SHELL_METACHARS.test(input)) {
    return null;
  }

  const resolved = path.resolve(input);
  if (!isUnderRoot(resolved, allowedRoots)) {
    return null;
  }

  try {
    if (!fs.existsSync(resolved) || !fs.statSync(resolved).isDirectory()) {
      return null;
    }
  } catch {
    return null;
  }
  return resolved;
}
