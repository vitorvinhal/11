import { Tl as focusTerminalTabSurface, t as useAppStore, wo as focusRuntimeTerminalSurface } from "./store-C9f8FDJV.js";
function resolveActivatedWorkspaceTerminalTabId(e, n) {
	let r = useAppStore.getState();
	return n && n.primaryTabId ? n.primaryTabId : r.activeWorktreeId !== e || r.activeView !== "terminal" || r.activeTabType !== "terminal" ? null : r.activeTabId;
}
function queueWorkspaceActivationTerminalFocus(i, a) {
	let o = resolveActivatedWorkspaceTerminalTabId(i, a);
	return o ? (requestAnimationFrame(() => {
		let r = useAppStore.getState();
		r.activeWorktreeId !== i || r.activeView !== "terminal" || r.activeTabType !== "terminal" || r.activeTabId !== o || focusRuntimeTerminalSurface(o, null, i) || focusTerminalTabSurface(o);
	}), !0) : !1;
}
export { queueWorkspaceActivationTerminalFocus as t };
