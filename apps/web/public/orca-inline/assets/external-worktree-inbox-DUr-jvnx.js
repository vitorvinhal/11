import { $y as normalizeRuntimePathForComparison, My as effectiveExternalWorktreeVisibility, Py as isLegacyRepoForExternalWorktreeVisibility } from "./store-C9f8FDJV.js";
function normalizeExternalWorktreeInboxPath(u) {
	return normalizeRuntimePathForComparison(u);
}
function mergeExternalWorktreeInboxPaths(e, u) {
	let d = new Set((e ?? []).map((e) => normalizeExternalWorktreeInboxPath(e))), p = [...e ?? []];
	for (let e of u) {
		let u = normalizeExternalWorktreeInboxPath(e);
		!u || d.has(u) || (d.add(u), p.push(e));
	}
	return p;
}
function getHiddenExternalWorktrees(e) {
	return e?.authoritative === !0 ? e.worktrees.filter((e) => !e.visible && isUserFacingExternalWorktree(e)) : [];
}
function isUserFacingExternalWorktree(e) {
	return !e.selectedCheckout && e.ownership !== "orca-managed" && e.ownership !== "agent-scratch";
}
function isImportableExternalWorktree(e) {
	return !e.selectedCheckout && e.ownership !== "orca-managed";
}
function getHiddenImportableExternalWorktrees(e) {
	return e?.authoritative === !0 ? e.worktrees.filter((e) => !e.visible && isImportableExternalWorktree(e)) : [];
}
function getVisibleNonOrcaWorktrees(e) {
	return e?.authoritative === !0 ? e.worktrees.filter((e) => e.visible && !e.selectedCheckout && e.ownership !== "orca-managed") : [];
}
function isExternalWorktreeDiscoverySuppressed(e) {
	return typeof e.externalWorktreeDiscoverySuppressedAt == "number";
}
function hasCompletedInitialExternalWorktreeImportPrompt(e) {
	return typeof e.externalWorktreeVisibilityPromptDismissedAt == "number";
}
function shouldOfferNewExternalWorktreeInbox(e, f) {
	return isExternalWorktreeDiscoverySuppressed(e) || !hasCompletedInitialExternalWorktreeImportPrompt(e) ? !1 : effectiveExternalWorktreeVisibility(e, isLegacyRepoForExternalWorktreeVisibility(e), f) === "hide";
}
function getNewExternalWorktreeInboxWorktrees(e, u, d) {
	if (!shouldOfferNewExternalWorktreeInbox(u, d)) return [];
	let p = new Set((u.externalWorktreeInboxBaselinePaths ?? []).map((e) => normalizeExternalWorktreeInboxPath(e)));
	return getHiddenExternalWorktrees(e).filter((e) => !p.has(normalizeExternalWorktreeInboxPath(e.path)));
}
export { mergeExternalWorktreeInboxPaths as a, getVisibleNonOrcaWorktrees as i, getHiddenImportableExternalWorktrees as n, getNewExternalWorktreeInboxWorktrees as r, getHiddenExternalWorktrees as t };
