import { Ih as parsePaneKey, Pd as isWebTerminalSurfaceTabId } from "./store-C9f8FDJV.js";
import { t as shallow } from "./shallow-BYgwU3E1.js";
import { r as resolveAgentStatusWorktreeId } from "./agent-status-worktree-attribution-0Thqf3S9.js";
function isEmptyValue(p) {
	return p instanceof Set || p instanceof Map ? p.size === 0 : Object.keys(p).length === 0;
}
function sameSources(p, L) {
	if (p.length !== L.length) return !1;
	for (let R = 0; R < L.length; R += 1) if (p[R] !== L[R]) return !1;
	return !0;
}
function createWorktreeRecordSelector(p) {
	let L = null;
	return (z, H) => {
		let U = p.readSources(z);
		(!L || !sameSources(L.sources, U)) && (L = {
			sources: U,
			carried: L?.byWorktreeId ?? null,
			byWorktreeId: /* @__PURE__ */ new Map()
		});
		let W = L.byWorktreeId.get(H);
		if (W !== void 0) return W;
		let G = p.build(z, H), K = L.carried?.get(H), q = G;
		return isEmptyValue(G) ? q = p.empty : K && shallow(K, G) && (q = K), L.byWorktreeId.set(H, q), q;
	};
}
var liveEntriesFullRebuildCount = 0;
function recordLiveEntriesFullRebuild() {
	liveEntriesFullRebuildCount += 1;
}
function liveEntryWorktreeId(R, B, V) {
	let H = parsePaneKey(R);
	if (!H) return;
	let U = V.get(H.tabId), W = !!B.connectionId || isWebTerminalSurfaceTabId(H.tabId);
	return W ? resolveAgentStatusWorktreeId(B, V) ?? void 0 : U ?? (B.state === "done" && !W ? void 0 : B.worktreeId);
}
function patchLiveEntriesByWorktree(p, L, R) {
	let z = p.agentStatusByPaneKey, B = [], V = 0;
	for (let p in L) {
		V += 1;
		let R = L[p], H = z[p];
		if (H !== R) {
			if (H === void 0 || H.worktreeId !== R.worktreeId || !!H.connectionId != !!R.connectionId || H.state === "done" != (R.state === "done")) return null;
			B.push({
				paneKey: p,
				entry: R
			});
		}
	}
	if (V !== Object.keys(z).length) return null;
	if (B.length === 0) return p.entriesByWorktree;
	let H = new Map(p.entriesByWorktree), U = /* @__PURE__ */ new Set();
	for (let { paneKey: p, entry: L } of B) {
		let B = liveEntryWorktreeId(p, L, R);
		if (!B) continue;
		let V = H.get(B), W = V?.indexOf(z[p]) ?? -1;
		if (!V || W < 0) return null;
		let K = U.has(B) ? V : V.slice();
		K[W] = L, U.has(B) || (U.add(B), H.set(B, K));
	}
	return H;
}
var EMPTY_SOURCE = {};
const EMPTY_WORKTREE_AGENT_ORCHESTRATION = Object.freeze({}), EMPTY_WORKTREE_AGENT_ORCHESTRATION_INDEX = /* @__PURE__ */ new Map();
function createRecord() {
	return Object.create(null);
}
var runtimeEntriesCache = null, tabMembershipCache = null, paneWorktreeProjectionCache = null, orchestrationIndexCache = null, indexBuildCount = 0;
function projectPaneWorktreeIds(p, L, R, z) {
	if (paneWorktreeProjectionCache?.runtimeSource === p && paneWorktreeProjectionCache.liveSource === R && paneWorktreeProjectionCache.retainedSource === z) return paneWorktreeProjectionCache.paneWorktreeIds;
	let B = [];
	for (let [p] of L) B.push(R[p]?.worktreeId, z[p]?.worktreeId);
	return paneWorktreeProjectionCache = {
		runtimeSource: p,
		liveSource: R,
		retainedSource: z,
		paneWorktreeIds: B
	}, B;
}
function hasSameOrderedValues(p, L) {
	if (p === L) return !0;
	if (p.length !== L.length) return !1;
	for (let R = 0; R < L.length; R += 1) if (p[R] !== L[R]) return !1;
	return !0;
}
function reuseRecordIfOrderedEqual(p, L) {
	if (!p) return L;
	let R = Object.entries(p), z = Object.entries(L);
	if (R.length !== z.length) return L;
	for (let p = 0; p < z.length; p += 1) if (R[p]?.[0] !== z[p]?.[0] || R[p]?.[1] !== z[p]?.[1]) return L;
	return p;
}
function getWorktreeIdsByTabId(p) {
	if (tabMembershipCache?.tabsSource === p) return tabMembershipCache.worktreeIdsByTabId;
	let L = /* @__PURE__ */ new Map();
	for (let [R, z] of Object.entries(p)) for (let p of z ?? []) {
		let z = p.id, B = L.get(z);
		B ? B.add(R) : L.set(z, new Set([R]));
	}
	return tabMembershipCache = {
		tabsSource: p,
		worktreeIdsByTabId: L
	}, L;
}
function buildIndex(L, R, z) {
	indexBuildCount += 1;
	let B = getWorktreeIdsByTabId(R), V = /* @__PURE__ */ new Map(), H = 0;
	for (let [R, U] of L) {
		let L = parsePaneKey(R), W = U.parentPaneKey ? parsePaneKey(U.parentPaneKey) : null, G = /* @__PURE__ */ new Set();
		if (L) for (let p of B.get(L.tabId) ?? []) G.add(p);
		if (W) for (let p of B.get(W.tabId) ?? []) G.add(p);
		let K = z[H], q = z[H + 1];
		H += 2, typeof K == "string" && G.add(K), typeof q == "string" && G.add(q);
		for (let p of G) {
			let L = V.get(p);
			L || (L = createRecord(), V.set(p, L)), L[R] = U;
		}
	}
	let U = orchestrationIndexCache?.recordsByWorktree;
	for (let [p, L] of V) V.set(p, reuseRecordIfOrderedEqual(U?.get(p), L));
	return V;
}
function selectWorktreeAgentOrchestrationIndex(p) {
	let L = p.runtimeAgentOrchestrationByPaneKey ?? EMPTY_SOURCE;
	runtimeEntriesCache?.source !== L && (runtimeEntriesCache = {
		source: L,
		entries: Object.entries(L)
	});
	let R = runtimeEntriesCache.entries;
	if (R.length === 0) return tabMembershipCache = null, paneWorktreeProjectionCache = null, orchestrationIndexCache = null, EMPTY_WORKTREE_AGENT_ORCHESTRATION_INDEX;
	let z = p.tabsByWorktree ?? EMPTY_SOURCE, B = projectPaneWorktreeIds(L, R, p.agentStatusByPaneKey ?? EMPTY_SOURCE, p.retainedAgentsByPaneKey ?? EMPTY_SOURCE);
	if (orchestrationIndexCache?.runtimeSource === L && orchestrationIndexCache.tabsSource === z && hasSameOrderedValues(orchestrationIndexCache.paneWorktreeIds, B)) return orchestrationIndexCache.paneWorktreeIds = B, orchestrationIndexCache.recordsByWorktree;
	let V = buildIndex(R, z, B);
	return orchestrationIndexCache = {
		runtimeSource: L,
		tabsSource: z,
		paneWorktreeIds: B,
		recordsByWorktree: V
	}, V;
}
function selectWorktreeAgentOrchestration(p, L) {
	return selectWorktreeAgentOrchestrationIndex(p).get(L) ?? EMPTY_WORKTREE_AGENT_ORCHESTRATION;
}
const EMPTY_LIVE_ENTRIES = Object.freeze([]), EMPTY_MIGRATION_UNSUPPORTED_ENTRIES = Object.freeze([]), EMPTY_RETAINED = Object.freeze([]), EMPTY_TERMINAL_LAYOUTS = Object.freeze({});
var EMPTY_RECORD = {}, tabWorktreeIndexCache = null, liveTabWorktreeIndexCache = null, liveEntriesByWorktreeCache = null, migrationUnsupportedByWorktreeCache = null, retainedEntriesByWorktreeCache = null;
function reuseArrayIfEqual(p, L) {
	if (!p || p.length !== L.length) return L;
	for (let R = 0; R < L.length; R += 1) if (p[R] !== L[R]) return L;
	return p;
}
function getTabIdToWorktreeId(p) {
	if (tabWorktreeIndexCache?.tabsByWorktree === p) return tabWorktreeIndexCache.tabIdToWorktreeId;
	let L = /* @__PURE__ */ new Map();
	for (let [R, z] of Object.entries(p)) for (let p of z) L.set(p.id, R);
	return tabWorktreeIndexCache = {
		tabsByWorktree: p,
		tabIdToWorktreeId: L
	}, L;
}
function getLiveTabIdToWorktreeId(p, L) {
	if (liveTabWorktreeIndexCache?.tabsByWorktree === p && liveTabWorktreeIndexCache.unifiedTabsByWorktree === L) return liveTabWorktreeIndexCache.tabIdToWorktreeId;
	let R = new Map(getTabIdToWorktreeId(p));
	for (let [p, z] of Object.entries(L ?? {})) for (let L of z) L.contentType === "agent-session" && R.set(L.id, p);
	return liveTabWorktreeIndexCache = {
		tabsByWorktree: p,
		unifiedTabsByWorktree: L,
		tabIdToWorktreeId: R
	}, R;
}
function getLiveEntriesByWorktree(p) {
	let L = p.agentStatusByPaneKey ?? EMPTY_RECORD, R = p.tabsByWorktree ?? EMPTY_RECORD, z = p.unifiedTabsByWorktree;
	if (liveEntriesByWorktreeCache?.tabsByWorktree === R && liveEntriesByWorktreeCache.unifiedTabsByWorktree === z && liveEntriesByWorktreeCache.agentStatusByPaneKey === L) return liveEntriesByWorktreeCache.entriesByWorktree;
	let B = getLiveTabIdToWorktreeId(R, z);
	if (liveEntriesByWorktreeCache?.tabsByWorktree === R && liveEntriesByWorktreeCache.unifiedTabsByWorktree === z) {
		let p = patchLiveEntriesByWorktree(liveEntriesByWorktreeCache, L, B);
		if (p) return liveEntriesByWorktreeCache = {
			tabsByWorktree: R,
			unifiedTabsByWorktree: z,
			agentStatusByPaneKey: L,
			entriesByWorktree: p
		}, p;
	}
	recordLiveEntriesFullRebuild();
	let V = liveEntriesByWorktreeCache?.entriesByWorktree, H = /* @__PURE__ */ new Map();
	for (let [p, R] of Object.entries(L)) {
		let L = liveEntryWorktreeId(p, R, B);
		if (!L) continue;
		let z = H.get(L);
		z ? z.push(R) : H.set(L, [R]);
	}
	for (let [p, L] of H) H.set(p, reuseArrayIfEqual(V?.get(p), L));
	return liveEntriesByWorktreeCache = {
		tabsByWorktree: R,
		unifiedTabsByWorktree: z,
		agentStatusByPaneKey: L,
		entriesByWorktree: H
	}, H;
}
function getMigrationUnsupportedByWorktree(L) {
	let R = L.migrationUnsupportedByPtyId ?? EMPTY_RECORD, z = L.tabsByWorktree ?? EMPTY_RECORD;
	if (migrationUnsupportedByWorktreeCache?.tabsByWorktree === z && migrationUnsupportedByWorktreeCache.migrationUnsupportedByPtyId === R) return migrationUnsupportedByWorktreeCache.entriesByWorktree;
	let B = getTabIdToWorktreeId(z), V = migrationUnsupportedByWorktreeCache?.entriesByWorktree, H = /* @__PURE__ */ new Map();
	for (let L of Object.values(R)) {
		if (!L.paneKey) continue;
		let R = parsePaneKey(L.paneKey), z = R ? B.get(R.tabId) : void 0;
		if (!z) continue;
		let V = H.get(z);
		V ? V.push(L) : H.set(z, [L]);
	}
	for (let [p, L] of H) H.set(p, reuseArrayIfEqual(V?.get(p), L));
	return migrationUnsupportedByWorktreeCache = {
		tabsByWorktree: z,
		migrationUnsupportedByPtyId: R,
		entriesByWorktree: H
	}, H;
}
function getRetainedEntriesByWorktree(p) {
	let L = p.retainedAgentsByPaneKey ?? EMPTY_RECORD;
	if (retainedEntriesByWorktreeCache?.retainedAgentsByPaneKey === L) return retainedEntriesByWorktreeCache.entriesByWorktree;
	let R = retainedEntriesByWorktreeCache?.entriesByWorktree, z = /* @__PURE__ */ new Map();
	for (let p of Object.values(L)) {
		let L = z.get(p.worktreeId);
		L ? L.push(p) : z.set(p.worktreeId, [p]);
	}
	for (let [p, L] of z) z.set(p, reuseArrayIfEqual(R?.get(p), L));
	return retainedEntriesByWorktreeCache = {
		retainedAgentsByPaneKey: L,
		entriesByWorktree: z
	}, z;
}
function selectLiveAgentStatusEntriesForWorktree(p, L) {
	return getLiveEntriesByWorktree(p).get(L) ?? EMPTY_LIVE_ENTRIES;
}
function selectMigrationUnsupportedEntriesForWorktree(p, L) {
	return getMigrationUnsupportedByWorktree(p).get(L) ?? EMPTY_MIGRATION_UNSUPPORTED_ENTRIES;
}
function selectRetainedAgentEntriesForWorktree(p, L) {
	return getRetainedEntriesByWorktree(p).get(L) ?? EMPTY_RETAINED;
}
function selectRuntimeAgentOrchestrationForWorktree(p, L) {
	return selectWorktreeAgentOrchestration(p, L);
}
const selectTerminalLayoutsForWorktree = createWorktreeRecordSelector({
	readSources: (p) => [p.tabsByWorktree ?? EMPTY_RECORD, p.terminalLayoutsByTabId ?? EMPTY_RECORD],
	empty: EMPTY_TERMINAL_LAYOUTS,
	build: (p, L) => {
		let R = {};
		for (let z of (p.tabsByWorktree ?? EMPTY_RECORD)[L] ?? []) R[z.id] = (p.terminalLayoutsByTabId ?? EMPTY_RECORD)[z.id];
		return R;
	}
});
export { getTabIdToWorktreeId as a, selectMigrationUnsupportedEntriesForWorktree as c, selectTerminalLayoutsForWorktree as d, EMPTY_WORKTREE_AGENT_ORCHESTRATION as f, createWorktreeRecordSelector as h, EMPTY_TERMINAL_LAYOUTS as i, selectRetainedAgentEntriesForWorktree as l, selectWorktreeAgentOrchestrationIndex as m, EMPTY_MIGRATION_UNSUPPORTED_ENTRIES as n, reuseArrayIfEqual as o, EMPTY_WORKTREE_AGENT_ORCHESTRATION_INDEX as p, EMPTY_RETAINED as r, selectLiveAgentStatusEntriesForWorktree as s, EMPTY_LIVE_ENTRIES as t, selectRuntimeAgentOrchestrationForWorktree as u };
