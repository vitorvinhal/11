import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { p as select_default } from "./src-DXrlgw8l.js";
import { x as getConfig2 } from "./chunk-DU6HZSFF-Rlm_otCx.js";
var selectSvgElement = /* @__PURE__ */ __name((e) => {
	let { securityLevel: r } = getConfig2(), i = select_default("body");
	return r === "sandbox" && (i = select_default((select_default(`#i${e}`).node()?.contentDocument ?? document).body)), i.select(`#${e}`);
}, "selectSvgElement");
export { selectSvgElement as t };
