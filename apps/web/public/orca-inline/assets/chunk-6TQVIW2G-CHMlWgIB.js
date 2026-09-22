import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, a as CynefinGrammarGeneratedModule, i as CommonValueConverter, o as EmptyFileSystem, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var CynefinTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "CynefinTokenBuilder");
	constructor() {
		super(["cynefin-beta"]);
	}
}, CynefinModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new CynefinTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createCynefinServices(l = EmptyFileSystem) {
	let u = inject(createDefaultSharedCoreModule(l), MermaidGeneratedSharedModule), d = inject(createDefaultCoreModule({ shared: u }), CynefinGrammarGeneratedModule, CynefinModule);
	return u.ServiceRegistry.register(d), {
		shared: u,
		Cynefin: d
	};
}
__name(createCynefinServices, "createCynefinServices");
export { createCynefinServices as n, CynefinModule as t };
