import { h as languages } from "./editor.api2-B26FOp3A.js";
import { t as createWebWorker } from "./workers-CfXxeJ6j.js";
import { _ as toRange, a as DocumentFormattingEditProvider, c as DocumentRangeFormattingEditProvider, d as HoverAdapter, f as ReferenceAdapter, g as fromRange, h as fromPosition, i as DocumentColorAdapter, l as DocumentSymbolAdapter, m as SelectionRangeAdapter, n as DefinitionAdapter, o as DocumentHighlightAdapter, p as RenameAdapter, r as DiagnosticsAdapter, s as DocumentLinkAdapter, t as CompletionAdapter, u as FoldingRangeAdapter, v as toTextEdit } from "./lspLanguageFeatures-D-aFFhCl.js";
var STOP_WHEN_IDLE_FOR = 120 * 1e3, WorkerManager = class {
	constructor(i) {
		this._defaults = i, this._worker = null, this._client = null, this._idleCheckInterval = window.setInterval(() => this._checkIfIdle(), 30 * 1e3), this._lastUsedTime = 0, this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker());
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
			moduleId: "vs/language/html/htmlWorker",
			createWorker: () => new Worker(new URL(
				/* @vite-ignore */
				"" + new URL("html.worker-Q365HQNc.js", import.meta.url).href,
				"" + import.meta.url
			), { type: "module" }),
			createData: {
				languageSettings: this._defaults.options,
				languageId: this._defaults.languageId
			},
			label: this._defaults.languageId
		}), this._worker.getProxy()), this._client;
	}
	getLanguageServiceWorker(...i) {
		let x;
		return this._getClient().then((i) => {
			x = i;
		}).then((x) => {
			if (this._worker) return this._worker.withSyncedResources(i);
		}).then((i) => x);
	}
}, HTMLCompletionAdapter = class extends CompletionAdapter {
	constructor(i) {
		super(i, [
			".",
			":",
			"<",
			"\"",
			"=",
			"/"
		]);
	}
};
function setupMode1(x) {
	let S = new WorkerManager(x), C = (...i) => S.getLanguageServiceWorker(...i), w = x.languageId;
	languages.registerCompletionItemProvider(w, new HTMLCompletionAdapter(C)), languages.registerHoverProvider(w, new HoverAdapter(C)), languages.registerDocumentHighlightProvider(w, new DocumentHighlightAdapter(C)), languages.registerLinkProvider(w, new DocumentLinkAdapter(C)), languages.registerFoldingRangeProvider(w, new FoldingRangeAdapter(C)), languages.registerDocumentSymbolProvider(w, new DocumentSymbolAdapter(C)), languages.registerSelectionRangeProvider(w, new SelectionRangeAdapter(C)), languages.registerRenameProvider(w, new RenameAdapter(C)), w === "html" && (languages.registerDocumentFormattingEditProvider(w, new DocumentFormattingEditProvider(C)), languages.registerDocumentRangeFormattingEditProvider(w, new DocumentRangeFormattingEditProvider(C)));
}
function setupMode(x) {
	let S = [], C = [], w = new WorkerManager(x);
	S.push(w);
	let T = (...i) => w.getLanguageServiceWorker(...i);
	function E() {
		let { languageId: S, modeConfiguration: w } = x;
		disposeAll(C), w.completionItems && C.push(languages.registerCompletionItemProvider(S, new HTMLCompletionAdapter(T))), w.hovers && C.push(languages.registerHoverProvider(S, new HoverAdapter(T))), w.documentHighlights && C.push(languages.registerDocumentHighlightProvider(S, new DocumentHighlightAdapter(T))), w.links && C.push(languages.registerLinkProvider(S, new DocumentLinkAdapter(T))), w.documentSymbols && C.push(languages.registerDocumentSymbolProvider(S, new DocumentSymbolAdapter(T))), w.rename && C.push(languages.registerRenameProvider(S, new RenameAdapter(T))), w.foldingRanges && C.push(languages.registerFoldingRangeProvider(S, new FoldingRangeAdapter(T))), w.selectionRanges && C.push(languages.registerSelectionRangeProvider(S, new SelectionRangeAdapter(T))), w.documentFormattingEdits && C.push(languages.registerDocumentFormattingEditProvider(S, new DocumentFormattingEditProvider(T))), w.documentRangeFormattingEdits && C.push(languages.registerDocumentRangeFormattingEditProvider(S, new DocumentRangeFormattingEditProvider(T)));
	}
	return E(), S.push(asDisposable(C)), asDisposable(S);
}
function asDisposable(i) {
	return { dispose: () => disposeAll(i) };
}
function disposeAll(i) {
	for (; i.length;) i.pop().dispose();
}
export { CompletionAdapter, DefinitionAdapter, DiagnosticsAdapter, DocumentColorAdapter, DocumentFormattingEditProvider, DocumentHighlightAdapter, DocumentLinkAdapter, DocumentRangeFormattingEditProvider, DocumentSymbolAdapter, FoldingRangeAdapter, HoverAdapter, ReferenceAdapter, RenameAdapter, SelectionRangeAdapter, WorkerManager, fromPosition, fromRange, setupMode, setupMode1, toRange, toTextEdit };
