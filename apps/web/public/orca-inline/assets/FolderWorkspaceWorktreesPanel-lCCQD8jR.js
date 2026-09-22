import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./lazy-with-retry--hTe1cP7.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import "./useMountedRef-De7bTfqf.js";
import "./open-in-app-catalog-D2IDnDpO.js";
import "./worktree-activation-u-wSAPlP.js";
import "./use-worktree-card-secondary-details-Cqbfo6RV.js";
import "./repo-icon-BXNqTCtG.js";
import "./DetachedHeadBadge-DE8UcHW_.js";
import "./AgentQuestionIcon-DjFsmxm7.js";
import { c as getLineageNestedRowGeometry, s as getLineageChildrenInlineStyle, t as WorktreeCard_default } from "./WorktreeCard-CtBOdAhd.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import "./dropdown-menu-DRu_J4_e.js";
import "./label-CA70r2No.js";
import "./hover-card-YPvTyc89.js";
import "./popover-DHL-338i.js";
import "./tooltip-BWXjmmf0.js";
import "./input-BrXOv9Kv.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./keybindings-1v53ESY9.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import "./dialog-s0g51002.js";
import "./badge-D7sahA2a.js";
import "./orchestration-setup-state-CE8DDbY6.js";
import "./project-skill-runtime-C8KnQgBO.js";
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
import "./stale-agent-row-BnOXWcm1.js";
import "./ssh-connect-in-flight-BpLvUVkJ.js";
import "./command-QScw0gM9.js";
import "./ime-composition-keyboard-event-yHkhp82P.js";
import "./WorktreeCardHelpers-BykCvVd_.js";
import { t as getAttachedWorktreesForFolderWorkspace } from "./folder-workspace-attached-worktrees-w3OYE_LP.js";
import "./useWorkspaceEmojiShortcodeInput-CqmOEcrU.js";
import "./LinearIcon-BZznKVMM.js";
import "./JiraIcon-CYzhsqvz.js";
import "./RepoBadgeLabel-B-Yh5QwJ.js";
import "./useShortcutLabel-B283mfzm.js";
import "./useInstalledAgentSkills-elga6kkz.js";
import "./virtual-rows-B0m00S8e.js";
import "./AgentStateDot-CrLFCeoH.js";
import "./agent-row-pane-live-title-BggTVlpJ.js";
import "./use-now-DD2-bt0J.js";
import "./worktree-agent-rows-IU_JQSGH.js";
import "./worktree-agent-row-selectors-CkGQD3YA.js";
import "./worktree-title-derived-agent-rows-BgX4iwli.js";
import "./useWorktreeAgentRows-av1v5VcW.js";
import "./structured-agent-session-tab-activation-C6wYgLO4.js";
import "./ssh-connect-verb-JmgedUaW.js";
import "./WorktreeOpenInMenu-Ck8W1PLk.js";
import "./worktree-status-B377qdvd.js";
import "./StatusIndicator-Utu7x8Uj.js";
import "./delete-worktree-flow-DRix0Gy6.js";
import "./preserved-branch-batch-toast-C08Rnofp.js";
import "./sleep-worktree-flow-CjtXa2Vw.js";
import "./agent-status-epoch-clock-CNjEkuIm.js";
import "./runtime-environment-ssh-state-BVSgstCV.js";
import "./SelectedTextCopyMenu-Brh7AZmC.js";
import "./HostedReviewUnlinkMenuItem-QSK7_CoH.js";
import "./automation-host-client-C0Y3sYiB.js";
import "./linear-agent-skill-runtime-BlDhG-tE.js";
import "./CliSkillRuntimeSetup-l01nqxEe.js";
import "./crash-diagnostics-miosj6jR.js";
import "./workspace-browser-tab-open-BzgRRhYJ.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function stopNestedWorktreeCardBubble(e) {
	e.stopPropagation();
}
function FolderWorkspaceWorktreesPanel() {
	let e = useAppStore((e) => e.activeWorktreeId), o = useAppStore((e) => e.activeWorkspaceKey), l = useAppStore((e) => e.settings?.experimentalNewWorktreeCardStyle) === !0, f = useAppStore((e) => e.folderWorkspaces), p = useAppStore((e) => e.workspaceLineageByChildKey), m = useAppStore((e) => e.worktreeLineageById), h = useAppStore((e) => e.worktreesByRepo), g = useAppStore((e) => e.repos), [_, v] = (0, import_react.useState)(() => /* @__PURE__ */ new Set()), y = new Map(g.map((e) => [e.id, e])), { folderWorkspace: b, childWorktrees: x, lineageChildrenByParentId: S, rootChildWorktrees: C } = getAttachedWorktreesForFolderWorkspace({
		activeWorkspaceKey: o,
		activeWorktreeId: e,
		folderWorkspaces: f,
		workspaceLineageByChildKey: p,
		worktreeLineageById: m,
		worktreesByRepo: h
	}), w = (e) => {
		v((o) => {
			let s = new Set(o);
			return s.has(e) ? s.delete(e) : s.add(e), s;
		});
	}, T = (o, s = /* @__PURE__ */ new Set()) => {
		let c = S.get(o.id) ?? [], u = _.has(o.id), d = new Set([...s, o.id]), f = c.filter((e) => !d.has(e.id)), p = f.length > 0, m = getLineageNestedRowGeometry({
			experimentalNewWorktreeCardStyle: l,
			inheritedCardContentIndent: 0,
			lineageDepth: s.size
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeCard_default, {
			worktree: o,
			repo: y.get(o.repoId),
			isActive: e === o.id,
			isActiveSurface: !1,
			hideRepoBadge: !1,
			nativeDragEnabled: !1,
			flushSurface: !0,
			contentIndent: m.cardContentIndent,
			affiliateListMode: !0,
			lineageChildCount: f.length,
			lineageCollapsed: u,
			lineageChildren: !u && p ? f.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				onClick: stopNestedWorktreeCardBubble,
				onDoubleClick: stopNestedWorktreeCardBubble,
				onDragStart: stopNestedWorktreeCardBubble,
				style: m.surfaceInset > 0 ? { paddingLeft: m.surfaceInset } : void 0,
				children: T(e, d)
			}, e.id)) : void 0,
			lineageChildrenStyle: p ? getLineageChildrenInlineStyle(m.lineageChildrenInlineOffset) : void 0,
			onLineageToggle: p ? (e) => {
				e.preventDefault(), e.stopPropagation(), w(o.id);
			} : void 0
		}, o.id);
	};
	return b ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col overflow-hidden bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-border px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "truncate text-sm font-medium text-foreground",
				children: b.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-xs text-muted-foreground",
				children: x.length === 1 ? translate("auto.components.rightSidebar.FolderWorkspaceWorktreesPanel.countOne", "1 attached worktree") : translate("auto.components.rightSidebar.FolderWorkspaceWorktreesPanel.countMany", "{{value0}} attached worktrees", { value0: x.length })
			})]
		}), x.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col items-center justify-center px-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-medium text-foreground",
				children: translate("auto.components.rightSidebar.FolderWorkspaceWorktreesPanel.emptyTitle", "No attached worktrees yet")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 max-w-[16rem] text-xs leading-5 text-muted-foreground",
				children: translate("auto.components.rightSidebar.FolderWorkspaceWorktreesPanel.emptyCopy", "Worktrees created from this workspace will show up here.")
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scrollbar-sleek min-h-0 flex-1 overflow-y-auto py-2 pl-1 pr-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-1",
				children: C.map((e) => T(e))
			})
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-0 flex-1 items-center justify-center p-6 text-center text-sm text-muted-foreground",
		children: translate("auto.components.rightSidebar.FolderWorkspaceWorktreesPanel.unavailable", "Workspaces are only shown for folder workspaces.")
	});
}
export { FolderWorkspaceWorktreesPanel as default };
