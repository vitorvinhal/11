/**
 * Logger — FASE 16A
 *
 * Testes do módulo de logging estruturado.
 */

import { logger } from "./logger";

describe("Logger — FASE 16A", () => {
  test("logger has all log levels", () => {
    expect(typeof logger.debug).toBe("function");
    expect(typeof logger.info).toBe("function");
    expect(typeof logger.warn).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger.timer returns a function", () => {
    const timer = logger.timer("test-operation");
    expect(typeof timer).toBe("function");
  });

  test("logger.timer returns duration", () => {
    const timer = logger.timer("test-operation");
    const duration = timer();
    expect(typeof duration).toBe("number");
    expect(duration).toBeGreaterThanOrEqual(0);
  });

  test("logger.child creates sub-logger", () => {
    const child = logger.child({ requestId: "123" });
    expect(typeof child.info).toBe("function");
  });

  test("logger.error accepts error object", () => {
    const error = new Error("test error");
    expect(() => {
      logger.error("test message", { test: true }, error);
    }).not.toThrow();
  });
});
