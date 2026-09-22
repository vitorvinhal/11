import { spawn } from "child_process";
import { existsSync, statSync } from "fs";
import { loadRootEnv } from "../../../../lib/server-env";
import {
  getAuthClient,
  getServerClient,
} from "../../../../lib/server-supabase";
import {
  ALLOWED_ROOTS,
  IS_WINDOWS,
  isUnderRoot,
  validate,
} from "../../../../lib/terminal-validate";

loadRootEnv();

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ─── Sessões (cwd persistente por sessão, vinculadas a userId) ─────────────

type Sess = {
  cwd: string;
  history: string[];
  createdAt: number;
  userId: string;
  /** Rate limiting: timestamps dos últimos comandos */
  commandTimestamps: number[];
};
const sessions = new Map<string, Sess>();

// ─── Rate limiting por sessão ──────────────────────────────────────────────

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minuto
const RATE_LIMIT_MAX_COMMANDS = 30; // máximo 30 comandos/min por sessão

function isRateLimited(sess: Sess): boolean {
  const now = Date.now();
  // Remove timestamps fora da janela
  sess.commandTimestamps = sess.commandTimestamps.filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  return sess.commandTimestamps.length >= RATE_LIMIT_MAX_COMMANDS;
}

// ─── Max output size ───────────────────────────────────────────────────────

const MAX_OUTPUT_BYTES = 512 * 1024; // 512KB

// ─── Audit logging ─────────────────────────────────────────────────────────

async function logAuditEntry(
  userId: string,
  command: string,
  cwd: string,
  exitCode: number,
  outputBytes: number,
  blocked: boolean,
  blockReason?: string,
) {
  try {
    const sb = getServerClient();
    await sb.from("terminal_audit_log").insert({
      user_id: userId,
      command,
      cwd,
      exit_code: exitCode,
      output_bytes: outputBytes,
      blocked,
      block_reason: blockReason ?? null,
    });
  } catch {
    // Audit log é best-effort — não bloqueia execução
  }
}

function defaultCwd(): string {
  const first = ALLOWED_ROOTS[0];
  if (first && existsSync(first)) return first;
  return process.cwd();
}

function sessionKey(userId: string, sessionId: string): string {
  return `${userId}:${sessionId}`;
}

function resolveCwd(sessionId: string, requested?: string): string {
  const base = sessions.get(sessionId)?.cwd ?? defaultCwd();
  if (!requested) return base;
  if (requested.startsWith("~"))
    requested = requested.replace("~", defaultCwd());
  const p =
    requested.startsWith("/") || /^[A-Za-z]:/.test(requested)
      ? requested
      : `${base}\\${requested}`.replace(/[\\/]+/g, "\\");
  return p;
}

/**
 * WHITELIST de env vars — só passa variáveis explicitamente permitidas.
 * Nunca herda process.env inteiro (mesmo com blacklist, é arriscado).
 */
function safeEnv(): Record<string, string | undefined> {
  const ALLOWED_ENV = new Set([
    "PATH",
    "HOME",
    "USER",
    "LANG",
    "LC_ALL",
    "LC_CTYPE",
    "TERM",
    "SHELL",
    "TMPDIR",
    "TEMP",
    "TMP",
    "NODE_ENV",
    "USERPROFILE",
    "APPDATA",
    "HOMEDRIVE",
    "HOMEPATH",
    "SYSTEMROOT",
    "WINDIR",
    "COMSPEC",
    "ProgramFiles",
    "ProgramFiles(x86)",
    "ProgramData",
    "LOCALAPPDATA",
    // Dev tools
    "EDITOR",
    "VISUAL",
    "PAGER",
    "NVM_DIR",
    "FNM_DIR",
    "VOLTA_HOME",
    // Build tools
    "CC",
    "CXX",
    "CMAKE",
    "MAKEFLAGS",
  ]);

  const filtered: Record<string, string | undefined> = {};
  for (const key of Array.from(ALLOWED_ENV)) {
    filtered[key] = process.env[key];
  }
  return filtered;
}

interface ExecBody {
  command?: string;
  sessionId?: string;
  cwd?: string;
}

/**
 * Autentica o request. Retorna userId ou null se não autenticado.
 */
async function authenticate(req: Request): Promise<string | null> {
  const hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!hasSupabase) {
    if (process.env.NODE_ENV === "production") return null;
    return "dev-user";
  }
  const auth = getAuthClient(req);
  const { data } = await auth.auth.getUser();
  return data?.user?.id ?? null;
}

/**
 * POST /api/terminal/exec
 * Executa um comando e transmite stdout/stderr em tempo real via SSE.
 * Body: { command, sessionId, cwd? }
 * Sessões são vinculadas ao userId autenticado.
 */
export async function POST(req: Request) {
  const userId = await authenticate(req);
  if (!userId) {
    return new Response(JSON.stringify({ error: "Não autenticado" }), {
      status: 401,
    });
  }

  let body: ExecBody;
  try {
    body = (await req.json()) as ExecBody;
  } catch {
    return new Response(JSON.stringify({ error: "JSON inválido" }), {
      status: 400,
    });
  }

  const { command = "", sessionId = "default" } = body;
  if (!command.trim())
    return new Response(JSON.stringify({ error: "Comando vazio" }), {
      status: 400,
    });

  const key = sessionKey(userId, sessionId);
  const sess = sessions.get(key) ?? {
    cwd: defaultCwd(),
    history: [],
    createdAt: Date.now(),
    userId,
    commandTimestamps: [],
  };
  sessions.set(key, sess);

  // ── Rate limiting ──
  if (isRateLimited(sess)) {
    return sseResponse(
      ["[rate limit] Máximo de 30 comandos por minuto. Aguarde.\n"],
      1,
    );
  }

  // Comando especial: cd → troca o cwd da sessão sem spawn.
  const trimmed = command.trim();
  const cdMatch = trimmed.match(/^cd\s+(.+)$/i);
  if (cdMatch || /^cd$/i.test(trimmed)) {
    const target = cdMatch
      ? resolveCwd(key, cdMatch[1].trim().replace(/^"|"$/g, ""))
      : defaultCwd();
    if (existsSync(target) && statSync(target).isDirectory()) {
      if (!isUnderRoot(target)) {
        return sseResponse(
          [`cd: acesso negado (fora das raízes permitidas)\n`],
          1,
        );
      }
      sess.cwd = target;
      sess.commandTimestamps.push(Date.now());
      sess.history.push(trimmed);
      return sseResponse([`${target}\n`], 0);
    }
    return sseResponse([`cd: diretório não encontrado: ${target}\n`], 1);
  }

  const check = validate(trimmed, sess.cwd);
  if (!check.ok) {
    logAuditEntry(userId, trimmed, sess.cwd, 1, 0, true, check.error);
    return sseResponse([`${check.error}\n`], 1);
  }

  sess.history.push(trimmed);
  sess.commandTimestamps.push(Date.now());

  // Envia ambiente whitelisted (só variáveis seguras)
  const env = safeEnv() as NodeJS.ProcessEnv;

  return new Response(
    new ReadableStream({
      start(controller) {
        const enc = new TextEncoder();
        const send = (event: string, data: string) =>
          controller.enqueue(
            enc.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`),
          );

        let closed = false;
        let outputBytes = 0;
        let outputTruncated = false;
        const finish = (code: number) => {
          if (closed) return;
          closed = true;
          if (outputTruncated) {
            send("stderr", "\n[output truncado — limite de 512KB]\n");
          }
          send("exit", String(code));
          logAuditEntry(userId, trimmed, sess.cwd, code, outputBytes, false);
          controller.close();
        };

        let child;
        try {
          if (IS_WINDOWS) {
            child = spawn(
              "powershell.exe",
              [
                "-NoLogo",
                "-NoProfile",
                "-ExecutionPolicy",
                "Bypass",
                "-Command",
                trimmed,
              ],
              {
                cwd: sess.cwd,
                env,
                windowsHide: true,
              },
            );
          } else {
            child = spawn("bash", ["-lc", trimmed], {
              cwd: sess.cwd,
              env,
            });
          }
        } catch (err) {
          send("stderr", (err as Error).message + "\n");
          logAuditEntry(
            userId,
            trimmed,
            sess.cwd,
            1,
            0,
            false,
            (err as Error).message,
          );
          finish(1);
          return;
        }

        const timeout = setTimeout(() => {
          send("stderr", "\n[tempo esgotado — processo encerrado]\n");
          try {
            child?.kill();
          } catch {
            /* ignore */
          }
        }, 120_000);

        // eco do prompt
        send("stdout", "");

        child.stdout?.on("data", (d: Buffer) => {
          outputBytes += d.length;
          if (outputBytes > MAX_OUTPUT_BYTES) {
            outputTruncated = true;
            return;
          }
          send("stdout", d.toString());
        });
        child.stderr?.on("data", (d: Buffer) => {
          outputBytes += d.length;
          if (outputBytes > MAX_OUTPUT_BYTES) return;
          send("stderr", d.toString());
        });
        child.on("error", (e: Error) => {
          send("stderr", e.message + "\n");
        });
        child.on("close", (code: number | null) => {
          clearTimeout(timeout);
          finish(code ?? 0);
        });

        // Se o cliente abortar, mata o processo.
        req.signal?.addEventListener("abort", () => {
          clearTimeout(timeout);
          try {
            child?.kill();
          } catch {
            /* ignore */
          }
        });
      },
    }),
    {
      headers: {
        "content-type": "text/event-stream; charset=utf-8",
        "cache-control": "no-cache, no-transform",
        connection: "keep-alive",
      },
    },
  );
}

function sseResponse(lines: string[], code: number): Response {
  const enc = new TextEncoder();
  return new Response(
    new ReadableStream({
      start(controller) {
        for (const line of lines) {
          controller.enqueue(
            enc.encode(`event: stdout\ndata: ${JSON.stringify(line)}\n\n`),
          );
        }
        controller.enqueue(
          enc.encode(`event: exit\ndata: ${JSON.stringify(String(code))}\n\n`),
        );
        controller.close();
      },
    }),
    {
      headers: {
        "content-type": "text/event-stream; charset=utf-8",
        "cache-control": "no-cache",
      },
    },
  );
}

/**
 * GET /api/terminal/exec?sessionId=...
 * Retorna o cwd atual e o histórico da sessão.
 * REQUER AUTENTICAÇÃO e só retorna dados do próprio usuário.
 */
export async function GET(req: Request) {
  const userId = await authenticate(req);
  if (!userId) {
    return Response.json({ error: "Não autenticado" }, { status: 401 });
  }

  const url = new URL(req.url);
  const sessionId = url.searchParams.get("sessionId") ?? "default";
  const key = sessionKey(userId, sessionId);
  const sess = sessions.get(key);

  return Response.json({
    cwd: sess?.cwd ?? defaultCwd(),
    history: sess?.history ?? [],
    allowedRoots: ALLOWED_ROOTS,
  });
}
