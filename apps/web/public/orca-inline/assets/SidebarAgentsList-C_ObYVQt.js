import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./lazy-with-retry--hTe1cP7.js";
import { t as require_react_dom } from "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as useTranslation } from "./useTranslation-gONZYZRO.js";
import "./useMountedRef-De7bTfqf.js";
import "./open-in-app-catalog-D2IDnDpO.js";
import "./worktree-activation-u-wSAPlP.js";
import "./use-worktree-card-secondary-details-Cqbfo6RV.js";
import { a as useActivityThreadActionBindings, i as ActivityThreadOptionsMenu, o as hasActivityThreadWorkspace, s as useAgentPaneThreads, t as ActivityThreadListPane } from "./activity-thread-list-pane-RZGbOJQX.js";
import "./AgentQuestionIcon-DjFsmxm7.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import "./dropdown-menu-DRu_J4_e.js";
import "./label-CA70r2No.js";
import "./hover-card-YPvTyc89.js";
import "./popover-DHL-338i.js";
import "./select-X9Gmv_Pu.js";
import "./toggle-BseEOkHu.js";
import "./tooltip-BWXjmmf0.js";
import { t as Input } from "./input-BrXOv9Kv.js";
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
import "./agent-catalog-Cgr0_vcs.js";
import "./command-QScw0gM9.js";
import "./ime-composition-keyboard-event-yHkhp82P.js";
import "./WorktreeCardHelpers-BykCvVd_.js";
import "./useWorkspaceEmojiShortcodeInput-CqmOEcrU.js";
import "./LinearIcon-BZznKVMM.js";
import "./JiraIcon-CYzhsqvz.js";
import "./RepoBadgeLabel-B-Yh5QwJ.js";
import "./useShortcutLabel-B283mfzm.js";
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
import "./lib-DEDsinTP.js";
import "./lib-CCrOeqzl.js";
import "./CommentMarkdown-NC5Pka2-.js";
import "./MermaidBlock-DUCPG0_k.js";
import "./relative-time-format-Clpgwkog.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_react_dom = require_react_dom(), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function SidebarAgentsList({ readFilter: e, setReadFilter: p, groupBy: m, setGroupBy: h, query: g, setQuery: _, optionsTarget: v, scrollTopRef: y }) {
	useTranslation();
	let b = useAppStore((e) => e.agentsCompactMode), x = useAppStore((e) => e.setAgentsCompactMode), S = useAppStore((e) => e.agentsShowSearch), C = useAppStore((e) => e.setAgentsShowSearch), w = useAppStore((e) => e.agentsShowChildAgents), T = useAppStore((e) => e.setAgentsShowChildAgents), [E, D] = (0, import_react.useState)(null), O = (0, import_react.useRef)(null), k = (0, import_react.useCallback)((e) => {
		if (C(e), !e) {
			_("");
			return;
		}
		requestAnimationFrame(() => O.current?.focus());
	}, [_, C]), { storeData: A, selectedPaneKeyIsLive: j, effectiveSelectedPaneKey: M, visibleThreads: N, markAllReadThreads: P, visibleThreadGroups: F } = useAgentPaneThreads({
		query: g,
		readFilter: e,
		groupBy: m,
		selectedPaneKey: E,
		showChildAgents: w
	});
	(0, import_react.useEffect)(() => {
		j || D(null);
	}, [j]);
	let { markThreadRead: I, markThreadUnread: L, selectThread: R, jumpToWorkspace: z, markAllThreadsRead: B, hasUnreadThreads: V, hasCompletedThreads: H, handleClearCompleted: U } = useActivityThreadActionBindings({
		visibleThreads: N,
		markAllReadThreads: P,
		acknowledgeAgents: A.acknowledgeAgents,
		unacknowledgeAgents: A.unacknowledgeAgents,
		setSelectedPaneKey: D
	}), W = (0, import_react.useCallback)((e) => hasActivityThreadWorkspace(e, {
		worktreesByRepo: A.worktreesByRepo,
		detectedWorktreesByRepo: A.detectedWorktreesByRepo,
		folderWorkspaces: A.folderWorkspaces,
		defaultHostId: A.defaultHostId
	}), [
		A.worktreesByRepo,
		A.detectedWorktreesByRepo,
		A.folderWorkspaces,
		A.defaultHostId
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [
			S ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0 border-b border-border px-2 py-1.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					ref: O,
					value: g,
					onChange: (e) => _(e.target.value),
					onKeyDown: (e) => {
						e.key === "Escape" && k(!1);
					},
					placeholder: translate("auto.components.activity.ActivityPrototypePage.795cbf26e2", "Filter..."),
					className: "h-7 w-full text-[11px] shadow-none focus-visible:ring-0",
					"aria-label": translate("auto.components.activity.ActivityPrototypePage.search", "Search")
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityThreadListPane, {
				activityFilterInputRef: O,
				query: g,
				onQueryChange: _,
				groupBy: m,
				onGroupByChange: h,
				readFilter: e,
				onReadFilterChange: p,
				compactMode: b,
				showChildAgents: w,
				hasUnreadThreads: V,
				onCompactModeChange: x,
				onShowChildAgentsChange: T,
				onMarkAllThreadsRead: B,
				hasCompletedThreads: H,
				onClearCompleted: U,
				visibleThreadGroups: F,
				visibleThreadCount: N.length,
				selectedPaneKey: M,
				onSelectThread: R,
				onJumpToWorkspace: z,
				onMarkThreadRead: I,
				onMarkThreadUnread: L,
				canJumpToWorkspace: W,
				allowMarkUnreadWhenSelected: !0,
				showJumpAction: !1,
				showFilterControls: !1,
				showOptionsMenu: !1,
				showInlineActions: !1,
				scrollTopRef: y
			}),
			v ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityThreadOptionsMenu, {
				groupBy: m,
				onGroupByChange: h,
				compactMode: b,
				showChildAgents: w,
				hasUnreadThreads: V,
				hasCompletedThreads: H,
				onCompactModeChange: x,
				onShowChildAgentsChange: T,
				onMarkAllThreadsRead: B,
				onClearCompleted: U,
				showSearch: S,
				onShowSearchChange: k,
				unreadOnly: e === "unread",
				onUnreadOnlyChange: (e) => p(e ? "unread" : "all")
			}), v) : null
		]
	});
}
export { SidebarAgentsList as default };
