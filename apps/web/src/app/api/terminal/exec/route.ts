import { spawn } from "child_process";
import { existsSync, statSync } from "fs";
import { loadRootEnv } from "../../../../lib/server-env";
import { getAuthClient } from "../../../../lib/server-supabase";
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
};
const sessions = new Map<string, Sess>();

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

/** Filtra variáveis de ambiente sensíveis antes de passar ao spawn. */
function safeEnv(): Record<string, string | undefined> {
  const filtered: Record<string, string | undefined> = {};
  const SENSITIVE_KEYS = [
    /SECRET/i,
    /KEY/i,
    /TOKEN/i,
    /PASSWORD/i,
    /CREDENTIAL/i,
    /SUPABASE_SERVICE_ROLE/i,
    /PRIVATE/i,
    /AUTH/i,
  ];
  for (const [k, v] of Object.entries(process.env)) {
    if (SENSITIVE_KEYS.some((p) => p.test(k))) {
      filtered[k] = undefined;
    } else {
      filtered[k] = v;
    }
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
  };
  sessions.set(key, sess);

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
      return sseResponse([`${target}\n`], 0);
    }
    return sseResponse([`cd: diretório não encontrado: ${target}\n`], 1);
  }

  const check = validate(trimmed, sess.cwd);
  if (!check.ok) return sseResponse([`${check.error}\n`], 1);

  sess.history.push(trimmed);

  // Envia ambiente filtrado (sem secrets)
  const env = safeEnv();

  return new Response(
    new ReadableStream({
      start(controller) {
        const enc = new TextEncoder();
        const send = (event: string, data: string) =>
          controller.enqueue(
            enc.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`),
          );

        let closed = false;
        const finish = (code: number) => {
          if (closed) return;
          closed = true;
          send("exit", String(code));
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

        child.stdout?.on("data", (d: Buffer) => send("stdout", d.toString()));
        child.stderr?.on("data", (d: Buffer) => send("stderr", d.toString()));
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
