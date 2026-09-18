import {
  createWebhook,
  deleteWebhook,
  listWebhooks,
  triggerEvent,
  getDeliveryHistory,
  resetWebhooks,
  WEBHOOK_EVENTS,
} from "./webhooks";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve(new Response("OK", { status: 200 })),
) as jest.Mock;

describe("Webhooks", () => {
  const testUserId = "user_test_123";

  beforeEach(() => {
    resetWebhooks();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a webhook", () => {
    const wh = createWebhook(testUserId, "https://example.com/hook", [
      "agent:status",
    ]);
    expect(wh.id).toBeDefined();
    expect(wh.url).toBe("https://example.com/hook");
    expect(wh.events).toEqual(["agent:status"]);
    expect(wh.active).toBe(true);
    expect(wh.secret).toMatch(/^whsec_/);
  });

  it("should list webhooks for a user", () => {
    createWebhook(testUserId, "https://a.com", ["agent:status"]);
    createWebhook(testUserId, "https://b.com", ["health:update"]);
    createWebhook("other_user", "https://c.com", ["agent:status"]);

    const hooks = listWebhooks(testUserId);
    expect(hooks.length).toBe(2);
  });

  it("should delete a webhook", () => {
    const wh = createWebhook(testUserId, "https://delete.me", ["agent:status"]);
    const result = deleteWebhook(wh.id, testUserId);
    expect(result).toBe(true);
    expect(listWebhooks(testUserId).length).toBe(0);
  });

  it("should not delete webhook of another user", () => {
    const wh = createWebhook(testUserId, "https://no-delete.me", [
      "agent:status",
    ]);
    const result = deleteWebhook(wh.id, "other_user");
    expect(result).toBe(false);
  });

  it("should return available events", () => {
    expect(WEBHOOK_EVENTS).toContain("agent:status");
    expect(WEBHOOK_EVENTS).toContain("health:update");
    expect(WEBHOOK_EVENTS).toContain("backup:completed");
  });

  it("should trigger event for matching webhooks", async () => {
    createWebhook(testUserId, "https://match.com", ["agent:status"]);

    const deliveries = await triggerEvent("agent:status", {
      userId: "u1",
      status: "online",
    });
    expect(deliveries.length).toBe(1);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("should not trigger for non-matching events", async () => {
    createWebhook(testUserId, "https://no-match.com", ["agent:status"]);

    const deliveries = await triggerEvent("health:update", { service: "db" });
    expect(deliveries.length).toBe(0);
  });

  it("should return delivery history", () => {
    const history = getDeliveryHistory(undefined, 10);
    expect(Array.isArray(history)).toBe(true);
  });
});
