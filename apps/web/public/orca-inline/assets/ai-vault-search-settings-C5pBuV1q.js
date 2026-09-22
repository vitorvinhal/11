import { F as object, P as number, k as boolean } from "./stale-document-visibility-rSdoU229.js";
const DEFAULT_AI_VAULT_SEARCH_SETTINGS = {
	enabled: !1,
	historyDays: null
};
var HISTORY_DAYS_MAX = 3650;
const AiVaultSearchSettingsSchema = object({
	enabled: boolean(),
	historyDays: number().int().positive().max(HISTORY_DAYS_MAX).nullable()
});
function normalizeAiVaultSearchHistoryDays(e) {
	if (typeof e != "number" || !Number.isFinite(e) || e <= 0) return null;
	let s = Math.floor(e);
	return s <= 0 ? null : Math.min(HISTORY_DAYS_MAX, s);
}
function resolveAiVaultSearchSettings(e) {
	let s = e?.aiVaultSearch;
	return typeof s != "object" || !s ? { ...DEFAULT_AI_VAULT_SEARCH_SETTINGS } : {
		enabled: "enabled" in s && s.enabled === !0,
		historyDays: normalizeAiVaultSearchHistoryDays("historyDays" in s ? s.historyDays : null)
	};
}
export { resolveAiVaultSearchSettings as n, AiVaultSearchSettingsSchema as t };
