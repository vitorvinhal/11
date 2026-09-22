import express, { Request, Response } from "express";
import cors from "cors";
import { spawn } from "child_process";
import pty from "node-pty";

const app = express();
app.use(cors());
app.use(express.json());

// Simple auth placeholder – will be proxied with token from /api/code
app.use((req, _res, next) => {
  // pass through
  next();
});

app.post("/orca/exec", async (req: Request, res: Response) => {
  const { command, args = [], cwd, env = {} } = req.body;
  if (!command) {
    return res.status(400).json({ error: "command required" });
  }
  try {
    const ptyProcess = pty.spawn(command, args, {
      name: "xterm-color",
      cwd: cwd || process.cwd(),
      env: { ...process.env, ...env },
      cols: 80,
      rows: 30,
    });
    let output = "";
    ptyProcess.onData((data) => {
      output += data;
    });
    ptyProcess.onExit(({ exitCode }) => {
      res.json({ success: true, output, exitCode });
    });
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

const PORT = process.env.ORCA_PORT || 4001;
app.listen(PORT, () => {
  console.log(`Orca server listening on ${PORT}`);
});
