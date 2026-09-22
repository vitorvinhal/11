import { Mg as findFolderWorkspaceOwner, gm as getIndexedWorktreeById, vv as parseWorkspaceKey } from "./store-C9f8FDJV.js";
var EMPTY_DIFF_COMMENTS = Object.freeze([]);
function selectWorktreeDiffComments(r, i) {
	if (!i) return;
	let a = parseWorkspaceKey(i);
	return a?.type === "folder" ? findFolderWorkspaceOwner(r, a.folderWorkspaceId)?.diffComments : getIndexedWorktreeById(r.worktreesByRepo, i)?.diffComments;
}
function selectWorktreeDiffCommentsOrEmpty(e, n) {
	return selectWorktreeDiffComments(e, n) ?? EMPTY_DIFF_COMMENTS;
}
export { selectWorktreeDiffCommentsOrEmpty as n, selectWorktreeDiffComments as t };
