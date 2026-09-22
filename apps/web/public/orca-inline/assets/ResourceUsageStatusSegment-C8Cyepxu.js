import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, t as useMountedRef, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { n as activateAndRevealWorkspace, r as activateAndRevealWorktree } from "./worktree-activation-u-wSAPlP.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as Globe } from "./globe-BQRxNG57.js";
import { t as HardDrive } from "./hard-drive-V2qUdtJR.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { t as RotateCw } from "./rotate-cw-CYY-qFyR.js";
import { t as Terminal } from "./terminal-DVHlU3bc.js";
import { Ih as parsePaneKey, Kf as findAmbiguousWorktreeIds, Sb as ORPHAN_WORKTREE_ID, ZS as getRepoExecutionHostId, cv as getWorktreePathBasenameFromId, iC as parseExecutionHostId, iw as Trash2, ov as getRepoIdFromWorktreeId, pv as parsePtySessionId, qf as findDuplicateIds, t as useAppStore, tg as folderWorkspaceToWorktree, vv as parseWorkspaceKey } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { a as PopoverTrigger, i as PopoverContent, t as Popover } from "./popover-DHL-338i.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { t as Badge } from "./badge-D7sahA2a.js";
import "./terminal-tab-actions-CMBYTSo0.js";
import "./window-park-visibility-BBcurIcE.js";
import { _ as useWorktreeMap, t as getAllWorktreesFromState } from "./selectors-Cdg4hUQI.js";
import { s as activateTabAndFocusPane } from "./web-runtime-session-CeAC5QPx.js";
import "./agent-paste-draft-Ddp-k6QZ.js";
import "./agent-process-recognition-BUFJTuDF.js";
import "./native-chat-session-option-cache-DOY0fjiI.js";
import "./gitlab-links-Di3ozbga.js";
import "./agent-status-worktree-attribution-0Thqf3S9.js";
import "./localized-catalog-Dsz6wk5E.js";
import "./connection-context-2sxF2wah.js";
import "./web-session-tabs-sync-BfOF1RHT.js";
import "./pane-agent-owner-Ci26i0GA.js";
import { n as runWorktreeDelete } from "./delete-worktree-flow-DRix0Gy6.js";
import "./preserved-branch-batch-toast-C08Rnofp.js";
import { i as subscribeDaemonSessionInventoryInvalidated, n as useDaemonActions, t as DaemonActionDialog } from "./useDaemonActions-CSbNUCVm.js";
import "./relative-time-format-Clpgwkog.js";
import { i as getWorkspaceSpaceProgressLabel, o as getWorkspaceSpaceScanTimeLabel, t as formatBytes } from "./workspace-space-format-1Oh-HqR3.js";
import { t as STATUS_BAR_CONTEXT_MENU_EXEMPT_PROPS } from "./status-bar-context-menu-policy-DWoCsR7d.js";
import { n as usageTextColorClass } from "./usage-roster-formatting-BJ9uFLlc.js";
var MemoryStick = createLucideIcon("memory-stick", [
	["path", {
		d: "M12 12v-2",
		key: "fwoke6"
	}],
	["path", {
		d: "M12 18v-2",
		key: "qj6yno"
	}],
	["path", {
		d: "M16 12v-2",
		key: "heuere"
	}],
	["path", {
		d: "M16 18v-2",
		key: "s1ct0w"
	}],
	["path", {
		d: "M2 11h1.5",
		key: "15p63e"
	}],
	["path", {
		d: "M20 18v-2",
		key: "12ehxp"
	}],
	["path", {
		d: "M20.5 11H22",
		key: "khsy7a"
	}],
	["path", {
		d: "M4 18v-2",
		key: "1c3oqr"
	}],
	["path", {
		d: "M8 12v-2",
		key: "1mwtfd"
	}],
	["path", {
		d: "M8 18v-2",
		key: "qcmpov"
	}],
	["rect", {
		x: "2",
		y: "6",
		width: "20",
		height: "10",
		rx: "2",
		key: "1qcswk"
	}]
]), import_react = /* @__PURE__ */ __toESM(require_react()), EMPTY_TABS_BY_WORKTREE = {}, EMPTY_PTY_IDS_BY_TAB_ID = {}, EMPTY_TERMINAL_LAYOUTS_BY_TAB_ID = {}, EMPTY_DEFERRED_SSH_SESSION_IDS_BY_TAB_ID = {}, EMPTY_RUNTIME_PANE_TITLES_BY_TAB_ID = {}, EMPTY_BROWSER_TABS_BY_WORKTREE = {}, EMPTY_REPOS = [], EMPTY_FOLDER_WORKSPACES = [], EMPTY_PROJECT_GROUPS = [], EMPTY_WORKTREES = [];
function getResourceUsageTabsByWorktree(e, t) {
	return t ? e.tabsByWorktree : EMPTY_TABS_BY_WORKTREE;
}
function getResourceUsagePtyIdsByTabId(e, t) {
	return t ? e.ptyIdsByTabId : EMPTY_PTY_IDS_BY_TAB_ID;
}
function getResourceUsageTerminalLayoutsByTabId(e, t) {
	return t ? e.terminalLayoutsByTabId : EMPTY_TERMINAL_LAYOUTS_BY_TAB_ID;
}
function getResourceUsageDeferredSshSessionIdsByTabId(e, t) {
	return t ? e.deferredSshSessionIdsByTabId : EMPTY_DEFERRED_SSH_SESSION_IDS_BY_TAB_ID;
}
function getResourceUsageRuntimePaneTitlesByTabId(e, t) {
	return t ? e.runtimePaneTitlesByTabId : EMPTY_RUNTIME_PANE_TITLES_BY_TAB_ID;
}
function getResourceUsageBrowserTabsByWorktree(e, t) {
	return t ? e.browserTabsByWorktree : EMPTY_BROWSER_TABS_BY_WORKTREE;
}
function getResourceUsageRepos(e, t) {
	return t ? e.repos : EMPTY_REPOS;
}
function getResourceUsageAllWorktrees(e, t) {
	return t ? getAllWorktreesFromState(e) : EMPTY_WORKTREES;
}
function getResourceUsageFolderWorkspaces(e, t) {
	return t ? e.folderWorkspaces : EMPTY_FOLDER_WORKSPACES;
}
function getResourceUsageProjectGroups(e, t) {
	return t ? e.projectGroups : EMPTY_PROJECT_GROUPS;
}
function resolveResourceUsageSpaceScanReady({ snapshot: e, open: t, activeView: n, scannedAt: r, scanning: i }) {
	return e.previousScanning && !i && r !== null && r !== e.lastSeenScannedAt ? {
		ready: !t && n !== "space",
		previousScanning: i,
		lastSeenScannedAt: r
	} : e.ready && (t || n === "space") ? {
		ready: !1,
		previousScanning: i,
		lastSeenScannedAt: r
	} : e.previousScanning === i ? e : {
		...e,
		previousScanning: i
	};
}
const EMPTY_DAEMON_SESSION_INVENTORY = {
	sessions: [],
	count: 0
};
function inventoryFromSessions(e) {
	return {
		sessions: e.slice(),
		count: e.length
	};
}
function removeSessionsFromInventory(e, t) {
	if (t.size === 0 || e.sessions.length === 0) return e;
	let n = e.sessions.filter((e) => !t.has(e.id));
	return n.length === e.sessions.length ? e : {
		sessions: n,
		count: n.length
	};
}
function removeSessionFromInventory(e, t) {
	return removeSessionsFromInventory(e, new Set([t]));
}
function useResourceSessionInventory(e) {
	let t = useMountedRef(), n = (0, import_react.useRef)(0), r = (0, import_react.useRef)(0), i = (0, import_react.useRef)(/* @__PURE__ */ new Map()), o = (0, import_react.useRef)(/* @__PURE__ */ new Set()), [s, c] = (0, import_react.useState)(() => ({
		ready: e,
		sessionInventory: EMPTY_DAEMON_SESSION_INVENTORY,
		sessionsError: !1
	})), l = s.ready === e ? s : {
		ready: e,
		sessionInventory: EMPTY_DAEMON_SESSION_INVENTORY,
		sessionsError: !1
	};
	l !== s && c(l);
	let u = (0, import_react.useCallback)(async () => {
		if (!e) return;
		let a = ++n.current, s = r.current;
		try {
			let e = await window.api.pty.listSessions();
			if (!t.current || a !== n.current) return;
			let r = i.current, l = e.filter(({ id: e }) => (r.get(e) ?? 0) <= s);
			for (let [e, t] of r) t <= s && r.delete(e);
			o.current = new Set(l.map(({ id: e }) => e)), c({
				ready: !0,
				sessionInventory: inventoryFromSessions(l),
				sessionsError: !1
			});
		} catch {
			t.current && a === n.current && c((e) => ({
				...e,
				sessionsError: !0
			}));
		}
	}, [t, e]), d = (0, import_react.useCallback)(() => {
		c((e) => ({
			...e,
			sessionsError: !1
		}));
	}, []), f = (0, import_react.useCallback)((e) => {
		let t = ++r.current;
		i.current.set(e, t), o.current.delete(e), c((t) => ({
			...t,
			sessionInventory: removeSessionFromInventory(t.sessionInventory, e)
		}));
	}, []), p = (0, import_react.useCallback)((e) => {
		let t = ++r.current;
		for (let n of e) i.current.set(n, t), o.current.delete(n);
		c((t) => ({
			...t,
			sessionInventory: removeSessionsFromInventory(t.sessionInventory, e)
		}));
	}, []);
	return (0, import_react.useEffect)(() => {
		if (n.current += 1, !e) {
			i.current.clear(), o.current.clear();
			return;
		}
		u();
	}, [e, u]), (0, import_react.useEffect)(() => {
		if (e) return subscribeDaemonSessionInventoryInvalidated(() => {
			u();
		});
	}, [e, u]), (0, import_react.useEffect)(() => {
		if (!e) return;
		let t = !1, n = null, r = null, i = /* @__PURE__ */ new Set(), a = () => {
			t || n !== null || r !== null || (n = window.setTimeout(() => {
				if (n = null, i.size === 0) return;
				i.clear();
				let e = u();
				r = e, e.finally(() => {
					if (!(t || r !== e)) {
						r = null;
						for (let e of i) o.current.has(e) && i.delete(e);
						a();
					}
				});
			}, 0));
		}, s = window.api.pty.onSpawned(({ id: e }) => {
			o.current.has(e) || (i.add(e), a());
		}), c = window.api.pty.onExit(({ id: e }) => {
			i.delete(e), i.size === 0 && n !== null && (window.clearTimeout(n), n = null), f(e);
		});
		return () => {
			t = !0, i.clear(), n !== null && window.clearTimeout(n), s(), c();
		};
	}, [
		e,
		u,
		f
	]), {
		sessionInventory: l.sessionInventory,
		sessionsError: l.sessionsError,
		refreshSessions: u,
		clearSessionsError: d,
		removeSession: f,
		removeSessions: p
	};
}
function mayDestroyWithoutOwnerEvidence(e) {
	return e.agentOwnership === "absent";
}
function addBinding(e, t, n) {
	!n || e.has(n) || e.set(n, t);
}
function buildResourceSessionBindingIndex(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
	for (let [t, i] of Object.entries(e.tabsByWorktree)) {
		let e = /* @__PURE__ */ new Map();
		i.forEach((r, i) => {
			let a = r.id;
			n.set(a, t), e.has(a) || e.set(a, {
				tab: r,
				index: i
			});
		}), r.set(t, e);
	}
	for (let [n, r] of Object.entries(e.ptyIdsByTabId)) for (let e of r) addBinding(t, n, e);
	for (let n of Object.values(e.tabsByWorktree)) for (let e of n) addBinding(t, e.id, e.ptyId);
	for (let [r, i] of Object.entries(e.terminalLayoutsByTabId ?? {})) if (n.has(r)) for (let e of Object.values(i.ptyIdsByLeafId ?? {})) addBinding(t, r, e);
	for (let [r, i] of Object.entries(e.deferredSshSessionIdsByTabId ?? {})) n.has(r) && addBinding(t, r, i);
	return {
		ptyIdToTabId: t,
		tabIdToWorktreeId: n,
		tabsByIdByWorktree: r,
		boundPtyIds: e.workspaceSessionReady ? new Set(t.keys()) : /* @__PURE__ */ new Set()
	};
}
function selectUnboundDaemonSessions(e, t) {
	if (!t.workspaceSessionReady) return [];
	let { boundPtyIds: n } = buildResourceSessionBindingIndex(t);
	return e.filter((e) => !n.has(e.id) && mayDestroyWithoutOwnerEvidence(e));
}
function countUnboundDaemonSessions(e, t) {
	return selectUnboundDaemonSessions(e, t).length;
}
function resolveResourceFolderWorkspace(e, t) {
	if (!(parseWorkspaceKey(t)?.type !== "folder" || e.ambiguousWorktreeIds?.has(t))) return e.worktreeById?.get(t);
}
function resolveResourceWorkspaceHost(e, t, n) {
	let r = resolveResourceFolderWorkspace(e, t), i = r ? parseExecutionHostId(r.hostId ?? "local") : null;
	return {
		isRemote: i ? i.kind === "ssh" : e.repoConnectionIdById.get(n) != null,
		isRuntimeScoped: i ? i.kind === "runtime" : e.repoRuntimeScopedById.get(n) === !0
	};
}
function deriveWorktreeNameFromWorktreeId(e) {
	return getWorktreePathBasenameFromId(e) ?? e;
}
function shortCwd(e) {
	if (!e) return "";
	let t = e.includes("\\") ? "\\" : "/", n = e.split(/[\\/]+/).filter(Boolean);
	return n.length > 2 ? n.slice(-2).join(t) : e;
}
function parsePaneKey$1(e) {
	if (!e) return null;
	let t = parsePaneKey(e);
	return t ? {
		tabId: t.tabId,
		leafId: t.leafId
	} : null;
}
function resolveSnapshotSessionLabel(e, t, n) {
	let r = parsePaneKey$1(e.paneKey);
	if (r) {
		let e = n.tabsByIdByWorktree.get(t)?.get(r.tabId), i = e?.tab, a = e?.index ?? -1;
		if (i) return i.customTitle?.trim() || i.defaultTitle?.trim() || i.title?.trim() || `Terminal ${a + 1}`;
	}
	if (e.pid > 0) return `pid ${e.pid}`;
	let i = e.sessionId?.slice(0, 8);
	return i ? `session ${i}` : "(unknown session)";
}
function resolveDaemonSessionLabel(e, t, n, r, i) {
	if (n && t) {
		let e = i.tabsByIdByWorktree.get(t)?.get(n)?.tab;
		if (e) {
			let t = e.customTitle?.trim();
			if (t) return t;
			let i = r.runtimePaneTitlesByTabId[n];
			if (i) {
				let e = Object.values(i).find((e) => e?.trim());
				if (e) return e;
			}
			let a = e.defaultTitle?.trim() || e.title?.trim();
			if (a) return a;
		}
	}
	return e.cwd ? shortCwd(e.cwd) : t ? shortCwd(t) : e.title ? e.title : "unknown";
}
function mergeSnapshotAndSessions(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = buildResourceSessionBindingIndex(n), s = o.boundPtyIds, c = new Map(t.map((e) => [e.id, e.agentOwnership]));
	function l(e, t) {
		let n = r.get(e);
		if (n) return n;
		let a = {
			repoId: e,
			repoName: t,
			cpu: null,
			memory: null,
			hasRemoteChildren: !1,
			worktrees: []
		};
		return r.set(e, a), i.set(e, /* @__PURE__ */ new Map()), a;
	}
	function u(e, t) {
		return i.get(e.repoId)?.get(t);
	}
	function d(e, t) {
		e.worktrees.push(t), e.hasRemoteChildren ||= t.isRemote;
		let n = i.get(e.repoId);
		n.has(t.worktreeId) || n.set(t.worktreeId, t);
	}
	if (e) for (let t of e.worktrees) {
		let e = resolveResourceFolderWorkspace(n, t.worktreeId), r = e?.repoId ?? t.repoId, i = e && n.repoDisplayNameById.get(r) || t.repoName, { isRemote: u, isRuntimeScoped: f } = resolveResourceWorkspaceHost(n, t.worktreeId, r);
		if (f) continue;
		let p = l(r, i), m = t.sessions.map((e) => {
			a.add(e.sessionId);
			let r = o.ptyIdToTabId.get(e.sessionId) ?? null;
			return {
				sessionId: e.sessionId,
				paneKey: e.paneKey,
				pid: e.pid,
				label: resolveSnapshotSessionLabel(e, t.worktreeId, o),
				bound: n.workspaceSessionReady && s.has(e.sessionId),
				agentOwnership: c.get(e.sessionId) ?? "unknown",
				tabId: r,
				cpu: e.cpu,
				memory: e.memory,
				hasLocalSamples: !0
			};
		});
		d(p, {
			worktreeId: t.worktreeId,
			worktreeName: e?.displayName?.trim() || t.worktreeName,
			repoId: r,
			repoName: i,
			cpu: t.cpu,
			memory: t.memory,
			history: t.history,
			hasLocalSamples: !0,
			isRemote: u,
			sessions: m,
			browsers: []
		});
	}
	for (let e of t) {
		if (a.has(e.id)) continue;
		a.add(e.id);
		let t = o.ptyIdToTabId.get(e.id) ?? null, r = t ? o.tabIdToWorktreeId.get(t) ?? null : null;
		r ||= e.worktreeId || parsePtySessionId(e.id).worktreeId;
		let i = !r, c = r ?? `__unattributed__::${e.id}`, f = resolveResourceFolderWorkspace(n, c), p = i ? "__unattributed__" : f?.repoId ?? getRepoIdFromWorktreeId(c), m = i ? "Unattributed" : n.repoDisplayNameById.get(p) || p, h = i ? e.title || e.id.slice(0, 12) : f?.displayName?.trim() || deriveWorktreeNameFromWorktreeId(c), { isRemote: g, isRuntimeScoped: _ } = resolveResourceWorkspaceHost(n, c, p);
		if (_) continue;
		let v = l(p, m), y = u(v, c);
		y || (y = {
			worktreeId: c,
			worktreeName: h,
			repoId: p,
			repoName: m,
			cpu: null,
			memory: null,
			history: [],
			hasLocalSamples: !1,
			isRemote: g,
			sessions: [],
			browsers: []
		}, d(v, y)), y.sessions.push({
			sessionId: e.id,
			paneKey: null,
			pid: 0,
			label: resolveDaemonSessionLabel(e, r, t, n, o),
			bound: n.workspaceSessionReady && s.has(e.id),
			agentOwnership: e.agentOwnership,
			tabId: t,
			cpu: null,
			memory: null,
			hasLocalSamples: !1
		});
	}
	for (let [e, t] of Object.entries(n.browserTabsByWorktree ?? {})) {
		let r = n.worktreeById?.get(e);
		if (!r || t.length === 0) continue;
		let i = n.repoDisplayNameById.get(r.repoId) || r.repoId, a = l(r.repoId, i), o = u(a, e);
		o || (o = {
			worktreeId: e,
			worktreeName: r.displayName,
			repoId: r.repoId,
			repoName: i,
			cpu: null,
			memory: null,
			history: [],
			hasLocalSamples: !1,
			isRemote: resolveResourceWorkspaceHost(n, e, r.repoId).isRemote,
			sessions: [],
			browsers: []
		}, d(a, o)), o.browsers = t;
	}
	for (let e of r.values()) {
		let t = 0, n = 0, r = !1;
		for (let i of e.worktrees) i.cpu !== null && i.memory !== null && (t += i.cpu, n += i.memory, r = !0);
		e.cpu = r ? t : null, e.memory = r ? n : null;
	}
	return [...r.values()];
}
function isResourceSessionActivationKey(e) {
	return e === "Enter" || e === " ";
}
function navigateResourceSessionToTab(e, t, n) {
	n.setOpen(!1);
	for (let [t, r] of Object.entries(n.tabsByWorktree)) if (r.some((t) => t.id === e)) {
		n.activateAndRevealWorktree(t);
		break;
	}
	n.setActiveView("terminal");
	let r = t ? parsePaneKey(t) : null;
	n.activateTabAndFocusPane(e, r?.tabId === e ? r.leafId : null, {
		flashFocusedPane: !0,
		scrollToBottomIfOutputSinceLastView: !0
	});
}
function requiresKillConfirmation(e) {
	return e.bound || !mayDestroyWithoutOwnerEvidence(e);
}
function resolveResourceManagerWorktreeTarget(e, t) {
	let n = null;
	for (let r of t) if (r.id === e) {
		if (n) return null;
		n = r;
	}
	return n;
}
function useResourceUsageActions({ setCollapsedRepos: e, setCollapsedWorktrees: t, tabsByWorktree: n, setOpen: r, setActiveView: i, openModal: a, openSpacePage: o, refreshSessions: l, removeSession: u, removeSessions: d, sessions: f, resourceSessionBindings: p, workspaceSessionReady: m, killConfirm: h, setKillConfirm: g, setKilling: _, mountedRef: v, cancelPopoverBodyFocusFrame: y, popoverBodyRef: b, popoverBodyFocusFrameRef: x }) {
	return {
		toggleRepo: (0, import_react.useCallback)((t) => {
			e((e) => {
				let n = new Set(e);
				return n.has(t) ? n.delete(t) : n.add(t), n;
			});
		}, [e]),
		toggleWorktree: (0, import_react.useCallback)((e) => {
			t((t) => {
				let n = new Set(t);
				return n.has(e) ? n.delete(e) : n.add(e), n;
			});
		}, [t]),
		navigateToWorktree: (0, import_react.useCallback)((e) => {
			if (e === "__orphan__" || e.startsWith("__unattributed__::")) return;
			if (parseWorkspaceKey(e)?.type === "folder") {
				activateAndRevealWorkspace(e);
				return;
			}
			let t = resolveResourceManagerWorktreeTarget(e, getAllWorktreesFromState(useAppStore.getState()));
			t && activateAndRevealWorktree(e, { executionHostId: t.hostId });
		}, []),
		navigateToTab: (0, import_react.useCallback)((e, t) => {
			navigateResourceSessionToTab(e, t, {
				tabsByWorktree: n,
				setOpen: r,
				setActiveView: i,
				activateAndRevealWorktree,
				activateTabAndFocusPane
			});
		}, [
			n,
			r,
			i
		]),
		deleteWorktree: (0, import_react.useCallback)((e) => {
			let t = resolveResourceManagerWorktreeTarget(e, getAllWorktreesFromState(useAppStore.getState()));
			t && (r(!1), runWorktreeDelete(e, { expectedHostId: t.hostId }));
		}, [r]),
		handleOpenWorkspaceCleanup: (0, import_react.useCallback)(() => {
			r(!1), queueMicrotask(() => a("workspace-cleanup"));
		}, [a, r]),
		handleKillSession: (0, import_react.useCallback)((e) => {
			if (!requiresKillConfirmation(e)) {
				u(e.sessionId), (async () => {
					try {
						await window.api.pty.kill(e.sessionId);
					} catch {}
					await l();
				})();
				return;
			}
			g(e);
		}, [
			l,
			u,
			g
		]),
		handleKillOrphans: (0, import_react.useCallback)(async () => {
			if (!m) return;
			let e = selectUnboundDaemonSessions(f, p);
			e.length !== 0 && (d(new Set(e.map((e) => e.id))), await Promise.allSettled(e.map((e) => window.api.pty.kill(e.id))), l());
		}, [
			f,
			p,
			m,
			l,
			d
		]),
		runKillConfirmed: (0, import_react.useCallback)(async () => {
			if (!h) return;
			let e = h;
			_(!0), u(e.sessionId);
			try {
				await window.api.pty.kill(e.sessionId);
			} catch {} finally {
				v.current && (_(!1), g(null), y(), b.current && (x.current = requestAnimationFrame(() => {
					x.current = null, b.current?.focus();
				})), l());
			}
		}, [
			y,
			h,
			v,
			x,
			b,
			l,
			u,
			g,
			_
		]),
		openSpaceResults: (0, import_react.useCallback)(() => {
			r(!1), o();
		}, [o, r])
	};
}
function formatTerminalSessionCount(e) {
	return e === 1 ? translate("auto.components.status.bar.resource.manager.terminal.copy.terminalSessionCount_one", "{{count}} terminal session", { count: e }) : translate("auto.components.status.bar.resource.manager.terminal.copy.terminalSessionCount_other", "{{count}} terminal sessions", { count: e });
}
function spaceScanReadyLabel() {
	return translate("auto.components.status.bar.resource.manager.terminal.copy.spaceScanReady", "Space scan ready");
}
function getResourceManagerTooltipLines(e) {
	let t = e.memoryLabel.trim(), r = [{
		id: "summary",
		text: translate("auto.components.status.bar.resource.manager.terminal.copy.tooltipSummary", "Resource Manager - {{memory}} - {{sessions}}", {
			memory: t === "" || t === "-" || t === "—" ? translate("auto.components.status.bar.resource.manager.terminal.copy.memoryUnavailable", "memory unavailable") : t,
			sessions: formatTerminalSessionCount(e.sessionCount)
		}),
		emphasized: !1
	}];
	return e.spaceScanReady && r.push({
		id: "space-scan",
		text: spaceScanReadyLabel(),
		emphasized: !0
	}), r.push({
		id: "sessions-hint",
		text: e.sessionCount > 0 ? translate("auto.components.status.bar.resource.manager.terminal.copy.sessionsGroupedByWorkspace", "Terminal sessions are grouped by workspace.") : translate("auto.components.status.bar.resource.manager.terminal.copy.noTerminalSessions", "No terminal sessions yet."),
		emphasized: !1
	}), r;
}
function getResourceManagerAriaLabel(e) {
	let t = formatTerminalSessionCount(e.sessionCount);
	return e.spaceScanReady ? translate("auto.components.status.bar.resource.manager.terminal.copy.ariaLabelWithSpaceScan", "Resource Manager, {{sessions}}, {{spaceScan}}", {
		sessions: t,
		spaceScan: spaceScanReadyLabel()
	}) : translate("auto.components.status.bar.resource.manager.terminal.copy.ariaLabel", "Resource Manager, {{sessions}}", { sessions: t });
}
function getResourceMemoryMetricCopy(e) {
	return e === "working-set" ? {
		columnLabel: "WS",
		summaryLabel: "Σ WS",
		description: translate("auto.components.status.bar.resource.memory.metric.workingSetDescription", "Summed working set (WS): pages resident in RAM right now. Shared pages can appear in more than one process, and memory Windows has paged out is not counted here.")
	} : {
		columnLabel: "RSS",
		summaryLabel: "Σ RSS",
		description: translate("auto.components.status.bar.resource.memory.metric.rssDescription", "Summed resident set size (RSS). Shared or aliased pages can appear in more than one process.")
	};
}
function getResourceCommitMetricCopy() {
	return {
		summaryLabel: "Σ Private",
		description: translate("auto.components.status.bar.resource.memory.metric.privateBytesDescription", "Summed private bytes: memory these processes have committed, counted whether it is resident or paged out. This is what the host charges against its commit limit, so it keeps rising while the working set above shrinks under paging.")
	};
}
function getCommitPressureToneClass(e) {
	let { privateMemory: t, hostTotalMemory: n } = e;
	if (typeof t != "number" || !Number.isFinite(t) || !Number.isFinite(n) || n <= 0) return null;
	let r = usageTextColorClass(t / n * 100);
	return r === "text-foreground" ? null : r;
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
const ROW_TRAILING_GUTTER_CLS = "w-5 shrink-0 flex items-center justify-end";
function formatMemory(e) {
	return e < 1024 * 1024 ? `${Math.round(e / 1024)} KB` : e < 1024 * 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)} MB` : `${(e / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
function formatCpu(e) {
	return `${e.toFixed(1)}%`;
}
function formatMetricCpu(e) {
	return e === null ? "—" : formatCpu(e);
}
function formatMetricMemory(e) {
	return e === null ? "—" : formatMemory(e);
}
function SparklineImpl({ samples: e, width: t = 48, height: n = 14 }) {
	let r = (0, import_react.useMemo)(() => {
		let r = Array.isArray(e) ? e : [];
		if (r.length < 2) {
			let e = (n / 2).toFixed(1);
			return `0,${e} ${t},${e}`;
		}
		let i = r[0], a = r[0];
		for (let e of r) e < i && (i = e), e > a && (a = e);
		let o = a - i || 1, s = t / (r.length - 1), c = [];
		for (let e = 0; e < r.length; e++) {
			let t = (e * s).toFixed(1), a = (n - (r[e] - i) / o * n).toFixed(1);
			c.push(`${t},${a}`);
		}
		return c.join(" ");
	}, [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: t,
		height: n,
		viewBox: `0 0 ${t} ${n}`,
		"aria-hidden": !0,
		preserveAspectRatio: "none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
			points: r,
			fill: "none",
			strokeWidth: 1,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			className: "stroke-muted-foreground/70"
		})
	});
}
const Sparkline = (0, import_react.memo)(SparklineImpl, (e, t) => {
	if (e.width !== t.width || e.height !== t.height) return !1;
	let n = Array.isArray(e.samples) ? e.samples : [], r = Array.isArray(t.samples) ? t.samples : [];
	if (n === r) return !0;
	if (n.length !== r.length) return !1;
	for (let e = 0; e < n.length; e++) if (n[e] !== r[e]) return !1;
	return !0;
});
function MetricPair({ cpu: e, memory: t, size: n = "base" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center shrink-0 tabular-nums", n === "small" ? "text-[11px]" : "text-xs", e === null && t === null ? "text-muted-foreground/50" : "text-muted-foreground"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-12 text-right",
			children: formatMetricCpu(e)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-16 text-right",
			children: formatMetricMemory(t)
		})]
	});
}
function AppSubRow({ label: e, values: t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-3 py-1.5 pl-6 flex items-center justify-between gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] text-muted-foreground truncate",
			children: e
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricPair, {
				cpu: t.cpu,
				memory: t.memory,
				size: "small"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: ROW_TRAILING_GUTTER_CLS,
				"aria-hidden": !0
			})]
		})]
	});
}
function AppSection({ app: e, isCollapsed: t, onToggle: r }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-border/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: r,
				className: "pl-2 py-2 pr-0.5 transition-colors hover:bg-muted/50",
				"aria-label": t ? translate("auto.components.status.bar.ResourceUsageStatusSegment.e419d27083", "Expand Orca") : translate("auto.components.status.bar.ResourceUsageStatusSegment.53dd5560ae", "Collapse Orca"),
				"aria-expanded": !t,
				children: t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 text-muted-foreground" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0 py-2 pr-3 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-semibold uppercase tracking-wide truncate text-muted-foreground",
					children: translate("auto.components.status.bar.ResourceUsageStatusSegment.288a4dd177", "Orca")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, { samples: e.history }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricPair, {
							cpu: e.cpu,
							memory: e.memory
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: ROW_TRAILING_GUTTER_CLS,
							"aria-hidden": !0
						})
					]
				})]
			})]
		}), !t && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border/30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSubRow, {
					label: translate("auto.components.status.bar.ResourceUsageStatusSegment.81cd37af99", "Main"),
					values: e.main
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSubRow, {
					label: translate("auto.components.status.bar.ResourceUsageStatusSegment.d406915b78", "Renderer"),
					values: e.renderer
				}),
				(e.other.cpu > 0 || e.other.memory > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSubRow, {
					label: translate("auto.components.status.bar.ResourceUsageStatusSegment.0f9e50eb07", "Other"),
					values: e.other
				})
			]
		})]
	});
}
function useResourceUsageDerivedModel({ open: e, resourceSnapshot: t, sessions: n, resourceSessionBindings: r, runtimePaneTitlesByTabId: i, repos: a, allWorktrees: o, projectGroups: s, browserTabsByWorktree: c, workspaceSessionReady: l, sessionCount: u, sessionsError: d, memorySnapshotError: f, snapshot: p, spaceScanReady: m }) {
	let h = (0, import_react.useMemo)(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of a) {
			let n = t.displayName?.trim();
			n && e.set(t.id, n);
		}
		let t = findDuplicateIds(s);
		for (let n of s) t.has(n.id) || e.set(`folder-workspace:${n.id}`, n.name);
		return e;
	}, [a, s]), g = (0, import_react.useMemo)(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of a) e.set(t.id, t.connectionId ?? null);
		return e;
	}, [a]), _ = (0, import_react.useMemo)(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of a) {
			let n = parseExecutionHostId(getRepoExecutionHostId(t));
			e.set(t.id, n?.kind === "runtime");
		}
		return e;
	}, [a]), y = (0, import_react.useMemo)(() => new Map(o.map((e) => [e.id, e])), [o]), x = (0, import_react.useMemo)(() => findAmbiguousWorktreeIds(o), [o]), C = (0, import_react.useMemo)(() => e ? mergeSnapshotAndSessions(t, n, {
		...r,
		runtimePaneTitlesByTabId: i,
		repoDisplayNameById: h,
		repoConnectionIdById: g,
		repoRuntimeScopedById: _,
		browserTabsByWorktree: c,
		worktreeById: y,
		ambiguousWorktreeIds: x
	}) : [], [
		e,
		t,
		n,
		r,
		i,
		h,
		g,
		_,
		c,
		y,
		x
	]), w = (0, import_react.useMemo)(() => !e || !l ? 0 : countUnboundDaemonSessions(n, r), [
		e,
		n,
		r,
		l
	]), T = u, D = getResourceMemoryMetricCopy(t?.processMemoryMetric ?? "rss"), O = t?.processCommitMetric ? getResourceCommitMetricCopy() : null, { totalMemory: k, totalCpu: A, memBadgeLabel: j, totalPrivateMemory: M, commitToneClass: N } = (0, import_react.useMemo)(() => {
		let e = t?.totalMemory ?? 0, n = t?.totalCpu ?? 0, r = t?.totalPrivateMemory;
		return {
			totalMemory: e,
			totalCpu: n,
			memBadgeLabel: t ? formatMemory(e) : "—",
			totalPrivateMemory: r,
			commitToneClass: getCommitPressureToneClass({
				privateMemory: r,
				hostTotalMemory: t?.host.totalMemory ?? 0
			})
		};
	}, [t]), P = O && M !== void 0 ? formatMemory(M) : null;
	return {
		unifiedRepos: C,
		orphanCount: w,
		triggerSessionCount: T,
		memoryMetricCopy: D,
		commitMetricCopy: O,
		totalMemory: k,
		totalCpu: A,
		memBadgeLabel: j,
		commitToneClass: N,
		commitBadgeLabel: P,
		daemonUnreachable: d && (f !== null || p === null),
		sessionsOnlyError: d && f === null,
		resourceManagerTooltipLines: getResourceManagerTooltipLines({
			memoryLabel: t ? [`${j} · ${D.summaryLabel}`, P && O ? `${P} ${O.summaryLabel}` : null].filter(Boolean).join(" · ") : j,
			sessionCount: T,
			spaceScanReady: m
		}),
		resourceManagerAriaLabel: getResourceManagerAriaLabel({
			sessionCount: T,
			spaceScanReady: m
		})
	};
}
var POLL_MS = 2e3;
function useResourceUsageStatusController() {
	let e = useAppStore((e) => e.memorySnapshot), t = useAppStore((e) => e.memorySnapshotError), n = useAppStore((e) => e.fetchMemorySnapshot), r = useAppStore((e) => e.workspaceSessionReady), i = useAppStore((e) => e.setActiveView), o = useAppStore((e) => e.openModal), s = useAppStore((e) => e.openSpacePage), c = useAppStore((e) => e.recordFeatureInteraction), l = useAppStore((e) => e.activeView), u = useAppStore((e) => e.activeWorktreeId), d = useAppStore((e) => e.workspaceSpaceAnalysis?.scannedAt ?? null), f = useAppStore((e) => e.workspaceSpaceScanning), [p, m] = (0, import_react.useState)(!1), [h, g] = (0, import_react.useState)("memory"), [_, v] = (0, import_react.useState)(/* @__PURE__ */ new Set()), [y, b] = (0, import_react.useState)(/* @__PURE__ */ new Set()), [x, S] = (0, import_react.useState)(!0), { sessionInventory: C, sessionsError: w, refreshSessions: T, clearSessionsError: E, removeSession: k, removeSessions: A } = useResourceSessionInventory(r), j = C.sessions, [M, N] = (0, import_react.useState)(null), [P, Dt] = (0, import_react.useState)(!1), [F, I] = (0, import_react.useState)(() => ({
		ready: !1,
		previousScanning: f,
		lastSeenScannedAt: d
	})), L = useAppStore((e) => getResourceUsageRuntimePaneTitlesByTabId(e, p)), R = useAppStore((e) => getResourceUsageRepos(e, p)), z = useAppStore((e) => getResourceUsageAllWorktrees(e, p)), B = useAppStore((e) => getResourceUsageFolderWorkspaces(e, p)), V = useAppStore((e) => getResourceUsageProjectGroups(e, p)), H = (0, import_react.useMemo)(() => [...z, ...B.map(folderWorkspaceToWorktree)], [z, B]), U = useAppStore((e) => getResourceUsageTabsByWorktree(e, p)), Ot = useAppStore((e) => getResourceUsageBrowserTabsByWorktree(e, p)), W = useAppStore((e) => getResourceUsagePtyIdsByTabId(e, p)), G = useAppStore((e) => getResourceUsageTerminalLayoutsByTabId(e, p)), K = useAppStore((e) => getResourceUsageDeferredSshSessionIdsByTabId(e, p)), q = e, J = (0, import_react.useMemo)(() => ({
		ptyIdsByTabId: W,
		tabsByWorktree: U,
		terminalLayoutsByTabId: G,
		deferredSshSessionIdsByTabId: K,
		workspaceSessionReady: r
	}), [
		W,
		U,
		G,
		K,
		r
	]), Y = (0, import_react.useRef)(null), Z = (0, import_react.useRef)(null), kt = useMountedRef(), Q = (0, import_react.useCallback)(() => {
		Z.current !== null && (cancelAnimationFrame(Z.current), Z.current = null);
	}, []), At = (0, import_react.useCallback)((e) => {
		e || Q(), Y.current = e;
	}, [Q]), jt = useDaemonActions({ onRestartSettled: () => {
		E(), n(), T();
	} }), $ = resolveResourceUsageSpaceScanReady({
		snapshot: F,
		open: p,
		activeView: l,
		scannedAt: d,
		scanning: f
	});
	($.ready !== F.ready || $.previousScanning !== F.previousScanning || $.lastSeenScannedAt !== F.lastSeenScannedAt) && I($);
	let Mt = $.ready;
	(0, import_react.useEffect)(() => {
		r && n();
	}, [r, n]), (0, import_react.useEffect)(() => {
		if (!p) return;
		n(), T();
		let e = window.setInterval(() => {
			n();
		}, POLL_MS);
		return () => {
			window.clearInterval(e);
		};
	}, [
		p,
		n,
		T
	]), (0, import_react.useEffect)(() => {
		p || E();
	}, [p, E]);
	let Nt = useResourceUsageDerivedModel({
		open: p,
		resourceSnapshot: q,
		sessions: j,
		resourceSessionBindings: J,
		runtimePaneTitlesByTabId: L,
		repos: R,
		allWorktrees: H,
		projectGroups: V,
		browserTabsByWorktree: Ot,
		workspaceSessionReady: r,
		sessionCount: C.count,
		sessionsError: w,
		memorySnapshotError: t,
		snapshot: e,
		spaceScanReady: Mt
	}), Pt = useResourceUsageActions({
		setCollapsedRepos: v,
		setCollapsedWorktrees: b,
		tabsByWorktree: U,
		setOpen: m,
		setActiveView: i,
		openModal: o,
		openSpacePage: s,
		refreshSessions: T,
		removeSession: k,
		removeSessions: A,
		sessions: j,
		resourceSessionBindings: J,
		workspaceSessionReady: r,
		killConfirm: M,
		setKillConfirm: N,
		setKilling: Dt,
		mountedRef: kt,
		cancelPopoverBodyFocusFrame: Q,
		popoverBodyRef: Y,
		popoverBodyFocusFrameRef: Z
	});
	return {
		open: p,
		setOpen: m,
		sortOption: h,
		setSortOption: g,
		collapsedRepos: _,
		collapsedWorktrees: y,
		appCollapsed: x,
		setAppCollapsed: S,
		activeWorktreeId: u,
		killConfirm: M,
		setKillConfirm: N,
		killing: P,
		setPopoverBodyNode: At,
		daemonActions: jt,
		resourceSnapshot: q,
		spaceScanReady: Mt,
		recordFeatureInteraction: c,
		...Nt,
		...Pt
	};
}
function renderResourceUsageStatusTrigger({ daemonUnreachable: e, resourceManagerAriaLabel: t, spaceScanReady: r, iconOnly: a, commitToneClass: o, memBadgeLabel: s, triggerSessionCount: c, orphanCount: l, resourceManagerTooltipLines: u }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
		delayDuration: 150,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					...STATUS_BAR_CONTEXT_MENU_EXEMPT_PROPS,
					className: "relative inline-flex items-center gap-1.5 cursor-pointer rounded px-1 py-0.5 hover:bg-accent/70",
					"aria-label": e ? translate("auto.components.status.bar.ResourceUsageStatusSegment.59f178fe11", "{{value0}}, daemon unreachable", { value0: t }) : t,
					children: [
						r ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-primary",
							"aria-hidden": "true"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryStick, { className: "size-3 text-muted-foreground" }),
						!a && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-[11px] font-medium tabular-nums", o ?? "text-muted-foreground"),
								children: s
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground/50",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-3 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] tabular-nums text-muted-foreground",
								children: [c, l > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-yellow-500 ml-0.5",
									children: [
										"(",
										l,
										")"
									]
								})]
							})
						] }),
						a && c > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] tabular-nums text-muted-foreground",
							children: c
						}),
						e && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
							className: "size-3 text-yellow-500",
							"aria-label": translate("auto.components.status.bar.ResourceUsageStatusSegment.ca95d077db", "Daemon unreachable")
						})
					]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
			side: "top",
			sideOffset: 6,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-0.5",
				children: u.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: e.emphasized ? "text-primary" : "",
					children: e.text
				}, e.id))
			})
		})]
	});
}
function renderResourceUsagePopoverHeader({ daemonActions: e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-2 border-b border-border px-3 py-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-1.5 text-[11px] font-medium text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryStick, { className: "size-3 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate",
				children: translate("auto.components.status.bar.StatusBar.d1e1a7a6bf", "Resource Manager")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
				delayDuration: 200,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => e.setPending("restart"),
						disabled: e.isBusy,
						"aria-label": translate("auto.components.status.bar.ResourceUsageStatusSegment.c9382662bb", "Restart daemon"),
						className: "inline-flex size-6 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-3" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "top",
					sideOffset: 6,
					children: translate("auto.components.status.bar.ResourceUsageStatusSegment.c9382662bb", "Restart daemon")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
				delayDuration: 200,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => e.setPending("killAll"),
						disabled: e.isBusy,
						"aria-label": translate("auto.components.status.bar.ResourceUsageStatusSegment.bd19fd7a59", "Kill all sessions"),
						className: "inline-flex size-6 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive disabled:opacity-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "top",
					sideOffset: 6,
					children: translate("auto.components.status.bar.ResourceUsageStatusSegment.bd19fd7a59", "Kill all sessions")
				})]
			})]
		})]
	});
}
function renderDaemonUnreachableBanner({ daemonActions: e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2 border-b border-border bg-yellow-500/10 px-3 py-2 text-[11px] text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-3 shrink-0 text-yellow-500" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium",
					children: translate("auto.components.status.bar.ResourceUsageStatusSegment.f8e0d794b4", "Daemon is not responding")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-muted-foreground",
					children: translate("auto.components.status.bar.ResourceUsageStatusSegment.f85af9cda6", "Resource snapshots and terminal sessions are unavailable.")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				size: "sm",
				className: "shrink-0",
				onClick: () => e.setPending("restart"),
				disabled: e.isBusy,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "mr-1 size-3" }), translate("auto.components.status.bar.ResourceUsageStatusSegment.93b0de3c21", "Restart")]
			})
		]
	});
}
function renderSessionsOnlyErrorBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 border-b border-border bg-muted/40 px-3 py-1.5 text-[11px] text-muted-foreground",
		role: "status",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-3 shrink-0 text-yellow-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.status.bar.ResourceUsageStatusSegment.e7cf14ec78", "Terminal sessions unavailable. The list may be stale.") })]
	});
}
function renderResourceUsageSummary({ totalCpu: e, totalMemory: t, memoryMetricCopy: r, commitBadgeLabel: a, commitMetricCopy: o, commitToneClass: s, orphanCount: c }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-3 py-2 border-b border-border flex items-baseline justify-between gap-3 text-xs tabular-nums",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline gap-3 min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
					delayDuration: 200,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							tabIndex: 0,
							className: "font-medium text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:rounded",
							children: formatCpu(e)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
						side: "top",
						sideOffset: 6,
						className: "z-[70] max-w-xs",
						children: translate("auto.components.status.bar.ResourceUsageStatusSegment.1fedf94eae", "Combined CPU load. Values above 100% mean more than one core is working at once.")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground/50",
					children: "·"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
					delayDuration: 200,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							tabIndex: 0,
							className: "font-medium text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:rounded",
							children: [
								formatMemory(t),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-normal text-muted-foreground",
									children: r.summaryLabel
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
						side: "top",
						sideOffset: 6,
						className: "z-[70] max-w-xs",
						children: r.description
					})]
				}),
				a && o && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground/50",
					children: "·"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
					delayDuration: 200,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							tabIndex: 0,
							className: cn("font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:rounded", s ?? "text-foreground"),
							children: [
								a,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-normal text-muted-foreground",
									children: o.summaryLabel
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
						side: "top",
						sideOffset: 6,
						className: "z-[70] max-w-xs",
						children: o.description
					})]
				})] })
			]
		}), c > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shrink-0 text-yellow-500",
			"aria-live": "polite",
			children: c === 1 ? translate("auto.components.status.bar.ResourceUsageStatusSegment.30ff2c3c31", "{{value0}} orphan", { value0: c }) : translate("auto.components.status.bar.ResourceUsageStatusSegment.b8f4a2c1d0e3", "{{value0}} orphans", { value0: c })
		})]
	});
}
function SessionRow({ session: e, worktreeId: t, onNavigate: r, onKill: a }) {
	let o = e.tabId !== null && e.bound, s = () => {
		o && e.tabId && r(e.tabId, e.paneKey);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("group/sessrow flex items-center gap-2 pl-10 pr-3 py-1.5", o && "cursor-pointer hover:bg-accent/40"),
		onClick: o ? s : void 0,
		role: o ? "button" : void 0,
		tabIndex: o ? 0 : -1,
		onKeyDown: o ? (e) => {
			isResourceSessionActivationKey(e.key) && (e.preventDefault(), s());
		} : void 0,
		"data-worktree-id": t,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 shrink-0 rounded-full", e.bound ? "bg-emerald-500" : "bg-muted-foreground/40") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] text-muted-foreground truncate min-w-0 flex-1",
				children: e.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricPair, {
				cpu: e.cpu,
				memory: e.memory,
				size: "small"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: ROW_TRAILING_GUTTER_CLS,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: (t) => {
						t.stopPropagation(), a(e);
					},
					className: cn("rounded p-0.5 text-muted-foreground transition-opacity hover:bg-destructive/10 hover:text-destructive", e.bound && "can-hover:opacity-0 group-hover/sessrow:opacity-100 group-focus-within/sessrow:opacity-100 focus-visible:opacity-100"),
					"aria-label": translate("auto.components.status.bar.ResourceUsageStatusSegment.fa6d36758d", "Kill session {{value0}}", { value0: e.sessionId }),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
				})
			})
		]
	});
}
function BrowserRow({ browser: e }) {
	let t = e.title?.trim() || e.label?.trim() || e.url;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 pl-10 pr-3 py-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
				className: "size-3 shrink-0 text-muted-foreground",
				"aria-hidden": !0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1 truncate text-[11px] text-muted-foreground",
				children: t
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricPair, {
				cpu: null,
				memory: null,
				size: "small"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: ROW_TRAILING_GUTTER_CLS,
				"aria-hidden": !0
			})
		]
	});
}
function WorktreeRow({ worktree: e, storeRecord: t, activeWorktreeId: r, isCollapsed: a, onToggle: o, onNavigate: s, onDelete: c, onKillSession: d, navigateToTab: f }) {
	let p = e.sessions.length > 0 || e.browsers.length > 0, m = e.worktreeId === "__orphan__" || e.repoId === "__unattributed__", h = !m, g = !m && t !== null && e.worktreeId !== r, _ = t?.isMainWorktree ?? !1, v = t?.displayName?.trim() || e.worktreeName;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-b border-border/20 last:border-b-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "group/wtrow flex items-center ml-2 transition-colors hover:bg-muted/60",
				children: [
					p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: o,
						className: "pl-2 py-2 pr-0.5 shrink-0",
						"aria-label": a ? translate("auto.components.status.bar.ResourceUsageStatusSegment.c4a8968bdd", "Expand workspace") : translate("auto.components.status.bar.ResourceUsageStatusSegment.bbcd9b7b85", "Collapse workspace"),
						children: a ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 text-muted-foreground" })
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pl-2 py-2 pr-0.5 shrink-0 w-[calc(0.5rem+0.75rem+0.125rem)]",
						"aria-hidden": !0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: s,
						"aria-label": translate("auto.components.status.bar.ResourceUsageStatusSegment.d659d71d2d", "Resume workspace {{value0}}", { value0: v }),
						className: "flex-1 min-w-0 py-2 pr-2 pl-1 text-left flex items-center gap-1.5",
						disabled: !h,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium truncate",
							children: v
						}), e.isRemote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-[9px] uppercase tracking-wide text-muted-foreground/70",
							children: translate("auto.components.status.bar.ResourceUsageStatusSegment.21cacb16d1", "· remote")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0 pr-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("block transition-opacity", g && "group-hover/wtrow:opacity-0 group-hover/wtrow:pointer-events-none group-focus-within/wtrow:opacity-0 group-focus-within/wtrow:pointer-events-none [@media(hover:none)]:opacity-0 [@media(hover:none)]:pointer-events-none"),
									"aria-hidden": g ? void 0 : !0,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, { samples: e.history })
								}), g && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 flex items-center justify-end gap-0.5 can-hover:opacity-0 can-hover:pointer-events-none transition-opacity group-hover/wtrow:opacity-100 group-hover/wtrow:pointer-events-auto group-focus-within/wtrow:opacity-100 group-focus-within/wtrow:pointer-events-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
										delayDuration: 300,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
											asChild: !0,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: c,
												disabled: _,
												"aria-label": translate("auto.components.status.bar.ResourceUsageStatusSegment.16bc3c998a", "Delete workspace {{value0}}", { value0: v }),
												className: cn("p-0.5 rounded text-muted-foreground transition-colors", _ ? "opacity-40 cursor-not-allowed" : "hover:bg-destructive/10 hover:text-destructive"),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" })
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
											side: "top",
											sideOffset: 4,
											className: "z-[70] max-w-[200px] text-pretty",
											children: _ ? translate("auto.components.status.bar.ResourceUsageStatusSegment.946724a70a", "The main workspace cannot be deleted.") : translate("auto.components.status.bar.ResourceUsageStatusSegment.a82253b458", "Delete workspace.")
										})]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricPair, {
								cpu: e.cpu,
								memory: e.memory
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: ROW_TRAILING_GUTTER_CLS,
								"aria-hidden": !0
							})
						]
					})
				]
			}),
			!a && e.sessions.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionRow, {
				session: t,
				worktreeId: e.worktreeId,
				onNavigate: f,
				onKill: d
			}, t.sessionId)),
			!a && e.browsers.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserRow, { browser: e }, e.id))
		]
	});
}
function compareMetricDesc(e, t) {
	return e === null && t === null ? 0 : e === null ? 1 : t === null ? -1 : t - e;
}
function sortWorktrees(e, t) {
	let n = [...e];
	return t === "memory" ? n.sort((e, t) => compareMetricDesc(e.memory, t.memory)) : t === "cpu" ? n.sort((e, t) => compareMetricDesc(e.cpu, t.cpu)) : n.sort((e, t) => e.worktreeName.localeCompare(t.worktreeName)), n;
}
function sortProjectGroups(e, t) {
	let n = [...e];
	return t === "memory" ? n.sort((e, t) => compareMetricDesc(e.memory, t.memory)) : t === "cpu" ? n.sort((e, t) => compareMetricDesc(e.cpu, t.cpu)) : n.sort((e, t) => e.repoName.localeCompare(t.repoName)), n;
}
function ResourceTree({ repos: e, sortOption: t, collapsedRepos: r, toggleRepo: i, collapsedWorktrees: a, activeWorktreeId: o, toggleWorktree: s, navigateToWorktree: c, navigateToTab: d, onDelete: f, onKillSession: p }) {
	let m = useWorktreeMap(), h = (0, import_react.useMemo)(() => sortProjectGroups(e, t).map((e) => ({
		...e,
		worktrees: sortWorktrees(e.worktrees, t)
	})), [e, t]), g = (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeRow, {
		worktree: e,
		storeRecord: m.get(e.worktreeId) ?? null,
		activeWorktreeId: o,
		isCollapsed: a.has(e.worktreeId),
		onToggle: () => s(e.worktreeId),
		onNavigate: () => c(e.worktreeId),
		onDelete: () => f(e.worktreeId),
		onKillSession: p,
		navigateToTab: d
	}, e.worktreeId);
	return h.length === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: h[0].worktrees.map(g) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: h.map((e) => {
		let t = r.has(e.repoId);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-border/50 last:border-b-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => i(e.repoId),
					className: "pl-2 py-2 pr-0.5 transition-colors hover:bg-muted/50",
					"aria-label": t ? translate("auto.components.status.bar.ResourceUsageStatusSegment.b12e31dfcb", "Expand repo") : translate("auto.components.status.bar.ResourceUsageStatusSegment.73a3fd68a9", "Collapse repo"),
					children: t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 text-muted-foreground" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0 py-2 pr-3 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1.5 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-semibold uppercase tracking-wide truncate text-muted-foreground",
							children: e.repoName
						}), e.hasRemoteChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-[9px] uppercase tracking-wide text-muted-foreground/70",
							children: translate("auto.components.status.bar.ResourceUsageStatusSegment.21cacb16d1", "· remote")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricPair, {
							cpu: e.cpu,
							memory: e.memory
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: ROW_TRAILING_GUTTER_CLS,
							"aria-hidden": !0
						})]
					})]
				})]
			}), !t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border/30",
				children: e.worktrees.map(g)
			})]
		}, e.repoId);
	}) });
}
function renderResourceUsagePopoverBody({ setPopoverBodyNode: e, unifiedRepos: t, resourceSnapshot: r, sortOption: a, setSortOption: o, memoryMetricCopy: s, collapsedRepos: c, toggleRepo: l, collapsedWorktrees: u, activeWorktreeId: d, toggleWorktree: f, navigateToWorktree: p, navigateToTab: m, deleteWorktree: h, handleKillSession: g, appCollapsed: _, setAppCollapsed: v, daemonUnreachable: y }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: e,
		tabIndex: -1,
		className: "flex h-[420px] flex-col outline-none",
		children: [(t.length > 0 || r) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-3 py-1 bg-muted/30 border-b border-border/50 text-[10px] uppercase tracking-wide shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => o("name"),
				className: cn("hover:text-foreground transition-colors", a === "name" ? "font-semibold text-foreground" : "text-muted-foreground/80"),
				"aria-pressed": a === "name",
				children: translate("auto.components.status.bar.ResourceUsageStatusSegment.2aa2de6cb9", "Name")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center shrink-0 tabular-nums", "text-[10px]"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => o("cpu"),
						className: cn("w-12 text-right", "hover:text-foreground transition-colors", a === "cpu" ? "font-semibold text-foreground" : "text-muted-foreground/80"),
						"aria-pressed": a === "cpu",
						children: translate("auto.components.status.bar.ResourceUsageStatusSegment.298f4be7f2", "CPU")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => o("memory"),
						className: cn("w-16 text-right", "hover:text-foreground transition-colors", a === "memory" ? "font-semibold text-foreground" : "text-muted-foreground/80"),
						"aria-pressed": a === "memory",
						children: s.columnLabel
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-5 shrink-0 flex items-center justify-end",
					"aria-hidden": !0
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 overflow-y-auto scrollbar-sleek",
			children: [
				t.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceTree, {
					repos: t,
					sortOption: a,
					collapsedRepos: c,
					toggleRepo: l,
					collapsedWorktrees: u,
					activeWorktreeId: d,
					toggleWorktree: f,
					navigateToWorktree: p,
					navigateToTab: m,
					onDelete: h,
					onKillSession: g
				}),
				t.length === 0 && r && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-3 py-4 text-center text-xs text-muted-foreground",
					children: translate("auto.components.status.bar.ResourceUsageStatusSegment.27a74f91f0", "Nothing running right now")
				}),
				r && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSection, {
					app: r.app,
					isCollapsed: _,
					onToggle: () => v((e) => !e)
				}),
				!r && !y && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-3 py-4 text-center text-xs text-muted-foreground",
					children: translate("auto.components.status.bar.ResourceUsageStatusSegment.888dad8c55", "Loading…")
				})
			]
		})]
	});
}
function renderResourceUsagePopoverFooter({ handleOpenWorkspaceCleanup: e, orphanCount: t, handleKillOrphans: r }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-border/50 px-3 py-2 shrink-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: e,
			className: "relative inline-flex w-full items-center justify-center rounded-md border border-border/70 px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 truncate px-4 text-center",
				children: translate("auto.components.status.bar.ResourceUsageStatusSegment.92924a14e3", "Clean up workspaces")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
				className: "absolute right-2.5 size-3.5 text-muted-foreground",
				"aria-hidden": !0
			})]
		}), t > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => void r(),
			className: "mt-2 inline-flex w-full items-center justify-center rounded-md border border-border/70 px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/60",
			children: t === 1 ? translate("auto.components.status.bar.ResourceUsageStatusSegment.c7e3b1a0d9f2", "End {{value0}} orphan terminal", { value0: t }) : translate("auto.components.status.bar.ResourceUsageStatusSegment.d8f4c2b1e0a3", "End {{value0}} orphan terminals", { value0: t })
		}) : null]
	});
}
function renderResourceUsageKillDialog({ killConfirm: e, setKillConfirm: t, killing: i, runKillConfirmed: a }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: e !== null,
		onOpenChange: (e) => {
			e || i || t(null);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-md",
			showCloseButton: !i,
			onPointerDownOutside: (e) => {
				i && e.preventDefault();
			},
			onEscapeKeyDown: (e) => {
				i && e.preventDefault();
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "text-sm",
				children: translate("auto.components.status.bar.ResourceUsageStatusSegment.e9a5d3c2b1f0", "Kill {{value0}}?", { value0: e?.label ?? translate("auto.components.status.bar.ResourceUsageStatusSegment.138b99bd80", "this session") })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
				className: "text-xs",
				children: translate("auto.components.status.bar.ResourceUsageStatusSegment.67c4ecda49", "Force-quits this terminal. Any unsaved work in the pane is lost. This can't be undone.")
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: () => t(null),
				disabled: i,
				children: translate("auto.components.status.bar.ResourceUsageStatusSegment.946d9f94d0", "Cancel")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "destructive",
				onClick: () => void a(),
				disabled: i,
				children: [i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, i ? translate("auto.components.status.bar.ResourceUsageStatusSegment.41ae4fa725", "Killing…") : translate("auto.components.status.bar.ResourceUsageStatusSegment.b10695d6ce", "Kill session")]
			})] })]
		})
	});
}
function WorkspaceSpaceCompactPanel({ onOpenFullPage: e }) {
	let t = useAppStore((e) => e.workspaceSpaceAnalysis), i = useAppStore((e) => e.workspaceSpaceScanProgress), a = useAppStore((e) => e.workspaceSpaceScanError), o = useAppStore((e) => e.workspaceSpaceScanning), s = useAppStore((e) => e.refreshWorkspaceSpace), c = useAppStore((e) => e.cancelWorkspaceSpaceScan), l = getWorkspaceSpaceProgressLabel(i), u = (0, import_react.useCallback)(() => {
		s().catch(() => {});
	}, [s]), d = (0, import_react.useCallback)(() => {
		c();
	}, [c]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-border/50 bg-muted/15 px-3 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardDrive, { className: "size-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-1.5 text-[11px] font-medium text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.8ff597593d", "Space")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "px-1.5 py-0 text-[9px]",
								children: translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.c361440dc0", "Beta")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-[11px] text-muted-foreground",
							children: t ? o ? translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.3d8d47ce77", "{{value0}} · last result kept", { value0: l ?? "Scanning workspace sizes" }) : t.unavailableWorktreeCount > 0 ? translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.bef4dc0457", "{{value0}} reclaimable · {{value1}} unavailable", {
								value0: formatBytes(t.reclaimableBytes),
								value1: t.unavailableWorktreeCount
							}) : translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.bef4dc0457", "{{value0}} reclaimable · {{value1}} workspaces", {
								value0: formatBytes(t.reclaimableBytes),
								value1: t.scannedWorktreeCount
							}) : o ? l ?? translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.39786e3b73", "Scanning workspace sizes.") : translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.0583c806ac", "Workspace disk usage is not scanned.")
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "xs",
						onClick: o ? d : u,
						disabled: i?.state === "cancelling",
						className: "w-24",
						children: [o ? i?.state === "cancelling" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3" }), o ? i?.state === "cancelling" ? translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.5691353a21", "Stopping") : translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.2af2174d6d", "Cancel") : t ? translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.f5e1a84d79", "Refresh") : translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.0582df6d2e", "Scan")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "xs",
						onClick: e,
						children: translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.6a5dc3c61a", "Review")
					})]
				})]
			}),
			t ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 grid grid-cols-3 gap-1 text-[10px] tabular-nums",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded border border-border/60 bg-background/40 px-2 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted-foreground",
							children: translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.f4d2651498", "Scanned")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate font-medium text-foreground",
							children: formatBytes(t.totalSizeBytes)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded border border-border/60 bg-background/40 px-2 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted-foreground",
							children: translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.9be86c46a0", "Freeable")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate font-medium text-foreground",
							children: formatBytes(t.reclaimableBytes)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded border border-border/60 bg-background/40 px-2 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted-foreground",
							children: translate("auto.components.status.bar.WorkspaceSpaceCompactPanel.a471aa9c24", "Updated")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate font-medium text-foreground",
							children: getWorkspaceSpaceScanTimeLabel(t.scannedAt)
						})]
					})
				]
			}) : null,
			a ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1.5 flex items-start gap-1.5 text-[11px] text-destructive",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 truncate",
					children: a
				})]
			}) : null
		]
	});
}
function ResourceUsageStatusSegment({ iconOnly: e }) {
	let { open: t, setOpen: n, sortOption: r, setSortOption: i, collapsedRepos: a, collapsedWorktrees: o, appCollapsed: s, setAppCollapsed: c, activeWorktreeId: l, killConfirm: u, setKillConfirm: d, killing: f, setPopoverBodyNode: p, daemonActions: m, resourceSnapshot: h, spaceScanReady: g, recordFeatureInteraction: _, unifiedRepos: v, orphanCount: y, triggerSessionCount: b, memoryMetricCopy: x, commitMetricCopy: S, totalMemory: C, totalCpu: w, memBadgeLabel: T, commitToneClass: E, commitBadgeLabel: D, daemonUnreachable: O, sessionsOnlyError: k, resourceManagerTooltipLines: A, resourceManagerAriaLabel: j, toggleRepo: M, toggleWorktree: N, navigateToWorktree: F, navigateToTab: I, deleteWorktree: L, handleOpenWorkspaceCleanup: R, handleKillSession: z, handleKillOrphans: B, runKillConfirmed: V, openSpaceResults: H } = useResourceUsageStatusController();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
		open: t,
		onOpenChange: (e) => {
			e && _("resource-manager"), n(e);
		},
		children: [
			renderResourceUsageStatusTrigger({
				daemonUnreachable: O,
				resourceManagerAriaLabel: j,
				spaceScanReady: g,
				iconOnly: e,
				commitToneClass: E,
				memBadgeLabel: T,
				triggerSessionCount: b,
				orphanCount: y,
				resourceManagerTooltipLines: A
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
				side: "top",
				align: "end",
				sideOffset: 8,
				...STATUS_BAR_CONTEXT_MENU_EXEMPT_PROPS,
				className: "w-[26rem] max-w-[calc(100vw-2rem)] p-0",
				onOpenAutoFocus: (e) => e.preventDefault(),
				onFocusOutside: (e) => e.preventDefault(),
				children: [
					renderResourceUsagePopoverHeader({ daemonActions: m }),
					O && renderDaemonUnreachableBanner({ daemonActions: m }),
					!O && k && renderSessionsOnlyErrorBanner(),
					h && renderResourceUsageSummary({
						totalCpu: w,
						totalMemory: C,
						memoryMetricCopy: x,
						commitBadgeLabel: D,
						commitMetricCopy: S,
						commitToneClass: E,
						orphanCount: y
					}),
					renderResourceUsagePopoverBody({
						setPopoverBodyNode: p,
						unifiedRepos: v,
						resourceSnapshot: h,
						sortOption: r,
						setSortOption: i,
						memoryMetricCopy: x,
						collapsedRepos: a,
						toggleRepo: M,
						collapsedWorktrees: o,
						activeWorktreeId: l,
						toggleWorktree: N,
						navigateToWorktree: F,
						navigateToTab: I,
						deleteWorktree: L,
						handleKillSession: z,
						appCollapsed: s,
						setAppCollapsed: c,
						daemonUnreachable: O
					}),
					renderResourceUsagePopoverFooter({
						handleOpenWorkspaceCleanup: R,
						orphanCount: y,
						handleKillOrphans: B
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceSpaceCompactPanel, { onOpenFullPage: H })
				]
			}),
			renderResourceUsageKillDialog({
				killConfirm: u,
				setKillConfirm: d,
				killing: f,
				runKillConfirmed: V
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DaemonActionDialog, { api: m })
		]
	});
}
export { ResourceUsageStatusSegment };
