import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import "./worktree-activation-u-wSAPlP.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { $_ as getRuntimeGitStatus, Sv as getWorktreeHostIdentity, Vp as toWorktreeRemovalTarget, YS as getExecutionHostLabel, bv as composeWorktreeHostIdentity, iC as parseExecutionHostId, iw as Trash2, kg as isFolderRepo, sy as findRepoForHost, t as useAppStore, zf as getSettingsForWorktreeRuntimeOwner } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as Workflow } from "./workflow-C5z_2wJq.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { t as ScrollArea } from "./scroll-area-_VXJFT4y.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import "./window-park-visibility-BBcurIcE.js";
import { a as getWorktreeOnHostFromState, d as useAllWorktrees } from "./selectors-Cdg4hUQI.js";
import "./web-runtime-session-CeAC5QPx.js";
import "./agent-paste-draft-Ddp-k6QZ.js";
import "./agent-process-recognition-BUFJTuDF.js";
import "./native-chat-session-option-cache-DOY0fjiI.js";
import "./gitlab-links-Di3ozbga.js";
import "./agent-status-worktree-attribution-0Thqf3S9.js";
import "./localized-catalog-Dsz6wk5E.js";
import { t as getConnectionId } from "./connection-context-2sxF2wah.js";
import "./web-session-tabs-sync-BfOF1RHT.js";
import "./pane-agent-owner-Ci26i0GA.js";
import { t as useSidebarHostScopeOptions } from "./use-sidebar-host-scope-options-Cgolua5p.js";
import { a as prepareActiveWorktreeFocusAfterDelete, d as getWorkspaceDeleteLineage, l as showWorkspaceListChangedToast, o as readWorktreeDeleteIdentities, r as runWorktreeDeletesInParallel, s as resolveWorktreeBatchDeleteTargets, u as getDeleteStateForWorktreeHost } from "./delete-worktree-flow-DRix0Gy6.js";
import "./preserved-branch-batch-toast-C08Rnofp.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function DeleteWorktreeDirtyChangeHint({ changeCount: e }) {
	if (e === void 0) return null;
	let t = e > 0 ? `${e} uncommitted or untracked ${e === 1 ? "change" : "changes"}` : "Uncommitted or untracked changes";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-1 flex w-fit max-w-full items-center gap-1.5 text-destructive",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 truncate font-medium",
				children: t
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "top",
		sideOffset: 4,
		children: translate("auto.components.sidebar.DeleteWorktreeDirtyChangeHint.8e2994ce28", "Deleting this workspace permanently removes these changes from disk.")
	})] });
}
function DeleteWorktreeLineageNotice({ descendants: e, dirtyChangeCountsByWorktreeId: t }) {
	let r = e.length;
	return r === 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-w-0 max-w-full overflow-hidden rounded-md border border-border/70 bg-muted/35 px-3 py-2 text-xs",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "mt-0.5 size-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium text-foreground",
						children: translate("auto.components.sidebar.DeleteWorktreeLineageNotice.a940f3c96e", "Child workspaces will be deleted")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-muted-foreground",
						children: r === 1 ? translate("auto.components.sidebar.DeleteWorktreeLineageNotice.66798cc6a2", "Deleting this workspace also deletes 1 child workspace.") : translate("auto.components.sidebar.DeleteWorktreeLineageNotice.29b98bf9cd", "Deleting this workspace also deletes {{value0}} child workspaces.", { value0: r })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 min-w-0 max-w-full space-y-1 overflow-hidden rounded-sm border border-border/60 bg-background/60 px-2 py-1.5",
						children: [e.slice(0, 4).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate font-medium text-foreground",
									children: e.displayName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-muted-foreground",
									children: e.path
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteWorktreeDirtyChangeHint, { changeCount: t.get(e.hostId ? getWorktreeHostIdentity(e) : e.id) })
							]
						}, e.id)), e.length > 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-muted-foreground",
							children: [
								"+",
								e.length - 4,
								" ",
								translate("auto.components.sidebar.DeleteWorktreeLineageNotice.ad407c2d55", "more")
							]
						}) : null]
					})
				]
			})]
		})
	});
}
function DeleteWorktreeSkipConfirmOption({ showDontAskAgain: e, dontAskAgain: t, onToggleDontAskAgain: r }) {
	return e ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "checkbox",
		"aria-checked": t,
		onClick: r,
		className: "flex items-center gap-2 rounded-sm px-1 py-1 text-xs text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `flex size-4 items-center justify-center rounded-sm border transition-colors ${t ? "border-foreground bg-foreground text-background" : "border-muted-foreground bg-transparent"}`,
			children: t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "size-3",
				strokeWidth: 3
			}) : null
		}), translate("auto.components.sidebar.DeleteWorktreeSkipConfirmOption.29aefb7e52", "Don't ask again")]
	}) : null;
}
function DeleteWorktreeDialogFooter({ isMainWorktree: e, isDeleting: t, canForceDelete: i, isBatchDelete: o, worktreeCount: s, canDeleteAllLineage: c, lineageDeleteTargetCount: l, onCancel: u, onForceDelete: d, onDelete: p, confirmButtonRef: m }) {
	let h = t ? i ? "Force Deleting..." : "Deleting..." : o ? `Delete ${s} Workspaces` : c ? `Delete ${l} Workspaces` : i ? "Force Delete" : "Delete Workspace";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "outline",
		onClick: u,
		disabled: t,
		children: e ? translate("auto.components.sidebar.DeleteWorktreeDialogFooter.cf95e3b5bb", "Close") : translate("auto.components.sidebar.DeleteWorktreeDialogFooter.c0e972d726", "Cancel")
	}), !e && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref: m,
		variant: "destructive",
		onClick: i ? d : p,
		disabled: t,
		children: [t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), h]
	})] });
}
function DeleteWorktreeDialogDescription({ targetClassName: e, targetLabel: t, canDeleteAllLineage: r, childTargetLabel: i, descriptionSuffix: a }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
		className: "text-xs",
		children: [
			translate("auto.components.sidebar.DeleteWorktreeDialog.91492c9ad6", "Remove"),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: e,
				children: t
			}),
			r ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				" ",
				translate("auto.components.sidebar.DeleteWorktreeDialog.ff2a74ac0e", "and"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground",
					children: i
				}),
				" ",
				a
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" ", a] })
		]
	});
}
function getCollisionIds(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let r of e) t.has(r.id) ? n.add(r.id) : t.add(r.id);
	return n;
}
function getTargetHostLabel(e, t) {
	let r = parseExecutionHostId(e.hostId)?.id;
	return r ? t.get(r) ?? getExecutionHostLabel(r) : translate("components.workspace.cleanup.host.unknown", "Unknown host");
}
function DeleteWorktreeTargetPreview({ isBatchDelete: e, worktree: t, worktrees: n, collisionWorktrees: r, hostLabelById: i, deleteStateByWorktreeId: o, dirtyChangeCountsByWorktreeId: c }) {
	let l = (0, import_react.useId)(), u = getCollisionIds(r);
	if (e) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
		className: "max-h-48 rounded-md border border-border/70 bg-muted/35 text-xs",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-1 px-3 py-2",
			role: "list",
			children: n.map((e, t) => {
				let n = getDeleteStateForWorktreeHost(e, o), r = {
					name: `${l}-${t}-name`,
					path: `${l}-${t}-path`,
					host: `${l}-${t}-host`
				}, d = u.has(e.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "listitem",
					"aria-labelledby": `${r.name} ${r.path}${d ? ` ${r.host}` : ""}`,
					className: "min-w-0 border-b border-border/50 py-1 last:border-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									id: r.name,
									className: "break-all font-medium text-foreground",
									children: e.displayName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									id: r.path,
									className: "mt-0.5 break-all text-muted-foreground",
									children: e.path
								}),
								d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									id: r.host,
									className: "mt-0.5 text-muted-foreground",
									children: getTargetHostLabel(e, i)
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteWorktreeDirtyChangeHint, { changeCount: c.get(e.hostId ? getWorktreeHostIdentity(e) : e.id) }),
								n?.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 whitespace-pre-wrap break-all text-destructive",
									children: n.error
								}) : null
							]
						}), n?.isDeleting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mt-0.5 size-3.5 shrink-0 animate-spin text-muted-foreground" }) : null]
					})
				}, getWorktreeHostIdentity(e));
			})
		})
	});
	if (!t) return null;
	let d = {
		name: `${l}-name`,
		path: `${l}-path`,
		host: `${l}-host`
	}, f = u.has(t.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "region",
		"aria-labelledby": `${d.name} ${d.path}${f ? ` ${d.host}` : ""}`,
		className: "rounded-md border border-border/70 bg-muted/35 px-3 py-2 text-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: d.name,
				className: "break-all font-medium text-foreground",
				children: t.displayName
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: d.path,
				className: "mt-1 break-all text-muted-foreground",
				children: t.path
			}),
			f ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: d.host,
				className: "mt-0.5 text-muted-foreground",
				children: getTargetHostLabel(t, i)
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteWorktreeDirtyChangeHint, { changeCount: c.get(t.hostId ? getWorktreeHostIdentity(t) : t.id) })
		]
	});
}
function DeleteWorktreeWarningPanels({ isMainWorktree: e, mainWorktreeBlocker: t, deleteError: r }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [e && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-md border border-border/70 bg-muted/35 px-3 py-2 text-xs text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					translate("auto.components.sidebar.DeleteWorktreeWarningPanels.e3be9eba15", "This is the"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: translate("auto.components.sidebar.DeleteWorktreeWarningPanels.c4f96a6e18", "main worktree")
					}),
					" ",
					translate("auto.components.sidebar.DeleteWorktreeWarningPanels.026738155a", "(the original clone directory)."),
					t ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" ", t] }) : null
				]
			})]
		})
	}), r && !e && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-md border border-destructive/40 bg-destructive/8 px-3 py-2 text-xs text-destructive",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1 whitespace-pre-wrap break-all",
				children: r
			})]
		})
	})] });
}
function persistDeleteWorktreeConfirmSkipPreference({ updateSettings: e, openSettingsPage: t, openSettingsTarget: r }) {
	e({ skipDeleteWorktreeConfirm: !0 }), toast.success(translate("auto.components.sidebar.DeleteWorktreeDialog.dd3a45bbbd", "We'll skip this confirmation next time."), {
		description: translate("auto.components.sidebar.DeleteWorktreeDialog.2b56b35f53", "You can change this in Settings."),
		duration: 8e3,
		action: {
			label: translate("auto.components.sidebar.DeleteWorktreeDialog.5cc1a6701c", "Open Settings"),
			onClick: () => {
				t(), r({
					pane: "general",
					repoId: null,
					sectionId: "general-skip-delete-worktree-confirm"
				});
			}
		}
	});
}
function isFolderWorkspaceDelete(e, t) {
	if (!t) return !1;
	let n = e.get(t.repoId);
	return n ? isFolderRepo(n) : !1;
}
function countFolderWorkspaceDeletes(e, t) {
	return t.filter((t) => isFolderWorkspaceDelete(e, t)).length;
}
function getDeleteWorktreeDialogCopy(e) {
	let t = e.isBatchDelete && e.worktreeCount > 0 && e.folderWorkspaceDeleteCount === e.worktreeCount, n = e.isBatchDelete && e.folderWorkspaceDeleteCount > 0 && e.folderWorkspaceDeleteCount < e.worktreeCount;
	return {
		targetLabel: e.isBatchDelete ? `${e.worktreeCount} workspaces` : e.worktree?.displayName,
		targetClassName: e.isBatchDelete ? "font-medium text-foreground" : "break-all font-medium text-foreground",
		descriptionSuffix: e.isBatchDelete ? t ? "from Orca. Project folders on disk will not be deleted." : n ? "from Orca. Git worktrees will also be removed from git and disk; folder workspaces will only remove the Orca workspace entry." : "from git and delete their workspace folders." : e.isFolderWorkspaceDelete ? "from Orca. The project folder on disk will not be deleted." : "from git and delete its workspace folder.",
		mainWorktreeBlocker: e.isFolderWorkspaceDelete ? "Remove the folder project instead of deleting this workspace." : "Git does not allow removing the main worktree."
	};
}
function getDeleteWorktreeLineageDialogCopy(e) {
	let t = e.deleteTargetCount > 0 && e.folderWorkspaceDeleteCount === e.deleteTargetCount, n = e.folderWorkspaceDeleteCount > 0 && e.folderWorkspaceDeleteCount < e.deleteTargetCount;
	return {
		childTargetLabel: e.childWorkspaceCount === 1 ? "1 child workspace" : `${e.childWorkspaceCount} child workspaces`,
		descriptionSuffix: t ? "from Orca. Project folders on disk will not be deleted." : n ? "from Orca. Git worktrees will also be removed from git and disk; folder workspaces will only remove the Orca workspace entry." : "from git and delete their workspace folders."
	};
}
function orderDeleteWorktreeStatusHydrationTargets({ targets: e, visibleTargets: t, activeWorktreeId: n, activeExecutionHostId: r }) {
	let i = new Set(t.map(getWorktreeHostIdentity));
	return e.map((e, t) => ({
		target: e,
		index: t,
		rank: e.id === n && (!r || (e.hostId ?? "local") === r) ? 0 : i.has(getWorktreeHostIdentity(e)) ? 1 : 2
	})).sort((e, t) => e.rank - t.rank || e.index - t.index).map(({ target: e }) => e);
}
function getDeleteWorktreeDirtyChangeCounts({ deleteTargets: e, deleteStateByWorktreeId: t, gitStatusByWorktree: n, gitStatusByWorktreeIdentity: r, repoMap: i }) {
	let a = /* @__PURE__ */ new Map();
	for (let o of e) {
		if (o.isMainWorktree || isFolderWorkspaceDelete(i, o)) continue;
		let e = o.hostId ? getWorktreeHostIdentity(o) : o.id, c = getDeleteStateForWorktreeHost(o, t)?.forceDeleteReason, l = (o.hostId ? r?.get(getWorktreeHostIdentity(o)) : n[o.id])?.length;
		(l ?? 0) > 0 ? a.set(e, l ?? 0) : c === "dirty" && a.set(e, 0);
	}
	return a;
}
var EMPTY_STATUS_BY_IDENTITY = /* @__PURE__ */ new Map();
function useDeleteWorktreeStatusHydration({ isOpen: e, deleteTargets: t, visibleTargets: n, repoMap: r }) {
	let i = useAppStore((e) => e.repos), a = useAppStore((e) => e.settings), c = e ? t.map(getWorktreeHostIdentity).join("\n") : "", l = (0, import_react.useRef)(c), [u, f] = (0, import_react.useState)(() => /* @__PURE__ */ new Map()), p = l.current === c ? u : EMPTY_STATUS_BY_IDENTITY;
	return (0, import_react.useEffect)(() => {
		if (l.current = c, f(/* @__PURE__ */ new Map()), !e) return;
		let u = useAppStore.getState().gitStatusByWorktree, p = useAppStore.getState(), _ = orderDeleteWorktreeStatusHydrationTargets({
			targets: t.filter((e) => !e.isMainWorktree && !isFolderWorkspaceDelete(r, e)),
			visibleTargets: n,
			activeWorktreeId: p.activeWorktreeId,
			activeExecutionHostId: p.activeWorkspaceExecutionHostId
		}), v = new AbortController();
		for (let e of _) {
			let t = getWorktreeHostIdentity(e), n = e.hostId ? void 0 : u[e.id];
			if (n) {
				f((e) => new Map(e).set(t, n));
				continue;
			}
			let r = e.hostId ? findRepoForHost(i, e.repoId, { hostId: e.hostId }) : void 0, p = parseExecutionHostId(e.hostId), _ = p?.kind === "runtime" ? p.environmentId : null;
			getRuntimeGitStatus({
				settings: e.hostId ? a ? {
					...a,
					activeRuntimeEnvironmentId: _
				} : { activeRuntimeEnvironmentId: _ } : getSettingsForWorktreeRuntimeOwner({
					repos: i,
					settings: a,
					worktreesByRepo: useAppStore.getState().worktreesByRepo
				}, e.id),
				worktreeId: e.id,
				worktreePath: e.path,
				connectionId: e.hostId ? r?.connectionId ?? void 0 : getConnectionId(e.id) ?? void 0
			}, {
				admissionTier: "background",
				includeLineStats: !1,
				signal: v.signal
			}).then((e) => {
				!v.signal.aborted && l.current === c && f((n) => new Map(n).set(t, e.entries));
			}).catch(() => {});
		}
		return () => {
			v.abort();
		};
	}, [
		t,
		c,
		e,
		r,
		i,
		a,
		n
	]), p;
}
function useConfirmedWorktreeDeleteTargets({ worktreeIdentityData: e, lineageIdentityData: t, closeModal: n }) {
	return {
		worktreeDeleteIdentities: (0, import_react.useMemo)(() => readWorktreeDeleteIdentities(e), [e]),
		lineageDeleteIdentities: (0, import_react.useMemo)(() => readWorktreeDeleteIdentities(t), [t]),
		resolveConfirmedTargets: (0, import_react.useCallback)((e, t) => {
			let r = useAppStore.getState(), i = resolveWorktreeBatchDeleteTargets(e, (e, t) => getWorktreeOnHostFromState(r, e, t));
			return !i || i.length !== t ? (showWorkspaceListChangedToast(), n(), null) : i;
		}, [n])
	};
}
function runLineageDeleteAll(e) {
	if (e.deleteAllTargetCount <= 1) return;
	let t = e.resolveConfirmedTargets(e.lineageDeleteIdentities, e.deleteAllTargetCount);
	if (!t) return;
	let n = runWorktreeDeletesInParallel(t, {
		force: e.forceOnConfirm,
		onForceDeleted: e.onForceDeleted
	});
	e.closeModal(), n.then((t) => {
		t.length > 0 && e.onDeleted?.(t);
	});
}
function runDialogForceDelete(e) {
	let { worktreeId: t, currentWorktrees: r, removeWorktree: i, closeModal: a, onDeleted: o } = e, s = r.find((e) => e.id === t);
	if (!s) {
		showWorkspaceListChangedToast(), a();
		return;
	}
	let l = prepareActiveWorktreeFocusAfterDelete(t), u = i(toWorktreeRemovalTarget(s), !0, { allowUnverifiedPtyStop: !0 });
	a(), u.then((e) => {
		if (!e.ok) {
			toast.error(translate("auto.components.sidebar.DeleteWorktreeDialog.42e610d6cf", "Force delete failed"), { description: e.error });
			return;
		}
		l(), o?.([toWorktreeRemovalTarget(s)]);
	}).catch((e) => {
		toast.error(translate("auto.components.sidebar.DeleteWorktreeDialog.4f6750ca7b", "Failed to delete workspace"), { description: e instanceof Error ? e.message : String(e) });
	});
}
var DeleteWorktreeDialog_default = import_react.memo(function() {
	let e = useAppStore((e) => e.activeModal), t = useAppStore((e) => e.modalData), r = useAppStore((e) => e.closeModal), i = useAppStore((e) => e.removeWorktree), a = useAppStore((e) => e.clearWorktreeDeleteState), o = useAllWorktrees(), c = useAppStore((e) => e.repos), l = useAppStore((e) => e.worktreeLineageById), d = useAppStore((e) => e.updateSettings), f = useAppStore((e) => e.openSettingsTarget), p = useAppStore((e) => e.openSettingsPage), m = useAppStore((e) => e.gitStatusByWorktree), { hostOptions: g } = useSidebarHostScopeOptions(), _ = (0, import_react.useMemo)(() => new Map(g.map((e) => [e.id, e.label])), [g]), v = e === "delete-worktree", y = typeof t.worktreeId == "string" ? t.worktreeId : "", b = (0, import_react.useMemo)(() => Array.isArray(t.worktreeIds) ? t.worktreeIds.filter((e) => typeof e == "string") : y ? [y] : [], [t.worktreeIds, y]), { worktreeDeleteIdentities: x, lineageDeleteIdentities: S, resolveConfirmedTargets: C } = useConfirmedWorktreeDeleteTargets({
		worktreeIdentityData: t.worktreeDeleteIdentities,
		lineageIdentityData: t.lineageDeleteIdentities,
		closeModal: r
	}), w = (0, import_react.useMemo)(() => x.length > 0 ? x : b.map((e) => ({
		id: e,
		hostId: void 0
	})), [x, b]), T = typeof t.onDeleted == "function" ? t.onDeleted : null, E = t.forceOnConfirm !== !1, D = (0, import_react.useMemo)(() => {
		if (!y) return null;
		let e = x.find((e) => e.id === y);
		return o.find((t) => t.id === y && (!e?.hostId || t.hostId === e.hostId)) ?? null;
	}, [
		o,
		x,
		y
	]), O = (0, import_react.useMemo)(() => {
		if (b.length === 0) return [];
		if (x.length > 0) {
			let e = new Set(x.map((e) => composeWorktreeHostIdentity(e.hostId, e.id)));
			return o.filter((t) => e.has(getWorktreeHostIdentity(t)));
		}
		let e = new Set(b);
		return o.filter((t) => e.has(t.id));
	}, [
		o,
		x,
		b
	]), k = (0, import_react.useMemo)(() => new Map(c.map((e) => [e.id, e])), [c]), A = b.length > 1, Oe = !A && isFolderWorkspaceDelete(k, D), ke = (0, import_react.useMemo)(() => countFolderWorkspaceDeletes(k, O), [k, O]), j = getDeleteWorktreeDialogCopy({
		isBatchDelete: A,
		worktree: D,
		worktreeCount: O.length,
		folderWorkspaceDeleteCount: ke,
		isFolderWorkspaceDelete: Oe
	}), M = useAppStore((e) => e.deleteStateByWorktreeId), N = (0, import_react.useMemo)(() => !A && D ? getWorkspaceDeleteLineage(D, o, l) : {
		descendants: [],
		deleteAllTargets: []
	}, [
		o,
		A,
		D,
		l
	]), P = (0, import_react.useRef)(null), F = !A && (D?.isMainWorktree ?? !1), I = N.descendants.length, Ae = I > 0, L = !F && !A && N.deleteAllTargets.length > 1, je = (0, import_react.useMemo)(() => countFolderWorkspaceDeletes(k, N.deleteAllTargets), [N.deleteAllTargets, k]), R = getDeleteWorktreeLineageDialogCopy({
		childWorkspaceCount: I,
		deleteTargetCount: N.deleteAllTargets.length,
		folderWorkspaceDeleteCount: je
	}), z = !A && t.allowSkipConfirm !== !1 && I === 0, [B, V] = (0, import_react.useState)(!1), H = (0, import_react.useMemo)(() => L ? N.deleteAllTargets : O, [
		L,
		N.deleteAllTargets,
		O
	]), Me = (0, import_react.useMemo)(() => H.map((e) => getDeleteStateForWorktreeHost(e, M)).filter((e) => e != null), [M, H]), U = D ? getDeleteStateForWorktreeHost(D, M) : void 0, W = Me.some((e) => e.isDeleting), G = A ? null : U?.error ?? null, K = !A && (U?.canForceDelete ?? !1), q = useDeleteWorktreeStatusHydration({
		isOpen: v,
		deleteTargets: H,
		visibleTargets: O,
		repoMap: k
	}), J = (0, import_react.useMemo)(() => getDeleteWorktreeDirtyChangeCounts({
		deleteTargets: H,
		deleteStateByWorktreeId: M,
		gitStatusByWorktree: m,
		gitStatusByWorktreeIdentity: q,
		repoMap: k
	}), [
		M,
		H,
		m,
		q,
		k
	]);
	!v && B && V(!1), (0, import_react.useEffect)(() => {
		if (v && b.length > 0 && O.length === 0 && !W) {
			for (let e of w) a(e.id, e.hostId);
			r();
		}
	}, [
		a,
		r,
		w,
		W,
		v,
		b,
		b.length,
		O.length
	]);
	let Y = (0, import_react.useCallback)((e) => {
		if (e) return;
		let t = useAppStore.getState().deleteStateByWorktreeId, n = w.find((e) => e.id === y), i = n ? getDeleteStateForWorktreeHost(n, t) : void 0;
		if (A) for (let e of w) getDeleteStateForWorktreeHost(e, t)?.isDeleting || a(e.id, e.hostId);
		else y && !i?.isDeleting && a(y, n?.hostId);
		r();
	}, [
		a,
		r,
		w,
		A,
		y
	]), X = (0, import_react.useCallback)(() => {
		persistDeleteWorktreeConfirmSkipPreference({
			updateSettings: d,
			openSettingsPage: p,
			openSettingsTarget: f
		});
	}, [
		p,
		f,
		d
	]), Z = (0, import_react.useCallback)((e) => {
		T?.([e]);
	}, [T]), Q = (0, import_react.useCallback)((e = !1) => {
		if (b.length === 0) return;
		let t = C(x, b.length);
		if (t) if (B && z && !e && X(), e) runDialogForceDelete({
			worktreeId: y,
			currentWorktrees: t,
			removeWorktree: i,
			closeModal: r,
			onDeleted: T
		});
		else {
			let e = runWorktreeDeletesInParallel(t, {
				force: E,
				onForceDeleted: Z
			});
			r(), e.then((e) => {
				e.length > 0 && T?.(e);
			});
		}
	}, [
		r,
		B,
		z,
		Z,
		E,
		T,
		X,
		i,
		b.length,
		x,
		y,
		C
	]), $ = (0, import_react.useCallback)(() => {
		runLineageDeleteAll({
			deleteAllTargetCount: N.deleteAllTargets.length,
			lineageDeleteIdentities: S,
			resolveConfirmedTargets: C,
			forceOnConfirm: E,
			onForceDeleted: Z,
			closeModal: r,
			onDeleted: T
		});
	}, [
		r,
		Z,
		E,
		N.deleteAllTargets.length,
		S,
		T,
		C
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: v,
		onOpenChange: Y,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-md",
			onOpenAutoFocus: (e) => {
				F || (e.preventDefault(), P.current?.focus());
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-sm",
					children: A ? translate("auto.components.sidebar.DeleteWorktreeDialog.86f0ae1257", "Delete Workspaces") : translate("auto.components.sidebar.DeleteWorktreeDialog.fc23c4cbdf", "Delete Workspace")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteWorktreeDialogDescription, {
					targetClassName: j.targetClassName,
					targetLabel: j.targetLabel,
					canDeleteAllLineage: L,
					childTargetLabel: R.childTargetLabel,
					descriptionSuffix: L ? R.descriptionSuffix : j.descriptionSuffix
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteWorktreeTargetPreview, {
					isBatchDelete: A,
					worktree: D,
					worktrees: O,
					collisionWorktrees: o,
					hostLabelById: _,
					deleteStateByWorktreeId: M,
					dirtyChangeCountsByWorktreeId: J
				}),
				Ae && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteWorktreeLineageNotice, {
					descendants: N.descendants,
					dirtyChangeCountsByWorktreeId: J
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteWorktreeWarningPanels, {
					isMainWorktree: F,
					mainWorktreeBlocker: j.mainWorktreeBlocker,
					deleteError: G
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteWorktreeSkipConfirmOption, {
					showDontAskAgain: !F && z && !K,
					dontAskAgain: B,
					onToggleDontAskAgain: () => V((e) => !e)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteWorktreeDialogFooter, {
					isMainWorktree: F,
					isDeleting: W,
					canForceDelete: K,
					isBatchDelete: A,
					worktreeCount: O.length,
					canDeleteAllLineage: L,
					lineageDeleteTargetCount: N.deleteAllTargets.length,
					onCancel: () => Y(!1),
					onForceDelete: () => Q(!0),
					onDelete: L ? $ : () => Q(!1),
					confirmButtonRef: P
				}) })
			]
		})
	});
});
export { DeleteWorktreeDialog_default as default };
