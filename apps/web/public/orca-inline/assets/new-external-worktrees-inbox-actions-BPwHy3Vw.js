import { i as translate } from "./i18n-CakWKPtl.js";
import { a as mergeExternalWorktreeInboxPaths } from "./external-worktree-inbox-DUr-jvnx.js";
function newExternalWorktreeInboxImportError() {
	return translate("auto.components.sidebar.newExternalWorktreesInboxActions.b7e4d1a062", "Could not import external worktrees. Try again.");
}
function newExternalWorktreeInboxSuppressError() {
	return translate("auto.components.sidebar.newExternalWorktreesInboxActions.c94f0b3a15", "Could not hide external worktrees permanently. Try again.");
}
function rollbackPathList(e) {
	return [...e ?? []];
}
async function refreshAfterRepoInboxUpdate(e, a, s) {
	return e.setInboxState(e.projectId, {
		pending: !0,
		error: null
	}), await e.updateRepo(e.projectId, a) ? await e.fetchWorktrees(e.projectId, { requireAuthoritative: !0 }) ? (e.setInboxState(e.projectId, null), !0) : (await e.updateRepo(e.projectId, s), e.setInboxState(e.projectId, {
		pending: !1,
		error: newExternalWorktreeInboxImportError()
	}), !1) : (e.setInboxState(e.projectId, {
		pending: !1,
		error: newExternalWorktreeInboxImportError()
	}), !1);
}
async function importNewExternalWorktreeInboxPaths(e) {
	await refreshAfterRepoInboxUpdate(e, {
		importedExternalWorktreePaths: mergeExternalWorktreeInboxPaths(e.repo.importedExternalWorktreePaths, e.worktreePaths),
		externalWorktreeInboxBaselinePaths: mergeExternalWorktreeInboxPaths(e.repo.externalWorktreeInboxBaselinePaths, e.worktreePaths)
	}, {
		importedExternalWorktreePaths: rollbackPathList(e.repo.importedExternalWorktreePaths),
		externalWorktreeInboxBaselinePaths: rollbackPathList(e.repo.externalWorktreeInboxBaselinePaths)
	});
}
async function suppressNewExternalWorktreeInbox(e) {
	e.setInboxState(e.projectId, {
		pending: !0,
		error: null
	});
	let o = mergeExternalWorktreeInboxPaths(e.repo.externalWorktreeInboxBaselinePaths, e.worktreePaths);
	return await e.updateRepo(e.projectId, {
		externalWorktreeDiscoverySuppressedAt: Date.now(),
		externalWorktreeInboxBaselinePaths: o
	}) ? (e.setInboxState(e.projectId, null), !0) : (e.setInboxState(e.projectId, {
		pending: !1,
		error: newExternalWorktreeInboxSuppressError()
	}), !1);
}
export { suppressNewExternalWorktreeInbox as n, importNewExternalWorktreeInboxPaths as t };
