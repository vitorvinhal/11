import { Fh as parseLegacyNumericPaneKey, Ih as parsePaneKey, Pd as isWebTerminalSurfaceTabId, bf as agentStatusEvidenceObservedAt } from "./store-C9f8FDJV.js";
var cachedMigrationUnsupportedEntries = /* @__PURE__ */ new WeakMap();
function migrationUnsupportedToAgentStatusEntry(e) {
	let s = cachedMigrationUnsupportedEntries.get(e);
	if (s !== void 0) return s;
	let c = e.paneKey ? {
		state: "blocked",
		prompt: "Agent unavailable after pane identity migration",
		updatedAt: 2 ** 53 - 1,
		stateStartedAt: e.updatedAt,
		agentType: "unknown",
		paneKey: e.paneKey,
		terminalTitle: "Migration unsupported",
		stateHistory: [],
		lastAssistantMessage: "Restart this terminal so Orca can attach a stable UUID pane key to agent hooks."
	} : null;
	return cachedMigrationUnsupportedEntries.set(e, c), c;
}
function resolveDecayedAgentRowState(e, s) {
	return s && e.state !== "done" && e.restoredUnconfirmed !== !0 ? "unverifiable" : "idle";
}
function formatCompactDuration(e) {
	let s = Math.max(0, Math.floor(e / 6e4));
	if (s < 60) return `${s}m`;
	let c = Math.floor(s / 60);
	return c < 24 ? `${c}h` : `${Math.floor(c / 24)}d`;
}
function agentNoUpdateLabel(e, s) {
	return `No update in ${formatCompactDuration(s - agentStatusEvidenceObservedAt(e))}`;
}
function parseAgentStatusPaneIdentity(c) {
	if (!c) return null;
	let l = parsePaneKey(c);
	if (l) return {
		tabId: l.tabId,
		paneId: l.leafId
	};
	let u = parseLegacyNumericPaneKey(c);
	return u ? {
		tabId: u.tabId,
		paneId: u.numericPaneId
	} : null;
}
function resolveAgentStatusWorktreeId(e, s, l = e.orchestration) {
	let u = parseAgentStatusPaneIdentity(e.paneKey);
	if (e.worktreeId && (e.connectionId || isWebTerminalSurfaceTabId(u?.tabId ?? ""))) return e.worktreeId;
	let d = parseAgentStatusPaneIdentity(l?.parentPaneKey);
	return s.get(u?.tabId ?? "") ?? e.worktreeId ?? s.get(d?.tabId ?? "") ?? null;
}
function mergeAgentStatusOrchestration(e, s) {
	return e.orchestration ? !s || e.orchestration.taskId !== s.taskId || e.orchestration.dispatchId !== s.dispatchId ? e.orchestration : {
		...e.orchestration,
		...s
	} : s;
}
export { formatCompactDuration as a, agentNoUpdateLabel as i, parseAgentStatusPaneIdentity as n, resolveDecayedAgentRowState as o, resolveAgentStatusWorktreeId as r, migrationUnsupportedToAgentStatusEntry as s, mergeAgentStatusOrchestration as t };
