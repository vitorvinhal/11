function shouldSuppressEnterSubmit(e, n) {
	return e.isComposing || n && e.shiftKey;
}
function shouldAllowComposerEnterSubmitTarget(e, n) {
	return e instanceof HTMLElement ? n?.contains(e) ? !0 : n ? e.contains(n) : !1 : !1;
}
function getTaskPresetQuery(e) {
	switch (e) {
		case "all":
		case "issues": return "is:issue is:open";
		case "my-issues": return "assignee:@me is:issue is:open";
		case "prs": return "is:pr is:open";
		case "my-prs": return "author:@me is:pr is:open";
		case "review": return "review-requested:@me is:pr is:open";
		case null: return "is:issue is:open";
	}
}
export { shouldAllowComposerEnterSubmitTarget as n, shouldSuppressEnterSubmit as r, getTaskPresetQuery as t };
