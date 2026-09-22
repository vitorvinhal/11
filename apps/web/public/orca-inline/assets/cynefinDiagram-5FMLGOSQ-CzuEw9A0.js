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
import { D as getThemeVariables3, H as setAccDescription, K as setDiagramTitle, U as setAccTitle, a as clear, b as getConfig, c as configureSvgSize, f as defaultConfig_default, v as getAccDescription, w as getDiagramTitle, y as getAccTitle } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import "./dist-DRK-BflQ.js";
import { a as cleanAndMerge } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as selectSvgElement } from "./chunk-CLGD4ZFX--a6S7Yag.js";
import { t as populateCommonDb } from "./chunk-JWPE2WC7-Cv3uUh-s.js";
import { n as parse } from "./mermaid-parser.core-D-n-19AD.js";
var createDefaultData = /* @__PURE__ */ __name(() => ({
	domains: /* @__PURE__ */ new Map(),
	transitions: []
}), "createDefaultData"), data = createDefaultData(), db = {
	getDomains: /* @__PURE__ */ __name(() => data.domains, "getDomains"),
	getTransitions: /* @__PURE__ */ __name(() => data.transitions, "getTransitions"),
	setDomains: /* @__PURE__ */ __name((e) => {
		if (e) for (let u of e) {
			let e = u.domain, d = (u.items ?? []).map((e) => ({ label: e.label }));
			data.domains.set(e, {
				name: e,
				items: d
			});
		}
	}, "setDomains"),
	setTransitions: /* @__PURE__ */ __name((e) => {
		e && (data.transitions = e.filter((e) => e.from === e.to ? (log.warn(`Cynefin: self-loop transition on domain "${e.from}" is not meaningful and will be skipped.`), !1) : !0).map((e) => ({
			from: e.from,
			to: e.to,
			label: e.label || void 0
		})));
	}, "setTransitions"),
	getConfig: /* @__PURE__ */ __name(() => cleanAndMerge({
		...defaultConfig_default.cynefin,
		...getConfig().cynefin
	}), "getConfig"),
	clear: /* @__PURE__ */ __name(() => {
		clear(), data = createDefaultData();
	}, "clear"),
	setAccTitle,
	getAccTitle,
	setDiagramTitle,
	getDiagramTitle,
	getAccDescription,
	setAccDescription
}, populate = /* @__PURE__ */ __name((e) => {
	populateCommonDb(e, db), db.setDomains(e.domains), db.setTransitions(e.transitions);
}, "populate"), parser = { parse: /* @__PURE__ */ __name(async (e) => {
	let d = await parse("cynefin", e);
	log.debug(d), populate(d);
}, "parse") };
function seededRandom(e) {
	let u = e + 1831565813 | 0;
	return u = Math.imul(u ^ u >>> 15, u | 1), u ^= u + Math.imul(u ^ u >>> 7, u | 61), ((u ^ u >>> 14) >>> 0) / 4294967296;
}
__name(seededRandom, "seededRandom");
function hashString(e) {
	let u = 0;
	for (let d = 0; d < e.length; d++) {
		let f = e.charCodeAt(d);
		u = (u << 5) - u + f, u |= 0;
	}
	return u;
}
__name(hashString, "hashString");
function resolveSeed(e, u) {
	return typeof e == "number" && Number.isFinite(e) && e !== 0 ? e : hashString(u);
}
__name(resolveSeed, "resolveSeed");
function generateFoldPath(e, u, d, f) {
	let p = e / 2, m = f ?? e * .015, h = u / 7, g = [];
	for (let e = 0; e <= 7; e++) {
		let u = seededRandom(d + e * 17) * m * 2 - m;
		g.push({
			x: p + u,
			y: e * h
		});
	}
	let _ = `M${g[0].x},${g[0].y}`;
	for (let e = 0; e < g.length - 1; e++) {
		let u = g[e], f = g[e + 1], p = (u.y + f.y) / 2, h = e % 2 == 0 ? 1 : -1, v = m * 1.5 * h * seededRandom(d + e * 31 + 7), y = u.x + v, b = p, x = f.x - v;
		_ += ` C${y},${b} ${x},${p} ${f.x},${f.y}`;
	}
	return _;
}
__name(generateFoldPath, "generateFoldPath");
function generateHorizontalBoundary(e, u, d, f) {
	let p = u / 2, m = f ?? u * .015, h = e / 7, g = [];
	for (let e = 0; e <= 7; e++) {
		let u = seededRandom(d + e * 23) * m * 2 - m;
		g.push({
			x: e * h,
			y: p + u
		});
	}
	let _ = `M${g[0].x},${g[0].y}`;
	for (let e = 0; e < g.length - 1; e++) {
		let u = g[e], f = g[e + 1], p = (u.x + f.x) / 2, h = e % 2 == 0 ? 1 : -1, v = m * 1.5 * h * seededRandom(d + e * 37 + 11), y = p, b = u.y + v, x = p, S = f.y - v;
		_ += ` C${y},${b} ${x},${S} ${f.x},${f.y}`;
	}
	return _;
}
__name(generateHorizontalBoundary, "generateHorizontalBoundary");
function generateCliffPath(e, u) {
	let d = e / 2, f = u * .5, p = u, m = e * .03;
	return [
		`M${d},${f}`,
		`C${d + m},${f + (p - f) * .2}`,
		`${d - m * 1.5},${f + (p - f) * .55}`,
		`${d + m * .5},${f + (p - f) * .75}`,
		`C${d - m},${f + (p - f) * .85}`,
		`${d + m * .3},${f + (p - f) * .95}`,
		`${d},${p}`
	].join(" ");
}
__name(generateCliffPath, "generateCliffPath");
function generateConfusionPath(e, u, d, f) {
	return [
		`M${e - d},${u}`,
		`A${d},${f} 0 1,1 ${e + d},${u}`,
		`A${d},${f} 0 1,1 ${e - d},${u}`,
		"Z"
	].join(" ");
}
__name(generateConfusionPath, "generateConfusionPath");
var DOMAIN_META = {
	complex: {
		model: "Probe → Sense → Respond",
		practice: "Emergent Practices"
	},
	complicated: {
		model: "Sense → Analyse → Respond",
		practice: "Good Practices"
	},
	clear: {
		model: "Sense → Categorise → Respond",
		practice: "Best Practices"
	},
	chaotic: {
		model: "Act → Sense → Respond",
		practice: "Novel Practices"
	},
	confusion: {
		model: "",
		practice: "Disorder"
	}
}, getDomainLayouts = /* @__PURE__ */ __name((e, u) => {
	let d = e / 2, f = u / 2;
	return {
		complex: {
			cx: d / 2,
			cy: f / 2,
			x: 0,
			y: 0,
			w: d,
			h: f
		},
		complicated: {
			cx: d + d / 2,
			cy: f / 2,
			x: d,
			y: 0,
			w: d,
			h: f
		},
		chaotic: {
			cx: d / 2,
			cy: f + f / 2,
			x: 0,
			y: f,
			w: d,
			h: f
		},
		clear: {
			cx: d + d / 2,
			cy: f + f / 2,
			x: d,
			y: f,
			w: d,
			h: f
		},
		confusion: {
			cx: d,
			cy: f,
			x: d * .7,
			y: f * .7,
			w: d * .6,
			h: f * .6
		}
	};
}, "getDomainLayouts"), getCynefinDomainColors = /* @__PURE__ */ __name(() => cleanAndMerge(getThemeVariables3(), getConfig().themeVariables).cynefin, "getCynefinDomainColors"), MAX_CONFUSION_ITEMS = 3, renderer = { draw: /* @__PURE__ */ __name((e, d, f, p) => {
	let m = p.db, h = m.getDomains(), g = m.getTransitions(), v = m.getDiagramTitle(), y = m.getAccTitle(), b = m.getAccDescription(), x = m.getConfig(), S = getCynefinDomainColors();
	log.debug("Rendering Cynefin diagram");
	let w = x.width, T = x.height, E = x.padding, D = x.showDomainDescriptions, O = x.boundaryAmplitude, k = w + E * 2, A = T + E * 2, j = {
		complex: S.complexBg,
		complicated: S.complicatedBg,
		clear: S.clearBg,
		chaotic: S.chaoticBg,
		confusion: S.confusionBg
	}, M = selectSvgElement(d);
	configureSvgSize(M, A, k, x.useMaxWidth ?? !0), M.attr("viewBox", `0 0 ${k} ${A}`), y && M.append("title").text(y), b && M.append("desc").text(b);
	let N = M.append("g").attr("transform", `translate(${E}, ${E})`), P = getDomainLayouts(w, T), F = resolveSeed(x.seed, d), I = N.append("g").attr("class", "cynefin-backgrounds"), L = [
		"complex",
		"complicated",
		"chaotic",
		"clear"
	];
	for (let e of L) {
		let u = P[e];
		I.append("rect").attr("class", "cynefinDomain").attr("x", u.x).attr("y", u.y).attr("width", u.w).attr("height", u.h).attr("fill", j[e]).attr("fill-opacity", .4).attr("stroke", "none");
	}
	let R = N.append("g").attr("class", "cynefin-boundaries");
	R.append("path").attr("class", "cynefinBoundary").attr("d", generateFoldPath(w, T, F, O)).attr("fill", "none"), R.append("path").attr("class", "cynefinBoundary").attr("d", generateHorizontalBoundary(w, T, F + 100, O)).attr("fill", "none"), R.append("path").attr("class", "cynefinCliff").attr("d", generateCliffPath(w, T)).attr("fill", "none");
	let z = w * .15, B = T * .15;
	N.append("path").attr("class", "cynefinConfusion").attr("d", generateConfusionPath(w / 2, T / 2, z, B)).attr("fill", j.confusion).attr("fill-opacity", .5);
	let V = N.append("g").attr("class", "cynefin-labels");
	for (let e of L) {
		let u = P[e];
		V.append("text").attr("class", "cynefinDomainLabel").attr("x", u.cx).attr("y", D ? u.cy - 30 : u.cy).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(e.charAt(0).toUpperCase() + e.slice(1));
	}
	if (V.append("text").attr("class", "cynefinDomainLabel").attr("x", w / 2).attr("y", D ? T / 2 - 10 : T / 2).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text("Confusion"), D) {
		let e = N.append("g").attr("class", "cynefin-subtitles");
		for (let u of L) {
			let d = P[u], f = DOMAIN_META[u];
			e.append("text").attr("class", "cynefinSubtitle").attr("x", d.cx).attr("y", d.cy - 10).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(f.model), e.append("text").attr("class", "cynefinSubtitle").attr("x", d.cx).attr("y", d.cy + 5).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(f.practice);
		}
		e.append("text").attr("class", "cynefinSubtitle").attr("x", w / 2).attr("y", T / 2 + 8).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(DOMAIN_META.confusion.practice);
	}
	let H = N.append("g").attr("class", "cynefin-items");
	for (let e of [
		"complex",
		"complicated",
		"chaotic",
		"clear",
		"confusion"
	]) {
		let u = h.get(e);
		if (!u || u.items.length === 0) continue;
		let d = P[e], f = e === "confusion", p = u.items, m = 0;
		f && u.items.length > MAX_CONFUSION_ITEMS && (m = u.items.length - MAX_CONFUSION_ITEMS, p = u.items.slice(0, MAX_CONFUSION_ITEMS));
		let g;
		if (f) {
			let e = D ? 22 : 14;
			g = d.cy + e;
		} else g = d.cy + (D ? 25 : 15);
		if ([...p].forEach((u, f) => {
			let p = g + f * 30, m = H.append("g"), h = m.append("text").attr("class", "cynefinItemText").attr("x", 0).attr("y", 26 / 2).attr("text-anchor", "middle").attr("dominant-baseline", "central").text(u.label), _ = u.label.length * 7, v = h.node();
			if (v && typeof v.getBBox == "function") {
				let e = v.getBBox();
				e.width > 0 && (_ = e.width);
			}
			let y = _ + 20, b = d.cx - y / 2;
			m.attr("transform", `translate(${b}, ${p})`), m.insert("rect", "text").attr("class", "cynefinItem").attr("x", 0).attr("y", 0).attr("width", y).attr("height", 26).attr("rx", 4).attr("ry", 4).attr("fill", j[e]).attr("fill-opacity", .95), h.attr("x", y / 2).attr("y", 26 / 2);
		}), m > 0) {
			let u = g + p.length * 30, f = `+${m} more`, h = H.append("g"), _ = h.append("text").attr("class", "cynefinItemText").attr("x", 0).attr("y", 26 / 2).attr("text-anchor", "middle").attr("dominant-baseline", "central").text(f), v = f.length * 7, y = _.node();
			if (y && typeof y.getBBox == "function") {
				let e = y.getBBox();
				e.width > 0 && (v = e.width);
			}
			let b = v + 20, x = d.cx - b / 2;
			h.attr("transform", `translate(${x}, ${u})`), h.insert("rect", "text").attr("class", "cynefinItemOverflow").attr("x", 0).attr("y", 0).attr("width", b).attr("height", 26).attr("rx", 4).attr("ry", 4).attr("fill", j[e]).attr("fill-opacity", .6), _.attr("x", b / 2).attr("y", 26 / 2);
		}
	}
	if (g.length > 0) {
		let e = M.select("defs").empty() ? M.append("defs") : M.select("defs"), f = `cynefin-arrow-${d}`;
		e.append("marker").attr("id", f).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto-start-reverse").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "cynefinArrowHead");
		let p = N.append("g").attr("class", "cynefin-arrows");
		g.forEach((e) => {
			let d = P[e.from], m = P[e.to];
			if (!d || !m) return;
			if (e.from === e.to) {
				log.warn(`Cynefin renderer: skipping self-loop on domain "${e.from}"`);
				return;
			}
			let h = d.cx, g = d.cy, _ = m.cx, v = m.cy, y = (h + _) / 2, b = (g + v) / 2, x = _ - h, S = v - g, C = Math.sqrt(x * x + S * S), w = C * .15, T = -S / C, E = x / C, D = y + T * w, O = b + E * w;
			p.append("path").attr("class", "cynefinArrowLine").attr("d", `M${h},${g} Q${D},${O} ${_},${v}`).attr("fill", "none").attr("marker-end", `url(#${f})`), e.label && p.append("text").attr("class", "cynefinArrowLabel").attr("x", D).attr("y", O - 6).attr("text-anchor", "middle").attr("dominant-baseline", "auto").text(e.label);
		});
	}
	v && N.append("text").attr("class", "cynefinTitle").attr("x", w / 2).attr("y", -E / 2).attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(v);
}, "draw") }, getCynefinTheme = /* @__PURE__ */ __name(() => cleanAndMerge(getThemeVariables3(), getConfig().themeVariables).cynefin, "getCynefinTheme"), diagram = {
	parser,
	db,
	renderer,
	styles: /* @__PURE__ */ __name(() => {
		let e = getCynefinTheme();
		return `
	.cynefinDomain {
		stroke: none;
	}
	.cynefinDomainLabel {
		font-size: ${e.domainFontSize}px;
		font-weight: bold;
		fill: ${e.labelColor};
	}
	.cynefinSubtitle {
		font-size: ${e.itemFontSize - 1}px;
		fill: ${e.textColor};
		font-style: italic;
	}
	.cynefinItem {
		fill-opacity: 0.95;
		stroke: ${e.boundaryColor};
		stroke-width: 1;
	}
	.cynefinItemText {
		font-size: ${e.itemFontSize}px;
		fill: ${e.textColor};
	}
	.cynefinItemOverflow {
		fill-opacity: 0.6;
		stroke: ${e.boundaryColor};
		stroke-width: 1;
		stroke-dasharray: 3 2;
	}
	.cynefinBoundary {
		stroke: ${e.boundaryColor};
		stroke-width: ${e.boundaryWidth};
		stroke-dasharray: 6 3;
	}
	.cynefinCliff {
		stroke: ${e.cliffColor};
		stroke-width: ${e.cliffWidth};
	}
	.cynefinConfusion {
		stroke: ${e.boundaryColor};
		stroke-width: 1.5;
		stroke-dasharray: 4 2;
	}
	.cynefinArrowLine {
		stroke: ${e.arrowColor};
		stroke-width: ${e.arrowWidth};
		fill: none;
	}
	.cynefinArrowHead {
		fill: ${e.arrowColor};
		stroke: none;
	}
	.cynefinArrowLabel {
		font-size: ${e.itemFontSize - 1}px;
		fill: ${e.textColor};
	}
	.cynefinTitle {
		font-size: ${e.domainFontSize + 2}px;
		font-weight: bold;
		fill: ${e.labelColor};
	}
	`;
	}, "styles")
};
export { diagram };
