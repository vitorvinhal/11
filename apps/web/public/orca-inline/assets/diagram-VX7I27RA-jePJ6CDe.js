import "./chunk-FOHPRMQF-jGN_mPcr.js";
import "./chunk-6AZGARVD-D1ny8Dca.js";
import "./chunk-6TQVIW2G-CHMlWgIB.js";
import "./chunk-6EIED4P4-DjkGTAw7.js";
import "./chunk-KI3K4JFJ-eCcGGi-s.js";
import "./chunk-5V3GS4D5-DYkDPM7n.js";
import "./chunk-UY3FDG6J-D6_LwW2L.js";
import "./chunk-3Z5EZCMW-B16HwcXn.js";
import "./chunk-I5DQTOEV-rSUAP46y.js";
import "./chunk-OUJLGHUK-D19rLc2h.js";
import "./chunk-XHIXRSVI-CnOf2UBa.js";
import "./chunk-2ZTRR5NV-CKnBemUj.js";
import "./chunk-747NJXEK-CDGJEwRb.js";
import "./chunk-IH6LHLGP-C5FZFsRW.js";
import "./chunk-6K3QC6MW-DZR2s8UO.js";
import "./chunk-ICYGCRZG-CKilpC9B.js";
import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log, p as select_default } from "./src-DXrlgw8l.js";
import { D as getThemeVariables3, H as setAccDescription, K as setDiagramTitle, U as setAccTitle, a as clear, b as getConfig, c as configureSvgSize, f as defaultConfig_default, v as getAccDescription, w as getDiagramTitle, y as getAccTitle } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import { t as ordinal } from "./ordinal-BPgqv6Gv.js";
import { t as format } from "./defaultLocale-DtvfgHTZ.js";
import "./dist-DRK-BflQ.js";
import { a as cleanAndMerge } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as selectSvgElement } from "./chunk-CLGD4ZFX--a6S7Yag.js";
import { t as populateCommonDb } from "./chunk-JWPE2WC7-Cv3uUh-s.js";
import { n as parse } from "./mermaid-parser.core-D-n-19AD.js";
import { i as styles2String, n as isLabelStyle } from "./chunk-P2QGCYS3-ERnFXKBq.js";
import { t as setupViewPortForSVG } from "./chunk-POPQ4Y6H-3Rat7IEA.js";
function count(i) {
	var u = 0, d = i.children, f = d && d.length;
	if (!f) u = 1;
	else for (; --f >= 0;) u += d[f].value;
	i.value = u;
}
function count_default() {
	return this.eachAfter(count);
}
function each_default(i, u) {
	let d = -1;
	for (let f of this) i.call(u, f, ++d, this);
	return this;
}
function eachBefore_default(i, u) {
	for (var d = this, f = [d], p, m, h = -1; d = f.pop();) if (i.call(u, d, ++h, this), p = d.children) for (m = p.length - 1; m >= 0; --m) f.push(p[m]);
	return this;
}
function eachAfter_default(i, u) {
	for (var d = this, f = [d], p = [], m, h, g, _ = -1; d = f.pop();) if (p.push(d), m = d.children) for (h = 0, g = m.length; h < g; ++h) f.push(m[h]);
	for (; d = p.pop();) i.call(u, d, ++_, this);
	return this;
}
function find_default(i, u) {
	let d = -1;
	for (let f of this) if (i.call(u, f, ++d, this)) return f;
}
function sum_default(i) {
	return this.eachAfter(function(u) {
		for (var d = +i(u.data) || 0, f = u.children, p = f && f.length; --p >= 0;) d += f[p].value;
		u.value = d;
	});
}
function sort_default(i) {
	return this.eachBefore(function(u) {
		u.children && u.children.sort(i);
	});
}
function path_default(i) {
	for (var u = this, d = leastCommonAncestor(u, i), f = [u]; u !== d;) u = u.parent, f.push(u);
	for (var p = f.length; i !== d;) f.splice(p, 0, i), i = i.parent;
	return f;
}
function leastCommonAncestor(i, u) {
	if (i === u) return i;
	var d = i.ancestors(), f = u.ancestors(), p = null;
	for (i = d.pop(), u = f.pop(); i === u;) p = i, i = d.pop(), u = f.pop();
	return p;
}
function ancestors_default() {
	for (var i = this, u = [i]; i = i.parent;) u.push(i);
	return u;
}
function descendants_default() {
	return Array.from(this);
}
function leaves_default() {
	var i = [];
	return this.eachBefore(function(u) {
		u.children || i.push(u);
	}), i;
}
function links_default() {
	var i = this, u = [];
	return i.each(function(d) {
		d !== i && u.push({
			source: d.parent,
			target: d
		});
	}), u;
}
function* iterator_default() {
	var i = this, u, d = [i], f, p, m;
	do
		for (u = d.reverse(), d = []; i = u.pop();) if (yield i, f = i.children) for (p = 0, m = f.length; p < m; ++p) d.push(f[p]);
	while (d.length);
}
function hierarchy(i, u) {
	i instanceof Map ? (i = [void 0, i], u === void 0 && (u = mapChildren)) : u === void 0 && (u = objectChildren);
	for (var d = new Node(i), f, p = [d], m, h, g, _; f = p.pop();) if ((h = u(f.data)) && (_ = (h = Array.from(h)).length)) for (f.children = h, g = _ - 1; g >= 0; --g) p.push(m = h[g] = new Node(h[g])), m.parent = f, m.depth = f.depth + 1;
	return d.eachBefore(computeHeight);
}
function node_copy() {
	return hierarchy(this).eachBefore(copyData);
}
function objectChildren(i) {
	return i.children;
}
function mapChildren(i) {
	return Array.isArray(i) ? i[1] : null;
}
function copyData(i) {
	i.data.value !== void 0 && (i.value = i.data.value), i.data = i.data.data;
}
function computeHeight(i) {
	var u = 0;
	do
		i.height = u;
	while ((i = i.parent) && i.height < ++u);
}
function Node(i) {
	this.data = i, this.depth = this.height = 0, this.parent = null;
}
Node.prototype = hierarchy.prototype = {
	constructor: Node,
	count: count_default,
	each: each_default,
	eachAfter: eachAfter_default,
	eachBefore: eachBefore_default,
	find: find_default,
	sum: sum_default,
	sort: sort_default,
	path: path_default,
	ancestors: ancestors_default,
	descendants: descendants_default,
	leaves: leaves_default,
	links: links_default,
	copy: node_copy,
	[Symbol.iterator]: iterator_default
};
function required(i) {
	if (typeof i != "function") throw Error();
	return i;
}
function constantZero() {
	return 0;
}
function constant_default(i) {
	return function() {
		return i;
	};
}
function round_default(i) {
	i.x0 = Math.round(i.x0), i.y0 = Math.round(i.y0), i.x1 = Math.round(i.x1), i.y1 = Math.round(i.y1);
}
function dice_default(i, u, d, f, p) {
	for (var m = i.children, h, g = -1, _ = m.length, v = i.value && (f - u) / i.value; ++g < _;) h = m[g], h.y0 = d, h.y1 = p, h.x0 = u, h.x1 = u += h.value * v;
}
function slice_default(i, u, d, f, p) {
	for (var m = i.children, h, g = -1, _ = m.length, v = i.value && (p - d) / i.value; ++g < _;) h = m[g], h.x0 = u, h.x1 = f, h.y0 = d, h.y1 = d += h.value * v;
}
var phi = (1 + Math.sqrt(5)) / 2;
function squarifyRatio(i, u, d, f, p, m) {
	for (var h = [], g = u.children, _, v, y = 0, b = 0, x = g.length, S, C, w = u.value, T, E, D, O, k, A, j; y < x;) {
		S = p - d, C = m - f;
		do
			T = g[b++].value;
		while (!T && b < x);
		for (E = D = T, A = Math.max(C / S, S / C) / (w * i), j = T * T * A, k = Math.max(D / j, j / E); b < x; ++b) {
			if (T += v = g[b].value, v < E && (E = v), v > D && (D = v), j = T * T * A, O = Math.max(D / j, j / E), O > k) {
				T -= v;
				break;
			}
			k = O;
		}
		h.push(_ = {
			value: T,
			dice: S < C,
			children: g.slice(y, b)
		}), _.dice ? dice_default(_, d, f, p, w ? f += C * T / w : m) : slice_default(_, d, f, w ? d += S * T / w : p, m), w -= T, y = b;
	}
	return h;
}
var squarify_default = (function i(u) {
	function d(i, d, f, p, m) {
		squarifyRatio(u, i, d, f, p, m);
	}
	return d.ratio = function(u) {
		return i((u = +u) > 1 ? u : 1);
	}, d;
})(phi);
function treemap_default() {
	var i = squarify_default, u = !1, d = 1, f = 1, p = [0], m = constantZero, h = constantZero, g = constantZero, _ = constantZero, v = constantZero;
	function y(i) {
		return i.x0 = i.y0 = 0, i.x1 = d, i.y1 = f, i.eachBefore(b), p = [0], u && i.eachBefore(round_default), i;
	}
	function b(u) {
		var d = p[u.depth], f = u.x0 + d, y = u.y0 + d, b = u.x1 - d, x = u.y1 - d;
		b < f && (f = b = (f + b) / 2), x < y && (y = x = (y + x) / 2), u.x0 = f, u.y0 = y, u.x1 = b, u.y1 = x, u.children && (d = p[u.depth + 1] = m(u) / 2, f += v(u) - d, y += h(u) - d, b -= g(u) - d, x -= _(u) - d, b < f && (f = b = (f + b) / 2), x < y && (y = x = (y + x) / 2), i(u, f, y, b, x));
	}
	return y.round = function(i) {
		return arguments.length ? (u = !!i, y) : u;
	}, y.size = function(i) {
		return arguments.length ? (d = +i[0], f = +i[1], y) : [d, f];
	}, y.tile = function(u) {
		return arguments.length ? (i = required(u), y) : i;
	}, y.padding = function(i) {
		return arguments.length ? y.paddingInner(i).paddingOuter(i) : y.paddingInner();
	}, y.paddingInner = function(i) {
		return arguments.length ? (m = typeof i == "function" ? i : constant_default(+i), y) : m;
	}, y.paddingOuter = function(i) {
		return arguments.length ? y.paddingTop(i).paddingRight(i).paddingBottom(i).paddingLeft(i) : y.paddingTop();
	}, y.paddingTop = function(i) {
		return arguments.length ? (h = typeof i == "function" ? i : constant_default(+i), y) : h;
	}, y.paddingRight = function(i) {
		return arguments.length ? (g = typeof i == "function" ? i : constant_default(+i), y) : g;
	}, y.paddingBottom = function(i) {
		return arguments.length ? (_ = typeof i == "function" ? i : constant_default(+i), y) : _;
	}, y.paddingLeft = function(i) {
		return arguments.length ? (v = typeof i == "function" ? i : constant_default(+i), y) : v;
	}, y;
}
var TreeMapDB = class {
	constructor() {
		this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = setAccTitle, this.getAccTitle = getAccTitle, this.setDiagramTitle = setDiagramTitle, this.getDiagramTitle = getDiagramTitle, this.getAccDescription = getAccDescription, this.setAccDescription = setAccDescription;
	}
	static #e = __name(this, "TreeMapDB");
	getNodes() {
		return this.nodes;
	}
	getConfig() {
		let i = defaultConfig_default, u = getConfig();
		return cleanAndMerge({
			...i.treemap,
			...u.treemap ?? {}
		});
	}
	addNode(i, u) {
		this.nodes.push(i), this.levels.set(i, u), u === 0 && (this.outerNodes.push(i), this.root ??= i);
	}
	getRoot() {
		return {
			name: "",
			children: this.outerNodes
		};
	}
	addClass(i, u) {
		let d = this.classes.get(i) ?? {
			id: i,
			styles: [],
			textStyles: []
		}, f = u.replace(/\\,/g, "§§§").replace(/,/g, ";").replace(/§§§/g, ",").split(";");
		f && f.forEach((i) => {
			isLabelStyle(i) && (d?.textStyles ? d.textStyles.push(i) : d.textStyles = [i]), d?.styles ? d.styles.push(i) : d.styles = [i];
		}), this.classes.set(i, d);
	}
	getClasses() {
		return this.classes;
	}
	getStylesForClass(i) {
		return this.classes.get(i)?.styles ?? [];
	}
	clear() {
		clear(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
	}
};
function buildHierarchy(i) {
	if (!i.length) return [];
	let u = [], d = [];
	return i.forEach((i) => {
		let f = {
			name: i.name,
			children: i.type === "Leaf" ? void 0 : []
		};
		for (f.classSelector = i?.classSelector, i?.cssCompiledStyles && (f.cssCompiledStyles = i.cssCompiledStyles), i.type === "Leaf" && i.value !== void 0 && (f.value = i.value); d.length > 0 && d[d.length - 1].level >= i.level;) d.pop();
		if (d.length === 0) u.push(f);
		else {
			let i = d[d.length - 1].node;
			i.children ? i.children.push(f) : i.children = [f];
		}
		i.type !== "Leaf" && d.push({
			node: f,
			level: i.level
		});
	}), u;
}
__name(buildHierarchy, "buildHierarchy");
var populate = /* @__PURE__ */ __name((u, d) => {
	populateCommonDb(u, d);
	let f = [];
	for (let i of u.TreemapRows ?? []) i.$type === "ClassDefStatement" && d.addClass(i.className ?? "", i.styleText ?? "");
	for (let i of u.TreemapRows ?? []) {
		let u = i.item;
		if (!u) continue;
		let p = i.indent ? parseInt(i.indent) : 0, m = getItemName(u), h = u.classSelector ? d.getStylesForClass(u.classSelector) : [], g = h.length > 0 ? h : void 0, _ = {
			level: p,
			name: m,
			type: u.$type,
			value: u.value,
			classSelector: u.classSelector,
			cssCompiledStyles: g
		};
		f.push(_);
	}
	let p = buildHierarchy(f), m = /* @__PURE__ */ __name((i, u) => {
		for (let f of i) d.addNode(f, u), f.children && f.children.length > 0 && m(f.children, u + 1);
	}, "addNodesRecursively");
	m(p, 0);
}, "populate"), getItemName = /* @__PURE__ */ __name((i) => i.name ? String(i.name) : "", "getItemName"), parser = {
	parser: { yy: void 0 },
	parse: /* @__PURE__ */ __name(async (i) => {
		try {
			let d = await parse("treemap", i);
			log.debug("Treemap AST:", d);
			let f = parser.parser?.yy;
			if (!(f instanceof TreeMapDB)) throw Error("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
			populate(d, f);
		} catch (i) {
			throw log.error("Error parsing treemap:", i), i;
		}
	}, "parse")
}, DEFAULT_INNER_PADDING = 10, SECTION_INNER_PADDING = 10, SECTION_HEADER_HEIGHT = 25, renderer = {
	draw: /* @__PURE__ */ __name((f, p, m, h) => {
		let g = h.db, y = g.getConfig(), b = y.padding ?? DEFAULT_INNER_PADDING, x = g.getDiagramTitle(), S = g.getRoot(), { themeVariables: T } = getConfig();
		if (!S) return;
		let D = x ? 30 : 0, O = selectSvgElement(p), A = y.nodeWidth ? y.nodeWidth * SECTION_INNER_PADDING : 960, M = y.nodeHeight ? y.nodeHeight * SECTION_INNER_PADDING : 500, N = A, P = M + D;
		O.attr("viewBox", `0 0 ${N} ${P}`), configureSvgSize(O, P, N, y.useMaxWidth);
		let F;
		try {
			let u = y.valueFormat || ",";
			if (u === "$0,0") F = /* @__PURE__ */ __name((i) => "$" + format(",")(i), "valueFormat");
			else if (u.startsWith("$") && u.includes(",")) {
				let d = /\.\d+/.exec(u), f = d ? d[0] : "";
				F = /* @__PURE__ */ __name((i) => "$" + format("," + f)(i), "valueFormat");
			} else if (u.startsWith("$")) {
				let d = u.substring(1);
				F = /* @__PURE__ */ __name((i) => "$" + format(d || "")(i), "valueFormat");
			} else F = format(u);
		} catch (i) {
			log.error("Error creating format function:", i), F = format(",");
		}
		let I = ordinal().range([
			"transparent",
			T.cScale0,
			T.cScale1,
			T.cScale2,
			T.cScale3,
			T.cScale4,
			T.cScale5,
			T.cScale6,
			T.cScale7,
			T.cScale8,
			T.cScale9,
			T.cScale10,
			T.cScale11
		]), L = ordinal().range([
			"transparent",
			T.cScalePeer0,
			T.cScalePeer1,
			T.cScalePeer2,
			T.cScalePeer3,
			T.cScalePeer4,
			T.cScalePeer5,
			T.cScalePeer6,
			T.cScalePeer7,
			T.cScalePeer8,
			T.cScalePeer9,
			T.cScalePeer10,
			T.cScalePeer11
		]), R = ordinal().range([
			T.cScaleLabel0,
			T.cScaleLabel1,
			T.cScaleLabel2,
			T.cScaleLabel3,
			T.cScaleLabel4,
			T.cScaleLabel5,
			T.cScaleLabel6,
			T.cScaleLabel7,
			T.cScaleLabel8,
			T.cScaleLabel9,
			T.cScaleLabel10,
			T.cScaleLabel11
		]);
		x && O.append("text").attr("x", N / 2).attr("y", D / 2).attr("class", "treemapTitle").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(x);
		let z = O.append("g").attr("transform", `translate(0, ${D})`).attr("class", "treemapContainer"), B = hierarchy(S).sum((i) => i.value ?? 0).sort((i, u) => (u.value ?? 0) - (i.value ?? 0)), V = treemap_default().size([A, M]).paddingTop((i) => i.children && i.children.length > 0 ? SECTION_HEADER_HEIGHT + SECTION_INNER_PADDING : 0).paddingInner(b).paddingLeft((i) => i.children && i.children.length > 0 ? SECTION_INNER_PADDING : 0).paddingRight((i) => i.children && i.children.length > 0 ? SECTION_INNER_PADDING : 0).paddingBottom((i) => i.children && i.children.length > 0 ? SECTION_INNER_PADDING : 0).round(!0)(B), H = V.descendants().filter((i) => i.children && i.children.length > 0), U = z.selectAll(".treemapSection").data(H).enter().append("g").attr("class", "treemapSection").attr("transform", (i) => `translate(${i.x0},${i.y0})`);
		U.append("rect").attr("width", (i) => i.x1 - i.x0).attr("height", SECTION_HEADER_HEIGHT).attr("class", "treemapSectionHeader").attr("fill", "none").attr("fill-opacity", .6).attr("stroke-width", .6).attr("style", (i) => i.depth === 0 ? "display: none;" : ""), U.append("clipPath").attr("id", (i, u) => `clip-section-${p}-${u}`).append("rect").attr("width", (i) => Math.max(0, i.x1 - i.x0 - 12)).attr("height", SECTION_HEADER_HEIGHT), U.append("rect").attr("width", (i) => i.x1 - i.x0).attr("height", (i) => i.y1 - i.y0).attr("class", (i, u) => `treemapSection section${u}`).attr("fill", (i) => I(i.data.name)).attr("fill-opacity", .6).attr("stroke", (i) => L(i.data.name)).attr("stroke-width", 2).attr("stroke-opacity", .4).attr("style", (i) => {
			if (i.depth === 0) return "display: none;";
			let u = styles2String({ cssCompiledStyles: i.data.cssCompiledStyles });
			return u.nodeStyles + ";" + u.borderStyles.join(";");
		}), U.append("text").attr("class", "treemapSectionLabel").attr("x", 6).attr("y", SECTION_HEADER_HEIGHT / 2).attr("dominant-baseline", "middle").text((i) => i.depth === 0 ? "" : i.data.name).attr("font-weight", "bold").attr("clip-path", (i, u) => `url(#clip-section-${p}-${u})`).attr("style", (i) => i.depth === 0 ? "display: none;" : "dominant-baseline: middle; font-size: 12px; fill:" + R(i.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + styles2String({ cssCompiledStyles: i.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:")).each(function(i) {
			if (i.depth === 0) return;
			let u = select_default(this), f = i.data.name;
			u.text(f);
			let p = i.x1 - i.x0, m;
			m = y.showValues !== !1 && i.value ? p - 10 - 30 - 10 - 6 : p - 6 - 6;
			let h = Math.max(15, m), g = u.node();
			if (g.getComputedTextLength() > h) {
				let i = f;
				for (; i.length > 0;) {
					if (i = f.substring(0, i.length - 1), i.length === 0) {
						u.text("..."), g.getComputedTextLength() > h && u.text("");
						break;
					}
					if (u.text(i + "..."), g.getComputedTextLength() <= h) break;
				}
			}
		}), y.showValues !== !1 && U.append("text").attr("class", "treemapSectionValue").attr("x", (i) => i.x1 - i.x0 - 10).attr("y", SECTION_HEADER_HEIGHT / 2).attr("text-anchor", "end").attr("dominant-baseline", "middle").text((i) => i.value ? F(i.value) : "").attr("font-style", "italic").attr("style", (i) => i.depth === 0 ? "display: none;" : "text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:" + R(i.data.name) + "; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" + styles2String({ cssCompiledStyles: i.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:"));
		let W = V.leaves(), G = W.length > 20, K = G ? 16 : 38, q = G ? 14 : 28, J = G ? 4 : 8, Y = G ? 4 : 6, X = G ? 2 : 4, Z = G ? 8 : 10, Q = G ? 1 : 2, $ = z.selectAll(".treemapLeafGroup").data(W).enter().append("g").attr("class", (i, u) => `treemapNode treemapLeafGroup leaf${u}${i.data.classSelector ? ` ${i.data.classSelector}` : ""}x`).attr("transform", (i) => `translate(${i.x0},${i.y0})`);
		$.append("rect").attr("width", (i) => i.x1 - i.x0).attr("height", (i) => i.y1 - i.y0).attr("class", "treemapLeaf").attr("fill", (i) => i.parent ? I(i.parent.data.name) : I(i.data.name)).attr("style", (i) => styles2String({ cssCompiledStyles: i.data.cssCompiledStyles }).nodeStyles).attr("fill-opacity", .3).attr("stroke", (i) => i.parent ? I(i.parent.data.name) : I(i.data.name)).attr("stroke-width", 3), $.append("clipPath").attr("id", (i, u) => `clip-${p}-${u}`).append("rect").attr("width", (i) => Math.max(0, i.x1 - i.x0 - 4)).attr("height", (i) => Math.max(0, i.y1 - i.y0 - 4)), $.append("text").attr("class", "treemapLabel").attr("x", (i) => (i.x1 - i.x0) / 2).attr("y", (i) => (i.y1 - i.y0) / 2).attr("style", (i) => `text-anchor: middle; dominant-baseline: middle; font-size: ${K}px;fill:` + R(i.data.name) + ";" + styles2String({ cssCompiledStyles: i.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:")).attr("clip-path", (i, u) => `url(#clip-${p}-${u})`).text((i) => i.data.name).each(function(i) {
			let u = select_default(this), f = i.x1 - i.x0, p = i.y1 - i.y0, m = u.node(), h = f - 2 * X, g = p - 2 * X;
			if (h < Z || g < Z) {
				u.style("display", "none");
				return;
			}
			let _ = parseInt(u.style("font-size"), 10), v = .6;
			for (; m.getComputedTextLength() > h && _ > J;) _--, u.style("font-size", `${_}px`);
			let y = Math.max(Y, Math.min(q, Math.round(_ * v))), b = _ + Q + y;
			for (; b > g && _ > J && (_--, y = Math.max(Y, Math.min(q, Math.round(_ * v))), !(y < Y && _ === J));) u.style("font-size", `${_}px`), b = _ + Q + y;
			u.style("font-size", `${_}px`), G ? (_ < J || g < J) && u.style("display", "none") : (m.getComputedTextLength() > h || _ < J || g < _) && u.style("display", "none");
		}), y.showValues !== !1 && $.append("text").attr("class", "treemapValue").attr("x", (i) => (i.x1 - i.x0) / 2).attr("y", function(i) {
			return (i.y1 - i.y0) / 2;
		}).attr("style", (i) => `text-anchor: middle; dominant-baseline: hanging; font-size: ${q}px;fill:` + R(i.data.name) + ";" + styles2String({ cssCompiledStyles: i.data.cssCompiledStyles }).labelStyles.replace("color:", "fill:")).attr("clip-path", (i, u) => `url(#clip-${p}-${u})`).text((i) => i.value ? F(i.value) : "").each(function(i) {
			let u = select_default(this), f = this.parentNode;
			if (!f) {
				u.style("display", "none");
				return;
			}
			let p = select_default(f).select(".treemapLabel");
			if (p.empty() || p.style("display") === "none") {
				u.style("display", "none");
				return;
			}
			let m = parseFloat(p.style("font-size")), h = Math.max(Y, Math.min(q, Math.round(m * .6)));
			u.style("font-size", `${h}px`);
			let g = (i.y1 - i.y0) / 2 + m / 2 + Q;
			u.attr("y", g);
			let _ = i.x1 - i.x0, v = i.y1 - i.y0 - 4, y = _ - 2 * X;
			u.node().getComputedTextLength() > y || g + h > v || h < Y ? u.style("display", "none") : u.style("display", null);
		}), setupViewPortForSVG(O, y.diagramPadding ?? 8, "flowchart", y?.useMaxWidth || !1);
	}, "draw"),
	getClasses: /* @__PURE__ */ __name(function(i, u) {
		return u.db.getClasses();
	}, "getClasses")
}, defaultTreemapStyleOptions = {
	sectionStrokeColor: "black",
	sectionStrokeWidth: "1",
	sectionFillColor: "#efefef",
	leafStrokeColor: "black",
	leafStrokeWidth: "1",
	leafFillColor: "#efefef",
	labelFontSize: "12px",
	valueFontSize: "10px",
	titleFontSize: "14px"
}, diagram = {
	parser,
	get db() {
		return new TreeMapDB();
	},
	renderer,
	styles: /* @__PURE__ */ __name(({ treemap: i } = {}) => {
		let u = cleanAndMerge(getThemeVariables3(), getConfig().themeVariables), d = cleanAndMerge(defaultTreemapStyleOptions, i), p = d.titleColor ?? u.titleColor, m = d.labelColor ?? u.textColor, h = d.valueColor ?? u.textColor;
		return `
  .treemapNode.section {
    stroke: ${d.sectionStrokeColor};
    stroke-width: ${d.sectionStrokeWidth};
    fill: ${d.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${d.leafStrokeColor};
    stroke-width: ${d.leafStrokeWidth};
    fill: ${d.leafFillColor};
  }
  .treemapLabel {
    fill: ${m};
    font-size: ${d.labelFontSize};
  }
  .treemapValue {
    fill: ${h};
    font-size: ${d.valueFontSize};
  }
  .treemapTitle {
    fill: ${p};
    font-size: ${d.titleFontSize};
  }
  `;
	}, "getStyles")
};
export { diagram };
