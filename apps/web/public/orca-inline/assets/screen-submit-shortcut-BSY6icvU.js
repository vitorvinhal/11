import { t as getShortcutPlatform } from "./shortcut-platform-yj_laTMg.js";
function isScreenSubmitShortcut(r) {
	return r.isComposing || r.nativeEvent?.isComposing || r.key !== "Enter" || r.altKey || r.shiftKey ? !1 : getShortcutPlatform() === "darwin" ? !!r.metaKey && !r.ctrlKey : !!r.ctrlKey && !r.metaKey;
}
function getScreenSubmitModifierLabel() {
	return getShortcutPlatform() === "darwin" ? "⌘" : "Ctrl";
}
function getScreenSubmitShortcutLabel() {
	return getShortcutPlatform() === "darwin" ? "⌘ Enter" : "Ctrl+Enter";
}
export { getScreenSubmitShortcutLabel as n, isScreenSubmitShortcut as r, getScreenSubmitModifierLabel as t };
