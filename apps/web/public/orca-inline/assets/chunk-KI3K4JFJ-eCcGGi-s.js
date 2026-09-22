import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, c as GitGraphGrammarGeneratedModule, i as CommonValueConverter, o as EmptyFileSystem, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var GitGraphTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "GitGraphTokenBuilder");
	constructor() {
		super(["gitGraph"]);
	}
}, GitGraphModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new GitGraphTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createGitGraphServices(l = EmptyFileSystem) {
	let u = inject(createDefaultSharedCoreModule(l), MermaidGeneratedSharedModule), d = inject(createDefaultCoreModule({ shared: u }), GitGraphGrammarGeneratedModule, GitGraphModule);
	return u.ServiceRegistry.register(d), {
		shared: u,
		GitGraph: d
	};
}
__name(createGitGraphServices, "createGitGraphServices");
export { createGitGraphServices as n, GitGraphModule as t };
