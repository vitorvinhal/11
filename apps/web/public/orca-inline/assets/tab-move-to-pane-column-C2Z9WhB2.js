import { u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { Rf as getRuntimeEnvironmentIdForWorktree, t as useAppStore } from "./store-C9f8FDJV.js";
import { c as moveWebRuntimeSessionTab, on as isWebRuntimeSessionActive } from "./web-runtime-session-CeAC5QPx.js";
var PanelBottomClose = createLucideIcon("panel-bottom-close", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}],
	["path", {
		d: "m15 8-3 3-3-3",
		key: "1oxy1z"
	}]
]), PanelRightClose = createLucideIcon("panel-right-close", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}],
	["path", {
		d: "m8 9 3 3-3 3",
		key: "12hl5m"
	}]
]);
function mirrorWebRuntimeTabMove(e) {
	let l = getRuntimeEnvironmentIdForWorktree(useAppStore.getState(), e.worktreeId);
	isWebRuntimeSessionActive(l) && moveWebRuntimeSessionTab({
		...e,
		environmentId: l
	});
}
function canMoveTabToNewPaneColumnFromState(e, a, o) {
	for (let [s, c] of Object.entries(e.unifiedTabsByWorktree)) {
		let l = c.find((e) => e.id === a);
		if (!l || l.groupId !== o) continue;
		let u = (e.groupsByWorktree[s] ?? []).find((e) => e.id === o);
		return u ? u.tabOrder.length > 1 : !1;
	}
	return !1;
}
function canMoveTabToNewPaneColumn(e, a) {
	return canMoveTabToNewPaneColumnFromState(useAppStore.getState(), e, a);
}
function moveTabToNewPaneColumn(e) {
	let a = useAppStore.getState(), s = Object.entries(a.unifiedTabsByWorktree).find(([, a]) => a.some((a) => a.id === e.unifiedTabId && a.groupId === e.groupId))?.[0];
	if (!s || !canMoveTabToNewPaneColumnFromState(a, e.unifiedTabId, e.groupId)) return !1;
	let c = a.dropUnifiedTab(e.unifiedTabId, {
		groupId: e.groupId,
		splitDirection: e.direction
	});
	return c && mirrorWebRuntimeTabMove({
		kind: "split",
		worktreeId: s,
		tabId: e.unifiedTabId,
		targetGroupId: e.groupId,
		splitDirection: e.direction
	}), c;
}
export { PanelRightClose as a, mirrorWebRuntimeTabMove as i, canMoveTabToNewPaneColumnFromState as n, PanelBottomClose as o, moveTabToNewPaneColumn as r, canMoveTabToNewPaneColumn as t };
