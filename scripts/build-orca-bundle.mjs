#!/usr/bin/env node
/**
 * Builda o bundle único do cliente web do Orca (renderer) e publica em
 * `apps/web/public/orca-inline/` para o app 11 montar sem iframe.
 *
 * Uso:
 *   node scripts/build-orca-bundle.mjs            # clone (se preciso) + install + build
 *   node scripts/build-orca-bundle.mjs --no-install  # só build (já clonado/instalado)
 *
 * Roda de qualquer cwd (buildCommand do Vercel roda com cwd = apps/web).
 *
 * Resiliência: se clone/install/build falhar, SAI COM 0 — o bundle commitado
 * em apps/web/public/orca-inline/ continua servido como fallback. O log do
 * problema vai para stderr com prefixo [orca-bundle].
 */
import { execFileSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  statSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const VENDOR = resolve(ROOT, "vendor", "orca");
// Source completo do Orca usado no build. Vive em cache gitignored para não
// inchar o repo (28k arquivos); `vendor/orca` commitado é só referência/doc.
const SRC = resolve(ROOT, "vendor", ".orca-src");
const OUT = join(SRC, "out", "eleven");
const DEST = resolve(ROOT, "apps", "web", "public", "orca-inline");

// Commit pinado do stablyai/orca (web client com suporte WebConnect + mobile-web).
const ORCA_REPO = "https://github.com/stablyai/orca.git";
const ORCA_SHA = "e476193b";
const ORCA_PNPM_VERSION = "12.0.0";

const GIT = "git";
const isWin = process.platform === "win32";
const PNPM = isWin ? "pnpm.cmd" : "pnpm";
const COREPACK = isWin ? "corepack.cmd" : "corepack";
const NPX = isWin ? "npx.cmd" : "npx";

function log(msg) {
  console.log(`[orca-bundle] ${msg}`);
}
function problem(msg) {
  console.error(`[orca-bundle] PROBLEMA: ${msg}`);
}

function hasCommand(cmd) {
  try {
    execFileSync(cmd, ["--version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

/** Retorna ["cmd", args...] para rodar pnpm 12 no diretório do orca. */
function orcaPnpmCommand() {
  if (hasCommand(COREPACK)) {
    return [COREPACK, ["pnpm"]];
  }
  if (hasCommand(NPX)) {
    return [NPX, ["-y", `pnpm@${ORCA_PNPM_VERSION}`]];
  }
  return [PNPM, []];
}

function run(cmd, args, { cwd = SRC, timeout = 20 * 60 * 1000 } = {}) {
  log(`> ${cmd} ${args.join(" ")}  (cwd: ${cwd})`);
  execFileSync(cmd, args, {
    cwd,
    stdio: "inherit",
    env: process.env,
    timeout,
    shell: isWin,
  });
}

/** Garante source completo do Orca em SRC (cache gitignored). */
function ensureVendor() {
  const hasPkg = existsSync(join(SRC, "package.json"));
  const hasSrc = existsSync(join(SRC, "src"));
  if (hasPkg && hasSrc && existsSync(join(SRC, "node_modules"))) {
    log("source do Orca em vendor/.orca-src já presente — pulando clone.");
    return true;
  }
  log("source do Orca ausente — clonando stablyai/orca (pinned " + ORCA_SHA + ")…");
  const tmp = `${SRC}.tmp-${process.pid}`;
  try {
    if (existsSync(SRC)) {
      execFileSync("node", ["-e", "require('node:fs').rmSync(process.argv[1],{recursive:true,force:true})", SRC], { stdio: "inherit" });
    }
    run(GIT, ["clone", "--filter=blob:none", ORCA_REPO, tmp], {
      cwd: ROOT,
      timeout: 20 * 60 * 1000,
    });
    run(GIT, ["checkout", ORCA_SHA], { cwd: tmp, timeout: 15 * 60 * 1000 });
    execFileSync("node", ["-e", "require('node:fs').renameSync(process.argv[1],process.argv[2])", tmp, SRC], { stdio: "inherit" });
    return true;
  } catch (err) {
    problem(`não foi possível clonar o Orca: ${String(err?.message ?? err)}`);
    try {
      execFileSync("node", ["-e", "require('node:fs').rmSync(process.argv[1],{recursive:true,force:true})", tmp], { stdio: "ignore" });
    } catch {}
    return false;
  }
}

function publish() {
  log("Publicando bundle em apps/web/public/orca-inline…");
  mkdirSync(DEST, { recursive: true });
  cpSync(OUT, DEST, { recursive: true });

  const cssDir = join(DEST, "assets");
  if (existsSync(cssDir)) {
    const cssFiles = readdirSync(cssDir).filter(
      (p) => p.startsWith("orca-") && p.endsWith(".css") && p !== "orca.css"
    );
    for (const css of cssFiles) {
      cpSync(join(cssDir, css), join(cssDir, "orca.css"));
      log(`- css estável: ${css} → assets/orca.css`);
    }
  }

  const files = readdirSync(DEST, { recursive: true })
    .filter((p) => statSync(join(DEST, p)).isFile())
    .map((p) => p.replace(/\\/g, "/"));
  log(`✅ Bundle do Orca publicado: ${files.length} arquivos em public/orca-inline.`);
}

function main() {
  const noInstall = process.argv.includes("--no-install");

  if (!ensureVendor()) {
    process.exit(0); // fallback: bundle commitado continua valendo.
  }

  // Injeta entry de embed caso o source ainda não o tenha (aditivo/pinned).
  const mountEntry = join(SRC, "src", "renderer", "src", "web", "eleven-mount.tsx");
  const viteCfg = join(SRC, "vite.eleven.config.ts");
  mkdirSync(dirname(mountEntry), { recursive: true });
  writeFileSync(mountEntry, MOUNT_ENTRY_TSX);
  writeFileSync(viteCfg, VITE_ELEVEN_CFG);

  const nodeMajor = Number(process.versions.node.split(".")[0]);
  if (nodeMajor < 24) {
    problem(`Orca exige node 24 (atual: ${process.versions.node}). Build pode falhar.`);
  }

  try {
    if (!existsSync(join(SRC, "node_modules"))) {
      if (noInstall) {
        log("node_modules ausente e --no-install ativo — pulando install.");
      } else {
        const [pmCmd, pmArgs] = orcaPnpmCommand();
        log("pnpm install (orca, pnpm 12 via packageManager)…");
        run(pmCmd, [...pmArgs, "install", "--ignore-scripts"]);
      }
    } else {
      log("node_modules do orca já presentes — pulando install.");
    }

    log("vite build (vite.eleven.config.ts)…");
    const [pmCmd, pmArgs] = orcaPnpmCommand();
    run(pmCmd, [...pmArgs, "exec", "vite", "build", "--config", "vite.eleven.config.ts"]);

    if (!existsSync(OUT)) {
      problem(`Build não gerou ${OUT}.`);
      process.exit(0);
    }
    publish();
  } catch (err) {
    problem(`build do Orca falhou: ${String(err?.message ?? err)}`);
    process.exit(0);
  }
}

const MOUNT_ENTRY_TSX = `import '../assets/main.css'

import { Suspense, useMemo, useState } from 'react'
import { lazyWithRetry as lazy } from '@/lib/lazy-with-retry'
import ReactDOM from 'react-dom/client'
import { useTranslation } from 'react-i18next'
import WebConnect from './WebConnect'
import { RecoverableRenderErrorBoundary } from '../components/error-boundaries/RecoverableRenderErrorBoundary'
import {
  clearPairingInputFromAddressBar,
  decideWebPairingStartup,
  readPairingInputFromLocation
} from './web-pairing'
import {
  createStoredWebRuntimeEnvironment,
  readStoredWebRuntimeEnvironment,
  saveStoredWebRuntimeEnvironment
} from './web-runtime-environment'
import { installWebPreloadApi } from './web-preload-api'
import { I18nProvider } from '../i18n/I18nProvider'
import { translate } from '../i18n/i18n'

const App = lazy(() => import('../App'))

export interface ElevenMountOptions {
  resetStoredEnvironment?: boolean
}

export function mountOrca(container: HTMLElement, options: ElevenMountOptions = {}): () => void {
  if (options.resetStoredEnvironment) {
    clearStoredWebRuntimeEnvironment()
  }

  function ElevenWebRoot(): React.JSX.Element {
    const initialPairingInput = useMemo(() => readPairingInputFromLocation(window.location), [])
    const startupDecision = useMemo(() => {
      const decision = decideWebPairingStartup({
        initialPairingInput,
        hasStoredEnvironment: readStoredWebRuntimeEnvironment() !== null
      })
      if (
        decision.kind === 'auto-save-runtime-offer' ||
        (decision.kind === 'show-connect' && decision.initialPairingInput !== null)
      ) {
        clearPairingInputFromAddressBar()
      }
      return decision
    }, [initialPairingInput])
    const [hasEnvironment, setHasEnvironment] = useState(() => {
      if (startupDecision.kind === 'auto-save-runtime-offer') {
        saveStoredWebRuntimeEnvironment(
          createStoredWebRuntimeEnvironment({
            name: 'Orca Server',
            offer: startupDecision.offer,
            previousEnvironment: readStoredWebRuntimeEnvironment()
          })
        )
        return true
      }
      return startupDecision.kind === 'use-stored-environment'
    })

    if (!hasEnvironment) {
      return (
        <WebConnect
          initialPairingInput={
            startupDecision.kind === 'show-connect' ? startupDecision.initialPairingInput : null
          }
          onConnected={() => setHasEnvironment(true)}
        />
      )
    }

    installWebPreloadApi()
    return (
      <Suspense fallback={<div className="min-h-dvh bg-background" />}>
        <App />
      </Suspense>
    )
  }

  function ElevenWebBoundary(): React.JSX.Element {
    useTranslation()
    return (
      <RecoverableRenderErrorBoundary
        boundaryId="web.root"
        surface="web-root"
        title={translate('app.recoverableError.webTitle', 'Orca web hit a renderer error.')}
        description={translate(
          'app.recoverableError.webDescription',
          'Retry the web client or reconnect to the paired runtime.'
        )}
      >
        <ElevenWebRoot />
      </RecoverableRenderErrorBoundary>
    )
  }

  const root = ReactDOM.createRoot(container)
  root.render(
    <I18nProvider>
      <ElevenWebBoundary />
    </I18nProvider>
  )

  void import('../lib/pane-manager/pane-webgl-renderer').then((module) =>
    module.primeTerminalWebglAddon()
  )

  return () => {
    root.unmount()
  }
}`;

const VITE_ELEVEN_CFG = `import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createPdfjsViewerAssetsPlugin } from './config/build-plugins/pdfjs-viewer-assets'

// Build de embed do cliente web do Orca (bundle único ESM, sem HTML).
// Consumido pelo app 11: import('/orca-inline/orca.js') → mountOrca(container).
export default defineConfig({
  root: resolve('src/renderer'),
  base: './',
  plugins: [react(), tailwindcss(), createPdfjsViewerAssetsPlugin()],
  define: {
    ORCA_FEATURE_WALL_ENABLED: 'true'
  },
  resolve: {
    alias: {
      '@renderer': resolve('src/renderer/src'),
      '@': resolve('src/renderer/src')
    }
  },
  build: {
    outDir: resolve('out/eleven'),
    emptyOutDir: true,
    cssFileName: 'orca',
    lib: {
      entry: resolve('src/renderer/src/web/eleven-mount.tsx'),
      formats: ['es'],
      fileName: () => 'orca.js'
    },
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  worker: {
    format: 'es'
  }
})`;

main();