import { lp as getCyclicWorktreeLineageChildIds, up as isValidResolvedWorktreeLineageEdge } from "./store-C9f8FDJV.js";
function getProjectedWorktreeLineage(e, t) {
	return Object.hasOwn(t, e.id) ? t[e.id] : e.lineage;
}
var projectionByLineageAndWorktreeMap = /* @__PURE__ */ new WeakMap();
function getLineageProjection(e, t) {
	let n = projectionByLineageAndWorktreeMap.get(e);
	n || (n = /* @__PURE__ */ new WeakMap(), projectionByLineageAndWorktreeMap.set(e, n));
	let i = n.get(t);
	return i || (i = {}, n.set(t, i)), i;
}
function getCyclicProjectedWorktreeLineageIds(r, a) {
	let o = getLineageProjection(r, a);
	if (o.cyclicLineageIds) return o.cyclicLineageIds;
	let s = /* @__PURE__ */ new Map();
	for (let e of a.values()) {
		let i = getProjectedWorktreeLineage(e, r);
		if (!i) continue;
		let o = a.get(i.parentWorktreeId);
		o && isValidResolvedWorktreeLineageEdge(e, o, i) && s.set(e.id, i);
	}
	let c = getCyclicWorktreeLineageChildIds(s);
	return o.cyclicLineageIds = c, c;
}
function getLineageRenderInfo(e, r, i, a) {
	let o = getProjectedWorktreeLineage(e, r);
	if (!o) return { state: "none" };
	let s = i.get(o.parentWorktreeId);
	return a.has(e.id) || !s || !isValidResolvedWorktreeLineageEdge(e, s, o) ? {
		state: "missing",
		lineage: o
	} : {
		state: "valid",
		lineage: o,
		parent: s
	};
}
function getProjectedWorktreeLineageChildrenByParentId(e, t) {
	let n = getLineageProjection(e, t);
	if (n.childrenByParentId) return n.childrenByParentId;
	let r = getCyclicProjectedWorktreeLineageIds(e, t), s = /* @__PURE__ */ new Map();
	for (let n of t.values()) {
		let i = getLineageRenderInfo(n, e, t, r);
		if (i.state !== "valid") continue;
		let a = s.get(i.parent.id) ?? [];
		a.push(n), s.set(i.parent.id, a);
	}
	return n.childrenByParentId = s, s;
}
function getWorktreeLineageAncestors(e, t, n) {
	let r = getCyclicProjectedWorktreeLineageIds(t, n), i = [], s = /* @__PURE__ */ new Set(), c = e;
	for (; c && !s.has(c.id);) {
		s.add(c.id);
		let e = getLineageRenderInfo(c, t, n, r);
		if (e.state !== "valid") break;
		i.push(e.parent), c = e.parent;
	}
	return i;
}
export { getWorktreeLineageAncestors as a, getProjectedWorktreeLineageChildrenByParentId as i, getLineageRenderInfo as n, getProjectedWorktreeLineage as r, getCyclicProjectedWorktreeLineageIds as t };
