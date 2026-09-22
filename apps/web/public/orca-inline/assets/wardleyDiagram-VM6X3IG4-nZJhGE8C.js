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
import { D as getThemeVariables3, H as setAccDescription, K as setDiagramTitle, U as setAccTitle, a as clear, b as getConfig, c as configureSvgSize, v as getAccDescription, w as getDiagramTitle, x as getConfig2, y as getAccTitle } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import "./dist-DRK-BflQ.js";
import { a as cleanAndMerge } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as selectSvgElement } from "./chunk-CLGD4ZFX--a6S7Yag.js";
import { t as populateCommonDb } from "./chunk-JWPE2WC7-Cv3uUh-s.js";
import { n as parse } from "./mermaid-parser.core-D-n-19AD.js";
var toPercent = /* @__PURE__ */ __name((t, u) => {
	let d = t <= 1 ? t * 100 : t;
	if (d < 0 || d > 100) throw Error(`${u} must be between 0-1 (decimal) or 0-100 (percentage). Received: ${t}`);
	return d;
}, "toPercent"), toCoordinates = /* @__PURE__ */ __name((t, u, d) => ({
	x: toPercent(u, `${d} evolution`),
	y: toPercent(t, `${d} visibility`)
}), "toCoordinates"), getFlowFromPort = /* @__PURE__ */ __name((t) => {
	if (t) {
		if (t === "+<>") return "bidirectional";
		if (t === "+<") return "backward";
		if (t === "+>") return "forward";
	}
}, "getFlowFromPort"), extractFlowFromArrow = /* @__PURE__ */ __name((t) => {
	if (!t?.startsWith("+")) return {};
	let u = /^\+'([^']*)'/.exec(t)?.[1];
	return t.includes("<>") ? {
		flow: "bidirectional",
		label: u
	} : t.includes("<") ? {
		flow: "backward",
		label: u
	} : t.includes(">") ? {
		flow: "forward",
		label: u
	} : { label: u };
}, "extractFlowFromArrow"), populateDb = /* @__PURE__ */ __name((t, u) => {
	if (populateCommonDb(t, u), t.size && u.setSize(t.size.width, t.size.height), t.evolution) {
		let d = t.evolution.stages.map((t) => t.secondName ? `${t.name.trim()} / ${t.secondName.trim()}` : t.name.trim()), f = t.evolution.stages.filter((t) => t.boundary !== void 0).map((t) => t.boundary);
		u.updateAxes({
			stages: d,
			stageBoundaries: f
		});
	}
	if (t.anchors.forEach((t) => {
		let d = toCoordinates(t.visibility, t.evolution, `Anchor "${t.name}"`);
		u.addNode(t.name, t.name, d.x, d.y, "anchor");
	}), t.components.forEach((t) => {
		let d = toCoordinates(t.visibility, t.evolution, `Component "${t.name}"`), f = t.label ? (t.label.negX ? -1 : 1) * t.label.offsetX : void 0, p = t.label ? (t.label.negY ? -1 : 1) * t.label.offsetY : void 0, m = t.decorator?.strategy;
		u.addNode(t.name, t.name, d.x, d.y, "component", f, p, t.inertia, m);
	}), t.notes.forEach((t) => {
		let d = toCoordinates(t.visibility, t.evolution, `Note "${t.text}"`);
		u.addNote(t.text, d.x, d.y);
	}), t.pipelines.forEach((t) => {
		let d = u.getNode(t.parent);
		if (!d || typeof d.y != "number") throw Error(`Pipeline "${t.parent}" must reference an existing component with coordinates.`);
		let f = d.y;
		u.startPipeline(t.parent), t.components.forEach((d) => {
			let p = `${t.parent}_${d.name}`, m = d.label ? (d.label.negX ? -1 : 1) * d.label.offsetX : void 0, h = d.label ? (d.label.negY ? -1 : 1) * d.label.offsetY : void 0, g = toPercent(d.evolution, `Pipeline component "${d.name}" evolution`);
			u.addNode(p, d.name, g, f, "pipeline-component", m, h), u.addPipelineComponent(t.parent, p);
		});
	}), t.links.forEach((t) => {
		let d = !!t.arrow && (t.arrow.includes("-.->") || t.arrow.includes(".-.")), f = getFlowFromPort(t.fromPort) ?? getFlowFromPort(t.toPort), { flow: p, label: m } = extractFlowFromArrow(t.arrow);
		!f && p && (f = p);
		let h = t.linkLabel, g = m ?? h;
		u.addLink(u.resolveNodeId(t.from), u.resolveNodeId(t.to), d, g, f);
	}), t.evolves.forEach((t) => {
		let d = u.getNode(t.component);
		if (d?.y !== void 0) {
			let f = toPercent(t.target, `Evolve target for "${t.component}"`);
			u.addTrend(t.component, f, d.y);
		}
	}), t.annotations.length > 0) {
		let d = t.annotations[0], f = toCoordinates(d.x, d.y, "Annotations box");
		u.setAnnotationsBox(f.x, f.y);
	}
	t.annotation.forEach((t) => {
		let d = toCoordinates(t.x, t.y, `Annotation ${t.number}`);
		u.addAnnotation(t.number, [{
			x: d.x,
			y: d.y
		}], t.text);
	}), t.accelerators.forEach((t) => {
		let d = toCoordinates(t.x, t.y, `Accelerator "${t.name}"`);
		u.addAccelerator(t.name, d.x, d.y);
	}), t.deaccelerators.forEach((t) => {
		let d = toCoordinates(t.x, t.y, `Deaccelerator "${t.name}"`);
		u.addDeaccelerator(t.name, d.x, d.y);
	});
}, "populateDb"), parser = {
	parser: { yy: void 0 },
	parse: /* @__PURE__ */ __name(async (t) => {
		let d = await parse("wardley", t);
		log.debug(d);
		let f = parser.parser?.yy;
		if (!f || typeof f.addNode != "function") throw Error("parser.parser?.yy was not a WardleyDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
		populateDb(d, f);
	}, "parse")
}, builder = new class {
	constructor() {
		this.nodes = /* @__PURE__ */ new Map(), this.links = [], this.trends = /* @__PURE__ */ new Map(), this.pipelines = /* @__PURE__ */ new Map(), this.annotations = [], this.notes = [], this.accelerators = [], this.deaccelerators = [], this.axes = {};
	}
	static #e = __name(this, "WardleyBuilder");
	addNode(t) {
		let u = this.nodes.get(t.id) ?? {
			id: t.id,
			label: t.label
		}, d = {
			...u,
			...t,
			className: t.className ?? u.className,
			labelOffsetX: t.labelOffsetX ?? u.labelOffsetX,
			labelOffsetY: t.labelOffsetY ?? u.labelOffsetY
		};
		this.nodes.set(t.id, d);
	}
	addLink(t) {
		this.links.push(t);
	}
	addTrend(t) {
		this.trends.set(t.nodeId, t);
	}
	startPipeline(t) {
		this.pipelines.set(t, {
			nodeId: t,
			componentIds: []
		});
		let u = this.nodes.get(t);
		u && (u.isPipelineParent = !0);
	}
	addPipelineComponent(t, u) {
		let d = this.pipelines.get(t);
		d && d.componentIds.push(u);
		let f = this.nodes.get(u);
		f && (f.inPipeline = !0);
	}
	addAnnotation(t) {
		this.annotations.push(t);
	}
	addNote(t) {
		this.notes.push(t);
	}
	addAccelerator(t) {
		this.accelerators.push(t);
	}
	addDeaccelerator(t) {
		this.deaccelerators.push(t);
	}
	setAnnotationsBox(t, u) {
		this.annotationsBox = {
			x: t,
			y: u
		};
	}
	setAxes(t) {
		this.axes = {
			...this.axes,
			...t
		};
	}
	setSize(t, u) {
		this.size = {
			width: t,
			height: u
		};
	}
	getNode(t) {
		return this.nodes.get(t);
	}
	resolveNodeId(t) {
		if (this.nodes.has(t)) return t;
		for (let [u, d] of this.nodes) if (d.label === t) return u;
		return t;
	}
	build() {
		let t = [];
		for (let u of this.nodes.values()) {
			if (typeof u.x != "number" || typeof u.y != "number") throw Error(`Node "${u.label}" is missing coordinates`);
			t.push(u);
		}
		return {
			nodes: t,
			links: [...this.links],
			trends: [...this.trends.values()],
			pipelines: [...this.pipelines.values()],
			annotations: [...this.annotations],
			notes: [...this.notes],
			accelerators: [...this.accelerators],
			deaccelerators: [...this.deaccelerators],
			annotationsBox: this.annotationsBox,
			axes: { ...this.axes },
			size: this.size
		};
	}
	clear() {
		this.nodes.clear(), this.links = [], this.trends.clear(), this.pipelines.clear(), this.annotations = [], this.notes = [], this.accelerators = [], this.deaccelerators = [], this.annotationsBox = void 0, this.axes = {}, this.size = void 0;
	}
}();
function getConfig3() {
	return getConfig2()["wardley-beta"];
}
__name(getConfig3, "getConfig");
function addNode(t, u, d, f, p, m, h, g, _) {
	builder.addNode({
		id: t,
		label: u,
		x: d,
		y: f,
		className: p,
		labelOffsetX: m,
		labelOffsetY: h,
		inertia: g,
		sourceStrategy: _
	});
}
__name(addNode, "addNode");
function addLink(t, u, d = !1, f, p) {
	builder.addLink({
		source: t,
		target: u,
		dashed: d,
		label: f,
		flow: p
	});
}
__name(addLink, "addLink");
function addTrend(t, u, d) {
	builder.addTrend({
		nodeId: t,
		targetX: u,
		targetY: d
	});
}
__name(addTrend, "addTrend");
function addAnnotation(t, u, d) {
	builder.addAnnotation({
		number: t,
		coordinates: u,
		text: d
	});
}
__name(addAnnotation, "addAnnotation");
function addNote(t, u, d) {
	builder.addNote({
		text: t,
		x: u,
		y: d
	});
}
__name(addNote, "addNote");
function addAccelerator(t, u, d) {
	builder.addAccelerator({
		name: t,
		x: u,
		y: d
	});
}
__name(addAccelerator, "addAccelerator");
function addDeaccelerator(t, u, d) {
	builder.addDeaccelerator({
		name: t,
		x: u,
		y: d
	});
}
__name(addDeaccelerator, "addDeaccelerator");
function setAnnotationsBox(t, u) {
	builder.setAnnotationsBox(t, u);
}
__name(setAnnotationsBox, "setAnnotationsBox");
function setSize(t, u) {
	builder.setSize(t, u);
}
__name(setSize, "setSize");
function startPipeline(t) {
	builder.startPipeline(t);
}
__name(startPipeline, "startPipeline");
function addPipelineComponent(t, u) {
	builder.addPipelineComponent(t, u);
}
__name(addPipelineComponent, "addPipelineComponent");
function updateAxes(t) {
	builder.setAxes(t);
}
__name(updateAxes, "updateAxes");
function getNode(t) {
	return builder.getNode(t);
}
__name(getNode, "getNode");
function resolveNodeId(t) {
	return builder.resolveNodeId(t);
}
__name(resolveNodeId, "resolveNodeId");
function getWardleyData() {
	return builder.build();
}
__name(getWardleyData, "getWardleyData");
function clear2() {
	builder.clear(), clear();
}
__name(clear2, "clear");
var wardleyDb_default = {
	getConfig: getConfig3,
	addNode,
	addLink,
	addTrend,
	addAnnotation,
	addNote,
	addAccelerator,
	addDeaccelerator,
	setAnnotationsBox,
	setSize,
	startPipeline,
	addPipelineComponent,
	updateAxes,
	getNode,
	resolveNodeId,
	getWardleyData,
	clear: clear2,
	setAccTitle,
	getAccTitle,
	setDiagramTitle,
	getDiagramTitle,
	getAccDescription,
	setAccDescription
}, DEFAULT_STAGES = [
	"Genesis",
	"Custom Built",
	"Product",
	"Commodity"
], getTheme = /* @__PURE__ */ __name(() => {
	let { themeVariables: t } = getConfig2();
	return {
		backgroundColor: t.wardley?.backgroundColor ?? t.background ?? "#fff",
		axisColor: t.wardley?.axisColor ?? "#000",
		axisTextColor: t.wardley?.axisTextColor ?? t.primaryTextColor ?? "#222",
		gridColor: t.wardley?.gridColor ?? "rgba(100, 100, 100, 0.2)",
		componentFill: t.wardley?.componentFill ?? "#fff",
		componentStroke: t.wardley?.componentStroke ?? "#000",
		componentLabelColor: t.wardley?.componentLabelColor ?? t.primaryTextColor ?? "#222",
		linkStroke: t.wardley?.linkStroke ?? "#000",
		evolutionStroke: t.wardley?.evolutionStroke ?? "#dc3545",
		annotationStroke: t.wardley?.annotationStroke ?? "#000",
		annotationTextColor: t.wardley?.annotationTextColor ?? t.primaryTextColor ?? "#222",
		annotationFill: t.wardley?.annotationFill ?? t.background ?? "#fff"
	};
}, "getTheme"), getConfigValues = /* @__PURE__ */ __name(() => {
	let t = getConfig2()["wardley-beta"];
	return {
		width: t?.width ?? 900,
		height: t?.height ?? 600,
		padding: t?.padding ?? 48,
		nodeRadius: t?.nodeRadius ?? 6,
		nodeLabelOffset: t?.nodeLabelOffset ?? 8,
		axisFontSize: t?.axisFontSize ?? 12,
		labelFontSize: t?.labelFontSize ?? 10,
		showGrid: t?.showGrid ?? !1,
		useMaxWidth: t?.useMaxWidth ?? !0
	};
}, "getConfigValues"), diagram = {
	parser,
	db: wardleyDb_default,
	renderer: { draw: /* @__PURE__ */ __name((d, f, p, m) => {
		log.debug("Rendering Wardley map\n" + d);
		let h = getConfigValues(), g = getTheme(), v = h.nodeRadius * 1.6, y = m.db, b = y.getWardleyData(), x = y.getDiagramTitle(), S = b.size?.width ?? h.width, w = b.size?.height ?? h.height, T = selectSvgElement(f);
		T.selectAll("*").remove(), configureSvgSize(T, w, S, h.useMaxWidth), T.attr("viewBox", `0 0 ${S} ${w}`);
		let E = T.append("g").attr("class", "wardley-map"), D = T.append("defs");
		D.append("marker").attr("id", `arrow-${f}`).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto-start-reverse").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("fill", g.evolutionStroke).attr("stroke", "none"), D.append("marker").attr("id", `link-arrow-end-${f}`).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerWidth", 5).attr("markerHeight", 5).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("fill", g.linkStroke).attr("stroke", "none"), D.append("marker").attr("id", `link-arrow-start-${f}`).attr("viewBox", "0 0 10 10").attr("refX", 1).attr("refY", 5).attr("markerWidth", 5).attr("markerHeight", 5).attr("orient", "auto").append("path").attr("d", "M 10 0 L 0 5 L 10 10 z").attr("fill", g.linkStroke).attr("stroke", "none"), E.append("rect").attr("class", "wardley-background").attr("width", S).attr("height", w).attr("fill", g.backgroundColor);
		let O = S - h.padding * 2, k = w - h.padding * 2;
		x && E.append("text").attr("class", "wardley-title").attr("x", S / 2).attr("y", h.padding / 2).attr("fill", g.axisTextColor).attr("font-size", h.axisFontSize * 1.05).attr("font-weight", "bold").attr("text-anchor", "middle").attr("dominant-baseline", "middle").text(x);
		let A = /* @__PURE__ */ __name((t) => h.padding + t / 100 * O, "projectX"), j = /* @__PURE__ */ __name((t) => w - h.padding - t / 100 * k, "projectY"), M = E.append("g").attr("class", "wardley-axes");
		M.append("line").attr("x1", h.padding).attr("x2", S - h.padding).attr("y1", w - h.padding).attr("y2", w - h.padding).attr("stroke", g.axisColor).attr("stroke-width", 1), M.append("line").attr("x1", h.padding).attr("x2", h.padding).attr("y1", h.padding).attr("y2", w - h.padding).attr("stroke", g.axisColor).attr("stroke-width", 1);
		let N = b.axes.xLabel ?? "Evolution", P = b.axes.yLabel ?? "Visibility";
		M.append("text").attr("class", "wardley-axis-label wardley-axis-label-x").attr("x", h.padding + O / 2).attr("y", w - h.padding / 4).attr("fill", g.axisTextColor).attr("font-size", h.axisFontSize).attr("font-weight", "bold").attr("text-anchor", "middle").text(N), M.append("text").attr("class", "wardley-axis-label wardley-axis-label-y").attr("x", h.padding / 3).attr("y", h.padding + k / 2).attr("fill", g.axisTextColor).attr("font-size", h.axisFontSize).attr("font-weight", "bold").attr("text-anchor", "middle").attr("transform", `rotate(-90 ${h.padding / 3} ${h.padding + k / 2})`).text(P);
		let F = b.axes.stages && b.axes.stages.length > 0 ? b.axes.stages : DEFAULT_STAGES;
		if (F.length > 0) {
			let t = E.append("g").attr("class", "wardley-stages"), u = b.axes.stageBoundaries, d = [];
			if (u && u.length === F.length) {
				let t = 0;
				u.forEach((u) => {
					d.push({
						start: t,
						end: u
					}), t = u;
				});
			} else {
				let t = 1 / F.length;
				F.forEach((u, f) => {
					d.push({
						start: f * t,
						end: (f + 1) * t
					});
				});
			}
			F.forEach((u, f) => {
				let p = d[f], m = h.padding + p.start * O, _ = (m + (h.padding + p.end * O)) / 2;
				f > 0 && t.append("line").attr("x1", m).attr("x2", m).attr("y1", h.padding).attr("y2", w - h.padding).attr("stroke", "#000").attr("stroke-width", 1).attr("stroke-dasharray", "5 5").attr("opacity", .8), t.append("text").attr("class", "wardley-stage-label").attr("x", _).attr("y", w - h.padding / 1.5).attr("fill", g.axisTextColor).attr("font-size", h.axisFontSize - 2).attr("text-anchor", "middle").text(u);
			});
		}
		if (h.showGrid) {
			let t = E.append("g").attr("class", "wardley-grid");
			for (let u = 1; u < 4; u++) {
				let d = u / 4, f = h.padding + O * d;
				t.append("line").attr("x1", f).attr("x2", f).attr("y1", h.padding).attr("y2", w - h.padding).attr("stroke", g.gridColor).attr("stroke-dasharray", "2 6"), t.append("line").attr("x1", h.padding).attr("x2", S - h.padding).attr("y1", w - h.padding - k * d).attr("y2", w - h.padding - k * d).attr("stroke", g.gridColor).attr("stroke-dasharray", "2 6");
			}
		}
		let I = /* @__PURE__ */ new Map();
		if (b.nodes.forEach((t) => {
			I.set(t.id, {
				x: A(t.x),
				y: j(t.y),
				node: t
			});
		}), b.pipelines.length > 0) {
			let t = E.append("g").attr("class", "wardley-pipelines"), u = E.append("g").attr("class", "wardley-pipeline-links");
			b.pipelines.forEach((d) => {
				if (d.componentIds.length === 0) return;
				let f = d.componentIds.map((t) => ({
					id: t,
					pos: I.get(t),
					node: b.nodes.find((u) => u.id === t)
				})).filter((t) => t.pos && t.node).sort((t, u) => t.node.x - u.node.x);
				for (let t = 0; t < f.length - 1; t++) {
					let d = f[t], p = f[t + 1];
					u.append("line").attr("class", "wardley-pipeline-evolution-link").attr("x1", d.pos.x).attr("y1", d.pos.y).attr("x2", p.pos.x).attr("y2", p.pos.y).attr("stroke", g.linkStroke).attr("stroke-width", 1).attr("stroke-dasharray", "4 4");
				}
				let p = Infinity, m = -Infinity, _ = 0;
				if (d.componentIds.forEach((t) => {
					let u = I.get(t);
					u && (p = Math.min(p, u.x), m = Math.max(m, u.x), _ = u.y);
				}), p !== Infinity && m !== -Infinity) {
					let u = h.nodeRadius * 4, f = _ - u / 2, y = I.get(d.nodeId);
					y && (y.x = (p + m) / 2, y.y = f - v / 6), t.append("rect").attr("class", "wardley-pipeline-box").attr("x", p - 15).attr("y", f).attr("width", m - p + 30).attr("height", u).attr("fill", "none").attr("stroke", g.axisColor).attr("stroke-width", 1.5).attr("rx", 4).attr("ry", 4);
				}
			});
		}
		let L = E.append("g").attr("class", "wardley-links"), R = /* @__PURE__ */ new Map();
		b.pipelines.forEach((t) => {
			R.set(t.nodeId, new Set(t.componentIds));
		});
		let z = b.links.filter((t) => !(!I.has(t.source) || !I.has(t.target) || R.get(t.target)?.has(t.source)));
		L.selectAll("line").data(z).enter().append("line").attr("class", (t) => `wardley-link${t.dashed ? " wardley-link--dashed" : ""}`).attr("x1", (t) => {
			let u = I.get(t.source), d = I.get(t.target), f = b.nodes.find((u) => u.id === t.source).isPipelineParent ? v / Math.sqrt(2) : h.nodeRadius, p = d.x - u.x, m = d.y - u.y, g = Math.sqrt(p * p + m * m);
			return u.x + p / g * f;
		}).attr("y1", (t) => {
			let u = I.get(t.source), d = I.get(t.target), f = b.nodes.find((u) => u.id === t.source).isPipelineParent ? v / Math.sqrt(2) : h.nodeRadius, p = d.x - u.x, m = d.y - u.y, g = Math.sqrt(p * p + m * m);
			return u.y + m / g * f;
		}).attr("x2", (t) => {
			let u = I.get(t.source), d = I.get(t.target), f = b.nodes.find((u) => u.id === t.target).isPipelineParent ? v / Math.sqrt(2) : h.nodeRadius, p = u.x - d.x, m = u.y - d.y, g = Math.sqrt(p * p + m * m);
			return d.x + p / g * f;
		}).attr("y2", (t) => {
			let u = I.get(t.source), d = I.get(t.target), f = b.nodes.find((u) => u.id === t.target).isPipelineParent ? v / Math.sqrt(2) : h.nodeRadius, p = u.x - d.x, m = u.y - d.y, g = Math.sqrt(p * p + m * m);
			return d.y + m / g * f;
		}).attr("stroke", g.linkStroke).attr("stroke-width", 1).attr("stroke-dasharray", (t) => t.dashed ? "6 6" : null).attr("marker-end", (t) => t.flow === "forward" || t.flow === "bidirectional" ? `url(#link-arrow-end-${f})` : null).attr("marker-start", (t) => t.flow === "backward" || t.flow === "bidirectional" ? `url(#link-arrow-start-${f})` : null), L.selectAll("text").data(z.filter((t) => t.label)).enter().append("text").attr("class", "wardley-link-label").attr("x", (t) => {
			let u = I.get(t.source), d = I.get(t.target), f = (u.x + d.x) / 2, p = d.y - u.y, m = d.x - u.x;
			return f + p / Math.sqrt(m * m + p * p) * 8;
		}).attr("y", (t) => {
			let u = I.get(t.source), d = I.get(t.target), f = (u.y + d.y) / 2, p = d.x - u.x, m = d.y - u.y, h = Math.sqrt(p * p + m * m);
			return f + -p / h * 8;
		}).attr("fill", g.axisTextColor).attr("font-size", h.labelFontSize).attr("text-anchor", "middle").attr("dominant-baseline", "middle").attr("transform", (t) => {
			let u = I.get(t.source), d = I.get(t.target), f = (u.x + d.x) / 2, p = (u.y + d.y) / 2, m = d.x - u.x, h = d.y - u.y, g = Math.sqrt(m * m + h * h), _ = h / g, v = -m / g, y = f + _ * 8, b = p + v * 8, x = Math.atan2(h, m) * 180 / Math.PI;
			return (x > 90 || x < -90) && (x += 180), `rotate(${x} ${y} ${b})`;
		}).text((t) => t.label);
		let B = E.append("g").attr("class", "wardley-trends"), V = b.trends.map((t) => {
			let u = I.get(t.nodeId);
			if (!u) return null;
			let d = A(t.targetX), f = j(t.targetY), p = d - u.x, m = f - u.y, g = Math.sqrt(p * p + m * m), _ = h.nodeRadius + 2;
			return {
				origin: u,
				targetX: d,
				targetY: f,
				adjustedX2: g > _ ? d - p / g * _ : d,
				adjustedY2: g > _ ? f - m / g * _ : f
			};
		}).filter((t) => t !== null);
		B.selectAll("line").data(V).enter().append("line").attr("class", "wardley-trend").attr("x1", (t) => t.origin.x).attr("y1", (t) => t.origin.y).attr("x2", (t) => t.adjustedX2).attr("y2", (t) => t.adjustedY2).attr("stroke", g.evolutionStroke).attr("stroke-width", 1).attr("stroke-dasharray", "4 4").attr("marker-end", `url(#arrow-${f})`);
		let H = E.append("g").attr("class", "wardley-nodes").selectAll("g").data(b.nodes).enter().append("g").attr("class", (t) => ["wardley-node", t.className ? `wardley-node--${t.className}` : ""].filter(Boolean).join(" "));
		H.filter((t) => t.sourceStrategy === "outsource").append("circle").attr("class", "wardley-outsource-overlay").attr("cx", (t) => I.get(t.id).x).attr("cy", (t) => I.get(t.id).y).attr("r", h.nodeRadius * 2).attr("fill", "#666").attr("stroke", g.componentStroke).attr("stroke-width", 1), H.filter((t) => t.sourceStrategy === "buy").append("circle").attr("class", "wardley-buy-overlay").attr("cx", (t) => I.get(t.id).x).attr("cy", (t) => I.get(t.id).y).attr("r", h.nodeRadius * 2).attr("fill", "#ccc").attr("stroke", g.componentStroke).attr("stroke-width", 1), H.filter((t) => t.sourceStrategy === "build").append("circle").attr("class", "wardley-build-overlay").attr("cx", (t) => I.get(t.id).x).attr("cy", (t) => I.get(t.id).y).attr("r", h.nodeRadius * 2).attr("fill", "#eee").attr("stroke", "#000").attr("stroke-width", 1);
		let U = H.filter((t) => t.sourceStrategy === "market");
		U.append("circle").attr("class", "wardley-market-overlay").attr("cx", (t) => I.get(t.id).x).attr("cy", (t) => I.get(t.id).y).attr("r", h.nodeRadius * 2).attr("fill", "white").attr("stroke", g.componentStroke).attr("stroke-width", 1), H.filter((t) => !t.isPipelineParent && t.sourceStrategy !== "market" && t.className !== "anchor").append("circle").attr("cx", (t) => I.get(t.id).x).attr("cy", (t) => I.get(t.id).y).attr("r", h.nodeRadius).attr("fill", g.componentFill).attr("stroke", g.componentStroke).attr("stroke-width", 1);
		let W = h.nodeRadius * .7, G = h.nodeRadius * 1.2;
		if (U.append("line").attr("class", "wardley-market-line").attr("x1", (t) => I.get(t.id).x).attr("y1", (t) => I.get(t.id).y - G).attr("x2", (t) => I.get(t.id).x - G * Math.cos(Math.PI / 6)).attr("y2", (t) => I.get(t.id).y + G * Math.sin(Math.PI / 6)).attr("stroke", g.componentStroke).attr("stroke-width", 1), U.append("line").attr("class", "wardley-market-line").attr("x1", (t) => I.get(t.id).x - G * Math.cos(Math.PI / 6)).attr("y1", (t) => I.get(t.id).y + G * Math.sin(Math.PI / 6)).attr("x2", (t) => I.get(t.id).x + G * Math.cos(Math.PI / 6)).attr("y2", (t) => I.get(t.id).y + G * Math.sin(Math.PI / 6)).attr("stroke", g.componentStroke).attr("stroke-width", 1), U.append("line").attr("class", "wardley-market-line").attr("x1", (t) => I.get(t.id).x + G * Math.cos(Math.PI / 6)).attr("y1", (t) => I.get(t.id).y + G * Math.sin(Math.PI / 6)).attr("x2", (t) => I.get(t.id).x).attr("y2", (t) => I.get(t.id).y - G).attr("stroke", g.componentStroke).attr("stroke-width", 1), U.append("circle").attr("class", "wardley-market-dot").attr("cx", (t) => I.get(t.id).x).attr("cy", (t) => I.get(t.id).y - G).attr("r", W).attr("fill", "white").attr("stroke", g.componentStroke).attr("stroke-width", 2), U.append("circle").attr("class", "wardley-market-dot").attr("cx", (t) => I.get(t.id).x - G * Math.cos(Math.PI / 6)).attr("cy", (t) => I.get(t.id).y + G * Math.sin(Math.PI / 6)).attr("r", W).attr("fill", "white").attr("stroke", g.componentStroke).attr("stroke-width", 2), U.append("circle").attr("class", "wardley-market-dot").attr("cx", (t) => I.get(t.id).x + G * Math.cos(Math.PI / 6)).attr("cy", (t) => I.get(t.id).y + G * Math.sin(Math.PI / 6)).attr("r", W).attr("fill", "white").attr("stroke", g.componentStroke).attr("stroke-width", 2), H.filter((t) => t.isPipelineParent === !0).append("rect").attr("x", (t) => I.get(t.id).x - v / 2).attr("y", (t) => I.get(t.id).y - v / 2).attr("width", v).attr("height", v).attr("fill", g.componentFill).attr("stroke", g.componentStroke).attr("stroke-width", 1), H.filter((t) => t.inertia === !0).append("line").attr("class", "wardley-inertia").attr("x1", (t) => {
			let u = I.get(t.id), d = t.isPipelineParent ? v / 2 + 15 : h.nodeRadius + 15;
			return t.sourceStrategy && (d += h.nodeRadius + 10), u.x + d;
		}).attr("y1", (t) => {
			let u = I.get(t.id), d = t.isPipelineParent ? v : h.nodeRadius * 2;
			return u.y - d / 2;
		}).attr("x2", (t) => {
			let u = I.get(t.id), d = t.isPipelineParent ? v / 2 + 15 : h.nodeRadius + 15;
			return t.sourceStrategy && (d += h.nodeRadius + 10), u.x + d;
		}).attr("y2", (t) => {
			let u = I.get(t.id), d = t.isPipelineParent ? v : h.nodeRadius * 2;
			return u.y + d / 2;
		}).attr("stroke", g.componentStroke).attr("stroke-width", 6), H.append("text").attr("x", (t) => {
			let u = I.get(t.id);
			if (t.className === "anchor") return t.labelOffsetX === void 0 ? u.x : u.x + t.labelOffsetX;
			let d = h.nodeLabelOffset;
			t.sourceStrategy && t.labelOffsetX === void 0 && (d += 10);
			let f = t.labelOffsetX ?? d;
			return u.x + f;
		}).attr("y", (t) => {
			let u = I.get(t.id);
			if (t.className === "anchor") return t.labelOffsetY === void 0 ? u.y - 3 : u.y + t.labelOffsetY;
			let d = -h.nodeLabelOffset;
			t.sourceStrategy && t.labelOffsetY === void 0 && (d -= 10);
			let f = t.labelOffsetY ?? d;
			return u.y + f;
		}).attr("class", "wardley-node-label").attr("fill", (t) => t.className === "evolved" ? g.evolutionStroke : t.className === "anchor" ? "#000" : g.componentLabelColor).attr("font-size", h.labelFontSize).attr("font-weight", (t) => t.className === "anchor" ? "bold" : "normal").attr("text-anchor", (t) => t.className === "anchor" ? "middle" : "start").attr("dominant-baseline", (t) => t.className === "anchor" ? "middle" : "auto").text((t) => t.label), b.annotations.length > 0) {
			let t = E.append("g").attr("class", "wardley-annotations");
			if (b.annotations.forEach((u) => {
				let d = u.coordinates.map((t) => ({
					x: A(t.x),
					y: j(t.y)
				}));
				if (d.length > 1) for (let u = 0; u < d.length - 1; u++) t.append("line").attr("class", "wardley-annotation-line").attr("x1", d[u].x).attr("y1", d[u].y).attr("x2", d[u + 1].x).attr("y2", d[u + 1].y).attr("stroke", g.axisColor).attr("stroke-width", 1.5).attr("stroke-dasharray", "4 4");
				d.forEach((d) => {
					let f = t.append("g").attr("class", "wardley-annotation");
					f.append("circle").attr("cx", d.x).attr("cy", d.y).attr("r", 10).attr("fill", "white").attr("stroke", g.axisColor).attr("stroke-width", 1.5), f.append("text").attr("x", d.x).attr("y", d.y).attr("text-anchor", "middle").attr("dominant-baseline", "central").attr("font-size", 10).attr("fill", g.axisTextColor).attr("font-weight", "bold").text(u.number);
				});
			}), b.annotationsBox) {
				let u = A(b.annotationsBox.x), d = j(b.annotationsBox.y), f = t.append("g").attr("class", "wardley-annotations-box"), p = [...b.annotations].filter((t) => t.text).sort((t, u) => t.number - u.number), m = [];
				if (p.forEach((t, p) => {
					let h = f.append("text").attr("x", u + 10).attr("y", d + 10 + (p + 1) * 16).attr("font-size", 11).attr("fill", g.axisTextColor).attr("text-anchor", "start").attr("dominant-baseline", "middle").text(`${t.number}. ${t.text}`);
					m.push(h);
				}), m.length > 0) {
					let t = 0, _ = 0;
					m.forEach((u) => {
						let d = u.node(), f = d.getComputedTextLength();
						t = Math.max(t, f);
						let p = d.getBBox();
						_ = Math.max(_, p.height);
					});
					let v = t + 20 + 105, y = p.length * 16 + 20 + _ / 2, b = h.padding, x = S - h.padding - v, C = h.padding, T = w - h.padding - y;
					u = Math.max(b, Math.min(u, x)), d = Math.max(C, Math.min(d, T)), m.forEach((t, f) => {
						t.attr("x", u + 10).attr("y", d + 10 + (f + 1) * 16);
					}), f.insert("rect", "text").attr("x", u).attr("y", d).attr("width", v).attr("height", y).attr("fill", "white").attr("stroke", g.axisColor).attr("stroke-width", 1.5).attr("rx", 4).attr("ry", 4);
				}
			}
		}
		if (b.notes.length > 0) {
			let t = E.append("g").attr("class", "wardley-notes");
			b.notes.forEach((u) => {
				let d = A(u.x), f = j(u.y);
				t.append("text").attr("x", d).attr("y", f).attr("text-anchor", "start").attr("font-size", 11).attr("fill", g.axisTextColor).attr("font-weight", "bold").text(u.text);
			});
		}
		if (b.accelerators.length > 0) {
			let t = E.append("g").attr("class", "wardley-accelerators");
			b.accelerators.forEach((u) => {
				let d = A(u.x), f = j(u.y), p = `
        M ${d} ${f - 30 / 2}
        L ${d + 60 - 20} ${f - 30 / 2}
        L ${d + 60 - 20} ${f - 30 / 2 - 8}
        L ${d + 60} ${f}
        L ${d + 60 - 20} ${f + 30 / 2 + 8}
        L ${d + 60 - 20} ${f + 30 / 2}
        L ${d} ${f + 30 / 2}
        Z
      `;
				t.append("path").attr("d", p).attr("fill", "white").attr("stroke", g.componentStroke).attr("stroke-width", 1), t.append("text").attr("x", d + 60 / 2).attr("y", f + 30 / 2 + 15).attr("text-anchor", "middle").attr("font-size", 10).attr("fill", g.axisTextColor).attr("font-weight", "bold").text(u.name);
			});
		}
		if (b.deaccelerators.length > 0) {
			let t = E.append("g").attr("class", "wardley-deaccelerators");
			b.deaccelerators.forEach((u) => {
				let d = A(u.x), f = j(u.y), p = `
        M ${d + 60} ${f - 30 / 2}
        L ${d + 20} ${f - 30 / 2}
        L ${d + 20} ${f - 30 / 2 - 8}
        L ${d} ${f}
        L ${d + 20} ${f + 30 / 2 + 8}
        L ${d + 20} ${f + 30 / 2}
        L ${d + 60} ${f + 30 / 2}
        Z
      `;
				t.append("path").attr("d", p).attr("fill", "white").attr("stroke", g.componentStroke).attr("stroke-width", 1), t.append("text").attr("x", d + 60 / 2).attr("y", f + 30 / 2 + 15).attr("text-anchor", "middle").attr("font-size", 10).attr("fill", g.axisTextColor).attr("font-weight", "bold").text(u.name);
			});
		}
	}, "draw") },
	styles: /* @__PURE__ */ __name(({ wardley: t } = {}) => {
		let u = cleanAndMerge(cleanAndMerge(getThemeVariables3(), getConfig().themeVariables).wardley, t);
		return `
  .wardley-background {
    fill: ${u.backgroundColor};
  }
  .wardley-axes line, .wardley-axes path {
    stroke: ${u.axisColor};
  }
  .wardley-axis-label {
    fill: ${u.axisTextColor};
  }
  .wardley-stage-label {
    fill: ${u.axisTextColor};
  }
  .wardley-grid line {
    stroke: ${u.gridColor};
  }
  .wardley-node circle {
    fill: ${u.componentFill};
    stroke: ${u.componentStroke};
  }
  .wardley-node-label {
    fill: ${u.componentLabelColor};
  }
  .wardley-link {
    stroke: ${u.linkStroke};
  }
  .wardley-link--dashed {
    stroke-dasharray: 4 4;
  }
  .wardley-link-label {
    fill: ${u.axisTextColor};
  }
  .wardley-trend line {
    stroke: ${u.evolutionStroke};
  }
  .wardley-annotation-line {
    stroke: ${u.annotationStroke};
  }
  .wardley-annotation circle {
    fill: ${u.annotationFill};
    stroke: ${u.annotationStroke};
  }
  .wardley-annotation text {
    fill: ${u.annotationTextColor};
  }
  .wardley-annotations-box rect {
    fill: ${u.annotationFill};
    stroke: ${u.annotationStroke};
  }
  .wardley-annotations-box text {
    fill: ${u.annotationTextColor};
  }
  .wardley-pipeline-box {
    stroke: ${u.componentStroke};
  }
  .wardley-notes text {
    fill: ${u.axisTextColor};
  }
  `;
	}, "styles")
};
export { diagram };
