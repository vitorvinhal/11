import { Ag as isGitRepoKind, Av as projectHostSetupProjectionFromRepos, Fv as isUnresolvedSshHostAlias, JS as LOCAL_EXECUTION_HOST_ID, My as effectiveExternalWorktreeVisibility, Nv as foldComparableGitHubHost, Pv as foldComparableGitLabHost, Py as isLegacyRepoForExternalWorktreeVisibility, Qy as isWindowsAbsolutePathLike, Tv as getProjectIdentityKey, ZS as getRepoExecutionHostId, ap as resolvePaletteRepoForWorktree, bm as resolveWorktreeDisplayName, fp as isGitHubPRSuppressed, fr as linearStatus, jv as githubRepoIdentityKey, np as getPaletteWorktreeExecutionHostId, qS as ALL_EXECUTION_HOSTS_SCOPE, qr as issueCacheKey, rp as getPaletteWorktreeIdentity, tC as isRuntimeOwnedSshTargetId, ym as resolveWorktreeBranchLabel } from "./store-C9f8FDJV.js";
import { E as isKeybindingActionId } from "./keybindings-1v53ESY9.js";
import { W as parseJiraIssueUrl } from "./native-chat-session-option-cache-DOY0fjiI.js";
import { _ as parseLinearIssueUrlIntent, a as parseGitHubIssueOrPRLink, h as isLinearIssueUrlResolutionMatch, p as findLinearIssueWorkspaceLookupIds, t as parseGitLabIssueOrMRLink } from "./gitlab-links-Di3ozbga.js";
import { i as normalizeLinearIdentifier } from "./linear-issue-workspace-attachment-CyjAx5-z.js";
import { n as getRepoOwnerWorktreeVisibilityDefaults } from "./configured-worktree-base-path-Bsj1LNTJ.js";
import { t as getHiddenExternalWorktrees } from "./external-worktree-inbox-DUr-jvnx.js";
import { a as preparePaletteActivity, f as preparePaletteQuery, g as isWorktreePaletteQueryTooLarge, l as createRecognizedPaletteRank, n as createPaletteSearchContext, o as matchPaletteDocument, s as buildPaletteDocument } from "./palette-ranking-Bw1n3k1J.js";
async function fetchMatchingLinearIssue(l, R, z, B) {
	try {
		let V = await B(l.identifier, R, { sourceContext: z });
		return V && isLinearIssueUrlResolutionMatch(l, V) ? V : null;
	} catch {
		return null;
	}
}
async function lookupLinearIssueUrl({ intent: l, knownStatus: R, sourceContext: z, fetchLinearIssue: B, readLinearStatus: V = linearStatus }) {
	let H = /* @__PURE__ */ new Set(), U = async (R) => {
		for (let V of findLinearIssueWorkspaceLookupIds(l, R)) {
			if (H.has(V)) continue;
			H.add(V);
			let R = await fetchMatchingLinearIssue(l, V, z, B);
			if (R) return R;
		}
		return null;
	}, W = await U(R);
	if (W) return W;
	let G = await V(z).catch(() => null);
	return G ? U(G) : null;
}
var MIN_ELISION_LENGTH = 28, MIN_SEGMENTS = 4, TAIL_SEGMENTS = 2;
function splitPathHeadForElision(l, R = []) {
	if (l.length <= MIN_ELISION_LENGTH) return null;
	let z = isWindowsAbsolutePathLike(l), B = [];
	for (let R = 0; R < l.length; R += 1) (l[R] === "/" || z && l[R] === "\\") && B.push(R);
	if (B.length < MIN_SEGMENTS - 1) return null;
	let V = B[B.length - TAIL_SEGMENTS], H = R.reduce((l, R) => R.start < R.end ? Math.min(l, R.start) : l, Infinity);
	H < V && (V = B.findLast((l) => l < H) ?? 0);
	let U = l.slice(0, V);
	return (z ? /[^/\\]/ : /[^/]/).test(U) ? {
		head: U,
		tail: l.slice(V),
		tailRanges: R.map((l) => ({
			start: l.start - V,
			end: l.end - V
		}))
	} : null;
}
function getNewWorkspaceDialogEligibleRepos(l) {
	return l.filter((l) => !!l.path && !isRuntimeOwnedSshTargetId(l.connectionId));
}
function resolveNewWorkspaceDialogRepoId({ eligibleRepos: l, draftRepoId: R, initialRepoId: z, activeRepoId: B, focusedHostScope: V }) {
	let H = V && V !== "all" ? l.find((l) => getRepoExecutionHostId(l) === V) : void 0;
	return (R && l.find((l) => l.id === R) || z && l.find((l) => l.id === z) || B && l.find((l) => l.id === B) || H || l[0])?.id ?? "";
}
function resolveNewWorkspaceDialogGitRepoId(R) {
	let z = resolveNewWorkspaceDialogRepoId(R), B = z ? R.eligibleRepos.find((l) => l.id === z) : null;
	return B && isGitRepoKind(B) ? B.id : null;
}
function getComposerEligibleRepos(l) {
	return getNewWorkspaceDialogEligibleRepos(l);
}
function resolveComposerActiveRepoId(l, R, z) {
	if (!z) return z ?? null;
	let B = l.find((l) => l.id === z);
	if (!B || !isRuntimeOwnedSshTargetId(B.connectionId)) return z;
	let V = getProjectIdentityKey(B);
	return R.find((l) => getProjectIdentityKey(l) === V)?.id ?? z;
}
function resolveComposerRepoId({ eligibleRepos: l, draftRepoId: R, initialRepoId: z, activeRepoId: B, focusedHostScope: V }) {
	return resolveNewWorkspaceDialogRepoId({
		eligibleRepos: l,
		draftRepoId: R,
		initialRepoId: z,
		activeRepoId: B,
		focusedHostScope: V
	});
}
function resolveComposerGitRepoId(l) {
	return resolveNewWorkspaceDialogGitRepoId(l);
}
function getProjectSetupModel({ eligibleRepos: l, projects: z, projectHostSetups: B }) {
	if (z?.length || B?.length) return {
		projects: z ?? [],
		setups: B ?? []
	};
	if (l.length === 0) return null;
	let V = projectHostSetupProjectionFromRepos(l);
	return {
		projects: V.projects,
		setups: V.setups
	};
}
function isReadySetup(l) {
	return l.setupState === "ready";
}
function createTarget(l, R) {
	let z = R.get(l.repoId) ?? [], B = z.find((R) => getRepoExecutionHostId(R) === l.hostId) ?? (z.length === 1 ? z[0] : null);
	return B ? {
		projectId: l.projectId,
		hostId: l.hostId,
		projectHostSetupId: l.id,
		repoId: l.repoId,
		repo: B,
		setup: l
	} : null;
}
function findReadySetupTarget(l, R, z) {
	for (let B of l) {
		if (!isReadySetup(B) || !z(B)) continue;
		let l = createTarget(B, R);
		if (l) return l;
	}
	return null;
}
function resolveWorkspaceCreationTarget(l) {
	let { eligibleRepos: z, focusedHostScope: B, hostId: V, projectHostSetupId: H, projectId: U } = l;
	if (z.length === 0) return {
		status: "unavailable",
		reason: "no-eligible-repo"
	};
	let W = getProjectSetupModel(l), G = /* @__PURE__ */ new Map();
	for (let l of z) {
		let R = G.get(l.id) ?? [];
		R.push(l), G.set(l.id, R);
	}
	let K = l.actionableHostIds, q = W?.setups ?? [], J = K ? q.filter((l) => K.has(l.hostId)) : q;
	if (H) {
		let l = q.find((l) => l.id === H);
		if (!l || K && !K.has(l.hostId)) return {
			status: "unavailable",
			reason: "setup-not-found"
		};
		if (!isReadySetup(l)) return {
			status: "unavailable",
			reason: "setup-not-ready"
		};
		let R = findReadySetupTarget(J, G, (R) => R.projectId === l.projectId && R.hostId === l.hostId) ?? createTarget(l, G);
		return R ? {
			status: "ready",
			target: R
		} : {
			status: "unavailable",
			reason: "setup-not-found"
		};
	}
	if (U && !W?.projects.some((l) => l.id === U)) return {
		status: "unavailable",
		reason: "project-not-found"
	};
	if (U && V) {
		let l = J.find((l) => l.projectId === U && l.hostId === V);
		if (l && !isReadySetup(l)) return {
			status: "unavailable",
			reason: "setup-not-ready"
		};
		let R = findReadySetupTarget(J, G, (l) => l.projectId === U && l.hostId === V);
		return R ? {
			status: "ready",
			target: R
		} : {
			status: "unavailable",
			reason: "project-not-set-up-on-host"
		};
	}
	if (U) {
		let l = B && B !== "all" ? B : null, R = l ? findReadySetupTarget(J, G, (R) => R.projectId === U && R.hostId === l) : null;
		if (R) return {
			status: "ready",
			target: R
		};
		let z = findReadySetupTarget(J, G, (l) => l.projectId === U);
		return z ? {
			status: "ready",
			target: z
		} : {
			status: "unavailable",
			reason: "project-has-no-ready-setup"
		};
	}
	if (V) {
		let l = findReadySetupTarget(J, G, (l) => l.hostId === V);
		return l ? {
			status: "ready",
			target: l
		} : {
			status: "unavailable",
			reason: "project-not-set-up-on-host"
		};
	}
	let Y = resolveComposerRepoId(l), X = Y ? G.get(Y) ?? [] : [], Z = (B && B !== "all" ? X.find((l) => getRepoExecutionHostId(l) === B) : null) ?? (X.length === 1 ? X[0] : null), Q = null;
	if (Z) {
		let l = projectHostSetupProjectionFromRepos([Z]).setups[0], z = getRepoExecutionHostId(Z), B = J.find((l) => l.repoId === Z.id && l.hostId === z && isReadySetup(l)) ?? (!K || K.has(l.hostId) ? l : null);
		Q = B ? createTarget(B, G) : null;
	} else Y && (Q = findReadySetupTarget(J, G, (l) => l.repoId === Y));
	if (Q) return {
		status: "ready",
		target: Q
	};
	let $ = findReadySetupTarget(J, G, () => !0);
	return $ ? {
		status: "ready",
		target: $
	} : {
		status: "unavailable",
		reason: Z ? "setup-not-found" : "no-eligible-repo"
	};
}
function resolveWorkspaceCreationRepoId(l) {
	let R = resolveWorkspaceCreationTarget(l);
	return R.status === "ready" ? R.target.repoId : "";
}
function getHiddenImportedWorktrees(l) {
	return getHiddenExternalWorktrees(l);
}
function buildImportedWorktreesCardCandidates(R) {
	let z = R.visibleWorktrees ? new Set(R.visibleWorktrees.map((l) => l.repoId)) : null, B = R.filterRepoIds?.length ? new Set(R.filterRepoIds) : null, H = /* @__PURE__ */ new Map();
	for (let U of R.repos) {
		if (B && !B.has(U.id) || z && !z.has(U.id) || !isGitRepoKind(U) || typeof U.externalWorktreeVisibilityPromptDismissedAt == "number" || effectiveExternalWorktreeVisibility(U, isLegacyRepoForExternalWorktreeVisibility(U), getRepoOwnerWorktreeVisibilityDefaults(U, R.settings, R.visibilityDefaultsByHost ?? {})) !== "hide" && !R.forceVisibleRepoIds?.has(U.id)) continue;
		let G = getHiddenImportedWorktrees(R.detectedWorktreesByRepo[U.id]);
		G.length > 0 && H.set(U.id, {
			repo: U,
			hiddenWorktrees: G
		});
	}
	return H;
}
function composePaletteEvidence(l) {
	let R = l.parts.filter((l) => !!l?.text.trim()).map((l) => ({
		...l,
		text: l.text.trim()
	}));
	if (!R.length) return null;
	let z = [], B = "";
	for (let V of R) B && (B += " · "), z.push({
		id: `${l.id}#${V.key}`,
		profile: V.profile,
		text: V.text,
		evidenceId: l.id,
		renderOffset: B.length,
		identifier: V.identifier
	}), B += V.text;
	return {
		unit: {
			id: l.id,
			kind: l.kind,
			text: B,
			accessibilityLabel: l.accessibilityLabel
		},
		fields: z
	};
}
function extractWorktreePaletteCommentSnippet(l, R, z) {
	let B = Math.max(0, R - 40), V = Math.min(l.length, z + 40);
	for (let R = 0; R < 10 && B > 0 && !/\s/.test(l[B - 1]); R++) B--;
	for (let R = 0; R < 10 && V < l.length && !/\s/.test(l[V]); R++) V++;
	B > 0 && (l.charCodeAt(B) & 64512) == 56320 && --B, V < l.length && (l.charCodeAt(V - 1) & 64512) == 55296 && (V += 1);
	let H = B > 0 ? "…" : "", U = V < l.length ? "…" : "";
	return {
		text: `${H}${l.slice(B, V)}${U}`,
		matchRange: {
			start: H.length + R - B,
			end: H.length + z - B
		}
	};
}
function toIsoDate(l) {
	if (!l || !Number.isFinite(l)) return "";
	let R = new Date(l), z = String(R.getMonth() + 1).padStart(2, "0"), B = String(R.getDate()).padStart(2, "0");
	return `${R.getFullYear()}-${z}-${B}`;
}
function buildWorktreeCommentEvidence(l) {
	return composePaletteEvidence({
		id: "comment",
		kind: "comment",
		accessibilityLabel: "Workspace comment",
		parts: [{
			key: "text",
			text: l,
			profile: "prose"
		}]
	});
}
function applyWorktreeCommentSnippet(l, R) {
	if (!R.length) return {
		text: l,
		ranges: R
	};
	let z = Math.min(...R.map((l) => l.start)), B = extractWorktreePaletteCommentSnippet(l, z, Math.max(...R.map((l) => l.end))), V = B.matchRange.start - z, H = R.map((l) => ({
		start: l.start + V,
		end: l.end + V
	})).filter((l) => l.start >= 0 && l.end <= B.text.length);
	return {
		text: B.text,
		ranges: H.length ? H : [B.matchRange]
	};
}
function buildWorktreeAutomationEvidence(l) {
	let R = l.automationProvenance;
	return R ? composePaletteEvidence({
		id: `automation:${R.automationRunId || R.automationId}`,
		kind: "automation",
		accessibilityLabel: "Created by automation",
		parts: [
			{
				key: "name",
				text: R.automationNameSnapshot,
				profile: "structured-label"
			},
			{
				key: "run-title",
				text: R.automationRunTitleSnapshot,
				profile: "structured-label"
			},
			{
				key: "run-id",
				text: R.automationRunId,
				profile: "identifier",
				identifier: { kind: "key" }
			},
			{
				key: "created",
				text: toIsoDate(R.createdAt),
				profile: "identifier",
				identifier: { kind: "date" }
			}
		]
	}) : null;
}
function resolveLinkedTaskIdentifier(l) {
	let R = l.linkedWorkItem;
	return R?.linearIdentifier ? R.linearIdentifier : R?.jiraIdentifier ? R.jiraIdentifier : R && R.number > 0 ? `#${R.number}` : l.linkedLinearIssue ?? "";
}
function buildWorktreeLinkedTaskEvidence(l) {
	let R = resolveLinkedTaskIdentifier(l), z = l.linkedWorkItem?.title ?? "";
	return !R && !z ? null : composePaletteEvidence({
		id: `task:${R || z}`,
		kind: "task",
		accessibilityLabel: "Linked task",
		parts: [{
			key: "identifier",
			text: R,
			profile: "identifier",
			identifier: { kind: "key" }
		}, {
			key: "title",
			text: z,
			profile: "prose"
		}]
	});
}
function buildWorktreeReviewEvidence(l) {
	if (!l || !Number.isFinite(l.number)) return null;
	let R = l.provider === "gitlab", z = R ? "!" : "#";
	return composePaletteEvidence({
		id: `review:${l.provider}:${l.number}`,
		kind: R ? "mr" : "pr",
		accessibilityLabel: R ? "Merge request" : "Pull request",
		parts: [{
			key: "number",
			text: `${z}${l.number}`,
			profile: "identifier",
			identifier: {
				kind: "number",
				sigil: z
			}
		}, {
			key: "title",
			text: l.title ?? "",
			profile: "prose"
		}]
	});
}
function buildWorktreeIssueEvidence(l) {
	return l.number == null || !Number.isFinite(l.number) ? null : composePaletteEvidence({
		id: `issue:${l.number}`,
		kind: "issue",
		accessibilityLabel: "Linked issue",
		parts: [{
			key: "number",
			text: `#${l.number}`,
			profile: "identifier",
			identifier: {
				kind: "number",
				sigil: "#"
			}
		}, {
			key: "title",
			text: l.title ?? "",
			profile: "prose"
		}]
	});
}
function buildWorktreePortEvidence(l) {
	return composePaletteEvidence({
		id: `port:${l.port}`,
		kind: "port",
		accessibilityLabel: "Listening port",
		parts: [{
			key: "number",
			text: String(l.port),
			profile: "identifier",
			identifier: { kind: "port" }
		}, {
			key: "process",
			text: l.processName ?? "",
			profile: "structured-label"
		}]
	});
}
const WORKTREE_PALETTE_NAME_FIELD_ID = "name", WORKTREE_PALETTE_BRANCH_FIELD_ID = "branch", WORKTREE_PALETTE_REPO_FIELD_ID = "repo", WORKTREE_PALETTE_HOST_FIELD_ID = "host";
function resolveReviewSource(l, R, z) {
	let B = z.checksReviewByWorktree?.get(l);
	if (B) return B;
	if (B === null) return null;
	let V = resolveWorktreeBranchLabel(l), H = R && z.prCache && getRepoExecutionHostId(R) === "local" ? z.prCache[`${R.path}::${V}`]?.data : null;
	return H && (l.linkedPR === null || H.number === l.linkedPR) && !isGitHubPRSuppressed(l, H.number) ? {
		provider: "github",
		number: H.number,
		title: H.title
	} : l.linkedPR == null ? l.linkedGitLabMR == null ? null : {
		provider: "gitlab",
		number: l.linkedGitLabMR
	} : {
		provider: "github",
		number: l.linkedPR
	};
}
function resolveIssueTitle(l, R, z) {
	if (l.linkedIssue == null || !R || !z.issueCache) return "";
	let B = issueCacheKey(R.path, R.id, l.linkedIssue, void 0, R.connectionId, R.executionHostId);
	return z.issueCache[B]?.data?.title ?? "";
}
function buildEvidence(l, R, z) {
	let B = buildWorktreeCommentEvidence(l.comment ?? "");
	if (z.evidencePolicy === "board") return B ? [B] : [];
	let V = z.workspacePortsByWorktreeId?.get(l.id) ?? [];
	return [
		B,
		buildWorktreeAutomationEvidence(l),
		buildWorktreeLinkedTaskEvidence(l),
		buildWorktreeReviewEvidence(resolveReviewSource(l, R, z)),
		buildWorktreeIssueEvidence({
			number: l.linkedIssue,
			title: resolveIssueTitle(l, R, z)
		}),
		...V.map((l) => buildWorktreePortEvidence(l))
	].filter((l) => l !== null);
}
function buildWorktreePaletteDocument(l, R) {
	let z = resolvePaletteRepoForWorktree(l, R.repoMap, R.repoMapByHostIdentity);
	return buildPaletteDocument({
		id: l.id,
		visibleFields: [
			{
				id: WORKTREE_PALETTE_NAME_FIELD_ID,
				profile: "structured-label",
				text: resolveWorktreeDisplayName(l),
				role: "primary",
				destinationEligible: !0
			},
			{
				id: WORKTREE_PALETTE_BRANCH_FIELD_ID,
				profile: "structured-label",
				text: resolveWorktreeBranchLabel(l),
				role: "secondary",
				destinationEligible: !0
			},
			{
				id: WORKTREE_PALETTE_REPO_FIELD_ID,
				profile: "structured-label",
				text: z?.displayName ?? "",
				role: "secondary",
				destinationEligible: !1
			},
			{
				id: WORKTREE_PALETTE_HOST_FIELD_ID,
				profile: "structured-label",
				text: R.hostLabelByWorktreeId?.get(getPaletteWorktreeIdentity(l)) ?? R.hostLabelByWorktreeId?.get(l.id) ?? "",
				role: "secondary",
				destinationEligible: !1
			}
		],
		compositePairs: [{
			leftFieldId: WORKTREE_PALETTE_REPO_FIELD_ID,
			rightFieldId: WORKTREE_PALETTE_BRANCH_FIELD_ID
		}, {
			leftFieldId: WORKTREE_PALETTE_REPO_FIELD_ID,
			rightFieldId: WORKTREE_PALETTE_NAME_FIELD_ID
		}],
		evidence: buildEvidence(l, z, R)
	});
}
function buildWorktreePaletteDocuments(l, R) {
	let z = /* @__PURE__ */ new Map();
	for (let B of l) z.set(getPaletteWorktreeIdentity(B), buildWorktreePaletteDocument(B, R));
	return z;
}
function splitGitRemoteKey(l, R) {
	let z = l?.trim().replace(/\/+$/, "").toLowerCase() ?? "", B = z.indexOf("/");
	return B <= 0 || B === z.length - 1 ? null : {
		host: R(z.slice(0, B).replace(/:\d+$/, "")),
		tail: z.slice(B + 1)
	};
}
function matchGitRemoteKeyParts(l, R) {
	return l.tail === R.tail ? l.host === R.host ? !0 : isUnresolvedSshHostAlias(l.host) ? "unknown" : !1 : !1;
}
function gitLabProjectKeyParts(l) {
	return {
		host: foldComparableGitLabHost(l.host.replace(/:\d+$/, "")),
		tail: l.path.replace(/^\/+/, "").replace(/\/+$/, "").replace(/\.git$/i, "").toLowerCase()
	};
}
function gitLabProjectKey(l) {
	let { host: R, tail: z } = gitLabProjectKeyParts(l);
	return `${R}/${z}`;
}
function gitLabLinksEqual(l, R) {
	return l.type === R.type && l.number === R.number && gitLabProjectKey(l.slug) === gitLabProjectKey(R.slug);
}
function repoMatchesGitLabSlug(l, R) {
	let z = splitGitRemoteKey(l?.gitRemoteIdentity?.canonicalKey, foldComparableGitLabHost);
	return z ? matchGitRemoteKeyParts(z, gitLabProjectKeyParts(R)) : "unknown";
}
function worktreeMatchesGitLabUrl(l, R, z, B) {
	let V = l.linkedWorkItem?.url ? parseGitLabIssueOrMRLink(l.linkedWorkItem.url) : null;
	if (V && gitLabLinksEqual(V, R)) return !0;
	let H = B?.provider === "gitlab" && B.url ? parseGitLabIssueOrMRLink(B.url) : null;
	if (H && gitLabLinksEqual(H, R)) return !0;
	let U = l.linkedWorkItem;
	if (!(U?.provider === "gitlab" && U.type === R.type && U.number === R.number || (R.type === "mr" ? l.linkedGitLabMR === R.number : l.linkedGitLabIssue === R.number))) return !1;
	let W = repoMatchesGitLabSlug(z, R.slug);
	return W === "unknown" ? !(V && V.type === R.type && V.number === R.number) : W;
}
var ACCESSIBILITY_LABELS = {
	comment: "Workspace comment",
	automation: "Created by automation",
	task: "Linked task",
	pr: "Pull request",
	mr: "Merge request",
	issue: "Linked issue",
	port: "Listening port"
};
function buildWorktreePaletteTaskUrlResult(l) {
	return {
		worktreeId: l.worktreeId,
		...l.worktreeHostId ? { worktreeHostId: l.worktreeHostId } : {},
		matchedFields: [l.labelKind],
		displayNameRanges: [],
		branchRanges: [],
		repoRanges: [],
		hostRanges: [],
		supportingText: {
			labelKind: l.labelKind,
			text: l.text,
			matchRanges: [{
				start: 0,
				end: l.text.length
			}],
			accessibilityLabel: ACCESSIBILITY_LABELS[l.labelKind]
		},
		qualityClass: "exact-intent",
		rank: createRecognizedPaletteRank(),
		lastActiveAt: null,
		activity: {
			ageBucket: null,
			timestamp: 0
		}
	};
}
function withResolvedCmdJGitHubPreview(l, R, z) {
	return l.provider === "github" ? R ? {
		...l,
		subtitle: R,
		createLabel: `${l.createLabel}: ${R}`,
		loading: !1
	} : z ? {
		...l,
		loading: !0
	} : l : l;
}
function githubIdentityKey(l) {
	return githubRepoIdentityKey({
		owner: l.owner,
		repo: l.repo,
		host: l.host?.replace(/^www\./i, "")
	});
}
function githubLinksEqual(l, R) {
	return l.type === R.type && l.number === R.number && githubIdentityKey(l.slug) === githubIdentityKey(R.slug);
}
function parseOwnerRepoDisplayName(l) {
	let R = /^([^/]+)\/([^/]+)$/.exec(l?.trim() ?? "");
	return R ? {
		owner: R[1],
		repo: R[2]
	} : null;
}
function githubRemoteKeyParts(l) {
	return {
		host: foldComparableGitHubHost((l.host || "github.com").replace(/:\d+$/, "")),
		tail: `${l.owner.toLowerCase()}/${l.repo.replace(/\.git$/i, "").toLowerCase()}`
	};
}
function remoteIdentityMatchesGitHubSlug(l, R) {
	let z = l.gitRemoteIdentity, B = splitGitRemoteKey(z?.canonicalKey, foldComparableGitHubHost);
	if (!B) return "unknown";
	let V = matchGitRemoteKeyParts(B, githubRemoteKeyParts(R));
	return V === !1 ? z?.remoteName === "upstream" ? "unknown" : !1 : V;
}
function repoMatchesGitHubSlug(l, R) {
	if (!l) return "unknown";
	let z = parseOwnerRepoDisplayName(l.displayName);
	return z ? githubIdentityKey({
		...z,
		host: R.host
	}) === githubIdentityKey(R) : l.upstream?.owner && l.upstream.repo ? githubIdentityKey(l.upstream) === githubIdentityKey(R) : remoteIdentityMatchesGitHubSlug(l, R);
}
function parseCmdJTaskSourceUrl(l) {
	let R = l.trim();
	if (!R || isWorktreePaletteQueryTooLarge(R)) return null;
	let z = parseLinearIssueUrlIntent(R);
	if (z) return {
		provider: "linear",
		intent: z
	};
	let B = parseGitHubIssueOrPRLink(R);
	if (B) return {
		provider: "github",
		link: B
	};
	let V = parseGitLabIssueOrMRLink(R);
	if (V) return {
		provider: "gitlab",
		link: V
	};
	let H = parseJiraIssueUrl(R);
	return H ? {
		provider: "jira",
		parsed: H
	} : null;
}
function getCmdJTaskUrlCreatePreview(l) {
	if (l.provider === "linear") return null;
	if (l.provider === "github") {
		let { slug: R, number: z, type: B } = l.link, V = `${R.owner}/${R.repo}`, H = B === "pr" ? "GitHub pull request" : "GitHub issue";
		return {
			provider: "github",
			identifier: `#${z}`,
			subtitle: V,
			kindLabel: H,
			createLabel: `Create worktree from ${H} ${V}#${z}`
		};
	}
	if (l.provider === "gitlab") {
		let { slug: R, number: z, type: B } = l.link, V = `${R.host}/${R.path}`, H = B === "mr" ? "GitLab merge request" : "GitLab issue", U = B === "mr" ? `!${z}` : `#${z}`;
		return {
			provider: "gitlab",
			identifier: U,
			subtitle: V,
			kindLabel: H,
			createLabel: `Create worktree from ${H} ${V}${U}`
		};
	}
	return {
		provider: "jira",
		identifier: l.parsed.issueKey,
		subtitle: l.parsed.origin.replace(/^https?:\/\//, ""),
		kindLabel: "Jira issue",
		createLabel: `Create worktree from Jira issue ${l.parsed.issueKey}`
	};
}
function worktreeMatchesGitHubUrl(l, R, z, B) {
	let V = l.linkedWorkItem?.url ? parseGitHubIssueOrPRLink(l.linkedWorkItem.url) : null;
	if (V && githubLinksEqual(V, R)) return !0;
	let H = B?.url ? parseGitHubIssueOrPRLink(B.url) : null;
	if (H && githubLinksEqual(H, R)) return !0;
	let U = l.linkedWorkItem;
	return U?.provider === "github" && U.type === R.type && U.number === R.number || (R.type === "pr" ? l.linkedPR === R.number : l.linkedIssue === R.number) ? repoMatchesGitHubSlug(z, R.slug) !== !1 : !1;
}
function worktreeMatchesLinearUrl(l, R) {
	let z = normalizeLinearIdentifier(R.identifier), B = normalizeLinearIdentifier(l.linkedLinearIssue) ?? normalizeLinearIdentifier(l.linkedWorkItem?.linearIdentifier);
	if (!z || B !== z) {
		let z = l.linkedWorkItem?.url ? parseLinearIssueUrlIntent(l.linkedWorkItem.url) : null;
		if (!z || z.identifier !== R.identifier || z.organizationUrlKey.toLowerCase() !== R.organizationUrlKey.toLowerCase()) return !1;
	}
	let V = l.linkedLinearIssueOrganizationUrlKey?.trim().toLowerCase();
	return !(V && V !== R.organizationUrlKey.toLowerCase());
}
function worktreeMatchesJiraUrl(l, R) {
	let z = l.linkedWorkItem?.url ? parseJiraIssueUrl(l.linkedWorkItem.url) : null;
	return z ? z.issueKey === R.issueKey && z.origin === R.origin && z.sitePath === R.sitePath : l.linkedWorkItem?.jiraIdentifier?.toUpperCase() === R.issueKey;
}
function matchWorktreePaletteTaskUrl(l) {
	let { worktree: R, intent: z, repo: B, review: V } = l, H = getPaletteWorktreeExecutionHostId(R);
	return z.provider === "github" ? worktreeMatchesGitHubUrl(R, z.link, B, V) ? buildWorktreePaletteTaskUrlResult({
		worktreeId: R.id,
		...H ? { worktreeHostId: H } : {},
		labelKind: z.link.type === "pr" ? "pr" : "issue",
		text: `${z.link.type === "pr" ? "PR" : "Issue"} #${z.link.number}`
	}) : null : z.provider === "linear" ? worktreeMatchesLinearUrl(R, z.intent) ? buildWorktreePaletteTaskUrlResult({
		worktreeId: R.id,
		...H ? { worktreeHostId: H } : {},
		labelKind: "issue",
		text: z.intent.identifier
	}) : null : z.provider === "gitlab" ? worktreeMatchesGitLabUrl(R, z.link, B, V) ? buildWorktreePaletteTaskUrlResult({
		worktreeId: R.id,
		...H ? { worktreeHostId: H } : {},
		labelKind: z.link.type === "mr" ? "mr" : "issue",
		text: `${z.link.type === "mr" ? "MR" : "Issue"} #${z.link.number}`
	}) : null : worktreeMatchesJiraUrl(R, z.parsed) ? buildWorktreePaletteTaskUrlResult({
		worktreeId: R.id,
		...H ? { worktreeHostId: H } : {},
		labelKind: "issue",
		text: z.parsed.issueKey
	}) : null;
}
var NO_RANGES = [];
function getWorktreePaletteSearchScope(l) {
	return l.hasQuery ? l.allWorktrees.filter((l) => !l.isArchived) : [...l.emptyQueryWorktrees];
}
function makeEmptyPaletteSearchResult(l, R, z = createPaletteSearchContext(Date.now()), B) {
	let V = preparePaletteActivity(B, z);
	return {
		worktreeId: l,
		...R ? { worktreeHostId: R } : {},
		matchedFields: [],
		displayNameRanges: NO_RANGES,
		branchRanges: NO_RANGES,
		repoRanges: NO_RANGES,
		hostRanges: NO_RANGES,
		supportingText: null,
		qualityClass: null,
		rank: null,
		lastActiveAt: V.timestamp || null,
		activity: V
	};
}
var VISIBLE_FIELD_LABELS = new Map([
	[WORKTREE_PALETTE_NAME_FIELD_ID, "displayName"],
	[WORKTREE_PALETTE_BRANCH_FIELD_ID, "branch"],
	[WORKTREE_PALETTE_REPO_FIELD_ID, "repo"],
	[WORKTREE_PALETTE_HOST_FIELD_ID, "host"]
]);
function toSupportingText(l) {
	let R = l.supportingEvidence[0];
	if (!R) return null;
	let z = R.kind;
	if (z === "comment") {
		let l = applyWorktreeCommentSnippet(R.text, R.ranges);
		return {
			labelKind: z,
			text: l.text,
			matchRanges: l.ranges,
			accessibilityLabel: R.accessibilityLabel
		};
	}
	return {
		labelKind: z,
		text: R.text,
		matchRanges: R.ranges,
		accessibilityLabel: R.accessibilityLabel
	};
}
function toWorktreePaletteSearchResult(l, R, z, B = createPaletteSearchContext(Date.now()), V) {
	let H = preparePaletteActivity(V, B), U = toSupportingText(R), W = [];
	for (let l of R.rangesByField.keys()) {
		let R = VISIBLE_FIELD_LABELS.get(l);
		R && !W.includes(R) && W.push(R);
	}
	return U && W.push(U.labelKind), {
		worktreeId: l,
		...z ? { worktreeHostId: z } : {},
		matchedFields: W,
		displayNameRanges: R.rangesByField.get("name") ?? NO_RANGES,
		branchRanges: R.rangesByField.get("branch") ?? NO_RANGES,
		repoRanges: R.rangesByField.get("repo") ?? NO_RANGES,
		hostRanges: R.rangesByField.get("host") ?? NO_RANGES,
		supportingText: U,
		qualityClass: R.qualityClass,
		rank: R.rank,
		lastActiveAt: H.timestamp || null,
		activity: H
	};
}
function searchWorktreeDocuments(l) {
	let R = l.context ?? createPaletteSearchContext(Date.now()), z = preparePaletteQuery(l.query);
	if (z.state === "invalid") return [];
	if (z.state === "empty") return l.worktrees.map((l) => makeEmptyPaletteSearchResult(l.id, getPaletteWorktreeExecutionHostId(l), R, l.lastActivityAt));
	let B = parseCmdJTaskSourceUrl(l.query.trim()), V = [];
	for (let H of l.worktrees) {
		if (B) {
			let z = matchWorktreePaletteTaskUrl({
				worktree: H,
				intent: B,
				repo: resolvePaletteRepoForWorktree(H, l.repoMap, l.repoMapByHostIdentity),
				review: l.checksReviewByWorktree?.get(H)
			});
			if (z) {
				let l = preparePaletteActivity(H.lastActivityAt, R);
				V.push({
					...z,
					lastActiveAt: l.timestamp || null,
					activity: l
				});
			}
			continue;
		}
		let U = l.documents.get(getPaletteWorktreeIdentity(H));
		if (!U) continue;
		let W = matchPaletteDocument({
			document: U,
			tokens: z.tokens,
			normalizedQuery: z.normalized,
			tokenCountBeforeDeduplication: z.tokenCountBeforeDeduplication
		});
		W && V.push(toWorktreePaletteSearchResult(H.id, W, getPaletteWorktreeExecutionHostId(H), R, H.lastActivityAt));
	}
	return V;
}
var listeners = /* @__PURE__ */ new Set();
function subscribeCmdJRowIndexJump(l) {
	return listeners.add(l), () => {
		listeners.delete(l);
	};
}
function emitCmdJRowIndexJump(l) {
	for (let R of listeners) R(l);
}
var currentDispatcher = null;
function registerAppCommandDispatcher(l) {
	return currentDispatcher = l, () => {
		currentDispatcher === l && (currentDispatcher = null);
	};
}
function dispatchAppCommand(l, R) {
	return isKeybindingActionId(l) && currentDispatcher !== null ? currentDispatcher(l, R) : !1;
}
async function executePluginCommand(l, R) {
	if (l.handler.type === "built-in") {
		if (!dispatchAppCommand(l.handler.action, R)) throw Error("built-in action is unavailable in the current context");
		return;
	}
	await window.api.plugins.invokeCommand({
		pluginKey: l.pluginKey,
		commandId: l.id
	});
}
export { resolveComposerGitRepoId as _, getWorktreePaletteSearchScope as a, parseCmdJTaskSourceUrl as c, buildImportedWorktreesCardCandidates as d, getHiddenImportedWorktrees as f, resolveComposerActiveRepoId as g, getComposerEligibleRepos as h, subscribeCmdJRowIndexJump as i, withResolvedCmdJGitHubPreview as l, resolveWorkspaceCreationTarget as m, registerAppCommandDispatcher as n, searchWorktreeDocuments as o, resolveWorkspaceCreationRepoId as p, emitCmdJRowIndexJump as r, getCmdJTaskUrlCreatePreview as s, executePluginCommand as t, buildWorktreePaletteDocuments as u, splitPathHeadForElision as v, lookupLinearIssueUrl as y };
