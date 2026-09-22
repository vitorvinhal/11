import { i as translate } from "./i18n-CakWKPtl.js";
import { C as ORCA_LINEAR_SKILL_UPDATE_COMMAND, S as ORCA_LINEAR_SKILL_NAME, g as LINEAR_TICKETS_SKILL_UPDATE_COMMAND, h as LINEAR_TICKETS_SKILL_NAME } from "./orchestration-setup-state-CE8DDbY6.js";
import { n as getProjectAgentSkillTerminalShellOverride } from "./project-skill-runtime-C8KnQgBO.js";
import { n as hasInstalledAgentSkill, t as GLOBAL_AGENT_SKILL_SOURCE_KINDS } from "./useInstalledAgentSkills-elga6kkz.js";
function getLinearAgentSkillUpdateTarget(e, S) {
	let w = hasInstalledAgentSkill(e, ORCA_LINEAR_SKILL_NAME, { sourceKinds: GLOBAL_AGENT_SKILL_SOURCE_KINDS }), T = hasInstalledAgentSkill(e, LINEAR_TICKETS_SKILL_NAME, { sourceKinds: GLOBAL_AGENT_SKILL_SOURCE_KINDS });
	return !S || w || !T ? {
		skillName: ORCA_LINEAR_SKILL_NAME,
		command: ORCA_LINEAR_SKILL_UPDATE_COMMAND
	} : {
		skillName: LINEAR_TICKETS_SKILL_NAME,
		command: LINEAR_TICKETS_SKILL_UPDATE_COMMAND
	};
}
function getLinearAgentSkillUpdateCommand(e, v) {
	return getLinearAgentSkillUpdateTarget(e, v).command;
}
function getLinearAgentSkillSetupMissingLabel(v, y) {
	return !v && !y ? translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.missingCliAndSkill", "Orca CLI and Linear agent skill are missing.") : v ? translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.missingSkill", "Linear agent skill is missing.") : translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.missingCli", "Orca CLI is missing.");
}
function getLinearAgentSkillSetupToastTitle(v, y) {
	return !v && !y ? translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.toastMissingCliAndSkill", "Orca CLI and Linear skill are missing") : v ? translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.toastMissingSkill", "Linear skill is missing") : translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.toastMissingCli", "Orca CLI is missing");
}
function getLinearAgentSkillSetupToastDescription(v, y, b, x) {
	let S = getLinearAgentSkillSetupToastBaseDescription(v, y);
	return b ? translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.toastRemoteDescription", "{{value0}} Remote agent environments may need their own setup.", { value0: S }) : x.runtime === "wsl" ? translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.toastWslDescription", "{{value0}} This setup runs in the selected WSL agent runtime.", { value0: S }) : S;
}
function getLinearAgentSkillSetupToastBaseDescription(v, y) {
	return !v && !y ? translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.toastInstallCliAndSkillDescription", "Install the Orca CLI and the Linear skill to enable your agents to read and edit Linear tasks.") : v ? translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.toastInstallSkillDescription", "Install the Linear skill to enable your agents to read and edit Linear tasks through the Orca CLI.") : translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.toastInstallCliDescription", "Install the Orca CLI to enable your agents to read and edit Linear tasks.");
}
function getLinearAgentSkillSetupInlineRuntimeCopy(v, y) {
	return v ? translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.remoteCopy", "This installs host setup; remote agent environments may need separate setup.") : y.runtime === "wsl" ? translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.wslCopy", "Install it for WSL agent handoffs from linked Linear work.") : translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.hostCopy", "Install it for host agent handoffs from linked Linear work.");
}
var LOCAL_DISMISS_STORAGE_KEY_PREFIX = "orca.linearTicketsSkill.setupDismissed";
function getCurrentPlatform() {
	return navigator.userAgent.includes("Windows") ? "win32" : navigator.userAgent.includes("Linux") ? "linux" : "darwin";
}
function getLinearPromptAgentRuntime(v, y, b, x) {
	if (b) return {
		runtime: "host",
		label: y === "win32" ? "Windows" : "This device"
	};
	let S = getProjectAgentRuntime(x, y);
	if (S) return S;
	let C = v?.localAgentRuntime ?? "host";
	if (y === "win32" && C === "wsl") {
		let y = v?.localAgentWslDistro?.trim() || null;
		return {
			runtime: "wsl",
			wslDistro: y,
			label: y ? `WSL ${y}` : translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.wslLabel", "WSL default")
		};
	}
	return {
		runtime: "host",
		label: y === "win32" ? "Windows" : "This device"
	};
}
function getProjectAgentRuntime(e, v) {
	return e ? e.status === "repair-required" ? getWslAgentRuntime(e.repair.preferredRuntime.distro) : e.runtime.kind === "wsl" ? getWslAgentRuntime(e.runtime.distro) : {
		runtime: "host",
		label: v === "win32" ? "Windows" : "This device"
	} : null;
}
function getWslAgentRuntime(v) {
	return {
		runtime: "wsl",
		wslDistro: v,
		label: v ? `WSL ${v}` : translate("auto.components.sidebar.LinearAgentSkillSetupPrompt.wslLabel", "WSL default")
	};
}
function getLinearPromptTerminalShellOverride(e, v, y) {
	return getProjectAgentSkillTerminalShellOverride(e, v, y);
}
function getLinearPromptSetupCheckIdentity(e) {
	return JSON.stringify({
		remote: e.remote,
		runtime: e.runtime.runtime,
		wslDistro: e.runtime.wslDistro ?? null,
		projectRuntime: getProjectRuntimeIdentity(e.projectRuntime),
		activeRuntimeEnvironmentId: e.activeRuntimeEnvironmentId ?? null
	});
}
function getLinearPromptSkillDiscoveryTarget(e, v) {
	return v ? { projectRuntime: v } : e.runtime === "wsl" ? {
		runtime: "wsl",
		wslDistro: e.wslDistro
	} : void 0;
}
function getLocalDismissStorageKey(e) {
	return e.runtime === "wsl" ? `${LOCAL_DISMISS_STORAGE_KEY_PREFIX}.wsl.${e.wslDistro?.trim() || "default"}` : `${LOCAL_DISMISS_STORAGE_KEY_PREFIX}.host`;
}
function readLocalDismissed(e) {
	return typeof window > "u" ? !1 : localStorage.getItem(e) === "1";
}
function getProjectRuntimeIdentity(e) {
	return e ? e.status === "resolved" ? e.runtime.cacheKey : e.repair.cacheKey : null;
}
export { getLinearPromptTerminalShellOverride as a, getLinearAgentSkillSetupInlineRuntimeCopy as c, getLinearAgentSkillSetupToastTitle as d, getLinearAgentSkillUpdateCommand as f, getLinearPromptSkillDiscoveryTarget as i, getLinearAgentSkillSetupMissingLabel as l, getLinearPromptAgentRuntime as n, getLocalDismissStorageKey as o, getLinearAgentSkillUpdateTarget as p, getLinearPromptSetupCheckIdentity as r, readLocalDismissed as s, getCurrentPlatform as t, getLinearAgentSkillSetupToastDescription as u };
