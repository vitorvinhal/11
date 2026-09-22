import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, n as AbstractMermaidValueConverter, o as EmptyFileSystem, r as ArchitectureGrammarGeneratedModule, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var ArchitectureTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "ArchitectureTokenBuilder");
	constructor() {
		super(["architecture"]);
	}
}, ArchitectureValueConverter = class extends AbstractMermaidValueConverter {
	static #e = __name(this, "ArchitectureValueConverter");
	runCustomConverter(e, l, u) {
		if (e.name === "ARCH_ICON") return l.replace(/[()]/g, "").trim();
		if (e.name === "ARCH_TEXT_ICON") return l.replace(/["()]/g, "");
		if (e.name === "ARCH_TITLE") {
			let e = l.replace(/^\[|]$/g, "").trim();
			return (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) && (e = e.slice(1, -1), e = e.replace(/\\"/g, "\"").replace(/\\'/g, "'")), e.trim();
		}
	}
}, ArchitectureModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new ArchitectureTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new ArchitectureValueConverter(), "ValueConverter")
} };
function createArchitectureServices(u = EmptyFileSystem) {
	let d = inject(createDefaultSharedCoreModule(u), MermaidGeneratedSharedModule), f = inject(createDefaultCoreModule({ shared: d }), ArchitectureGrammarGeneratedModule, ArchitectureModule);
	return d.ServiceRegistry.register(f), {
		shared: d,
		Architecture: f
	};
}
__name(createArchitectureServices, "createArchitectureServices");
export { createArchitectureServices as n, ArchitectureModule as t };
