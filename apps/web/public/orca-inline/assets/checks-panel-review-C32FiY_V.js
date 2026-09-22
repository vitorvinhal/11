import { Lr as hostedReviewInfoFromGitHubPRInfo, fp as isGitHubPRSuppressed } from "./store-C9f8FDJV.js";
function gitHubPRToChecksPanelReview(n) {
	return hostedReviewInfoFromGitHubPRInfo(n);
}
function selectChecksPanelReview({ hostedReview: e, pr: r, linkedPR: i, suppressedGitHubPR: a, linkedGitLabMR: o, linkedBitbucketPR: s, linkedAzureDevOpsPR: c, linkedGiteaPR: l }) {
	return (e?.provider === "gitlab" ? e : null) || (o !== null || s !== null || c !== null || l !== null || r && i !== null && r.number !== i || r && isGitHubPRSuppressed({
		linkedPR: i,
		suppressedGitHubPR: a
	}, r.number) ? null : r ? gitHubPRToChecksPanelReview(r) : null);
}
export { selectChecksPanelReview as n, gitHubPRToChecksPanelReview as t };
