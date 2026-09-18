import { EventEmitter } from "./event-emitter";

interface TestEvents {
  "test:event": { value: string };
  "test:other": { count: number };
}

describe("EventEmitter", () => {
  let emitter: EventEmitter<TestEvents>;

  beforeEach(() => {
    emitter = new EventEmitter();
  });

  it("should emit and receive events", () => {
    const handler = jest.fn();
    emitter.on("test:event", handler);

    emitter.emit("test:event", { value: "hello" });

    expect(handler).toHaveBeenCalledWith({ value: "hello" });
  });

  it("should return unsubscribe function", () => {
    const handler = jest.fn();
    const unsub = emitter.on("test:event", handler);

    emitter.emit("test:event", { value: "first" });
    unsub();
    emitter.emit("test:event", { value: "second" });

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("should support once handlers", () => {
    const handler = jest.fn();
    emitter.once("test:event", handler);

    emitter.emit("test:event", { value: "first" });
    emitter.emit("test:event", { value: "second" });

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("should remove all listeners for an event", () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();
    emitter.on("test:event", handler1);
    emitter.on("test:event", handler2);

    emitter.removeAllListeners("test:event");
    emitter.emit("test:event", { value: "hello" });

    expect(handler1).not.toHaveBeenCalled();
    expect(handler2).not.toHaveBeenCalled();
  });

  it("should remove all listeners", () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();
    emitter.on("test:event", handler1);
    emitter.on("test:other", handler2);

    emitter.removeAllListeners();
    emitter.emit("test:event", { value: "hello" });
    emitter.emit("test:other", { count: 1 });

    expect(handler1).not.toHaveBeenCalled();
    expect(handler2).not.toHaveBeenCalled();
  });

  it("should return listener count", () => {
    emitter.on("test:event", jest.fn());
    emitter.on("test:event", jest.fn());

    expect(emitter.listenerCount("test:event")).toBe(2);
    expect(emitter.listenerCount("test:other")).toBe(0);
  });

  it("should handle handler errors gracefully", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation();
    const badHandler = () => {
      throw new Error("handler error");
    };
    const goodHandler = jest.fn();

    emitter.on("test:event", badHandler);
    emitter.on("test:event", goodHandler);

    emitter.emit("test:event", { value: "hello" });

    expect(goodHandler).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
