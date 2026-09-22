import { n as __export } from "./chunk-BKjlJnyO.js";
import { h as languages, n as Emitter } from "./editor.api2-B26FOp3A.js";
var typescriptVersion = "5.9.3", monaco_contribution_exports = /* @__PURE__ */ __export({
	JsxEmit: () => JsxEmit,
	ModuleKind: () => ModuleKind,
	ModuleResolutionKind: () => ModuleResolutionKind,
	NewLineKind: () => NewLineKind,
	ScriptTarget: () => ScriptTarget,
	getJavaScriptWorker: () => getJavaScriptWorker,
	getTypeScriptWorker: () => getTypeScriptWorker,
	javascriptDefaults: () => javascriptDefaults,
	typescriptDefaults: () => typescriptDefaults,
	typescriptVersion: () => typescriptVersion$1
}, 1), ModuleKind = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.CommonJS = 1] = "CommonJS", e[e.AMD = 2] = "AMD", e[e.UMD = 3] = "UMD", e[e.System = 4] = "System", e[e.ES2015 = 5] = "ES2015", e[e.ESNext = 99] = "ESNext", e))(ModuleKind || {}), JsxEmit = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Preserve = 1] = "Preserve", e[e.React = 2] = "React", e[e.ReactNative = 3] = "ReactNative", e[e.ReactJSX = 4] = "ReactJSX", e[e.ReactJSXDev = 5] = "ReactJSXDev", e))(JsxEmit || {}), NewLineKind = /* @__PURE__ */ ((e) => (e[e.CarriageReturnLineFeed = 0] = "CarriageReturnLineFeed", e[e.LineFeed = 1] = "LineFeed", e))(NewLineKind || {}), ScriptTarget = /* @__PURE__ */ ((e) => (e[e.ES3 = 0] = "ES3", e[e.ES5 = 1] = "ES5", e[e.ES2015 = 2] = "ES2015", e[e.ES2016 = 3] = "ES2016", e[e.ES2017 = 4] = "ES2017", e[e.ES2018 = 5] = "ES2018", e[e.ES2019 = 6] = "ES2019", e[e.ES2020 = 7] = "ES2020", e[e.ESNext = 99] = "ESNext", e[e.JSON = 100] = "JSON", e[e.Latest = 99] = "Latest", e))(ScriptTarget || {}), ModuleResolutionKind = /* @__PURE__ */ ((e) => (e[e.Classic = 1] = "Classic", e[e.NodeJs = 2] = "NodeJs", e))(ModuleResolutionKind || {}), LanguageServiceDefaultsImpl = class {
	constructor(e, p, h, g, _) {
		this._onDidChange = new Emitter(), this._onDidExtraLibsChange = new Emitter(), this._extraLibs = /* @__PURE__ */ Object.create(null), this._removedExtraLibs = /* @__PURE__ */ Object.create(null), this._eagerModelSync = !1, this.setCompilerOptions(e), this.setDiagnosticsOptions(p), this.setWorkerOptions(h), this.setInlayHintsOptions(g), this.setModeConfiguration(_), this._onDidExtraLibsChangeTimeout = -1;
	}
	get onDidChange() {
		return this._onDidChange.event;
	}
	get onDidExtraLibsChange() {
		return this._onDidExtraLibsChange.event;
	}
	get modeConfiguration() {
		return this._modeConfiguration;
	}
	get workerOptions() {
		return this._workerOptions;
	}
	get inlayHintsOptions() {
		return this._inlayHintsOptions;
	}
	getExtraLibs() {
		return this._extraLibs;
	}
	addExtraLib(e, p) {
		let m;
		if (m = p === void 0 ? `ts:extralib-${Math.random().toString(36).substring(2, 15)}` : p, this._extraLibs[m] && this._extraLibs[m].content === e) return { dispose: () => {} };
		let h = 1;
		return this._removedExtraLibs[m] && (h = this._removedExtraLibs[m] + 1), this._extraLibs[m] && (h = this._extraLibs[m].version + 1), this._extraLibs[m] = {
			content: e,
			version: h
		}, this._fireOnDidExtraLibsChangeSoon(), { dispose: () => {
			let e = this._extraLibs[m];
			e && e.version === h && (delete this._extraLibs[m], this._removedExtraLibs[m] = h, this._fireOnDidExtraLibsChangeSoon());
		} };
	}
	setExtraLibs(e) {
		for (let e in this._extraLibs) this._removedExtraLibs[e] = this._extraLibs[e].version;
		if (this._extraLibs = /* @__PURE__ */ Object.create(null), e && e.length > 0) for (let p of e) {
			let e = p.filePath || `ts:extralib-${Math.random().toString(36).substring(2, 15)}`, m = p.content, h = 1;
			this._removedExtraLibs[e] && (h = this._removedExtraLibs[e] + 1), this._extraLibs[e] = {
				content: m,
				version: h
			};
		}
		this._fireOnDidExtraLibsChangeSoon();
	}
	_fireOnDidExtraLibsChangeSoon() {
		this._onDidExtraLibsChangeTimeout === -1 && (this._onDidExtraLibsChangeTimeout = window.setTimeout(() => {
			this._onDidExtraLibsChangeTimeout = -1, this._onDidExtraLibsChange.fire(void 0);
		}, 0));
	}
	getCompilerOptions() {
		return this._compilerOptions;
	}
	setCompilerOptions(e) {
		this._compilerOptions = e || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(void 0);
	}
	getDiagnosticsOptions() {
		return this._diagnosticsOptions;
	}
	setDiagnosticsOptions(e) {
		this._diagnosticsOptions = e || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(void 0);
	}
	setWorkerOptions(e) {
		this._workerOptions = e || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(void 0);
	}
	setInlayHintsOptions(e) {
		this._inlayHintsOptions = e || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(void 0);
	}
	setMaximumWorkerIdleTime(e) {}
	setEagerModelSync(e) {
		this._eagerModelSync = e;
	}
	getEagerModelSync() {
		return this._eagerModelSync;
	}
	setModeConfiguration(e) {
		this._modeConfiguration = e || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(void 0);
	}
}, typescriptVersion$1 = typescriptVersion, modeConfigurationDefault = {
	completionItems: !0,
	hovers: !0,
	documentSymbols: !0,
	definitions: !0,
	references: !0,
	documentHighlights: !0,
	rename: !0,
	diagnostics: !0,
	documentRangeFormattingEdits: !0,
	signatureHelp: !0,
	onTypeFormattingEdits: !0,
	codeActions: !0,
	inlayHints: !0
}, typescriptDefaults = new LanguageServiceDefaultsImpl({
	allowNonTsExtensions: !0,
	target: 99
}, {
	noSemanticValidation: !1,
	noSyntaxValidation: !1,
	onlyVisible: !1
}, {}, {}, modeConfigurationDefault), javascriptDefaults = new LanguageServiceDefaultsImpl({
	allowNonTsExtensions: !0,
	allowJs: !0,
	target: 99
}, {
	noSemanticValidation: !0,
	noSyntaxValidation: !1,
	onlyVisible: !1
}, {}, {}, modeConfigurationDefault), getTypeScriptWorker = () => getMode().then((e) => e.getTypeScriptWorker()), getJavaScriptWorker = () => getMode().then((e) => e.getJavaScriptWorker());
function getMode() {
	return import("./tsMode-CwhdRIwV.js");
}
languages.onLanguage("typescript", () => getMode().then((e) => e.setupTypeScript(typescriptDefaults))), languages.onLanguage("javascript", () => getMode().then((e) => e.setupJavaScript(javascriptDefaults)));
export { typescriptDefaults as i, javascriptDefaults as n, monaco_contribution_exports as r, JsxEmit as t };
