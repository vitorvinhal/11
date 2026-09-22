import { $y as normalizeRuntimePathForComparison, nC as normalizeExecutionHostId } from "./store-C9f8FDJV.js";
import { _ as measureClipboardTextByteLength } from "./renderer-app-platform--nJ6HYmL.js";
import { a as validateNativeFileDropPaths, n as NATIVE_FILE_DROP_MAX_PATH_BYTES, t as NATIVE_FILE_DROP_MAX_PATHS } from "./native-file-drop-BKKZQway.js";
const WORKSPACE_FILE_PATH_MIME = "text/x-orca-file-path", WORKSPACE_FILE_PATHS_MIME = "text/x-orca-file-paths", WORKSPACE_FILE_DRAG_SOURCE_MIME = "application/x-orca-workspace-file-source";
var WORKSPACE_FILE_DRAG_SOURCE_MAX_BYTES = 4096;
function isResolvedWorkspaceFileDragExecutionHost(e) {
	return e !== "runtime:unresolved-owner";
}
function encodeWorkspaceFilePaths(e) {
	return e.length === 1 ? e[0] : JSON.stringify(e);
}
function writeWorkspaceFileDragSource(e, f) {
	e.setData(WORKSPACE_FILE_DRAG_SOURCE_MIME, JSON.stringify({
		...f,
		version: 1
	}));
}
function writeWorkspaceFileDragSourceIfResolved(e, f, p) {
	!f || !p || !isResolvedWorkspaceFileDragExecutionHost(p) || writeWorkspaceFileDragSource(e, {
		executionHostId: p,
		workspaceId: f
	});
}
function readWorkspaceFileDragSource(e) {
	let m = e.getData(WORKSPACE_FILE_DRAG_SOURCE_MIME);
	if (!m || measureClipboardTextByteLength(m, { stopAfterBytes: WORKSPACE_FILE_DRAG_SOURCE_MAX_BYTES }).exceededLimit) return null;
	try {
		let e = JSON.parse(m);
		if (!e || typeof e != "object") return null;
		let p = "executionHostId" in e ? e.executionHostId : null, h = typeof p == "string" ? normalizeExecutionHostId(p) : null, g = "workspaceId" in e ? e.workspaceId : null, _ = typeof g == "string" ? g.trim() : "";
		return ("version" in e ? e.version : null) !== 1 || !h || !_ ? null : {
			executionHostId: h,
			workspaceId: _
		};
	} catch {
		return null;
	}
}
function hasWorkspaceFileDragType(e) {
	return e.types.includes("text/x-orca-file-path") || e.types.includes("text/x-orca-file-paths");
}
function decodeWorkspaceFilePathPayload(e, f = {}) {
	if (!e) return {
		pathCount: 0,
		paths: [],
		status: "accepted"
	};
	try {
		let p = JSON.parse(e);
		if (Array.isArray(p)) return collectDecodedWorkspaceFilePaths(p, f.maxPaths);
	} catch {}
	return f.maxPaths !== void 0 && f.maxPaths < 1 ? {
		pathCount: 1,
		reason: "too-many-paths",
		status: "rejected"
	} : {
		pathCount: 1,
		paths: [e],
		status: "accepted"
	};
}
function collectDecodedWorkspaceFilePaths(e, f) {
	let p = [], m = 0;
	for (let h of e) typeof h == "string" && (m += 1, (f === void 0 || m <= f) && p.push(h));
	return f !== void 0 && m > f ? {
		pathCount: m,
		reason: "too-many-paths",
		status: "rejected"
	} : {
		pathCount: m,
		paths: p,
		status: "accepted"
	};
}
function isNormalizedRuntimePathInsideOrEqual(e, f) {
	if (f === e) return !0;
	let p = e === "/" || /^[a-z]:\/$/i.test(e) ? e : `${e.replace(/\/+$/, "")}/`;
	return f.startsWith(p);
}
function getUniqueWorkspaceFilePathEntries(f) {
	let p = [], m = /* @__PURE__ */ new Set();
	for (let h of f) {
		if (!h) continue;
		let f = normalizeRuntimePathForComparison(h);
		m.has(f) || (m.add(f), p.push({
			normalizedPath: f,
			path: h
		}));
	}
	return p;
}
function getTopLevelWorkspaceFilePaths(e) {
	let f = getUniqueWorkspaceFilePathEntries(e);
	return f.filter((e) => !f.some((f) => f.normalizedPath !== e.normalizedPath && isNormalizedRuntimePathInsideOrEqual(f.normalizedPath, e.normalizedPath))).map((e) => e.path);
}
function readWorkspaceFileDragPaths(e, f = {}) {
	let h = f.maxPathBytes ?? 262144, g = f.maxPaths ?? 256, _ = e.getData("text/x-orca-file-paths") || e.getData("text/x-orca-file-path");
	if (!_) return {
		byteLength: 0,
		pathCount: 0,
		paths: [],
		status: "accepted"
	};
	let v = measureClipboardTextByteLength(_, { stopAfterBytes: h });
	if (v.exceededLimit) return {
		byteLength: v.byteLength,
		pathCount: 0,
		reason: "paths-too-large",
		status: "rejected"
	};
	let y = decodeWorkspaceFilePathPayload(_, { maxPaths: g });
	if (y.status === "rejected") return {
		byteLength: 0,
		pathCount: y.pathCount,
		reason: y.reason,
		status: "rejected"
	};
	let b = y.paths, x = validateNativeFileDropPaths(b, {
		maxPathBytes: h,
		maxPaths: g
	});
	if (x.status === "rejected") return {
		byteLength: x.byteLength,
		pathCount: x.pathCount,
		reason: x.reason,
		status: "rejected"
	};
	let S = getTopLevelWorkspaceFilePaths(b);
	return {
		byteLength: x.byteLength,
		pathCount: S.length,
		paths: S,
		status: "accepted"
	};
}
function getWorkspaceFileDragRejectionMessage(e) {
	return e === "too-many-paths" ? "Drop contains too many paths." : "Drop path list is too large.";
}
export { hasWorkspaceFileDragType as a, readWorkspaceFileDragSource as c, getWorkspaceFileDragRejectionMessage as i, writeWorkspaceFileDragSourceIfResolved as l, WORKSPACE_FILE_PATH_MIME as n, isResolvedWorkspaceFileDragExecutionHost as o, encodeWorkspaceFilePaths as r, readWorkspaceFileDragPaths as s, WORKSPACE_FILE_PATHS_MIME as t };
