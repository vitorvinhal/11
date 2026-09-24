/**
 * Medidor de FPS via rAF — Playwright.
 * Uso: node scripts/fps-measure.mjs [baseUrl] [ms]
 */
import { chromium } from "@playwright/test";

const base = process.argv[2] || "http://localhost:3000";
const durationMs = Number(process.argv[3] || 3000);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
await page.goto(base, { waitUntil: "networkidle", timeout: 60000 });
// aquece 1s
await page.waitForTimeout(1000);

const fps = await page.evaluate(async (ms) => {
  return await new Promise((resolve) => {
    let frames = 0;
    const start = performance.now();
    function tick(now) {
      frames++;
      if (now - start < ms) requestAnimationFrame(tick);
      else resolve((frames * 1000) / (now - start));
    }
    requestAnimationFrame(tick);
  });
}, durationMs);

// segunda amostra
const fps2 = await page.evaluate(async (ms) => {
  return await new Promise((resolve) => {
    let frames = 0;
    const start = performance.now();
    function tick(now) {
      frames++;
      if (now - start < ms) requestAnimationFrame(tick);
      else resolve((frames * 1000) / (now - start));
    }
    requestAnimationFrame(tick);
  });
}, durationMs);

const samples = [fps, fps2].sort((a, b) => a - b);
const median = samples[Math.floor(samples.length / 2)];
console.log(JSON.stringify({ samples, median: Math.round(median * 10) / 10 }, null, 2));
await browser.close();
