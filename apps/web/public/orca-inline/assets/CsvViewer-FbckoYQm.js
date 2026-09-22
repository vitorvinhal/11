import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as useVirtualizer } from "./esm-COD_EJuQ.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), LINE_FEED_CODE_UNIT = 10, CARRIAGE_RETURN_CODE_UNIT = 13;
function parseCsv(e, c = ",") {
	e.charCodeAt(0) === 65279 && (e = e.slice(1));
	let l = [], u = [], d = "", f = !1, p = 0, m = !1, h = () => {
		u.push(d), d = "";
	}, g = () => {
		h(), u.length > p && (p = u.length), l.push(u), u = [], m = !1;
	};
	for (let l = 0; l < e.length; l += 1) {
		let u = e[l];
		if (f) {
			u === "\"" ? e[l + 1] === "\"" ? (d += "\"", l += 1) : f = !1 : d += u;
			continue;
		}
		if (u === "\"" && d === "") {
			f = !0, m = !0;
			continue;
		}
		if (u === c) {
			h(), m = !0;
			continue;
		}
		if (u === "\r") {
			e[l + 1] === "\n" && (l += 1), g();
			continue;
		}
		if (u === "\n") {
			g();
			continue;
		}
		d += u, m = !0;
	}
	return (d.length > 0 || u.length > 0 || m) && g(), {
		rows: l,
		maxColumns: p
	};
}
function detectCsvDelimiter(e, c) {
	if (e.toLowerCase().endsWith(".tsv")) return "	";
	let l = c;
	l.charCodeAt(0) === 65279 && (l = l.slice(1));
	let u = findFirstNonEmptyCsvSniffLine(l);
	return countDelimiterOutsideQuotes(u, "	") > countDelimiterOutsideQuotes(u, ",") ? "	" : ",";
}
function findFirstNonEmptyCsvSniffLine(e) {
	let c = Math.min(e.length, 65536), l = 0, u = !1;
	for (let d = 0; d < c; d += 1) {
		let f = e.charCodeAt(d);
		if (f === LINE_FEED_CODE_UNIT || f === CARRIAGE_RETURN_CODE_UNIT) {
			if (u) return e.slice(l, d);
			f === CARRIAGE_RETURN_CODE_UNIT && d + 1 < c && e.charCodeAt(d + 1) === LINE_FEED_CODE_UNIT && (d += 1), l = d + 1, u = !1;
			continue;
		}
		!u && !isCsvSniffWhitespace(f) && (u = !0);
	}
	return u ? e.slice(l, c) : "";
}
function isCsvSniffWhitespace(e) {
	return e === 9 || e === 11 || e === 12 || e === 32 || e === 160;
}
function countDelimiterOutsideQuotes(e, c) {
	let l = 0, u = !1;
	for (let d = 0; d < e.length; d += 1) {
		let f = e[d];
		if (f === "\"") {
			u && e[d + 1] === "\"" ? d += 1 : u = !u;
			continue;
		}
		!u && f === c && (l += 1);
	}
	return l;
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), ROW_HEIGHT = 28, OVERSCAN = 12, MIN_COL_PX = 80, MAX_COL_PX = 320, ROW_NUMBER_COL_PX = 48, CHAR_PX = 7;
function CsvViewer({ content: e, filePath: c }) {
	let u = (0, import_react.useRef)(null), p = (0, import_react.useMemo)(() => parseCsv(e, detectCsvDelimiter(c, e)), [e, c]), { headerRow: m, bodyRows: _ } = (0, import_react.useMemo)(() => {
		if (p.rows.length === 0) return {
			headerRow: [],
			bodyRows: []
		};
		let [e, ...c] = p.rows;
		return {
			headerRow: e ?? [],
			bodyRows: c
		};
	}, [p]), v = p.maxColumns, y = (0, import_react.useMemo)(() => {
		let e = [...m ?? []];
		for (; e.length < v;) e.push("");
		return e;
	}, [m, v]), b = (0, import_react.useMemo)(() => {
		let e = Array.from({ length: v }).fill(MIN_COL_PX), c = (c, l) => {
			if (!c) return;
			let u = Math.min(MAX_COL_PX, Math.max(MIN_COL_PX, c.length * CHAR_PX + 24));
			u > e[l] && (e[l] = u);
		};
		y.forEach(c);
		let l = Math.min(_.length, 200);
		for (let e = 0; e < l; e += 1) {
			let l = _[e];
			for (let e = 0; e < v; e += 1) c(l[e], e);
		}
		return e;
	}, [
		y,
		_,
		v
	]), x = (0, import_react.useMemo)(() => `${ROW_NUMBER_COL_PX}px ${b.map((e) => `${e}px`).join(" ")}`, [b]), S = useVirtualizer({
		count: _.length,
		getScrollElement: () => u.current,
		estimateSize: () => ROW_HEIGHT,
		overscan: OVERSCAN,
		getItemKey: (e) => e
	});
	if (p.rows.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full items-center justify-center text-sm text-muted-foreground",
		children: translate("auto.components.editor.CsvViewer.a233d55b77", "Empty file")
	});
	let C = S.getVirtualItems(), w = S.getTotalSize();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: u,
			className: "relative min-h-0 flex-1 overflow-auto scrollbar-editor font-mono text-xs",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "table",
				"aria-rowcount": p.rows.length,
				"aria-colcount": v + 1,
				className: "inline-block min-w-full",
				style: { width: "max-content" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "row",
					"aria-rowindex": 1,
					className: "sticky top-0 z-10 grid bg-muted/90 backdrop-blur",
					style: {
						gridTemplateColumns: x,
						height: ROW_HEIGHT
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "columnheader",
						className: "sticky left-0 z-20 flex items-center justify-end border-b border-r border-border/60 bg-muted/90 px-2 text-[10px] font-normal text-muted-foreground",
						children: "#"
					}), y.map((e, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						role: "columnheader",
						className: "flex items-center overflow-hidden border-b border-r border-border/60 px-2 font-medium text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							title: e,
							children: e
						})
					}, c))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						height: w,
						position: "relative"
					},
					children: C.map((e) => {
						let c = _[e.index] ?? [];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							role: "row",
							"aria-rowindex": e.index + 2,
							"data-index": e.index,
							className: "group grid hover:bg-accent/40",
							style: {
								gridTemplateColumns: x,
								position: "absolute",
								top: 0,
								left: 0,
								height: ROW_HEIGHT,
								transform: `translateY(${e.start}px)`
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								role: "rowheader",
								className: "sticky left-0 z-[5] flex items-center justify-end border-b border-r border-border/40 bg-background/95 px-2 text-[10px] text-muted-foreground group-hover:bg-accent/40",
								children: e.index + 1
							}), Array.from({ length: v }).map((e, l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								role: "cell",
								className: "flex items-center overflow-hidden border-b border-r border-border/40 px-2 text-foreground",
								title: c[l] ?? "",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: c[l] ?? ""
								})
							}, l))]
						}, e.key);
					})
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4 border-t border-border/60 px-3 py-1 text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				_.length.toLocaleString(),
				" ",
				translate("auto.components.editor.CsvViewer.ac31d2cd60", "rows")
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				v,
				" ",
				translate("auto.components.editor.CsvViewer.eedd0d37a7", "columns")
			] })]
		})]
	});
}
export { CsvViewer as default };
