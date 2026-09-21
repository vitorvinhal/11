import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { d as create } from "./stale-document-visibility-rSdoU229.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), pluginListGeneration = 0, pluginListRetryAttempt = 0, pluginListRetryTimer = null, PLUGIN_LIST_MAX_RETRIES = 2;
function schedulePluginListRetry(e) {
	if (pluginListRetryAttempt >= PLUGIN_LIST_MAX_RETRIES) {
		pluginListRetryAttempt = 0;
		return;
	}
	pluginListRetryAttempt += 1;
	let _ = 250 * 2 ** (pluginListRetryAttempt - 1);
	pluginListRetryTimer = setTimeout(() => {
		pluginListRetryTimer = null;
		let _ = usePluginPanelsStore.getState();
		e === pluginListGeneration && _.fetchStatus === "error" && _.fetchPlugins();
	}, _);
}
const usePluginPanelsStore = create()((e) => ({
	plugins: [],
	panelErrors: {},
	fetchStatus: "idle",
	fetchPlugins: async () => {
		let _ = ++pluginListGeneration, v = window.api?.plugins;
		if (!v) {
			_ === pluginListGeneration && (pluginListRetryAttempt = 0, e({
				fetchStatus: "ready",
				plugins: [],
				panelErrors: {}
			}));
			return;
		}
		e({ fetchStatus: "loading" });
		try {
			let y = await v.list();
			_ === pluginListGeneration && (pluginListRetryAttempt = 0, e((e) => ({
				plugins: y,
				fetchStatus: "ready",
				panelErrors: retainInstalledPanelErrors(e.panelErrors, y)
			})));
		} catch {
			_ === pluginListGeneration && (e({
				plugins: [],
				panelErrors: {},
				fetchStatus: "error"
			}), schedulePluginListRetry(_));
		}
	},
	setPlugins: (_) => {
		pluginListGeneration += 1, pluginListRetryAttempt = 0, pluginListRetryTimer &&= (clearTimeout(pluginListRetryTimer), null), e((e) => ({
			plugins: _,
			fetchStatus: "ready",
			panelErrors: retainInstalledPanelErrors(e.panelErrors, _)
		}));
	},
	setPanelHealth: (_, v) => {
		e((e) => {
			let y = { ...e.panelErrors };
			return v === "error" ? y[_] = !0 : delete y[_], { panelErrors: y };
		});
	}
}));
function retainInstalledPanelErrors(e, _) {
	let v = collectInstalledPluginTabKeys(_);
	return Object.fromEntries(Object.entries(e).filter(([e]) => v.has(e)));
}
var changeSubscriptionStarted = !1;
function ensurePluginPanelsLoaded() {
	let { fetchStatus: e, fetchPlugins: _ } = usePluginPanelsStore.getState();
	e === "idle" && _(), !changeSubscriptionStarted && window.api?.plugins?.onChanged && (changeSubscriptionStarted = !0, window.api.plugins.onChanged(() => {
		usePluginPanelsStore.getState().fetchPlugins();
	}));
}
function collectActivePluginPanels(e) {
	return e.filter((e) => e.status === "running" || e.status === "restarting" || e.status === "idle").flatMap((e) => e.panels.map((_) => ({
		..._,
		pluginKey: e.pluginKey,
		pluginName: e.name
	})));
}
function collectInstalledPluginTabKeys(e) {
	return new Set(e.flatMap((e) => e.panels.map((e) => e.tabKey)));
}
function collectActivePluginCommands(e) {
	return e.filter((e) => e.status === "running" || e.status === "restarting" || e.status === "idle").flatMap((e) => e.commands.map((_) => ({
		..._,
		pluginKey: e.pluginKey,
		pluginName: e.name
	})));
}
function collectEditablePluginCommands(e) {
	return e.filter((e) => [
		"running",
		"restarting",
		"idle",
		"errored"
	].includes(e.status)).flatMap((e) => e.commands.map((_) => ({
		..._,
		pluginKey: e.pluginKey,
		pluginName: e.name
	})));
}
function usePluginPanels() {
	let e = usePluginPanelsStore((e) => e.plugins);
	return (0, import_react.useEffect)(() => {
		ensurePluginPanelsLoaded();
	}, []), (0, import_react.useMemo)(() => collectActivePluginPanels(e), [e]);
}
function usePluginCommands() {
	let e = usePluginPanelsStore((e) => e.plugins);
	return (0, import_react.useEffect)(() => {
		ensurePluginPanelsLoaded();
	}, []), (0, import_react.useMemo)(() => collectActivePluginCommands(e), [e]);
}
function useEditablePluginCommands() {
	let e = usePluginPanelsStore((e) => e.plugins);
	return (0, import_react.useEffect)(() => {
		ensurePluginPanelsLoaded();
	}, []), (0, import_react.useMemo)(() => collectEditablePluginCommands(e), [e]);
}
export { usePluginPanelsStore as a, usePluginPanels as i, useEditablePluginCommands as n, usePluginCommands as r, collectInstalledPluginTabKeys as t };
