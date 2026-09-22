function getRepositoryLocalCommandsSectionId(e) {
	return `repo-${e}-local-commands`;
}
function getRepositoryIconSectionId(e) {
	return `repo-${e}-icon`;
}
function getRepositorySourceControlAiSectionId(e) {
	return `repo-${e}-source-control-ai`;
}
function getRepositorySourceControlAiActionRecipeSectionId(e, r) {
	return `repo-${e}-source-control-ai-${r}`;
}
export { getRepositorySourceControlAiSectionId as i, getRepositoryLocalCommandsSectionId as n, getRepositorySourceControlAiActionRecipeSectionId as r, getRepositoryIconSectionId as t };
