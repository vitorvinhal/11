const UI_ZOOM_STEP = .5, UI_ZOOM_MIN = -3, UI_ZOOM_MAX = 5;
function stepUIZoomLevel(n, r) {
	if (r === "reset") return 0;
	let i = r === "in" ? n + UI_ZOOM_STEP : n - UI_ZOOM_STEP;
	return Math.max(-3, Math.min(5, i));
}
function uiZoomFactorFromLevel(e) {
	return 1.2 ** e;
}
export { uiZoomFactorFromLevel as a, stepUIZoomLevel as i, UI_ZOOM_MIN as n, UI_ZOOM_STEP as r, UI_ZOOM_MAX as t };
