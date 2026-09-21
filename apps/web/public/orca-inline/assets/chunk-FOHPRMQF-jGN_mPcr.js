var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __name = (e, n) => __defProp(e, "name", {
	value: n,
	configurable: !0
}), __esm = (e, t) => function() {
	return e && (t = (0, e[__getOwnPropNames(e)[0]])(e = 0)), t;
}, __commonJS = (e, t) => function() {
	return t || (0, e[__getOwnPropNames(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, __export = (e, n) => {
	for (var r in n) __defProp(e, r, {
		get: n[r],
		enumerable: !0
	});
}, __copyProps = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (let c of __getOwnPropNames(i)) !__hasOwnProp.call(e, c) && c !== o && __defProp(e, c, {
		get: () => i[c],
		enumerable: !(s = __getOwnPropDesc(i, c)) || s.enumerable
	});
	return e;
}, __reExport = (e, t, n) => (__copyProps(e, t, "default"), n && __copyProps(n, t, "default")), __toESM = (n, r, a) => (a = n == null ? {} : __create(__getProtoOf(n)), __copyProps(r || !n || !n.__esModule ? __defProp(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), __toCommonJS = (e) => __copyProps(__defProp({}, "__esModule", { value: !0 }), e), main_exports = {};
__export(main_exports, {
	AnnotatedTextEdit: () => AnnotatedTextEdit,
	ChangeAnnotation: () => ChangeAnnotation,
	ChangeAnnotationIdentifier: () => ChangeAnnotationIdentifier,
	CodeAction: () => CodeAction,
	CodeActionContext: () => CodeActionContext,
	CodeActionKind: () => CodeActionKind,
	CodeActionTriggerKind: () => CodeActionTriggerKind,
	CodeDescription: () => CodeDescription,
	CodeLens: () => CodeLens,
	Color: () => Color,
	ColorInformation: () => ColorInformation,
	ColorPresentation: () => ColorPresentation,
	Command: () => Command,
	CompletionItem: () => CompletionItem,
	CompletionItemKind: () => CompletionItemKind,
	CompletionItemLabelDetails: () => CompletionItemLabelDetails,
	CompletionItemTag: () => CompletionItemTag,
	CompletionList: () => CompletionList,
	CreateFile: () => CreateFile,
	DeleteFile: () => DeleteFile,
	Diagnostic: () => Diagnostic,
	DiagnosticRelatedInformation: () => DiagnosticRelatedInformation,
	DiagnosticSeverity: () => DiagnosticSeverity,
	DiagnosticTag: () => DiagnosticTag,
	DocumentHighlight: () => DocumentHighlight,
	DocumentHighlightKind: () => DocumentHighlightKind,
	DocumentLink: () => DocumentLink,
	DocumentSymbol: () => DocumentSymbol,
	DocumentUri: () => DocumentUri,
	EOL: () => EOL,
	FoldingRange: () => FoldingRange,
	FoldingRangeKind: () => FoldingRangeKind,
	FormattingOptions: () => FormattingOptions,
	Hover: () => Hover,
	InlayHint: () => InlayHint,
	InlayHintKind: () => InlayHintKind,
	InlayHintLabelPart: () => InlayHintLabelPart,
	InlineCompletionContext: () => InlineCompletionContext,
	InlineCompletionItem: () => InlineCompletionItem,
	InlineCompletionList: () => InlineCompletionList,
	InlineCompletionTriggerKind: () => InlineCompletionTriggerKind,
	InlineValueContext: () => InlineValueContext,
	InlineValueEvaluatableExpression: () => InlineValueEvaluatableExpression,
	InlineValueText: () => InlineValueText,
	InlineValueVariableLookup: () => InlineValueVariableLookup,
	InsertReplaceEdit: () => InsertReplaceEdit,
	InsertTextFormat: () => InsertTextFormat,
	InsertTextMode: () => InsertTextMode,
	Location: () => Location,
	LocationLink: () => LocationLink,
	MarkedString: () => MarkedString,
	MarkupContent: () => MarkupContent,
	MarkupKind: () => MarkupKind,
	OptionalVersionedTextDocumentIdentifier: () => OptionalVersionedTextDocumentIdentifier,
	ParameterInformation: () => ParameterInformation,
	Position: () => Position,
	Range: () => Range,
	RenameFile: () => RenameFile,
	SelectedCompletionInfo: () => SelectedCompletionInfo,
	SelectionRange: () => SelectionRange,
	SemanticTokenModifiers: () => SemanticTokenModifiers,
	SemanticTokenTypes: () => SemanticTokenTypes,
	SemanticTokens: () => SemanticTokens,
	SignatureInformation: () => SignatureInformation,
	StringValue: () => StringValue,
	SymbolInformation: () => SymbolInformation,
	SymbolKind: () => SymbolKind,
	SymbolTag: () => SymbolTag,
	TextDocument: () => TextDocument,
	TextDocumentEdit: () => TextDocumentEdit,
	TextDocumentIdentifier: () => TextDocumentIdentifier,
	TextDocumentItem: () => TextDocumentItem,
	TextEdit: () => TextEdit,
	URI: () => URI,
	VersionedTextDocumentIdentifier: () => VersionedTextDocumentIdentifier,
	WorkspaceChange: () => WorkspaceChange,
	WorkspaceEdit: () => WorkspaceEdit,
	WorkspaceFolder: () => WorkspaceFolder,
	WorkspaceSymbol: () => WorkspaceSymbol,
	integer: () => integer,
	uinteger: () => uinteger
});
var DocumentUri, URI, integer, uinteger, Position, Range, Location, LocationLink, Color, ColorInformation, ColorPresentation, FoldingRangeKind, FoldingRange, DiagnosticRelatedInformation, DiagnosticSeverity, DiagnosticTag, CodeDescription, Diagnostic, Command, TextEdit, ChangeAnnotation, ChangeAnnotationIdentifier, AnnotatedTextEdit, TextDocumentEdit, CreateFile, RenameFile, DeleteFile, WorkspaceEdit, TextEditChangeImpl, ChangeAnnotations, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, OptionalVersionedTextDocumentIdentifier, TextDocumentItem, MarkupKind, MarkupContent, CompletionItemKind, InsertTextFormat, CompletionItemTag, InsertReplaceEdit, InsertTextMode, CompletionItemLabelDetails, CompletionItem, CompletionList, MarkedString, Hover, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolTag, SymbolInformation, WorkspaceSymbol, DocumentSymbol, CodeActionKind, CodeActionTriggerKind, CodeActionContext, CodeAction, CodeLens, FormattingOptions, DocumentLink, SelectionRange, SemanticTokenTypes, SemanticTokenModifiers, SemanticTokens, InlineValueText, InlineValueVariableLookup, InlineValueEvaluatableExpression, InlineValueContext, InlayHintKind, InlayHintLabelPart, InlayHint, StringValue, InlineCompletionItem, InlineCompletionList, InlineCompletionTriggerKind, SelectedCompletionInfo, InlineCompletionContext, WorkspaceFolder, EOL, TextDocument, FullTextDocument, Is, init_main = __esm({ "../../node_modules/.pnpm/vscode-languageserver-types@3.17.5/node_modules/vscode-languageserver-types/lib/esm/main.js"() {
	(function(e) {
		function t(e) {
			return typeof e == "string";
		}
		__name(t, "is"), e.is = t;
	})(DocumentUri ||= {}), (function(e) {
		function t(e) {
			return typeof e == "string";
		}
		__name(t, "is"), e.is = t;
	})(URI ||= {}), (function(e) {
		e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
		function t(t) {
			return typeof t == "number" && e.MIN_VALUE <= t && t <= e.MAX_VALUE;
		}
		__name(t, "is"), e.is = t;
	})(integer ||= {}), (function(e) {
		e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
		function t(t) {
			return typeof t == "number" && e.MIN_VALUE <= t && t <= e.MAX_VALUE;
		}
		__name(t, "is"), e.is = t;
	})(uinteger ||= {}), (function(e) {
		function t(e, t) {
			return e === Number.MAX_VALUE && (e = uinteger.MAX_VALUE), t === Number.MAX_VALUE && (t = uinteger.MAX_VALUE), {
				line: e,
				character: t
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.objectLiteral(t) && Is.uinteger(t.line) && Is.uinteger(t.character);
		}
		__name(n, "is"), e.is = n;
	})(Position ||= {}), (function(e) {
		function t(e, t, n, r) {
			if (Is.uinteger(e) && Is.uinteger(t) && Is.uinteger(n) && Is.uinteger(r)) return {
				start: Position.create(e, t),
				end: Position.create(n, r)
			};
			if (Position.is(e) && Position.is(t)) return {
				start: e,
				end: t
			};
			throw Error(`Range#create called with invalid arguments[${e}, ${t}, ${n}, ${r}]`);
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.objectLiteral(t) && Position.is(t.start) && Position.is(t.end);
		}
		__name(n, "is"), e.is = n;
	})(Range ||= {}), (function(e) {
		function t(e, t) {
			return {
				uri: e,
				range: t
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.objectLiteral(t) && Range.is(t.range) && (Is.string(t.uri) || Is.undefined(t.uri));
		}
		__name(n, "is"), e.is = n;
	})(Location ||= {}), (function(e) {
		function t(e, t, n, r) {
			return {
				targetUri: e,
				targetRange: t,
				targetSelectionRange: n,
				originSelectionRange: r
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.objectLiteral(t) && Range.is(t.targetRange) && Is.string(t.targetUri) && Range.is(t.targetSelectionRange) && (Range.is(t.originSelectionRange) || Is.undefined(t.originSelectionRange));
		}
		__name(n, "is"), e.is = n;
	})(LocationLink ||= {}), (function(e) {
		function t(e, t, n, r) {
			return {
				red: e,
				green: t,
				blue: n,
				alpha: r
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.objectLiteral(t) && Is.numberRange(t.red, 0, 1) && Is.numberRange(t.green, 0, 1) && Is.numberRange(t.blue, 0, 1) && Is.numberRange(t.alpha, 0, 1);
		}
		__name(n, "is"), e.is = n;
	})(Color ||= {}), (function(e) {
		function t(e, t) {
			return {
				range: e,
				color: t
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.objectLiteral(t) && Range.is(t.range) && Color.is(t.color);
		}
		__name(n, "is"), e.is = n;
	})(ColorInformation ||= {}), (function(e) {
		function t(e, t, n) {
			return {
				label: e,
				textEdit: t,
				additionalTextEdits: n
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.objectLiteral(t) && Is.string(t.label) && (Is.undefined(t.textEdit) || TextEdit.is(t)) && (Is.undefined(t.additionalTextEdits) || Is.typedArray(t.additionalTextEdits, TextEdit.is));
		}
		__name(n, "is"), e.is = n;
	})(ColorPresentation ||= {}), (function(e) {
		e.Comment = "comment", e.Imports = "imports", e.Region = "region";
	})(FoldingRangeKind ||= {}), (function(e) {
		function t(e, t, n, r, i, a) {
			let o = {
				startLine: e,
				endLine: t
			};
			return Is.defined(n) && (o.startCharacter = n), Is.defined(r) && (o.endCharacter = r), Is.defined(i) && (o.kind = i), Is.defined(a) && (o.collapsedText = a), o;
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.objectLiteral(t) && Is.uinteger(t.startLine) && Is.uinteger(t.startLine) && (Is.undefined(t.startCharacter) || Is.uinteger(t.startCharacter)) && (Is.undefined(t.endCharacter) || Is.uinteger(t.endCharacter)) && (Is.undefined(t.kind) || Is.string(t.kind));
		}
		__name(n, "is"), e.is = n;
	})(FoldingRange ||= {}), (function(e) {
		function t(e, t) {
			return {
				location: e,
				message: t
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && Location.is(t.location) && Is.string(t.message);
		}
		__name(n, "is"), e.is = n;
	})(DiagnosticRelatedInformation ||= {}), (function(e) {
		e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
	})(DiagnosticSeverity ||= {}), (function(e) {
		e.Unnecessary = 1, e.Deprecated = 2;
	})(DiagnosticTag ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return Is.objectLiteral(t) && Is.string(t.href);
		}
		__name(t, "is"), e.is = t;
	})(CodeDescription ||= {}), (function(e) {
		function t(e, t, n, r, i, a) {
			let o = {
				range: e,
				message: t
			};
			return Is.defined(n) && (o.severity = n), Is.defined(r) && (o.code = r), Is.defined(i) && (o.source = i), Is.defined(a) && (o.relatedInformation = a), o;
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && Range.is(t.range) && Is.string(t.message) && (Is.number(t.severity) || Is.undefined(t.severity)) && (Is.integer(t.code) || Is.string(t.code) || Is.undefined(t.code)) && (Is.undefined(t.codeDescription) || Is.string(t.codeDescription?.href)) && (Is.string(t.source) || Is.undefined(t.source)) && (Is.undefined(t.relatedInformation) || Is.typedArray(t.relatedInformation, DiagnosticRelatedInformation.is));
		}
		__name(n, "is"), e.is = n;
	})(Diagnostic ||= {}), (function(e) {
		function t(e, t, ...n) {
			let r = {
				title: e,
				command: t
			};
			return Is.defined(n) && n.length > 0 && (r.arguments = n), r;
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && Is.string(t.title) && Is.string(t.command);
		}
		__name(n, "is"), e.is = n;
	})(Command ||= {}), (function(e) {
		function t(e, t) {
			return {
				range: e,
				newText: t
			};
		}
		__name(t, "replace"), e.replace = t;
		function n(e, t) {
			return {
				range: {
					start: e,
					end: e
				},
				newText: t
			};
		}
		__name(n, "insert"), e.insert = n;
		function r(e) {
			return {
				range: e,
				newText: ""
			};
		}
		__name(r, "del"), e.del = r;
		function i(e) {
			let t = e;
			return Is.objectLiteral(t) && Is.string(t.newText) && Range.is(t.range);
		}
		__name(i, "is"), e.is = i;
	})(TextEdit ||= {}), (function(e) {
		function t(e, t, n) {
			let r = { label: e };
			return t !== void 0 && (r.needsConfirmation = t), n !== void 0 && (r.description = n), r;
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.objectLiteral(t) && Is.string(t.label) && (Is.boolean(t.needsConfirmation) || t.needsConfirmation === void 0) && (Is.string(t.description) || t.description === void 0);
		}
		__name(n, "is"), e.is = n;
	})(ChangeAnnotation ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return Is.string(t);
		}
		__name(t, "is"), e.is = t;
	})(ChangeAnnotationIdentifier ||= {}), (function(e) {
		function t(e, t, n) {
			return {
				range: e,
				newText: t,
				annotationId: n
			};
		}
		__name(t, "replace"), e.replace = t;
		function n(e, t, n) {
			return {
				range: {
					start: e,
					end: e
				},
				newText: t,
				annotationId: n
			};
		}
		__name(n, "insert"), e.insert = n;
		function r(e, t) {
			return {
				range: e,
				newText: "",
				annotationId: t
			};
		}
		__name(r, "del"), e.del = r;
		function i(e) {
			let t = e;
			return TextEdit.is(t) && (ChangeAnnotation.is(t.annotationId) || ChangeAnnotationIdentifier.is(t.annotationId));
		}
		__name(i, "is"), e.is = i;
	})(AnnotatedTextEdit ||= {}), (function(e) {
		function t(e, t) {
			return {
				textDocument: e,
				edits: t
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && OptionalVersionedTextDocumentIdentifier.is(t.textDocument) && Array.isArray(t.edits);
		}
		__name(n, "is"), e.is = n;
	})(TextDocumentEdit ||= {}), (function(e) {
		function t(e, t, n) {
			let r = {
				kind: "create",
				uri: e
			};
			return t !== void 0 && (t.overwrite !== void 0 || t.ignoreIfExists !== void 0) && (r.options = t), n !== void 0 && (r.annotationId = n), r;
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t && t.kind === "create" && Is.string(t.uri) && (t.options === void 0 || (t.options.overwrite === void 0 || Is.boolean(t.options.overwrite)) && (t.options.ignoreIfExists === void 0 || Is.boolean(t.options.ignoreIfExists))) && (t.annotationId === void 0 || ChangeAnnotationIdentifier.is(t.annotationId));
		}
		__name(n, "is"), e.is = n;
	})(CreateFile ||= {}), (function(e) {
		function t(e, t, n, r) {
			let i = {
				kind: "rename",
				oldUri: e,
				newUri: t
			};
			return n !== void 0 && (n.overwrite !== void 0 || n.ignoreIfExists !== void 0) && (i.options = n), r !== void 0 && (i.annotationId = r), i;
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t && t.kind === "rename" && Is.string(t.oldUri) && Is.string(t.newUri) && (t.options === void 0 || (t.options.overwrite === void 0 || Is.boolean(t.options.overwrite)) && (t.options.ignoreIfExists === void 0 || Is.boolean(t.options.ignoreIfExists))) && (t.annotationId === void 0 || ChangeAnnotationIdentifier.is(t.annotationId));
		}
		__name(n, "is"), e.is = n;
	})(RenameFile ||= {}), (function(e) {
		function t(e, t, n) {
			let r = {
				kind: "delete",
				uri: e
			};
			return t !== void 0 && (t.recursive !== void 0 || t.ignoreIfNotExists !== void 0) && (r.options = t), n !== void 0 && (r.annotationId = n), r;
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t && t.kind === "delete" && Is.string(t.uri) && (t.options === void 0 || (t.options.recursive === void 0 || Is.boolean(t.options.recursive)) && (t.options.ignoreIfNotExists === void 0 || Is.boolean(t.options.ignoreIfNotExists))) && (t.annotationId === void 0 || ChangeAnnotationIdentifier.is(t.annotationId));
		}
		__name(n, "is"), e.is = n;
	})(DeleteFile ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return t && (t.changes !== void 0 || t.documentChanges !== void 0) && (t.documentChanges === void 0 || t.documentChanges.every((e) => Is.string(e.kind) ? CreateFile.is(e) || RenameFile.is(e) || DeleteFile.is(e) : TextDocumentEdit.is(e)));
		}
		__name(t, "is"), e.is = t;
	})(WorkspaceEdit ||= {}), TextEditChangeImpl = class {
		static #e = __name(this, "TextEditChangeImpl");
		constructor(e, t) {
			this.edits = e, this.changeAnnotations = t;
		}
		insert(e, t, n) {
			let r, i;
			if (n === void 0 ? r = TextEdit.insert(e, t) : ChangeAnnotationIdentifier.is(n) ? (i = n, r = AnnotatedTextEdit.insert(e, t, n)) : (this.assertChangeAnnotations(this.changeAnnotations), i = this.changeAnnotations.manage(n), r = AnnotatedTextEdit.insert(e, t, i)), this.edits.push(r), i !== void 0) return i;
		}
		replace(e, t, n) {
			let r, i;
			if (n === void 0 ? r = TextEdit.replace(e, t) : ChangeAnnotationIdentifier.is(n) ? (i = n, r = AnnotatedTextEdit.replace(e, t, n)) : (this.assertChangeAnnotations(this.changeAnnotations), i = this.changeAnnotations.manage(n), r = AnnotatedTextEdit.replace(e, t, i)), this.edits.push(r), i !== void 0) return i;
		}
		delete(e, t) {
			let n, r;
			if (t === void 0 ? n = TextEdit.del(e) : ChangeAnnotationIdentifier.is(t) ? (r = t, n = AnnotatedTextEdit.del(e, t)) : (this.assertChangeAnnotations(this.changeAnnotations), r = this.changeAnnotations.manage(t), n = AnnotatedTextEdit.del(e, r)), this.edits.push(n), r !== void 0) return r;
		}
		add(e) {
			this.edits.push(e);
		}
		all() {
			return this.edits;
		}
		clear() {
			this.edits.splice(0, this.edits.length);
		}
		assertChangeAnnotations(e) {
			if (e === void 0) throw Error("Text edit change is not configured to manage change annotations.");
		}
	}, ChangeAnnotations = class {
		static #e = __name(this, "ChangeAnnotations");
		constructor(e) {
			this._annotations = e === void 0 ? /* @__PURE__ */ Object.create(null) : e, this._counter = 0, this._size = 0;
		}
		all() {
			return this._annotations;
		}
		get size() {
			return this._size;
		}
		manage(e, t) {
			let n;
			if (ChangeAnnotationIdentifier.is(e) ? n = e : (n = this.nextId(), t = e), this._annotations[n] !== void 0) throw Error(`Id ${n} is already in use.`);
			if (t === void 0) throw Error(`No annotation provided for id ${n}`);
			return this._annotations[n] = t, this._size++, n;
		}
		nextId() {
			return this._counter++, this._counter.toString();
		}
	}, WorkspaceChange = class {
		static #e = __name(this, "WorkspaceChange");
		constructor(e) {
			this._textEditChanges = /* @__PURE__ */ Object.create(null), e === void 0 ? this._workspaceEdit = {} : (this._workspaceEdit = e, e.documentChanges ? (this._changeAnnotations = new ChangeAnnotations(e.changeAnnotations), e.changeAnnotations = this._changeAnnotations.all(), e.documentChanges.forEach((e) => {
				if (TextDocumentEdit.is(e)) {
					let t = new TextEditChangeImpl(e.edits, this._changeAnnotations);
					this._textEditChanges[e.textDocument.uri] = t;
				}
			})) : e.changes && Object.keys(e.changes).forEach((t) => {
				let n = new TextEditChangeImpl(e.changes[t]);
				this._textEditChanges[t] = n;
			}));
		}
		get edit() {
			return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit;
		}
		getTextEditChange(e) {
			if (OptionalVersionedTextDocumentIdentifier.is(e)) {
				if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error("Workspace edit is not configured for document changes.");
				let t = {
					uri: e.uri,
					version: e.version
				}, n = this._textEditChanges[t.uri];
				if (!n) {
					let e = [], r = {
						textDocument: t,
						edits: e
					};
					this._workspaceEdit.documentChanges.push(r), n = new TextEditChangeImpl(e, this._changeAnnotations), this._textEditChanges[t.uri] = n;
				}
				return n;
			} else {
				if (this.initChanges(), this._workspaceEdit.changes === void 0) throw Error("Workspace edit is not configured for normal text edit changes.");
				let t = this._textEditChanges[e];
				if (!t) {
					let n = [];
					this._workspaceEdit.changes[e] = n, t = new TextEditChangeImpl(n), this._textEditChanges[e] = t;
				}
				return t;
			}
		}
		initDocumentChanges() {
			this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new ChangeAnnotations(), this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
		}
		initChanges() {
			this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null));
		}
		createFile(e, t, n) {
			if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error("Workspace edit is not configured for document changes.");
			let r;
			ChangeAnnotation.is(t) || ChangeAnnotationIdentifier.is(t) ? r = t : n = t;
			let i, a;
			if (r === void 0 ? i = CreateFile.create(e, n) : (a = ChangeAnnotationIdentifier.is(r) ? r : this._changeAnnotations.manage(r), i = CreateFile.create(e, n, a)), this._workspaceEdit.documentChanges.push(i), a !== void 0) return a;
		}
		renameFile(e, t, n, r) {
			if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error("Workspace edit is not configured for document changes.");
			let i;
			ChangeAnnotation.is(n) || ChangeAnnotationIdentifier.is(n) ? i = n : r = n;
			let a, o;
			if (i === void 0 ? a = RenameFile.create(e, t, r) : (o = ChangeAnnotationIdentifier.is(i) ? i : this._changeAnnotations.manage(i), a = RenameFile.create(e, t, r, o)), this._workspaceEdit.documentChanges.push(a), o !== void 0) return o;
		}
		deleteFile(e, t, n) {
			if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0) throw Error("Workspace edit is not configured for document changes.");
			let r;
			ChangeAnnotation.is(t) || ChangeAnnotationIdentifier.is(t) ? r = t : n = t;
			let i, a;
			if (r === void 0 ? i = DeleteFile.create(e, n) : (a = ChangeAnnotationIdentifier.is(r) ? r : this._changeAnnotations.manage(r), i = DeleteFile.create(e, n, a)), this._workspaceEdit.documentChanges.push(i), a !== void 0) return a;
		}
	}, (function(e) {
		function t(e) {
			return { uri: e };
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && Is.string(t.uri);
		}
		__name(n, "is"), e.is = n;
	})(TextDocumentIdentifier ||= {}), (function(e) {
		function t(e, t) {
			return {
				uri: e,
				version: t
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && Is.string(t.uri) && Is.integer(t.version);
		}
		__name(n, "is"), e.is = n;
	})(VersionedTextDocumentIdentifier ||= {}), (function(e) {
		function t(e, t) {
			return {
				uri: e,
				version: t
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && Is.string(t.uri) && (t.version === null || Is.integer(t.version));
		}
		__name(n, "is"), e.is = n;
	})(OptionalVersionedTextDocumentIdentifier ||= {}), (function(e) {
		function t(e, t, n, r) {
			return {
				uri: e,
				languageId: t,
				version: n,
				text: r
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && Is.string(t.uri) && Is.string(t.languageId) && Is.integer(t.version) && Is.string(t.text);
		}
		__name(n, "is"), e.is = n;
	})(TextDocumentItem ||= {}), (function(e) {
		e.PlainText = "plaintext", e.Markdown = "markdown";
		function t(t) {
			let n = t;
			return n === e.PlainText || n === e.Markdown;
		}
		__name(t, "is"), e.is = t;
	})(MarkupKind ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return Is.objectLiteral(e) && MarkupKind.is(t.kind) && Is.string(t.value);
		}
		__name(t, "is"), e.is = t;
	})(MarkupContent ||= {}), (function(e) {
		e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
	})(CompletionItemKind ||= {}), (function(e) {
		e.PlainText = 1, e.Snippet = 2;
	})(InsertTextFormat ||= {}), (function(e) {
		e.Deprecated = 1;
	})(CompletionItemTag ||= {}), (function(e) {
		function t(e, t, n) {
			return {
				newText: e,
				insert: t,
				replace: n
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t && Is.string(t.newText) && Range.is(t.insert) && Range.is(t.replace);
		}
		__name(n, "is"), e.is = n;
	})(InsertReplaceEdit ||= {}), (function(e) {
		e.asIs = 1, e.adjustIndentation = 2;
	})(InsertTextMode ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return t && (Is.string(t.detail) || t.detail === void 0) && (Is.string(t.description) || t.description === void 0);
		}
		__name(t, "is"), e.is = t;
	})(CompletionItemLabelDetails ||= {}), (function(e) {
		function t(e) {
			return { label: e };
		}
		__name(t, "create"), e.create = t;
	})(CompletionItem ||= {}), (function(e) {
		function t(e, t) {
			return {
				items: e || [],
				isIncomplete: !!t
			};
		}
		__name(t, "create"), e.create = t;
	})(CompletionList ||= {}), (function(e) {
		function t(e) {
			return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
		}
		__name(t, "fromPlainText"), e.fromPlainText = t;
		function n(e) {
			let t = e;
			return Is.string(t) || Is.objectLiteral(t) && Is.string(t.language) && Is.string(t.value);
		}
		__name(n, "is"), e.is = n;
	})(MarkedString ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return !!t && Is.objectLiteral(t) && (MarkupContent.is(t.contents) || MarkedString.is(t.contents) || Is.typedArray(t.contents, MarkedString.is)) && (e.range === void 0 || Range.is(e.range));
		}
		__name(t, "is"), e.is = t;
	})(Hover ||= {}), (function(e) {
		function t(e, t) {
			return t ? {
				label: e,
				documentation: t
			} : { label: e };
		}
		__name(t, "create"), e.create = t;
	})(ParameterInformation ||= {}), (function(e) {
		function t(e, t, ...n) {
			let r = { label: e };
			return Is.defined(t) && (r.documentation = t), Is.defined(n) ? r.parameters = n : r.parameters = [], r;
		}
		__name(t, "create"), e.create = t;
	})(SignatureInformation ||= {}), (function(e) {
		e.Text = 1, e.Read = 2, e.Write = 3;
	})(DocumentHighlightKind ||= {}), (function(e) {
		function t(e, t) {
			let n = { range: e };
			return Is.number(t) && (n.kind = t), n;
		}
		__name(t, "create"), e.create = t;
	})(DocumentHighlight ||= {}), (function(e) {
		e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
	})(SymbolKind ||= {}), (function(e) {
		e.Deprecated = 1;
	})(SymbolTag ||= {}), (function(e) {
		function t(e, t, n, r, i) {
			let a = {
				name: e,
				kind: t,
				location: {
					uri: r,
					range: n
				}
			};
			return i && (a.containerName = i), a;
		}
		__name(t, "create"), e.create = t;
	})(SymbolInformation ||= {}), (function(e) {
		function t(e, t, n, r) {
			return r === void 0 ? {
				name: e,
				kind: t,
				location: { uri: n }
			} : {
				name: e,
				kind: t,
				location: {
					uri: n,
					range: r
				}
			};
		}
		__name(t, "create"), e.create = t;
	})(WorkspaceSymbol ||= {}), (function(e) {
		function t(e, t, n, r, i, a) {
			let o = {
				name: e,
				detail: t,
				kind: n,
				range: r,
				selectionRange: i
			};
			return a !== void 0 && (o.children = a), o;
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t && Is.string(t.name) && Is.number(t.kind) && Range.is(t.range) && Range.is(t.selectionRange) && (t.detail === void 0 || Is.string(t.detail)) && (t.deprecated === void 0 || Is.boolean(t.deprecated)) && (t.children === void 0 || Array.isArray(t.children)) && (t.tags === void 0 || Array.isArray(t.tags));
		}
		__name(n, "is"), e.is = n;
	})(DocumentSymbol ||= {}), (function(e) {
		e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
	})(CodeActionKind ||= {}), (function(e) {
		e.Invoked = 1, e.Automatic = 2;
	})(CodeActionTriggerKind ||= {}), (function(e) {
		function t(e, t, n) {
			let r = { diagnostics: e };
			return t != null && (r.only = t), n != null && (r.triggerKind = n), r;
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && Is.typedArray(t.diagnostics, Diagnostic.is) && (t.only === void 0 || Is.typedArray(t.only, Is.string)) && (t.triggerKind === void 0 || t.triggerKind === CodeActionTriggerKind.Invoked || t.triggerKind === CodeActionTriggerKind.Automatic);
		}
		__name(n, "is"), e.is = n;
	})(CodeActionContext ||= {}), (function(e) {
		function t(e, t, n) {
			let r = { title: e }, i = !0;
			return typeof t == "string" ? (i = !1, r.kind = t) : Command.is(t) ? r.command = t : r.edit = t, i && n !== void 0 && (r.kind = n), r;
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t && Is.string(t.title) && (t.diagnostics === void 0 || Is.typedArray(t.diagnostics, Diagnostic.is)) && (t.kind === void 0 || Is.string(t.kind)) && (t.edit !== void 0 || t.command !== void 0) && (t.command === void 0 || Command.is(t.command)) && (t.isPreferred === void 0 || Is.boolean(t.isPreferred)) && (t.edit === void 0 || WorkspaceEdit.is(t.edit));
		}
		__name(n, "is"), e.is = n;
	})(CodeAction ||= {}), (function(e) {
		function t(e, t) {
			let n = { range: e };
			return Is.defined(t) && (n.data = t), n;
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && Range.is(t.range) && (Is.undefined(t.command) || Command.is(t.command));
		}
		__name(n, "is"), e.is = n;
	})(CodeLens ||= {}), (function(e) {
		function t(e, t) {
			return {
				tabSize: e,
				insertSpaces: t
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && Is.uinteger(t.tabSize) && Is.boolean(t.insertSpaces);
		}
		__name(n, "is"), e.is = n;
	})(FormattingOptions ||= {}), (function(e) {
		function t(e, t, n) {
			return {
				range: e,
				target: t,
				data: n
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && Range.is(t.range) && (Is.undefined(t.target) || Is.string(t.target));
		}
		__name(n, "is"), e.is = n;
	})(DocumentLink ||= {}), (function(e) {
		function t(e, t) {
			return {
				range: e,
				parent: t
			};
		}
		__name(t, "create"), e.create = t;
		function n(t) {
			let n = t;
			return Is.objectLiteral(n) && Range.is(n.range) && (n.parent === void 0 || e.is(n.parent));
		}
		__name(n, "is"), e.is = n;
	})(SelectionRange ||= {}), (function(e) {
		e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator";
	})(SemanticTokenTypes ||= {}), (function(e) {
		e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
	})(SemanticTokenModifiers ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return Is.objectLiteral(t) && (t.resultId === void 0 || typeof t.resultId == "string") && Array.isArray(t.data) && (t.data.length === 0 || typeof t.data[0] == "number");
		}
		__name(t, "is"), e.is = t;
	})(SemanticTokens ||= {}), (function(e) {
		function t(e, t) {
			return {
				range: e,
				text: t
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t != null && Range.is(t.range) && Is.string(t.text);
		}
		__name(n, "is"), e.is = n;
	})(InlineValueText ||= {}), (function(e) {
		function t(e, t, n) {
			return {
				range: e,
				variableName: t,
				caseSensitiveLookup: n
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t != null && Range.is(t.range) && Is.boolean(t.caseSensitiveLookup) && (Is.string(t.variableName) || t.variableName === void 0);
		}
		__name(n, "is"), e.is = n;
	})(InlineValueVariableLookup ||= {}), (function(e) {
		function t(e, t) {
			return {
				range: e,
				expression: t
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return t != null && Range.is(t.range) && (Is.string(t.expression) || t.expression === void 0);
		}
		__name(n, "is"), e.is = n;
	})(InlineValueEvaluatableExpression ||= {}), (function(e) {
		function t(e, t) {
			return {
				frameId: e,
				stoppedLocation: t
			};
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.defined(t) && Range.is(e.stoppedLocation);
		}
		__name(n, "is"), e.is = n;
	})(InlineValueContext ||= {}), (function(e) {
		e.Type = 1, e.Parameter = 2;
		function t(e) {
			return e === 1 || e === 2;
		}
		__name(t, "is"), e.is = t;
	})(InlayHintKind ||= {}), (function(e) {
		function t(e) {
			return { value: e };
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.objectLiteral(t) && (t.tooltip === void 0 || Is.string(t.tooltip) || MarkupContent.is(t.tooltip)) && (t.location === void 0 || Location.is(t.location)) && (t.command === void 0 || Command.is(t.command));
		}
		__name(n, "is"), e.is = n;
	})(InlayHintLabelPart ||= {}), (function(e) {
		function t(e, t, n) {
			let r = {
				position: e,
				label: t
			};
			return n !== void 0 && (r.kind = n), r;
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return Is.objectLiteral(t) && Position.is(t.position) && (Is.string(t.label) || Is.typedArray(t.label, InlayHintLabelPart.is)) && (t.kind === void 0 || InlayHintKind.is(t.kind)) && t.textEdits === void 0 || Is.typedArray(t.textEdits, TextEdit.is) && (t.tooltip === void 0 || Is.string(t.tooltip) || MarkupContent.is(t.tooltip)) && (t.paddingLeft === void 0 || Is.boolean(t.paddingLeft)) && (t.paddingRight === void 0 || Is.boolean(t.paddingRight));
		}
		__name(n, "is"), e.is = n;
	})(InlayHint ||= {}), (function(e) {
		function t(e) {
			return {
				kind: "snippet",
				value: e
			};
		}
		__name(t, "createSnippet"), e.createSnippet = t;
	})(StringValue ||= {}), (function(e) {
		function t(e, t, n, r) {
			return {
				insertText: e,
				filterText: t,
				range: n,
				command: r
			};
		}
		__name(t, "create"), e.create = t;
	})(InlineCompletionItem ||= {}), (function(e) {
		function t(e) {
			return { items: e };
		}
		__name(t, "create"), e.create = t;
	})(InlineCompletionList ||= {}), (function(e) {
		e.Invoked = 0, e.Automatic = 1;
	})(InlineCompletionTriggerKind ||= {}), (function(e) {
		function t(e, t) {
			return {
				range: e,
				text: t
			};
		}
		__name(t, "create"), e.create = t;
	})(SelectedCompletionInfo ||= {}), (function(e) {
		function t(e, t) {
			return {
				triggerKind: e,
				selectedCompletionInfo: t
			};
		}
		__name(t, "create"), e.create = t;
	})(InlineCompletionContext ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return Is.objectLiteral(t) && URI.is(t.uri) && Is.string(t.name);
		}
		__name(t, "is"), e.is = t;
	})(WorkspaceFolder ||= {}), EOL = [
		"\n",
		"\r\n",
		"\r"
	], (function(e) {
		function t(e, t, n, r) {
			return new FullTextDocument(e, t, n, r);
		}
		__name(t, "create"), e.create = t;
		function n(e) {
			let t = e;
			return !!(Is.defined(t) && Is.string(t.uri) && (Is.undefined(t.languageId) || Is.string(t.languageId)) && Is.uinteger(t.lineCount) && Is.func(t.getText) && Is.func(t.positionAt) && Is.func(t.offsetAt));
		}
		__name(n, "is"), e.is = n;
		function r(e, t) {
			let n = e.getText(), r = i(t, (e, t) => {
				let n = e.range.start.line - t.range.start.line;
				return n === 0 ? e.range.start.character - t.range.start.character : n;
			}), a = n.length;
			for (let t = r.length - 1; t >= 0; t--) {
				let i = r[t], o = e.offsetAt(i.range.start), s = e.offsetAt(i.range.end);
				if (s <= a) n = n.substring(0, o) + i.newText + n.substring(s, n.length);
				else throw Error("Overlapping edit");
				a = o;
			}
			return n;
		}
		__name(r, "applyEdits"), e.applyEdits = r;
		function i(e, t) {
			if (e.length <= 1) return e;
			let n = e.length / 2 | 0, r = e.slice(0, n), a = e.slice(n);
			i(r, t), i(a, t);
			let o = 0, s = 0, c = 0;
			for (; o < r.length && s < a.length;) t(r[o], a[s]) <= 0 ? e[c++] = r[o++] : e[c++] = a[s++];
			for (; o < r.length;) e[c++] = r[o++];
			for (; s < a.length;) e[c++] = a[s++];
			return e;
		}
		__name(i, "mergeSort");
	})(TextDocument ||= {}), FullTextDocument = class {
		static #e = __name(this, "FullTextDocument");
		constructor(e, t, n, r) {
			this._uri = e, this._languageId = t, this._version = n, this._content = r, this._lineOffsets = void 0;
		}
		get uri() {
			return this._uri;
		}
		get languageId() {
			return this._languageId;
		}
		get version() {
			return this._version;
		}
		getText(e) {
			if (e) {
				let t = this.offsetAt(e.start), n = this.offsetAt(e.end);
				return this._content.substring(t, n);
			}
			return this._content;
		}
		update(e, t) {
			this._content = e.text, this._version = t, this._lineOffsets = void 0;
		}
		getLineOffsets() {
			if (this._lineOffsets === void 0) {
				let e = [], t = this._content, n = !0;
				for (let r = 0; r < t.length; r++) {
					n &&= (e.push(r), !1);
					let i = t.charAt(r);
					n = i === "\r" || i === "\n", i === "\r" && r + 1 < t.length && t.charAt(r + 1) === "\n" && r++;
				}
				n && t.length > 0 && e.push(t.length), this._lineOffsets = e;
			}
			return this._lineOffsets;
		}
		positionAt(e) {
			e = Math.max(Math.min(e, this._content.length), 0);
			let t = this.getLineOffsets(), n = 0, r = t.length;
			if (r === 0) return Position.create(0, e);
			for (; n < r;) {
				let i = Math.floor((n + r) / 2);
				t[i] > e ? r = i : n = i + 1;
			}
			let i = n - 1;
			return Position.create(i, e - t[i]);
		}
		offsetAt(e) {
			let t = this.getLineOffsets();
			if (e.line >= t.length) return this._content.length;
			if (e.line < 0) return 0;
			let n = t[e.line], r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
			return Math.max(Math.min(n + e.character, r), n);
		}
		get lineCount() {
			return this.getLineOffsets().length;
		}
	}, (function(e) {
		let t = Object.prototype.toString;
		function n(e) {
			return e !== void 0;
		}
		__name(n, "defined"), e.defined = n;
		function r(e) {
			return e === void 0;
		}
		__name(r, "undefined"), e.undefined = r;
		function i(e) {
			return e === !0 || e === !1;
		}
		__name(i, "boolean"), e.boolean = i;
		function a(e) {
			return t.call(e) === "[object String]";
		}
		__name(a, "string"), e.string = a;
		function s(e) {
			return t.call(e) === "[object Number]";
		}
		__name(s, "number"), e.number = s;
		function c(e, n, r) {
			return t.call(e) === "[object Number]" && n <= e && e <= r;
		}
		__name(c, "numberRange"), e.numberRange = c;
		function l(e) {
			return t.call(e) === "[object Number]" && -2147483648 <= e && e <= 2147483647;
		}
		__name(l, "integer"), e.integer = l;
		function u(e) {
			return t.call(e) === "[object Number]" && 0 <= e && e <= 2147483647;
		}
		__name(u, "uinteger"), e.uinteger = u;
		function d(e) {
			return t.call(e) === "[object Function]";
		}
		__name(d, "func"), e.func = d;
		function f(e) {
			return typeof e == "object" && !!e;
		}
		__name(f, "objectLiteral"), e.objectLiteral = f;
		function p(e, t) {
			return Array.isArray(e) && e.every(t);
		}
		__name(p, "typedArray"), e.typedArray = p;
	})(Is ||= {});
} }), require_ral = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/ral.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t;
	function n() {
		if (t === void 0) throw Error("No runtime abstraction layer installed");
		return t;
	}
	__name(n, "RAL"), (function(e) {
		function n(e) {
			if (e === void 0) throw Error("No runtime abstraction layer provided");
			t = e;
		}
		__name(n, "install"), e.install = n;
	})(n ||= {}), e.default = n;
} }), require_is = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/is.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.stringArray = e.array = e.func = e.error = e.number = e.string = e.boolean = void 0;
	function t(e) {
		return e === !0 || e === !1;
	}
	__name(t, "boolean"), e.boolean = t;
	function n(e) {
		return typeof e == "string" || e instanceof String;
	}
	__name(n, "string"), e.string = n;
	function r(e) {
		return typeof e == "number" || e instanceof Number;
	}
	__name(r, "number"), e.number = r;
	function i(e) {
		return e instanceof Error;
	}
	__name(i, "error"), e.error = i;
	function a(e) {
		return typeof e == "function";
	}
	__name(a, "func"), e.func = a;
	function s(e) {
		return Array.isArray(e);
	}
	__name(s, "array"), e.array = s;
	function c(e) {
		return s(e) && e.every((e) => n(e));
	}
	__name(c, "stringArray"), e.stringArray = c;
} }), require_events = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/events.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Emitter = e.Event = void 0;
	var t = require_ral(), n;
	(function(e) {
		let t = { dispose() {} };
		e.None = function() {
			return t;
		};
	})(n || (e.Event = n = {}));
	var r = class {
		static #e = __name(this, "CallbackList");
		add(e, t = null, n) {
			this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(e), this._contexts.push(t), Array.isArray(n) && n.push({ dispose: /* @__PURE__ */ __name(() => this.remove(e, t), "dispose") });
		}
		remove(e, t = null) {
			if (!this._callbacks) return;
			let n = !1;
			for (let r = 0, i = this._callbacks.length; r < i; r++) if (this._callbacks[r] === e) if (this._contexts[r] === t) {
				this._callbacks.splice(r, 1), this._contexts.splice(r, 1);
				return;
			} else n = !0;
			if (n) throw Error("When adding a listener with a context, you should remove it with the same context");
		}
		invoke(...e) {
			if (!this._callbacks) return [];
			let n = [], r = this._callbacks.slice(0), i = this._contexts.slice(0);
			for (let a = 0, o = r.length; a < o; a++) try {
				n.push(r[a].apply(i[a], e));
			} catch (e) {
				(0, t.default)().console.error(e);
			}
			return n;
		}
		isEmpty() {
			return !this._callbacks || this._callbacks.length === 0;
		}
		dispose() {
			this._callbacks = void 0, this._contexts = void 0;
		}
	}, i = class e {
		static #e = __name(this, "Emitter");
		constructor(e) {
			this._options = e;
		}
		get event() {
			return this._event ||= (t, n, i) => {
				this._callbacks ||= new r(), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(t, n);
				let a = { dispose: /* @__PURE__ */ __name(() => {
					this._callbacks && (this._callbacks.remove(t, n), a.dispose = e._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
				}, "dispose") };
				return Array.isArray(i) && i.push(a), a;
			}, this._event;
		}
		fire(e) {
			this._callbacks && this._callbacks.invoke.call(this._callbacks, e);
		}
		dispose() {
			this._callbacks &&= (this._callbacks.dispose(), void 0);
		}
	};
	e.Emitter = i, i._noop = function() {};
} }), require_cancellation = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CancellationTokenSource = e.CancellationToken = void 0;
	var t = require_ral(), n = require_is(), r = require_events(), i;
	(function(e) {
		e.None = Object.freeze({
			isCancellationRequested: !1,
			onCancellationRequested: r.Event.None
		}), e.Cancelled = Object.freeze({
			isCancellationRequested: !0,
			onCancellationRequested: r.Event.None
		});
		function t(t) {
			let r = t;
			return r && (r === e.None || r === e.Cancelled || n.boolean(r.isCancellationRequested) && !!r.onCancellationRequested);
		}
		__name(t, "is"), e.is = t;
	})(i || (e.CancellationToken = i = {}));
	var a = Object.freeze(function(e, n) {
		let r = (0, t.default)().timer.setTimeout(e.bind(n), 0);
		return { dispose() {
			r.dispose();
		} };
	}), s = class {
		static #e = __name(this, "MutableToken");
		constructor() {
			this._isCancelled = !1;
		}
		cancel() {
			this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
		}
		get isCancellationRequested() {
			return this._isCancelled;
		}
		get onCancellationRequested() {
			return this._isCancelled ? a : (this._emitter ||= new r.Emitter(), this._emitter.event);
		}
		dispose() {
			this._emitter &&= (this._emitter.dispose(), void 0);
		}
	};
	e.CancellationTokenSource = class {
		static #e = __name(this, "CancellationTokenSource");
		get token() {
			return this._token ||= new s(), this._token;
		}
		cancel() {
			this._token ? this._token.cancel() : this._token = i.Cancelled;
		}
		dispose() {
			this._token ? this._token instanceof s && this._token.dispose() : this._token = i.None;
		}
	};
} }), require_messages = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messages.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Message = e.NotificationType9 = e.NotificationType8 = e.NotificationType7 = e.NotificationType6 = e.NotificationType5 = e.NotificationType4 = e.NotificationType3 = e.NotificationType2 = e.NotificationType1 = e.NotificationType0 = e.NotificationType = e.RequestType9 = e.RequestType8 = e.RequestType7 = e.RequestType6 = e.RequestType5 = e.RequestType4 = e.RequestType3 = e.RequestType2 = e.RequestType1 = e.RequestType = e.RequestType0 = e.AbstractMessageSignature = e.ParameterStructures = e.ResponseError = e.ErrorCodes = void 0;
	var t = require_is(), n;
	(function(e) {
		e.ParseError = -32700, e.InvalidRequest = -32600, e.MethodNotFound = -32601, e.InvalidParams = -32602, e.InternalError = -32603, e.jsonrpcReservedErrorRangeStart = -32099, e.serverErrorStart = -32099, e.MessageWriteError = -32099, e.MessageReadError = -32098, e.PendingResponseRejected = -32097, e.ConnectionInactive = -32096, e.ServerNotInitialized = -32002, e.UnknownErrorCode = -32001, e.jsonrpcReservedErrorRangeEnd = -32e3, e.serverErrorEnd = -32e3;
	})(n || (e.ErrorCodes = n = {})), e.ResponseError = class e extends Error {
		static #e = __name(this, "ResponseError");
		constructor(r, i, a) {
			super(i), this.code = t.number(r) ? r : n.UnknownErrorCode, this.data = a, Object.setPrototypeOf(this, e.prototype);
		}
		toJson() {
			let e = {
				code: this.code,
				message: this.message
			};
			return this.data !== void 0 && (e.data = this.data), e;
		}
	};
	var r = class e {
		static #e = __name(this, "ParameterStructures");
		constructor(e) {
			this.kind = e;
		}
		static is(t) {
			return t === e.auto || t === e.byName || t === e.byPosition;
		}
		toString() {
			return this.kind;
		}
	};
	e.ParameterStructures = r, r.auto = new r("auto"), r.byPosition = new r("byPosition"), r.byName = new r("byName");
	var i = class {
		static #e = __name(this, "AbstractMessageSignature");
		constructor(e, t) {
			this.method = e, this.numberOfParams = t;
		}
		get parameterStructures() {
			return r.auto;
		}
	};
	e.AbstractMessageSignature = i, e.RequestType0 = class extends i {
		static #e = __name(this, "RequestType0");
		constructor(e) {
			super(e, 0);
		}
	}, e.RequestType = class extends i {
		static #e = __name(this, "RequestType");
		constructor(e, t = r.auto) {
			super(e, 1), this._parameterStructures = t;
		}
		get parameterStructures() {
			return this._parameterStructures;
		}
	}, e.RequestType1 = class extends i {
		static #e = __name(this, "RequestType1");
		constructor(e, t = r.auto) {
			super(e, 1), this._parameterStructures = t;
		}
		get parameterStructures() {
			return this._parameterStructures;
		}
	}, e.RequestType2 = class extends i {
		static #e = __name(this, "RequestType2");
		constructor(e) {
			super(e, 2);
		}
	}, e.RequestType3 = class extends i {
		static #e = __name(this, "RequestType3");
		constructor(e) {
			super(e, 3);
		}
	}, e.RequestType4 = class extends i {
		static #e = __name(this, "RequestType4");
		constructor(e) {
			super(e, 4);
		}
	}, e.RequestType5 = class extends i {
		static #e = __name(this, "RequestType5");
		constructor(e) {
			super(e, 5);
		}
	}, e.RequestType6 = class extends i {
		static #e = __name(this, "RequestType6");
		constructor(e) {
			super(e, 6);
		}
	}, e.RequestType7 = class extends i {
		static #e = __name(this, "RequestType7");
		constructor(e) {
			super(e, 7);
		}
	}, e.RequestType8 = class extends i {
		static #e = __name(this, "RequestType8");
		constructor(e) {
			super(e, 8);
		}
	}, e.RequestType9 = class extends i {
		static #e = __name(this, "RequestType9");
		constructor(e) {
			super(e, 9);
		}
	}, e.NotificationType = class extends i {
		static #e = __name(this, "NotificationType");
		constructor(e, t = r.auto) {
			super(e, 1), this._parameterStructures = t;
		}
		get parameterStructures() {
			return this._parameterStructures;
		}
	}, e.NotificationType0 = class extends i {
		static #e = __name(this, "NotificationType0");
		constructor(e) {
			super(e, 0);
		}
	}, e.NotificationType1 = class extends i {
		static #e = __name(this, "NotificationType1");
		constructor(e, t = r.auto) {
			super(e, 1), this._parameterStructures = t;
		}
		get parameterStructures() {
			return this._parameterStructures;
		}
	}, e.NotificationType2 = class extends i {
		static #e = __name(this, "NotificationType2");
		constructor(e) {
			super(e, 2);
		}
	}, e.NotificationType3 = class extends i {
		static #e = __name(this, "NotificationType3");
		constructor(e) {
			super(e, 3);
		}
	}, e.NotificationType4 = class extends i {
		static #e = __name(this, "NotificationType4");
		constructor(e) {
			super(e, 4);
		}
	}, e.NotificationType5 = class extends i {
		static #e = __name(this, "NotificationType5");
		constructor(e) {
			super(e, 5);
		}
	}, e.NotificationType6 = class extends i {
		static #e = __name(this, "NotificationType6");
		constructor(e) {
			super(e, 6);
		}
	}, e.NotificationType7 = class extends i {
		static #e = __name(this, "NotificationType7");
		constructor(e) {
			super(e, 7);
		}
	}, e.NotificationType8 = class extends i {
		static #e = __name(this, "NotificationType8");
		constructor(e) {
			super(e, 8);
		}
	}, e.NotificationType9 = class extends i {
		static #e = __name(this, "NotificationType9");
		constructor(e) {
			super(e, 9);
		}
	};
	var a;
	(function(e) {
		function n(e) {
			let n = e;
			return n && t.string(n.method) && (t.string(n.id) || t.number(n.id));
		}
		__name(n, "isRequest"), e.isRequest = n;
		function r(e) {
			let n = e;
			return n && t.string(n.method) && e.id === void 0;
		}
		__name(r, "isNotification"), e.isNotification = r;
		function i(e) {
			let n = e;
			return n && (n.result !== void 0 || !!n.error) && (t.string(n.id) || t.number(n.id) || n.id === null);
		}
		__name(i, "isResponse"), e.isResponse = i;
	})(a || (e.Message = a = {}));
} }), require_linkedMap = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(e) {
	var t;
	Object.defineProperty(e, "__esModule", { value: !0 }), e.LRUCache = e.LinkedMap = e.Touch = void 0;
	var n;
	(function(e) {
		e.None = 0, e.First = 1, e.AsOld = e.First, e.Last = 2, e.AsNew = e.Last;
	})(n || (e.Touch = n = {}));
	var r = class {
		static #e = __name(this, "LinkedMap");
		constructor() {
			this[t] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
		}
		clear() {
			this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
		}
		isEmpty() {
			return !this._head && !this._tail;
		}
		get size() {
			return this._size;
		}
		get first() {
			return this._head?.value;
		}
		get last() {
			return this._tail?.value;
		}
		has(e) {
			return this._map.has(e);
		}
		get(e, t = n.None) {
			let r = this._map.get(e);
			if (r) return t !== n.None && this.touch(r, t), r.value;
		}
		set(e, t, r = n.None) {
			let i = this._map.get(e);
			if (i) i.value = t, r !== n.None && this.touch(i, r);
			else {
				switch (i = {
					key: e,
					value: t,
					next: void 0,
					previous: void 0
				}, r) {
					case n.None:
						this.addItemLast(i);
						break;
					case n.First:
						this.addItemFirst(i);
						break;
					case n.Last:
						this.addItemLast(i);
						break;
					default:
						this.addItemLast(i);
						break;
				}
				this._map.set(e, i), this._size++;
			}
			return this;
		}
		delete(e) {
			return !!this.remove(e);
		}
		remove(e) {
			let t = this._map.get(e);
			if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value;
		}
		shift() {
			if (!this._head && !this._tail) return;
			if (!this._head || !this._tail) throw Error("Invalid list");
			let e = this._head;
			return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
		}
		forEach(e, t) {
			let n = this._state, r = this._head;
			for (; r;) {
				if (t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this), this._state !== n) throw Error("LinkedMap got modified during iteration.");
				r = r.next;
			}
		}
		keys() {
			let e = this._state, t = this._head, n = {
				[Symbol.iterator]: () => n,
				next: /* @__PURE__ */ __name(() => {
					if (this._state !== e) throw Error("LinkedMap got modified during iteration.");
					if (t) {
						let e = {
							value: t.key,
							done: !1
						};
						return t = t.next, e;
					} else return {
						value: void 0,
						done: !0
					};
				}, "next")
			};
			return n;
		}
		values() {
			let e = this._state, t = this._head, n = {
				[Symbol.iterator]: () => n,
				next: /* @__PURE__ */ __name(() => {
					if (this._state !== e) throw Error("LinkedMap got modified during iteration.");
					if (t) {
						let e = {
							value: t.value,
							done: !1
						};
						return t = t.next, e;
					} else return {
						value: void 0,
						done: !0
					};
				}, "next")
			};
			return n;
		}
		entries() {
			let e = this._state, t = this._head, n = {
				[Symbol.iterator]: () => n,
				next: /* @__PURE__ */ __name(() => {
					if (this._state !== e) throw Error("LinkedMap got modified during iteration.");
					if (t) {
						let e = {
							value: [t.key, t.value],
							done: !1
						};
						return t = t.next, e;
					} else return {
						value: void 0,
						done: !0
					};
				}, "next")
			};
			return n;
		}
		[(t = Symbol.toStringTag, Symbol.iterator)]() {
			return this.entries();
		}
		trimOld(e) {
			if (e >= this.size) return;
			if (e === 0) {
				this.clear();
				return;
			}
			let t = this._head, n = this.size;
			for (; t && n > e;) this._map.delete(t.key), t = t.next, n--;
			this._head = t, this._size = n, t && (t.previous = void 0), this._state++;
		}
		addItemFirst(e) {
			if (!this._head && !this._tail) this._tail = e;
			else if (this._head) e.next = this._head, this._head.previous = e;
			else throw Error("Invalid list");
			this._head = e, this._state++;
		}
		addItemLast(e) {
			if (!this._head && !this._tail) this._head = e;
			else if (this._tail) e.previous = this._tail, this._tail.next = e;
			else throw Error("Invalid list");
			this._tail = e, this._state++;
		}
		removeItem(e) {
			if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
			else if (e === this._head) {
				if (!e.next) throw Error("Invalid list");
				e.next.previous = void 0, this._head = e.next;
			} else if (e === this._tail) {
				if (!e.previous) throw Error("Invalid list");
				e.previous.next = void 0, this._tail = e.previous;
			} else {
				let t = e.next, n = e.previous;
				if (!t || !n) throw Error("Invalid list");
				t.previous = n, n.next = t;
			}
			e.next = void 0, e.previous = void 0, this._state++;
		}
		touch(e, t) {
			if (!this._head || !this._tail) throw Error("Invalid list");
			if (!(t !== n.First && t !== n.Last)) {
				if (t === n.First) {
					if (e === this._head) return;
					let t = e.next, n = e.previous;
					e === this._tail ? (n.next = void 0, this._tail = n) : (t.previous = n, n.next = t), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
				} else if (t === n.Last) {
					if (e === this._tail) return;
					let t = e.next, n = e.previous;
					e === this._head ? (t.previous = void 0, this._head = t) : (t.previous = n, n.next = t), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
				}
			}
		}
		toJSON() {
			let e = [];
			return this.forEach((t, n) => {
				e.push([n, t]);
			}), e;
		}
		fromJSON(e) {
			this.clear();
			for (let [t, n] of e) this.set(t, n);
		}
	};
	e.LinkedMap = r, e.LRUCache = class extends r {
		static #e = __name(this, "LRUCache");
		constructor(e, t = 1) {
			super(), this._limit = e, this._ratio = Math.min(Math.max(0, t), 1);
		}
		get limit() {
			return this._limit;
		}
		set limit(e) {
			this._limit = e, this.checkTrim();
		}
		get ratio() {
			return this._ratio;
		}
		set ratio(e) {
			this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim();
		}
		get(e, t = n.AsNew) {
			return super.get(e, t);
		}
		peek(e) {
			return super.get(e, n.None);
		}
		set(e, t) {
			return super.set(e, t, n.Last), this.checkTrim(), this;
		}
		checkTrim() {
			this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio));
		}
	};
} }), require_disposable = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/disposable.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Disposable = void 0;
	var t;
	(function(e) {
		function t(e) {
			return { dispose: e };
		}
		__name(t, "create"), e.create = t;
	})(t || (e.Disposable = t = {}));
} }), require_sharedArrayCancellation = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SharedArrayReceiverStrategy = e.SharedArraySenderStrategy = void 0;
	var t = require_cancellation(), n;
	(function(e) {
		e.Continue = 0, e.Cancelled = 1;
	})(n ||= {}), e.SharedArraySenderStrategy = class {
		static #e = __name(this, "SharedArraySenderStrategy");
		constructor() {
			this.buffers = /* @__PURE__ */ new Map();
		}
		enableCancellation(e) {
			if (e.id === null) return;
			let t = new SharedArrayBuffer(4), r = new Int32Array(t, 0, 1);
			r[0] = n.Continue, this.buffers.set(e.id, t), e.$cancellationData = t;
		}
		async sendCancellation(e, t) {
			let r = this.buffers.get(t);
			if (r === void 0) return;
			let i = new Int32Array(r, 0, 1);
			Atomics.store(i, 0, n.Cancelled);
		}
		cleanup(e) {
			this.buffers.delete(e);
		}
		dispose() {
			this.buffers.clear();
		}
	};
	var r = class {
		static #e = __name(this, "SharedArrayBufferCancellationToken");
		constructor(e) {
			this.data = new Int32Array(e, 0, 1);
		}
		get isCancellationRequested() {
			return Atomics.load(this.data, 0) === n.Cancelled;
		}
		get onCancellationRequested() {
			throw Error("Cancellation over SharedArrayBuffer doesn't support cancellation events");
		}
	}, i = class {
		static #e = __name(this, "SharedArrayBufferCancellationTokenSource");
		constructor(e) {
			this.token = new r(e);
		}
		cancel() {}
		dispose() {}
	};
	e.SharedArrayReceiverStrategy = class {
		static #e = __name(this, "SharedArrayReceiverStrategy");
		constructor() {
			this.kind = "request";
		}
		createCancellationTokenSource(e) {
			let n = e.$cancellationData;
			return n === void 0 ? new t.CancellationTokenSource() : new i(n);
		}
	};
} }), require_semaphore = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/semaphore.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Semaphore = void 0;
	var t = require_ral();
	e.Semaphore = class {
		static #e = __name(this, "Semaphore");
		constructor(e = 1) {
			if (e <= 0) throw Error("Capacity must be greater than 0");
			this._capacity = e, this._active = 0, this._waiting = [];
		}
		lock(e) {
			return new Promise((t, n) => {
				this._waiting.push({
					thunk: e,
					resolve: t,
					reject: n
				}), this.runNext();
			});
		}
		get active() {
			return this._active;
		}
		runNext() {
			this._waiting.length === 0 || this._active === this._capacity || (0, t.default)().timer.setImmediate(() => this.doRunNext());
		}
		doRunNext() {
			if (this._waiting.length === 0 || this._active === this._capacity) return;
			let e = this._waiting.shift();
			if (this._active++, this._active > this._capacity) throw Error("To many thunks active");
			try {
				let t = e.thunk();
				t instanceof Promise ? t.then((t) => {
					this._active--, e.resolve(t), this.runNext();
				}, (t) => {
					this._active--, e.reject(t), this.runNext();
				}) : (this._active--, e.resolve(t), this.runNext());
			} catch (t) {
				this._active--, e.reject(t), this.runNext();
			}
		}
	};
} }), require_messageReader = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageReader.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ReadableStreamMessageReader = e.AbstractMessageReader = e.MessageReader = void 0;
	var t = require_ral(), n = require_is(), r = require_events(), i = require_semaphore(), a;
	(function(e) {
		function t(e) {
			let t = e;
			return t && n.func(t.listen) && n.func(t.dispose) && n.func(t.onError) && n.func(t.onClose) && n.func(t.onPartialMessage);
		}
		__name(t, "is"), e.is = t;
	})(a || (e.MessageReader = a = {}));
	var s = class {
		static #e = __name(this, "AbstractMessageReader");
		constructor() {
			this.errorEmitter = new r.Emitter(), this.closeEmitter = new r.Emitter(), this.partialMessageEmitter = new r.Emitter();
		}
		dispose() {
			this.errorEmitter.dispose(), this.closeEmitter.dispose();
		}
		get onError() {
			return this.errorEmitter.event;
		}
		fireError(e) {
			this.errorEmitter.fire(this.asError(e));
		}
		get onClose() {
			return this.closeEmitter.event;
		}
		fireClose() {
			this.closeEmitter.fire(void 0);
		}
		get onPartialMessage() {
			return this.partialMessageEmitter.event;
		}
		firePartialMessage(e) {
			this.partialMessageEmitter.fire(e);
		}
		asError(e) {
			return e instanceof Error ? e : /* @__PURE__ */ Error(`Reader received error. Reason: ${n.string(e.message) ? e.message : "unknown"}`);
		}
	};
	e.AbstractMessageReader = s;
	var c;
	(function(e) {
		function n(e) {
			let n, r, i = /* @__PURE__ */ new Map(), a, o = /* @__PURE__ */ new Map();
			if (e === void 0 || typeof e == "string") n = e ?? "utf-8";
			else {
				if (n = e.charset ?? "utf-8", e.contentDecoder !== void 0 && (r = e.contentDecoder, i.set(r.name, r)), e.contentDecoders !== void 0) for (let t of e.contentDecoders) i.set(t.name, t);
				if (e.contentTypeDecoder !== void 0 && (a = e.contentTypeDecoder, o.set(a.name, a)), e.contentTypeDecoders !== void 0) for (let t of e.contentTypeDecoders) o.set(t.name, t);
			}
			return a === void 0 && (a = (0, t.default)().applicationJson.decoder, o.set(a.name, a)), {
				charset: n,
				contentDecoder: r,
				contentDecoders: i,
				contentTypeDecoder: a,
				contentTypeDecoders: o
			};
		}
		__name(n, "fromOptions"), e.fromOptions = n;
	})(c ||= {}), e.ReadableStreamMessageReader = class extends s {
		static #e = __name(this, "ReadableStreamMessageReader");
		constructor(e, n) {
			super(), this.readable = e, this.options = c.fromOptions(n), this.buffer = (0, t.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new i.Semaphore(1);
		}
		set partialMessageTimeout(e) {
			this._partialMessageTimeout = e;
		}
		get partialMessageTimeout() {
			return this._partialMessageTimeout;
		}
		listen(e) {
			this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, this.callback = e;
			let t = this.readable.onData((e) => {
				this.onData(e);
			});
			return this.readable.onError((e) => this.fireError(e)), this.readable.onClose(() => this.fireClose()), t;
		}
		onData(e) {
			try {
				for (this.buffer.append(e);;) {
					if (this.nextMessageLength === -1) {
						let e = this.buffer.tryReadHeaders(!0);
						if (!e) return;
						let t = e.get("content-length");
						if (!t) {
							this.fireError(/* @__PURE__ */ Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(e))}`));
							return;
						}
						let n = parseInt(t);
						if (isNaN(n)) {
							this.fireError(/* @__PURE__ */ Error(`Content-Length value must be a number. Got ${t}`));
							return;
						}
						this.nextMessageLength = n;
					}
					let e = this.buffer.tryReadBody(this.nextMessageLength);
					if (e === void 0) {
						this.setPartialMessageTimer();
						return;
					}
					this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore.lock(async () => {
						let t = this.options.contentDecoder === void 0 ? e : await this.options.contentDecoder.decode(e), n = await this.options.contentTypeDecoder.decode(t, this.options);
						this.callback(n);
					}).catch((e) => {
						this.fireError(e);
					});
				}
			} catch (e) {
				this.fireError(e);
			}
		}
		clearPartialMessageTimer() {
			this.partialMessageTimer &&= (this.partialMessageTimer.dispose(), void 0);
		}
		setPartialMessageTimer() {
			this.clearPartialMessageTimer(), !(this._partialMessageTimeout <= 0) && (this.partialMessageTimer = (0, t.default)().timer.setTimeout((e, t) => {
				this.partialMessageTimer = void 0, e === this.messageToken && (this.firePartialMessage({
					messageToken: e,
					waitingTime: t
				}), this.setPartialMessageTimer());
			}, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout));
		}
	};
} }), require_messageWriter = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.WriteableStreamMessageWriter = e.AbstractMessageWriter = e.MessageWriter = void 0;
	var t = require_ral(), n = require_is(), r = require_semaphore(), i = require_events(), a = "Content-Length: ", s = "\r\n", c;
	(function(e) {
		function t(e) {
			let t = e;
			return t && n.func(t.dispose) && n.func(t.onClose) && n.func(t.onError) && n.func(t.write);
		}
		__name(t, "is"), e.is = t;
	})(c || (e.MessageWriter = c = {}));
	var l = class {
		static #e = __name(this, "AbstractMessageWriter");
		constructor() {
			this.errorEmitter = new i.Emitter(), this.closeEmitter = new i.Emitter();
		}
		dispose() {
			this.errorEmitter.dispose(), this.closeEmitter.dispose();
		}
		get onError() {
			return this.errorEmitter.event;
		}
		fireError(e, t, n) {
			this.errorEmitter.fire([
				this.asError(e),
				t,
				n
			]);
		}
		get onClose() {
			return this.closeEmitter.event;
		}
		fireClose() {
			this.closeEmitter.fire(void 0);
		}
		asError(e) {
			return e instanceof Error ? e : /* @__PURE__ */ Error(`Writer received error. Reason: ${n.string(e.message) ? e.message : "unknown"}`);
		}
	};
	e.AbstractMessageWriter = l;
	var u;
	(function(e) {
		function n(e) {
			return e === void 0 || typeof e == "string" ? {
				charset: e ?? "utf-8",
				contentTypeEncoder: (0, t.default)().applicationJson.encoder
			} : {
				charset: e.charset ?? "utf-8",
				contentEncoder: e.contentEncoder,
				contentTypeEncoder: e.contentTypeEncoder ?? (0, t.default)().applicationJson.encoder
			};
		}
		__name(n, "fromOptions"), e.fromOptions = n;
	})(u ||= {}), e.WriteableStreamMessageWriter = class extends l {
		static #e = __name(this, "WriteableStreamMessageWriter");
		constructor(e, t) {
			super(), this.writable = e, this.options = u.fromOptions(t), this.errorCount = 0, this.writeSemaphore = new r.Semaphore(1), this.writable.onError((e) => this.fireError(e)), this.writable.onClose(() => this.fireClose());
		}
		async write(e) {
			return this.writeSemaphore.lock(async () => this.options.contentTypeEncoder.encode(e, this.options).then((e) => this.options.contentEncoder === void 0 ? e : this.options.contentEncoder.encode(e)).then((t) => {
				let n = [];
				return n.push(a, t.byteLength.toString(), s), n.push(s), this.doWrite(e, n, t);
			}, (e) => {
				throw this.fireError(e), e;
			}));
		}
		async doWrite(e, t, n) {
			try {
				return await this.writable.write(t.join(""), "ascii"), this.writable.write(n);
			} catch (t) {
				return this.handleError(t, e), Promise.reject(t);
			}
		}
		handleError(e, t) {
			this.errorCount++, this.fireError(e, t, this.errorCount);
		}
		end() {
			this.writable.end();
		}
	};
} }), require_messageBuffer = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.AbstractMessageBuffer = void 0;
	var t = 13, n = 10, r = "\r\n";
	e.AbstractMessageBuffer = class {
		static #e = __name(this, "AbstractMessageBuffer");
		constructor(e = "utf-8") {
			this._encoding = e, this._chunks = [], this._totalLength = 0;
		}
		get encoding() {
			return this._encoding;
		}
		append(e) {
			let t = typeof e == "string" ? this.fromString(e, this._encoding) : e;
			this._chunks.push(t), this._totalLength += t.byteLength;
		}
		tryReadHeaders(e = !1) {
			if (this._chunks.length === 0) return;
			let i = 0, a = 0, o = 0, s = 0;
			row: for (; a < this._chunks.length;) {
				let e = this._chunks[a];
				o = 0;
				column: for (; o < e.length;) {
					switch (e[o]) {
						case t:
							switch (i) {
								case 0:
									i = 1;
									break;
								case 2:
									i = 3;
									break;
								default: i = 0;
							}
							break;
						case n:
							switch (i) {
								case 1:
									i = 2;
									break;
								case 3:
									i = 4, o++;
									break row;
								default: i = 0;
							}
							break;
						default: i = 0;
					}
					o++;
				}
				s += e.byteLength, a++;
			}
			if (i !== 4) return;
			let c = this._read(s + o), l = /* @__PURE__ */ new Map(), u = this.toString(c, "ascii").split(r);
			if (u.length < 2) return l;
			for (let t = 0; t < u.length - 2; t++) {
				let n = u[t], r = n.indexOf(":");
				if (r === -1) throw Error(`Message header must separate key and value using ':'
${n}`);
				let i = n.substr(0, r), a = n.substr(r + 1).trim();
				l.set(e ? i.toLowerCase() : i, a);
			}
			return l;
		}
		tryReadBody(e) {
			if (!(this._totalLength < e)) return this._read(e);
		}
		get numberOfBytes() {
			return this._totalLength;
		}
		_read(e) {
			if (e === 0) return this.emptyBuffer();
			if (e > this._totalLength) throw Error("Cannot read so many bytes!");
			if (this._chunks[0].byteLength === e) {
				let t = this._chunks[0];
				return this._chunks.shift(), this._totalLength -= e, this.asNative(t);
			}
			if (this._chunks[0].byteLength > e) {
				let t = this._chunks[0], n = this.asNative(t, e);
				return this._chunks[0] = t.slice(e), this._totalLength -= e, n;
			}
			let t = this.allocNative(e), n = 0;
			for (; e > 0;) {
				let r = this._chunks[0];
				if (r.byteLength > e) {
					let i = r.slice(0, e);
					t.set(i, n), n += e, this._chunks[0] = r.slice(e), this._totalLength -= e, e -= e;
				} else t.set(r, n), n += r.byteLength, this._chunks.shift(), this._totalLength -= r.byteLength, e -= r.byteLength;
			}
			return t;
		}
	};
} }), require_connection = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/connection.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createMessageConnection = e.ConnectionOptions = e.MessageStrategy = e.CancellationStrategy = e.CancellationSenderStrategy = e.CancellationReceiverStrategy = e.RequestCancellationReceiverStrategy = e.IdCancellationReceiverStrategy = e.ConnectionStrategy = e.ConnectionError = e.ConnectionErrors = e.LogTraceNotification = e.SetTraceNotification = e.TraceFormat = e.TraceValues = e.Trace = e.NullLogger = e.ProgressType = e.ProgressToken = void 0;
	var t = require_ral(), n = require_is(), r = require_messages(), i = require_linkedMap(), a = require_events(), s = require_cancellation(), c;
	(function(e) {
		e.type = new r.NotificationType("$/cancelRequest");
	})(c ||= {});
	var l;
	(function(e) {
		function t(e) {
			return typeof e == "string" || typeof e == "number";
		}
		__name(t, "is"), e.is = t;
	})(l || (e.ProgressToken = l = {}));
	var u;
	(function(e) {
		e.type = new r.NotificationType("$/progress");
	})(u ||= {}), e.ProgressType = class {
		static #e = __name(this, "ProgressType");
		constructor() {}
	};
	var d;
	(function(e) {
		function t(e) {
			return n.func(e);
		}
		__name(t, "is"), e.is = t;
	})(d ||= {}), e.NullLogger = Object.freeze({
		error: /* @__PURE__ */ __name(() => {}, "error"),
		warn: /* @__PURE__ */ __name(() => {}, "warn"),
		info: /* @__PURE__ */ __name(() => {}, "info"),
		log: /* @__PURE__ */ __name(() => {}, "log")
	});
	var f;
	(function(e) {
		e[e.Off = 0] = "Off", e[e.Messages = 1] = "Messages", e[e.Compact = 2] = "Compact", e[e.Verbose = 3] = "Verbose";
	})(f || (e.Trace = f = {}));
	var p;
	(function(e) {
		e.Off = "off", e.Messages = "messages", e.Compact = "compact", e.Verbose = "verbose";
	})(p || (e.TraceValues = p = {})), (function(e) {
		function t(t) {
			if (!n.string(t)) return e.Off;
			switch (t = t.toLowerCase(), t) {
				case "off": return e.Off;
				case "messages": return e.Messages;
				case "compact": return e.Compact;
				case "verbose": return e.Verbose;
				default: return e.Off;
			}
		}
		__name(t, "fromString"), e.fromString = t;
		function r(t) {
			switch (t) {
				case e.Off: return "off";
				case e.Messages: return "messages";
				case e.Compact: return "compact";
				case e.Verbose: return "verbose";
				default: return "off";
			}
		}
		__name(r, "toString"), e.toString = r;
	})(f || (e.Trace = f = {}));
	var m;
	(function(e) {
		e.Text = "text", e.JSON = "json";
	})(m || (e.TraceFormat = m = {})), (function(e) {
		function t(t) {
			return n.string(t) ? (t = t.toLowerCase(), t === "json" ? e.JSON : e.Text) : e.Text;
		}
		__name(t, "fromString"), e.fromString = t;
	})(m || (e.TraceFormat = m = {}));
	var h;
	(function(e) {
		e.type = new r.NotificationType("$/setTrace");
	})(h || (e.SetTraceNotification = h = {}));
	var g;
	(function(e) {
		e.type = new r.NotificationType("$/logTrace");
	})(g || (e.LogTraceNotification = g = {}));
	var _;
	(function(e) {
		e[e.Closed = 1] = "Closed", e[e.Disposed = 2] = "Disposed", e[e.AlreadyListening = 3] = "AlreadyListening";
	})(_ || (e.ConnectionErrors = _ = {}));
	var v = class e extends Error {
		static #e = __name(this, "ConnectionError");
		constructor(t, n) {
			super(n), this.code = t, Object.setPrototypeOf(this, e.prototype);
		}
	};
	e.ConnectionError = v;
	var y;
	(function(e) {
		function t(e) {
			let t = e;
			return t && n.func(t.cancelUndispatched);
		}
		__name(t, "is"), e.is = t;
	})(y || (e.ConnectionStrategy = y = {}));
	var b;
	(function(e) {
		function t(e) {
			let t = e;
			return t && (t.kind === void 0 || t.kind === "id") && n.func(t.createCancellationTokenSource) && (t.dispose === void 0 || n.func(t.dispose));
		}
		__name(t, "is"), e.is = t;
	})(b || (e.IdCancellationReceiverStrategy = b = {}));
	var x;
	(function(e) {
		function t(e) {
			let t = e;
			return t && t.kind === "request" && n.func(t.createCancellationTokenSource) && (t.dispose === void 0 || n.func(t.dispose));
		}
		__name(t, "is"), e.is = t;
	})(x || (e.RequestCancellationReceiverStrategy = x = {}));
	var S;
	(function(e) {
		e.Message = Object.freeze({ createCancellationTokenSource(e) {
			return new s.CancellationTokenSource();
		} });
		function t(e) {
			return b.is(e) || x.is(e);
		}
		__name(t, "is"), e.is = t;
	})(S || (e.CancellationReceiverStrategy = S = {}));
	var C;
	(function(e) {
		e.Message = Object.freeze({
			sendCancellation(e, t) {
				return e.sendNotification(c.type, { id: t });
			},
			cleanup(e) {}
		});
		function t(e) {
			let t = e;
			return t && n.func(t.sendCancellation) && n.func(t.cleanup);
		}
		__name(t, "is"), e.is = t;
	})(C || (e.CancellationSenderStrategy = C = {}));
	var w;
	(function(e) {
		e.Message = Object.freeze({
			receiver: S.Message,
			sender: C.Message
		});
		function t(e) {
			let t = e;
			return t && S.is(t.receiver) && C.is(t.sender);
		}
		__name(t, "is"), e.is = t;
	})(w || (e.CancellationStrategy = w = {}));
	var T;
	(function(e) {
		function t(e) {
			let t = e;
			return t && n.func(t.handleMessage);
		}
		__name(t, "is"), e.is = t;
	})(T || (e.MessageStrategy = T = {}));
	var E;
	(function(e) {
		function t(e) {
			let t = e;
			return t && (w.is(t.cancellationStrategy) || y.is(t.connectionStrategy) || T.is(t.messageStrategy));
		}
		__name(t, "is"), e.is = t;
	})(E || (e.ConnectionOptions = E = {}));
	var D;
	(function(e) {
		e[e.New = 1] = "New", e[e.Listening = 2] = "Listening", e[e.Closed = 3] = "Closed", e[e.Disposed = 4] = "Disposed";
	})(D ||= {});
	function O(p, y, x, S) {
		let C = x === void 0 ? e.NullLogger : x, E = 0, O = 0, k = 0, A, j = /* @__PURE__ */ new Map(), M, N = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), F, I = new i.LinkedMap(), L = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Map(), B = f.Off, V = m.Text, H, U = D.New, xL = new a.Emitter(), SL = new a.Emitter(), CL = new a.Emitter(), wL = new a.Emitter(), TL = new a.Emitter(), W = S && S.cancellationStrategy ? S.cancellationStrategy : w.Message;
		function EL(e) {
			if (e === null) throw Error("Can't send requests with id null since the response can't be correlated.");
			return "req-" + e.toString();
		}
		__name(EL, "createRequestQueueKey");
		function DL(e) {
			return e === null ? "res-unknown-" + (++k).toString() : "res-" + e.toString();
		}
		__name(DL, "createResponseQueueKey");
		function OL() {
			return "not-" + (++O).toString();
		}
		__name(OL, "createNotificationQueueKey");
		function kL(e, t) {
			r.Message.isRequest(t) ? e.set(EL(t.id), t) : r.Message.isResponse(t) ? e.set(DL(t.id), t) : e.set(OL(), t);
		}
		__name(kL, "addMessageToQueue");
		function AL(e) {}
		__name(AL, "cancelUndispatched");
		function jL() {
			return U === D.Listening;
		}
		__name(jL, "isListening");
		function ML() {
			return U === D.Closed;
		}
		__name(ML, "isClosed");
		function G() {
			return U === D.Disposed;
		}
		__name(G, "isDisposed");
		function NL() {
			(U === D.New || U === D.Listening) && (U = D.Closed, SL.fire(void 0));
		}
		__name(NL, "closeHandler");
		function PL(e) {
			xL.fire([
				e,
				void 0,
				void 0
			]);
		}
		__name(PL, "readErrorHandler");
		function FL(e) {
			xL.fire(e);
		}
		__name(FL, "writeErrorHandler"), p.onClose(NL), p.onError(PL), y.onClose(NL), y.onError(FL);
		function IL() {
			F || I.size === 0 || (F = (0, t.default)().timer.setImmediate(() => {
				F = void 0, RL();
			}));
		}
		__name(IL, "triggerMessageQueue");
		function LL(e) {
			r.Message.isRequest(e) ? BL(e) : r.Message.isNotification(e) ? HL(e) : r.Message.isResponse(e) ? VL(e) : UL(e);
		}
		__name(LL, "handleMessage");
		function RL() {
			if (I.size === 0) return;
			let e = I.shift();
			try {
				let t = S?.messageStrategy;
				T.is(t) ? t.handleMessage(e, LL) : LL(e);
			} finally {
				IL();
			}
		}
		__name(RL, "processMessageQueue");
		let zL = /* @__PURE__ */ __name((e) => {
			try {
				if (r.Message.isNotification(e) && e.method === c.type.method) {
					let t = e.params.id, n = EL(t), i = I.get(n);
					if (r.Message.isRequest(i)) {
						let r = S?.connectionStrategy, a = r && r.cancelUndispatched ? r.cancelUndispatched(i, AL) : void 0;
						if (a && (a.error !== void 0 || a.result !== void 0)) {
							I.delete(n), z.delete(t), a.id = i.id, q(a, e.method, Date.now()), y.write(a).catch(() => C.error("Sending response for canceled message failed."));
							return;
						}
					}
					let a = z.get(t);
					if (a !== void 0) {
						a.cancel(), J(e);
						return;
					} else R.add(t);
				}
				kL(I, e);
			} finally {
				IL();
			}
		}, "callback");
		function BL(e) {
			if (G()) return;
			function t(t, n, i) {
				let a = {
					jsonrpc: "2.0",
					id: e.id
				};
				t instanceof r.ResponseError ? a.error = t.toJson() : a.result = t === void 0 ? null : t, q(a, n, i), y.write(a).catch(() => C.error("Sending response failed."));
			}
			__name(t, "reply");
			function i(t, n, r) {
				let i = {
					jsonrpc: "2.0",
					id: e.id,
					error: t.toJson()
				};
				q(i, n, r), y.write(i).catch(() => C.error("Sending response failed."));
			}
			__name(i, "replyError");
			function a(t, n, r) {
				t === void 0 && (t = null);
				let i = {
					jsonrpc: "2.0",
					id: e.id,
					result: t
				};
				q(i, n, r), y.write(i).catch(() => C.error("Sending response failed."));
			}
			__name(a, "replySuccess"), KL(e);
			let s = j.get(e.method), c, l;
			s && (c = s.type, l = s.handler);
			let u = Date.now();
			if (l || A) {
				let o = e.id ?? String(Date.now()), s = b.is(W.receiver) ? W.receiver.createCancellationTokenSource(o) : W.receiver.createCancellationTokenSource(e);
				e.id !== null && R.has(e.id) && s.cancel(), e.id !== null && z.set(o, s);
				try {
					let d;
					if (l) if (e.params === void 0) {
						if (c !== void 0 && c.numberOfParams !== 0) {
							i(new r.ResponseError(r.ErrorCodes.InvalidParams, `Request ${e.method} defines ${c.numberOfParams} params but received none.`), e.method, u);
							return;
						}
						d = l(s.token);
					} else if (Array.isArray(e.params)) {
						if (c !== void 0 && c.parameterStructures === r.ParameterStructures.byName) {
							i(new r.ResponseError(r.ErrorCodes.InvalidParams, `Request ${e.method} defines parameters by name but received parameters by position`), e.method, u);
							return;
						}
						d = l(...e.params, s.token);
					} else {
						if (c !== void 0 && c.parameterStructures === r.ParameterStructures.byPosition) {
							i(new r.ResponseError(r.ErrorCodes.InvalidParams, `Request ${e.method} defines parameters by position but received parameters by name`), e.method, u);
							return;
						}
						d = l(e.params, s.token);
					}
					else A && (d = A(e.method, e.params, s.token));
					let f = d;
					d ? f.then ? f.then((n) => {
						z.delete(o), t(n, e.method, u);
					}, (t) => {
						z.delete(o), t instanceof r.ResponseError ? i(t, e.method, u) : t && n.string(t.message) ? i(new r.ResponseError(r.ErrorCodes.InternalError, `Request ${e.method} failed with message: ${t.message}`), e.method, u) : i(new r.ResponseError(r.ErrorCodes.InternalError, `Request ${e.method} failed unexpectedly without providing any details.`), e.method, u);
					}) : (z.delete(o), t(d, e.method, u)) : (z.delete(o), a(d, e.method, u));
				} catch (a) {
					z.delete(o), a instanceof r.ResponseError ? t(a, e.method, u) : a && n.string(a.message) ? i(new r.ResponseError(r.ErrorCodes.InternalError, `Request ${e.method} failed with message: ${a.message}`), e.method, u) : i(new r.ResponseError(r.ErrorCodes.InternalError, `Request ${e.method} failed unexpectedly without providing any details.`), e.method, u);
				}
			} else i(new r.ResponseError(r.ErrorCodes.MethodNotFound, `Unhandled method ${e.method}`), e.method, u);
		}
		__name(BL, "handleRequest");
		function VL(e) {
			if (!G()) if (e.id === null) e.error ? C.error(`Received response message without id: Error is: 
${JSON.stringify(e.error, void 0, 4)}`) : C.error("Received response message without id. No further error information provided.");
			else {
				let t = e.id, n = L.get(t);
				if (qL(e, n), n !== void 0) {
					L.delete(t);
					try {
						if (e.error) {
							let t = e.error;
							n.reject(new r.ResponseError(t.code, t.message, t.data));
						} else if (e.result !== void 0) n.resolve(e.result);
						else throw Error("Should never happen.");
					} catch (e) {
						e.message ? C.error(`Response handler '${n.method}' failed with message: ${e.message}`) : C.error(`Response handler '${n.method}' failed unexpectedly.`);
					}
				}
			}
		}
		__name(VL, "handleResponse");
		function HL(e) {
			if (G()) return;
			let t, n;
			if (e.method === c.type.method) {
				let t = e.params.id;
				R.delete(t), J(e);
				return;
			} else {
				let r = N.get(e.method);
				r && (n = r.handler, t = r.type);
			}
			if (n || M) try {
				if (J(e), n) if (e.params === void 0) t !== void 0 && t.numberOfParams !== 0 && t.parameterStructures !== r.ParameterStructures.byName && C.error(`Notification ${e.method} defines ${t.numberOfParams} params but received none.`), n();
				else if (Array.isArray(e.params)) {
					let i = e.params;
					e.method === u.type.method && i.length === 2 && l.is(i[0]) ? n({
						token: i[0],
						value: i[1]
					}) : (t !== void 0 && (t.parameterStructures === r.ParameterStructures.byName && C.error(`Notification ${e.method} defines parameters by name but received parameters by position`), t.numberOfParams !== e.params.length && C.error(`Notification ${e.method} defines ${t.numberOfParams} params but received ${i.length} arguments`)), n(...i));
				} else t !== void 0 && t.parameterStructures === r.ParameterStructures.byPosition && C.error(`Notification ${e.method} defines parameters by position but received parameters by name`), n(e.params);
				else M && M(e.method, e.params);
			} catch (t) {
				t.message ? C.error(`Notification handler '${e.method}' failed with message: ${t.message}`) : C.error(`Notification handler '${e.method}' failed unexpectedly.`);
			}
			else CL.fire(e);
		}
		__name(HL, "handleNotification");
		function UL(e) {
			if (!e) {
				C.error("Received empty message.");
				return;
			}
			C.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(e, null, 4)}`);
			let t = e;
			if (n.string(t.id) || n.number(t.id)) {
				let e = t.id, n = L.get(e);
				n && n.reject(/* @__PURE__ */ Error("The received response has neither a result nor an error property."));
			}
		}
		__name(UL, "handleInvalidMessage");
		function K(e) {
			if (e != null) switch (B) {
				case f.Verbose: return JSON.stringify(e, null, 4);
				case f.Compact: return JSON.stringify(e);
				default: return;
			}
		}
		__name(K, "stringifyTrace");
		function WL(e) {
			if (!(B === f.Off || !H)) if (V === m.Text) {
				let t;
				(B === f.Verbose || B === f.Compact) && e.params && (t = `Params: ${K(e.params)}

`), H.log(`Sending request '${e.method} - (${e.id})'.`, t);
			} else Y("send-request", e);
		}
		__name(WL, "traceSendingRequest");
		function GL(e) {
			if (!(B === f.Off || !H)) if (V === m.Text) {
				let t;
				(B === f.Verbose || B === f.Compact) && (t = e.params ? `Params: ${K(e.params)}

` : "No parameters provided.\n\n"), H.log(`Sending notification '${e.method}'.`, t);
			} else Y("send-notification", e);
		}
		__name(GL, "traceSendingNotification");
		function q(e, t, n) {
			if (!(B === f.Off || !H)) if (V === m.Text) {
				let r;
				(B === f.Verbose || B === f.Compact) && (e.error && e.error.data ? r = `Error data: ${K(e.error.data)}

` : e.result ? r = `Result: ${K(e.result)}

` : e.error === void 0 && (r = "No result returned.\n\n")), H.log(`Sending response '${t} - (${e.id})'. Processing request took ${Date.now() - n}ms`, r);
			} else Y("send-response", e);
		}
		__name(q, "traceSendingResponse");
		function KL(e) {
			if (!(B === f.Off || !H)) if (V === m.Text) {
				let t;
				(B === f.Verbose || B === f.Compact) && e.params && (t = `Params: ${K(e.params)}

`), H.log(`Received request '${e.method} - (${e.id})'.`, t);
			} else Y("receive-request", e);
		}
		__name(KL, "traceReceivedRequest");
		function J(e) {
			if (!(B === f.Off || !H || e.method === g.type.method)) if (V === m.Text) {
				let t;
				(B === f.Verbose || B === f.Compact) && (t = e.params ? `Params: ${K(e.params)}

` : "No parameters provided.\n\n"), H.log(`Received notification '${e.method}'.`, t);
			} else Y("receive-notification", e);
		}
		__name(J, "traceReceivedNotification");
		function qL(e, t) {
			if (!(B === f.Off || !H)) if (V === m.Text) {
				let n;
				if ((B === f.Verbose || B === f.Compact) && (e.error && e.error.data ? n = `Error data: ${K(e.error.data)}

` : e.result ? n = `Result: ${K(e.result)}

` : e.error === void 0 && (n = "No result returned.\n\n")), t) {
					let r = e.error ? ` Request failed: ${e.error.message} (${e.error.code}).` : "";
					H.log(`Received response '${t.method} - (${e.id})' in ${Date.now() - t.timerStart}ms.${r}`, n);
				} else H.log(`Received response ${e.id} without active response promise.`, n);
			} else Y("receive-response", e);
		}
		__name(qL, "traceReceivedResponse");
		function Y(e, t) {
			if (!H || B === f.Off) return;
			let n = {
				isLSPMessage: !0,
				type: e,
				message: t,
				timestamp: Date.now()
			};
			H.log(n);
		}
		__name(Y, "logLSPMessage");
		function X() {
			if (ML()) throw new v(_.Closed, "Connection is closed.");
			if (G()) throw new v(_.Disposed, "Connection is disposed.");
		}
		__name(X, "throwIfClosedOrDisposed");
		function JL() {
			if (jL()) throw new v(_.AlreadyListening, "Connection is already listening");
		}
		__name(JL, "throwIfListening");
		function YL() {
			if (!jL()) throw Error("Call listen() first.");
		}
		__name(YL, "throwIfNotListening");
		function Z(e) {
			return e === void 0 ? null : e;
		}
		__name(Z, "undefinedToNull");
		function XL(e) {
			if (e !== null) return e;
		}
		__name(XL, "nullToUndefined");
		function ZL(e) {
			return e != null && !Array.isArray(e) && typeof e == "object";
		}
		__name(ZL, "isNamedParam");
		function Q(e, t) {
			switch (e) {
				case r.ParameterStructures.auto: return ZL(t) ? XL(t) : [Z(t)];
				case r.ParameterStructures.byName:
					if (!ZL(t)) throw Error("Received parameters by name but param is not an object literal.");
					return XL(t);
				case r.ParameterStructures.byPosition: return [Z(t)];
				default: throw Error(`Unknown parameter structure ${e.toString()}`);
			}
		}
		__name(Q, "computeSingleParam");
		function QL(e, t) {
			let n, r = e.numberOfParams;
			switch (r) {
				case 0:
					n = void 0;
					break;
				case 1:
					n = Q(e.parameterStructures, t[0]);
					break;
				default:
					n = [];
					for (let e = 0; e < t.length && e < r; e++) n.push(Z(t[e]));
					if (t.length < r) for (let e = t.length; e < r; e++) n.push(null);
					break;
			}
			return n;
		}
		__name(QL, "computeMessageParams");
		let $ = {
			sendNotification: /* @__PURE__ */ __name((e, ...t) => {
				X();
				let i, a;
				if (n.string(e)) {
					i = e;
					let n = t[0], o = 0, s = r.ParameterStructures.auto;
					r.ParameterStructures.is(n) && (o = 1, s = n);
					let c = t.length, l = c - o;
					switch (l) {
						case 0:
							a = void 0;
							break;
						case 1:
							a = Q(s, t[o]);
							break;
						default:
							if (s === r.ParameterStructures.byName) throw Error(`Received ${l} parameters for 'by Name' notification parameter structure.`);
							a = t.slice(o, c).map((e) => Z(e));
							break;
					}
				} else {
					let n = t;
					i = e.method, a = QL(e, n);
				}
				let o = {
					jsonrpc: "2.0",
					method: i,
					params: a
				};
				return GL(o), y.write(o).catch((e) => {
					throw C.error("Sending notification failed."), e;
				});
			}, "sendNotification"),
			onNotification: /* @__PURE__ */ __name((e, t) => {
				X();
				let r;
				return n.func(e) ? M = e : t && (n.string(e) ? (r = e, N.set(e, {
					type: void 0,
					handler: t
				})) : (r = e.method, N.set(e.method, {
					type: e,
					handler: t
				}))), { dispose: /* @__PURE__ */ __name(() => {
					r === void 0 ? M = void 0 : N.delete(r);
				}, "dispose") };
			}, "onNotification"),
			onProgress: /* @__PURE__ */ __name((e, t, n) => {
				if (P.has(t)) throw Error(`Progress handler for token ${t} already registered`);
				return P.set(t, n), { dispose: /* @__PURE__ */ __name(() => {
					P.delete(t);
				}, "dispose") };
			}, "onProgress"),
			sendProgress: /* @__PURE__ */ __name((e, t, n) => $.sendNotification(u.type, {
				token: t,
				value: n
			}), "sendProgress"),
			onUnhandledProgress: wL.event,
			sendRequest: /* @__PURE__ */ __name((e, ...t) => {
				X(), YL();
				let i, a, c;
				if (n.string(e)) {
					i = e;
					let n = t[0], o = t[t.length - 1], l = 0, u = r.ParameterStructures.auto;
					r.ParameterStructures.is(n) && (l = 1, u = n);
					let d = t.length;
					s.CancellationToken.is(o) && (--d, c = o);
					let f = d - l;
					switch (f) {
						case 0:
							a = void 0;
							break;
						case 1:
							a = Q(u, t[l]);
							break;
						default:
							if (u === r.ParameterStructures.byName) throw Error(`Received ${f} parameters for 'by Name' request parameter structure.`);
							a = t.slice(l, d).map((e) => Z(e));
							break;
					}
				} else {
					let n = t;
					i = e.method, a = QL(e, n);
					let r = e.numberOfParams;
					c = s.CancellationToken.is(n[r]) ? n[r] : void 0;
				}
				let l = E++, u;
				c && (u = c.onCancellationRequested(() => {
					let e = W.sender.sendCancellation($, l);
					return e === void 0 ? (C.log(`Received no promise from cancellation strategy when cancelling id ${l}`), Promise.resolve()) : e.catch(() => {
						C.log(`Sending cancellation messages for id ${l} failed`);
					});
				}));
				let d = {
					jsonrpc: "2.0",
					id: l,
					method: i,
					params: a
				};
				return WL(d), typeof W.sender.enableCancellation == "function" && W.sender.enableCancellation(d), new Promise(async (e, t) => {
					let n = /* @__PURE__ */ __name((t) => {
						e(t), W.sender.cleanup(l), u?.dispose();
					}, "resolveWithCleanup"), a = /* @__PURE__ */ __name((e) => {
						t(e), W.sender.cleanup(l), u?.dispose();
					}, "rejectWithCleanup"), s = {
						method: i,
						timerStart: Date.now(),
						resolve: n,
						reject: a
					};
					try {
						await y.write(d), L.set(l, s);
					} catch (e) {
						throw C.error("Sending request failed."), s.reject(new r.ResponseError(r.ErrorCodes.MessageWriteError, e.message ? e.message : "Unknown reason")), e;
					}
				});
			}, "sendRequest"),
			onRequest: /* @__PURE__ */ __name((e, t) => {
				X();
				let r = null;
				return d.is(e) ? (r = void 0, A = e) : n.string(e) ? (r = null, t !== void 0 && (r = e, j.set(e, {
					handler: t,
					type: void 0
				}))) : t !== void 0 && (r = e.method, j.set(e.method, {
					type: e,
					handler: t
				})), { dispose: /* @__PURE__ */ __name(() => {
					r !== null && (r === void 0 ? A = void 0 : j.delete(r));
				}, "dispose") };
			}, "onRequest"),
			hasPendingResponse: /* @__PURE__ */ __name(() => L.size > 0, "hasPendingResponse"),
			trace: /* @__PURE__ */ __name(async (e, t, r) => {
				let i = !1, a = m.Text;
				r !== void 0 && (n.boolean(r) ? i = r : (i = r.sendNotification || !1, a = r.traceFormat || m.Text)), B = e, V = a, H = B === f.Off ? void 0 : t, i && !ML() && !G() && await $.sendNotification(h.type, { value: f.toString(e) });
			}, "trace"),
			onError: xL.event,
			onClose: SL.event,
			onUnhandledNotification: CL.event,
			onDispose: TL.event,
			end: /* @__PURE__ */ __name(() => {
				y.end();
			}, "end"),
			dispose: /* @__PURE__ */ __name(() => {
				if (G()) return;
				U = D.Disposed, TL.fire(void 0);
				let e = new r.ResponseError(r.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
				for (let t of L.values()) t.reject(e);
				L = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Set(), I = new i.LinkedMap(), n.func(y.dispose) && y.dispose(), n.func(p.dispose) && p.dispose();
			}, "dispose"),
			listen: /* @__PURE__ */ __name(() => {
				X(), JL(), U = D.Listening, p.listen(zL);
			}, "listen"),
			inspect: /* @__PURE__ */ __name(() => {
				(0, t.default)().console.log("inspect");
			}, "inspect")
		};
		return $.onNotification(g.type, (e) => {
			if (B === f.Off || !H) return;
			let t = B === f.Verbose || B === f.Compact;
			H.log(e.message, t ? e.verbose : void 0);
		}), $.onNotification(u.type, (e) => {
			let t = P.get(e.token);
			t ? t(e.value) : wL.fire(e);
		}), $;
	}
	__name(O, "createMessageConnection"), e.createMessageConnection = O;
} }), require_api = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/api.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ProgressType = e.ProgressToken = e.createMessageConnection = e.NullLogger = e.ConnectionOptions = e.ConnectionStrategy = e.AbstractMessageBuffer = e.WriteableStreamMessageWriter = e.AbstractMessageWriter = e.MessageWriter = e.ReadableStreamMessageReader = e.AbstractMessageReader = e.MessageReader = e.SharedArrayReceiverStrategy = e.SharedArraySenderStrategy = e.CancellationToken = e.CancellationTokenSource = e.Emitter = e.Event = e.Disposable = e.LRUCache = e.Touch = e.LinkedMap = e.ParameterStructures = e.NotificationType9 = e.NotificationType8 = e.NotificationType7 = e.NotificationType6 = e.NotificationType5 = e.NotificationType4 = e.NotificationType3 = e.NotificationType2 = e.NotificationType1 = e.NotificationType0 = e.NotificationType = e.ErrorCodes = e.ResponseError = e.RequestType9 = e.RequestType8 = e.RequestType7 = e.RequestType6 = e.RequestType5 = e.RequestType4 = e.RequestType3 = e.RequestType2 = e.RequestType1 = e.RequestType0 = e.RequestType = e.Message = e.RAL = void 0, e.MessageStrategy = e.CancellationStrategy = e.CancellationSenderStrategy = e.CancellationReceiverStrategy = e.ConnectionError = e.ConnectionErrors = e.LogTraceNotification = e.SetTraceNotification = e.TraceFormat = e.TraceValues = e.Trace = void 0;
	var t = require_messages();
	Object.defineProperty(e, "Message", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.Message;
		}, "get")
	}), Object.defineProperty(e, "RequestType", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.RequestType;
		}, "get")
	}), Object.defineProperty(e, "RequestType0", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.RequestType0;
		}, "get")
	}), Object.defineProperty(e, "RequestType1", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.RequestType1;
		}, "get")
	}), Object.defineProperty(e, "RequestType2", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.RequestType2;
		}, "get")
	}), Object.defineProperty(e, "RequestType3", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.RequestType3;
		}, "get")
	}), Object.defineProperty(e, "RequestType4", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.RequestType4;
		}, "get")
	}), Object.defineProperty(e, "RequestType5", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.RequestType5;
		}, "get")
	}), Object.defineProperty(e, "RequestType6", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.RequestType6;
		}, "get")
	}), Object.defineProperty(e, "RequestType7", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.RequestType7;
		}, "get")
	}), Object.defineProperty(e, "RequestType8", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.RequestType8;
		}, "get")
	}), Object.defineProperty(e, "RequestType9", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.RequestType9;
		}, "get")
	}), Object.defineProperty(e, "ResponseError", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.ResponseError;
		}, "get")
	}), Object.defineProperty(e, "ErrorCodes", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.ErrorCodes;
		}, "get")
	}), Object.defineProperty(e, "NotificationType", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.NotificationType;
		}, "get")
	}), Object.defineProperty(e, "NotificationType0", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.NotificationType0;
		}, "get")
	}), Object.defineProperty(e, "NotificationType1", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.NotificationType1;
		}, "get")
	}), Object.defineProperty(e, "NotificationType2", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.NotificationType2;
		}, "get")
	}), Object.defineProperty(e, "NotificationType3", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.NotificationType3;
		}, "get")
	}), Object.defineProperty(e, "NotificationType4", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.NotificationType4;
		}, "get")
	}), Object.defineProperty(e, "NotificationType5", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.NotificationType5;
		}, "get")
	}), Object.defineProperty(e, "NotificationType6", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.NotificationType6;
		}, "get")
	}), Object.defineProperty(e, "NotificationType7", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.NotificationType7;
		}, "get")
	}), Object.defineProperty(e, "NotificationType8", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.NotificationType8;
		}, "get")
	}), Object.defineProperty(e, "NotificationType9", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.NotificationType9;
		}, "get")
	}), Object.defineProperty(e, "ParameterStructures", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return t.ParameterStructures;
		}, "get")
	});
	var n = require_linkedMap();
	Object.defineProperty(e, "LinkedMap", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return n.LinkedMap;
		}, "get")
	}), Object.defineProperty(e, "LRUCache", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return n.LRUCache;
		}, "get")
	}), Object.defineProperty(e, "Touch", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return n.Touch;
		}, "get")
	});
	var r = require_disposable();
	Object.defineProperty(e, "Disposable", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return r.Disposable;
		}, "get")
	});
	var i = require_events();
	Object.defineProperty(e, "Event", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return i.Event;
		}, "get")
	}), Object.defineProperty(e, "Emitter", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return i.Emitter;
		}, "get")
	});
	var a = require_cancellation();
	Object.defineProperty(e, "CancellationTokenSource", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return a.CancellationTokenSource;
		}, "get")
	}), Object.defineProperty(e, "CancellationToken", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return a.CancellationToken;
		}, "get")
	});
	var s = require_sharedArrayCancellation();
	Object.defineProperty(e, "SharedArraySenderStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return s.SharedArraySenderStrategy;
		}, "get")
	}), Object.defineProperty(e, "SharedArrayReceiverStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return s.SharedArrayReceiverStrategy;
		}, "get")
	});
	var c = require_messageReader();
	Object.defineProperty(e, "MessageReader", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return c.MessageReader;
		}, "get")
	}), Object.defineProperty(e, "AbstractMessageReader", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return c.AbstractMessageReader;
		}, "get")
	}), Object.defineProperty(e, "ReadableStreamMessageReader", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return c.ReadableStreamMessageReader;
		}, "get")
	});
	var l = require_messageWriter();
	Object.defineProperty(e, "MessageWriter", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return l.MessageWriter;
		}, "get")
	}), Object.defineProperty(e, "AbstractMessageWriter", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return l.AbstractMessageWriter;
		}, "get")
	}), Object.defineProperty(e, "WriteableStreamMessageWriter", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return l.WriteableStreamMessageWriter;
		}, "get")
	});
	var u = require_messageBuffer();
	Object.defineProperty(e, "AbstractMessageBuffer", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return u.AbstractMessageBuffer;
		}, "get")
	});
	var d = require_connection();
	Object.defineProperty(e, "ConnectionStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.ConnectionStrategy;
		}, "get")
	}), Object.defineProperty(e, "ConnectionOptions", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.ConnectionOptions;
		}, "get")
	}), Object.defineProperty(e, "NullLogger", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.NullLogger;
		}, "get")
	}), Object.defineProperty(e, "createMessageConnection", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.createMessageConnection;
		}, "get")
	}), Object.defineProperty(e, "ProgressToken", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.ProgressToken;
		}, "get")
	}), Object.defineProperty(e, "ProgressType", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.ProgressType;
		}, "get")
	}), Object.defineProperty(e, "Trace", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.Trace;
		}, "get")
	}), Object.defineProperty(e, "TraceValues", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.TraceValues;
		}, "get")
	}), Object.defineProperty(e, "TraceFormat", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.TraceFormat;
		}, "get")
	}), Object.defineProperty(e, "SetTraceNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.SetTraceNotification;
		}, "get")
	}), Object.defineProperty(e, "LogTraceNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.LogTraceNotification;
		}, "get")
	}), Object.defineProperty(e, "ConnectionErrors", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.ConnectionErrors;
		}, "get")
	}), Object.defineProperty(e, "ConnectionError", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.ConnectionError;
		}, "get")
	}), Object.defineProperty(e, "CancellationReceiverStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.CancellationReceiverStrategy;
		}, "get")
	}), Object.defineProperty(e, "CancellationSenderStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.CancellationSenderStrategy;
		}, "get")
	}), Object.defineProperty(e, "CancellationStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.CancellationStrategy;
		}, "get")
	}), Object.defineProperty(e, "MessageStrategy", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.MessageStrategy;
		}, "get")
	}), e.RAL = require_ral().default;
} }), require_ril = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/browser/ril.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = require_api(), n = class e extends t.AbstractMessageBuffer {
		static #e = __name(this, "MessageBuffer");
		constructor(e = "utf-8") {
			super(e), this.asciiDecoder = new TextDecoder("ascii");
		}
		emptyBuffer() {
			return e.emptyBuffer;
		}
		fromString(e, t) {
			return new TextEncoder().encode(e);
		}
		toString(e, t) {
			return t === "ascii" ? this.asciiDecoder.decode(e) : new TextDecoder(t).decode(e);
		}
		asNative(e, t) {
			return t === void 0 ? e : e.slice(0, t);
		}
		allocNative(e) {
			return new Uint8Array(e);
		}
	};
	n.emptyBuffer = new Uint8Array();
	var r = class {
		static #e = __name(this, "ReadableStreamWrapper");
		constructor(e) {
			this.socket = e, this._onData = new t.Emitter(), this._messageListener = (e) => {
				e.data.arrayBuffer().then((e) => {
					this._onData.fire(new Uint8Array(e));
				}, () => {
					(0, t.RAL)().console.error("Converting blob to array buffer failed.");
				});
			}, this.socket.addEventListener("message", this._messageListener);
		}
		onClose(e) {
			return this.socket.addEventListener("close", e), t.Disposable.create(() => this.socket.removeEventListener("close", e));
		}
		onError(e) {
			return this.socket.addEventListener("error", e), t.Disposable.create(() => this.socket.removeEventListener("error", e));
		}
		onEnd(e) {
			return this.socket.addEventListener("end", e), t.Disposable.create(() => this.socket.removeEventListener("end", e));
		}
		onData(e) {
			return this._onData.event(e);
		}
	}, i = class {
		static #e = __name(this, "WritableStreamWrapper");
		constructor(e) {
			this.socket = e;
		}
		onClose(e) {
			return this.socket.addEventListener("close", e), t.Disposable.create(() => this.socket.removeEventListener("close", e));
		}
		onError(e) {
			return this.socket.addEventListener("error", e), t.Disposable.create(() => this.socket.removeEventListener("error", e));
		}
		onEnd(e) {
			return this.socket.addEventListener("end", e), t.Disposable.create(() => this.socket.removeEventListener("end", e));
		}
		write(e, t) {
			if (typeof e == "string") {
				if (t !== void 0 && t !== "utf-8") throw Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t}`);
				this.socket.send(e);
			} else this.socket.send(e);
			return Promise.resolve();
		}
		end() {
			this.socket.close();
		}
	}, a = new TextEncoder(), s = Object.freeze({
		messageBuffer: Object.freeze({ create: /* @__PURE__ */ __name((e) => new n(e), "create") }),
		applicationJson: Object.freeze({
			encoder: Object.freeze({
				name: "application/json",
				encode: /* @__PURE__ */ __name((e, t) => {
					if (t.charset !== "utf-8") throw Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${t.charset}`);
					return Promise.resolve(a.encode(JSON.stringify(e, void 0, 0)));
				}, "encode")
			}),
			decoder: Object.freeze({
				name: "application/json",
				decode: /* @__PURE__ */ __name((e, t) => {
					if (!(e instanceof Uint8Array)) throw Error("In a Browser environments only Uint8Arrays are supported.");
					return Promise.resolve(JSON.parse(new TextDecoder(t.charset).decode(e)));
				}, "decode")
			})
		}),
		stream: Object.freeze({
			asReadableStream: /* @__PURE__ */ __name((e) => new r(e), "asReadableStream"),
			asWritableStream: /* @__PURE__ */ __name((e) => new i(e), "asWritableStream")
		}),
		console,
		timer: Object.freeze({
			setTimeout(e, t, ...n) {
				let r = setTimeout(e, t, ...n);
				return { dispose: /* @__PURE__ */ __name(() => clearTimeout(r), "dispose") };
			},
			setImmediate(e, ...t) {
				let n = setTimeout(e, 0, ...t);
				return { dispose: /* @__PURE__ */ __name(() => clearTimeout(n), "dispose") };
			},
			setInterval(e, t, ...n) {
				let r = setInterval(e, t, ...n);
				return { dispose: /* @__PURE__ */ __name(() => clearInterval(r), "dispose") };
			}
		})
	});
	function c() {
		return s;
	}
	__name(c, "RIL"), (function(e) {
		function n() {
			t.RAL.install(s);
		}
		__name(n, "install"), e.install = n;
	})(c ||= {}), e.default = c;
} }), require_main = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/browser/main.js"(e) {
	var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: /* @__PURE__ */ __name(function() {
				return t[n];
			}, "get")
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createMessageConnection = e.BrowserMessageWriter = e.BrowserMessageReader = void 0, require_ril().default.install();
	var r = require_api();
	n(require_api(), e), e.BrowserMessageReader = class extends r.AbstractMessageReader {
		static #e = __name(this, "BrowserMessageReader");
		constructor(e) {
			super(), this._onData = new r.Emitter(), this._messageListener = (e) => {
				this._onData.fire(e.data);
			}, e.addEventListener("error", (e) => this.fireError(e)), e.onmessage = this._messageListener;
		}
		listen(e) {
			return this._onData.event(e);
		}
	}, e.BrowserMessageWriter = class extends r.AbstractMessageWriter {
		static #e = __name(this, "BrowserMessageWriter");
		constructor(e) {
			super(), this.port = e, this.errorCount = 0, e.addEventListener("error", (e) => this.fireError(e));
		}
		write(e) {
			try {
				return this.port.postMessage(e), Promise.resolve();
			} catch (t) {
				return this.handleError(t, e), Promise.reject(t);
			}
		}
		handleError(e, t) {
			this.errorCount++, this.fireError(e, t, this.errorCount);
		}
		end() {}
	};
	function i(e, t, n, i) {
		return n === void 0 && (n = r.NullLogger), r.ConnectionStrategy.is(i) && (i = { connectionStrategy: i }), (0, r.createMessageConnection)(e, t, n, i);
	}
	__name(i, "createMessageConnection"), e.createMessageConnection = i;
} }), require_browser = __commonJS({ "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/browser.js"(e, t) {
	t.exports = require_main();
} }), require_messages2 = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/messages.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ProtocolNotificationType = e.ProtocolNotificationType0 = e.ProtocolRequestType = e.ProtocolRequestType0 = e.RegistrationType = e.MessageDirection = void 0;
	var t = require_main(), n;
	(function(e) {
		e.clientToServer = "clientToServer", e.serverToClient = "serverToClient", e.both = "both";
	})(n || (e.MessageDirection = n = {})), e.RegistrationType = class {
		static #e = __name(this, "RegistrationType");
		constructor(e) {
			this.method = e;
		}
	}, e.ProtocolRequestType0 = class extends t.RequestType0 {
		static #e = __name(this, "ProtocolRequestType0");
		constructor(e) {
			super(e);
		}
	}, e.ProtocolRequestType = class extends t.RequestType {
		static #e = __name(this, "ProtocolRequestType");
		constructor(e) {
			super(e, t.ParameterStructures.byName);
		}
	}, e.ProtocolNotificationType0 = class extends t.NotificationType0 {
		static #e = __name(this, "ProtocolNotificationType0");
		constructor(e) {
			super(e);
		}
	}, e.ProtocolNotificationType = class extends t.NotificationType {
		static #e = __name(this, "ProtocolNotificationType");
		constructor(e) {
			super(e, t.ParameterStructures.byName);
		}
	};
} }), require_is2 = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.objectLiteral = e.typedArray = e.stringArray = e.array = e.func = e.error = e.number = e.string = e.boolean = void 0;
	function t(e) {
		return e === !0 || e === !1;
	}
	__name(t, "boolean"), e.boolean = t;
	function n(e) {
		return typeof e == "string" || e instanceof String;
	}
	__name(n, "string"), e.string = n;
	function r(e) {
		return typeof e == "number" || e instanceof Number;
	}
	__name(r, "number"), e.number = r;
	function i(e) {
		return e instanceof Error;
	}
	__name(i, "error"), e.error = i;
	function a(e) {
		return typeof e == "function";
	}
	__name(a, "func"), e.func = a;
	function s(e) {
		return Array.isArray(e);
	}
	__name(s, "array"), e.array = s;
	function c(e) {
		return s(e) && e.every((e) => n(e));
	}
	__name(c, "stringArray"), e.stringArray = c;
	function l(e, t) {
		return Array.isArray(e) && e.every(t);
	}
	__name(l, "typedArray"), e.typedArray = l;
	function u(e) {
		return typeof e == "object" && !!e;
	}
	__name(u, "objectLiteral"), e.objectLiteral = u;
} }), require_protocol_implementation = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ImplementationRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "textDocument/implementation", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.ImplementationRequest = n = {}));
} }), require_protocol_typeDefinition = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeDefinitionRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "textDocument/typeDefinition", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.TypeDefinitionRequest = n = {}));
} }), require_protocol_workspaceFolder = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DidChangeWorkspaceFoldersNotification = e.WorkspaceFoldersRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "workspace/workspaceFolders", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType0(e.method);
	})(n || (e.WorkspaceFoldersRequest = n = {}));
	var r;
	(function(e) {
		e.method = "workspace/didChangeWorkspaceFolders", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(r || (e.DidChangeWorkspaceFoldersNotification = r = {}));
} }), require_protocol_configuration = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ConfigurationRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "workspace/configuration", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.ConfigurationRequest = n = {}));
} }), require_protocol_colorProvider = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ColorPresentationRequest = e.DocumentColorRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "textDocument/documentColor", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.DocumentColorRequest = n = {}));
	var r;
	(function(e) {
		e.method = "textDocument/colorPresentation", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(r || (e.ColorPresentationRequest = r = {}));
} }), require_protocol_foldingRange = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.FoldingRangeRefreshRequest = e.FoldingRangeRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "textDocument/foldingRange", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.FoldingRangeRequest = n = {}));
	var r;
	(function(e) {
		e.method = "workspace/foldingRange/refresh", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType0(e.method);
	})(r || (e.FoldingRangeRefreshRequest = r = {}));
} }), require_protocol_declaration = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DeclarationRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "textDocument/declaration", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.DeclarationRequest = n = {}));
} }), require_protocol_selectionRange = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SelectionRangeRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "textDocument/selectionRange", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.SelectionRangeRequest = n = {}));
} }), require_protocol_progress = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.WorkDoneProgressCancelNotification = e.WorkDoneProgressCreateRequest = e.WorkDoneProgress = void 0;
	var t = require_main(), n = require_messages2(), r;
	(function(e) {
		e.type = new t.ProgressType();
		function n(t) {
			return t === e.type;
		}
		__name(n, "is"), e.is = n;
	})(r || (e.WorkDoneProgress = r = {}));
	var i;
	(function(e) {
		e.method = "window/workDoneProgress/create", e.messageDirection = n.MessageDirection.serverToClient, e.type = new n.ProtocolRequestType(e.method);
	})(i || (e.WorkDoneProgressCreateRequest = i = {}));
	var a;
	(function(e) {
		e.method = "window/workDoneProgress/cancel", e.messageDirection = n.MessageDirection.clientToServer, e.type = new n.ProtocolNotificationType(e.method);
	})(a || (e.WorkDoneProgressCancelNotification = a = {}));
} }), require_protocol_callHierarchy = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.CallHierarchyOutgoingCallsRequest = e.CallHierarchyIncomingCallsRequest = e.CallHierarchyPrepareRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "textDocument/prepareCallHierarchy", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.CallHierarchyPrepareRequest = n = {}));
	var r;
	(function(e) {
		e.method = "callHierarchy/incomingCalls", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(r || (e.CallHierarchyIncomingCallsRequest = r = {}));
	var i;
	(function(e) {
		e.method = "callHierarchy/outgoingCalls", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(i || (e.CallHierarchyOutgoingCallsRequest = i = {}));
} }), require_protocol_semanticTokens = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SemanticTokensRefreshRequest = e.SemanticTokensRangeRequest = e.SemanticTokensDeltaRequest = e.SemanticTokensRequest = e.SemanticTokensRegistrationType = e.TokenFormat = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.Relative = "relative";
	})(n || (e.TokenFormat = n = {}));
	var r;
	(function(e) {
		e.method = "textDocument/semanticTokens", e.type = new t.RegistrationType(e.method);
	})(r || (e.SemanticTokensRegistrationType = r = {}));
	var i;
	(function(e) {
		e.method = "textDocument/semanticTokens/full", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method), e.registrationMethod = r.method;
	})(i || (e.SemanticTokensRequest = i = {}));
	var a;
	(function(e) {
		e.method = "textDocument/semanticTokens/full/delta", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method), e.registrationMethod = r.method;
	})(a || (e.SemanticTokensDeltaRequest = a = {}));
	var o;
	(function(e) {
		e.method = "textDocument/semanticTokens/range", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method), e.registrationMethod = r.method;
	})(o || (e.SemanticTokensRangeRequest = o = {}));
	var s;
	(function(e) {
		e.method = "workspace/semanticTokens/refresh", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType0(e.method);
	})(s || (e.SemanticTokensRefreshRequest = s = {}));
} }), require_protocol_showDocument = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ShowDocumentRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "window/showDocument", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.ShowDocumentRequest = n = {}));
} }), require_protocol_linkedEditingRange = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.LinkedEditingRangeRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "textDocument/linkedEditingRange", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.LinkedEditingRangeRequest = n = {}));
} }), require_protocol_fileOperations = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.WillDeleteFilesRequest = e.DidDeleteFilesNotification = e.DidRenameFilesNotification = e.WillRenameFilesRequest = e.DidCreateFilesNotification = e.WillCreateFilesRequest = e.FileOperationPatternKind = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.file = "file", e.folder = "folder";
	})(n || (e.FileOperationPatternKind = n = {}));
	var r;
	(function(e) {
		e.method = "workspace/willCreateFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(r || (e.WillCreateFilesRequest = r = {}));
	var i;
	(function(e) {
		e.method = "workspace/didCreateFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(i || (e.DidCreateFilesNotification = i = {}));
	var a;
	(function(e) {
		e.method = "workspace/willRenameFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(a || (e.WillRenameFilesRequest = a = {}));
	var o;
	(function(e) {
		e.method = "workspace/didRenameFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(o || (e.DidRenameFilesNotification = o = {}));
	var s;
	(function(e) {
		e.method = "workspace/didDeleteFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(s || (e.DidDeleteFilesNotification = s = {}));
	var c;
	(function(e) {
		e.method = "workspace/willDeleteFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(c || (e.WillDeleteFilesRequest = c = {}));
} }), require_protocol_moniker = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.MonikerRequest = e.MonikerKind = e.UniquenessLevel = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.document = "document", e.project = "project", e.group = "group", e.scheme = "scheme", e.global = "global";
	})(n || (e.UniquenessLevel = n = {}));
	var r;
	(function(e) {
		e.$import = "import", e.$export = "export", e.local = "local";
	})(r || (e.MonikerKind = r = {}));
	var i;
	(function(e) {
		e.method = "textDocument/moniker", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(i || (e.MonikerRequest = i = {}));
} }), require_protocol_typeHierarchy = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeHierarchySubtypesRequest = e.TypeHierarchySupertypesRequest = e.TypeHierarchyPrepareRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "textDocument/prepareTypeHierarchy", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.TypeHierarchyPrepareRequest = n = {}));
	var r;
	(function(e) {
		e.method = "typeHierarchy/supertypes", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(r || (e.TypeHierarchySupertypesRequest = r = {}));
	var i;
	(function(e) {
		e.method = "typeHierarchy/subtypes", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(i || (e.TypeHierarchySubtypesRequest = i = {}));
} }), require_protocol_inlineValue = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.InlineValueRefreshRequest = e.InlineValueRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "textDocument/inlineValue", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.InlineValueRequest = n = {}));
	var r;
	(function(e) {
		e.method = "workspace/inlineValue/refresh", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType0(e.method);
	})(r || (e.InlineValueRefreshRequest = r = {}));
} }), require_protocol_inlayHint = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.InlayHintRefreshRequest = e.InlayHintResolveRequest = e.InlayHintRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "textDocument/inlayHint", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.InlayHintRequest = n = {}));
	var r;
	(function(e) {
		e.method = "inlayHint/resolve", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(r || (e.InlayHintResolveRequest = r = {}));
	var i;
	(function(e) {
		e.method = "workspace/inlayHint/refresh", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType0(e.method);
	})(i || (e.InlayHintRefreshRequest = i = {}));
} }), require_protocol_diagnostic = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DiagnosticRefreshRequest = e.WorkspaceDiagnosticRequest = e.DocumentDiagnosticRequest = e.DocumentDiagnosticReportKind = e.DiagnosticServerCancellationData = void 0;
	var t = require_main(), n = require_is2(), r = require_messages2(), i;
	(function(e) {
		function t(e) {
			let t = e;
			return t && n.boolean(t.retriggerRequest);
		}
		__name(t, "is"), e.is = t;
	})(i || (e.DiagnosticServerCancellationData = i = {}));
	var a;
	(function(e) {
		e.Full = "full", e.Unchanged = "unchanged";
	})(a || (e.DocumentDiagnosticReportKind = a = {}));
	var s;
	(function(e) {
		e.method = "textDocument/diagnostic", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolRequestType(e.method), e.partialResult = new t.ProgressType();
	})(s || (e.DocumentDiagnosticRequest = s = {}));
	var c;
	(function(e) {
		e.method = "workspace/diagnostic", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolRequestType(e.method), e.partialResult = new t.ProgressType();
	})(c || (e.WorkspaceDiagnosticRequest = c = {}));
	var l;
	(function(e) {
		e.method = "workspace/diagnostic/refresh", e.messageDirection = r.MessageDirection.serverToClient, e.type = new r.ProtocolRequestType0(e.method);
	})(l || (e.DiagnosticRefreshRequest = l = {}));
} }), require_protocol_notebook = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DidCloseNotebookDocumentNotification = e.DidSaveNotebookDocumentNotification = e.DidChangeNotebookDocumentNotification = e.NotebookCellArrayChange = e.DidOpenNotebookDocumentNotification = e.NotebookDocumentSyncRegistrationType = e.NotebookDocument = e.NotebookCell = e.ExecutionSummary = e.NotebookCellKind = void 0;
	var t = (init_main(), __toCommonJS(main_exports)), n = require_is2(), r = require_messages2(), i;
	(function(e) {
		e.Markup = 1, e.Code = 2;
		function t(e) {
			return e === 1 || e === 2;
		}
		__name(t, "is"), e.is = t;
	})(i || (e.NotebookCellKind = i = {}));
	var a;
	(function(e) {
		function r(e, t) {
			let n = { executionOrder: e };
			return (t === !0 || t === !1) && (n.success = t), n;
		}
		__name(r, "create"), e.create = r;
		function i(e) {
			let r = e;
			return n.objectLiteral(r) && t.uinteger.is(r.executionOrder) && (r.success === void 0 || n.boolean(r.success));
		}
		__name(i, "is"), e.is = i;
		function a(e, t) {
			return e === t ? !0 : e == null || t == null ? !1 : e.executionOrder === t.executionOrder && e.success === t.success;
		}
		__name(a, "equals"), e.equals = a;
	})(a || (e.ExecutionSummary = a = {}));
	var s;
	(function(e) {
		function r(e, t) {
			return {
				kind: e,
				document: t
			};
		}
		__name(r, "create"), e.create = r;
		function s(e) {
			let r = e;
			return n.objectLiteral(r) && i.is(r.kind) && t.DocumentUri.is(r.document) && (r.metadata === void 0 || n.objectLiteral(r.metadata));
		}
		__name(s, "is"), e.is = s;
		function c(e, t) {
			let n = /* @__PURE__ */ new Set();
			return e.document !== t.document && n.add("document"), e.kind !== t.kind && n.add("kind"), e.executionSummary !== t.executionSummary && n.add("executionSummary"), (e.metadata !== void 0 || t.metadata !== void 0) && !l(e.metadata, t.metadata) && n.add("metadata"), (e.executionSummary !== void 0 || t.executionSummary !== void 0) && !a.equals(e.executionSummary, t.executionSummary) && n.add("executionSummary"), n;
		}
		__name(c, "diff"), e.diff = c;
		function l(e, t) {
			if (e === t) return !0;
			if (e == null || t == null || typeof e != typeof t || typeof e != "object") return !1;
			let r = Array.isArray(e), i = Array.isArray(t);
			if (r !== i) return !1;
			if (r && i) {
				if (e.length !== t.length) return !1;
				for (let n = 0; n < e.length; n++) if (!l(e[n], t[n])) return !1;
			}
			if (n.objectLiteral(e) && n.objectLiteral(t)) {
				let n = Object.keys(e), r = Object.keys(t);
				if (n.length !== r.length || (n.sort(), r.sort(), !l(n, r))) return !1;
				for (let r = 0; r < n.length; r++) {
					let i = n[r];
					if (!l(e[i], t[i])) return !1;
				}
			}
			return !0;
		}
		__name(l, "equalsMetadata");
	})(s || (e.NotebookCell = s = {}));
	var c;
	(function(e) {
		function r(e, t, n, r) {
			return {
				uri: e,
				notebookType: t,
				version: n,
				cells: r
			};
		}
		__name(r, "create"), e.create = r;
		function i(e) {
			let r = e;
			return n.objectLiteral(r) && n.string(r.uri) && t.integer.is(r.version) && n.typedArray(r.cells, s.is);
		}
		__name(i, "is"), e.is = i;
	})(c || (e.NotebookDocument = c = {}));
	var l;
	(function(e) {
		e.method = "notebookDocument/sync", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.RegistrationType(e.method);
	})(l || (e.NotebookDocumentSyncRegistrationType = l = {}));
	var u;
	(function(e) {
		e.method = "notebookDocument/didOpen", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolNotificationType(e.method), e.registrationMethod = l.method;
	})(u || (e.DidOpenNotebookDocumentNotification = u = {}));
	var d;
	(function(e) {
		function r(e) {
			let r = e;
			return n.objectLiteral(r) && t.uinteger.is(r.start) && t.uinteger.is(r.deleteCount) && (r.cells === void 0 || n.typedArray(r.cells, s.is));
		}
		__name(r, "is"), e.is = r;
		function i(e, t, n) {
			let r = {
				start: e,
				deleteCount: t
			};
			return n !== void 0 && (r.cells = n), r;
		}
		__name(i, "create"), e.create = i;
	})(d || (e.NotebookCellArrayChange = d = {}));
	var f;
	(function(e) {
		e.method = "notebookDocument/didChange", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolNotificationType(e.method), e.registrationMethod = l.method;
	})(f || (e.DidChangeNotebookDocumentNotification = f = {}));
	var h;
	(function(e) {
		e.method = "notebookDocument/didSave", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolNotificationType(e.method), e.registrationMethod = l.method;
	})(h || (e.DidSaveNotebookDocumentNotification = h = {}));
	var g;
	(function(e) {
		e.method = "notebookDocument/didClose", e.messageDirection = r.MessageDirection.clientToServer, e.type = new r.ProtocolNotificationType(e.method), e.registrationMethod = l.method;
	})(g || (e.DidCloseNotebookDocumentNotification = g = {}));
} }), require_protocol_inlineCompletion = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.InlineCompletionRequest = void 0;
	var t = require_messages2(), n;
	(function(e) {
		e.method = "textDocument/inlineCompletion", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(n || (e.InlineCompletionRequest = n = {}));
} }), require_protocol = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.WorkspaceSymbolRequest = e.CodeActionResolveRequest = e.CodeActionRequest = e.DocumentSymbolRequest = e.DocumentHighlightRequest = e.ReferencesRequest = e.DefinitionRequest = e.SignatureHelpRequest = e.SignatureHelpTriggerKind = e.HoverRequest = e.CompletionResolveRequest = e.CompletionRequest = e.CompletionTriggerKind = e.PublishDiagnosticsNotification = e.WatchKind = e.RelativePattern = e.FileChangeType = e.DidChangeWatchedFilesNotification = e.WillSaveTextDocumentWaitUntilRequest = e.WillSaveTextDocumentNotification = e.TextDocumentSaveReason = e.DidSaveTextDocumentNotification = e.DidCloseTextDocumentNotification = e.DidChangeTextDocumentNotification = e.TextDocumentContentChangeEvent = e.DidOpenTextDocumentNotification = e.TextDocumentSyncKind = e.TelemetryEventNotification = e.LogMessageNotification = e.ShowMessageRequest = e.ShowMessageNotification = e.MessageType = e.DidChangeConfigurationNotification = e.ExitNotification = e.ShutdownRequest = e.InitializedNotification = e.InitializeErrorCodes = e.InitializeRequest = e.WorkDoneProgressOptions = e.TextDocumentRegistrationOptions = e.StaticRegistrationOptions = e.PositionEncodingKind = e.FailureHandlingKind = e.ResourceOperationKind = e.UnregistrationRequest = e.RegistrationRequest = e.DocumentSelector = e.NotebookCellTextDocumentFilter = e.NotebookDocumentFilter = e.TextDocumentFilter = void 0, e.MonikerRequest = e.MonikerKind = e.UniquenessLevel = e.WillDeleteFilesRequest = e.DidDeleteFilesNotification = e.WillRenameFilesRequest = e.DidRenameFilesNotification = e.WillCreateFilesRequest = e.DidCreateFilesNotification = e.FileOperationPatternKind = e.LinkedEditingRangeRequest = e.ShowDocumentRequest = e.SemanticTokensRegistrationType = e.SemanticTokensRefreshRequest = e.SemanticTokensRangeRequest = e.SemanticTokensDeltaRequest = e.SemanticTokensRequest = e.TokenFormat = e.CallHierarchyPrepareRequest = e.CallHierarchyOutgoingCallsRequest = e.CallHierarchyIncomingCallsRequest = e.WorkDoneProgressCancelNotification = e.WorkDoneProgressCreateRequest = e.WorkDoneProgress = e.SelectionRangeRequest = e.DeclarationRequest = e.FoldingRangeRefreshRequest = e.FoldingRangeRequest = e.ColorPresentationRequest = e.DocumentColorRequest = e.ConfigurationRequest = e.DidChangeWorkspaceFoldersNotification = e.WorkspaceFoldersRequest = e.TypeDefinitionRequest = e.ImplementationRequest = e.ApplyWorkspaceEditRequest = e.ExecuteCommandRequest = e.PrepareRenameRequest = e.RenameRequest = e.PrepareSupportDefaultBehavior = e.DocumentOnTypeFormattingRequest = e.DocumentRangesFormattingRequest = e.DocumentRangeFormattingRequest = e.DocumentFormattingRequest = e.DocumentLinkResolveRequest = e.DocumentLinkRequest = e.CodeLensRefreshRequest = e.CodeLensResolveRequest = e.CodeLensRequest = e.WorkspaceSymbolResolveRequest = void 0, e.InlineCompletionRequest = e.DidCloseNotebookDocumentNotification = e.DidSaveNotebookDocumentNotification = e.DidChangeNotebookDocumentNotification = e.NotebookCellArrayChange = e.DidOpenNotebookDocumentNotification = e.NotebookDocumentSyncRegistrationType = e.NotebookDocument = e.NotebookCell = e.ExecutionSummary = e.NotebookCellKind = e.DiagnosticRefreshRequest = e.WorkspaceDiagnosticRequest = e.DocumentDiagnosticRequest = e.DocumentDiagnosticReportKind = e.DiagnosticServerCancellationData = e.InlayHintRefreshRequest = e.InlayHintResolveRequest = e.InlayHintRequest = e.InlineValueRefreshRequest = e.InlineValueRequest = e.TypeHierarchySupertypesRequest = e.TypeHierarchySubtypesRequest = e.TypeHierarchyPrepareRequest = void 0;
	var t = require_messages2(), n = (init_main(), __toCommonJS(main_exports)), r = require_is2(), i = require_protocol_implementation();
	Object.defineProperty(e, "ImplementationRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return i.ImplementationRequest;
		}, "get")
	});
	var a = require_protocol_typeDefinition();
	Object.defineProperty(e, "TypeDefinitionRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return a.TypeDefinitionRequest;
		}, "get")
	});
	var s = require_protocol_workspaceFolder();
	Object.defineProperty(e, "WorkspaceFoldersRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return s.WorkspaceFoldersRequest;
		}, "get")
	}), Object.defineProperty(e, "DidChangeWorkspaceFoldersNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return s.DidChangeWorkspaceFoldersNotification;
		}, "get")
	});
	var c = require_protocol_configuration();
	Object.defineProperty(e, "ConfigurationRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return c.ConfigurationRequest;
		}, "get")
	});
	var l = require_protocol_colorProvider();
	Object.defineProperty(e, "DocumentColorRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return l.DocumentColorRequest;
		}, "get")
	}), Object.defineProperty(e, "ColorPresentationRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return l.ColorPresentationRequest;
		}, "get")
	});
	var u = require_protocol_foldingRange();
	Object.defineProperty(e, "FoldingRangeRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return u.FoldingRangeRequest;
		}, "get")
	}), Object.defineProperty(e, "FoldingRangeRefreshRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return u.FoldingRangeRefreshRequest;
		}, "get")
	});
	var d = require_protocol_declaration();
	Object.defineProperty(e, "DeclarationRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return d.DeclarationRequest;
		}, "get")
	});
	var f = require_protocol_selectionRange();
	Object.defineProperty(e, "SelectionRangeRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return f.SelectionRangeRequest;
		}, "get")
	});
	var h = require_protocol_progress();
	Object.defineProperty(e, "WorkDoneProgress", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return h.WorkDoneProgress;
		}, "get")
	}), Object.defineProperty(e, "WorkDoneProgressCreateRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return h.WorkDoneProgressCreateRequest;
		}, "get")
	}), Object.defineProperty(e, "WorkDoneProgressCancelNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return h.WorkDoneProgressCancelNotification;
		}, "get")
	});
	var g = require_protocol_callHierarchy();
	Object.defineProperty(e, "CallHierarchyIncomingCallsRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return g.CallHierarchyIncomingCallsRequest;
		}, "get")
	}), Object.defineProperty(e, "CallHierarchyOutgoingCallsRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return g.CallHierarchyOutgoingCallsRequest;
		}, "get")
	}), Object.defineProperty(e, "CallHierarchyPrepareRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return g.CallHierarchyPrepareRequest;
		}, "get")
	});
	var _ = require_protocol_semanticTokens();
	Object.defineProperty(e, "TokenFormat", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return _.TokenFormat;
		}, "get")
	}), Object.defineProperty(e, "SemanticTokensRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return _.SemanticTokensRequest;
		}, "get")
	}), Object.defineProperty(e, "SemanticTokensDeltaRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return _.SemanticTokensDeltaRequest;
		}, "get")
	}), Object.defineProperty(e, "SemanticTokensRangeRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return _.SemanticTokensRangeRequest;
		}, "get")
	}), Object.defineProperty(e, "SemanticTokensRefreshRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return _.SemanticTokensRefreshRequest;
		}, "get")
	}), Object.defineProperty(e, "SemanticTokensRegistrationType", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return _.SemanticTokensRegistrationType;
		}, "get")
	});
	var v = require_protocol_showDocument();
	Object.defineProperty(e, "ShowDocumentRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return v.ShowDocumentRequest;
		}, "get")
	});
	var y = require_protocol_linkedEditingRange();
	Object.defineProperty(e, "LinkedEditingRangeRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return y.LinkedEditingRangeRequest;
		}, "get")
	});
	var b = require_protocol_fileOperations();
	Object.defineProperty(e, "FileOperationPatternKind", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return b.FileOperationPatternKind;
		}, "get")
	}), Object.defineProperty(e, "DidCreateFilesNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return b.DidCreateFilesNotification;
		}, "get")
	}), Object.defineProperty(e, "WillCreateFilesRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return b.WillCreateFilesRequest;
		}, "get")
	}), Object.defineProperty(e, "DidRenameFilesNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return b.DidRenameFilesNotification;
		}, "get")
	}), Object.defineProperty(e, "WillRenameFilesRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return b.WillRenameFilesRequest;
		}, "get")
	}), Object.defineProperty(e, "DidDeleteFilesNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return b.DidDeleteFilesNotification;
		}, "get")
	}), Object.defineProperty(e, "WillDeleteFilesRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return b.WillDeleteFilesRequest;
		}, "get")
	});
	var x = require_protocol_moniker();
	Object.defineProperty(e, "UniquenessLevel", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return x.UniquenessLevel;
		}, "get")
	}), Object.defineProperty(e, "MonikerKind", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return x.MonikerKind;
		}, "get")
	}), Object.defineProperty(e, "MonikerRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return x.MonikerRequest;
		}, "get")
	});
	var S = require_protocol_typeHierarchy();
	Object.defineProperty(e, "TypeHierarchyPrepareRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return S.TypeHierarchyPrepareRequest;
		}, "get")
	}), Object.defineProperty(e, "TypeHierarchySubtypesRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return S.TypeHierarchySubtypesRequest;
		}, "get")
	}), Object.defineProperty(e, "TypeHierarchySupertypesRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return S.TypeHierarchySupertypesRequest;
		}, "get")
	});
	var C = require_protocol_inlineValue();
	Object.defineProperty(e, "InlineValueRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return C.InlineValueRequest;
		}, "get")
	}), Object.defineProperty(e, "InlineValueRefreshRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return C.InlineValueRefreshRequest;
		}, "get")
	});
	var w = require_protocol_inlayHint();
	Object.defineProperty(e, "InlayHintRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return w.InlayHintRequest;
		}, "get")
	}), Object.defineProperty(e, "InlayHintResolveRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return w.InlayHintResolveRequest;
		}, "get")
	}), Object.defineProperty(e, "InlayHintRefreshRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return w.InlayHintRefreshRequest;
		}, "get")
	});
	var T = require_protocol_diagnostic();
	Object.defineProperty(e, "DiagnosticServerCancellationData", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return T.DiagnosticServerCancellationData;
		}, "get")
	}), Object.defineProperty(e, "DocumentDiagnosticReportKind", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return T.DocumentDiagnosticReportKind;
		}, "get")
	}), Object.defineProperty(e, "DocumentDiagnosticRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return T.DocumentDiagnosticRequest;
		}, "get")
	}), Object.defineProperty(e, "WorkspaceDiagnosticRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return T.WorkspaceDiagnosticRequest;
		}, "get")
	}), Object.defineProperty(e, "DiagnosticRefreshRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return T.DiagnosticRefreshRequest;
		}, "get")
	});
	var E = require_protocol_notebook();
	Object.defineProperty(e, "NotebookCellKind", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return E.NotebookCellKind;
		}, "get")
	}), Object.defineProperty(e, "ExecutionSummary", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return E.ExecutionSummary;
		}, "get")
	}), Object.defineProperty(e, "NotebookCell", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return E.NotebookCell;
		}, "get")
	}), Object.defineProperty(e, "NotebookDocument", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return E.NotebookDocument;
		}, "get")
	}), Object.defineProperty(e, "NotebookDocumentSyncRegistrationType", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return E.NotebookDocumentSyncRegistrationType;
		}, "get")
	}), Object.defineProperty(e, "DidOpenNotebookDocumentNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return E.DidOpenNotebookDocumentNotification;
		}, "get")
	}), Object.defineProperty(e, "NotebookCellArrayChange", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return E.NotebookCellArrayChange;
		}, "get")
	}), Object.defineProperty(e, "DidChangeNotebookDocumentNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return E.DidChangeNotebookDocumentNotification;
		}, "get")
	}), Object.defineProperty(e, "DidSaveNotebookDocumentNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return E.DidSaveNotebookDocumentNotification;
		}, "get")
	}), Object.defineProperty(e, "DidCloseNotebookDocumentNotification", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return E.DidCloseNotebookDocumentNotification;
		}, "get")
	});
	var D = require_protocol_inlineCompletion();
	Object.defineProperty(e, "InlineCompletionRequest", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return D.InlineCompletionRequest;
		}, "get")
	});
	var O;
	(function(e) {
		function t(e) {
			let t = e;
			return r.string(t) || r.string(t.language) || r.string(t.scheme) || r.string(t.pattern);
		}
		__name(t, "is"), e.is = t;
	})(O || (e.TextDocumentFilter = O = {}));
	var k;
	(function(e) {
		function t(e) {
			let t = e;
			return r.objectLiteral(t) && (r.string(t.notebookType) || r.string(t.scheme) || r.string(t.pattern));
		}
		__name(t, "is"), e.is = t;
	})(k || (e.NotebookDocumentFilter = k = {}));
	var A;
	(function(e) {
		function t(e) {
			let t = e;
			return r.objectLiteral(t) && (r.string(t.notebook) || k.is(t.notebook)) && (t.language === void 0 || r.string(t.language));
		}
		__name(t, "is"), e.is = t;
	})(A || (e.NotebookCellTextDocumentFilter = A = {}));
	var j;
	(function(e) {
		function t(e) {
			if (!Array.isArray(e)) return !1;
			for (let t of e) if (!r.string(t) && !O.is(t) && !A.is(t)) return !1;
			return !0;
		}
		__name(t, "is"), e.is = t;
	})(j || (e.DocumentSelector = j = {}));
	var M;
	(function(e) {
		e.method = "client/registerCapability", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType(e.method);
	})(M || (e.RegistrationRequest = M = {}));
	var N;
	(function(e) {
		e.method = "client/unregisterCapability", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType(e.method);
	})(N || (e.UnregistrationRequest = N = {}));
	var P;
	(function(e) {
		e.Create = "create", e.Rename = "rename", e.Delete = "delete";
	})(P || (e.ResourceOperationKind = P = {}));
	var F;
	(function(e) {
		e.Abort = "abort", e.Transactional = "transactional", e.TextOnlyTransactional = "textOnlyTransactional", e.Undo = "undo";
	})(F || (e.FailureHandlingKind = F = {}));
	var I;
	(function(e) {
		e.UTF8 = "utf-8", e.UTF16 = "utf-16", e.UTF32 = "utf-32";
	})(I || (e.PositionEncodingKind = I = {}));
	var L;
	(function(e) {
		function t(e) {
			let t = e;
			return t && r.string(t.id) && t.id.length > 0;
		}
		__name(t, "hasId"), e.hasId = t;
	})(L || (e.StaticRegistrationOptions = L = {}));
	var R;
	(function(e) {
		function t(e) {
			let t = e;
			return t && (t.documentSelector === null || j.is(t.documentSelector));
		}
		__name(t, "is"), e.is = t;
	})(R || (e.TextDocumentRegistrationOptions = R = {}));
	var z;
	(function(e) {
		function t(e) {
			let t = e;
			return r.objectLiteral(t) && (t.workDoneProgress === void 0 || r.boolean(t.workDoneProgress));
		}
		__name(t, "is"), e.is = t;
		function n(e) {
			let t = e;
			return t && r.boolean(t.workDoneProgress);
		}
		__name(n, "hasWorkDoneProgress"), e.hasWorkDoneProgress = n;
	})(z || (e.WorkDoneProgressOptions = z = {}));
	var B;
	(function(e) {
		e.method = "initialize", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(B || (e.InitializeRequest = B = {}));
	var V;
	(function(e) {
		e.unknownProtocolVersion = 1;
	})(V || (e.InitializeErrorCodes = V = {}));
	var H;
	(function(e) {
		e.method = "initialized", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(H || (e.InitializedNotification = H = {}));
	var U;
	(function(e) {
		e.method = "shutdown", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType0(e.method);
	})(U || (e.ShutdownRequest = U = {}));
	var xL;
	(function(e) {
		e.method = "exit", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType0(e.method);
	})(xL || (e.ExitNotification = xL = {}));
	var SL;
	(function(e) {
		e.method = "workspace/didChangeConfiguration", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(SL || (e.DidChangeConfigurationNotification = SL = {}));
	var CL;
	(function(e) {
		e.Error = 1, e.Warning = 2, e.Info = 3, e.Log = 4, e.Debug = 5;
	})(CL || (e.MessageType = CL = {}));
	var wL;
	(function(e) {
		e.method = "window/showMessage", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolNotificationType(e.method);
	})(wL || (e.ShowMessageNotification = wL = {}));
	var TL;
	(function(e) {
		e.method = "window/showMessageRequest", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType(e.method);
	})(TL || (e.ShowMessageRequest = TL = {}));
	var W;
	(function(e) {
		e.method = "window/logMessage", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolNotificationType(e.method);
	})(W || (e.LogMessageNotification = W = {}));
	var EL;
	(function(e) {
		e.method = "telemetry/event", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolNotificationType(e.method);
	})(EL || (e.TelemetryEventNotification = EL = {}));
	var DL;
	(function(e) {
		e.None = 0, e.Full = 1, e.Incremental = 2;
	})(DL || (e.TextDocumentSyncKind = DL = {}));
	var OL;
	(function(e) {
		e.method = "textDocument/didOpen", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(OL || (e.DidOpenTextDocumentNotification = OL = {}));
	var kL;
	(function(e) {
		function t(e) {
			let t = e;
			return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
		}
		__name(t, "isIncremental"), e.isIncremental = t;
		function n(e) {
			let t = e;
			return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
		}
		__name(n, "isFull"), e.isFull = n;
	})(kL || (e.TextDocumentContentChangeEvent = kL = {}));
	var AL;
	(function(e) {
		e.method = "textDocument/didChange", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(AL || (e.DidChangeTextDocumentNotification = AL = {}));
	var jL;
	(function(e) {
		e.method = "textDocument/didClose", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(jL || (e.DidCloseTextDocumentNotification = jL = {}));
	var ML;
	(function(e) {
		e.method = "textDocument/didSave", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(ML || (e.DidSaveTextDocumentNotification = ML = {}));
	var G;
	(function(e) {
		e.Manual = 1, e.AfterDelay = 2, e.FocusOut = 3;
	})(G || (e.TextDocumentSaveReason = G = {}));
	var NL;
	(function(e) {
		e.method = "textDocument/willSave", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(NL || (e.WillSaveTextDocumentNotification = NL = {}));
	var PL;
	(function(e) {
		e.method = "textDocument/willSaveWaitUntil", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(PL || (e.WillSaveTextDocumentWaitUntilRequest = PL = {}));
	var FL;
	(function(e) {
		e.method = "workspace/didChangeWatchedFiles", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolNotificationType(e.method);
	})(FL || (e.DidChangeWatchedFilesNotification = FL = {}));
	var IL;
	(function(e) {
		e.Created = 1, e.Changed = 2, e.Deleted = 3;
	})(IL || (e.FileChangeType = IL = {}));
	var LL;
	(function(e) {
		function t(e) {
			let t = e;
			return r.objectLiteral(t) && (n.URI.is(t.baseUri) || n.WorkspaceFolder.is(t.baseUri)) && r.string(t.pattern);
		}
		__name(t, "is"), e.is = t;
	})(LL || (e.RelativePattern = LL = {}));
	var RL;
	(function(e) {
		e.Create = 1, e.Change = 2, e.Delete = 4;
	})(RL || (e.WatchKind = RL = {}));
	var zL;
	(function(e) {
		e.method = "textDocument/publishDiagnostics", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolNotificationType(e.method);
	})(zL || (e.PublishDiagnosticsNotification = zL = {}));
	var BL;
	(function(e) {
		e.Invoked = 1, e.TriggerCharacter = 2, e.TriggerForIncompleteCompletions = 3;
	})(BL || (e.CompletionTriggerKind = BL = {}));
	var VL;
	(function(e) {
		e.method = "textDocument/completion", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(VL || (e.CompletionRequest = VL = {}));
	var HL;
	(function(e) {
		e.method = "completionItem/resolve", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(HL || (e.CompletionResolveRequest = HL = {}));
	var UL;
	(function(e) {
		e.method = "textDocument/hover", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(UL || (e.HoverRequest = UL = {}));
	var K;
	(function(e) {
		e.Invoked = 1, e.TriggerCharacter = 2, e.ContentChange = 3;
	})(K || (e.SignatureHelpTriggerKind = K = {}));
	var WL;
	(function(e) {
		e.method = "textDocument/signatureHelp", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(WL || (e.SignatureHelpRequest = WL = {}));
	var GL;
	(function(e) {
		e.method = "textDocument/definition", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(GL || (e.DefinitionRequest = GL = {}));
	var q;
	(function(e) {
		e.method = "textDocument/references", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(q || (e.ReferencesRequest = q = {}));
	var KL;
	(function(e) {
		e.method = "textDocument/documentHighlight", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(KL || (e.DocumentHighlightRequest = KL = {}));
	var J;
	(function(e) {
		e.method = "textDocument/documentSymbol", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(J || (e.DocumentSymbolRequest = J = {}));
	var qL;
	(function(e) {
		e.method = "textDocument/codeAction", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(qL || (e.CodeActionRequest = qL = {}));
	var Y;
	(function(e) {
		e.method = "codeAction/resolve", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Y || (e.CodeActionResolveRequest = Y = {}));
	var X;
	(function(e) {
		e.method = "workspace/symbol", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(X || (e.WorkspaceSymbolRequest = X = {}));
	var JL;
	(function(e) {
		e.method = "workspaceSymbol/resolve", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(JL || (e.WorkspaceSymbolResolveRequest = JL = {}));
	var YL;
	(function(e) {
		e.method = "textDocument/codeLens", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(YL || (e.CodeLensRequest = YL = {}));
	var Z;
	(function(e) {
		e.method = "codeLens/resolve", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Z || (e.CodeLensResolveRequest = Z = {}));
	var XL;
	(function(e) {
		e.method = "workspace/codeLens/refresh", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType0(e.method);
	})(XL || (e.CodeLensRefreshRequest = XL = {}));
	var ZL;
	(function(e) {
		e.method = "textDocument/documentLink", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(ZL || (e.DocumentLinkRequest = ZL = {}));
	var Q;
	(function(e) {
		e.method = "documentLink/resolve", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(Q || (e.DocumentLinkResolveRequest = Q = {}));
	var QL;
	(function(e) {
		e.method = "textDocument/formatting", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(QL || (e.DocumentFormattingRequest = QL = {}));
	var $;
	(function(e) {
		e.method = "textDocument/rangeFormatting", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})($ || (e.DocumentRangeFormattingRequest = $ = {}));
	var $L;
	(function(e) {
		e.method = "textDocument/rangesFormatting", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})($L || (e.DocumentRangesFormattingRequest = $L = {}));
	var eR;
	(function(e) {
		e.method = "textDocument/onTypeFormatting", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(eR || (e.DocumentOnTypeFormattingRequest = eR = {}));
	var tR;
	(function(e) {
		e.Identifier = 1;
	})(tR || (e.PrepareSupportDefaultBehavior = tR = {}));
	var nR;
	(function(e) {
		e.method = "textDocument/rename", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(nR || (e.RenameRequest = nR = {}));
	var rR;
	(function(e) {
		e.method = "textDocument/prepareRename", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(rR || (e.PrepareRenameRequest = rR = {}));
	var iR;
	(function(e) {
		e.method = "workspace/executeCommand", e.messageDirection = t.MessageDirection.clientToServer, e.type = new t.ProtocolRequestType(e.method);
	})(iR || (e.ExecuteCommandRequest = iR = {}));
	var aR;
	(function(e) {
		e.method = "workspace/applyEdit", e.messageDirection = t.MessageDirection.serverToClient, e.type = new t.ProtocolRequestType("workspace/applyEdit");
	})(aR || (e.ApplyWorkspaceEditRequest = aR = {}));
} }), require_connection2 = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/connection.js"(e) {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createProtocolConnection = void 0;
	var t = require_main();
	function n(e, n, r, i) {
		return t.ConnectionStrategy.is(i) && (i = { connectionStrategy: i }), (0, t.createMessageConnection)(e, n, r, i);
	}
	__name(n, "createProtocolConnection"), e.createProtocolConnection = n;
} }), require_api2 = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/api.js"(e) {
	var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: /* @__PURE__ */ __name(function() {
				return t[n];
			}, "get")
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.LSPErrorCodes = e.createProtocolConnection = void 0, n(require_main(), e), n((init_main(), __toCommonJS(main_exports)), e), n(require_messages2(), e), n(require_protocol(), e);
	var r = require_connection2();
	Object.defineProperty(e, "createProtocolConnection", {
		enumerable: !0,
		get: /* @__PURE__ */ __name(function() {
			return r.createProtocolConnection;
		}, "get")
	});
	var i;
	(function(e) {
		e.lspReservedErrorRangeStart = -32899, e.RequestFailed = -32803, e.ServerCancelled = -32802, e.ContentModified = -32801, e.RequestCancelled = -32800, e.lspReservedErrorRangeEnd = -32800;
	})(i || (e.LSPErrorCodes = i = {}));
} }), require_main2 = __commonJS({ "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/browser/main.js"(e) {
	var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: /* @__PURE__ */ __name(function() {
				return t[n];
			}, "get")
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createProtocolConnection = void 0;
	var r = require_browser();
	n(require_browser(), e), n(require_api2(), e);
	function i(e, t, n, i) {
		return (0, r.createMessageConnection)(e, t, n, i);
	}
	__name(i, "createProtocolConnection"), e.createProtocolConnection = i;
} }), lib_exports = {};
__export(lib_exports, {
	AbstractAstReflection: () => AbstractAstReflection,
	AbstractCstNode: () => AbstractCstNode,
	AbstractLangiumParser: () => AbstractLangiumParser,
	AbstractParserErrorMessageProvider: () => AbstractParserErrorMessageProvider,
	AbstractThreadedAsyncParser: () => AbstractThreadedAsyncParser,
	AstUtils: () => ast_utils_exports,
	BiMap: () => BiMap,
	Cancellation: () => cancellation_exports,
	CompositeCstNodeImpl: () => CompositeCstNodeImpl,
	ContextCache: () => ContextCache,
	CstNodeBuilder: () => CstNodeBuilder,
	CstUtils: () => cst_utils_exports,
	DEFAULT_TOKENIZE_OPTIONS: () => DEFAULT_TOKENIZE_OPTIONS,
	DONE_RESULT: () => DONE_RESULT,
	DatatypeSymbol: () => DatatypeSymbol,
	DefaultAstNodeDescriptionProvider: () => DefaultAstNodeDescriptionProvider,
	DefaultAstNodeLocator: () => DefaultAstNodeLocator,
	DefaultAsyncParser: () => DefaultAsyncParser,
	DefaultCommentProvider: () => DefaultCommentProvider,
	DefaultConfigurationProvider: () => DefaultConfigurationProvider,
	DefaultDocumentBuilder: () => DefaultDocumentBuilder,
	DefaultDocumentValidator: () => DefaultDocumentValidator,
	DefaultHydrator: () => DefaultHydrator,
	DefaultIndexManager: () => DefaultIndexManager,
	DefaultJsonSerializer: () => DefaultJsonSerializer,
	DefaultLangiumDocumentFactory: () => DefaultLangiumDocumentFactory,
	DefaultLangiumDocuments: () => DefaultLangiumDocuments,
	DefaultLangiumProfiler: () => DefaultLangiumProfiler,
	DefaultLexer: () => DefaultLexer,
	DefaultLexerErrorMessageProvider: () => DefaultLexerErrorMessageProvider,
	DefaultLinker: () => DefaultLinker,
	DefaultNameProvider: () => DefaultNameProvider,
	DefaultReferenceDescriptionProvider: () => DefaultReferenceDescriptionProvider,
	DefaultReferences: () => DefaultReferences,
	DefaultScopeComputation: () => DefaultScopeComputation,
	DefaultScopeProvider: () => DefaultScopeProvider,
	DefaultServiceRegistry: () => DefaultServiceRegistry,
	DefaultTokenBuilder: () => DefaultTokenBuilder,
	DefaultValueConverter: () => DefaultValueConverter,
	DefaultWorkspaceLock: () => DefaultWorkspaceLock,
	DefaultWorkspaceManager: () => DefaultWorkspaceManager,
	Deferred: () => Deferred,
	Disposable: () => Disposable,
	DisposableCache: () => DisposableCache,
	DocumentCache: () => DocumentCache,
	DocumentState: () => DocumentState,
	DocumentValidator: () => DocumentValidator,
	EMPTY_SCOPE: () => EMPTY_SCOPE,
	EMPTY_STREAM: () => EMPTY_STREAM,
	EmptyFileSystem: () => EmptyFileSystem,
	EmptyFileSystemProvider: () => EmptyFileSystemProvider,
	ErrorWithLocation: () => ErrorWithLocation,
	GrammarAST: () => ast_exports,
	GrammarUtils: () => grammar_utils_exports,
	IndentationAwareLexer: () => IndentationAwareLexer,
	IndentationAwareTokenBuilder: () => IndentationAwareTokenBuilder,
	JSDocDocumentationProvider: () => JSDocDocumentationProvider,
	LangiumCompletionParser: () => LangiumCompletionParser,
	LangiumParser: () => LangiumParser,
	LangiumParserErrorMessageProvider: () => LangiumParserErrorMessageProvider,
	LeafCstNodeImpl: () => LeafCstNodeImpl,
	LexingMode: () => LexingMode,
	MapScope: () => MapScope,
	Module: () => Module,
	MultiMap: () => MultiMap,
	MultiMapScope: () => MultiMapScope,
	OperationCancelled: () => OperationCancelled,
	ParserWorker: () => ParserWorker,
	ProfilingTask: () => ProfilingTask,
	Reduction: () => Reduction,
	RefResolving: () => RefResolving,
	RegExpUtils: () => regexp_utils_exports,
	RootCstNodeImpl: () => RootCstNodeImpl,
	SimpleCache: () => SimpleCache,
	StreamImpl: () => StreamImpl,
	StreamScope: () => StreamScope,
	TextDocument: () => TextDocument2,
	TreeStreamImpl: () => TreeStreamImpl,
	URI: () => URI2,
	UriTrie: () => UriTrie,
	UriUtils: () => UriUtils,
	VALIDATE_EACH_NODE: () => VALIDATE_EACH_NODE,
	ValidationCategory: () => ValidationCategory,
	ValidationRegistry: () => ValidationRegistry,
	ValueConverter: () => ValueConverter,
	WorkspaceCache: () => WorkspaceCache,
	assertCondition: () => assertCondition,
	assertUnreachable: () => assertUnreachable,
	createCompletionParser: () => createCompletionParser,
	createDefaultCoreModule: () => createDefaultCoreModule,
	createDefaultSharedCoreModule: () => createDefaultSharedCoreModule,
	createGrammarConfig: () => createGrammarConfig,
	createLangiumParser: () => createLangiumParser,
	createParser: () => createParser,
	delayNextTick: () => delayNextTick,
	diagnosticData: () => diagnosticData,
	eagerLoad: () => eagerLoad,
	getDiagnosticRange: () => getDiagnosticRange,
	indentationBuilderDefaultOptions: () => indentationBuilderDefaultOptions,
	inject: () => inject,
	interruptAndCheck: () => interruptAndCheck,
	isAstNode: () => isAstNode,
	isAstNodeDescription: () => isAstNodeDescription,
	isAstNodeWithComment: () => isAstNodeWithComment,
	isCompositeCstNode: () => isCompositeCstNode,
	isIMultiModeLexerDefinition: () => isIMultiModeLexerDefinition,
	isJSDoc: () => isJSDoc,
	isLeafCstNode: () => isLeafCstNode,
	isLinkingError: () => isLinkingError,
	isMultiReference: () => isMultiReference,
	isNamed: () => isNamed,
	isOperationCancelled: () => isOperationCancelled,
	isReference: () => isReference,
	isRootCstNode: () => isRootCstNode,
	isTokenTypeArray: () => isTokenTypeArray,
	isTokenTypeDictionary: () => isTokenTypeDictionary,
	loadGrammarFromJson: () => loadGrammarFromJson,
	parseJSDoc: () => parseJSDoc,
	prepareLangiumParser: () => prepareLangiumParser,
	setInterruptionPeriod: () => setInterruptionPeriod,
	startCancelableOperation: () => startCancelableOperation,
	stream: () => stream,
	toDiagnosticData: () => toDiagnosticData,
	toDiagnosticSeverity: () => toDiagnosticSeverity
});
var cst_utils_exports = {};
__export(cst_utils_exports, {
	DefaultNameRegexp: () => DefaultNameRegexp,
	RangeComparison: () => RangeComparison,
	compareRange: () => compareRange,
	findCommentNode: () => findCommentNode,
	findDeclarationNodeAtOffset: () => findDeclarationNodeAtOffset,
	findLeafNodeAtOffset: () => findLeafNodeAtOffset,
	findLeafNodeBeforeOffset: () => findLeafNodeBeforeOffset,
	flattenCst: () => flattenCst,
	getDatatypeNode: () => getDatatypeNode,
	getInteriorNodes: () => getInteriorNodes,
	getNextNode: () => getNextNode,
	getPreviousNode: () => getPreviousNode,
	getStartlineNode: () => getStartlineNode,
	inRange: () => inRange,
	isChildNode: () => isChildNode,
	isCommentNode: () => isCommentNode,
	streamCst: () => streamCst,
	toDocumentSegment: () => toDocumentSegment,
	tokenToRange: () => tokenToRange
});
function isAstNode(e) {
	return typeof e == "object" && !!e && typeof e.$type == "string";
}
__name(isAstNode, "isAstNode");
function isReference(e) {
	return typeof e == "object" && !!e && typeof e.$refText == "string" && "ref" in e;
}
__name(isReference, "isReference");
function isMultiReference(e) {
	return typeof e == "object" && !!e && typeof e.$refText == "string" && "items" in e;
}
__name(isMultiReference, "isMultiReference");
function isAstNodeDescription(e) {
	return typeof e == "object" && !!e && typeof e.name == "string" && typeof e.type == "string" && typeof e.path == "string";
}
__name(isAstNodeDescription, "isAstNodeDescription");
function isLinkingError(e) {
	return typeof e == "object" && !!e && typeof e.info == "object" && typeof e.message == "string";
}
__name(isLinkingError, "isLinkingError");
var AbstractAstReflection = class {
	static #e = __name(this, "AbstractAstReflection");
	constructor() {
		this.subtypes = {}, this.allSubtypes = {};
	}
	getAllTypes() {
		return Object.keys(this.types);
	}
	getReferenceType(e) {
		let t = this.types[e.container.$type];
		if (!t) throw Error(`Type ${e.container.$type || "undefined"} not found.`);
		let n = t.properties[e.property]?.referenceType;
		if (!n) throw Error(`Property ${e.property || "undefined"} of type ${e.container.$type} is not a reference.`);
		return n;
	}
	getTypeMetaData(e) {
		return this.types[e] || {
			name: e,
			properties: {},
			superTypes: []
		};
	}
	isInstance(e, t) {
		return isAstNode(e) && this.isSubtype(e.$type, t);
	}
	isSubtype(e, t) {
		if (e === t) return !0;
		let n = this.subtypes[e];
		n ||= this.subtypes[e] = {};
		let r = n[t];
		if (r !== void 0) return r;
		{
			let r = this.types[e], i = r ? r.superTypes.some((e) => this.isSubtype(e, t)) : !1;
			return n[t] = i, i;
		}
	}
	getAllSubTypes(e) {
		let t = this.allSubtypes[e];
		if (t) return t;
		{
			let t = this.getAllTypes(), n = [];
			for (let r of t) this.isSubtype(r, e) && n.push(r);
			return this.allSubtypes[e] = n, n;
		}
	}
};
function isCompositeCstNode(e) {
	return typeof e == "object" && !!e && Array.isArray(e.content);
}
__name(isCompositeCstNode, "isCompositeCstNode");
function isLeafCstNode(e) {
	return typeof e == "object" && !!e && typeof e.tokenType == "object";
}
__name(isLeafCstNode, "isLeafCstNode");
function isRootCstNode(e) {
	return isCompositeCstNode(e) && typeof e.fullText == "string";
}
__name(isRootCstNode, "isRootCstNode");
var StreamImpl = class e {
	static #e = __name(this, "StreamImpl");
	constructor(e, t) {
		this.startFn = e, this.nextFn = t;
	}
	iterator() {
		let e = {
			state: this.startFn(),
			next: /* @__PURE__ */ __name(() => this.nextFn(e.state), "next"),
			[Symbol.iterator]: () => e
		};
		return e;
	}
	[Symbol.iterator]() {
		return this.iterator();
	}
	isEmpty() {
		return !!this.iterator().next().done;
	}
	count() {
		let e = this.iterator(), t = 0, n = e.next();
		for (; !n.done;) t++, n = e.next();
		return t;
	}
	toArray() {
		let e = [], t = this.iterator(), n;
		do
			n = t.next(), n.value !== void 0 && e.push(n.value);
		while (!n.done);
		return e;
	}
	toSet() {
		return new Set(this);
	}
	toMap(e, t) {
		let n = this.map((n) => [e ? e(n) : n, t ? t(n) : n]);
		return new Map(n);
	}
	toString() {
		return this.join();
	}
	concat(t) {
		return new e(() => ({
			first: this.startFn(),
			firstDone: !1,
			iterator: t[Symbol.iterator]()
		}), (e) => {
			let t;
			if (!e.firstDone) {
				do
					if (t = this.nextFn(e.first), !t.done) return t;
				while (!t.done);
				e.firstDone = !0;
			}
			do
				if (t = e.iterator.next(), !t.done) return t;
			while (!t.done);
			return DONE_RESULT;
		});
	}
	join(e = ",") {
		let t = this.iterator(), n = "", r, i = !1;
		do
			r = t.next(), r.done || (i && (n += e), n += toString(r.value)), i = !0;
		while (!r.done);
		return n;
	}
	indexOf(e, t = 0) {
		let n = this.iterator(), r = 0, i = n.next();
		for (; !i.done;) {
			if (r >= t && i.value === e) return r;
			i = n.next(), r++;
		}
		return -1;
	}
	every(e) {
		let t = this.iterator(), n = t.next();
		for (; !n.done;) {
			if (!e(n.value)) return !1;
			n = t.next();
		}
		return !0;
	}
	some(e) {
		let t = this.iterator(), n = t.next();
		for (; !n.done;) {
			if (e(n.value)) return !0;
			n = t.next();
		}
		return !1;
	}
	forEach(e) {
		let t = this.iterator(), n = 0, r = t.next();
		for (; !r.done;) e(r.value, n), r = t.next(), n++;
	}
	map(t) {
		return new e(this.startFn, (e) => {
			let { done: n, value: r } = this.nextFn(e);
			return n ? DONE_RESULT : {
				done: !1,
				value: t(r)
			};
		});
	}
	filter(t) {
		return new e(this.startFn, (e) => {
			let n;
			do
				if (n = this.nextFn(e), !n.done && t(n.value)) return n;
			while (!n.done);
			return DONE_RESULT;
		});
	}
	nonNullable() {
		return this.filter((e) => e != null);
	}
	reduce(e, t) {
		let n = this.iterator(), r = t, i = n.next();
		for (; !i.done;) r = r === void 0 ? i.value : e(r, i.value), i = n.next();
		return r;
	}
	reduceRight(e, t) {
		return this.recursiveReduce(this.iterator(), e, t);
	}
	recursiveReduce(e, t, n) {
		let r = e.next();
		if (r.done) return n;
		let i = this.recursiveReduce(e, t, n);
		return i === void 0 ? r.value : t(i, r.value);
	}
	find(e) {
		let t = this.iterator(), n = t.next();
		for (; !n.done;) {
			if (e(n.value)) return n.value;
			n = t.next();
		}
	}
	findIndex(e) {
		let t = this.iterator(), n = 0, r = t.next();
		for (; !r.done;) {
			if (e(r.value)) return n;
			r = t.next(), n++;
		}
		return -1;
	}
	includes(e) {
		let t = this.iterator(), n = t.next();
		for (; !n.done;) {
			if (n.value === e) return !0;
			n = t.next();
		}
		return !1;
	}
	flatMap(t) {
		return new e(() => ({ this: this.startFn() }), (e) => {
			do {
				if (e.iterator) {
					let t = e.iterator.next();
					if (t.done) e.iterator = void 0;
					else return t;
				}
				let { done: n, value: r } = this.nextFn(e.this);
				if (!n) {
					let n = t(r);
					if (isIterable(n)) e.iterator = n[Symbol.iterator]();
					else return {
						done: !1,
						value: n
					};
				}
			} while (e.iterator);
			return DONE_RESULT;
		});
	}
	flat(t) {
		if (t === void 0 && (t = 1), t <= 0) return this;
		let n = t > 1 ? this.flat(t - 1) : this;
		return new e(() => ({ this: n.startFn() }), (e) => {
			do {
				if (e.iterator) {
					let t = e.iterator.next();
					if (t.done) e.iterator = void 0;
					else return t;
				}
				let { done: t, value: r } = n.nextFn(e.this);
				if (!t) if (isIterable(r)) e.iterator = r[Symbol.iterator]();
				else return {
					done: !1,
					value: r
				};
			} while (e.iterator);
			return DONE_RESULT;
		});
	}
	head() {
		let e = this.iterator().next();
		if (!e.done) return e.value;
	}
	tail(t = 1) {
		return new e(() => {
			let e = this.startFn();
			for (let n = 0; n < t; n++) if (this.nextFn(e).done) return e;
			return e;
		}, this.nextFn);
	}
	limit(t) {
		return new e(() => ({
			size: 0,
			state: this.startFn()
		}), (e) => (e.size++, e.size > t ? DONE_RESULT : this.nextFn(e.state)));
	}
	distinct(t) {
		return new e(() => ({
			set: /* @__PURE__ */ new Set(),
			internalState: this.startFn()
		}), (e) => {
			let n;
			do
				if (n = this.nextFn(e.internalState), !n.done) {
					let r = t ? t(n.value) : n.value;
					if (!e.set.has(r)) return e.set.add(r), n;
				}
			while (!n.done);
			return DONE_RESULT;
		});
	}
	exclude(e, t) {
		let n = /* @__PURE__ */ new Set();
		for (let r of e) {
			let e = t ? t(r) : r;
			n.add(e);
		}
		return this.filter((e) => {
			let r = t ? t(e) : e;
			return !n.has(r);
		});
	}
};
function toString(e) {
	return typeof e == "string" ? e : e === void 0 ? "undefined" : typeof e.toString == "function" ? e.toString() : Object.prototype.toString.call(e);
}
__name(toString, "toString");
function isIterable(e) {
	return !!e && typeof e[Symbol.iterator] == "function";
}
__name(isIterable, "isIterable");
var EMPTY_STREAM = new StreamImpl(() => void 0, () => DONE_RESULT), DONE_RESULT = Object.freeze({
	done: !0,
	value: void 0
});
function stream(...e) {
	if (e.length === 1) {
		let t = e[0];
		if (t instanceof StreamImpl) return t;
		if (isIterable(t)) return new StreamImpl(() => t[Symbol.iterator](), (e) => e.next());
		if (typeof t.length == "number") return new StreamImpl(() => ({ index: 0 }), (e) => e.index < t.length ? {
			done: !1,
			value: t[e.index++]
		} : DONE_RESULT);
	}
	return e.length > 1 ? new StreamImpl(() => ({
		collIndex: 0,
		arrIndex: 0
	}), (t) => {
		do {
			if (t.iterator) {
				let e = t.iterator.next();
				if (!e.done) return e;
				t.iterator = void 0;
			}
			if (t.array) {
				if (t.arrIndex < t.array.length) return {
					done: !1,
					value: t.array[t.arrIndex++]
				};
				t.array = void 0, t.arrIndex = 0;
			}
			if (t.collIndex < e.length) {
				let n = e[t.collIndex++];
				isIterable(n) ? t.iterator = n[Symbol.iterator]() : n && typeof n.length == "number" && (t.array = n);
			}
		} while (t.iterator || t.array || t.collIndex < e.length);
		return DONE_RESULT;
	}) : EMPTY_STREAM;
}
__name(stream, "stream");
var TreeStreamImpl = class extends StreamImpl {
	static #e = __name(this, "TreeStreamImpl");
	constructor(e, t, n) {
		super(() => ({
			iterators: n?.includeRoot ? [[e][Symbol.iterator]()] : [t(e)[Symbol.iterator]()],
			pruned: !1
		}), (e) => {
			for (e.pruned &&= (e.iterators.pop(), !1); e.iterators.length > 0;) {
				let n = e.iterators[e.iterators.length - 1].next();
				if (n.done) e.iterators.pop();
				else return e.iterators.push(t(n.value)[Symbol.iterator]()), n;
			}
			return DONE_RESULT;
		});
	}
	iterator() {
		let e = {
			state: this.startFn(),
			next: /* @__PURE__ */ __name(() => this.nextFn(e.state), "next"),
			prune: /* @__PURE__ */ __name(() => {
				e.state.pruned = !0;
			}, "prune"),
			[Symbol.iterator]: () => e
		};
		return e;
	}
}, Reduction;
(function(e) {
	function t(e) {
		return e.reduce((e, t) => e + t, 0);
	}
	__name(t, "sum"), e.sum = t;
	function n(e) {
		return e.reduce((e, t) => e * t, 0);
	}
	__name(n, "product"), e.product = n;
	function r(e) {
		return e.reduce((e, t) => Math.min(e, t));
	}
	__name(r, "min"), e.min = r;
	function i(e) {
		return e.reduce((e, t) => Math.max(e, t));
	}
	__name(i, "max"), e.max = i;
})(Reduction ||= {});
var ast_utils_exports = {};
__export(ast_utils_exports, {
	assignMandatoryProperties: () => assignMandatoryProperties,
	copyAstNode: () => copyAstNode,
	findRootNode: () => findRootNode,
	getContainerOfType: () => getContainerOfType,
	getDocument: () => getDocument,
	getReferenceNodes: () => getReferenceNodes,
	hasContainerOfType: () => hasContainerOfType,
	linkContentToContainer: () => linkContentToContainer,
	streamAllContents: () => streamAllContents,
	streamAst: () => streamAst,
	streamContents: () => streamContents,
	streamReferences: () => streamReferences
});
function linkContentToContainer(e, t = {}) {
	for (let [n, r] of Object.entries(e)) n.startsWith("$") || (Array.isArray(r) ? r.forEach((r, i) => {
		isAstNode(r) && (r.$container = e, r.$containerProperty = n, r.$containerIndex = i, t.deep && linkContentToContainer(r, t));
	}) : isAstNode(r) && (r.$container = e, r.$containerProperty = n, t.deep && linkContentToContainer(r, t)));
}
__name(linkContentToContainer, "linkContentToContainer");
function getContainerOfType(e, t) {
	let n = e;
	for (; n;) {
		if (t(n)) return n;
		n = n.$container;
	}
}
__name(getContainerOfType, "getContainerOfType");
function hasContainerOfType(e, t) {
	let n = e;
	for (; n;) {
		if (t(n)) return !0;
		n = n.$container;
	}
	return !1;
}
__name(hasContainerOfType, "hasContainerOfType");
function getDocument(e) {
	let t = findRootNode(e).$document;
	if (!t) throw Error("AST node has no document.");
	return t;
}
__name(getDocument, "getDocument");
function findRootNode(e) {
	for (; e.$container;) e = e.$container;
	return e;
}
__name(findRootNode, "findRootNode");
function getReferenceNodes(e) {
	return isReference(e) ? e.ref ? [e.ref] : [] : isMultiReference(e) ? e.items.map((e) => e.ref) : [];
}
__name(getReferenceNodes, "getReferenceNodes");
function streamContents(e, t) {
	if (!e) throw Error("Node must be an AstNode.");
	let n = t?.range;
	return new StreamImpl(() => ({
		keys: Object.keys(e),
		keyIndex: 0,
		arrayIndex: 0
	}), (t) => {
		for (; t.keyIndex < t.keys.length;) {
			let r = t.keys[t.keyIndex];
			if (!r.startsWith("$")) {
				let i = e[r];
				if (isAstNode(i)) {
					if (t.keyIndex++, isAstNodeInRange(i, n)) return {
						done: !1,
						value: i
					};
				} else if (Array.isArray(i)) {
					for (; t.arrayIndex < i.length;) {
						let e = i[t.arrayIndex++];
						if (isAstNode(e) && isAstNodeInRange(e, n)) return {
							done: !1,
							value: e
						};
					}
					t.arrayIndex = 0;
				}
			}
			t.keyIndex++;
		}
		return DONE_RESULT;
	});
}
__name(streamContents, "streamContents");
function streamAllContents(e, t) {
	if (!e) throw Error("Root node must be an AstNode.");
	return new TreeStreamImpl(e, (e) => streamContents(e, t));
}
__name(streamAllContents, "streamAllContents");
function streamAst(e, t) {
	if (e) {
		if (t?.range && !isAstNodeInRange(e, t.range)) return new TreeStreamImpl(e, () => []);
	} else throw Error("Root node must be an AstNode.");
	return new TreeStreamImpl(e, (e) => streamContents(e, t), { includeRoot: !0 });
}
__name(streamAst, "streamAst");
function isAstNodeInRange(e, t) {
	if (!t) return !0;
	let n = e.$cstNode?.range;
	return n ? inRange(n, t) : !1;
}
__name(isAstNodeInRange, "isAstNodeInRange");
function streamReferences(e) {
	return new StreamImpl(() => ({
		keys: Object.keys(e),
		keyIndex: 0,
		arrayIndex: 0
	}), (t) => {
		for (; t.keyIndex < t.keys.length;) {
			let n = t.keys[t.keyIndex];
			if (!n.startsWith("$")) {
				let r = e[n];
				if (isReference(r) || isMultiReference(r)) return t.keyIndex++, {
					done: !1,
					value: {
						reference: r,
						container: e,
						property: n
					}
				};
				if (Array.isArray(r)) {
					for (; t.arrayIndex < r.length;) {
						let i = t.arrayIndex++, a = r[i];
						if (isReference(a) || isMultiReference(r)) return {
							done: !1,
							value: {
								reference: a,
								container: e,
								property: n,
								index: i
							}
						};
					}
					t.arrayIndex = 0;
				}
			}
			t.keyIndex++;
		}
		return DONE_RESULT;
	});
}
__name(streamReferences, "streamReferences");
function assignMandatoryProperties(e, t) {
	let n = e.getTypeMetaData(t.$type), r = t;
	for (let e of Object.values(n.properties)) e.defaultValue !== void 0 && r[e.name] === void 0 && (r[e.name] = copyDefaultValue(e.defaultValue));
}
__name(assignMandatoryProperties, "assignMandatoryProperties");
function copyDefaultValue(e) {
	return Array.isArray(e) ? [...e.map(copyDefaultValue)] : e;
}
__name(copyDefaultValue, "copyDefaultValue");
function copyAstNode(e, t, n) {
	let r = { $type: e.$type };
	n && (n.set(e, r), n.set(r, e));
	for (let [i, a] of Object.entries(e)) if (!i.startsWith("$")) if (isAstNode(a)) r[i] = copyAstNode(a, t, n);
	else if (isReference(a)) r[i] = t(r, i, a.$refNode, a.$refText, a);
	else if (Array.isArray(a)) {
		let e = [];
		for (let o of a) isAstNode(o) ? e.push(copyAstNode(o, t, n)) : isReference(o) ? e.push(t(r, i, o.$refNode, o.$refText, o)) : e.push(o);
		r[i] = e;
	} else r[i] = a;
	return linkContentToContainer(r, { deep: !0 }), r;
}
__name(copyAstNode, "copyAstNode");
var ast_exports = {};
__export(ast_exports, {
	AbstractElement: () => AbstractElement,
	AbstractParserRule: () => AbstractParserRule,
	AbstractRule: () => AbstractRule,
	AbstractType: () => AbstractType,
	Action: () => Action,
	Alternatives: () => Alternatives,
	ArrayLiteral: () => ArrayLiteral,
	ArrayType: () => ArrayType,
	Assignment: () => Assignment,
	BooleanLiteral: () => BooleanLiteral,
	CharacterRange: () => CharacterRange,
	Condition: () => Condition,
	Conjunction: () => Conjunction,
	CrossReference: () => CrossReference,
	Disjunction: () => Disjunction,
	EndOfFile: () => EndOfFile,
	Grammar: () => Grammar,
	GrammarImport: () => GrammarImport,
	Group: () => Group,
	InferredType: () => InferredType,
	InfixRule: () => InfixRule,
	InfixRuleOperatorList: () => InfixRuleOperatorList,
	InfixRuleOperators: () => InfixRuleOperators,
	Interface: () => Interface,
	Keyword: () => Keyword,
	LangiumGrammarAstReflection: () => LangiumGrammarAstReflection,
	LangiumGrammarTerminals: () => LangiumGrammarTerminals,
	NamedArgument: () => NamedArgument,
	NegatedToken: () => NegatedToken,
	Negation: () => Negation,
	NumberLiteral: () => NumberLiteral,
	Parameter: () => Parameter,
	ParameterReference: () => ParameterReference,
	ParserRule: () => ParserRule,
	ReferenceType: () => ReferenceType,
	RegexToken: () => RegexToken,
	ReturnType: () => ReturnType,
	RuleCall: () => RuleCall,
	SimpleType: () => SimpleType,
	StringLiteral: () => StringLiteral,
	TerminalAlternatives: () => TerminalAlternatives,
	TerminalElement: () => TerminalElement,
	TerminalGroup: () => TerminalGroup,
	TerminalRule: () => TerminalRule,
	TerminalRuleCall: () => TerminalRuleCall,
	Type: () => Type,
	TypeAttribute: () => TypeAttribute,
	TypeDefinition: () => TypeDefinition,
	UnionType: () => UnionType,
	UnorderedGroup: () => UnorderedGroup,
	UntilToken: () => UntilToken,
	ValueLiteral: () => ValueLiteral,
	Wildcard: () => Wildcard,
	isAbstractElement: () => isAbstractElement,
	isAbstractParserRule: () => isAbstractParserRule,
	isAbstractRule: () => isAbstractRule,
	isAbstractType: () => isAbstractType,
	isAction: () => isAction,
	isAlternatives: () => isAlternatives,
	isArrayLiteral: () => isArrayLiteral,
	isArrayType: () => isArrayType,
	isAssignment: () => isAssignment,
	isBooleanLiteral: () => isBooleanLiteral,
	isCharacterRange: () => isCharacterRange,
	isCondition: () => isCondition,
	isConjunction: () => isConjunction,
	isCrossReference: () => isCrossReference,
	isDisjunction: () => isDisjunction,
	isEndOfFile: () => isEndOfFile,
	isGrammar: () => isGrammar,
	isGrammarImport: () => isGrammarImport,
	isGroup: () => isGroup,
	isInferredType: () => isInferredType,
	isInfixRule: () => isInfixRule,
	isInfixRuleOperatorList: () => isInfixRuleOperatorList,
	isInfixRuleOperators: () => isInfixRuleOperators,
	isInterface: () => isInterface,
	isKeyword: () => isKeyword,
	isNamedArgument: () => isNamedArgument,
	isNegatedToken: () => isNegatedToken,
	isNegation: () => isNegation,
	isNumberLiteral: () => isNumberLiteral,
	isParameter: () => isParameter,
	isParameterReference: () => isParameterReference,
	isParserRule: () => isParserRule,
	isReferenceType: () => isReferenceType,
	isRegexToken: () => isRegexToken,
	isReturnType: () => isReturnType,
	isRuleCall: () => isRuleCall,
	isSimpleType: () => isSimpleType,
	isStringLiteral: () => isStringLiteral,
	isTerminalAlternatives: () => isTerminalAlternatives,
	isTerminalElement: () => isTerminalElement,
	isTerminalGroup: () => isTerminalGroup,
	isTerminalRule: () => isTerminalRule,
	isTerminalRuleCall: () => isTerminalRuleCall,
	isType: () => isType,
	isTypeAttribute: () => isTypeAttribute,
	isTypeDefinition: () => isTypeDefinition,
	isUnionType: () => isUnionType,
	isUnorderedGroup: () => isUnorderedGroup,
	isUntilToken: () => isUntilToken,
	isValueLiteral: () => isValueLiteral,
	isWildcard: () => isWildcard,
	reflection: () => reflection
});
var LangiumGrammarTerminals = {
	ID: /\^?[_a-zA-Z][\w_]*/,
	STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
	NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
	RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
	WS: /\s+/,
	ML_COMMENT: /\/\*[\s\S]*?\*\//,
	SL_COMMENT: /\/\/[^\n\r]*/
}, AbstractElement = {
	$type: "AbstractElement",
	cardinality: "cardinality"
};
function isAbstractElement(e) {
	return reflection.isInstance(e, AbstractElement.$type);
}
__name(isAbstractElement, "isAbstractElement");
var AbstractParserRule = { $type: "AbstractParserRule" };
function isAbstractParserRule(e) {
	return reflection.isInstance(e, AbstractParserRule.$type);
}
__name(isAbstractParserRule, "isAbstractParserRule");
var AbstractRule = { $type: "AbstractRule" };
function isAbstractRule(e) {
	return reflection.isInstance(e, AbstractRule.$type);
}
__name(isAbstractRule, "isAbstractRule");
var AbstractType = { $type: "AbstractType" };
function isAbstractType(e) {
	return reflection.isInstance(e, AbstractType.$type);
}
__name(isAbstractType, "isAbstractType");
var Action = {
	$type: "Action",
	cardinality: "cardinality",
	feature: "feature",
	inferredType: "inferredType",
	operator: "operator",
	type: "type"
};
function isAction(e) {
	return reflection.isInstance(e, Action.$type);
}
__name(isAction, "isAction");
var Alternatives = {
	$type: "Alternatives",
	cardinality: "cardinality",
	elements: "elements"
};
function isAlternatives(e) {
	return reflection.isInstance(e, Alternatives.$type);
}
__name(isAlternatives, "isAlternatives");
var ArrayLiteral = {
	$type: "ArrayLiteral",
	elements: "elements"
};
function isArrayLiteral(e) {
	return reflection.isInstance(e, ArrayLiteral.$type);
}
__name(isArrayLiteral, "isArrayLiteral");
var ArrayType = {
	$type: "ArrayType",
	elementType: "elementType"
};
function isArrayType(e) {
	return reflection.isInstance(e, ArrayType.$type);
}
__name(isArrayType, "isArrayType");
var Assignment = {
	$type: "Assignment",
	cardinality: "cardinality",
	feature: "feature",
	operator: "operator",
	predicate: "predicate",
	terminal: "terminal"
};
function isAssignment(e) {
	return reflection.isInstance(e, Assignment.$type);
}
__name(isAssignment, "isAssignment");
var BooleanLiteral = {
	$type: "BooleanLiteral",
	true: "true"
};
function isBooleanLiteral(e) {
	return reflection.isInstance(e, BooleanLiteral.$type);
}
__name(isBooleanLiteral, "isBooleanLiteral");
var CharacterRange = {
	$type: "CharacterRange",
	cardinality: "cardinality",
	left: "left",
	lookahead: "lookahead",
	parenthesized: "parenthesized",
	right: "right"
};
function isCharacterRange(e) {
	return reflection.isInstance(e, CharacterRange.$type);
}
__name(isCharacterRange, "isCharacterRange");
var Condition = { $type: "Condition" };
function isCondition(e) {
	return reflection.isInstance(e, Condition.$type);
}
__name(isCondition, "isCondition");
var Conjunction = {
	$type: "Conjunction",
	left: "left",
	right: "right"
};
function isConjunction(e) {
	return reflection.isInstance(e, Conjunction.$type);
}
__name(isConjunction, "isConjunction");
var CrossReference = {
	$type: "CrossReference",
	cardinality: "cardinality",
	deprecatedSyntax: "deprecatedSyntax",
	isMulti: "isMulti",
	terminal: "terminal",
	type: "type"
};
function isCrossReference(e) {
	return reflection.isInstance(e, CrossReference.$type);
}
__name(isCrossReference, "isCrossReference");
var Disjunction = {
	$type: "Disjunction",
	left: "left",
	right: "right"
};
function isDisjunction(e) {
	return reflection.isInstance(e, Disjunction.$type);
}
__name(isDisjunction, "isDisjunction");
var EndOfFile = {
	$type: "EndOfFile",
	cardinality: "cardinality"
};
function isEndOfFile(e) {
	return reflection.isInstance(e, EndOfFile.$type);
}
__name(isEndOfFile, "isEndOfFile");
var Grammar = {
	$type: "Grammar",
	imports: "imports",
	interfaces: "interfaces",
	isDeclared: "isDeclared",
	name: "name",
	rules: "rules",
	types: "types"
};
function isGrammar(e) {
	return reflection.isInstance(e, Grammar.$type);
}
__name(isGrammar, "isGrammar");
var GrammarImport = {
	$type: "GrammarImport",
	path: "path"
};
function isGrammarImport(e) {
	return reflection.isInstance(e, GrammarImport.$type);
}
__name(isGrammarImport, "isGrammarImport");
var Group = {
	$type: "Group",
	cardinality: "cardinality",
	elements: "elements",
	guardCondition: "guardCondition",
	predicate: "predicate"
};
function isGroup(e) {
	return reflection.isInstance(e, Group.$type);
}
__name(isGroup, "isGroup");
var InferredType = {
	$type: "InferredType",
	name: "name"
};
function isInferredType(e) {
	return reflection.isInstance(e, InferredType.$type);
}
__name(isInferredType, "isInferredType");
var InfixRule = {
	$type: "InfixRule",
	call: "call",
	dataType: "dataType",
	inferredType: "inferredType",
	name: "name",
	operators: "operators",
	parameters: "parameters",
	returnType: "returnType"
};
function isInfixRule(e) {
	return reflection.isInstance(e, InfixRule.$type);
}
__name(isInfixRule, "isInfixRule");
var InfixRuleOperatorList = {
	$type: "InfixRuleOperatorList",
	associativity: "associativity",
	operators: "operators"
};
function isInfixRuleOperatorList(e) {
	return reflection.isInstance(e, InfixRuleOperatorList.$type);
}
__name(isInfixRuleOperatorList, "isInfixRuleOperatorList");
var InfixRuleOperators = {
	$type: "InfixRuleOperators",
	precedences: "precedences"
};
function isInfixRuleOperators(e) {
	return reflection.isInstance(e, InfixRuleOperators.$type);
}
__name(isInfixRuleOperators, "isInfixRuleOperators");
var Interface = {
	$type: "Interface",
	attributes: "attributes",
	name: "name",
	superTypes: "superTypes"
};
function isInterface(e) {
	return reflection.isInstance(e, Interface.$type);
}
__name(isInterface, "isInterface");
var Keyword = {
	$type: "Keyword",
	cardinality: "cardinality",
	predicate: "predicate",
	value: "value"
};
function isKeyword(e) {
	return reflection.isInstance(e, Keyword.$type);
}
__name(isKeyword, "isKeyword");
var NamedArgument = {
	$type: "NamedArgument",
	calledByName: "calledByName",
	parameter: "parameter",
	value: "value"
};
function isNamedArgument(e) {
	return reflection.isInstance(e, NamedArgument.$type);
}
__name(isNamedArgument, "isNamedArgument");
var NegatedToken = {
	$type: "NegatedToken",
	cardinality: "cardinality",
	lookahead: "lookahead",
	parenthesized: "parenthesized",
	terminal: "terminal"
};
function isNegatedToken(e) {
	return reflection.isInstance(e, NegatedToken.$type);
}
__name(isNegatedToken, "isNegatedToken");
var Negation = {
	$type: "Negation",
	value: "value"
};
function isNegation(e) {
	return reflection.isInstance(e, Negation.$type);
}
__name(isNegation, "isNegation");
var NumberLiteral = {
	$type: "NumberLiteral",
	value: "value"
};
function isNumberLiteral(e) {
	return reflection.isInstance(e, NumberLiteral.$type);
}
__name(isNumberLiteral, "isNumberLiteral");
var Parameter = {
	$type: "Parameter",
	name: "name"
};
function isParameter(e) {
	return reflection.isInstance(e, Parameter.$type);
}
__name(isParameter, "isParameter");
var ParameterReference = {
	$type: "ParameterReference",
	parameter: "parameter"
};
function isParameterReference(e) {
	return reflection.isInstance(e, ParameterReference.$type);
}
__name(isParameterReference, "isParameterReference");
var ParserRule = {
	$type: "ParserRule",
	dataType: "dataType",
	definition: "definition",
	entry: "entry",
	fragment: "fragment",
	inferredType: "inferredType",
	name: "name",
	parameters: "parameters",
	returnType: "returnType"
};
function isParserRule(e) {
	return reflection.isInstance(e, ParserRule.$type);
}
__name(isParserRule, "isParserRule");
var ReferenceType = {
	$type: "ReferenceType",
	isMulti: "isMulti",
	referenceType: "referenceType"
};
function isReferenceType(e) {
	return reflection.isInstance(e, ReferenceType.$type);
}
__name(isReferenceType, "isReferenceType");
var RegexToken = {
	$type: "RegexToken",
	cardinality: "cardinality",
	lookahead: "lookahead",
	parenthesized: "parenthesized",
	regex: "regex"
};
function isRegexToken(e) {
	return reflection.isInstance(e, RegexToken.$type);
}
__name(isRegexToken, "isRegexToken");
var ReturnType = {
	$type: "ReturnType",
	name: "name"
};
function isReturnType(e) {
	return reflection.isInstance(e, ReturnType.$type);
}
__name(isReturnType, "isReturnType");
var RuleCall = {
	$type: "RuleCall",
	arguments: "arguments",
	cardinality: "cardinality",
	predicate: "predicate",
	rule: "rule"
};
function isRuleCall(e) {
	return reflection.isInstance(e, RuleCall.$type);
}
__name(isRuleCall, "isRuleCall");
var SimpleType = {
	$type: "SimpleType",
	primitiveType: "primitiveType",
	stringType: "stringType",
	typeRef: "typeRef"
};
function isSimpleType(e) {
	return reflection.isInstance(e, SimpleType.$type);
}
__name(isSimpleType, "isSimpleType");
var StringLiteral = {
	$type: "StringLiteral",
	value: "value"
};
function isStringLiteral(e) {
	return reflection.isInstance(e, StringLiteral.$type);
}
__name(isStringLiteral, "isStringLiteral");
var TerminalAlternatives = {
	$type: "TerminalAlternatives",
	cardinality: "cardinality",
	elements: "elements",
	lookahead: "lookahead",
	parenthesized: "parenthesized"
};
function isTerminalAlternatives(e) {
	return reflection.isInstance(e, TerminalAlternatives.$type);
}
__name(isTerminalAlternatives, "isTerminalAlternatives");
var TerminalElement = {
	$type: "TerminalElement",
	cardinality: "cardinality",
	lookahead: "lookahead",
	parenthesized: "parenthesized"
};
function isTerminalElement(e) {
	return reflection.isInstance(e, TerminalElement.$type);
}
__name(isTerminalElement, "isTerminalElement");
var TerminalGroup = {
	$type: "TerminalGroup",
	cardinality: "cardinality",
	elements: "elements",
	lookahead: "lookahead",
	parenthesized: "parenthesized"
};
function isTerminalGroup(e) {
	return reflection.isInstance(e, TerminalGroup.$type);
}
__name(isTerminalGroup, "isTerminalGroup");
var TerminalRule = {
	$type: "TerminalRule",
	definition: "definition",
	fragment: "fragment",
	hidden: "hidden",
	name: "name",
	type: "type"
};
function isTerminalRule(e) {
	return reflection.isInstance(e, TerminalRule.$type);
}
__name(isTerminalRule, "isTerminalRule");
var TerminalRuleCall = {
	$type: "TerminalRuleCall",
	cardinality: "cardinality",
	lookahead: "lookahead",
	parenthesized: "parenthesized",
	rule: "rule"
};
function isTerminalRuleCall(e) {
	return reflection.isInstance(e, TerminalRuleCall.$type);
}
__name(isTerminalRuleCall, "isTerminalRuleCall");
var Type = {
	$type: "Type",
	name: "name",
	type: "type"
};
function isType(e) {
	return reflection.isInstance(e, Type.$type);
}
__name(isType, "isType");
var TypeAttribute = {
	$type: "TypeAttribute",
	defaultValue: "defaultValue",
	isOptional: "isOptional",
	name: "name",
	type: "type"
};
function isTypeAttribute(e) {
	return reflection.isInstance(e, TypeAttribute.$type);
}
__name(isTypeAttribute, "isTypeAttribute");
var TypeDefinition = { $type: "TypeDefinition" };
function isTypeDefinition(e) {
	return reflection.isInstance(e, TypeDefinition.$type);
}
__name(isTypeDefinition, "isTypeDefinition");
var UnionType = {
	$type: "UnionType",
	types: "types"
};
function isUnionType(e) {
	return reflection.isInstance(e, UnionType.$type);
}
__name(isUnionType, "isUnionType");
var UnorderedGroup = {
	$type: "UnorderedGroup",
	cardinality: "cardinality",
	elements: "elements"
};
function isUnorderedGroup(e) {
	return reflection.isInstance(e, UnorderedGroup.$type);
}
__name(isUnorderedGroup, "isUnorderedGroup");
var UntilToken = {
	$type: "UntilToken",
	cardinality: "cardinality",
	lookahead: "lookahead",
	parenthesized: "parenthesized",
	terminal: "terminal"
};
function isUntilToken(e) {
	return reflection.isInstance(e, UntilToken.$type);
}
__name(isUntilToken, "isUntilToken");
var ValueLiteral = { $type: "ValueLiteral" };
function isValueLiteral(e) {
	return reflection.isInstance(e, ValueLiteral.$type);
}
__name(isValueLiteral, "isValueLiteral");
var Wildcard = {
	$type: "Wildcard",
	cardinality: "cardinality",
	lookahead: "lookahead",
	parenthesized: "parenthesized"
};
function isWildcard(e) {
	return reflection.isInstance(e, Wildcard.$type);
}
__name(isWildcard, "isWildcard");
var LangiumGrammarAstReflection = class extends AbstractAstReflection {
	static #e = __name(this, "LangiumGrammarAstReflection");
	constructor() {
		super(...arguments), this.types = {
			AbstractElement: {
				name: AbstractElement.$type,
				properties: { cardinality: { name: AbstractElement.cardinality } },
				superTypes: []
			},
			AbstractParserRule: {
				name: AbstractParserRule.$type,
				properties: {},
				superTypes: [AbstractRule.$type, AbstractType.$type]
			},
			AbstractRule: {
				name: AbstractRule.$type,
				properties: {},
				superTypes: []
			},
			AbstractType: {
				name: AbstractType.$type,
				properties: {},
				superTypes: []
			},
			Action: {
				name: Action.$type,
				properties: {
					cardinality: { name: Action.cardinality },
					feature: { name: Action.feature },
					inferredType: { name: Action.inferredType },
					operator: { name: Action.operator },
					type: {
						name: Action.type,
						referenceType: AbstractType.$type
					}
				},
				superTypes: [AbstractElement.$type]
			},
			Alternatives: {
				name: Alternatives.$type,
				properties: {
					cardinality: { name: Alternatives.cardinality },
					elements: {
						name: Alternatives.elements,
						defaultValue: []
					}
				},
				superTypes: [AbstractElement.$type]
			},
			ArrayLiteral: {
				name: ArrayLiteral.$type,
				properties: { elements: {
					name: ArrayLiteral.elements,
					defaultValue: []
				} },
				superTypes: [ValueLiteral.$type]
			},
			ArrayType: {
				name: ArrayType.$type,
				properties: { elementType: { name: ArrayType.elementType } },
				superTypes: [TypeDefinition.$type]
			},
			Assignment: {
				name: Assignment.$type,
				properties: {
					cardinality: { name: Assignment.cardinality },
					feature: { name: Assignment.feature },
					operator: { name: Assignment.operator },
					predicate: { name: Assignment.predicate },
					terminal: { name: Assignment.terminal }
				},
				superTypes: [AbstractElement.$type]
			},
			BooleanLiteral: {
				name: BooleanLiteral.$type,
				properties: { true: {
					name: BooleanLiteral.true,
					defaultValue: !1
				} },
				superTypes: [Condition.$type, ValueLiteral.$type]
			},
			CharacterRange: {
				name: CharacterRange.$type,
				properties: {
					cardinality: { name: CharacterRange.cardinality },
					left: { name: CharacterRange.left },
					lookahead: { name: CharacterRange.lookahead },
					parenthesized: {
						name: CharacterRange.parenthesized,
						defaultValue: !1
					},
					right: { name: CharacterRange.right }
				},
				superTypes: [TerminalElement.$type]
			},
			Condition: {
				name: Condition.$type,
				properties: {},
				superTypes: []
			},
			Conjunction: {
				name: Conjunction.$type,
				properties: {
					left: { name: Conjunction.left },
					right: { name: Conjunction.right }
				},
				superTypes: [Condition.$type]
			},
			CrossReference: {
				name: CrossReference.$type,
				properties: {
					cardinality: { name: CrossReference.cardinality },
					deprecatedSyntax: {
						name: CrossReference.deprecatedSyntax,
						defaultValue: !1
					},
					isMulti: {
						name: CrossReference.isMulti,
						defaultValue: !1
					},
					terminal: { name: CrossReference.terminal },
					type: {
						name: CrossReference.type,
						referenceType: AbstractType.$type
					}
				},
				superTypes: [AbstractElement.$type]
			},
			Disjunction: {
				name: Disjunction.$type,
				properties: {
					left: { name: Disjunction.left },
					right: { name: Disjunction.right }
				},
				superTypes: [Condition.$type]
			},
			EndOfFile: {
				name: EndOfFile.$type,
				properties: { cardinality: { name: EndOfFile.cardinality } },
				superTypes: [AbstractElement.$type]
			},
			Grammar: {
				name: Grammar.$type,
				properties: {
					imports: {
						name: Grammar.imports,
						defaultValue: []
					},
					interfaces: {
						name: Grammar.interfaces,
						defaultValue: []
					},
					isDeclared: {
						name: Grammar.isDeclared,
						defaultValue: !1
					},
					name: { name: Grammar.name },
					rules: {
						name: Grammar.rules,
						defaultValue: []
					},
					types: {
						name: Grammar.types,
						defaultValue: []
					}
				},
				superTypes: []
			},
			GrammarImport: {
				name: GrammarImport.$type,
				properties: { path: { name: GrammarImport.path } },
				superTypes: []
			},
			Group: {
				name: Group.$type,
				properties: {
					cardinality: { name: Group.cardinality },
					elements: {
						name: Group.elements,
						defaultValue: []
					},
					guardCondition: { name: Group.guardCondition },
					predicate: { name: Group.predicate }
				},
				superTypes: [AbstractElement.$type]
			},
			InferredType: {
				name: InferredType.$type,
				properties: { name: { name: InferredType.name } },
				superTypes: [AbstractType.$type]
			},
			InfixRule: {
				name: InfixRule.$type,
				properties: {
					call: { name: InfixRule.call },
					dataType: { name: InfixRule.dataType },
					inferredType: { name: InfixRule.inferredType },
					name: { name: InfixRule.name },
					operators: { name: InfixRule.operators },
					parameters: {
						name: InfixRule.parameters,
						defaultValue: []
					},
					returnType: {
						name: InfixRule.returnType,
						referenceType: AbstractType.$type
					}
				},
				superTypes: [AbstractParserRule.$type]
			},
			InfixRuleOperatorList: {
				name: InfixRuleOperatorList.$type,
				properties: {
					associativity: { name: InfixRuleOperatorList.associativity },
					operators: {
						name: InfixRuleOperatorList.operators,
						defaultValue: []
					}
				},
				superTypes: []
			},
			InfixRuleOperators: {
				name: InfixRuleOperators.$type,
				properties: { precedences: {
					name: InfixRuleOperators.precedences,
					defaultValue: []
				} },
				superTypes: []
			},
			Interface: {
				name: Interface.$type,
				properties: {
					attributes: {
						name: Interface.attributes,
						defaultValue: []
					},
					name: { name: Interface.name },
					superTypes: {
						name: Interface.superTypes,
						defaultValue: [],
						referenceType: AbstractType.$type
					}
				},
				superTypes: [AbstractType.$type]
			},
			Keyword: {
				name: Keyword.$type,
				properties: {
					cardinality: { name: Keyword.cardinality },
					predicate: { name: Keyword.predicate },
					value: { name: Keyword.value }
				},
				superTypes: [AbstractElement.$type]
			},
			NamedArgument: {
				name: NamedArgument.$type,
				properties: {
					calledByName: {
						name: NamedArgument.calledByName,
						defaultValue: !1
					},
					parameter: {
						name: NamedArgument.parameter,
						referenceType: Parameter.$type
					},
					value: { name: NamedArgument.value }
				},
				superTypes: []
			},
			NegatedToken: {
				name: NegatedToken.$type,
				properties: {
					cardinality: { name: NegatedToken.cardinality },
					lookahead: { name: NegatedToken.lookahead },
					parenthesized: {
						name: NegatedToken.parenthesized,
						defaultValue: !1
					},
					terminal: { name: NegatedToken.terminal }
				},
				superTypes: [TerminalElement.$type]
			},
			Negation: {
				name: Negation.$type,
				properties: { value: { name: Negation.value } },
				superTypes: [Condition.$type]
			},
			NumberLiteral: {
				name: NumberLiteral.$type,
				properties: { value: { name: NumberLiteral.value } },
				superTypes: [ValueLiteral.$type]
			},
			Parameter: {
				name: Parameter.$type,
				properties: { name: { name: Parameter.name } },
				superTypes: []
			},
			ParameterReference: {
				name: ParameterReference.$type,
				properties: { parameter: {
					name: ParameterReference.parameter,
					referenceType: Parameter.$type
				} },
				superTypes: [Condition.$type]
			},
			ParserRule: {
				name: ParserRule.$type,
				properties: {
					dataType: { name: ParserRule.dataType },
					definition: { name: ParserRule.definition },
					entry: {
						name: ParserRule.entry,
						defaultValue: !1
					},
					fragment: {
						name: ParserRule.fragment,
						defaultValue: !1
					},
					inferredType: { name: ParserRule.inferredType },
					name: { name: ParserRule.name },
					parameters: {
						name: ParserRule.parameters,
						defaultValue: []
					},
					returnType: {
						name: ParserRule.returnType,
						referenceType: AbstractType.$type
					}
				},
				superTypes: [AbstractParserRule.$type]
			},
			ReferenceType: {
				name: ReferenceType.$type,
				properties: {
					isMulti: {
						name: ReferenceType.isMulti,
						defaultValue: !1
					},
					referenceType: { name: ReferenceType.referenceType }
				},
				superTypes: [TypeDefinition.$type]
			},
			RegexToken: {
				name: RegexToken.$type,
				properties: {
					cardinality: { name: RegexToken.cardinality },
					lookahead: { name: RegexToken.lookahead },
					parenthesized: {
						name: RegexToken.parenthesized,
						defaultValue: !1
					},
					regex: { name: RegexToken.regex }
				},
				superTypes: [TerminalElement.$type]
			},
			ReturnType: {
				name: ReturnType.$type,
				properties: { name: { name: ReturnType.name } },
				superTypes: []
			},
			RuleCall: {
				name: RuleCall.$type,
				properties: {
					arguments: {
						name: RuleCall.arguments,
						defaultValue: []
					},
					cardinality: { name: RuleCall.cardinality },
					predicate: { name: RuleCall.predicate },
					rule: {
						name: RuleCall.rule,
						referenceType: AbstractRule.$type
					}
				},
				superTypes: [AbstractElement.$type]
			},
			SimpleType: {
				name: SimpleType.$type,
				properties: {
					primitiveType: { name: SimpleType.primitiveType },
					stringType: { name: SimpleType.stringType },
					typeRef: {
						name: SimpleType.typeRef,
						referenceType: AbstractType.$type
					}
				},
				superTypes: [TypeDefinition.$type]
			},
			StringLiteral: {
				name: StringLiteral.$type,
				properties: { value: { name: StringLiteral.value } },
				superTypes: [ValueLiteral.$type]
			},
			TerminalAlternatives: {
				name: TerminalAlternatives.$type,
				properties: {
					cardinality: { name: TerminalAlternatives.cardinality },
					elements: {
						name: TerminalAlternatives.elements,
						defaultValue: []
					},
					lookahead: { name: TerminalAlternatives.lookahead },
					parenthesized: {
						name: TerminalAlternatives.parenthesized,
						defaultValue: !1
					}
				},
				superTypes: [TerminalElement.$type]
			},
			TerminalElement: {
				name: TerminalElement.$type,
				properties: {
					cardinality: { name: TerminalElement.cardinality },
					lookahead: { name: TerminalElement.lookahead },
					parenthesized: {
						name: TerminalElement.parenthesized,
						defaultValue: !1
					}
				},
				superTypes: [AbstractElement.$type]
			},
			TerminalGroup: {
				name: TerminalGroup.$type,
				properties: {
					cardinality: { name: TerminalGroup.cardinality },
					elements: {
						name: TerminalGroup.elements,
						defaultValue: []
					},
					lookahead: { name: TerminalGroup.lookahead },
					parenthesized: {
						name: TerminalGroup.parenthesized,
						defaultValue: !1
					}
				},
				superTypes: [TerminalElement.$type]
			},
			TerminalRule: {
				name: TerminalRule.$type,
				properties: {
					definition: { name: TerminalRule.definition },
					fragment: {
						name: TerminalRule.fragment,
						defaultValue: !1
					},
					hidden: {
						name: TerminalRule.hidden,
						defaultValue: !1
					},
					name: { name: TerminalRule.name },
					type: { name: TerminalRule.type }
				},
				superTypes: [AbstractRule.$type]
			},
			TerminalRuleCall: {
				name: TerminalRuleCall.$type,
				properties: {
					cardinality: { name: TerminalRuleCall.cardinality },
					lookahead: { name: TerminalRuleCall.lookahead },
					parenthesized: {
						name: TerminalRuleCall.parenthesized,
						defaultValue: !1
					},
					rule: {
						name: TerminalRuleCall.rule,
						referenceType: TerminalRule.$type
					}
				},
				superTypes: [TerminalElement.$type]
			},
			Type: {
				name: Type.$type,
				properties: {
					name: { name: Type.name },
					type: { name: Type.type }
				},
				superTypes: [AbstractType.$type]
			},
			TypeAttribute: {
				name: TypeAttribute.$type,
				properties: {
					defaultValue: { name: TypeAttribute.defaultValue },
					isOptional: {
						name: TypeAttribute.isOptional,
						defaultValue: !1
					},
					name: { name: TypeAttribute.name },
					type: { name: TypeAttribute.type }
				},
				superTypes: []
			},
			TypeDefinition: {
				name: TypeDefinition.$type,
				properties: {},
				superTypes: []
			},
			UnionType: {
				name: UnionType.$type,
				properties: { types: {
					name: UnionType.types,
					defaultValue: []
				} },
				superTypes: [TypeDefinition.$type]
			},
			UnorderedGroup: {
				name: UnorderedGroup.$type,
				properties: {
					cardinality: { name: UnorderedGroup.cardinality },
					elements: {
						name: UnorderedGroup.elements,
						defaultValue: []
					}
				},
				superTypes: [AbstractElement.$type]
			},
			UntilToken: {
				name: UntilToken.$type,
				properties: {
					cardinality: { name: UntilToken.cardinality },
					lookahead: { name: UntilToken.lookahead },
					parenthesized: {
						name: UntilToken.parenthesized,
						defaultValue: !1
					},
					terminal: { name: UntilToken.terminal }
				},
				superTypes: [TerminalElement.$type]
			},
			ValueLiteral: {
				name: ValueLiteral.$type,
				properties: {},
				superTypes: []
			},
			Wildcard: {
				name: Wildcard.$type,
				properties: {
					cardinality: { name: Wildcard.cardinality },
					lookahead: { name: Wildcard.lookahead },
					parenthesized: {
						name: Wildcard.parenthesized,
						defaultValue: !1
					}
				},
				superTypes: [TerminalElement.$type]
			}
		};
	}
}, reflection = new LangiumGrammarAstReflection();
function getDatatypeNode(e) {
	let t = e, n = !1;
	for (; t;) {
		let e = getContainerOfType(t.grammarSource, isParserRule);
		if (e && e.dataType) t = t.container, n = !0;
		else if (n) return t;
		else return;
	}
}
__name(getDatatypeNode, "getDatatypeNode");
function streamCst(e) {
	return new TreeStreamImpl(e, (e) => isCompositeCstNode(e) ? e.content : [], { includeRoot: !0 });
}
__name(streamCst, "streamCst");
function flattenCst(e) {
	return streamCst(e).filter(isLeafCstNode);
}
__name(flattenCst, "flattenCst");
function isChildNode(e, t) {
	for (; e.container;) if (e = e.container, e === t) return !0;
	return !1;
}
__name(isChildNode, "isChildNode");
function tokenToRange(e) {
	return {
		start: {
			character: e.startColumn - 1,
			line: e.startLine - 1
		},
		end: {
			character: e.endColumn,
			line: e.endLine - 1
		}
	};
}
__name(tokenToRange, "tokenToRange");
function toDocumentSegment(e) {
	if (!e) return;
	let { offset: t, end: n, range: r } = e;
	return {
		range: r,
		offset: t,
		end: n,
		length: n - t
	};
}
__name(toDocumentSegment, "toDocumentSegment");
var RangeComparison;
(function(e) {
	e[e.Before = 0] = "Before", e[e.After = 1] = "After", e[e.OverlapFront = 2] = "OverlapFront", e[e.OverlapBack = 3] = "OverlapBack", e[e.Inside = 4] = "Inside", e[e.Outside = 5] = "Outside";
})(RangeComparison ||= {});
function compareRange(e, t) {
	if (e.end.line < t.start.line || e.end.line === t.start.line && e.end.character <= t.start.character) return RangeComparison.Before;
	if (e.start.line > t.end.line || e.start.line === t.end.line && e.start.character >= t.end.character) return RangeComparison.After;
	let n = e.start.line > t.start.line || e.start.line === t.start.line && e.start.character >= t.start.character, r = e.end.line < t.end.line || e.end.line === t.end.line && e.end.character <= t.end.character;
	return n && r ? RangeComparison.Inside : n ? RangeComparison.OverlapBack : r ? RangeComparison.OverlapFront : RangeComparison.Outside;
}
__name(compareRange, "compareRange");
function inRange(e, t) {
	return compareRange(e, t) > RangeComparison.After;
}
__name(inRange, "inRange");
var DefaultNameRegexp = /^[\w\p{L}]$/u;
function findDeclarationNodeAtOffset(e, t, n = DefaultNameRegexp) {
	if (e) {
		if (t > 0) {
			let r = t - e.offset, i = e.text.charAt(r);
			n.test(i) || t--;
		}
		return findLeafNodeAtOffset(e, t);
	}
}
__name(findDeclarationNodeAtOffset, "findDeclarationNodeAtOffset");
function findCommentNode(e, t) {
	if (e) {
		let n = getPreviousNode(e, !0);
		if (n && isCommentNode(n, t)) return n;
		if (isRootCstNode(e)) {
			let n = e.content.findIndex((e) => !e.hidden);
			for (let r = n - 1; r >= 0; r--) {
				let n = e.content[r];
				if (isCommentNode(n, t)) return n;
			}
		}
	}
}
__name(findCommentNode, "findCommentNode");
function isCommentNode(e, t) {
	return isLeafCstNode(e) && t.includes(e.tokenType.name);
}
__name(isCommentNode, "isCommentNode");
function findLeafNodeAtOffset(e, t) {
	if (isLeafCstNode(e)) return e;
	if (isCompositeCstNode(e)) {
		let n = binarySearch(e, t, !1);
		if (n) return findLeafNodeAtOffset(n, t);
	}
}
__name(findLeafNodeAtOffset, "findLeafNodeAtOffset");
function findLeafNodeBeforeOffset(e, t) {
	if (isLeafCstNode(e)) return e;
	if (isCompositeCstNode(e)) {
		let n = binarySearch(e, t, !0);
		if (n) return findLeafNodeBeforeOffset(n, t);
	}
}
__name(findLeafNodeBeforeOffset, "findLeafNodeBeforeOffset");
function binarySearch(e, t, n) {
	let r = 0, i = e.content.length - 1, a;
	for (; r <= i;) {
		let o = Math.floor((r + i) / 2), s = e.content[o];
		if (s.offset <= t && s.end > t) return s;
		s.end <= t ? (a = n ? s : void 0, r = o + 1) : i = o - 1;
	}
	return a;
}
__name(binarySearch, "binarySearch");
function getPreviousNode(e, t = !0) {
	for (; e.container;) {
		let n = e.container, r = n.content.indexOf(e);
		for (; r > 0;) {
			r--;
			let e = n.content[r];
			if (t || !e.hidden) return e;
		}
		e = n;
	}
}
__name(getPreviousNode, "getPreviousNode");
function getNextNode(e, t = !0) {
	for (; e.container;) {
		let n = e.container, r = n.content.indexOf(e), i = n.content.length - 1;
		for (; r < i;) {
			r++;
			let e = n.content[r];
			if (t || !e.hidden) return e;
		}
		e = n;
	}
}
__name(getNextNode, "getNextNode");
function getStartlineNode(e) {
	if (e.range.start.character === 0) return e;
	let t = e.range.start.line, n = e, r;
	for (; e.container;) {
		let i = e.container, a = r ?? i.content.indexOf(e);
		if (a === 0 ? (e = i, r = void 0) : (r = a - 1, e = i.content[r]), e.range.start.line !== t) break;
		n = e;
	}
	return n;
}
__name(getStartlineNode, "getStartlineNode");
function getInteriorNodes(e, t) {
	let n = getCommonParent(e, t);
	return n ? n.parent.content.slice(n.a + 1, n.b) : [];
}
__name(getInteriorNodes, "getInteriorNodes");
function getCommonParent(e, t) {
	let n = getParentChain(e), r = getParentChain(t), i;
	for (let e = 0; e < n.length && e < r.length; e++) {
		let t = n[e], a = r[e];
		if (t.parent === a.parent) i = {
			parent: t.parent,
			a: t.index,
			b: a.index
		};
		else break;
	}
	return i;
}
__name(getCommonParent, "getCommonParent");
function getParentChain(e) {
	let t = [];
	for (; e.container;) {
		let n = e.container, r = n.content.indexOf(e);
		t.push({
			parent: n,
			index: r
		}), e = n;
	}
	return t.reverse();
}
__name(getParentChain, "getParentChain");
var grammar_utils_exports = {};
__export(grammar_utils_exports, {
	findAssignment: () => findAssignment,
	findNameAssignment: () => findNameAssignment,
	findNodeForKeyword: () => findNodeForKeyword,
	findNodeForProperty: () => findNodeForProperty,
	findNodesForKeyword: () => findNodesForKeyword,
	findNodesForKeywordInternal: () => findNodesForKeywordInternal,
	findNodesForProperty: () => findNodesForProperty,
	getActionAtElement: () => getActionAtElement,
	getActionType: () => getActionType,
	getAllReachableRules: () => getAllReachableRules,
	getAllRulesUsedForCrossReferences: () => getAllRulesUsedForCrossReferences,
	getCrossReferenceTerminal: () => getCrossReferenceTerminal,
	getEntryRule: () => getEntryRule,
	getExplicitRuleType: () => getExplicitRuleType,
	getHiddenRules: () => getHiddenRules,
	getRuleType: () => getRuleType,
	getRuleTypeName: () => getRuleTypeName,
	getTypeName: () => getTypeName,
	isArrayCardinality: () => isArrayCardinality,
	isArrayOperator: () => isArrayOperator,
	isCommentTerminal: () => isCommentTerminal,
	isDataType: () => isDataType,
	isDataTypeRule: () => isDataTypeRule,
	isOptionalCardinality: () => isOptionalCardinality,
	terminalRegex: () => terminalRegex
});
var ErrorWithLocation = class extends Error {
	static #e = __name(this, "ErrorWithLocation");
	constructor(e, t) {
		super(e ? `${t} at ${e.range.start.line}:${e.range.start.character}` : t);
	}
};
function assertUnreachable(e, t = "Error: Got unexpected value.") {
	throw Error(t);
}
__name(assertUnreachable, "assertUnreachable");
function assertCondition(e, t = "Error: Condition is violated.") {
	if (!e) throw Error(t);
}
__name(assertCondition, "assertCondition");
var regexp_utils_exports = {};
__export(regexp_utils_exports, {
	NEWLINE_REGEXP: () => NEWLINE_REGEXP,
	escapeRegExp: () => escapeRegExp,
	getTerminalParts: () => getTerminalParts,
	isMultilineComment: () => isMultilineComment,
	isWhitespace: () => isWhitespace,
	partialMatches: () => partialMatches,
	partialRegExp: () => partialRegExp,
	whitespaceCharacters: () => whitespaceCharacters
});
function cc(e) {
	return e.charCodeAt(0);
}
__name(cc, "cc");
function insertToSet(e, t) {
	Array.isArray(e) ? e.forEach(function(e) {
		t.push(e);
	}) : t.push(e);
}
__name(insertToSet, "insertToSet");
function addFlag(e, t) {
	if (e[t] === !0) throw "duplicate flag " + t;
	e[t], e[t] = !0;
}
__name(addFlag, "addFlag");
function ASSERT_EXISTS(e) {
	if (e === void 0) throw Error("Internal Error - Should never get here!");
	return !0;
}
__name(ASSERT_EXISTS, "ASSERT_EXISTS");
function ASSERT_NEVER_REACH_HERE() {
	throw Error("Internal Error - Should never get here!");
}
__name(ASSERT_NEVER_REACH_HERE, "ASSERT_NEVER_REACH_HERE");
function isCharacter(e) {
	return e.type === "Character";
}
__name(isCharacter, "isCharacter");
var digitsCharCodes = [];
for (let e = cc("0"); e <= cc("9"); e++) digitsCharCodes.push(e);
var wordCharCodes = [cc("_")].concat(digitsCharCodes);
for (let e = cc("a"); e <= cc("z"); e++) wordCharCodes.push(e);
for (let e = cc("A"); e <= cc("Z"); e++) wordCharCodes.push(e);
var whitespaceCodes = [
	cc(" "),
	cc("\f"),
	cc("\n"),
	cc("\r"),
	cc("	"),
	cc("\v"),
	cc("	"),
	cc("\xA0"),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc(" "),
	cc("\u2028"),
	cc("\u2029"),
	cc(" "),
	cc(" "),
	cc("　"),
	cc("﻿")
], hexDigitPattern = /[0-9a-fA-F]/, decimalPattern = /[0-9]/, decimalPatternNoZero = /[1-9]/, RegExpParser = class {
	static #e = __name(this, "RegExpParser");
	constructor() {
		this.idx = 0, this.input = "", this.groupIdx = 0;
	}
	saveState() {
		return {
			idx: this.idx,
			input: this.input,
			groupIdx: this.groupIdx
		};
	}
	restoreState(e) {
		this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
	}
	pattern(e) {
		this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
		let t = this.disjunction();
		this.consumeChar("/");
		let n = {
			type: "Flags",
			loc: {
				begin: this.idx,
				end: e.length
			},
			global: !1,
			ignoreCase: !1,
			multiLine: !1,
			unicode: !1,
			sticky: !1
		};
		for (; this.isRegExpFlag();) switch (this.popChar()) {
			case "g":
				addFlag(n, "global");
				break;
			case "i":
				addFlag(n, "ignoreCase");
				break;
			case "m":
				addFlag(n, "multiLine");
				break;
			case "u":
				addFlag(n, "unicode");
				break;
			case "y":
				addFlag(n, "sticky");
				break;
		}
		if (this.idx !== this.input.length) throw Error("Redundant input: " + this.input.substring(this.idx));
		return {
			type: "Pattern",
			flags: n,
			value: t,
			loc: this.loc(0)
		};
	}
	disjunction() {
		let e = [], t = this.idx;
		for (e.push(this.alternative()); this.peekChar() === "|";) this.consumeChar("|"), e.push(this.alternative());
		return {
			type: "Disjunction",
			value: e,
			loc: this.loc(t)
		};
	}
	alternative() {
		let e = [], t = this.idx;
		for (; this.isTerm();) e.push(this.term());
		return {
			type: "Alternative",
			value: e,
			loc: this.loc(t)
		};
	}
	term() {
		return this.isAssertion() ? this.assertion() : this.atom();
	}
	assertion() {
		let e = this.idx;
		switch (this.popChar()) {
			case "^": return {
				type: "StartAnchor",
				loc: this.loc(e)
			};
			case "$": return {
				type: "EndAnchor",
				loc: this.loc(e)
			};
			case "\\":
				switch (this.popChar()) {
					case "b": return {
						type: "WordBoundary",
						loc: this.loc(e)
					};
					case "B": return {
						type: "NonWordBoundary",
						loc: this.loc(e)
					};
				}
				throw Error("Invalid Assertion Escape");
			case "(":
				this.consumeChar("?");
				let t;
				switch (this.popChar()) {
					case "=":
						t = "Lookahead";
						break;
					case "!":
						t = "NegativeLookahead";
						break;
					case "<":
						switch (this.popChar()) {
							case "=":
								t = "Lookbehind";
								break;
							case "!": t = "NegativeLookbehind";
						}
						break;
				}
				ASSERT_EXISTS(t);
				let n = this.disjunction();
				return this.consumeChar(")"), {
					type: t,
					value: n,
					loc: this.loc(e)
				};
		}
		return ASSERT_NEVER_REACH_HERE();
	}
	quantifier(e = !1) {
		let t, n = this.idx;
		switch (this.popChar()) {
			case "*":
				t = {
					atLeast: 0,
					atMost: Infinity
				};
				break;
			case "+":
				t = {
					atLeast: 1,
					atMost: Infinity
				};
				break;
			case "?":
				t = {
					atLeast: 0,
					atMost: 1
				};
				break;
			case "{":
				let n = this.integerIncludingZero();
				switch (this.popChar()) {
					case "}":
						t = {
							atLeast: n,
							atMost: n
						};
						break;
					case ",":
						let e;
						this.isDigit() ? (e = this.integerIncludingZero(), t = {
							atLeast: n,
							atMost: e
						}) : t = {
							atLeast: n,
							atMost: Infinity
						}, this.consumeChar("}");
						break;
				}
				if (e === !0 && t === void 0) return;
				ASSERT_EXISTS(t);
				break;
		}
		if (!(e === !0 && t === void 0) && ASSERT_EXISTS(t)) return this.peekChar(0) === "?" ? (this.consumeChar("?"), t.greedy = !1) : t.greedy = !0, t.type = "Quantifier", t.loc = this.loc(n), t;
	}
	atom() {
		let e, t = this.idx;
		switch (this.peekChar()) {
			case ".":
				e = this.dotAll();
				break;
			case "\\":
				e = this.atomEscape();
				break;
			case "[":
				e = this.characterClass();
				break;
			case "(":
				e = this.group();
				break;
		}
		return e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), ASSERT_EXISTS(e) ? (e.loc = this.loc(t), this.isQuantifier() && (e.quantifier = this.quantifier()), e) : ASSERT_NEVER_REACH_HERE();
	}
	dotAll() {
		return this.consumeChar("."), {
			type: "Set",
			complement: !0,
			value: [
				cc("\n"),
				cc("\r"),
				cc("\u2028"),
				cc("\u2029")
			]
		};
	}
	atomEscape() {
		switch (this.consumeChar("\\"), this.peekChar()) {
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9": return this.decimalEscapeAtom();
			case "d":
			case "D":
			case "s":
			case "S":
			case "w":
			case "W": return this.characterClassEscape();
			case "f":
			case "n":
			case "r":
			case "t":
			case "v": return this.controlEscapeAtom();
			case "c": return this.controlLetterEscapeAtom();
			case "0": return this.nulCharacterAtom();
			case "x": return this.hexEscapeSequenceAtom();
			case "u": return this.regExpUnicodeEscapeSequenceAtom();
			default: return this.identityEscapeAtom();
		}
	}
	decimalEscapeAtom() {
		return {
			type: "GroupBackReference",
			value: this.positiveInteger()
		};
	}
	characterClassEscape() {
		let e, t = !1;
		switch (this.popChar()) {
			case "d":
				e = digitsCharCodes;
				break;
			case "D":
				e = digitsCharCodes, t = !0;
				break;
			case "s":
				e = whitespaceCodes;
				break;
			case "S":
				e = whitespaceCodes, t = !0;
				break;
			case "w":
				e = wordCharCodes;
				break;
			case "W":
				e = wordCharCodes, t = !0;
				break;
		}
		return ASSERT_EXISTS(e) ? {
			type: "Set",
			value: e,
			complement: t
		} : ASSERT_NEVER_REACH_HERE();
	}
	controlEscapeAtom() {
		let e;
		switch (this.popChar()) {
			case "f":
				e = cc("\f");
				break;
			case "n":
				e = cc("\n");
				break;
			case "r":
				e = cc("\r");
				break;
			case "t":
				e = cc("	");
				break;
			case "v":
				e = cc("\v");
				break;
		}
		return ASSERT_EXISTS(e) ? {
			type: "Character",
			value: e
		} : ASSERT_NEVER_REACH_HERE();
	}
	controlLetterEscapeAtom() {
		this.consumeChar("c");
		let e = this.popChar();
		if (/[a-zA-Z]/.test(e) === !1) throw Error("Invalid ");
		return {
			type: "Character",
			value: e.toUpperCase().charCodeAt(0) - 64
		};
	}
	nulCharacterAtom() {
		return this.consumeChar("0"), {
			type: "Character",
			value: cc("\0")
		};
	}
	hexEscapeSequenceAtom() {
		return this.consumeChar("x"), this.parseHexDigits(2);
	}
	regExpUnicodeEscapeSequenceAtom() {
		return this.consumeChar("u"), this.parseHexDigits(4);
	}
	identityEscapeAtom() {
		return {
			type: "Character",
			value: cc(this.popChar())
		};
	}
	classPatternCharacterAtom() {
		switch (this.peekChar()) {
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029":
			case "\\":
			case "]": throw Error("TBD");
			default: return {
				type: "Character",
				value: cc(this.popChar())
			};
		}
	}
	characterClass() {
		let e = [], t = !1;
		for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), t = !0); this.isClassAtom();) {
			let t = this.classAtom();
			if (t.type, isCharacter(t) && this.isRangeDash()) {
				this.consumeChar("-");
				let n = this.classAtom();
				if (n.type, isCharacter(n)) {
					if (n.value < t.value) throw Error("Range out of order in character class");
					e.push({
						from: t.value,
						to: n.value
					});
				} else insertToSet(t.value, e), e.push(cc("-")), insertToSet(n.value, e);
			} else insertToSet(t.value, e);
		}
		return this.consumeChar("]"), {
			type: "Set",
			complement: t,
			value: e
		};
	}
	classAtom() {
		switch (this.peekChar()) {
			case "]":
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029": throw Error("TBD");
			case "\\": return this.classEscape();
			default: return this.classPatternCharacterAtom();
		}
	}
	classEscape() {
		switch (this.consumeChar("\\"), this.peekChar()) {
			case "b": return this.consumeChar("b"), {
				type: "Character",
				value: cc("\b")
			};
			case "d":
			case "D":
			case "s":
			case "S":
			case "w":
			case "W": return this.characterClassEscape();
			case "f":
			case "n":
			case "r":
			case "t":
			case "v": return this.controlEscapeAtom();
			case "c": return this.controlLetterEscapeAtom();
			case "0": return this.nulCharacterAtom();
			case "x": return this.hexEscapeSequenceAtom();
			case "u": return this.regExpUnicodeEscapeSequenceAtom();
			default: return this.identityEscapeAtom();
		}
	}
	group() {
		let e = !0;
		switch (this.consumeChar("("), this.peekChar(0)) {
			case "?":
				this.consumeChar("?"), this.consumeChar(":"), e = !1;
				break;
			default:
				this.groupIdx++;
				break;
		}
		let t = this.disjunction();
		this.consumeChar(")");
		let n = {
			type: "Group",
			capturing: e,
			value: t
		};
		return e && (n.idx = this.groupIdx), n;
	}
	positiveInteger() {
		let e = this.popChar();
		if (decimalPatternNoZero.test(e) === !1) throw Error("Expecting a positive integer");
		for (; decimalPattern.test(this.peekChar(0));) e += this.popChar();
		return parseInt(e, 10);
	}
	integerIncludingZero() {
		let e = this.popChar();
		if (decimalPattern.test(e) === !1) throw Error("Expecting an integer");
		for (; decimalPattern.test(this.peekChar(0));) e += this.popChar();
		return parseInt(e, 10);
	}
	patternCharacter() {
		let e = this.popChar();
		switch (e) {
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029":
			case "^":
			case "$":
			case "\\":
			case ".":
			case "*":
			case "+":
			case "?":
			case "(":
			case ")":
			case "[":
			case "|": throw Error("TBD");
			default: return {
				type: "Character",
				value: cc(e)
			};
		}
	}
	isRegExpFlag() {
		switch (this.peekChar(0)) {
			case "g":
			case "i":
			case "m":
			case "u":
			case "y": return !0;
			default: return !1;
		}
	}
	isRangeDash() {
		return this.peekChar() === "-" && this.isClassAtom(1);
	}
	isDigit() {
		return decimalPattern.test(this.peekChar(0));
	}
	isClassAtom(e = 0) {
		switch (this.peekChar(e)) {
			case "]":
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029": return !1;
			default: return !0;
		}
	}
	isTerm() {
		return this.isAtom() || this.isAssertion();
	}
	isAtom() {
		if (this.isPatternCharacter()) return !0;
		switch (this.peekChar(0)) {
			case ".":
			case "\\":
			case "[":
			case "(": return !0;
			default: return !1;
		}
	}
	isAssertion() {
		switch (this.peekChar(0)) {
			case "^":
			case "$": return !0;
			case "\\": switch (this.peekChar(1)) {
				case "b":
				case "B": return !0;
				default: return !1;
			}
			case "(": return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!" || this.peekChar(2) === "<" && (this.peekChar(3) === "=" || this.peekChar(3) === "!"));
			default: return !1;
		}
	}
	isQuantifier() {
		let e = this.saveState();
		try {
			return this.quantifier(!0) !== void 0;
		} catch {
			return !1;
		} finally {
			this.restoreState(e);
		}
	}
	isPatternCharacter() {
		switch (this.peekChar()) {
			case "^":
			case "$":
			case "\\":
			case ".":
			case "*":
			case "+":
			case "?":
			case "(":
			case ")":
			case "[":
			case "|":
			case "/":
			case "\n":
			case "\r":
			case "\u2028":
			case "\u2029": return !1;
			default: return !0;
		}
	}
	parseHexDigits(e) {
		let t = "";
		for (let n = 0; n < e; n++) {
			let e = this.popChar();
			if (hexDigitPattern.test(e) === !1) throw Error("Expecting a HexDecimal digits");
			t += e;
		}
		return {
			type: "Character",
			value: parseInt(t, 16)
		};
	}
	peekChar(e = 0) {
		return this.input[this.idx + e];
	}
	popChar() {
		let e = this.peekChar(0);
		return this.consumeChar(void 0), e;
	}
	consumeChar(e) {
		if (e !== void 0 && this.input[this.idx] !== e) throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
		if (this.idx >= this.input.length) throw Error("Unexpected end of input");
		this.idx++;
	}
	loc(e) {
		return {
			begin: e,
			end: this.idx
		};
	}
}, BaseRegExpVisitor = class {
	static #e = __name(this, "BaseRegExpVisitor");
	visitChildren(e) {
		for (let t in e) {
			let n = e[t];
			e.hasOwnProperty(t) && (n.type === void 0 ? Array.isArray(n) && n.forEach((e) => {
				this.visit(e);
			}, this) : this.visit(n));
		}
	}
	visit(e) {
		switch (e.type) {
			case "Pattern":
				this.visitPattern(e);
				break;
			case "Flags":
				this.visitFlags(e);
				break;
			case "Disjunction":
				this.visitDisjunction(e);
				break;
			case "Alternative":
				this.visitAlternative(e);
				break;
			case "StartAnchor":
				this.visitStartAnchor(e);
				break;
			case "EndAnchor":
				this.visitEndAnchor(e);
				break;
			case "WordBoundary":
				this.visitWordBoundary(e);
				break;
			case "NonWordBoundary":
				this.visitNonWordBoundary(e);
				break;
			case "Lookahead":
				this.visitLookahead(e);
				break;
			case "NegativeLookahead":
				this.visitNegativeLookahead(e);
				break;
			case "Lookbehind":
				this.visitLookbehind(e);
				break;
			case "NegativeLookbehind":
				this.visitNegativeLookbehind(e);
				break;
			case "Character":
				this.visitCharacter(e);
				break;
			case "Set":
				this.visitSet(e);
				break;
			case "Group":
				this.visitGroup(e);
				break;
			case "GroupBackReference":
				this.visitGroupBackReference(e);
				break;
			case "Quantifier":
				this.visitQuantifier(e);
				break;
		}
		this.visitChildren(e);
	}
	visitPattern(e) {}
	visitFlags(e) {}
	visitDisjunction(e) {}
	visitAlternative(e) {}
	visitStartAnchor(e) {}
	visitEndAnchor(e) {}
	visitWordBoundary(e) {}
	visitNonWordBoundary(e) {}
	visitLookahead(e) {}
	visitNegativeLookahead(e) {}
	visitLookbehind(e) {}
	visitNegativeLookbehind(e) {}
	visitCharacter(e) {}
	visitSet(e) {}
	visitGroup(e) {}
	visitGroupBackReference(e) {}
	visitQuantifier(e) {}
}, NEWLINE_REGEXP = /\r?\n/gm, regexpParser = new RegExpParser(), visitor = new class extends BaseRegExpVisitor {
	static #e = __name(this, "TerminalRegExpVisitor");
	constructor() {
		super(...arguments), this.isStarting = !0, this.endRegexpStack = [], this.multiline = !1;
	}
	get endRegex() {
		return this.endRegexpStack.join("");
	}
	reset(e) {
		this.multiline = !1, this.regex = e, this.startRegexp = "", this.isStarting = !0, this.endRegexpStack = [];
	}
	visitGroup(e) {
		e.quantifier && (this.isStarting = !1, this.endRegexpStack = []);
	}
	visitCharacter(e) {
		let t = String.fromCharCode(e.value);
		if (!this.multiline && t === "\n" && (this.multiline = !0), e.quantifier) this.isStarting = !1, this.endRegexpStack = [];
		else {
			let e = escapeRegExp(t);
			this.endRegexpStack.push(e), this.isStarting && (this.startRegexp += e);
		}
	}
	visitSet(e) {
		if (!this.multiline) {
			let t = this.regex.substring(e.loc.begin, e.loc.end), n = new RegExp(t);
			this.multiline = !!"\n".match(n);
		}
		if (e.quantifier) this.isStarting = !1, this.endRegexpStack = [];
		else {
			let t = this.regex.substring(e.loc.begin, e.loc.end);
			this.endRegexpStack.push(t), this.isStarting && (this.startRegexp += t);
		}
	}
	visitChildren(e) {
		e.type === "Group" && e.quantifier || super.visitChildren(e);
	}
}();
function getTerminalParts(e) {
	try {
		typeof e != "string" && (e = e.source), e = `/${e}/`;
		let t = regexpParser.pattern(e), n = [];
		for (let r of t.value.value) visitor.reset(e), visitor.visit(r), n.push({
			start: visitor.startRegexp,
			end: visitor.endRegex
		});
		return n;
	} catch {
		return [];
	}
}
__name(getTerminalParts, "getTerminalParts");
function isMultilineComment(e) {
	try {
		return typeof e == "string" && (e = new RegExp(e)), e = e.toString(), visitor.reset(e), visitor.visit(regexpParser.pattern(e)), visitor.multiline;
	} catch {
		return !1;
	}
}
__name(isMultilineComment, "isMultilineComment");
var whitespaceCharacters = "\f\n\r	\v \xA0            \u2028\u2029  　﻿".split("");
function isWhitespace(e) {
	let t = typeof e == "string" ? new RegExp(e) : e;
	return whitespaceCharacters.some((e) => t.test(e));
}
__name(isWhitespace, "isWhitespace");
function escapeRegExp(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
__name(escapeRegExp, "escapeRegExp");
function partialMatches(e, t) {
	let n = partialRegExp(e), r = t.match(n);
	return !!r && r[0].length > 0;
}
__name(partialMatches, "partialMatches");
function partialRegExp(e) {
	typeof e == "string" && (e = new RegExp(e));
	let t = e, n = e.source, r = 0;
	function i() {
		let e = "", a;
		function s(t) {
			e += n.substr(r, t), r += t;
		}
		__name(s, "appendRaw");
		function c(t) {
			e += "(?:" + n.substr(r, t) + "|$)", r += t;
		}
		for (__name(c, "appendOptional"); r < n.length;) switch (n[r]) {
			case "\\":
				switch (n[r + 1]) {
					case "c":
						c(3);
						break;
					case "x":
						c(4);
						break;
					case "u":
						t.unicode ? n[r + 2] === "{" ? c(n.indexOf("}", r) - r + 1) : c(6) : c(2);
						break;
					case "p":
					case "P":
						t.unicode ? c(n.indexOf("}", r) - r + 1) : c(2);
						break;
					case "k":
						c(n.indexOf(">", r) - r + 1);
						break;
					default:
						c(2);
						break;
				}
				break;
			case "[":
				a = /\[(?:\\.|.)*?\]/g, a.lastIndex = r, a = a.exec(n) || [], c(a[0].length);
				break;
			case "|":
			case "^":
			case "$":
			case "*":
			case "+":
			case "?":
				s(1);
				break;
			case "{":
				a = /\{\d+,?\d*\}/g, a.lastIndex = r, a = a.exec(n), a ? s(a[0].length) : c(1);
				break;
			case "(":
				if (n[r + 1] === "?") switch (n[r + 2]) {
					case ":":
						e += "(?:", r += 3, e += i() + "|$)";
						break;
					case "=":
						e += "(?=", r += 3, e += i() + ")";
						break;
					case "!":
						a = r, r += 3, i(), e += n.substr(a, r - a);
						break;
					case "<":
						switch (n[r + 3]) {
							case "=":
							case "!":
								a = r, r += 4, i(), e += n.substr(a, r - a);
								break;
							default:
								s(n.indexOf(">", r) - r + 1), e += i() + "|$)";
								break;
						}
						break;
				}
				else s(1), e += i() + "|$)";
				break;
			case ")": return ++r, e;
			default:
				c(1);
				break;
		}
		return e;
	}
	return __name(i, "process"), new RegExp(i(), e.flags);
}
__name(partialRegExp, "partialRegExp");
function getEntryRule(e) {
	return e.rules.find((e) => isParserRule(e) && e.entry);
}
__name(getEntryRule, "getEntryRule");
function getHiddenRules(e) {
	return e.rules.filter((e) => isTerminalRule(e) && e.hidden);
}
__name(getHiddenRules, "getHiddenRules");
function getAllReachableRules(e, t) {
	let n = /* @__PURE__ */ new Set(), r = getEntryRule(e);
	if (!r) return new Set(e.rules);
	let i = [r].concat(getHiddenRules(e));
	for (let e of i) ruleDfs(e, n, t);
	let a = /* @__PURE__ */ new Set();
	for (let t of e.rules) (n.has(t.name) || isTerminalRule(t) && t.hidden) && a.add(t);
	return a;
}
__name(getAllReachableRules, "getAllReachableRules");
function ruleDfs(e, t, n) {
	t.add(e.name), streamAllContents(e).forEach((e) => {
		if (isRuleCall(e) || n && isTerminalRuleCall(e)) {
			let r = e.rule.ref;
			r && !t.has(r.name) && ruleDfs(r, t, n);
		}
	});
}
__name(ruleDfs, "ruleDfs");
function getAllRulesUsedForCrossReferences(e) {
	let t = /* @__PURE__ */ new Set();
	return streamAllContents(e).forEach((e) => {
		isCrossReference(e) && (isParserRule(e.type.ref) && t.add(e.type.ref), isInferredType(e.type.ref) && isParserRule(e.type.ref.$container) && t.add(e.type.ref.$container));
	}), t;
}
__name(getAllRulesUsedForCrossReferences, "getAllRulesUsedForCrossReferences");
function getCrossReferenceTerminal(e) {
	if (e.terminal) return e.terminal;
	if (e.type.ref) return findNameAssignment(e.type.ref)?.terminal;
}
__name(getCrossReferenceTerminal, "getCrossReferenceTerminal");
function isCommentTerminal(e) {
	return e.hidden && !isWhitespace(terminalRegex(e));
}
__name(isCommentTerminal, "isCommentTerminal");
function findNodesForProperty(e, t) {
	return !e || !t ? [] : findNodesForPropertyInternal(e, t, e.astNode, !0);
}
__name(findNodesForProperty, "findNodesForProperty");
function findNodeForProperty(e, t, n) {
	if (!e || !t) return;
	let r = findNodesForPropertyInternal(e, t, e.astNode, !0);
	if (r.length !== 0) return n = n === void 0 ? 0 : Math.max(0, Math.min(n, r.length - 1)), r[n];
}
__name(findNodeForProperty, "findNodeForProperty");
function findNodesForPropertyInternal(e, t, n, r) {
	if (!r) {
		let n = getContainerOfType(e.grammarSource, isAssignment);
		if (n && n.feature === t) return [e];
	}
	return isCompositeCstNode(e) && e.astNode === n ? e.content.flatMap((e) => findNodesForPropertyInternal(e, t, n, !1)) : [];
}
__name(findNodesForPropertyInternal, "findNodesForPropertyInternal");
function findNodesForKeyword(e, t) {
	return e ? findNodesForKeywordInternal(e, t, e?.astNode) : [];
}
__name(findNodesForKeyword, "findNodesForKeyword");
function findNodeForKeyword(e, t, n) {
	if (!e) return;
	let r = findNodesForKeywordInternal(e, t, e?.astNode);
	if (r.length !== 0) return n = n === void 0 ? 0 : Math.max(0, Math.min(n, r.length - 1)), r[n];
}
__name(findNodeForKeyword, "findNodeForKeyword");
function findNodesForKeywordInternal(e, t, n) {
	if (e.astNode !== n) return [];
	if (isKeyword(e.grammarSource) && e.grammarSource.value === t) return [e];
	let r = streamCst(e).iterator(), i, a = [];
	do
		if (i = r.next(), !i.done) {
			let e = i.value;
			e.astNode === n ? isKeyword(e.grammarSource) && e.grammarSource.value === t && a.push(e) : r.prune();
		}
	while (!i.done);
	return a;
}
__name(findNodesForKeywordInternal, "findNodesForKeywordInternal");
function findAssignment(e) {
	let t = e.astNode;
	for (; t === e.container?.astNode;) {
		let t = getContainerOfType(e.grammarSource, isAssignment);
		if (t) return t;
		e = e.container;
	}
}
__name(findAssignment, "findAssignment");
function findNameAssignment(e) {
	let t = e;
	return isInferredType(t) && (isAction(t.$container) ? t = t.$container.$container : isAbstractParserRule(t.$container) ? t = t.$container : assertUnreachable(t.$container)), findNameAssignmentInternal(e, t, /* @__PURE__ */ new Map());
}
__name(findNameAssignment, "findNameAssignment");
function findNameAssignmentInternal(e, t, n) {
	function r(t, r) {
		let i;
		return getContainerOfType(t, isAssignment) || (i = findNameAssignmentInternal(r, r, n)), n.set(e, i), i;
	}
	if (__name(r, "go"), n.has(e)) return n.get(e);
	n.set(e, void 0);
	for (let i of streamAllContents(t)) if (isAssignment(i) && i.feature.toLowerCase() === "name") return n.set(e, i), i;
	else if (isRuleCall(i) && isParserRule(i.rule.ref)) return r(i, i.rule.ref);
	else if (isSimpleType(i) && i.typeRef?.ref) return r(i, i.typeRef.ref);
}
__name(findNameAssignmentInternal, "findNameAssignmentInternal");
function getActionAtElement(e) {
	let t = e.$container;
	if (isGroup(t)) {
		let n = t.elements, r = n.indexOf(e);
		for (let e = r - 1; e >= 0; e--) {
			let t = n[e];
			if (isAction(t)) return t;
			{
				let t = streamAllContents(n[e]).find(isAction);
				if (t) return t;
			}
		}
	}
	if (isAbstractElement(t)) return getActionAtElement(t);
}
__name(getActionAtElement, "getActionAtElement");
function isOptionalCardinality(e, t) {
	return e === "?" || e === "*" || isGroup(t) && !!t.guardCondition;
}
__name(isOptionalCardinality, "isOptionalCardinality");
function isArrayCardinality(e) {
	return e === "*" || e === "+";
}
__name(isArrayCardinality, "isArrayCardinality");
function isArrayOperator(e) {
	return e === "+=";
}
__name(isArrayOperator, "isArrayOperator");
function isDataTypeRule(e) {
	return isDataTypeRuleInternal(e, /* @__PURE__ */ new Set());
}
__name(isDataTypeRule, "isDataTypeRule");
function isDataTypeRuleInternal(e, t) {
	if (t.has(e)) return !0;
	t.add(e);
	for (let n of streamAllContents(e)) if (isRuleCall(n)) {
		if (!n.rule.ref || isParserRule(n.rule.ref) && !isDataTypeRuleInternal(n.rule.ref, t) || isInfixRule(n.rule.ref)) return !1;
	} else if (isAssignment(n)) return !1;
	else if (isAction(n)) return !1;
	return !!e.definition;
}
__name(isDataTypeRuleInternal, "isDataTypeRuleInternal");
function isDataType(e) {
	return isDataTypeInternal(e.type, /* @__PURE__ */ new Set());
}
__name(isDataType, "isDataType");
function isDataTypeInternal(e, t) {
	if (t.has(e)) return !0;
	if (t.add(e), isArrayType(e) || isReferenceType(e)) return !1;
	if (isUnionType(e)) return e.types.every((e) => isDataTypeInternal(e, t));
	if (isSimpleType(e)) {
		if (e.primitiveType !== void 0 || e.stringType !== void 0) return !0;
		if (e.typeRef !== void 0) {
			let n = e.typeRef.ref;
			return isType(n) ? isDataTypeInternal(n.type, t) : !1;
		} else return !1;
	} else return !1;
}
__name(isDataTypeInternal, "isDataTypeInternal");
function getExplicitRuleType(e) {
	if (!isTerminalRule(e)) {
		if (e.inferredType) return e.inferredType.name;
		if (e.dataType) return e.dataType;
		if (e.returnType) {
			let t = e.returnType.ref;
			if (t) return t.name;
		}
	}
}
__name(getExplicitRuleType, "getExplicitRuleType");
function getTypeName(e) {
	if (isAbstractParserRule(e)) return isParserRule(e) && isDataTypeRule(e) ? e.name : getExplicitRuleType(e) ?? e.name;
	if (isInterface(e) || isType(e) || isReturnType(e)) return e.name;
	if (isAction(e)) {
		let t = getActionType(e);
		if (t) return t;
	} else if (isInferredType(e)) return e.name;
	throw Error("Cannot get name of Unknown Type");
}
__name(getTypeName, "getTypeName");
function getActionType(e) {
	if (e.inferredType) return e.inferredType.name;
	if (e.type?.ref) return getTypeName(e.type.ref);
}
__name(getActionType, "getActionType");
function getRuleTypeName(e) {
	return isTerminalRule(e) ? e.type?.name ?? "string" : isParserRule(e) && isDataTypeRule(e) ? e.name : getExplicitRuleType(e) ?? e.name;
}
__name(getRuleTypeName, "getRuleTypeName");
function getRuleType(e) {
	return isTerminalRule(e) ? e.type?.name ?? "string" : getExplicitRuleType(e) ?? e.name;
}
__name(getRuleType, "getRuleType");
function terminalRegex(e) {
	let t = {
		s: !1,
		i: !1,
		u: !1
	}, n = abstractElementToRegex(e.definition, t), r = Object.entries(t).filter(([, e]) => e).map(([e]) => e).join("");
	return new RegExp(n, r);
}
__name(terminalRegex, "terminalRegex");
var WILDCARD = "[\\s\\S]";
function abstractElementToRegex(e, t) {
	if (isTerminalAlternatives(e)) return terminalAlternativesToRegex(e);
	if (isTerminalGroup(e)) return terminalGroupToRegex(e);
	if (isCharacterRange(e)) return characterRangeToRegex(e);
	if (isTerminalRuleCall(e)) {
		let t = e.rule.ref;
		if (!t) throw Error("Missing rule reference.");
		return withCardinality(abstractElementToRegex(t.definition), {
			cardinality: e.cardinality,
			lookahead: e.lookahead,
			parenthesized: e.parenthesized
		});
	} else if (isNegatedToken(e)) return negateTokenToRegex(e);
	else if (isUntilToken(e)) return untilTokenToRegex(e);
	else if (isRegexToken(e)) {
		let n = e.regex.lastIndexOf("/"), r = e.regex.substring(1, n), i = e.regex.substring(n + 1);
		return t && (t.i = i.includes("i"), t.s = i.includes("s"), t.u = i.includes("u")), withCardinality(r, {
			cardinality: e.cardinality,
			lookahead: e.lookahead,
			parenthesized: e.parenthesized,
			wrap: !1
		});
	} else if (isWildcard(e)) return withCardinality(WILDCARD, {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized
	});
	else throw Error(`Invalid terminal element: ${e?.$type}, ${e?.$cstNode?.text}`);
}
__name(abstractElementToRegex, "abstractElementToRegex");
function terminalAlternativesToRegex(e) {
	return withCardinality(e.elements.map((e) => abstractElementToRegex(e)).join("|"), {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized,
		wrap: !1
	});
}
__name(terminalAlternativesToRegex, "terminalAlternativesToRegex");
function terminalGroupToRegex(e) {
	return withCardinality(e.elements.map((e) => abstractElementToRegex(e)).join(""), {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized,
		wrap: !1
	});
}
__name(terminalGroupToRegex, "terminalGroupToRegex");
function untilTokenToRegex(e) {
	return withCardinality(`${WILDCARD}*?${abstractElementToRegex(e.terminal)}`, {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized
	});
}
__name(untilTokenToRegex, "untilTokenToRegex");
function negateTokenToRegex(e) {
	return withCardinality(`(?!${abstractElementToRegex(e.terminal)})${WILDCARD}*?`, {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized
	});
}
__name(negateTokenToRegex, "negateTokenToRegex");
function characterRangeToRegex(e) {
	return e.right ? withCardinality(`[${keywordToRegex(e.left)}-${keywordToRegex(e.right)}]`, {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized,
		wrap: !1
	}) : withCardinality(keywordToRegex(e.left), {
		cardinality: e.cardinality,
		lookahead: e.lookahead,
		parenthesized: e.parenthesized,
		wrap: !1
	});
}
__name(characterRangeToRegex, "characterRangeToRegex");
function keywordToRegex(e) {
	return escapeRegExp(e.value);
}
__name(keywordToRegex, "keywordToRegex");
function withCardinality(e, t) {
	return (t.parenthesized || t.lookahead || t.wrap !== !1) && (e = `(${t.lookahead ?? (t.parenthesized ? "" : "?:")}${e})`), t.cardinality ? `${e}${t.cardinality}` : e;
}
__name(withCardinality, "withCardinality");
function createGrammarConfig(e) {
	let t = [], n = e.Grammar;
	for (let e of n.rules) isTerminalRule(e) && isCommentTerminal(e) && isMultilineComment(terminalRegex(e)) && t.push(e.name);
	return {
		multilineCommentRules: t,
		nameRegexp: DefaultNameRegexp
	};
}
__name(createGrammarConfig, "createGrammarConfig");
var freeGlobal_default = typeof global == "object" && global && global.Object === Object && global, freeSelf = typeof self == "object" && self && self.Object === Object && self, root_default = freeGlobal_default || freeSelf || Function("return this")(), Symbol_default = root_default.Symbol, objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, nativeObjectToString = objectProto.toString, symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(e) {
	var t = hasOwnProperty.call(e, symToStringTag), n = e[symToStringTag];
	try {
		e[symToStringTag] = void 0;
		var r = !0;
	} catch {}
	var i = nativeObjectToString.call(e);
	return r && (t ? e[symToStringTag] = n : delete e[symToStringTag]), i;
}
__name(getRawTag, "getRawTag");
var getRawTag_default = getRawTag, nativeObjectToString2 = Object.prototype.toString;
function objectToString(e) {
	return nativeObjectToString2.call(e);
}
__name(objectToString, "objectToString");
var objectToString_default = objectToString, nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(e) {
	return e == null ? e === void 0 ? undefinedTag : nullTag : symToStringTag2 && symToStringTag2 in Object(e) ? getRawTag_default(e) : objectToString_default(e);
}
__name(baseGetTag, "baseGetTag");
var baseGetTag_default = baseGetTag;
function isObjectLike(e) {
	return typeof e == "object" && !!e;
}
__name(isObjectLike, "isObjectLike");
var isObjectLike_default = isObjectLike, symbolTag = "[object Symbol]";
function isSymbol(e) {
	return typeof e == "symbol" || isObjectLike_default(e) && baseGetTag_default(e) == symbolTag;
}
__name(isSymbol, "isSymbol");
var isSymbol_default = isSymbol;
function arrayMap(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
__name(arrayMap, "arrayMap");
var arrayMap_default = arrayMap, isArray_default = Array.isArray, INFINITY = Infinity, symbolProto = Symbol_default ? Symbol_default.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(e) {
	if (typeof e == "string") return e;
	if (isArray_default(e)) return arrayMap_default(e, baseToString) + "";
	if (isSymbol_default(e)) return symbolToString ? symbolToString.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -INFINITY ? "-0" : t;
}
__name(baseToString, "baseToString");
var baseToString_default = baseToString, reWhitespace = /\s/;
function trimmedEndIndex(e) {
	for (var t = e.length; t-- && reWhitespace.test(e.charAt(t)););
	return t;
}
__name(trimmedEndIndex, "trimmedEndIndex");
var trimmedEndIndex_default = trimmedEndIndex, reTrimStart = /^\s+/;
function baseTrim(e) {
	return e && e.slice(0, trimmedEndIndex_default(e) + 1).replace(reTrimStart, "");
}
__name(baseTrim, "baseTrim");
var baseTrim_default = baseTrim;
function isObject(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
__name(isObject, "isObject");
var isObject_default = isObject, NAN = NaN, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt;
function toNumber(e) {
	if (typeof e == "number") return e;
	if (isSymbol_default(e)) return NAN;
	if (isObject_default(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = isObject_default(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = baseTrim_default(e);
	var n = reIsBinary.test(e);
	return n || reIsOctal.test(e) ? freeParseInt(e.slice(2), n ? 2 : 8) : reIsBadHex.test(e) ? NAN : +e;
}
__name(toNumber, "toNumber");
var toNumber_default = toNumber, INFINITY2 = Infinity, MAX_INTEGER = 17976931348623157e292;
function toFinite(e) {
	return e ? (e = toNumber_default(e), e === INFINITY2 || e === -INFINITY2 ? (e < 0 ? -1 : 1) * MAX_INTEGER : e === e ? e : 0) : e === 0 ? e : 0;
}
__name(toFinite, "toFinite");
var toFinite_default = toFinite;
function toInteger(e) {
	var t = toFinite_default(e), n = t % 1;
	return t === t ? n ? t - n : t : 0;
}
__name(toInteger, "toInteger");
var toInteger_default = toInteger;
function identity(e) {
	return e;
}
__name(identity, "identity");
var identity_default = identity, asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(e) {
	if (!isObject_default(e)) return !1;
	var t = baseGetTag_default(e);
	return t == funcTag || t == genTag || t == asyncTag || t == proxyTag;
}
__name(isFunction, "isFunction");
var isFunction_default = isFunction, coreJsData_default = root_default["__core-js_shared__"], maskSrcKey = (function() {
	var e = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
})();
function isMasked(e) {
	return !!maskSrcKey && maskSrcKey in e;
}
__name(isMasked, "isMasked");
var isMasked_default = isMasked, funcToString = Function.prototype.toString;
function toSource(e) {
	if (e != null) {
		try {
			return funcToString.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
__name(toSource, "toSource");
var toSource_default = toSource, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto2 = Function.prototype, objectProto3 = Object.prototype, funcToString2 = funcProto2.toString, hasOwnProperty2 = objectProto3.hasOwnProperty, reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(e) {
	return !isObject_default(e) || isMasked_default(e) ? !1 : (isFunction_default(e) ? reIsNative : reIsHostCtor).test(toSource_default(e));
}
__name(baseIsNative, "baseIsNative");
var baseIsNative_default = baseIsNative;
function getValue(e, t) {
	return e?.[t];
}
__name(getValue, "getValue");
var getValue_default = getValue;
function getNative(e, t) {
	var n = getValue_default(e, t);
	return baseIsNative_default(n) ? n : void 0;
}
__name(getNative, "getNative");
var getNative_default = getNative, WeakMap_default = getNative_default(root_default, "WeakMap"), objectCreate = Object.create, baseCreate_default = /* @__PURE__ */ (function() {
	function e() {}
	return __name(e, "object"), function(t) {
		if (!isObject_default(t)) return {};
		if (objectCreate) return objectCreate(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
})();
function apply(e, t, n) {
	switch (n.length) {
		case 0: return e.call(t);
		case 1: return e.call(t, n[0]);
		case 2: return e.call(t, n[0], n[1]);
		case 3: return e.call(t, n[0], n[1], n[2]);
	}
	return e.apply(t, n);
}
__name(apply, "apply");
var apply_default = apply;
function noop() {}
__name(noop, "noop");
var noop_default = noop;
function copyArray(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
__name(copyArray, "copyArray");
var copyArray_default = copyArray, HOT_COUNT = 800, HOT_SPAN = 16, nativeNow = Date.now;
function shortOut(e) {
	var t = 0, n = 0;
	return function() {
		var r = nativeNow(), i = HOT_SPAN - (r - n);
		if (n = r, i > 0) {
			if (++t >= HOT_COUNT) return arguments[0];
		} else t = 0;
		return e.apply(void 0, arguments);
	};
}
__name(shortOut, "shortOut");
var shortOut_default = shortOut;
function constant(e) {
	return function() {
		return e;
	};
}
__name(constant, "constant");
var constant_default = constant, defineProperty_default = (function() {
	try {
		var e = getNative_default(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
})(), setToString_default = shortOut_default(defineProperty_default ? function(e, t) {
	return defineProperty_default(e, "toString", {
		configurable: !0,
		enumerable: !1,
		value: constant_default(t),
		writable: !0
	});
} : identity_default);
function arrayEach(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
__name(arrayEach, "arrayEach");
var arrayEach_default = arrayEach;
function baseFindIndex(e, t, n, r) {
	for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
	return -1;
}
__name(baseFindIndex, "baseFindIndex");
var baseFindIndex_default = baseFindIndex;
function baseIsNaN(e) {
	return e !== e;
}
__name(baseIsNaN, "baseIsNaN");
var baseIsNaN_default = baseIsNaN;
function strictIndexOf(e, t, n) {
	for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
	return -1;
}
__name(strictIndexOf, "strictIndexOf");
var strictIndexOf_default = strictIndexOf;
function baseIndexOf(e, t, n) {
	return t === t ? strictIndexOf_default(e, t, n) : baseFindIndex_default(e, baseIsNaN_default, n);
}
__name(baseIndexOf, "baseIndexOf");
var baseIndexOf_default = baseIndexOf;
function arrayIncludes(e, t) {
	return !!(e != null && e.length) && baseIndexOf_default(e, t, 0) > -1;
}
__name(arrayIncludes, "arrayIncludes");
var arrayIncludes_default = arrayIncludes, MAX_SAFE_INTEGER = 9007199254740991, reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(e, t) {
	var n = typeof e;
	return t ??= MAX_SAFE_INTEGER, !!t && (n == "number" || n != "symbol" && reIsUint.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
__name(isIndex, "isIndex");
var isIndex_default = isIndex;
function baseAssignValue(e, t, n) {
	t == "__proto__" && defineProperty_default ? defineProperty_default(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
__name(baseAssignValue, "baseAssignValue");
var baseAssignValue_default = baseAssignValue;
function eq(e, t) {
	return e === t || e !== e && t !== t;
}
__name(eq, "eq");
var eq_default = eq, hasOwnProperty3 = Object.prototype.hasOwnProperty;
function assignValue(e, t, n) {
	var r = e[t];
	(!(hasOwnProperty3.call(e, t) && eq_default(r, n)) || n === void 0 && !(t in e)) && baseAssignValue_default(e, t, n);
}
__name(assignValue, "assignValue");
var assignValue_default = assignValue;
function copyObject(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? baseAssignValue_default(n, s, c) : assignValue_default(n, s, c);
	}
	return n;
}
__name(copyObject, "copyObject");
var copyObject_default = copyObject, nativeMax = Math.max;
function overRest(e, t, n) {
	return t = nativeMax(t === void 0 ? e.length - 1 : t, 0), function() {
		for (var r = arguments, i = -1, a = nativeMax(r.length - t, 0), o = Array(a); ++i < a;) o[i] = r[t + i];
		i = -1;
		for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
		return s[t] = n(o), apply_default(e, this, s);
	};
}
__name(overRest, "overRest");
var overRest_default = overRest;
function baseRest(e, t) {
	return setToString_default(overRest_default(e, t, identity_default), e + "");
}
__name(baseRest, "baseRest");
var baseRest_default = baseRest, MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER2;
}
__name(isLength, "isLength");
var isLength_default = isLength;
function isArrayLike(e) {
	return e != null && isLength_default(e.length) && !isFunction_default(e);
}
__name(isArrayLike, "isArrayLike");
var isArrayLike_default = isArrayLike;
function isIterateeCall(e, t, n) {
	if (!isObject_default(n)) return !1;
	var r = typeof t;
	return (r == "number" ? isArrayLike_default(n) && isIndex_default(t, n.length) : r == "string" && t in n) ? eq_default(n[t], e) : !1;
}
__name(isIterateeCall, "isIterateeCall");
var isIterateeCall_default = isIterateeCall;
function createAssigner(e) {
	return baseRest_default(function(t, n) {
		var r = -1, i = n.length, a = i > 1 ? n[i - 1] : void 0, o = i > 2 ? n[2] : void 0;
		for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, o && isIterateeCall_default(n[0], n[1], o) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++r < i;) {
			var s = n[r];
			s && e(t, s, r, a);
		}
		return t;
	});
}
__name(createAssigner, "createAssigner");
var createAssigner_default = createAssigner, objectProto5 = Object.prototype;
function isPrototype(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || objectProto5);
}
__name(isPrototype, "isPrototype");
var isPrototype_default = isPrototype;
function baseTimes(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
__name(baseTimes, "baseTimes");
var baseTimes_default = baseTimes, argsTag = "[object Arguments]";
function baseIsArguments(e) {
	return isObjectLike_default(e) && baseGetTag_default(e) == argsTag;
}
__name(baseIsArguments, "baseIsArguments");
var baseIsArguments_default = baseIsArguments, objectProto6 = Object.prototype, hasOwnProperty4 = objectProto6.hasOwnProperty, propertyIsEnumerable = objectProto6.propertyIsEnumerable, isArguments_default = baseIsArguments_default(/* @__PURE__ */ (function() {
	return arguments;
})()) ? baseIsArguments_default : function(e) {
	return isObjectLike_default(e) && hasOwnProperty4.call(e, "callee") && !propertyIsEnumerable.call(e, "callee");
};
function stubFalse() {
	return !1;
}
__name(stubFalse, "stubFalse");
var stubFalse_default = stubFalse, freeExports = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module, Buffer2 = freeModule && freeModule.exports === freeExports ? root_default.Buffer : void 0, isBuffer_default = (Buffer2 ? Buffer2.isBuffer : void 0) || stubFalse_default, argsTag2 = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag2 = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
function baseIsTypedArray(e) {
	return isObjectLike_default(e) && isLength_default(e.length) && !!typedArrayTags[baseGetTag_default(e)];
}
__name(baseIsTypedArray, "baseIsTypedArray");
var baseIsTypedArray_default = baseIsTypedArray;
function baseUnary(e) {
	return function(t) {
		return e(t);
	};
}
__name(baseUnary, "baseUnary");
var baseUnary_default = baseUnary, freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module, freeProcess = freeModule2 && freeModule2.exports === freeExports2 && freeGlobal_default.process, nodeUtil_default = (function() {
	try {
		return freeModule2 && freeModule2.require && freeModule2.require("util").types || freeProcess && freeProcess.binding && freeProcess.binding("util");
	} catch {}
})(), nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray, isTypedArray_default = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default, hasOwnProperty5 = Object.prototype.hasOwnProperty;
function arrayLikeKeys(e, t) {
	var n = isArray_default(e), r = !n && isArguments_default(e), i = !n && !r && isBuffer_default(e), a = !n && !r && !i && isTypedArray_default(e), o = n || r || i || a, s = o ? baseTimes_default(e.length, String) : [], c = s.length;
	for (var l in e) (t || hasOwnProperty5.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || isIndex_default(l, c))) && s.push(l);
	return s;
}
__name(arrayLikeKeys, "arrayLikeKeys");
var arrayLikeKeys_default = arrayLikeKeys;
function overArg(e, t) {
	return function(n) {
		return e(t(n));
	};
}
__name(overArg, "overArg");
var overArg_default = overArg, nativeKeys_default = overArg_default(Object.keys, Object), hasOwnProperty6 = Object.prototype.hasOwnProperty;
function baseKeys(e) {
	if (!isPrototype_default(e)) return nativeKeys_default(e);
	var t = [];
	for (var n in Object(e)) hasOwnProperty6.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
__name(baseKeys, "baseKeys");
var baseKeys_default = baseKeys;
function keys(e) {
	return isArrayLike_default(e) ? arrayLikeKeys_default(e) : baseKeys_default(e);
}
__name(keys, "keys");
var keys_default = keys, hasOwnProperty7 = Object.prototype.hasOwnProperty, assign_default = createAssigner_default(function(e, t) {
	if (isPrototype_default(t) || isArrayLike_default(t)) {
		copyObject_default(t, keys_default(t), e);
		return;
	}
	for (var n in t) hasOwnProperty7.call(t, n) && assignValue_default(e, n, t[n]);
});
function nativeKeysIn(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
__name(nativeKeysIn, "nativeKeysIn");
var nativeKeysIn_default = nativeKeysIn, hasOwnProperty8 = Object.prototype.hasOwnProperty;
function baseKeysIn(e) {
	if (!isObject_default(e)) return nativeKeysIn_default(e);
	var t = isPrototype_default(e), n = [];
	for (var r in e) r == "constructor" && (t || !hasOwnProperty8.call(e, r)) || n.push(r);
	return n;
}
__name(baseKeysIn, "baseKeysIn");
var baseKeysIn_default = baseKeysIn;
function keysIn(e) {
	return isArrayLike_default(e) ? arrayLikeKeys_default(e, !0) : baseKeysIn_default(e);
}
__name(keysIn, "keysIn");
var keysIn_default = keysIn, reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(e, t) {
	if (isArray_default(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || isSymbol_default(e) ? !0 : reIsPlainProp.test(e) || !reIsDeepProp.test(e) || t != null && e in Object(t);
}
__name(isKey, "isKey");
var isKey_default = isKey, nativeCreate_default = getNative_default(Object, "create");
function hashClear() {
	this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {}, this.size = 0;
}
__name(hashClear, "hashClear");
var hashClear_default = hashClear;
function hashDelete(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
__name(hashDelete, "hashDelete");
var hashDelete_default = hashDelete, HASH_UNDEFINED = "__lodash_hash_undefined__", hasOwnProperty9 = Object.prototype.hasOwnProperty;
function hashGet(e) {
	var t = this.__data__;
	if (nativeCreate_default) {
		var n = t[e];
		return n === HASH_UNDEFINED ? void 0 : n;
	}
	return hasOwnProperty9.call(t, e) ? t[e] : void 0;
}
__name(hashGet, "hashGet");
var hashGet_default = hashGet, hasOwnProperty10 = Object.prototype.hasOwnProperty;
function hashHas(e) {
	var t = this.__data__;
	return nativeCreate_default ? t[e] !== void 0 : hasOwnProperty10.call(t, e);
}
__name(hashHas, "hashHas");
var hashHas_default = hashHas, HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = nativeCreate_default && t === void 0 ? HASH_UNDEFINED2 : t, this;
}
__name(hashSet, "hashSet");
var hashSet_default = hashSet;
function Hash(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
__name(Hash, "Hash"), Hash.prototype.clear = hashClear_default, Hash.prototype.delete = hashDelete_default, Hash.prototype.get = hashGet_default, Hash.prototype.has = hashHas_default, Hash.prototype.set = hashSet_default;
var Hash_default = Hash;
function listCacheClear() {
	this.__data__ = [], this.size = 0;
}
__name(listCacheClear, "listCacheClear");
var listCacheClear_default = listCacheClear;
function assocIndexOf(e, t) {
	for (var n = e.length; n--;) if (eq_default(e[n][0], t)) return n;
	return -1;
}
__name(assocIndexOf, "assocIndexOf");
var assocIndexOf_default = assocIndexOf, splice = Array.prototype.splice;
function listCacheDelete(e) {
	var t = this.__data__, n = assocIndexOf_default(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : splice.call(t, n, 1), --this.size, !0);
}
__name(listCacheDelete, "listCacheDelete");
var listCacheDelete_default = listCacheDelete;
function listCacheGet(e) {
	var t = this.__data__, n = assocIndexOf_default(t, e);
	return n < 0 ? void 0 : t[n][1];
}
__name(listCacheGet, "listCacheGet");
var listCacheGet_default = listCacheGet;
function listCacheHas(e) {
	return assocIndexOf_default(this.__data__, e) > -1;
}
__name(listCacheHas, "listCacheHas");
var listCacheHas_default = listCacheHas;
function listCacheSet(e, t) {
	var n = this.__data__, r = assocIndexOf_default(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
__name(listCacheSet, "listCacheSet");
var listCacheSet_default = listCacheSet;
function ListCache(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
__name(ListCache, "ListCache"), ListCache.prototype.clear = listCacheClear_default, ListCache.prototype.delete = listCacheDelete_default, ListCache.prototype.get = listCacheGet_default, ListCache.prototype.has = listCacheHas_default, ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache, Map_default = getNative_default(root_default, "Map");
function mapCacheClear() {
	this.size = 0, this.__data__ = {
		hash: new Hash_default(),
		map: new (Map_default || ListCache_default)(),
		string: new Hash_default()
	};
}
__name(mapCacheClear, "mapCacheClear");
var mapCacheClear_default = mapCacheClear;
function isKeyable(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
__name(isKeyable, "isKeyable");
var isKeyable_default = isKeyable;
function getMapData(e, t) {
	var n = e.__data__;
	return isKeyable_default(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
__name(getMapData, "getMapData");
var getMapData_default = getMapData;
function mapCacheDelete(e) {
	var t = getMapData_default(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
__name(mapCacheDelete, "mapCacheDelete");
var mapCacheDelete_default = mapCacheDelete;
function mapCacheGet(e) {
	return getMapData_default(this, e).get(e);
}
__name(mapCacheGet, "mapCacheGet");
var mapCacheGet_default = mapCacheGet;
function mapCacheHas(e) {
	return getMapData_default(this, e).has(e);
}
__name(mapCacheHas, "mapCacheHas");
var mapCacheHas_default = mapCacheHas;
function mapCacheSet(e, t) {
	var n = getMapData_default(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
__name(mapCacheSet, "mapCacheSet");
var mapCacheSet_default = mapCacheSet;
function MapCache(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
__name(MapCache, "MapCache"), MapCache.prototype.clear = mapCacheClear_default, MapCache.prototype.delete = mapCacheDelete_default, MapCache.prototype.get = mapCacheGet_default, MapCache.prototype.has = mapCacheHas_default, MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache, FUNC_ERROR_TEXT = "Expected a function";
function memoize(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(FUNC_ERROR_TEXT);
	var n = /* @__PURE__ */ __name(function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	}, "memoized");
	return n.cache = new (memoize.Cache || MapCache_default)(), n;
}
__name(memoize, "memoize"), memoize.Cache = MapCache_default;
var memoize_default = memoize, MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(e) {
	var t = memoize_default(e, function(e) {
		return n.size === MAX_MEMOIZE_SIZE && n.clear(), e;
	}), n = t.cache;
	return t;
}
__name(memoizeCapped, "memoizeCapped");
var memoizeCapped_default = memoizeCapped, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reEscapeChar = /\\(\\)?/g, stringToPath_default = memoizeCapped_default(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(rePropName, function(e, n, r, i) {
		t.push(r ? i.replace(reEscapeChar, "$1") : n || e);
	}), t;
});
function toString2(e) {
	return e == null ? "" : baseToString_default(e);
}
__name(toString2, "toString");
var toString_default = toString2;
function castPath(e, t) {
	return isArray_default(e) ? e : isKey_default(e, t) ? [e] : stringToPath_default(toString_default(e));
}
__name(castPath, "castPath");
var castPath_default = castPath, INFINITY3 = Infinity;
function toKey(e) {
	if (typeof e == "string" || isSymbol_default(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -INFINITY3 ? "-0" : t;
}
__name(toKey, "toKey");
var toKey_default = toKey;
function baseGet(e, t) {
	t = castPath_default(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[toKey_default(t[n++])];
	return n && n == r ? e : void 0;
}
__name(baseGet, "baseGet");
var baseGet_default = baseGet;
function get(e, t, n) {
	var r = e == null ? void 0 : baseGet_default(e, t);
	return r === void 0 ? n : r;
}
__name(get, "get");
var get_default = get;
function arrayPush(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
__name(arrayPush, "arrayPush");
var arrayPush_default = arrayPush, spreadableSymbol = Symbol_default ? Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(e) {
	return isArray_default(e) || isArguments_default(e) || !!(spreadableSymbol && e && e[spreadableSymbol]);
}
__name(isFlattenable, "isFlattenable");
var isFlattenable_default = isFlattenable;
function baseFlatten(e, t, n, r, i) {
	var a = -1, o = e.length;
	for (n ||= isFlattenable_default, i ||= []; ++a < o;) {
		var s = e[a];
		t > 0 && n(s) ? t > 1 ? baseFlatten(s, t - 1, n, r, i) : arrayPush_default(i, s) : r || (i[i.length] = s);
	}
	return i;
}
__name(baseFlatten, "baseFlatten");
var baseFlatten_default = baseFlatten;
function flatten(e) {
	return e != null && e.length ? baseFlatten_default(e, 1) : [];
}
__name(flatten, "flatten");
var flatten_default = flatten, getPrototype_default = overArg_default(Object.getPrototypeOf, Object);
function baseSlice(e, t, n) {
	var r = -1, i = e.length;
	t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
	for (var a = Array(i); ++r < i;) a[r] = e[r + t];
	return a;
}
__name(baseSlice, "baseSlice");
var baseSlice_default = baseSlice;
function arrayReduce(e, t, n, r) {
	var i = -1, a = e == null ? 0 : e.length;
	for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
	return n;
}
__name(arrayReduce, "arrayReduce");
var arrayReduce_default = arrayReduce;
function stackClear() {
	this.__data__ = new ListCache_default(), this.size = 0;
}
__name(stackClear, "stackClear");
var stackClear_default = stackClear;
function stackDelete(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
__name(stackDelete, "stackDelete");
var stackDelete_default = stackDelete;
function stackGet(e) {
	return this.__data__.get(e);
}
__name(stackGet, "stackGet");
var stackGet_default = stackGet;
function stackHas(e) {
	return this.__data__.has(e);
}
__name(stackHas, "stackHas");
var stackHas_default = stackHas, LARGE_ARRAY_SIZE = 200;
function stackSet(e, t) {
	var n = this.__data__;
	if (n instanceof ListCache_default) {
		var r = n.__data__;
		if (!Map_default || r.length < LARGE_ARRAY_SIZE - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new MapCache_default(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
__name(stackSet, "stackSet");
var stackSet_default = stackSet;
function Stack(e) {
	this.size = (this.__data__ = new ListCache_default(e)).size;
}
__name(Stack, "Stack"), Stack.prototype.clear = stackClear_default, Stack.prototype.delete = stackDelete_default, Stack.prototype.get = stackGet_default, Stack.prototype.has = stackHas_default, Stack.prototype.set = stackSet_default;
var Stack_default = Stack;
function baseAssign(e, t) {
	return e && copyObject_default(t, keys_default(t), e);
}
__name(baseAssign, "baseAssign");
var baseAssign_default = baseAssign;
function baseAssignIn(e, t) {
	return e && copyObject_default(t, keysIn_default(t), e);
}
__name(baseAssignIn, "baseAssignIn");
var baseAssignIn_default = baseAssignIn, freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module, Buffer3 = freeModule3 && freeModule3.exports === freeExports3 ? root_default.Buffer : void 0, allocUnsafe = Buffer3 ? Buffer3.allocUnsafe : void 0;
function cloneBuffer(e, t) {
	if (t) return e.slice();
	var n = e.length, r = allocUnsafe ? allocUnsafe(n) : new e.constructor(n);
	return e.copy(r), r;
}
__name(cloneBuffer, "cloneBuffer");
var cloneBuffer_default = cloneBuffer;
function arrayFilter(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
__name(arrayFilter, "arrayFilter");
var arrayFilter_default = arrayFilter;
function stubArray() {
	return [];
}
__name(stubArray, "stubArray");
var stubArray_default = stubArray, propertyIsEnumerable2 = Object.prototype.propertyIsEnumerable, nativeGetSymbols = Object.getOwnPropertySymbols, getSymbols_default = nativeGetSymbols ? function(e) {
	return e == null ? [] : (e = Object(e), arrayFilter_default(nativeGetSymbols(e), function(t) {
		return propertyIsEnumerable2.call(e, t);
	}));
} : stubArray_default;
function copySymbols(e, t) {
	return copyObject_default(e, getSymbols_default(e), t);
}
__name(copySymbols, "copySymbols");
var copySymbols_default = copySymbols, getSymbolsIn_default = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) arrayPush_default(t, getSymbols_default(e)), e = getPrototype_default(e);
	return t;
} : stubArray_default;
function copySymbolsIn(e, t) {
	return copyObject_default(e, getSymbolsIn_default(e), t);
}
__name(copySymbolsIn, "copySymbolsIn");
var copySymbolsIn_default = copySymbolsIn;
function baseGetAllKeys(e, t, n) {
	var r = t(e);
	return isArray_default(e) ? r : arrayPush_default(r, n(e));
}
__name(baseGetAllKeys, "baseGetAllKeys");
var baseGetAllKeys_default = baseGetAllKeys;
function getAllKeys(e) {
	return baseGetAllKeys_default(e, keys_default, getSymbols_default);
}
__name(getAllKeys, "getAllKeys");
var getAllKeys_default = getAllKeys;
function getAllKeysIn(e) {
	return baseGetAllKeys_default(e, keysIn_default, getSymbolsIn_default);
}
__name(getAllKeysIn, "getAllKeysIn");
var getAllKeysIn_default = getAllKeysIn, DataView_default = getNative_default(root_default, "DataView"), Promise_default = getNative_default(root_default, "Promise"), Set_default = getNative_default(root_default, "Set"), mapTag2 = "[object Map]", objectTag2 = "[object Object]", promiseTag = "[object Promise]", setTag2 = "[object Set]", weakMapTag2 = "[object WeakMap]", dataViewTag2 = "[object DataView]", dataViewCtorString = toSource_default(DataView_default), mapCtorString = toSource_default(Map_default), promiseCtorString = toSource_default(Promise_default), setCtorString = toSource_default(Set_default), weakMapCtorString = toSource_default(WeakMap_default), getTag = baseGetTag_default;
(DataView_default && getTag(new DataView_default(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) && (getTag = /* @__PURE__ */ __name(function(e) {
	var t = baseGetTag_default(e), n = t == objectTag2 ? e.constructor : void 0, r = n ? toSource_default(n) : "";
	if (r) switch (r) {
		case dataViewCtorString: return dataViewTag2;
		case mapCtorString: return mapTag2;
		case promiseCtorString: return promiseTag;
		case setCtorString: return setTag2;
		case weakMapCtorString: return weakMapTag2;
	}
	return t;
}, "getTag"));
var getTag_default = getTag, hasOwnProperty11 = Object.prototype.hasOwnProperty;
function initCloneArray(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && hasOwnProperty11.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
__name(initCloneArray, "initCloneArray");
var initCloneArray_default = initCloneArray, Uint8Array_default = root_default.Uint8Array;
function cloneArrayBuffer(e) {
	var t = new e.constructor(e.byteLength);
	return new Uint8Array_default(t).set(new Uint8Array_default(e)), t;
}
__name(cloneArrayBuffer, "cloneArrayBuffer");
var cloneArrayBuffer_default = cloneArrayBuffer;
function cloneDataView(e, t) {
	var n = t ? cloneArrayBuffer_default(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
__name(cloneDataView, "cloneDataView");
var cloneDataView_default = cloneDataView, reFlags = /\w*$/;
function cloneRegExp(e) {
	var t = new e.constructor(e.source, reFlags.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
__name(cloneRegExp, "cloneRegExp");
var cloneRegExp_default = cloneRegExp, symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0, symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
function cloneSymbol(e) {
	return symbolValueOf ? Object(symbolValueOf.call(e)) : {};
}
__name(cloneSymbol, "cloneSymbol");
var cloneSymbol_default = cloneSymbol;
function cloneTypedArray(e, t) {
	var n = t ? cloneArrayBuffer_default(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
__name(cloneTypedArray, "cloneTypedArray");
var cloneTypedArray_default = cloneTypedArray, boolTag2 = "[object Boolean]", dateTag2 = "[object Date]", mapTag3 = "[object Map]", numberTag2 = "[object Number]", regexpTag2 = "[object RegExp]", setTag3 = "[object Set]", stringTag2 = "[object String]", symbolTag2 = "[object Symbol]", arrayBufferTag2 = "[object ArrayBuffer]", dataViewTag3 = "[object DataView]", float32Tag2 = "[object Float32Array]", float64Tag2 = "[object Float64Array]", int8Tag2 = "[object Int8Array]", int16Tag2 = "[object Int16Array]", int32Tag2 = "[object Int32Array]", uint8Tag2 = "[object Uint8Array]", uint8ClampedTag2 = "[object Uint8ClampedArray]", uint16Tag2 = "[object Uint16Array]", uint32Tag2 = "[object Uint32Array]";
function initCloneByTag(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case arrayBufferTag2: return cloneArrayBuffer_default(e);
		case boolTag2:
		case dateTag2: return new r(+e);
		case dataViewTag3: return cloneDataView_default(e, n);
		case float32Tag2:
		case float64Tag2:
		case int8Tag2:
		case int16Tag2:
		case int32Tag2:
		case uint8Tag2:
		case uint8ClampedTag2:
		case uint16Tag2:
		case uint32Tag2: return cloneTypedArray_default(e, n);
		case mapTag3: return new r();
		case numberTag2:
		case stringTag2: return new r(e);
		case regexpTag2: return cloneRegExp_default(e);
		case setTag3: return new r();
		case symbolTag2: return cloneSymbol_default(e);
	}
}
__name(initCloneByTag, "initCloneByTag");
var initCloneByTag_default = initCloneByTag;
function initCloneObject(e) {
	return typeof e.constructor == "function" && !isPrototype_default(e) ? baseCreate_default(getPrototype_default(e)) : {};
}
__name(initCloneObject, "initCloneObject");
var initCloneObject_default = initCloneObject, mapTag4 = "[object Map]";
function baseIsMap(e) {
	return isObjectLike_default(e) && getTag_default(e) == mapTag4;
}
__name(baseIsMap, "baseIsMap");
var baseIsMap_default = baseIsMap, nodeIsMap = nodeUtil_default && nodeUtil_default.isMap, isMap_default = nodeIsMap ? baseUnary_default(nodeIsMap) : baseIsMap_default, setTag4 = "[object Set]";
function baseIsSet(e) {
	return isObjectLike_default(e) && getTag_default(e) == setTag4;
}
__name(baseIsSet, "baseIsSet");
var baseIsSet_default = baseIsSet, nodeIsSet = nodeUtil_default && nodeUtil_default.isSet, isSet_default = nodeIsSet ? baseUnary_default(nodeIsSet) : baseIsSet_default, CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4, argsTag3 = "[object Arguments]", arrayTag2 = "[object Array]", boolTag3 = "[object Boolean]", dateTag3 = "[object Date]", errorTag2 = "[object Error]", funcTag3 = "[object Function]", genTag2 = "[object GeneratorFunction]", mapTag5 = "[object Map]", numberTag3 = "[object Number]", objectTag3 = "[object Object]", regexpTag3 = "[object RegExp]", setTag5 = "[object Set]", stringTag3 = "[object String]", symbolTag3 = "[object Symbol]", weakMapTag3 = "[object WeakMap]", arrayBufferTag3 = "[object ArrayBuffer]", dataViewTag4 = "[object DataView]", float32Tag3 = "[object Float32Array]", float64Tag3 = "[object Float64Array]", int8Tag3 = "[object Int8Array]", int16Tag3 = "[object Int16Array]", int32Tag3 = "[object Int32Array]", uint8Tag3 = "[object Uint8Array]", uint8ClampedTag3 = "[object Uint8ClampedArray]", uint16Tag3 = "[object Uint16Array]", uint32Tag3 = "[object Uint32Array]", cloneableTags = {};
cloneableTags[argsTag3] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag3] = cloneableTags[dataViewTag4] = cloneableTags[boolTag3] = cloneableTags[dateTag3] = cloneableTags[float32Tag3] = cloneableTags[float64Tag3] = cloneableTags[int8Tag3] = cloneableTags[int16Tag3] = cloneableTags[int32Tag3] = cloneableTags[mapTag5] = cloneableTags[numberTag3] = cloneableTags[objectTag3] = cloneableTags[regexpTag3] = cloneableTags[setTag5] = cloneableTags[stringTag3] = cloneableTags[symbolTag3] = cloneableTags[uint8Tag3] = cloneableTags[uint8ClampedTag3] = cloneableTags[uint16Tag3] = cloneableTags[uint32Tag3] = !0, cloneableTags[errorTag2] = cloneableTags[funcTag3] = cloneableTags[weakMapTag3] = !1;
function baseClone(e, t, n, r, i, a) {
	var o, s = t & CLONE_DEEP_FLAG, c = t & CLONE_FLAT_FLAG, l = t & CLONE_SYMBOLS_FLAG;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!isObject_default(e)) return e;
	var u = isArray_default(e);
	if (u) {
		if (o = initCloneArray_default(e), !s) return copyArray_default(e, o);
	} else {
		var d = getTag_default(e), f = d == funcTag3 || d == genTag2;
		if (isBuffer_default(e)) return cloneBuffer_default(e, s);
		if (d == objectTag3 || d == argsTag3 || f && !i) {
			if (o = c || f ? {} : initCloneObject_default(e), !s) return c ? copySymbolsIn_default(e, baseAssignIn_default(o, e)) : copySymbols_default(e, baseAssign_default(o, e));
		} else {
			if (!cloneableTags[d]) return i ? e : {};
			o = initCloneByTag_default(e, d, s);
		}
	}
	a ||= new Stack_default();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), isSet_default(e) ? e.forEach(function(r) {
		o.add(baseClone(r, t, n, r, e, a));
	}) : isMap_default(e) && e.forEach(function(r, i) {
		o.set(i, baseClone(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? getAllKeysIn_default : getAllKeys_default : c ? keysIn_default : keys_default)(e);
	return arrayEach_default(m || e, function(r, i) {
		m && (i = r, r = e[i]), assignValue_default(o, i, baseClone(r, t, n, i, e, a));
	}), o;
}
__name(baseClone, "baseClone");
var baseClone_default = baseClone, CLONE_SYMBOLS_FLAG2 = 4;
function clone(e) {
	return baseClone_default(e, CLONE_SYMBOLS_FLAG2);
}
__name(clone, "clone");
var clone_default = clone;
function compact(e) {
	for (var t = -1, n = e == null ? 0 : e.length, r = 0, i = []; ++t < n;) {
		var a = e[t];
		a && (i[r++] = a);
	}
	return i;
}
__name(compact, "compact");
var compact_default = compact, HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(e) {
	return this.__data__.set(e, HASH_UNDEFINED3), this;
}
__name(setCacheAdd, "setCacheAdd");
var setCacheAdd_default = setCacheAdd;
function setCacheHas(e) {
	return this.__data__.has(e);
}
__name(setCacheHas, "setCacheHas");
var setCacheHas_default = setCacheHas;
function SetCache(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new MapCache_default(); ++t < n;) this.add(e[t]);
}
__name(SetCache, "SetCache"), SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default, SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;
function arraySome(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
__name(arraySome, "arraySome");
var arraySome_default = arraySome;
function cacheHas(e, t) {
	return e.has(t);
}
__name(cacheHas, "cacheHas");
var cacheHas_default = cacheHas, COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function equalArrays(e, t, n, r, i, a) {
	var o = n & COMPARE_PARTIAL_FLAG, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!arraySome_default(t, function(e, t) {
				if (!cacheHas_default(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
			})) {
				f = !1;
				break;
			}
		} else if (!(m === h || i(m, h, n, r, a))) {
			f = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), f;
}
__name(equalArrays, "equalArrays");
var equalArrays_default = equalArrays;
function mapToArray(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
__name(mapToArray, "mapToArray");
var mapToArray_default = mapToArray;
function setToArray(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
__name(setToArray, "setToArray");
var setToArray_default = setToArray, COMPARE_PARTIAL_FLAG2 = 1, COMPARE_UNORDERED_FLAG2 = 2, boolTag4 = "[object Boolean]", dateTag4 = "[object Date]", errorTag3 = "[object Error]", mapTag6 = "[object Map]", numberTag4 = "[object Number]", regexpTag4 = "[object RegExp]", setTag6 = "[object Set]", stringTag4 = "[object String]", symbolTag4 = "[object Symbol]", arrayBufferTag4 = "[object ArrayBuffer]", dataViewTag5 = "[object DataView]", symbolProto3 = Symbol_default ? Symbol_default.prototype : void 0, symbolValueOf2 = symbolProto3 ? symbolProto3.valueOf : void 0;
function equalByTag(e, t, n, r, i, a, o) {
	switch (n) {
		case dataViewTag5:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case arrayBufferTag4: return !(e.byteLength != t.byteLength || !a(new Uint8Array_default(e), new Uint8Array_default(t)));
		case boolTag4:
		case dateTag4:
		case numberTag4: return eq_default(+e, +t);
		case errorTag3: return e.name == t.name && e.message == t.message;
		case regexpTag4:
		case stringTag4: return e == t + "";
		case mapTag6: var s = mapToArray_default;
		case setTag6:
			var c = r & COMPARE_PARTIAL_FLAG2;
			if (s ||= setToArray_default, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= COMPARE_UNORDERED_FLAG2, o.set(e, t);
			var u = equalArrays_default(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case symbolTag4: if (symbolValueOf2) return symbolValueOf2.call(e) == symbolValueOf2.call(t);
	}
	return !1;
}
__name(equalByTag, "equalByTag");
var equalByTag_default = equalByTag, COMPARE_PARTIAL_FLAG3 = 1, hasOwnProperty12 = Object.prototype.hasOwnProperty;
function equalObjects(e, t, n, r, i, a) {
	var o = n & COMPARE_PARTIAL_FLAG3, s = getAllKeys_default(e), c = s.length;
	if (c != getAllKeys_default(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : hasOwnProperty12.call(t, u))) return !1;
	}
	var d = a.get(e), f = a.get(t);
	if (d && f) return d == t && f == e;
	var p = !0;
	a.set(e, t), a.set(t, e);
	for (var m = o; ++l < c;) {
		u = s[l];
		var h = e[u], g = t[u];
		if (r) var _ = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
		if (!(_ === void 0 ? h === g || i(h, g, n, r, a) : _)) {
			p = !1;
			break;
		}
		m ||= u == "constructor";
	}
	if (p && !m) {
		var v = e.constructor, y = t.constructor;
		v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
	}
	return a.delete(e), a.delete(t), p;
}
__name(equalObjects, "equalObjects");
var equalObjects_default = equalObjects, COMPARE_PARTIAL_FLAG4 = 1, argsTag4 = "[object Arguments]", arrayTag3 = "[object Array]", objectTag4 = "[object Object]", hasOwnProperty13 = Object.prototype.hasOwnProperty;
function baseIsEqualDeep(e, t, n, r, i, a) {
	var o = isArray_default(e), s = isArray_default(t), c = o ? arrayTag3 : getTag_default(e), l = s ? arrayTag3 : getTag_default(t);
	c = c == argsTag4 ? objectTag4 : c, l = l == argsTag4 ? objectTag4 : l;
	var u = c == objectTag4, d = l == objectTag4, f = c == l;
	if (f && isBuffer_default(e)) {
		if (!isBuffer_default(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new Stack_default(), o || isTypedArray_default(e) ? equalArrays_default(e, t, n, r, i, a) : equalByTag_default(e, t, c, n, r, i, a);
	if (!(n & COMPARE_PARTIAL_FLAG4)) {
		var p = u && hasOwnProperty13.call(e, "__wrapped__"), m = d && hasOwnProperty13.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new Stack_default(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new Stack_default(), equalObjects_default(e, t, n, r, i, a)) : !1;
}
__name(baseIsEqualDeep, "baseIsEqualDeep");
var baseIsEqualDeep_default = baseIsEqualDeep;
function baseIsEqual(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !isObjectLike_default(e) && !isObjectLike_default(t) ? e !== e && t !== t : baseIsEqualDeep_default(e, t, n, r, baseIsEqual, i);
}
__name(baseIsEqual, "baseIsEqual");
var baseIsEqual_default = baseIsEqual, COMPARE_PARTIAL_FLAG5 = 1, COMPARE_UNORDERED_FLAG3 = 2;
function baseIsMatch(e, t, n, r) {
	var i = n.length, a = i, o = !r;
	if (e == null) return !a;
	for (e = Object(e); i--;) {
		var s = n[i];
		if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
	}
	for (; ++i < a;) {
		s = n[i];
		var c = s[0], l = e[c], u = s[1];
		if (o && s[2]) {
			if (l === void 0 && !(c in e)) return !1;
		} else {
			var d = new Stack_default();
			if (r) var f = r(l, u, c, e, t, d);
			if (!(f === void 0 ? baseIsEqual_default(u, l, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, r, d) : f)) return !1;
		}
	}
	return !0;
}
__name(baseIsMatch, "baseIsMatch");
var baseIsMatch_default = baseIsMatch;
function isStrictComparable(e) {
	return e === e && !isObject_default(e);
}
__name(isStrictComparable, "isStrictComparable");
var isStrictComparable_default = isStrictComparable;
function getMatchData(e) {
	for (var t = keys_default(e), n = t.length; n--;) {
		var r = t[n], i = e[r];
		t[n] = [
			r,
			i,
			isStrictComparable_default(i)
		];
	}
	return t;
}
__name(getMatchData, "getMatchData");
var getMatchData_default = getMatchData;
function matchesStrictComparable(e, t) {
	return function(n) {
		return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
	};
}
__name(matchesStrictComparable, "matchesStrictComparable");
var matchesStrictComparable_default = matchesStrictComparable;
function baseMatches(e) {
	var t = getMatchData_default(e);
	return t.length == 1 && t[0][2] ? matchesStrictComparable_default(t[0][0], t[0][1]) : function(n) {
		return n === e || baseIsMatch_default(n, e, t);
	};
}
__name(baseMatches, "baseMatches");
var baseMatches_default = baseMatches;
function baseHasIn(e, t) {
	return e != null && t in Object(e);
}
__name(baseHasIn, "baseHasIn");
var baseHasIn_default = baseHasIn;
function hasPath(e, t, n) {
	t = castPath_default(t, e);
	for (var r = -1, i = t.length, a = !1; ++r < i;) {
		var o = toKey_default(t[r]);
		if (!(a = e != null && n(e, o))) break;
		e = e[o];
	}
	return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && isLength_default(i) && isIndex_default(o, i) && (isArray_default(e) || isArguments_default(e)));
}
__name(hasPath, "hasPath");
var hasPath_default = hasPath;
function hasIn(e, t) {
	return e != null && hasPath_default(e, t, baseHasIn_default);
}
__name(hasIn, "hasIn");
var hasIn_default = hasIn, COMPARE_PARTIAL_FLAG6 = 1, COMPARE_UNORDERED_FLAG4 = 2;
function baseMatchesProperty(e, t) {
	return isKey_default(e) && isStrictComparable_default(t) ? matchesStrictComparable_default(toKey_default(e), t) : function(n) {
		var r = get_default(n, e);
		return r === void 0 && r === t ? hasIn_default(n, e) : baseIsEqual_default(t, r, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
	};
}
__name(baseMatchesProperty, "baseMatchesProperty");
var baseMatchesProperty_default = baseMatchesProperty;
function baseProperty(e) {
	return function(t) {
		return t?.[e];
	};
}
__name(baseProperty, "baseProperty");
var baseProperty_default = baseProperty;
function basePropertyDeep(e) {
	return function(t) {
		return baseGet_default(t, e);
	};
}
__name(basePropertyDeep, "basePropertyDeep");
var basePropertyDeep_default = basePropertyDeep;
function property(e) {
	return isKey_default(e) ? baseProperty_default(toKey_default(e)) : basePropertyDeep_default(e);
}
__name(property, "property");
var property_default = property;
function baseIteratee(e) {
	return typeof e == "function" ? e : e == null ? identity_default : typeof e == "object" ? isArray_default(e) ? baseMatchesProperty_default(e[0], e[1]) : baseMatches_default(e) : property_default(e);
}
__name(baseIteratee, "baseIteratee");
var baseIteratee_default = baseIteratee;
function arrayAggregator(e, t, n, r) {
	for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) {
		var o = e[i];
		t(r, o, n(o), e);
	}
	return r;
}
__name(arrayAggregator, "arrayAggregator");
var arrayAggregator_default = arrayAggregator;
function createBaseFor(e) {
	return function(t, n, r) {
		for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
			var c = o[e ? s : ++i];
			if (n(a[c], c, a) === !1) break;
		}
		return t;
	};
}
__name(createBaseFor, "createBaseFor");
var baseFor_default = createBaseFor();
function baseForOwn(e, t) {
	return e && baseFor_default(e, t, keys_default);
}
__name(baseForOwn, "baseForOwn");
var baseForOwn_default = baseForOwn;
function createBaseEach(e, t) {
	return function(n, r) {
		if (n == null) return n;
		if (!isArrayLike_default(n)) return e(n, r);
		for (var i = n.length, a = t ? i : -1, o = Object(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
		return n;
	};
}
__name(createBaseEach, "createBaseEach");
var baseEach_default = createBaseEach(baseForOwn_default);
function baseAggregator(e, t, n, r) {
	return baseEach_default(e, function(e, i, a) {
		t(r, e, n(e), a);
	}), r;
}
__name(baseAggregator, "baseAggregator");
var baseAggregator_default = baseAggregator;
function createAggregator(e, t) {
	return function(n, r) {
		var i = isArray_default(n) ? arrayAggregator_default : baseAggregator_default, a = t ? t() : {};
		return i(n, e, baseIteratee_default(r, 2), a);
	};
}
__name(createAggregator, "createAggregator");
var createAggregator_default = createAggregator, objectProto17 = Object.prototype, hasOwnProperty14 = objectProto17.hasOwnProperty, defaults_default = baseRest_default(function(e, t) {
	e = Object(e);
	var n = -1, r = t.length, i = r > 2 ? t[2] : void 0;
	for (i && isIterateeCall_default(t[0], t[1], i) && (r = 1); ++n < r;) for (var a = t[n], o = keysIn_default(a), s = -1, c = o.length; ++s < c;) {
		var l = o[s], u = e[l];
		(u === void 0 || eq_default(u, objectProto17[l]) && !hasOwnProperty14.call(e, l)) && (e[l] = a[l]);
	}
	return e;
});
function isArrayLikeObject(e) {
	return isObjectLike_default(e) && isArrayLike_default(e);
}
__name(isArrayLikeObject, "isArrayLikeObject");
var isArrayLikeObject_default = isArrayLikeObject;
function arrayIncludesWith(e, t, n) {
	for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
	return !1;
}
__name(arrayIncludesWith, "arrayIncludesWith");
var arrayIncludesWith_default = arrayIncludesWith, LARGE_ARRAY_SIZE2 = 200;
function baseDifference(e, t, n, r) {
	var i = -1, a = arrayIncludes_default, o = !0, s = e.length, c = [], l = t.length;
	if (!s) return c;
	n && (t = arrayMap_default(t, baseUnary_default(n))), r ? (a = arrayIncludesWith_default, o = !1) : t.length >= LARGE_ARRAY_SIZE2 && (a = cacheHas_default, o = !1, t = new SetCache_default(t));
	outer: for (; ++i < s;) {
		var u = e[i], d = n == null ? u : n(u);
		if (u = r || u !== 0 ? u : 0, o && d === d) {
			for (var f = l; f--;) if (t[f] === d) continue outer;
			c.push(u);
		} else a(t, d, r) || c.push(u);
	}
	return c;
}
__name(baseDifference, "baseDifference");
var baseDifference_default = baseDifference, difference_default = baseRest_default(function(e, t) {
	return isArrayLikeObject_default(e) ? baseDifference_default(e, baseFlatten_default(t, 1, isArrayLikeObject_default, !0)) : [];
});
function last(e) {
	var t = e == null ? 0 : e.length;
	return t ? e[t - 1] : void 0;
}
__name(last, "last");
var last_default = last;
function drop(e, t, n) {
	var r = e == null ? 0 : e.length;
	return r ? (t = n || t === void 0 ? 1 : toInteger_default(t), baseSlice_default(e, t < 0 ? 0 : t, r)) : [];
}
__name(drop, "drop");
var drop_default = drop;
function dropRight(e, t, n) {
	var r = e == null ? 0 : e.length;
	return r ? (t = n || t === void 0 ? 1 : toInteger_default(t), t = r - t, baseSlice_default(e, 0, t < 0 ? 0 : t)) : [];
}
__name(dropRight, "dropRight");
var dropRight_default = dropRight;
function castFunction(e) {
	return typeof e == "function" ? e : identity_default;
}
__name(castFunction, "castFunction");
var castFunction_default = castFunction;
function forEach(e, t) {
	return (isArray_default(e) ? arrayEach_default : baseEach_default)(e, castFunction_default(t));
}
__name(forEach, "forEach");
var forEach_default = forEach;
function arrayEvery(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (!t(e[n], n, e)) return !1;
	return !0;
}
__name(arrayEvery, "arrayEvery");
var arrayEvery_default = arrayEvery;
function baseEvery(e, t) {
	var n = !0;
	return baseEach_default(e, function(e, r, i) {
		return n = !!t(e, r, i), n;
	}), n;
}
__name(baseEvery, "baseEvery");
var baseEvery_default = baseEvery;
function every(e, t, n) {
	var r = isArray_default(e) ? arrayEvery_default : baseEvery_default;
	return n && isIterateeCall_default(e, t, n) && (t = void 0), r(e, baseIteratee_default(t, 3));
}
__name(every, "every");
var every_default = every;
function baseFilter(e, t) {
	var n = [];
	return baseEach_default(e, function(e, r, i) {
		t(e, r, i) && n.push(e);
	}), n;
}
__name(baseFilter, "baseFilter");
var baseFilter_default = baseFilter;
function filter(e, t) {
	return (isArray_default(e) ? arrayFilter_default : baseFilter_default)(e, baseIteratee_default(t, 3));
}
__name(filter, "filter");
var filter_default = filter;
function createFind(e) {
	return function(t, n, r) {
		var i = Object(t);
		if (!isArrayLike_default(t)) {
			var a = baseIteratee_default(n, 3);
			t = keys_default(t), n = /* @__PURE__ */ __name(function(e) {
				return a(i[e], e, i);
			}, "predicate");
		}
		var s = e(t, n, r);
		return s > -1 ? i[a ? t[s] : s] : void 0;
	};
}
__name(createFind, "createFind");
var createFind_default = createFind, nativeMax2 = Math.max;
function findIndex(e, t, n) {
	var r = e == null ? 0 : e.length;
	if (!r) return -1;
	var i = n == null ? 0 : toInteger_default(n);
	return i < 0 && (i = nativeMax2(r + i, 0)), baseFindIndex_default(e, baseIteratee_default(t, 3), i);
}
__name(findIndex, "findIndex");
var find_default = createFind_default(findIndex);
function head(e) {
	return e && e.length ? e[0] : void 0;
}
__name(head, "head");
var head_default = head;
function baseMap(e, t) {
	var n = -1, r = isArrayLike_default(e) ? Array(e.length) : [];
	return baseEach_default(e, function(e, i, a) {
		r[++n] = t(e, i, a);
	}), r;
}
__name(baseMap, "baseMap");
var baseMap_default = baseMap;
function map(e, t) {
	return (isArray_default(e) ? arrayMap_default : baseMap_default)(e, baseIteratee_default(t, 3));
}
__name(map, "map");
var map_default = map;
function flatMap(e, t) {
	return baseFlatten_default(map_default(e, t), 1);
}
__name(flatMap, "flatMap");
var flatMap_default = flatMap, hasOwnProperty15 = Object.prototype.hasOwnProperty, groupBy_default = createAggregator_default(function(e, t, n) {
	hasOwnProperty15.call(e, n) ? e[n].push(t) : baseAssignValue_default(e, n, [t]);
}), hasOwnProperty16 = Object.prototype.hasOwnProperty;
function baseHas(e, t) {
	return e != null && hasOwnProperty16.call(e, t);
}
__name(baseHas, "baseHas");
var baseHas_default = baseHas;
function has(e, t) {
	return e != null && hasPath_default(e, t, baseHas_default);
}
__name(has, "has");
var has_default = has, stringTag5 = "[object String]";
function isString(e) {
	return typeof e == "string" || !isArray_default(e) && isObjectLike_default(e) && baseGetTag_default(e) == stringTag5;
}
__name(isString, "isString");
var isString_default = isString;
function baseValues(e, t) {
	return arrayMap_default(t, function(t) {
		return e[t];
	});
}
__name(baseValues, "baseValues");
var baseValues_default = baseValues;
function values(e) {
	return e == null ? [] : baseValues_default(e, keys_default(e));
}
__name(values, "values");
var values_default = values, nativeMax3 = Math.max;
function includes(e, t, n, r) {
	e = isArrayLike_default(e) ? e : values_default(e), n = n && !r ? toInteger_default(n) : 0;
	var i = e.length;
	return n < 0 && (n = nativeMax3(i + n, 0)), isString_default(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && baseIndexOf_default(e, t, n) > -1;
}
__name(includes, "includes");
var includes_default = includes, nativeMax4 = Math.max;
function indexOf(e, t, n) {
	var r = e == null ? 0 : e.length;
	if (!r) return -1;
	var i = n == null ? 0 : toInteger_default(n);
	return i < 0 && (i = nativeMax4(r + i, 0)), baseIndexOf_default(e, t, i);
}
__name(indexOf, "indexOf");
var indexOf_default = indexOf, mapTag7 = "[object Map]", setTag7 = "[object Set]", hasOwnProperty17 = Object.prototype.hasOwnProperty;
function isEmpty(e) {
	if (e == null) return !0;
	if (isArrayLike_default(e) && (isArray_default(e) || typeof e == "string" || typeof e.splice == "function" || isBuffer_default(e) || isTypedArray_default(e) || isArguments_default(e))) return !e.length;
	var t = getTag_default(e);
	if (t == mapTag7 || t == setTag7) return !e.size;
	if (isPrototype_default(e)) return !baseKeys_default(e).length;
	for (var n in e) if (hasOwnProperty17.call(e, n)) return !1;
	return !0;
}
__name(isEmpty, "isEmpty");
var isEmpty_default = isEmpty, regexpTag5 = "[object RegExp]";
function baseIsRegExp(e) {
	return isObjectLike_default(e) && baseGetTag_default(e) == regexpTag5;
}
__name(baseIsRegExp, "baseIsRegExp");
var baseIsRegExp_default = baseIsRegExp, nodeIsRegExp = nodeUtil_default && nodeUtil_default.isRegExp, isRegExp_default = nodeIsRegExp ? baseUnary_default(nodeIsRegExp) : baseIsRegExp_default;
function isUndefined(e) {
	return e === void 0;
}
__name(isUndefined, "isUndefined");
var isUndefined_default = isUndefined, FUNC_ERROR_TEXT2 = "Expected a function";
function negate(e) {
	if (typeof e != "function") throw TypeError(FUNC_ERROR_TEXT2);
	return function() {
		var t = arguments;
		switch (t.length) {
			case 0: return !e.call(this);
			case 1: return !e.call(this, t[0]);
			case 2: return !e.call(this, t[0], t[1]);
			case 3: return !e.call(this, t[0], t[1], t[2]);
		}
		return !e.apply(this, t);
	};
}
__name(negate, "negate");
var negate_default = negate;
function baseSet(e, t, n, r) {
	if (!isObject_default(e)) return e;
	t = castPath_default(t, e);
	for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a;) {
		var c = toKey_default(t[i]), l = n;
		if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
		if (i != o) {
			var u = s[c];
			l = r ? r(u, c, s) : void 0, l === void 0 && (l = isObject_default(u) ? u : isIndex_default(t[i + 1]) ? [] : {});
		}
		assignValue_default(s, c, l), s = s[c];
	}
	return e;
}
__name(baseSet, "baseSet");
var baseSet_default = baseSet;
function basePickBy(e, t, n) {
	for (var r = -1, i = t.length, a = {}; ++r < i;) {
		var o = t[r], s = baseGet_default(e, o);
		n(s, o) && baseSet_default(a, castPath_default(o, e), s);
	}
	return a;
}
__name(basePickBy, "basePickBy");
var basePickBy_default = basePickBy;
function pickBy(e, t) {
	if (e == null) return {};
	var n = arrayMap_default(getAllKeysIn_default(e), function(e) {
		return [e];
	});
	return t = baseIteratee_default(t), basePickBy_default(e, n, function(e, n) {
		return t(e, n[0]);
	});
}
__name(pickBy, "pickBy");
var pickBy_default = pickBy;
function baseReduce(e, t, n, r, i) {
	return i(e, function(e, i, a) {
		n = r ? (r = !1, e) : t(n, e, i, a);
	}), n;
}
__name(baseReduce, "baseReduce");
var baseReduce_default = baseReduce;
function reduce(e, t, n) {
	var r = isArray_default(e) ? arrayReduce_default : baseReduce_default, i = arguments.length < 3;
	return r(e, baseIteratee_default(t, 4), n, i, baseEach_default);
}
__name(reduce, "reduce");
var reduce_default = reduce;
function reject(e, t) {
	return (isArray_default(e) ? arrayFilter_default : baseFilter_default)(e, negate_default(baseIteratee_default(t, 3)));
}
__name(reject, "reject");
var reject_default = reject;
function baseSome(e, t) {
	var n;
	return baseEach_default(e, function(e, r, i) {
		return n = t(e, r, i), !n;
	}), !!n;
}
__name(baseSome, "baseSome");
var baseSome_default = baseSome;
function some(e, t, n) {
	var r = isArray_default(e) ? arraySome_default : baseSome_default;
	return n && isIterateeCall_default(e, t, n) && (t = void 0), r(e, baseIteratee_default(t, 3));
}
__name(some, "some");
var some_default = some, createSet_default = Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == Infinity ? function(e) {
	return new Set_default(e);
} : noop_default, LARGE_ARRAY_SIZE3 = 200;
function baseUniq(e, t, n) {
	var r = -1, i = arrayIncludes_default, a = e.length, o = !0, s = [], c = s;
	if (n) o = !1, i = arrayIncludesWith_default;
	else if (a >= LARGE_ARRAY_SIZE3) {
		var l = t ? null : createSet_default(e);
		if (l) return setToArray_default(l);
		o = !1, i = cacheHas_default, c = new SetCache_default();
	} else c = t ? [] : s;
	outer: for (; ++r < a;) {
		var u = e[r], d = t ? t(u) : u;
		if (u = n || u !== 0 ? u : 0, o && d === d) {
			for (var f = c.length; f--;) if (c[f] === d) continue outer;
			t && c.push(d), s.push(u);
		} else i(c, d, n) || (c !== s && c.push(d), s.push(u));
	}
	return s;
}
__name(baseUniq, "baseUniq");
var baseUniq_default = baseUniq;
function uniq(e) {
	return e && e.length ? baseUniq_default(e) : [];
}
__name(uniq, "uniq");
var uniq_default = uniq;
function PRINT_ERROR(e) {
	console && console.error && console.error(`Error: ${e}`);
}
__name(PRINT_ERROR, "PRINT_ERROR");
function PRINT_WARNING(e) {
	console && console.warn && console.warn(`Warning: ${e}`);
}
__name(PRINT_WARNING, "PRINT_WARNING");
function timer(e) {
	let t = (/* @__PURE__ */ new Date()).getTime(), n = e();
	return {
		time: (/* @__PURE__ */ new Date()).getTime() - t,
		value: n
	};
}
__name(timer, "timer");
function toFastProperties(e) {
	function t() {}
	__name(t, "FakeConstructor"), t.prototype = e;
	let n = new t();
	function r() {
		return typeof n.bar;
	}
	return __name(r, "fakeAccess"), r(), r(), e;
}
__name(toFastProperties, "toFastProperties");
function tokenLabel(e) {
	return hasTokenLabel(e) ? e.LABEL : e.name;
}
__name(tokenLabel, "tokenLabel");
function hasTokenLabel(e) {
	return isString_default(e.LABEL) && e.LABEL !== "";
}
__name(hasTokenLabel, "hasTokenLabel");
var AbstractProduction = class {
	static #e = __name(this, "AbstractProduction");
	get definition() {
		return this._definition;
	}
	set definition(e) {
		this._definition = e;
	}
	constructor(e) {
		this._definition = e;
	}
	accept(e) {
		e.visit(this), forEach_default(this.definition, (t) => {
			t.accept(e);
		});
	}
}, NonTerminal = class extends AbstractProduction {
	static #e = __name(this, "NonTerminal");
	constructor(e) {
		super([]), this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
	set definition(e) {}
	get definition() {
		return this.referencedRule === void 0 ? [] : this.referencedRule.definition;
	}
	accept(e) {
		e.visit(this);
	}
}, Rule = class extends AbstractProduction {
	static #e = __name(this, "Rule");
	constructor(e) {
		super(e.definition), this.orgText = "", assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, Alternative = class extends AbstractProduction {
	static #e = __name(this, "Alternative");
	constructor(e) {
		super(e.definition), this.ignoreAmbiguities = !1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, Option = class extends AbstractProduction {
	static #e = __name(this, "Option");
	constructor(e) {
		super(e.definition), this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, RepetitionMandatory = class extends AbstractProduction {
	static #e = __name(this, "RepetitionMandatory");
	constructor(e) {
		super(e.definition), this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, RepetitionMandatoryWithSeparator = class extends AbstractProduction {
	static #e = __name(this, "RepetitionMandatoryWithSeparator");
	constructor(e) {
		super(e.definition), this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, Repetition = class extends AbstractProduction {
	static #e = __name(this, "Repetition");
	constructor(e) {
		super(e.definition), this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, RepetitionWithSeparator = class extends AbstractProduction {
	static #e = __name(this, "RepetitionWithSeparator");
	constructor(e) {
		super(e.definition), this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, Alternation = class extends AbstractProduction {
	static #e = __name(this, "Alternation");
	get definition() {
		return this._definition;
	}
	set definition(e) {
		this._definition = e;
	}
	constructor(e) {
		super(e.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
}, Terminal = class {
	static #e = __name(this, "Terminal");
	constructor(e) {
		this.idx = 1, assign_default(this, pickBy_default(e, (e) => e !== void 0));
	}
	accept(e) {
		e.visit(this);
	}
};
function serializeGrammar(e) {
	return map_default(e, serializeProduction);
}
__name(serializeGrammar, "serializeGrammar");
function serializeProduction(e) {
	function t(e) {
		return map_default(e, serializeProduction);
	}
	if (__name(t, "convertDefinition"), e instanceof NonTerminal) {
		let t = {
			type: "NonTerminal",
			name: e.nonTerminalName,
			idx: e.idx
		};
		return isString_default(e.label) && (t.label = e.label), t;
	} else if (e instanceof Alternative) return {
		type: "Alternative",
		definition: t(e.definition)
	};
	else if (e instanceof Option) return {
		type: "Option",
		idx: e.idx,
		definition: t(e.definition)
	};
	else if (e instanceof RepetitionMandatory) return {
		type: "RepetitionMandatory",
		idx: e.idx,
		definition: t(e.definition)
	};
	else if (e instanceof RepetitionMandatoryWithSeparator) return {
		type: "RepetitionMandatoryWithSeparator",
		idx: e.idx,
		separator: serializeProduction(new Terminal({ terminalType: e.separator })),
		definition: t(e.definition)
	};
	else if (e instanceof RepetitionWithSeparator) return {
		type: "RepetitionWithSeparator",
		idx: e.idx,
		separator: serializeProduction(new Terminal({ terminalType: e.separator })),
		definition: t(e.definition)
	};
	else if (e instanceof Repetition) return {
		type: "Repetition",
		idx: e.idx,
		definition: t(e.definition)
	};
	else if (e instanceof Alternation) return {
		type: "Alternation",
		idx: e.idx,
		definition: t(e.definition)
	};
	else if (e instanceof Terminal) {
		let t = {
			type: "Terminal",
			name: e.terminalType.name,
			label: tokenLabel(e.terminalType),
			idx: e.idx
		};
		isString_default(e.label) && (t.terminalLabel = e.label);
		let n = e.terminalType.PATTERN;
		return e.terminalType.PATTERN && (t.pattern = isRegExp_default(n) ? n.source : n), t;
	} else if (e instanceof Rule) return {
		type: "Rule",
		name: e.name,
		orgText: e.orgText,
		definition: t(e.definition)
	};
	else throw Error("non exhaustive match");
}
__name(serializeProduction, "serializeProduction");
var GAstVisitor = class {
	static #e = __name(this, "GAstVisitor");
	visit(e) {
		let t = e;
		switch (t.constructor) {
			case NonTerminal: return this.visitNonTerminal(t);
			case Alternative: return this.visitAlternative(t);
			case Option: return this.visitOption(t);
			case RepetitionMandatory: return this.visitRepetitionMandatory(t);
			case RepetitionMandatoryWithSeparator: return this.visitRepetitionMandatoryWithSeparator(t);
			case RepetitionWithSeparator: return this.visitRepetitionWithSeparator(t);
			case Repetition: return this.visitRepetition(t);
			case Alternation: return this.visitAlternation(t);
			case Terminal: return this.visitTerminal(t);
			case Rule: return this.visitRule(t);
			default: throw Error("non exhaustive match");
		}
	}
	/* c8 ignore next */
	visitNonTerminal(e) {}
	/* c8 ignore next */
	visitAlternative(e) {}
	/* c8 ignore next */
	visitOption(e) {}
	/* c8 ignore next */
	visitRepetition(e) {}
	/* c8 ignore next */
	visitRepetitionMandatory(e) {}
	/* c8 ignore next 3 */
	visitRepetitionMandatoryWithSeparator(e) {}
	/* c8 ignore next */
	visitRepetitionWithSeparator(e) {}
	/* c8 ignore next */
	visitAlternation(e) {}
	/* c8 ignore next */
	visitTerminal(e) {}
	/* c8 ignore next */
	visitRule(e) {}
};
function isSequenceProd(e) {
	return e instanceof Alternative || e instanceof Option || e instanceof Repetition || e instanceof RepetitionMandatory || e instanceof RepetitionMandatoryWithSeparator || e instanceof RepetitionWithSeparator || e instanceof Terminal || e instanceof Rule;
}
__name(isSequenceProd, "isSequenceProd");
function isOptionalProd(e, t = []) {
	return e instanceof Option || e instanceof Repetition || e instanceof RepetitionWithSeparator ? !0 : e instanceof Alternation ? some_default(e.definition, (e) => isOptionalProd(e, t)) : e instanceof NonTerminal && includes_default(t, e) ? !1 : e instanceof AbstractProduction ? (e instanceof NonTerminal && t.push(e), every_default(e.definition, (e) => isOptionalProd(e, t))) : !1;
}
__name(isOptionalProd, "isOptionalProd");
function isBranchingProd(e) {
	return e instanceof Alternation;
}
__name(isBranchingProd, "isBranchingProd");
function getProductionDslName(e) {
	if (e instanceof NonTerminal) return "SUBRULE";
	if (e instanceof Option) return "OPTION";
	if (e instanceof Alternation) return "OR";
	if (e instanceof RepetitionMandatory) return "AT_LEAST_ONE";
	if (e instanceof RepetitionMandatoryWithSeparator) return "AT_LEAST_ONE_SEP";
	if (e instanceof RepetitionWithSeparator) return "MANY_SEP";
	if (e instanceof Repetition) return "MANY";
	if (e instanceof Terminal) return "CONSUME";
	throw Error("non exhaustive match");
}
__name(getProductionDslName, "getProductionDslName");
var RestWalker = class {
	static #e = __name(this, "RestWalker");
	walk(e, t = []) {
		forEach_default(e.definition, (n, r) => {
			let i = drop_default(e.definition, r + 1);
			if (n instanceof NonTerminal) this.walkProdRef(n, i, t);
			else if (n instanceof Terminal) this.walkTerminal(n, i, t);
			else if (n instanceof Alternative) this.walkFlat(n, i, t);
			else if (n instanceof Option) this.walkOption(n, i, t);
			else if (n instanceof RepetitionMandatory) this.walkAtLeastOne(n, i, t);
			else if (n instanceof RepetitionMandatoryWithSeparator) this.walkAtLeastOneSep(n, i, t);
			else if (n instanceof RepetitionWithSeparator) this.walkManySep(n, i, t);
			else if (n instanceof Repetition) this.walkMany(n, i, t);
			else if (n instanceof Alternation) this.walkOr(n, i, t);
			else throw Error("non exhaustive match");
		});
	}
	walkTerminal(e, t, n) {}
	walkProdRef(e, t, n) {}
	walkFlat(e, t, n) {
		let r = t.concat(n);
		this.walk(e, r);
	}
	walkOption(e, t, n) {
		let r = t.concat(n);
		this.walk(e, r);
	}
	walkAtLeastOne(e, t, n) {
		let r = [new Option({ definition: e.definition })].concat(t, n);
		this.walk(e, r);
	}
	walkAtLeastOneSep(e, t, n) {
		let r = restForRepetitionWithSeparator(e, t, n);
		this.walk(e, r);
	}
	walkMany(e, t, n) {
		let r = [new Option({ definition: e.definition })].concat(t, n);
		this.walk(e, r);
	}
	walkManySep(e, t, n) {
		let r = restForRepetitionWithSeparator(e, t, n);
		this.walk(e, r);
	}
	walkOr(e, t, n) {
		let r = t.concat(n);
		forEach_default(e.definition, (e) => {
			let t = new Alternative({ definition: [e] });
			this.walk(t, r);
		});
	}
};
function restForRepetitionWithSeparator(e, t, n) {
	return [new Option({ definition: [new Terminal({ terminalType: e.separator })].concat(e.definition) })].concat(t, n);
}
__name(restForRepetitionWithSeparator, "restForRepetitionWithSeparator");
function first(e) {
	if (e instanceof NonTerminal) return first(e.referencedRule);
	if (e instanceof Terminal) return firstForTerminal(e);
	if (isSequenceProd(e)) return firstForSequence(e);
	if (isBranchingProd(e)) return firstForBranching(e);
	throw Error("non exhaustive match");
}
__name(first, "first");
function firstForSequence(e) {
	let t = [], n = e.definition, r = 0, i = n.length > r, a, o = !0;
	for (; i && o;) a = n[r], o = isOptionalProd(a), t = t.concat(first(a)), r += 1, i = n.length > r;
	return uniq_default(t);
}
__name(firstForSequence, "firstForSequence");
function firstForBranching(e) {
	return uniq_default(flatten_default(map_default(e.definition, (e) => first(e))));
}
__name(firstForBranching, "firstForBranching");
function firstForTerminal(e) {
	return [e.terminalType];
}
__name(firstForTerminal, "firstForTerminal");
var IN = "_~IN~_", ResyncFollowsWalker = class extends RestWalker {
	static #e = __name(this, "ResyncFollowsWalker");
	constructor(e) {
		super(), this.topProd = e, this.follows = {};
	}
	startWalking() {
		return this.walk(this.topProd), this.follows;
	}
	walkTerminal(e, t, n) {}
	walkProdRef(e, t, n) {
		let r = buildBetweenProdsFollowPrefix(e.referencedRule, e.idx) + this.topProd.name, i = first(new Alternative({ definition: t.concat(n) }));
		this.follows[r] = i;
	}
};
function computeAllProdsFollows(e) {
	let t = {};
	return forEach_default(e, (e) => {
		assign_default(t, new ResyncFollowsWalker(e).startWalking());
	}), t;
}
__name(computeAllProdsFollows, "computeAllProdsFollows");
function buildBetweenProdsFollowPrefix(e, t) {
	return e.name + t + IN;
}
__name(buildBetweenProdsFollowPrefix, "buildBetweenProdsFollowPrefix");
var regExpAstCache = {}, regExpParser = new RegExpParser();
function getRegExpAst(e) {
	let t = e.toString();
	if (regExpAstCache.hasOwnProperty(t)) return regExpAstCache[t];
	{
		let e = regExpParser.pattern(t);
		return regExpAstCache[t] = e, e;
	}
}
__name(getRegExpAst, "getRegExpAst");
function clearRegExpParserCache() {
	regExpAstCache = {};
}
__name(clearRegExpParserCache, "clearRegExpParserCache");
var complementErrorMessage = "Complement Sets are not supported for first char optimization", failedOptimizationPrefixMsg = "Unable to use \"first char\" lexer optimizations:\n";
function getOptimizedStartCodesIndices(e, t = !1) {
	try {
		let t = getRegExpAst(e);
		return firstCharOptimizedIndices(t.value, {}, t.flags.ignoreCase);
	} catch (n) {
		if (n.message === complementErrorMessage) t && PRINT_WARNING(`${failedOptimizationPrefixMsg}	Unable to optimize: < ${e.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
		else {
			let n = "";
			t && (n = "\n	This will disable the lexer's first char optimizations.\n	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details."), PRINT_ERROR(`${failedOptimizationPrefixMsg}
	Failed parsing: < ${e.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + n);
		}
	}
	return [];
}
__name(getOptimizedStartCodesIndices, "getOptimizedStartCodesIndices");
function firstCharOptimizedIndices(e, t, n) {
	switch (e.type) {
		case "Disjunction":
			for (let r = 0; r < e.value.length; r++) firstCharOptimizedIndices(e.value[r], t, n);
			break;
		case "Alternative":
			let r = e.value;
			for (let e = 0; e < r.length; e++) {
				let i = r[e];
				switch (i.type) {
					case "EndAnchor":
					case "GroupBackReference":
					case "Lookahead":
					case "NegativeLookahead":
					case "Lookbehind":
					case "NegativeLookbehind":
					case "StartAnchor":
					case "WordBoundary":
					case "NonWordBoundary": continue;
				}
				let a = i;
				switch (a.type) {
					case "Character":
						addOptimizedIdxToResult(a.value, t, n);
						break;
					case "Set":
						if (a.complement === !0) throw Error(complementErrorMessage);
						forEach_default(a.value, (e) => {
							if (typeof e == "number") addOptimizedIdxToResult(e, t, n);
							else {
								let r = e;
								if (n === !0) for (let e = r.from; e <= r.to; e++) addOptimizedIdxToResult(e, t, n);
								else {
									for (let e = r.from; e <= r.to && e < minOptimizationVal; e++) addOptimizedIdxToResult(e, t, n);
									if (r.to >= minOptimizationVal) {
										let e = r.from >= minOptimizationVal ? r.from : minOptimizationVal, n = r.to, i = charCodeToOptimizedIndex(e), a = charCodeToOptimizedIndex(n);
										for (let e = i; e <= a; e++) t[e] = e;
									}
								}
							}
						});
						break;
					case "Group":
						firstCharOptimizedIndices(a.value, t, n);
						break;
					default: throw Error("Non Exhaustive Match");
				}
				let o = a.quantifier !== void 0 && a.quantifier.atLeast === 0;
				if (a.type === "Group" && isWholeOptional(a) === !1 || a.type !== "Group" && o === !1) break;
			}
			break;
		default: throw Error("non exhaustive match!");
	}
	return values_default(t);
}
__name(firstCharOptimizedIndices, "firstCharOptimizedIndices");
function addOptimizedIdxToResult(e, t, n) {
	let r = charCodeToOptimizedIndex(e);
	t[r] = r, n === !0 && handleIgnoreCase(e, t);
}
__name(addOptimizedIdxToResult, "addOptimizedIdxToResult");
function handleIgnoreCase(e, t) {
	let n = String.fromCharCode(e), r = n.toUpperCase();
	if (r !== n) {
		let e = charCodeToOptimizedIndex(r.charCodeAt(0));
		t[e] = e;
	} else {
		let e = n.toLowerCase();
		if (e !== n) {
			let n = charCodeToOptimizedIndex(e.charCodeAt(0));
			t[n] = n;
		}
	}
}
__name(handleIgnoreCase, "handleIgnoreCase");
function findCode(e, t) {
	return find_default(e.value, (e) => {
		if (typeof e == "number") return includes_default(t, e);
		{
			let n = e;
			return find_default(t, (e) => n.from <= e && e <= n.to) !== void 0;
		}
	});
}
__name(findCode, "findCode");
function isWholeOptional(e) {
	let t = e.quantifier;
	return t && t.atLeast === 0 ? !0 : e.value ? isArray_default(e.value) ? every_default(e.value, isWholeOptional) : isWholeOptional(e.value) : !1;
}
__name(isWholeOptional, "isWholeOptional");
var CharCodeFinder = class extends BaseRegExpVisitor {
	static #e = __name(this, "CharCodeFinder");
	constructor(e) {
		super(), this.targetCharCodes = e, this.found = !1;
	}
	visitChildren(e) {
		if (this.found !== !0) {
			switch (e.type) {
				case "Lookahead":
					this.visitLookahead(e);
					return;
				case "NegativeLookahead":
					this.visitNegativeLookahead(e);
					return;
				case "Lookbehind":
					this.visitLookbehind(e);
					return;
				case "NegativeLookbehind":
					this.visitNegativeLookbehind(e);
					return;
			}
			super.visitChildren(e);
		}
	}
	visitCharacter(e) {
		includes_default(this.targetCharCodes, e.value) && (this.found = !0);
	}
	visitSet(e) {
		e.complement ? findCode(e, this.targetCharCodes) === void 0 && (this.found = !0) : findCode(e, this.targetCharCodes) !== void 0 && (this.found = !0);
	}
};
function canMatchCharCode(e, t) {
	if (t instanceof RegExp) {
		let n = getRegExpAst(t), r = new CharCodeFinder(e);
		return r.visit(n), r.found;
	} else return find_default(t, (t) => includes_default(e, t.charCodeAt(0))) !== void 0;
}
__name(canMatchCharCode, "canMatchCharCode");
var PATTERN = "PATTERN", DEFAULT_MODE = "defaultMode", MODES = "modes";
function analyzeTokenTypes(e, t) {
	t = defaults_default(t, {
		debug: !1,
		safeMode: !1,
		positionTracking: "full",
		lineTerminatorCharacters: ["\r", "\n"],
		tracer: /* @__PURE__ */ __name((e, t) => t(), "tracer")
	});
	let n = t.tracer;
	n("initCharCodeToOptimizedIndexMap", () => {
		initCharCodeToOptimizedIndexMap();
	});
	let r;
	n("Reject Lexer.NA", () => {
		r = reject_default(e, (e) => e[PATTERN] === Lexer.NA);
	});
	let i = !1, a;
	n("Transform Patterns", () => {
		i = !1, a = map_default(r, (e) => {
			let t = e[PATTERN];
			if (isRegExp_default(t)) {
				let e = t.source;
				return e.length === 1 && e !== "^" && e !== "$" && e !== "." && !t.ignoreCase ? e : e.length === 2 && e[0] === "\\" && !includes_default([
					"d",
					"D",
					"s",
					"S",
					"t",
					"r",
					"n",
					"t",
					"0",
					"c",
					"b",
					"B",
					"f",
					"v",
					"w",
					"W"
				], e[1]) ? e[1] : addStickyFlag(t);
			} else if (isFunction_default(t)) return i = !0, { exec: t };
			else if (typeof t == "object") return i = !0, t;
			else if (typeof t == "string") {
				if (t.length === 1) return t;
				{
					let e = t.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
					return addStickyFlag(new RegExp(e));
				}
			} else throw Error("non exhaustive match");
		});
	});
	let s, c, l, u, d;
	n("misc mapping", () => {
		s = map_default(r, (e) => e.tokenTypeIdx), c = map_default(r, (e) => {
			let t = e.GROUP;
			if (t !== Lexer.SKIPPED) {
				if (isString_default(t)) return t;
				if (isUndefined_default(t)) return !1;
				throw Error("non exhaustive match");
			}
		}), l = map_default(r, (e) => {
			let t = e.LONGER_ALT;
			if (t) return isArray_default(t) ? map_default(t, (e) => indexOf_default(r, e)) : [indexOf_default(r, t)];
		}), u = map_default(r, (e) => e.PUSH_MODE), d = map_default(r, (e) => has_default(e, "POP_MODE"));
	});
	let f;
	n("Line Terminator Handling", () => {
		let e = getCharCodes(t.lineTerminatorCharacters);
		f = map_default(r, (e) => !1), t.positionTracking !== "onlyOffset" && (f = map_default(r, (t) => has_default(t, "LINE_BREAKS") ? !!t.LINE_BREAKS : checkLineBreaksIssues(t, e) === !1 && canMatchCharCode(e, t.PATTERN)));
	});
	let p, m, h, g;
	n("Misc Mapping #2", () => {
		p = map_default(r, isCustomPattern), m = map_default(a, isShortPattern), h = reduce_default(r, (e, t) => {
			let n = t.GROUP;
			return isString_default(n) && n !== Lexer.SKIPPED && (e[n] = []), e;
		}, {}), g = map_default(a, (e, t) => ({
			pattern: a[t],
			longerAlt: l[t],
			canLineTerminator: f[t],
			isCustom: p[t],
			short: m[t],
			group: c[t],
			push: u[t],
			pop: d[t],
			tokenTypeIdx: s[t],
			tokenType: r[t]
		}));
	});
	let _ = !0, v = [];
	return t.safeMode || n("First Char Optimization", () => {
		v = reduce_default(r, (e, n, r) => {
			if (typeof n.PATTERN == "string") addToMapOfArrays(e, charCodeToOptimizedIndex(n.PATTERN.charCodeAt(0)), g[r]);
			else if (isArray_default(n.START_CHARS_HINT)) {
				let t;
				forEach_default(n.START_CHARS_HINT, (n) => {
					let i = charCodeToOptimizedIndex(typeof n == "string" ? n.charCodeAt(0) : n);
					t !== i && (t = i, addToMapOfArrays(e, i, g[r]));
				});
			} else if (isRegExp_default(n.PATTERN)) if (n.PATTERN.unicode) _ = !1, t.ensureOptimizations && PRINT_ERROR(`${failedOptimizationPrefixMsg}	Unable to analyze < ${n.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
			else {
				let i = getOptimizedStartCodesIndices(n.PATTERN, t.ensureOptimizations);
				isEmpty_default(i) && (_ = !1), forEach_default(i, (t) => {
					addToMapOfArrays(e, t, g[r]);
				});
			}
			else t.ensureOptimizations && PRINT_ERROR(`${failedOptimizationPrefixMsg}	TokenType: <${n.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), _ = !1;
			return e;
		}, []);
	}), {
		emptyGroups: h,
		patternIdxToConfig: g,
		charCodeToPatternIdxToConfig: v,
		hasCustom: i,
		canBeOptimized: _
	};
}
__name(analyzeTokenTypes, "analyzeTokenTypes");
function validatePatterns(e, t) {
	let n = [], r = findMissingPatterns(e);
	n = n.concat(r.errors);
	let i = findInvalidPatterns(r.valid), a = i.valid;
	return n = n.concat(i.errors), n = n.concat(validateRegExpPattern(a)), n = n.concat(findInvalidGroupType(a)), n = n.concat(findModesThatDoNotExist(a, t)), n = n.concat(findUnreachablePatterns(a)), n;
}
__name(validatePatterns, "validatePatterns");
function validateRegExpPattern(e) {
	let t = [], n = filter_default(e, (e) => isRegExp_default(e[PATTERN]));
	return t = t.concat(findEndOfInputAnchor(n)), t = t.concat(findStartOfInputAnchor(n)), t = t.concat(findUnsupportedFlags(n)), t = t.concat(findDuplicatePatterns(n)), t = t.concat(findEmptyMatchRegExps(n)), t;
}
__name(validateRegExpPattern, "validateRegExpPattern");
function findMissingPatterns(e) {
	let t = filter_default(e, (e) => !has_default(e, PATTERN));
	return {
		errors: map_default(t, (e) => ({
			message: "Token Type: ->" + e.name + "<- missing static 'PATTERN' property",
			type: LexerDefinitionErrorType.MISSING_PATTERN,
			tokenTypes: [e]
		})),
		valid: difference_default(e, t)
	};
}
__name(findMissingPatterns, "findMissingPatterns");
function findInvalidPatterns(e) {
	let t = filter_default(e, (e) => {
		let t = e[PATTERN];
		return !isRegExp_default(t) && !isFunction_default(t) && !has_default(t, "exec") && !isString_default(t);
	});
	return {
		errors: map_default(t, (e) => ({
			message: "Token Type: ->" + e.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
			type: LexerDefinitionErrorType.INVALID_PATTERN,
			tokenTypes: [e]
		})),
		valid: difference_default(e, t)
	};
}
__name(findInvalidPatterns, "findInvalidPatterns");
var end_of_input = /[^\\][$]/;
function findEndOfInputAnchor(e) {
	class t extends BaseRegExpVisitor {
		static #e = __name(this, "EndAnchorFinder");
		constructor() {
			super(...arguments), this.found = !1;
		}
		visitEndAnchor(e) {
			this.found = !0;
		}
	}
	return map_default(filter_default(e, (e) => {
		let n = e.PATTERN;
		try {
			let e = getRegExpAst(n), r = new t();
			return r.visit(e), r.found;
		} catch {
			return end_of_input.test(n.source);
		}
	}), (e) => ({
		message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + e.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
		type: LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
		tokenTypes: [e]
	}));
}
__name(findEndOfInputAnchor, "findEndOfInputAnchor");
function findEmptyMatchRegExps(e) {
	return map_default(filter_default(e, (e) => e.PATTERN.test("")), (e) => ({
		message: "Token Type: ->" + e.name + "<- static 'PATTERN' must not match an empty string",
		type: LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
		tokenTypes: [e]
	}));
}
__name(findEmptyMatchRegExps, "findEmptyMatchRegExps");
var start_of_input = /[^\\[][\^]|^\^/;
function findStartOfInputAnchor(e) {
	class t extends BaseRegExpVisitor {
		static #e = __name(this, "StartAnchorFinder");
		constructor() {
			super(...arguments), this.found = !1;
		}
		visitStartAnchor(e) {
			this.found = !0;
		}
	}
	return map_default(filter_default(e, (e) => {
		let n = e.PATTERN;
		try {
			let e = getRegExpAst(n), r = new t();
			return r.visit(e), r.found;
		} catch {
			return start_of_input.test(n.source);
		}
	}), (e) => ({
		message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + e.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
		type: LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
		tokenTypes: [e]
	}));
}
__name(findStartOfInputAnchor, "findStartOfInputAnchor");
function findUnsupportedFlags(e) {
	return map_default(filter_default(e, (e) => {
		let t = e[PATTERN];
		return t instanceof RegExp && (t.multiline || t.global);
	}), (e) => ({
		message: "Token Type: ->" + e.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
		type: LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
		tokenTypes: [e]
	}));
}
__name(findUnsupportedFlags, "findUnsupportedFlags");
function findDuplicatePatterns(e) {
	let t = [], n = map_default(e, (n) => reduce_default(e, (e, r) => n.PATTERN.source === r.PATTERN.source && !includes_default(t, r) && r.PATTERN !== Lexer.NA ? (t.push(r), e.push(r), e) : e, []));
	return n = compact_default(n), map_default(filter_default(n, (e) => e.length > 1), (e) => {
		let t = map_default(e, (e) => e.name);
		return {
			message: `The same RegExp pattern ->${head_default(e).PATTERN}<-has been used in all of the following Token Types: ${t.join(", ")} <-`,
			type: LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
			tokenTypes: e
		};
	});
}
__name(findDuplicatePatterns, "findDuplicatePatterns");
function findInvalidGroupType(e) {
	return map_default(filter_default(e, (e) => {
		if (!has_default(e, "GROUP")) return !1;
		let t = e.GROUP;
		return t !== Lexer.SKIPPED && t !== Lexer.NA && !isString_default(t);
	}), (e) => ({
		message: "Token Type: ->" + e.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
		type: LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
		tokenTypes: [e]
	}));
}
__name(findInvalidGroupType, "findInvalidGroupType");
function findModesThatDoNotExist(e, t) {
	return map_default(filter_default(e, (e) => e.PUSH_MODE !== void 0 && !includes_default(t, e.PUSH_MODE)), (e) => ({
		message: `Token Type: ->${e.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${e.PUSH_MODE}<-which does not exist`,
		type: LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
		tokenTypes: [e]
	}));
}
__name(findModesThatDoNotExist, "findModesThatDoNotExist");
function findUnreachablePatterns(e) {
	let t = [], n = reduce_default(e, (e, t, n) => {
		let r = t.PATTERN;
		return r === Lexer.NA || (isString_default(r) ? e.push({
			str: r,
			idx: n,
			tokenType: t
		}) : isRegExp_default(r) && noMetaChar(r) && e.push({
			str: r.source,
			idx: n,
			tokenType: t
		})), e;
	}, []);
	return forEach_default(e, (e, r) => {
		forEach_default(n, ({ str: n, idx: i, tokenType: a }) => {
			if (r < i && tryToMatchStrToPattern(n, e.PATTERN)) {
				let n = `Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${e.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
				t.push({
					message: n,
					type: LexerDefinitionErrorType.UNREACHABLE_PATTERN,
					tokenTypes: [e, a]
				});
			}
		});
	}), t;
}
__name(findUnreachablePatterns, "findUnreachablePatterns");
function tryToMatchStrToPattern(e, t) {
	if (isRegExp_default(t)) {
		if (usesLookAheadOrBehind(t)) return !1;
		let n = t.exec(e);
		return n !== null && n.index === 0;
	} else if (isFunction_default(t)) return t(e, 0, [], {});
	else if (has_default(t, "exec")) return t.exec(e, 0, [], {});
	else if (typeof t == "string") return t === e;
	else throw Error("non exhaustive match");
}
__name(tryToMatchStrToPattern, "tryToMatchStrToPattern");
function noMetaChar(e) {
	return find_default([
		".",
		"\\",
		"[",
		"]",
		"|",
		"^",
		"$",
		"(",
		")",
		"?",
		"*",
		"+",
		"{"
	], (t) => e.source.indexOf(t) !== -1) === void 0;
}
__name(noMetaChar, "noMetaChar");
function usesLookAheadOrBehind(e) {
	return /(\(\?=)|(\(\?!)|(\(\?<=)|(\(\?<!)/.test(e.source);
}
__name(usesLookAheadOrBehind, "usesLookAheadOrBehind");
function addStickyFlag(e) {
	let t = e.ignoreCase ? "iy" : "y";
	return RegExp(`${e.source}`, t);
}
__name(addStickyFlag, "addStickyFlag");
function performRuntimeChecks(e, t, n) {
	let r = [];
	return has_default(e, DEFAULT_MODE) || r.push({
		message: "A MultiMode Lexer cannot be initialized without a <" + DEFAULT_MODE + "> property in its definition\n",
		type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
	}), has_default(e, MODES) || r.push({
		message: "A MultiMode Lexer cannot be initialized without a <" + MODES + "> property in its definition\n",
		type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
	}), has_default(e, MODES) && has_default(e, DEFAULT_MODE) && !has_default(e.modes, e.defaultMode) && r.push({
		message: `A MultiMode Lexer cannot be initialized with a ${DEFAULT_MODE}: <${e.defaultMode}>which does not exist
`,
		type: LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
	}), has_default(e, MODES) && forEach_default(e.modes, (e, t) => {
		forEach_default(e, (n, i) => {
			isUndefined_default(n) ? r.push({
				message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${t}> at index: <${i}>
`,
				type: LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
			}) : has_default(n, "LONGER_ALT") && forEach_default(isArray_default(n.LONGER_ALT) ? n.LONGER_ALT : [n.LONGER_ALT], (i) => {
				!isUndefined_default(i) && !includes_default(e, i) && r.push({
					message: `A MultiMode Lexer cannot be initialized with a longer_alt <${i.name}> on token <${n.name}> outside of mode <${t}>
`,
					type: LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
				});
			});
		});
	}), r;
}
__name(performRuntimeChecks, "performRuntimeChecks");
function performWarningRuntimeChecks(e, t, n) {
	let r = [], i = !1, a = reject_default(compact_default(flatten_default(values_default(e.modes))), (e) => e[PATTERN] === Lexer.NA), o = getCharCodes(n);
	return t && forEach_default(a, (e) => {
		let t = checkLineBreaksIssues(e, o);
		if (t !== !1) {
			let n = {
				message: buildLineBreakIssueMessage(e, t),
				type: t.issue,
				tokenType: e
			};
			r.push(n);
		} else has_default(e, "LINE_BREAKS") ? e.LINE_BREAKS === !0 && (i = !0) : canMatchCharCode(o, e.PATTERN) && (i = !0);
	}), t && !i && r.push({
		message: "Warning: No LINE_BREAKS Found.\n	This Lexer has been defined to track line and column information,\n	But none of the Token Types can be identified as matching a line terminator.\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n	for details.",
		type: LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS
	}), r;
}
__name(performWarningRuntimeChecks, "performWarningRuntimeChecks");
function cloneEmptyGroups(e) {
	let t = {};
	return forEach_default(keys_default(e), (n) => {
		let r = e[n];
		if (isArray_default(r)) t[n] = [];
		else throw Error("non exhaustive match");
	}), t;
}
__name(cloneEmptyGroups, "cloneEmptyGroups");
function isCustomPattern(e) {
	let t = e.PATTERN;
	if (isRegExp_default(t)) return !1;
	if (isFunction_default(t) || has_default(t, "exec")) return !0;
	if (isString_default(t)) return !1;
	throw Error("non exhaustive match");
}
__name(isCustomPattern, "isCustomPattern");
function isShortPattern(e) {
	return isString_default(e) && e.length === 1 ? e.charCodeAt(0) : !1;
}
__name(isShortPattern, "isShortPattern");
var LineTerminatorOptimizedTester = {
	test: /* @__PURE__ */ __name(function(e) {
		let t = e.length;
		for (let n = this.lastIndex; n < t; n++) {
			let t = e.charCodeAt(n);
			if (t === 10) return this.lastIndex = n + 1, !0;
			if (t === 13) return e.charCodeAt(n + 1) === 10 ? this.lastIndex = n + 2 : this.lastIndex = n + 1, !0;
		}
		return !1;
	}, "test"),
	lastIndex: 0
};
function checkLineBreaksIssues(e, t) {
	if (has_default(e, "LINE_BREAKS")) return !1;
	if (isRegExp_default(e.PATTERN)) {
		try {
			canMatchCharCode(t, e.PATTERN);
		} catch (e) {
			return {
				issue: LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
				errMsg: e.message
			};
		}
		return !1;
	} else if (isString_default(e.PATTERN)) return !1;
	else if (isCustomPattern(e)) return { issue: LexerDefinitionErrorType.CUSTOM_LINE_BREAK };
	else throw Error("non exhaustive match");
}
__name(checkLineBreaksIssues, "checkLineBreaksIssues");
function buildLineBreakIssueMessage(e, t) {
	if (t.issue === LexerDefinitionErrorType.IDENTIFY_TERMINATOR) return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${e.name}> Token Type
	 Root cause: ${t.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
	if (t.issue === LexerDefinitionErrorType.CUSTOM_LINE_BREAK) return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${e.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
	throw Error("non exhaustive match");
}
__name(buildLineBreakIssueMessage, "buildLineBreakIssueMessage");
function getCharCodes(e) {
	return map_default(e, (e) => isString_default(e) ? e.charCodeAt(0) : e);
}
__name(getCharCodes, "getCharCodes");
function addToMapOfArrays(e, t, n) {
	e[t] === void 0 ? e[t] = [n] : e[t].push(n);
}
__name(addToMapOfArrays, "addToMapOfArrays");
var minOptimizationVal = 256, charCodeToOptimizedIdxMap = [];
function charCodeToOptimizedIndex(e) {
	return e < minOptimizationVal ? e : charCodeToOptimizedIdxMap[e];
}
__name(charCodeToOptimizedIndex, "charCodeToOptimizedIndex");
function initCharCodeToOptimizedIndexMap() {
	if (isEmpty_default(charCodeToOptimizedIdxMap)) {
		charCodeToOptimizedIdxMap = Array(65536);
		for (let e = 0; e < 65536; e++) charCodeToOptimizedIdxMap[e] = e > 255 ? 255 + ~~(e / 255) : e;
	}
}
__name(initCharCodeToOptimizedIndexMap, "initCharCodeToOptimizedIndexMap");
function tokenStructuredMatcher(e, t) {
	let n = e.tokenTypeIdx;
	return n === t.tokenTypeIdx ? !0 : t.isParent === !0 && t.categoryMatchesMap[n] === !0;
}
__name(tokenStructuredMatcher, "tokenStructuredMatcher");
function tokenStructuredMatcherNoCategories(e, t) {
	return e.tokenTypeIdx === t.tokenTypeIdx;
}
__name(tokenStructuredMatcherNoCategories, "tokenStructuredMatcherNoCategories");
var tokenShortNameIdx = 1, tokenIdxToClass = {};
function augmentTokenTypes(e) {
	let t = expandCategories(e);
	assignTokenDefaultProps(t), assignCategoriesMapProp(t), assignCategoriesTokensProp(t), forEach_default(t, (e) => {
		e.isParent = e.categoryMatches.length > 0;
	});
}
__name(augmentTokenTypes, "augmentTokenTypes");
function expandCategories(e) {
	let t = clone_default(e), n = e, r = !0;
	for (; r;) {
		n = compact_default(flatten_default(map_default(n, (e) => e.CATEGORIES)));
		let e = difference_default(n, t);
		t = t.concat(e), isEmpty_default(e) ? r = !1 : n = e;
	}
	return t;
}
__name(expandCategories, "expandCategories");
function assignTokenDefaultProps(e) {
	forEach_default(e, (e) => {
		hasShortKeyProperty(e) || (tokenIdxToClass[tokenShortNameIdx] = e, e.tokenTypeIdx = tokenShortNameIdx++), hasCategoriesProperty(e) && !isArray_default(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), hasCategoriesProperty(e) || (e.CATEGORIES = []), hasExtendingTokensTypesProperty(e) || (e.categoryMatches = []), hasExtendingTokensTypesMapProperty(e) || (e.categoryMatchesMap = {});
	});
}
__name(assignTokenDefaultProps, "assignTokenDefaultProps");
function assignCategoriesTokensProp(e) {
	forEach_default(e, (e) => {
		e.categoryMatches = [], forEach_default(e.categoryMatchesMap, (t, n) => {
			e.categoryMatches.push(tokenIdxToClass[n].tokenTypeIdx);
		});
	});
}
__name(assignCategoriesTokensProp, "assignCategoriesTokensProp");
function assignCategoriesMapProp(e) {
	forEach_default(e, (e) => {
		singleAssignCategoriesToksMap([], e);
	});
}
__name(assignCategoriesMapProp, "assignCategoriesMapProp");
function singleAssignCategoriesToksMap(e, t) {
	forEach_default(e, (e) => {
		t.categoryMatchesMap[e.tokenTypeIdx] = !0;
	}), forEach_default(t.CATEGORIES, (n) => {
		let r = e.concat(t);
		includes_default(r, n) || singleAssignCategoriesToksMap(r, n);
	});
}
__name(singleAssignCategoriesToksMap, "singleAssignCategoriesToksMap");
function hasShortKeyProperty(e) {
	return has_default(e, "tokenTypeIdx");
}
__name(hasShortKeyProperty, "hasShortKeyProperty");
function hasCategoriesProperty(e) {
	return has_default(e, "CATEGORIES");
}
__name(hasCategoriesProperty, "hasCategoriesProperty");
function hasExtendingTokensTypesProperty(e) {
	return has_default(e, "categoryMatches");
}
__name(hasExtendingTokensTypesProperty, "hasExtendingTokensTypesProperty");
function hasExtendingTokensTypesMapProperty(e) {
	return has_default(e, "categoryMatchesMap");
}
__name(hasExtendingTokensTypesMapProperty, "hasExtendingTokensTypesMapProperty");
function isTokenType(e) {
	return has_default(e, "tokenTypeIdx");
}
__name(isTokenType, "isTokenType");
var defaultLexerErrorProvider = {
	buildUnableToPopLexerModeMessage(e) {
		return `Unable to pop Lexer Mode after encountering Token ->${e.image}<- The Mode Stack is empty`;
	},
	buildUnexpectedCharactersMessage(e, t, n, r, i, a) {
		return `unexpected character: ->${e.charAt(t)}<- at offset: ${t}, skipped ${n} characters.`;
	}
}, LexerDefinitionErrorType;
(function(e) {
	e[e.MISSING_PATTERN = 0] = "MISSING_PATTERN", e[e.INVALID_PATTERN = 1] = "INVALID_PATTERN", e[e.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", e[e.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", e[e.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", e[e.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", e[e.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", e[e.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", e[e.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", e[e.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", e[e.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", e[e.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", e[e.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", e[e.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", e[e.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", e[e.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", e[e.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", e[e.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(LexerDefinitionErrorType ||= {});
var DEFAULT_LEXER_CONFIG = {
	deferDefinitionErrorsHandling: !1,
	positionTracking: "full",
	lineTerminatorsPattern: /\n|\r\n?/g,
	lineTerminatorCharacters: ["\n", "\r"],
	ensureOptimizations: !1,
	safeMode: !1,
	errorMessageProvider: defaultLexerErrorProvider,
	traceInitPerf: !1,
	skipValidations: !1,
	recoveryEnabled: !0
};
Object.freeze(DEFAULT_LEXER_CONFIG);
var Lexer = class {
	static #e = __name(this, "Lexer");
	constructor(e, t = DEFAULT_LEXER_CONFIG) {
		if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (e, t) => {
			if (this.traceInitPerf === !0) {
				this.traceInitIndent++;
				let n = Array(this.traceInitIndent + 1).join("	");
				this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n}--> <${e}>`);
				let { time: r, value: i } = timer(t), a = r > 10 ? console.warn : console.log;
				return this.traceInitIndent < this.traceInitMaxIdent && a(`${n}<-- <${e}> time: ${r}ms`), this.traceInitIndent--, i;
			} else return t();
		}, typeof t == "boolean") throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
		this.config = assign_default({}, DEFAULT_LEXER_CONFIG, t);
		let n = this.config.traceInitPerf;
		n === !0 ? (this.traceInitMaxIdent = Infinity, this.traceInitPerf = !0) : typeof n == "number" && (this.traceInitMaxIdent = n, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
			let n, r = !0;
			this.TRACE_INIT("Lexer Config handling", () => {
				if (this.config.lineTerminatorsPattern === DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) this.config.lineTerminatorsPattern = LineTerminatorOptimizedTester;
				else if (this.config.lineTerminatorCharacters === DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
				if (t.safeMode && t.ensureOptimizations) throw Error("\"safeMode\" and \"ensureOptimizations\" flags are mutually exclusive.");
				this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), isArray_default(e) ? n = {
					modes: { defaultMode: clone_default(e) },
					defaultMode: DEFAULT_MODE
				} : (r = !1, n = clone_default(e));
			}), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
				this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(performRuntimeChecks(n, this.trackStartLines, this.config.lineTerminatorCharacters));
			}), this.TRACE_INIT("performWarningRuntimeChecks", () => {
				this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(performWarningRuntimeChecks(n, this.trackStartLines, this.config.lineTerminatorCharacters));
			})), n.modes = n.modes ? n.modes : {}, forEach_default(n.modes, (e, t) => {
				n.modes[t] = reject_default(e, (e) => isUndefined_default(e));
			});
			let i = keys_default(n.modes);
			if (forEach_default(n.modes, (e, n) => {
				this.TRACE_INIT(`Mode: <${n}> processing`, () => {
					if (this.modes.push(n), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
						this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(validatePatterns(e, i));
					}), isEmpty_default(this.lexerDefinitionErrors)) {
						augmentTokenTypes(e);
						let r;
						this.TRACE_INIT("analyzeTokenTypes", () => {
							r = analyzeTokenTypes(e, {
								lineTerminatorCharacters: this.config.lineTerminatorCharacters,
								positionTracking: t.positionTracking,
								ensureOptimizations: t.ensureOptimizations,
								safeMode: t.safeMode,
								tracer: this.TRACE_INIT
							});
						}), this.patternIdxToConfig[n] = r.patternIdxToConfig, this.charCodeToPatternIdxToConfig[n] = r.charCodeToPatternIdxToConfig, this.emptyGroups = assign_default({}, this.emptyGroups, r.emptyGroups), this.hasCustom = r.hasCustom || this.hasCustom, this.canModeBeOptimized[n] = r.canBeOptimized;
					}
				});
			}), this.defaultMode = n.defaultMode, !isEmpty_default(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
				let e = map_default(this.lexerDefinitionErrors, (e) => e.message).join("-----------------------\n");
				throw Error("Errors detected in definition of Lexer:\n" + e);
			}
			forEach_default(this.lexerDefinitionWarning, (e) => {
				PRINT_WARNING(e.message);
			}), this.TRACE_INIT("Choosing sub-methods implementations", () => {
				if (r && (this.handleModes = noop_default), this.trackStartLines === !1 && (this.computeNewColumn = identity_default), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = noop_default), /full/i.test(this.config.positionTracking)) this.createTokenInstance = this.createFullToken;
				else if (/onlyStart/i.test(this.config.positionTracking)) this.createTokenInstance = this.createStartOnlyToken;
				else if (/onlyOffset/i.test(this.config.positionTracking)) this.createTokenInstance = this.createOffsetOnlyToken;
				else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
				this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
			}), this.TRACE_INIT("Failed Optimization Warnings", () => {
				let e = reduce_default(this.canModeBeOptimized, (e, t, n) => (t === !1 && e.push(n), e), []);
				if (t.ensureOptimizations && !isEmpty_default(e)) throw Error(`Lexer Modes: < ${e.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
			}), this.TRACE_INIT("clearRegExpParserCache", () => {
				clearRegExpParserCache();
			}), this.TRACE_INIT("toFastProperties", () => {
				toFastProperties(this);
			});
		});
	}
	tokenize(e, t = this.defaultMode) {
		if (!isEmpty_default(this.lexerDefinitionErrors)) {
			let e = map_default(this.lexerDefinitionErrors, (e) => e.message).join("-----------------------\n");
			throw Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + e);
		}
		return this.tokenizeInternal(e, t);
	}
	tokenizeInternal(e, t) {
		let n, r, i, a, s, c, l, u, d, f, p, m, h, g, _, v = e, y = v.length, b = 0, x = 0, S = this.hasCustom ? 0 : Math.floor(e.length / 10), C = Array(S), w = [], T = this.trackStartLines ? 1 : void 0, E = this.trackStartLines ? 1 : void 0, D = cloneEmptyGroups(this.emptyGroups), O = this.trackStartLines, k = this.config.lineTerminatorsPattern, A = 0, j = [], M = [], N = [], P = [];
		Object.freeze(P);
		let F = !1, I = /* @__PURE__ */ __name((e) => {
			if (N.length === 1 && e.tokenType.PUSH_MODE === void 0) {
				let t = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(e);
				w.push({
					offset: e.startOffset,
					line: e.startLine,
					column: e.startColumn,
					length: e.image.length,
					message: t
				});
			} else {
				N.pop();
				let e = last_default(N);
				j = this.patternIdxToConfig[e], M = this.charCodeToPatternIdxToConfig[e], A = j.length;
				let t = this.canModeBeOptimized[e] && this.config.safeMode === !1;
				F = !!(M && t);
			}
		}, "pop_mode");
		function L(e) {
			N.push(e), M = this.charCodeToPatternIdxToConfig[e], j = this.patternIdxToConfig[e], A = j.length, A = j.length;
			let t = this.canModeBeOptimized[e] && this.config.safeMode === !1;
			F = !!(M && t);
		}
		__name(L, "push_mode"), L.call(this, t);
		let R, z = this.config.recoveryEnabled;
		for (; b < y;) {
			c = null, d = -1;
			let t = v.charCodeAt(b), o;
			if (F) {
				let e = charCodeToOptimizedIndex(t), n = M[e];
				o = n === void 0 ? P : n;
			} else o = j;
			let S = o.length;
			for (n = 0; n < S; n++) {
				R = o[n];
				let r = R.pattern;
				l = null;
				let f = R.short;
				if (f === !1 ? R.isCustom === !0 ? (_ = r.exec(v, b, C, D), _ === null ? c = null : (c = _[0], d = c.length, _.payload !== void 0 && (l = _.payload))) : (r.lastIndex = b, d = this.matchLength(r, e, b)) : t === f && (d = 1, c = r), d !== -1) {
					if (s = R.longerAlt, s !== void 0) {
						c = e.substring(b, b + d);
						let t = s.length;
						for (i = 0; i < t; i++) {
							let t = j[s[i]], n = t.pattern;
							if (u = null, t.isCustom === !0 ? (_ = n.exec(v, b, C, D), _ === null ? a = null : (a = _[0], _.payload !== void 0 && (u = _.payload))) : (n.lastIndex = b, a = this.match(n, e, b)), a && a.length > c.length) {
								c = a, d = a.length, l = u, R = t;
								break;
							}
						}
					}
					break;
				}
			}
			if (d !== -1) {
				if (f = R.group, f !== void 0 && (c = c === null ? e.substring(b, b + d) : c, p = R.tokenTypeIdx, m = this.createTokenInstance(c, b, p, R.tokenType, T, E, d), this.handlePayload(m, l), f === !1 ? x = this.addToken(C, x, m) : D[f].push(m)), O === !0 && R.canLineTerminator === !0) {
					let t = 0, n, r;
					k.lastIndex = 0;
					do
						c = c === null ? e.substring(b, b + d) : c, n = k.test(c), n === !0 && (r = k.lastIndex - 1, t++);
					while (n === !0);
					t === 0 ? E = this.computeNewColumn(E, d) : (T += t, E = d - r, this.updateTokenEndLineColumnLocation(m, f, r, t, T, E, d));
				} else E = this.computeNewColumn(E, d);
				b += d, this.handleModes(R, I, L, m);
			} else {
				let t = b, n = T, i = E, a = z === !1;
				for (; a === !1 && b < y;) for (b++, r = 0; r < A; r++) {
					let t = j[r], n = t.pattern, i = t.short;
					if (i === !1 ? t.isCustom === !0 ? a = n.exec(v, b, C, D) !== null : (n.lastIndex = b, a = n.exec(e) !== null) : v.charCodeAt(b) === i && (a = !0), a === !0) break;
				}
				if (h = b - t, E = this.computeNewColumn(E, h), g = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(v, t, h, n, i, last_default(N)), w.push({
					offset: t,
					line: n,
					column: i,
					length: h,
					message: g
				}), z === !1) break;
			}
		}
		return this.hasCustom || (C.length = x), {
			tokens: C,
			groups: D,
			errors: w
		};
	}
	handleModes(e, t, n, r) {
		if (e.pop === !0) {
			let i = e.push;
			t(r), i !== void 0 && n.call(this, i);
		} else e.push !== void 0 && n.call(this, e.push);
	}
	updateTokenEndLineColumnLocation(e, t, n, r, i, a, o) {
		let s, c;
		t !== void 0 && (s = n === o - 1, c = s ? -1 : 0, r === 1 && s === !0 || (e.endLine = i + c, e.endColumn = a - 1 + -c));
	}
	computeNewColumn(e, t) {
		return e + t;
	}
	createOffsetOnlyToken(e, t, n, r) {
		return {
			image: e,
			startOffset: t,
			tokenTypeIdx: n,
			tokenType: r
		};
	}
	createStartOnlyToken(e, t, n, r, i, a) {
		return {
			image: e,
			startOffset: t,
			startLine: i,
			startColumn: a,
			tokenTypeIdx: n,
			tokenType: r
		};
	}
	createFullToken(e, t, n, r, i, a, o) {
		return {
			image: e,
			startOffset: t,
			endOffset: t + o - 1,
			startLine: i,
			endLine: i,
			startColumn: a,
			endColumn: a + o - 1,
			tokenTypeIdx: n,
			tokenType: r
		};
	}
	addTokenUsingPush(e, t, n) {
		return e.push(n), t;
	}
	addTokenUsingMemberAccess(e, t, n) {
		return e[t] = n, t++, t;
	}
	handlePayloadNoCustom(e, t) {}
	handlePayloadWithCustom(e, t) {
		t !== null && (e.payload = t);
	}
	match(e, t, n) {
		return e.test(t) === !0 ? t.substring(n, e.lastIndex) : null;
	}
	matchLength(e, t, n) {
		return e.test(t) === !0 ? e.lastIndex - n : -1;
	}
};
Lexer.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it will be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.", Lexer.NA = /NOT_APPLICABLE/;
function tokenLabel2(e) {
	return hasTokenLabel2(e) ? e.LABEL : e.name;
}
__name(tokenLabel2, "tokenLabel");
function hasTokenLabel2(e) {
	return isString_default(e.LABEL) && e.LABEL !== "";
}
__name(hasTokenLabel2, "hasTokenLabel");
var PARENT = "parent", CATEGORIES = "categories", LABEL = "label", GROUP = "group", PUSH_MODE = "push_mode", POP_MODE = "pop_mode", LONGER_ALT = "longer_alt", LINE_BREAKS = "line_breaks", START_CHARS_HINT = "start_chars_hint";
function createToken(e) {
	return createTokenInternal(e);
}
__name(createToken, "createToken");
function createTokenInternal(e) {
	let t = e.pattern, n = {};
	if (n.name = e.name, isUndefined_default(t) || (n.PATTERN = t), has_default(e, PARENT)) throw "The parent property is no longer supported.\nSee: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
	return has_default(e, CATEGORIES) && (n.CATEGORIES = e[CATEGORIES]), augmentTokenTypes([n]), has_default(e, LABEL) && (n.LABEL = e[LABEL]), has_default(e, GROUP) && (n.GROUP = e[GROUP]), has_default(e, POP_MODE) && (n.POP_MODE = e[POP_MODE]), has_default(e, PUSH_MODE) && (n.PUSH_MODE = e[PUSH_MODE]), has_default(e, LONGER_ALT) && (n.LONGER_ALT = e[LONGER_ALT]), has_default(e, LINE_BREAKS) && (n.LINE_BREAKS = e[LINE_BREAKS]), has_default(e, START_CHARS_HINT) && (n.START_CHARS_HINT = e[START_CHARS_HINT]), n;
}
__name(createTokenInternal, "createTokenInternal");
var EOF = createToken({
	name: "EOF",
	pattern: Lexer.NA
});
augmentTokenTypes([EOF]);
function createTokenInstance(e, t, n, r, i, a, o, s) {
	return {
		image: t,
		startOffset: n,
		endOffset: r,
		startLine: i,
		endLine: a,
		startColumn: o,
		endColumn: s,
		tokenTypeIdx: e.tokenTypeIdx,
		tokenType: e
	};
}
__name(createTokenInstance, "createTokenInstance");
function tokenMatcher(e, t) {
	return tokenStructuredMatcher(e, t);
}
__name(tokenMatcher, "tokenMatcher");
var defaultParserErrorProvider = {
	buildMismatchTokenMessage({ expected: e, actual: t, previous: n, ruleName: r }) {
		return `Expecting ${hasTokenLabel2(e) ? `--> ${tokenLabel2(e)} <--` : `token of type --> ${e.name} <--`} but found --> '${t.image}' <--`;
	},
	buildNotAllInputParsedMessage({ firstRedundant: e, ruleName: t }) {
		return "Redundant input, expecting EOF but found: " + e.image;
	},
	buildNoViableAltMessage({ expectedPathsPerAlt: e, actual: t, previous: n, customUserDescription: r, ruleName: i }) {
		let a = "\nbut found: '" + head_default(t).image + "'";
		return r ? "Expecting: " + r + a : `Expecting: one of these possible Token sequences:
${map_default(map_default(reduce_default(e, (e, t) => e.concat(t), []), (e) => `[${map_default(e, (e) => tokenLabel2(e)).join(", ")}]`), (e, t) => `  ${t + 1}. ${e}`).join("\n")}` + a;
	},
	buildEarlyExitMessage({ expectedIterationPaths: e, actual: t, customUserDescription: n, ruleName: r }) {
		let i = "\nbut found: '" + head_default(t).image + "'";
		return n ? "Expecting: " + n + i : `Expecting: expecting at least one iteration which starts with one of these possible Token sequences::
  <${map_default(e, (e) => `[${map_default(e, (e) => tokenLabel2(e)).join(",")}]`).join(" ,")}>` + i;
	}
};
Object.freeze(defaultParserErrorProvider);
var defaultGrammarResolverErrorProvider = { buildRuleNotFoundError(e, t) {
	return "Invalid grammar, reference to a rule which is not defined: ->" + t.nonTerminalName + "<-\ninside top level rule: ->" + e.name + "<-";
} }, defaultGrammarValidatorErrorProvider = {
	buildDuplicateFoundError(e, t) {
		function n(e) {
			return e instanceof Terminal ? e.terminalType.name : e instanceof NonTerminal ? e.nonTerminalName : "";
		}
		__name(n, "getExtraProductionArgument");
		let r = e.name, i = head_default(t), a = i.idx, s = getProductionDslName(i), c = n(i), l = `->${s}${a > 0 ? a : ""}<- ${c ? `with argument: ->${c}<-` : ""}
                  appears more than once (${t.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
		return l = l.replace(/[ \t]+/g, " "), l = l.replace(/\s\s+/g, "\n"), l;
	},
	buildNamespaceConflictError(e) {
		return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${e.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
	},
	buildAlternationPrefixAmbiguityError(e) {
		let t = map_default(e.prefixPath, (e) => tokenLabel2(e)).join(", "), n = e.alternation.idx === 0 ? "" : e.alternation.idx;
		return `Ambiguous alternatives: <${e.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
	},
	buildAlternationAmbiguityError(e) {
		let t = e.alternation.idx === 0 ? "" : e.alternation.idx, n = e.prefixPath.length === 0, r = `Ambiguous Alternatives Detected: <${e.ambiguityIndices.join(" ,")}> in <OR${t}> inside <${e.topLevelRule.name}> Rule,
`;
		if (n) r += "These alternatives are all empty (match no tokens), making them indistinguishable.\nOnly the last alternative may be empty.\n";
		else {
			let t = map_default(e.prefixPath, (e) => tokenLabel2(e)).join(", ");
			r += `<${t}> may appears as a prefix path in all these alternatives.
`;
		}
		return r += "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\nFor Further details.", r;
	},
	buildEmptyRepetitionError(e) {
		let t = getProductionDslName(e.repetition);
		return e.repetition.idx !== 0 && (t += e.repetition.idx), `The repetition <${t}> within Rule <${e.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
	},
	buildTokenNameError(e) {
		return "deprecated";
	},
	buildEmptyAlternationError(e) {
		return `Ambiguous empty alternative: <${e.emptyChoiceIdx + 1}> in <OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
	},
	buildTooManyAlternativesError(e) {
		return `An Alternation cannot have more than 256 alternatives:
<OR${e.alternation.idx}> inside <${e.topLevelRule.name}> Rule.
 has ${e.alternation.definition.length + 1} alternatives.`;
	},
	buildLeftRecursionError(e) {
		let t = e.topLevelRule.name;
		return `Left Recursion found in grammar.
rule: <${t}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${`${t} --> ${map_default(e.leftRecursionPath, (e) => e.name).concat([t]).join(" --> ")}`}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
	},
	buildInvalidRuleNameError(e) {
		return "deprecated";
	},
	buildDuplicateRuleNameError(e) {
		let t;
		return t = e.topLevelRule instanceof Rule ? e.topLevelRule.name : e.topLevelRule, `Duplicate definition, rule: ->${t}<- is already defined in the grammar: ->${e.grammarName}<-`;
	}
};
function resolveGrammar(e, t) {
	let n = new GastRefResolverVisitor(e, t);
	return n.resolveRefs(), n.errors;
}
__name(resolveGrammar, "resolveGrammar");
var GastRefResolverVisitor = class extends GAstVisitor {
	static #e = __name(this, "GastRefResolverVisitor");
	constructor(e, t) {
		super(), this.nameToTopRule = e, this.errMsgProvider = t, this.errors = [];
	}
	resolveRefs() {
		forEach_default(values_default(this.nameToTopRule), (e) => {
			this.currTopLevel = e, e.accept(this);
		});
	}
	visitNonTerminal(e) {
		let t = this.nameToTopRule[e.nonTerminalName];
		if (t) e.referencedRule = t;
		else {
			let t = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
			this.errors.push({
				message: t,
				type: ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
				ruleName: this.currTopLevel.name,
				unresolvedRefName: e.nonTerminalName
			});
		}
	}
}, AbstractNextPossibleTokensWalker = class extends RestWalker {
	static #e = __name(this, "AbstractNextPossibleTokensWalker");
	constructor(e, t) {
		super(), this.topProd = e, this.path = t, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
	}
	startWalking() {
		if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name) throw Error("The path does not start with the walker's top Rule!");
		return this.ruleStack = clone_default(this.path.ruleStack).reverse(), this.occurrenceStack = clone_default(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
	}
	walk(e, t = []) {
		this.found || super.walk(e, t);
	}
	walkProdRef(e, t, n) {
		if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
			let r = t.concat(n);
			this.updateExpectedNext(), this.walk(e.referencedRule, r);
		}
	}
	updateExpectedNext() {
		isEmpty_default(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
	}
}, NextAfterTokenWalker = class extends AbstractNextPossibleTokensWalker {
	static #e = __name(this, "NextAfterTokenWalker");
	constructor(e, t) {
		super(e, t), this.path = t, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
	}
	walkTerminal(e, t, n) {
		this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found && (this.possibleTokTypes = first(new Alternative({ definition: t.concat(n) })), this.found = !0);
	}
}, AbstractNextTerminalAfterProductionWalker = class extends RestWalker {
	static #e = __name(this, "AbstractNextTerminalAfterProductionWalker");
	constructor(e, t) {
		super(), this.topRule = e, this.occurrence = t, this.result = {
			token: void 0,
			occurrence: void 0,
			isEndOfRule: void 0
		};
	}
	startWalking() {
		return this.walk(this.topRule), this.result;
	}
}, NextTerminalAfterManyWalker = class extends AbstractNextTerminalAfterProductionWalker {
	static #e = __name(this, "NextTerminalAfterManyWalker");
	walkMany(e, t, n) {
		if (e.idx === this.occurrence) {
			let e = head_default(t.concat(n));
			this.result.isEndOfRule = e === void 0, e instanceof Terminal && (this.result.token = e.terminalType, this.result.occurrence = e.idx);
		} else super.walkMany(e, t, n);
	}
}, NextTerminalAfterManySepWalker = class extends AbstractNextTerminalAfterProductionWalker {
	static #e = __name(this, "NextTerminalAfterManySepWalker");
	walkManySep(e, t, n) {
		if (e.idx === this.occurrence) {
			let e = head_default(t.concat(n));
			this.result.isEndOfRule = e === void 0, e instanceof Terminal && (this.result.token = e.terminalType, this.result.occurrence = e.idx);
		} else super.walkManySep(e, t, n);
	}
}, NextTerminalAfterAtLeastOneWalker = class extends AbstractNextTerminalAfterProductionWalker {
	static #e = __name(this, "NextTerminalAfterAtLeastOneWalker");
	walkAtLeastOne(e, t, n) {
		if (e.idx === this.occurrence) {
			let e = head_default(t.concat(n));
			this.result.isEndOfRule = e === void 0, e instanceof Terminal && (this.result.token = e.terminalType, this.result.occurrence = e.idx);
		} else super.walkAtLeastOne(e, t, n);
	}
}, NextTerminalAfterAtLeastOneSepWalker = class extends AbstractNextTerminalAfterProductionWalker {
	static #e = __name(this, "NextTerminalAfterAtLeastOneSepWalker");
	walkAtLeastOneSep(e, t, n) {
		if (e.idx === this.occurrence) {
			let e = head_default(t.concat(n));
			this.result.isEndOfRule = e === void 0, e instanceof Terminal && (this.result.token = e.terminalType, this.result.occurrence = e.idx);
		} else super.walkAtLeastOneSep(e, t, n);
	}
};
function possiblePathsFrom(e, t, n = []) {
	n = clone_default(n);
	let r = [], i = 0;
	function a(t) {
		return t.concat(drop_default(e, i + 1));
	}
	__name(a, "remainingPathWith");
	function s(e) {
		let i = possiblePathsFrom(a(e), t, n);
		return r.concat(i);
	}
	for (__name(s, "getAlternativesForProd"); n.length < t && i < e.length;) {
		let t = e[i];
		if (t instanceof Alternative || t instanceof NonTerminal) return s(t.definition);
		if (t instanceof Option) r = s(t.definition);
		else if (t instanceof RepetitionMandatory) return s(t.definition.concat([new Repetition({ definition: t.definition })]));
		else if (t instanceof RepetitionMandatoryWithSeparator) return s([new Alternative({ definition: t.definition }), new Repetition({ definition: [new Terminal({ terminalType: t.separator })].concat(t.definition) })]);
		else if (t instanceof RepetitionWithSeparator) r = s(t.definition.concat([new Repetition({ definition: [new Terminal({ terminalType: t.separator })].concat(t.definition) })]));
		else if (t instanceof Repetition) r = s(t.definition.concat([new Repetition({ definition: t.definition })]));
		else if (t instanceof Alternation) return forEach_default(t.definition, (e) => {
			isEmpty_default(e.definition) === !1 && (r = s(e.definition));
		}), r;
		else if (t instanceof Terminal) n.push(t.terminalType);
		else throw Error("non exhaustive match");
		i++;
	}
	return r.push({
		partialPath: n,
		suffixDef: drop_default(e, i)
	}), r;
}
__name(possiblePathsFrom, "possiblePathsFrom");
function nextPossibleTokensAfter(e, t, n, r) {
	let i = "EXIT_NONE_TERMINAL", a = [i], o = "EXIT_ALTERNATIVE", s = !1, c = t.length, l = c - r - 1, u = [], d = [];
	for (d.push({
		idx: -1,
		def: e,
		ruleStack: [],
		occurrenceStack: []
	}); !isEmpty_default(d);) {
		let e = d.pop();
		if (e === o) {
			s && last_default(d).idx <= l && d.pop();
			continue;
		}
		let r = e.def, f = e.idx, p = e.ruleStack, m = e.occurrenceStack;
		if (isEmpty_default(r)) continue;
		let h = r[0];
		if (h === i) {
			let e = {
				idx: f,
				def: drop_default(r),
				ruleStack: dropRight_default(p),
				occurrenceStack: dropRight_default(m)
			};
			d.push(e);
		} else if (h instanceof Terminal) if (f < c - 1) {
			let e = f + 1, i = t[e];
			if (n(i, h.terminalType)) {
				let t = {
					idx: e,
					def: drop_default(r),
					ruleStack: p,
					occurrenceStack: m
				};
				d.push(t);
			}
		} else if (f === c - 1) u.push({
			nextTokenType: h.terminalType,
			nextTokenOccurrence: h.idx,
			ruleStack: p,
			occurrenceStack: m
		}), s = !0;
		else throw Error("non exhaustive match");
		else if (h instanceof NonTerminal) {
			let e = clone_default(p);
			e.push(h.nonTerminalName);
			let t = clone_default(m);
			t.push(h.idx);
			let n = {
				idx: f,
				def: h.definition.concat(a, drop_default(r)),
				ruleStack: e,
				occurrenceStack: t
			};
			d.push(n);
		} else if (h instanceof Option) {
			let e = {
				idx: f,
				def: drop_default(r),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(e), d.push(o);
			let t = {
				idx: f,
				def: h.definition.concat(drop_default(r)),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(t);
		} else if (h instanceof RepetitionMandatory) {
			let e = new Repetition({
				definition: h.definition,
				idx: h.idx
			}), t = {
				idx: f,
				def: h.definition.concat([e], drop_default(r)),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(t);
		} else if (h instanceof RepetitionMandatoryWithSeparator) {
			let e = new Repetition({
				definition: [new Terminal({ terminalType: h.separator })].concat(h.definition),
				idx: h.idx
			}), t = {
				idx: f,
				def: h.definition.concat([e], drop_default(r)),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(t);
		} else if (h instanceof RepetitionWithSeparator) {
			let e = {
				idx: f,
				def: drop_default(r),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(e), d.push(o);
			let t = new Repetition({
				definition: [new Terminal({ terminalType: h.separator })].concat(h.definition),
				idx: h.idx
			}), n = {
				idx: f,
				def: h.definition.concat([t], drop_default(r)),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(n);
		} else if (h instanceof Repetition) {
			let e = {
				idx: f,
				def: drop_default(r),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(e), d.push(o);
			let t = new Repetition({
				definition: h.definition,
				idx: h.idx
			}), n = {
				idx: f,
				def: h.definition.concat([t], drop_default(r)),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(n);
		} else if (h instanceof Alternation) for (let e = h.definition.length - 1; e >= 0; e--) {
			let t = {
				idx: f,
				def: h.definition[e].definition.concat(drop_default(r)),
				ruleStack: p,
				occurrenceStack: m
			};
			d.push(t), d.push(o);
		}
		else if (h instanceof Alternative) d.push({
			idx: f,
			def: h.definition.concat(drop_default(r)),
			ruleStack: p,
			occurrenceStack: m
		});
		else if (h instanceof Rule) d.push(expandTopLevelRule(h, f, p, m));
		else throw Error("non exhaustive match");
	}
	return u;
}
__name(nextPossibleTokensAfter, "nextPossibleTokensAfter");
function expandTopLevelRule(e, t, n, r) {
	let i = clone_default(n);
	i.push(e.name);
	let a = clone_default(r);
	return a.push(1), {
		idx: t,
		def: e.definition,
		ruleStack: i,
		occurrenceStack: a
	};
}
__name(expandTopLevelRule, "expandTopLevelRule");
var PROD_TYPE;
(function(e) {
	e[e.OPTION = 0] = "OPTION", e[e.REPETITION = 1] = "REPETITION", e[e.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", e[e.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", e[e.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", e[e.ALTERNATION = 5] = "ALTERNATION";
})(PROD_TYPE ||= {});
function getProdType(e) {
	if (e instanceof Option || e === "Option") return PROD_TYPE.OPTION;
	if (e instanceof Repetition || e === "Repetition") return PROD_TYPE.REPETITION;
	if (e instanceof RepetitionMandatory || e === "RepetitionMandatory") return PROD_TYPE.REPETITION_MANDATORY;
	if (e instanceof RepetitionMandatoryWithSeparator || e === "RepetitionMandatoryWithSeparator") return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
	if (e instanceof RepetitionWithSeparator || e === "RepetitionWithSeparator") return PROD_TYPE.REPETITION_WITH_SEPARATOR;
	if (e instanceof Alternation || e === "Alternation") return PROD_TYPE.ALTERNATION;
	throw Error("non exhaustive match");
}
__name(getProdType, "getProdType");
function getLookaheadPaths(e) {
	let { occurrence: t, rule: n, prodType: r, maxLookahead: i } = e, a = getProdType(r);
	return a === PROD_TYPE.ALTERNATION ? getLookaheadPathsForOr(t, n, i) : getLookaheadPathsForOptionalProd(t, n, a, i);
}
__name(getLookaheadPaths, "getLookaheadPaths");
function buildLookaheadFuncForOr(e, t, n, r, i, a) {
	let o = getLookaheadPathsForOr(e, t, n);
	return a(o, r, areTokenCategoriesNotUsed(o) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher, i);
}
__name(buildLookaheadFuncForOr, "buildLookaheadFuncForOr");
function buildLookaheadFuncForOptionalProd(e, t, n, r, i, a) {
	let o = getLookaheadPathsForOptionalProd(e, t, i, n), s = areTokenCategoriesNotUsed(o) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
	return a(o[0], s, r);
}
__name(buildLookaheadFuncForOptionalProd, "buildLookaheadFuncForOptionalProd");
function buildAlternativesLookAheadFunc(e, t, n, r) {
	let i = e.length, a = every_default(e, (e) => every_default(e, (e) => e.length === 1));
	if (t) return function(t) {
		let r = map_default(t, (e) => e.GATE);
		for (let t = 0; t < i; t++) {
			let i = e[t], a = i.length, o = r[t];
			if (!(o !== void 0 && o.call(this) === !1)) nextPath: for (let e = 0; e < a; e++) {
				let r = i[e], a = r.length;
				for (let e = 0; e < a; e++) if (n(this.LA(e + 1), r[e]) === !1) continue nextPath;
				return t;
			}
		}
	};
	if (a && !r) {
		let t = reduce_default(map_default(e, (e) => flatten_default(e)), (e, t, n) => (forEach_default(t, (t) => {
			has_default(e, t.tokenTypeIdx) || (e[t.tokenTypeIdx] = n), forEach_default(t.categoryMatches, (t) => {
				has_default(e, t) || (e[t] = n);
			});
		}), e), {});
		return function() {
			return t[this.LA(1).tokenTypeIdx];
		};
	} else return function() {
		for (let t = 0; t < i; t++) {
			let r = e[t], i = r.length;
			nextPath: for (let e = 0; e < i; e++) {
				let i = r[e], a = i.length;
				for (let e = 0; e < a; e++) if (n(this.LA(e + 1), i[e]) === !1) continue nextPath;
				return t;
			}
		}
	};
}
__name(buildAlternativesLookAheadFunc, "buildAlternativesLookAheadFunc");
function buildSingleAlternativeLookaheadFunction(e, t, n) {
	let r = every_default(e, (e) => e.length === 1), i = e.length;
	if (r && !n) {
		let t = flatten_default(e);
		if (t.length === 1 && isEmpty_default(t[0].categoryMatches)) {
			let e = t[0].tokenTypeIdx;
			return function() {
				return this.LA(1).tokenTypeIdx === e;
			};
		} else {
			let e = reduce_default(t, (e, t, n) => (e[t.tokenTypeIdx] = !0, forEach_default(t.categoryMatches, (t) => {
				e[t] = !0;
			}), e), []);
			return function() {
				return e[this.LA(1).tokenTypeIdx] === !0;
			};
		}
	} else return function() {
		nextPath: for (let n = 0; n < i; n++) {
			let r = e[n], i = r.length;
			for (let e = 0; e < i; e++) if (t(this.LA(e + 1), r[e]) === !1) continue nextPath;
			return !0;
		}
		return !1;
	};
}
__name(buildSingleAlternativeLookaheadFunction, "buildSingleAlternativeLookaheadFunction");
var RestDefinitionFinderWalker = class extends RestWalker {
	static #e = __name(this, "RestDefinitionFinderWalker");
	constructor(e, t, n) {
		super(), this.topProd = e, this.targetOccurrence = t, this.targetProdType = n;
	}
	startWalking() {
		return this.walk(this.topProd), this.restDef;
	}
	checkIsTarget(e, t, n, r) {
		return e.idx === this.targetOccurrence && this.targetProdType === t ? (this.restDef = n.concat(r), !0) : !1;
	}
	walkOption(e, t, n) {
		this.checkIsTarget(e, PROD_TYPE.OPTION, t, n) || super.walkOption(e, t, n);
	}
	walkAtLeastOne(e, t, n) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION_MANDATORY, t, n) || super.walkOption(e, t, n);
	}
	walkAtLeastOneSep(e, t, n) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, t, n) || super.walkOption(e, t, n);
	}
	walkMany(e, t, n) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION, t, n) || super.walkOption(e, t, n);
	}
	walkManySep(e, t, n) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION_WITH_SEPARATOR, t, n) || super.walkOption(e, t, n);
	}
}, InsideDefinitionFinderVisitor = class extends GAstVisitor {
	static #e = __name(this, "InsideDefinitionFinderVisitor");
	constructor(e, t, n) {
		super(), this.targetOccurrence = e, this.targetProdType = t, this.targetRef = n, this.result = [];
	}
	checkIsTarget(e, t) {
		e.idx === this.targetOccurrence && this.targetProdType === t && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
	}
	visitOption(e) {
		this.checkIsTarget(e, PROD_TYPE.OPTION);
	}
	visitRepetition(e) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION);
	}
	visitRepetitionMandatory(e) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION_MANDATORY);
	}
	visitRepetitionMandatoryWithSeparator(e) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
	}
	visitRepetitionWithSeparator(e) {
		this.checkIsTarget(e, PROD_TYPE.REPETITION_WITH_SEPARATOR);
	}
	visitAlternation(e) {
		this.checkIsTarget(e, PROD_TYPE.ALTERNATION);
	}
};
function initializeArrayOfArrays(e) {
	let t = Array(e);
	for (let n = 0; n < e; n++) t[n] = [];
	return t;
}
__name(initializeArrayOfArrays, "initializeArrayOfArrays");
function pathToHashKeys(e) {
	let t = [""];
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = [];
		for (let e = 0; e < t.length; e++) {
			let n = t[e];
			i.push(n + "_" + r.tokenTypeIdx);
			for (let e = 0; e < r.categoryMatches.length; e++) {
				let t = "_" + r.categoryMatches[e];
				i.push(n + t);
			}
		}
		t = i;
	}
	return t;
}
__name(pathToHashKeys, "pathToHashKeys");
function isUniquePrefixHash(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		if (r === n) continue;
		let i = e[r];
		for (let e = 0; e < t.length; e++) if (i[t[e]] === !0) return !1;
	}
	return !0;
}
__name(isUniquePrefixHash, "isUniquePrefixHash");
function lookAheadSequenceFromAlternatives(e, t) {
	let n = map_default(e, (e) => possiblePathsFrom([e], 1)), r = initializeArrayOfArrays(n.length), i = map_default(n, (e) => {
		let t = {};
		return forEach_default(e, (e) => {
			forEach_default(pathToHashKeys(e.partialPath), (e) => {
				t[e] = !0;
			});
		}), t;
	}), a = n;
	for (let e = 1; e <= t; e++) {
		let n = a;
		a = initializeArrayOfArrays(n.length);
		for (let o = 0; o < n.length; o++) {
			let s = n[o];
			for (let n = 0; n < s.length; n++) {
				let c = s[n].partialPath, l = s[n].suffixDef, u = pathToHashKeys(c);
				if (isUniquePrefixHash(i, u, o) || isEmpty_default(l) || c.length === t) {
					let e = r[o];
					if (containsPath(e, c) === !1) {
						e.push(c);
						for (let e = 0; e < u.length; e++) {
							let t = u[e];
							i[o][t] = !0;
						}
					}
				} else {
					let t = possiblePathsFrom(l, e + 1, c);
					a[o] = a[o].concat(t), forEach_default(t, (e) => {
						forEach_default(pathToHashKeys(e.partialPath), (e) => {
							i[o][e] = !0;
						});
					});
				}
			}
		}
	}
	return r;
}
__name(lookAheadSequenceFromAlternatives, "lookAheadSequenceFromAlternatives");
function getLookaheadPathsForOr(e, t, n, r) {
	let i = new InsideDefinitionFinderVisitor(e, PROD_TYPE.ALTERNATION, r);
	return t.accept(i), lookAheadSequenceFromAlternatives(i.result, n);
}
__name(getLookaheadPathsForOr, "getLookaheadPathsForOr");
function getLookaheadPathsForOptionalProd(e, t, n, r) {
	let i = new InsideDefinitionFinderVisitor(e, n);
	t.accept(i);
	let a = i.result, o = new RestDefinitionFinderWalker(t, e, n).startWalking();
	return lookAheadSequenceFromAlternatives([new Alternative({ definition: a }), new Alternative({ definition: o })], r);
}
__name(getLookaheadPathsForOptionalProd, "getLookaheadPathsForOptionalProd");
function containsPath(e, t) {
	compareOtherPath: for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r.length === t.length) {
			for (let e = 0; e < r.length; e++) {
				let n = t[e], i = r[e];
				if (!(n === i || i.categoryMatchesMap[n.tokenTypeIdx] !== void 0)) continue compareOtherPath;
			}
			return !0;
		}
	}
	return !1;
}
__name(containsPath, "containsPath");
function isStrictPrefixOfPath(e, t) {
	return e.length < t.length && every_default(e, (e, n) => {
		let r = t[n];
		return e === r || r.categoryMatchesMap[e.tokenTypeIdx];
	});
}
__name(isStrictPrefixOfPath, "isStrictPrefixOfPath");
function areTokenCategoriesNotUsed(e) {
	return every_default(e, (e) => every_default(e, (e) => every_default(e, (e) => isEmpty_default(e.categoryMatches))));
}
__name(areTokenCategoriesNotUsed, "areTokenCategoriesNotUsed");
function validateLookahead(e) {
	return map_default(e.lookaheadStrategy.validate({
		rules: e.rules,
		tokenTypes: e.tokenTypes,
		grammarName: e.grammarName
	}), (e) => Object.assign({ type: ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION }, e));
}
__name(validateLookahead, "validateLookahead");
function validateGrammar(e, t, n, r) {
	let i = flatMap_default(e, (e) => validateDuplicateProductions(e, n)), a = checkTerminalAndNoneTerminalsNameSpace(e, t, n), o = flatMap_default(e, (e) => validateTooManyAlts(e, n)), s = flatMap_default(e, (t) => validateRuleDoesNotAlreadyExist(t, e, r, n));
	return i.concat(a, o, s);
}
__name(validateGrammar, "validateGrammar");
function validateDuplicateProductions(e, t) {
	let n = new OccurrenceValidationCollector();
	e.accept(n);
	let r = n.allProductions;
	return map_default(values_default(pickBy_default(groupBy_default(r, identifyProductionForDuplicates), (e) => e.length > 1)), (n) => {
		let r = head_default(n), i = t.buildDuplicateFoundError(e, n), a = getProductionDslName(r), o = {
			message: i,
			type: ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
			ruleName: e.name,
			dslName: a,
			occurrence: r.idx
		}, s = getExtraProductionArgument(r);
		return s && (o.parameter = s), o;
	});
}
__name(validateDuplicateProductions, "validateDuplicateProductions");
function identifyProductionForDuplicates(e) {
	return `${getProductionDslName(e)}_#_${e.idx}_#_${getExtraProductionArgument(e)}`;
}
__name(identifyProductionForDuplicates, "identifyProductionForDuplicates");
function getExtraProductionArgument(e) {
	return e instanceof Terminal ? e.terminalType.name : e instanceof NonTerminal ? e.nonTerminalName : "";
}
__name(getExtraProductionArgument, "getExtraProductionArgument");
var OccurrenceValidationCollector = class extends GAstVisitor {
	static #e = __name(this, "OccurrenceValidationCollector");
	constructor() {
		super(...arguments), this.allProductions = [];
	}
	visitNonTerminal(e) {
		this.allProductions.push(e);
	}
	visitOption(e) {
		this.allProductions.push(e);
	}
	visitRepetitionWithSeparator(e) {
		this.allProductions.push(e);
	}
	visitRepetitionMandatory(e) {
		this.allProductions.push(e);
	}
	visitRepetitionMandatoryWithSeparator(e) {
		this.allProductions.push(e);
	}
	visitRepetition(e) {
		this.allProductions.push(e);
	}
	visitAlternation(e) {
		this.allProductions.push(e);
	}
	visitTerminal(e) {
		this.allProductions.push(e);
	}
};
function validateRuleDoesNotAlreadyExist(e, t, n, r) {
	let i = [];
	if (reduce_default(t, (t, n) => n.name === e.name ? t + 1 : t, 0) > 1) {
		let t = r.buildDuplicateRuleNameError({
			topLevelRule: e,
			grammarName: n
		});
		i.push({
			message: t,
			type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
			ruleName: e.name
		});
	}
	return i;
}
__name(validateRuleDoesNotAlreadyExist, "validateRuleDoesNotAlreadyExist");
function validateRuleIsOverridden(e, t, n) {
	let r = [], i;
	return includes_default(t, e) || (i = `Invalid rule override, rule: ->${e}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `, r.push({
		message: i,
		type: ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
		ruleName: e
	})), r;
}
__name(validateRuleIsOverridden, "validateRuleIsOverridden");
function validateNoLeftRecursion(e, t, n, r = []) {
	let i = [], a = getFirstNoneTerminal(t.definition);
	if (isEmpty_default(a)) return [];
	{
		let t = e.name;
		includes_default(a, e) && i.push({
			message: n.buildLeftRecursionError({
				topLevelRule: e,
				leftRecursionPath: r
			}),
			type: ParserDefinitionErrorType.LEFT_RECURSION,
			ruleName: t
		});
		let o = flatMap_default(difference_default(a, r.concat([e])), (t) => {
			let i = clone_default(r);
			return i.push(t), validateNoLeftRecursion(e, t, n, i);
		});
		return i.concat(o);
	}
}
__name(validateNoLeftRecursion, "validateNoLeftRecursion");
function getFirstNoneTerminal(e) {
	let t = [];
	if (isEmpty_default(e)) return t;
	let n = head_default(e);
	if (n instanceof NonTerminal) t.push(n.referencedRule);
	else if (n instanceof Alternative || n instanceof Option || n instanceof RepetitionMandatory || n instanceof RepetitionMandatoryWithSeparator || n instanceof RepetitionWithSeparator || n instanceof Repetition) t = t.concat(getFirstNoneTerminal(n.definition));
	else if (n instanceof Alternation) t = flatten_default(map_default(n.definition, (e) => getFirstNoneTerminal(e.definition)));
	else if (!(n instanceof Terminal)) throw Error("non exhaustive match");
	let r = isOptionalProd(n), i = e.length > 1;
	if (r && i) {
		let n = drop_default(e);
		return t.concat(getFirstNoneTerminal(n));
	} else return t;
}
__name(getFirstNoneTerminal, "getFirstNoneTerminal");
var OrCollector = class extends GAstVisitor {
	static #e = __name(this, "OrCollector");
	constructor() {
		super(...arguments), this.alternations = [];
	}
	visitAlternation(e) {
		this.alternations.push(e);
	}
};
function validateEmptyOrAlternative(e, t) {
	let n = new OrCollector();
	e.accept(n);
	let r = n.alternations;
	return flatMap_default(r, (n) => flatMap_default(dropRight_default(n.definition), (r, i) => isEmpty_default(nextPossibleTokensAfter([r], [], tokenStructuredMatcher, 1)) ? [{
		message: t.buildEmptyAlternationError({
			topLevelRule: e,
			alternation: n,
			emptyChoiceIdx: i
		}),
		type: ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
		ruleName: e.name,
		occurrence: n.idx,
		alternative: i + 1
	}] : []));
}
__name(validateEmptyOrAlternative, "validateEmptyOrAlternative");
function validateAmbiguousAlternationAlternatives(e, t, n) {
	let r = new OrCollector();
	e.accept(r);
	let i = r.alternations;
	return i = reject_default(i, (e) => e.ignoreAmbiguities === !0), flatMap_default(i, (r) => {
		let i = r.idx, a = getLookaheadPathsForOr(i, e, r.maxLookahead || t, r), o = checkAlternativesAmbiguities(a, r, e, n), s = checkPrefixAlternativesAmbiguities(a, r, e, n);
		return o.concat(s);
	});
}
__name(validateAmbiguousAlternationAlternatives, "validateAmbiguousAlternationAlternatives");
var RepetitionCollector = class extends GAstVisitor {
	static #e = __name(this, "RepetitionCollector");
	constructor() {
		super(...arguments), this.allProductions = [];
	}
	visitRepetitionWithSeparator(e) {
		this.allProductions.push(e);
	}
	visitRepetitionMandatory(e) {
		this.allProductions.push(e);
	}
	visitRepetitionMandatoryWithSeparator(e) {
		this.allProductions.push(e);
	}
	visitRepetition(e) {
		this.allProductions.push(e);
	}
};
function validateTooManyAlts(e, t) {
	let n = new OrCollector();
	e.accept(n);
	let r = n.alternations;
	return flatMap_default(r, (n) => n.definition.length > 255 ? [{
		message: t.buildTooManyAlternativesError({
			topLevelRule: e,
			alternation: n
		}),
		type: ParserDefinitionErrorType.TOO_MANY_ALTS,
		ruleName: e.name,
		occurrence: n.idx
	}] : []);
}
__name(validateTooManyAlts, "validateTooManyAlts");
function validateSomeNonEmptyLookaheadPath(e, t, n) {
	let r = [];
	return forEach_default(e, (e) => {
		let i = new RepetitionCollector();
		e.accept(i);
		let a = i.allProductions;
		forEach_default(a, (i) => {
			let a = getProdType(i), o = i.maxLookahead || t, s = i.idx, c = getLookaheadPathsForOptionalProd(s, e, a, o)[0];
			if (isEmpty_default(flatten_default(c))) {
				let t = n.buildEmptyRepetitionError({
					topLevelRule: e,
					repetition: i
				});
				r.push({
					message: t,
					type: ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
					ruleName: e.name
				});
			}
		});
	}), r;
}
__name(validateSomeNonEmptyLookaheadPath, "validateSomeNonEmptyLookaheadPath");
function checkAlternativesAmbiguities(e, t, n, r) {
	let i = [];
	return map_default(reduce_default(e, (n, r, a) => (t.definition[a].ignoreAmbiguities === !0 || forEach_default(r, (r) => {
		let o = [a];
		forEach_default(e, (e, n) => {
			a !== n && containsPath(e, r) && t.definition[n].ignoreAmbiguities !== !0 && o.push(n);
		}), o.length > 1 && !containsPath(i, r) && (i.push(r), n.push({
			alts: o,
			path: r
		}));
	}), n), []), (e) => {
		let i = map_default(e.alts, (e) => e + 1);
		return {
			message: r.buildAlternationAmbiguityError({
				topLevelRule: n,
				alternation: t,
				ambiguityIndices: i,
				prefixPath: e.path
			}),
			type: ParserDefinitionErrorType.AMBIGUOUS_ALTS,
			ruleName: n.name,
			occurrence: t.idx,
			alternatives: e.alts
		};
	});
}
__name(checkAlternativesAmbiguities, "checkAlternativesAmbiguities");
function checkPrefixAlternativesAmbiguities(e, t, n, r) {
	let i = reduce_default(e, (e, t, n) => {
		let r = map_default(t, (e) => ({
			idx: n,
			path: e
		}));
		return e.concat(r);
	}, []);
	return compact_default(flatMap_default(i, (e) => {
		if (t.definition[e.idx].ignoreAmbiguities === !0) return [];
		let a = e.idx, o = e.path;
		return map_default(filter_default(i, (e) => t.definition[e.idx].ignoreAmbiguities !== !0 && e.idx < a && isStrictPrefixOfPath(e.path, o)), (e) => {
			let i = [e.idx + 1, a + 1], o = t.idx === 0 ? "" : t.idx;
			return {
				message: r.buildAlternationPrefixAmbiguityError({
					topLevelRule: n,
					alternation: t,
					ambiguityIndices: i,
					prefixPath: e.path
				}),
				type: ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
				ruleName: n.name,
				occurrence: o,
				alternatives: i
			};
		});
	}));
}
__name(checkPrefixAlternativesAmbiguities, "checkPrefixAlternativesAmbiguities");
function checkTerminalAndNoneTerminalsNameSpace(e, t, n) {
	let r = [], i = map_default(t, (e) => e.name);
	return forEach_default(e, (e) => {
		let t = e.name;
		if (includes_default(i, t)) {
			let i = n.buildNamespaceConflictError(e);
			r.push({
				message: i,
				type: ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
				ruleName: t
			});
		}
	}), r;
}
__name(checkTerminalAndNoneTerminalsNameSpace, "checkTerminalAndNoneTerminalsNameSpace");
function resolveGrammar2(e) {
	let t = defaults_default(e, { errMsgProvider: defaultGrammarResolverErrorProvider }), n = {};
	return forEach_default(e.rules, (e) => {
		n[e.name] = e;
	}), resolveGrammar(n, t.errMsgProvider);
}
__name(resolveGrammar2, "resolveGrammar");
function validateGrammar2(e) {
	return e = defaults_default(e, { errMsgProvider: defaultGrammarValidatorErrorProvider }), validateGrammar(e.rules, e.tokenTypes, e.errMsgProvider, e.grammarName);
}
__name(validateGrammar2, "validateGrammar");
var MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException", NO_VIABLE_ALT_EXCEPTION = "NoViableAltException", EARLY_EXIT_EXCEPTION = "EarlyExitException", NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException", RECOGNITION_EXCEPTION_NAMES = [
	MISMATCHED_TOKEN_EXCEPTION,
	NO_VIABLE_ALT_EXCEPTION,
	EARLY_EXIT_EXCEPTION,
	NOT_ALL_INPUT_PARSED_EXCEPTION
];
Object.freeze(RECOGNITION_EXCEPTION_NAMES);
function isRecognitionException(e) {
	return includes_default(RECOGNITION_EXCEPTION_NAMES, e.name);
}
__name(isRecognitionException, "isRecognitionException");
var RecognitionException = class extends Error {
	static #e = __name(this, "RecognitionException");
	constructor(e, t) {
		super(e), this.token = t, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
	}
}, MismatchedTokenException = class extends RecognitionException {
	static #e = __name(this, "MismatchedTokenException");
	constructor(e, t, n) {
		super(e, t), this.previousToken = n, this.name = MISMATCHED_TOKEN_EXCEPTION;
	}
}, NoViableAltException = class extends RecognitionException {
	static #e = __name(this, "NoViableAltException");
	constructor(e, t, n) {
		super(e, t), this.previousToken = n, this.name = NO_VIABLE_ALT_EXCEPTION;
	}
}, NotAllInputParsedException = class extends RecognitionException {
	static #e = __name(this, "NotAllInputParsedException");
	constructor(e, t) {
		super(e, t), this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
	}
}, EarlyExitException = class extends RecognitionException {
	static #e = __name(this, "EarlyExitException");
	constructor(e, t, n) {
		super(e, t), this.previousToken = n, this.name = EARLY_EXIT_EXCEPTION;
	}
}, EOF_FOLLOW_KEY = {}, IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException", InRuleRecoveryException = class extends Error {
	static #e = __name(this, "InRuleRecoveryException");
	constructor(e) {
		super(e), this.name = IN_RULE_RECOVERY_EXCEPTION;
	}
}, Recoverable = class {
	static #e = __name(this, "Recoverable");
	initRecoverable(e) {
		this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = has_default(e, "recoveryEnabled") ? e.recoveryEnabled : DEFAULT_PARSER_CONFIG.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = attemptInRepetitionRecovery);
	}
	getTokenToInsert(e) {
		let t = createTokenInstance(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
		return t.isInsertedInRecovery = !0, t;
	}
	canTokenTypeBeInsertedInRecovery(e) {
		return !0;
	}
	canTokenTypeBeDeletedInRecovery(e) {
		return !0;
	}
	tryInRepetitionRecovery(e, t, n, r) {
		let i = this.findReSyncTokenType(), a = this.exportLexerState(), s = [], c = !1, l = this.LA(1), u = this.LA(1), d = /* @__PURE__ */ __name(() => {
			let e = this.LA(0), t = new MismatchedTokenException(this.errorMessageProvider.buildMismatchTokenMessage({
				expected: r,
				actual: l,
				previous: e,
				ruleName: this.getCurrRuleFullName()
			}), l, this.LA(0));
			t.resyncedTokens = dropRight_default(s), this.SAVE_ERROR(t);
		}, "generateErrorMessage");
		for (; !c;) if (this.tokenMatcher(u, r)) {
			d();
			return;
		} else if (n.call(this)) {
			d(), e.apply(this, t);
			return;
		} else this.tokenMatcher(u, i) ? c = !0 : (u = this.SKIP_TOKEN(), this.addToResyncTokens(u, s));
		this.importLexerState(a);
	}
	shouldInRepetitionRecoveryBeTried(e, t, n) {
		return !(n === !1 || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, t)));
	}
	getFollowsForInRuleRecovery(e, t) {
		let n = this.getCurrentGrammarPath(e, t);
		return this.getNextPossibleTokenTypes(n);
	}
	tryInRuleRecovery(e, t) {
		if (this.canRecoverWithSingleTokenInsertion(e, t)) return this.getTokenToInsert(e);
		if (this.canRecoverWithSingleTokenDeletion(e)) {
			let e = this.SKIP_TOKEN();
			return this.consumeToken(), e;
		}
		throw new InRuleRecoveryException("sad sad panda");
	}
	canPerformInRuleRecovery(e, t) {
		return this.canRecoverWithSingleTokenInsertion(e, t) || this.canRecoverWithSingleTokenDeletion(e);
	}
	canRecoverWithSingleTokenInsertion(e, t) {
		if (!this.canTokenTypeBeInsertedInRecovery(e) || isEmpty_default(t)) return !1;
		let n = this.LA(1);
		return find_default(t, (e) => this.tokenMatcher(n, e)) !== void 0;
	}
	canRecoverWithSingleTokenDeletion(e) {
		return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : !1;
	}
	isInCurrentRuleReSyncSet(e) {
		let t = this.getCurrFollowKey();
		return includes_default(this.getFollowSetFromFollowKey(t), e);
	}
	findReSyncTokenType() {
		let e = this.flattenFollowSet(), t = this.LA(1), n = 2;
		for (;;) {
			let r = find_default(e, (e) => tokenMatcher(t, e));
			if (r !== void 0) return r;
			t = this.LA(n), n++;
		}
	}
	getCurrFollowKey() {
		if (this.RULE_STACK.length === 1) return EOF_FOLLOW_KEY;
		let e = this.getLastExplicitRuleShortName(), t = this.getLastExplicitRuleOccurrenceIndex(), n = this.getPreviousExplicitRuleShortName();
		return {
			ruleName: this.shortRuleNameToFullName(e),
			idxInCallingRule: t,
			inRule: this.shortRuleNameToFullName(n)
		};
	}
	buildFullFollowKeyStack() {
		let e = this.RULE_STACK, t = this.RULE_OCCURRENCE_STACK;
		return map_default(e, (n, r) => r === 0 ? EOF_FOLLOW_KEY : {
			ruleName: this.shortRuleNameToFullName(n),
			idxInCallingRule: t[r],
			inRule: this.shortRuleNameToFullName(e[r - 1])
		});
	}
	flattenFollowSet() {
		return flatten_default(map_default(this.buildFullFollowKeyStack(), (e) => this.getFollowSetFromFollowKey(e)));
	}
	getFollowSetFromFollowKey(e) {
		if (e === EOF_FOLLOW_KEY) return [EOF];
		let t = e.ruleName + e.idxInCallingRule + IN + e.inRule;
		return this.resyncFollows[t];
	}
	addToResyncTokens(e, t) {
		return this.tokenMatcher(e, EOF) || t.push(e), t;
	}
	reSyncTo(e) {
		let t = [], n = this.LA(1);
		for (; this.tokenMatcher(n, e) === !1;) n = this.SKIP_TOKEN(), this.addToResyncTokens(n, t);
		return dropRight_default(t);
	}
	attemptInRepetitionRecovery(e, t, n, r, i, a, o) {}
	getCurrentGrammarPath(e, t) {
		return {
			ruleStack: this.getHumanReadableRuleStack(),
			occurrenceStack: clone_default(this.RULE_OCCURRENCE_STACK),
			lastTok: e,
			lastTokOccurrence: t
		};
	}
	getHumanReadableRuleStack() {
		return map_default(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
	}
};
function attemptInRepetitionRecovery(e, t, n, r, i, a, o) {
	let s = this.getKeyForAutomaticLookahead(r, i), c = this.firstAfterRepMap[s];
	if (c === void 0) {
		let e = this.getCurrRuleFullName(), t = this.getGAstProductions()[e];
		c = new a(t, i).startWalking(), this.firstAfterRepMap[s] = c;
	}
	let l = c.token, u = c.occurrence, d = c.isEndOfRule;
	this.RULE_STACK.length === 1 && d && l === void 0 && (l = EOF, u = 1), !(l === void 0 || u === void 0) && this.shouldInRepetitionRecoveryBeTried(l, u, o) && this.tryInRepetitionRecovery(e, t, n, l);
}
__name(attemptInRepetitionRecovery, "attemptInRepetitionRecovery");
var BITS_FOR_METHOD_TYPE = 4, BITS_FOR_OCCURRENCE_IDX = 8, BITS_FOR_ALT_IDX = 8, OR_IDX = 1 << BITS_FOR_OCCURRENCE_IDX, OPTION_IDX = 2 << BITS_FOR_OCCURRENCE_IDX, MANY_IDX = 3 << BITS_FOR_OCCURRENCE_IDX, AT_LEAST_ONE_IDX = 4 << BITS_FOR_OCCURRENCE_IDX, MANY_SEP_IDX = 5 << BITS_FOR_OCCURRENCE_IDX, AT_LEAST_ONE_SEP_IDX = 6 << BITS_FOR_OCCURRENCE_IDX;
function getKeyForAutomaticLookahead(e, t, n) {
	return n | t | e;
}
__name(getKeyForAutomaticLookahead, "getKeyForAutomaticLookahead"), 32 - BITS_FOR_ALT_IDX;
var LLkLookaheadStrategy = class {
	static #e = __name(this, "LLkLookaheadStrategy");
	constructor(e) {
		this.maxLookahead = e?.maxLookahead ?? DEFAULT_PARSER_CONFIG.maxLookahead;
	}
	validate(e) {
		let t = this.validateNoLeftRecursion(e.rules);
		if (isEmpty_default(t)) {
			let n = this.validateEmptyOrAlternatives(e.rules), r = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), i = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
			return [
				...t,
				...n,
				...r,
				...i
			];
		}
		return t;
	}
	validateNoLeftRecursion(e) {
		return flatMap_default(e, (e) => validateNoLeftRecursion(e, e, defaultGrammarValidatorErrorProvider));
	}
	validateEmptyOrAlternatives(e) {
		return flatMap_default(e, (e) => validateEmptyOrAlternative(e, defaultGrammarValidatorErrorProvider));
	}
	validateAmbiguousAlternationAlternatives(e, t) {
		return flatMap_default(e, (e) => validateAmbiguousAlternationAlternatives(e, t, defaultGrammarValidatorErrorProvider));
	}
	validateSomeNonEmptyLookaheadPath(e, t) {
		return validateSomeNonEmptyLookaheadPath(e, t, defaultGrammarValidatorErrorProvider);
	}
	buildLookaheadForAlternation(e) {
		return buildLookaheadFuncForOr(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, buildAlternativesLookAheadFunc);
	}
	buildLookaheadForOptional(e) {
		return buildLookaheadFuncForOptionalProd(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, getProdType(e.prodType), buildSingleAlternativeLookaheadFunction);
	}
}, LooksAhead = class {
	static #e = __name(this, "LooksAhead");
	initLooksAhead(e) {
		this.dynamicTokensEnabled = has_default(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : DEFAULT_PARSER_CONFIG.dynamicTokensEnabled, this.maxLookahead = has_default(e, "maxLookahead") ? e.maxLookahead : DEFAULT_PARSER_CONFIG.maxLookahead, this.lookaheadStrategy = has_default(e, "lookaheadStrategy") ? e.lookaheadStrategy : new LLkLookaheadStrategy({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
	}
	preComputeLookaheadFunctions(e) {
		forEach_default(e, (e) => {
			this.TRACE_INIT(`${e.name} Rule Lookahead`, () => {
				let { alternation: t, repetition: n, option: r, repetitionMandatory: i, repetitionMandatoryWithSeparator: a, repetitionWithSeparator: o } = collectMethods(e);
				forEach_default(t, (t) => {
					let n = t.idx === 0 ? "" : t.idx;
					this.TRACE_INIT(`${getProductionDslName(t)}${n}`, () => {
						let n = this.lookaheadStrategy.buildLookaheadForAlternation({
							prodOccurrence: t.idx,
							rule: e,
							maxLookahead: t.maxLookahead || this.maxLookahead,
							hasPredicates: t.hasPredicates,
							dynamicTokensEnabled: this.dynamicTokensEnabled
						}), r = getKeyForAutomaticLookahead(this.fullRuleNameToShort[e.name], OR_IDX, t.idx);
						this.setLaFuncCache(r, n);
					});
				}), forEach_default(n, (t) => {
					this.computeLookaheadFunc(e, t.idx, MANY_IDX, "Repetition", t.maxLookahead, getProductionDslName(t));
				}), forEach_default(r, (t) => {
					this.computeLookaheadFunc(e, t.idx, OPTION_IDX, "Option", t.maxLookahead, getProductionDslName(t));
				}), forEach_default(i, (t) => {
					this.computeLookaheadFunc(e, t.idx, AT_LEAST_ONE_IDX, "RepetitionMandatory", t.maxLookahead, getProductionDslName(t));
				}), forEach_default(a, (t) => {
					this.computeLookaheadFunc(e, t.idx, AT_LEAST_ONE_SEP_IDX, "RepetitionMandatoryWithSeparator", t.maxLookahead, getProductionDslName(t));
				}), forEach_default(o, (t) => {
					this.computeLookaheadFunc(e, t.idx, MANY_SEP_IDX, "RepetitionWithSeparator", t.maxLookahead, getProductionDslName(t));
				});
			});
		});
	}
	computeLookaheadFunc(e, t, n, r, i, a) {
		this.TRACE_INIT(`${a}${t === 0 ? "" : t}`, () => {
			let a = this.lookaheadStrategy.buildLookaheadForOptional({
				prodOccurrence: t,
				rule: e,
				maxLookahead: i || this.maxLookahead,
				dynamicTokensEnabled: this.dynamicTokensEnabled,
				prodType: r
			}), o = getKeyForAutomaticLookahead(this.fullRuleNameToShort[e.name], n, t);
			this.setLaFuncCache(o, a);
		});
	}
	getKeyForAutomaticLookahead(e, t) {
		return getKeyForAutomaticLookahead(this.getLastExplicitRuleShortName(), e, t);
	}
	getLaFuncFromCache(e) {
		return this.lookAheadFuncsCache.get(e);
	}
	/* istanbul ignore next */
	setLaFuncCache(e, t) {
		this.lookAheadFuncsCache.set(e, t);
	}
}, collectorVisitor = new class extends GAstVisitor {
	static #e = __name(this, "DslMethodsCollectorVisitor");
	constructor() {
		super(...arguments), this.dslMethods = {
			option: [],
			alternation: [],
			repetition: [],
			repetitionWithSeparator: [],
			repetitionMandatory: [],
			repetitionMandatoryWithSeparator: []
		};
	}
	reset() {
		this.dslMethods = {
			option: [],
			alternation: [],
			repetition: [],
			repetitionWithSeparator: [],
			repetitionMandatory: [],
			repetitionMandatoryWithSeparator: []
		};
	}
	visitOption(e) {
		this.dslMethods.option.push(e);
	}
	visitRepetitionWithSeparator(e) {
		this.dslMethods.repetitionWithSeparator.push(e);
	}
	visitRepetitionMandatory(e) {
		this.dslMethods.repetitionMandatory.push(e);
	}
	visitRepetitionMandatoryWithSeparator(e) {
		this.dslMethods.repetitionMandatoryWithSeparator.push(e);
	}
	visitRepetition(e) {
		this.dslMethods.repetition.push(e);
	}
	visitAlternation(e) {
		this.dslMethods.alternation.push(e);
	}
}();
function collectMethods(e) {
	collectorVisitor.reset(), e.accept(collectorVisitor);
	let t = collectorVisitor.dslMethods;
	return collectorVisitor.reset(), t;
}
__name(collectMethods, "collectMethods");
function setNodeLocationOnlyOffset(e, t) {
	isNaN(e.startOffset) === !0 ? (e.startOffset = t.startOffset, e.endOffset = t.endOffset) : e.endOffset < t.endOffset && (e.endOffset = t.endOffset);
}
__name(setNodeLocationOnlyOffset, "setNodeLocationOnlyOffset");
function setNodeLocationFull(e, t) {
	isNaN(e.startOffset) === !0 ? (e.startOffset = t.startOffset, e.startColumn = t.startColumn, e.startLine = t.startLine, e.endOffset = t.endOffset, e.endColumn = t.endColumn, e.endLine = t.endLine) : e.endOffset < t.endOffset && (e.endOffset = t.endOffset, e.endColumn = t.endColumn, e.endLine = t.endLine);
}
__name(setNodeLocationFull, "setNodeLocationFull");
function addTerminalToCst(e, t, n) {
	e.children[n] === void 0 ? e.children[n] = [t] : e.children[n].push(t);
}
__name(addTerminalToCst, "addTerminalToCst");
function addNoneTerminalToCst(e, t, n) {
	e.children[t] === void 0 ? e.children[t] = [n] : e.children[t].push(n);
}
__name(addNoneTerminalToCst, "addNoneTerminalToCst");
var NAME = "name";
function defineNameProp(e, t) {
	Object.defineProperty(e, NAME, {
		enumerable: !1,
		configurable: !0,
		writable: !1,
		value: t
	});
}
__name(defineNameProp, "defineNameProp");
function defaultVisit(e, t) {
	let n = keys_default(e), r = n.length;
	for (let i = 0; i < r; i++) {
		let r = e[n[i]], a = r.length;
		for (let e = 0; e < a; e++) {
			let n = r[e];
			n.tokenTypeIdx === void 0 && this[n.name](n.children, t);
		}
	}
}
__name(defaultVisit, "defaultVisit");
function createBaseSemanticVisitorConstructor(e, t) {
	let n = /* @__PURE__ */ __name(function() {}, "derivedConstructor");
	return defineNameProp(n, e + "BaseSemantics"), n.prototype = {
		visit: /* @__PURE__ */ __name(function(e, t) {
			if (isArray_default(e) && (e = e[0]), !isUndefined_default(e)) return this[e.name](e.children, t);
		}, "visit"),
		validateVisitor: /* @__PURE__ */ __name(function() {
			let e = validateVisitor(this, t);
			if (!isEmpty_default(e)) {
				let t = map_default(e, (e) => e.msg);
				throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${t.join("\n\n").replace(/\n/g, "\n	")}`);
			}
		}, "validateVisitor")
	}, n.prototype.constructor = n, n._RULE_NAMES = t, n;
}
__name(createBaseSemanticVisitorConstructor, "createBaseSemanticVisitorConstructor");
function createBaseVisitorConstructorWithDefaults(e, t, n) {
	let r = /* @__PURE__ */ __name(function() {}, "derivedConstructor");
	defineNameProp(r, e + "BaseSemanticsWithDefaults");
	let i = Object.create(n.prototype);
	return forEach_default(t, (e) => {
		i[e] = defaultVisit;
	}), r.prototype = i, r.prototype.constructor = r, r;
}
__name(createBaseVisitorConstructorWithDefaults, "createBaseVisitorConstructorWithDefaults");
var CstVisitorDefinitionError;
(function(e) {
	e[e.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", e[e.MISSING_METHOD = 1] = "MISSING_METHOD";
})(CstVisitorDefinitionError ||= {});
function validateVisitor(e, t) {
	return validateMissingCstMethods(e, t);
}
__name(validateVisitor, "validateVisitor");
function validateMissingCstMethods(e, t) {
	return compact_default(map_default(filter_default(t, (t) => isFunction_default(e[t]) === !1), (t) => ({
		msg: `Missing visitor method: <${t}> on ${e.constructor.name} CST Visitor.`,
		type: CstVisitorDefinitionError.MISSING_METHOD,
		methodName: t
	})));
}
__name(validateMissingCstMethods, "validateMissingCstMethods");
var TreeBuilder = class {
	static #e = __name(this, "TreeBuilder");
	initTreeBuilder(e) {
		if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = has_default(e, "nodeLocationTracking") ? e.nodeLocationTracking : DEFAULT_PARSER_CONFIG.nodeLocationTracking, !this.outputCst) this.cstInvocationStateUpdate = noop_default, this.cstFinallyStateUpdate = noop_default, this.cstPostTerminal = noop_default, this.cstPostNonTerminal = noop_default, this.cstPostRule = noop_default;
		else if (/full/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = setNodeLocationFull, this.setNodeLocationFromNode = setNodeLocationFull, this.cstPostRule = noop_default, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = noop_default, this.setNodeLocationFromNode = noop_default, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
		else if (/onlyOffset/i.test(this.nodeLocationTracking)) this.recoveryEnabled ? (this.setNodeLocationFromToken = setNodeLocationOnlyOffset, this.setNodeLocationFromNode = setNodeLocationOnlyOffset, this.cstPostRule = noop_default, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = noop_default, this.setNodeLocationFromNode = noop_default, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
		else if (/none/i.test(this.nodeLocationTracking)) this.setNodeLocationFromToken = noop_default, this.setNodeLocationFromNode = noop_default, this.cstPostRule = noop_default, this.setInitialNodeLocation = noop_default;
		else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
	}
	setInitialNodeLocationOnlyOffsetRecovery(e) {
		e.location = {
			startOffset: NaN,
			endOffset: NaN
		};
	}
	setInitialNodeLocationOnlyOffsetRegular(e) {
		e.location = {
			startOffset: this.LA(1).startOffset,
			endOffset: NaN
		};
	}
	setInitialNodeLocationFullRecovery(e) {
		e.location = {
			startOffset: NaN,
			startLine: NaN,
			startColumn: NaN,
			endOffset: NaN,
			endLine: NaN,
			endColumn: NaN
		};
	}
	setInitialNodeLocationFullRegular(e) {
		let t = this.LA(1);
		e.location = {
			startOffset: t.startOffset,
			startLine: t.startLine,
			startColumn: t.startColumn,
			endOffset: NaN,
			endLine: NaN,
			endColumn: NaN
		};
	}
	cstInvocationStateUpdate(e) {
		let t = {
			name: e,
			children: /* @__PURE__ */ Object.create(null)
		};
		this.setInitialNodeLocation(t), this.CST_STACK.push(t);
	}
	cstFinallyStateUpdate() {
		this.CST_STACK.pop();
	}
	cstPostRuleFull(e) {
		let t = this.LA(0), n = e.location;
		n.startOffset <= t.startOffset ? (n.endOffset = t.endOffset, n.endLine = t.endLine, n.endColumn = t.endColumn) : (n.startOffset = NaN, n.startLine = NaN, n.startColumn = NaN);
	}
	cstPostRuleOnlyOffset(e) {
		let t = this.LA(0), n = e.location;
		n.startOffset <= t.startOffset ? n.endOffset = t.endOffset : n.startOffset = NaN;
	}
	cstPostTerminal(e, t) {
		let n = this.CST_STACK[this.CST_STACK.length - 1];
		addTerminalToCst(n, t, e), this.setNodeLocationFromToken(n.location, t);
	}
	cstPostNonTerminal(e, t) {
		let n = this.CST_STACK[this.CST_STACK.length - 1];
		addNoneTerminalToCst(n, t, e), this.setNodeLocationFromNode(n.location, e.location);
	}
	getBaseCstVisitorConstructor() {
		if (isUndefined_default(this.baseCstVisitorConstructor)) {
			let e = createBaseSemanticVisitorConstructor(this.className, keys_default(this.gastProductionsCache));
			return this.baseCstVisitorConstructor = e, e;
		}
		return this.baseCstVisitorConstructor;
	}
	getBaseCstVisitorConstructorWithDefaults() {
		if (isUndefined_default(this.baseCstVisitorWithDefaultsConstructor)) {
			let e = createBaseVisitorConstructorWithDefaults(this.className, keys_default(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
			return this.baseCstVisitorWithDefaultsConstructor = e, e;
		}
		return this.baseCstVisitorWithDefaultsConstructor;
	}
	getLastExplicitRuleShortName() {
		let e = this.RULE_STACK;
		return e[e.length - 1];
	}
	getPreviousExplicitRuleShortName() {
		let e = this.RULE_STACK;
		return e[e.length - 2];
	}
	getLastExplicitRuleOccurrenceIndex() {
		let e = this.RULE_OCCURRENCE_STACK;
		return e[e.length - 1];
	}
}, LexerAdapter = class {
	static #e = __name(this, "LexerAdapter");
	initLexerAdapter() {
		this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
	}
	set input(e) {
		if (this.selfAnalysisDone !== !0) throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
		this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
	}
	get input() {
		return this.tokVector;
	}
	SKIP_TOKEN() {
		return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : END_OF_FILE;
	}
	LA(e) {
		let t = this.currIdx + e;
		return t < 0 || this.tokVectorLength <= t ? END_OF_FILE : this.tokVector[t];
	}
	consumeToken() {
		this.currIdx++;
	}
	exportLexerState() {
		return this.currIdx;
	}
	importLexerState(e) {
		this.currIdx = e;
	}
	resetLexerState() {
		this.currIdx = -1;
	}
	moveToTerminatedState() {
		this.currIdx = this.tokVector.length - 1;
	}
	getLexerPosition() {
		return this.exportLexerState();
	}
}, RecognizerApi = class {
	static #e = __name(this, "RecognizerApi");
	ACTION(e) {
		return e.call(this);
	}
	consume(e, t, n) {
		return this.consumeInternal(t, e, n);
	}
	subrule(e, t, n) {
		return this.subruleInternal(t, e, n);
	}
	option(e, t) {
		return this.optionInternal(t, e);
	}
	or(e, t) {
		return this.orInternal(t, e);
	}
	many(e, t) {
		return this.manyInternal(e, t);
	}
	atLeastOne(e, t) {
		return this.atLeastOneInternal(e, t);
	}
	CONSUME(e, t) {
		return this.consumeInternal(e, 0, t);
	}
	CONSUME1(e, t) {
		return this.consumeInternal(e, 1, t);
	}
	CONSUME2(e, t) {
		return this.consumeInternal(e, 2, t);
	}
	CONSUME3(e, t) {
		return this.consumeInternal(e, 3, t);
	}
	CONSUME4(e, t) {
		return this.consumeInternal(e, 4, t);
	}
	CONSUME5(e, t) {
		return this.consumeInternal(e, 5, t);
	}
	CONSUME6(e, t) {
		return this.consumeInternal(e, 6, t);
	}
	CONSUME7(e, t) {
		return this.consumeInternal(e, 7, t);
	}
	CONSUME8(e, t) {
		return this.consumeInternal(e, 8, t);
	}
	CONSUME9(e, t) {
		return this.consumeInternal(e, 9, t);
	}
	SUBRULE(e, t) {
		return this.subruleInternal(e, 0, t);
	}
	SUBRULE1(e, t) {
		return this.subruleInternal(e, 1, t);
	}
	SUBRULE2(e, t) {
		return this.subruleInternal(e, 2, t);
	}
	SUBRULE3(e, t) {
		return this.subruleInternal(e, 3, t);
	}
	SUBRULE4(e, t) {
		return this.subruleInternal(e, 4, t);
	}
	SUBRULE5(e, t) {
		return this.subruleInternal(e, 5, t);
	}
	SUBRULE6(e, t) {
		return this.subruleInternal(e, 6, t);
	}
	SUBRULE7(e, t) {
		return this.subruleInternal(e, 7, t);
	}
	SUBRULE8(e, t) {
		return this.subruleInternal(e, 8, t);
	}
	SUBRULE9(e, t) {
		return this.subruleInternal(e, 9, t);
	}
	OPTION(e) {
		return this.optionInternal(e, 0);
	}
	OPTION1(e) {
		return this.optionInternal(e, 1);
	}
	OPTION2(e) {
		return this.optionInternal(e, 2);
	}
	OPTION3(e) {
		return this.optionInternal(e, 3);
	}
	OPTION4(e) {
		return this.optionInternal(e, 4);
	}
	OPTION5(e) {
		return this.optionInternal(e, 5);
	}
	OPTION6(e) {
		return this.optionInternal(e, 6);
	}
	OPTION7(e) {
		return this.optionInternal(e, 7);
	}
	OPTION8(e) {
		return this.optionInternal(e, 8);
	}
	OPTION9(e) {
		return this.optionInternal(e, 9);
	}
	OR(e) {
		return this.orInternal(e, 0);
	}
	OR1(e) {
		return this.orInternal(e, 1);
	}
	OR2(e) {
		return this.orInternal(e, 2);
	}
	OR3(e) {
		return this.orInternal(e, 3);
	}
	OR4(e) {
		return this.orInternal(e, 4);
	}
	OR5(e) {
		return this.orInternal(e, 5);
	}
	OR6(e) {
		return this.orInternal(e, 6);
	}
	OR7(e) {
		return this.orInternal(e, 7);
	}
	OR8(e) {
		return this.orInternal(e, 8);
	}
	OR9(e) {
		return this.orInternal(e, 9);
	}
	MANY(e) {
		this.manyInternal(0, e);
	}
	MANY1(e) {
		this.manyInternal(1, e);
	}
	MANY2(e) {
		this.manyInternal(2, e);
	}
	MANY3(e) {
		this.manyInternal(3, e);
	}
	MANY4(e) {
		this.manyInternal(4, e);
	}
	MANY5(e) {
		this.manyInternal(5, e);
	}
	MANY6(e) {
		this.manyInternal(6, e);
	}
	MANY7(e) {
		this.manyInternal(7, e);
	}
	MANY8(e) {
		this.manyInternal(8, e);
	}
	MANY9(e) {
		this.manyInternal(9, e);
	}
	MANY_SEP(e) {
		this.manySepFirstInternal(0, e);
	}
	MANY_SEP1(e) {
		this.manySepFirstInternal(1, e);
	}
	MANY_SEP2(e) {
		this.manySepFirstInternal(2, e);
	}
	MANY_SEP3(e) {
		this.manySepFirstInternal(3, e);
	}
	MANY_SEP4(e) {
		this.manySepFirstInternal(4, e);
	}
	MANY_SEP5(e) {
		this.manySepFirstInternal(5, e);
	}
	MANY_SEP6(e) {
		this.manySepFirstInternal(6, e);
	}
	MANY_SEP7(e) {
		this.manySepFirstInternal(7, e);
	}
	MANY_SEP8(e) {
		this.manySepFirstInternal(8, e);
	}
	MANY_SEP9(e) {
		this.manySepFirstInternal(9, e);
	}
	AT_LEAST_ONE(e) {
		this.atLeastOneInternal(0, e);
	}
	AT_LEAST_ONE1(e) {
		return this.atLeastOneInternal(1, e);
	}
	AT_LEAST_ONE2(e) {
		this.atLeastOneInternal(2, e);
	}
	AT_LEAST_ONE3(e) {
		this.atLeastOneInternal(3, e);
	}
	AT_LEAST_ONE4(e) {
		this.atLeastOneInternal(4, e);
	}
	AT_LEAST_ONE5(e) {
		this.atLeastOneInternal(5, e);
	}
	AT_LEAST_ONE6(e) {
		this.atLeastOneInternal(6, e);
	}
	AT_LEAST_ONE7(e) {
		this.atLeastOneInternal(7, e);
	}
	AT_LEAST_ONE8(e) {
		this.atLeastOneInternal(8, e);
	}
	AT_LEAST_ONE9(e) {
		this.atLeastOneInternal(9, e);
	}
	AT_LEAST_ONE_SEP(e) {
		this.atLeastOneSepFirstInternal(0, e);
	}
	AT_LEAST_ONE_SEP1(e) {
		this.atLeastOneSepFirstInternal(1, e);
	}
	AT_LEAST_ONE_SEP2(e) {
		this.atLeastOneSepFirstInternal(2, e);
	}
	AT_LEAST_ONE_SEP3(e) {
		this.atLeastOneSepFirstInternal(3, e);
	}
	AT_LEAST_ONE_SEP4(e) {
		this.atLeastOneSepFirstInternal(4, e);
	}
	AT_LEAST_ONE_SEP5(e) {
		this.atLeastOneSepFirstInternal(5, e);
	}
	AT_LEAST_ONE_SEP6(e) {
		this.atLeastOneSepFirstInternal(6, e);
	}
	AT_LEAST_ONE_SEP7(e) {
		this.atLeastOneSepFirstInternal(7, e);
	}
	AT_LEAST_ONE_SEP8(e) {
		this.atLeastOneSepFirstInternal(8, e);
	}
	AT_LEAST_ONE_SEP9(e) {
		this.atLeastOneSepFirstInternal(9, e);
	}
	RULE(e, t, n = DEFAULT_RULE_CONFIG) {
		if (includes_default(this.definedRulesNames, e)) {
			let t = {
				message: defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
					topLevelRule: e,
					grammarName: this.className
				}),
				type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
				ruleName: e
			};
			this.definitionErrors.push(t);
		}
		this.definedRulesNames.push(e);
		let r = this.defineRule(e, t, n);
		return this[e] = r, r;
	}
	OVERRIDE_RULE(e, t, n = DEFAULT_RULE_CONFIG) {
		let r = validateRuleIsOverridden(e, this.definedRulesNames, this.className);
		this.definitionErrors = this.definitionErrors.concat(r);
		let i = this.defineRule(e, t, n);
		return this[e] = i, i;
	}
	BACKTRACK(e, t) {
		return function() {
			this.isBackTrackingStack.push(1);
			let n = this.saveRecogState();
			try {
				return e.apply(this, t), !0;
			} catch (e) {
				if (isRecognitionException(e)) return !1;
				throw e;
			} finally {
				this.reloadRecogState(n), this.isBackTrackingStack.pop();
			}
		};
	}
	getGAstProductions() {
		return this.gastProductionsCache;
	}
	getSerializedGastProductions() {
		return serializeGrammar(values_default(this.gastProductionsCache));
	}
}, RecognizerEngine = class {
	static #e = __name(this, "RecognizerEngine");
	initRecognizerEngine(e, t) {
		if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = tokenStructuredMatcherNoCategories, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, has_default(t, "serializedGrammar")) throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n	For Further details.");
		if (isArray_default(e)) {
			if (isEmpty_default(e)) throw Error("A Token Vocabulary cannot be empty.\n	Note that the first argument for the parser constructor\n	is no longer a Token vector (since v4.0).");
			if (typeof e[0].startOffset == "number") throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n	For Further details.");
		}
		if (isArray_default(e)) this.tokensMap = reduce_default(e, (e, t) => (e[t.name] = t, e), {});
		else if (has_default(e, "modes") && every_default(flatten_default(values_default(e.modes)), isTokenType)) this.tokensMap = reduce_default(uniq_default(flatten_default(values_default(e.modes))), (e, t) => (e[t.name] = t, e), {});
		else if (isObject_default(e)) this.tokensMap = clone_default(e);
		else throw Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
		this.tokensMap.EOF = EOF, this.tokenMatcher = every_default(has_default(e, "modes") ? flatten_default(values_default(e.modes)) : values_default(e), (e) => isEmpty_default(e.categoryMatches)) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher, augmentTokenTypes(values_default(this.tokensMap));
	}
	defineRule(e, t, n) {
		if (this.selfAnalysisDone) throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
		let r = has_default(n, "resyncEnabled") ? n.resyncEnabled : DEFAULT_RULE_CONFIG.resyncEnabled, i = has_default(n, "recoveryValueFunc") ? n.recoveryValueFunc : DEFAULT_RULE_CONFIG.recoveryValueFunc, a = this.ruleShortNameIdx << BITS_FOR_METHOD_TYPE + BITS_FOR_OCCURRENCE_IDX;
		this.ruleShortNameIdx++, this.shortRuleNameToFull[a] = e, this.fullRuleNameToShort[e] = a;
		let s;
		return s = this.outputCst === !0 ? /* @__PURE__ */ __name(function(...n) {
			try {
				this.ruleInvocationStateUpdate(a, e, this.subruleIdx), t.apply(this, n);
				let r = this.CST_STACK[this.CST_STACK.length - 1];
				return this.cstPostRule(r), r;
			} catch (e) {
				return this.invokeRuleCatch(e, r, i);
			} finally {
				this.ruleFinallyStateUpdate();
			}
		}, "invokeRuleWithTry") : /* @__PURE__ */ __name(function(...n) {
			try {
				return this.ruleInvocationStateUpdate(a, e, this.subruleIdx), t.apply(this, n);
			} catch (e) {
				return this.invokeRuleCatch(e, r, i);
			} finally {
				this.ruleFinallyStateUpdate();
			}
		}, "invokeRuleWithTryCst"), Object.assign(s, {
			ruleName: e,
			originalGrammarAction: t
		});
	}
	invokeRuleCatch(e, t, n) {
		let r = this.RULE_STACK.length === 1, i = t && !this.isBackTracking() && this.recoveryEnabled;
		if (isRecognitionException(e)) {
			let t = e;
			if (i) {
				let r = this.findReSyncTokenType();
				if (this.isInCurrentRuleReSyncSet(r)) if (t.resyncedTokens = this.reSyncTo(r), this.outputCst) {
					let e = this.CST_STACK[this.CST_STACK.length - 1];
					return e.recoveredNode = !0, e;
				} else return n(e);
				else {
					if (this.outputCst) {
						let e = this.CST_STACK[this.CST_STACK.length - 1];
						e.recoveredNode = !0, t.partialCstResult = e;
					}
					throw t;
				}
			} else if (r) return this.moveToTerminatedState(), n(e);
			else throw t;
		} else throw e;
	}
	optionInternal(e, t) {
		let n = this.getKeyForAutomaticLookahead(OPTION_IDX, t);
		return this.optionInternalLogic(e, t, n);
	}
	optionInternalLogic(e, t, n) {
		let r = this.getLaFuncFromCache(n), i;
		if (typeof e != "function") {
			i = e.DEF;
			let t = e.GATE;
			if (t !== void 0) {
				let e = r;
				r = /* @__PURE__ */ __name(() => t.call(this) && e.call(this), "lookAheadFunc");
			}
		} else i = e;
		if (r.call(this) === !0) return i.call(this);
	}
	atLeastOneInternal(e, t) {
		let n = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_IDX, e);
		return this.atLeastOneInternalLogic(e, t, n);
	}
	atLeastOneInternalLogic(e, t, n) {
		let r = this.getLaFuncFromCache(n), i;
		if (typeof t != "function") {
			i = t.DEF;
			let e = t.GATE;
			if (e !== void 0) {
				let t = r;
				r = /* @__PURE__ */ __name(() => e.call(this) && t.call(this), "lookAheadFunc");
			}
		} else i = t;
		if (r.call(this) === !0) {
			let e = this.doSingleRepetition(i);
			for (; r.call(this) === !0 && e === !0;) e = this.doSingleRepetition(i);
		} else throw this.raiseEarlyExitException(e, PROD_TYPE.REPETITION_MANDATORY, t.ERR_MSG);
		this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, t], r, AT_LEAST_ONE_IDX, e, NextTerminalAfterAtLeastOneWalker);
	}
	atLeastOneSepFirstInternal(e, t) {
		let n = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_SEP_IDX, e);
		this.atLeastOneSepFirstInternalLogic(e, t, n);
	}
	atLeastOneSepFirstInternalLogic(e, t, n) {
		let r = t.DEF, i = t.SEP;
		if (this.getLaFuncFromCache(n).call(this) === !0) {
			r.call(this);
			let t = /* @__PURE__ */ __name(() => this.tokenMatcher(this.LA(1), i), "separatorLookAheadFunc");
			for (; this.tokenMatcher(this.LA(1), i) === !0;) this.CONSUME(i), r.call(this);
			this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
				e,
				i,
				t,
				r,
				NextTerminalAfterAtLeastOneSepWalker
			], t, AT_LEAST_ONE_SEP_IDX, e, NextTerminalAfterAtLeastOneSepWalker);
		} else throw this.raiseEarlyExitException(e, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, t.ERR_MSG);
	}
	manyInternal(e, t) {
		let n = this.getKeyForAutomaticLookahead(MANY_IDX, e);
		return this.manyInternalLogic(e, t, n);
	}
	manyInternalLogic(e, t, n) {
		let r = this.getLaFuncFromCache(n), i;
		if (typeof t != "function") {
			i = t.DEF;
			let e = t.GATE;
			if (e !== void 0) {
				let t = r;
				r = /* @__PURE__ */ __name(() => e.call(this) && t.call(this), "lookaheadFunction");
			}
		} else i = t;
		let a = !0;
		for (; r.call(this) === !0 && a === !0;) a = this.doSingleRepetition(i);
		this.attemptInRepetitionRecovery(this.manyInternal, [e, t], r, MANY_IDX, e, NextTerminalAfterManyWalker, a);
	}
	manySepFirstInternal(e, t) {
		let n = this.getKeyForAutomaticLookahead(MANY_SEP_IDX, e);
		this.manySepFirstInternalLogic(e, t, n);
	}
	manySepFirstInternalLogic(e, t, n) {
		let r = t.DEF, i = t.SEP;
		if (this.getLaFuncFromCache(n).call(this) === !0) {
			r.call(this);
			let t = /* @__PURE__ */ __name(() => this.tokenMatcher(this.LA(1), i), "separatorLookAheadFunc");
			for (; this.tokenMatcher(this.LA(1), i) === !0;) this.CONSUME(i), r.call(this);
			this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
				e,
				i,
				t,
				r,
				NextTerminalAfterManySepWalker
			], t, MANY_SEP_IDX, e, NextTerminalAfterManySepWalker);
		}
	}
	repetitionSepSecondInternal(e, t, n, r, i) {
		for (; n();) this.CONSUME(t), r.call(this);
		this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
			e,
			t,
			n,
			r,
			i
		], n, AT_LEAST_ONE_SEP_IDX, e, i);
	}
	doSingleRepetition(e) {
		let t = this.getLexerPosition();
		return e.call(this), this.getLexerPosition() > t;
	}
	orInternal(e, t) {
		let n = this.getKeyForAutomaticLookahead(OR_IDX, t), r = isArray_default(e) ? e : e.DEF, i = this.getLaFuncFromCache(n).call(this, r);
		if (i !== void 0) return r[i].ALT.call(this);
		this.raiseNoAltException(t, e.ERR_MSG);
	}
	ruleFinallyStateUpdate() {
		if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
			let e = this.LA(1), t = this.errorMessageProvider.buildNotAllInputParsedMessage({
				firstRedundant: e,
				ruleName: this.getCurrRuleFullName()
			});
			this.SAVE_ERROR(new NotAllInputParsedException(t, e));
		}
	}
	subruleInternal(e, t, n) {
		let r;
		try {
			let i = n === void 0 ? void 0 : n.ARGS;
			return this.subruleIdx = t, r = e.apply(this, i), this.cstPostNonTerminal(r, n !== void 0 && n.LABEL !== void 0 ? n.LABEL : e.ruleName), r;
		} catch (t) {
			throw this.subruleInternalError(t, n, e.ruleName);
		}
	}
	subruleInternalError(e, t, n) {
		throw isRecognitionException(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, t !== void 0 && t.LABEL !== void 0 ? t.LABEL : n), delete e.partialCstResult), e;
	}
	consumeInternal(e, t, n) {
		let r;
		try {
			let t = this.LA(1);
			this.tokenMatcher(t, e) === !0 ? (this.consumeToken(), r = t) : this.consumeInternalError(e, t, n);
		} catch (n) {
			r = this.consumeInternalRecovery(e, t, n);
		}
		return this.cstPostTerminal(n !== void 0 && n.LABEL !== void 0 ? n.LABEL : e.name, r), r;
	}
	consumeInternalError(e, t, n) {
		let r, i = this.LA(0);
		throw r = n !== void 0 && n.ERR_MSG ? n.ERR_MSG : this.errorMessageProvider.buildMismatchTokenMessage({
			expected: e,
			actual: t,
			previous: i,
			ruleName: this.getCurrRuleFullName()
		}), this.SAVE_ERROR(new MismatchedTokenException(r, t, i));
	}
	consumeInternalRecovery(e, t, n) {
		if (this.recoveryEnabled && n.name === "MismatchedTokenException" && !this.isBackTracking()) {
			let r = this.getFollowsForInRuleRecovery(e, t);
			try {
				return this.tryInRuleRecovery(e, r);
			} catch (e) {
				throw e.name === IN_RULE_RECOVERY_EXCEPTION ? n : e;
			}
		} else throw n;
	}
	saveRecogState() {
		let e = this.errors, t = clone_default(this.RULE_STACK);
		return {
			errors: e,
			lexerState: this.exportLexerState(),
			RULE_STACK: t,
			CST_STACK: this.CST_STACK
		};
	}
	reloadRecogState(e) {
		this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
	}
	ruleInvocationStateUpdate(e, t, n) {
		this.RULE_OCCURRENCE_STACK.push(n), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(t);
	}
	isBackTracking() {
		return this.isBackTrackingStack.length !== 0;
	}
	getCurrRuleFullName() {
		let e = this.getLastExplicitRuleShortName();
		return this.shortRuleNameToFull[e];
	}
	shortRuleNameToFullName(e) {
		return this.shortRuleNameToFull[e];
	}
	isAtEndOfInput() {
		return this.tokenMatcher(this.LA(1), EOF);
	}
	reset() {
		this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
	}
}, ErrorHandler = class {
	static #e = __name(this, "ErrorHandler");
	initErrorHandler(e) {
		this._errors = [], this.errorMessageProvider = has_default(e, "errorMessageProvider") ? e.errorMessageProvider : DEFAULT_PARSER_CONFIG.errorMessageProvider;
	}
	SAVE_ERROR(e) {
		if (isRecognitionException(e)) return e.context = {
			ruleStack: this.getHumanReadableRuleStack(),
			ruleOccurrenceStack: clone_default(this.RULE_OCCURRENCE_STACK)
		}, this._errors.push(e), e;
		throw Error("Trying to save an Error which is not a RecognitionException");
	}
	get errors() {
		return clone_default(this._errors);
	}
	set errors(e) {
		this._errors = e;
	}
	raiseEarlyExitException(e, t, n) {
		let r = this.getCurrRuleFullName(), i = this.getGAstProductions()[r], a = getLookaheadPathsForOptionalProd(e, i, t, this.maxLookahead)[0], o = [];
		for (let e = 1; e <= this.maxLookahead; e++) o.push(this.LA(e));
		let s = this.errorMessageProvider.buildEarlyExitMessage({
			expectedIterationPaths: a,
			actual: o,
			previous: this.LA(0),
			customUserDescription: n,
			ruleName: r
		});
		throw this.SAVE_ERROR(new EarlyExitException(s, this.LA(1), this.LA(0)));
	}
	raiseNoAltException(e, t) {
		let n = this.getCurrRuleFullName(), r = this.getGAstProductions()[n], i = getLookaheadPathsForOr(e, r, this.maxLookahead), a = [];
		for (let e = 1; e <= this.maxLookahead; e++) a.push(this.LA(e));
		let o = this.LA(0), s = this.errorMessageProvider.buildNoViableAltMessage({
			expectedPathsPerAlt: i,
			actual: a,
			previous: o,
			customUserDescription: t,
			ruleName: this.getCurrRuleFullName()
		});
		throw this.SAVE_ERROR(new NoViableAltException(s, this.LA(1), o));
	}
}, ContentAssist = class {
	static #e = __name(this, "ContentAssist");
	initContentAssist() {}
	computeContentAssist(e, t) {
		let n = this.gastProductionsCache[e];
		if (isUndefined_default(n)) throw Error(`Rule ->${e}<- does not exist in this grammar.`);
		return nextPossibleTokensAfter([n], t, this.tokenMatcher, this.maxLookahead);
	}
	getNextPossibleTokenTypes(e) {
		let t = head_default(e.ruleStack), n = this.getGAstProductions()[t];
		return new NextAfterTokenWalker(n, e).startWalking();
	}
}, RECORDING_NULL_OBJECT = { description: "This Object indicates the Parser is during Recording Phase" };
Object.freeze(RECORDING_NULL_OBJECT);
var HANDLE_SEPARATOR = !0, MAX_METHOD_IDX = 2 ** BITS_FOR_OCCURRENCE_IDX - 1, RFT = createToken({
	name: "RECORDING_PHASE_TOKEN",
	pattern: Lexer.NA
});
augmentTokenTypes([RFT]);
var RECORDING_PHASE_TOKEN = createTokenInstance(RFT, "This IToken indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details", -1, -1, -1, -1, -1, -1);
Object.freeze(RECORDING_PHASE_TOKEN);
var RECORDING_PHASE_CSTNODE = {
	name: "This CSTNode indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
	children: {}
}, GastRecorder = class {
	static #e = __name(this, "GastRecorder");
	initGastRecorder(e) {
		this.recordingProdStack = [], this.RECORDING_PHASE = !1;
	}
	enableRecording() {
		this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", () => {
			for (let e = 0; e < 10; e++) {
				let t = e > 0 ? e : "";
				this[`CONSUME${t}`] = function(t, n) {
					return this.consumeInternalRecord(t, e, n);
				}, this[`SUBRULE${t}`] = function(t, n) {
					return this.subruleInternalRecord(t, e, n);
				}, this[`OPTION${t}`] = function(t) {
					return this.optionInternalRecord(t, e);
				}, this[`OR${t}`] = function(t) {
					return this.orInternalRecord(t, e);
				}, this[`MANY${t}`] = function(t) {
					this.manyInternalRecord(e, t);
				}, this[`MANY_SEP${t}`] = function(t) {
					this.manySepFirstInternalRecord(e, t);
				}, this[`AT_LEAST_ONE${t}`] = function(t) {
					this.atLeastOneInternalRecord(e, t);
				}, this[`AT_LEAST_ONE_SEP${t}`] = function(t) {
					this.atLeastOneSepFirstInternalRecord(e, t);
				};
			}
			this.consume = function(e, t, n) {
				return this.consumeInternalRecord(t, e, n);
			}, this.subrule = function(e, t, n) {
				return this.subruleInternalRecord(t, e, n);
			}, this.option = function(e, t) {
				return this.optionInternalRecord(t, e);
			}, this.or = function(e, t) {
				return this.orInternalRecord(t, e);
			}, this.many = function(e, t) {
				this.manyInternalRecord(e, t);
			}, this.atLeastOne = function(e, t) {
				this.atLeastOneInternalRecord(e, t);
			}, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
		});
	}
	disableRecording() {
		this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", () => {
			let e = this;
			for (let t = 0; t < 10; t++) {
				let n = t > 0 ? t : "";
				delete e[`CONSUME${n}`], delete e[`SUBRULE${n}`], delete e[`OPTION${n}`], delete e[`OR${n}`], delete e[`MANY${n}`], delete e[`MANY_SEP${n}`], delete e[`AT_LEAST_ONE${n}`], delete e[`AT_LEAST_ONE_SEP${n}`];
			}
			delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
		});
	}
	ACTION_RECORD(e) {}
	BACKTRACK_RECORD(e, t) {
		return () => !0;
	}
	LA_RECORD(e) {
		return END_OF_FILE;
	}
	topLevelRuleRecord(e, t) {
		try {
			let n = new Rule({
				definition: [],
				name: e
			});
			return n.name = e, this.recordingProdStack.push(n), t.call(this), this.recordingProdStack.pop(), n;
		} catch (e) {
			if (e.KNOWN_RECORDER_ERROR !== !0) try {
				e.message += "\n	 This error was thrown during the \"grammar recording phase\" For more info see:\n	https://chevrotain.io/docs/guide/internals.html#grammar-recording";
			} catch {
				throw e;
			}
			throw e;
		}
	}
	optionInternalRecord(e, t) {
		return recordProd.call(this, Option, e, t);
	}
	atLeastOneInternalRecord(e, t) {
		recordProd.call(this, RepetitionMandatory, t, e);
	}
	atLeastOneSepFirstInternalRecord(e, t) {
		recordProd.call(this, RepetitionMandatoryWithSeparator, t, e, HANDLE_SEPARATOR);
	}
	manyInternalRecord(e, t) {
		recordProd.call(this, Repetition, t, e);
	}
	manySepFirstInternalRecord(e, t) {
		recordProd.call(this, RepetitionWithSeparator, t, e, HANDLE_SEPARATOR);
	}
	orInternalRecord(e, t) {
		return recordOrProd.call(this, e, t);
	}
	subruleInternalRecord(e, t, n) {
		if (assertMethodIdxIsValid(t), !e || has_default(e, "ruleName") === !1) {
			let n = /* @__PURE__ */ Error(`<SUBRULE${getIdxSuffix(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
			throw n.KNOWN_RECORDER_ERROR = !0, n;
		}
		let r = last_default(this.recordingProdStack), i = e.ruleName, a = new NonTerminal({
			idx: t,
			nonTerminalName: i,
			label: n?.LABEL,
			referencedRule: void 0
		});
		return r.definition.push(a), this.outputCst ? RECORDING_PHASE_CSTNODE : RECORDING_NULL_OBJECT;
	}
	consumeInternalRecord(e, t, n) {
		if (assertMethodIdxIsValid(t), !hasShortKeyProperty(e)) {
			let n = /* @__PURE__ */ Error(`<CONSUME${getIdxSuffix(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
			throw n.KNOWN_RECORDER_ERROR = !0, n;
		}
		let r = last_default(this.recordingProdStack), i = new Terminal({
			idx: t,
			terminalType: e,
			label: n?.LABEL
		});
		return r.definition.push(i), RECORDING_PHASE_TOKEN;
	}
};
function recordProd(e, t, n, r = !1) {
	assertMethodIdxIsValid(n);
	let i = last_default(this.recordingProdStack), a = isFunction_default(t) ? t : t.DEF, o = new e({
		definition: [],
		idx: n
	});
	return r && (o.separator = t.SEP), has_default(t, "MAX_LOOKAHEAD") && (o.maxLookahead = t.MAX_LOOKAHEAD), this.recordingProdStack.push(o), a.call(this), i.definition.push(o), this.recordingProdStack.pop(), RECORDING_NULL_OBJECT;
}
__name(recordProd, "recordProd");
function recordOrProd(e, t) {
	assertMethodIdxIsValid(t);
	let n = last_default(this.recordingProdStack), r = isArray_default(e) === !1, i = r === !1 ? e : e.DEF, a = new Alternation({
		definition: [],
		idx: t,
		ignoreAmbiguities: r && e.IGNORE_AMBIGUITIES === !0
	});
	return has_default(e, "MAX_LOOKAHEAD") && (a.maxLookahead = e.MAX_LOOKAHEAD), a.hasPredicates = some_default(i, (e) => isFunction_default(e.GATE)), n.definition.push(a), forEach_default(i, (e) => {
		let t = new Alternative({ definition: [] });
		a.definition.push(t), has_default(e, "IGNORE_AMBIGUITIES") ? t.ignoreAmbiguities = e.IGNORE_AMBIGUITIES : has_default(e, "GATE") && (t.ignoreAmbiguities = !0), this.recordingProdStack.push(t), e.ALT.call(this), this.recordingProdStack.pop();
	}), RECORDING_NULL_OBJECT;
}
__name(recordOrProd, "recordOrProd");
function getIdxSuffix(e) {
	return e === 0 ? "" : `${e}`;
}
__name(getIdxSuffix, "getIdxSuffix");
function assertMethodIdxIsValid(e) {
	if (e < 0 || e > MAX_METHOD_IDX) {
		let t = /* @__PURE__ */ Error(`Invalid DSL Method idx value: <${e}>
	Idx value must be a none negative value smaller than ${MAX_METHOD_IDX + 1}`);
		throw t.KNOWN_RECORDER_ERROR = !0, t;
	}
}
__name(assertMethodIdxIsValid, "assertMethodIdxIsValid");
var PerformanceTracer = class {
	static #e = __name(this, "PerformanceTracer");
	initPerformanceTracer(e) {
		if (has_default(e, "traceInitPerf")) {
			let t = e.traceInitPerf, n = typeof t == "number";
			this.traceInitMaxIdent = n ? t : Infinity, this.traceInitPerf = n ? t > 0 : t;
		} else this.traceInitMaxIdent = 0, this.traceInitPerf = DEFAULT_PARSER_CONFIG.traceInitPerf;
		this.traceInitIndent = -1;
	}
	TRACE_INIT(e, t) {
		if (this.traceInitPerf === !0) {
			this.traceInitIndent++;
			let n = Array(this.traceInitIndent + 1).join("	");
			this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n}--> <${e}>`);
			let { time: r, value: i } = timer(t), a = r > 10 ? console.warn : console.log;
			return this.traceInitIndent < this.traceInitMaxIdent && a(`${n}<-- <${e}> time: ${r}ms`), this.traceInitIndent--, i;
		} else return t();
	}
};
function applyMixins(e, t) {
	t.forEach((t) => {
		let n = t.prototype;
		Object.getOwnPropertyNames(n).forEach((r) => {
			if (r === "constructor") return;
			let i = Object.getOwnPropertyDescriptor(n, r);
			i && (i.get || i.set) ? Object.defineProperty(e.prototype, r, i) : e.prototype[r] = t.prototype[r];
		});
	});
}
__name(applyMixins, "applyMixins");
var END_OF_FILE = createTokenInstance(EOF, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(END_OF_FILE);
var DEFAULT_PARSER_CONFIG = Object.freeze({
	recoveryEnabled: !1,
	maxLookahead: 3,
	dynamicTokensEnabled: !1,
	outputCst: !0,
	errorMessageProvider: defaultParserErrorProvider,
	nodeLocationTracking: "none",
	traceInitPerf: !1,
	skipValidations: !1
}), DEFAULT_RULE_CONFIG = Object.freeze({
	recoveryValueFunc: /* @__PURE__ */ __name(() => void 0, "recoveryValueFunc"),
	resyncEnabled: !0
}), ParserDefinitionErrorType;
(function(e) {
	e[e.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", e[e.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", e[e.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", e[e.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", e[e.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", e[e.LEFT_RECURSION = 5] = "LEFT_RECURSION", e[e.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", e[e.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", e[e.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", e[e.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", e[e.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", e[e.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", e[e.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", e[e.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ParserDefinitionErrorType ||= {});
function EMPTY_ALT(e = void 0) {
	return function() {
		return e;
	};
}
__name(EMPTY_ALT, "EMPTY_ALT");
var Parser = class e {
	static #e = __name(this, "Parser");
	static performSelfAnalysis(e) {
		throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
	}
	performSelfAnalysis() {
		this.TRACE_INIT("performSelfAnalysis", () => {
			let t;
			this.selfAnalysisDone = !0;
			let n = this.className;
			this.TRACE_INIT("toFastProps", () => {
				toFastProperties(this);
			}), this.TRACE_INIT("Grammar Recording", () => {
				try {
					this.enableRecording(), forEach_default(this.definedRulesNames, (e) => {
						let t = this[e].originalGrammarAction, n;
						this.TRACE_INIT(`${e} Rule`, () => {
							n = this.topLevelRuleRecord(e, t);
						}), this.gastProductionsCache[e] = n;
					});
				} finally {
					this.disableRecording();
				}
			});
			let r = [];
			if (this.TRACE_INIT("Grammar Resolving", () => {
				r = resolveGrammar2({ rules: values_default(this.gastProductionsCache) }), this.definitionErrors = this.definitionErrors.concat(r);
			}), this.TRACE_INIT("Grammar Validations", () => {
				if (isEmpty_default(r) && this.skipValidations === !1) {
					let e = validateGrammar2({
						rules: values_default(this.gastProductionsCache),
						tokenTypes: values_default(this.tokensMap),
						errMsgProvider: defaultGrammarValidatorErrorProvider,
						grammarName: n
					}), t = validateLookahead({
						lookaheadStrategy: this.lookaheadStrategy,
						rules: values_default(this.gastProductionsCache),
						tokenTypes: values_default(this.tokensMap),
						grammarName: n
					});
					this.definitionErrors = this.definitionErrors.concat(e, t);
				}
			}), isEmpty_default(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
				this.resyncFollows = computeAllProdsFollows(values_default(this.gastProductionsCache));
			}), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
				var e, t;
				(t = (e = this.lookaheadStrategy).initialize) == null || t.call(e, { rules: values_default(this.gastProductionsCache) }), this.preComputeLookaheadFunctions(values_default(this.gastProductionsCache));
			})), !e.DEFER_DEFINITION_ERRORS_HANDLING && !isEmpty_default(this.definitionErrors)) throw t = map_default(this.definitionErrors, (e) => e.message), Error(`Parser Definition Errors detected:
 ${t.join("\n-------------------------------\n")}`);
		});
	}
	constructor(e, t) {
		this.definitionErrors = [], this.selfAnalysisDone = !1;
		let n = this;
		if (n.initErrorHandler(t), n.initLexerAdapter(), n.initLooksAhead(t), n.initRecognizerEngine(e, t), n.initRecoverable(t), n.initTreeBuilder(t), n.initContentAssist(), n.initGastRecorder(t), n.initPerformanceTracer(t), has_default(t, "ignoredIssues")) throw Error("The <ignoredIssues> IParserConfig property has been deprecated.\n	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n	For further details.");
		this.skipValidations = has_default(t, "skipValidations") ? t.skipValidations : DEFAULT_PARSER_CONFIG.skipValidations;
	}
};
Parser.DEFER_DEFINITION_ERRORS_HANDLING = !1, applyMixins(Parser, [
	Recoverable,
	LooksAhead,
	TreeBuilder,
	LexerAdapter,
	RecognizerEngine,
	RecognizerApi,
	ErrorHandler,
	ContentAssist,
	GastRecorder,
	PerformanceTracer
]);
var EmbeddedActionsParser = class extends Parser {
	static #e = __name(this, "EmbeddedActionsParser");
	constructor(e, t = DEFAULT_PARSER_CONFIG) {
		let n = clone_default(t);
		n.outputCst = !1, super(e, n);
	}
};
function arrayMap2(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
__name(arrayMap2, "arrayMap");
var arrayMap_default2 = arrayMap2;
function listCacheClear2() {
	this.__data__ = [], this.size = 0;
}
__name(listCacheClear2, "listCacheClear");
var listCacheClear_default2 = listCacheClear2;
function eq2(e, t) {
	return e === t || e !== e && t !== t;
}
__name(eq2, "eq");
var eq_default2 = eq2;
function assocIndexOf2(e, t) {
	for (var n = e.length; n--;) if (eq_default2(e[n][0], t)) return n;
	return -1;
}
__name(assocIndexOf2, "assocIndexOf");
var assocIndexOf_default2 = assocIndexOf2, splice2 = Array.prototype.splice;
function listCacheDelete2(e) {
	var t = this.__data__, n = assocIndexOf_default2(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : splice2.call(t, n, 1), --this.size, !0);
}
__name(listCacheDelete2, "listCacheDelete");
var listCacheDelete_default2 = listCacheDelete2;
function listCacheGet2(e) {
	var t = this.__data__, n = assocIndexOf_default2(t, e);
	return n < 0 ? void 0 : t[n][1];
}
__name(listCacheGet2, "listCacheGet");
var listCacheGet_default2 = listCacheGet2;
function listCacheHas2(e) {
	return assocIndexOf_default2(this.__data__, e) > -1;
}
__name(listCacheHas2, "listCacheHas");
var listCacheHas_default2 = listCacheHas2;
function listCacheSet2(e, t) {
	var n = this.__data__, r = assocIndexOf_default2(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
__name(listCacheSet2, "listCacheSet");
var listCacheSet_default2 = listCacheSet2;
function ListCache2(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
__name(ListCache2, "ListCache"), ListCache2.prototype.clear = listCacheClear_default2, ListCache2.prototype.delete = listCacheDelete_default2, ListCache2.prototype.get = listCacheGet_default2, ListCache2.prototype.has = listCacheHas_default2, ListCache2.prototype.set = listCacheSet_default2;
var ListCache_default2 = ListCache2;
function stackClear2() {
	this.__data__ = new ListCache_default2(), this.size = 0;
}
__name(stackClear2, "stackClear");
var stackClear_default2 = stackClear2;
function stackDelete2(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
__name(stackDelete2, "stackDelete");
var stackDelete_default2 = stackDelete2;
function stackGet2(e) {
	return this.__data__.get(e);
}
__name(stackGet2, "stackGet");
var stackGet_default2 = stackGet2;
function stackHas2(e) {
	return this.__data__.has(e);
}
__name(stackHas2, "stackHas");
var stackHas_default2 = stackHas2, freeGlobal_default2 = typeof global == "object" && global && global.Object === Object && global, freeSelf2 = typeof self == "object" && self && self.Object === Object && self, root_default2 = freeGlobal_default2 || freeSelf2 || Function("return this")(), Symbol_default2 = root_default2.Symbol, objectProto21 = Object.prototype, hasOwnProperty18 = objectProto21.hasOwnProperty, nativeObjectToString3 = objectProto21.toString, symToStringTag3 = Symbol_default2 ? Symbol_default2.toStringTag : void 0;
function getRawTag2(e) {
	var t = hasOwnProperty18.call(e, symToStringTag3), n = e[symToStringTag3];
	try {
		e[symToStringTag3] = void 0;
		var r = !0;
	} catch {}
	var i = nativeObjectToString3.call(e);
	return r && (t ? e[symToStringTag3] = n : delete e[symToStringTag3]), i;
}
__name(getRawTag2, "getRawTag");
var getRawTag_default2 = getRawTag2, nativeObjectToString4 = Object.prototype.toString;
function objectToString2(e) {
	return nativeObjectToString4.call(e);
}
__name(objectToString2, "objectToString");
var objectToString_default2 = objectToString2, nullTag2 = "[object Null]", undefinedTag2 = "[object Undefined]", symToStringTag4 = Symbol_default2 ? Symbol_default2.toStringTag : void 0;
function baseGetTag2(e) {
	return e == null ? e === void 0 ? undefinedTag2 : nullTag2 : symToStringTag4 && symToStringTag4 in Object(e) ? getRawTag_default2(e) : objectToString_default2(e);
}
__name(baseGetTag2, "baseGetTag");
var baseGetTag_default2 = baseGetTag2;
function isObject2(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
__name(isObject2, "isObject");
var isObject_default2 = isObject2, asyncTag2 = "[object AsyncFunction]", funcTag4 = "[object Function]", genTag3 = "[object GeneratorFunction]", proxyTag2 = "[object Proxy]";
function isFunction2(e) {
	if (!isObject_default2(e)) return !1;
	var t = baseGetTag_default2(e);
	return t == funcTag4 || t == genTag3 || t == asyncTag2 || t == proxyTag2;
}
__name(isFunction2, "isFunction");
var isFunction_default2 = isFunction2, coreJsData_default2 = root_default2["__core-js_shared__"], maskSrcKey2 = (function() {
	var e = /[^.]+$/.exec(coreJsData_default2 && coreJsData_default2.keys && coreJsData_default2.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
})();
function isMasked2(e) {
	return !!maskSrcKey2 && maskSrcKey2 in e;
}
__name(isMasked2, "isMasked");
var isMasked_default2 = isMasked2, funcToString3 = Function.prototype.toString;
function toSource2(e) {
	if (e != null) {
		try {
			return funcToString3.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
__name(toSource2, "toSource");
var toSource_default2 = toSource2, reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor2 = /^\[object .+?Constructor\]$/, funcProto4 = Function.prototype, objectProto23 = Object.prototype, funcToString4 = funcProto4.toString, hasOwnProperty19 = objectProto23.hasOwnProperty, reIsNative2 = RegExp("^" + funcToString4.call(hasOwnProperty19).replace(reRegExpChar2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative2(e) {
	return !isObject_default2(e) || isMasked_default2(e) ? !1 : (isFunction_default2(e) ? reIsNative2 : reIsHostCtor2).test(toSource_default2(e));
}
__name(baseIsNative2, "baseIsNative");
var baseIsNative_default2 = baseIsNative2;
function getValue2(e, t) {
	return e?.[t];
}
__name(getValue2, "getValue");
var getValue_default2 = getValue2;
function getNative2(e, t) {
	var n = getValue_default2(e, t);
	return baseIsNative_default2(n) ? n : void 0;
}
__name(getNative2, "getNative");
var getNative_default2 = getNative2, Map_default2 = getNative_default2(root_default2, "Map"), nativeCreate_default2 = getNative_default2(Object, "create");
function hashClear2() {
	this.__data__ = nativeCreate_default2 ? nativeCreate_default2(null) : {}, this.size = 0;
}
__name(hashClear2, "hashClear");
var hashClear_default2 = hashClear2;
function hashDelete2(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= t ? 1 : 0, t;
}
__name(hashDelete2, "hashDelete");
var hashDelete_default2 = hashDelete2, HASH_UNDEFINED4 = "__lodash_hash_undefined__", hasOwnProperty20 = Object.prototype.hasOwnProperty;
function hashGet2(e) {
	var t = this.__data__;
	if (nativeCreate_default2) {
		var n = t[e];
		return n === HASH_UNDEFINED4 ? void 0 : n;
	}
	return hasOwnProperty20.call(t, e) ? t[e] : void 0;
}
__name(hashGet2, "hashGet");
var hashGet_default2 = hashGet2, hasOwnProperty21 = Object.prototype.hasOwnProperty;
function hashHas2(e) {
	var t = this.__data__;
	return nativeCreate_default2 ? t[e] !== void 0 : hasOwnProperty21.call(t, e);
}
__name(hashHas2, "hashHas");
var hashHas_default2 = hashHas2, HASH_UNDEFINED5 = "__lodash_hash_undefined__";
function hashSet2(e, t) {
	var n = this.__data__;
	return this.size += this.has(e) ? 0 : 1, n[e] = nativeCreate_default2 && t === void 0 ? HASH_UNDEFINED5 : t, this;
}
__name(hashSet2, "hashSet");
var hashSet_default2 = hashSet2;
function Hash2(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
__name(Hash2, "Hash"), Hash2.prototype.clear = hashClear_default2, Hash2.prototype.delete = hashDelete_default2, Hash2.prototype.get = hashGet_default2, Hash2.prototype.has = hashHas_default2, Hash2.prototype.set = hashSet_default2;
var Hash_default2 = Hash2;
function mapCacheClear2() {
	this.size = 0, this.__data__ = {
		hash: new Hash_default2(),
		map: new (Map_default2 || ListCache_default2)(),
		string: new Hash_default2()
	};
}
__name(mapCacheClear2, "mapCacheClear");
var mapCacheClear_default2 = mapCacheClear2;
function isKeyable2(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
__name(isKeyable2, "isKeyable");
var isKeyable_default2 = isKeyable2;
function getMapData2(e, t) {
	var n = e.__data__;
	return isKeyable_default2(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
__name(getMapData2, "getMapData");
var getMapData_default2 = getMapData2;
function mapCacheDelete2(e) {
	var t = getMapData_default2(this, e).delete(e);
	return this.size -= t ? 1 : 0, t;
}
__name(mapCacheDelete2, "mapCacheDelete");
var mapCacheDelete_default2 = mapCacheDelete2;
function mapCacheGet2(e) {
	return getMapData_default2(this, e).get(e);
}
__name(mapCacheGet2, "mapCacheGet");
var mapCacheGet_default2 = mapCacheGet2;
function mapCacheHas2(e) {
	return getMapData_default2(this, e).has(e);
}
__name(mapCacheHas2, "mapCacheHas");
var mapCacheHas_default2 = mapCacheHas2;
function mapCacheSet2(e, t) {
	var n = getMapData_default2(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
__name(mapCacheSet2, "mapCacheSet");
var mapCacheSet_default2 = mapCacheSet2;
function MapCache2(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
__name(MapCache2, "MapCache"), MapCache2.prototype.clear = mapCacheClear_default2, MapCache2.prototype.delete = mapCacheDelete_default2, MapCache2.prototype.get = mapCacheGet_default2, MapCache2.prototype.has = mapCacheHas_default2, MapCache2.prototype.set = mapCacheSet_default2;
var MapCache_default2 = MapCache2, LARGE_ARRAY_SIZE4 = 200;
function stackSet2(e, t) {
	var n = this.__data__;
	if (n instanceof ListCache_default2) {
		var r = n.__data__;
		if (!Map_default2 || r.length < LARGE_ARRAY_SIZE4 - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new MapCache_default2(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
__name(stackSet2, "stackSet");
var stackSet_default2 = stackSet2;
function Stack2(e) {
	this.size = (this.__data__ = new ListCache_default2(e)).size;
}
__name(Stack2, "Stack"), Stack2.prototype.clear = stackClear_default2, Stack2.prototype.delete = stackDelete_default2, Stack2.prototype.get = stackGet_default2, Stack2.prototype.has = stackHas_default2, Stack2.prototype.set = stackSet_default2;
var Stack_default2 = Stack2, HASH_UNDEFINED6 = "__lodash_hash_undefined__";
function setCacheAdd2(e) {
	return this.__data__.set(e, HASH_UNDEFINED6), this;
}
__name(setCacheAdd2, "setCacheAdd");
var setCacheAdd_default2 = setCacheAdd2;
function setCacheHas2(e) {
	return this.__data__.has(e);
}
__name(setCacheHas2, "setCacheHas");
var setCacheHas_default2 = setCacheHas2;
function SetCache2(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.__data__ = new MapCache_default2(); ++t < n;) this.add(e[t]);
}
__name(SetCache2, "SetCache"), SetCache2.prototype.add = SetCache2.prototype.push = setCacheAdd_default2, SetCache2.prototype.has = setCacheHas_default2;
var SetCache_default2 = SetCache2;
function arraySome2(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
	return !1;
}
__name(arraySome2, "arraySome");
var arraySome_default2 = arraySome2;
function cacheHas2(e, t) {
	return e.has(t);
}
__name(cacheHas2, "cacheHas");
var cacheHas_default2 = cacheHas2, COMPARE_PARTIAL_FLAG7 = 1, COMPARE_UNORDERED_FLAG5 = 2;
function equalArrays2(e, t, n, r, i, a) {
	var o = n & COMPARE_PARTIAL_FLAG7, s = e.length, c = t.length;
	if (s != c && !(o && c > s)) return !1;
	var l = a.get(e), u = a.get(t);
	if (l && u) return l == t && u == e;
	var d = -1, f = !0, p = n & COMPARE_UNORDERED_FLAG5 ? new SetCache_default2() : void 0;
	for (a.set(e, t), a.set(t, e); ++d < s;) {
		var m = e[d], h = t[d];
		if (r) var g = o ? r(h, m, d, t, e, a) : r(m, h, d, e, t, a);
		if (g !== void 0) {
			if (g) continue;
			f = !1;
			break;
		}
		if (p) {
			if (!arraySome_default2(t, function(e, t) {
				if (!cacheHas_default2(p, t) && (m === e || i(m, e, n, r, a))) return p.push(t);
			})) {
				f = !1;
				break;
			}
		} else if (!(m === h || i(m, h, n, r, a))) {
			f = !1;
			break;
		}
	}
	return a.delete(e), a.delete(t), f;
}
__name(equalArrays2, "equalArrays");
var equalArrays_default2 = equalArrays2, Uint8Array_default2 = root_default2.Uint8Array;
function mapToArray2(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e, r) {
		n[++t] = [r, e];
	}), n;
}
__name(mapToArray2, "mapToArray");
var mapToArray_default2 = mapToArray2;
function setToArray2(e) {
	var t = -1, n = Array(e.size);
	return e.forEach(function(e) {
		n[++t] = e;
	}), n;
}
__name(setToArray2, "setToArray");
var setToArray_default2 = setToArray2, COMPARE_PARTIAL_FLAG8 = 1, COMPARE_UNORDERED_FLAG6 = 2, boolTag5 = "[object Boolean]", dateTag5 = "[object Date]", errorTag4 = "[object Error]", mapTag8 = "[object Map]", numberTag5 = "[object Number]", regexpTag6 = "[object RegExp]", setTag8 = "[object Set]", stringTag6 = "[object String]", symbolTag5 = "[object Symbol]", arrayBufferTag5 = "[object ArrayBuffer]", dataViewTag6 = "[object DataView]", symbolProto4 = Symbol_default2 ? Symbol_default2.prototype : void 0, symbolValueOf3 = symbolProto4 ? symbolProto4.valueOf : void 0;
function equalByTag2(e, t, n, r, i, a, o) {
	switch (n) {
		case dataViewTag6:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case arrayBufferTag5: return !(e.byteLength != t.byteLength || !a(new Uint8Array_default2(e), new Uint8Array_default2(t)));
		case boolTag5:
		case dateTag5:
		case numberTag5: return eq_default2(+e, +t);
		case errorTag4: return e.name == t.name && e.message == t.message;
		case regexpTag6:
		case stringTag6: return e == t + "";
		case mapTag8: var s = mapToArray_default2;
		case setTag8:
			var c = r & COMPARE_PARTIAL_FLAG8;
			if (s ||= setToArray_default2, e.size != t.size && !c) return !1;
			var l = o.get(e);
			if (l) return l == t;
			r |= COMPARE_UNORDERED_FLAG6, o.set(e, t);
			var u = equalArrays_default2(s(e), s(t), r, i, a, o);
			return o.delete(e), u;
		case symbolTag5: if (symbolValueOf3) return symbolValueOf3.call(e) == symbolValueOf3.call(t);
	}
	return !1;
}
__name(equalByTag2, "equalByTag");
var equalByTag_default2 = equalByTag2;
function arrayPush2(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
__name(arrayPush2, "arrayPush");
var arrayPush_default2 = arrayPush2, isArray_default2 = Array.isArray;
function baseGetAllKeys2(e, t, n) {
	var r = t(e);
	return isArray_default2(e) ? r : arrayPush_default2(r, n(e));
}
__name(baseGetAllKeys2, "baseGetAllKeys");
var baseGetAllKeys_default2 = baseGetAllKeys2;
function arrayFilter2(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
__name(arrayFilter2, "arrayFilter");
var arrayFilter_default2 = arrayFilter2;
function stubArray2() {
	return [];
}
__name(stubArray2, "stubArray");
var stubArray_default2 = stubArray2, propertyIsEnumerable3 = Object.prototype.propertyIsEnumerable, nativeGetSymbols3 = Object.getOwnPropertySymbols, getSymbols_default2 = nativeGetSymbols3 ? function(e) {
	return e == null ? [] : (e = Object(e), arrayFilter_default2(nativeGetSymbols3(e), function(t) {
		return propertyIsEnumerable3.call(e, t);
	}));
} : stubArray_default2;
function baseTimes2(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
__name(baseTimes2, "baseTimes");
var baseTimes_default2 = baseTimes2;
function isObjectLike2(e) {
	return typeof e == "object" && !!e;
}
__name(isObjectLike2, "isObjectLike");
var isObjectLike_default2 = isObjectLike2, argsTag5 = "[object Arguments]";
function baseIsArguments2(e) {
	return isObjectLike_default2(e) && baseGetTag_default2(e) == argsTag5;
}
__name(baseIsArguments2, "baseIsArguments");
var baseIsArguments_default2 = baseIsArguments2, objectProto27 = Object.prototype, hasOwnProperty22 = objectProto27.hasOwnProperty, propertyIsEnumerable4 = objectProto27.propertyIsEnumerable, isArguments_default2 = baseIsArguments_default2(/* @__PURE__ */ (function() {
	return arguments;
})()) ? baseIsArguments_default2 : function(e) {
	return isObjectLike_default2(e) && hasOwnProperty22.call(e, "callee") && !propertyIsEnumerable4.call(e, "callee");
};
function stubFalse2() {
	return !1;
}
__name(stubFalse2, "stubFalse");
var stubFalse_default2 = stubFalse2, freeExports4 = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule4 = freeExports4 && typeof module == "object" && module && !module.nodeType && module, Buffer4 = freeModule4 && freeModule4.exports === freeExports4 ? root_default2.Buffer : void 0, isBuffer_default2 = (Buffer4 ? Buffer4.isBuffer : void 0) || stubFalse_default2, MAX_SAFE_INTEGER3 = 9007199254740991, reIsUint2 = /^(?:0|[1-9]\d*)$/;
function isIndex2(e, t) {
	var n = typeof e;
	return t ??= MAX_SAFE_INTEGER3, !!t && (n == "number" || n != "symbol" && reIsUint2.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
__name(isIndex2, "isIndex");
var isIndex_default2 = isIndex2, MAX_SAFE_INTEGER4 = 9007199254740991;
function isLength2(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER4;
}
__name(isLength2, "isLength");
var isLength_default2 = isLength2, argsTag6 = "[object Arguments]", arrayTag4 = "[object Array]", boolTag6 = "[object Boolean]", dateTag6 = "[object Date]", errorTag5 = "[object Error]", funcTag5 = "[object Function]", mapTag9 = "[object Map]", numberTag6 = "[object Number]", objectTag5 = "[object Object]", regexpTag7 = "[object RegExp]", setTag9 = "[object Set]", stringTag7 = "[object String]", weakMapTag4 = "[object WeakMap]", arrayBufferTag6 = "[object ArrayBuffer]", dataViewTag7 = "[object DataView]", float32Tag4 = "[object Float32Array]", float64Tag4 = "[object Float64Array]", int8Tag4 = "[object Int8Array]", int16Tag4 = "[object Int16Array]", int32Tag4 = "[object Int32Array]", uint8Tag4 = "[object Uint8Array]", uint8ClampedTag4 = "[object Uint8ClampedArray]", uint16Tag4 = "[object Uint16Array]", uint32Tag4 = "[object Uint32Array]", typedArrayTags2 = {};
typedArrayTags2[float32Tag4] = typedArrayTags2[float64Tag4] = typedArrayTags2[int8Tag4] = typedArrayTags2[int16Tag4] = typedArrayTags2[int32Tag4] = typedArrayTags2[uint8Tag4] = typedArrayTags2[uint8ClampedTag4] = typedArrayTags2[uint16Tag4] = typedArrayTags2[uint32Tag4] = !0, typedArrayTags2[argsTag6] = typedArrayTags2[arrayTag4] = typedArrayTags2[arrayBufferTag6] = typedArrayTags2[boolTag6] = typedArrayTags2[dataViewTag7] = typedArrayTags2[dateTag6] = typedArrayTags2[errorTag5] = typedArrayTags2[funcTag5] = typedArrayTags2[mapTag9] = typedArrayTags2[numberTag6] = typedArrayTags2[objectTag5] = typedArrayTags2[regexpTag7] = typedArrayTags2[setTag9] = typedArrayTags2[stringTag7] = typedArrayTags2[weakMapTag4] = !1;
function baseIsTypedArray2(e) {
	return isObjectLike_default2(e) && isLength_default2(e.length) && !!typedArrayTags2[baseGetTag_default2(e)];
}
__name(baseIsTypedArray2, "baseIsTypedArray");
var baseIsTypedArray_default2 = baseIsTypedArray2;
function baseUnary2(e) {
	return function(t) {
		return e(t);
	};
}
__name(baseUnary2, "baseUnary");
var baseUnary_default2 = baseUnary2, freeExports5 = typeof exports == "object" && exports && !exports.nodeType && exports, freeModule5 = freeExports5 && typeof module == "object" && module && !module.nodeType && module, freeProcess2 = freeModule5 && freeModule5.exports === freeExports5 && freeGlobal_default2.process, nodeUtil_default2 = (function() {
	try {
		return freeModule5 && freeModule5.require && freeModule5.require("util").types || freeProcess2 && freeProcess2.binding && freeProcess2.binding("util");
	} catch {}
})(), nodeIsTypedArray2 = nodeUtil_default2 && nodeUtil_default2.isTypedArray, isTypedArray_default2 = nodeIsTypedArray2 ? baseUnary_default2(nodeIsTypedArray2) : baseIsTypedArray_default2, hasOwnProperty23 = Object.prototype.hasOwnProperty;
function arrayLikeKeys2(e, t) {
	var n = isArray_default2(e), r = !n && isArguments_default2(e), i = !n && !r && isBuffer_default2(e), a = !n && !r && !i && isTypedArray_default2(e), o = n || r || i || a, s = o ? baseTimes_default2(e.length, String) : [], c = s.length;
	for (var l in e) (t || hasOwnProperty23.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || isIndex_default2(l, c))) && s.push(l);
	return s;
}
__name(arrayLikeKeys2, "arrayLikeKeys");
var arrayLikeKeys_default2 = arrayLikeKeys2, objectProto29 = Object.prototype;
function isPrototype2(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || objectProto29);
}
__name(isPrototype2, "isPrototype");
var isPrototype_default2 = isPrototype2;
function overArg2(e, t) {
	return function(n) {
		return e(t(n));
	};
}
__name(overArg2, "overArg");
var nativeKeys_default2 = overArg2(Object.keys, Object), hasOwnProperty24 = Object.prototype.hasOwnProperty;
function baseKeys2(e) {
	if (!isPrototype_default2(e)) return nativeKeys_default2(e);
	var t = [];
	for (var n in Object(e)) hasOwnProperty24.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
__name(baseKeys2, "baseKeys");
var baseKeys_default2 = baseKeys2;
function isArrayLike2(e) {
	return e != null && isLength_default2(e.length) && !isFunction_default2(e);
}
__name(isArrayLike2, "isArrayLike");
var isArrayLike_default2 = isArrayLike2;
function keys2(e) {
	return isArrayLike_default2(e) ? arrayLikeKeys_default2(e) : baseKeys_default2(e);
}
__name(keys2, "keys");
var keys_default2 = keys2;
function getAllKeys2(e) {
	return baseGetAllKeys_default2(e, keys_default2, getSymbols_default2);
}
__name(getAllKeys2, "getAllKeys");
var getAllKeys_default2 = getAllKeys2, COMPARE_PARTIAL_FLAG9 = 1, hasOwnProperty25 = Object.prototype.hasOwnProperty;
function equalObjects2(e, t, n, r, i, a) {
	var o = n & COMPARE_PARTIAL_FLAG9, s = getAllKeys_default2(e), c = s.length;
	if (c != getAllKeys_default2(t).length && !o) return !1;
	for (var l = c; l--;) {
		var u = s[l];
		if (!(o ? u in t : hasOwnProperty25.call(t, u))) return !1;
	}
	var d = a.get(e), f = a.get(t);
	if (d && f) return d == t && f == e;
	var p = !0;
	a.set(e, t), a.set(t, e);
	for (var m = o; ++l < c;) {
		u = s[l];
		var h = e[u], g = t[u];
		if (r) var _ = o ? r(g, h, u, t, e, a) : r(h, g, u, e, t, a);
		if (!(_ === void 0 ? h === g || i(h, g, n, r, a) : _)) {
			p = !1;
			break;
		}
		m ||= u == "constructor";
	}
	if (p && !m) {
		var v = e.constructor, y = t.constructor;
		v != y && "constructor" in e && "constructor" in t && !(typeof v == "function" && v instanceof v && typeof y == "function" && y instanceof y) && (p = !1);
	}
	return a.delete(e), a.delete(t), p;
}
__name(equalObjects2, "equalObjects");
var equalObjects_default2 = equalObjects2, DataView_default2 = getNative_default2(root_default2, "DataView"), Promise_default2 = getNative_default2(root_default2, "Promise"), Set_default2 = getNative_default2(root_default2, "Set"), WeakMap_default2 = getNative_default2(root_default2, "WeakMap"), mapTag10 = "[object Map]", objectTag6 = "[object Object]", promiseTag2 = "[object Promise]", setTag10 = "[object Set]", weakMapTag5 = "[object WeakMap]", dataViewTag8 = "[object DataView]", dataViewCtorString2 = toSource_default2(DataView_default2), mapCtorString2 = toSource_default2(Map_default2), promiseCtorString2 = toSource_default2(Promise_default2), setCtorString2 = toSource_default2(Set_default2), weakMapCtorString2 = toSource_default2(WeakMap_default2), getTag2 = baseGetTag_default2;
(DataView_default2 && getTag2(new DataView_default2(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag8 || Map_default2 && getTag2(new Map_default2()) != mapTag10 || Promise_default2 && getTag2(Promise_default2.resolve()) != promiseTag2 || Set_default2 && getTag2(new Set_default2()) != setTag10 || WeakMap_default2 && getTag2(new WeakMap_default2()) != weakMapTag5) && (getTag2 = /* @__PURE__ */ __name(function(e) {
	var t = baseGetTag_default2(e), n = t == objectTag6 ? e.constructor : void 0, r = n ? toSource_default2(n) : "";
	if (r) switch (r) {
		case dataViewCtorString2: return dataViewTag8;
		case mapCtorString2: return mapTag10;
		case promiseCtorString2: return promiseTag2;
		case setCtorString2: return setTag10;
		case weakMapCtorString2: return weakMapTag5;
	}
	return t;
}, "getTag"));
var getTag_default2 = getTag2, COMPARE_PARTIAL_FLAG10 = 1, argsTag7 = "[object Arguments]", arrayTag5 = "[object Array]", objectTag7 = "[object Object]", hasOwnProperty26 = Object.prototype.hasOwnProperty;
function baseIsEqualDeep2(e, t, n, r, i, a) {
	var o = isArray_default2(e), s = isArray_default2(t), c = o ? arrayTag5 : getTag_default2(e), l = s ? arrayTag5 : getTag_default2(t);
	c = c == argsTag7 ? objectTag7 : c, l = l == argsTag7 ? objectTag7 : l;
	var u = c == objectTag7, d = l == objectTag7, f = c == l;
	if (f && isBuffer_default2(e)) {
		if (!isBuffer_default2(t)) return !1;
		o = !0, u = !1;
	}
	if (f && !u) return a ||= new Stack_default2(), o || isTypedArray_default2(e) ? equalArrays_default2(e, t, n, r, i, a) : equalByTag_default2(e, t, c, n, r, i, a);
	if (!(n & COMPARE_PARTIAL_FLAG10)) {
		var p = u && hasOwnProperty26.call(e, "__wrapped__"), m = d && hasOwnProperty26.call(t, "__wrapped__");
		if (p || m) {
			var h = p ? e.value() : e, g = m ? t.value() : t;
			return a ||= new Stack_default2(), i(h, g, n, r, a);
		}
	}
	return f ? (a ||= new Stack_default2(), equalObjects_default2(e, t, n, r, i, a)) : !1;
}
__name(baseIsEqualDeep2, "baseIsEqualDeep");
var baseIsEqualDeep_default2 = baseIsEqualDeep2;
function baseIsEqual2(e, t, n, r, i) {
	return e === t ? !0 : e == null || t == null || !isObjectLike_default2(e) && !isObjectLike_default2(t) ? e !== e && t !== t : baseIsEqualDeep_default2(e, t, n, r, baseIsEqual2, i);
}
__name(baseIsEqual2, "baseIsEqual");
var baseIsEqual_default2 = baseIsEqual2, COMPARE_PARTIAL_FLAG11 = 1, COMPARE_UNORDERED_FLAG7 = 2;
function baseIsMatch2(e, t, n, r) {
	var i = n.length, a = i, o = !r;
	if (e == null) return !a;
	for (e = Object(e); i--;) {
		var s = n[i];
		if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
	}
	for (; ++i < a;) {
		s = n[i];
		var c = s[0], l = e[c], u = s[1];
		if (o && s[2]) {
			if (l === void 0 && !(c in e)) return !1;
		} else {
			var d = new Stack_default2();
			if (r) var f = r(l, u, c, e, t, d);
			if (!(f === void 0 ? baseIsEqual_default2(u, l, COMPARE_PARTIAL_FLAG11 | COMPARE_UNORDERED_FLAG7, r, d) : f)) return !1;
		}
	}
	return !0;
}
__name(baseIsMatch2, "baseIsMatch");
var baseIsMatch_default2 = baseIsMatch2;
function isStrictComparable2(e) {
	return e === e && !isObject_default2(e);
}
__name(isStrictComparable2, "isStrictComparable");
var isStrictComparable_default2 = isStrictComparable2;
function getMatchData2(e) {
	for (var t = keys_default2(e), n = t.length; n--;) {
		var r = t[n], i = e[r];
		t[n] = [
			r,
			i,
			isStrictComparable_default2(i)
		];
	}
	return t;
}
__name(getMatchData2, "getMatchData");
var getMatchData_default2 = getMatchData2;
function matchesStrictComparable2(e, t) {
	return function(n) {
		return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
	};
}
__name(matchesStrictComparable2, "matchesStrictComparable");
var matchesStrictComparable_default2 = matchesStrictComparable2;
function baseMatches2(e) {
	var t = getMatchData_default2(e);
	return t.length == 1 && t[0][2] ? matchesStrictComparable_default2(t[0][0], t[0][1]) : function(n) {
		return n === e || baseIsMatch_default2(n, e, t);
	};
}
__name(baseMatches2, "baseMatches");
var baseMatches_default2 = baseMatches2, symbolTag6 = "[object Symbol]";
function isSymbol2(e) {
	return typeof e == "symbol" || isObjectLike_default2(e) && baseGetTag_default2(e) == symbolTag6;
}
__name(isSymbol2, "isSymbol");
var isSymbol_default2 = isSymbol2, reIsDeepProp2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp2 = /^\w*$/;
function isKey2(e, t) {
	if (isArray_default2(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || isSymbol_default2(e) ? !0 : reIsPlainProp2.test(e) || !reIsDeepProp2.test(e) || t != null && e in Object(t);
}
__name(isKey2, "isKey");
var isKey_default2 = isKey2, FUNC_ERROR_TEXT3 = "Expected a function";
function memoize2(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(FUNC_ERROR_TEXT3);
	var n = /* @__PURE__ */ __name(function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	}, "memoized");
	return n.cache = new (memoize2.Cache || MapCache_default2)(), n;
}
__name(memoize2, "memoize"), memoize2.Cache = MapCache_default2;
var memoize_default2 = memoize2, MAX_MEMOIZE_SIZE2 = 500;
function memoizeCapped2(e) {
	var t = memoize_default2(e, function(e) {
		return n.size === MAX_MEMOIZE_SIZE2 && n.clear(), e;
	}), n = t.cache;
	return t;
}
__name(memoizeCapped2, "memoizeCapped");
var memoizeCapped_default2 = memoizeCapped2, rePropName2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reEscapeChar2 = /\\(\\)?/g, stringToPath_default2 = memoizeCapped_default2(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(rePropName2, function(e, n, r, i) {
		t.push(r ? i.replace(reEscapeChar2, "$1") : n || e);
	}), t;
}), INFINITY5 = Infinity, symbolProto5 = Symbol_default2 ? Symbol_default2.prototype : void 0, symbolToString2 = symbolProto5 ? symbolProto5.toString : void 0;
function baseToString2(e) {
	if (typeof e == "string") return e;
	if (isArray_default2(e)) return arrayMap_default2(e, baseToString2) + "";
	if (isSymbol_default2(e)) return symbolToString2 ? symbolToString2.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -INFINITY5 ? "-0" : t;
}
__name(baseToString2, "baseToString");
var baseToString_default2 = baseToString2;
function toString3(e) {
	return e == null ? "" : baseToString_default2(e);
}
__name(toString3, "toString");
var toString_default2 = toString3;
function castPath2(e, t) {
	return isArray_default2(e) ? e : isKey_default2(e, t) ? [e] : stringToPath_default2(toString_default2(e));
}
__name(castPath2, "castPath");
var castPath_default2 = castPath2, INFINITY6 = Infinity;
function toKey2(e) {
	if (typeof e == "string" || isSymbol_default2(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -INFINITY6 ? "-0" : t;
}
__name(toKey2, "toKey");
var toKey_default2 = toKey2;
function baseGet2(e, t) {
	t = castPath_default2(t, e);
	for (var n = 0, r = t.length; e != null && n < r;) e = e[toKey_default2(t[n++])];
	return n && n == r ? e : void 0;
}
__name(baseGet2, "baseGet");
var baseGet_default2 = baseGet2;
function get2(e, t, n) {
	var r = e == null ? void 0 : baseGet_default2(e, t);
	return r === void 0 ? n : r;
}
__name(get2, "get");
var get_default2 = get2;
function baseHasIn2(e, t) {
	return e != null && t in Object(e);
}
__name(baseHasIn2, "baseHasIn");
var baseHasIn_default2 = baseHasIn2;
function hasPath2(e, t, n) {
	t = castPath_default2(t, e);
	for (var r = -1, i = t.length, a = !1; ++r < i;) {
		var o = toKey_default2(t[r]);
		if (!(a = e != null && n(e, o))) break;
		e = e[o];
	}
	return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && isLength_default2(i) && isIndex_default2(o, i) && (isArray_default2(e) || isArguments_default2(e)));
}
__name(hasPath2, "hasPath");
var hasPath_default2 = hasPath2;
function hasIn2(e, t) {
	return e != null && hasPath_default2(e, t, baseHasIn_default2);
}
__name(hasIn2, "hasIn");
var hasIn_default2 = hasIn2, COMPARE_PARTIAL_FLAG12 = 1, COMPARE_UNORDERED_FLAG8 = 2;
function baseMatchesProperty2(e, t) {
	return isKey_default2(e) && isStrictComparable_default2(t) ? matchesStrictComparable_default2(toKey_default2(e), t) : function(n) {
		var r = get_default2(n, e);
		return r === void 0 && r === t ? hasIn_default2(n, e) : baseIsEqual_default2(t, r, COMPARE_PARTIAL_FLAG12 | COMPARE_UNORDERED_FLAG8);
	};
}
__name(baseMatchesProperty2, "baseMatchesProperty");
var baseMatchesProperty_default2 = baseMatchesProperty2;
function identity2(e) {
	return e;
}
__name(identity2, "identity");
var identity_default2 = identity2;
function baseProperty2(e) {
	return function(t) {
		return t?.[e];
	};
}
__name(baseProperty2, "baseProperty");
var baseProperty_default2 = baseProperty2;
function basePropertyDeep2(e) {
	return function(t) {
		return baseGet_default2(t, e);
	};
}
__name(basePropertyDeep2, "basePropertyDeep");
var basePropertyDeep_default2 = basePropertyDeep2;
function property2(e) {
	return isKey_default2(e) ? baseProperty_default2(toKey_default2(e)) : basePropertyDeep_default2(e);
}
__name(property2, "property");
var property_default2 = property2;
function baseIteratee2(e) {
	return typeof e == "function" ? e : e == null ? identity_default2 : typeof e == "object" ? isArray_default2(e) ? baseMatchesProperty_default2(e[0], e[1]) : baseMatches_default2(e) : property_default2(e);
}
__name(baseIteratee2, "baseIteratee");
var baseIteratee_default2 = baseIteratee2;
function createBaseFor2(e) {
	return function(t, n, r) {
		for (var i = -1, a = Object(t), o = r(t), s = o.length; s--;) {
			var c = o[e ? s : ++i];
			if (n(a[c], c, a) === !1) break;
		}
		return t;
	};
}
__name(createBaseFor2, "createBaseFor");
var baseFor_default2 = createBaseFor2();
function baseForOwn2(e, t) {
	return e && baseFor_default2(e, t, keys_default2);
}
__name(baseForOwn2, "baseForOwn");
var baseForOwn_default2 = baseForOwn2;
function createBaseEach2(e, t) {
	return function(n, r) {
		if (n == null) return n;
		if (!isArrayLike_default2(n)) return e(n, r);
		for (var i = n.length, a = t ? i : -1, o = Object(n); (t ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
		return n;
	};
}
__name(createBaseEach2, "createBaseEach");
var baseEach_default2 = createBaseEach2(baseForOwn_default2);
function baseMap2(e, t) {
	var n = -1, r = isArrayLike_default2(e) ? Array(e.length) : [];
	return baseEach_default2(e, function(e, i, a) {
		r[++n] = t(e, i, a);
	}), r;
}
__name(baseMap2, "baseMap");
var baseMap_default2 = baseMap2;
function map2(e, t) {
	return (isArray_default2(e) ? arrayMap_default2 : baseMap_default2)(e, baseIteratee_default2(t, 3));
}
__name(map2, "map");
var map_default2 = map2;
function baseFilter2(e, t) {
	var n = [];
	return baseEach_default2(e, function(e, r, i) {
		t(e, r, i) && n.push(e);
	}), n;
}
__name(baseFilter2, "baseFilter");
var baseFilter_default2 = baseFilter2;
function filter2(e, t) {
	return (isArray_default2(e) ? arrayFilter_default2 : baseFilter_default2)(e, baseIteratee_default2(t, 3));
}
__name(filter2, "filter");
var filter_default2 = filter2;
function buildATNKey(e, t, n) {
	return `${e.name}_${t}_${n}`;
}
__name(buildATNKey, "buildATNKey");
var ATN_BASIC = 1, ATN_RULE_START = 2, ATN_PLUS_BLOCK_START = 4, ATN_STAR_BLOCK_START = 5, ATN_RULE_STOP = 7, ATN_BLOCK_END = 8, ATN_STAR_LOOP_BACK = 9, ATN_STAR_LOOP_ENTRY = 10, ATN_PLUS_LOOP_BACK = 11, ATN_LOOP_END = 12, AbstractTransition = class {
	static #e = __name(this, "AbstractTransition");
	constructor(e) {
		this.target = e;
	}
	isEpsilon() {
		return !1;
	}
}, AtomTransition = class extends AbstractTransition {
	static #e = __name(this, "AtomTransition");
	constructor(e, t) {
		super(e), this.tokenType = t;
	}
}, EpsilonTransition = class extends AbstractTransition {
	static #e = __name(this, "EpsilonTransition");
	constructor(e) {
		super(e);
	}
	isEpsilon() {
		return !0;
	}
}, RuleTransition = class extends AbstractTransition {
	static #e = __name(this, "RuleTransition");
	constructor(e, t, n) {
		super(e), this.rule = t, this.followState = n;
	}
	isEpsilon() {
		return !0;
	}
};
function createATN(e) {
	let t = {
		decisionMap: {},
		decisionStates: [],
		ruleToStartState: /* @__PURE__ */ new Map(),
		ruleToStopState: /* @__PURE__ */ new Map(),
		states: []
	};
	createRuleStartAndStopATNStates(t, e);
	let n = e.length;
	for (let r = 0; r < n; r++) {
		let n = e[r], i = block(t, n, n);
		i !== void 0 && buildRuleHandle(t, n, i);
	}
	return t;
}
__name(createATN, "createATN");
function createRuleStartAndStopATNStates(e, t) {
	let n = t.length;
	for (let r = 0; r < n; r++) {
		let n = t[r], i = newState(e, n, void 0, { type: ATN_RULE_START }), a = newState(e, n, void 0, { type: ATN_RULE_STOP });
		i.stop = a, e.ruleToStartState.set(n, i), e.ruleToStopState.set(n, a);
	}
}
__name(createRuleStartAndStopATNStates, "createRuleStartAndStopATNStates");
function atom(e, t, n) {
	return n instanceof Terminal ? tokenRef(e, t, n.terminalType, n) : n instanceof NonTerminal ? ruleRef(e, t, n) : n instanceof Alternation ? alternation(e, t, n) : n instanceof Option ? option(e, t, n) : n instanceof Repetition ? repetition(e, t, n) : n instanceof RepetitionWithSeparator ? repetitionSep(e, t, n) : n instanceof RepetitionMandatory ? repetitionMandatory(e, t, n) : n instanceof RepetitionMandatoryWithSeparator ? repetitionMandatorySep(e, t, n) : block(e, t, n);
}
__name(atom, "atom");
function repetition(e, t, n) {
	let r = newState(e, t, n, { type: ATN_STAR_BLOCK_START });
	return defineDecisionState(e, r), star(e, t, n, makeAlts(e, t, r, n, block(e, t, n)));
}
__name(repetition, "repetition");
function repetitionSep(e, t, n) {
	let r = newState(e, t, n, { type: ATN_STAR_BLOCK_START });
	return defineDecisionState(e, r), star(e, t, n, makeAlts(e, t, r, n, block(e, t, n)), tokenRef(e, t, n.separator, n));
}
__name(repetitionSep, "repetitionSep");
function repetitionMandatory(e, t, n) {
	let r = newState(e, t, n, { type: ATN_PLUS_BLOCK_START });
	return defineDecisionState(e, r), plus(e, t, n, makeAlts(e, t, r, n, block(e, t, n)));
}
__name(repetitionMandatory, "repetitionMandatory");
function repetitionMandatorySep(e, t, n) {
	let r = newState(e, t, n, { type: ATN_PLUS_BLOCK_START });
	return defineDecisionState(e, r), plus(e, t, n, makeAlts(e, t, r, n, block(e, t, n)), tokenRef(e, t, n.separator, n));
}
__name(repetitionMandatorySep, "repetitionMandatorySep");
function alternation(e, t, n) {
	let r = newState(e, t, n, { type: ATN_BASIC });
	return defineDecisionState(e, r), makeAlts(e, t, r, n, ...map_default2(n.definition, (n) => atom(e, t, n)));
}
__name(alternation, "alternation");
function option(e, t, n) {
	let r = newState(e, t, n, { type: ATN_BASIC });
	return defineDecisionState(e, r), optional(e, t, n, makeAlts(e, t, r, n, block(e, t, n)));
}
__name(option, "option");
function block(e, t, n) {
	let r = filter_default2(map_default2(n.definition, (n) => atom(e, t, n)), (e) => e !== void 0);
	return r.length === 1 ? r[0] : r.length === 0 ? void 0 : makeBlock(e, r);
}
__name(block, "block");
function plus(e, t, n, r, i) {
	let a = r.left, o = r.right, s = newState(e, t, n, { type: ATN_PLUS_LOOP_BACK });
	defineDecisionState(e, s);
	let c = newState(e, t, n, { type: ATN_LOOP_END });
	return a.loopback = s, c.loopback = s, e.decisionMap[buildATNKey(t, i ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", n.idx)] = s, epsilon(o, s), i === void 0 ? (epsilon(s, a), epsilon(s, c)) : (epsilon(s, c), epsilon(s, i.left), epsilon(i.right, a)), {
		left: a,
		right: c
	};
}
__name(plus, "plus");
function star(e, t, n, r, i) {
	let a = r.left, o = r.right, s = newState(e, t, n, { type: ATN_STAR_LOOP_ENTRY });
	defineDecisionState(e, s);
	let c = newState(e, t, n, { type: ATN_LOOP_END }), l = newState(e, t, n, { type: ATN_STAR_LOOP_BACK });
	return s.loopback = l, c.loopback = l, epsilon(s, a), epsilon(s, c), epsilon(o, l), i === void 0 ? epsilon(l, s) : (epsilon(l, c), epsilon(l, i.left), epsilon(i.right, a)), e.decisionMap[buildATNKey(t, i ? "RepetitionWithSeparator" : "Repetition", n.idx)] = s, {
		left: s,
		right: c
	};
}
__name(star, "star");
function optional(e, t, n, r) {
	let i = r.left, a = r.right;
	return epsilon(i, a), e.decisionMap[buildATNKey(t, "Option", n.idx)] = i, r;
}
__name(optional, "optional");
function defineDecisionState(e, t) {
	return e.decisionStates.push(t), t.decision = e.decisionStates.length - 1, t.decision;
}
__name(defineDecisionState, "defineDecisionState");
function makeAlts(e, t, n, r, ...i) {
	let a = newState(e, t, r, {
		type: ATN_BLOCK_END,
		start: n
	});
	n.end = a;
	for (let e of i) e === void 0 ? epsilon(n, a) : (epsilon(n, e.left), epsilon(e.right, a));
	let o = {
		left: n,
		right: a
	};
	return e.decisionMap[buildATNKey(t, getProdType2(r), r.idx)] = n, o;
}
__name(makeAlts, "makeAlts");
function getProdType2(e) {
	if (e instanceof Alternation) return "Alternation";
	if (e instanceof Option) return "Option";
	if (e instanceof Repetition) return "Repetition";
	if (e instanceof RepetitionWithSeparator) return "RepetitionWithSeparator";
	if (e instanceof RepetitionMandatory) return "RepetitionMandatory";
	if (e instanceof RepetitionMandatoryWithSeparator) return "RepetitionMandatoryWithSeparator";
	throw Error("Invalid production type encountered");
}
__name(getProdType2, "getProdType");
function makeBlock(e, t) {
	let n = t.length;
	for (let r = 0; r < n - 1; r++) {
		let n = t[r], i;
		n.left.transitions.length === 1 && (i = n.left.transitions[0]);
		let a = i instanceof RuleTransition, o = i, s = t[r + 1].left;
		n.left.type === ATN_BASIC && n.right.type === ATN_BASIC && i !== void 0 && (a && o.followState === n.right || i.target === n.right) ? (a ? o.followState = s : i.target = s, removeState(e, n.right)) : epsilon(n.right, s);
	}
	let r = t[0], i = t[n - 1];
	return {
		left: r.left,
		right: i.right
	};
}
__name(makeBlock, "makeBlock");
function tokenRef(e, t, n, r) {
	let i = newState(e, t, r, { type: ATN_BASIC }), a = newState(e, t, r, { type: ATN_BASIC });
	return addTransition(i, new AtomTransition(a, n)), {
		left: i,
		right: a
	};
}
__name(tokenRef, "tokenRef");
function ruleRef(e, t, n) {
	let r = n.referencedRule, i = e.ruleToStartState.get(r), a = newState(e, t, n, { type: ATN_BASIC }), o = newState(e, t, n, { type: ATN_BASIC });
	return addTransition(a, new RuleTransition(i, r, o)), {
		left: a,
		right: o
	};
}
__name(ruleRef, "ruleRef");
function buildRuleHandle(e, t, n) {
	let r = e.ruleToStartState.get(t);
	epsilon(r, n.left);
	let i = e.ruleToStopState.get(t);
	return epsilon(n.right, i), {
		left: r,
		right: i
	};
}
__name(buildRuleHandle, "buildRuleHandle");
function epsilon(e, t) {
	addTransition(e, new EpsilonTransition(t));
}
__name(epsilon, "epsilon");
function newState(e, t, n, r) {
	let i = Object.assign({
		atn: e,
		production: n,
		epsilonOnlyTransitions: !1,
		rule: t,
		transitions: [],
		nextTokenWithinRule: [],
		stateNumber: e.states.length
	}, r);
	return e.states.push(i), i;
}
__name(newState, "newState");
function addTransition(e, t) {
	e.transitions.length === 0 && (e.epsilonOnlyTransitions = t.isEpsilon()), e.transitions.push(t);
}
__name(addTransition, "addTransition");
function removeState(e, t) {
	e.states.splice(e.states.indexOf(t), 1);
}
__name(removeState, "removeState");
var DFA_ERROR = {}, ATNConfigSet = class {
	static #e = __name(this, "ATNConfigSet");
	constructor() {
		this.map = {}, this.configs = [];
	}
	get size() {
		return this.configs.length;
	}
	finalize() {
		this.map = {};
	}
	add(e) {
		let t = getATNConfigKey(e);
		t in this.map || (this.map[t] = this.configs.length, this.configs.push(e));
	}
	get elements() {
		return this.configs;
	}
	get alts() {
		return map_default2(this.configs, (e) => e.alt);
	}
	get key() {
		let e = "";
		for (let t in this.map) e += t + ":";
		return e;
	}
};
function getATNConfigKey(e, t = !0) {
	return `${t ? `a${e.alt}` : ""}s${e.state.stateNumber}:${e.stack.map((e) => e.stateNumber.toString()).join("_")}`;
}
__name(getATNConfigKey, "getATNConfigKey");
function baseExtremum(e, t, n) {
	for (var r = -1, i = e.length; ++r < i;) {
		var a = e[r], o = t(a);
		if (o != null && (s === void 0 ? o === o && !isSymbol_default2(o) : n(o, s))) var s = o, c = a;
	}
	return c;
}
__name(baseExtremum, "baseExtremum");
var baseExtremum_default = baseExtremum;
function baseLt(e, t) {
	return e < t;
}
__name(baseLt, "baseLt");
var baseLt_default = baseLt;
function min(e) {
	return e && e.length ? baseExtremum_default(e, identity_default2, baseLt_default) : void 0;
}
__name(min, "min");
var min_default = min, spreadableSymbol2 = Symbol_default2 ? Symbol_default2.isConcatSpreadable : void 0;
function isFlattenable2(e) {
	return isArray_default2(e) || isArguments_default2(e) || !!(spreadableSymbol2 && e && e[spreadableSymbol2]);
}
__name(isFlattenable2, "isFlattenable");
var isFlattenable_default2 = isFlattenable2;
function baseFlatten2(e, t, n, r, i) {
	var a = -1, o = e.length;
	for (n ||= isFlattenable_default2, i ||= []; ++a < o;) {
		var s = e[a];
		t > 0 && n(s) ? t > 1 ? baseFlatten2(s, t - 1, n, r, i) : arrayPush_default2(i, s) : r || (i[i.length] = s);
	}
	return i;
}
__name(baseFlatten2, "baseFlatten");
var baseFlatten_default2 = baseFlatten2;
function flatMap2(e, t) {
	return baseFlatten_default2(map_default2(e, t), 1);
}
__name(flatMap2, "flatMap");
var flatMap_default2 = flatMap2;
function baseFindIndex2(e, t, n, r) {
	for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
	return -1;
}
__name(baseFindIndex2, "baseFindIndex");
var baseFindIndex_default2 = baseFindIndex2;
function baseIsNaN2(e) {
	return e !== e;
}
__name(baseIsNaN2, "baseIsNaN");
var baseIsNaN_default2 = baseIsNaN2;
function strictIndexOf2(e, t, n) {
	for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
	return -1;
}
__name(strictIndexOf2, "strictIndexOf");
var strictIndexOf_default2 = strictIndexOf2;
function baseIndexOf2(e, t, n) {
	return t === t ? strictIndexOf_default2(e, t, n) : baseFindIndex_default2(e, baseIsNaN_default2, n);
}
__name(baseIndexOf2, "baseIndexOf");
var baseIndexOf_default2 = baseIndexOf2;
function arrayIncludes2(e, t) {
	return !!(e != null && e.length) && baseIndexOf_default2(e, t, 0) > -1;
}
__name(arrayIncludes2, "arrayIncludes");
var arrayIncludes_default2 = arrayIncludes2;
function arrayIncludesWith2(e, t, n) {
	for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
	return !1;
}
__name(arrayIncludesWith2, "arrayIncludesWith");
var arrayIncludesWith_default2 = arrayIncludesWith2;
function noop2() {}
__name(noop2, "noop");
var noop_default2 = noop2, createSet_default2 = Set_default2 && 1 / setToArray_default2(new Set_default2([, -0]))[1] == Infinity ? function(e) {
	return new Set_default2(e);
} : noop_default2, LARGE_ARRAY_SIZE5 = 200;
function baseUniq2(e, t, n) {
	var r = -1, i = arrayIncludes_default2, a = e.length, o = !0, s = [], c = s;
	if (n) o = !1, i = arrayIncludesWith_default2;
	else if (a >= LARGE_ARRAY_SIZE5) {
		var l = t ? null : createSet_default2(e);
		if (l) return setToArray_default2(l);
		o = !1, i = cacheHas_default2, c = new SetCache_default2();
	} else c = t ? [] : s;
	outer: for (; ++r < a;) {
		var u = e[r], d = t ? t(u) : u;
		if (u = n || u !== 0 ? u : 0, o && d === d) {
			for (var f = c.length; f--;) if (c[f] === d) continue outer;
			t && c.push(d), s.push(u);
		} else i(c, d, n) || (c !== s && c.push(d), s.push(u));
	}
	return s;
}
__name(baseUniq2, "baseUniq");
var baseUniq_default2 = baseUniq2;
function uniqBy(e, t) {
	return e && e.length ? baseUniq_default2(e, baseIteratee_default2(t, 2)) : [];
}
__name(uniqBy, "uniqBy");
var uniqBy_default = uniqBy;
function flatten2(e) {
	return e != null && e.length ? baseFlatten_default2(e, 1) : [];
}
__name(flatten2, "flatten");
var flatten_default2 = flatten2;
function arrayEach2(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
__name(arrayEach2, "arrayEach");
var arrayEach_default2 = arrayEach2;
function castFunction2(e) {
	return typeof e == "function" ? e : identity_default2;
}
__name(castFunction2, "castFunction");
var castFunction_default2 = castFunction2;
function forEach2(e, t) {
	return (isArray_default2(e) ? arrayEach_default2 : baseEach_default2)(e, castFunction_default2(t));
}
__name(forEach2, "forEach");
var forEach_default2 = forEach2, mapTag11 = "[object Map]", setTag11 = "[object Set]", hasOwnProperty27 = Object.prototype.hasOwnProperty;
function isEmpty2(e) {
	if (e == null) return !0;
	if (isArrayLike_default2(e) && (isArray_default2(e) || typeof e == "string" || typeof e.splice == "function" || isBuffer_default2(e) || isTypedArray_default2(e) || isArguments_default2(e))) return !e.length;
	var t = getTag_default2(e);
	if (t == mapTag11 || t == setTag11) return !e.size;
	if (isPrototype_default2(e)) return !baseKeys_default2(e).length;
	for (var n in e) if (hasOwnProperty27.call(e, n)) return !1;
	return !0;
}
__name(isEmpty2, "isEmpty");
var isEmpty_default2 = isEmpty2;
function arrayReduce2(e, t, n, r) {
	var i = -1, a = e == null ? 0 : e.length;
	for (r && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
	return n;
}
__name(arrayReduce2, "arrayReduce");
var arrayReduce_default2 = arrayReduce2;
function baseReduce2(e, t, n, r, i) {
	return i(e, function(e, i, a) {
		n = r ? (r = !1, e) : t(n, e, i, a);
	}), n;
}
__name(baseReduce2, "baseReduce");
var baseReduce_default2 = baseReduce2;
function reduce2(e, t, n) {
	var r = isArray_default2(e) ? arrayReduce_default2 : baseReduce_default2, i = arguments.length < 3;
	return r(e, baseIteratee_default2(t, 4), n, i, baseEach_default2);
}
__name(reduce2, "reduce");
var reduce_default2 = reduce2;
function createDFACache(e, t) {
	let n = {};
	return (r) => {
		let i = r.toString(), a = n[i];
		return a === void 0 ? (a = {
			atnStartState: e,
			decision: t,
			states: {}
		}, n[i] = a, a) : a;
	};
}
__name(createDFACache, "createDFACache");
var PredicateSet = class {
	static #e = __name(this, "PredicateSet");
	constructor() {
		this.predicates = [];
	}
	is(e) {
		return e >= this.predicates.length || this.predicates[e];
	}
	set(e, t) {
		this.predicates[e] = t;
	}
	toString() {
		let e = "", t = this.predicates.length;
		for (let n = 0; n < t; n++) e += this.predicates[n] === !0 ? "1" : "0";
		return e;
	}
}, EMPTY_PREDICATES = new PredicateSet(), LLStarLookaheadStrategy = class extends LLkLookaheadStrategy {
	static #e = __name(this, "LLStarLookaheadStrategy");
	constructor(e) {
		super(), this.logging = e?.logging ?? ((e) => console.log(e));
	}
	initialize(e) {
		this.atn = createATN(e.rules), this.dfas = initATNSimulator(this.atn);
	}
	validateAmbiguousAlternationAlternatives() {
		return [];
	}
	validateEmptyOrAlternatives() {
		return [];
	}
	buildLookaheadForAlternation(e) {
		let { prodOccurrence: t, rule: n, hasPredicates: r, dynamicTokensEnabled: i } = e, a = this.dfas, o = this.logging, s = buildATNKey(n, "Alternation", t), c = this.atn.decisionMap[s].decision, l = map_default2(getLookaheadPaths({
			maxLookahead: 1,
			occurrence: t,
			prodType: "Alternation",
			rule: n
		}), (e) => map_default2(e, (e) => e[0]));
		if (isLL1Sequence(l, !1) && !i) {
			let e = reduce_default2(l, (e, t, n) => (forEach_default2(t, (t) => {
				t && (e[t.tokenTypeIdx] = n, forEach_default2(t.categoryMatches, (t) => {
					e[t] = n;
				}));
			}), e), {});
			return r ? function(t) {
				let n = e[this.LA(1).tokenTypeIdx];
				if (t !== void 0 && n !== void 0) {
					let e = t[n]?.GATE;
					if (e !== void 0 && e.call(this) === !1) return;
				}
				return n;
			} : function() {
				return e[this.LA(1).tokenTypeIdx];
			};
		} else if (r) return function(e) {
			let t = new PredicateSet(), n = e === void 0 ? 0 : e.length;
			for (let r = 0; r < n; r++) {
				let n = e?.[r].GATE;
				t.set(r, n === void 0 || n.call(this));
			}
			let r = adaptivePredict.call(this, a, c, t, o);
			return typeof r == "number" ? r : void 0;
		};
		else return function() {
			let e = adaptivePredict.call(this, a, c, EMPTY_PREDICATES, o);
			return typeof e == "number" ? e : void 0;
		};
	}
	buildLookaheadForOptional(e) {
		let { prodOccurrence: t, rule: n, prodType: r, dynamicTokensEnabled: i } = e, a = this.dfas, o = this.logging, s = buildATNKey(n, r, t), c = this.atn.decisionMap[s].decision, l = map_default2(getLookaheadPaths({
			maxLookahead: 1,
			occurrence: t,
			prodType: r,
			rule: n
		}), (e) => map_default2(e, (e) => e[0]));
		if (isLL1Sequence(l) && l[0][0] && !i) {
			let e = l[0], t = flatten_default2(e);
			if (t.length === 1 && isEmpty_default2(t[0].categoryMatches)) {
				let e = t[0].tokenTypeIdx;
				return function() {
					return this.LA(1).tokenTypeIdx === e;
				};
			} else {
				let e = reduce_default2(t, (e, t) => (t !== void 0 && (e[t.tokenTypeIdx] = !0, forEach_default2(t.categoryMatches, (t) => {
					e[t] = !0;
				})), e), {});
				return function() {
					return e[this.LA(1).tokenTypeIdx] === !0;
				};
			}
		}
		return function() {
			let e = adaptivePredict.call(this, a, c, EMPTY_PREDICATES, o);
			return typeof e == "object" ? !1 : e === 0;
		};
	}
};
function isLL1Sequence(e, t = !0) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = /* @__PURE__ */ new Set();
		for (let i of r) {
			if (i === void 0) {
				if (t) break;
				return !1;
			}
			let r = [i.tokenTypeIdx].concat(i.categoryMatches);
			for (let t of r) if (n.has(t)) {
				if (!e.has(t)) return !1;
			} else n.add(t), e.add(t);
		}
	}
	return !0;
}
__name(isLL1Sequence, "isLL1Sequence");
function initATNSimulator(e) {
	let t = e.decisionStates.length, n = Array(t);
	for (let r = 0; r < t; r++) n[r] = createDFACache(e.decisionStates[r], r);
	return n;
}
__name(initATNSimulator, "initATNSimulator");
function adaptivePredict(e, t, n, r) {
	let i = e[t](n), a = i.start;
	return a === void 0 && (a = addDFAState(i, newDFAState(computeStartState(i.atnStartState))), i.start = a), performLookahead.apply(this, [
		i,
		a,
		n,
		r
	]);
}
__name(adaptivePredict, "adaptivePredict");
function performLookahead(e, t, n, r) {
	let i = t, a = 1, o = [], s = this.LA(a++);
	for (;;) {
		let t = getExistingTargetState(i, s);
		if (t === void 0 && (t = computeLookaheadTarget.apply(this, [
			e,
			i,
			s,
			a,
			n,
			r
		])), t === DFA_ERROR) return buildAdaptivePredictError(o, i, s);
		if (t.isAcceptState === !0) return t.prediction;
		i = t, o.push(s), s = this.LA(a++);
	}
}
__name(performLookahead, "performLookahead");
function computeLookaheadTarget(e, t, n, r, i, a) {
	let o = computeReachSet(t.configs, n, i);
	if (o.size === 0) return addDFAEdge(e, t, n, DFA_ERROR), DFA_ERROR;
	let s = newDFAState(o), c = getUniqueAlt(o, i);
	if (c !== void 0) s.isAcceptState = !0, s.prediction = c, s.configs.uniqueAlt = c;
	else if (hasConflictTerminatingPrediction(o)) {
		let t = min_default(o.alts);
		s.isAcceptState = !0, s.prediction = t, s.configs.uniqueAlt = t, reportLookaheadAmbiguity.apply(this, [
			e,
			r,
			o.alts,
			a
		]);
	}
	return s = addDFAEdge(e, t, n, s), s;
}
__name(computeLookaheadTarget, "computeLookaheadTarget");
function reportLookaheadAmbiguity(e, t, n, r) {
	let i = [];
	for (let e = 1; e <= t; e++) i.push(this.LA(e).tokenType);
	let a = e.atnStartState, o = a.rule, s = a.production;
	r(buildAmbiguityError({
		topLevelRule: o,
		ambiguityIndices: n,
		production: s,
		prefixPath: i
	}));
}
__name(reportLookaheadAmbiguity, "reportLookaheadAmbiguity");
function buildAmbiguityError(e) {
	let t = map_default2(e.prefixPath, (e) => tokenLabel2(e)).join(", "), n = e.production.idx === 0 ? "" : e.production.idx, r = `Ambiguous Alternatives Detected: <${e.ambiguityIndices.join(", ")}> in <${getProductionDslName2(e.production)}${n}> inside <${e.topLevelRule.name}> Rule,
<${t}> may appears as a prefix path in all these alternatives.
`;
	return r += "See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES\nFor Further details.", r;
}
__name(buildAmbiguityError, "buildAmbiguityError");
function getProductionDslName2(e) {
	if (e instanceof NonTerminal) return "SUBRULE";
	if (e instanceof Option) return "OPTION";
	if (e instanceof Alternation) return "OR";
	if (e instanceof RepetitionMandatory) return "AT_LEAST_ONE";
	if (e instanceof RepetitionMandatoryWithSeparator) return "AT_LEAST_ONE_SEP";
	if (e instanceof RepetitionWithSeparator) return "MANY_SEP";
	if (e instanceof Repetition) return "MANY";
	if (e instanceof Terminal) return "CONSUME";
	throw Error("non exhaustive match");
}
__name(getProductionDslName2, "getProductionDslName");
function buildAdaptivePredictError(e, t, n) {
	return {
		actualToken: n,
		possibleTokenTypes: uniqBy_default(flatMap_default2(t.configs.elements, (e) => e.state.transitions).filter((e) => e instanceof AtomTransition).map((e) => e.tokenType), (e) => e.tokenTypeIdx),
		tokenPath: e
	};
}
__name(buildAdaptivePredictError, "buildAdaptivePredictError");
function getExistingTargetState(e, t) {
	return e.edges[t.tokenTypeIdx];
}
__name(getExistingTargetState, "getExistingTargetState");
function computeReachSet(e, t, n) {
	let r = new ATNConfigSet(), i = [];
	for (let a of e.elements) {
		if (n.is(a.alt) === !1) continue;
		if (a.state.type === ATN_RULE_STOP) {
			i.push(a);
			continue;
		}
		let e = a.state.transitions.length;
		for (let n = 0; n < e; n++) {
			let e = a.state.transitions[n], i = getReachableTarget(e, t);
			i !== void 0 && r.add({
				state: i,
				alt: a.alt,
				stack: a.stack
			});
		}
	}
	let a;
	if (i.length === 0 && r.size === 1 && (a = r), a === void 0) {
		a = new ATNConfigSet();
		for (let e of r.elements) closure(e, a);
	}
	if (i.length > 0 && !hasConfigInRuleStopState(a)) for (let e of i) a.add(e);
	return a;
}
__name(computeReachSet, "computeReachSet");
function getReachableTarget(e, t) {
	if (e instanceof AtomTransition && tokenMatcher(t, e.tokenType)) return e.target;
}
__name(getReachableTarget, "getReachableTarget");
function getUniqueAlt(e, t) {
	let n;
	for (let r of e.elements) if (t.is(r.alt) === !0) {
		if (n === void 0) n = r.alt;
		else if (n !== r.alt) return;
	}
	return n;
}
__name(getUniqueAlt, "getUniqueAlt");
function newDFAState(e) {
	return {
		configs: e,
		edges: {},
		isAcceptState: !1,
		prediction: -1
	};
}
__name(newDFAState, "newDFAState");
function addDFAEdge(e, t, n, r) {
	return r = addDFAState(e, r), t.edges[n.tokenTypeIdx] = r, r;
}
__name(addDFAEdge, "addDFAEdge");
function addDFAState(e, t) {
	if (t === DFA_ERROR) return t;
	let n = t.configs.key, r = e.states[n];
	return r === void 0 ? (t.configs.finalize(), e.states[n] = t, t) : r;
}
__name(addDFAState, "addDFAState");
function computeStartState(e) {
	let t = new ATNConfigSet(), n = e.transitions.length;
	for (let r = 0; r < n; r++) closure({
		state: e.transitions[r].target,
		alt: r,
		stack: []
	}, t);
	return t;
}
__name(computeStartState, "computeStartState");
function closure(e, t) {
	let n = e.state;
	if (n.type === ATN_RULE_STOP) {
		if (e.stack.length > 0) {
			let n = [...e.stack];
			closure({
				state: n.pop(),
				alt: e.alt,
				stack: n
			}, t);
		} else t.add(e);
		return;
	}
	n.epsilonOnlyTransitions || t.add(e);
	let r = n.transitions.length;
	for (let i = 0; i < r; i++) {
		let r = n.transitions[i], a = getEpsilonTarget(e, r);
		a !== void 0 && closure(a, t);
	}
}
__name(closure, "closure");
function getEpsilonTarget(e, t) {
	if (t instanceof EpsilonTransition) return {
		state: t.target,
		alt: e.alt,
		stack: e.stack
	};
	if (t instanceof RuleTransition) {
		let n = [...e.stack, t.followState];
		return {
			state: t.target,
			alt: e.alt,
			stack: n
		};
	}
}
__name(getEpsilonTarget, "getEpsilonTarget");
function hasConfigInRuleStopState(e) {
	for (let t of e.elements) if (t.state.type === ATN_RULE_STOP) return !0;
	return !1;
}
__name(hasConfigInRuleStopState, "hasConfigInRuleStopState");
function allConfigsInRuleStopStates(e) {
	for (let t of e.elements) if (t.state.type !== ATN_RULE_STOP) return !1;
	return !0;
}
__name(allConfigsInRuleStopStates, "allConfigsInRuleStopStates");
function hasConflictTerminatingPrediction(e) {
	if (allConfigsInRuleStopStates(e)) return !0;
	let t = getConflictingAltSets(e.elements);
	return hasConflictingAltSet(t) && !hasStateAssociatedWithOneAlt(t);
}
__name(hasConflictTerminatingPrediction, "hasConflictTerminatingPrediction");
function getConflictingAltSets(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = getATNConfigKey(n, !1), r = t.get(e);
		r === void 0 && (r = {}, t.set(e, r)), r[n.alt] = !0;
	}
	return t;
}
__name(getConflictingAltSets, "getConflictingAltSets");
function hasConflictingAltSet(e) {
	for (let t of Array.from(e.values())) if (Object.keys(t).length > 1) return !0;
	return !1;
}
__name(hasConflictingAltSet, "hasConflictingAltSet");
function hasStateAssociatedWithOneAlt(e) {
	for (let t of Array.from(e.values())) if (Object.keys(t).length === 1) return !0;
	return !1;
}
__name(hasStateAssociatedWithOneAlt, "hasStateAssociatedWithOneAlt"), init_main();
var CstNodeBuilder = class {
	static #e = __name(this, "CstNodeBuilder");
	constructor() {
		this.nodeStack = [];
	}
	get current() {
		return this.nodeStack[this.nodeStack.length - 1] ?? this.rootNode;
	}
	buildRootNode(e) {
		return this.rootNode = new RootCstNodeImpl(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
	}
	buildCompositeNode(e) {
		let t = new CompositeCstNodeImpl();
		return t.grammarSource = e, t.root = this.rootNode, this.current.content.push(t), this.nodeStack.push(t), t;
	}
	buildLeafNode(e, t) {
		let n = new LeafCstNodeImpl(e.startOffset, e.image.length, tokenToRange(e), e.tokenType, !t);
		return n.grammarSource = t, n.root = this.rootNode, this.current.content.push(n), n;
	}
	removeNode(e) {
		let t = e.container;
		if (t) {
			let n = t.content.indexOf(e);
			n >= 0 && t.content.splice(n, 1);
		}
	}
	addHiddenNodes(e) {
		let t = [];
		for (let n of e) {
			let e = new LeafCstNodeImpl(n.startOffset, n.image.length, tokenToRange(n), n.tokenType, !0);
			e.root = this.rootNode, t.push(e);
		}
		let n = this.current, r = !1;
		if (n.content.length > 0) {
			n.content.push(...t);
			return;
		}
		for (; n.container;) {
			let e = n.container.content.indexOf(n);
			if (e > 0) {
				n.container.content.splice(e, 0, ...t), r = !0;
				break;
			}
			n = n.container;
		}
		r || this.rootNode.content.unshift(...t);
	}
	construct(e) {
		let t = this.current;
		typeof e.$type == "string" && !e.$infixName && (this.current.astNode = e), e.$cstNode = t;
		let n = this.nodeStack.pop();
		n?.content.length === 0 && this.removeNode(n);
	}
}, AbstractCstNode = class {
	static #e = __name(this, "AbstractCstNode");
	get hidden() {
		return !1;
	}
	get astNode() {
		let e = typeof this._astNode?.$type == "string" ? this._astNode : this.container?.astNode;
		if (!e) throw Error("This node has no associated AST element");
		return e;
	}
	set astNode(e) {
		this._astNode = e;
	}
	get text() {
		return this.root.fullText.substring(this.offset, this.end);
	}
}, LeafCstNodeImpl = class extends AbstractCstNode {
	static #e = __name(this, "LeafCstNodeImpl");
	get offset() {
		return this._offset;
	}
	get length() {
		return this._length;
	}
	get end() {
		return this._offset + this._length;
	}
	get hidden() {
		return this._hidden;
	}
	get tokenType() {
		return this._tokenType;
	}
	get range() {
		return this._range;
	}
	constructor(e, t, n, r, i = !1) {
		super(), this._hidden = i, this._offset = e, this._tokenType = r, this._length = t, this._range = n;
	}
}, CompositeCstNodeImpl = class extends AbstractCstNode {
	static #e = __name(this, "CompositeCstNodeImpl");
	constructor() {
		super(...arguments), this.content = new CstNodeContainer(this);
	}
	get offset() {
		return this.firstNonHiddenNode?.offset ?? 0;
	}
	get length() {
		return this.end - this.offset;
	}
	get end() {
		return this.lastNonHiddenNode?.end ?? 0;
	}
	get range() {
		let e = this.firstNonHiddenNode, t = this.lastNonHiddenNode;
		if (e && t) {
			if (this._rangeCache === void 0) {
				let { range: n } = e, { range: r } = t;
				this._rangeCache = {
					start: n.start,
					end: r.end.line < n.start.line ? n.start : r.end
				};
			}
			return this._rangeCache;
		} else return {
			start: Position.create(0, 0),
			end: Position.create(0, 0)
		};
	}
	get firstNonHiddenNode() {
		for (let e of this.content) if (!e.hidden) return e;
		return this.content[0];
	}
	get lastNonHiddenNode() {
		for (let e = this.content.length - 1; e >= 0; e--) {
			let t = this.content[e];
			if (!t.hidden) return t;
		}
		return this.content[this.content.length - 1];
	}
}, CstNodeContainer = class e extends Array {
	static #e = __name(this, "CstNodeContainer");
	constructor(t) {
		super(), this.parent = t, Object.setPrototypeOf(this, e.prototype);
	}
	push(...e) {
		return this.addParents(e), super.push(...e);
	}
	unshift(...e) {
		return this.addParents(e), super.unshift(...e);
	}
	splice(e, t, ...n) {
		return this.addParents(n), super.splice(e, t, ...n);
	}
	addParents(e) {
		for (let t of e) t.container = this.parent;
	}
}, RootCstNodeImpl = class extends CompositeCstNodeImpl {
	static #e = __name(this, "RootCstNodeImpl");
	get text() {
		return this._text.substring(this.offset, this.end);
	}
	get fullText() {
		return this._text;
	}
	constructor(e) {
		super(), this._text = "", this._text = e ?? "";
	}
}, DatatypeSymbol = Symbol("Datatype");
function isDataTypeNode(e) {
	return e.$type === DatatypeSymbol;
}
__name(isDataTypeNode, "isDataTypeNode");
var ruleSuffix = "​", withRuleSuffix = /* @__PURE__ */ __name((e) => e.endsWith(ruleSuffix) ? e : e + ruleSuffix, "withRuleSuffix"), AbstractLangiumParser = class {
	static #e = __name(this, "AbstractLangiumParser");
	constructor(e) {
		this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
		let t = this.lexer.definition, n = e.LanguageMetaData.mode === "production";
		e.shared.profilers.LangiumProfiler?.isActive("parsing") ? this.wrapper = new ProfilerWrapper(t, {
			...e.parser.ParserConfig,
			skipValidations: n,
			errorMessageProvider: e.parser.ParserErrorMessageProvider
		}, e.shared.profilers.LangiumProfiler.createTask("parsing", e.LanguageMetaData.languageId)) : this.wrapper = new ChevrotainWrapper(t, {
			...e.parser.ParserConfig,
			skipValidations: n,
			errorMessageProvider: e.parser.ParserErrorMessageProvider
		});
	}
	alternatives(e, t) {
		this.wrapper.wrapOr(e, t);
	}
	optional(e, t) {
		this.wrapper.wrapOption(e, t);
	}
	many(e, t) {
		this.wrapper.wrapMany(e, t);
	}
	atLeastOne(e, t) {
		this.wrapper.wrapAtLeastOne(e, t);
	}
	getRule(e) {
		return this.allRules.get(e);
	}
	isRecording() {
		return this.wrapper.IS_RECORDING;
	}
	get unorderedGroups() {
		return this._unorderedGroups;
	}
	getRuleStack() {
		return this.wrapper.RULE_STACK;
	}
	finalize() {
		this.wrapper.wrapSelfAnalysis();
	}
}, LangiumParser = class extends AbstractLangiumParser {
	static #e = __name(this, "LangiumParser");
	get current() {
		return this.stack[this.stack.length - 1];
	}
	constructor(e) {
		super(e), this.nodeBuilder = new CstNodeBuilder(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.operatorPrecedence = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
	}
	rule(e, t) {
		let n = this.computeRuleType(e), r;
		isInfixRule(e) && (r = e.name, this.registerPrecedenceMap(e));
		let i = this.wrapper.DEFINE_RULE(withRuleSuffix(e.name), this.startImplementation(n, r, t).bind(this));
		return this.allRules.set(e.name, i), isParserRule(e) && e.entry && (this.mainRule = i), i;
	}
	registerPrecedenceMap(e) {
		let t = e.name, n = /* @__PURE__ */ new Map();
		for (let t = 0; t < e.operators.precedences.length; t++) {
			let r = e.operators.precedences[t];
			for (let e of r.operators) n.set(e.value, {
				precedence: t,
				rightAssoc: r.associativity === "right"
			});
		}
		this.operatorPrecedence.set(t, n);
	}
	computeRuleType(e) {
		return isInfixRule(e) ? getTypeName(e) : e.fragment ? void 0 : isDataTypeRule(e) ? DatatypeSymbol : getTypeName(e);
	}
	parse(e, t = {}) {
		this.nodeBuilder.buildRootNode(e);
		let n = this.lexerResult = this.lexer.tokenize(e);
		this.wrapper.input = n.tokens;
		let r = t.rule ? this.allRules.get(t.rule) : this.mainRule;
		if (!r) throw Error(t.rule ? `No rule found with name '${t.rule}'` : "No main rule available.");
		let i = this.doParse(r);
		return this.nodeBuilder.addHiddenNodes(n.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, linkContentToContainer(i, { deep: !0 }), {
			value: i,
			lexerErrors: n.errors,
			lexerReport: n.report,
			parserErrors: this.wrapper.errors
		};
	}
	doParse(e) {
		let t = this.wrapper.rule(e);
		if (this.stack.length > 0 && (t = this.construct()), t === void 0) throw Error("No result from parser");
		if (this.stack.length > 0) throw Error("Parser stack is not empty after parsing");
		return t;
	}
	startImplementation(e, t, n) {
		return (r) => {
			let i = !this.isRecording() && e !== void 0;
			if (i) {
				let n = { $type: e };
				this.stack.push(n), e === DatatypeSymbol ? n.value = "" : t !== void 0 && (n.$infixName = t);
			}
			return n(r), i ? this.construct() : void 0;
		};
	}
	extractHiddenTokens(e) {
		let t = this.lexerResult.hidden;
		if (!t.length) return [];
		let n = e.startOffset;
		for (let e = 0; e < t.length; e++) if (t[e].startOffset > n) return t.splice(0, e);
		return t.splice(0, t.length);
	}
	consume(e, t, n) {
		let r = this.wrapper.wrapConsume(e, t);
		if (!this.isRecording() && this.isValidToken(r)) {
			let e = this.extractHiddenTokens(r);
			this.nodeBuilder.addHiddenNodes(e);
			let t = this.nodeBuilder.buildLeafNode(r, n), { assignment: i, crossRef: a } = this.getAssignment(n), o = this.current;
			if (i) {
				let e = isKeyword(n) ? r.image : this.converter.convert(r.image, t);
				this.assign(i.operator, i.feature, e, t, a);
			} else if (isDataTypeNode(o)) {
				let e = r.image;
				isKeyword(n) || (e = this.converter.convert(e, t).toString()), o.value += e;
			}
		}
	}
	isValidToken(e) {
		return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
	}
	subrule(e, t, n, r, i) {
		let a;
		!this.isRecording() && !n && (a = this.nodeBuilder.buildCompositeNode(r));
		let o;
		try {
			o = this.wrapper.wrapSubrule(e, t, i);
		} finally {
			this.isRecording() || (o === void 0 && !n && (o = this.construct()), o !== void 0 && a && a.length > 0 && this.performSubruleAssignment(o, r, a));
		}
	}
	performSubruleAssignment(e, t, n) {
		let { assignment: r, crossRef: i } = this.getAssignment(t);
		if (r) this.assign(r.operator, r.feature, e, n, i);
		else if (!r) {
			let t = this.current;
			if (isDataTypeNode(t)) t.value += e.toString();
			else if (typeof e == "object" && e) {
				let n = this.assignWithoutOverride(e, t);
				this.stack.pop(), this.stack.push(n);
			}
		}
	}
	action(e, t) {
		if (!this.isRecording()) {
			let n = this.current;
			if (t.feature && t.operator) {
				n = this.construct(), this.nodeBuilder.removeNode(n.$cstNode), this.nodeBuilder.buildCompositeNode(t).content.push(n.$cstNode);
				let r = { $type: e };
				this.stack.push(r), this.assign(t.operator, t.feature, n, n.$cstNode);
			} else n.$type = e;
		}
	}
	construct() {
		if (this.isRecording()) return;
		let e = this.stack.pop();
		return this.nodeBuilder.construct(e), "$infixName" in e ? this.constructInfix(e, this.operatorPrecedence.get(e.$infixName)) : isDataTypeNode(e) ? this.converter.convert(e.value, e.$cstNode) : (assignMandatoryProperties(this.astReflection, e), e);
	}
	constructInfix(e, t) {
		let n = e.parts;
		if (!Array.isArray(n) || n.length === 0) return;
		let r = e.operators;
		if (!Array.isArray(r) || n.length < 2) return n[0];
		let i = 0, a = -1;
		for (let e = 0; e < r.length; e++) {
			let n = r[e], o = t.get(n) ?? {
				precedence: Infinity,
				rightAssoc: !1
			};
			o.precedence > a ? (a = o.precedence, i = e) : o.precedence === a && (o.rightAssoc || (i = e));
		}
		let o = r.slice(0, i), s = r.slice(i + 1), c = n.slice(0, i + 1), l = n.slice(i + 1), u = {
			$infixName: e.$infixName,
			$type: e.$type,
			$cstNode: e.$cstNode,
			parts: c,
			operators: o
		}, d = {
			$infixName: e.$infixName,
			$type: e.$type,
			$cstNode: e.$cstNode,
			parts: l,
			operators: s
		}, f = this.constructInfix(u, t), p = this.constructInfix(d, t);
		return {
			$type: e.$type,
			$cstNode: e.$cstNode,
			left: f,
			operator: r[i],
			right: p
		};
	}
	getAssignment(e) {
		if (!this.assignmentMap.has(e)) {
			let t = getContainerOfType(e, isAssignment);
			this.assignmentMap.set(e, {
				assignment: t,
				crossRef: t && isCrossReference(t.terminal) ? t.terminal.isMulti ? "multi" : "single" : void 0
			});
		}
		return this.assignmentMap.get(e);
	}
	assign(e, t, n, r, i) {
		let a = this.current, o;
		switch (o = i === "single" && typeof n == "string" ? this.linker.buildReference(a, t, r, n) : i === "multi" && typeof n == "string" ? this.linker.buildMultiReference(a, t, r, n) : n, e) {
			case "=":
				a[t] = o;
				break;
			case "?=":
				a[t] = !0;
				break;
			case "+=": Array.isArray(a[t]) || (a[t] = []), a[t].push(o);
		}
	}
	assignWithoutOverride(e, t) {
		for (let [n, r] of Object.entries(t)) {
			let t = e[n];
			t === void 0 ? e[n] = r : Array.isArray(t) && Array.isArray(r) && (r.push(...t), e[n] = r);
		}
		let n = e.$cstNode;
		return n && (n.astNode = void 0, e.$cstNode = void 0), e;
	}
	get definitionErrors() {
		return this.wrapper.definitionErrors;
	}
}, AbstractParserErrorMessageProvider = class {
	static #e = __name(this, "AbstractParserErrorMessageProvider");
	buildMismatchTokenMessage(e) {
		return defaultParserErrorProvider.buildMismatchTokenMessage(e);
	}
	buildNotAllInputParsedMessage(e) {
		return defaultParserErrorProvider.buildNotAllInputParsedMessage(e);
	}
	buildNoViableAltMessage(e) {
		return defaultParserErrorProvider.buildNoViableAltMessage(e);
	}
	buildEarlyExitMessage(e) {
		return defaultParserErrorProvider.buildEarlyExitMessage(e);
	}
}, LangiumParserErrorMessageProvider = class extends AbstractParserErrorMessageProvider {
	static #e = __name(this, "LangiumParserErrorMessageProvider");
	buildMismatchTokenMessage({ expected: e, actual: t }) {
		return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${t.image}\`.`;
	}
	buildNotAllInputParsedMessage({ firstRedundant: e }) {
		return `Expecting end of file but found \`${e.image}\`.`;
	}
}, LangiumCompletionParser = class extends AbstractLangiumParser {
	static #e = __name(this, "LangiumCompletionParser");
	constructor() {
		super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
	}
	action() {}
	construct() {}
	parse(e) {
		return this.resetState(), this.tokens = this.lexer.tokenize(e, { mode: "partial" }).tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
			tokens: this.tokens,
			elementStack: [...this.lastElementStack],
			tokenIndex: this.nextTokenIndex
		};
	}
	rule(e, t) {
		let n = this.wrapper.DEFINE_RULE(withRuleSuffix(e.name), this.startImplementation(t).bind(this));
		return this.allRules.set(e.name, n), e.entry && (this.mainRule = n), n;
	}
	resetState() {
		this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
	}
	startImplementation(e) {
		return (t) => {
			let n = this.keepStackSize();
			try {
				e(t);
			} finally {
				this.resetStackSize(n);
			}
		};
	}
	removeUnexpectedElements() {
		this.elementStack.splice(this.stackSize);
	}
	keepStackSize() {
		let e = this.elementStack.length;
		return this.stackSize = e, e;
	}
	resetStackSize(e) {
		this.removeUnexpectedElements(), this.stackSize = e;
	}
	consume(e, t, n) {
		this.wrapper.wrapConsume(e, t), this.isRecording() || (this.lastElementStack = [...this.elementStack, n], this.nextTokenIndex = this.currIdx + 1);
	}
	subrule(e, t, n, r, i) {
		this.before(r), this.wrapper.wrapSubrule(e, t, i), this.after(r);
	}
	before(e) {
		this.isRecording() || this.elementStack.push(e);
	}
	after(e) {
		if (!this.isRecording()) {
			let t = this.elementStack.lastIndexOf(e);
			t >= 0 && this.elementStack.splice(t);
		}
	}
	get currIdx() {
		return this.wrapper.currIdx;
	}
}, defaultConfig = {
	recoveryEnabled: !0,
	nodeLocationTracking: "full",
	skipValidations: !0,
	errorMessageProvider: new LangiumParserErrorMessageProvider()
}, ChevrotainWrapper = class extends EmbeddedActionsParser {
	static #e = __name(this, "ChevrotainWrapper");
	constructor(e, t) {
		let n = t && "maxLookahead" in t;
		super(e, {
			...defaultConfig,
			lookaheadStrategy: n ? new LLkLookaheadStrategy({ maxLookahead: t.maxLookahead }) : new LLStarLookaheadStrategy({ logging: t.skipValidations ? () => {} : void 0 }),
			...t
		});
	}
	get IS_RECORDING() {
		return this.RECORDING_PHASE;
	}
	DEFINE_RULE(e, t, n) {
		return this.RULE(e, t, n);
	}
	wrapSelfAnalysis() {
		this.performSelfAnalysis();
	}
	wrapConsume(e, t) {
		return this.consume(e, t, void 0);
	}
	wrapSubrule(e, t, n) {
		return this.subrule(e, t, { ARGS: [n] });
	}
	wrapOr(e, t) {
		this.or(e, t);
	}
	wrapOption(e, t) {
		this.option(e, t);
	}
	wrapMany(e, t) {
		this.many(e, t);
	}
	wrapAtLeastOne(e, t) {
		this.atLeastOne(e, t);
	}
	rule(e) {
		return e.call(this, {});
	}
}, ProfilerWrapper = class extends ChevrotainWrapper {
	static #e = __name(this, "ProfilerWrapper");
	constructor(e, t, n) {
		super(e, t), this.task = n;
	}
	rule(e) {
		this.task.start(), this.task.startSubTask(this.ruleName(e));
		try {
			return super.rule(e);
		} finally {
			this.task.stopSubTask(this.ruleName(e)), this.task.stop();
		}
	}
	ruleName(e) {
		return e.ruleName;
	}
	subrule(e, t, n) {
		this.task.startSubTask(this.ruleName(t));
		try {
			return super.subrule(e, t, n);
		} finally {
			this.task.stopSubTask(this.ruleName(t));
		}
	}
};
function createParser(e, t, n) {
	return buildRules({
		parser: t,
		tokens: n,
		ruleNames: /* @__PURE__ */ new Map()
	}, e), t;
}
__name(createParser, "createParser");
function buildRules(e, t) {
	let n = getAllReachableRules(t, !1), r = stream(t.rules).filter(isParserRule).filter((e) => n.has(e));
	for (let t of r) {
		let n = {
			...e,
			consume: 1,
			optional: 1,
			subrule: 1,
			many: 1,
			or: 1
		};
		e.parser.rule(t, buildElement(n, t.definition));
	}
	let i = stream(t.rules).filter(isInfixRule).filter((e) => n.has(e));
	for (let t of i) e.parser.rule(t, buildInfixRule(e, t));
}
__name(buildRules, "buildRules");
function buildInfixRule(e, t) {
	let n = t.call.rule.ref;
	if (!n) throw Error("Could not resolve reference to infix operator rule: " + t.call.rule.$refText);
	if (isTerminalRule(n)) throw Error("Cannot use terminal rule in infix expression");
	let r = t.operators.precedences.flatMap((e) => e.operators), i = {
		$type: "Group",
		elements: []
	}, a = {
		$container: i,
		$type: "Assignment",
		feature: "parts",
		operator: "+=",
		terminal: t.call
	}, s = {
		$container: i,
		$type: "Group",
		elements: [],
		cardinality: "*"
	};
	i.elements.push(a, s);
	let c = {
		$container: s,
		$type: "Assignment",
		feature: "operators",
		operator: "+=",
		terminal: {
			$type: "Alternatives",
			elements: r
		}
	}, l = {
		...a,
		$container: s
	};
	s.elements.push(c, l);
	let u = r.map((t) => e.tokens[t.value]).map((t, n) => ({ ALT: /* @__PURE__ */ __name(() => e.parser.consume(n, t, c), "ALT") })), d;
	return (t) => {
		d ??= getRule(e, n), e.parser.subrule(0, d, !1, a, t), e.parser.many(0, { DEF: /* @__PURE__ */ __name(() => {
			e.parser.alternatives(0, u), e.parser.subrule(1, d, !1, l, t);
		}, "DEF") });
	};
}
__name(buildInfixRule, "buildInfixRule");
function buildElement(e, t, n = !1) {
	let r;
	if (isKeyword(t)) r = buildKeyword(e, t);
	else if (isAction(t)) r = buildAction(e, t);
	else if (isAssignment(t)) r = buildElement(e, t.terminal);
	else if (isCrossReference(t)) r = buildCrossReference(e, t);
	else if (isRuleCall(t)) r = buildRuleCall(e, t);
	else if (isAlternatives(t)) r = buildAlternatives(e, t);
	else if (isUnorderedGroup(t)) r = buildUnorderedGroup(e, t);
	else if (isGroup(t)) r = buildGroup(e, t);
	else if (isEndOfFile(t)) {
		let n = e.consume++;
		r = /* @__PURE__ */ __name(() => e.parser.consume(n, EOF, t), "method");
	} else throw new ErrorWithLocation(t.$cstNode, `Unexpected element type: ${t.$type}`);
	return wrap(e, n ? void 0 : getGuardCondition(t), r, t.cardinality);
}
__name(buildElement, "buildElement");
function buildAction(e, t) {
	let n = getTypeName(t);
	return () => e.parser.action(n, t);
}
__name(buildAction, "buildAction");
function buildRuleCall(e, t) {
	let n = t.rule.ref;
	if (isAbstractParserRule(n)) {
		let r = e.subrule++, i = isParserRule(n) && n.fragment, a = t.arguments.length > 0 ? buildRuleCallPredicate(n, t.arguments) : () => ({}), o;
		return (s) => {
			o ??= getRule(e, n), e.parser.subrule(r, o, i, t, a(s));
		};
	} else if (isTerminalRule(n)) {
		let r = e.consume++, i = getToken(e, n.name);
		return () => e.parser.consume(r, i, t);
	} else if (n) assertUnreachable(n);
	else throw new ErrorWithLocation(t.$cstNode, `Undefined rule: ${t.rule.$refText}`);
}
__name(buildRuleCall, "buildRuleCall");
function buildRuleCallPredicate(e, t) {
	if (t.some((e) => e.calledByName)) {
		let e = t.map((e) => ({
			parameterName: e.parameter?.ref?.name,
			predicate: buildPredicate(e.value)
		}));
		return (t) => {
			let n = {};
			for (let { parameterName: r, predicate: i } of e) r && (n[r] = i(t));
			return n;
		};
	} else {
		let n = t.map((e) => buildPredicate(e.value));
		return (t) => {
			let r = {};
			for (let i = 0; i < n.length; i++) if (i < e.parameters.length) {
				let a = e.parameters[i].name, o = n[i];
				r[a] = o(t);
			}
			return r;
		};
	}
}
__name(buildRuleCallPredicate, "buildRuleCallPredicate");
function buildPredicate(e) {
	if (isDisjunction(e)) {
		let t = buildPredicate(e.left), n = buildPredicate(e.right);
		return (e) => t(e) || n(e);
	} else if (isConjunction(e)) {
		let t = buildPredicate(e.left), n = buildPredicate(e.right);
		return (e) => t(e) && n(e);
	} else if (isNegation(e)) {
		let t = buildPredicate(e.value);
		return (e) => !t(e);
	} else if (isParameterReference(e)) {
		let t = e.parameter.ref.name;
		return (e) => e !== void 0 && e[t] === !0;
	} else if (isBooleanLiteral(e)) {
		let t = !!e.true;
		return () => t;
	}
	assertUnreachable(e);
}
__name(buildPredicate, "buildPredicate");
function buildAlternatives(e, t) {
	if (t.elements.length === 1) return buildElement(e, t.elements[0]);
	{
		let n = [];
		for (let r of t.elements) {
			let t = { ALT: buildElement(e, r, !0) }, i = getGuardCondition(r);
			i && (t.GATE = buildPredicate(i)), n.push(t);
		}
		let r = e.or++;
		return (t) => e.parser.alternatives(r, n.map((e) => {
			let n = { ALT: /* @__PURE__ */ __name(() => e.ALT(t), "ALT") }, r = e.GATE;
			return r && (n.GATE = () => r(t)), n;
		}));
	}
}
__name(buildAlternatives, "buildAlternatives");
function buildUnorderedGroup(e, t) {
	if (t.elements.length === 1) return buildElement(e, t.elements[0]);
	let n = [];
	for (let r of t.elements) {
		let t = { ALT: buildElement(e, r, !0) }, i = getGuardCondition(r);
		i && (t.GATE = buildPredicate(i)), n.push(t);
	}
	let r = e.or++, i = /* @__PURE__ */ __name((e, t) => `uGroup_${e}_${t.getRuleStack().join("-")}`, "idFunc"), a = /* @__PURE__ */ __name((t) => e.parser.alternatives(r, n.map((n, a) => {
		let s = { ALT: /* @__PURE__ */ __name(() => !0, "ALT") }, c = e.parser;
		s.ALT = () => {
			if (n.ALT(t), !c.isRecording()) {
				let e = i(r, c);
				c.unorderedGroups.get(e) || c.unorderedGroups.set(e, []);
				let t = c.unorderedGroups.get(e);
				t?.[a] === void 0 && (t[a] = !0);
			}
		};
		let l = n.GATE;
		return l ? s.GATE = () => l(t) : s.GATE = () => !c.unorderedGroups.get(i(r, c))?.[a], s;
	})), "alternatives"), s = wrap(e, getGuardCondition(t), a, "*");
	return (t) => {
		s(t), e.parser.isRecording() || e.parser.unorderedGroups.delete(i(r, e.parser));
	};
}
__name(buildUnorderedGroup, "buildUnorderedGroup");
function buildGroup(e, t) {
	let n = t.elements.map((t) => buildElement(e, t));
	return (e) => n.forEach((t) => t(e));
}
__name(buildGroup, "buildGroup");
function getGuardCondition(e) {
	if (isGroup(e)) return e.guardCondition;
}
__name(getGuardCondition, "getGuardCondition");
function buildCrossReference(e, t, n = t.terminal) {
	if (n) if (isRuleCall(n) && isParserRule(n.rule.ref)) {
		let r = n.rule.ref, i = e.subrule++, a;
		return (n) => {
			a ??= getRule(e, r), e.parser.subrule(i, a, !1, t, n);
		};
	} else if (isRuleCall(n) && isTerminalRule(n.rule.ref)) {
		let r = e.consume++, i = getToken(e, n.rule.ref.name);
		return () => e.parser.consume(r, i, t);
	} else if (isKeyword(n)) {
		let r = e.consume++, i = getToken(e, n.value);
		return () => e.parser.consume(r, i, t);
	} else throw Error("Could not build cross reference parser");
	else {
		if (!t.type.ref) throw Error("Could not resolve reference to type: " + t.type.$refText);
		let n = findNameAssignment(t.type.ref)?.terminal;
		if (!n) throw Error("Could not find name assignment for type: " + getTypeName(t.type.ref));
		return buildCrossReference(e, t, n);
	}
}
__name(buildCrossReference, "buildCrossReference");
function buildKeyword(e, t) {
	let n = e.consume++, r = e.tokens[t.value];
	if (!r) throw Error("Could not find token for keyword: " + t.value);
	return () => e.parser.consume(n, r, t);
}
__name(buildKeyword, "buildKeyword");
function wrap(e, t, n, r) {
	let i = t && buildPredicate(t);
	if (!r) if (i) {
		let t = e.or++;
		return (r) => e.parser.alternatives(t, [{
			ALT: /* @__PURE__ */ __name(() => n(r), "ALT"),
			GATE: /* @__PURE__ */ __name(() => i(r), "GATE")
		}, {
			ALT: EMPTY_ALT(),
			GATE: /* @__PURE__ */ __name(() => !i(r), "GATE")
		}]);
	} else return n;
	if (r === "*") {
		let t = e.many++;
		return (r) => e.parser.many(t, {
			DEF: /* @__PURE__ */ __name(() => n(r), "DEF"),
			GATE: i ? () => i(r) : void 0
		});
	} else if (r === "+") {
		let t = e.many++;
		if (i) {
			let r = e.or++;
			return (a) => e.parser.alternatives(r, [{
				ALT: /* @__PURE__ */ __name(() => e.parser.atLeastOne(t, { DEF: /* @__PURE__ */ __name(() => n(a), "DEF") }), "ALT"),
				GATE: /* @__PURE__ */ __name(() => i(a), "GATE")
			}, {
				ALT: EMPTY_ALT(),
				GATE: /* @__PURE__ */ __name(() => !i(a), "GATE")
			}]);
		} else return (r) => e.parser.atLeastOne(t, { DEF: /* @__PURE__ */ __name(() => n(r), "DEF") });
	} else if (r === "?") {
		let t = e.optional++;
		return (r) => e.parser.optional(t, {
			DEF: /* @__PURE__ */ __name(() => n(r), "DEF"),
			GATE: i ? () => i(r) : void 0
		});
	} else assertUnreachable(r);
}
__name(wrap, "wrap");
function getRule(e, t) {
	let n = getRuleName(e, t), r = e.parser.getRule(n);
	if (!r) throw Error(`Rule "${n}" not found."`);
	return r;
}
__name(getRule, "getRule");
function getRuleName(e, t) {
	if (isAbstractParserRule(t)) return t.name;
	if (e.ruleNames.has(t)) return e.ruleNames.get(t);
	{
		let n = t, r = n.$container, i = t.$type;
		for (; !isParserRule(r);) (isGroup(r) || isAlternatives(r) || isUnorderedGroup(r)) && (i = r.elements.indexOf(n).toString() + ":" + i), n = r, r = r.$container;
		return i = r.name + ":" + i, e.ruleNames.set(t, i), i;
	}
}
__name(getRuleName, "getRuleName");
function getToken(e, t) {
	let n = e.tokens[t];
	if (!n) throw Error(`Token "${t}" not found."`);
	return n;
}
__name(getToken, "getToken");
function createCompletionParser(e) {
	let t = e.Grammar, n = e.parser.Lexer, r = new LangiumCompletionParser(e);
	return createParser(t, r, n.definition), r.finalize(), r;
}
__name(createCompletionParser, "createCompletionParser");
function createLangiumParser(e) {
	let t = prepareLangiumParser(e);
	return t.finalize(), t;
}
__name(createLangiumParser, "createLangiumParser");
function prepareLangiumParser(e) {
	let t = e.Grammar, n = e.parser.Lexer;
	return createParser(t, new LangiumParser(e), n.definition);
}
__name(prepareLangiumParser, "prepareLangiumParser");
var DefaultTokenBuilder = class {
	static #e = __name(this, "DefaultTokenBuilder");
	constructor() {
		this.diagnostics = [];
	}
	buildTokens(e, t) {
		let n = stream(getAllReachableRules(e, !1)), r = this.buildTerminalTokens(n), i = this.buildKeywordTokens(n, r, t);
		return i.push(...r), i;
	}
	flushLexingReport(e) {
		return { diagnostics: this.popDiagnostics() };
	}
	popDiagnostics() {
		let e = [...this.diagnostics];
		return this.diagnostics = [], e;
	}
	buildTerminalTokens(e) {
		return e.filter(isTerminalRule).filter((e) => !e.fragment).map((e) => this.buildTerminalToken(e)).toArray();
	}
	buildTerminalToken(e) {
		let t = terminalRegex(e), n = this.requiresCustomPattern(t) ? this.regexPatternFunction(t) : t, r = {
			name: e.name,
			PATTERN: n
		};
		return typeof n == "function" && (r.LINE_BREAKS = !0), e.hidden && (r.GROUP = isWhitespace(t) ? Lexer.SKIPPED : "hidden"), r;
	}
	requiresCustomPattern(e) {
		return !!(e.flags.includes("u") || e.flags.includes("s"));
	}
	regexPatternFunction(e) {
		let t = new RegExp(e, e.flags + "y");
		return (e, n) => (t.lastIndex = n, t.exec(e));
	}
	buildKeywordTokens(e, t, n) {
		return e.filter(isAbstractParserRule).flatMap((e) => streamAllContents(e).filter(isKeyword)).distinct((e) => e.value).toArray().sort((e, t) => t.value.length - e.value.length).map((e) => this.buildKeywordToken(e, t, !!n?.caseInsensitive));
	}
	buildKeywordToken(e, t, n) {
		let r = this.buildKeywordPattern(e, n), i = {
			name: e.value,
			PATTERN: r,
			LONGER_ALT: this.findLongerAlt(e, t)
		};
		return typeof r == "function" && (i.LINE_BREAKS = !0), i;
	}
	buildKeywordPattern(e, t) {
		return t ? new RegExp(escapeRegExp(e.value), "i") : e.value;
	}
	findLongerAlt(e, t) {
		return t.reduce((t, n) => {
			let r = n?.PATTERN;
			return r?.source && partialMatches("^" + r.source + "$", e.value) && t.push(n), t;
		}, []);
	}
}, DefaultValueConverter = class {
	static #e = __name(this, "DefaultValueConverter");
	convert(e, t) {
		let n = t.grammarSource;
		if (isCrossReference(n) && (n = getCrossReferenceTerminal(n)), isRuleCall(n)) {
			let r = n.rule.ref;
			if (!r) throw Error("This cst node was not parsed by a rule.");
			return this.runConverter(r, e, t);
		}
		return e;
	}
	runConverter(e, t, n) {
		switch (e.name.toUpperCase()) {
			case "INT": return ValueConverter.convertInt(t);
			case "STRING": return ValueConverter.convertString(t);
			case "ID": return ValueConverter.convertID(t);
		}
		switch (getRuleType(e)?.toLowerCase()) {
			case "number": return ValueConverter.convertNumber(t);
			case "boolean": return ValueConverter.convertBoolean(t);
			case "bigint": return ValueConverter.convertBigint(t);
			case "date": return ValueConverter.convertDate(t);
			default: return t;
		}
	}
}, ValueConverter;
(function(e) {
	function t(e) {
		let t = "";
		for (let r = 1; r < e.length - 1; r++) {
			let i = e.charAt(r);
			if (i === "\\") {
				let i = e.charAt(++r);
				t += n(i);
			} else t += i;
		}
		return t;
	}
	__name(t, "convertString"), e.convertString = t;
	function n(e) {
		switch (e) {
			case "b": return "\b";
			case "f": return "\f";
			case "n": return "\n";
			case "r": return "\r";
			case "t": return "	";
			case "v": return "\v";
			case "0": return "\0";
			default: return e;
		}
	}
	__name(n, "convertEscapeCharacter");
	function r(e) {
		return e.charAt(0) === "^" ? e.substring(1) : e;
	}
	__name(r, "convertID"), e.convertID = r;
	function i(e) {
		return parseInt(e);
	}
	__name(i, "convertInt"), e.convertInt = i;
	function a(e) {
		return BigInt(e);
	}
	__name(a, "convertBigint"), e.convertBigint = a;
	function s(e) {
		return new Date(e);
	}
	__name(s, "convertDate"), e.convertDate = s;
	function c(e) {
		return Number(e);
	}
	__name(c, "convertNumber"), e.convertNumber = c;
	function l(e) {
		return e.toLowerCase() === "true";
	}
	__name(l, "convertBoolean"), e.convertBoolean = l;
})(ValueConverter ||= {});
var cancellation_exports = {};
__reExport(cancellation_exports, __toESM(require_cancellation(), 1));
function delayNextTick() {
	return new Promise((e) => {
		typeof setImmediate > "u" ? setTimeout(e, 0) : setImmediate(e);
	});
}
__name(delayNextTick, "delayNextTick");
var lastTick = 0, globalInterruptionPeriod = 10;
function startCancelableOperation() {
	return lastTick = performance.now(), new cancellation_exports.CancellationTokenSource();
}
__name(startCancelableOperation, "startCancelableOperation");
function setInterruptionPeriod(e) {
	globalInterruptionPeriod = e;
}
__name(setInterruptionPeriod, "setInterruptionPeriod");
var OperationCancelled = Symbol("OperationCancelled");
function isOperationCancelled(e) {
	return e === OperationCancelled;
}
__name(isOperationCancelled, "isOperationCancelled");
async function interruptAndCheck(e) {
	if (e === cancellation_exports.CancellationToken.None) return;
	let t = performance.now();
	if (t - lastTick >= globalInterruptionPeriod && (lastTick = t, await delayNextTick(), lastTick = performance.now()), e.isCancellationRequested) throw OperationCancelled;
}
__name(interruptAndCheck, "interruptAndCheck");
var Deferred = class {
	static #e = __name(this, "Deferred");
	constructor() {
		this.promise = new Promise((e, t) => {
			this.resolve = (t) => (e(t), this), this.reject = (e) => (t(e), this);
		});
	}
}, FullTextDocument2 = class e {
	static #e = __name(this, "FullTextDocument");
	constructor(e, t, n, r) {
		this._uri = e, this._languageId = t, this._version = n, this._content = r, this._lineOffsets = void 0;
	}
	get uri() {
		return this._uri;
	}
	get languageId() {
		return this._languageId;
	}
	get version() {
		return this._version;
	}
	getText(e) {
		if (e) {
			let t = this.offsetAt(e.start), n = this.offsetAt(e.end);
			return this._content.substring(t, n);
		}
		return this._content;
	}
	update(t, n) {
		for (let n of t) if (e.isIncremental(n)) {
			let e = getWellformedRange(n.range), t = this.offsetAt(e.start), r = this.offsetAt(e.end);
			this._content = this._content.substring(0, t) + n.text + this._content.substring(r, this._content.length);
			let i = Math.max(e.start.line, 0), a = Math.max(e.end.line, 0), o = this._lineOffsets, s = computeLineOffsets(n.text, !1, t);
			if (a - i === s.length) for (let e = 0, t = s.length; e < t; e++) o[e + i + 1] = s[e];
			else s.length < 1e4 ? o.splice(i + 1, a - i, ...s) : this._lineOffsets = o = o.slice(0, i + 1).concat(s, o.slice(a + 1));
			let c = n.text.length - (r - t);
			if (c !== 0) for (let e = i + 1 + s.length, t = o.length; e < t; e++) o[e] = o[e] + c;
		} else if (e.isFull(n)) this._content = n.text, this._lineOffsets = void 0;
		else throw Error("Unknown change event received");
		this._version = n;
	}
	getLineOffsets() {
		return this._lineOffsets === void 0 && (this._lineOffsets = computeLineOffsets(this._content, !0)), this._lineOffsets;
	}
	positionAt(e) {
		e = Math.max(Math.min(e, this._content.length), 0);
		let t = this.getLineOffsets(), n = 0, r = t.length;
		if (r === 0) return {
			line: 0,
			character: e
		};
		for (; n < r;) {
			let i = Math.floor((n + r) / 2);
			t[i] > e ? r = i : n = i + 1;
		}
		let i = n - 1;
		return e = this.ensureBeforeEOL(e, t[i]), {
			line: i,
			character: e - t[i]
		};
	}
	offsetAt(e) {
		let t = this.getLineOffsets();
		if (e.line >= t.length) return this._content.length;
		if (e.line < 0) return 0;
		let n = t[e.line];
		if (e.character <= 0) return n;
		let r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length, i = Math.min(n + e.character, r);
		return this.ensureBeforeEOL(i, n);
	}
	ensureBeforeEOL(e, t) {
		for (; e > t && isEOL(this._content.charCodeAt(e - 1));) e--;
		return e;
	}
	get lineCount() {
		return this.getLineOffsets().length;
	}
	static isIncremental(e) {
		let t = e;
		return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
	}
	static isFull(e) {
		let t = e;
		return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
	}
}, TextDocument2;
(function(e) {
	function t(e, t, n, r) {
		return new FullTextDocument2(e, t, n, r);
	}
	__name(t, "create"), e.create = t;
	function n(e, t, n) {
		if (e instanceof FullTextDocument2) return e.update(t, n), e;
		throw Error("TextDocument.update: document must be created by TextDocument.create");
	}
	__name(n, "update"), e.update = n;
	function r(e, t) {
		let n = e.getText(), r = mergeSort(t.map(getWellformedEdit), (e, t) => {
			let n = e.range.start.line - t.range.start.line;
			return n === 0 ? e.range.start.character - t.range.start.character : n;
		}), i = 0, a = [];
		for (let t of r) {
			let r = e.offsetAt(t.range.start);
			if (r < i) throw Error("Overlapping edit");
			r > i && a.push(n.substring(i, r)), t.newText.length && a.push(t.newText), i = e.offsetAt(t.range.end);
		}
		return a.push(n.substr(i)), a.join("");
	}
	__name(r, "applyEdits"), e.applyEdits = r;
})(TextDocument2 ||= {});
function mergeSort(e, t) {
	if (e.length <= 1) return e;
	let n = e.length / 2 | 0, r = e.slice(0, n), i = e.slice(n);
	mergeSort(r, t), mergeSort(i, t);
	let a = 0, o = 0, s = 0;
	for (; a < r.length && o < i.length;) t(r[a], i[o]) <= 0 ? e[s++] = r[a++] : e[s++] = i[o++];
	for (; a < r.length;) e[s++] = r[a++];
	for (; o < i.length;) e[s++] = i[o++];
	return e;
}
__name(mergeSort, "mergeSort");
function computeLineOffsets(e, t, n = 0) {
	let r = t ? [n] : [];
	for (let t = 0; t < e.length; t++) {
		let i = e.charCodeAt(t);
		isEOL(i) && (i === 13 && t + 1 < e.length && e.charCodeAt(t + 1) === 10 && t++, r.push(n + t + 1));
	}
	return r;
}
__name(computeLineOffsets, "computeLineOffsets");
function isEOL(e) {
	return e === 13 || e === 10;
}
__name(isEOL, "isEOL");
function getWellformedRange(e) {
	let t = e.start, n = e.end;
	return t.line > n.line || t.line === n.line && t.character > n.character ? {
		start: n,
		end: t
	} : e;
}
__name(getWellformedRange, "getWellformedRange");
function getWellformedEdit(e) {
	let t = getWellformedRange(e.range);
	return t === e.range ? e : {
		newText: e.newText,
		range: t
	};
}
__name(getWellformedEdit, "getWellformedEdit");
var LIB;
(() => {
	var e = { 975: (e) => {
		function t(e) {
			if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
		}
		__name(t, "e");
		function n(e, t) {
			for (var n, r = "", i = 0, a = -1, o = 0, s = 0; s <= e.length; ++s) {
				if (s < e.length) n = e.charCodeAt(s);
				else {
					if (n === 47) break;
					n = 47;
				}
				if (n === 47) {
					if (!(a === s - 1 || o === 1)) if (a !== s - 1 && o === 2) {
						if (r.length < 2 || i !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
							if (r.length > 2) {
								var c = r.lastIndexOf("/");
								if (c !== r.length - 1) {
									c === -1 ? (r = "", i = 0) : i = (r = r.slice(0, c)).length - 1 - r.lastIndexOf("/"), a = s, o = 0;
									continue;
								}
							} else if (r.length === 2 || r.length === 1) {
								r = "", i = 0, a = s, o = 0;
								continue;
							}
						}
						t && (r.length > 0 ? r += "/.." : r = "..", i = 2);
					} else r.length > 0 ? r += "/" + e.slice(a + 1, s) : r = e.slice(a + 1, s), i = s - a - 1;
					a = s, o = 0;
				} else n === 46 && o !== -1 ? ++o : o = -1;
			}
			return r;
		}
		__name(n, "r");
		var r = {
			resolve: /* @__PURE__ */ __name(function() {
				for (var e, r = "", i = !1, a = arguments.length - 1; a >= -1 && !i; a--) {
					var o;
					a >= 0 ? o = arguments[a] : (e === void 0 && (e = process.cwd()), o = e), t(o), o.length !== 0 && (r = o + "/" + r, i = o.charCodeAt(0) === 47);
				}
				return r = n(r, !i), i ? r.length > 0 ? "/" + r : "/" : r.length > 0 ? r : ".";
			}, "resolve"),
			normalize: /* @__PURE__ */ __name(function(e) {
				if (t(e), e.length === 0) return ".";
				var r = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
				return (e = n(e, !r)).length !== 0 || r || (e = "."), e.length > 0 && i && (e += "/"), r ? "/" + e : e;
			}, "normalize"),
			isAbsolute: /* @__PURE__ */ __name(function(e) {
				return t(e), e.length > 0 && e.charCodeAt(0) === 47;
			}, "isAbsolute"),
			join: /* @__PURE__ */ __name(function() {
				if (arguments.length === 0) return ".";
				for (var e, n = 0; n < arguments.length; ++n) {
					var i = arguments[n];
					t(i), i.length > 0 && (e === void 0 ? e = i : e += "/" + i);
				}
				return e === void 0 ? "." : r.normalize(e);
			}, "join"),
			relative: /* @__PURE__ */ __name(function(e, n) {
				if (t(e), t(n), e === n || (e = r.resolve(e)) === (n = r.resolve(n))) return "";
				for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i);
				for (var a = e.length, o = a - i, s = 1; s < n.length && n.charCodeAt(s) === 47; ++s);
				for (var c = n.length - s, l = o < c ? o : c, u = -1, d = 0; d <= l; ++d) {
					if (d === l) {
						if (c > l) {
							if (n.charCodeAt(s + d) === 47) return n.slice(s + d + 1);
							if (d === 0) return n.slice(s + d);
						} else o > l && (e.charCodeAt(i + d) === 47 ? u = d : d === 0 && (u = 0));
						break;
					}
					var f = e.charCodeAt(i + d);
					if (f !== n.charCodeAt(s + d)) break;
					f === 47 && (u = d);
				}
				var p = "";
				for (d = i + u + 1; d <= a; ++d) d !== a && e.charCodeAt(d) !== 47 || (p.length === 0 ? p += ".." : p += "/..");
				return p.length > 0 ? p + n.slice(s + u) : (s += u, n.charCodeAt(s) === 47 && ++s, n.slice(s));
			}, "relative"),
			_makeLong: /* @__PURE__ */ __name(function(e) {
				return e;
			}, "_makeLong"),
			dirname: /* @__PURE__ */ __name(function(e) {
				if (t(e), e.length === 0) return ".";
				for (var n = e.charCodeAt(0), r = n === 47, i = -1, a = !0, o = e.length - 1; o >= 1; --o) if ((n = e.charCodeAt(o)) === 47) {
					if (!a) {
						i = o;
						break;
					}
				} else a = !1;
				return i === -1 ? r ? "/" : "." : r && i === 1 ? "//" : e.slice(0, i);
			}, "dirname"),
			basename: /* @__PURE__ */ __name(function(e, n) {
				if (n !== void 0 && typeof n != "string") throw TypeError("\"ext\" argument must be a string");
				t(e);
				var r, i = 0, a = -1, o = !0;
				if (n !== void 0 && n.length > 0 && n.length <= e.length) {
					if (n.length === e.length && n === e) return "";
					var s = n.length - 1, c = -1;
					for (r = e.length - 1; r >= 0; --r) {
						var l = e.charCodeAt(r);
						if (l === 47) {
							if (!o) {
								i = r + 1;
								break;
							}
						} else c === -1 && (o = !1, c = r + 1), s >= 0 && (l === n.charCodeAt(s) ? --s == -1 && (a = r) : (s = -1, a = c));
					}
					return i === a ? a = c : a === -1 && (a = e.length), e.slice(i, a);
				}
				for (r = e.length - 1; r >= 0; --r) if (e.charCodeAt(r) === 47) {
					if (!o) {
						i = r + 1;
						break;
					}
				} else a === -1 && (o = !1, a = r + 1);
				return a === -1 ? "" : e.slice(i, a);
			}, "basename"),
			extname: /* @__PURE__ */ __name(function(e) {
				t(e);
				for (var n = -1, r = 0, i = -1, a = !0, o = 0, s = e.length - 1; s >= 0; --s) {
					var c = e.charCodeAt(s);
					if (c !== 47) i === -1 && (a = !1, i = s + 1), c === 46 ? n === -1 ? n = s : o !== 1 && (o = 1) : n !== -1 && (o = -1);
					else if (!a) {
						r = s + 1;
						break;
					}
				}
				return n === -1 || i === -1 || o === 0 || o === 1 && n === i - 1 && n === r + 1 ? "" : e.slice(n, i);
			}, "extname"),
			format: /* @__PURE__ */ __name(function(e) {
				if (typeof e != "object" || !e) throw TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof e);
				return (function(e, t) {
					var n = t.dir || t.root, r = t.base || (t.name || "") + (t.ext || "");
					return n ? n === t.root ? n + r : n + "/" + r : r;
				})(0, e);
			}, "format"),
			parse: /* @__PURE__ */ __name(function(e) {
				t(e);
				var n = {
					root: "",
					dir: "",
					base: "",
					ext: "",
					name: ""
				};
				if (e.length === 0) return n;
				var r, i = e.charCodeAt(0), a = i === 47;
				a ? (n.root = "/", r = 1) : r = 0;
				for (var o = -1, s = 0, c = -1, l = !0, u = e.length - 1, d = 0; u >= r; --u) if ((i = e.charCodeAt(u)) !== 47) c === -1 && (l = !1, c = u + 1), i === 46 ? o === -1 ? o = u : d !== 1 && (d = 1) : o !== -1 && (d = -1);
				else if (!l) {
					s = u + 1;
					break;
				}
				return o === -1 || c === -1 || d === 0 || d === 1 && o === c - 1 && o === s + 1 ? c !== -1 && (n.base = n.name = s === 0 && a ? e.slice(1, c) : e.slice(s, c)) : (s === 0 && a ? (n.name = e.slice(1, o), n.base = e.slice(1, c)) : (n.name = e.slice(s, o), n.base = e.slice(s, c)), n.ext = e.slice(o, c)), s > 0 ? n.dir = e.slice(0, s - 1) : a && (n.dir = "/"), n;
			}, "parse"),
			sep: "/",
			delimiter: ":",
			win32: null,
			posix: null
		};
		r.posix = r, e.exports = r;
	} }, t = {};
	function n(r) {
		var i = t[r];
		if (i !== void 0) return i.exports;
		var a = t[r] = { exports: {} };
		return e[r](a, a.exports, n), a.exports;
	}
	__name(n, "r"), n.d = (e, t) => {
		for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
			enumerable: !0,
			get: t[r]
		});
	}, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = (e) => {
		typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
	};
	var r = {};
	let i;
	n.r(r), n.d(r, {
		URI: /* @__PURE__ */ __name(() => d, "URI"),
		Utils: /* @__PURE__ */ __name(() => w, "Utils")
	}), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
	let a = /^\w[\w\d+.-]*$/, s = /^\//, c = /^\/\//;
	function l(e, t) {
		if (!e.scheme && t) throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
		if (e.scheme && !a.test(e.scheme)) throw Error("[UriError]: Scheme contains illegal characters.");
		if (e.path) {
			if (e.authority) {
				if (!s.test(e.path)) throw Error("[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash (\"/\") character");
			} else if (c.test(e.path)) throw Error("[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters (\"//\")");
		}
	}
	__name(l, "a");
	let u = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
	class d {
		static #e = __name(this, "l");
		static isUri(e) {
			return e instanceof d || !!e && typeof e.authority == "string" && typeof e.fragment == "string" && typeof e.path == "string" && typeof e.query == "string" && typeof e.scheme == "string" && typeof e.fsPath == "string" && typeof e.with == "function" && typeof e.toString == "function";
		}
		scheme;
		authority;
		path;
		query;
		fragment;
		constructor(e, t, n, r, i, a = !1) {
			typeof e == "object" ? (this.scheme = e.scheme || "", this.authority = e.authority || "", this.path = e.path || "", this.query = e.query || "", this.fragment = e.fragment || "") : (this.scheme = /* @__PURE__ */ (function(e, t) {
				return e || t ? e : "file";
			})(e, a), this.authority = t || "", this.path = (function(e, t) {
				switch (e) {
					case "https":
					case "http":
					case "file": t ? t[0] !== "/" && (t = "/" + t) : t = "/";
				}
				return t;
			})(this.scheme, n || ""), this.query = r || "", this.fragment = i || "", l(this, a));
		}
		get fsPath() {
			return _(this, !1);
		}
		with(e) {
			if (!e) return this;
			let { scheme: t, authority: n, path: r, query: i, fragment: a } = e;
			return t === void 0 ? t = this.scheme : t === null && (t = ""), n === void 0 ? n = this.authority : n === null && (n = ""), r === void 0 ? r = this.path : r === null && (r = ""), i === void 0 ? i = this.query : i === null && (i = ""), a === void 0 ? a = this.fragment : a === null && (a = ""), t === this.scheme && n === this.authority && r === this.path && i === this.query && a === this.fragment ? this : new p(t, n, r, i, a);
		}
		static parse(e, t = !1) {
			let n = u.exec(e);
			return n ? new p(n[2] || "", x(n[4] || ""), x(n[5] || ""), x(n[7] || ""), x(n[9] || ""), t) : new p("", "", "", "", "");
		}
		static file(e) {
			let t = "";
			if (i && (e = e.replace(/\\/g, "/")), e[0] === "/" && e[1] === "/") {
				let n = e.indexOf("/", 2);
				n === -1 ? (t = e.substring(2), e = "/") : (t = e.substring(2, n), e = e.substring(n) || "/");
			}
			return new p("file", t, e, "", "");
		}
		static from(e) {
			let t = new p(e.scheme, e.authority, e.path, e.query, e.fragment);
			return l(t, !0), t;
		}
		toString(e = !1) {
			return v(this, e);
		}
		toJSON() {
			return this;
		}
		static revive(e) {
			if (e) {
				if (e instanceof d) return e;
				{
					let t = new p(e);
					return t._formatted = e.external, t._fsPath = e._sep === f ? e.fsPath : null, t;
				}
			}
			return e;
		}
	}
	let f = i ? 1 : void 0;
	class p extends d {
		static #e = __name(this, "d");
		_formatted = null;
		_fsPath = null;
		get fsPath() {
			return this._fsPath ||= _(this, !1), this._fsPath;
		}
		toString(e = !1) {
			return e ? v(this, !0) : (this._formatted ||= v(this, !1), this._formatted);
		}
		toJSON() {
			let e = { $mid: 1 };
			return this._fsPath && (e.fsPath = this._fsPath, e._sep = f), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
		}
	}
	let m = {
		58: "%3A",
		47: "%2F",
		63: "%3F",
		35: "%23",
		91: "%5B",
		93: "%5D",
		64: "%40",
		33: "%21",
		36: "%24",
		38: "%26",
		39: "%27",
		40: "%28",
		41: "%29",
		42: "%2A",
		43: "%2B",
		44: "%2C",
		59: "%3B",
		61: "%3D",
		32: "%20"
	};
	function h(e, t, n) {
		let r, i = -1;
		for (let a = 0; a < e.length; a++) {
			let o = e.charCodeAt(a);
			if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || n && o === 91 || n && o === 93 || n && o === 58) i !== -1 && (r += encodeURIComponent(e.substring(i, a)), i = -1), r !== void 0 && (r += e.charAt(a));
			else {
				r === void 0 && (r = e.substr(0, a));
				let t = m[o];
				t === void 0 ? i === -1 && (i = a) : (i !== -1 && (r += encodeURIComponent(e.substring(i, a)), i = -1), r += t);
			}
		}
		return i !== -1 && (r += encodeURIComponent(e.substring(i))), r === void 0 ? e : r;
	}
	__name(h, "m");
	function g(e) {
		let t;
		for (let n = 0; n < e.length; n++) {
			let r = e.charCodeAt(n);
			r === 35 || r === 63 ? (t === void 0 && (t = e.substr(0, n)), t += m[r]) : t !== void 0 && (t += e[n]);
		}
		return t === void 0 ? e : t;
	}
	__name(g, "y");
	function _(e, t) {
		let n;
		return n = e.authority && e.path.length > 1 && e.scheme === "file" ? `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? e.path.substr(1) : e.path[1].toLowerCase() + e.path.substr(2) : e.path, i && (n = n.replace(/\//g, "\\")), n;
	}
	__name(_, "v");
	function v(e, t) {
		let n = t ? g : h, r = "", { scheme: i, authority: a, path: o, query: s, fragment: c } = e;
		if (i && (r += i, r += ":"), (a || i === "file") && (r += "/", r += "/"), a) {
			let e = a.indexOf("@");
			if (e !== -1) {
				let t = a.substr(0, e);
				a = a.substr(e + 1), e = t.lastIndexOf(":"), e === -1 ? r += n(t, !1, !1) : (r += n(t.substr(0, e), !1, !1), r += ":", r += n(t.substr(e + 1), !1, !0)), r += "@";
			}
			a = a.toLowerCase(), e = a.lastIndexOf(":"), e === -1 ? r += n(a, !1, !0) : (r += n(a.substr(0, e), !1, !0), r += a.substr(e));
		}
		if (o) {
			if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
				let e = o.charCodeAt(1);
				e >= 65 && e <= 90 && (o = `/${String.fromCharCode(e + 32)}:${o.substr(3)}`);
			} else if (o.length >= 2 && o.charCodeAt(1) === 58) {
				let e = o.charCodeAt(0);
				e >= 65 && e <= 90 && (o = `${String.fromCharCode(e + 32)}:${o.substr(2)}`);
			}
			r += n(o, !0, !1);
		}
		return s && (r += "?", r += n(s, !1, !1)), c && (r += "#", r += t ? c : h(c, !1, !1)), r;
	}
	__name(v, "b");
	function y(e) {
		try {
			return decodeURIComponent(e);
		} catch {
			return e.length > 3 ? e.substr(0, 3) + y(e.substr(3)) : e;
		}
	}
	__name(y, "C");
	let b = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
	function x(e) {
		return e.match(b) ? e.replace(b, ((e) => y(e))) : e;
	}
	__name(x, "w");
	var S = n(975);
	let C = S.posix || S;
	var w;
	(function(e) {
		e.joinPath = function(e, ...t) {
			return e.with({ path: C.join(e.path, ...t) });
		}, e.resolvePath = function(e, ...t) {
			let n = e.path, r = !1;
			n[0] !== "/" && (n = "/" + n, r = !0);
			let i = C.resolve(n, ...t);
			return r && i[0] === "/" && !e.authority && (i = i.substring(1)), e.with({ path: i });
		}, e.dirname = function(e) {
			if (e.path.length === 0 || e.path === "/") return e;
			let t = C.dirname(e.path);
			return t.length === 1 && t.charCodeAt(0) === 46 && (t = ""), e.with({ path: t });
		}, e.basename = function(e) {
			return C.basename(e.path);
		}, e.extname = function(e) {
			return C.extname(e.path);
		};
	})(w ||= {}), LIB = r;
})();
var { URI: URI2, Utils } = LIB, UriUtils;
(function(e) {
	e.basename = Utils.basename, e.dirname = Utils.dirname, e.extname = Utils.extname, e.joinPath = Utils.joinPath, e.resolvePath = Utils.resolvePath;
	let t = typeof process == "object" && process?.platform === "win32";
	function n(e, t) {
		return e?.toString() === t?.toString();
	}
	__name(n, "equals"), e.equals = n;
	function r(e, n) {
		let r = typeof e == "string" ? URI2.parse(e).path : e.path, i = typeof n == "string" ? URI2.parse(n).path : n.path, a = r.split("/").filter((e) => e.length > 0), o = i.split("/").filter((e) => e.length > 0);
		if (t) {
			let e = /^[A-Z]:$/;
			if (a[0] && e.test(a[0]) && (a[0] = a[0].toLowerCase()), o[0] && e.test(o[0]) && (o[0] = o[0].toLowerCase()), a[0] !== o[0]) return i.substring(1);
		}
		let s = 0;
		for (; s < a.length && a[s] === o[s]; s++);
		return "../".repeat(a.length - s) + o.slice(s).join("/");
	}
	__name(r, "relative"), e.relative = r;
	function i(e) {
		return URI2.parse(e.toString()).toString();
	}
	__name(i, "normalize"), e.normalize = i;
	function a(e, t) {
		let n = typeof e == "string" ? e : e.path, r = typeof t == "string" ? t : t.path;
		return r.charAt(r.length - 1) === "/" && (r = r.slice(0, -1)), n.charAt(n.length - 1) === "/" && (n = n.slice(0, -1)), r === n ? !0 : r.length < n.length || r.charAt(n.length) !== "/" ? !1 : r.startsWith(n);
	}
	__name(a, "contains"), e.contains = a;
})(UriUtils ||= {});
var UriTrie = class {
	static #e = __name(this, "UriTrie");
	constructor() {
		this.root = {
			name: "",
			children: /* @__PURE__ */ new Map()
		};
	}
	normalizeUri(e) {
		return UriUtils.normalize(e);
	}
	clear() {
		this.root.children.clear();
	}
	insert(e, t) {
		let n = this.getNode(this.normalizeUri(e), !0);
		n.element = t;
	}
	delete(e) {
		let t = this.getNode(this.normalizeUri(e), !1);
		t?.parent && t.parent.children.delete(t.name);
	}
	has(e) {
		return this.getNode(this.normalizeUri(e), !1)?.element !== void 0;
	}
	hasNode(e) {
		return this.getNode(this.normalizeUri(e), !1) !== void 0;
	}
	find(e) {
		return this.getNode(this.normalizeUri(e), !1)?.element;
	}
	findNode(e) {
		let t = this.normalizeUri(e), n = this.getNode(t, !1);
		if (n) return {
			name: n.name,
			uri: UriUtils.joinPath(URI2.parse(t), n.name).toString(),
			element: n.element
		};
	}
	findChildren(e) {
		let t = this.normalizeUri(e), n = this.getNode(t, !1);
		return n ? Array.from(n.children.values()).map((e) => ({
			name: e.name,
			uri: UriUtils.joinPath(URI2.parse(t), e.name).toString(),
			element: e.element
		})) : [];
	}
	all() {
		return this.collectValues(this.root);
	}
	findAll(e) {
		let t = this.getNode(UriUtils.normalize(e), !1);
		return t ? this.collectValues(t) : [];
	}
	getNode(e, t) {
		let n = e.split("/");
		e.charAt(e.length - 1) === "/" && n.pop();
		let r = this.root;
		for (let e of n) {
			let n = r.children.get(e);
			if (!n) if (t) n = {
				name: e,
				children: /* @__PURE__ */ new Map(),
				parent: r
			}, r.children.set(e, n);
			else return;
			r = n;
		}
		return r;
	}
	collectValues(e) {
		let t = [];
		e.element && t.push(e.element);
		for (let n of e.children.values()) t.push(...this.collectValues(n));
		return t;
	}
}, DocumentState;
(function(e) {
	e[e.Changed = 0] = "Changed", e[e.Parsed = 1] = "Parsed", e[e.IndexedContent = 2] = "IndexedContent", e[e.ComputedScopes = 3] = "ComputedScopes", e[e.Linked = 4] = "Linked", e[e.IndexedReferences = 5] = "IndexedReferences", e[e.Validated = 6] = "Validated";
})(DocumentState ||= {});
var DefaultLangiumDocumentFactory = class {
	static #e = __name(this, "DefaultLangiumDocumentFactory");
	constructor(e) {
		this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
	}
	async fromUri(e, t = cancellation_exports.CancellationToken.None) {
		let n = await this.fileSystemProvider.readFile(e);
		return this.createAsync(e, n, t);
	}
	fromTextDocument(e, t, n) {
		return t ??= URI2.parse(e.uri), cancellation_exports.CancellationToken.is(n) ? this.createAsync(t, e, n) : this.create(t, e, n);
	}
	fromString(e, t, n) {
		return cancellation_exports.CancellationToken.is(n) ? this.createAsync(t, e, n) : this.create(t, e, n);
	}
	fromModel(e, t) {
		return this.create(t, { $model: e });
	}
	create(e, t, n) {
		if (typeof t == "string") {
			let r = this.parse(e, t, n);
			return this.createLangiumDocument(r, e, void 0, t);
		} else if ("$model" in t) {
			let n = {
				value: t.$model,
				parserErrors: [],
				lexerErrors: []
			};
			return this.createLangiumDocument(n, e);
		} else {
			let r = this.parse(e, t.getText(), n);
			return this.createLangiumDocument(r, e, t);
		}
	}
	async createAsync(e, t, n) {
		if (typeof t == "string") {
			let r = await this.parseAsync(e, t, n);
			return this.createLangiumDocument(r, e, void 0, t);
		} else {
			let r = await this.parseAsync(e, t.getText(), n);
			return this.createLangiumDocument(r, e, t);
		}
	}
	createLangiumDocument(e, t, n, r) {
		let i;
		if (n) i = {
			parseResult: e,
			uri: t,
			state: DocumentState.Parsed,
			references: [],
			textDocument: n
		};
		else {
			let n = this.createTextDocumentGetter(t, r);
			i = {
				parseResult: e,
				uri: t,
				state: DocumentState.Parsed,
				references: [],
				get textDocument() {
					return n();
				}
			};
		}
		return e.value.$document = i, i;
	}
	async update(e, t) {
		let n = e.parseResult.value.$cstNode?.root.fullText, r = this.textDocuments?.get(e.uri.toString()), i = r ? r.getText() : await this.fileSystemProvider.readFile(e.uri);
		if (r) Object.defineProperty(e, "textDocument", { value: r });
		else {
			let t = this.createTextDocumentGetter(e.uri, i);
			Object.defineProperty(e, "textDocument", { get: t });
		}
		return n !== i && (e.parseResult = await this.parseAsync(e.uri, i, t), e.parseResult.value.$document = e), e.state = DocumentState.Parsed, e;
	}
	parse(e, t, n) {
		return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t, n);
	}
	parseAsync(e, t, n) {
		return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t, n);
	}
	createTextDocumentGetter(e, t) {
		let n = this.serviceRegistry, r;
		return () => r ??= TextDocument2.create(e.toString(), n.getServices(e).LanguageMetaData.languageId, 0, t ?? "");
	}
}, DefaultLangiumDocuments = class {
	static #e = __name(this, "DefaultLangiumDocuments");
	constructor(e) {
		this.documentTrie = new UriTrie(), this.services = e, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.documentBuilder = () => e.workspace.DocumentBuilder;
	}
	get all() {
		return stream(this.documentTrie.all());
	}
	addDocument(e) {
		let t = e.uri.toString();
		if (this.documentTrie.has(t)) throw Error(`A document with the URI '${t}' is already present.`);
		this.documentTrie.insert(t, e);
	}
	getDocument(e) {
		let t = e.toString();
		return this.documentTrie.find(t);
	}
	getDocuments(e) {
		let t = e.toString();
		return this.documentTrie.findAll(t);
	}
	async getOrCreateDocument(e, t) {
		let n = this.getDocument(e);
		return n || (n = await this.langiumDocumentFactory.fromUri(e, t), this.addDocument(n), n);
	}
	createDocument(e, t, n) {
		if (n) return this.langiumDocumentFactory.fromString(t, e, n).then((e) => (this.addDocument(e), e));
		{
			let n = this.langiumDocumentFactory.fromString(t, e);
			return this.addDocument(n), n;
		}
	}
	hasDocument(e) {
		return this.documentTrie.has(e.toString());
	}
	invalidateDocument(e) {
		let t = e.toString(), n = this.documentTrie.find(t);
		return n && this.documentBuilder().resetToState(n, DocumentState.Changed), n;
	}
	deleteDocument(e) {
		let t = e.toString(), n = this.documentTrie.find(t);
		return n && (n.state = DocumentState.Changed, this.documentTrie.delete(t)), n;
	}
	deleteDocuments(e) {
		let t = e.toString(), n = this.documentTrie.findAll(t);
		for (let e of n) e.state = DocumentState.Changed;
		return this.documentTrie.delete(t), n;
	}
}, RefResolving = Symbol("RefResolving"), DefaultLinker = class {
	static #e = __name(this, "DefaultLinker");
	constructor(e) {
		this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator, this.profiler = e.shared.profilers.LangiumProfiler, this.languageId = e.LanguageMetaData.languageId;
	}
	async link(e, t = cancellation_exports.CancellationToken.None) {
		if (this.profiler?.isActive("linking")) {
			let n = this.profiler.createTask("linking", this.languageId);
			n.start();
			try {
				for (let r of streamAst(e.parseResult.value)) await interruptAndCheck(t), streamReferences(r).forEach((t) => {
					let i = `${r.$type}:${t.property}`;
					n.startSubTask(i);
					try {
						this.doLink(t, e);
					} finally {
						n.stopSubTask(i);
					}
				});
			} finally {
				n.stop();
			}
		} else for (let n of streamAst(e.parseResult.value)) await interruptAndCheck(t), streamReferences(n).forEach((t) => this.doLink(t, e));
	}
	doLink(e, t) {
		let n = e.reference;
		if ("_ref" in n && n._ref === void 0) {
			n._ref = RefResolving;
			try {
				let t = this.getCandidate(e);
				isLinkingError(t) ? n._ref = t : (n._nodeDescription = t, n._ref = this.loadAstNode(t) ?? this.createLinkingError(e, t));
			} catch (t) {
				console.error(`An error occurred while resolving reference to '${n.$refText}':`, t);
				let r = t.message ?? String(t);
				n._ref = {
					info: e,
					message: `An error occurred while resolving reference to '${n.$refText}': ${r}`
				};
			}
			t.references.push(n);
		} else if ("_items" in n && n._items === void 0) {
			n._items = RefResolving;
			try {
				let t = this.getCandidates(e), r = [];
				if (isLinkingError(t)) n._linkingError = t;
				else for (let e of t) {
					let t = this.loadAstNode(e);
					t && r.push({
						ref: t,
						$nodeDescription: e
					});
				}
				n._items = r;
			} catch (t) {
				n._linkingError = {
					info: e,
					message: `An error occurred while resolving reference to '${n.$refText}': ${t}`
				}, n._items = [];
			}
			t.references.push(n);
		}
	}
	unlink(e) {
		for (let t of e.references) "_ref" in t ? (t._ref = void 0, delete t._nodeDescription) : "_items" in t && (t._items = void 0, delete t._linkingError);
		e.references = [];
	}
	getCandidate(e) {
		return this.scopeProvider.getScope(e).getElement(e.reference.$refText) ?? this.createLinkingError(e);
	}
	getCandidates(e) {
		let t = this.scopeProvider.getScope(e).getElements(e.reference.$refText).distinct((e) => `${e.documentUri}#${e.path}`).toArray();
		return t.length > 0 ? t : this.createLinkingError(e);
	}
	buildReference(e, t, n, r) {
		let i = this, a = {
			$refNode: n,
			$refText: r,
			_ref: void 0,
			get ref() {
				if (isAstNode(this._ref)) return this._ref;
				if (isAstNodeDescription(this._nodeDescription)) this._ref = i.loadAstNode(this._nodeDescription) ?? i.createLinkingError({
					reference: a,
					container: e,
					property: t
				}, this._nodeDescription);
				else if (this._ref === void 0) {
					this._ref = RefResolving;
					let n = findRootNode(e).$document, r = i.getLinkedNode({
						reference: a,
						container: e,
						property: t
					});
					if (r.error && n && n.state < DocumentState.ComputedScopes) {
						this._ref = void 0;
						return;
					}
					this._ref = r.node ?? r.error, this._nodeDescription = r.descr, n?.references.push(this);
				} else this._ref === RefResolving && i.throwCyclicReferenceError(e, t, r);
				return isAstNode(this._ref) ? this._ref : void 0;
			},
			get $nodeDescription() {
				return this._nodeDescription;
			},
			get error() {
				return isLinkingError(this._ref) ? this._ref : void 0;
			}
		};
		return a;
	}
	buildMultiReference(e, t, n, r) {
		let i = this, a = {
			$refNode: n,
			$refText: r,
			_items: void 0,
			get items() {
				if (Array.isArray(this._items)) return this._items;
				if (this._items === void 0) {
					this._items = RefResolving;
					let n = findRootNode(e).$document, r = i.getCandidates({
						reference: a,
						container: e,
						property: t
					}), o = [];
					if (isLinkingError(r)) this._linkingError = r;
					else for (let e of r) {
						let t = i.loadAstNode(e);
						t && o.push({
							ref: t,
							$nodeDescription: e
						});
					}
					this._items = o, n?.references.push(this);
				} else this._items === RefResolving && i.throwCyclicReferenceError(e, t, r);
				return Array.isArray(this._items) ? this._items : [];
			},
			get error() {
				if (this._linkingError) return this._linkingError;
				if (!(this.items.length > 0)) return this._linkingError = i.createLinkingError({
					reference: a,
					container: e,
					property: t
				});
			}
		};
		return a;
	}
	throwCyclicReferenceError(e, t, n) {
		throw Error(`Cyclic reference resolution detected: ${this.astNodeLocator.getAstNodePath(e)}/${t} (symbol '${n}')`);
	}
	getLinkedNode(e) {
		try {
			let t = this.getCandidate(e);
			if (isLinkingError(t)) return { error: t };
			let n = this.loadAstNode(t);
			return n ? {
				node: n,
				descr: t
			} : {
				descr: t,
				error: this.createLinkingError(e, t)
			};
		} catch (t) {
			console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, t);
			let n = t.message ?? String(t);
			return { error: {
				info: e,
				message: `An error occurred while resolving reference to '${e.reference.$refText}': ${n}`
			} };
		}
	}
	loadAstNode(e) {
		if (e.node) return e.node;
		let t = this.langiumDocuments().getDocument(e.documentUri);
		if (t) return this.astNodeLocator.getAstNode(t.parseResult.value, e.path);
	}
	createLinkingError(e, t) {
		let n = findRootNode(e.container).$document;
		return n && n.state < DocumentState.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`), {
			info: e,
			message: `Could not resolve reference to ${this.reflection.getReferenceType(e)} named '${e.reference.$refText}'.`,
			targetDescription: t
		};
	}
};
function isNamed(e) {
	return typeof e.name == "string";
}
__name(isNamed, "isNamed");
var DefaultNameProvider = class {
	static #e = __name(this, "DefaultNameProvider");
	getName(e) {
		if (isNamed(e)) return e.name;
	}
	getNameNode(e) {
		return findNodeForProperty(e.$cstNode, "name");
	}
}, DefaultReferences = class {
	static #e = __name(this, "DefaultReferences");
	constructor(e) {
		this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator, this.documents = e.shared.workspace.LangiumDocuments, this.hasMultiReference = streamAst(e.Grammar).some((e) => isCrossReference(e) && e.isMulti);
	}
	findDeclarations(e) {
		if (e) {
			let t = findAssignment(e), n = e.astNode;
			if (t && n) {
				let r = n[t.feature];
				if (isReference(r) || isMultiReference(r)) return getReferenceNodes(r);
				if (Array.isArray(r)) {
					for (let t of r) if ((isReference(t) || isMultiReference(t)) && t.$refNode && t.$refNode.offset <= e.offset && t.$refNode.end >= e.end) return getReferenceNodes(t);
				}
			}
			if (n) {
				let t = this.nameProvider.getNameNode(n);
				if (t && (t === e || isChildNode(e, t))) return this.getSelfNodes(n);
			}
		}
		return [];
	}
	getSelfNodes(e) {
		if (this.hasMultiReference) {
			let t = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e)), n = this.getNodeFromReferenceDescription(t.head());
			if (n) {
				for (let t of streamReferences(n)) if (isMultiReference(t.reference) && t.reference.items.some((t) => t.ref === e)) return t.reference.items.map((e) => e.ref);
			}
			return [e];
		} else return [e];
	}
	getNodeFromReferenceDescription(e) {
		if (!e) return;
		let t = this.documents.getDocument(e.sourceUri);
		if (t) return this.nodeLocator.getAstNode(t.parseResult.value, e.sourcePath);
	}
	findDeclarationNodes(e) {
		let t = this.findDeclarations(e), n = [];
		for (let e of t) {
			let t = this.nameProvider.getNameNode(e) ?? e.$cstNode;
			t && n.push(t);
		}
		return n;
	}
	findReferences(e, t) {
		let n = [];
		t.includeDeclaration && n.push(...this.getSelfReferences(e));
		let r = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
		return t.documentUri && (r = r.filter((e) => UriUtils.equals(e.sourceUri, t.documentUri))), n.push(...r), stream(n);
	}
	getSelfReferences(e) {
		let t = this.getSelfNodes(e), n = [];
		for (let e of t) {
			let t = this.nameProvider.getNameNode(e);
			if (t) {
				let r = getDocument(e), i = this.nodeLocator.getAstNodePath(e);
				n.push({
					sourceUri: r.uri,
					sourcePath: i,
					targetUri: r.uri,
					targetPath: i,
					segment: toDocumentSegment(t),
					local: !0
				});
			}
		}
		return n;
	}
}, MultiMap = class {
	static #e = __name(this, "MultiMap");
	constructor(e) {
		if (this.map = /* @__PURE__ */ new Map(), e) for (let [t, n] of e) this.add(t, n);
	}
	get size() {
		return Reduction.sum(stream(this.map.values()).map((e) => e.length));
	}
	clear() {
		this.map.clear();
	}
	delete(e, t) {
		if (t === void 0) return this.map.delete(e);
		{
			let n = this.map.get(e);
			if (n) {
				let r = n.indexOf(t);
				if (r >= 0) return n.length === 1 ? this.map.delete(e) : n.splice(r, 1), !0;
			}
			return !1;
		}
	}
	get(e) {
		return this.map.get(e) ?? [];
	}
	getStream(e) {
		let t = this.map.get(e);
		return t ? stream(t) : EMPTY_STREAM;
	}
	has(e, t) {
		if (t === void 0) return this.map.has(e);
		{
			let n = this.map.get(e);
			return n ? n.indexOf(t) >= 0 : !1;
		}
	}
	add(e, t) {
		return this.map.has(e) ? this.map.get(e).push(t) : this.map.set(e, [t]), this;
	}
	addAll(e, t) {
		return this.map.has(e) ? this.map.get(e).push(...t) : this.map.set(e, Array.from(t)), this;
	}
	forEach(e) {
		this.map.forEach((t, n) => t.forEach((t) => e(t, n, this)));
	}
	[Symbol.iterator]() {
		return this.entries().iterator();
	}
	entries() {
		return stream(this.map.entries()).flatMap(([e, t]) => t.map((t) => [e, t]));
	}
	keys() {
		return stream(this.map.keys());
	}
	values() {
		return stream(this.map.values()).flat();
	}
	entriesGroupedByKey() {
		return stream(this.map.entries());
	}
}, BiMap = class {
	static #e = __name(this, "BiMap");
	get size() {
		return this.map.size;
	}
	constructor(e) {
		if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e) for (let [t, n] of e) this.set(t, n);
	}
	clear() {
		this.map.clear(), this.inverse.clear();
	}
	set(e, t) {
		return this.map.set(e, t), this.inverse.set(t, e), this;
	}
	get(e) {
		return this.map.get(e);
	}
	getKey(e) {
		return this.inverse.get(e);
	}
	delete(e) {
		let t = this.map.get(e);
		return t === void 0 ? !1 : (this.map.delete(e), this.inverse.delete(t), !0);
	}
}, DefaultScopeComputation = class {
	static #e = __name(this, "DefaultScopeComputation");
	constructor(e) {
		this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
	}
	async collectExportedSymbols(e, t = cancellation_exports.CancellationToken.None) {
		return this.collectExportedSymbolsForNode(e.parseResult.value, e, void 0, t);
	}
	async collectExportedSymbolsForNode(e, t, n = streamContents, r = cancellation_exports.CancellationToken.None) {
		let i = [];
		this.addExportedSymbol(e, i, t);
		for (let a of n(e)) await interruptAndCheck(r), this.addExportedSymbol(a, i, t);
		return i;
	}
	addExportedSymbol(e, t, n) {
		let r = this.nameProvider.getName(e);
		r && t.push(this.descriptions.createDescription(e, r, n));
	}
	async collectLocalSymbols(e, t = cancellation_exports.CancellationToken.None) {
		let n = e.parseResult.value, r = new MultiMap();
		for (let i of streamAllContents(n)) await interruptAndCheck(t), this.addLocalSymbol(i, e, r);
		return r;
	}
	addLocalSymbol(e, t, n) {
		let r = e.$container;
		if (r) {
			let i = this.nameProvider.getName(e);
			i && n.add(r, this.descriptions.createDescription(e, i, t));
		}
	}
}, StreamScope = class {
	static #e = __name(this, "StreamScope");
	constructor(e, t, n) {
		this.elements = e, this.outerScope = t, this.caseInsensitive = n?.caseInsensitive ?? !1, this.concatOuterScope = n?.concatOuterScope ?? !0;
	}
	getAllElements() {
		return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
	}
	getElement(e) {
		let t = this.caseInsensitive ? e.toLowerCase() : e, n = this.caseInsensitive ? this.elements.find((e) => e.name.toLowerCase() === t) : this.elements.find((t) => t.name === e);
		if (n) return n;
		if (this.outerScope) return this.outerScope.getElement(e);
	}
	getElements(e) {
		let t = this.caseInsensitive ? e.toLowerCase() : e, n = this.caseInsensitive ? this.elements.filter((e) => e.name.toLowerCase() === t) : this.elements.filter((t) => t.name === e);
		return (this.concatOuterScope || n.isEmpty()) && this.outerScope ? n.concat(this.outerScope.getElements(e)) : n;
	}
}, MapScope = class {
	static #e = __name(this, "MapScope");
	constructor(e, t, n) {
		this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = n?.caseInsensitive ?? !1, this.concatOuterScope = n?.concatOuterScope ?? !0;
		for (let t of e) {
			let e = this.caseInsensitive ? t.name.toLowerCase() : t.name;
			this.elements.set(e, t);
		}
		this.outerScope = t;
	}
	getElement(e) {
		let t = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(t);
		if (n) return n;
		if (this.outerScope) return this.outerScope.getElement(e);
	}
	getElements(e) {
		let t = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(t), r = n ? [n] : [];
		return (this.concatOuterScope || r.length > 0) && this.outerScope ? stream(r).concat(this.outerScope.getElements(e)) : stream(r);
	}
	getAllElements() {
		let e = stream(this.elements.values());
		return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
	}
}, MultiMapScope = class {
	static #e = __name(this, "MultiMapScope");
	constructor(e, t, n) {
		this.elements = new MultiMap(), this.caseInsensitive = n?.caseInsensitive ?? !1, this.concatOuterScope = n?.concatOuterScope ?? !0;
		for (let t of e) {
			let e = this.caseInsensitive ? t.name.toLowerCase() : t.name;
			this.elements.add(e, t);
		}
		this.outerScope = t;
	}
	getElement(e) {
		let t = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(t)[0];
		if (n) return n;
		if (this.outerScope) return this.outerScope.getElement(e);
	}
	getElements(e) {
		let t = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(t);
		return (this.concatOuterScope || n.length === 0) && this.outerScope ? stream(n).concat(this.outerScope.getElements(e)) : stream(n);
	}
	getAllElements() {
		let e = stream(this.elements.values());
		return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
	}
}, EMPTY_SCOPE = {
	getElement() {},
	getElements() {
		return EMPTY_STREAM;
	},
	getAllElements() {
		return EMPTY_STREAM;
	}
}, DisposableCache = class {
	static #e = __name(this, "DisposableCache");
	constructor() {
		this.toDispose = [], this.isDisposed = !1;
	}
	onDispose(e) {
		this.toDispose.push(e);
	}
	dispose() {
		this.throwIfDisposed(), this.clear(), this.isDisposed = !0, this.toDispose.forEach((e) => e.dispose());
	}
	throwIfDisposed() {
		if (this.isDisposed) throw Error("This cache has already been disposed");
	}
}, SimpleCache = class extends DisposableCache {
	static #e = __name(this, "SimpleCache");
	constructor() {
		super(...arguments), this.cache = /* @__PURE__ */ new Map();
	}
	has(e) {
		return this.throwIfDisposed(), this.cache.has(e);
	}
	set(e, t) {
		this.throwIfDisposed(), this.cache.set(e, t);
	}
	get(e, t) {
		if (this.throwIfDisposed(), this.cache.has(e)) return this.cache.get(e);
		if (t) {
			let n = t();
			return this.cache.set(e, n), n;
		} else return;
	}
	delete(e) {
		return this.throwIfDisposed(), this.cache.delete(e);
	}
	clear() {
		this.throwIfDisposed(), this.cache.clear();
	}
}, ContextCache = class extends DisposableCache {
	static #e = __name(this, "ContextCache");
	constructor(e) {
		super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((e) => e);
	}
	has(e, t) {
		return this.throwIfDisposed(), this.cacheForContext(e).has(t);
	}
	set(e, t, n) {
		this.throwIfDisposed(), this.cacheForContext(e).set(t, n);
	}
	get(e, t, n) {
		this.throwIfDisposed();
		let r = this.cacheForContext(e);
		if (r.has(t)) return r.get(t);
		if (n) {
			let e = n();
			return r.set(t, e), e;
		} else return;
	}
	delete(e, t) {
		return this.throwIfDisposed(), this.cacheForContext(e).delete(t);
	}
	clear(e) {
		if (this.throwIfDisposed(), e) {
			let t = this.converter(e);
			this.cache.delete(t);
		} else this.cache.clear();
	}
	cacheForContext(e) {
		let t = this.converter(e), n = this.cache.get(t);
		return n || (n = /* @__PURE__ */ new Map(), this.cache.set(t, n)), n;
	}
}, DocumentCache = class extends ContextCache {
	static #e = __name(this, "DocumentCache");
	constructor(e, t) {
		super((e) => e.toString()), t ? (this.toDispose.push(e.workspace.DocumentBuilder.onDocumentPhase(t, (e) => {
			this.clear(e.uri.toString());
		})), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((e, t) => {
			for (let e of t) this.clear(e);
		}))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((e, t) => {
			let n = e.concat(t);
			for (let e of n) this.clear(e);
		}));
	}
}, WorkspaceCache = class extends SimpleCache {
	static #e = __name(this, "WorkspaceCache");
	constructor(e, t) {
		super(), t ? (this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(t, () => {
			this.clear();
		})), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((e, t) => {
			t.length > 0 && this.clear();
		}))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
			this.clear();
		}));
	}
}, DefaultScopeProvider = class {
	static #e = __name(this, "DefaultScopeProvider");
	constructor(e) {
		this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new WorkspaceCache(e.shared);
	}
	getScope(e) {
		let t = [], n = this.reflection.getReferenceType(e), r = getDocument(e.container).localSymbols;
		if (r) {
			let i = e.container;
			do
				r.has(i) && t.push(r.getStream(i).filter((e) => this.reflection.isSubtype(e.type, n))), i = i.$container;
			while (i);
		}
		let i = this.getGlobalScope(n, e);
		for (let e = t.length - 1; e >= 0; e--) i = this.createScope(t[e], i);
		return i;
	}
	createScope(e, t, n) {
		return new StreamScope(stream(e), t, n);
	}
	createScopeForNodes(e, t, n) {
		return new StreamScope(stream(e).map((e) => {
			let t = this.nameProvider.getName(e);
			if (t) return this.descriptions.createDescription(e, t);
		}).nonNullable(), t, n);
	}
	getGlobalScope(e, t) {
		return this.globalScopeCache.get(e, () => new MultiMapScope(this.indexManager.allElements(e)));
	}
};
function isAstNodeWithComment(e) {
	return typeof e.$comment == "string";
}
__name(isAstNodeWithComment, "isAstNodeWithComment");
function isIntermediateReference(e) {
	return typeof e == "object" && !!e && ("$ref" in e || "$error" in e);
}
__name(isIntermediateReference, "isIntermediateReference");
var DefaultJsonSerializer = class {
	static #e = __name(this, "DefaultJsonSerializer");
	constructor(e) {
		this.ignoreProperties = /* @__PURE__ */ new Set([
			"$container",
			"$containerProperty",
			"$containerIndex",
			"$document",
			"$cstNode"
		]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
	}
	serialize(e, t) {
		let n = t ?? {}, r = t?.replacer, i = /* @__PURE__ */ __name((e, t) => this.replacer(e, t, n), "defaultReplacer"), a = r ? (e, t) => r(e, t, i) : i;
		try {
			return this.currentDocument = getDocument(e), JSON.stringify(e, a, t?.space);
		} finally {
			this.currentDocument = void 0;
		}
	}
	deserialize(e, t) {
		let n = t ?? {}, r = JSON.parse(e);
		return this.linkNode(r, r, n), r;
	}
	replacer(e, t, { refText: n, sourceText: r, textRegions: i, comments: a, uriConverter: o }) {
		if (!this.ignoreProperties.has(e)) if (isReference(t)) {
			let e = t.ref, r = n ? t.$refText : void 0;
			if (e) {
				let t = getDocument(e), n = "";
				this.currentDocument && this.currentDocument !== t && (n = o ? o(t.uri, e) : t.uri.toString());
				let i = this.astNodeLocator.getAstNodePath(e);
				return {
					$ref: `${n}#${i}`,
					$refText: r
				};
			} else return {
				$error: t.error?.message ?? "Could not resolve reference",
				$refText: r
			};
		} else if (isMultiReference(t)) {
			let e = n ? t.$refText : void 0, r = [];
			for (let e of t.items) {
				let t = e.ref, n = getDocument(e.ref), i = "";
				this.currentDocument && this.currentDocument !== n && (i = o ? o(n.uri, t) : n.uri.toString());
				let a = this.astNodeLocator.getAstNodePath(t);
				r.push(`${i}#${a}`);
			}
			return {
				$refs: r,
				$refText: e
			};
		} else if (isAstNode(t)) {
			let n;
			if (i && (n = this.addAstNodeRegionWithAssignmentsTo({ ...t }), (!e || t.$document) && n?.$textRegion && (n.$textRegion.documentURI = this.currentDocument?.uri.toString())), r && !e && (n ??= { ...t }, n.$sourceText = t.$cstNode?.text), a) {
				n ??= { ...t };
				let e = this.commentProvider.getComment(t);
				e && (n.$comment = e.replace(/\r/g, ""));
			}
			return n ?? t;
		} else return t;
	}
	addAstNodeRegionWithAssignmentsTo(e) {
		let t = /* @__PURE__ */ __name((e) => ({
			offset: e.offset,
			end: e.end,
			length: e.length,
			range: e.range
		}), "createDocumentSegment");
		if (e.$cstNode) {
			let n = e.$textRegion = t(e.$cstNode), r = n.assignments = {};
			return Object.keys(e).filter((e) => !e.startsWith("$")).forEach((n) => {
				let i = findNodesForProperty(e.$cstNode, n).map(t);
				i.length !== 0 && (r[n] = i);
			}), e;
		}
	}
	linkNode(e, t, n, r, i, a) {
		for (let [r, i] of Object.entries(e)) if (Array.isArray(i)) for (let a = 0; a < i.length; a++) {
			let o = i[a];
			isIntermediateReference(o) ? i[a] = this.reviveReference(e, r, t, o, n) : isAstNode(o) && this.linkNode(o, t, n, e, r, a);
		}
		else isIntermediateReference(i) ? e[r] = this.reviveReference(e, r, t, i, n) : isAstNode(i) && this.linkNode(i, t, n, e, r);
		let o = e;
		o.$container = r, o.$containerProperty = i, o.$containerIndex = a;
	}
	reviveReference(e, t, n, r, i) {
		let a = r.$refText, o = r.$error, s;
		if (r.$ref) {
			let e = this.getRefNode(n, r.$ref, i.uriConverter);
			if (isAstNode(e)) return a ||= this.nameProvider.getName(e), {
				$refText: a ?? "",
				ref: e
			};
			o = e;
		} else if (r.$refs) {
			let e = [];
			for (let t of r.$refs) {
				let r = this.getRefNode(n, t, i.uriConverter);
				isAstNode(r) && e.push({ ref: r });
			}
			if (e.length === 0) s = {
				$refText: a ?? "",
				items: e
			}, o ??= "Could not resolve multi-reference";
			else return {
				$refText: a ?? "",
				items: e
			};
		}
		if (o) return s ??= {
			$refText: a ?? "",
			ref: void 0
		}, s.error = {
			info: {
				container: e,
				property: t,
				reference: s
			},
			message: o
		}, s;
	}
	getRefNode(e, t, n) {
		try {
			let r = t.indexOf("#");
			if (r === 0) return this.astNodeLocator.getAstNode(e, t.substring(1)) || "Could not resolve path: " + t;
			if (r < 0) {
				let e = n ? n(t) : URI2.parse(t), r = this.langiumDocuments.getDocument(e);
				return r ? r.parseResult.value : "Could not find document for URI: " + t;
			}
			let i = n ? n(t.substring(0, r)) : URI2.parse(t.substring(0, r)), a = this.langiumDocuments.getDocument(i);
			return a ? r === t.length - 1 ? a.parseResult.value : this.astNodeLocator.getAstNode(a.parseResult.value, t.substring(r + 1)) || "Could not resolve URI: " + t : "Could not find document for URI: " + t;
		} catch (e) {
			return String(e);
		}
	}
}, DefaultServiceRegistry = class {
	static #e = __name(this, "DefaultServiceRegistry");
	get map() {
		return this.fileExtensionMap;
	}
	constructor(e) {
		this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.fileNameMap = /* @__PURE__ */ new Map(), this.textDocuments = e?.workspace.TextDocuments;
	}
	register(e) {
		let t = e.LanguageMetaData;
		for (let n of t.fileExtensions) this.fileExtensionMap.has(n) && console.warn(`The file extension ${n} is used by multiple languages. It is now assigned to '${t.languageId}'.`), this.fileExtensionMap.set(n, e);
		if (t.fileNames) for (let n of t.fileNames) this.fileNameMap.has(n) && console.warn(`The file name ${n} is used by multiple languages. It is now assigned to '${t.languageId}'.`), this.fileNameMap.set(n, e);
		this.languageIdMap.set(t.languageId, e);
	}
	getServices(e) {
		if (this.languageIdMap.size === 0) throw Error("The service registry is empty. Use `register` to register the services of a language.");
		let t = this.textDocuments?.get(e)?.languageId;
		if (t !== void 0) {
			let e = this.languageIdMap.get(t);
			if (e) return e;
		}
		let n = UriUtils.extname(e), r = UriUtils.basename(e), i = this.fileNameMap.get(r) ?? this.fileExtensionMap.get(n);
		if (!i) throw t ? Error(`The service registry contains no services for the extension '${n}' for language '${t}'.`) : Error(`The service registry contains no services for the extension '${n}'.`);
		return i;
	}
	hasServices(e) {
		try {
			return this.getServices(e), !0;
		} catch {
			return !1;
		}
	}
	get all() {
		return Array.from(this.languageIdMap.values());
	}
};
function diagnosticData(e) {
	return { code: e };
}
__name(diagnosticData, "diagnosticData");
var ValidationCategory;
(function(e) {
	e.defaults = [
		"fast",
		"slow",
		"built-in"
	], e.all = e.defaults;
})(ValidationCategory ||= {});
var ValidationRegistry = class {
	static #e = __name(this, "ValidationRegistry");
	constructor(e) {
		this.entries = new MultiMap(), this.knownCategories = new Set(ValidationCategory.defaults), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
	}
	register(e, t = this, n = "fast") {
		if (n === "built-in") throw Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
		this.knownCategories.add(n);
		for (let [r, i] of Object.entries(e)) {
			let e = i;
			if (Array.isArray(e)) for (let i of e) {
				let e = {
					check: this.wrapValidationException(i, t),
					category: n
				};
				this.addEntry(r, e);
			}
			else if (typeof e == "function") {
				let i = {
					check: this.wrapValidationException(e, t),
					category: n
				};
				this.addEntry(r, i);
			} else assertUnreachable(e);
		}
	}
	wrapValidationException(e, t) {
		return async (n, r, i) => {
			await this.handleException(() => e.call(t, n, r, i), "An error occurred during validation", r, n);
		};
	}
	async handleException(e, t, n, r) {
		try {
			await e();
		} catch (e) {
			if (isOperationCancelled(e)) throw e;
			console.error(`${t}:`, e), e instanceof Error && e.stack && console.error(e.stack), n("error", `${t}: ${e instanceof Error ? e.message : String(e)}`, { node: r });
		}
	}
	addEntry(e, t) {
		if (e === "AstNode") {
			this.entries.add("AstNode", t);
			return;
		}
		for (let n of this.reflection.getAllSubTypes(e)) this.entries.add(n, t);
	}
	getChecks(e, t) {
		let n = stream(this.entries.get(e)).concat(this.entries.get("AstNode"));
		return t && (n = n.filter((e) => t.includes(e.category))), n.map((e) => e.check);
	}
	registerBeforeDocument(e, t = this) {
		this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", t));
	}
	registerAfterDocument(e, t = this) {
		this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", t));
	}
	wrapPreparationException(e, t, n) {
		return async (r, i, a, o) => {
			await this.handleException(() => e.call(n, r, i, a, o), t, i, r);
		};
	}
	get checksBefore() {
		return this.entriesBefore;
	}
	get checksAfter() {
		return this.entriesAfter;
	}
	getAllValidationCategories(e) {
		return this.knownCategories;
	}
}, VALIDATE_EACH_NODE = Object.freeze({
	validateNode: !0,
	validateChildren: !0
}), DefaultDocumentValidator = class {
	static #e = __name(this, "DefaultDocumentValidator");
	constructor(e) {
		this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData, this.profiler = e.shared.profilers.LangiumProfiler, this.languageId = e.LanguageMetaData.languageId;
	}
	async validateDocument(e, t = {}, n = cancellation_exports.CancellationToken.None) {
		let r = e.parseResult, i = [];
		if (await interruptAndCheck(n), (!t.categories || t.categories.includes("built-in")) && (this.processLexingErrors(r, i, t), t.stopAfterLexingErrors && i.some((e) => e.data?.code === DocumentValidator.LexingError) || (this.processParsingErrors(r, i, t), t.stopAfterParsingErrors && i.some((e) => e.data?.code === DocumentValidator.ParsingError)) || (this.processLinkingErrors(e, i, t), t.stopAfterLinkingErrors && i.some((e) => e.data?.code === DocumentValidator.LinkingError)))) return i;
		try {
			i.push(...await this.validateAst(r.value, t, n));
		} catch (e) {
			if (isOperationCancelled(e)) throw e;
			console.error("An error occurred during validation:", e);
		}
		return await interruptAndCheck(n), i;
	}
	processLexingErrors(e, t, n) {
		let r = [...e.lexerErrors, ...e.lexerReport?.diagnostics ?? []];
		for (let e of r) {
			let n = e.severity ?? "error", r = {
				severity: toDiagnosticSeverity(n),
				range: {
					start: {
						line: e.line - 1,
						character: e.column - 1
					},
					end: {
						line: e.line - 1,
						character: e.column + e.length - 1
					}
				},
				message: e.message,
				data: toDiagnosticData(n),
				source: this.getSource()
			};
			t.push(r);
		}
	}
	processParsingErrors(e, t, n) {
		for (let n of e.parserErrors) {
			let e;
			if (isNaN(n.token.startOffset)) {
				if ("previousToken" in n) {
					let t = n.previousToken;
					if (isNaN(t.startOffset)) {
						let t = {
							line: 0,
							character: 0
						};
						e = {
							start: t,
							end: t
						};
					} else {
						let n = {
							line: t.endLine - 1,
							character: t.endColumn
						};
						e = {
							start: n,
							end: n
						};
					}
				}
			} else e = tokenToRange(n.token);
			if (e) {
				let r = {
					severity: toDiagnosticSeverity("error"),
					range: e,
					message: n.message,
					data: diagnosticData(DocumentValidator.ParsingError),
					source: this.getSource()
				};
				t.push(r);
			}
		}
	}
	processLinkingErrors(e, t, n) {
		for (let n of e.references) {
			let e = n.error;
			if (e) {
				let r = {
					node: e.info.container,
					range: n.$refNode?.range,
					property: e.info.property,
					index: e.info.index,
					data: {
						code: DocumentValidator.LinkingError,
						containerType: e.info.container.$type,
						property: e.info.property,
						refText: e.info.reference.$refText
					}
				};
				t.push(this.toDiagnostic("error", e.message, r));
			}
		}
	}
	async validateAst(e, t, n = cancellation_exports.CancellationToken.None) {
		let r = [], i = /* @__PURE__ */ __name((e, t, n) => {
			r.push(this.toDiagnostic(e, t, n));
		}, "acceptor");
		return await this.validateAstBefore(e, t, i, n), await this.validateAstNodes(e, t, i, n), await this.validateAstAfter(e, t, i, n), r;
	}
	async validateAstBefore(e, t, n, r = cancellation_exports.CancellationToken.None) {
		let i = this.validationRegistry.checksBefore;
		for (let a of i) await interruptAndCheck(r), await a(e, n, t.categories ?? [], r);
	}
	async validateAstNodes(e, t, n, r = cancellation_exports.CancellationToken.None) {
		if (this.profiler?.isActive("validating")) {
			let i = this.profiler.createTask("validating", this.languageId);
			i.start();
			try {
				let a = streamAst(e).iterator();
				for (let e of a) {
					i.startSubTask(e.$type);
					let o = this.validateSingleNodeOptions(e, t);
					if (o.validateNode) try {
						let i = this.validationRegistry.getChecks(e.$type, t.categories);
						for (let t of i) await t(e, n, r);
					} finally {
						i.stopSubTask(e.$type);
					}
					o.validateChildren || a.prune();
				}
			} finally {
				i.stop();
			}
		} else {
			let i = streamAst(e).iterator();
			for (let e of i) {
				await interruptAndCheck(r);
				let a = this.validateSingleNodeOptions(e, t);
				if (a.validateNode) {
					let i = this.validationRegistry.getChecks(e.$type, t.categories);
					for (let t of i) await t(e, n, r);
				}
				a.validateChildren || i.prune();
			}
		}
	}
	validateSingleNodeOptions(e, t) {
		return VALIDATE_EACH_NODE;
	}
	async validateAstAfter(e, t, n, r = cancellation_exports.CancellationToken.None) {
		let i = this.validationRegistry.checksAfter;
		for (let a of i) await interruptAndCheck(r), await a(e, n, t.categories ?? [], r);
	}
	toDiagnostic(e, t, n) {
		return {
			message: t,
			range: getDiagnosticRange(n),
			severity: toDiagnosticSeverity(e),
			code: n.code,
			codeDescription: n.codeDescription,
			tags: n.tags,
			relatedInformation: n.relatedInformation,
			data: n.data,
			source: this.getSource()
		};
	}
	getSource() {
		return this.metadata.languageId;
	}
};
function getDiagnosticRange(e) {
	if (e.range) return e.range;
	let t;
	return typeof e.property == "string" ? t = findNodeForProperty(e.node.$cstNode, e.property, e.index) : typeof e.keyword == "string" && (t = findNodeForKeyword(e.node.$cstNode, e.keyword, e.index)), t ??= e.node.$cstNode, t ? t.range : {
		start: {
			line: 0,
			character: 0
		},
		end: {
			line: 0,
			character: 0
		}
	};
}
__name(getDiagnosticRange, "getDiagnosticRange");
function toDiagnosticSeverity(e) {
	switch (e) {
		case "error": return 1;
		case "warning": return 2;
		case "info": return 3;
		case "hint": return 4;
		default: throw Error("Invalid diagnostic severity: " + e);
	}
}
__name(toDiagnosticSeverity, "toDiagnosticSeverity");
function toDiagnosticData(e) {
	switch (e) {
		case "error": return diagnosticData(DocumentValidator.LexingError);
		case "warning": return diagnosticData(DocumentValidator.LexingWarning);
		case "info": return diagnosticData(DocumentValidator.LexingInfo);
		case "hint": return diagnosticData(DocumentValidator.LexingHint);
		default: throw Error("Invalid diagnostic severity: " + e);
	}
}
__name(toDiagnosticData, "toDiagnosticData");
var DocumentValidator;
(function(e) {
	e.LexingError = "lexing-error", e.LexingWarning = "lexing-warning", e.LexingInfo = "lexing-info", e.LexingHint = "lexing-hint", e.ParsingError = "parsing-error", e.LinkingError = "linking-error";
})(DocumentValidator ||= {});
var DefaultAstNodeDescriptionProvider = class {
	static #e = __name(this, "DefaultAstNodeDescriptionProvider");
	constructor(e) {
		this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
	}
	createDescription(e, t, n) {
		let r = n ?? getDocument(e);
		t ??= this.nameProvider.getName(e);
		let i = this.astNodeLocator.getAstNodePath(e);
		if (!t) throw Error(`Node at path ${i} has no name.`);
		let a, s = /* @__PURE__ */ __name(() => a ??= toDocumentSegment(this.nameProvider.getNameNode(e) ?? e.$cstNode), "nameSegmentGetter");
		return {
			node: e,
			name: t,
			get nameSegment() {
				return s();
			},
			selectionSegment: toDocumentSegment(e.$cstNode),
			type: e.$type,
			documentUri: r.uri,
			path: i
		};
	}
}, DefaultReferenceDescriptionProvider = class {
	static #e = __name(this, "DefaultReferenceDescriptionProvider");
	constructor(e) {
		this.nodeLocator = e.workspace.AstNodeLocator;
	}
	async createDescriptions(e, t = cancellation_exports.CancellationToken.None) {
		let n = [], r = e.parseResult.value;
		for (let e of streamAst(r)) await interruptAndCheck(t), streamReferences(e).forEach((e) => {
			e.reference.error || n.push(...this.createInfoDescriptions(e));
		});
		return n;
	}
	createInfoDescriptions(e) {
		let t = e.reference;
		if (t.error || !t.$refNode) return [];
		let n = [];
		isReference(t) && t.$nodeDescription ? n = [t.$nodeDescription] : isMultiReference(t) && (n = t.items.map((e) => e.$nodeDescription).filter((e) => e !== void 0));
		let r = getDocument(e.container).uri, i = this.nodeLocator.getAstNodePath(e.container), a = [], o = toDocumentSegment(t.$refNode);
		for (let e of n) a.push({
			sourceUri: r,
			sourcePath: i,
			targetUri: e.documentUri,
			targetPath: e.path,
			segment: o,
			local: UriUtils.equals(e.documentUri, r)
		});
		return a;
	}
}, DefaultAstNodeLocator = class {
	static #e = __name(this, "DefaultAstNodeLocator");
	constructor() {
		this.segmentSeparator = "/", this.indexSeparator = "@";
	}
	getAstNodePath(e) {
		if (e.$container) {
			let t = this.getAstNodePath(e.$container), n = this.getPathSegment(e);
			return t + this.segmentSeparator + n;
		}
		return "";
	}
	getPathSegment({ $containerProperty: e, $containerIndex: t }) {
		if (!e) throw Error("Missing '$containerProperty' in AST node.");
		return t === void 0 ? e : e + this.indexSeparator + t;
	}
	getAstNode(e, t) {
		return t.split(this.segmentSeparator).reduce((e, t) => {
			if (!e || t.length === 0) return e;
			let n = t.indexOf(this.indexSeparator);
			if (n > 0) {
				let r = t.substring(0, n), i = parseInt(t.substring(n + 1));
				return e[r]?.[i];
			}
			return e[t];
		}, e);
	}
}, event_exports = {};
__reExport(event_exports, __toESM(require_events(), 1));
var DefaultConfigurationProvider = class {
	static #e = __name(this, "DefaultConfigurationProvider");
	constructor(e) {
		this._ready = new Deferred(), this.onConfigurationSectionUpdateEmitter = new event_exports.Emitter(), this.settings = {}, this.workspaceConfig = !1, this.serviceRegistry = e.ServiceRegistry;
	}
	get ready() {
		return this._ready.promise;
	}
	initialize(e) {
		this.workspaceConfig = e.capabilities.workspace?.configuration ?? !1;
	}
	async initialized(e) {
		if (this.workspaceConfig) {
			if (e.register) {
				let t = this.serviceRegistry.all;
				e.register({ section: t.map((e) => this.toSectionName(e.LanguageMetaData.languageId)) });
			}
			if (e.fetchConfiguration) {
				let t = this.serviceRegistry.all.map((e) => ({ section: this.toSectionName(e.LanguageMetaData.languageId) })), n = await e.fetchConfiguration(t);
				t.forEach((e, t) => {
					this.updateSectionConfiguration(e.section, n[t]);
				});
			}
		}
		this._ready.resolve();
	}
	updateConfiguration(e) {
		typeof e.settings != "object" || e.settings === null || Object.entries(e.settings).forEach(([e, t]) => {
			this.updateSectionConfiguration(e, t), this.onConfigurationSectionUpdateEmitter.fire({
				section: e,
				configuration: t
			});
		});
	}
	updateSectionConfiguration(e, t) {
		this.settings[e] = t;
	}
	async getConfiguration(e, t) {
		await this.ready;
		let n = this.toSectionName(e);
		if (this.settings[n]) return this.settings[n][t];
	}
	toSectionName(e) {
		return `${e}`;
	}
	get onConfigurationSectionUpdate() {
		return this.onConfigurationSectionUpdateEmitter.event;
	}
}, import_vscode_languageserver_protocol = __toESM(require_main2(), 1), Disposable;
(function(e) {
	function t(e) {
		return { dispose: /* @__PURE__ */ __name(async () => await e(), "dispose") };
	}
	__name(t, "create"), e.create = t;
})(Disposable ||= {});
var DefaultDocumentBuilder = class {
	static #e = __name(this, "DefaultDocumentBuilder");
	constructor(e) {
		this.updateBuildOptions = { validation: { categories: ["built-in", "fast"] } }, this.updateListeners = [], this.buildPhaseListeners = new MultiMap(), this.documentPhaseListeners = new MultiMap(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = DocumentState.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.fileSystemProvider = e.workspace.FileSystemProvider, this.workspaceManager = () => e.workspace.WorkspaceManager, this.serviceRegistry = e.ServiceRegistry;
	}
	async build(e, t = {}, n = cancellation_exports.CancellationToken.None) {
		for (let n of e) {
			let e = n.uri.toString();
			if (n.state === DocumentState.Validated) {
				if (typeof t.validation == "boolean" && t.validation) this.resetToState(n, DocumentState.IndexedReferences);
				else if (typeof t.validation == "object") {
					let r = this.findMissingValidationCategories(n, t);
					r.length > 0 && (this.buildState.set(e, {
						completed: !1,
						options: { validation: { categories: r } },
						result: this.buildState.get(e)?.result
					}), n.state = DocumentState.IndexedReferences);
				}
			} else this.buildState.delete(e);
		}
		this.currentState = DocumentState.Changed, await this.emitUpdate(e.map((e) => e.uri), []), await this.buildDocuments(e, t, n);
	}
	async update(e, t, n = cancellation_exports.CancellationToken.None) {
		this.currentState = DocumentState.Changed;
		let r = [];
		for (let e of t) {
			let t = this.langiumDocuments.deleteDocuments(e);
			for (let e of t) r.push(e.uri), this.cleanUpDeleted(e);
		}
		let i = (await Promise.all(e.map((e) => this.findChangedUris(e)))).flat();
		for (let e of i) {
			let t = this.langiumDocuments.getDocument(e);
			t === void 0 && (t = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, e), t.state = DocumentState.Changed, this.langiumDocuments.addDocument(t)), this.resetToState(t, DocumentState.Changed);
		}
		let a = stream(i).concat(r).map((e) => e.toString()).toSet();
		this.langiumDocuments.all.filter((e) => !a.has(e.uri.toString()) && this.shouldRelink(e, a)).forEach((e) => this.resetToState(e, DocumentState.ComputedScopes)), await this.emitUpdate(i, r), await interruptAndCheck(n);
		let o = this.sortDocuments(this.langiumDocuments.all.filter((e) => e.state < DocumentState.Validated || !this.buildState.get(e.uri.toString())?.completed || this.resultsAreIncomplete(e, this.updateBuildOptions)).toArray());
		await this.buildDocuments(o, this.updateBuildOptions, n);
	}
	resultsAreIncomplete(e, t) {
		return this.findMissingValidationCategories(e, t).length >= 1;
	}
	findMissingValidationCategories(e, t) {
		let n = this.buildState.get(e.uri.toString()), r = this.serviceRegistry.getServices(e.uri).validation.ValidationRegistry.getAllValidationCategories(e), i = n?.result?.validationChecks ? new Set(n?.result?.validationChecks) : n?.completed ? r : /* @__PURE__ */ new Set();
		return stream(t === void 0 || t.validation === !0 ? r : typeof t.validation == "object" ? t.validation.categories ?? r : []).filter((e) => !i.has(e)).toArray();
	}
	async findChangedUris(e) {
		if (this.langiumDocuments.getDocument(e) ?? this.textDocuments?.get(e)) return [e];
		try {
			let t = await this.fileSystemProvider.stat(e);
			if (t.isDirectory) return await this.workspaceManager().searchFolder(e);
			if (this.workspaceManager().shouldIncludeEntry(t)) return [e];
		} catch {}
		return [];
	}
	async emitUpdate(e, t) {
		await Promise.all(this.updateListeners.map((n) => n(e, t)));
	}
	sortDocuments(e) {
		let t = 0, n = e.length - 1;
		for (; t < n;) {
			for (; t < e.length && this.hasTextDocument(e[t]);) t++;
			for (; n >= 0 && !this.hasTextDocument(e[n]);) n--;
			t < n && ([e[t], e[n]] = [e[n], e[t]]);
		}
		return e;
	}
	hasTextDocument(e) {
		return !!this.textDocuments?.get(e.uri);
	}
	shouldRelink(e, t) {
		return e.references.some((e) => e.error !== void 0) ? !0 : this.indexManager.isAffected(e, t);
	}
	onUpdate(e) {
		return this.updateListeners.push(e), Disposable.create(() => {
			let t = this.updateListeners.indexOf(e);
			t >= 0 && this.updateListeners.splice(t, 1);
		});
	}
	resetToState(e, t) {
		switch (t) {
			case DocumentState.Changed:
			case DocumentState.Parsed: this.indexManager.removeContent(e.uri);
			case DocumentState.IndexedContent: e.localSymbols = void 0;
			case DocumentState.ComputedScopes: this.serviceRegistry.getServices(e.uri).references.Linker.unlink(e);
			case DocumentState.Linked: this.indexManager.removeReferences(e.uri);
			case DocumentState.IndexedReferences: e.diagnostics = void 0, this.buildState.delete(e.uri.toString());
			case DocumentState.Validated:
		}
		e.state > t && (e.state = t);
	}
	cleanUpDeleted(e) {
		this.buildState.delete(e.uri.toString()), this.indexManager.remove(e.uri), e.state = DocumentState.Changed;
	}
	async buildDocuments(e, t, n) {
		this.prepareBuild(e, t), await this.runCancelable(e, DocumentState.Parsed, n, (e) => this.langiumDocumentFactory.update(e, n)), await this.runCancelable(e, DocumentState.IndexedContent, n, (e) => this.indexManager.updateContent(e, n)), await this.runCancelable(e, DocumentState.ComputedScopes, n, async (e) => {
			e.localSymbols = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.collectLocalSymbols(e, n);
		});
		let r = e.filter((e) => this.shouldLink(e));
		await this.runCancelable(r, DocumentState.Linked, n, (e) => this.serviceRegistry.getServices(e.uri).references.Linker.link(e, n)), await this.runCancelable(r, DocumentState.IndexedReferences, n, (e) => this.indexManager.updateReferences(e, n));
		let i = e.filter((e) => this.shouldValidate(e) ? !0 : (this.markAsCompleted(e), !1));
		await this.runCancelable(i, DocumentState.Validated, n, async (e) => {
			await this.validate(e, n), this.markAsCompleted(e);
		});
	}
	markAsCompleted(e) {
		let t = this.buildState.get(e.uri.toString());
		t && (t.completed = !0);
	}
	prepareBuild(e, t) {
		for (let n of e) {
			let e = n.uri.toString(), r = this.buildState.get(e);
			(!r || r.completed) && this.buildState.set(e, {
				completed: !1,
				options: t,
				result: r?.result
			});
		}
	}
	async runCancelable(e, t, n, r) {
		for (let i of e) i.state < t && (await interruptAndCheck(n), await r(i), i.state = t, await this.notifyDocumentPhase(i, t, n));
		let i = e.filter((e) => e.state === t);
		await this.notifyBuildPhase(i, t, n), this.currentState = t;
	}
	onBuildPhase(e, t) {
		return this.buildPhaseListeners.add(e, t), Disposable.create(() => {
			this.buildPhaseListeners.delete(e, t);
		});
	}
	onDocumentPhase(e, t) {
		return this.documentPhaseListeners.add(e, t), Disposable.create(() => {
			this.documentPhaseListeners.delete(e, t);
		});
	}
	waitUntil(e, t, n) {
		let r;
		return t && "path" in t ? r = t : n = t, n ??= cancellation_exports.CancellationToken.None, r ? this.awaitDocumentState(e, r, n) : this.awaitBuilderState(e, n);
	}
	awaitDocumentState(e, t, n) {
		let r = this.langiumDocuments.getDocument(t);
		if (r) {
			if (r.state >= e) return Promise.resolve(t);
			if (n.isCancellationRequested) return Promise.reject(OperationCancelled);
			if (this.currentState >= e && e > r.state) return Promise.reject(new import_vscode_languageserver_protocol.ResponseError(import_vscode_languageserver_protocol.LSPErrorCodes.RequestFailed, `Document state of ${t.toString()} is ${DocumentState[r.state]}, requiring ${DocumentState[e]}, but workspace state is already ${DocumentState[this.currentState]}. Returning undefined.`));
		} else return Promise.reject(new import_vscode_languageserver_protocol.ResponseError(import_vscode_languageserver_protocol.LSPErrorCodes.ServerCancelled, `No document found for URI: ${t.toString()}`));
		return new Promise((r, i) => {
			let a = this.onDocumentPhase(e, (e) => {
				UriUtils.equals(e.uri, t) && (a.dispose(), o.dispose(), r(e.uri));
			}), o = n.onCancellationRequested(() => {
				a.dispose(), o.dispose(), i(OperationCancelled);
			});
		});
	}
	awaitBuilderState(e, t) {
		return this.currentState >= e ? Promise.resolve() : t.isCancellationRequested ? Promise.reject(OperationCancelled) : new Promise((n, r) => {
			let i = this.onBuildPhase(e, () => {
				i.dispose(), a.dispose(), n();
			}), a = t.onCancellationRequested(() => {
				i.dispose(), a.dispose(), r(OperationCancelled);
			});
		});
	}
	async notifyDocumentPhase(e, t, n) {
		let r = this.documentPhaseListeners.get(t).slice();
		for (let t of r) try {
			await interruptAndCheck(n), await t(e, n);
		} catch (e) {
			if (!isOperationCancelled(e)) throw e;
		}
	}
	async notifyBuildPhase(e, t, n) {
		if (e.length === 0) return;
		let r = this.buildPhaseListeners.get(t).slice();
		for (let t of r) await interruptAndCheck(n), await t(e, n);
	}
	shouldLink(e) {
		return this.getBuildOptions(e).eagerLinking ?? !0;
	}
	shouldValidate(e) {
		return !!this.getBuildOptions(e).validation;
	}
	async validate(e, t) {
		let n = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, r = this.getBuildOptions(e), i = typeof r.validation == "object" ? { ...r.validation } : {};
		i.categories = this.findMissingValidationCategories(e, r);
		let a = await n.validateDocument(e, i, t);
		e.diagnostics ? e.diagnostics.push(...a) : e.diagnostics = a;
		let o = this.buildState.get(e.uri.toString());
		o && (o.result ??= {}, o.result.validationChecks ? o.result.validationChecks = stream(o.result.validationChecks).concat(i.categories).distinct().toArray() : o.result.validationChecks = [...i.categories]);
	}
	getBuildOptions(e) {
		return this.buildState.get(e.uri.toString())?.options ?? {};
	}
}, DefaultIndexManager = class {
	static #e = __name(this, "DefaultIndexManager");
	constructor(e) {
		this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new ContextCache(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
	}
	findAllReferences(e, t) {
		let n = getDocument(e).uri, r = [];
		return this.referenceIndex.forEach((e) => {
			e.forEach((e) => {
				UriUtils.equals(e.targetUri, n) && e.targetPath === t && r.push(e);
			});
		}), stream(r);
	}
	allElements(e, t) {
		let n = stream(this.symbolIndex.keys());
		return t && (n = n.filter((e) => !t || t.has(e))), n.map((t) => this.getFileDescriptions(t, e)).flat();
	}
	getFileDescriptions(e, t) {
		return t ? this.symbolByTypeIndex.get(e, t, () => (this.symbolIndex.get(e) ?? []).filter((e) => this.astReflection.isSubtype(e.type, t))) : this.symbolIndex.get(e) ?? [];
	}
	remove(e) {
		this.removeContent(e), this.removeReferences(e);
	}
	removeContent(e) {
		let t = e.toString();
		this.symbolIndex.delete(t), this.symbolByTypeIndex.clear(t);
	}
	removeReferences(e) {
		let t = e.toString();
		this.referenceIndex.delete(t);
	}
	async updateContent(e, t = cancellation_exports.CancellationToken.None) {
		let n = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.collectExportedSymbols(e, t), r = e.uri.toString();
		this.symbolIndex.set(r, n), this.symbolByTypeIndex.clear(r);
	}
	async updateReferences(e, t = cancellation_exports.CancellationToken.None) {
		let n = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, t);
		this.referenceIndex.set(e.uri.toString(), n);
	}
	isAffected(e, t) {
		let n = this.referenceIndex.get(e.uri.toString());
		return n ? n.some((e) => !e.local && t.has(e.targetUri.toString())) : !1;
	}
}, DefaultWorkspaceManager = class {
	static #e = __name(this, "DefaultWorkspaceManager");
	constructor(e) {
		this.initialBuildOptions = {}, this._ready = new Deferred(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
	}
	get ready() {
		return this._ready.promise;
	}
	get workspaceFolders() {
		return this.folders;
	}
	initialize(e) {
		this.folders = e.workspaceFolders ?? void 0;
	}
	initialized(e) {
		return this.mutex.write((e) => this.initializeWorkspace(this.folders ?? [], e));
	}
	async initializeWorkspace(e, t = cancellation_exports.CancellationToken.None) {
		let n = await this.performStartup(e);
		await interruptAndCheck(t), await this.documentBuilder.build(n, this.initialBuildOptions, t);
	}
	async performStartup(e) {
		let t = [], n = /* @__PURE__ */ __name((e) => {
			t.push(e), this.langiumDocuments.hasDocument(e.uri) || this.langiumDocuments.addDocument(e);
		}, "collector");
		await this.loadAdditionalDocuments(e, n);
		let r = [];
		await Promise.all(e.map((e) => this.getRootFolder(e)).map(async (e) => this.traverseFolder(e, r)));
		let i = stream(r).distinct((e) => e.toString()).filter((e) => !this.langiumDocuments.hasDocument(e));
		return await this.loadWorkspaceDocuments(i, n), this._ready.resolve(), t;
	}
	async loadWorkspaceDocuments(e, t) {
		await Promise.all(e.map(async (e) => {
			t(await this.langiumDocuments.getOrCreateDocument(e));
		}));
	}
	loadAdditionalDocuments(e, t) {
		return Promise.resolve();
	}
	getRootFolder(e) {
		return URI2.parse(e.uri);
	}
	async traverseFolder(e, t) {
		try {
			let n = await this.fileSystemProvider.readDirectory(e);
			await Promise.all(n.map(async (e) => {
				this.shouldIncludeEntry(e) && (e.isDirectory ? await this.traverseFolder(e.uri, t) : e.isFile && t.push(e.uri));
			}));
		} catch (t) {
			console.error("Failure to read directory content of " + e.toString(!0), t);
		}
	}
	async searchFolder(e) {
		let t = [];
		return await this.traverseFolder(e, t), t;
	}
	shouldIncludeEntry(e) {
		let t = UriUtils.basename(e.uri);
		return t.startsWith(".") ? !1 : e.isDirectory ? t !== "node_modules" && t !== "out" : e.isFile ? this.serviceRegistry.hasServices(e.uri) : !1;
	}
}, DefaultLexerErrorMessageProvider = class {
	static #e = __name(this, "DefaultLexerErrorMessageProvider");
	buildUnexpectedCharactersMessage(e, t, n, r, i) {
		return defaultLexerErrorProvider.buildUnexpectedCharactersMessage(e, t, n, r, i);
	}
	buildUnableToPopLexerModeMessage(e) {
		return defaultLexerErrorProvider.buildUnableToPopLexerModeMessage(e);
	}
}, DEFAULT_TOKENIZE_OPTIONS = { mode: "full" }, DefaultLexer = class {
	static #e = __name(this, "DefaultLexer");
	constructor(e) {
		this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
		let t = this.tokenBuilder.buildTokens(e.Grammar, { caseInsensitive: e.LanguageMetaData.caseInsensitive });
		this.tokenTypes = this.toTokenTypeDictionary(t), this.chevrotainLexer = new Lexer(isTokenTypeDictionary(t) ? Object.values(t) : t, {
			positionTracking: "full",
			skipValidations: e.LanguageMetaData.mode === "production",
			errorMessageProvider: this.errorMessageProvider
		});
	}
	get definition() {
		return this.tokenTypes;
	}
	tokenize(e, t = DEFAULT_TOKENIZE_OPTIONS) {
		let n = this.chevrotainLexer.tokenize(e);
		return {
			tokens: n.tokens,
			errors: n.errors,
			hidden: n.groups.hidden ?? [],
			report: this.tokenBuilder.flushLexingReport?.(e)
		};
	}
	toTokenTypeDictionary(e) {
		if (isTokenTypeDictionary(e)) return e;
		let t = isIMultiModeLexerDefinition(e) ? Object.values(e.modes).flat() : e, n = {};
		return t.forEach((e) => n[e.name] = e), n;
	}
};
function isTokenTypeArray(e) {
	return Array.isArray(e) && (e.length === 0 || "name" in e[0]);
}
__name(isTokenTypeArray, "isTokenTypeArray");
function isIMultiModeLexerDefinition(e) {
	return e && "modes" in e && "defaultMode" in e;
}
__name(isIMultiModeLexerDefinition, "isIMultiModeLexerDefinition");
function isTokenTypeDictionary(e) {
	return !isTokenTypeArray(e) && !isIMultiModeLexerDefinition(e);
}
__name(isTokenTypeDictionary, "isTokenTypeDictionary"), init_main();
function parseJSDoc(e, t, n) {
	let r, i;
	typeof e == "string" ? (i = t, r = n) : (i = e.range.start, r = t), i ||= Position.create(0, 0);
	let a = getLines(e), o = normalizeOptions(r);
	return parseJSDocComment({
		index: 0,
		tokens: tokenize({
			lines: a,
			position: i,
			options: o
		}),
		position: i
	});
}
__name(parseJSDoc, "parseJSDoc");
function isJSDoc(e, t) {
	let n = normalizeOptions(t), r = getLines(e);
	if (r.length === 0) return !1;
	let i = r[0], a = r[r.length - 1], o = n.start, s = n.end;
	return !!o?.exec(i) && !!s?.exec(a);
}
__name(isJSDoc, "isJSDoc");
function getLines(e) {
	let t = "";
	return t = typeof e == "string" ? e : e.text, t.split(NEWLINE_REGEXP);
}
__name(getLines, "getLines");
var tagRegex = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, inlineTagRegex = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function tokenize(e) {
	let t = [], n = e.position.line, r = e.position.character;
	for (let i = 0; i < e.lines.length; i++) {
		let a = i === 0, o = i === e.lines.length - 1, s = e.lines[i], c = 0;
		if (a && e.options.start) {
			let t = e.options.start?.exec(s);
			t && (c = t.index + t[0].length);
		} else {
			let t = e.options.line?.exec(s);
			t && (c = t.index + t[0].length);
		}
		if (o) {
			let t = e.options.end?.exec(s);
			t && (s = s.substring(0, t.index));
		}
		if (s = s.substring(0, lastCharacter(s)), skipWhitespace(s, c) >= s.length) {
			if (t.length > 0) {
				let e = Position.create(n, r);
				t.push({
					type: "break",
					content: "",
					range: Range.create(e, e)
				});
			}
		} else {
			tagRegex.lastIndex = c;
			let e = tagRegex.exec(s);
			if (e) {
				let i = e[0], a = e[1], o = Position.create(n, r + c), l = Position.create(n, r + c + i.length);
				t.push({
					type: "tag",
					content: a,
					range: Range.create(o, l)
				}), c += i.length, c = skipWhitespace(s, c);
			}
			if (c < s.length) {
				let e = s.substring(c), i = Array.from(e.matchAll(inlineTagRegex));
				t.push(...buildInlineTokens(i, e, n, r + c));
			}
		}
		n++, r = 0;
	}
	return t.length > 0 && t[t.length - 1].type === "break" ? t.slice(0, -1) : t;
}
__name(tokenize, "tokenize");
function buildInlineTokens(e, t, n, r) {
	let i = [];
	if (e.length === 0) {
		let e = Position.create(n, r), a = Position.create(n, r + t.length);
		i.push({
			type: "text",
			content: t,
			range: Range.create(e, a)
		});
	} else {
		let a = 0;
		for (let o of e) {
			let e = o.index, s = t.substring(a, e);
			s.length > 0 && i.push({
				type: "text",
				content: t.substring(a, e),
				range: Range.create(Position.create(n, a + r), Position.create(n, e + r))
			});
			let c = s.length + 1, l = o[1];
			if (i.push({
				type: "inline-tag",
				content: l,
				range: Range.create(Position.create(n, a + c + r), Position.create(n, a + c + l.length + r))
			}), c += l.length, o.length === 4) {
				c += o[2].length;
				let e = o[3];
				i.push({
					type: "text",
					content: e,
					range: Range.create(Position.create(n, a + c + r), Position.create(n, a + c + e.length + r))
				});
			} else i.push({
				type: "text",
				content: "",
				range: Range.create(Position.create(n, a + c + r), Position.create(n, a + c + r))
			});
			a = e + o[0].length;
		}
		let o = t.substring(a);
		o.length > 0 && i.push({
			type: "text",
			content: o,
			range: Range.create(Position.create(n, a + r), Position.create(n, a + r + o.length))
		});
	}
	return i;
}
__name(buildInlineTokens, "buildInlineTokens");
var nonWhitespaceRegex = /\S/, whitespaceEndRegex = /\s*$/;
function skipWhitespace(e, t) {
	let n = e.substring(t).match(nonWhitespaceRegex);
	return n ? t + n.index : e.length;
}
__name(skipWhitespace, "skipWhitespace");
function lastCharacter(e) {
	let t = e.match(whitespaceEndRegex);
	if (t && typeof t.index == "number") return t.index;
}
__name(lastCharacter, "lastCharacter");
function parseJSDocComment(e) {
	let t = Position.create(e.position.line, e.position.character);
	if (e.tokens.length === 0) return new JSDocCommentImpl([], Range.create(t, t));
	let n = [];
	for (; e.index < e.tokens.length;) {
		let t = parseJSDocElement(e, n[n.length - 1]);
		t && n.push(t);
	}
	let r = n[0]?.range.start ?? t, i = n[n.length - 1]?.range.end ?? t;
	return new JSDocCommentImpl(n, Range.create(r, i));
}
__name(parseJSDocComment, "parseJSDocComment");
function parseJSDocElement(e, t) {
	let n = e.tokens[e.index];
	if (n.type === "tag") return parseJSDocTag(e, !1);
	if (n.type === "text" || n.type === "inline-tag") return parseJSDocText(e);
	appendEmptyLine(n, t), e.index++;
}
__name(parseJSDocElement, "parseJSDocElement");
function appendEmptyLine(e, t) {
	if (t) {
		let n = new JSDocLineImpl("", e.range);
		"inlines" in t ? t.inlines.push(n) : t.content.inlines.push(n);
	}
}
__name(appendEmptyLine, "appendEmptyLine");
function parseJSDocText(e) {
	let t = e.tokens[e.index], n = t, r = t, i = [];
	for (; t && t.type !== "break" && t.type !== "tag";) i.push(parseJSDocInline(e)), r = t, t = e.tokens[e.index];
	return new JSDocTextImpl(i, Range.create(n.range.start, r.range.end));
}
__name(parseJSDocText, "parseJSDocText");
function parseJSDocInline(e) {
	return e.tokens[e.index].type === "inline-tag" ? parseJSDocTag(e, !0) : parseJSDocLine(e);
}
__name(parseJSDocInline, "parseJSDocInline");
function parseJSDocTag(e, t) {
	let n = e.tokens[e.index++], r = n.content.substring(1);
	if (e.tokens[e.index]?.type === "text") if (t) {
		let i = parseJSDocLine(e);
		return new JSDocTagImpl(r, new JSDocTextImpl([i], i.range), t, Range.create(n.range.start, i.range.end));
	} else {
		let i = parseJSDocText(e);
		return new JSDocTagImpl(r, i, t, Range.create(n.range.start, i.range.end));
	}
	else {
		let e = n.range;
		return new JSDocTagImpl(r, new JSDocTextImpl([], e), t, e);
	}
}
__name(parseJSDocTag, "parseJSDocTag");
function parseJSDocLine(e) {
	let t = e.tokens[e.index++];
	return new JSDocLineImpl(t.content, t.range);
}
__name(parseJSDocLine, "parseJSDocLine");
function normalizeOptions(e) {
	if (!e) return normalizeOptions({
		start: "/**",
		end: "*/",
		line: "*"
	});
	let { start: t, end: n, line: r } = e;
	return {
		start: normalizeOption(t, !0),
		end: normalizeOption(n, !1),
		line: normalizeOption(r, !0)
	};
}
__name(normalizeOptions, "normalizeOptions");
function normalizeOption(e, t) {
	if (typeof e == "string" || typeof e == "object") {
		let n = typeof e == "string" ? escapeRegExp(e) : e.source;
		return t ? /* @__PURE__ */ RegExp(`^\\s*${n}`) : /* @__PURE__ */ RegExp(`\\s*${n}\\s*$`);
	} else return e;
}
__name(normalizeOption, "normalizeOption");
var JSDocCommentImpl = class {
	static #e = __name(this, "JSDocCommentImpl");
	constructor(e, t) {
		this.elements = e, this.range = t;
	}
	getTag(e) {
		return this.getAllTags().find((t) => t.name === e);
	}
	getTags(e) {
		return this.getAllTags().filter((t) => t.name === e);
	}
	getAllTags() {
		return this.elements.filter((e) => "name" in e);
	}
	toString() {
		let e = "";
		for (let t of this.elements) if (e.length === 0) e = t.toString();
		else {
			let n = t.toString();
			e += fillNewlines(e) + n;
		}
		return e.trim();
	}
	toMarkdown(e) {
		let t = "";
		for (let n of this.elements) if (t.length === 0) t = n.toMarkdown(e);
		else {
			let r = n.toMarkdown(e);
			t += fillNewlines(t) + r;
		}
		return t.trim();
	}
}, JSDocTagImpl = class {
	static #e = __name(this, "JSDocTagImpl");
	constructor(e, t, n, r) {
		this.name = e, this.content = t, this.inline = n, this.range = r;
	}
	toString() {
		let e = `@${this.name}`, t = this.content.toString();
		return this.content.inlines.length === 1 ? e = `${e} ${t}` : this.content.inlines.length > 1 && (e = `${e}
${t}`), this.inline ? `{${e}}` : e;
	}
	toMarkdown(e) {
		return e?.renderTag?.(this) ?? this.toMarkdownDefault(e);
	}
	toMarkdownDefault(e) {
		let t = this.content.toMarkdown(e);
		if (this.inline) {
			let n = renderInlineTag(this.name, t, e ?? {});
			if (typeof n == "string") return n;
		}
		let n = "";
		e?.tag === "italic" || e?.tag === void 0 ? n = "*" : e?.tag === "bold" ? n = "**" : e?.tag === "bold-italic" && (n = "***");
		let r = `${n}@${this.name}${n}`;
		return this.content.inlines.length === 1 ? r = `${r} \u2014 ${t}` : this.content.inlines.length > 1 && (r = `${r}
${t}`), this.inline ? `{${r}}` : r;
	}
};
function renderInlineTag(e, t, n) {
	if (e === "linkplain" || e === "linkcode" || e === "link") {
		let r = t.indexOf(" "), i = t;
		if (r > 0) {
			let e = skipWhitespace(t, r);
			i = t.substring(e), t = t.substring(0, r);
		}
		return (e === "linkcode" || e === "link" && n.link === "code") && (i = `\`${i}\``), n.renderLink?.(t, i) ?? renderLinkDefault(t, i);
	}
}
__name(renderInlineTag, "renderInlineTag");
function renderLinkDefault(e, t) {
	try {
		return URI2.parse(e, !0), `[${t}](${e})`;
	} catch {
		return e;
	}
}
__name(renderLinkDefault, "renderLinkDefault");
var JSDocTextImpl = class {
	static #e = __name(this, "JSDocTextImpl");
	constructor(e, t) {
		this.inlines = e, this.range = t;
	}
	toString() {
		let e = "";
		for (let t = 0; t < this.inlines.length; t++) {
			let n = this.inlines[t], r = this.inlines[t + 1];
			e += n.toString(), r && r.range.start.line > n.range.start.line && (e += "\n");
		}
		return e;
	}
	toMarkdown(e) {
		let t = "";
		for (let n = 0; n < this.inlines.length; n++) {
			let r = this.inlines[n], i = this.inlines[n + 1];
			t += r.toMarkdown(e), i && i.range.start.line > r.range.start.line && (t += "\n");
		}
		return t;
	}
}, JSDocLineImpl = class {
	static #e = __name(this, "JSDocLineImpl");
	constructor(e, t) {
		this.text = e, this.range = t;
	}
	toString() {
		return this.text;
	}
	toMarkdown() {
		return this.text;
	}
};
function fillNewlines(e) {
	return e.endsWith("\n") ? "\n" : "\n\n";
}
__name(fillNewlines, "fillNewlines");
var JSDocDocumentationProvider = class {
	static #e = __name(this, "JSDocDocumentationProvider");
	constructor(e) {
		this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
	}
	getDocumentation(e) {
		let t = this.commentProvider.getComment(e);
		if (t && isJSDoc(t)) return parseJSDoc(t).toMarkdown({
			renderLink: /* @__PURE__ */ __name((t, n) => this.documentationLinkRenderer(e, t, n), "renderLink"),
			renderTag: /* @__PURE__ */ __name((t) => this.documentationTagRenderer(e, t), "renderTag")
		});
	}
	documentationLinkRenderer(e, t, n) {
		let r = this.findNameInLocalSymbols(e, t) ?? this.findNameInGlobalScope(e, t);
		if (r && r.nameSegment) {
			let e = r.nameSegment.range.start.line + 1, t = r.nameSegment.range.start.character + 1;
			return `[${n}](${r.documentUri.with({ fragment: `L${e},${t}` }).toString()})`;
		} else return;
	}
	documentationTagRenderer(e, t) {}
	findNameInLocalSymbols(e, t) {
		let n = getDocument(e).localSymbols;
		if (!n) return;
		let r = e;
		do {
			let e = n.getStream(r).find((e) => e.name === t);
			if (e) return e;
			r = r.$container;
		} while (r);
	}
	findNameInGlobalScope(e, t) {
		return this.indexManager.allElements().find((e) => e.name === t);
	}
}, DefaultCommentProvider = class {
	static #e = __name(this, "DefaultCommentProvider");
	constructor(e) {
		this.grammarConfig = () => e.parser.GrammarConfig;
	}
	getComment(e) {
		return isAstNodeWithComment(e) ? e.$comment : findCommentNode(e.$cstNode, this.grammarConfig().multilineCommentRules)?.text;
	}
}, DefaultAsyncParser = class {
	static #e = __name(this, "DefaultAsyncParser");
	constructor(e) {
		this.syncParser = e.parser.LangiumParser;
	}
	parse(e, t) {
		return Promise.resolve(this.syncParser.parse(e));
	}
}, AbstractThreadedAsyncParser = class {
	static #e = __name(this, "AbstractThreadedAsyncParser");
	constructor(e) {
		this.threadCount = 8, this.terminationDelay = 200, this.workerPool = [], this.queue = [], this.hydrator = e.serializer.Hydrator;
	}
	initializeWorkers() {
		for (; this.workerPool.length < this.threadCount;) {
			let e = this.createWorker();
			e.onReady(() => {
				if (this.queue.length > 0) {
					let t = this.queue.shift();
					t && (e.lock(), t.resolve(e));
				}
			}), this.workerPool.push(e);
		}
	}
	async parse(e, t) {
		let n = await this.acquireParserWorker(t), r = new Deferred(), i, a = t.onCancellationRequested(() => {
			i = setTimeout(() => {
				this.terminateWorker(n);
			}, this.terminationDelay);
		});
		return n.parse(e).then((e) => {
			let t = this.hydrator.hydrate(e);
			r.resolve(t);
		}).catch((e) => {
			r.reject(e);
		}).finally(() => {
			a.dispose(), clearTimeout(i);
		}), r.promise;
	}
	terminateWorker(e) {
		e.terminate();
		let t = this.workerPool.indexOf(e);
		t >= 0 && this.workerPool.splice(t, 1);
	}
	async acquireParserWorker(e) {
		this.initializeWorkers();
		for (let e of this.workerPool) if (e.ready) return e.lock(), e;
		let t = new Deferred();
		return e.onCancellationRequested(() => {
			let e = this.queue.indexOf(t);
			e >= 0 && this.queue.splice(e, 1), t.reject(OperationCancelled);
		}), this.queue.push(t), t.promise;
	}
}, ParserWorker = class {
	static #e = __name(this, "ParserWorker");
	get ready() {
		return this._ready;
	}
	get onReady() {
		return this.onReadyEmitter.event;
	}
	constructor(e, t, n, r) {
		this.onReadyEmitter = new event_exports.Emitter(), this.deferred = new Deferred(), this._ready = !0, this._parsing = !1, this.sendMessage = e, this._terminate = r, t((e) => {
			let t = e;
			this.deferred.resolve(t), this.unlock();
		}), n((e) => {
			this.deferred.reject(e), this.unlock();
		});
	}
	terminate() {
		this.deferred.reject(OperationCancelled), this._terminate();
	}
	lock() {
		this._ready = !1;
	}
	unlock() {
		this._parsing = !1, this._ready = !0, this.onReadyEmitter.fire();
	}
	parse(e) {
		if (this._parsing) throw Error("Parser worker is busy");
		return this._parsing = !0, this.deferred = new Deferred(), this.sendMessage(e), this.deferred.promise;
	}
}, DefaultWorkspaceLock = class {
	static #e = __name(this, "DefaultWorkspaceLock");
	constructor() {
		this.previousTokenSource = new cancellation_exports.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = !0;
	}
	write(e) {
		this.cancelWrite();
		let t = startCancelableOperation();
		return this.previousTokenSource = t, this.enqueue(this.writeQueue, e, t.token);
	}
	read(e) {
		return this.enqueue(this.readQueue, e);
	}
	enqueue(e, t, n = cancellation_exports.CancellationToken.None) {
		let r = new Deferred(), i = {
			action: t,
			deferred: r,
			cancellationToken: n
		};
		return e.push(i), this.performNextOperation(), r.promise;
	}
	async performNextOperation() {
		if (!this.done) return;
		let e = [];
		if (this.writeQueue.length > 0) e.push(this.writeQueue.shift());
		else if (this.readQueue.length > 0) e.push(...this.readQueue.splice(0, this.readQueue.length));
		else return;
		this.done = !1, await Promise.all(e.map(async ({ action: e, deferred: t, cancellationToken: n }) => {
			try {
				let r = await Promise.resolve().then(() => e(n));
				t.resolve(r);
			} catch (e) {
				isOperationCancelled(e) ? t.resolve(void 0) : t.reject(e);
			}
		})), this.done = !0, this.performNextOperation();
	}
	cancelWrite() {
		this.previousTokenSource.cancel();
	}
}, DefaultHydrator = class {
	static #e = __name(this, "DefaultHydrator");
	constructor(e) {
		this.grammarElementIdMap = new BiMap(), this.tokenTypeIdMap = new BiMap(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
	}
	dehydrate(e) {
		return {
			lexerErrors: e.lexerErrors,
			lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
			parserErrors: e.parserErrors.map((e) => ({
				...e,
				message: e.message
			})),
			value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
		};
	}
	dehydrateLexerReport(e) {
		return e;
	}
	createDehyrationContext(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
		for (let n of streamAst(e)) t.set(n, {});
		if (e.$cstNode) for (let t of streamCst(e.$cstNode)) n.set(t, {});
		return {
			astNodes: t,
			cstNodes: n
		};
	}
	dehydrateAstNode(e, t) {
		let n = t.astNodes.get(e);
		n.$type = e.$type, n.$containerIndex = e.$containerIndex, n.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (n.$cstNode = this.dehydrateCstNode(e.$cstNode, t));
		for (let [r, i] of Object.entries(e)) if (!r.startsWith("$")) if (Array.isArray(i)) {
			let e = [];
			n[r] = e;
			for (let n of i) isAstNode(n) ? e.push(this.dehydrateAstNode(n, t)) : isReference(n) ? e.push(this.dehydrateReference(n, t)) : e.push(n);
		} else isAstNode(i) ? n[r] = this.dehydrateAstNode(i, t) : isReference(i) ? n[r] = this.dehydrateReference(i, t) : i !== void 0 && (n[r] = i);
		return n;
	}
	dehydrateReference(e, t) {
		let n = {};
		return n.$refText = e.$refText, e.$refNode && (n.$refNode = t.cstNodes.get(e.$refNode)), n;
	}
	dehydrateCstNode(e, t) {
		let n = t.cstNodes.get(e);
		return isRootCstNode(e) ? n.fullText = e.fullText : n.grammarSource = this.getGrammarElementId(e.grammarSource), n.hidden = e.hidden, n.astNode = t.astNodes.get(e.astNode), isCompositeCstNode(e) ? n.content = e.content.map((e) => this.dehydrateCstNode(e, t)) : isLeafCstNode(e) && (n.tokenType = e.tokenType.name, n.offset = e.offset, n.length = e.length, n.startLine = e.range.start.line, n.startColumn = e.range.start.character, n.endLine = e.range.end.line, n.endColumn = e.range.end.character), n;
	}
	hydrate(e) {
		let t = e.value, n = this.createHydrationContext(t);
		return "$cstNode" in t && this.hydrateCstNode(t.$cstNode, n), {
			lexerErrors: e.lexerErrors,
			lexerReport: e.lexerReport,
			parserErrors: e.parserErrors,
			value: this.hydrateAstNode(t, n)
		};
	}
	createHydrationContext(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
		for (let n of streamAst(e)) t.set(n, {});
		let r;
		if (e.$cstNode) for (let t of streamCst(e.$cstNode)) {
			let e;
			"fullText" in t ? (e = new RootCstNodeImpl(t.fullText), r = e) : "content" in t ? e = new CompositeCstNodeImpl() : "tokenType" in t && (e = this.hydrateCstLeafNode(t)), e && (n.set(t, e), e.root = r);
		}
		return {
			astNodes: t,
			cstNodes: n
		};
	}
	hydrateAstNode(e, t) {
		let n = t.astNodes.get(e);
		n.$type = e.$type, n.$containerIndex = e.$containerIndex, n.$containerProperty = e.$containerProperty, e.$cstNode && (n.$cstNode = t.cstNodes.get(e.$cstNode));
		for (let [r, i] of Object.entries(e)) if (!r.startsWith("$")) if (Array.isArray(i)) {
			let e = [];
			n[r] = e;
			for (let a of i) isAstNode(a) ? e.push(this.setParent(this.hydrateAstNode(a, t), n)) : isReference(a) ? e.push(this.hydrateReference(a, n, r, t)) : e.push(a);
		} else isAstNode(i) ? n[r] = this.setParent(this.hydrateAstNode(i, t), n) : isReference(i) ? n[r] = this.hydrateReference(i, n, r, t) : i !== void 0 && (n[r] = i);
		return n;
	}
	setParent(e, t) {
		return e.$container = t, e;
	}
	hydrateReference(e, t, n, r) {
		return this.linker.buildReference(t, n, r.cstNodes.get(e.$refNode), e.$refText);
	}
	hydrateCstNode(e, t, n = 0) {
		let r = t.cstNodes.get(e);
		if (typeof e.grammarSource == "number" && (r.grammarSource = this.getGrammarElement(e.grammarSource)), r.astNode = t.astNodes.get(e.astNode), isCompositeCstNode(r)) for (let i of e.content) {
			let e = this.hydrateCstNode(i, t, n++);
			r.content.push(e);
		}
		return r;
	}
	hydrateCstLeafNode(e) {
		let t = this.getTokenType(e.tokenType), n = e.offset, r = e.length, i = e.startLine, a = e.startColumn, o = e.endLine, s = e.endColumn, c = e.hidden;
		return new LeafCstNodeImpl(n, r, {
			start: {
				line: i,
				character: a
			},
			end: {
				line: o,
				character: s
			}
		}, t, c);
	}
	getTokenType(e) {
		return this.lexer.definition[e];
	}
	getGrammarElementId(e) {
		if (e) return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
	}
	getGrammarElement(e) {
		return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
	}
	createGrammarElementIdMap() {
		let e = 0;
		for (let t of streamAst(this.grammar)) isAbstractElement(t) && this.grammarElementIdMap.set(t, e++);
	}
};
function createDefaultCoreModule(e) {
	return {
		documentation: {
			CommentProvider: /* @__PURE__ */ __name((e) => new DefaultCommentProvider(e), "CommentProvider"),
			DocumentationProvider: /* @__PURE__ */ __name((e) => new JSDocDocumentationProvider(e), "DocumentationProvider")
		},
		parser: {
			AsyncParser: /* @__PURE__ */ __name((e) => new DefaultAsyncParser(e), "AsyncParser"),
			GrammarConfig: /* @__PURE__ */ __name((e) => createGrammarConfig(e), "GrammarConfig"),
			LangiumParser: /* @__PURE__ */ __name((e) => createLangiumParser(e), "LangiumParser"),
			CompletionParser: /* @__PURE__ */ __name((e) => createCompletionParser(e), "CompletionParser"),
			ValueConverter: /* @__PURE__ */ __name(() => new DefaultValueConverter(), "ValueConverter"),
			TokenBuilder: /* @__PURE__ */ __name(() => new DefaultTokenBuilder(), "TokenBuilder"),
			Lexer: /* @__PURE__ */ __name((e) => new DefaultLexer(e), "Lexer"),
			ParserErrorMessageProvider: /* @__PURE__ */ __name(() => new LangiumParserErrorMessageProvider(), "ParserErrorMessageProvider"),
			LexerErrorMessageProvider: /* @__PURE__ */ __name(() => new DefaultLexerErrorMessageProvider(), "LexerErrorMessageProvider")
		},
		workspace: {
			AstNodeLocator: /* @__PURE__ */ __name(() => new DefaultAstNodeLocator(), "AstNodeLocator"),
			AstNodeDescriptionProvider: /* @__PURE__ */ __name((e) => new DefaultAstNodeDescriptionProvider(e), "AstNodeDescriptionProvider"),
			ReferenceDescriptionProvider: /* @__PURE__ */ __name((e) => new DefaultReferenceDescriptionProvider(e), "ReferenceDescriptionProvider")
		},
		references: {
			Linker: /* @__PURE__ */ __name((e) => new DefaultLinker(e), "Linker"),
			NameProvider: /* @__PURE__ */ __name(() => new DefaultNameProvider(), "NameProvider"),
			ScopeProvider: /* @__PURE__ */ __name((e) => new DefaultScopeProvider(e), "ScopeProvider"),
			ScopeComputation: /* @__PURE__ */ __name((e) => new DefaultScopeComputation(e), "ScopeComputation"),
			References: /* @__PURE__ */ __name((e) => new DefaultReferences(e), "References")
		},
		serializer: {
			Hydrator: /* @__PURE__ */ __name((e) => new DefaultHydrator(e), "Hydrator"),
			JsonSerializer: /* @__PURE__ */ __name((e) => new DefaultJsonSerializer(e), "JsonSerializer")
		},
		validation: {
			DocumentValidator: /* @__PURE__ */ __name((e) => new DefaultDocumentValidator(e), "DocumentValidator"),
			ValidationRegistry: /* @__PURE__ */ __name((e) => new ValidationRegistry(e), "ValidationRegistry")
		},
		shared: /* @__PURE__ */ __name(() => e.shared, "shared")
	};
}
__name(createDefaultCoreModule, "createDefaultCoreModule");
function createDefaultSharedCoreModule(e) {
	return {
		ServiceRegistry: /* @__PURE__ */ __name((e) => new DefaultServiceRegistry(e), "ServiceRegistry"),
		workspace: {
			LangiumDocuments: /* @__PURE__ */ __name((e) => new DefaultLangiumDocuments(e), "LangiumDocuments"),
			LangiumDocumentFactory: /* @__PURE__ */ __name((e) => new DefaultLangiumDocumentFactory(e), "LangiumDocumentFactory"),
			DocumentBuilder: /* @__PURE__ */ __name((e) => new DefaultDocumentBuilder(e), "DocumentBuilder"),
			IndexManager: /* @__PURE__ */ __name((e) => new DefaultIndexManager(e), "IndexManager"),
			WorkspaceManager: /* @__PURE__ */ __name((e) => new DefaultWorkspaceManager(e), "WorkspaceManager"),
			FileSystemProvider: /* @__PURE__ */ __name((t) => e.fileSystemProvider(t), "FileSystemProvider"),
			WorkspaceLock: /* @__PURE__ */ __name(() => new DefaultWorkspaceLock(), "WorkspaceLock"),
			ConfigurationProvider: /* @__PURE__ */ __name((e) => new DefaultConfigurationProvider(e), "ConfigurationProvider")
		},
		profilers: {}
	};
}
__name(createDefaultSharedCoreModule, "createDefaultSharedCoreModule");
var Module;
(function(e) {
	e.merge = (e, t) => _merge(_merge({}, e), t);
})(Module ||= {});
function inject(e, t, n, r, i, a, o, s, c) {
	return _inject([
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c
	].reduce(_merge, {}));
}
__name(inject, "inject");
var isProxy = Symbol("isProxy");
function eagerLoad(e) {
	if (e && e[isProxy]) for (let t of Object.values(e)) eagerLoad(t);
	return e;
}
__name(eagerLoad, "eagerLoad");
function _inject(e, t) {
	let n = new Proxy({}, {
		deleteProperty: /* @__PURE__ */ __name(() => !1, "deleteProperty"),
		set: /* @__PURE__ */ __name(() => {
			throw Error("Cannot set property on injected service container");
		}, "set"),
		get: /* @__PURE__ */ __name((r, i) => i === isProxy ? !0 : _resolve(r, i, e, t || n), "get"),
		getOwnPropertyDescriptor: /* @__PURE__ */ __name((r, i) => (_resolve(r, i, e, t || n), Object.getOwnPropertyDescriptor(r, i)), "getOwnPropertyDescriptor"),
		has: /* @__PURE__ */ __name((t, n) => n in e, "has"),
		ownKeys: /* @__PURE__ */ __name(() => [...Object.getOwnPropertyNames(e)], "ownKeys")
	});
	return n;
}
__name(_inject, "_inject");
var __requested__ = Symbol();
function _resolve(e, t, n, r) {
	if (t in e) {
		if (e[t] instanceof Error) throw Error("Construction failure. Please make sure that your dependencies are constructable. Cause: " + e[t]);
		if (e[t] === __requested__) throw Error("Cycle detected. Please make \"" + String(t) + "\" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies");
		return e[t];
	} else if (t in n) {
		let i = n[t];
		e[t] = __requested__;
		try {
			e[t] = typeof i == "function" ? i(r) : _inject(i, r);
		} catch (n) {
			throw e[t] = n instanceof Error ? n : void 0, n;
		}
		return e[t];
	} else return;
}
__name(_resolve, "_resolve");
function _merge(e, t) {
	if (t) {
		for (let [n, r] of Object.entries(t)) if (r != null) if (typeof r == "object") {
			let t = e[n];
			typeof t == "object" && t ? e[n] = _merge(t, r) : e[n] = _merge({}, r);
		} else e[n] = r;
	}
	return e;
}
__name(_merge, "_merge");
var indentationBuilderDefaultOptions = {
	indentTokenName: "INDENT",
	dedentTokenName: "DEDENT",
	whitespaceTokenName: "WS",
	ignoreIndentationDelimiters: []
}, LexingMode;
(function(e) {
	e.REGULAR = "indentation-sensitive", e.IGNORE_INDENTATION = "ignore-indentation";
})(LexingMode ||= {});
var IndentationAwareTokenBuilder = class extends DefaultTokenBuilder {
	static #e = __name(this, "IndentationAwareTokenBuilder");
	constructor(e = indentationBuilderDefaultOptions) {
		super(), this.indentationStack = [0], this.whitespaceRegExp = /[ \t]+/y, this.options = {
			...indentationBuilderDefaultOptions,
			...e
		}, this.indentTokenType = createToken({
			name: this.options.indentTokenName,
			pattern: this.indentMatcher.bind(this),
			line_breaks: !1
		}), this.dedentTokenType = createToken({
			name: this.options.dedentTokenName,
			pattern: this.dedentMatcher.bind(this),
			line_breaks: !1
		});
	}
	buildTokens(e, t) {
		let n = super.buildTokens(e, t);
		if (!isTokenTypeArray(n)) throw Error("Invalid tokens built by default builder");
		let { indentTokenName: r, dedentTokenName: i, whitespaceTokenName: a, ignoreIndentationDelimiters: o } = this.options, s, c, l, u = [];
		for (let e of n) {
			for (let [t, n] of o) e.name === t ? e.PUSH_MODE = LexingMode.IGNORE_INDENTATION : e.name === n && (e.POP_MODE = !0);
			e.name === i ? s = e : e.name === r ? c = e : e.name === a ? l = e : u.push(e);
		}
		if (!s || !c || !l) throw Error("Some indentation/whitespace tokens not found!");
		return o.length > 0 ? {
			modes: {
				[LexingMode.REGULAR]: [
					s,
					c,
					...u,
					l
				],
				[LexingMode.IGNORE_INDENTATION]: [...u, l]
			},
			defaultMode: LexingMode.REGULAR
		} : [
			s,
			c,
			l,
			...u
		];
	}
	flushLexingReport(e) {
		return {
			...super.flushLexingReport(e),
			remainingDedents: this.flushRemainingDedents(e)
		};
	}
	isStartOfLine(e, t) {
		return t === 0 || "\r\n".includes(e[t - 1]);
	}
	matchWhitespace(e, t, n, r) {
		this.whitespaceRegExp.lastIndex = t;
		let i = this.whitespaceRegExp.exec(e);
		return {
			currIndentLevel: i?.[0].length ?? 0,
			prevIndentLevel: this.indentationStack.at(-1),
			match: i
		};
	}
	createIndentationTokenInstance(e, t, n, r) {
		let i = this.getLineNumber(t, r);
		return createTokenInstance(e, n, r, r + n.length, i, i, 1, n.length);
	}
	getLineNumber(e, t) {
		return e.substring(0, t).split(/\r\n|\r|\n/).length;
	}
	indentMatcher(e, t, n, r) {
		if (!this.isStartOfLine(e, t)) return null;
		let { currIndentLevel: i, prevIndentLevel: a, match: o } = this.matchWhitespace(e, t, n, r);
		return i <= a ? null : (this.indentationStack.push(i), o);
	}
	dedentMatcher(e, t, n, r) {
		if (!this.isStartOfLine(e, t)) return null;
		let { currIndentLevel: i, prevIndentLevel: a, match: o } = this.matchWhitespace(e, t, n, r);
		if (i >= a) return null;
		let s = this.indentationStack.lastIndexOf(i);
		if (s === -1) return this.diagnostics.push({
			severity: "error",
			message: `Invalid dedent level ${i} at offset: ${t}. Current indentation stack: ${this.indentationStack}`,
			offset: t,
			length: o?.[0]?.length ?? 0,
			line: this.getLineNumber(e, t),
			column: 1
		}), null;
		let c = this.indentationStack.length - s - 1, l = e.substring(0, t).match(/[\r\n]+$/)?.[0].length ?? 1;
		for (let r = 0; r < c; r++) {
			let r = this.createIndentationTokenInstance(this.dedentTokenType, e, "", t - (l - 1));
			n.push(r), this.indentationStack.pop();
		}
		return null;
	}
	buildTerminalToken(e) {
		let t = super.buildTerminalToken(e), { indentTokenName: n, dedentTokenName: r, whitespaceTokenName: i } = this.options;
		return t.name === n ? this.indentTokenType : t.name === r ? this.dedentTokenType : t.name === i ? createToken({
			name: i,
			pattern: this.whitespaceRegExp,
			group: Lexer.SKIPPED
		}) : t;
	}
	flushRemainingDedents(e) {
		let t = [];
		for (; this.indentationStack.length > 1;) t.push(this.createIndentationTokenInstance(this.dedentTokenType, e, "", e.length)), this.indentationStack.pop();
		return this.indentationStack = [0], t;
	}
}, IndentationAwareLexer = class extends DefaultLexer {
	static #e = __name(this, "IndentationAwareLexer");
	constructor(e) {
		if (super(e), e.parser.TokenBuilder instanceof IndentationAwareTokenBuilder) this.indentationTokenBuilder = e.parser.TokenBuilder;
		else throw Error("IndentationAwareLexer requires an accompanying IndentationAwareTokenBuilder");
	}
	tokenize(e, t = DEFAULT_TOKENIZE_OPTIONS) {
		let n = super.tokenize(e), r = n.report;
		t?.mode === "full" && n.tokens.push(...r.remainingDedents), r.remainingDedents = [];
		let { indentTokenType: i, dedentTokenType: a } = this.indentationTokenBuilder, o = i.tokenTypeIdx, s = a.tokenTypeIdx, c = [], l = n.tokens.length - 1;
		for (let e = 0; e < l; e++) {
			let t = n.tokens[e], r = n.tokens[e + 1];
			if (t.tokenTypeIdx === o && r.tokenTypeIdx === s) {
				e++;
				continue;
			}
			c.push(t);
		}
		return l >= 0 && c.push(n.tokens[l]), n.tokens = c, n;
	}
}, utils_exports = {};
__export(utils_exports, {
	AstUtils: () => ast_utils_exports,
	BiMap: () => BiMap,
	Cancellation: () => cancellation_exports,
	ContextCache: () => ContextCache,
	CstUtils: () => cst_utils_exports,
	DONE_RESULT: () => DONE_RESULT,
	Deferred: () => Deferred,
	Disposable: () => Disposable,
	DisposableCache: () => DisposableCache,
	DocumentCache: () => DocumentCache,
	EMPTY_STREAM: () => EMPTY_STREAM,
	ErrorWithLocation: () => ErrorWithLocation,
	GrammarUtils: () => grammar_utils_exports,
	MultiMap: () => MultiMap,
	OperationCancelled: () => OperationCancelled,
	Reduction: () => Reduction,
	RegExpUtils: () => regexp_utils_exports,
	SimpleCache: () => SimpleCache,
	StreamImpl: () => StreamImpl,
	TreeStreamImpl: () => TreeStreamImpl,
	URI: () => URI2,
	UriTrie: () => UriTrie,
	UriUtils: () => UriUtils,
	WorkspaceCache: () => WorkspaceCache,
	assertCondition: () => assertCondition,
	assertUnreachable: () => assertUnreachable,
	delayNextTick: () => delayNextTick,
	interruptAndCheck: () => interruptAndCheck,
	isOperationCancelled: () => isOperationCancelled,
	loadGrammarFromJson: () => loadGrammarFromJson,
	setInterruptionPeriod: () => setInterruptionPeriod,
	startCancelableOperation: () => startCancelableOperation,
	stream: () => stream
}), __reExport(utils_exports, event_exports);
var EmptyFileSystemProvider = class {
	static #e = __name(this, "EmptyFileSystemProvider");
	stat(e) {
		throw Error("No file system is available.");
	}
	statSync(e) {
		throw Error("No file system is available.");
	}
	async exists() {
		return !1;
	}
	existsSync() {
		return !1;
	}
	readBinary() {
		throw Error("No file system is available.");
	}
	readBinarySync() {
		throw Error("No file system is available.");
	}
	readFile() {
		throw Error("No file system is available.");
	}
	readFileSync() {
		throw Error("No file system is available.");
	}
	async readDirectory() {
		return [];
	}
	readDirectorySync() {
		return [];
	}
}, EmptyFileSystem = { fileSystemProvider: /* @__PURE__ */ __name(() => new EmptyFileSystemProvider(), "fileSystemProvider") }, minimalGrammarModule = {
	Grammar: /* @__PURE__ */ __name(() => void 0, "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => ({
		caseInsensitive: !1,
		fileExtensions: [".langium"],
		languageId: "langium"
	}), "LanguageMetaData")
}, minimalSharedGrammarModule = { AstReflection: /* @__PURE__ */ __name(() => new LangiumGrammarAstReflection(), "AstReflection") };
function createMinimalGrammarServices() {
	let e = inject(createDefaultSharedCoreModule(EmptyFileSystem), minimalSharedGrammarModule), t = inject(createDefaultCoreModule({ shared: e }), minimalGrammarModule);
	return e.ServiceRegistry.register(t), t;
}
__name(createMinimalGrammarServices, "createMinimalGrammarServices");
function loadGrammarFromJson(e) {
	let t = createMinimalGrammarServices(), n = t.serializer.JsonSerializer.deserialize(e);
	return t.shared.workspace.LangiumDocumentFactory.fromModel(n, URI2.parse(`memory:/${n.name ?? "grammar"}.langium`)), n;
}
__name(loadGrammarFromJson, "loadGrammarFromJson"), __reExport(lib_exports, utils_exports);
var DefaultLangiumProfiler = class {
	static #e = __name(this, "DefaultLangiumProfiler");
	constructor(e) {
		this.activeCategories = /* @__PURE__ */ new Set(), this.allCategories = /* @__PURE__ */ new Set([
			"validating",
			"parsing",
			"linking"
		]), this.activeCategories = e ?? new Set(this.allCategories), this.records = new MultiMap();
	}
	isActive(e) {
		return this.activeCategories.has(e);
	}
	start(...e) {
		e ? e.forEach((e) => this.activeCategories.add(e)) : this.activeCategories = new Set(this.allCategories);
	}
	stop(...e) {
		e ? e.forEach((e) => this.activeCategories.delete(e)) : this.activeCategories.clear();
	}
	createTask(e, t) {
		if (!this.isActive(e)) throw Error(`Category "${e}" is not active.`);
		return console.log(`Creating profiling task for '${e}.${t}'.`), new ProfilingTask((t) => this.records.add(e, this.dumpRecord(e, t)), t);
	}
	dumpRecord(e, t) {
		console.info(`Task ${e}.${t.identifier} executed in ${t.duration.toFixed(2)}ms and ended at ${t.date.toISOString()}`);
		let n = [];
		for (let e of t.entries.keys()) {
			let r = t.entries.get(e), i = r.reduce((e, t) => e + t);
			n.push({
				name: `${t.identifier}.${e}`,
				count: r.length,
				duration: i
			});
		}
		let r = t.duration - n.map((e) => e.duration).reduce((e, t) => e + t, 0);
		n.push({
			name: t.identifier,
			count: 1,
			duration: r
		}), n.sort((e, t) => t.duration - e.duration);
		function i(e) {
			return Math.round(100 * e) / 100;
		}
		return __name(i, "Round"), console.table(n.map((e) => ({
			Element: e.name,
			Count: e.count,
			"Self %": i(100 * e.duration / t.duration),
			"Time (ms)": i(e.duration)
		}))), t;
	}
	getRecords(...e) {
		return e.length === 0 ? this.records.values() : this.records.entries().filter((t) => e.some((e) => e === t[0])).flatMap((e) => e[1]);
	}
}, ProfilingTask = class {
	static #e = __name(this, "ProfilingTask");
	constructor(e, t) {
		this.stack = [], this.entries = new MultiMap(), this.addRecord = e, this.identifier = t;
	}
	start() {
		if (this.startTime !== void 0) throw Error(`Task "${this.identifier}" is already started.`);
		this.startTime = performance.now();
	}
	stop() {
		if (this.startTime === void 0) throw Error(`Task "${this.identifier}" was not started.`);
		if (this.stack.length !== 0) throw Error(`Task "${this.identifier}" cannot be stopped before sub-task(s): ${this.stack.map((e) => e.id).join(", ")}.`);
		let e = {
			identifier: this.identifier,
			date: /* @__PURE__ */ new Date(),
			duration: performance.now() - this.startTime,
			entries: this.entries
		};
		this.addRecord(e), this.startTime = void 0, this.entries.clear();
	}
	startSubTask(e) {
		this.stack.push({
			id: e,
			start: performance.now(),
			content: 0
		});
	}
	stopSubTask(e) {
		let t = this.stack.pop();
		if (!t) throw Error(`Task "${this.identifier}.${e}" was not started.`);
		if (t.id !== e) throw Error(`Sub-Task "${t.id}" is not already stopped.`);
		let n = performance.now() - t.start;
		this.stack.at(-1) !== void 0 && (this.stack[this.stack.length - 1].content += n);
		let r = n - t.content;
		this.entries.add(e, r);
	}
}, ArchitectureGrammar;
((e) => {
	e.Terminals = {
		ARROW_DIRECTION: /L|R|T|B/,
		ARROW_GROUP: /\{group\}/,
		ARROW_INTO: /<|>/,
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		ID: /[\w]([-\w]*\w)?/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		ARCH_ICON: /\([\w-:]+\)/,
		ARCH_TITLE: /\[(?:"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|[^\[\]\r\n]+)\]/
	};
})(ArchitectureGrammar ||= {});
var CynefinGrammar;
((e) => {
	e.Terminals = {
		DOMAIN_NAME: /complex|complicated|clear|chaotic|confusion/,
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
	};
})(CynefinGrammar ||= {});
var EventModeling;
((e) => {
	e.Terminals = {
		EM_ID: /[_a-zA-Z][\w_]*/,
		EM_FID: /\d{1,3}/,
		EM_DATA_INLINE: /\{(.*)\}|"(.*)"|'(.*)'/,
		EM_DATA_BLOCK: /\{[\t ]*\r?\n(?:[\S\s]*?\r?\n)?\}(?:\r?\n|(?!\S))/,
		EM_ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		EM_ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		EM_TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		EM_WS: /\s+/,
		EM_YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		EM_DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		EM_SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		EM_ML_COMMENT: /\/\*[\s\S]*?\*\//,
		EM_SL_COMMENT: /\/\/[^\n\r]*/
	};
})(EventModeling ||= {});
var GitGraphGrammar;
((e) => {
	e.Terminals = {
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		INT: /0|[1-9][0-9]*(?!\.)/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		REFERENCE: /\w([-\./\w]*[-\w])?/
	};
})(GitGraphGrammar ||= {});
var InfoGrammar;
((e) => {
	e.Terminals = {
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
	};
})(InfoGrammar ||= {});
var PacketGrammar;
((e) => {
	e.Terminals = {
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		INT: /0|[1-9][0-9]*(?!\.)/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
	};
})(PacketGrammar ||= {});
var PieGrammar;
((e) => {
	e.Terminals = {
		NUMBER_PIE: /(?:-?[0-9]+\.[0-9]+(?!\.))|(?:-?(0|[1-9][0-9]*)(?!\.))/,
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
	};
})(PieGrammar ||= {});
var RadarGrammar;
((e) => {
	e.Terminals = {
		GRATICULE: /circle|polygon/,
		BOOLEAN: /true|false/,
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		NUMBER: /(?:[0-9]+\.[0-9]+(?!\.))|(?:0|[1-9][0-9]*(?!\.))/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		ID: /[\w]([-\w]*\w)?/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
	};
})(RadarGrammar ||= {});
var RailroadAbnfGrammar;
((e) => {
	e.Terminals = {
		TITLE: /title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		ACC_TITLE: /accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ABNF_RULENAME: /[A-Za-z][A-Za-z0-9-]*/,
		ABNF_STRING: /"[^"]*"/,
		ABNF_NUMVAL: /%[xXdDbB][0-9A-Fa-f]+(?:-[0-9A-Fa-f]+|\.[0-9A-Fa-f]+)*/,
		ABNF_REPEAT: /[0-9]*\*[0-9]*/,
		ABNF_EXACT_REPEAT: /[0-9]+/,
		ABNF_WHITESPACE: /[\t \r\n]+/,
		ABNF_YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		ABNF_DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		ABNF_SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		ABNF_COMMENT: /;[^\n\r]*/
	};
})(RailroadAbnfGrammar ||= {});
var RailroadEbnfGrammar;
((e) => {
	e.Terminals = {
		TITLE: /title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		ACC_TITLE: /accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		EBNF_ID: /[A-Z_a-z][\w-]*/,
		EBNF_STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		EBNF_SPECIAL_SEQUENCE: /\?(?=[^?;]*[^?\s;][^?;]*\?)[^?;]*\?/,
		EBNF_WHITESPACE: /[\t \r\n]+/,
		EBNF_YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		EBNF_DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		EBNF_SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		EBNF_BLOCK_COMMENT: /\/\*[\s\S]*?\*\//,
		EBNF_ISO_COMMENT: /\(\*[\s\S]*?\*\)/
	};
})(RailroadEbnfGrammar ||= {});
var RailroadGrammar;
((e) => {
	e.Terminals = {
		TITLE: /title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		ACC_TITLE: /accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		RR_ID: /[A-Z_a-z][\w-]*/,
		RR_STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		RR_WHITESPACE: /[\t \r\n]+/,
		RR_YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		RR_DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		RR_SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		RR_BLOCK_COMMENT: /\/\*[\s\S]*?\*\//
	};
})(RailroadGrammar ||= {});
var RailroadPegGrammar;
((e) => {
	e.Terminals = {
		TITLE: /title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		ACC_TITLE: /accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		PEG_ID: /[A-Z_a-z][\w-]*/,
		PEG_STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		PEG_WHITESPACE: /[\t \r\n]+/,
		PEG_YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		PEG_DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		PEG_SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
		PEG_LINE_COMMENT: /#[^\n\r]*/
	};
})(RailroadPegGrammar ||= {});
var TreemapGrammar;
((e) => {
	e.Terminals = {
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		TREEMAP_KEYWORD: /treemap-beta|treemap/,
		CLASS_DEF: /classDef\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\s+([^;\r\n]*))?(?:;)?/,
		STYLE_SEPARATOR: /:::/,
		SEPARATOR: /:/,
		COMMA: /,/,
		INDENTATION: /[ \t]{1,}/,
		WS: /[ \t]+/,
		ML_COMMENT: /\%\%[^\n]*/,
		NL: /\r?\n/,
		ID2: /[a-zA-Z_][a-zA-Z0-9_]*/,
		NUMBER2: /[0-9_\.\,]+/,
		STRING2: /"[^"]*"|'[^']*'/
	};
})(TreemapGrammar ||= {});
var TreeViewGrammar;
((e) => {
	e.Terminals = {
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		CLASS_ANNOTATION: /[ \t]+:::[ \t]*[A-Za-z_][\w-]*/,
		ICON_ANNOTATION: /[ \t]+icon\([\w-]*(?::[\w-]+)?\)/,
		DESC_ANNOTATION: /[ \t]+##[^\n\r]*/,
		INDENTATION: /[ \t]{1,}/,
		QUOTED_NAME: /"[^"]*"|'[^']*'/,
		WS: /[ \t]+/,
		ML_COMMENT: /\%\%[^\n]*/,
		NL: /\r?\n/,
		BARE_NAME: /(?!:::|icon\(|##)[^ \t\n\r"'](?:(?![ \t]+:::[ \t]*[A-Za-z_]|[ \t]+icon\(|[ \t]+##)[^\n\r])*/
	};
})(TreeViewGrammar ||= {});
var WardleyGrammar;
((e) => {
	e.Terminals = {
		WARDLEY_NUMBER: /[0-9]+\.[0-9]+/,
		ARROW: /->/,
		LINK_PORT: /\+<>|\+>|\+</,
		LINK_ARROW: /-->|-\.->|>|\+'[^']*'<>|\+'[^']*'<|\+'[^']*'>/,
		LINK_LABEL: /;[^\n\r]+/,
		STRATEGY: /build|buy|outsource|market/,
		KW_WARDLEY: /wardley-beta/,
		KW_SIZE: /size/,
		KW_EVOLUTION: /evolution/,
		KW_ANCHOR: /anchor/,
		KW_COMPONENT: /component/,
		KW_LABEL: /label/,
		KW_INERTIA: /inertia/,
		KW_EVOLVE: /evolve/,
		KW_PIPELINE: /pipeline/,
		KW_NOTE: /note/,
		KW_ANNOTATIONS: /annotations/,
		KW_ANNOTATION: /annotation/,
		KW_ACCELERATOR: /accelerator/,
		KW_DEACCELERATOR: /deaccelerator/,
		NAME_WITH_SPACES: /(?!title\s|accTitle|accDescr)[A-Za-z](?:[A-Za-z0-9_()&]|-(?!>))*(?:[ \t]+[A-Za-z(](?:[A-Za-z0-9_()&]|-(?!>))*)*/,
		WS: /[ \t]+/,
		ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
		ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
		TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
		INT: /0|[1-9][0-9]*(?!\.)/,
		STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
		ID: /[\w]([-\w]*\w)?/,
		NEWLINE: /\r?\n/,
		WHITESPACE: /[\t ]+/,
		YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
		DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
		SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
	};
})(WardleyGrammar ||= {}), {
	...ArchitectureGrammar.Terminals,
	...CynefinGrammar.Terminals,
	...EventModeling.Terminals,
	...GitGraphGrammar.Terminals,
	...InfoGrammar.Terminals,
	...PacketGrammar.Terminals,
	...PieGrammar.Terminals,
	...RadarGrammar.Terminals,
	...RailroadAbnfGrammar.Terminals,
	...RailroadEbnfGrammar.Terminals,
	...RailroadGrammar.Terminals,
	...RailroadPegGrammar.Terminals,
	...TreeViewGrammar.Terminals,
	...TreemapGrammar.Terminals,
	...WardleyGrammar.Terminals
};
var AbnfAlternation = {
	$type: "AbnfAlternation",
	alternatives: "alternatives"
}, AbnfConcatenation = {
	$type: "AbnfConcatenation",
	elements: "elements"
}, AbnfElement = {
	$type: "AbnfElement",
	primary: "primary",
	repeat: "repeat"
}, AbnfGroup = {
	$type: "AbnfGroup",
	element: "element"
}, AbnfNumVal = {
	$type: "AbnfNumVal",
	value: "value"
}, AbnfOptionalGroup = {
	$type: "AbnfOptionalGroup",
	element: "element"
}, AbnfPrimary = { $type: "AbnfPrimary" }, AbnfRule = {
	$type: "AbnfRule",
	definition: "definition",
	name: "name"
}, AbnfRuleName = {
	$type: "AbnfRuleName",
	name: "name"
}, AbnfStringLiteral = {
	$type: "AbnfStringLiteral",
	value: "value"
}, Accelerator = {
	$type: "Accelerator",
	name: "name",
	x: "x",
	y: "y"
}, Alignment = {
	$type: "Alignment",
	direction: "direction",
	members: "members"
}, Anchor = {
	$type: "Anchor",
	evolution: "evolution",
	name: "name",
	visibility: "visibility"
}, Annotation = {
	$type: "Annotation",
	number: "number",
	text: "text",
	x: "x",
	y: "y"
}, Annotations = {
	$type: "Annotations",
	x: "x",
	y: "y"
}, Architecture = {
	$type: "Architecture",
	accDescr: "accDescr",
	accTitle: "accTitle",
	alignments: "alignments",
	edges: "edges",
	groups: "groups",
	junctions: "junctions",
	services: "services",
	title: "title"
};
function isArchitecture(e) {
	return reflection2.isInstance(e, Architecture.$type);
}
__name(isArchitecture, "isArchitecture");
var Axis = {
	$type: "Axis",
	label: "label",
	name: "name"
}, Branch = {
	$type: "Branch",
	name: "name",
	order: "order"
};
function isBranch(e) {
	return reflection2.isInstance(e, Branch.$type);
}
__name(isBranch, "isBranch");
var Checkout = {
	$type: "Checkout",
	branch: "branch"
}, CherryPicking = {
	$type: "CherryPicking",
	id: "id",
	parent: "parent",
	tags: "tags"
}, ClassDefStatement = {
	$type: "ClassDefStatement",
	className: "className",
	styleText: "styleText"
}, Commit = {
	$type: "Commit",
	id: "id",
	message: "message",
	tags: "tags",
	type: "type"
};
function isCommit(e) {
	return reflection2.isInstance(e, Commit.$type);
}
__name(isCommit, "isCommit");
var Common = {
	$type: "Common",
	accDescr: "accDescr",
	accTitle: "accTitle",
	title: "title"
}, Component = {
	$type: "Component",
	decorator: "decorator",
	evolution: "evolution",
	inertia: "inertia",
	label: "label",
	name: "name",
	visibility: "visibility"
}, Curve = {
	$type: "Curve",
	entries: "entries",
	label: "label",
	name: "name"
}, Cynefin = {
	$type: "Cynefin",
	accDescr: "accDescr",
	accTitle: "accTitle",
	domains: "domains",
	title: "title",
	transitions: "transitions"
};
function isCynefin(e) {
	return reflection2.isInstance(e, Cynefin.$type);
}
__name(isCynefin, "isCynefin");
var Deaccelerator = {
	$type: "Deaccelerator",
	name: "name",
	x: "x",
	y: "y"
}, Decorator = {
	$type: "Decorator",
	strategy: "strategy"
}, Direction = {
	$type: "Direction",
	accDescr: "accDescr",
	accTitle: "accTitle",
	dir: "dir",
	statements: "statements",
	title: "title"
}, DomainBlock = {
	$type: "DomainBlock",
	domain: "domain",
	items: "items"
};
function isDomainBlock(e) {
	return reflection2.isInstance(e, DomainBlock.$type);
}
__name(isDomainBlock, "isDomainBlock");
var DomainItem = {
	$type: "DomainItem",
	label: "label"
};
function isDomainItem(e) {
	return reflection2.isInstance(e, DomainItem.$type);
}
__name(isDomainItem, "isDomainItem");
var EbnfChoice = {
	$type: "EbnfChoice",
	alternatives: "alternatives"
}, EbnfExceptionPostfix = {
	$type: "EbnfExceptionPostfix",
	except: "except"
}, EbnfGroup = {
	$type: "EbnfGroup",
	element: "element"
}, EbnfNonTerminal = {
	$type: "EbnfNonTerminal",
	name: "name"
}, EbnfOneOrMorePostfix = {
	$type: "EbnfOneOrMorePostfix",
	operator: "operator"
}, EbnfOptional = {
	$type: "EbnfOptional",
	element: "element"
}, EbnfOptionalPostfix = {
	$type: "EbnfOptionalPostfix",
	operator: "operator"
}, EbnfPostfix = { $type: "EbnfPostfix" }, EbnfPrimary = { $type: "EbnfPrimary" }, EbnfRepetition = {
	$type: "EbnfRepetition",
	element: "element"
}, EbnfRule = {
	$type: "EbnfRule",
	definition: "definition",
	name: "name"
}, EbnfSequence = {
	$type: "EbnfSequence",
	elements: "elements"
}, EbnfSpecial = {
	$type: "EbnfSpecial",
	text: "text"
}, EbnfTerm = {
	$type: "EbnfTerm",
	base: "base",
	postfixes: "postfixes"
}, EbnfTerminal = {
	$type: "EbnfTerminal",
	value: "value"
}, EbnfZeroOrMorePostfix = {
	$type: "EbnfZeroOrMorePostfix",
	operator: "operator"
}, Edge = {
	$type: "Edge",
	lhsDir: "lhsDir",
	lhsGroup: "lhsGroup",
	lhsId: "lhsId",
	lhsInto: "lhsInto",
	rhsDir: "rhsDir",
	rhsGroup: "rhsGroup",
	rhsId: "rhsId",
	rhsInto: "rhsInto",
	title: "title"
}, EmDataEntity = {
	$type: "EmDataEntity",
	dataBlockValue: "dataBlockValue",
	dataType: "dataType",
	name: "name"
}, EmFrame = { $type: "EmFrame" }, EmGwt = {
	$type: "EmGwt",
	givenStatements: "givenStatements",
	sourceFrame: "sourceFrame",
	thenStatements: "thenStatements",
	whenStatements: "whenStatements"
}, EmGwtStatement = {
	$type: "EmGwtStatement",
	entityIdentifier: "entityIdentifier"
}, EmModelEntity = {
	$type: "EmModelEntity",
	name: "name"
};
function isEmModelEntityType(e) {
	return e === "rmo" || e === "readmodel" || e === "ui" || e === "cmd" || e === "command" || e === "evt" || e === "event" || e === "pcr" || e === "processor";
}
__name(isEmModelEntityType, "isEmModelEntityType");
var EmNoteEntity = {
	$type: "EmNoteEntity",
	dataBlockValue: "dataBlockValue",
	dataType: "dataType",
	sourceFrame: "sourceFrame"
}, EmResetFrame = {
	$type: "EmResetFrame",
	dataInlineValue: "dataInlineValue",
	dataReference: "dataReference",
	dataType: "dataType",
	entityIdentifier: "entityIdentifier",
	modelEntityType: "modelEntityType",
	name: "name",
	sourceFrames: "sourceFrames"
};
function isEmResetFrame(e) {
	return reflection2.isInstance(e, EmResetFrame.$type);
}
__name(isEmResetFrame, "isEmResetFrame");
var EmTimeFrame = {
	$type: "EmTimeFrame",
	dataInlineValue: "dataInlineValue",
	dataReference: "dataReference",
	dataType: "dataType",
	entityIdentifier: "entityIdentifier",
	modelEntityType: "modelEntityType",
	name: "name",
	sourceFrames: "sourceFrames"
}, Entry = {
	$type: "Entry",
	axis: "axis",
	value: "value"
}, EventModel = {
	$type: "EventModel",
	accDescr: "accDescr",
	accTitle: "accTitle",
	dataEntities: "dataEntities",
	frames: "frames",
	gwtEntities: "gwtEntities",
	modelEntities: "modelEntities",
	noteEntities: "noteEntities",
	title: "title"
}, Evolution = {
	$type: "Evolution",
	stages: "stages"
}, EvolutionStage = {
	$type: "EvolutionStage",
	boundary: "boundary",
	name: "name",
	secondName: "secondName"
}, Evolve = {
	$type: "Evolve",
	component: "component",
	target: "target"
}, GitGraph = {
	$type: "GitGraph",
	accDescr: "accDescr",
	accTitle: "accTitle",
	statements: "statements",
	title: "title"
};
function isGitGraph(e) {
	return reflection2.isInstance(e, GitGraph.$type);
}
__name(isGitGraph, "isGitGraph");
var Group2 = {
	$type: "Group",
	icon: "icon",
	id: "id",
	in: "in",
	title: "title"
}, Info = {
	$type: "Info",
	accDescr: "accDescr",
	accTitle: "accTitle",
	title: "title"
};
function isInfo(e) {
	return reflection2.isInstance(e, Info.$type);
}
__name(isInfo, "isInfo");
var Item = {
	$type: "Item",
	classSelector: "classSelector",
	name: "name"
}, Junction = {
	$type: "Junction",
	id: "id",
	in: "in"
}, Label = {
	$type: "Label",
	negX: "negX",
	negY: "negY",
	offsetX: "offsetX",
	offsetY: "offsetY"
}, Leaf = {
	$type: "Leaf",
	classSelector: "classSelector",
	name: "name",
	value: "value"
}, Link = {
	$type: "Link",
	arrow: "arrow",
	from: "from",
	fromPort: "fromPort",
	linkLabel: "linkLabel",
	to: "to",
	toPort: "toPort"
}, Merge = {
	$type: "Merge",
	branch: "branch",
	id: "id",
	tags: "tags",
	type: "type"
};
function isMerge(e) {
	return reflection2.isInstance(e, Merge.$type);
}
__name(isMerge, "isMerge");
var Note = {
	$type: "Note",
	evolution: "evolution",
	text: "text",
	visibility: "visibility"
}, Option2 = {
	$type: "Option",
	name: "name",
	value: "value"
}, Packet = {
	$type: "Packet",
	accDescr: "accDescr",
	accTitle: "accTitle",
	blocks: "blocks",
	title: "title"
};
function isPacket(e) {
	return reflection2.isInstance(e, Packet.$type);
}
__name(isPacket, "isPacket");
var PacketBlock = {
	$type: "PacketBlock",
	bits: "bits",
	end: "end",
	label: "label",
	start: "start"
};
function isPacketBlock(e) {
	return reflection2.isInstance(e, PacketBlock.$type);
}
__name(isPacketBlock, "isPacketBlock");
var PegAny = {
	$type: "PegAny",
	dot: "dot"
}, PegGroup = {
	$type: "PegGroup",
	element: "element"
}, PegIdentifier = {
	$type: "PegIdentifier",
	name: "name"
}, PegLiteral = {
	$type: "PegLiteral",
	value: "value"
}, PegOrderedChoice = {
	$type: "PegOrderedChoice",
	alternatives: "alternatives"
}, PegPrefix = {
	$type: "PegPrefix",
	operator: "operator",
	suffix: "suffix"
}, PegPrimary = { $type: "PegPrimary" }, PegRule = {
	$type: "PegRule",
	definition: "definition",
	name: "name"
}, PegSequence = {
	$type: "PegSequence",
	elements: "elements"
}, PegSuffix = {
	$type: "PegSuffix",
	operator: "operator",
	primary: "primary"
}, Pie = {
	$type: "Pie",
	accDescr: "accDescr",
	accTitle: "accTitle",
	sections: "sections",
	showData: "showData",
	title: "title"
};
function isPie(e) {
	return reflection2.isInstance(e, Pie.$type);
}
__name(isPie, "isPie");
var PieSection = {
	$type: "PieSection",
	label: "label",
	value: "value"
};
function isPieSection(e) {
	return reflection2.isInstance(e, PieSection.$type);
}
__name(isPieSection, "isPieSection");
var Pipeline = {
	$type: "Pipeline",
	components: "components",
	parent: "parent"
}, PipelineComponent = {
	$type: "PipelineComponent",
	evolution: "evolution",
	label: "label",
	name: "name"
}, Radar = {
	$type: "Radar",
	accDescr: "accDescr",
	accTitle: "accTitle",
	axes: "axes",
	curves: "curves",
	options: "options",
	title: "title"
}, Railroad = {
	$type: "Railroad",
	accDescr: "accDescr",
	accTitle: "accTitle",
	rules: "rules",
	title: "title"
};
function isRailroad(e) {
	return reflection2.isInstance(e, Railroad.$type);
}
__name(isRailroad, "isRailroad");
var RailroadAbnf = {
	$type: "RailroadAbnf",
	accDescr: "accDescr",
	accTitle: "accTitle",
	rules: "rules",
	title: "title"
};
function isRailroadAbnf(e) {
	return reflection2.isInstance(e, RailroadAbnf.$type);
}
__name(isRailroadAbnf, "isRailroadAbnf");
var RailroadChoiceExpr = {
	$type: "RailroadChoiceExpr",
	alternatives: "alternatives"
}, RailroadEbnf = {
	$type: "RailroadEbnf",
	accDescr: "accDescr",
	accTitle: "accTitle",
	rules: "rules",
	title: "title"
};
function isRailroadEbnf(e) {
	return reflection2.isInstance(e, RailroadEbnf.$type);
}
__name(isRailroadEbnf, "isRailroadEbnf");
var RailroadExpression = { $type: "RailroadExpression" }, RailroadNonTerminalExpr = {
	$type: "RailroadNonTerminalExpr",
	name: "name"
}, RailroadOneOrMoreExpr = {
	$type: "RailroadOneOrMoreExpr",
	element: "element"
}, RailroadOptionalExpr = {
	$type: "RailroadOptionalExpr",
	element: "element"
}, RailroadPeg = {
	$type: "RailroadPeg",
	accDescr: "accDescr",
	accTitle: "accTitle",
	rules: "rules",
	title: "title"
};
function isRailroadPeg(e) {
	return reflection2.isInstance(e, RailroadPeg.$type);
}
__name(isRailroadPeg, "isRailroadPeg");
var RailroadRule = {
	$type: "RailroadRule",
	definition: "definition",
	name: "name"
}, RailroadSequenceExpr = {
	$type: "RailroadSequenceExpr",
	elements: "elements"
}, RailroadSpecialExpr = {
	$type: "RailroadSpecialExpr",
	text: "text"
}, RailroadTerminalExpr = {
	$type: "RailroadTerminalExpr",
	value: "value"
}, RailroadZeroOrMoreExpr = {
	$type: "RailroadZeroOrMoreExpr",
	element: "element"
}, Section = {
	$type: "Section",
	classSelector: "classSelector",
	name: "name"
}, Service = {
	$type: "Service",
	icon: "icon",
	iconText: "iconText",
	id: "id",
	in: "in",
	title: "title"
}, Size = {
	$type: "Size",
	height: "height",
	width: "width"
}, Statement = { $type: "Statement" }, Transition = {
	$type: "Transition",
	from: "from",
	label: "label",
	to: "to"
};
function isTransition(e) {
	return reflection2.isInstance(e, Transition.$type);
}
__name(isTransition, "isTransition");
var Treemap = {
	$type: "Treemap",
	accDescr: "accDescr",
	accTitle: "accTitle",
	title: "title",
	TreemapRows: "TreemapRows"
};
function isTreemap(e) {
	return reflection2.isInstance(e, Treemap.$type);
}
__name(isTreemap, "isTreemap");
var TreemapRow = {
	$type: "TreemapRow",
	indent: "indent",
	item: "item"
}, TreeNode = {
	$type: "TreeNode",
	classAnnotation: "classAnnotation",
	descAnnotation: "descAnnotation",
	iconAnnotation: "iconAnnotation",
	indent: "indent",
	name: "name"
}, TreeView = {
	$type: "TreeView",
	accDescr: "accDescr",
	accTitle: "accTitle",
	nodes: "nodes",
	title: "title"
}, Wardley = {
	$type: "Wardley",
	accDescr: "accDescr",
	accelerators: "accelerators",
	accTitle: "accTitle",
	anchors: "anchors",
	annotation: "annotation",
	annotations: "annotations",
	components: "components",
	deaccelerators: "deaccelerators",
	evolution: "evolution",
	evolves: "evolves",
	links: "links",
	notes: "notes",
	pipelines: "pipelines",
	size: "size",
	title: "title"
};
function isWardley(e) {
	return reflection2.isInstance(e, Wardley.$type);
}
__name(isWardley, "isWardley");
var MermaidAstReflection = class extends AbstractAstReflection {
	constructor() {
		super(...arguments), this.types = {
			AbnfAlternation: {
				name: AbnfAlternation.$type,
				properties: { alternatives: {
					name: AbnfAlternation.alternatives,
					defaultValue: []
				} },
				superTypes: []
			},
			AbnfConcatenation: {
				name: AbnfConcatenation.$type,
				properties: { elements: {
					name: AbnfConcatenation.elements,
					defaultValue: []
				} },
				superTypes: []
			},
			AbnfElement: {
				name: AbnfElement.$type,
				properties: {
					primary: { name: AbnfElement.primary },
					repeat: { name: AbnfElement.repeat }
				},
				superTypes: []
			},
			AbnfGroup: {
				name: AbnfGroup.$type,
				properties: { element: { name: AbnfGroup.element } },
				superTypes: [AbnfPrimary.$type]
			},
			AbnfNumVal: {
				name: AbnfNumVal.$type,
				properties: { value: { name: AbnfNumVal.value } },
				superTypes: [AbnfPrimary.$type]
			},
			AbnfOptionalGroup: {
				name: AbnfOptionalGroup.$type,
				properties: { element: { name: AbnfOptionalGroup.element } },
				superTypes: [AbnfPrimary.$type]
			},
			AbnfPrimary: {
				name: AbnfPrimary.$type,
				properties: {},
				superTypes: []
			},
			AbnfRule: {
				name: AbnfRule.$type,
				properties: {
					definition: { name: AbnfRule.definition },
					name: { name: AbnfRule.name }
				},
				superTypes: []
			},
			AbnfRuleName: {
				name: AbnfRuleName.$type,
				properties: { name: { name: AbnfRuleName.name } },
				superTypes: [AbnfPrimary.$type]
			},
			AbnfStringLiteral: {
				name: AbnfStringLiteral.$type,
				properties: { value: { name: AbnfStringLiteral.value } },
				superTypes: [AbnfPrimary.$type]
			},
			Accelerator: {
				name: Accelerator.$type,
				properties: {
					name: { name: Accelerator.name },
					x: { name: Accelerator.x },
					y: { name: Accelerator.y }
				},
				superTypes: []
			},
			Alignment: {
				name: Alignment.$type,
				properties: {
					direction: { name: Alignment.direction },
					members: {
						name: Alignment.members,
						defaultValue: []
					}
				},
				superTypes: []
			},
			Anchor: {
				name: Anchor.$type,
				properties: {
					evolution: { name: Anchor.evolution },
					name: { name: Anchor.name },
					visibility: { name: Anchor.visibility }
				},
				superTypes: []
			},
			Annotation: {
				name: Annotation.$type,
				properties: {
					number: { name: Annotation.number },
					text: { name: Annotation.text },
					x: { name: Annotation.x },
					y: { name: Annotation.y }
				},
				superTypes: []
			},
			Annotations: {
				name: Annotations.$type,
				properties: {
					x: { name: Annotations.x },
					y: { name: Annotations.y }
				},
				superTypes: []
			},
			Architecture: {
				name: Architecture.$type,
				properties: {
					accDescr: { name: Architecture.accDescr },
					accTitle: { name: Architecture.accTitle },
					alignments: {
						name: Architecture.alignments,
						defaultValue: []
					},
					edges: {
						name: Architecture.edges,
						defaultValue: []
					},
					groups: {
						name: Architecture.groups,
						defaultValue: []
					},
					junctions: {
						name: Architecture.junctions,
						defaultValue: []
					},
					services: {
						name: Architecture.services,
						defaultValue: []
					},
					title: { name: Architecture.title }
				},
				superTypes: []
			},
			Axis: {
				name: Axis.$type,
				properties: {
					label: { name: Axis.label },
					name: { name: Axis.name }
				},
				superTypes: []
			},
			Branch: {
				name: Branch.$type,
				properties: {
					name: { name: Branch.name },
					order: { name: Branch.order }
				},
				superTypes: [Statement.$type]
			},
			Checkout: {
				name: Checkout.$type,
				properties: { branch: { name: Checkout.branch } },
				superTypes: [Statement.$type]
			},
			CherryPicking: {
				name: CherryPicking.$type,
				properties: {
					id: { name: CherryPicking.id },
					parent: { name: CherryPicking.parent },
					tags: {
						name: CherryPicking.tags,
						defaultValue: []
					}
				},
				superTypes: [Statement.$type]
			},
			ClassDefStatement: {
				name: ClassDefStatement.$type,
				properties: {
					className: { name: ClassDefStatement.className },
					styleText: { name: ClassDefStatement.styleText }
				},
				superTypes: []
			},
			Commit: {
				name: Commit.$type,
				properties: {
					id: { name: Commit.id },
					message: { name: Commit.message },
					tags: {
						name: Commit.tags,
						defaultValue: []
					},
					type: { name: Commit.type }
				},
				superTypes: [Statement.$type]
			},
			Common: {
				name: Common.$type,
				properties: {
					accDescr: { name: Common.accDescr },
					accTitle: { name: Common.accTitle },
					title: { name: Common.title }
				},
				superTypes: []
			},
			Component: {
				name: Component.$type,
				properties: {
					decorator: { name: Component.decorator },
					evolution: { name: Component.evolution },
					inertia: {
						name: Component.inertia,
						defaultValue: !1
					},
					label: { name: Component.label },
					name: { name: Component.name },
					visibility: { name: Component.visibility }
				},
				superTypes: []
			},
			Curve: {
				name: Curve.$type,
				properties: {
					entries: {
						name: Curve.entries,
						defaultValue: []
					},
					label: { name: Curve.label },
					name: { name: Curve.name }
				},
				superTypes: []
			},
			Cynefin: {
				name: Cynefin.$type,
				properties: {
					accDescr: { name: Cynefin.accDescr },
					accTitle: { name: Cynefin.accTitle },
					domains: {
						name: Cynefin.domains,
						defaultValue: []
					},
					title: { name: Cynefin.title },
					transitions: {
						name: Cynefin.transitions,
						defaultValue: []
					}
				},
				superTypes: []
			},
			Deaccelerator: {
				name: Deaccelerator.$type,
				properties: {
					name: { name: Deaccelerator.name },
					x: { name: Deaccelerator.x },
					y: { name: Deaccelerator.y }
				},
				superTypes: []
			},
			Decorator: {
				name: Decorator.$type,
				properties: { strategy: { name: Decorator.strategy } },
				superTypes: []
			},
			Direction: {
				name: Direction.$type,
				properties: {
					accDescr: { name: Direction.accDescr },
					accTitle: { name: Direction.accTitle },
					dir: { name: Direction.dir },
					statements: {
						name: Direction.statements,
						defaultValue: []
					},
					title: { name: Direction.title }
				},
				superTypes: [GitGraph.$type]
			},
			DomainBlock: {
				name: DomainBlock.$type,
				properties: {
					domain: { name: DomainBlock.domain },
					items: {
						name: DomainBlock.items,
						defaultValue: []
					}
				},
				superTypes: []
			},
			DomainItem: {
				name: DomainItem.$type,
				properties: { label: { name: DomainItem.label } },
				superTypes: []
			},
			EbnfChoice: {
				name: EbnfChoice.$type,
				properties: { alternatives: {
					name: EbnfChoice.alternatives,
					defaultValue: []
				} },
				superTypes: []
			},
			EbnfExceptionPostfix: {
				name: EbnfExceptionPostfix.$type,
				properties: { except: { name: EbnfExceptionPostfix.except } },
				superTypes: [EbnfPostfix.$type]
			},
			EbnfGroup: {
				name: EbnfGroup.$type,
				properties: { element: { name: EbnfGroup.element } },
				superTypes: [EbnfPrimary.$type]
			},
			EbnfNonTerminal: {
				name: EbnfNonTerminal.$type,
				properties: { name: { name: EbnfNonTerminal.name } },
				superTypes: [EbnfPrimary.$type]
			},
			EbnfOneOrMorePostfix: {
				name: EbnfOneOrMorePostfix.$type,
				properties: { operator: { name: EbnfOneOrMorePostfix.operator } },
				superTypes: [EbnfPostfix.$type]
			},
			EbnfOptional: {
				name: EbnfOptional.$type,
				properties: { element: { name: EbnfOptional.element } },
				superTypes: [EbnfPrimary.$type]
			},
			EbnfOptionalPostfix: {
				name: EbnfOptionalPostfix.$type,
				properties: { operator: { name: EbnfOptionalPostfix.operator } },
				superTypes: [EbnfPostfix.$type]
			},
			EbnfPostfix: {
				name: EbnfPostfix.$type,
				properties: {},
				superTypes: []
			},
			EbnfPrimary: {
				name: EbnfPrimary.$type,
				properties: {},
				superTypes: []
			},
			EbnfRepetition: {
				name: EbnfRepetition.$type,
				properties: { element: { name: EbnfRepetition.element } },
				superTypes: [EbnfPrimary.$type]
			},
			EbnfRule: {
				name: EbnfRule.$type,
				properties: {
					definition: { name: EbnfRule.definition },
					name: { name: EbnfRule.name }
				},
				superTypes: []
			},
			EbnfSequence: {
				name: EbnfSequence.$type,
				properties: { elements: {
					name: EbnfSequence.elements,
					defaultValue: []
				} },
				superTypes: []
			},
			EbnfSpecial: {
				name: EbnfSpecial.$type,
				properties: { text: { name: EbnfSpecial.text } },
				superTypes: [EbnfPrimary.$type]
			},
			EbnfTerm: {
				name: EbnfTerm.$type,
				properties: {
					base: { name: EbnfTerm.base },
					postfixes: {
						name: EbnfTerm.postfixes,
						defaultValue: []
					}
				},
				superTypes: []
			},
			EbnfTerminal: {
				name: EbnfTerminal.$type,
				properties: { value: { name: EbnfTerminal.value } },
				superTypes: [EbnfPrimary.$type]
			},
			EbnfZeroOrMorePostfix: {
				name: EbnfZeroOrMorePostfix.$type,
				properties: { operator: { name: EbnfZeroOrMorePostfix.operator } },
				superTypes: [EbnfPostfix.$type]
			},
			Edge: {
				name: Edge.$type,
				properties: {
					lhsDir: { name: Edge.lhsDir },
					lhsGroup: {
						name: Edge.lhsGroup,
						defaultValue: !1
					},
					lhsId: { name: Edge.lhsId },
					lhsInto: {
						name: Edge.lhsInto,
						defaultValue: !1
					},
					rhsDir: { name: Edge.rhsDir },
					rhsGroup: {
						name: Edge.rhsGroup,
						defaultValue: !1
					},
					rhsId: { name: Edge.rhsId },
					rhsInto: {
						name: Edge.rhsInto,
						defaultValue: !1
					},
					title: { name: Edge.title }
				},
				superTypes: []
			},
			EmDataEntity: {
				name: EmDataEntity.$type,
				properties: {
					dataBlockValue: { name: EmDataEntity.dataBlockValue },
					dataType: { name: EmDataEntity.dataType },
					name: { name: EmDataEntity.name }
				},
				superTypes: []
			},
			EmFrame: {
				name: EmFrame.$type,
				properties: {},
				superTypes: []
			},
			EmGwt: {
				name: EmGwt.$type,
				properties: {
					givenStatements: {
						name: EmGwt.givenStatements,
						defaultValue: []
					},
					sourceFrame: {
						name: EmGwt.sourceFrame,
						referenceType: EmFrame.$type
					},
					thenStatements: {
						name: EmGwt.thenStatements,
						defaultValue: []
					},
					whenStatements: {
						name: EmGwt.whenStatements,
						defaultValue: []
					}
				},
				superTypes: []
			},
			EmGwtStatement: {
				name: EmGwtStatement.$type,
				properties: { entityIdentifier: {
					name: EmGwtStatement.entityIdentifier,
					referenceType: EmModelEntity.$type
				} },
				superTypes: []
			},
			EmModelEntity: {
				name: EmModelEntity.$type,
				properties: { name: { name: EmModelEntity.name } },
				superTypes: []
			},
			EmNoteEntity: {
				name: EmNoteEntity.$type,
				properties: {
					dataBlockValue: { name: EmNoteEntity.dataBlockValue },
					dataType: { name: EmNoteEntity.dataType },
					sourceFrame: {
						name: EmNoteEntity.sourceFrame,
						referenceType: EmFrame.$type
					}
				},
				superTypes: []
			},
			EmResetFrame: {
				name: EmResetFrame.$type,
				properties: {
					dataInlineValue: { name: EmResetFrame.dataInlineValue },
					dataReference: {
						name: EmResetFrame.dataReference,
						referenceType: EmDataEntity.$type
					},
					dataType: { name: EmResetFrame.dataType },
					entityIdentifier: { name: EmResetFrame.entityIdentifier },
					modelEntityType: { name: EmResetFrame.modelEntityType },
					name: { name: EmResetFrame.name },
					sourceFrames: {
						name: EmResetFrame.sourceFrames,
						defaultValue: [],
						referenceType: EmFrame.$type
					}
				},
				superTypes: [EmFrame.$type]
			},
			EmTimeFrame: {
				name: EmTimeFrame.$type,
				properties: {
					dataInlineValue: { name: EmTimeFrame.dataInlineValue },
					dataReference: {
						name: EmTimeFrame.dataReference,
						referenceType: EmDataEntity.$type
					},
					dataType: { name: EmTimeFrame.dataType },
					entityIdentifier: { name: EmTimeFrame.entityIdentifier },
					modelEntityType: { name: EmTimeFrame.modelEntityType },
					name: { name: EmTimeFrame.name },
					sourceFrames: {
						name: EmTimeFrame.sourceFrames,
						defaultValue: [],
						referenceType: EmFrame.$type
					}
				},
				superTypes: [EmFrame.$type]
			},
			Entry: {
				name: Entry.$type,
				properties: {
					axis: {
						name: Entry.axis,
						referenceType: Axis.$type
					},
					value: { name: Entry.value }
				},
				superTypes: []
			},
			EventModel: {
				name: EventModel.$type,
				properties: {
					accDescr: { name: EventModel.accDescr },
					accTitle: { name: EventModel.accTitle },
					dataEntities: {
						name: EventModel.dataEntities,
						defaultValue: []
					},
					frames: {
						name: EventModel.frames,
						defaultValue: []
					},
					gwtEntities: {
						name: EventModel.gwtEntities,
						defaultValue: []
					},
					modelEntities: {
						name: EventModel.modelEntities,
						defaultValue: []
					},
					noteEntities: {
						name: EventModel.noteEntities,
						defaultValue: []
					},
					title: { name: EventModel.title }
				},
				superTypes: []
			},
			Evolution: {
				name: Evolution.$type,
				properties: { stages: {
					name: Evolution.stages,
					defaultValue: []
				} },
				superTypes: []
			},
			EvolutionStage: {
				name: EvolutionStage.$type,
				properties: {
					boundary: { name: EvolutionStage.boundary },
					name: { name: EvolutionStage.name },
					secondName: { name: EvolutionStage.secondName }
				},
				superTypes: []
			},
			Evolve: {
				name: Evolve.$type,
				properties: {
					component: { name: Evolve.component },
					target: { name: Evolve.target }
				},
				superTypes: []
			},
			GitGraph: {
				name: GitGraph.$type,
				properties: {
					accDescr: { name: GitGraph.accDescr },
					accTitle: { name: GitGraph.accTitle },
					statements: {
						name: GitGraph.statements,
						defaultValue: []
					},
					title: { name: GitGraph.title }
				},
				superTypes: []
			},
			Group: {
				name: Group2.$type,
				properties: {
					icon: { name: Group2.icon },
					id: { name: Group2.id },
					in: { name: Group2.in },
					title: { name: Group2.title }
				},
				superTypes: []
			},
			Info: {
				name: Info.$type,
				properties: {
					accDescr: { name: Info.accDescr },
					accTitle: { name: Info.accTitle },
					title: { name: Info.title }
				},
				superTypes: []
			},
			Item: {
				name: Item.$type,
				properties: {
					classSelector: { name: Item.classSelector },
					name: { name: Item.name }
				},
				superTypes: []
			},
			Junction: {
				name: Junction.$type,
				properties: {
					id: { name: Junction.id },
					in: { name: Junction.in }
				},
				superTypes: []
			},
			Label: {
				name: Label.$type,
				properties: {
					negX: {
						name: Label.negX,
						defaultValue: !1
					},
					negY: {
						name: Label.negY,
						defaultValue: !1
					},
					offsetX: { name: Label.offsetX },
					offsetY: { name: Label.offsetY }
				},
				superTypes: []
			},
			Leaf: {
				name: Leaf.$type,
				properties: {
					classSelector: { name: Leaf.classSelector },
					name: { name: Leaf.name },
					value: { name: Leaf.value }
				},
				superTypes: [Item.$type]
			},
			Link: {
				name: Link.$type,
				properties: {
					arrow: { name: Link.arrow },
					from: { name: Link.from },
					fromPort: { name: Link.fromPort },
					linkLabel: { name: Link.linkLabel },
					to: { name: Link.to },
					toPort: { name: Link.toPort }
				},
				superTypes: []
			},
			Merge: {
				name: Merge.$type,
				properties: {
					branch: { name: Merge.branch },
					id: { name: Merge.id },
					tags: {
						name: Merge.tags,
						defaultValue: []
					},
					type: { name: Merge.type }
				},
				superTypes: [Statement.$type]
			},
			Note: {
				name: Note.$type,
				properties: {
					evolution: { name: Note.evolution },
					text: { name: Note.text },
					visibility: { name: Note.visibility }
				},
				superTypes: []
			},
			Option: {
				name: Option2.$type,
				properties: {
					name: { name: Option2.name },
					value: {
						name: Option2.value,
						defaultValue: !1
					}
				},
				superTypes: []
			},
			Packet: {
				name: Packet.$type,
				properties: {
					accDescr: { name: Packet.accDescr },
					accTitle: { name: Packet.accTitle },
					blocks: {
						name: Packet.blocks,
						defaultValue: []
					},
					title: { name: Packet.title }
				},
				superTypes: []
			},
			PacketBlock: {
				name: PacketBlock.$type,
				properties: {
					bits: { name: PacketBlock.bits },
					end: { name: PacketBlock.end },
					label: { name: PacketBlock.label },
					start: { name: PacketBlock.start }
				},
				superTypes: []
			},
			PegAny: {
				name: PegAny.$type,
				properties: { dot: { name: PegAny.dot } },
				superTypes: [PegPrimary.$type]
			},
			PegGroup: {
				name: PegGroup.$type,
				properties: { element: { name: PegGroup.element } },
				superTypes: [PegPrimary.$type]
			},
			PegIdentifier: {
				name: PegIdentifier.$type,
				properties: { name: { name: PegIdentifier.name } },
				superTypes: [PegPrimary.$type]
			},
			PegLiteral: {
				name: PegLiteral.$type,
				properties: { value: { name: PegLiteral.value } },
				superTypes: [PegPrimary.$type]
			},
			PegOrderedChoice: {
				name: PegOrderedChoice.$type,
				properties: { alternatives: {
					name: PegOrderedChoice.alternatives,
					defaultValue: []
				} },
				superTypes: []
			},
			PegPrefix: {
				name: PegPrefix.$type,
				properties: {
					operator: { name: PegPrefix.operator },
					suffix: { name: PegPrefix.suffix }
				},
				superTypes: []
			},
			PegPrimary: {
				name: PegPrimary.$type,
				properties: {},
				superTypes: []
			},
			PegRule: {
				name: PegRule.$type,
				properties: {
					definition: { name: PegRule.definition },
					name: { name: PegRule.name }
				},
				superTypes: []
			},
			PegSequence: {
				name: PegSequence.$type,
				properties: { elements: {
					name: PegSequence.elements,
					defaultValue: []
				} },
				superTypes: []
			},
			PegSuffix: {
				name: PegSuffix.$type,
				properties: {
					operator: { name: PegSuffix.operator },
					primary: { name: PegSuffix.primary }
				},
				superTypes: []
			},
			Pie: {
				name: Pie.$type,
				properties: {
					accDescr: { name: Pie.accDescr },
					accTitle: { name: Pie.accTitle },
					sections: {
						name: Pie.sections,
						defaultValue: []
					},
					showData: {
						name: Pie.showData,
						defaultValue: !1
					},
					title: { name: Pie.title }
				},
				superTypes: []
			},
			PieSection: {
				name: PieSection.$type,
				properties: {
					label: { name: PieSection.label },
					value: { name: PieSection.value }
				},
				superTypes: []
			},
			Pipeline: {
				name: Pipeline.$type,
				properties: {
					components: {
						name: Pipeline.components,
						defaultValue: []
					},
					parent: { name: Pipeline.parent }
				},
				superTypes: []
			},
			PipelineComponent: {
				name: PipelineComponent.$type,
				properties: {
					evolution: { name: PipelineComponent.evolution },
					label: { name: PipelineComponent.label },
					name: { name: PipelineComponent.name }
				},
				superTypes: []
			},
			Radar: {
				name: Radar.$type,
				properties: {
					accDescr: { name: Radar.accDescr },
					accTitle: { name: Radar.accTitle },
					axes: {
						name: Radar.axes,
						defaultValue: []
					},
					curves: {
						name: Radar.curves,
						defaultValue: []
					},
					options: {
						name: Radar.options,
						defaultValue: []
					},
					title: { name: Radar.title }
				},
				superTypes: []
			},
			Railroad: {
				name: Railroad.$type,
				properties: {
					accDescr: { name: Railroad.accDescr },
					accTitle: { name: Railroad.accTitle },
					rules: {
						name: Railroad.rules,
						defaultValue: []
					},
					title: { name: Railroad.title }
				},
				superTypes: []
			},
			RailroadAbnf: {
				name: RailroadAbnf.$type,
				properties: {
					accDescr: { name: RailroadAbnf.accDescr },
					accTitle: { name: RailroadAbnf.accTitle },
					rules: {
						name: RailroadAbnf.rules,
						defaultValue: []
					},
					title: { name: RailroadAbnf.title }
				},
				superTypes: []
			},
			RailroadChoiceExpr: {
				name: RailroadChoiceExpr.$type,
				properties: { alternatives: {
					name: RailroadChoiceExpr.alternatives,
					defaultValue: []
				} },
				superTypes: [RailroadExpression.$type]
			},
			RailroadEbnf: {
				name: RailroadEbnf.$type,
				properties: {
					accDescr: { name: RailroadEbnf.accDescr },
					accTitle: { name: RailroadEbnf.accTitle },
					rules: {
						name: RailroadEbnf.rules,
						defaultValue: []
					},
					title: { name: RailroadEbnf.title }
				},
				superTypes: []
			},
			RailroadExpression: {
				name: RailroadExpression.$type,
				properties: {},
				superTypes: []
			},
			RailroadNonTerminalExpr: {
				name: RailroadNonTerminalExpr.$type,
				properties: { name: { name: RailroadNonTerminalExpr.name } },
				superTypes: [RailroadExpression.$type]
			},
			RailroadOneOrMoreExpr: {
				name: RailroadOneOrMoreExpr.$type,
				properties: { element: { name: RailroadOneOrMoreExpr.element } },
				superTypes: [RailroadExpression.$type]
			},
			RailroadOptionalExpr: {
				name: RailroadOptionalExpr.$type,
				properties: { element: { name: RailroadOptionalExpr.element } },
				superTypes: [RailroadExpression.$type]
			},
			RailroadPeg: {
				name: RailroadPeg.$type,
				properties: {
					accDescr: { name: RailroadPeg.accDescr },
					accTitle: { name: RailroadPeg.accTitle },
					rules: {
						name: RailroadPeg.rules,
						defaultValue: []
					},
					title: { name: RailroadPeg.title }
				},
				superTypes: []
			},
			RailroadRule: {
				name: RailroadRule.$type,
				properties: {
					definition: { name: RailroadRule.definition },
					name: { name: RailroadRule.name }
				},
				superTypes: []
			},
			RailroadSequenceExpr: {
				name: RailroadSequenceExpr.$type,
				properties: { elements: {
					name: RailroadSequenceExpr.elements,
					defaultValue: []
				} },
				superTypes: [RailroadExpression.$type]
			},
			RailroadSpecialExpr: {
				name: RailroadSpecialExpr.$type,
				properties: { text: { name: RailroadSpecialExpr.text } },
				superTypes: [RailroadExpression.$type]
			},
			RailroadTerminalExpr: {
				name: RailroadTerminalExpr.$type,
				properties: { value: { name: RailroadTerminalExpr.value } },
				superTypes: [RailroadExpression.$type]
			},
			RailroadZeroOrMoreExpr: {
				name: RailroadZeroOrMoreExpr.$type,
				properties: { element: { name: RailroadZeroOrMoreExpr.element } },
				superTypes: [RailroadExpression.$type]
			},
			Section: {
				name: Section.$type,
				properties: {
					classSelector: { name: Section.classSelector },
					name: { name: Section.name }
				},
				superTypes: [Item.$type]
			},
			Service: {
				name: Service.$type,
				properties: {
					icon: { name: Service.icon },
					iconText: { name: Service.iconText },
					id: { name: Service.id },
					in: { name: Service.in },
					title: { name: Service.title }
				},
				superTypes: []
			},
			Size: {
				name: Size.$type,
				properties: {
					height: { name: Size.height },
					width: { name: Size.width }
				},
				superTypes: []
			},
			Statement: {
				name: Statement.$type,
				properties: {},
				superTypes: []
			},
			Transition: {
				name: Transition.$type,
				properties: {
					from: { name: Transition.from },
					label: { name: Transition.label },
					to: { name: Transition.to }
				},
				superTypes: []
			},
			TreeNode: {
				name: TreeNode.$type,
				properties: {
					classAnnotation: { name: TreeNode.classAnnotation },
					descAnnotation: { name: TreeNode.descAnnotation },
					iconAnnotation: { name: TreeNode.iconAnnotation },
					indent: { name: TreeNode.indent },
					name: { name: TreeNode.name }
				},
				superTypes: []
			},
			TreeView: {
				name: TreeView.$type,
				properties: {
					accDescr: { name: TreeView.accDescr },
					accTitle: { name: TreeView.accTitle },
					nodes: {
						name: TreeView.nodes,
						defaultValue: []
					},
					title: { name: TreeView.title }
				},
				superTypes: []
			},
			Treemap: {
				name: Treemap.$type,
				properties: {
					accDescr: { name: Treemap.accDescr },
					accTitle: { name: Treemap.accTitle },
					title: { name: Treemap.title },
					TreemapRows: {
						name: Treemap.TreemapRows,
						defaultValue: []
					}
				},
				superTypes: []
			},
			TreemapRow: {
				name: TreemapRow.$type,
				properties: {
					indent: { name: TreemapRow.indent },
					item: { name: TreemapRow.item }
				},
				superTypes: []
			},
			Wardley: {
				name: Wardley.$type,
				properties: {
					accDescr: { name: Wardley.accDescr },
					accelerators: {
						name: Wardley.accelerators,
						defaultValue: []
					},
					accTitle: { name: Wardley.accTitle },
					anchors: {
						name: Wardley.anchors,
						defaultValue: []
					},
					annotation: {
						name: Wardley.annotation,
						defaultValue: []
					},
					annotations: {
						name: Wardley.annotations,
						defaultValue: []
					},
					components: {
						name: Wardley.components,
						defaultValue: []
					},
					deaccelerators: {
						name: Wardley.deaccelerators,
						defaultValue: []
					},
					evolution: { name: Wardley.evolution },
					evolves: {
						name: Wardley.evolves,
						defaultValue: []
					},
					links: {
						name: Wardley.links,
						defaultValue: []
					},
					notes: {
						name: Wardley.notes,
						defaultValue: []
					},
					pipelines: {
						name: Wardley.pipelines,
						defaultValue: []
					},
					size: { name: Wardley.size },
					title: { name: Wardley.title }
				},
				superTypes: []
			}
		};
	}
	static #e = __name(this, "MermaidAstReflection");
}, reflection2 = new MermaidAstReflection(), loadedArchitectureGrammarGrammar, ArchitectureGrammarGrammar = /* @__PURE__ */ __name(() => loadedArchitectureGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"ArchitectureGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Architecture\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\"architecture-beta\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Statement\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"groups\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"services\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"junctions\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"edges\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"alignments\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"LeftPort\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\":\"},{\"$type\":\"Assignment\",\"feature\":\"lhsDir\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"RightPort\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"rhsDir\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\":\"}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Arrow\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"lhsInto\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"--\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"-\"},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@30\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"-\"}]}]},{\"$type\":\"Assignment\",\"feature\":\"rhsInto\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Group\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"group\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"icon\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@29\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@30\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"in\"},{\"$type\":\"Assignment\",\"feature\":\"in\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Service\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"service\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"iconText\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"icon\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@29\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@30\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"in\"},{\"$type\":\"Assignment\",\"feature\":\"in\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Junction\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"junction\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"in\"},{\"$type\":\"Assignment\",\"feature\":\"in\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Edge\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"lhsId\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"lhsGroup\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"rhsId\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"rhsGroup\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Alignment\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"align\"},{\"$type\":\"Assignment\",\"feature\":\"direction\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"row\"},{\"$type\":\"Keyword\",\"value\":\"column\"}]}},{\"$type\":\"Assignment\",\"feature\":\"members\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"members\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]},\"cardinality\":\"+\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"ARROW_DIRECTION\",\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"L\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"R\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"T\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"B\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARROW_GROUP\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\{group\\\\}/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARROW_INTO\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/<|>/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARCH_ICON\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\([\\\\w-:]+\\\\)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARCH_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\[(?:\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'|[^\\\\[\\\\]\\\\r\\\\n]+)\\\\]/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false}],\"interfaces\":[],\"types\":[]}"), "ArchitectureGrammarGrammar"), loadedCynefinGrammarGrammar, CynefinGrammarGrammar = /* @__PURE__ */ __name(() => loadedCynefinGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"CynefinGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Cynefin\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"cynefin-beta\"},{\"$type\":\"Keyword\",\"value\":\"cynefin-beta:\"}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"domains\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"transitions\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"DomainBlock\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"domain\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"items\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"*\"}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"DomainItem\",\"definition\":{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Transition\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"from\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"-->\"},{\"$type\":\"Assignment\",\"feature\":\"to\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\":\"},{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"DOMAIN_NAME\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"complex\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"complicated\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"clear\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"chaotic\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"confusion\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"interfaces\":[],\"types\":[]}"), "CynefinGrammarGrammar"), loadedEventModelingGrammar, EventModelingGrammar = /* @__PURE__ */ __name(() => loadedEventModelingGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"EventModeling\",\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"Common\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}}],\"superTypes\":[]}],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"EventModel\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"eventmodeling\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"modelEntities\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"frames\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"dataEntities\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"noteEntities\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"gwtEntities\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmModelEntityType\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"rmo\"},{\"$type\":\"Keyword\",\"value\":\"readmodel\"},{\"$type\":\"Keyword\",\"value\":\"ui\"},{\"$type\":\"Keyword\",\"value\":\"cmd\"},{\"$type\":\"Keyword\",\"value\":\"command\"},{\"$type\":\"Keyword\",\"value\":\"evt\"},{\"$type\":\"Keyword\",\"value\":\"event\"},{\"$type\":\"Keyword\",\"value\":\"pcr\"},{\"$type\":\"Keyword\",\"value\":\"processor\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmDataType\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"json\"},{\"$type\":\"Keyword\",\"value\":\"jsobj\"},{\"$type\":\"Keyword\",\"value\":\"figma\"},{\"$type\":\"Keyword\",\"value\":\"salt\"},{\"$type\":\"Keyword\",\"value\":\"uri\"},{\"$type\":\"Keyword\",\"value\":\"md\"},{\"$type\":\"Keyword\",\"value\":\"html\"},{\"$type\":\"Keyword\",\"value\":\"text\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"EmDataInline\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"`\"},{\"$type\":\"Assignment\",\"feature\":\"dataType\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"`\"}],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"dataInlineValue\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"EmDataBlock\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"`\"},{\"$type\":\"Assignment\",\"feature\":\"dataType\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"`\"}],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"dataBlockValue\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"QualifiedName\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\".\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmTimeFrame\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"tf\"},{\"$type\":\"Keyword\",\"value\":\"timeframe\"}]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"modelEntityType\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"entityIdentifier\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"->>\"},{\"$type\":\"Assignment\",\"feature\":\"sourceFrames\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@8\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}}],\"cardinality\":\"*\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"[[\"},{\"$type\":\"Assignment\",\"feature\":\"dataReference\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@10\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}},{\"$type\":\"Keyword\",\"value\":\"]]\"}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmResetFrame\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"rf\"},{\"$type\":\"Keyword\",\"value\":\"resetframe\"}]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"modelEntityType\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"entityIdentifier\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"->>\"},{\"$type\":\"Assignment\",\"feature\":\"sourceFrames\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@8\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}}],\"cardinality\":\"*\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"[[\"},{\"$type\":\"Assignment\",\"feature\":\"dataReference\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@10\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}},{\"$type\":\"Keyword\",\"value\":\"]]\"}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmFrame\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmModelEntity\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"entity\"},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmDataEntity\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"data\"},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmNoteEntity\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"note\"},{\"$type\":\"Assignment\",\"feature\":\"sourceFrame\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@8\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmGwt\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"gwt\"},{\"$type\":\"Assignment\",\"feature\":\"sourceFrame\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@8\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}},{\"$type\":\"Keyword\",\"value\":\"given\"},{\"$type\":\"Assignment\",\"feature\":\"givenStatements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]},\"cardinality\":\"+\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"when\"},{\"$type\":\"Assignment\",\"feature\":\"whenStatements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]},\"cardinality\":\"+\"}],\"cardinality\":\"?\"},{\"$type\":\"Keyword\",\"value\":\"then\"},{\"$type\":\"Assignment\",\"feature\":\"thenStatements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]},\"cardinality\":\"+\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EmGwtStatement\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"entityIdentifier\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@9\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EM_EID\",\"dataType\":\"string\",\"definition\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EM_FI\",\"dataType\":\"string\",\"definition\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"EM_ID\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[_a-zA-Z][\\\\w_]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EM_FID\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\d{1,3}/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EM_DATA_INLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\{(.*)\\\\}|\\\"(.*)\\\"|'(.*)'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EM_DATA_BLOCK\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\{[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?\\\\}(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EM_ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EM_ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EM_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EM_WS\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\s+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EM_YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EM_DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EM_SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EM_ML_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EM_SL_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\/\\\\/[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"imports\":[],\"types\":[]}"), "EventModelingGrammar"), loadedGitGraphGrammarGrammar, GitGraphGrammarGrammar = /* @__PURE__ */ __name(() => loadedGitGraphGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"GitGraphGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"GitGraph\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"gitGraph\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"gitGraph\"},{\"$type\":\"Keyword\",\"value\":\":\"}]},{\"$type\":\"Keyword\",\"value\":\"gitGraph:\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"gitGraph\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]},{\"$type\":\"Keyword\",\"value\":\":\"}]}]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"statements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Statement\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Direction\",\"definition\":{\"$type\":\"Assignment\",\"feature\":\"dir\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"LR\"},{\"$type\":\"Keyword\",\"value\":\"TB\"},{\"$type\":\"Keyword\",\"value\":\"BT\"}]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Commit\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"commit\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"id:\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"msg:\",\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"message\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"tag:\"},{\"$type\":\"Assignment\",\"feature\":\"tags\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"type:\"},{\"$type\":\"Assignment\",\"feature\":\"type\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"NORMAL\"},{\"$type\":\"Keyword\",\"value\":\"REVERSE\"},{\"$type\":\"Keyword\",\"value\":\"HIGHLIGHT\"}]}}]}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Branch\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"branch\"},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"order:\"},{\"$type\":\"Assignment\",\"feature\":\"order\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Merge\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"merge\"},{\"$type\":\"Assignment\",\"feature\":\"branch\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}]}},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"id:\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"tag:\"},{\"$type\":\"Assignment\",\"feature\":\"tags\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"type:\"},{\"$type\":\"Assignment\",\"feature\":\"type\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"NORMAL\"},{\"$type\":\"Keyword\",\"value\":\"REVERSE\"},{\"$type\":\"Keyword\",\"value\":\"HIGHLIGHT\"}]}}]}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Checkout\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"checkout\"},{\"$type\":\"Keyword\",\"value\":\"switch\"}]},{\"$type\":\"Assignment\",\"feature\":\"branch\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"CherryPicking\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"cherry-pick\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"id:\"},{\"$type\":\"Assignment\",\"feature\":\"id\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"tag:\"},{\"$type\":\"Assignment\",\"feature\":\"tags\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"parent:\"},{\"$type\":\"Assignment\",\"feature\":\"parent\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"name\":\"REFERENCE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false}],\"interfaces\":[],\"types\":[]}"), "GitGraphGrammarGrammar"), loadedInfoGrammarGrammar, InfoGrammarGrammar = /* @__PURE__ */ __name(() => loadedInfoGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"InfoGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Info\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\"info\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"showInfo\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[],\"cardinality\":\"*\"}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[],\"cardinality\":\"?\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"interfaces\":[],\"types\":[]}"), "InfoGrammarGrammar"), loadedPacketGrammarGrammar, PacketGrammarGrammar = /* @__PURE__ */ __name(() => loadedPacketGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"PacketGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Packet\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"packet\"},{\"$type\":\"Keyword\",\"value\":\"packet-beta\"}]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"blocks\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PacketBlock\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"start\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"-\"},{\"$type\":\"Assignment\",\"feature\":\"end\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}}],\"cardinality\":\"?\"}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"+\"},{\"$type\":\"Assignment\",\"feature\":\"bits\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}}]}]},{\"$type\":\"Keyword\",\"value\":\":\"},{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"interfaces\":[],\"types\":[]}"), "PacketGrammarGrammar"), loadedPieGrammarGrammar, PieGrammarGrammar = /* @__PURE__ */ __name(() => loadedPieGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"PieGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Pie\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\"pie\"},{\"$type\":\"Assignment\",\"feature\":\"showData\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"showData\"},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"sections\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PieSection\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\":\"},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT_PIE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT_PIE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/-?(0|[1-9][0-9]*)(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER_PIE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"interfaces\":[],\"types\":[]}"), "PieGrammarGrammar"), loadedRadarGrammarGrammar, RadarGrammarGrammar = /* @__PURE__ */ __name(() => loadedRadarGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"RadarGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Radar\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"radar-beta\"},{\"$type\":\"Keyword\",\"value\":\"radar-beta:\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"radar-beta\"},{\"$type\":\"Keyword\",\"value\":\":\"}]}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"axis\"},{\"$type\":\"Assignment\",\"feature\":\"axes\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"axes\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"curve\"},{\"$type\":\"Assignment\",\"feature\":\"curves\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"curves\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"options\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"options\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Label\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Axis\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Curve\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[],\"cardinality\":\"?\"},{\"$type\":\"Keyword\",\"value\":\"{\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]},{\"$type\":\"Keyword\",\"value\":\"}\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Entries\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"entries\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"entries\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"entries\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"entries\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"*\"}]}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"DetailedEntry\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"axis\",\"operator\":\"=\",\"terminal\":{\"$type\":\"CrossReference\",\"type\":{\"$ref\":\"#/rules@2\"},\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},\"deprecatedSyntax\":false,\"isMulti\":false}},{\"$type\":\"Keyword\",\"value\":\":\",\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"NumberEntry\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Option\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"showLegend\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"ticks\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"max\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"min\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"graticule\"}},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]}}]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"GRATICULE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"circle\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"polygon\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"Entry\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"axis\",\"isOptional\":true,\"type\":{\"$type\":\"ReferenceType\",\"referenceType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/rules@2\"}},\"isMulti\":false}},{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"number\"},\"isOptional\":false}],\"superTypes\":[]}],\"types\":[]}"), "RadarGrammarGrammar"), loadedRailroadAbnfGrammarGrammar, RailroadAbnfGrammarGrammar = /* @__PURE__ */ __name(() => loadedRailroadAbnfGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"RailroadAbnfGrammar\",\"rules\":[{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ABNF_RULENAME\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[A-Za-z][A-Za-z0-9-]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ABNF_STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"[^\\\"]*\\\"/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ABNF_NUMVAL\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/%[xXdDbB][0-9A-Fa-f]+(?:-[0-9A-Fa-f]+|\\\\.[0-9A-Fa-f]+)*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ABNF_REPEAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]*\\\\*[0-9]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ABNF_EXACT_REPEAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ABNF_WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t \\\\r\\\\n]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ABNF_YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ABNF_DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ABNF_SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ABNF_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/;[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"RailroadAbnf\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"railroad-abnf-beta\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"rules\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfRule\",\"returnType\":{\"$ref\":\"#/interfaces@1\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"=\"},{\"$type\":\"Assignment\",\"feature\":\"definition\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\";\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfAlternation\",\"returnType\":{\"$ref\":\"#/interfaces@2\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"/\"},{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfConcatenation\",\"returnType\":{\"$ref\":\"#/interfaces@3\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"elements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]},\"cardinality\":\"+\"},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfElement\",\"returnType\":{\"$ref\":\"#/interfaces@4\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"repeat\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"repeat\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"primary\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfPrimary\",\"returnType\":{\"$ref\":\"#/interfaces@5\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfStringLiteral\",\"returnType\":{\"$ref\":\"#/interfaces@6\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfNumVal\",\"returnType\":{\"$ref\":\"#/interfaces@7\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfRuleName\",\"returnType\":{\"$ref\":\"#/interfaces@8\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfGroup\",\"returnType\":{\"$ref\":\"#/interfaces@9\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"AbnfOptionalGroup\",\"returnType\":{\"$ref\":\"#/interfaces@10\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"RailroadAbnf\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"rules\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@1\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"AbnfRule\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"definition\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"AbnfAlternation\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"alternatives\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@3\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"AbnfConcatenation\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"elements\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@4\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"AbnfElement\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"repeat\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"primary\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@5\"}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"AbnfPrimary\",\"attributes\":[],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"AbnfStringLiteral\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"AbnfNumVal\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"AbnfRuleName\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"AbnfGroup\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"AbnfOptionalGroup\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]}],\"imports\":[],\"types\":[]}"), "RailroadAbnfGrammarGrammar"), loadedRailroadEbnfGrammarGrammar, RailroadEbnfGrammarGrammar = /* @__PURE__ */ __name(() => loadedRailroadEbnfGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"RailroadEbnfGrammar\",\"rules\":[{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EBNF_ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[A-Z_a-z][\\\\w-]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EBNF_STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"EBNF_SPECIAL_SEQUENCE\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\?(?=[^?;]*[^?\\\\s;][^?;]*\\\\?)[^?;]*\\\\?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EBNF_WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t \\\\r\\\\n]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EBNF_YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EBNF_DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EBNF_SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EBNF_BLOCK_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"EBNF_ISO_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\(\\\\*[\\\\s\\\\S]*?\\\\*\\\\)/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"RailroadEbnf\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"railroad-ebnf-beta\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"rules\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]},\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfRule\",\"returnType\":{\"$ref\":\"#/interfaces@1\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"=\"},{\"$type\":\"Keyword\",\"value\":\"::=\"}]},{\"$type\":\"Assignment\",\"feature\":\"definition\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\";\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfChoice\",\"returnType\":{\"$ref\":\"#/interfaces@2\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"|\"},{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfSequence\",\"returnType\":{\"$ref\":\"#/interfaces@3\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"elements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\",\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"elements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfTerm\",\"returnType\":{\"$ref\":\"#/interfaces@4\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"base\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"postfixes\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]},\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfPrimary\",\"returnType\":{\"$ref\":\"#/interfaces@5\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfTerminal\",\"returnType\":{\"$ref\":\"#/interfaces@7\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfNonTerminal\",\"returnType\":{\"$ref\":\"#/interfaces@8\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfSpecial\",\"returnType\":{\"$ref\":\"#/interfaces@9\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"text\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfGroup\",\"returnType\":{\"$ref\":\"#/interfaces@10\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfOptional\",\"returnType\":{\"$ref\":\"#/interfaces@11\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfRepetition\",\"returnType\":{\"$ref\":\"#/interfaces@12\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"{\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"}\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfPostfix\",\"returnType\":{\"$ref\":\"#/interfaces@6\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@25\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@26\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@27\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@28\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfOptionalPostfix\",\"returnType\":{\"$ref\":\"#/interfaces@13\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"?\"}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfZeroOrMorePostfix\",\"returnType\":{\"$ref\":\"#/interfaces@14\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"*\"}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfOneOrMorePostfix\",\"returnType\":{\"$ref\":\"#/interfaces@15\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"+\"}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EbnfExceptionPostfix\",\"returnType\":{\"$ref\":\"#/interfaces@16\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"-\"},{\"$type\":\"Assignment\",\"feature\":\"except\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}}]},\"entry\":false,\"fragment\":false,\"parameters\":[]}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"RailroadEbnf\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"rules\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@1\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfRule\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"definition\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfChoice\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"alternatives\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@3\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfSequence\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"elements\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@4\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfTerm\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"base\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@5\"}},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"postfixes\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@6\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfPrimary\",\"attributes\":[],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfPostfix\",\"attributes\":[],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"EbnfTerminal\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfNonTerminal\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfSpecial\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"text\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfGroup\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfOptional\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfRepetition\",\"superTypes\":[{\"$ref\":\"#/interfaces@5\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfOptionalPostfix\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"operator\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfZeroOrMorePostfix\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"operator\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfOneOrMorePostfix\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"operator\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"EbnfExceptionPostfix\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"except\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@5\"}},\"isOptional\":false}]}],\"imports\":[],\"types\":[]}"), "RailroadEbnfGrammarGrammar"), loadedRailroadGrammarGrammar, RailroadGrammarGrammar = /* @__PURE__ */ __name(() => loadedRailroadGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"RailroadGrammar\",\"rules\":[{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"RR_ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[A-Z_a-z][\\\\w-]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"RR_STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"RR_WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t \\\\r\\\\n]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"RR_YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"RR_DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"RR_SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"RR_BLOCK_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Railroad\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"railroad-beta\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"rules\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]},\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadRule\",\"returnType\":{\"$ref\":\"#/interfaces@1\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"=\"},{\"$type\":\"Assignment\",\"feature\":\"definition\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\";\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadExpression\",\"returnType\":{\"$ref\":\"#/interfaces@2\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadSequenceExpr\",\"returnType\":{\"$ref\":\"#/interfaces@3\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"sequence\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"elements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"elements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadChoiceExpr\",\"returnType\":{\"$ref\":\"#/interfaces@4\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"choice\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadOptionalExpr\",\"returnType\":{\"$ref\":\"#/interfaces@5\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"optional\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadOneOrMoreExpr\",\"returnType\":{\"$ref\":\"#/interfaces@6\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"oneOrMore\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadZeroOrMoreExpr\",\"returnType\":{\"$ref\":\"#/interfaces@7\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"zeroOrMore\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadTerminalExpr\",\"returnType\":{\"$ref\":\"#/interfaces@8\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"terminal\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadNonTerminalExpr\",\"returnType\":{\"$ref\":\"#/interfaces@9\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"nonterminal\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"RailroadSpecialExpr\",\"returnType\":{\"$ref\":\"#/interfaces@10\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"special\"},{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"text\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"Railroad\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"rules\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@1\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"RailroadRule\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"definition\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"RailroadExpression\",\"attributes\":[],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"RailroadSequenceExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"elements\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadChoiceExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"alternatives\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadOptionalExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadOneOrMoreExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadZeroOrMoreExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadTerminalExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadNonTerminalExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"RailroadSpecialExpr\",\"superTypes\":[{\"$ref\":\"#/interfaces@2\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"text\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]}],\"imports\":[],\"types\":[]}"), "RailroadGrammarGrammar"), loadedRailroadPegGrammarGrammar, RailroadPegGrammarGrammar = /* @__PURE__ */ __name(() => loadedRailroadPegGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"RailroadPegGrammar\",\"rules\":[{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"PEG_ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[A-Z_a-z][\\\\w-]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"PEG_STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"PEG_WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t \\\\r\\\\n]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"PEG_YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"PEG_DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"PEG_SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"PEG_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/#[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"RailroadPeg\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"railroad-peg-beta\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"*\"},{\"$type\":\"Assignment\",\"feature\":\"rules\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]},\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegRule\",\"returnType\":{\"$ref\":\"#/interfaces@1\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"<-\"},{\"$type\":\"Assignment\",\"feature\":\"definition\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\";\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegOrderedChoice\",\"returnType\":{\"$ref\":\"#/interfaces@2\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"/\"},{\"$type\":\"Assignment\",\"feature\":\"alternatives\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegSequence\",\"returnType\":{\"$ref\":\"#/interfaces@3\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"elements\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},\"cardinality\":\"+\"},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegPrefix\",\"returnType\":{\"$ref\":\"#/interfaces@4\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"&\"}},{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"!\"}}],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"suffix\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegSuffix\",\"returnType\":{\"$ref\":\"#/interfaces@5\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"primary\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"?\"}},{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"*\"}},{\"$type\":\"Assignment\",\"feature\":\"operator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"+\"}}],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegPrimary\",\"returnType\":{\"$ref\":\"#/interfaces@6\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegLiteral\",\"returnType\":{\"$ref\":\"#/interfaces@7\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegIdentifier\",\"returnType\":{\"$ref\":\"#/interfaces@8\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegGroup\",\"returnType\":{\"$ref\":\"#/interfaces@9\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"element\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PegAny\",\"returnType\":{\"$ref\":\"#/interfaces@10\"},\"definition\":{\"$type\":\"Assignment\",\"feature\":\"dot\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\".\"}},\"entry\":false,\"fragment\":false,\"parameters\":[]}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"RailroadPeg\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"rules\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@1\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegRule\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"definition\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegOrderedChoice\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"alternatives\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@3\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegSequence\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"elements\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@4\"}}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegPrefix\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"operator\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"suffix\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@5\"}},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegSuffix\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"primary\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@6\"}},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"operator\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegPrimary\",\"attributes\":[],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"PegLiteral\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"PegIdentifier\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"PegGroup\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"element\",\"type\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/interfaces@2\"}},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"PegAny\",\"superTypes\":[{\"$ref\":\"#/interfaces@6\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"dot\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}]}],\"imports\":[],\"types\":[]}"), "RailroadPegGrammarGrammar"), loadedTreemapGrammarGrammar, TreemapGrammarGrammar = /* @__PURE__ */ __name(() => loadedTreemapGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"TreemapGrammar\",\"rules\":[{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Treemap\",\"returnType\":{\"$ref\":\"#/interfaces@4\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"TreemapRows\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"TREEMAP_KEYWORD\",\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"treemap-beta\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"treemap\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"CLASS_DEF\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STYLE_SEPARATOR\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\":::\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"SEPARATOR\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\":\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"COMMA\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\",\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INDENTATION\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]{1,}/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WS\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ML_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\%\\\\%[^\\\\n]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"NL\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"ParserRule\",\"name\":\"TreemapRow\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"indent\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"item\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"ClassDef\",\"dataType\":\"string\",\"definition\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Item\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Section\",\"returnType\":{\"$ref\":\"#/interfaces@1\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"classSelector\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}}],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Leaf\",\"returnType\":{\"$ref\":\"#/interfaces@2\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[],\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"value\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"classSelector\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}}],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"ID2\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[a-zA-Z_][a-zA-Z0-9_]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER2\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9_\\\\.\\\\,]+/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"MyNumber\",\"dataType\":\"number\",\"definition\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"STRING2\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"[^\\\"]*\\\"|'[^']*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"Item\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"name\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"classSelector\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"Section\",\"superTypes\":[{\"$ref\":\"#/interfaces@0\"}],\"attributes\":[]},{\"$type\":\"Interface\",\"name\":\"Leaf\",\"superTypes\":[{\"$ref\":\"#/interfaces@0\"}],\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"value\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"number\"},\"isOptional\":false}]},{\"$type\":\"Interface\",\"name\":\"ClassDefStatement\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"className\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"styleText\",\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"},\"isOptional\":false}],\"superTypes\":[]},{\"$type\":\"Interface\",\"name\":\"Treemap\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"TreemapRows\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/rules@15\"}}},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}}],\"superTypes\":[]}],\"imports\":[],\"types\":[],\"$comment\":\"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */\"}"), "TreemapGrammarGrammar"), loadedTreeViewGrammarGrammar, TreeViewGrammarGrammar = /* @__PURE__ */ __name(() => loadedTreeViewGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"TreeViewGrammar\",\"rules\":[{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"TreeView\",\"returnType\":{\"$ref\":\"#/interfaces@0\"},\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"treeView-beta\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[],\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"nodes\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]},\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@0\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"CLASS_ANNOTATION\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+:::[ \\\\t]*[A-Za-z_][\\\\w-]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ICON_ANNOTATION\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+icon\\\\([\\\\w-]*(?::[\\\\w-]+)?\\\\)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"DESC_ANNOTATION\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+##[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INDENTATION\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]{1,}/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"QUOTED_NAME\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"[^\\\"]*\\\"|'[^']*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WS\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"ML_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\%\\\\%[^\\\\n]*/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"NL\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"name\":\"BARE_NAME\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/(?!:::|icon\\\\(|##)[^ \\\\t\\\\n\\\\r\\\"'](?:(?![ \\\\t]+:::[ \\\\t]*[A-Za-z_]|[ \\\\t]+icon\\\\(|[ \\\\t]+##)[^\\\\n\\\\r])*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"ParserRule\",\"name\":\"TreeNode\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"indent\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}}]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"classAnnotation\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"iconAnnotation\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"descAnnotation\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]}}],\"cardinality\":\"*\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]}],\"interfaces\":[{\"$type\":\"Interface\",\"name\":\"TreeView\",\"attributes\":[{\"$type\":\"TypeAttribute\",\"name\":\"nodes\",\"type\":{\"$type\":\"ArrayType\",\"elementType\":{\"$type\":\"SimpleType\",\"typeRef\":{\"$ref\":\"#/rules@14\"}}},\"isOptional\":false},{\"$type\":\"TypeAttribute\",\"name\":\"title\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accTitle\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}},{\"$type\":\"TypeAttribute\",\"name\":\"accDescr\",\"isOptional\":true,\"type\":{\"$type\":\"SimpleType\",\"primitiveType\":\"string\"}}],\"superTypes\":[]}],\"imports\":[],\"types\":[],\"$comment\":\"/**\\n * TreeView grammar for Langium\\n *\\n * Supports both quoted labels (\\\"my file\\\") and bare labels (index.js).\\n * Annotations (:::class, icon(), ## description) are parsed directly into\\n * AST fields by the grammar. Value conversion for stripping quotes, extracting\\n * class names, icon names, and description text happens in valueConverter.ts.\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treeView keyword, allowing for empty lines and comments before the\\n * treeView declaration.\\n */\"}"), "TreeViewGrammarGrammar"), loadedWardleyGrammarGrammar, WardleyGrammarGrammar = /* @__PURE__ */ __name(() => loadedWardleyGrammarGrammar ??= loadGrammarFromJson("{\"$type\":\"Grammar\",\"isDeclared\":true,\"name\":\"WardleyGrammar\",\"imports\":[],\"rules\":[{\"$type\":\"ParserRule\",\"entry\":true,\"name\":\"Wardley\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@52\"},\"arguments\":[],\"cardinality\":\"*\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@25\"},\"arguments\":[]},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@52\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@42\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@1\"},\"arguments\":[]}],\"cardinality\":\"*\"}]},\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"Statement\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"size\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@2\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"evolution\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@3\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"anchors\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@5\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"components\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@6\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"links\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@9\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"evolves\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@10\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"pipelines\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@11\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"notes\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@13\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"annotations\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@14\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"annotation\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@15\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accelerators\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@17\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"deaccelerators\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@18\"},\"arguments\":[]}}]},\"entry\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Size\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@26\"},\"arguments\":[]},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"width\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"height\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Evolution\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@27\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"stages\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"stages\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@4\"},\"arguments\":[]}}],\"cardinality\":\"+\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"EvolutionStage\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"@\"},{\"$type\":\"Assignment\",\"feature\":\"boundary\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}}],\"cardinality\":\"?\"},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"/\"},{\"$type\":\"Assignment\",\"feature\":\"secondName\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}}],\"cardinality\":\"?\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Anchor\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@28\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"visibility\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"evolution\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Component\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@29\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"visibility\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"evolution\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"decorator\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@8\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"inertia\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@31\"},\"arguments\":[]}},{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"inertia\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@31\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]}],\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Label\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@30\"},\"arguments\":[]},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"negX\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"-\"},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"offsetX\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"negY\",\"operator\":\"?=\",\"terminal\":{\"$type\":\"Keyword\",\"value\":\"-\"},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"offsetY\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Decorator\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Keyword\",\"value\":\"(\"},{\"$type\":\"Assignment\",\"feature\":\"strategy\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@24\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\")\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Link\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"from\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Assignment\",\"feature\":\"fromPort\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"arrow\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@22\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@20\"},\"arguments\":[]}]},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"to\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Assignment\",\"feature\":\"toPort\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@21\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"Assignment\",\"feature\":\"linkLabel\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@23\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Evolve\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@32\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"component\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Assignment\",\"feature\":\"target\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Pipeline\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@33\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"parent\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Keyword\",\"value\":\"{\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@52\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"Assignment\",\"feature\":\"components\",\"operator\":\"+=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@12\"},\"arguments\":[]},\"cardinality\":\"+\"},{\"$type\":\"Keyword\",\"value\":\"}\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"PipelineComponent\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@29\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"evolution\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"Assignment\",\"feature\":\"label\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@7\"},\"arguments\":[]},\"cardinality\":\"?\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Note\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@34\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"text\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"visibility\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"evolution\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Annotations\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@35\"},\"arguments\":[]},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"x\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"y\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Annotation\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@36\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"number\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"x\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"y\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@16\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"Assignment\",\"feature\":\"text\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]}},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"CoordinateValue\",\"dataType\":\"number\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Accelerator\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@37\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"x\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"y\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"name\":\"Deaccelerator\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@38\"},\"arguments\":[]},{\"$type\":\"Assignment\",\"feature\":\"name\",\"operator\":\"=\",\"terminal\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@50\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@51\"},\"arguments\":[]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@39\"},\"arguments\":[]}]}},{\"$type\":\"Keyword\",\"value\":\"[\"},{\"$type\":\"Assignment\",\"feature\":\"x\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\",\"},{\"$type\":\"Assignment\",\"feature\":\"y\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@19\"},\"arguments\":[]}},{\"$type\":\"Keyword\",\"value\":\"]\"},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"WARDLEY_NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ARROW\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"->\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"LINK_PORT\",\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"+<>\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"+>\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"+<\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"LINK_ARROW\",\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"-->\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"-.->\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\">\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"RegexToken\",\"regex\":\"/\\\\+'[^']*'<>/\",\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"RegexToken\",\"regex\":\"/\\\\+'[^']*'</\",\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"RegexToken\",\"regex\":\"/\\\\+'[^']*'>/\",\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"LINK_LABEL\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/;[^\\\\n\\\\r]+/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRATEGY\",\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"build\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"buy\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"outsource\"},\"parenthesized\":false}],\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"market\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_WARDLEY\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"wardley-beta\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_SIZE\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"size\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_EVOLUTION\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"evolution\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_ANCHOR\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"anchor\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_COMPONENT\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"component\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_LABEL\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"label\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_INERTIA\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"inertia\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_EVOLVE\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"evolve\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_PIPELINE\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"pipeline\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_NOTE\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"note\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_ANNOTATIONS\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"annotations\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_ANNOTATION\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"annotation\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_ACCELERATOR\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"accelerator\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"KW_DEACCELERATOR\",\"definition\":{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"deaccelerator\"},\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NAME_WITH_SPACES\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/(?!title\\\\s|accTitle|accDescr)[A-Za-z](?:[A-Za-z0-9_()&]|-(?!>))*(?:[ \\\\t]+[A-Za-z(](?:[A-Za-z0-9_()&]|-(?!>))*)*/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WS\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[ \\\\t]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"ParserRule\",\"name\":\"EOL\",\"dataType\":\"string\",\"definition\":{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@52\"},\"arguments\":[],\"cardinality\":\"+\"},{\"$type\":\"EndOfFile\"}]},\"entry\":false,\"fragment\":false,\"parameters\":[]},{\"$type\":\"ParserRule\",\"fragment\":true,\"name\":\"TitleAndAccessibilities\",\"definition\":{\"$type\":\"Group\",\"elements\":[{\"$type\":\"Alternatives\",\"elements\":[{\"$type\":\"Assignment\",\"feature\":\"accDescr\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@44\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"accTitle\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@45\"},\"arguments\":[]}},{\"$type\":\"Assignment\",\"feature\":\"title\",\"operator\":\"=\",\"terminal\":{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@46\"},\"arguments\":[]}}]},{\"$type\":\"RuleCall\",\"rule\":{\"$ref\":\"#/rules@41\"},\"arguments\":[]}],\"cardinality\":\"+\"},\"entry\":false,\"parameters\":[]},{\"$type\":\"TerminalRule\",\"name\":\"BOOLEAN\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"boolean\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"true\"},\"parenthesized\":false},{\"$type\":\"CharacterRange\",\"left\":{\"$type\":\"Keyword\",\"value\":\"false\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_DESCR\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ACC_TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"TITLE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"FLOAT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[0-9]+\\\\.[0-9]+(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"INT\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/0|[1-9][0-9]*(?!\\\\.)/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NUMBER\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"number\"},\"definition\":{\"$type\":\"TerminalAlternatives\",\"elements\":[{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@47\"},\"parenthesized\":false},{\"$type\":\"TerminalRuleCall\",\"rule\":{\"$ref\":\"#/rules@48\"},\"parenthesized\":false}],\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"STRING\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\"([^\\\"\\\\\\\\]|\\\\\\\\.)*\\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"ID\",\"type\":{\"$type\":\"ReturnType\",\"name\":\"string\"},\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\w]([-\\\\w]*\\\\w)?/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"name\":\"NEWLINE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/\\\\r?\\\\n/\",\"parenthesized\":false},\"fragment\":false,\"hidden\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"WHITESPACE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]+/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"YAML\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"DIRECTIVE\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/\",\"parenthesized\":false},\"fragment\":false},{\"$type\":\"TerminalRule\",\"hidden\":true,\"name\":\"SINGLE_LINE_COMMENT\",\"definition\":{\"$type\":\"RegexToken\",\"regex\":\"/[\\\\t ]*%%[^\\\\n\\\\r]*/\",\"parenthesized\":false},\"fragment\":false}],\"interfaces\":[],\"types\":[]}"), "WardleyGrammarGrammar"), ArchitectureGrammarLanguageMetaData = {
	languageId: "architecture",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, CynefinGrammarLanguageMetaData = {
	languageId: "cynefin",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, EventModelingLanguageMetaData = {
	languageId: "eventmodeling",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, GitGraphGrammarLanguageMetaData = {
	languageId: "gitGraph",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, InfoGrammarLanguageMetaData = {
	languageId: "info",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, PacketGrammarLanguageMetaData = {
	languageId: "packet",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, PieGrammarLanguageMetaData = {
	languageId: "pie",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, RadarGrammarLanguageMetaData = {
	languageId: "radar",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, RailroadAbnfGrammarLanguageMetaData = {
	languageId: "railroadAbnf",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, RailroadEbnfGrammarLanguageMetaData = {
	languageId: "railroadEbnf",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, RailroadGrammarLanguageMetaData = {
	languageId: "railroad",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, RailroadPegGrammarLanguageMetaData = {
	languageId: "railroadPeg",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, TreemapGrammarLanguageMetaData = {
	languageId: "treemap",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, TreeViewGrammarLanguageMetaData = {
	languageId: "treeView",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, WardleyGrammarLanguageMetaData = {
	languageId: "wardley",
	fileExtensions: [".mmd", ".mermaid"],
	caseInsensitive: !1,
	mode: "production"
}, MermaidGeneratedSharedModule = { AstReflection: /* @__PURE__ */ __name(() => new MermaidAstReflection(), "AstReflection") }, ArchitectureGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => ArchitectureGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => ArchitectureGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, CynefinGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => CynefinGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => CynefinGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, EventModelingGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => EventModelingGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => EventModelingLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, GitGraphGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => GitGraphGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => GitGraphGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, InfoGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => InfoGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => InfoGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, PacketGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => PacketGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => PacketGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, PieGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => PieGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => PieGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, RadarGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => RadarGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => RadarGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, RailroadAbnfGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => RailroadAbnfGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => RailroadAbnfGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, RailroadEbnfGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => RailroadEbnfGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => RailroadEbnfGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, RailroadGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => RailroadGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => RailroadGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, RailroadPegGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => RailroadPegGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => RailroadPegGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, TreemapGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => TreemapGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => TreemapGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, TreeViewGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => TreeViewGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => TreeViewGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, WardleyGrammarGeneratedModule = {
	Grammar: /* @__PURE__ */ __name(() => WardleyGrammarGrammar(), "Grammar"),
	LanguageMetaData: /* @__PURE__ */ __name(() => WardleyGrammarLanguageMetaData, "LanguageMetaData"),
	parser: {}
}, rulesRegexes = {
	ACC_DESCR: /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/,
	ACC_TITLE: /accTitle[\t ]*:([^\n\r]*)/,
	TITLE: /title([\t ][^\n\r]*|)/
}, AbstractMermaidValueConverter = class extends DefaultValueConverter {
	static #e = __name(this, "AbstractMermaidValueConverter");
	runConverter(e, t, n) {
		let r = this.runCommonConverter(e, t, n);
		return r === void 0 && (r = this.runCustomConverter(e, t, n)), r === void 0 ? super.runConverter(e, t, n) : r;
	}
	runCommonConverter(e, t, n) {
		let r = rulesRegexes[e.name];
		if (r === void 0) return;
		let i = r.exec(t);
		if (i !== null) {
			if (i[1] !== void 0) return i[1].trim().replace(/[\t ]{2,}/gm, " ");
			if (i[2] !== void 0) return i[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, "\n");
		}
	}
}, CommonValueConverter = class extends AbstractMermaidValueConverter {
	static #e = __name(this, "CommonValueConverter");
	runCustomConverter(e, t, n) {}
}, AbstractMermaidTokenBuilder = class extends DefaultTokenBuilder {
	static #e = __name(this, "AbstractMermaidTokenBuilder");
	constructor(e) {
		super(), this.keywords = new Set(e);
	}
	buildKeywordTokens(e, t, n) {
		let r = super.buildKeywordTokens(e, t, n);
		return r.forEach((e) => {
			this.keywords.has(e.name) && e.PATTERN !== void 0 && (e.PATTERN = /* @__PURE__ */ RegExp(e.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
		}), r;
	}
};
(class extends AbstractMermaidTokenBuilder {
	static #e = __name(this, "CommonTokenBuilder");
});
export { createDefaultSharedCoreModule as C, createDefaultCoreModule as S, isEmResetFrame as T, RailroadPegGrammarGeneratedModule as _, CynefinGrammarGeneratedModule as a, WardleyGrammarGeneratedModule as b, GitGraphGrammarGeneratedModule as c, PacketGrammarGeneratedModule as d, PieGrammarGeneratedModule as f, RailroadGrammarGeneratedModule as g, RailroadEbnfGrammarGeneratedModule as h, CommonValueConverter as i, InfoGrammarGeneratedModule as l, RailroadAbnfGrammarGeneratedModule as m, AbstractMermaidValueConverter as n, EmptyFileSystem as o, RadarGrammarGeneratedModule as p, ArchitectureGrammarGeneratedModule as r, EventModelingGeneratedModule as s, AbstractMermaidTokenBuilder as t, MermaidGeneratedSharedModule as u, TreeViewGrammarGeneratedModule as v, inject as w, __name as x, TreemapGrammarGeneratedModule as y };
