import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { Ft as cancelRuntimeFileList, It as listRuntimeFiles, Lt as searchRuntimeFilePaths, Qy as isWindowsAbsolutePathLike, Vt as isQuickOpenRemoteQueryTooLarge, by as createRuntimeRpcAbortError, t as useAppStore } from "./store-C9f8FDJV.js";
import { D as createBrowserUuid } from "./renderer-app-platform--nJ6HYmL.js";
import { t as useShallow } from "./shallow-CDSK0iEX.js";
import { v as useWorktreesForRepo } from "./selectors-Cdg4hUQI.js";
import { a as getFileExplorerOperationRoute, i as getFileExplorerOperationOwnerFromState, o as getFileExplorerOwnerUnresolvedMessage } from "./file-explorer-operation-owner-BmC3RZHe.js";
const QUICK_OPEN_LISTING_MAX_RESULTS = 20001;
var import_react = /* @__PURE__ */ __toESM(require_react());
function cleanRuntimeFileListError(e) {
	return (e instanceof Error ? e.message : String(e)).replace(/^Error invoking remote method '[^']+':\s*Error:\s*/, "");
}
function debounceRuntimeFilePathSearch(e, u, d) {
	return new Promise((f, p) => {
		let m = () => {
			u.removeEventListener("abort", m), window.clearTimeout(h), p(createRuntimeRpcAbortError());
		}, h = window.setTimeout(() => {
			u.removeEventListener("abort", m), d().then(f, p);
		}, e);
		u.addEventListener("abort", m, { once: !0 }), u.aborted && m();
	});
}
function isNestedWorktreePath(e, u) {
	let d = isWindowsAbsolutePathLike(e), f = e.replace(/[\\/]+$/, "").replace(/\\/g, "/"), p = u.replace(/\\/g, "/"), h = d ? f.toLowerCase() : f;
	return (d ? p.toLowerCase() : p).startsWith(`${h}/`);
}
function getNestedWorktreeExcludePaths(e, u, d) {
	return d.filter((d) => d.id !== e && isNestedWorktreePath(u, d.path)).map((e) => e.path).sort();
}
function getRuntimeFileListTarget(e, u, d) {
	let f = u ?? null;
	return !e || !f ? {
		canList: !1,
		excludeRequest: {
			paths: [],
			key: "[]"
		},
		worktreePath: null
	} : {
		canList: !0,
		excludeRequest: getNestedWorktreeExcludeRequest(e, f, d),
		worktreePath: f
	};
}
function getNestedWorktreeExcludeRequest(e, u, d) {
	if (!e || !u || d.length === 0) return {
		paths: [],
		key: "[]"
	};
	let f = getNestedWorktreeExcludePaths(e, u, d);
	return {
		paths: f,
		key: JSON.stringify(f)
	};
}
function useRuntimeFileListForWorktree({ enabled: e, worktreeId: u, query: m }) {
	let g = useAppStore((e) => u ? e.getKnownWorktreeById(u) ?? null : null), b = g?.path ?? null, x = useWorktreesForRepo(g?.repoId ?? null), [S, C] = (0, import_react.useState)([]), [w, T] = (0, import_react.useState)(!1), [E, D] = (0, import_react.useState)(null), [O, k] = (0, import_react.useState)(!1), [A, j] = (0, import_react.useState)(void 0), [M, N] = (0, import_react.useState)({ kind: "unresolved" }), P = (0, import_react.useRef)(""), F = (0, import_react.useMemo)(() => getRuntimeFileListTarget(u, b, x), [
		x,
		u,
		b
	]), { excludeRequest: I } = F, L = useAppStore(useShallow((e) => ({
		settings: e.settings,
		repos: e.repos,
		worktreesByRepo: e.worktreesByRepo,
		detectedWorktreesByRepo: e.detectedWorktreesByRepo,
		folderWorkspaces: e.folderWorkspaces,
		projectGroups: e.projectGroups,
		restoredRuntimeHostIdByWorkspaceSessionKey: e.restoredRuntimeHostIdByWorkspaceSessionKey
	}))), R = (0, import_react.useMemo)(() => getFileExplorerOperationOwnerFromState(L, u), [L, u]), z = JSON.stringify(R), B = (0, import_react.useRef)(R);
	B.current = R;
	let V = getFileExplorerOperationRoute(R), H = V !== null, U = V?.connectionId, W = V?.settings.activeRuntimeEnvironmentId ?? null, G = useAppStore((e) => U ? e.sshConnectionStates.get(U)?.status : void 0), K = G === "connecting" || G === "deploying-relay" || G === "reconnecting", q = (W !== null || U !== void 0) && m !== void 0, J = q ? m.trim() : "", Y = q && isQuickOpenRemoteQueryTooLarge(J), X = (0, import_react.useMemo)(() => `${b ?? ""}\n${z}\n${I.key}\n${G ?? ""}${q ? `\n${J}` : ""}`, [
		G,
		I.key,
		z,
		J,
		q,
		b
	]);
	return (0, import_react.useEffect)(() => {
		if (!e) {
			T(!1), j(null), N({ kind: "unresolved" });
			return;
		}
		if (!F.canList || !u || !b || !H) {
			C([]), N({ kind: "unresolved" }), D(H ? null : getFileExplorerOwnerUnresolvedMessage()), T(!1), k(!1), j(null);
			return;
		}
		let m = !1;
		if (P.current !== X && (C([]), j(null)), P.current = X, D(null), k(!1), q && (J.length === 0 || Y)) {
			C([]), T(!1), j(J), N(B.current);
			return;
		}
		T(!0);
		let h = I.paths.length > 0 ? I.paths : void 0, g = createBrowserUuid(), _ = new AbortController(), v = B.current, y = {
			settings: { activeRuntimeEnvironmentId: W },
			worktreeId: u,
			worktreePath: b,
			connectionId: U
		};
		return (q ? debounceRuntimeFilePathSearch(120, _.signal, () => searchRuntimeFilePaths(y, {
			query: J,
			limit: 32,
			excludePaths: h,
			...U ? { requestToken: g } : {},
			signal: _.signal
		})) : listRuntimeFiles(y, {
			rootPath: b,
			excludePaths: h,
			requestToken: g,
			maxResults: QUICK_OPEN_LISTING_MAX_RESULTS,
			signal: _.signal
		}).then((e) => ({
			files: e,
			truncated: e.length >= QUICK_OPEN_LISTING_MAX_RESULTS
		}))).then((e) => {
			m || (C(e.files), k(e.truncated), j(q ? J : void 0), N(v));
		}).catch((e) => {
			m || (C([]), k(!1), j(q ? J : null), D(cleanRuntimeFileListError(e)));
		}).finally(() => {
			m || T(!1);
		}), () => {
			m = !0, _.abort(), cancelRuntimeFileList(y, g);
		};
	}, [
		e,
		I,
		U,
		z,
		H,
		X,
		W,
		F.canList,
		u,
		b,
		J,
		Y,
		q
	]), {
		files: S,
		loading: w || K,
		loadError: E,
		truncated: O,
		resolvedQuery: A,
		operationOwner: M
	};
}
export { useRuntimeFileListForWorktree as t };
