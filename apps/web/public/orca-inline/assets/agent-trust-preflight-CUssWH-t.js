import { xS as TUI_AGENT_CONFIG } from "./store-C9f8FDJV.js";
async function preflightAgentTrust(t) {
	if (!t.agent || !t.workspacePath || !window.api.agentTrust?.markTrusted) return;
	let n = TUI_AGENT_CONFIG[t.agent].preflightTrust;
	if (n) try {
		await window.api.agentTrust.markTrusted({
			preset: n,
			workspacePath: t.workspacePath,
			...t.connectionId ? { connectionId: t.connectionId } : {}
		});
	} catch {}
}
export { preflightAgentTrust as t };
