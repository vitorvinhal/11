import "./chunk-FOHPRMQF-jGN_mPcr.js";
import "./chunk-6AZGARVD-D1ny8Dca.js";
import "./chunk-6TQVIW2G-CHMlWgIB.js";
import "./chunk-6EIED4P4-DjkGTAw7.js";
import "./chunk-KI3K4JFJ-eCcGGi-s.js";
import "./chunk-5V3GS4D5-DYkDPM7n.js";
import "./chunk-UY3FDG6J-D6_LwW2L.js";
import "./chunk-3Z5EZCMW-B16HwcXn.js";
import "./chunk-I5DQTOEV-rSUAP46y.js";
import { n as createRailroadServices } from "./chunk-OUJLGHUK-D19rLc2h.js";
import "./chunk-XHIXRSVI-CnOf2UBa.js";
import "./chunk-2ZTRR5NV-CKnBemUj.js";
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
var langiumParser = createRailroadServices().Railroad.parser.LangiumParser, transformExpression = /* @__PURE__ */ __name((e) => {
	switch (e.$type) {
		case "RailroadTerminalExpr": return {
			type: "terminal",
			value: e.value
		};
		case "RailroadNonTerminalExpr": return {
			type: "nonterminal",
			name: e.name
		};
		case "RailroadSpecialExpr": return {
			type: "special",
			text: e.text
		};
		case "RailroadSequenceExpr": {
			let d = e.elements.map(transformExpression);
			return d.length === 1 ? d[0] : {
				type: "sequence",
				elements: d
			};
		}
		case "RailroadChoiceExpr": {
			let d = e.alternatives.map(transformExpression);
			return d.length === 1 ? d[0] : {
				type: "choice",
				alternatives: d
			};
		}
		case "RailroadOptionalExpr": return {
			type: "optional",
			element: transformExpression(e.element)
		};
		case "RailroadOneOrMoreExpr": return {
			type: "repetition",
			element: transformExpression(e.element),
			min: 1,
			max: Infinity
		};
		case "RailroadZeroOrMoreExpr": return {
			type: "repetition",
			element: transformExpression(e.element),
			min: 0,
			max: Infinity
		};
		default: throw Error(`Unsupported railroad expression: ${e.$type}`);
	}
}, "transformExpression"), transformRule = /* @__PURE__ */ __name((e) => ({
	name: e.name,
	definition: transformExpression(e.definition)
}), "transformRule"), populateDb = /* @__PURE__ */ __name((e) => {
	populateCommonDb(e, db), e.title && db.setTitle(e.title), e.rules.map((e) => db.addRule(transformRule(e)));
}, "populateDb"), diagram = {
	parser: {
		parse: /* @__PURE__ */ __name((e) => {
			db.clear(), log.debug("[Railroad Parser] Starting Langium parse");
			let d = langiumParser.parse(e);
			if (d.lexerErrors.length > 0 || d.parserErrors.length > 0) throw new MermaidParseError(d);
			let f = d.value;
			log.debug("[Railroad Parser] Parsed rules:", f.rules.length), populateDb(f), log.debug("[Railroad Parser] Parse complete");
		}, "parse"),
		parser: { yy: db }
	},
	db,
	renderer,
	styles: getStyles
};
export { diagram };
