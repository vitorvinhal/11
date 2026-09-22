import { NextResponse } from "next/server";
import { getAuthClient } from "../../../../lib/server-supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Hosts permitidos para Ollama (uso local). */
const ALLOWED_HOSTS = new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);

/** Rejeita ranges de metadata cloud e redes privadas. */
function isBlockedHost(hostname: string): boolean {
  const h = hostname.toLowerCase();

  // Cloud metadata endpoints
  if (h === "169.254.169.254") return true;
  if (h === "metadata.google.internal") return true;
  if (h === "169.254.169.254.nip.io") return true;

  // Cloud metadata IPs
  if (h.startsWith("169.254.")) return true;

  // Private ranges (exceto localhost que já é permitido)
  if (/^10\.\d+\.\d+\.\d+$/.test(h)) return true;
  if (/^172\.(1[6-9]|2\d|3[01])\.\d+\.\d+$/.test(h)) return true;
  if (/^192\.168\.\d+\.\d+$/.test(h)) return true;

  return false;
}

/** Valida se o endpoint é seguro para fetch. */
function validateEndpoint(endpoint: string): { ok: boolean; error?: string } {
  try {
    const url = new URL(endpoint);

    // Só permite HTTP/HTTPS
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return {
        ok: false,
        error: "Protocolo não permitido (use http:// ou https://)",
      };
    }

    const hostname = url.hostname;

    // Hosts explicitamente bloqueados
    if (isBlockedHost(hostname)) {
      return {
        ok: false,
        error: "Host bloqueado (metadata cloud ou rede privada)",
      };
    }

    // Hosts permitidos (localhost apenas)
    if (!ALLOWED_HOSTS.has(hostname)) {
      return {
        ok: false,
        error: `Host não permitido: ${hostname}. Apenas localhost é aceito.`,
      };
    }

    // Porta razoável
    const port = url.port
      ? parseInt(url.port)
      : url.protocol === "https:"
        ? 443
        : 80;
    if (port < 1 || port > 65535) {
      return { ok: false, error: "Porta inválida" };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "URL inválida" };
  }
}

/**
 * Autentica o request. Retorna true se autenticado.
 */
async function authenticate(req: Request): Promise<boolean> {
  try {
    const auth = getAuthClient(req);
    const { data } = await auth.auth.getUser();
    return !!data?.user;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  // 1. Autenticação obrigatória
  if (!(await authenticate(req))) {
    return NextResponse.json(
      { ok: false, error: "Não autenticado" },
      { status: 401 },
    );
  }

  try {
    const { endpoint } = await req.json();
    const url = endpoint ?? "http://localhost:11434";

    // 2. Validação de endpoint
    const validation = validateEndpoint(url);
    if (!validation.ok) {
      return NextResponse.json(
        { ok: false, error: validation.error },
        { status: 403 },
      );
    }

    const res = await fetch(`${url}/api/tags`, {
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: `HTTP ${res.status}` });
    }

    const data = await res.json();
    const models = (data?.models ?? []).map((m: any) => ({
      name: m.name,
      size: m.size ?? 0,
    }));

    return NextResponse.json({ ok: true, models });
  } catch (err) {
    return NextResponse.json({
      ok: false,
      error: (err as Error).message,
    });
  }
}

export async function GET(req: Request) {
  // 1. Autenticação obrigatória
  if (!(await authenticate(req))) {
    return NextResponse.json(
      { ok: false, error: "Não autenticado" },
      { status: 401 },
    );
  }

  try {
    const url = new URL(req.url);
    const endpoint =
      url.searchParams.get("endpoint") ?? "http://localhost:11434";

    // 2. Validação de endpoint
    const validation = validateEndpoint(endpoint);
    if (!validation.ok) {
      return NextResponse.json(
        { ok: false, error: validation.error },
        { status: 403 },
      );
    }

    const res = await fetch(`${endpoint}/api/tags`, {
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: `HTTP ${res.status}` });
    }

    const data = await res.json();
    const models = (data?.models ?? []).map((m: any) => ({
      name: m.name,
      size: m.size ?? 0,
    }));

    return NextResponse.json({ ok: true, models });
  } catch (err) {
    return NextResponse.json({
      ok: false,
      error: (err as Error).message,
    });
  }
}
