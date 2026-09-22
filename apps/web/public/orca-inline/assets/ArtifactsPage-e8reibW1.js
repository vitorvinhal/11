import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as ArrowRight } from "./arrow-right-DHTXzy8t.js";
import { t as CircleAlert } from "./circle-alert-xAjxBVzK.js";
import { t as Copy } from "./copy-BzsskppR.js";
import { t as Ellipsis } from "./ellipsis-BvEJb9Or.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as Files } from "./files-BnLf-Nq6.js";
import { t as Globe } from "./globe-BQRxNG57.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { t as Search } from "./search-CF4JLrDD.js";
import { Gv as callRuntimeRpc, iw as Trash2, rd as moveFocusToRendererBeforeWebviewDetach, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Root } from "./dist-D-i0AoUO.js";
import "./es2015-D9zZpuOq.js";
import { f as ContextMenuTrigger, n as ContextMenuContent, r as ContextMenuItem, s as ContextMenuSeparator, t as ContextMenu } from "./context-menu-WDfkgXiK.js";
import { i as DropdownMenuItem, l as DropdownMenuSeparator, m as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DRu_J4_e.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { n as useConfirmationDialog } from "./confirmation-dialog-context-CodKMKX6.js";
import { i as SheetDescription, o as SheetTitle, r as SheetContent, t as Sheet } from "./sheet-Do6Z7W-t.js";
import { t as ORCA_BROWSER_GUEST_WEB_PREFERENCES_ATTRIBUTE } from "./browser-guest-web-preferences-CNi_f5Mj.js";
import { n as openArtifactInBrowser, t as copyArtifactLink } from "./artifact-link-actions-1DImW3uX.js";
import { n as formatUiRelativeTimeFromDate, t as formatUiRelativeTime } from "./relative-time-format-Clpgwkog.js";
import { c as isRowActivationKey, i as LIST_TABLE_ROW_SELECTED_CLASS, n as LIST_TABLE_HEADER_CLASS, r as LIST_TABLE_ROW_CLASS, s as isPortaledRowMenuClick, t as LIST_TABLE_CONTAINER_CLASS } from "./list-table-layout-zB9wVkVe.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function persistConfirmationSkipPreference({ updates: e, settingsSectionId: x, updateSettings: C, openSettingsPage: w, openSettingsTarget: T }) {
	C(e).then(() => toast.success(translate("auto.components.confirmation.skip.saved", "We'll skip this confirmation next time."), {
		description: translate("auto.components.confirmation.skip.savedDescription", "You can change this in Settings."),
		duration: 8e3,
		action: {
			label: translate("auto.components.confirmation.skip.openSettings", "Open Settings"),
			onClick: () => {
				w(), T({
					pane: "general",
					repoId: null,
					sectionId: x
				});
			}
		}
	}), () => toast.error(translate("auto.components.confirmation.skip.preference.0b0cb6e3f9", "Could not save the confirmation preference.")));
}
function artifactName(e) {
	return e.artifact.title || e.artifact.originalFileName || e.artifact.slug;
}
function formatByteSize(e) {
	return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function formatArtifactUpdatedAt(e) {
	return translate("auto.components.artifacts.updatedAt", "Updated {{when}}", { when: formatArtifactUpdatedCompact(e) });
}
function formatArtifactUpdatedCompact(e) {
	return formatUiRelativeTimeFromDate(e, translate("auto.components.artifacts.updatedRecently", "recently"));
}
function formatArtifactExpiry(e) {
	let x = new Date(e);
	if (Number.isNaN(x.getTime())) return translate("auto.components.artifacts.expiryUnknown", "Expiry unknown");
	let C = x.getTime() - Date.now();
	return C <= 0 ? translate("auto.components.artifacts.expired", "Link expired") : translate("auto.components.artifacts.expires", "Link expires {{when}}", { when: formatUiRelativeTime(C) });
}
function formatArtifactExpiryCompact(e) {
	let x = new Date(e);
	if (Number.isNaN(x.getTime())) return translate("auto.components.artifacts.expiryUnknown", "Expiry unknown");
	let C = x.getTime() - Date.now();
	return C <= 0 ? translate("auto.components.artifacts.expiredCompact", "Expired") : formatUiRelativeTime(C);
}
function artifactTypeLabel(e) {
	return e.artifact.sourceContentType === "text/markdown" ? translate("auto.components.artifacts.typeMarkdown", "Markdown") : e.artifact.sourceContentType === "text/html" ? translate("auto.components.artifacts.typeHtml", "HTML") : e.artifact.sourceContentType;
}
const ARTIFACT_LIST_SEARCH_QUERY_MAX_BYTES = 2 * 1024;
function artifactSearchHaystack(e) {
	return [
		artifactName(e),
		e.artifact.originalFileName,
		e.artifact.slug,
		artifactTypeLabel(e)
	].filter((e) => !!e).join("\n").toLowerCase();
}
function clampArtifactListSearchQuery(e, x = ARTIFACT_LIST_SEARCH_QUERY_MAX_BYTES) {
	return e.length <= x + 1 ? e : e.slice(0, x + 1);
}
function activeArtifactListSearchQuery(e, x = ARTIFACT_LIST_SEARCH_QUERY_MAX_BYTES) {
	return isClipboardTextByteLengthOverLimit(e, x) ? null : e.trim().toLowerCase() || null;
}
function filterArtifactsBySearchQuery(e, x) {
	let S = activeArtifactListSearchQuery(x);
	return S === null ? e : e.filter((e) => artifactSearchHaystack(e).includes(S));
}
const ARTIFACTS_TABLE_GRID_CLASS = "grid grid-cols-[minmax(0,1.6fr)_minmax(4.5rem,6.5rem)_minmax(4rem,5.5rem)_minmax(6.5rem,9rem)_minmax(6.5rem,9rem)_2.5rem]";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function artifactRowActions(e, x, C) {
	return [
		{
			key: "copy",
			label: translate("auto.components.artifacts.copyLink", "Copy link"),
			icon: Copy,
			onSelect: () => void copyArtifactLink(e.shareUrl)
		},
		{
			key: "open",
			label: translate("auto.components.artifacts.openInBrowser", "Open in browser"),
			icon: ExternalLink,
			onSelect: () => openArtifactInBrowser(e.shareUrl)
		},
		{
			key: "delete",
			label: translate("auto.components.artifacts.ArtifactsPage.deleteArtifact", "Delete artifact"),
			icon: Trash2,
			onSelect: () => C(e),
			destructive: !0,
			disabled: x
		}
	];
}
function ArtifactListRows({ artifacts: e, deletingId: x, selectedSlug: T, selectArtifact: E, deleteArtifact: D }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: e.map((e) => {
		let k = artifactName(e), A = artifactTypeLabel(e), j = formatArtifactUpdatedCompact(e.artifact.updatedAt), M = formatArtifactExpiryCompact(e.artifact.expiresAt), N = formatByteSize(e.artifact.byteSize), P = T === e.artifact.slug, F = artifactRowActions(e, x === e.artifact.slug, D);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextMenuTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "button",
				tabIndex: 0,
				"data-current": P ? "true" : void 0,
				onClick: (x) => {
					isPortaledRowMenuClick(x) || E(e.artifact.slug);
				},
				onKeyDown: (x) => {
					isRowActivationKey(x) && (x.preventDefault(), E(e.artifact.slug));
				},
				className: cn(ARTIFACTS_TABLE_GRID_CLASS, LIST_TABLE_ROW_CLASS, P && "bg-accent text-accent-foreground"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate font-medium",
						title: k,
						children: k
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate text-muted-foreground",
						title: A,
						children: A
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate text-muted-foreground",
						title: N,
						children: N
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate text-muted-foreground",
						title: j,
						children: j
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate text-muted-foreground",
						title: M,
						children: M
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon-xs",
							className: "size-7 text-muted-foreground",
							"aria-label": translate("auto.components.artifacts.actions", "Artifact actions"),
							onClick: (e) => e.stopPropagation(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
						align: "end",
						className: "w-48",
						children: F.map(({ key: e, label: x, icon: S, onSelect: C, destructive: w, disabled: T }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [w ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
							variant: w ? "destructive" : "default",
							disabled: T,
							onSelect: C,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, { className: "size-3.5" }), x]
						})] }, e))
					})] })
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextMenuContent, {
			className: "w-48",
			children: F.map(({ key: e, label: x, icon: S, onSelect: C, destructive: w, disabled: T }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [w ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextMenuSeparator, {}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContextMenuItem, {
				variant: w ? "destructive" : "default",
				disabled: T,
				onSelect: C,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(S, { className: "size-3.5" }), x]
			})] }, e))
		})] }, e.artifact.slug);
	}) });
}
function ArtifactListTableHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn(ARTIFACTS_TABLE_GRID_CLASS, LIST_TABLE_HEADER_CLASS),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.artifacts.ArtifactListTableHeader.name", "Name") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.artifacts.ArtifactListTableHeader.type", "Type") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.artifacts.ArtifactListTableHeader.size", "Size") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.artifacts.ArtifactListTableHeader.updated", "Updated") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.artifacts.ArtifactListTableHeader.expires", "Expires") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: translate("auto.components.artifacts.ArtifactListTableHeader.actions", "Actions")
			})
		]
	});
}
function ArtifactListSearchField({ query: e, onQueryChange: x, onClear: T, className: E }) {
	let D = (0, import_react.useRef)(null), O = e !== "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative", E),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				ref: D,
				type: "text",
				autoFocus: !0,
				value: e,
				"aria-label": translate("auto.components.artifacts.ArtifactListSearchField.label", "Search artifacts"),
				placeholder: translate("auto.components.artifacts.ArtifactListSearchField.placeholder", "Search..."),
				"data-escape-clears-value": O ? "true" : void 0,
				className: cn("h-8 border-border bg-background pl-8 text-xs shadow-none focus-visible:border-ring/70 focus-visible:ring-0 dark:bg-background", O && "pr-7"),
				onChange: (e) => x(e.target.value),
				onKeyDown: (e) => {
					e.key !== "Escape" || e.nativeEvent.isComposing || !O || (e.preventDefault(), T());
				}
			}),
			O ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon-xs",
				className: "absolute right-1 top-1/2 -translate-y-1/2",
				"aria-label": translate("auto.components.artifacts.ArtifactListSearchField.clear", "Clear search"),
				onMouseDown: (e) => e.preventDefault(),
				onClick: () => {
					T(), D.current?.focus();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
			}) : null
		]
	});
}
function ArtifactListToolbar({ query: e, onQueryChange: x, onRefresh: T, isRefreshing: E }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex shrink-0 items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactListSearchField, {
			query: e,
			className: "w-56",
			onQueryChange: x,
			onClear: () => x("")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon-sm",
				"aria-label": translate("auto.components.artifacts.ArtifactsPage.refresh", "Refresh"),
				onClick: T,
				disabled: E,
				className: "shrink-0 border border-border bg-background shadow-none hover:bg-muted/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("size-4", E && "animate-spin") })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
			side: "bottom",
			sideOffset: 6,
			children: translate("auto.components.artifacts.ArtifactsPage.refresh", "Refresh")
		})] })]
	});
}
function ArtifactCollection({ artifacts: e, deletingId: x, selectedSlug: T, selectArtifact: E, deleteArtifact: D, hasMore: O, loadingMore: k, loadMore: A, onRefresh: j, isRefreshing: N }) {
	let [P, F] = (0, import_react.useState)(""), I = (e) => F(clampArtifactListSearchQuery(e)), L = (0, import_react.useMemo)(() => filterArtifactsBySearchQuery(e, P), [e, P]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "flex min-h-0 flex-1 flex-col overflow-hidden px-3 pb-4 md:px-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-0 flex-1 flex-col gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactListToolbar, {
				query: P,
				onQueryChange: I,
				onRefresh: j,
				isRefreshing: N
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("scrollbar-sleek min-h-0 flex-1 overflow-auto", LIST_TABLE_CONTAINER_CLASS),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactListTableHeader, {}),
					L.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactListRows, {
							artifacts: L,
							deletingId: x,
							selectedSlug: T,
							selectArtifact: E,
							deleteArtifact: D
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 py-6 text-center text-sm text-muted-foreground",
						children: translate("auto.components.artifacts.ArtifactCollection.noMatches", "No matches")
					}),
					O ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-border/50 p-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "ghost",
							size: "sm",
							className: "w-full",
							disabled: k,
							onClick: A,
							children: [k ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : null, translate("auto.components.artifacts.ArtifactCollection.loadMore", "Load more")]
						})
					}) : null
				]
			})]
		})
	});
}
function ArtifactActions({ deleting: e, item: x, onDelete: w }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex shrink-0 items-center gap-2",
		"aria-label": translate("auto.components.artifacts.actions", "Artifact actions"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				onClick: () => void copyArtifactLink(x.shareUrl),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), translate("auto.components.artifacts.copyLink", "Copy link")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon-sm",
					className: "text-muted-foreground hover:text-foreground",
					onClick: () => openArtifactInBrowser(x.shareUrl),
					"aria-label": translate("auto.components.artifacts.openInBrowser", "Open in browser"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
				side: "bottom",
				sideOffset: 6,
				children: translate("auto.components.artifacts.openInBrowser", "Open in browser")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon-sm",
					className: "text-muted-foreground hover:text-foreground",
					disabled: e,
					"aria-label": translate("auto.components.artifacts.ArtifactActions.more", "More artifact actions"),
					children: e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, {})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
				align: "end",
				className: "w-48",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					variant: "destructive",
					disabled: e,
					onSelect: () => w(x),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), translate("auto.components.artifacts.ArtifactsPage.deleteArtifact", "Delete artifact")]
				})
			})] })
		]
	});
}
function ArtifactDetailHeader({ deleting: e, item: x, title: w, onClose: T, onDelete: E }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-start justify-between gap-3 border-b border-border/50 px-4 py-3 pr-[max(1rem,var(--window-controls-width,0px))]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-40 flex-1 space-y-0.5",
			children: [
				w,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
							asChild: !0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3 shrink-0 text-muted-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
							side: "bottom",
							sideOffset: 6,
							children: translate("auto.components.artifacts.ArtifactDetailHeader.publicLink", "Anyone with this link can view it")
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: translate("auto.components.artifacts.ArtifactDetailHeader.publicLink", "Anyone with this link can view it")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-mono text-xs text-muted-foreground",
							children: x.shareUrl
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate text-[11px] text-muted-foreground",
					children: [
						formatArtifactUpdatedAt(x.artifact.updatedAt),
						" ·",
						" ",
						formatByteSize(x.artifact.byteSize),
						" · ",
						formatArtifactExpiry(x.artifact.expiresAt)
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactActions, {
				deleting: e,
				item: x,
				onDelete: E
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon-sm",
				onClick: T,
				"aria-label": translate("auto.components.artifacts.ArtifactDetailHeader.close", "Close"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			})]
		})]
	});
}
var ARTIFACT_PREVIEW_LOAD_TIMEOUT_MS = 2e4;
function scheduleArtifactPreviewTimeout(e) {
	let x = setTimeout(e, ARTIFACT_PREVIEW_LOAD_TIMEOUT_MS);
	return () => clearTimeout(x);
}
function artifactPreviewUrl(e) {
	let x = new URL(e);
	return x.searchParams.set("embed", "1"), x.toString();
}
function attachArtifactWebview({ container: e, partition: x, shareUrl: C, onLoadStarted: w, onLoadStopped: T, onLoadFailed: E }) {
	let D = document.createElement("webview");
	return D.setAttribute("partition", x), D.setAttribute("webpreferences", ORCA_BROWSER_GUEST_WEB_PREFERENCES_ATTRIBUTE), D.setAttribute("aria-label", translate("auto.components.artifacts.preview", "Artifact preview")), D.style.display = "flex", D.style.width = "100%", D.style.height = "100%", D.style.border = "none", D.addEventListener("did-start-loading", w), D.addEventListener("did-stop-loading", T), D.addEventListener("did-fail-load", E), e.appendChild(D), D.setAttribute("src", artifactPreviewUrl(C)), () => {
		D.removeEventListener("did-start-loading", w), D.removeEventListener("did-stop-loading", T), D.removeEventListener("did-fail-load", E), moveFocusToRendererBeforeWebviewDetach(D), D.remove();
	};
}
function ArtifactPreview({ shareUrl: e }) {
	let x = (0, import_react.useRef)(null), [C, w] = (0, import_react.useState)("loading");
	return (0, import_react.useEffect)(() => {
		let S = !1, C, T, E = !1, D = () => {
			T?.(), T = void 0;
		}, O = () => {
			D(), T = scheduleArtifactPreviewTimeout(() => {
				E = !0, w("unavailable");
			});
		}, k = () => {
			E = !1, w("loading"), O();
		}, A = () => {
			D(), E || w("ready");
		}, j = (e) => {
			!e.isMainFrame || e.errorCode === -3 || (D(), E = !0, w("unavailable"));
		};
		return w("loading"), O(), window.api.browser.sessionResolvePartition({ profileId: null }).then((T) => {
			if (S || !T || !x.current) {
				S || (D(), w("unavailable"));
				return;
			}
			C = attachArtifactWebview({
				container: x.current,
				partition: T,
				shareUrl: e,
				onLoadStarted: k,
				onLoadStopped: A,
				onLoadFailed: j
			}), O();
		}).catch(() => {
			S || (D(), w("unavailable"));
		}), () => {
			S = !0, D(), C?.();
		};
	}, [e]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-0 flex-1 overflow-hidden bg-editor-surface",
		ref: x,
		children: [C === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 z-10 flex items-center justify-center bg-editor-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin text-muted-foreground" })
		}) : null, C === "unavailable" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-editor-surface px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-6 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: translate("auto.components.artifacts.previewUnavailable", "Preview unavailable")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-xs text-muted-foreground",
					children: translate("auto.components.artifacts.previewUnavailableDescription", "Open this artifact in your browser to view it.")
				})
			]
		}) : null]
	});
}
function ArtifactDetailDrawer({ item: e, deleting: x, onClose: C, onDelete: w }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: e !== null,
		onOpenChange: (e) => !e && C(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
			side: "right",
			showCloseButton: !1,
			className: "h-full w-[min(96rem,calc(100vw-var(--mac-traffic-lights-width,0px)))] max-w-none translate-x-0 p-0 sm:max-w-[min(96rem,calc(100vw-var(--mac-traffic-lights-width,0px)))] data-[state=closed]:translate-x-0 data-[state=open]:translate-x-0",
			children: e ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-full min-h-0 flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: translate("auto.components.artifacts.ArtifactDetailDrawer.description", "Preview and manage this shared artifact.") })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactDetailHeader, {
						deleting: x,
						item: e,
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
							className: "truncate text-base font-semibold",
							children: artifactName(e)
						}),
						onClose: C,
						onDelete: w
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactPreview, { shareUrl: e.shareUrl })
				]
			}) : null
		})
	});
}
function SkeletonBar({ className: e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("animate-pulse rounded bg-muted/60", e) });
}
var TABLE_ROW_SKELETONS = [
	{
		id: "row-1",
		name: "w-36",
		type: "w-12",
		size: "w-10",
		updated: "w-16",
		expires: "w-20"
	},
	{
		id: "row-2",
		name: "w-28",
		type: "w-16",
		size: "w-12",
		updated: "w-20",
		expires: "w-16"
	},
	{
		id: "row-3",
		name: "w-44",
		type: "w-12",
		size: "w-10",
		updated: "w-14",
		expires: "w-24"
	},
	{
		id: "row-4",
		name: "w-32",
		type: "w-14",
		size: "w-11",
		updated: "w-16",
		expires: "w-16"
	},
	{
		id: "row-5",
		name: "w-40",
		type: "w-12",
		size: "w-10",
		updated: "w-20",
		expires: "w-20"
	},
	{
		id: "row-6",
		name: "w-24",
		type: "w-16",
		size: "w-12",
		updated: "w-16",
		expires: "w-14"
	}
];
function ArtifactsPageSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col gap-4 overflow-hidden px-3 pb-4 md:px-5",
		role: "status",
		"aria-busy": "true",
		"aria-label": translate("auto.components.artifacts.ArtifactsPageSkeleton.loading", "Loading artifacts"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: "h-8 w-56 shrink-0 rounded-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: "size-8 shrink-0 rounded-md" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("min-h-0 flex-1 overflow-hidden", LIST_TABLE_CONTAINER_CLASS),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn(ARTIFACTS_TABLE_GRID_CLASS, LIST_TABLE_HEADER_CLASS),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: "h-2.5 w-12" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: "h-2.5 w-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: "h-2.5 w-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: "h-2.5 w-14" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: "h-2.5 w-14" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border/50",
				children: TABLE_ROW_SKELETONS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn(ARTIFACTS_TABLE_GRID_CLASS, "min-h-11 items-center gap-3 px-3 py-3"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: cn("h-3.5", e.name) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: cn("h-3.5", e.type) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: cn("h-3.5", e.size) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: cn("h-3.5", e.updated) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: cn("h-3.5", e.expires) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkeletonBar, { className: "size-6 rounded-md" })
					]
				}, e.id))
			})]
		})]
	});
}
function ArtifactsPageErrorBanner({ error: e, loading: x, onRetry: w }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center justify-between gap-3 border-b border-destructive/30 bg-destructive/10 px-3 py-2 md:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "min-w-0 flex-1 text-xs text-destructive",
			children: e
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "outline",
			size: "xs",
			disabled: x,
			onClick: w,
			children: translate("auto.components.artifacts.ArtifactsPage.retry", "Retry")
		})]
	});
}
function ArtifactsPageAuthState({ needsReconnect: e, configured: x, onConnect: w, onOpenAccountSettings: E }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-72 flex-1 flex-col items-center justify-center gap-3 px-5 py-5 text-center md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Files, { className: "size-8 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: e ? translate("auto.components.artifacts.ArtifactsPage.reconnectHeading", "Sign in to Orca again") : translate("auto.components.artifacts.ArtifactsPage.signInHeading", "Sign in to share artifacts")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-xs leading-5 text-muted-foreground",
					children: e ? translate("auto.components.artifacts.ArtifactsPage.reconnectCopy", "Sign in again to view and manage the artifacts shared through your account.") : translate("auto.components.artifacts.ArtifactsPage.signInCopy", "Use your Orca account to upload artifacts and manage their public links.")
				})]
			}),
			x ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				onClick: w,
				children: e ? translate("auto.components.artifacts.ArtifactsPage.signInAgainAction", "Sign in again") : translate("auto.components.artifacts.ArtifactsPage.signIn", "Sign in to Orca")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-xs leading-5 text-muted-foreground",
					children: translate("auto.components.artifacts.ArtifactsPage.unconfiguredCopy", "Orca account sign-in is not configured on this machine yet.")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: E,
					children: [translate("auto.components.artifacts.ArtifactsPage.openAccountSettings", "Open account settings"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})]
			})
		]
	});
}
function ArtifactsPageEmptyState({ hasMore: e, loadingMore: x, publishingBlocked: w, onLoadMore: T, onOpenArtifactsSettings: E }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col items-center justify-center gap-2 px-5 py-5 text-center md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Files, { className: "size-8 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm font-semibold",
				children: e ? translate("auto.components.artifacts.ArtifactsPage.moreAvailable", "More artifacts are available") : w ? translate("auto.components.artifacts.ArtifactsPage.publishingOff", "Publishing is turned off") : translate("auto.components.artifacts.ArtifactsPage.empty", "No shared artifacts")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-sm text-xs leading-5 text-muted-foreground",
				children: e ? translate("auto.components.artifacts.ArtifactsPage.moreAvailableCopy", "Load the next page to continue.") : w ? translate("auto.components.artifacts.ArtifactsPage.publishingOffCopy", "Nothing on this device can create a public artifact link yet. Allow publishing in Settings → Artifacts, then share from an open HTML or Markdown file or ask your agent.") : translate("auto.components.artifacts.ArtifactsPage.emptyCopy", "Open an HTML or Markdown file and select Share as artifact, or ask your agent to share it.")
			}),
			!e && w ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "mt-1",
				onClick: E,
				children: translate("auto.components.artifacts.ArtifactsPage.openArtifactsSettings", "Open Settings → Artifacts")
			}) : null,
			e ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "mt-1",
				disabled: x,
				onClick: T,
				children: [x ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : null, translate("auto.components.artifacts.ArtifactCollection.loadMore", "Load more")]
			}) : null
		]
	});
}
var LOCAL_RUNTIME$1 = { kind: "local" }, EMPTY_ARTIFACTS = [];
function artifactAccountIdentity(e) {
	return e?.state === "connected" ? `${e.activeProfileId}:${e.cloud?.userId ?? ""}:${e.cloud?.cloudProfileId ?? ""}:${e.cloud?.activeOrgId ?? ""}` : null;
}
function appendArtifactPage(e, x) {
	let S = new Set(e.map(({ artifact: e }) => e.slug));
	return [...e, ...x.filter(({ artifact: e }) => !S.has(e.slug))];
}
function artifactRequestIsCurrent(e, x, S) {
	return e === x && artifactAccountIdentity(useAppStore.getState().orcaProfileAuthStatus) === S;
}
function useArtifactPagination(e, x) {
	let C = artifactAccountIdentity(e), [w, T] = (0, import_react.useState)({
		identity: null,
		page: { artifacts: [] }
	}), [E, D] = (0, import_react.useState)(!1), [O, k] = (0, import_react.useState)(!1), [A, j] = (0, import_react.useState)(null), M = (0, import_react.useRef)(0), N = (0, import_react.useRef)(null), P = w.identity === C ? w.page : null, I = P?.artifacts ?? EMPTY_ARTIFACTS, L = (0, import_react.useCallback)(async () => {
		let e = ++M.current;
		if (N.current = null, k(!1), !C) {
			T({
				identity: null,
				page: { artifacts: [] }
			}), j(null), D(!1);
			return;
		}
		D(!0), j(null);
		try {
			let w = await callRuntimeRpc(LOCAL_RUNTIME$1, "artifacts.list", {});
			if (!artifactRequestIsCurrent(e, M.current, C)) return;
			if (w.status === "ok") T({
				identity: C,
				page: w.value
			});
			else {
				if (await x(), !artifactRequestIsCurrent(e, M.current, C)) return;
				j(translate("auto.components.artifacts.ArtifactsPage.signInAgain", "Sign in to Orca again to load artifacts."));
			}
		} catch (x) {
			if (!artifactRequestIsCurrent(e, M.current, C)) return;
			console.error("Failed to load artifacts:", x), j(translate("auto.components.artifacts.ArtifactsPage.loadFailed", "Could not load artifacts."));
		} finally {
			artifactRequestIsCurrent(e, M.current, C) && D(!1);
		}
	}, [C, x]);
	(0, import_react.useEffect)(() => (L(), () => {
		M.current += 1;
	}), [L]);
	let R = (0, import_react.useCallback)(async () => {
		let e = P?.nextCursor;
		if (!C || !e || N.current) return;
		let w = M.current;
		N.current = e, k(!0), j(null);
		try {
			let E = await callRuntimeRpc(LOCAL_RUNTIME$1, "artifacts.list", { cursor: e });
			if (!artifactRequestIsCurrent(w, M.current, C)) return;
			if (E.status !== "ok") {
				if (await x(), !artifactRequestIsCurrent(w, M.current, C)) return;
				j(translate("auto.components.artifacts.ArtifactsPage.signInAgain", "Sign in to Orca again to load artifacts."));
				return;
			}
			T((x) => x.identity === C ? {
				identity: x.identity,
				page: {
					artifacts: appendArtifactPage(x.page.artifacts, E.value.artifacts),
					...E.value.nextCursor && E.value.nextCursor !== e ? { nextCursor: E.value.nextCursor } : {}
				}
			} : x);
		} catch (e) {
			if (!artifactRequestIsCurrent(w, M.current, C)) return;
			console.error("Failed to load more artifacts:", e), j(translate("auto.components.artifacts.ArtifactsPage.loadMoreFailed", "Could not load more artifacts."));
		} finally {
			N.current === e && (N.current = null, k(!1));
		}
	}, [
		C,
		P?.nextCursor,
		x
	]), z = (0, import_react.useCallback)((e, x) => {
		M.current += 1, N.current = null, D(!1), k(!1), T((S) => S.identity === e ? {
			...S,
			page: {
				...S.page,
				artifacts: S.page.artifacts.filter((e) => e.artifact.slug !== x)
			}
		} : S);
	}, []);
	return {
		accountIdentity: C,
		artifacts: I,
		error: A,
		loading: E,
		loadingMore: O,
		nextCursor: P?.nextCursor,
		loadArtifacts: L,
		loadMoreArtifacts: R,
		removeArtifact: z,
		setError: j
	};
}
var LOCAL_RUNTIME = { kind: "local" };
function ArtifactsPage() {
	let e = useAppStore((e) => e.closeArtifactsPage), x = useAppStore((e) => e.orcaProfileAuthStatus), C = useAppStore((e) => e.connectCurrentOrcaProfile), w = useAppStore((e) => e.refreshCurrentOrcaProfileAuth), T = useAppStore((e) => e.openSettingsPage), E = useAppStore((e) => e.openSettingsTarget), D = useAppStore((e) => e.settings), O = useAppStore((e) => e.updateSettings), k = useConfirmationDialog(), A = D ? D.artifactSharingEnabled !== !0 : !1, [j, M] = (0, import_react.useState)(null), [N, P] = (0, import_react.useState)(null), I = x?.state === "connected", L = x?.state === "reconnect-required", z = () => {
		E({
			pane: "orca-account",
			repoId: null
		}), T();
	}, { accountIdentity: B, artifacts: V, error: H, loading: U, loadingMore: W, nextCursor: G, loadArtifacts: K, loadMoreArtifacts: q, removeArtifact: J, setError: Y } = useArtifactPagination(x, w), Z = j?.identity === B ? j.slug : null, Q = N === null ? null : V.find(({ artifact: e }) => e.slug === N) ?? null;
	(0, import_react.useEffect)(() => {
		N && !V.some(({ artifact: e }) => e.slug === N) && P(null);
	}, [N, V]), (0, import_react.useEffect)(() => {
		function x(x) {
			if (x.key !== "Escape" || x.defaultPrevented) return;
			let S = x.target;
			if (S instanceof HTMLElement && S.dataset.escapeClearsValue !== "true") {
				if (S instanceof HTMLInputElement || S instanceof HTMLTextAreaElement || S instanceof HTMLSelectElement || S.isContentEditable) {
					x.preventDefault(), S.blur();
					return;
				}
				if (N) {
					x.preventDefault(), P(null);
					return;
				}
				x.preventDefault(), e();
			}
		}
		return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
	}, [e, N]);
	let $ = async (e) => {
		let x = e.artifact.title || e.artifact.originalFileName || e.artifact.slug;
		if (!D?.skipDeleteArtifactConfirm && !await k({
			title: translate("auto.components.artifacts.ArtifactsPage.deleteTitle", "Delete artifact?"),
			description: translate("auto.components.artifacts.ArtifactsPage.deleteDescription", "“{{name}}” will no longer be available at its public link.", { name: x }),
			confirmLabel: translate("auto.components.artifacts.ArtifactsPage.delete", "Delete"),
			confirmVariant: "destructive",
			dontAskAgain: { onConfirmed: () => persistConfirmationSkipPreference({
				updates: { skipDeleteArtifactConfirm: !0 },
				settingsSectionId: "general-skip-delete-artifact-confirm",
				updateSettings: O,
				openSettingsPage: T,
				openSettingsTarget: E
			}) }
		})) return;
		let C = B;
		if (!C) return;
		let A = () => artifactAccountIdentity(useAppStore.getState().orcaProfileAuthStatus) === C;
		if (A()) {
			M({
				identity: C,
				slug: e.artifact.slug
			});
			try {
				let x = await callRuntimeRpc(LOCAL_RUNTIME, "artifacts.delete", { id: e.artifact.slug });
				if (!A()) return;
				if (x.status !== "ok") throw await w(), Error(x.status);
				J(C, e.artifact.slug);
			} catch (e) {
				console.error("Failed to delete artifact:", e), A() && Y(translate("auto.components.artifacts.ArtifactsPage.deleteFailed", "Could not delete the artifact."));
			} finally {
				M((x) => x?.identity === C && x.slug === e.artifact.slug ? null : x);
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex h-full min-h-0 flex-1 flex-col bg-background pt-5 text-foreground md:pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "flex shrink-0 items-center px-3 pb-3 md:px-5",
				style: { paddingRight: "max(0.75rem, var(--window-controls-width, 0px))" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate text-base font-semibold leading-8",
					children: translate("auto.components.artifacts.ArtifactsPage.title", "Artifacts")
				})
			}),
			H ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactsPageErrorBanner, {
				error: H,
				loading: U,
				onRetry: () => void K()
			}) : null,
			I ? U && V.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactsPageSkeleton, {}) : V.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactsPageEmptyState, {
				hasMore: !!G,
				loadingMore: W,
				publishingBlocked: A,
				onLoadMore: () => void q(),
				onOpenArtifactsSettings: () => {
					E({
						pane: "artifacts",
						repoId: null
					}), T();
				}
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactCollection, {
				artifacts: V,
				deletingId: Z,
				selectedSlug: N,
				selectArtifact: P,
				deleteArtifact: (e) => void $(e),
				hasMore: !!G,
				loadingMore: W,
				loadMore: () => void q(),
				onRefresh: () => void K(),
				isRefreshing: U
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactsPageAuthState, {
				needsReconnect: L,
				configured: x?.configured === !0,
				onConnect: () => void C(),
				onOpenAccountSettings: z
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArtifactDetailDrawer, {
				item: Q,
				deleting: Z === Q?.artifact.slug,
				onClose: () => P(null),
				onDelete: (e) => void $(e)
			})
		]
	});
}
export { ArtifactsPage as default };
