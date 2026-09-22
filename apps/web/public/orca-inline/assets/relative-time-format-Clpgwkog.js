import { t as getIntlLocale } from "./i18n-CakWKPtl.js";
var cached = null;
function getUiRelativeTimeFormatter() {
	let n = getIntlLocale();
	return (!cached || cached.locale !== n) && (cached = {
		locale: n,
		formatter: new Intl.RelativeTimeFormat(n, { numeric: "auto" })
	}), cached.formatter;
}
function formatUiRelativeTime(e) {
	let t = getUiRelativeTimeFormatter(), r = Math.round(e / 6e4);
	if (Math.abs(r) < 60) return t.format(r, "minute");
	let i = Math.round(r / 60);
	return Math.abs(i) < 24 ? t.format(i, "hour") : t.format(Math.round(i / 24), "day");
}
function formatUiRelativeTimeFromDate(e, t = "recently") {
	let n = new Date(e);
	return Number.isNaN(n.getTime()) ? t : formatUiRelativeTime(n.getTime() - Date.now());
}
export { formatUiRelativeTimeFromDate as n, formatUiRelativeTime as t };
