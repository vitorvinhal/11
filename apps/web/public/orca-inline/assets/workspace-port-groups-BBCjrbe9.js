var portsByWorktreeCache = /* @__PURE__ */ new WeakMap(), workspaceGroupsCache = /* @__PURE__ */ new WeakMap(), externalPortsCache = /* @__PURE__ */ new WeakMap(), EMPTY_PORTS_BY_WORKTREE = /* @__PURE__ */ new Map(), EMPTY_WORKSPACE_PORT_GROUPS = [], EMPTY_EXTERNAL_PORTS = [];
function comparePorts(e, a) {
	return e.port - a.port || (e.processName ?? "").localeCompare(a.processName ?? "");
}
function getWorkspacePortsByWorktreeId(a) {
	if (!a) return EMPTY_PORTS_BY_WORKTREE;
	let o = portsByWorktreeCache.get(a);
	if (o) return o;
	let c = /* @__PURE__ */ new Map();
	for (let e of a.ports) {
		if (e.kind !== "workspace") continue;
		let a = c.get(e.owner.worktreeId);
		a ? a.push(e) : c.set(e.owner.worktreeId, [e]);
	}
	for (let e of c.values()) e.sort(comparePorts);
	return portsByWorktreeCache.set(a, c), c;
}
function getWorkspacePortGroups(e) {
	if (!e) return EMPTY_WORKSPACE_PORT_GROUPS;
	let o = workspaceGroupsCache.get(e);
	if (o) return o;
	let s = /* @__PURE__ */ new Map();
	for (let a of e.ports) {
		if (a.kind !== "workspace") continue;
		let e = s.get(a.owner.worktreeId);
		e ? e.ports.push(a) : s.set(a.owner.worktreeId, {
			worktreeId: a.owner.worktreeId,
			repoId: a.owner.repoId,
			displayName: a.owner.displayName,
			ports: [a]
		});
	}
	let l = [...s.values()].map((e) => ({
		...e,
		ports: [...e.ports].sort(comparePorts)
	})).sort((e, a) => e.displayName.localeCompare(a.displayName) || (e.ports[0]?.port ?? 0) - (a.ports[0]?.port ?? 0));
	return workspaceGroupsCache.set(e, l), l;
}
function getExternalWorkspacePorts(e) {
	if (!e) return EMPTY_EXTERNAL_PORTS;
	let a = externalPortsCache.get(e);
	if (a) return a;
	let s = e.ports.filter((e) => e.kind !== "workspace").sort(comparePorts);
	return externalPortsCache.set(e, s), s;
}
export { getWorkspacePortGroups as n, getWorkspacePortsByWorktreeId as r, getExternalWorkspacePorts as t };
