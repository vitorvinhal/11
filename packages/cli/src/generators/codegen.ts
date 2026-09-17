import Handlebars from "handlebars";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export async function generateCode(type: string, specPath: string) {
  const raw = fs.readFileSync(specPath, "utf8");
  const spec = yaml.load(raw) as any;

  const tmplDir = path.resolve(__dirname, "../../templates", type);
  const files = fs.readdirSync(tmplDir);

  for (const file of files) {
    const tpl = fs.readFileSync(path.join(tmplDir, file), "utf8");
    const compiled = Handlebars.compile(tpl);
    const output = compiled({ spec });
    const outPath = path.resolve(process.cwd(), "apps", type, "generated", file.replace(".hbs", ""));
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, output);
    console.log(`Gerado: ${outPath}`);
  }
}
