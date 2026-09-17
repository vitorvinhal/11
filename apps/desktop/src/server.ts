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

import express from 'express';
import routerHandler from './router9/index';

const app = express();
app.use(express.json());
app.post('/router9', routerHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`router9 listening on ${PORT}`));