import { Fh as parseLegacyNumericPaneKey, Ih as parsePaneKey, Nh as isTerminalLeafId, Ph as makePaneKey, eu as agentTypeToIconAgent, ru as isExplicitAgentStatusFresh, vf as AGENT_STATUS_STALE_AFTER_MS } from "./store-C9f8FDJV.js";
import { r as resolveWorktreeStatus } from "./worktree-status-B377qdvd.js";
import { t as readAgentAttentionUnreadReason } from "./agent-attention-contract-OELg6gTq.js";
var NO_PANES = Object.freeze([]), EMPTY_INDEX = /* @__PURE__ */ new Map();
function appendPane(m, B, V) {
	let H = m.get(B);
	H ? H.push(V) : m.set(B, [V]);
}
var cachedStatusSource = null, cachedLiveIndex = EMPTY_INDEX, cachedCompletedIndex = EMPTY_INDEX;
function indexAgentStatus(m) {
	if (m === cachedStatusSource) return;
	let V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
	for (let [W, G] of Object.entries(m)) {
		let m = agentTypeToIconAgent(G?.agentType);
		if (!m) continue;
		let K = parsePaneKey(W);
		K && appendPane(G.state === "done" ? H : V, K.tabId, {
			leafId: K.leafId,
			agent: m
		});
	}
	cachedLiveIndex = V, cachedCompletedIndex = H, cachedStatusSource = m;
}
function selectLiveTabAgentPanes(m, B) {
	return indexAgentStatus(m), cachedLiveIndex.get(B) ?? NO_PANES;
}
function selectCompletedTabAgentPanes(m, B) {
	return indexAgentStatus(m), cachedCompletedIndex.get(B) ?? NO_PANES;
}
var cachedRetainedSource = null, cachedRetainedIndex = EMPTY_INDEX;
function selectRetainedTabAgentPanes(m, V) {
	if (m !== cachedRetainedSource) {
		let V = /* @__PURE__ */ new Map();
		for (let [H, W] of Object.entries(m)) {
			let m = agentTypeToIconAgent(W?.agentType);
			if (!m) continue;
			let G = parsePaneKey(H);
			G && appendPane(V, G.tabId, {
				leafId: G.leafId,
				agent: m
			});
		}
		cachedRetainedIndex = V, cachedRetainedSource = m;
	}
	return cachedRetainedIndex.get(V) ?? NO_PANES;
}
function firstTabAgentExcludingLeaf(m, B) {
	for (let V of m) if (V.leafId !== B) return V.agent;
	return null;
}
function resolveFocusedTabAgent(m, B, U) {
	let W = B?.activeLeafId;
	return W && isTerminalLeafId(W) ? agentFromStatusEntry(m[makePaneKey(U, W)]) : resolveAnyTabAgent(m, U);
}
function resolveSiblingTabAgent(m, B, H) {
	let U = B?.activeLeafId && isTerminalLeafId(B.activeLeafId) ? B.activeLeafId : null;
	return U ? resolveAnyTabAgent(m, H, U) : null;
}
function resolveAnyTabAgent(m, B, V) {
	return firstTabAgentExcludingLeaf(selectLiveTabAgentPanes(m, B), V);
}
function agentFromStatusEntry(m) {
	return !m || m.state === "done" ? null : agentTypeToIconAgent(m.agentType);
}
function resolveFocusedCompletedTabAgent(m, B, U) {
	let W = B?.activeLeafId;
	return W && isTerminalLeafId(W) ? completedAgentFromStatusEntry(m[makePaneKey(U, W)]) : resolveAnyCompletedTabAgent(m, U);
}
function resolveSiblingCompletedTabAgent(m, B, H) {
	let U = B?.activeLeafId && isTerminalLeafId(B.activeLeafId) ? B.activeLeafId : null;
	return U ? resolveAnyCompletedTabAgent(m, H, U) : null;
}
function resolveAnyCompletedTabAgent(m, B, V) {
	return firstTabAgentExcludingLeaf(selectCompletedTabAgentPanes(m, B), V);
}
function completedAgentFromStatusEntry(m) {
	return !m || m.state !== "done" ? null : agentTypeToIconAgent(m.agentType);
}
function resolveFocusedRetainedTabAgent(m, B, U) {
	let W = B?.activeLeafId;
	return W && isTerminalLeafId(W) ? agentFromRetainedEntry(m[makePaneKey(U, W)]) : resolveAnyRetainedTabAgent(m, U);
}
function resolveSiblingRetainedTabAgent(m, B, H) {
	let U = B?.activeLeafId && isTerminalLeafId(B.activeLeafId) ? B.activeLeafId : null;
	return U ? resolveAnyRetainedTabAgent(m, H, U) : null;
}
function resolveAnyRetainedTabAgent(m, B, V) {
	return firstTabAgentExcludingLeaf(selectRetainedTabAgentPanes(m, B), V);
}
function agentFromRetainedEntry(m) {
	return agentTypeToIconAgent(m?.agentType);
}
var flagsCache = null;
function getTerminalTabActivityFlags(m, B) {
	if (flagsCache && flagsCache.agentStatusByPaneKey === m && flagsCache.agentStatusEpoch === B) return flagsCache.flagsByTabId;
	let V = /* @__PURE__ */ new Map(), H = Date.now();
	for (let [B, U] of Object.entries(m ?? {})) {
		let m = parseAgentStatusPaneKey(U.paneKey || B);
		if (!m) continue;
		if (U.restoredUnconfirmed) {
			getOrCreateTerminalTabActivityFlags(V, m.tabId).paneIds.add(m.paneId);
			continue;
		}
		if (!isExplicitAgentStatusFresh(U, H, 18e5)) {
			getOrCreateTerminalTabActivityFlags(V, m.tabId).stalePaneIds.add(m.paneId);
			continue;
		}
		let G = getOrCreateTerminalTabActivityFlags(V, m.tabId);
		G.paneIds.add(m.paneId), U.state === "blocked" || U.state === "waiting" ? G.hasPermission = !0 : U.state === "working" ? U.workingMode === "monitoring" ? G.hasLiveMonitoring = !0 : G.hasLiveWorking = !0 : U.interrupted === !0 ? G.hasInterrupted = !0 : U.state === "done" && (G.hasLiveDone = !0);
	}
	return flagsCache = {
		agentStatusByPaneKey: m,
		agentStatusEpoch: B,
		flagsByTabId: V
	}, V;
}
function getOrCreateTerminalTabActivityFlags(m, B) {
	let V = m.get(B);
	return V || (V = {
		hasPermission: !1,
		hasLiveWorking: !1,
		hasLiveMonitoring: !1,
		hasInterrupted: !1,
		hasLiveDone: !1,
		paneIds: /* @__PURE__ */ new Set(),
		stalePaneIds: /* @__PURE__ */ new Set()
	}, m.set(B, V)), V;
}
function parseAgentStatusPaneKey(V) {
	let H = parsePaneKey(V);
	if (H) return {
		tabId: H.tabId,
		paneId: H.leafId
	};
	let U = parseLegacyNumericPaneKey(V);
	return U ? {
		tabId: U.tabId,
		paneId: U.numericPaneId
	} : null;
}
var EMPTY_PANE_IDS = /* @__PURE__ */ new Set();
function resolveTerminalTabActivityStatus({ tab: m, agentStatusByPaneKey: B, agentStatusEpoch: V, runtimePaneTitlesByTabId: H, ptyIdsByTabId: U, terminalLayout: W }) {
	let G = getTerminalTabActivityFlags(B, V).get(m.id);
	return resolveWorktreeStatus({
		tabs: [m],
		browserTabs: [],
		ptyIdsByTabId: U ?? {},
		runtimePaneTitlesByTabId: H ?? {},
		agentStatusPaneIdsByTabId: { [m.id]: G?.paneIds ?? EMPTY_PANE_IDS },
		stalePaneIdsByTabId: { [m.id]: G?.stalePaneIds ?? EMPTY_PANE_IDS },
		terminalLayoutsByTabId: W ? { [m.id]: W } : void 0,
		hasPermission: G?.hasPermission ?? !1,
		hasLiveWorking: G?.hasLiveWorking ?? !1,
		hasLiveMonitoring: G?.hasLiveMonitoring ?? !1,
		hasInterrupted: G?.hasInterrupted ?? !1,
		hasLiveDone: G?.hasLiveDone ?? !1,
		hasRetainedDone: !1
	});
}
function isTerminalTabActivityLive(m) {
	return m === "working" || m === "monitoring" || m === "permission";
}
function resolveTerminalTabAttentionBadge({ status: m, hasUnread: B }) {
	return m === "working" ? "working" : m === "permission" ? "permission" : m === "monitoring" ? "monitoring" : B ? "unread" : m === "done" ? "done" : m === "interrupted" ? "interrupted" : null;
}
function terminalTabActivityToAgentDotState(m) {
	switch (m) {
		case "working":
		case "monitoring":
		case "permission":
		case "interrupted":
		case "done": return m;
		case "active":
		case "inactive": return null;
	}
}
function terminalTabHasUnreadActivity({ terminalTabId: m, unreadTerminalTabs: B, unreadAgentCompletionPanes: V }) {
	return readAgentAttentionUnreadReason(B[m]) !== null || hasUnreadAgentCompletionForTerminalTab(V, m);
}
var unreadAgentCompletionTabIdsBySnapshot = /* @__PURE__ */ new WeakMap();
function getUnreadAgentCompletionTabIds(m) {
	let B = unreadAgentCompletionTabIdsBySnapshot.get(m);
	if (B) return B;
	let V = /* @__PURE__ */ new Set();
	for (let B of Object.keys(m)) {
		if (!m[B]) continue;
		let H = B.indexOf(":");
		V.add(H === -1 ? B : B.slice(0, H));
	}
	return unreadAgentCompletionTabIdsBySnapshot.set(m, V), V;
}
function hasUnreadAgentCompletionForTerminalTab(m, B) {
	return m ? getUnreadAgentCompletionTabIds(m).has(B) : !1;
}
export { terminalTabHasUnreadActivity as a, resolveFocusedTabAgent as c, resolveSiblingTabAgent as d, terminalTabActivityToAgentDotState as i, resolveSiblingCompletedTabAgent as l, resolveTerminalTabActivityStatus as n, resolveFocusedCompletedTabAgent as o, resolveTerminalTabAttentionBadge as r, resolveFocusedRetainedTabAgent as s, isTerminalTabActivityLive as t, resolveSiblingRetainedTabAgent as u };
