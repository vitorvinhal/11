import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { $y as normalizeRuntimePathForComparison, Ag as isGitRepoKind, Nl as getFolderWorkspaceConnectionId, Pt as subscribeRuntimeFileChanges, Qy as isWindowsAbsolutePathLike, Rf as getRuntimeEnvironmentIdForWorktree, S as forEachWithConcurrency, Sm as dirname, Tm as normalizeRelativePath, Xy as isPathInsideOrEqual, eb as normalizeRuntimePathSeparators, iC as parseExecutionHostId, lg as findWorktreeById, on as readRuntimeFileContent, qy as getLocalWindowsWslPathIdentity, sy as findRepoForHost, t as useAppStore, tb as relativePathInsideRoot, vv as parseWorkspaceKey, wm as joinPath, xm as basename, yn as isLocalWindowsDesktopClient } from "./store-C9f8FDJV.js";
import { a as track } from "./telemetry-DdvWHaqb.js";
import { n as getConnectionIdForFile } from "./connection-context-2sxF2wah.js";
import { c as canAutoSaveOpenFile, d as isExternalReloadableEditorTab, l as getOpenFilesForExternalFileChange, p as notifyEditorExternalFileChange } from "./editor-autosave-DihR6gbk.js";
import { i as getFileExplorerOperationOwnerFromState, r as getFileExplorerOperationOwner } from "./file-explorer-operation-owner-BmC3RZHe.js";
import { t as splitPathSegments } from "./path-tree-DAt1zlEG.js";
var cachedOpenFiles = null, cachedWorktreesByRepo = null, cachedRepos = null, cachedActiveWorktreeId = null, cachedRuntimeEnvironmentId, cachedRightSidebarOpen = null, cachedRightSidebarTab = null, cachedRightSidebarExplorerView = null, cachedGitStatusHugeByWorktree = null, cachedSshConnectionStates = null, cachedFolderWorkspaces = null, cachedProjectGroups = null, cachedWatchedTargetsSnapshot = {
	targets: [],
	targetsKey: ""
};
function getEditorExternalWatchTargetKey(e) {
	return `${e.worktreeId}::${e.worktreePath}::${e.connectionId ?? "local"}::${e.runtimeEnvironmentId ?? "client"}::${e.allowLocalWindowsWslAliases === !0 ? "wsl-aliases" : "literal"}`;
}
function getOpenFileRuntimeOwner(e) {
	return e.runtimeEnvironmentId?.trim() || null;
}
function getLocalWindowsWslAliasOption(e) {
	return isLocalWindowsDesktopClient() && e.allowLocalWindowsWslAliases === !0 ? { allowLocalWindowsWslAliases: !0 } : {};
}
function isLocalHostStamp(e) {
	return parseExecutionHostId(e)?.kind === "local";
}
function canWatchLocalWindowsWslAliases(e) {
	return e.runtimeEnvironmentId !== null || e.connectionId !== null || !isWindowsAbsolutePathLike(e.worktreePath) ? !1 : e.worktree ? !!e.repo && !e.worktree.runtimeOwnerEnvironmentId?.trim() && isLocalHostStamp(e.worktree.hostId) && isLocalHostStamp(e.repo.executionHostId) : !!e.folderWorkspace && isLocalHostStamp(e.folderWorkspace.executionHostId) && isLocalHostStamp(e.projectGroup?.executionHostId);
}
function selectEditorExternalWatchTargets(e) {
	let D = e.settings?.activeRuntimeEnvironmentId?.trim() || void 0;
	if (cachedOpenFiles === e.openFiles && cachedWorktreesByRepo === e.worktreesByRepo && cachedRepos === e.repos && cachedActiveWorktreeId === e.activeWorktreeId && cachedRuntimeEnvironmentId === D && cachedRightSidebarOpen === e.rightSidebarOpen && cachedRightSidebarTab === e.rightSidebarTab && cachedRightSidebarExplorerView === e.rightSidebarExplorerView && cachedGitStatusHugeByWorktree === e.gitStatusHugeByWorktree && cachedSshConnectionStates === e.sshConnectionStates && cachedFolderWorkspaces === e.folderWorkspaces && cachedProjectGroups === e.projectGroups) return cachedWatchedTargetsSnapshot;
	let O = /* @__PURE__ */ new Map();
	for (let D of e.openFiles) {
		let e = O.get(D.worktreeId);
		e || (e = /* @__PURE__ */ new Set(), O.set(D.worktreeId, e)), e.add(getOpenFileRuntimeOwner(D));
	}
	let j = e.activeWorktreeId, M = j ? findWorktreeById(e.worktreesByRepo, j) : void 0, P = parseExecutionHostId(M?.hostId), F = M ? P?.kind === "local" ? findRepoForHost(e.repos, M.repoId, { hostId: P.id }) ?? void 0 : e.repos.find((e) => e.id === M.repoId) : void 0, I = !!j && !!F && isGitRepoKind(F) && !e.gitStatusHugeByWorktree[j] && (!F.connectionId || e.sshConnectionStates.get(F.connectionId)?.status === "connected");
	if (j !== null && e.rightSidebarOpen && (e.rightSidebarTab === "explorer" && e.rightSidebarExplorerView === "files" || e.rightSidebarTab === "source-control" && I)) {
		let D = O.get(j);
		D || (D = /* @__PURE__ */ new Set(), O.set(j, D)), D.add(getRuntimeEnvironmentIdForWorktree(e, j));
	}
	let L = [], R = [], V = Array.from(O.keys()).sort();
	for (let D of V) {
		let k = findWorktreeById(e.worktreesByRepo, D), j = parseWorkspaceKey(D), M = j?.type === "folder" ? e.folderWorkspaces.find((e) => e.id === j.folderWorkspaceId) : void 0;
		if (!k && !M) continue;
		let N = parseExecutionHostId(k?.hostId), P = k ? N?.kind === "local" ? findRepoForHost(e.repos, k.repoId, { hostId: N.id }) ?? void 0 : e.repos.find((e) => e.id === k.repoId) : void 0, F = parseExecutionHostId(M?.executionHostId)?.id, I = M ? e.projectGroups.find((e) => e.id === M.projectGroupId && parseExecutionHostId(e.executionHostId)?.id === F) : void 0, V = M ? getFolderWorkspaceConnectionId(e, M.id) : P ? P.connectionId ?? null : void 0;
		if (V === void 0 && M) continue;
		let H = Array.from(O.get(D) ?? []).sort((e, D) => (e ?? "").localeCompare(D ?? ""));
		for (let e of H) {
			let O = {
				worktreeId: D,
				worktreePath: k?.path ?? M.folderPath,
				connectionId: V ?? void 0,
				runtimeEnvironmentId: e,
				...canWatchLocalWindowsWslAliases({
					worktreePath: k?.path ?? M.folderPath,
					runtimeEnvironmentId: e,
					connectionId: V,
					worktree: k,
					repo: P,
					folderWorkspace: M,
					projectGroup: I
				}) ? { allowLocalWindowsWslAliases: !0 } : {}
			};
			L.push(O), R.push(getEditorExternalWatchTargetKey(O));
		}
	}
	let H = R.join("|");
	return cachedOpenFiles = e.openFiles, cachedWorktreesByRepo = e.worktreesByRepo, cachedRepos = e.repos, cachedActiveWorktreeId = e.activeWorktreeId, cachedRuntimeEnvironmentId = D, cachedRightSidebarOpen = e.rightSidebarOpen, cachedRightSidebarTab = e.rightSidebarTab, cachedRightSidebarExplorerView = e.rightSidebarExplorerView, cachedGitStatusHugeByWorktree = e.gitStatusHugeByWorktree, cachedSshConnectionStates = e.sshConnectionStates, cachedFolderWorkspaces = e.folderWorkspaces, cachedProjectGroups = e.projectGroups, H === cachedWatchedTargetsSnapshot.targetsKey || (cachedWatchedTargetsSnapshot = {
		targets: L,
		targetsKey: H
	}), cachedWatchedTargetsSnapshot;
}
function fileExplorerRefreshConcurrency(e) {
	switch (e.kind) {
		case "local": return 16;
		case "ssh": return 4;
		case "runtime": return parseExecutionHostId(e.executionHostId)?.kind === "ssh" ? 4 : 8;
		case "unresolved": return 4;
	}
}
function createFileExplorerWatchRefreshScheduler({ refreshTree: e, refreshDir: D, isCoveredByFullRefresh: k, dirConcurrency: A, trailingMs: j = 150, maxWaitMs: M = 500, schedule: N = setTimeout, clear: F = clearTimeout }) {
	let I = !1, L = /* @__PURE__ */ new Map(), R = null, z = null, B = null, V = !1;
	function H() {
		z !== null && (F(z), z = null);
	}
	function U(e) {
		H(), z = N(() => {
			z = null, B === null && G();
		}, e);
	}
	function W() {
		R ??= Date.now(), U(Math.max(0, Math.min(j, R + M - Date.now())));
	}
	function G() {
		let O = I, M = Array.from(L.values());
		I = !1, L.clear(), R = null;
		let N = (async () => {
			let j = O ? new Set(M.filter(k)) : null, N = O && !V ? await e() : null;
			await forEachWithConcurrency(N === "root-unreadable" ? [] : j && N === "refreshed" ? M.filter((e) => !j.has(e)) : M, A, (e) => V ? Promise.resolve() : D(e));
		})();
		B = N, N.catch(() => {}).finally(() => {
			B === N && (B = null), !V && (I || L.size > 0) && U(j);
		});
	}
	return {
		requestFullRefresh: () => {
			V || (I = !0, W());
		},
		requestDirRefresh: (e) => {
			V || (L.set(normalizeRuntimePathForComparison(e), e), W());
		},
		cancel: () => {
			let e = I || L.size > 0 || z !== null || B !== null;
			return V = !0, H(), I = !1, L.clear(), R = null, e;
		}
	};
}
function normalizeAbsolutePath(e) {
	let D = normalizeRuntimePathSeparators(e);
	return D === "/" || /^[A-Za-z]:\/$/.test(D) ? D : D.replace(/\/+$/, "");
}
function normalizeAbsolutePathForComparison(e) {
	return normalizeRuntimePathForComparison(e);
}
function isPathEqualOrDescendant(e, D) {
	return isPathInsideOrEqual(D, e);
}
function getRevealAncestorDirs(e, D) {
	let O = relativePathInsideRoot(e, D);
	if (O === null) return null;
	let k = splitPathSegments(normalizeRelativePath(O)), A = [], j = e;
	for (let e of k.slice(0, -1)) j = joinPath(j, e), A.push(j);
	return A;
}
function createSubtreeMatcher(e) {
	let D = new Set([...e].map(normalizeRuntimePathForComparison));
	return (e) => {
		let k = normalizeRuntimePathForComparison(e);
		if (D.has(k) || k.startsWith("/") && D.has("/")) return !0;
		for (let e = k.indexOf("/"); e >= 0; e = k.indexOf("/", e + 1)) if (e === 2 && /^[a-z]:\//.test(k) && D.has(k.slice(0, 3)) || e > 0 && D.has(k.slice(0, e))) return !0;
		return !1;
	};
}
function purgeDirCacheSubtrees(e, D) {
	if (D.size === 0) return;
	let O = createSubtreeMatcher(D);
	e((e) => {
		let D = !1, k = {};
		for (let A of Object.keys(e)) O(A) ? D = !0 : k[A] = e[A];
		return D ? k : e;
	});
}
function purgeExpandedDirsSubtrees(e, D) {
	if (D.size === 0) return;
	let O = createSubtreeMatcher(D);
	useAppStore.setState((D) => {
		let k = D.expandedDirs[e];
		if (!k) return D;
		let A = /* @__PURE__ */ new Set(), j = !1;
		for (let e of k) O(e) ? j = !0 : A.add(e);
		return j ? { expandedDirs: {
			...D.expandedDirs,
			[e]: A
		} } : D;
	});
}
function clearStalePendingReveal(e) {
	let D = normalizeAbsolutePath(e);
	useAppStore.setState((e) => e.pendingExplorerReveal && isPathEqualOrDescendant(normalizeAbsolutePath(e.pendingExplorerReveal.filePath), D) ? { pendingExplorerReveal: null } : e);
}
function normalizeExplorerAbsolutePath(e) {
	return e === "/" || /^[A-Za-z]:[\\/]$/.test(e) ? e : e.replace(/[\\/]+$/, "");
}
function getExternalFileChangeRelativePath(e, D, O) {
	if (O === !0) return null;
	let k = relativePathInsideRoot(e, D);
	return k === null || k === "" ? null : normalizeRelativePath(k);
}
function canonicalizeFileExplorerWatchPath(e, D) {
	let O = relativePathInsideRoot(e, D);
	if (O === null) return null;
	let k = normalizeExplorerAbsolutePath(e);
	return O === "" ? k : joinPath(k, O);
}
function createCachedDirPathIndex(e) {
	let D = /* @__PURE__ */ new Map();
	for (let k of Object.keys(e)) {
		let e = normalizeRuntimePathForComparison(k);
		D.has(e) || D.set(e, k);
	}
	return D;
}
function resolveCachedDirPath(e, D, k, A) {
	if (D in e) return D;
	let j = normalizeRuntimePathForComparison(D), M = A?.().get(j);
	if (M) return M;
	if (!A) {
		for (let D of Object.keys(e)) if (normalizeRuntimePathForComparison(D) === j) return D;
	}
	return k && normalizeRuntimePathForComparison(k) === j ? normalizeExplorerAbsolutePath(k) : null;
}
function parentDirForWatchPath(e) {
	let D = dirname(e);
	return /^[A-Za-z]:$/.test(D) ? `${D}${e.includes("\\") ? "\\" : "/"}` : normalizeExplorerAbsolutePath(D);
}
function cachedDirectoryContainsPath(e, D, k, A) {
	let j = A.get(D);
	return j || (j = new Set(e[D]?.children.map((e) => normalizeRuntimePathForComparison(e.path)) ?? []), A.set(D, j)), j.has(normalizeRuntimePathForComparison(k));
}
function processFileExplorerFsPayload(e) {
	let { payload: D, currentWorktreePath: k, worktreeId: A, cache: j, setDirCache: M, setSelectedPath: N, refreshDir: P, refreshTree: F } = e;
	if (normalizeRuntimePathForComparison(D.worktreePath) !== normalizeRuntimePathForComparison(k)) return;
	let I = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map(), z, B = () => z ??= createCachedDirPathIndex(j), V = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set(), U = !1, W = (e) => {
		e && V.add(e);
	};
	for (let e of D.events) {
		if (e.kind === "overflow") {
			U = !0;
			break;
		}
		let D = canonicalizeFileExplorerWatchPath(k, e.absolutePath);
		if (D) {
			if (e.kind === "delete") {
				let e = resolveCachedDirPath(j, D, k, B), A = e !== null;
				A && e && W(e), clearStalePendingReveal(D), N((e) => e && normalizeRuntimePathForComparison(e) === normalizeRuntimePathForComparison(D) || e && A && isPathInsideOrEqual(D, e) ? null : e);
				let M = resolveCachedDirPath(j, parentDirForWatchPath(D), k, B);
				M && I.add(M);
			} else if (e.kind === "create" || e.kind === "rename") {
				let A = resolveCachedDirPath(j, parentDirForWatchPath(D), k, B);
				if (A && I.add(A), e.kind === "rename") {
					let A = e.oldAbsolutePath ? canonicalizeFileExplorerWatchPath(k, e.oldAbsolutePath) : null, M = A ? resolveCachedDirPath(j, A, k, B) : null;
					if (A) {
						let e = resolveCachedDirPath(j, parentDirForWatchPath(A), k, B);
						e && I.add(e);
						let D = normalizeRuntimePathForComparison(A);
						H.has(D) || (H.add(D), clearStalePendingReveal(A), N((e) => e && (normalizeRuntimePathForComparison(e) === D || M && isPathInsideOrEqual(A, e) ? null : e)));
					}
					let P = resolveCachedDirPath(j, D, k, B);
					W(M), W(P);
				}
			} else if (e.kind === "update") {
				let O = resolveCachedDirPath(j, D, k, B);
				if (e.isDirectory === !0 && O) {
					I.add(O);
					continue;
				}
				let A = resolveCachedDirPath(j, parentDirForWatchPath(D), k, B);
				A && !I.has(A) && !cachedDirectoryContainsPath(j, A, D, R) && I.add(A);
			}
		}
	}
	if (purgeDirCacheSubtrees(M, V), purgeExpandedDirsSubtrees(A, V), U) {
		F();
		return;
	}
	let G = normalizeExplorerAbsolutePath(k);
	for (let e of I) (normalizeRuntimePathForComparison(e) === normalizeRuntimePathForComparison(G) || e in j) && P(e);
}
var import_react = /* @__PURE__ */ __toESM(require_react());
function getFileExplorerWatchRuntimeEnvironmentId(e, D, O) {
	let k = getFileExplorerOperationOwnerFromState({
		settings: e.settings,
		repos: e.repos,
		worktreesByRepo: e.worktreesByRepo,
		detectedWorktreesByRepo: e.detectedWorktreesByRepo ?? {},
		folderWorkspaces: e.folderWorkspaces ?? [],
		projectGroups: e.projectGroups ?? [],
		restoredRuntimeHostIdByWorkspaceSessionKey: e.restoredRuntimeHostIdByWorkspaceSessionKey ?? {}
	}, D);
	if (!(O && JSON.stringify(k) !== JSON.stringify(O))) return k.kind === "runtime" ? k.environmentId : k.kind === "unresolved" ? void 0 : null;
}
function useFileExplorerWatch({ worktreePath: e, activeWorktreeId: D, dirCache: k, setDirCache: A, expanded: M, setSelectedPath: N, refreshDir: P, refreshTree: F, inlineInput: I, dragSourcePath: L, isNativeDragOver: R, operationOwner: z }) {
	let B = useAppStore((e) => getFileExplorerWatchRuntimeEnvironmentId(e, D, z)), V = (0, import_react.useRef)(k);
	V.current = k;
	let H = (0, import_react.useRef)(M);
	H.current = M;
	let U = (0, import_react.useRef)(I);
	U.current = I;
	let G = (0, import_react.useRef)(L);
	G.current = L;
	let K = (0, import_react.useRef)(R);
	K.current = R;
	let q = (0, import_react.useRef)(P);
	q.current = P;
	let J = (0, import_react.useRef)(F);
	J.current = F;
	let Y = (0, import_react.useRef)([]), X = (0, import_react.useRef)(/* @__PURE__ */ new Set()), Z = (0, import_react.useRef)(/* @__PURE__ */ new Map()), Q = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!e || !D || B === void 0) return;
		let k = e, M = D, P = X.current, F = Z.current, I = JSON.stringify([M, normalizeRuntimePathForComparison(k)]), L = createFileExplorerWatchRefreshScheduler({
			refreshTree: () => J.current(),
			refreshDir: (e) => q.current(e),
			isCoveredByFullRefresh: (e) => normalizeRuntimePathForComparison(e) === normalizeRuntimePathForComparison(k) || H.current.has(e),
			dirConcurrency: fileExplorerRefreshConcurrency(getFileExplorerOperationOwner(M)),
			trailingMs: 0,
			maxWaitMs: 0
		});
		F.set(I, L.requestFullRefresh), P.delete(I) && L.requestFullRefresh();
		function R(e) {
			processFileExplorerFsPayload({
				payload: e,
				currentWorktreePath: k,
				worktreeId: M,
				cache: V.current,
				expanded: H.current,
				setDirCache: A,
				setSelectedPath: N,
				refreshDir: L.requestDirRefresh,
				refreshTree: L.requestFullRefresh
			});
		}
		Q.current = R;
		let z = !1, W = (e) => {
			if (z) {
				if (normalizeRuntimePathForComparison(e.worktreePath) === normalizeRuntimePathForComparison(k)) {
					let e = F.get(I);
					e ? e() : P.add(I);
				}
				return;
			}
			if (U.current !== null || G.current !== null || K.current) {
				Y.current.push(e);
				return;
			}
			R(e);
		}, $ = null;
		return B?.trim() && D ? subscribeRuntimeFileChanges({
			settings: { activeRuntimeEnvironmentId: B },
			worktreeId: D,
			worktreePath: e,
			connectionId: void 0
		}, W, (O) => {
			console.warn("[filesystem-watch] failed to subscribe to runtime file changes", {
				worktreeId: D,
				worktreePath: e,
				error: O.message
			});
		}).then((e) => {
			if (z) {
				e();
				return;
			}
			$ = e;
		}).catch((O) => {
			console.warn("[filesystem-watch] failed to subscribe to runtime file changes", {
				worktreeId: D,
				worktreePath: e,
				error: O instanceof Error ? O.message : String(O)
			});
		}) : $ = window.api.fs.onFsChanged(W), () => {
			z = !0, $?.(), F.get(I) === L.requestFullRefresh && F.delete(I);
			let e = Y.current.length > 0;
			(L.cancel() || e) && P.add(I), Y.current = [], Q.current = null;
		};
	}, [
		e,
		D,
		B,
		A,
		N
	]), (0, import_react.useEffect)(() => {
		if (I === null && L === null && !R && Y.current.length > 0) {
			let e = Y.current.splice(0);
			if (Q.current) for (let D of e) Q.current(D);
		}
	}, [
		I,
		L,
		R
	]);
}
function openFileRuntimeOwner(e) {
	return e.runtimeEnvironmentId?.trim() || null;
}
function addToListMap(e, D, O) {
	let k = e.get(D);
	k ? k.push(O) : e.set(D, [O]);
}
var IndexedPathLookup = class {
	direct = /* @__PURE__ */ new Map();
	aliases = /* @__PURE__ */ new Map();
	wslAliases = /* @__PURE__ */ new Map();
	constructor(e) {
		this.allowAliases = e;
	}
	add(e, D) {
		this.direct.set(e.identity.normalizedPath, D), this.allowAliases && (this.aliases.set(e.identity.aliasComparisonPath, D), e.identity.isWslUnc && this.wslAliases.set(e.identity.aliasComparisonPath, D));
	}
	get(e) {
		let D = this.direct.get(e.normalizedPath);
		return D !== void 0 || !this.allowAliases ? D : e.isWslUnc ? this.aliases.get(e.aliasComparisonPath) : this.wslAliases.get(e.aliasComparisonPath);
	}
};
function pathIdentity(e, D) {
	if (D) return getLocalWindowsWslPathIdentity(e);
	let k = normalizeRuntimePathForComparison(e);
	return {
		normalizedPath: k,
		aliasComparisonPath: k,
		isWslUnc: !1
	};
}
function collectMatchingFiles(e, D, O) {
	let k = /* @__PURE__ */ new Map();
	for (let A of [
		...e,
		...D,
		...O
	]) k.set(A.index, A.file);
	return [...k.entries()].sort(([e], [D]) => e - D).map(([, e]) => e);
}
var IndexedOpenFileLookup = class {
	directEditors = /* @__PURE__ */ new Map();
	aliasEditors = /* @__PURE__ */ new Map();
	wslAliasEditors = /* @__PURE__ */ new Map();
	diffsByRelativePath = /* @__PURE__ */ new Map();
	indexedOpenFiles = /* @__PURE__ */ new Map();
	hasCombinedDiffConsumer;
	constructor(e, D, O) {
		this.allowAliases = O;
		let k = !1;
		for (let [A, j] of e.entries()) {
			if (j.worktreeId !== D.worktreeId || openFileRuntimeOwner(j) !== D.runtimeEnvironmentId) continue;
			if (j.mode === "diff" && (j.diffSource === "combined-uncommitted" || j.diffSource === "combined-all")) {
				k = !0;
				continue;
			}
			if (j.mode === "diff") {
				(j.diffSource === "unstaged" || j.diffSource === "staged") && addToListMap(this.diffsByRelativePath, j.relativePath, {
					file: j,
					index: A,
					identity: null
				});
				continue;
			}
			if (j.mode !== "edit" && j.mode !== "markdown-preview") continue;
			let e = pathIdentity(j.filePath, O), M = {
				file: j,
				index: A,
				identity: e
			};
			this.indexedOpenFiles.set(j.id, M), addToListMap(this.directEditors, j.filePath, M), O && (addToListMap(this.aliasEditors, e.aliasComparisonPath, M), e.isWslUnc && addToListMap(this.wslAliasEditors, e.aliasComparisonPath, M));
		}
		this.hasCombinedDiffConsumer = k;
	}
	matchingOpenFiles(e) {
		let D = this.allowAliases ? e.identity.isWslUnc ? this.aliasEditors.get(e.identity.aliasComparisonPath) ?? [] : this.wslAliasEditors.get(e.identity.aliasComparisonPath) ?? [] : [];
		return collectMatchingFiles(this.directEditors.get(e.absolutePath) ?? [], D, this.diffsByRelativePath.get(e.relativePath) ?? []);
	}
};
function indexEditorExternalWatchBatchPaths(e, D, O) {
	let k = O.allowLocalWindowsWslAliases === !0, A = new IndexedPathLookup(k), j = new IndexedPathLookup(k), M = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map();
	for (let D of e.events) {
		if (D.kind === "overflow") continue;
		let e = {
			absolutePath: D.absolutePath,
			identity: pathIdentity(D.absolutePath, k)
		};
		if (D.kind === "delete") {
			j.add(e, e);
			continue;
		}
		D.isDirectory !== !0 && (M.set(e.identity.normalizedPath, D.absolutePath), A.add(e, e));
		let P = getExternalFileChangeRelativePath(O.worktreePath, D.absolutePath, D.isDirectory);
		if (P && !N.has(P)) {
			let D = joinPath(O.worktreePath, P);
			N.set(P, {
				relativePath: P,
				absolutePath: D,
				identity: e.identity
			});
		}
	}
	let P = new IndexedOpenFileLookup(D, O, k), F = /* @__PURE__ */ new WeakMap();
	F.set(D, P);
	let I = (e) => {
		let D = F.get(e);
		if (D) return D;
		let A = new IndexedOpenFileLookup(e, O, k);
		return F.set(e, A), A;
	}, L = (e) => {
		let D = P.indexedOpenFiles.get(e.id)?.identity ?? pathIdentity(e.filePath, k);
		return A.get(D) !== void 0;
	}, R = [];
	for (let e of P.indexedOpenFiles.values()) {
		let D = j.get(e.identity);
		D && R.push({
			file: e.file,
			normalizedDeletePath: D.identity.normalizedPath
		});
	}
	return {
		createOrUpdatePaths: M,
		changes: [...N.values()],
		deletedOpenEditors: R,
		hasCombinedDiffConsumer: P.hasCombinedDiffConsumer,
		matchesCreateOrUpdate: L,
		matchingOpenFiles: (e, O = D) => I(O).matchingOpenFiles(e)
	};
}
var SELF_WRITE_TTL_MS = 750;
const SELF_WRITE_REMOTE_TTL_MS = 3e3;
var SELF_WRITE_MAX_STAMPS = 256, stamps = /* @__PURE__ */ new Map();
function selfWriteKey(e, D) {
	return `${D?.trim() || "client"}::${normalizeAbsolutePathForComparison(e)}`;
}
function pruneExpiredSelfWrites(e = Date.now()) {
	for (let [D, O] of stamps) e > O.expiresAt && stamps.delete(D);
}
function enforceSelfWriteStampLimit() {
	for (; stamps.size > SELF_WRITE_MAX_STAMPS;) {
		let e = stamps.keys().next().value;
		if (e === void 0) break;
		stamps.delete(e);
	}
}
function recordSelfWrite(e, D, O, k = SELF_WRITE_TTL_MS) {
	let A = Date.now();
	pruneExpiredSelfWrites(A);
	let j = selfWriteKey(e, O);
	stamps.delete(j), stamps.set(j, {
		content: D ?? null,
		expiresAt: A + k
	}), enforceSelfWriteStampLimit();
}
function clearSelfWrite(e, D) {
	stamps.delete(selfWriteKey(e, D));
}
function getRecentSelfWrite(e, D) {
	let O = selfWriteKey(e, D), k = stamps.get(O);
	return k ? Date.now() > k.expiresAt ? (stamps.delete(O), null) : { content: k.content } : null;
}
function hasRecentSelfWrite(e, D) {
	return getRecentSelfWrite(e, D) !== null;
}
var operations = /* @__PURE__ */ new Map();
function owner(e) {
	return e?.trim() || null;
}
function normalize(e) {
	return normalizeAbsolutePathForComparison(e);
}
function isInsideOrEqual(e, D) {
	return D === e || D.startsWith(`${e}/`);
}
function beginEditorPathMove(e) {
	operations.set(e.operationId, {
		worktreeId: e.worktreeId,
		runtimeEnvironmentId: owner(e.runtimeEnvironmentId),
		sourceRoots: e.sourcePaths.map(normalize)
	});
}
function settleEditorPathMove(e) {
	operations.delete(e);
}
function hasActiveEditorPathMoves() {
	return operations.size > 0;
}
function isActiveMoveSourcePath(e, D, O) {
	if (operations.size === 0) return !1;
	let k = normalize(O), A = owner(D);
	for (let D of operations.values()) if (!(D.worktreeId !== e || D.runtimeEnvironmentId !== A) && D.sourceRoots.some((e) => isInsideOrEqual(e, k))) return !0;
	return !1;
}
const ORCA_WORKTREE_FILE_CHANGE_EVENT = "orca:worktree-file-change";
function conflictSurface(e) {
	return e.mode === "edit" ? "edit" : "unstaged-diff";
}
function conflictTransport(e, D) {
	return e ? "ssh" : D?.trim() ? "runtime" : "local";
}
function trackExternalChangeConflictShown(e, D) {
	track("editor_external_change_conflict_shown", {
		surface: conflictSurface(e),
		transport: conflictTransport(D.connectionId, e.runtimeEnvironmentId),
		origin: D.origin
	});
}
function trackExternalChangeConflictAction(e, D) {
	track("editor_external_change_conflict_action", {
		action: D,
		surface: conflictSurface(e),
		transport: conflictTransport(getConnectionIdForFile(e.worktreeId, e.filePath) ?? void 0, e.runtimeEnvironmentId)
	});
}
function markFileChangedOnDisk(e, D, O) {
	!D.isDirty || !canAutoSaveOpenFile(D) || (D.externalMutation !== "changed" && trackExternalChangeConflictShown(D, O), e.setExternalMutation(D.id, "changed"));
}
function getDiffContentSignature(e) {
	let D = 2166136261;
	for (let O = 0; O < e.length; O += 1) D ^= e.charCodeAt(O), D = Math.imul(D, 16777619);
	return (D >>> 0).toString(16);
}
function getDiskBaselineSignature(e) {
	let D = 2166136261, O = 84696351;
	for (let k = 0; k < e.length; k += 1) {
		let A = e.charCodeAt(k);
		D ^= A, D = Math.imul(D, 16777619), O = Math.imul(O ^ A, 1099511627);
	}
	return `${(D >>> 0).toString(16)}-${(O >>> 0).toString(16)}-${e.length.toString(16)}`;
}
var EXTERNAL_RELOAD_DEBOUNCE_MS = 75, pendingExternalReloadTimers = /* @__PURE__ */ new Map();
function scheduleDebouncedEditorExternalReload(e) {
	let D = `${e.worktreeId}::${e.runtimeEnvironmentId ?? "client"}::${e.relativePath}`, O = pendingExternalReloadTimers.get(D);
	O !== void 0 && globalThis.clearTimeout(O);
	let k = globalThis.setTimeout(() => {
		pendingExternalReloadTimers.delete(D), notifyEditorExternalFileChange(e);
	}, EXTERNAL_RELOAD_DEBOUNCE_MS);
	pendingExternalReloadTimers.set(D, k);
}
var inFlightEchoVerificationReads = /* @__PURE__ */ new Map();
function readFileForEchoVerification(e) {
	let D = [
		e.runtimeEnvironmentId ?? "",
		e.connectionId ?? "",
		e.expectedExternalSshTargetId ?? "",
		e.filePath
	].join("::"), O = inFlightEchoVerificationReads.get(D);
	if (!O) {
		O = readRuntimeFileContent({
			settings: e.runtimeEnvironmentId ? { activeRuntimeEnvironmentId: e.runtimeEnvironmentId } : null,
			filePath: e.filePath,
			relativePath: e.relativePath,
			worktreeId: e.worktreeId ?? void 0,
			connectionId: e.connectionId,
			expectedExternalSshTargetId: e.expectedExternalSshTargetId
		}), inFlightEchoVerificationReads.set(D, O);
		let k = () => {
			inFlightEchoVerificationReads.get(D) === O && inFlightEchoVerificationReads.delete(D);
		};
		O.then(k, k);
	}
	return O;
}
function markTabsChangedOnDisk(e, D) {
	let O = useAppStore.getState();
	for (let k of e) {
		let e = O.openFiles.find((e) => e.id === k);
		e && markFileChangedOnDisk(O, e, {
			connectionId: D,
			origin: "live"
		});
	}
}
function scheduleEditorChangedOnDiskMark(e, D, O) {
	if (O.length === 0) return;
	let k = joinPath(D.worktreePath, D.relativePath), A = getRecentSelfWrite(k, e.runtimeEnvironmentId);
	if (!A || A.content === null) {
		markTabsChangedOnDisk(O, e.connectionId);
		return;
	}
	readFileForEchoVerification({
		runtimeEnvironmentId: e.runtimeEnvironmentId,
		filePath: k,
		relativePath: D.relativePath,
		worktreeId: D.worktreeId,
		connectionId: e.connectionId
	}).then((D) => {
		(D.isBinary || D.content !== A.content) && markTabsChangedOnDisk(O, e.connectionId);
	}).catch(() => {
		markTabsChangedOnDisk(O, e.connectionId);
	});
}
var liveMoveVerifyGeneration = /* @__PURE__ */ new Map(), liveMoveVerifyCounter = 0;
function resolveLiveMoveVerification(e, D, O, k) {
	let { fileId: A, baseline: j, generation: M, operationId: N } = e;
	if (liveMoveVerifyGeneration.get(A) !== M) return;
	liveMoveVerifyGeneration.delete(A);
	let P = useAppStore.getState();
	P.setPendingLiveDiskVerification(A, !1);
	let F = P.openFiles.find((e) => e.id === A);
	!F || !F.isDirty || F.externalMutation === "changed" || F.lastKnownDiskSignature !== j || N !== void 0 && F.pendingSelfMoveEcho?.operationId !== N || (k && P.clearSelfMoveEcho(A), j !== void 0 && D === j || markFileChangedOnDisk(P, F, {
		connectionId: O,
		origin: "live"
	}));
}
function verifyLatchedEditorMoveDestinations(e, D, O) {
	let k = useAppStore.getState(), A = O.filter((e) => k.openFiles.find((D) => D.id === e)?.pendingSelfMoveEcho);
	A.length !== 0 && scheduleEditorSelfMoveEchoVerification({
		worktreeId: "",
		worktreePath: e,
		connectionId: D,
		runtimeEnvironmentId: null
	}, A, !1);
}
function scheduleEditorSelfMoveEchoVerification(e, D, O) {
	if (D.length === 0) return;
	let k = useAppStore.getState();
	for (let A of D) {
		let D = k.openFiles.find((e) => e.id === A);
		if (!D || !D.isDirty || D.externalMutation === "changed") continue;
		let j = ++liveMoveVerifyCounter;
		liveMoveVerifyGeneration.set(A, j), k.setPendingLiveDiskVerification(A, !0);
		let M = {
			fileId: A,
			baseline: D.lastKnownDiskSignature,
			generation: j,
			operationId: D.pendingSelfMoveEcho?.operationId
		};
		readFileForEchoVerification({
			runtimeEnvironmentId: D.runtimeEnvironmentId?.trim() || e.runtimeEnvironmentId,
			filePath: D.filePath,
			relativePath: D.relativePath,
			worktreeId: D.worktreeId,
			connectionId: e.connectionId,
			expectedExternalSshTargetId: D.externalSshTargetId
		}).then((D) => {
			resolveLiveMoveVerification(M, D.isBinary ? null : getDiskBaselineSignature(D.content), e.connectionId, O);
		}).catch(() => resolveLiveMoveVerification(M, null, e.connectionId, O));
	}
}
function scheduleSelfWriteAwareEditorExternalReload(e, D, O, k) {
	if (k.content === null) {
		scheduleDebouncedEditorExternalReload(D);
		return;
	}
	let A = O.runtimeEnvironmentId ?? e.runtimeEnvironmentId;
	readFileForEchoVerification({
		runtimeEnvironmentId: A,
		filePath: O.filePath,
		relativePath: O.relativePath,
		worktreeId: O.worktreeId,
		connectionId: e.connectionId,
		expectedExternalSshTargetId: O.externalSshTargetId
	}).then((e) => {
		(e.isBinary || e.content !== k.content) && hasCleanExternalReloadTarget(D) && (clearSelfWrite(O.filePath, A), scheduleDebouncedEditorExternalReload(D));
	}).catch(() => {
		hasCleanExternalReloadTarget(D) && (clearSelfWrite(O.filePath, A), scheduleDebouncedEditorExternalReload(D));
	});
}
function hasCleanExternalReloadTarget(e) {
	return getOpenFilesForExternalFileChange(useAppStore.getState().openFiles, e).some((e) => !e.isDirty);
}
var EXTERNAL_MUTATION_DEBOUNCE_MS = 75;
function buildEditorExternalWatchEventHandler(e) {
	let D = /* @__PURE__ */ new Map(), k = (e, D, O) => `${e}::${D ?? "client"}::${O}`;
	return {
		handleFsChanged: (A, j = null) => {
			let M = e(A.worktreePath, j);
			if (!M) return;
			typeof window < "u" && typeof window.dispatchEvent == "function" && window.dispatchEvent(new CustomEvent(ORCA_WORKTREE_FILE_CHANGE_EVENT, { detail: {
				payload: A,
				runtimeEnvironmentId: M.runtimeEnvironmentId
			} }));
			let N = useAppStore.getState().openFiles, P = indexEditorExternalWatchBatchPaths(A, N, {
				worktreeId: M.worktreeId,
				worktreePath: M.worktreePath,
				runtimeEnvironmentId: M.runtimeEnvironmentId,
				...getLocalWindowsWslAliasOption(M)
			}), F = P.createOrUpdatePaths;
			for (let e of F.keys()) {
				let O = k(M.worktreeId, M.runtimeEnvironmentId, e), A = D.get(O);
				A && (clearTimeout(A.timer), D.delete(O));
			}
			let I = P.deletedOpenEditors, L = hasActiveEditorPathMoves() ? I.filter(({ file: e }) => !isActiveMoveSourcePath(M.worktreeId, M.runtimeEnvironmentId, e.filePath)) : I, R = L.map(({ file: e }) => e.id), z = R.length > 0 && hasRenameCorrelatedCreate(A, M.worktreeId, R, N);
			if (R.length > 0) if (z) {
				let e = useAppStore.getState().setExternalMutation;
				for (let D of R) e(D, "renamed");
			} else for (let { file: e, normalizedDeletePath: O } of L) {
				let A = k(M.worktreeId, M.runtimeEnvironmentId, O), j = D.get(A);
				j && (clearTimeout(j.timer), D.delete(A));
				let N = setTimeout(() => {
					D.delete(A);
					let O = useAppStore.getState();
					O.openFiles.some((D) => D.id === e.id && D.mode === "edit") && O.setExternalMutation(e.id, "deleted");
				}, EXTERNAL_MUTATION_DEBOUNCE_MS);
				D.set(A, {
					fileId: e.id,
					timer: N
				});
			}
			if (F.size > 0) {
				let e = useAppStore.getState();
				for (let D of e.openFiles) D.worktreeId === M.worktreeId && getOpenFileRuntimeOwner(D) === M.runtimeEnvironmentId && (D.mode === "edit" || D.mode === "markdown-preview") && (D.externalMutation === "deleted" || D.externalMutation === "renamed") && P.matchesCreateOrUpdate(D) && e.setExternalMutation(D.id, null);
			}
			if (A.events.some((e) => e.kind === "overflow")) {
				for (let e of collectOverflowEditorExternalReloadTargets(M)) scheduleDebouncedEditorExternalReload(e);
				return;
			}
			if (P.changes.length !== 0) for (let e of P.changes) {
				let D = P.matchingOpenFiles(e);
				if (D.length === 0 && !P.hasCombinedDiffConsumer) continue;
				let k = {
					worktreeId: M.worktreeId,
					worktreePath: M.worktreePath,
					relativePath: e.relativePath,
					runtimeEnvironmentId: M.runtimeEnvironmentId,
					...getLocalWindowsWslAliasOption(M)
				};
				if (Object.defineProperty(k, "indexedOpenFiles", { value: { matches: (D) => P.matchingOpenFiles(e, D) } }), D.length === 0) {
					scheduleDebouncedEditorExternalReload(k);
					continue;
				}
				let A = D.filter((e) => e.isDirty);
				if (A.length > 0) {
					let j = A.filter((e) => canAutoSaveOpenFile(e)).map((e) => e.id), N = !1;
					if (A.some((e) => e.pendingSelfMoveEcho)) {
						let D = normalizeRuntimePathForComparison(e.absolutePath);
						N = A.some((e) => e.pendingSelfMoveEcho && normalizeRuntimePathForComparison(e.pendingSelfMoveEcho.targetPath) === D);
					}
					if (N ? scheduleEditorSelfMoveEchoVerification(M, j, !0) : scheduleEditorChangedOnDiskMark(M, k, j), A.length === D.length) {
						P.hasCombinedDiffConsumer && scheduleDebouncedEditorExternalReload(k);
						continue;
					}
				}
				let j = getRecentSelfWrite(e.absolutePath, M.runtimeEnvironmentId);
				if (j) {
					scheduleSelfWriteAwareEditorExternalReload(M, k, D[0], j);
					continue;
				}
				scheduleDebouncedEditorExternalReload(k);
			}
		},
		dispose: () => {
			for (let e of D.values()) clearTimeout(e.timer);
			D.clear();
		}
	};
}
function collectOverflowEditorExternalReloadTargets(e) {
	let D = useAppStore.getState(), O = [];
	for (let k of D.openFiles) k.worktreeId !== e.worktreeId || getOpenFileRuntimeOwner(k) !== (e.runtimeEnvironmentId ?? null) || !isExternalReloadableEditorTab(k) || k.isDirty || (k.externalMutation && D.setExternalMutation(k.id, null), O.push({
		worktreeId: e.worktreeId,
		worktreePath: e.worktreePath,
		relativePath: k.relativePath,
		runtimeEnvironmentId: e.runtimeEnvironmentId ?? null,
		...getLocalWindowsWslAliasOption(e)
	}));
	return O;
}
function hasRenameCorrelatedCreate(e, D, O, k) {
	if (O.length === 0) return !1;
	let A = new Set(O), j = /* @__PURE__ */ new Set();
	for (let e of k) e.worktreeId !== D || e.mode !== "edit" && e.mode !== "markdown-preview" || !A.has(e.id) || j.add(basename(e.filePath));
	return j.size === 0 ? !1 : e.events.some((e) => e.kind === "create" && e.isDirectory !== !0 && j.has(basename(e.absolutePath)));
}
function warnExternalWatchFailure(e, D) {
	console.warn("[filesystem-watch] failed to watch worktree", {
		worktreeId: e.worktreeId,
		worktreePath: e.worktreePath,
		connectionId: e.connectionId,
		error: D instanceof Error ? D.message : String(D)
	});
}
function useEditorExternalWatch() {
	let { targets: e, targetsKey: D } = useAppStore(selectEditorExternalWatchTargets), k = (0, import_react.useRef)([]), A = (0, import_react.useRef)(e);
	A.current = e;
	let j = (0, import_react.useRef)(/* @__PURE__ */ new Map()), M = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let e = A.current, D = k.current, O = new Set(D.map(getEditorExternalWatchTargetKey)), N = new Set(e.map(getEditorExternalWatchTargetKey)), P = D.filter((e) => !N.has(getEditorExternalWatchTargetKey(e))), F = e.filter((e) => !O.has(getEditorExternalWatchTargetKey(e)));
		for (let e of P) {
			let D = getEditorExternalWatchTargetKey(e), O = j.current.get(D);
			O ? (O(), j.current.delete(D)) : window.api.fs.unwatchWorktree({
				worktreePath: e.worktreePath,
				connectionId: e.connectionId
			});
		}
		for (let e of F) {
			if (e.runtimeEnvironmentId) {
				subscribeRuntimeTarget(e, j.current, M);
				continue;
			}
			window.api.fs.watchWorktree({
				worktreePath: e.worktreePath,
				connectionId: e.connectionId
			}).catch((D) => {
				warnExternalWatchFailure(e, D);
			});
		}
		k.current = e;
	}, [D]), (0, import_react.useEffect)(() => {
		let e = j.current, { handleFsChanged: D, dispose: A } = buildEditorExternalWatchEventHandler((e, D) => k.current.find((k) => normalizeRuntimePathForComparison(k.worktreePath) === normalizeRuntimePathForComparison(e) && k.runtimeEnvironmentId === D)), N = window.api.fs.onFsChanged((e) => D(e, null));
		return M.current = D, () => {
			N(), A(), M.current = null;
			for (let D of k.current) {
				let O = getEditorExternalWatchTargetKey(D), k = e.get(O);
				k ? k() : window.api.fs.unwatchWorktree({
					worktreePath: D.worktreePath,
					connectionId: D.connectionId
				});
			}
			e.clear(), k.current = [];
		};
	}, []);
}
function subscribeRuntimeTarget(e, D, O) {
	let k = getEditorExternalWatchTargetKey(e), A = !1, M = () => {
		A = !0;
	};
	D.set(k, M), subscribeRuntimeFileChanges({
		settings: { activeRuntimeEnvironmentId: e.runtimeEnvironmentId },
		worktreeId: e.worktreeId,
		worktreePath: e.worktreePath,
		connectionId: e.connectionId
	}, (D) => O.current?.(D, e.runtimeEnvironmentId), (D) => warnExternalWatchFailure(e, D)).then((e) => {
		if (A) {
			e();
			return;
		}
		D.get(k) === M ? D.set(k, e) : e();
	}).catch((O) => {
		D.get(k) === M && D.delete(k), warnExternalWatchFailure(e, O);
	});
}
function verifyLatchedMoveDestinations(...e) {
	verifyLatchedEditorMoveDestinations(...e);
}
const RENAME_TERMINAL_TAB_EVENT = "orca-rename-terminal-tab";
function requestTerminalTabRename(e) {
	window.dispatchEvent(new CustomEvent(RENAME_TERMINAL_TAB_EVENT, { detail: { tabId: e } }));
}
export { getRevealAncestorDirs as _, getDiffContentSignature as a, trackExternalChangeConflictAction as c, settleEditorPathMove as d, SELF_WRITE_REMOTE_TTL_MS as f, useFileExplorerWatch as g, recordSelfWrite as h, verifyLatchedMoveDestinations as i, ORCA_WORKTREE_FILE_CHANGE_EVENT as l, hasRecentSelfWrite as m, requestTerminalTabRename as n, getDiskBaselineSignature as o, clearSelfWrite as p, useEditorExternalWatch as r, markFileChangedOnDisk as s, RENAME_TERMINAL_TAB_EVENT as t, beginEditorPathMove as u, isPathEqualOrDescendant as v, fileExplorerRefreshConcurrency as y };
