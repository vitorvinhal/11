import { Ou as stripLeadingAgentTitleDecorationOrEmpty, bu as isClaudeManagementTitle, eo as resolveRuntimePaneTitleForLeaf, gu as isMeaningfulOpenCodeTerminalTitle, tu as formatAgentTypeLabel, uu as SYNTHETIC_AGENT_TITLE_PROFILES } from "./store-C9f8FDJV.js";
var SYNTHETIC_STATUS_TITLES_LOWER = new Set(Object.values(SYNTHETIC_AGENT_TITLE_PROFILES).flatMap((e) => [
	e.workingLabel.toLowerCase(),
	e.permissionLabel.toLowerCase(),
	e.idleLabel.toLowerCase()
])), FALLBACK_TAB_TITLE_LOWER = "agent", AGENT_IDENTITY_ALIASES_LOWER = {
	claude: ["claude code"],
	gemini: ["gemini cli"]
}, STATUS_WITH_CONTEXT_RE = /^(?:ready|idle|done)(?:\s+\([^)]*\))?$/i, DEFAULT_TERMINAL_TITLE_RE = /^terminal \d+$/i;
function isIdentityStatusTitle(e, o) {
	return e === o || e === `${o} ready` || e === `${o} idle` || e === `${o} done` || e === `${o} working` || e === `${o} thinking` || e === `${o} running` || e === `${o} - action required`;
}
function isAgentIdentityStatusTitle(e, o, s) {
	return isIdentityStatusTitle(e, s) ? !0 : AGENT_IDENTITY_ALIASES_LOWER[o ?? ""]?.some((o) => isIdentityStatusTitle(e, o)) ?? !1;
}
function isCwdLikeTitle(e) {
	return /^(?:~|[\\/]|[A-Za-z]:[\\/])/.test(e) ? !0 : !/\s/.test(e) && /[\\/]/.test(e);
}
function conversationNameFromLiveTitle(s, c, l, u) {
	let p = stripLeadingAgentTitleDecorationOrEmpty(s.trim()).trim();
	if (!p) return null;
	let g = p.toLowerCase();
	return SYNTHETIC_STATUS_TITLES_LOWER.has(g) || g === FALLBACK_TAB_TITLE_LOWER || isAgentIdentityStatusTitle(g, c, l) || STATUS_WITH_CONTEXT_RE.test(p) || DEFAULT_TERMINAL_TITLE_RE.test(p) || isClaudeManagementTitle(p) || isCwdLikeTitle(p) || u && p === u.trim() ? null : p;
}
function getAgentRowConversationName(e, o, s, u, d) {
	let f = e.customTitle?.trim();
	if (f) return f;
	let p = e.quickCommandLabel?.trim();
	if (p) return p;
	let m = u === void 0 ? e.title?.trim() ?? "" : u?.trim() ?? "";
	if (isMeaningfulOpenCodeTerminalTitle(m)) return m;
	let h = e.aiVaultTitle, g = h?.title.trim();
	return h && g && h.agent === o && h.sessionId === d ? g : (s ? e.generatedTitle?.trim() : "") || (m ? conversationNameFromLiveTitle(m, o, formatAgentTypeLabel(o).toLowerCase(), e.defaultTitle) : null);
}
function resolveAgentRowPaneLiveTitle(e, o, c) {
	if (e?.root?.type === "split") return c ? resolveRuntimePaneTitleForLeaf(e, o, c) : null;
}
export { getAgentRowConversationName as n, resolveAgentRowPaneLiveTitle as t };
