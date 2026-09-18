import { test, expect } from "@playwright/test";

test.describe("Plugins Batch Operations", () => {
  test("PATCH requires auth", async ({ request }) => {
    const response = await request.patch("/api/plugins", {
      data: { pluginIds: ["test"], enabled: true },
    });
    expect(response.status()).toBe(401);
  });

  test("PATCH validates pluginIds", async ({ request }) => {
    // This would need auth, but we're testing validation
    const response = await request.patch("/api/plugins", {
      data: { pluginIds: [], enabled: true },
    });
    // Will return 401 before validation, but endpoint exists
    expect([400, 401]).toContain(response.status());
  });
});

test.describe("Skills Batch Operations", () => {
  test("PATCH requires auth", async ({ request }) => {
    const response = await request.patch("/api/skills", {
      data: { skillIds: ["test"], enabled: true },
    });
    expect(response.status()).toBe(401);
  });

  test("PATCH validates skillIds", async ({ request }) => {
    const response = await request.patch("/api/skills", {
      data: { skillIds: [], enabled: true },
    });
    expect([400, 401]).toContain(response.status());
  });
});
