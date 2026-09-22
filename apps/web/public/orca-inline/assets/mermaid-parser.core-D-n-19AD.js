import { x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var parsers = {}, initializers = {
	info: /* @__PURE__ */ __name(async () => {
		let { createInfoServices: e } = await import("./info-A6RAGUB7-C19gxZTV.js");
		parsers.info = e().Info.parser.LangiumParser;
	}, "info"),
	packet: /* @__PURE__ */ __name(async () => {
		let { createPacketServices: e } = await import("./packet-AYTQ26CC-DtIpxq0H.js");
		parsers.packet = e().Packet.parser.LangiumParser;
	}, "packet"),
	pie: /* @__PURE__ */ __name(async () => {
		let { createPieServices: e } = await import("./pie-WAS4IAKB-wDK6ipTS.js");
		parsers.pie = e().Pie.parser.LangiumParser;
	}, "pie"),
	treeView: /* @__PURE__ */ __name(async () => {
		let { createTreeViewServices: e } = await import("./treeView-Q6P3EWNA-z6NfwYPN.js");
		parsers.treeView = e().TreeView.parser.LangiumParser;
	}, "treeView"),
	architecture: /* @__PURE__ */ __name(async () => {
		let { createArchitectureServices: e } = await import("./architecture-7GRP2DOG-_66HeJnC.js");
		parsers.architecture = e().Architecture.parser.LangiumParser;
	}, "architecture"),
	gitGraph: /* @__PURE__ */ __name(async () => {
		let { createGitGraphServices: e } = await import("./gitGraph-4MIJSDKK-DEs1KZn5.js");
		parsers.gitGraph = e().GitGraph.parser.LangiumParser;
	}, "gitGraph"),
	eventmodeling: /* @__PURE__ */ __name(async () => {
		let { createEventModelingServices: e } = await import("./eventmodeling-NTZA5JFV-U0xL7szy.js");
		parsers.eventmodeling = e().EventModel.parser.LangiumParser;
	}, "eventmodeling"),
	radar: /* @__PURE__ */ __name(async () => {
		let { createRadarServices: e } = await import("./radar-RG4KPBEZ-D1kQXUG5.js");
		parsers.radar = e().Radar.parser.LangiumParser;
	}, "radar"),
	railroad: /* @__PURE__ */ __name(async () => {
		let { createRailroadServices: e } = await import("./railroad-74A4TZTK-Coxi-sYC.js");
		parsers.railroad = e().Railroad.parser.LangiumParser;
	}, "railroad"),
	railroadEbnf: /* @__PURE__ */ __name(async () => {
		let { createRailroadEbnfServices: e } = await import("./railroad-ebnf-LZEXJU2U-DwYSpDR9.js");
		parsers.railroadEbnf = e().RailroadEbnf.parser.LangiumParser;
	}, "railroadEbnf"),
	railroadAbnf: /* @__PURE__ */ __name(async () => {
		let { createRailroadAbnfServices: e } = await import("./railroad-abnf-HS5TGJTU-CUeY7FFO.js");
		parsers.railroadAbnf = e().RailroadAbnf.parser.LangiumParser;
	}, "railroadAbnf"),
	railroadPeg: /* @__PURE__ */ __name(async () => {
		let { createRailroadPegServices: e } = await import("./railroad-peg-WCYAUIDC-W96_rFD9.js");
		parsers.railroadPeg = e().RailroadPeg.parser.LangiumParser;
	}, "railroadPeg"),
	treemap: /* @__PURE__ */ __name(async () => {
		let { createTreemapServices: e } = await import("./treemap-WGGIJYW6-CiCebN4S.js");
		parsers.treemap = e().Treemap.parser.LangiumParser;
	}, "treemap"),
	wardley: /* @__PURE__ */ __name(async () => {
		let { createWardleyServices: e } = await import("./wardley-WFR3VGLG-CshWE8nw.js");
		parsers.wardley = e().Wardley.parser.LangiumParser;
	}, "wardley"),
	cynefin: /* @__PURE__ */ __name(async () => {
		let { createCynefinServices: e } = await import("./cynefin-OW5HDTMX-9c-KInNG.js");
		parsers.cynefin = e().Cynefin.parser.LangiumParser;
	}, "cynefin")
};
async function parse(e, i) {
	let a = initializers[e];
	if (!a) throw Error(`Unknown diagram type: ${e}`);
	parsers[e] || await a();
	let o = parsers[e].parse(i);
	if (o.lexerErrors.length > 0 || o.parserErrors.length > 0) throw new MermaidParseError(o);
	return o.value;
}
__name(parse, "parse");
var MermaidParseError = class extends Error {
	constructor(e) {
		let n = e.lexerErrors.map((e) => `Lexer error on line ${e.line !== void 0 && !isNaN(e.line) ? e.line : "?"}, column ${e.column !== void 0 && !isNaN(e.column) ? e.column : "?"}: ${e.message}`).join("\n"), r = e.parserErrors.map((e) => `Parse error on line ${e.token.startLine !== void 0 && !isNaN(e.token.startLine) ? e.token.startLine : "?"}, column ${e.token.startColumn !== void 0 && !isNaN(e.token.startColumn) ? e.token.startColumn : "?"}: ${e.message}`).join("\n");
		super(`Parsing failed: ${n} ${r}`), this.result = e;
	}
	static #e = __name(this, "MermaidParseError");
};
export { parse as n, MermaidParseError as t };
