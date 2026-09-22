import { Gy as areLocalWindowsWslPathAliases, _b as MIN_EDITOR_AUTO_SAVE_DELAY_MS, gb as MAX_EDITOR_AUTO_SAVE_DELAY_MS, ns as clampNumber, ub as DEFAULT_EDITOR_AUTO_SAVE_DELAY_MS, wm as joinPath, yn as isLocalWindowsDesktopClient } from "./store-C9f8FDJV.js";
const ORCA_EDITOR_QUIESCE_FILE_SAVES_EVENT = "orca:editor-quiesce-file-saves", ORCA_EDITOR_EXTERNAL_FILE_CHANGE_EVENT = "orca:editor-external-file-change", ORCA_EDITOR_SAVE_FILE_EVENT = "orca:editor-save-file", ORCA_EDITOR_SAVE_AND_CLOSE_EVENT = "orca:save-and-close", ORCA_EDITOR_FILE_SAVED_EVENT = "orca:editor-file-saved", ORCA_EDITOR_REQUEST_CMD_SAVE_EVENT = "orca:editor-request-cmd-save", ORCA_EDITOR_REQUEST_FILE_CLOSE_EVENT = "orca:editor-request-file-close";
function isExternalReloadableEditorTab(e) {
	return e.mode === "edit" || e.mode === "markdown-preview" || e.mode === "diff" && (e.diffSource === "unstaged" || e.diffSource === "staged");
}
function canAutoSaveOpenFile(e) {
	return e.readOnly === !0 ? !1 : e.mode === "edit" || e.mode === "diff" && e.diffSource === "unstaged";
}
function isAutosaveSuspendedForFile(e) {
	return e.externalMutation === "changed" || e.pendingDiskBaselineVerification === !0 || e.pendingLiveDiskVerification === !0 || e.pendingOwnerMigration === !0;
}
function normalizeAutoSaveDelayMs(e) {
	let v = typeof e == "string" ? Number(e) : typeof e == "number" ? e : null;
	return clampNumber(v !== null && Number.isFinite(v) ? v : DEFAULT_EDITOR_AUTO_SAVE_DELAY_MS, 250, MAX_EDITOR_AUTO_SAVE_DELAY_MS);
}
function getOpenFilesForExternalFileChange(v, y) {
	if (y.indexedOpenFiles) return y.indexedOpenFiles.matches(v);
	let b = joinPath(y.worktreePath, y.relativePath), x = Object.hasOwn(y, "runtimeEnvironmentId"), S = y.runtimeEnvironmentId?.trim() || null;
	return v.filter((v) => v.worktreeId !== y.worktreeId || x && (v.runtimeEnvironmentId?.trim() || null) !== S ? !1 : v.mode === "edit" || v.mode === "markdown-preview" ? v.filePath === b || y.allowLocalWindowsWslAliases === !0 && isLocalWindowsDesktopClient() && areLocalWindowsWslPathAliases(v.filePath, b) : v.mode === "diff" ? (v.diffSource === "unstaged" || v.diffSource === "staged") && v.relativePath === y.relativePath : !1);
}
async function requestEditorSaveQuiesce(e) {
	await new Promise((v) => {
		let y = !1;
		window.dispatchEvent(new CustomEvent(ORCA_EDITOR_QUIESCE_FILE_SAVES_EVENT, { detail: {
			...e,
			claim: () => {
				y = !0;
			},
			resolve: v
		} })), y || v();
	});
}
async function requestEditorFileSave(e) {
	await new Promise((v, y) => {
		let b = !1;
		window.dispatchEvent(new CustomEvent(ORCA_EDITOR_SAVE_FILE_EVENT, { detail: {
			...e,
			claim: () => {
				b = !0;
			},
			resolve: v,
			reject: (e) => y(Error(e))
		} })), b || y(/* @__PURE__ */ Error("Editor save controller is unavailable."));
	});
}
function requestEditorFileClose(e) {
	window.dispatchEvent(new CustomEvent(ORCA_EDITOR_REQUEST_FILE_CLOSE_EVENT, { detail: { fileId: e } }));
}
function notifyEditorExternalFileChange(e) {
	window.dispatchEvent(new CustomEvent(ORCA_EDITOR_EXTERNAL_FILE_CHANGE_EVENT, { detail: e }));
}
export { ORCA_EDITOR_REQUEST_FILE_CLOSE_EVENT as a, canAutoSaveOpenFile as c, isExternalReloadableEditorTab as d, normalizeAutoSaveDelayMs as f, requestEditorSaveQuiesce as g, requestEditorFileSave as h, ORCA_EDITOR_REQUEST_CMD_SAVE_EVENT as i, getOpenFilesForExternalFileChange as l, requestEditorFileClose as m, ORCA_EDITOR_FILE_SAVED_EVENT as n, ORCA_EDITOR_SAVE_AND_CLOSE_EVENT as o, notifyEditorExternalFileChange as p, ORCA_EDITOR_QUIESCE_FILE_SAVES_EVENT as r, ORCA_EDITOR_SAVE_FILE_EVENT as s, ORCA_EDITOR_EXTERNAL_FILE_CHANGE_EVENT as t, isAutosaveSuspendedForFile as u };
