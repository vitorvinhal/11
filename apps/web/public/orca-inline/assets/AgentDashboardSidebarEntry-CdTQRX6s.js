import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { r as cn, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as AgentQuestionIcon } from "./AgentQuestionIcon-DjFsmxm7.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import "./agent-status-worktree-attribution-0Thqf3S9.js";
import "./pane-agent-owner-Ci26i0GA.js";
import "./worktree-agent-rows-IU_JQSGH.js";
import { f as EMPTY_WORKTREE_AGENT_ORCHESTRATION } from "./worktree-agent-row-selectors-CkGQD3YA.js";
import "./worktree-title-derived-agent-rows-BgX4iwli.js";
import { c as selectWorktreeAgentRowsCached, i as collectActiveDashboardWorkspaces, l as startWorktreeAgentRowsCachePass, o as createWorktreeAgentRowsCache, r as dashboardRowBucketProjection, s as finishWorktreeAgentRowsCachePass, t as selectDashboardOrchestration, u as DASHBOARD_BUCKET_ORDER } from "./dashboard-orchestration-selection-D_et0bzo.js";
var LayoutDashboard = createLucideIcon("layout-dashboard", [
	["rect", {
		width: "7",
		height: "9",
		x: "3",
		y: "3",
		rx: "1",
		key: "10lvy0"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "14",
		y: "3",
		rx: "1",
		key: "16une8"
	}],
	["rect", {
		width: "7",
		height: "9",
		x: "14",
		y: "12",
		rx: "1",
		key: "1hutg5"
	}],
	["rect", {
		width: "7",
		height: "5",
		x: "3",
		y: "16",
		rx: "1",
		key: "ldoo1y"
	}]
]), import_react = /* @__PURE__ */ __toESM(require_react()), EMPTY_COUNTS = {
	attention: 0,
	working: 0,
	done: 0,
	idle: 0
};
function createDashboardBucketCountsCache() {
	return {
		...createWorktreeAgentRowsCache(),
		activeWorkspaces: null,
		tallyByWorktree: /* @__PURE__ */ new Map(),
		lastCounts: null
	};
}
function selectActiveDashboardWorkspaces(o, C) {
	let w = C?.activeWorkspaces;
	if (w && w.repos === o.repos && w.worktreesByRepo === o.worktreesByRepo && w.folderWorkspaces === o.folderWorkspaces && w.projectGroups === o.projectGroups) return w.workspaces;
	let T = collectActiveDashboardWorkspaces(o, !1);
	return C && (C.activeWorkspaces = {
		repos: o.repos,
		worktreesByRepo: o.worktreesByRepo,
		folderWorkspaces: o.folderWorkspaces,
		projectGroups: o.projectGroups,
		workspaces: T
	}), T;
}
function countsEqual(o, C) {
	return o.attention === C.attention && o.working === C.working && o.done === C.done && o.idle === C.idle;
}
function tallyWorktreeRows(o, C, w, T) {
	let E = T?.tallyByWorktree.get(w);
	if (E && E.rows === o && E.acknowledgedAgentsByPaneKey === C) return E.tally;
	let D = {
		attention: 0,
		working: 0,
		done: 0,
		idle: 0
	};
	for (let w of o) w.rowSource !== "subagent" && (D[dashboardRowBucketProjection(w, C).bucket] += 1);
	return T?.tallyByWorktree.set(w, {
		rows: o,
		acknowledgedAgentsByPaneKey: C,
		tally: D
	}), D;
}
function buildDashboardBucketCounts(o, C, w, T) {
	let E = {
		attention: 0,
		working: 0,
		done: 0,
		idle: 0
	}, D = selectActiveDashboardWorkspaces(o, w), { singletonOrchestration: O, orchestrationByWorktree: k } = selectDashboardOrchestration(o, D);
	w && startWorktreeAgentRowsCachePass(w);
	for (let { worktree: A } of D) {
		let D = A.id, j = tallyWorktreeRows(selectWorktreeAgentRowsCached({
			state: o,
			worktreeId: D,
			orchestration: O ?? k?.get(D) ?? EMPTY_WORKTREE_AGENT_ORCHESTRATION,
			now: C,
			generation: T,
			cache: w
		}), o.acknowledgedAgentsByPaneKey, D, w);
		E.attention += j.attention, E.working += j.working, E.done += j.done, E.idle += j.idle;
	}
	if (w) {
		for (let o of w.tallyByWorktree.keys()) w.seenWorktreeIds.has(o) || w.tallyByWorktree.delete(o);
		finishWorktreeAgentRowsCachePass(w);
	}
	let A = E.attention === 0 && E.working === 0 && E.done === 0 && E.idle === 0 ? EMPTY_COUNTS : E;
	if (!w) return A;
	let M = w.lastCounts && countsEqual(w.lastCounts, A) ? w.lastCounts : A;
	return w.lastCounts = M, M;
}
var previousState = null;
function selectAgentBucketCountState(o) {
	let C = previousState;
	return C !== null && C.repos === o.repos && C.worktreesByRepo === o.worktreesByRepo && C.tabsByWorktree === o.tabsByWorktree && C.unifiedTabsByWorktree === o.unifiedTabsByWorktree && C.agentStatusByPaneKey === o.agentStatusByPaneKey && C.retainedAgentsByPaneKey === o.retainedAgentsByPaneKey && C.migrationUnsupportedByPtyId === o.migrationUnsupportedByPtyId && C.runtimeAgentOrchestrationByPaneKey === o.runtimeAgentOrchestrationByPaneKey && C.terminalLayoutsByTabId === o.terminalLayoutsByTabId && C.ptyIdsByTabId === o.ptyIdsByTabId && C.runtimePaneTitlesByTabId === o.runtimePaneTitlesByTabId && C.folderWorkspaces === o.folderWorkspaces && C.acknowledgedAgentsByPaneKey === o.acknowledgedAgentsByPaneKey && C.agentStatusEpoch === o.agentStatusEpoch ? C : (previousState = {
		repos: o.repos,
		worktreesByRepo: o.worktreesByRepo,
		tabsByWorktree: o.tabsByWorktree,
		unifiedTabsByWorktree: o.unifiedTabsByWorktree,
		agentStatusByPaneKey: o.agentStatusByPaneKey,
		retainedAgentsByPaneKey: o.retainedAgentsByPaneKey,
		migrationUnsupportedByPtyId: o.migrationUnsupportedByPtyId,
		runtimeAgentOrchestrationByPaneKey: o.runtimeAgentOrchestrationByPaneKey,
		terminalLayoutsByTabId: o.terminalLayoutsByTabId,
		ptyIdsByTabId: o.ptyIdsByTabId,
		runtimePaneTitlesByTabId: o.runtimePaneTitlesByTabId,
		folderWorkspaces: o.folderWorkspaces,
		acknowledgedAgentsByPaneKey: o.acknowledgedAgentsByPaneKey,
		agentStatusEpoch: o.agentStatusEpoch,
		settings: null
	}, previousState);
}
function useAgentBucketCounts() {
	let o = useAppStore(selectAgentBucketCountState), C = (0, import_react.useRef)(void 0);
	return C.current ??= createDashboardBucketCountsCache(), (0, import_react.useMemo)(() => buildDashboardBucketCounts(o, Date.now(), C.current, o.agentStatusEpoch), [o]);
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), DASHBOARD_BUCKET_DOT_CLASS = {
	working: "bg-yellow-500",
	done: "bg-emerald-500",
	idle: "bg-neutral-500/50"
};
function dashboardBucketLabel(o) {
	switch (o) {
		case "attention": return translate("dashboardPopout.bucket.attention", "Needs You");
		case "working": return translate("dashboardPopout.bucket.working", "Working");
		case "done": return translate("dashboardPopout.bucket.done", "Done");
		case "idle": return translate("dashboardPopout.bucket.idle", "Idle");
	}
}
function DashboardBucketCounts({ counts: o, showIdle: C }) {
	let w = DASHBOARD_BUCKET_ORDER.filter((w) => o[w] > 0 && (w !== "idle" || C));
	return w.length === 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flex items-center gap-1.5",
		children: w.map((C) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			"aria-label": `${dashboardBucketLabel(C)}: ${o[C]}`,
			className: "inline-flex items-center gap-1 text-[10px] tabular-nums text-worktree-sidebar-foreground/55",
			children: [C === "attention" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentQuestionIcon, { className: "size-2.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", DASHBOARD_BUCKET_DOT_CLASS[C]) }), o[C]]
		}, C))
	});
}
function AgentDashboardSidebarEntry() {
	let o = useAgentBucketCounts(), C = useAppStore((o) => o.settings?.experimentalAgentDashboardShowIdle === !0), E = useAppStore((o) => o.settings?.experimentalAgentDashboardMode === "popout"), D = useAppStore((o) => o.agentDashboardDrawerOpen), k = useAppStore((o) => o.setAgentDashboardDrawerOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"data-contextual-tour-target": "agents-sidebar",
		onClick: () => {
			E ? window.api.dashboard.openPopout() : k(!D);
		},
		className: cn("flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] font-medium tracking-tight transition-colors", "text-worktree-sidebar-foreground/60 hover:bg-worktree-sidebar-foreground/8"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, {
				className: "size-4 shrink-0 text-worktree-sidebar-foreground/30",
				strokeWidth: 1.75
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1",
				children: translate("dashboard.sidebar.dashboardLabel", "Agent Dashboard")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardBucketCounts, {
				counts: o,
				showIdle: C
			})
		]
	});
}
export { AgentDashboardSidebarEntry as default };
