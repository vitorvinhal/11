import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { Bl as getLocalProjectExecutionRuntimeContext, Rl as getGlobalWindowsExecutionRuntimeContext, Yl as useWindowsTerminalCapabilities, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as useShallow } from "./shallow-CDSK0iEX.js";
import { O as useActiveSkillDiscoveryRuntimeTarget } from "./orchestration-setup-state-CE8DDbY6.js";
import { i as getProjectSkillInstallDisabledReason, n as getProjectAgentSkillTerminalShellOverride, r as getProjectSkillDiscoveryTarget, t as getProjectAgentSkillRuntime } from "./project-skill-runtime-C8KnQgBO.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), EMPTY_ACTIVE_PROJECT_SKILL_RUNTIME = Object.freeze({
	installDisabledReason: null,
	canUseLocalSkillFreshness: !1
});
function shouldUseLocalSkillFreshness(e, p) {
	return e?.kind === "local" && p?.runtime !== "wsl";
}
function hasLocalSkillRuntimeAuthority(e) {
	return e?.kind === "local";
}
function activeProjectSkillRuntimeIdentity(e) {
	return JSON.stringify(e);
}
function wslOnly(e) {
	if (e) return e.status === "repair-required" || e.runtime.kind === "wsl" ? e : void 0;
}
function useActiveProjectSkillRuntime() {
	let e = useAppStore(useShallow((e) => ({
		activeRepoId: e.activeRepoId,
		activeWorktreeId: e.activeWorktreeId,
		projects: e.projects,
		repos: e.repos,
		settings: e.settings,
		worktreesByRepo: e.worktreesByRepo
	}))), p = getCurrentPlatform(), y = useWindowsTerminalCapabilities(p === "win32"), b = useActiveSkillDiscoveryRuntimeTarget(), x = (0, import_react.useMemo)(() => {
		let g = {
			wslAvailable: y.isLoading ? void 0 : y.wslAvailable,
			availableWslDistros: y.isLoading ? null : y.wslDistros
		}, _ = getLocalProjectExecutionRuntimeContext(e, void 0, p, g) ?? (hasLocalSkillRuntimeAuthority(b) ? wslOnly(getGlobalWindowsExecutionRuntimeContext(e, void 0, p, g)) : void 0);
		if (!_) {
			let m = hasLocalSkillRuntimeAuthority(b) ? getProjectAgentSkillTerminalShellOverride(p, e.settings, void 0) : void 0, h = shouldUseLocalSkillFreshness(b);
			return !m && !h ? EMPTY_ACTIVE_PROJECT_SKILL_RUNTIME : {
				installDisabledReason: null,
				terminalShellOverride: m,
				canUseLocalSkillFreshness: h
			};
		}
		let v = getProjectAgentSkillRuntime(_, p);
		return {
			projectRuntime: _,
			discoveryTarget: getProjectSkillDiscoveryTarget(_),
			agentRuntime: v,
			terminalShellOverride: getProjectAgentSkillTerminalShellOverride(p, e.settings, v),
			installDisabledReason: getProjectSkillInstallDisabledReason(_),
			canUseLocalSkillFreshness: shouldUseLocalSkillFreshness(b, v)
		};
	}, [
		p,
		e,
		b,
		y
	]), [S, C] = (0, import_react.useState)(x), w = activeProjectSkillRuntimeIdentity(S), T = activeProjectSkillRuntimeIdentity(x);
	return w !== T && C(x), w === T ? S : x;
}
function getCurrentPlatform() {
	let e = typeof window > "u" ? void 0 : window.api?.platform?.get?.()?.platform;
	if (e) return e;
	let p = typeof navigator > "u" ? "" : navigator.userAgent;
	return p.includes("Windows") ? "win32" : p.includes("Mac") ? "darwin" : "linux";
}
export { useActiveProjectSkillRuntime as t };
