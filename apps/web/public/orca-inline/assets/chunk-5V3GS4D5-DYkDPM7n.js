import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, i as CommonValueConverter, l as InfoGrammarGeneratedModule, o as EmptyFileSystem, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var InfoTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "InfoTokenBuilder");
	constructor() {
		super(["info", "showInfo"]);
	}
}, InfoModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new InfoTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createInfoServices(l = EmptyFileSystem) {
	let u = inject(createDefaultSharedCoreModule(l), MermaidGeneratedSharedModule), d = inject(createDefaultCoreModule({ shared: u }), InfoGrammarGeneratedModule, InfoModule);
	return u.ServiceRegistry.register(d), {
		shared: u,
		Info: d
	};
}
__name(createInfoServices, "createInfoServices");
export { createInfoServices as n, InfoModule as t };
