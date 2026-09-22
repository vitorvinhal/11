import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log, p as select_default } from "./src-DXrlgw8l.js";
import { T as getEffectiveHtmlLabels, g as evaluate, x as getConfig2 } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import { n as createText } from "./chunk-GMAD6QVW-CrbOfuRD.js";
import { a as userNodeOverrides, i as styles2String } from "./chunk-P2QGCYS3-ERnFXKBq.js";
import { t as at } from "./rough.esm-DkFRuaoy.js";
import { n as createRoundedRectPathD, r as intersect_rect_default, t as createLabel_default } from "./chunk-4HAMMTFA-C6ufBZSb.js";
import { n as getSubGraphTitleMargins } from "./chunk-GVQU2GXP-Be8dkEne.js";
var swimlane = /* @__PURE__ */ __name(async (e, i) => {
	let u = getConfig2(), { themeVariables: f, handDrawnSeed: p } = u, { clusterBkg: m, clusterBorder: h } = f, g = h, { labelStyles: _, nodeStyles: v, borderStyles: y, backgroundStyles: b } = styles2String(i), x = e.insert("g").attr("class", "cluster swimlane " + (i.cssClasses || "")).attr("id", i.id).attr("data-id", i.id).attr("data-et", "cluster").attr("data-look", i.look), S = evaluate(u.flowchart.htmlLabels), C = i.direction === "LR", w = x.insert("g").attr("class", "cluster-label swimlane-label"), T = await createText(w, i.label, {
		style: i.labelStyle,
		useHtmlLabels: S,
		isNode: !0,
		width: i.width
	}), E = T.getBBox();
	if (S) {
		let e = T.children[0], n = select_default(T);
		E = e.getBoundingClientRect(), n.attr("width", E.width), n.attr("height", E.height);
	}
	let D = i.padding ?? 0, O = i.width <= E.width + D ? E.width + D : i.width;
	i.width <= E.width + D ? i.diff = (O - i.width) / 2 - D : i.diff = -D;
	let k = i.height, A = i.y - k / 2, j = i.y + k / 2, M = i.x - O / 2, N = i.swimlaneContentTop === void 0 ? A + k / 3 : i.swimlaneContentTop, P = C ? 4 : 0, F = E.height + 2 * P, I, L;
	if (C) {
		let e = Math.max(F, E.height + 2 * P), n = M + e, r = Math.max(0, O - e);
		if (i.look === "handDrawn") {
			let a = at.svg(x), o = userNodeOverrides(i, {
				roughness: .7,
				fill: m,
				stroke: g,
				fillWeight: 3,
				seed: p
			}), s = userNodeOverrides(i, {
				roughness: .7,
				fill: "none",
				stroke: g,
				seed: p
			}), l = a.rectangle(M, A, e, k, o);
			I = x.insert(() => l, ":first-child");
			let u = a.rectangle(n, A, r, k, s);
			L = x.insert(() => u, ":first-child"), I.select("path:nth-child(2)").attr("style", y.join(";")), I.select("path").attr("style", b.join(";").replace("fill", "stroke"));
		} else I = x.insert("rect", ":first-child"), L = x.insert("rect", ":first-child"), I.attr("class", "swimlane-title").attr("style", v).attr("x", M).attr("y", A).attr("width", e).attr("height", k).attr("fill", m).attr("stroke", g), L.attr("class", "swimlane-body").attr("style", v).attr("x", n).attr("y", A).attr("width", r).attr("height", k).attr("fill", "none").attr("stroke", g);
		let a = M + e / 2, o = i.y;
		w.attr("transform", `translate(${a}, ${o}) rotate(-90) translate(${-E.width / 2}, ${-E.height / 2})`);
	} else {
		let e = Math.max(0, N - A), n = Math.min(F, e), r = A + n, a = Math.max(0, j - r), o = i.x - O / 2;
		if (i.look === "handDrawn") {
			let e = at.svg(x), s = userNodeOverrides(i, {
				roughness: .7,
				fill: m,
				stroke: g,
				fillWeight: 3,
				seed: p
			}), l = userNodeOverrides(i, {
				roughness: .7,
				fill: "none",
				stroke: g,
				seed: p
			}), u = e.rectangle(o, A, O, n, s);
			I = x.insert(() => u, ":first-child");
			let d = e.rectangle(o, r, O, a, l);
			L = x.insert(() => d, ":first-child"), I.select("path:nth-child(2)").attr("style", y.join(";")), I.select("path").attr("style", b.join(";").replace("fill", "stroke"));
		} else I = x.insert("rect", ":first-child"), L = x.insert("rect", ":first-child"), I.attr("class", "swimlane-title").attr("style", v).attr("x", o).attr("y", A).attr("width", O).attr("height", n).attr("fill", m).attr("stroke", g), L.attr("class", "swimlane-body").attr("style", v).attr("x", o).attr("y", r).attr("width", O).attr("height", a).attr("fill", "none").attr("stroke", g);
		let s = i.x - E.width / 2, l = A + (n - E.height) / 2;
		w.attr("transform", `translate(${s}, ${l})`);
	}
	if (log.trace("Swimlane data ", i, JSON.stringify(i)), _) {
		let e = w.select("span");
		e && e.attr("style", _);
	}
	return i.offsetX = 0, i.width = O, i.height = k, i.offsetY = E.height - D / 2, i.intersect = function(e) {
		return intersect_rect_default(i, e);
	}, {
		cluster: x,
		labelBBox: E
	};
}, "swimlane"), rect = /* @__PURE__ */ __name(async (e, a) => {
	log.info("Creating subgraph rect for ", a.id, a);
	let m = getConfig2(), { themeVariables: h, handDrawnSeed: g } = m, { clusterBkg: _, clusterBorder: v } = h, { labelStyles: y, nodeStyles: b, borderStyles: x, backgroundStyles: S } = styles2String(a), C = e.insert("g").attr("class", "cluster " + a.cssClasses).attr("id", a.domId).attr("data-look", a.look), w = getEffectiveHtmlLabels(m), T = C.insert("g").attr("class", "cluster-label "), E;
	E = a.labelType === "markdown" ? await createText(T, a.label, {
		style: a.labelStyle,
		useHtmlLabels: w,
		isNode: !0,
		width: a.width
	}) : await createLabel_default(T, a.label, a.labelStyle || "", !1, !0);
	let D = E.getBBox();
	if (getEffectiveHtmlLabels(m)) {
		let e = E.children[0], n = select_default(E);
		D = e.getBoundingClientRect(), n.attr("width", D.width), n.attr("height", D.height);
	}
	let O = a.width <= D.width + a.padding ? D.width + a.padding : a.width;
	a.width <= D.width + a.padding ? a.diff = (O - a.width) / 2 - a.padding : a.diff = -a.padding;
	let k = a.height, A = a.x - O / 2, j = a.y - k / 2;
	log.trace("Data ", a, JSON.stringify(a));
	let M;
	if (a.look === "handDrawn") {
		let e = at.svg(C), r = userNodeOverrides(a, {
			roughness: .7,
			fill: _,
			stroke: v,
			fillWeight: 3,
			seed: g
		}), i = e.path(createRoundedRectPathD(A, j, O, k, 0), r);
		M = C.insert(() => (log.debug("Rough node insert CXC", i), i), ":first-child"), M.select("path:nth-child(2)").attr("style", x.join(";")), M.select("path").attr("style", S.join(";").replace("fill", "stroke"));
	} else M = C.insert("rect", ":first-child"), M.attr("style", b).attr("rx", a.rx).attr("ry", a.ry).attr("x", A).attr("y", j).attr("width", O).attr("height", k);
	let { subGraphTitleTopMargin: N } = getSubGraphTitleMargins(m);
	if (T.attr("transform", `translate(${a.x - D.width / 2}, ${a.y - a.height / 2 + N})`), y) {
		let e = T.select("span");
		e && e.attr("style", y);
	}
	let P = M.node().getBBox();
	return a.offsetX = 0, a.width = P.width, a.height = P.height, a.offsetY = D.height - a.padding / 2, a.intersect = function(e) {
		return intersect_rect_default(a, e);
	}, {
		cluster: C,
		labelBBox: D
	};
}, "rect"), shapes = {
	rect,
	squareRect: rect,
	roundedWithTitle: /* @__PURE__ */ __name(async (e, n) => {
		let a = getConfig2(), { themeVariables: s, handDrawnSeed: c } = a, { altBackground: l, compositeBackground: p, compositeTitleBackground: m, nodeBorder: h } = s, g = e.insert("g").attr("class", n.cssClasses).attr("id", n.domId).attr("data-id", n.id).attr("data-look", n.look), _ = g.insert("g", ":first-child"), v = g.insert("g").attr("class", "cluster-label"), y = g.append("rect"), b = await createLabel_default(v, n.label, n.labelStyle, void 0, !0), x = b.getBBox();
		if (getEffectiveHtmlLabels(a)) {
			let e = b.children[0], n = select_default(b);
			x = e.getBoundingClientRect(), n.attr("width", x.width), n.attr("height", x.height);
		}
		let S = 0 * n.padding, C = S / 2, w = (n.width <= x.width + n.padding ? x.width + n.padding : n.width) + S;
		n.width <= x.width + n.padding ? n.diff = (w - n.width) / 2 - n.padding : n.diff = -n.padding;
		let T = n.height + S, E = n.height + S - x.height - 6, D = n.x - w / 2, O = n.y - T / 2;
		n.width = w;
		let k = n.y - n.height / 2 - C + x.height + 2, A;
		if (n.look === "handDrawn") {
			let e = n.cssClasses.includes("statediagram-cluster-alt"), r = at.svg(g), i = n.rx || n.ry ? r.path(createRoundedRectPathD(D, O, w, T, 10), {
				roughness: .7,
				fill: m,
				fillStyle: "solid",
				stroke: h,
				seed: c
			}) : r.rectangle(D, O, w, T, { seed: c });
			A = g.insert(() => i, ":first-child");
			let a = r.rectangle(D, k, w, E, {
				fill: e ? l : p,
				fillStyle: e ? "hachure" : "solid",
				stroke: h,
				seed: c
			});
			A = g.insert(() => i, ":first-child"), y = g.insert(() => a);
		} else A = _.insert("rect", ":first-child"), A.attr("class", "outer").attr("x", D).attr("y", O).attr("width", w).attr("height", T).attr("data-look", n.look), y.attr("class", "inner").attr("x", D).attr("y", k).attr("width", w).attr("height", E);
		return v.attr("transform", `translate(${n.x - x.width / 2}, ${O + 1 - (getEffectiveHtmlLabels(a) ? 0 : 3)})`), n.height = A.node().getBBox().height, n.offsetX = 0, n.offsetY = x.height - n.padding / 2, n.labelBBox = x, n.intersect = function(e) {
			return intersect_rect_default(n, e);
		}, {
			cluster: g,
			labelBBox: x
		};
	}, "roundedWithTitle"),
	noteGroup: /* @__PURE__ */ __name((e, n) => {
		let r = e.insert("g").attr("class", "note-cluster").attr("id", n.domId), i = r.insert("rect", ":first-child"), a = 0 * n.padding, o = a / 2;
		i.attr("rx", n.rx).attr("ry", n.ry).attr("x", n.x - n.width / 2 - o).attr("y", n.y - n.height / 2 - o).attr("width", n.width + a).attr("height", n.height + a).attr("fill", "none");
		let s = i.node().getBBox();
		return n.width = s.width, n.height = s.height, n.intersect = function(e) {
			return intersect_rect_default(n, e);
		}, {
			cluster: r,
			labelBBox: {
				width: 0,
				height: 0
			}
		};
	}, "noteGroup"),
	divider: /* @__PURE__ */ __name((e, n) => {
		let { themeVariables: r, handDrawnSeed: i } = getConfig2(), { nodeBorder: a } = r, s = e.insert("g").attr("class", n.cssClasses).attr("id", n.domId).attr("data-look", n.look), c = s.insert("g", ":first-child"), l = 0 * n.padding, u = n.width + l;
		n.diff = -n.padding;
		let f = n.height + l, p = n.x - u / 2, m = n.y - f / 2;
		n.width = u;
		let h;
		if (n.look === "handDrawn") {
			let e = at.svg(s).rectangle(p, m, u, f, {
				fill: "lightgrey",
				roughness: .5,
				strokeLineDash: [5],
				stroke: a,
				seed: i
			});
			h = s.insert(() => e, ":first-child");
		} else {
			h = c.insert("rect", ":first-child");
			let e = "outer";
			e = (n.look, "divider"), h.attr("class", e).attr("x", p).attr("y", m).attr("width", u).attr("height", f).attr("data-look", n.look);
		}
		return n.height = h.node().getBBox().height, n.offsetX = 0, n.offsetY = 0, n.intersect = function(e) {
			return intersect_rect_default(n, e);
		}, {
			cluster: s,
			labelBBox: {}
		};
	}, "divider"),
	kanbanSection: /* @__PURE__ */ __name(async (e, a) => {
		log.info("Creating subgraph rect for ", a.id, a);
		let f = getConfig2(), { themeVariables: m, handDrawnSeed: h } = f, { clusterBkg: g, clusterBorder: _ } = m, { labelStyles: v, nodeStyles: y, borderStyles: b, backgroundStyles: x } = styles2String(a), S = e.insert("g").attr("class", "cluster " + a.cssClasses).attr("id", a.domId).attr("data-look", a.look), C = getEffectiveHtmlLabels(f), w = S.insert("g").attr("class", "cluster-label "), T = await createText(w, a.label, {
			style: a.labelStyle,
			useHtmlLabels: C,
			isNode: !0,
			width: a.width
		}), E = T.getBBox();
		if (getEffectiveHtmlLabels(f)) {
			let e = T.children[0], n = select_default(T);
			E = e.getBoundingClientRect(), n.attr("width", E.width), n.attr("height", E.height);
		}
		let D = a.width <= E.width + a.padding ? E.width + a.padding : a.width;
		a.width <= E.width + a.padding ? a.diff = (D - a.width) / 2 - a.padding : a.diff = -a.padding;
		let O = a.height, k = a.x - D / 2, A = a.y - O / 2;
		log.trace("Data ", a, JSON.stringify(a));
		let j;
		if (a.look === "handDrawn") {
			let e = at.svg(S), r = userNodeOverrides(a, {
				roughness: .7,
				fill: g,
				stroke: _,
				fillWeight: 4,
				seed: h
			}), i = e.path(createRoundedRectPathD(k, A, D, O, a.rx), r);
			j = S.insert(() => (log.debug("Rough node insert CXC", i), i), ":first-child"), j.select("path:nth-child(2)").attr("style", b.join(";")), j.select("path").attr("style", x.join(";").replace("fill", "stroke"));
		} else j = S.insert("rect", ":first-child"), j.attr("style", y).attr("rx", a.rx).attr("ry", a.ry).attr("x", k).attr("y", A).attr("width", D).attr("height", O);
		let { subGraphTitleTopMargin: M } = getSubGraphTitleMargins(f);
		if (w.attr("transform", `translate(${a.x - E.width / 2}, ${a.y - a.height / 2 + M})`), v) {
			let e = w.select("span");
			e && e.attr("style", v);
		}
		let N = j.node().getBBox();
		return a.offsetX = 0, a.width = N.width, a.height = N.height, a.offsetY = E.height - a.padding / 2, a.intersect = function(e) {
			return intersect_rect_default(a, e);
		}, {
			cluster: S,
			labelBBox: E
		};
	}, "kanbanSection"),
	swimlane
}, clusterElems = /* @__PURE__ */ new Map(), insertCluster = /* @__PURE__ */ __name(async (e, n) => {
	let r = await shapes[n.shape || "rect"](e, n);
	return clusterElems.set(n.id, r), r;
}, "insertCluster"), clear = /* @__PURE__ */ __name(() => {
	clusterElems = /* @__PURE__ */ new Map();
}, "clear");
export { insertCluster as n, clear as t };
