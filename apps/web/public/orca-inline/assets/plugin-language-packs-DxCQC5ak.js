import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { d as create } from "./stale-document-visibility-rSdoU229.js";
var TRANSLATABLE_PLUGIN_CHROME = new Set(/* @__PURE__ */ "auto.components.settings.PluginsSettingsSection.title,auto.components.settings.PluginsSettingsSection.systemLabel,auto.components.settings.PluginsSettingsSection.install,auto.components.settings.PluginsSettingsSection.loading,auto.components.settings.PluginsSettingsSection.empty,auto.components.settings.PluginsSettingsSection.emptyTitle,auto.components.settings.PluginsSettingsSection.noInstalledResults,auto.components.settings.PluginsSettingsSection.noInstalledResultsTitle,auto.components.settings.PluginMarketplaceBrowser.manageSources,auto.components.settings.PluginMarketplaceBrowser.addSource,auto.components.settings.PluginMarketplaceBrowser.refresh,auto.components.settings.PluginMarketplaceBrowser.refreshing,auto.components.settings.PluginMarketplaceBrowser.loading,auto.components.settings.PluginMarketplaceBrowser.tryAgain,auto.components.settings.PluginMarketplaceBrowser.clearSearch,auto.components.settings.PluginMarketplaceBrowser.empty,auto.components.settings.PluginMarketplaceBrowser.emptyTitle,auto.components.settings.PluginMarketplaceBrowser.noInstalled,auto.components.settings.PluginMarketplaceBrowser.noInstalledTitle,auto.components.settings.PluginMarketplaceBrowser.noResults,auto.components.settings.PluginMarketplaceBrowser.noResultsTitle,auto.components.settings.PluginMarketplaceBrowser.noSourcesTitle,auto.components.settings.PluginDevelopmentSection.title,auto.components.settings.PluginDevelopmentSection.add,auto.components.settings.PluginDevelopmentSection.remove,auto.components.settings.PluginDevelopmentSection.pathLabel,auto.components.settings.PluginDevelopmentSection.pathRequired,auto.components.settings.PluginDevelopmentSection.placeholder,auto.components.settings.plugins.search.title,auto.components.settings.plugins.search.description,auto.components.settings.plugins.search.install,auto.components.settings.plugins.search.permissions,auto.components.settings.plugins.search.logs,auto.components.settings.plugins.search.development".split(","));
function translatablePluginChrome(e) {
	return TRANSLATABLE_PLUGIN_CHROME.has(e);
}
function translatablePluginChromeContainer(e) {
	let h = `${e}.`;
	for (let e of TRANSLATABLE_PLUGIN_CHROME) if (e.startsWith(h)) return !0;
	return !1;
}
var DANGEROUS_CATALOG_KEYS = new Set([
	"__proto__",
	"prototype",
	"constructor"
]), PROTECTED_TRANSLATION_ROOT = "auto.components.settings.", PROTECTED_TRANSLATION_MODULE = /^plugin/i;
function isPluginLanguagePackRegistration(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !1;
	let h = e;
	return typeof h.id == "string" && h.id.startsWith("plugin:") && typeof h.resourceLanguage == "string" && h.resourceLanguage === pluginLanguageResourceId(h.id) && typeof h.pluginKey == "string" && typeof h.locale == "string" && checkPluginLanguagePackCatalog(h.catalog).ok;
}
function pluginLanguageResourceId(e) {
	let h = "";
	for (let g = 0; g < e.length; g += 1) h += e.charCodeAt(g).toString(16).padStart(4, "0");
	return `plugin${h}`;
}
function isCatalogObject(e) {
	return typeof e == "object" && !!e && !Array.isArray(e) && Object.getPrototypeOf(e) === Object.prototype;
}
function protectedTranslation(e) {
	return !e.startsWith(PROTECTED_TRANSLATION_ROOT) || translatablePluginChrome(e) ? !1 : PROTECTED_TRANSLATION_MODULE.test(e.slice(25));
}
function hasUnsafeCatalogKeyCharacter(e) {
	if (e.includes(".")) return !0;
	for (let h = 0; h < e.length; h += 1) if (e.charCodeAt(h) <= 31) return !0;
	return !1;
}
function checkPluginLanguagePackCatalog(e) {
	let h = walkPluginLanguagePackCatalog(e, !1);
	return h.ok ? {
		ok: !0,
		entries: h.entries
	} : h;
}
function walkPluginLanguagePackCatalog(e, h) {
	if (!isCatalogObject(e)) return {
		ok: !1,
		error: "language pack root must be an object"
	};
	let g = h ? {} : null, _ = [{
		source: e,
		target: g,
		path: "",
		depth: 0
	}], v = new WeakSet([e]), y = 0;
	for (; _.length > 0;) {
		let e = _.pop();
		if (e.depth > 16) return {
			ok: !1,
			error: "catalog exceeds depth 16"
		};
		for (let h of Object.keys(e.source)) {
			let g = e.source[h];
			if (y += 1, y > 2e4) return {
				ok: !1,
				error: "catalog exceeds 20000 entries"
			};
			if (h.length === 0 || h.length > 128 || DANGEROUS_CATALOG_KEYS.has(h) || hasUnsafeCatalogKeyCharacter(h)) return {
				ok: !1,
				error: `catalog key ${h || "(empty)"} is not safe`
			};
			let b = e.path ? `${e.path}.${h}` : h;
			if (protectedTranslation(b) && !(isCatalogObject(g) && translatablePluginChromeContainer(b))) return {
				ok: !1,
				error: `catalog cannot replace protected security copy at ${b}`
			};
			if (typeof g == "string") {
				if (g.length > 8192) return {
					ok: !1,
					error: `translation at ${b} exceeds 8192 characters`
				};
				e.target && (e.target[h] = g);
				continue;
			}
			if (!isCatalogObject(g)) return {
				ok: !1,
				error: `translation at ${b} must be a string or object`
			};
			if (v.has(g)) return {
				ok: !1,
				error: `catalog contains a repeated or cyclic object at ${b}`
			};
			v.add(g);
			let x = e.target ? {} : null;
			e.target && x && (e.target[h] = x), _.push({
				source: g,
				target: x,
				path: b,
				depth: e.depth + 1
			});
		}
	}
	return {
		ok: !0,
		catalog: g,
		entries: y
	};
}
var import_react = /* @__PURE__ */ __toESM(require_react()), requestGeneration = 0, changeSubscriptionStarted = !1;
const usePluginLanguagePackStore = create()((e) => ({
	packs: [],
	loaded: !1,
	fetchPacks: async () => {
		let h = ++requestGeneration, g = window.api?.plugins;
		if (!g?.listLanguagePacks) {
			h === requestGeneration && e({
				packs: [],
				loaded: !0
			});
			return;
		}
		try {
			let _ = await g.listLanguagePacks(), v = Array.isArray(_) ? _.filter(isPluginLanguagePackRegistration) : [];
			Array.isArray(_) ? v.length !== _.length && console.warn(`[plugins] Ignoring ${_.length - v.length} of ${_.length} malformed language packs`) : console.warn(`[plugins] Ignoring non-array language-pack list (${typeof _})`), h === requestGeneration && e({
				packs: v,
				loaded: !0
			});
		} catch {
			h === requestGeneration && e({
				packs: [],
				loaded: !0
			});
		}
	}
}));
function ensurePluginLanguagePacksLoaded() {
	let e = usePluginLanguagePackStore.getState();
	e.loaded || e.fetchPacks(), !changeSubscriptionStarted && window.api?.plugins?.onChanged && (changeSubscriptionStarted = !0, window.api.plugins.onChanged((e) => {
		(e?.contentPacksChanged ?? !0) && usePluginLanguagePackStore.getState().fetchPacks();
	}));
}
function usePluginLanguagePacks() {
	let e = usePluginLanguagePackStore((e) => e.packs);
	return (0, import_react.useEffect)(() => ensurePluginLanguagePacksLoaded(), []), e;
}
export { usePluginLanguagePacks as n, usePluginLanguagePackStore as t };
