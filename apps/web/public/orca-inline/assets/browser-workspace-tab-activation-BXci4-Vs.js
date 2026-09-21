import { $f as isUnifiedTabOwnedByWorktree, Kf as findAmbiguousWorktreeIds, Yf as getPaletteOwnershipWorktreeIds, t as useAppStore } from "./store-C9f8FDJV.js";
function getActivatableBrowserWorkspaceTab(i) {
	let a = useAppStore.getState(), o = findAmbiguousWorktreeIds(getPaletteOwnershipWorktreeIds(a));
	if (!i.executionHostId && o.has(i.worktreeId)) return null;
	let s = a.getKnownWorktreeById(i.worktreeId, i.executionHostId);
	if (!s) return null;
	let c = Object.values(a.unifiedTabsByWorktree).flat(), l = c.filter((e) => e.contentType === "browser" && e.entityId === i.workspaceId), u = l[0];
	return l.some((n) => n.worktreeId !== i.worktreeId || s && !isUnifiedTabOwnedByWorktree(n, s, o)) || !u || c.filter((e) => e.id === u.id).length !== 1 ? null : u;
}
function activateBrowserWorkspaceTab(e) {
	let n = getActivatableBrowserWorkspaceTab(e);
	if (!n) return !1;
	let r = useAppStore.getState();
	return r.focusGroup(e.worktreeId, n.groupId), r.activateTab(n.id, { worktreeId: e.worktreeId }), r.setActiveBrowserTab(e.workspaceId), e.pageId && r.setActiveBrowserPage(e.workspaceId, e.pageId), !0;
}
export { getActivatableBrowserWorkspaceTab as n, activateBrowserWorkspaceTab as t };
