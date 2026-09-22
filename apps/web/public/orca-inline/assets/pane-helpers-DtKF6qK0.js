import { t as hasVisibleOverlay } from "./visible-overlay-Bw86wx0q.js";
function focusPanePreservingOverlays(s) {
	typeof document < "u" && hasVisibleOverlay({
		ignoreMatches: "[role=\"listbox\"][data-worktree-sidebar]",
		ignoreContaining: s.container,
		ignoreDismissed: !0
	}) || s.terminal.focus();
}
function fitPanes(e) {
	e.fitAllPanes();
}
function focusActivePane(e) {
	if (typeof document < "u" && document.querySelector("[data-tab-rename-input=\"true\"]") || shouldPreserveEditableFocus(typeof document > "u" ? null : document.activeElement)) return;
	let c = e.getPanes(), l = e.getActivePane() ?? c[0];
	l && focusPanePreservingOverlays(l);
}
function fitAndFocusPanes(e) {
	fitPanes(e), focusActivePane(e);
}
function isWindowsUserAgent(e = typeof navigator > "u" ? "" : navigator.userAgent) {
	return e.includes("Windows");
}
function isMacUserAgent(e = typeof navigator > "u" ? "" : navigator.userAgent) {
	return e.includes("Mac");
}
function isLinuxUserAgent(e = typeof navigator > "u" ? "" : navigator.userAgent) {
	return !isMacUserAgent(e) && !isWindowsUserAgent(e) && e.includes("Linux");
}
function shouldPreserveEditableFocus(e) {
	return !(e instanceof HTMLElement) || e.classList.contains("xterm-helper-textarea") || e.closest(".xterm") ? !1 : e.isContentEditable || e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.tagName === "SELECT";
}
function shellEscapePath(e, s) {
	return s === "windows" ? /^[a-zA-Z0-9_./@:\\-]+$/.test(e) ? e : `"${e}"` : /^[a-zA-Z0-9_./@:-]+$/.test(e) ? e : `'${e.replace(/'/g, "'\\''")}'`;
}
export { isMacUserAgent as a, shouldPreserveEditableFocus as c, isLinuxUserAgent as i, focusPanePreservingOverlays as l, fitPanes as n, isWindowsUserAgent as o, focusActivePane as r, shellEscapePath as s, fitAndFocusPanes as t };
