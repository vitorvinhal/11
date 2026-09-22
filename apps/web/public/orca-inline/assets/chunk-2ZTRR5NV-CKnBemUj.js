import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, h as RailroadEbnfGrammarGeneratedModule, n as AbstractMermaidValueConverter, o as EmptyFileSystem, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var RailroadEbnfTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "RailroadEbnfTokenBuilder");
	constructor() {
		super(["railroad-ebnf-beta"]);
	}
}, decodeEscapedString = /* @__PURE__ */ __name((e) => {
	let l = e.slice(1, -1), u = "";
	for (let e = 0; e < l.length; e++) {
		let d = l[e];
		if (d === "\\" && e + 1 < l.length) {
			e++;
			let d = l[e];
			switch (d) {
				case "n":
					u += "\n";
					break;
				case "r":
					u += "\r";
					break;
				case "t":
					u += "	";
					break;
				default: u += d;
			}
			continue;
		}
		u += d;
	}
	return u;
}, "decodeEscapedString"), RailroadEbnfValueConverter = class extends AbstractMermaidValueConverter {
	static #e = __name(this, "RailroadEbnfValueConverter");
	runConverter(e, l, u) {
		let d = super.runConverter(e, l, u);
		if (e.name === "TITLE" && typeof d == "string") {
			let e = d.trim();
			if (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) return decodeEscapedString(e);
		}
		return d;
	}
	runCustomConverter(e, l, u) {
		if (e.name === "EBNF_STRING") return decodeEscapedString(l);
		if (e.name === "EBNF_SPECIAL_SEQUENCE") return l.slice(1, -1).trim();
	}
}, RailroadEbnfModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new RailroadEbnfTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new RailroadEbnfValueConverter(), "ValueConverter")
} };
function createRailroadEbnfServices(d = EmptyFileSystem) {
	let f = inject(createDefaultSharedCoreModule(d), MermaidGeneratedSharedModule), p = inject(createDefaultCoreModule({ shared: f }), RailroadEbnfGrammarGeneratedModule, RailroadEbnfModule);
	return f.ServiceRegistry.register(p), {
		shared: f,
		RailroadEbnf: p
	};
}
__name(createRailroadEbnfServices, "createRailroadEbnfServices");
export { createRailroadEbnfServices as n, RailroadEbnfModule as t };
