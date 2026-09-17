"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCode = generateCode;
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const js_yaml_1 = __importDefault(require("js-yaml"));
async function generateCode(type, specPath) {
    const raw = fs_1.default.readFileSync(specPath, "utf8");
    const spec = js_yaml_1.default.load(raw);
    const tmplDir = path_1.default.resolve(__dirname, "../../templates", type);
    const files = fs_1.default.readdirSync(tmplDir);
    for (const file of files) {
        const tpl = fs_1.default.readFileSync(path_1.default.join(tmplDir, file), "utf8");
        const compiled = handlebars_1.default.compile(tpl);
        const output = compiled({ spec });
        const outPath = path_1.default.resolve(process.cwd(), "apps", type, "generated", file.replace(".hbs", ""));
        fs_1.default.mkdirSync(path_1.default.dirname(outPath), { recursive: true });
        fs_1.default.writeFileSync(outPath, output);
        console.log(`Gerado: ${outPath}`);
    }
}
