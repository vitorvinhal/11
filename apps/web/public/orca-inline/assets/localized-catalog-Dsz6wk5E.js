import { n as i18n } from "./i18n-CakWKPtl.js";
function createLocalizedCatalog(t) {
	let n, r;
	return () => ((n !== i18n.language || r === void 0) && (n = i18n.language, r = t()), r);
}
export { createLocalizedCatalog as t };
