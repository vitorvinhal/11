import { hl as agentEntryCompletionAt } from "./store-C9f8FDJV.js";
function lastEnteredDoneAt(t) {
	if (t.rowSource === "subagent" && t.state !== "done") return null;
	let n = t.entry, r = agentEntryCompletionAt(n);
	if (r !== null) return r;
	if (n.state === "done" && n.interrupted === !0 && n.sessionBoundary !== !0) return n.stateStartedAt;
	for (let e = (n.stateHistory?.length ?? 0) - 1; e >= 0; e--) if (n.stateHistory[e].state === "done") return n.stateHistory[e].startedAt;
	return null;
}
export { lastEnteredDoneAt as t };
