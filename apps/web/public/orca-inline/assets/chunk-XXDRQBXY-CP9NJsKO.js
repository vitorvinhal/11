import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { p as select_default } from "./src-DXrlgw8l.js";
var getDiagramElement = /* @__PURE__ */ __name((e, n) => {
	let r;
	return n === "sandbox" && (r = select_default("#i" + e)), select_default(n === "sandbox" ? r.nodes()[0].contentDocument.body : "body").select(`[id="${e}"]`);
}, "getDiagramElement");
export { getDiagramElement as t };
