import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT_DOTENV = join(process.cwd(), '../../.env');
const LOCAL_DOTENV = join(process.cwd(), '.env');

function loadEnvFile(file: string): void {
  if (!existsSync(file)) return;
  for (const raw of readFileSync(file, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq <= 0) continue;
    const key = line.slice(0, eq).trim();
    const value = line.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(LOCAL_DOTENV);
loadEnvFile(ROOT_DOTENV);

// FAIL FAST: JWT_SECRET obrigatório em produção
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error('[FATAL] JWT_SECRET não definido. Router9 não pode iniciar.');
  process.exit(1);
}

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import routerHandler, { authMiddleware } from './router9/index';

const app = express();

// Segurança HTTP
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') ?? 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ limit: '1mb' }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));

// Rota /router9 PROTEGIDA com JWT auth
app.post('/router9', authMiddleware, routerHandler);

// Health check (sem auth)
app.get('/health', (_, res) => res.json({ ok: true, timestamp: new Date().toISOString() }));

const PORT = process.env.ROUTER9_PORT || process.env.PORT || 3002;
app.listen(PORT, () => console.log(`router9 listening on ${PORT}`));
