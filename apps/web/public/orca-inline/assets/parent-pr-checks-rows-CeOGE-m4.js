import { i as translate } from "./i18n-CakWKPtl.js";
import { Jr as prChecksCacheSuffix, Lr as hostedReviewInfoFromGitHubPRInfo, _p as linkedReviewHintKey, fp as isGitHubPRSuppressed, gp as getHostedReviewCacheKey, kg as isFolderRepo, mp as getGitHubRepoCacheKey } from "./store-C9f8FDJV.js";
import { t as getWorktreeGitIdentityDisplay } from "./worktree-git-identity-display-BVUtz189.js";
import { t as getWorktreeCardPrDisplay } from "./worktree-card-pr-display-DhAuHele.js";
import { n as canUseParentPrChecksGitHubPRCacheEntry, r as getParentPrChecksGitHubPRCacheEntry, t as canUseParentPrChecksHostedReviewCacheEntry } from "./parent-pr-checks-hosted-review-cache-6w7By-pK.js";
const PARENT_PR_CHECKS_GROUP_LABELS = {
	get needsAttention() {
		return translate("auto.components.rightSidebar.parentPrChecks.groups.needsAttention", "Needs attention");
	},
	get pending() {
		return translate("auto.components.rightSidebar.parentPrChecks.groups.pending", "Pending");
	},
	get merged() {
		return translate("auto.components.rightSidebar.parentPrChecks.groups.merged", "Merged");
	},
	get passing() {
		return translate("auto.components.rightSidebar.parentPrChecks.groups.passing", "Passing");
	},
	get draftOrNoChecks() {
		return translate("auto.components.rightSidebar.parentPrChecks.groups.draftOrNoChecks", "Draft / no checks");
	},
	get noPr() {
		return translate("auto.components.rightSidebar.parentPrChecks.groups.noPr", "No PR");
	},
	get unavailable() {
		return translate("auto.components.rightSidebar.parentPrChecks.groups.unavailable", "Unavailable");
	}
}, PARENT_PR_CHECKS_GROUP_ORDER = [
	"needsAttention",
	"pending",
	"merged",
	"passing",
	"draftOrNoChecks",
	"noPr",
	"unavailable"
];
function classifyParentPrChecksRowStatus({ isUnavailable: s, review: w, hasCacheEntry: T, outcome: E, hasFallbackReview: D }) {
	return s ? "unsupported" : E?.kind === "loading" ? w ? classifyKnownReviewStatus(w) : "loading" : w ? classifyKnownReviewStatus(w) : E?.kind === "error" ? "refreshError" : D ? "linkedDetailsUnavailable" : E?.kind === "unavailable" ? "unavailable" : E?.kind === "no-review" ? "noReview" : "notFetched";
}
function classifyKnownReviewStatus(s) {
	return s.provider === "unsupported" ? "unsupported" : s.mergeable === "CONFLICTING" ? "conflict" : s.state === "merged" ? "merged" : s.state === "closed" ? "closed" : s.state === "draft" ? "draft" : s.status === "failure" ? "failing" : s.status === "pending" ? "pending" : s.status === "success" ? "success" : "neutral";
}
function groupForRowStatus(s) {
	switch (s) {
		case "failing":
		case "conflict":
		case "closed":
		case "linkedDetailsUnavailable":
		case "refreshError": return "needsAttention";
		case "pending": return "pending";
		case "merged": return "merged";
		case "success": return "passing";
		case "draft":
		case "neutral": return "draftOrNoChecks";
		case "noReview": return "noPr";
		case "notFetched":
		case "loading":
		case "unsupported":
		case "unavailable": return "unavailable";
	}
}
function getRowCheckTone(s, w) {
	return [
		"failing",
		"conflict",
		"closed",
		"linkedDetailsUnavailable",
		"refreshError"
	].includes(s) ? "failure" : s === "pending" || s === "loading" ? "pending" : s === "success" || s === "merged" ? "success" : w?.status ?? "neutral";
}
function getRowSummary(w, T, E) {
	if (E.length > 0 && (w === "failing" || w === "pending")) return w === "failing" ? translate("auto.components.rightSidebar.parentPrChecks.rowSummary.failingCount", "{{value0}} failing", { value0: E.length }) : translate("auto.components.rightSidebar.parentPrChecks.rowSummary.pendingCount", "{{value0}} pending", { value0: E.length });
	switch (w) {
		case "failing": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.checksFailing", "Checks failing");
		case "conflict": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.mergeConflicts", "Merge conflicts");
		case "pending": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.checksPending", "Checks pending");
		case "success": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.checksPassing", "Checks passing");
		case "merged": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.merged", "Merged");
		case "closed": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.closedWithoutMerge", "Closed without merge");
		case "draft": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.draftReview", "Draft review");
		case "neutral": return T ? translate("auto.components.rightSidebar.parentPrChecks.rowSummary.noCheckSignal", "No check signal") : translate("auto.components.rightSidebar.parentPrChecks.rowSummary.reviewUnavailable", "Review status unavailable");
		case "noReview": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.noPrLinked", "No PR linked");
		case "linkedDetailsUnavailable": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.detailsUnavailable", "Review details unavailable");
		case "refreshError": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.refreshFailed", "Refresh failed");
		case "loading": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.checking", "Checking review status…");
		case "notFetched": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.notFetched", "Status not fetched yet");
		case "unavailable": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.reviewUnavailable", "Review status unavailable");
		case "unsupported": return translate("auto.components.rightSidebar.parentPrChecks.rowSummary.unavailableWorktree", "Unavailable for this worktree");
	}
}
function buildParentPrChecksProjection(s) {
	let w = new Map(s.repos.map((s) => [s.id, s])), T = buildParentPrChecksRows({
		...s,
		repoById: w
	});
	return {
		rows: T,
		groups: PARENT_PR_CHECKS_GROUP_ORDER.map((s) => ({
			key: s,
			label: PARENT_PR_CHECKS_GROUP_LABELS[s],
			rows: T.filter((w) => w.group === s)
		})).filter((s) => s.rows.length > 0),
		summary: summarizeParentPrChecksRows(T)
	};
}
function buildParentPrChecksRows(s) {
	return s.worktrees.map((w) => buildParentPrChecksRow({
		...s,
		worktree: w,
		repo: s.repoById.get(w.repoId) ?? null
	}));
}
function summarizeParentPrChecksRows(s) {
	return {
		attached: s.length,
		knownReview: s.filter((s) => s.reviewLabel !== null && s.status !== "noReview").length,
		failing: s.filter((s) => s.group === "needsAttention").length,
		pending: s.filter((s) => s.group === "pending").length,
		passing: s.filter((s) => s.group === "passing").length,
		noPr: s.filter((s) => s.status === "noReview").length,
		unknown: s.filter((s) => [
			"notFetched",
			"loading",
			"linkedDetailsUnavailable",
			"refreshError",
			"unsupported",
			"unavailable"
		].includes(s.status)).length
	};
}
function getParentPrChecksRefreshIdentity(s, w, T) {
	return [
		s.id,
		s.instanceId ?? "",
		w?.id ?? s.repoId,
		T ?? "",
		linkedReviewHintKey(getLinkedReviewHints(s))
	].join("::");
}
function buildParentPrChecksRow(s) {
	let w = getBranchName(s.worktree), T = getParentPrChecksRefreshIdentity(s.worktree, s.repo, w), E = s.refreshOutcomes?.get(T), D = getReviewSnapshot(s, w, E), O = getWorktreeCardPrDisplay(D.review, s.worktree.linkedPR, s.worktree.linkedGitLabMR ?? null, s.worktree.linkedBitbucketPR ?? null, s.worktree.linkedAzureDevOpsPR ?? null, s.worktree.linkedGiteaPR ?? null, { suppressedGitHubPR: s.worktree.suppressedGitHubPR ?? null }), A = D.review, j = classifyParentPrChecksRowStatus({
		isUnavailable: !s.repo || isFolderRepo(s.repo) || s.worktree.isBare || !w,
		review: A,
		hasCacheEntry: D.hasCacheEntry,
		outcome: E,
		hasFallbackReview: O !== null
	}), M = getCheckDetails(s, A, w), N = getCheckDetailNames(M);
	return {
		id: s.worktree.id,
		refreshIdentity: T,
		worktree: s.worktree,
		repo: s.repo,
		branch: w,
		status: j,
		group: groupForRowStatus(j),
		checkTone: getRowCheckTone(j, A),
		title: A?.title ?? O?.title ?? w ?? s.worktree.displayName,
		reviewNumber: A?.number ?? O?.number ?? null,
		reviewLabel: getReviewLabel(A, O),
		reviewUrl: A?.url ?? O?.url ?? null,
		reviewState: A?.state ?? O?.state ?? null,
		reviewStatus: A?.status ?? O?.status ?? null,
		provider: A?.provider ?? O?.provider ?? null,
		githubRepository: A?.provider === "github" ? A.githubRepository ?? null : null,
		summary: getRowSummary(j, A, N),
		detailNames: N,
		checks: M,
		isRefreshing: E?.kind === "loading",
		hasLinkedReview: hasLinkedReview(s.worktree)
	};
}
function getReviewSnapshot(s, w, E) {
	if (E?.kind === "found" && (E.review.provider !== "github" || !isGitHubPRSuppressed(s.worktree, E.review.number))) return {
		review: E.review,
		hasCacheEntry: !0
	};
	if (!s.repo || !w) return {
		review: void 0,
		hasCacheEntry: !1
	};
	let O = {
		...s,
		repo: s.repo
	}, k = s.hostedReviewCache[getHostedReviewKey(O, w)];
	if (k?.data && canUseParentPrChecksHostedReviewCacheEntry(s.worktree, k.data, k)) return {
		review: k.data,
		hasCacheEntry: !0
	};
	let A = getParentPrChecksGitHubPRCacheEntry({
		prCache: s.prCache,
		repo: s.repo,
		branch: w,
		settings: s.settings
	});
	return canUseParentPrChecksGitHubPRCacheEntry(s.worktree, A, k) ? {
		review: hostedReviewInfoFromGitHubPRInfo(A.data),
		hasCacheEntry: !0
	} : {
		review: k?.data === null ? null : void 0,
		hasCacheEntry: k !== void 0
	};
}
function getReviewLabel(s, w) {
	let T = s?.provider ?? w?.provider, E = s?.number ?? w?.number;
	return T === void 0 || E === void 0 ? null : T === "gitlab" ? `!${E}` : `#${E}`;
}
function getCheckDetails(s, w, T) {
	return !s.repo || !T || w?.provider !== "github" ? [] : getGitHubChecksEntry({
		...s,
		repo: s.repo
	}, w)?.data ?? [];
}
function getCheckDetailNames(s) {
	let w = s.filter((s) => s.conclusion === "failure" || s.conclusion === "timed_out" || s.conclusion === "cancelled" || s.conclusion === "action_required" || s.conclusion === "pending" || s.conclusion === null || s.status === "queued" || s.status === "in_progress");
	return [...w.filter((s) => s.conclusion === "action_required"), ...w.filter((s) => s.conclusion !== "action_required")].slice(0, 2).map((s) => s.name);
}
function getGitHubChecksEntry(s, T) {
	let E = T.githubRepository ?? null, D = getGitHubRepoCacheKey(s.repo.path, s.repo.id, prChecksCacheSuffix(T.number, E, T.headSha), s.settings, s.repo.connectionId, s.repo.executionHostId, !0), O = getGitHubRepoCacheKey(s.repo.path, s.repo.id, prChecksCacheSuffix(T.number, E), s.settings, s.repo.connectionId, s.repo.executionHostId, !0);
	return s.checksCache[D] ?? s.checksCache[O];
}
function getHostedReviewKey(s, w) {
	return getHostedReviewCacheKey(s.repo.path, w, s.settings, s.repo.id, s.repo.connectionId, s.repo.executionHostId, !0);
}
function getBranchName(s) {
	let w = getWorktreeGitIdentityDisplay(s);
	return w?.kind === "branch" ? w.branchName : null;
}
function hasLinkedReview(s) {
	return !!(s.linkedPR ?? s.linkedGitLabMR ?? s.linkedBitbucketPR ?? s.linkedAzureDevOpsPR ?? s.linkedGiteaPR ?? null);
}
function getLinkedReviewHints(s) {
	return {
		linkedGitHubPR: s.linkedPR ?? null,
		linkedGitLabMR: s.linkedGitLabMR ?? null,
		linkedBitbucketPR: s.linkedBitbucketPR ?? null,
		linkedAzureDevOpsPR: s.linkedAzureDevOpsPR ?? null,
		linkedGiteaPR: s.linkedGiteaPR ?? null
	};
}
export { buildParentPrChecksRows as n, getParentPrChecksRefreshIdentity as r, buildParentPrChecksProjection as t };
