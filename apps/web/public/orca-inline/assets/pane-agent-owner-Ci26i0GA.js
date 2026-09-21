import { Eu as rebrandPiStateTitle, Tu as isLegacyPiCompatibleTitle, fu as getSyntheticAgentTitleProfile, mu as getAgentLabel, su as detectAgentStatusFromTitle, uu as SYNTHETIC_AGENT_TITLE_PROFILES, wu as getWrapperTitleSegments } from "./store-C9f8FDJV.js";
var LEGACY_PI_BRAND = "π", COMPATIBLE_IDLE_TITLE_RE = RegExp("(?<![\\w./\\\\-])(?:ready|idle|done)(?![\\w-])", "i");
function getProfileForTitleLabel(e) {
	if (!e) return null;
	let d = e.trim().toLowerCase();
	for (let e of Object.values(SYNTHETIC_AGENT_TITLE_PROFILES)) if (e.workingLabel.toLowerCase() === d) return { profile: e };
	return null;
}
function getProfileForTitle(e) {
	let f = getWrapperTitleSegments(e), m = null;
	for (let e of f) {
		let f = getProfileForTitleLabel(getAgentLabel(e)), h = isLegacyPiCompatibleTitle(e) ? getProfileForTitleLabel("Pi") : null, g = f ?? h;
		if (!g) continue;
		let _ = {
			...g,
			sourceTitle: e
		};
		if (g.profile.titleIdentityGroup) return _;
		m ??= _;
	}
	return m;
}
function getSourceTitleStatus(e) {
	return detectAgentStatusFromTitle(e) || (isLegacyPiCompatibleTitle(e) ? "idle" : null);
}
function hasPermissionSuffix(e, d) {
	let f = e.trim().toLowerCase();
	return f === d.permissionLabel.toLowerCase() || f.includes("action required") || f.includes("permission") || f.includes("waiting");
}
function hasIdleSuffix(e, d) {
	return e.trim().toLowerCase() === d.idleLabel.toLowerCase() || COMPATIBLE_IDLE_TITLE_RE.test(e);
}
function resolveCompatibleAgentTypeForOwner(e, d, p) {
	if (!e) return;
	let m = getSyntheticAgentTitleProfile(e), h = getSyntheticAgentTitleProfile(d);
	return !m?.titleIdentityGroup || !h?.titleIdentityGroup || m.titleIdentityGroup !== h.titleIdentityGroup ? e : d;
}
function normalizeCompatibleAgentTitleForOwner(p, m, h) {
	let g = getSyntheticAgentTitleProfile(m);
	if (!g?.titleIdentityGroup) return p;
	let v = getProfileForTitle(p);
	if (!v?.profile.titleIdentityGroup || v.profile.titleIdentityGroup !== g.titleIdentityGroup) return p;
	let y = rebrandPiStateTitle(p, g.workingLabel);
	if (y !== null) return y;
	if (isLegacyPiCompatibleTitle(v.sourceTitle)) {
		let e = v.sourceTitle.replace(LEGACY_PI_BRAND, g.workingLabel), d = p.lastIndexOf(v.sourceTitle);
		return d === -1 ? e : p.slice(0, d) + e;
	}
	let b = getSourceTitleStatus(v.sourceTitle);
	return b === "working" ? `\u280b ${g.workingLabel}` : b === "permission" ? g.permissionLabel : b === "idle" ? g.idleLabel : hasPermissionSuffix(v.sourceTitle, v.profile) ? g.permissionLabel : hasIdleSuffix(v.sourceTitle, v.profile) ? g.idleLabel : g.workingLabel;
}
function normalizeCompatibleAgentStatusEntryForOwner(e, d, f) {
	let p = resolveCompatibleAgentTypeForOwner(e.agentType, d, f), m = e.terminalTitle ? normalizeCompatibleAgentTitleForOwner(e.terminalTitle, p ?? d, f) : e.terminalTitle;
	return p === e.agentType && m === e.terminalTitle ? e : {
		...e,
		...p ? { agentType: p } : {},
		...m ? { terminalTitle: m } : {}
	};
}
function shareCompatibleTitleIdentityGroup(e, d) {
	if (!e || !d) return !1;
	if (e === d) return !0;
	let p = getSyntheticAgentTitleProfile(e)?.titleIdentityGroup, m = getSyntheticAgentTitleProfile(d)?.titleIdentityGroup;
	return !!(p && p === m);
}
var PANE_OWNER_RANK = [
	{
		key: "launchAgent",
		ownerIsLaunch: !0
	},
	{
		key: "startupLaunchAgent",
		ownerIsLaunch: !0
	},
	{
		key: "initialStatusAgent",
		ownerIsLaunch: !0
	},
	{
		key: "commandInferredAgent",
		ownerIsLaunch: !0
	},
	{
		key: "hookAgent",
		ownerIsLaunch: !1
	},
	{
		key: "siblingHookAgent",
		ownerIsLaunch: !1
	},
	{
		key: "completedHookAgent",
		ownerIsLaunch: !1
	},
	{
		key: "siblingCompletedHookAgent",
		ownerIsLaunch: !1
	},
	{
		key: "sleepingSessionAgent",
		ownerIsLaunch: !1
	}
];
function resolvePaneAgentOwnerRecord(e) {
	for (let { key: d, ownerIsLaunch: f } of PANE_OWNER_RANK) {
		let p = e[d];
		if (p) return {
			agent: p,
			ownerIsLaunch: f
		};
	}
	return null;
}
function resolvePaneAgentOwner(e) {
	return resolvePaneAgentOwnerRecord(e)?.agent ?? null;
}
export { resolveCompatibleAgentTypeForOwner as a, normalizeCompatibleAgentTitleForOwner as i, resolvePaneAgentOwnerRecord as n, shareCompatibleTitleIdentityGroup as o, normalizeCompatibleAgentStatusEntryForOwner as r, resolvePaneAgentOwner as t };
