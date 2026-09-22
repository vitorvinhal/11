import { Ac as getRemoteRuntimePtyEnvironmentId, D as getHostDisplayLabelOverrides, O_ as parseAppSshPtyId, eC as getWorktreeExecutionHostId, iC as parseExecutionHostId, kg as isFolderRepo, oC as toRuntimeExecutionHostId, sC as toSshExecutionHostId, tg as folderWorkspaceToWorktree } from "./store-C9f8FDJV.js";
import { s as migrationUnsupportedToAgentStatusEntry } from "./agent-status-worktree-attribution-0Thqf3S9.js";
import { c as selectRuntimePaneTitlesForWorktree, s as selectLivePtyIdsForWorktree, t as buildWorktreeAgentRows, u as applyAgentRowLineage } from "./worktree-agent-rows-IU_JQSGH.js";
import { c as selectMigrationUnsupportedEntriesForWorktree, d as selectTerminalLayoutsForWorktree, l as selectRetainedAgentEntriesForWorktree, m as selectWorktreeAgentOrchestrationIndex, p as EMPTY_WORKTREE_AGENT_ORCHESTRATION_INDEX, s as selectLiveAgentStatusEntriesForWorktree, u as selectRuntimeAgentOrchestrationForWorktree } from "./worktree-agent-row-selectors-CkGQD3YA.js";
const DASHBOARD_BUCKET_ORDER = [
	"attention",
	"working",
	"done",
	"idle"
], DASHBOARD_MAX_LABEL_LENGTH = 1024, DASHBOARD_MAX_LAUNCH_WORKTREES = 500, DASHBOARD_MAX_MAP_WORKSPACES = 2e3;
function dashboardCardDisplayState(r) {
	return r.dotState === "working" && r.workingMode === "monitoring" ? "monitoring" : r.dotState === "done" && !r.unseen ? "idle" : r.dotState;
}
function selectRuntimeAgentOrchestrationBatch(r, C) {
	return C.length === 0 ? EMPTY_WORKTREE_AGENT_ORCHESTRATION_INDEX : selectWorktreeAgentOrchestrationIndex(r);
}
function createWorktreeAgentRowsCache() {
	return {
		byWorktree: /* @__PURE__ */ new Map(),
		computeCount: 0,
		lastComputedWorktreeIds: [],
		seenWorktreeIds: /* @__PURE__ */ new Set()
	};
}
function startWorktreeAgentRowsCachePass(r) {
	r.lastComputedWorktreeIds = [], r.seenWorktreeIds.clear();
}
function finishWorktreeAgentRowsCachePass(r) {
	for (let C of r.byWorktree.keys()) r.seenWorktreeIds.has(C) || r.byWorktree.delete(C);
}
function shallowRecordEqual(r, C) {
	if (r === C) return !0;
	let w = Object.keys(r);
	return w.length === Object.keys(C).length ? w.every((w) => Object.is(r[w], C[w])) : !1;
}
function selectWorktreeAgentRowsCached(r) {
	let { state: C, worktreeId: w, orchestration: T, now: E, generation: D, cache: O } = r;
	O?.seenWorktreeIds.add(w);
	let k = selectLiveAgentStatusEntriesForWorktree(C, w), A = selectMigrationUnsupportedEntriesForWorktree(C, w), N = selectRetainedAgentEntriesForWorktree(C, w), P = C.tabsByWorktree[w], F = selectTerminalLayoutsForWorktree(C, w), I = selectRuntimePaneTitlesForWorktree(C, w), L = selectLivePtyIdsForWorktree(C, w), R = O?.byWorktree.get(w);
	if (R && R.generation === D && R.liveEntries === k && R.migrationUnsupported === A && R.retained === N && R.tabs === P && R.orchestration === T && shallowRecordEqual(R.terminalLayoutsByTabId, F) && shallowRecordEqual(R.paneTitlesByTabId, I) && shallowRecordEqual(R.ptyIdsByTabId, L)) return R.rows;
	let z = A.length > 0 ? [...k, ...A.flatMap((r) => {
		let C = migrationUnsupportedToAgentStatusEntry(r);
		return C ? [C] : [];
	})] : k, B = applyAgentRowLineage(buildWorktreeAgentRows({
		tabs: P ?? [],
		entries: z,
		retained: N,
		runtimePaneTitlesByTabId: I,
		ptyIdsByTabId: L,
		terminalLayoutsByTabId: F,
		runtimeAgentOrchestrationByPaneKey: T,
		now: E
	}));
	return O && (O.computeCount += 1, O.lastComputedWorktreeIds.push(w), O.byWorktree.set(w, {
		generation: D,
		liveEntries: k,
		migrationUnsupported: A,
		retained: N,
		tabs: P,
		orchestration: T,
		terminalLayoutsByTabId: F,
		paneTitlesByTabId: I,
		ptyIdsByTabId: L,
		rows: B
	})), B;
}
function buildHostLabelLookup(r) {
	let w = /* @__PURE__ */ new Map();
	for (let [C, T] of r.sshTargetLabels ?? []) w.set(toSshExecutionHostId(C), T);
	for (let C of r.runtimeEnvironments ?? []) w.set(toRuntimeExecutionHostId(C.id), C.name);
	for (let [T, E] of getHostDisplayLabelOverrides(r.settings)) w.set(T, E);
	return w;
}
function remoteHostKind(r, C) {
	return r || C?.startsWith("ssh:") ? "ssh" : C && C !== "local" ? "remote" : null;
}
function collectActiveDashboardWorkspaces(r, C = !0) {
	let w = [], O = /* @__PURE__ */ new Set(), k = null, j = (w) => {
		let T = C ? parseExecutionHostId(w) : null;
		if (T?.kind !== "ssh" && T?.kind !== "runtime") return;
		k ??= buildHostLabelLookup(r);
		let D = k.get(w) ?? (T.kind === "ssh" ? T.targetId : T.environmentId);
		return D.length > 1024 ? D.slice(0, DASHBOARD_MAX_LABEL_LENGTH) : D;
	};
	for (let E of r.repos ?? []) for (let k of r.worktreesByRepo?.[E.id] ?? []) {
		if (k.isArchived) continue;
		O.add(k.id);
		let r = C ? j(getWorktreeExecutionHostId(k, E)) : void 0;
		w.push({
			projectId: E.id,
			projectName: E.displayName,
			repo: E,
			repoIcon: E.repoIcon ?? null,
			worktree: k,
			workspaceKind: C && isFolderRepo(E) ? "folder" : "worktree",
			remoteHostKind: C ? remoteHostKind(E.connectionId, k.hostId ?? E.executionHostId) : null,
			...r ? { hostLabel: r } : {}
		});
	}
	let M = new Map((r.projectGroups ?? []).map((r) => [r.id, r]));
	for (let E of r.folderWorkspaces ?? []) {
		let r = folderWorkspaceToWorktree(E);
		if (E.isArchived || O.has(r.id)) continue;
		let D = M.get(E.projectGroupId), k = C ? j(getWorktreeExecutionHostId(r, void 0)) : void 0;
		w.push({
			projectId: `folder-workspace:${E.projectGroupId}`,
			projectName: D?.name ?? E.name,
			repo: null,
			repoIcon: null,
			worktree: r,
			workspaceKind: "folder",
			remoteHostKind: C ? remoteHostKind(E.connectionId ?? D?.connectionId, r.hostId ?? D?.executionHostId) : null,
			...k ? { hostLabel: k } : {}
		});
	}
	return w;
}
function dashboardCardHostKind(C, T, E, D) {
	return C.remoteHostKind ? C.remoteHostKind : T && parseAppSshPtyId(T) ? "ssh" : T && getRemoteRuntimePtyEnvironmentId(T) ? "remote" : D === "win32" && E?.hostPlatform === "linux" ? "wsl" : "local";
}
function dashboardCardMapWorkspaceMetadata(r, C, w, E) {
	return {
		hostKind: dashboardCardHostKind(r, C, w, E),
		executionHostId: getWorktreeExecutionHostId(r.worktree, r.repo ?? void 0),
		workspaceKind: r.workspaceKind,
		...r.hostLabel ? { hostLabel: r.hostLabel } : {}
	};
}
function dashboardBucketForDotState(r) {
	switch (r) {
		case "working":
		case "monitoring": return "working";
		case "done": return "done";
		case "idle": return "idle";
		case "blocked":
		case "waiting": return "attention";
	}
}
function dashboardCardDotState(r) {
	return r === "unverifiable" ? "idle" : r;
}
function dashboardRowBucketProjection(r, C) {
	let w = r.startedAt === 0, T = dashboardCardDotState(r.state), E = r.state === "working" && r.entry.workingMode === "monitoring" ? r.entry.workingMode : void 0, D = !w && (C?.[r.paneKey] ?? 0) < r.entry.stateStartedAt;
	return {
		isTitleDerived: w,
		dotState: T,
		workingMode: E,
		unseen: D,
		bucket: dashboardBucketForDotState(dashboardCardDisplayState({
			dotState: T,
			workingMode: E,
			unseen: D
		}))
	};
}
function selectDashboardOrchestration(r, C) {
	let w = null, T = null;
	return C.length >= 2 ? T = selectRuntimeAgentOrchestrationBatch(r, C.map(({ worktree: r }) => r.id)) : C.length === 1 && (w = selectRuntimeAgentOrchestrationForWorktree(r, C[0].worktree.id)), {
		singletonOrchestration: w,
		orchestrationByWorktree: T
	};
}
export { dashboardCardMapWorkspaceMetadata as a, selectWorktreeAgentRowsCached as c, DASHBOARD_MAX_LABEL_LENGTH as d, DASHBOARD_MAX_LAUNCH_WORKTREES as f, collectActiveDashboardWorkspaces as i, startWorktreeAgentRowsCachePass as l, dashboardCardDisplayState as m, dashboardCardDotState as n, createWorktreeAgentRowsCache as o, DASHBOARD_MAX_MAP_WORKSPACES as p, dashboardRowBucketProjection as r, finishWorktreeAgentRowsCachePass as s, selectDashboardOrchestration as t, DASHBOARD_BUCKET_ORDER as u };
