import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
function buildDiffEditorLineNumberOptions(e) {
	return {
		original: e ? "on" : "off",
		modified: "on"
	};
}
function applyDiffEditorLineNumberOptions(e, m) {
	let h = buildDiffEditorLineNumberOptions(m), g = e.getOriginalEditor(), v = e.getModifiedEditor(), y = () => {
		g.getRawOptions().lineNumbers !== h.original && g.updateOptions({ lineNumbers: h.original }), v.getRawOptions().lineNumbers !== h.modified && v.updateOptions({ lineNumbers: h.modified });
	};
	y();
	let b = g.onDidChangeConfiguration(y), x = v.onDidChangeConfiguration(y);
	return { dispose: () => {
		b.dispose(), x.dispose();
	} };
}
var DIFF_EDITOR_SCROLLBAR_SIZE = 20;
const diffEditorScrollbarOptions = {
	verticalScrollbarSize: DIFF_EDITOR_SCROLLBAR_SIZE,
	horizontalScrollbarSize: DIFF_EDITOR_SCROLLBAR_SIZE,
	verticalSliderSize: DIFF_EDITOR_SCROLLBAR_SIZE,
	horizontalSliderSize: DIFF_EDITOR_SCROLLBAR_SIZE
}, combinedDiffSectionScrollbarOptions = {
	...diffEditorScrollbarOptions,
	vertical: "hidden",
	handleMouseWheel: !1
};
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), numberFormatter = new Intl.NumberFormat();
function formatCount(e) {
	return numberFormatter.format(e);
}
function formatLineCount(e, h) {
	if (!e.lineCounts) return translate("auto.components.editor.LargeDiffFallback.7944ed9fb8", "Not counted");
	let g = e.lineCountsAreMinimum?.[h] ? "+" : "";
	return `${formatCount(e.lineCounts[h])}${g}`;
}
function LargeDiffFallback({ filePath: e, renderLimit: g, action: _ }) {
	let v = g.reason === "line-count" ? translate("auto.components.editor.LargeDiffFallback.a3c74f8a21", "line count exceeds the safe display limit") : translate("auto.components.editor.LargeDiffFallback.fd92fbde46", "character count exceeds the safe display limit");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"data-testid": "large-diff-fallback",
		className: "flex h-full min-h-[120px] items-center justify-center border border-border bg-muted/10 px-4 py-6 text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xl space-y-3 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm font-medium text-foreground",
					children: translate("auto.components.editor.LargeDiffFallback.7d424bb761", "This diff is too large to display safely.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "break-all text-xs",
					children: e
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1 text-xs sm:grid-cols-2 sm:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							translate("auto.components.editor.LargeDiffFallback.28aa2cc90b", "Original lines"),
							":",
							" ",
							formatLineCount(g, "original")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							translate("auto.components.editor.LargeDiffFallback.20857938dd", "Modified lines"),
							":",
							" ",
							formatLineCount(g, "modified")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							translate("auto.components.editor.LargeDiffFallback.e5f0d2182e", "Characters"),
							":",
							" ",
							formatCount(g.characterCount)
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							translate("auto.components.editor.LargeDiffFallback.877c25a02f", "Reason"),
							": ",
							v
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[11px]",
					children: [
						translate("auto.components.editor.LargeDiffFallback.5fca073b72", "Limits"),
						":",
						" ",
						formatCount(g.limits.maxLinesPerSide),
						" ",
						translate("auto.components.editor.LargeDiffFallback.f1d136a163", "lines per side"),
						" ·",
						" ",
						formatCount(g.limits.maxCombinedCharacters),
						" ",
						translate("auto.components.editor.LargeDiffFallback.23433fcdea", "combined characters")
					]
				}),
				_ ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [_.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px]",
						children: _.description
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "secondary",
						size: "xs",
						onClick: (e) => {
							e.stopPropagation(), _.onClick();
						},
						children: _.label
					})]
				}) : null
			]
		})
	});
}
const MAX_RENDERED_DIFF_LINES_PER_SIDE = 12e4, MAX_RENDERED_DIFF_COMBINED_CHARACTERS = 6e6;
function countLinesEmptyAsZeroUpToLimit(e, m) {
	if (e.length === 0) return {
		count: 0,
		exceeded: !1
	};
	let h = 1;
	for (let g = 0; g < e.length; g += 1) if (e.charCodeAt(g) === 10 && (h += 1, h > m)) return {
		count: h,
		exceeded: !0
	};
	return {
		count: h,
		exceeded: !1
	};
}
function countLinesLikeSplit(e) {
	let m = 1;
	for (let h = 0; h < e.length; h += 1) e.charCodeAt(h) === 10 && (m += 1);
	return m;
}
function getLargeDiffRenderLimitFromCounts({ originalLineCount: e, modifiedLineCount: m, originalCharacterCount: h, modifiedCharacterCount: g }) {
	let _ = {
		original: e,
		modified: m
	}, v = h + g, y = {
		maxLinesPerSide: MAX_RENDERED_DIFF_LINES_PER_SIDE,
		maxCombinedCharacters: MAX_RENDERED_DIFF_COMBINED_CHARACTERS
	};
	return _.original > 12e4 || _.modified > 12e4 ? {
		limited: !0,
		reason: "line-count",
		lineCounts: _,
		characterCount: v,
		limits: y
	} : v > 6e6 ? {
		limited: !0,
		reason: "character-count",
		lineCounts: _,
		characterCount: v,
		limits: y
	} : {
		limited: !1,
		lineCounts: _,
		characterCount: v
	};
}
function getLargeDiffRenderLimit({ originalContent: e, modifiedContent: m }) {
	let h = e.length + m.length, g = {
		maxLinesPerSide: MAX_RENDERED_DIFF_LINES_PER_SIDE,
		maxCombinedCharacters: MAX_RENDERED_DIFF_COMBINED_CHARACTERS
	};
	if (h > 6e6) return {
		limited: !0,
		reason: "character-count",
		lineCounts: null,
		characterCount: h,
		limits: g
	};
	let _ = countLinesEmptyAsZeroUpToLimit(e, MAX_RENDERED_DIFF_LINES_PER_SIDE), v = countLinesEmptyAsZeroUpToLimit(m, MAX_RENDERED_DIFF_LINES_PER_SIDE);
	return _.exceeded || v.exceeded ? {
		limited: !0,
		reason: "line-count",
		lineCounts: {
			original: _.count,
			modified: v.count
		},
		lineCountsAreMinimum: {
			original: _.exceeded,
			modified: v.exceeded
		},
		characterCount: h,
		limits: g
	} : {
		limited: !1,
		lineCounts: {
			original: _.count,
			modified: v.count
		},
		characterCount: h
	};
}
function buildDiffEditorWhitespaceOptions(e) {
	return { ignoreTrimWhitespace: e !== !0 };
}
function buildDiffEditorWordWrapOptions(e) {
	return { wordWrap: e === !0 ? "on" : "off" };
}
export { countLinesLikeSplit as a, LargeDiffFallback as c, applyDiffEditorLineNumberOptions as d, MAX_RENDERED_DIFF_LINES_PER_SIDE as i, combinedDiffSectionScrollbarOptions as l, buildDiffEditorWhitespaceOptions as n, getLargeDiffRenderLimit as o, MAX_RENDERED_DIFF_COMBINED_CHARACTERS as r, getLargeDiffRenderLimitFromCounts as s, buildDiffEditorWordWrapOptions as t, diffEditorScrollbarOptions as u };
