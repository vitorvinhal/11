import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, b as WardleyGrammarGeneratedModule, n as AbstractMermaidValueConverter, o as EmptyFileSystem, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var WardleyValueConverter = class extends AbstractMermaidValueConverter {
	static #e = __name(this, "WardleyValueConverter");
	runCustomConverter(e, o, s) {
		switch (e.name.toUpperCase()) {
			case "LINK_LABEL": return o.substring(1).trim();
			default: return;
		}
	}
}, WardleyModule = { parser: { ValueConverter: /* @__PURE__ */ __name(() => new WardleyValueConverter(), "ValueConverter") } };
function createWardleyServices(c = EmptyFileSystem) {
	let l = inject(createDefaultSharedCoreModule(c), MermaidGeneratedSharedModule), u = inject(createDefaultCoreModule({ shared: l }), WardleyGrammarGeneratedModule, WardleyModule);
	return l.ServiceRegistry.register(u), {
		shared: l,
		Wardley: u
	};
}
__name(createWardleyServices, "createWardleyServices");
export { createWardleyServices as n, WardleyModule as t };
