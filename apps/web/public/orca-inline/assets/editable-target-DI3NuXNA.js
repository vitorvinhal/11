import { t as getShortcutPlatform } from "./shortcut-platform-yj_laTMg.js";
function isEditableTarget(e) {
	return !(e instanceof HTMLElement) || e.classList.contains("xterm-helper-textarea") ? !1 : e.isContentEditable ? !0 : e.closest("input, textarea, select, [contenteditable=\"\"], [contenteditable=\"true\"]") !== null;
}
function isSelectAllShortcut(n) {
	return n.key.toLowerCase() !== "a" || n.altKey || n.shiftKey ? !1 : getShortcutPlatform() === "darwin" ? !!n.metaKey && !n.ctrlKey : !!n.ctrlKey && !n.metaKey;
}
export { isSelectAllShortcut as n, isEditableTarget as t };
