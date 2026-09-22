const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const SVG_PATH = path.join(__dirname, '..', 'apps', 'web', 'public', 'icon.svg');
const WEB_PUBLIC = path.join(__dirname, '..', 'apps', 'web', 'public');
const DESKTOP_ICONS = path.join(__dirname, '..', 'apps', 'desktop', 'src-tauri', 'icons');
const DESKTOP_IOS = path.join(DESKTOP_ICONS, 'ios');
const DESKTOP_ANDROID = path.join(DESKTOP_ICONS, 'android');
const MOBILE_ANDROID_BASE = path.join(__dirname, '..', 'apps', 'mobile', 'android', 'app', 'src', 'main', 'res');

const svgContent = fs.readFileSync(SVG_PATH, 'utf8');

const webIcons = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
  { name: 'icon-1024.png', size: 1024 },
  { name: 'apple-touch-icon.png', size: 180 },
];

const desktopIcons = [
  { name: '32x32.png', size: 32 },
  { name: '64x64.png', size: 64 },
  { name: '128x128.png', size: 128 },
  { name: '128x128@2x.png', size: 256 },
  { name: 'icon.png', size: 512 },
  { name: 'Square30x30Logo.png', size: 30 },
  { name: 'Square44x44Logo.png', size: 44 },
  { name: 'Square71x71Logo.png', size: 71 },
  { name: 'Square89x89Logo.png', size: 89 },
  { name: 'Square107x107Logo.png', size: 107 },
  { name: 'Square142x142Logo.png', size: 142 },
  { name: 'Square150x150Logo.png', size: 150 },
  { name: 'Square284x284Logo.png', size: 284 },
  { name: 'Square310x310Logo.png', size: 310 },
  { name: 'StoreLogo.png', size: 50 },
];

const iosIcons = [
  { name: 'AppIcon-20x20@1x.png', size: 20 },
  { name: 'AppIcon-20x20@2x.png', size: 40 },
  { name: 'AppIcon-20x20@2x-1.png', size: 40 },
  { name: 'AppIcon-20x20@3x.png', size: 60 },
  { name: 'AppIcon-29x29@1x.png', size: 29 },
  { name: 'AppIcon-29x29@2x.png', size: 58 },
  { name: 'AppIcon-29x29@2x-1.png', size: 58 },
  { name: 'AppIcon-29x29@3x.png', size: 87 },
  { name: 'AppIcon-40x40@1x.png', size: 40 },
  { name: 'AppIcon-40x40@2x.png', size: 80 },
  { name: 'AppIcon-40x40@2x-1.png', size: 80 },
  { name: 'AppIcon-40x40@3x.png', size: 120 },
  { name: 'AppIcon-512@1x.png', size: 512 },
  { name: 'AppIcon-512@2x.png', size: 1024 },
  { name: 'AppIcon-60x60@2x.png', size: 120 },
  { name: 'AppIcon-60x60@3x.png', size: 180 },
  { name: 'AppIcon-72x72@1x.png', size: 72 },
  { name: 'AppIcon-72x72@2x.png', size: 144 },
  { name: 'AppIcon-76x76@1x.png', size: 76 },
  { name: 'AppIcon-76x76@2x.png', size: 152 },
  { name: 'AppIcon-83.5x83.5@2x.png', size: 167 },
  { name: 'AppIcon-167x167@1x.png', size: 167 },
  { name: 'AppIcon-1024@1x.png', size: 1024 },
];

const androidIcons = [
  { dir: 'mipmap-mdpi', name: 'ic_launcher.png', size: 48 },
  { dir: 'mipmap-mdpi', name: 'ic_launcher_round.png', size: 48 },
  { dir: 'mipmap-mdpi', name: 'ic_launcher_foreground.png', size: 48 },
  { dir: 'mipmap-hdpi', name: 'ic_launcher.png', size: 72 },
  { dir: 'mipmap-hdpi', name: 'ic_launcher_round.png', size: 72 },
  { dir: 'mipmap-hdpi', name: 'ic_launcher_foreground.png', size: 72 },
  { dir: 'mipmap-xhdpi', name: 'ic_launcher.png', size: 96 },
  { dir: 'mipmap-xhdpi', name: 'ic_launcher_round.png', size: 96 },
  { dir: 'mipmap-xhdpi', name: 'ic_launcher_foreground.png', size: 96 },
  { dir: 'mipmap-xxhdpi', name: 'ic_launcher.png', size: 144 },
  { dir: 'mipmap-xxhdpi', name: 'ic_launcher_round.png', size: 144 },
  { dir: 'mipmap-xxhdpi', name: 'ic_launcher_foreground.png', size: 144 },
  { dir: 'mipmap-xxxhdpi', name: 'ic_launcher.png', size: 192 },
  { dir: 'mipmap-xxxhdpi', name: 'ic_launcher_round.png', size: 192 },
  { dir: 'mipmap-xxxhdpi', name: 'ic_launcher_foreground.png', size: 192 },
];

function makeHtml(size) {
  return `<!DOCTYPE html>
<html><head><style>
  * { margin: 0; padding: 0; }
  body { width: ${size}px; height: ${size}px; overflow: hidden; background: transparent; }
  svg { width: ${size}px; height: ${size}px; display: block; }
</style></head><body>${svgContent}</body></html>`;
}

async function generate() {
  const browser = await chromium.launch();
  let count = 0;

  async function renderIcon(size, outPath) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(makeHtml(size));
    const buf = await page.screenshot({ omitBackground: true });
    fs.writeFileSync(outPath, buf);
    await page.close();
    count++;
  }

  console.log('Generating web icons...');
  for (const icon of webIcons) {
    await renderIcon(icon.size, path.join(WEB_PUBLIC, icon.name));
    console.log(`  ${icon.name}`);
  }

  console.log('Generating desktop icons...');
  for (const icon of desktopIcons) {
    await renderIcon(icon.size, path.join(DESKTOP_ICONS, icon.name));
    console.log(`  ${icon.name}`);
  }

  console.log('Generating iOS icons...');
  for (const icon of iosIcons) {
    await renderIcon(icon.size, path.join(DESKTOP_IOS, icon.name));
    console.log(`  ${icon.name}`);
  }

  console.log('Generating Android icons...');
  for (const icon of androidIcons) {
    const dir = path.join(DESKTOP_ANDROID, icon.dir);
    fs.mkdirSync(dir, { recursive: true });
    await renderIcon(icon.size, path.join(dir, icon.name));
    console.log(`  ${icon.dir}/${icon.name}`);
  }

  // Copy to mobile Android
  console.log('Generating mobile Android icons...');
  for (const icon of androidIcons) {
    const dir = path.join(MOBILE_ANDROID_BASE, icon.dir);
    if (fs.existsSync(dir)) {
      await renderIcon(icon.size, path.join(dir, icon.name));
      console.log(`  mobile: ${icon.dir}/${icon.name}`);
    }
  }

  // Root icon
  await renderIcon(1024, path.join(__dirname, '..', '_icon_1024.png'));
  count++;
  console.log('  _icon_1024.png (root)');

  await browser.close();
  console.log(`\nDone! Generated ${count} icon files.`);
}

generate().catch(console.error);
