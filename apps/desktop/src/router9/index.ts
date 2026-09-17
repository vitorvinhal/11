import axios from 'axios';
import { promises as fs } from 'fs';
import path from 'path';
import sqlite3 from 'sqlite3';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - node-wol não tem tipos próprios
import wol from 'node-wol';
import type { Request, Response, NextFunction } from 'express';

// SQLite log store
const db = new sqlite3.Database(path.join(__dirname, 'router9.db'));
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
    JSON.stringify(result ?? {})
  );
}

// STT via ElevenLabs Scribe
async function stt(payload: any) {
  const { audioUrl } = payload ?? {};
  const res = await axios.post(
    'https://api.elevenlabs.io/v1/scribe',
    { audioUrl },
    { headers: { 'xi-api-key': process.env.ELEVENLABS_KEY ?? '' } }
  );
  const result = { text: res.data.text ?? '' };
  logAction('stt', payload, result);
  return result;
}

// File system operations
async function fileOp(payload: any) {
  const { action, targetPath, content } = payload ?? {};
  const absPath = path.resolve(targetPath ?? '.');
  let result: any = {};
  try {
    if (action === 'list') {
      const entries = await fs.readdir(absPath, { withFileTypes: true });
      result = entries.map((e) => ({ name: e.name, isFile: e.isFile(), isDirectory: e.isDirectory() }));
    } else if (action === 'read') {
      const data = await fs.readFile(absPath, 'utf8');
      result = { content: data };
    } else if (action === 'write') {
      await fs.writeFile(absPath, content ?? '', 'utf8');
      result = { status: 'written' };
    } else {
      result = { error: 'unknown action' };
    }
  } catch (e: any) {
    result = { error: e?.message ?? String(e) };
  }
  logAction('file', payload, result);
  return result;
}

// Wake-on-LAN (power on remote machine)
async function remoteOp(payload: any) {
  const { action, mac } = payload ?? {};
  let result: any = {};
  if (action === 'wake') {
    try {
      await new Promise<void>((resolve, reject) => {
        wol.wake(mac, {}, (err: any) => (err ? reject(err) : resolve()));
      });
      result = { status: 'magic packet sent' };
    } catch (e: any) {
      result = { error: e?.message ?? String(e) };
    }
  } else {
    result = { error: 'unsupported remote action' };
  }
  logAction('remote', payload, result);
  return result;
}

// Media analysis (image/video) via 9Router LLM gateway
async function mediaOp(payload: any) {
  const { prompt, imageUrl } = payload ?? {};
  let result: any = { received: { prompt, imageUrl } };
  const token = process.env['9ROUTER_TOKEN'] ?? '';
  const candidates = [
    (process.env['9ROUTER_ENDPOINT'] ?? '').trim(),
    (process.env['9ROUTER_TUNNEL'] ?? '').trim(),
  ].filter((ep) => ep.startsWith('http'));
  try {
    if (!candidates.length || !token) {
      result = { analysis: '9ROUTER não configurado — habilite no ambiente.' };
    } else {
      let analysis: string | null = null;
      for (const endpoint of candidates) {
        try {
          const res = await axios.post(
            `${endpoint}/v1/chat/completions`,
            {
              model: process.env['9ROUTER_MODEL'] ?? 'gemini/gemini-3.8-flash',
              messages: [
                { role: 'system', content: 'Você analisa imagens e vídeos e descreve o conteúdo em detalhes.' },
                { role: 'user', content: imageUrl ? `[imagem] ${imageUrl}\n${prompt ?? 'Descreva esta mídia.'}` : (prompt ?? 'Descreva esta mídia.') },
              ],
            },
            { headers: { authorization: `Bearer ${token}` }, timeout: 60000 }
          );
          analysis = res.data?.choices?.[0]?.message?.content ?? 'sem resposta';
          if (analysis) break;
        } catch {
          // tenta próximo endpoint
        }
      }
      result = { analysis: analysis ?? 'sem resposta' };
    }
  } catch (e: any) {
    result = { error: e?.message ?? String(e) };
  }
  logAction('media', payload, result);
  return result;
}

// Main dispatch: maps { action } to handler
export async function routerHandler(req: Request, res: Response) {
  try {
    const body = req.body ?? {};
    const { action, data = {} } = body;

    let result: any;
    switch (action) {
      case 'stt': result = await stt(data); break;
      case 'file': result = await fileOp(data); break;
      case 'remote': result = await remoteOp(data); break;
      case 'media': result = await mediaOp(data); break;
      case 'health':
        result = { ok: true, timestamp: new Date().toISOString() };
        break;
      default:
        return res.status(400).json({ error: `Unknown action: ${action}` });
    }
    return res.status(200).json(result);
  } catch (err: any) {
    return res.status(500).json({ error: err?.message ?? String(err) });
  }
}

export async function handler(req: Request, res: Response, next: NextFunction) {
  await routerHandler(req, res);
  next?.();
}

export default handler;

// Re-export para uso programático
export { db };