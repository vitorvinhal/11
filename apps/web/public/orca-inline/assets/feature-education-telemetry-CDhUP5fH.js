import { a as track } from "./telemetry-DdvWHaqb.js";
import { r as getFeatureWallSetupSectionId, s as isFeatureWallSetupStepId } from "./feature-wall-setup-steps-Dq4RFB4C.js";
const FEATURE_EDUCATION_SOURCES = [
	"workspace_board_visible",
	"workspace_agent_sessions_visible",
	"browser_visible",
	"client_hosted_browser_visible",
	"tasks_open",
	"automations_open",
	"floating_workspace_visible",
	"workspace_creation_visible",
	"workspace_creation_modal",
	"setup_guide_parallel_work",
	"unknown"
], SETUP_GUIDE_SOURCES = [
	"sidebar",
	"contextual_tour",
	"settings",
	"feature_wall",
	"help_menu",
	"unknown"
];
function normalizeFeatureEducationSource(e) {
	return FEATURE_EDUCATION_SOURCES.includes(e) ? e : "unknown";
}
function normalizeSetupGuideSource(e) {
	return SETUP_GUIDE_SOURCES.includes(e) ? e : "unknown";
}
var SETUP_GUIDE_TELEMETRY_COMPLETED_STEPS_STORAGE_KEY = "orca.setupGuideTelemetryCompletedSteps.v1", TERMINAL_PANE_SPLIT_TELEMETRY_STORAGE_KEY = "orca.terminalPaneSplitTelemetry.v1";
function trackContextualTourShown(e) {
	emitFeatureEducationTelemetry("contextual_tour_shown", {
		tour_id: e.tourId,
		source: normalizeFeatureEducationSource(e.source),
		was_feature_previously_interacted: e.wasFeaturePreviouslyInteracted
	});
}
function trackContextualTourOutcome(e) {
	emitFeatureEducationTelemetry("contextual_tour_outcome", {
		tour_id: e.tourId,
		source: normalizeFeatureEducationSource(e.source),
		outcome: e.outcome,
		steps_seen: clampTourStepCount(e.stepsSeen),
		total_steps: clampTourStepCount(e.totalSteps, 1),
		...e.furthestStepIndex !== void 0 && e.definedStepCount !== void 0 ? {
			furthest_step_index: clampTourStepCount(e.furthestStepIndex, 1),
			defined_step_count: clampTourStepCount(e.definedStepCount, 1)
		} : {}
	});
}
function trackSetupGuideOpened(e) {
	let x = normalizeSetupGuideSource(e.source);
	return emitFeatureEducationTelemetry("setup_guide_opened", {
		source: x,
		initial_completed_count: clampSetupGuideStepCount(e.initialCompletedCount),
		total_steps: 8,
		first_incomplete_step_id: e.firstIncompleteStepId
	}), x;
}
function trackSetupGuideClosed(e) {
	let x = clampSetupGuideStepCount(e.initialCompletedCount), S = Math.max(x, clampSetupGuideStepCount(e.finalCompletedCount));
	emitFeatureEducationTelemetry("setup_guide_closed", {
		source: e.source,
		outcome: e.outcome,
		initial_completed_count: x,
		final_completed_count: S,
		total_steps: 8,
		active_step_id: e.activeStepId
	});
}
function trackSetupGuideStepCompleted(e) {
	emitFeatureEducationTelemetry("setup_guide_step_completed", {
		step_id: e.stepId,
		section_id: getSetupGuideStepSection(e.stepId),
		completed_count: clampSetupGuideStepCount(e.completedCount, 1),
		total_steps: 8,
		setup_guide_visible: e.setupGuideVisible
	});
}
function trackTerminalPaneSplit(e) {
	reserveTerminalPaneSplitTelemetry(e.source, e.direction) && emitFeatureEducationTelemetry("terminal_pane_split", {
		source: e.source,
		direction: e.direction
	});
}
function readEmittedSetupGuideStepIds() {
	if (globalThis.localStorage === void 0) return /* @__PURE__ */ new Set();
	try {
		let e = JSON.parse(globalThis.localStorage.getItem(SETUP_GUIDE_TELEMETRY_COMPLETED_STEPS_STORAGE_KEY) ?? "[]");
		return Array.isArray(e) ? new Set(e.filter(isFeatureWallSetupStepId)) : /* @__PURE__ */ new Set();
	} catch {
		return /* @__PURE__ */ new Set();
	}
}
function persistEmittedSetupGuideStepId(e) {
	if (globalThis.localStorage !== void 0) try {
		let x = readEmittedSetupGuideStepIds();
		x.add(e), globalThis.localStorage.setItem(SETUP_GUIDE_TELEMETRY_COMPLETED_STEPS_STORAGE_KEY, JSON.stringify([...x]));
	} catch {}
}
function reserveTerminalPaneSplitTelemetry(e, x) {
	if (globalThis.localStorage === void 0) return !0;
	try {
		let S = readTerminalPaneSplitTelemetryKeys(), C = getTerminalPaneSplitTelemetryKey(e, x, /* @__PURE__ */ new Date());
		return S.has(C) ? !1 : (S.add(C), globalThis.localStorage.setItem(TERMINAL_PANE_SPLIT_TELEMETRY_STORAGE_KEY, JSON.stringify([...S].slice(-32))), !0);
	} catch {
		return !0;
	}
}
function getSetupGuideStepSection(e) {
	return getFeatureWallSetupSectionId(e);
}
function emitFeatureEducationTelemetry(x, S) {
	track(x, S);
}
function clampTourStepCount(e, x = 0) {
	return Number.isFinite(e) ? Math.min(8, Math.max(x, Math.round(e))) : x;
}
function clampSetupGuideStepCount(e, x = 0) {
	return Number.isFinite(e) ? Math.min(8, Math.max(x, Math.round(e))) : x;
}
function readTerminalPaneSplitTelemetryKeys() {
	let e = JSON.parse(globalThis.localStorage?.getItem(TERMINAL_PANE_SPLIT_TELEMETRY_STORAGE_KEY) ?? "[]");
	return Array.isArray(e) ? new Set(e.filter((e) => typeof e == "string")) : /* @__PURE__ */ new Set();
}
function getTerminalPaneSplitTelemetryKey(e, x, S) {
	return `${Number.isFinite(S.getTime()) ? S.toISOString().slice(0, 10) : (/* @__PURE__ */ new Date(0)).toISOString().slice(0, 10)}:${e}:${x}`;
}
export { trackSetupGuideClosed as a, trackTerminalPaneSplit as c, trackContextualTourShown as i, readEmittedSetupGuideStepIds as n, trackSetupGuideOpened as o, trackContextualTourOutcome as r, trackSetupGuideStepCompleted as s, persistEmittedSetupGuideStepId as t };
