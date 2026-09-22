import "./chunk-FOHPRMQF-jGN_mPcr.js";
import "./chunk-6AZGARVD-D1ny8Dca.js";
import "./chunk-6TQVIW2G-CHMlWgIB.js";
import "./chunk-6EIED4P4-DjkGTAw7.js";
import "./chunk-KI3K4JFJ-eCcGGi-s.js";
import "./chunk-5V3GS4D5-DYkDPM7n.js";
import "./chunk-UY3FDG6J-D6_LwW2L.js";
import "./chunk-3Z5EZCMW-B16HwcXn.js";
import "./chunk-I5DQTOEV-rSUAP46y.js";
import "./chunk-OUJLGHUK-D19rLc2h.js";
import "./chunk-XHIXRSVI-CnOf2UBa.js";
import "./chunk-2ZTRR5NV-CKnBemUj.js";
import { n as createRailroadPegServices } from "./chunk-747NJXEK-CDGJEwRb.js";
import "./chunk-IH6LHLGP-C5FZFsRW.js";
import "./chunk-6K3QC6MW-DZR2s8UO.js";
import "./chunk-ICYGCRZG-CKilpC9B.js";
import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log } from "./src-DXrlgw8l.js";
import "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import "./chunk-CLGD4ZFX--a6S7Yag.js";
import { n as getStyles, r as renderer, t as db } from "./chunk-SVP7TREG-zFAcrknM.js";
import { t as populateCommonDb } from "./chunk-JWPE2WC7-Cv3uUh-s.js";
import { t as MermaidParseError } from "./mermaid-parser.core-D-n-19AD.js";
var langiumParser = createRailroadPegServices().RailroadPeg.parser.LangiumParser, transformOrderedChoice = /* @__PURE__ */ __name((e) => {
	let g = e.alternatives.map(transformSequence);
	return g.length === 1 ? g[0] : {
		type: "choice",
		alternatives: g
	};
}, "transformOrderedChoice"), transformSequence = /* @__PURE__ */ __name((e) => {
	let g = e.elements.map(transformPrefix);
	return g.length === 1 ? g[0] : {
		type: "sequence",
		elements: g
	};
}, "transformSequence"), transformPrefix = /* @__PURE__ */ __name((e) => {
	let g = transformSuffix(e.suffix);
	return e.operator ? {
		type: "special",
		text: e.operator === "&" ? `&${nodeToLabel(g)}` : `!${nodeToLabel(g)}`
	} : g;
}, "transformPrefix"), nodeToLabel = /* @__PURE__ */ __name((e) => {
	switch (e.type) {
		case "terminal": return `"${e.value}"`;
		case "nonterminal": return e.name;
		case "special": return e.text;
		default: return "(...)";
	}
}, "nodeToLabel"), transformSuffix = /* @__PURE__ */ __name((e) => {
	let g = transformPrimary(e.primary);
	if (!e.operator) return g;
	switch (e.operator) {
		case "?": return {
			type: "optional",
			element: g
		};
		case "*": return {
			type: "repetition",
			element: g,
			min: 0,
			max: Infinity
		};
		case "+": return {
			type: "repetition",
			element: g,
			min: 1,
			max: Infinity
		};
		default: throw Error(`Unsupported PEG suffix operator: ${e.operator}`);
	}
}, "transformSuffix"), transformPrimary = /* @__PURE__ */ __name((e) => {
	switch (e.$type) {
		case "PegLiteral": return {
			type: "terminal",
			value: e.value
		};
		case "PegIdentifier": return {
			type: "nonterminal",
			name: e.name
		};
		case "PegGroup": return transformOrderedChoice(e.element);
		case "PegAny": return {
			type: "special",
			text: e.dot
		};
		default: throw Error(`Unsupported PEG primary node: ${e.$type}`);
	}
}, "transformPrimary"), transformRule = /* @__PURE__ */ __name((e) => ({
	name: e.name,
	definition: transformOrderedChoice(e.definition)
}), "transformRule"), populateDb = /* @__PURE__ */ __name((e) => {
	populateCommonDb(e, db), e.title && db.setTitle(e.title), e.rules.map((e) => db.addRule(transformRule(e)));
}, "populateDb"), diagram = {
	parser: {
		parse: /* @__PURE__ */ __name((e) => {
			db.clear(), log.debug("[PEG Parser] Starting Langium parse");
			let g = langiumParser.parse(e);
			if (g.lexerErrors.length > 0 || g.parserErrors.length > 0) throw new MermaidParseError(g);
			let _ = g.value;
			log.debug("[PEG Parser] Parsed rules:", _.rules.length), populateDb(_), log.debug("[PEG Parser] Parse complete");
		}, "parse"),
		parser: { yy: db }
	},
	db,
	renderer,
	styles: getStyles
};
export { diagram };
