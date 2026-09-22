import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log } from "./src-DXrlgw8l.js";
import { c as configureSvgSize } from "./chunk-DU6HZSFF-Rlm_otCx.js";
var setupViewPortForSVG = /* @__PURE__ */ __name((e, i, o, s) => {
	e.attr("class", o);
	let { width: c, height: l, x: u, y: d } = calculateDimensionsWithPadding(e, i);
	configureSvgSize(e, l, c, s);
	let f = createViewBox(u, d, c, l, i);
	e.attr("viewBox", f), log.debug(`viewBox configured: ${f} with padding: ${i}`);
}, "setupViewPortForSVG"), calculateDimensionsWithPadding = /* @__PURE__ */ __name((e, n) => {
	let r = e.node()?.getBBox() || {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	};
	return {
		width: r.width + n * 2,
		height: r.height + n * 2,
		x: r.x,
		y: r.y
	};
}, "calculateDimensionsWithPadding"), createViewBox = /* @__PURE__ */ __name((e, n, r, i, a) => `${e - a} ${n - a} ${r} ${i}`, "createViewBox");
export { setupViewPortForSVG as t };
