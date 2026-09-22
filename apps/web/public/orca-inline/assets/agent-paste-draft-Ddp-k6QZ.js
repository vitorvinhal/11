import { $c as isFreshOmpLaunchCommand, CS as getTuiAgentLaunchCommand, Nc as subscribeToRuntimeTerminalData, Pp as replayPreHandlerPtyData, Qx as parseClaudeModelList, Xx as CLAUDE_MODEL_LIST_ARGS, Zx as CLAUDE_MODEL_LIST_STDIN, cx as buildShellCommandFromArgv, dl as getAgentResumeArgv, dx as isPosixStartupShell, ec as ensurePtyDispatcher, el as withFreshOmpLaunch, fx as planAgentCliArgsSuffix, hx as tokenizeStartupCommand, lx as clearEnvCommand, mx as resolveStartupShell, nu as classifyTitleActivity, oS as parseOmpModelList, ou as isShellProcess, pc as ptyDataSidecars, px as quoteStartupArg, sS as labelFromModelId, t as useAppStore, tl as withOmpDraftCleanup, ux as commandSeparator, xS as TUI_AGENT_CONFIG, zf as getSettingsForWorktreeRuntimeOwner } from "./store-C9f8FDJV.js";
import { E as yieldToEventLoop, T as readUtf8CodePointAt, x as getUtf8ByteLengthForCodePoint } from "./renderer-app-platform--nJ6HYmL.js";
import { c as isRemoteRuntimePtyId, n as isExpectedAgentProcess, s as inspectRuntimeTerminalProcess, u as sendRuntimePtyInputVerified } from "./agent-process-recognition-BUFJTuDF.js";
function agentDeliversDraftViaNativePrefill(d, B) {
	if (B) return !1;
	let V = d ? TUI_AGENT_CONFIG[d] : null;
	return !!(V?.draftPromptFlag || V?.draftPromptEnvVar);
}
var DEFAULT_DRAFT_PASTE_READY_TIMEOUT_MS = 8e3;
function resolveDraftPasteReadyTimeoutMs(d, B) {
	return B ?? (d ? TUI_AGENT_CONFIG[d].draftPasteReadyTimeoutMs : void 0) ?? DEFAULT_DRAFT_PASTE_READY_TIMEOUT_MS;
}
var interruptedBracketedPasteTerminals = /* @__PURE__ */ new WeakSet(), bracketedPasteModeOutputTail = /* @__PURE__ */ new WeakMap(), ESCAPE = "\x1B";
const BRACKETED_PASTE_START = `${ESCAPE}[200~`, BRACKETED_PASTE_END = `${ESCAPE}[201~`;
var BRACKETED_PASTE_MODE_SEQUENCE_RE = /^\[\?(?:\d+;)*2004(?:;\d+)*[hl]/, BRACKETED_PASTE_MODE_TAIL_MAX = 128, BRACKETED_PASTE_MODE_SEQUENCE_SCAN_MAX = BRACKETED_PASTE_MODE_TAIL_MAX, LINE_BREAK_RE = /[\r\n]/;
function hasBracketedPasteModeSequence(d) {
	let B = d.indexOf(ESCAPE);
	for (; B !== -1;) {
		let V = B + 1;
		if (d.charCodeAt(V) === 91 && BRACKETED_PASTE_MODE_SEQUENCE_RE.test(d.slice(V, V + BRACKETED_PASTE_MODE_SEQUENCE_SCAN_MAX))) return !0;
		B = d.indexOf(ESCAPE, B + 1);
	}
	return !1;
}
function sanitizeBracketedPasteText(d) {
	let B = d.indexOf(ESCAPE);
	if (B === -1) return d;
	let V = "", H = 0;
	for (; B !== -1;) V += `${d.slice(H, B)}\u241b`, H = B + 1, B = d.indexOf(ESCAPE, H);
	return V + d.slice(H);
}
function sanitizeTerminalPasteText(d) {
	return sanitizeBracketedPasteText(d);
}
function normalizeTerminalPasteLineEndings(d) {
	return d.replace(/\r?\n/g, "\r");
}
function wrapTerminalBracketedPasteText(d) {
	return `${BRACKETED_PASTE_START}${sanitizeBracketedPasteText(normalizeTerminalPasteLineEndings(d))}${BRACKETED_PASTE_END}`;
}
function encodeWindowsInputRecordPasteText(d, B) {
	let V = B === "csi-u" ? "\x1B[13;2u" : "\x1B\r", H = "";
	for (let B = 0; B < d.length; B += 1) {
		let U = d[B];
		U === "\r" ? (H += V, d[B + 1] === "\n" && (B += 1)) : U === "\n" ? H += V : H += U === ESCAPE ? "␛" : U;
	}
	return H;
}
function forceBracketedPaste(d, B) {
	d.input(wrapTerminalBracketedPasteText(B));
}
function markTerminalBracketedPasteInterrupted(d) {
	d.modes.bracketedPasteMode && interruptedBracketedPasteTerminals.add(d);
}
function observeTerminalBracketedPasteModeOutput(d, B) {
	if (!interruptedBracketedPasteTerminals.has(d)) {
		bracketedPasteModeOutputTail.delete(d);
		return;
	}
	let V = (bracketedPasteModeOutputTail.get(d) ?? "") + B;
	bracketedPasteModeOutputTail.set(d, V.slice(-BRACKETED_PASTE_MODE_TAIL_MAX)), hasBracketedPasteModeSequence(V) && (interruptedBracketedPasteTerminals.delete(d), bracketedPasteModeOutputTail.delete(d));
}
function pasteTerminalText(d, B, V) {
	if (V?.windowsInputRecordNewline) {
		d.input(encodeWindowsInputRecordPasteText(B, V.windowsInputRecordNewline));
		return;
	}
	if (V?.forceBracketedPaste) {
		forceBracketedPaste(d, B);
		return;
	}
	if (!interruptedBracketedPasteTerminals.has(d)) {
		d.paste(B);
		return;
	}
	if (!d.modes.bracketedPasteMode) {
		interruptedBracketedPasteTerminals.delete(d), bracketedPasteModeOutputTail.delete(d), d.paste(B);
		return;
	}
	if (LINE_BREAK_RE.test(B)) {
		d.paste(B);
		return;
	}
	let H = d.options.ignoreBracketedPasteMode;
	d.options.ignoreBracketedPasteMode = !0;
	try {
		d.paste(sanitizeTerminalPasteText(B));
	} finally {
		d.options.ignoreBracketedPasteMode = H;
	}
}
var transactionTails = /* @__PURE__ */ new Map();
async function runTerminalPtyInputTransaction(d, B) {
	if (!d) return await B();
	let V = transactionTails.get(d), H, U = new Promise((d) => {
		H = d;
	});
	transactionTails.set(d, U), V && await V;
	try {
		return await B();
	} finally {
		H(), transactionTails.get(d) === U && transactionTails.delete(d);
	}
}
function buildSleepingAgentLaunchConfig(d) {
	return {
		...d.agentCommand?.trim() ? { agentCommand: d.agentCommand } : {},
		agentArgs: d.agentArgs ?? "",
		agentEnv: d.agentEnv ? { ...d.agentEnv } : {},
		...d.ompResumeFilePath?.trim() ? { ompResumeFilePath: d.ompResumeFilePath.trim() } : {}
	};
}
function encodePowerShellCommand(d) {
	let B = "";
	for (let V = 0; V < d.length; V += 1) {
		let H = d.charCodeAt(V);
		B += String.fromCharCode(H & 255, H >>> 8);
	}
	return btoa(B);
}
var QUERY_ENV_LIMIT = 24e3, QUERY_ARG_PLACEHOLDER = "--query=__ORCA_HERMES_STARTUP_QUERY__", POSIX_QUERY_VARIABLE = "__orca_hermes_startup_query", POWERSHELL_QUERY_VARIABLE = "orcaHermesStartupQuery", POWERSHELL_NATIVE_QUERY_VARIABLE = "orcaHermesNativeQuery";
const ORCA_HERMES_STARTUP_QUERY_ENV = "ORCA_HERMES_STARTUP_QUERY";
function encodePosixEvalScript(d) {
	return Array.from(new TextEncoder().encode(d), (d) => `\\0${d.toString(8).padStart(3, "0")}`).join("");
}
function tokenizeCommand(d, B) {
	let V = tokenizeStartupCommand(d, B);
	return V.ok && V.tokens.length > 0 ? V.tokens : null;
}
function isHermesExecutableToken(d) {
	let B = d.replaceAll("\\", "/").split("/").pop()?.toLowerCase() ?? "";
	return B === "hermes" || B === "hermes.exe" || B === "hermes.cmd";
}
var HERMES_VALUELESS_FLAGS = new Set([
	"--tui",
	"--cli",
	"--verbose",
	"-v",
	"--quiet",
	"-Q",
	"--worktree",
	"-w",
	"--accept-hooks",
	"--checkpoints",
	"--yolo",
	"--pass-session-id",
	"--ignore-user-config",
	"--ignore-rules",
	"--safe-mode",
	"--dev"
]);
function findChatSubcommand(d) {
	for (let B = 0; B < d.length; B += 1) {
		let V = d[B];
		if (V === "chat") return B;
		V.startsWith("-") && !V.includes("=") && !HERMES_VALUELESS_FLAGS.has(V) && (B += 1);
	}
	return -1;
}
function stripOrcaOwnedHermesArgs(d) {
	let B = [];
	for (let V = 0; V < d.length; V += 1) {
		let H = d[V];
		if (H === "--query" || H === "-q") {
			V += 1;
			continue;
		}
		H.startsWith("--query=") || H.startsWith("-q=") || H.startsWith("-q") && H.length > 2 || H === "--tui" || H === "--cli" || B.push(H);
	}
	return B;
}
function normalizeHermesArgv(d, B, V) {
	let H = [];
	for (let B = 0; B < d.length; B += 1) isHermesExecutableToken(d[B]) && H.push(B);
	let U;
	for (let B of H) findChatSubcommand(d.slice(B + 1)) !== -1 && (U = B);
	let W = U ?? H.at(-1) ?? -1;
	if (W === -1) return null;
	let G = d.slice(0, W + 1), K = 0;
	for (; /^[A-Za-z_][A-Za-z0-9_]*=/.test(G[K] ?? "");) K += 1;
	if (K > 0) {
		if (!isPosixStartupShell(V)) return null;
		G = ["env", ...G];
	}
	let q = d.slice(W + 1), Y = findChatSubcommand(q), X = Y === -1 ? q : q.filter((d, B) => B !== Y), Z = findChatSubcommand(B), Q = Z === -1 ? B : B.filter((d, B) => B !== Z);
	return [
		...G,
		"chat",
		QUERY_ARG_PLACEHOLDER,
		...stripOrcaOwnedHermesArgs(X),
		...stripOrcaOwnedHermesArgs(Q),
		"--tui"
	];
}
function buildQueryCommand(d, B) {
	return isPosixStartupShell(B) ? `sh -c ${quoteStartupArg(`${POSIX_QUERY_VARIABLE}="\${${ORCA_HERMES_STARTUP_QUERY_ENV}}"; unset ${ORCA_HERMES_STARTUP_QUERY_ENV}; eval "$(printf %b "${encodePosixEvalScript(buildShellCommandFromArgv(d, "posix").replace(quoteStartupArg(QUERY_ARG_PLACEHOLDER, "posix"), `"--query=\${${POSIX_QUERY_VARIABLE}}"`))}")"`, B)}` : `powershell.exe -NoProfile -EncodedCommand ${encodePowerShellCommand(`$${POWERSHELL_QUERY_VARIABLE} = $env:${ORCA_HERMES_STARTUP_QUERY_ENV}; $${POWERSHELL_NATIVE_QUERY_VARIABLE} = $${POWERSHELL_QUERY_VARIABLE} -replace '(\\\\*)"', '$1$1\\"'; Remove-Item Env:${ORCA_HERMES_STARTUP_QUERY_ENV} -ErrorAction SilentlyContinue; ${buildShellCommandFromArgv(d, "powershell").replace(quoteStartupArg(QUERY_ARG_PLACEHOLDER, "powershell"), `"--query=$${POWERSHELL_NATIVE_QUERY_VARIABLE}"`)}`)}`;
}
function planHermesStartupQuery(d) {
	let B = tokenizeCommand(d.baseCommand, d.shell), V = d.agentArgs?.trim() ? tokenizeCommand(d.agentArgs, d.shell) : [];
	if (!B || !V) return null;
	let H = normalizeHermesArgv(B, V, d.shell);
	if (!H) return null;
	let U = buildQueryCommand(H, d.shell), W = {
		...d.agentEnv,
		[ORCA_HERMES_STARTUP_QUERY_ENV]: d.prompt
	}, G = Object.entries(W).reduce((B, [V, H]) => d.platform === "win32" ? B + V.length + H.length + 2 : B + new TextEncoder().encode(`${V}=${H}`).byteLength + 1, 0);
	return (d.platform === "win32" ? U.length : new TextEncoder().encode(U).byteLength) + G <= QUERY_ENV_LIMIT ? {
		command: U,
		env: W
	} : null;
}
var WIN32_INLINE_DRAFT_LIMIT_CHARS = 24e3;
function inlineAgentDraftFitsPlatform(d) {
	if (d.platform !== "win32") return !0;
	let B = Object.entries(d.env ?? {}).reduce((d, [B, V]) => d + B.length + V.length, 0);
	return d.command.length + B <= WIN32_INLINE_DRAFT_LIMIT_CHARS;
}
function agentArgOptionTokens(d) {
	let B = d.indexOf("--");
	return B === -1 ? d : d.slice(0, B);
}
function removeAgentArgOption(d, B) {
	let V = [];
	for (let H = 0; H < d.length; H += 1) {
		let U = d[H];
		if (U === "--") {
			V.push(...d.slice(H));
			break;
		}
		let W = B.includes(U), G = B.some((d) => U.startsWith(`${d}=`) || d.startsWith("-") && !d.startsWith("--") && U.startsWith(d) && U.length > d.length);
		if (!W && !G) {
			V.push(U);
			continue;
		}
		W && d[H + 1] && !d[H + 1].startsWith("-") && (H += 1);
	}
	return V;
}
function hasFlag(d, B) {
	return agentArgOptionTokens(d).some((d) => B.some((B) => d === B || d.startsWith(`${B}=`) || B.startsWith("-") && !B.startsWith("--") && d.startsWith(B)));
}
function hasCodexEffortOverride(d) {
	if (hasFlag(d, ["--reasoning-effort"])) return !0;
	let B = agentArgOptionTokens(d);
	return B.some((d, V) => {
		let H = B[V - 1];
		return d.startsWith("model_reasoning_effort=") && (H === "-c" || H === "--config") || d.startsWith("-cmodel_reasoning_effort=") || d.startsWith("-c=model_reasoning_effort=") || d.startsWith("--config=model_reasoning_effort=");
	});
}
function removeCodexEffortOverride(d) {
	let B = removeAgentArgOption(d, ["--reasoning-effort"]), V = [];
	for (let d = 0; d < B.length; d += 1) {
		let H = B[d];
		if (H === "--") {
			V.push(...B.slice(d));
			break;
		}
		let U = B[d + 1];
		if ((H === "-c" || H === "--config") && U?.startsWith("model_reasoning_effort=")) {
			d += 1;
			continue;
		}
		H.startsWith("-cmodel_reasoning_effort=") || H.startsWith("-c=model_reasoning_effort=") || H.startsWith("--config=model_reasoning_effort=") || V.push(H);
	}
	return V;
}
var STANDARD_EFFORT_CHOICES = [
	{
		value: "low",
		label: "Low"
	},
	{
		value: "medium",
		label: "Medium"
	},
	{
		value: "high",
		label: "High"
	}
], EXTENDED_EFFORT_CHOICES = [
	...STANDARD_EFFORT_CHOICES,
	{
		value: "xhigh",
		label: "Extra high"
	},
	{
		value: "max",
		label: "Max"
	}
];
function claudeEffort(d) {
	return claudeEffortWithChoices(d ? EXTENDED_EFFORT_CHOICES : STANDARD_EFFORT_CHOICES);
}
function claudeEffortWithChoices(d) {
	return {
		id: "effort",
		label: "Effort",
		category: "thought_level",
		kind: {
			type: "select",
			choices: d,
			defaultValue: d.some((d) => d.value === "high") ? "high" : d[0]?.value ?? "high"
		},
		apply: {
			launchArgs: (d) => ["--effort", String(d)],
			agentArgsOverride: (d) => hasFlag(d, ["--effort"]),
			removeAgentArgs: (d) => removeAgentArgOption(d, ["--effort"]),
			midSession: {
				kind: "command",
				build: (d) => `/effort ${String(d)}`
			}
		}
	};
}
function createClaudeCatalogOptions(d) {
	let B = EXTENDED_EFFORT_CHOICES.filter((B) => d.effortLevelIds.includes(B.value));
	return [...B.length > 0 ? [claudeEffortWithChoices(B)] : [], ...d.supportsFastMode ? [CLAUDE_FAST_MODE] : []];
}
function parseClaudeCatalogModels(d) {
	return parseClaudeModelList(d).map((d) => ({
		id: d.id,
		label: d.label,
		...d.description ? { description: d.description } : {},
		options: createClaudeCatalogOptions({
			effortLevelIds: d.effortLevels,
			supportsFastMode: d.supportsFastMode
		})
	}));
}
var CLAUDE_FAST_MODE = {
	id: "fastMode",
	label: "Fast mode",
	category: "mode",
	kind: {
		type: "boolean",
		defaultValue: !1
	},
	apply: { midSession: {
		kind: "toggle-command",
		command: "/fast"
	} }
};
const CLAUDE_SESSION_OPTION_CATALOG = {
	supportsWorkerLaunchPreferences: !0,
	models: [
		{
			id: "fable",
			label: "Fable",
			description: "Most capable for the hardest, longest-running tasks",
			options: [claudeEffort(!0)]
		},
		{
			id: "opus",
			label: "Opus",
			description: "Best for everyday, complex tasks",
			options: [claudeEffort(!0), CLAUDE_FAST_MODE]
		},
		{
			id: "sonnet",
			label: "Sonnet",
			description: "Efficient for routine tasks",
			isDefault: !0,
			options: [claudeEffort(!0)]
		},
		{
			id: "haiku",
			label: "Haiku",
			description: "Fastest for quick answers",
			options: []
		}
	],
	modelApply: {
		launchArgs: (d) => ["--model", String(d)],
		agentArgsOverride: (d) => hasFlag(d, ["--model"]),
		removeAgentArgs: (d) => removeAgentArgOption(d, ["--model"]),
		midSession: {
			kind: "command",
			build: (d) => `/model ${String(d)}`,
			pickerCommand: "/model",
			detectAgentInteraction: "claude-model-switch-confirmation"
		}
	},
	unknownModelOptions: [claudeEffort(!0)],
	listModels: {
		command: `echo '${CLAUDE_MODEL_LIST_STDIN.trim()}' | claude ${CLAUDE_MODEL_LIST_ARGS.join(" ")}`,
		parse: parseClaudeCatalogModels
	}
};
var CODEX_EFFORT_CHOICES = [
	{
		value: "minimal",
		label: "Minimal"
	},
	{
		value: "low",
		label: "Low"
	},
	{
		value: "medium",
		label: "Medium"
	},
	{
		value: "high",
		label: "High"
	},
	{
		value: "xhigh",
		label: "Extra high"
	},
	{
		value: "max",
		label: "Max"
	},
	{
		value: "ultra",
		label: "Ultra"
	}
];
function codexEffort(d) {
	let B = CODEX_EFFORT_CHOICES.findIndex((B) => B.value === d);
	return {
		id: "effort",
		label: "Reasoning effort",
		category: "thought_level",
		kind: {
			type: "select",
			choices: CODEX_EFFORT_CHOICES.slice(0, B + 1),
			defaultValue: "medium"
		},
		apply: {
			launchArgs: (d) => ["-c", `model_reasoning_effort=${String(d)}`],
			agentArgsOverride: hasCodexEffortOverride,
			removeAgentArgs: removeCodexEffortOverride,
			midSession: {
				kind: "agent-picker",
				command: "/model",
				delivery: "type"
			}
		}
	};
}
const CODEX_SESSION_OPTION_CATALOG = {
	supportsWorkerLaunchPreferences: !0,
	models: [
		{
			id: "gpt-5.6-sol",
			label: "GPT-5.6 Sol",
			options: [codexEffort("ultra")]
		},
		{
			id: "gpt-5.6-terra",
			label: "GPT-5.6 Terra",
			options: [codexEffort("ultra")]
		},
		{
			id: "gpt-5.6-luna",
			label: "GPT-5.6 Luna",
			options: [codexEffort("max")]
		},
		{
			id: "gpt-5.5",
			label: "GPT-5.5",
			options: [codexEffort("xhigh")]
		},
		{
			id: "gpt-5.2-codex",
			label: "GPT-5.2 Codex",
			options: [codexEffort("xhigh")]
		}
	],
	modelApply: {
		launchArgs: (d) => ["-m", String(d)],
		agentArgsOverride: (d) => hasFlag(d, ["-m", "--model"]),
		removeAgentArgs: (d) => removeAgentArgOption(d, ["-m", "--model"]),
		midSession: {
			kind: "agent-picker",
			command: "/model",
			delivery: "type"
		}
	},
	unknownModelOptions: [codexEffort("xhigh")]
};
var hasModelFlag = (d) => hasFlag(d, ["-m", "--model"]);
const GEMINI_SESSION_OPTION_CATALOG = {
	models: [
		{
			id: "gemini-3-pro-preview",
			label: "Gemini 3 Pro Preview",
			options: []
		},
		{
			id: "gemini-3-flash-preview",
			label: "Gemini 3 Flash Preview",
			options: []
		},
		{
			id: "gemini-2.5-pro",
			label: "Gemini 2.5 Pro",
			options: []
		},
		{
			id: "gemini-2.5-flash",
			label: "Gemini 2.5 Flash",
			options: []
		}
	],
	modelApply: {
		launchArgs: (d) => ["-m", String(d)],
		agentArgsOverride: hasModelFlag,
		midSession: {
			kind: "agent-picker",
			command: "/model"
		}
	}
};
var CURSOR_EFFORT = {
	id: "effort",
	label: "Effort",
	category: "thought_level",
	kind: {
		type: "select",
		choices: [
			{
				value: "low",
				label: "Low"
			},
			{
				value: "medium",
				label: "Medium"
			},
			{
				value: "high",
				label: "High"
			}
		],
		defaultValue: "high"
	},
	apply: { composedIntoModel: !0 }
}, CURSOR_FAST = {
	id: "fastMode",
	label: "Fast mode",
	category: "mode",
	kind: {
		type: "boolean",
		defaultValue: !1
	},
	apply: { composedIntoModel: !0 }
}, CURSOR_THINKING = {
	id: "thinking",
	label: "Thinking",
	category: "model_config",
	kind: {
		type: "boolean",
		defaultValue: !0
	},
	apply: { composedIntoModel: !0 }
};
function parseCursorModels(d) {
	let B = /* @__PURE__ */ new Set(), V = [];
	for (let H of d.split(/\r?\n/)) {
		let d = H.trim().match(/^(?:[-*]\s+)?([a-z0-9][a-z0-9._-]*)(?:\s+\(.*\))?$/i)?.[1];
		!d || d.toLowerCase() === "models" || B.has(d) || (B.add(d), V.push({
			id: d,
			label: d === "auto" ? "Auto" : d,
			options: []
		}));
	}
	return V;
}
const CURSOR_SESSION_OPTION_CATALOG = {
	supportsWorkerLaunchPreferences: !0,
	models: [
		{
			id: "auto",
			label: "Auto",
			isDefault: !0,
			options: []
		},
		{
			id: "gpt-5.3-codex",
			label: "GPT-5.3 Codex",
			options: [CURSOR_EFFORT, CURSOR_FAST]
		},
		{
			id: "claude-opus-4-8",
			label: "Claude Opus 4.8",
			options: [CURSOR_THINKING, CURSOR_EFFORT]
		}
	],
	modelApply: {
		launchArgs: (d) => ["--model", String(d)],
		agentArgsOverride: hasModelFlag,
		removeAgentArgs: (d) => removeAgentArgOption(d, ["-m", "--model"]),
		midSession: {
			kind: "command",
			build: (d) => `/model ${String(d)}`
		}
	},
	composeModelValue: (d, B) => d === "auto" ? d : d.startsWith("claude-") ? `${d}${B.thinking === !0 ? "-thinking" : ""}${typeof B.effort == "string" ? `-${B.effort}` : ""}` : `${d}${typeof B.effort == "string" ? `-${B.effort}` : ""}${B.fastMode === !0 ? "-fast" : ""}`,
	listModels: {
		command: "cursor-agent models",
		parse: parseCursorModels
	}
};
var AVAILABLE_MODELS_HEADER = "Available models:", MODEL_BULLET = /^\s*[*-]\s+([^\s(]+)(.*)$/, DEFAULT_MARKER = /\(default\)/;
function parseGrokModelList(d) {
	let B = d.split(/\r?\n/), V = B.findIndex((d) => d.trim() === AVAILABLE_MODELS_HEADER);
	if (V === -1) return [];
	let H = /* @__PURE__ */ new Map();
	for (let d of B.slice(V + 1)) {
		if (d.trim() === "" && H.size > 0) break;
		let B = MODEL_BULLET.exec(d), V = B?.[1];
		if (!V) continue;
		let U = H.get(V) ?? {
			id: V,
			label: labelFromModelId(V)
		};
		DEFAULT_MARKER.test(B[2]) && (U.isDefault = !0), H.set(V, U);
	}
	return [...H.values()];
}
var GROK_EFFORT_CHOICES = [
	{
		value: "low",
		label: "Low"
	},
	{
		value: "medium",
		label: "Medium"
	},
	{
		value: "high",
		label: "High"
	},
	{
		value: "xhigh",
		label: "Extra high"
	}
];
function grokEffort(d) {
	let B = GROK_EFFORT_CHOICES.findIndex((B) => B.value === d);
	return {
		id: "effort",
		label: "Reasoning effort",
		category: "thought_level",
		kind: {
			type: "select",
			choices: GROK_EFFORT_CHOICES.slice(0, B + 1),
			defaultValue: "high"
		},
		apply: {
			launchArgs: (d) => ["--reasoning-effort", String(d)],
			agentArgsOverride: (d) => hasFlag(d, ["--effort", "--reasoning-effort"]),
			midSession: {
				kind: "command",
				build: (d) => `/effort ${String(d)}`
			}
		}
	};
}
function parseGrokCatalogModels(d) {
	return parseGrokModelList(d).map((d) => ({
		...d,
		options: []
	}));
}
const GROK_SESSION_OPTION_CATALOG = {
	models: [{
		id: "grok-4.6",
		label: "Grok 4.6",
		description: "xAI's latest frontier model",
		isDefault: !0,
		options: [grokEffort("xhigh")]
	}, {
		id: "grok-4.5",
		label: "Grok 4.5",
		description: "xAI's previous frontier model",
		options: [grokEffort("high")]
	}],
	modelApply: {
		launchArgs: (d) => ["-m", String(d)],
		agentArgsOverride: (d) => hasFlag(d, ["-m", "--model"]),
		midSession: {
			kind: "command",
			build: (d) => `/model ${String(d)}`
		}
	},
	unknownModelOptions: [grokEffort("xhigh")],
	discoveredModelsAreAuthoritative: !0,
	defaultModelIsCliDefault: !0,
	listModels: {
		command: "grok models",
		parse: parseGrokCatalogModels
	}
};
function parseOmpCatalogModels(d) {
	return parseOmpModelList(d).map((d) => ({
		...d,
		options: []
	}));
}
var CATALOGS = {
	claude: CLAUDE_SESSION_OPTION_CATALOG,
	codex: CODEX_SESSION_OPTION_CATALOG,
	gemini: GEMINI_SESSION_OPTION_CATALOG,
	cursor: CURSOR_SESSION_OPTION_CATALOG,
	grok: GROK_SESSION_OPTION_CATALOG,
	omp: {
		models: [],
		modelApply: {
			launchArgs: (d) => ["--model", String(d)],
			agentArgsOverride: (d) => hasFlag(d, ["--model"]),
			midSession: {
				kind: "command",
				build: (d) => `/orca-model ${String(d)}`
			}
		},
		discoveredModelsAreAuthoritative: !0,
		listModels: {
			command: "omp models --json",
			parse: parseOmpCatalogModels
		}
	}
};
function getAgentSessionOptionCatalog(d) {
	return CATALOGS[d] ?? null;
}
function findCatalogModel(d, B) {
	return d.models.find((d) => d.id === B);
}
function findCatalogOption(d, B) {
	return d?.options.find((d) => d.id === B);
}
function mergeCatalogModels(d, B) {
	let V = new Map(B.map((d) => [d.id, d]));
	return [...d.map((d) => {
		let B = V.get(d.id);
		return B ? (V.delete(d.id), {
			...d,
			...B,
			options: d.options
		}) : d;
	}), ...V.values()];
}
function mergeDiscoveredAuthoritativeModels(d, B) {
	let V = (d.find((d) => d.isDefault) ?? d[0])?.options ?? [];
	return B.map((B) => {
		let H = d.find((d) => d.id === B.id), { isDefault: U, ...W } = H ? {
			...H,
			...B,
			options: H.options
		} : {
			...B,
			options: V
		};
		return B.isDefault ? {
			...W,
			isDefault: !0
		} : W;
	});
}
function sessionOptionValueIsValid(d) {
	return typeof d == "string" || typeof d == "boolean";
}
function removeOverriddenAgentSessionArgs(d, B, V) {
	let H = getAgentSessionOptionCatalog(d), U = typeof B?.model == "string" ? B.model : null;
	if (!H || !B || !U) return [...V];
	let W = H.modelApply.removeAgentArgs?.(V) ?? [...V], G = findCatalogModel(H, U)?.options ?? H.unknownModelOptions ?? [];
	for (let d of G) B[d.id] !== void 0 && d.apply.removeAgentArgs && (W = d.apply.removeAgentArgs(W));
	return W;
}
function resolveAgentSessionOptionLaunch(d, B, V = [], H = !0) {
	let U = getAgentSessionOptionCatalog(d), W = typeof B?.model == "string" ? B.model : null;
	if (!U || !B || !W) return {
		args: [],
		appliedValues: {}
	};
	let G = findCatalogModel(U, W), K = {}, q = [], J = G?.options ?? U.unknownModelOptions ?? [], Y = Object.fromEntries(J.flatMap((d) => {
		let V = B[d.id];
		return V === void 0 ? G && H ? [[d.id, d.kind.defaultValue]] : [] : !G && d.kind.type === "select" && !d.kind.choices.some((d) => d.value === V) ? [] : [[d.id, V]];
	})), X = U.composeModelValue ? U.composeModelValue(W, Y) : W, Z = U.modelApply.agentArgsOverride?.(V) === !0;
	U.modelApply.launchArgs && (q.push(...U.modelApply.launchArgs(X)), Z || (K.model = W));
	for (let d of J) {
		let B = Y[d.id];
		if (B !== void 0) {
			if (d.apply.composedIntoModel) {
				U.modelApply.launchArgs && !Z && (K[d.id] = B);
				continue;
			}
			d.apply.launchArgs && (q.push(...d.apply.launchArgs(B)), !Z && !d.apply.agentArgsOverride?.(V) && (K[d.id] = B));
		}
	}
	return {
		args: q,
		appliedValues: K
	};
}
function resolveAgentLaunchCommand(d) {
	let V = d.cmdOverrides[d.agent], H = V || getTuiAgentLaunchCommand(TUI_AGENT_CONFIG[d.agent], d.platform, { isRemote: d.isRemote }), U = planAgentCliArgsSuffix(d.agentArgs, d.shell);
	if (!U.ok) return U;
	let W = d.agentArgs?.trim() ? tokenizeStartupCommand(d.agentArgs.trim(), d.shell) : {
		ok: !0,
		tokens: [],
		spans: []
	};
	if (!W.ok) return {
		ok: !1,
		error: `CLI arguments are invalid: ${W.error}`
	};
	let G = resolveAgentSessionOptionLaunch(d.agent, d.sessionOptions, d.sessionOptionsOverrideAgentArgs ? [] : W.tokens, !d.sessionOptionsOverrideAgentArgs);
	if (V && d.sessionOptionsOverrideAgentArgs) {
		let B = tokenizeStartupCommand(V, d.shell);
		if (!B.ok) return {
			ok: !1,
			error: `Agent command override is invalid: ${B.error}`
		};
		let H = resolveAgentSessionOptionLaunch(d.agent, d.sessionOptions, B.tokens, !1);
		if (Object.entries(G.appliedValues).some(([d, B]) => H.appliedValues[d] !== B)) return {
			ok: !1,
			error: "Agent command override conflicts with the requested launch preferences. Remove model or effort flags from the command override."
		};
	}
	let K = G.args.map((B) => quoteStartupArg(B, d.shell)).join(" "), q = U.suffix ? `${H} ${U.suffix}` : H, J = K ? `${H} ${K}` : H, Y = d.sessionOptionsOverrideAgentArgs ? insertBeforeTerminator(removeOverriddenAgentSessionArgs(d.agent, d.sessionOptions, W.tokens), G.args) : [], X = Y.length ? `${H} ${Y.map((B) => quoteStartupArg(B, d.shell)).join(" ")}` : H;
	return {
		ok: !0,
		command: d.sessionOptionsOverrideAgentArgs ? X : U.suffix ? `${J} ${U.suffix}` : J,
		commandWithoutSessionOptions: q,
		appliedSessionOptions: G.appliedValues
	};
}
function insertBeforeTerminator(d, B) {
	let V = d.indexOf("--");
	return V === -1 ? [...d, ...B] : [
		...d.slice(0, V),
		...B,
		...d.slice(V)
	];
}
function isClaudeResumeSelector(d) {
	return d === "--resume" || d.startsWith("--resume=") || d === "--continue" || d.startsWith("--continue=") ? !0 : d === "-r" || d.startsWith("-r=") || d === "-c" || d.startsWith("-c=");
}
function isClaudeExecutableToken(d) {
	let B = d.split(/[\\/]/).pop() ?? "";
	return /^claude(\.(exe|cmd|bat|ps1))?$/i.test(B);
}
function findClaudeExecutableIndex(d, B) {
	let V = !0;
	for (let H = 0; H < d.length; H += 1) {
		let U = d[H];
		if (V) {
			if (isClaudeExecutableToken(U)) return H;
			if (isPosixStartupShell(B) && /^[A-Za-z_][A-Za-z0-9_]*=/.test(U) || B === "powershell" && U === "&" && H === 0) continue;
			V = !1;
		}
		U === "--" && (V = !0);
	}
	return -1;
}
function buildAgentResumeLaunchCommand(d, B, V, H) {
	let U = V.slice(1);
	if (d === "claude") return buildClaudeResumeLaunchCommand(B, U, H);
	let W = U.map((d) => quoteStartupArg(d, H)).join(" ");
	return W ? `${B} ${W}` : B;
}
function buildClaudeResumeLaunchCommand(d, B, V) {
	let H = B.map((d) => quoteStartupArg(d, V)).join(" ");
	if (!H) return d;
	let U = `${d} ${H}`, W = tokenizeStartupCommand(d, V);
	if (!W.ok) return U;
	let { tokens: G, spans: K } = W, q = findClaudeExecutableIndex(G, V);
	if (q === -1) return U;
	for (let B = 0; B <= G.length; B += 1) {
		let H = B === 0 ? 0 : K[B - 1].end, W = B === G.length ? d.length : K[B].start;
		if (!/^[ \t]*$/.test(d.slice(H, W))) return U;
		if (B === G.length) break;
		if (V === "powershell" && d.slice(K[B].start, K[B].end) === "--%" || K[B].divergesFromShell && !(V === "powershell" && B === 0 && G[B] === "&")) return U;
	}
	let J = [], Y = null;
	for (let B = q + 1; B < G.length; B += 1) {
		let V = G[B];
		if (V === "--") {
			Y = K[B].start;
			break;
		}
		if (!isClaudeResumeSelector(V)) continue;
		let H = K[B].start;
		for (; H > K[B - 1].end && " 	".includes(d[H - 1]);) --H;
		let U = K[B].end, W = G[B + 1];
		(V === "--resume" || V === "-r") && W !== void 0 && !W.startsWith("-") && (U = K[B + 1].end, B += 1), J.push({
			start: H,
			end: U
		});
	}
	let X = d;
	Y !== null && (X = `${X.slice(0, Y)}${H} ${X.slice(Y)}`);
	for (let d = J.length - 1; d >= 0; --d) X = `${X.slice(0, J[d].start)}${X.slice(J[d].end)}`;
	return Y === null ? `${X} ${H}` : X;
}
function buildAgentResumeStartupPlan(d) {
	let B = getAgentResumeArgv(d.agent, d.providerSession, d.ompResumeFilePath);
	if (!B) return null;
	let V = resolveStartupShell(d.platform, d.shell), H = d.agentCommand?.trim(), U = H ? {
		ok: !0,
		command: H,
		commandWithoutSessionOptions: H,
		appliedSessionOptions: {}
	} : resolveAgentLaunchCommand({
		agent: d.agent,
		cmdOverrides: d.cmdOverrides,
		platform: d.platform,
		shell: V,
		agentArgs: d.agentArgs,
		sessionOptions: d.sessionOptions,
		sessionOptionsOverrideAgentArgs: d.sessionOptionsOverrideAgentArgs,
		isRemote: d.isRemote
	});
	if (!U.ok) return null;
	let W = buildSleepingAgentLaunchConfig({
		...d,
		agentCommand: U.commandWithoutSessionOptions
	}), G = buildAgentResumeLaunchCommand(d.agent, U.command, B, V), K = U.appliedSessionOptions;
	return {
		agent: d.agent,
		launchCommand: G,
		expectedProcess: TUI_AGENT_CONFIG[d.agent].expectedProcess,
		followupPrompt: null,
		launchConfig: W,
		...d.agent === "codex" ? { startupCommandDelivery: "shell-ready" } : {},
		...Object.keys(K).length > 0 ? { sessionOptions: { ...K } } : {},
		...d.agentEnv ? { env: { ...d.agentEnv } } : {}
	};
}
function appliedSessionOptionProps(d) {
	return Object.keys(d).length > 0 ? { sessionOptions: { ...d } } : {};
}
function buildAgentStartupPlan(d) {
	let { agent: B, prompt: V, cmdOverrides: H, platform: U, allowEmptyPromptLaunch: W = !1 } = d, G = resolveStartupShell(U, d.shell), K = V.trim(), q = TUI_AGENT_CONFIG[B], J = resolveAgentLaunchCommand({
		agent: B,
		cmdOverrides: H,
		platform: U,
		shell: G,
		agentArgs: q.promptInjectionMode === "hermes-query" && K ? null : d.agentArgs,
		sessionOptions: d.sessionOptions,
		sessionOptionsOverrideAgentArgs: d.sessionOptionsOverrideAgentArgs,
		isRemote: d.isRemote
	});
	if (!J.ok) return null;
	let Y = B === "omp" ? withFreshOmpLaunch(J.command, G) : J.command, Z = buildSleepingAgentLaunchConfig({
		...d,
		agentCommand: J.commandWithoutSessionOptions
	});
	if (!K) return W ? {
		agent: B,
		launchCommand: Y,
		expectedProcess: q.expectedProcess,
		followupPrompt: null,
		launchConfig: Z,
		...appliedSessionOptionProps(J.appliedSessionOptions),
		...d.agentEnv ? { env: { ...d.agentEnv } } : {}
	} : null;
	let Q = quoteStartupArg(K, G);
	if (q.promptInjectionMode === "argv") {
		let V = q.argvPromptSeparator ? ` ${q.argvPromptSeparator}` : "";
		return {
			agent: B,
			launchCommand: B === "omp" ? withFreshOmpLaunch(J.command, G, `${V} ${Q}`) : `${Y}${V} ${Q}`,
			expectedProcess: q.expectedProcess,
			followupPrompt: null,
			launchConfig: Z,
			...appliedSessionOptionProps(J.appliedSessionOptions),
			...B === "codex" ? { startupCommandDelivery: "shell-ready" } : {},
			...d.agentEnv ? { env: { ...d.agentEnv } } : {}
		};
	}
	if (q.promptInjectionMode === "flag-prompt") return {
		agent: B,
		launchCommand: `${Y} --prompt ${Q}`,
		expectedProcess: q.expectedProcess,
		followupPrompt: null,
		launchConfig: Z,
		...appliedSessionOptionProps(J.appliedSessionOptions),
		...d.agentEnv ? { env: { ...d.agentEnv } } : {}
	};
	if (q.promptInjectionMode === "hermes-query") {
		let V = planHermesStartupQuery({
			baseCommand: J.command,
			agentArgs: d.agentArgs,
			prompt: K,
			agentEnv: d.agentEnv,
			platform: U,
			shell: G,
			isRemote: d.isRemote
		});
		return V ? {
			agent: B,
			launchCommand: V.command,
			expectedProcess: q.expectedProcess,
			followupPrompt: null,
			launchConfig: Z,
			...appliedSessionOptionProps(J.appliedSessionOptions),
			...V.env ? { env: V.env } : {}
		} : null;
	}
	return q.promptInjectionMode === "flag-prompt-interactive" ? {
		agent: B,
		launchCommand: `${Y} --prompt-interactive ${Q}`,
		expectedProcess: q.expectedProcess,
		followupPrompt: null,
		launchConfig: Z,
		...appliedSessionOptionProps(J.appliedSessionOptions),
		...d.agentEnv ? { env: { ...d.agentEnv } } : {}
	} : q.promptInjectionMode === "flag-interactive" ? {
		agent: B,
		launchCommand: `${Y} -i ${Q}`,
		expectedProcess: q.expectedProcess,
		followupPrompt: null,
		launchConfig: Z,
		...appliedSessionOptionProps(J.appliedSessionOptions),
		...d.agentEnv ? { env: { ...d.agentEnv } } : {}
	} : {
		agent: B,
		launchCommand: Y,
		expectedProcess: q.expectedProcess,
		followupPrompt: K,
		launchConfig: Z,
		...appliedSessionOptionProps(J.appliedSessionOptions),
		...d.agentEnv ? { env: { ...d.agentEnv } } : {}
	};
}
function buildAgentDraftLaunchPlan(B) {
	let { agent: V, draft: H, cmdOverrides: U, platform: W } = B, G = resolveStartupShell(W, B.shell), K = TUI_AGENT_CONFIG[V], q = H.trim();
	if (!q) return null;
	let J = resolveAgentLaunchCommand({
		agent: V,
		cmdOverrides: U,
		platform: W,
		shell: G,
		agentArgs: B.agentArgs,
		sessionOptions: B.sessionOptions,
		isRemote: B.isRemote
	});
	if (!J.ok) return null;
	let Y = V === "omp" ? withFreshOmpLaunch(J.command, G) : J.command, Z = buildSleepingAgentLaunchConfig({
		...B,
		agentCommand: J.commandWithoutSessionOptions
	}), Q = null;
	if (K.draftPromptFlag) {
		let d = quoteStartupArg(q, G);
		Q = {
			agent: V,
			launchCommand: `${Y} ${K.draftPromptFlag} ${d}`,
			expectedProcess: K.expectedProcess,
			launchConfig: Z,
			...appliedSessionOptionProps(J.appliedSessionOptions),
			...V === "codex" ? { startupCommandDelivery: "shell-ready" } : {},
			...B.agentEnv ? { env: { ...B.agentEnv } } : {}
		};
	} else if (K.draftPromptEnvVar) {
		let H = clearEnvCommand(K.draftPromptEnvVar, G);
		Q = {
			agent: V,
			launchCommand: V === "omp" && isFreshOmpLaunchCommand(Y) ? withOmpDraftCleanup(Y, G) : `${Y}${commandSeparator(G)}${H}`,
			expectedProcess: K.expectedProcess,
			launchConfig: Z,
			...appliedSessionOptionProps(J.appliedSessionOptions),
			env: {
				...B.agentEnv,
				[K.draftPromptEnvVar]: q
			}
		};
	}
	return !Q || !inlineAgentDraftFitsPlatform({
		command: Q.launchCommand,
		env: Q.env,
		platform: W
	}) ? null : Q;
}
var DEFAULT_TIMEOUT_MS = 5e3, POLL_INTERVAL_MS = 120;
function resolvePrimaryPtyId(d) {
	return useAppStore.getState().ptyIdsByTabId[d]?.[0] ?? null;
}
function titleSuggestsReady(d) {
	let B = useAppStore.getState(), V = B.runtimePaneTitlesByTabId[d], H = [];
	if (V) for (let d of Object.values(V)) d && H.push(d);
	if (H.length === 0) for (let V of Object.values(B.tabsByWorktree)) {
		let B = V.find((B) => B.id === d);
		if (B?.title) {
			H.push(B.title);
			break;
		}
	}
	return H.some((d) => classifyTitleActivity(d) === "idle");
}
async function waitForAgentReady(d, B, V) {
	let H = V?.timeoutMs ?? DEFAULT_TIMEOUT_MS, U = Date.now() + H, W = 0;
	for (; Date.now() < U;) {
		if (W > 0 && await new Promise((d) => window.setTimeout(d, POLL_INTERVAL_MS)), W += 1, titleSuggestsReady(d)) return {
			ready: !0,
			reason: "title-idle"
		};
		let V = resolvePrimaryPtyId(d);
		if (V) try {
			let d = await inspectRuntimeTerminalProcess(useAppStore.getState().settings, V), H = d.foregroundProcess?.toLowerCase() ?? "";
			if (isExpectedAgentProcess(H, B)) return {
				ready: !0,
				reason: "foreground-match"
			};
			if (W >= 4 && !isShellProcess(H) && d.hasChildProcesses) return {
				ready: !0,
				reason: "child-process"
			};
		} catch {}
	}
	return {
		ready: !1,
		reason: "timeout"
	};
}
var AGENT_DRAFT_PASTE_PREFLIGHT_YIELD_CODE_UNITS = 256 * 1024, AGENT_DRAFT_PASTE_ESCAPE_CODE_POINT = 27, AGENT_DRAFT_PASTE_INERT_ESCAPE_CODE_POINT = 9243, AGENT_DRAFT_PASTE_INERT_ESCAPE = "␛";
async function sendAgentDraftPasteContent(d, B, V, H) {
	return await runTerminalPtyInputTransaction(B, () => sendAgentDraftPasteContentNow(d, B, V, H));
}
async function sendAgentDraftPasteContentNow(d, B, V, H) {
	if (V.length > 16777216) return !1;
	let U = normalizeTerminalPasteLineEndings(V);
	if (!measureSanitizedUtf8ByteLength(U, { stopAfterBytes: 65536 }).exceededLimit) return await writeAgentDraftPtyInput(d, B, wrapTerminalBracketedPasteText(U), H);
	if (await isSanitizedDraftPasteOverLimit(U, 16777216)) return !1;
	let W = !1;
	for (let V of iterateAgentDraftPasteContentChunks(U)) {
		let U = !1;
		try {
			U = await writeAgentDraftPtyInput(d, B, V, H);
		} catch {
			return W && V !== BRACKETED_PASTE_END && await closeAgentDraftBracketedPaste(d, B, H), !1;
		}
		if (!U) return W && V !== BRACKETED_PASTE_END && await closeAgentDraftBracketedPaste(d, B, H), !1;
		V === BRACKETED_PASTE_START ? W = !0 : V === BRACKETED_PASTE_END && (W = !1);
	}
	return !0;
}
function* iterateAgentDraftPasteContentChunks(d, B = 16384) {
	let V = Math.max(4, B);
	yield BRACKETED_PASTE_START;
	let H = normalizeTerminalPasteLineEndings(d), U = "", W = 0;
	for (let d = 0; d < H.length; d += 1) {
		let B = readUtf8CodePointAt(H, d), G = B > 65535 ? 2 : 1, K = B === AGENT_DRAFT_PASTE_ESCAPE_CODE_POINT, q = K ? AGENT_DRAFT_PASTE_INERT_ESCAPE : H.slice(d, d + G), J = getUtf8ByteLengthForCodePoint(K ? AGENT_DRAFT_PASTE_INERT_ESCAPE_CODE_POINT : B);
		if (U && W + J > V) {
			yield U, U = q, W = J;
			continue;
		}
		U += q, W += J, G === 2 && (d += 1);
	}
	U && (yield U), yield BRACKETED_PASTE_END;
}
function measureSanitizedUtf8ByteLength(d, B = {}) {
	let V = 0, H = B.stopAfterBytes;
	for (let B = 0; B < d.length; B += 1) {
		let U = readUtf8CodePointAt(d, B);
		if (V += getSanitizedUtf8ByteLengthForCodePoint(U), Number.isFinite(H) && V > (H ?? 0)) return {
			byteLength: V,
			exceededLimit: !0
		};
		U > 65535 && (B += 1);
	}
	return {
		byteLength: V,
		exceededLimit: !1
	};
}
async function isSanitizedDraftPasteOverLimit(d, B) {
	let V = 0, H = AGENT_DRAFT_PASTE_PREFLIGHT_YIELD_CODE_UNITS;
	for (let U = 0; U < d.length; U += 1) {
		let W = readUtf8CodePointAt(d, U);
		if (V += getSanitizedUtf8ByteLengthForCodePoint(W), V > B) return !0;
		W > 65535 && (U += 1), U >= H && (await yieldToEventLoop(), H = U + AGENT_DRAFT_PASTE_PREFLIGHT_YIELD_CODE_UNITS);
	}
	return !1;
}
function getSanitizedUtf8ByteLengthForCodePoint(d) {
	return getUtf8ByteLengthForCodePoint(d === AGENT_DRAFT_PASTE_ESCAPE_CODE_POINT ? AGENT_DRAFT_PASTE_INERT_ESCAPE_CODE_POINT : d);
}
async function writeAgentDraftPtyInput(d, B, V, H) {
	return H ? await H(V) : await sendRuntimePtyInputVerified(d, B, V);
}
async function closeAgentDraftBracketedPaste(d, B, V) {
	try {
		await writeAgentDraftPtyInput(d, B, BRACKETED_PASTE_END, V);
	} catch {}
}
var ptyDeliveryInterestRefCounts = /* @__PURE__ */ new Map();
function sendPtyDeliveryInterest(d, B) {
	globalThis.window?.api?.pty?.setPtyDeliveryInterest?.(d, B);
}
function acquirePtyDeliveryInterest(d) {
	let B = (ptyDeliveryInterestRefCounts.get(d) ?? 0) + 1;
	ptyDeliveryInterestRefCounts.set(d, B), B === 1 && sendPtyDeliveryInterest(d, !0);
	let V = !1;
	return () => {
		if (V) return;
		V = !0;
		let B = ptyDeliveryInterestRefCounts.get(d) ?? 0;
		B <= 1 ? (ptyDeliveryInterestRefCounts.delete(d), sendPtyDeliveryInterest(d, !1)) : ptyDeliveryInterestRefCounts.set(d, B - 1);
	};
}
function subscribeToPtyData(d, B) {
	ensurePtyDispatcher();
	let V = acquirePtyDeliveryInterest(d), H = ptyDataSidecars.get(d);
	return H || (H = /* @__PURE__ */ new Set(), ptyDataSidecars.set(d, H)), H.add(B), () => {
		V();
		let H = ptyDataSidecars.get(d);
		H && (H.delete(B), H.size === 0 && ptyDataSidecars.delete(d));
	};
}
var DECSET_BRACKETED_PASTE = "\x1B[?2004h", CODEX_COMPOSER_PROMPT = "›", DECTCEM_SHOW_CURSOR = "\x1B[?25h", GROK_COMPOSER_PROMPT = "❯", DECSET_ALT_SCREEN = "\x1B[?1049h", DECRST_ALT_SCREEN = "\x1B[?1049l", DRAFT_PASTE_READY_SIGNALS = {
	"codex-composer-prompt": {
		markerAnchor: DECSET_BRACKETED_PASTE,
		markerAnchorEnd: null,
		marker: CODEX_COMPOSER_PROMPT,
		quietAnchor: null
	},
	"render-cursor-after-bracketed-paste": {
		markerAnchor: DECSET_BRACKETED_PASTE,
		markerAnchorEnd: null,
		marker: DECTCEM_SHOW_CURSOR,
		quietAnchor: null
	},
	"grok-composer-prompt": {
		markerAnchor: DECSET_ALT_SCREEN,
		markerAnchorEnd: DECRST_ALT_SCREEN,
		marker: GROK_COMPOSER_PROMPT,
		quietAnchor: DECSET_BRACKETED_PASTE
	},
	"render-quiet-after-bracketed-paste": {
		markerAnchor: null,
		markerAnchorEnd: null,
		marker: null,
		quietAnchor: DECSET_BRACKETED_PASTE
	}
}, ANCHOR_CARRY_CHARS = 7;
function createDraftPasteReadyScanner(d) {
	let B = "", V = "", H = "", U = "", W = !1, G = !1, K = !1, q = !1, { markerAnchor: J, markerAnchorEnd: Y, marker: X, quietAnchor: Z } = DRAFT_PASTE_READY_SIGNALS[d], Q = (d, B, H) => {
		let U = 0;
		for (; U < d.length;) {
			if (!W) {
				let H = d.indexOf(B, U);
				if (H === -1) return !1;
				W = !0, V = "", U = H + B.length;
				continue;
			}
			let G = d.indexOf(H, U), K = G === -1 ? d.slice(U) : d.slice(U, G);
			if ((V + K).includes(X ?? "")) return !0;
			if (G === -1) return V = (V + K).slice(-512), !1;
			W = !1, V = "", U = G + H.length;
		}
		return !1;
	}, $ = (d) => {
		let B = U + d;
		U = B.slice(-ANCHOR_CARRY_CHARS);
		let V = 0;
		for (; V < B.length;) {
			let d = B.indexOf(DECSET_ALT_SCREEN, V), H = B.indexOf(DECRST_ALT_SCREEN, V), U = B.indexOf(CODEX_COMPOSER_PROMPT, V), W = Math.min(...[
				d,
				H,
				U
			].filter((d) => d !== -1));
			if (!Number.isFinite(W)) return;
			W === d ? (K = !0, q = !1, V = W + 8) : W === H ? (K = !1, q = !1, V = W + 8) : (K && (q = !0), V = W + 1);
		}
	};
	return { observe(U) {
		let K = B + U;
		if (B = K.slice(-512), !G && Z !== null && K.includes(Z) && (G = !0), d === "codex-composer-prompt" && !W && $(U), X !== null && J !== null) if (Y !== null) {
			let d = H + U;
			if (H = d.slice(-ANCHOR_CARRY_CHARS), Q(d, J, Y)) return {
				ready: !0,
				armQuietTimer: !1
			};
		} else if (W) {
			if (U.includes(X) || (V + U).includes(X)) return {
				ready: !0,
				armQuietTimer: !1
			};
			V = (V + U).slice(-512);
		} else {
			let B = K.indexOf(J);
			if (B !== -1) {
				if (W = !0, d === "codex-composer-prompt" && q) return {
					ready: !0,
					armQuietTimer: !1
				};
				let H = K.slice(B + J.length);
				if (H.includes(X)) return {
					ready: !0,
					armQuietTimer: !1
				};
				V = H.slice(-512);
			}
		}
		return {
			ready: !1,
			armQuietTimer: G
		};
	} };
}
var BRACKETED_PASTE_QUIET_MS = 1500;
function waitForAgentDraftInputReady(d, B, U, W) {
	return new Promise((G) => {
		let K = !1, q = createDraftPasteReadyScanner(U), J = null, Y = null, X = null, Z = (d) => {
			K || (K = !0, Y !== null && window.clearTimeout(Y), J !== null && window.clearTimeout(J), X?.(), G(d));
		}, Q = () => {
			J !== null && window.clearTimeout(J), J = window.setTimeout(() => Z(!0), BRACKETED_PASTE_QUIET_MS);
		}, $ = (d) => {
			let { ready: B, armQuietTimer: V } = q.observe(d);
			if (B) {
				Z(!0);
				return;
			}
			V && Q();
		};
		isRemoteRuntimePtyId(d) ? subscribeToRuntimeTerminalData(W, d, `desktop:paste-ready:${d}`, $).then((d) => {
			if (K) {
				d();
				return;
			}
			X = d;
		}).catch(() => Z(!1)) : (X = subscribeToPtyData(d, $), replayPreHandlerPtyData(d, $)), K || (Y = window.setTimeout(() => Z(!1), B));
	});
}
const BRACKETED_PASTE_BEGIN = BRACKETED_PASTE_START, POST_PASTE_SUBMIT_DELAY_MS = 50;
var PTY_SPAWN_TIMEOUT_MS = 8e3;
function getSettingsForAgentTabRuntimeOwner(d) {
	let B = useAppStore.getState();
	for (let [V, H] of Object.entries(B.tabsByWorktree ?? {})) if (H?.some((B) => B.id === d)) return getSettingsForWorktreeRuntimeOwner(B, V);
	return B.settings;
}
async function pasteDraftWhenAgentReady(d) {
	let { tabId: B, content: V, agent: H, submit: U, forcePaste: W, timeoutMs: G, onTimeout: K } = d, q = H ? TUI_AGENT_CONFIG[H] : null;
	if (agentDeliversDraftViaNativePrefill(H, W)) return !1;
	let J = q?.draftPasteReadySignal ?? "render-quiet-after-bracketed-paste", Y = getSettingsForAgentTabRuntimeOwner(B), X = await waitForAgentDraftInputReadyOnTab({
		tabId: B,
		spawnTimeoutMs: PTY_SPAWN_TIMEOUT_MS,
		readinessTimeoutMs: resolveDraftPasteReadyTimeoutMs(H, G),
		readySignal: J,
		settings: Y
	});
	if (!X) return K?.(), !1;
	let { ptyId: Z } = X;
	return !X.ready && !(q ? await waitForAgentReady(B, q.expectedProcess, { timeoutMs: 1e3 }) : { ready: !1 }).ready ? (K?.(), !1) : await sendBracketedPasteToAgent({
		settings: Y,
		ptyId: Z,
		content: V,
		submit: U === !0,
		agent: H
	});
}
async function pasteDraftToAgentPtyWhenReady(d) {
	let { tabId: B, ptyId: V, content: H, agent: U, submit: W, forcePaste: G, timeoutMs: K, onTimeout: q } = d, J = U ? TUI_AGENT_CONFIG[U] : null;
	if (agentDeliversDraftViaNativePrefill(U, G)) return !1;
	let Y = getSettingsForAgentTabRuntimeOwner(B), X = J?.draftPasteReadySignal ?? "render-quiet-after-bracketed-paste";
	return !await waitForAgentDraftInputReady(V, resolveDraftPasteReadyTimeoutMs(U, K), X, Y) && !(J && await waitForExpectedAgentOnPty(V, J.expectedProcess, 1e3, Y)) ? (q?.(), !1) : await sendBracketedPasteToAgent({
		settings: Y,
		ptyId: V,
		content: H,
		submit: W === !0,
		agent: U
	});
}
async function submitPromptToAgentPty(d) {
	return await sendBracketedPasteToAgent({
		settings: getSettingsForAgentTabRuntimeOwner(d.tabId),
		ptyId: d.ptyId,
		content: d.content,
		submit: !0
	});
}
async function sendBracketedPasteToAgent(d) {
	let { settings: B = useAppStore.getState().settings, ptyId: V, content: H, submit: U, agent: W } = d, G = W ? TUI_AGENT_CONFIG[W]?.submitRetryDelayMs : void 0;
	try {
		return await runTerminalPtyInputTransaction(V, async () => {
			let d = await sendAgentDraftPasteContentNow(B, V, H);
			if (!d || !U) return d;
			await new Promise((d) => window.setTimeout(d, 50));
			let W = await sendRuntimePtyInputVerified(B, V, "\r");
			if (G !== void 0) {
				await new Promise((d) => window.setTimeout(d, G));
				try {
					await sendRuntimePtyInputVerified(B, V, "\r");
				} catch {}
			}
			return W;
		});
	} catch {
		return !1;
	}
}
function waitForAgentDraftInputReadyOnTab(d) {
	return new Promise((B) => {
		let V = null, H = !1, U = null, W = null, G = (d) => {
			H || (H = !0, U !== null && window.clearTimeout(U), W?.(), B(d));
		}, K = (B) => {
			V || H || (V = B, U !== null && window.clearTimeout(U), W?.(), waitForAgentDraftInputReady(B, d.readinessTimeoutMs, d.readySignal, d.settings).then((d) => G({
				ptyId: B,
				ready: d
			})));
		}, q = (B) => {
			let V = B.ptyIdsByTabId[d.tabId]?.[0];
			V && K(V);
		};
		U = window.setTimeout(() => G(null), d.spawnTimeoutMs), W = useAppStore.subscribe(q), q(useAppStore.getState());
	});
}
async function waitForExpectedAgentOnPty(d, B, V, H) {
	let U = Date.now() + V;
	for (; Date.now() < U;) {
		try {
			let V = await withDeadline(inspectRuntimeTerminalProcess(H, d), Math.max(0, U - Date.now()));
			if (!V) return !1;
			if (isExpectedAgentProcess(V.foregroundProcess?.toLowerCase() ?? "", B)) return !0;
		} catch {}
		let V = Math.min(120, Math.max(0, U - Date.now()));
		V > 0 && await new Promise((d) => window.setTimeout(d, V));
	}
	return !1;
}
function withDeadline(d, B) {
	return B <= 0 ? Promise.resolve(null) : new Promise((V, H) => {
		let U = window.setTimeout(() => V(null), B);
		d.then((d) => {
			window.clearTimeout(U), V(d);
		}, (d) => {
			window.clearTimeout(U), H(d);
		});
	});
}
export { resolveDraftPasteReadyTimeoutMs as A, BRACKETED_PASTE_START as C, sanitizeBracketedPasteText as D, pasteTerminalText as E, sanitizeTerminalPasteText as O, BRACKETED_PASTE_END as S, observeTerminalBracketedPasteModeOutput as T, mergeDiscoveredAuthoritativeModels as _, pasteDraftWhenAgentReady as a, encodePowerShellCommand as b, subscribeToPtyData as c, buildAgentStartupPlan as d, buildAgentResumeStartupPlan as f, mergeCatalogModels as g, getAgentSessionOptionCatalog as h, pasteDraftToAgentPtyWhenReady as i, agentDeliversDraftViaNativePrefill as j, wrapTerminalBracketedPasteText as k, sendAgentDraftPasteContent as l, findCatalogOption as m, POST_PASTE_SUBMIT_DELAY_MS as n, submitPromptToAgentPty as o, findCatalogModel as p, getSettingsForAgentTabRuntimeOwner as r, createDraftPasteReadyScanner as s, BRACKETED_PASTE_BEGIN as t, buildAgentDraftLaunchPlan as u, sessionOptionValueIsValid as v, markTerminalBracketedPasteInterrupted as w, runTerminalPtyInputTransaction as x, createClaudeCatalogOptions as y };
