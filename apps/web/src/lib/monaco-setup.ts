/**
 * Monaco setup — portado do Orca (stablyai/orca, MIT) `src/renderer/src/lib/monaco-setup.ts`.
 * Adaptado: loaders de worker no padrão webpack (Next) em vez de Vite `?worker`.
 */
import { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { typescript as monacoTS } from "monaco-editor";
import { registerAstroLanguage } from "./monaco-languages/register-astro";
import { registerJsonlLanguage } from "./monaco-languages/register-jsonl";
import { registerNimLanguage } from "./monaco-languages/register-nim";
import { registerShellMarkdownAliases } from "./monaco-languages/register-shell-markdown-aliases";
import { registerSvelteLanguage } from "./monaco-languages/register-svelte";
import { registerVueLanguage } from "./monaco-languages/register-vue";

function createWorker(label: string): Worker {
  const base = "monaco-editor/esm/vs/";
  switch (label) {
    case "json":
      return new Worker(
        new URL(`${base}language/json/json.worker.js`, import.meta.url),
        {
          type: "module",
        },
      );
    case "css":
    case "scss":
    case "less":
      return new Worker(
        new URL(`${base}language/css/css.worker.js`, import.meta.url),
        {
          type: "module",
        },
      );
    case "html":
    case "handlebars":
    case "razor":
      return new Worker(
        new URL(`${base}language/html/html.worker.js`, import.meta.url),
        {
          type: "module",
        },
      );
    case "typescript":
    case "javascript":
      return new Worker(
        new URL(`${base}language/typescript/ts.worker.js`, import.meta.url),
        {
          type: "module",
        },
      );
    default:
      return new Worker(
        new URL(`${base}editor/editor.worker.js`, import.meta.url),
        {
          type: "module",
        },
      );
  }
}

globalThis.MonacoEnvironment = {
  getWorker(_workerId: string, label: string) {
    return createWorker(label);
  },
};

// O Monaco aqui é uma superfície de edição/visualização, não um type checker real —
// os arquivos são construídos no ambiente do usuário. Desabilitar diagnósticos
// semantics/sintaxe evita falso-positivos (2307, 2792, 6133, ...).
const diagnosticsOptions = {
  noSemanticValidation: true,
  noSuggestionDiagnostics: true,
  noSyntaxValidation: true,
};
monacoTS.typescriptDefaults.setDiagnosticsOptions(diagnosticsOptions);
monacoTS.javascriptDefaults.setDiagnosticsOptions(diagnosticsOptions);

// Arquivos .tsx/.jsx compartilham o id 'typescript'/'javascript' no registro do
// Monaco; sem jsx habilitado o worker levanta TS17004 em qualquer tag JSX.
monacoTS.typescriptDefaults.setCompilerOptions({
  ...monacoTS.typescriptDefaults.getCompilerOptions(),
  jsx: monacoTS.JsxEmit.Preserve,
});
monacoTS.javascriptDefaults.setCompilerOptions({
  ...monacoTS.javascriptDefaults.getCompilerOptions(),
  jsx: monacoTS.JsxEmit.Preserve,
});

registerVueLanguage(monaco);
registerSvelteLanguage(monaco);
registerAstroLanguage(monaco);
registerNimLanguage(monaco);
registerJsonlLanguage(monaco);
registerShellMarkdownAliases(monaco);

loader.config({ monaco });

export { monaco };
