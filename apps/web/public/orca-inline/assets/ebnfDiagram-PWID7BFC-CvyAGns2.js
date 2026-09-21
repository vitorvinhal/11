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
import { n as createRailroadEbnfServices } from "./chunk-2ZTRR5NV-CKnBemUj.js";
import "./chunk-747NJXEK-CDGJEwRb.js";
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
var langiumParser = createRailroadEbnfServices().RailroadEbnf.parser.LangiumParser, transformChoice = /* @__PURE__ */ __name((e) => {
	let h = e.alternatives.map(transformSequence);
	return h.length === 1 ? h[0] : {
		type: "choice",
		alternatives: h
	};
}, "transformChoice"), transformSequence = /* @__PURE__ */ __name((e) => {
	let h = e.elements.map(transformTerm);
	return h.length === 1 ? h[0] : {
		type: "sequence",
		elements: h
	};
}, "transformSequence"), transformPrimary = /* @__PURE__ */ __name((e) => {
	switch (e.$type) {
		case "EbnfTerminal": return {
			type: "terminal",
			value: e.value
		};
		case "EbnfNonTerminal": return {
			type: "nonterminal",
			name: e.name
		};
		case "EbnfSpecial": return {
			type: "special",
			text: e.text
		};
		case "EbnfGroup": return transformChoice(e.element);
		case "EbnfOptional": return {
			type: "optional",
			element: transformChoice(e.element)
		};
		case "EbnfRepetition": return {
			type: "repetition",
			element: transformChoice(e.element),
			min: 0,
			max: Infinity
		};
		default: throw Error(`Unsupported EBNF primary node: ${e.$type}`);
	}
}, "transformPrimary"), transformPostfix = /* @__PURE__ */ __name((e, h) => {
	switch (h.$type) {
		case "EbnfOptionalPostfix": return {
			type: "optional",
			element: e
		};
		case "EbnfZeroOrMorePostfix": return {
			type: "repetition",
			element: e,
			min: 0,
			max: Infinity
		};
		case "EbnfOneOrMorePostfix": return {
			type: "repetition",
			element: e,
			min: 1,
			max: Infinity
		};
		case "EbnfExceptionPostfix": return {
			type: "sequence",
			elements: [
				e,
				{
					type: "terminal",
					value: "-"
				},
				transformPrimary(h.except)
			]
		};
		default: throw Error(`Unsupported EBNF postfix node: ${h.$type}`);
	}
}, "transformPostfix"), transformTerm = /* @__PURE__ */ __name((e) => e.postfixes.reduce((e, h) => transformPostfix(e, h), transformPrimary(e.base)), "transformTerm"), transformRule = /* @__PURE__ */ __name((e) => ({
	name: e.name,
	definition: transformChoice(e.definition)
}), "transformRule"), populateDb = /* @__PURE__ */ __name((e) => {
	populateCommonDb(e, db), e.title && db.setTitle(e.title), e.rules.map((e) => db.addRule(transformRule(e)));
}, "populateDb"), diagram = {
	parser: {
		parse: /* @__PURE__ */ __name((e) => {
			db.clear(), log.debug("[EBNF Parser] Starting Langium parse");
			let h = langiumParser.parse(e);
			if (h.lexerErrors.length > 0 || h.parserErrors.length > 0) throw new MermaidParseError(h);
			let g = h.value;
			log.debug("[EBNF Parser] Parsed rules:", g.rules.length), populateDb(g), log.debug("[EBNF Parser] Parse complete");
		}, "parse"),
		parser: { yy: db }
	},
	db,
	renderer,
	styles: getStyles
};
export { diagram };
