import { readFileSync } from 'fs';
import { resolve } from 'path';

export const PERSONAS_SEED = JSON.parse(readFileSync(resolve(__dirname, 'seed.json'), 'utf8'));
