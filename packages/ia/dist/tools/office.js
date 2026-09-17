"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePPTX = generatePPTX;
const supabase_js_1 = require("@supabase/supabase-js");
let _supa = null;
function supa() {
    if (!_supa) {
        _supa = (0, supabase_js_1.createClient)(process.env['SUPABASE_URL'] ?? '', process.env['SUPABASE_ANON_KEY'] ?? '');
    }
    return _supa;
}
async function generatePPTX(title, slides) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const officegen = require('officegen');
    const pptx = officegen('pptx');
    pptx.setDocTitle(title);
    slides.forEach((s) => {
        const slide = pptx.makeNewSlide();
        slide.addTitle(s.heading);
        slide.addText(s.content, { y: '50%', font_size: 18 });
    });
    const chunks = [];
    const buf = await new Promise((resolve, reject) => {
        pptx.generate((chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)), (err) => (err ? reject(err) : resolve(Buffer.concat(chunks))));
    });
    const { error } = await supa().storage.from('pptx').upload(`${title}.pptx`, buf);
    if (error)
        throw error;
    return { message: 'PPTX gerado e salvo' };
}
