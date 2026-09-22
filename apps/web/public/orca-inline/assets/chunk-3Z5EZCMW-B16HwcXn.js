import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, f as PieGrammarGeneratedModule, n as AbstractMermaidValueConverter, o as EmptyFileSystem, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var PieTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "PieTokenBuilder");
	constructor() {
		super(["pie", "showData"]);
	}
}, PieValueConverter = class extends AbstractMermaidValueConverter {
	static #e = __name(this, "PieValueConverter");
	runCustomConverter(e, c, l) {
		if (e.name === "PIE_SECTION_LABEL") return c.replace(/"/g, "").trim();
	}
}, PieModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new PieTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new PieValueConverter(), "ValueConverter")
} };
function createPieServices(u = EmptyFileSystem) {
	let d = inject(createDefaultSharedCoreModule(u), MermaidGeneratedSharedModule), f = inject(createDefaultCoreModule({ shared: d }), PieGrammarGeneratedModule, PieModule);
	return d.ServiceRegistry.register(f), {
		shared: d,
		Pie: f
	};
}
__name(createPieServices, "createPieServices");
export { createPieServices as n, PieModule as t };
