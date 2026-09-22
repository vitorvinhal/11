import { Ih as parsePaneKey, O_ as parseAppSshPtyId, Qy as isWindowsAbsolutePathLike, kp as parseRemoteRuntimePtyId } from "./store-C9f8FDJV.js";
import { b as CLIENT_PLATFORM } from "./native-chat-session-option-cache-DOY0fjiI.js";
function getAgentLaunchPlatformForRepo(e, n) {
	return e.connectionId ? isWindowsAbsolutePathLike(e.path) ? "win32" : "linux" : n?.status === "repair-required" ? n.repair.preferredRuntime.kind === "wsl" ? "linux" : CLIENT_PLATFORM : n?.status === "resolved" && n.runtime.kind === "wsl" ? "linux" : CLIENT_PLATFORM;
}
function resolveAgentStatusConnectionRouting(e) {
	let r = e.ptyId?.trim();
	if (!r) return;
	let a = e.expectedConnectionId?.trim() || e.expectedConnectionId, o = parseAppSshPtyId(r);
	if (o) return typeof e.runtimeEnvironmentId == "string" || a === null || typeof a == "string" && a !== o.connectionId ? void 0 : { connectionId: o.connectionId };
	if (r.startsWith("ssh:")) return;
	let s = parseRemoteRuntimePtyId(r);
	if (s?.handle) return typeof a == "string" || e.runtimeEnvironmentId === null || typeof e.runtimeEnvironmentId == "string" && s.environmentId !== null && s.environmentId !== e.runtimeEnvironmentId ? void 0 : { connectionId: null };
	if (!r.startsWith("remote:") && typeof a != "string") return { connectionId: null };
}
function resolveLiveAgentStatusConnectionRouting(n) {
	let r = parsePaneKey(n.paneKey);
	if (!r || !n.state.ptyIdsByTabId?.[r.tabId]?.includes(n.ptyId) || n.state.terminalLayoutsByTabId?.[r.tabId]?.ptyIdsByLeafId?.[r.leafId] !== n.ptyId) return;
	let i = resolveAgentStatusConnectionRouting(n);
	if (i && !(i.connectionId !== null && (n.state.sshConnectionStates.get(i.connectionId)?.status !== "connected" || i.connectionId in n.state.transientClearedAgentStatusConnectionIds))) return i;
}
export { getAgentLaunchPlatformForRepo as n, resolveLiveAgentStatusConnectionRouting as t };
