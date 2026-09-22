import { Tm as normalizeRelativePath, Wt as compareFileNames } from "./store-C9f8FDJV.js";
import { t as splitPathSegments } from "./path-tree-DAt1zlEG.js";
function compareGitStatusEntries(e, s) {
	return getConflictSortRank(e) - getConflictSortRank(s) || compareFileNames(e.path, s.path);
}
function getConflictSortRank(e) {
	return e.conflictStatus === "unresolved" ? 0 : e.conflictStatus === "resolved_locally" ? 1 : 2;
}
function compareTreeEntriesByPath(e, s) {
	return compareFileNames(e.path, s.path);
}
function makeDirectoryNode(e, o, s, c) {
	return {
		type: "directory",
		key: `dir::${e}::${o}`,
		name: s,
		path: o,
		area: e,
		depth: c,
		fileCount: 0,
		children: [],
		directoryChildren: /* @__PURE__ */ new Map()
	};
}
function finalizeDirectoryNode(e, s) {
	let c = [], l = [];
	for (let o of e.children) o.type === "directory" ? c.push(finalizeDirectoryNode(o, s)) : l.push(o);
	c.sort((e, s) => compareFileNames(e.name, s.name)), l.sort((e, o) => s(e.entry, o.entry));
	let u = l.length + c.reduce((e, o) => e + o.fileCount, 0);
	return {
		type: "directory",
		key: e.key,
		name: e.name,
		path: e.path,
		area: e.area,
		depth: e.depth,
		fileCount: u,
		children: [...c, ...l]
	};
}
function buildSourceControlTree(o, c, l = compareTreeEntriesByPath) {
	let f = makeDirectoryNode(o, "", "", -1);
	for (let l of c) {
		let c = normalizeRelativePath(l.path), u = splitPathSegments(c);
		if (u.length === 0) continue;
		let d = f, p = "";
		for (let e = 0; e < u.length - 1; e += 1) {
			let s = u[e];
			p = p ? `${p}/${s}` : s;
			let c = d.directoryChildren.get(s);
			c || (c = makeDirectoryNode(o, p, s, e), d.directoryChildren.set(s, c), d.children.push(c)), d = c;
		}
		let m = u.at(-1);
		d.children.push({
			type: "file",
			key: `${o}::${l.path}`,
			name: m,
			path: c,
			entry: l,
			area: o,
			depth: u.length - 1
		});
	}
	return finalizeDirectoryNode(f, l).children;
}
function buildGitStatusSourceControlTree(e, o) {
	return buildSourceControlTree(e, o, compareGitStatusEntries);
}
function flattenSourceControlTree(e, o) {
	let s = [], c = (e) => {
		if (s.push(e), e.type === "directory" && !o.has(e.key)) for (let o of e.children) c(o);
	};
	for (let o of e) c(o);
	return s;
}
function compactSourceControlTree(e) {
	let o = (e, s) => {
		if (e.type === "file") return {
			...e,
			depth: s
		};
		let c = [e.name], l = e;
		for (; l.children.length === 1 && l.children[0]?.type === "directory";) l = l.children[0], c.push(l.name);
		return {
			...l,
			name: c.join("/"),
			depth: s,
			children: l.children.map((e) => o(e, s + 1))
		};
	};
	return e.map((e) => o(e, 0));
}
function namespaceSourceControlTreeDirectoryKeys(e, o) {
	let s = (e) => e.type === "file" ? e : {
		...e,
		key: `dir::${o}::${e.path}`,
		children: e.children.map(s)
	};
	return e.map(s);
}
function applyGitStatusEntryAreasToSourceControlTree(e) {
	let o = (e) => e.type === "file" ? {
		...e,
		key: `${e.entry.area}::${e.entry.path}`,
		area: e.entry.area
	} : {
		...e,
		children: e.children.map(o)
	};
	return e.map(o);
}
function collectSourceControlTreeFileEntries(e) {
	if (e.type === "file") return [e.entry];
	let o = [], s = (e) => {
		if (e.type === "file") {
			o.push(e.entry);
			return;
		}
		for (let o of e.children) s(o);
	};
	for (let o of e.children) s(o);
	return o;
}
export { compactSourceControlTree as a, compareGitStatusEntries as c, collectSourceControlTreeFileEntries as i, buildGitStatusSourceControlTree as n, flattenSourceControlTree as o, buildSourceControlTree as r, namespaceSourceControlTreeDirectoryKeys as s, applyGitStatusEntryAreasToSourceControlTree as t };
