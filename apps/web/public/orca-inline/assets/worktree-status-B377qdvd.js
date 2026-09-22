import { Yu as tabHasLivePty, no as resolveRuntimePaneTitleLeafIdFromRoot, nu as classifyTitleActivity, pu as isSyntheticAgentPermissionTitle, vu as containsAgentSpinnerGlyph } from "./store-C9f8FDJV.js";
import { n as resolveAgentTypeFromTerminalTitle } from "./worktree-title-derived-agent-rows-BgX4iwli.js";
var STATUS_LABELS = {
	active: "Active",
	working: "Working",
	monitoring: "Monitoring background tasks",
	permission: "Needs permission",
	interrupted: "Interrupted",
	done: "Done",
	inactive: "Inactive"
};
function getWorktreeStatus(n, r, i, a = {}, o = {}) {
	let s = n.filter((n) => tabHasLivePty(i, n.id)), c = (e) => s.some((n) => tabHasStatus(n, a, e, o));
	return o.liveAgentStatus === "permission" || c("permission") ? "permission" : o.liveAgentStatus === "working" || c("working") ? "working" : o.liveAgentStatus === "monitoring" ? "monitoring" : s.length > 0 || r.length > 0 ? "active" : "inactive";
}
function tabHasStatus(e, a, o, s) {
	let c = s.agentStatusPaneIdsByTabId?.[e.id], l = suppressingPaneIds(e.id, o, s), d = a[e.id];
	if (d && Object.keys(d).length > 0) {
		let a = s.terminalLayoutRootsByTabId?.[e.id] ?? s.terminalLayoutsByTabId?.[e.id]?.root, u = Object.entries(d);
		for (let [s, d] of u) {
			let f = o === "permission" && isSyntheticAgentPermissionTitle(d) ? l : c, p = resolveRuntimePaneTitleLeafIdFromRoot(a, s), m = p === null && f?.size === 1 && u.length === 1;
			if (!(f?.has(s) || p !== null && f?.has(p) || m) && classifyTitleActivity(d) === o && titleStatusIsAgentAttributable(d, e.launchAgent)) return !0;
		}
		return !1;
	}
	let f = o === "permission" && isSyntheticAgentPermissionTitle(e.title) ? l : c;
	return f && f.size > 0 ? !1 : classifyTitleActivity(e.title) === o && titleStatusIsAgentAttributable(e.title, e.launchAgent);
}
function suppressingPaneIds(e, n, r) {
	let i = r.agentStatusPaneIdsByTabId?.[e];
	if (n !== "permission") return i;
	let a = r.stalePaneIdsByTabId?.[e];
	return !a || a.size === 0 ? i : !i || i.size === 0 ? a : new Set([...i, ...a]);
}
function titleStatusIsAgentAttributable(e, n) {
	return resolveAgentTypeFromTerminalTitle(e) === null ? containsAgentSpinnerGlyph(e) && !!n : !0;
}
function getWorktreeStatusLabel(e) {
	return STATUS_LABELS[e];
}
function resolveWorktreeStatus(e) {
	let n = getWorktreeStatus(e.tabs, e.browserTabs, e.ptyIdsByTabId, e.runtimePaneTitlesByTabId ?? {}, {
		agentStatusPaneIdsByTabId: e.agentStatusPaneIdsByTabId,
		stalePaneIdsByTabId: e.stalePaneIdsByTabId,
		terminalLayoutsByTabId: e.terminalLayoutsByTabId,
		terminalLayoutRootsByTabId: e.terminalLayoutRootsByTabId
	});
	return e.hasPermission || n === "permission" ? "permission" : e.hasLiveWorking || n === "working" ? "working" : e.hasLiveMonitoring || n === "monitoring" ? "monitoring" : e.hasInterrupted ? "interrupted" : e.hasLiveDone || e.hasRetainedDone ? "done" : n;
}
export { getWorktreeStatusLabel as n, resolveWorktreeStatus as r, getWorktreeStatus as t };
