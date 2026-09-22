import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
var PATH_SCORE_OFFSET = 1e3;
function isRepoSearchQueryTooLarge(t, n = 2048) {
	return isClipboardTextByteLengthOverLimit(t, n);
}
function matchScore(e, n) {
	let r = e.displayName.toLowerCase().indexOf(n);
	if (r !== -1) return r;
	let i = e.path.toLowerCase().indexOf(n);
	return i === -1 ? null : PATH_SCORE_OFFSET + i;
}
function searchRepos(e, t) {
	if (isRepoSearchQueryTooLarge(t)) return [];
	let i = t.trim().toLowerCase();
	if (!i) return e;
	let a = [];
	for (let [t, n] of e.entries()) {
		let e = matchScore(n, i);
		e !== null && a.push({
			repo: n,
			score: e,
			index: t
		});
	}
	return a.sort((e, t) => e.score - t.score || e.index - t.index), a.map((e) => e.repo);
}
export { searchRepos as n, isRepoSearchQueryTooLarge as t };
