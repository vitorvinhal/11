import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { U as buildSidebarHostOptions, W as buildSidebarHostScopeOptions } from "./worktree-activation-u-wSAPlP.js";
import { D as getHostDisplayLabelOverrides, t as useAppStore } from "./store-C9f8FDJV.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function useSidebarHostScopeOptions() {
	let e = useAppStore((e) => e.repos), o = useAppStore((e) => e.sshTargetLabels), s = useAppStore((e) => e.sshConnectionStates), c = useAppStore((e) => e.settings), l = useAppStore((e) => e.runtimeEnvironments), u = useAppStore((e) => e.runtimeStatusByEnvironmentId), d = (0, import_react.useMemo)(() => getHostDisplayLabelOverrides(c), [c]), f = (0, import_react.useMemo)(() => buildSidebarHostOptions({
		repos: e,
		sshTargetLabels: o,
		sshConnectionStates: s,
		settings: c,
		runtimeEnvironments: l,
		runtimeStatusByEnvironmentId: u,
		hostLabelOverrides: d
	}), [
		e,
		o,
		s,
		c,
		l,
		u,
		d
	]);
	return {
		hostOptions: f,
		hostScopeOptions: (0, import_react.useMemo)(() => buildSidebarHostScopeOptions(f), [f])
	};
}
export { useSidebarHostScopeOptions as t };
