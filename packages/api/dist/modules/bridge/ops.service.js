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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.OpsService = void 0;
const path = __importStar(require("path"));
const fs = __importStar(require("fs/promises"));
const child_process_1 = require("child_process");
const util_1 = require("util");
const common_1 = require("@nestjs/common");
const execFileAsync = (0, util_1.promisify)(child_process_1.execFile);
/** Comandos de terminal permitidos em execução controlada (allowlist rigorosa). */
const ALLOWED_COMMANDS = new Map([
    ['git', true],
    ['ls', true],
    ['cat', true],
    ['echo', true],
    ['pnpm', true],
    ['npm', true],
    ['npx', true],
    ['node', true],
    ['tsc', true],
    ['python', true],
]);
const WHITELIST = (process.env.BRIDGE_ALLOWED_DIRS ?? '')
    .split(';')
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => path.resolve(p));
function inWhitelist(target) {
    const resolved = path.resolve(target);
    return WHITELIST.some((root) => {
        const rel = path.relative(root, resolved);
        return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel));
    });
}
function deny(reason) {
    return new common_1.HttpException(`Acesso negado: fora da whitelist (${reason})`, common_1.HttpStatus.FORBIDDEN);
}
/**
 * OpsService — operações remotas nomeadas, validadas e com execução controlada.
 *  - Nenhum shell arbitrário: execFile/spawn com args em array.
 *  - Whitelist de diretórios (BRIDGE_ALLOWED_DIRS) + allowlist de comandos.
 *  - Suporte a escrita refatorada, geração de artefatos e execução de testes.
 */
let OpsService = class OpsService {
    async listFiles(input) {
        if (!input?.path || !inWhitelist(input.path))
            throw deny('list');
        const entries = await fs.readdir(input.path, { withFileTypes: true });
        return entries.map((e) => ({
            name: e.name,
            isDir: e.isDirectory(),
            path: path.join(input.path, e.name),
        }));
    }
    async readFile(input) {
        if (!input?.path || !inWhitelist(input.path))
            throw deny('read');
        const stat = await fs.stat(input.path);
        const maxBytes = Number(process.env.BRIDGE_MAX_FILE_BYTES ?? 10_485_760); // 10MB
        if (stat.size > maxBytes)
            throw new common_1.HttpException('Arquivo maior que o limite', common_1.HttpStatus.PAYLOAD_TOO_LARGE);
        const content = await fs.readFile(input.path, 'utf8');
        return { content, size: stat.size };
    }
    async writeFile(input) {
        if (!input?.path || !inWhitelist(input.path))
            throw deny('write');
        const dir = path.dirname(input.path);
        await fs.mkdir(dir, { recursive: true });
        const buf = Buffer.from(input.content, 'utf8');
        await fs.writeFile(input.path, buf);
        return { ok: true, path: input.path, bytes: buf.length };
    }
    async runBuild(input) {
        if (!input?.path || !inWhitelist(input.path))
            throw deny('exec');
        const script = input.script ?? 'build';
        const { stdout, stderr } = await execFileAsync(process.env.PNPM_BIN ?? 'pnpm', ['run', script], { cwd: input.path, env: { ...process.env, CI: 'true' }, timeout: 120_000 });
        return { stdout, stderr };
    }
    /** Executa comandos autorizados via execFile (sem shell), com cwd na whitelist. */
    async runCommand(input) {
        if (!input?.command)
            throw new common_1.HttpException('command obrigatório', common_1.HttpStatus.BAD_REQUEST);
        if (!ALLOWED_COMMANDS.has(input.command)) {
            throw new common_1.HttpException(`Comando não autorizado: ${input.command}`, common_1.HttpStatus.FORBIDDEN);
        }
        const cwd = input.cwd ?? process.env.HOME ?? process.cwd();
        if (!inWhitelist(cwd))
            throw deny('cwd');
        const args = input.args ?? [];
        return new Promise((resolve, reject) => {
            const child = (0, child_process_1.spawn)(input.command, args, {
                cwd,
                env: { ...process.env, CI: 'true' },
                shell: false,
                windowsHide: true,
            });
            let stdout = '';
            let stderr = '';
            child.stdout?.on('data', (d) => (stdout += d.toString()));
            child.stderr?.on('data', (d) => (stderr += d.toString()));
            child.on('error', reject);
            child.on('close', (code) => resolve({ stdout, stderr, exitCode: code }));
        });
    }
    async runTests(input) {
        if (!input?.path || !inWhitelist(input.path))
            throw deny('test');
        const command = input.command ?? 'test';
        const { stdout, stderr, exitCode } = await new Promise((resolve, reject) => {
            const child = (0, child_process_1.spawn)(process.env.PNPM_BIN ?? 'pnpm', [command], {
                cwd: input.path,
                env: { ...process.env, CI: 'true' },
                shell: false,
                windowsHide: true,
            });
            let stdout = '';
            let stderr = '';
            child.stdout?.on('data', (d) => (stdout += d.toString()));
            child.stderr?.on('data', (d) => (stderr += d.toString()));
            child.on('error', reject);
            child.on('close', (code) => resolve({ stdout, stderr, exitCode: code }));
        });
        return { stdout, stderr, exitCode };
    }
};
exports.OpsService = OpsService;
exports.OpsService = OpsService = __decorate([
    (0, common_1.Injectable)()
], OpsService);
