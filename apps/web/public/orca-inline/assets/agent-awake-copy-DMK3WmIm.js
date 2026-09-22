import { i as translate } from "./i18n-CakWKPtl.js";
import { t as searchKeywords } from "./settings-search-keywords-C_O7SFh7.js";
var AGENT_AWAKE_TITLE_KEY = "auto.components.settings.agent-awake-copy.modeTitle", AGENT_AWAKE_DESCRIPTION_WINDOWS_KEY = "auto.components.settings.agent-awake-copy.modeDescriptionWindows", AGENT_AWAKE_DESCRIPTION_DEFAULT_KEY = "auto.components.settings.agent-awake-copy.modeDescriptionDefault";
function getAgentAwakeTitle() {
	return translate(AGENT_AWAKE_TITLE_KEY, "Keep computer awake");
}
function getAgentAwakeModeLabel(s) {
	return s === "on" ? translate("auto.components.settings.AgentAwakeSetting.on", "On") : s === "auto" ? translate("auto.components.settings.AgentAwakeSetting.auto", "Agent") : translate("auto.components.settings.AgentAwakeSetting.off", "Off");
}
function getAgentAwakeDescription(s = typeof navigator > "u" ? "" : navigator.userAgent) {
	return s.includes("Windows") ? translate(AGENT_AWAKE_DESCRIPTION_WINDOWS_KEY, "Choose On, Agent, or Off. Agent mode stays awake while agents are working; lid-close behavior follows this device's power settings.") : translate(AGENT_AWAKE_DESCRIPTION_DEFAULT_KEY, "Choose On, Agent, or Off. Agent mode stays awake while agents are working. Orca also asks this device to stay awake when the lid is closed, subject to its power policy.");
}
function getAgentAwakeSearchKeywords(e = typeof navigator > "u" ? "" : navigator.userAgent) {
	let c = searchKeywords([
		{
			key: "auto.components.settings.agents.search.66b6b82eb4",
			fallback: "awake"
		},
		{
			key: "auto.components.settings.agents.search.dbc8aca6b0",
			fallback: "sleep"
		},
		{
			key: "auto.components.settings.agents.search.845ad9128a",
			fallback: "power"
		},
		{
			key: "auto.components.settings.agents.search.96ba2373b6",
			fallback: "agent"
		},
		{
			key: "auto.components.settings.agents.search.48f84d10f1",
			fallback: "running"
		},
		{
			key: "auto.components.settings.agents.search.affbf130f6",
			fallback: "working"
		},
		{
			key: "auto.components.settings.agents.search.0d1c334987",
			fallback: "lid"
		},
		{
			key: "auto.components.settings.agents.search.ff8de8a2ad",
			fallback: "display"
		}
	]);
	return e.includes("Linux") ? [...c, ...searchKeywords([{
		key: "auto.components.settings.agents.search.f622b8eb2a",
		fallback: "linux"
	}])] : c;
}
export { getAgentAwakeTitle as i, getAgentAwakeModeLabel as n, getAgentAwakeSearchKeywords as r, getAgentAwakeDescription as t };
