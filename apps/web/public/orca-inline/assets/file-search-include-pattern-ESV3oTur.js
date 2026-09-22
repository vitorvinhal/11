import { Tm as normalizeRelativePath, t as useAppStore, zf as getSettingsForWorktreeRuntimeOwner } from "./store-C9f8FDJV.js";
function getRightSidebarWorktreeRuntimeSettings(e) {
	return getSettingsForWorktreeRuntimeOwner(useAppStore.getState(), e);
}
var SEARCH_GLOB_LITERAL_META = new Set([
	"\\",
	"*",
	"?",
	"[",
	"]",
	"{",
	"}",
	"!",
	","
]);
function escapeSearchGlobLiteralSegment(e) {
	let o = "";
	for (let s of e) o += SEARCH_GLOB_LITERAL_META.has(s) ? `\\${s}` : s;
	return o;
}
function folderRelativePathToIncludeGlob(o) {
	let s = normalizeRelativePath(o).replace(/\/+$/, "");
	return s ? `${s.split("/").map(escapeSearchGlobLiteralSegment).join("/")}/**` : "";
}
function selectedExplorerFolderRelativePath(e) {
	return (e?.closest("[data-orca-explorer-shell]"))?.getAttribute("data-selected-folder-relative-path") ?? null;
}
export { selectedExplorerFolderRelativePath as n, getRightSidebarWorktreeRuntimeSettings as r, folderRelativePathToIncludeGlob as t };
