import { xm as basename } from "./store-C9f8FDJV.js";
function getBaseLabel(t, n) {
	switch (n) {
		case "fullPath": return t.filePath;
		case "relativePath": return t.relativePath;
		case "fileName": return basename(t.relativePath);
	}
}
var DIFF_SOURCE_LABELS = {
	staged: "staged diff",
	unstaged: "diff",
	branch: "branch diff",
	commit: "commit diff"
};
function getEditorDisplayLabel(e, r = "fileName") {
	if (e.mode === "conflict-review") return "Conflict Review";
	if (e.mode === "check-details") return e.checkRunDetails?.check.name ?? getBaseLabel(e, r);
	if (e.mode === "markdown-preview") return `${getBaseLabel(e, r)} (preview)`;
	if (e.mode !== "diff") return getBaseLabel(e, r);
	let i = e.diffSource;
	return i === "combined-all" ? "All Changes" : i === "combined-uncommitted" ? e.combinedAreaFilter ? getBaseLabel(e, r) : "Uncommitted Changes" : i === "combined-branch" ? `Branch Changes (${e.branchCompare?.baseRef ?? "base"})` : i === "combined-commit" ? e.commitCompare?.subject ? `Commit ${e.commitCompare.compareRef}: ${e.commitCompare.subject}` : `Commit ${e.commitCompare?.compareRef ?? "diff"}` : `${getBaseLabel(e, r)} (${(i && DIFF_SOURCE_LABELS[i]) ?? "diff"})`;
}
export { getEditorDisplayLabel as t };
