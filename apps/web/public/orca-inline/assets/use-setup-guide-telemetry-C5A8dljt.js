import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as getFeatureWallSetupSteps, n as FEATURE_WALL_SETUP_STEP_IDS, o as getFirstIncompleteFeatureWallSetupStepId } from "./feature-wall-setup-steps-Dq4RFB4C.js";
import { a as trackSetupGuideClosed, n as readEmittedSetupGuideStepIds, o as trackSetupGuideOpened, s as trackSetupGuideStepCompleted, t as persistEmittedSetupGuideStepId } from "./feature-education-telemetry-CDhUP5fH.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function useSetupGuideOpenCloseTelemetry(e) {
	let u = (0, import_react.useMemo)(() => getFeatureWallSetupSteps(), []), f = (0, import_react.useRef)(null), m = (0, import_react.useRef)({
		completedCount: 0,
		totalSteps: FEATURE_WALL_SETUP_STEP_IDS.length,
		activeStepId: "none"
	}), h = countCompletedSetupSteps(e.progress.stepDone), g = getSetupGuideTelemetryFirstIncompleteStepId(e.progress);
	m.current = {
		completedCount: h,
		totalSteps: u.length,
		activeStepId: e.activeStepId ?? "none"
	};
	let _ = (0, import_react.useCallback)((e) => {
		let u = f.current;
		if (!u) return;
		f.current = null;
		let d = m.current;
		trackSetupGuideClosed({
			source: u.source,
			outcome: d.completedCount >= d.totalSteps ? "completed" : e,
			initialCompletedCount: u.initialCompletedCount,
			finalCompletedCount: d.completedCount,
			totalSteps: d.totalSteps,
			activeStepId: d.activeStepId
		});
	}, []);
	(0, import_react.useEffect)(() => {
		if (e.isOpen && !f.current) {
			f.current = {
				source: trackSetupGuideOpened({
					source: e.source,
					initialCompletedCount: h,
					totalSteps: u.length,
					firstIncompleteStepId: g
				}),
				initialCompletedCount: h
			};
			return;
		}
		!e.isOpen && f.current && _("dismissed");
	}, [
		e.isOpen,
		e.source,
		_,
		h,
		g,
		u.length
	]), (0, import_react.useEffect)(() => () => {
		_("interrupted");
	}, [_]);
}
function getSetupGuideTelemetryFirstIncompleteStepId(e) {
	return countCompletedSetupSteps(e.stepDone) >= FEATURE_WALL_SETUP_STEP_IDS.length ? "none" : getFirstIncompleteFeatureWallSetupStepId(e.stepDone);
}
function useSetupGuideStepCompletionTelemetry(e) {
	let u = (0, import_react.useRef)(null);
	u.current ||= createSetupGuideStepCompletionTelemetryState(), (0, import_react.useEffect)(() => {
		recordSetupGuideStepCompletionTelemetry({
			state: u.current,
			progress: e.progress,
			setupGuideVisible: e.setupGuideVisible
		});
	}, [
		e.progress,
		e.progress.stepDone,
		e.setupGuideVisible
	]);
}
function createSetupGuideStepCompletionTelemetryState() {
	return {
		previousDone: null,
		emitted: null
	};
}
function recordSetupGuideStepCompletionTelemetry(e) {
	e.state.emitted || (e.state.emitted = readEmittedSetupGuideStepIds());
	let u = e.state.previousDone;
	e.state.previousDone = { ...e.progress.stepDone };
	let d = e.state.emitted;
	if (!u || !e.setupGuideVisible) {
		persistCompletedSetupGuideStepBaselines(e.progress.stepDone, d);
		return;
	}
	let f = countCompletedSetupSteps(e.progress.stepDone);
	for (let p of FEATURE_WALL_SETUP_STEP_IDS) !e.progress.stepDone[p] || u[p] || d.has(p) || (d.add(p), persistEmittedSetupGuideStepId(p), trackSetupGuideStepCompleted({
		stepId: p,
		completedCount: f,
		totalSteps: FEATURE_WALL_SETUP_STEP_IDS.length,
		setupGuideVisible: e.setupGuideVisible
	}));
}
function countCompletedSetupSteps(e) {
	return FEATURE_WALL_SETUP_STEP_IDS.filter((u) => e[u]).length;
}
function persistCompletedSetupGuideStepBaselines(e, u) {
	for (let d of FEATURE_WALL_SETUP_STEP_IDS) !e[d] || u.has(d) || (u.add(d), persistEmittedSetupGuideStepId(d));
}
export { useSetupGuideStepCompletionTelemetry as n, useSetupGuideOpenCloseTelemetry as t };
