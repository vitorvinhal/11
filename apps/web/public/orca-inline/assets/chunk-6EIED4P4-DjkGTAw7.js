import { C as createDefaultSharedCoreModule, S as createDefaultCoreModule, i as CommonValueConverter, o as EmptyFileSystem, s as EventModelingGeneratedModule, t as AbstractMermaidTokenBuilder, u as MermaidGeneratedSharedModule, w as inject, x as __name } from "./chunk-FOHPRMQF-jGN_mPcr.js";
var EventModelingTokenBuilder = class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "EventModelingTokenBuilder");
	constructor() {
		super(["eventmodeling"]);
	}
}, COMMAND_TYPES = /* @__PURE__ */ new Set(["cmd", "command"]), EVENT_TYPES = /* @__PURE__ */ new Set(["evt", "event"]), READMODEL_TYPES = /* @__PURE__ */ new Set(["rmo", "readmodel"]), PROCESSOR_TYPES = /* @__PURE__ */ new Set(["pcr", "processor"]), UI_TYPES = /* @__PURE__ */ new Set(["ui"]);
function registerValidationChecks(e) {
	let f = e.validation.EventModelingValidator, p = e.validation.ValidationRegistry;
	if (p) {
		let e = {
			EmTimeFrame: f.checkSourceFrameTypes.bind(f),
			EmResetFrame: f.checkSourceFrameTypes.bind(f)
		};
		p.register(e, f);
	}
}
__name(registerValidationChecks, "registerValidationChecks");
var EventModelingValidator = class {
	static #e = __name(this, "EventModelingValidator");
	checkSourceFrameTypes(e, f) {
		e.sourceFrames.length !== 0 && (COMMAND_TYPES.has(e.modelEntityType) ? this.validateSources(e, /* @__PURE__ */ new Set([...UI_TYPES, ...PROCESSOR_TYPES]), "command", "ui or processor", f) : EVENT_TYPES.has(e.modelEntityType) ? this.validateSources(e, COMMAND_TYPES, "event", "command", f) : READMODEL_TYPES.has(e.modelEntityType) ? this.validateSources(e, EVENT_TYPES, "read model", "event", f) : PROCESSOR_TYPES.has(e.modelEntityType) ? this.validateSources(e, READMODEL_TYPES, "processor", "read model", f) : UI_TYPES.has(e.modelEntityType) && this.validateSources(e, READMODEL_TYPES, "ui", "read model", f));
	}
	validateSources(e, f, p, m, h) {
		for (let g of e.sourceFrames) {
			let _ = g.ref;
			_ !== void 0 && !f.has(_.modelEntityType) && h("error", `A ${p} can only receive input from a ${m}, not from '${_.modelEntityType}'.`, {
				node: e,
				property: "sourceFrames"
			});
		}
	}
}, EventModelingModule = {
	parser: {
		TokenBuilder: /* @__PURE__ */ __name(() => new EventModelingTokenBuilder(), "TokenBuilder"),
		ValueConverter: /* @__PURE__ */ __name(() => new CommonValueConverter(), "ValueConverter")
	},
	validation: { EventModelingValidator: /* @__PURE__ */ __name(() => new EventModelingValidator(), "EventModelingValidator") }
};
function createEventModelingServices(p = EmptyFileSystem) {
	let g = inject(createDefaultSharedCoreModule(p), MermaidGeneratedSharedModule), v = inject(createDefaultCoreModule({ shared: g }), EventModelingGeneratedModule, EventModelingModule);
	return g.ServiceRegistry.register(v), registerValidationChecks(v), {
		shared: g,
		EventModel: v
	};
}
__name(createEventModelingServices, "createEventModelingServices");
export { createEventModelingServices as n, EventModelingModule as t };
