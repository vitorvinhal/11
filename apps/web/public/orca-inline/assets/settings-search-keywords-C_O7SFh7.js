import { i as translate, n as i18n } from "./i18n-CakWKPtl.js";
function translateSearchKeyword(r, i, a) {
	return a?.englishOnly || i18n.language === "en" ? uniqueKeywords([i, ...a?.aliases ?? []]) : uniqueKeywords([
		translate(r, i),
		i,
		...a?.aliases ?? []
	]);
}
function searchKeywords(e) {
	return uniqueKeywords(e.flatMap((e) => typeof e == "string" ? [e] : translateSearchKeyword(e.key, e.fallback, e)));
}
function uniqueKeywords(e) {
	let n = /* @__PURE__ */ new Set(), r = [];
	for (let i of e) {
		let e = i.trim();
		!e || n.has(e) || (n.add(e), r.push(e));
	}
	return r;
}
export { translateSearchKeyword as n, uniqueKeywords as r, searchKeywords as t };
