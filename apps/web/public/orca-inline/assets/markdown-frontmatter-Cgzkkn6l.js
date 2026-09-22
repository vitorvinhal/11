var FRONTMATTER_RE = /^(---|\+\+\+)\r?\n(?:[\s\S]*?\r?\n)?\1(?:\r?\n|$)/;
function extractFrontMatter(t) {
	let n = t.match(FRONTMATTER_RE);
	if (!n) return null;
	let r = n[0];
	return {
		raw: r,
		body: t.slice(r.length)
	};
}
function prependFrontMatter(e, t) {
	return `${e.endsWith("\n") ? e : `${e}\n`}${t}`;
}
export { prependFrontMatter as n, extractFrontMatter as t };
