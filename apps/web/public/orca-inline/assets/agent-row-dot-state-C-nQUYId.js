function agentRowDotState(e, t) {
	switch (e) {
		case "working": return t === "monitoring" ? "monitoring" : "working";
		case "blocked":
		case "waiting":
		case "done":
		case "idle":
		case "unverifiable": return e;
	}
	return "idle";
}
export { agentRowDotState as t };
