function shortGitHead(e) {
	return (e ?? "").trim().slice(0, 7);
}
function getDetachedHeadTooltip(e) {
	return `Detached HEAD at ${e}. You are viewing a commit, not a branch.`;
}
function getWorktreeGitIdentityDisplay(n) {
	let r = (n.branch ?? "").replace(/^refs\/heads\//, "").trim();
	if (r) return {
		kind: "branch",
		branchName: r
	};
	let i = shortGitHead(n.head);
	return i ? {
		kind: "detached",
		shortHead: i,
		sidebarLabel: `Detached HEAD @ ${i}`,
		sourceControlLabel: `Detached HEAD · ${i}`,
		tooltip: getDetachedHeadTooltip(i)
	} : null;
}
export { getWorktreeGitIdentityDisplay as t };
