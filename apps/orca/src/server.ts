import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import pty from "node-pty";
import { sanitizeCwd } from "./cwd";

const MAX_OUTPUT = 1024 * 1024;
const DEFAULT_TIMEOUT_MS = 30_000;
const SHELL_METACHARS = /[;&|<>()`$%!\r\n]/;
const WINDOWS_BUILTINS = new Set(["echo", "cd", "dir", "type", "ver", "set"]);

const app = express();
app.use(
  cors({
    origin(origin, cb) {
      if (
        !origin ||
        /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
      ) {
        cb(null, true);
      } else {
        cb(new Error("Not allowed by CORS"));
      }
    },
  }),
);
app.use(express.json({ limit: "64kb" }));

function sanitizeCommand(
  input: unknown,
): { command: string; args: string[] } | null {
  if (typeof input !== "string" || input.trim().length === 0) {
    return null;
  }
  if (SHELL_METACHARS.test(input)) {
    return null;
  }
  const tokens = input.trim().split(/\s+/);
  return { command: tokens[0], args: tokens.slice(1) };
}

app.post("/orca/exec", async (req: Request, res: Response) => {
  const { command, args = [], cwd, env = {} } = req.body;

  let parsed: { command: string; args: string[] } | null = null;
  if (Array.isArray(args) && args.length > 0) {
    parsed =
      typeof command === "string" && SHELL_METACHARS.test(command)
        ? null
        : (parsed = { command: String(command), args: args.map(String) });
    if (
      parsed &&
      args.some((a) => typeof a !== "string" || SHELL_METACHARS.test(String(a)))
    ) {
      parsed = null;
    }
  } else {
    parsed = sanitizeCommand(command);
  }
  if (!parsed) {
    return res.status(400).json({ error: "invalid command" });
  }

  const targetCwd = sanitizeCwd(cwd, process.cwd());
  if (!targetCwd) {
    return res.status(400).json({ error: "invalid cwd" });
  }

  const { command: execFile, args: execArgs } = parsed;
  const os = process.platform;

  const spawnOpts: pty.IPtyForkOptions = {
    name: "xterm-color",
    cwd: targetCwd,
    env: { ...process.env, ...env } as Record<string, string>,
    cols: 80,
    rows: 30,
  };

  let file = execFile;
  let fileArgs = execArgs;
  if (os === "win32" && WINDOWS_BUILTINS.has(execFile.toLowerCase())) {
    file = "cmd.exe";
    fileArgs = ["/d", "/c", execFile, ...execArgs];
  }

  let proc: pty.IPty;
  try {
    proc = pty.spawn(file, fileArgs, spawnOpts);
  } catch (e) {
    return res
      .status(500)
      .json({ error: `spawn failed: ${(e as Error).message}` });
  }

  let output = "";
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    try {
      proc.kill();
    } catch {
      /* already dead */
    }
  }, DEFAULT_TIMEOUT_MS);

  proc.onData((data: string) => {
    if (output.length < MAX_OUTPUT) {
      output += data;
      if (output.length > MAX_OUTPUT) {
        output = output.slice(0, MAX_OUTPUT) + "\n[OUTPUT TRUNCATED]";
      }
    }
  });

  proc.onExit(({ exitCode, signal }) => {
    clearTimeout(timer);
    return res.json({
      success: !timedOut && exitCode === 0,
      output,
      exitCode: signal ? -1 : exitCode,
      timedOut,
    });
  });
});

const PORT = Number(process.env.ORCA_PORT) || 4001;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Orca server listening on 127.0.0.1:${PORT}`);
});
