const REACT_NESTED_UPDATE_LIMIT = 50, UNRELIABLE_BOUNDARY_ATTRIBUTION = "unreliable", CRASH_REPORT_ATTRIBUTION_DETAIL_KEY = "attribution", CRASH_REPORT_ATTRIBUTION_NOTE_DETAIL_KEY = "attribution_note";
var REACT_UPDATE_DEPTH_ERROR = /Minified React error #185(?!\d)|errors\/185(?!\d)|invariant=185(?!\d)|Maximum update depth exceeded/;
function messageOf(e) {
	return typeof e == "string" ? e : e instanceof Error || e && typeof e == "object" && typeof e.message == "string" ? e.message : "";
}
function getReactErrorBoundaryAttribution(e) {
	return REACT_UPDATE_DEPTH_ERROR.test(messageOf(e)) ? UNRELIABLE_BOUNDARY_ATTRIBUTION : void 0;
}
export { getReactErrorBoundaryAttribution as a, UNRELIABLE_BOUNDARY_ATTRIBUTION as i, CRASH_REPORT_ATTRIBUTION_NOTE_DETAIL_KEY as n, REACT_NESTED_UPDATE_LIMIT as r, CRASH_REPORT_ATTRIBUTION_DETAIL_KEY as t };
