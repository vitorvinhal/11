import 'reflect-metadata';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

// Carrega o .env da raiz do monorepo (e .env local do package) sem dotenv.
function loadEnv(): void {
  const candidates = [
    resolve(__dirname, '../../../.env'),
    resolve(__dirname, '../../../.env.local'),
    resolve(process.cwd(), '.env'),
    resolve(process.cwd(), '.env.local'),
  ];
  for (const file of candidates) {
    if (!existsSync(file)) continue;
    for (const raw of readFileSync(file, 'utf8').split(/\r?\n/)) {
      const line = raw.trim();
      if (!line || line.startsWith('#')) continue;
      const eq = line.indexOf('=');
      if (eq <= 0) continue;
      const key = line.slice(0, eq).trim();
      let value = line.slice(eq + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = value;
    }
  }
}

loadEnv();

async function bootstrap() {
  // Imports dinâmicos: módulos da app criam clientes Supabase no escopo de import,
  // por isso as envs precisam estar carregadas antes de qualquer require.
  try {
    const { NestFactory } = await import('@nestjs/core');
    const { ValidationPipe } = await import('@nestjs/common');
    const { AppModule } = await import('./modules/app.module');

    const app = await NestFactory.create(AppModule);
    app.enableCors({ origin: true });
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    const port = Number(process.env.PC_AGENT_PORT ?? 4000);
    await app.listen(port, '0.0.0.0');
    console.log(`API listening on http://localhost:${port}`);
  } catch (err) {
    console.error('[bootstrap] falha:', err);
    process.exit(1);
  }
}
bootstrap();
