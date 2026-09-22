import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as CircleQuestionMark } from "./circle-question-mark-Wq5PWCoc.js";
import { t as Search } from "./search-CF4JLrDD.js";
import { t as Settings } from "./settings-D0EstZRB.js";
import { Ag as isGitRepoKind, Hy as normalizeCustomWorktreeVisibilitySources, Iy as MAX_CUSTOM_WORKTREE_VISIBILITY_SOURCES, My as effectiveExternalWorktreeVisibility, Na as GLOBAL_WORKTREE_VISIBILITY_SETTINGS_TARGET_ID, Py as isLegacyRepoForExternalWorktreeVisibility, Ry as effectiveBuiltInWorktreeSourceVisibility, Uy as normalizeWorktreeVisibilitySourcePreferences, Wy as resolveCustomWorktreeVisibilitySources, cy as getRepoHostIdentity, eC as getWorktreeExecutionHostId, iC as parseExecutionHostId, sy as findRepoForHost, t as useAppStore, tb as relativePathInsideRoot, zy as effectiveCustomWorktreeSourceVisibility } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import "./label-CA70r2No.js";
import { a as PopoverTrigger, i as PopoverContent, t as Popover } from "./popover-DHL-338i.js";
import "./toggle-BseEOkHu.js";
import "./toggle-group-DLxD3BKS.js";
import "./tooltip-BWXjmmf0.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { t as useVirtualizer } from "./esm-COD_EJuQ.js";
import { n as getRepoOwnerWorktreeVisibilityDefaults } from "./configured-worktree-base-path-Bsj1LNTJ.js";
import { i as getVisibleNonOrcaWorktrees, n as getHiddenImportableExternalWorktrees } from "./external-worktree-inbox-DUr-jvnx.js";
import { t as importNewExternalWorktreeInboxPaths } from "./new-external-worktrees-inbox-actions-BPwHy3Vw.js";
import { a as globalWorktreeVisibilitySourceValue, d as removeCustomWorktreeSourcePreference, i as getWorktreeVisibilitySourceProvenance, l as buildWorktreeSourcePreferenceUpdate, n as getWorktreeVisibilitySourceLabel, o as listInheritedWorktreeVisibilitySources, r as worktreeVisibilitySourceRowKey, s as worktreeVisibilityValueLabel, t as WorktreeVisibilitySourceList, u as removeBuiltInWorktreeSourcePreference } from "./WorktreeVisibilitySourceList-Bwvphy7d.js";
var FolderMinus = createLucideIcon("folder-minus", [["path", {
	d: "M9 13h6",
	key: "1uhe8q"
}], ["path", {
	d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
	key: "1kt360"
}]]), import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function WorktreeVisibilityHelpPopover() {
	let [e, p] = (0, import_react.useState)(!1), g = translate("auto.components.sidebar.WorktreeVisibilityHelpPopover.c41f2d7e90", "Which worktrees are hidden by default?");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "inline-flex",
		onPointerEnter: () => p(!0),
		onPointerLeave: () => p(!1),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
			open: e,
			onOpenChange: p,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon-xs",
					className: "size-5 text-muted-foreground hover:bg-transparent hover:text-foreground dark:hover:bg-transparent",
					"aria-label": g,
					"aria-expanded": e,
					onClick: () => p(!0),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "size-3.5" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
				"aria-label": g,
				align: "start",
				side: "bottom",
				sideOffset: 6,
				className: "w-80 p-3",
				onOpenAutoFocus: (e) => e.preventDefault(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-medium",
					children: g
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-2 grid list-disc gap-2 pl-4 text-xs leading-5 text-muted-foreground text-pretty",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: translate("auto.components.sidebar.WorktreeVisibilityHelpPopover.8db4e19a26", "This setting never hides worktrees created through Orca.") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: translate("auto.components.sidebar.WorktreeVisibilityHelpPopover.ec1e6a10fb", "Other worktrees start hidden to avoid unexpected sidebar clutter.") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: translate("auto.components.sidebar.WorktreeVisibilityHelpPopover.1c68c9cf77", "Enable a source for all current and future worktrees, or show individual worktrees below.") })
					]
				})]
			})]
		})
	});
}
function resolveWorktreeVisibilityHostTarget(e, p, m) {
	let h = typeof m == "string" ? parseExecutionHostId(m)?.id : void 0, g = findRepoForHost(e.repos, p, {
		hostId: h,
		settings: e.settings
	}), _ = p ? e.detectedWorktreesByRepo[p] : void 0;
	return {
		detected: _ && g && h ? {
			..._,
			worktrees: _.worktrees.filter((e) => getWorktreeExecutionHostId(e, g) === h)
		} : _,
		repo: g,
		requestedHostId: h,
		scope: g ? getRepoHostIdentity(g) : `${h ?? ""}\0${p}`
	};
}
function useWorktreeVisibilityHostActions(e, p, m) {
	return {
		refreshTargetRepo: (0, import_react.useCallback)((p, h) => e(p, {
			...h,
			...m ? { executionHostId: m } : {}
		}), [e, m]),
		updateTargetRepo: (0, import_react.useCallback)((e, h) => m ? p(e, h, { hostId: m }) : p(e, h), [m, p])
	};
}
var activeMutations = /* @__PURE__ */ new Map(), mutationListeners = /* @__PURE__ */ new Map();
function getActiveVisibilityMutation(e) {
	return activeMutations.get(e);
}
function startVisibilityMutation(e, p) {
	activeMutations.set(e, p);
}
function subscribeToVisibilityMutation(e, p) {
	let m = mutationListeners.get(e) ?? /* @__PURE__ */ new Set();
	return m.add(p), mutationListeners.set(e, m), () => {
		m.delete(p), m.size === 0 && mutationListeners.delete(e);
	};
}
function finishVisibilityMutation(e, p) {
	activeMutations.get(e) === p && (activeMutations.delete(e), mutationListeners.get(e)?.forEach((e) => e()));
}
function useVisibilityMutationFence(e) {
	let { currentScopeRef: p, refresh: m, repoId: h, scope: g, setActionState: _, setBusyPath: v, setIsToggling: y, setListState: b } = e;
	(0, import_react.useEffect)(() => {
		let e = getActiveVisibilityMutation(g);
		if (_(null), v(e?.kind === "row" ? e.path : null), y(e?.kind === "toggle"), !e) return;
		let x = !1, S = () => void 0;
		return S = subscribeToVisibilityMutation(g, () => {
			S(), m(h, { requireAuthoritative: !0 }).then((e) => {
				!x && p.current === g && (b(e ? "ready" : "failed"), v(null), y(!1));
			});
		}), () => {
			x = !0, S();
		};
	}, [
		p,
		m,
		h,
		g,
		_,
		v,
		y,
		b
	]);
}
function HiddenWorktreeRecoveryList({ repo: e, detected: p, listState: g, busyPath: _, toggling: y, onShow: b }) {
	let [x, S] = (0, import_react.useState)(""), C = (0, import_react.useId)(), w = (0, import_react.useRef)(null), T = getHiddenImportableExternalWorktrees(p), E = x.trim().toLocaleLowerCase(), D = E ? T.filter((e) => e.displayName.toLocaleLowerCase().includes(E) || e.path.toLocaleLowerCase().includes(E)) : T, O = T.length + getVisibleNonOrcaWorktrees(p).length, k = useVirtualizer({
		count: D.length,
		getScrollElement: () => w.current,
		estimateSize: () => 56,
		getItemKey: (e) => D[e]?.id ?? e,
		overscan: 3,
		initialRect: {
			width: 480,
			height: 224
		}
	});
	return T.length === 0 && g !== "ready" ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid min-w-0 gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				id: C,
				className: "text-sm font-medium",
				children: translate("auto.components.sidebar.WorktreeVisibilityDialog.7d21c5e848", "Hidden worktrees ({{value0}})", { value0: T.length })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: translate("auto.components.sidebar.HiddenWorktreeRecoveryList.64e6f53f05", "Show one without enabling its source.")
			})] }), T.length >= 10 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-48 shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-2.5 top-2 size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "search",
					className: "h-8 pl-8 text-xs",
					value: x,
					"aria-label": translate("auto.components.sidebar.WorktreeVisibilityDialog.search", "Search hidden worktrees"),
					placeholder: translate("auto.components.sidebar.WorktreeVisibilityDialog.searchPlaceholder", "Search {{value0}} worktrees…", { value0: T.length }),
					onChange: (e) => S(e.target.value)
				})]
			}) : null]
		}), D.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: w,
			role: "region",
			"aria-labelledby": C,
			className: "scrollbar-sleek max-h-56 min-w-0 overflow-y-auto",
			tabIndex: 0,
			style: { height: `${Math.min(k.getTotalSize(), 224)}px` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "relative min-w-0",
				style: { height: `${k.getTotalSize()}px` },
				children: k.getVirtualItems().map((p) => {
					let v = D[p.index];
					if (!v) return null;
					let x = relativePathInsideRoot(e.path, v.path) || v.path;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						ref: k.measureElement,
						"data-index": p.index,
						className: "absolute left-0 top-0 w-full pb-1",
						style: { transform: `translateY(${p.start}px)` },
						"aria-posinset": p.index + 1,
						"aria-setsize": D.length,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-3 rounded-md border border-border px-3 py-2 hover:bg-accent/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-sm",
									children: v.displayName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate font-mono text-xs text-muted-foreground",
									children: x
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								disabled: _ !== null || y || g === "checking",
								"aria-label": translate("auto.components.sidebar.HiddenWorktreeRecoveryList.showWorktree", "Show {{value0}} at {{value1}}", {
									value0: v.displayName,
									value1: x
								}),
								onClick: () => void b(v.path),
								children: _ === v.path ? translate("auto.components.sidebar.WorktreeVisibilityDialog.2f80cd4b97", "Showing…") : translate("auto.components.sidebar.WorktreeVisibilityDialog.e64b81d3a9", "Show")
							})]
						})
					}, v.id);
				})
			})
		}) : g === "ready" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-16 items-center gap-3 rounded-lg border border-border bg-muted/30 p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-background text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderMinus, { className: "size-3.5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[13px] font-medium",
					children: E ? translate("auto.components.sidebar.WorktreeVisibilityDialog.noMatches", "No matching worktrees") : O > 0 ? translate("auto.components.sidebar.WorktreeVisibilityDialog.allShown", "All discovered worktrees are shown") : translate("auto.components.sidebar.WorktreeVisibilityDialog.noneFound", "No non-Orca worktrees found")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: E ? translate("auto.components.sidebar.WorktreeVisibilityDialog.tryDifferentSearch", "Try a different name or path.") : O > 0 ? translate("auto.components.sidebar.WorktreeVisibilityDialog.disableSource", "Disable a source to manage its worktrees individually.") : translate("auto.components.sidebar.WorktreeVisibilityDialog.appearWhenDetected", "New worktrees will appear here when Orca detects them.")
				})]
			})]
		}) : null]
	});
}
function worktreeVisibilityUpdateError(e, p, h) {
	return e && p === void 0 && h !== void 0 ? translate("auto.components.sidebar.WorktreeVisibilityDialog.unsupportedHost", "This host doesn't support source-specific worktree visibility. Update Orca on the host to change this setting.") : translate("auto.components.sidebar.WorktreeVisibilityDialog.d40d436fc2", "Could not update worktree visibility. Try again.");
}
function useRepoOwnerVisibilityDefaults(e) {
	let p = useAppStore((e) => e.settings), m = useAppStore((e) => e.worktreeVisibilityDefaultsByHost);
	return e ? getRepoOwnerWorktreeVisibilityDefaults(e, p, m) : void 0;
}
function getLatestRepoForVisibilityScope(e) {
	return useAppStore.getState().repos.find((p) => getRepoHostIdentity(p) === e) ?? null;
}
function getRepoCustomWorktreeVisibilitySourceIds(e) {
	return new Set(normalizeCustomWorktreeVisibilitySources(e?.customWorktreeVisibilitySources)?.map((e) => e.id) ?? []);
}
function isDuplicateWorktreeVisibilitySource(e, p, m) {
	let h = resolveCustomWorktreeVisibilitySources(e, p);
	return normalizeCustomWorktreeVisibilitySources([...h, m])?.length !== h.length + 1;
}
function openGlobalWorktreeVisibilitySettings() {
	let e = useAppStore.getState();
	e.closeModal(), e.openSettingsTarget({
		pane: "general",
		repoId: null,
		sectionId: GLOBAL_WORKTREE_VISIBILITY_SETTINGS_TARGET_ID
	}), e.openSettingsPage();
}
function GlobalSettingsButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: "link",
		size: "xs",
		className: "h-auto w-fit px-0",
		onClick: openGlobalWorktreeVisibilitySettings,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-3.5" }), translate("auto.components.sidebar.WorktreeVisibilityDialog.openGlobalSettings", "Manage in Global Settings")]
	});
}
function WorktreeVisibilityGlobalSettingsLink({ repo: e, visibilityDefaults: p }) {
	let h = listInheritedWorktreeVisibilitySources(e, p);
	return h.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalSettingsButton, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-1.5 rounded-lg border border-border bg-muted/30 px-2.5 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: translate("auto.components.sidebar.WorktreeVisibilityDialog.globalSettingsSources", "These sources have a global setting you can override here:")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-[max-content_max-content] gap-x-3.5 gap-y-0.5",
				children: h.map(({ source: e, globalVisibility: p }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "contents",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-mono text-[11px] text-foreground/85",
						children: getWorktreeVisibilitySourceLabel(e)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-muted-foreground",
						children: worktreeVisibilityValueLabel(p)
					})]
				}, worktreeVisibilitySourceRowKey(e)))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalSettingsButton, {})
		]
	});
}
function WorktreeVisibilityScanStatus({ state: e, retryDisabled: p, onRetry: g }) {
	return e === "checking" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		"aria-live": "polite",
		className: "text-xs text-muted-foreground",
		children: translate("auto.components.sidebar.WorktreeVisibilityDialog.a3f19c07d2", "Checking…")
	}) : e === "failed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 items-center gap-3",
		role: "alert",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "min-w-0 flex-1 text-xs text-destructive",
			children: translate("auto.components.sidebar.WorktreeVisibilityDialog.b8d24e61f5", "Could not list this repo's worktrees.")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "outline",
			size: "sm",
			disabled: p,
			onClick: g,
			children: translate("auto.components.sidebar.WorktreeVisibilityDialog.c5e70a93b1", "Try again")
		})]
	}) : null;
}
function shouldUseGlobalWorktreeVisibility(e, p, m, h, g) {
	return getWorktreeVisibilitySourceProvenance(e, p, h ?? {}, g)?.kind === "project-override" && globalWorktreeVisibilitySourceValue(p, h) === m;
}
function createWorktreeVisibilityUseGlobalMutation(e, p, m) {
	return p.kind === "other" ? {
		updates: { externalWorktreeVisibility: null },
		isAccepted: (e) => e.externalWorktreeVisibility === void 0 && effectiveExternalWorktreeVisibility(e, isLegacyRepoForExternalWorktreeVisibility(e), m) === effectiveExternalWorktreeVisibility({}, !1, m)
	} : p.kind === "built-in" ? {
		updates: {
			agentWorktreeVisibility: null,
			worktreeVisibilitySourcePreferences: removeBuiltInWorktreeSourcePreference(e, p.id)
		},
		isAccepted: (e) => e.agentWorktreeVisibility === void 0 && normalizeWorktreeVisibilitySourcePreferences(e.worktreeVisibilitySourcePreferences)?.builtIn?.[p.id] === void 0 && effectiveBuiltInWorktreeSourceVisibility(e, p.id, m) === effectiveBuiltInWorktreeSourceVisibility({}, p.id, m)
	} : {
		updates: { worktreeVisibilitySourcePreferences: removeCustomWorktreeSourcePreference(e, p.source.id) },
		isAccepted: (e) => normalizeWorktreeVisibilitySourcePreferences(e.worktreeVisibilitySourcePreferences)?.custom?.[p.source.id] === void 0 && effectiveCustomWorktreeSourceVisibility(e, p.source.id, m) === effectiveCustomWorktreeSourceVisibility({}, p.source.id, m)
	};
}
function createWorktreeVisibilitySourceMutation(e, p, m, h) {
	return p.kind === "other" ? {
		updates: {
			externalWorktreeVisibility: m,
			...m === "show" ? { externalWorktreeDiscoverySuppressedAt: null } : {}
		},
		isAccepted: (e) => effectiveExternalWorktreeVisibility(e, isLegacyRepoForExternalWorktreeVisibility(e), h) === m
	} : {
		updates: { worktreeVisibilitySourcePreferences: buildWorktreeSourcePreferenceUpdate(e, p.kind === "built-in" ? {
			kind: "built-in",
			id: p.id
		} : {
			kind: "custom",
			id: p.source.id
		}, m) },
		isAccepted: (e) => p.kind === "built-in" ? effectiveBuiltInWorktreeSourceVisibility(e, p.id, h) === m : effectiveCustomWorktreeSourceVisibility(e, p.source.id, h) === m
	};
}
function WorktreeVisibilityDialog() {
	let e = useAppStore((e) => e.activeModal), p = useAppStore((e) => e.modalData), h = useAppStore((e) => e.closeModal), g = useAppStore((e) => e.repos), _ = useAppStore((e) => e.updateRepo), v = useAppStore((e) => e.fetchWorktrees), y = useAppStore((e) => e.detectedWorktreesByRepo), S = useAppStore((e) => e.settings), [C, w] = (0, import_react.useState)(null), [T, E] = (0, import_react.useState)(null), [O, A] = (0, import_react.useState)(!1), [j, M] = (0, import_react.useState)("checking"), N = e === "worktree-visibility", P = typeof p.repoId == "string" ? p.repoId : "", { detected: F, repo: I, requestedHostId: L, scope: R } = resolveWorktreeVisibilityHostTarget({
		repos: g,
		settings: S,
		detectedWorktreesByRepo: y
	}, P, p.hostId), z = (0, import_react.useRef)(R), B = getActiveVisibilityMutation(R), V = T ?? (B?.kind === "row" ? B.path : null), H = O || B?.kind === "toggle", U = useRepoOwnerVisibilityDefaults(I), W = (0, import_react.useMemo)(() => getRepoCustomWorktreeVisibilitySourceIds(I), [I]);
	(0, import_react.useLayoutEffect)(() => {
		z.current = R;
	}, [R]);
	let { refreshTargetRepo: G, updateTargetRepo: K } = useWorktreeVisibilityHostActions(v, _, L);
	useVisibilityMutationFence({
		scope: R,
		repoId: P,
		currentScopeRef: z,
		refresh: G,
		setActionState: w,
		setBusyPath: E,
		setIsToggling: A,
		setListState: M
	}), (0, import_react.useEffect)(() => {
		if (!N || !P || getActiveVisibilityMutation(R)) return;
		let e = !1;
		return M("checking"), G(P, { requireAuthoritative: !0 }).then((p) => {
			e || M(p ? "ready" : "failed");
		}), () => {
			e = !0;
		};
	}, [
		N,
		R,
		G,
		P
	]);
	let q = (0, import_react.useCallback)(async () => {
		if (!P) return;
		M("checking");
		let e = await G(P, { requireAuthoritative: !0 });
		z.current === R && M(e ? "ready" : "failed");
	}, [
		R,
		G,
		P
	]), J = (0, import_react.useCallback)(async (e) => {
		if (!I) return;
		let p = {
			kind: "row",
			path: e
		}, m = getRepoHostIdentity(I);
		startVisibilityMutation(m, p), E(e);
		try {
			await importNewExternalWorktreeInboxPaths({
				projectId: I.id,
				repo: I,
				worktreePaths: [e],
				updateRepo: K,
				fetchWorktrees: G,
				setInboxState: (e, p) => {
					z.current === m && (w(p), p === null && M("ready"));
				}
			});
		} finally {
			finishVisibilityMutation(m, p), z.current === m && E(null);
		}
	}, [
		G,
		I,
		K
	]), Y = (0, import_react.useCallback)(async (e, p) => {
		if (!P) return !1;
		let m = { kind: "toggle" };
		startVisibilityMutation(R, m), w(null), A(!0);
		try {
			let m = await K(P, e), h = getLatestRepoForVisibilityScope(R);
			if (!m || !h || !p(h)) return z.current === R && w({
				pending: !1,
				error: worktreeVisibilityUpdateError(m, h?.worktreeVisibilitySourcePreferences, e.worktreeVisibilitySourcePreferences)
			}), !1;
			let g = await G(P, { requireAuthoritative: !0 });
			return z.current === R && M(g ? "ready" : "failed"), !0;
		} finally {
			finishVisibilityMutation(R, m), z.current === R && A(!1);
		}
	}, [
		R,
		G,
		P,
		K
	]), X = (0, import_react.useCallback)(async (e) => {
		if (!I) return;
		let p = createWorktreeVisibilityUseGlobalMutation(I, e, U);
		await Y(p.updates, p.isAccepted);
	}, [
		Y,
		I,
		U
	]), Z = (0, import_react.useCallback)(async (e, p) => {
		if (!I) return;
		let m = p ? "show" : "hide";
		if (shouldUseGlobalWorktreeVisibility(I, e, m, U, W)) {
			await X(e);
			return;
		}
		let h = createWorktreeVisibilitySourceMutation(I, e, m, U);
		await Y(h.updates, h.isAccepted);
	}, [
		Y,
		X,
		W,
		I,
		U
	]), Q = (0, import_react.useCallback)(async (e) => {
		if (!I) return "save-failed";
		let p = normalizeCustomWorktreeVisibilitySources(I.customWorktreeVisibilitySources);
		if ((p?.length ?? 0) >= 32) return "limit";
		let m = crypto.randomUUID().replaceAll("-", ""), h = normalizeCustomWorktreeVisibilitySources([{
			id: m,
			rootPath: e
		}])?.[0];
		if (!h) return "invalid-path";
		if (isDuplicateWorktreeVisibilitySource(I, U, h)) return "duplicate-path";
		let g = normalizeCustomWorktreeVisibilitySources([...p ?? [], h]);
		return !g || g.length !== (p?.length ?? 0) + 1 ? "duplicate-path" : await Y({
			customWorktreeVisibilitySources: g,
			worktreeVisibilitySourcePreferences: buildWorktreeSourcePreferenceUpdate(I, {
				kind: "custom",
				id: m
			}, "hide")
		}, (e) => normalizeCustomWorktreeVisibilitySources(e.customWorktreeVisibilitySources)?.some((e) => e.id === m) === !0 && effectiveCustomWorktreeSourceVisibility(e, m, U) === "hide") ? "added" : "save-failed";
	}, [
		Y,
		I,
		U
	]), $ = (0, import_react.useCallback)(async (e) => {
		I && await Y({
			customWorktreeVisibilitySources: (normalizeCustomWorktreeVisibilitySources(I.customWorktreeVisibilitySources) ?? []).filter((p) => p.id !== e.id),
			worktreeVisibilitySourcePreferences: removeCustomWorktreeSourcePreference(I, e.id)
		}, (p) => !normalizeCustomWorktreeVisibilitySources(p.customWorktreeVisibilitySources)?.some((p) => p.id === e.id) && normalizeWorktreeVisibilitySourcePreferences(p.worktreeVisibilitySourcePreferences)?.custom?.[e.id] === void 0);
	}, [Y, I]);
	return !N || !I || !isGitRepoKind(I) ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !0,
		onOpenChange: (e) => !e && h(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "scrollbar-sleek max-h-[calc(100vh-6rem)] overflow-y-auto sm:max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.WorktreeVisibilityDialog.83a5ba8dd1", "Non-Orca worktrees") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeVisibilityHelpPopover, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: I.displayName })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeVisibilitySourceList, {
					repo: I,
					worktrees: F?.authoritative ? F.worktrees : [],
					visibilityDefaults: U,
					removableSourceIds: W,
					disabled: V !== null || H || j === "checking",
					onAdd: Q,
					onRemove: $,
					onToggle: Z,
					onUseDefault: X
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeVisibilityGlobalSettingsLink, {
					repo: I,
					visibilityDefaults: U
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeVisibilityScanStatus, {
					state: j,
					retryDisabled: V !== null || H,
					onRetry: q
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiddenWorktreeRecoveryList, {
					repo: I,
					detected: F,
					listState: j,
					busyPath: V,
					toggling: H,
					onShow: J
				}),
				C?.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-destructive",
					role: "alert",
					children: C.error
				}) : null
			]
		})
	});
}
export { WorktreeVisibilityDialog as default };
