import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, g as RailroadGrammarGeneratedModule, n as AbstractMermaidValueConverter, o as EmptyFileSystem, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var RailroadTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "RailroadTokenBuilder");
	constructor() {
		super(["railroad-beta"]);
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
}, "decodeEscapedString"), RailroadValueConverter = class extends AbstractMermaidValueConverter {
	static #e = __name(this, "RailroadValueConverter");
	runConverter(e, l, u) {
		let d = super.runConverter(e, l, u);
		if (e.name === "TITLE" && typeof d == "string") {
			let e = d.trim();
			if (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) return decodeEscapedString(e);
		}
		return d;
	}
	runCustomConverter(e, l, u) {
		if (e.name === "RR_STRING") return decodeEscapedString(l);
	}
}, RailroadModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new RailroadTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new RailroadValueConverter(), "ValueConverter")
} };
function createRailroadServices(d = EmptyFileSystem) {
	let f = inject(createDefaultSharedCoreModule(d), MermaidGeneratedSharedModule), p = inject(createDefaultCoreModule({ shared: f }), RailroadGrammarGeneratedModule, RailroadModule);
	return f.ServiceRegistry.register(p), {
		shared: f,
		Railroad: p
	};
}
__name(createRailroadServices, "createRailroadServices");
export { createRailroadServices as n, RailroadModule as t };
