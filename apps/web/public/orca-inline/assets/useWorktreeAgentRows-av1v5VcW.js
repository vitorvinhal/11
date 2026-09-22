import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { ru as isExplicitAgentStatusFresh, t as useAppStore, vf as AGENT_STATUS_STALE_AFTER_MS } from "./store-C9f8FDJV.js";
import { t as useShallow } from "./shallow-CDSK0iEX.js";
import { s as migrationUnsupportedToAgentStatusEntry } from "./agent-status-worktree-attribution-0Thqf3S9.js";
import { r as EMPTY_TABS } from "./WorktreeCardHelpers-BykCvVd_.js";
import { a as EMPTY_LIVE_PTY_IDS, c as selectRuntimePaneTitlesForWorktree, o as EMPTY_RUNTIME_PANE_TITLES, s as selectLivePtyIdsForWorktree, t as buildWorktreeAgentRows, u as applyAgentRowLineage } from "./worktree-agent-rows-IU_JQSGH.js";
import { c as selectMigrationUnsupportedEntriesForWorktree, d as selectTerminalLayoutsForWorktree, f as EMPTY_WORKTREE_AGENT_ORCHESTRATION, i as EMPTY_TERMINAL_LAYOUTS, l as selectRetainedAgentEntriesForWorktree, n as EMPTY_MIGRATION_UNSUPPORTED_ENTRIES, r as EMPTY_RETAINED, s as selectLiveAgentStatusEntriesForWorktree, t as EMPTY_LIVE_ENTRIES, u as selectRuntimeAgentOrchestrationForWorktree } from "./worktree-agent-row-selectors-CkGQD3YA.js";
function buildWorktreeAgentFreshnessSignature(a, S, w) {
	let T = "";
	for (let E of selectLiveAgentStatusEntriesForWorktree(a, S)) E.state !== "working" && E.state !== "blocked" && E.state !== "waiting" || (T += `${E.paneKey}\0${isExplicitAgentStatusFresh(E, w, 18e5) ? "1" : "0"}\0`);
	return T;
}
function createWorktreeAgentFreshnessSelector(a, S = Date.now) {
	let C = null, w = "";
	return (T) => C === T.agentStatusEpoch ? w : (C = T.agentStatusEpoch, w = buildWorktreeAgentFreshnessSignature(T, a, S()), w);
}
var import_react = /* @__PURE__ */ __toESM(require_react()), EMPTY_AGENT_ROWS = Object.freeze([]);
function useWorktreeAgentRows(a, S = !0) {
	let C = (0, import_react.useMemo)(() => createWorktreeAgentFreshnessSelector(a), [a]), T = useAppStore((C) => S ? C.tabsByWorktree[a] : EMPTY_TABS), D = useAppStore(useShallow((C) => S ? selectLiveAgentStatusEntriesForWorktree(C, a) : EMPTY_LIVE_ENTRIES)), O = useAppStore(useShallow((C) => S ? selectMigrationUnsupportedEntriesForWorktree(C, a) : EMPTY_MIGRATION_UNSUPPORTED_ENTRIES)), k = useAppStore(useShallow((C) => S ? selectRetainedAgentEntriesForWorktree(C, a) : EMPTY_RETAINED)), A = useAppStore(useShallow((C) => S ? selectRuntimePaneTitlesForWorktree(C, a) : EMPTY_RUNTIME_PANE_TITLES)), j = useAppStore(useShallow((C) => S ? selectLivePtyIdsForWorktree(C, a) : EMPTY_LIVE_PTY_IDS)), M = useAppStore(useShallow((C) => S ? selectTerminalLayoutsForWorktree(C, a) : EMPTY_TERMINAL_LAYOUTS)), N = useAppStore(useShallow((C) => S ? selectRuntimeAgentOrchestrationForWorktree(C, a) : EMPTY_WORKTREE_AGENT_ORCHESTRATION));
	return (0, import_react.useMemo)(() => {
		if (!S) return EMPTY_AGENT_ROWS;
		let a = Date.now(), C = O.length > 0 ? [...D, ...O.flatMap((a) => {
			let S = migrationUnsupportedToAgentStatusEntry(a);
			return S ? [S] : [];
		})] : D;
		return applyAgentRowLineage(buildWorktreeAgentRows({
			tabs: T ?? EMPTY_TABS,
			entries: C,
			retained: k,
			runtimePaneTitlesByTabId: A,
			ptyIdsByTabId: j,
			terminalLayoutsByTabId: M,
			runtimeAgentOrchestrationByPaneKey: N,
			now: a
		}));
	}, [
		S,
		T,
		D,
		O,
		k,
		A,
		j,
		M,
		N,
		useAppStore((a) => S ? C(a) : "")
	]);
}
export { useWorktreeAgentRows as t };
