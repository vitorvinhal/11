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

test.describe("Performance API", () => {
  test("requires auth", async ({ request }) => {
    const response = await request.get("/api/performance");
    expect(response.status()).toBe(401);
  });
});

test.describe("System API", () => {
  test("requires auth (AUTH-GAPS-002)", async ({ request }) => {
    const response = await request.get("/api/system");
    expect(response.status()).toBe(401);
  });
});
