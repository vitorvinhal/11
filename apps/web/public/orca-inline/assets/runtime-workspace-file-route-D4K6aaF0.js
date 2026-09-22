import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { $h as resolveExplicitWorktreeOperationRouteResult, $y as normalizeRuntimePathForComparison, Ff as getExecutionHostIdForWorktree, If as getExplicitRuntimeEnvironmentIdForWorktree, iC as parseExecutionHostId, mm as getIndexedAllWorktrees, mv as folderWorkspaceKey, tb as relativePathInsideRoot } from "./store-C9f8FDJV.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), FEEDBACK_MS = 1500;
function useClipboardTextCopyFeedback(e) {
	let [c, l] = (0, import_react.useState)(null), u = (0, import_react.useRef)(!0), d = (0, import_react.useRef)(null), f = e.trim().length > 0, p = c != null && c.text === e ? c.status : "idle", m = (0, import_react.useCallback)(() => {
		d.current !== null && (window.clearTimeout(d.current), d.current = null);
	}, []);
	(0, import_react.useEffect)(() => (u.current = !0, () => {
		u.current = !1, m();
	}), [m]), (0, import_react.useEffect)(() => {
		m();
	}, [m, e]);
	let h = (0, import_react.useCallback)(() => {
		m(), d.current = window.setTimeout(() => {
			d.current = null, u.current && l(null);
		}, FEEDBACK_MS);
	}, [m]);
	return {
		canCopy: f,
		copyText: (0, import_react.useCallback)(async () => {
			if (!f) return !1;
			try {
				return await window.api.ui.writeClipboardText(e), u.current ? (l({
					text: e,
					status: "copied"
				}), h(), !0) : !0;
			} catch {
				return u.current ? (l({
					text: e,
					status: "failed"
				}), h(), !1) : !1;
			}
		}, [
			f,
			h,
			e
		]),
		status: p
	};
}
function findRuntimeWorkspaceFileOwner(e, c, l) {
	let d = null, f = -1;
	for (let p of e) {
		if (p.executionHostId !== l) continue;
		let e = relativePathInsideRoot(p.rootPath, c);
		if (e === null) continue;
		let m = normalizeRuntimePathForComparison(p.rootPath).length;
		(m > f || m === f && d !== null && p.workspaceId.localeCompare(d.workspaceId) < 0) && (d = {
			...p,
			relativePath: e
		}, f = m);
	}
	return d;
}
function workspaceMatchesExecutionHost(e, c, u) {
	let m = parseExecutionHostId(u);
	if (m?.kind === "runtime") return getExplicitRuntimeEnvironmentIdForWorktree(e, c) === m.environmentId;
	let h = resolveExplicitWorktreeOperationRouteResult(e, c);
	return h.kind === "resolved" ? h.route.executionHostId === u : u === "local" && getExecutionHostIdForWorktree(e, c) === "local";
}
function findWorkspaceFileRoute(e, c, l) {
	let u = getIndexedAllWorktrees(e.worktreesByRepo).flatMap((l) => workspaceMatchesExecutionHost(e, l.id, c) ? [{
		workspaceId: l.id,
		rootPath: l.path,
		executionHostId: c
	}] : []);
	for (let l of e.folderWorkspaces) {
		let d = folderWorkspaceKey(l.id);
		workspaceMatchesExecutionHost(e, d, c) && u.push({
			workspaceId: d,
			rootPath: l.folderPath,
			executionHostId: c
		});
	}
	let d = findRuntimeWorkspaceFileOwner(u, l, c);
	return d && d.relativePath !== "" ? {
		worktreeId: d.workspaceId,
		relativePath: d.relativePath,
		executionHostId: c
	} : null;
}
export { useClipboardTextCopyFeedback as n, findWorkspaceFileRoute as t };
