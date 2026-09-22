import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { n as lazyWithRetry } from "./lazy-with-retry--hTe1cP7.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { bt as isInactiveWorkspace, dt as writeWorkspaceDragData, r as activateAndRevealWorktree, t as activateAndRevealFolderWorkspace, yt as getWorktreeIdsWithLiveAgent } from "./worktree-activation-u-wSAPlP.js";
import { A as selectWorktreeAgentActivitySummary, D as shouldBeginWorktreeRename, E as getDirectoryName, F as showsAgentToolPreview, I as CommentMarkdownAsync, L as preloadCommentMarkdown, M as CacheTimer, N as usePromptCacheCountdownForPane, O as WorktreeContextMenu_default, P as formatAgentToolPreview, T as formatSparseDirectoryPreview, V as formatShortTimeAgo, _ as hasWorktreeCardDetails, a as useWorktreeCardFoundation, c as WorktreeCardPortsTrigger, g as WorktreeCardMetaBadges, i as useWorktreeCardLifecycleEffects, j as isEventTargetInsideCurrentTarget, l as WorktreeCardDetailsHover, m as useWorktreeCardDetailsHoverControl, n as useWorktreeCardReviewDetails, o as canShowWorkspaceDeleteQuickAction, r as useWorktreeCardLinkedDetails, s as WorktreeCardPortsDetails, t as useWorktreeCardSecondaryDetails, v as ReviewIcon, w as WorktreeTitleInlineRename, y as getReviewLabel } from "./use-worktree-card-secondary-details-Cqbfo6RV.js";
import { t as Bell } from "./bell-D62apZuF.js";
import { t as RepoIconGlyph } from "./repo-icon-BXNqTCtG.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as CircleAlert } from "./circle-alert-xAjxBVzK.js";
import { t as Copy } from "./copy-BzsskppR.js";
import { t as GitBranch } from "./git-branch-CuLRr9n5.js";
import { t as DetachedHeadBadge } from "./DetachedHeadBadge-DE8UcHW_.js";
import { t as GitMerge } from "./git-merge-clNNtOmU.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as Moon } from "./moon-B-8XVefL.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { t as Send } from "./send-CdtXXwAK.js";
import { t as ServerOff } from "./server-off-DaMn7a-t.js";
import { t as Server } from "./server-BmPwXRCG.js";
import { t as Star } from "./star-BB5Azwdt.js";
import { Cb as REPO_COLORS, Ih as parsePaneKey, Nh as isTerminalLeafId, Ph as makePaneKey, Qa as deriveRunningAgentSendTargets, ZS as getRepoExecutionHostId, cb as DEFAULT_AGENT_ACTIVITY_DISPLAY_MODE, eu as agentTypeToIconAgent, fb as DEFAULT_REPO_BADGE_COLOR, iw as Trash2, mg as normalizeRepoBadgeColor, mv as folderWorkspaceKey, nl as getAgentRowPrimaryText, t as useAppStore, tu as formatAgentTypeLabel, vv as parseWorkspaceKey } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as Workflow } from "./workflow-C5z_2wJq.js";
import { t as Wrench } from "./wrench-BzRaaN5J.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { v as recordRendererCrashBreadcrumb } from "./pane-metric-options-deferral-Bz211kas.js";
import { a as DialogFooter, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { t as Badge } from "./badge-D7sahA2a.js";
import { t as useShallow } from "./shallow-CDSK0iEX.js";
import { m as LINEAR_AGENT_SKILL_NAMES, x as ORCA_LINEAR_SKILL_INSTALL_COMMAND } from "./orchestration-setup-state-CE8DDbY6.js";
import { s as activateTabAndFocusPane } from "./web-runtime-session-CeAC5QPx.js";
import { a as formatCompactDuration, i as agentNoUpdateLabel } from "./agent-status-worktree-attribution-0Thqf3S9.js";
import { t as AgentIcon } from "./agent-catalog-Cgr0_vcs.js";
import { i as withUiConnectTimeout, r as SSH_RECONNECT_UI_TIMEOUT_MS, t as dismissStaleAgentRowByKey } from "./stale-agent-row-BnOXWcm1.js";
import { a as useSshConnectInFlight, i as trackSshConnect, r as isSshConnectInFlight } from "./ssh-connect-in-flight-BpLvUVkJ.js";
import { i as FilledBellIcon, n as EMPTY_BROWSER_TABS, r as EMPTY_TABS, t as CONFLICT_OPERATION_LABELS } from "./WorktreeCardHelpers-BykCvVd_.js";
import { n as RepoBadgeMark } from "./RepoBadgeLabel-B-Yh5QwJ.js";
import { n as isConnectingSshStatus, t as canConnectSshStatus } from "./ssh-connection-recoverability-C7czeQrl.js";
import { a as useInstalledAgentSkillNames, t as GLOBAL_AGENT_SKILL_SOURCE_KINDS } from "./useInstalledAgentSkills-elga6kkz.js";
import { t as GROUP_HEADER_ROW_HEIGHT } from "./virtual-rows-B0m00S8e.js";
import { n as agentStateLabel, t as AgentStateDot } from "./AgentStateDot-CrLFCeoH.js";
import { t as agentRowDotState } from "./agent-row-dot-state-C-nQUYId.js";
import { n as getAgentRowConversationName, t as resolveAgentRowPaneLiveTitle } from "./agent-row-pane-live-title-BggTVlpJ.js";
import { t as lastEnteredDoneAt } from "./agent-finished-timestamp-BwQZ7hrN.js";
import { t as useNow } from "./use-now-DD2-bt0J.js";
import { c as selectRuntimePaneTitlesForWorktree, f as buildAgentRowLineageTree, l as selectTerminalLayoutRootsForWorktree, s as selectLivePtyIdsForWorktree } from "./worktree-agent-rows-IU_JQSGH.js";
import { t as useWorktreeAgentRows } from "./useWorktreeAgentRows-av1v5VcW.js";
import { n as activateStructuredAgentSessionTab } from "./structured-agent-session-tab-activation-C6wYgLO4.js";
import { n as sshConnectingLabel, t as sshConnectVerb } from "./ssh-connect-verb-JmgedUaW.js";
import { n as getWorktreeStatusLabel, r as resolveWorktreeStatus } from "./worktree-status-B377qdvd.js";
import { t as StatusIndicator_default } from "./StatusIndicator-Utu7x8Uj.js";
import { n as runWorktreeDelete } from "./delete-worktree-flow-DRix0Gy6.js";
import { t as getAgentStatusEpochNow } from "./agent-status-epoch-clock-CNjEkuIm.js";
import { a as resyncRuntimeEnvironmentSshTargets, n as connectRuntimeEnvironmentSshTarget } from "./runtime-environment-ssh-state-BVSgstCV.js";
import { a as getLinearPromptTerminalShellOverride, c as getLinearAgentSkillSetupInlineRuntimeCopy, d as getLinearAgentSkillSetupToastTitle, f as getLinearAgentSkillUpdateCommand, i as getLinearPromptSkillDiscoveryTarget, l as getLinearAgentSkillSetupMissingLabel, n as getLinearPromptAgentRuntime, o as getLocalDismissStorageKey, r as getLinearPromptSetupCheckIdentity, s as readLocalDismissed, t as getCurrentPlatform, u as getLinearAgentSkillSetupToastDescription } from "./linear-agent-skill-runtime-BlDhG-tE.js";
import { l as ensureOrcaCliAvailableForAgentSkillTerminal, r as ensureWslCliAvailableForAgentSkillTerminal, s as getWslCliDistroRequest, t as buildSkillCommandForRuntime, u as isOrcaCliAvailableOnPath } from "./CliSkillRuntimeSetup-l01nqxEe.js";
var TicketCheck = createLucideIcon("ticket-check", [["path", {
	d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
	key: "qn84l0"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function WorktreeHostContextBadge({ label: e, className: t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "hostContext",
		className: cn("max-w-[7rem]", t),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "truncate",
			children: e
		})
	});
}
const WORKTREE_SIDEBAR_REVEAL_TOP_INSET = 34;
function getElementScrollBounds(e, t) {
	let n = e.getBoundingClientRect(), r = t.getBoundingClientRect();
	return {
		start: r.top - n.top + e.scrollTop,
		end: r.bottom - n.top + e.scrollTop
	};
}
function getScrollTopToRevealBounds(e, t, n = 0) {
	let r = Math.max(0, Math.min(e.clientHeight, n)), i = e.scrollTop + r, a = e.scrollTop + e.clientHeight;
	return t.start < i ? t.start - r : t.end > a ? t.end - e.clientHeight : null;
}
function revealElementInScrollContainer(e, t, n, r) {
	if (!e.contains(t)) return !1;
	let i = getScrollTopToRevealBounds(e, getElementScrollBounds(e, t), 34);
	if (i === null) return !0;
	let a = typeof window < "u" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0, o = n === "smooth" && a ? "auto" : n, s = Math.max(0, i);
	return r?.(s), e.scrollTo({
		top: s,
		behavior: o
	}), !0;
}
function DashboardAgentChildDisclosure({ childAgentCount: e, childAgentsExpanded: t, onToggleChildAgents: n, reserveDisclosureGutter: i }) {
	let o = typeof e == "number" && e > 0 && typeof n == "function", s = (0, import_react.useCallback)((e) => {
		e.preventDefault(), e.stopPropagation(), n?.();
	}, [n]), c = (0, import_react.useCallback)((e) => {
		e.stopPropagation();
	}, []), l = (0, import_react.useCallback)((e) => {
		(e.key === "Enter" || e.key === " ") && e.stopPropagation();
	}, []);
	return o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: s,
		onMouseDown: c,
		onKeyDown: l,
		className: "-ml-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-sm border border-sidebar-border/80 bg-sidebar text-foreground/80 shadow-xs hover:bg-sidebar-accent hover:text-foreground",
		"aria-label": translate("auto.components.dashboard.DashboardAgentChildDisclosure.1b57ce9fa4", "{{value0}} {{value1}} child {{value2}}", {
			value0: t ? "Hide" : "Show",
			value1: e,
			value2: e === 1 ? "agent" : "agents"
		}),
		"aria-expanded": t,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: cn("size-3 transition-transform duration-150", t && "rotate-90") })
	}) : i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": !0,
		className: "-ml-0.5 inline-block size-4 shrink-0"
	}) : null;
}
function DashboardAgentRowMessage({ expanded: e, isInterrupted: t, lastAssistantMessage: n }) {
	return (0, import_react.useEffect)(preloadCommentMarkdown, []), !t && !n ? e ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-0.5 pl-5 text-[10px] leading-snug text-muted-foreground/70",
		children: " "
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-0.5 flex min-w-0 items-start gap-1.5 pl-5",
		children: [t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shrink-0 text-[10px] leading-snug text-muted-foreground/80",
			"aria-label": translate("auto.components.dashboard.DashboardAgentRowMessage.1ec01cef03", "Interrupted by user"),
			children: translate("auto.components.dashboard.DashboardAgentRowMessage.0a01046763", "interrupted")
		}) : null, n ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentMarkdownAsync, {
			content: n,
			className: cn("min-w-0 flex-1 overflow-hidden text-[10px] leading-snug text-muted-foreground/80", "transition-[height] duration-200 ease-out [interpolate-size:allow-keywords]", e ? "h-auto" : "h-[1lh]", !e && "truncate whitespace-nowrap [&_*]:inline [&_*]:!whitespace-nowrap [&_*]:!m-0 [&_*]:!p-0 [&_ul]:list-none [&_ol]:list-none [&_br]:hidden"),
			title: e ? void 0 : n
		}) : null]
	});
}
function DashboardAgentRowTrailingControls({ paneKey: e, relativeTimestamp: t, expanded: n, hideExpand: i, hideDismiss: o = !1, sendTargetStatus: s, onDismiss: c, onToggleExpanded: l, onSendTargetClick: u }) {
	let d = (0, import_react.useCallback)((e) => {
		e.stopPropagation();
	}, []), f = (0, import_react.useCallback)((e) => {
		(e.key === "Enter" || e.key === " ") && e.stopPropagation();
	}, []), p = (0, import_react.useCallback)((t) => {
		t.stopPropagation(), c(e);
	}, [c, e]), m = (0, import_react.useCallback)((e) => {
		e.preventDefault(), e.stopPropagation(), l();
	}, [l]), h = (0, import_react.useCallback)((t) => {
		t.preventDefault(), t.stopPropagation(), s === "eligible" && u?.(e);
	}, [
		u,
		e,
		s
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative ml-auto flex h-3.5 w-12 shrink-0 items-center justify-end",
		children: [
			(s === "eligible" || s === "sending") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: h,
				onMouseDown: d,
				onKeyDown: f,
				disabled: s === "sending",
				className: cn("worktree-agent-send-target-button absolute right-0 top-1/2 z-10 inline-flex h-5 -translate-y-1/2 items-center gap-1 rounded-md border px-1.5 text-[10px] font-medium leading-none transition-[background-color,border-color,color,opacity]", s === "sending" && "cursor-progress opacity-75"),
				"aria-label": translate("auto.components.dashboard.DashboardAgentRow.0272969e28", "Send to this agent"),
				title: translate("auto.components.dashboard.DashboardAgentRow.0272969e28", "Send to this agent"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.dashboard.DashboardAgentRow.912e136cd9", "Send") })]
			}),
			!s && o && t !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none shrink-0 text-[10px] leading-none text-muted-foreground/60",
				"aria-hidden": !0,
				children: t
			}),
			!s && !o && t !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "relative grid grid-cols-1 grid-rows-1 shrink-0 items-center justify-items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("[grid-area:1/1] pointer-events-none text-[10px] leading-none text-muted-foreground/60", "transition-opacity duration-150", "group-hover/agent-row:opacity-0 [@media(hover:none)]:opacity-0"),
					"aria-hidden": !0,
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: p,
					onMouseDown: d,
					onKeyDown: f,
					className: cn("[grid-area:1/1] inline-flex items-center justify-center text-muted-foreground/70 hover:text-foreground", "can-hover:opacity-0 transition-opacity duration-150", "group-hover/agent-row:opacity-100 focus-visible:opacity-100"),
					"aria-label": translate("auto.components.dashboard.DashboardAgentRow.b06e13fcf7", "Dismiss agent"),
					title: translate("auto.components.dashboard.DashboardAgentRow.5ae84475cc", "Dismiss"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
				})]
			}),
			!s && !o && t === null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: p,
				onMouseDown: d,
				onKeyDown: f,
				className: cn("inline-flex shrink-0 items-center justify-center text-muted-foreground/70 hover:text-foreground", "can-hover:opacity-0 transition-opacity duration-150", "group-hover/agent-row:opacity-100 focus-visible:opacity-100"),
				"aria-label": translate("auto.components.dashboard.DashboardAgentRow.b06e13fcf7", "Dismiss agent"),
				title: translate("auto.components.dashboard.DashboardAgentRow.5ae84475cc", "Dismiss"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
			}),
			!i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: m,
				onMouseDown: d,
				onKeyDown: f,
				className: "inline-flex shrink-0 items-center justify-center text-muted-foreground/60 hover:text-foreground",
				"aria-label": n ? translate("auto.components.dashboard.DashboardAgentRow.a41fb5376e", "Collapse details") : translate("auto.components.dashboard.DashboardAgentRow.a743da52ff", "Expand details"),
				"aria-expanded": n,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 transition-transform duration-150", n && "rotate-180") })
			})
		]
	});
}
function DashboardAgentRowToolStep({ expanded: e, showsTool: t, reservesHeight: n, toolName: r, toolInput: i }) {
	return !t || !r && !n ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-agent-row-tool-slot": "",
		className: "mt-0.5 min-w-0 pl-5 text-[10px] leading-snug text-muted-foreground/70",
		children: r ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-agent-row-tool-header": "true",
			className: cn("flex h-[1lh] min-w-0 items-center gap-1", !e && "overflow-hidden"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "size-2.5 shrink-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "shrink-0 font-mono text-[10px]",
					children: r
				}),
				!e && i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 truncate text-muted-foreground/60",
					title: i,
					children: i
				}) : null
			]
		}), i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("grid transition-[grid-template-rows,margin-top] duration-200 ease-out", e ? "mt-0.5 grid-rows-[1fr]" : "grid-rows-[0fr]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "min-h-0 overflow-hidden whitespace-pre-wrap break-words font-mono text-[10px] text-muted-foreground/60",
				children: i
			})
		}) : null] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-agent-row-tool-placeholder": "true",
			"aria-hidden": !0,
			className: "block h-[1lh]"
		})
	});
}
var tabIndexByTabs = /* @__PURE__ */ new WeakMap();
function getIndexedTab(e, t) {
	if (!e) return;
	let n = tabIndexByTabs.get(e);
	return n || (n = new Map(e.map((e) => [e.id, e])), tabIndexByTabs.set(e, n)), n.get(t);
}
function useAgentRowConversationName(e) {
	let t = e.entry.orchestration?.parentPaneKey, n = e.lineage?.depth === 1 && t !== void 0 && parsePaneKey(t)?.tabId === e.tab.id, r = e.rowSource === "subagent" || n, i = useAppStore((e) => !r && e.settings?.tabAutoGenerateTitle === !0), a = useAppStore((t) => r ? void 0 : getIndexedTab(t.tabsByWorktree[e.tab.worktreeId], e.tab.id)), o = r ? null : parsePaneKey(e.paneKey)?.leafId, s = useAppStore((t) => r ? void 0 : resolveAgentRowPaneLiveTitle(t.terminalLayoutsByTabId?.[e.tab.id], t.runtimePaneTitlesByTabId?.[e.tab.id], o));
	return r ? null : getAgentRowConversationName(a ?? e.tab, e.agentType, i, s, e.entry.providerSession?.id);
}
function formatTimeAgo(e, t) {
	let n = t - e;
	return n < 6e4 ? "just now" : `${formatCompactDuration(n)} ago`;
}
function stateDotTooltipLabel(e, t, n) {
	return e.entry.interrupted === !0 ? "Interrupted by user" : t === "unverifiable" ? agentNoUpdateLabel(e.entry, n) : agentStateLabel(t);
}
var DashboardAgentRow_default = import_react.memo(function({ agent: e, onDismiss: t, onActivate: n, now: r, isUnvisited: i = !1, stateDotSize: o = "md", hideIdentityIcon: s = !1, hideExpand: c = !1, isFocusedPane: l = !1, childAgentCount: u, childAgentsExpanded: d = !1, onToggleChildAgents: f, reserveDisclosureGutter: p = !1, hideLineageConnectors: m = !1, sendTargetStatus: g, sendTargetDisabledReason: _, onSendTargetClick: v }) {
	let y = typeof u == "number" && u > 0 && typeof f == "function", [b, x] = (0, import_react.useState)(!1), S = (0, import_react.useCallback)(() => {
		x((e) => !e);
	}, []), C = (0, import_react.useCallback)((t) => {
		t.stopPropagation(), n(e.tab.id, e.activationPaneKey ?? e.paneKey);
	}, [
		n,
		e.tab.id,
		e.activationPaneKey,
		e.paneKey
	]), w = (0, import_react.useCallback)((t) => {
		if (!g) return;
		let n = t.target;
		n instanceof Element && n.closest("button, a, input, textarea, select, [role=\"button\"]") || (t.preventDefault(), t.stopPropagation(), g === "eligible" && v?.(e.paneKey));
	}, [
		e.paneKey,
		v,
		g
	]), T = e.startedAt > 0 ? e.startedAt : null, E = lastEnteredDoneAt(e), D = (useAgentRowConversationName(e) ?? getAgentRowPrimaryText(e.entry)) || agentStateLabel(agentRowDotState(e.state, e.entry.workingMode)), O = e.entry.model?.trim() ?? "", k = e.state === "working" && e.entry.workingMode === "monitoring", A = e.state === "working" && !k, j = showsAgentToolPreview(e.state) && !k, M = j ? e.entry.toolName?.trim() ?? "" : "", N = j ? e.entry.toolInput?.trim() ?? "" : "", P = e.entry.lastAssistantMessage?.trim() ?? "", F = e.entry.interrupted === !0, I = e.lineage, L = I?.depth === 1, R = I?.childCount ?? 0, z = L || R > 0, B = R > 0 ? `${formatAgentTypeLabel(e.agentType)} - dispatched ${R} ${R === 1 ? "agent" : "agents"}` : [formatAgentTypeLabel(e.agentType), O].filter(Boolean).join(" · "), V = F ? "interrupted" : agentRowDotState(e.state, e.entry.workingMode), H = stateDotTooltipLabel(e, V, r), U = V === "unverifiable" ? agentNoUpdateLabel(e.entry, r) : null, W = T === null ? null : formatTimeAgo(T, r), G = E === null ? null : formatTimeAgo(E, r), K = U ?? G ?? W, q = U ? [U] : [];
	W !== null && q.push(`started ${W}`), G !== null && q.push(`done ${G}`);
	let J = _ ? [_, ...q] : q;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onClickCapture: w,
		onClick: C,
		className: cn("group/agent-row relative flex flex-col -ml-2 py-1", L ? "pl-5 pr-2" : "px-2", "cursor-pointer rounded-sm worktree-agent-row-hover", y && "worktree-agent-lineage-parent-row", L && "worktree-agent-lineage-child-row", g === "sending" && "cursor-progress opacity-75", g === "disabled" && "cursor-default opacity-60"),
		"data-focused-agent-pane": l ? "true" : void 0,
		"data-agent-send-target": g,
		title: J.length > 0 ? J.join(" • ") : void 0,
		role: z ? "treeitem" : void 0,
		"aria-level": z ? (I?.depth ?? 0) + 1 : void 0,
		children: [
			R > 0 && !m ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": !0,
				"data-agent-lineage-parent-connector": !0,
				className: "pointer-events-none absolute bottom-[-0.75rem] left-[13px] top-[1.05rem] border-l-[1.5px] border-muted-foreground/45 dark:border-muted-foreground/35"
			}) : null,
			L && !m ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				"aria-hidden": !0,
				"data-agent-lineage-connector": I?.isLastSibling === !1 ? "branch" : "last",
				className: "pointer-events-none absolute bottom-[-1px] left-[13px] top-[-1px] w-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute left-0 border-l-[1.5px] border-muted-foreground/45 dark:border-muted-foreground/35", I?.isFirstSibling ? "top-[-0.9rem]" : "top-[-1px]", I?.isLastSibling ? I?.isFirstSibling ? "h-[1.6rem]" : "h-[calc(0.7rem+1px)]" : "bottom-[-1px]") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-[0.7rem] w-1.5 border-t-[1.5px] border-muted-foreground/45 dark:border-muted-foreground/35" })]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardAgentChildDisclosure, {
						childAgentCount: u,
						childAgentsExpanded: d,
						onToggleChildAgents: f,
						reserveDisclosureGutter: p
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex shrink-0 items-center justify-center",
							"aria-label": H,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentStateDot, {
								state: V,
								size: o,
								title: null
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
						side: "top",
						sideOffset: 4,
						children: H
					})] }),
					!s && e.rowSource !== "subagent" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex shrink-0",
						title: B,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
							agent: agentTypeToIconAgent(e.agentType),
							size: 14
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("block min-w-0 flex-1 overflow-hidden text-[11px] leading-snug", "transition-[height] duration-200 ease-out [interpolate-size:allow-keywords]", b ? "h-auto whitespace-pre-wrap break-words" : "h-[1lh] truncate", i ? "font-semibold text-foreground" : "font-normal text-muted-foreground", l && !i && "text-foreground/90"),
						title: D,
						children: D
					}),
					O && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "max-w-24 shrink-0 truncate font-mono text-[10px] text-muted-foreground/70",
						title: O,
						children: O
					}),
					y && !d && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 text-[10px] font-normal leading-none text-muted-foreground/70 tabular-nums",
						"aria-hidden": !0,
						children: ["+", u]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardAgentRowTrailingControls, {
						paneKey: e.paneKey,
						relativeTimestamp: K,
						expanded: b,
						hideExpand: c,
						hideDismiss: e.rowSource === "subagent",
						sendTargetStatus: g,
						onDismiss: t,
						onToggleExpanded: S,
						onSendTargetClick: v
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardAgentRowToolStep, {
				expanded: b,
				showsTool: j,
				reservesHeight: A,
				toolName: M,
				toolInput: N
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardAgentRowMessage, {
				expanded: b,
				isInterrupted: F,
				lastAssistantMessage: P
			})
		]
	});
});
const EMPTY_SEND_TARGET_INPUTS = Object.freeze({
	agentStatusByPaneKey: {},
	tabsByWorktree: {},
	terminalLayoutsByTabId: {},
	ptyIdsByTabId: {},
	runtimePaneTitlesByTabId: {}
}), EMPTY_SEND_TARGET_CONTROL_INPUTS = Object.freeze({
	targetMode: null,
	agentStatusEpoch: 0
});
function selectSendTargetInputs(e, t) {
	return e.agentSendPopoverTargetMode?.worktreeId === t ? {
		agentStatusByPaneKey: e.agentStatusByPaneKey,
		tabsByWorktree: e.tabsByWorktree,
		terminalLayoutsByTabId: e.terminalLayoutsByTabId,
		ptyIdsByTabId: e.ptyIdsByTabId,
		runtimePaneTitlesByTabId: e.runtimePaneTitlesByTabId
	} : EMPTY_SEND_TARGET_INPUTS;
}
function selectSendTargetControlInputs(e, t) {
	let n = e.agentSendPopoverTargetMode;
	return n?.worktreeId === t ? {
		targetMode: n,
		agentStatusEpoch: e.agentStatusEpoch
	} : EMPTY_SEND_TARGET_CONTROL_INPUTS;
}
function getFocusedAgentPaneKeyForWorktree(e, t) {
	if (e.activeWorktreeId !== t || e.activeTabType !== "terminal") return null;
	let n = e.activeTabId;
	if (!n || !(e.tabsByWorktree[t] ?? []).some((e) => e.id === n)) return null;
	let r = e.terminalLayoutsByTabId[n]?.activeLeafId;
	if (!r || !isTerminalLeafId(r)) return null;
	let i = makePaneKey(n, r);
	return e.agentStatusByPaneKey[i] || e.retainedAgentsByPaneKey[i]?.worktreeId === t || Object.values(e.migrationUnsupportedByPtyId).some((e) => e.paneKey === i) ? i : null;
}
function useFocusedAgentPaneKey(e) {
	return useAppStore((t) => getFocusedAgentPaneKeyForWorktree(t, e));
}
var SUMMARY_STATE_ORDER = [
	"waiting",
	"blocked",
	"working",
	"monitoring",
	"interrupted",
	"done",
	"unverifiable",
	"idle"
];
function getAgentDotState(e) {
	return e.entry.interrupted === !0 ? "interrupted" : agentRowDotState(e.state, e.entry.workingMode);
}
function formatSummaryStateLabel(e) {
	switch (e) {
		case "waiting": return "waiting";
		case "blocked": return "blocked";
		case "interrupted": return "interrupted";
		case "failed": return "failed";
		case "working": return "working";
		case "monitoring": return "monitoring";
		case "done": return "done";
		case "idle": return "idle";
		case "unverifiable": return "not reporting";
		case "permission": return "needs attention";
	}
}
function buildSummaryAgentGroups(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = getAgentDotState(n), r = t.get(e);
		r ? r.push(n) : t.set(e, [n]);
	}
	return SUMMARY_STATE_ORDER.flatMap((e) => {
		let n = t.get(e);
		return n ? [{
			state: e,
			agents: n
		}] : [];
	});
}
function summarizeAgents(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = getAgentDotState(t);
		n.set(e, (n.get(e) ?? 0) + 1);
	}
	let r = SUMMARY_STATE_ORDER.flatMap((e) => {
		let t = n.get(e) ?? 0;
		return t === 0 ? [] : `${t} ${formatSummaryStateLabel(e)}`;
	});
	if (r.length === 1) {
		let n = r[0].replace(/^\d+\s+/, "");
		return e.length === 1 ? `${t} ${n}` : `All ${t} ${n}`;
	}
	return `${t}: ${r.join(", ")}`;
}
function summarizeAgentIdentities(e) {
	return e.map((e) => `${formatAgentTypeLabel(e.agentType)} ${formatSummaryStateLabel(getAgentDotState(e))}`).join("; ");
}
function selectSummaryGroupIconAgents(e, t) {
	let n = /* @__PURE__ */ new Map();
	e.forEach((e, t) => {
		let r = e.agentType ?? "unknown", i = n.get(r);
		i ? i.agents.push(e) : n.set(r, {
			agents: [e],
			firstIndex: t
		});
	});
	let r = [...n.values()].sort((e, t) => t.agents.length - e.agents.length || e.firstIndex - t.firstIndex), i = [];
	for (let e of r) {
		if (i.length >= t) break;
		i.push(e.agents[0]);
	}
	return i;
}
function getCompactAgentPrimary(e, t) {
	return (t ?? getAgentRowPrimaryText(e.entry)) || agentStateLabel(getAgentDotState(e));
}
function getCompactAgentSecondary(e, t, n) {
	return e.entry.interrupted === !0 ? "Interrupted by user" : e.state === "unverifiable" ? agentNoUpdateLabel(e.entry, t) : e.state === "working" && e.entry.workingMode === "monitoring" ? agentStateLabel("monitoring") : formatAgentToolPreview(e.entry, e.state) || (n ?? e.entry.lastAssistantMessage?.trim()) || (e.rowSource === "subagent" && e.entry.prompt?.trim() === e.agentType.trim() ? "" : formatAgentTypeLabel(e.agentType));
}
function getCompactAgentTime(e, t) {
	let n = lastEnteredDoneAt(e);
	if (n !== null) return formatShortTimeAgo(n, t);
	let r = e.startedAt > 0 ? e.startedAt : e.entry.stateStartedAt;
	return r > 0 ? formatShortTimeAgo(r, t) : null;
}
function stopActivationKeyPropagation$1(e) {
	(e.key === "Enter" || e.key === " ") && e.stopPropagation();
}
const CompactAgentRow = import_react.memo(function({ agent: e, now: t, onActivate: n, sendTargetStatus: i, sendTargetDisabledReason: o, onSendTargetClick: s, childAgentCount: c, childAgentsExpanded: l = !1, onToggleChildAgents: u, reserveDisclosureGutter: d = !1, isFocusedPane: f = !1, hideIdentityIcon: p = !1, cacheTimerActive: m = !0 }) {
	let h = typeof c == "number" && c > 0 && typeof u == "function", g = p || e.rowSource === "subagent", _ = getAgentDotState(e), b = getCompactAgentPrimary(e, useAgentRowConversationName(e)), x = e.lineage?.depth === 1, S = e.entry.stateStartedAt, C = e.entry.lastAssistantMessage?.trim() ?? "", w = e.state === "working" && S > 0, T = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		w && C ? T.current = {
			turn: S,
			message: C
		} : w || (T.current = null);
	}, [
		w,
		S,
		C
	]);
	let E = T.current, D = getCompactAgentSecondary(e, t, w && !C && E?.turn === S ? E.message : void 0), O = _ === "monitoring" ? D : b, k = _ === "monitoring" ? b === D ? "" : b : D, A = `${O}${k ? ` - ${k}` : ""}`, j = e.entry.model?.trim() ?? "", M = getCompactAgentTime(e, t), N = usePromptCacheCountdownForPane(e.paneKey, m), P = (0, import_react.useCallback)((t) => {
		t.stopPropagation(), n(e.tab.id, e.activationPaneKey ?? e.paneKey);
	}, [
		e.activationPaneKey,
		e.paneKey,
		e.tab.id,
		n
	]), F = (0, import_react.useCallback)((t) => {
		if (!i) return;
		let n = t.target;
		n instanceof Element && n.closest("button, a, input, textarea, select, [role=\"button\"]") || (t.preventDefault(), t.stopPropagation(), i === "eligible" && s?.(e.paneKey));
	}, [
		e.paneKey,
		s,
		i
	]), I = (0, import_react.useCallback)((e) => {
		e.preventDefault(), e.stopPropagation(), u?.();
	}, [u]), L = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "compact-agent-child-disclosure-button flex size-4 shrink-0 items-center justify-center rounded-sm text-muted-foreground hover:bg-worktree-sidebar-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-worktree-sidebar-ring",
			"aria-label": translate("auto.components.sidebar.worktree.card.compact.agents.a128d7006b", "{{value0}} {{value1}} child {{value2}}", {
				value0: l ? "Hide" : "Show",
				value1: c,
				value2: c === 1 ? "agent" : "agents"
			}),
			"aria-expanded": l,
			onClick: I,
			onKeyDown: stopActivationKeyPropagation$1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
				className: cn("size-3 transition-transform duration-150", l && "rotate-90"),
				"aria-hidden": !0
			})
		}) : d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "size-4 shrink-0",
			"aria-hidden": !0
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentStateDot, {
			state: _,
			size: "sm",
			title: o ? null : void 0,
			tooltipSide: "right"
		}),
		!g && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex shrink-0",
			title: formatAgentTypeLabel(e.agentType),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
				agent: agentTypeToIconAgent(e.agentType),
				size: 13
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1 truncate",
			title: o ? void 0 : A,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: f ? "text-foreground" : "text-muted-foreground/90",
				children: O
			}), k && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: f ? "text-foreground/70" : "text-muted-foreground/65",
				children: [
					" ",
					"- ",
					k
				]
			})]
		}),
		j && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("min-w-0 max-w-24 truncate font-mono text-[10px]", f ? "text-foreground/70" : "text-muted-foreground/70"),
			title: j,
			children: j
		}),
		h && !l && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("shrink-0 text-[10px] tabular-nums", f ? "text-foreground/70" : "text-muted-foreground/70"),
			children: ["+", c]
		}),
		N && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CacheTimer, {
			startedAt: N.startedAt,
			ttlMs: N.ttlMs
		}),
		M && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("shrink-0 text-[10px] tabular-nums", f ? "text-foreground/70" : "text-muted-foreground/60"),
			children: M
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		draggable: !1,
		className: cn("compact-agent-row group/compact-agent-row min-w-0 overflow-hidden cursor-pointer rounded-sm px-1 text-[11px] leading-none", "text-muted-foreground worktree-agent-row-hover", h && "worktree-agent-lineage-parent-row", x && "worktree-agent-lineage-child-row", "flex h-6 items-center gap-1", f && "bg-worktree-sidebar-accent", i === "sending" && "cursor-progress opacity-75", i === "disabled" && "cursor-default opacity-60"),
		onClickCapture: F,
		onClick: P,
		onMouseDown: (e) => e.stopPropagation(),
		onPointerDown: (e) => e.stopPropagation(),
		onDragStart: (e) => e.stopPropagation(),
		"data-focused-agent-pane": f ? "true" : void 0,
		"data-agent-send-target": i,
		role: e.lineage ? "treeitem" : void 0,
		"aria-level": e.lineage ? e.lineage.depth + 1 : void 0,
		"aria-expanded": h ? l : void 0,
		title: o,
		children: L
	});
});
function stopActivationKeyPropagation(e) {
	(e.key === "Enter" || e.key === " ") && e.stopPropagation();
}
function CompactAgentExpansion({ expanded: e, contentClassName: t, children: n }) {
	let r = (0, import_react.useRef)(e);
	e && (r.current = !0);
	let i = e || r.current;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("compact-agent-expansion-grid", e && "compact-agent-expansion-grid-expanded"),
		"aria-hidden": !e,
		inert: !e,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 overflow-hidden",
			children: i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("compact-agent-expansion-content flex flex-col gap-0.5 pt-0.5", t),
				children: n
			})
		})
	});
}
function CompactAgentSummaryButton({ agents: e, subjectLabel: t, expanded: n, onToggle: i }) {
	let o = summarizeAgents(e, t), s = buildSummaryAgentGroups(e), c = s.slice(0, 3), l = s.slice(c.length).reduce((e, t) => e + t.agents.length, 0), u = summarizeAgentIdentities(e), d = (0, import_react.useCallback)((e) => {
		e.stopPropagation();
	}, []), f = (0, import_react.useCallback)((e) => {
		e.preventDefault(), e.stopPropagation(), i();
	}, [i]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		draggable: !1,
		className: cn("compact-agent-summary-button group/agent-summary flex h-6 w-full min-w-0 items-center gap-1 rounded-sm", "px-1 text-left text-[11px] leading-none text-muted-foreground", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-worktree-sidebar-ring", "hover:bg-worktree-sidebar-accent/55 dark:hover:bg-worktree-sidebar-foreground/[0.035]", n ? "compact-agent-summary-button-expanded" : "border border-worktree-sidebar-border/70 bg-worktree-sidebar-accent/35"),
		"aria-label": n ? translate("auto.components.sidebar.worktree.card.compact.agents.0c1debfe84", "Collapse {{value0}}", { value0: t }) : translate("auto.components.sidebar.worktree.card.compact.agents.289a1d2ca7", "Expand {{value0}}. {{value1}}", {
			value0: o,
			value1: u
		}),
		"aria-expanded": n,
		onClick: f,
		onKeyDown: stopActivationKeyPropagation,
		onMouseDown: d,
		onPointerDown: d,
		onDragStart: d,
		children: [n ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0 flex-1 truncate px-1 font-medium text-muted-foreground",
			children: t
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex min-w-0 flex-1 items-center gap-1 overflow-hidden",
			"aria-hidden": !0,
			children: c.map((e) => {
				let t = selectSummaryGroupIconAgents(e.agents, 3), n = Math.max(0, e.agents.length - t.length);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex min-w-0 shrink-0 items-center gap-0.5 rounded-sm bg-worktree-sidebar/70 px-1 py-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentStateDot, {
							state: e.state,
							size: "sm",
							tooltipSide: "right"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex shrink-0 items-center -space-x-0.5 pl-0.5",
							children: t.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-4 items-center justify-center rounded-full border border-worktree-sidebar-border/70 bg-worktree-sidebar",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
									agent: agentTypeToIconAgent(e.agentType),
									size: 13
								})
							}, e.paneKey))
						}),
						n > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "shrink-0 text-[10px] tabular-nums text-muted-foreground/70",
							children: ["+", n]
						})
					]
				}, e.state);
			})
		}), l > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "shrink-0 text-[10px] tabular-nums text-muted-foreground/70",
			children: ["+", l]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
			className: cn("size-3 shrink-0 transition-transform duration-150", !n && "-rotate-90"),
			"aria-hidden": !0
		})]
	});
}
var DEFAULT_EXPANSION_STATE = {
	collapsedLineageParents: /* @__PURE__ */ new Set(),
	compactRootListExpanded: !1
}, expansionByWorktreeId = /* @__PURE__ */ new Map();
function trimPersistedExpansions() {
	for (; expansionByWorktreeId.size > 512;) {
		let e = expansionByWorktreeId.keys().next().value;
		if (e === void 0) break;
		expansionByWorktreeId.delete(e);
	}
}
function readExpansionState(e) {
	return expansionByWorktreeId.get(e) ?? DEFAULT_EXPANSION_STATE;
}
function persistExpansionState(e, t) {
	expansionByWorktreeId.delete(e), (t.compactRootListExpanded || t.collapsedLineageParents.size > 0) && (expansionByWorktreeId.set(e, t), trimPersistedExpansions());
}
function useWorktreeAgentExpansionState(e) {
	let [t, n] = (0, import_react.useState)(() => ({
		worktreeId: e,
		state: readExpansionState(e)
	})), r = t.worktreeId === e ? t.state : readExpansionState(e), i = (0, import_react.useCallback)((t) => {
		persistExpansionState(e, t), n({
			worktreeId: e,
			state: t
		});
	}, [e]), a = (0, import_react.useCallback)((t) => {
		let n = readExpansionState(e), r = new Set(n.collapsedLineageParents);
		r.has(t) ? r.delete(t) : r.add(t), i({
			...n,
			collapsedLineageParents: r
		});
	}, [i, e]), o = (0, import_react.useCallback)(() => {
		let t = readExpansionState(e);
		i({
			...t,
			compactRootListExpanded: !t.compactRootListExpanded
		});
	}, [i, e]);
	return {
		collapsedLineageParents: r.collapsedLineageParents,
		compactRootListExpanded: r.compactRootListExpanded,
		toggleLineageParent: a,
		toggleCompactRootList: o
	};
}
function selectAcknowledgedAgentTimes(e, t) {
	return t.map((t) => e.acknowledgedAgentsByPaneKey[t.paneKey] ?? 0);
}
const SUPPRESS_WORKTREE_LIST_SCROLL_ADJUSTMENT_EVENT = "orca-suppress-worktree-list-scroll-adjustment";
var dispatchSuppressScrollAdjustment = () => {
	window.dispatchEvent(new CustomEvent(SUPPRESS_WORKTREE_LIST_SCROLL_ADJUSTMENT_EVENT));
};
function revealCompactAgentCard(e) {
	let t = e?.closest("[data-worktree-sidebar]"), n = e?.closest("[role=\"option\"]");
	!(t instanceof HTMLElement) || !n || revealElementInScrollContainer(t, n, "auto");
}
var WorktreeCardAgents = import_react.memo(function({ worktreeId: e, agents: t, className: n }) {
	let r = useWorktreeAgentRows(e, t === void 0), i = t ?? r;
	return i.length === 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardAgentsBody, {
		worktreeId: e,
		agents: i,
		className: n
	});
}), WorktreeCardAgentsBody = import_react.memo(function({ worktreeId: e, agents: t, className: n }) {
	let i = useAppStore((e) => e.agentActivityDisplayMode) ?? "compact", o = useAppStore((e) => e.dropAgentStatus), s = useAppStore((e) => e.dismissRetainedAgent), { targetMode: c, agentStatusEpoch: u } = useAppStore(useShallow((t) => selectSendTargetControlInputs(t, e))), d = useAppStore(useShallow((t) => selectSendTargetInputs(t, e))), f = useAppStore((e) => e.sendPromptToSidebarAgentTarget), p = useFocusedAgentPaneKey(e), m = (0, import_react.useRef)(null), h = useAppStore(useShallow((e) => selectAcknowledgedAgentTimes(e, t))), g = (0, import_react.useMemo)(() => {
		let e = {};
		for (let [n, r] of t.entries()) {
			let t = h[n] ?? 0;
			e[r.paneKey] = t < r.entry.stateStartedAt;
		}
		return e;
	}, [t, h]), _ = (0, import_react.useCallback)((e) => {
		o(e), s(e);
	}, [o, s]), v = c !== null, y = (0, import_react.useMemo)(() => v ? new Map(deriveRunningAgentSendTargets(d, e).map((e) => [e.paneKey, c?.status === "sending" && c.sendingPaneKey === e.paneKey ? {
		status: "sending",
		disabledReason: "Sending..."
	} : e.disabledReason ? {
		status: e.status,
		disabledReason: e.disabledReason
	} : { status: e.status }])) : /* @__PURE__ */ new Map(), [
		u,
		c?.sendingPaneKey,
		c?.status,
		v,
		d,
		e
	]), b = (0, import_react.useCallback)((e) => {
		f(e);
	}, [f]), x = (0, import_react.useCallback)((t, n) => {
		let r = parsePaneKey(n);
		if (!r) {
			console.warn("[WorktreeCardAgents] malformed paneKey, skipping pane focus", n), dismissStaleAgentRowByKey(n);
			return;
		}
		if (r.tabId !== t) {
			console.warn("[WorktreeCardAgents] paneKey tabId mismatch, dismissing row", {
				tabId: t,
				paneKey: n
			}), dismissStaleAgentRowByKey(n);
			return;
		}
		if (activateAndRevealWorktree(e), (useAppStore.getState().tabsByWorktree[e] ?? []).some((e) => e.id === t)) activateTabAndFocusPane(t, r.leafId, {
			ackPaneKeyOnSuccess: n,
			flashFocusedPane: !0,
			scrollToBottomIfOutputSinceLastView: !0
		});
		else if (!activateStructuredAgentSessionTab({
			worktreeId: e,
			tabId: t
		})) {
			if (useAppStore.getState().agentStatusByPaneKey[n]?.worktreeId === e) return;
			dismissStaleAgentRowByKey(n);
		}
	}, [e]), S = (0, import_react.useCallback)(() => {}, []), C = useNow(3e4), { rootRows: w, childrenByParentPaneKey: T } = (0, import_react.useMemo)(() => buildAgentRowLineageTree(t), [t]), E = T.size > 0, { collapsedLineageParents: D, compactRootListExpanded: O, toggleLineageParent: k, toggleCompactRootList: A } = useWorktreeAgentExpansionState(e), j = (0, import_react.useRef)(O);
	(0, import_react.useLayoutEffect)(() => {
		let e = j.current;
		if (j.current = O, !e && O && i === "compact") {
			dispatchSuppressScrollAdjustment();
			let e = requestAnimationFrame(() => {
				revealCompactAgentCard(m.current);
			});
			return () => cancelAnimationFrame(e);
		}
	}, [i, O]);
	let M = (0, import_react.useCallback)((e) => {
		dispatchSuppressScrollAdjustment(), k(e);
	}, [k]), N = (0, import_react.useCallback)((e) => {
		e.stopPropagation();
	}, []), P = w.some((e) => (T.get(e.paneKey) ?? []).length > 0), F = (e, t = /* @__PURE__ */ new Set()) => {
		if (t.has(e.paneKey)) return null;
		let n = T.get(e.paneKey) ?? [], r = n.length > 0, i = t.size === 0, a = !D.has(e.paneKey), o = v ? y.get(e.paneKey) ?? {
			status: "disabled",
			disabledReason: "Agent is not available"
		} : void 0, s = new Set(t);
		return s.add(e.paneKey), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardAgentRow_default, {
			agent: e,
			onDismiss: _,
			onActivate: e.rowSource === "retained" ? S : x,
			now: C,
			isUnvisited: g[e.paneKey] ?? !1,
			stateDotSize: "sm",
			hideExpand: !0,
			childAgentCount: r ? n.length : void 0,
			childAgentsExpanded: a,
			onToggleChildAgents: r ? () => M(e.paneKey) : void 0,
			reserveDisclosureGutter: i && P && !r,
			isFocusedPane: e.paneKey === p,
			sendTargetStatus: o?.status,
			sendTargetDisabledReason: o?.disabledReason,
			onSendTargetClick: v ? b : void 0,
			hideLineageConnectors: !0
		}), r && a ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "worktree-agent-lineage-children",
			children: n.map((e) => F(e, s))
		}) : null] }, e.paneKey);
	}, I = (e, t = /* @__PURE__ */ new Set(), n = !0) => {
		if (t.has(e.paneKey)) return null;
		let r = T.get(e.paneKey) ?? [], i = r.length > 0, a = t.size === 0, o = !D.has(e.paneKey), s = v ? y.get(e.paneKey) ?? {
			status: "disabled",
			disabledReason: "Agent is not available"
		} : void 0, c = new Set(t);
		return c.add(e.paneKey), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompactAgentRow, {
			agent: e,
			now: C,
			onActivate: e.rowSource === "retained" ? S : x,
			sendTargetStatus: s?.status,
			sendTargetDisabledReason: s?.disabledReason,
			onSendTargetClick: v ? b : void 0,
			childAgentCount: i ? r.length : void 0,
			childAgentsExpanded: o,
			onToggleChildAgents: i ? () => M(e.paneKey) : void 0,
			reserveDisclosureGutter: a && P && !i,
			isFocusedPane: e.paneKey === p,
			cacheTimerActive: n
		}), i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompactAgentExpansion, {
			expanded: o,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "worktree-agent-lineage-children flex flex-col gap-0.5",
				children: r.map((e) => I(e, c, n && o))
			})
		}) : null] }, e.paneKey);
	};
	if (i === "compact") {
		let e = E ? w : t, i = e.length > 1 && !v, o = `${E ? w.length : t.length} agents`;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: m,
			className: cn("flex flex-col mt-1 gap-0.5", n),
			onClick: N,
			onDoubleClick: N,
			onMouseDown: N,
			onPointerDown: N,
			role: E ? "tree" : "group",
			"aria-label": translate("auto.components.sidebar.WorktreeCardAgents.1b0a156717", "Agents"),
			"data-compact-agent-list": "true",
			children: t.length === 0 ? null : i ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("compact-agent-summary-panel", O && "compact-agent-summary-panel-expanded"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompactAgentSummaryButton, {
					agents: e,
					subjectLabel: o,
					expanded: O,
					onToggle: () => {
						dispatchSuppressScrollAdjustment(), A();
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompactAgentExpansion, {
					expanded: O,
					children: w.map((e) => I(e, /* @__PURE__ */ new Set(), O))
				})]
			}) : w.map((e) => I(e))
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col mt-1", n),
		onClick: N,
		onDoubleClick: N,
		onMouseDown: N,
		onPointerDown: N,
		role: E ? "tree" : "group",
		"aria-label": translate("auto.components.sidebar.WorktreeCardAgents.1b0a156717", "Agents"),
		children: w.map((e) => F(e))
	});
}), WorktreeCardAgents_default = WorktreeCardAgents;
function AutoRenameFailedDialog({ open: e, onOpenChange: t, worktreeId: n, worktreeName: a, error: o }) {
	let [s, c] = (0, import_react.useState)(!1), [l, u] = (0, import_react.useState)(null), d = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => () => {
		d.current !== null && window.clearTimeout(d.current);
	}, []), (0, import_react.useEffect)(() => {
		if (!e) return;
		let t = !1;
		return u(null), window.api.worktrees.getBranchRenameFailureOutput({ worktreeId: n }).then((e) => {
			t || u(e);
		}).catch(() => {
			t || u(null);
		}), () => {
			t = !0;
		};
	}, [
		o,
		e,
		n
	]);
	let f = l ?? o, p = (0, import_react.useCallback)(async () => {
		try {
			await window.api.ui.writeClipboardText(f), c(!0), d.current !== null && window.clearTimeout(d.current), d.current = window.setTimeout(() => {
				d.current = null, c(!1);
			}, 1500);
		} catch {}
	}, [f]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
					className: "flex items-center gap-2 text-destructive",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0" }), translate("auto.components.sidebar.AutoRenameFailedDialog.ca3b225195", "Branch auto-name failed")]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						translate("auto.components.sidebar.AutoRenameFailedDialog.ff62a18580", "Orca couldn't generate a branch name for"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: a
						}),
						" ",
						translate("auto.components.sidebar.AutoRenameFailedDialog.3afcad0497", "from the first agent message.")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-foreground",
						children: translate("auto.components.sidebar.AutoRenameFailedDialog.74fc00776f", "Error details")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon-xs",
							onClick: p,
							"aria-label": s ? translate("auto.components.sidebar.AutoRenameFailedDialog.a23b22d16f", "Copied") : translate("auto.components.sidebar.AutoRenameFailedDialog.eab8b45238", "Copy error"),
							className: "absolute right-1.5 top-1.5 text-muted-foreground hover:text-foreground",
							children: s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "scrollbar-sleek max-h-[40vh] overflow-auto rounded-md border border-border/60 bg-muted/40 py-3 pl-3 pr-9 font-mono text-[11px] leading-4 whitespace-pre-wrap [overflow-wrap:anywhere] text-foreground",
							children: f
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					onClick: () => t(!1),
					children: translate("auto.components.sidebar.AutoRenameFailedDialog.aed1623b1e", "Close")
				}) })
			]
		})
	});
}
var liveAgentGeneration = null;
function selectWorktreeIdsWithLiveAgent(e) {
	let t = getAgentStatusEpochNow(e.agentStatusEpoch ?? 0);
	if (liveAgentGeneration && liveAgentGeneration.agentStatusByPaneKey === e.agentStatusByPaneKey && liveAgentGeneration.tabsByWorktree === e.tabsByWorktree && liveAgentGeneration.agentStatusNow === t) return liveAgentGeneration.worktreeIds;
	let n = getWorktreeIdsWithLiveAgent(e.agentStatusByPaneKey, e.tabsByWorktree, t);
	return liveAgentGeneration = {
		agentStatusByPaneKey: e.agentStatusByPaneKey,
		tabsByWorktree: e.tabsByWorktree,
		agentStatusNow: t,
		worktreeIds: n
	}, n;
}
function useIsSleepingWorktree(e) {
	return useAppStore((t) => isInactiveWorkspace(e, t.tabsByWorktree, t.ptyIdsByTabId, t.browserTabsByWorktree, selectWorktreeIdsWithLiveAgent(t)));
}
var PROJECT_GROUP_HEADER_KEY_PREFIX = "repo:", PROVIDER_PROJECT_HEADER_KEY_PREFIX = "project:";
function resolveRepoHeaderColor(e) {
	let t = normalizeRepoBadgeColor(e);
	return t ? REPO_COLORS.find((e) => e === t) ?? t : DEFAULT_REPO_BADGE_COLOR;
}
function resolveProjectGroupHeaderColor(e) {
	if (!(e.groupBy !== "repo" || !e.headerKey.startsWith(PROJECT_GROUP_HEADER_KEY_PREFIX) && !e.headerKey.startsWith(PROVIDER_PROJECT_HEADER_KEY_PREFIX))) return resolveRepoHeaderColor(e.badgeColor);
}
var PILL_BASE = "h-4 shrink-0 gap-0.5 rounded !px-0.5 text-[10px] font-medium leading-none has-[>svg]:!px-0.5", PILL_QUIET = "text-muted-foreground border border-worktree-sidebar-border bg-worktree-sidebar shadow-none hover:bg-worktree-sidebar-accent hover:text-foreground focus-visible:border-worktree-sidebar-border focus-visible:ring-1 focus-visible:ring-worktree-sidebar-ring", PILL_FAILED = "text-destructive border border-destructive/40 bg-destructive/10 hover:bg-destructive/15 hover:text-destructive focus-visible:border-destructive/40 focus-visible:ring-1 focus-visible:ring-worktree-sidebar-ring";
function PassiveGlyph({ icon: e, tooltip: t, accessibleName: n, targetLabel: r }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "shrink-0 inline-flex items-center",
			"data-ssh-target-label": r,
			children: [e, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: n
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "right",
		sideOffset: 8,
		children: t
	})] });
}
function WorktreeCardSshHostControl({ targetId: e, targetLabel: t, status: n, targetRemoved: o, sshOwnerEnvironmentId: s, iconOnly: c, onPointerDown: l }) {
	let u = useAppStore((e) => e.setSshConnectionState), d = useSshConnectInFlight(e), f = (0, import_react.useCallback)(async () => {
		if (!(isSshConnectInFlight(e) || isConnectingSshStatus(n))) try {
			if (s) await trackSshConnect(e, connectRuntimeEnvironmentSshTarget(s, e));
			else {
				let t = await withUiConnectTimeout(trackSshConnect(e, window.api.ssh.connect({ targetId: e })), SSH_RECONNECT_UI_TIMEOUT_MS);
				t && u(e, t);
			}
		} catch (e) {
			toast.error(e instanceof Error ? e.message : translate("auto.components.sidebar.WorktreeCardSshHostControl.connectFailed", "SSH connection failed")), s ? resyncRuntimeEnvironmentSshTargets(s).catch(() => {}) : (async () => {
				let e = await window.api.ssh.listTargets();
				useAppStore.getState().setSshTargetsMetadata(e);
				let t = await window.api.ssh.listRemovedTargetLabels();
				useAppStore.getState().setRemovedSshTargetLabels(t);
			})().catch(() => {});
		}
	}, [
		u,
		s,
		n,
		e
	]);
	if (n === null || n === "connected") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PassiveGlyph, {
		targetLabel: t,
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-3 text-muted-foreground" }),
		tooltip: translate("auto.components.sidebar.WorktreeCardSshHostControl.connectedTooltip", "Project on SSH host"),
		accessibleName: translate("auto.components.sidebar.WorktreeCardSshHostControl.connectedName", "Project on SSH host {{value0}}", { value0: t })
	});
	if (o) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PassiveGlyph, {
		targetLabel: t,
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerOff, { className: "size-3 text-muted-foreground" }),
		tooltip: translate("auto.components.sidebar.WorktreeCardSshHostControl.removedTooltip", "SSH host removed — reconnect unavailable"),
		accessibleName: translate("auto.components.sidebar.WorktreeCardSshHostControl.removedName", "SSH host {{value0}} was removed", { value0: t })
	});
	let p = d || isConnectingSshStatus(n), m = canConnectSshStatus(n);
	if (!p && !m) return null;
	let h = n === "error" || n === "reconnection-failed" || n === "auth-failed", g = p ? sshConnectingLabel() : sshConnectVerb(n), _ = p ? translate("auto.components.sidebar.WorktreeCardSshHostControl.connectingName", "Connecting to SSH host {{value0}}", { value0: t }) : n === "auth-failed" ? translate("auto.components.sidebar.WorktreeCardSshHostControl.authFailedName", "Reconnect SSH host {{value0}} — authentication failed", { value0: t }) : h ? translate("auto.components.sidebar.WorktreeCardSshHostControl.retryName", "Retry SSH connection to {{value0}}", { value0: t }) : translate("auto.components.sidebar.WorktreeCardSshHostControl.connectName", "Connect to SSH host {{value0}}", { value0: t }), v = p ? _ : n === "auth-failed" ? translate("auto.components.sidebar.WorktreeCardSshHostControl.authFailedTooltip", "{{value0}} · authentication failed", { value0: t }) : h ? translate("auto.components.sidebar.WorktreeCardSshHostControl.failedTooltip", "{{value0}} · connection failed", { value0: t }) : _;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: "ghost",
			className: cn(PILL_BASE, h ? PILL_FAILED : PILL_QUIET, c && "w-4 justify-center !px-0 has-[>svg]:!px-0"),
			"aria-label": _,
			"data-ssh-target-label": t,
			"aria-busy": p || void 0,
			"aria-disabled": p || void 0,
			onPointerDown: l,
			onKeyDown: (e) => {
				(e.key === "Enter" || e.key === " ") && e.stopPropagation();
			},
			onClick: (e) => {
				e.stopPropagation(), e.preventDefault(), !p && f();
			},
			children: [p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-2.5 animate-spin motion-reduce:animate-none" }) : c && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerOff, { className: "size-2.5" }), !c && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-left",
				children: g
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "right",
		sideOffset: 8,
		children: v
	})] });
}
function RepoIdentityChip({ repo: e, children: t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-worktree-sidebar-border bg-worktree-sidebar-accent/55",
			"aria-label": translate("auto.components.sidebar.WorktreeCard.35ccfe2475", "Project {{value0}}", { value0: e.displayName }),
			children: t
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "right",
		sideOffset: 8,
		children: e.displayName
	})] });
}
function WorktreeCardHeader({ card: e, presentation: t }) {
	let { worktree: n, repo: o, affiliateListMode: s, renameRowKey: c, compactCards: l, newCardStyle: u, parsedRepoHost: d, sshTargetLabel: f, sshStatus: m, sshTargetRemoved: h, sshOwnerEnvironmentId: g, stopQuickActionPointerPropagation: _, isRuntimeDisconnected: v, runtimeHostLabel: y, visibleCardTitle: b, isDeleting: x, showUnreadEmphasis: C, setTitleRenaming: w, handleRenameTitle: T, renamingWorktreeId: E, setRenamingWorktreeId: D, titleRenaming: O, handleOpenRenameErrorDialog: k, isFolder: A, handleWorkspaceQuickAction: j } = e, { showPinnedRepoIcon: M, showInlineRepoBadge: N, showHeaderActions: P, showTitleRowPrimary: F, showDeleteQuickAction: I, showTitleRowIndicators: L, titleRowIndicators: z, titleWrapper: B } = t;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 items-center justify-between gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 items-center gap-1.5",
			children: [
				M && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoIdentityChip, {
					repo: o,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoIconGlyph, {
						repoIcon: o.repoIcon,
						color: resolveRepoHeaderColor(o.badgeColor),
						className: "size-full",
						iconClassName: "size-3"
					})
				}),
				o?.connectionId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardSshHostControl, {
					targetId: o.connectionId,
					targetLabel: f || o.displayName,
					status: m,
					targetRemoved: h,
					sshOwnerEnvironmentId: g,
					iconOnly: l || u,
					onPointerDown: _
				}),
				!o?.connectionId && d?.kind === "runtime" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 inline-flex items-center",
						children: v ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerOff, { className: "size-3 text-destructive" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-3 text-muted-foreground" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "right",
					sideOffset: 8,
					children: v ? y ? translate("auto.components.sidebar.WorktreeCard.runtimeHostDisconnectedNamed", "{{hostName}} disconnected", { hostName: y }) : translate("auto.components.sidebar.WorktreeCard.runtimeHostDisconnected", "Server disconnected") : y ? translate("auto.components.sidebar.WorktreeCard.runtimeHostProjectNamed", "Project on {{hostName}}", { hostName: y }) : translate("auto.components.sidebar.WorktreeCard.runtimeHostProject", "Project on Orca server")
				})] }),
				N && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoIdentityChip, {
					repo: o,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoIconGlyph, {
						repoIcon: o.repoIcon,
						color: resolveRepoHeaderColor(o.badgeColor),
						className: "size-full",
						iconClassName: "size-3"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeTitleInlineRename, {
					displayName: b,
					disabled: x || s,
					showUnreadEmphasis: C,
					dimReadTitle: u,
					className: "text-[13px] leading-5",
					editingClassName: "flex-1",
					titleWrapper: B,
					onEditingChange: s ? void 0 : w,
					onRename: T,
					beginEditing: !s && shouldBeginWorktreeRename(E, n.id, c),
					onBeginEditingConsumed: s ? void 0 : () => D(null)
				}),
				typeof n.firstAgentMessageRenameError == "string" && n.firstAgentMessageRenameError.length > 0 && !O ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "ghost",
						onPointerDown: _,
						onClick: k,
						onDoubleClick: k,
						className: "h-4 shrink-0 gap-0.5 rounded !px-0.5 text-[10px] font-medium leading-none text-destructive border border-destructive/40 bg-destructive/10 hover:bg-destructive/15 hover:text-destructive has-[>svg]:!px-0.5",
						"aria-label": translate("auto.components.sidebar.WorktreeCard.02e19349f4", "Auto-rename failed: view error"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-2.5" }), translate("auto.components.sidebar.WorktreeCard.74522ee457", "rename failed")]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "right",
					sideOffset: 8,
					children: translate("auto.components.sidebar.WorktreeCard.4eba2ea99e", "Auto-name failed. Click to see details.")
				})] }) : null,
				!l && n.isMainWorktree && !A && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "h-[16px] px-1.5 text-[10px] font-medium rounded shrink-0 leading-none text-foreground/70 border-foreground/20 bg-foreground/[0.06]",
						children: translate("auto.components.sidebar.WorktreeCard.7d517f82e2", "primary")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "right",
					sideOffset: 8,
					children: translate("auto.components.sidebar.WorktreeCard.0777de5970", "Primary worktree (original clone directory)")
				})] }),
				n.isSparse && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
					asChild: !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "h-[16px] px-1.5 text-[10px] font-medium rounded shrink-0 leading-none text-amber-700 dark:text-amber-300 border-amber-500/30 bg-amber-500/5",
						children: translate("auto.components.sidebar.WorktreeCard.4f964d5e8c", "sparse")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
					side: "right",
					sideOffset: 8,
					className: "max-w-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: translate("auto.components.sidebar.WorktreeCard.0f33af979b", "Partial checkout. Files outside these paths are not on disk.") }), n.sparseDirectories && n.sparseDirectories.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[11px] opacity-80",
							children: formatSparseDirectoryPreview(n.sparseDirectories)
						}) : null]
					})
				})] }),
				L && z
			]
		}), P && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ml-auto flex shrink-0 items-center justify-center gap-1 pr-1.5",
			children: [F && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 inline-flex items-center",
					"aria-label": translate("auto.components.sidebar.WorktreeCard.0d224eff10", "Primary worktree"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-amber-400 text-amber-400" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
				side: "right",
				sideOffset: 8,
				children: translate("auto.components.sidebar.WorktreeCard.0777de5970", "Primary worktree (original clone directory)")
			})] }), I && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"data-workspace-board-preserve-open": "",
					onPointerDown: _,
					onClick: j,
					className: cn("inline-flex size-4 items-center justify-center rounded bg-transparent opacity-0 transition-colors transition-opacity", "group-hover/worktree-card:opacity-100 group-focus-within/worktree-card:opacity-100 focus-visible:opacity-100", "text-muted-foreground hover:bg-destructive/10 hover:text-destructive focus-visible:bg-destructive/10 focus-visible:text-destructive"),
					"aria-label": translate("auto.components.sidebar.WorktreeCard.6f09f58541", "Delete workspace"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
				side: "right",
				sideOffset: 8,
				children: translate("auto.components.sidebar.WorktreeCard.6f09f58541", "Delete workspace")
			})] })]
		})]
	});
}
function isSidebarLabelTruncated(e) {
	return e.scrollWidth > e.clientWidth;
}
function TruncatedSidebarLabel({ text: e, className: t, tooltipEnabled: n = !0, tooltipSide: r = "right", tooltipSideOffset: i = 8 }) {
	let o = import_react.useRef(null), s = import_react.useRef(null), c = import_react.useRef(null), [l, u] = (0, import_react.useState)(!1), d = (0, import_react.useCallback)((e) => {
		let t = e ? isSidebarLabelTruncated(e) : !1;
		u((e) => e === t ? e : t);
	}, []), f = (0, import_react.useCallback)((e) => {
		if (s.current?.disconnect(), s.current = null, c.current?.(), c.current = null, o.current = e, !e) {
			d(null);
			return;
		}
		d(e);
		let t = () => d(e);
		if (typeof ResizeObserver > "u") {
			window.addEventListener("resize", t), c.current = () => window.removeEventListener("resize", t);
			return;
		}
		let n = new ResizeObserver(t);
		n.observe(e), s.current = n;
	}, [d]);
	(0, import_react.useLayoutEffect)(() => {
		d(o.current);
	}, [d, e]);
	let p = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref: f,
		className: cn("block min-w-0 truncate", t),
		children: e
	});
	return !n || !l ? p : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: p
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: r,
		sideOffset: i,
		className: "max-w-80 whitespace-normal break-all text-left",
		children: e
	})] });
}
function WorktreeCardMetaRow({ card: e, presentation: t }) {
	let { worktree: n, repo: r, hostContextLabel: i, identityDisplay: a, isFolder: o, newCardStyle: s, branch: c, detachedHeadDisplay: l, conflictOperation: u, cacheStartedAt: d, cacheTtlMs: f } = e, { showRepoBadgeInMetaRow: p, showHostContextBadge: h, showIdentityInNewCard: g, hasHoverDetails: _, showBranch: y, showDetachedHeadInMetaRow: b, showConflictOperationBadge: x, showMetaRowDetails: S, detailsAndPorts: C } = t;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1.5 min-w-0",
		"data-worktree-card-meta-row": "",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden",
			children: [
				p && r && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 shrink-0 px-1.5 py-0.5 rounded-[4px] bg-accent border border-border dark:bg-accent/50 dark:border-border/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RepoBadgeMark, { color: r.badgeColor }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-semibold text-foreground truncate max-w-[6rem] leading-none lowercase",
						children: r.displayName
					})]
				}),
				h && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeHostContextBadge, { label: i }),
				g ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedSidebarLabel, {
					text: a,
					className: "text-[11px] text-muted-foreground leading-none",
					tooltipEnabled: !_
				}) : o && !s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 truncate font-mono text-[11px] leading-none text-muted-foreground",
					title: n.path,
					children: getDirectoryName(n.path)
				}) : y ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruncatedSidebarLabel, {
					text: c,
					className: "text-[11px] text-muted-foreground leading-none",
					tooltipEnabled: !_
				}) : b && l ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetachedHeadBadge, {
					display: l,
					label: "sidebar",
					side: "right",
					className: "h-[16px]"
				}) : null,
				x && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "outline",
					className: "h-[16px] px-1.5 text-[10px] font-medium rounded shrink-0 gap-1 text-amber-600 border-amber-500/30 bg-amber-500/5 dark:text-amber-400 dark:border-amber-400/30 dark:bg-amber-400/5 leading-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitMerge, { className: "size-2.5" }), CONFLICT_OPERATION_LABELS[u]]
				}),
				d != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CacheTimer, {
					startedAt: d,
					ttlMs: f
				})
			]
		}), S && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ml-auto flex shrink-0 items-center gap-1 pr-1.5",
			children: C
		})]
	});
}
var reminderStateByRuntimeKey = /* @__PURE__ */ new Map(), nextActivationId = 0;
function evictLinearAgentSkillSetupReminderStateIfAtCapacity() {
	if (reminderStateByRuntimeKey.size < 256) return;
	let e = reminderStateByRuntimeKey.keys().next().value;
	for (let [t, n] of reminderStateByRuntimeKey) if (n.activeToastId === void 0) {
		e = t;
		break;
	}
	e !== void 0 && reminderStateByRuntimeKey.delete(e);
}
function createLinearAgentSkillSetupActivationId() {
	let e = `linear-agent-skill-setup-${nextActivationId}`;
	return nextActivationId += 1, e;
}
function getLinearAgentSkillSetupReminderState(e) {
	let t = reminderStateByRuntimeKey.get(e);
	if (t) return reminderStateByRuntimeKey.delete(e), reminderStateByRuntimeKey.set(e, t), t;
	let n = {
		modalShown: !1,
		toastCount: 0,
		snoozed: !1
	};
	return evictLinearAgentSkillSetupReminderStateIfAtCapacity(), reminderStateByRuntimeKey.set(e, n), n;
}
function getExistingLinearAgentSkillSetupReminderState(e) {
	return reminderStateByRuntimeKey.get(e);
}
function snoozeLinearAgentSkillSetupReminderToast(e) {
	getLinearAgentSkillSetupReminderState(e).snoozed = !0;
}
function dismissLinearAgentSkillSetupReminderToast(e) {
	let t = getExistingLinearAgentSkillSetupReminderState(e);
	toast.dismiss(getLinearAgentSkillSetupReminderToastId(e)), t && (t.activeToastId = void 0);
}
function getLinearAgentSkillSetupReminderToastId(e) {
	return `linear-agent-skill-setup-${e}`;
}
function resetLinearAgentSkillSetupReminderToastForRuntime(e) {
	let t = getExistingLinearAgentSkillSetupReminderState(e);
	t && (t.modalShown = !1, t.snoozed = !1, t.toastCount = 0, t.lastToastActivationId = void 0), dismissLinearAgentSkillSetupReminderToast(e);
}
function useLinearAgentSkillSetupReminderToast({ localDismissStorageKey: e, missingSetup: t, setupDialogOpen: n, surface: i, toastDescription: a, toastTitle: o, openSetupDialog: s }) {
	let c = (0, import_react.useRef)(void 0);
	c.current === void 0 && (c.current = createLinearAgentSkillSetupActivationId()), (0, import_react.useEffect)(() => {
		if (i !== "modal" || !t) return;
		let n = getLinearAgentSkillSetupReminderState(e);
		n.modalShown || (n.modalShown = !0, n.lastToastActivationId = c.current, s());
	}, [
		e,
		t,
		s,
		i
	]), (0, import_react.useEffect)(() => {
		if (i !== "modal" || !t || n) return;
		let l = getLinearAgentSkillSetupReminderState(e), u = c.current;
		if (!l.modalShown || !l.snoozed || l.toastCount >= 3 || l.lastToastActivationId === u) return;
		l.toastCount += 1, l.lastToastActivationId = u;
		let d = getLinearAgentSkillSetupReminderToastId(e), f = () => {
			let t = getExistingLinearAgentSkillSetupReminderState(e);
			t?.activeToastId === d && (t.activeToastId = void 0);
		};
		l.activeToastId = d, toast.warning(o, {
			id: d,
			description: a,
			onDismiss: f,
			onAutoClose: f,
			action: {
				label: translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.setup", "Set up"),
				onClick: () => {
					toast.dismiss(d), f(), s();
				}
			}
		});
	}, [
		e,
		t,
		s,
		n,
		i,
		a,
		o
	]), (0, import_react.useEffect)(() => {
		t || dismissLinearAgentSkillSetupReminderToast(e);
	}, [e, t]), (0, import_react.useEffect)(() => {
		if (i === "modal") return () => {
			dismissLinearAgentSkillSetupReminderToast(e);
		};
	}, [e, i]);
}
var LinearAgentSkillSetupDialog = lazyWithRetry(() => import("./LinearAgentSkillSetupDialog-6TClAczl.js"), { reloadKey: "linear-agent-skill-setup-dialog" });
function LinearAgentSkillSetupPrompt({ linked: e, remote: t, surface: n = "inline", settings: o, projectRuntime: s, currentPlatform: c = getCurrentPlatform(), className: l }) {
	let [u, d] = (0, import_react.useState)(null), [f, p] = (0, import_react.useState)(e), [m, h] = (0, import_react.useState)(!1), [g, _] = (0, import_react.useState)("idle"), [v, y] = (0, import_react.useState)(null), b = (0, import_react.useMemo)(() => getLinearPromptAgentRuntime(o, c, t, s), [
		c,
		s,
		t,
		o
	]), x = (0, import_react.useMemo)(() => getLinearPromptSetupCheckIdentity({
		remote: t,
		runtime: b,
		projectRuntime: s,
		activeRuntimeEnvironmentId: o?.activeRuntimeEnvironmentId ?? null
	}), [
		b,
		s,
		t,
		o?.activeRuntimeEnvironmentId
	]), S = (0, import_react.useRef)(x), C = (0, import_react.useRef)(0);
	S.current = x;
	let w = (0, import_react.useMemo)(() => getLinearPromptSkillDiscoveryTarget(b, s), [b, s]), T = getLocalDismissStorageKey(b), [E, D] = (0, import_react.useState)(() => readLocalDismissed(T)), [O, k] = (0, import_react.useState)(T);
	T !== O && (k(T), D(readLocalDismissed(T)));
	let A = useInstalledAgentSkillNames(LINEAR_AGENT_SKILL_NAMES, {
		enabled: e,
		discoveryTarget: w,
		sourceKinds: GLOBAL_AGENT_SKILL_SOURCE_KINDS
	}), j = (0, import_react.useMemo)(() => buildSkillCommandForRuntime(ORCA_LINEAR_SKILL_INSTALL_COMMAND, b), [b]), M = (0, import_react.useMemo)(() => buildSkillCommandForRuntime(getLinearAgentSkillUpdateCommand(A.skills, A.installed), b), [
		b,
		A.installed,
		A.skills
	]), N = getLinearPromptTerminalShellOverride(c, o, b), P = (0, import_react.useCallback)((e, t, n) => {
		t === C.current && S.current === e && n();
	}, []), F = (0, import_react.useCallback)((e, t) => {
		S.current === e && t();
	}, []), I = (0, import_react.useCallback)(async () => {
		let t = x, n = ++C.current, r = (e) => {
			P(t, n, e);
		};
		if (!e) {
			r(() => {
				d(null), p(!1);
			});
			return;
		}
		p(!0);
		try {
			let e = await (b.runtime === "wsl" ? window.api.cli.getWslInstallStatus(getWslCliDistroRequest(b)) : window.api.cli.getInstallStatus());
			r(() => d(e));
		} catch {
			r(() => d(null));
		} finally {
			r(() => p(!1));
		}
	}, [
		b,
		e,
		x,
		P
	]);
	(0, import_react.useEffect)(() => {
		I();
	}, [I]);
	let L = isOrcaCliAvailableOnPath(u), R = e && !f && !A.loading && L && A.installed, z = e && !E && !f && !A.loading && !R, B = v === x, V = n === "modal" && m && g === "checking" && B, H = n === "modal" && m && g === "ready" && B, U = m && (z || V || H);
	(0, import_react.useEffect)(() => {
		if (g !== "idle") {
			if (!B) {
				_("idle"), y(null);
				return;
			}
			if (g === "checking" && R) {
				_("ready");
				return;
			}
			z && _("idle");
		}
	}, [
		B,
		z,
		g,
		R
	]);
	let W = () => {
		localStorage.setItem(T, "1"), D(!0), h(!1), dismissLinearAgentSkillSetupReminderToast(T);
	}, G = () => {
		h(!1), resetLinearAgentSkillSetupReminderToastForRuntime(T);
	}, K = t ? translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.successDescriptionRemote", "Host agents can now use linked Linear tickets. Remote agent environments may still need their own setup.") : b.runtime === "wsl" ? translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.successDescriptionWsl", "WSL agents can now use linked Linear tickets from this workspace.") : translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.successDescription", "Agents can now read and update linked Linear tickets from this workspace."), q = () => {
		snoozeLinearAgentSkillSetupReminderToast(T), h(!1);
	}, J = getLinearAgentSkillSetupMissingLabel(L, A.installed), Y = getLinearAgentSkillSetupToastTitle(L, A.installed);
	if (useLinearAgentSkillSetupReminderToast({
		localDismissStorageKey: T,
		missingSetup: z,
		setupDialogOpen: m,
		surface: n,
		toastDescription: getLinearAgentSkillSetupToastDescription(L, A.installed, t, b),
		toastTitle: Y,
		openSetupDialog: (0, import_react.useCallback)(() => h(!0), [])
	}), n !== "modal" && !z || n === "modal" && !U) return null;
	let Z = m ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinearAgentSkillSetupDialog, {
			open: !0,
			showSuccess: H,
			successDescription: K,
			missingLabel: J,
			command: j,
			installedCommand: M,
			terminalShellOverride: N,
			terminalRuntime: b,
			installed: A.installed,
			loading: V || f || A.loading,
			error: A.error,
			getPrerequisiteStatus: b.runtime === "wsl" ? () => window.api.cli.getWslInstallStatus(getWslCliDistroRequest(b)) : void 0,
			onBeforeOpenTerminal: async () => {
				let e = x, t = (t) => {
					F(e, t);
				}, n = b.runtime === "wsl" ? await ensureWslCliAvailableForAgentSkillTerminal(b) : await ensureOrcaCliAvailableForAgentSkillTerminal({ onStatusChange: (e) => {
					t(() => d(e));
				} });
				b.runtime === "wsl" && t(() => d(n));
			},
			onRecheck: async () => {
				if (n === "modal") {
					y(x), _("checking"), await Promise.all([I(), A.refresh()]);
					return;
				}
				await I(), await A.refresh();
			},
			onOpenChange: (e) => {
				if (e) {
					h(!0);
					return;
				}
				if (H) {
					G();
					return;
				}
				if (n === "modal") {
					q();
					return;
				}
				h(!1);
			},
			onDismissPermanently: W,
			onDone: G
		})
	}) : null;
	return n === "modal" ? Z : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mt-1.5 rounded-md border border-worktree-sidebar-border bg-worktree-sidebar-accent/35 px-2.5 py-2 text-[11px] text-muted-foreground", l),
		onClick: (e) => e.stopPropagation(),
		onDoubleClick: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketCheck, { className: "mt-0.5 size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium text-foreground",
							children: translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.title", "Set up Linear agent skill")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "leading-snug",
							children: [
								J,
								" ",
								getLinearAgentSkillSetupInlineRuntimeCopy(t, b)
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon-xs",
						className: "shrink-0",
						"aria-label": translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.dismiss", "Dismiss Linear agent skill setup"),
						onClick: W,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex flex-wrap items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "xs",
					onClick: () => h(!0),
					children: translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.setup", "Set up")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					size: "xs",
					className: "gap-1",
					onClick: () => {
						I(), A.refresh();
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3" }), translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.recheck", "Re-check")]
				})]
			}),
			Z
		]
	});
}
function WorktreeCardSecondaryRows({ card: e, presentation: t }) {
	let { worktree: n, repo: o, settings: s, isActive: c, newCardStyle: l, lineageChildren: u, lineageCollapsed: d, onLineageToggle: f, remoteBranchConflict: p, showInlineAgentList: m, agentActivityDisplayMode: h, compactInlineAgentRows: g, showLineageChildChip: _, lineageChildAriaLabel: v, childWorkspaceShortLabel: y } = e, { hasMetaRow: b } = t;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		p && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-0.5 flex items-start gap-1.5 rounded border border-amber-500/25 bg-amber-500/5 px-1.5 py-1 text-[10.5px] leading-snug text-amber-700 dark:text-amber-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-[1px] size-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1",
				children: translate("auto.components.sidebar.WorktreeCard.a88c92d0e3", "{{value0}}/{{value1}} already exists.", {
					value0: p.remote,
					value1: p.branchName
				})
			})]
		}),
		c && n.linkedLinearIssue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinearAgentSkillSetupPrompt, {
			linked: !0,
			remote: !!(o?.connectionId || s?.activeRuntimeEnvironmentId?.trim()),
			surface: "modal",
			settings: s
		}) : null,
		m && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardAgents_default, {
			worktreeId: n.id,
			agents: h === "compact" ? g : void 0,
			className: b || p ? "mt-0" : "-mt-1"
		}),
		_ && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("relative mt-1 flex min-w-0 justify-start", !l && "-ml-1"),
			style: { color: "color-mix(in srgb, var(--muted-foreground) 42%, var(--worktree-sidebar))" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					size: "xs",
					className: "relative z-10 h-[18px] max-w-[8rem] gap-1 rounded-md border border-worktree-sidebar-border bg-worktree-sidebar px-1.5 text-[10px] font-medium leading-none text-muted-foreground shadow-none hover:bg-worktree-sidebar-accent hover:text-foreground focus-visible:ring-1 focus-visible:ring-worktree-sidebar-ring",
					"aria-label": v,
					"aria-expanded": !d,
					onClick: f,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "size-2.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: y
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-2.5 transition-transform", d && "-rotate-90") })
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
				side: "right",
				sideOffset: 8,
				children: d ? translate("auto.components.sidebar.WorktreeCard.8cb634cda6", "Show child workspaces") : translate("auto.components.sidebar.WorktreeCard.57eaa61b55", "Hide child workspaces")
			})] })
		}),
		!l && u && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "-ml-[1.125rem] mt-1.5 w-[calc(100%+1.125rem)] space-y-1",
			children: u
		})
	] });
}
function useWorktreeActivityStatus(e) {
	let t = useAppStore((t) => t.tabsByWorktree[e] ?? EMPTY_TABS), n = useAppStore((t) => t.browserTabsByWorktree[e] ?? EMPTY_BROWSER_TABS), r = useAppStore(useShallow((t) => selectRuntimePaneTitlesForWorktree(t, e))), i = useAppStore(useShallow((t) => selectLivePtyIdsForWorktree(t, e))), a = useAppStore(useShallow((t) => selectTerminalLayoutRootsForWorktree(t, e))), { hasPermission: o, hasLiveWorking: s, hasLiveMonitoring: c, hasInterrupted: l, hasLiveDone: u, hasRetainedDone: d, agentStatusPaneIdsByTabId: p, stalePaneIdsByTabId: m } = useAppStore(useShallow((t) => selectWorktreeAgentActivitySummary(t, e)));
	return (0, import_react.useMemo)(() => resolveWorktreeStatus({
		tabs: t,
		browserTabs: n,
		ptyIdsByTabId: i,
		runtimePaneTitlesByTabId: r,
		agentStatusPaneIdsByTabId: p,
		stalePaneIdsByTabId: m,
		terminalLayoutRootsByTabId: a,
		hasPermission: o,
		hasLiveWorking: s,
		hasLiveMonitoring: c,
		hasInterrupted: l,
		hasLiveDone: u,
		hasRetainedDone: d
	}), [
		t,
		n,
		i,
		r,
		p,
		m,
		a,
		o,
		s,
		c,
		l,
		u,
		d
	]);
}
var QUIET_REVIEW_REPLACEABLE_STATUSES = new Set([
	"active",
	"done",
	"inactive"
]);
function getDefaultBranchIdentityLabel() {
	return translate("auto.components.sidebar.WorktreeCardStatusSlot.branchIdentity", "Branch");
}
function getSleepingStatusLabel() {
	return translate("auto.components.sidebar.WorktreeCardStatusSlot.sleeping", "Sleeping");
}
var compactReviewAndBranchStatusIconClassName = "size-[13px] translate-x-px", branchStatusIconClassName = `${compactReviewAndBranchStatusIconClassName} text-muted-foreground/70`, sleepingStatusIconClassName = "size-[13px] text-muted-foreground", newCardUnreadAlertClassName = "pointer-events-none absolute left-0 top-1/2 size-[6px] -translate-y-1/2 rounded-full bg-amber-500 ring-2 ring-sidebar";
function overlayNewCardUnreadStatus(e, t) {
	return t ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		"data-worktree-status-lane-unread": "",
		className: "relative inline-flex size-5 shrink-0 items-center justify-center",
		children: [e, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-worktree-unread-alert": "",
			className: newCardUnreadAlertClassName,
			"aria-hidden": "true"
		})]
	}) : e;
}
function getReviewStatusLabel(e) {
	let t = getReviewLabel(e);
	return e.state === "merged" ? `${t}: Merged` : e.state === "closed" ? `${t}: Closed` : e.state === "draft" ? `${t}: Draft` : e.status === "failure" ? `${t} checks: Failed` : e.status === "pending" ? `${t} checks: Pending` : e.status === "success" ? `${t} checks: Passing` : `${t}: Open`;
}
function WorktreeCardStatusSlot({ worktreeId: e, showStatus: t, showUnreadAction: n, isUnread: r, unreadTooltip: i, onToggleUnread: o, onPointerDown: s, prDisplay: c = null, newCardStyle: l = !1, hasBranchIdentity: u = !1, branchIdentityLabel: d, className: f }) {
	let p = useWorktreeActivityStatus(e), m = useIsSleepingWorktree(e), h = getWorktreeStatusLabel(p) || p, g = l && t && m && QUIET_REVIEW_REPLACEABLE_STATUSES.has(p), _ = l && t && c !== null && !g && QUIET_REVIEW_REPLACEABLE_STATUSES.has(p), v = l && t && u && c === null && !g && QUIET_REVIEW_REPLACEABLE_STATUSES.has(p), y = g ? getSleepingStatusLabel() : _ && c ? getReviewStatusLabel(c) : v ? d ?? getDefaultBranchIdentityLabel() : h, b = l && r ? `${y} · Unread` : y, x = l && r && t && p !== "working" && p !== "permission", S = compactReviewAndBranchStatusIconClassName, C = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, {
		className: branchStatusIconClassName,
		"aria-hidden": "true"
	}), w = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
		className: sleepingStatusIconClassName,
		"aria-hidden": "true"
	}), T = g ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex size-5 items-center justify-center p-0.5", f),
		children: [w, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: b
		})]
	}) : _ && c ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex size-5 items-center justify-center p-0.5", f),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewIcon, {
			review: c,
			className: S,
			variant: "generic"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: b
		})]
	}) : v ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex size-5 items-center justify-center p-0.5", f),
		children: [C, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: b
		})]
	}) : l && t ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex size-5 items-center justify-center", f),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIndicator_default, {
			status: p,
			"aria-hidden": "true",
			tooltipSide: "right"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "sr-only",
		children: b
	})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIndicator_default, {
		status: p,
		"aria-hidden": "true",
		className: f,
		tooltipSide: "right"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "sr-only",
		children: h
	})] }), E = n && !l;
	if (!t && !E) return null;
	if (!E) return overlayNewCardUnreadStatus(T, x);
	let D = r ? "Mark as read" : "Mark as unread", O = t && !r ? `${y} · ${i}` : i;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"data-workspace-board-preserve-open": "",
			onPointerDown: s,
			onClick: o,
			className: cn("group/unread relative flex cursor-pointer items-center justify-center rounded transition-all", l && t ? "size-5" : "size-4", "hover:bg-accent/80 active:scale-95", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring", f),
			"aria-label": D,
			children: l ? t && _ && c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex size-5 items-center justify-center p-0.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewIcon, {
					review: c,
					className: S,
					variant: "generic"
				})
			}) : t && v ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex size-5 items-center justify-center p-0.5",
				children: C
			}) : t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIndicator_default, {
				status: p,
				"aria-hidden": "true",
				showTooltip: !1
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: D
			}) : r ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilledBellIcon, { className: "size-[13px] text-amber-500 drop-shadow-sm" }) : t ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusIndicator_default, {
				status: p,
				"aria-hidden": "true",
				showTooltip: !1,
				className: "transition-opacity group-hover/unread:opacity-0 group-focus-within/unread:opacity-0"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "absolute size-3 text-muted-foreground/40 opacity-0 transition-opacity group-hover/unread:opacity-100 group-focus-within/unread:opacity-100" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-3 text-muted-foreground/40 can-hover:opacity-0 transition-opacity group-hover:opacity-100 group-hover/unread:opacity-100 group-focus-within/unread:opacity-100" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "right",
		sideOffset: 8,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: O })
	})] }), t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "sr-only",
		children: h
	})] });
}
function WorktreeCardParentContent({ card: e, presentation: t }) {
	let { worktree: n, affiliateListMode: r, newCardStyle: i, lineageChildren: o, showStatus: s, unreadTooltip: c, stopQuickActionPointerPropagation: l, handleToggleUnreadQuick: u, statusLaneReview: d, branchIdentityDisplay: f, showInlineAgentList: p, titleRenaming: m, isDeleting: h, hoverIssue: g, hoverLinearIssue: _, hoverJiraIssue: v, hoverReview: y, hoverComment: b, metaAutomationProvenance: x, metaCliProvenance: S, workspacePorts: C, detailsHoverControl: w, handleRenameTitle: T, handleEditIssue: E, handleEditComment: D, handleOpenGitHubIssueInOrca: O, handleOpenIssueInBrowser: k, linearIssue: j, handleOpenLinearIssueInOrca: M, handleOpenReviewInOrca: N, handleOpenReviewInBrowser: P, handleOpenAutomation: I, handleOpenAutomationRun: L, canUnlinkReview: R, handleUnlinkReview: z } = e, { titleOnlyCard: B, parentContentMarginLeft: V, showCombinedStatusSlot: H, showUnreadQuickAction: U, hasHoverDetails: W, hoverBranchName: G, hoverWorkspaceTitle: K } = t, q = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group/worktree-card flex w-full min-w-0 flex-col gap-1.5",
		"data-worktree-card-hover-trigger": "",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardHeader, {
			card: e,
			presentation: t
		}), t.hasMetaRow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardMetaRow, {
			card: e,
			presentation: t
		})]
	}), J = W && !m ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardDetailsHover, {
		issue: g,
		linearIssue: _,
		jiraIssue: v,
		review: y,
		comment: b,
		automationProvenance: x,
		cliProvenance: S,
		branchName: G,
		workspaceTitle: K,
		workspaceTitleRenameDisabled: h || r,
		detailsAfter: C.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardPortsDetails, { ports: C }) : null,
		openDelay: 100,
		hoverControl: w,
		onRenameWorkspaceTitle: r ? void 0 : T,
		onEditIssue: r ? void 0 : E,
		onEditComment: r ? void 0 : D,
		onOpenGitHubIssueInOrca: g && "url" in g && g.url ? O : void 0,
		onOpenIssueInBrowser: g && "url" in g && g.url ? k : void 0,
		onOpenLinearIssueInOrca: j?.url ? M : void 0,
		onOpenReviewInOrca: y?.url && y.provider === "github" ? N : void 0,
		onOpenReviewInBrowser: y?.url ? P : void 0,
		onOpenAutomation: r ? void 0 : I,
		onOpenAutomationRun: r ? void 0 : L,
		onUnlinkReview: !r && R ? z : void 0,
		children: q
	}) : q;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex w-full min-w-0 gap-0.5 pl-0", B ? "items-center" : "items-start"),
		style: V < 0 ? { marginLeft: `${V}px` } : void 0,
		"data-worktree-card-parent-content": "",
		children: [H ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("flex shrink-0 justify-center", i ? "mr-1 w-5 items-center" : "items-start pt-[2px]", r && "px-1"),
			"data-worktree-card-status-slot": "",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardStatusSlot, {
				worktreeId: n.id,
				showStatus: s,
				showUnreadAction: U,
				isUnread: n.isUnread,
				unreadTooltip: c,
				onPointerDown: l,
				onToggleUnread: u,
				prDisplay: d,
				newCardStyle: i,
				hasBranchIdentity: !!f
			})
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex min-w-0 flex-1 flex-col gap-1.5", p || !i && o ? "overflow-visible" : "overflow-hidden"),
			children: [J, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardSecondaryRows, {
				card: e,
				presentation: t
			})]
		})]
	});
}
var PROJECT_WORKTREE_CARD_EXTRA_INDENT = 2;
const LINEAGE_CHILDREN_INLINE_OFFSET = 18 + PROJECT_WORKTREE_CARD_EXTRA_INDENT - 4 - 2;
var GROUPED_WORKTREE_CARD_SURFACE_INDENT = 14;
const WORKTREE_SECTION_HEADER_PADDING_LEFT = 10;
function clampDepth(e) {
	return Math.max(0, Math.floor(Number.isFinite(e) ? e : 0));
}
function getProjectGroupHeaderPaddingLeft(e) {
	return 10 + Math.min(clampDepth(e), 6) * 10;
}
function getWorktreeCardContentIndent(e) {
	let t = e.isGrouped ? clampDepth(e.groupDepth) + 1 : 0, n = e.isGrouped ? PROJECT_WORKTREE_CARD_EXTRA_INDENT : 0;
	return (t + clampDepth(e.lineageDepth)) * 18 + n;
}
function getFolderBackedRepoWorktreeCardContentIndent(e) {
	return getProjectGroupHeaderPaddingLeft(e.groupDepth) + 10 + clampDepth(e.lineageDepth) * 18;
}
function getFolderBackedRepoWorktreeCardSurfaceInset(e) {
	let t = getFolderBackedRepoWorktreeCardContentIndent(e), n = getWorktreeCardSurfaceInset({
		isGrouped: !0,
		groupDepth: e.groupDepth
	}), r = t - 4 - 2;
	return Math.min(n, Math.max(0, r));
}
function getFolderWorkspaceCardContentIndent(e) {
	return getProjectGroupHeaderPaddingLeft(Math.max(0, clampDepth(e.groupDepth) - 1)) + 10;
}
function getFolderWorkspaceCardSurfaceInset(e) {
	let t = getFolderWorkspaceCardContentIndent({ groupDepth: e.groupDepth }), n = getWorktreeCardSurfaceInset(e), r = t - 4 - 2;
	return Math.min(n, Math.max(0, r));
}
function getFolderWorkspaceRowGeometry(e) {
	if (e.experimentalNewWorktreeCardStyle && e.isFolderBackedWorkspaceChild) {
		let t = getFolderBackedRepoWorktreeCardContentIndent({
			groupDepth: e.groupDepth,
			lineageDepth: 0
		}), n = getFolderBackedRepoWorktreeCardSurfaceInset({
			groupDepth: e.groupDepth,
			lineageDepth: 0
		});
		return {
			surfaceInset: n,
			cardContentIndent: Math.max(0, t - n)
		};
	}
	let t = e.isFolderBackedWorkspaceChild ? getFolderWorkspaceCardContentIndent({ groupDepth: e.groupDepth }) : getWorktreeCardContentIndent({
		isGrouped: e.isGrouped,
		groupDepth: e.groupDepth,
		lineageDepth: e.lineageDepth
	}), n = e.isFolderBackedWorkspaceChild ? getFolderWorkspaceCardSurfaceInset({
		isGrouped: !0,
		groupDepth: e.groupDepth
	}) : getWorktreeCardSurfaceInset({
		isGrouped: e.isGrouped,
		groupDepth: e.groupDepth
	});
	return {
		surfaceInset: n,
		cardContentIndent: Math.max(0, t - n)
	};
}
function getWorktreeCardSurfaceInset(e) {
	return e.isGrouped ? clampDepth(e.groupDepth) * GROUPED_WORKTREE_CARD_SURFACE_INDENT : 0;
}
function getFlushWorktreeCardPaddingLeft(e, t = !1) {
	return e > 0 ? `max(2px, calc(${e}px - ${4 + (t ? 6 : 0)}px))` : "2px";
}
function getNewCardStyleParentContentMarginLeft(e) {
	if (e <= 0) return 0;
	let t = Math.max(2, e - 4), n = Math.max(2, e - 4 - 6), r = 6 - (t - n);
	if (r <= 0) return 0;
	let i = -r;
	return Math.max(-n, i);
}
function getLineageNestedRowGeometry(e) {
	if (e.experimentalNewWorktreeCardStyle) return {
		surfaceInset: 0,
		cardContentIndent: 0,
		lineageChildrenInlineOffset: LINEAGE_CHILDREN_INLINE_OFFSET
	};
	let t = getWorktreeCardSurfaceInset({
		isGrouped: !0,
		groupDepth: e.lineageDepth
	});
	return {
		surfaceInset: t,
		cardContentIndent: Math.max(0, e.inheritedCardContentIndent - t),
		lineageChildrenInlineOffset: LINEAGE_CHILDREN_INLINE_OFFSET
	};
}
function getLineageChildrenInlineStyle(e) {
	let t = typeof e == "number" ? `${e}px` : e;
	return {
		marginLeft: t,
		width: `calc(100% - ${t})`
	};
}
function buildWorktreeCardPresentation(e) {
	let { worktree: t, repo: n, inPinnedSection: r, hideRepoBadge: i, hostContextLabel: a, affiliateListMode: o, flushSurface: s, contentIndent: c, newCardStyle: l, compactCards: u, isFolder: d, detachedHeadDisplay: f, branch: p, identityDisplay: m, folderMetaRowContent: h, showIdentityInNewCard: g, conflictOperation: _, cardProps: v, cacheStartedAt: y, hasDetails: b, hasPorts: x, showStatus: S, showInlineAgentList: C, showLineageChildChip: T, remoteBranchConflict: O, visibleCardTitle: k, workspacePorts: j, metaIssue: M, metaLinearIssue: N, metaJiraIssue: P, metaReview: I, metaComment: L, metaAutomationProvenance: R, metaCliProvenance: z, hoverIssue: B, hoverLinearIssue: V, hoverJiraIssue: H, hoverReview: U, hoverComment: W, linearIssue: G, handleEditIssue: K, handleEditComment: q, handleOpenGitHubIssueInOrca: J, handleOpenIssueInBrowser: Y, handleOpenLinearIssueInOrca: Z, handleOpenReviewInOrca: Cr, handleOpenReviewInBrowser: wr, handleOpenAutomation: Tr, handleOpenAutomationRun: Er, canUnlinkReview: Dr, handleUnlinkReview: Or, detailsHoverControl: kr, showDeleteQuickAction: Ar } = e, jr = r && !!n, Mr = l || u, Nr = Mr && !!n && !i && !d && !jr, Pr = !Mr && !!n && !i && !jr, Fr = !u && !!a, Ir = !u && !d && f !== null, Lr = !d && p.length > 0 && !l && (!u || p !== t.displayName), Rr = !!_ && _ !== "unknown" && _ !== "rebase", zr = Rr, Br = !o && S && !l, Vr = S, Hr = u && t.isMainWorktree && !d, Ur = !l && !u && (b || x), Wr = (l || u) && (b || x), Gr = u ? zr || y != null : !!(Pr && n || Fr || h || Lr || g || Ir || Rr || y != null || Ur), Kr = Hr || Ar, Q = k.trim(), qr = l ? !!m && !v.includes("branch") && m !== Q : u && Lr, Jr = l ? m : qr ? p : void 0, Yr = Q.length > 0 && Q !== Jr ? Q : void 0, Xr = !!(Yr || Jr), Zr = l && (hasWorktreeCardDetails({
		issue: B,
		linearIssue: V,
		jiraIssue: H,
		review: U,
		comment: W,
		automationProvenance: R,
		cliProvenance: z
	}) || j.length > 0 || Xr), Qr = l ? Zr ? (e) => e : void 0 : u && (qr || b || x) ? (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardDetailsHover, {
		issue: M,
		linearIssue: N,
		jiraIssue: P,
		review: I,
		comment: L,
		automationProvenance: R,
		cliProvenance: z,
		branchName: qr ? p : void 0,
		workspaceTitle: t.displayName,
		identityOrder: "branch-first",
		detailsAfter: x ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardPortsDetails, { ports: j }) : null,
		openDelay: 100,
		onEditIssue: o ? void 0 : K,
		onEditComment: o ? void 0 : q,
		onOpenGitHubIssueInOrca: M && "url" in M && M.url ? J : void 0,
		onOpenIssueInBrowser: M && "url" in M && M.url ? Y : void 0,
		onOpenLinearIssueInOrca: G?.url ? Z : void 0,
		onOpenReviewInOrca: I?.url && I.provider === "github" ? Cr : void 0,
		onOpenReviewInBrowser: I?.url ? wr : void 0,
		onOpenAutomation: o ? void 0 : Tr,
		onOpenAutomationRun: o ? void 0 : Er,
		onUnlinkReview: !o && Dr ? Or : void 0,
		children: e
	}) : void 0, $r = l && Vr, ei = s ? getFlushWorktreeCardPaddingLeft(c, $r) : c > 0 ? `calc(0.125rem + ${c}px)` : null, ti = s && $r ? getNewCardStyleParentContentMarginLeft(c) : 0, ni = ei ? { paddingLeft: ei } : void 0, $ = b || x ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex shrink-0 items-center gap-1",
		children: [x && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardPortsTrigger, { ports: j }), b && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardMetaBadges, {
			issue: M,
			linearIssue: N,
			jiraIssue: P,
			review: l ? null : I,
			comment: L,
			automationProvenance: R,
			cliProvenance: z,
			className: "ml-0 pr-0"
		})]
	}) : null, ri = $ && !l ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardDetailsHover, {
		issue: M,
		linearIssue: N,
		jiraIssue: P,
		review: I,
		comment: L,
		automationProvenance: R,
		cliProvenance: z,
		detailsAfter: x ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardPortsDetails, { ports: j }) : null,
		hoverControl: kr,
		onEditIssue: o ? void 0 : K,
		onEditComment: o ? void 0 : q,
		onOpenGitHubIssueInOrca: M && "url" in M && M.url ? J : void 0,
		onOpenIssueInBrowser: M && "url" in M && M.url ? Y : void 0,
		onOpenLinearIssueInOrca: G?.url ? Z : void 0,
		onOpenReviewInOrca: I?.url && I.provider === "github" ? Cr : void 0,
		onOpenReviewInBrowser: I?.url ? wr : void 0,
		onOpenAutomation: o ? void 0 : Tr,
		onOpenAutomationRun: o ? void 0 : Er,
		onUnlinkReview: !o && Dr ? Or : void 0,
		children: $
	}) : $;
	return {
		showPinnedRepoIcon: jr,
		showInlineRepoBadge: Nr,
		showRepoBadgeInMetaRow: Pr,
		showHostContextBadge: Fr,
		showIdentityInNewCard: g,
		showDetachedHeadInMetaRow: Ir,
		showBranch: Lr,
		showConflictOperationBadge: Rr,
		showUnreadQuickAction: Br,
		showCombinedStatusSlot: Vr,
		showTitleRowPrimary: Hr,
		showMetaRowDetails: Ur,
		showTitleRowIndicators: Wr,
		hasMetaRow: Gr,
		showHeaderActions: Kr,
		showDeleteQuickAction: Ar,
		hoverBranchName: Jr,
		hoverWorkspaceTitle: Yr,
		hasHoverDetails: Zr,
		titleWrapper: Qr,
		parentContentMarginLeft: ti,
		cardStyle: ni,
		detailsAndPorts: ri,
		titleRowIndicators: Wr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ml-auto flex shrink-0 items-center gap-1 pr-1.5",
			children: ri
		}) : null,
		titleOnlyCard: !(Gr || O || C || T)
	};
}
function WorktreeCardSurface({ card: e }) {
	let t = buildWorktreeCardPresentation(e), { worktree: n, selectedWorktrees: r, onAssignWorkspaceStatus: i, affiliateListMode: o, isActiveSurface: s, activeSurfaceVariant: c, isMultiSelected: l, revealHighlight: u, revealHighlightTone: d, flushSurface: f, isLineageDropTarget: p, nativeDragEnabled: m, lineageChildren: h, lineageChildrenStyle: g, newCardStyle: _, titleRenaming: v, isDeleting: y, isRuntimeDisconnected: x, isQueuedForDeletion: S, deleteLabel: C, handleClick: w, handleDoubleClick: T, handleDragStart: E, handleDragEnd: D, handleContextMenuSelect: O, showRenameErrorDialog: k, setShowRenameErrorDialog: A } = e, { titleOnlyCard: j, cardStyle: M } = t, N = useIsSleepingWorktree(n.id), P = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardParentContent, {
		card: e,
		presentation: t
	}), F = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative flex cursor-pointer flex-col pr-1.5 transition-[background-color,border-color,opacity,box-shadow] duration-200 outline-none select-none", j ? "py-2" : "pt-1.25 pb-1.5", f ? "ml-1 w-[calc(100%-0.25rem)]" : "ml-1", "rounded-lg", p ? "border border-worktree-sidebar-foreground/40 bg-worktree-sidebar-accent text-worktree-sidebar-accent-foreground ring-1 ring-inset ring-worktree-sidebar-ring/60" : s ? "border border-transparent" : l ? "border border-worktree-sidebar-ring/35 bg-worktree-sidebar-accent/70 ring-1 ring-worktree-sidebar-ring/30" : "border border-transparent worktree-sidebar-card-hover", s && l && "ring-1 ring-worktree-sidebar-ring/35", u && ["scroll-to-current-workspace-reveal-highlight", d === "ai" && "scroll-to-current-workspace-reveal-highlight--ai"], v && "!border-transparent !bg-transparent !shadow-none !ring-0", y && "opacity-50 grayscale cursor-not-allowed", x && !y && "opacity-60"),
		"data-worktree-card-surface": "true",
		"data-worktree-card-active": s && !p ? c : void 0,
		"data-worktree-lineage-drop-target": p || void 0,
		onClick: w,
		onDoubleClick: o ? void 0 : T,
		draggable: !o && m && !y && !v,
		onDragStart: !o && m ? E : void 0,
		onDragEnd: !o && m ? D : void 0,
		"aria-busy": y,
		style: M,
		children: [
			y && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-background/50 backdrop-blur-[1px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-[11px] font-medium text-foreground shadow-sm border border-border/50",
					children: [S ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin text-muted-foreground" }), C]
				})
			}),
			N && _ && !y ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-worktree-sleeping-dim": "",
				children: P
			}) : P,
			_ && h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5 space-y-1",
				"data-worktree-lineage-children": "",
				style: g,
				children: h
			}) : null
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [o ? F : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeContextMenu_default, {
		worktree: n,
		selectedWorktrees: r,
		onContextMenuSelect: O,
		onAssignWorkspaceStatus: i,
		children: F
	}), typeof n.firstAgentMessageRenameError == "string" && n.firstAgentMessageRenameError.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AutoRenameFailedDialog, {
		open: k,
		onOpenChange: A,
		worktreeId: n.id,
		worktreeName: n.displayName,
		error: n.firstAgentMessageRenameError
	})] });
}
async function activateWorktreeFromSidebar(e, t) {
	let n = parseWorkspaceKey(e);
	if (n?.type === "folder") {
		t ? activateAndRevealFolderWorkspace(n.folderWorkspaceId, { executionHostId: t }) : activateAndRevealFolderWorkspace(n.folderWorkspaceId);
		return;
	}
	if (activateAndRevealWorktree(e, {
		revealInSidebar: !1,
		...t ? { executionHostId: t } : {}
	}), typeof window < "u" && window.api?.ephemeralVm?.resumeWorkspace) try {
		let t = await window.api.ephemeralVm.resumeWorkspace({ workspaceId: e });
		if (t?.runtimeEnvironmentId) {
			let e = (await import("./store-DS9RRbz3.js")).useAppStore;
			e.getState().setRuntimeEnvironments(await window.api.runtimeEnvironments.list()), await e.getState().refreshRuntimeEnvironmentStatus(t.runtimeEnvironmentId);
		}
	} catch (e) {
		toast.error(translate("auto.lib.sidebarWorktreeActivation.wakeEphemeralVmFailed", "Failed to wake ephemeral VM workspace"), { description: e instanceof Error ? e.message : String(e) });
	}
}
function useWorktreeCardActivationActions({ worktree: e, repo: t, affiliateListMode: n, onSelectionGesture: r, isActive: i, activationRowKey: a, onActivate: o, onImmediateActivate: s, isDeleting: c, isSshDisconnected: l, updateWorktreeMeta: u, openModal: d }) {
	let f = (0, import_react.useRef)(e);
	return (0, import_react.useLayoutEffect)(() => {
		f.current = e;
	}, [e]), {
		handleClick: (0, import_react.useCallback)((u) => {
			if (!isEventTargetInsideCurrentTarget(u.currentTarget, u.target)) return;
			let d = window.getSelection();
			if (d && d.toString().length > 0) {
				let e = u.currentTarget, t = d.anchorNode, n = d.focusNode;
				if (t instanceof Node && e.contains(t) || n instanceof Node && e.contains(n)) return;
			}
			if (!n && (r?.(u, f.current) ?? !1)) {
				u.preventDefault(), u.stopPropagation();
				return;
			}
			if (c) {
				u.preventDefault(), u.stopPropagation();
				return;
			}
			recordRendererCrashBreadcrumb("sidebar_worktree_activate", {
				worktreeId: e.id,
				repoId: e.repoId,
				wasActive: i,
				sshDisconnected: l
			}), s?.(e.id, a), activateWorktreeFromSidebar(e.id, e.hostId ?? (t ? getRepoExecutionHostId(t) : void 0)), o?.();
		}, [
			n,
			e.id,
			e.repoId,
			e.hostId,
			t,
			i,
			c,
			a,
			l,
			o,
			s,
			r
		]),
		handleRenameTitle: (0, import_react.useCallback)(async (t) => {
			await u(e.id, { displayName: t }, { executionHostId: e.hostId ?? "local" });
		}, [
			u,
			e.hostId,
			e.id
		]),
		handleDoubleClick: (0, import_react.useCallback)((t) => {
			n || isEventTargetInsideCurrentTarget(t.currentTarget, t.target) && d("edit-meta", {
				worktreeId: e.id,
				repoId: e.repoId,
				executionHostId: e.hostId,
				currentDisplayName: e.displayName,
				currentIssue: e.linkedIssue,
				currentPR: e.linkedPR,
				currentComment: e.comment
			});
		}, [
			d,
			n,
			e.comment,
			e.displayName,
			e.hostId,
			e.id,
			e.linkedIssue,
			e.linkedPR,
			e.repoId
		]),
		handleToggleUnreadQuick: (0, import_react.useCallback)((t) => {
			t.preventDefault(), t.stopPropagation(), u(e.id, { isUnread: !e.isUnread }, { executionHostId: e.hostId ?? "local" });
		}, [
			e.hostId,
			e.id,
			e.isUnread,
			u
		])
	};
}
function useWorktreeCardWorkspaceActions({ worktree: e, lineageChildCount: t, lineageCollapsed: n, onLineageToggle: i, isMultiSelected: a, selectedWorktrees: o, onCardDragStart: s, onCardDragEnd: l, onContextMenuSelect: u, folderWorkspaceId: d, deleteFolderWorkspace: f, setActiveWorktree: p, setShowRenameErrorDialog: m, isDeleting: h, showDeleteQuickAction: g }) {
	return {
		handleWorkspaceQuickAction: (0, import_react.useCallback)((t) => {
			if (t.preventDefault(), t.stopPropagation(), g) {
				if (d) {
					f(d, e.hostId ? { executionHostId: e.hostId } : void 0).then((t) => {
						t && useAppStore.getState().activeWorktreeId === folderWorkspaceKey(d) && (!e.hostId || useAppStore.getState().activeWorkspaceExecutionHostId === e.hostId) && p(null);
					});
					return;
				}
				runWorktreeDelete(e.id, e.hostId ? { expectedHostId: e.hostId } : {});
			}
		}, [
			f,
			d,
			e.hostId,
			p,
			g,
			e.id
		]),
		handleOpenRenameErrorDialog: (0, import_react.useCallback)((e) => {
			e.preventDefault(), e.stopPropagation(), m(!0);
		}, [m]),
		unreadTooltip: e.isUnread ? "Mark read" : "Mark unread",
		lineageChildAriaLabel: t === 1 ? n ? translate("auto.components.sidebar.WorktreeList.20bebf9c7f", "Show {{value0}} child workspace", { value0: t }) : translate("auto.components.sidebar.WorktreeList.e97297cb75", "Hide {{value0}} child workspace", { value0: t }) : n ? translate("auto.components.sidebar.WorktreeList.c1f4a31623", "Show {{value0}} child workspaces", { value0: t }) : translate("auto.components.sidebar.WorktreeList.0cd15956d4", "Hide {{value0}} child workspaces", { value0: t }),
		childWorkspaceShortLabel: `${t} ${t === 1 ? translate("auto.components.sidebar.WorktreeList.0c6ee14f23", "child") : translate("auto.components.sidebar.WorktreeList.045a8aed48", "children")}`,
		showLineageChildChip: t > 0 && i !== void 0,
		handleDragStart: (0, import_react.useCallback)((t) => {
			if (!isEventTargetInsideCurrentTarget(t.currentTarget, t.target)) {
				t.preventDefault();
				return;
			}
			if (h) {
				t.preventDefault();
				return;
			}
			let n = a && o && o.length > 1 ? o.map((e) => e.id) : e.id;
			writeWorkspaceDragData(t.dataTransfer, n), s?.(t, e.id, Array.isArray(n) ? n : [n]);
		}, [
			h,
			a,
			s,
			o,
			e.id
		]),
		handleDragEnd: (0, import_react.useCallback)((e) => {
			isEventTargetInsideCurrentTarget(e.currentTarget, e.target) && l?.(e);
		}, [l]),
		handleContextMenuSelect: (0, import_react.useCallback)((t) => u?.(t, e) ?? [e], [u, e]),
		stopQuickActionPointerPropagation: (0, import_react.useCallback)((e) => {
			e.stopPropagation();
		}, [])
	};
}
function useWorktreeCardController(e) {
	let { worktree: t, repo: n } = e, r = useWorktreeCardFoundation({
		worktree: t,
		repo: n
	}), i = useWorktreeCardReviewDetails({
		worktree: t,
		repo: n,
		settings: r.settings,
		projectGroups: r.projectGroups,
		cardProps: r.cardProps,
		newCardStyle: r.newCardStyle
	}), a = useWorktreeCardLinkedDetails({
		worktree: t,
		newCardStyle: r.newCardStyle,
		deleteState: r.deleteState,
		branch: i.branch,
		issueEntry: i.issueEntry,
		linearIssueEntry: i.linearIssueEntry,
		linearIssueFallbackEntry: i.linearIssueFallbackEntry,
		prDisplay: i.prDisplay
	}), o = r.cardProps.includes("status"), s = r.cardProps.includes("issue"), c = r.cardProps.includes("linear-issue"), l = r.cardProps.includes("jira-issue"), u = r.cardProps.includes("pr"), d = r.cardProps.includes("automation"), f = r.cardProps.includes("cli"), p = r.cardProps.includes("comment"), m = r.cardProps.includes("ports"), h = r.newCardStyle ? o : u, g = useWorktreeCardDetailsHoverControl(), _ = g.hoverOpen;
	useWorktreeCardLifecycleEffects({
		worktree: t,
		repo: n,
		isFolder: i.isFolder,
		hostedReviewCacheKey: i.hostedReviewCacheKey,
		cachedBranchFallbackGitHubPRNumber: i.cachedBranchFallbackGitHubPRNumber,
		linkedGitLabMR: i.linkedGitLabMR,
		linkedBitbucketPR: i.linkedBitbucketPR,
		linkedAzureDevOpsPR: i.linkedAzureDevOpsPR,
		linkedGiteaPR: i.linkedGiteaPR,
		branch: i.branch,
		fetchHostedReviewForBranch: r.fetchHostedReviewForBranch,
		shouldRefreshHostedReview: h,
		newCardStyle: r.newCardStyle,
		hoverDetailsOpen: _,
		showIssue: s,
		issueCacheKey: i.issueCacheKey,
		fetchIssue: r.fetchIssue,
		showLinearIssue: c,
		fetchLinearIssue: r.fetchLinearIssue
	});
	let v = useWorktreeCardActivationActions({
		worktree: t,
		repo: n,
		affiliateListMode: e.affiliateListMode,
		onSelectionGesture: e.onSelectionGesture,
		isActive: e.isActive,
		activationRowKey: e.activationRowKey,
		onActivate: e.onActivate,
		onImmediateActivate: e.onImmediateActivate,
		isDeleting: a.isDeleting,
		isSshDisconnected: r.isSshDisconnected,
		updateWorktreeMeta: r.updateWorktreeMeta,
		openModal: r.openModal
	}), y = !e.affiliateListMode && canShowWorkspaceDeleteQuickAction({
		deleteModifierPressed: a.deleteModifierPressed,
		isDeleting: a.isDeleting,
		isMainWorktree: t.isMainWorktree
	}), b = useWorktreeCardWorkspaceActions({
		worktree: t,
		lineageChildCount: e.lineageChildCount,
		lineageCollapsed: e.lineageCollapsed,
		onLineageToggle: e.onLineageToggle,
		isMultiSelected: e.isMultiSelected,
		selectedWorktrees: e.selectedWorktrees,
		onCardDragStart: e.onCardDragStart,
		onCardDragEnd: e.onCardDragEnd,
		onContextMenuSelect: e.onContextMenuSelect,
		folderWorkspaceId: i.folderWorkspaceId,
		deleteFolderWorkspace: r.deleteFolderWorkspace,
		setActiveWorktree: r.setActiveWorktree,
		setShowRenameErrorDialog: r.setShowRenameErrorDialog,
		isDeleting: a.isDeleting,
		showDeleteQuickAction: y
	}), x = useWorktreeCardSecondaryDetails({
		worktree: t,
		repo: n,
		statusPrDisplay: e.statusPrDisplay,
		showStatus: o,
		showIssue: s,
		showLinearIssue: c,
		showJiraIssue: l,
		showPR: u,
		showAutomation: d,
		showCli: f,
		showComment: p,
		showPorts: m,
		issueDisplay: a.issueDisplay,
		linearIssue: a.linearIssue,
		linearIssueDisplay: a.linearIssueDisplay,
		jiraIssueDisplay: a.jiraIssueDisplay,
		prDisplay: i.prDisplay,
		linkedGitLabMR: i.linkedGitLabMR,
		linkedBitbucketPR: i.linkedBitbucketPR,
		linkedAzureDevOpsPR: i.linkedAzureDevOpsPR,
		linkedGiteaPR: i.linkedGiteaPR,
		cardProps: r.cardProps,
		newCardStyle: r.newCardStyle,
		compactCards: r.compactCards,
		agentActivityDisplayMode: r.agentActivityDisplayMode,
		workspacePorts: r.workspacePorts,
		openTaskPage: r.openTaskPage,
		updateWorktreeMeta: r.updateWorktreeMeta,
		settings: r.settings
	});
	return {
		...e,
		...r,
		...i,
		...a,
		detailsHoverControl: g,
		showStatus: o,
		showIssue: s,
		showLinearIssue: c,
		showJiraIssue: l,
		showPR: u,
		showAutomation: d,
		showCli: f,
		showComment: p,
		showPorts: m,
		shouldRefreshHostedReview: h,
		...v,
		showDeleteQuickAction: y,
		...b,
		...x
	};
}
var WorktreeCard_default = import_react.memo(function({ worktree: e, repo: t, isActive: n, isActiveSurface: r = n, activeSurfaceVariant: i = "primary", isMultiSelected: a = !1, revealHighlight: o = !1, revealHighlightTone: s = "default", selectedWorktrees: c, onActivate: l, onImmediateActivate: u, onSelectionGesture: d, onContextMenuSelect: f, onAssignWorkspaceStatus: p, onCardDragStart: m, onCardDragEnd: h, nativeDragEnabled: g = !0, hideRepoBadge: _, hostContextLabel: v, inPinnedSection: y = !1, activationRowKey: b, renameRowKey: x, contentIndent: S = 0, flushSurface: C = !1, lineageChildCount: w = 0, lineageCollapsed: T = !1, lineageChildren: E, lineageChildrenStyle: D, onLineageToggle: O, isLineageDropTarget: k = !1, affiliateListMode: A = !1, statusPrDisplay: j = null }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCardSurface, { card: useWorktreeCardController({
		worktree: e,
		repo: t,
		isActive: n,
		isActiveSurface: r,
		activeSurfaceVariant: i,
		isMultiSelected: a,
		revealHighlight: o,
		revealHighlightTone: s,
		selectedWorktrees: c,
		onActivate: l,
		onImmediateActivate: u,
		onSelectionGesture: d,
		onContextMenuSelect: f,
		onAssignWorkspaceStatus: p,
		onCardDragStart: m,
		onCardDragEnd: h,
		nativeDragEnabled: g,
		hideRepoBadge: _,
		hostContextLabel: v,
		inPinnedSection: y,
		activationRowKey: b,
		renameRowKey: x,
		contentIndent: S,
		flushSurface: C,
		lineageChildCount: w,
		lineageCollapsed: T,
		lineageChildren: E,
		lineageChildrenStyle: D,
		onLineageToggle: O,
		isLineageDropTarget: k,
		affiliateListMode: A,
		statusPrDisplay: j
	}) });
});
export { getFolderBackedRepoWorktreeCardSurfaceInset as a, getLineageNestedRowGeometry as c, getWorktreeCardSurfaceInset as d, resolveProjectGroupHeaderColor as f, WorktreeHostContextBadge as g, revealElementInScrollContainer as h, getFolderBackedRepoWorktreeCardContentIndent as i, getProjectGroupHeaderPaddingLeft as l, WORKTREE_SIDEBAR_REVEAL_TOP_INSET as m, LINEAGE_CHILDREN_INLINE_OFFSET as n, getFolderWorkspaceRowGeometry as o, SUPPRESS_WORKTREE_LIST_SCROLL_ADJUSTMENT_EVENT as p, WORKTREE_SECTION_HEADER_PADDING_LEFT as r, getLineageChildrenInlineStyle as s, WorktreeCard_default as t, getWorktreeCardContentIndent as u };
