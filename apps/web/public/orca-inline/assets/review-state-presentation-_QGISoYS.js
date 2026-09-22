import { t as GitMerge } from "./git-merge-clNNtOmU.js";
import { n as GitPullRequestClosed, t as GitPullRequestDraft } from "./git-pull-request-draft-96lV3KB_.js";
const OPEN_REVIEW_STATE_TONE = "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300";
function getReviewStateTone(e) {
	return e === "merged" ? "border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300" : e === "draft" ? "border-slate-500/30 bg-slate-500/10 text-slate-600 dark:text-slate-300" : e === "closed" ? "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-300" : e === "open" ? OPEN_REVIEW_STATE_TONE : "border-border bg-background text-muted-foreground";
}
function getReviewStateIcon(a) {
	return a === "merged" ? GitMerge : a === "closed" ? GitPullRequestClosed : a === "draft" ? GitPullRequestDraft : null;
}
export { getReviewStateIcon as n, getReviewStateTone as r, OPEN_REVIEW_STATE_TONE as t };
