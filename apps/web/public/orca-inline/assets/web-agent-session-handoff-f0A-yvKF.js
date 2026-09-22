var handoffByProvisionalTab = /* @__PURE__ */ new Map();
function handoffKey(e) {
	return `${e.environmentId}\0${e.worktreeId}\0${e.provisionalTabId}`;
}
function recordWebAgentSessionHandoff(o) {
	!o.environmentId.trim() || !o.worktreeId.trim() || !o.provisionalTabId.trim() || !o.hostTabId.trim() || !o.hostTerminalHandle.trim() || handoffByProvisionalTab.set(handoffKey(o), {
		hostTabId: o.hostTabId,
		hostTerminalHandle: o.hostTerminalHandle,
		postCreateSnapshotConfirmed: !1
	});
}
function resolveWebAgentSessionHandoff(o) {
	return handoffByProvisionalTab.get(handoffKey(o))?.hostTabId ?? null;
}
function isWebAgentSessionHandoffPostCreateSnapshotConfirmed(o) {
	return handoffByProvisionalTab.get(handoffKey(o))?.postCreateSnapshotConfirmed === !0;
}
function confirmWebAgentSessionHandoffAfterCreate(o) {
	let s = handoffKey(o), c = handoffByProvisionalTab.get(s);
	c?.hostTabId === o.hostTabId && c.hostTerminalHandle === o.hostTerminalHandle && handoffByProvisionalTab.set(s, {
		...c,
		postCreateSnapshotConfirmed: !0
	});
}
function clearWebAgentSessionHandoff(o) {
	handoffByProvisionalTab.delete(handoffKey(o));
}
function clearWebAgentSessionHandoffsForWorktree(a, o) {
	let s = `${a}\0${o}\0`;
	for (let a of handoffByProvisionalTab.keys()) a.startsWith(s) && handoffByProvisionalTab.delete(a);
}
function clearWebAgentSessionHandoffsForEnvironment(a) {
	let o = `${a}\0`;
	for (let a of handoffByProvisionalTab.keys()) a.startsWith(o) && handoffByProvisionalTab.delete(a);
}
export { isWebAgentSessionHandoffPostCreateSnapshotConfirmed as a, confirmWebAgentSessionHandoffAfterCreate as i, clearWebAgentSessionHandoffsForEnvironment as n, recordWebAgentSessionHandoff as o, clearWebAgentSessionHandoffsForWorktree as r, resolveWebAgentSessionHandoff as s, clearWebAgentSessionHandoff as t };
