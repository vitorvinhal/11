import { buildOrcaServeArgv, parseServeArgs } from "./serve";

describe("orca serve CLI args", () => {
  it("parses --port, --pairing-address and --json", () => {
    const a = parseServeArgs([
      "--port",
      "4001",
      "--pairing-address",
      "127.0.0.1",
      "--json",
    ]);
    expect(a.port).toBe(4001);
    expect(a.pairingAddress).toBe("127.0.0.1");
    expect(a.json).toBe(true);
  });

  it("builds orca serve argv preserving flags", () => {
    const a = parseServeArgs([
      "--port",
      "4001",
      "--pairing-address",
      "10.0.0.5",
      "--json",
      "--mobile-pairing",
    ]);
    expect(buildOrcaServeArgv(a)).toEqual([
      "serve",
      "--port",
      "4001",
      "--pairing-address",
      "10.0.0.5",
      "--json",
      "--mobile-pairing",
    ]);
  });

  it("rejects invalid --port", () => {
    expect(() => parseServeArgs(["--port", "abc"])).toThrow(/invalid --port/);
    expect(() => parseServeArgs(["--port", "-1"])).toThrow(/invalid --port/);
  });

  it("rejects --pairing-address without value", () => {
    expect(() => parseServeArgs(["--pairing-address"])).toThrow(
      /requires a host/,
    );
    expect(() => parseServeArgs(["--pairing-address", "--json"])).toThrow(
      /requires a host/,
    );
  });

  it("defaults to null port/address when flags omitted", () => {
    const a = parseServeArgs([]);
    expect(a.port).toBeNull();
    expect(a.pairingAddress).toBeNull();
    expect(a.json).toBe(false);
    expect(buildOrcaServeArgv(a)).toEqual(["serve"]);
  });
});
