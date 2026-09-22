"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _9router_1 = require("./9router");
const urls = [];
let mockBody = null;
function installMock(ok, responseBody) {
    urls.length = 0;
    global.fetch = jest.fn(async (url, opts) => {
        urls.push(url);
        mockBody = JSON.parse(opts.body);
        return {
            ok,
            status: ok ? 200 : 500,
            text: async () => responseBody,
        };
    });
}
const messages = [
    { role: "user", content: [{ type: "text", text: "liste meus arquivos" }] },
];
describe("NineRouterAdapter — function calling", () => {
    beforeEach(() => {
        delete process.env["ROUTER9_TUNNEL"];
        process.env["ROUTER9_ENDPOINT"] = "http://router9.test";
        process.env["ROUTER9_MODEL"] = "kr/glm-5";
        process.env["ROUTER9_FALLBACK_MODELS"] = "";
        process.env["ROUTER9_TOKEN"] = "";
    });
    it("envia tools no body quando opts.tools presente", async () => {
        const tools = [
            {
                name: "device.fs_list",
                description: "Lista arquivos",
                parameters: {
                    type: "object",
                    properties: { path: { type: "string" } },
                },
            },
        ];
        installMock(true, JSON.stringify({
            choices: [{ message: { content: "ok" } }],
            usage: { prompt_tokens: 10, completion_tokens: 5 },
        }));
        const adapter = new _9router_1.NineRouterAdapter();
        const res = await adapter.complete(messages, {
            sessionId: "s1",
            tools: tools,
        });
        expect(Array.isArray(mockBody.tools)).toBe(true);
        expect(mockBody.tools[0].name).toBe("device.fs_list");
        expect(mockBody.tool_choice).toBe("auto");
        expect(res.message.content[0].text).toBe("ok");
    });
    it("parseia tool_calls da resposta e retorna no CanonicalMessage", async () => {
        installMock(true, JSON.stringify({
            choices: [
                {
                    message: {
                        content: null,
                        tool_calls: [
                            {
                                id: "call_1",
                                type: "function",
                                function: {
                                    name: "device.fs_list",
                                    arguments: JSON.stringify({ path: "C:/Users" }),
                                },
                            },
                        ],
                    },
                },
            ],
            usage: { prompt_tokens: 20, completion_tokens: 5 },
        }));
        const adapter = new _9router_1.NineRouterAdapter();
        const res = await adapter.complete(messages, { sessionId: "s1" });
        const calls = res.message.toolCalls;
        expect(calls).toHaveLength(1);
        expect(calls[0].name).toBe("device.fs_list");
        expect(calls[0].arguments).toEqual({ path: "C:/Users" });
        expect(calls[0].id).toBe("call_1");
    });
    it("não envia tools quando opts.tools ausente (retrocompatível)", async () => {
        installMock(true, JSON.stringify({
            choices: [{ message: { content: "sem tools" } }],
            usage: { prompt_tokens: 3, completion_tokens: 2 },
        }));
        const adapter = new _9router_1.NineRouterAdapter();
        await adapter.complete(messages, { sessionId: "s1" });
        expect(mockBody.tools).toBeUndefined();
    });
});
