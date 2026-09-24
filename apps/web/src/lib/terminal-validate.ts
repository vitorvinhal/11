import { existsSync, realpathSync } from "fs";
import { resolve, relative, isAbsolute } from "path";

/**
 * Validação do terminal — com correções de segurança:
 * - Tokenização de comando (detecta chaining: ; && || | ` $())
 * - Remoção de comandos que expõem secrets (env, printenv, set, export)
 * - Validação de argumentos para comandos de leitura (cat, type, find)
 * - Detecção de tentativas de acesso a arquivos sensíveis (.env, secrets)
 */

export const IS_WINDOWS = process.platform === "win32";

// Raízes permitidas para o cwd do terminal
export const ALLOWED_ROOTS = (process.env.BRIDGE_ALLOWED_DIRS ?? process.cwd())
  .split(";")
  .map((s) => s.trim().replace(/\\+$/, ""))
  .filter(Boolean);

// Comandos permitidos (SEM env/printenv/set/export — expõem secrets)
// NOTA: scripting engines (node, python, etc.) são restritos a flags específicas
export const ALLOWED = new Set([
  "ls",
  "dir",
  "pwd",
  "cd",
  "chdir",
  "cat",
  "type",
  "head",
  "tail",
  "more",
  "less",
  "grep",
  "find",
  "findstr",
  "where",
  "which",
  "tree",
  "stat",
  "wc",
  "git",
  "npm",
  "npx",
  "pnpm",
  "yarn",
  "bun",
  "node",
  "deno",
  "tsc",
  "tsx",
  "python",
  "python3",
  "pip",
  "pip3",
  "java",
  "javac",
  "go",
  "cargo",
  "rustc",
  "make",
  "cmake",
  "gradle",
  "mvn",
  "dotnet",
  "echo",
  "mkdir",
  "md",
  "touch",
  "ni",
  "cp",
  "copy",
  "mv",
  "move",
  "ren",
  "rename",
  "clear",
  "cls",
  "hostname",
  "whoami",
  "date",
  "time",
  "ps",
  "tasklist",
  "taskkill",
  "df",
  "du",
  "free",
  "curl",
  "wget",
  "ping",
  "ipconfig",
  "ifconfig",
  "netstat",
  "nslookup",
  "docker",
  "docker-compose",
  "kubectl",
  "vercel",
  "supabase",
  "gh",
  "code",
  "opencode",
  "nano",
  "vim",
  "vi",
  "notepad",
  "open",
  "start",
  "explorer",
  "ver",
  "systeminfo",
]);

// Scripting engines — só permitem flags específicas de eval, NÃO shell interativo
const SCRIPTING_ENGINES = new Set([
  "node",
  "deno",
  "python",
  "python3",
  "java",
  "javac",
]);
const SCRIPTING_FLAGS = [
  "-e",
  "--eval",
  "-c",
  "--command",
  "-p",
  "--print",
  "-r",
  "--require",
];

// Padrões destrutivos que nunca são permitidos
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

// Operadores de chaining que indicam tentativa de bypass
const CHAINING_OPERATORS = [
  /\s*[;]\s*/, // ; (command separator)
  /\s*&&\s*/, // && (AND)
  /\s*\|\|\s*/, // || (OR)
  /\s*\|\s*/, // | (pipe)
  /\s*&\s*/, // & (background/separator)
  /`[^`]*`/, // backtick substitution
  /\$\([^)]*\)/, // $(...) command substitution
  /\$\{[^}]*\}/, // ${...} variable expansion (potential injection)
];

// Arquivos sensíveis que não devem ser lidos
const SENSITIVE_PATTERNS = [
  /\.env$/i,
  /\.env\./i,
  /secrets?\.(json|yaml|yml|toml|env)/i,
  /credentials?\.(json|yaml|yml|toml)/i,
  /\.ssh\//i,
  /\.gnupg\//i,
  /id_rsa/i,
  /id_ed25519/i,
  /\.aws\//i,
  /\.kube\//i,
  /supabase.*key/i,
];

// Comandos que precisam de validação de argumentos (acesso a arquivos)
const FILE_ACCESS_COMMANDS = new Set([
  "cat",
  "type",
  "head",
  "tail",
  "less",
  "more",
  "grep",
  "find",
  "findstr",
  "wc",
  "stat",
  "cp",
  "copy",
  "mv",
  "move",
  "rm",
  "del",
  "touch",
  "ni",
]);

// Famílias de cmdlets PowerShell consideradas seguras (somente leitura/formatação)
export const PS_SAFE_PREFIXES = [
  "get-",
  "select-",
  "where-",
  "sort-",
  "measure-",
  "format-",
  "out-",
  "group-",
  "compare-",
  "convertto-",
  "convertfrom-",
  "test-",
  "write-",
  "resolve-",
  "split-",
  "join-",
  "tee-",
  "foreach-",
  "for-each",
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
export function isWithinRoot(
  target: string,
  roots: string[] = ALLOWED_ROOTS,
): boolean {
  if (!roots.length) return true;
  const abs = realOr(resolve(target));
  const cmp = IS_WINDOWS ? (s: string) => s.toLowerCase() : (s: string) => s;
  return roots.some((root) => {
    const rootAbs = cmp(realOr(resolve(root)));
    const rel = relative(rootAbs, cmp(abs));
    return rel === "" || (!rel.startsWith("..") && !isAbsolute(rel));
  });
}

/** Alias mantido para compatibilidade com o route. */
export function isUnderRoot(target: string, roots?: string[]): boolean {
  return isWithinRoot(target, roots);
}

/** Nome-base do comando (sem diretório, sem args). */
export function baseCommand(cmd: string): string {
  const first = cmd.trim().split(/\s+/)[0] ?? "";
  return first.split(/[\\/]/).pop() ?? first;
}

/**
 * Verifica se o comando contém operadores de chaining (bypass de allowlist).
 * Retorna true se encontrar algo suspeito.
 */
export function hasChainingOperators(command: string): boolean {
  for (const op of CHAINING_OPERATORS) {
    if (op.test(command)) return true;
  }
  return false;
}

/**
 * Verifica se algum argumento do comando aponta para arquivo sensível.
 * Retorna o nome do arquivo sensível encontrado, ou null.
 */
export function detectsSensitiveFile(command: string): string | null {
  const parts = command.trim().split(/\s+/);
  for (const part of parts) {
    // Remove aspas
    const clean = part.replace(/^["']|["']$/g, "");
    for (const pattern of SENSITIVE_PATTERNS) {
      if (pattern.test(clean)) return clean;
    }
  }
  return null;
}

/**
 * Valida se os argumentos de comandos de arquivo estão dentro das raízes.
 * Retorna erro se algum argumento apontar para fora.
 */
export function validateFileArgs(
  command: string,
  cwd: string,
): { ok: boolean; error?: string } {
  const parts = command.trim().split(/\s+/);
  const cmd = (parts[0] ?? "").split(/[\\/]/).pop()?.toLowerCase() ?? "";

  if (!FILE_ACCESS_COMMANDS.has(cmd)) return { ok: true };

  // Verifica args que parecem caminhos (começam com /, ~, ou têm extensão)
  for (let i = 1; i < parts.length; i++) {
    const arg = parts[i].replace(/^["']|["']$/g, "");
    // Pula flags (começam com -)
    if (arg.startsWith("-")) continue;
    // Pula patterns de grep/find
    if (arg.startsWith("/") && cmd === "grep") continue;

    // Se parece caminho, valida se está dentro das raízes
    if (
      arg.includes("/") ||
      arg.includes("\\") ||
      arg.startsWith("~") ||
      /^[A-Za-z]:/.test(arg)
    ) {
      // path.resolve é cross-platform: em POSIX, o join antigo com `\`
      // virava um único segmento de filename e furava o bloqueio de ../..
      const resolved = resolve(
        cwd,
        arg.startsWith("~") ? arg.replace(/^~/, cwd) : arg,
      );

      if (!isUnderRoot(resolved)) {
        return {
          ok: false,
          error: `Acesso negado: ${arg} está fora das raízes permitidas`,
        };
      }

      // Verifica se é arquivo sensível
      const sensitive = detectsSensitiveFile(arg);
      if (sensitive) {
        return {
          ok: false,
          error: `Acesso negado: ${sensitive} é arquivo sensível`,
        };
      }
    }
  }
  return { ok: true };
}

export function validate(
  command: string,
  cwd: string,
  allowedRoots?: string[],
): { ok: boolean; error?: string } {
  if (!command.trim()) return { ok: false, error: "Comando vazio" };
  if (command.length > 4000) return { ok: false, error: "Comando muito longo" };

  // BLOQUEIO 1: Operadores de chaining (bypass de allowlist)
  if (hasChainingOperators(command)) {
    return {
      ok: false,
      error: "Encadeamento de comandos não permitido (; && || | ` $())",
    };
  }

  // BLOQUEIO 2: Arquivos sensíveis
  const sensitive = detectsSensitiveFile(command);
  if (sensitive) {
    return {
      ok: false,
      error: `Acesso a arquivo sensível bloqueado: ${sensitive}`,
    };
  }

  // BLOQUEIO 3: Padrões destrutivos
  for (const d of DANGEROUS) {
    if (d.test(command))
      return { ok: false, error: "Comando bloqueado por segurança" };
  }

  // BLOQUEIO 4: Comando não está na allowlist
  const base = baseCommand(command).toLowerCase();
  const allowed =
    ALLOWED.has(base) || PS_SAFE_PREFIXES.some((p) => base.startsWith(p));
  if (!allowed) {
    return { ok: false, error: `Comando não permitido: ${base}` };
  }

  // BLOQUEIO 4b: Scripting engines só permitem flags de eval, NÃO execução arbitrária
  if (SCRIPTING_ENGINES.has(base)) {
    const parts = command.trim().split(/\s+/);
    const hasAllowedFlag = parts
      .slice(1)
      .some((p) => SCRIPTING_FLAGS.includes(p));
    if (!hasAllowedFlag) {
      return {
        ok: false,
        error: `Scripting engine restrito: ${base} só aceita flags de eval (-e, -c, -p). Use: ${base} -e "código"`,
      };
    }
  }

  // BLOQUEIO 5: Cwd fora das raízes
  if (!isUnderRoot(cwd, allowedRoots)) {
    return { ok: false, error: "Diretório fora das raízes permitidas" };
  }

  // BLOQUEIO 6: Argumentos de arquivo fora das raízes ou sensíveis
  const fileCheck = validateFileArgs(command, cwd);
  if (!fileCheck.ok) return fileCheck;

  return { ok: true };
}
