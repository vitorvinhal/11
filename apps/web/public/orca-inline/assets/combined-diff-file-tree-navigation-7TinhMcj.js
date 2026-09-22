import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { n as lazyWithRetry } from "./lazy-with-retry--hTe1cP7.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as CircleAlert } from "./circle-alert-xAjxBVzK.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as Eye } from "./eye-BJEeN-_V.js";
import { t as getFileTypeIcon } from "./file-type-icons-CLi9yo0S.js";
import { t as FolderOpen } from "./folder-open-D9SSjK-6.js";
import { t as Folder } from "./folder-CMlHGMNi.js";
import { t as Funnel } from "./funnel-BR8EgW-i.js";
import { t as PanelLeftClose } from "./panel-left-close-C0Mo_4aA.js";
import { t as RefreshCw } from "./refresh-cw-DcK7-KQD.js";
import { t as Search } from "./search-CF4JLrDD.js";
import { Mi as COMBINED_DIFF_FILE_TREE_RESIZE_STEP, Ni as clampCombinedDiffFileTreeWidth, Nt as detectLanguage, Pi as computeCombinedDiffFileTreeWidthBounds, Sm as dirname, t as useAppStore, wm as joinPath, xm as basename } from "./store-C9f8FDJV.js";
import { r as isDiffComment } from "./diff-comment-compat-OnNoNTL8.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { a as PopoverTrigger, i as PopoverContent, t as Popover } from "./popover-DHL-338i.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
import { p as editor } from "./editor.api2-B26FOp3A.js";
import { n as WORKSPACE_FILE_PATH_MIME } from "./workspace-file-drag-QEvqcvgi.js";
import { t as useSidebarResize } from "./useSidebarResize-CVB8oNM1.js";
import { i as resolveEditorFontFamily, t as computeDiffEditorFontSize } from "./editor-font-zoom-7waunKWS.js";
import { n as STATUS_LABELS, t as STATUS_COLORS } from "./status-display-BXJRMvlX.js";
import { t as IMAGE_FILE_EXTENSIONS } from "./image-file-extensions-DPcppzXx.js";
import { i as we } from "./monaco-setup-By9TegQE.js";
import { a as installMonacoEditorFindShortcut, r as installEditorSaveShortcut } from "./editor-shortcuts-B2Tpd-Q8.js";
import { t as editor_main_exports } from "./editor.main-DYdOLWJc.js";
import { t as monacoFindOptions } from "./monaco-find-options-ew4ftt5y.js";
import { t as selectWorktreeDiffComments } from "./worktree-diff-comments-selector-DTAjSWIf.js";
import { n as getDiffCommentPopoverLeft, r as getDiffCommentPopoverTop, t as DiffCommentPopover } from "./DiffCommentPopover-BAlGhDzG.js";
import { t as useDiffCommentDecorator } from "./useDiffCommentDecorator-Dijhv8AL.js";
import { a as countLinesLikeSplit, c as LargeDiffFallback, d as applyDiffEditorLineNumberOptions, l as combinedDiffSectionScrollbarOptions, n as buildDiffEditorWhitespaceOptions, s as getLargeDiffRenderLimitFromCounts, t as buildDiffEditorWordWrapOptions } from "./diff-editor-word-wrap-options-CSCoMRyO.js";
import { n as disposeUnattachedMonacoModelPaths } from "./diff-monaco-model-disposal-BvSgPgEt.js";
import { a as compactSourceControlTree, n as buildGitStatusSourceControlTree, o as flattenSourceControlTree, r as buildSourceControlTree } from "./source-control-tree-5buG9B3U.js";
import { n as SourceControlVirtualFileList, t as writeWorkspaceFileDragSourceForWorkspace } from "./workspace-file-drag-source-CMWkpkRL.js";
function getCombinedDiffFileTreeSectionKey(e, t) {
	return (e === "all" || e === "uncommitted") && "area" in t ? `${t.area}:${t.path}` : `${e === "commit" ? "combined-commit" : "combined-branch"}:${t.path}`;
}
function createCombinedDiffSectionIndexMap(e) {
	return new Map(e.map((e, t) => [e.key, t]));
}
function isGitStatusEntry(e) {
	return "area" in e;
}
var import_react = /* @__PURE__ */ __toESM(require_react());
function useCombinedDiffSectionIndexMap({ entrySignature: e, sections: t }) {
	let n = (0, import_react.useRef)(null), r = (0, import_react.useMemo)(() => {
		let r = n.current;
		return r !== null && r.entrySignature === e && r.sections.length === t.length && t.every((e, t) => r.sections[t] === e || r.sections[t]?.key === e.key) ? r.map : createCombinedDiffSectionIndexMap(t);
	}, [e, t]);
	return (0, import_react.useLayoutEffect)(() => {
		n.current = {
			entrySignature: e,
			sections: t,
			map: r
		};
	}, [
		e,
		r,
		t
	]), r;
}
function shouldPruneLargeDiffContent(e) {
	return e?.limited === !0;
}
function getStoredTextDiffResult(e, t) {
	return e.kind !== "text" || !shouldPruneLargeDiffContent(t) ? e : {
		...e,
		originalContent: "",
		modifiedContent: ""
	};
}
function getStoredTextDiffContent(e, t) {
	return e.kind !== "text" || shouldPruneLargeDiffContent(t) ? {
		originalContent: "",
		modifiedContent: ""
	} : {
		originalContent: e.originalContent,
		modifiedContent: e.modifiedContent
	};
}
function removeDiffSectionMeasuredHeight(e, t) {
	if (!(t in e)) return e;
	let { [t]: n, ...r } = e;
	return r;
}
function isCombinedDiffFileTreeQueryTooLarge(e, t = 2048) {
	return isClipboardTextByteLengthOverLimit(e, t);
}
function isCombinedDiffSectionViewed(e) {
	return !e.loading && e.loadOnDemand !== !0;
}
function getEntryExtension(e) {
	let t = basename(e.path), n = t.lastIndexOf(".");
	return n <= 0 || n === t.length - 1 ? "(no extension)" : t.slice(n).toLowerCase();
}
function getEntrySearchText(e) {
	return [
		e.path,
		e.oldPath ?? "",
		e.status,
		isGitStatusEntry(e) ? e.area : ""
	].join(" ").toLowerCase();
}
function getCombinedDiffFileTreeEntriesMatchingStaticFilters({ entries: e, query: t, excludedExtensions: n }) {
	if (isCombinedDiffFileTreeQueryTooLarge(t)) return [];
	let r = t.trim().toLowerCase();
	return r.length === 0 && n.size === 0 ? e : e.filter((e) => n.size > 0 && n.has(getEntryExtension(e)) ? !1 : r.length === 0 || getEntrySearchText(e).includes(r));
}
function getCombinedDiffBranchEntriesInTreeOrder(e, t) {
	return flattenSourceControlTree(compactSourceControlTree(buildSourceControlTree(e === "commit" ? "combined-commit" : "combined-branch", [...t])), /* @__PURE__ */ new Set()).filter((e) => e.type === "file").map((e) => e.entry);
}
var TEXT_IMAGE_EXTENSIONS = new Set([".svg"]), NON_IMAGE_BINARY_EXTENSIONS = /* @__PURE__ */ ".7z,.bz2,.gz,.jar,.rar,.tar,.tgz,.war,.xz,.zip,.zst,.aac,.avi,.flac,.m4a,.mkv,.mov,.mp3,.mp4,.ogg,.wav,.webm,.doc,.docx,.pdf,.ppt,.pptx,.xls,.xlsx,.eot,.otf,.ttc,.ttf,.woff,.woff2,.a,.bin,.class,.dll,.dylib,.exe,.idx,.lockb,.node,.o,.pack,.pyc,.pyd,.so,.sqlite,.sqlite3,.wasm".split(",");
const BINARY_FILE_EXTENSIONS = Object.freeze([...IMAGE_FILE_EXTENSIONS.filter((e) => !TEXT_IMAGE_EXTENSIONS.has(e)), ...NON_IMAGE_BINARY_EXTENSIONS]);
var BINARY_FILE_EXTENSION_SET = new Set(BINARY_FILE_EXTENSIONS);
function hasBinaryFileExtension(e) {
	if (e === void 0) return !1;
	let t = e.toLowerCase(), n = t.lastIndexOf(".");
	return n <= Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\")) + 1 ? !1 : BINARY_FILE_EXTENSION_SET.has(t.slice(n));
}
function getCombinedDiffCountingPassKey(e) {
	return "area" in e ? e.area : "compare";
}
function collectCountedCombinedDiffPasses(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) (n.added !== void 0 || n.removed !== void 0) && t.add(getCombinedDiffCountingPassKey(n));
	return t;
}
function isCombinedDiffSizeUnknown({ added: e, removed: t }) {
	return e === void 0 && t === void 0;
}
function shouldLoadCombinedDiffOnDemand({ added: e, removed: t, path: n, area: r, submodule: i, hasCountedSiblings: a }) {
	return e === void 0 && t === void 0 ? !(i !== void 0 || hasBinaryFileExtension(n) || a === !0 && r !== "untracked") : (e ?? 0) + (t ?? 0) > 1e4;
}
var DIFF_LINE_HEIGHT = 19, DIFF_SECTION_PADDING_HEIGHT = 19, MIN_DIFF_SECTION_BODY_HEIGHT = 60, DIFF_SECTION_HEADER_HEIGHT = 28, DIFF_UNCHANGED_CONTEXT_LINE_ESTIMATE = 12, MAX_UNMEASURED_TEXT_BODY_LINES = 80, LARGE_DIFF_FALLBACK_BODY_HEIGHT = 160;
function isIntrinsicHeightImageDiff(e) {
	return e?.kind === "binary" && e.mimeType?.startsWith("image/") === !0;
}
function getLargeDiffFallbackBodyHeight() {
	return LARGE_DIFF_FALLBACK_BODY_HEIGHT;
}
function usesLargeDiffFallbackHeight(e) {
	return e.largeDiffRenderLimit?.limited === !0 || e.loadOnDemand === !0 || e.loading && shouldLoadCombinedDiffOnDemand(e);
}
function getDiffSectionBodyHeight({ measuredContentHeight: e, originalContent: t, modifiedContent: n, changedLineCount: r, useIntrinsicImageHeight: i, lineCounts: a }) {
	if (i) return;
	if (e !== void 0 && e > 0) return e + DIFF_SECTION_PADDING_HEIGHT;
	let o = a ? Math.max(a.original, a.modified) : Math.max(countLinesLikeSplit(t), countLinesLikeSplit(n)), s = r === void 0 ? Math.min(o, MAX_UNMEASURED_TEXT_BODY_LINES) : Math.min(o, Math.max(2, r + DIFF_UNCHANGED_CONTEXT_LINE_ESTIMATE));
	return Math.max(MIN_DIFF_SECTION_BODY_HEIGHT, s * DIFF_LINE_HEIGHT + DIFF_SECTION_PADDING_HEIGHT);
}
function getDiffSectionEstimatedHeight({ collapsed: e, measuredContentHeight: t, originalContent: n, modifiedContent: r, changedLineCount: i, useIntrinsicImageHeight: a, lineCounts: o, isLargeDiffLimited: s = !1 }) {
	return e ? DIFF_SECTION_HEADER_HEIGHT : s ? DIFF_SECTION_HEADER_HEIGHT + getLargeDiffFallbackBodyHeight() : DIFF_SECTION_HEADER_HEIGHT + (getDiffSectionBodyHeight({
		measuredContentHeight: t,
		originalContent: n,
		modifiedContent: r,
		changedLineCount: i,
		useIntrinsicImageHeight: a,
		lineCounts: o
	}) ?? MIN_DIFF_SECTION_BODY_HEIGHT);
}
function getDiffSectionRowEstimatedHeight(e, t) {
	return getDiffSectionEstimatedHeight({
		collapsed: e.collapsed,
		measuredContentHeight: t,
		originalContent: e.originalContent,
		modifiedContent: e.modifiedContent,
		changedLineCount: e.added === void 0 && e.removed === void 0 ? void 0 : (e.added ?? 0) + (e.removed ?? 0),
		useIntrinsicImageHeight: isIntrinsicHeightImageDiff(e.diffResult),
		isLargeDiffLimited: usesLargeDiffFallbackHeight(e),
		lineCounts: e.largeDiffRenderLimit?.lineCounts ?? void 0
	});
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function DiffSectionHeader({ path: e, dirty: t, collapsed: n, added: i, removed: a, onToggle: o, onOpenSection: l, openSectionTitle: f, onOpenPreview: p, trailingContent: m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sticky top-0 z-10 bg-background flex items-center w-full px-3 py-1.5 text-left text-xs hover:bg-accent transition-colors group cursor-pointer",
		onClick: o,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1 truncate text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					role: "button",
					tabIndex: 0,
					className: "cursor-copy hover:underline",
					onMouseDown: (e) => {
						e.preventDefault(), e.stopPropagation();
					},
					onClick: (t) => {
						t.preventDefault(), t.stopPropagation(), window.api.ui.writeClipboardText(e).catch((e) => {
							console.error("Failed to copy diff path:", e);
						});
					},
					onKeyDown: (t) => {
						t.key !== "Enter" && t.key !== " " || (t.preventDefault(), t.stopPropagation(), window.api.ui.writeClipboardText(e).catch((e) => {
							console.error("Failed to copy diff path:", e);
						}));
					},
					title: translate("auto.components.editor.DiffSectionHeader.8915726e93", "Copy path"),
					children: e
				}),
				t && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium ml-1",
					children: "M"
				}),
				(i > 0 || a > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums ml-2",
					children: [
						i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-green-600 dark:text-green-500",
							children: ["+", i]
						}),
						i > 0 && a > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: " " }),
						a > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-red-500",
							children: ["-", a]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1 shrink-0 ml-2",
			children: [
				m,
				p != null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "p-0.5 rounded text-muted-foreground hover:text-foreground transition-colors",
					onClick: (e) => {
						e.stopPropagation(), p(e);
					},
					title: translate("auto.components.editor.EditorPanelHeader.fb8331694e", "Open Preview to the Side"),
					"aria-label": translate("auto.components.editor.EditorPanelHeader.fb8331694e", "Open Preview to the Side"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "p-0.5 rounded text-muted-foreground hover:text-foreground transition-colors",
					onClick: (e) => {
						e.stopPropagation(), l(e);
					},
					title: f,
					"aria-label": f,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
				}),
				n ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5 shrink-0 text-muted-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5 shrink-0 text-muted-foreground" })
			]
		})]
	});
}
function LargeDiffLoadPrompt({ onLoad: e, sizeUnknown: t = !1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-testid": "large-diff-load-prompt",
		className: "flex h-full min-h-[120px] items-center justify-center border border-border bg-muted/10 px-4 py-6 text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-medium text-foreground",
				children: t ? translate("auto.components.editor.LargeDiffLoadPrompt.c3d9f4a712", "This diff's size isn't known yet, so it loads on request.") : translate("auto.components.editor.LargeDiffLoadPrompt.a0af0198aa", "Large diffs are not rendered by default.")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "secondary",
				size: "xs",
				onClick: (t) => {
					t.stopPropagation(), e();
				},
				children: translate("auto.components.editor.LargeDiffLoadPrompt.f7fa7a40d0", "Load diff")
			})]
		})
	});
}
var WHEEL_LINE_PIXELS = 16;
function getHorizontalWheelPixels(e, t) {
	let n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
	return e.deltaMode === WheelEvent.DOM_DELTA_LINE ? n * WHEEL_LINE_PIXELS : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? n * t : n;
}
function canScrollHorizontally(e) {
	return e.getScrollWidth() > e.getLayoutInfo().contentWidth;
}
function installPaneShiftWheelScroll(e) {
	let t = e.getContainerDomNode(), n = (n) => {
		if (n.defaultPrevented || !n.shiftKey || !canScrollHorizontally(e)) return;
		let r = getHorizontalWheelPixels(n, t.clientWidth);
		r !== 0 && (n.preventDefault(), n.stopPropagation(), e.setScrollLeft(e.getScrollLeft() + r));
	};
	return t.addEventListener("wheel", n, {
		capture: !0,
		passive: !1
	}), () => t.removeEventListener("wheel", n, !0);
}
function installDiffEditorShiftWheelScroll(e) {
	let t = installPaneShiftWheelScroll(e.getOriginalEditor()), n = installPaneShiftWheelScroll(e.getModifiedEditor());
	return () => {
		t(), n();
	};
}
var ImageDiffViewer = lazyWithRetry(() => import("./ImageDiffViewer-DAW5wO3r.js"));
function DiffSectionBody({ section: e, index: t, sectionBodyRef: n, sectionBodyHeight: o, useIntrinsicImageHeight: s, popover: c, addLineCommentPlaceholder: u, addLineCommentLabel: d, isBranchMode: f, sideBySide: p, isDark: m, language: h, modelPathBase: g, isEditable: v, diffEditorFontSize: y, diffWordWrap: b, diffShowWhitespace: x, editorFontFamily: S, onCancelComment: C, onSubmitComment: w, onRetrySection: T, onLoadDeferredSection: E, onSaveLimitedDiff: D, onMount: O }) {
	let k = e.largeDiffRenderLimit?.limited ? e.largeDiffRenderLimit : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: n,
		className: cn("relative", s && "overflow-visible"),
		style: o === void 0 ? void 0 : { height: o },
		children: [c && !k?.limited ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiffCommentPopover, {
			lineNumber: c.lineNumber,
			startLine: c.startLine,
			top: c.top,
			left: c.left,
			lineHeight: c.lineHeight,
			placeholder: u,
			submitLabel: d,
			submittingLabel: "Posting…",
			onCancel: C,
			onSubmit: w
		}, `${c.startLine ?? c.lineNumber}:${c.lineNumber}`) : null, e.loadOnDemand ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LargeDiffLoadPrompt, {
			sizeUnknown: isCombinedDiffSizeUnknown(e),
			onLoad: () => E(t)
		}) : e.loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full items-center gap-2 bg-muted/10 px-3 text-[11px] text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-muted-foreground/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.editor.DiffSectionBody.f5cf81cec2", "Loading diff...") })]
		}) : e.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full items-center justify-between gap-3 bg-muted/10 px-3 text-[11px] text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5 shrink-0 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: e.error
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				size: "xs",
				className: "h-6 shrink-0 px-2 text-[11px]",
				onClick: (e) => {
					e.stopPropagation(), T(t);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3" }), translate("auto.components.editor.DiffSectionBody.cef4cf0ff5", "Retry")]
			})]
		}) : e.diffResult?.kind === "binary" ? e.diffResult.isImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageDiffViewer, {
			originalContent: e.diffResult.originalContent,
			modifiedContent: e.diffResult.modifiedContent,
			filePath: e.path,
			mimeType: e.diffResult.mimeType,
			sideBySide: p,
			layout: s ? "intrinsic" : "fill"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-full items-center justify-center px-6 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-medium text-foreground",
					children: translate("auto.components.editor.DiffSectionBody.35d6afb5be", "Binary file changed")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: f ? translate("auto.components.editor.DiffSectionBody.7ce8436458", "Text diff is unavailable for this file in branch compare.") : translate("auto.components.editor.DiffSectionBody.72f71f52eb", "Text diff is unavailable for this file.")
				})]
			})
		}) : k?.limited ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LargeDiffFallback, {
			filePath: e.path,
			renderLimit: k,
			action: v && e.dirty ? {
				label: translate("auto.components.editor.DiffSectionBody.b5675b0694", "Save"),
				description: translate("auto.components.editor.DiffSectionBody.593f2193f6", "This draft crossed the safe display limit, but it can still be saved."),
				onClick: D
			} : void 0
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(we, {
			height: "100%",
			language: h,
			original: e.originalContent,
			modified: e.modifiedContent,
			theme: m ? "vs-dark" : "vs",
			onMount: (e, t) => {
				let n = installDiffEditorShiftWheelScroll(e);
				e.onDidDispose(n), O(e, t);
			},
			originalModelPath: `${g}:original`,
			modifiedModelPath: `${g}:modified`,
			keepCurrentOriginalModel: !0,
			keepCurrentModifiedModel: !0,
			options: {
				readOnly: !v,
				originalEditable: !1,
				renderSideBySide: p,
				minimap: { enabled: !1 },
				scrollBeyondLastLine: !1,
				fontSize: y,
				fontFamily: S || "monospace",
				lineNumbers: "on",
				...buildDiffEditorWordWrapOptions(b),
				...buildDiffEditorWhitespaceOptions(x),
				automaticLayout: !0,
				renderOverviewRuler: !1,
				scrollbar: combinedDiffSectionScrollbarOptions,
				hideUnchangedRegions: { enabled: !0 },
				find: monacoFindOptions
			}
		})]
	});
}
function computeLineStats(e, t, n) {
	if (e.length + t.length > 5e5) return null;
	if (n === "added") return {
		added: t ? countLinesWithoutAllocation(t) : 0,
		removed: 0
	};
	if (n === "deleted") return {
		added: 0,
		removed: e ? countLinesWithoutAllocation(e) : 0
	};
	let r = /* @__PURE__ */ new Map(), i = countDiffLinesIntoMultiset(e, r), a = 0, o = 0;
	return forEachDiffLine(t, (e) => {
		a += 1;
		let t = r.get(e) ?? 0;
		t > 0 && (r.set(e, t - 1), o += 1);
	}), {
		added: a - o,
		removed: i - o
	};
}
function countDiffLinesIntoMultiset(e, t) {
	let n = 0;
	return forEachDiffLine(e, (e) => {
		n += 1, t.set(e, (t.get(e) ?? 0) + 1);
	}), n;
}
function countLinesWithoutAllocation(e) {
	let t = 1;
	for (let n = 0; n < e.length; n += 1) e.charCodeAt(n) === 10 && (t += 1);
	return t;
}
function forEachDiffLine(e, t) {
	let n = 0;
	for (let r = 0; r <= e.length; r += 1) r < e.length && e.charCodeAt(r) !== 10 || (t(e.slice(n, r)), n = r + 1);
}
function useDiffSectionLayoutMetrics({ section: e, sectionHeight: t }) {
	let n = e.largeDiffRenderLimit, r = usesLargeDiffFallbackHeight(e), i = (0, import_react.useMemo)(() => e.loading || e.error || r ? null : computeLineStats(e.originalContent, e.modifiedContent, e.status), [
		e.error,
		e.loading,
		e.originalContent,
		e.modifiedContent,
		e.status,
		r
	]), a = (0, import_react.useMemo)(() => {
		if (!r) {
			if (i) return i.added + i.removed;
			if (!(e.added === void 0 && e.removed === void 0)) return (e.added ?? 0) + (e.removed ?? 0);
		}
	}, [
		i,
		e.added,
		e.removed,
		r
	]), o = isIntrinsicHeightImageDiff(e.diffResult);
	return {
		lineStats: i,
		sectionBodyHeight: r ? getLargeDiffFallbackBodyHeight() : getDiffSectionBodyHeight({
			measuredContentHeight: t,
			originalContent: e.originalContent,
			modifiedContent: e.modifiedContent,
			changedLineCount: a,
			useIntrinsicImageHeight: o,
			lineCounts: n?.lineCounts ?? void 0
		}),
		useIntrinsicImageHeight: o,
		isLargeDiffLimited: r
	};
}
function getLiveDiffSectionRenderLimit({ section: e, modifiedEditor: t, modifiedContent: n }) {
	let r = n.length === 0 ? 0 : t.getModel()?.getLineCount() ?? e.largeDiffRenderLimit?.lineCounts?.modified ?? 0;
	return getLargeDiffRenderLimitFromCounts({
		originalLineCount: e.largeDiffRenderLimit?.lineCounts?.original ?? 0,
		modifiedLineCount: r,
		originalCharacterCount: e.originalContent.length,
		modifiedCharacterCount: n.length
	});
}
function useDiffSectionFallbackCleanup({ disposeDiffModels: e, index: t, isLargeDiffLimited: n, setSectionHeights: r }) {
	(0, import_react.useEffect)(() => {
		n && (r((e) => removeDiffSectionMeasuredHeight(e, t)), e());
	}, [
		e,
		t,
		n,
		r
	]);
}
async function submitDiffSectionComment({ addDiffComment: e, body: t, onAddLineComment: n, popover: r, section: i, worktreeId: a }) {
	if (n) return n(i, {
		lineNumber: r.lineNumber,
		startLine: r.startLine,
		body: t
	});
	if (!a) return !1;
	let o = await e({
		worktreeId: a,
		filePath: i.path,
		source: "diff",
		startLine: r.startLine,
		lineNumber: r.lineNumber,
		body: t,
		side: "modified"
	});
	return o || console.error("Failed to add diff comment — draft preserved"), !!o;
}
function useDiffSectionModelLifecycle(e) {
	let t = (0, import_react.useCallback)(() => {
		window.setTimeout(() => {
			disposeUnattachedMonacoModelPaths(editor_main_exports, [`${e.modelPathBase}:original`, `${e.modelPathBase}:modified`]);
		}, 0);
	}, [e.modelPathBase]), n = (0, import_react.useRef)(t);
	(0, import_react.useEffect)(() => {
		n.current = t;
	}, [t]);
	let r = (0, import_react.useCallback)((e) => {
		e || n.current();
	}, []);
	return (0, import_react.useEffect)(() => {
		e.collapsed && t();
	}, [t, e.collapsed]), {
		disposeDiffModels: t,
		setSectionRootNode: r
	};
}
function DiffSectionItem({ section: e, index: t, isBranchMode: n, sideBySide: r, isDark: i, settings: a, sectionHeight: o, worktreeId: s, loadSection: c, loadDeferredSection: l, retrySection: u, toggleSection: d, openSection: f, openSectionTitle: p, onOpenPreview: m, renderHeaderTrailingContent: h, onAddLineComment: g, addLineCommentLabel: _, addLineCommentPlaceholder: v, inlineComments: y, getCommentableLineNumbers: b, setSectionHeights: S, setSections: C, modifiedEditorsRef: T, handleSectionSaveRef: E }) {
	let O = useAppStore((e) => e.editorFontZoomLevel), k = useAppStore((e) => e.addDiffComment), Et = useAppStore((e) => e.deleteDiffComment), Dt = useAppStore((e) => e.updateDiffComment), A = useAppStore((e) => e.scrollToDiffCommentId), j = useAppStore((e) => e.setScrollToDiffCommentId), M = useAppStore((e) => selectWorktreeDiffComments(e, s)), N = (0, import_react.useMemo)(() => (M ?? []).filter((t) => t.filePath === e.path && isDiffComment(t)), [M, e.path]), I = detectLanguage(e.path), L = e.area === "unstaged", R = (0, import_react.useMemo)(() => `diff-section:${encodeURIComponent(s ?? "review")}:${encodeURIComponent(e.key)}:${e.contentGeneration ?? 0}`, [
		e.contentGeneration,
		e.key,
		s
	]), z = computeDiffEditorFontSize(a?.terminalFontSize ?? 13, O), [H, U] = (0, import_react.useState)(null), q = (0, import_react.useRef)(null), J = (0, import_react.useRef)(null), Y = (0, import_react.useRef)(null), [X, Z] = (0, import_react.useState)(null), Q = !!(s || g), { disposeDiffModels: kt, setSectionRootNode: At } = useDiffSectionModelLifecycle({
		modelPathBase: R,
		collapsed: e.collapsed
	}), jt = (0, import_react.useMemo)(() => A && N.some((e) => e.id === A) ? A : null, [A, N]);
	useDiffCommentDecorator({
		editor: Q ? H : null,
		filePath: e.path,
		worktreeId: s ?? "",
		comments: y ?? (s ? N : []),
		commentableLineNumbers: b?.(e),
		addButtonLabel: _,
		pendingCommentTarget: X,
		addNoteShortcutEnabled: Q,
		onAddCommentClick: ({ lineNumber: e, startLine: t, top: n }) => Z({
			lineNumber: e,
			startLine: t,
			top: n,
			left: H ? getDiffCommentPopoverLeft(H, J.current) ?? void 0 : void 0,
			lineHeight: H?.getOption(editor.EditorOption.lineHeight) ?? 0
		}),
		onDeleteComment: (e) => {
			s && Et(s, e);
		},
		onUpdateComment: s ? (e, t) => Dt(s, e, t) : void 0,
		pendingScrollCommentId: jt,
		onPendingScrollConsumed: () => j(null)
	}), (0, import_react.useEffect)(() => {
		if (!H || !X) return;
		let e = () => {
			let e = H.getOption(editor.EditorOption.lineHeight), t = getDiffCommentPopoverTop(H, X.lineNumber, e);
			if (t == null) {
				Z(null);
				return;
			}
			let n = getDiffCommentPopoverLeft(H, J.current);
			Z((r) => r && {
				...r,
				top: t,
				left: n ?? r.left,
				lineHeight: e
			});
		}, t = H.onDidScrollChange(e), n = H.onDidContentSizeChange(e), r = H.onDidLayoutChange(e);
		return () => {
			t.dispose(), n.dispose(), r.dispose();
		};
	}, [H, X?.lineNumber]), (0, import_react.useEffect)(() => {
		let e = q.current;
		if (e) return Y.current?.dispose(), Y.current = applyDiffEditorLineNumberOptions(e, r), () => {
			Y.current?.dispose(), Y.current = null;
		};
	}, [r]);
	let Mt = async (t) => {
		X && await submitDiffSectionComment({
			addDiffComment: k,
			body: t,
			onAddLineComment: g,
			popover: X,
			section: e,
			worktreeId: s
		}) && Z(null);
	}, { lineStats: $, sectionBodyHeight: Nt, useIntrinsicImageHeight: Pt, isLargeDiffLimited: Ft } = useDiffSectionLayoutMetrics({
		section: e,
		sectionHeight: o
	});
	return useDiffSectionFallbackCleanup({
		disposeDiffModels: kt,
		index: t,
		isLargeDiffLimited: Ft,
		setSectionHeights: S
	}), (0, import_react.useEffect)(() => {
		c(t);
	}, [t, c]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: At,
		className: "border-b border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiffSectionHeader, {
			path: e.path,
			dirty: e.dirty,
			collapsed: e.collapsed,
			added: $?.added ?? e.added ?? 0,
			removed: $?.removed ?? e.removed ?? 0,
			onToggle: () => d(t),
			onOpenSection: (e) => {
				e.stopPropagation(), f(t);
			},
			openSectionTitle: p,
			onOpenPreview: m ? () => {
				m(e, t);
			} : void 0,
			trailingContent: h?.(e, t)
		}), !e.collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiffSectionBody, {
			section: e,
			index: t,
			sectionBodyRef: J,
			sectionBodyHeight: Nt,
			useIntrinsicImageHeight: Pt,
			popover: X,
			addLineCommentPlaceholder: v,
			addLineCommentLabel: _,
			isBranchMode: n,
			sideBySide: r,
			isDark: i,
			language: I,
			modelPathBase: R,
			isEditable: L,
			diffEditorFontSize: z,
			diffWordWrap: a?.diffWordWrap,
			diffShowWhitespace: a?.diffShowWhitespace,
			editorFontFamily: resolveEditorFontFamily(a),
			onCancelComment: () => Z(null),
			onSubmitComment: Mt,
			onRetrySection: u,
			onLoadDeferredSection: l ?? c,
			onSaveLimitedDiff: () => void E.current(t),
			onMount: (e, n) => {
				q.current = e, Y.current?.dispose(), Y.current = applyDiffEditorLineNumberOptions(e, r);
				let i = e.getModifiedEditor(), a = !1, o = null, s = () => {
					let n = e.getModifiedEditor().getContentHeight();
					S((e) => e[t] === n ? e : {
						...e,
						[t]: n
					});
				}, c = () => {
					o === null && (o = window.requestAnimationFrame(() => {
						o = null, s();
					}));
				}, l = () => {
					a = !0, c();
				}, u = i.onDidContentSizeChange(() => {
					a && c();
				}), d = e.onDidUpdateDiff(l);
				if (e.getLineChanges() !== null && l(), U(i), i.onDidDispose(() => {
					u.dispose(), d.dispose(), o !== null && (window.cancelAnimationFrame(o), o = null), Y.current?.dispose(), Y.current = null, q.current = null, T.current.get(t) === i && T.current.delete(t), U(null), Z(null);
				}), !L) return;
				T.current.set(t, i);
				let f = e.getOriginalEditor(), p = installEditorSaveShortcut(i.getContainerDomNode(), () => E.current(t)), m = installMonacoEditorFindShortcut(f), h = installMonacoEditorFindShortcut(i), g = i.onDidChangeModelContent(() => {
					let e = i.getValue();
					C((n) => {
						let r = !1, a = n.map((n, a) => {
							if (a !== t) return n;
							let o = e !== (n.diffResult?.kind === "text" ? n.diffResult.modifiedContent : n.modifiedContent);
							return n.modifiedContent === e && n.dirty === o ? n : (r = !0, {
								...n,
								modifiedContent: e,
								dirty: o,
								largeDiffRenderLimit: getLiveDiffSectionRenderLimit({
									section: n,
									modifiedEditor: i,
									modifiedContent: e
								})
							});
						});
						return r ? a : n;
					});
				});
				i.onDidDispose(() => {
					p(), m(), h(), g.dispose();
				});
			}
		})]
	});
}
var COMBINED_DIFF_TREE_INDENT_PX = 12, COMBINED_DIFF_TREE_DIRECTORY_PADDING_PX = 8, COMBINED_DIFF_TREE_FILE_PADDING_PX = 20;
const CombinedDiffFileTreeRow = (0, import_react.memo)(function({ node: e, mode: t, worktreePath: n, sourceWorkspaceId: r, activeSectionKey: i, sectionIndexByKey: o, isCollapsed: c, visibleFileCount: l, onToggleDirectory: u, onNavigate: d }) {
	if (e.type === "directory") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative flex w-full items-center gap-1 py-1 pr-3 text-xs text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground",
		style: { paddingLeft: `${e.depth * COMBINED_DIFF_TREE_INDENT_PX + COMBINED_DIFF_TREE_DIRECTORY_PADDING_PX}px` },
		draggable: !0,
		onDragStart: (t) => {
			t.dataTransfer.setData(WORKSPACE_FILE_PATH_MIME, joinPath(n, e.path)), r && writeWorkspaceFileDragSourceForWorkspace(t.dataTransfer, r), t.dataTransfer.effectAllowed = "copy";
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			className: "flex min-w-0 flex-1 items-center gap-1 text-left",
			onClick: () => u(e.key),
			"aria-expanded": !c,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3 shrink-0 transition-transform", c && "-rotate-90") }),
				c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-3 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-3 shrink-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 flex-1 truncate",
					children: e.name
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-4 shrink-0 text-center text-[10px] font-bold tabular-nums text-muted-foreground/80",
			children: l ?? e.fileCount
		})]
	});
	let h = getCombinedDiffFileTreeSectionKey(t, e.entry), g = getFileTypeIcon(e.entry.path), _ = basename(e.entry.path), v = dirname(e.entry.path), y = v === "." ? "" : v, b = e.entry.status, x = !o.has(h);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: cn("group flex w-full min-w-0 cursor-pointer items-center gap-1 py-1 pr-3 text-left text-xs transition-colors hover:bg-accent/40 disabled:cursor-default disabled:opacity-50 disabled:hover:bg-transparent", i === h && "bg-accent/60"),
		style: { paddingLeft: `${e.depth * COMBINED_DIFF_TREE_INDENT_PX + COMBINED_DIFF_TREE_FILE_PADDING_PX}px` },
		disabled: x,
		draggable: !x,
		onDragStart: (t) => {
			if (x) {
				t.preventDefault();
				return;
			}
			t.dataTransfer.setData(WORKSPACE_FILE_PATH_MIME, joinPath(n, e.entry.path)), r && writeWorkspaceFileDragSourceForWorkspace(t.dataTransfer, r), t.dataTransfer.effectAllowed = "copy";
		},
		onClick: () => d(e.entry),
		children: [
			(0, import_react.createElement)(g, {
				className: "size-3.5 shrink-0",
				style: { color: STATUS_COLORS[b] }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1 truncate",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground",
					children: _
				}), y && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-1.5 text-[11px] text-muted-foreground",
					children: y
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-4 shrink-0 text-center text-[10px] font-bold",
				style: { color: STATUS_COLORS[b] },
				children: STATUS_LABELS[b]
			})
		]
	});
});
function CombinedDiffFileTreeRows({ rows: e, mode: t, worktreePath: n, sourceWorkspaceId: r, activeSectionKey: i, sectionIndexByKey: a, collapsedDirectoryKeys: o, visibleFileCounts: s, scrollElement: c, onToggleDirectory: l, onNavigate: u }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceControlVirtualFileList, {
		rows: e,
		scrollElement: c,
		estimateRowHeightPx: 24,
		getRowKey: (e) => e.key,
		renderRow: (e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CombinedDiffFileTreeRow, {
			node: e,
			mode: t,
			worktreePath: n,
			sourceWorkspaceId: r,
			activeSectionKey: i,
			sectionIndexByKey: a,
			isCollapsed: o.has(e.key),
			visibleFileCount: s?.get(e.key),
			onToggleDirectory: l,
			onNavigate: u
		}, e.key)
	});
}
function useCombinedDiffFileTreeResize(e) {
	let t = useAppStore((e) => e.combinedDiffFileTreeWidth), n = useAppStore((e) => e.setCombinedDiffFileTreeWidth), [r, i] = (0, import_react.useState)(null), { maxWidth: a, minWidth: o } = computeCombinedDiffFileTreeWidthBounds(r ?? 0), s = clampCombinedDiffFileTreeWidth(t, r ?? void 0), { containerRef: c, onResizeStart: l } = useSidebarResize({
		isOpen: !e,
		width: s,
		minWidth: o,
		maxWidth: a,
		deltaSign: 1,
		setWidth: n
	});
	return (0, import_react.useEffect)(() => {
		let t = c.current?.parentElement;
		if (e || !t) return;
		let n = () => {
			i(t.clientWidth);
		};
		n();
		let r = new ResizeObserver(n);
		return r.observe(t), () => r.disconnect();
	}, [e, c]), {
		handleResizeKeyDown: (0, import_react.useCallback)((e) => {
			e.key !== "ArrowLeft" && e.key !== "ArrowRight" || (e.preventDefault(), e.stopPropagation(), n(clampCombinedDiffFileTreeWidth(s + (e.key === "ArrowLeft" ? -1 : 1) * (16 * (e.shiftKey ? 2 : 1)), r ?? void 0)));
		}, [
			r,
			n,
			s
		]),
		handleResizeStart: l,
		maxWidth: a,
		minWidth: o,
		treeRef: c,
		width: s
	};
}
var UNCOMMITTED_AREA_ORDER = [
	"unstaged",
	"staged",
	"untracked"
], UNCOMMITTED_AREA_LABELS = {
	unstaged: "Changes",
	staged: "Staged Changes",
	untracked: "Untracked Files"
};
function buildCombinedDiffUncommittedTreeGroups(e) {
	return UNCOMMITTED_AREA_ORDER.map((t) => {
		let n = e.filter((e) => isGitStatusEntry(e) && e.area === t);
		if (n.length === 0) return null;
		let r = compactSourceControlTree(buildGitStatusSourceControlTree(t, n));
		return {
			area: t,
			label: UNCOMMITTED_AREA_LABELS[t],
			roots: r
		};
	}).filter((e) => e !== null);
}
function buildCombinedDiffBranchTreeRoots(e, t) {
	let n = t.filter((e) => !isGitStatusEntry(e));
	return compactSourceControlTree(buildSourceControlTree(e === "commit" ? "combined-commit" : "combined-branch", [...n]));
}
function flattenCombinedDiffTreeRoots(e, t) {
	return flattenSourceControlTree(e, t);
}
function getViewedCombinedDiffTreeVisibility({ roots: e, collapsedDirectoryKeys: t, mode: n, viewedSectionKeys: r }) {
	let i = /* @__PURE__ */ new Map(), a = [], o = (e) => {
		if (e.type === "file") return r.has(getCombinedDiffFileTreeSectionKey(n, e.entry)) ? null : {
			source: e,
			children: [],
			fileCount: 1
		};
		let t = e.children.map((e) => o(e)).filter((e) => e !== null);
		return t.length === 0 ? null : {
			source: e,
			children: t,
			fileCount: t.reduce((e, t) => e + t.fileCount, 0)
		};
	}, s = (e, n) => {
		if (e.source.type === "file") return {
			...e.source,
			depth: n
		};
		let r = [e.source.name], a = e;
		for (; !t.has(a.source.key) && a.children.length === 1 && a.children[0]?.source.type === "directory";) a = a.children[0], r.push(a.source.name);
		let o = a.source;
		if (o.type !== "directory") throw Error("Combined diff directory projection lost its source node");
		let c = {
			...o,
			name: r.join("/"),
			depth: n,
			fileCount: a.fileCount,
			children: a.children.map((e) => s(e, n + 1))
		};
		return i.set(c.key, c.fileCount), c;
	}, c = (e) => {
		if (a.push(e), e.type === "directory" && !t.has(e.key)) for (let t of e.children) c(t);
	}, l = 0;
	for (let t of e) {
		let e = o(t);
		if (!e) continue;
		let n = s(e, 0);
		l += e.fileCount, c(n);
	}
	return {
		rows: a,
		visibleFileCount: l,
		visibleFileCounts: i
	};
}
var EMPTY_TREE_ENTRIES = Object.freeze([]), EMPTY_TREE_EXTENSIONS = Object.freeze([]), EMPTY_UNCOMMITTED_TREE_GROUPS = [], EMPTY_TREE_ROOTS = [], EMPTY_TREE_ROWS = [];
function CombinedDiffFileTree({ mode: e, worktreePath: t, sourceWorkspaceId: n, entries: s, sectionIndexByKey: c, activeSectionKey: l, viewedSectionKeys: u, collapsed: d, onCollapsedChange: f, onNavigate: p }) {
	let [m, _] = import_react.useState(() => /* @__PURE__ */ new Set()), [y, b] = import_react.useState(""), [x, S] = import_react.useState(() => /* @__PURE__ */ new Set()), [C, w] = import_react.useState(!0), [T, E] = import_react.useState(null), { handleResizeKeyDown: D, handleResizeStart: O, maxWidth: j, minWidth: Ot, treeRef: M, width: N } = useCombinedDiffFileTreeResize(d), P = import_react.useCallback((e) => {
		_((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, []), F = import_react.useMemo(() => d ? EMPTY_TREE_EXTENSIONS : Array.from(new Set(s.map(getEntryExtension))).sort(), [d, s]), I = import_react.useMemo(() => d ? EMPTY_TREE_ENTRIES : getCombinedDiffFileTreeEntriesMatchingStaticFilters({
		entries: s,
		query: y,
		excludedExtensions: x
	}), [
		d,
		s,
		x,
		y
	]), L = import_react.useCallback((e) => {
		S((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, []), R = import_react.useCallback(() => {
		b(""), S(/* @__PURE__ */ new Set()), w(!0);
	}, []), z = x.size + (C ? 0 : 1) + (y.trim().length > 0 ? 1 : 0), B = import_react.useMemo(() => !d && (e === "all" || e === "uncommitted") ? buildCombinedDiffUncommittedTreeGroups(I) : EMPTY_UNCOMMITTED_TREE_GROUPS, [
		d,
		e,
		I
	]), V = import_react.useMemo(() => !d && (e === "all" || e === "branch" || e === "commit") ? buildCombinedDiffBranchTreeRoots(e, I) : EMPTY_TREE_ROOTS, [
		d,
		e,
		I
	]), H = import_react.useMemo(() => {
		let e = /* @__PURE__ */ new Map();
		if (d || !C) return e;
		for (let t of B) e.set(t.area, flattenCombinedDiffTreeRoots(t.roots, m));
		return e;
	}, [
		d,
		m,
		C,
		B
	]), U = import_react.useMemo(() => !d && C ? flattenCombinedDiffTreeRoots(V, m) : EMPTY_TREE_ROWS, [
		V,
		d,
		m,
		C
	]), W = import_react.useMemo(() => {
		if (d || C) return null;
		let t = /* @__PURE__ */ new Map();
		for (let n of B) t.set(n.area, getViewedCombinedDiffTreeVisibility({
			roots: n.roots,
			collapsedDirectoryKeys: m,
			mode: e,
			viewedSectionKeys: u
		}));
		return t;
	}, [
		d,
		m,
		C,
		e,
		B,
		u
	]), G = import_react.useMemo(() => d || C ? null : getViewedCombinedDiffTreeVisibility({
		roots: V,
		collapsedDirectoryKeys: m,
		mode: e,
		viewedSectionKeys: u
	}), [
		V,
		d,
		m,
		C,
		e,
		u
	]), K = C ? I.length : (G?.visibleFileCount ?? 0) + Array.from(W?.values() ?? []).reduce((e, t) => e + t.visibleFileCount, 0);
	if (d) return null;
	let q = {
		mode: e,
		worktreePath: t,
		sourceWorkspaceId: n,
		activeSectionKey: l,
		sectionIndexByKey: c,
		collapsedDirectoryKeys: m,
		scrollElement: T,
		onToggleDirectory: P,
		onNavigate: p
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		ref: M,
		className: "relative flex min-h-0 shrink-0 flex-col overflow-hidden border-r border-border bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 z-20 shrink-0 bg-background",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 border-b border-border px-3 py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] font-semibold uppercase tracking-[0.05em] text-muted-foreground",
						children: translate("auto.components.editor.CombinedDiffFileTree.481e63ca52", "Files")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "ghost",
						size: "icon-xs",
						"aria-label": translate("auto.components.editor.CombinedDiffFileTree.21783df79f", "Collapse file tree"),
						onClick: () => f(!0),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftClose, { className: "size-3.5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border px-2 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-2 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: y,
							onChange: (e) => b(e.target.value),
							placeholder: translate("auto.components.editor.CombinedDiffFileTree.4cc7b83ffe", "Filter files..."),
							className: "h-8 pl-7 text-xs"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "icon-sm",
							"aria-label": translate("auto.components.editor.CombinedDiffFileTree.cd0e0ed79e", "Filter diff files"),
							className: cn(z > 0 && "border-foreground/30 text-foreground"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
						align: "end",
						side: "bottom",
						sideOffset: 6,
						className: "w-56 p-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-b border-border px-3 py-2 text-xs font-semibold text-foreground",
								children: translate("auto.components.editor.CombinedDiffFileTree.c00020f081", "File extensions")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-h-60 overflow-auto py-1 scrollbar-sleek",
								children: F.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs transition-colors hover:bg-accent hover:text-accent-foreground",
									onClick: () => L(e),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("size-3.5 shrink-0", x.has(e) ? "opacity-0" : "opacity-100") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 truncate",
										children: e
									})]
								}, e))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs transition-colors hover:bg-accent hover:text-accent-foreground",
									onClick: () => w((e) => !e),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("size-3.5 shrink-0", C ? "opacity-100" : "opacity-0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 truncate",
										children: translate("auto.components.editor.CombinedDiffFileTree.be119cb9d1", "Viewed files")
									})]
								}), z > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "w-full px-3 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
									onClick: R,
									children: translate("auto.components.editor.CombinedDiffFileTree.eafe1aeb53", "Reset filters")
								})]
							})
						]
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: E,
				className: "min-h-0 flex-1 overflow-auto py-1 scrollbar-sleek",
				children: K === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-3 py-6 text-center text-xs text-muted-foreground",
					children: translate("auto.components.editor.CombinedDiffFileTree.f984289373", "No files match the current filters.")
				}) : e === "all" || e === "uncommitted" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [B.map((e) => {
					let t = W?.get(e.area)?.rows ?? H.get(e.area) ?? [], n = W?.get(e.area)?.visibleFileCounts;
					return t.length === 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.05em] text-muted-foreground",
							children: e.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CombinedDiffFileTreeRows, {
							rows: t,
							visibleFileCounts: n,
							...q
						})]
					}, e.area);
				}), e === "all" && (G?.rows ?? U).length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.05em] text-muted-foreground",
						children: translate("auto.components.editor.CombinedDiffFileTree.39b6b9e4e4", "Committed on Branch")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CombinedDiffFileTreeRows, {
						rows: G?.rows ?? U,
						visibleFileCounts: G?.visibleFileCounts,
						...q
					})]
				}) : null] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CombinedDiffFileTreeRows, {
					rows: G?.rows ?? U,
					visibleFileCounts: G?.visibleFileCounts,
					...q
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "separator",
				"aria-label": translate("auto.components.editor.CombinedDiffFileTree.resizeFileTree", "Resize file tree"),
				"aria-orientation": "vertical",
				"aria-valuemax": Math.round(j),
				"aria-valuemin": Math.round(Ot),
				"aria-valuenow": Math.round(N),
				tabIndex: 0,
				className: "group absolute inset-y-0 right-0 z-30 w-1 cursor-col-resize outline-none focus-visible:ring-1 focus-visible:ring-ring",
				onMouseDown: O,
				onKeyDown: D,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ml-auto h-full w-px bg-transparent transition-colors group-hover:bg-ring/50 group-active:bg-ring group-focus-visible:bg-ring" })
			})
		]
	});
}
function getCombinedDiffFileTreeNavigationIndex({ mode: e, entry: t, sectionIndexByKey: n }) {
	return n.get(getCombinedDiffFileTreeSectionKey(e, t)) ?? null;
}
function handleCombinedDiffFileTreeNavigation({ mode: e, entry: t, sections: n, sectionIndexByKey: r, toggleSection: i, loadSection: a, scrollToIndex: o }) {
	let s = getCombinedDiffFileTreeNavigationIndex({
		mode: e,
		entry: t,
		sectionIndexByKey: r
	});
	return s === null || !n[s] ? null : (n[s].collapsed && i(s), a?.(s), o(s), s);
}
export { collectCountedCombinedDiffPasses as a, getCombinedDiffBranchEntriesInTreeOrder as c, getStoredTextDiffContent as d, getStoredTextDiffResult as f, getDiffSectionRowEstimatedHeight as i, isCombinedDiffSectionViewed as l, getCombinedDiffFileTreeSectionKey as m, CombinedDiffFileTree as n, getCombinedDiffCountingPassKey as o, useCombinedDiffSectionIndexMap as p, DiffSectionItem as r, shouldLoadCombinedDiffOnDemand as s, handleCombinedDiffFileTreeNavigation as t, removeDiffSectionMeasuredHeight as u };
