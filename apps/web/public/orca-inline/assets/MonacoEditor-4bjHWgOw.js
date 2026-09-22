import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./client-KaZE_emc.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import "./useMountedRef-De7bTfqf.js";
import { t as Copy } from "./copy-BzsskppR.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import "./AgentQuestionIcon-DjFsmxm7.js";
import { t as Plus } from "./plus-DZ00_r0s.js";
import { Z_ as getRuntimeGitRemoteFileUrl, lg as findWorktreeById, t as useAppStore } from "./store-C9f8FDJV.js";
import { i as isMarkdownComment } from "./diff-comment-compat-OnNoNTL8.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { i as DropdownMenuItem, m as DropdownMenuTrigger, r as DropdownMenuContent, t as DropdownMenu } from "./dropdown-menu-DRu_J4_e.js";
import "./tooltip-BWXjmmf0.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./keybindings-1v53ESY9.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import "./editor.api2-B26FOp3A.js";
import "./workers-CfXxeJ6j.js";
import "./monaco.contribution-DqQ6JUf5.js";
import "./window-park-visibility-BBcurIcE.js";
import "./selectors-Cdg4hUQI.js";
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
import "./icons-CAdlcsWl.js";
import "./agent-catalog-Cgr0_vcs.js";
import "./text-control-paste-Bg1FpWOl.js";
import "./WorktreeCardHelpers-BykCvVd_.js";
import "./useDetectedAgents-DERj8Q7s.js";
import "./agent-status-connection-ownership-B1K8knO1.js";
import "./structured-agent-session-provisional-tab-PRgRPsbX.js";
import "./native-chat-launch-session-options-CUf2xfmH.js";
import "./useShortcutLabel-B283mfzm.js";
import "./AgentStateDot-CrLFCeoH.js";
import "./use-now-DD2-bt0J.js";
import "./worktree-agent-rows-IU_JQSGH.js";
import "./worktree-agent-row-selectors-CkGQD3YA.js";
import "./worktree-title-derived-agent-rows-BgX4iwli.js";
import "./useWorktreeAgentRows-av1v5VcW.js";
import { i as resolveEditorFontFamily, n as computeEditorFontSize } from "./editor-font-zoom-7waunKWS.js";
import "./primary-selection-WP9lhEQ-.js";
import { i as isLinuxUserAgent } from "./pane-helpers-DtKF6qK0.js";
import { n as normalizeSelectedTextForFileSearch, r as registerFileSearchSelectedTextProvider } from "./file-search-selection-DBiLYnC6.js";
import "./ReviewNotesSendMenuContent-BXrHTRy4.js";
import "./launch-agent-in-new-tab-DNniBJOv.js";
import "./active-agent-note-send-B2n60SEm.js";
import { n as MAX_TOKENIZATION_LINE_LENGTH, r as Ft, t as handleMonacoLargeTextPaste } from "./monaco-setup-By9TegQE.js";
import { a as installMonacoEditorFindShortcut, n as installEditorAddReviewNoteShortcut, r as installEditorSaveShortcut } from "./editor-shortcuts-B2Tpd-Q8.js";
import { n as syncContentUpdate, t as syncContentOnMount } from "./monaco-content-sync-BQSexFXu.js";
import "./editor.main-DYdOLWJc.js";
import { t as monacoFindOptions } from "./monaco-find-options-ew4ftt5y.js";
import { a as setWithLRU, i as scrollTopCache, n as editorSelectionCache } from "./scroll-cache-uGotjuVq.js";
import { t as useContextualCopySetup } from "./useContextualCopySetup-B-cCNm-a.js";
import { t as selectWorktreeDiffComments } from "./worktree-diff-comments-selector-DTAjSWIf.js";
import { n as getDiffCommentPopoverLeft, r as getDiffCommentPopoverTop, t as DiffCommentPopover } from "./DiffCommentPopover-BAlGhDzG.js";
import { n as getSelectionEndLine, t as useDiffCommentDecorator } from "./useDiffCommentDecorator-Dijhv8AL.js";
import "./DiffCommentCard-DQztuCo3.js";
import "./NotesSendMenu-CbK3gK3-.js";
import "./comment-body-submit-state-DspNAZ7B.js";
import { i as forEachLine, t as buildGitConflictDecorations } from "./monaco-conflict-decorations-YvxZEPR_.js";
import { a as getMarkdownDocLinkTarget } from "./markdown-doc-links-CqJYNZT9.js";
import { r as getMarkdownFenceRanges, t as createMarkdownFenceRangeCursor } from "./markdown-fence-scanner-TZT3BBxV.js";
import { n as formatMarkdownReviewNotes } from "./markdown-review-notes-Bf0IQNNb.js";
import { n as getMarkdownDocCompletionContext, r as getMarkdownDocCompletionDocuments, t as matchesPendingEditorFocusRequest } from "./pending-editor-focus-request-DVfcOUCj.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function formatPathLineReference(e, t) {
	return `${e}:${t}`;
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function MonacoGutterContextMenu({ open: e, onOpenChange: t, point: a, line: l, filePath: u, relativePath: h }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
		open: e,
		onOpenChange: t,
		modal: !1,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-hidden": !0,
				tabIndex: -1,
				className: "pointer-events-none fixed size-px opacity-0",
				style: {
					left: a.x,
					top: a.y
				}
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
			sideOffset: 0,
			align: "start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => window.api.ui.writeClipboardText(formatPathLineReference(u, l)),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5 mr-1.5" }), translate("auto.components.editor.MonacoGutterContextMenu.4eaa991bde", "Copy Path to Line")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: () => window.api.ui.writeClipboardText(formatPathLineReference(h, l)),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5 mr-1.5" }), translate("auto.components.editor.MonacoGutterContextMenu.2e0b1cdc05", "Copy Rel. Path to Line")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
					onSelect: async () => {
						let e = useAppStore.getState(), t = e.openFiles.find((e) => e.filePath === u);
						if (!t) return;
						let n = findWorktreeById(e.worktreesByRepo, t.worktreeId);
						if (!n) return;
						let r = getConnectionId(t?.worktreeId ?? null) ?? void 0, i = await getRuntimeGitRemoteFileUrl({
							settings: e.settings,
							worktreeId: t.worktreeId,
							worktreePath: n.path,
							connectionId: r
						}, {
							relativePath: h,
							line: l
						});
						i && window.api.ui.writeClipboardText(i);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5 mr-1.5" }), translate("auto.components.editor.MonacoGutterContextMenu.7b57b1b468", "Copy Remote URL")]
				})
			]
		})]
	});
}
function buildFileEditorWordWrapOptions(e) {
	return { wordWrap: e === !1 ? "off" : "on" };
}
const MONACO_AUTO_HEIGHT_MAX_LINES = 2e3;
var MONACO_AUTO_HEIGHT_EXTRA_PX = 18, MONACO_AUTO_HEIGHT_MIN_PX = 80;
function getMonacoAutoHeightForContent(e, t) {
	return clampMonacoAutoHeight(countMonacoAutoHeightLines(e) * t + MONACO_AUTO_HEIGHT_EXTRA_PX, t);
}
function clampMonacoAutoHeight(e, t) {
	return Math.max(MONACO_AUTO_HEIGHT_MIN_PX, Math.min(Math.ceil(e), getMonacoAutoHeightMaxPx(t)));
}
function isMonacoAutoHeightCapped(e, t) {
	return e !== null && e >= getMonacoAutoHeightMaxPx(t);
}
function countMonacoAutoHeightLines(e) {
	if (e.length === 0) return 1;
	let t = Math.min(e.length, 65536), n = 1;
	for (let r = 0; r < t; r += 1) if (e.charCodeAt(r) === 10 && (n += 1, n >= 2e3)) return MONACO_AUTO_HEIGHT_MAX_LINES;
	return n;
}
function getMonacoAutoHeightMaxPx(e) {
	return MONACO_AUTO_HEIGHT_MAX_LINES * e + MONACO_AUTO_HEIGHT_EXTRA_PX;
}
function computeMonacoRevealRange(e) {
	let { line: t, column: n, matchLength: r, maxLine: i, lineMaxColumn: a } = e, o = Math.min(Math.max(1, t), Math.max(1, i)), s = Math.min(Math.max(1, n), Math.max(1, a)), c = Math.max(1, r), l = Math.min(s + c, Math.max(2, a));
	return {
		startLineNumber: o,
		startColumn: s,
		endLineNumber: o,
		endColumn: Math.max(s + 1, l)
	};
}
function performReveal(e, t, n, r, i, a, o) {
	let s = e.getModel();
	if (!s) {
		e.focus();
		return;
	}
	let c = computeMonacoRevealRange({
		line: t,
		column: n,
		matchLength: r,
		maxLine: s.getLineCount(),
		lineMaxColumn: s.getLineMaxColumn(Math.min(Math.max(1, t), s.getLineCount()))
	}), l = r > 0;
	e.setPosition({
		lineNumber: c.startLineNumber,
		column: c.startColumn
	}), l ? (e.setSelection(c), e.revealRangeInCenter(c)) : (e.setSelection({
		startLineNumber: c.startLineNumber,
		startColumn: c.startColumn,
		endLineNumber: c.startLineNumber,
		endColumn: c.startColumn
	}), e.revealPositionInCenter({
		lineNumber: c.startLineNumber,
		column: c.startColumn
	})), i(), l && (a.current = e.createDecorationsCollection([{
		range: c,
		options: {
			inlineClassName: "monaco-search-result-highlight",
			stickiness: 1
		}
	}]), o.current = setTimeout(() => {
		a.current?.clear(), a.current = null, o.current = null;
	}, 1200)), e.focus();
}
function useMonacoRevealScheduler() {
	let e = (0, import_react.useRef)(null), t = (0, import_react.useRef)(null), n = (0, import_react.useRef)(null), r = (0, import_react.useRef)(null), i = (0, import_react.useCallback)(() => {
		t.current !== null && (clearTimeout(t.current), t.current = null), e.current?.clear(), e.current = null;
	}, []), a = (0, import_react.useCallback)(() => {
		n.current !== null && (cancelAnimationFrame(n.current), n.current = null), r.current !== null && (cancelAnimationFrame(r.current), r.current = null);
	}, []);
	return {
		clearTransientRevealHighlight: i,
		cancelScheduledReveal: a,
		queueReveal: (0, import_react.useCallback)((o, s, c, l, u) => {
			a();
			let d = 0, f = () => {
				n.current = requestAnimationFrame(() => {
					r.current = requestAnimationFrame(() => {
						n.current = null, r.current = null;
						let a = o.getModel()?.getLineCount() ?? 0;
						if (s > 1 && a < s && d < 120) {
							d += 2, f();
							return;
						}
						performReveal(o, s, c, l, i, e, t), u?.();
					});
				});
			};
			f();
		}, [a, i])
	};
}
var programmaticContentSyncDepthByFilePath = /* @__PURE__ */ new Map();
function beginProgrammaticContentSync(e) {
	programmaticContentSyncDepthByFilePath.set(e, (programmaticContentSyncDepthByFilePath.get(e) ?? 0) + 1);
}
function endProgrammaticContentSync(e) {
	let t = programmaticContentSyncDepthByFilePath.get(e) ?? 0;
	if (t <= 1) {
		programmaticContentSyncDepthByFilePath.delete(e);
		return;
	}
	programmaticContentSyncDepthByFilePath.set(e, t - 1);
}
function isProgrammaticContentSyncInFlight(e) {
	return (programmaticContentSyncDepthByFilePath.get(e) ?? 0) > 0;
}
function shouldIgnoreMonacoContentChange(e) {
	let { filePath: t, isApplyingProgrammaticContent: n } = e;
	return n || isProgrammaticContentSyncInFlight(t);
}
function useMonacoContentSyncBridge(e) {
	let { editorRef: t, content: n, contentRef: r, contentSyncModeRef: i, filePath: a, onContentChange: o } = e, s = (0, import_react.useRef)(n), c = (0, import_react.useRef)(!1), l = (0, import_react.useRef)(!1), u = (0, import_react.useCallback)((e) => {
		if (e !== void 0) {
			if (l.current) {
				s.current = e;
				return;
			}
			if (shouldIgnoreMonacoContentChange({
				filePath: a,
				isApplyingProgrammaticContent: c.current
			})) return;
			s.current = e, o(e);
		}
	}, [a, o]);
	return (0, import_react.useLayoutEffect)(() => {
		let e = t.current;
		if (!(!e || s.current === n)) {
			beginProgrammaticContentSync(a), c.current = !0;
			try {
				syncContentUpdate(e, n, i.current), s.current = n;
			} finally {
				c.current = !1, endProgrammaticContentSync(a);
			}
		}
	}, [
		n,
		i,
		t,
		a
	]), {
		contentRef: r,
		lastSyncedContentRef: s,
		contentSyncModeRef: i,
		isApplyingProgrammaticContentRef: c,
		isApplyingLargePasteRef: l,
		handleChange: u
	};
}
var FALLBACK_LINE_HEIGHT_PX = 19;
function isEmptySelection(e) {
	return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn;
}
function getMonacoMarkdownSelectionAnnotationTarget(e, t, n) {
	if (!t || isEmptySelection(t)) return null;
	let r = e.getModel();
	if (!r) return null;
	let i = r.getValueInRange(t).trim();
	if (!i) return null;
	let a = getSelectionEndLine(t), o = Math.min(t.startLineNumber, a), s = Math.max(t.startLineNumber, a);
	if (o < 1 || s > r.getLineCount()) return null;
	let c = e.getTopForLineNumber(s) - e.getScrollTop() + FALLBACK_LINE_HEIGHT_PX;
	return {
		lineNumber: s,
		startLine: o === s ? void 0 : o,
		selectedText: i,
		top: c,
		left: n
	};
}
function useMonacoMarkdownAnnotations(e) {
	let { mountedEditor: t, editorContainerRef: n, relativePath: r, content: i, language: a, worktreeId: o, markdownAnnotationsEnabled: s } = e, u = useAppStore((e) => e.addDiffComment), d = useAppStore((e) => e.deleteDiffComment), f = useAppStore((e) => e.updateDiffComment), p = useAppStore((e) => e.scrollToDiffCommentId), m = useAppStore((e) => e.setScrollToDiffCommentId), h = useAppStore((e) => selectWorktreeDiffComments(e, o)), g = (0, import_react.useMemo)(() => (h ?? []).filter((e) => e.filePath === r && isMarkdownComment(e)), [h, r]), [_, v] = (0, import_react.useState)(null), [y, b] = (0, import_react.useState)(null), x = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		x.current = _;
	}, [_]);
	let S = s && a === "markdown" && !!o, C = (0, import_react.useRef)(S);
	(0, import_react.useEffect)(() => {
		C.current = S;
	}, [S]);
	let w = (0, import_react.useMemo)(() => !S || !p ? null : g.some((e) => e.id === p) ? p : null, [
		g,
		p,
		S
	]), T = (0, import_react.useCallback)((e) => formatMarkdownReviewNotes([e], i), [i]);
	return useDiffCommentDecorator({
		editor: S ? t : null,
		filePath: r,
		worktreeId: o ?? "",
		comments: S ? g : [],
		pendingCommentTarget: _,
		onAddCommentClick: ({ lineNumber: e, startLine: r, top: i }) => {
			b(null), v({
				lineNumber: e,
				startLine: r,
				top: i,
				left: t ? getDiffCommentPopoverLeft(t, n.current) ?? void 0 : void 0
			});
		},
		onDeleteComment: (e) => {
			o && d(o, e);
		},
		onUpdateComment: o ? (e, t) => f(o, e, t) : void 0,
		formatCommentPrompt: T,
		pendingScrollCommentId: w,
		onPendingScrollConsumed: () => m(null)
	}), (0, import_react.useEffect)(() => {
		if (!t || !_) return;
		let e = () => {
			let e = getDiffCommentPopoverTop(t, _.lineNumber, void 0), r = getDiffCommentPopoverLeft(t, n.current);
			v((t) => t && {
				...t,
				top: e ?? t.top,
				left: r ?? t.left
			});
		}, r = t.onDidScrollChange(e), i = t.onDidContentSizeChange(e), a = t.onDidLayoutChange(e);
		return () => {
			r.dispose(), i.dispose(), a.dispose();
		};
	}, [t, _?.lineNumber]), (0, import_react.useEffect)(() => {
		if (!t || !S || _) {
			b(null);
			return;
		}
		let e = () => {
			let e = getDiffCommentPopoverLeft(t, n.current);
			b(getMonacoMarkdownSelectionAnnotationTarget(t, t.getSelection(), e ?? void 0));
		};
		e();
		let r = t.onDidChangeCursorSelection(e), i = t.onDidScrollChange(e), a = t.onDidLayoutChange(e);
		return () => {
			r.dispose(), i.dispose(), a.dispose();
		};
	}, [
		_,
		n,
		t,
		S
	]), {
		shouldShowMarkdownAnnotations: S,
		shouldShowMarkdownAnnotationsRef: C,
		commentPopover: _,
		setCommentPopover: v,
		commentPopoverRef: x,
		selectionAnnotationTarget: y,
		setSelectionAnnotationTarget: b,
		handleSubmitMarkdownComment: async (e) => {
			!_ || !o || (await u({
				worktreeId: o,
				filePath: r,
				source: "markdown",
				startLine: _.startLine,
				lineNumber: _.lineNumber,
				selectedText: _.selectedText,
				body: e,
				side: "modified"
			}) ? v(null) : console.error("Failed to add markdown comment — draft preserved"));
		}
	};
}
var provider = null, providerMonaco = null, documentsByModel = /* @__PURE__ */ new Map();
function ensureMarkdownDocCompletionProvider(e) {
	provider && providerMonaco === e || (provider && (provider.dispose(), documentsByModel.clear()), providerMonaco = e, provider = e.languages.registerCompletionItemProvider("markdown", {
		triggerCharacters: ["["],
		provideCompletionItems(t, n) {
			let r = t.getLineContent(n.lineNumber), i = getMarkdownDocCompletionContext(r.slice(0, n.column - 1));
			if (!i) return { suggestions: [] };
			let a = documentsByModel.get(t.uri.toString()) ?? [], o = r.slice(n.column - 1), s = {
				startLineNumber: n.lineNumber,
				startColumn: n.column - i.partial.length,
				endLineNumber: n.lineNumber,
				endColumn: n.column
			};
			return { suggestions: getMarkdownDocCompletionDocuments(a, i.partial).map((t) => ({
				label: t.name,
				kind: e.languages.CompletionItemKind.File,
				detail: t.relativePath,
				insertText: o.startsWith("]]") ? t.name : `${t.name}]]`,
				range: s
			})) };
		}
	}));
}
function setMarkdownDocCompletionDocuments(e, t) {
	documentsByModel.set(e, t);
}
function clearMarkdownDocCompletionDocuments(e) {
	documentsByModel.delete(e);
}
function useMonacoEditorDecorations(e) {
	let { editorRef: t, mountedEditor: n, content: r, language: i, markdownDocuments: a, conflictDecorationsEnabled: o } = e, s = (0, import_react.useRef)(null), c = (0, import_react.useRef)(null), l = (0, import_react.useRef)(null), u = (0, import_react.useCallback)(() => {
		let e = t.current?.getModel()?.uri.toString() ?? null;
		s.current && s.current !== e && clearMarkdownDocCompletionDocuments(s.current), s.current = e, e && (i === "markdown" && a ? setMarkdownDocCompletionDocuments(e, a) : clearMarkdownDocCompletionDocuments(e));
	}, [
		t,
		i,
		a
	]);
	return (0, import_react.useEffect)(() => {
		c.current?.refresh();
	}, [i]), (0, import_react.useEffect)(() => {
		let e = n;
		if (!e) return;
		if (!o) {
			l.current?.clear();
			return;
		}
		let t = buildGitConflictDecorations(r);
		if (t.length === 0) {
			l.current?.clear();
			return;
		}
		if (!l.current) {
			l.current = e.createDecorationsCollection(t);
			return;
		}
		l.current.set(t);
	}, [
		o,
		r,
		n
	]), (0, import_react.useEffect)(() => {
		u();
	}, [u]), (0, import_react.useEffect)(() => () => {
		s.current && clearMarkdownDocCompletionDocuments(s.current), c.current?.dispose(), c.current = null, l.current?.clear(), l.current = null;
	}, []), {
		markdownDocLinkDecorationsRef: c,
		conflictDecorationsRef: l,
		updateMarkdownCompletionDocuments: u
	};
}
var BACKTICK = 96, BACKSLASH = 92;
function collectInlineCodeSpans(e, t, n, r) {
	r.length = 0;
	let i = -1;
	for (let a = t; a < n; a += 1) e.charCodeAt(a) !== BACKTICK || a > t && e.charCodeAt(a - 1) === BACKSLASH || (i === -1 ? i = a : (r.push(i, a + 1), i = -1));
}
function isInsideSpan(e, t) {
	for (let n = 0; n < t.length; n += 2) if (e >= t[n] && e < t[n + 1]) return !0;
	return !1;
}
function getMarkdownDocLinkDecorationRanges(e) {
	let t = [], n = [], r = createMarkdownFenceRangeCursor(getMarkdownFenceRanges(e)), i = e.indexOf("[["), a = e.indexOf("]]");
	return forEachLine(e, (o, s, c) => {
		if (r(o)) return;
		let l = !1, u = o;
		for (; u < s;) {
			i !== -1 && i < u && (i = e.indexOf("[[", u));
			let r = i;
			if (r === -1 || r + 2 > s) break;
			a !== -1 && a < r + 2 && (a = e.indexOf("]]", r + 2));
			let d = a;
			if (d === -1 || d + 2 > s) break;
			l ||= (collectInlineCodeSpans(e, o, s, n), !0), isInsideSpan(r, n) || getMarkdownDocLinkTarget(e.slice(r + 2, d)) && t.push({
				startLineNumber: c,
				startColumn: r - o + 1,
				endLineNumber: c,
				endColumn: d - o + 3
			}), u = d + 2;
		}
	}), t;
}
function createMarkdownDocLinkDecorationController(e, t) {
	let n = e.createDecorationsCollection(), r = null, i = () => {
		r !== null && (clearTimeout(r), r = null);
	}, a = () => {
		i();
		let r = e.getModel();
		if (!r || t() !== "markdown") {
			n.clear();
			return;
		}
		n.set(getMarkdownDocLinkDecorationRanges(r.getValue()).map((e) => ({
			range: e,
			options: {
				inlineClassName: "monaco-markdown-doc-link",
				stickiness: 1
			}
		})));
	}, o = () => {
		if (t() !== "markdown") {
			a();
			return;
		}
		i(), r = setTimeout(a, 120);
	}, s = e.onDidChangeModelContent(o);
	return a(), {
		refresh: o,
		dispose: () => {
			i(), s.dispose(), n.clear();
		}
	};
}
function installMonacoE2EProbe(e, t) {
	return () => {};
}
function getMonacoCodebaseSearchQuery(e, t, n) {
	if (!e) return null;
	if (t && !t.isEmpty()) {
		let n = normalizeSelectedTextForFileSearch(e.getValueInRange(t));
		if (n) return n;
	}
	return n ? normalizeSelectedTextForFileSearch(e.getWordAtPosition(n)?.word) : null;
}
function installMonacoEditorInputBindings(e) {
	let { editorInstance: t, worktreeId: r, editorContainerRef: i, propsRef: a, readOnlyRef: o, lastSyncedContentRef: s, isApplyingLargePasteRef: l, commentPopoverRef: u, shouldShowMarkdownAnnotationsRef: d, setCommentPopover: f, setSelectionAnnotationTarget: p } = e, m = t.getContainerDomNode(), g = installEditorSaveShortcut(m, () => {
		let e = t.getValue();
		a.current.onSave(e);
	}), _ = installMonacoEditorFindShortcut(t), v = installEditorAddReviewNoteShortcut(m, () => {
		if (u.current) return !0;
		if (!d.current) return !1;
		let e = getMonacoMarkdownSelectionAnnotationTarget(t, t.getSelection(), getDiffCommentPopoverLeft(t, i.current) ?? void 0);
		return e ? (u.current = e, f(e), p(null), !0) : !1;
	}), y = t.addAction({
		id: "orca.searchInFiles",
		label: translate("auto.components.editor.MonacoEditor.fd68ae03b3", "Search in Files"),
		contextMenuGroupId: "navigation",
		contextMenuOrder: 2,
		run: () => {
			if (!r) return;
			let e = getMonacoCodebaseSearchQuery(t.getModel(), t.getSelection(), t.getPosition());
			e && useAppStore.getState().showRightSidebarSearch({ query: e });
		}
	}), b = (e) => {
		handleMonacoLargeTextPaste(t, e, {
			readOnly: o.current,
			onPasteStart: () => {
				l.current = !0;
			},
			onPasteResult: (e) => {
				if (l.current = !1, e.status === "pasted" || e.status === "cancelled") {
					let e = t.getValue();
					s.current = e, a.current.onContentChange(e);
				}
				e.status === "rejected" && e.reason === "too-large" && toast.error(translate("auto.components.editor.MonacoEditor.largePasteTooLarge", "Paste is too large."));
			}
		});
	};
	return m.addEventListener("paste", b, { capture: !0 }), { disposeInputBindings: () => {
		g(), _(), v(), m.removeEventListener("paste", b, { capture: !0 }), y.dispose();
	} };
}
function installMonacoViewStateTracking(e) {
	let { editorInstance: t, filePath: n, viewStateKey: r, scrollThrottleTimerRef: i, setEditorCursorLine: a } = e, o = t.getPosition();
	return o && a(n, o.lineNumber), {
		cursorPositionSub: t.onDidChangeCursorPosition((e) => {
			a(n, e.position.lineNumber);
		}),
		scrollStateSub: t.onDidScrollChange((e) => {
			i.current !== null && clearTimeout(i.current), i.current = setTimeout(() => {
				setWithLRU(scrollTopCache, r, e.scrollTop), i.current = null;
			}, 150);
		})
	};
}
function restoreMonacoViewState(e, t) {
	let n = editorSelectionCache.get(t), r = scrollTopCache.get(t);
	r !== void 0 || n ? requestAnimationFrame(() => {
		n && e.setSelections(n), r !== void 0 && e.setScrollTop(r), e.focus();
	}) : e.focus();
}
function snapshotMonacoViewState(e, t) {
	let n = e.current;
	if (n) {
		setWithLRU(scrollTopCache, t, n.getScrollTop());
		let e = n.getSelections();
		e && setWithLRU(editorSelectionCache, t, e);
	}
}
function useMonacoEditorMount(e) {
	let { fileId: t, filePath: n, viewStateKey: r, viewStateId: i, worktreeId: a, autoHeight: o, autoHeightLineHeight: s, editorRef: l, editorContainerRef: u, languageRef: d, propsRef: f, readOnlyRef: p, scrollThrottleTimerRef: m, unregisterFileSearchSelectionRef: h, setMountedEditor: g, setAutoHeightContentHeight: _, setEditorCursorLine: v, setupCopy: y, queueReveal: b, contentSync: { contentRef: S, lastSyncedContentRef: C, contentSyncModeRef: w, isApplyingProgrammaticContentRef: T, isApplyingLargePasteRef: E }, decorations: { markdownDocLinkDecorationsRef: D, conflictDecorationsRef: O, updateMarkdownCompletionDocuments: k }, annotations: { commentPopoverRef: A, shouldShowMarkdownAnnotationsRef: j, setCommentPopover: M, setSelectionAnnotationTarget: Me }, gutterMenu: { setGutterMenuOpen: N, setGutterMenuPoint: P, setGutterMenuLine: F } } = e;
	return (0, import_react.useCallback)((e, I) => {
		l.current = e, g(e);
		let L = installMonacoE2EProbe(e, n), R = null, z = null, B = () => {
			o && z === null && (z = window.requestAnimationFrame(() => {
				z = null, _(clampMonacoAutoHeight(Math.ceil(e.getContentHeight()) + 1, s));
			}));
		};
		o && (B(), R = e.onDidContentSizeChange(B)), D.current = createMarkdownDocLinkDecorationController(e, () => d.current), ensureMarkdownDocCompletionProvider(I), k(), beginProgrammaticContentSync(n), T.current = !0;
		try {
			syncContentOnMount(e, S.current, w.current) && (C.current = S.current);
		} finally {
			T.current = !1, endProgrammaticContentSync(n);
		}
		y(e, I, n, f), h.current?.(), h.current = registerFileSearchSelectedTextProvider(() => {
			if (!e.hasTextFocus()) return null;
			let t = e.getModel(), n = e.getSelection();
			return !t || !n || n.isEmpty() ? null : t.getValueInRange(n);
		});
		let { disposeInputBindings: V } = installMonacoEditorInputBindings({
			editorInstance: e,
			worktreeId: a,
			editorContainerRef: u,
			propsRef: f,
			readOnlyRef: p,
			lastSyncedContentRef: C,
			isApplyingLargePasteRef: E,
			commentPopoverRef: A,
			shouldShowMarkdownAnnotationsRef: j,
			setCommentPopover: M,
			setSelectionAnnotationTarget: Me
		}), { cursorPositionSub: Ne, scrollStateSub: H } = installMonacoViewStateTracking({
			editorInstance: e,
			filePath: n,
			viewStateKey: r,
			scrollThrottleTimerRef: m,
			setEditorCursorLine: v
		}), U = e.onMouseDown((t) => {
			if (t.event.rightButton && t.target.type === I.editor.MouseTargetType.GUTTER_LINE_NUMBERS) {
				t.event.preventDefault(), t.event.stopPropagation();
				let n = t.target.position?.lineNumber ?? 1;
				e.setPosition({
					lineNumber: n,
					column: 1
				}), F(n), P({
					x: t.event.posx,
					y: t.event.posy
				}), N(!0);
			}
		});
		e.onDidDispose(() => {
			Ne.dispose(), H.dispose(), U.dispose(), V(), R?.dispose(), z !== null && (window.cancelAnimationFrame(z), z = null), O.current?.clear(), O.current = null, L(), l.current = null, g(null), M(null);
		});
		let W = useAppStore.getState().pendingEditorReveal, G = W?.fileId ? W.fileId === t : W?.filePath === n;
		W && G ? b(e, W.line, W.column, W.matchLength, () => {
			useAppStore.getState().setPendingEditorReveal(null);
		}) : restoreMonacoViewState(e, r);
		let q = useAppStore.getState().pendingEditorFocusRequest;
		q && matchesPendingEditorFocusRequest(q, {
			fileId: t,
			worktreeId: a,
			viewStateId: i
		}) && useAppStore.getState().consumeEditorFocusRequest(q.token);
	}, [
		b,
		y,
		t,
		n,
		v,
		k,
		r,
		i,
		o,
		s,
		a,
		l,
		u,
		d,
		f,
		p,
		m,
		h,
		g,
		_,
		S,
		C,
		w,
		T,
		E,
		D,
		O,
		A,
		j,
		M,
		Me,
		N,
		P,
		F
	]);
}
function MonacoMarkdownAnnotationOverlay({ shouldShowMarkdownAnnotations: e, commentPopover: t, setCommentPopover: r, selectionAnnotationTarget: i, setSelectionAnnotationTarget: o, onSubmitMarkdownComment: s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [t && e && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiffCommentPopover, {
		lineNumber: t.lineNumber,
		startLine: t.startLine,
		top: t.top,
		left: t.left,
		onCancel: () => r(null),
		onSubmit: s
	}, `${t.startLine ?? t.lineNumber}:${t.lineNumber}`), i && e && !t ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "orca-diff-comment-add-btn",
		style: {
			display: "flex",
			top: Math.max(4, i.top - 22),
			left: i.left ?? 4
		},
		title: translate("auto.components.editor.MonacoEditor.68cb83f4a7", "Add note on selected text"),
		"aria-label": translate("auto.components.editor.MonacoEditor.68cb83f4a7", "Add note on selected text"),
		onMouseDown: (e) => {
			e.preventDefault(), e.stopPropagation();
		},
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation(), r(i), o(null);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3" })
	}) : null] });
}
function MonacoEditor({ fileId: e, filePath: t, viewStateKey: n, viewStateId: r, relativePath: i, content: a, language: o, onContentChange: s, onSave: l, revealLine: u, revealColumn: d, revealMatchLength: f, markdownDocuments: p, worktreeId: m, markdownAnnotationsEnabled: h = !1, conflictDecorationsEnabled: g = !1, readOnly: b = !1, liveTail: x = !1, autoHeight: w = !1 }) {
	let T = (0, import_react.useRef)(null), E = (0, import_react.useRef)(null), [D, O] = (0, import_react.useState)(null), [je, A] = (0, import_react.useState)(null), j = (0, import_react.useRef)(o);
	j.current = o;
	let M = (0, import_react.useRef)(null), { setupCopy: N, toastNode: P } = useContextualCopySetup(), F = (0, import_react.useRef)(null), I = (0, import_react.useRef)({
		relativePath: i,
		language: o,
		onSave: l,
		onContentChange: s
	});
	I.current = {
		relativePath: i,
		language: o,
		onSave: l,
		onContentChange: s
	};
	let L = (0, import_react.useRef)(b);
	L.current = b;
	let R = (0, import_react.useRef)("undoable");
	R.current = b && x ? "read-only-live-tail" : "undoable";
	let z = useAppStore((e) => e.settings), B = useAppStore((e) => e.editorFontZoomLevel), V = useAppStore((e) => e.setPendingEditorReveal), Ne = useAppStore((e) => e.setEditorCursorLine), H = computeEditorFontSize(z?.terminalFontSize ?? 13, B), U = resolveEditorFontFamily(z), W = z?.editorWordWrap, G = (0, import_react.useMemo)(() => w ? getMonacoAutoHeightForContent(a, Math.ceil(H * 1.45)) : null, [
		w,
		a,
		H
	]), K = w ? je ?? G ?? 80 : null, J = Math.ceil(H * 1.45), Y = w && isMonacoAutoHeightCapped(K, J), X = (0, import_react.useRef)(a);
	X.current = a;
	let [Pe, Z] = (0, import_react.useState)(!1), [Fe, Ie] = (0, import_react.useState)({
		x: 0,
		y: 0
	}), [Le, Re] = (0, import_react.useState)(1), ze = z?.theme === "dark" || z?.theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches, { queueReveal: Q, cancelScheduledReveal: Be, clearTransientRevealHighlight: Ve } = useMonacoRevealScheduler(), He = useMonacoContentSyncBridge({
		editorRef: T,
		content: a,
		contentRef: X,
		contentSyncModeRef: R,
		filePath: t,
		onContentChange: s
	}), $ = useMonacoMarkdownAnnotations({
		mountedEditor: D,
		editorContainerRef: E,
		relativePath: i,
		content: a,
		language: o,
		worktreeId: m,
		markdownAnnotationsEnabled: h
	});
	(0, import_react.useLayoutEffect)(() => () => {
		F.current !== null && (clearTimeout(F.current), F.current = null), snapshotMonacoViewState(T, n), Be(), Ve(), M.current?.(), M.current = null;
	}, [
		Be,
		Ve,
		n
	]), (0, import_react.useEffect)(() => {
		T.current && T.current.updateOptions({
			fontSize: H,
			fontFamily: U,
			...buildFileEditorWordWrapOptions(W),
			readOnly: b
		});
	}, [
		U,
		H,
		W,
		b
	]);
	let Ue = useMonacoEditorMount({
		fileId: e,
		filePath: t,
		viewStateKey: n,
		viewStateId: r,
		worktreeId: m,
		autoHeight: w,
		autoHeightLineHeight: J,
		editorRef: T,
		editorContainerRef: E,
		languageRef: j,
		propsRef: I,
		readOnlyRef: L,
		scrollThrottleTimerRef: F,
		unregisterFileSearchSelectionRef: M,
		setMountedEditor: O,
		setAutoHeightContentHeight: A,
		setEditorCursorLine: Ne,
		setupCopy: N,
		queueReveal: Q,
		contentSync: He,
		decorations: useMonacoEditorDecorations({
			editorRef: T,
			mountedEditor: D,
			content: a,
			language: o,
			markdownDocuments: p,
			conflictDecorationsEnabled: g
		}),
		annotations: $,
		gutterMenu: {
			setGutterMenuOpen: Z,
			setGutterMenuPoint: Ie,
			setGutterMenuLine: Re
		}
	});
	return (0, import_react.useEffect)(() => {
		!u || !T.current || Q(T.current, u, d ?? 1, f ?? 0, () => {
			V(null);
		});
	}, [
		Q,
		u,
		d,
		f,
		V
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: E,
		className: w ? "relative" : "relative h-full",
		style: K === null ? void 0 : { height: K },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonacoMarkdownAnnotationOverlay, {
				shouldShowMarkdownAnnotations: $.shouldShowMarkdownAnnotations,
				commentPopover: $.commentPopover,
				setCommentPopover: $.setCommentPopover,
				selectionAnnotationTarget: $.selectionAnnotationTarget,
				setSelectionAnnotationTarget: $.setSelectionAnnotationTarget,
				onSubmitMarkdownComment: $.handleSubmitMarkdownComment
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ft, {
				height: K === null ? "100%" : `${K}px`,
				language: o,
				defaultValue: a,
				theme: ze ? "vs-dark" : "vs",
				onChange: He.handleChange,
				onMount: Ue,
				options: {
					maxTokenizationLineLength: MAX_TOKENIZATION_LINE_LENGTH,
					minimap: { enabled: z?.editorMinimapEnabled ?? !1 },
					scrollBeyondLastLine: !1,
					...buildFileEditorWordWrapOptions(W),
					fontSize: H,
					fontFamily: U,
					lineNumbers: "on",
					renderLineHighlight: "line",
					automaticLayout: !0,
					tabSize: 2,
					readOnly: b,
					scrollbar: w ? {
						vertical: Y ? "auto" : "hidden",
						handleMouseWheel: Y
					} : void 0,
					smoothScrolling: !0,
					cursorSmoothCaretAnimation: "off",
					padding: { top: 0 },
					find: monacoFindOptions,
					selectionClipboard: z?.primarySelectionMiddleClickPaste ?? isLinuxUserAgent()
				},
				path: t,
				saveViewState: !1,
				keepCurrentModel: !0
			}),
			P,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonacoGutterContextMenu, {
				open: Pe,
				onOpenChange: Z,
				point: Fe,
				line: Le,
				filePath: t,
				relativePath: i
			})
		]
	});
}
export { MonacoEditor as default };
