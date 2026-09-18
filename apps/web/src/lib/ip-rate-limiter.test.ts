import { GlobalIpRateLimiter } from "./ip-rate-limiter";

function makeRequest(ip?: string): Request {
  const headers = new Headers();
  if (ip) headers.set("x-forwarded-for", ip);
  return new Request("http://localhost/api/test", { headers });
}

describe("GlobalIpRateLimiter", () => {
  let limiter: GlobalIpRateLimiter;

  beforeEach(() => {
    limiter = new GlobalIpRateLimiter({
      maxRequests: 3,
      windowMs: 60000,
      whitelist: ["10.0.0.1"],
      blockOnExceed: true,
      blockDurationMs: 120000,
    });
  });

  it("should allow requests under limit", () => {
    const result = limiter.check(makeRequest("192.168.1.1"));
    expect(result.allowed).toBe(true);
  });

  it("should block requests over limit", () => {
    const ip = "192.168.1.2";
    limiter.check(makeRequest(ip));
    limiter.check(makeRequest(ip));
    limiter.check(makeRequest(ip));
    const result = limiter.check(makeRequest(ip));
    expect(result.allowed).toBe(false);
    expect(result.blocked).toBe(true);
  });

  it("should always allow whitelisted IPs", () => {
    const ip = "10.0.0.1";
    for (let i = 0; i < 10; i++) {
      const result = limiter.check(makeRequest(ip));
      expect(result.allowed).toBe(true);
    }
  });

  it("should extract IP from x-forwarded-for", () => {
    const result = limiter.check(makeRequest("203.0.113.50"));
    expect(result.ip).toBe("203.0.113.50");
  });

  it("should default to 127.0.0.1", () => {
    const result = limiter.check(makeRequest());
    expect(result.ip).toBe("127.0.0.1");
  });

  it("should report stats", () => {
    limiter.check(makeRequest("1.1.1.1"));
    limiter.check(makeRequest("2.2.2.2"));
    const stats = limiter.stats;
    expect(stats.activeIps).toBeGreaterThan(0);
  });
});
