const RUNTIME_NATIVE_CHAT_READ_ERROR = "Couldn't read agent chat from the remote runtime.";
function parseRuntimeNativeChatTurnLifecycle(e) {
	if (typeof e != "object" || !e) return;
	let t = e;
	if (!(t.state !== "working" && t.state !== "completed" && t.state !== "interrupted" || typeof t.turnId != "string" || t.turnId.trim().length === 0 || t.timestamp !== null && t.timestamp !== void 0 && (typeof t.timestamp != "number" || !Number.isFinite(t.timestamp) || t.timestamp <= 0))) return {
		state: t.state,
		turnId: t.turnId.trim(),
		timestamp: t.timestamp ?? null
	};
}
function parseRuntimeNativeChatReadSessionResult(n) {
	if (typeof n != "object" || !n) return { error: RUNTIME_NATIVE_CHAT_READ_ERROR };
	let r = n;
	if (Array.isArray(r.messages)) {
		let e = parseRuntimeNativeChatTurnLifecycle(r.lifecycle);
		return {
			messages: r.messages,
			...e ? { lifecycle: e } : {}
		};
	}
	return typeof r.error == "string" ? {
		error: r.error,
		...r.notFound === !0 ? { notFound: !0 } : {}
	} : { error: RUNTIME_NATIVE_CHAT_READ_ERROR };
}
export { parseRuntimeNativeChatReadSessionResult as n, parseRuntimeNativeChatTurnLifecycle as r, RUNTIME_NATIVE_CHAT_READ_ERROR as t };
