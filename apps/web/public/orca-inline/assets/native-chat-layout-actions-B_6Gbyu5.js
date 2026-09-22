import { u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { n as canMoveTabToNewPaneColumnFromState, r as moveTabToNewPaneColumn } from "./tab-move-to-pane-column-C2Z9WhB2.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as requestActiveTerminalPaneSplit } from "./request-active-terminal-pane-split-etsYGifc.js";
var Mic = createLucideIcon("mic", [
	["path", {
		d: "M12 19v3",
		key: "npa21l"
	}],
	["path", {
		d: "M19 10v2a7 7 0 0 1-14 0v-2",
		key: "1vc78b"
	}],
	["rect", {
		x: "9",
		y: "2",
		width: "6",
		height: "13",
		rx: "3",
		key: "s6n7sd"
	}]
]);
function resolveActiveNativeChatSplitTarget(e, o, s) {
	if (!o || !s) return null;
	let c = (e.groupsByWorktree?.[o] ?? []).find((e) => e.id === s), l = (e.unifiedTabsByWorktree?.[o] ?? []).find((e) => e.id === c?.activeTabId && e.groupId === s);
	return l?.contentType === "agent-session" ? {
		kind: "workspace-tab",
		unifiedTabId: l.id,
		groupId: s
	} : l?.contentType === "terminal" && l.viewMode === "chat" ? {
		kind: "terminal-pane",
		terminalTabId: l.entityId
	} : null;
}
function canRunNativeChatSplitTarget(e, s) {
	return s ? s.kind === "terminal-pane" || canMoveTabToNewPaneColumnFromState(e, s.unifiedTabId, s.groupId) : !1;
}
function runNativeChatSplitTarget(e, o) {
	return e.kind === "terminal-pane" ? (requestActiveTerminalPaneSplit({
		tabId: e.terminalTabId,
		direction: o === "right" ? "vertical" : "horizontal"
	}), !0) : moveTabToNewPaneColumn({
		unifiedTabId: e.unifiedTabId,
		groupId: e.groupId,
		direction: o
	});
}
function runActiveNativeChatSplit(e, o, s) {
	let l = resolveActiveNativeChatSplitTarget(useAppStore.getState(), e, o);
	return l ? runNativeChatSplitTarget(l, s) : !1;
}
export { Mic as a, runNativeChatSplitTarget as i, resolveActiveNativeChatSplitTarget as n, runActiveNativeChatSplit as r, canRunNativeChatSplitTarget as t };
