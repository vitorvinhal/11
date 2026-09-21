import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r_ as INSTALLED_AGENT_SKILLS_CHANGED_EVENT } from "./store-C9f8FDJV.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), FOCUS_RESCAN_COOLDOWN_MS = 15e3, cachedInventory = null, pendingInventory = null, invalidationRevision = 0, completedRevision = -1, lastCompletedScanAt = 0, refreshSequence = 0, scheduledFocusRescan = null, snapshot = {
	inventory: null,
	loading: !1,
	error: null
}, DISABLED_SNAPSHOT = Object.freeze({
	inventory: null,
	loading: !1,
	error: null
}), REENABLING_SNAPSHOT = Object.freeze({
	inventory: null,
	loading: !0,
	error: null
}), subscribers = /* @__PURE__ */ new Set(), pendingReenableRefresh = null;
function publishSnapshot(v) {
	if (!(snapshot.inventory === v.inventory && snapshot.loading === v.loading && snapshot.error === v.error)) {
		snapshot = v;
		for (let v of subscribers) v();
	}
}
async function loadInventory(v) {
	v && (invalidationRevision += 1);
	let B = invalidationRevision;
	for (;;) {
		if (cachedInventory && completedRevision >= B) return cachedInventory;
		if (!pendingInventory) {
			let v = invalidationRevision, B = window.api.skills.freshnessInventory().then((B) => (cachedInventory = B, completedRevision = Math.max(completedRevision, v), lastCompletedScanAt = Date.now(), B)).finally(() => {
				pendingInventory === B && (pendingInventory = null);
			});
			pendingInventory = B;
		}
		await pendingInventory;
	}
}
async function refreshSkillFreshness(v = !0) {
	scheduledFocusRescan !== null && (window.clearTimeout(scheduledFocusRescan), scheduledFocusRescan = null);
	let B = ++refreshSequence;
	publishSnapshot({
		inventory: null,
		loading: !0,
		error: null
	});
	try {
		let V = await loadInventory(v);
		B === refreshSequence && publishSnapshot({
			inventory: V,
			loading: !1,
			error: null
		});
	} catch (v) {
		B === refreshSequence && publishSnapshot({
			inventory: null,
			loading: !1,
			error: v instanceof Error ? v.message : "Could not inspect Orca skills."
		});
	}
}
function onWindowFocus() {
	let v = FOCUS_RESCAN_COOLDOWN_MS - (Date.now() - lastCompletedScanAt);
	if (v <= 0) {
		refreshSkillFreshness(!0);
		return;
	}
	!snapshot.inventory?.eligibleUpdateNames.length || scheduledFocusRescan !== null || (publishSnapshot({
		inventory: null,
		loading: !0,
		error: null
	}), scheduledFocusRescan = window.setTimeout(() => {
		scheduledFocusRescan = null, refreshSkillFreshness(!0);
	}, Math.min(v, FOCUS_RESCAN_COOLDOWN_MS)));
}
function onInstalledSkillsChanged() {
	refreshSkillFreshness(!0);
}
function subscribe(v) {
	return subscribers.add(v), subscribers.size === 1 && (window.addEventListener("focus", onWindowFocus), window.addEventListener(INSTALLED_AGENT_SKILLS_CHANGED_EVENT, onInstalledSkillsChanged)), () => {
		subscribers.delete(v), subscribers.size === 0 && (window.removeEventListener("focus", onWindowFocus), window.removeEventListener(INSTALLED_AGENT_SKILLS_CHANGED_EVENT, onInstalledSkillsChanged), scheduledFocusRescan !== null && (window.clearTimeout(scheduledFocusRescan), scheduledFocusRescan = null));
	};
}
function subscribeDisabled() {
	return () => {};
}
function getSnapshot() {
	return snapshot;
}
function getDisabledSnapshot() {
	return DISABLED_SNAPSHOT;
}
function ensureInventoryLoaded() {
	!snapshot.inventory && !snapshot.loading && refreshSkillFreshness(!1);
}
async function skipSkillFreshnessRefresh() {}
function refreshSkillFreshnessAfterReenable() {
	return pendingReenableRefresh ??= refreshSkillFreshness(!0).finally(() => {
		pendingReenableRefresh = null;
	}), pendingReenableRefresh;
}
function useSkillFreshness(v = !0) {
	let B = (0, import_react.useRef)(v), V = v && !B.current, H = (0, import_react.useSyncExternalStore)(v ? subscribe : subscribeDisabled, v ? getSnapshot : getDisabledSnapshot, v ? getSnapshot : getDisabledSnapshot);
	return (0, import_react.useEffect)(() => {
		let V = B.current;
		if (B.current = v, v) {
			if (!V) {
				refreshSkillFreshnessAfterReenable();
				return;
			}
			ensureInventoryLoaded();
		}
	}, [v]), {
		...V ? REENABLING_SNAPSHOT : H,
		refresh: v ? refreshSkillFreshness : skipSkillFreshnessRefresh
	};
}
const SUPPORTED_GLOBAL_SKILL_TOPOLOGIES = new Set(["canonical-copy", "provider-alias"]);
var OWNER_MANAGED_SKILL_SCOPES = new Set(["repo-scope", "plugin-cache"]);
function isOwnerManagedSkillScope(v) {
	return OWNER_MANAGED_SKILL_SCOPES.has(v);
}
function skillPlacementParticipatesInGlobalFreshness(v) {
	return v.topology !== "repo-scope";
}
function isSkillCopyNeedingAttention(v) {
	return skillPlacementParticipatesInGlobalFreshness(v) && v.status !== "current" && v.status !== "newer-known" && !(v.status === "unrecognized" && v.topology === "plugin-cache") && !(SUPPORTED_GLOBAL_SKILL_TOPOLOGIES.has(v.topology) && v.status === "outdated");
}
var SKILL_SCAN_ATTENTION_REASONS = new Set(["io-error"]);
function isSkillScanAttentionReason(v) {
	return SKILL_SCAN_ATTENTION_REASONS.has(v);
}
function isSkillScanIssueNeedingAttention(v) {
	return isSkillScanAttentionReason(v.reason);
}
var SKILL_SCAN_TRUNCATING_REASONS = new Set(["entry-limit", "candidate-limit"]);
function isTruncatingSkillScanReason(v) {
	return SKILL_SCAN_TRUNCATING_REASONS.has(v);
}
function isSkillScanIssueTruncatingScan(v) {
	return isTruncatingSkillScanReason(v.reason);
}
function canonicalizeSkillUpdateNames(v) {
	let B = [...new Set(v)].sort((v, B) => v.localeCompare(B, "en"));
	return B.some((v) => !/^[a-z0-9][a-z0-9._-]*$/.test(v)) ? null : B.length > 0 ? B : null;
}
function buildTargetedSkillUpdateCommand(v) {
	let B = canonicalizeSkillUpdateNames(v);
	return B ? `npx skills update ${B.join(" ")} --global` : null;
}
export { isSkillScanIssueTruncatingScan as a, useSkillFreshness as c, isSkillScanIssueNeedingAttention as i, isOwnerManagedSkillScope as n, skillPlacementParticipatesInGlobalFreshness as o, isSkillCopyNeedingAttention as r, refreshSkillFreshness as s, buildTargetedSkillUpdateCommand as t };
