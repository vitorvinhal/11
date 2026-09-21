var LEGACY_REMOTE_REF_PREFIXES = ["origin/", "upstream/"];
function deriveLegacyLocalBranchName(t) {
	for (let n of LEGACY_REMOTE_REF_PREFIXES) if (t.startsWith(n) && t.length > n.length) return t.slice(n.length);
	return t;
}
function legacyBaseRefSearchResult(e) {
	return {
		refName: e,
		localBranchName: deriveLegacyLocalBranchName(e)
	};
}
export { legacyBaseRefSearchResult as t };
