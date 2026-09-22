import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log } from "./src-DXrlgw8l.js";
import { x as getConfig2 } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import "./dist-DRK-BflQ.js";
import "./chunk-75Z2AOVW-DlWr2fif.js";
import "./chunk-PWAF6VOD-xw3v3CBz.js";
import "./chunk-GMAD6QVW-CrbOfuRD.js";
import "./chunk-P2QGCYS3-ERnFXKBq.js";
import { s as updateNodeBounds } from "./chunk-4HAMMTFA-C6ufBZSb.js";
import { a as setNodeElem, i as positionNode, n as getSubGraphTitleMargins } from "./chunk-GVQU2GXP-Be8dkEne.js";
import { a as insertEdgeLabel, c as positionEdgeLabel, i as insertEdge } from "./chunk-OSK3NFVY-C6YyZAmC.js";
import { t as Graph } from "./graphlib-CFSw-S2d.js";
import { t as layout } from "./dagre-CpTx_4DI.js";
import { n as insertCluster } from "./chunk-L3NEJ4N5-B-D1dHln.js";
import { a as createLayoutElementGroups, c as insertMeasuredNode, i as createCommonLayoutRenderer, r as clusterDb, s as findNonClusterChild, t as adjustClustersAndEdges, u as sortNodesByHierarchy } from "./chunk-2E4U76K2-CWyxffW0.js";
var clamp = /* @__PURE__ */ __name((e, y, b) => Math.max(y, Math.min(b, e)), "clamp"), getDefaultSelfLoopSide = /* @__PURE__ */ __name((e = "TB") => {
	switch (e) {
		case "BT": return "bottom";
		case "LR": return "right";
		case "RL": return "left";
		case "TB":
		default: return "top";
	}
}, "getDefaultSelfLoopSide"), shouldMergeSelfLoopSegments = /* @__PURE__ */ __name((e) => e === "flowchart" || e === "flowchart-v2" || e === "stateDiagram" || e === "er" || e === "classDiagram", "shouldMergeSelfLoopSegments"), DAGRE_NODE_LAYOUT_PROPERTIES = [
	"x",
	"y",
	"width",
	"height",
	"labelBBox",
	"intersect",
	"calcIntersect",
	"diff",
	"clusterNode"
], getSelfLoopSide = /* @__PURE__ */ __name((e, y, b, x, S) => {
	let C = [], w = /* @__PURE__ */ new Set();
	if (b.forEach(({ start: e, end: y }) => {
		e !== x && w.add(e), y !== x && w.add(y);
	}), w.forEach((y) => {
		let b = e.node(y);
		typeof b?.x == "number" && typeof b?.y == "number" && C.push(b);
	}), C.length === 0 && b.forEach(({ edge: e }) => {
		(e.points ?? []).forEach((e) => {
			typeof e?.x == "number" && typeof e?.y == "number" && C.push(e);
		});
	}), C.length === 0) return getDefaultSelfLoopSide(S);
	let T = C.reduce((e, y) => ({
		x: e.x + y.x / C.length,
		y: e.y + y.y / C.length
	}), {
		x: 0,
		y: 0
	}), E = T.x - y.x, D = T.y - y.y;
	return Math.abs(E) > Math.abs(D) ? E > 0 ? "right" : "left" : Math.abs(D) > 0 ? D > 0 ? "bottom" : "top" : getDefaultSelfLoopSide(S);
}, "getSelfLoopSide"), getSelfLoopPoints = /* @__PURE__ */ __name((e, y = "top", b = 0, x = 0) => {
	let S = e.x, C = e.y - b, w = e.width / 2, T = e.height / 2, E = Math.max(36, Math.min(100, e.width * .8)), D = clamp(Math.max(x, e.width * .35), 36, E), O = clamp(Math.min(e.width, e.height) * .45, 24, 48);
	switch (y) {
		case "bottom": {
			let e = C + T;
			return [
				{
					x: S - D / 2,
					y: e
				},
				{
					x: S - D / 2,
					y: e + O
				},
				{
					x: S + D / 2,
					y: e + O
				},
				{
					x: S + D / 2,
					y: e
				}
			];
		}
		case "right": {
			let e = S + w;
			return [
				{
					x: e,
					y: C - D / 2
				},
				{
					x: e + O,
					y: C - D / 2
				},
				{
					x: e + O,
					y: C + D / 2
				},
				{
					x: e,
					y: C + D / 2
				}
			];
		}
		case "left": {
			let e = S - w;
			return [
				{
					x: e,
					y: C - D / 2
				},
				{
					x: e - O,
					y: C - D / 2
				},
				{
					x: e - O,
					y: C + D / 2
				},
				{
					x: e,
					y: C + D / 2
				}
			];
		}
		case "top":
		default: {
			let e = C - T;
			return [
				{
					x: S - D / 2,
					y: e
				},
				{
					x: S - D / 2,
					y: e - O
				},
				{
					x: S + D / 2,
					y: e - O
				},
				{
					x: S + D / 2,
					y: e
				}
			];
		}
	}
}, "getSelfLoopPoints"), getSelfLoopLabelPosition = /* @__PURE__ */ __name((e, y, b = "top", x = 0, S = {}) => {
	let C = e.x, w = e.y - x, T = S.width ?? 0, E = S.height ?? 0;
	switch (b) {
		case "bottom": return {
			x: C,
			y: Math.max(...y.map((e) => e.y)) + E / 2 + 4
		};
		case "right": return {
			x: Math.max(...y.map((e) => e.x)) + T / 2 + 4,
			y: w
		};
		case "left": return {
			x: Math.min(...y.map((e) => e.x)) - T / 2 - 4,
			y: w
		};
		case "top":
		default: return {
			x: C,
			y: Math.min(...y.map((e) => e.y)) - E / 2 - 4
		};
	}
}, "getSelfLoopLabelPosition"), getEdgesToRender = /* @__PURE__ */ __name((e, y = 0, { mergeSelfLoops: b = !0 } = {}) => {
	let x = /* @__PURE__ */ new Map(), S = [], C = e.graph()?.rankdir;
	return e.edges().forEach((y) => {
		let C = e.edge(y);
		if (b && C.selfLoop) {
			let e = C.selfLoop.id;
			x.has(e) || x.set(e, []), x.get(e).push({
				edge: C,
				start: y.v,
				end: y.w
			});
		} else S.push({
			edge: C,
			start: y.v,
			end: y.w
		});
	}), x.forEach((b) => {
		if (b.length !== 3) {
			b.forEach((e) => S.push(e));
			return;
		}
		b.sort((e, y) => e.edge.selfLoop.order - y.edge.selfLoop.order);
		let [x, w, T] = b, E = x.edge.originalEdge ?? w.edge.originalEdge ?? T.edge.originalEdge ?? w.edge, D = e.node(E.start);
		if (!D) {
			b.forEach((e) => S.push(e));
			return;
		}
		let O = {
			width: w.edge.width,
			height: w.edge.height
		}, k = getSelfLoopSide(e, D, b, E.start, C), A = getSelfLoopPoints(D, k, y, O.width ?? 0), j = getSelfLoopLabelPosition(D, A, k, y, O), M = {
			...w.edge,
			...E,
			id: E.id,
			points: A,
			start: E.start,
			end: E.end,
			x: j.x,
			y: j.y,
			width: O.width,
			height: O.height,
			labelStyle: w.edge.labelStyle,
			fromCluster: x.edge.fromCluster ?? w.edge.fromCluster ?? T.edge.fromCluster,
			toCluster: x.edge.toCluster ?? w.edge.toCluster ?? T.edge.toCluster
		};
		delete M.selfLoop, delete M.originalEdge, S.push({
			edge: M,
			start: M.start,
			end: M.end
		});
	}), S;
}, "getEdgesToRender"), measureDagreGraph = /* @__PURE__ */ __name(async ({ element: b, graph: C, diagramType: E, id: D, parentCluster: O, siteConfig: k }) => {
	let A = C.graph().rankdir;
	log.trace("Dir in recursive render - dir:", A);
	let { clusters: N, edgePaths: P, edgeLabels: F, nodes: I, rootGroups: L } = createLayoutElementGroups(b, { edgePathsClass: "edgePaths" });
	C.nodes() ? log.info("Recursive render XXX", C.nodes()) : log.info("No nodes found for", C), C.edges().length > 0 && log.info("Recursive edges", C.edge(C.edges()[0]));
	let R = shouldMergeSelfLoopSegments(E);
	await Promise.all(C.nodes().map(async function(e) {
		let b = C.node(e);
		if (O !== void 0) {
			let b = JSON.parse(JSON.stringify(O.clusterData));
			log.trace("Setting data for parent cluster XXX\n Node.id = ", e, "\n data=", b.height, "\nParent cluster", O.height), C.setNode(O.id, b), C.parent(e) || (log.trace("Setting parent", e, O.id), C.setParent(e, O.id, b));
		}
		if (log.info("(Insert) Node XXX" + e + ": " + JSON.stringify(C.node(e))), b?.clusterNode) {
			log.info("Cluster identified XBX", e, b.width, C.node(e));
			let { ranksep: w, nodesep: T } = C.graph();
			b.graph.setGraph({
				...b.graph.graph(),
				ranksep: w + 25,
				nodesep: T
			});
			let O = await renderDagreSubgraph({
				element: I,
				graph: b.graph,
				diagramType: E,
				id: D,
				parentCluster: C.node(e),
				siteConfig: k
			}), A = O.elem;
			updateNodeBounds(b, A), b.diff = O.diff || 0, log.info("New compound node after recursive render XAX", e, "width", b.width, "height", b.height), setNodeElem(A, b);
		} else C.children(e).length > 0 ? (log.trace("Cluster - the non recursive path XBX", e, b.id, b, b.width, "Graph:", C), log.trace(findNonClusterChild(b.id, C)), clusterDb.set(b.id, {
			id: findNonClusterChild(b.id, C),
			node: b
		})) : (log.trace("Node - the non recursive path XAX", e, I, C.node(e), A), await insertMeasuredNode(I, C.node(e), {
			config: k,
			dir: A
		}));
	})), await (/* @__PURE__ */ __name(async () => {
		let e = C.edges().map(async function(e) {
			let b = C.edge(e.v, e.w, e.name);
			if (log.info("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(e)), log.info("Edge " + e.v + " -> " + e.w + ": ", e, " ", JSON.stringify(C.edge(e))), log.info("Fix", clusterDb, "ids:", e.v, e.w, "Translating: ", clusterDb.get(e.v), clusterDb.get(e.w)), R && b.selfLoop) {
				if (b.selfLoop.order !== 1) return;
				let e = {
					...b.originalEdge,
					...b,
					id: b.selfLoop.id,
					startLabelLeft: b.originalEdge?.startLabelLeft ?? b.startLabelLeft,
					startLabelRight: b.originalEdge?.startLabelRight ?? b.startLabelRight,
					endLabelLeft: b.originalEdge?.endLabelLeft ?? b.endLabelLeft,
					endLabelRight: b.originalEdge?.endLabelRight ?? b.endLabelRight
				};
				await insertEdgeLabel(F, e), b.width = e.width, b.height = e.height, b.labelStyle = e.labelStyle;
				return;
			}
			await insertEdgeLabel(F, b);
		});
		await Promise.all(e);
	}, "processEdges"))();
	let { subGraphTitleTotalMargin: z } = getSubGraphTitleMargins(k);
	return {
		elem: L,
		graph: C,
		groups: {
			clusters: N,
			edgePaths: P,
			edgeLabels: F,
			nodes: I,
			rootGroups: L
		},
		diagramType: E,
		id: D,
		mergeSelfLoops: R,
		subGraphTitleTotalMargin: z
	};
}, "measureDagreGraph"), runDagreGraphLayout = /* @__PURE__ */ __name((e) => {
	log.info("############################################# XXX"), log.info("###                Layout                 ### XXX"), log.info("############################################# XXX"), layout(e);
}, "runDagreGraphLayout"), normalizeDagreNode = /* @__PURE__ */ __name((e, y, b) => {
	let x = e.node(y);
	if (!x) return;
	let S = { ...x };
	return x?.clusterNode ? S.y = (x.y ?? 0) + b : e.children(y).length > 0 ? S.height = (x.height ?? 0) + b : S.y = (x.y ?? 0) + b / 2, S;
}, "normalizeDagreNode"), applyDagreNodeLayout = /* @__PURE__ */ __name((e, y) => {
	DAGRE_NODE_LAYOUT_PROPERTIES.forEach((b) => {
		y[b] !== void 0 && (e[b] = y[b]);
	});
}, "applyDagreNodeLayout"), normalizeDagreEdge = /* @__PURE__ */ __name((e, y, b, x) => ({
	...e,
	start: e.start ?? y,
	end: e.end ?? b,
	points: (e.points ?? []).map((e) => ({
		...e,
		y: typeof e.y == "number" ? e.y + x : e.y
	}))
}), "normalizeDagreEdge"), applyDagreLayoutResult = /* @__PURE__ */ __name((e, y) => {
	let { graph: b, mergeSelfLoops: x, subGraphTitleTotalMargin: S = 0 } = y, C = new Map(e.nodes.map((e) => [e.id, e]));
	sortNodesByHierarchy(b).forEach((e) => {
		let y = normalizeDagreNode(b, e, S);
		if (!y) return;
		applyDagreNodeLayout(b.node(e), y);
		let x = C.get(e);
		x && applyDagreNodeLayout(x, y);
	});
	let w = S / 2;
	return e.edges = getEdgesToRender(b, w, { mergeSelfLoops: x }).map(({ edge: e, start: y, end: b }) => normalizeDagreEdge(e, y, b, w)), e;
}, "applyDagreLayoutResult"), paintDagreLayoutCore = /* @__PURE__ */ __name(async ({ elem: e, graph: b, groups: { clusters: x, edgePaths: S }, diagramType: w, id: T, mergeSelfLoops: O, subGraphTitleTotalMargin: k }) => {
	let j = 0;
	await Promise.all(sortNodesByHierarchy(b).map(async function(e) {
		let S = b.node(e);
		if (log.info("Position XBX => " + e + ": (" + S.x, "," + S.y, ") width: ", S.width, " height: ", S.height), S?.clusterNode) S.y += k, log.info("A tainted cluster node XBX1", e, S.id, S.width, S.height, S.x, S.y, b.parent(e)), clusterDb.get(S.id).node = S, positionNode(S);
		else if (b.children(e).length > 0) {
			log.info("A pure cluster node XBX1", e, S.id, S.x, S.y, S.width, S.height, b.parent(e)), S.height += k, b.node(S.parentId);
			let C = S?.padding / 2 || 0, w = S?.labelBBox?.height || 0, T = w - C || 0;
			log.debug("OffsetY", T, "labelHeight", w, "halfPadding", C), await insertCluster(x, S), clusterDb.get(S.id).node = S;
		} else {
			let e = b.node(S.parentId);
			S.y += k / 2, log.info("A regular node XBX1 - using the padding", S.id, "parent", S.parentId, S.width, S.height, S.x, S.y, "offsetY", S.offsetY, "parent", e, e?.offsetY, S), positionNode(S);
		}
	}));
	let M = k / 2;
	return getEdgesToRender(b, M, { mergeSelfLoops: O }).forEach(function({ edge: e, start: x, end: C }) {
		log.info("Edge " + x + " -> " + C + ": " + JSON.stringify(e), e), e.points.forEach((e) => e.y += M), positionEdgeLabel(e, insertEdge(S, e, clusterDb, w, b.node(x), b.node(C), T));
	}), b.nodes().forEach(function(e) {
		let x = b.node(e);
		log.info(e, x.type, x.diff), x.isGroup && (j = x.diff);
	}), log.warn("Returning from recursive render XAX", e, j), {
		elem: e,
		diff: j
	};
}, "paintDagreLayoutCore"), renderDagreSubgraph = /* @__PURE__ */ __name(async (e) => {
	let y = await measureDagreGraph(e);
	return runDagreGraphLayout(y.graph), await paintDagreLayoutCore(y);
}, "renderDagreSubgraph"), prepareLayoutForDagre = /* @__PURE__ */ __name((e) => {
	let b = new Graph({
		multigraph: !0,
		compound: !0
	}).setGraph({
		rankdir: e.direction,
		nodesep: e.config?.nodeSpacing || e.nodeSpacing || e.config?.flowchart?.nodeSpacing,
		ranksep: e.config?.rankSpacing || e.rankSpacing || e.config?.flowchart?.rankSpacing,
		marginx: 8,
		marginy: 8
	}).setDefaultEdgeLabel(function() {
		return {};
	});
	return e.nodes.forEach((e) => {
		b.setNode(e.id, { ...e }), e.parentId && b.setParent(e.id, e.parentId);
	}), log.debug("Edges:", e.edges), e.edges.forEach((e) => {
		if (e.start === e.end) {
			let y = e.start, x = y + "---" + y + "---1", S = y + "---" + y + "---2", C = b.node(y);
			b.setNode(x, {
				domId: x,
				id: x,
				parentId: C.parentId,
				labelStyle: "",
				label: "",
				padding: 0,
				shape: "labelRect",
				style: "",
				width: 10,
				height: 10
			}), b.setParent(x, C.parentId), b.setNode(S, {
				domId: S,
				id: S,
				parentId: C.parentId,
				labelStyle: "",
				padding: 0,
				shape: "labelRect",
				label: "",
				style: "",
				width: 10,
				height: 10
			}), b.setParent(S, C.parentId);
			let w = structuredClone(e), T = structuredClone(e), E = structuredClone(e), D = structuredClone(e);
			T.originalEdge = w, T.selfLoop = {
				id: w.id,
				order: 0
			}, E.originalEdge = w, E.selfLoop = {
				id: w.id,
				order: 1
			}, D.originalEdge = w, D.selfLoop = {
				id: w.id,
				order: 2
			}, T.label = "", T.arrowTypeEnd = "none", T.endLabelLeft = "", T.endLabelRight = "", T.startLabelLeft = "", T.id = y + "-cyclic-special-1", E.startLabelRight = "", E.startLabelLeft = "", E.endLabelLeft = "", E.endLabelRight = "", E.arrowTypeStart = "none", E.arrowTypeEnd = "none", E.id = y + "-cyclic-special-mid", D.label = "", D.startLabelRight = "", D.startLabelLeft = "", D.arrowTypeStart = "none", C.isGroup && (T.fromCluster = y, D.toCluster = y), D.id = y + "-cyclic-special-2", D.arrowTypeStart = "none", b.setEdge(y, x, T, y + "-cyclic-special-0"), b.setEdge(x, S, E, y + "-cyclic-special-1"), b.setEdge(S, y, D, y + "-cyclic-special-2");
		} else b.setEdge(e.start, e.end, { ...e }, e.id);
	}), adjustClustersAndEdges(b), { graph: b };
}, "prepareLayoutForDagre"), measureDagreLayout = /* @__PURE__ */ __name(async (e, { element: y, preparedLayout: x }) => {
	let S = x ?? prepareLayoutForDagre(e), C = getConfig2(), w = await measureDagreGraph({
		element: y,
		graph: S.graph,
		diagramType: e.type,
		id: e.diagramId,
		parentCluster: void 0,
		siteConfig: C
	});
	return S.measuredLayout = w, w;
}, "measureDagreLayout"), runDagreLayoutCore = /* @__PURE__ */ __name((e, y) => {
	let b = y.preparedLayout?.measuredLayout;
	if (!b) throw Error("runDagreLayoutCore requires measureDagreLayout to run first");
	return runDagreGraphLayout(b.graph), applyDagreLayoutResult(e, b), b;
}, "runDagreLayoutCore"), render = createCommonLayoutRenderer({
	prepareLayout: prepareLayoutForDagre,
	measureLayout: measureDagreLayout,
	runLayoutCore: runDagreLayoutCore,
	paintOptions: {
		clusterDb,
		getNodes: /* @__PURE__ */ __name((e, { measure: y }) => sortNodesByHierarchy(y.graph).map((e) => y.graph.node(e)).filter(Boolean), "getDagrePaintNodes"),
		getEdgeNode: /* @__PURE__ */ __name((e, y, { measure: b }) => e ? b.graph.node(e) : void 0, "getDagreEdgeNode"),
		skipNode: /* @__PURE__ */ __name((e, { measure: y }) => !y.graph.hasNode(e.id), "skipNode"),
		isCluster: /* @__PURE__ */ __name((e, { measure: y }) => y.graph.hasNode(e.id) && (y.graph.children(e.id) ?? []).length > 0, "isCluster")
	}
});
export { applyDagreLayoutResult, getEdgesToRender, measureDagreLayout, prepareLayoutForDagre, render, runDagreLayoutCore };
