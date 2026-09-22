import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
function isFindQueryTooLarge(t, n = 2048) {
	return isClipboardTextByteLengthOverLimit(t, n);
}
function getFindRequestQuery(e) {
	return isFindQueryTooLarge(e) ? null : e;
}
export { isFindQueryTooLarge as n, getFindRequestQuery as t };
