import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, i as CommonValueConverter, o as EmptyFileSystem, p as RadarGrammarGeneratedModule, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var RadarTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "RadarTokenBuilder");
	constructor() {
		super(["radar-beta"]);
	}
}, RadarModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new RadarTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createRadarServices(l = EmptyFileSystem) {
	let u = inject(createDefaultSharedCoreModule(l), MermaidGeneratedSharedModule), d = inject(createDefaultCoreModule({ shared: u }), RadarGrammarGeneratedModule, RadarModule);
	return u.ServiceRegistry.register(d), {
		shared: u,
		Radar: d
	};
}
__name(createRadarServices, "createRadarServices");
export { createRadarServices as n, RadarModule as t };
