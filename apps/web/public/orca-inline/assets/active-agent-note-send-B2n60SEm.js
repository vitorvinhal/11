import { Fd as toHostSessionTabId, Gv as callRuntimeRpc, Sy as toRuntimeWorktreeSelector, Yv as getActiveRuntimeTarget, ey as RuntimeRpcCallError, ny as hasRuntimeRpcErrorCode, t as useAppStore, zf as getSettingsForWorktreeRuntimeOwner } from "./store-C9f8FDJV.js";
import { O as sanitizeTerminalPasteText, S as BRACKETED_PASTE_END, n as POST_PASTE_SUBMIT_DELAY_MS, t as BRACKETED_PASTE_BEGIN } from "./agent-paste-draft-Ddp-k6QZ.js";
var ACTIVE_AGENT_TERMINAL_LIST_LIMIT = 200;
function getActiveTerminalNoteTarget(n, S) {
	if (n.activeWorktreeId !== S) return null;
	let C = n.activeTabType === "terminal" ? n.activeTabId ?? n.activeTabIdByWorktree[S] : n.activeTabIdByWorktree[S];
	if (!C || !(n.tabsByWorktree[S] ?? []).some((n) => n.id === C)) return null;
	let w = n.terminalLayoutsByTabId[C]?.activeLeafId;
	return w ? {
		tabId: C,
		leafId: w
	} : null;
}
async function findActiveRuntimeTerminal(w, T, E, D) {
	let { terminals: O } = await callRuntimeRpc(w, "terminal.list", {
		worktree: toRuntimeWorktreeSelector(T),
		limit: ACTIVE_AGENT_TERMINAL_LIST_LIMIT,
		includeVisualLayouts: !1
	}, { timeoutMs: D }), k = toHostSessionTabId(E.tabId);
	return O.find((n) => n.tabId === k && n.leafId === E.leafId) ?? null;
}
const TERMINAL_RUNTIME_FAILURE_CODES = [
	"terminal_handle_stale",
	"terminal_exited",
	"terminal_gone",
	"no_active_terminal"
];
function reportNoteSendFailure(n, S) {
	if (n.status === "sent" || n.status === "empty") return n;
	let C = n.code ?? codeForStatus(n.status);
	return console.warn("[review-notes] send failed", {
		code: C,
		status: n.status,
		tabId: S?.tabId,
		leafId: S?.leafId
	}), {
		...n,
		code: C
	};
}
function codeForReadinessStatus(n) {
	switch (n) {
		case "no-active-terminal": return "no-inventory-match";
		case "no-agent": return "no-agent";
		case "permission": return "agent-permission";
		case "status-unavailable": return "status-unavailable";
	}
}
function runtimeFailureCode(n) {
	return TERMINAL_RUNTIME_FAILURE_CODES.find((S) => hasRuntimeRpcErrorCode(n, S)) ?? null;
}
function runtimeFailureFallbackCode(n) {
	return isTimeoutError(n) ? "runtime-timeout" : "runtime-unverifiable";
}
function isTimeoutError(n) {
	return hasRuntimeRpcErrorCode(n, "runtime_timeout") ? !0 : (n instanceof Error ? n.message : String(n)).includes("timeout");
}
function codeForStatus(n) {
	switch (n) {
		case "no-active-terminal": return "no-inventory-match";
		case "no-agent": return "no-agent";
		case "permission": return "agent-permission";
		case "status-unavailable": return "status-unavailable";
		case "not-ready": return "terminal_wait_timeout";
		case "not-writable": return "terminal-send-refused";
		case "partial-submit-failed": return "submit-send-error";
	}
}
const ACTIVE_AGENT_SEND_RPC_TIMEOUT_MS = 15e3;
async function getTerminalAgentSendReadiness(n, C, w) {
	try {
		let { agentStatus: w } = await callRuntimeRpc(n, "terminal.agentStatus", { terminal: C }, { timeoutMs: ACTIVE_AGENT_SEND_RPC_TIMEOUT_MS });
		return w.isRunningAgent ? w.status === "permission" ? {
			status: "permission",
			supportsGuardedSend: !0
		} : {
			status: "sendable",
			supportsGuardedSend: !0
		} : {
			status: "no-agent",
			supportsGuardedSend: !0
		};
	} catch (S) {
		if (S instanceof RuntimeRpcCallError && S.code === "method_not_found") return w.allowLegacyFallback ? await getLegacyTerminalAgentSendStatus(n, C) : {
			status: "status-unavailable",
			supportsGuardedSend: !1
		};
		if (isRuntimeTerminalUnavailable(S)) return {
			status: "no-active-terminal",
			supportsGuardedSend: !1,
			code: runtimeTerminalUnavailableCode(S)
		};
		throw S;
	}
}
async function getLegacyTerminalAgentSendStatus(n, C) {
	try {
		let { isRunningAgent: w } = await callRuntimeRpc(n, "terminal.isRunningAgent", { terminal: C }, { timeoutMs: ACTIVE_AGENT_SEND_RPC_TIMEOUT_MS });
		return {
			status: w ? "sendable" : "no-agent",
			supportsGuardedSend: !1
		};
	} catch (n) {
		if (isRuntimeTerminalUnavailable(n)) return {
			status: "no-active-terminal",
			supportsGuardedSend: !1,
			code: runtimeTerminalUnavailableCode(n)
		};
		throw n;
	}
}
function runtimeTerminalUnavailableCode(n) {
	return runtimeFailureCode(n) ?? "runtime-unverifiable";
}
function isRuntimeTimeout(n) {
	return hasRuntimeRpcErrorCode(n, "runtime_timeout") ? !0 : (n instanceof Error ? n.message : String(n)).includes("timeout");
}
function isRuntimeTerminalUnavailable(n) {
	return TERMINAL_RUNTIME_FAILURE_CODES.some((S) => hasRuntimeRpcErrorCode(n, S));
}
function isRuntimeTerminalNotWritable(n) {
	return hasRuntimeRpcErrorCode(n, "terminal_not_writable");
}
var ORCA_DESKTOP_TERMINAL_CLIENT = {
	id: "orca-desktop",
	type: "desktop"
};
async function sendPromptWithLegacyCombinedSend(n, C, w) {
	try {
		let { send: T } = await callRuntimeRpc(n, "terminal.send", {
			terminal: C,
			text: w,
			enter: !0,
			client: ORCA_DESKTOP_TERMINAL_CLIENT
		}, { timeoutMs: ACTIVE_AGENT_SEND_RPC_TIMEOUT_MS });
		return T.accepted ? { status: "sent" } : {
			status: "not-writable",
			code: "terminal-send-refused"
		};
	} catch (n) {
		if (isRuntimeTerminalUnavailable(n)) return {
			status: "no-active-terminal",
			code: runtimeFailureCode(n) ?? "runtime-unverifiable"
		};
		if (isRuntimeTerminalNotWritable(n)) return {
			status: "not-writable",
			code: "terminal_not_writable"
		};
		throw n;
	}
}
async function sendPromptWithGuardedPasteAndEnter(n, C, w, T) {
	let E = await getTerminalAgentSendReadiness(n, C, T);
	if (E.status !== "sendable" && !(E.status === "no-agent" && E.supportsGuardedSend)) return {
		status: E.status,
		code: E.code ?? codeForReadinessStatus(E.status)
	};
	let D = `${BRACKETED_PASTE_BEGIN}${sanitizeTerminalPasteText(w)}${BRACKETED_PASTE_END}`;
	try {
		let { send: w } = await callRuntimeRpc(n, "terminal.send", {
			terminal: C,
			text: D,
			requireAgentStatus: "sendable",
			client: ORCA_DESKTOP_TERMINAL_CLIENT
		}, { timeoutMs: ACTIVE_AGENT_SEND_RPC_TIMEOUT_MS });
		if (!w.accepted) return w.refusedReason === "permission" ? {
			status: "permission",
			code: "terminal-send-permission"
		} : w.refusedReason === "no-agent" ? {
			status: "no-agent",
			code: "no-agent"
		} : {
			status: "not-writable",
			code: "terminal-send-refused"
		};
	} catch (n) {
		if (isRuntimeTerminalUnavailable(n)) return {
			status: "no-active-terminal",
			code: runtimeFailureCode(n) ?? "runtime-unverifiable"
		};
		if (isRuntimeTerminalNotWritable(n)) return {
			status: "not-writable",
			code: "terminal_not_writable"
		};
		throw n;
	}
	await new Promise((n) => setTimeout(n, 50));
	try {
		let S = await getTerminalAgentSendReadiness(n, C, T);
		if (S.status !== "sendable" && !(S.status === "no-agent" && S.supportsGuardedSend)) return {
			status: "partial-submit-failed",
			code: S.code ?? "submit-readiness-lost"
		};
	} catch (n) {
		if (isRuntimeTerminalUnavailable(n)) return {
			status: "partial-submit-failed",
			code: runtimeFailureCode(n) ?? "submit-terminal-unavailable"
		};
		throw n;
	}
	try {
		let { send: w } = await callRuntimeRpc(n, "terminal.send", {
			terminal: C,
			enter: !0,
			requireAgentStatus: "sendable",
			client: ORCA_DESKTOP_TERMINAL_CLIENT
		}, { timeoutMs: ACTIVE_AGENT_SEND_RPC_TIMEOUT_MS });
		return w.accepted ? { status: "sent" } : {
			status: "partial-submit-failed",
			code: "submit-send-refused"
		};
	} catch (n) {
		if (isRuntimeTerminalUnavailable(n) || isRuntimeTerminalNotWritable(n)) return {
			status: "partial-submit-failed",
			code: "submit-send-error"
		};
		throw n;
	}
}
function activeAgentNotesSendFailureMessage(n, S = {}) {
	let C = S.explicitTarget ? "selected" : "active", w;
	switch (n) {
		case "empty":
			w = "No notes to send.";
			break;
		case "no-active-terminal":
			w = S.explicitTarget ? "The selected terminal is no longer available." : "Open the agent terminal in this worktree, then send the notes again.";
			break;
		case "no-agent":
			w = `The ${C} terminal is not a recognized agent session.`;
			break;
		case "permission":
			w = S.explicitTarget ? "The selected agent needs permission." : "The active agent needs permission.";
			break;
		case "status-unavailable":
			w = `The ${C} agent status could not be verified.`;
			break;
		case "not-ready":
			w = `The ${C} agent was not ready for input yet.`;
			break;
		case "not-writable":
			w = `The ${C} terminal did not accept the notes.`;
			break;
		case "partial-submit-failed":
			w = S.explicitTarget ? "The notes may already be pasted in the selected terminal, but Orca could not submit them." : "The notes may already be pasted in the active terminal, but Orca could not submit them.";
			break;
		case "sent":
			w = "";
			break;
	}
	return S.code ? `${w} (${S.code})` : w;
}
var ACTIVE_AGENT_SEND_TIMEOUT_MS = 8e3;
async function sendNotesToActiveAgentSession(n) {
	try {
		return await sendNotesToActiveAgentSessionInternal(n);
	} catch (S) {
		return reportNoteSendFailure({
			status: "status-unavailable",
			code: runtimeFailureFallbackCode(S)
		}, n.noteTarget ?? null);
	}
}
async function sendNotesToActiveAgentSessionInternal({ worktreeId: n, prompt: C, noteTarget: T, timeoutMs: E }) {
	let k = C.trim();
	if (!k) return {
		status: "empty",
		code: "empty"
	};
	let A = useAppStore.getState(), j = T ?? getActiveTerminalNoteTarget(A, n);
	if (!j) return reportNoteSendFailure({
		status: "no-active-terminal",
		code: "no-note-target"
	}, null);
	let M = getActiveRuntimeTarget(getSettingsForWorktreeRuntimeOwner(A, n)), N = await findActiveRuntimeTerminal(M, n, j, ACTIVE_AGENT_SEND_RPC_TIMEOUT_MS);
	if (!N) return reportNoteSendFailure({
		status: "no-active-terminal",
		code: "no-inventory-match"
	}, j);
	if (T) return reportNoteSendFailure(await sendPromptToExplicitAgentTarget(M, N.handle, k), j);
	let P = E ?? ACTIVE_AGENT_SEND_TIMEOUT_MS, F = await getTerminalAgentSendReadiness(M, N.handle, { allowLegacyFallback: !0 });
	if (F.status !== "sendable") return reportNoteSendFailure({
		status: F.status,
		code: F.code ?? codeForReadinessStatus(F.status)
	}, j);
	try {
		let { wait: n } = await callRuntimeRpc(M, "terminal.wait", {
			terminal: N.handle,
			for: "tui-idle",
			timeoutMs: P
		}, { timeoutMs: P + 5e3 });
		if (n.status !== "running") return reportNoteSendFailure({
			status: "no-active-terminal",
			code: "terminal_wait_not_running"
		}, j);
		if (n.blockedReason) return reportNoteSendFailure({
			status: "permission",
			code: "terminal_wait_blocked"
		}, j);
		if (!n.satisfied) return reportNoteSendFailure({
			status: "not-ready",
			code: "terminal_wait_unsatisfied"
		}, j);
	} catch (n) {
		if (isRuntimeTerminalUnavailable(n)) return reportNoteSendFailure({
			status: "no-active-terminal",
			code: runtimeFailureCode(n) ?? "runtime-unverifiable"
		}, j);
		if (isRuntimeTimeout(n)) return reportNoteSendFailure({
			status: "not-ready",
			code: "terminal_wait_timeout"
		}, j);
		throw n;
	}
	let I = await getTerminalAgentSendReadiness(M, N.handle, { allowLegacyFallback: !0 });
	return I.status === "sendable" ? I.supportsGuardedSend ? reportNoteSendFailure(await sendPromptWithGuardedPasteAndEnter(M, N.handle, k, { allowLegacyFallback: !1 }), j) : reportNoteSendFailure(await sendPromptWithLegacyCombinedSend(M, N.handle, k), j) : reportNoteSendFailure({
		status: I.status,
		code: I.code ?? codeForReadinessStatus(I.status)
	}, j);
}
async function sendPromptToExplicitAgentTarget(n, S, C) {
	return await sendPromptWithGuardedPasteAndEnter(n, S, C, { allowLegacyFallback: !1 });
}
export { activeAgentNotesSendFailureMessage as n, getActiveTerminalNoteTarget as r, sendNotesToActiveAgentSession as t };
