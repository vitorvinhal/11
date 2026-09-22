function forEachLine(e, o) {
	let s = 0, c = 1;
	for (let l = 0; l <= e.length; l += 1) {
		if (l < e.length && e.charCodeAt(l) !== 10) continue;
		let u = l > s && e.charCodeAt(l - 1) === 13 ? l - 1 : l;
		if (o(s, u, c) === !1) return;
		s = l + 1, c += 1;
	}
}
function getLineEndColumn(e) {
	return e.length + 1;
}
function makeWholeLineRange(e, o) {
	return {
		startLineNumber: e,
		startColumn: 1,
		endLineNumber: o,
		endColumn: 1
	};
}
function makeMarkerRange(e, s) {
	return {
		startLineNumber: e,
		startColumn: 1,
		endLineNumber: e,
		endColumn: getLineEndColumn(s)
	};
}
function makeMarkerDecoration(e, o, s) {
	return {
		range: makeMarkerRange(e, o),
		options: {
			isWholeLine: !0,
			className: "orca-conflict-marker-line",
			linesDecorationsClassName: "orca-conflict-line-decoration",
			marginClassName: "orca-conflict-margin",
			hoverMessage: { value: s },
			linesDecorationsTooltip: s,
			after: {
				content: ` ${s}`,
				inlineClassName: "orca-conflict-marker-label"
			}
		}
	};
}
function makeSectionDecoration(e, o, c) {
	return e > o ? null : {
		range: makeWholeLineRange(e, o),
		options: {
			isWholeLine: !0,
			className: `orca-conflict-section-line orca-conflict-${c}-line`
		}
	};
}
function findGitConflictBlocks(e) {
	return parseGitConflictBlocks(e).map(({ startLine: e, baseLine: o, separatorLine: s, endLine: c }) => ({
		startLine: e,
		...o === void 0 ? {} : { baseLine: o },
		separatorLine: s,
		endLine: c
	}));
}
function getGitConflictMarkerLineLength(o, s) {
	if (!Number.isInteger(s) || s < 1) return 0;
	let c = 0;
	return forEachLine(o, (e, o, l) => {
		if (l === s) return c = o - e, !1;
	}), c;
}
function parseGitConflictBlocks(o) {
	let s = [], c = null;
	return forEachLine(o, (e, l, u) => {
		if (lineStartsWith(o, e, l, "<<<<<<<")) {
			c = {
				startLine: u,
				startText: o.slice(e, l)
			};
			return;
		}
		if (c) {
			if (lineStartsWith(o, e, l, "|||||||")) {
				c.baseLine = u, c.baseText = o.slice(e, l);
				return;
			}
			if (lineEquals(o, e, l, "=======")) {
				c.separatorLine = u, c.separatorText = "=======";
				return;
			}
			lineStartsWith(o, e, l, ">>>>>>>") && (c.separatorLine && c.separatorText && s.push({
				startLine: c.startLine,
				startText: c.startText,
				baseLine: c.baseLine,
				baseText: c.baseText,
				separatorLine: c.separatorLine,
				separatorText: c.separatorText,
				endLine: u,
				endText: o.slice(e, l)
			}), c = null);
		}
	}), s;
}
function buildGitConflictDecorations(e) {
	let o = [];
	for (let s of parseGitConflictBlocks(e)) {
		let e = (s.baseLine ?? s.separatorLine) - 1, c = s.baseLine ? s.baseLine + 1 : null, d = [
			makeSectionDecoration(s.startLine + 1, e, "current"),
			c ? makeSectionDecoration(c, s.separatorLine - 1, "base") : null,
			makeSectionDecoration(s.separatorLine + 1, s.endLine - 1, "incoming")
		];
		for (let e of d) e && o.push(e);
		o.push(makeMarkerDecoration(s.startLine, s.startText, "Current change"), ...s.baseLine ? [makeMarkerDecoration(s.baseLine, s.baseText ?? "", "Common ancestor")] : [], makeMarkerDecoration(s.separatorLine, s.separatorText, "Incoming change"), makeMarkerDecoration(s.endLine, s.endText, "End conflict"));
	}
	return o;
}
function lineStartsWith(e, o, s, c) {
	return s - o >= c.length && e.startsWith(c, o);
}
function lineEquals(e, o, s, c) {
	return s - o === c.length && e.startsWith(c, o);
}
export { forEachLine as i, findGitConflictBlocks as n, getGitConflictMarkerLineLength as r, buildGitConflictDecorations as t };
