import { i as translate } from "./i18n-CakWKPtl.js";
import { t as createLocalizedCatalog } from "./localized-catalog-Dsz6wk5E.js";
import { n as translateSearchKeyword } from "./settings-search-keywords-C_O7SFh7.js";
const USAGE_PERCENTAGE_DISPLAY_SETTING_ID = "usage-percentage-display";
function resolveAppearanceAccordionDeepLink(e) {
	return e === "usage-percentage-display" ? "window" : null;
}
const getUsagePercentageDisplayEntry = createLocalizedCatalog(() => ({
	title: translate("auto.components.settings.appearance.search.usagePercentageDisplayTitle", "Usage percentages"),
	description: translate("auto.components.settings.appearance.search.usagePercentageDisplayDescription", "Choose whether provider limits show the percentage used or remaining."),
	keywords: [...translateSearchKeyword("auto.components.settings.appearance.search.00a028f25f", "usage"), ...translateSearchKeyword("auto.components.settings.appearance.search.896eb53fd4", "status bar")]
}));
export { getUsagePercentageDisplayEntry as n, resolveAppearanceAccordionDeepLink as r, USAGE_PERCENTAGE_DISPLAY_SETTING_ID as t };
