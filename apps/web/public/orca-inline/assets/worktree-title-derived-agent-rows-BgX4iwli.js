import { $a as collectRuntimePaneLeafIds, Nh as isTerminalLeafId, Ph as makePaneKey, Yu as tabHasLivePty, ao as FIRST_PANE_ID, au as resolveTitleActivityLabel, bu as isClaudeManagementTitle, no as resolveRuntimePaneTitleLeafIdFromRoot, nu as classifyTitleActivity, ro as resolveRuntimePaneTitleLeafIdFromSparseSlots, tu as formatAgentTypeLabel, xu as isCursorAgentTitle, yu as isClaudeIdentityFrameTitle } from "./store-C9f8FDJV.js";
import { a as resolveCompatibleAgentTypeForOwner, i as normalizeCompatibleAgentTitleForOwner, t as resolvePaneAgentOwner } from "./pane-agent-owner-Ci26i0GA.js";
var EMPTY_RUNTIME_TITLES = {}, EMPTY_LIVE_PTY_IDS = {}, EMPTY_TERMINAL_LAYOUTS = {}, TITLE_AGENT_LABEL_TO_TYPE = {
	"Claude Code": "claude",
	OpenClaude: "openclaude",
	Codex: "codex",
	"Gemini CLI": "gemini",
	"GitHub Copilot": "copilot",
	Grok: "grok",
	Devin: "devin",
	Antigravity: "antigravity",
	OpenCode: "opencode",
	Aider: "aider",
	Cursor: "cursor",
	Droid: "droid",
	Hermes: "hermes",
	Pi: "pi",
	OMP: "omp"
}, CLAUDE_AGENT_TOKEN_RE = RegExp("(?<![\\w./\\\\-])claude(?![\\w./\\\\-])", "i");
function buildTitleDerivedAgentRows(u) {
	let d = [], p = u.runtimePaneTitlesByTabId ?? EMPTY_RUNTIME_TITLES, m = u.ptyIdsByTabId ?? EMPTY_LIVE_PTY_IDS, h = u.terminalLayoutsByTabId ?? EMPTY_TERMINAL_LAYOUTS;
	for (let g of u.tabs) {
		if (!tabHasLivePty(m, g.id)) continue;
		let _ = h[g.id], v = p[g.id], y = v && Object.keys(v).length > 0 ? Object.entries(v).sort(([e], [u]) => {
			let d = Number(e), f = Number(u), p = d >= 1;
			return p === f >= 1 ? d - f : p ? -1 : 1;
		}) : [];
		if (y.length > 0) {
			let f = collectRuntimePaneLeafIds(_?.root ?? null), p = y.map(([e]) => Number(e)).filter((e) => e >= 1), h = p.length === f.length && p.every((e, u) => e === 1 + u);
			for (let [e, v] of y) {
				let y = resolveLeafIdForTitleFallback({
					layout: _,
					leafIds: f,
					ptyIds: m[g.id] ?? [],
					liveSlotIds: p,
					liveSlotsAreDense: h,
					paneId: Number(e),
					title: v
				});
				if (!y) continue;
				let b = buildTitleDerivedAgentRow({
					tab: g,
					leafId: y,
					title: v,
					ownerAgentType: resolveTitleDerivedPaneOwner(g, _, y),
					now: u.now,
					runtimeAgentOrchestrationByPaneKey: u.runtimeAgentOrchestrationByPaneKey
				});
				!b || u.seenPaneKeys.has(b.paneKey) || (d.push(b), u.seenPaneKeys.add(b.paneKey));
			}
			continue;
		}
		let b = _?.activeLeafId ?? collectRuntimePaneLeafIds(_?.root ?? null)[0];
		if (!b) continue;
		let x = buildTitleDerivedAgentRow({
			tab: g,
			leafId: b,
			title: g.title,
			ownerAgentType: resolveTitleDerivedPaneOwner(g, _, b),
			now: u.now,
			runtimeAgentOrchestrationByPaneKey: u.runtimeAgentOrchestrationByPaneKey
		});
		!x || u.seenPaneKeys.has(x.paneKey) || (d.push(x), u.seenPaneKeys.add(x.paneKey));
	}
	return d;
}
function buildTitleDerivedAgentRow(e) {
	let f = normalizeCompatibleAgentTitleForOwner(e.title, e.tab.launchAgent, { ownerIsLaunch: !!e.tab.launchAgent }), p = isClaudeManagementTitle(f), g = p ? "idle" : classifyTitleActivity(f) ?? (isCursorAgentTitle(f) ? "idle" : null), v = p ? "Claude Code" : resolveTitleActivityLabel(f);
	if (!g || !v || !isTerminalLeafId(e.leafId)) return null;
	let x = makePaneKey(e.tab.id, e.leafId), S = e.runtimeAgentOrchestrationByPaneKey?.[x], C = p ? "claude" : resolveTitleDerivedAgentType(f, v, e.ownerAgentType), w = C ?? e.ownerAgentType;
	if (!w) return null;
	let T = C ? v : formatAgentTypeLabel(w), E = titleStatusToRowState(g), D = g === "permission" ? "Needs input" : g === "working" ? "Running" : "Idle";
	return {
		paneKey: x,
		entry: {
			paneKey: x,
			state: E === "waiting" ? "waiting" : "working",
			prompt: T,
			updatedAt: e.now,
			stateStartedAt: e.now,
			stateHistory: [],
			agentType: w,
			terminalTitle: f,
			lastAssistantMessage: D,
			...S ? { orchestration: S } : {},
			observation: {
				origin: "title",
				authorityId: "renderer-title-projection",
				incarnation: 0,
				revision: e.now,
				observedAt: e.now,
				kind: "snapshot"
			}
		},
		tab: e.tab,
		agentType: w,
		rowSource: "live",
		state: E,
		startedAt: 0
	};
}
function resolveTitleDerivedAgentType(e, u, d) {
	let f = TITLE_AGENT_LABEL_TO_TYPE[u] ?? "unknown";
	if (f !== "claude") return f;
	if (!CLAUDE_AGENT_TOKEN_RE.test(e)) return null;
	let p = d && d !== "unknown" ? d : null;
	return p && p !== "claude" && !isClaudeIdentityFrameTitle(e) ? null : f;
}
function resolveTitleDerivedPaneOwner(e, u, d) {
	return u?.root?.type !== "leaf" || u.root.leafId !== d ? null : resolvePaneAgentOwner({ launchAgent: e.launchAgent });
}
function resolveAgentTypeFromTerminalTitle(e, u, d) {
	if (!e) return null;
	let f = normalizeCompatibleAgentTitleForOwner(e, u, d), p = resolveTitleActivityLabel(f);
	return p ? resolveCompatibleAgentTypeForOwner(resolveTitleDerivedAgentType(f, p, u), u, d) ?? null : null;
}
function titleStatusToRowState(e) {
	return e === "permission" ? "waiting" : e === "working" ? "working" : "idle";
}
function resolveLeafIdForTitleFallback(e) {
	if (e.leafIds.length === 1) return e.leafIds[0];
	if (e.paneId < 1) return e.leafIds[-e.paneId - 1] ?? null;
	if (e.liveSlotsAreDense) {
		let u = resolveRuntimePaneTitleLeafIdFromRoot(e.layout?.root, String(e.paneId));
		if (u) return u;
	}
	let u = resolveRuntimePaneTitleLeafIdFromSparseSlots({
		layout: e.layout,
		paneId: e.paneId,
		liveSlotIds: e.liveSlotIds,
		ptyIds: e.ptyIds
	});
	if (u) return u;
	let d = Object.entries(e.layout?.titlesByLeafId ?? {}).filter(([, u]) => u === e.title).map(([e]) => e);
	if (d.length === 1) return d[0];
	let f = e.liveSlotIds.indexOf(e.paneId);
	return f === -1 ? null : e.leafIds[f] ?? null;
}
export { resolveAgentTypeFromTerminalTitle as n, buildTitleDerivedAgentRows as t };
