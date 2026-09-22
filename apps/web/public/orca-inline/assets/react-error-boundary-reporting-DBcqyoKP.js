import { a as getReactErrorBoundaryAttribution } from "./react-update-depth-attribution-CrQCUNSQ.js";
var reportedRendererErrorKeys = [], reportedRendererErrorKeySet = /* @__PURE__ */ new Set(), MAX_REPORTED_RENDERER_ERROR_KEYS = 50, pendingReactErrorBoundaryReport = null;
const REACT_ERROR_BOUNDARY_REPORT_AVAILABLE_EVENT = "orca:react-error-boundary-report-available";
function stringFromThrown(e) {
	return e instanceof Error ? {
		name: e.name || "Error",
		message: e.message || String(e),
		...e.stack ? { stack: e.stack } : {}
	} : {
		name: "NonErrorThrown",
		message: String(e)
	};
}
async function collectRendererErrorContext() {
	try {
		let { useAppStore: e } = await import("./store-DS9RRbz3.js"), o = e.getState();
		return {
			activeView: o.activeView,
			activeModal: o.activeModal,
			activeTabType: o.activeTabType,
			activeRightSidebarTab: o.rightSidebarTab,
			hasActiveWorktree: o.activeWorktreeId !== null
		};
	} catch {
		return {};
	}
}
function buildReactErrorBoundaryReportArgs({ boundaryId: o, surface: s, error: c, errorInfo: l, context: u }) {
	let d = stringFromThrown(c), f = l?.componentStack?.trim(), p = getReactErrorBoundaryAttribution(c);
	return {
		boundaryId: o,
		surface: s,
		errorName: d.name,
		errorMessage: d.message,
		...d.stack ? { errorStack: d.stack } : {},
		...f ? { componentStack: f } : {},
		...p ? { attribution: p } : {},
		...u?.activeView ? { activeView: u.activeView } : {},
		...u?.activeModal === void 0 ? {} : { activeModal: u.activeModal },
		...u?.activeTabType ? { activeTabType: u.activeTabType } : {},
		...u?.activeRightSidebarTab ? { activeRightSidebarTab: u.activeRightSidebarTab } : {},
		...u?.hasActiveWorktree === void 0 ? {} : { hasActiveWorktree: u.hasActiveWorktree }
	};
}
function rememberRendererErrorKey(e) {
	if (reportedRendererErrorKeySet.has(e)) return !1;
	if (reportedRendererErrorKeySet.add(e), reportedRendererErrorKeys.push(e), reportedRendererErrorKeys.length > MAX_REPORTED_RENDERER_ERROR_KEYS) {
		let e = reportedRendererErrorKeys.shift();
		e && reportedRendererErrorKeySet.delete(e);
	}
	return !0;
}
function getRendererErrorKey(e) {
	return JSON.stringify({
		boundaryId: e.boundaryId,
		surface: e.surface,
		errorName: e.errorName,
		errorMessage: e.errorMessage,
		componentStack: e.componentStack
	});
}
function takePendingReactErrorBoundaryReport() {
	let e = pendingReactErrorBoundaryReport;
	return pendingReactErrorBoundaryReport = null, e;
}
function notifyReactErrorBoundaryReportAvailable(e) {
	pendingReactErrorBoundaryReport = e, window.dispatchEvent(new CustomEvent(REACT_ERROR_BOUNDARY_REPORT_AVAILABLE_EVENT));
}
async function reportReactErrorBoundaryCrash(e) {
	let o = await collectRendererErrorContext(), s = buildReactErrorBoundaryReportArgs({
		...e,
		context: o
	});
	if (rememberRendererErrorKey(getRendererErrorKey(s))) try {
		let e = await window.api?.crashReports?.recordRendererError?.(s);
		if (e && !e.ok) {
			console.warn("[react-error-boundary] Failed to record renderer crash:", e.error);
			return;
		}
		e?.ok && e.report && !e.deduped && notifyReactErrorBoundaryReportAvailable(e.report);
	} catch (e) {
		console.warn("[react-error-boundary] Crash reporting IPC failed:", e);
	}
}
export { reportReactErrorBoundaryCrash as n, takePendingReactErrorBoundaryReport as r, REACT_ERROR_BOUNDARY_REPORT_AVAILABLE_EVENT as t };
