import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function normalizeAgentDetectionTarget(e) {
	if (e !== void 0) return e === null ? { kind: "local" } : typeof e == "string" ? {
		kind: "ssh",
		connectionId: e
	} : e;
}
function useDetectedAgents(e) {
	let i = normalizeAgentDetectionTarget(e), a = (0, import_react.useRef)(/* @__PURE__ */ new Set()), o = i === void 0, s = i?.kind, c = i?.kind === "ssh" ? i.connectionId : i?.kind === "runtime" ? i.environmentId : null, l = i?.kind === "local" ? i.worktreeId : void 0, u = i?.kind === "local" ? i.contextKey : void 0, d = s === "ssh" && c ? `ssh:${c}` : s === "runtime" && c ? `runtime:${c}` : null, f = useAppStore((e) => o ? null : s === "ssh" && c ? e.remoteDetectedAgentIds[c] ?? null : s === "runtime" && c ? e.runtimeDetectedAgentIds[c] ?? null : u ? e.localDetectedAgentIdsByContext[u] ?? null : e.detectedAgentIds), p = useAppStore((e) => o ? !0 : s === "ssh" && c ? e.isDetectingRemoteAgents[c] ?? !1 : s === "runtime" && c ? e.isDetectingRuntimeAgents[c] ?? !1 : u ? e.isDetectingLocalAgentsByContext[u] ?? !1 : e.isDetectingAgents), m = useAppStore((e) => s === "runtime" && c ? e.isRefreshingRuntimeAgents[c] ?? !1 : s === "ssh" && c ? e.isDetectingRemoteAgents[c] ?? !1 : s === "local" ? u ? e.isRefreshingLocalAgentsByContext[u] ?? !1 : e.isRefreshingAgents : !1), h = f === null && !p && !m && d !== null && a.current.has(d), g = (0, import_react.useCallback)(() => {
		if (o) return Promise.resolve([]);
		let e = useAppStore.getState();
		return s === "runtime" && c ? e.refreshRuntimeDetectedAgents(c) : s === "ssh" && c ? e.refreshRemoteDetectedAgents(c) : e.refreshDetectedAgents(l);
	}, [
		o,
		l,
		s,
		c
	]);
	return (0, import_react.useEffect)(() => {
		if (o) return;
		let e = d !== null && !a.current.has(d);
		d !== null && a.current.add(d);
		let i = useAppStore.getState();
		s === "ssh" && c ? f === null ? i.ensureRemoteDetectedAgents(c) : e && f.length > 0 ? i.refreshRemoteDetectedAgents(c) : e && i.ensureRemoteDetectedAgents(c) : s === "runtime" && c ? f === null ? i.ensureRuntimeDetectedAgents(c) : e && f.length > 0 ? i.refreshRuntimeDetectedAgents(c) : e && i.ensureRuntimeDetectedAgents(c) : f === null && i.ensureDetectedAgents(l);
	}, [
		o,
		s,
		c,
		d,
		f,
		l,
		u
	]), {
		detectedIds: f,
		isLoading: p,
		detectionFailed: h,
		isRefreshing: m,
		refresh: g
	};
}
export { useDetectedAgents as t };
