var markdownSlugPunctuationPattern = /[^\p{L}\p{M}\p{N} _-]/gu, MarkdownHeadingSlugger = class {
	occurrences = /* @__PURE__ */ new Map();
	reset() {
		this.occurrences.clear();
	}
	slug(e) {
		let m = slugMarkdownHeading(e), g = m;
		for (; this.occurrences.has(g);) {
			let e = (this.occurrences.get(m) ?? 0) + 1;
			this.occurrences.set(m, e), g = `${m}-${e}`;
		}
		return this.occurrences.set(g, 0), g;
	}
};
function slugMarkdownHeading(m) {
	return m.toLowerCase().replace(markdownSlugPunctuationPattern, "").replace(/ /g, "-");
}
function stripMarkdownExtension(e) {
	let m = e.toLowerCase();
	for (let h of [
		".markdown",
		".mdx",
		".md"
	]) if (m.endsWith(h)) return e.slice(0, -h.length);
	return e;
}
function getMarkdownDocLinkDocumentTarget(e) {
	let m = e.indexOf("#");
	return m <= 0 ? e : e.slice(0, m);
}
function getMarkdownDocLinkAnchor(e) {
	let m = e.indexOf("#");
	if (m === -1 || m === e.length - 1) return null;
	let g = e.slice(m + 1).trim();
	return g ? slugMarkdownHeading(g) : null;
}
function normalizeDocLinkKey(e) {
	let m = e.trim().replaceAll("\\", "/");
	for (; m.startsWith("./");) m = m.slice(2);
	return m.toLowerCase();
}
function addIndexedDocument(e, m, h) {
	let g = e.get(m);
	g ? g.push(h) : e.set(m, [h]);
}
function resolveMatches(e) {
	return e ? e.length === 1 ? {
		status: "resolved",
		document: e[0]
	} : {
		status: "ambiguous",
		matches: e
	} : null;
}
function createMarkdownDocumentIndex(e) {
	let m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
	for (let v of e) addIndexedDocument(m, normalizeDocLinkKey(v.name), v), addIndexedDocument(h, normalizeDocLinkKey(v.relativePath), v), addIndexedDocument(_, normalizeDocLinkKey(stripMarkdownExtension(v.relativePath)), v);
	return {
		byName: m,
		byRelativePath: h,
		byRelativePathWithoutExtension: _
	};
}
function resolveMarkdownDocLink(e, m) {
	let h = normalizeDocLinkKey(getMarkdownDocLinkDocumentTarget(e)), v = stripMarkdownExtension(h), y = resolveMatches(m.byRelativePath.get(h));
	if (y) return y;
	let b = resolveMatches(m.byRelativePathWithoutExtension.get(v));
	if (b) return b;
	if (!h.includes("/")) {
		let e = resolveMatches(m.byName.get(v));
		if (e) return e;
	}
	return { status: "missing" };
}
function parseMarkdownDocLink(e) {
	let m = e.indexOf("|"), h = m === -1 ? e.trim() : e.slice(0, m).trim(), g = m === -1 ? null : e.slice(m + 1).trim() || null;
	return !h || /[\r\n[\]]/.test(h) || g !== null && /[\r\n[\]]/.test(g) || m !== -1 && g === null ? null : {
		target: h,
		alias: g,
		label: g ?? h
	};
}
function getMarkdownDocLinkTarget(e) {
	return parseMarkdownDocLink(e)?.target ?? null;
}
function formatMarkdownDocLinkBody(e, m) {
	return m ? `${e}|${m}` : e;
}
function formatMarkdownDocLink(e, m) {
	return `[[${formatMarkdownDocLinkBody(e, m)}]]`;
}
function splitMarkdownDocLinkText(e) {
	let m = [], h = 0;
	for (; h < e.length;) {
		let g = e.indexOf("[[", h);
		if (g === -1) {
			m.push({
				type: "text",
				value: e.slice(h)
			});
			break;
		}
		let _ = e.indexOf("]]", g + 2);
		if (_ === -1) {
			m.push({
				type: "text",
				value: e.slice(h)
			});
			break;
		}
		let v = parseMarkdownDocLink(e.slice(g + 2, _));
		if (!v) {
			m.push({
				type: "text",
				value: e.slice(h, _ + 2)
			}), h = _ + 2;
			continue;
		}
		g > h && m.push({
			type: "text",
			value: e.slice(h, g)
		}), m.push({
			type: "docLink",
			target: v.target,
			label: v.label
		}), h = _ + 2;
	}
	return m.length === 0 ? [{
		type: "text",
		value: e
	}] : m;
}
function createMarkdownDocLinkHref(e) {
	return `#orca-doc-link=${encodeURIComponent(e)}`;
}
function parseMarkdownDocLinkHref(e) {
	if (!e?.startsWith("#orca-doc-link=")) return null;
	try {
		return decodeURIComponent(e.slice(15));
	} catch {
		return null;
	}
}
function createDocLinkNode(e, m) {
	return {
		type: "link",
		url: createMarkdownDocLinkHref(e),
		title: null,
		children: [{
			type: "text",
			value: m
		}]
	};
}
function transformChildren(e) {
	if (!e.children || e.type === "link" || e.type === "image") return;
	let m = [];
	for (let h of e.children) if (h.type === "text" && h.value !== void 0) for (let e of splitMarkdownDocLinkText(h.value)) m.push(e.type === "text" ? {
		type: "text",
		value: e.value
	} : createDocLinkNode(e.target, e.label));
	else transformChildren(h), m.push(h);
	e.children = m;
}
function remarkMarkdownDocLinks() {
	return (e) => transformChildren(e);
}
export { getMarkdownDocLinkTarget as a, remarkMarkdownDocLinks as c, MarkdownHeadingSlugger as d, getMarkdownDocLinkAnchor as i, resolveMarkdownDocLink as l, formatMarkdownDocLink as n, parseMarkdownDocLink as o, formatMarkdownDocLinkBody as r, parseMarkdownDocLinkHref as s, createMarkdownDocumentIndex as t, stripMarkdownExtension as u };
