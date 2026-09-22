import { gS as getTerminalQuickCommandBody, vS as isTerminalAgentQuickCommand } from "./store-C9f8FDJV.js";
import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
var NO_MATCH = Infinity;
function isTerminalQuickCommandSearchQueryTooLarge(e, i = 2048) {
	return isClipboardTextByteLengthOverLimit(e, i);
}
function searchTerminalQuickCommands(e, i) {
	if (isTerminalQuickCommandSearchQueryTooLarge(i)) return [];
	let a = normalizeSearchText(i);
	if (!a) return [...e];
	let c = [];
	return e.forEach((e, i) => {
		let s = scoreQuickCommand(e, a);
		s !== NO_MATCH && c.push({
			command: e,
			score: s,
			index: i
		});
	}), c.sort((e, i) => e.score - i.score || e.index - i.index), c.map((e) => e.command);
}
function scoreQuickCommand(a, o) {
	let s = scoreCandidate(o, a.label, 0);
	return s > 200 && isTerminalAgentQuickCommand(a) && (s = Math.min(s, scoreCandidate(o, a.agent, 200))), s > 400 && (s = Math.min(s, scoreCandidate(o, getTerminalQuickCommandBody(a), 400))), s;
}
function scoreCandidate(e, i, a) {
	let s = normalizeSearchText(i);
	if (!s) return NO_MATCH;
	if (s === e) return a;
	if (s.startsWith(e)) return a + 50;
	let c = s.indexOf(` ${e}`);
	if (c !== -1) return a + 100 + c;
	let l = s.indexOf(e);
	return l === -1 ? NO_MATCH : a + 200 + l;
}
function normalizeSearchText(e) {
	let i = "", a = !1;
	for (let o = 0; o < e.length; o += 1) {
		if (isTerminalQuickCommandSearchWhitespace(e.charCodeAt(o))) {
			a = i.length > 0;
			continue;
		}
		a &&= (i += " ", !1), i += e.charAt(o).toLowerCase();
	}
	return i;
}
function isTerminalQuickCommandSearchWhitespace(e) {
	return e === 32 || e >= 9 && e <= 13 || e === 160 || e === 5760 || e >= 8192 && e <= 8202 || e === 8232 || e === 8233 || e === 8239 || e === 8287 || e === 12288 || e === 65279;
}
export { searchTerminalQuickCommands as t };
