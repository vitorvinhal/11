import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { p as editor } from "./editor.api2-B26FOp3A.js";
import { i as formatShortcutLabel } from "./useShortcutLabel-B283mfzm.js";
import { i as isPrimarySelectionEnabled, s as setPrimarySelectionText, t as PRIMARY_SELECTION_MAX_LENGTH } from "./primary-selection-WP9lhEQ-.js";
import { t as editorShortcutMatches } from "./editor-shortcuts-B2Tpd-Q8.js";
function formatCopiedSelectionWithContext({ relativePath: e, language: n, selection: r, selectedText: i }) {
	let { startLine: a, endLine: o } = getContextualCopyLineRange(r);
	if (r.startLineNumber === r.endLineNumber || o < a) return null;
	let s = getCodeFenceLanguage(n), c = i.endsWith("\n") ? i : `${i}\n`;
	return `File: ${e}\n${a === o ? `Line: ${a}` : `Lines: ${a}-${o}`}\n\n\`\`\`${s}\n${c}\`\`\``;
}
function getContextualCopyLineRange(e) {
	return {
		startLine: e.startLineNumber,
		endLine: getInclusiveEndLine(e)
	};
}
function getInclusiveEndLine(e) {
	return e.startLineNumber === e.endLineNumber ? e.endLineNumber : e.endColumn === 1 ? e.endLineNumber - 1 : e.endLineNumber;
}
function getCodeFenceLanguage(e) {
	switch (e) {
		case "plaintext": return "";
		case "typescript": return "ts";
		case "javascript": return "js";
		default: return e;
	}
}
function setupContextualCopy({ editorInstance: e, filePath: n, setCopyToast: r, propsRef: a, copyToastTimeoutRef: u }) {
	let p = null, m = null, h = null, g = null, _ = document.createElement("div");
	_.className = "pointer-events-none rounded-md border border-border/90 bg-background px-2.5 py-1 text-xs font-medium text-foreground shadow-[0_6px_18px_rgba(15,23,42,0.18)] backdrop-blur whitespace-nowrap";
	let v = () => {
		_.textContent = `Copy context ${formatShortcutLabel("editor.copyContext", useAppStore.getState().keybindings)}`;
	};
	v(), _.style.display = "none";
	let y = {
		allowEditorOverflow: !0,
		suppressMouseDown: !0,
		getId: () => `orca.copy-context-hint.${n}`,
		getDomNode: () => _,
		getPosition: () => h
	};
	e.addContentWidget(y);
	let b = () => {
		let n = e.getSelection();
		if (!n) return;
		let i = e.getScrolledVisiblePosition(n.getEndPosition()), a = e.getContainerDomNode().getBoundingClientRect();
		r({
			left: a.left + (i?.left ?? a.width - 120),
			top: a.top + (i?.top ?? 16) + (i?.height ?? 20) + 8
		}), u.current !== null && window.clearTimeout(u.current), u.current = window.setTimeout(() => {
			r(null), u.current = null;
		}, 1200);
	}, x = () => {
		let n = e.getSelection();
		return n ? [
			n.startLineNumber,
			n.startColumn,
			n.endLineNumber,
			n.endColumn
		].join(":") : null;
	}, S = () => {
		if (v(), !D()) {
			_.style.display = "none", h = null, e.layoutContentWidget(y);
			return;
		}
		if (g !== null && g === x()) {
			_.style.display = "none", h = null, e.layoutContentWidget(y);
			return;
		}
		let n = e.getModel(), r = e.getSelection();
		if (!n || !r) {
			_.style.display = "none", h = null, e.layoutContentWidget(y);
			return;
		}
		let { startLine: i, endLine: a } = getContextualCopyLineRange(r), s = e.getScrolledVisiblePosition(r.getStartPosition()), c = r.endLineNumber === a ? r.endColumn : n.getLineMaxColumn(a), l = e.getScrolledVisiblePosition({
			lineNumber: a,
			column: c
		});
		if (!s || !l) {
			_.style.display = "none", h = null, e.layoutContentWidget(y);
			return;
		}
		let u = _.offsetHeight || 28, d = e.getLayoutInfo().height, f = s.top, p = l.top + l.height, m = f, b = d - p, S = m >= u + 8 || m >= b, C = S ? i : a, w = S ? n.getLineMaxColumn(i) : r.endLineNumber === a ? r.endColumn : n.getLineMaxColumn(a);
		h = {
			position: {
				lineNumber: C,
				column: w
			},
			secondaryPosition: {
				lineNumber: C,
				column: Math.max(1, w - 1)
			},
			preference: [S ? editor.ContentWidgetPositionPreference.ABOVE : editor.ContentWidgetPositionPreference.BELOW]
		}, _.style.display = "block", e.layoutContentWidget(y);
	}, C = () => _.style.display === "block", w = () => {
		p === null && (p = window.setInterval(() => {
			S(), C() || T();
		}, 150));
	}, T = () => {
		p !== null && (window.clearInterval(p), p = null);
	}, E = () => {
		S(), e.hasTextFocus() && C() ? w() : T();
	}, D = () => {
		let n = e.getModel(), r = e.getSelection();
		return !n || !r || r.isEmpty() ? null : formatCopiedSelectionWithContext({
			relativePath: a.current.relativePath,
			language: a.current.language,
			selection: r,
			selectedText: n.getValueInRange(r)
		});
	}, O = () => {
		let n = e.getModel(), r = e.getSelections();
		if (!isPrimarySelectionEnabled() || !n || !r?.length) return;
		let i = r.slice().sort((e, n) => e.startLineNumber === n.startLineNumber ? e.startColumn - n.startColumn : e.startLineNumber - n.startLineNumber), a = 0;
		for (let e of i) if (e.isEmpty() || (a += n.getValueLengthInRange(e), a > 65536)) return;
		setPrimarySelectionText(i.map((e) => n.getValueInRange(e)).join(n.getEOL()));
	}, k = () => {
		m !== null && window.clearTimeout(m), m = window.setTimeout(() => {
			m = null, O();
		}, 100);
	}, A = async () => {
		let n = D();
		return n ? (await window.api.ui.writeClipboardText(n), g = x(), _.style.display = "none", h = null, e.layoutContentWidget(y), b(), !0) : !1;
	}, j = e.onDidChangeCursorSelection((e) => {
		e.source !== "restoreState" && k(), x() !== g && (g = null), E();
	}), M = e.onDidScrollChange(() => {
		E();
	}), N = e.onDidFocusEditorText(() => {
		E();
	}), P = e.onDidBlurEditorText(() => {
		T(), _.style.display = "none", h = null, e.layoutContentWidget(y);
	}), F = e.getContainerDomNode(), I = (e) => {
		editorShortcutMatches("editor.copyContext", e) && (e.preventDefault(), e.stopPropagation(), A());
	};
	F.addEventListener("keydown", I, !0), F.addEventListener("mouseup", E, !0), F.addEventListener("keyup", E, !0), e.onDidDispose(() => {
		j.dispose(), M.dispose(), N.dispose(), P.dispose(), u.current !== null && (window.clearTimeout(u.current), u.current = null, r(null)), m !== null && (window.clearTimeout(m), m = null), F.removeEventListener("keydown", I, !0), F.removeEventListener("mouseup", E, !0), F.removeEventListener("keyup", E, !0), T(), e.removeContentWidget(y);
	}), e.hasTextFocus() ? E() : S();
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function useContextualCopySetup() {
	let [e, n] = (0, import_react.useState)(null), i = (0, import_react.useRef)(null);
	return {
		setupCopy: (0, import_react.useCallback)((e, r, a, o) => {
			setupContextualCopy({
				editorInstance: e,
				filePath: a,
				setCopyToast: n,
				propsRef: o,
				copyToastTimeoutRef: i
			});
		}, []),
		toastNode: e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none fixed z-50 rounded-md bg-foreground px-2 py-1 text-xs text-background shadow-sm",
			style: {
				left: e.left,
				top: e.top
			},
			children: translate("auto.components.editor.useContextualCopySetup.059bfb0d94", "Context copied")
		}) : null
	};
}
export { useContextualCopySetup as t };
