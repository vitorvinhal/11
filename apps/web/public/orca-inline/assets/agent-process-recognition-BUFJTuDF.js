import { $c as isFreshOmpLaunchCommand, Ac as getRemoteRuntimePtyEnvironmentId, Gv as callRuntimeRpc, O_ as parseAppSshPtyId, Ph as makePaneKey, Qc as getFirstCommandToken, SS as getTuiAgentDetectCommands, So as isTerminalInputTooLargeWithDeferredMeasurement, Yv as getActiveRuntimeTarget, jc as getRemoteRuntimeTerminalHandle, t as useAppStore, xS as TUI_AGENT_CONFIG } from "./store-C9f8FDJV.js";
function clientOnlyUnverifiableInspection(h) {
	return {
		foregroundProcess: null,
		hasChildProcesses: !1,
		verdict: "unverifiable",
		reason: h
	};
}
function isClientOnlyUnverifiableInspection(h) {
	return typeof h == "object" && !!h && h.verdict === "unverifiable";
}
function classifyTerminalProcessInspectionFailure(h) {
	let W = h instanceof Error ? h.message : String(h), G = h && typeof h == "object" && "code" in h ? String(h.code) : "";
	return G === "terminal_handle_stale" || G === "terminal_exited" || G === "terminal_gone" || G === "no_connected_pty" || W.includes("terminal_handle_stale") || W.includes("terminal_exited") || W.includes("terminal_gone") || W.includes("no_connected_pty") || /PTY\s+"[^"]+"\s+not found/i.test(W) ? "terminal_gone" : G === "SSH_MUX_REQUEST_TIMEOUT" || G === "request_timeout" || G === "rpc_timeout" || G === "deadline_exceeded" || /\b(?:timed?\s*out|timeout)\b/i.test(W) ? "timeout" : G === "method_not_found" || G === "rpc_method_not_found" || G === "unsupported_method" || /(?:method|inspectProcess).*not found|unsupported.*(?:method|inspect)/i.test(W) ? "old_host" : G === "CONNECTION_LOST" || G === "DISPOSED" || G === "socket_closed" || G === "connection_closed" || G === "transport_closed" || G === "runtime_unavailable" || G === "remote_runtime_unavailable" || /(?:connection\s+(?:lost|closed)|socket\s+(?:closed|lost)|terminal\s+closed|runtime\s+unavailable|reconnecting|multiplexer\s+disposed|request\s+closed)/i.test(W) ? "transport_loss" : null;
}
var REMOTE_PTY_ID_PREFIX = "remote:", DESKTOP_RUNTIME_CLIENT = {
	id: "orca-desktop",
	type: "desktop"
}, paneOwnersByPtyIdByLayoutIdentity = /* @__PURE__ */ new WeakMap();
function resolvePaneKeyForPtyId(h, W) {
	let G = paneOwnersByPtyIdByLayoutIdentity.get(h);
	G || (G = /* @__PURE__ */ new Map(), paneOwnersByPtyIdByLayoutIdentity.set(h, G));
	let K = G.get(W);
	if (K) {
		let q = (Object.prototype.propertyIsEnumerable.call(h, K.tabId) ? h[K.tabId] : void 0)?.ptyIdsByLeafId;
		if (q && Object.prototype.propertyIsEnumerable.call(q, K.leafId) && q[K.leafId] === W) return K.paneKey;
		G.delete(W);
	}
	for (let [K, J] of Object.entries(h)) for (let [h, Y] of Object.entries(J?.ptyIdsByLeafId ?? {})) if (Y === W) try {
		let J = makePaneKey(K, h);
		return G.set(W, {
			tabId: K,
			leafId: h,
			paneKey: J
		}), J;
	} catch {
		return null;
	}
	return null;
}
function isRuntimePtyInputTooLarge(h) {
	return isTerminalInputTooLargeWithDeferredMeasurement(h);
}
function isRemoteRuntimePtyId(h) {
	return h.startsWith(REMOTE_PTY_ID_PREFIX);
}
function isRemoteInspectionPtyId(h) {
	return getRemoteRuntimePtyEnvironmentId(h) !== null || parseAppSshPtyId(h) !== null;
}
function normalizeInspectionResult(h, W) {
	return typeof h != "object" || !h ? clientOnlyUnverifiableInspection(W ? "old_host" : "terminal_gone") : isClientOnlyUnverifiableInspection(h) ? clientOnlyUnverifiableInspection(typeof h.reason == "string" ? h.reason : "transport_loss") : W && h.foregroundProcessEvidence === void 0 ? clientOnlyUnverifiableInspection("old_host") : h && typeof h == "object" && "unavailable" in h && h.unavailable === !0 ? clientOnlyUnverifiableInspection("terminal_gone") : h;
}
function recordRuntimeTerminalInputForPtyId(h, W = Date.now()) {
	let G = useAppStore.getState(), K = resolvePaneKeyForPtyId(G.terminalLayoutsByTabId, h);
	if (K) try {
		G.recordTerminalInput(K, W);
	} catch {}
}
async function inspectRuntimeTerminalProcess(h, K, q) {
	let J = getRemoteRuntimePtyEnvironmentId(K), Y = J ? {
		kind: "environment",
		environmentId: J
	} : getActiveRuntimeTarget(h), X = getRemoteRuntimeTerminalHandle(K), $ = isRemoteInspectionPtyId(K);
	if (Y.kind !== "environment" || !X) try {
		return normalizeInspectionResult(await (q ? window.api.pty.inspectProcess(K, q) : window.api.pty.inspectProcess(K)), $);
	} catch (h) {
		let W = classifyTerminalProcessInspectionFailure(h);
		if (W) return clientOnlyUnverifiableInspection(W);
		throw h;
	}
	try {
		return normalizeInspectionResult((await callRuntimeRpc(Y, "terminal.inspectProcess", {
			terminal: X,
			...q?.expectedIncarnationId ? { expectedIncarnationId: q.expectedIncarnationId } : {},
			...q?.scanChildProcesses === !0 ? { scanChildProcesses: !0 } : {}
		}, { timeoutMs: 15e3 })).process, !0);
	} catch (h) {
		let W = classifyTerminalProcessInspectionFailure(h);
		if (W) return clientOnlyUnverifiableInspection(W);
		throw h;
	}
}
async function confirmRuntimeTerminalForegroundProcess(h, G) {
	let K = getRemoteRuntimePtyEnvironmentId(G);
	if ((K ? {
		kind: "environment",
		environmentId: K
	} : getActiveRuntimeTarget(h)).kind === "environment" && getRemoteRuntimeTerminalHandle(G)) return null;
	let q = window.api.pty.confirmForegroundProcess;
	return typeof q == "function" ? q(G).catch(() => null) : null;
}
function sendRuntimePtyInput(h, W, G) {
	let K = isRuntimePtyInputTooLarge(G);
	return K === !0 ? !1 : K === !1 ? sendRuntimePtyInputWithinLimit(h, W, G) : (K.then((K) => {
		K || sendRuntimePtyInputWithinLimit(h, W, G);
	}).catch(() => {}), !0);
}
function sendRuntimePtyInputWithinLimit(h, K, q) {
	let J = getRemoteRuntimePtyEnvironmentId(K), Y = J ? {
		kind: "environment",
		environmentId: J
	} : getActiveRuntimeTarget(h), X = getRemoteRuntimeTerminalHandle(K);
	return Y.kind !== "environment" || !X ? (window.api.pty.write(K, q), recordRuntimeTerminalInputForPtyId(K), !0) : (callRuntimeRpc(Y, "terminal.send", {
		terminal: X,
		text: q,
		client: DESKTOP_RUNTIME_CLIENT
	}, { timeoutMs: 15e3 }).then((h) => {
		h.send.accepted === !0 && recordRuntimeTerminalInputForPtyId(K);
	}).catch(() => {}), !0);
}
async function sendRuntimePtyInputVerified(h, K, q) {
	let J = isRuntimePtyInputTooLarge(q);
	if (typeof J == "boolean" ? J : await J) return !1;
	let Y = getRemoteRuntimePtyEnvironmentId(K), X = Y ? {
		kind: "environment",
		environmentId: Y
	} : getActiveRuntimeTarget(h), $ = getRemoteRuntimeTerminalHandle(K);
	if (X.kind !== "environment" || !$) {
		let h = await window.api.pty.writeAccepted(K, q);
		return h ? (recordRuntimeTerminalInputForPtyId(K), h) : (window.api.pty.write(K, q), recordRuntimeTerminalInputForPtyId(K), !0);
	}
	try {
		return (await callRuntimeRpc(X, "terminal.send", {
			terminal: $,
			text: q,
			client: DESKTOP_RUNTIME_CLIENT
		}, { timeoutMs: 15e3 })).send.accepted === !0 ? (recordRuntimeTerminalInputForPtyId(K), !0) : !1;
	} catch (h) {
		if (classifyTerminalProcessInspectionFailure(h) === "terminal_gone") return !1;
		throw h;
	}
}
const EXACT_NODE_ENTRYPOINT_IDENTITIES = [
	{
		pattern: /(?:^|\/)cursor-agent\/versions\/[^/]+\/index\.js$/,
		agent: "cursor",
		processName: "cursor-agent"
	},
	{
		pattern: /(?:^|\/)node_modules\/@(?:earendil-works|mariozechner)\/pi-coding-agent\/dist\/cli\.js$/,
		agent: "pi",
		processName: "pi"
	},
	{
		pattern: /(?:^|\/)node_modules\/prime-agent\/dist\/bundle\/cli\.js$/,
		agent: "prime-agent",
		processName: "prime-agent"
	}
];
var PRINT_MODE_FLAGS = new Set(["--print", "-p"]), HEADLESS_OUTPUT_FORMATS = new Set(["json", "stream-json"]);
function optionName$1(h) {
	let W = h.indexOf("=");
	return W === -1 ? h : h.slice(0, W);
}
function optionValue(h, W) {
	let G = h[W], K = G.indexOf("=");
	return K === -1 ? h[W + 1] ?? null : G.slice(K + 1);
}
function isPrintModeHeadlessOneShotCommand(h) {
	for (let W = 1; W < h.length; W += 1) {
		if (h[W] === "--") return !1;
		let G = optionName$1(h[W]);
		if (PRINT_MODE_FLAGS.has(G)) return !0;
		if (G === "--output-format") {
			let G = optionValue(h, W)?.toLowerCase();
			if (G && HEADLESS_OUTPUT_FORMATS.has(G)) return !0;
		}
	}
	return !1;
}
var ANTE_HEADLESS_PROMPT_FLAGS = new Set(["--prompt", "-p"]);
function isAnteHeadlessPromptFlag(h) {
	let W = optionName$1(h);
	return ANTE_HEADLESS_PROMPT_FLAGS.has(W) || /^-p[^-]/.test(W);
}
function isAnteHeadlessOneShotCommand(h) {
	for (let W = 1; W < h.length; W += 1) if (isAnteHeadlessPromptFlag(h[W])) return !0;
	return !1;
}
var NON_INTERACTIVE_MODES = new Set([
	"json",
	"rpc",
	"acp",
	"daemon"
]);
function isPrimeAgentHeadlessOneShotCommand(h) {
	if (isPrintModeHeadlessOneShotCommand(h)) return !0;
	for (let W = 1; W < h.length; W += 1) {
		if (h[W] === "--") return !1;
		if (h[W] === "--mode" && NON_INTERACTIVE_MODES.has(h[W + 1] ?? "")) return !0;
	}
	return !1;
}
var HEADLESS_ONE_SHOT_MATCHERS = {
	claude: isPrintModeHeadlessOneShotCommand,
	trae: isPrintModeHeadlessOneShotCommand,
	"prime-agent": isPrimeAgentHeadlessOneShotCommand,
	ante: isAnteHeadlessOneShotCommand
};
function isHeadlessOneShotAgentCommand(h, W) {
	return HEADLESS_ONE_SHOT_MATCHERS[h]?.(W) ?? !1;
}
function filterHeadlessOneShotAgentCommand(h, W) {
	return h && isHeadlessOneShotAgentCommand(h.agent, W) ? null : h;
}
var PROCESS_EXTENSION_RE = /\.(?:exe|cmd|bat|ps1)$/i, INTERPRETER_SCRIPT_EXTENSION_RE = /\.(?:js|mjs|cjs)$/i, PYTHON_SCRIPT_EXTENSION_RE = /\.(?:py|pyw)$/i;
function normalizeProcessName(h, W = {}) {
	if (!h) return "";
	let G = h.trim().replace(/^["']|["']$/g, ""), K = (G.split(/[\\/]/).pop() ?? G).toLowerCase().replace(PROCESS_EXTENSION_RE, "");
	return W.stripInterpreterScriptExtension === !0 ? K.replace(INTERPRETER_SCRIPT_EXTENSION_RE, "") : K;
}
var STATIC_INTERPRETER_PROCESS_NAMES = new Set([
	"node",
	"python",
	"python3",
	"bash",
	"zsh",
	"sh",
	"fish",
	"pwsh",
	"powershell"
]), FOREGROUND_AGENT_WRAPPER_PROCESS_NAMES = new Set([
	"node",
	"python",
	"python3"
]), PYTHON_PROCESS_RE = /^python(?:\d+(?:\.\d+)*)?$/, INTERPRETER_OPTIONS_WITH_VALUE = new Set([
	"-r",
	"--require",
	"--import",
	"--loader",
	"--experimental-loader"
]), INTERPRETER_OPTIONS_WITH_INLINE_SOURCE = new Set([
	"-e",
	"--eval",
	"-p",
	"--print",
	"--check"
]), NODE_PACKAGE_SCRIPT_ENTRYPOINTS = {
	codex: ["node_modules/@openai/codex/"],
	gemini: ["node_modules/@google/gemini-cli/"]
}, PYTHON_SCRIPT_ENTRYPOINT_DIRECTORIES = [
	"/bin/",
	"/scripts/",
	"/site-packages/"
], PROCESS_TO_AGENT = /* @__PURE__ */ new Map(), AGENT_TYPE_IDS = /* @__PURE__ */ new Set();
for (let [h, W] of Object.entries(TUI_AGENT_CONFIG)) {
	AGENT_TYPE_IDS.add(h);
	for (let G of [
		W.expectedProcess,
		...getTuiAgentDetectCommands(W),
		getFirstCommandToken(W.launchCmd)
	]) {
		let W = normalizeProcessName(G);
		W && (PROCESS_TO_AGENT.has(W) || PROCESS_TO_AGENT.set(W, h));
	}
}
function agentForNormalizedProcess(h) {
	let W = PROCESS_TO_AGENT.get(h);
	if (W) return W;
	if (h.startsWith("codex-")) return PROCESS_TO_AGENT.get("codex");
	if (h.startsWith("grok-")) return PROCESS_TO_AGENT.get("grok");
}
function recognizedAgentForProcess(h) {
	let W = agentForNormalizedProcess(h);
	return W ? {
		agent: W,
		processName: h
	} : null;
}
function tokenizeCommandLine(h) {
	let W = [], G = "", K = null, q = !1;
	for (let J = 0; J < h.length; J += 1) {
		let Y = h[J];
		if (q) {
			G += Y, q = !1;
			continue;
		}
		if (Y === "\\" && K !== "'") {
			let W = h[J + 1];
			if (W && (/\s/.test(W) || W === "\"" || W === "'" || W === "\\")) {
				q = !0;
				continue;
			}
		}
		if ((Y === "\"" || Y === "'") && K === null) {
			K = Y;
			continue;
		}
		if (K === Y) {
			K = null;
			continue;
		}
		if (/\s/.test(Y) && K === null) {
			G &&= (W.push(G), "");
			continue;
		}
		G += Y;
	}
	return G && W.push(G), W;
}
function tokenLooksExecutable(h, W, G) {
	return W === 0 ? !0 : isInterpreterProcessName(G) ? h.includes("/") || h.includes("\\") || PROCESS_EXTENSION_RE.test(h) : !1;
}
function isInterpreterProcessName(h) {
	return STATIC_INTERPRETER_PROCESS_NAMES.has(h) || PYTHON_PROCESS_RE.test(h);
}
var isPythonProcessName = (h) => PYTHON_PROCESS_RE.test(h), optionName = (h) => h.split("=", 1)[0] ?? "";
function findInterpreterEntrypointToken(h, W) {
	if (!isInterpreterProcessName(W)) return null;
	for (let G = 1; G < h.length; G += 1) {
		let K = h[G];
		if (K !== "--") {
			if (isPythonProcessName(W) && K === "-m") return h[G + 1] ?? null;
			if (K.startsWith("-")) {
				let h = optionName(K);
				if (INTERPRETER_OPTIONS_WITH_INLINE_SOURCE.has(h)) return null;
				INTERPRETER_OPTIONS_WITH_VALUE.has(h) && h === K && (G += 1);
				continue;
			}
			if (tokenLooksExecutable(K, G, W)) return K;
		}
	}
	return null;
}
function comparablePath(h) {
	return h.trim().replace(/^["']|["']$/g, "").replace(/\\/g, "/").toLowerCase();
}
function recognizeNodeScriptEntrypoint(h) {
	let W = comparablePath(h);
	for (let h of EXACT_NODE_ENTRYPOINT_IDENTITIES) if (h.pattern.test(W)) return {
		agent: h.agent,
		processName: h.processName
	};
	let G = normalizeProcessName(h, { stripInterpreterScriptExtension: !0 }), K = NODE_PACKAGE_SCRIPT_ENTRYPOINTS[G];
	return !K || !K.some((h) => W.includes(h)) ? null : recognizedAgentForProcess(G);
}
function recognizePythonModule(h) {
	return !h || h.startsWith("-") ? null : recognizedAgentForProcess(h.split(".", 1)[0]?.toLowerCase() ?? "");
}
function recognizePythonScriptEntrypoint(h) {
	let W = comparablePath(h);
	return !PYTHON_SCRIPT_EXTENSION_RE.test(W) || !PYTHON_SCRIPT_ENTRYPOINT_DIRECTORIES.some((h) => W.includes(h)) ? null : recognizedAgentForProcess((W.split("/").pop() ?? "").replace(PYTHON_SCRIPT_EXTENSION_RE, ""));
}
function recognizePythonEntrypoint(h, W) {
	let G = h.indexOf("-m");
	return G > 0 ? recognizePythonModule(h[G + 1]) : recognizeAgentProcess(W) ?? recognizePythonScriptEntrypoint(W);
}
function isExpectedAgentProcess(h, W) {
	let G = normalizeProcessName(h), K = normalizeProcessName(W);
	return !G || !K ? !1 : G === K || G.startsWith(`${K}.`);
}
function recognizeAgentProcess(h) {
	return recognizedAgentForProcess(normalizeProcessName(h));
}
function recognizeAgentProcessFromCommandLine(W, G) {
	if (!W) return null;
	if (isFreshOmpLaunchCommand(W)) return recognizedAgentForProcess("omp");
	let K = G?.includeHeadlessOneShot === !0, q = tokenizeCommandLine(W), J = normalizeProcessName(q[0]), Y = recognizedAgentForProcess(J);
	Y?.agent === "claude-agent-teams" && q[1]?.toLowerCase() !== "claude-teams" && (Y = null);
	let X = K ? Y : filterHeadlessOneShotAgentCommand(Y, q);
	if (X) return X;
	let Z = findInterpreterEntrypointToken(q, J);
	if (!Z) return null;
	let Q = isPythonProcessName(J) ? recognizePythonEntrypoint(q, Z) : recognizeAgentProcess(Z) ?? recognizeNodeScriptEntrypoint(Z);
	return Q?.agent === "claude-agent-teams" && q[q.indexOf(Z, 1) + 1]?.toLowerCase() !== "claude-teams" ? null : K ? Q : filterHeadlessOneShotAgentCommand(Q, q);
}
function isAgentForegroundWrapperProcess(h) {
	let W = normalizeProcessName(h);
	return FOREGROUND_AGENT_WRAPPER_PROCESS_NAMES.has(W) || PYTHON_PROCESS_RE.test(W);
}
function isRecognizedAgentType(h) {
	return typeof h == "string" ? AGENT_TYPE_IDS.has(h) || agentForNormalizedProcess(normalizeProcessName(h)) !== void 0 : !1;
}
export { recognizeAgentProcessFromCommandLine as a, isRemoteRuntimePtyId as c, isClientOnlyUnverifiableInspection as d, recognizeAgentProcess as i, sendRuntimePtyInput as l, isExpectedAgentProcess as n, confirmRuntimeTerminalForegroundProcess as o, isRecognizedAgentType as r, inspectRuntimeTerminalProcess as s, isAgentForegroundWrapperProcess as t, sendRuntimePtyInputVerified as u };
