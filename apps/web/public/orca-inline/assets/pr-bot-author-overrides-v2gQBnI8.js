const MAX_PR_BOT_AUTHOR_OVERRIDES = 500;
function normalizePRCommentAuthorLogin(e) {
	return e.length > 255 ? "" : e.trim().toLowerCase();
}
function createBotAuthorOverrideSet(e) {
	let n = /* @__PURE__ */ new Set(), r = (e ?? [])[Symbol.iterator](), i = 0;
	for (; i < 500;) {
		let e = r.next();
		if (e.done) break;
		i += 1;
		let a = e.value;
		if (typeof a != "string") continue;
		let o = normalizePRCommentAuthorLogin(a);
		o && n.add(o);
	}
	return n;
}
function normalizePRBotAuthorOverrides(e) {
	return Array.isArray(e) ? [...createBotAuthorOverrideSet(e)].sort() : [];
}
function applyPRBotAuthorOverride(e, r, i) {
	let a = new Set(createBotAuthorOverrideSet(e)), o = normalizePRCommentAuthorLogin(r);
	if (!o || a.has(o) === i) return [...a].sort();
	if (i) {
		if (a.size >= 500) return [...a].sort();
		a.add(o);
	} else a.delete(o);
	return [...a].sort();
}
export { normalizePRCommentAuthorLogin as a, normalizePRBotAuthorOverrides as i, applyPRBotAuthorOverride as n, createBotAuthorOverrideSet as r, MAX_PR_BOT_AUTHOR_OVERRIDES as t };
