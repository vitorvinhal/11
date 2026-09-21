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
import { H as setAccDescription, K as setDiagramTitle, U as setAccTitle, a as clear, b as getConfig, c as configureSvgSize, f as defaultConfig_default, v as getAccDescription, w as getDiagramTitle, y as getAccTitle, z as sanitizeText } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import "./dist-DRK-BflQ.js";
import { a as cleanAndMerge } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as selectSvgElement } from "./chunk-CLGD4ZFX--a6S7Yag.js";
import { t as populateCommonDb } from "./chunk-JWPE2WC7-Cv3uUh-s.js";
import { n as parse } from "./mermaid-parser.core-D-n-19AD.js";
import { r as registerIconPacks, t as getIconSVG } from "./chunk-PWAF6VOD-xw3v3CBz.js";
import { t as ImperativeState } from "./chunk-2Q5K7J3B-9gsxwa9s.js";
var ALL_BOX_CHARS = /[─━│┃└┗├┣]/, BRANCH_CHAR = /[└┗├┣]/, DASH_CHAR = /[─━]/, DECORATION_ONLY = /^[\s│┃]+$/, METADATA_LINE = /^\s*(title[\t ]|accTitle[\t ]*:|accDescr[\t ]*[:{])/, COMMENT_LINE = /^\s*%%/, INDENT_UNIT = "    ";
function isBoxDrawingFormat(l) {
	return l.some((l) => ALL_BOX_CHARS.test(l));
}
__name(isBoxDrawingFormat, "isBoxDrawingFormat");
function inferSegmentWidth(l) {
	for (let L of l) {
		let l = BRANCH_CHAR.exec(L);
		if (l?.index && l.index > 0) return l.index;
	}
	return 4;
}
__name(inferSegmentWidth, "inferSegmentWidth");
function remapErrorLines(l, L) {
	return l.replace(/\bline\s+(\d+)\b/gi, (l, R) => {
		let z = parseInt(R, 10), B = L.get(z);
		return B ? `line ${B}` : l;
	});
}
__name(remapErrorLines, "remapErrorLines");
function preprocessBoxDrawing(l) {
	let L = l.split("\n"), R = /* @__PURE__ */ new Map(), z = -1;
	for (let [l, R] of L.entries()) if (R.trim() === "treeView-beta") {
		z = l;
		break;
	}
	if (z === -1) return {
		text: l,
		lineMap: R
	};
	let B = [];
	for (let l = z + 1; l < L.length; l++) {
		let R = L[l];
		R.trim() === "" || COMMENT_LINE.test(R) || METADATA_LINE.test(R) || DECORATION_ONLY.test(R) || B.push(R.replace(/\t/g, "    "));
	}
	if (!isBoxDrawingFormat(B)) return {
		text: l,
		lineMap: R
	};
	let V = inferSegmentWidth(B), H = [], U = 0;
	for (let l = 0; l <= z; l++) H.push(L[l]), U++, R.set(U, l + 1);
	for (let l = z + 1; l < L.length; l++) {
		let z = L[l], B = z.trim(), W = l + 1;
		if (B === "") {
			H.push(z), U++, R.set(U, W);
			continue;
		}
		if (COMMENT_LINE.test(z)) {
			H.push(z), U++, R.set(U, W);
			continue;
		}
		if (METADATA_LINE.test(z)) {
			H.push(z), U++, R.set(U, W);
			continue;
		}
		if (DECORATION_ONLY.test(z)) continue;
		let G = z.replace(/\t/g, "    "), K = BRANCH_CHAR.exec(G);
		if (K?.index !== void 0) {
			let l = K.index, L = Math.round(l / V) + 1, z = l + 1;
			for (; z < G.length && DASH_CHAR.test(G[z]);) z++;
			for (; z < G.length && G[z] === " ";) z++;
			let B = G.slice(z).trimEnd();
			if (!B) throw Error(`Line ${W}: Empty node \u2014 expected a filename or directory name after the box-drawing prefix`);
			let q = INDENT_UNIT.repeat(L);
			H.push(q + B), U++, R.set(U, W);
		} else if (/^[\s─━│┃└┗├┣]+$/.test(G)) continue;
		else if (ALL_BOX_CHARS.test(G)) H.push(z), U++, R.set(U, W);
		else if (/^\s+/.test(G)) throw Error(`Line ${W}: Unexpected indentation without box-drawing characters. In box-drawing format, use \u251C\u2500\u2500 or \u2514\u2500\u2500 prefixes for indented nodes.`);
		else H.push(z), U++, R.set(U, W);
	}
	return {
		text: H.join("\n"),
		lineMap: R
	};
}
__name(preprocessBoxDrawing, "preprocessBoxDrawing");
var state = new ImperativeState(() => ({
	cnt: 1,
	stack: [{
		id: 0,
		level: -1,
		name: "/",
		nodeType: "directory",
		children: []
	}]
})), clear2 = /* @__PURE__ */ __name(() => {
	state.reset(), clear();
}, "clear"), getRoot = /* @__PURE__ */ __name(() => state.records.stack[0], "getRoot"), getCount = /* @__PURE__ */ __name(() => state.records.cnt, "getCount"), defaultConfig = defaultConfig_default.treeView, db_default = {
	clear: clear2,
	addNode: /* @__PURE__ */ __name((l, L, R, z, B, V) => {
		for (; l <= state.records.stack[state.records.stack.length - 1].level;) state.records.stack.pop();
		let H = {
			id: state.records.cnt++,
			level: l,
			name: L,
			nodeType: R,
			icon: B,
			cssClass: z,
			description: V,
			children: []
		};
		state.records.stack[state.records.stack.length - 1].children.push(H), state.records.stack.push(H);
	}, "addNode"),
	getRoot,
	getCount,
	getConfig: /* @__PURE__ */ __name(() => cleanAndMerge(defaultConfig, getConfig().treeView), "getConfig"),
	getAccTitle,
	getAccDescription,
	getDiagramTitle,
	setAccDescription,
	setAccTitle,
	setDiagramTitle
}, populate = /* @__PURE__ */ __name((l) => {
	populateCommonDb(l, db_default);
	for (let L of l.nodes) {
		let l = typeof L.indent == "number" ? L.indent : 0, R = L.name, z = R.endsWith("/");
		z && (R = R.slice(0, -1));
		let B = z ? "directory" : "file", V = L.classAnnotation || void 0, U = L.iconAnnotation, W = U === void 0 ? void 0 : U || "none", G = L.descAnnotation || void 0, K = G ? sanitizeText(G, getConfig()) : void 0;
		db_default.addNode(l, R, B, V, W, K);
	}
}, "populate"), parser = { parse: /* @__PURE__ */ __name(async (l) => {
	let { text: R, lineMap: z } = preprocessBoxDrawing(l);
	try {
		let l = await parse("treeView", R);
		log.debug(l), populate(l);
	} catch (l) {
		throw z.size > 0 && l instanceof Error && (l.message = remapErrorLines(l.message, z)), l;
	}
}, "parse") }, treeViewIcons = {
	prefix: "mermaid-treeview",
	height: 24,
	width: 24,
	icons: {
		folder: { body: "<path fill=\"currentColor\" d=\"M10.59 4.59A2 2 0 0 0 9.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.17z\"/>" },
		file: { body: "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42l-4.82-4.82A2 2 0 0 0 13.17 2H6Zm7.5 1.9l4.6 4.6h-3.6a1 1 0 0 1-1-1V3.9Z\" clip-rule=\"evenodd\"/>" }
	}
};
function detectIcon(l, L) {
	let R = L?.filenameIcons?.[l];
	if (R) return R;
	let z = l.lastIndexOf(".");
	if (z > 0) {
		let R = l.substring(z).toLowerCase(), B = L?.extensionIcons;
		return B?.[R] ?? B?.[R.slice(1)];
	}
}
__name(detectIcon, "detectIcon");
function qualifyIcon(l, L) {
	return l.includes(":") ? l : l in treeViewIcons.icons || !L ? `${treeViewIcons.prefix}:${l}` : `${L}:${l}`;
}
__name(qualifyIcon, "qualifyIcon");
function getNodeIcon(l, L) {
	if (l.icon !== "none") {
		if (l.icon) return qualifyIcon(l.icon, L.defaultIconPack);
		if (L.showIcons) {
			if (l.nodeType === "file") {
				let R = detectIcon(l.name, L);
				if (R === "none") return;
				if (R) return qualifyIcon(R, L.defaultIconPack);
			}
			return `${treeViewIcons.prefix}:${l.nodeType === "directory" ? "folder" : "file"}`;
		}
	}
}
__name(getNodeIcon, "getNodeIcon"), registerIconPacks([{
	name: treeViewIcons.prefix,
	icons: treeViewIcons
}]);
var ICON_SIZE = 14, ICON_GAP = 4, DESC_GAP = 16, resolveNodeIcons = /* @__PURE__ */ __name(async (L, R) => {
	let z = [], B = /* @__PURE__ */ __name((l) => {
		let L = getNodeIcon(l, R);
		L && z.push({
			icon: L,
			node: l
		}), l.children.forEach(B);
	}, "collect");
	B(L);
	let V = await Promise.all(z.map(async ({ icon: l, node: L }) => ({
		id: L.id,
		svg: await getIconSVG(l, {
			height: ICON_SIZE,
			width: ICON_SIZE
		})
	})));
	return new Map(V.map(({ id: l, svg: L }) => [l, L]));
}, "resolveNodeIcons"), positionLabel = /* @__PURE__ */ __name((l, L, R, z, B, V) => {
	let H = z.append("g"), U = "treeView-node-label";
	R.nodeType === "directory" && (U += " treeView-node-dir"), R.cssClass && (U += ` ${R.cssClass}`);
	let W = ICON_SIZE + ICON_GAP, G = getNodeIcon(R, B), K = G !== void 0;
	G && H.append("g").attr("class", "treeView-node-icon").attr("transform", `translate(${l + B.paddingX}, ${L + B.paddingY})`).html(V.get(R.id) ?? "");
	let q = H.append("text").text(R.name).attr("dominant-baseline", "middle").attr("class", U), { height: J, width: Y } = q.node().getBBox(), X = J + B.paddingY * 2, Z = l + B.paddingX + (K ? W : 0);
	q.attr("x", Z), q.attr("y", L + X / 2);
	let Q = Z + Y;
	return R.BBox = {
		x: l,
		y: L,
		width: Y + B.paddingX * 2 + (K ? W : 0),
		height: X
	}, R.cssClass?.split(/\s+/).includes("highlight") && H.insert("rect", ":first-child").attr("x", l).attr("y", L + 1).attr("width", 0).attr("height", X - 2).attr("rx", 3).attr("class", "treeView-highlight-bg"), {
		node: R,
		nodeGroup: H,
		labelRightEdge: Q,
		centerY: L + X / 2
	};
}, "positionLabel"), positionLine = /* @__PURE__ */ __name((l, L, R, z, B, V) => l.append("line").attr("x1", L).attr("y1", R).attr("x2", z).attr("y2", B).attr("stroke-width", V).attr("class", "treeView-node-line"), "positionLine"), drawTree = /* @__PURE__ */ __name((L, R, z, B) => {
	let V = 0, H = 0, U = [], W = /* @__PURE__ */ __name((l, L, R, z) => {
		let W = z * (R.rowIndent + R.paddingX), G = positionLabel(W, V, L, l, R, B);
		U.push(G);
		let { height: K, width: q } = L.BBox;
		positionLine(l, W - R.rowIndent, V + K / 2, W, V + K / 2, R.lineThickness), H = Math.max(H, W + q), V += K;
	}, "drawNode"), G = /* @__PURE__ */ __name((l, R = 0) => {
		W(L, l, z, R), l.children.forEach((l) => {
			G(l, R + 1);
		});
		let { x: B, y: V, height: H } = l.BBox;
		if (l.children.length) {
			let { y: R, height: U } = l.children[l.children.length - 1].BBox;
			positionLine(L, B + z.paddingX, V + H, B + z.paddingX, R + U / 2 + z.lineThickness / 2, z.lineThickness);
		}
	}, "processNode");
	G(R);
	let K = U.filter((l) => l.node.description);
	if (K.length > 0) {
		let l = Math.max(...U.map((l) => l.labelRightEdge)) + DESC_GAP;
		for (let L of K) {
			let R = L.nodeGroup.append("text").text(L.node.description).attr("dominant-baseline", "middle").attr("class", "treeView-node-description").attr("x", l).attr("y", L.centerY).node().getBBox();
			H = Math.max(H, l + R.width + z.paddingX);
		}
	}
	for (let l of U) if (l.node.cssClass?.split(/\s+/).includes("highlight")) {
		let L = l.nodeGroup.select(".treeView-highlight-bg");
		if (!L.empty()) {
			let R = H - l.node.BBox.x + 8;
			L.attr("width", R), H = Math.max(H, l.node.BBox.x + R + 2);
		}
	}
	return {
		totalHeight: V,
		totalWidth: H
	};
}, "drawTree"), renderer_default = { draw: /* @__PURE__ */ __name(async (l, R, z, B) => {
	log.debug("Rendering treeView diagram\n" + l);
	let V = B.db, H = V.getRoot(), W = V.getConfig(), G = selectSvgElement(R), K = G.append("g");
	K.attr("class", "tree-view");
	let { totalHeight: q, totalWidth: J } = drawTree(K, H, W, await resolveNodeIcons(H, W));
	G.attr("viewBox", `-${W.lineThickness / 2} 0 ${J} ${q}`), configureSvgSize(G, q, J, W.useMaxWidth);
}, "draw") }, defaultTreeViewDiagramStyles = {
	labelFontSize: "16px",
	labelColor: "black",
	lineColor: "black",
	iconColor: "#546e7a",
	descriptionColor: "#6a9955",
	highlightBg: "rgba(255, 193, 7, 0.15)",
	highlightStroke: "#ffc107"
}, diagram = {
	db: db_default,
	renderer: renderer_default,
	parser,
	styles: /* @__PURE__ */ __name(({ treeView: l }) => {
		let { labelFontSize: L, labelColor: R, lineColor: z, iconColor: B, descriptionColor: V, highlightBg: H, highlightStroke: U } = cleanAndMerge(defaultTreeViewDiagramStyles, l);
		return `
    .treeView-node-label {
        font-size: ${L};
        fill: ${R};
        white-space: pre;
    }
    .treeView-node-dir {
        font-weight: bold;
    }
    .treeView-node-line {
        stroke: ${z};
    }
    .treeView-node-icon {
        color: ${B};
    }
    .treeView-node-description {
        font-size: ${L};
        fill: ${V};
        font-style: italic;
        white-space: pre;
    }
    .treeView-highlight-bg {
        fill: ${H};
        stroke: ${U};
        stroke-width: 1;
    }
    `;
	}, "styles")
};
export { diagram };
