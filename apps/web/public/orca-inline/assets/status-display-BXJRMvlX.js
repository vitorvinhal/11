import { Tm as normalizeRelativePath, wm as joinPath } from "./store-C9f8FDJV.js";
import { t as splitPathSegments } from "./path-tree-DAt1zlEG.js";
const STATUS_LABELS = {
	modified: "M",
	added: "A",
	deleted: "D",
	renamed: "R",
	untracked: "U",
	copied: "C"
}, STATUS_COLORS = {
	modified: "var(--git-decoration-modified)",
	added: "var(--git-decoration-added)",
	deleted: "var(--git-decoration-deleted)",
	renamed: "var(--git-decoration-renamed)",
	untracked: "var(--git-decoration-untracked)",
	copied: "var(--git-decoration-copied)"
};
var STATUS_PRIORITY = {
	deleted: 5,
	modified: 4,
	added: 3,
	untracked: 3,
	renamed: 2,
	copied: 1
};
function getDominantStatus(e) {
	let c = null, l = -1;
	for (let u of e) {
		let e = STATUS_PRIORITY[u];
		e > l && (c = u, l = e);
	}
	return c;
}
function buildStatusMap(c) {
	let l = /* @__PURE__ */ new Map();
	for (let u of c) {
		let c = normalizeRelativePath(u.path), d = l.get(c), f = d ? getDominantStatus([d, u.status]) ?? u.status : u.status;
		l.set(c, f);
	}
	return l;
}
function buildFolderStatusMap(e) {
	let u = /* @__PURE__ */ new Map();
	for (let d of e) {
		if (!shouldPropagateStatus(d.status)) continue;
		let e = splitPathSegments(d.path);
		if (e.length <= 1) continue;
		let f = "";
		for (let l of e.slice(0, -1)) {
			f = f ? joinPath(f, l) : l;
			let e = u.get(f);
			e ? e.push(d.status) : u.set(f, [d.status]);
		}
	}
	return new Map(Array.from(u.entries()).map(([e, c]) => [e, getDominantStatus(c)]));
}
function shouldPropagateStatus(e) {
	return e !== "deleted";
}
function isPathIgnored(e, c) {
	if (e.size === 0) return !1;
	if (e.has(c)) return !0;
	let l = c;
	for (;;) {
		let c = l.lastIndexOf("/");
		if (c <= 0) return !1;
		if (l = l.slice(0, c), e.has(l)) return !0;
	}
}
function shouldShowIgnoredDecoration(e, c, l) {
	return !e && isPathIgnored(c, l);
}
function buildIgnoredSet(c) {
	let l = /* @__PURE__ */ new Set();
	if (!c) return l;
	for (let u of c) {
		let c = u.endsWith("/") ? u.slice(0, -1) : u;
		l.add(normalizeRelativePath(c));
	}
	return l;
}
export { buildStatusMap as a, buildIgnoredSet as i, STATUS_LABELS as n, isPathIgnored as o, buildFolderStatusMap as r, shouldShowIgnoredDecoration as s, STATUS_COLORS as t };
