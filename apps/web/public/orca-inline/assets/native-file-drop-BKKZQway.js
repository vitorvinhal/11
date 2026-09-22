import { _ as measureClipboardTextByteLength } from "./renderer-app-platform--nJ6HYmL.js";
const NATIVE_FILE_DROP_MAX_PATHS = 256, NATIVE_FILE_DROP_MAX_PATH_BYTES = 256 * 1024, NATIVE_FILE_DROP_TARGET = {
	editor: "editor",
	terminal: "terminal",
	composer: "composer",
	fileExplorer: "file-explorer",
	projectSidebar: "project-sidebar"
};
function getDataTransferTypes(e) {
	return e ? Array.from(e) : [];
}
function hasNativeFileDragTypes(e) {
	let n = getDataTransferTypes(e);
	return n.includes("Files") && !n.includes("text/x-orca-file-path");
}
function validateNativeFileDropPaths(n, r = {}) {
	let i = n.length;
	if (i > (r.maxPaths ?? 256)) return {
		byteLength: 0,
		pathCount: i,
		reason: "too-many-paths",
		status: "rejected"
	};
	let a = r.maxPathBytes ?? 262144, o = 0;
	for (let r of n) {
		let n = measureClipboardTextByteLength(r, { stopAfterBytes: a - o });
		if (o += n.byteLength, o > a) return {
			byteLength: o,
			pathCount: i,
			reason: "paths-too-large",
			status: "rejected"
		};
	}
	return {
		byteLength: o,
		pathCount: i,
		status: "accepted"
	};
}
export { validateNativeFileDropPaths as a, hasNativeFileDragTypes as i, NATIVE_FILE_DROP_MAX_PATH_BYTES as n, NATIVE_FILE_DROP_TARGET as r, NATIVE_FILE_DROP_MAX_PATHS as t };
