function pathSeparatorFor(e) {
	return e.includes("\\") ? "\\" : "/";
}
function isHomeProjectsFallback(e) {
	return /^(?:\/(?:Users|home)\/[^/]+|[A-Za-z]:[\\/]Users[\\/][^\\/]+)[\\/]orca[\\/]projects$/.test(e);
}
function trimTrailingSeparators(t) {
	let n = t.replace(/[\\/]+$/, "");
	return n === "" && t.startsWith("/") ? "/" : /^[A-Za-z]:$/.test(n) ? `${n}${pathSeparatorFor(t)}` : n;
}
function joinCreateProjectPath(t, r) {
	let i = trimTrailingSeparators(t.trim()), a = r.trim().replace(/^[\\/]+/, "");
	if (!i || !a) return i || a;
	let o = pathSeparatorFor(i);
	return i === "/" || /^[A-Za-z]:[\\/]$/.test(i) ? `${i}${a}` : `${i}${o}${a}`;
}
function getDefaultCreateProjectParent(e) {
	let t = trimTrailingSeparators(e.trim());
	return t ? joinCreateProjectPath(joinCreateProjectPath(t, "orca"), "projects") : "";
}
function formatCreateProjectParentSummary({ parent: e, defaultParent: n, runtimeEnvironmentId: r, isRemoteHost: i, missingLocationLabel: a = "location not selected", missingServerLocationLabel: o = "host folder not selected" }) {
	let s = e.trim();
	return s ? n && s === n && !r && !i && isHomeProjectsFallback(s) ? "~/orca/projects" : s : r || i ? o : a;
}
export { getDefaultCreateProjectParent as n, joinCreateProjectPath as r, formatCreateProjectParentSummary as t };
