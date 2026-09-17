import { writeFileText, writeFileBuffer, fileTool } from './file';

/**
 * ArtifactsTool — geração de artefatos estruturados:
 *  - Markdown/documentos (.md)
 *  - Planilhas CSV (.csv) com delimitador e BOM
 *  - Apresentações PPTX via officegen
 *  - JSON estruturado (schema) para consumo de pipelines
 */

export interface SlideInput { heading: string; content: string }

export async function generateMarkdown(p: string, title: string, sections: Array<{ h: number; title: string; body: string }>): Promise<{ ok: boolean; path: string }> {
  let md = `# ${title}\n\n`;
  for (const s of sections) {
    md += `${'#'.repeat(Math.min(Math.max(s.h, 1), 6))} ${s.title}\n\n${s.body}\n\n`;
  }
  await writeFileText(p, md);
  return { ok: true, path: p };
}

export async function generateCSV(p: string, rows: Array<Array<string | number>>): Promise<{ ok: boolean; path: string }> {
  if (!rows.length) throw new Error('CSV sem linhas');
  const esc = (v: string | number) => {
    const s = String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const csv = rows.map((r) => r.map(esc).join(',')).join('\n');
  await writeFileText(p, `\uFEFF${csv}`);
  return { ok: true, path: p };
}

/**
 * Planilha simples em XLSX (SpreadsheetML) sem dependência pesada.
 * Suficiente para importar em Excel/Sheets.
 */
export async function generateXLSX(p: string, sheetName: string, rows: Array<Array<string | number>>): Promise<{ ok: boolean; path: string }> {
  const cells = rows
    .map((row, ri) => {
      const refs = row
        .map((v, ci) => `<Cell r="${String.fromCharCode(65 + ci)}${ri + 1}"><Data t="InlineStr"><Text xmlns="http://www.w3.org/TR/REC-html40">${xml(v)}</Text></Data></Cell>`)
        .join('');
      return `<Row>${refs}</Row>`;
    })
    .join('');
  const xmlDoc = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
  <Worksheet ss:Name="${xml(sheetName)}"><Table>${cells}</Table></Worksheet>
</Workbook>`;
  await writeFileText(p, xmlDoc);
  return { ok: true, path: p };
}

export async function generatePPTXAdvanced(
  title: string,
  slides: SlideInput[]
): Promise<{ message: string; path?: string }> {
  const officegen = require('officegen');
  const pptx = officegen('pptx');
  pptx.setDocTitle(title);
  for (const s of slides) {
    const slide = pptx.makeNewSlide();
    slide.addTitle(s.heading);
    slide.addText(s.content, { y: '50%', font_size: 18 });
  }
  const chunks: Buffer[] = [];
  const buf = await new Promise<Buffer>((resolve, reject) => {
    pptx.generate(
      (chunk: string | Buffer) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)),
      (err: Error | null) => (err ? reject(err) : resolve(Buffer.concat(chunks)))
    );
  });
  const out = `${process.env.TOOL_OUTPUT_DIR ?? process.cwd()}/${title.replace(/[^\w\d-]+/g, '_')}.pptx`;
  await writeFileBuffer(out, buf);
  return { message: 'PPTX gerado', path: out };
}

export async function generateJSON(p: string, data: unknown): Promise<{ ok: boolean; path: string }> {
  await writeFileText(p, JSON.stringify(data, null, 2));
  return { ok: true, path: p };
}

function xml(v: string | number): string {
  return String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export const artifactsTool = { generateMarkdown, generateCSV, generateXLSX, generatePPTXAdvanced, generateJSON, fileTool };