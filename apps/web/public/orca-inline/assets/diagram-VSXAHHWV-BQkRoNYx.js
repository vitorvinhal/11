import { T as isEmResetFrame } from "./chunk-FOHPRMQF-jGN_mPcr.js";
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
import { m as log, p as select_default } from "./src-DXrlgw8l.js";
import { H as setAccDescription, K as setDiagramTitle, U as setAccTitle, Y as setupGraphViewbox2, a as clear, b as getConfig, f as defaultConfig_default, v as getAccDescription, w as getDiagramTitle, x as getConfig2, y as getAccTitle, z as sanitizeText } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import "./dist-DRK-BflQ.js";
import { a as cleanAndMerge, n as calculateTextDimensions, v as wrapLabel } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as populateCommonDb } from "./chunk-JWPE2WC7-Cv3uUh-s.js";
import { n as parse } from "./mermaid-parser.core-D-n-19AD.js";
var PositionFrameKind = "position frame", FramePositionedKind = "frame positioned", PositionRelationKind = "position relation", RelationPositionedKind = "relation positioned", setOptions = /* @__PURE__ */ __name(function(u) {
	log.debug("options str", u);
}, "setOptions"), getOptions = /* @__PURE__ */ __name(function() {
	return {};
}, "getOptions"), clear2 = /* @__PURE__ */ __name(function() {
	reset(), clear();
}, "clear");
function reset() {
	store = {};
}
__name(reset, "reset");
var DEFAULT_EVENTMODELING_CONFIG = defaultConfig_default.eventmodeling, getConfig3 = /* @__PURE__ */ __name(() => cleanAndMerge({
	...DEFAULT_EVENTMODELING_CONFIG,
	...getConfig().eventmodeling
}), "getConfig"), store = {};
function getState() {
	let u = initial, { ast: z } = store, V = getDiagramProps();
	if (!z) throw Error("No data for EventModel");
	return z.frames.forEach((H, U) => {
		let W = calculateTextProps(H, z.dataEntities, V);
		u = dispatch(u, {
			$kind: PositionFrameKind,
			index: U,
			frame: H,
			textProps: W
		});
		let G;
		hasSourceFrame(H) ? (log.debug("source frame", H.sourceFrames), G = z.frames.filter((u) => H.sourceFrames.some((z) => z.$refText === u.name)), G.forEach((z) => {
			u = dispatch(u, {
				$kind: PositionRelationKind,
				index: U,
				frame: H,
				sourceFrame: z
			});
		})) : u = dispatch(u, {
			$kind: PositionRelationKind,
			index: U,
			frame: H
		});
	}), u = {
		...u,
		sortedSwimlanesArray: sortedSwimlanesArray(u.swimlanes)
	}, u;
}
__name(getState, "getState");
function setAst(u) {
	store.ast = u;
}
__name(setAst, "setAst");
var diagramProps = {
	swimlaneMinHeight: 70,
	swimlanePadding: 15,
	swimlaneGap: 10,
	boxPadding: 10,
	boxOverlap: 90,
	boxDefaultY: 0,
	boxMinWidth: 80,
	boxMaxWidth: 450,
	boxMinHeight: 80,
	boxMaxHeight: 750,
	contentStartX: 250,
	textMaxWidth: 430,
	boxTextFontWeight: "bold",
	boxTextPadding: 10,
	swimlaneTextFontWeight: "bold",
	labelUiAutomation: "UI/Automation",
	labelUiAutomationPrefix: "UI/A: ",
	labelCommandReadModel: "Command/Read Model",
	labelCommandReadModelPrefix: "C/RM: ",
	labelEvents: "Events",
	labelEventsPrefix: "Stream: "
};
function getDiagramProps() {
	return diagramProps;
}
__name(getDiagramProps, "getDiagramProps");
var initial = {
	boxes: [],
	swimlanes: {},
	relations: [],
	maxR: 0,
	sortedSwimlanesArray: []
};
function extractNamespace(u) {
	let z = u.split(".");
	if (z.length === 2) return z[0];
}
__name(extractNamespace, "extractNamespace");
function extractName(u) {
	let z = u.split(".");
	return z.length === 2 ? z[1] : u;
}
__name(extractName, "extractName");
function findSwimlaneByNamespace(u, z) {
	if (!(!z || z.length === 0)) return Object.values(u).find((u) => u.namespace === z);
}
__name(findSwimlaneByNamespace, "findSwimlaneByNamespace");
function findNextAvailableIndex(u, z, B) {
	return Math.max(z, ...Object.keys(u).filter((u) => {
		let V = Number.parseInt(u);
		return V > z && V < B;
	}).map((u) => Number.parseInt(u))) + 1;
}
__name(findNextAvailableIndex, "findNextAvailableIndex");
function calculateSwimlaneProps(u, z) {
	let B = extractNamespace(u.entityIdentifier), V = findSwimlaneByNamespace(z, B);
	switch (u.modelEntityType) {
		case "ui":
		case "pcr":
		case "processor": return V ? {
			index: V.index,
			label: V.namespace || diagramProps.labelUiAutomation
		} : B ? {
			index: findNextAvailableIndex(z, 0, 100),
			label: diagramProps.labelUiAutomationPrefix + B
		} : {
			index: 0,
			label: diagramProps.labelUiAutomation
		};
		case "rmo":
		case "readmodel":
		case "cmd":
		case "command": return V ? {
			index: V.index,
			label: V.namespace || diagramProps.labelCommandReadModel
		} : B ? {
			index: findNextAvailableIndex(z, 100, 200),
			label: diagramProps.labelCommandReadModelPrefix + B
		} : {
			index: 100,
			label: diagramProps.labelCommandReadModel
		};
		case "evt":
		case "event":
		default: return V ? {
			index: V.index,
			label: V.namespace || diagramProps.labelEvents
		} : B ? {
			index: findNextAvailableIndex(z, 200, 300),
			label: diagramProps.labelEventsPrefix + B
		} : {
			index: 200,
			label: diagramProps.labelEvents
		};
	}
}
__name(calculateSwimlaneProps, "calculateSwimlaneProps");
function calculateEntityVisualProps(u) {
	let { themeVariables: z } = getConfig();
	switch (u.modelEntityType) {
		case "ui": return {
			fill: z.emUiFill ?? "white",
			stroke: z.emUiStroke ?? "#dbdada"
		};
		case "pcr":
		case "processor": return {
			fill: z.emProcessorFill ?? "#edb3f6",
			stroke: z.emProcessorStroke ?? "#b88cbf"
		};
		case "rmo":
		case "readmodel": return {
			fill: z.emReadModelFill ?? "#d3f1a2",
			stroke: z.emReadModelStroke ?? "#a3b732"
		};
		case "cmd":
		case "command": return {
			fill: z.emCommandFill ?? "#bcd6fe",
			stroke: z.emCommandStroke ?? "#679ac3"
		};
		case "evt":
		case "event": return {
			fill: z.emEventFill ?? "#ffb778",
			stroke: z.emEventStroke ?? "#c19a0f"
		};
		default: return {
			fill: "red",
			stroke: "black"
		};
	}
}
__name(calculateEntityVisualProps, "calculateEntityVisualProps");
function calculateTextProps(u, z, V) {
	let H = getConfig(), U = sanitizeText(extractName(u.entityIdentifier) ?? "", H), W, G = {
		fontSize: 16,
		fontWeight: 700,
		fontFamily: "\"trebuchet ms\", verdana, arial, sans-serif",
		joinWith: "<br/>"
	}, K = `<b>${wrapLabel(U, V.textMaxWidth, G)}</b>`;
	if (u.dataInlineValue && (W = u.dataInlineValue, W = W.substring(W.indexOf("{") + 1), W = W.substring(0, W.lastIndexOf("}") - 1), W = sanitizeText(W, H), W = wrapLabel(W, V.textMaxWidth, G), W = W.replaceAll(" ", "&nbsp;")), u.dataReference) {
		let B = z.find((z) => z.name === u.dataReference?.$refText);
		B && (W = B.dataBlockValue, W = W.substring(W.indexOf("{\n") + 2), W = W.substring(0, W.lastIndexOf("}") - 1), W = sanitizeText(W, H), W = wrapLabel(W, V.textMaxWidth, G), W = W.replaceAll(" ", "&nbsp;"), W += "<br/>");
	}
	let J = W !== void 0;
	J && (K += `<br/><br/><code style="text-align: left; display: block;max-width:${V.textMaxWidth}px">${W}</code>`);
	let Y = {
		fontSize: G.fontSize,
		fontWeight: G.fontWeight,
		fontFamily: G.fontFamily
	}, X = calculateTextDimensions(K, Y), Z = J ? X.width / 3 : X.width, Q = {
		content: K,
		width: Z,
		height: X.height
	};
	return log.debug(`[${u.name}] ${u.entityIdentifier} text`, Q), Q;
}
__name(calculateTextProps, "calculateTextProps");
function decidePositionFrame(u, z) {
	let B = z, V = calculateEntityVisualProps(B.frame), H = {
		width: B.textProps.width + 2 * diagramProps.boxTextPadding,
		height: B.textProps.height + 2 * diagramProps.boxTextPadding
	};
	return [{
		$kind: FramePositionedKind,
		frame: B.frame,
		index: B.index,
		visual: V,
		dimension: H,
		textProps: B.textProps
	}];
}
__name(decidePositionFrame, "decidePositionFrame");
function calculateX(u, z, B) {
	return z === void 0 ? diagramProps.contentStartX : z.index === u.index && u.r ? u.r + diagramProps.boxPadding : B === void 0 ? diagramProps.contentStartX : B.r - diagramProps.boxOverlap + diagramProps.boxPadding;
}
__name(calculateX, "calculateX");
function calculateMaxRight(u, z) {
	let B = [...u.map((u) => u.r), z];
	return Math.max(...B);
}
__name(calculateMaxRight, "calculateMaxRight");
function sortedSwimlanesArray(u) {
	return Object.values(u).sort((u, z) => u.index - z.index);
}
__name(sortedSwimlanesArray, "sortedSwimlanesArray");
function evolveFramePositioned(u, z) {
	let B = z, V = calculateSwimlaneProps(B.frame, u.swimlanes), H;
	H = V.index in u.swimlanes ? u.swimlanes[V.index] : {
		index: V.index,
		label: V.label,
		r: 0,
		y: V.index * diagramProps.swimlaneMinHeight + diagramProps.swimlaneGap,
		height: diagramProps.swimlaneMinHeight,
		maxHeight: diagramProps.swimlaneMinHeight
	};
	let U = u.boxes.length > 0 ? u.boxes[u.boxes.length - 1] : void 0, W = u.previousSwimlaneNumber === void 0 ? void 0 : u.swimlanes[u.previousSwimlaneNumber], G = {
		width: Math.max(diagramProps.boxMinWidth, Math.min(diagramProps.boxMaxWidth, B.dimension.width)) + 2 * diagramProps.boxPadding,
		height: Math.max(diagramProps.boxMinHeight, Math.min(diagramProps.boxMaxHeight, B.dimension.height)) + 2 * diagramProps.boxPadding
	}, K = calculateX(H, W, U), q = K + G.width + diagramProps.boxPadding, J = calculateMaxRight(Object.values(u.swimlanes), q);
	H.r = K + G.width, H.maxHeight = Math.max(H.maxHeight, G.height), H.height = Math.max(diagramProps.swimlaneMinHeight, H.maxHeight) + 2 * diagramProps.swimlanePadding;
	let Y = {
		x: K,
		y: diagramProps.swimlanePadding + H.y,
		r: q,
		dimension: G,
		leftSibling: !1,
		swimlane: H,
		visual: B.visual,
		text: B.textProps.content,
		frame: B.frame,
		index: B.index
	}, X = {
		...u,
		boxes: [...u.boxes, Y],
		swimlanes: {
			...u.swimlanes,
			[`${H.index}`]: H
		},
		previousSwimlaneNumber: V.index,
		previousFrame: B.frame,
		maxR: J
	}, Z = sortedSwimlanesArray(X.swimlanes);
	Z.length > 0 && (Z[0].y = 0);
	for (let u = 1; u < Z.length; u++) {
		let z = Z[u], B = Z[u - 1];
		z.y = B.y + B.height + diagramProps.swimlaneGap;
	}
	return X;
}
__name(evolveFramePositioned, "evolveFramePositioned");
function isFirstFrame(u, z) {
	return u === 0 && z.sourceFrames.length === 0;
}
__name(isFirstFrame, "isFirstFrame");
function hasSourceFrame(u) {
	return u.sourceFrames !== void 0 && u.sourceFrames !== null && u.sourceFrames.length > 0;
}
__name(hasSourceFrame, "hasSourceFrame");
function findBoxByFrame(u, z) {
	if (z != null) return u.find((u) => u.frame.name === z.name);
}
__name(findBoxByFrame, "findBoxByFrame");
function findBoxByLineIndex(u, z, B) {
	if (!(B < 0)) for (let V = B; V >= 0; V--) {
		let B = u[V];
		if (B.swimlane.index !== z) return B;
	}
}
__name(findBoxByLineIndex, "findBoxByLineIndex");
function decidePositionRelation(z, B) {
	let V = B;
	if (isEmResetFrame(V.frame) || isFirstFrame(V.index, V.frame)) return [];
	let H = findBoxByFrame(z.boxes, V.frame);
	if (H === void 0) throw Error(`Target box not found for frame ${V.frame.name}`);
	let U;
	return U = V.sourceFrame ? findBoxByFrame(z.boxes, V.sourceFrame) : findBoxByLineIndex(z.boxes, H.swimlane.index, V.index - 1), U === void 0 ? [] : [{
		$kind: RelationPositionedKind,
		frame: V.frame,
		index: V.index,
		sourceBox: U,
		targetBox: H
	}];
}
__name(decidePositionRelation, "decidePositionRelation");
function evolveRelationPositioned(u, z) {
	let B = z, V = {
		visual: {
			fill: "none",
			stroke: "#000"
		},
		source: {
			x: B.sourceBox.x,
			y: B.sourceBox.y
		},
		target: {
			x: B.targetBox.x,
			y: B.targetBox.y
		},
		sourceBox: B.sourceBox,
		targetBox: B.targetBox
	};
	return {
		...u,
		relations: [...u.relations, V]
	};
}
__name(evolveRelationPositioned, "evolveRelationPositioned");
var deciders = {
	[PositionFrameKind]: decidePositionFrame,
	[PositionRelationKind]: decidePositionRelation
}, evolvers = {
	[FramePositionedKind]: evolveFramePositioned,
	[RelationPositionedKind]: evolveRelationPositioned
};
function decide(u, z) {
	let V = deciders[z.$kind];
	if (V == null) return [];
	let H = V(u, z);
	return log.debug("decided events", H), H;
}
__name(decide, "decide");
function evolve(u, z) {
	let V = z.reduce((u, z) => {
		let B = evolvers[z.$kind];
		return B == null ? u : B(u, z);
	}, u);
	return log.debug("evolve events", {
		state: u,
		newState: V,
		events: z
	}), V;
}
__name(evolve, "evolve");
function dispatch(u, z) {
	return evolve(u, decide(u, z));
}
__name(dispatch, "dispatch");
var db = {
	getConfig: getConfig3,
	setOptions,
	getOptions,
	clear: clear2,
	setAccTitle,
	getAccTitle,
	getAccDescription,
	setAccDescription,
	setDiagramTitle,
	getDiagramTitle,
	setAst,
	getDiagramProps,
	getState
}, parser = { parse: /* @__PURE__ */ __name(async (u) => {
	let z = await parse("eventmodeling", u);
	log.debug(z), db.setAst(z), populateCommonDb(z, db);
}, "parse") }, DEFAULT_EVENTMODELING_CONFIG2 = getConfig2()?.eventmodeling;
function renderD3Box(u, z) {
	return (B) => {
		let V = B.swimlane.y + z.swimlanePadding, H = u.append("g").attr("class", "em-box");
		H.append("rect").attr("x", B.x).attr("y", V).attr("rx", "3").attr("width", B.dimension.width).attr("height", B.dimension.height).attr("stroke", B.visual.stroke).attr("fill", B.visual.fill), H.append("foreignObject").attr("x", B.x + z.boxPadding).attr("y", V + 10).attr("width", B.dimension.width - 2 * z.boxPadding).attr("height", B.dimension.height - 2 * z.boxPadding).append("xhtml:div").style("display", "table").style("height", "100%").style("width", "100%").append("span").style("display", "table-cell").style("text-align", "center").style("vertical-align", "middle").html(B.text);
	};
}
__name(renderD3Box, "renderD3Box");
function dirUpwards(u, z) {
	return u > z;
}
__name(dirUpwards, "dirUpwards");
function renderD3Relation(u, z, V, H) {
	return (U) => {
		let W = U.sourceBox.swimlane.y + z.swimlanePadding, G = U.targetBox.swimlane.y + z.swimlanePadding, K = dirUpwards(W, G), q = U.sourceBox.x + U.sourceBox.dimension.width * 2 / 3, J = U.targetBox.x + U.targetBox.dimension.width / 3, Y, X;
		log.debug(`rendering relation up=${K} for `, {
			sourceBox: U.sourceBox,
			targetBox: U.targetBox
		}), K ? (Y = W, X = G + U.targetBox.dimension.height) : (Y = W + U.sourceBox.dimension.height, X = G);
		let Z = H.emRelationStroke ?? U.visual.stroke;
		u.append("path").attr("class", "em-relation").attr("fill", U.visual.fill).attr("stroke", Z).attr("stroke-width", "1").attr("marker-end", `url(#${V})`).attr("d", `M${q} ${Y} L${J} ${X}`);
	};
}
__name(renderD3Relation, "renderD3Relation");
function renderD3Swimlane(u, z, B, V) {
	return (H) => {
		let U = u.append("g").attr("class", "em-swimlane"), W = V.emSwimlaneBackgroundOdd ?? "rgb(250,250,250)", G = V.emSwimlaneBackgroundStroke ?? "rgb(240,240,240)";
		U.append("rect").attr("x", 0).attr("y", H.y).attr("rx", "3").attr("width", z + B.swimlanePadding).attr("height", H.height).attr("fill", W).attr("stroke", G), U.append("text").attr("font-weight", B.swimlaneTextFontWeight).attr("x", 30).attr("y", H.y + 30).text(H.label);
	};
}
__name(renderD3Swimlane, "renderD3Swimlane");
var diagram = {
	parser,
	db,
	renderer: { draw: /* @__PURE__ */ __name(function(u, z, H, U) {
		if (log.debug("in eventmodeling renderer", u + "\n", "id:", z, H), !DEFAULT_EVENTMODELING_CONFIG2) throw Error("EventModeling config not found");
		let W = U.db, { themeVariables: K, eventmodeling: q } = getConfig2(), J = select_default(`[id="${z}"]`), Y = W.getDiagramProps(), X = W.getState(), Q = `em-arrowhead-${z}`, $ = K.emArrowhead ?? "#000000";
		X.sortedSwimlanesArray.forEach(renderD3Swimlane(J, X.maxR, Y, K)), X.boxes.forEach(renderD3Box(J, Y)), X.relations.forEach(renderD3Relation(J, Y, Q, K)), J.append("defs").append("marker").attr("id", Q).attr("markerWidth", "10").attr("markerHeight", "7").attr("refX", "10").attr("refY", "3.5").attr("orient", "auto").append("polygon").attr("points", "0 0, 10 3.5, 0 7").attr("fill", $), setupGraphViewbox2(void 0, J, q?.padding ?? 30, q?.useMaxWidth);
	}, "draw") },
	styles: /* @__PURE__ */ __name((u) => "", "getStyles")
};
export { diagram };
