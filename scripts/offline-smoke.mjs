// Smoke test offline-first: serva dist do desktop e www do mobile localmente,
// desliga a rede (offline) e valida que a UI renderiza.
// Uso: node scripts/offline-smoke.mjs
import { chromium } from "playwright";
import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function serve(distPath, port) {
  const root = path.resolve(ROOT, distPath);
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      try {
        let p = decodeURIComponent(req.url.split("?")[0]);
        if (p === "/") p = "/index.html";
        const buf = await readFile(path.join(root, p));
        const ext = p.split(".").pop();
        const mime = ext === "html" ? "text/html" : ext === "js" ? "text/javascript" : "application/octet-stream";
        res.writeHead(200, { "Content-Type": `${mime}; charset=utf-8` });
        res.end(buf);
      } catch {
        res.writeHead(404);
        res.end("not found");
      }
    });
    server.listen(port, () =>
      resolve({
        close: () => server.close(),
        url: `http://127.0.0.1:${port}/`,
        log: `serving ${distPath} on :${port}`,
      }),
    );
  });
}

async function assertRenders(label, url, expectSubstring) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  // Simula rede DESLIGADA: só o localhost é permitido.
  await context.route("**/*", (route) => {
    const u = new URL(route.request().url());
    if (u.hostname === "127.0.0.1" || u.hostname === "localhost") return route.continue();
    return route.abort();
  });
  await context.addInitScript(() => {
    Object.defineProperty(navigator, "onLine", { get: () => false });
    window.dispatchEvent(new Event("offline"));
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(600);
  const body = await page.evaluate(() => document.body.innerText);
  const pass = body.toLowerCase().includes(expectSubstring.toLowerCase()) && errors.length === 0;
  console.log(`${pass ? "PASS" : "FAIL"}   [${label}] offline, busca '${expectSubstring}'`);
  if (!body.toLowerCase().includes(expectSubstring.toLowerCase())) console.log("  ...body:", body.slice(0, 200).replace(/\n/g, " | "));
  if (errors.length) console.log("  ...errors:", errors.slice(0, 3));
  await browser.close();
  return pass;
}

const results = [];
const a = await serve("apps/desktop/dist", 4173);
const b = await serve("apps/mobile/www", 4174);
console.log(a.log);
console.log(b.log);

results.PASS = true;
results.push(await assertRenders("desktop", a.url, "11 — Desktop"));
results.push(await assertRenders("mobile", b.url, "11 — Mobile"));

a.close();
b.close();

const ok = results.every(Boolean);
console.log(ok ? "\nTODO OK — UI renderiza offline" : "\nFALHA no teste offline");
process.exit(ok ? 0 : 1);