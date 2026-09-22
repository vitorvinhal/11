import { r as findAndReplace } from "./lib-DEDsinTP.js";
function newlineToBreak(r) {
	findAndReplace(r, [/\r?\n|\r/g, replace]);
}
function replace() {
	return { type: "break" };
}
function remarkBreaks() {
	return function(e) {
		newlineToBreak(e);
	};
}
export { remarkBreaks as t };
