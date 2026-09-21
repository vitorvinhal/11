import { Qy as isWindowsAbsolutePathLike, ZS as getRepoExecutionHostId, Zy as isRuntimePathAbsolute, ab as resolveWslRepoWorktreeBasePath, eb as normalizeRuntimePathSeparators, iC as parseExecutionHostId, nb as resolveRuntimePath } from "./store-C9f8FDJV.js";
function getRepoOwnerWorktreeVisibilityDefaults(e, c, l) {
	let u = getRepoExecutionHostId(e);
	return parseExecutionHostId(u)?.kind === "runtime" ? l?.[u] ?? void 0 : l?.local ?? c?.worktreeVisibilityDefaults;
}
function isRuntimePathAbsoluteForRepo(s, l) {
	return isRuntimePathAbsolute(l, isWindowsAbsolutePathLike(s) || isWindowsAbsolutePathLike(l) ? "windows" : "posix");
}
function resolveWorkspaceLayoutPath(e, s) {
	return isRuntimePathAbsoluteForRepo(e, s) ? normalizeRuntimePathSeparators(s) : resolveRuntimePath(e, s);
}
function resolveConfiguredWorktreeBasePaths(e) {
	let s = e?.worktreeBasePath?.trim();
	if (!e || !s) return [];
	let c = resolveWslRepoWorktreeBasePath(e.path, s);
	return [resolveWorkspaceLayoutPath(e.path, c)];
}
export { getRepoOwnerWorktreeVisibilityDefaults as n, resolveConfiguredWorktreeBasePaths as t };
