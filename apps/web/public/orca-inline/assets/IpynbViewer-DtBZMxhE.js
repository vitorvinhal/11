import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as Braces } from "./braces-B7sCb6N8.js";
import { t as CircleAlert } from "./circle-alert-xAjxBVzK.js";
import { t as FileCodeCorner } from "./file-code-corner-CvES4tbS.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as Play } from "./play-C1XOV9rC.js";
import { t as Save } from "./save-BXEyVESo.js";
import { iw as Trash2, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { D as createBrowserUuid } from "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./keybindings-1v53ESY9.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { t as purify } from "./purify.es-Ddnop6vN.js";
import { p as editor } from "./editor.api2-B26FOp3A.js";
import "./workers-CfXxeJ6j.js";
import "./monaco.contribution-DqQ6JUf5.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { t as ShortcutKeyCombo } from "./ShortcutKeyCombo-CaaV52rL.js";
import { t as getConnectionId } from "./connection-context-2sxF2wah.js";
import "./text-control-paste-Bg1FpWOl.js";
import { s as useShortcutKeyDetails } from "./useShortcutLabel-B283mfzm.js";
import { n as registerPendingEditorFlush } from "./editor-pending-flush-BzfHvMgd.js";
import { a as resolveEditorFontFamilyOrInherit, i as resolveEditorFontFamily, n as computeEditorFontSize } from "./editor-font-zoom-7waunKWS.js";
import { n as resolveDocumentTheme } from "./document-theme-DdhfDy7F.js";
import { t as remarkGfm } from "./lib-DEDsinTP.js";
import { r as rehypeRaw, s as Markdown, t as rehypeSanitize } from "./lib-CCrOeqzl.js";
import { r as Ft } from "./monaco-setup-By9TegQE.js";
import { a as installMonacoEditorFindShortcut, r as installEditorSaveShortcut, t as editorShortcutMatches } from "./editor-shortcuts-B2Tpd-Q8.js";
import "./editor.main-DYdOLWJc.js";
import { a as setWithLRU, i as scrollTopCache } from "./scroll-cache-uGotjuVq.js";
import { t as MonacoCodeExcerpt } from "./MonacoCodeExcerpt-BDYpWGMr.js";
var ArrowDownToLine = createLucideIcon("arrow-down-to-line", [
	["path", {
		d: "M12 17V3",
		key: "1cwfxf"
	}],
	["path", {
		d: "m6 11 6 6 6-6",
		key: "12ii2o"
	}],
	["path", {
		d: "M19 21H5",
		key: "150jfl"
	}]
]), ArrowUpToLine = createLucideIcon("arrow-up-to-line", [
	["path", {
		d: "M5 3h14",
		key: "7usisc"
	}],
	["path", {
		d: "m18 13-6-6-6 6",
		key: "1kf1n9"
	}],
	["path", {
		d: "M12 7v14",
		key: "1akyts"
	}]
]), MoveDown = createLucideIcon("move-down", [["path", {
	d: "M8 18L12 22L16 18",
	key: "cskvfv"
}], ["path", {
	d: "M12 2V22",
	key: "r89rzk"
}]]), MoveUp = createLucideIcon("move-up", [["path", {
	d: "M8 6L12 2L16 6",
	key: "1yvkyx"
}], ["path", {
	d: "M12 2V22",
	key: "r89rzk"
}]]), import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function IpynbToolbarButton({ label: e, disabled: _ = !1, shortcut: v, onClick: b, children: x }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "button",
			variant: "ghost",
			size: "icon",
			className: "size-7",
			"aria-label": e,
			disabled: _,
			onClick: b,
			children: x
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e }), v && v.keys.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortcutKeyCombo, {
			keys: v.keys,
			doubleTap: v.doubleTap
		}) : null]
	}) })] });
}
function IpynbCellToolbar({ cell: e, index: _, running: y, canMoveUp: b, canMoveDown: x, onRun: C, onKindChange: D, onInsertAbove: k, onInsertBelow: A, onMoveUp: j, onMoveDown: M, onDelete: N }) {
	let P = e.kind === "code" ? Play : e.kind === "markdown" ? FileCodeCorner : Braces, F = e.kind === "code" ? `In [${e.executionCount ?? " "}]:` : e.kind;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 border-b border-border/50 bg-muted/20 px-3 py-1.5 text-xs text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { className: "size-3.5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono",
				children: F
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				value: e.kind,
				onChange: (e) => D(e.target.value),
				className: "h-7 rounded-md border border-input bg-background px-2 text-xs text-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "code",
						children: translate("auto.components.editor.IpynbViewer.7005960d73", "Code")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "markdown",
						children: translate("auto.components.editor.IpynbViewer.1833dbbc43", "Markdown")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "raw",
						children: translate("auto.components.editor.IpynbViewer.3e4cbf15ea", "Raw")
					})
				]
			}),
			e.kind === "code" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbToolbarButton, {
				label: translate("auto.components.editor.IpynbViewer.859bf9fc21", "Run cell"),
				disabled: y,
				onClick: C,
				children: y ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbToolbarButton, {
				label: translate("auto.components.editor.IpynbViewer.fd8ac707bc", "Move cell up"),
				disabled: !b,
				onClick: j,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveUp, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbToolbarButton, {
				label: translate("auto.components.editor.IpynbViewer.27e064e2db", "Move cell down"),
				disabled: !x,
				onClick: M,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveDown, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbToolbarButton, {
				label: translate("auto.components.editor.IpynbViewer.53b839b8a0", "Insert code cell above"),
				onClick: () => k("code"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpToLine, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbToolbarButton, {
				label: translate("auto.components.editor.IpynbViewer.b4208cad7e", "Insert code cell below"),
				onClick: () => A("code"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbToolbarButton, {
				label: translate("auto.components.editor.IpynbViewer.ffc1ac2699", "Insert markdown cell above"),
				onClick: () => k("markdown"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative size-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCodeCorner, { className: "absolute left-0.5 top-0.5 size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveUp, { className: "absolute -right-0.5 -top-0.5 size-2.5" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbToolbarButton, {
				label: translate("auto.components.editor.IpynbViewer.b42f6a9547", "Insert markdown cell below"),
				onClick: () => A("markdown"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "relative size-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCodeCorner, { className: "absolute left-0.5 top-0.5 size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveDown, { className: "absolute -bottom-0.5 -right-0.5 size-2.5" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbToolbarButton, {
				label: translate("auto.components.editor.IpynbViewer.781abd6926", "Delete cell"),
				onClick: N,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "ml-auto font-mono",
				children: ["#", _ + 1]
			})
		]
	});
}
var IPYNB_CODE_CELL_EDITOR_MIN_HEIGHT_PX = 96, IPYNB_CODE_CELL_EDITOR_MAX_HEIGHT_PX = 520, LINE_FEED_CODE_UNIT = 10, CARRIAGE_RETURN_CODE_UNIT = 13;
function getIpynbCodeCellEditorHeight(e, _) {
	let v = Math.max(1, _ + 8), y = countIpynbCodeCellRowsForHeight(e, Math.ceil(IPYNB_CODE_CELL_EDITOR_MAX_HEIGHT_PX / v));
	return Math.min(IPYNB_CODE_CELL_EDITOR_MAX_HEIGHT_PX, Math.max(IPYNB_CODE_CELL_EDITOR_MIN_HEIGHT_PX, y * v));
}
function getIpynbCodeCellPreviewLines(e) {
	if (e.length === 0) return [""];
	let _ = [], v = Math.min(e.length, 65536), y = 0;
	for (let b = 0; b < v; b += 1) if (e.charCodeAt(b) === LINE_FEED_CODE_UNIT) {
		if (_.push(sliceIpynbCodeCellPreviewLine(e, y, b)), _.length >= 200) return _;
		y = b + 1;
	}
	return y < v && _.push(sliceIpynbCodeCellPreviewLine(e, y, v)), _.length > 0 ? _ : [""];
}
function countIpynbCodeCellRowsForHeight(e, _) {
	if (e.length === 0) return 3;
	let v = Math.min(e.length, 65536), y = 2;
	for (let b = 0; b < v; b += 1) if (e.charCodeAt(b) === LINE_FEED_CODE_UNIT && (y += 1, y >= _)) return y;
	return Math.max(3, y);
}
function sliceIpynbCodeCellPreviewLine(e, _, v) {
	let y = v > _ && e.charCodeAt(v - 1) === CARRIAGE_RETURN_CODE_UNIT ? v - 1 : v;
	return e.slice(_, Math.min(y, _ + 8192));
}
function IpynbMarkdownCell({ source: e }) {
	let _ = useAppStore((e) => e.settings)?.theme ?? "system", [v, y] = (0, import_react.useState)(() => resolveDocumentTheme("system"));
	return (0, import_react.useEffect)(() => {
		if (_ !== "system" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), v = () => y(e.matches);
		return v(), e.addEventListener("change", v), () => e.removeEventListener("change", v);
	}, [_]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("px-4 py-3 text-sm", (_ === "system" ? v : resolveDocumentTheme(_)) ? "markdown-dark" : "markdown-light"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "markdown-body",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, {
				remarkPlugins: [remarkGfm],
				rehypePlugins: [rehypeRaw, rehypeSanitize],
				children: e || "\xA0"
			})
		})
	});
}
function IpynbEditableTextCell({ source: e, onChange: _ }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		value: e,
		onChange: (e) => _(e.target.value),
		className: "block min-h-24 w-full resize-y border-0 bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"
	});
}
function IpynbCodeCellEditor({ cell: e, source: _, active: v, onActivate: y, onDeactivate: b, onChange: x, onSaveRequest: S }) {
	let C = useAppStore((e) => e.settings), w = useAppStore((e) => e.editorFontZoomLevel), T = (0, import_react.useRef)(b), E = (0, import_react.useRef)(S);
	(0, import_react.useLayoutEffect)(() => {
		T.current = b, E.current = S;
	}, [b, S]);
	let D = computeEditorFontSize(C?.terminalFontSize ?? 13, w), O = getIpynbCodeCellEditorHeight(_, D), A = resolveDocumentTheme(C?.theme ?? "system"), j = (0, import_react.useMemo)(() => getIpynbCodeCellPreviewLines(_), [_]), M = (0, import_react.useCallback)((e, _) => {
		e.focus();
		let v = installEditorSaveShortcut(e.getContainerDomNode(), () => {
			E.current();
		}), y = installMonacoEditorFindShortcut(e), b = e.onDidBlurEditorWidget(() => {
			T.current();
		});
		e.onDidDispose(() => {
			v(), y(), b.dispose();
		}), e.addCommand(_.KeyCode.Escape, () => {
			T.current();
		});
	}, []);
	return (0, import_react.useEffect)(() => {
		editor.setTheme(A ? "vs-dark" : "vs");
	}, [A]), v ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-editor-surface focus-within:ring-1 focus-within:ring-ring",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ft, {
			height: O,
			defaultLanguage: e.language,
			language: e.language,
			theme: A ? "vs-dark" : "vs",
			value: _,
			onMount: M,
			onChange: (e) => x(e ?? ""),
			options: {
				automaticLayout: !0,
				fontFamily: resolveEditorFontFamily(C),
				fontSize: D,
				glyphMargin: !1,
				lineNumbersMinChars: 3,
				minimap: { enabled: !1 },
				overviewRulerLanes: 0,
				renderLineHighlight: "none",
				scrollBeyondLastLine: !1,
				wordWrap: "off"
			}
		})
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "button",
		tabIndex: 0,
		className: "block w-full cursor-text bg-editor-surface text-left",
		onClick: y,
		onKeyDown: (e) => {
			e.key === "Enter" && y();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonacoCodeExcerpt, {
			lines: j,
			firstLineNumber: 1,
			highlightedStartLine: -1,
			highlightedEndLine: -1,
			language: e.language
		})
	});
}
const IpynbCodeCell = (0, import_react.memo)(IpynbCodeCellEditor);
function valueToText(e) {
	return Array.isArray(e) ? e.map((e) => String(e ?? "")).join("") : typeof e == "string" ? e : e == null ? "" : typeof e == "object" ? JSON.stringify(e, null, 2) : String(e);
}
function dataUriForImage(e) {
	let _ = valueToText(e.value).replace(/\s/g, "");
	return _ ? e.mime === "image/svg+xml" ? `data:image/svg+xml;charset=utf-8,${encodeURIComponent(valueToText(e.value))}` : `data:${e.mime};base64,${_}` : null;
}
function PreformattedOutput({ text: e, error: _ = !1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: cn("max-h-[420px] overflow-auto whitespace-pre-wrap px-3 py-2 font-mono text-xs leading-5 scrollbar-editor", _ ? "text-destructive" : "text-foreground"),
		children: e
	});
}
function OutputItem({ item: e }) {
	if (e.mime === "text/html") {
		let _ = purify.sanitize(valueToText(e.value), { USE_PROFILES: {
			html: !0,
			svg: !0,
			svgFilters: !0
		} });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			title: translate("auto.components.editor.IpynbViewer.66a3f7d330", "Notebook HTML output"),
			sandbox: "",
			referrerPolicy: "no-referrer",
			loading: "lazy",
			className: "block h-80 w-full border-0 bg-background",
			srcDoc: _
		});
	}
	if (e.mime.startsWith("image/")) {
		let _ = dataUriForImage(e);
		return _ ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex max-w-full overflow-auto p-3 scrollbar-editor",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: _,
				alt: e.mime,
				className: "max-h-[520px] max-w-full object-contain"
			})
		}) : null;
	}
	return e.mime === "application/json" || e.mime.endsWith("+json") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreformattedOutput, { text: typeof e.value == "string" ? e.value : JSON.stringify(e.value ?? null, null, 2) }) : e.mime === "text/markdown" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbMarkdownCell, { source: valueToText(e.value) }) : e.mime.startsWith("text/") || e.mime === "application/javascript" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreformattedOutput, { text: valueToText(e.value) }) : null;
}
function IpynbCellOutputs({ cell: e }) {
	return e.outputs.length === 0 ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-t border-border/50 bg-background",
		children: e.outputs.map((e, _) => {
			if (e.kind === "stream") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreformattedOutput, { text: e.text }, _);
			if (e.kind === "error") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-l-2 border-destructive",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreformattedOutput, {
					error: !0,
					text: [
						e.name,
						e.message,
						e.traceback
					].filter(Boolean).join("\n")
				})
			}, _);
			let v = e.items.map((e, _) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutputItem, { item: e }, `${e.mime}-${_}`)).filter(Boolean);
			return v.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border/40 last:border-b-0",
				children: v
			}, _) : null;
		})
	});
}
var DISPLAY_MIME_ORDER = [
	"text/html",
	"image/png",
	"image/jpeg",
	"image/jpg",
	"image/svg+xml",
	"application/json",
	"text/markdown",
	"text/plain"
], JUPYTER_LANGUAGE_TO_MONACO_LANGUAGE = {
	"c#": "csharp",
	"f#": "fsharp",
	"q#": "qsharp",
	"c++11": "cpp",
	"c++12": "cpp",
	"c++14": "cpp",
	"c++": "cpp"
};
function isRecord(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function concatIpynbMultilineString(e) {
	if (Array.isArray(e)) {
		let _ = "";
		for (let v = 0; v < e.length; v += 1) {
			let y = String(e[v] ?? "");
			_ += v < e.length - 1 && !y.endsWith("\n") ? `${y}\n` : y;
		}
		return _.replace(/\r\n/g, "\n");
	}
	return String(e ?? "").replace(/\r\n/g, "\n");
}
function translateKernelLanguageToMonaco(e) {
	let _ = (e ?? "python").toLowerCase();
	return _.length === 2 && _.endsWith("#") ? `${_.slice(0, 1)}sharp` : JUPYTER_LANGUAGE_TO_MONACO_LANGUAGE[_] ?? _;
}
function getPreferredLanguage(e) {
	let _ = isRecord(e.metadata) ? e.metadata : {}, v = isRecord(_.language_info) ? _.language_info : {}, y = isRecord(_.kernelspec) ? _.kernelspec : {};
	return translateKernelLanguageToMonaco(typeof v.name == "string" ? v.name : typeof y.language == "string" ? y.language : "python");
}
function getKernelName(e) {
	let _ = isRecord(e.metadata) ? e.metadata : {}, v = isRecord(_.kernelspec) ? _.kernelspec : {};
	return typeof v.display_name == "string" ? v.display_name : typeof v.name == "string" ? v.name : null;
}
function getCellLanguage(e, _) {
	let v = isRecord(e.metadata) ? e.metadata : {}, y = isRecord(v.vscode) ? v.vscode : {};
	return typeof y.languageId == "string" ? y.languageId : _;
}
function parseDisplayItems(e) {
	return isRecord(e) ? Object.entries(e).map(([e, _]) => ({
		mime: e,
		value: _
	})).sort((e, _) => {
		let v = DISPLAY_MIME_ORDER.indexOf(e.mime), y = DISPLAY_MIME_ORDER.indexOf(_.mime);
		return (v === -1 ? 100 : v) - (y === -1 ? 100 : y);
	}) : [];
}
function parseOutput(e) {
	return !isRecord(e) || typeof e.output_type != "string" ? null : e.output_type === "stream" ? {
		kind: "stream",
		name: typeof e.name == "string" ? e.name : "stdout",
		text: concatIpynbMultilineString(e.text)
	} : e.output_type === "error" ? {
		kind: "error",
		name: typeof e.ename == "string" ? e.ename : "",
		message: typeof e.evalue == "string" ? e.evalue : "",
		traceback: concatIpynbMultilineString(e.traceback)
	} : {
		kind: "display",
		outputType: e.output_type,
		executionCount: typeof e.execution_count == "number" ? e.execution_count : null,
		items: parseDisplayItems(e.data)
	};
}
function parseCell(e, _) {
	if (!isRecord(e)) return null;
	let v = e.cell_type === "markdown" || e.cell_type === "raw" || e.cell_type === "code" ? e.cell_type : null;
	if (v === null) return null;
	let y = Array.isArray(e.outputs) ? e.outputs.map(parseOutput).filter((e) => e !== null) : [];
	return {
		id: typeof e.id == "string" ? e.id : null,
		kind: v,
		language: v === "code" ? getCellLanguage(e, _) : v,
		source: concatIpynbMultilineString(e.source),
		executionCount: typeof e.execution_count == "number" ? e.execution_count : null,
		outputs: y
	};
}
function parseIpynb(e) {
	let _ = JSON.parse(e);
	if (!isRecord(_)) throw Error("Notebook root must be a JSON object");
	if (!Array.isArray(_.cells)) throw Error("Notebook is missing a cells array");
	let v = getPreferredLanguage(_), y = _.cells.map((e) => parseCell(e, v)).filter((e) => e !== null);
	return {
		language: v,
		kernelName: getKernelName(_),
		nbformat: typeof _.nbformat == "number" ? `${_.nbformat}.${typeof _.nbformat_minor == "number" ? _.nbformat_minor : 0}` : "unknown",
		cells: y
	};
}
function splitIpynbSource(e) {
	if (!e) return [];
	let _ = [], v = 0;
	for (let y = 0; y < e.length; y += 1) e.charCodeAt(y) === 10 && (_.push(e.slice(v, y + 1)), v = y + 1);
	return v < e.length && _.push(e.slice(v)), _;
}
function parseNotebookRoot(e) {
	let _ = JSON.parse(e);
	if (!isRecord(_)) throw Error("Notebook root must be a JSON object");
	if (!Array.isArray(_.cells)) throw Error("Notebook is missing a cells array");
	return _;
}
function ensureCell(e, _) {
	let v = e.cells;
	if (!Array.isArray(v) || !isRecord(v[_])) throw Error("Notebook cell no longer exists");
	return v[_];
}
function serializeNotebook(e) {
	return `${JSON.stringify(e, null, 1)}\n`;
}
function updateIpynbCellSources(e, _) {
	if (_.length === 0) return e;
	let v = parseNotebookRoot(e);
	for (let e of _) ensureCell(v, e.index).source = splitIpynbSource(e.source);
	return serializeNotebook(v);
}
function updateIpynbCellKind(e, _, v, y) {
	let b = parseNotebookRoot(e), x = ensureCell(b, _);
	if (x.cell_type = v, v === "code") {
		x.outputs = Array.isArray(x.outputs) ? x.outputs : [], x.execution_count = typeof x.execution_count == "number" ? x.execution_count : null, x.metadata = isRecord(x.metadata) ? x.metadata : {};
		let e = x.metadata;
		e.vscode = {
			...isRecord(e.vscode) ? e.vscode : {},
			languageId: y
		};
	} else delete x.outputs, delete x.execution_count;
	return serializeNotebook(b);
}
function insertIpynbCell(e, _, v, y) {
	let b = parseNotebookRoot(e), x = b.cells, S = {
		cell_type: v,
		id: createBrowserUuid(),
		metadata: {},
		source: []
	};
	return v === "code" && (S.execution_count = null, S.outputs = [], S.metadata = { vscode: { languageId: y } }), x.splice(Math.min(Math.max(_, 0), x.length), 0, S), serializeNotebook(b);
}
function deleteIpynbCell(e, _) {
	let v = parseNotebookRoot(e), y = v.cells;
	return y.length <= 1 ? y.splice(0, y.length, {
		cell_type: "code",
		id: createBrowserUuid(),
		metadata: {},
		execution_count: null,
		outputs: [],
		source: []
	}) : y.splice(_, 1), serializeNotebook(v);
}
function moveIpynbCell(e, _, v) {
	let y = parseNotebookRoot(e), b = y.cells, x = _ + v;
	if (_ < 0 || _ >= b.length || x < 0 || x >= b.length) return e;
	let [S] = b.splice(_, 1);
	return b.splice(x, 0, S), serializeNotebook(y);
}
function updateIpynbCellOutputs(e, _, v) {
	let y = parseNotebookRoot(e), b = ensureCell(y, _), x = [];
	if (v.stdout && x.push({
		output_type: "stream",
		name: "stdout",
		text: splitIpynbSource(v.stdout)
	}), v.stderr && v.exitCode === 0 && !v.error && x.push({
		output_type: "stream",
		name: "stderr",
		text: splitIpynbSource(v.stderr)
	}), v.error || (v.exitCode ?? 0) !== 0) {
		let e = v.error || v.stderr || `Process exited with code ${v.exitCode}`;
		x.push({
			output_type: "error",
			ename: "PythonError",
			evalue: e,
			traceback: splitIpynbSource(v.stderr || e)
		});
	}
	return b.outputs = x, b.execution_count = typeof b.execution_count == "number" ? b.execution_count + 1 : 1, serializeNotebook(y);
}
var NOTEBOOK_SOURCE_COMMIT_DELAY_MS = 400;
function getIpynbCellKey(e, _) {
	return e.id ?? `${_}:${e.kind}`;
}
function hasIpynbSourceDraft(e, _) {
	return Object.hasOwn(e, _);
}
function cancelStructuralFrames(e) {
	for (let _ of e.current) cancelAnimationFrame(_);
	e.current = [];
}
function requestStructuralFrame(e, _) {
	let v = !1, y;
	y = requestAnimationFrame((b) => {
		v = !0, y !== void 0 && (e.current = e.current.filter((e) => e !== y)), _(b);
	}), v || e.current.push(y);
}
function useIpynbDocumentEditing({ content: e, fileId: _, notebook: v, onContentChange: y, onDirtyStateHint: b, onDeactivateEditor: x }) {
	let S = (0, import_react.useRef)(null), [C, w] = (0, import_react.useState)({}), T = (0, import_react.useRef)(C), E = (0, import_react.useRef)(e), D = (0, import_react.useRef)(v), O = (0, import_react.useRef)(y), k = (0, import_react.useRef)(b), A = (0, import_react.useRef)(null), j = (0, import_react.useRef)([]);
	(0, import_react.useLayoutEffect)(() => {
		E.current = e, D.current = v, O.current = y, k.current = b;
	}, [
		e,
		v,
		y,
		b
	]);
	let M = (0, import_react.useCallback)(() => {
		let e = D.current, _ = T.current;
		if (!e || Object.keys(_).length === 0) return E.current;
		let v = e.cells.map((e, v) => {
			let y = getIpynbCellKey(e, v);
			return hasIpynbSourceDraft(_, y) ? {
				index: v,
				source: _[y] ?? ""
			} : null;
		}).filter((e) => e !== null);
		return updateIpynbCellSources(E.current, v);
	}, []), N = (0, import_react.useCallback)(() => {
		A.current !== null && (clearTimeout(A.current), A.current = null);
		let e = M();
		return e !== E.current && (E.current = e, O.current(e)), e;
	}, [M]), P = (0, import_react.useCallback)(() => {
		A.current !== null && clearTimeout(A.current), A.current = setTimeout(() => {
			N();
		}, NOTEBOOK_SOURCE_COMMIT_DELAY_MS);
	}, [N]);
	(0, import_react.useEffect)(() => registerPendingEditorFlush(_, N), [_, N]), (0, import_react.useEffect)(() => {
		if (!v || Object.keys(T.current).length === 0) return;
		let e = { ...T.current }, _ = !1;
		for (let [y, b] of v.cells.entries()) {
			let v = getIpynbCellKey(b, y);
			hasIpynbSourceDraft(e, v) && e[v] === b.source && (delete e[v], _ = !0);
		}
		_ && (T.current = e, w(e));
	}, [v]);
	let F = (0, import_react.useCallback)((e) => {
		S.current = e, e === null && (N(), cancelStructuralFrames(j));
	}, [N]), I = (0, import_react.useCallback)((e) => {
		E.current = e, O.current(e);
	}, []), L = (0, import_react.useCallback)((e, _) => {
		let v = D.current?.cells[e];
		if (!v) return;
		let y = getIpynbCellKey(v, e), b = {
			...T.current,
			[y]: _
		};
		T.current = b, w(b), k.current(!0), P();
	}, [P]), R = (0, import_react.useCallback)((e) => {
		let _ = N();
		x(), requestStructuralFrame(j, () => {
			I(e(_));
		});
	}, [
		I,
		N,
		x
	]);
	return {
		rootRef: S,
		setRootRef: F,
		sourceDrafts: C,
		flushSourceDrafts: N,
		applyContent: I,
		updateCellSource: L,
		updateCellKind: (e, _) => {
			let v = D.current?.language ?? "python";
			R((y) => updateIpynbCellKind(y, e, _, v));
		},
		insertCell: (e, _) => {
			let v = D.current?.language ?? "python";
			R((y) => insertIpynbCell(y, e, _, v));
		},
		moveCell: (e, _) => {
			R((v) => moveIpynbCell(v, e, _));
		},
		deleteCell: (e) => {
			R((_) => deleteIpynbCell(_, e));
		}
	};
}
function useIpynbCellExecution({ filePath: e, worktreeId: _, flushSourceDrafts: v, applyContent: y, onSave: b }) {
	let x = (0, import_react.useRef)({
		filePath: e,
		revision: 0,
		trusted: !1
	}), [S, C] = (0, import_react.useState)(null), [w, T] = (0, import_react.useState)(null), [E, D] = (0, import_react.useState)(null), O = x.current.filePath === e ? x.current.revision : x.current.revision + 1;
	(0, import_react.useLayoutEffect)(() => {
		x.current.filePath !== e && (x.current = {
			filePath: e,
			revision: O,
			trusted: !1
		});
	}, [e, O]);
	let k = S?.fileRevision === O ? S.cellIndex : null, A = async (S, E = {}) => {
		let k = v(), A = parseIpynb(k), j = A.cells[S];
		if (!(!j || j.kind !== "code" || w !== null)) {
			if (!x.current.trusted && !E.skipTrustPrompt) {
				C({
					fileRevision: O,
					cellIndex: S
				});
				return;
			}
			D(null), T(S);
			try {
				if (!await b(k)) return;
				y(updateIpynbCellOutputs(k, S, await window.api.notebook.runPythonCell({
					filePath: e,
					code: j.source,
					preamble: A.cells.slice(0, S).filter((e) => e.kind === "code").map((e) => e.source).join("\n\n"),
					connectionId: getConnectionId(_) ?? void 0
				})));
			} catch (e) {
				D(e instanceof Error ? e.message : String(e));
			} finally {
				T(null);
			}
		}
	};
	return {
		runningCellIndex: w,
		runError: E,
		pendingRunCellIndex: k,
		runCell: A,
		cancelPendingRun: () => C(null),
		confirmPendingRun: () => {
			let e = k;
			x.current.trusted = !0, C(null), e !== null && A(e, { skipTrustPrompt: !0 });
		}
	};
}
function useIpynbScrollRestoration(e, _, v) {
	(0, import_react.useLayoutEffect)(() => {
		let v = e.current;
		if (!v) return;
		let y = null, b = () => {
			y !== null && clearTimeout(y), y = setTimeout(() => {
				setWithLRU(scrollTopCache, _, v.scrollTop), y = null;
			}, 150);
		};
		return v.addEventListener("scroll", b, { passive: !0 }), () => {
			(v.scrollHeight > v.clientHeight || v.scrollTop > 0) && setWithLRU(scrollTopCache, _, v.scrollTop), y !== null && clearTimeout(y), v.removeEventListener("scroll", b);
		};
	}, [e, _]), (0, import_react.useLayoutEffect)(() => {
		let v = e.current, y = scrollTopCache.get(_);
		v && y !== void 0 && (v.scrollTop = y);
	}, [
		e,
		_,
		v
	]);
}
function IpynbViewer({ content: e, fileId: _, filePath: b, worktreeId: x, scrollCacheKey: S, onContentChange: w, onDirtyStateHint: T, onSave: E }) {
	let O = useAppStore((e) => e.settings), A = useAppStore((e) => e.editorFontZoomLevel), [j, M] = (0, import_react.useState)(null), N = (0, import_react.useMemo)(() => {
		try {
			return {
				notebook: parseIpynb(e),
				error: null
			};
		} catch (e) {
			return {
				notebook: null,
				error: e instanceof Error ? e.message : "Invalid notebook"
			};
		}
	}, [e]), P = (0, import_react.useCallback)(() => M(null), []), { rootRef: F, setRootRef: I, sourceDrafts: z, flushSourceDrafts: B, applyContent: V, updateCellSource: H, updateCellKind: U, insertCell: W, moveCell: G, deleteCell: K } = useIpynbDocumentEditing({
		content: e,
		fileId: _,
		notebook: N.notebook,
		onContentChange: w,
		onDirtyStateHint: T,
		onDeactivateEditor: P
	}), q = useIpynbCellExecution({
		filePath: b,
		worktreeId: x,
		flushSourceDrafts: B,
		applyContent: V,
		onSave: E
	});
	useIpynbScrollRestoration(F, S, e);
	let J = useShortcutKeyDetails("editor.save"), Y = computeEditorFontSize(13, A), X = (0, import_react.useCallback)(async () => {
		await E(B());
	}, [B, E]), Z = (0, import_react.useCallback)((e) => {
		e.repeat || !editorShortcutMatches("editor.save", e) || (e.preventDefault(), e.stopPropagation(), X());
	}, [X]), Q = (0, import_react.useCallback)((e) => {
		j !== null && ((e.target instanceof Element ? e.target : null)?.closest(".monaco-editor") || M(null));
	}, [j]);
	if (N.error || !N.notebook) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full items-center justify-center bg-editor-surface p-6 text-sm text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex max-w-md items-start gap-3 rounded-md border border-border bg-background p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 size-4 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-medium text-foreground",
				children: translate("auto.components.editor.IpynbViewer.c1601b23b2", "Unable to render notebook")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1",
				children: N.error
			})] })]
		})
	});
	let { notebook: $ } = N;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: I,
		className: "h-full min-h-0 overflow-auto bg-editor-surface scrollbar-editor",
		style: {
			fontSize: Y,
			fontFamily: resolveEditorFontFamilyOrInherit(O)
		},
		onKeyDownCapture: Z,
		onPointerDownCapture: Q,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 z-10 flex items-center gap-3 border-b border-border/60 bg-background/95 px-4 py-2 text-xs text-muted-foreground backdrop-blur",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-foreground",
						children: b.split(/[/\\]/).pop()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						$.cells.length,
						" ",
						translate("auto.components.editor.IpynbViewer.07e7d96612", "cells")
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: $.language }),
					$.kernelName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: $.kernelName }) : null,
					q.runError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-destructive",
						children: q.runError
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbToolbarButton, {
								label: translate("auto.components.editor.IpynbViewer.15ec40a735", "Save notebook"),
								shortcut: J,
								onClick: () => void X(),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-sm border border-border bg-muted px-1.5 py-0.5 font-medium text-muted-foreground",
								children: translate("auto.components.editor.IpynbViewer.329764e9fc", "BETA")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono",
								children: [
									translate("auto.components.editor.IpynbViewer.8c3b21369a", "nbformat"),
									" ",
									$.nbformat
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-[980px] flex-col gap-3 px-5 py-5",
				children: $.cells.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center rounded-md border border-border bg-background p-8 text-sm text-muted-foreground",
					children: translate("auto.components.editor.IpynbViewer.d6f37a640b", "Empty notebook")
				}) : $.cells.map((e, _) => {
					let v = getIpynbCellKey(e, _), y = hasIpynbSourceDraft(z, v) ? z[v] ?? "" : e.source;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "overflow-hidden rounded-md border border-border bg-background",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbCellToolbar, {
								cell: e,
								index: _,
								running: q.runningCellIndex === _,
								canMoveUp: _ > 0,
								canMoveDown: _ < $.cells.length - 1,
								onRun: () => void q.runCell(_),
								onKindChange: (e) => U(_, e),
								onInsertAbove: (e) => W(_, e),
								onInsertBelow: (e) => W(_ + 1, e),
								onMoveUp: () => G(_, -1),
								onMoveDown: () => G(_, 1),
								onDelete: () => K(_)
							}),
							e.kind === "markdown" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-0 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbEditableTextCell, {
									source: y,
									onChange: (e) => H(_, e)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border-t border-border/50 lg:border-l lg:border-t-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbMarkdownCell, { source: y })
								})]
							}) : e.kind === "code" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbCodeCell, {
								cell: e,
								source: y,
								active: j === v,
								onActivate: () => M(v),
								onDeactivate: () => M((e) => e === v ? null : e),
								onChange: (e) => H(_, e),
								onSaveRequest: X
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbEditableTextCell, {
								source: y,
								onChange: (e) => H(_, e)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IpynbCellOutputs, { cell: e })
						]
					}, v);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: q.pendingRunCellIndex !== null,
				onOpenChange: (e) => {
					e || q.cancelPendingRun();
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md sm:max-w-md",
					showCloseButton: !1,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-sm",
						children: translate("auto.components.editor.IpynbViewer.9e06ae5d36", "Run Notebook Code?")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "text-xs",
						children: translate("auto.components.editor.IpynbViewer.10ed04a685", "Notebook cells execute local Python on this machine from the notebook folder. Only run cells from files you trust.")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
						className: "gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: q.cancelPendingRun,
							children: translate("auto.components.editor.IpynbViewer.7f0d7077c6", "Cancel")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "sm",
							autoFocus: !0,
							onClick: q.confirmPendingRun,
							children: translate("auto.components.editor.IpynbViewer.859bf9fc21", "Run cell")
						})]
					})]
				})
			})
		]
	});
}
export { IpynbViewer as default };
