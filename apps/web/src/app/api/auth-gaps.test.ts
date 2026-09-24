/**
 * CI-MIN-001 — Regressão de segurança: AUTH BYPASS (auth-gaps).
 *
 * Exigência: rotas com requireUser respondem 401 sem sessão — GET incluído.
 * Rotas alvo: /api/code, /api/code/read, /api/terminal/exec (GET+POST),
 * /api/pc-agent (GET).
 *
 * Notas de determinismo:
 * - auth-unify cai em "dev-user" se NEXT_PUBLIC_SUPABASE_URL ausente →
 *   a env é fixada ANTES do require dinâmico das rotas.
 * - getAuthClient é mockado para retornar sessão nula (sem rede em CI).
 */

// Env ANTES de qualquer require de route (loadRootEnv não sobrescreve vars já setadas).
process.env.NEXT_PUBLIC_SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://ci-min.supabase.co";
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "ci-min-anon-key";

jest.mock("../../lib/server-supabase", () => ({
  getAuthClient: () => ({
    auth: {
      getUser: async () => ({
        data: { user: null },
        error: { message: "no session" },
      }),
    },
  }),
  getServerClient: () => null,
}));

describe("auth-gaps — 401 sem sessão (GET incluído)", () => {
  // Imports dinâmicos: só após env + mocks (jest.mock é hoisted, env não).
  let codeGET: typeof import("../code/route").GET;
  let readGET: typeof import("../code/read/route").GET;
  let termGET: typeof import("../terminal/exec/route").GET;
  let termPOST: typeof import("../terminal/exec/route").POST;
  let pcGET: typeof import("../pc-agent/route").GET;

  beforeAll(() => {
    ({ GET: codeGET } = require("./code/route"));
    ({ GET: readGET } = require("./code/read/route"));
    ({ GET: termGET, POST: termPOST } = require("./terminal/exec/route"));
    ({ GET: pcGET } = require("./pc-agent/route"));
  });

  const noAuth = (url: string, init?: RequestInit) => new Request(url, init);

  test("GET /api/code sem sessão → 401", async () => {
    const res = await codeGET(noAuth("http://localhost/api/code") as any);
    expect(res.status).toBe(401);
  });

  test("POST /api/code sem sessão → 401", async () => {
    const { POST } = require("./code/route");
    const res = await POST(
      noAuth("http://localhost/api/code", {
        method: "POST",
        body: JSON.stringify({ command: "ls" }),
      }) as any,
    );
    expect(res.status).toBe(401);
  });

  test("GET /api/code/read sem sessão → 401", async () => {
    const res = await readGET(
      noAuth("http://localhost/api/code/read?id=x") as any,
    );
    expect(res.status).toBe(401);
  });

  test("GET /api/terminal/exec sem sessão → 401", async () => {
    const res = await termGET(noAuth("http://localhost/api/terminal/exec"));
    expect(res.status).toBe(401);
  });

  test("POST /api/terminal/exec sem sessão → 401", async () => {
    const res = await termPOST(
      noAuth("http://localhost/api/terminal/exec", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ command: "ls" }),
      }),
    );
    expect(res.status).toBe(401);
  });

  test("GET /api/pc-agent sem sessão → 401", async () => {
    // UA vazia → platform detectada como desktop-web → passa do desktopOnly guard
    // e chega no requireUser → 401.
    const res = await pcGET(noAuth("http://localhost/api/pc-agent"));
    expect(res.status).toBe(401);
  });

  test("GET /api/pc-agent sem plataforma desktop → 403 (guard intacto)", async () => {
    const res = await pcGET(
      noAuth("http://localhost/api/pc-agent", {
        headers: { "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0)" },
      }),
    );
    expect(res.status).toBe(403);
  });
});
