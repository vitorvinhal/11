import { r as activateAndRevealWorktree } from "./worktree-activation-u-wSAPlP.js";
import { ix as resolveTuiAgentLaunchEnv, rS as isTuiAgentEnabled, rx as resolveTuiAgentLaunchArgs } from "./store-C9f8FDJV.js";
import { s as tuiAgentToAgentKind } from "./telemetry-DdvWHaqb.js";
import { d as buildAgentStartupPlan } from "./agent-paste-draft-Ddp-k6QZ.js";
import { r as planAgentSessionLaunch, t as beginStructuredAgentSessionProvisionalLaunch } from "./structured-agent-session-provisional-tab-PRgRPsbX.js";
import { t as resolveInitialNativeChatSessionOptions } from "./native-chat-launch-session-options-CUf2xfmH.js";
function getClientPlatform() {
	return navigator.userAgent.includes("Windows") ? "win32" : navigator.userAgent.includes("Mac") ? "darwin" : "linux";
}
function buildOnboardingFolderAgentStartup(e, f = !0) {
	let p = e?.defaultTuiAgent;
	if (!e || !p || p === "blank" || !isTuiAgentEnabled(p, e.disabledTuiAgents)) return;
	let m = buildAgentStartupPlan({
		agent: p,
		prompt: "",
		cmdOverrides: e.agentCmdOverrides ?? {},
		agentArgs: resolveTuiAgentLaunchArgs(p, e.agentDefaultArgs),
		agentEnv: resolveTuiAgentLaunchEnv(p, e.agentDefaultEnv),
		sessionOptions: resolveInitialNativeChatSessionOptions(e, {
			agent: p,
			nativeChatTranscriptIsLocalReadable: f
		}),
		platform: getClientPlatform(),
		allowEmptyPromptLaunch: !0
	});
	if (m) return {
		command: m.launchCommand,
		...m.env ? { env: m.env } : {},
		launchConfig: m.launchConfig,
		launchAgent: p,
		...m.sessionOptions ? { sessionOptions: m.sessionOptions } : {},
		...m.startupCommandDelivery ? { startupCommandDelivery: m.startupCommandDelivery } : {},
		telemetry: {
			agent_kind: tuiAgentToAgentKind(p),
			launch_source: "onboarding",
			request_kind: "new"
		}
	};
}
function shouldSeedFolderAgentAfterDismissedOnboarding(e, l) {
	return e?.outcome === "dismissed" && !l && !e.checklist.addedRepo && !e.checklist.addedFolder;
}
function buildDismissedOnboardingFolderAgentStartup(e, l, u, d = !0) {
	if (shouldSeedFolderAgentAfterDismissedOnboarding(l, u)) return buildOnboardingFolderAgentStartup(e, d);
}
function resolveDismissedOnboardingFolderAgentLaunch(e) {
	let l = buildDismissedOnboardingFolderAgentStartup(e.store.settings ?? null, e.onboarding, e.hasExistingProject, e.nativeChatTranscriptIsLocalReadable), u = l?.launchAgent ?? null;
	if (!l || !u) return {
		agent: null,
		plan: null
	};
	let d = planAgentSessionLaunch(e.store, {
		agent: u,
		workspace: {
			kind: "folder",
			executionHostId: e.executionHostId
		},
		initialSessionOptions: l.sessionOptions
	});
	return {
		agent: u,
		plan: d,
		...d.route === "structured-native-chat" ? {} : { startup: l }
	};
}
async function revealOnboardingFolderWithAgentLaunch(l) {
	let u = (u, d = !1) => activateAndRevealWorktree(l.worktreeId, {
		sidebarRevealBehavior: "auto",
		...l.executionHostId ? { executionHostId: l.executionHostId } : {},
		...u ? { startup: u } : {},
		...d ? { providesInitialSurface: !0 } : {}
	}), { plan: d } = l.launch;
	if (d?.route !== "structured-native-chat") {
		u(l.launch.startup);
		return;
	}
	beginStructuredAgentSessionProvisionalLaunch({
		plan: d,
		hooks: {},
		target: { worktreeId: l.worktreeId },
		beforeOpen: () => u(void 0, !0) !== !1
	});
}
export { revealOnboardingFolderWithAgentLaunch as n, resolveDismissedOnboardingFolderAgentLaunch as t };
