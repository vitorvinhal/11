import { createClient } from '@supabase/supabase-js';

let _supa: ReturnType<typeof createClient> | null = null;
function supa() {
  if (!_supa) {
    _supa = createClient(
      process.env['SUPABASE_URL'] ?? '',
      process.env['SUPABASE_ANON_KEY'] ?? ''
    );
  }
  return _supa;
}

interface SlideInput {
  heading: string;
  content: string;
}

export async function generatePPTX(title: string, slides: SlideInput[]) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const officegen = require('officegen');
  const pptx = officegen('pptx');
  pptx.setDocTitle(title);
  slides.forEach((s) => {
    const slide = pptx.makeNewSlide();
    slide.addTitle(s.heading);
    slide.addText(s.content, { y: '50%', font_size: 18 });
  });

  const chunks: Buffer[] = [];
  const buf = await new Promise<Buffer>((resolve, reject) => {
    pptx.generate(
      (chunk: string | Buffer) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)),
      (err: Error | null) => (err ? reject(err) : resolve(Buffer.concat(chunks)))
    );
  });

const { error } = await supa().storage.from('pptx').upload(`${title}.pptx`, buf);
  if (error) throw error;
  return { message: 'PPTX gerado e salvo' };
}