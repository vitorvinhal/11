import { i as translate } from "./i18n-CakWKPtl.js";
import { Ph as makePaneKey, t as useAppStore } from "./store-C9f8FDJV.js";
import { n as toast } from "./dist-E3opdjfr.js";
const SSH_RECONNECT_UI_TIMEOUT_MS = 18e4;
async function withUiConnectTimeout(n, r = 2e4) {
	let i, a = new Promise((n, a) => {
		i = setTimeout(() => {
			a(Error(translate("auto.components.NewWorkspaceComposerCard.connectTimedOut", "Connection timed out. It may still be connecting in the background.")));
		}, r);
	});
	try {
		return await Promise.race([n, a]);
	} finally {
		i && clearTimeout(i);
	}
}
function dismissStaleAgentRowByKey(n) {
	let a = useAppStore.getState(), o = n in a.agentStatusByPaneKey, s = n in a.retainedAgentsByPaneKey;
	a.dropAgentStatus(n, { paneRemoved: !0 }), a.dismissRetainedAgent(n), (o || s) && toast.info(translate("auto.components.terminal.pane.stale.agent.row.ad991ece5c", "Agent's pane is no longer available."), { id: translate("auto.components.terminal.pane.stale.agent.row.090d607412", "stale-agent-row-{{value0}}", { value0: n }) });
}
function surfaceStaleAgentRow(e, r) {
	dismissStaleAgentRowByKey(makePaneKey(e, r));
}
export { withUiConnectTimeout as i, surfaceStaleAgentRow as n, SSH_RECONNECT_UI_TIMEOUT_MS as r, dismissStaleAgentRowByKey as t };
