import type { editor } from "monaco-editor";

// Copiado do Orca (stablyai/orca, MIT) `monaco-find-options.ts`.
export const monacoFindOptions = {
  addExtraSpaceOnTop: false,
  autoFindInSelection: "never",
  seedSearchStringFromSelection: "selection",
} satisfies editor.IEditorFindOptions;
