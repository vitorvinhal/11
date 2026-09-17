import { existsSync, realpathSync } from 'fs';
import { resolve, relative, isAbsolute } from 'path';

/**
 * Validação do terminal — extraída de `api/terminal/exec/route.ts` para ser
 * testável de forma unitária (T3) e reutilizada.
 *
 * Correção de segurança: a checagem de raiz usa `path.relative` (+ comparação
 * case-insensitive no Windows e resolução de symlinks via realpath) em vez de
 * `startsWith`, que aceitava prefixos irmãos (ex.: `C:\Users\Administrator2`
 * passava na raiz `C:\Users\Administrator`).
 */

export const IS_WINDOWS = process.platform === 'win32';

// Raízes permitidas para o cwd do terminal (BRIDGE_ALLOWED_DIRS, separado por ';').
export const ALLOWED_ROOTS = (process.env.BRIDGE_ALLOWED_DIRS ?? process.cwd())
  .split(';')
  .map((s) => s.trim().replace(/\\+$/, ''))
  .filter(Boolean);

// Comandos permitidos (base). Comandos destrutivos são bloqueados por DANGEROUS.
export const ALLOWED = new Set([
  'ls', 'dir', 'pwd', 'cd', 'chdir', 'cat', 'type', 'head', 'tail', 'more', 'less',
  'grep', 'find', 'findstr', 'where', 'which', 'tree', 'stat', 'wc',
  'git', 'npm', 'npx', 'pnpm', 'yarn', 'bun', 'node', 'deno', 'tsc', 'tsx',
  'python', 'python3', 'pip', 'pip3', 'java', 'javac', 'go', 'cargo', 'rustc',
  'make', 'cmake', 'gradle', 'mvn', 'dotnet',
  'echo', 'mkdir', 'md', 'touch', 'ni', 'cp', 'copy', 'mv', 'move', 'ren', 'rename',
  'clear', 'cls', 'hostname', 'whoami', 'date', 'time',
  'ps', 'tasklist', 'taskkill', 'df', 'du', 'free',
  'curl', 'wget', 'ping', 'ipconfig', 'ifconfig', 'netstat', 'nslookup',
  'docker', 'docker-compose', 'kubectl', 'vercel', 'supabase', 'gh', 'code', 'opencode',
  'nano', 'vim', 'vi', 'notepad', 'open', 'start', 'explorer',
  'env', 'printenv', 'set', 'export', 'ver', 'systeminfo',
]);

// Padrões destrutivos que nunca são permitidos.
export const DANGEROUS = [
  /\brm\s+-rf\s+[/~]/i,
  /\brm\s+-rf\s+\*/i,
  /\bdel\s+\/[sq]\s+/i,
  /\bformat\s+[a-z]:/i,
  /\bmkfs\b/i,
  /\bdd\s+if=/i,
  />\s*\/dev\/(sd|hd|nvme)/i,
  /\bshutdown\b/i,
  /\breboot\b/i,
  /\bdiskpart\b/i,
  /\breg\s+delete\b/i,
  /:\(\)\s*\{/,
];

// Famílias de cmdlets PowerShell consideradas seguras (somente leitura/formatação).
export const PS_SAFE_PREFIXES = [
  'get-', 'select-', 'where-', 'sort-', 'measure-', 'format-', 'out-',
  'group-', 'compare-', 'convertto-', 'convertfrom-', 'test-', 'write-',
  'resolve-', 'split-', 'join-', 'tee-', 'foreach-', 'for-each',
];

/** Resolve symlinks quando o caminho existe (best-effort). */
function realOr(p: string): string {
  try {
    return existsSync(p) ? realpathSync(p) : p;
  } catch {
    return p;
  }
}

/**
 * true se `target` está dentro de alguma raiz permitida.
 * Usa path.relative (não startsWith) + case-insensitive no Windows.
 */
export function isWithinRoot(target: string, roots: string[] = ALLOWED_ROOTS): boolean {
  if (!roots.length) return true;
  const abs = realOr(resolve(target));
  const cmp = IS_WINDOWS ? (s: string) => s.toLowerCase() : (s: string) => s;
  return roots.some((root) => {
    const rootAbs = cmp(realOr(resolve(root)));
    const rel = relative(rootAbs, cmp(abs));
    return rel === '' || (!rel.startsWith('..') && !isAbsolute(rel));
  });
}

/** Alias mantido para compatibilidade com o route. */
export function isUnderRoot(target: string): boolean {
  return isWithinRoot(target);
}

/** Nome-base do comando (sem diretório, sem args). */
export function baseCommand(cmd: string): string {
  const first = cmd.trim().split(/\s+/)[0] ?? '';
  return first.split(/[\\/]/).pop() ?? first;
}

export function validate(command: string, cwd: string): { ok: boolean; error?: string } {
  if (!command.trim()) return { ok: false, error: 'Comando vazio' };
  if (command.length > 4000) return { ok: false, error: 'Comando muito longo' };
  for (const d of DANGEROUS) {
    if (d.test(command)) return { ok: false, error: 'Comando bloqueado por segurança' };
  }
  const base = baseCommand(command).toLowerCase();
  const allowed = ALLOWED.has(base) || PS_SAFE_PREFIXES.some((p) => base.startsWith(p));
  if (!allowed) {
    return { ok: false, error: `Comando não permitido: ${base}` };
  }
  if (!isUnderRoot(cwd)) {
    return { ok: false, error: 'Diretório fora das raízes permitidas' };
  }
  return { ok: true };
}