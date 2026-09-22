const AI_VAULT_AGENTS = [
	"claude",
	"codex",
	"hermes",
	"pi",
	"omp",
	"prime-agent",
	"cursor",
	"gemini",
	"antigravity",
	"rovo",
	"copilot",
	"opencode",
	"grok",
	"openclaw",
	"devin",
	"droid",
	"cline",
	"kimi"
], AI_VAULT_SCOPE_PATHS_MAX_COUNT = 64;
function isAiVaultScanCancelledError(e) {
	return e instanceof Error && (e.name === "AbortError" || e.message.includes("Agent Session History scan was cancelled"));
}
const AI_VAULT_AGENT_LABELS = {
	claude: "Claude",
	codex: "Codex",
	hermes: "Hermes",
	pi: "Pi",
	omp: "OMP",
	"prime-agent": "Prime Agent",
	cursor: "Cursor",
	gemini: "Gemini",
	antigravity: "Antigravity",
	rovo: "Rovo Dev",
	copilot: "GitHub Copilot",
	opencode: "OpenCode",
	grok: "Grok",
	openclaw: "OpenClaw",
	devin: "Devin",
	droid: "Droid",
	cline: "Cline",
	kimi: "Kimi"
};
function isAiVaultSessionResumableContent(e) {
	return e.messageCount > 0 || e.previewMessages.some((e) => e.role === "user" || e.role === "assistant");
}
function aiVaultSessionRecoverableSignalCount(e) {
	return Math.max(0, e.queuedMessageCount) + Math.max(0, e.subagentTranscriptCount);
}
function isAiVaultSessionRecoverableEmpty(e) {
	return !isAiVaultSessionResumableContent(e) && aiVaultSessionRecoverableSignalCount(e) > 0;
}
function aiVaultAgentLabel(e) {
	return AI_VAULT_AGENT_LABELS[e];
}
export { aiVaultSessionRecoverableSignalCount as a, isAiVaultSessionResumableContent as c, aiVaultAgentLabel as i, AI_VAULT_AGENT_LABELS as n, isAiVaultScanCancelledError as o, AI_VAULT_SCOPE_PATHS_MAX_COUNT as r, isAiVaultSessionRecoverableEmpty as s, AI_VAULT_AGENTS as t };
