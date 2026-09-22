import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log, p as select_default } from "./src-DXrlgw8l.js";
import { A as hasKatex, B as sanitizeText3, M as parseGenericTypes, T as getEffectiveHtmlLabels, b as getConfig, f as defaultConfig_default, g as evaluate, x as getConfig2, z as sanitizeText } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import { d as handleUndefinedAttr, i as calculateTextWidth, m as parseFontSize, o as decodeEntities } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as getIconSVG } from "./chunk-PWAF6VOD-xw3v3CBz.js";
import { n as createText, r as fastdom_default } from "./chunk-GMAD6QVW-CrbOfuRD.js";
import { a as userNodeOverrides, i as styles2String, r as solidStateFill, t as compileStyles } from "./chunk-P2QGCYS3-ERnFXKBq.js";
import { t as at } from "./rough.esm-DkFRuaoy.js";
var ELEMENT_NODE = 1, TEXT_NODE = 3;
async function configureLabelImages(o) {
	let s = o.getElementsByTagName("img");
	if (!s || s.length === 0) return;
	let c = !hasTextBesidesImages(o);
	await Promise.all([...s].map((o) => new Promise((s) => {
		function l() {
			if (o.style.display = "flex", o.style.flexDirection = "column", c) {
				let [e = defaultConfig_default.fontSize] = parseFontSize(getConfig2().fontSize ? getConfig2().fontSize : window.getComputedStyle(document.body).fontSize), s = e * 5 + "px";
				o.style.minWidth = s, o.style.maxWidth = s;
			} else o.style.width = "100%";
			s(o);
		}
		__name(l, "setupImage"), setTimeout(() => {
			o.complete && l();
		}), o.addEventListener("error", l), o.addEventListener("load", l);
	})));
}
__name(configureLabelImages, "configureLabelImages");
function hasTextBesidesImages(e) {
	return e.nodeType === TEXT_NODE ? e.textContent?.trim() !== "" : e.nodeType !== ELEMENT_NODE || e.tagName.toLowerCase() === "img" ? !1 : [...e.childNodes].some(hasTextBesidesImages);
}
__name(hasTextBesidesImages, "hasTextBesidesImages");
var SECTION_GAP = 3, MIN_WRAP_WIDTH = 32, c4LabelHelper = /* @__PURE__ */ __name(async (e, o, c) => {
	let l = getConfig2(), u = e.insert("g").attr("class", c ?? "node default").attr("id", o.domId || o.id), d = u.insert("g").attr("class", "label").attr("style", handleUndefinedAttr(o.labelStyle)), f = [
		{
			text: typeof o.label == "string" ? o.label : o.label?.[0] ?? "",
			cssClass: "c4-name"
		},
		{
			text: o.stereotype,
			cssClass: "c4-type"
		},
		...(o.description ?? []).map((e) => ({
			text: e,
			cssClass: "c4-descr"
		}))
	].filter((e) => e.text), p = o.width ? Math.max(o.width - 2 * (o.padding ?? 0), MIN_WRAP_WIDTH) : getConfig2().flowchart?.wrappingWidth ?? 200, m = l.c4?.wrap ?? !0 ? p : Infinity, v = await Promise.all(f.map(async (e) => {
		let c = d.append("g").attr("class", e.cssClass), u = await createText(c, sanitizeText(decodeEntities(e.text ?? ""), l), {
			useHtmlLabels: !1,
			markdown: !1,
			isNode: !0,
			width: m,
			style: o.labelStyle
		}, l);
		return select_default(u).selectAll("tspan.text-outer-tspan").attr("text-anchor", "middle"), select_default(u).selectAll("tspan.text-inner-tspan").attr("font-weight", null).attr("font-style", null), {
			el: c,
			box: c.node().getBBox()
		};
	})), y = Math.max(...v.map(({ box: e }) => e.width), 0), x = 0;
	for (let { el: e, box: o } of v) e.attr("transform", `translate(${y / 2 - o.x - o.width / 2}, ${x - o.y})`), x += o.height + SECTION_GAP;
	let C = v.length > 0 ? x - SECTION_GAP : 0;
	return d.insert("rect", ":first-child"), d.attr("transform", `translate(${-y / 2}, ${-C / 2})`), {
		shapeSvg: u,
		bbox: d.node().getBBox(),
		halfPadding: (o.padding ?? 0) / 2,
		label: d
	};
}, "c4LabelHelper"), labelHelper = /* @__PURE__ */ __name(async (e, o, c) => {
	if (o.stereotype !== void 0) return c4LabelHelper(e, o, c);
	let l, u = o.useHtmlLabels || evaluate(getConfig2()?.htmlLabels);
	l = c || "node default";
	let d = e.insert("g").attr("class", l).attr("id", o.domId || o.id), f = d.insert("g").attr("class", "label").attr("style", handleUndefinedAttr(o.labelStyle)), p;
	p = o.label === void 0 ? "" : typeof o.label == "string" ? o.label : o.label[0];
	let v = !!o.icon || !!o.img, y = o.labelType === "markdown", x = await createText(f, sanitizeText(decodeEntities(p), getConfig2()), {
		useHtmlLabels: u,
		width: o.width || o.wrappingWidth || getConfig2().flowchart?.wrappingWidth,
		classes: y ? "markdown-node-label" : "",
		style: o.labelStyle,
		addSvgBackground: v,
		markdown: y
	}, getConfig2()), w = (o?.padding ?? 0) / 2, T;
	if (u) {
		let e = x.children[0], o = select_default(x);
		await configureLabelImages(e), T = await fastdom_default.measure(() => e.getBoundingClientRect()), o.attr("width", T.width), o.attr("height", T.height);
	} else T = await fastdom_default.measure(() => x.getBBox());
	return u ? f.attr("transform", "translate(" + -T.width / 2 + ", " + -T.height / 2 + ")") : f.attr("transform", "translate(0, " + -T.height / 2 + ")"), o.centerLabel && f.attr("transform", "translate(" + -T.width / 2 + ", " + -T.height / 2 + ")"), f.insert("rect", ":first-child"), {
		shapeSvg: d,
		bbox: T,
		halfPadding: w,
		label: f
	};
}, "labelHelper"), insertLabel = /* @__PURE__ */ __name(async (e, o, c) => {
	let l = c.useHtmlLabels ?? getEffectiveHtmlLabels(getConfig2()), u = e.insert("g").attr("class", "label").attr("style", c.labelStyle || ""), f = await createText(u, sanitizeText(decodeEntities(o), getConfig2()), {
		useHtmlLabels: l,
		width: c.width || getConfig2()?.flowchart?.wrappingWidth,
		style: c.labelStyle,
		addSvgBackground: !!c.icon || !!c.img
	}), p = c.padding / 2, m;
	if (getEffectiveHtmlLabels(getConfig2())) {
		let e = f.children[0], o = select_default(f);
		m = await fastdom_default.measure(() => e.getBoundingClientRect()), o.attr("width", m.width), o.attr("height", m.height);
	} else m = await fastdom_default.measure(() => f.getBBox());
	return l ? u.attr("transform", "translate(" + -m.width / 2 + ", " + -m.height / 2 + ")") : u.attr("transform", "translate(0, " + -m.height / 2 + ")"), c.centerLabel && u.attr("transform", "translate(" + -m.width / 2 + ", " + -m.height / 2 + ")"), u.insert("rect", ":first-child"), {
		shapeSvg: e,
		bbox: m,
		halfPadding: p,
		label: u
	};
}, "insertLabel"), updateNodeBounds = /* @__PURE__ */ __name((e, o, s) => {
	if (s) {
		e.width = s.width, e.height = s.height;
		return;
	}
	let c = o.node().getBBox();
	e.width = c.width, e.height = c.height;
}, "updateNodeBounds"), getNodeClasses = /* @__PURE__ */ __name((e, o) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (o || ""), "getNodeClasses");
function createPathFromPoints(e) {
	let o = e.map((e, o) => `${o === 0 ? "M" : "L"}${e.x},${e.y}`);
	return o.push("Z"), o.join(" ");
}
__name(createPathFromPoints, "createPathFromPoints");
function generateFullSineWavePoints(e, o, s, c, l, u) {
	let d = [], f = s - e, p = c - o, m = f / u, h = 2 * Math.PI / m, g = o + p / 2;
	for (let o = 0; o <= 50; o++) {
		let s = e + o / 50 * f, c = g + l * Math.sin(h * (s - e));
		d.push({
			x: s,
			y: c
		});
	}
	return d;
}
__name(generateFullSineWavePoints, "generateFullSineWavePoints");
function generateCirclePoints(e, o, s, c, l, u) {
	let d = [], f = l * Math.PI / 180, p = (u * Math.PI / 180 - f) / (c - 1);
	for (let l = 0; l < c; l++) {
		let c = f + l * p, u = e + s * Math.cos(c), m = o + s * Math.sin(c);
		d.push({
			x: -u,
			y: -m
		});
	}
	return d;
}
__name(generateCirclePoints, "generateCirclePoints");
function mergePaths(o) {
	let s = Array.from(o.childNodes).filter((e) => e.tagName === "path"), c = document.createElementNS("http://www.w3.org/2000/svg", "path"), l = s.map((e) => e.getAttribute("d")).filter((e) => e !== null).join(" ");
	c.setAttribute("d", l);
	let u = s.find((e) => e.getAttribute("fill") !== "none"), d = s.find((e) => e.getAttribute("stroke") !== "none"), f = /* @__PURE__ */ __name((e, o) => e?.getAttribute(o) ?? void 0, "getAttr");
	if (u) {
		let e = {
			fill: f(u, "fill"),
			"fill-opacity": f(u, "fill-opacity") ?? "1"
		};
		Object.entries(e).forEach(([e, o]) => {
			o && c.setAttribute(e, o);
		});
	}
	if (d) {
		let e = {
			stroke: f(d, "stroke"),
			"stroke-width": f(d, "stroke-width") ?? "1",
			"stroke-opacity": f(d, "stroke-opacity") ?? "1"
		};
		Object.entries(e).forEach(([e, o]) => {
			o && c.setAttribute(e, o);
		});
	}
	let p = document.createElementNS("http://www.w3.org/2000/svg", "g");
	return p.appendChild(c), p;
}
__name(mergePaths, "mergePaths");
var intersect_rect_default = /* @__PURE__ */ __name((e, o) => {
	var s = e.x, c = e.y, l = o.x - s, u = o.y - c, d = e.width / 2, f = e.height / 2, p, m;
	return Math.abs(u) * d > Math.abs(l) * f ? (u < 0 && (f = -f), p = u === 0 ? 0 : f * l / u, m = f) : (l < 0 && (d = -d), p = d, m = l === 0 ? 0 : d * u / l), {
		x: s + p,
		y: c + m
	};
}, "intersectRect"), createRoundedRectPathD = /* @__PURE__ */ __name((e, o, s, c, l) => [
	"M",
	e + l,
	o,
	"H",
	e + s - l,
	"A",
	l,
	l,
	0,
	0,
	1,
	e + s,
	o + l,
	"V",
	o + c - l,
	"A",
	l,
	l,
	0,
	0,
	1,
	e + s - l,
	o + c,
	"H",
	e + l,
	"A",
	l,
	l,
	0,
	0,
	1,
	e,
	o + c - l,
	"V",
	o + l,
	"A",
	l,
	l,
	0,
	0,
	1,
	e + l,
	o,
	"Z"
].join(" "), "createRoundedRectPathD"), createLabel_default = /* @__PURE__ */ __name(async (e, o, s, c = !1, l = !1) => {
	let u = o || "";
	typeof u == "object" && (u = u[0]);
	let f = getConfig2(), p = getEffectiveHtmlLabels(f);
	return await createText(e, u, {
		style: s,
		isTitle: c,
		useHtmlLabels: p,
		markdown: !1,
		isNode: l,
		width: Infinity
	}, f);
}, "createLabel");
function intersectNode(e, o) {
	return e.intersect(o);
}
__name(intersectNode, "intersectNode");
var intersect_node_default = intersectNode;
function intersectEllipse(e, o, s, c) {
	var l = e.x, u = e.y, d = l - c.x, f = u - c.y, p = Math.sqrt(o * o * f * f + s * s * d * d), m = Math.abs(o * s * d / p);
	c.x < l && (m = -m);
	var h = Math.abs(o * s * f / p);
	return c.y < u && (h = -h), {
		x: l + m,
		y: u + h
	};
}
__name(intersectEllipse, "intersectEllipse");
var intersect_ellipse_default = intersectEllipse;
function intersectCircle(e, o, s) {
	return intersect_ellipse_default(e, o, o, s);
}
__name(intersectCircle, "intersectCircle");
var intersect_circle_default = intersectCircle;
function intersectLine(e, o, s, c) {
	{
		let l = o.y - e.y, u = e.x - o.x, d = o.x * e.y - e.x * o.y, f = l * s.x + u * s.y + d, p = l * c.x + u * c.y + d, m = 1e-6;
		if (f !== 0 && p !== 0 && sameSign(f, p)) return;
		let h = c.y - s.y, g = s.x - c.x, _ = c.x * s.y - s.x * c.y, v = h * e.x + g * e.y + _, y = h * o.x + g * o.y + _;
		if (Math.abs(v) < m && Math.abs(y) < m && sameSign(v, y)) return;
		let b = l * g - h * u;
		if (b === 0) return;
		let x = Math.abs(b / 2), S = u * _ - g * d, C = S < 0 ? (S - x) / b : (S + x) / b;
		return S = h * d - l * _, {
			x: C,
			y: S < 0 ? (S - x) / b : (S + x) / b
		};
	}
}
__name(intersectLine, "intersectLine");
function sameSign(e, o) {
	return e * o > 0;
}
__name(sameSign, "sameSign");
var intersect_line_default = intersectLine;
function intersectPolygon(e, o, s) {
	let c = e.x, l = e.y, u = [], d = Infinity, f = Infinity;
	typeof o.forEach == "function" ? o.forEach(function(e) {
		d = Math.min(d, e.x), f = Math.min(f, e.y);
	}) : (d = Math.min(d, o.x), f = Math.min(f, o.y));
	let p = c - e.width / 2 - d, m = l - e.height / 2 - f;
	for (let c = 0; c < o.length; c++) {
		let l = o[c], d = o[c < o.length - 1 ? c + 1 : 0], f = intersect_line_default(e, s, {
			x: p + l.x,
			y: m + l.y
		}, {
			x: p + d.x,
			y: m + d.y
		});
		f && u.push(f);
	}
	return u.length ? (u.length > 1 && u.sort(function(e, o) {
		let c = e.x - s.x, l = e.y - s.y, u = Math.sqrt(c * c + l * l), d = o.x - s.x, f = o.y - s.y, p = Math.sqrt(d * d + f * f);
		return u < p ? -1 : u === p ? 0 : 1;
	}), u[0]) : e;
}
__name(intersectPolygon, "intersectPolygon");
var intersect_default = {
	node: intersect_node_default,
	circle: intersect_circle_default,
	ellipse: intersect_ellipse_default,
	polygon: intersectPolygon,
	rect: intersect_rect_default
};
function anchor(e, s) {
	let { labelStyles: c } = styles2String(s);
	s.labelStyle = c;
	let l = getNodeClasses(s), u = l;
	l || (u = "anchor");
	let d = e.insert("g").attr("class", u).attr("id", s.domId || s.id), { cssStyles: f } = s, p = at.svg(d), m = userNodeOverrides(s, {
		fill: "black",
		stroke: "none",
		fillStyle: "solid"
	});
	s.look !== "handDrawn" && (m.roughness = 0);
	let h = p.circle(0, 0, 2, m), g = d.insert(() => h, ":first-child");
	return g.attr("class", "anchor").attr("style", handleUndefinedAttr(f)), updateNodeBounds(s, g), s.intersect = function(e) {
		return log.info("Circle intersect", s, 1, e), intersect_default.circle(s, 1, e);
	}, d;
}
__name(anchor, "anchor");
function generateArcPoints(e, o, s, c, l, u, d) {
	let f = (e + s) / 2, p = (o + c) / 2, m = Math.atan2(c - o, s - e), h = (s - e) / 2, g = (c - o) / 2, _ = h / l, v = g / u, y = Math.sqrt(_ ** 2 + v ** 2);
	if (y > 1) throw Error("The given radii are too small to create an arc between the points.");
	let b = Math.sqrt(1 - y ** 2), x = f + b * u * Math.sin(m) * (d ? -1 : 1), S = p - b * l * Math.cos(m) * (d ? -1 : 1), C = Math.atan2((o - S) / u, (e - x) / l), w = Math.atan2((c - S) / u, (s - x) / l) - C;
	d && w < 0 && (w += 2 * Math.PI), !d && w > 0 && (w -= 2 * Math.PI);
	let T = [];
	for (let e = 0; e < 20; e++) {
		let o = C + e / 19 * w, s = x + l * Math.cos(o), c = S + u * Math.sin(o);
		T.push({
			x: s,
			y: c
		});
	}
	return T;
}
__name(generateArcPoints, "generateArcPoints");
function calculateArcSagitta(e, o, s) {
	let [c, l] = [o, s].sort((e, o) => o - e);
	return l * (1 - Math.sqrt(1 - (e / c / 2) ** 2));
}
__name(calculateArcSagitta, "calculateArcSagitta");
async function bowTieRect(o, s) {
	let { labelStyles: c, nodeStyles: l } = styles2String(s);
	s.labelStyle = c;
	let u = s.padding ?? 0, d = s.look === "neo" ? 16 : u, f = s.look === "neo" ? 12 : u, p = /* @__PURE__ */ __name((e) => e + f, "calcTotalHeight"), m = /* @__PURE__ */ __name((e) => {
		let o = e / 2;
		return [o / (2.5 + e / 50), o];
	}, "calcEllipseRadius"), { shapeSvg: h, bbox: g } = await labelHelper(o, s, getNodeClasses(s)), _ = p(s?.height ? s?.height : g.height), [v, y] = m(_), b = calculateArcSagitta(_, v, y), x = (s?.width ? s?.width : g.width) + d * 2 + b - b, S = _, { cssStyles: C } = s, E = [
		{
			x: x / 2,
			y: -S / 2
		},
		{
			x: -x / 2,
			y: -S / 2
		},
		...generateArcPoints(-x / 2, -S / 2, -x / 2, S / 2, v, y, !1),
		{
			x: x / 2,
			y: S / 2
		},
		...generateArcPoints(x / 2, S / 2, x / 2, -S / 2, v, y, !0)
	], D = at.svg(h), O = userNodeOverrides(s, {});
	s.look !== "handDrawn" && (O.roughness = 0, O.fillStyle = "solid");
	let k = createPathFromPoints(E), A = D.path(k, O), j = h.insert(() => A, ":first-child");
	return j.attr("class", "basic label-container outer-path"), C && s.look !== "handDrawn" && j.selectAll("path").attr("style", C), l && s.look !== "handDrawn" && j.selectAll("path").attr("style", l), j.attr("transform", `translate(${v / 2}, 0)`), updateNodeBounds(s, j), s.intersect = function(e) {
		return intersect_default.polygon(s, E, e);
	}, h;
}
__name(bowTieRect, "bowTieRect");
async function bucket(o, s, { config: { themeVariables: c } }) {
	let { labelStyles: l, nodeStyles: u } = styles2String(s);
	s.labelStyle = l;
	let { shapeSvg: d, bbox: f, label: p } = await labelHelper(o, s, getNodeClasses(s)), m = c?.nodeBorder ?? c?.lineColor ?? "currentColor", h = s.padding ?? 12, g = Math.max(f.width + h * 2, s.width ?? 0, 80), _ = Math.max(Math.min(g * .08, 12), 5), v = Math.max(f.height + h * 2 + _, s.height ?? 0), y = -v / 2 + _, b = v / 2, x = g * .72, S = [
		`M${-g / 2},${y}`,
		`L${-x / 2},${b}`,
		`A${x / 2},${_} 0 0 0 ${x / 2},${b}`,
		`L${g / 2},${y}`,
		`A${g / 2},${_} 0 0 0 ${-g / 2},${y}`,
		"Z"
	].join(" "), { cssStyles: C } = s, E = d.insert("g", ":first-child").attr("class", "basic label-container");
	if (s.look === "handDrawn") {
		let e = at.svg(d).path(S, userNodeOverrides(s, {}));
		E.node()?.appendChild(e), C && E.attr("style", C);
	} else E.append("path").attr("d", S).attr("style", u);
	E.append("ellipse").attr("cx", 0).attr("cy", y).attr("rx", g / 2).attr("ry", _).attr("style", `fill:none;stroke:${m};stroke-width:1px`), updateNodeBounds(s, E);
	let D = y + (b - y) / 2;
	p.attr("transform", `translate(${-(f.width / 2) - (f.x - (f.left ?? 0))}, ${D - f.height / 2 - (f.y - (f.top ?? 0))})`);
	let O = /* @__PURE__ */ __name((e, o, s) => Array.from({ length: 13 }, (c, l) => {
		let u = Math.PI - l * Math.PI / 12;
		return {
			x: e * Math.cos(u),
			y: o + s * _ * Math.sin(u)
		};
	}), "arc"), k = [...O(g / 2, y, -1), ...O(x / 2, b, 1).reverse()];
	return s.intersect = function(e) {
		return intersect_default.polygon(s, k, e);
	}, d;
}
__name(bucket, "bucket");
var INDICATOR_ROW_HEIGHT = 20, SEPARATOR_GAP = 8, MIN_WIDTH = 80, RADIUS = 8;
async function collapsedGroup(e, o) {
	let { themeVariables: s } = getConfig2(), c = s.clusterBkg, l = s.clusterBorder, { nodeStyles: u } = styles2String(o), { shapeSvg: f, bbox: p } = await labelHelper(e, o, getNodeClasses(o)), m = o.padding ?? 8, g = p.height, v = Math.max(p.width + m * 2, MIN_WIDTH, o?.width ?? 0), y = Math.max(g + SEPARATOR_GAP + INDICATOR_ROW_HEIGHT + m * 2, o?.height ?? 0), b = -v / 2, x = -y / 2, S = -(SEPARATOR_GAP + INDICATOR_ROW_HEIGHT) / 2, C = f.select(".label");
	C && (o.useHtmlLabels ?? getEffectiveHtmlLabels(getConfig2()) ? C.attr("transform", `translate(${-p.width / 2}, ${-p.height / 2 + S})`) : C.attr("transform", `translate(0, ${-p.height / 2 + S})`));
	let E;
	if (o.look === "handDrawn") {
		let e = at.svg(f), s = userNodeOverrides(o, {
			fill: c,
			stroke: l,
			fillStyle: "solid"
		}), u = e.path(createRoundedRectPathD(b, x, v, y, RADIUS), s);
		E = f.insert(() => u, ":first-child"), E.attr("class", "basic label-container collapsed-group").attr("style", handleUndefinedAttr(o.cssStyles));
	} else E = f.insert("rect", ":first-child"), E.attr("class", "basic label-container collapsed-group").attr("style", u).attr("rx", RADIUS).attr("ry", RADIUS).attr("x", b).attr("y", x).attr("width", v).attr("height", y).attr("fill", c).attr("stroke", l);
	let D = x + m + g + SEPARATOR_GAP;
	f.append("line").attr("class", "collapsed-separator").attr("x1", b + 8).attr("y1", D).attr("x2", b + v - 8).attr("y2", D).attr("stroke", l).attr("stroke-dasharray", "3, 3");
	let O = D + INDICATOR_ROW_HEIGHT / 2;
	for (let e = -1; e <= 1; e++) f.append("circle").attr("class", "collapsed-indicator").attr("cx", e * 10).attr("cy", O).attr("r", 2.5).attr("fill", l);
	return updateNodeBounds(o, E), o.calcIntersect = function(e, o) {
		return intersect_default.rect(e, o);
	}, o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, f;
}
__name(collapsedGroup, "collapsedGroup");
function insertPolygonShape(e, o, s, c) {
	return e.insert("polygon", ":first-child").attr("points", c.map(function(e) {
		return e.x + "," + e.y;
	}).join(" ")).attr("class", "label-container").attr("transform", "translate(" + -o / 2 + "," + s / 2 + ")");
}
__name(insertPolygonShape, "insertPolygonShape");
var DIRECTION_ORDER = [
	"right",
	"left",
	"up",
	"down"
], POINT_KEY = "point", expandAndDeduplicateDirections = /* @__PURE__ */ __name((e) => {
	let o = /* @__PURE__ */ new Set();
	for (let s of e) switch (s) {
		case "x":
			o.add("right"), o.add("left");
			break;
		case "y":
			o.add("up"), o.add("down");
			break;
		default:
			o.add(s);
			break;
	}
	return o;
}, "expandAndDeduplicateDirections"), getDirectionKey = /* @__PURE__ */ __name((e) => DIRECTION_ORDER.filter((o) => e.has(o)).join("|") || POINT_KEY, "getDirectionKey"), arrowPointFactories = {
	"right|left|up|down": /* @__PURE__ */ __name(({ height: e, midpoint: o, padding: s, width: c }) => [
		{
			x: 0,
			y: 0
		},
		{
			x: o,
			y: 0
		},
		{
			x: c / 2,
			y: 2 * s
		},
		{
			x: c - o,
			y: 0
		},
		{
			x: c,
			y: 0
		},
		{
			x: c,
			y: -e / 3
		},
		{
			x: c + 2 * s,
			y: -e / 2
		},
		{
			x: c,
			y: -2 * e / 3
		},
		{
			x: c,
			y: -e
		},
		{
			x: c - o,
			y: -e
		},
		{
			x: c / 2,
			y: -e - 2 * s
		},
		{
			x: o,
			y: -e
		},
		{
			x: 0,
			y: -e
		},
		{
			x: 0,
			y: -2 * e / 3
		},
		{
			x: -2 * s,
			y: -e / 2
		},
		{
			x: 0,
			y: -e / 3
		}
	], "right|left|up|down"),
	"right|left|up": /* @__PURE__ */ __name(({ height: e, midpoint: o, width: s }) => [
		{
			x: o,
			y: 0
		},
		{
			x: s - o,
			y: 0
		},
		{
			x: s,
			y: -e / 2
		},
		{
			x: s - o,
			y: -e
		},
		{
			x: o,
			y: -e
		},
		{
			x: 0,
			y: -e / 2
		}
	], "right|left|up"),
	"right|left|down": /* @__PURE__ */ __name(({ height: e, midpoint: o, width: s }) => [
		{
			x: 0,
			y: 0
		},
		{
			x: o,
			y: -e
		},
		{
			x: s - o,
			y: -e
		},
		{
			x: s,
			y: 0
		}
	], "right|left|down"),
	"right|up|down": /* @__PURE__ */ __name(({ height: e, midpoint: o, width: s }) => [
		{
			x: 0,
			y: 0
		},
		{
			x: s,
			y: -o
		},
		{
			x: s,
			y: -e + o
		},
		{
			x: 0,
			y: -e
		}
	], "right|up|down"),
	"left|up|down": /* @__PURE__ */ __name(({ height: e, midpoint: o, width: s }) => [
		{
			x: s,
			y: 0
		},
		{
			x: 0,
			y: -o
		},
		{
			x: 0,
			y: -e + o
		},
		{
			x: s,
			y: -e
		}
	], "left|up|down"),
	"right|left": /* @__PURE__ */ __name(({ height: e, midpoint: o, padding: s, width: c }) => [
		{
			x: o,
			y: 0
		},
		{
			x: o,
			y: -s
		},
		{
			x: c - o,
			y: -s
		},
		{
			x: c - o,
			y: 0
		},
		{
			x: c,
			y: -e / 2
		},
		{
			x: c - o,
			y: -e
		},
		{
			x: c - o,
			y: -e + s
		},
		{
			x: o,
			y: -e + s
		},
		{
			x: o,
			y: -e
		},
		{
			x: 0,
			y: -e / 2
		}
	], "right|left"),
	"up|down": /* @__PURE__ */ __name(({ height: e, midpoint: o, padding: s, width: c }) => [
		{
			x: c / 2,
			y: 0
		},
		{
			x: 0,
			y: -s
		},
		{
			x: o,
			y: -s
		},
		{
			x: o,
			y: -e + s
		},
		{
			x: 0,
			y: -e + s
		},
		{
			x: c / 2,
			y: -e
		},
		{
			x: c,
			y: -e + s
		},
		{
			x: c - o,
			y: -e + s
		},
		{
			x: c - o,
			y: -s
		},
		{
			x: c,
			y: -s
		}
	], "up|down"),
	"right|up": /* @__PURE__ */ __name(({ height: e, midpoint: o, width: s }) => [
		{
			x: 0,
			y: 0
		},
		{
			x: s,
			y: -o
		},
		{
			x: 0,
			y: -e
		}
	], "right|up"),
	"right|down": /* @__PURE__ */ __name(({ height: e, width: o }) => [
		{
			x: 0,
			y: 0
		},
		{
			x: o,
			y: 0
		},
		{
			x: 0,
			y: -e
		}
	], "right|down"),
	"left|up": /* @__PURE__ */ __name(({ height: e, midpoint: o, width: s }) => [
		{
			x: s,
			y: 0
		},
		{
			x: 0,
			y: -o
		},
		{
			x: s,
			y: -e
		}
	], "left|up"),
	"left|down": /* @__PURE__ */ __name(({ height: e, width: o }) => [
		{
			x: o,
			y: 0
		},
		{
			x: 0,
			y: 0
		},
		{
			x: o,
			y: -e
		}
	], "left|down"),
	right: /* @__PURE__ */ __name(({ height: e, midpoint: o, padding: s, width: c }) => [
		{
			x: o,
			y: -s
		},
		{
			x: o,
			y: -s
		},
		{
			x: c - o,
			y: -s
		},
		{
			x: c - o,
			y: 0
		},
		{
			x: c,
			y: -e / 2
		},
		{
			x: c - o,
			y: -e
		},
		{
			x: c - o,
			y: -e + s
		},
		{
			x: o,
			y: -e + s
		},
		{
			x: o,
			y: -e + s
		}
	], "right"),
	left: /* @__PURE__ */ __name(({ height: e, midpoint: o, padding: s, width: c }) => [
		{
			x: o,
			y: 0
		},
		{
			x: o,
			y: -s
		},
		{
			x: c - o,
			y: -s
		},
		{
			x: c - o,
			y: -e + s
		},
		{
			x: o,
			y: -e + s
		},
		{
			x: o,
			y: -e
		},
		{
			x: 0,
			y: -e / 2
		}
	], "left"),
	up: /* @__PURE__ */ __name(({ height: e, midpoint: o, padding: s, width: c }) => [
		{
			x: o,
			y: -s
		},
		{
			x: o,
			y: -e + s
		},
		{
			x: 0,
			y: -e + s
		},
		{
			x: c / 2,
			y: -e
		},
		{
			x: c,
			y: -e + s
		},
		{
			x: c - o,
			y: -e + s
		},
		{
			x: c - o,
			y: -s
		}
	], "up"),
	down: /* @__PURE__ */ __name(({ height: e, midpoint: o, padding: s, width: c }) => [
		{
			x: c / 2,
			y: 0
		},
		{
			x: 0,
			y: -s
		},
		{
			x: o,
			y: -s
		},
		{
			x: o,
			y: -e + s
		},
		{
			x: c - o,
			y: -e + s
		},
		{
			x: c - o,
			y: -s
		},
		{
			x: c,
			y: -s
		}
	], "down"),
	[POINT_KEY]: () => [{
		x: 0,
		y: 0
	}]
}, getArrowPoints = /* @__PURE__ */ __name((e, o, s, c) => {
	let l = expandAndDeduplicateDirections(e), u = (s.padding ?? 0) / 2, d = o.height + 4 * u, f = d / 2, p = c ?? o.width + 2 * f + 2 * u;
	return (arrowPointFactories[getDirectionKey(l)] ?? arrowPointFactories[POINT_KEY])({
		height: d,
		midpoint: f,
		padding: u,
		width: p
	});
}, "getArrowPoints");
async function block_arrow(e, o) {
	let s = o, { shapeSvg: c, bbox: l } = await labelHelper(e, s, getNodeClasses(s)), u = s.padding ?? 0, d = l.height + 2 * u, f = d / 2, p = l.width + 2 * f + u, m = s.width ?? 0, h = s.positioned && (s.widthInColumns ?? 1) > 1 && m > p ? m : p, g = getArrowPoints(s.directions ?? [], l, s, h), _ = insertPolygonShape(c, h, d, g);
	return _.attr("style", s.style ?? null), updateNodeBounds(s, _), s.intersect = function(e) {
		return intersect_default.polygon(s, g, e);
	}, c;
}
__name(block_arrow, "block_arrow");
async function browser(e, o, { config: { themeVariables: s } }) {
	let { labelStyles: c, nodeStyles: l } = styles2String(o);
	o.labelStyle = c;
	let { shapeSvg: u, bbox: d, label: f } = await labelHelper(e, o, getNodeClasses(o)), p = s?.nodeBorder ?? s?.lineColor ?? "currentColor", m = o.padding ?? 12, h = Math.max(d.width + m * 2, o.width ?? 0, 90), g = Math.max(d.height + m * 2 + 18, o.height ?? 0), _ = -g / 2, { cssStyles: v } = o, y = u.insert("g", ":first-child").attr("class", "basic label-container");
	if (o.look === "handDrawn") {
		let e = at.svg(u).path(createRoundedRectPathD(-h / 2, _, h, g, 12), userNodeOverrides(o, {}));
		y.node()?.appendChild(e), v && y.attr("style", v);
	} else y.append("rect").attr("x", -h / 2).attr("y", _).attr("width", h).attr("height", g).attr("rx", 12).attr("ry", 12).attr("style", l);
	y.append("line").attr("x1", -h / 2).attr("y1", _ + 18).attr("x2", h / 2).attr("y2", _ + 18).attr("style", `stroke:${p};stroke-width:1px`);
	for (let e = 0; e < 3; e++) y.append("circle").attr("cx", -h / 2 + 12 + e * 9).attr("cy", _ + 18 / 2).attr("r", 2.5).attr("style", `fill:${p};stroke:none`);
	y.append("rect").attr("class", "browser-address-bar").attr("x", -h / 2 + 44).attr("y", _ + 4).attr("width", Math.max(h - 56, 10)).attr("height", 10).attr("rx", 3).attr("ry", 3).attr("style", `fill:none;stroke:${p};stroke-width:1px;opacity:0.6`), updateNodeBounds(o, y);
	let b = _ + 18 + (g - 18) / 2;
	return f.attr("transform", `translate(${-(d.width / 2) - (d.x - (d.left ?? 0))}, ${b - d.height / 2 - (d.y - (d.top ?? 0))})`), o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, u;
}
__name(browser, "browser");
var NOTCH_SIZE = 12;
async function card(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 28 : l, d = o.look === "neo" ? 24 : l, { shapeSvg: f, bbox: p } = await labelHelper(e, o, getNodeClasses(o)), m = (o?.width ?? p.width) + (o.look === "neo" ? u * 2 : u + NOTCH_SIZE), h = (o?.height ?? p.height) + (o.look === "neo" ? d * 2 : d), g = m, _ = -h, v = [
		{
			x: 0 + NOTCH_SIZE,
			y: _
		},
		{
			x: g,
			y: _
		},
		{
			x: g,
			y: 0
		},
		{
			x: 0,
			y: 0
		},
		{
			x: 0,
			y: _ + NOTCH_SIZE
		},
		{
			x: 0 + NOTCH_SIZE,
			y: _
		}
	], y, { cssStyles: b } = o;
	if (o.look === "handDrawn") {
		let e = at.svg(f), s = userNodeOverrides(o, {}), c = createPathFromPoints(v), l = e.path(c, s);
		y = f.insert(() => l, ":first-child").attr("transform", `translate(${-m / 2}, ${h / 2})`), b && y.attr("style", b);
	} else y = insertPolygonShape(f, m, h, v);
	return c && y.attr("style", c), updateNodeBounds(o, y), o.intersect = function(e) {
		return intersect_default.polygon(o, v, e);
	}, f;
}
__name(card, "card");
function choice(e, o) {
	let { nodeStyles: s } = styles2String(o);
	o.label = "";
	let c = e.insert("g").attr("class", getNodeClasses(o)).attr("id", o.domId ?? o.id), { cssStyles: l } = o, u = Math.max(28, o.width ?? 0), d = [
		{
			x: 0,
			y: u / 2
		},
		{
			x: u / 2,
			y: 0
		},
		{
			x: 0,
			y: -u / 2
		},
		{
			x: -u / 2,
			y: 0
		}
	], f = at.svg(c), p = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
	let m = createPathFromPoints(d), h = f.path(m, p), g = c.insert(() => h, ":first-child");
	return l && o.look !== "handDrawn" && g.selectAll("path").attr("style", l), s && o.look !== "handDrawn" && g.selectAll("path").attr("style", s), o.width = 28, o.height = 28, o.intersect = function(e) {
		return intersect_default.polygon(o, d, e);
	}, c;
}
__name(choice, "choice");
async function circle(e, s, c) {
	let { labelStyles: l, nodeStyles: u } = styles2String(s);
	s.labelStyle = l;
	let { shapeSvg: d, bbox: f, halfPadding: p } = await labelHelper(e, s, getNodeClasses(s)), m = c?.padding ?? p, h = s.look === "neo" ? f.width / 2 + 32 : f.width / 2 + m, g, { cssStyles: v } = s;
	if (s.look === "handDrawn") {
		let e = at.svg(d), o = userNodeOverrides(s, {}), c = e.circle(0, 0, h * 2, o);
		g = d.insert(() => c, ":first-child"), g.attr("class", "basic label-container").attr("style", handleUndefinedAttr(v));
	} else g = d.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", u).attr("r", h).attr("cx", 0).attr("cy", 0);
	return updateNodeBounds(s, g), s.calcIntersect = function(e, o) {
		let s = e.width / 2;
		return intersect_default.circle(e, s, o);
	}, s.intersect = function(e) {
		return log.info("Circle intersect", s, h, e), intersect_default.circle(s, h, e);
	}, d;
}
__name(circle, "circle");
async function composite(e, o) {
	let s = o, { shapeSvg: c, bbox: l, halfPadding: u } = await labelHelper(e, s, [
		"node",
		s.cssClasses,
		s.class
	].filter(Boolean).join(" ")), d = c.insert("rect", ":first-child"), f = s.padding ?? 0, p = s.positioned ? s.width ?? 0 : l.width + f, m = s.positioned ? s.height ?? 0 : l.height + f, h = s.positioned ? -p / 2 : -l.width / 2 - u, g = s.positioned ? -m / 2 : -l.height / 2 - u;
	return d.attr("class", "basic cluster composite label-container").attr("style", s.style ?? null).attr("rx", s.rx ?? null).attr("ry", s.ry ?? null).attr("x", h).attr("y", g).attr("width", p).attr("height", m), updateNodeBounds(s, d), s.intersect = function(e) {
		return intersect_default.rect(s, e);
	}, c;
}
__name(composite, "composite");
async function consoleWindow(e, o, { config: { themeVariables: s } }) {
	let { labelStyles: c, nodeStyles: l } = styles2String(o);
	o.labelStyle = c;
	let { shapeSvg: u, bbox: d, label: f } = await labelHelper(e, o, getNodeClasses(o)), p = s?.nodeBorder ?? s?.lineColor ?? "currentColor", m = o.padding ?? 12, h = Math.max(d.width + m * 2, o.width ?? 0, 90), g = Math.max(d.height + m * 2 + 20, o.height ?? 0), _ = -g / 2, { cssStyles: v } = o, y = u.insert("g", ":first-child").attr("class", "basic label-container");
	if (o.look === "handDrawn") {
		let e = at.svg(u).path(createRoundedRectPathD(-h / 2, _, h, g, 12), userNodeOverrides(o, {}));
		y.node()?.appendChild(e), v && y.attr("style", v);
	} else y.append("rect").attr("x", -h / 2).attr("y", _).attr("width", h).attr("height", g).attr("rx", 12).attr("ry", 12).attr("style", l);
	y.append("text").attr("x", -h / 2 + 12).attr("y", _ + 16).attr("class", "console-glyph").attr("style", `font-family:monospace;font-weight:bold;font-size:14px;fill:${p}`).text(">_"), updateNodeBounds(o, y);
	let b = _ + 20 + (g - 20) / 2;
	return f.attr("transform", `translate(${-(d.width / 2) - (d.x - (d.left ?? 0))}, ${b - d.height / 2 - (d.y - (d.top ?? 0))})`), o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, u;
}
__name(consoleWindow, "consoleWindow");
function createLine(e) {
	let o = Math.cos(Math.PI / 4), s = Math.sin(Math.PI / 4), c = e * 2, l = {
		x: c / 2 * o,
		y: c / 2 * s
	}, u = {
		x: -(c / 2) * o,
		y: c / 2 * s
	}, d = {
		x: -(c / 2) * o,
		y: -(c / 2) * s
	}, f = {
		x: c / 2 * o,
		y: -(c / 2) * s
	};
	return `M ${u.x},${u.y} L ${f.x},${f.y}
                   M ${l.x},${l.y} L ${d.x},${d.y}`;
}
__name(createLine, "createLine");
function crossedCircle(e, s) {
	let { labelStyles: c, nodeStyles: l } = styles2String(s);
	s.labelStyle = c, s.label = "";
	let u = e.insert("g").attr("class", getNodeClasses(s)).attr("id", s.domId ?? s.id), d = Math.max(30, s?.width ?? 0), { cssStyles: f } = s, p = at.svg(u), m = userNodeOverrides(s, {});
	s.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
	let h = p.circle(0, 0, d * 2, m), g = createLine(d), _ = p.path(g, m), v = u.insert(() => h, ":first-child");
	return v.insert(() => _), v.attr("class", "outer-path"), f && s.look !== "handDrawn" && v.selectAll("path").attr("style", f), l && s.look !== "handDrawn" && v.selectAll("path").attr("style", l), updateNodeBounds(s, v), s.intersect = function(e) {
		return log.info("crossedCircle intersect", s, {
			radius: d,
			point: e
		}), intersect_default.circle(s, d, e);
	}, u;
}
__name(crossedCircle, "crossedCircle");
function generateCirclePoints2(e, o, s, c = 100, l = 0, u = 180) {
	let d = [], f = l * Math.PI / 180, p = (u * Math.PI / 180 - f) / (c - 1);
	for (let l = 0; l < c; l++) {
		let c = f + l * p, u = e + s * Math.cos(c), m = o + s * Math.sin(c);
		d.push({
			x: -u,
			y: -m
		});
	}
	return d;
}
__name(generateCirclePoints2, "generateCirclePoints");
async function curlyBraceLeft(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let { shapeSvg: l, bbox: u, label: d } = await labelHelper(e, o, getNodeClasses(o)), f = o.look === "neo" ? 18 : o.padding ?? 0, p = o.look === "neo" ? 12 : o.padding ?? 0, m = u.width + f, h = u.height + p, g = Math.max(5, h * .1), { cssStyles: _ } = o, v = [
		...generateCirclePoints2(m / 2, -h / 2, g, 30, -90, 0),
		{
			x: -m / 2 - g,
			y: g
		},
		...generateCirclePoints2(m / 2 + g * 2, -g, g, 20, -180, -270),
		...generateCirclePoints2(m / 2 + g * 2, g, g, 20, -90, -180),
		{
			x: -m / 2 - g,
			y: -h / 2
		},
		...generateCirclePoints2(m / 2, h / 2, g, 20, 0, 90)
	], y = [
		{
			x: m / 2,
			y: -h / 2 - g
		},
		{
			x: -m / 2,
			y: -h / 2 - g
		},
		...generateCirclePoints2(m / 2, -h / 2, g, 20, -90, 0),
		{
			x: -m / 2 - g,
			y: -g
		},
		...generateCirclePoints2(m / 2 + m * .1, -g, g, 20, -180, -270),
		...generateCirclePoints2(m / 2 + m * .1, g, g, 20, -90, -180),
		{
			x: -m / 2 - g,
			y: h / 2
		},
		...generateCirclePoints2(m / 2, h / 2, g, 20, 0, 90),
		{
			x: -m / 2,
			y: h / 2 + g
		},
		{
			x: m / 2,
			y: h / 2 + g
		}
	], b = at.svg(l), x = userNodeOverrides(o, { fill: "none" });
	o.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
	let S = createPathFromPoints(v).replace("Z", ""), C = b.path(S, x), E = createPathFromPoints(y), D = b.path(E, { ...x }), O = l.insert("g", ":first-child");
	return O.insert(() => D, ":first-child").attr("stroke-opacity", 0), O.insert(() => C, ":first-child"), O.attr("class", "text"), _ && o.look !== "handDrawn" && O.selectAll("path").attr("style", _), c && o.look !== "handDrawn" && O.selectAll("path").attr("style", c), O.attr("transform", `translate(${g}, 0)`), d.attr("transform", `translate(${-m / 2 + g - (u.x - (u.left ?? 0))},${-h / 2 + (o.padding ?? 0) / 2 - (u.y - (u.top ?? 0))})`), updateNodeBounds(o, O), o.intersect = function(e) {
		return intersect_default.polygon(o, y, e);
	}, l;
}
__name(curlyBraceLeft, "curlyBraceLeft");
function generateCirclePoints3(e, o, s, c = 100, l = 0, u = 180) {
	let d = [], f = l * Math.PI / 180, p = (u * Math.PI / 180 - f) / (c - 1);
	for (let l = 0; l < c; l++) {
		let c = f + l * p, u = e + s * Math.cos(c), m = o + s * Math.sin(c);
		d.push({
			x: u,
			y: m
		});
	}
	return d;
}
__name(generateCirclePoints3, "generateCirclePoints");
async function curlyBraceRight(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let { shapeSvg: l, bbox: u, label: d } = await labelHelper(e, o, getNodeClasses(o)), f = o.look === "neo" ? 18 : o.padding ?? 0, p = o.look === "neo" ? 12 : o.padding ?? 0, m = u.width + (o.look === "neo" ? f * 2 : f), h = u.height + (o.look === "neo" ? p * 2 : p), g = Math.max(5, h * .1), { cssStyles: _ } = o, v = [
		...generateCirclePoints3(m / 2, -h / 2, g, 20, -90, 0),
		{
			x: m / 2 + g,
			y: -g
		},
		...generateCirclePoints3(m / 2 + g * 2, -g, g, 20, -180, -270),
		...generateCirclePoints3(m / 2 + g * 2, g, g, 20, -90, -180),
		{
			x: m / 2 + g,
			y: h / 2
		},
		...generateCirclePoints3(m / 2, h / 2, g, 20, 0, 90)
	], y = [
		{
			x: -m / 2,
			y: -h / 2 - g
		},
		{
			x: m / 2,
			y: -h / 2 - g
		},
		...generateCirclePoints3(m / 2, -h / 2, g, 20, -90, 0),
		{
			x: m / 2 + g,
			y: -g
		},
		...generateCirclePoints3(m / 2 + g * 2, -g, g, 20, -180, -270),
		...generateCirclePoints3(m / 2 + g * 2, g, g, 20, -90, -180),
		{
			x: m / 2 + g,
			y: h / 2
		},
		...generateCirclePoints3(m / 2, h / 2, g, 20, 0, 90),
		{
			x: m / 2,
			y: h / 2 + g
		},
		{
			x: -m / 2,
			y: h / 2 + g
		}
	], b = at.svg(l), x = userNodeOverrides(o, { fill: "none" });
	o.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
	let S = createPathFromPoints(v).replace("Z", ""), C = b.path(S, x), E = createPathFromPoints(y), D = b.path(E, { ...x }), O = l.insert("g", ":first-child");
	return O.insert(() => D, ":first-child").attr("stroke-opacity", 0), O.insert(() => C, ":first-child"), O.attr("class", "text"), _ && o.look !== "handDrawn" && O.selectAll("path").attr("style", _), c && o.look !== "handDrawn" && O.selectAll("path").attr("style", c), O.attr("transform", `translate(${-g}, 0)`), d.attr("transform", `translate(${-m / 2 + (o.padding ?? 0) / 2 - (u.x - (u.left ?? 0))},${-h / 2 + (o.padding ?? 0) / 2 - (u.y - (u.top ?? 0))})`), updateNodeBounds(o, O), o.intersect = function(e) {
		return intersect_default.polygon(o, y, e);
	}, l;
}
__name(curlyBraceRight, "curlyBraceRight");
function generateCirclePoints4(e, o, s, c = 100, l = 0, u = 180) {
	let d = [], f = l * Math.PI / 180, p = (u * Math.PI / 180 - f) / (c - 1);
	for (let l = 0; l < c; l++) {
		let c = f + l * p, u = e + s * Math.cos(c), m = o + s * Math.sin(c);
		d.push({
			x: -u,
			y: -m
		});
	}
	return d;
}
__name(generateCirclePoints4, "generateCirclePoints");
async function curlyBraces(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let { shapeSvg: l, bbox: u, label: d } = await labelHelper(e, o, getNodeClasses(o)), f = o.look === "neo" ? 18 : o.padding ?? 0, p = o.look === "neo" ? 12 : o.padding ?? 0, m = u.width + (o.look === "neo" ? f * 2 : f), h = u.height + (o.look === "neo" ? p * 2 : p), g = Math.max(5, h * .1), { cssStyles: _ } = o, v = [
		...generateCirclePoints4(m / 2, -h / 2, g, 30, -90, 0),
		{
			x: -m / 2 - g,
			y: g
		},
		...generateCirclePoints4(m / 2 + g * 2, -g, g, 20, -180, -270),
		...generateCirclePoints4(m / 2 + g * 2, g, g, 20, -90, -180),
		{
			x: -m / 2 - g,
			y: -h / 2
		},
		...generateCirclePoints4(m / 2, h / 2, g, 20, 0, 90)
	], y = [
		...generateCirclePoints4(-m / 2 + g + g / 2, -h / 2, g, 20, -90, -180),
		{
			x: m / 2 - g / 2,
			y: g
		},
		...generateCirclePoints4(-m / 2 - g / 2, -g, g, 20, 0, 90),
		...generateCirclePoints4(-m / 2 - g / 2, g, g, 20, -90, 0),
		{
			x: m / 2 - g / 2,
			y: -g
		},
		...generateCirclePoints4(-m / 2 + g + g / 2, h / 2, g, 30, -180, -270)
	], b = [
		{
			x: m / 2,
			y: -h / 2 - g
		},
		{
			x: -m / 2,
			y: -h / 2 - g
		},
		...generateCirclePoints4(m / 2, -h / 2, g, 20, -90, 0),
		{
			x: -m / 2 - g,
			y: -g
		},
		...generateCirclePoints4(m / 2 + g * 2, -g, g, 20, -180, -270),
		...generateCirclePoints4(m / 2 + g * 2, g, g, 20, -90, -180),
		{
			x: -m / 2 - g,
			y: h / 2
		},
		...generateCirclePoints4(m / 2, h / 2, g, 20, 0, 90),
		{
			x: -m / 2,
			y: h / 2 + g
		},
		{
			x: m / 2 - g - g / 2,
			y: h / 2 + g
		},
		...generateCirclePoints4(-m / 2 + g + g / 2, -h / 2, g, 20, -90, -180),
		{
			x: m / 2 - g / 2,
			y: g
		},
		...generateCirclePoints4(-m / 2 - g / 2, -g, g, 20, 0, 90),
		...generateCirclePoints4(-m / 2 - g / 2, g, g, 20, -90, 0),
		{
			x: m / 2 - g / 2,
			y: -g
		},
		...generateCirclePoints4(-m / 2 + g + g / 2, h / 2, g, 30, -180, -270)
	], x = at.svg(l), S = userNodeOverrides(o, { fill: "none" });
	o.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
	let C = createPathFromPoints(v).replace("Z", ""), E = x.path(C, S), D = createPathFromPoints(y).replace("Z", ""), O = x.path(D, S), k = createPathFromPoints(b), A = x.path(k, { ...S }), j = l.insert("g", ":first-child");
	return j.insert(() => A, ":first-child").attr("stroke-opacity", 0), j.insert(() => E, ":first-child"), j.insert(() => O, ":first-child"), j.attr("class", "text"), _ && o.look !== "handDrawn" && j.selectAll("path").attr("style", _), c && o.look !== "handDrawn" && j.selectAll("path").attr("style", c), j.attr("transform", `translate(${g - g / 4}, 0)`), d.attr("transform", `translate(${-m / 2 + (o.padding ?? 0) / 2 - (u.x - (u.left ?? 0))},${-h / 2 + (o.padding ?? 0) / 2 - (u.y - (u.top ?? 0))})`), updateNodeBounds(o, j), o.intersect = function(e) {
		return intersect_default.polygon(o, b, e);
	}, l;
}
__name(curlyBraces, "curlyBraces");
async function curvedTrapezoid(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 16 : l, d = o.look === "neo" ? 12 : l, { shapeSvg: f, bbox: p } = await labelHelper(e, o, getNodeClasses(o)), m = Math.max(20, (p.width + u * 2) * 1.25, o?.width ?? 0), h = Math.max(5, p.height + d * 2, o?.height ?? 0), g = h / 2, { cssStyles: _ } = o, v = at.svg(f), y = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
	let b = m, x = h, S = b - g, C = x / 4, E = [
		{
			x: S,
			y: 0
		},
		{
			x: C,
			y: 0
		},
		{
			x: 0,
			y: x / 2
		},
		{
			x: C,
			y: x
		},
		{
			x: S,
			y: x
		},
		...generateCirclePoints(-S, -x / 2, g, 50, 270, 90)
	], D = createPathFromPoints(E), O = v.path(D, y), k = f.insert(() => O, ":first-child");
	return k.attr("class", "basic label-container outer-path"), _ && o.look !== "handDrawn" && k.selectChildren("path").attr("style", _), c && o.look !== "handDrawn" && k.selectChildren("path").attr("style", c), k.attr("transform", `translate(${-m / 2}, ${-h / 2})`), updateNodeBounds(o, k), o.intersect = function(e) {
		return intersect_default.polygon(o, E, e);
	}, f;
}
__name(curvedTrapezoid, "curvedTrapezoid");
async function person(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let { shapeSvg: l, bbox: u, label: d } = await labelHelper(e, o, getNodeClasses(o)), f = o.padding ?? 20, p = Math.max(u.width + f * 2, o.width ?? 0, 100), m = Math.min(Math.max(p * .23, 16), 56), h = m * .27, g = Math.max(u.height + f * 2, o.height ? o.height - (2 * m - h) : 0), _ = Math.min(p * .177, g * .45), v = g + 2 * m - h, y = -v / 2, b = y + 2 * m - h, x = l.insert("g", ":first-child").attr("class", "basic label-container"), { cssStyles: S } = o;
	if (o.look === "handDrawn") {
		let e = at.svg(l), s = userNodeOverrides(o, {}), c = e.path(createRoundedRectPathD(-p / 2, b, p, g, _), s), u = e.circle(0, y + m, m * 2, s);
		x.insert(() => u, ":first-child"), x.insert(() => c, ":first-child"), S && x.attr("style", S);
	} else x.append("rect").attr("x", -p / 2).attr("y", b).attr("width", p).attr("height", g).attr("rx", _).attr("ry", _).attr("style", c), x.append("circle").attr("cx", 0).attr("cy", y + m).attr("r", m).attr("style", c);
	updateNodeBounds(o, x);
	let C = b + g / 2;
	d.attr("transform", `translate(${-(u.width / 2) - (u.x - (u.left ?? 0))}, ${C - u.height / 2 - (u.y - (u.top ?? 0))})`);
	let E = y + m, D = Math.asin(Math.min(1, (b - E) / m)) * 180 / Math.PI, O = [
		...generateCirclePoints(0, -E, m, 24, 180 + D, -D),
		...generateCirclePoints(-(-p / 2 + _), -(b + _), _, 12, 90, 0),
		...generateCirclePoints(-(-p / 2 + _), -(v / 2 - _), _, 12, 360, 270),
		...generateCirclePoints(-(p / 2 - _), -(v / 2 - _), _, 12, 270, 180),
		...generateCirclePoints(-(p / 2 - _), -(b + _), _, 12, 180, 90)
	];
	return o.intersect = function(e) {
		return intersect_default.polygon(o, O, e);
	}, l;
}
__name(person, "person");
var createCylinderPathD = /* @__PURE__ */ __name((e, o, s, c, l, u) => [
	`M${e},${o + u}`,
	`a${l},${u} 0,0,0 ${s},0`,
	`a${l},${u} 0,0,0 ${-s},0`,
	`l0,${c}`,
	`a${l},${u} 0,0,0 ${s},0`,
	`l0,${-c}`
].join(" "), "createCylinderPathD"), createOuterCylinderPathD = /* @__PURE__ */ __name((e, o, s, c, l, u) => [
	`M${e},${o + u}`,
	`M${e + s},${o + u}`,
	`a${l},${u} 0,0,0 ${-s},0`,
	`l0,${c}`,
	`a${l},${u} 0,0,0 ${s},0`,
	`l0,${-c}`
].join(" "), "createOuterCylinderPathD"), createInnerCylinderPathD = /* @__PURE__ */ __name((e, o, s, c, l, u) => [`M${e - s / 2},${-c / 2}`, `a${l},${u} 0,0,0 ${s},0`].join(" "), "createInnerCylinderPathD"), MIN_HEIGHT = 8, MIN_WIDTH2 = 8;
async function cylinder(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 24 : l, d = o.look === "neo" ? 24 : l, f = o.width ?? 0;
	if (o.width && (o.width -= d, o.width < MIN_WIDTH2 && (o.width = MIN_WIDTH2)), o.height) {
		let e = f / 2 / (2.5 + f / 50);
		o.height = o.height - u - e * 3, o.height < MIN_HEIGHT && (o.height = MIN_HEIGHT);
	}
	let { shapeSvg: p, bbox: m, label: h } = await labelHelper(e, o, getNodeClasses(o)), g = Math.max(o.width ?? 0, m.width) + d, v = g / 2, y = v / (2.5 + g / 50), b = Math.max(o.height ?? 0, m.height) + u + y, x, { cssStyles: S } = o;
	if (o.look === "handDrawn") {
		let e = at.svg(p), s = createOuterCylinderPathD(0, 0, g, b, v, y), c = createInnerCylinderPathD(0, y, g, b, v, y), l = userNodeOverrides(o, {}), u = e.path(s, l), d = e.path(c, userNodeOverrides(o, { fill: "none" }));
		x = p.insert(() => d, ":first-child"), x = p.insert(() => u, ":first-child"), x.attr("class", "basic label-container"), S && x.attr("style", S);
	} else {
		let e = createCylinderPathD(0, 0, g, b, v, y);
		x = p.insert("path", ":first-child").attr("d", e).attr("class", "basic label-container outer-path").attr("style", handleUndefinedAttr(S)).attr("style", c);
	}
	return x.attr("label-offset-y", y), x.attr("transform", `translate(${-g / 2}, ${-(b / 2 + y)})`), updateNodeBounds(o, x), h.attr("transform", `translate(${-(m.width / 2) - (m.x - (m.left ?? 0))}, ${-(m.height / 2) + (o.padding ?? 0) / 1.5 - (m.y - (m.top ?? 0))})`), o.intersect = function(e) {
		let s = intersect_default.rect(o, e), c = s.x - (o.x ?? 0);
		if (v != 0 && (Math.abs(c) < (o.width ?? 0) / 2 || Math.abs(c) == (o.width ?? 0) / 2 && Math.abs(s.y - (o.y ?? 0)) > (o.height ?? 0) / 2 - y)) {
			let l = y * y * (1 - c * c / (v * v));
			l > 0 && (l = Math.sqrt(l)), l = y - l, e.y - (o.y ?? 0) > 0 && (l = -l), s.y += l;
		}
		return s;
	}, p;
}
__name(cylinder, "cylinder");
async function drawRect(e, o, s) {
	let { labelStyles: c, nodeStyles: l } = styles2String(o);
	o.labelStyle = c;
	let { shapeSvg: u, bbox: d } = await labelHelper(e, o, getNodeClasses(o)), f = Math.max(d.width + s.labelPaddingX * 2, o?.width || 0), p = Math.max(d.height + s.labelPaddingY * 2, o?.height || 0), m = -f / 2, h = -p / 2, g, { rx: v, ry: y } = o, { cssStyles: b } = o;
	if (s?.rx && s.ry && (v = s.rx, y = s.ry), o.look === "handDrawn") {
		let e = at.svg(u), s = userNodeOverrides(o, {}), c = v || y ? e.path(createRoundedRectPathD(m, h, f, p, v || 0), s) : e.rectangle(m, h, f, p, s);
		g = u.insert(() => c, ":first-child"), g.attr("class", "basic label-container").attr("style", handleUndefinedAttr(b));
	} else g = u.insert("rect", ":first-child"), g.attr("class", "basic label-container").attr("style", l).attr("rx", handleUndefinedAttr(v)).attr("ry", handleUndefinedAttr(y)).attr("x", m).attr("y", h).attr("width", f).attr("height", p);
	return updateNodeBounds(o, g, o.look === "handDrawn" ? void 0 : {
		width: f,
		height: p
	}), o.calcIntersect = function(e, o) {
		return intersect_default.rect(e, o);
	}, o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, u;
}
__name(drawRect, "drawRect");
async function datastore(e, o) {
	let { cssClasses: s, labelPaddingX: c, labelPaddingY: l, padding: u, width: d, height: f } = o, p = await drawRect(e, o, {
		rx: 0,
		ry: 0,
		classes: s ?? "",
		labelPaddingX: c ?? (u ?? 0) * 2,
		labelPaddingY: l ?? u ?? 0
	});
	if (o.look === "handDrawn") {
		let e = at.svg(p), s = userNodeOverrides(o, {}), c = p.select(".basic.label-container > path:nth-child(2)"), l = c.node();
		if (!l) return p;
		let u = null;
		if (l instanceof SVGGraphicsElement) u = l.getBBox();
		else return p;
		return p.insert(() => e.line(u.x, u.y, u.x + u.width, u.y, s), ".basic.label-container g.label"), p.insert(() => e.line(u.x, u.y + u.height, u.x + u.width, u.y + u.height, s), ".basic.label-container g.label"), c.remove(), p;
	}
	let m = p.select(".basic.label-container"), h = (Number(m.attr("width")) || d) ?? 0, g = (Number(m.attr("height")) || f) ?? 0;
	return h > 0 && g > 0 && m.attr("stroke-dasharray", `${h} ${g}`), p;
}
__name(datastore, "datastore");
async function dividedRectangle(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.look === "neo" ? 16 : o.padding ?? 0, u = o.look === "neo" ? 16 : o.padding ?? 0, { shapeSvg: d, bbox: f, label: p } = await labelHelper(e, o, getNodeClasses(o)), m = f.width + l, h = f.height + u, g = h * .2, _ = -m / 2, v = -h / 2 - g / 2, { cssStyles: y } = o, b = at.svg(d), x = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
	let S = [
		{
			x: _,
			y: v + g
		},
		{
			x: -_,
			y: v + g
		},
		{
			x: -_,
			y: -v
		},
		{
			x: _,
			y: -v
		},
		{
			x: _,
			y: v
		},
		{
			x: -_,
			y: v
		},
		{
			x: -_,
			y: v + g
		}
	], C = b.polygon(S.map((e) => [e.x, e.y]), x), E = d.insert(() => C, ":first-child");
	return E.attr("class", "basic label-container outer-path"), y && o.look !== "handDrawn" && E.selectAll("path").attr("style", y), c && o.look !== "handDrawn" && E.selectAll("path").attr("style", c), p.attr("transform", `translate(${_ + (o.padding ?? 0) / 2 - (f.x - (f.left ?? 0))}, ${v + g + (o.padding ?? 0) / 2 - (f.y - (f.top ?? 0))})`), updateNodeBounds(o, E), o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, d;
}
__name(dividedRectangle, "dividedRectangle");
async function doublecircle(e, s) {
	let { labelStyles: c, nodeStyles: l } = styles2String(s), u = s.look === "neo" ? 12 : 5;
	s.labelStyle = c;
	let d = s.padding ?? 0, f = s.look === "neo" ? 16 : d, { shapeSvg: p, bbox: m } = await labelHelper(e, s, getNodeClasses(s)), h = (s?.width ? s?.width / 2 : m.width / 2) + (f ?? 0), g = h - u, v, { cssStyles: y } = s;
	if (s.look === "handDrawn") {
		let e = at.svg(p), o = userNodeOverrides(s, {
			roughness: .2,
			strokeWidth: 2.5
		}), c = userNodeOverrides(s, {
			roughness: .2,
			strokeWidth: 1.5
		}), l = e.circle(0, 0, h * 2, o), u = e.circle(0, 0, g * 2, c);
		v = p.insert("g", ":first-child"), v.attr("class", handleUndefinedAttr(s.cssClasses)).attr("style", handleUndefinedAttr(y)), v.node()?.appendChild(l), v.node()?.appendChild(u);
	} else {
		v = p.insert("g", ":first-child");
		let e = v.insert("circle", ":first-child"), o = v.insert("circle");
		v.attr("class", "basic label-container").attr("style", l), e.attr("class", "outer-circle").attr("style", l).attr("r", h).attr("cx", 0).attr("cy", 0), o.attr("class", "inner-circle").attr("style", l).attr("r", g).attr("cx", 0).attr("cy", 0);
	}
	return updateNodeBounds(s, v), s.intersect = function(e) {
		return log.info("DoubleCircle intersect", s, h, e), intersect_default.circle(s, h, e);
	}, p;
}
__name(doublecircle, "doublecircle");
function filledCircle(e, s, { config: { themeVariables: c } }) {
	let { labelStyles: l, nodeStyles: u } = styles2String(s);
	s.label = "", s.labelStyle = l;
	let d = e.insert("g").attr("class", getNodeClasses(s)).attr("id", s.domId ?? s.id), { cssStyles: f } = s, p = at.svg(d), { nodeBorder: m } = c, h = userNodeOverrides(s, { fillStyle: "solid" });
	s.look !== "handDrawn" && (h.roughness = 0);
	let g = p.circle(0, 0, 14, h), _ = d.insert(() => g, ":first-child");
	return _.selectAll("path").attr("style", `fill: ${m} !important;`), f && f.length > 0 && s.look !== "handDrawn" && _.selectAll("path").attr("style", f), u && s.look !== "handDrawn" && _.selectAll("path").attr("style", u), updateNodeBounds(s, _), s.intersect = function(e) {
		return log.info("filledCircle intersect", s, {
			radius: 7,
			point: e
		}), intersect_default.circle(s, 7, e);
	}, d;
}
__name(filledCircle, "filledCircle");
var MIN_HEIGHT2 = 10, MIN_WIDTH3 = 10;
async function flippedTriangle(e, s) {
	let { labelStyles: c, nodeStyles: l } = styles2String(s);
	s.labelStyle = c;
	let u = s.padding ?? 0, d = s.look === "neo" ? u * 2 : u;
	(s.width || s.height) && (s.height = s?.height ?? 0, s.height < MIN_HEIGHT2 && (s.height = MIN_HEIGHT2), s.width = (s?.width ?? 0) - d - d / 2, s.width < MIN_WIDTH3 && (s.width = MIN_WIDTH3));
	let { shapeSvg: f, bbox: p, label: m } = await labelHelper(e, s, getNodeClasses(s)), h = (s?.width ? s?.width : p.width) + (d ?? 0), g = s?.height ? s?.height : h + p.height, _ = g, v = [
		{
			x: 0,
			y: -g
		},
		{
			x: _,
			y: -g
		},
		{
			x: _ / 2,
			y: 0
		}
	], { cssStyles: y } = s, b = at.svg(f), x = userNodeOverrides(s, {});
	s.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
	let S = createPathFromPoints(v), C = b.path(S, x), E = f.insert(() => C, ":first-child").attr("transform", `translate(${-g / 2}, ${g / 2})`).attr("class", "outer-path");
	return y && s.look !== "handDrawn" && E.selectChildren("path").attr("style", y), l && s.look !== "handDrawn" && E.selectChildren("path").attr("style", l), s.width = h, s.height = g, updateNodeBounds(s, E), m.attr("transform", `translate(${-p.width / 2 - (p.x - (p.left ?? 0))}, ${-g / 2 + (s.padding ?? 0) / 2 + (p.y - (p.top ?? 0))})`), s.intersect = function(e) {
		return log.info("Triangle intersect", s, v, e), intersect_default.polygon(s, v, e);
	}, f;
}
__name(flippedTriangle, "flippedTriangle");
async function folder(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let { shapeSvg: l, bbox: u, label: d } = await labelHelper(e, o, getNodeClasses(o)), f = o.padding ?? 12, p = Math.max(u.width + f * 2, o.width ?? 0, 90), m = u.height + f * 2, h = Math.max(Math.min(m * .16, 14), 8), g = Math.max(m + h, o.height ?? 0), _ = g - h, v = Math.max(p * .38, 28), y = -g / 2, b = [
		{
			x: -p / 2,
			y
		},
		{
			x: -p / 2 + v,
			y
		},
		{
			x: -p / 2 + v,
			y: y + h
		},
		{
			x: p / 2,
			y: y + h
		},
		{
			x: p / 2,
			y: g / 2
		},
		{
			x: -p / 2,
			y: g / 2
		}
	], x = [
		`M${b[0].x},${b[0].y}`,
		...b.slice(1).map((e) => `L${e.x},${e.y}`),
		"Z"
	].join(" "), { cssStyles: S } = o, C;
	if (o.look === "handDrawn") {
		let e = at.svg(l).path(x, userNodeOverrides(o, {}));
		C = l.insert(() => e, ":first-child").attr("class", "basic label-container"), S && C.attr("style", S);
	} else C = l.insert("path", ":first-child").attr("d", x).attr("class", "basic label-container").attr("style", c);
	o.look === "handDrawn" ? updateNodeBounds(o, C) : updateNodeBounds(o, C, {
		width: p,
		height: g
	});
	let E = y + h + _ / 2;
	return d.attr("transform", `translate(${-(u.width / 2) - (u.x - (u.left ?? 0))}, ${E - u.height / 2 - (u.y - (u.top ?? 0))})`), o.intersect = function(e) {
		return intersect_default.polygon(o, b, e);
	}, l;
}
__name(folder, "folder");
function forkJoin(e, o, { dir: s, config: { state: c, themeVariables: l } }) {
	let { nodeStyles: u } = styles2String(o);
	o.label = "";
	let d = e.insert("g").attr("class", getNodeClasses(o)).attr("id", o.domId ?? o.id), { cssStyles: f } = o, p = Math.max(70, o?.width ?? 0), m = Math.max(10, o?.height ?? 0);
	s === "LR" && (p = Math.max(10, o?.width ?? 0), m = Math.max(70, o?.height ?? 0));
	let h = -1 * p / 2, g = -1 * m / 2, _ = at.svg(d), v = userNodeOverrides(o, {
		stroke: l.lineColor,
		fill: l.lineColor
	});
	o.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
	let y = _.rectangle(h, g, p, m, v), b = d.insert(() => y, ":first-child");
	f && o.look !== "handDrawn" && b.selectAll("path").attr("style", f), u && o.look !== "handDrawn" && b.selectAll("path").attr("style", u), updateNodeBounds(o, b);
	let x = c?.padding ?? 0;
	return o.width && o.height && (o.width += x / 2 || 0, o.height += x / 2 || 0), o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, d;
}
__name(forkJoin, "forkJoin");
async function halfRoundedRectangle(e, s) {
	let { labelStyles: c, nodeStyles: l } = styles2String(s);
	s.labelStyle = c;
	let u = s.look === "neo" ? 16 : s.padding ?? 0, d = s.look === "neo" ? 12 : s.padding ?? 0;
	(s.width || s.height) && (s.height = (s?.height ?? 0) - d * 2, s.height < 10 && (s.height = 10), s.width = (s?.width ?? 0) - u * 2, s.width < 15 && (s.width = 15));
	let { shapeSvg: f, bbox: p } = await labelHelper(e, s, getNodeClasses(s)), m = (s?.width ? s?.width : Math.max(15, p.width)) + u * 2, h = (s?.height ? s?.height : Math.max(10, p.height)) + d * 2, g = h / 2, { cssStyles: _ } = s, v = at.svg(f), y = userNodeOverrides(s, {});
	s.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
	let b = [
		{
			x: -m / 2,
			y: -h / 2
		},
		{
			x: m / 2 - g,
			y: -h / 2
		},
		...generateCirclePoints(-m / 2 + g, 0, g, 50, 90, 270),
		{
			x: m / 2 - g,
			y: h / 2
		},
		{
			x: -m / 2,
			y: h / 2
		}
	], x = createPathFromPoints(b), S = v.path(x, y), C = f.insert(() => S, ":first-child");
	return C.attr("class", "basic label-container outer-path"), _ && s.look !== "handDrawn" && C.selectChildren("path").attr("style", _), l && s.look !== "handDrawn" && C.selectChildren("path").attr("style", l), updateNodeBounds(s, C), s.intersect = function(e) {
		return log.info("Pill intersect", s, {
			radius: g,
			point: e
		}), intersect_default.polygon(s, b, e);
	}, f;
}
__name(halfRoundedRectangle, "halfRoundedRectangle");
var createHexagonPathD = /* @__PURE__ */ __name((e, o, s, c, l) => [
	`M${e + l},${o}`,
	`L${e + s - l},${o}`,
	`L${e + s},${o - c / 2}`,
	`L${e + s - l},${o - c}`,
	`L${e + l},${o - c}`,
	`L${e},${o - c / 2}`,
	"Z"
].join(" "), "createHexagonPathD");
async function hexagon(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o), l = o.look === "neo" ? 3.5 : 4;
	o.labelStyle = s;
	let u = o.padding ?? 0, d = o.look === "neo" ? 70 : u, f = o.look === "neo" ? 32 : u;
	if (o.width || o.height) {
		let e = (o.height ?? 0) / l;
		o.width = (o?.width ?? 0) - 2 * e - f, o.height = (o.height ?? 0) - d;
	}
	let { shapeSvg: p, bbox: m } = await labelHelper(e, o, getNodeClasses(o)), h = (o?.height ? o?.height : m.height) + d, g = h / l, _ = (o?.width ? o?.width : m.width) + 2 * g + f, v = [
		{
			x: g,
			y: 0
		},
		{
			x: _ - g,
			y: 0
		},
		{
			x: _,
			y: -h / 2
		},
		{
			x: _ - g,
			y: -h
		},
		{
			x: g,
			y: -h
		},
		{
			x: 0,
			y: -h / 2
		}
	], y, { cssStyles: b } = o;
	if (o.look === "handDrawn") {
		let e = at.svg(p), s = userNodeOverrides(o, {}), c = createHexagonPathD(0, 0, _, h, g), l = e.path(c, s);
		y = p.insert(() => l, ":first-child").attr("transform", `translate(${-_ / 2}, ${h / 2})`), b && y.attr("style", b);
	} else y = insertPolygonShape(p, _, h, v);
	return c && y.attr("style", c), o.width = _, o.height = h, updateNodeBounds(o, y), o.intersect = function(e) {
		return intersect_default.polygon(o, v, e);
	}, p;
}
__name(hexagon, "hexagon");
async function hourglass(e, s) {
	let { labelStyles: c, nodeStyles: l } = styles2String(s);
	s.label = "", s.labelStyle = c;
	let { shapeSvg: u } = await labelHelper(e, s, getNodeClasses(s)), d = Math.max(30, s?.width ?? 0), f = Math.max(30, s?.height ?? 0), { cssStyles: p } = s, m = at.svg(u), h = userNodeOverrides(s, {});
	s.look !== "handDrawn" && (h.roughness = 0, h.fillStyle = "solid");
	let g = [
		{
			x: 0,
			y: 0
		},
		{
			x: d,
			y: 0
		},
		{
			x: 0,
			y: f
		},
		{
			x: d,
			y: f
		}
	], _ = createPathFromPoints(g), v = m.path(_, h), y = u.insert(() => v, ":first-child");
	return y.attr("class", "basic label-container outer-path"), p && s.look !== "handDrawn" && y.selectChildren("path").attr("style", p), l && s.look !== "handDrawn" && y.selectChildren("path").attr("style", l), y.attr("transform", `translate(${-d / 2}, ${-f / 2})`), updateNodeBounds(s, y), s.intersect = function(e) {
		return log.info("Pill intersect", s, { points: g }), intersect_default.polygon(s, g, e);
	}, u;
}
__name(hourglass, "hourglass");
async function icon(e, s, { config: { themeVariables: c, flowchart: l } }) {
	let { labelStyles: u } = styles2String(s);
	s.labelStyle = u;
	let d = s.assetHeight ?? 48, f = s.assetWidth ?? 48, p = Math.max(d, f), m = l?.wrappingWidth;
	s.width = Math.max(p, m ?? 0);
	let { shapeSvg: h, bbox: g, label: _ } = await labelHelper(e, s, "icon-shape default"), v = s.pos === "t", y = p, b = p, { nodeBorder: S } = c, { stylesMap: C } = compileStyles(s), E = -b / 2, O = -y / 2, k = s.label ? 8 : 0, A = at.svg(h), j = userNodeOverrides(s, {
		stroke: "none",
		fill: "none"
	});
	s.look !== "handDrawn" && (j.roughness = 0, j.fillStyle = "solid");
	let M = A.rectangle(E, O, b, y, j), N = Math.max(b, g.width), P = y + g.height + k, I = A.rectangle(-N / 2, -P / 2, N, P, {
		...j,
		fill: "transparent",
		stroke: "none"
	}), L = h.insert(() => M, ":first-child"), R = h.insert(() => I);
	if (s.icon) {
		let e = h.append("g");
		e.html(`<g>${await getIconSVG(s.icon, {
			height: p,
			width: p,
			fallbackPrefix: ""
		})}</g>`);
		let o = e.node().getBBox(), c = o.width, l = o.height, u = o.x, d = o.y;
		e.attr("transform", `translate(${-c / 2 - u},${v ? g.height / 2 + k / 2 - l / 2 - d : -g.height / 2 - k / 2 - l / 2 - d})`), e.attr("style", `color: ${C.get("stroke") ?? S};`);
	}
	return _.attr("transform", `translate(${-g.width / 2 - (g.x - (g.left ?? 0))},${v ? -P / 2 : P / 2 - g.height})`), L.attr("transform", `translate(0,${v ? g.height / 2 + k / 2 : -g.height / 2 - k / 2})`), updateNodeBounds(s, R), s.intersect = function(e) {
		if (log.info("iconSquare intersect", s, e), !s.label) return intersect_default.rect(s, e);
		let c = s.x ?? 0, l = s.y ?? 0, u = s.height ?? 0, d = [];
		return d = v ? [
			{
				x: c - g.width / 2,
				y: l - u / 2
			},
			{
				x: c + g.width / 2,
				y: l - u / 2
			},
			{
				x: c + g.width / 2,
				y: l - u / 2 + g.height + k
			},
			{
				x: c + b / 2,
				y: l - u / 2 + g.height + k
			},
			{
				x: c + b / 2,
				y: l + u / 2
			},
			{
				x: c - b / 2,
				y: l + u / 2
			},
			{
				x: c - b / 2,
				y: l - u / 2 + g.height + k
			},
			{
				x: c - g.width / 2,
				y: l - u / 2 + g.height + k
			}
		] : [
			{
				x: c - b / 2,
				y: l - u / 2
			},
			{
				x: c + b / 2,
				y: l - u / 2
			},
			{
				x: c + b / 2,
				y: l - u / 2 + y
			},
			{
				x: c + g.width / 2,
				y: l - u / 2 + y
			},
			{
				x: c + g.width / 2 / 2,
				y: l + u / 2
			},
			{
				x: c - g.width / 2,
				y: l + u / 2
			},
			{
				x: c - g.width / 2,
				y: l - u / 2 + y
			},
			{
				x: c - b / 2,
				y: l - u / 2 + y
			}
		], intersect_default.polygon(s, d, e);
	}, h;
}
__name(icon, "icon");
async function iconCircle(e, s, { config: { themeVariables: c, flowchart: l } }) {
	let { labelStyles: u } = styles2String(s);
	s.labelStyle = u;
	let d = s.assetHeight ?? 48, f = s.assetWidth ?? 48, p = Math.max(d, f), m = l?.wrappingWidth;
	s.width = Math.max(p, m ?? 0);
	let { shapeSvg: h, bbox: g, label: _ } = await labelHelper(e, s, "icon-shape default"), v = s.label ? 8 : 0, y = s.pos === "t", { nodeBorder: b, mainBkg: S } = c, { stylesMap: C } = compileStyles(s), E = at.svg(h), O = userNodeOverrides(s, {});
	s.look !== "handDrawn" && (O.roughness = 0, O.fillStyle = "solid"), O.stroke = C.get("fill") ?? S;
	let k = h.append("g");
	s.icon && k.html(`<g>${await getIconSVG(s.icon, {
		height: p,
		width: p,
		fallbackPrefix: ""
	})}</g>`);
	let A = k.node().getBBox(), j = A.width, M = A.height, N = A.x, P = A.y, I = Math.max(j, M) * Math.SQRT2 + 40, L = E.circle(0, 0, I, O), R = Math.max(I, g.width), z = I + g.height + v, B = E.rectangle(-R / 2, -z / 2, R, z, {
		...O,
		fill: "transparent",
		stroke: "none"
	}), V = h.insert(() => L, ":first-child"), H = h.insert(() => B);
	return k.attr("transform", `translate(${-j / 2 - N},${y ? g.height / 2 + v / 2 - M / 2 - P : -g.height / 2 - v / 2 - M / 2 - P})`), k.attr("style", `color: ${C.get("stroke") ?? b};`), _.attr("transform", `translate(${-g.width / 2 - (g.x - (g.left ?? 0))},${y ? -z / 2 : z / 2 - g.height})`), V.attr("transform", `translate(0,${y ? g.height / 2 + v / 2 : -g.height / 2 - v / 2})`), updateNodeBounds(s, H), s.intersect = function(e) {
		return log.info("iconSquare intersect", s, e), intersect_default.rect(s, e);
	}, h;
}
__name(iconCircle, "iconCircle");
async function iconRounded(e, s, { config: { themeVariables: c, flowchart: l } }) {
	let { labelStyles: u } = styles2String(s);
	s.labelStyle = u;
	let d = s.assetHeight ?? 48, f = s.assetWidth ?? 48, p = Math.max(d, f), m = l?.wrappingWidth;
	s.width = Math.max(p, m ?? 0);
	let { shapeSvg: h, bbox: g, halfPadding: _, label: v } = await labelHelper(e, s, "icon-shape default"), y = s.pos === "t", b = p + _ * 2, S = p + _ * 2, { nodeBorder: C, mainBkg: E } = c, { stylesMap: O } = compileStyles(s), k = -S / 2, A = -b / 2, j = s.label ? 8 : 0, M = at.svg(h), N = userNodeOverrides(s, {});
	s.look !== "handDrawn" && (N.roughness = 0, N.fillStyle = "solid"), N.stroke = O.get("fill") ?? E;
	let P = M.path(createRoundedRectPathD(k, A, S, b, 5), N), I = Math.max(S, g.width), L = b + g.height + j, R = M.rectangle(-I / 2, -L / 2, I, L, {
		...N,
		fill: "transparent",
		stroke: "none"
	}), z = h.insert(() => P, ":first-child").attr("class", "icon-shape2"), B = h.insert(() => R);
	if (s.icon) {
		let e = h.append("g");
		e.html(`<g>${await getIconSVG(s.icon, {
			height: p,
			width: p,
			fallbackPrefix: ""
		})}</g>`);
		let o = e.node().getBBox(), c = o.width, l = o.height, u = o.x, d = o.y;
		e.attr("transform", `translate(${-c / 2 - u},${y ? g.height / 2 + j / 2 - l / 2 - d : -g.height / 2 - j / 2 - l / 2 - d})`), e.attr("style", `color: ${O.get("stroke") ?? C};`);
	}
	return v.attr("transform", `translate(${-g.width / 2 - (g.x - (g.left ?? 0))},${y ? -L / 2 : L / 2 - g.height})`), z.attr("transform", `translate(0,${y ? g.height / 2 + j / 2 : -g.height / 2 - j / 2})`), updateNodeBounds(s, B), s.intersect = function(e) {
		if (log.info("iconSquare intersect", s, e), !s.label) return intersect_default.rect(s, e);
		let c = s.x ?? 0, l = s.y ?? 0, u = s.height ?? 0, d = [];
		return d = y ? [
			{
				x: c - g.width / 2,
				y: l - u / 2
			},
			{
				x: c + g.width / 2,
				y: l - u / 2
			},
			{
				x: c + g.width / 2,
				y: l - u / 2 + g.height + j
			},
			{
				x: c + S / 2,
				y: l - u / 2 + g.height + j
			},
			{
				x: c + S / 2,
				y: l + u / 2
			},
			{
				x: c - S / 2,
				y: l + u / 2
			},
			{
				x: c - S / 2,
				y: l - u / 2 + g.height + j
			},
			{
				x: c - g.width / 2,
				y: l - u / 2 + g.height + j
			}
		] : [
			{
				x: c - S / 2,
				y: l - u / 2
			},
			{
				x: c + S / 2,
				y: l - u / 2
			},
			{
				x: c + S / 2,
				y: l - u / 2 + b
			},
			{
				x: c + g.width / 2,
				y: l - u / 2 + b
			},
			{
				x: c + g.width / 2 / 2,
				y: l + u / 2
			},
			{
				x: c - g.width / 2,
				y: l + u / 2
			},
			{
				x: c - g.width / 2,
				y: l - u / 2 + b
			},
			{
				x: c - S / 2,
				y: l - u / 2 + b
			}
		], intersect_default.polygon(s, d, e);
	}, h;
}
__name(iconRounded, "iconRounded");
async function iconSquare(e, s, { config: { themeVariables: c, flowchart: l } }) {
	let { labelStyles: u } = styles2String(s);
	s.labelStyle = u;
	let d = s.assetHeight ?? 48, f = s.assetWidth ?? 48, p = Math.max(d, f), m = l?.wrappingWidth;
	s.width = Math.max(p, m ?? 0);
	let { shapeSvg: h, bbox: g, halfPadding: _, label: v } = await labelHelper(e, s, "icon-shape default"), y = s.pos === "t", b = p + _ * 2, S = p + _ * 2, { nodeBorder: C, mainBkg: E } = c, { stylesMap: O } = compileStyles(s), k = -S / 2, A = -b / 2, j = s.label ? 8 : 0, M = at.svg(h), N = userNodeOverrides(s, {});
	s.look !== "handDrawn" && (N.roughness = 0, N.fillStyle = "solid"), N.stroke = O.get("fill") ?? E;
	let P = M.path(createRoundedRectPathD(k, A, S, b, .1), N), I = Math.max(S, g.width), L = b + g.height + j, R = M.rectangle(-I / 2, -L / 2, I, L, {
		...N,
		fill: "transparent",
		stroke: "none"
	}), z = h.insert(() => P, ":first-child"), B = h.insert(() => R);
	if (s.icon) {
		let e = h.append("g");
		e.html(`<g>${await getIconSVG(s.icon, {
			height: p,
			width: p,
			fallbackPrefix: ""
		})}</g>`);
		let o = e.node().getBBox(), c = o.width, l = o.height, u = o.x, d = o.y;
		e.attr("transform", `translate(${-c / 2 - u},${y ? g.height / 2 + j / 2 - l / 2 - d : -g.height / 2 - j / 2 - l / 2 - d})`), e.attr("style", `color: ${O.get("stroke") ?? C};`);
	}
	return v.attr("transform", `translate(${-g.width / 2 - (g.x - (g.left ?? 0))},${y ? -L / 2 : L / 2 - g.height})`), z.attr("transform", `translate(0,${y ? g.height / 2 + j / 2 : -g.height / 2 - j / 2})`), updateNodeBounds(s, B), s.intersect = function(e) {
		if (log.info("iconSquare intersect", s, e), !s.label) return intersect_default.rect(s, e);
		let c = s.x ?? 0, l = s.y ?? 0, u = s.height ?? 0, d = [];
		return d = y ? [
			{
				x: c - g.width / 2,
				y: l - u / 2
			},
			{
				x: c + g.width / 2,
				y: l - u / 2
			},
			{
				x: c + g.width / 2,
				y: l - u / 2 + g.height + j
			},
			{
				x: c + S / 2,
				y: l - u / 2 + g.height + j
			},
			{
				x: c + S / 2,
				y: l + u / 2
			},
			{
				x: c - S / 2,
				y: l + u / 2
			},
			{
				x: c - S / 2,
				y: l - u / 2 + g.height + j
			},
			{
				x: c - g.width / 2,
				y: l - u / 2 + g.height + j
			}
		] : [
			{
				x: c - S / 2,
				y: l - u / 2
			},
			{
				x: c + S / 2,
				y: l - u / 2
			},
			{
				x: c + S / 2,
				y: l - u / 2 + b
			},
			{
				x: c + g.width / 2,
				y: l - u / 2 + b
			},
			{
				x: c + g.width / 2 / 2,
				y: l + u / 2
			},
			{
				x: c - g.width / 2,
				y: l + u / 2
			},
			{
				x: c - g.width / 2,
				y: l - u / 2 + b
			},
			{
				x: c - S / 2,
				y: l - u / 2 + b
			}
		], intersect_default.polygon(s, d, e);
	}, h;
}
__name(iconSquare, "iconSquare");
async function imageSquare(e, s, { config: { flowchart: c } }) {
	let l = new Image();
	l.src = s?.img ?? "", await l.decode();
	let u = Number(l.naturalWidth.toString().replace("px", "")), d = Number(l.naturalHeight.toString().replace("px", ""));
	s.imageAspectRatio = u / d;
	let { labelStyles: f } = styles2String(s);
	s.labelStyle = f;
	let p = c?.wrappingWidth;
	s.defaultWidth = c?.wrappingWidth;
	let m = Math.max(s.label ? p ?? 0 : 0, s?.assetWidth ?? u), h = s.constraint === "on" && s?.assetHeight ? s.assetHeight * s.imageAspectRatio : m, g = s.constraint === "on" ? h / s.imageAspectRatio : s?.assetHeight ?? d;
	s.width = Math.max(h, p ?? 0);
	let { shapeSvg: _, bbox: v, label: y } = await labelHelper(e, s, "image-shape default"), b = s.pos === "t", x = -h / 2, S = -g / 2, C = s.label ? 8 : 0, E = at.svg(_), D = userNodeOverrides(s, {});
	s.look !== "handDrawn" && (D.roughness = 0, D.fillStyle = "solid");
	let O = E.rectangle(x, S, h, g, D), k = Math.max(h, v.width), A = g + v.height + C, j = E.rectangle(-k / 2, -A / 2, k, A, {
		...D,
		fill: "none",
		stroke: "none"
	}), M = _.insert(() => O, ":first-child"), N = _.insert(() => j);
	if (s.img) {
		let e = _.append("image");
		e.attr("href", s.img), e.attr("width", h), e.attr("height", g), e.attr("preserveAspectRatio", "none"), e.attr("transform", `translate(${-h / 2},${b ? A / 2 - g : -A / 2})`);
	}
	return y.attr("transform", `translate(${-v.width / 2 - (v.x - (v.left ?? 0))},${b ? -g / 2 - v.height / 2 - C / 2 : g / 2 - v.height / 2 + C / 2})`), M.attr("transform", `translate(0,${b ? v.height / 2 + C / 2 : -v.height / 2 - C / 2})`), updateNodeBounds(s, N), s.intersect = function(e) {
		if (log.info("iconSquare intersect", s, e), !s.label) return intersect_default.rect(s, e);
		let c = s.x ?? 0, l = s.y ?? 0, u = s.height ?? 0, d = [];
		return d = b ? [
			{
				x: c - v.width / 2,
				y: l - u / 2
			},
			{
				x: c + v.width / 2,
				y: l - u / 2
			},
			{
				x: c + v.width / 2,
				y: l - u / 2 + v.height + C
			},
			{
				x: c + h / 2,
				y: l - u / 2 + v.height + C
			},
			{
				x: c + h / 2,
				y: l + u / 2
			},
			{
				x: c - h / 2,
				y: l + u / 2
			},
			{
				x: c - h / 2,
				y: l - u / 2 + v.height + C
			},
			{
				x: c - v.width / 2,
				y: l - u / 2 + v.height + C
			}
		] : [
			{
				x: c - h / 2,
				y: l - u / 2
			},
			{
				x: c + h / 2,
				y: l - u / 2
			},
			{
				x: c + h / 2,
				y: l - u / 2 + g
			},
			{
				x: c + v.width / 2,
				y: l - u / 2 + g
			},
			{
				x: c + v.width / 2 / 2,
				y: l + u / 2
			},
			{
				x: c - v.width / 2,
				y: l + u / 2
			},
			{
				x: c - v.width / 2,
				y: l - u / 2 + g
			},
			{
				x: c - h / 2,
				y: l - u / 2 + g
			}
		], intersect_default.polygon(s, d, e);
	}, _;
}
__name(imageSquare, "imageSquare");
async function inv_trapezoid(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = l, d = o.look === "neo" ? l * 2 : l, { shapeSvg: f, bbox: p } = await labelHelper(e, o, getNodeClasses(o)), m = Math.max(p.height + u * 2, o.height ?? 0), h = Math.max(p.width + d * 2, (o.width ?? 0) - m), g = [
		{
			x: 0,
			y: 0
		},
		{
			x: h,
			y: 0
		},
		{
			x: h + 3 * m / 6,
			y: -m
		},
		{
			x: -3 * m / 6,
			y: -m
		}
	], _, { cssStyles: v } = o;
	if (o.look === "handDrawn") {
		let e = at.svg(f), s = userNodeOverrides(o, {}), c = createPathFromPoints(g), l = e.path(c, s);
		_ = f.insert(() => l, ":first-child").attr("transform", `translate(${-h / 2}, ${m / 2})`), v && _.attr("style", v);
	} else _ = insertPolygonShape(f, h, m, g);
	return c && _.attr("style", c), o.width = h, o.height = m, updateNodeBounds(o, _), o.intersect = function(e) {
		return intersect_default.polygon(o, g, e);
	}, f;
}
__name(inv_trapezoid, "inv_trapezoid");
async function labelRect(e, o) {
	let { shapeSvg: s, bbox: c, label: l } = await labelHelper(e, o, "label"), u = s.insert("rect", ":first-child");
	return u.attr("width", .1).attr("height", .1), s.attr("class", "label edgeLabel"), l.attr("transform", `translate(${-(c.width / 2) - (c.x - (c.left ?? 0))}, ${-(c.height / 2) - (c.y - (c.top ?? 0))})`), updateNodeBounds(o, u), o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, s;
}
__name(labelRect, "labelRect");
async function lean_left(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = l, d = o.look === "neo" ? l * 2 : l, { shapeSvg: f, bbox: p } = await labelHelper(e, o, getNodeClasses(o)), m = Math.max(p.height + u, o.height ?? 0), h = Math.max(p.width + d, (o.width ?? 0) - m), g = [
		{
			x: 0,
			y: 0
		},
		{
			x: h + 3 * m / 6,
			y: 0
		},
		{
			x: h,
			y: -m
		},
		{
			x: -(3 * m) / 6,
			y: -m
		}
	], _, { cssStyles: v } = o;
	if (o.look === "handDrawn") {
		let e = at.svg(f), s = userNodeOverrides(o, {}), c = createPathFromPoints(g), l = e.path(c, s);
		_ = f.insert(() => l, ":first-child").attr("transform", `translate(${-h / 2}, ${m / 2})`), v && _.attr("style", v);
	} else _ = insertPolygonShape(f, h, m, g);
	return c && _.attr("style", c), o.width = h, o.height = m, updateNodeBounds(o, _), o.intersect = function(e) {
		return intersect_default.polygon(o, g, e);
	}, f;
}
__name(lean_left, "lean_left");
async function lean_right(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = l, d = o.look === "neo" ? l * 2 : l, { shapeSvg: f, bbox: p } = await labelHelper(e, o, getNodeClasses(o)), m = Math.max(p.height + u, o.height ?? 0), h = Math.max(p.width + d, (o.width ?? 0) - m), g = [
		{
			x: -3 * m / 6,
			y: 0
		},
		{
			x: h,
			y: 0
		},
		{
			x: h + 3 * m / 6,
			y: -m
		},
		{
			x: 0,
			y: -m
		}
	], _, { cssStyles: v } = o;
	if (o.look === "handDrawn") {
		let e = at.svg(f), s = userNodeOverrides(o, {}), c = createPathFromPoints(g), l = e.path(c, s);
		_ = f.insert(() => l, ":first-child").attr("transform", `translate(${-h / 2}, ${m / 2})`), v && _.attr("style", v);
	} else _ = insertPolygonShape(f, h, m, g);
	return c && _.attr("style", c), o.width = h, o.height = m, updateNodeBounds(o, _), o.intersect = function(e) {
		return intersect_default.polygon(o, g, e);
	}, f;
}
__name(lean_right, "lean_right");
function lightningBolt(e, s) {
	let { labelStyles: c, nodeStyles: l } = styles2String(s);
	s.label = "", s.labelStyle = c;
	let u = e.insert("g").attr("class", getNodeClasses(s)).attr("id", s.domId ?? s.id), { cssStyles: d } = s, f = Math.max(35, s?.width ?? 0), p = Math.max(35, s?.height ?? 0), m = [
		{
			x: f,
			y: 0
		},
		{
			x: 0,
			y: p + 7 / 2
		},
		{
			x: f - 14,
			y: p + 7 / 2
		},
		{
			x: 0,
			y: 2 * p
		},
		{
			x: f,
			y: p - 7 / 2
		},
		{
			x: 14,
			y: p - 7 / 2
		}
	], h = at.svg(u), g = userNodeOverrides(s, {});
	s.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
	let _ = createPathFromPoints(m), v = h.path(_, g), y = u.insert(() => v, ":first-child");
	return y.attr("class", "outer-path"), d && s.look !== "handDrawn" && y.selectAll("path").attr("style", d), l && s.look !== "handDrawn" && y.selectAll("path").attr("style", l), y.attr("transform", `translate(-${f / 2},${-p})`), updateNodeBounds(s, y), s.intersect = function(e) {
		return log.info("lightningBolt intersect", s, e), intersect_default.polygon(s, m, e);
	}, u;
}
__name(lightningBolt, "lightningBolt");
var createCylinderPathD2 = /* @__PURE__ */ __name((e, o, s, c, l, u, d) => [
	`M${e},${o + u}`,
	`a${l},${u} 0,0,0 ${s},0`,
	`a${l},${u} 0,0,0 ${-s},0`,
	`l0,${c}`,
	`a${l},${u} 0,0,0 ${s},0`,
	`l0,${-c}`,
	`M${e},${o + u + d}`,
	`a${l},${u} 0,0,0 ${s},0`
].join(" "), "createCylinderPathD"), createOuterCylinderPathD2 = /* @__PURE__ */ __name((e, o, s, c, l, u, d) => [
	`M${e},${o + u}`,
	`M${e + s},${o + u}`,
	`a${l},${u} 0,0,0 ${-s},0`,
	`l0,${c}`,
	`a${l},${u} 0,0,0 ${s},0`,
	`l0,${-c}`,
	`M${e},${o + u + d}`,
	`a${l},${u} 0,0,0 ${s},0`
].join(" "), "createOuterCylinderPathD"), createInnerCylinderPathD2 = /* @__PURE__ */ __name((e, o, s, c, l, u) => [`M${e - s / 2},${-c / 2}`, `a${l},${u} 0,0,0 ${s},0`].join(" "), "createInnerCylinderPathD"), MIN_HEIGHT3 = 10, MIN_WIDTH4 = 10;
async function linedCylinder(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 16 : l, d = o.look === "neo" ? 24 : l;
	if (o.width || o.height) {
		let e = o.width ?? 0;
		o.width = (o.width ?? 0) - u, o.width < MIN_WIDTH4 && (o.width = MIN_WIDTH4);
		let s = e / 2 / (2.5 + e / 50);
		o.height = (o.height ?? 0) - d - s * 3, o.height < MIN_HEIGHT3 && (o.height = MIN_HEIGHT3);
	}
	let { shapeSvg: f, bbox: p, label: m } = await labelHelper(e, o, getNodeClasses(o)), h = (o?.width ? o?.width : p.width) + u * 2, g = h / 2, v = g / (2.5 + h / 50), y = (o?.height ? o?.height : p.height) + v + d * 2, b = y * .1, x, { cssStyles: S } = o;
	if (o.look === "handDrawn") {
		let e = at.svg(f), s = createOuterCylinderPathD2(0, 0, h, y, g, v, b), c = createInnerCylinderPathD2(0, v, h, y, g, v), l = userNodeOverrides(o, {}), u = e.path(s, l), d = e.path(c, l);
		f.insert(() => d, ":first-child").attr("class", "line"), x = f.insert(() => u, ":first-child"), x.attr("class", "basic label-container"), S && x.attr("style", S);
	} else {
		let e = createCylinderPathD2(0, 0, h, y, g, v, b);
		x = f.insert("path", ":first-child").attr("d", e).attr("class", "basic label-container outer-path").attr("style", handleUndefinedAttr(S)).attr("style", c);
	}
	return x.attr("label-offset-y", v), x.attr("transform", `translate(${-h / 2}, ${-(y / 2 + v)})`), updateNodeBounds(o, x), m.attr("transform", `translate(${-(p.width / 2) - (p.x - (p.left ?? 0))}, ${-(p.height / 2) + v - (p.y - (p.top ?? 0))})`), o.intersect = function(e) {
		let s = intersect_default.rect(o, e), c = s.x - (o.x ?? 0);
		if (g != 0 && (Math.abs(c) < (o.width ?? 0) / 2 || Math.abs(c) == (o.width ?? 0) / 2 && Math.abs(s.y - (o.y ?? 0)) > (o.height ?? 0) / 2 - v)) {
			let l = v * v * (1 - c * c / (g * g));
			l > 0 && (l = Math.sqrt(l)), l = v - l, e.y - (o.y ?? 0) > 0 && (l = -l), s.y += l;
		}
		return s;
	}, f;
}
__name(linedCylinder, "linedCylinder");
async function linedWaveEdgedRect(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 16 : l, d = o.look === "neo" ? 12 : l;
	(o.width || o.height) && (o.width = (o.width ?? 0) * 10 / 11 - u * 2, o.width < 10 && (o.width = 10), o.height = (o?.height ?? 0) - d * 2, o.height < 10 && (o.height = 10));
	let { shapeSvg: f, bbox: p, label: m } = await labelHelper(e, o, getNodeClasses(o)), h = (o?.width ? o?.width : p.width) + (u ?? 0) * 2, g = (o?.height ? o?.height : p.height) + (d ?? 0) * 2, _ = o.look === "neo" ? g / 4 : g / 8, v = g + _, { cssStyles: y } = o, b = at.svg(f), x = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
	let S = [
		{
			x: -h / 2 - h / 2 * .1,
			y: -v / 2
		},
		{
			x: -h / 2 - h / 2 * .1,
			y: v / 2
		},
		...generateFullSineWavePoints(-h / 2 - h / 2 * .1, v / 2, h / 2 + h / 2 * .1, v / 2, _, .8),
		{
			x: h / 2 + h / 2 * .1,
			y: -v / 2
		},
		{
			x: -h / 2 - h / 2 * .1,
			y: -v / 2
		},
		{
			x: -h / 2,
			y: -v / 2
		},
		{
			x: -h / 2,
			y: v / 2 * 1.1
		},
		{
			x: -h / 2,
			y: -v / 2
		}
	], C = b.polygon(S.map((e) => [e.x, e.y]), x), E = f.insert(() => C, ":first-child");
	return E.attr("class", "basic label-container outer-path"), y && o.look !== "handDrawn" && E.selectAll("path").attr("style", y), c && o.look !== "handDrawn" && E.selectAll("path").attr("style", c), E.attr("transform", `translate(0,${-_ / 2})`), m.attr("transform", `translate(${-h / 2 + (o.padding ?? 0) + h / 2 * .1 / 2 - (p.x - (p.left ?? 0))},${-g / 2 + (o.padding ?? 0) - _ / 2 - (p.y - (p.top ?? 0))})`), updateNodeBounds(o, E), o.intersect = function(e) {
		return intersect_default.polygon(o, S, e);
	}, f;
}
__name(linedWaveEdgedRect, "linedWaveEdgedRect");
async function multiRect(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 16 : l, d = o.look === "neo" ? 12 : l, f = o.look === "neo" ? 10 : 5;
	(o.width || o.height) && (o.width = Math.max((o?.width ?? 0) - u * 2 - 2 * f, 10), o.height = Math.max((o?.height ?? 0) - d * 2 - 2 * f, 10));
	let { shapeSvg: p, bbox: m, label: h } = await labelHelper(e, o, getNodeClasses(o)), g = (o?.width ? o?.width : m.width) + u * 2 + 2 * f, _ = (o?.height ? o?.height : m.height) + d * 2 + 2 * f, v = g - 2 * f, y = _ - 2 * f, b = -v / 2, x = -y / 2, { cssStyles: S } = o, C = at.svg(p), E = userNodeOverrides(o, {}), D = [
		{
			x: b - f,
			y: x + f
		},
		{
			x: b - f,
			y: x + y + f
		},
		{
			x: b + v - f,
			y: x + y + f
		},
		{
			x: b + v - f,
			y: x + y
		},
		{
			x: b + v,
			y: x + y
		},
		{
			x: b + v,
			y: x + y - f
		},
		{
			x: b + v + f,
			y: x + y - f
		},
		{
			x: b + v + f,
			y: x - f
		},
		{
			x: b + f,
			y: x - f
		},
		{
			x: b + f,
			y: x
		},
		{
			x: b,
			y: x
		},
		{
			x: b,
			y: x + f
		}
	], O = [
		{
			x: b,
			y: x + f
		},
		{
			x: b + v - f,
			y: x + f
		},
		{
			x: b + v - f,
			y: x + y
		},
		{
			x: b + v,
			y: x + y
		},
		{
			x: b + v,
			y: x
		},
		{
			x: b,
			y: x
		}
	];
	o.look !== "handDrawn" && (E.roughness = 0, E.fillStyle = "solid");
	let k = createPathFromPoints(D), A = C.path(k, E), j = createPathFromPoints(O), M = C.path(j, E);
	o.look !== "handDrawn" && (A = mergePaths(A), M = mergePaths(M));
	let N = p.insert("g", ":first-child");
	return N.insert(() => A), N.insert(() => M), N.attr("class", "basic label-container outer-path"), S && o.look !== "handDrawn" && N.selectAll("path").attr("style", S), c && o.look !== "handDrawn" && N.selectAll("path").attr("style", c), h.attr("transform", `translate(${-(m.width / 2) - f - (m.x - (m.left ?? 0))}, ${-(m.height / 2) + f - (m.y - (m.top ?? 0))})`), updateNodeBounds(o, N), o.intersect = function(e) {
		return intersect_default.polygon(o, D, e);
	}, p;
}
__name(multiRect, "multiRect");
async function multiWaveEdgedRectangle(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let { shapeSvg: l, bbox: u, label: d } = await labelHelper(e, o, getNodeClasses(o)), f = o.padding ?? 0, p = o.look === "neo" ? 16 : f, m = o.look === "neo" ? 12 : f, h = !0;
	(o.width || o.height) && (h = !1, o.width = (o?.width ?? 0) - p * 2, o.height = (o?.height ?? 0) - m * 3);
	let g = Math.max(u.width, o?.width ?? 0) + p * 2, _ = Math.max(u.height, o?.height ?? 0) + m * 3, v = o.look === "neo" ? _ / 4 : _ / 8, y = _ + (h ? v / 2 : -v / 2), b = -g / 2, x = -y / 2, { cssStyles: S } = o, C = generateFullSineWavePoints(b - 10, x + y + 10, b + g - 10, x + y + 10, v, .8), E = C?.[C.length - 1], D = [
		{
			x: b - 10,
			y: x + 10
		},
		{
			x: b - 10,
			y: x + y + 10
		},
		...C,
		{
			x: b + g - 10,
			y: E.y - 10
		},
		{
			x: b + g,
			y: E.y - 10
		},
		{
			x: b + g,
			y: E.y - 20
		},
		{
			x: b + g + 10,
			y: E.y - 20
		},
		{
			x: b + g + 10,
			y: x - 10
		},
		{
			x: b + 10,
			y: x - 10
		},
		{
			x: b + 10,
			y: x
		},
		{
			x: b,
			y: x
		},
		{
			x: b,
			y: x + 10
		}
	], O = [
		{
			x: b,
			y: x + 10
		},
		{
			x: b + g - 10,
			y: x + 10
		},
		{
			x: b + g - 10,
			y: E.y - 10
		},
		{
			x: b + g,
			y: E.y - 10
		},
		{
			x: b + g,
			y: x
		},
		{
			x: b,
			y: x
		}
	], k = at.svg(l), A = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (A.roughness = 0, A.fillStyle = "solid");
	let j = createPathFromPoints(D), M = k.path(j, A), N = createPathFromPoints(O), P = k.path(N, A), I = l.insert(() => M, ":first-child");
	return I.insert(() => P), I.attr("class", "basic label-container outer-path"), S && o.look !== "handDrawn" && I.selectAll("path").attr("style", S), c && o.look !== "handDrawn" && I.selectAll("path").attr("style", c), I.attr("transform", `translate(0,${-v / 2})`), d.attr("transform", `translate(${-(u.width / 2) - 10 - (u.x - (u.left ?? 0))}, ${-(u.height / 2) + 10 - v / 2 - (u.y - (u.top ?? 0))})`), updateNodeBounds(o, I), o.intersect = function(e) {
		return intersect_default.polygon(o, D, e);
	}, l;
}
__name(multiWaveEdgedRectangle, "multiWaveEdgedRectangle");
async function note(e, o, { config: { themeVariables: s } }) {
	let { labelStyles: c, nodeStyles: l } = styles2String(o);
	o.labelStyle = c, o.useHtmlLabels || getEffectiveHtmlLabels(getConfig()) || (o.centerLabel = !0);
	let { shapeSvg: u, bbox: p, label: m } = await labelHelper(e, o, getNodeClasses(o)), h = Math.max(p.width + (o.padding ?? 0) * 2, o?.width ?? 0), g = Math.max(p.height + (o.padding ?? 0) * 2, o?.height ?? 0), _ = -h / 2, v = -g / 2, { cssStyles: y } = o, b = at.svg(u), x = userNodeOverrides(o, {
		fill: s.noteBkgColor,
		stroke: s.noteBorderColor
	});
	o.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
	let S = b.rectangle(_, v, h, g, x), C = u.insert(() => S, ":first-child");
	return C.attr("class", "basic label-container outer-path"), m.attr("class", "label noteLabel"), y && o.look !== "handDrawn" && C.selectAll("path").attr("style", y), l && o.look !== "handDrawn" && C.selectAll("path").attr("style", l), m.attr("transform", `translate(${-p.width / 2 - (p.x - (p.left ?? 0))}, ${-(p.height / 2) - (p.y - (p.top ?? 0))})`), updateNodeBounds(o, C), o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, u;
}
__name(note, "note");
var createDecisionBoxPathD = /* @__PURE__ */ __name((e, o, s) => [
	`M${e + s / 2},${o}`,
	`L${e + s},${o - s / 2}`,
	`L${e + s / 2},${o - s}`,
	`L${e},${o - s / 2}`,
	"Z"
].join(" "), "createDecisionBoxPathD");
async function question(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let { shapeSvg: l, bbox: u } = await labelHelper(e, o, getNodeClasses(o)), d = u.width + (o.padding ?? 0) + (u.height + (o.padding ?? 0)), f = .5, p = [
		{
			x: d / 2,
			y: 0
		},
		{
			x: d,
			y: -d / 2
		},
		{
			x: d / 2,
			y: -d
		},
		{
			x: 0,
			y: -d / 2
		}
	], m, { cssStyles: h } = o;
	if (o.look === "handDrawn") {
		let e = at.svg(l), s = userNodeOverrides(o, {}), c = createDecisionBoxPathD(0, 0, d), u = e.path(c, s);
		m = l.insert(() => u, ":first-child").attr("transform", `translate(${-d / 2 + f}, ${d / 2})`), h && m.attr("style", h);
	} else m = insertPolygonShape(l, d, d, p), m.attr("transform", `translate(${-d / 2 + f}, ${d / 2})`);
	return c && m.attr("style", c), updateNodeBounds(o, m), o.calcIntersect = function(e, o) {
		let s = e.width, c = [
			{
				x: s / 2,
				y: 0
			},
			{
				x: s,
				y: -s / 2
			},
			{
				x: s / 2,
				y: -s
			},
			{
				x: 0,
				y: -s / 2
			}
		], l = intersect_default.polygon(e, c, o);
		return {
			x: l.x - .5,
			y: l.y - .5
		};
	}, o.intersect = function(e) {
		return this.calcIntersect(o, e);
	}, l;
}
__name(question, "question");
async function rect_left_inv_arrow(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 21 : l ?? 0, d = o.look === "neo" ? 12 : l ?? 0, { shapeSvg: f, bbox: p, label: m } = await labelHelper(e, o, getNodeClasses(o)), h = p.width + (o.look === "neo" ? u * 2 : u), g = Math.max(p.height + (o.look === "neo" ? d * 2 : d), o.height ?? 0), _ = g / 4, v = -Math.max(h, (o.width ?? 0) - _) / 2, y = -g / 2, b = y / 2, x = [
		{
			x: v + b,
			y
		},
		{
			x: v,
			y: 0
		},
		{
			x: v + b,
			y: -y
		},
		{
			x: -v,
			y: -y
		},
		{
			x: -v,
			y
		}
	], { cssStyles: S } = o, C = at.svg(f), E = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (E.roughness = 0, E.fillStyle = "solid");
	let D = createPathFromPoints(x), O = C.path(D, E), k = f.insert(() => O, ":first-child");
	return k.attr("class", "basic label-container outer-path"), S && o.look !== "handDrawn" && k.selectAll("path").attr("style", S), c && o.look !== "handDrawn" && k.selectAll("path").attr("style", c), k.attr("transform", `translate(${-b / 2},0)`), m.attr("transform", `translate(${-b / 2 - p.width / 2 - (p.x - (p.left ?? 0))}, ${-(p.height / 2) - (p.y - (p.top ?? 0))})`), updateNodeBounds(o, k), o.intersect = function(e) {
		return intersect_default.polygon(o, x, e);
	}, f;
}
__name(rect_left_inv_arrow, "rect_left_inv_arrow");
async function rectWithTitle(e, c) {
	let { labelStyles: l, nodeStyles: u } = styles2String(c);
	c.labelStyle = l;
	let f;
	f = c.cssClasses ? "node " + c.cssClasses : "node default";
	let p = e.insert("g").attr("class", f).attr("id", c.domId || c.id), m = p.insert("g"), g = p.insert("g").attr("class", "label").attr("style", u), _ = c.description, v = c.label, y = await createLabel_default(g, v, c.labelStyle, !0, !0), b = {
		width: 0,
		height: 0
	};
	if (getEffectiveHtmlLabels(getConfig2())) {
		let e = y.children[0], o = select_default(y);
		b = e.getBoundingClientRect(), o.attr("width", b.width), o.attr("height", b.height);
	}
	log.info("Text 2", _);
	let x = _ || [], S = y.getBBox(), C = await createLabel_default(g, Array.isArray(x) ? x.join("<br/>") : x, c.labelStyle, !0, !0), E = C.children[0], D = select_default(C);
	b = E.getBoundingClientRect(), D.attr("width", b.width), D.attr("height", b.height);
	let O = (c.padding || 0) / 2;
	select_default(C).attr("transform", "translate( " + (b.width > S.width ? 0 : (S.width - b.width) / 2) + ", " + (S.height + O + 5) + ")"), select_default(y).attr("transform", "translate( " + (b.width < S.width ? 0 : -(S.width - b.width) / 2) + ", 0)"), b = g.node().getBBox(), g.attr("transform", "translate(" + -b.width / 2 + ", " + (-b.height / 2 - O + 3) + ")");
	let k = b.width + (c.padding || 0), A = b.height + (c.padding || 0), j = -b.width / 2 - O, M = -b.height / 2 - O, N, P;
	if (c.look === "handDrawn") {
		let e = at.svg(p), s = userNodeOverrides(c, {}), l = e.path(createRoundedRectPathD(j, M, k, A, c.rx || 0), s), u = e.line(-b.width / 2 - O, -b.height / 2 - O + S.height + O, b.width / 2 + O, -b.height / 2 - O + S.height + O, s);
		P = p.insert(() => (log.debug("Rough node insert CXC", l), u), ":first-child"), N = p.insert(() => (log.debug("Rough node insert CXC", l), l), ":first-child");
	} else N = m.insert("rect", ":first-child"), P = m.insert("line"), N.attr("class", "outer title-state").attr("style", u).attr("x", -b.width / 2 - O).attr("y", -b.height / 2 - O).attr("width", b.width + (c.padding || 0)).attr("height", b.height + (c.padding || 0)), P.attr("class", "divider").attr("x1", -b.width / 2 - O).attr("x2", b.width / 2 + O).attr("y1", -b.height / 2 - O + S.height + O).attr("y2", -b.height / 2 - O + S.height + O);
	return updateNodeBounds(c, N), c.intersect = function(e) {
		return intersect_default.rect(c, e);
	}, p;
}
__name(rectWithTitle, "rectWithTitle");
async function roundedRect(e, o, { config: { themeVariables: s } }) {
	let c = s?.radius ?? 5;
	return drawRect(e, o, {
		rx: c,
		ry: c,
		classes: "",
		labelPaddingX: (o?.padding ?? 0) * 1,
		labelPaddingY: (o?.padding ?? 0) * 1
	});
}
__name(roundedRect, "roundedRect");
var FRAME_WIDTH = 8;
async function shadedProcess(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.look === "neo" ? 16 : o.padding ?? 0, u = o.look === "neo" ? 12 : o.padding ?? 0, { shapeSvg: d, bbox: f, label: p } = await labelHelper(e, o, getNodeClasses(o)), m = (o?.width ?? f.width) + l * 2 + (o.look === "neo" ? FRAME_WIDTH : FRAME_WIDTH * 2), h = (o?.height ?? f.height) + u * 2, g = m - FRAME_WIDTH, v = h, y = FRAME_WIDTH - m / 2, b = -h / 2, { cssStyles: x } = o, S = at.svg(d), C = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
	let E = [
		{
			x: y,
			y: b
		},
		{
			x: y + g,
			y: b
		},
		{
			x: y + g,
			y: b + v
		},
		{
			x: y - FRAME_WIDTH,
			y: b + v
		},
		{
			x: y - FRAME_WIDTH,
			y: b
		},
		{
			x: y,
			y: b
		},
		{
			x: y,
			y: b + v
		}
	], D = S.polygon(E.map((e) => [e.x, e.y]), C), O = d.insert(() => D, ":first-child");
	return O.attr("class", "basic label-container outer-path").attr("style", handleUndefinedAttr(x)), c && o.look !== "handDrawn" && O.selectAll("path").attr("style", c), x && o.look !== "handDrawn" && O.selectAll("path").attr("style", c), p.attr("transform", `translate(${FRAME_WIDTH / 2 - f.width / 2 - (f.x - (f.left ?? 0))}, ${-(f.height / 2) - (f.y - (f.top ?? 0))})`), updateNodeBounds(o, O), o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, d;
}
__name(shadedProcess, "shadedProcess");
async function slopedRect(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 16 : l, d = o.look === "neo" ? 12 : l;
	(o.width || o.height) && (o.width = Math.max((o?.width ?? 0) - u * 2, 10), o.height = Math.max((o?.height ?? 0) / 1.5 - d * 2, 10));
	let { shapeSvg: f, bbox: p, label: m } = await labelHelper(e, o, getNodeClasses(o)), h = (o?.width ? o?.width : p.width) + u * 2, g = ((o?.height ? o?.height : p.height) + d * 2) * 1.5, _ = h, v = g / 1.5, y = -_ / 2, b = -v / 2, { cssStyles: x } = o, S = at.svg(f), C = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
	let E = [
		{
			x: y,
			y: b
		},
		{
			x: y,
			y: b + v
		},
		{
			x: y + _,
			y: b + v
		},
		{
			x: y + _,
			y: b - v / 2
		}
	], D = createPathFromPoints(E), O = S.path(D, C), k = f.insert(() => O, ":first-child");
	return k.attr("class", "basic label-container  outer-path"), x && o.look !== "handDrawn" && k.selectChildren("path").attr("style", x), c && o.look !== "handDrawn" && k.selectChildren("path").attr("style", c), k.attr("transform", `translate(0, ${v / 4})`), m.attr("transform", `translate(${-_ / 2 + (o.padding ?? 0) - (p.x - (p.left ?? 0))}, ${-v / 4 + (o.padding ?? 0) - (p.y - (p.top ?? 0))})`), updateNodeBounds(o, k), o.intersect = function(e) {
		return intersect_default.polygon(o, E, e);
	}, f;
}
__name(slopedRect, "slopedRect");
async function squareRect(e, o) {
	let s = o.padding ?? 0, c = o.look === "neo" ? 16 : s * 2, l = o.look === "neo" ? 12 : s;
	return drawRect(e, o, {
		rx: 0,
		ry: 0,
		classes: "",
		labelPaddingX: o.labelPaddingX ?? c,
		labelPaddingY: l
	});
}
__name(squareRect, "squareRect");
async function stadium(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 20 : l, d = o.look === "neo" ? 12 : l, { shapeSvg: f, bbox: p } = await labelHelper(e, o, getNodeClasses(o)), m = p.height + (o.look === "neo" ? d * 2 : d), h = p.width + m / 4 + (o.look === "neo" ? u * 2 : u), g = m / 2, { cssStyles: _ } = o, v = at.svg(f), y = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
	let b = [
		{
			x: -h / 2 + g,
			y: -m / 2
		},
		{
			x: h / 2 - g,
			y: -m / 2
		},
		...generateCirclePoints(-h / 2 + g, 0, g, 50, 90, 270),
		{
			x: h / 2 - g,
			y: m / 2
		},
		...generateCirclePoints(h / 2 - g, 0, g, 50, 270, 450)
	], x = createPathFromPoints(b), S = v.path(x, y), C = f.insert(() => S, ":first-child");
	return C.attr("class", "basic label-container outer-path"), _ && o.look !== "handDrawn" && C.selectChildren("path").attr("style", _), c && o.look !== "handDrawn" && C.selectChildren("path").attr("style", c), updateNodeBounds(o, C), o.intersect = function(e) {
		return intersect_default.polygon(o, b, e);
	}, f;
}
__name(stadium, "stadium");
async function state(e, o) {
	return drawRect(e, o, {
		rx: o.look === "neo" ? 3 : 5,
		ry: o.look === "neo" ? 3 : 5,
		classes: "flowchart-node"
	});
}
__name(state, "state");
function stateEnd(e, o, { config: { themeVariables: s } }) {
	let { labelStyles: c, nodeStyles: l } = styles2String(o);
	o.labelStyle = c;
	let { cssStyles: u } = o, { lineColor: d, stateBorder: f, nodeBorder: p, nodeShadow: m } = s;
	(o.width || o.height) && ((o.width ?? 0) < 14 && (o.width = 14), (o.height ?? 0) < 14 && (o.height = 14)), o.width ||= 14, o.height ||= 14;
	let h = e.insert("g").attr("class", "node default").attr("id", o.domId ?? o.id), g = at.svg(h), _ = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
	let v = g.circle(0, 0, o.width, {
		..._,
		stroke: d,
		strokeWidth: 2
	}), y = f ?? p, b = (o.width ?? 0) * 5 / 14, x = g.circle(0, 0, b, {
		..._,
		fill: y,
		stroke: y,
		strokeWidth: 2,
		fillStyle: "solid"
	}), S = h.insert(() => v, ":first-child");
	if (S.insert(() => x), o.look !== "handDrawn" && S.attr("class", "outer-path"), u && S.selectAll("path").attr("style", u), l && S.selectAll("path").attr("style", l), o.width < 25 && m && o.look !== "handDrawn") {
		let o = e.node()?.ownerSVGElement?.id ?? "", s = o ? `${o}-drop-shadow-small` : "drop-shadow-small";
		S.attr("style", `filter:url(#${s})`);
	}
	return updateNodeBounds(o, S), o.intersect = function(e) {
		return intersect_default.circle(o, (o.width ?? 0) / 2, e);
	}, h;
}
__name(stateEnd, "stateEnd");
function stateStart(e, o, { config: { themeVariables: s } }) {
	let { lineColor: c, nodeShadow: l } = s;
	(o.width || o.height) && ((o.width ?? 0) < 14 && (o.width = 14), (o.height ?? 0) < 14 && (o.height = 14)), o.width ||= 14, o.height ||= 14;
	let u = e.insert("g").attr("class", "node default").attr("id", o.domId || o.id), d;
	if (o.look === "handDrawn") {
		let e = at.svg(u).circle(0, 0, o.width, solidStateFill(c));
		d = u.insert(() => e), d.attr("class", "state-start").attr("r", (o.width ?? 7) / 2).attr("width", o.width ?? 14).attr("height", o.height ?? 14);
	} else d = u.insert("circle", ":first-child"), d.attr("class", "state-start").attr("r", (o.width ?? 7) / 2).attr("width", o.width ?? 14).attr("height", o.height ?? 14);
	if (o.width < 25 && l && o.look !== "handDrawn") {
		let o = e.node()?.ownerSVGElement?.id ?? "", s = o ? `${o}-drop-shadow-small` : "drop-shadow-small";
		d.attr("style", `filter:url(#${s})`);
	}
	return updateNodeBounds(o, d), o.intersect = function(e) {
		return intersect_default.circle(o, (o.width ?? 7) / 2, e);
	}, u;
}
__name(stateStart, "stateStart");
var FRAME_WIDTH2 = 8;
async function subroutine(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o?.padding ?? 8, u = o.look === "neo" ? 28 : l, d = o.look === "neo" ? 12 : l, { shapeSvg: f, bbox: p } = await labelHelper(e, o, getNodeClasses(o)), m = Math.max(p.width + 2 * FRAME_WIDTH2 + u, o.width ?? 0), h = Math.max(p.height + d, o.height ?? 0), g = m - 2 * FRAME_WIDTH2, v = h, y = -m / 2, b = -h / 2, x = [
		{
			x: 0,
			y: 0
		},
		{
			x: g,
			y: 0
		},
		{
			x: g,
			y: -v
		},
		{
			x: 0,
			y: -v
		},
		{
			x: 0,
			y: 0
		},
		{
			x: -8,
			y: 0
		},
		{
			x: g + 8,
			y: 0
		},
		{
			x: g + 8,
			y: -v
		},
		{
			x: -8,
			y: -v
		},
		{
			x: -8,
			y: 0
		}
	];
	if (o.look === "handDrawn") {
		let e = at.svg(f), s = userNodeOverrides(o, {}), c = e.rectangle(y, b, g + 16, v, s), l = e.line(y + FRAME_WIDTH2, b, y + FRAME_WIDTH2, b + v, s), u = e.line(y + FRAME_WIDTH2 + g, b, y + FRAME_WIDTH2 + g, b + v, s);
		f.insert(() => l, ":first-child"), f.insert(() => u, ":first-child");
		let d = f.insert(() => c, ":first-child"), { cssStyles: p } = o;
		d.attr("class", "basic label-container").attr("style", handleUndefinedAttr(p)), updateNodeBounds(o, d);
	} else {
		let e = insertPolygonShape(f, g, v, x);
		c && e.attr("style", c), updateNodeBounds(o, e);
	}
	return o.intersect = function(e) {
		return intersect_default.polygon(o, x, e);
	}, f;
}
__name(subroutine, "subroutine");
var TAG_RATIO = .2;
async function taggedRect(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 16 : l, d = o.look === "neo" ? 12 : l;
	(o.width || o.height) && (o.height = Math.max((o?.height ?? 0) - d * 2, 10), o.width = Math.max((o?.width ?? 0) - u * 2 - TAG_RATIO * (o.height + d * 2), 10));
	let { shapeSvg: f, bbox: p } = await labelHelper(e, o, getNodeClasses(o)), m = (o?.height ? o?.height : p.height) + d * 2, h = TAG_RATIO * m, g = TAG_RATIO * m, _ = (o?.width ? o?.width : p.width) + u * 2 + h - h, v = m, y = -_ / 2, b = -v / 2, { cssStyles: x } = o, S = at.svg(f), C = userNodeOverrides(o, {}), E = [
		{
			x: y - h / 2,
			y: b
		},
		{
			x: y + _ + h / 2,
			y: b
		},
		{
			x: y + _ + h / 2,
			y: b + v
		},
		{
			x: y - h / 2,
			y: b + v
		}
	], D = [
		{
			x: y + _ - h / 2,
			y: b + v
		},
		{
			x: y + _ + h / 2,
			y: b + v
		},
		{
			x: y + _ + h / 2,
			y: b + v - g
		}
	];
	o.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
	let O = createPathFromPoints(E), k = S.path(O, C), A = createPathFromPoints(D), j = S.path(A, {
		...C,
		fillStyle: "solid"
	}), M = f.insert(() => j, ":first-child");
	return M.insert(() => k, ":first-child"), M.attr("class", "basic label-container outer-path"), x && o.look !== "handDrawn" && M.selectAll("path").attr("style", x), c && o.look !== "handDrawn" && M.selectAll("path").attr("style", c), updateNodeBounds(o, M), o.intersect = function(e) {
		return intersect_default.polygon(o, E, e);
	}, f;
}
__name(taggedRect, "taggedRect");
async function taggedWaveEdgedRectangle(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let { shapeSvg: l, bbox: u, label: d } = await labelHelper(e, o, getNodeClasses(o)), f = Math.max(u.width + (o.padding ?? 0) * 2, o?.width ?? 0), p = Math.max(u.height + (o.padding ?? 0) * 2, o?.height ?? 0), m = p / 8, h = .2 * f, g = .2 * p, _ = p + m, { cssStyles: v } = o, y = at.svg(l), b = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (b.roughness = 0, b.fillStyle = "solid");
	let x = [
		{
			x: -f / 2 - f / 2 * .1,
			y: _ / 2
		},
		...generateFullSineWavePoints(-f / 2 - f / 2 * .1, _ / 2, f / 2 + f / 2 * .1, _ / 2, m, .8),
		{
			x: f / 2 + f / 2 * .1,
			y: -_ / 2
		},
		{
			x: -f / 2 - f / 2 * .1,
			y: -_ / 2
		}
	], S = -f / 2 + f / 2 * .1, C = -_ / 2 - g * .4, E = [
		{
			x: S + f - h,
			y: (C + p) * 1.3
		},
		{
			x: S + f,
			y: C + p - g
		},
		{
			x: S + f,
			y: (C + p) * .9
		},
		...generateFullSineWavePoints(S + f, (C + p) * 1.25, S + f - h, (C + p) * 1.3, -p * .02, .5)
	], D = createPathFromPoints(x), O = y.path(D, b), k = createPathFromPoints(E), A = y.path(k, {
		...b,
		fillStyle: "solid"
	}), j = l.insert(() => A, ":first-child");
	return j.insert(() => O, ":first-child"), j.attr("class", "basic label-container outer-path"), v && o.look !== "handDrawn" && j.selectAll("path").attr("style", v), c && o.look !== "handDrawn" && j.selectAll("path").attr("style", c), j.attr("transform", `translate(0,${-m / 2})`), d.attr("transform", `translate(${-f / 2 + (o.padding ?? 0) - (u.x - (u.left ?? 0))},${-p / 2 + (o.padding ?? 0) - m / 2 - (u.y - (u.top ?? 0))})`), updateNodeBounds(o, j), o.intersect = function(e) {
		return intersect_default.polygon(o, x, e);
	}, l;
}
__name(taggedWaveEdgedRectangle, "taggedWaveEdgedRectangle");
async function text(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let { shapeSvg: l, bbox: u } = await labelHelper(e, o, getNodeClasses(o)), d = Math.max(u.width + (o.padding ?? 0), o?.width || 0), f = Math.max(u.height + (o.padding ?? 0), o?.height || 0), p = -d / 2, m = -f / 2, h = l.insert("rect", ":first-child");
	return h.attr("class", "text").attr("style", c).attr("rx", 0).attr("ry", 0).attr("x", p).attr("y", m).attr("width", d).attr("height", f), updateNodeBounds(o, h), o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, l;
}
__name(text, "text");
var createCylinderPathD3 = /* @__PURE__ */ __name((e, o, s, c, l, u) => `M${e},${o}
    a${l},${u} 0,0,1 0,${-c}
    l${s},0
    a${l},${u} 0,0,1 0,${c}
    M${s},${-c}
    a${l},${u} 0,0,0 0,${c}
    l${-s},0`, "createCylinderPathD"), createOuterCylinderPathD3 = /* @__PURE__ */ __name((e, o, s, c, l, u) => [
	`M${e},${o}`,
	`M${e + s},${o}`,
	`a${l},${u} 0,0,0 0,${-c}`,
	`l${-s},0`,
	`a${l},${u} 0,0,0 0,${c}`,
	`l${s},0`
].join(" "), "createOuterCylinderPathD"), createInnerCylinderPathD3 = /* @__PURE__ */ __name((e, o, s, c, l, u) => [`M${e + s / 2},${-c / 2}`, `a${l},${u} 0,0,0 0,${c}`].join(" "), "createInnerCylinderPathD"), MIN_HEIGHT4 = 5, MIN_WIDTH5 = 10;
async function tiltedCylinder(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 12 : l / 2, d = o.height ?? 0;
	if (o.height && (o.height -= u, o.height < MIN_HEIGHT4 && (o.height = MIN_HEIGHT4)), o.width) {
		let e = d / 2 / (2.5 + d / 50);
		o.width = o.width - u - e * 3, o.width < MIN_WIDTH5 && (o.width = MIN_WIDTH5);
	}
	let { shapeSvg: f, bbox: p, label: m } = await labelHelper(e, o, getNodeClasses(o)), h = Math.max(o.height ?? 0, p.height) + u, g = h / 2, v = g / (2.5 + h / 50), y = Math.max(o.width ?? 0, p.width) + v + u, { cssStyles: b } = o, x;
	if (o.look === "handDrawn") {
		let e = at.svg(f), s = createOuterCylinderPathD3(0, 0, y, h, v, g), c = createInnerCylinderPathD3(0, 0, y, h, v, g), l = e.path(s, userNodeOverrides(o, {})), u = e.path(c, userNodeOverrides(o, { fill: "none" }));
		x = f.insert(() => u, ":first-child"), x = f.insert(() => l, ":first-child"), x.attr("class", "basic label-container"), b && x.attr("style", b);
	} else {
		let e = createCylinderPathD3(0, 0, y, h, v, g);
		x = f.insert("path", ":first-child").attr("d", e).attr("class", "basic label-container").attr("style", handleUndefinedAttr(b)).attr("style", c), x.attr("class", "basic label-container outer-path"), b && x.selectAll("path").attr("style", b), c && x.selectAll("path").attr("style", c);
	}
	return x.attr("label-offset-x", v), x.attr("transform", `translate(${-y / 2}, ${h / 2} )`), m.attr("transform", `translate(${-(p.width / 2) - v - (p.x - (p.left ?? 0))}, ${-(p.height / 2) - (p.y - (p.top ?? 0))})`), updateNodeBounds(o, x), o.intersect = function(e) {
		let s = intersect_default.rect(o, e), c = s.y - (o.y ?? 0);
		if (g != 0 && (Math.abs(c) < (o.height ?? 0) / 2 || Math.abs(c) == (o.height ?? 0) / 2 && Math.abs(s.x - (o.x ?? 0)) > (o.width ?? 0) / 2 - v)) {
			let l = v * v * (1 - c * c / (g * g));
			l != 0 && (l = Math.sqrt(Math.abs(l))), l = v - l, e.x - (o.x ?? 0) > 0 && (l = -l), s.x += l;
		}
		return s;
	}, f;
}
__name(tiltedCylinder, "tiltedCylinder");
async function trapezoid(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = (o.look, l), d = o.look === "neo" ? l * 2 : l, { shapeSvg: f, bbox: p } = await labelHelper(e, o, getNodeClasses(o)), m = Math.max(p.height + u, o.height ?? 0), h = Math.max(p.width + d, (o.width ?? 0) - m), g = [
		{
			x: -3 * m / 6,
			y: 0
		},
		{
			x: h + 3 * m / 6,
			y: 0
		},
		{
			x: h,
			y: -m
		},
		{
			x: 0,
			y: -m
		}
	], _, { cssStyles: v } = o;
	if (o.look === "handDrawn") {
		let e = at.svg(f), s = userNodeOverrides(o, {}), c = createPathFromPoints(g), l = e.path(c, s);
		_ = f.insert(() => l, ":first-child").attr("transform", `translate(${-h / 2}, ${m / 2})`), v && _.attr("style", v);
	} else _ = insertPolygonShape(f, h, m, g);
	return c && _.attr("style", c), o.width = h, o.height = m, updateNodeBounds(o, _), o.intersect = function(e) {
		return intersect_default.polygon(o, g, e);
	}, f;
}
__name(trapezoid, "trapezoid");
async function trapezoidalPentagon(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 16 : l, d = o.look === "neo" ? 12 : l;
	(o.width || o.height) && (o.height = (o.height ?? 0) - d * 2, o.height < 5 && (o.height = 5), o.width = (o.width ?? 0) - u * 2, o.width < 15 && (o.width = 15));
	let { shapeSvg: f, bbox: p } = await labelHelper(e, o, getNodeClasses(o)), m = (o?.width ? o?.width : p.width) + u * 2, h = (o?.height ? o?.height : p.height) + d * 2, { cssStyles: g } = o, _ = at.svg(f), v = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
	let y = [
		{
			x: -m / 2 * .8,
			y: -h / 2
		},
		{
			x: m / 2 * .8,
			y: -h / 2
		},
		{
			x: m / 2,
			y: -h / 2 * .6
		},
		{
			x: m / 2,
			y: h / 2
		},
		{
			x: -m / 2,
			y: h / 2
		},
		{
			x: -m / 2,
			y: -h / 2 * .6
		}
	], b = createPathFromPoints(y), x = _.path(b, v), S = f.insert(() => x, ":first-child");
	return S.attr("class", "basic label-container outer-path"), g && o.look !== "handDrawn" && S.selectChildren("path").attr("style", g), c && o.look !== "handDrawn" && S.selectChildren("path").attr("style", c), updateNodeBounds(o, S), o.intersect = function(e) {
		return intersect_default.polygon(o, y, e);
	}, f;
}
__name(trapezoidalPentagon, "trapezoidalPentagon");
var MIN_HEIGHT5 = 10, MIN_WIDTH6 = 10;
async function triangle(e, s) {
	let { labelStyles: c, nodeStyles: l } = styles2String(s);
	s.labelStyle = c;
	let u = s.padding ?? 0, d = s.look === "neo" ? u * 2 : u;
	(s.width || s.height) && (s.width = ((s?.width ?? 0) - d) / 2, s.width < MIN_WIDTH6 && (s.width = MIN_WIDTH6), s.height = s?.height ?? 0, s.height < MIN_HEIGHT5 && (s.height = MIN_HEIGHT5));
	let { shapeSvg: f, bbox: p, label: g } = await labelHelper(e, s, getNodeClasses(s)), _ = evaluate(getConfig2().flowchart?.htmlLabels), v = (s?.width ? s?.width : p.width) + d, y = s?.height ? s?.height : v + p.height, b = y, x = [
		{
			x: 0,
			y: 0
		},
		{
			x: b,
			y: 0
		},
		{
			x: b / 2,
			y: -y
		}
	], { cssStyles: S } = s, C = at.svg(f), E = userNodeOverrides(s, {});
	s.look !== "handDrawn" && (E.roughness = 0, E.fillStyle = "solid");
	let D = createPathFromPoints(x), O = C.path(D, E), k = f.insert(() => O, ":first-child").attr("transform", `translate(${-y / 2}, ${y / 2})`).attr("class", "outer-path");
	return S && s.look !== "handDrawn" && k.selectChildren("path").attr("style", S), l && s.look !== "handDrawn" && k.selectChildren("path").attr("style", l), s.width = v, s.height = y, updateNodeBounds(s, k), g.attr("transform", `translate(${-p.width / 2 - (p.x - (p.left ?? 0))}, ${y / 2 - (p.height + (s.padding ?? 0) / (_ ? 2 : 1) - (p.y - (p.top ?? 0)))})`), s.intersect = function(e) {
		return log.info("Triangle intersect", s, x, e), intersect_default.polygon(s, x, e);
	}, f;
}
__name(triangle, "triangle");
async function waveEdgedRectangle(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 16 : l, d = o.look === "neo" ? 12 : l, f = !0;
	(o.width || o.height) && (f = !1, o.width = (o?.width ?? 0) - u * 2, o.width < 10 && (o.width = 10), o.height = (o?.height ?? 0) - d * 2, o.height < 10 && (o.height = 10));
	let { shapeSvg: p, bbox: m, label: h } = await labelHelper(e, o, getNodeClasses(o)), g = (o?.width ? o?.width : m.width) + (u ?? 0) * 2, _ = (o?.height ? o?.height : m.height) + (d ?? 0) * 2, v = o.look === "neo" ? _ / 4 : _ / 8, y = _ + (f ? v : -v), { cssStyles: b } = o, x = 14 - g, S = x > 0 ? x / 2 : 0, C = at.svg(p), E = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (E.roughness = 0, E.fillStyle = "solid");
	let D = [
		{
			x: -g / 2 - S,
			y: y / 2
		},
		...generateFullSineWavePoints(-g / 2 - S, y / 2, g / 2 + S, y / 2, v, .8),
		{
			x: g / 2 + S,
			y: -y / 2
		},
		{
			x: -g / 2 - S,
			y: -y / 2
		}
	], O = createPathFromPoints(D), k = C.path(O, E), A = p.insert(() => k, ":first-child");
	return A.attr("class", "basic label-container outer-path"), b && o.look !== "handDrawn" && A.selectAll("path").attr("style", b), c && o.look !== "handDrawn" && A.selectAll("path").attr("style", c), A.attr("transform", `translate(0,${-v / 2})`), h.attr("transform", `translate(${-g / 2 + (o.padding ?? 0) - (m.x - (m.left ?? 0))},${-_ / 2 + (o.padding ?? 0) - v - (m.y - (m.top ?? 0))})`), updateNodeBounds(o, A), o.intersect = function(e) {
		return intersect_default.polygon(o, D, e);
	}, p;
}
__name(waveEdgedRectangle, "waveEdgedRectangle");
async function waveRectangle(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.padding ?? 0, u = o.look === "neo" ? 16 : l, d = o.look === "neo" ? 20 : l;
	if (o.width || o.height) {
		o.width = o?.width ?? 0, o.width < 20 && (o.width = 20), o.height = o?.height ?? 0, o.height < 10 && (o.height = 10);
		let e = Math.min(o.height * .2, o.height / 4);
		o.height = Math.ceil(o.height - d - 20 / 9 * e), o.width -= u * 2;
	}
	let { shapeSvg: f, bbox: p } = await labelHelper(e, o, getNodeClasses(o)), m = (o?.width ? o?.width : p.width) + u * 2, h = (o?.height ? o?.height : p.height) + d, g = h / 8, _ = h + g * 2, { cssStyles: v } = o, y = at.svg(f), b = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (b.roughness = 0, b.fillStyle = "solid");
	let x = [
		{
			x: -m / 2,
			y: _ / 2
		},
		...generateFullSineWavePoints(-m / 2, _ / 2, m / 2, _ / 2, g, 1),
		{
			x: m / 2,
			y: -_ / 2
		},
		...generateFullSineWavePoints(m / 2, -_ / 2, -m / 2, -_ / 2, g, -1)
	], S = createPathFromPoints(x), C = y.path(S, b), E = f.insert(() => C, ":first-child");
	return E.attr("class", "basic label-container"), v && o.look !== "handDrawn" && E.selectAll("path").attr("style", v), c && o.look !== "handDrawn" && E.selectAll("path").attr("style", c), updateNodeBounds(o, E), o.intersect = function(e) {
		return intersect_default.polygon(o, x, e);
	}, f;
}
__name(waveRectangle, "waveRectangle");
var rectOffset = 10;
async function windowPane(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let l = o.look === "neo" ? 16 : o.padding ?? 0, u = o.look === "neo" ? 12 : o.padding ?? 0;
	(o.width || o.height) && (o.width = Math.max((o?.width ?? 0) - l * 2 - rectOffset, 10), o.height = Math.max((o?.height ?? 0) - u * 2 - rectOffset, 10));
	let { shapeSvg: d, bbox: f, label: p } = await labelHelper(e, o, getNodeClasses(o)), m = (o?.width ? o?.width : f.width) + l * 2 + rectOffset, h = (o?.height ? o?.height : f.height) + u * 2 + rectOffset, g = m - rectOffset, _ = h - rectOffset, v = -g / 2, y = -_ / 2, { cssStyles: b } = o, x = at.svg(d), S = userNodeOverrides(o, {}), C = [
		{
			x: v - rectOffset,
			y: y - rectOffset
		},
		{
			x: v - rectOffset,
			y: y + _
		},
		{
			x: v + g,
			y: y + _
		},
		{
			x: v + g,
			y: y - rectOffset
		}
	], E = `M${v - rectOffset},${y - rectOffset} L${v + g},${y - rectOffset} L${v + g},${y + _} L${v - rectOffset},${y + _} L${v - rectOffset},${y - rectOffset}
                M${v - rectOffset},${y} L${v + g},${y}
                M${v},${y - rectOffset} L${v},${y + _}`;
	o.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
	let D = x.path(E, S), O = d.insert(() => D, ":first-child");
	return O.attr("transform", `translate(${rectOffset / 2}, ${rectOffset / 2})`), O.attr("class", "basic label-container outer-path"), b && o.look !== "handDrawn" && O.selectAll("path").attr("style", b), c && o.look !== "handDrawn" && O.selectAll("path").attr("style", c), p.attr("transform", `translate(${-(f.width / 2) + rectOffset / 2 - (f.x - (f.left ?? 0))}, ${-(f.height / 2) + rectOffset / 2 - (f.y - (f.top ?? 0))})`), updateNodeBounds(o, O), o.intersect = function(e) {
		return intersect_default.polygon(o, C, e);
	}, d;
}
__name(windowPane, "windowPane");
var COLOR_THEMES = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), REDUX_THEMES = /* @__PURE__ */ new Set([
	"redux",
	"redux-dark",
	"redux-color",
	"redux-dark-color"
]);
async function erBox(e, o) {
	let c = o;
	c.alias && (o.label = c.alias);
	let { theme: l, themeVariables: u } = getConfig(), { rowEven: d, rowOdd: p, nodeBorder: h, borderColorArray: g } = u;
	if (o.look === "handDrawn") {
		let { themeVariables: s } = getConfig(), { background: c } = s;
		await erBox(e, {
			...o,
			id: o.id + "-background",
			domId: (o.domId || o.id) + "-background",
			look: "default",
			cssStyles: ["stroke: none", `fill: ${c}`]
		});
	}
	let _ = getConfig();
	o.useHtmlLabels = _.htmlLabels;
	let y = _.er?.diagramPadding ?? 10, b = _.er?.entityPadding ?? 6, { cssStyles: x } = o, { labelStyles: S, nodeStyles: C } = styles2String(o);
	if (c.attributes.length === 0 && o.label) {
		let s = {
			rx: 0,
			ry: 0,
			labelPaddingX: y,
			labelPaddingY: y * 1.5,
			classes: ""
		};
		calculateTextWidth(o.label, _) + s.labelPaddingX * 2 < _.er.minEntityWidth && (o.width = _.er.minEntityWidth);
		let u = await drawRect(e, o, s);
		if (l != null && COLOR_THEMES.has(l)) {
			let e = c.colorIndex ?? 0;
			u.attr("data-color-id", `color-${e % g.length}`);
		}
		if (!evaluate(_.htmlLabels)) {
			let e = u.select("text"), o = e.node()?.getBBox();
			e.attr("transform", `translate(${-o.width / 2}, 0)`);
		}
		return u;
	}
	_.htmlLabels || (y *= 1.25, b *= 1.25);
	let E = getNodeClasses(o);
	E ||= "node default";
	let D = e.insert("g").attr("class", E).attr("id", o.domId || o.id), O = await addText(D, o.label ?? "", _, 0, 0, ["name"], S);
	O.height += b;
	let k = 0, A = [], j = [], M = 0, N = 0, P = 0, F = 0, I = !0, R = !0;
	for (let e of c.attributes) {
		let o = await addText(D, e.type, _, 0, k, ["attribute-type"], S);
		M = Math.max(M, o.width + y);
		let s = await addText(D, e.name, _, 0, k, ["attribute-name"], S);
		N = Math.max(N, s.width + y);
		let c = await addText(D, e.keys.join(), _, 0, k, ["attribute-keys"], S);
		P = Math.max(P, c.width + y);
		let l = await addText(D, e.comment, _, 0, k, ["attribute-comment"], S);
		F = Math.max(F, l.width + y);
		let u = Math.max(o.height, s.height, c.height, l.height) + b;
		j.push({
			yOffset: k,
			rowHeight: u
		}), k += u;
	}
	let z = 4;
	P <= y && (I = !1, P = 0, z--), F <= y && (R = !1, F = 0, z--);
	let B = D.node().getBBox();
	if (O.width + y * 2 - (M + N + P + F) > 0) {
		let e = O.width + y * 2 - (M + N + P + F);
		M += e / z, N += e / z, P > 0 && (P += e / z), F > 0 && (F += e / z);
	}
	let V = M + N + P + F, H = at.svg(D), U = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (U.roughness = 0, U.fillStyle = "solid");
	let W = 0;
	j.length > 0 && (W = j.reduce((e, o) => e + (o?.rowHeight ?? 0), 0));
	let G = Math.max(B.width + y * 2, o?.width || 0, V), K = Math.max((W ?? 0) + O.height, o?.height || 0), q = -G / 2, J = -K / 2;
	if (D.selectAll("g:not(:first-child)").each((e, o, c) => {
		let l = select_default(c[o]), u = l.attr("transform"), d = 0, f = 0;
		if (u) {
			let e = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(u);
			e && (d = parseFloat(e[1]), f = parseFloat(e[2]), l.attr("class").includes("attribute-name") ? d += M : l.attr("class").includes("attribute-keys") ? d += M + N : l.attr("class").includes("attribute-comment") && (d += M + N + P));
		}
		l.attr("transform", `translate(${q + y / 2 + d}, ${f + J + O.height + b / 2})`);
	}), D.select(".name").attr("transform", "translate(" + -O.width / 2 + ", " + (J + b / 2) + ")"), l != null && COLOR_THEMES.has(l)) {
		let e = c.colorIndex ?? 0;
		D.attr("data-color-id", `color-${e % g.length}`);
	}
	let Y = H.rectangle(q, J, G, K, U), X = D.insert(() => Y, ":first-child").attr("class", "outer-path").attr("style", x.join(""));
	A.push(0);
	for (let [e, o] of j.entries()) {
		let s = (e + 1) % 2 == 0 && o.yOffset !== 0, c = H.rectangle(q, O.height + J + o?.yOffset, G, o?.rowHeight, {
			...U,
			fill: s ? d : p,
			stroke: h
		});
		D.insert(() => c, "g.label").attr("style", x.join("")).attr("class", `row-rect-${s ? "even" : "odd"}`);
	}
	let Z = 1e-4, Q = lineToPolygon(q, O.height + J, G + q, O.height + J, Z), $ = H.polygon(Q.map((e) => [e.x, e.y]), U);
	if (D.insert(() => $).attr("class", "divider"), Q = lineToPolygon(M + q, O.height + J, M + q, K + J, Z), $ = H.polygon(Q.map((e) => [e.x, e.y]), U), D.insert(() => $).attr("class", "divider"), I) {
		let e = M + N + q;
		Q = lineToPolygon(e, O.height + J, e, K + J, Z), $ = H.polygon(Q.map((e) => [e.x, e.y]), U), D.insert(() => $).attr("class", "divider");
	}
	if (R) {
		let e = M + N + P + q;
		Q = lineToPolygon(e, O.height + J, e, K + J, Z), $ = H.polygon(Q.map((e) => [e.x, e.y]), U), D.insert(() => $).attr("class", "divider");
	}
	for (let e of A) {
		let o = O.height + J + e;
		Q = lineToPolygon(q, o, G + q, o, Z), $ = H.polygon(Q.map((e) => [e.x, e.y]), U), D.insert(() => $).attr("class", "divider");
	}
	if (updateNodeBounds(o, X), C && o.look !== "handDrawn") if (l != null && REDUX_THEMES.has(l)) D.selectAll("path").attr("style", C);
	else {
		let e = C.split(";")?.filter((e) => e.includes("stroke"))?.map((e) => `${e}`).join("; ");
		D.selectAll("path").attr("style", e ?? ""), D.selectAll(".row-rect-even path").attr("style", C);
	}
	return o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, D;
}
__name(erBox, "erBox");
async function addText(e, o, c, l = 0, d = 0, f = [], p = "") {
	let h = e.insert("g").attr("class", `label ${f.join(" ")}`).attr("transform", `translate(${l}, ${d})`).attr("style", p);
	o !== parseGenericTypes(o) && (o = parseGenericTypes(o), o = o.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
	let g = h.node().appendChild(await createText(h, o, {
		width: calculateTextWidth(o, c) + 100,
		style: p,
		useHtmlLabels: c.htmlLabels
	}, c));
	if (o.includes("&lt;") || o.includes("&gt;")) {
		let e = g.children[0];
		for (e.textContent = e.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); e.childNodes[0];) e = e.childNodes[0], e.textContent = e.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
	}
	let _ = g.getBBox();
	if (evaluate(c.htmlLabels)) {
		let e = g.children[0];
		e.style.textAlign = "start";
		let o = select_default(g);
		_ = e.getBoundingClientRect(), o.attr("width", _.width), o.attr("height", _.height);
	}
	return _;
}
__name(addText, "addText");
function lineToPolygon(e, o, s, c, l) {
	return e === s ? [
		{
			x: e - l / 2,
			y: o
		},
		{
			x: e + l / 2,
			y: o
		},
		{
			x: s + l / 2,
			y: c
		},
		{
			x: s - l / 2,
			y: c
		}
	] : [
		{
			x: e,
			y: o - l / 2
		},
		{
			x: e,
			y: o + l / 2
		},
		{
			x: s,
			y: c + l / 2
		},
		{
			x: s,
			y: c - l / 2
		}
	];
}
__name(lineToPolygon, "lineToPolygon");
async function textHelper(e, o, s, c, l = s.class.padding ?? 12) {
	let u = c ? 0 : 3, d = e.insert("g").attr("class", getNodeClasses(o)).attr("id", o.domId || o.id), f = null, p = null, m = null, h = null, g = 0, _ = 0, v = 0;
	if (f = d.insert("g").attr("class", "annotation-group text"), o.annotations.length > 0) {
		let e = o.annotations[0];
		await addText2(f, { text: `\xAB${e}\xBB` }, 0), g = f.node().getBBox().height;
	}
	p = d.insert("g").attr("class", "label-group text"), await addText2(p, o, 0, ["font-weight: bolder"]);
	let y = p.node().getBBox();
	_ = y.height, m = d.insert("g").attr("class", "members-group text");
	let b = 0;
	for (let e of o.members) {
		let o = await addText2(m, e, b, [e.parseClassifier()]);
		b += o + u;
	}
	v = m.node().getBBox().height, v <= 0 && (v = l / 2), h = d.insert("g").attr("class", "methods-group text");
	let x = 0;
	for (let e of o.methods) {
		let o = await addText2(h, e, x, [e.parseClassifier()]);
		x += o + u;
	}
	let S = d.node().getBBox();
	if (f !== null) {
		let e = f.node().getBBox();
		f.attr("transform", `translate(${-e.width / 2})`);
	}
	return p.attr("transform", `translate(${-y.width / 2}, ${g})`), S = d.node().getBBox(), m.attr("transform", `translate(0, ${g + _ + l * 2})`), S = d.node().getBBox(), h.attr("transform", `translate(0, ${g + _ + (v ? v + l * 4 : l * 2)})`), S = d.node().getBBox(), {
		shapeSvg: d,
		bbox: S
	};
}
__name(textHelper, "textHelper");
async function addText2(e, o, u, d = []) {
	let p = e.insert("g").attr("class", "label").attr("style", d.join("; ")), h = getConfig(), g = "useHtmlLabels" in o ? o.useHtmlLabels : evaluate(h.htmlLabels) ?? !0, _ = "";
	_ = "text" in o ? o.text : o.label, !g && _.startsWith("\\") && (_ = _.substring(1)), hasKatex(_) && (g = !0);
	let y = await createText(p, sanitizeText3(decodeEntities(_)), {
		width: calculateTextWidth(_, h) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: g
	}, h), x, C = 1;
	if (g) {
		let e = y.children[0], o = select_default(y);
		C = e.innerHTML.split("<br>").length, e.innerHTML.includes("</math>") && (C += e.innerHTML.split("<mrow>").length - 1), await configureLabelImages(e), x = e.getBoundingClientRect(), o.attr("width", x.width), o.attr("height", x.height);
	} else {
		d.includes("font-weight: bolder") && select_default(y).selectAll("tspan").attr("font-weight", ""), C = y.children.length;
		let e = y.children[0];
		(y.textContent === "" || y.textContent.includes("&gt")) && (e.textContent = _[0] + _.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), _[1] === " " && (e.textContent = e.textContent[0] + " " + e.textContent.substring(1))), e.textContent === "undefined" && (e.textContent = ""), x = y.getBBox();
	}
	return p.attr("transform", "translate(0," + (-x.height / (2 * C) + u) + ")"), x.height;
}
__name(addText2, "addText");
async function classBox(e, o) {
	let c = getConfig2(), { themeVariables: l } = c, { useGradient: u } = l, d = c.class.padding ?? 12, f = d, p = o.useHtmlLabels ?? evaluate(c.htmlLabels) ?? !0, g = o;
	g.annotations = g.annotations ?? [], g.members = g.members ?? [], g.methods = g.methods ?? [];
	let { shapeSvg: _, bbox: v } = await textHelper(e, o, c, p, f), { labelStyles: y, nodeStyles: b } = styles2String(o);
	o.labelStyle = y, o.cssStyles = g.styles || "";
	let x = g.styles?.join(";") || b || "";
	o.cssStyles ||= x.replaceAll("!important", "").split(";");
	let S = g.members.length === 0 && g.methods.length === 0 && !c.class?.hideEmptyMembersBox, C = at.svg(_), E = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (E.roughness = 0, E.fillStyle = "solid");
	let D = Math.max(o.width ?? 0, v.width), O = Math.max(o.height ?? 0, v.height), k = (o.height ?? 0) > v.height;
	g.members.length === 0 && g.methods.length === 0 ? O += f : g.members.length > 0 && g.methods.length === 0 && (O += f * 2);
	let A = -D / 2, j = -O / 2, M = S ? d * 2 : g.members.length === 0 && g.methods.length === 0 ? -d : 0;
	k && (M = d * 2);
	let N = C.rectangle(A - d, j - d - (S ? d : g.members.length === 0 && g.methods.length === 0 ? -d / 2 : 0), D + 2 * d, O + 2 * d + M, E), P = _.insert(() => N, ":first-child");
	P.attr("class", "basic label-container outer-path");
	let F = P.node().getBBox(), I = _.select(".annotation-group").node().getBBox().height - (S ? d / 2 : 0) || 0, L = _.select(".label-group").node().getBBox().height - (S ? d / 2 : 0) || 0, R = _.select(".members-group").node().getBBox().height - (S ? d / 2 : 0) || 0, z = (I + L + j + d - (j - d - (S ? d : g.members.length === 0 && g.methods.length === 0 ? -d / 2 : 0))) / 2;
	if (_.selectAll(".text").each((e, o, l) => {
		let u = select_default(l[o]), m = u.attr("transform"), h = 0;
		if (m) {
			let e = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(m);
			e && (h = parseFloat(e[2]));
		}
		let v = h + j + d - (S ? d : g.members.length === 0 && g.methods.length === 0 ? -d / 2 : 0);
		if (u.attr("class").includes("methods-group")) {
			let e = Math.max(R, f / 2);
			v = k ? Math.max(z, I + L + e + j + f * 2 + d) + f * 2 : I + L + e + j + f * 4 + d;
		}
		g.members.length === 0 && g.methods.length === 0 && c.class?.hideEmptyMembersBox && (v = g.annotations.length > 0 ? h - f : h), p || (v -= 4);
		let y = A;
		(u.attr("class").includes("label-group") || u.attr("class").includes("annotation-group")) && (y = -u.node()?.getBBox().width / 2 || 0, _.selectAll("text").each(function(e, o, s) {
			window.getComputedStyle(s[o]).textAnchor === "middle" && (y = 0);
		})), u.attr("transform", `translate(${y}, ${v})`);
	}), g.members.length > 0 || g.methods.length > 0 || S) {
		let e = I + L + j + d, s = C.line(F.x, e, F.x + F.width, e + .001, E);
		_.insert(() => s).attr("class", `divider${o.look === "neo" && !u ? " neo-line" : ""}`).attr("style", x);
	}
	if (S || g.members.length > 0 || g.methods.length > 0) {
		let e = I + L + R + j + f * 2 + d, s = C.line(F.x, k ? Math.max(z, e) : e, F.x + F.width, (k ? Math.max(z, e) : e) + .001, E);
		_.insert(() => s).attr("class", `divider${o.look === "neo" && !u ? " neo-line" : ""}`).attr("style", x);
	}
	if (g.look !== "handDrawn" && _.selectAll("path").attr("style", x), P.select(":nth-child(2)").attr("style", x), _.selectAll(".divider").select("path").attr("style", x), o.labelStyle ? _.selectAll("span").attr("style", o.labelStyle) : _.selectAll("span").attr("style", x), !p) {
		let e = RegExp(/color\s*:\s*([^;]*)/), o = e.exec(x);
		if (o) {
			let e = o[0].replace("color", "fill");
			_.selectAll("tspan").attr("style", e);
		} else if (y) {
			let o = e.exec(y);
			if (o) {
				let e = o[0].replace("color", "fill");
				_.selectAll("tspan").attr("style", e);
			}
		}
	}
	return updateNodeBounds(o, P), o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, _;
}
__name(classBox, "classBox");
async function requirementBox(e, o) {
	let { labelStyles: c, nodeStyles: l } = styles2String(o);
	o.labelStyle = c;
	let u = o, d = o, f = "verifyMethod" in o, p = getNodeClasses(o), m = getConfig2(), { themeVariables: g } = m, { borderColorArray: _, requirementEdgeLabelBackground: v } = g, y = m.layout === "elk" ? "start" : "center", b = e.insert("g").attr("class", p).attr("id", o.domId ?? o.id), x;
	x = f ? await addText3(b, `&lt;&lt;${u.type}&gt;&gt;`, 0, o.labelStyle) : await addText3(b, "&lt;&lt;Element&gt;&gt;", 0, o.labelStyle);
	let S = x, C = await addText3(b, u.name, S, o.labelStyle + "; font-weight: bold;");
	if (S += C + 20, f) {
		let e = await addText3(b, `${u.requirementId ? `ID: ${u.requirementId}` : ""}`, S, o.labelStyle, y);
		S += e;
		let s = await addText3(b, `${u.text ? `Text: ${u.text}` : ""}`, S, o.labelStyle, y);
		S += s;
		let c = await addText3(b, `${u.risk ? `Risk: ${u.risk}` : ""}`, S, o.labelStyle, y);
		S += c, await addText3(b, `${u.verifyMethod ? `Verification: ${u.verifyMethod}` : ""}`, S, o.labelStyle, y);
	} else {
		let e = await addText3(b, `${d.type ? `Type: ${d.type}` : ""}`, S, o.labelStyle, y);
		S += e, await addText3(b, `${d.docRef ? `Doc Ref: ${d.docRef}` : ""}`, S, o.labelStyle, y);
	}
	let E = (b.node()?.getBBox().width ?? 200) + 20, D = (b.node()?.getBBox().height ?? 200) + 20, O = -E / 2, k = -D / 2, A = at.svg(b), j = userNodeOverrides(o, {});
	o.look !== "handDrawn" && (j.roughness = 0, j.fillStyle = "solid");
	let M = A.rectangle(O, k, E, D, j), N = b.insert(() => M, ":first-child");
	if (N.attr("class", "basic label-container outer-path").attr("style", l), _?.length) {
		let e = o.colorIndex ?? 0;
		b.attr("data-color-id", `color-${e % _.length}`);
	}
	if (b.selectAll(".label").each((e, o, c) => {
		let l = select_default(c[o]), u = l.attr("transform"), d = 0, f = 0;
		if (u) {
			let e = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(u);
			e && (d = parseFloat(e[1]), f = parseFloat(e[2]));
		}
		let p = f - D / 2, m = O + 20 / 2;
		(o === 0 || o === 1) && (m = d), l.attr("transform", `translate(${m}, ${p + 20})`);
	}), S > x + C + 20) {
		let e = k + x + C + 20, s;
		if (o.look === "neo") {
			let o = .001, c = [
				[O, e],
				[O + E, e],
				[O + E, e + o],
				[O, e + o]
			];
			s = A.polygon(c, j);
		} else s = A.line(O, e, O + E, e, j);
		b.insert(() => s).attr("class", "divider");
	}
	return updateNodeBounds(o, N), o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, l && o.look !== "handDrawn" && (v || _?.length) && b.selectAll("path").attr("style", l), b;
}
__name(requirementBox, "requirementBox");
async function addText3(e, o, c, u = "", d = "center") {
	if (o === "") return 0;
	let f = e.insert("g").attr("class", "label").attr("style", u), p = getConfig2(), m = p.htmlLabels ?? !0, g = await createText(f, sanitizeText3(decodeEntities(o)), {
		width: calculateTextWidth(o, p) + 50,
		classes: "markdown-node-label",
		useHtmlLabels: m,
		style: u
	}, p), _;
	if (m) {
		let e = g.children[0], o = select_default(g);
		d === "start" && select_default(e).style("text-align", "left"), _ = e.getBoundingClientRect(), o.attr("width", _.width), o.attr("height", _.height);
	} else {
		let e = g.children[0];
		for (let o of e.children) u && o.setAttribute("style", u);
		if (d === "start") {
			e.setAttribute("text-anchor", "start");
			for (let o of e.children) o.setAttribute("text-anchor", "start");
		}
		_ = g.getBBox(), _.height += 6;
	}
	return f.attr("transform", `translate(${-_.width / 2},${-_.height / 2 + c})`), _.height;
}
__name(addText3, "addText");
var colorFromPriority = /* @__PURE__ */ __name((e) => {
	switch (e) {
		case "Very High": return "red";
		case "High": return "orange";
		case "Medium": return null;
		case "Low": return "blue";
		case "Very Low": return "lightblue";
	}
}, "colorFromPriority");
async function kanbanItem(e, o, { config: s }) {
	let { labelStyles: c, nodeStyles: l } = styles2String(o);
	o.labelStyle = c || "";
	let u = o.width;
	o.width = (o.width ?? 200) - 10;
	let { shapeSvg: d, bbox: f, label: p } = await labelHelper(e, o, getNodeClasses(o)), m = o.padding || 10, h = "", g;
	"ticket" in o && o.ticket && s?.kanban?.ticketBaseUrl && (h = s?.kanban?.ticketBaseUrl.replace("#TICKET#", o.ticket), g = d.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", h).attr("target", "_blank"));
	let _ = {
		useHtmlLabels: o.useHtmlLabels,
		labelStyle: o.labelStyle || "",
		width: o.width,
		img: o.img,
		padding: o.padding || 8,
		centerLabel: !1
	}, v, y;
	g ? {label: v, bbox: y} = await insertLabel(g, "ticket" in o && o.ticket || "", _) : {label: v, bbox: y} = await insertLabel(d, "ticket" in o && o.ticket || "", _);
	let { label: b, bbox: x } = await insertLabel(d, "assigned" in o && o.assigned || "", _);
	o.width = u;
	let S = o?.width || 0, C = Math.max(y.height, x.height) / 2, E = Math.max(f.height + 20, o?.height || 0) + C, D = -S / 2, O = -E / 2;
	p.attr("transform", "translate(" + (m - S / 2) + ", " + (-C - f.height / 2) + ")"), v.attr("transform", "translate(" + (m - S / 2) + ", " + (-C + f.height / 2) + ")"), b.attr("transform", "translate(" + (m + S / 2 - x.width - 20) + ", " + (-C + f.height / 2) + ")");
	let k, { rx: A, ry: j } = o, { cssStyles: M } = o;
	if (o.look === "handDrawn") {
		let e = at.svg(d), s = userNodeOverrides(o, {}), c = A || j ? e.path(createRoundedRectPathD(D, O, S, E, A || 0), s) : e.rectangle(D, O, S, E, s);
		k = d.insert(() => c, ":first-child"), k.attr("class", "basic label-container").attr("style", M || null);
	} else {
		k = d.insert("rect", ":first-child"), k.attr("class", "basic label-container __APA__").attr("style", l).attr("rx", A ?? 5).attr("ry", j ?? 5).attr("x", D).attr("y", O).attr("width", S).attr("height", E);
		let e = "priority" in o && o.priority;
		if (e) {
			let o = d.append("line"), s = D + 2, c = O + Math.floor((A ?? 0) / 2), l = O + E - Math.floor((A ?? 0) / 2);
			o.attr("x1", s).attr("y1", c).attr("x2", s).attr("y2", l).attr("stroke-width", "4").attr("stroke", colorFromPriority(e));
		}
	}
	return updateNodeBounds(o, k), o.height = E, o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, d;
}
__name(kanbanItem, "kanbanItem");
async function bang(e, s) {
	let { labelStyles: c, nodeStyles: l } = styles2String(s);
	s.labelStyle = c;
	let { shapeSvg: u, bbox: d, halfPadding: f, label: p } = await labelHelper(e, s, getNodeClasses(s)), m = d.width + 10 * f, h = d.height + 8 * f, g = .15 * m, { cssStyles: v } = s, y = d.width + 20, b = d.height + 20, x = Math.max(m, y), S = Math.max(h, b);
	p.attr("transform", `translate(${-d.width / 2}, ${-d.height / 2})`);
	let C, E = `M0 0 
    a${g},${g} 1 0,0 ${x * .25},${-1 * S * .1}
    a${g},${g} 1 0,0 ${x * .25},0
    a${g},${g} 1 0,0 ${x * .25},0
    a${g},${g} 1 0,0 ${x * .25},${S * .1}

    a${g},${g} 1 0,0 ${x * .15},${S * .33}
    a${g * .8},${g * .8} 1 0,0 0,${S * .34}
    a${g},${g} 1 0,0 ${-1 * x * .15},${S * .33}

    a${g},${g} 1 0,0 ${-1 * x * .25},${S * .15}
    a${g},${g} 1 0,0 ${-1 * x * .25},0
    a${g},${g} 1 0,0 ${-1 * x * .25},0
    a${g},${g} 1 0,0 ${-1 * x * .25},${-1 * S * .15}

    a${g},${g} 1 0,0 ${-1 * x * .1},${-1 * S * .33}
    a${g * .8},${g * .8} 1 0,0 0,${-1 * S * .34}
    a${g},${g} 1 0,0 ${x * .1},${-1 * S * .33}
  H0 V0 Z`;
	if (s.look === "handDrawn") {
		let e = at.svg(u), o = userNodeOverrides(s, {}), c = e.path(E, o);
		C = u.insert(() => c, ":first-child"), C.attr("class", "basic label-container").attr("style", handleUndefinedAttr(v));
	} else C = u.insert("path", ":first-child").attr("class", "basic label-container").attr("style", l).attr("d", E);
	return C.attr("transform", `translate(${-x / 2}, ${-S / 2})`), updateNodeBounds(s, C), s.calcIntersect = function(e, o) {
		return intersect_default.rect(e, o);
	}, s.intersect = function(e) {
		return log.info("Bang intersect", s, e), intersect_default.rect(s, e);
	}, u;
}
__name(bang, "bang");
async function cloud(e, s) {
	let { labelStyles: c, nodeStyles: l } = styles2String(s);
	s.labelStyle = c;
	let { shapeSvg: u, bbox: d, halfPadding: f, label: p } = await labelHelper(e, s, getNodeClasses(s)), m = d.width + 2 * f, h = d.height + 2 * f, g = .15 * m, v = .25 * m, y = .35 * m, b = .2 * m, { cssStyles: x } = s, S, C = `M0 0 
    a${g},${g} 0 0,1 ${m * .25},${-1 * m * .1}
    a${y},${y} 1 0,1 ${m * .4},${-1 * m * .1}
    a${v},${v} 1 0,1 ${m * .35},${m * .2}

    a${g},${g} 1 0,1 ${m * .15},${h * .35}
    a${b},${b} 1 0,1 ${-1 * m * .15},${h * .65}

    a${v},${g} 1 0,1 ${-1 * m * .25},${m * .15}
    a${y},${y} 1 0,1 ${-1 * m * .5},0
    a${g},${g} 1 0,1 ${-1 * m * .25},${-1 * m * .15}

    a${g},${g} 1 0,1 ${-1 * m * .1},${-1 * h * .35}
    a${b},${b} 1 0,1 ${m * .1},${-1 * h * .65}
  H0 V0 Z`;
	if (s.look === "handDrawn") {
		let e = at.svg(u), o = userNodeOverrides(s, {}), c = e.path(C, o);
		S = u.insert(() => c, ":first-child"), S.attr("class", "basic label-container").attr("style", handleUndefinedAttr(x));
	} else S = u.insert("path", ":first-child").attr("class", "basic label-container").attr("style", l).attr("d", C);
	return p.attr("transform", `translate(${-d.width / 2}, ${-d.height / 2})`), S.attr("transform", `translate(${-m / 2}, ${-h / 2})`), updateNodeBounds(s, S), s.calcIntersect = function(e, o) {
		return intersect_default.rect(e, o);
	}, s.intersect = function(e) {
		return log.info("Cloud intersect", s, e), intersect_default.rect(s, e);
	}, u;
}
__name(cloud, "cloud");
async function defaultMindmapNode(e, o) {
	let { labelStyles: s, nodeStyles: c } = styles2String(o);
	o.labelStyle = s;
	let { shapeSvg: l, bbox: u, halfPadding: d, label: f } = await labelHelper(e, o, getNodeClasses(o)), p = u.width + 8 * d, m = u.height + 2 * d, h = o.look === "neo" ? `
    M${-p / 2} ${m / 2 - 5}
    v${-m + 10}
    q0,-5 5,-5
    h${p - 10}
    q5,0 5,5
    v${m - 5}
    H${-p / 2}
    Z
  ` : `
    M${-p / 2} ${m / 2 - 5}
    v${-m + 10}
    q0,-5 5,-5
    h${p - 10}
    q5,0 5,5
    v${m - 10}
    q0,5 -5,5
    h${-(p - 10)}
    q-5,0 -5,-5
    Z
  `;
	if (!o.domId) throw Error(`defaultMindmapNode: node "${o.id}" is missing a domId \u2014 was render.ts domId prefixing skipped?`);
	let g = l.append("path").attr("id", o.domId).attr("class", "node-bkg node-" + o.type).attr("style", c).attr("d", h);
	return l.append("line").attr("class", "node-line-").attr("x1", -p / 2).attr("y1", m / 2).attr("x2", p / 2).attr("y2", m / 2), f.attr("transform", `translate(${-u.width / 2}, ${-u.height / 2})`), l.append(() => f.node()), updateNodeBounds(o, g), o.calcIntersect = function(e, o) {
		return intersect_default.rect(e, o);
	}, o.intersect = function(e) {
		return intersect_default.rect(o, e);
	}, l;
}
__name(defaultMindmapNode, "defaultMindmapNode");
async function mindmapCircle(e, o) {
	return circle(e, o, { padding: o.padding ?? 0 });
}
__name(mindmapCircle, "mindmapCircle");
var shapesDefs = [
	{
		semanticName: "Process",
		name: "Rectangle",
		shortName: "rect",
		description: "Standard process shape",
		aliases: [
			"proc",
			"process",
			"rectangle"
		],
		internalAliases: ["squareRect"],
		handler: squareRect
	},
	{
		semanticName: "Event",
		name: "Rounded Rectangle",
		shortName: "rounded",
		description: "Represents an event",
		aliases: ["event"],
		internalAliases: ["roundedRect"],
		handler: roundedRect
	},
	{
		semanticName: "Terminal Point",
		name: "Stadium",
		shortName: "stadium",
		description: "Terminal point",
		aliases: ["terminal", "pill"],
		handler: stadium
	},
	{
		semanticName: "Subprocess",
		name: "Framed Rectangle",
		shortName: "fr-rect",
		description: "Subprocess",
		aliases: [
			"subprocess",
			"subproc",
			"framed-rectangle",
			"subroutine"
		],
		handler: subroutine
	},
	{
		semanticName: "Database",
		name: "Cylinder",
		shortName: "cyl",
		description: "Database storage",
		aliases: [
			"db",
			"database",
			"cylinder"
		],
		handler: cylinder
	},
	{
		semanticName: "Data Store",
		name: "Data Store",
		shortName: "datastore",
		description: "Data flow diagram data store",
		aliases: ["data-store"],
		handler: datastore
	},
	{
		semanticName: "Folder",
		name: "Folder",
		shortName: "folder",
		description: "Folder or directory",
		aliases: ["directory"],
		handler: folder
	},
	{
		semanticName: "Bucket",
		name: "Bucket",
		shortName: "bucket",
		description: "Object storage bucket",
		handler: bucket
	},
	{
		semanticName: "Console",
		name: "Console (terminal window)",
		shortName: "console",
		description: "Terminal or console window",
		handler: consoleWindow
	},
	{
		semanticName: "Browser",
		name: "Browser",
		shortName: "browser",
		description: "Browser window",
		handler: browser
	},
	{
		semanticName: "Person",
		name: "Person",
		shortName: "person",
		description: "Person (circular head above a rounded body)",
		handler: person
	},
	{
		semanticName: "Start",
		name: "Circle",
		shortName: "circle",
		description: "Starting point",
		aliases: ["circ"],
		handler: circle
	},
	{
		semanticName: "Bang",
		name: "Bang",
		shortName: "bang",
		description: "Bang",
		aliases: ["bang"],
		handler: bang
	},
	{
		semanticName: "Cloud",
		name: "Cloud",
		shortName: "cloud",
		description: "cloud",
		aliases: ["cloud"],
		handler: cloud
	},
	{
		semanticName: "Decision",
		name: "Diamond",
		shortName: "diam",
		description: "Decision-making step",
		aliases: [
			"decision",
			"diamond",
			"question"
		],
		handler: question
	},
	{
		semanticName: "Prepare Conditional",
		name: "Hexagon",
		shortName: "hex",
		description: "Preparation or condition step",
		aliases: ["hexagon", "prepare"],
		handler: hexagon
	},
	{
		semanticName: "Data Input/Output",
		name: "Lean Right",
		shortName: "lean-r",
		description: "Represents input or output",
		aliases: ["lean-right", "in-out"],
		internalAliases: ["lean_right"],
		handler: lean_right
	},
	{
		semanticName: "Data Input/Output",
		name: "Lean Left",
		shortName: "lean-l",
		description: "Represents output or input",
		aliases: ["lean-left", "out-in"],
		internalAliases: ["lean_left"],
		handler: lean_left
	},
	{
		semanticName: "Priority Action",
		name: "Trapezoid Base Bottom",
		shortName: "trap-b",
		description: "Priority action",
		aliases: [
			"priority",
			"trapezoid-bottom",
			"trapezoid"
		],
		handler: trapezoid
	},
	{
		semanticName: "Manual Operation",
		name: "Trapezoid Base Top",
		shortName: "trap-t",
		description: "Represents a manual task",
		aliases: [
			"manual",
			"trapezoid-top",
			"inv-trapezoid"
		],
		internalAliases: ["inv_trapezoid"],
		handler: inv_trapezoid
	},
	{
		semanticName: "Stop",
		name: "Double Circle",
		shortName: "dbl-circ",
		description: "Represents a stop point",
		aliases: ["double-circle"],
		internalAliases: ["doublecircle"],
		handler: doublecircle
	},
	{
		semanticName: "Text Block",
		name: "Text Block",
		shortName: "text",
		description: "Text block",
		handler: text
	},
	{
		semanticName: "Card",
		name: "Notched Rectangle",
		shortName: "notch-rect",
		description: "Represents a card",
		aliases: ["card", "notched-rectangle"],
		handler: card
	},
	{
		semanticName: "Lined/Shaded Process",
		name: "Lined Rectangle",
		shortName: "lin-rect",
		description: "Lined process shape",
		aliases: [
			"lined-rectangle",
			"lined-process",
			"lin-proc",
			"shaded-process"
		],
		handler: shadedProcess
	},
	{
		semanticName: "Start",
		name: "Small Circle",
		shortName: "sm-circ",
		description: "Small starting point",
		aliases: ["start", "small-circle"],
		internalAliases: ["stateStart"],
		handler: stateStart
	},
	{
		semanticName: "Stop",
		name: "Framed Circle",
		shortName: "fr-circ",
		description: "Stop point",
		aliases: ["stop", "framed-circle"],
		internalAliases: ["stateEnd"],
		handler: stateEnd
	},
	{
		semanticName: "Fork/Join",
		name: "Filled Rectangle",
		shortName: "fork",
		description: "Fork or join in process flow",
		aliases: ["join"],
		internalAliases: ["forkJoin"],
		handler: forkJoin
	},
	{
		semanticName: "Collate",
		name: "Hourglass",
		shortName: "hourglass",
		description: "Represents a collate operation",
		aliases: ["hourglass", "collate"],
		handler: hourglass
	},
	{
		semanticName: "Comment",
		name: "Curly Brace",
		shortName: "brace",
		description: "Adds a comment",
		aliases: ["comment", "brace-l"],
		handler: curlyBraceLeft
	},
	{
		semanticName: "Comment Right",
		name: "Curly Brace",
		shortName: "brace-r",
		description: "Adds a comment",
		handler: curlyBraceRight
	},
	{
		semanticName: "Comment with braces on both sides",
		name: "Curly Braces",
		shortName: "braces",
		description: "Adds a comment",
		handler: curlyBraces
	},
	{
		semanticName: "Com Link",
		name: "Lightning Bolt",
		shortName: "bolt",
		description: "Communication link",
		aliases: ["com-link", "lightning-bolt"],
		handler: lightningBolt
	},
	{
		semanticName: "Document",
		name: "Document",
		shortName: "doc",
		description: "Represents a document",
		aliases: ["doc", "document"],
		handler: waveEdgedRectangle
	},
	{
		semanticName: "Delay",
		name: "Half-Rounded Rectangle",
		shortName: "delay",
		description: "Represents a delay",
		aliases: ["half-rounded-rectangle"],
		handler: halfRoundedRectangle
	},
	{
		semanticName: "Direct Access Storage",
		name: "Horizontal Cylinder",
		shortName: "h-cyl",
		description: "Direct access storage",
		aliases: ["das", "horizontal-cylinder"],
		handler: tiltedCylinder
	},
	{
		semanticName: "Disk Storage",
		name: "Lined Cylinder",
		shortName: "lin-cyl",
		description: "Disk storage",
		aliases: ["disk", "lined-cylinder"],
		handler: linedCylinder
	},
	{
		semanticName: "Display",
		name: "Curved Trapezoid",
		shortName: "curv-trap",
		description: "Represents a display",
		aliases: ["curved-trapezoid", "display"],
		handler: curvedTrapezoid
	},
	{
		semanticName: "Divided Process",
		name: "Divided Rectangle",
		shortName: "div-rect",
		description: "Divided process shape",
		aliases: [
			"div-proc",
			"divided-rectangle",
			"divided-process"
		],
		handler: dividedRectangle
	},
	{
		semanticName: "Extract",
		name: "Triangle",
		shortName: "tri",
		description: "Extraction process",
		aliases: ["extract", "triangle"],
		handler: triangle
	},
	{
		semanticName: "Internal Storage",
		name: "Window Pane",
		shortName: "win-pane",
		description: "Internal storage",
		aliases: ["internal-storage", "window-pane"],
		handler: windowPane
	},
	{
		semanticName: "Junction",
		name: "Filled Circle",
		shortName: "f-circ",
		description: "Junction point",
		aliases: ["junction", "filled-circle"],
		handler: filledCircle
	},
	{
		semanticName: "Loop Limit",
		name: "Trapezoidal Pentagon",
		shortName: "notch-pent",
		description: "Loop limit step",
		aliases: ["loop-limit", "notched-pentagon"],
		handler: trapezoidalPentagon
	},
	{
		semanticName: "Manual File",
		name: "Flipped Triangle",
		shortName: "flip-tri",
		description: "Manual file operation",
		aliases: ["manual-file", "flipped-triangle"],
		handler: flippedTriangle
	},
	{
		semanticName: "Manual Input",
		name: "Sloped Rectangle",
		shortName: "sl-rect",
		description: "Manual input step",
		aliases: ["manual-input", "sloped-rectangle"],
		handler: slopedRect
	},
	{
		semanticName: "Multi-Document",
		name: "Stacked Document",
		shortName: "docs",
		description: "Multiple documents",
		aliases: [
			"documents",
			"st-doc",
			"stacked-document"
		],
		handler: multiWaveEdgedRectangle
	},
	{
		semanticName: "Multi-Process",
		name: "Stacked Rectangle",
		shortName: "st-rect",
		description: "Multiple processes",
		aliases: [
			"procs",
			"processes",
			"stacked-rectangle"
		],
		handler: multiRect
	},
	{
		semanticName: "Stored Data",
		name: "Bow Tie Rectangle",
		shortName: "bow-rect",
		description: "Stored data",
		aliases: ["stored-data", "bow-tie-rectangle"],
		handler: bowTieRect
	},
	{
		semanticName: "Summary",
		name: "Crossed Circle",
		shortName: "cross-circ",
		description: "Summary",
		aliases: ["summary", "crossed-circle"],
		handler: crossedCircle
	},
	{
		semanticName: "Tagged Document",
		name: "Tagged Document",
		shortName: "tag-doc",
		description: "Tagged document",
		aliases: ["tag-doc", "tagged-document"],
		handler: taggedWaveEdgedRectangle
	},
	{
		semanticName: "Tagged Process",
		name: "Tagged Rectangle",
		shortName: "tag-rect",
		description: "Tagged process",
		aliases: [
			"tagged-rectangle",
			"tag-proc",
			"tagged-process"
		],
		handler: taggedRect
	},
	{
		semanticName: "Paper Tape",
		name: "Flag",
		shortName: "flag",
		description: "Paper tape",
		aliases: ["paper-tape"],
		handler: waveRectangle
	},
	{
		semanticName: "Odd",
		name: "Odd",
		shortName: "odd",
		description: "Odd shape",
		internalAliases: ["rect_left_inv_arrow"],
		handler: rect_left_inv_arrow
	},
	{
		semanticName: "Lined Document",
		name: "Lined Document",
		shortName: "lin-doc",
		description: "Lined document",
		aliases: ["lined-document"],
		handler: linedWaveEdgedRect
	}
], shapes = (/* @__PURE__ */ __name(() => {
	let e = {
		state,
		choice,
		note,
		composite,
		rectWithTitle,
		labelRect,
		block_arrow,
		collapsedGroup,
		iconSquare,
		iconCircle,
		icon,
		iconRounded,
		imageSquare,
		anchor,
		kanbanItem,
		mindmapCircle,
		defaultMindmapNode,
		classBox,
		erBox,
		requirementBox
	}, o = [...Object.entries(e), ...shapesDefs.flatMap((e) => [
		e.shortName,
		..."aliases" in e ? e.aliases : [],
		..."internalAliases" in e ? e.internalAliases : []
	].map((o) => [o, e.handler]))];
	return Object.fromEntries(o);
}, "generateShapeMap"))();
function isValidShape(e) {
	return e in shapes;
}
__name(isValidShape, "isValidShape");
export { labelHelper as a, isValidShape as i, createRoundedRectPathD as n, shapes as o, intersect_rect_default as r, updateNodeBounds as s, createLabel_default as t };
