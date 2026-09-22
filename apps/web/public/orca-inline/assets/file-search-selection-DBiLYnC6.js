var LINE_FEED_CODE_UNIT = 10, CARRIAGE_RETURN_CODE_UNIT = 13, selectedTextProviders = [], nextProviderId = 1;
function normalizeSelectedTextForFileSearch(n) {
	if (!n) return null;
	let r = "", i = 0;
	for (let o = 0; o <= n.length; o += 1) {
		let s = o < n.length ? n.charCodeAt(o) : LINE_FEED_CODE_UNIT;
		if (!(o < n.length && s !== LINE_FEED_CODE_UNIT && s !== CARRIAGE_RETURN_CODE_UNIT)) {
			if (r = appendSelectedTextSearchLine(r, n, i, o), r.length >= 2048) break;
			s === CARRIAGE_RETURN_CODE_UNIT && o + 1 < n.length && n.charCodeAt(o + 1) === LINE_FEED_CODE_UNIT && (o += 1), i = o + 1;
		}
	}
	return r.length > 0 ? r : null;
}
function appendSelectedTextSearchLine(e, t, n, r) {
	let i = findSelectedTextLineTrimStart(t, n, r), a = findSelectedTextLineTrimEnd(t, i, r);
	if (i >= a) return e;
	let c = e.length > 0 ? " " : "", l = 2048 - e.length - c.length;
	return l <= 0 ? e : `${e}${c}${t.slice(i, Math.min(a, i + l))}`;
}
function findSelectedTextLineTrimStart(e, t, n) {
	let r = t;
	for (; r < n && e[r]?.trim() === "";) r += 1;
	return r;
}
function findSelectedTextLineTrimEnd(e, t, n) {
	let r = n;
	for (; r > t && e[r - 1]?.trim() === "";) --r;
	return r;
}
function registerFileSearchSelectedTextProvider(e) {
	let t = {
		id: nextProviderId++,
		provider: e
	};
	return selectedTextProviders.push(t), () => {
		let e = selectedTextProviders.findIndex((e) => e.id === t.id);
		e !== -1 && selectedTextProviders.splice(e, 1);
	};
}
function getSelectedTextForFileSearch() {
	for (let e = selectedTextProviders.length - 1; e >= 0; --e) {
		let t = normalizeSelectedTextForFileSearch(selectedTextProviders[e].provider());
		if (t) return t;
	}
	return typeof window > "u" ? null : normalizeSelectedTextForFileSearch(window.getSelection()?.toString());
}
export { normalizeSelectedTextForFileSearch as n, registerFileSearchSelectedTextProvider as r, getSelectedTextForFileSearch as t };
