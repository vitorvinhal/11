var TUI_AGENT_KIND_BY_AGENT = {
	claude: "claude-code",
	"claude-agent-teams": "claude-agent-teams",
	openclaude: "openclaude",
	codex: "codex",
	autohand: "autohand",
	opencode: "opencode",
	"mimo-code": "mimo-code",
	pi: "pi",
	omp: "omp",
	"prime-agent": "prime-agent",
	gemini: "gemini",
	antigravity: "antigravity",
	aider: "aider",
	goose: "goose",
	amp: "amp",
	kilo: "kilo",
	kiro: "kiro",
	crush: "crush",
	aug: "aug",
	cline: "cline",
	codebuff: "codebuff",
	"command-code": "command-code",
	continue: "continue",
	cursor: "cursor",
	droid: "droid",
	kimi: "kimi",
	"mistral-vibe": "mistral-vibe",
	"qwen-code": "qwen-code",
	rovo: "rovo",
	hermes: "hermes",
	openclaw: "openclaw",
	copilot: "copilot",
	grok: "grok",
	devin: "devin",
	ante: "ante",
	trae: "trae"
};
function tuiAgentToAgentKind(l) {
	return TUI_AGENT_KIND_BY_AGENT[l] ?? "other";
}
var AGENT_BY_TUI_AGENT_KIND = Object.fromEntries(Object.entries(TUI_AGENT_KIND_BY_AGENT).map(([e, l]) => [l, e]));
function agentKindToTuiAgent(e) {
	return e ? AGENT_BY_TUI_AGENT_KIND[e] ?? null : null;
}
const PRIVACY_URL = "https://www.onorca.dev/docs/telemetry";
function isTelemetryConsentState(e) {
	if (!e || typeof e != "object") return !1;
	let l = e.effective;
	if (l === "enabled" || l === "pending_banner") return !0;
	if (l === "disabled") {
		let l = e.reason;
		return l === "do_not_track" || l === "orca_disabled" || l === "ci" || l === "user_opt_out";
	}
	return !1;
}
function track(e, l) {
	try {
		window.api?.telemetryTrack?.(e, l)?.catch((e) => {
			console.warn("[telemetry] IPC track failed", e);
		});
	} catch (e) {
		console.warn("[telemetry] IPC track threw synchronously", e);
	}
}
function setOptIn(e) {
	try {
		return window.api?.telemetrySetOptIn?.(e)?.catch((e) => {
			console.warn("[telemetry] IPC setOptIn failed", e);
		}) ?? Promise.resolve();
	} catch (e) {
		return console.warn("[telemetry] IPC setOptIn threw synchronously", e), Promise.resolve();
	}
}
async function getConsentState() {
	try {
		let e = await window.api?.telemetryGetConsentState?.();
		return isTelemetryConsentState(e) ? e : { effective: "pending_banner" };
	} catch (e) {
		return console.warn("[telemetry] IPC getConsentState failed", e), { effective: "pending_banner" };
	}
}
function acknowledgeBanner() {
	try {
		return window.api?.telemetryAcknowledgeBanner?.()?.catch((e) => {
			console.warn("[telemetry] IPC acknowledgeBanner failed", e);
		}) ?? Promise.resolve();
	} catch (e) {
		return console.warn("[telemetry] IPC acknowledgeBanner threw synchronously", e), Promise.resolve();
	}
}
export { track as a, setOptIn as i, acknowledgeBanner as n, agentKindToTuiAgent as o, getConsentState as r, tuiAgentToAgentKind as s, PRIVACY_URL as t };
