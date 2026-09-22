import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log } from "./src-DXrlgw8l.js";
import { d as handleUndefinedAttr } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { o as shapes } from "./chunk-4HAMMTFA-C6ufBZSb.js";
var getSubGraphTitleMargins = /* @__PURE__ */ __name(({ flowchart: e }) => {
	let r = e?.subGraphTitleMargin?.top ?? 0, i = e?.subGraphTitleMargin?.bottom ?? 0;
	return {
		subGraphTitleTopMargin: r,
		subGraphTitleBottomMargin: i,
		subGraphTitleTotalMargin: r + i
	};
}, "getSubGraphTitleMargins"), nodeElems = /* @__PURE__ */ new Map();
async function insertNode(e, r, o) {
	let s, c;
	r.shape === "rect" && (r.rx && r.ry ? r.shape = "roundedRect" : r.shape = "squareRect");
	let l = r.shape ? shapes[r.shape] : void 0;
	if (!l) throw Error(`No such shape: ${r.shape}. Please check your syntax.`);
	if (r.link) {
		let i;
		o.config.securityLevel === "sandbox" ? i = "_top" : r.linkTarget && (i = r.linkTarget || "_blank"), s = e.insert("svg:a").attr("xlink:href", r.link).attr("target", i ?? null), c = await l(s, r, o);
	} else c = await l(e, r, o), s = c;
	return s.attr("data-look", handleUndefinedAttr(r.look)), r.tooltip && c.attr("title", r.tooltip), nodeElems.set(r.id, s), r.haveCallback && s.attr("class", s.attr("class") + " clickable"), s;
}
__name(insertNode, "insertNode");
var setNodeElem = /* @__PURE__ */ __name((e, r) => {
	nodeElems.set(r.id, e);
}, "setNodeElem"), clear = /* @__PURE__ */ __name(() => {
	nodeElems.clear();
}, "clear"), positionNode = /* @__PURE__ */ __name((e) => {
	let i = nodeElems.get(e.id);
	log.trace("Transforming node", e.diff, e, "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")");
	let a = e.diff || 0;
	return e.clusterNode ? i.attr("transform", "translate(" + (e.x + a - e.width / 2) + ", " + (e.y - e.height / 2 - 8) + ")") : i.attr("transform", "translate(" + e.x + ", " + e.y + ")"), a;
}, "positionNode");
export { setNodeElem as a, positionNode as i, getSubGraphTitleMargins as n, insertNode as r, clear as t };
