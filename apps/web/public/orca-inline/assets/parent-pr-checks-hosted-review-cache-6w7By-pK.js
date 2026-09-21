import { JS as LOCAL_EXECUTION_HOST_ID, fp as isGitHubPRSuppressed, hp as getLegacyGitHubPRCacheKey, nC as normalizeExecutionHostId, pp as getGitHubPRCacheKey } from "./store-C9f8FDJV.js";
import { n as isCachedMergedBranchPRCurrentForWorktree, t as getWorktreeCardPrDisplay } from "./worktree-card-pr-display-DhAuHele.js";
function canUseParentPrChecksGitHubPRCacheEntry(e, i, a) {
	let o = i?.data;
	if (!o || isGitHubPRSuppressed(e, o.number)) return !1;
	let c = i.fetchedAt, l = e.linkedPR !== null;
	if (l && o.number !== e.linkedPR || !l && hasNonGitHubLinkedReview(e)) return !1;
	let u = isCachedMergedBranchPRCurrentForWorktree(o, e);
	return !(o.state === "merged" && !u || a?.data === null && !u && c <= a.fetchedAt);
}
function getParentPrChecksGitHubPRCacheEntry({ prCache: e, repo: r, branch: s, settings: c }) {
	let l = getGitHubPRCacheKey(r.path, r.id, s, c, r.connectionId, r.executionHostId, !0), u = normalizeExecutionHostId(r.executionHostId), d = !r.connectionId && (!u || u === "local"), f = d ? getLegacyGitHubPRCacheKey(r.path, r.id, s) : "", p = d ? getLegacyGitHubPRCacheKey(r.path, void 0, s) : "";
	return e[l] ?? (f ? e[f] : void 0) ?? (p ? e[p] : void 0);
}
function hasNonGitHubLinkedReview(e) {
	return e.linkedGitLabMR != null || e.linkedBitbucketPR != null || e.linkedAzureDevOpsPR != null || e.linkedGiteaPR != null;
}
function canUseParentPrChecksHostedReviewCacheEntry(e, i, a) {
	if (i.provider === "github" && isGitHubPRSuppressed(e, i.number) || i.state === "merged" && !mergedReviewMatchesHead(i, e)) return !1;
	let o = getLinkedReviewNumberForProvider(e, i.provider);
	if (hasLinkedReview(e)) return o === i.number;
	if ((a.linkedReviewHintKey ?? "") !== "") return !1;
	let s = getWorktreeCardPrDisplay(i, e.linkedPR, e.linkedGitLabMR ?? null, e.linkedBitbucketPR ?? null, e.linkedAzureDevOpsPR ?? null, e.linkedGiteaPR ?? null, {
		reviewHintKey: a.linkedReviewHintKey,
		suppressedGitHubPR: e.suppressedGitHubPR ?? null
	});
	return s?.provider === i.provider && s.number === i.number;
}
function mergedReviewMatchesHead(e, r) {
	return isCachedMergedBranchPRCurrentForWorktree({
		number: e.number,
		title: e.title,
		state: e.state,
		url: e.url,
		checksStatus: e.status,
		updatedAt: e.updatedAt,
		mergeable: e.mergeable,
		...e.headSha ? { headSha: e.headSha } : {},
		...e.confirmedContainedHeadOid ? { confirmedContainedHeadOid: e.confirmedContainedHeadOid } : {}
	}, r);
}
function getLinkedReviewNumberForProvider(e, r) {
	switch (r) {
		case "github": return e.linkedPR;
		case "gitlab": return e.linkedGitLabMR ?? null;
		case "bitbucket": return e.linkedBitbucketPR ?? null;
		case "azure-devops": return e.linkedAzureDevOpsPR ?? null;
		case "gitea": return e.linkedGiteaPR ?? null;
		case "unsupported": return null;
	}
}
function hasLinkedReview(e) {
	return e.linkedPR != null || e.linkedGitLabMR != null || e.linkedBitbucketPR != null || e.linkedAzureDevOpsPR != null || e.linkedGiteaPR != null;
}
export { canUseParentPrChecksGitHubPRCacheEntry as n, getParentPrChecksGitHubPRCacheEntry as r, canUseParentPrChecksHostedReviewCacheEntry as t };
