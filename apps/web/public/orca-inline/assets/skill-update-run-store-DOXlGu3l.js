import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { n_ as notifyInstalledAgentSkillsChanged } from "./store-C9f8FDJV.js";
import { i as subscribeSkillFreshnessUpdateDialog, n as getSkillFreshnessUpdateDialogRequest } from "./skill-freshness-update-dialog-DlbP_7Cb.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), run = { state: "idle" }, listeners = /* @__PURE__ */ new Set(), subscribed = !1, successTimer = null;
function emit() {
	for (let e of listeners) e();
}
function clearSuccessTimer() {
	successTimer &&= (clearTimeout(successTimer), null);
}
function scheduleSuccessLinger() {
	clearSuccessTimer(), !(run.state !== "success" || getSkillFreshnessUpdateDialogRequest()) && (successTimer = setTimeout(() => {
		successTimer = null, acknowledgeSkillUpdateRun();
	}, 4e3));
}
subscribeSkillFreshnessUpdateDialog(scheduleSuccessLinger);
function setRun(e) {
	let b = run.state === "running";
	run = e, scheduleSuccessLinger(), (e.state === "success" || e.state === "error" || b && e.state === "idle") && notifyInstalledAgentSkillsChanged(), emit();
}
function ensureSubscribed() {
	subscribed || (subscribed = !0, window.api.skills.onUpdateRun(setRun), window.api.skills.getUpdateRun().then((e) => {
		run.state === "idle" && setRun(e);
	}));
}
function subscribeSkillUpdateRun(e) {
	return ensureSubscribed(), listeners.add(e), () => listeners.delete(e);
}
function getSkillUpdateRun() {
	return run;
}
function useSkillUpdateRun() {
	return (0, import_react.useSyncExternalStore)(subscribeSkillUpdateRun, getSkillUpdateRun, getSkillUpdateRun);
}
async function startSkillUpdateRun(e) {
	ensureSubscribed();
	try {
		await window.api.skills.startUpdateRun([...e]);
	} catch (e) {
		console.error("Failed to start skill update run", e);
	}
}
async function cancelSkillUpdateRun() {
	try {
		await window.api.skills.cancelUpdateRun();
	} catch (e) {
		console.error("Failed to cancel skill update run", e);
	}
}
async function acknowledgeSkillUpdateRun() {
	try {
		await window.api.skills.acknowledgeUpdateRun();
	} catch (e) {
		console.error("Failed to acknowledge skill update run", e);
	}
}
export { useSkillUpdateRun as i, cancelSkillUpdateRun as n, startSkillUpdateRun as r, acknowledgeSkillUpdateRun as t };
