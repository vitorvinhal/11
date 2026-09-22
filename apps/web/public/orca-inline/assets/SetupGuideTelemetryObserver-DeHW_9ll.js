import "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import "./i18n-CakWKPtl.js";
import "./useMountedRef-De7bTfqf.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import "./jsx-runtime-CVy3GVGV.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import "./orchestration-setup-state-CE8DDbY6.js";
import "./project-skill-runtime-C8KnQgBO.js";
import "./useActiveProjectSkillRuntime-DY6GkVDd.js";
import "./useInstalledAgentSkills-elga6kkz.js";
import "./feature-wall-setup-steps-Dq4RFB4C.js";
import { t as useSetupGuideProgress } from "./use-setup-guide-progress-Ds_SMEWj.js";
import "./use-integration-connection-status-DN6DmTBk.js";
import "./feature-education-telemetry-CDhUP5fH.js";
import { n as useSetupGuideStepCompletionTelemetry } from "./use-setup-guide-telemetry-C5A8dljt.js";
function SetupGuideTelemetryObserver() {
	let r = useAppStore((e) => e.activeModal === "setup-guide");
	return useSetupGuideStepCompletionTelemetry({
		progress: useSetupGuideProgress(!0, !1, !1),
		setupGuideVisible: r
	}), null;
}
export { SetupGuideTelemetryObserver };
