import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, d as PacketGrammarGeneratedModule, i as CommonValueConverter, o as EmptyFileSystem, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var PacketTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "PacketTokenBuilder");
	constructor() {
		super(["packet"]);
	}
}, PacketModule = { parser: {
	TokenBuilder: /* @__PURE__ */ __name(() => new PacketTokenBuilder(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
} };
function createPacketServices(l = EmptyFileSystem) {
	let u = inject(createDefaultSharedCoreModule(l), MermaidGeneratedSharedModule), d = inject(createDefaultCoreModule({ shared: u }), PacketGrammarGeneratedModule, PacketModule);
	return u.ServiceRegistry.register(d), {
		shared: u,
		Packet: d
	};
}
__name(createPacketServices, "createPacketServices");
export { createPacketServices as n, PacketModule as t };
