import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
var DDLT_SIZE_CAPTURE_VERSION = 1;
function getCaptureGlobal() {
	if (!(typeof globalThis > "u")) return globalThis;
}
__name(getCaptureGlobal, "getCaptureGlobal");
function shouldCaptureSizes() {
	return !!getCaptureGlobal()?.mermaidCaptureSizes;
}
__name(shouldCaptureSizes, "shouldCaptureSizes");
function capturedFromLocation() {
	return typeof location > "u" ? "browser-dev" : `${location.pathname}${location.search}`;
}
__name(capturedFromLocation, "capturedFromLocation");
function emitCapturedSizes(e, t) {
	let r = getCaptureGlobal();
	if (!r) return;
	let i = t.node(), a = ((i && "ownerSVGElement" in i ? i.ownerSVGElement : null) ?? i)?.id ?? "(unknown)";
	r.mermaidCapturedSizes ??= [];
	let o = {
		svgId: a,
		sizes: e
	};
	r.mermaidCapturedSizes.push(o), r.mermaidLastCapturedSizes = o;
}
__name(emitCapturedSizes, "emitCapturedSizes");
function captureNodeSizes(e, n) {
	let r = [];
	for (let e of n.nodes) e.isGroup || r.push({
		id: e.id,
		width: e.width ?? 0,
		height: e.height ?? 0
	});
	r.length !== 0 && emitCapturedSizes({
		metadata: {
			captureVersion: DDLT_SIZE_CAPTURE_VERSION,
			capturedAt: (/* @__PURE__ */ new Date()).toISOString(),
			capturedFrom: capturedFromLocation()
		},
		nodes: r
	}, e);
}
__name(captureNodeSizes, "captureNodeSizes");
export { captureNodeSizes };
