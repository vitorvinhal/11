import { Gv as callRuntimeRpc, Rf as getRuntimeEnvironmentIdForWorktree, Sy as toRuntimeWorktreeSelector, Yv as getActiveRuntimeTarget, t as useAppStore } from "./store-C9f8FDJV.js";
function activateStructuredAgentSessionTab(a) {
	let o = useAppStore.getState(), s = (o.unifiedTabsByWorktree[a.worktreeId] ?? []).find((e) => e.id === a.tabId && e.contentType === "agent-session");
	return s ? (o.focusGroup(a.worktreeId, s.groupId), o.activateTab(s.id, { worktreeId: a.worktreeId }), o.setActiveTabType("agent-session", a.worktreeId), callRuntimeRpc(getActiveRuntimeTarget({ activeRuntimeEnvironmentId: getRuntimeEnvironmentIdForWorktree(o, a.worktreeId) }), "session.tabs.activate", {
		worktree: toRuntimeWorktreeSelector(a.worktreeId),
		tabId: `agent-session:${s.entityId}`
	}), !0) : !1;
}
function activateStructuredAgentSessionById(e) {
	let i = (useAppStore.getState().unifiedTabsByWorktree[e.worktreeId] ?? []).find((i) => i.contentType === "agent-session" && i.entityId === e.sessionId);
	return i ? activateStructuredAgentSessionTab({
		worktreeId: e.worktreeId,
		tabId: i.id
	}) : !1;
}
export { activateStructuredAgentSessionTab as n, activateStructuredAgentSessionById as t };
