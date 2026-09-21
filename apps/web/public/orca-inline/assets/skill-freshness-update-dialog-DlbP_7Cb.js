var pendingOpen = !1, listeners = /* @__PURE__ */ new Set();
function requestSkillFreshnessUpdateDialog() {
	pendingOpen = !0;
	for (let e of listeners) e();
}
function consumeSkillFreshnessUpdateDialogRequest() {
	let a = pendingOpen;
	if (pendingOpen = !1, a) for (let e of listeners) e();
	return a;
}
function getSkillFreshnessUpdateDialogRequest() {
	return pendingOpen;
}
function subscribeSkillFreshnessUpdateDialog(e) {
	return listeners.add(e), () => listeners.delete(e);
}
export { subscribeSkillFreshnessUpdateDialog as i, getSkillFreshnessUpdateDialogRequest as n, requestSkillFreshnessUpdateDialog as r, consumeSkillFreshnessUpdateDialogRequest as t };
