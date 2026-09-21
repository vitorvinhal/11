import { Yt as isLocalNativeWindowsConpty } from "./worktree-activation-u-wSAPlP.js";
import { Ac as getRemoteRuntimePtyEnvironmentId, Ff as getExecutionHostIdForWorktree, Ph as makePaneKey, Rf as getRuntimeEnvironmentIdForWorktree, iC as parseExecutionHostId, ib as parseWslUncPath, iu as resolveCommittedTitleAgentType, rb as isWslUncPath, tw as lastVerifiedRuntimeStatus, vl as getConnectionIdFromState, wS as isTuiAgent, xS as TUI_AGENT_CONFIG } from "./store-C9f8FDJV.js";
function prefersKittyKeyboardDespiteWindowsConpty(e) {
	return e === "grok";
}
function shouldDisableKittyKeyboardForTerminal(_) {
	return prefersKittyKeyboardDespiteWindowsConpty(_.tuiAgent) ? !1 : isLocalNativeWindowsConpty(_);
}
function buildTerminalKeyboardProtocolOptions(e) {
	return shouldDisableKittyKeyboardForTerminal(e) ? { vtExtensions: { kittyKeyboard: !1 } } : {};
}
var REMOTE_PTY_ID_PREFIX = "remote:";
function resolveTerminalPasteRuntime({ platform: e, ptyId: _, connectionId: v, remotePlatform: y, transport: b, isWindowsConpty: x }) {
	let S = x === void 0 ? {} : { isWindowsConpty: x };
	if (isRemoteRuntimePastePtyId(_)) return {
		platform: e,
		runtimeKey: `remote:${_}`,
		kind: "remote-runtime",
		...S
	};
	let C = b?.getConnectionId?.(), w = C === void 0 ? v ?? null : C;
	if (w) return {
		platform: b?.getRemotePlatform?.() ?? y ?? e,
		runtimeKey: `ssh:${w}`,
		kind: "ssh",
		...S
	};
	let T = resolveWslRuntimeKey(b?.getLocalSessionMetadata?.());
	return T ? {
		platform: e,
		runtimeKey: T,
		kind: "wsl",
		...S
	} : {
		platform: e,
		runtimeKey: `local:${e}`,
		kind: "local",
		...S
	};
}
function isRemoteRuntimePastePtyId(e) {
	return typeof e == "string" && e.startsWith(REMOTE_PTY_ID_PREFIX);
}
function resolveWslRuntimeKey(e) {
	let _ = e?.cwd ? parseWslUncPath(e.cwd) : null;
	return _?.distro ? `wsl:${_.distro}` : isWslShellOverride(e?.shellOverride) ? "wsl:default" : null;
}
function isWslShellOverride(e) {
	let _ = getShellOverrideExecutableToken(e), v = getShellOverridePathSegmentStart(_), y = _.slice(v).toLowerCase();
	return y === "wsl" || y === "wsl.exe";
}
function getShellOverrideExecutableToken(e) {
	let _ = e ?? "", v = 0;
	for (; v < _.length && isShellOverrideWhitespace(_.charCodeAt(v));) v += 1;
	if (v >= _.length) return "";
	let y = _[v];
	if (y === "\"" || y === "'") {
		let e = v + 1;
		for (let v = e; v < _.length; v += 1) if (_[v] === y) return _.slice(e, v);
		return _.slice(e);
	}
	let b = v;
	for (; v < _.length && !isShellOverrideWhitespace(_.charCodeAt(v));) v += 1;
	return _.slice(b, v);
}
function getShellOverridePathSegmentStart(e) {
	for (let _ = e.length - 1; _ >= 0; --_) {
		let v = e.charCodeAt(_);
		if (v === 47 || v === 92) return _ + 1;
	}
	return 0;
}
function isShellOverrideWhitespace(e) {
	return e === 32 || e >= 9 && e <= 13;
}
function resolveWindowsShiftEnterEncoding(e) {
	if (e.foreground?.shellForeground) return "alt-enter";
	let _ = e.foreground?.routingTrusted === !0 || e.foreground?.routingConfirmationPending === !0 ? e.foreground.agent : null;
	return _ ? TUI_AGENT_CONFIG[_].windowsShiftEnterEncoding ?? "alt-enter" : "alt-enter";
}
function resolveWindowsShiftEnterEncodingForPane(e, _, v) {
	let y = e.paneForegroundAgentByPaneKey[_], b = resolveWindowsShiftEnterEncoding({
		foreground: e.paneForegroundAgentByPaneKey[_],
		launchAgentType: e.agentLaunchConfigByPaneKey[_]?.identity.agentType
	});
	if (b === "csi-u" || !v || y?.routingTrusted === !0 || y?.routingRevoked === !0 || y?.shellForeground === !0) return b;
	let x = resolveCommittedTitleAgentType(v);
	return x ? TUI_AGENT_CONFIG[x].windowsShiftEnterEncoding ?? "alt-enter" : "alt-enter";
}
function agentAcceptsCtrlEnterCsiU(e) {
	return e !== null && TUI_AGENT_CONFIG[e].ctrlEnterEncoding === "csi-u";
}
function hasCtrlEnterCsiUAuthorityForPane(e, _, v) {
	let y = e.paneForegroundAgentByPaneKey[_];
	if (y?.shellForeground === !0 || y?.routingRevoked === !0) return !1;
	if (y?.routingTrusted === !0) return agentAcceptsCtrlEnterCsiU(y.agent);
	let b = v ? resolveCommittedTitleAgentType(v) : null;
	return y?.agent != null && y.agent !== b ? !1 : agentAcceptsCtrlEnterCsiU(b);
}
function resolveTerminalInputHostPlatform(e) {
	let y = e.transport?.getRemotePlatform?.();
	if (y) return y;
	let S = e.transport?.getConnectionId?.(), C = S === void 0 ? getConnectionIdFromState(e.state, e.worktreeId) : S;
	if (C) return e.state.sshConnectionStates.get(C)?.remotePlatform ?? "linux";
	let E = e.transport?.getPtyId?.() ?? null, D = e.transport?.getRuntimeEnvironmentId?.() ?? (E ? getRemoteRuntimePtyEnvironmentId(E) : null), O = parseExecutionHostId(e.transport?.getExecutionHostId?.());
	if (D && O?.kind === "ssh") return e.state.sshStateByEnvironment.get(D)?.connectionStates.get(O.targetId)?.remotePlatform ?? "linux";
	if (D) return lastVerifiedRuntimeStatus(e.state.runtimeStatusByEnvironmentId.get(D))?.hostPlatform ?? e.clientPlatform;
	let k = e.transport?.getLocalSessionMetadata?.();
	if (E !== null && k != null) {
		let _ = isWslUncPath(k.cwd ?? "") || isWslShellOverride(k.shellOverride);
		return e.clientPlatform === "win32" && _ ? "linux" : e.clientPlatform;
	}
	let A = parseExecutionHostId(getExecutionHostIdForWorktree(e.state, e.worktreeId));
	if (A?.kind === "ssh") {
		let _ = getRuntimeEnvironmentIdForWorktree(e.state, e.worktreeId);
		return _ ? e.state.sshStateByEnvironment.get(_)?.connectionStates.get(A.targetId)?.remotePlatform ?? "linux" : e.state.sshConnectionStates.get(A.targetId)?.remotePlatform ?? "linux";
	}
	return A?.kind === "runtime" ? lastVerifiedRuntimeStatus(e.state.runtimeStatusByEnvironmentId.get(A.environmentId))?.hostPlatform ?? e.clientPlatform : e.clientPlatform;
}
function resolveProtectedMultilinePasteOptionsForPane({ isWindowsClient: e, hostPlatform: _, agentStatusByPaneKey: v, paneForegroundAgentByPaneKey: b, tabId: x, leafId: S }) {
	let C;
	try {
		C = makePaneKey(x, S);
	} catch {
		return e ? { forceBracketedPasteForMultiline: !0 } : void 0;
	}
	return resolveProtectedMultilinePasteOptionsForAgentEvidence({
		isWindowsClient: e,
		hostPlatform: _,
		foregroundAgent: b[C]?.agent,
		entry: v[C]
	});
}
function resolveProtectedMultilinePasteOptionsForAgentEvidence({ isWindowsClient: e, hostPlatform: _, foregroundAgent: v, entry: y }) {
	let b = isTuiAgent(v) ? v : y?.restoredUnconfirmed !== !0 && isTuiAgent(y?.agentType) ? y.agentType : null, x = b ? TUI_AGENT_CONFIG[b].windowsInputRecordPasteNewline : void 0;
	return _ === "win32" && x ? { windowsInputRecordNewline: x } : e || b ? { forceBracketedPasteForMultiline: !0 } : void 0;
}
export { resolveWindowsShiftEnterEncodingForPane as a, shouldDisableKittyKeyboardForTerminal as c, hasCtrlEnterCsiUAuthorityForPane as i, resolveProtectedMultilinePasteOptionsForPane as n, resolveTerminalPasteRuntime as o, resolveTerminalInputHostPlatform as r, buildTerminalKeyboardProtocolOptions as s, resolveProtectedMultilinePasteOptionsForAgentEvidence as t };
