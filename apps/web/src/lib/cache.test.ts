import { Cache } from "./cache";

describe("Cache", () => {
  let cache: Cache<string>;

  beforeEach(() => {
    cache = new Cache("test", 1000); // 1s TTL for tests
  });

  it("should store and retrieve values", () => {
    cache.set("key1", "value1");
    expect(cache.get("key1")).toBe("value1");
  });

  it("should return null for missing keys", () => {
    expect(cache.get("missing")).toBeNull();
  });

  it("should expire entries after TTL", async () => {
    cache.set("key1", "value1", 50); // 50ms TTL
    expect(cache.get("key1")).toBe("value1");

    await new Promise((r) => setTimeout(r, 100));
    expect(cache.get("key1")).toBeNull();
  });

  it("should getOrSet with sync factory", () => {
    const result = cache.getOrSet("key1", () => "computed");
    expect(result).toBe("computed");
    expect(cache.get("key1")).toBe("computed");
  });

  it("should getOrSet with async factory", async () => {
    const result = await cache.getOrSet("key1", async () => "async-computed");
    expect(result).toBe("async-computed");
    expect(cache.get("key1")).toBe("async-computed");
  });

  it("should return cached value on getOrSet", () => {
    cache.set("key1", "cached");
    const result = cache.getOrSet("key1", () => "new-value");
    expect(result).toBe("cached");
  });

  it("should invalidate by prefix", () => {
    cache.set("health:router", "ok");
    cache.set("health:plugins", "ok");
    cache.set("metrics:requests", 100 as unknown as string);

    const invalidated = cache.invalidatePrefix("health:");
    expect(invalidated).toBe(2);
    expect(cache.get("health:router")).toBeNull();
    expect(cache.get("metrics:requests")).toBe(100);
  });

  it("should invalidate specific key", () => {
    cache.set("key1", "value1");
    expect(cache.invalidate("key1")).toBe(true);
    expect(cache.get("key1")).toBeNull();
  });

  it("should cleanup expired entries", async () => {
    cache.set("key1", "v1", 50);
    cache.set("key2", "v2", 200);

    await new Promise((r) => setTimeout(r, 100));

    const cleaned = cache.cleanup();
    expect(cleaned).toBe(1);
    expect(cache.size).toBe(1);
  });

  it("should clear all entries", () => {
    cache.set("key1", "v1");
    cache.set("key2", "v2");
    cache.clear();
    expect(cache.size).toBe(0);
  });

  it("should return stats", () => {
    cache.set("key1", "v1");
    cache.set("key2", "v2");

    const stats = cache.stats();
    expect(stats.name).toBe("test");
    expect(stats.size).toBe(2);
    expect(stats.keys).toContain("key1");
    expect(stats.keys).toContain("key2");
  });
});
