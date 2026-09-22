var EDITOR_FONT_ZOOM_MIN = -6, EDITOR_FONT_ZOOM_MAX = 18, EDITOR_FONT_ZOOM_STEP = 1;
function clampEditorFontZoomLevel(c) {
	return Math.max(EDITOR_FONT_ZOOM_MIN, Math.min(EDITOR_FONT_ZOOM_MAX, c));
}
function nextEditorFontZoomLevel(e, s) {
	return s === "reset" ? 0 : clampEditorFontZoomLevel(s === "in" ? e + EDITOR_FONT_ZOOM_STEP : e - EDITOR_FONT_ZOOM_STEP);
}
function computeEditorFontSize(e, s) {
	return Math.max(8, Math.min(32, e + s));
}
function computeDiffEditorFontSize(e, s) {
	return computeEditorFontSize(e - .5, s);
}
function resolveEditorFontFamily(e) {
	return e?.editorFontFamily?.trim() || e?.terminalFontFamily || "monospace";
}
function resolveEditorFontFamilyOrInherit(e) {
	return e?.editorFontFamily?.trim() || e?.terminalFontFamily || void 0;
}
export { resolveEditorFontFamilyOrInherit as a, resolveEditorFontFamily as i, computeEditorFontSize as n, nextEditorFontZoomLevel as r, computeDiffEditorFontSize as t };
