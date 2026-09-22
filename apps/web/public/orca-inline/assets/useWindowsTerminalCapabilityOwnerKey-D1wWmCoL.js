import { i as translate } from "./i18n-CakWKPtl.js";
import { u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { Gl as getWindowsTerminalCapabilityOwnerKey, t as useAppStore, wl as isWebClientLocation } from "./store-C9f8FDJV.js";
import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
import { t as createLocalizedCatalog } from "./localized-catalog-Dsz6wk5E.js";
import { n as getAgentCatalog } from "./agent-catalog-Cgr0_vcs.js";
import { n as translateSearchKeyword, r as uniqueKeywords, t as searchKeywords } from "./settings-search-keywords-C_O7SFh7.js";
import { i as getAgentAwakeTitle, r as getAgentAwakeSearchKeywords, t as getAgentAwakeDescription } from "./agent-awake-copy-DMK3WmIm.js";
var Blocks = createLucideIcon("blocks", [["path", {
	d: "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",
	key: "1ah6g2"
}], ["rect", {
	x: "14",
	y: "2",
	width: "8",
	height: "8",
	rx: "1",
	key: "88lufb"
}]]), SETTINGS_SEARCH_NO_MATCH_SCORE = 0, SETTINGS_SEARCH_EMPTY_QUERY_SCORE = 1, PANE_TITLE_SCORE = {
	exact: 900,
	prefix: 850,
	substring: 800
}, ENTRY_TITLE_SCORE = {
	exact: 700,
	prefix: 650,
	substring: 600
}, DESCRIPTION_SCORE = {
	exact: 500,
	prefix: 450,
	substring: 400
}, KEYWORD_SCORE = {
	exact: 300,
	prefix: 250,
	substring: 200
};
function isSettingsSearchQueryTooLarge(b, W = 2048) {
	return isClipboardTextByteLengthOverLimit(b, W);
}
function normalizeSettingsSearchQuery(b) {
	return b.trim().toLowerCase();
}
function scoreSettingsSearchText(b, W, G) {
	if (!W) return SETTINGS_SEARCH_NO_MATCH_SCORE;
	let K = W.toLowerCase();
	return K === b ? G.exact : K.startsWith(b) ? G.prefix : K.includes(b) ? G.substring : SETTINGS_SEARCH_NO_MATCH_SCORE;
}
function scoreSettingsSearchValues(b, W, G) {
	return (W ?? []).reduce((W, K) => Math.max(W, scoreSettingsSearchText(b, K, G)), SETTINGS_SEARCH_NO_MATCH_SCORE);
}
function scoreSettingsSearch(b, W) {
	if (isSettingsSearchQueryTooLarge(b)) return SETTINGS_SEARCH_NO_MATCH_SCORE;
	let G = normalizeSettingsSearchQuery(b);
	return G ? (Array.isArray(W) ? W : [W]).reduce((b, W, K) => {
		let q = K === 0 ? PANE_TITLE_SCORE : ENTRY_TITLE_SCORE;
		return Math.max(b, scoreSettingsSearchText(G, W.title, q), scoreSettingsSearchText(G, W.description, DESCRIPTION_SCORE), scoreSettingsSearchValues(G, W.keywords, KEYWORD_SCORE));
	}, SETTINGS_SEARCH_NO_MATCH_SCORE) : SETTINGS_SEARCH_EMPTY_QUERY_SCORE;
}
function getSettingsSectionSearchEntries(b) {
	return [{
		title: b.title,
		description: b.description
	}, ...b.searchEntries];
}
function rankSettingsSearchItems(b, W, G) {
	return isSettingsSearchQueryTooLarge(b) ? [] : normalizeSettingsSearchQuery(b) ? W.map((W, K) => ({
		item: W,
		index: K,
		score: scoreSettingsSearch(b, G(W))
	})).filter((b) => b.score > SETTINGS_SEARCH_NO_MATCH_SCORE).sort((b, W) => W.score - b.score || b.index - W.index).map(({ item: b, score: W }) => ({
		item: b,
		score: W
	})) : W.map((b) => ({
		item: b,
		score: SETTINGS_SEARCH_EMPTY_QUERY_SCORE
	}));
}
function matchesSettingsSearch(b, W) {
	return scoreSettingsSearch(b, W) > SETTINGS_SEARCH_NO_MATCH_SCORE;
}
const getAgentCacheTimerSearchEntries = createLocalizedCatalog(() => [{
	title: translate("auto.components.settings.general.search.1e0f28c6f1", "Prompt Cache Timer"),
	description: translate("auto.components.settings.general.search.40c9585e43", "Countdown timer showing time until prompt cache expires (Claude agents)."),
	keywords: [
		...translateSearchKeyword("auto.components.settings.general.search.b2601a778c", "cache"),
		...translateSearchKeyword("auto.components.settings.general.search.939b80f5fd", "timer"),
		...translateSearchKeyword("auto.components.settings.general.search.0efc9d96ad", "prompt"),
		...translateSearchKeyword("auto.components.settings.general.search.585beac3f8", "ttl"),
		...translateSearchKeyword("auto.components.settings.general.search.95b63edde7", "claude"),
		...translateSearchKeyword("auto.components.settings.general.search.660528b048", "cost"),
		...translateSearchKeyword("auto.components.settings.general.search.3462308bd3", "tokens")
	]
}]);
var AGENT_GENERATED_TAB_TITLES_TITLE_KEY = "auto.components.settings.agent-generated-tab-title-copy.19ad21615a", AGENT_GENERATED_TAB_TITLES_DESCRIPTION_KEY = "auto.components.settings.agent-generated-tab-title-copy.b036c7a409";
function getAgentGeneratedTabTitlesTitle() {
	return translate(AGENT_GENERATED_TAB_TITLES_TITLE_KEY, "Auto-generate tab titles");
}
function getAgentGeneratedTabTitlesDescription() {
	return translate(AGENT_GENERATED_TAB_TITLES_DESCRIPTION_KEY, "Derive short stable tab names from the first known agent prompt. Manual renames always win.");
}
function getAgentGeneratedTabTitlesSearchKeywords() {
	return searchKeywords([
		{
			key: "auto.components.settings.agents.search.96ba2373b6",
			fallback: "agent"
		},
		{
			key: "auto.components.settings.agents.search.be7ea3553b",
			fallback: "tab"
		},
		{
			key: "auto.components.settings.agents.search.6956646a1e",
			fallback: "title"
		},
		{
			key: "auto.components.settings.agents.search.32836788b0",
			fallback: "generated title"
		},
		{
			key: "auto.components.settings.agents.search.966890236d",
			fallback: "name"
		},
		{
			key: "auto.components.settings.agents.search.848dcae8d3",
			fallback: "generated"
		},
		{
			key: "auto.components.settings.agents.search.52115d0d7c",
			fallback: "auto"
		},
		{
			key: "auto.components.settings.agents.search.c64059f50d",
			fallback: "prompt"
		},
		{
			key: "auto.components.settings.agents.search.5784ae8c43",
			fallback: "rename"
		},
		{
			key: "auto.components.settings.agents.search.8a17fd6026",
			fallback: "stable"
		},
		{
			key: "auto.components.settings.agents.search.a79d266f71",
			fallback: "session"
		},
		{
			key: "auto.components.settings.agents.search.afbf35be68",
			fallback: "stable session"
		}
	]);
}
var AGENT_STATUS_HOOKS_TITLE_KEY = "auto.components.settings.agent-status-hooks-copy.7707c15abb", AGENT_STATUS_HOOKS_DESCRIPTION_KEY = "auto.components.settings.agent-status-hooks-copy.a68a642835";
function getAgentStatusHooksTitle() {
	return translate(AGENT_STATUS_HOOKS_TITLE_KEY, "Agent status hooks");
}
function getAgentStatusHooksDescription() {
	return translate(AGENT_STATUS_HOOKS_DESCRIPTION_KEY, "Shows working, waiting, and done states in Orca. Turn off to remove Orca-managed hooks and stop reinstalling them.");
}
function getAgentStatusHooksSearchKeywords() {
	return searchKeywords([
		{
			key: "auto.components.settings.agents.search.0d752916f8",
			fallback: "hooks"
		},
		{
			key: "auto.components.settings.agents.search.6984d4291a",
			fallback: "status"
		},
		{
			key: "auto.components.settings.agents.search.affbf130f6",
			fallback: "working"
		},
		{
			key: "auto.components.settings.agents.search.13b20636a6",
			fallback: "waiting"
		},
		{
			key: "auto.components.settings.agents.search.8599603496",
			fallback: "done"
		},
		{
			key: "auto.components.settings.agents.search.ea71995548",
			fallback: "remove"
		},
		{
			key: "auto.components.settings.agents.search.c1317fe641",
			fallback: "restore"
		},
		{
			key: "auto.components.settings.agents.search.5963143e00",
			fallback: "settings"
		},
		{
			key: "auto.components.settings.agents.search.042c551bc5",
			fallback: "config"
		},
		{
			key: "auto.components.settings.agents.search.f412abbba5",
			fallback: "claude",
			englishOnly: !0
		},
		{
			key: "auto.components.settings.agents.search.5ded38b843",
			fallback: "codex",
			englishOnly: !0
		}
	]);
}
function buildAgentSettingsKeywords() {
	let b = searchKeywords([
		{
			key: "auto.components.settings.agents.search.96ba2373b6",
			fallback: "agent"
		},
		{
			key: "auto.components.settings.agents.search.d8f3a8b8a0",
			fallback: "default"
		},
		{
			key: "auto.components.settings.agents.search.167daeb5e9",
			fallback: "command"
		},
		{
			key: "auto.components.settings.agents.search.be59907510",
			fallback: "override"
		},
		{
			key: "auto.components.settings.agents.search.a6d594c17d",
			fallback: "install"
		},
		{
			key: "auto.components.settings.agents.search.f2932bf22b",
			fallback: "detected"
		},
		{
			key: "auto.components.settings.agents.search.2afd3b5858",
			fallback: "enable"
		},
		{
			key: "auto.components.settings.agents.search.60393e1b17",
			fallback: "disable"
		},
		{
			key: "auto.components.settings.agents.search.2e188c771c",
			fallback: "hide"
		},
		{
			key: "auto.components.settings.agents.search.87fffe6c20",
			fallback: "show"
		},
		{
			key: "auto.components.settings.agents.search.permission",
			fallback: "permission"
		},
		{
			key: "auto.components.settings.agents.search.permissions",
			fallback: "permissions"
		},
		{
			key: "auto.components.settings.agents.search.yolo",
			fallback: "yolo",
			englishOnly: !0
		},
		{
			key: "auto.components.settings.agents.search.manual",
			fallback: "manual"
		},
		{
			key: "auto.components.settings.agents.search.e2b7c0dcd7",
			fallback: "github",
			englishOnly: !0
		}
	]);
	for (let W of getAgentCatalog()) b.push(...expandAgentSearchText(W.id), ...expandAgentSearchText(W.label)), b.push(...expandAgentSearchText(W.cmd));
	return uniqueKeywords(b);
}
function expandAgentSearchText(b) {
	let W = b.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[-_]+/g, " ").trim();
	return W === b ? [b] : [b, W];
}
var AGENT_AWAKE_SEARCH_ENTRY_ID = "agent-awake", AGENT_RUNTIME_SEARCH_ENTRY_ID = "agent-runtime", getAllAgentsPaneSearchEntries = createLocalizedCatalog(() => [
	{
		title: translate("auto.components.settings.agents.search.bb9ad95777", "Agents"),
		description: translate("auto.components.settings.agents.search.01926b9d8c", "Configure AI coding agents, default agent, and command overrides."),
		keywords: buildAgentSettingsKeywords()
	},
	{
		title: translate("auto.components.settings.agents.search.agentRuntime", "Agent Runtime"),
		id: AGENT_RUNTIME_SEARCH_ENTRY_ID,
		description: translate("auto.components.settings.agents.search.agentRuntimeDescription", "Choose whether agents are detected and launched on Windows or in WSL by default."),
		keywords: [
			...translateSearchKeyword("auto.components.settings.agents.search.96ba2373b6", "agent"),
			...translateSearchKeyword("auto.components.settings.agents.search.runtime", "runtime"),
			...translateSearchKeyword("auto.components.settings.agents.search.d2952dfd74", "location"),
			...translateSearchKeyword("auto.components.settings.agents.search.agentLocation", "agent location"),
			...translateSearchKeyword("auto.components.settings.agents.search.77c02fa3c3", "windows"),
			...translateSearchKeyword("auto.components.settings.agents.search.d608654c03", "wsl"),
			...translateSearchKeyword("auto.components.settings.agents.search.f622b8eb2a", "linux"),
			...translateSearchKeyword("auto.components.settings.agents.search.839e82c81f", "detect"),
			...translateSearchKeyword("auto.components.settings.agents.search.2814401339", "installed"),
			...translateSearchKeyword("auto.components.settings.agents.search.installedAgentsWsl", "installed agents in wsl"),
			...translateSearchKeyword("auto.components.settings.agents.search.719f53350c", "path")
		]
	},
	{
		title: getAgentStatusHooksTitle(),
		description: getAgentStatusHooksDescription(),
		keywords: getAgentStatusHooksSearchKeywords()
	},
	{
		title: getAgentGeneratedTabTitlesTitle(),
		description: getAgentGeneratedTabTitlesDescription(),
		keywords: getAgentGeneratedTabTitlesSearchKeywords()
	},
	{
		title: getAgentAwakeTitle(),
		id: AGENT_AWAKE_SEARCH_ENTRY_ID,
		description: getAgentAwakeDescription(),
		keywords: getAgentAwakeSearchKeywords()
	},
	{
		title: translate("auto.components.settings.agents.search.agentPermissions", "Agent Permissions"),
		description: translate("auto.components.settings.agents.search.agentPermissionsDescription", "Switch agent permission defaults between Yolo and Manual."),
		keywords: [
			...translateSearchKeyword("auto.components.settings.agents.search.permission", "permission"),
			...translateSearchKeyword("auto.components.settings.agents.search.permissions", "permissions"),
			...translateSearchKeyword("auto.components.settings.agents.search.yolo", "yolo"),
			...translateSearchKeyword("auto.components.settings.agents.search.manual", "manual"),
			...translateSearchKeyword("auto.components.settings.agents.search.skip", "skip"),
			...translateSearchKeyword("auto.components.settings.agents.search.checks", "checks")
		]
	},
	...getAgentCacheTimerSearchEntries()
]);
function getAgentsPaneSearchEntries({ includeAgentAwake: b = !0, includeAgentRuntime: W = !0 } = {}) {
	return getAllAgentsPaneSearchEntries().filter((G) => (!("id" in G) || G.id !== AGENT_RUNTIME_SEARCH_ENTRY_ID || W) && (!("id" in G) || G.id !== AGENT_AWAKE_SEARCH_ENTRY_ID || b));
}
function resolveWindowsTerminalCapabilityOwnerKey(b) {
	let W = b.activeRuntimeEnvironmentId?.trim() || null, K = b.isWebClient ? b.runtimeEnvironments[0] ?? null : null, q = getWindowsTerminalCapabilityOwnerKey(K?.id ?? W, b.sshConnectionId);
	return K ? `${q}:pairing:${K.pairingRevision ?? K.createdAt}:connection:${b.runtimeStatusByEnvironmentId?.get(K.id)?.connectionGeneration ?? 0}` : q;
}
function useWindowsTerminalCapabilityOwnerKey(b, W) {
	let G = isWebClientLocation();
	return useAppStore((K) => resolveWindowsTerminalCapabilityOwnerKey({
		activeRuntimeEnvironmentId: b,
		isWebClient: G,
		runtimeEnvironments: K.runtimeEnvironments ?? [],
		runtimeStatusByEnvironmentId: K.runtimeStatusByEnvironmentId,
		sshConnectionId: W
	}));
}
export { getAgentGeneratedTabTitlesDescription as a, getSettingsSectionSearchEntries as c, rankSettingsSearchItems as d, scoreSettingsSearch as f, getAgentStatusHooksTitle as i, matchesSettingsSearch as l, getAgentsPaneSearchEntries as n, getAgentGeneratedTabTitlesTitle as o, Blocks as p, getAgentStatusHooksDescription as r, getAgentCacheTimerSearchEntries as s, useWindowsTerminalCapabilityOwnerKey as t, normalizeSettingsSearchQuery as u };
