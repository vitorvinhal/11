import { Av as projectHostSetupProjectionFromRepos, Tv as getProjectIdentityKey, ZS as getRepoExecutionHostId, _m as getIndexedWorktreeMap, hb as FLOATING_TERMINAL_WORKTREE_ID, hm as getIndexedRepoMap, iC as parseExecutionHostId, mm as getIndexedAllWorktrees, t as useAppStore, vm as getIndexedWorktreesById } from "./store-C9f8FDJV.js";
import { t as useShallow } from "./shallow-CDSK0iEX.js";
function normalizeHydratedProjectHostSetupProjection(h, G, K, q) {
	let J = new Map(h.map((h) => [h.id, h])), Y = new Set(q.projects.map((h) => h.id)), X = /* @__PURE__ */ new Map(), Z = !1, Q = K.map((h) => {
		let G = J.get(h.repoId) ?? J.get(h.id);
		if (!G) return h;
		let K = getProjectIdentityKey(G);
		return K === h.projectId || K === `repo:${G.id}` ? h : (Z = !0, X.set(h.projectId, K), {
			...h,
			projectId: K
		});
	});
	return {
		projects: G.flatMap((h) => {
			let W = X.get(h.id);
			return !W || W === h.id ? [h] : Y.has(W) ? (Z = !0, []) : (Z = !0, [{
				...h,
				id: W
			}]);
		}),
		setups: Q,
		changed: Z
	};
}
var projectHostSetupProjectionCache = /* @__PURE__ */ new WeakMap(), providedProjectHostSetupProjectionCache = /* @__PURE__ */ new WeakMap(), mergedProjectHostSetupProjectionCache = /* @__PURE__ */ new WeakMap(), normalizedProjectHostSetupProjectionCache = /* @__PURE__ */ new WeakMap(), stateProjectHostSetupProjectionCache = null;
function getCachedStateProjectHostSetupProjection(h, W, G) {
	let K = stateProjectHostSetupProjectionCache;
	return K && K.repos === h && K.projects === W && K.setups === G ? K.projection : void 0;
}
function cacheStateProjectHostSetupProjection(h, W, G, K) {
	stateProjectHostSetupProjectionCache = {
		repos: h,
		projects: W,
		setups: G,
		projection: K
	};
}
function getCachedProjectHostSetupProjection(W) {
	let G = projectHostSetupProjectionCache.get(W);
	if (G) return G;
	let K = projectHostSetupProjectionFromRepos(W);
	return projectHostSetupProjectionCache.set(W, K), K;
}
function getCachedProvidedProjectHostSetupProjection(h, W) {
	let G = providedProjectHostSetupProjectionCache.get(h), K = G?.get(W);
	if (K) return K;
	let q = {
		projects: h,
		setups: W
	}, J = G ?? /* @__PURE__ */ new WeakMap();
	return J.set(W, q), G || providedProjectHostSetupProjectionCache.set(h, J), q;
}
function mergeById(h, W) {
	let G = [...h], K = new Map(G.map((h, W) => [h.id, W]));
	for (let h of W) {
		let W = K.get(h.id);
		W === void 0 ? (K.set(h.id, G.length), G.push(h)) : G[W] = h;
	}
	return G;
}
function mergeProjectHostSetupProjection(h, W, G) {
	let K = mergedProjectHostSetupProjectionCache.get(h), q = K?.get(W), J = q?.get(G);
	if (J) return J;
	let Y = getCachedProjectHostSetupProjection(h), X = normalizeHydratedProjectHostSetupProjection(h, W, G, Y), Z = {
		projects: mergeById(Y.projects, X.projects),
		setups: mergeById(Y.setups, X.setups)
	}, Q = K ?? /* @__PURE__ */ new WeakMap(), $ = q ?? /* @__PURE__ */ new WeakMap();
	return $.set(G, Z), q || Q.set(W, $), K || mergedProjectHostSetupProjectionCache.set(h, Q), Z;
}
function getCachedNormalizedProjectHostSetupProjection(h, W, G, K, q) {
	let J = normalizedProjectHostSetupProjectionCache.get(h), Y = J?.get(W), X = Y?.get(G);
	if (X) return X;
	let Z = {
		projects: mergeById(K.projects, q.projects),
		setups: mergeById(K.setups, q.setups)
	}, Q = J ?? /* @__PURE__ */ new WeakMap(), $ = Y ?? /* @__PURE__ */ new WeakMap();
	return $.set(G, Z), Y || Q.set(W, $), J || normalizedProjectHostSetupProjectionCache.set(h, Q), Z;
}
function getProjectHostSetupProjectionFromState(h) {
	let W = h.projects, G = h.projectHostSetups;
	if (W && G) {
		let K = getCachedStateProjectHostSetupProjection(h.repos, W, G);
		if (K) return K;
		let q = new Set(h.repos.map((h) => h.id)), J = /* @__PURE__ */ new Set();
		for (let h of G) {
			let W = typeof h.repoId == "string" ? h.repoId : "";
			q.has(W) && J.add(W), q.has(h.id) && J.add(h.id);
		}
		let Y;
		if (h.repos.length > 0 && J.size < q.size) Y = mergeProjectHostSetupProjection(h.repos, W, G);
		else {
			let K = getCachedProjectHostSetupProjection(h.repos), q = normalizeHydratedProjectHostSetupProjection(h.repos, W, G, K);
			Y = q.changed ? getCachedNormalizedProjectHostSetupProjection(h.repos, W, G, K, q) : getCachedProvidedProjectHostSetupProjection(W, G);
		}
		return cacheStateProjectHostSetupProjection(h.repos, W, G, Y), Y;
	}
	return getCachedProjectHostSetupProjection(h.repos);
}
var EMPTY_WORKTREES = [], EMPTY_TABS = [], EMPTY_BROWSER_TABS = [], EMPTY_UNIFIED_TABS = [], hasAnyWorktreesCache = /* @__PURE__ */ new WeakMap(), floatingVisibleTabCountCache = null;
function getCachedHasAnyWorktrees(h) {
	let W = hasAnyWorktreesCache.get(h);
	if (W !== void 0) return W;
	let G = Object.values(h).some((h) => h.length > 0);
	return hasAnyWorktreesCache.set(h, G), G;
}
function selectFloatingVisibleTabCount(h) {
	let W = h.tabsByWorktree["global-floating-terminal"] ?? EMPTY_TABS, G = h.browserTabsByWorktree["global-floating-terminal"] ?? EMPTY_BROWSER_TABS, K = h.unifiedTabsByWorktree["global-floating-terminal"] ?? EMPTY_UNIFIED_TABS, q = floatingVisibleTabCountCache;
	if (q && q.terminalTabs === W && q.browserTabs === G && q.openFiles === h.openFiles && q.unifiedTabs === K) return q.count;
	let J = /* @__PURE__ */ new Set();
	for (let h of W) J.add(h.id);
	let Y = /* @__PURE__ */ new Set();
	for (let h of G) Y.add(h.id);
	let X = /* @__PURE__ */ new Set();
	for (let W of h.openFiles) W.worktreeId === "global-floating-terminal" && X.add(W.id);
	let Z = 0;
	for (let h of K) h.contentType === "terminal" ? Z += J.has(h.entityId) ? 1 : 0 : h.contentType === "browser" ? Z += Y.has(h.entityId) ? 1 : 0 : h.contentType === "simulator" ? Z += 1 : Z += X.has(h.entityId) ? 1 : 0;
	return floatingVisibleTabCountCache = {
		terminalTabs: W,
		browserTabs: G,
		openFiles: h.openFiles,
		unifiedTabs: K,
		count: Z
	}, Z;
}
var floatingWorkspaceUnreadCache = null;
function selectFloatingWorkspaceHasUnread(h) {
	let W = h.tabsByWorktree["global-floating-terminal"] ?? EMPTY_TABS, G = floatingWorkspaceUnreadCache;
	if (G && G.tabs === W && G.unreadTerminalTabs === h.unreadTerminalTabs && G.unreadAgentCompletionPanes === h.unreadAgentCompletionPanes) return G.hasUnread;
	let K = !1;
	if (W.length > 0) {
		let G = /* @__PURE__ */ new Set();
		for (let q of W) {
			if (h.unreadTerminalTabs[q.id]) {
				K = !0;
				break;
			}
			G.add(q.id);
		}
		if (!K) for (let W of Object.keys(h.unreadAgentCompletionPanes)) {
			let h = W.indexOf(":"), q = h === -1 ? W : W.slice(0, h);
			if (G.has(q)) {
				K = !0;
				break;
			}
		}
	}
	return floatingWorkspaceUnreadCache = {
		tabs: W,
		unreadTerminalTabs: h.unreadTerminalTabs,
		unreadAgentCompletionPanes: h.unreadAgentCompletionPanes,
		hasUnread: K
	}, K;
}
function getAllWorktreesFromState(h) {
	return getIndexedAllWorktrees(h.worktreesByRepo);
}
function getWorktreeMapFromState(h) {
	return getIndexedWorktreeMap(h.worktreesByRepo);
}
function getWorktreeOnHostFromState(h, W, G) {
	let K = getIndexedWorktreesById(h.worktreesByRepo, W);
	return G ? K.find((h) => h.hostId === G) : K[0];
}
function getHasAnyWorktreesFromState(h) {
	return getCachedHasAnyWorktrees(h.worktreesByRepo);
}
function getRepoMapFromState(h) {
	return getIndexedRepoMap(h.repos);
}
const useRepos = () => useAppStore((h) => h.repos), useActiveRepo = () => useAppStore(useShallow((h) => selectRepoByIdForActiveWorkspace(h, h.activeRepoId))), useRepoMap = () => useAppStore((h) => getIndexedRepoMap(h.repos));
var activeWorkspaceRepoCache = /* @__PURE__ */ new WeakMap();
function resolveRepoOnActiveWorkspaceHost(h, W, K) {
	let q = h.repos.filter((h) => h.id === W), J = q.find((h) => getRepoExecutionHostId(h) === K);
	if (J) return J;
	if (parseExecutionHostId(K)?.kind !== "ssh") return null;
	let X = q.filter((h) => parseExecutionHostId(getRepoExecutionHostId(h))?.kind === "runtime");
	return X.length === 1 ? X[0] : null;
}
function selectRepoByIdForActiveWorkspace(h, W) {
	if (!W) return null;
	let G = getIndexedRepoMap(h.repos).get(W) ?? null, K = h.activeWorkspaceExecutionHostId;
	if (W !== h.activeRepoId || !K) return G;
	let q = activeWorkspaceRepoCache.get(h.repos);
	q || (q = /* @__PURE__ */ new Map(), activeWorkspaceRepoCache.set(h.repos, q));
	let Y = `${K}\u0000${W}`, X = q.get(Y);
	if (X !== void 0) return X;
	let Z = resolveRepoOnActiveWorkspaceHost(h, W, K);
	return q.set(Y, Z), Z;
}
const useRepoById = (h) => useAppStore((W) => selectRepoByIdForActiveWorkspace(W, h)), useProjectHostSetupProjection = () => useAppStore((h) => getProjectHostSetupProjectionFromState(h)), useActiveWorktreeId = () => useAppStore((h) => h.activeWorktreeId), useWorktreesForRepo = (h) => useAppStore((W) => h ? W.worktreesByRepo[h] ?? EMPTY_WORKTREES : EMPTY_WORKTREES), useAllWorktrees = () => useAppStore((h) => getIndexedAllWorktrees(h.worktreesByRepo)), useWorktreeMap = () => useAppStore((h) => getIndexedWorktreeMap(h.worktreesByRepo)), useWorktreeById = (h, W) => useAppStore((G) => h ? G.getKnownWorktreeById(h, W ?? (h === G.activeWorktreeId ? G.activeWorkspaceExecutionHostId ?? void 0 : void 0)) ?? null : null), useActiveWorktree = () => {
	let h = useActiveWorktreeId();
	return useAppStore((W) => h ? W.getKnownWorktreeById(h, W.activeWorkspaceExecutionHostId ?? void 0) ?? null : null);
};
export { useWorktreeMap as _, getWorktreeOnHostFromState as a, useActiveRepo as c, useAllWorktrees as d, useProjectHostSetupProjection as f, useWorktreeById as g, useRepos as h, getWorktreeMapFromState as i, useActiveWorktree as l, useRepoMap as m, getHasAnyWorktreesFromState as n, selectFloatingVisibleTabCount as o, useRepoById as p, getRepoMapFromState as r, selectFloatingWorkspaceHasUnread as s, getAllWorktreesFromState as t, useActiveWorktreeId as u, useWorktreesForRepo as v, getProjectHostSetupProjectionFromState as y };
