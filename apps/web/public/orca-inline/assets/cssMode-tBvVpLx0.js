import { h as languages } from "./editor.api2-B26FOp3A.js";
import { t as createWebWorker } from "./workers-CfXxeJ6j.js";
import { _ as toRange, a as DocumentFormattingEditProvider, c as DocumentRangeFormattingEditProvider, d as HoverAdapter, f as ReferenceAdapter, g as fromRange, h as fromPosition, i as DocumentColorAdapter, l as DocumentSymbolAdapter, m as SelectionRangeAdapter, n as DefinitionAdapter, o as DocumentHighlightAdapter, p as RenameAdapter, r as DiagnosticsAdapter, s as DocumentLinkAdapter, t as CompletionAdapter, u as FoldingRangeAdapter, v as toTextEdit } from "./lspLanguageFeatures-D-aFFhCl.js";
var STOP_WHEN_IDLE_FOR = 120 * 1e3, WorkerManager = class {
	constructor(e) {
		this._defaults = e, this._worker = null, this._client = null, this._idleCheckInterval = window.setInterval(() => this._checkIfIdle(), 30 * 1e3), this._lastUsedTime = 0, this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker());
	}
	_stopWorker() {
		this._worker &&= (this._worker.dispose(), null), this._client = null;
	}
	dispose() {
		clearInterval(this._idleCheckInterval), this._configChangeListener.dispose(), this._stopWorker();
	}
	_checkIfIdle() {
		this._worker && Date.now() - this._lastUsedTime > STOP_WHEN_IDLE_FOR && this._stopWorker();
	}
	_getClient() {
		return this._lastUsedTime = Date.now(), this._client ||= (this._worker = createWebWorker({
			moduleId: "vs/language/css/cssWorker",
			createWorker: () => new Worker(new URL(
				/* @vite-ignore */
				"" + new URL("css.worker-Bbs1Tfh2.js", import.meta.url).href,
				"" + import.meta.url
			), { type: "module" }),
			label: this._defaults.languageId,
			createData: {
				options: this._defaults.options,
				languageId: this._defaults.languageId
			}
		}), this._worker.getProxy()), this._client;
	}
	getLanguageServiceWorker(...e) {
		let y;
		return this._getClient().then((e) => {
			y = e;
		}).then((y) => {
			if (this._worker) return this._worker.withSyncedResources(e);
		}).then((e) => y);
	}
};
function setupMode(y) {
	let b = [], x = [], S = new WorkerManager(y);
	b.push(S);
	let C = (...e) => S.getLanguageServiceWorker(...e);
	function w() {
		let { languageId: b, modeConfiguration: S } = y;
		disposeAll(x), S.completionItems && x.push(languages.registerCompletionItemProvider(b, new CompletionAdapter(C, [
			"/",
			"-",
			":"
		]))), S.hovers && x.push(languages.registerHoverProvider(b, new HoverAdapter(C))), S.documentHighlights && x.push(languages.registerDocumentHighlightProvider(b, new DocumentHighlightAdapter(C))), S.definitions && x.push(languages.registerDefinitionProvider(b, new DefinitionAdapter(C))), S.references && x.push(languages.registerReferenceProvider(b, new ReferenceAdapter(C))), S.documentSymbols && x.push(languages.registerDocumentSymbolProvider(b, new DocumentSymbolAdapter(C))), S.rename && x.push(languages.registerRenameProvider(b, new RenameAdapter(C))), S.colors && x.push(languages.registerColorProvider(b, new DocumentColorAdapter(C))), S.foldingRanges && x.push(languages.registerFoldingRangeProvider(b, new FoldingRangeAdapter(C))), S.diagnostics && x.push(new DiagnosticsAdapter(b, C, y.onDidChange)), S.selectionRanges && x.push(languages.registerSelectionRangeProvider(b, new SelectionRangeAdapter(C))), S.documentFormattingEdits && x.push(languages.registerDocumentFormattingEditProvider(b, new DocumentFormattingEditProvider(C))), S.documentRangeFormattingEdits && x.push(languages.registerDocumentRangeFormattingEditProvider(b, new DocumentRangeFormattingEditProvider(C)));
	}
	return w(), b.push(asDisposable(x)), asDisposable(b);
}
function asDisposable(e) {
	return { dispose: () => disposeAll(e) };
}
function disposeAll(e) {
	for (; e.length;) e.pop().dispose();
}
export { CompletionAdapter, DefinitionAdapter, DiagnosticsAdapter, DocumentColorAdapter, DocumentFormattingEditProvider, DocumentHighlightAdapter, DocumentLinkAdapter, DocumentRangeFormattingEditProvider, DocumentSymbolAdapter, FoldingRangeAdapter, HoverAdapter, ReferenceAdapter, RenameAdapter, SelectionRangeAdapter, WorkerManager, fromPosition, fromRange, setupMode, toRange, toTextEdit };
