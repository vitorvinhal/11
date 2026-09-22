import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, _ as RailroadPegGrammarGeneratedModule, n as AbstractMermaidValueConverter, o as EmptyFileSystem, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var RailroadPegTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "RailroadPegTokenBuilder");
	constructor() {
		super(["railroad-peg-beta"]);
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
}, "decodeEscapedString"), RailroadPegValueConverter = class extends AbstractMermaidValueConverter {
	static #e = __name(this, "RailroadPegValueConverter");
	runConverter(e, l, u) {
		let d = super.runConverter(e, l, u);
		if (e.name === "TITLE" && typeof d == "string") {
			let e = d.trim();
			if (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) return decodeEscapedString(e);
		}
		return d;
	}
	runCustomConverter(e, l, u) {
		if (e.name === "PEG_STRING") return decodeEscapedString(l);
	}
}, RailroadPegModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new RailroadPegTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new RailroadPegValueConverter(), "ValueConverter")
} };
function createRailroadPegServices(d = EmptyFileSystem) {
	let f = inject(createDefaultSharedCoreModule(d), MermaidGeneratedSharedModule), p = inject(createDefaultCoreModule({ shared: f }), RailroadPegGrammarGeneratedModule, RailroadPegModule);
	return f.ServiceRegistry.register(p), {
		shared: f,
		RailroadPeg: p
	};
}
__name(createRailroadPegServices, "createRailroadPegServices");
export { createRailroadPegServices as n, RailroadPegModule as t };
