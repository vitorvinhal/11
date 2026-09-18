/**
 * Performance Monitoring — FASE 16C
 *
 * Testes do módulo de monitoramento de performance.
 */

import {
  recordMetric,
  recordRequest,
  getPerformanceSummary,
  getRequestMetricsByPath,
} from "./performance";

describe("Performance Monitoring — FASE 16C", () => {
  test("recordMetric adds metric", () => {
    expect(() => {
      recordMetric("test-metric", 42, "ms", { env: "test" });
    }).not.toThrow();
  });

  test("recordRequest adds request metric", () => {
    expect(() => {
      recordRequest("/api/test", "GET", 200, 150);
    }).not.toThrow();
  });

  test("getPerformanceSummary returns summary", () => {
    const summary = getPerformanceSummary();

    expect(summary).toHaveProperty("totalRequests");
    expect(summary).toHaveProperty("last5min");
    expect(summary).toHaveProperty("customMetrics");
    expect(summary.last5min).toHaveProperty("count");
    expect(summary.last5min).toHaveProperty("avgDuration");
    expect(summary.last5min).toHaveProperty("p95Duration");
    expect(summary.last5min).toHaveProperty("errorRate");
  });

  test("getRequestMetricsByPath returns by-path metrics", () => {
    // Add some test data
    recordRequest("/api/test", "GET", 200, 100);
    recordRequest("/api/test", "POST", 201, 200);
    recordRequest("/api/other", "GET", 200, 50);

    const byPath = getRequestMetricsByPath();

    expect(byPath["/api/test"]).toBeDefined();
    expect(byPath["/api/test"].count).toBeGreaterThanOrEqual(2);
    expect(byPath["/api/other"]).toBeDefined();
    expect(byPath["/api/other"].count).toBeGreaterThanOrEqual(1);
  });
});
