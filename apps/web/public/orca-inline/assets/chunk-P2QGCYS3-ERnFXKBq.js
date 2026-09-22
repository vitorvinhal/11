import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { x as getConfig2 } from "./chunk-DU6HZSFF-Rlm_otCx.js";
var solidStateFill = /* @__PURE__ */ __name((e) => {
	let { handDrawnSeed: i } = getConfig2();
	return {
		fill: e,
		hachureAngle: 120,
		hachureGap: 4,
		fillWeight: 2,
		roughness: .7,
		stroke: e,
		seed: i
	};
}, "solidStateFill"), normalizeStyleList = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e ? e.split(";").map((e) => e.trim()).filter(Boolean) : [], "normalizeStyleList"), compileStyles = /* @__PURE__ */ __name((e) => {
	let r = styles2Map([
		...e.cssCompiledStyles || [],
		...e.cssStyles || [],
		...normalizeStyleList(e.labelStyle)
	]);
	return {
		stylesMap: r,
		stylesArray: [...r]
	};
}, "compileStyles"), styles2Map = /* @__PURE__ */ __name((e) => {
	let r = /* @__PURE__ */ new Map();
	return e.forEach((e) => {
		let [i, a] = e.split(":");
		r.set(i.trim(), a?.trim());
	}), r;
}, "styles2Map"), isLabelStyle = /* @__PURE__ */ __name((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle"), styles2String = /* @__PURE__ */ __name((e) => {
	let { stylesArray: r } = compileStyles(e), i = [], a = [], o = [], c = [];
	return r.forEach((e) => {
		let r = e[0];
		isLabelStyle(r) ? i.push(e.join(":") + " !important") : (a.push(e.join(":") + " !important"), r.includes("stroke") && o.push(e.join(":") + " !important"), r === "fill" && c.push(e.join(":") + " !important"));
	}), {
		labelStyles: i.join(";"),
		nodeStyles: a.join(";"),
		stylesArray: r,
		borderStyles: o,
		backgroundStyles: c
	};
}, "styles2String"), userNodeOverrides = /* @__PURE__ */ __name((e, i) => {
	let { themeVariables: a, handDrawnSeed: o } = getConfig2(), { nodeBorder: s, mainBkg: c } = a, { stylesMap: l } = compileStyles(e);
	return Object.assign({
		roughness: .7,
		fill: l.get("fill") || c,
		fillStyle: "hachure",
		fillWeight: 4,
		hachureGap: 5.2,
		stroke: l.get("stroke") || s,
		seed: o,
		strokeWidth: l.get("stroke-width")?.replace("px", "") || 1.3,
		fillLineDash: [0, 0],
		strokeLineDash: getStrokeDashArray(l.get("stroke-dasharray"))
	}, i);
}, "userNodeOverrides"), getStrokeDashArray = /* @__PURE__ */ __name((e) => {
	if (!e) return [0, 0];
	let r = e.trim().split(/\s+/).map(Number);
	if (r.length === 1) {
		let e = isNaN(r[0]) ? 0 : r[0];
		return [e, e];
	}
	return [isNaN(r[0]) ? 0 : r[0], isNaN(r[1]) ? 0 : r[1]];
}, "getStrokeDashArray");
export { userNodeOverrides as a, styles2String as i, isLabelStyle as n, solidStateFill as r, compileStyles as t };
