import { fp as isGitHubPRSuppressed } from "./store-C9f8FDJV.js";
function isCachedMergedBranchPRCurrentForWorktree(e, t) {
	return e?.state === "merged" && typeof e.headSha == "string" && e.headSha.length > 0 && typeof t.head == "string" && t.head.length > 0 && (e.headSha === t.head || e.confirmedContainedHeadOid === t.head);
}
function getLinkedReviewNumber(e, t) {
	switch (e) {
		case "github": return t.linkedPR;
		case "gitlab": return t.linkedGitLabMR;
		case "bitbucket": return t.linkedBitbucketPR;
		case "azure-devops": return t.linkedAzureDevOpsPR;
		case "gitea": return t.linkedGiteaPR;
	}
}
function makeLinkedReviewFallback(e, t, n) {
	let r = e === "gitlab" ? "MR" : "PR";
	return {
		provider: e,
		number: t,
		title: n === null ? `${r} details unavailable` : `Loading ${r}...`
	};
}
function getWorktreeCardPrDisplay(t, i, a = null, o = null, s = null, c = null, l = {}) {
	let u = {
		linkedPR: i,
		linkedGitLabMR: a,
		linkedBitbucketPR: o,
		linkedAzureDevOpsPR: s,
		linkedGiteaPR: c
	}, d = i !== null || a !== null || o !== null || s !== null || c !== null;
	if (t?.provider === "github" && isGitHubPRSuppressed({
		linkedPR: i,
		suppressedGitHubPR: l.suppressedGitHubPR ?? null
	}, t.number)) return null;
	if (t) {
		if (t.provider === "unsupported") return t;
		let e = getLinkedReviewNumber(t.provider, u);
		return e === null ? t.provider !== "github" && t.provider !== "gitlab" || !d && t.provider === "github" && l.branchLookupGitHubPRNumber != null && l.branchLookupGitHubPRNumber === t.number || l.reviewHintKey === "" ? t : null : t.number === e ? t : makeLinkedReviewFallback(t.provider, e, void 0);
	}
	return i === null ? a === null ? o === null ? s === null ? c === null ? null : makeLinkedReviewFallback("gitea", c, t) : makeLinkedReviewFallback("azure-devops", s, t) : makeLinkedReviewFallback("bitbucket", o, t) : makeLinkedReviewFallback("gitlab", a, t) : makeLinkedReviewFallback("github", i, t);
}
export { isCachedMergedBranchPRCurrentForWorktree as n, getWorktreeCardPrDisplay as t };
