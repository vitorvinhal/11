import { test, expect } from "@playwright/test";

test.describe("Export API", () => {
  test("requires auth", async ({ request }) => {
    const response = await request.get("/api/export");
    expect(response.status()).toBe(401);
  });
});

test.describe("Import API", () => {
  test("requires auth", async ({ request }) => {
    const response = await request.post("/api/import", {
      data: { memories: [] },
    });
    expect(response.status()).toBe(401);
  });
});

test.describe("System API", () => {
  test("returns system info", async ({ request }) => {
    const response = await request.get("/api/system");
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body.ok).toBeTruthy();
    expect(body.data).toBeDefined();
    expect(body.data.version).toBeDefined();
    expect(body.data.runtime).toBeDefined();
    expect(body.data.runtime.node).toBeDefined();
    expect(body.data.runtime.uptime).toBeGreaterThanOrEqual(0);
  });

  test("includes memory stats", async ({ request }) => {
    const response = await request.get("/api/system");
    const body = await response.json();

    expect(body.data.runtime.memory).toBeDefined();
    expect(body.data.runtime.memory.rss).toBeGreaterThan(0);
    expect(body.data.runtime.memory.heapUsed).toBeGreaterThan(0);
  });
});
