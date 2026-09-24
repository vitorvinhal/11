import { spawn } from "node:child_process";
import path from "node:path";

export interface ServeCliArgs {
  port: number | null;
  pairingAddress: string | null;
  json: boolean;
  mobilePairing: boolean;
  noPairing: boolean;
  passthrough: string[];
}

export function parseServeArgs(argv: string[]): ServeCliArgs {
  const args: ServeCliArgs = {
    port: null,
    pairingAddress: null,
    json: false,
    mobilePairing: false,
    noPairing: false,
    passthrough: [],
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--port") {
      const v = argv[++i];
      const n = Number(v);
      if (!Number.isFinite(n) || n <= 0) {
        throw new Error(`invalid --port: ${v}`);
      }
      args.port = n;
    } else if (a === "--pairing-address") {
      const v = argv[++i];
      if (!v || v.startsWith("--")) {
        throw new Error("--pairing-address requires a host value");
      }
      args.pairingAddress = v;
    } else if (a === "--json") {
      args.json = true;
    } else if (a === "--mobile-pairing") {
      args.mobilePairing = true;
    } else if (a === "--no-pairing") {
      args.noPairing = true;
    } else {
      args.passthrough.push(a);
    }
  }
  return args;
}

export function buildOrcaServeArgv(args: ServeCliArgs): string[] {
  const out = ["serve"];
  if (args.port != null) out.push("--port", String(args.port));
  if (args.pairingAddress != null) {
    out.push("--pairing-address", args.pairingAddress);
  }
  if (args.json) out.push("--json");
  if (args.mobilePairing) out.push("--mobile-pairing");
  if (args.noPairing) out.push("--no-pairing");
  out.push(...args.passthrough);
  return out;
}

function findOrcaBinary(): string {
  const candidates = [
    path.join(
      process.env.LOCALAPPDATA ?? "",
      "Programs",
      "orca",
      "resources",
      "bin",
      "orca.exe",
    ),
    path.join(
      process.env.LOCALAPPDATA ?? "",
      "Programs",
      "orca",
      "resources",
      "bin",
      "orca.cmd",
    ),
    "orca",
  ].filter((p) => p && !p.startsWith(path.sep + path.sep) && p !== "orca");

  const fs = require("node:fs") as typeof import("node:fs");
  for (const c of candidates) {
    if (c && fs.existsSync(c)) return c;
  }
  return "orca";
}

function main(): void {
  const argv = process.argv.slice(2);
  let parsed: ServeCliArgs;
  try {
    parsed = parseServeArgs(argv);
  } catch (e) {
    process.stderr.write(`${(e as Error).message}\n`);
    process.exit(2);
    return;
  }

  const orcaArgs = buildOrcaServeArgv(parsed);
  const bin = findOrcaBinary();
  const child = spawn(bin, orcaArgs, {
    stdio: "inherit",
    windowsHide: true,
    env: process.env,
  });

  child.on("error", (err) => {
    process.stderr.write(
      `orca serve: falha ao executar runtime Orca (${bin}): ${err.message}\n` +
        `Instale o Orca desktop ou garanta que 'orca' está no PATH.\n`,
    );
    process.exit(1);
  });

  child.on("exit", (code, signal) => {
    if (signal) {
      process.exit(1);
    }
    process.exit(code ?? 0);
  });
}

if (require.main === module) {
  main();
}
