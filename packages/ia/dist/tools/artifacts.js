"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artifactsTool = void 0;
exports.generateMarkdown = generateMarkdown;
exports.generateCSV = generateCSV;
exports.generateXLSX = generateXLSX;
exports.generatePPTXAdvanced = generatePPTXAdvanced;
exports.generateJSON = generateJSON;
const file_1 = require("./file");
async function generateMarkdown(p, title, sections) {
    let md = `# ${title}\n\n`;
    for (const s of sections) {
        md += `${'#'.repeat(Math.min(Math.max(s.h, 1), 6))} ${s.title}\n\n${s.body}\n\n`;
    }
    await (0, file_1.writeFileText)(p, md);
    return { ok: true, path: p };
}
async function generateCSV(p, rows) {
    if (!rows.length)
        throw new Error('CSV sem linhas');
    const esc = (v) => {
        const s = String(v);
        return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const csv = rows.map((r) => r.map(esc).join(',')).join('\n');
    await (0, file_1.writeFileText)(p, `\uFEFF${csv}`);
    return { ok: true, path: p };
}
/**
 * Planilha simples em XLSX (SpreadsheetML) sem dependência pesada.
 * Suficiente para importar em Excel/Sheets.
 */
async function generateXLSX(p, sheetName, rows) {
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
    await (0, file_1.writeFileText)(p, xmlDoc);
    return { ok: true, path: p };
}
async function generatePPTXAdvanced(title, slides) {
    const officegen = require('officegen');
    const pptx = officegen('pptx');
    pptx.setDocTitle(title);
    for (const s of slides) {
        const slide = pptx.makeNewSlide();
        slide.addTitle(s.heading);
        slide.addText(s.content, { y: '50%', font_size: 18 });
    }
    const chunks = [];
    const buf = await new Promise((resolve, reject) => {
        pptx.generate((chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)), (err) => (err ? reject(err) : resolve(Buffer.concat(chunks))));
    });
    const out = `${process.env.TOOL_OUTPUT_DIR ?? process.cwd()}/${title.replace(/[^\w\d-]+/g, '_')}.pptx`;
    await (0, file_1.writeFileBuffer)(out, buf);
    return { message: 'PPTX gerado', path: out };
}
async function generateJSON(p, data) {
    await (0, file_1.writeFileText)(p, JSON.stringify(data, null, 2));
    return { ok: true, path: p };
}
function xml(v) {
    return String(v)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
exports.artifactsTool = { generateMarkdown, generateCSV, generateXLSX, generatePPTXAdvanced, generateJSON, fileTool: file_1.fileTool };
