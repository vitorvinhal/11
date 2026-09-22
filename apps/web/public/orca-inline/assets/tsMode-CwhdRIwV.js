import { a as MarkerSeverity, c as Range, f as Uri, h as languages, o as MarkerTag, p as editor } from "./editor.api2-B26FOp3A.js";
import { t as createWebWorker } from "./workers-CfXxeJ6j.js";
import { i as typescriptDefaults } from "./monaco.contribution-DqQ6JUf5.js";
var WorkerManager = class {
	constructor(a, D) {
		this._modeId = a, this._defaults = D, this._worker = null, this._client = null, this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker()), this._updateExtraLibsToken = 0, this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(() => this._updateExtraLibs());
	}
	dispose() {
		this._configChangeListener.dispose(), this._extraLibsChangeListener.dispose(), this._stopWorker();
	}
	_stopWorker() {
		this._worker &&= (this._worker.dispose(), null), this._client = null;
	}
	async _updateExtraLibs() {
		if (!this._worker) return;
		let a = ++this._updateExtraLibsToken, D = await this._worker.getProxy();
		this._updateExtraLibsToken === a && D.updateExtraLibs(this._defaults.getExtraLibs());
	}
	_getClient() {
		return this._client ||= (async () => (this._worker = createWebWorker({
			moduleId: "vs/language/typescript/tsWorker",
			createWorker: () => new Worker(new URL(
				/* @vite-ignore */
				"" + new URL("ts.worker-BBX9x8NL.js", import.meta.url).href,
				"" + import.meta.url
			), { type: "module" }),
			label: this._modeId,
			keepIdleModels: !0,
			createData: {
				compilerOptions: this._defaults.getCompilerOptions(),
				extraLibs: this._defaults.getExtraLibs(),
				customWorkerPath: this._defaults.workerOptions.customWorkerPath,
				inlayHintsOptions: this._defaults.inlayHintsOptions
			}
		}), this._defaults.getEagerModelSync() ? await this._worker.withSyncedResources(editor.getModels().filter((a) => a.getLanguageId() === this._modeId).map((a) => a.uri)) : await this._worker.getProxy()))(), this._client;
	}
	async getLanguageServiceWorker(...a) {
		let D = await this._getClient();
		return this._worker && await this._worker.withSyncedResources(a), D;
	}
}, libFileSet = {};
libFileSet["lib.d.ts"] = !0, libFileSet["lib.decorators.d.ts"] = !0, libFileSet["lib.decorators.legacy.d.ts"] = !0, libFileSet["lib.dom.asynciterable.d.ts"] = !0, libFileSet["lib.dom.d.ts"] = !0, libFileSet["lib.dom.iterable.d.ts"] = !0, libFileSet["lib.es2015.collection.d.ts"] = !0, libFileSet["lib.es2015.core.d.ts"] = !0, libFileSet["lib.es2015.d.ts"] = !0, libFileSet["lib.es2015.generator.d.ts"] = !0, libFileSet["lib.es2015.iterable.d.ts"] = !0, libFileSet["lib.es2015.promise.d.ts"] = !0, libFileSet["lib.es2015.proxy.d.ts"] = !0, libFileSet["lib.es2015.reflect.d.ts"] = !0, libFileSet["lib.es2015.symbol.d.ts"] = !0, libFileSet["lib.es2015.symbol.wellknown.d.ts"] = !0, libFileSet["lib.es2016.array.include.d.ts"] = !0, libFileSet["lib.es2016.d.ts"] = !0, libFileSet["lib.es2016.full.d.ts"] = !0, libFileSet["lib.es2016.intl.d.ts"] = !0, libFileSet["lib.es2017.arraybuffer.d.ts"] = !0, libFileSet["lib.es2017.d.ts"] = !0, libFileSet["lib.es2017.date.d.ts"] = !0, libFileSet["lib.es2017.full.d.ts"] = !0, libFileSet["lib.es2017.intl.d.ts"] = !0, libFileSet["lib.es2017.object.d.ts"] = !0, libFileSet["lib.es2017.sharedmemory.d.ts"] = !0, libFileSet["lib.es2017.string.d.ts"] = !0, libFileSet["lib.es2017.typedarrays.d.ts"] = !0, libFileSet["lib.es2018.asyncgenerator.d.ts"] = !0, libFileSet["lib.es2018.asynciterable.d.ts"] = !0, libFileSet["lib.es2018.d.ts"] = !0, libFileSet["lib.es2018.full.d.ts"] = !0, libFileSet["lib.es2018.intl.d.ts"] = !0, libFileSet["lib.es2018.promise.d.ts"] = !0, libFileSet["lib.es2018.regexp.d.ts"] = !0, libFileSet["lib.es2019.array.d.ts"] = !0, libFileSet["lib.es2019.d.ts"] = !0, libFileSet["lib.es2019.full.d.ts"] = !0, libFileSet["lib.es2019.intl.d.ts"] = !0, libFileSet["lib.es2019.object.d.ts"] = !0, libFileSet["lib.es2019.string.d.ts"] = !0, libFileSet["lib.es2019.symbol.d.ts"] = !0, libFileSet["lib.es2020.bigint.d.ts"] = !0, libFileSet["lib.es2020.d.ts"] = !0, libFileSet["lib.es2020.date.d.ts"] = !0, libFileSet["lib.es2020.full.d.ts"] = !0, libFileSet["lib.es2020.intl.d.ts"] = !0, libFileSet["lib.es2020.number.d.ts"] = !0, libFileSet["lib.es2020.promise.d.ts"] = !0, libFileSet["lib.es2020.sharedmemory.d.ts"] = !0, libFileSet["lib.es2020.string.d.ts"] = !0, libFileSet["lib.es2020.symbol.wellknown.d.ts"] = !0, libFileSet["lib.es2021.d.ts"] = !0, libFileSet["lib.es2021.full.d.ts"] = !0, libFileSet["lib.es2021.intl.d.ts"] = !0, libFileSet["lib.es2021.promise.d.ts"] = !0, libFileSet["lib.es2021.string.d.ts"] = !0, libFileSet["lib.es2021.weakref.d.ts"] = !0, libFileSet["lib.es2022.array.d.ts"] = !0, libFileSet["lib.es2022.d.ts"] = !0, libFileSet["lib.es2022.error.d.ts"] = !0, libFileSet["lib.es2022.full.d.ts"] = !0, libFileSet["lib.es2022.intl.d.ts"] = !0, libFileSet["lib.es2022.object.d.ts"] = !0, libFileSet["lib.es2022.regexp.d.ts"] = !0, libFileSet["lib.es2022.string.d.ts"] = !0, libFileSet["lib.es2023.array.d.ts"] = !0, libFileSet["lib.es2023.collection.d.ts"] = !0, libFileSet["lib.es2023.d.ts"] = !0, libFileSet["lib.es2023.full.d.ts"] = !0, libFileSet["lib.es2023.intl.d.ts"] = !0, libFileSet["lib.es2024.arraybuffer.d.ts"] = !0, libFileSet["lib.es2024.collection.d.ts"] = !0, libFileSet["lib.es2024.d.ts"] = !0, libFileSet["lib.es2024.full.d.ts"] = !0, libFileSet["lib.es2024.object.d.ts"] = !0, libFileSet["lib.es2024.promise.d.ts"] = !0, libFileSet["lib.es2024.regexp.d.ts"] = !0, libFileSet["lib.es2024.sharedmemory.d.ts"] = !0, libFileSet["lib.es2024.string.d.ts"] = !0, libFileSet["lib.es5.d.ts"] = !0, libFileSet["lib.es6.d.ts"] = !0, libFileSet["lib.esnext.array.d.ts"] = !0, libFileSet["lib.esnext.collection.d.ts"] = !0, libFileSet["lib.esnext.d.ts"] = !0, libFileSet["lib.esnext.decorators.d.ts"] = !0, libFileSet["lib.esnext.disposable.d.ts"] = !0, libFileSet["lib.esnext.error.d.ts"] = !0, libFileSet["lib.esnext.float16.d.ts"] = !0, libFileSet["lib.esnext.full.d.ts"] = !0, libFileSet["lib.esnext.intl.d.ts"] = !0, libFileSet["lib.esnext.iterator.d.ts"] = !0, libFileSet["lib.esnext.promise.d.ts"] = !0, libFileSet["lib.esnext.sharedmemory.d.ts"] = !0, libFileSet["lib.scripthost.d.ts"] = !0, libFileSet["lib.webworker.asynciterable.d.ts"] = !0, libFileSet["lib.webworker.d.ts"] = !0, libFileSet["lib.webworker.importscripts.d.ts"] = !0, libFileSet["lib.webworker.iterable.d.ts"] = !0;
function flattenDiagnosticMessageText(a, D, O = 0) {
	if (typeof a == "string") return a;
	if (a === void 0) return "";
	let k = "";
	if (O) {
		k += D;
		for (let a = 0; a < O; a++) k += "  ";
	}
	if (k += a.messageText, O++, a.next) for (let A of a.next) k += flattenDiagnosticMessageText(A, D, O);
	return k;
}
function displayPartsToString(a) {
	return a ? a.map((a) => a.text).join("") : "";
}
var Adapter = class {
	constructor(a) {
		this._worker = a;
	}
	_textSpanToRange(a, D) {
		let O = a.getPositionAt(D.start), k = a.getPositionAt(D.start + D.length), { lineNumber: A, column: j } = O, { lineNumber: M, column: N } = k;
		return {
			startLineNumber: A,
			startColumn: j,
			endLineNumber: M,
			endColumn: N
		};
	}
}, LibFiles = class {
	constructor(a) {
		this._worker = a, this._libFiles = {}, this._hasFetchedLibFiles = !1, this._fetchLibFilesPromise = null;
	}
	isLibFile(a) {
		return a && a.path.indexOf("/lib.") === 0 ? !!libFileSet[a.path.slice(1)] : !1;
	}
	getOrCreateModel(a) {
		let D = Uri.parse(a), k = editor.getModel(D);
		if (k) return k;
		if (this.isLibFile(D) && this._hasFetchedLibFiles) return editor.createModel(this._libFiles[D.path.slice(1)], "typescript", D);
		let A = typescriptDefaults.getExtraLibs()[a];
		return A ? editor.createModel(A.content, "typescript", D) : null;
	}
	_containsLibFile(a) {
		for (let D of a) if (this.isLibFile(D)) return !0;
		return !1;
	}
	async fetchLibFilesIfNecessary(a) {
		this._containsLibFile(a) && await this._fetchLibFiles();
	}
	_fetchLibFiles() {
		return this._fetchLibFilesPromise ||= this._worker().then((a) => a.getLibFiles()).then((a) => {
			this._hasFetchedLibFiles = !0, this._libFiles = a;
		}), this._fetchLibFilesPromise;
	}
}, DiagnosticsAdapter = class extends Adapter {
	constructor(a, D, O, k) {
		super(k), this._libFiles = a, this._defaults = D, this._selector = O, this._disposables = [], this._listener = /* @__PURE__ */ Object.create(null);
		let A = (a) => {
			if (a.getLanguageId() !== O) return;
			let D = () => {
				let { onlyVisible: D } = this._defaults.getDiagnosticsOptions();
				D ? a.isAttachedToEditor() && this._doValidate(a) : this._doValidate(a);
			}, k, A = a.onDidChangeContent(() => {
				clearTimeout(k), k = window.setTimeout(D, 500);
			}), M = a.onDidChangeAttached(() => {
				let { onlyVisible: O } = this._defaults.getDiagnosticsOptions();
				O && (a.isAttachedToEditor() ? D() : editor.setModelMarkers(a, this._selector, []));
			});
			this._listener[a.uri.toString()] = { dispose() {
				A.dispose(), M.dispose(), clearTimeout(k);
			} }, D();
		}, M = (a) => {
			editor.setModelMarkers(a, this._selector, []);
			let D = a.uri.toString();
			this._listener[D] && (this._listener[D].dispose(), delete this._listener[D]);
		};
		this._disposables.push(editor.onDidCreateModel((a) => A(a))), this._disposables.push(editor.onWillDisposeModel(M)), this._disposables.push(editor.onDidChangeModelLanguage((a) => {
			M(a.model), A(a.model);
		})), this._disposables.push({ dispose() {
			for (let a of editor.getModels()) M(a);
		} });
		let N = () => {
			for (let a of editor.getModels()) M(a), A(a);
		};
		this._disposables.push(this._defaults.onDidChange(N)), this._disposables.push(this._defaults.onDidExtraLibsChange(N)), editor.getModels().forEach((a) => A(a));
	}
	dispose() {
		this._disposables.forEach((a) => a && a.dispose()), this._disposables = [];
	}
	async _doValidate(a) {
		let D = await this._worker(a.uri);
		if (a.isDisposed()) return;
		let k = [], { noSyntaxValidation: A, noSemanticValidation: M, noSuggestionDiagnostics: N } = this._defaults.getDiagnosticsOptions();
		A || k.push(D.getSyntacticDiagnostics(a.uri.toString())), M || k.push(D.getSemanticDiagnostics(a.uri.toString())), N || k.push(D.getSuggestionDiagnostics(a.uri.toString()));
		let P = await Promise.all(k);
		if (!P || a.isDisposed()) return;
		let F = P.reduce((a, D) => D.concat(a), []).filter((a) => (this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(a.code) === -1), I = F.map((a) => a.relatedInformation || []).reduce((a, D) => D.concat(a), []).map((a) => a.file ? Uri.parse(a.file.fileName) : null);
		await this._libFiles.fetchLibFilesIfNecessary(I), !a.isDisposed() && editor.setModelMarkers(a, this._selector, F.map((D) => this._convertDiagnostics(a, D)));
	}
	_convertDiagnostics(a, D) {
		let O = D.start || 0, k = D.length || 1, { lineNumber: j, column: M } = a.getPositionAt(O), { lineNumber: N, column: P } = a.getPositionAt(O + k), F = [];
		return D.reportsUnnecessary && F.push(MarkerTag.Unnecessary), D.reportsDeprecated && F.push(MarkerTag.Deprecated), {
			severity: this._tsDiagnosticCategoryToMarkerSeverity(D.category),
			startLineNumber: j,
			startColumn: M,
			endLineNumber: N,
			endColumn: P,
			message: flattenDiagnosticMessageText(D.messageText, "\n"),
			code: D.code.toString(),
			tags: F,
			relatedInformation: this._convertRelatedInformation(a, D.relatedInformation)
		};
	}
	_convertRelatedInformation(a, D) {
		if (!D) return [];
		let O = [];
		return D.forEach((D) => {
			let k = a;
			if (D.file && (k = this._libFiles.getOrCreateModel(D.file.fileName)), !k) return;
			let A = D.start || 0, j = D.length || 1, { lineNumber: M, column: N } = k.getPositionAt(A), { lineNumber: P, column: F } = k.getPositionAt(A + j);
			O.push({
				resource: k.uri,
				startLineNumber: M,
				startColumn: N,
				endLineNumber: P,
				endColumn: F,
				message: flattenDiagnosticMessageText(D.messageText, "\n")
			});
		}), O;
	}
	_tsDiagnosticCategoryToMarkerSeverity(D) {
		switch (D) {
			case 1: return MarkerSeverity.Error;
			case 3: return MarkerSeverity.Info;
			case 0: return MarkerSeverity.Warning;
			case 2: return MarkerSeverity.Hint;
		}
		return MarkerSeverity.Info;
	}
}, SuggestAdapter = class a extends Adapter {
	get triggerCharacters() {
		return ["."];
	}
	async provideCompletionItems(O, A, j, M) {
		let N = O.getWordUntilPosition(A), P = new Range(A.lineNumber, N.startColumn, A.lineNumber, N.endColumn), F = O.uri, I = O.getOffsetAt(A), L = await this._worker(F);
		if (O.isDisposed()) return;
		let R = await L.getCompletionsAtPosition(F.toString(), I);
		if (!(!R || O.isDisposed())) return { suggestions: R.entries.map((j) => {
			let M = P;
			if (j.replacementSpan) {
				let a = O.getPositionAt(j.replacementSpan.start), k = O.getPositionAt(j.replacementSpan.start + j.replacementSpan.length);
				M = new Range(a.lineNumber, a.column, k.lineNumber, k.column);
			}
			let N = [];
			return j.kindModifiers !== void 0 && j.kindModifiers.indexOf("deprecated") !== -1 && N.push(languages.CompletionItemTag.Deprecated), {
				uri: F,
				position: A,
				offset: I,
				range: M,
				label: j.name,
				insertText: j.name,
				sortText: j.sortText,
				kind: a.convertKind(j.kind),
				tags: N
			};
		}) };
	}
	async resolveCompletionItem(D, O) {
		let k = D, A = k.uri, j = k.position, M = k.offset, N = await (await this._worker(A)).getCompletionEntryDetails(A.toString(), M, k.label);
		return N ? {
			uri: A,
			position: j,
			label: N.name,
			kind: a.convertKind(N.kind),
			detail: displayPartsToString(N.displayParts),
			documentation: { value: a.createDocumentationString(N) }
		} : k;
	}
	static convertKind(a) {
		switch (a) {
			case Kind.primitiveType:
			case Kind.keyword: return languages.CompletionItemKind.Keyword;
			case Kind.variable:
			case Kind.localVariable: return languages.CompletionItemKind.Variable;
			case Kind.memberVariable:
			case Kind.memberGetAccessor:
			case Kind.memberSetAccessor: return languages.CompletionItemKind.Field;
			case Kind.function:
			case Kind.memberFunction:
			case Kind.constructSignature:
			case Kind.callSignature:
			case Kind.indexSignature: return languages.CompletionItemKind.Function;
			case Kind.enum: return languages.CompletionItemKind.Enum;
			case Kind.module: return languages.CompletionItemKind.Module;
			case Kind.class: return languages.CompletionItemKind.Class;
			case Kind.interface: return languages.CompletionItemKind.Interface;
			case Kind.warning: return languages.CompletionItemKind.File;
		}
		return languages.CompletionItemKind.Property;
	}
	static createDocumentationString(a) {
		let D = displayPartsToString(a.documentation);
		if (a.tags) for (let O of a.tags) D += `

${tagToString(O)}`;
		return D;
	}
};
function tagToString(a) {
	let D = `*@${a.name}*`;
	if (a.name === "param" && a.text) {
		let [O, ...k] = a.text;
		D += `\`${O.text}\``, k.length > 0 && (D += ` \u2014 ${k.map((a) => a.text).join(" ")}`);
	} else Array.isArray(a.text) ? D += ` \u2014 ${a.text.map((a) => a.text).join(" ")}` : a.text && (D += ` \u2014 ${a.text}`);
	return D;
}
var SignatureHelpAdapter = class a extends Adapter {
	constructor() {
		super(...arguments), this.signatureHelpTriggerCharacters = ["(", ","];
	}
	static _toSignatureHelpTriggerReason(a) {
		switch (a.triggerKind) {
			case languages.SignatureHelpTriggerKind.TriggerCharacter: return a.triggerCharacter ? a.isRetrigger ? {
				kind: "retrigger",
				triggerCharacter: a.triggerCharacter
			} : {
				kind: "characterTyped",
				triggerCharacter: a.triggerCharacter
			} : { kind: "invoked" };
			case languages.SignatureHelpTriggerKind.ContentChange: return a.isRetrigger ? { kind: "retrigger" } : { kind: "invoked" };
			case languages.SignatureHelpTriggerKind.Invoke:
			default: return { kind: "invoked" };
		}
	}
	async provideSignatureHelp(D, O, k, A) {
		let j = D.uri, M = D.getOffsetAt(O), N = await this._worker(j);
		if (D.isDisposed()) return;
		let P = await N.getSignatureHelpItems(j.toString(), M, { triggerReason: a._toSignatureHelpTriggerReason(A) });
		if (!P || D.isDisposed()) return;
		let F = {
			activeSignature: P.selectedItemIndex,
			activeParameter: P.argumentIndex,
			signatures: []
		};
		return P.items.forEach((a) => {
			let D = {
				label: "",
				parameters: []
			};
			D.documentation = { value: displayPartsToString(a.documentation) }, D.label += displayPartsToString(a.prefixDisplayParts), a.parameters.forEach((O, k, A) => {
				let j = displayPartsToString(O.displayParts), M = {
					label: j,
					documentation: { value: displayPartsToString(O.documentation) }
				};
				D.label += j, D.parameters.push(M), k < A.length - 1 && (D.label += displayPartsToString(a.separatorDisplayParts));
			}), D.label += displayPartsToString(a.suffixDisplayParts), F.signatures.push(D);
		}), {
			value: F,
			dispose() {}
		};
	}
}, QuickInfoAdapter = class extends Adapter {
	async provideHover(a, D, O) {
		let k = a.uri, A = a.getOffsetAt(D), j = await this._worker(k);
		if (a.isDisposed()) return;
		let M = await j.getQuickInfoAtPosition(k.toString(), A);
		if (!M || a.isDisposed()) return;
		let N = displayPartsToString(M.documentation), P = M.tags ? M.tags.map((a) => tagToString(a)).join("  \n\n") : "", F = displayPartsToString(M.displayParts);
		return {
			range: this._textSpanToRange(a, M.textSpan),
			contents: [{ value: "```typescript\n" + F + "\n```\n" }, { value: N + (P ? "\n\n" + P : "") }]
		};
	}
}, DocumentHighlightAdapter = class extends Adapter {
	async provideDocumentHighlights(a, D, O) {
		let A = a.uri, j = a.getOffsetAt(D), M = await this._worker(A);
		if (a.isDisposed()) return;
		let N = await M.getDocumentHighlights(A.toString(), j, [A.toString()]);
		if (!(!N || a.isDisposed())) return N.flatMap((D) => D.highlightSpans.map((D) => ({
			range: this._textSpanToRange(a, D.textSpan),
			kind: D.kind === "writtenReference" ? languages.DocumentHighlightKind.Write : languages.DocumentHighlightKind.Text
		})));
	}
}, DefinitionAdapter = class extends Adapter {
	constructor(a, D) {
		super(D), this._libFiles = a;
	}
	async provideDefinition(a, D, k) {
		let A = a.uri, j = a.getOffsetAt(D), M = await this._worker(A);
		if (a.isDisposed()) return;
		let N = await M.getDefinitionAtPosition(A.toString(), j);
		if (!N || a.isDisposed() || (await this._libFiles.fetchLibFilesIfNecessary(N.map((a) => Uri.parse(a.fileName))), a.isDisposed())) return;
		let P = [];
		for (let a of N) {
			let D = this._libFiles.getOrCreateModel(a.fileName);
			D && P.push({
				uri: D.uri,
				range: this._textSpanToRange(D, a.textSpan)
			});
		}
		return P;
	}
}, ReferenceAdapter = class extends Adapter {
	constructor(a, D) {
		super(D), this._libFiles = a;
	}
	async provideReferences(a, D, k, A) {
		let j = a.uri, M = a.getOffsetAt(D), N = await this._worker(j);
		if (a.isDisposed()) return;
		let P = await N.getReferencesAtPosition(j.toString(), M);
		if (!P || a.isDisposed() || (await this._libFiles.fetchLibFilesIfNecessary(P.map((a) => Uri.parse(a.fileName))), a.isDisposed())) return;
		let F = [];
		for (let a of P) {
			let D = this._libFiles.getOrCreateModel(a.fileName);
			D && F.push({
				uri: D.uri,
				range: this._textSpanToRange(D, a.textSpan)
			});
		}
		return F;
	}
}, OutlineAdapter = class extends Adapter {
	async provideDocumentSymbols(a, D) {
		let O = a.uri, A = await this._worker(O);
		if (a.isDisposed()) return;
		let j = await A.getNavigationTree(O.toString());
		if (!j || a.isDisposed()) return;
		let M = (D, O) => ({
			name: D.text,
			detail: "",
			kind: outlineTypeTable[D.kind] || languages.SymbolKind.Variable,
			range: this._textSpanToRange(a, D.spans[0]),
			selectionRange: this._textSpanToRange(a, D.spans[0]),
			tags: [],
			children: D.childItems?.map((a) => M(a, D.text)),
			containerName: O
		});
		return j.childItems ? j.childItems.map((a) => M(a)) : [];
	}
}, Kind = class {};
Kind.unknown = "", Kind.keyword = "keyword", Kind.script = "script", Kind.module = "module", Kind.class = "class", Kind.interface = "interface", Kind.type = "type", Kind.enum = "enum", Kind.variable = "var", Kind.localVariable = "local var", Kind.function = "function", Kind.localFunction = "local function", Kind.memberFunction = "method", Kind.memberGetAccessor = "getter", Kind.memberSetAccessor = "setter", Kind.memberVariable = "property", Kind.constructorImplementation = "constructor", Kind.callSignature = "call", Kind.indexSignature = "index", Kind.constructSignature = "construct", Kind.parameter = "parameter", Kind.typeParameter = "type parameter", Kind.primitiveType = "primitive type", Kind.label = "label", Kind.alias = "alias", Kind.const = "const", Kind.let = "let", Kind.warning = "warning";
var outlineTypeTable = /* @__PURE__ */ Object.create(null);
outlineTypeTable[Kind.module] = languages.SymbolKind.Module, outlineTypeTable[Kind.class] = languages.SymbolKind.Class, outlineTypeTable[Kind.enum] = languages.SymbolKind.Enum, outlineTypeTable[Kind.interface] = languages.SymbolKind.Interface, outlineTypeTable[Kind.memberFunction] = languages.SymbolKind.Method, outlineTypeTable[Kind.memberVariable] = languages.SymbolKind.Property, outlineTypeTable[Kind.memberGetAccessor] = languages.SymbolKind.Property, outlineTypeTable[Kind.memberSetAccessor] = languages.SymbolKind.Property, outlineTypeTable[Kind.variable] = languages.SymbolKind.Variable, outlineTypeTable[Kind.const] = languages.SymbolKind.Variable, outlineTypeTable[Kind.localVariable] = languages.SymbolKind.Variable, outlineTypeTable[Kind.variable] = languages.SymbolKind.Variable, outlineTypeTable[Kind.function] = languages.SymbolKind.Function, outlineTypeTable[Kind.localFunction] = languages.SymbolKind.Function;
var FormatHelper = class extends Adapter {
	static _convertOptions(a) {
		return {
			ConvertTabsToSpaces: a.insertSpaces,
			TabSize: a.tabSize,
			IndentSize: a.tabSize,
			IndentStyle: 2,
			NewLineCharacter: "\n",
			InsertSpaceAfterCommaDelimiter: !0,
			InsertSpaceAfterSemicolonInForStatements: !0,
			InsertSpaceBeforeAndAfterBinaryOperators: !0,
			InsertSpaceAfterKeywordsInControlFlowStatements: !0,
			InsertSpaceAfterFunctionKeywordForAnonymousFunctions: !0,
			InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: !1,
			InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: !1,
			InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: !1,
			PlaceOpenBraceOnNewLineForControlBlocks: !1,
			PlaceOpenBraceOnNewLineForFunctions: !1
		};
	}
	_convertTextChanges(a, D) {
		return {
			text: D.newText,
			range: this._textSpanToRange(a, D.span)
		};
	}
}, FormatAdapter = class extends FormatHelper {
	constructor() {
		super(...arguments), this.canFormatMultipleRanges = !1;
	}
	async provideDocumentRangeFormattingEdits(a, D, O, k) {
		let A = a.uri, j = a.getOffsetAt({
			lineNumber: D.startLineNumber,
			column: D.startColumn
		}), M = a.getOffsetAt({
			lineNumber: D.endLineNumber,
			column: D.endColumn
		}), N = await this._worker(A);
		if (a.isDisposed()) return;
		let P = await N.getFormattingEditsForRange(A.toString(), j, M, FormatHelper._convertOptions(O));
		if (!(!P || a.isDisposed())) return P.map((D) => this._convertTextChanges(a, D));
	}
}, FormatOnTypeAdapter = class extends FormatHelper {
	get autoFormatTriggerCharacters() {
		return [
			";",
			"}",
			"\n"
		];
	}
	async provideOnTypeFormattingEdits(a, D, O, k, A) {
		let j = a.uri, M = a.getOffsetAt(D), N = await this._worker(j);
		if (a.isDisposed()) return;
		let P = await N.getFormattingEditsAfterKeystroke(j.toString(), M, O, FormatHelper._convertOptions(k));
		if (!(!P || a.isDisposed())) return P.map((D) => this._convertTextChanges(a, D));
	}
}, CodeActionAdaptor = class extends FormatHelper {
	async provideCodeActions(a, D, O, k) {
		let A = a.uri, j = a.getOffsetAt({
			lineNumber: D.startLineNumber,
			column: D.startColumn
		}), M = a.getOffsetAt({
			lineNumber: D.endLineNumber,
			column: D.endColumn
		}), N = FormatHelper._convertOptions(a.getOptions()), P = O.markers.filter((a) => a.code).map((a) => a.code).map(Number), F = await this._worker(A);
		if (a.isDisposed()) return;
		let I = await F.getCodeFixesAtPosition(A.toString(), j, M, P, N);
		return !I || a.isDisposed() ? {
			actions: [],
			dispose: () => {}
		} : {
			actions: I.filter((a) => a.changes.filter((a) => a.isNewFile).length === 0).map((D) => this._tsCodeFixActionToMonacoCodeAction(a, O, D)),
			dispose: () => {}
		};
	}
	_tsCodeFixActionToMonacoCodeAction(a, D, O) {
		let k = [];
		for (let D of O.changes) for (let O of D.textChanges) k.push({
			resource: a.uri,
			versionId: void 0,
			textEdit: {
				range: this._textSpanToRange(a, O.span),
				text: O.newText
			}
		});
		return {
			title: O.description,
			edit: { edits: k },
			diagnostics: D.markers,
			kind: "quickfix"
		};
	}
}, RenameAdapter = class extends Adapter {
	constructor(a, D) {
		super(D), this._libFiles = a;
	}
	async provideRenameEdits(a, D, O, k) {
		let A = a.uri, j = A.toString(), M = a.getOffsetAt(D), N = await this._worker(A);
		if (a.isDisposed()) return;
		let P = await N.getRenameInfo(j, M, { allowRenameOfImportPath: !1 });
		if (P.canRename === !1) return {
			edits: [],
			rejectReason: P.localizedErrorMessage
		};
		if (P.fileToRename !== void 0) throw Error("Renaming files is not supported.");
		let F = await N.findRenameLocations(j, M, !1, !1, !1);
		if (!F || a.isDisposed()) return;
		let I = [];
		for (let a of F) {
			let D = this._libFiles.getOrCreateModel(a.fileName);
			if (D) I.push({
				resource: D.uri,
				versionId: void 0,
				textEdit: {
					range: this._textSpanToRange(D, a.textSpan),
					text: O
				}
			});
			else throw Error(`Unknown file ${a.fileName}.`);
		}
		return { edits: I };
	}
}, InlayHintsAdapter = class extends Adapter {
	async provideInlayHints(a, D, O) {
		let k = a.uri, A = k.toString(), j = a.getOffsetAt({
			lineNumber: D.startLineNumber,
			column: D.startColumn
		}), M = a.getOffsetAt({
			lineNumber: D.endLineNumber,
			column: D.endColumn
		}), N = await this._worker(k);
		return a.isDisposed() ? null : {
			hints: (await N.provideInlayHints(A, j, M)).map((D) => ({
				...D,
				label: D.text,
				position: a.getPositionAt(D.position),
				kind: this._convertHintKind(D.kind)
			})),
			dispose: () => {}
		};
	}
	_convertHintKind(a) {
		switch (a) {
			case "Parameter": return languages.InlayHintKind.Parameter;
			case "Type": return languages.InlayHintKind.Type;
			default: return languages.InlayHintKind.Type;
		}
	}
}, javaScriptWorker, typeScriptWorker;
function setupTypeScript(a) {
	typeScriptWorker = setupMode(a, "typescript");
}
function setupJavaScript(a) {
	javaScriptWorker = setupMode(a, "javascript");
}
function getJavaScriptWorker() {
	return new Promise((a, D) => {
		if (!javaScriptWorker) return D("JavaScript not registered!");
		a(javaScriptWorker);
	});
}
function getTypeScriptWorker() {
	return new Promise((a, D) => {
		if (!typeScriptWorker) return D("TypeScript not registered!");
		a(typeScriptWorker);
	});
}
function setupMode(a, D) {
	let O = [], A = new WorkerManager(D, a), j = (...a) => A.getLanguageServiceWorker(...a), M = new LibFiles(j);
	function N() {
		let { modeConfiguration: A } = a;
		disposeAll(O), A.completionItems && O.push(languages.registerCompletionItemProvider(D, new SuggestAdapter(j))), A.signatureHelp && O.push(languages.registerSignatureHelpProvider(D, new SignatureHelpAdapter(j))), A.hovers && O.push(languages.registerHoverProvider(D, new QuickInfoAdapter(j))), A.documentHighlights && O.push(languages.registerDocumentHighlightProvider(D, new DocumentHighlightAdapter(j))), A.definitions && O.push(languages.registerDefinitionProvider(D, new DefinitionAdapter(M, j))), A.references && O.push(languages.registerReferenceProvider(D, new ReferenceAdapter(M, j))), A.documentSymbols && O.push(languages.registerDocumentSymbolProvider(D, new OutlineAdapter(j))), A.rename && O.push(languages.registerRenameProvider(D, new RenameAdapter(M, j))), A.documentRangeFormattingEdits && O.push(languages.registerDocumentRangeFormattingEditProvider(D, new FormatAdapter(j))), A.onTypeFormattingEdits && O.push(languages.registerOnTypeFormattingEditProvider(D, new FormatOnTypeAdapter(j))), A.codeActions && O.push(languages.registerCodeActionProvider(D, new CodeActionAdaptor(j))), A.inlayHints && O.push(languages.registerInlayHintsProvider(D, new InlayHintsAdapter(j))), A.diagnostics && O.push(new DiagnosticsAdapter(M, a, D, j));
	}
	return N(), j;
}
function disposeAll(a) {
	for (; a.length;) a.pop().dispose();
}
export { Adapter, CodeActionAdaptor, DefinitionAdapter, DiagnosticsAdapter, DocumentHighlightAdapter, FormatAdapter, FormatHelper, FormatOnTypeAdapter, InlayHintsAdapter, Kind, LibFiles, OutlineAdapter, QuickInfoAdapter, ReferenceAdapter, RenameAdapter, SignatureHelpAdapter, SuggestAdapter, WorkerManager, flattenDiagnosticMessageText, getJavaScriptWorker, getTypeScriptWorker, setupJavaScript, setupTypeScript };
