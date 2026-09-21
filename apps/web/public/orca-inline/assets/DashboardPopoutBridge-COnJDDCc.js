import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import "./i18n-CakWKPtl.js";
import "./useMountedRef-De7bTfqf.js";
import "./worktree-activation-u-wSAPlP.js";
import { Ff as getExecutionHostIdForWorktree, rS as isTuiAgentEnabled, t as useAppStore } from "./store-C9f8FDJV.js";
import "./jsx-runtime-CVy3GVGV.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import "./window-park-visibility-BBcurIcE.js";
import "./selectors-Cdg4hUQI.js";
import "./web-runtime-session-CeAC5QPx.js";
import "./agent-paste-draft-Ddp-k6QZ.js";
import "./agent-process-recognition-BUFJTuDF.js";
import "./native-chat-session-option-cache-DOY0fjiI.js";
import "./gitlab-links-Di3ozbga.js";
import "./agent-status-worktree-attribution-0Thqf3S9.js";
import "./localized-catalog-Dsz6wk5E.js";
import "./connection-context-2sxF2wah.js";
import "./web-session-tabs-sync-BfOF1RHT.js";
import "./pane-agent-owner-Ci26i0GA.js";
import "./icons-CAdlcsWl.js";
import "./agent-catalog-Cgr0_vcs.js";
import "./agent-status-connection-ownership-B1K8knO1.js";
import "./structured-agent-session-provisional-tab-PRgRPsbX.js";
import "./native-chat-launch-session-options-CUf2xfmH.js";
import "./agent-row-pane-live-title-BggTVlpJ.js";
import "./worktree-agent-rows-IU_JQSGH.js";
import "./worktree-agent-row-selectors-CkGQD3YA.js";
import "./worktree-title-derived-agent-rows-BgX4iwli.js";
import { t as runSleepWorktree } from "./sleep-worktree-flow-CjtXa2Vw.js";
import { t as launchAgentInNewTab } from "./launch-agent-in-new-tab-DNniBJOv.js";
import "./terminal-agent-paste-bracketing-B_r-vqmN.js";
import { n as revealDashboardAgent, t as buildDashboardSnapshot } from "./build-dashboard-snapshot-B67mN5cu.js";
import { o as createWorktreeAgentRowsCache } from "./dashboard-orchestration-selection-D_et0bzo.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function launchDashboardAgent({ worktreeId: e, agent: s }) {
	let u = useAppStore.getState(), f = getExecutionHostIdForWorktree(u, e);
	return !u.getKnownWorktreeById(e, f) || !isTuiAgentEnabled(s, u.settings?.disabledTuiAgents) ? !1 : (u.setActiveWorktree(e, f), launchAgentInNewTab({
		agent: s,
		worktreeId: e,
		launchSource: "unknown"
	}) !== null);
}
var PUBLISH_THROTTLE_MS = 250;
function repoIconsUnchanged(e, s) {
	if (!s) return !1;
	let c = Object.keys(e);
	return c.length === Object.keys(s).length ? c.every((c) => c in s && e[c] === s[c]) : !1;
}
function dashboardSnapshotInputsChanged(e, s) {
	return e.repos !== s.repos || e.worktreesByRepo !== s.worktreesByRepo || e.tabsByWorktree !== s.tabsByWorktree || e.unifiedTabsByWorktree !== s.unifiedTabsByWorktree || e.retainedAgentsByPaneKey !== s.retainedAgentsByPaneKey || e.migrationUnsupportedByPtyId !== s.migrationUnsupportedByPtyId || e.runtimeAgentOrchestrationByPaneKey !== s.runtimeAgentOrchestrationByPaneKey || e.terminalLayoutsByTabId !== s.terminalLayoutsByTabId || e.ptyIdsByTabId !== s.ptyIdsByTabId || e.runtimePaneTitlesByTabId !== s.runtimePaneTitlesByTabId || e.acknowledgedAgentsByPaneKey !== s.acknowledgedAgentsByPaneKey || e.hostedReviewCache !== s.hostedReviewCache || e.prCache !== s.prCache || e.settings !== s.settings || e.workspaceStatuses !== s.workspaceStatuses || e.detectedAgentIds !== s.detectedAgentIds || e.remoteDetectedAgentIds !== s.remoteDetectedAgentIds || e.runtimeDetectedAgentIds !== s.runtimeDetectedAgentIds || e.sshConnectionStates !== s.sshConnectionStates || e.sshStateByEnvironment !== s.sshStateByEnvironment || e.runtimeStatusByEnvironmentId !== s.runtimeStatusByEnvironmentId || e.paneForegroundAgentByPaneKey !== s.paneForegroundAgentByPaneKey || e.detectedWorktreesByRepo !== s.detectedWorktreesByRepo || e.folderWorkspaces !== s.folderWorkspaces || e.projectGroups !== s.projectGroups || e.sshTargetLabels !== s.sshTargetLabels || e.restoredRuntimeHostIdByWorkspaceSessionKey !== s.restoredRuntimeHostIdByWorkspaceSessionKey || e.runtimeEnvironments !== s.runtimeEnvironments || e.runtimeEnvironmentCatalogHydrated !== s.runtimeEnvironmentCatalogHydrated || e.removedRuntimeEnvironmentIds !== s.removedRuntimeEnvironmentIds;
}
function watchSnapshotInputs(e) {
	return useAppStore.subscribe((s, c) => {
		dashboardSnapshotInputsChanged(s, c) && e();
	});
}
function useDashboardPopoutBridge(e) {
	(0, import_react.useEffect)(() => {
		if (e) return window.api.dashboard.onSpawnAgent?.(launchDashboardAgent);
	}, [e]), (0, import_react.useEffect)(() => {
		if (e) return window.api.dashboard.onSleepWorkspace?.(({ worktreeId: e }) => {
			runSleepWorktree(e);
		});
	}, [e]), (0, import_react.useEffect)(() => {
		if (e) return window.api.dashboard.onRevealAgent((e) => {
			revealDashboardAgent(e);
		});
	}, [e]), (0, import_react.useEffect)(() => {
		if (e) return window.api.dashboard.onAckAgent?.((e) => {
			useAppStore.getState().acknowledgeAgents([e]);
		});
	}, [e]), (0, import_react.useEffect)(() => {
		if (!e) return;
		let s = !1, c = !1, l = null, u = null, d = 0, f = null, p = createWorktreeAgentRowsCache(), m = (e) => {
			d = Date.now();
			let s = useAppStore.getState(), c = buildDashboardSnapshot(s, d, {
				rowsCache: p,
				rowsGeneration: s.agentStatusEpoch
			}), l = c.repoIconsByRepoId ?? {};
			if (!e && repoIconsUnchanged(l, f)) {
				let { repoIconsByRepoId: e, ...s } = c;
				window.api.dashboard.publishSnapshot(s);
				return;
			}
			f = l, window.api.dashboard.publishSnapshot(c);
		}, h = () => {
			if (!s || c) return;
			let e = Date.now() - d;
			if (e >= PUBLISH_THROTTLE_MS) {
				u &&= (clearTimeout(u), null), m(!1);
				return;
			}
			u ||= setTimeout(() => {
				u = null, s && !c && m(!1);
			}, PUBLISH_THROTTLE_MS - e);
		}, g = (e) => {
			e === s || c || (s = e, s ? (l ||= watchSnapshotInputs(h), m(!0)) : (l?.(), l = null, u &&= (clearTimeout(u), null)));
		}, _ = window.api.dashboard.onPopoutOpenChanged((e) => g(e)), v = window.api.dashboard.onSnapshotRequested(() => {
			s && m(!0);
		});
		return window.api.dashboard.getPopoutOpen().then((e) => {
			!c && e && g(!0);
		}), () => {
			c = !0, _?.(), v?.(), l?.(), u && clearTimeout(u);
		};
	}, [e]);
}
function DashboardPopoutBridge() {
	return useDashboardPopoutBridge(!0), null;
}
export { DashboardPopoutBridge as default };
