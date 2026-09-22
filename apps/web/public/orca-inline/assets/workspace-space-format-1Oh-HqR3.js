import { t as formatUiRelativeTime } from "./relative-time-format-Clpgwkog.js";
var BYTE_UNITS = [
	"B",
	"KB",
	"MB",
	"GB",
	"TB",
	"PB"
], fullDateTimeFormatter = new Intl.DateTimeFormat(void 0, {
	dateStyle: "medium",
	timeStyle: "short"
});
function formatBytes(e) {
	if (!Number.isFinite(e) || e <= 0) return "0 B";
	let s = e, c = 0;
	for (; s >= 1024 && c < BYTE_UNITS.length - 1;) s /= 1024, c += 1;
	let l = s >= 100 || c === 0 ? 0 : s >= 10 ? 1 : 2;
	return `${s.toFixed(l)} ${BYTE_UNITS[c]}`;
}
function formatCompactCount(e) {
	return !Number.isFinite(e) || e <= 0 ? "0" : e < 1e3 ? String(e) : e < 1e6 ? `${(e / 1e3).toFixed(e >= 1e4 ? 0 : 1)}k` : `${(e / 1e6).toFixed(e >= 1e7 ? 0 : 1)}m`;
}
function getWorkspaceSpaceScanTimeLabel(o, s = Date.now()) {
	return formatUiRelativeTime(o - s);
}
function getWorkspaceSpaceScanDateTimeLabel(e) {
	return fullDateTimeFormatter.format(new Date(e));
}
function getWorkspaceSpaceProgressLabel(e) {
	if (!e) return null;
	if (e.state === "cancelling") return "Cancelling scan";
	let o = e.currentWorktreeDisplayName ?? e.currentRepoDisplayName ?? "workspaces";
	return e.totalWorktreeCount > 0 ? `Scanning ${e.scannedWorktreeCount} of ${e.totalWorktreeCount} · ${o}` : e.totalRepoCount > 0 ? `Scanning ${e.scannedRepoCount} of ${e.totalRepoCount} repos · ${o}` : "Scanning workspace sizes";
}
function getWorkspaceSpaceStatusLabel(e) {
	switch (e) {
		case "ok": return "Scanned";
		case "missing": return "Missing";
		case "permission-denied": return "No access";
		case "unavailable": return "Unavailable";
		case "error": return "Failed";
	}
}
function getWorkspaceSpaceBranchLabel(e) {
	return e.branch.replace(/^refs\/heads\//, "").trim() || (e.isMainWorktree ? "main worktree" : "detached");
}
export { getWorkspaceSpaceScanDateTimeLabel as a, getWorkspaceSpaceProgressLabel as i, formatCompactCount as n, getWorkspaceSpaceScanTimeLabel as o, getWorkspaceSpaceBranchLabel as r, getWorkspaceSpaceStatusLabel as s, formatBytes as t };
