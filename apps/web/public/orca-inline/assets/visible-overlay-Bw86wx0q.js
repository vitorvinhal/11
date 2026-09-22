var OVERLAY_SELECTOR = "[role=\"dialog\"], [role=\"alertdialog\"], [role=\"listbox\"]:not([data-worktree-sidebar]), [role=\"menu\"]";
function hasVisibleOverlay(t) {
	return Array.from(document.querySelectorAll(OVERLAY_SELECTOR)).some((e) => {
		if (!(e instanceof HTMLElement) || e.closest("[aria-hidden=\"true\"]") || t?.ignoreSelector && e.closest(t.ignoreSelector) || t?.ignoreMatches && e.matches(t.ignoreMatches) || t?.ignoreContaining && e.contains(t.ignoreContaining) || t?.ignoreDismissed && e.getAttribute("data-state") === "closed") return !1;
		let n = window.getComputedStyle(e);
		return n.display !== "none" && n.visibility !== "hidden" && e.getClientRects().length > 0;
	});
}
export { hasVisibleOverlay as t };
