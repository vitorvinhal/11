import { t as getDiffCommentLineLabel } from "./diff-comment-compat-OnNoNTL8.js";
var MAX_EXCERPT_LINES = 8, MAX_CARD_QUOTE_LENGTH = 60;
function sortMarkdownReviewNotes(e) {
	return [...e].sort((e, s) => {
		let c = e.filePath.localeCompare(s.filePath);
		if (c !== 0) return c;
		let l = e.startLine ?? e.lineNumber, u = s.startLine ?? s.lineNumber;
		return l === u ? e.lineNumber === s.lineNumber ? e.createdAt - s.createdAt : e.lineNumber - s.lineNumber : l - u;
	});
}
function getMarkdownReviewExcerpt(e, c) {
	let l = Math.max(1, c.startLine ?? c.lineNumber), u = getMarkdownReviewSelectedLines(e, l, Math.max(l, c.lineNumber));
	return u.count === 0 ? "" : (u.count <= MAX_EXCERPT_LINES ? u.lines : [
		...u.headLines,
		"...",
		...u.tailLines
	]).map((e) => `> ${e}`).join("\n");
}
function getMarkdownReviewSelectedLines(e, c, l) {
	let u = Math.ceil(MAX_EXCERPT_LINES / 2), d = Math.floor(MAX_EXCERPT_LINES / 2), p = [], m = [], h = 0;
	return forEachMarkdownReviewLine(e, (e, u) => {
		if (!(u < c)) return u > l ? !1 : (h += 1, h <= MAX_EXCERPT_LINES ? (p.push(e), u >= l ? !1 : void 0) : h === MAX_EXCERPT_LINES + 1 ? (m.push(...p.slice(-(d - 1)), e), u >= l ? !1 : void 0) : (m.push(e), m.length > d && m.shift(), u >= l ? !1 : void 0));
	}), {
		count: h,
		lines: p,
		headLines: p.slice(0, u),
		tailLines: m
	};
}
function forEachMarkdownReviewLine(e, s) {
	let c = 0, l = 1;
	for (; c <= e.length;) {
		let u = e.indexOf("\n", c), d = u === -1 ? e.length : u, f = d > c && e.charCodeAt(d - 1) === 13 ? d - 1 : d;
		if (s(e.slice(c, f), l) === !1) return;
		c = d + 1, l += 1;
	}
}
function getMarkdownReviewHighlightedText(e, s) {
	return s.selectedText?.trim() || getMarkdownReviewExcerpt(e, s).replace(/^> ?/gm, "").trim();
}
function formatMarkdownReviewCardQuote(e) {
	if (e != null) return formatBoundedMarkdownReviewCardQuote(e);
}
function formatBoundedMarkdownReviewCardQuote(e) {
	let s = "", l = !1;
	for (let u = 0; u < e.length; u += 1) {
		if (isMarkdownReviewCardQuoteWhitespace(e.charCodeAt(u))) {
			l = s.length > 0;
			continue;
		}
		if (l &&= (s += " ", !1), s += e.charAt(u), s.length > MAX_CARD_QUOTE_LENGTH) return `${s.slice(0, MAX_CARD_QUOTE_LENGTH - 3).trimEnd()}...`;
	}
	return s.length > 0 ? s : void 0;
}
function isMarkdownReviewCardQuoteWhitespace(e) {
	return e === 32 || e >= 9 && e <= 13 || e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
function getMarkdownReviewCardQuote(e, s) {
	return formatMarkdownReviewCardQuote(getMarkdownReviewHighlightedText(e, s));
}
function escapeMarkdownReviewNoteBody(e) {
	return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\r/g, "\\r").replace(/\n/g, "\\n");
}
function formatMarkdownReviewNoteDetails(s, c) {
	let l = s.selectedText ? quoteMarkdownReviewText(getMarkdownReviewHighlightedText(c, s)) : getMarkdownReviewExcerpt(c, s);
	return [
		getDiffCommentLineLabel(s),
		l ? `Excerpt:\n${l}` : null,
		`User comment: "${escapeMarkdownReviewNoteBody(s.body)}"`
	].filter((e) => e !== null).join("\n");
}
function quoteMarkdownReviewText(e) {
	return `> ${e.replace(/\r\n|\r|\n/g, "\n> ")}`;
}
function formatMarkdownReviewNotes(e, s) {
	let c = /* @__PURE__ */ new Map();
	for (let s of sortMarkdownReviewNotes(e)) {
		let e = c.get(s.filePath);
		e ? e.push(s) : c.set(s.filePath, [s]);
	}
	return [...c.entries()].map(([e, c]) => [
		`File: ${e}`,
		"Source: markdown",
		"",
		c.map((e) => formatMarkdownReviewNoteDetails(e, s)).join("\n\n")
	].join("\n")).join("\n\n");
}
export { sortMarkdownReviewNotes as i, formatMarkdownReviewNotes as n, getMarkdownReviewCardQuote as r, formatMarkdownReviewCardQuote as t };
