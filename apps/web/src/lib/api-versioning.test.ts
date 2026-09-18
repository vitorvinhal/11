import {
  detectVersion,
  isVersionActive,
  isVersionDeprecated,
  getVersionInfo,
  getAllVersions,
  versionedResponse,
} from "./api-versioning";

function makeRequest(
  url: string,
  headers: Record<string, string> = {},
): Request {
  return new Request(url, { headers });
}

describe("API Versioning", () => {
  describe("detectVersion", () => {
    it("should detect version from URL path", () => {
      const req = makeRequest("http://localhost/api/v2/plugins");
      expect(detectVersion(req)).toBe("v2");
    });

    it("should detect version from query param", () => {
      const req = makeRequest("http://localhost/api/plugins?version=v2");
      expect(detectVersion(req)).toBe("v2");
    });

    it("should detect version from Accept header", () => {
      const req = makeRequest("http://localhost/api/plugins", {
        Accept: "application/vnd.11.v2+json",
      });
      expect(detectVersion(req)).toBe("v2");
    });

    it("should default to v1", () => {
      const req = makeRequest("http://localhost/api/plugins");
      expect(detectVersion(req)).toBe("v1");
    });
  });

  describe("isVersionActive", () => {
    it("should return true for active versions", () => {
      expect(isVersionActive("v1")).toBe(true);
      expect(isVersionActive("v2")).toBe(true);
    });

    it("should return false for unknown versions", () => {
      expect(isVersionActive("v99")).toBe(false);
    });
  });

  describe("getVersionInfo", () => {
    it("should return version info", () => {
      const info = getVersionInfo("v1");
      expect(info).toBeDefined();
      expect(info?.major).toBe(1);
    });

    it("should return undefined for unknown", () => {
      expect(getVersionInfo("v99")).toBeUndefined();
    });
  });

  describe("getAllVersions", () => {
    it("should return all versions", () => {
      const versions = getAllVersions();
      expect(versions.length).toBe(2);
    });
  });

  describe("versionedResponse", () => {
    it("should wrap data with version meta", () => {
      const response = versionedResponse({ name: "test" }, "v1");
      expect(response.data).toEqual({ name: "test" });
      expect(response.meta.version).toBe("v1");
      expect(response.meta.deprecated).toBe(false);
    });
  });
});
