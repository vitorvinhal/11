import { spawn } from 'child_process';
import { existsSync, statSync } from 'fs';
import { loadRootEnv } from '../../../../lib/server-env';
import { getAuthClient } from '../../../../lib/server-supabase';
import {
  ALLOWED_ROOTS,
  IS_WINDOWS,
  isUnderRoot,
  validate,
} from '../../../../lib/terminal-validate';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ─── Sessões (cwd persistente por sessão) ───────────────────────────────────

type Sess = { cwd: string; history: string[]; createdAt: number };
const sessions = new Map<string, Sess>();

function defaultCwd(): string {
  const first = ALLOWED_ROOTS[0];
  if (first && existsSync(first)) return first;
  return process.cwd();
}

function resolveCwd(sessionId: string, requested?: string): string {
  const base = sessions.get(sessionId)?.cwd ?? defaultCwd();
  if (!requested) return base;
  if (requested.startsWith('~')) requested = requested.replace('~', defaultCwd());
  const p = requested.startsWith('/') || /^[a-zA-Z]:/.test(requested)
    ? requested
    : `${base}\\${requested}`.replace(/[\\/]+/g, '\\');
  return p;
}

interface ExecBody {
  command?: string;
  sessionId?: string;
  cwd?: string;
}

/**
 * POST /api/terminal/exec
 * Executa um comando e transmite stdout/stderr em tempo real via SSE.
 * Body: { command, sessionId, cwd? }
 */
export async function POST(req: Request) {
  let body: ExecBody;
  try {
    body = (await req.json()) as ExecBody;
  } catch {
    return new Response(JSON.stringify({ error: 'JSON inválido' }), { status: 400 });
  }

  const { command = '', sessionId = 'default' } = body;
  if (!command.trim()) return new Response(JSON.stringify({ error: 'Comando vazio' }), { status: 400 });

  // FIX CRÍTICO: Autenticação SEMPRE obrigatória
  // Em produção: exigir Supabase JWT válido
  // Em dev: ainda assim exigir auth se Supabase estiver configurado
  const hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (hasSupabase) {
    const auth = getAuthClient(req);
    const { data } = await auth.auth.getUser();
    if (!data?.user) {
      return new Response(JSON.stringify({ error: 'Não autenticado' }), { status: 401 });
    }
  } else if (process.env.NODE_ENV === 'production') {
    // Em produção SEM Supabase configurado = BLOQUEADO
    return new Response(
      JSON.stringify({ error: 'Terminal indisponível: autenticação não configurada' }),
      { status: 503 }
    );
  }

  const sess = sessions.get(sessionId) ?? { cwd: defaultCwd(), history: [], createdAt: Date.now() };
  sessions.set(sessionId, sess);

  // Comando especial: cd → troca o cwd da sessão sem spawn.
  const trimmed = command.trim();
  const cdMatch = trimmed.match(/^cd\s+(.+)$/i);
  if (cdMatch || /^cd$/i.test(trimmed)) {
    const target = cdMatch ? resolveCwd(sessionId, cdMatch[1].trim().replace(/^"|"$/g, '')) : defaultCwd();
    if (existsSync(target) && statSync(target).isDirectory()) {
      if (!isUnderRoot(target)) {
        return sseResponse([`cd: acesso negado (fora das raízes permitidas)\n`], 1);
      }
      sess.cwd = target;
      return sseResponse([`${target}\n`], 0);
    }
    return sseResponse([`cd: diretório não encontrado: ${target}\n`], 1);
  }

  const check = validate(trimmed, sess.cwd);
  if (!check.ok) return sseResponse([`${check.error}\n`], 1);

  sess.history.push(trimmed);

  return new Response(
    new ReadableStream({
      start(controller) {
        const enc = new TextEncoder();
        const send = (event: string, data: string) =>
          controller.enqueue(enc.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));

        let closed = false;
        const finish = (code: number) => {
          if (closed) return;
          closed = true;
          send('exit', String(code));
          controller.close();
        };

        let child;
        try {
          if (IS_WINDOWS) {
            child = spawn('powershell.exe', ['-NoLogo', '-NoProfile', '-ExecutionPolicy', 'Bypass', '-Command', trimmed], {
              cwd: sess.cwd,
              env: { ...process.env },
              windowsHide: true,
            });
          } else {
            child = spawn('bash', ['-lc', trimmed], {
              cwd: sess.cwd,
              env: { ...process.env },
            });
          }
        } catch (err) {
          send('stderr', (err as Error).message + '\n');
          finish(1);
          return;
        }

        const timeout = setTimeout(() => {
          send('stderr', '\n[tempo esgotado — processo encerrado]\n');
          try { child?.kill(); } catch { /* ignore */ }
        }, 120_000);

        // eco do prompt
        send('stdout', '');

        child.stdout?.on('data', (d: Buffer) => send('stdout', d.toString()));
        child.stderr?.on('data', (d: Buffer) => send('stderr', d.toString()));
        child.on('error', (e: Error) => { send('stderr', e.message + '\n'); });
        child.on('close', (code: number | null) => { clearTimeout(timeout); finish(code ?? 0); });

        // Se o cliente abortar, mata o processo.
        req.signal?.addEventListener('abort', () => {
          clearTimeout(timeout);
          try { child?.kill(); } catch { /* ignore */ }
        });
      },
    }),
    {
      headers: {
        'content-type': 'text/event-stream; charset=utf-8',
        'cache-control': 'no-cache, no-transform',
        connection: 'keep-alive',
      },
    }
  );
}

function sseResponse(lines: string[], code: number): Response {
  const enc = new TextEncoder();
  return new Response(
    new ReadableStream({
      start(controller) {
        for (const line of lines) {
          controller.enqueue(enc.encode(`event: stdout\ndata: ${JSON.stringify(line)}\n\n`));
        }
        controller.enqueue(enc.encode(`event: exit\ndata: ${JSON.stringify(String(code))}\n\n`));
        controller.close();
      },
    }),
    { headers: { 'content-type': 'text/event-stream; charset=utf-8', 'cache-control': 'no-cache' } }
  );
}

/**
 * GET /api/terminal/exec?sessionId=...
 * Retorna o cwd atual e o histórico da sessão.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get('sessionId') ?? 'default';
  const sess = sessions.get(sessionId);
  return Response.json({
    cwd: sess?.cwd ?? defaultCwd(),
    history: sess?.history ?? [],
    allowedRoots: ALLOWED_ROOTS,
  });
}
