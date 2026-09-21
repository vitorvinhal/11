import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { $g as discoverInstalledAgentSkills, e_ as getCachedSkillDiscovery, i_ as INSTALLED_AGENT_SKILLS_REFRESHED_EVENT, r_ as INSTALLED_AGENT_SKILLS_CHANGED_EVENT, t_ as getRuntimeScopedSkillDiscoveryKey } from "./store-C9f8FDJV.js";
import { O as useActiveSkillDiscoveryRuntimeTarget, T as ORCHESTRATION_SKILL_NAME, o as markOrchestrationSetupComplete } from "./orchestration-setup-state-CE8DDbY6.js";
function hasUnreadableAgentSkillSource(e, d) {
	return e.some((e) => e.skippedReason === "unavailable" && (!d || d.includes(e.sourceKind)));
}
function getInstalledAgentSkillVerdict(e) {
	let d = e.enabled && !e.installed && (hasUnreadableAgentSkillSource(e.sources, e.sourceKinds) || !e.settled && e.error !== null);
	return {
		installedUnverifiable: d,
		error: e.error ?? (d ? translate("auto.hooks.useInstalledAgentSkills.unreadableSkillSource", "A skill folder did not respond, so this status may be incomplete.") : null)
	};
}
var import_react = /* @__PURE__ */ __toESM(require_react()), UNRESOLVED_RUNTIME_DISCOVERY_KEY = "runtime:unresolved";
const GLOBAL_AGENT_SKILL_SOURCE_KINDS = ["home"];
function normalizeSkillName(e) {
	return e.trim().toLowerCase();
}
function isOrchestrationSkillName(e) {
	return normalizeSkillName(e) === ORCHESTRATION_SKILL_NAME;
}
function basenameFromPath(e) {
	return e.split(/[\\/]/).findLast(Boolean) ?? e;
}
function hasInstalledAgentSkill(e, d, f = {}) {
	return hasInstalledAgentSkillNamed(e, [d], f);
}
function hasInstalledAgentSkillNamed(e, d, f = {}) {
	let p = new Set(d.map(normalizeSkillName));
	return e.some((e) => !e.installed || f.sourceKinds && !f.sourceKinds.includes(e.sourceKind) ? !1 : p.has(normalizeSkillName(e.name)) || p.has(normalizeSkillName(basenameFromPath(e.directoryPath))));
}
function notifyInstalledAgentSkillsRefreshed() {
	typeof window < "u" && window.dispatchEvent(new CustomEvent(INSTALLED_AGENT_SKILLS_REFRESHED_EVENT));
}
function useInstalledAgentSkill(e, d = {}) {
	return useInstalledAgentSkillNames([e], d);
}
function useInstalledAgentSkillNames(e, d = {}) {
	let { enabled: f = !0, discoveryTarget: _, sourceKinds: v } = d, y = e.map(normalizeSkillName).join("\n"), b = (0, import_react.useMemo)(() => y.split("\n"), [y]), x = useActiveSkillDiscoveryRuntimeTarget(), S = x ? getRuntimeScopedSkillDiscoveryKey(x, _, b, v) : UNRESOLVED_RUNTIME_DISCOVERY_KEY, [C, w] = (0, import_react.useState)({
		key: S,
		target: _
	});
	C.key !== S && w({
		key: S,
		target: _
	});
	let T = C.key === S ? C.target : _, E = getCachedSkillDiscovery(S), [D, O] = (0, import_react.useState)(E), [k, A] = (0, import_react.useState)(f && !E), [j, M] = (0, import_react.useState)(null), N = (0, import_react.useRef)(S), P = (0, import_react.useRef)(0), [F, I] = (0, import_react.useState)({
		discoveryTargetKey: S,
		enabled: f,
		runtimeTarget: x
	});
	N.current = S;
	let L = useMountedRef(), R = D, z = k, B = j;
	if (F.discoveryTargetKey !== S || F.enabled !== f || F.runtimeTarget !== x) {
		let e = getCachedSkillDiscovery(S), d = f && !e;
		I({
			discoveryTargetKey: S,
			enabled: f,
			runtimeTarget: x
		}), R = e, z = d, B = null, O(e), A(d), M(null);
	}
	let V = (0, import_react.useCallback)(async (e = !0, d = !0) => {
		let p = S, m = ++P.current, h = (e) => {
			L.current && m === P.current && N.current === p && e();
		};
		if (!f) return h(() => {
			A(!1);
		}), !1;
		if (d && h(() => {
			A(!0);
		}), !x) return !1;
		let g = !1;
		try {
			let d = await discoverInstalledAgentSkills(e, T, x, b, v);
			g = hasInstalledAgentSkillNamed(d.skills, b, { sourceKinds: v }), h(() => {
				O(d), M(null);
			});
		} catch (e) {
			h(() => {
				M(e instanceof Error ? e.message : "Could not scan installed skills.");
			});
		} finally {
			h(() => {
				A(!1);
			});
		}
		return g;
	}, [
		b,
		S,
		f,
		L,
		x,
		v,
		T
	]);
	(0, import_react.useEffect)(() => {
		V(!1);
	}, [V]), (0, import_react.useEffect)(() => {
		if (!f) return;
		let e = () => {
			V(!0);
		}, d = () => {
			V(!1, !1);
		};
		return window.addEventListener("focus", d), window.addEventListener(INSTALLED_AGENT_SKILLS_CHANGED_EVENT, e), window.addEventListener(INSTALLED_AGENT_SKILLS_REFRESHED_EVENT, d), () => {
			window.removeEventListener("focus", d), window.removeEventListener(INSTALLED_AGENT_SKILLS_CHANGED_EVENT, e), window.removeEventListener(INSTALLED_AGENT_SKILLS_REFRESHED_EVENT, d);
		};
	}, [f, V]);
	let H = (0, import_react.useMemo)(() => f && R ? R.skills : [], [f, R]), U = (0, import_react.useMemo)(() => f && R ? R.sources : [], [f, R]), W = (0, import_react.useMemo)(() => f ? hasInstalledAgentSkillNamed(H, b, { sourceKinds: v }) : !1, [
		b,
		f,
		H,
		v
	]), G = f && R !== null, K = {
		enabled: f,
		installed: W,
		settled: G,
		error: B,
		sources: U,
		sourceKinds: v
	};
	(0, import_react.useEffect)(() => {
		W && b.some(isOrchestrationSkillName) && markOrchestrationSetupComplete();
	}, [b, W]);
	let q = (0, import_react.useCallback)(() => V(!0), [V]);
	return {
		installed: W,
		loading: z,
		settled: G,
		...getInstalledAgentSkillVerdict(K),
		skills: H,
		sources: U,
		refresh: q
	};
}
export { useInstalledAgentSkillNames as a, useInstalledAgentSkill as i, hasInstalledAgentSkill as n, notifyInstalledAgentSkillsRefreshed as r, GLOBAL_AGENT_SKILL_SOURCE_KINDS as t };
