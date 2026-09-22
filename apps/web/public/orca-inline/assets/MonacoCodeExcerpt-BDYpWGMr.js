import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { h as languages, p as editor } from "./editor.api2-B26FOp3A.js";
import { i as resolveEditorFontFamily, n as computeEditorFontSize } from "./editor-font-zoom-7waunKWS.js";
import { n as resolveDocumentTheme } from "./document-theme-DdhfDy7F.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), pythonLanguageRegistrationPromise = null;
async function ensureColorizationLanguage(e) {
	e === "python" && (pythonLanguageRegistrationPromise ??= import("./python-BdhGN3_o.js").then(({ conf: e, language: a }) => {
		languages.getLanguages().some((e) => e.id === "python") || languages.register({
			id: "python",
			extensions: [".py", ".pyw"],
			aliases: ["Python", "py"]
		}), languages.setLanguageConfiguration("python", e), languages.setMonarchTokensProvider("python", a);
	}), await pythonLanguageRegistrationPromise);
}
function MonacoCodeExcerpt({ lines: e, firstLineNumber: a, highlightedStartLine: c, highlightedEndLine: l, language: p }) {
	let m = useAppStore((e) => e.settings), h = useAppStore((e) => e.editorFontZoomLevel), g = computeEditorFontSize(m?.terminalFontSize ?? 13, h), _ = resolveEditorFontFamily(m), v = resolveDocumentTheme(m?.theme ?? "system"), y = (0, import_react.useMemo)(() => e.join("\n"), [e]), [b, x] = (0, import_react.useState)(() => e.map(() => ""));
	return (0, import_react.useEffect)(() => {
		editor.setTheme(v ? "vs-dark" : "vs");
	}, [v]), (0, import_react.useEffect)(() => {
		if (e.length === 0) {
			x([]);
			return;
		}
		let a = !1;
		return ensureColorizationLanguage(p).catch(() => void 0).then(() => editor.colorize(y, p, { tabSize: 2 })).then((o) => {
			a || x(o.split("<br/>").slice(0, e.length));
		}), () => {
			a = !0;
		};
	}, [
		y,
		p,
		e
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto py-1 text-[12px] leading-5",
		style: {
			fontFamily: _,
			fontSize: g
		},
		children: e.map((e, s) => {
			let u = a + s, d = u >= c && u <= l, f = b[s] || (e ? void 0 : "&nbsp;");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex font-mono", d && "bg-emerald-500/10"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-12 shrink-0 select-none border-r border-border/40 px-2 text-right text-muted-foreground tabular-nums",
					children: u
				}), f ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "min-w-max flex-1 whitespace-pre px-3 text-foreground",
					dangerouslySetInnerHTML: { __html: f }
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
					className: "min-w-max flex-1 whitespace-pre px-3 text-foreground",
					children: e || " "
				})]
			}, u);
		})
	});
}
export { MonacoCodeExcerpt as t };
