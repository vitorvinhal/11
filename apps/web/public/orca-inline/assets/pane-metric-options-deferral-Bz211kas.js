function recordRendererCrashBreadcrumb(l, E) {
	if (!(typeof window > "u")) try {
		window.api?.crashReports.recordBreadcrumb({
			name: l,
			...E ? { data: E } : {}
		});
	} catch {}
}
const TERMINAL_WEBGL_DIAGNOSTIC_BREADCRUMB = "terminal_webgl_diagnostic";
var recorder = null;
function setTerminalWebglDiagnosticRecorder(l) {
	recorder = l;
}
function recordTerminalWebglDiagnostic(l, E) {
	recorder?.(l, E);
}
var contributors = /* @__PURE__ */ new Map(), MAX_PROFILE_CONTRIBUTORS = 64, MAX_CONTRIBUTOR_NAME_LENGTH = 64;
function registerRendererMemoryProfileContributor(l, E) {
	return l.length === 0 || l.length > MAX_CONTRIBUTOR_NAME_LENGTH || !contributors.has(l) && contributors.size >= MAX_PROFILE_CONTRIBUTORS ? () => void 0 : (contributors.set(l, E), () => {
		contributors.get(l) === E && contributors.delete(l);
	});
}
function summarizeStateCollectionSizes(l, E) {
	if (typeof l != "object" || !l) return {};
	let D = [];
	for (let [E, O] of Object.entries(l)) {
		let l = collectionSize(O);
		l !== null && l > 0 && D.push([E, l]);
	}
	return D.sort((l, E) => E[1] - l[1]), Object.fromEntries(D.slice(0, E));
}
function collectionSize(l) {
	if (Array.isArray(l)) return l.length;
	if (l instanceof Map || l instanceof Set) return l.size;
	if (typeof l == "object" && l) {
		let E = 0;
		for (let D in l) Object.hasOwn(l, D) && (E += 1);
		return E;
	}
	return null;
}
var liveManagers = /* @__PURE__ */ new Set(), managerIds = /* @__PURE__ */ new WeakMap(), nextManagerId = 1;
function registerLivePaneManager(l) {
	managerIds.has(l) || managerIds.set(l, nextManagerId++), liveManagers.add(l);
}
function unregisterLivePaneManager(l) {
	liveManagers.delete(l);
}
function resetAndRefreshAllTerminalWebglAtlases(l) {
	let E = Array.from(liveManagers).filter((l) => l.isVisibleForAtlasRecovery?.() !== !1);
	recordTerminalWebglDiagnostic("webgl-atlas-reset", {
		managers: E.length,
		mountedManagers: liveManagers.size,
		...l ? { reason: l } : {}
	});
	let D = [];
	for (let l of E) try {
		l.clearWebglTextureAtlases ? l.clearWebglTextureAtlases() : l.resetWebglTextureAtlases(), D.push(l);
	} catch {}
	for (let l of D) try {
		l.presentForcedViewports ? l.presentForcedViewports() : l.refreshAllPanes?.();
	} catch {}
}
function getAllPaneRenderingDiagnostics() {
	let l = [];
	for (let E of liveManagers) try {
		let D = E.getRenderingDiagnostics?.();
		D && l.push(...D);
	} catch {}
	return l;
}
function getLivePaneCensus() {
	let l = 0;
	for (let E of liveManagers) try {
		l += E.getPaneCount?.() ?? E.getPanes?.().length ?? 0;
	} catch {}
	return {
		managers: liveManagers.size,
		panes: l
	};
}
function forEachLivePaneForDesyncSentinel(l) {
	for (let E of liveManagers) {
		let D = managerIds.get(E);
		if (D == null) continue;
		let O = [];
		try {
			O = E.getPanes?.() ?? [];
		} catch {
			continue;
		}
		for (let E of O) try {
			l(`m${D}:p${E.id}`, E);
		} catch {}
	}
}
function refitAndRefreshAllTerminalPanes() {
	for (let l of liveManagers) try {
		l.fitAllPanes?.(), l.refreshAllPanes?.();
	} catch {}
}
var BYTES_PER_TERMINAL_CELL = 16, BYTES_PER_KILOBYTE = 1024, MANAGER_SAMPLE_LIMIT = 64, PANE_SAMPLE_LIMIT = 256;
function getLivePaneMemoryProfileCounts() {
	let l = 0, E = 0, D = 0, O = 0;
	for (let k of liveManagers) {
		if (l >= MANAGER_SAMPLE_LIMIT) break;
		l += 1;
		let A = Math.max(0, PANE_SAMPLE_LIMIT - D), j = [];
		try {
			A > 0 && (j = k.getPanes?.(A) ?? []);
		} catch {
			j = [];
		}
		let M;
		try {
			M = k.getPaneCount?.();
		} catch {
			M = void 0;
		}
		E += typeof M == "number" && Number.isFinite(M) ? Math.max(0, M) : j.length;
		let N = Math.min(j.length, A);
		for (let l = 0; l < N; l += 1) {
			let E = j[l].terminal, D = E?.buffer?.active?.length, k = E?.cols;
			typeof D == "number" && Number.isFinite(D) && D > 0 && typeof k == "number" && Number.isFinite(k) && k > 0 && (O += D * k * BYTES_PER_TERMINAL_CELL);
		}
		D += N;
	}
	let k = l === 0 ? 0 : liveManagers.size / l, A = Math.round(E * k), j = D === 0 ? 0 : A / D;
	return {
		managers: liveManagers.size,
		estPanes: A,
		estBufferKB: Math.round(O * j / BYTES_PER_KILOBYTE)
	};
}
registerRendererMemoryProfileContributor("terminals", getLivePaneMemoryProfileCounts);
var deferredMetricOptions = /* @__PURE__ */ new WeakMap();
function applyOrDeferPaneMetricOptions(l, E, D, O = "appearance") {
	return D ? (deferredMetricOptions.delete(l.terminal), writePaneMetricOptions(l, E, O), "applied") : (deferredMetricOptions.set(l.terminal, E), "deferred");
}
function flushDeferredPaneMetricOptions(l) {
	let E = deferredMetricOptions.get(l.terminal);
	return E ? (deferredMetricOptions.delete(l.terminal), writePaneMetricOptions(l, E, "deferred-flush"), recordTerminalWebglDiagnostic("metric-options-deferred-flush", { paneId: l.id }), !0) : !1;
}
function hasDeferredPaneMetricOptions(l) {
	return deferredMetricOptions.has(l.terminal);
}
function paneMetricOptionsAlreadySettled(l, E) {
	if (deferredMetricOptions.has(l.terminal)) return !1;
	let D = l.terminal.options;
	return (E.fontSize === void 0 || D.fontSize === E.fontSize) && (E.fontFamily === void 0 || D.fontFamily === E.fontFamily) && (E.fontWeight === void 0 || D.fontWeight === E.fontWeight) && (E.fontWeightBold === void 0 || D.fontWeightBold === E.fontWeightBold) && (E.lineHeight === void 0 || D.lineHeight === E.lineHeight);
}
function overridePendingPaneMetricOptions(l, E) {
	let D = deferredMetricOptions.get(l.terminal);
	D && deferredMetricOptions.set(l.terminal, {
		...D,
		...E
	});
}
function writePaneMetricOptions(l, E, D) {
	let O = l.terminal.options;
	E.fontSize !== void 0 && (O.fontSize = E.fontSize), E.fontFamily !== void 0 && (O.fontFamily = E.fontFamily), E.fontWeight !== void 0 && (recordMetricWeightChange(l, "fontWeight", O.fontWeight, E.fontWeight, D), O.fontWeight = E.fontWeight), E.fontWeightBold !== void 0 && (recordMetricWeightChange(l, "fontWeightBold", O.fontWeightBold, E.fontWeightBold, D), O.fontWeightBold = E.fontWeightBold), E.lineHeight !== void 0 && (O.lineHeight = E.lineHeight);
}
function recordMetricWeightChange(l, E, D, O, A) {
	D !== O && recordTerminalWebglDiagnostic("metric-weight-change", {
		paneId: l.id,
		key: E,
		prev: D === void 0 ? null : String(D),
		next: String(O),
		reason: A
	});
}
export { setTerminalWebglDiagnosticRecorder as _, paneMetricOptionsAlreadySettled as a, getLivePaneCensus as c, resetAndRefreshAllTerminalWebglAtlases as d, unregisterLivePaneManager as f, recordTerminalWebglDiagnostic as g, TERMINAL_WEBGL_DIAGNOSTIC_BREADCRUMB as h, overridePendingPaneMetricOptions as i, refitAndRefreshAllTerminalPanes as l, summarizeStateCollectionSizes as m, flushDeferredPaneMetricOptions as n, forEachLivePaneForDesyncSentinel as o, registerRendererMemoryProfileContributor as p, hasDeferredPaneMetricOptions as r, getAllPaneRenderingDiagnostics as s, applyOrDeferPaneMetricOptions as t, registerLivePaneManager as u, recordRendererCrashBreadcrumb as v };
