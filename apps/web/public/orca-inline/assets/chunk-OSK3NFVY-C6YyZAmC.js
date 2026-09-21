import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log, p as select_default } from "./src-DXrlgw8l.js";
import { T as getEffectiveHtmlLabels, b as getConfig, x as getConfig2 } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import { $ as catmullRom_default, J as stepBefore, Q as monotoneY, X as natural_default, Y as step_default, Z as monotoneX, _ as utils_default, d as handleUndefinedAttr, et as cardinal_default, it as linear_default, nt as bumpX, q as stepAfter, rt as bumpY, tt as basis_default } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as line_default } from "./line-Tv4F_Oj_.js";
import { n as createText, r as fastdom_default } from "./chunk-GMAD6QVW-CrbOfuRD.js";
import { i as styles2String, n as isLabelStyle } from "./chunk-P2QGCYS3-ERnFXKBq.js";
import { t as at } from "./rough.esm-DkFRuaoy.js";
import { t as createLabel_default } from "./chunk-4HAMMTFA-C6ufBZSb.js";
import { n as getSubGraphTitleMargins } from "./chunk-GVQU2GXP-Be8dkEne.js";
var computeLabelTransform = /* @__PURE__ */ __name((e, r) => {
	if (r) return "translate(" + -e.width / 2 + ", " + -e.height / 2 + ")";
	let i = e.x ?? 0, a = e.y ?? 0;
	return "translate(" + -(i + e.width / 2) + ", " + -(a + e.height / 2) + ")";
}, "computeLabelTransform"), markerOffsets = {
	aggregation: 17.25,
	extension: 17.25,
	composition: 17.25,
	dependency: 6,
	lollipop: 13.5,
	arrow_point: 4,
	arrow_barb: 0,
	arrow_barb_neo: 5.5
}, markerOffsets2 = {
	arrow_point: 4,
	arrow_cross: 12.5,
	arrow_circle: 12.5
};
function calculateDeltaAndAngle(e, r) {
	if (e === void 0 || r === void 0) return {
		angle: 0,
		deltaX: 0,
		deltaY: 0
	};
	e = pointTransformer(e), r = pointTransformer(r);
	let [i, a] = [e.x, e.y], [o, s] = [r.x, r.y], c = o - i, l = s - a;
	return {
		angle: Math.atan(l / c),
		deltaX: c,
		deltaY: l
	};
}
__name(calculateDeltaAndAngle, "calculateDeltaAndAngle");
var pointTransformer = /* @__PURE__ */ __name((e) => Array.isArray(e) ? {
	x: e[0],
	y: e[1]
} : e, "pointTransformer"), getLineFunctionsWithOffset = /* @__PURE__ */ __name((r) => ({
	x: /* @__PURE__ */ __name(function(e, i, a) {
		let o = 0, s = pointTransformer(a[0]).x < pointTransformer(a[a.length - 1]).x ? "left" : "right";
		if (i === 0 && Object.hasOwn(markerOffsets, r.arrowTypeStart)) {
			let { angle: e, deltaX: i } = calculateDeltaAndAngle(a[0], a[1]);
			o = markerOffsets[r.arrowTypeStart] * Math.cos(e) * (i >= 0 ? 1 : -1);
		} else if (i === a.length - 1 && Object.hasOwn(markerOffsets, r.arrowTypeEnd)) {
			let { angle: e, deltaX: i } = calculateDeltaAndAngle(a[a.length - 1], a[a.length - 2]);
			o = markerOffsets[r.arrowTypeEnd] * Math.cos(e) * (i >= 0 ? 1 : -1);
		}
		let c = Math.abs(pointTransformer(e).x - pointTransformer(a[a.length - 1]).x), l = Math.abs(pointTransformer(e).y - pointTransformer(a[a.length - 1]).y), u = Math.abs(pointTransformer(e).x - pointTransformer(a[0]).x), d = Math.abs(pointTransformer(e).y - pointTransformer(a[0]).y), f = markerOffsets[r.arrowTypeStart], p = markerOffsets[r.arrowTypeEnd];
		if (c < p && c > 0 && l < p) {
			let e = p + 1 - c;
			e *= s === "right" ? -1 : 1, o -= e;
		}
		if (u < f && u > 0 && d < f) {
			let e = f + 1 - u;
			e *= s === "right" ? -1 : 1, o += e;
		}
		return pointTransformer(e).x + o;
	}, "x"),
	y: /* @__PURE__ */ __name(function(e, i, a) {
		let o = 0, s = pointTransformer(a[0]).y < pointTransformer(a[a.length - 1]).y ? "down" : "up";
		if (i === 0 && Object.hasOwn(markerOffsets, r.arrowTypeStart)) {
			let { angle: e, deltaY: i } = calculateDeltaAndAngle(a[0], a[1]);
			o = markerOffsets[r.arrowTypeStart] * Math.abs(Math.sin(e)) * (i >= 0 ? 1 : -1);
		} else if (i === a.length - 1 && Object.hasOwn(markerOffsets, r.arrowTypeEnd)) {
			let { angle: e, deltaY: i } = calculateDeltaAndAngle(a[a.length - 1], a[a.length - 2]);
			o = markerOffsets[r.arrowTypeEnd] * Math.abs(Math.sin(e)) * (i >= 0 ? 1 : -1);
		}
		let c = Math.abs(pointTransformer(e).y - pointTransformer(a[a.length - 1]).y), l = Math.abs(pointTransformer(e).x - pointTransformer(a[a.length - 1]).x), u = Math.abs(pointTransformer(e).y - pointTransformer(a[0]).y), d = Math.abs(pointTransformer(e).x - pointTransformer(a[0]).x), f = markerOffsets[r.arrowTypeStart], p = markerOffsets[r.arrowTypeEnd];
		if (c < p && c > 0 && l < p) {
			let e = p + 1 - c;
			e *= s === "up" ? -1 : 1, o -= e;
		}
		if (u < f && u > 0 && d < f) {
			let e = f + 1 - u;
			e *= s === "up" ? -1 : 1, o += e;
		}
		return pointTransformer(e).y + o;
	}, "y")
}), "getLineFunctionsWithOffset"), addEdgeMarkers = /* @__PURE__ */ __name((e, r, i, a, o, s = !1, c) => {
	r.arrowTypeStart && addEdgeMarker(e, "start", r.arrowTypeStart, i, a, o, s, c), r.arrowTypeEnd && addEdgeMarker(e, "end", r.arrowTypeEnd, i, a, o, s, c);
}, "addEdgeMarkers"), arrowTypesMap = {
	arrow_cross: {
		type: "cross",
		fill: !1
	},
	arrow_point: {
		type: "point",
		fill: !0
	},
	arrow_barb: {
		type: "barb",
		fill: !0
	},
	arrow_barb_neo: {
		type: "barb",
		fill: !0
	},
	arrow_circle: {
		type: "circle",
		fill: !1
	},
	aggregation: {
		type: "aggregation",
		fill: !1
	},
	extension: {
		type: "extension",
		fill: !1
	},
	composition: {
		type: "composition",
		fill: !0
	},
	dependency: {
		type: "dependency",
		fill: !0
	},
	lollipop: {
		type: "lollipop",
		fill: !1
	},
	only_one: {
		type: "onlyOne",
		fill: !1
	},
	zero_or_one: {
		type: "zeroOrOne",
		fill: !1
	},
	one_or_more: {
		type: "oneOrMore",
		fill: !1
	},
	zero_or_more: {
		type: "zeroOrMore",
		fill: !1
	},
	requirement_arrow: {
		type: "requirement_arrow",
		fill: !1
	},
	requirement_contains: {
		type: "requirement_contains",
		fill: !1
	}
}, arrowTypesWithMarginSupport = [
	"cross",
	"point",
	"circle",
	"lollipop",
	"aggregation",
	"extension",
	"composition",
	"dependency",
	"barb"
], addEdgeMarker = /* @__PURE__ */ __name((e, i, a, o, s, c, l = !1, u) => {
	if (!a || a === "none") return;
	let d = arrowTypesMap[a], f = d && arrowTypesWithMarginSupport.includes(d.type);
	if (!d) {
		log.warn(`Unknown arrow type: ${a}`);
		return;
	}
	let p = `${s}_${c}-${d.type}${i === "start" ? "Start" : "End"}${l && f ? "-margin" : ""}`;
	if (u && u.trim() !== "") {
		let r = `${p}_${u.replace(/[^\dA-Za-z]/g, "_")}`;
		if (!document.getElementById(r)) {
			let e = document.getElementById(p);
			if (e) {
				let i = e.cloneNode(!0);
				i.id = r, i.querySelectorAll("path, circle, line").forEach((e) => {
					e.setAttribute("stroke", u), d.fill && e.setAttribute("fill", u);
				}), e.parentNode?.appendChild(i);
			}
		}
		e.attr(`marker-${i}`, `url(${o}#${r})`);
	} else e.attr(`marker-${i}`, `url(${o}#${p})`);
}, "addEdgeMarker"), resolveEdgeCurveType = /* @__PURE__ */ __name((e) => typeof e == "string" ? e : getConfig2()?.flowchart?.curve, "resolveEdgeCurveType"), edgeLabels = /* @__PURE__ */ new Map(), terminalLabels = /* @__PURE__ */ new Map(), clear = /* @__PURE__ */ __name(() => {
	edgeLabels.clear(), terminalLabels.clear();
}, "clear"), hasEdgeLabel = /* @__PURE__ */ __name((e) => !!(e.label || e.startLabelLeft || e.startLabelRight || e.endLabelLeft || e.endLabelRight), "hasEdgeLabel"), getLabelStyles = /* @__PURE__ */ __name((e) => e ? typeof e == "string" ? e : e.reduce((e, r) => e + ";" + r, "") : "", "getLabelStyles"), insertEdgeLabel = /* @__PURE__ */ __name(async (e, o) => {
	let c = getConfig2(), l = getEffectiveHtmlLabels(c), { labelStyles: u } = styles2String(o);
	o.labelStyle = u;
	let d = e.insert("g").attr("class", "edgeLabel"), f = d.insert("g").attr("class", "label").attr("data-id", o.id), p = o.labelType === "markdown", m = await createText(e, o.label, {
		style: getLabelStyles(o.labelStyle),
		useHtmlLabels: l,
		addSvgBackground: !0,
		isNode: !1,
		markdown: p,
		width: void 0
	}, c);
	f.node().appendChild(m), log.info("abc82", o, o.labelType);
	let h, g;
	if (l) {
		let e = m.children[0], r = select_default(m);
		h = await fastdom_default.measure(() => e.getBoundingClientRect()), g = h, r.attr("width", h.width), r.attr("height", h.height);
	} else {
		let e = select_default(m).select("text").node();
		await fastdom_default.measure(() => {
			h = m.getBBox(), g = e && typeof e.getBBox == "function" ? e.getBBox() : h;
		});
	}
	f.attr("transform", computeLabelTransform(g, l)), edgeLabels.set(o.id, d), o.width = h.width, o.height = h.height;
	let _;
	if (o.startLabelLeft) {
		let r = e.insert("g").attr("class", "edgeTerminals"), a = r.insert("g").attr("class", "inner"), s = await createLabel_default(a, o.startLabelLeft, getLabelStyles(o.labelStyle) || "", !1, !1);
		_ = s;
		let c = s.getBBox();
		if (l) {
			let e = s.children[0], r = select_default(s);
			c = e.getBoundingClientRect(), r.attr("width", c.width), r.attr("height", c.height);
		}
		a.attr("transform", computeLabelTransform(c, l)), terminalLabels.get(o.id) || terminalLabels.set(o.id, {}), terminalLabels.get(o.id).startLeft = r, setTerminalWidth(_, o.startLabelLeft);
	}
	if (o.startLabelRight) {
		let r = e.insert("g").attr("class", "edgeTerminals"), a = r.insert("g").attr("class", "inner"), s = await createLabel_default(a, o.startLabelRight, getLabelStyles(o.labelStyle) || "", !1, !1);
		_ = s;
		let c = s.getBBox();
		if (l) {
			let e = s.children[0], r = select_default(s);
			c = e.getBoundingClientRect(), r.attr("width", c.width), r.attr("height", c.height);
		}
		a.attr("transform", computeLabelTransform(c, l)), terminalLabels.get(o.id) || terminalLabels.set(o.id, {}), terminalLabels.get(o.id).startRight = r, setTerminalWidth(_, o.startLabelRight);
	}
	if (o.endLabelLeft) {
		let r = e.insert("g").attr("class", "edgeTerminals"), a = r.insert("g").attr("class", "inner"), s = await createLabel_default(r, o.endLabelLeft, getLabelStyles(o.labelStyle) || "", !1, !1);
		_ = s;
		let c = s.getBBox();
		if (l) {
			let e = s.children[0], r = select_default(s);
			c = e.getBoundingClientRect(), r.attr("width", c.width), r.attr("height", c.height);
		}
		a.attr("transform", computeLabelTransform(c, l)), terminalLabels.get(o.id) || terminalLabels.set(o.id, {}), terminalLabels.get(o.id).endLeft = r, setTerminalWidth(_, o.endLabelLeft);
	}
	if (o.endLabelRight) {
		let r = e.insert("g").attr("class", "edgeTerminals"), a = r.insert("g").attr("class", "inner"), s = await createLabel_default(r, o.endLabelRight, getLabelStyles(o.labelStyle) || "", !1, !1);
		_ = s;
		let c = s.getBBox();
		if (l) {
			let e = s.children[0], r = select_default(s);
			c = e.getBoundingClientRect(), r.attr("width", c.width), r.attr("height", c.height);
		}
		a.attr("transform", computeLabelTransform(c, l)), terminalLabels.get(o.id) || terminalLabels.set(o.id, {}), terminalLabels.get(o.id).endRight = r, setTerminalWidth(_, o.endLabelRight);
	}
	return m;
}, "insertEdgeLabel");
function setTerminalWidth(e, r) {
	getEffectiveHtmlLabels(getConfig2()) && e && (e.style.width = r.length * 9 + "px", e.style.height = "12px");
}
__name(setTerminalWidth, "setTerminalWidth");
var positionEdgeLabel = /* @__PURE__ */ __name((e, i) => {
	log.debug("Moving label abc88 ", e.id, e.label, edgeLabels.get(e.id), i);
	let a = i.updatedPath ? i.updatedPath : i.originalPath, { subGraphTitleTotalMargin: o } = getSubGraphTitleMargins(getConfig2());
	if (e.label) {
		let s = edgeLabels.get(e.id), c = e.x, l = e.y;
		if (a) {
			let o = utils_default.calcLabelPosition(a);
			log.debug("Moving label " + e.label + " from (", c, ",", l, ") to (", o.x, ",", o.y, ") abc88"), i.updatedPath && (c = o.x, l = o.y);
		}
		s.attr("transform", `translate(${c}, ${l + o / 2})`);
	}
	if (e.startLabelLeft) {
		let r = terminalLabels.get(e.id).startLeft, i = e.x, o = e.y;
		if (a) {
			let r = utils_default.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", a);
			i = r.x, o = r.y;
		}
		r.attr("transform", `translate(${i}, ${o})`);
	}
	if (e.startLabelRight) {
		let r = terminalLabels.get(e.id).startRight, i = e.x, o = e.y;
		if (a) {
			let r = utils_default.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_right", a);
			i = r.x, o = r.y;
		}
		r.attr("transform", `translate(${i}, ${o})`);
	}
	if (e.endLabelLeft) {
		let r = terminalLabels.get(e.id).endLeft, i = e.x, o = e.y;
		if (a) {
			let r = utils_default.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", a);
			i = r.x, o = r.y;
		}
		r.attr("transform", `translate(${i}, ${o})`);
	}
	if (e.endLabelRight) {
		let r = terminalLabels.get(e.id).endRight, i = e.x, o = e.y;
		if (a) {
			let r = utils_default.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", a);
			i = r.x, o = r.y;
		}
		r.attr("transform", `translate(${i}, ${o})`);
	}
}, "positionEdgeLabel"), orthogonalizeToLabelClippedPoints = /* @__PURE__ */ __name((e, r) => {
	if (!e?.isLabelEdge || !e?.id?.endsWith("-to-label") || !Array.isArray(r) || r.length !== 2) return r;
	let [i, a] = r, o = Math.abs(a.x - i.x), s = Math.abs(a.y - i.y);
	return o < .001 || s < .001 ? r : s >= o ? [
		i,
		{
			x: i.x,
			y: a.y
		},
		a
	] : [
		i,
		{
			x: a.x,
			y: i.y
		},
		a
	];
}, "orthogonalizeToLabelClippedPoints"), outsideNode = /* @__PURE__ */ __name((e, r) => {
	let i = e.x, a = e.y, o = Math.abs(r.x - i), s = Math.abs(r.y - a), c = e.width / 2, l = e.height / 2;
	return o >= c || s >= l;
}, "outsideNode"), intersection = /* @__PURE__ */ __name((e, i, a) => {
	log.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(i)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
	let o = e.x, s = e.y, c = Math.abs(o - a.x), l = e.width / 2, u = a.x < i.x ? l - c : l + c, d = e.height / 2, f = Math.abs(i.y - a.y), p = Math.abs(i.x - a.x);
	if (Math.abs(s - i.y) * l > Math.abs(o - i.x) * d) {
		let e = a.y < i.y ? i.y - d - s : s - d - i.y;
		u = p * e / f;
		let o = {
			x: a.x < i.x ? a.x + u : a.x - p + u,
			y: a.y < i.y ? a.y + f - e : a.y - f + e
		};
		return u === 0 && (o.x = i.x, o.y = i.y), p === 0 && (o.x = i.x), f === 0 && (o.y = i.y), log.debug(`abc89 top/bottom calc, Q ${f}, q ${e}, R ${p}, r ${u}`, o), o;
	} else {
		u = a.x < i.x ? i.x - l - o : o - l - i.x;
		let e = f * u / p, s = a.x < i.x ? a.x + p - u : a.x - p + u, c = a.y < i.y ? a.y + e : a.y - e;
		return log.debug(`sides calc abc89, Q ${f}, q ${e}, R ${p}, r ${u}`, {
			_x: s,
			_y: c
		}), u === 0 && (s = i.x, c = i.y), p === 0 && (s = i.x), f === 0 && (c = i.y), {
			x: s,
			y: c
		};
	}
}, "intersection"), cutPathAtIntersect = /* @__PURE__ */ __name((e, i) => {
	log.warn("abc88 cutPathAtIntersect", e, i);
	let a = [], o = e[0], s = !1;
	return e.forEach((e) => {
		if (log.info("abc88 checking point", e, i), !outsideNode(i, e) && !s) {
			let c = intersection(i, o, e);
			log.debug("abc88 inside", e, o, c), log.debug("abc88 intersection", c, i);
			let l = !1;
			a.forEach((e) => {
				l ||= e.x === c.x && e.y === c.y;
			}), a.some((e) => e.x === c.x && e.y === c.y) ? log.warn("abc88 no intersect", c, a) : a.push(c), s = !0;
		} else log.warn("abc88 outside", e, o), o = e, s || a.push(e);
	}), log.debug("returning points", a), a;
}, "cutPathAtIntersect");
function extractCornerPoints(e) {
	let r = [], i = [];
	for (let a = 1; a < e.length - 1; a++) {
		let o = e[a - 1], s = e[a], c = e[a + 1];
		(o.x === s.x && s.y === c.y && Math.abs(s.x - c.x) > 5 && Math.abs(s.y - o.y) > 5 || o.y === s.y && s.x === c.x && Math.abs(s.x - o.x) > 5 && Math.abs(s.y - c.y) > 5) && (r.push(s), i.push(a));
	}
	return {
		cornerPoints: r,
		cornerPointPositions: i
	};
}
__name(extractCornerPoints, "extractCornerPoints");
var findAdjacentPoint = /* @__PURE__ */ __name(function(e, r, i) {
	let a = r.x - e.x, o = r.y - e.y, s = i / Math.sqrt(a * a + o * o);
	return {
		x: r.x - s * a,
		y: r.y - s * o
	};
}, "findAdjacentPoint"), fixCorners = /* @__PURE__ */ __name(function(e) {
	let { cornerPointPositions: i } = extractCornerPoints(e), a = [];
	for (let o = 0; o < e.length; o++) if (i.includes(o)) {
		let i = e[o - 1], s = e[o + 1], c = e[o], l = findAdjacentPoint(i, c, 5), u = findAdjacentPoint(s, c, 5), d = u.x - l.x, f = u.y - l.y;
		a.push(l);
		let p = Math.sqrt(2) * 2, m = {
			x: c.x,
			y: c.y
		};
		Math.abs(s.x - i.x) > 10 && Math.abs(s.y - i.y) >= 10 ? (log.debug("Corner point fixing", Math.abs(s.x - i.x), Math.abs(s.y - i.y)), m = c.x === l.x ? {
			x: d < 0 ? l.x - 5 + p : l.x + 5 - p,
			y: f < 0 ? l.y - p : l.y + p
		} : {
			x: d < 0 ? l.x - p : l.x + p,
			y: f < 0 ? l.y - 5 + p : l.y + 5 - p
		}) : log.debug("Corner point skipping fixing", Math.abs(s.x - i.x), Math.abs(s.y - i.y)), a.push(m, u);
	} else a.push(e[o]);
	return a;
}, "fixCorners"), generateDashArray = /* @__PURE__ */ __name((e, r, i) => {
	let a = e - r - i, o = Math.floor(a / 4), s = Number.isFinite(o) ? Math.max(0, o) : 0;
	return `0 ${r} ${Array(s).fill("2 2").join(" ")} ${i}`;
}, "generateDashArray"), insertEdge = /* @__PURE__ */ __name(function(e, a, o, C, w, T, E, D = !1) {
	if (!E) throw Error(`insertEdge: missing diagramId for edge "${a.id}" \u2014 edge IDs require a diagram prefix for uniqueness`);
	let { handDrawnSeed: O, layout: k } = getConfig2(), A = a.points, j = !1, M = w;
	var N = T;
	let P = [];
	for (let e in a.cssCompiledStyles) isLabelStyle(e) || P.push(a.cssCompiledStyles[e]);
	if (k === "swimlane") {
		if (N.intersect && M.intersect && Array.isArray(A) && A.length >= 2) if (A.length === 2) A = [M.intersect(A[0]), N.intersect(A[1])];
		else {
			let e = A.slice(1, -1), r = e[0], i = e[e.length - 1], a = .5, o = Math.abs(A[A.length - 1].x - i.x) < a && Math.abs(A[A.length - 1].y - i.y) < a, s = M.intersect(r), c = o ? i : N.intersect(i), l = Math.abs(c.x - i.x) < a && Math.abs(c.y - i.y) < a, u = Math.abs(s.x - r.x) < a && Math.abs(s.y - r.y) < a ? [] : [s], d = l ? [] : [c];
			A = [
				...u,
				...e,
				...d
			];
		}
		A = orthogonalizeToLabelClippedPoints(a, A);
	} else N.intersect && M.intersect && !D && (A = A.slice(1, a.points.length - 1), A.unshift(M.intersect(A[0])), A.push(N.intersect(A[A.length - 1])));
	let F = btoa(JSON.stringify(A));
	a.toCluster && (log.info("to cluster abc88", o.get(a.toCluster)), A = cutPathAtIntersect(a.points, o.get(a.toCluster).node), j = !0), a.fromCluster && (log.debug("from cluster abc88", o.get(a.fromCluster), JSON.stringify(A, null, 2)), A = cutPathAtIntersect(A.reverse(), o.get(a.fromCluster).node).reverse(), j = !0);
	let I = A.filter((e) => !Number.isNaN(e.y)), L = resolveEdgeCurveType(a.curve);
	L !== "rounded" && (I = fixCorners(I));
	let R = linear_default;
	switch (L) {
		case "linear":
			R = linear_default;
			break;
		case "basis":
			R = basis_default;
			break;
		case "cardinal":
			R = cardinal_default;
			break;
		case "bumpX":
			R = bumpX;
			break;
		case "bumpY":
			R = bumpY;
			break;
		case "catmullRom":
			R = catmullRom_default;
			break;
		case "monotoneX":
			R = monotoneX;
			break;
		case "monotoneY":
			R = monotoneY;
			break;
		case "natural":
			R = natural_default;
			break;
		case "step":
			R = step_default;
			break;
		case "stepAfter":
			R = stepAfter;
			break;
		case "stepBefore":
			R = stepBefore;
			break;
		case "rounded":
			R = linear_default;
			break;
		default: R = basis_default;
	}
	let { x: z, y: B } = getLineFunctionsWithOffset(a), V = line_default().x(z).y(B).curve(R), H;
	switch (a.thickness) {
		case "normal":
			H = "edge-thickness-normal";
			break;
		case "thick":
			H = "edge-thickness-thick";
			break;
		case "invisible":
			H = "edge-thickness-invisible";
			break;
		default: H = "edge-thickness-normal";
	}
	switch (a.pattern) {
		case "solid":
			H += " edge-pattern-solid";
			break;
		case "dotted":
			H += " edge-pattern-dotted";
			break;
		case "dashed":
			H += " edge-pattern-dashed";
			break;
		default: H += " edge-pattern-solid";
	}
	let U, W = L === "rounded" ? generateRoundedPath(applyMarkerOffsetsToPoints(I, a), 5) : V(I), G = Array.isArray(a.style) ? a.style : [a.style], K = G.find((e) => e?.startsWith("stroke:")), q = "";
	a.animate && (q = "edge-animation-fast"), a.animation && (q = "edge-animation-" + a.animation);
	let J = !1;
	if (a.look === "handDrawn") {
		let r = at.svg(e);
		Object.assign([], I);
		let o = r.path(W, {
			roughness: .3,
			seed: O
		});
		H += " transition", U = select_default(o).select("path").attr("id", `${E}-${a.id}`).attr("class", " " + H + (a.classes ? " " + a.classes : "") + (q ? " " + q : "")).attr("style", G ? G.reduce((e, r) => e + ";" + r, "") : "");
		let s = U.attr("d");
		U.attr("d", s), e.node().appendChild(U.node());
	} else {
		let r = P.join(";"), i = G ? G.reduce((e, r) => e + r + ";", "") : "", o = (r ? r + ";" + i + ";" : i) + ";" + (G ? G.reduce((e, r) => e + ";" + r, "") : "");
		U = e.append("path").attr("d", W).attr("id", `${E}-${a.id}`).attr("class", " " + H + (a.classes ? " " + a.classes : "") + (q ? " " + q : "")).attr("style", o), K = o.match(/stroke:([^;]+)/)?.[1], J = a.animate === !0 || !!a.animation || r.includes("animation");
		let s = U.node(), c = typeof s.getTotalLength == "function" ? s.getTotalLength() : 0, l = markerOffsets2[a.arrowTypeStart] || 0, u = markerOffsets2[a.arrowTypeEnd] || 0;
		if (a.look === "neo" && !J) {
			let e = `stroke-dasharray: ${a.pattern === "dotted" || a.pattern === "dashed" ? generateDashArray(c, l, u) : `0 ${l} ${c - l - u} ${u}`}; stroke-dashoffset: 0;`;
			U.attr("style", e + U.attr("style"));
		}
	}
	U.attr("data-edge", !0), U.attr("data-et", "edge"), U.attr("data-id", a.id), U.attr("data-points", F), U.attr("data-look", handleUndefinedAttr(a.look)), a.showPoints && I.forEach((r) => {
		e.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", r.x).attr("cy", r.y);
	});
	let Y = "";
	(getConfig2().flowchart.arrowMarkerAbsolute || getConfig2().state.arrowMarkerAbsolute) && (Y = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, Y = Y.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), log.info("arrowTypeStart", a.arrowTypeStart), log.info("arrowTypeEnd", a.arrowTypeEnd);
	let X = !J && a?.look === "neo";
	addEdgeMarkers(U, a, Y, E, C, X, K);
	let Z = Math.floor(A.length / 2), Q = A[Z];
	utils_default.isLabelCoordinateInPath(Q, U.attr("d")) || (j = !0);
	let $ = {};
	return j && ($.updatedPath = A), $.originalPath = a.points, $;
}, "insertEdge");
function generateRoundedPath(e, r) {
	if (e.length < 2) return "";
	let i = "", a = e.length, o = 1e-5;
	for (let s = 0; s < a; s++) {
		let c = e[s], l = e[s - 1], u = e[s + 1];
		if (s === 0) i += `M${c.x},${c.y}`;
		else if (s === a - 1) i += `L${c.x},${c.y}`;
		else {
			let e = c.x - l.x, a = c.y - l.y, s = u.x - c.x, d = u.y - c.y, f = Math.hypot(e, a), p = Math.hypot(s, d);
			if (f < o || p < o) {
				i += `L${c.x},${c.y}`;
				continue;
			}
			let m = e / f, h = a / f, g = s / p, _ = d / p, v = m * g + h * _, y = Math.max(-1, Math.min(1, v)), b = Math.acos(y);
			if (b < o || Math.abs(Math.PI - b) < o) {
				i += `L${c.x},${c.y}`;
				continue;
			}
			let x = Math.min(r / Math.sin(b / 2), f / 2, p / 2), S = c.x - m * x, C = c.y - h * x, w = c.x + g * x, T = c.y + _ * x;
			i += `L${S},${C}`, i += `Q${c.x},${c.y} ${w},${T}`;
		}
	}
	return i;
}
__name(generateRoundedPath, "generateRoundedPath");
function calculateDeltaAndAngle2(e, r) {
	if (!e || !r) return {
		angle: 0,
		deltaX: 0,
		deltaY: 0
	};
	let i = r.x - e.x, a = r.y - e.y;
	return {
		angle: Math.atan2(a, i),
		deltaX: i,
		deltaY: a
	};
}
__name(calculateDeltaAndAngle2, "calculateDeltaAndAngle");
function applyMarkerOffsetsToPoints(e, r) {
	let i = e.map((e) => ({ ...e }));
	if (e.length >= 2 && markerOffsets[r.arrowTypeStart]) {
		let a = markerOffsets[r.arrowTypeStart], o = e[0], s = e[1], { angle: c } = calculateDeltaAndAngle2(o, s), l = a * Math.cos(c), u = a * Math.sin(c);
		i[0].x = o.x + l, i[0].y = o.y + u;
	}
	let a = e.length;
	if (a >= 2 && markerOffsets[r.arrowTypeEnd]) {
		let o = markerOffsets[r.arrowTypeEnd], s = e[a - 1], c = e[a - 2], { angle: l } = calculateDeltaAndAngle2(c, s), u = o * Math.cos(l), d = o * Math.sin(l);
		i[a - 1].x = s.x - u, i[a - 1].y = s.y - d;
	}
	return i;
}
__name(applyMarkerOffsetsToPoints, "applyMarkerOffsetsToPoints");
var insertMarkers = /* @__PURE__ */ __name((e, r, i, a) => {
	r.forEach((r) => {
		markers[r](e, i, a);
	});
}, "insertMarkers"), markers = {
	extension: /* @__PURE__ */ __name((e, i, a) => {
		log.trace("Making markers for ", a), e.append("defs").append("marker").attr("id", a + "_" + i + "-extensionStart").attr("class", "marker extension " + i).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", a + "_" + i + "-extensionEnd").attr("class", "marker extension " + i).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 1,1 V 13 L18,7 Z"), e.append("marker").attr("id", a + "_" + i + "-extensionStart-margin").attr("class", "marker extension " + i).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,7 18,13 18,1").style("stroke-width", 2).style("stroke-dasharray", "0"), e.append("defs").append("marker").attr("id", a + "_" + i + "-extensionEnd-margin").attr("class", "marker extension " + i).attr("refX", 9).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,1 10,13 18,7").style("stroke-width", 2).style("stroke-dasharray", "0");
	}, "extension"),
	composition: /* @__PURE__ */ __name((e, r, i) => {
		e.append("defs").append("marker").attr("id", i + "_" + r + "-compositionStart").attr("class", "marker composition " + r).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", i + "_" + r + "-compositionEnd").attr("class", "marker composition " + r).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", i + "_" + r + "-compositionStart-margin").attr("class", "marker composition " + r).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("viewBox", "0 0 15 15").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", i + "_" + r + "-compositionEnd-margin").attr("class", "marker composition " + r).attr("refX", 3.5).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "composition"),
	aggregation: /* @__PURE__ */ __name((e, r, i) => {
		e.append("defs").append("marker").attr("id", i + "_" + r + "-aggregationStart").attr("class", "marker aggregation " + r).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", i + "_" + r + "-aggregationEnd").attr("class", "marker aggregation " + r).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", i + "_" + r + "-aggregationStart-margin").attr("class", "marker aggregation " + r).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", i + "_" + r + "-aggregationEnd-margin").attr("class", "marker aggregation " + r).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
	}, "aggregation"),
	dependency: /* @__PURE__ */ __name((e, r, i) => {
		e.append("defs").append("marker").attr("id", i + "_" + r + "-dependencyStart").attr("class", "marker dependency " + r).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", i + "_" + r + "-dependencyEnd").attr("class", "marker dependency " + r).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z"), e.append("defs").append("marker").attr("id", i + "_" + r + "-dependencyStart-margin").attr("class", "marker dependency " + r).attr("refX", 4).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", i + "_" + r + "-dependencyEnd-margin").attr("class", "marker dependency " + r).attr("refX", 16).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
	}, "dependency"),
	lollipop: /* @__PURE__ */ __name((e, r, i) => {
		e.append("defs").append("marker").attr("id", i + "_" + r + "-lollipopStart").attr("class", "marker lollipop " + r).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", i + "_" + r + "-lollipopEnd").attr("class", "marker lollipop " + r).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", i + "_" + r + "-lollipopStart-margin").attr("class", "marker lollipop " + r).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2), e.append("defs").append("marker").attr("id", i + "_" + r + "-lollipopEnd-margin").attr("class", "marker lollipop " + r).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2);
	}, "lollipop"),
	point: /* @__PURE__ */ __name((e, r, i) => {
		e.append("marker").attr("id", i + "_" + r + "-pointEnd").attr("class", "marker " + r).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", i + "_" + r + "-pointStart").attr("class", "marker " + r).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", i + "_" + r + "-pointEnd-margin").attr("class", "marker " + r).attr("viewBox", "0 0 11.5 14").attr("refX", 11.5).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 10.5).attr("markerHeight", 14).attr("orient", "auto").append("path").attr("d", "M 0 0 L 11.5 7 L 0 14 z").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", i + "_" + r + "-pointStart-margin").attr("class", "marker " + r).attr("viewBox", "0 0 11.5 14").attr("refX", 1).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11.5).attr("markerHeight", 14).attr("orient", "auto").append("polygon").attr("points", "0,7 11.5,14 11.5,0").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
	}, "point"),
	circle: /* @__PURE__ */ __name((e, r, i) => {
		e.append("marker").attr("id", i + "_" + r + "-circleEnd").attr("class", "marker " + r).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", i + "_" + r + "-circleStart").attr("class", "marker " + r).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", i + "_" + r + "-circleEnd-margin").attr("class", "marker " + r).attr("viewBox", "0 0 10 10").attr("refY", 5).attr("refX", 12.25).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", i + "_" + r + "-circleStart-margin").attr("class", "marker " + r).attr("viewBox", "0 0 10 10").attr("refX", -2).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
	}, "circle"),
	cross: /* @__PURE__ */ __name((e, r, i) => {
		e.append("marker").attr("id", i + "_" + r + "-crossEnd").attr("class", "marker cross " + r).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", i + "_" + r + "-crossStart").attr("class", "marker cross " + r).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", i + "_" + r + "-crossEnd-margin").attr("class", "marker cross " + r).attr("viewBox", "0 0 15 15").attr("refX", 17.7).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5), e.append("marker").attr("id", i + "_" + r + "-crossStart-margin").attr("class", "marker cross " + r).attr("viewBox", "0 0 15 15").attr("refX", -3.5).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5).style("stroke-dasharray", "1,0");
	}, "cross"),
	barb: /* @__PURE__ */ __name((e, r, i) => {
		e.append("defs").append("marker").attr("id", i + "_" + r + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
	}, "barb"),
	barbNeo: /* @__PURE__ */ __name((e, r, i) => {
		let { themeVariables: a } = getConfig(), { transitionColor: s } = a;
		e.append("defs").append("marker").attr("id", i + "_" + r + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z"), e.append("defs").append("marker").attr("id", i + "_" + r + "-barbEnd-margin").attr("refX", 17).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z").attr("fill", `${s}`);
	}, "barbNeo"),
	only_one: /* @__PURE__ */ __name((e, r, i) => {
		e.append("defs").append("marker").attr("id", i + "_" + r + "-onlyOneStart").attr("class", "marker onlyOne " + r).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", i + "_" + r + "-onlyOneEnd").attr("class", "marker onlyOne " + r).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
	}, "only_one"),
	zero_or_one: /* @__PURE__ */ __name((e, r, i) => {
		let a = e.append("defs").append("marker").attr("id", i + "_" + r + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + r).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
		a.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), a.append("path").attr("d", "M9,0 L9,18");
		let o = e.append("defs").append("marker").attr("id", i + "_" + r + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + r).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
		o.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), o.append("path").attr("d", "M21,0 L21,18");
	}, "zero_or_one"),
	one_or_more: /* @__PURE__ */ __name((e, r, i) => {
		e.append("defs").append("marker").attr("id", i + "_" + r + "-oneOrMoreStart").attr("class", "marker oneOrMore " + r).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", i + "_" + r + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + r).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
	}, "one_or_more"),
	zero_or_more: /* @__PURE__ */ __name((e, r, i) => {
		let a = e.append("defs").append("marker").attr("id", i + "_" + r + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + r).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
		a.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), a.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
		let o = e.append("defs").append("marker").attr("id", i + "_" + r + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + r).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
		o.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), o.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
	}, "zero_or_more"),
	only_one_neo: /* @__PURE__ */ __name((e, r, i) => {
		let { themeVariables: a } = getConfig(), { strokeWidth: s } = a;
		e.append("defs").append("marker").attr("id", i + "_" + r + "-onlyOneStart").attr("class", "marker onlyOne " + r).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18").attr("stroke-width", `${s}`), e.append("defs").append("marker").attr("id", i + "_" + r + "-onlyOneEnd").attr("class", "marker onlyOne " + r).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18").attr("stroke-width", `${s}`);
	}, "only_one_neo"),
	zero_or_one_neo: /* @__PURE__ */ __name((e, r, i) => {
		let { themeVariables: a } = getConfig(), { strokeWidth: s, mainBkg: c } = a, l = e.append("defs").append("marker").attr("id", i + "_" + r + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + r).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
		l.append("circle").attr("fill", c ?? "white").attr("cx", 21).attr("cy", 9).attr("stroke-width", `${s}`).attr("r", 6), l.append("path").attr("d", "M9,0 L9,18").attr("stroke-width", `${s}`);
		let u = e.append("defs").append("marker").attr("id", i + "_" + r + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + r).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
		u.append("circle").attr("fill", c ?? "white").attr("cx", 9).attr("cy", 9).attr("stroke-width", `${s}`).attr("r", 6), u.append("path").attr("d", "M21,0 L21,18").attr("stroke-width", `${s}`);
	}, "zero_or_one_neo"),
	one_or_more_neo: /* @__PURE__ */ __name((e, r, i) => {
		let { themeVariables: a } = getConfig(), { strokeWidth: s } = a;
		e.append("defs").append("marker").attr("id", i + "_" + r + "-oneOrMoreStart").attr("class", "marker oneOrMore " + r).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27").attr("stroke-width", `${s}`), e.append("defs").append("marker").attr("id", i + "_" + r + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + r).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18").attr("stroke-width", `${s}`);
	}, "one_or_more_neo"),
	zero_or_more_neo: /* @__PURE__ */ __name((e, r, i) => {
		let { themeVariables: a } = getConfig(), { strokeWidth: s, mainBkg: c } = a, l = e.append("defs").append("marker").attr("id", i + "_" + r + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + r).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
		l.append("circle").attr("fill", c ?? "white").attr("cx", 45.5).attr("cy", 18).attr("r", 6).attr("stroke-width", `${s}`), l.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18").attr("stroke-width", `${s}`);
		let u = e.append("defs").append("marker").attr("id", i + "_" + r + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + r).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
		u.append("circle").attr("fill", c ?? "white").attr("cx", 11).attr("cy", 18).attr("r", 6).attr("stroke-width", `${s}`), u.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18").attr("stroke-width", `${s}`);
	}, "zero_or_more_neo"),
	requirement_arrow: /* @__PURE__ */ __name((e, r, i) => {
		e.append("defs").append("marker").attr("id", i + "_" + r + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr("d", "M0,0\n      L20,10\n      M20,10\n      L0,20");
	}, "requirement_arrow"),
	requirement_contains: /* @__PURE__ */ __name((e, r, i) => {
		let a = e.append("defs").append("marker").attr("id", i + "_" + r + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
		a.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), a.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), a.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
	}, "requirement_contains"),
	requirement_arrow_neo: /* @__PURE__ */ __name((e, r, i) => {
		let { themeVariables: a } = getConfig(), { strokeWidth: s } = a;
		e.append("defs").append("marker").attr("id", i + "_" + r + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("stroke-width", `${s}`).attr("viewBox", "0 0 25 20").append("path").attr("d", "M0,0\n      L20,10\n      M20,10\n      L0,20").attr("stroke-linejoin", "miter");
	}, "requirement_arrow_neo"),
	requirement_contains_neo: /* @__PURE__ */ __name((e, r, i) => {
		let { themeVariables: a } = getConfig(), { strokeWidth: s } = a, c = e.append("defs").append("marker").attr("id", i + "_" + r + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("g");
		c.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), c.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), c.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10), c.selectAll("*").attr("stroke-width", `${s}`);
	}, "requirement_contains_neo")
}, markers_default = insertMarkers;
export { insertEdgeLabel as a, positionEdgeLabel as c, insertEdge as i, terminalLabels as l, edgeLabels as n, markerOffsets as o, hasEdgeLabel as r, markers_default as s, clear as t };
