/**
 * CI-MIN-001 ΓÇö Regress├úo de seguran├ºa: AUTH BYPASS (auth-gaps).
 *
 * Exig├¬ncia: rotas com requireUser respondem 401 sem sess├úo ΓÇö GET inclu├¡do.
 * Rotas alvo: /api/code, /api/code/read, /api/terminal/exec (GET+POST),
 * /api/pc-agent (GET).
 *
 * Notas de determinismo:
 * - auth-unify cai em "dev-user" se NEXT_PUBLIC_SUPABASE_URL ausente ΓåÆ
 *   a env ├⌐ fixada ANTES do require din├ómico das rotas.
 * - getAuthClient ├⌐ mockado para retornar sess├úo nula (sem rede em CI).
 */

// Env ANTES de qualquer require de route (loadRootEnv n├úo sobrescreve vars j├í setadas).
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

describe("auth-gaps ΓÇö 401 sem sess├úo (GET inclu├¡do)", () => {
  // Imports din├ómicos: s├│ ap├│s env + mocks (jest.mock ├⌐ hoisted, env n├úo).
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

  test("GET /api/code sem sess├úo ΓåÆ 401", async () => {
    const res = await codeGET(noAuth("http://localhost/api/code") as any);
    expect(res.status).toBe(401);
  });

  test("POST /api/code sem sess├úo ΓåÆ 401", async () => {
    const { POST } = require("./code/route");
    const res = await POST(
      noAuth("http://localhost/api/code", {
        method: "POST",
        body: JSON.stringify({ command: "ls" }),
      }) as any,
    );
    expect(res.status).toBe(401);
  });

  test("GET /api/code/read sem sess├úo ΓåÆ 401", async () => {
    const res = await readGET(
      noAuth("http://localhost/api/code/read?id=x") as any,
    );
    expect(res.status).toBe(401);
  });

  test("GET /api/terminal/exec sem sess├úo ΓåÆ 401", async () => {
    const res = await termGET(noAuth("http://localhost/api/terminal/exec"));
    expect(res.status).toBe(401);
  });

  test("POST /api/terminal/exec sem sess├úo ΓåÆ 401", async () => {
    const res = await termPOST(
      noAuth("http://localhost/api/terminal/exec", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ command: "ls" }),
      }),
    );
    expect(res.status).toBe(401);
  });

  test("GET /api/pc-agent sem sess├úo ΓåÆ 401", async () => {
    // UA vazia ΓåÆ platform detectada como desktop-web ΓåÆ passa do desktopOnly guard
    // e chega no requireUser ΓåÆ 401.
    const res = await pcGET(noAuth("http://localhost/api/pc-agent"));
    expect(res.status).toBe(401);
  });

  test("GET /api/pc-agent sem plataforma desktop ΓåÆ 403 (guard intacto)", async () => {
    const res = await pcGET(
      noAuth("http://localhost/api/pc-agent", {
        headers: { "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0)" },
      }),
    );
    expect(res.status).toBe(403);
  });
});
