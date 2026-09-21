import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as requestContextualTourWhenReady } from "./request-contextual-tour-when-ready-De5k-KLS.js";
const CONTEXTUAL_TOUR_ENABLE_AUTO_WORKSPACE_NAME_EVENT = "orca:contextual-tour-enable-auto-workspace-name";
function openWorkspaceCreationComposerWithTourHandoff() {
	let n = useAppStore.getState(), r = n.repos.length > 0 && n.activeContextualTourId === "workspace-agent-sessions" && n.activeContextualTourStepIndex === 1;
	r && n.activeContextualTourSource && (n.detachContextualTourSource("workspace-agent-sessions", n.activeContextualTourSource), n.completeContextualTour("workspace-agent-sessions")), n.openModal("new-workspace-composer", {
		telemetrySource: "sidebar",
		...r ? { contextualTourSource: "workspace_creation_modal" } : {}
	}), r && (n.contextualToursSeenIds.includes("workspace-creation") || requestContextualTourWhenReady({
		id: "workspace-creation",
		source: "workspace_creation_modal",
		wasFeaturePreviouslyInteracted: !1,
		waitForActiveTourToClear: !0,
		shouldContinue: () => useAppStore.getState().activeModal === "new-workspace-composer"
	}));
}
export { CONTEXTUAL_TOUR_ENABLE_AUTO_WORKSPACE_NAME_EVENT as n, openWorkspaceCreationComposerWithTourHandoff as t };
