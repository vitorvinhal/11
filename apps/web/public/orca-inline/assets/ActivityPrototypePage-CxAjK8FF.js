import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./lazy-with-retry--hTe1cP7.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import "./open-in-app-catalog-D2IDnDpO.js";
import "./worktree-activation-u-wSAPlP.js";
import "./use-worktree-card-secondary-details-Cqbfo6RV.js";
import { a as useActivityThreadActionBindings, c as ACTIVITY_SEARCH_QUERY_MAX_BYTES, d as getActivityThreadGroup, f as isActivitySearchQueryTooLarge, h as buildActivityEvents, i as ActivityThreadOptionsMenu, l as activityThreadMatchesSearchQuery, m as activityThreadResponseRenderPreview, n as EventRepoBadge, o as hasActivityThreadWorkspace, p as buildAgentPaneThreads, r as ThreadAgentStateIndicator, s as useAgentPaneThreads, t as ActivityThreadListPane, u as buildActivityThreadGroups } from "./activity-thread-list-pane-RZGbOJQX.js";
import "./AgentQuestionIcon-DjFsmxm7.js";
import { t as MessageSquareText } from "./message-square-text-DbszugiR.js";
import { t as SquareTerminal } from "./square-terminal-C1LlL85w.js";
import { Ih as parsePaneKey, eu as agentTypeToIconAgent, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import "./dropdown-menu-DRu_J4_e.js";
import "./label-CA70r2No.js";
import "./hover-card-YPvTyc89.js";
import "./popover-DHL-338i.js";
import "./select-X9Gmv_Pu.js";
import "./toggle-BseEOkHu.js";
import "./tooltip-BWXjmmf0.js";
import "./input-BrXOv9Kv.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./keybindings-1v53ESY9.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import "./purify.es-Ddnop6vN.js";
import "./dialog-s0g51002.js";
import "./badge-D7sahA2a.js";
import "./window-park-visibility-BBcurIcE.js";
import "./selectors-Cdg4hUQI.js";
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
import "./workspace-port-localhost-label-selector-sOHTaMWk.js";
import "./icons-CAdlcsWl.js";
import { t as AgentIcon } from "./agent-catalog-Cgr0_vcs.js";
import "./command-QScw0gM9.js";
import "./ime-composition-keyboard-event-yHkhp82P.js";
import "./WorktreeCardHelpers-BykCvVd_.js";
import "./useWorkspaceEmojiShortcodeInput-CqmOEcrU.js";
import "./LinearIcon-BZznKVMM.js";
import "./JiraIcon-CYzhsqvz.js";
import "./RepoBadgeLabel-B-Yh5QwJ.js";
import "./useShortcutLabel-B283mfzm.js";
import { t as useSidebarResize } from "./useSidebarResize-CVB8oNM1.js";
import "./repo-search-mh_fkYaW.js";
import "./activity-event-state-6GEJtWqq.js";
import "./use-sidebar-host-scope-options-Cgolua5p.js";
import "./virtual-rows-B0m00S8e.js";
import "./AgentStateDot-CrLFCeoH.js";
import "./use-now-DD2-bt0J.js";
import "./worktree-agent-rows-IU_JQSGH.js";
import "./worktree-agent-row-selectors-CkGQD3YA.js";
import "./worktree-title-derived-agent-rows-BgX4iwli.js";
import "./useWorktreeAgentRows-av1v5VcW.js";
import "./structured-agent-session-tab-activation-C6wYgLO4.js";
import "./WorktreeOpenInMenu-Ck8W1PLk.js";
import "./worktree-status-B377qdvd.js";
import "./StatusIndicator-Utu7x8Uj.js";
import "./delete-worktree-flow-DRix0Gy6.js";
import "./preserved-branch-batch-toast-C08Rnofp.js";
import "./sleep-worktree-flow-CjtXa2Vw.js";
import "./runtime-environment-ssh-state-BVSgstCV.js";
import "./SelectedTextCopyMenu-Brh7AZmC.js";
import "./HostedReviewUnlinkMenuItem-QSK7_CoH.js";
import "./automation-host-client-C0Y3sYiB.js";
import "./workspace-browser-tab-open-BzgRRhYJ.js";
import { n as setActivityTerminalPortals } from "./activity-terminal-portal-CN0u9NzY.js";
import "./lib-DEDsinTP.js";
import "./lib-CCrOeqzl.js";
import "./CommentMarkdown-NC5Pka2-.js";
import "./MermaidBlock-DUCPG0_k.js";
import "./relative-time-format-Clpgwkog.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function reconcileActivityPortalThreads(e) {
	let { selectedThread: t, displayedThread: n, selectedHasLiveTab: r, displayedHasLiveTab: i } = e, a = !!(t && n && n.worktree.id === t.worktree.id && n.tab.id === t.tab.id), o = t && r ? n && i && n.paneKey !== t.paneKey ? a ? t : n : t : null;
	return {
		displayedIsSelectedTerminal: a,
		visibleThread: o,
		stagedThread: t && r && o && o.paneKey !== t.paneKey && !a ? t : null
	};
}
function resolveActivityPortalSwap(e) {
	let { selectedThread: t, selectedHasLiveTab: n, visibleThread: r, stagedThread: i, visiblePortalReady: a, stagedPortalReady: o, stagedPortalUnavailable: s } = e;
	return !t || !n ? { kind: "clear" } : i && (o || s) ? {
		kind: "swap-staged",
		paneKey: i.paneKey
	} : !i && r?.paneKey === t.paneKey && a ? {
		kind: "settle-visible",
		paneKey: t.paneKey
	} : null;
}
function isActivityFilterFocusShortcut(e, t = navigator.userAgent.includes("Mac")) {
	return e.key.toLowerCase() !== "f" || e.shiftKey || e.altKey ? !1 : t ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey;
}
function shouldIgnoreActivityFilterFocusShortcutTarget(e, t) {
	return e ? t.some((t) => t?.contains(e) ?? !1) : !1;
}
function handleActivityFilterFocusShortcut({ activeElement: e, event: t, input: n, isMac: r, terminalPortalTargets: i }) {
	return shouldIgnoreActivityFilterFocusShortcutTarget(e, i) || !isActivityFilterFocusShortcut(t, r) || !n ? !1 : (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), n.focus(), n.select(), !0);
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function ActivityThreadDetailPane({ selectedThread: e, selectedHasLiveTab: t, selectedWorktreeAvailable: i, visibleThread: a, stagedThread: o, activePortalSlotId: s, setPrimaryPortalTarget: c, setSecondaryPortalTarget: l, visiblePortalReady: u, visiblePortalUnavailable: d, showTerminalLoadingLabel: p, visibleThreadCount: m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "min-w-0 flex-1 overflow-hidden",
		children: e ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full min-h-0 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 items-start gap-4 border-b border-border px-4 pt-2 pb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex shrink-0 items-start gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreadAgentStateIndicator, { thread: e }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex shrink-0 pt-[3px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
									agent: agentTypeToIconAgent(e.agentType),
									size: 16
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "line-clamp-3 break-words text-sm font-semibold leading-snug",
							children: e.paneTitle
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex min-w-0 items-center gap-1.5 pl-11",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventRepoBadge, { repo: e.repo }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-xs text-muted-foreground",
							children: e.worktree.displayName
						})]
					})]
				})
			}), (() => t ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-0 flex-1 overflow-hidden bg-editor-surface",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: c,
						className: cn("absolute inset-0 min-h-0 min-w-0", s === "primary" ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"),
						"aria-hidden": s !== "primary",
						"data-activity-terminal-slot-id": "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: l,
						className: cn("absolute inset-0 min-h-0 min-w-0", s === "secondary" ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"),
						"aria-hidden": s !== "secondary",
						"data-activity-terminal-slot-id": "secondary"
					}),
					a && !o && !u ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0 z-20 bg-editor-surface",
						"aria-hidden": "true",
						children: d ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-3 mt-3 inline-flex items-center gap-2 rounded-md border border-border bg-background/85 px-2 py-1 text-xs text-muted-foreground shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-1.5 rounded-sm bg-muted-foreground/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.activity.ActivityPrototypePage.8de7c5beaa", "Terminal unavailable") })]
						}) : p ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-3 mt-3 inline-flex items-center gap-2 rounded-md border border-border bg-background/85 px-2 py-1 text-xs text-muted-foreground shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-1.5 animate-pulse rounded-sm bg-muted-foreground/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.activity.ActivityPrototypePage.1b633f5c1e", "Connecting terminal...") })]
						}) : null
					}) : null
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1 flex-col items-center justify-center gap-2 p-4 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareTerminal, { className: "size-7" }), i ? translate("auto.components.activity.ActivityPrototypePage.afdc2139a8", "Agent terminal closed. Open a new terminal in this workspace to continue.") : translate("auto.components.activity.ActivityPrototypePage.22b22034bc", "Standalone terminal unavailable in Activity.")]
			}))()]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-full min-h-[240px] flex-col items-center justify-center gap-2 text-sm text-muted-foreground",
			children: m === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareText, { className: "size-7" }), translate("auto.components.activity.ActivityPrototypePage.e3db9892f6", "No activity yet.")] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareTerminal, { className: "size-7" }), translate("auto.components.activity.ActivityPrototypePage.cf780197a1", "Select an agent to view its activity")] })
		})
	});
}
function createActivityPortalChurnBudget(e) {
	let { limit: t, windowMs: n, now: r = () => Date.now() } = e, i = [], a = (e) => {
		i = i.filter((t) => t > e - n && t <= e);
	};
	return {
		record() {
			let e = r();
			return a(e), i.push(e), i.length > t && i.shift(), i.length >= t;
		},
		isSpent() {
			return a(r()), i.length >= t;
		},
		clear() {
			i = [];
		}
	};
}
function createActivityPortalReadinessLatch(e = () => Date.now()) {
	let t = null, n = createActivityPortalChurnBudget({
		limit: 8,
		windowMs: 500,
		now: e
	});
	return { next(e) {
		if (e === "ready") return t = e, n.clear(), e;
		let r = t !== null && t !== e;
		return t = e, (r ? n.record() : n.isSpent()) ? "unavailable" : e;
	} };
}
var ACTIVITY_TERMINAL_LOADING_LABEL_DELAY_MS = 180;
function findActivityTerminalPane(e, t) {
	let n = !1;
	for (let r of e.querySelectorAll("[data-leaf-id]")) if (n = !0, r.dataset.leafId === t) return {
		foundAnyPane: n,
		pane: r
	};
	return {
		foundAnyPane: n,
		pane: null
	};
}
function hasInlineDisplayNoneBetween(e, t) {
	let n = e;
	for (; n;) {
		if (n.style.display === "none") return !0;
		if (n === t) return !1;
		n = n.parentElement;
	}
	return !1;
}
function hasUnhiddenSiblingPane(e, t) {
	for (let n of e.querySelectorAll("[data-leaf-id]")) if (n !== t && !hasInlineDisplayNoneBetween(n, e)) return !0;
	return !1;
}
function getSelectedActivityTerminalPortalStatus(e, t) {
	let n = parsePaneKey(t);
	if (!n) return {
		ready: !1,
		unavailable: !0
	};
	let r = null;
	for (let t of e.querySelectorAll("[data-terminal-tab-id]")) if (t.dataset.terminalTabId === n.tabId) {
		r = t;
		break;
	}
	if (!r) return {
		ready: !1,
		unavailable: !1
	};
	let { foundAnyPane: i, pane: a } = findActivityTerminalPane(r, n.leafId);
	if (!a) return {
		ready: !1,
		unavailable: i
	};
	let o = hasInlineDisplayNoneBetween(a, r), s = hasUnhiddenSiblingPane(r, a), c = !o && (a.offsetParent !== null || a.getClientRects().length > 0), l = a.hasAttribute("data-pty-id") || a.querySelector("[data-pty-id]") !== null, u = a.querySelector(".xterm-screen") !== null;
	return {
		ready: c && !s && l && u,
		unavailable: o
	};
}
function useActivityTerminalPortalStatus(e, t, n = !1) {
	let [r, i] = (0, import_react.useState)({
		target: null,
		paneKey: null,
		status: "loading"
	}), a = (0, import_react.useRef)(null);
	return (0, import_react.useLayoutEffect)(() => {
		let r = !1, o = null, s = null, c = null, l = (n) => {
			r || (c = n, o === null && (o = requestAnimationFrame(() => {
				o = null;
				let n = c;
				c = null, !(r || n === null) && i((r) => r.target === e && r.paneKey === t && r.status === n ? r : {
					target: e,
					paneKey: t,
					status: n
				});
			})));
		}, u = () => {
			r = !0, o !== null && (cancelAnimationFrame(o), o = null), s !== null && (window.clearTimeout(s), s = null);
		};
		if (!e || !t) return l("loading"), u;
		if (n) return l("unavailable"), u;
		let d = a.current ??= createActivityPortalReadinessLatch(), f = (e) => {
			let t = d.next(e);
			l(t), s !== null && (window.clearTimeout(s), s = null), t !== e && (s = window.setTimeout(p, 500));
		}, p = () => {
			let n = getSelectedActivityTerminalPortalStatus(e, t);
			if (n.unavailable) {
				f("unavailable");
				return;
			}
			if (n.ready) {
				f("ready");
				return;
			}
			f("loading");
		};
		p();
		let m = new MutationObserver(p);
		return m.observe(e, {
			childList: !0,
			subtree: !0,
			attributes: !0,
			attributeFilter: [
				"data-terminal-tab-id",
				"data-leaf-id",
				"data-pty-id",
				"style"
			]
		}), () => {
			u(), m.disconnect();
		};
	}, [
		e,
		t,
		n
	]), r.target === e && r.paneKey === t ? r.status : "loading";
}
function otherActivityTerminalSlot(e) {
	return e === "primary" ? "secondary" : "primary";
}
function useActivityTerminalLoadingLabel(e) {
	let [t, n] = (0, import_react.useState)(!1), [r, i] = (0, import_react.useState)(e);
	return r !== e && (i(e), t && n(!1)), (0, import_react.useEffect)(() => {
		if (!e) return;
		let t = setTimeout(() => n(!0), ACTIVITY_TERMINAL_LOADING_LABEL_DELAY_MS);
		return () => clearTimeout(t);
	}, [e]), e && t;
}
function ActivityPrototypePage() {
	let [e, t] = (0, import_react.useState)(""), n = (0, import_react.useRef)(null), r = (0, import_react.useRef)(null), a = useAppStore((e) => e.agentsReadFilter), o = useAppStore((e) => e.setAgentsReadFilter), s = useAppStore((e) => e.agentsGroupBy), c = useAppStore((e) => e.setAgentsGroupBy), l = useAppStore((e) => e.agentsCompactMode), u = useAppStore((e) => e.setAgentsCompactMode), d = useAppStore((e) => e.agentsShowChildAgents), f = useAppStore((e) => e.setAgentsShowChildAgents), [m, h] = (0, import_react.useState)(null), [g, _] = (0, import_react.useState)(null), [v, y] = (0, import_react.useState)("primary"), [b, x] = (0, import_react.useState)(null), [S, me] = (0, import_react.useState)(null), [C, w] = (0, import_react.useState)(480), { containerRef: T, isResizing: E, onResizeStart: he } = useSidebarResize({
		isOpen: !0,
		width: C,
		minWidth: 320,
		maxWidth: 720,
		deltaSign: 1,
		setWidth: w
	}), { storeData: D, allThreads: O, selectedPaneKeyIsLive: ge, effectiveSelectedPaneKey: k, visibleThreads: A, markAllReadThreads: j, visibleThreadGroups: M } = useAgentPaneThreads({
		query: e,
		readFilter: a,
		groupBy: s,
		selectedPaneKey: m,
		showChildAgents: d
	});
	ge || h(null);
	let N = k ? O.find((e) => e.paneKey === k) ?? null : null, P = N?.tab.id ?? null, F = N ? hasActivityThreadWorkspace(N, D) : !1, I = N && P && F ? (D.tabsByWorktree[N.worktree.id] ?? []).some((e) => e.id === P) : !1, L = g ? O.find((e) => e.paneKey === g) ?? null : null, R = L?.tab.id ?? null, z = L ? hasActivityThreadWorkspace(L, D) : !1, B = L && R && z ? (D.tabsByWorktree[L.worktree.id] ?? []).some((e) => e.id === R) : !1, { visibleThread: V, stagedThread: H } = reconcileActivityPortalThreads({
		selectedThread: N,
		displayedThread: L,
		selectedHasLiveTab: !!I,
		displayedHasLiveTab: !!B
	}), U = otherActivityTerminalSlot(v), W = {
		primary: b,
		secondary: S
	}, G = W[v], K = W[U], q = useActivityTerminalPortalStatus(G, V?.paneKey ?? null, V?.migrationUnsupportedPtyId !== void 0), J = useActivityTerminalPortalStatus(K, H?.paneKey ?? null, H?.migrationUnsupportedPtyId !== void 0), Y = q === "ready", _e = q === "unavailable", X = J === "ready", Z = J === "unavailable", ve = useActivityTerminalLoadingLabel(!!(V && !H && !Y)), ye = (0, import_react.useCallback)((e) => {
		x(e);
	}, []), be = (0, import_react.useCallback)((e) => {
		me(e);
	}, []), Q = (0, import_react.useMemo)(() => {
		let e = [];
		return V && G && e.push({
			slotId: v,
			requestToken: `${v}:${V.paneKey}`,
			target: G,
			worktreeId: V.worktree.id,
			tabId: V.tab.id,
			paneKey: V.paneKey,
			forceUnavailable: V.migrationUnsupportedPtyId !== void 0,
			active: !0
		}), H && K && e.push({
			slotId: U,
			requestToken: `${U}:${H.paneKey}`,
			target: K,
			worktreeId: H.worktree.id,
			tabId: H.tab.id,
			paneKey: H.paneKey,
			forceUnavailable: H.migrationUnsupportedPtyId !== void 0,
			active: !1
		}), e;
	}, [
		v,
		G,
		U,
		K,
		H,
		V
	]);
	(0, import_react.useLayoutEffect)(() => {
		let e = resolveActivityPortalSwap({
			selectedThread: N,
			selectedHasLiveTab: !!I,
			visibleThread: V,
			stagedThread: H,
			visiblePortalReady: Y,
			stagedPortalReady: X,
			stagedPortalUnavailable: Z
		});
		if (e?.kind === "clear") {
			_(null);
			return;
		}
		if (e?.kind === "swap-staged") {
			y(U), _(e.paneKey);
			return;
		}
		e?.kind === "settle-visible" && _(e.paneKey);
	}, [
		U,
		I,
		N,
		Z,
		X,
		H,
		Y,
		V
	]), (0, import_react.useLayoutEffect)(() => {
		setActivityTerminalPortals(Q);
	}, [Q]);
	let xe = (0, import_react.useCallback)((e) => {
		e || setActivityTerminalPortals([]);
	}, []);
	(0, import_react.useEffect)(() => {
		let e = (e) => {
			handleActivityFilterFocusShortcut({
				activeElement: document.activeElement,
				event: e,
				input: n.current,
				terminalPortalTargets: [G, K]
			});
		};
		return window.addEventListener("keydown", e, { capture: !0 }), () => window.removeEventListener("keydown", e, { capture: !0 });
	}, [G, K]);
	let { markThreadRead: Se, markThreadUnread: Ce, selectThread: we, jumpToWorkspace: Te, markAllThreadsRead: Ee, hasUnreadThreads: De, hasCompletedThreads: Oe, handleClearCompleted: ke } = useActivityThreadActionBindings({
		visibleThreads: A,
		markAllReadThreads: j,
		acknowledgeAgents: D.acknowledgeAgents,
		unacknowledgeAgents: D.unacknowledgeAgents,
		setSelectedPaneKey: h
	}), $ = (0, import_react.useCallback)((e) => hasActivityThreadWorkspace(e, {
		worktreesByRepo: D.worktreesByRepo,
		detectedWorktreesByRepo: D.detectedWorktreesByRepo,
		folderWorkspaces: D.folderWorkspaces,
		defaultHostId: D.defaultHostId
	}), [
		D.worktreesByRepo,
		D.detectedWorktreesByRepo,
		D.folderWorkspaces,
		D.defaultHostId
	]);
	return (0, import_react.useEffect)(() => {
		if (!N || !N.unread || H || N.paneKey !== k) return;
		let e = `${N.paneKey}:${N.latestTimestamp}`;
		if (r.current === e) return;
		let t = !I || N.migrationUnsupportedPtyId !== void 0, n = V?.paneKey === k && Y;
		(t || n) && (r.current = e, D.acknowledgeAgents([N.paneKey]));
	}, [
		I,
		k,
		N,
		H,
		D,
		Y,
		V
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: xe,
		className: "flex h-full min-h-0 flex-col bg-background pb-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex min-h-0 flex-1 overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityThreadListPane, {
				threadListRef: T,
				threadListWidth: C,
				activityFilterInputRef: n,
				query: e,
				onQueryChange: t,
				groupBy: s,
				onGroupByChange: c,
				readFilter: a,
				onReadFilterChange: o,
				compactMode: l,
				showChildAgents: d,
				hasUnreadThreads: De,
				onCompactModeChange: u,
				onShowChildAgentsChange: f,
				onMarkAllThreadsRead: Ee,
				hasCompletedThreads: Oe,
				onClearCompleted: ke,
				visibleThreadGroups: M,
				visibleThreadCount: A.length,
				selectedPaneKey: N?.paneKey ?? null,
				onSelectThread: we,
				onJumpToWorkspace: Te,
				onMarkThreadRead: Se,
				onMarkThreadUnread: Ce,
				canJumpToWorkspace: $,
				isThreadListResizing: E,
				onResizeStart: he
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityThreadDetailPane, {
				selectedThread: N,
				selectedHasLiveTab: !!I,
				selectedWorktreeAvailable: F,
				visibleThread: V,
				stagedThread: H,
				activePortalSlotId: v,
				setPrimaryPortalTarget: ye,
				setSecondaryPortalTarget: be,
				visiblePortalReady: Y,
				visiblePortalUnavailable: _e,
				showTerminalLoadingLabel: ve,
				visibleThreadCount: A.length
			})]
		})
	});
}
export { ACTIVITY_SEARCH_QUERY_MAX_BYTES, ActivityThreadOptionsMenu, ThreadAgentStateIndicator, activityThreadMatchesSearchQuery, activityThreadResponseRenderPreview, buildActivityEvents, buildActivityThreadGroups, buildAgentPaneThreads, ActivityPrototypePage as default, getActivityThreadGroup, handleActivityFilterFocusShortcut, isActivityFilterFocusShortcut, isActivitySearchQueryTooLarge, shouldIgnoreActivityFilterFocusShortcutTarget, useActivityTerminalPortalStatus };
