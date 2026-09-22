import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as ArrowDown } from "./arrow-down-DdoSov0P.js";
import { t as ArrowLeft } from "./arrow-left-DVNzwFVN.js";
import { t as ArrowUp } from "./arrow-up-6Uj9YtPL.js";
import { r as activateAndRevealWorktree } from "./worktree-activation-u-wSAPlP.js";
import { t as Bot } from "./bot-D4STJTH1.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as Circle } from "./circle-DN6sV7ND.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as FileExclamationPoint } from "./file-exclamation-point-DPyxPlRj.js";
import { t as GitBranch } from "./git-branch-CuLRr9n5.js";
import { t as GitPullRequest } from "./git-pull-request-BNWXjRrD.js";
import { t as HardDrive } from "./hard-drive-V2qUdtJR.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as Minus } from "./minus-Dme7h17H.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { t as Search } from "./search-CF4JLrDD.js";
import { t as Server } from "./server-BmPwXRCG.js";
import { t as Terminal } from "./terminal-DVHlU3bc.js";
import { $_ as getRuntimeGitStatus, Ih as parsePaneKey, Yu as tabHasLivePty, bv as composeWorktreeHostIdentity, fp as isGitHubPRSuppressed, gp as getHostedReviewCacheKey, iC as parseExecutionHostId, iw as Trash2, nu as classifyTitleActivity, qr as issueCacheKey, ru as isExplicitAgentStatusFresh, sy as findRepoForHost, t as useAppStore, vf as AGENT_STATUS_STALE_AFTER_MS } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as X } from "./x-BiewlTnM.js";
import { n as ZoomIn, t as ZoomOut } from "./zoom-out-C3usinlI.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { f as ContextMenuTrigger, n as ContextMenuContent, r as ContextMenuItem, t as ContextMenu } from "./context-menu-WDfkgXiK.js";
import { n as HoverCardContent, r as HoverCardTrigger, t as HoverCard } from "./hover-card-YPvTyc89.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-X9Gmv_Pu.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
import { t as installWindowVisibilityInterval } from "./window-visibility-interval-BxcyZyE8.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { t as Badge } from "./badge-D7sahA2a.js";
import "./window-park-visibility-BBcurIcE.js";
import { a as getWorktreeOnHostFromState, i as getWorktreeMapFromState, r as getRepoMapFromState } from "./selectors-Cdg4hUQI.js";
import "./web-runtime-session-CeAC5QPx.js";
import "./agent-paste-draft-Ddp-k6QZ.js";
import "./agent-process-recognition-BUFJTuDF.js";
import "./native-chat-session-option-cache-DOY0fjiI.js";
import "./gitlab-links-Di3ozbga.js";
import "./agent-status-worktree-attribution-0Thqf3S9.js";
import "./localized-catalog-Dsz6wk5E.js";
import "./connection-context-2sxF2wah.js";
import "./web-session-tabs-sync-BfOF1RHT.js";
import "./pane-agent-owner-Ci26i0GA.js";
import { o as branchDisplayName } from "./WorktreeCardHelpers-BykCvVd_.js";
import { a as prepareActiveWorktreeFocusAfterDelete, c as toWorktreeDeleteIdentities, l as showWorkspaceListChangedToast, t as runWorktreeBatchDelete } from "./delete-worktree-flow-DRix0Gy6.js";
import "./preserved-branch-batch-toast-C08Rnofp.js";
import { t as getAgentStatusEpochNow } from "./agent-status-epoch-clock-CNjEkuIm.js";
import { t as hasVisibleOverlay } from "./visible-overlay-Bw86wx0q.js";
import "./relative-time-format-Clpgwkog.js";
import { a as getWorkspaceSpaceScanDateTimeLabel, i as getWorkspaceSpaceProgressLabel, n as formatCompactCount, o as getWorkspaceSpaceScanTimeLabel, r as getWorkspaceSpaceBranchLabel, s as getWorkspaceSpaceStatusLabel, t as formatBytes } from "./workspace-space-format-1Oh-HqR3.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function useWorkspaceSpaceManagerBindings() {
	let e = useAppStore((e) => e.workspaceSpaceAnalysis), t = useAppStore((e) => e.workspaceSpaceScanProgress), n = useAppStore((e) => e.workspaceSpaceScanError), r = useAppStore((e) => e.workspaceSpaceScanning), i = useAppStore((e) => e.refreshWorkspaceSpace), a = useAppStore((e) => e.cancelWorkspaceSpaceScan), o = useAppStore((e) => e.removeWorkspaceSpaceWorktrees), s = useAppStore((e) => e.removeWorktree), c = useAppStore((e) => e.deleteStateByWorktreeId), l = useAppStore((e) => getRepoMapFromState(e)), u = useAppStore((e) => e.repos), d = useAppStore((e) => getWorktreeMapFromState(e)), f = useAppStore((e) => e.tabsByWorktree), p = useAppStore((e) => e.ptyIdsByTabId), m = useAppStore((e) => e.agentStatusByPaneKey), h = useAppStore((e) => e.migrationUnsupportedByPtyId), g = useAppStore((e) => e.runtimePaneTitlesByTabId), _ = useAppStore((e) => e.agentStatusEpoch), v = useAppStore((e) => e.retainedAgentsByPaneKey), y = useAppStore((e) => e.openFiles), b = useAppStore((e) => e.editorDrafts), x = useAppStore((e) => e.browserTabsByWorktree), S = useAppStore((e) => e.gitStatusByWorktree), C = useAppStore((e) => e.remoteStatusesByWorktree), w = useAppStore((e) => e.hostedReviewCache), T = useAppStore((e) => e.issueCache), E = useAppStore((e) => e.linearIssueCache), D = useAppStore((e) => e.settings), O = useAppStore((e) => e.activeWorktreeId), k = useAppStore((e) => e.activeWorkspaceExecutionHostId), A = useAppStore((e) => e.setGitStatus), j = useAppStore((e) => e.updateWorktreeGitIdentity), M = useAppStore((e) => e.setUpstreamStatus), N = useAppStore((e) => e.fetchUpstreamStatus), [P, I] = (0, import_react.useState)(""), [L, R] = (0, import_react.useState)(!1), [z, B] = (0, import_react.useState)("size"), [V, H] = (0, import_react.useState)("desc"), [U, W] = (0, import_react.useState)(() => /* @__PURE__ */ new Set()), [G, K] = (0, import_react.useState)(null), [q, J] = (0, import_react.useState)(null), [Y, Z] = (0, import_react.useState)({}), [Q, $] = (0, import_react.useState)(() => /* @__PURE__ */ new Map());
	return {
		analysis: e,
		progress: t,
		scanError: n,
		isScanning: r,
		refreshWorkspaceSpace: i,
		cancelWorkspaceSpaceScan: a,
		removeWorkspaceSpaceWorktrees: o,
		removeWorktree: s,
		deleteStateByWorktreeId: c,
		repoMap: l,
		repos: u,
		worktreeMap: d,
		tabsByWorktree: f,
		ptyIdsByTabId: p,
		agentStatusByPaneKey: m,
		migrationUnsupportedByPtyId: h,
		runtimePaneTitlesByTabId: g,
		agentStatusEpoch: _,
		retainedAgentsByPaneKey: v,
		openFiles: y,
		editorDrafts: b,
		browserTabsByWorktree: x,
		gitStatusByWorktree: S,
		remoteStatusesByWorktree: C,
		hostedReviewCache: w,
		issueCache: T,
		linearIssueCache: E,
		settings: D,
		activeWorktreeId: O,
		activeWorkspaceExecutionHostId: k,
		setGitStatus: A,
		updateWorktreeGitIdentity: j,
		setUpstreamStatus: M,
		fetchUpstreamStatus: N,
		query: P,
		setQuery: I,
		onlyDeletable: L,
		setOnlyDeletable: R,
		sortKey: z,
		setSortKey: B,
		sortDirection: V,
		setSortDirection: H,
		selectedIds: U,
		setSelectedIds: W,
		inspectedWorktreeId: G,
		setInspectedWorktreeId: K,
		treemapZoomWorktreeId: q,
		setTreemapZoomWorktreeId: J,
		gitRefreshStateByWorktreeId: Y,
		setGitRefreshStateByWorktreeId: Z,
		gitStatusByWorktreeIdentity: Q,
		setGitStatusByWorktreeIdentity: $,
		gitStatusScanGenerationRef: (0, import_react.useRef)(e?.scannedAt ?? null),
		gitStatusByWorktreeIdentityRef: (0, import_react.useRef)(Q),
		inFlightGitStatusRefreshes: (0, import_react.useRef)(/* @__PURE__ */ new Set())
	};
}
function getWorkspaceSpaceWorktreeIdentity(e) {
	return composeWorktreeHostIdentity(e.executionHostId, e.worktreeId);
}
function getSelectedDeletableWorkspaceRows(e, t, n = () => !1) {
	return e.filter((e) => e.canDelete && e.status === "ok" && t.has(getWorkspaceSpaceWorktreeIdentity(e)) && !n(e));
}
function getVisibleDeletableWorkspaceIdentities(e, t = () => !1) {
	return e.filter((e) => e.canDelete && e.status === "ok" && !t(e)).map(getWorkspaceSpaceWorktreeIdentity);
}
function isWorkspaceSpaceFilterQueryTooLarge(e, t = 2048) {
	return isClipboardTextByteLengthOverLimit(e, t);
}
function getPaneKeyTabId(e) {
	let t = parsePaneKey(e);
	if (t) return t.tabId;
	let n = e.indexOf(":");
	return n <= 0 || n !== e.lastIndexOf(":") || n === e.length - 1 ? null : e.slice(0, n);
}
function isActiveAgentState(e) {
	return e.state === "working" || e.state === "blocked" || e.state === "waiting";
}
function countTitleActiveAgentsForTab(e, t, n) {
	if (!tabHasLivePty(n, e.id)) return 0;
	let r = t[e.id];
	if (r && Object.keys(r).length > 0) return Object.values(r).filter((e) => {
		let t = classifyTitleActivity(e);
		return t === "working" || t === "permission";
	}).length;
	let i = classifyTitleActivity(e.title);
	return i === "working" || i === "permission" ? 1 : 0;
}
function countWorkspaceSpaceActiveAgents({ worktreeId: e, tabs: t, agentStatusByPaneKey: n, migrationUnsupportedByPtyId: r, runtimePaneTitlesByTabId: i, ptyIdsByTabId: a, now: o }) {
	let s = new Set(t.map((e) => e.id)), c = /* @__PURE__ */ new Set(), l = 0;
	for (let [e, t] of Object.entries(n)) {
		if (!isActiveAgentState(t) || !isExplicitAgentStatusFresh(t, o, 18e5)) continue;
		let n = getPaneKeyTabId(t.paneKey || e);
		!n || !s.has(n) || (c.add(n), l += 1);
	}
	for (let t of Object.values(r)) {
		let n = t.tabId ?? (t.paneKey ? getPaneKeyTabId(t.paneKey) : null);
		t.worktreeId !== e && (!n || !s.has(n)) || (n && c.add(n), l += 1);
	}
	for (let e of t) c.has(e.id) || (l += countTitleActiveAgentsForTab(e, i, a));
	return l;
}
function getWorkspaceSpaceSearchText(e) {
	return [
		e.displayName,
		e.repoDisplayName,
		e.path,
		e.branch,
		e.status
	].join(" ").toLowerCase();
}
function getLargestWorkspaceSpaceItemSize(e) {
	let t = 0;
	for (let n of e) n.sizeBytes > t && (t = n.sizeBytes);
	return t;
}
function getLargestWorkspaceSpaceRowSize(e) {
	let t = 0;
	for (let n of e) n.sizeBytes > t && (t = n.sizeBytes);
	return t;
}
function compareRows(e, t, n) {
	switch (n) {
		case "size": return e.sizeBytes - t.sizeBytes;
		case "name": return e.displayName.localeCompare(t.displayName);
		case "repo": return e.repoDisplayName.localeCompare(t.repoDisplayName) || e.displayName.localeCompare(t.displayName);
		case "activity": return e.lastActivityAt - t.lastActivityAt;
	}
}
function sortWorkspaceSpaceRows(e, t, n) {
	let r = n === "asc" ? 1 : -1;
	return [...e].sort((e, n) => compareRows(e, n, t) * r || n.sizeBytes - e.sizeBytes || e.displayName.localeCompare(n.displayName));
}
function filterWorkspaceSpaceRows(e, t, n) {
	if (isWorkspaceSpaceFilterQueryTooLarge(t)) return [];
	let r = t.trim().toLowerCase();
	return e.filter((e) => n && !e.canDelete ? !1 : r ? getWorkspaceSpaceSearchText(e).includes(r) : !0);
}
function isWorkspaceSpaceRowReadyToDelete(e, t) {
	return e.canDelete && e.status === "ok" && !e.isMainWorktree && t !== void 0 && !t.isActive && t.changedFileCount === 0 && t.dirtyEditorBufferCount === 0 && t.activeAgentCount === 0 && t.liveTerminalCount === 0 && t.browserTabCount === 0 && !t.reviewLabel && !t.issueLabel && !t.linearIssueLabel;
}
function resolveWorkspaceSpaceInspectedWorktreeId(e, t) {
	if (t && e.some((e) => getWorkspaceSpaceWorktreeIdentity(e) === t)) return t;
	let n = e.find((e) => e.status === "ok");
	return n ? getWorkspaceSpaceWorktreeIdentity(n) : null;
}
function resolveWorkspaceSpaceTreemapZoomWorktreeId(e, t) {
	return t && e.some((e) => getWorkspaceSpaceWorktreeIdentity(e) === t && e.status === "ok") ? t : null;
}
function pruneWorkspaceSpaceSelectedIds(e, t) {
	if (t.size === 0) return t;
	let n = new Set(e.map(getWorkspaceSpaceWorktreeIdentity)), r = !1, i = /* @__PURE__ */ new Set();
	for (let e of t) n.has(e) ? i.add(e) : r = !0;
	return r ? i : t;
}
function pluralize(e, t, n = `${t}s`) {
	return `${e} ${e === 1 ? t : n}`;
}
function formatReviewState(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function countLiveTerminals(e, t) {
	return e.filter((e) => (t[e.id]?.length ?? 0) > 0).length;
}
function getBranchStatus(e) {
	if (!e?.hasUpstream) return null;
	if (e.ahead === 0 && e.behind === 0) return "Synced with upstream";
	let t = [];
	return e.ahead > 0 && t.push(`${e.ahead} ahead`), e.behind > 0 && t.push(`${e.behind} behind`), t.join(", ");
}
function getWorkspaceDecisionDetails(e, t) {
	let n = t.worktreeMap.get(e.worktreeId), r = t.tabsByWorktree[e.worktreeId] ?? [], i = t.openFiles.filter((t) => t.worktreeId === e.worktreeId), a = i.filter((e) => e.isDirty || t.editorDrafts[e.id] !== void 0).length, o = t.gitStatusByWorktreeIdentity ? t.gitStatusByWorktreeIdentity.get(getWorkspaceSpaceWorktreeIdentity(e)) : t.gitStatusByWorktree[e.worktreeId], s = n ? branchDisplayName(n.branch) : getWorkspaceSpaceBranchLabel(e), c = t.repos ? findRepoForHost(t.repos, e.repoId, {
		hostId: e.executionHostId,
		settings: t.settings
	}) : t.repoMap.get(e.repoId), l = c?.executionHostId ?? e.executionHostId ?? null, u = getHostedReviewCacheKey(e.repoPath, s, t.settings, e.repoId, c?.connectionId, l, c != null), d = t.hostedReviewCache[u]?.data, f = d?.provider === "github" && n && isGitHubPRSuppressed(n, d.number) ? null : d, p = n?.linkedPR ?? null, m = f == null ? p ? `PR #${p}` : null : `PR #${f.number} ${formatReviewState(f.state)}${f.status && f.status !== "none" ? `, ${f.status}` : ""}`, h = n?.linkedIssue ?? null, g = h && c ? t.issueCache[issueCacheKey(c.path, c.id, h, t.settings, c.connectionId, l, !0)]?.data : null, _ = h ? g ? `#${g.number} ${g.state}: ${g.title}` : `#${h}` : null, v = n?.linkedLinearIssue ?? null, y = v ? t.linearIssueCache[`selected::${v}`]?.data ?? t.linearIssueCache[v]?.data : null, b = v ? y ? `${y.identifier}${y.state?.name ? ` ${y.state.name}` : ""}: ${y.title}` : v : null;
	return {
		isActive: t.activeWorktreeId === e.worktreeId && (t.activeWorkspaceExecutionHostId === null || t.activeWorkspaceExecutionHostId === e.executionHostId),
		canOpenWorkspace: n !== void 0,
		terminalTabCount: r.length,
		liveTerminalCount: countLiveTerminals(r, t.ptyIdsByTabId),
		activeAgentCount: countWorkspaceSpaceActiveAgents({
			worktreeId: e.worktreeId,
			tabs: r,
			agentStatusByPaneKey: t.agentStatusByPaneKey,
			migrationUnsupportedByPtyId: t.migrationUnsupportedByPtyId,
			runtimePaneTitlesByTabId: t.runtimePaneTitlesByTabId,
			ptyIdsByTabId: t.ptyIdsByTabId,
			now: t.now
		}),
		completedAgentCount: Object.values(t.retainedAgentsByPaneKey).filter((t) => t.worktreeId === e.worktreeId && t.entry.state === "done").length,
		openEditorFileCount: i.length,
		dirtyEditorBufferCount: a,
		browserTabCount: t.browserTabsByWorktree[e.worktreeId]?.length ?? 0,
		changedFileCount: o ? o.length : null,
		branchStatus: getBranchStatus(t.remoteStatusesByWorktree[e.worktreeId]),
		reviewLabel: m,
		issueLabel: _,
		linearIssueLabel: b
	};
}
function getWorkspaceSpaceDeleteState(e, t, n) {
	let r = t[getWorkspaceSpaceWorktreeIdentity(e)];
	if (r) return r;
	let i = t[e.worktreeId];
	return !n || !i || i.executionHostId !== void 0 && i.executionHostId === e.executionHostId ? i : void 0;
}
function useWorkspaceSpaceDecisionProjection(e) {
	let { activeWorktreeId: t, activeWorkspaceExecutionHostId: n, agentStatusEpoch: r, agentStatusByPaneKey: i, analysis: a, browserTabsByWorktree: o, deleteStateByWorktreeId: s, editorDrafts: c, gitStatusByWorktree: l, gitStatusByWorktreeIdentity: u, hostedReviewCache: d, issueCache: f, linearIssueCache: p, migrationUnsupportedByPtyId: m, openFiles: h, ptyIdsByTabId: g, remoteStatusesByWorktree: _, repoMap: v, repos: y, retainedAgentsByPaneKey: b, runtimePaneTitlesByTabId: x, settings: S, tabsByWorktree: C, worktreeMap: w } = e, T = (0, import_react.useMemo)(() => a?.worktrees ?? [], [a?.worktrees]), E = (0, import_react.useMemo)(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of T) e.set(t.worktreeId, (e.get(t.worktreeId) ?? 0) + 1);
		return e;
	}, [T]), D = (0, import_react.useMemo)(() => {
		let e = getAgentStatusEpochNow(r), a = /* @__PURE__ */ new Map();
		for (let r of T) a.set(getWorkspaceSpaceWorktreeIdentity(r), getWorkspaceDecisionDetails(r, {
			repoMap: v,
			worktreeMap: w,
			repos: y,
			tabsByWorktree: C,
			ptyIdsByTabId: g,
			agentStatusByPaneKey: i,
			migrationUnsupportedByPtyId: m,
			runtimePaneTitlesByTabId: x,
			retainedAgentsByPaneKey: b,
			openFiles: h,
			editorDrafts: c,
			browserTabsByWorktree: o,
			gitStatusByWorktree: l,
			gitStatusByWorktreeIdentity: u,
			remoteStatusesByWorktree: _,
			hostedReviewCache: d,
			issueCache: f,
			linearIssueCache: p,
			settings: S,
			activeWorktreeId: t,
			activeWorkspaceExecutionHostId: n,
			now: e
		}));
		return a;
	}, [
		t,
		n,
		r,
		i,
		o,
		c,
		l,
		u,
		d,
		f,
		p,
		h,
		g,
		v,
		y,
		_,
		b,
		m,
		x,
		S,
		T,
		C,
		w
	]), O = (0, import_react.useCallback)((e) => getWorkspaceSpaceDeleteState(e, s, (E.get(e.worktreeId) ?? 0) > 1), [s, E]);
	return {
		sourceRows: T,
		decisionDetailsByWorktreeId: D,
		getDeleteStateForWorktree: O,
		isWorktreeDeleting: (0, import_react.useCallback)((e) => O(e)?.isDeleting ?? !1, [O])
	};
}
function useWorkspaceSpaceGitRefreshAction(e) {
	let { analysis: t, gitStatusByWorktreeIdentityRef: n, gitStatusScanGenerationRef: r, inFlightGitStatusRefreshes: i, setGitStatusByWorktreeIdentity: a, setGitRefreshStateByWorktreeId: o, settings: s } = e;
	return (0, import_react.useCallback)((e) => {
		let c = getWorkspaceSpaceWorktreeIdentity(e), l = t?.scannedAt ?? null, u = `${String(l)}:${c}`, d = useAppStore.getState();
		if (r.current === l && n.current.has(c) || i.current.has(u)) return Promise.resolve();
		i.current.add(u), o((e) => ({
			...e,
			[c]: {
				isRefreshing: !0,
				error: null
			}
		}));
		let f = findRepoForHost(d.repos, e.repoId, {
			hostId: e.executionHostId,
			settings: s
		}), p = parseExecutionHostId(e.executionHostId), m = s ? {
			...s,
			activeRuntimeEnvironmentId: p?.kind === "runtime" ? p.environmentId : null
		} : { activeRuntimeEnvironmentId: p?.kind === "runtime" ? p.environmentId : null };
		return (f ? getRuntimeGitStatus({
			settings: m,
			worktreeId: e.worktreeId,
			worktreePath: e.path,
			connectionId: f.connectionId ?? void 0
		}) : Promise.reject(/* @__PURE__ */ Error("Workspace owner is no longer available"))).then((e) => {
			if (r.current !== l) return;
			let t = new Map(n.current);
			t.set(c, e.entries), n.current = t, a(t), o((e) => ({
				...e,
				[c]: {
					isRefreshing: !1,
					error: null
				}
			}));
		}).catch((e) => {
			r.current === l && o((t) => ({
				...t,
				[c]: {
					isRefreshing: !1,
					error: e instanceof Error ? e.message : String(e)
				}
			}));
		}).finally(() => {
			i.current.delete(u);
		});
	}, [
		t?.scannedAt,
		n,
		r,
		i,
		o,
		a,
		s
	]);
}
function getWorkspaceSpaceGitStatusRefreshCandidates(e, t = {}) {
	let n = e.filter((e) => e.canDelete && e.status === "ok" && !e.isMainWorktree), r = (e) => e.worktreeId === t.activeWorktreeId && (!t.activeExecutionHostId || e.executionHostId === t.activeExecutionHostId) ? 0 : t.visibleWorktreeIdentities?.has(getWorkspaceSpaceWorktreeIdentity(e)) ? 1 : 2;
	return n.map((e, t) => ({
		worktree: e,
		index: t,
		rank: r(e)
	})).sort((e, t) => e.rank - t.rank || e.index - t.index).map(({ worktree: e }) => e);
}
var GIT_STATUS_REFRESH_CONCURRENCY = 6;
function useWorkspaceSpaceManagerProjection(e) {
	let { activeWorktreeId: t, activeWorkspaceExecutionHostId: n, analysis: r, inspectedWorktreeId: i, isScanning: a, onlyDeletable: o, progress: s, query: c, selectedIds: l, gitStatusScanGenerationRef: u, gitStatusByWorktreeIdentityRef: d, inFlightGitStatusRefreshes: f, setGitStatusByWorktreeIdentity: p, setGitRefreshStateByWorktreeId: m, setInspectedWorktreeId: h, setSelectedIds: g, setTreemapZoomWorktreeId: _, sortDirection: v, sortKey: y, treemapZoomWorktreeId: b } = e.bindings, { decisionDetailsByWorktreeId: x, isWorktreeDeleting: S, sourceRows: C } = e.decision, w = e.refreshWorkspaceGitStatus, T = (0, import_react.useCallback)((e) => S(e) ? !0 : !isWorkspaceSpaceRowReadyToDelete(e, x.get(getWorkspaceSpaceWorktreeIdentity(e))), [x, S]), E = (0, import_react.useMemo)(() => sortWorkspaceSpaceRows(filterWorkspaceSpaceRows(C, c, o), y, v), [
		o,
		c,
		v,
		y,
		C
	]), D = resolveWorkspaceSpaceInspectedWorktreeId(C, i), O = pruneWorkspaceSpaceSelectedIds(C, l), k = resolveWorkspaceSpaceTreemapZoomWorktreeId(C, b);
	i !== D && h(D), O !== l && g(O), b !== k && _(k);
	let A = r?.scannedAt ?? null;
	(0, import_react.useEffect)(() => {
		u.current !== A && (u.current = A, d.current = /* @__PURE__ */ new Map(), f.current.clear(), p(/* @__PURE__ */ new Map()), m({}));
	}, [
		r?.scannedAt,
		d,
		u,
		f,
		A,
		m,
		p
	]), (0, import_react.useEffect)(() => {
		let e = getWorkspaceSpaceGitStatusRefreshCandidates(C, {
			activeWorktreeId: t,
			activeExecutionHostId: n,
			visibleWorktreeIdentities: new Set(E.map(getWorkspaceSpaceWorktreeIdentity))
		});
		if (e.length === 0) return;
		let r = !1, i = 0, a = async () => {
			for (; !r;) {
				let t = e[i];
				if (i += 1, !t) return;
				await w(t);
			}
		}, o = Math.min(GIT_STATUS_REFRESH_CONCURRENCY, e.length);
		return Promise.all(Array.from({ length: o }, () => a())), () => {
			r = !0;
		};
	}, [
		t,
		n,
		w,
		E,
		C
	]);
	let j = E.find((e) => getWorkspaceSpaceWorktreeIdentity(e) === D) ?? E.find((e) => e.status === "ok") ?? null, M = C.find((e) => getWorkspaceSpaceWorktreeIdentity(e) === k && e.status === "ok") ?? null, N = getLargestWorkspaceSpaceRowSize(E), P = (0, import_react.useMemo)(() => getSelectedDeletableWorkspaceRows(E, O, T), [
		T,
		O,
		E
	]), F = (0, import_react.useMemo)(() => P.map(getWorkspaceSpaceWorktreeIdentity), [P]), I = (0, import_react.useMemo)(() => new Set(F), [F]), L = (0, import_react.useMemo)(() => getVisibleDeletableWorkspaceIdentities(E, T), [T, E]), R = L.length > 0 && L.every((e) => O.has(e)), z = L.some((e) => O.has(e));
	return {
		isWorktreeUnavailableForDelete: T,
		rows: E,
		nextInspectedWorktreeId: D,
		nextSelectedIds: O,
		nextTreemapZoomWorktreeId: k,
		inspectedWorktree: j,
		zoomedWorktree: M,
		maxSize: N,
		selectedDeletableRows: P,
		selectedDeletableIdentities: F,
		visibleDeletableIdentities: L,
		selectedDeletableIds: F,
		visibleDeletableIds: L,
		allVisibleSelected: R,
		visibleSelectionState: R ? !0 : z ? "mixed" : !1,
		isInitialScan: a && !r,
		hasRows: C.length > 0,
		progressLabel: getWorkspaceSpaceProgressLabel(s),
		repoErrors: r?.repos.filter((e) => e.error !== null) ?? [],
		selectedReclaimableBytes: (0, import_react.useMemo)(() => E.filter((e) => I.has(getWorkspaceSpaceWorktreeIdentity(e))).reduce((e, t) => e + t.reclaimableBytes, 0), [E, I])
	};
}
function useWorkspaceSpaceManagerPanel() {
	let e = useWorkspaceSpaceManagerBindings(), { cancelWorkspaceSpaceScan: t, refreshWorkspaceSpace: r, removeWorkspaceSpaceWorktrees: i, removeWorktree: a, setInspectedWorktreeId: o, setSelectedIds: s, setSortDirection: c, setSortKey: l, setTreemapZoomWorktreeId: u, sortKey: d } = e, f = (0, import_react.useCallback)(() => {
		r().catch(() => {});
	}, [r]), p = (0, import_react.useCallback)(() => {
		t();
	}, [t]), m = useWorkspaceSpaceDecisionProjection(e), h = useWorkspaceSpaceManagerProjection({
		bindings: e,
		decision: m,
		refreshWorkspaceGitStatus: useWorkspaceSpaceGitRefreshAction(e)
	}), { allVisibleSelected: g, selectedDeletableRows: _, visibleDeletableIdentities: v } = h, y = (e) => {
		if (d === e) {
			c((e) => e === "asc" ? "desc" : "asc");
			return;
		}
		l(e), c(e === "name" || e === "repo" ? "asc" : "desc");
	}, b = (e) => {
		l(e), c(e === "name" || e === "repo" ? "asc" : "desc");
	}, x = (e) => {
		let t = getWorkspaceSpaceWorktreeIdentity(e);
		s((e) => {
			let n = new Set(e);
			return n.has(t) ? n.delete(t) : n.add(t), n;
		});
	}, S = () => {
		s((e) => {
			let t = new Set(e);
			if (g) for (let e of v) t.delete(e);
			else for (let e of v) t.add(e);
			return t;
		});
	}, C = (0, import_react.useCallback)((e) => {
		if (e.length === 0) return;
		i(e);
		let t = new Set(e.map((e) => composeWorktreeHostIdentity(e.executionHostId ?? void 0, e.id)));
		o((e) => e && t.has(e) ? null : e), u((e) => e && t.has(e) ? null : e), s((e) => {
			let n = new Set(e);
			for (let e of t) n.delete(e);
			return n;
		}), toast.success(e.length === 1 ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.9afc97f9a3", "Workspace deleted") : translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.eee5240810", "Workspaces deleted"), { description: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.63efebe0e6", "{{value0}} {{value1}} removed from Space.", {
			value0: e.length,
			value1: e.length === 1 ? "workspace" : "workspaces"
		}) });
	}, [i]), w = (0, import_react.useCallback)((e) => {
		if (e.length === 0) return;
		let t = useAppStore.getState(), n = toWorktreeDeleteIdentities(e.flatMap((e) => {
			let n = getWorktreeOnHostFromState(t, e.worktreeId, e.executionHostId ?? void 0);
			return n ? [n] : [];
		}));
		if (n.length !== e.length) {
			showWorkspaceListChangedToast();
			return;
		}
		runWorktreeBatchDelete(n, {
			forceConfirm: !0,
			forceOnConfirm: !1,
			onDeleted: C
		});
	}, [C]), T = (0, import_react.useCallback)((e) => {
		let t = prepareActiveWorktreeFocusAfterDelete(e.worktreeId);
		a({
			id: e.worktreeId,
			executionHostId: e.executionHostId ?? null
		}, !0, { allowUnverifiedPtyStop: !0 }).then((r) => {
			if (!r.ok) {
				toast.error(translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.2965415393", "Force delete failed"), { description: r.error });
				return;
			}
			t(), C([{
				id: e.worktreeId,
				executionHostId: e.executionHostId ?? null
			}]);
		}).catch((e) => {
			toast.error(translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.2965415393", "Force delete failed"), { description: e instanceof Error ? e.message : String(e) });
		});
	}, [C, a]), D = () => {
		_.length !== 0 && w(_);
	};
	return {
		...e,
		...m,
		...h,
		deleteWorktrees: w,
		forceDeleteWorktree: T,
		deleteSelected: D,
		refresh: f,
		cancelScan: p,
		toggleSort: y,
		selectSortKey: b,
		toggleSelection: x,
		toggleVisibleSelection: S
	};
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function Metric({ label: e, value: t, title: n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "truncate text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground",
			children: e
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 truncate text-lg font-semibold tabular-nums",
			title: n,
			children: t
		})]
	});
}
function UpdatedMetric({ scannedAt: e, isScanning: t }) {
	let [r, i] = (0, import_react.useState)(() => Date.now());
	return (0, import_react.useEffect)(() => {
		if (e !== null) return i(Date.now()), installWindowVisibilityInterval({
			run: () => i(Date.now()),
			intervalMs: 6e4
		});
	}, [e]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
		label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.52b629eb84", "Updated"),
		title: e === null ? void 0 : getWorkspaceSpaceScanDateTimeLabel(e),
		value: e === null ? t ? "Scanning" : "—" : getWorkspaceSpaceScanTimeLabel(e, r)
	});
}
function sumSizes(e) {
	return e.reduce((e, t) => e + Math.max(0, t.sizeBytes), 0);
}
function splitBalanced(e) {
	let t = sumSizes(e);
	if (e.length <= 1 || t <= 0) return {
		first: [...e],
		second: []
	};
	let n = t / 2, r = 0, i = 0;
	for (let t = 0; t < e.length; t += 1) {
		let a = r + Math.max(0, e[t].sizeBytes);
		if (t > 0 && Math.abs(n - r) < Math.abs(n - a)) break;
		r = a, i = t + 1;
	}
	return i = Math.min(e.length - 1, Math.max(1, i)), {
		first: e.slice(0, i),
		second: e.slice(i)
	};
}
function layoutTreemapRecursive(e, t, n, r) {
	if (e.length === 0 || t.width <= 0 || t.height <= 0) return;
	if (e.length === 1) {
		let i = e[0];
		r.push({
			...i,
			...t,
			depth: n,
			index: r.length
		});
		return;
	}
	let i = sumSizes(e);
	if (i <= 0) return;
	let { first: a, second: o } = splitBalanced(e), s = sumSizes(a) / i;
	if (t.width >= t.height) {
		let e = t.width * s;
		layoutTreemapRecursive(a, {
			...t,
			width: e
		}, n + 1, r), layoutTreemapRecursive(o, {
			x: t.x + e,
			y: t.y,
			width: t.width - e,
			height: t.height
		}, n + 1, r);
		return;
	}
	let c = t.height * s;
	layoutTreemapRecursive(a, {
		...t,
		height: c
	}, n + 1, r), layoutTreemapRecursive(o, {
		x: t.x,
		y: t.y + c,
		width: t.width,
		height: t.height - c
	}, n + 1, r);
}
function buildTreemapLayout(e) {
	let t = e.filter((e) => e.sizeBytes > 0).sort((e, t) => t.sizeBytes - e.sizeBytes || e.label.localeCompare(t.label)), n = [];
	return layoutTreemapRecursive(t, {
		x: 0,
		y: 0,
		width: 100,
		height: 100
	}, 0, n), n;
}
var TREEMAP_FILLS = [
	"color-mix(in srgb, var(--chart-2) 34%, var(--card))",
	"color-mix(in srgb, var(--foreground) 20%, var(--card))",
	"color-mix(in srgb, var(--chart-4) 28%, var(--card))",
	"color-mix(in srgb, var(--primary) 24%, var(--card))",
	"color-mix(in srgb, var(--chart-1) 38%, var(--card))"
];
function getTreemapFill(e, t) {
	return t ? "color-mix(in srgb, var(--ring) 40%, var(--card))" : TREEMAP_FILLS[e.index % TREEMAP_FILLS.length];
}
function WorkspaceSpaceTreemap({ rows: e, isScanning: t, selectedWorktreeId: a, zoomedWorktree: o, onSelect: s, onZoomChange: c }) {
	let l = e.find((e) => e.worktreeId === a) ?? null, u = !!l && l.status === "ok" && l.topLevelItems.length > 0, d = !!o, f = (0, import_react.useMemo)(() => buildTreemapLayout(o ? o.topLevelItems.filter((e) => e.sizeBytes > 0).map((e) => ({
		id: e.path,
		label: e.name,
		sizeBytes: e.sizeBytes
	})) : e.filter((e) => e.status === "ok" && e.sizeBytes > 0).map((e) => ({
		id: e.worktreeId,
		label: e.displayName,
		sizeBytes: e.sizeBytes
	}))), [e, o]);
	return f.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-72 items-center justify-center rounded-lg border border-dashed border-border/70 bg-muted/20 text-sm text-muted-foreground",
		children: [o ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			size: "xs",
			onClick: () => c(null),
			className: "absolute right-2 top-2 gap-1.5 bg-background/90 px-2.5 backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomOut, { className: "size-3" }), translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.ef890d31b9", "All")]
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, t ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.c5135e7e4a", "Scanning workspace sizes. You can leave this page.") : d ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.977bdf9a36", "No top-level items to show.") : translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.0990a63160", "No scanned workspace sizes yet.")]
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-72 overflow-hidden rounded-lg border border-border/70 bg-muted/20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute right-2 top-2 z-10 flex max-w-[calc(100%-1rem)] items-center gap-2",
			children: o ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-56 truncate rounded-md border border-border/70 bg-background/90 px-2 py-1 text-[11px] font-medium shadow-xs backdrop-blur",
				children: o.displayName
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "xs",
				onClick: () => c(null),
				className: "gap-1.5 bg-background/90 px-2.5 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomOut, { className: "size-3" }), translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.ef890d31b9", "All")]
			})] }) : u ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "xs",
				onClick: () => c(l.worktreeId),
				className: "gap-1.5 bg-background/90 px-2.5 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "size-3" }), translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.d3f9c69ddc", "Zoom")]
			}) : null
		}), f.map((e) => {
			let t = e.width * e.height, n = !d && e.id === a, r = {
				left: `${e.x}%`,
				top: `${e.y}%`,
				width: `${e.width}%`,
				height: `${e.height}%`,
				background: getTreemapFill(e, n)
			}, o = t >= 80 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "block min-w-0 text-[11px] font-medium leading-tight text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate",
					children: e.label
				}), t >= 180 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 block truncate text-muted-foreground",
					children: formatBytes(e.sizeBytes)
				}) : null]
			}) : null;
			return d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				title: `${e.label} • ${formatBytes(e.sizeBytes)}`,
				className: "absolute overflow-hidden border border-background/80 p-2 text-left",
				style: r,
				children: o
			}, e.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": `${e.label}, ${formatBytes(e.sizeBytes)}`,
				title: `${e.label} • ${formatBytes(e.sizeBytes)}`,
				onClick: () => s(e.id),
				className: cn("absolute overflow-hidden border border-background/80 p-2 text-left transition-[filter,outline] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", n && "ring-2 ring-ring ring-offset-1 ring-offset-background"),
				style: r,
				children: o
			}, e.id);
		})]
	});
}
function WorkspaceSpaceSizeBar({ value: e, max: t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-1.5 overflow-hidden rounded-full bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-foreground/65",
			style: { width: `${t > 0 ? Math.max(2, Math.min(100, e / t * 100)) : 0}%` }
		})
	});
}
function WorkspaceSpaceBreakdownList({ worktree: e, isScanning: t }) {
	if (!e) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full min-h-72 items-center justify-center rounded-lg border border-dashed border-border/70 bg-muted/15 text-sm text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2",
			children: [t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, t ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.c5135e7e4a", "Scanning workspace sizes. You can leave this page.") : translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.5c6d25720c", "Select a workspace to inspect.")]
		})
	});
	let r = Math.max(getLargestWorkspaceSpaceItemSize(e.topLevelItems), e.omittedTopLevelSizeBytes), i = e.topLevelItems.length + e.omittedTopLevelItemCount, a = e.omittedTopLevelItemCount > 0 ? {
		name: translate("components.status.bar.workspaceSpace.otherTopLevelItems", "Other top-level items ({{value0}})", { value0: e.omittedTopLevelItemCount }),
		path: "",
		kind: "other",
		sizeBytes: e.omittedTopLevelSizeBytes
	} : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-72 rounded-lg border border-border/70 bg-background/35",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-border/60 px-4 py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-sm font-semibold",
						children: e.displayName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 truncate text-xs text-muted-foreground",
						children: e.repoDisplayName
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shrink-0 text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold tabular-nums",
						children: formatBytes(e.sizeBytes)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[11px] text-muted-foreground",
						children: [
							formatCompactCount(i),
							" ",
							translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.b25c2c1086", "top-level items")
						]
					})]
				})]
			})
		}), e.status === "ok" ? i === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-4 py-8 text-center text-sm text-muted-foreground",
			children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.16988df079", "No files found.")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-h-72 overflow-y-auto scrollbar-sleek px-3 py-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [e.topLevelItems.slice(0, 12).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreakdownRow, {
					item: e,
					maxSize: r
				}, `${e.path}:${e.name}`)), a ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreakdownRow, {
					item: a,
					maxSize: r
				}) : null]
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2 px-4 py-4 text-xs text-destructive",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 break-words",
				children: e.error ?? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.0ba046fbc5", "Scan failed.")
			})]
		})]
	});
}
function BreakdownRow({ item: e, maxSize: t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5 rounded-md px-2 py-1.5 hover:bg-accent/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center justify-between gap-3 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 truncate font-medium",
				children: e.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 tabular-nums text-muted-foreground",
				children: formatBytes(e.sizeBytes)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceSizeBar, {
			value: e.sizeBytes,
			max: t
		})]
	});
}
function WorkspaceSpaceManagerOverview({ model: e }) {
	let { analysis: t, cancelScan: i, hasRows: a, inspectedWorktree: o, isInitialScan: s, isScanning: c, progress: l, progressLabel: u, refresh: d, repoErrors: f, scanError: p, setInspectedWorktreeId: m, setTreemapZoomWorktreeId: h, sourceRows: v, zoomedWorktree: b } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid overflow-hidden rounded-lg border border-border/65 bg-background/35 md:grid-cols-4 md:divide-x md:divide-border/60",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.09960d86bd", "Scanned"),
					value: t ? formatBytes(t.totalSizeBytes) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.83f1a0a932", "Reclaimable"),
					value: t ? formatBytes(t.reclaimableBytes) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
					label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.43171f3e60", "Workspaces"),
					value: t ? t.unavailableWorktreeCount > 0 ? `${t.scannedWorktreeCount}/${t.worktreeCount}` : String(t.scannedWorktreeCount) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdatedMetric, {
					scannedAt: t?.scannedAt ?? null,
					isScanning: c
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-2 text-xs text-muted-foreground",
				children: [c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 shrink-0 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardDrive, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: t ? c ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.34174bd83d", "{{value0}}. You can leave this page; the last result stays visible.", { value0: u ?? "Scanning workspace sizes" }) : translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.d595295d7d", "{{value0}} can be reclaimed from linked worktrees.", { value0: formatBytes(t.reclaimableBytes) }) : c ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.265d956765", "{{value0}}. You can leave this page.", { value0: u ?? "Scanning workspace sizes" }) : translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.e91dd2a9ae", "Run a scan to inspect workspace sizes.")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: c ? i : d,
				disabled: l?.state === "cancelling",
				className: "w-28 gap-1.5",
				children: [c ? l?.state === "cancelling" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5" }), c ? l?.state === "cancelling" ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.1fce91d1b9", "Stopping") : translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.8dc9ddac8a", "Cancel") : t ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.508673bac0", "Refresh") : translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.8c7c57fbf8", "Scan")]
			})]
		}),
		p ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2 rounded-md border border-destructive/35 bg-destructive/8 px-3 py-2 text-xs text-destructive",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 break-words",
				children: [p, t ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.20a4204dce", "Last successful results remain visible.") : ""]
			})]
		}) : null,
		f.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-1.5 rounded-md border border-border/70 bg-muted/20 px-3 py-2 text-xs text-muted-foreground",
			children: f.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 break-words",
					children: [
						e.displayName,
						": ",
						e.error
					]
				})]
			}, e.repoId))
		}) : null,
		a || s ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(20rem,0.6fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceTreemap, {
				rows: v,
				isScanning: s,
				selectedWorktreeId: o?.worktreeId ?? null,
				zoomedWorktree: b,
				onSelect: m,
				onZoomChange: h
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceBreakdownList, {
				worktree: o,
				isScanning: s
			})]
		}) : null
	] });
}
function WorkspaceSpaceManagerToolbar({ model: e }) {
	let { allVisibleSelected: t, deleteSelected: i, hasRows: a, onlyDeletable: o, query: s, selectedDeletableIds: c, selectedReclaimableBytes: l, selectSortKey: d, setOnlyDeletable: f, setQuery: p, setSelectedIds: m, sortKey: h, toggleVisibleSelection: g, visibleDeletableIds: _ } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [a ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sticky top-0 z-10 -mx-1 flex flex-wrap items-center justify-between gap-2 rounded-md border border-border/70 bg-background/95 px-3 py-2 shadow-xs backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 text-xs text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-medium text-foreground",
					children: [
						c.length,
						" ",
						translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.65402b7192", "selected")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-1.5",
					children: "·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					formatBytes(l),
					" ",
					translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.0cb1501ccf", "reclaimable")
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				onClick: () => m(/* @__PURE__ */ new Set()),
				disabled: c.length === 0,
				className: "!px-3",
				children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.e4a12c455b", "Clear")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "destructive",
				size: "sm",
				onClick: i,
				disabled: c.length === 0,
				className: "min-w-[9.5rem] gap-1.5 !px-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.5caccea440", "Delete selected")]
			})]
		})]
	}) : null, a ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-w-[16rem] flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: s,
					onChange: (e) => p(e.target.value),
					placeholder: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.6f8f6a6b04", "Filter workspaces"),
					className: "pl-9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: h,
				onValueChange: (e) => d(e),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "w-36",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "size",
						children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.33aef3e9cc", "Size")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "name",
						children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.243287ac60", "Name")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "repo",
						children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.81f14d9924", "Repository")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "activity",
						children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.d7ac56452e", "Activity")
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: o ? "secondary" : "outline",
				size: "sm",
				onClick: () => f((e) => !e),
				className: "w-32",
				"aria-label": translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.81aaf1de65", "Show only deletable workspaces"),
				children: o ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.b2f82ed5ae", "Deletable") : translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.ef890d31b9", "All")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: g,
				disabled: _.length === 0,
				className: "w-32 gap-1.5",
				"aria-label": t ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.697d60c456", "Clear visible selection") : translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.1d0f8300d1", "Select visible deletable workspaces"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), t ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.e4a12c455b", "Clear") : translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.f39d291997", "Select")]
			})
		]
	}) : null] });
}
function CheckButton({ checked: e, disabled: t, label: n, onClick: r }) {
	let a = e === !0, o = e === "mixed";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "checkbox",
		"aria-checked": e,
		"aria-label": n,
		disabled: t,
		onPointerDown: (e) => e.stopPropagation(),
		onKeyDown: (e) => e.stopPropagation(),
		onClick: (e) => {
			e.stopPropagation(), r();
		},
		className: cn("flex size-6 shrink-0 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", t && "cursor-default opacity-35"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("flex size-4 items-center justify-center rounded-sm border transition-colors", a || o ? "border-foreground bg-foreground text-background" : "border-muted-foreground/50 bg-background/40 text-transparent"),
			children: [a ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "size-3",
				strokeWidth: 3
			}) : null, o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
				className: "size-3",
				strokeWidth: 3
			}) : null]
		})
	});
}
function SortIndicator({ sortKey: e, activeKey: t, direction: n }) {
	return e === t ? n === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "size-3 opacity-0" });
}
function WorkspaceSpaceStatusBadge({ worktree: e, decisionDetails: t, deleteState: r }) {
	return r?.isDeleting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
		variant: "outline",
		className: "gap-1.5 text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }), translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.33653dbac2", "Deleting")]
	}) : r?.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		className: "border-destructive/30 text-destructive",
		children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.39801484e0", "Failed")
	}) : e.status === "ok" ? e.isMainWorktree ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.2b501ee391", "Keep: main")
	}) : t?.isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.7f7895514e", "Keep: active")
	}) : (t?.changedFileCount ?? 0) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.7ab8d7e2d7", "Keep: changed files")
	}) : t?.changedFileCount === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.ec7b076a75", "Keep: git not checked")
	}) : (t?.dirtyEditorBufferCount ?? 0) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.2055bc6a5a", "Keep: unsaved edits")
	}) : (t?.activeAgentCount ?? 0) > 0 || (t?.liveTerminalCount ?? 0) > 0 || (t?.browserTabCount ?? 0) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.cbc343a7a8", "Keep: in use")
	}) : t?.reviewLabel || t?.issueLabel || t?.linearIssueLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.720870a18e", "Keep: linked")
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		className: "border-emerald-500/35 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
		children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.7d7745bb8f", "Can delete")
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		className: "border-destructive/30 text-destructive",
		children: getWorkspaceSpaceStatusLabel(e.status)
	});
}
function DecisionLine({ icon: e, label: t, value: n, tone: r = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 items-start gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/30 text-muted-foreground [&>svg]:size-3", r === "warning" && "border-destructive/25 bg-destructive/8 text-destructive"),
			children: e
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] font-medium uppercase tracking-[0.05em] text-muted-foreground",
				children: t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 truncate text-xs",
				title: n,
				children: n
			})]
		})]
	});
}
function getAgentDecisionLabel(e) {
	return e.activeAgentCount > 0 && e.completedAgentCount > 0 ? `${pluralize(e.activeAgentCount, "active agent")}, ${pluralize(e.completedAgentCount, "completed agent")}` : e.activeAgentCount > 0 ? pluralize(e.activeAgentCount, "active agent") : e.completedAgentCount > 0 ? `${pluralize(e.completedAgentCount, "completed agent")} retained` : "No tracked agents running";
}
function getTerminalDecisionLabel(e) {
	return e.terminalTabCount === 0 ? "No terminal tabs" : `${e.liveTerminalCount} live of ${pluralize(e.terminalTabCount, "terminal tab")}`;
}
function getGitDecisionLabel(e, t) {
	return e.changedFileCount === null ? t?.error ? `Git status unavailable: ${t.error}` : "Git status has not loaded yet" : e.changedFileCount === 0 ? "No uncommitted files" : pluralize(e.changedFileCount, "changed file");
}
function getEditorDecisionLabel(e) {
	return e.openEditorFileCount === 0 ? "No editor files open" : e.dirtyEditorBufferCount === 0 ? `${pluralize(e.openEditorFileCount, "editor file")} open` : `${pluralize(e.dirtyEditorBufferCount, "dirty editor buffer")} of ${pluralize(e.openEditorFileCount, "open file")}`;
}
function getDeleteDecisionLabel(e, t) {
	return t.isActive ? "This is the active workspace" : e.status === "ok" ? e.isMainWorktree ? "Main worktree is protected" : e.canDelete ? "Can be deleted after review" : "Workspace is protected" : e.error ?? getWorkspaceSpaceStatusLabel(e.status);
}
function WorkspaceDecisionHoverCard({ worktree: e, details: t, gitRefreshState: i, onOpenWorkspace: a }) {
	let o = getDeleteDecisionLabel(e, t), s = [t.issueLabel, t.linearIssueLabel].filter(Boolean).join(" · ") || "No linked issue";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HoverCardContent, {
		align: "end",
		side: "bottom",
		sideOffset: 8,
		collisionPadding: 12,
		className: "max-h-[min(34rem,calc(100vh-1.5rem))] w-[min(24rem,calc(100vw-1.5rem))] overflow-y-auto p-0 scrollbar-sleek",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border/60 px-4 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-sm font-semibold",
							children: e.displayName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-0.5 truncate text-xs text-muted-foreground",
							children: [
								e.repoDisplayName,
								" · ",
								formatBytes(e.sizeBytes)
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceStatusBadge, {
						worktree: e,
						decisionDetails: t
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}),
						label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.d384a4ce9f", "Delete decision"),
						value: o,
						tone: e.canDelete && e.status === "ok" ? "default" : "warning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, {}),
						label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.a8d9e0de79", "Agents"),
						value: getAgentDecisionLabel(t)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {}),
						label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.e9528a89b3", "Terminals"),
						value: getTerminalDecisionLabel(t)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileExclamationPoint, {}),
						label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.0bc756efaf", "Git changes"),
						value: getGitDecisionLabel(t, i),
						tone: (t.changedFileCount ?? 0) > 0 || i?.error ? "warning" : "default"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileExclamationPoint, {}),
						label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.c432278ec7", "Editor buffers"),
						value: getEditorDecisionLabel(t),
						tone: t.dirtyEditorBufferCount > 0 ? "warning" : "default"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, {}),
						label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.b9b4a3a25d", "Branch"),
						value: t.branchStatus ?? getWorkspaceSpaceBranchLabel(e)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitPullRequest, {}),
						label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.fb2069acb7", "Review"),
						value: t.reviewLabel ?? "No linked PR"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecisionLine, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {}),
						label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.66870929fb", "Issue"),
						value: s
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 border-t border-border/60 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 truncate font-mono text-[11px] text-muted-foreground",
					children: t.browserTabCount > 0 ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.131662ac65", "{{value0}} open", { value0: pluralize(t.browserTabCount, "browser tab") }) : e.path
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					onClick: (e) => {
						e.preventDefault(), e.stopPropagation(), a();
					},
					disabled: !t.canOpenWorkspace,
					className: "shrink-0 gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }), translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.c28643d3da", "Go to workspace")]
				})]
			})
		]
	});
}
function WorkspaceSpaceWorktreeRow({ worktree: e, maxSize: t, selected: a, inspected: o, decisionDetails: s, gitRefreshState: c, deleteState: l, onToggleSelected: u, onInspect: d, onOpenWorkspace: f, onDelete: p, onForceDelete: h }) {
	let g = l?.isDeleting ?? !1, _ = l?.error ?? null, v = l?.canForceDelete ?? !1, y = isWorkspaceSpaceRowReadyToDelete(e, s) && !g, b = (e) => {
		e.preventDefault(), e.stopPropagation(), h();
	}, S = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "button",
		tabIndex: 0,
		"aria-busy": g,
		onClick: d,
		onKeyDown: (e) => {
			e.key !== "Enter" && e.key !== " " || (e.preventDefault(), d());
		},
		className: cn("grid w-full cursor-pointer grid-cols-[1.75rem_minmax(0,1.25fr)_minmax(9rem,0.55fr)_8rem_9.5rem] items-center gap-3 border-b border-border/45 px-3 py-2.5 text-left text-sm transition-colors last:border-b-0 hover:bg-accent/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", o && "bg-accent/55", g && "cursor-wait opacity-50 grayscale hover:bg-transparent"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckButton, {
				checked: y && a,
				disabled: !y,
				label: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.0d1c78d749", "Select {{value0}}", { value0: e.displayName }),
				onClick: u
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 truncate font-medium",
								children: e.displayName
							}),
							e.isRemote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-3.5 shrink-0 text-muted-foreground" }) : null,
							e.isSparse ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.9155381019", "Sparse")
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { className: "size-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: getWorkspaceSpaceBranchLabel(e)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 truncate font-mono text-[11px] text-muted-foreground",
						children: e.path
					}),
					_ ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex min-w-0 items-start gap-2 rounded-md border border-destructive/35 bg-destructive/8 px-2 py-1.5 text-[11px] text-destructive",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-3 shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 flex-1 break-words",
								title: _,
								children: _
							}),
							v ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "destructive",
								size: "xs",
								onClick: b,
								className: "h-6 shrink-0 gap-1 px-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" }), translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.a998501630", "Force")]
							}) : null
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate font-medium",
					children: e.repoDisplayName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 truncate font-mono text-[11px] text-muted-foreground",
					children: e.repoPath
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-right text-sm font-medium tabular-nums",
					children: e.status === "ok" ? formatBytes(e.sizeBytes) : "—"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceSizeBar, {
					value: e.sizeBytes,
					max: t
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HoverCard, {
					openDelay: 250,
					closeDelay: 120,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoverCardTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex",
							onClick: (e) => e.stopPropagation(),
							onKeyDown: (e) => e.stopPropagation(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceStatusBadge, {
								worktree: e,
								decisionDetails: s,
								deleteState: l
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceDecisionHoverCard, {
						worktree: e,
						details: s,
						gitRefreshState: c,
						onOpenWorkspace: f
					})]
				})
			})
		]
	});
	return y ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextMenuTrigger, {
		asChild: !0,
		children: S
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextMenuContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenuItem, {
		variant: "destructive",
		onSelect: p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.792a214457", "Delete workspace")]
	}) })] }) : S;
}
function WorkspaceSpaceManagerTable({ model: e }) {
	let { analysis: t, decisionDetailsByWorktreeId: r, deleteWorktrees: i, forceDeleteWorktree: a, gitRefreshStateByWorktreeId: o, hasRows: s, inspectedWorktree: l, isInitialScan: u, maxSize: d, nextSelectedIds: f, getDeleteStateForWorktree: p, rows: m, scanError: h, setInspectedWorktreeId: g, sortDirection: v, sortKey: y, toggleSelection: b, toggleSort: x, toggleVisibleSelection: S, visibleDeletableIds: C, visibleSelectionState: w, allVisibleSelected: T } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: s || u ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-lg border border-border/70 bg-background/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-[46rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[1.75rem_minmax(0,1.25fr)_minmax(9rem,0.55fr)_8rem_9.5rem] gap-3 border-b border-border/60 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckButton, {
							checked: w,
							disabled: C.length === 0,
							label: T ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.697d60c456", "Clear visible selection") : translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.1d0f8300d1", "Select visible deletable workspaces"),
							onClick: S
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => x("name"),
						className: "flex items-center gap-1 text-left",
						children: [translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.e4aebea158", "Workspace"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortIndicator, {
							sortKey: "name",
							activeKey: y,
							direction: v
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => x("repo"),
						className: "flex items-center gap-1 text-left",
						children: [translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.81f14d9924", "Repository"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortIndicator, {
							sortKey: "repo",
							activeKey: y,
							direction: v
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => x("size"),
						className: "flex items-center justify-end gap-1 text-right",
						children: [translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.33aef3e9cc", "Size"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortIndicator, {
							sortKey: "size",
							activeKey: y,
							direction: v
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-right",
						children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.be37293b10", "State")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[28rem] overflow-y-auto scrollbar-sleek",
				children: u ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-2 px-4 py-10 text-center text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.a02d84d2d2", "Scanning workspaces. You can leave this page.")]
				}) : m.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 py-10 text-center text-sm text-muted-foreground",
					children: translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.e031e93219", "No matching workspaces.")
				}) : m.map((e) => {
					let t = getWorkspaceSpaceWorktreeIdentity(e), n = r.get(t);
					return n ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceWorktreeRow, {
						worktree: e,
						maxSize: d,
						selected: f.has(t),
						inspected: l !== null && getWorkspaceSpaceWorktreeIdentity(l) === t,
						decisionDetails: n,
						gitRefreshState: o[t],
						deleteState: p(e),
						onToggleSelected: () => b(e),
						onInspect: () => g(t),
						onOpenWorkspace: () => activateAndRevealWorktree(e.worktreeId),
						onDelete: () => i([e]),
						onForceDelete: () => a(e)
					}, t) : null;
				})
			})]
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg border border-border/70 bg-background/30 px-4 py-10 text-center text-sm text-muted-foreground",
		children: h ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.8194a4fb29", "Scan failed before any workspace sizes were collected.") : t ? translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.61e25239da", "No workspace rows were available from the scan.") : translate("auto.components.status.bar.WorkspaceSpaceManagerPanel.e91dd2a9ae", "Run a scan to inspect workspace sizes.")
	}) });
}
function WorkspaceSpaceManagerView({ model: e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceManagerOverview, { model: e }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceManagerToolbar, { model: e }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceManagerTable, { model: e })
		]
	});
}
function WorkspaceSpaceManagerPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceManagerView, { model: useWorkspaceSpaceManagerPanel() });
}
function WorkspaceSpacePage() {
	let e = useAppStore((e) => e.closeSpacePage);
	return (0, import_react.useEffect)(() => {
		let t = (t) => {
			t.key === "Escape" && (hasVisibleOverlay() || t.target?.matches("input, textarea, select, [contenteditable=\"true\"], [contenteditable=\"\"]") || (t.preventDefault(), e()));
		};
		return window.addEventListener("keydown", t, { capture: !0 }), () => window.removeEventListener("keydown", t, { capture: !0 });
	}, [e]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-3 border-b border-border px-5 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				onClick: e,
				className: "shrink-0 gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3.5" }), translate("auto.components.workspace.space.WorkspaceSpacePage.ecf72fdc3b", "Back")]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardDrive, { className: "size-4 text-muted-foreground" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "truncate text-base font-semibold text-foreground",
							children: translate("auto.components.workspace.space.WorkspaceSpacePage.45f6302dbc", "Space")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							children: translate("auto.components.workspace.space.WorkspaceSpacePage.e8d6ba11ab", "Beta")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-muted-foreground",
						children: translate("auto.components.workspace.space.WorkspaceSpacePage.8d0048e1cb", "Workspace disk usage and reclaimable worktree storage.")
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-y-auto p-5 scrollbar-sleek",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceManagerPanel, {})
			})
		})]
	});
}
export { WorkspaceSpacePage as default };
