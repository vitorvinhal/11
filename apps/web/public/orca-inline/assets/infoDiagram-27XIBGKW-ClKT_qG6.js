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
import { c as configureSvgSize } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import { t as selectSvgElement } from "./chunk-CLGD4ZFX--a6S7Yag.js";
import { n as parse } from "./mermaid-parser.core-D-n-19AD.js";
var parser = { parse: /* @__PURE__ */ __name(async (e) => {
	let i = await parse("info", e);
	log.debug(i);
}, "parse") }, DEFAULT_INFO_DB = { version: "11.17.2" }, diagram = {
	parser,
	db: { getVersion: /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion") },
	renderer: { draw: /* @__PURE__ */ __name((e, a, o) => {
		log.debug("rendering info diagram\n" + e);
		let s = selectSvgElement(a);
		configureSvgSize(s, 100, 400, !0), s.append("g").append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${o}`);
	}, "draw") }
};
export { diagram };
