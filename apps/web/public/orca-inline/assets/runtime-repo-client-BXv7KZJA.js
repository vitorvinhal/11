import { Gv as callRuntimeRpc, Yv as getActiveRuntimeTarget } from "./store-C9f8FDJV.js";
import { C as isUtf8ByteLengthWithinLimit } from "./renderer-app-platform--nJ6HYmL.js";
import { t as legacyBaseRefSearchResult } from "./base-ref-search-result-C0RGz11h.js";
function isRuntimeRepoRefSearchQueryWithinLimit(e, t = 2048) {
	return isUtf8ByteLengthWithinLimit(e, t);
}
async function getRuntimeRepoBaseRefDefault(n, r, i) {
	let a = getActiveRuntimeTarget(n);
	return a.kind === "environment" ? callRuntimeRpc(a, "repo.baseRefDefault", { repo: r }, { timeoutMs: 15e3 }) : window.api.repos.getBaseRefDefault({
		repoId: r,
		...i ? { hostId: i } : {}
	});
}
async function searchRuntimeRepoBaseRefs(n, r, a, o, s) {
	if (!isRuntimeRepoRefSearchQueryWithinLimit(a)) return [];
	let c = getActiveRuntimeTarget(n);
	return c.kind === "environment" ? (await callRuntimeRpc(c, "repo.searchRefs", {
		repo: r,
		query: a,
		limit: o
	}, { timeoutMs: 15e3 })).refs : window.api.repos.searchBaseRefs({
		repoId: r,
		query: a,
		limit: o,
		...s ? { hostId: s } : {}
	});
}
async function searchRuntimeRepoBaseRefDetails(n, a, o, s, c) {
	if (!isRuntimeRepoRefSearchQueryWithinLimit(o)) return [];
	let l = getActiveRuntimeTarget(n);
	if (l.kind !== "environment") return window.api.repos.searchBaseRefDetails({
		repoId: a,
		query: o,
		limit: s,
		...c ? { hostId: c } : {}
	});
	let u = await callRuntimeRpc(l, "repo.searchRefs", {
		repo: a,
		query: o,
		limit: s
	}, { timeoutMs: 15e3 });
	return u.refDetails ?? u.refs.map(legacyBaseRefSearchResult);
}
export { isRuntimeRepoRefSearchQueryWithinLimit as i, searchRuntimeRepoBaseRefDetails as n, searchRuntimeRepoBaseRefs as r, getRuntimeRepoBaseRefDefault as t };
