#!/usr/bin/env node
/**
 * generate-icons.mjs — gera todos os ícones (web, desktop/Tauri, Android)
 * a partir de apps/web/public/icon.svg. Uso: node scripts/generate-icons.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = join(root, "apps/web/public/icon.svg");
const svg = readFileSync(svgPath);

async function png(size, out) {
  const buf = await sharp(svg, { density: 384 })
    .resize(size, size)
    .png()
    .toBuffer();
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, buf);
  console.log("ok", size, out.replace(root, "."));
  return buf;
}

async function main() {
  const web = join(root, "apps/web/public");
  await png(16, join(web, "favicon-16x16.png"));
  await png(32, join(web, "favicon-32x32.png"));
  await png(48, join(web, "favicon-48x48.png"));
  await png(180, join(web, "apple-touch-icon.png"));
  await png(192, join(web, "icon-192.png"));
  await png(512, join(web, "icon-512.png"));
  await png(1024, join(web, "icon-1024.png"));

  const sizes16 = [16, 32, 48, 64, 128];
  const icoBuffers = [];
  for (const s of sizes16) {
    icoBuffers.push(await png(s, join(web, `.tmp-ico-${s}.png`)));
  }
  writeFileSync(join(web, "favicon.ico"), await pngToIco(icoBuffers));
  for (const s of sizes16) {
    try { await import("node:fs").then((f) => f.unlinkSync(join(web, `.tmp-ico-${s}.png`))); } catch {}
  }
  console.log("ok favicon.ico");

  const tauri = join(root, "apps/desktop/src-tauri/icons");
  await png(32, join(tauri, "32x32.png"));
  await png(64, join(tauri, "64x64.png"));
  await png(128, join(tauri, "128x128.png"));
  await png(256, join(tauri, "128x128@2x.png"));
  await png(512, join(tauri, "icon.png"));
  for (const s of [30, 44, 71, 89, 107, 142, 150, 284, 310]) {
    await png(s, join(tauri, `Square${s}x${s}Logo.png`));
  }
  await png(300, join(tauri, "StoreLogo.png"));

  const icoTauriBuffers = [];
  for (const s of [16, 32, 48, 64, 128, 256]) {
    icoTauriBuffers.push(await png(s, join(tauri, `.tmp-ico-${s}.png`)));
  }
  writeFileSync(join(tauri, "icon.ico"), await pngToIco(icoTauriBuffers));
  for (const s of [16, 32, 48, 64, 128, 256]) {
    try {
      const { unlinkSync } = await import("node:fs");
      unlinkSync(join(tauri, `.tmp-ico-${s}.png`));
    } catch {}
  }
  console.log("ok tauri icon.ico");

  const androidSizes = { mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 };
  for (const [dpi, size] of Object.entries(androidSizes)) {
    const dir = join(root, `apps/mobile/android/app/src/main/res/mipmap-${dpi}`);
    await png(size, join(dir, "ic_launcher.png"));
    await png(size, join(dir, "ic_launcher_round.png"));
    await png(size, join(dir, "ic_launcher_foreground.png"));
  }

  console.log("Ícones gerados com sucesso.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});