const MANUAL_TERMINAL_WORKTREE_PARK_EVENT = "orca-manual-terminal-worktree-park";
var pendingWorktreeIds = /* @__PURE__ */ new Set();
function requestManualTerminalWorktreePark(i) {
	i && (pendingWorktreeIds.add(i), window.dispatchEvent(new CustomEvent(MANUAL_TERMINAL_WORKTREE_PARK_EVENT, { detail: { worktreeId: i } })));
}
function takePendingManualTerminalWorktreePark(e) {
	return pendingWorktreeIds.delete(e);
}
function takeAllPendingManualTerminalWorktreeParks() {
	let e = [...pendingWorktreeIds];
	return pendingWorktreeIds.clear(), e;
}
export { takePendingManualTerminalWorktreePark as i, requestManualTerminalWorktreePark as n, takeAllPendingManualTerminalWorktreeParks as r, MANUAL_TERMINAL_WORKTREE_PARK_EVENT as t };
