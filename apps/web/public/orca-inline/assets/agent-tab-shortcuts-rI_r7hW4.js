import { aS as pickTuiAgent, iS as normalizeDisabledTuiAgents } from "./store-C9f8FDJV.js";
import { g as ALL_TUI_AGENTS } from "./stale-document-visibility-rSdoU229.js";
import { S as agentTabActionId } from "./keybindings-1v53ESY9.js";
function listBoundAgentTabActions(e, i) {
	if (!e) return [];
	let a = new Set(normalizeDisabledTuiAgents(i)), o = [];
	for (let n of ALL_TUI_AGENTS) {
		if (a.has(n)) continue;
		let r = agentTabActionId(n);
		(e[r] ?? []).length > 0 && o.push({
			agent: n,
			actionId: r
		});
	}
	return o;
}
function resolveDefaultAgentForNewTab(n) {
	return pickTuiAgent(n.defaultTuiAgent === "blank" ? null : n.defaultTuiAgent, n.detectedAgentIds ?? [], n.disabledTuiAgents);
}
export { resolveDefaultAgentForNewTab as n, listBoundAgentTabActions as t };
