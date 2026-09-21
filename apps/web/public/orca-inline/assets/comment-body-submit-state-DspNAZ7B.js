import { T as readUtf8CodePointAt, x as getUtf8ByteLengthForCodePoint } from "./renderer-app-platform--nJ6HYmL.js";
function getCommentBodyPresence(n, r = 65536) {
	let i = 0;
	for (let a = 0; a < n.length; a += 1) {
		let o = readUtf8CodePointAt(n, a), s = o > 65535 ? 2 : 1;
		if (i += getUtf8ByteLengthForCodePoint(o), i > r) return "too-large-leading-whitespace";
		if (/\S/u.test(n.slice(a, a + s))) return "present";
		s === 2 && (a += 1);
	}
	return "empty";
}
function hasBoundedCommentBodyText(e) {
	return getCommentBodyPresence(e) === "present";
}
function getCommentBodySubmitState(e) {
	let t = getCommentBodyPresence(e);
	return t === "empty" ? { status: "empty" } : t === "too-large-leading-whitespace" ? { status: "too-large-leading-whitespace" } : {
		status: "ready",
		body: e.trim()
	};
}
export { hasBoundedCommentBodyText as n, getCommentBodySubmitState as t };
