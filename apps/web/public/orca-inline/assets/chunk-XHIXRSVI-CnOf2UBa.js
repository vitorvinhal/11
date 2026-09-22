import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, m as RailroadAbnfGrammarGeneratedModule, n as AbstractMermaidValueConverter, o as EmptyFileSystem, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var RailroadAbnfTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "RailroadAbnfTokenBuilder");
	constructor() {
		super(["railroad-abnf-beta"]);
	}
}, RailroadAbnfValueConverter = class extends AbstractMermaidValueConverter {
	static #e = __name(this, "RailroadAbnfValueConverter");
	runConverter(e, c, l) {
		let u = super.runConverter(e, c, l);
		if (e.name === "TITLE" && typeof u == "string") {
			let e = u.trim();
			if (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) return e.slice(1, -1);
		}
		return u;
	}
	runCustomConverter(e, c, l) {
		if (e.name === "ABNF_STRING") return c.slice(1, -1);
	}
}, RailroadAbnfModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new RailroadAbnfTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new RailroadAbnfValueConverter(), "ValueConverter")
} };
function createRailroadAbnfServices(u = EmptyFileSystem) {
	let d = inject(createDefaultSharedCoreModule(u), MermaidGeneratedSharedModule), f = inject(createDefaultCoreModule({ shared: d }), RailroadAbnfGrammarGeneratedModule, RailroadAbnfModule);
	return d.ServiceRegistry.register(f), {
		shared: d,
		RailroadAbnf: f
	};
}
__name(createRailroadAbnfServices, "createRailroadAbnfServices");
export { createRailroadAbnfServices as n, RailroadAbnfModule as t };
