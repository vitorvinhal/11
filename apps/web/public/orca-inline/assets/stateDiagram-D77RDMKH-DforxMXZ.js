import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log, p as select_default } from "./src-DXrlgw8l.js";
import { O as getUrl, c as configureSvgSize, s as common_default, x as getConfig2 } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import "./dist-DRK-BflQ.js";
import { _ as utils_default, tt as basis_default } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as line_default } from "./line-Tv4F_Oj_.js";
import "./chunk-PWAF6VOD-xw3v3CBz.js";
import "./chunk-GMAD6QVW-CrbOfuRD.js";
import "./chunk-P2QGCYS3-ERnFXKBq.js";
import "./chunk-4HAMMTFA-C6ufBZSb.js";
import "./chunk-GVQU2GXP-Be8dkEne.js";
import "./chunk-OSK3NFVY-C6YyZAmC.js";
import { t as Graph } from "./graphlib-CFSw-S2d.js";
import { t as layout } from "./dagre-CpTx_4DI.js";
import "./chunk-F27PBJKO-DSkpyj5-.js";
import "./chunk-XXDRQBXY-CP9NJsKO.js";
import "./chunk-POPQ4Y6H-3Rat7IEA.js";
import "./chunk-L3NEJ4N5-B-D1dHln.js";
import "./chunk-TLUHSLCS-B5wVOksj.js";
import { i as styles_default, n as stateDiagram_default, t as StateDB } from "./chunk-IMKFNOWR-C_BaI-wA.js";
var drawStartState = /* @__PURE__ */ __name((e) => e.append("circle").attr("class", "start-state").attr("r", getConfig2().state.sizeUnit).attr("cx", getConfig2().state.padding + getConfig2().state.sizeUnit).attr("cy", getConfig2().state.padding + getConfig2().state.sizeUnit), "drawStartState"), drawDivider = /* @__PURE__ */ __name((e) => e.append("line").style("stroke", "grey").style("stroke-dasharray", "3").attr("x1", getConfig2().state.textHeight).attr("class", "divider").attr("x2", getConfig2().state.textHeight * 2).attr("y1", 0).attr("y2", 0), "drawDivider"), drawSimpleState = /* @__PURE__ */ __name((e, h) => {
	let g = e.append("text").attr("x", 2 * getConfig2().state.padding).attr("y", getConfig2().state.textHeight + 2 * getConfig2().state.padding).attr("font-size", getConfig2().state.fontSize).attr("class", "state-title").text(h.id), _ = g.node().getBBox();
	return e.insert("rect", ":first-child").attr("x", getConfig2().state.padding).attr("y", getConfig2().state.padding).attr("width", _.width + 2 * getConfig2().state.padding).attr("height", _.height + 2 * getConfig2().state.padding).attr("rx", getConfig2().state.radius), g;
}, "drawSimpleState"), drawDescrState = /* @__PURE__ */ __name((h, g) => {
	let _ = /* @__PURE__ */ __name(function(e, h, g) {
		let _ = e.append("tspan").attr("x", 2 * getConfig2().state.padding).text(h);
		g || _.attr("dy", getConfig2().state.textHeight);
	}, "addTspan"), v = h.append("text").attr("x", 2 * getConfig2().state.padding).attr("y", getConfig2().state.textHeight + 1.3 * getConfig2().state.padding).attr("font-size", getConfig2().state.fontSize).attr("class", "state-title").text(g.descriptions[0]).node().getBBox(), y = v.height, x = h.append("text").attr("x", getConfig2().state.padding).attr("y", y + getConfig2().state.padding * .4 + getConfig2().state.dividerMargin + getConfig2().state.textHeight).attr("class", "state-description"), S = !0, C = !0;
	g.descriptions.forEach(function(e) {
		S || (_(x, e, C), C = !1), S = !1;
	});
	let w = h.append("line").attr("x1", getConfig2().state.padding).attr("y1", getConfig2().state.padding + y + getConfig2().state.dividerMargin / 2).attr("y2", getConfig2().state.padding + y + getConfig2().state.dividerMargin / 2).attr("class", "descr-divider"), T = x.node().getBBox(), E = Math.max(T.width, v.width);
	return w.attr("x2", E + 3 * getConfig2().state.padding), h.insert("rect", ":first-child").attr("x", getConfig2().state.padding).attr("y", getConfig2().state.padding).attr("width", E + 2 * getConfig2().state.padding).attr("height", T.height + y + 2 * getConfig2().state.padding).attr("rx", getConfig2().state.radius), h;
}, "drawDescrState"), addTitleAndBox = /* @__PURE__ */ __name((e, h, g) => {
	let _ = getConfig2().state.padding, v = 2 * getConfig2().state.padding, y = e.node().getBBox(), x = y.width, S = y.x, C = e.append("text").attr("x", 0).attr("y", getConfig2().state.titleShift).attr("font-size", getConfig2().state.fontSize).attr("class", "state-title").text(h.id), w = C.node().getBBox().width + v, T = Math.max(w, x);
	T === x && (T += v);
	let E, D = e.node().getBBox();
	h.doc, E = S - _, w > x && (E = (x - T) / 2 + _), Math.abs(S - D.x) < _ && w > x && (E = S - (w - x) / 2);
	let O = 1 - getConfig2().state.textHeight;
	return e.insert("rect", ":first-child").attr("x", E).attr("y", O).attr("class", g ? "alt-composit" : "composit").attr("width", T).attr("height", D.height + getConfig2().state.textHeight + getConfig2().state.titleShift + 1).attr("rx", "0"), C.attr("x", E + _), w <= x && C.attr("x", S + (T - v) / 2 - w / 2 + _), e.insert("rect", ":first-child").attr("x", E).attr("y", getConfig2().state.titleShift - getConfig2().state.textHeight - getConfig2().state.padding).attr("width", T).attr("height", getConfig2().state.textHeight * 3).attr("rx", getConfig2().state.radius), e.insert("rect", ":first-child").attr("x", E).attr("y", getConfig2().state.titleShift - getConfig2().state.textHeight - getConfig2().state.padding).attr("width", T).attr("height", D.height + 3 + 2 * getConfig2().state.textHeight).attr("rx", getConfig2().state.radius), e;
}, "addTitleAndBox"), drawEndState = /* @__PURE__ */ __name((e) => (e.append("circle").attr("class", "end-state-outer").attr("r", getConfig2().state.sizeUnit + getConfig2().state.miniPadding).attr("cx", getConfig2().state.padding + getConfig2().state.sizeUnit + getConfig2().state.miniPadding).attr("cy", getConfig2().state.padding + getConfig2().state.sizeUnit + getConfig2().state.miniPadding), e.append("circle").attr("class", "end-state-inner").attr("r", getConfig2().state.sizeUnit).attr("cx", getConfig2().state.padding + getConfig2().state.sizeUnit + 2).attr("cy", getConfig2().state.padding + getConfig2().state.sizeUnit + 2)), "drawEndState"), drawForkJoinState = /* @__PURE__ */ __name((e, h) => {
	let g = getConfig2().state.forkWidth, _ = getConfig2().state.forkHeight;
	if (h.parentId) {
		let e = g;
		g = _, _ = e;
	}
	return e.append("rect").style("stroke", "black").style("fill", "black").attr("width", g).attr("height", _).attr("x", getConfig2().state.padding).attr("y", getConfig2().state.padding);
}, "drawForkJoinState"), _drawLongText = /* @__PURE__ */ __name((e, h, g, _) => {
	let v = 0, x = _.append("text");
	x.style("text-anchor", "start"), x.attr("class", "noteText");
	let S = e.replace(/\r\n/g, "<br/>");
	S = S.replace(/\n/g, "<br/>");
	let C = S.split(common_default.lineBreakRegex), w = 1.25 * getConfig2().state.noteMargin;
	for (let e of C) {
		let _ = e.trim();
		if (_.length > 0) {
			let e = x.append("tspan");
			if (e.text(_), w === 0) {
				let h = e.node().getBBox();
				w += h.height;
			}
			v += w, e.attr("x", h + getConfig2().state.noteMargin), e.attr("y", g + v + 1.25 * getConfig2().state.noteMargin);
		}
	}
	return {
		textWidth: x.node().getBBox().width,
		textHeight: v
	};
}, "_drawLongText"), drawNote = /* @__PURE__ */ __name((e, h) => {
	h.attr("class", "state-note");
	let g = h.append("rect").attr("x", 0).attr("y", getConfig2().state.padding), { textWidth: _, textHeight: v } = _drawLongText(e, 0, 0, h.append("g"));
	return g.attr("height", v + 2 * getConfig2().state.noteMargin), g.attr("width", _ + getConfig2().state.noteMargin * 2), g;
}, "drawNote"), drawState = /* @__PURE__ */ __name(function(e, h) {
	let g = h.id, _ = {
		id: g,
		label: h.id,
		width: 0,
		height: 0
	}, v = e.append("g").attr("id", g).attr("class", "stateGroup");
	h.type === "start" && drawStartState(v), h.type === "end" && drawEndState(v), (h.type === "fork" || h.type === "join") && drawForkJoinState(v, h), h.type === "note" && drawNote(h.note.text, v), h.type === "divider" && drawDivider(v), h.type === "default" && h.descriptions.length === 0 && drawSimpleState(v, h), h.type === "default" && h.descriptions.length > 0 && drawDescrState(v, h);
	let y = v.node().getBBox();
	return _.width = y.width + 2 * getConfig2().state.padding, _.height = y.height + 2 * getConfig2().state.padding, _;
}, "drawState"), edgeCount = 0, drawEdge = /* @__PURE__ */ __name(function(g, v, w) {
	let T = /* @__PURE__ */ __name(function(e) {
		switch (e) {
			case StateDB.relationType.AGGREGATION: return "aggregation";
			case StateDB.relationType.EXTENSION: return "extension";
			case StateDB.relationType.COMPOSITION: return "composition";
			case StateDB.relationType.DEPENDENCY: return "dependency";
		}
	}, "getRelationType");
	v.points = v.points.filter((e) => !Number.isNaN(e.y));
	let E = v.points, D = line_default().x(function(e) {
		return e.x;
	}).y(function(e) {
		return e.y;
	}).curve(basis_default), k = g.append("path").attr("d", D(E)).attr("id", "edge" + edgeCount).attr("class", "transition"), A = "";
	if (getConfig2().state.arrowMarkerAbsolute && (A = getUrl(!0)), k.attr("marker-end", "url(" + A + "#" + T(StateDB.relationType.DEPENDENCY) + "End)"), w.title !== void 0) {
		let e = g.append("g").attr("class", "stateLabel"), { x: _, y: S } = utils_default.calcLabelPosition(v.points), C = common_default.getRows(w.title), T = 0, E = [], D = 0, O = 0;
		for (let g = 0; g <= C.length; g++) {
			let v = e.append("text").attr("text-anchor", "middle").text(C[g]).attr("x", _).attr("y", S + T), y = v.node().getBBox();
			D = Math.max(D, y.width), O = Math.min(O, y.x), log.info(y.x, _, S + T), T === 0 && (T = v.node().getBBox().height, log.info("Title height", T, S)), E.push(v);
		}
		let k = T * C.length;
		if (C.length > 1) {
			let e = (C.length - 1) * T * .5;
			E.forEach((h, g) => h.attr("y", S + g * T - e)), k = T * C.length;
		}
		let A = e.node().getBBox();
		e.insert("rect", ":first-child").attr("class", "box").attr("x", _ - D / 2 - getConfig2().state.padding / 2).attr("y", S - k / 2 - getConfig2().state.padding / 2 - 3.5).attr("width", D + getConfig2().state.padding).attr("height", k + getConfig2().state.padding), log.info(A);
	}
	edgeCount++;
}, "drawEdge"), conf, transformationLog = {}, setConf = /* @__PURE__ */ __name(function() {}, "setConf"), insertMarkers = /* @__PURE__ */ __name(function(e) {
	e.append("defs").append("marker").attr("id", "dependencyEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "insertMarkers"), draw = /* @__PURE__ */ __name(function(e, _, y, x) {
	conf = getConfig2().state;
	let S = getConfig2().securityLevel, C;
	S === "sandbox" && (C = select_default("#i" + _));
	let w = select_default(S === "sandbox" ? C.nodes()[0].contentDocument.body : "body"), T = S === "sandbox" ? C.nodes()[0].contentDocument : document;
	log.debug("Rendering diagram " + e);
	let E = w.select(`[id='${_}']`);
	insertMarkers(E), renderDoc(x.db.getRootDoc(), E.append("g").attr("id", _ + "-root"), void 0, !1, w, T, x);
	let D = conf.padding, O = E.node().getBBox(), k = O.width + D * 2, A = O.height + D * 2;
	configureSvgSize(E, A, k * 1.75, conf.useMaxWidth), E.attr("viewBox", `${O.x - conf.padding}  ${O.y - conf.padding} ` + k + " " + A);
}, "draw"), getLabelWidth = /* @__PURE__ */ __name((e) => e ? e.length * conf.fontSizeFactor : 1, "getLabelWidth"), renderDoc = /* @__PURE__ */ __name((e, g, _, v, b, x, S) => {
	let C = new Graph({
		compound: !0,
		multigraph: !0
	}), E, D = !0;
	for (E = 0; E < e.length; E++) if (e[E].stmt === "relation") {
		D = !1;
		break;
	}
	_ ? C.setGraph({
		rankdir: "LR",
		multigraph: !0,
		compound: !0,
		ranker: "tight-tree",
		ranksep: D ? 1 : conf.edgeLengthFactor,
		nodeSep: D ? 1 : 50,
		isMultiGraph: !0
	}) : C.setGraph({
		rankdir: "TB",
		multigraph: !0,
		compound: !0,
		ranksep: D ? 1 : conf.edgeLengthFactor,
		nodeSep: D ? 1 : 50,
		ranker: "tight-tree",
		isMultiGraph: !0
	}), C.setDefaultEdgeLabel(function() {
		return {};
	});
	let O = S.db.getStates(), k = S.db.getRelations(), A = Object.keys(O);
	for (let e of A) {
		let h = O[e];
		_ && (h.parentId = _);
		let y;
		if (h.doc) {
			let e = g.append("g").attr("id", h.id).attr("class", "stateGroup");
			y = renderDoc(h.doc, e, h.id, !v, b, x, S);
			{
				e = addTitleAndBox(e, h, v);
				let g = e.node().getBBox();
				y.width = g.width, y.height = g.height + conf.padding / 2, transformationLog[h.id] = { y: conf.compositTitleSize };
			}
		} else y = drawState(g, h, C);
		if (h.note) {
			let e = drawState(g, {
				descriptions: [],
				id: h.id + "-note",
				note: h.note,
				type: "note"
			}, C);
			h.note.position === "left of" ? (C.setNode(y.id + "-note", e), C.setNode(y.id, y)) : (C.setNode(y.id, y), C.setNode(y.id + "-note", e)), C.setParent(y.id, y.id + "-group"), C.setParent(y.id + "-note", y.id + "-group");
		} else C.setNode(y.id, y);
	}
	log.debug("Count=", C.nodeCount(), C);
	let j = 0;
	k.forEach(function(e) {
		j++, log.debug("Setting edge", e), C.setEdge(e.id1, e.id2, {
			relation: e,
			width: getLabelWidth(e.title),
			height: conf.labelHeight * common_default.getRows(e.title).length,
			labelpos: "c"
		}, "id" + j);
	}), layout(C), log.debug("Graph after layout", C.nodes());
	let M = g.node();
	C.nodes().forEach(function(e) {
		e !== void 0 && C.node(e) !== void 0 ? (log.warn("Node " + e + ": " + JSON.stringify(C.node(e))), b.select("#" + M.id + " #" + e).attr("transform", "translate(" + (C.node(e).x - C.node(e).width / 2) + "," + (C.node(e).y + (transformationLog[e] ? transformationLog[e].y : 0) - C.node(e).height / 2) + " )"), b.select("#" + M.id + " #" + e).attr("data-x-shift", C.node(e).x - C.node(e).width / 2), x.querySelectorAll("#" + M.id + " #" + e + " .divider").forEach((e) => {
			let h = e.parentElement, g = 0, _ = 0;
			h && (h.parentElement && (g = h.parentElement.getBBox().width), _ = parseInt(h.getAttribute("data-x-shift"), 10), Number.isNaN(_) && (_ = 0)), e.setAttribute("x1", 0 - _ + 8), e.setAttribute("x2", g - _ - 8);
		})) : log.debug("No Node " + e + ": " + JSON.stringify(C.node(e)));
	});
	let N = M.getBBox();
	C.edges().forEach(function(e) {
		e !== void 0 && C.edge(e) !== void 0 && (log.debug("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(C.edge(e))), drawEdge(g, C.edge(e), C.edge(e).relation));
	}), N = M.getBBox();
	let P = {
		id: _ || "root",
		label: _ || "root",
		width: 0,
		height: 0
	};
	return P.width = N.width + 2 * conf.padding, P.height = N.height + 2 * conf.padding, log.debug("Doc rendered", P, C), P;
}, "renderDoc"), diagram = {
	parser: stateDiagram_default,
	get db() {
		return new StateDB(1);
	},
	renderer: {
		setConf,
		draw
	},
	styles: styles_default,
	init: /* @__PURE__ */ __name((e) => {
		e.state ||= {}, e.state.arrowMarkerAbsolute = e.arrowMarkerAbsolute;
	}, "init")
};
export { diagram };
