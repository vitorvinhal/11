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
import { m as log } from "./src-DXrlgw8l.js";
import { H as setAccDescription, K as setDiagramTitle, U as setAccTitle, a as clear, c as configureSvgSize, f as defaultConfig_default, v as getAccDescription, w as getDiagramTitle, x as getConfig2, y as getAccTitle } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import { t as ordinal } from "./ordinal-BPgqv6Gv.js";
import { n as constant_default } from "./path-BhQxKYpt.js";
import { m as tau } from "./dist-DRK-BflQ.js";
import { t as arc_default } from "./arc-DQn371Pg.js";
import { t as array_default } from "./array-Bk7XQ8KN.js";
import { a as cleanAndMerge, m as parseFontSize } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as selectSvgElement } from "./chunk-CLGD4ZFX--a6S7Yag.js";
import { t as populateCommonDb } from "./chunk-JWPE2WC7-Cv3uUh-s.js";
import { n as parse } from "./mermaid-parser.core-D-n-19AD.js";
function descending_default(t, n) {
	return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function identity_default(t) {
	return t;
}
function pie_default() {
	var t = identity_default, n = descending_default, r = null, i = constant_default(0), a = constant_default(tau), o = constant_default(0);
	function s(s) {
		var c, l = (s = array_default(s)).length, u, d, f = 0, p = Array(l), m = Array(l), g = +i.apply(this, arguments), v = Math.min(tau, Math.max(-tau, a.apply(this, arguments) - g)), y, b = Math.min(Math.abs(v) / l, o.apply(this, arguments)), x = b * (v < 0 ? -1 : 1), S;
		for (c = 0; c < l; ++c) (S = m[p[c] = c] = +t(s[c], c, s)) > 0 && (f += S);
		for (n == null ? r != null && p.sort(function(t, n) {
			return r(s[t], s[n]);
		}) : p.sort(function(t, r) {
			return n(m[t], m[r]);
		}), c = 0, d = f ? (v - l * x) / f : 0; c < l; ++c, g = y) u = p[c], S = m[u], y = g + (S > 0 ? S * d : 0) + x, m[u] = {
			data: s[u],
			index: c,
			value: S,
			startAngle: g,
			endAngle: y,
			padAngle: b
		};
		return m;
	}
	return s.value = function(n) {
		return arguments.length ? (t = typeof n == "function" ? n : constant_default(+n), s) : t;
	}, s.sortValues = function(t) {
		return arguments.length ? (n = t, r = null, s) : n;
	}, s.sort = function(t) {
		return arguments.length ? (r = t, n = null, s) : r;
	}, s.startAngle = function(t) {
		return arguments.length ? (i = typeof t == "function" ? t : constant_default(+t), s) : i;
	}, s.endAngle = function(t) {
		return arguments.length ? (a = typeof t == "function" ? t : constant_default(+t), s) : a;
	}, s.padAngle = function(t) {
		return arguments.length ? (o = typeof t == "function" ? t : constant_default(+t), s) : o;
	}, s;
}
var DEFAULT_PIE_CONFIG = defaultConfig_default.pie, DEFAULT_PIE_DB = {
	sections: /* @__PURE__ */ new Map(),
	showData: !1,
	config: DEFAULT_PIE_CONFIG
}, sections = DEFAULT_PIE_DB.sections, showData = DEFAULT_PIE_DB.showData, config = structuredClone(DEFAULT_PIE_CONFIG), db = {
	getConfig: /* @__PURE__ */ __name(() => structuredClone(config), "getConfig"),
	clear: /* @__PURE__ */ __name(() => {
		sections = /* @__PURE__ */ new Map(), showData = DEFAULT_PIE_DB.showData, clear();
	}, "clear"),
	setDiagramTitle,
	getDiagramTitle,
	setAccTitle,
	getAccTitle,
	setAccDescription,
	getAccDescription,
	addSection: /* @__PURE__ */ __name(({ label: t, value: r }) => {
		if (r < 0) throw Error(`"${t}" has invalid value: ${r}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
		sections.has(t) || (sections.set(t, r), log.debug(`added new section: ${t}, with value: ${r}`));
	}, "addSection"),
	getSections: /* @__PURE__ */ __name(() => sections, "getSections"),
	setShowData: /* @__PURE__ */ __name((t) => {
		showData = t;
	}, "setShowData"),
	getShowData: /* @__PURE__ */ __name(() => showData, "getShowData")
}, populateDb = /* @__PURE__ */ __name((t, n) => {
	populateCommonDb(t, n), n.setShowData(t.showData), t.sections.map(n.addSection);
}, "populateDb"), parser = { parse: /* @__PURE__ */ __name(async (t) => {
	let r = await parse("pie", t);
	log.debug(r), populateDb(r, db);
}, "parse") }, pieStyles_default = /* @__PURE__ */ __name((t) => `
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`, "getStyles"), createPieArcs = /* @__PURE__ */ __name((t) => {
	let n = [...t.values()].reduce((t, n) => t + n, 0), r = [...t.entries()].map(([t, n]) => ({
		label: t,
		value: n
	})).filter((t) => t.value / n * 100 >= 1);
	return pie_default().value((t) => t.value).sort(null)(r);
}, "createPieArcs"), diagram = {
	parser,
	db,
	renderer: { draw: /* @__PURE__ */ __name((t, r, i, a) => {
		log.debug("rendering pie chart\n" + t);
		let o = a.db, c = getConfig2(), l = cleanAndMerge(o.getConfig(), c.pie), u = selectSvgElement(r), f = u.append("g");
		f.attr("transform", "translate(225,225)");
		let { themeVariables: m } = c, [h] = parseFontSize(m.pieOuterStrokeWidth);
		h ??= 2;
		let _ = l.legendPosition, x = l.textPosition, S = l.donutHole > 0 && l.donutHole <= .9 ? l.donutHole : 0, C = arc_default().innerRadius(S * 185).outerRadius(185), w = arc_default().innerRadius(185 * x).outerRadius(185 * x), T = f.append("g");
		T.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 185 + h / 2).attr("class", "pieOuterCircle");
		let E = o.getSections(), D = createPieArcs(E), O = [
			m.pie1,
			m.pie2,
			m.pie3,
			m.pie4,
			m.pie5,
			m.pie6,
			m.pie7,
			m.pie8,
			m.pie9,
			m.pie10,
			m.pie11,
			m.pie12
		], k = 0;
		E.forEach((t) => {
			k += t;
		});
		let A = D.filter((t) => (t.data.value / k * 100).toFixed(0) !== "0"), j = ordinal(O).domain([...E.keys()]);
		T.selectAll("mySlices").data(A).enter().append("path").attr("d", C).attr("fill", (t) => j(t.data.label)).attr("class", (t) => {
			let n = "pieCircle";
			return l.highlightSlice === "hover" ? n += " highlightedOnHover" : l.highlightSlice === t.data.label && (n += " highlighted"), n;
		}), T.selectAll("mySlices").data(A).enter().append("text").text((t) => (t.data.value / k * 100).toFixed(0) + "%").attr("transform", (t) => "translate(" + w.centroid(t) + ")").style("text-anchor", "middle").attr("class", "slice");
		let M = f.append("text").text(o.getDiagramTitle()).attr("x", 0).attr("y", -400 / 2).attr("class", "pieTitleText"), N = [...E.entries()].map(([t, n]) => ({
			label: t,
			value: n
		})), P = f.selectAll(".legend").data(N).enter().append("g").attr("class", "legend");
		P.append("rect").attr("width", 18).attr("height", 18).style("fill", (t) => j(t.label)).style("stroke", (t) => j(t.label)), P.append("text").attr("x", 22).attr("y", 14).text((t) => o.getShowData() ? `${t.label} [${t.value}]` : t.label);
		let F = Math.max(...P.selectAll("text").nodes().map((t) => t?.getBoundingClientRect().width ?? 0)), I = 450, L = 490, R = N.length * 22;
		switch (_) {
			case "center":
				P.attr("transform", (t, n) => {
					let r = 22 * N.length / 2, i = -F / 2 - 22, a = n * 22 - r;
					return "translate(" + i + "," + a + ")";
				});
				break;
			case "top":
				I += R, P.attr("transform", (t, n) => `translate(${-F / 2 - 22}, ${n * 22 - 185})`), T.attr("transform", () => `translate(0, ${R + 22})`);
				break;
			case "bottom":
				I += R, P.attr("transform", (t, n) => {
					let r = -F / 2 - 22, i = n * 22 - -207;
					return "translate(" + r + "," + i + ")";
				});
				break;
			case "left":
				L += 22 + F, P.attr("transform", (t, n) => {
					let r = 22 * N.length / 2;
					return "translate(-207," + (n * 22 - r) + ")";
				}), T.attr("transform", () => `translate(${F + 18 + 4}, 0)`);
				break;
			case "right":
			default:
				L += 22 + F, P.attr("transform", (t, n) => {
					let r = 22 * N.length / 2;
					return "translate(216," + (n * 22 - r) + ")";
				});
				break;
		}
		let z = M.node()?.getBoundingClientRect().width ?? 0, B = 450 / 2 - z / 2, V = 450 / 2 + z / 2, H = Math.min(0, B), U = Math.max(L, V) - H;
		u.attr("viewBox", `${H} 0 ${U} ${I}`), configureSvgSize(u, I, U, l.useMaxWidth);
	}, "draw") },
	styles: pieStyles_default
};
export { diagram };
