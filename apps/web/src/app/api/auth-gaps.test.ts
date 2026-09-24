/**
 * AUTH-GAPS-002 ΓÇö testes de regress├úo das 10 rotas que estavam sem requireUser.
 * Cen├írio: request SEM cookie/token de sess├úo ΓåÆ 401 em TODOS os handlers exportados.
 * Mock: auth-unify.requireUser ΓåÆ null (sem sess├úo), simulando produ├º├úo sem JWT.
 */
jest.mock("../../lib/auth-unify", () => ({
  requireUser: jest.fn(async () => null),
}));

import { POST as sttPost } from "./stt/route";
import { POST as ttsPost } from "./tts/route";
import {
  GET as mediaGet,
  POST as mediaPost,
  DELETE as mediaDelete,
  PATCH as mediaPatch,
} from "./media/route";
import { GET as systemGet } from "./system/route";
import { GET as updatesGet } from "./updates/route";
import { DELETE as accountDelete } from "./account/route";
import { GET as githubGet } from "./connectors/github/route";
import { GET as googleGet } from "./connectors/google/route";
import { GET as notionGet } from "./connectors/notion/route";
import { GET as slackGet } from "./connectors/slack/route";

type Handler = (req: Request) => Promise<Response>;

function req(method: string, path: string, body?: unknown): Request {
  return new Request(`http://localhost:3000${path}`, {
    method,
    headers: { "content-type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
}

const ROUTES: Array<{
  name: string;
  method: string;
  path: string;
  handler: Handler;
  body?: unknown;
}> = [
  {
    name: "POST /api/stt",
    method: "POST",
    path: "/api/stt",
    handler: sttPost,
    body: { audio: "x", mime: "audio/webm" },
  },
  {
    name: "POST /api/tts",
    method: "POST",
    path: "/api/tts",
    handler: ttsPost,
    body: { text: "oi" },
  },
  {
    name: "GET /api/media",
    method: "GET",
    path: "/api/media",
    handler: mediaGet,
  },
  {
    name: "POST /api/media",
    method: "POST",
    path: "/api/media",
    handler: mediaPost,
    body: { filename: "a.png", data: "" },
  },
  {
    name: "DELETE /api/media",
    method: "DELETE",
    path: "/api/media?id=x",
    handler: mediaDelete,
  },
  {
    name: "PATCH /api/media",
    method: "PATCH",
    path: "/api/media",
    handler: mediaPatch,
    body: { id: "x", analysis: "y" },
  },
  {
    name: "GET /api/system",
    method: "GET",
    path: "/api/system",
    handler: systemGet,
  },
  {
    name: "GET /api/updates",
    method: "GET",
    path: "/api/updates",
    handler: updatesGet,
  },
  {
    name: "DELETE /api/account",
    method: "DELETE",
    path: "/api/account",
    handler: accountDelete,
  },
  {
    name: "GET /api/connectors/github",
    method: "GET",
    path: "/api/connectors/github",
    handler: githubGet,
  },
  {
    name: "GET /api/connectors/google",
    method: "GET",
    path: "/api/connectors/google",
    handler: googleGet,
  },
  {
    name: "GET /api/connectors/notion",
    method: "GET",
    path: "/api/connectors/notion",
    handler: notionGet,
  },
  {
    name: "GET /api/connectors/slack",
    method: "GET",
    path: "/api/connectors/slack",
    handler: slackGet,
  },
];

describe("AUTH-GAPS-002 ΓÇö 10 rotas exigem sess├úo (401 sem cookie/token)", () => {
  test.each(ROUTES.map((r) => [r.name, r] as const))(
    "%s ΓåÆ 401 sem sess├úo",
    async (_name, route) => {
      const res = await route.handler(
        req(route.method, route.path, route.body),
      );
      expect(res.status).toBe(401);
    },
  );

  test("m├⌐todos alternativos de /api/media tamb├⌐m retornam 401 sem sess├úo", async () => {
    for (const [method, handler, body] of [
      ["GET", mediaGet, undefined],
      ["POST", mediaPost, { filename: "a.png", data: "" }],
      ["DELETE", mediaDelete, undefined],
      ["PATCH", mediaPatch, { id: "x", analysis: "y" }],
    ] as const) {
      const res = await handler(req(method, "/api/media", body));
      expect(res.status).toBe(401);
    }
  });

  test("m├⌐todo alternativo: POST /api/stt e POST /api/tts ΓåÆ 401 (j├í cobertos) + handlers alternativos inexistente n├úo quebram import", () => {
    expect(typeof sttPost).toBe("function");
    expect(typeof ttsPost).toBe("function");
  });
});
