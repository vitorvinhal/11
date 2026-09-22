import { i as translate } from "./i18n-CakWKPtl.js";
import { sx as resolveWindowsShellStartupFamily } from "./store-C9f8FDJV.js";
function getProjectSkillDiscoveryTarget(e) {
	return e ? { projectRuntime: e } : void 0;
}
function getProjectAgentSkillRuntime(e, i) {
	if (e) return e.status === "repair-required" ? getWslAgentSkillRuntime(e.repair.preferredRuntime.distro) : e.runtime.kind === "wsl" ? getWslAgentSkillRuntime(e.runtime.distro) : {
		runtime: "host",
		label: i === "win32" ? "Windows" : "This device"
	};
}
function getProjectAgentSkillTerminalShellOverride(e, a, o) {
	if (e === "win32") return o?.runtime === "wsl" || resolveWindowsShellStartupFamily(a?.terminalWindowsShell) === "posix" ? "powershell.exe" : void 0;
}
function getProjectSkillInstallDisabledReason(i) {
	if (i?.status !== "repair-required") return null;
	switch (i.repair.reason) {
		case "wsl-unavailable": return translate("auto.lib.projectSkillRuntime.wslUnavailable", "Project runtime needs WSL before this skill can be installed.");
		case "wsl-distro-required": return translate("auto.lib.projectSkillRuntime.distroRequired", "Select a WSL distro for this project before installing this skill.");
		case "wsl-distro-missing": return translate("auto.lib.projectSkillRuntime.distroMissing", "The selected WSL distro is unavailable. Choose an available distro or switch this project to Windows.");
	}
}
function getWslAgentSkillRuntime(i) {
	return {
		runtime: "wsl",
		wslDistro: i,
		label: i ? `WSL ${i}` : translate("auto.lib.projectSkillRuntime.wslDefault", "WSL default")
	};
}
export { getProjectSkillInstallDisabledReason as i, getProjectAgentSkillTerminalShellOverride as n, getProjectSkillDiscoveryTarget as r, getProjectAgentSkillRuntime as t };
