import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { Ag as isGitRepoKind, Ey as hasFeatureInteraction, Hv as hasEffectiveSetupCommand, Ul as localPreflightContextKey, Yv as getActiveRuntimeTarget, l_ as getProviderRuntimeContextKey, lm as checkRuntimeHooks, t as useAppStore, zl as getLocalPreflightContext } from "./store-C9f8FDJV.js";
import { T as ORCHESTRATION_SKILL_NAME, l as COMPUTER_USE_SKILL_NAME, y as ORCA_CLI_SKILL_NAME } from "./orchestration-setup-state-CE8DDbY6.js";
import { t as useActiveProjectSkillRuntime } from "./useActiveProjectSkillRuntime-DY6GkVDd.js";
import { i as useInstalledAgentSkill, t as GLOBAL_AGENT_SKILL_SOURCE_KINDS } from "./useInstalledAgentSkills-elga6kkz.js";
import { t as FEATURE_WALL_SETUP_STEPS } from "./feature-wall-setup-steps-Dq4RFB4C.js";
import { t as deriveIntegrationConnectionStatus } from "./use-integration-connection-status-DN6DmTBk.js";
function countAvailableNonMainWorktrees(e) {
	return Object.values(e).reduce((e, t) => e + t.filter((e) => !e.isMainWorktree && typeof e.path == "string" && e.path).length, 0);
}
function getFeatureWallSetupProgress(e) {
	let t = e.browserUseSkillInstalled && e.computerUseSkillInstalled && (e.computerUsePermissionsReady || e.computerUseUnavailable === !0) && e.orchestrationSkillInstalled, n = {
		"default-agent": !!e.settings?.defaultTuiAgent && e.settings?.defaultTuiAgent !== "blank",
		"add-two-repos": e.gitRepoCount >= 2,
		notifications: e.settings?.notifications.enabled === !0 && e.settings.notifications.agentTaskComplete === !0,
		"two-worktrees": countAvailableNonMainWorktrees(e.worktreesByRepo) >= 1,
		browser: hasFeatureInteraction(e.featureInteractions, "browser"),
		"task-sources": e.hasConnectedTaskSource,
		"agent-capabilities": t,
		"setup-script": e.hasSetupScript
	};
	return {
		ready: e.ready ?? !0,
		stepDone: n,
		coreDoneCount: FEATURE_WALL_SETUP_STEPS.filter((e) => n[e.id]).length,
		coreTotal: FEATURE_WALL_SETUP_STEPS.length
	};
}
var import_react = /* @__PURE__ */ __toESM(require_react());
function useSetupGuideBrowserMilestoneProgress(e, t) {
	let n = useAppStore((e) => e.setupGuideSidebarDismissed), r = useAppStore((e) => e.setupGuideBrowserMilestoneMigrated), i = useAppStore((e) => e.setupGuideBrowserMilestoneLegacyComplete), a = useAppStore((e) => e.markSetupGuideBrowserMilestoneMigrated), o = !r && e.ready ? shouldMarkBrowserMilestoneLegacyComplete({
		stepDone: e.stepDone,
		historicalSplitTerminalDone: t,
		setupGuideSidebarDismissed: n
	}) : !1, s = i || o;
	return (0, import_react.useEffect)(() => {
		r || !e.ready || a(o);
	}, [
		r,
		a,
		o,
		e.ready
	]), (0, import_react.useMemo)(() => getSetupGuideBrowserMilestoneAwareProgress(e, s), [s, e]);
}
function shouldMarkBrowserMilestoneLegacyComplete(e) {
	return e.setupGuideSidebarDismissed ? !0 : e.historicalSplitTerminalDone && FEATURE_WALL_SETUP_STEPS.every((t) => t.id === "browser" || e.stepDone[t.id]);
}
function getSetupGuideBrowserMilestoneAwareProgress(e, t) {
	if (!t) return e;
	let n = Object.fromEntries(FEATURE_WALL_SETUP_STEPS.map((e) => [e.id, !0]));
	return {
		...e,
		stepDone: n,
		coreDoneCount: FEATURE_WALL_SETUP_STEPS.length,
		coreTotal: FEATURE_WALL_SETUP_STEPS.length
	};
}
const INITIAL_SETUP_SCRIPT_PROBE_STATE = {
	signature: null,
	ready: !1,
	hasSetupScript: !1
};
function getSetupScriptProbeSignature(e, t) {
	if (!e) return null;
	let n = getActiveRuntimeTarget(e);
	return JSON.stringify({
		runtime: n.kind === "environment" ? n.environmentId : "local",
		repos: t.map((e) => ({
			id: e.id,
			commandSourcePolicy: e.hookSettings?.commandSourcePolicy ?? null,
			setup: e.hookSettings?.scripts?.setup ?? null
		}))
	});
}
function getCurrentSetupScriptProbeState(e, t) {
	return e.signature === t ? e : {
		signature: t,
		ready: !1,
		hasSetupScript: !1
	};
}
function getSetupGuideProgressReady(e) {
	return e.refreshEnabled && e.settingsLoaded && e.preflightStatusChecked && e.linearStatusChecked && e.jiraStatusChecked && !e.browserUseSkillDiscoveryLoading && !e.computerUseSkillDiscoveryLoading && !e.orchestrationSkillDiscoveryLoading && e.setupScriptProbeReady && (!e.computerUseSkillInstalled || e.computerUsePermissionStatusChecked);
}
function getComputerUsePermissionSetupState(e) {
	return {
		ready: e !== null && e.helperUnavailableReason === null && e.permissions.every((e) => e.status !== "not-granted"),
		unavailable: e !== null && e.helperUnavailableReason !== null
	};
}
var setupScriptProbeCacheListeners = /* @__PURE__ */ new Set(), setupScriptProbeCache = INITIAL_SETUP_SCRIPT_PROBE_STATE;
function readSetupScriptProbeCache() {
	return setupScriptProbeCache;
}
function subscribeSetupScriptProbeCache(e) {
	return setupScriptProbeCacheListeners.add(e), () => {
		setupScriptProbeCacheListeners.delete(e);
	};
}
function setSetupScriptProbeCache(e) {
	if (!(setupScriptProbeCache.signature === e.signature && setupScriptProbeCache.ready === e.ready && setupScriptProbeCache.hasSetupScript === e.hasSetupScript)) {
		setupScriptProbeCache = e;
		for (let e of setupScriptProbeCacheListeners) e();
	}
}
var SETUP_SCRIPT_PROBE_SETTLE_TIMEOUT_MS = 15e3;
function useSetupGuideProgress(e, t, o) {
	let c = useAppStore((e) => e.settings), l = useAppStore((e) => e.featureInteractions), u = useAppStore((e) => e.worktreesByRepo), d = useAppStore((e) => e.preflightStatus), f = useAppStore((e) => e.preflightStatusChecked), p = useAppStore((e) => e.preflightStatusContextKey), m = useAppStore((e) => e.preflightStatusError), xe = useAppStore((e) => e.preflightStatusLoading), h = useAppStore((e) => e.refreshPreflightStatus), g = useActiveProjectSkillRuntime(), Se = useAppStore((e) => e.linearStatus), _ = useAppStore((e) => e.linearStatusChecked), v = useAppStore((e) => e.linearStatusContextKey), y = useAppStore((e) => e.checkLinearConnection), Ce = useAppStore((e) => e.jiraStatus), b = useAppStore((e) => e.jiraStatusChecked), x = useAppStore((e) => e.jiraStatusContextKey), S = useAppStore((e) => e.checkJiraConnection), C = useAppStore((e) => e.repos), w = useAppStore((e) => e.activeRepoId), T = useAppStore((e) => localPreflightContextKey(getLocalPreflightContext(e))), E = (0, import_react.useSyncExternalStore)(subscribeSetupScriptProbeCache, readSetupScriptProbeCache, readSetupScriptProbeCache), [D, O] = (0, import_react.useState)(!1), [k, A] = (0, import_react.useState)(!1), [j, M] = (0, import_react.useState)(!1), { installed: N, loading: P } = useInstalledAgentSkill(ORCA_CLI_SKILL_NAME, {
		enabled: e,
		discoveryTarget: g.discoveryTarget,
		sourceKinds: GLOBAL_AGENT_SKILL_SOURCE_KINDS
	}), { installed: F, loading: I } = useInstalledAgentSkill(COMPUTER_USE_SKILL_NAME, {
		enabled: e,
		discoveryTarget: g.discoveryTarget,
		sourceKinds: GLOBAL_AGENT_SKILL_SOURCE_KINDS
	}), { installed: L, loading: we } = useInstalledAgentSkill(ORCHESTRATION_SKILL_NAME, {
		enabled: e,
		discoveryTarget: g.discoveryTarget,
		sourceKinds: GLOBAL_AGENT_SKILL_SOURCE_KINDS
	}), R = getProviderRuntimeContextKey(c), z = v === R, B = x === R, V = p === T;
	(0, import_react.useEffect)(() => {
		e && ((!V || !f) && h(), (!z || !_) && y(), (!B || !b) && S());
	}, [
		S,
		y,
		B,
		b,
		x,
		z,
		_,
		v,
		T,
		p,
		V,
		f,
		R,
		h,
		e
	]);
	let H = (0, import_react.useMemo)(() => {
		let e = C.filter(isGitRepoKind), t = w ? e.find((e) => e.id === w) ?? null : null;
		return t ? [t, ...e.filter((e) => e.id !== t.id)] : e;
	}, [w, C]), U = (0, import_react.useMemo)(() => getSetupScriptProbeSignature(c, H), [H, c]), W = (0, import_react.useRef)(U);
	W.current = U, (0, import_react.useEffect)(() => {
		if (!e || !c || U === null) return;
		let t = U, n = !1, r = window.setTimeout(() => {
			W.current === t && setSetupScriptProbeCache({
				signature: t,
				ready: !0,
				hasSetupScript: !1
			});
		}, SETUP_SCRIPT_PROBE_SETTLE_TIMEOUT_MS), a = (e) => {
			window.clearTimeout(r), W.current === t && setSetupScriptProbeCache({
				signature: t,
				ready: !0,
				hasSetupScript: e
			});
		};
		async function o() {
			for (let e of H) {
				let t = await checkRuntimeHooks(c, e.id).catch(() => null);
				if (n) return;
				if (t && hasEffectiveSetupCommand(e, t)) {
					a(!0);
					return;
				}
			}
			a(!1);
		}
		return o(), () => {
			n = !0, window.clearTimeout(r);
		};
	}, [
		H,
		c,
		U,
		e
	]);
	let G = (0, import_react.useCallback)(async (e) => {
		let t = await window.api.computerUsePermissions.getStatus().catch(() => null);
		if (e()) return;
		let n = getComputerUsePermissionSetupState(t);
		A(!0), O(n.ready), M(n.unavailable);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!e || !F) {
			A(!1), O(!1), M(!1);
			return;
		}
		let t = !1, n = () => {
			G(() => t);
		};
		n();
		let r = () => {
			n();
		}, i = () => {
			document.visibilityState === "visible" && n();
		};
		return window.addEventListener("focus", r), document.addEventListener("visibilitychange", i), () => {
			t = !0, window.removeEventListener("focus", r), document.removeEventListener("visibilitychange", i);
		};
	}, [
		F,
		G,
		e
	]);
	let K = deriveIntegrationConnectionStatus({
		preflightStatus: d,
		preflightStatusChecked: f,
		preflightStatusContextKey: p,
		preflightStatusError: m,
		preflightStatusLoading: xe,
		expectedPreflightContextKey: T,
		linearStatus: Se,
		linearStatusChecked: _,
		linearStatusContextKey: v,
		jiraStatus: Ce,
		jiraStatusChecked: b,
		jiraStatusContextKey: x,
		providerRuntimeContextKey: R
	}), q = K.trackerConnected, J = H.length, Y = getCurrentSetupScriptProbeState(E, U), X = e && F ? k : !1, Z = e && F ? D : !1, Q = e && F ? j : !1, $ = getSetupGuideProgressReady({
		refreshEnabled: e,
		settingsLoaded: c !== null,
		preflightStatusChecked: !K.checking,
		linearStatusChecked: !0,
		jiraStatusChecked: !0,
		browserUseSkillDiscoveryLoading: P,
		computerUseSkillDiscoveryLoading: I,
		orchestrationSkillDiscoveryLoading: we,
		setupScriptProbeReady: Y.ready,
		computerUseSkillInstalled: F,
		computerUsePermissionStatusChecked: X
	});
	return useSetupGuideBrowserMilestoneProgress((0, import_react.useMemo)(() => getFeatureWallSetupProgress({
		ready: $,
		settings: c,
		featureInteractions: l,
		hasConnectedTaskSource: q,
		browserUseSkillInstalled: o || N,
		computerUseSkillInstalled: F,
		computerUsePermissionsReady: Z,
		computerUseUnavailable: Q,
		orchestrationSkillInstalled: t || L,
		gitRepoCount: J,
		worktreesByRepo: u,
		hasSetupScript: Y.hasSetupScript
	}), [
		o,
		$,
		Q,
		Z,
		F,
		N,
		L,
		l,
		J,
		q,
		Y.hasSetupScript,
		t,
		c,
		u
	]), hasFeatureInteraction(l, "terminal-pane-split"));
}
export { useSetupGuideProgress as t };
