import { i as translate } from "./i18n-CakWKPtl.js";
import { Cg as normalizeGlobalWindowsRuntimeDefault, Fl as isWslShellName, Sg as deriveGlobalWindowsRuntimeDefaultFromLegacySettings, sx as resolveWindowsShellStartupFamily, t as useAppStore } from "./store-C9f8FDJV.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { D as buildAgentFeatureSkillInstallCommand } from "./orchestration-setup-state-CE8DDbY6.js";
import { n as getProjectAgentSkillTerminalShellOverride } from "./project-skill-runtime-C8KnQgBO.js";
const AGENT_SKILL_CLI_PREREQUISITE_NOTICE = "Before opening setup, Orca may show a system prompt to register the Orca CLI command on PATH.";
function isOrcaCliAvailableOnPath(u) {
	return u?.state === "installed" && u.pathConfigured === !0;
}
async function ensureOrcaCliAvailableForAgentSkillTerminal({ onStatusChange: A, registrationPromptDelayMs: j = 700 } = {}) {
	try {
		let u = await window.api.cli.getInstallStatus();
		if (A?.(u), !u.supported || u.pathConfigured === null) return showCliPrerequisiteWarning(u), u;
		if (u.state !== "installed" || u.pathConfigured === !1) {
			await showOrcaCliRegistrationPromptToast(j);
			let u = await window.api.cli.install();
			return A?.(u), showCliPrerequisiteWarning(u), u;
		}
		return u;
	} catch (A) {
		return toast.error(A instanceof Error ? A.message : translate("auto.lib.agent.skill.cli.prerequisite.8d6eedf97e", "Failed to register the Orca CLI in PATH.")), null;
	}
}
async function showOrcaCliRegistrationPromptToast(u = 700) {
	toast.message("Orca needs to register its CLI on PATH.", { description: "Approve the system prompt so skill setup can use the Orca CLI command." }), await delay(u);
}
function delay(u) {
	return u <= 0 ? Promise.resolve() : new Promise((A) => window.setTimeout(A, u));
}
function showCliPrerequisiteWarning(A) {
	if (!A.supported) {
		toast.warning(translate("auto.lib.agent.skill.cli.prerequisite.2db0bd7515", "Orca CLI registration is unavailable"), { description: A.detail ?? translate("auto.lib.agent.skill.cli.prerequisite.15cbedc3e3", "Install the Orca CLI before running agent skill setup.") });
		return;
	}
	if (A.state !== "installed") {
		toast.warning(translate("auto.lib.agent.skill.cli.prerequisite.e99d7dc36f", "Orca CLI registration needs attention"), { description: A.detail ?? translate("auto.lib.agent.skill.cli.prerequisite.15cbedc3e3", "Install the Orca CLI before running agent skill setup.") });
		return;
	}
	if (A.pathConfigured === null) {
		toast.warning(translate("auto.lib.agent.skill.cli.prerequisite.windowsPathUnknown", "Orca could not check your Windows user PATH"), { description: A.detail ?? translate("auto.lib.agent.skill.cli.prerequisite.refreshCliRegistration", "Refresh CLI registration status and try again.") });
		return;
	}
	A.pathConfigured === !1 && toast.warning(translate("auto.lib.agent.skill.cli.prerequisite.79371593b0", "Orca CLI is not visible on PATH yet"), { description: A.detail ?? translate("auto.lib.agent.skill.cli.prerequisite.0f116999f1", "Restart your shell or add the Orca CLI directory to PATH before setup.") });
}
function quotePowerShellLiteral(u) {
	return `'${u.replace(/'/g, "''")}'`;
}
function quotePowerShellNativeArgument(u) {
	return quotePowerShellLiteral(u.replace(/(\\*)"/g, "$1$1\\\""));
}
function quotePosixShell(u) {
	return `'${u.replace(/'/g, "'\\''")}'`;
}
function buildWslLoginShellCommand(u) {
	let A = quotePosixShell(u);
	return [
		"_orca_wsl_shell=$(getent passwd \"$(id -un)\" 2>/dev/null | cut -d: -f7)",
		"if [ -z \"$_orca_wsl_shell\" ] || [ ! -x \"$_orca_wsl_shell\" ]; then",
		"  _orca_wsl_shell=\"${SHELL:-/bin/bash}\"",
		"fi",
		"if [ -z \"$_orca_wsl_shell\" ] || [ ! -x \"$_orca_wsl_shell\" ]; then",
		"  _orca_wsl_shell=/bin/sh",
		"fi",
		"_orca_wsl_shell_name=$(basename \"$_orca_wsl_shell\" | tr \"[:upper:]\" \"[:lower:]\")",
		"case \"$_orca_wsl_shell_name\" in",
		`  sh|dash) exec "$_orca_wsl_shell" -lc ${A} ;;`,
		`  bash|zsh|ksh|mksh|ash) exec "$_orca_wsl_shell" -ilc ${A} ;;`,
		`  *) exec /bin/sh -lc ${A} ;;`,
		"esac"
	].join("\n");
}
var LOCAL_HOST_AGENT_RUNTIME = {
	runtime: "host",
	label: ""
};
function getHostRuntimeLabel() {
	return navigator.userAgent.includes("Windows") ? "Windows" : "This device";
}
function getSelectedAgentRuntime(j, N, P, F) {
	let I = normalizeGlobalWindowsRuntimeDefault(j.localWindowsRuntimeDefault ?? deriveGlobalWindowsRuntimeDefaultFromLegacySettings(j, { wslAvailable: F ? void 0 : P }).defaultRuntime);
	if (N && I.kind === "wsl") {
		let A = I.distro?.trim() || null;
		return {
			runtime: "wsl",
			wslDistro: A,
			label: A ? `WSL ${A}` : translate("auto.components.settings.CliSkillRuntimeSetup.c47127f222", "WSL default")
		};
	}
	return {
		runtime: "host",
		label: getHostRuntimeLabel()
	};
}
function encodeWslLoginShellScript(u) {
	let A = new TextEncoder().encode(buildWslLoginShellCommand(u)), j = "";
	for (let u of A) j += String.fromCharCode(u);
	return btoa(j);
}
function getWslCliDistroRequest(u) {
	return u?.runtime === "wsl" && u.wslDistro?.trim() ? { distro: u.wslDistro.trim() } : void 0;
}
function buildSkillCommandForRuntime(u, A, j = getSkillCommandPlatform()) {
	let M = A ?? LOCAL_HOST_AGENT_RUNTIME, N = normalizeWindowsSkillUpdateCommand(u, M, j);
	return M.runtime === "wsl" ? N : wrapWindowsSkillCommandWithNpxPrerequisite(N, j, "copied-command");
}
function normalizeWindowsSkillUpdateCommand(u, A, j) {
	if (A.runtime === "wsl" || j !== "win32") return u;
	let M = u.trim(), N = /^npx\s+skills\s+update\s+([A-Za-z0-9_-]+)\s+--global$/i.exec(M);
	return N ? buildAgentFeatureSkillInstallCommand([N[1]]) : u;
}
function buildSkillSetupTerminalCommand(u, A, M, N = getSkillCommandPlatform()) {
	return (isWslShellName(A) ? decodeWslSetupTerminalCommand(u) : null) || (isSetupTerminalForcedToPowerShell(A) ? M?.runtime === "wsl" && N === "win32" ? buildPowerShellWslSkillCommand(u, M) : wrapWindowsSkillCommandWithNpxPrerequisite(u, N, "orca-setup-terminal") : u);
}
function buildPowerShellWslSkillCommand(u, A) {
	let j = A.wslDistro?.trim() ? ` -d ${quotePowerShellLiteral(A.wslDistro.trim())}` : "", M = encodeWslLoginShellScript(u), N = u.replace(/[\r\n]+/g, " ");
	return `& { $PSNativeCommandArgumentPassing = 'Legacy'; ${`wsl.exe${j} --exec sh -c ${quotePowerShellNativeArgument(`sh -c "$(printf %s ${M} | base64 -d)"`)}`} } # Runs: ${N}`;
}
function decodeWslSetupTerminalCommand(u) {
	if (!u.startsWith("& { $PSNativeCommandArgumentPassing = 'Legacy'; wsl.exe") || !u.includes(" } # Runs: ")) return null;
	let A = /(?:--|--exec) sh -c '(?:eval \\"`|sh -c \\"\$\()?printf %s ([A-Za-z0-9+/=]+) \| base64 -d/.exec(u)?.[1];
	if (!A) return null;
	try {
		let u = atob(A), j = Uint8Array.from(u, (u) => u.charCodeAt(0));
		return new TextDecoder().decode(j);
	} catch {
		return null;
	}
}
function isSetupTerminalForcedToPowerShell(u) {
	let A = u?.trim();
	return !!A && resolveWindowsShellStartupFamily(A) === "powershell";
}
function wrapWindowsSkillCommandWithNpxPrerequisite(u, A, j) {
	let M = u.trim();
	return A !== "win32" || isRemoteRuntimeEnvironmentFocused() || j === "copied-command" && isPosixFamilyWindowsShellConfigured() || !/^npx\s+skills\s+(?:add|update)\b/i.test(M) ? u : `cmd.exe /d /s /c "where.exe npx >nul 2>nul & if errorlevel 1 (echo ERROR: npx was not found. Install Node.js LTS from https://nodejs.org/ to get npx. & echo Then close this terminal and start skill setup again - a new terminal picks up the updated PATH. & exit /b 1) else (${M})"`;
}
function isPosixFamilyWindowsShellConfigured() {
	return ["posix", "unix"].includes(resolveWindowsShellStartupFamily(useAppStore.getState().settings?.terminalWindowsShell));
}
function isRemoteRuntimeEnvironmentFocused() {
	return !!useAppStore.getState().settings?.activeRuntimeEnvironmentId?.trim();
}
function getSkillCommandPlatform() {
	let u = typeof window > "u" ? void 0 : window.api?.platform?.get?.()?.platform;
	if (u) return u;
	let A = typeof navigator > "u" ? "" : navigator.userAgent;
	return A.includes("Windows") ? "win32" : A.includes("Mac") ? "darwin" : "linux";
}
function getSkillDiscoveryTargetForRuntime(u) {
	return u.runtime === "wsl" ? {
		runtime: "wsl",
		wslDistro: u.wslDistro ?? null
	} : void 0;
}
function getAgentSkillTerminalShellOverride(u, A, j) {
	return getProjectAgentSkillTerminalShellOverride(u, A, j);
}
async function ensureWslCliAvailableForAgentSkillTerminal(A) {
	let j = getWslCliDistroRequest(A);
	try {
		let A = await window.api.cli.getWslInstallStatus(j);
		if (!A.supported) return toast.warning(translate("auto.components.settings.CliSkillRuntimeSetup.775a4cfbb8", "WSL shell command registration is unavailable"), { description: A.detail ?? translate("auto.components.settings.CliSkillRuntimeSetup.fc0fcf72fd", "Register the WSL shell command before skill setup.") }), A;
		if (A.pathConfigured === null) return toast.warning(translate("auto.components.settings.CliSkillRuntimeSetup.windowsPathUnknown", "WSL shell command PATH could not be checked"), { description: A.detail ?? translate("auto.components.settings.CliSkillRuntimeSetup.refreshCliRegistration", "Refresh CLI registration status and try again.") }), A;
		if (A.state !== "installed" || A.pathConfigured === !1) {
			await showOrcaCliRegistrationPromptToast();
			let A = await window.api.cli.installWsl(j);
			return isOrcaCliAvailableOnPath(A) || toast.warning(translate("auto.components.settings.CliSkillRuntimeSetup.3728a94fb6", "WSL shell command needs attention"), { description: A.detail ?? translate("auto.components.settings.CliSkillRuntimeSetup.fc0fcf72fd", "Register the WSL shell command before skill setup.") }), A;
		}
		return A;
	} catch (A) {
		return toast.error(A instanceof Error ? A.message : translate("auto.components.settings.CliSkillRuntimeSetup.0ed08febc5", "Failed to register the WSL shell command.")), null;
	}
}
export { getSelectedAgentRuntime as a, AGENT_SKILL_CLI_PREREQUISITE_NOTICE as c, showOrcaCliRegistrationPromptToast as d, getAgentSkillTerminalShellOverride as i, ensureOrcaCliAvailableForAgentSkillTerminal as l, buildSkillSetupTerminalCommand as n, getSkillDiscoveryTargetForRuntime as o, ensureWslCliAvailableForAgentSkillTerminal as r, getWslCliDistroRequest as s, buildSkillCommandForRuntime as t, isOrcaCliAvailableOnPath as u };
