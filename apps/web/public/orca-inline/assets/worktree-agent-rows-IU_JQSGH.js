import { Fh as parseLegacyNumericPaneKey, Ih as parsePaneKey, Ph as makePaneKey, Yu as tabHasLivePty, ru as isExplicitAgentStatusFresh, to as resolveRuntimePaneTitleLeafId, vf as AGENT_STATUS_STALE_AFTER_MS } from "./store-C9f8FDJV.js";
import { o as resolveDecayedAgentRowState } from "./agent-status-worktree-attribution-0Thqf3S9.js";
import { a as resolveCompatibleAgentTypeForOwner } from "./pane-agent-owner-Ci26i0GA.js";
import { h as createWorktreeRecordSelector } from "./worktree-agent-row-selectors-CkGQD3YA.js";
import { n as resolveAgentTypeFromTerminalTitle, t as buildTitleDerivedAgentRows } from "./worktree-title-derived-agent-rows-BgX4iwli.js";
function buildPaneKeyByTerminalHandle(c) {
	let O = /* @__PURE__ */ new Map();
	for (let k of c) k.entry.terminalHandle && !O.has(k.entry.terminalHandle) && O.set(k.entry.terminalHandle, k.paneKey);
	return O;
}
function resolveAgentRowParentPaneKey(c, O, k) {
	let A = c.entry.orchestration?.parentPaneKey;
	if (A && A !== c.paneKey && O.has(A)) return A;
	let j = [c.entry.orchestration?.parentTerminalHandle, c.entry.orchestration?.coordinatorHandle];
	for (let A of j) {
		let j = A ? k.get(A) : void 0;
		if (j && j !== c.paneKey && O.has(j)) return j;
	}
}
function buildAgentRowLineageTree(c) {
	let O = /* @__PURE__ */ new Map();
	for (let k of c) O.has(k.paneKey) || O.set(k.paneKey, k);
	let k = buildPaneKeyByTerminalHandle(c), A = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Set();
	for (let M of c) {
		let c = resolveAgentRowParentPaneKey(M, O, k);
		if (!c) continue;
		j.add(M.paneKey);
		let N = A.get(c);
		N ? N.push(M) : A.set(c, [M]);
	}
	let M = c.filter((c) => !j.has(c.paneKey));
	if (M.length === 0 && c.length > 0) return {
		rootRows: [...c],
		childrenByParentPaneKey: /* @__PURE__ */ new Map(),
		childPaneKeys: /* @__PURE__ */ new Set()
	};
	let N = /* @__PURE__ */ new Set();
	for (let c of M) N.add(c.paneKey);
	for (let c of N) for (let O of A.get(c) ?? []) N.add(O.paneKey);
	let P = c.filter((c) => !N.has(c.paneKey));
	if (P.length === 0) return {
		rootRows: M,
		childrenByParentPaneKey: A,
		childPaneKeys: j
	};
	let F = new Map(A), I = new Set(j), L = /* @__PURE__ */ new Set();
	for (let c of P) L.has(c.paneKey) || (L.add(c.paneKey), M.push(c), I.delete(c.paneKey), F.delete(c.paneKey));
	return {
		rootRows: M,
		childrenByParentPaneKey: F,
		childPaneKeys: I
	};
}
var ROOT_LINEAGE = {
	depth: 0,
	isFirstSibling: !0,
	isLastSibling: !0,
	childCount: 0
};
function applyAgentRowLineage(c) {
	if (c.length <= 1) return c.map((c) => ({
		...c,
		lineage: ROOT_LINEAGE
	}));
	let { rootRows: O, childrenByParentPaneKey: k, childPaneKeys: A } = buildAgentRowLineageTree(c);
	if (A.size === 0) return c.map((c) => ({
		...c,
		lineage: ROOT_LINEAGE
	}));
	let j = [], M = /* @__PURE__ */ new Set(), N = (c, O) => M.has(c.paneKey) ? !1 : (M.add(c.paneKey), j.push({
		...c,
		lineage: O
	}), !0), P = (c, O) => {
		let A = k.get(c.paneKey) ?? [];
		N(c, {
			...O,
			childCount: A.length
		}) && A.forEach((O, k) => {
			P(O, {
				depth: 1,
				parentPaneKey: c.paneKey,
				isFirstSibling: k === 0,
				isLastSibling: k === A.length - 1,
				childCount: 0
			});
		});
	};
	for (let c of O) P(c, ROOT_LINEAGE);
	for (let O of c) N(O, ROOT_LINEAGE);
	return j;
}
function dashboardCardParentPaneKey(c) {
	let O = c.entry.orchestration?.parentPaneKey;
	return c.lineage.parentPaneKey ?? (O === c.paneKey ? void 0 : O);
}
const EMPTY_RUNTIME_PANE_TITLES = Object.freeze({}), EMPTY_LIVE_PTY_IDS = Object.freeze({}), EMPTY_TERMINAL_LAYOUT_ROOTS = Object.freeze({}), selectRuntimePaneTitlesForWorktree = createWorktreeRecordSelector({
	readSources: (c) => [c.tabsByWorktree, c.runtimePaneTitlesByTabId],
	empty: EMPTY_RUNTIME_PANE_TITLES,
	build: (c, O) => {
		let k = {};
		for (let A of c.tabsByWorktree[O] ?? []) {
			let O = c.runtimePaneTitlesByTabId[A.id];
			O && (k[A.id] = O);
		}
		return k;
	}
}), selectLivePtyIdsForWorktree = createWorktreeRecordSelector({
	readSources: (c) => [c.tabsByWorktree, c.ptyIdsByTabId],
	empty: EMPTY_LIVE_PTY_IDS,
	build: (c, O) => {
		let k = {};
		for (let A of c.tabsByWorktree[O] ?? []) {
			let O = c.ptyIdsByTabId[A.id];
			O && O.length > 0 && (k[A.id] = O);
		}
		return k;
	}
}), selectTerminalLayoutRootsForWorktree = createWorktreeRecordSelector({
	readSources: (c) => [c.tabsByWorktree, c.terminalLayoutsByTabId],
	empty: EMPTY_TERMINAL_LAYOUT_ROOTS,
	build: (c, O) => {
		let k = {};
		for (let A of c.tabsByWorktree[O] ?? []) k[A.id] = c.terminalLayoutsByTabId[A.id]?.root;
		return k;
	}
});
function resolveAgentChildWorkFreshness(c) {
	return c.membership === "settled" || c.state === "idle" || c.state === "done" || c.parentEvidenceFresh && c.transportObservation === "live" ? c.state : "unverifiable";
}
function subagentRowKey(c, O) {
	return `${c}\u0000subagent:${O}`;
}
function buildSubagentChildRows(c) {
	let O = c.parentEntry.subagents;
	return !O || O.length === 0 ? [] : O.map((O) => {
		let k = resolveAgentChildWorkFreshness({
			state: O.state,
			membership: "live",
			parentEvidenceFresh: c.parentIsFresh,
			transportObservation: c.parentEntry.subagentObservation ?? "live"
		}), A = k === "done" ? "idle" : k === "monitoring" ? "working" : k, j = A !== "idle" && A !== "unverifiable" ? A : void 0, M = O.startedAt > 0 ? O.startedAt : c.parentEntry.stateStartedAt, N = subagentRowKey(c.parentEntry.paneKey, O.id);
		return {
			paneKey: N,
			entry: {
				state: j ?? "done",
				prompt: O.description ?? O.agentType ?? "",
				updatedAt: c.parentEntry.updatedAt,
				stateStartedAt: M,
				agentType: O.agentType,
				model: O.model,
				paneKey: N,
				worktreeId: c.parentEntry.worktreeId,
				tabId: c.parentEntry.tabId,
				stateHistory: [],
				orchestration: {
					taskId: `subagent:${O.id}`,
					dispatchId: `subagent:${O.id}`,
					displayName: O.description,
					parentPaneKey: c.parentEntry.paneKey
				}
			},
			tab: c.tab,
			agentType: O.agentType ?? "unknown",
			rowSource: "subagent",
			state: A,
			activationPaneKey: c.parentEntry.paneKey,
			startedAt: M
		};
	});
}
function comparableNumber(c, O = 0) {
	return typeof c == "number" && Number.isFinite(c) ? c : O;
}
function comparePaneKeysOrdinal(c, O) {
	return c < O ? -1 : c > O ? 1 : 0;
}
function compareWorktreeAgentRows(c, O) {
	return comparableNumber(c.startedAt) - comparableNumber(O.startedAt) || comparableNumber(c.tab.sortOrder) - comparableNumber(O.tab.sortOrder) || comparableNumber(c.tab.createdAt) - comparableNumber(O.tab.createdAt) || comparePaneKeysOrdinal(c.paneKey, O.paneKey);
}
function effectiveWorktreeAgentRowStartedAt(c) {
	return c.stateHistory[0]?.startedAt ?? c.stateStartedAt;
}
function tabFromWorktreeAttributedStatusEntry(c, k) {
	let A = parsePaneKey(c.paneKey);
	return !A || !c.worktreeId ? null : {
		id: A.tabId,
		ptyId: null,
		worktreeId: c.worktreeId,
		title: c.terminalTitle ?? "Agent",
		customTitle: null,
		color: null,
		sortOrder: 2 ** 53 - 1,
		createdAt: k
	};
}
function resolveRowAgentType(c, O) {
	let k = { ownerIsLaunch: !!O?.launchAgent }, A = resolveCompatibleAgentTypeForOwner(c.agentType, O?.launchAgent, k);
	return A && A !== "unknown" ? A : resolveAgentTypeFromTerminalTitle(c.terminalTitle ?? O?.title, O?.launchAgent, k) ?? O?.launchAgent ?? A ?? "unknown";
}
function orchestrationContextsEqual(c, O) {
	return c.taskId === O.taskId && c.dispatchId === O.dispatchId && c.taskTitle === O.taskTitle && c.displayName === O.displayName && c.parentTerminalHandle === O.parentTerminalHandle && c.parentPaneKey === O.parentPaneKey && c.coordinatorHandle === O.coordinatorHandle && c.orchestrationRunId === O.orchestrationRunId;
}
function entryWithRuntimeOrchestration(c, O) {
	let k = O?.[c.paneKey], A = c.orchestration && k && c.orchestration.taskId === k.taskId && c.orchestration.dispatchId === k.dispatchId;
	if (c.orchestration && k && !A) return c;
	let j = A && c.orchestration && k ? {
		...c.orchestration,
		...k
	} : k ?? c.orchestration;
	return !j || j === c.orchestration || c.orchestration && orchestrationContextsEqual(c.orchestration, j) ? c : {
		...c,
		orchestration: j
	};
}
function countTerminalLayoutLeaves(c) {
	return c ? c.type === "leaf" ? 1 : countTerminalLayoutLeaves(c.first) + countTerminalLayoutLeaves(c.second) : 0;
}
function seenStablePaneKeysForTab(c, k) {
	let A = [];
	for (let j of c) parsePaneKey(j)?.tabId === k && A.push(j);
	return A;
}
function isRetainedLegacyAliasOfSeenStablePane(O) {
	let A = parseLegacyNumericPaneKey(O.paneKey);
	if (!A) return !1;
	let j = seenStablePaneKeysForTab(O.seenPaneKeys, A.tabId);
	if (j.length === 0) return !1;
	let N = O.terminalLayoutsByTabId?.[A.tabId], P = resolveRuntimePaneTitleLeafId(N, A.numericPaneId);
	return P ? O.seenPaneKeys.has(makePaneKey(A.tabId, P)) : countTerminalLayoutLeaves(N?.root) === 1 && j.length === 1;
}
function markSeenPaneKeyForCurrentTab(A) {
	if (!A.paneKey) return;
	let j = parsePaneKey(A.paneKey);
	if (j) {
		A.currentTabsById.has(j.tabId) && A.seenPaneKeys.add(A.paneKey);
		return;
	}
	let N = parseLegacyNumericPaneKey(A.paneKey);
	if (!N || !A.currentTabsById.has(N.tabId)) return;
	A.seenPaneKeys.add(A.paneKey);
	let P = resolveRuntimePaneTitleLeafId(A.terminalLayoutsByTabId?.[N.tabId], N.numericPaneId);
	P && A.seenPaneKeys.add(makePaneKey(N.tabId, P));
}
function markCompletedWorkerParentPaneKeysSeen(c) {
	let O = (O) => {
		let k = entryWithRuntimeOrchestration(O, c.runtimeAgentOrchestrationByPaneKey);
		k.state === "done" && markSeenPaneKeyForCurrentTab({
			paneKey: k.orchestration?.parentPaneKey,
			currentTabsById: c.currentTabsById,
			terminalLayoutsByTabId: c.terminalLayoutsByTabId,
			seenPaneKeys: c.seenPaneKeys
		});
	};
	for (let k of c.entries) O(k);
	for (let k of c.retained) O(k.entry);
}
function buildWorktreeAgentRows(c) {
	let k = [], M = /* @__PURE__ */ new Set(), F = new Map(c.tabs.map((c) => [c.id, c])), I = /* @__PURE__ */ new Map();
	for (let k of c.entries) {
		let c = parsePaneKey(k.paneKey);
		if (!c) continue;
		let A = I.get(c.tabId);
		A ? A.push(k) : I.set(c.tabId, [k]);
	}
	let L = c.ptyIdsByTabId ?? {};
	for (let O of c.tabs) {
		let F = I.get(O.id) ?? [], R = tabHasLivePty(L, O.id);
		for (let A of F) {
			let F = entryWithRuntimeOrchestration(A, c.runtimeAgentOrchestrationByPaneKey), I = isExplicitAgentStatusFresh(F, c.now, AGENT_STATUS_STALE_AFTER_MS), L = !I && (F.state === "working" || F.state === "blocked" || F.state === "waiting"), z = effectiveWorktreeAgentRowStartedAt(F);
			k.push({
				paneKey: F.paneKey,
				entry: F,
				tab: O,
				agentType: resolveRowAgentType(F, O),
				rowSource: "live",
				state: L ? resolveDecayedAgentRowState(F, R) : F.state,
				startedAt: z
			}), k.push(...buildSubagentChildRows({
				parentEntry: F,
				tab: O,
				parentIsFresh: I
			})), M.add(F.paneKey);
		}
	}
	markCompletedWorkerParentPaneKeysSeen({
		entries: c.entries,
		retained: c.retained,
		runtimeAgentOrchestrationByPaneKey: c.runtimeAgentOrchestrationByPaneKey,
		terminalLayoutsByTabId: c.terminalLayoutsByTabId,
		currentTabsById: F,
		seenPaneKeys: M
	}), k.push(...buildTitleDerivedAgentRows({
		...c,
		seenPaneKeys: M
	}));
	for (let O of c.entries) {
		if (M.has(O.paneKey)) continue;
		let F = entryWithRuntimeOrchestration(O, c.runtimeAgentOrchestrationByPaneKey), I = effectiveWorktreeAgentRowStartedAt(F), R = tabFromWorktreeAttributedStatusEntry(F, I);
		if (!R) continue;
		let z = isExplicitAgentStatusFresh(F, c.now, AGENT_STATUS_STALE_AFTER_MS), B = !z && (F.state === "working" || F.state === "blocked" || F.state === "waiting");
		k.push({
			paneKey: F.paneKey,
			entry: F,
			tab: R,
			agentType: resolveRowAgentType(F, R),
			rowSource: "live",
			state: B ? resolveDecayedAgentRowState(F, tabHasLivePty(L, R.id)) : F.state,
			startedAt: I
		}), k.push(...buildSubagentChildRows({
			parentEntry: F,
			tab: R,
			parentIsFresh: z
		})), M.add(F.paneKey);
	}
	for (let O of c.retained) {
		if (M.has(O.entry.paneKey) || isRetainedLegacyAliasOfSeenStablePane({
			paneKey: O.entry.paneKey,
			terminalLayoutsByTabId: c.terminalLayoutsByTabId,
			seenPaneKeys: M
		})) continue;
		let A = entryWithRuntimeOrchestration(O.entry, c.runtimeAgentOrchestrationByPaneKey), j = F.get(O.tab.id) ?? O.tab;
		k.push({
			paneKey: A.paneKey,
			entry: A,
			tab: j,
			agentType: resolveRowAgentType(A, j),
			rowSource: "retained",
			state: "done",
			startedAt: O.startedAt
		});
	}
	return k.sort(compareWorktreeAgentRows), k;
}
export { EMPTY_LIVE_PTY_IDS as a, selectRuntimePaneTitlesForWorktree as c, dashboardCardParentPaneKey as d, buildAgentRowLineageTree as f, tabFromWorktreeAttributedStatusEntry as i, selectTerminalLayoutRootsForWorktree as l, entryWithRuntimeOrchestration as n, EMPTY_RUNTIME_PANE_TITLES as o, resolveAgentRowParentPaneKey as p, effectiveWorktreeAgentRowStartedAt as r, selectLivePtyIdsForWorktree as s, buildWorktreeAgentRows as t, applyAgentRowLineage as u };
