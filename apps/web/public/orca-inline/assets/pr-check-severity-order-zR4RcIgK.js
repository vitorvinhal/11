var CHECK_SEVERITY_RANK = new Map([
	["failure", 0],
	["timed_out", 0],
	["action_required", 0],
	["cancelled", 1],
	["pending", 2],
	["success", 3],
	["neutral", 4],
	["skipped", 5]
]), UNKNOWN_CHECK_RANK = 6;
function getCheckSeverityRank(r) {
	return CHECK_SEVERITY_RANK.get(r ?? "pending") ?? UNKNOWN_CHECK_RANK;
}
function sortChecksBySeverity(e) {
	return e.length < 2 ? e.slice() : e.map((e, n) => ({
		check: e,
		index: n,
		rank: getCheckSeverityRank(e.conclusion)
	})).sort((e, n) => e.rank - n.rank || e.index - n.index).map(({ check: e }) => e);
}
export { sortChecksBySeverity as t };
