import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { getAuthClient } from "../../../../lib/server-supabase";

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100;

// Simple in-memory rate limiter (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

/**
 * Verifica o token. Aceita duas fontes:
 *  1) Supabase access_token (JWT com claim `sub`) — fluxo real do app.
 *  2) JWT legado assinado com JWT_SECRET (claims userId/email) — compatibilidade.
 * Sem JWT_SECRET configurado, o legado é recusado (nada de default inseguro).
 */
export async function requireUser(
  req: NextRequest,
): Promise<{ userId: string; email: string } | null> {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  const token = authHeader.substring(7);

  // 1) Supabase JWT — claim padrão é `sub` (conforme auth.getUser).
  const auth = getAuthClient(req);
  try {
    const { data, error } = await auth.auth.getUser(token);
    if (!error && data?.user) {
      return { userId: data.user.id, email: data.user.email ?? "" };
    }
  } catch {
    /* tenta legado abaixo */
  }

  // 2) JWT legado com JWT_SECRET (sem fallback default).
  const secret = process.env.JWT_SECRET;
  if (secret) {
    try {
      const decoded = jwt.verify(token, secret) as Record<string, unknown>;
      const userId =
        typeof decoded.userId === "string"
          ? decoded.userId
          : typeof decoded.sub === "string"
            ? decoded.sub
            : null;
      if (userId)
        return {
          userId,
          email: typeof decoded.email === "string" ? decoded.email : "",
        };
    } catch {
      /* inválido */
    }
  }

  return null;
}

export function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || record.resetAt < now) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export function sanitizeCommand(command: string): string {
  // Remove dangerous characters and sequences
  return command.replace(/[;&|`$(){}[\]]/g, "").trim();
}

export function sanitizeArgs(args: string[]): string[] {
  return args.map((arg) =>
    arg
      .replace(/[;&|`$(){}[\]]/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

export const ALLOWED_COMMANDS = [
  "ls",
  "cd",
  "pwd",
  "cat",
  "head",
  "tail",
  "grep",
  "find",
  "git",
  "npm",
  "pnpm",
  "yarn",
  "node",
  "python",
  "python3",
  "go",
  "cargo",
  "make",
  "cmake",
  "docker",
  "kubectl",
  "echo",
  "mkdir",
  "rm",
  "cp",
  "mv",
  "chmod",
  "chown",
  "ps",
  "kill",
  "top",
  "htop",
  "df",
  "du",
  "free",
  "curl",
  "wget",
  "ssh",
  "scp",
  "rsync",
];

export function isCommandAllowed(command: string): boolean {
  const baseCommand = command.split("/").pop()?.split(" ")[0];
  return baseCommand ? ALLOWED_COMMANDS.includes(baseCommand) : false;
}

export function generateSessionId(): string {
  return `code_${Date.now()}_${Math.random().toString(36).substring(2, 12)}`;
}
