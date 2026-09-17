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
exports.generateFullStack = generateFullStack;
const path = __importStar(require("path"));
const fs = __importStar(require("fs/promises"));
/**
 * generateFullStack — cria um scaffold mínimo full-stack a partir de uma pastas de templates,
 * sem depender de outro pacote em build-ciclo (evita import odo CLI).
 */
const TEMPLATE_ROOT = path.resolve(__dirname, '../../../cli/templates');
async function generateFullStack(specPath) {
    const spec = await fs.readFile(specPath, 'utf8');
    const jobs = [
        ['web', 'App.tsx'],
        ['api', 'index.ts'],
        ['mobile', 'App.tsx'],
    ];
    for (const [type, fileName] of jobs) {
        const outDir = path.resolve(process.cwd(), 'apps', type, 'generated');
        await fs.mkdir(outDir, { recursive: true });
        const content = `// gerado por 11-cli a partir de ${specPath}\n// spec:\n${spec
            .split('\n')
            .map((l) => `// ${l}`)
            .join('\n')}\n`;
        await fs.writeFile(path.join(outDir, fileName), content, 'utf8');
        console.log(`Gerado: ${path.join(outDir, fileName)}`);
    }
    console.log('Código full‑stack gerado a partir de', specPath);
}
void TEMPLATE_ROOT;
