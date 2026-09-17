"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const fs_1 = require("fs");
const path_1 = require("path");
// Carrega o .env da raiz do monorepo (e .env local do package) sem dotenv.
function loadEnv() {
    const candidates = [
        (0, path_1.resolve)(__dirname, '../../../.env'),
        (0, path_1.resolve)(__dirname, '../../../.env.local'),
        (0, path_1.resolve)(process.cwd(), '.env'),
        (0, path_1.resolve)(process.cwd(), '.env.local'),
    ];
    for (const file of candidates) {
        if (!(0, fs_1.existsSync)(file))
            continue;
        for (const raw of (0, fs_1.readFileSync)(file, 'utf8').split(/\r?\n/)) {
            const line = raw.trim();
            if (!line || line.startsWith('#'))
                continue;
            const eq = line.indexOf('=');
            if (eq <= 0)
                continue;
            const key = line.slice(0, eq).trim();
            let value = line.slice(eq + 1).trim();
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            if (!process.env[key])
                process.env[key] = value;
        }
    }
}
loadEnv();
async function bootstrap() {
    // Imports dinâmicos: módulos da app criam clientes Supabase no escopo de import,
    // por isso as envs precisam estar carregadas antes de qualquer require.
    try {
        const { NestFactory } = await Promise.resolve().then(() => __importStar(require('@nestjs/core')));
        const { ValidationPipe } = await Promise.resolve().then(() => __importStar(require('@nestjs/common')));
        const { AppModule } = await Promise.resolve().then(() => __importStar(require('./modules/app.module')));
        const app = await NestFactory.create(AppModule);
        app.enableCors({ origin: true });
        app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
        const port = Number(process.env.PC_AGENT_PORT ?? 4000);
        await app.listen(port, '0.0.0.0');
        console.log(`API listening on http://localhost:${port}`);
    }
    catch (err) {
        console.error('[bootstrap] falha:', err);
        process.exit(1);
    }
}
bootstrap();
