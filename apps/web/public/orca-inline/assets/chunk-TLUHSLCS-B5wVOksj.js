import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log } from "./src-DXrlgw8l.js";
import { b as getConfig, s as common_default } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import { f as interpolateToCurve } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { a as labelHelper } from "./chunk-4HAMMTFA-C6ufBZSb.js";
import { r as insertNode } from "./chunk-GVQU2GXP-Be8dkEne.js";
import { a as insertEdgeLabel, c as positionEdgeLabel, i as insertEdge, s as markers_default } from "./chunk-OSK3NFVY-C6YyZAmC.js";
import { n as insertCluster } from "./chunk-L3NEJ4N5-B-D1dHln.js";
var internalHelpers = {
	common: common_default,
	getConfig,
	insertCluster,
	insertEdge,
	insertEdgeLabel,
	insertMarkers: markers_default,
	insertNode,
	interpolateToCurve,
	labelHelper,
	log,
	positionEdgeLabel
}, layoutAlgorithms = {}, registerLayoutLoaders = /* @__PURE__ */ __name((e) => {
	for (let c of e) layoutAlgorithms[c.name] = c;
}, "registerLayoutLoaders");
(/* @__PURE__ */ __name(() => {
	registerLayoutLoaders([
		{
			name: "dagre",
			loader: /* @__PURE__ */ __name(async () => await import("./dagre-GXQ25YYZ-CxZPz_SV.js"), "loader")
		},
		{
			name: "swimlane",
			loader: /* @__PURE__ */ __name(async () => await import("./swimlanes-42K2YHIH-osKehVRv.js"), "loader")
		},
		...[{
			name: "cose-bilkent",
			loader: /* @__PURE__ */ __name(async () => await import("./cose-bilkent-JH36ORCC-xbqbUH4v.js"), "loader")
		}]
	]);
}, "registerDefaultLayoutLoaders"))();
var render = /* @__PURE__ */ __name(async (e, c) => {
	if (!(e.layoutAlgorithm in layoutAlgorithms)) throw Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
	if (e.diagramId) for (let c of e.nodes) {
		let l = c.domId || c.id;
		c.domId = `${e.diagramId}-${l}`;
	}
	let l = layoutAlgorithms[e.layoutAlgorithm], u = await l.loader(), { theme: d, themeVariables: f } = e.config, { useGradient: p, gradientStart: m, gradientStop: h } = f, g = c.attr("id");
	if (c.append("defs").append("filter").attr("id", `${g}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${d?.includes("dark") ? "#FFFFFF" : "#000000"}`), c.append("defs").append("filter").attr("id", `${g}-drop-shadow-small`).attr("height", "150%").attr("width", "150%").append("feDropShadow").attr("dx", "2").attr("dy", "2").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${d?.includes("dark") ? "#FFFFFF" : "#000000"}`), p) {
		let e = c.append("linearGradient").attr("id", c.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
		e.append("svg:stop").attr("offset", "0%").attr("stop-color", m).attr("stop-opacity", 1), e.append("svg:stop").attr("offset", "100%").attr("stop-color", h).attr("stop-opacity", 1);
	}
	return u.render(e, c, internalHelpers, { algorithm: l.algorithm });
}, "render"), getRegisteredLayoutAlgorithm = /* @__PURE__ */ __name((e = "", { fallback: l = "dagre" } = {}) => {
	if (e in layoutAlgorithms) return e;
	if (l in layoutAlgorithms) return log.warn(`Layout algorithm ${e} is not registered. Using ${l} as fallback.`), l;
	throw Error(`Both layout algorithms ${e} and ${l} are not registered.`);
}, "getRegisteredLayoutAlgorithm");
export { registerLayoutLoaders as n, render as r, getRegisteredLayoutAlgorithm as t };
