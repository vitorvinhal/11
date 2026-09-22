import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, n as AbstractMermaidValueConverter, o as EmptyFileSystem, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, v as TreeViewGrammarGeneratedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var TreeViewValueConverter = class extends AbstractMermaidValueConverter {
	static #e = __name(this, "TreeViewValueConverter");
	runCustomConverter(e, l, u) {
		if (e.name === "INDENTATION") return l?.length || 0;
		if (e.name === "QUOTED_NAME") return l.substring(1, l.length - 1);
		if (e.name === "BARE_NAME") return l.replace(/[\t ]+$/, "");
		if (e.name === "CLASS_ANNOTATION") return l.trim().substring(3).trim();
		if (e.name === "ICON_ANNOTATION") {
			let e = l.trim();
			return e.substring(5, e.length - 1);
		}
		if (e.name === "DESC_ANNOTATION") return l.trim().substring(2).trim();
	}
}, TreeViewTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "TreeViewTokenBuilder");
	constructor() {
		super(["treeView-beta"]);
	}
}, TreeViewModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new TreeViewTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new TreeViewValueConverter(), "ValueConverter")
} };
function createTreeViewServices(u = EmptyFileSystem) {
	let d = inject(createDefaultSharedCoreModule(u), MermaidGeneratedSharedModule), f = inject(createDefaultCoreModule({ shared: d }), TreeViewGrammarGeneratedModule, TreeViewModule);
	return d.ServiceRegistry.register(f), {
		shared: d,
		TreeView: f
	};
}
__name(createTreeViewServices, "createTreeViewServices");
export { createTreeViewServices as n, TreeViewModule as t };
