import { _t as getWorktreeLineageGroupKey, mt as PINNED_GROUP_KEY } from "./worktree-activation-u-wSAPlP.js";
import { n as defaultRangeExtractor } from "./esm-COD_EJuQ.js";
function getRenderRowKey(e) {
	return e.type === "host-header" ? `host:${e.hostId}` : e.type === "header" ? e.hostId ? `hdr:${e.hostId}:${e.key}` : `hdr:${e.key}` : e.type === "lineage-group" ? `lineage-group:${e.key}` : e.type === "imported-worktrees-card" ? `imported:${e.key}` : e.type === "new-external-worktrees-inbox" ? `inbox:${e.key}` : e.type === "pending-creation" ? `pending:${e.creationId}` : e.type === "folder-workspace" ? `folder-workspace:${e.folderWorkspace.id}` : `wt:${e.rowKey}`;
}
const GROUP_HEADER_ROW_HEIGHT = 28, WORKTREE_SIDEBAR_VIRTUAL_ROW_GAP = 6;
var SECONDARY_GROUP_HEADER_TOP_MARGIN = 4, IMPORTED_WORKTREES_LINE_ROW_HEIGHT = 36, PENDING_CREATION_ROW_HEIGHT = 56, FOLDER_WORKSPACE_ROW_HEIGHT = 64;
function buildLineageRowRekeyMap(y) {
	let b = /* @__PURE__ */ new Map();
	for (let S of y) {
		if (S.type === "lineage-group") {
			let e = getRenderRowKey(S);
			for (let y of S.rows) b.set(`wt:${y.rowKey}`, e);
			continue;
		}
		S.type === "item" && b.set(`lineage-group:${S.sectionKey}:${getWorktreeLineageGroupKey(S.worktree)}`, getRenderRowKey(S));
	}
	return b;
}
function shouldUseHeaderTopSpacing(e) {
	let y = e.rows[e.index - 1], b = y?.type === "header" && y.key === "pinned";
	return e.index !== e.firstHeaderIndex && !b;
}
function estimateRenderRowSize(e, y, b, x) {
	let S = e[y];
	return S?.type === "host-header" ? 32 + (shouldUseHeaderTopSpacing({
		rows: e,
		index: y,
		firstHeaderIndex: b
	}) ? SECONDARY_GROUP_HEADER_TOP_MARGIN : 0) : S?.type === "header" ? 28 + (shouldUseHeaderTopSpacing({
		rows: e,
		index: y,
		firstHeaderIndex: b
	}) ? SECONDARY_GROUP_HEADER_TOP_MARGIN : 0) : S?.type === "lineage-group" ? 100 + Math.max(0, S.rows.length - 1) * 96 : S?.type === "imported-worktrees-card" || S?.type === "new-external-worktrees-inbox" ? IMPORTED_WORKTREES_LINE_ROW_HEIGHT : S?.type === "pending-creation" ? PENDING_CREATION_ROW_HEIGHT : S?.type === "folder-workspace" ? FOLDER_WORKSPACE_ROW_HEIGHT : 116;
}
function getVirtualRowTransform(e) {
	return `translateY(${e}px)`;
}
function getVirtualRowIndex(e) {
	let y = Number.parseInt(e.getAttribute("data-index") ?? "", 10);
	return Number.isNaN(y) ? null : y;
}
function getVirtualRowKey(e) {
	return e.getAttribute("data-worktree-virtual-row-key");
}
function getWorktreeVirtualRowTransform(e, y) {
	let b = getVirtualRowTransform(e);
	return y === 0 ? b : `${b} translateY(${y}px)`;
}
function pruneStaleVirtualRowElementCache({ activeRowKeys: e, virtualizer: y }) {
	y.measureElement(null);
	for (let [b, x] of y.elementsCache) {
		let S = String(b);
		e.has(S) || x.isConnected || y.elementsCache.delete(b);
	}
}
function getStickyHeaderIndexes(e) {
	let y = [];
	return e.forEach((e, b) => {
		(e.type === "host-header" || e.type === "header" && (e.projectGroupDepth ?? 0) === 0) && y.push(b);
	}), y;
}
function getHostStickyIndexes(e, y) {
	return y.filter((y) => e[y]?.type === "host-header");
}
function getActiveStickyIndexesForScroll(e) {
	let y = getHostStickyIndexes(e.rows, e.stickyHeaderIndexes), b = (y, b, x) => {
		let S = getActiveStickyHeaderIndex(y, e.rangeStartIndex);
		if (S === null) return null;
		let C = e.virtualItems.find((e) => e.index === S);
		if (!C) {
			let b = getPreviousStickyHeaderIndex(y, S);
			return b !== null && e.virtualItems.find((e) => e.index === b) ? b : x ? S : null;
		}
		if (e.scrollOffset + b >= C.start) return S;
		let w = getPreviousStickyHeaderIndex(y, S);
		return w === null ? x ? S : null : w;
	}, x = b(y, 0, !0), S = x === null ? -1 : y.indexOf(x), C = S >= 0 ? y[S + 1] ?? Infinity : null;
	return {
		hostIndex: x,
		groupIndex: b(e.stickyHeaderIndexes.filter((y) => e.rows[y]?.type === "header" ? x === null ? !0 : y > x && y < (C ?? Infinity) : !1), x === null ? 0 : 36, x === null)
	};
}
function getActiveStickyHeaderIndex(e, y) {
	for (let b = e.length - 1; b >= 0; b--) {
		let x = e[b];
		if (x <= y) return x;
	}
	return null;
}
function getPreviousStickyHeaderIndex(e, y) {
	let b = e.indexOf(y);
	return b <= 0 ? null : e[b - 1] ?? null;
}
function extractWorktreeVirtualRowIndexes(e) {
	let y = getActiveStickyHeaderIndex(e.stickyHeaderIndexes, e.range.startIndex);
	if (y === null) return defaultRangeExtractor(e.range);
	let x = getPreviousStickyHeaderIndex(e.stickyHeaderIndexes, y), S = getActiveStickyHeaderIndex(e.rows ? getHostStickyIndexes(e.rows, e.stickyHeaderIndexes) : [], e.range.startIndex);
	return Array.from(new Set([
		y,
		...x === null ? [] : [x],
		...S === null ? [] : [S],
		...defaultRangeExtractor(e.range)
	])).sort((e, y) => e - y);
}
function getActiveStickyHeaderIndexForScroll(e) {
	let y = getActiveStickyHeaderIndex(e.stickyHeaderIndexes, e.rangeStartIndex);
	if (y === null) return null;
	let b = e.virtualItems.find((e) => e.index === y);
	return !b || e.scrollOffset >= b.start ? y : getPreviousStickyHeaderIndex(e.stickyHeaderIndexes, y) ?? y;
}
export { getRenderRowKey as _, extractWorktreeVirtualRowIndexes as a, getActiveStickyIndexesForScroll as c, getVirtualRowIndex as d, getVirtualRowKey as f, shouldUseHeaderTopSpacing as g, pruneStaleVirtualRowElementCache as h, estimateRenderRowSize as i, getPreviousStickyHeaderIndex as l, getWorktreeVirtualRowTransform as m, WORKTREE_SIDEBAR_VIRTUAL_ROW_GAP as n, getActiveStickyHeaderIndex as o, getVirtualRowTransform as p, buildLineageRowRekeyMap as r, getActiveStickyHeaderIndexForScroll as s, GROUP_HEADER_ROW_HEIGHT as t, getStickyHeaderIndexes as u };
