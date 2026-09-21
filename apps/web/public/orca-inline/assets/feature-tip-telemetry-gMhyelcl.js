import { a as track } from "./telemetry-DdvWHaqb.js";
function getOrcaCliFeatureTipTelemetrySource(e) {
	return e === "app_open" ? "app_open" : "manual";
}
function trackOrcaCliFeatureTipShown(a) {
	track("orca_cli_feature_tip_shown", { source: a });
}
function trackOrcaCliFeatureTipSetupClicked(a) {
	track("orca_cli_feature_tip_setup_clicked", { source: a });
}
function trackOrcaCliFeatureTipSetupResult(a, o) {
	track("orca_cli_feature_tip_setup_result", {
		source: a,
		result: o
	});
}
function trackCmdJPaletteFeatureTipShown(a) {
	track("cmd_j_palette_feature_tip_shown", { source: a });
}
function trackCmdJPaletteFeatureTipAcknowledged(a) {
	track("cmd_j_palette_feature_tip_acknowledged", { source: a });
}
export { trackOrcaCliFeatureTipSetupResult as a, trackOrcaCliFeatureTipSetupClicked as i, trackCmdJPaletteFeatureTipAcknowledged as n, trackOrcaCliFeatureTipShown as o, trackCmdJPaletteFeatureTipShown as r, getOrcaCliFeatureTipTelemetrySource as t };
