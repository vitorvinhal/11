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
import { n as createRailroadAbnfServices } from "./chunk-XHIXRSVI-CnOf2UBa.js";
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
var langiumParser = createRailroadAbnfServices().RailroadAbnf.parser.LangiumParser, transformAlternation = /* @__PURE__ */ __name((e) => {
	let m = e.alternatives.map(transformConcatenation);
	return m.length === 1 ? m[0] : {
		type: "choice",
		alternatives: m
	};
}, "transformAlternation"), transformConcatenation = /* @__PURE__ */ __name((e) => {
	let m = e.elements.map(transformElement);
	return m.length === 1 ? m[0] : {
		type: "sequence",
		elements: m
	};
}, "transformConcatenation"), parseRepeat = /* @__PURE__ */ __name((e) => {
	if (e.includes("*")) {
		let [m, h] = e.split("*");
		return {
			min: m ? parseInt(m, 10) : 0,
			max: h ? parseInt(h, 10) : Infinity
		};
	}
	let m = parseInt(e, 10);
	return {
		min: m,
		max: m
	};
}, "parseRepeat"), transformElement = /* @__PURE__ */ __name((e) => {
	let m = transformPrimary(e.primary);
	if (!e.repeat) return m;
	let { min: h, max: g } = parseRepeat(e.repeat);
	return h === 0 && g === 1 ? {
		type: "optional",
		element: m
	} : {
		type: "repetition",
		element: m,
		min: h,
		max: g
	};
}, "transformElement"), transformPrimary = /* @__PURE__ */ __name((e) => {
	switch (e.$type) {
		case "AbnfStringLiteral": return {
			type: "terminal",
			value: e.value
		};
		case "AbnfNumVal": return {
			type: "terminal",
			value: e.value
		};
		case "AbnfRuleName": return {
			type: "nonterminal",
			name: e.name
		};
		case "AbnfGroup": return transformAlternation(e.element);
		case "AbnfOptionalGroup": return {
			type: "optional",
			element: transformAlternation(e.element)
		};
		default: throw Error(`Unsupported ABNF primary node: ${e.$type}`);
	}
}, "transformPrimary"), transformRule = /* @__PURE__ */ __name((e) => ({
	name: e.name,
	definition: transformAlternation(e.definition)
}), "transformRule"), populateDb = /* @__PURE__ */ __name((e) => {
	populateCommonDb(e, db), e.title && db.setTitle(e.title), e.rules.map((e) => db.addRule(transformRule(e)));
}, "populateDb"), diagram = {
	parser: {
		parse: /* @__PURE__ */ __name((e) => {
			db.clear(), log.debug("[ABNF Parser] Starting Langium parse");
			let m = langiumParser.parse(e);
			if (m.lexerErrors.length > 0 || m.parserErrors.length > 0) throw new MermaidParseError(m);
			let g = m.value;
			log.debug("[ABNF Parser] Parsed rules:", g.rules.length), populateDb(g), log.debug("[ABNF Parser] Parse complete");
		}, "parse"),
		parser: { yy: db }
	},
	db,
	renderer,
	styles: getStyles
};
export { diagram };
