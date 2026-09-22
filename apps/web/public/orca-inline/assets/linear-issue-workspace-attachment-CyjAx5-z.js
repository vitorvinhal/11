import { Gv as callRuntimeRpc, Ya as getTaskSourceRuntimeSettings, Yv as getActiveRuntimeTarget, am as getExplicitRuntimeOwnerEnvironmentId, iC as parseExecutionHostId } from "./store-C9f8FDJV.js";
import { M as buildLinearWorkspaceSource, P as getUsableLinearBranchName } from "./native-chat-session-option-cache-DOY0fjiI.js";
import { g as parseLinearIssueInput, m as getLinearOrganizationUrlKeyFromIssueUrl } from "./gitlab-links-Di3ozbga.js";
function getGitHubSourceRuntimeHost(t) {
	if (t?.provider !== "github") return null;
	let S = parseExecutionHostId(t.hostId);
	return S?.kind === "runtime" ? S : null;
}
function getGitHubSourceRuntimeTarget(t) {
	return getActiveRuntimeTarget(getTaskSourceRuntimeSettings(t?.provider === "github" ? t : null));
}
function getGitHubMutationRoutingSettings(t, S, C) {
	return { activeRuntimeEnvironmentId: getGitHubSourceRuntimeHost(C)?.environmentId ?? getExplicitRuntimeOwnerEnvironmentId(t, S) };
}
function canUseGitHubRepoContext(t, S) {
	return !!t || getGitHubSourceRuntimeHost(S) !== null;
}
function getGitHubRuntimeRepoId(t, S) {
	let C = S ?? void 0;
	return t?.provider === "github" ? t.repoId ?? C : C;
}
function runtimeRepoId(t) {
	return getGitHubRuntimeRepoId(t.sourceContext, t.repoId);
}
async function lookupGitHubWorkItemForSource(S) {
	let C = getGitHubSourceRuntimeTarget(S.sourceContext), w = C.kind === "environment" ? await callRuntimeRpc(C, "github.workItem", {
		repo: runtimeRepoId(S),
		number: S.number,
		type: S.type
	}, { timeoutMs: 3e4 }) : await window.api.gh.workItem({
		repoPath: S.repoPath,
		repoId: S.repoId,
		number: S.number,
		type: S.type
	});
	return w ? {
		...w,
		repoId: S.repoId
	} : null;
}
async function lookupGitHubWorkItemByOwnerRepoForSource(S) {
	let C = getGitHubSourceRuntimeTarget(S.sourceContext), w = C.kind === "environment" ? await callRuntimeRpc(C, "github.workItemByOwnerRepo", {
		repo: runtimeRepoId(S),
		owner: S.owner,
		ownerRepo: S.repo,
		...S.host ? { host: S.host } : {},
		number: S.number,
		type: S.type
	}, { timeoutMs: 3e4 }) : await window.api.gh.workItemByOwnerRepo({
		repoPath: S.repoPath,
		repoId: S.repoId,
		owner: S.owner,
		repo: S.repo,
		...S.host ? { host: S.host } : {},
		number: S.number,
		type: S.type
	});
	return w ? {
		...w,
		repoId: S.repoId
	} : null;
}
function lookupGitHubWorkItemDetailsForSource(S) {
	let C = S.sourceContext, w = getGitHubSourceRuntimeHost(C);
	return w ? callRuntimeRpc({
		kind: "environment",
		environmentId: w.environmentId
	}, "github.workItemDetails", {
		repo: getGitHubRuntimeRepoId(C, S.repoId),
		number: S.number,
		type: S.type
	}, { timeoutMs: 3e4 }) : window.api.gh.workItemDetails({
		repoPath: S.repoPath,
		repoId: S.repoId,
		sourceContext: C,
		number: S.number,
		type: S.type
	});
}
function isLinearLinkedWorkItem(t) {
	return t?.provider === "linear" || !!t?.linearIdentifier?.trim();
}
function getLinearLinkedWorkItemBranchName(t) {
	return isLinearLinkedWorkItem(t) ? getUsableLinearBranchName(t?.linearBranchName) : void 0;
}
function buildLinearIssueLinkedWorkItem(t) {
	return buildLinearWorkspaceSource(t);
}
function normalizeLinearIdentifier(t) {
	let S = t?.trim();
	return S ? (parseLinearIssueInput(S)?.identifier ?? S).toUpperCase() : null;
}
function scopeMatchScore(t) {
	let S = t.issueWorkspaceId?.trim() || null, C = t.worktreeWorkspaceId?.trim() || null;
	if (S && C && S !== C) return null;
	let w = t.issueOrganizationUrlKey?.trim().toLowerCase() || null, T = t.worktreeOrganizationUrlKey?.trim().toLowerCase() || null;
	return w && T && w !== T ? null : Number(!!(S && C)) + Number(!!(w && T));
}
function findScopedAttachment(t, S) {
	let C = getLinearOrganizationUrlKeyFromIssueUrl(S.url), w = null, T = -1;
	for (let E of t) {
		let t = scopeMatchScore({
			issueWorkspaceId: S.workspaceId,
			worktreeWorkspaceId: E.linkedLinearIssueWorkspaceId,
			issueOrganizationUrlKey: C,
			worktreeOrganizationUrlKey: E.linkedLinearIssueOrganizationUrlKey
		});
		t != null && (t > T || t === T && w && E.lastActivityAt > w.lastActivityAt) && (w = E, T = t);
	}
	return w;
}
function findLinearIssueWorkspaceAttachment(t, S) {
	let C = normalizeLinearIdentifier(S.identifier);
	return C ? findScopedAttachment(t.filter((t) => !t.isArchived && normalizeLinearIdentifier(t.linkedLinearIssue) === C), S) : null;
}
function buildLinearIssueWorkspaceAttachmentIndex(t) {
	let S = /* @__PURE__ */ new Map();
	for (let C of t) {
		if (C.isArchived) continue;
		let t = normalizeLinearIdentifier(C.linkedLinearIssue);
		if (!t) continue;
		let w = S.get(t);
		w ? w.push(C) : S.set(t, [C]);
	}
	return S;
}
function findLinearIssueWorkspaceAttachmentInIndex(t, S) {
	let C = normalizeLinearIdentifier(S.identifier);
	if (!C) return null;
	let w = t.get(C);
	return w ? findScopedAttachment(w, S) : null;
}
export { buildLinearIssueLinkedWorkItem as a, lookupGitHubWorkItemByOwnerRepoForSource as c, canUseGitHubRepoContext as d, getGitHubMutationRoutingSettings as f, getGitHubSourceRuntimeTarget as h, normalizeLinearIdentifier as i, lookupGitHubWorkItemDetailsForSource as l, getGitHubSourceRuntimeHost as m, findLinearIssueWorkspaceAttachment as n, getLinearLinkedWorkItemBranchName as o, getGitHubRuntimeRepoId as p, findLinearIssueWorkspaceAttachmentInIndex as r, isLinearLinkedWorkItem as s, buildLinearIssueWorkspaceAttachmentIndex as t, lookupGitHubWorkItemForSource as u };
