import {
  configureCors,
  isOriginAllowed,
  getCorsHeaders,
  getPreflightHeaders,
  handlePreflight,
} from "./cors";

describe("CORS", () => {
  beforeEach(() => {
    configureCors({
      origins: ["https://example.com", "https://app.example.com"],
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type", "Authorization"],
      exposedHeaders: ["X-RateLimit-Limit"],
      credentials: true,
      maxAge: 3600,
    });
  });

  describe("isOriginAllowed", () => {
    it("should allow matching origins", () => {
      expect(isOriginAllowed("https://example.com")).toBe(true);
    });

    it("should block non-matching origins", () => {
      expect(isOriginAllowed("https://evil.com")).toBe(false);
    });

    it("should allow null origin when no origins configured", () => {
      configureCors({ origins: [] });
      expect(isOriginAllowed(null)).toBe(true);
    });
  });

  describe("getCorsHeaders", () => {
    it("should return headers for allowed origin", () => {
      const headers = getCorsHeaders("https://example.com");
      expect(headers["Access-Control-Allow-Origin"]).toBe(
        "https://example.com",
      );
      expect(headers["Access-Control-Allow-Credentials"]).toBe("true");
    });

    it("should block non-allowed origin", () => {
      const headers = getCorsHeaders("https://evil.com");
      expect(headers["Access-Control-Allow-Origin"]).toBe("null");
    });
  });

  describe("getPreflightHeaders", () => {
    it("should return preflight headers", () => {
      const headers = getPreflightHeaders();
      expect(headers["Access-Control-Allow-Methods"]).toBe("GET, POST");
      expect(headers["Access-Control-Max-Age"]).toBe("3600");
    });
  });

  describe("handlePreflight", () => {
    it("should return 204 with CORS headers", () => {
      const response = handlePreflight();
      expect(response.status).toBe(204);
    });
  });
});
