import { mv as folderWorkspaceKey, vv as parseWorkspaceKey } from "./store-C9f8FDJV.js";
import { i as getProjectedWorktreeLineageChildrenByParentId } from "./worktree-lineage-projection-yv9KfVOV.js";
import { t as compareWorktreeDisplayName } from "./worktree-display-name-order-FBS0HgDD.js";
function getWorktreeActivityTime(e) {
	return Math.max(e.lastActivityAt ?? 0, e.createdAt ?? 0, e.sortOrder ?? 0);
}
function getAttachedWorktreesForFolderWorkspace({ activeWorkspaceKey: i, activeWorktreeId: a, folderWorkspaces: o, workspaceLineageByChildKey: s, worktreeLineageById: u, worktreesByRepo: d }) {
	let f = parseWorkspaceKey(i ?? a ?? ""), p = f?.type === "folder" ? o.find((e) => e.id === f.folderWorkspaceId) ?? null : null;
	if (!p) return {
		folderWorkspace: null,
		childWorktrees: [],
		lineageChildrenByParentId: /* @__PURE__ */ new Map(),
		rootChildWorktrees: []
	};
	let m = folderWorkspaceKey(p.id), h = getWorktreeById(d), g = Object.values(s).filter((e) => e.parentWorkspaceKey === m).map((e) => getLineageChildWorktree(e, h)).filter((e) => e !== null).sort(sortWorktreesByRecentActivity), _ = getLineageChildrenByParentId(u, h, new Set(g.map((e) => e.id))), v = /* @__PURE__ */ new Set();
	for (let e of _.values()) for (let r of e) v.add(r.id);
	let y = g.filter((e) => !v.has(e.id));
	return {
		folderWorkspace: p,
		childWorktrees: g,
		lineageChildrenByParentId: _,
		rootChildWorktrees: y.length > 0 ? y : g
	};
}
function getLineageChildrenByParentId(e, r, a) {
	let o = getProjectedWorktreeLineageChildrenByParentId(e, r), s = new Set(a), c = [...a];
	for (let e = 0; e < c.length; e += 1) for (let r of o.get(c[e]) ?? []) r.isArchived || s.has(r.id) || (s.add(r.id), c.push(r.id));
	let l = /* @__PURE__ */ new Map();
	for (let e of s) {
		let r = (o.get(e) ?? []).filter((e) => s.has(e.id) && !e.isArchived);
		r.length > 0 && l.set(e, r);
	}
	for (let e of l.values()) e.sort(sortWorktreesByRecentActivity);
	return l;
}
function getWorktreeById(e) {
	return new Map(Object.values(e).flat().map((e) => [e.id, e]));
}
function getLineageChildWorktree(e, i) {
	let a = parseWorkspaceKey(e.childWorkspaceKey);
	if (a?.type !== "worktree") return null;
	let o = i.get(a.worktreeId);
	return !o || o.isArchived || e.childInstanceId && e.childInstanceId !== o.instanceId ? null : o;
}
function sortWorktreesByRecentActivity(e, r) {
	return getWorktreeActivityTime(r) - getWorktreeActivityTime(e) || compareWorktreeDisplayName(e, r);
}
export { getLineageChildWorktree as n, getLineageChildrenByParentId as r, getAttachedWorktreesForFolderWorkspace as t };
