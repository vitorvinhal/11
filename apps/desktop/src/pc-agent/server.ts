import express, { Request, Response, NextFunction } from "express";
import { createServer as createHttpServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";
import {
  executeDeviceTool,
  isDeviceTool,
  listDeviceTools,
} from "./device-tools";

// FAIL FAST: JWT_SECRET obrigatório — sem fallback inseguro
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error("[FATAL] JWT_SECRET não definido. PC Agent não pode iniciar.");
  process.exit(1);
}

const PORT = parseInt(process.env.PC_AGENT_PORT || "3001");

interface PCSession {
  id: string;
  userId: string;
  command: string;
  args: string[];
  workingDir?: string;
  env?: Record<string, string>;
  status:
    "pending" | "running" | "completed" | "failed" | "cancelled" | "rejected";
  output?: string;
  error?: string;
  exitCode?: number;
  startedAt?: string;
  completedAt?: string;
  approved?: boolean;
  approvedBy?: string;
  approvedAt?: string;
  createdAt: string;
  updatedAt: string;
  deviceId?: string;
}

const sessionStore = new Map<string, PCSession>();
const wsClients = new Map<string, WebSocket>();

// Segredo de pareamento do Agente PC (device↔servidor local).
// Recebido via POST /device/pair pela webview (secret vinda do registro na nuvem).
let pairSecret: string | null = null;

function isPaired(bearer: string | undefined): boolean {
  return !!pairSecret && bearer === pairSecret;
}

function verifyToken(token: string): { userId: string; email: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET!) as { userId: string; email: string };
  } catch {
    return null;
  }
}

function broadcastToUser(userId: string, message: any) {
  const client = wsClients.get(userId);
  if (client && client.readyState === WebSocket.OPEN) {
    client.send(JSON.stringify(message));
  }
}

// HTTP Server Setup
const app = express();
app.use(helmet());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") ?? "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json({ limit: "10mb" }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 1000 }));

// Auth middleware
function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.substring(7);
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ error: "Invalid token" });
  }

  (req as any).user = decoded;
  next();
}

// Health check
app.get("/health", (_, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    sessions: sessionStore.size,
    wsClients: wsClients.size,
    paired: !!pairSecret,
    uptime: process.uptime(),
  });
});

// ─── Agente de Dispositivo (device tools) ───────────────────────────────────

// Webview envia o segredo de pareamento uma vez para habilitar tools locais.
app.post("/device/pair", (req: Request, res: Response) => {
  const secret = req.body?.secret as string | undefined;
  if (!secret || typeof secret !== "string" || secret.length < 32) {
    return res.status(400).json({ error: "secret inválido" });
  }
  pairSecret = secret;
  res.json({ success: true, paired: true });
});

// Executa uma tool de dispositivo (autorizada pelo segredo pareado).
app.post("/device/tool", async (req: Request, res: Response) => {
  const auth = req.headers.authorization ?? "";
  const bearer = auth.replace("Bearer ", "").trim();
  if (!isPaired(bearer)) {
    return res.status(401).json({ error: "Dispositivo não pareado" });
  }

  const { name, args } = req.body as {
    name?: string;
    args?: Record<string, unknown>;
  };
  if (!name || !isDeviceTool(name)) {
    return res.status(400).json({
      error: `Tool inválida. Disponíveis: ${listDeviceTools().join(", ")}`,
    });
  }

  try {
    const { result } = await executeDeviceTool(name, args ?? {});
    res.json({ success: true, name, result });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, name, error: (err as Error).message });
  }
});

// Lista as tools suportadas (diagnóstico).
app.get("/device/tools", (_req, res) => {
  res.json({ tools: listDeviceTools() });
});

// Session endpoints — TODOS protegidos com authMiddleware
app.get("/api/sessions", authMiddleware, (req: Request, res: Response) => {
  const userId = (req as any).user.userId;
  const sessions = Array.from(sessionStore.values()).filter(
    (s) => s.userId === userId,
  );
  res.json(sessions);
});

app.get("/api/sessions/:id", authMiddleware, (req: Request, res: Response) => {
  const userId = (req as any).user.userId;
  const session = sessionStore.get(req.params.id);

  if (!session) {
    return res.status(404).json({ error: "Session not found" });
  }

  if (session.userId !== userId) {
    return res.status(403).json({ error: "Forbidden" });
  }

  res.json(session);
});

app.post(
  "/api/sessions",
  authMiddleware,
  async (req: Request, res: Response) => {
    const userId = (req as any).user.userId;
    const { command, args } = req.body;

    if (!command) {
      return res.status(400).json({ error: "Command is required" });
    }

    // Sanitize command
    const sanitizedCommand = command.replace(/[;&|`$(){}[\]]/g, "").trim();
    const sanitizedArgs = (args || []).map((arg: string) =>
      arg.replace(/[;&|`$(){}[\]]/g, "").trim(),
    );

    const session: any = {
      id: `pc_${Date.now()}_${Math.random().toString(36).substring(2, 12)}`,
      userId,
      command: sanitizedCommand,
      args: sanitizedArgs,
      workingDir: req.body.workingDir,
      env: req.body.env,
      deviceId: req.body.deviceId,
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    sessionStore.set(session.id, session);

    // Notify via WebSocket
    broadcastToUser(userId, {
      type: "session_create",
      payload: session,
    });

    res.status(201).json(session);
  },
);

app.put(
  "/api/sessions/:id/approve",
  authMiddleware,
  async (req: Request, res: Response) => {
    const userId = (req as any).user.userId;
    const { approved, reason } = req.body;
    const session = sessionStore.get(req.params.id);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    if (session.userId !== userId) {
      return res.status(403).json({ error: "Forbidden" });
    }

    if (session.status !== "pending") {
      return res.status(400).json({ error: "Session not in pending state" });
    }

    const isApproved = approved === true;
    session.approved = isApproved;
    session.approvedBy = userId;
    session.approvedAt = new Date().toISOString();
    session.status = isApproved ? "running" : "rejected";
    session.error = isApproved ? undefined : reason || "Rejected by user";
    session.updatedAt = new Date().toISOString();

    if (!isApproved) {
      session.completedAt = new Date().toISOString();
    }

    sessionStore.set(session.id, session);

    // Notify via WebSocket
    broadcastToUser(userId, {
      type: "session_status",
      payload: {
        sessionId: session.id,
        status: session.status,
        approved: isApproved,
      },
    });

    if (isApproved) {
      executeSession(session.id);
    }

    res.json(session);
  },
);

// FIX CRÍTICO: authMiddleware adicionado nestas duas rotas
app.patch(
  "/api/sessions/:id/cancel",
  authMiddleware,
  async (req: Request, res: Response) => {
    const userId = (req as any).user.userId;
    const session = sessionStore.get(req.params.id);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    if (session.userId !== userId) {
      return res.status(403).json({ error: "Forbidden" });
    }

    if (session.status !== "running" && session.status !== "pending") {
      return res
        .status(400)
        .json({ error: "Cannot cancel session in current state" });
    }

    session.status = "cancelled";
    session.completedAt = new Date().toISOString();
    session.updatedAt = new Date().toISOString();
    sessionStore.set(session.id, session);

    broadcastToUser(userId, {
      type: "session_status",
      payload: { sessionId: session.id, status: "cancelled" },
    });

    res.json(session);
  },
);

// FIX CRÍTICO: authMiddleware adicionado nesta rota
app.delete(
  "/api/sessions/:id",
  authMiddleware,
  async (req: Request, res: Response) => {
    const userId = (req as any).user.userId;
    const session = sessionStore.get(req.params.id);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    if (session.userId !== userId) {
      return res.status(403).json({ error: "Forbidden" });
    }

    if (session.status === "running") {
      return res.status(400).json({ error: "Cannot delete running session" });
    }

    sessionStore.delete(req.params.id);
    res.json({ success: true });
  },
);

// Execute session
async function executeSession(sessionId: string) {
  const session = sessionStore.get(sessionId);
  if (!session || session.status !== "running") return;

  try {
    const { spawn } = await import("child_process");

    const child = spawn(session.command, session.args, {
      cwd: session.workingDir || process.cwd(),
      env: { ...process.env, ...session.env },
      shell: false,
    });

    let output = "";
    let error = "";
    let killed = false;
    const maxSize = 1024 * 1024; // 1MB

    const timeoutId = setTimeout(() => {
      if (!killed) {
        killed = true;
        child.kill("SIGTERM");
        error = "Command timed out after 30s";
      }
    }, 30000);

    child.stdout?.on("data", (data: Buffer) => {
      const chunk = data.toString();
      if (output.length + chunk.length > maxSize) {
        output += "\n[OUTPUT TRUNCATED]";
        if (!killed) {
          killed = true;
          child.kill("SIGTERM");
        }
      } else {
        output += chunk;
      }

      broadcastToUser(session.userId, {
        type: "session_output",
        payload: { sessionId: session.id, output: chunk, isError: false },
      });
    });

    child.stderr?.on("data", (data: Buffer) => {
      const chunk = data.toString();
      if (error.length + chunk.length > maxSize) {
        error += "\n[ERROR TRUNCATED]";
      } else {
        error += chunk;
      }

      broadcastToUser(session.userId, {
        type: "session_output",
        payload: { sessionId: session.id, output: chunk, isError: true },
      });
    });

    child.on("error", (err: Error) => {
      const s = sessionStore.get(sessionId);
      if (s) {
        s.status = "failed";
        s.error = `${error}\n${err.message}`;
        s.completedAt = new Date().toISOString();
        s.updatedAt = new Date().toISOString();
        sessionStore.set(sessionId, s);

        broadcastToUser(s.userId, {
          type: "session_status",
          payload: { sessionId, status: "failed", error: err.message },
        });
      }
    });

    child.on("exit", (code: number | null) => {
      clearTimeout(timeoutId);
      const s = sessionStore.get(sessionId);
      if (s) {
        s.output = output;
        s.error = error || undefined;
        s.exitCode = code || undefined;
        s.status = code === 0 ? "completed" : "failed";
        s.completedAt = new Date().toISOString();
        s.updatedAt = new Date().toISOString();
        sessionStore.set(sessionId, s);

        broadcastToUser(s.userId, {
          type: "session_status",
          payload: { sessionId, status: s.status, exitCode: code },
        });
      }
    });
  } catch (error) {
    const s = sessionStore.get(sessionId);
    if (s) {
      s.status = "failed";
      s.error = (error as Error).message;
      s.completedAt = new Date().toISOString();
      s.updatedAt = new Date().toISOString();
      sessionStore.set(sessionId, s);

      broadcastToUser(s.userId, {
        type: "session_status",
        payload: {
          sessionId,
          status: "failed",
          error: (error as Error).message,
        },
      });
    }
  }
}

// WebSocket Server Setup
const httpServer = createHttpServer(app);
const wss = new WebSocketServer({ server: httpServer });

wss.on("connection", (ws: WebSocket) => {
  let userId: string | null = null;

  ws.on("message", async (data: Buffer | ArrayBuffer | Buffer[]) => {
    try {
      const message = JSON.parse(data.toString()) as any;

      switch (message.type) {
        case "auth": {
          const token = message.token;
          const decoded = verifyToken(token);
          if (decoded) {
            userId = decoded.userId;
            wsClients.set(userId, ws);
            ws.send(
              JSON.stringify({ type: "auth_success", payload: { userId } }),
            );
          } else {
            ws.send(
              JSON.stringify({
                type: "auth_error",
                payload: { error: "Invalid token" },
              }),
            );
          }
          break;
        }

        case "ping":
          ws.send(
            JSON.stringify({
              type: "pong",
              timestamp: new Date().toISOString(),
            }),
          );
          break;

        case "session_create": {
          if (!userId) break;
          const session: PCSession = {
            id: `pc_${Date.now()}_${Math.random().toString(36).substring(2, 12)}`,
            userId,
            command: message.payload.command,
            args: message.payload.args || [],
            workingDir: message.payload.workingDir,
            env: message.payload.env,
            deviceId: message.payload.deviceId,
            status: "pending",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          sessionStore.set(session.id, session);
          ws.send(
            JSON.stringify({ type: "session_created", payload: session }),
          );
          break;
        }

        case "session_approve": {
          if (!userId) break;
          const sessionToApprove = sessionStore.get(message.payload.sessionId);
          if (
            sessionToApprove &&
            sessionToApprove.userId === userId &&
            sessionToApprove.status === "pending"
          ) {
            sessionToApprove.approved = message.payload.approved;
            sessionToApprove.approvedBy = userId;
            sessionToApprove.approvedAt = new Date().toISOString();
            sessionToApprove.status = message.payload.approved
              ? "running"
              : "rejected";
            sessionToApprove.updatedAt = new Date().toISOString();
            sessionStore.set(sessionToApprove.id, sessionToApprove);

            ws.send(
              JSON.stringify({
                type: "session_approved",
                payload: sessionToApprove,
              }),
            );

            if (message.payload.approved) {
              executeSession(sessionToApprove.id);
            }
          }
          break;
        }

        case "session_cancel": {
          if (!userId) break;
          const sessionToCancel = sessionStore.get(message.payload.sessionId);
          if (
            sessionToCancel &&
            sessionToCancel.userId === userId &&
            (sessionToCancel.status === "running" ||
              sessionToCancel.status === "pending")
          ) {
            sessionToCancel.status = "cancelled";
            sessionToCancel.completedAt = new Date().toISOString();
            sessionToCancel.updatedAt = new Date().toISOString();
            sessionStore.set(sessionToCancel.id, sessionToCancel);

            ws.send(
              JSON.stringify({
                type: "session_cancelled",
                payload: sessionToCancel,
              }),
            );
          }
          break;
        }
      }
    } catch (error) {
      ws.send(
        JSON.stringify({
          type: "error",
          payload: { error: (error as Error).message },
        }),
      );
    }
  });

  ws.on("close", () => {
    if (userId) {
      wsClients.delete(userId);
    }
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

// O listen é feito pelo server.ts (entry point) — aqui apenas estrutura o
// httpServer com o WebSocketServer associado. Evita ERR_SERVER_ALREADY_LISTEN.

// Export for testing
export { app, httpServer, wss, sessionStore, wsClients, PORT };
