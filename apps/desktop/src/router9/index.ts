import axios from "axios";
import express, { Express, Request, Response, NextFunction } from "express";
import { promises as fs } from "fs";
import path from "path";
import { existsSync, realpathSync } from "fs";
import sqlite3 from "sqlite3";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - node-wol não tem tipos próprios
import wol from "node-wol";
import jwt from "jsonwebtoken";

// ─── Configuração de Segurança ───────────────────────────────────────────────

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error("[FATAL] JWT_SECRET não definido. Router9 não pode iniciar.");
  process.exit(1);
}

/**
 * ROOT_DIR — diretório raiz para operações de arquivo.
 * Todas as operações fileOp são restritas a este diretório e seus filhos.
 */
const ROOT_DIR = path.resolve(
  process.env.BRIDGE_ALLOWED_DIRS?.split(";")[0] ?? process.cwd(),
);

// ─── Auth Middleware ─────────────────────────────────────────────────────────

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: token ausente" });
  }

  const token = authHeader.substring(7);
  try {
    const decoded = jwt.verify(token, JWT_SECRET!) as {
      userId: string;
      email: string;
    };
    (req as any).user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: "Unauthorized: token inválido" });
  }
}

// ─── Path Sandbox ────────────────────────────────────────────────────────────

/**
 * Verifica se `target` é um subdiretório real de `root` (ou o próprio root).
 * Evita bypass via prefixo de string — ex: /tmp/test-root-evil passaria em
 * startsWith('/tmp/test-root') mas NÃO passa aqui porque falta o separador.
 */
function isInsideRoot(target: string, root: string): boolean {
  return target === root || target.startsWith(root + path.sep);
}

/**
 * Resolve um caminho de forma segura, verificando que está dentro de ROOT_DIR.
 * Usa fs.realpath para resolver symlinks reais e impedir escape.
 */
function safePath(targetPath: string): string | null {
  const absPath = path.resolve(ROOT_DIR, targetPath ?? ".");
  try {
    // Se o path existe, resolve o symlink real
    if (existsSync(absPath)) {
      const real = realpathSync(absPath);
      const realRoot = realpathSync(ROOT_DIR);
      if (!isInsideRoot(real, realRoot)) return null;
      return real;
    }
    // Se não existe, verifica que o path pai está dentro do root
    const parentDir = path.dirname(absPath);
    if (existsSync(parentDir)) {
      const realParent = realpathSync(parentDir);
      const realRoot = realpathSync(ROOT_DIR);
      if (!isInsideRoot(realParent, realRoot)) return null;
    } else {
      // Nem path nem pai existem — sobe até achar um existente e valida
      let dir = parentDir;
      while (dir && !existsSync(dir) && dir !== path.dirname(dir)) {
        dir = path.dirname(dir);
      }
      if (dir && existsSync(dir)) {
        const realDir = realpathSync(dir);
        const realRoot = realpathSync(ROOT_DIR);
        if (!isInsideRoot(realDir, realRoot)) return null;
      }
    }
    return absPath;
  } catch {
    return null;
  }
}

// ─── SQLite log store ────────────────────────────────────────────────────────

const db = new sqlite3.Database(path.join(__dirname, "router9.db"));
db.run(`CREATE TABLE IF NOT EXISTS logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT NOT NULL,
  type TEXT NOT NULL,
  payload TEXT NOT NULL,
  result TEXT
)`);

function logAction(type: string, payload: any, result: any) {
  db.run(
    'INSERT INTO logs (timestamp, type, payload, result) VALUES (datetime("now"), ?, ?, ?)',
    type,
    JSON.stringify(payload ?? {}),
    JSON.stringify(result ?? {}),
  );
}

// ─── STT via ElevenLabs Scribe ──────────────────────────────────────────────

async function stt(payload: any) {
  const { audioUrl } = payload ?? {};
  const res = await axios.post(
    "https://api.elevenlabs.io/v1/scribe",
    { audioUrl },
    { headers: { "xi-api-key": process.env.ELEVENLABS_KEY ?? "" } },
  );
  const result = { text: res.data.text ?? "" };
  logAction("stt", payload, result);
  return result;
}

// ─── File system operations (SANDBOXED) ──────────────────────────────────────

async function fileOp(payload: any) {
  const { action, targetPath, content } = payload ?? {};

  // Validação de caminho — CRÍTICO
  const safe = safePath(targetPath);
  if (!safe) {
    const result = {
      error: "Acesso negado: caminho fora do diretório permitido",
    };
    logAction("file", { ...payload, targetPath: "[BLOCKED]" }, result);
    return result;
  }

  let result: any = {};
  try {
    if (action === "list") {
      const entries = await fs.readdir(safe, { withFileTypes: true });
      result = entries.map((e) => ({
        name: e.name,
        isFile: e.isFile(),
        isDirectory: e.isDirectory(),
      }));
    } else if (action === "read") {
      const data = await fs.readFile(safe, "utf8");
      result = { content: data };
    } else if (action === "write") {
      await fs.writeFile(safe, content ?? "", "utf8");
      result = { status: "written" };
    } else {
      result = { error: "unknown action" };
    }
  } catch {
    result = { error: "operacao falhou" }; // Não expor path interno
  }
  logAction("file", payload, result);
  return result;
}

// ─── Wake-on-LAN ─────────────────────────────────────────────────────────────

async function remoteOp(payload: any) {
  const { action, mac } = payload ?? {};
  let result: any = {};
  if (action === "wake") {
    // Validação básica de MAC address
    if (!/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(mac)) {
      result = { error: "MAC address inválido" };
    } else {
      try {
        await new Promise<void>((resolve, reject) => {
          wol.wake(mac, {}, (err: any) => (err ? reject(err) : resolve()));
        });
        result = { status: "magic packet sent" };
      } catch {
        result = { error: "falha ao enviar magic packet" };
      }
    }
  } else {
    result = { error: "unsupported remote action" };
  }
  logAction("remote", payload, result);
  return result;
}

// ─── Media analysis via 9Router ──────────────────────────────────────────────

async function mediaOp(payload: any) {
  const { prompt, imageUrl } = payload ?? {};
  let result: any = { received: { prompt, imageUrl } };
  const token = process.env["ROUTER9_TOKEN"] ?? "";
  const candidates = [
    (process.env["ROUTER9_ENDPOINT"] ?? "").trim(),
    (process.env["ROUTER9_TUNNEL"] ?? "").trim(),
  ].filter((ep) => ep.startsWith("http"));
  try {
    if (!candidates.length || !token) {
      result = { analysis: "9ROUTER não configurado — habilite no ambiente." };
    } else {
      let analysis: string | null = null;
      for (const endpoint of candidates) {
        try {
          const res = await axios.post(
            `${endpoint}/v1/chat/completions`,
            {
              model: process.env["ROUTER9_MODEL"] ?? "gemini/gemini-3.8-flash",
              messages: [
                {
                  role: "system",
                  content:
                    "Você analisa imagens e vídeos e descreve o conteúdo em detalhes.",
                },
                {
                  role: "user",
                  content: imageUrl
                    ? `[imagem] ${imageUrl}\n${prompt ?? "Descreva esta mídia."}`
                    : (prompt ?? "Descreva esta mídia."),
                },
              ],
            },
            { headers: { authorization: `Bearer ${token}` }, timeout: 60000 },
          );
          analysis = res.data?.choices?.[0]?.message?.content ?? "sem resposta";
          if (analysis) break;
        } catch {
          // tenta próximo endpoint
        }
      }
      result = { analysis: analysis ?? "sem resposta" };
    }
  } catch {
    result = { error: "media analysis falhou" };
  }
  logAction("media", payload, result);
  return result;
}

// ─── Main dispatch ───────────────────────────────────────────────────────────

export async function routerHandler(req: Request, res: Response) {
  try {
    const body = req.body ?? {};
    const { action, data = {} } = body;

    let result: any;
    switch (action) {
      case "stt":
        result = await stt(data);
        break;
      case "file":
        result = await fileOp(data);
        break;
      case "remote":
        result = await remoteOp(data);
        break;
      case "media":
        result = await mediaOp(data);
        break;
      case "health":
        result = { ok: true, timestamp: new Date().toISOString() };
        break;
      default:
        return res.status(400).json({ error: `Unknown action: ${action}` });
    }
    return res.status(200).json(result);
  } catch {
    return res.status(500).json({ error: "Erro interno" }); // Não expor stack trace
  }
}

export async function handler(req: Request, res: Response, next: NextFunction) {
  await routerHandler(req, res);
  next?.();
}

export default handler;

/** Cria servidor HTTP Express para o Router9 */
export function createRouter9Server(): Express {
  const app = express();
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));

  // Health check
  app.get("/health", (_, res) => {
    res.json({
      ok: true,
      service: "router9",
      timestamp: new Date().toISOString(),
    });
  });

  // Main router endpoint
  app.post("/router9", async (req, res) => {
    await routerHandler(req as any, res as any);
  });

  return app;
}

// Re-export para uso programático
export { db, ROOT_DIR, safePath };

export default handler;
