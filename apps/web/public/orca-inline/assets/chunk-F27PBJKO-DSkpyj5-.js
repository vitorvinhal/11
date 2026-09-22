import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { p as select_default } from "./src-DXrlgw8l.js";
import { j as lineBreakRegex } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import { t as require_dist } from "./dist-DRK-BflQ.js";
var import_dist = require_dist(), drawRect = /* @__PURE__ */ __name((e, s) => {
	let c = e.append("rect");
	if (c.attr("x", s.x), c.attr("y", s.y), c.attr("fill", s.fill), c.attr("stroke", s.stroke), c.attr("width", s.width), c.attr("height", s.height), s.name && c.attr("name", s.name), s.rx && c.attr("rx", s.rx), s.ry && c.attr("ry", s.ry), s.attrs !== void 0) for (let e in s.attrs) c.attr(e, s.attrs[e]);
	return s.class && c.attr("class", s.class), c;
}, "drawRect"), drawBackgroundRect = /* @__PURE__ */ __name((e, s) => {
	drawRect(e, {
		x: s.startx,
		y: s.starty,
		width: s.stopx - s.startx,
		height: s.stopy - s.starty,
		fill: s.fill,
		stroke: s.stroke,
		class: "rect"
	}).lower();
}, "drawBackgroundRect"), drawText = /* @__PURE__ */ __name((e, s) => {
	let l = s.text.replace(lineBreakRegex, " "), u = e.append("text");
	u.attr("x", s.x), u.attr("y", s.y), u.attr("class", "legend"), u.style("text-anchor", s.anchor), s.class && u.attr("class", s.class);
	let d = u.append("tspan");
	return d.attr("x", s.x + s.textMargin * 2), d.text(l), u;
}, "drawText"), drawImage = /* @__PURE__ */ __name((e, s, c, l) => {
	let d = e.append("image");
	d.attr("x", s), d.attr("y", c);
	let f = (0, import_dist.sanitizeUrl)(l);
	d.attr("xlink:href", f);
}, "drawImage"), drawEmbeddedImage = /* @__PURE__ */ __name((e, s, c, l) => {
	let d = e.append("use");
	d.attr("x", s), d.attr("y", c);
	let f = (0, import_dist.sanitizeUrl)(l);
	d.attr("xlink:href", `#${f}`);
}, "drawEmbeddedImage"), getNoteRect = /* @__PURE__ */ __name(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	fill: "#EDF2AE",
	stroke: "#666",
	anchor: "start",
	rx: 0,
	ry: 0
}), "getNoteRect"), getTextObj = /* @__PURE__ */ __name(() => ({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	"text-anchor": "start",
	style: "#666",
	textMargin: 0,
	rx: 0,
	ry: 0,
	tspan: !0
}), "getTextObj"), createTooltip = /* @__PURE__ */ __name(() => {
	let e = select_default(".mermaidTooltip");
	return e.empty() && (e = select_default("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0).style("position", "absolute").style("text-align", "center").style("max-width", "200px").style("padding", "2px").style("font-size", "12px").style("background", "#ffffde").style("border", "1px solid #333").style("border-radius", "2px").style("pointer-events", "none").style("z-index", "100")), e;
}, "createTooltip");
export { drawRect as a, getTextObj as c, drawImage as i, drawBackgroundRect as n, drawText as o, drawEmbeddedImage as r, getNoteRect as s, createTooltip as t };
