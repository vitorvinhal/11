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
var defaultOptions = {
	showLegend: !0,
	ticks: 5,
	max: null,
	min: 0,
	graticule: "circle"
}, MAX_TICKS = 32, defaultRadarData = {
	axes: [],
	curves: [],
	options: defaultOptions
}, data = structuredClone(defaultRadarData), DEFAULT_RADAR_CONFIG = defaultConfig_default.radar, getConfig2 = /* @__PURE__ */ __name(() => cleanAndMerge({
	...DEFAULT_RADAR_CONFIG,
	...getConfig().radar
}), "getConfig"), getAxes = /* @__PURE__ */ __name(() => data.axes, "getAxes"), getCurves = /* @__PURE__ */ __name(() => data.curves, "getCurves"), getOptions = /* @__PURE__ */ __name(() => data.options, "getOptions"), setAxes = /* @__PURE__ */ __name((t) => {
	data.axes = t.map((t) => ({
		name: t.name,
		label: t.label ?? t.name
	}));
}, "setAxes"), setCurves = /* @__PURE__ */ __name((t) => {
	data.curves = t.map((t) => ({
		name: t.name,
		label: t.label ?? t.name,
		entries: computeCurveEntries(t.entries)
	}));
}, "setCurves"), computeCurveEntries = /* @__PURE__ */ __name((t) => {
	if (t[0].axis == null) return t.map((t) => t.value);
	let j = getAxes();
	if (j.length === 0) throw Error("Axes must be populated before curves for reference entries");
	return j.map((j) => {
		let M = t.find((t) => t.axis?.$refText === j.name);
		if (M === void 0) throw Error("Missing entry for axis " + j.label);
		return M.value;
	});
}, "computeCurveEntries"), db = {
	getAxes,
	getCurves,
	getOptions,
	setAxes,
	setCurves,
	setOptions: /* @__PURE__ */ __name((t) => {
		let M = t.reduce((t, j) => (t[j.name] = j, t), {});
		data.options = {
			showLegend: M.showLegend?.value ?? defaultOptions.showLegend,
			ticks: M.ticks?.value ?? defaultOptions.ticks,
			max: M.max?.value ?? defaultOptions.max,
			min: M.min?.value ?? defaultOptions.min,
			graticule: M.graticule?.value ?? defaultOptions.graticule
		}, data.options.ticks > MAX_TICKS && (log.warn(`Radar diagram ticks (${data.options.ticks}) exceeds maximum allowed (${MAX_TICKS}). Using ${MAX_TICKS} instead.`), data.options.ticks = MAX_TICKS);
	}, "setOptions"),
	getConfig: getConfig2,
	clear: /* @__PURE__ */ __name(() => {
		clear(), data = structuredClone(defaultRadarData);
	}, "clear"),
	setAccTitle,
	getAccTitle,
	setDiagramTitle,
	getDiagramTitle,
	getAccDescription,
	setAccDescription
}, populate = /* @__PURE__ */ __name((t) => {
	populateCommonDb(t, db);
	let { axes: j, curves: M, options: N } = t;
	db.setAxes(j), db.setCurves(M), db.setOptions(N);
}, "populate"), parser = { parse: /* @__PURE__ */ __name(async (t) => {
	let M = await parse("radar", t);
	log.debug(M), populate(M);
}, "parse") }, draw = /* @__PURE__ */ __name((t, j, M, N) => {
	let P = N.db, F = P.getAxes(), I = P.getCurves(), L = P.getOptions(), R = P.getConfig(), z = P.getDiagramTitle(), B = drawFrame(selectSvgElement(j), R), V = L.max ?? Math.max(...I.map((t) => Math.max(...t.entries))), H = L.min, U = Math.min(R.width, R.height) / 2;
	drawGraticule(B, F, U, L.ticks, L.graticule), drawAxes(B, F, U, R), drawCurves(B, F, I, H, V, L.graticule, R), drawLegend(B, I, L.showLegend, R), B.append("text").attr("class", "radarTitle").text(z).attr("x", 0).attr("y", -R.height / 2 - R.marginTop);
}, "draw"), drawFrame = /* @__PURE__ */ __name((t, j) => {
	let M = j.width + j.marginLeft + j.marginRight, N = j.height + j.marginTop + j.marginBottom, P = {
		x: j.marginLeft + j.width / 2,
		y: j.marginTop + j.height / 2
	};
	return configureSvgSize(t, N, M, j.useMaxWidth ?? !0), t.attr("viewBox", `0 0 ${M} ${N}`).attr("overflow", "visible"), t.append("g").attr("transform", `translate(${P.x}, ${P.y})`);
}, "drawFrame"), drawGraticule = /* @__PURE__ */ __name((t, j, M, N, P) => {
	if (P === "circle") for (let j = 0; j < N; j++) {
		let P = M * (j + 1) / N;
		t.append("circle").attr("r", P).attr("class", "radarGraticule");
	}
	else if (P === "polygon") {
		let P = j.length;
		for (let F = 0; F < N; F++) {
			let I = M * (F + 1) / N, L = j.map((t, j) => {
				let M = 2 * j * Math.PI / P - Math.PI / 2;
				return `${I * Math.cos(M)},${I * Math.sin(M)}`;
			}).join(" ");
			t.append("polygon").attr("points", L).attr("class", "radarGraticule");
		}
	}
}, "drawGraticule"), drawAxes = /* @__PURE__ */ __name((t, j, M, N) => {
	let P = j.length;
	for (let F = 0; F < P; F++) {
		let I = j[F].label, L = 2 * F * Math.PI / P - Math.PI / 2, R = Math.cos(L), z = Math.sin(L);
		t.append("line").attr("x1", 0).attr("y1", 0).attr("x2", M * N.axisScaleFactor * R).attr("y2", M * N.axisScaleFactor * z).attr("class", "radarAxisLine");
		let B = R > .01 ? "start" : R < -.01 ? "end" : "middle", V = z > .01 ? "hanging" : z < -.01 ? "auto" : "central";
		t.append("text").text(I).attr("x", M * N.axisLabelFactor * R + 4 * R).attr("y", M * N.axisLabelFactor * z + 4 * z).attr("text-anchor", B).attr("dominant-baseline", V).attr("class", "radarAxisLabel");
	}
}, "drawAxes");
function drawCurves(t, j, M, N, P, F, I) {
	let L = j.length, R = Math.min(I.width, I.height) / 2;
	M.forEach((j, M) => {
		if (j.entries.length !== L) return;
		let z = j.entries.map((t, j) => {
			let M = 2 * Math.PI * j / L - Math.PI / 2, F = relativeRadius(t, N, P, R);
			return {
				x: F * Math.cos(M),
				y: F * Math.sin(M)
			};
		});
		F === "circle" ? t.append("path").attr("d", closedRoundCurve(z, I.curveTension)).attr("class", `radarCurve-${M}`) : F === "polygon" && t.append("polygon").attr("points", z.map((t) => `${t.x},${t.y}`).join(" ")).attr("class", `radarCurve-${M}`);
	});
}
__name(drawCurves, "drawCurves");
function relativeRadius(t, j, M, N) {
	return N * (Math.min(Math.max(t, j), M) - j) / (M - j);
}
__name(relativeRadius, "relativeRadius");
function closedRoundCurve(t, j) {
	let M = t.length, N = `M${t[0].x},${t[0].y}`;
	for (let P = 0; P < M; P++) {
		let F = t[(P - 1 + M) % M], I = t[P], L = t[(P + 1) % M], R = t[(P + 2) % M], z = {
			x: I.x + (L.x - F.x) * j,
			y: I.y + (L.y - F.y) * j
		}, B = {
			x: L.x - (R.x - I.x) * j,
			y: L.y - (R.y - I.y) * j
		};
		N += ` C${z.x},${z.y} ${B.x},${B.y} ${L.x},${L.y}`;
	}
	return `${N} Z`;
}
__name(closedRoundCurve, "closedRoundCurve");
function drawLegend(t, j, M, N) {
	if (!M) return;
	let P = (N.width / 2 + N.marginRight) * 3 / 4, F = -(N.height / 2 + N.marginTop) * 3 / 4;
	j.forEach((j, M) => {
		let N = t.append("g").attr("transform", `translate(${P}, ${F + M * 20})`);
		N.append("rect").attr("width", 12).attr("height", 12).attr("class", `radarLegendBox-${M}`), N.append("text").attr("x", 16).attr("y", 0).attr("class", "radarLegendText").text(j.label);
	});
}
__name(drawLegend, "drawLegend");
var renderer = { draw }, genIndexStyles = /* @__PURE__ */ __name((t, j) => {
	let M = "";
	for (let N = 0; N < t.THEME_COLOR_LIMIT; N++) {
		let P = t[`cScale${N}`];
		M += `
		.radarCurve-${N} {
			color: ${P};
			fill: ${P};
			fill-opacity: ${j.curveOpacity};
			stroke: ${P};
			stroke-width: ${j.curveStrokeWidth};
		}
		.radarLegendBox-${N} {
			fill: ${P};
			fill-opacity: ${j.curveOpacity};
			stroke: ${P};
		}
		`;
	}
	return M;
}, "genIndexStyles"), buildRadarStyleOptions = /* @__PURE__ */ __name((t) => {
	let j = cleanAndMerge(getThemeVariables3(), getConfig().themeVariables);
	return {
		themeVariables: j,
		radarOptions: cleanAndMerge(j.radar, t)
	};
}, "buildRadarStyleOptions"), diagram = {
	parser,
	db,
	renderer,
	styles: /* @__PURE__ */ __name(({ radar: t } = {}) => {
		let { themeVariables: j, radarOptions: M } = buildRadarStyleOptions(t);
		return `
	.radarTitle {
		font-size: ${j.fontSize};
		color: ${j.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${M.axisColor};
		stroke-width: ${M.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${M.axisLabelFontSize}px;
		color: ${M.axisColor};
	}
	.radarGraticule {
		fill: ${M.graticuleColor};
		fill-opacity: ${M.graticuleOpacity};
		stroke: ${M.graticuleColor};
		stroke-width: ${M.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${M.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${genIndexStyles(j, M)}
	`;
	}, "styles")
};
export { diagram };
