import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import "./useMountedRef-De7bTfqf.js";
import "./worktree-activation-u-wSAPlP.js";
import { t as GitBranch } from "./git-branch-CuLRr9n5.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as RotateCcw } from "./rotate-ccw-Dz2ARXLO.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./renderer-app-platform--nJ6HYmL.js";
import { t as installWindowVisibilityInterval } from "./window-visibility-interval-BxcyZyE8.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
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
import "./icons-CAdlcsWl.js";
import "./agent-catalog-Cgr0_vcs.js";
import "./ssh-types-B1wsSHlf.js";
import "./agent-trust-preflight-CUssWH-t.js";
import "./structured-agent-session-provisional-tab-PRgRPsbX.js";
import { i as getCreationProgressLabel, t as retryBackgroundWorktreeCreation } from "./worktree-creation-flow-BGGvQHCN.js";
import "./workspace-activation-terminal-focus-B9k6IhiW.js";
import "./ephemeral-vm-recipes-B_01x9qK.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function WorktreeCreationPanel({ creationId: e, reserveCollapsedSidebarHeaderSpace: u = !1 }) {
	let g = useAppStore((u) => u.pendingWorktreeCreations[e]), [_, v] = import_react.useState(() => Date.now()), y = g?.status;
	if (import_react.useEffect(() => {
		if (y === "creating") return installWindowVisibilityInterval({
			run: () => v(Date.now()),
			intervalMs: 1e3
		});
	}, [y]), !g) return null;
	let b = () => useAppStore.getState().removePendingWorktreeCreation(e), x = g.status === "error", S = g.phase === "provisioning-vm", C = g.request.displayName || g.request.name, w = formatElapsedTime(_ - g.startedAt);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 flex flex-col bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-[36px] shrink-0 items-stretch border-b border-border bg-card",
			children: [u ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0",
				style: {
					width: "var(--collapsed-sidebar-header-width)",
					WebkitAppRegion: "no-drag"
				}
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-full max-w-[240px] items-center gap-1.5 border-r border-border px-2.5 text-xs",
				children: [
					x ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-3.5 shrink-0 text-destructive" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-medium text-foreground",
						children: C
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						title: translate("auto.components.worktree.creation.WorktreeCreationPanel.532aea14ce", "Cancel"),
						"aria-label": translate("auto.components.worktree.creation.WorktreeCreationPanel.a3346fc6ed", "Cancel worktree creation"),
						onClick: b,
						className: "flex size-4 shrink-0 items-center justify-center rounded-sm text-muted-foreground hover:bg-muted hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-0 flex-1 p-3",
			children: S ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VmProvisioningStatus, {
				elapsedLabel: w,
				log: g.provisioningLog ?? "",
				error: x ? g.error ?? translate("auto.components.worktree.creation.WorktreeCreationPanel.767951265d", "Something went wrong while creating the worktree.") : null,
				onCancel: b,
				onRetry: () => retryBackgroundWorktreeCreation(e),
				onDismiss: b
			}) : x ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-destructive",
						children: translate("auto.components.worktree.creation.WorktreeCreationPanel.ed2a664f8b", "Couldn’t create worktree")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: g.error ?? translate("auto.components.worktree.creation.WorktreeCreationPanel.767951265d", "Something went wrong while creating the worktree.")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => retryBackgroundWorktreeCreation(e),
						className: "inline-flex items-center gap-1 text-foreground hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3" }), translate("auto.components.worktree.creation.WorktreeCreationPanel.34dd5ee38b", "Retry")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: b,
						className: "text-muted-foreground hover:text-foreground hover:underline",
						children: translate("auto.components.worktree.creation.WorktreeCreationPanel.dabd226118", "Dismiss")
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-0 max-w-3xl flex-col gap-2 text-xs text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 shrink-0 animate-spin" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: getCreationProgressLabel(g) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground/70",
							children: w
						})
					]
				})
			})
		})]
	});
}
function VmProvisioningStatus({ elapsedLabel: e, log: u, error: f, onCancel: m, onRetry: h, onDismiss: g }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-full justify-center pt-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full max-w-2xl flex-col gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col items-center gap-2 text-center",
				children: f == null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm font-medium text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 shrink-0 animate-spin text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.worktree.creation.WorktreeCreationPanel.vmProvisioningTitle", "Provisioning VM") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-normal text-muted-foreground",
							children: e
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: m,
					className: "text-xs text-muted-foreground hover:text-foreground hover:underline",
					children: translate("auto.components.worktree.creation.WorktreeCreationPanel.cancelProvisioning", "Cancel")
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 shrink-0 text-destructive" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-destructive",
							children: translate("auto.components.worktree.creation.WorktreeCreationPanel.ed2a664f8b", "Couldn’t create worktree")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-normal text-muted-foreground",
							children: f
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: h,
						className: "inline-flex items-center gap-1 text-foreground hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3" }), translate("auto.components.worktree.creation.WorktreeCreationPanel.34dd5ee38b", "Retry")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: g,
						className: "text-muted-foreground hover:text-foreground hover:underline",
						children: translate("auto.components.worktree.creation.WorktreeCreationPanel.dabd226118", "Dismiss")
					})]
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecipeOutputLog, {
				log: u,
				emptyLabel: translate("auto.components.worktree.creation.WorktreeCreationPanel.vmProvisioningLogEmpty", "Waiting for recipe output…")
			})]
		})
	});
}
function RecipeOutputLog({ log: e, emptyLabel: u }) {
	let d = import_react.useRef(null), f = import_react.useRef(!0), p = import_react.useCallback(() => {
		let e = d.current;
		e && (f.current = e.scrollHeight - e.scrollTop - e.clientHeight < 8);
	}, []);
	return import_react.useEffect(() => {
		let e = d.current;
		e && f.current && (e.scrollTop = e.scrollHeight);
	}, [e]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		ref: d,
		onScroll: p,
		className: "scrollbar-sleek h-72 overflow-auto whitespace-pre-wrap rounded-md bg-muted/40 p-3 font-mono text-[11px] leading-4 text-muted-foreground",
		children: e || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground/60",
			children: u
		})
	});
}
function formatElapsedTime(e) {
	let u = Math.max(0, Math.floor(e / 1e3)), d = Math.floor(u / 60), f = u % 60;
	return d === 0 ? `${f}s` : `${d}m ${f.toString().padStart(2, "0")}s`;
}
export { WorktreeCreationPanel as default };
