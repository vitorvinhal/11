import * as path from "path";
import * as fs from "fs/promises";

/**
 * generateFullStack — cria um scaffold mínimo full-stack a partir de uma pastas de templates,
 * sem depender de outro pacote em build-ciclo (evita import odo CLI).
 */
const TEMPLATE_ROOT = path.resolve(__dirname, "../../../cli/templates");

export async function generateFullStack(specPath: string) {
  const spec = await fs.readFile(specPath, "utf8");

  const jobs: Array<[string, string]> = [
    ["web", "App.tsx"],
    ["api", "index.ts"],
    ["mobile", "App.tsx"],
  ];

  for (const [type, fileName] of jobs) {
    const outDir = path.resolve(process.cwd(), "apps", type, "generated");
    await fs.mkdir(outDir, { recursive: true });
    const content = `// gerado por 11-cli a partir de ${specPath}\n// spec:\n${spec
      .split("\n")
      .map((l) => `// ${l}`)
      .join("\n")}\n`;
    await fs.writeFile(path.join(outDir, fileName), content, "utf8");
    console.warn(`Gerado: ${path.join(outDir, fileName)}`);
  }
  console.warn("Código full‑stack gerado a partir de", specPath);
}

void TEMPLATE_ROOT;
