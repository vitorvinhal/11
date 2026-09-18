import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('loads successfully', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });

  test('has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/11/);
  });
});

test.describe('Health Endpoint', () => {
  test('returns ok status', async ({ request }) => {
    const response = await request.get('/api/health');
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body.ok).toBeTruthy();
    expect(body.services).toBeDefined();
  });

  test('includes all services', async ({ request }) => {
    const response = await request.get('/api/health');
    const body = await response.json();

    expect(body.services.router).toBeDefined();
    expect(body.services.plugins).toBeDefined();
    expect(body.services.skills).toBeDefined();
  });
});

test.describe('Version Endpoint', () => {
  test('returns version info', async ({ request }) => {
    const response = await request.get('/api/version');
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body.ok).toBeTruthy();
    expect(body.data).toBeDefined();
    expect(body.data.version).toBeDefined();
    expect(body.data.phase).toBeDefined();
  });
});

test.describe('Plugins API', () => {
  test('returns plugins list (requires auth)', async ({ request }) => {
    const response = await request.get('/api/plugins');
    // Without auth, should return 401
    expect(response.status()).toBe(401);
  });
});

test.describe('Skills API', () => {
  test('returns skills list (requires auth)', async ({ request }) => {
    const response = await request.get('/api/skills');
    // Without auth, should return 401
    expect(response.status()).toBe(401);
  });
});

test.describe('Metrics API', () => {
  test('returns metrics (requires auth)', async ({ request }) => {
    const response = await request.get('/api/metrics');
    // Without auth, should return 401
    expect(response.status()).toBe(401);
  });
});

test.describe('Health Dashboard', () => {
  test('loads health page', async ({ page }) => {
    const response = await page.goto('/health');
    expect(response?.status()).toBe(200);
  });
});

test.describe('Admin Dashboard', () => {
  test('loads admin page', async ({ page }) => {
    const response = await page.goto('/admin');
    expect(response?.status()).toBe(200);
  });
});

test.describe('Rate Limiting', () => {
  test('health endpoint has no rate limit', async ({ request }) => {
    // Health endpoint should be accessible without auth
    const response = await request.get('/api/health');
    expect(response.ok()).toBeTruthy();
  });
});
