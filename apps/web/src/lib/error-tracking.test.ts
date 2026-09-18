/**
 * Error Tracking — FASE 16B
 *
 * Testes do módulo de rastreamento de erros.
 */

import { trackError } from "./error-tracking";

describe("Error Tracking — FASE 16B", () => {
  test("trackError returns tracked error with id", () => {
    const error = new Error("test error");
    const tracked = trackError(error);

    expect(tracked.id).toBeDefined();
    expect(tracked.id).toMatch(/^err_/);
    expect(tracked.message).toBe("test error");
    expect(tracked.stack).toBeDefined();
  });

  test("trackError includes context", () => {
    const error = new Error("test error");
    const tracked = trackError(error, {
      requestId: "req-123",
      path: "/api/test",
      method: "GET",
    });

    expect(tracked.context.requestId).toBe("req-123");
    expect(tracked.context.path).toBe("/api/test");
    expect(tracked.context.method).toBe("GET");
    expect(tracked.context.timestamp).toBeDefined();
  });

  test("trackError determines severity", () => {
    const authError = new Error("unauthorized");
    authError.name = "AuthError";
    const tracked = trackError(authError);

    expect(tracked.severity).toBe("high");
  });

  test("trackError handles non-Error objects", () => {
    const tracked = trackError(new Error("string error"));

    expect(tracked.message).toBe("string error");
    expect(tracked.severity).toBeDefined();
  });
});
