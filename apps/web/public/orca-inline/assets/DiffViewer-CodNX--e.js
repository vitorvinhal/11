import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./client-KaZE_emc.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import "./useMountedRef-De7bTfqf.js";
import "./AgentQuestionIcon-DjFsmxm7.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { r as isDiffComment } from "./diff-comment-compat-OnNoNTL8.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import "./dropdown-menu-DRu_J4_e.js";
import "./tooltip-BWXjmmf0.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./keybindings-1v53ESY9.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { f as Uri, p as editor } from "./editor.api2-B26FOp3A.js";
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
import "./connection-context-2sxF2wah.js";
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
import { i as resolveEditorFontFamily, t as computeDiffEditorFontSize } from "./editor-font-zoom-7waunKWS.js";
import "./primary-selection-WP9lhEQ-.js";
import "./ReviewNotesSendMenuContent-BXrHTRy4.js";
import "./launch-agent-in-new-tab-DNniBJOv.js";
import "./active-agent-note-send-B2n60SEm.js";
import { i as we } from "./monaco-setup-By9TegQE.js";
import { a as installMonacoEditorFindShortcut, r as installEditorSaveShortcut } from "./editor-shortcuts-B2Tpd-Q8.js";
import { t as editor_main_exports } from "./editor.main-DYdOLWJc.js";
import { t as monacoFindOptions } from "./monaco-find-options-ew4ftt5y.js";
import { a as setWithLRU, t as diffViewStateCache } from "./scroll-cache-uGotjuVq.js";
import { t as useContextualCopySetup } from "./useContextualCopySetup-B-cCNm-a.js";
import { t as selectWorktreeDiffComments } from "./worktree-diff-comments-selector-DTAjSWIf.js";
import { n as getDiffCommentPopoverLeft, r as getDiffCommentPopoverTop, t as DiffCommentPopover } from "./DiffCommentPopover-BAlGhDzG.js";
import { t as useDiffCommentDecorator } from "./useDiffCommentDecorator-Dijhv8AL.js";
import "./DiffCommentCard-DQztuCo3.js";
import "./NotesSendMenu-CbK3gK3-.js";
import "./comment-body-submit-state-DspNAZ7B.js";
import { c as LargeDiffFallback, d as applyDiffEditorLineNumberOptions, n as buildDiffEditorWhitespaceOptions, o as getLargeDiffRenderLimit, t as buildDiffEditorWordWrapOptions, u as diffEditorScrollbarOptions } from "./diff-editor-word-wrap-options-CSCoMRyO.js";
import { a as getDiffViewerMonacoModelPaths, n as disposeUnattachedMonacoModelPaths, t as disposeUnattachedDiffViewerMonacoModels } from "./diff-monaco-model-disposal-BvSgPgEt.js";
import { n as useDiffEditorRegistration } from "./diff-navigation-context-C7py05FC.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function useDiffViewerLargeDiffLifecycle({ limited: e, modelKey: t, originalModelKey: n, modifiedModelKey: r, diffEditorRef: i, onEnterFallback: a }) {
	let [s, xe] = (0, import_react.useState)(0), c = s === 0 ? "" : `:large-diff-generation:${s}`, l = (0, import_react.useMemo)(() => getDiffViewerMonacoModelPaths({
		modelKey: t,
		originalModelKey: n,
		modifiedModelKey: r,
		generationSuffix: c
	}), [
		t,
		n,
		r,
		c
	]), u = (0, import_react.useRef)(l);
	u.current = l;
	let f = (0, import_react.useRef)(l);
	return (0, import_react.useEffect)(() => {
		let e = f.current;
		f.current = l;
		let t = [e.originalModelPath === l.originalModelPath ? null : e.originalModelPath, e.modifiedModelPath === l.modifiedModelPath ? null : e.modifiedModelPath].filter((e) => e !== null);
		if (t.length === 0) return;
		let n = i.current;
		if (n) {
			let e = editor.getModel(Uri.parse(l.originalModelPath)), t = editor.getModel(Uri.parse(l.modifiedModelPath));
			if (!e || !t) return;
			let r = n.getModel();
			(r?.original !== e || r.modified !== t) && n.setModel({
				original: e,
				modified: t
			});
		}
		disposeUnattachedMonacoModelPaths(editor_main_exports, t);
	}, [l, i]), (0, import_react.useEffect)(() => {
		if (!e) return;
		let t = u.current;
		xe((e) => e + 1), a();
		let n = window.setTimeout(() => {
			disposeUnattachedDiffViewerMonacoModels(editor_main_exports, t);
		}, 0);
		return () => window.clearTimeout(n);
	}, [e, a]), l;
}
function getDiffViewerLargeDiffSaveAction({ editable: e, modifiedContent: t, onSave: r, saveContentAvailable: i = !0 }) {
	if (!(!e || !r || !i)) return {
		label: translate("auto.components.editor.DiffViewer.b5675b0694", "Save"),
		description: translate("auto.components.editor.DiffViewer.593f2193f6", "This draft crossed the safe display limit, but it can still be saved."),
		onClick: () => r(t)
	};
}
function preserveDiffViewStateAcrossModelSwaps(e) {
	let t = null, n = null, r = () => {
		t ??= e.saveViewState();
	}, i = () => {
		t && (n !== null && cancelAnimationFrame(n), n = requestAnimationFrame(() => {
			n = null;
			let r = t;
			t = null, r && e.getModel() && e.restoreViewState(r);
		}));
	}, a = e.getOriginalEditor(), o = e.getModifiedEditor(), be = [
		a.onWillChangeModel(r),
		a.onDidChangeModel(i),
		o.onWillChangeModel(r),
		o.onDidChangeModel(i)
	];
	return { dispose: () => {
		for (let e of be) e.dispose();
		n !== null && cancelAnimationFrame(n), n = null, t = null;
	} };
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function DiffViewer({ modelKey: e, originalModelKey: t, modifiedModelKey: n, originalContent: a, modifiedContent: o, language: d, filePath: p, relativePath: m, sideBySide: h, editable: g, worktreeId: _, onAddLineComment: v, commentableLineNumbers: Se, addLineCommentLabel: y, addLineCommentPlaceholder: Ce, onContentChange: b, onSave: x, largeDiffRenderLimit: S, largeDiffSaveContentAvailable: Te }) {
	let C = useAppStore((e) => e.settings), w = useAppStore((e) => e.editorFontZoomLevel), T = useAppStore((e) => e.addDiffComment), E = useAppStore((e) => e.deleteDiffComment), D = useAppStore((e) => e.updateDiffComment), O = useAppStore((e) => e.scrollToDiffCommentId), k = useAppStore((e) => e.setScrollToDiffCommentId), A = useAppStore((e) => selectWorktreeDiffComments(e, _)), j = (0, import_react.useMemo)(() => (A ?? []).filter((e) => e.filePath === m && isDiffComment(e)), [A, m]), M = computeDiffEditorFontSize(C?.terminalFontSize ?? 13, w), N = C?.theme === "dark" || C?.theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches, P = (0, import_react.useRef)(null), { registerDiffEditor: F, unregisterDiffEditor: I } = useDiffEditorRegistration(), L = (0, import_react.useRef)(null), R = (0, import_react.useRef)(null), [z, B] = (0, import_react.useState)(null), [V, H] = (0, import_react.useState)(null), U = (0, import_react.useMemo)(() => S ?? getLargeDiffRenderLimit({
		originalContent: a,
		modifiedContent: o
	}), [
		S,
		a,
		o
	]), W = !!(_ || v), G = (0, import_react.useMemo)(() => !_ || !O ? null : j.some((e) => e.id === O) ? O : null, [
		O,
		j,
		_
	]);
	useDiffCommentDecorator({
		editor: W ? z : null,
		monacoModelIdentity: n ?? e,
		filePath: m,
		worktreeId: _ ?? "",
		comments: _ ? j : [],
		commentableLineNumbers: Se,
		addButtonLabel: y,
		pendingCommentTarget: V,
		addNoteShortcutEnabled: W,
		onAddCommentClick: ({ lineNumber: e, startLine: t, top: n }) => H({
			lineNumber: e,
			startLine: t,
			top: n,
			left: z ? getDiffCommentPopoverLeft(z, L.current) ?? void 0 : void 0,
			lineHeight: z?.getOption(editor.EditorOption.lineHeight) ?? 0
		}),
		onDeleteComment: (e) => {
			_ && E(_, e);
		},
		onUpdateComment: _ ? (e, t) => D(_, e, t) : void 0,
		pendingScrollCommentId: G,
		onPendingScrollConsumed: () => k(null)
	}), (0, import_react.useEffect)(() => {
		if (!z || !V) return;
		let e = () => {
			let e = z.getOption(editor.EditorOption.lineHeight), t = getDiffCommentPopoverTop(z, V.lineNumber, e);
			if (t == null) {
				H(null);
				return;
			}
			let n = getDiffCommentPopoverLeft(z, L.current);
			H((r) => r && {
				...r,
				top: t,
				left: n ?? r.left,
				lineHeight: e
			});
		}, t = z.onDidScrollChange(e), n = z.onDidContentSizeChange(e), r = z.onDidLayoutChange(e);
		return () => {
			t.dispose(), n.dispose(), r.dispose();
		};
	}, [z, V?.lineNumber]);
	let K = (0, import_react.useRef)(!1), q = (0, import_react.useRef)(e);
	(0, import_react.useEffect)(() => {
		q.current !== e && (q.current = e, K.current = !1);
		let t = P.current;
		if (!t || !z || K.current || diffViewStateCache.get(e)) return;
		if (G) {
			K.current = !0;
			return;
		}
		let n = null, r = () => {
			if (K.current) return;
			let e = t.getLineChanges();
			if (!e || e.length === 0) return;
			let r = Math.max(1, e[0].modifiedStartLineNumber);
			n !== null && cancelAnimationFrame(n), n = requestAnimationFrame(() => {
				if (n = null, K.current || !z.getModel()) return;
				let e = z.getTopForLineNumber(r, !0), t = z.getLayoutInfo().height;
				z.setPosition({
					lineNumber: r,
					column: 1
				}), z.setScrollTop(Math.max(0, e - t / 2)), K.current = !0;
			});
		};
		t.getLineChanges() && r();
		let i = t.onDidUpdateDiff(() => r());
		return () => {
			i.dispose(), n !== null && cancelAnimationFrame(n);
		};
	}, [
		z,
		e,
		G
	]);
	let Ee = (0, import_react.useCallback)(() => {
		R.current?.dispose(), R.current = null;
		let e = P.current;
		P.current = null, e && I(e), B(null), H(null);
	}, [I]), De = async (e) => {
		if (V) {
			if (v) {
				await v({
					lineNumber: V.lineNumber,
					startLine: V.startLine,
					body: e
				}) && H(null);
				return;
			}
			_ && (await T({
				worktreeId: _,
				filePath: m,
				source: "diff",
				startLine: V.startLine,
				lineNumber: V.lineNumber,
				body: e,
				side: "modified"
			}) ? H(null) : console.error("Failed to add diff comment — draft preserved"));
		}
	}, J = (0, import_react.useRef)(x);
	J.current = x;
	let Y = (0, import_react.useRef)(b);
	Y.current = b;
	let { setupCopy: X, toastNode: Oe } = useContextualCopySetup(), Z = (0, import_react.useRef)({
		relativePath: m,
		language: d,
		onSave: x
	});
	Z.current = {
		relativePath: m,
		language: d,
		onSave: x
	};
	let Q = useDiffViewerLargeDiffLifecycle({
		limited: U.limited,
		modelKey: e,
		originalModelKey: t,
		modifiedModelKey: n,
		diffEditorRef: P,
		onEnterFallback: Ee
	}), $ = (0, import_react.useCallback)((t, n) => {
		P.current = t, F(t), R.current?.dispose(), R.current = applyDiffEditorLineNumberOptions(t, h);
		let r = t.getOriginalEditor(), i = t.getModifiedEditor();
		t.onDidDispose(preserveDiffViewStateAcrossModelSwaps(t).dispose), X(r, n, p, Z), X(i, n, p, Z), B(i);
		let a = diffViewStateCache.get(e);
		if (a && requestAnimationFrame(() => t.restoreViewState(a)), g) {
			let e = installEditorSaveShortcut(i.getContainerDomNode(), () => {
				J.current?.(i.getValue());
			}), t = installMonacoEditorFindShortcut(r), n = installMonacoEditorFindShortcut(i), a = i.onDidChangeModelContent(() => {
				Y.current?.(i.getValue());
			});
			i.onDidDispose(() => {
				e(), t(), n(), a.dispose();
			}), i.focus();
		} else t.focus();
		t.onDidDispose(() => {
			R.current?.dispose(), R.current = null, P.current = null, I(t), B(null), H(null);
		});
	}, [
		g,
		X,
		e,
		p,
		h,
		F,
		I
	]);
	return (0, import_react.useLayoutEffect)(() => () => {
		let t = P.current;
		if (t) {
			let n = t.saveViewState();
			n && setWithLRU(diffViewStateCache, e, n);
		}
	}, [e]), (0, import_react.useEffect)(() => {
		let e = P.current;
		if (e) return R.current?.dispose(), R.current = applyDiffEditorLineNumberOptions(e, h), () => {
			R.current?.dispose(), R.current = null;
		};
	}, [h]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col flex-1 min-h-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: L,
			className: "flex-1 min-h-0 relative",
			children: [V && W && !U.limited && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiffCommentPopover, {
				lineNumber: V.lineNumber,
				startLine: V.startLine,
				top: V.top,
				left: V.left,
				lineHeight: V.lineHeight,
				placeholder: Ce,
				submitLabel: y,
				submittingLabel: "Posting…",
				onCancel: () => H(null),
				onSubmit: De
			}, `${V.startLine ?? V.lineNumber}:${V.lineNumber}`), U.limited ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LargeDiffFallback, {
				filePath: m,
				renderLimit: U,
				action: getDiffViewerLargeDiffSaveAction({
					editable: g,
					modifiedContent: o,
					onSave: x,
					saveContentAvailable: Te
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(we, {
				height: "100%",
				language: d,
				original: a,
				modified: o,
				theme: N ? "vs-dark" : "vs",
				onMount: $,
				originalModelPath: Q.originalModelPath,
				modifiedModelPath: Q.modifiedModelPath,
				keepCurrentOriginalModel: !0,
				keepCurrentModifiedModel: !0,
				options: {
					readOnly: !g,
					originalEditable: !1,
					renderSideBySide: h,
					minimap: { enabled: !1 },
					scrollBeyondLastLine: !1,
					fontSize: M,
					fontFamily: resolveEditorFontFamily(C),
					lineNumbers: "on",
					...buildDiffEditorWordWrapOptions(C?.diffWordWrap),
					...buildDiffEditorWhitespaceOptions(C?.diffShowWhitespace),
					automaticLayout: !0,
					renderOverviewRuler: !0,
					scrollbar: diffEditorScrollbarOptions,
					padding: { top: 0 },
					find: monacoFindOptions
				}
			})]
		}), Oe]
	});
}
export { DiffViewer as default };
