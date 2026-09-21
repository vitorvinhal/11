import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log } from "./src-DXrlgw8l.js";
import { b as getConfig, x as getConfig2 } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import { _ as utils_default } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { a as labelHelper } from "./chunk-4HAMMTFA-C6ufBZSb.js";
import { i as positionNode, n as getSubGraphTitleMargins, r as insertNode, t as clear$2 } from "./chunk-GVQU2GXP-Be8dkEne.js";
import { a as insertEdgeLabel, i as insertEdge, l as terminalLabels, n as edgeLabels, r as hasEdgeLabel, s as markers_default, t as clear$1 } from "./chunk-OSK3NFVY-C6YyZAmC.js";
import { t as Graph } from "./graphlib-CFSw-S2d.js";
import { n as insertCluster, t as clear } from "./chunk-L3NEJ4N5-B-D1dHln.js";
function createLayoutElementGroups(d, { edgePathsClass: z = "edges edgePaths" } = {}) {
	let B = d.insert("g").attr("class", "root");
	return {
		clusters: B.insert("g").attr("class", "clusters"),
		edgePaths: B.insert("g").attr("class", z),
		edgeLabels: B.insert("g").attr("class", "edgeLabels"),
		nodes: B.insert("g").attr("class", "nodes"),
		rootGroups: B
	};
}
__name(createLayoutElementGroups, "createLayoutElementGroups");
async function measureGroupLabel(d, z) {
	if (z.label) {
		let { shapeSvg: B, bbox: V } = await labelHelper(d, z);
		z.labelBBox = {
			width: V.width,
			height: V.height
		}, B.remove();
	} else z.labelBBox = {
		width: 0,
		height: 0
	};
}
__name(measureGroupLabel, "measureGroupLabel");
async function insertMeasuredNode(d, z, B) {
	let V = await insertNode(d, z, B), H = V.node()?.getBBox() ?? {
		width: 0,
		height: 0
	};
	return z.width = H.width, z.height = H.height, V;
}
__name(insertMeasuredNode, "insertMeasuredNode");
async function createGraphWithElements(d, z) {
	let B = new Graph({
		multigraph: !0,
		compound: !0
	}), H = [...z.edges], U = getConfig2(), W = createLayoutElementGroups(d), { edgeLabels: G, nodes: K } = W, q = /* @__PURE__ */ new Map(), Y = d.node() != null;
	await Promise.all(z.nodes.map(async (d) => {
		if (d.isGroup) Y && await measureGroupLabel(K, d), B.setNode(d.id, { ...d });
		else {
			if (Y) {
				let z = await insertMeasuredNode(K, d, {
					config: U,
					dir: d.dir
				});
				q.set(d.id, z);
			}
			B.setNode(d.id, { ...d });
		}
	}));
	for (let d of H) Y && hasEdgeLabel(d) && await insertEdgeLabel(G, d), B.setEdge(d.start, d.end, { ...d }, d.id), z.edges.some((z) => z.id === d.id) || z.edges.push(d);
	if (globalThis.mermaidCaptureSizes) {
		let { captureNodeSizes: B } = await import("./sizeCapture-INFHLROL-Be0C1Zs_.js");
		B(d, z);
	}
	return {
		graph: B,
		groups: W,
		nodeElements: q
	};
}
__name(createGraphWithElements, "createGraphWithElements");
var clusterDb = /* @__PURE__ */ new Map(), descendants = /* @__PURE__ */ new Map(), parents = /* @__PURE__ */ new Map(), clear4 = /* @__PURE__ */ __name(() => {
	descendants.clear(), parents.clear(), clusterDb.clear();
}, "clear"), isDescendant = /* @__PURE__ */ __name((d, B) => {
	let V = descendants.get(B) || [];
	return log.trace("In isDescendant", B, " ", d, " = ", V.includes(d)), V.includes(d);
}, "isDescendant"), edgeInCluster = /* @__PURE__ */ __name((d, B) => {
	let V = descendants.get(B) || [];
	return log.info("Descendants of ", B, " is ", V), log.info("Edge is ", d), d.v === B || d.w === B ? !1 : V ? V.includes(d.v) || isDescendant(d.v, B) || isDescendant(d.w, B) || V.includes(d.w) : (log.debug("Tilt, ", B, ",not in descendants"), !1);
}, "edgeInCluster"), copy = /* @__PURE__ */ __name((d, B, V, H) => {
	log.debug("Copying children of ", d, "root", H, "data", B.node(d), H);
	let U = B.children(d) || [];
	d !== H && U.push(d), log.debug("Copying (nodes) clusterId", d, "nodes", U), U.forEach((U) => {
		if (B.children(U).length > 0) copy(U, B, V, H);
		else {
			let W = B.node(U);
			log.info("cp ", U, " to ", H, " with parent ", d), V.setNode(U, W), H !== B.parent(U) && (log.debug("Setting parent", U, B.parent(U)), V.setParent(U, B.parent(U))), d !== H && U !== d ? (log.debug("Setting parent", U, d), V.setParent(U, d)) : (log.info("In copy ", d, "root", H, "data", B.node(d), H), log.debug("Not Setting parent for node=", U, "cluster!==rootId", d !== H, "node!==clusterId", U !== d));
			let G = B.edges(U);
			log.debug("Copying Edges", G), G.forEach((U) => {
				log.info("Edge", U);
				let W = B.edge(U.v, U.w, U.name);
				log.info("Edge data", W, H);
				try {
					edgeInCluster(U, H) ? (log.info("Copying as ", U.v, U.w, W, U.name), V.setEdge(U.v, U.w, W, U.name), log.info("newGraph edges ", V.edges(), V.edge(V.edges()[0]))) : log.info("Skipping copy of edge ", U.v, "-->", U.w, " rootId: ", H, " clusterId:", d);
				} catch (d) {
					log.error(d);
				}
			});
		}
		log.debug("Removing node", U), B.removeNode(U);
	});
}, "copy"), extractDescendants = /* @__PURE__ */ __name((d, z) => {
	let B = z.children(d), V = [...B];
	for (let H of B) parents.set(H, d), V = [...V, ...extractDescendants(H, z)];
	return V;
}, "extractDescendants"), findCommonEdges = /* @__PURE__ */ __name((d, z, B) => {
	let V = d.edges().filter((d) => d.v === z || d.w === z), H = d.edges().filter((d) => d.v === B || d.w === B), U = V.map((d) => ({
		v: d.v === z ? B : d.v,
		w: d.w === z ? z : d.w
	})), W = H.map((d) => ({
		v: d.v,
		w: d.w
	}));
	return U.filter((d) => W.some((z) => d.v === z.v && d.w === z.w));
}, "findCommonEdges"), findNonClusterChild = /* @__PURE__ */ __name((d, B, V) => {
	let H = B.children(d);
	if (log.trace("Searching children of id ", d, H), H.length < 1) return d;
	let U;
	for (let d of H) {
		let z = findNonClusterChild(d, B, V), H = findCommonEdges(B, V, z);
		if (z) if (H.length > 0) U = z;
		else return z;
	}
	return U;
}, "findNonClusterChild"), getAnchorId = /* @__PURE__ */ __name((d) => !clusterDb.has(d) || !clusterDb.get(d).externalConnections ? d : clusterDb.has(d) ? clusterDb.get(d).id : d, "getAnchorId"), adjustClustersAndEdges = /* @__PURE__ */ __name((d, B) => {
	if (!d || B > 10) {
		log.debug("Opting out, no graph ");
		return;
	} else log.debug("Opting in, graph ");
	d.nodes().forEach(function(B) {
		d.children(B).length > 0 && (log.debug("Cluster identified", B, " Replacement id in edges: ", findNonClusterChild(B, d, B)), descendants.set(B, extractDescendants(B, d)), clusterDb.set(B, {
			id: findNonClusterChild(B, d, B),
			clusterData: d.node(B)
		}));
	}), d.nodes().forEach(function(B) {
		let V = d.children(B), H = d.edges();
		V.length > 0 ? (log.debug("Cluster identified", B, descendants), H.forEach((d) => {
			isDescendant(d.v, B) ^ isDescendant(d.w, B) && (log.debug("Edge: ", d, " leaves cluster ", B), log.debug("Descendants of XXX ", B, ": ", descendants.get(B)), clusterDb.get(B).externalConnections = !0);
		})) : log.debug("Not a cluster ", B, descendants);
	});
	for (let z of clusterDb.keys()) {
		let B = clusterDb.get(z).id, V = d.parent(B);
		V !== z && clusterDb.has(V) && !clusterDb.get(V).externalConnections && (clusterDb.get(z).id = V);
		let H = d.edges().some((d) => d.v === z);
		if (B && clusterDb.get(z)?.externalConnections && H && isNodeInExtractableCluster(d, B, z)) {
			let V = findSafeAnchorNode(d, z, d.parent(B));
			V && (clusterDb.get(z).id = V);
		}
	}
	d.edges().forEach(function(B) {
		let V = d.edge(B);
		log.debug("Edge " + B.v + " -> " + B.w + ": " + JSON.stringify(B)), log.debug("Edge " + B.v + " -> " + B.w + ": " + JSON.stringify(d.edge(B)));
		let H = B.v, U = B.w;
		if (log.debug("Fix XXX", clusterDb, "ids:", B.v, B.w, "Translating: ", clusterDb.get(B.v), " --- ", clusterDb.get(B.w)), clusterDb.get(B.v) || clusterDb.get(B.w)) {
			if (log.debug("Fixing and trying - removing XXX", B.v, B.w, B.name), H = getAnchorId(B.v), U = getAnchorId(B.w), d.removeEdge(B.v, B.w, B.name), H !== B.v) {
				let z = d.parent(H);
				clusterDb.get(z).externalConnections = !0, V.fromCluster = B.v;
			}
			if (U !== B.w) {
				let z = d.parent(U);
				clusterDb.get(z).externalConnections = !0, V.toCluster = B.w;
			}
			log.debug("Fix Replacing with XXX", H, U, B.name), d.setEdge(H, U, V, B.name);
		}
	}), extractor(d, 0), log.trace(clusterDb);
}, "adjustClustersAndEdges"), extractor = /* @__PURE__ */ __name((d, B) => {
	if (B > 10) {
		log.error("Bailing out");
		return;
	}
	let V = d.nodes(), H = !1;
	for (let z of V) {
		let B = d.children(z);
		H ||= B.length > 0;
	}
	if (!H) {
		log.debug("Done, no node has children", d.nodes());
		return;
	}
	log.debug("Nodes = ", V, B);
	for (let H of V) if (log.debug("Extracting node", H, clusterDb, clusterDb.has(H) && !clusterDb.get(H).externalConnections, !d.parent(H), d.node(H), d.children("D"), " Depth ", B), !clusterDb.has(H)) log.debug("Not a cluster", H, B);
	else if (!clusterDb.get(H).externalConnections && d.children(H) && d.children(H).length > 0) {
		log.debug("Cluster without external connections, without a parent and with children", H, B);
		let V = d.graph().rankdir === "TB" ? "LR" : "TB";
		clusterDb.get(H)?.clusterData?.dir && (V = clusterDb.get(H).clusterData.dir, log.debug("Fixing dir", clusterDb.get(H).clusterData.dir, V));
		let U = new Graph({
			multigraph: !0,
			compound: !0
		}).setGraph({
			rankdir: V,
			nodesep: 50,
			ranksep: 50,
			marginx: 8,
			marginy: 8
		}).setDefaultEdgeLabel(function() {
			return {};
		});
		copy(H, d, U, H), d.setNode(H, {
			clusterNode: !0,
			id: H,
			clusterData: clusterDb.get(H).clusterData,
			label: clusterDb.get(H).label,
			graph: U
		});
	} else log.debug("Cluster ** ", H, " **not meeting the criteria !externalConnections:", !clusterDb.get(H).externalConnections, " no parent: ", !d.parent(H), " children ", d.children(H) && d.children(H).length > 0, d.children("D"), B), log.debug(clusterDb);
	V = d.nodes(), log.debug("New list of nodes", V);
	for (let H of V) {
		let V = d.node(H);
		log.debug(" Now next level", H, V), V?.clusterNode && extractor(V.graph, B + 1);
	}
}, "extractor"), sorter = /* @__PURE__ */ __name((d, z) => {
	if (z.length === 0) return [];
	let B = Object.assign([], z);
	return z.forEach((z) => {
		let V = sorter(d, d.children(z));
		B = [...B, ...V];
	}), B;
}, "sorter"), sortNodesByHierarchy = /* @__PURE__ */ __name((d) => sorter(d, d.children()), "sortNodesByHierarchy"), isNodeInExtractableCluster = /* @__PURE__ */ __name((d, z, B) => {
	let V = d.parent(z);
	for (; V && V !== B;) {
		let z = clusterDb.get(V);
		if (z && !z.externalConnections) return !0;
		V = d.parent(V);
	}
	return !1;
}, "isNodeInExtractableCluster"), findSafeAnchorNode = /* @__PURE__ */ __name((d, z, B) => {
	let V = d.children(z) ?? [];
	for (let H of V) {
		if (H === B || isDescendant(H, B)) continue;
		let V = findNonClusterChild(H, d, z);
		if (V && !isNodeInExtractableCluster(d, V, z)) return V;
	}
	return null;
}, "findSafeAnchorNode");
function createCommonLayoutRenderer({ prepareLayout: z, measureLayout: B, runLayoutCore: V, paintLayout: H, afterPaint: U, paintOptions: W }) {
	let G = B ?? defaultMeasureLayout;
	return /* @__PURE__ */ __name(async function(d, B, K, q) {
		let J = B.select("g");
		(K?.insertMarkers ?? markers_default)(J, d.markers, d.type, d.diagramId), clearLayoutRenderState();
		let Y = {
			element: J,
			helpers: K,
			options: q
		};
		Y.preparedLayout = await z?.(d, Y);
		let X = await G(d, Y), Z = await V(d, Y), Q = {
			...Y,
			measure: X
		};
		H ? await H(d, Q, Z) : await paintLayoutData(d, Q, W), await U?.(d, Q, Z);
	}, "render");
}
__name(createCommonLayoutRenderer, "createCommonLayoutRenderer");
function clearLayoutRenderState() {
	clear$2(), clear$1(), clear(), clear4();
}
__name(clearLayoutRenderState, "clearLayoutRenderState");
async function defaultMeasureLayout(d, { element: z }) {
	return await createGraphWithElements(z, d);
}
__name(defaultMeasureLayout, "defaultMeasureLayout");
async function paintLayoutData(d, z, B = {}) {
	let { measure: V } = z, { groups: H } = V;
	for (let V of B.getNodes?.(d, z) ?? d.nodes) B.skipNode?.(V, z) || await paintLayoutNode(H, V, z, B);
	let U = buildNodeLookup(d.nodes);
	for (let V of d.edges) shouldSkipPaintEdge(V, B) || await paintLayoutEdge(H, V, U, d, B, z);
}
__name(paintLayoutData, "paintLayoutData");
async function paintLayoutNode(d, z, B, V) {
	z.clusterNode ? positionNode(z) : shouldPaintAsCluster(z, B, V) ? await insertCluster(d.clusters, z) : positionNode(z);
}
__name(paintLayoutNode, "paintLayoutNode");
function shouldPaintAsCluster(d, z, B) {
	return d.isGroup === !0 && (B.isCluster?.(d, z) ?? !0);
}
__name(shouldPaintAsCluster, "shouldPaintAsCluster");
function buildNodeLookup(d) {
	let z = /* @__PURE__ */ new Map();
	for (let B of d) B?.id && z.set(B.id, B);
	return z;
}
__name(buildNodeLookup, "buildNodeLookup");
function shouldSkipPaintEdge(d, z) {
	return d.isLayoutOnly || !!z.skipEdge?.(d);
}
__name(shouldSkipPaintEdge, "shouldSkipPaintEdge");
async function paintLayoutEdge(d, z, B, V, H, U) {
	let W = insertEdge(d.edgePaths, { ...z }, H.clusterDb ?? /* @__PURE__ */ new Map(), V.type, getRenderedNode(z.start, z, B, U, H), getRenderedNode(z.end, z, B, U, H), V.diagramId, shouldSkipIntersect(z, H));
	hasEdgeLabel(z) && (edgeLabels.has(z.id) || await insertEdgeLabel(d.edgeLabels, z), positionRenderedEdgeLabel(z, W));
}
__name(paintLayoutEdge, "paintLayoutEdge");
function getRenderedNode(d, z, B, V, H) {
	return H.getEdgeNode?.(d, z, V) ?? (d ? B.get(d) ?? {} : {});
}
__name(getRenderedNode, "getRenderedNode");
function shouldSkipIntersect(d, z) {
	return typeof z.skipIntersect == "function" ? z.skipIntersect(d) : z.skipIntersect ?? !1;
}
__name(shouldSkipIntersect, "shouldSkipIntersect");
function positionRenderedEdgeLabel(d, V) {
	let U = V?.updatedPath ?? V?.originalPath, { subGraphTitleTotalMargin: W } = getSubGraphTitleMargins({ flowchart: getConfig().flowchart ?? {} });
	if (d.label) {
		let B = edgeLabels.get(d.id), G = d.x, K = d.y;
		if (U) {
			let B = utils_default.calcLabelPosition(U);
			log.debug("Moving label " + d.label + " from (", G, ",", K, ") to (", B.x, ",", B.y, ") abc88"), V?.updatedPath && (G = B.x, K = B.y);
		}
		B.attr("transform", `translate(${G}, ${K + W / 2})`);
	}
	if (d?.startLabelLeft) {
		let z = terminalLabels.get(d.id).startLeft, B = d?.x, V = d?.y;
		if (U) {
			let z = utils_default.calcTerminalLabelPosition(d.arrowTypeStart ? 10 : 0, "start_left", U);
			B = z.x, V = z.y;
		}
		z.attr("transform", `translate(${B}, ${V})`);
	}
	if (d.startLabelRight) {
		let z = terminalLabels.get(d.id).startRight, B = d.x, V = d.y;
		if (U) {
			let z = utils_default.calcTerminalLabelPosition(d.arrowTypeStart ? 10 : 0, "start_right", U);
			B = z.x, V = z.y;
		}
		z.attr("transform", `translate(${B}, ${V})`);
	}
	if (d.endLabelLeft) {
		let z = terminalLabels.get(d.id).endLeft, B = d.x, V = d.y;
		if (U) {
			let z = utils_default.calcTerminalLabelPosition(d.arrowTypeEnd ? 10 : 0, "end_left", U);
			B = z.x, V = z.y;
		}
		z.attr("transform", `translate(${B}, ${V})`);
	}
	if (d.endLabelRight) {
		let z = terminalLabels.get(d.id).endRight, B = d.x, V = d.y;
		if (U) {
			let z = utils_default.calcTerminalLabelPosition(d.arrowTypeEnd ? 10 : 0, "end_right", U);
			B = z.x, V = z.y;
		}
		z.attr("transform", `translate(${B}, ${V})`);
	}
}
__name(positionRenderedEdgeLabel, "positionRenderedEdgeLabel");
export { createLayoutElementGroups as a, insertMeasuredNode as c, createCommonLayoutRenderer as i, paintLayoutData as l, clearLayoutRenderState as n, defaultMeasureLayout as o, clusterDb as r, findNonClusterChild as s, adjustClustersAndEdges as t, sortNodesByHierarchy as u };
