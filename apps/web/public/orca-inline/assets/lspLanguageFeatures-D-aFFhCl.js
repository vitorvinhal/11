import { a as MarkerSeverity, c as Range, f as Uri, h as languages, p as editor } from "./editor.api2-B26FOp3A.js";
var DocumentUri;
(function(p) {
	function H(p) {
		return typeof p == "string";
	}
	p.is = H;
})(DocumentUri ||= {});
var URI;
(function(p) {
	function H(p) {
		return typeof p == "string";
	}
	p.is = H;
})(URI ||= {});
var integer;
(function(p) {
	p.MIN_VALUE = -2147483648, p.MAX_VALUE = 2147483647;
	function H(H) {
		return typeof H == "number" && p.MIN_VALUE <= H && H <= p.MAX_VALUE;
	}
	p.is = H;
})(integer ||= {});
var uinteger;
(function(p) {
	p.MIN_VALUE = 0, p.MAX_VALUE = 2147483647;
	function H(H) {
		return typeof H == "number" && p.MIN_VALUE <= H && H <= p.MAX_VALUE;
	}
	p.is = H;
})(uinteger ||= {});
var Position;
(function(p) {
	function H(p, H) {
		return p === Number.MAX_VALUE && (p = uinteger.MAX_VALUE), H === Number.MAX_VALUE && (H = uinteger.MAX_VALUE), {
			line: p,
			character: H
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.objectLiteral(H) && Is.uinteger(H.line) && Is.uinteger(H.character);
	}
	p.is = U;
})(Position ||= {});
var Range$1;
(function(p) {
	function H(p, H, U, W) {
		if (Is.uinteger(p) && Is.uinteger(H) && Is.uinteger(U) && Is.uinteger(W)) return {
			start: Position.create(p, H),
			end: Position.create(U, W)
		};
		if (Position.is(p) && Position.is(H)) return {
			start: p,
			end: H
		};
		throw Error(`Range#create called with invalid arguments[${p}, ${H}, ${U}, ${W}]`);
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.objectLiteral(H) && Position.is(H.start) && Position.is(H.end);
	}
	p.is = U;
})(Range$1 ||= {});
var Location;
(function(p) {
	function H(p, H) {
		return {
			uri: p,
			range: H
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.objectLiteral(H) && Range$1.is(H.range) && (Is.string(H.uri) || Is.undefined(H.uri));
	}
	p.is = U;
})(Location ||= {});
var LocationLink;
(function(p) {
	function H(p, H, U, W) {
		return {
			targetUri: p,
			targetRange: H,
			targetSelectionRange: U,
			originSelectionRange: W
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.objectLiteral(H) && Range$1.is(H.targetRange) && Is.string(H.targetUri) && Range$1.is(H.targetSelectionRange) && (Range$1.is(H.originSelectionRange) || Is.undefined(H.originSelectionRange));
	}
	p.is = U;
})(LocationLink ||= {});
var Color;
(function(p) {
	function H(p, H, U, W) {
		return {
			red: p,
			green: H,
			blue: U,
			alpha: W
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.objectLiteral(H) && Is.numberRange(H.red, 0, 1) && Is.numberRange(H.green, 0, 1) && Is.numberRange(H.blue, 0, 1) && Is.numberRange(H.alpha, 0, 1);
	}
	p.is = U;
})(Color ||= {});
var ColorInformation;
(function(p) {
	function H(p, H) {
		return {
			range: p,
			color: H
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.objectLiteral(H) && Range$1.is(H.range) && Color.is(H.color);
	}
	p.is = U;
})(ColorInformation ||= {});
var ColorPresentation;
(function(p) {
	function H(p, H, U) {
		return {
			label: p,
			textEdit: H,
			additionalTextEdits: U
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.objectLiteral(H) && Is.string(H.label) && (Is.undefined(H.textEdit) || TextEdit.is(H)) && (Is.undefined(H.additionalTextEdits) || Is.typedArray(H.additionalTextEdits, TextEdit.is));
	}
	p.is = U;
})(ColorPresentation ||= {});
var FoldingRangeKind;
(function(p) {
	p.Comment = "comment", p.Imports = "imports", p.Region = "region";
})(FoldingRangeKind ||= {});
var FoldingRange;
(function(p) {
	function H(p, H, U, W, G, K) {
		let q = {
			startLine: p,
			endLine: H
		};
		return Is.defined(U) && (q.startCharacter = U), Is.defined(W) && (q.endCharacter = W), Is.defined(G) && (q.kind = G), Is.defined(K) && (q.collapsedText = K), q;
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.objectLiteral(H) && Is.uinteger(H.startLine) && Is.uinteger(H.startLine) && (Is.undefined(H.startCharacter) || Is.uinteger(H.startCharacter)) && (Is.undefined(H.endCharacter) || Is.uinteger(H.endCharacter)) && (Is.undefined(H.kind) || Is.string(H.kind));
	}
	p.is = U;
})(FoldingRange ||= {});
var DiagnosticRelatedInformation;
(function(p) {
	function H(p, H) {
		return {
			location: p,
			message: H
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && Location.is(H.location) && Is.string(H.message);
	}
	p.is = U;
})(DiagnosticRelatedInformation ||= {});
var DiagnosticSeverity;
(function(p) {
	p.Error = 1, p.Warning = 2, p.Information = 3, p.Hint = 4;
})(DiagnosticSeverity ||= {});
var DiagnosticTag;
(function(p) {
	p.Unnecessary = 1, p.Deprecated = 2;
})(DiagnosticTag ||= {});
var CodeDescription;
(function(p) {
	function H(p) {
		let H = p;
		return Is.objectLiteral(H) && Is.string(H.href);
	}
	p.is = H;
})(CodeDescription ||= {});
var Diagnostic;
(function(p) {
	function H(p, H, U, W, G, K) {
		let q = {
			range: p,
			message: H
		};
		return Is.defined(U) && (q.severity = U), Is.defined(W) && (q.code = W), Is.defined(G) && (q.source = G), Is.defined(K) && (q.relatedInformation = K), q;
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && Range$1.is(H.range) && Is.string(H.message) && (Is.number(H.severity) || Is.undefined(H.severity)) && (Is.integer(H.code) || Is.string(H.code) || Is.undefined(H.code)) && (Is.undefined(H.codeDescription) || Is.string(H.codeDescription?.href)) && (Is.string(H.source) || Is.undefined(H.source)) && (Is.undefined(H.relatedInformation) || Is.typedArray(H.relatedInformation, DiagnosticRelatedInformation.is));
	}
	p.is = U;
})(Diagnostic ||= {});
var Command;
(function(p) {
	function H(p, H, ...U) {
		let W = {
			title: p,
			command: H
		};
		return Is.defined(U) && U.length > 0 && (W.arguments = U), W;
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && Is.string(H.title) && Is.string(H.command);
	}
	p.is = U;
})(Command ||= {});
var TextEdit;
(function(p) {
	function H(p, H) {
		return {
			range: p,
			newText: H
		};
	}
	p.replace = H;
	function U(p, H) {
		return {
			range: {
				start: p,
				end: p
			},
			newText: H
		};
	}
	p.insert = U;
	function W(p) {
		return {
			range: p,
			newText: ""
		};
	}
	p.del = W;
	function G(p) {
		let H = p;
		return Is.objectLiteral(H) && Is.string(H.newText) && Range$1.is(H.range);
	}
	p.is = G;
})(TextEdit ||= {});
var ChangeAnnotation;
(function(p) {
	function H(p, H, U) {
		let W = { label: p };
		return H !== void 0 && (W.needsConfirmation = H), U !== void 0 && (W.description = U), W;
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.objectLiteral(H) && Is.string(H.label) && (Is.boolean(H.needsConfirmation) || H.needsConfirmation === void 0) && (Is.string(H.description) || H.description === void 0);
	}
	p.is = U;
})(ChangeAnnotation ||= {});
var ChangeAnnotationIdentifier;
(function(p) {
	function H(p) {
		let H = p;
		return Is.string(H);
	}
	p.is = H;
})(ChangeAnnotationIdentifier ||= {});
var AnnotatedTextEdit;
(function(p) {
	function H(p, H, U) {
		return {
			range: p,
			newText: H,
			annotationId: U
		};
	}
	p.replace = H;
	function U(p, H, U) {
		return {
			range: {
				start: p,
				end: p
			},
			newText: H,
			annotationId: U
		};
	}
	p.insert = U;
	function W(p, H) {
		return {
			range: p,
			newText: "",
			annotationId: H
		};
	}
	p.del = W;
	function G(p) {
		let H = p;
		return TextEdit.is(H) && (ChangeAnnotation.is(H.annotationId) || ChangeAnnotationIdentifier.is(H.annotationId));
	}
	p.is = G;
})(AnnotatedTextEdit ||= {});
var TextDocumentEdit;
(function(p) {
	function H(p, H) {
		return {
			textDocument: p,
			edits: H
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && OptionalVersionedTextDocumentIdentifier.is(H.textDocument) && Array.isArray(H.edits);
	}
	p.is = U;
})(TextDocumentEdit ||= {});
var CreateFile;
(function(p) {
	function H(p, H, U) {
		let W = {
			kind: "create",
			uri: p
		};
		return H !== void 0 && (H.overwrite !== void 0 || H.ignoreIfExists !== void 0) && (W.options = H), U !== void 0 && (W.annotationId = U), W;
	}
	p.create = H;
	function U(p) {
		let H = p;
		return H && H.kind === "create" && Is.string(H.uri) && (H.options === void 0 || (H.options.overwrite === void 0 || Is.boolean(H.options.overwrite)) && (H.options.ignoreIfExists === void 0 || Is.boolean(H.options.ignoreIfExists))) && (H.annotationId === void 0 || ChangeAnnotationIdentifier.is(H.annotationId));
	}
	p.is = U;
})(CreateFile ||= {});
var RenameFile;
(function(p) {
	function H(p, H, U, W) {
		let G = {
			kind: "rename",
			oldUri: p,
			newUri: H
		};
		return U !== void 0 && (U.overwrite !== void 0 || U.ignoreIfExists !== void 0) && (G.options = U), W !== void 0 && (G.annotationId = W), G;
	}
	p.create = H;
	function U(p) {
		let H = p;
		return H && H.kind === "rename" && Is.string(H.oldUri) && Is.string(H.newUri) && (H.options === void 0 || (H.options.overwrite === void 0 || Is.boolean(H.options.overwrite)) && (H.options.ignoreIfExists === void 0 || Is.boolean(H.options.ignoreIfExists))) && (H.annotationId === void 0 || ChangeAnnotationIdentifier.is(H.annotationId));
	}
	p.is = U;
})(RenameFile ||= {});
var DeleteFile;
(function(p) {
	function H(p, H, U) {
		let W = {
			kind: "delete",
			uri: p
		};
		return H !== void 0 && (H.recursive !== void 0 || H.ignoreIfNotExists !== void 0) && (W.options = H), U !== void 0 && (W.annotationId = U), W;
	}
	p.create = H;
	function U(p) {
		let H = p;
		return H && H.kind === "delete" && Is.string(H.uri) && (H.options === void 0 || (H.options.recursive === void 0 || Is.boolean(H.options.recursive)) && (H.options.ignoreIfNotExists === void 0 || Is.boolean(H.options.ignoreIfNotExists))) && (H.annotationId === void 0 || ChangeAnnotationIdentifier.is(H.annotationId));
	}
	p.is = U;
})(DeleteFile ||= {});
var WorkspaceEdit;
(function(p) {
	function H(p) {
		let H = p;
		return H && (H.changes !== void 0 || H.documentChanges !== void 0) && (H.documentChanges === void 0 || H.documentChanges.every((p) => Is.string(p.kind) ? CreateFile.is(p) || RenameFile.is(p) || DeleteFile.is(p) : TextDocumentEdit.is(p)));
	}
	p.is = H;
})(WorkspaceEdit ||= {});
var TextDocumentIdentifier;
(function(p) {
	function H(p) {
		return { uri: p };
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && Is.string(H.uri);
	}
	p.is = U;
})(TextDocumentIdentifier ||= {});
var VersionedTextDocumentIdentifier;
(function(p) {
	function H(p, H) {
		return {
			uri: p,
			version: H
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && Is.string(H.uri) && Is.integer(H.version);
	}
	p.is = U;
})(VersionedTextDocumentIdentifier ||= {});
var OptionalVersionedTextDocumentIdentifier;
(function(p) {
	function H(p, H) {
		return {
			uri: p,
			version: H
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && Is.string(H.uri) && (H.version === null || Is.integer(H.version));
	}
	p.is = U;
})(OptionalVersionedTextDocumentIdentifier ||= {});
var TextDocumentItem;
(function(p) {
	function H(p, H, U, W) {
		return {
			uri: p,
			languageId: H,
			version: U,
			text: W
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && Is.string(H.uri) && Is.string(H.languageId) && Is.integer(H.version) && Is.string(H.text);
	}
	p.is = U;
})(TextDocumentItem ||= {});
var MarkupKind;
(function(p) {
	p.PlainText = "plaintext", p.Markdown = "markdown";
	function H(H) {
		let U = H;
		return U === p.PlainText || U === p.Markdown;
	}
	p.is = H;
})(MarkupKind ||= {});
var MarkupContent;
(function(p) {
	function H(p) {
		let H = p;
		return Is.objectLiteral(p) && MarkupKind.is(H.kind) && Is.string(H.value);
	}
	p.is = H;
})(MarkupContent ||= {});
var CompletionItemKind;
(function(p) {
	p.Text = 1, p.Method = 2, p.Function = 3, p.Constructor = 4, p.Field = 5, p.Variable = 6, p.Class = 7, p.Interface = 8, p.Module = 9, p.Property = 10, p.Unit = 11, p.Value = 12, p.Enum = 13, p.Keyword = 14, p.Snippet = 15, p.Color = 16, p.File = 17, p.Reference = 18, p.Folder = 19, p.EnumMember = 20, p.Constant = 21, p.Struct = 22, p.Event = 23, p.Operator = 24, p.TypeParameter = 25;
})(CompletionItemKind ||= {});
var InsertTextFormat;
(function(p) {
	p.PlainText = 1, p.Snippet = 2;
})(InsertTextFormat ||= {});
var CompletionItemTag;
(function(p) {
	p.Deprecated = 1;
})(CompletionItemTag ||= {});
var InsertReplaceEdit;
(function(p) {
	function H(p, H, U) {
		return {
			newText: p,
			insert: H,
			replace: U
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return H && Is.string(H.newText) && Range$1.is(H.insert) && Range$1.is(H.replace);
	}
	p.is = U;
})(InsertReplaceEdit ||= {});
var InsertTextMode;
(function(p) {
	p.asIs = 1, p.adjustIndentation = 2;
})(InsertTextMode ||= {});
var CompletionItemLabelDetails;
(function(p) {
	function H(p) {
		let H = p;
		return H && (Is.string(H.detail) || H.detail === void 0) && (Is.string(H.description) || H.description === void 0);
	}
	p.is = H;
})(CompletionItemLabelDetails ||= {});
var CompletionItem;
(function(p) {
	function H(p) {
		return { label: p };
	}
	p.create = H;
})(CompletionItem ||= {});
var CompletionList;
(function(p) {
	function H(p, H) {
		return {
			items: p || [],
			isIncomplete: !!H
		};
	}
	p.create = H;
})(CompletionList ||= {});
var MarkedString;
(function(p) {
	function H(p) {
		return p.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
	}
	p.fromPlainText = H;
	function U(p) {
		let H = p;
		return Is.string(H) || Is.objectLiteral(H) && Is.string(H.language) && Is.string(H.value);
	}
	p.is = U;
})(MarkedString ||= {});
var Hover;
(function(p) {
	function H(p) {
		let H = p;
		return !!H && Is.objectLiteral(H) && (MarkupContent.is(H.contents) || MarkedString.is(H.contents) || Is.typedArray(H.contents, MarkedString.is)) && (p.range === void 0 || Range$1.is(p.range));
	}
	p.is = H;
})(Hover ||= {});
var ParameterInformation;
(function(p) {
	function H(p, H) {
		return H ? {
			label: p,
			documentation: H
		} : { label: p };
	}
	p.create = H;
})(ParameterInformation ||= {});
var SignatureInformation;
(function(p) {
	function H(p, H, ...U) {
		let W = { label: p };
		return Is.defined(H) && (W.documentation = H), Is.defined(U) ? W.parameters = U : W.parameters = [], W;
	}
	p.create = H;
})(SignatureInformation ||= {});
var DocumentHighlightKind;
(function(p) {
	p.Text = 1, p.Read = 2, p.Write = 3;
})(DocumentHighlightKind ||= {});
var DocumentHighlight;
(function(p) {
	function H(p, H) {
		let U = { range: p };
		return Is.number(H) && (U.kind = H), U;
	}
	p.create = H;
})(DocumentHighlight ||= {});
var SymbolKind;
(function(p) {
	p.File = 1, p.Module = 2, p.Namespace = 3, p.Package = 4, p.Class = 5, p.Method = 6, p.Property = 7, p.Field = 8, p.Constructor = 9, p.Enum = 10, p.Interface = 11, p.Function = 12, p.Variable = 13, p.Constant = 14, p.String = 15, p.Number = 16, p.Boolean = 17, p.Array = 18, p.Object = 19, p.Key = 20, p.Null = 21, p.EnumMember = 22, p.Struct = 23, p.Event = 24, p.Operator = 25, p.TypeParameter = 26;
})(SymbolKind ||= {});
var SymbolTag;
(function(p) {
	p.Deprecated = 1;
})(SymbolTag ||= {});
var SymbolInformation;
(function(p) {
	function H(p, H, U, W, G) {
		let K = {
			name: p,
			kind: H,
			location: {
				uri: W,
				range: U
			}
		};
		return G && (K.containerName = G), K;
	}
	p.create = H;
})(SymbolInformation ||= {});
var WorkspaceSymbol;
(function(p) {
	function H(p, H, U, W) {
		return W === void 0 ? {
			name: p,
			kind: H,
			location: { uri: U }
		} : {
			name: p,
			kind: H,
			location: {
				uri: U,
				range: W
			}
		};
	}
	p.create = H;
})(WorkspaceSymbol ||= {});
var DocumentSymbol;
(function(p) {
	function H(p, H, U, W, G, K) {
		let q = {
			name: p,
			detail: H,
			kind: U,
			range: W,
			selectionRange: G
		};
		return K !== void 0 && (q.children = K), q;
	}
	p.create = H;
	function U(p) {
		let H = p;
		return H && Is.string(H.name) && Is.number(H.kind) && Range$1.is(H.range) && Range$1.is(H.selectionRange) && (H.detail === void 0 || Is.string(H.detail)) && (H.deprecated === void 0 || Is.boolean(H.deprecated)) && (H.children === void 0 || Array.isArray(H.children)) && (H.tags === void 0 || Array.isArray(H.tags));
	}
	p.is = U;
})(DocumentSymbol ||= {});
var CodeActionKind;
(function(p) {
	p.Empty = "", p.QuickFix = "quickfix", p.Refactor = "refactor", p.RefactorExtract = "refactor.extract", p.RefactorInline = "refactor.inline", p.RefactorRewrite = "refactor.rewrite", p.Source = "source", p.SourceOrganizeImports = "source.organizeImports", p.SourceFixAll = "source.fixAll";
})(CodeActionKind ||= {});
var CodeActionTriggerKind;
(function(p) {
	p.Invoked = 1, p.Automatic = 2;
})(CodeActionTriggerKind ||= {});
var CodeActionContext;
(function(p) {
	function H(p, H, U) {
		let W = { diagnostics: p };
		return H != null && (W.only = H), U != null && (W.triggerKind = U), W;
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && Is.typedArray(H.diagnostics, Diagnostic.is) && (H.only === void 0 || Is.typedArray(H.only, Is.string)) && (H.triggerKind === void 0 || H.triggerKind === CodeActionTriggerKind.Invoked || H.triggerKind === CodeActionTriggerKind.Automatic);
	}
	p.is = U;
})(CodeActionContext ||= {});
var CodeAction;
(function(p) {
	function H(p, H, U) {
		let W = { title: p }, G = !0;
		return typeof H == "string" ? (G = !1, W.kind = H) : Command.is(H) ? W.command = H : W.edit = H, G && U !== void 0 && (W.kind = U), W;
	}
	p.create = H;
	function U(p) {
		let H = p;
		return H && Is.string(H.title) && (H.diagnostics === void 0 || Is.typedArray(H.diagnostics, Diagnostic.is)) && (H.kind === void 0 || Is.string(H.kind)) && (H.edit !== void 0 || H.command !== void 0) && (H.command === void 0 || Command.is(H.command)) && (H.isPreferred === void 0 || Is.boolean(H.isPreferred)) && (H.edit === void 0 || WorkspaceEdit.is(H.edit));
	}
	p.is = U;
})(CodeAction ||= {});
var CodeLens;
(function(p) {
	function H(p, H) {
		let U = { range: p };
		return Is.defined(H) && (U.data = H), U;
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && Range$1.is(H.range) && (Is.undefined(H.command) || Command.is(H.command));
	}
	p.is = U;
})(CodeLens ||= {});
var FormattingOptions;
(function(p) {
	function H(p, H) {
		return {
			tabSize: p,
			insertSpaces: H
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && Is.uinteger(H.tabSize) && Is.boolean(H.insertSpaces);
	}
	p.is = U;
})(FormattingOptions ||= {});
var DocumentLink;
(function(p) {
	function H(p, H, U) {
		return {
			range: p,
			target: H,
			data: U
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && Range$1.is(H.range) && (Is.undefined(H.target) || Is.string(H.target));
	}
	p.is = U;
})(DocumentLink ||= {});
var SelectionRange;
(function(p) {
	function H(p, H) {
		return {
			range: p,
			parent: H
		};
	}
	p.create = H;
	function U(H) {
		let U = H;
		return Is.objectLiteral(U) && Range$1.is(U.range) && (U.parent === void 0 || p.is(U.parent));
	}
	p.is = U;
})(SelectionRange ||= {});
var SemanticTokenTypes;
(function(p) {
	p.namespace = "namespace", p.type = "type", p.class = "class", p.enum = "enum", p.interface = "interface", p.struct = "struct", p.typeParameter = "typeParameter", p.parameter = "parameter", p.variable = "variable", p.property = "property", p.enumMember = "enumMember", p.event = "event", p.function = "function", p.method = "method", p.macro = "macro", p.keyword = "keyword", p.modifier = "modifier", p.comment = "comment", p.string = "string", p.number = "number", p.regexp = "regexp", p.operator = "operator", p.decorator = "decorator";
})(SemanticTokenTypes ||= {});
var SemanticTokenModifiers;
(function(p) {
	p.declaration = "declaration", p.definition = "definition", p.readonly = "readonly", p.static = "static", p.deprecated = "deprecated", p.abstract = "abstract", p.async = "async", p.modification = "modification", p.documentation = "documentation", p.defaultLibrary = "defaultLibrary";
})(SemanticTokenModifiers ||= {});
var SemanticTokens;
(function(p) {
	function H(p) {
		let H = p;
		return Is.objectLiteral(H) && (H.resultId === void 0 || typeof H.resultId == "string") && Array.isArray(H.data) && (H.data.length === 0 || typeof H.data[0] == "number");
	}
	p.is = H;
})(SemanticTokens ||= {});
var InlineValueText;
(function(p) {
	function H(p, H) {
		return {
			range: p,
			text: H
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return H != null && Range$1.is(H.range) && Is.string(H.text);
	}
	p.is = U;
})(InlineValueText ||= {});
var InlineValueVariableLookup;
(function(p) {
	function H(p, H, U) {
		return {
			range: p,
			variableName: H,
			caseSensitiveLookup: U
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return H != null && Range$1.is(H.range) && Is.boolean(H.caseSensitiveLookup) && (Is.string(H.variableName) || H.variableName === void 0);
	}
	p.is = U;
})(InlineValueVariableLookup ||= {});
var InlineValueEvaluatableExpression;
(function(p) {
	function H(p, H) {
		return {
			range: p,
			expression: H
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return H != null && Range$1.is(H.range) && (Is.string(H.expression) || H.expression === void 0);
	}
	p.is = U;
})(InlineValueEvaluatableExpression ||= {});
var InlineValueContext;
(function(p) {
	function H(p, H) {
		return {
			frameId: p,
			stoppedLocation: H
		};
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.defined(H) && Range$1.is(p.stoppedLocation);
	}
	p.is = U;
})(InlineValueContext ||= {});
var InlayHintKind;
(function(p) {
	p.Type = 1, p.Parameter = 2;
	function H(p) {
		return p === 1 || p === 2;
	}
	p.is = H;
})(InlayHintKind ||= {});
var InlayHintLabelPart;
(function(p) {
	function H(p) {
		return { value: p };
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.objectLiteral(H) && (H.tooltip === void 0 || Is.string(H.tooltip) || MarkupContent.is(H.tooltip)) && (H.location === void 0 || Location.is(H.location)) && (H.command === void 0 || Command.is(H.command));
	}
	p.is = U;
})(InlayHintLabelPart ||= {});
var InlayHint;
(function(p) {
	function H(p, H, U) {
		let W = {
			position: p,
			label: H
		};
		return U !== void 0 && (W.kind = U), W;
	}
	p.create = H;
	function U(p) {
		let H = p;
		return Is.objectLiteral(H) && Position.is(H.position) && (Is.string(H.label) || Is.typedArray(H.label, InlayHintLabelPart.is)) && (H.kind === void 0 || InlayHintKind.is(H.kind)) && H.textEdits === void 0 || Is.typedArray(H.textEdits, TextEdit.is) && (H.tooltip === void 0 || Is.string(H.tooltip) || MarkupContent.is(H.tooltip)) && (H.paddingLeft === void 0 || Is.boolean(H.paddingLeft)) && (H.paddingRight === void 0 || Is.boolean(H.paddingRight));
	}
	p.is = U;
})(InlayHint ||= {});
var StringValue;
(function(p) {
	function H(p) {
		return {
			kind: "snippet",
			value: p
		};
	}
	p.createSnippet = H;
})(StringValue ||= {});
var InlineCompletionItem;
(function(p) {
	function H(p, H, U, W) {
		return {
			insertText: p,
			filterText: H,
			range: U,
			command: W
		};
	}
	p.create = H;
})(InlineCompletionItem ||= {});
var InlineCompletionList;
(function(p) {
	function H(p) {
		return { items: p };
	}
	p.create = H;
})(InlineCompletionList ||= {});
var InlineCompletionTriggerKind;
(function(p) {
	p.Invoked = 0, p.Automatic = 1;
})(InlineCompletionTriggerKind ||= {});
var SelectedCompletionInfo;
(function(p) {
	function H(p, H) {
		return {
			range: p,
			text: H
		};
	}
	p.create = H;
})(SelectedCompletionInfo ||= {});
var InlineCompletionContext;
(function(p) {
	function H(p, H) {
		return {
			triggerKind: p,
			selectedCompletionInfo: H
		};
	}
	p.create = H;
})(InlineCompletionContext ||= {});
var WorkspaceFolder;
(function(p) {
	function H(p) {
		let H = p;
		return Is.objectLiteral(H) && URI.is(H.uri) && Is.string(H.name);
	}
	p.is = H;
})(WorkspaceFolder ||= {});
var TextDocument;
(function(p) {
	function H(p, H, U, W) {
		return new FullTextDocument(p, H, U, W);
	}
	p.create = H;
	function U(p) {
		let H = p;
		return !!(Is.defined(H) && Is.string(H.uri) && (Is.undefined(H.languageId) || Is.string(H.languageId)) && Is.uinteger(H.lineCount) && Is.func(H.getText) && Is.func(H.positionAt) && Is.func(H.offsetAt));
	}
	p.is = U;
	function W(p, H) {
		let U = p.getText(), W = G(H, (p, H) => {
			let U = p.range.start.line - H.range.start.line;
			return U === 0 ? p.range.start.character - H.range.start.character : U;
		}), K = U.length;
		for (let H = W.length - 1; H >= 0; H--) {
			let G = W[H], q = p.offsetAt(G.range.start), J = p.offsetAt(G.range.end);
			if (J <= K) U = U.substring(0, q) + G.newText + U.substring(J, U.length);
			else throw Error("Overlapping edit");
			K = q;
		}
		return U;
	}
	p.applyEdits = W;
	function G(p, H) {
		if (p.length <= 1) return p;
		let U = p.length / 2 | 0, W = p.slice(0, U), K = p.slice(U);
		G(W, H), G(K, H);
		let q = 0, J = 0, Y = 0;
		for (; q < W.length && J < K.length;) H(W[q], K[J]) <= 0 ? p[Y++] = W[q++] : p[Y++] = K[J++];
		for (; q < W.length;) p[Y++] = W[q++];
		for (; J < K.length;) p[Y++] = K[J++];
		return p;
	}
})(TextDocument ||= {});
var FullTextDocument = class {
	constructor(p, H, U, W) {
		this._uri = p, this._languageId = H, this._version = U, this._content = W, this._lineOffsets = void 0;
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
	getText(p) {
		if (p) {
			let H = this.offsetAt(p.start), U = this.offsetAt(p.end);
			return this._content.substring(H, U);
		}
		return this._content;
	}
	update(p, H) {
		this._content = p.text, this._version = H, this._lineOffsets = void 0;
	}
	getLineOffsets() {
		if (this._lineOffsets === void 0) {
			let p = [], H = this._content, U = !0;
			for (let W = 0; W < H.length; W++) {
				U &&= (p.push(W), !1);
				let G = H.charAt(W);
				U = G === "\r" || G === "\n", G === "\r" && W + 1 < H.length && H.charAt(W + 1) === "\n" && W++;
			}
			U && H.length > 0 && p.push(H.length), this._lineOffsets = p;
		}
		return this._lineOffsets;
	}
	positionAt(p) {
		p = Math.max(Math.min(p, this._content.length), 0);
		let H = this.getLineOffsets(), U = 0, W = H.length;
		if (W === 0) return Position.create(0, p);
		for (; U < W;) {
			let G = Math.floor((U + W) / 2);
			H[G] > p ? W = G : U = G + 1;
		}
		let G = U - 1;
		return Position.create(G, p - H[G]);
	}
	offsetAt(p) {
		let H = this.getLineOffsets();
		if (p.line >= H.length) return this._content.length;
		if (p.line < 0) return 0;
		let U = H[p.line], W = p.line + 1 < H.length ? H[p.line + 1] : this._content.length;
		return Math.max(Math.min(U + p.character, W), U);
	}
	get lineCount() {
		return this.getLineOffsets().length;
	}
}, Is;
(function(p) {
	let H = Object.prototype.toString;
	function U(p) {
		return p !== void 0;
	}
	p.defined = U;
	function W(p) {
		return p === void 0;
	}
	p.undefined = W;
	function G(p) {
		return p === !0 || p === !1;
	}
	p.boolean = G;
	function K(p) {
		return H.call(p) === "[object String]";
	}
	p.string = K;
	function q(p) {
		return H.call(p) === "[object Number]";
	}
	p.number = q;
	function J(p, U, W) {
		return H.call(p) === "[object Number]" && U <= p && p <= W;
	}
	p.numberRange = J;
	function Y(p) {
		return H.call(p) === "[object Number]" && -2147483648 <= p && p <= 2147483647;
	}
	p.integer = Y;
	function X(p) {
		return H.call(p) === "[object Number]" && 0 <= p && p <= 2147483647;
	}
	p.uinteger = X;
	function Z(p) {
		return H.call(p) === "[object Function]";
	}
	p.func = Z;
	function Q(p) {
		return typeof p == "object" && !!p;
	}
	p.objectLiteral = Q;
	function $(p, H) {
		return Array.isArray(p) && p.every(H);
	}
	p.typedArray = $;
})(Is ||= {});
var DiagnosticsAdapter = class {
	constructor(p, H, U) {
		this._languageId = p, this._worker = H, this._disposables = [], this._listener = /* @__PURE__ */ Object.create(null);
		let W = (p) => {
			let H = p.getLanguageId();
			if (H !== this._languageId) return;
			let U;
			this._listener[p.uri.toString()] = p.onDidChangeContent(() => {
				window.clearTimeout(U), U = window.setTimeout(() => this._doValidate(p.uri, H), 500);
			}), this._doValidate(p.uri, H);
		}, K = (p) => {
			editor.setModelMarkers(p, this._languageId, []);
			let H = p.uri.toString(), U = this._listener[H];
			U && (U.dispose(), delete this._listener[H]);
		};
		this._disposables.push(editor.onDidCreateModel(W)), this._disposables.push(editor.onWillDisposeModel(K)), this._disposables.push(editor.onDidChangeModelLanguage((p) => {
			K(p.model), W(p.model);
		})), this._disposables.push(U((p) => {
			editor.getModels().forEach((p) => {
				p.getLanguageId() === this._languageId && (K(p), W(p));
			});
		})), this._disposables.push({ dispose: () => {
			for (let p in editor.getModels().forEach(K), this._listener) this._listener[p].dispose();
		} }), editor.getModels().forEach(W);
	}
	dispose() {
		this._disposables.forEach((p) => p && p.dispose()), this._disposables.length = 0;
	}
	_doValidate(p, H) {
		this._worker(p).then((H) => H.doValidation(p.toString())).then((U) => {
			let W = U.map((H) => toDiagnostics(p, H)), K = editor.getModel(p);
			K && K.getLanguageId() === H && editor.setModelMarkers(K, H, W);
		}).then(void 0, (p) => {
			console.error(p);
		});
	}
};
function toSeverity(H) {
	switch (H) {
		case DiagnosticSeverity.Error: return MarkerSeverity.Error;
		case DiagnosticSeverity.Warning: return MarkerSeverity.Warning;
		case DiagnosticSeverity.Information: return MarkerSeverity.Info;
		case DiagnosticSeverity.Hint: return MarkerSeverity.Hint;
		default: return MarkerSeverity.Info;
	}
}
function toDiagnostics(p, H) {
	let U = typeof H.code == "number" ? String(H.code) : H.code;
	return {
		severity: toSeverity(H.severity),
		startLineNumber: H.range.start.line + 1,
		startColumn: H.range.start.character + 1,
		endLineNumber: H.range.end.line + 1,
		endColumn: H.range.end.character + 1,
		message: H.message,
		code: U,
		source: H.source
	};
}
var CompletionAdapter = class {
	constructor(p, H) {
		this._worker = p, this._triggerCharacters = H;
	}
	get triggerCharacters() {
		return this._triggerCharacters;
	}
	provideCompletionItems(p, U, G, K) {
		let q = p.uri;
		return this._worker(q).then((p) => p.doComplete(q.toString(), fromPosition(U))).then((G) => {
			if (!G) return;
			let K = p.getWordUntilPosition(U), q = new Range(U.lineNumber, K.startColumn, U.lineNumber, K.endColumn), J = G.items.map((p) => {
				let H = {
					label: p.label,
					insertText: p.insertText || p.label,
					sortText: p.sortText,
					filterText: p.filterText,
					documentation: p.documentation,
					detail: p.detail,
					command: toCommand(p.command),
					range: q,
					kind: toCompletionItemKind(p.kind)
				};
				return p.textEdit && (isInsertReplaceEdit(p.textEdit) ? H.range = {
					insert: toRange(p.textEdit.insert),
					replace: toRange(p.textEdit.replace)
				} : H.range = toRange(p.textEdit.range), H.insertText = p.textEdit.newText), p.additionalTextEdits && (H.additionalTextEdits = p.additionalTextEdits.map(toTextEdit)), p.insertTextFormat === InsertTextFormat.Snippet && (H.insertTextRules = languages.CompletionItemInsertTextRule.InsertAsSnippet), H;
			});
			return {
				isIncomplete: G.isIncomplete,
				suggestions: J
			};
		});
	}
};
function fromPosition(p) {
	if (p) return {
		character: p.column - 1,
		line: p.lineNumber - 1
	};
}
function fromRange(p) {
	if (p) return {
		start: {
			line: p.startLineNumber - 1,
			character: p.startColumn - 1
		},
		end: {
			line: p.endLineNumber - 1,
			character: p.endColumn - 1
		}
	};
}
function toRange(p) {
	if (p) return new Range(p.start.line + 1, p.start.character + 1, p.end.line + 1, p.end.character + 1);
}
function isInsertReplaceEdit(p) {
	return p.insert !== void 0 && p.replace !== void 0;
}
function toCompletionItemKind(p) {
	let H = languages.CompletionItemKind;
	switch (p) {
		case CompletionItemKind.Text: return H.Text;
		case CompletionItemKind.Method: return H.Method;
		case CompletionItemKind.Function: return H.Function;
		case CompletionItemKind.Constructor: return H.Constructor;
		case CompletionItemKind.Field: return H.Field;
		case CompletionItemKind.Variable: return H.Variable;
		case CompletionItemKind.Class: return H.Class;
		case CompletionItemKind.Interface: return H.Interface;
		case CompletionItemKind.Module: return H.Module;
		case CompletionItemKind.Property: return H.Property;
		case CompletionItemKind.Unit: return H.Unit;
		case CompletionItemKind.Value: return H.Value;
		case CompletionItemKind.Enum: return H.Enum;
		case CompletionItemKind.Keyword: return H.Keyword;
		case CompletionItemKind.Snippet: return H.Snippet;
		case CompletionItemKind.Color: return H.Color;
		case CompletionItemKind.File: return H.File;
		case CompletionItemKind.Reference: return H.Reference;
	}
	return H.Property;
}
function toTextEdit(p) {
	if (p) return {
		range: toRange(p.range),
		text: p.newText
	};
}
function toCommand(p) {
	return p && p.command === "editor.action.triggerSuggest" ? {
		id: p.command,
		title: p.title,
		arguments: p.arguments
	} : void 0;
}
var HoverAdapter = class {
	constructor(p) {
		this._worker = p;
	}
	provideHover(p, H, U) {
		let W = p.uri;
		return this._worker(W).then((p) => p.doHover(W.toString(), fromPosition(H))).then((p) => {
			if (p) return {
				range: toRange(p.range),
				contents: toMarkedStringArray(p.contents)
			};
		});
	}
};
function isMarkupContent(p) {
	return p && typeof p == "object" && typeof p.kind == "string";
}
function toMarkdownString(p) {
	return typeof p == "string" ? { value: p } : isMarkupContent(p) ? p.kind === "plaintext" ? { value: p.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&") } : { value: p.value } : { value: "```" + p.language + "\n" + p.value + "\n```\n" };
}
function toMarkedStringArray(p) {
	if (p) return Array.isArray(p) ? p.map(toMarkdownString) : [toMarkdownString(p)];
}
var DocumentHighlightAdapter = class {
	constructor(p) {
		this._worker = p;
	}
	provideDocumentHighlights(p, H, U) {
		let W = p.uri;
		return this._worker(W).then((p) => p.findDocumentHighlights(W.toString(), fromPosition(H))).then((p) => {
			if (p) return p.map((p) => ({
				range: toRange(p.range),
				kind: toDocumentHighlightKind(p.kind)
			}));
		});
	}
};
function toDocumentHighlightKind(p) {
	switch (p) {
		case DocumentHighlightKind.Read: return languages.DocumentHighlightKind.Read;
		case DocumentHighlightKind.Write: return languages.DocumentHighlightKind.Write;
		case DocumentHighlightKind.Text: return languages.DocumentHighlightKind.Text;
	}
	return languages.DocumentHighlightKind.Text;
}
var DefinitionAdapter = class {
	constructor(p) {
		this._worker = p;
	}
	provideDefinition(p, H, U) {
		let W = p.uri;
		return this._worker(W).then((p) => p.findDefinition(W.toString(), fromPosition(H))).then((p) => {
			if (p) return [toLocation(p)];
		});
	}
};
function toLocation(p) {
	return {
		uri: Uri.parse(p.uri),
		range: toRange(p.range)
	};
}
var ReferenceAdapter = class {
	constructor(p) {
		this._worker = p;
	}
	provideReferences(p, H, U, W) {
		let G = p.uri;
		return this._worker(G).then((p) => p.findReferences(G.toString(), fromPosition(H))).then((p) => {
			if (p) return p.map(toLocation);
		});
	}
}, RenameAdapter = class {
	constructor(p) {
		this._worker = p;
	}
	provideRenameEdits(p, H, U, W) {
		let G = p.uri;
		return this._worker(G).then((p) => p.doRename(G.toString(), fromPosition(H), U)).then((p) => toWorkspaceEdit(p));
	}
};
function toWorkspaceEdit(p) {
	if (!p || !p.changes) return;
	let H = [];
	for (let W in p.changes) {
		let G = Uri.parse(W);
		for (let U of p.changes[W]) H.push({
			resource: G,
			versionId: void 0,
			textEdit: {
				range: toRange(U.range),
				text: U.newText
			}
		});
	}
	return { edits: H };
}
var DocumentSymbolAdapter = class {
	constructor(p) {
		this._worker = p;
	}
	provideDocumentSymbols(p, H) {
		let U = p.uri;
		return this._worker(U).then((p) => p.findDocumentSymbols(U.toString())).then((p) => {
			if (p) return p.map((p) => isDocumentSymbol(p) ? toDocumentSymbol(p) : {
				name: p.name,
				detail: "",
				containerName: p.containerName,
				kind: toSymbolKind(p.kind),
				range: toRange(p.location.range),
				selectionRange: toRange(p.location.range),
				tags: []
			});
		});
	}
};
function isDocumentSymbol(p) {
	return "children" in p;
}
function toDocumentSymbol(p) {
	return {
		name: p.name,
		detail: p.detail ?? "",
		kind: toSymbolKind(p.kind),
		range: toRange(p.range),
		selectionRange: toRange(p.selectionRange),
		tags: p.tags ?? [],
		children: (p.children ?? []).map((p) => toDocumentSymbol(p))
	};
}
function toSymbolKind(p) {
	let H = languages.SymbolKind;
	switch (p) {
		case SymbolKind.File: return H.File;
		case SymbolKind.Module: return H.Module;
		case SymbolKind.Namespace: return H.Namespace;
		case SymbolKind.Package: return H.Package;
		case SymbolKind.Class: return H.Class;
		case SymbolKind.Method: return H.Method;
		case SymbolKind.Property: return H.Property;
		case SymbolKind.Field: return H.Field;
		case SymbolKind.Constructor: return H.Constructor;
		case SymbolKind.Enum: return H.Enum;
		case SymbolKind.Interface: return H.Interface;
		case SymbolKind.Function: return H.Function;
		case SymbolKind.Variable: return H.Variable;
		case SymbolKind.Constant: return H.Constant;
		case SymbolKind.String: return H.String;
		case SymbolKind.Number: return H.Number;
		case SymbolKind.Boolean: return H.Boolean;
		case SymbolKind.Array: return H.Array;
	}
	return H.Function;
}
var DocumentLinkAdapter = class {
	constructor(p) {
		this._worker = p;
	}
	provideLinks(p, H) {
		let U = p.uri;
		return this._worker(U).then((p) => p.findDocumentLinks(U.toString())).then((p) => {
			if (p) return { links: p.map((p) => ({
				range: toRange(p.range),
				url: p.target
			})) };
		});
	}
}, DocumentFormattingEditProvider = class {
	constructor(p) {
		this._worker = p;
	}
	provideDocumentFormattingEdits(p, H, U) {
		let W = p.uri;
		return this._worker(W).then((p) => p.format(W.toString(), null, fromFormattingOptions(H)).then((p) => {
			if (!(!p || p.length === 0)) return p.map(toTextEdit);
		}));
	}
}, DocumentRangeFormattingEditProvider = class {
	constructor(p) {
		this._worker = p, this.canFormatMultipleRanges = !1;
	}
	provideDocumentRangeFormattingEdits(p, H, U, W) {
		let G = p.uri;
		return this._worker(G).then((p) => p.format(G.toString(), fromRange(H), fromFormattingOptions(U)).then((p) => {
			if (!(!p || p.length === 0)) return p.map(toTextEdit);
		}));
	}
};
function fromFormattingOptions(p) {
	return {
		tabSize: p.tabSize,
		insertSpaces: p.insertSpaces
	};
}
var DocumentColorAdapter = class {
	constructor(p) {
		this._worker = p;
	}
	provideDocumentColors(p, H) {
		let U = p.uri;
		return this._worker(U).then((p) => p.findDocumentColors(U.toString())).then((p) => {
			if (p) return p.map((p) => ({
				color: p.color,
				range: toRange(p.range)
			}));
		});
	}
	provideColorPresentations(p, H, U) {
		let W = p.uri;
		return this._worker(W).then((p) => p.getColorPresentations(W.toString(), H.color, fromRange(H.range))).then((p) => {
			if (p) return p.map((p) => {
				let H = { label: p.label };
				return p.textEdit && (H.textEdit = toTextEdit(p.textEdit)), p.additionalTextEdits && (H.additionalTextEdits = p.additionalTextEdits.map(toTextEdit)), H;
			});
		});
	}
}, FoldingRangeAdapter = class {
	constructor(p) {
		this._worker = p;
	}
	provideFoldingRanges(p, H, U) {
		let W = p.uri;
		return this._worker(W).then((p) => p.getFoldingRanges(W.toString(), H)).then((p) => {
			if (p) return p.map((p) => {
				let H = {
					start: p.startLine + 1,
					end: p.endLine + 1
				};
				return p.kind !== void 0 && (H.kind = toFoldingRangeKind(p.kind)), H;
			});
		});
	}
};
function toFoldingRangeKind(p) {
	switch (p) {
		case FoldingRangeKind.Comment: return languages.FoldingRangeKind.Comment;
		case FoldingRangeKind.Imports: return languages.FoldingRangeKind.Imports;
		case FoldingRangeKind.Region: return languages.FoldingRangeKind.Region;
	}
}
var SelectionRangeAdapter = class {
	constructor(p) {
		this._worker = p;
	}
	provideSelectionRanges(p, H, U) {
		let W = p.uri;
		return this._worker(W).then((p) => p.getSelectionRanges(W.toString(), H.map(fromPosition))).then((p) => {
			if (p) return p.map((p) => {
				let H = [];
				for (; p;) H.push({ range: toRange(p.range) }), p = p.parent;
				return H;
			});
		});
	}
};
export { toRange as _, DocumentFormattingEditProvider as a, DocumentRangeFormattingEditProvider as c, HoverAdapter as d, ReferenceAdapter as f, fromRange as g, fromPosition as h, DocumentColorAdapter as i, DocumentSymbolAdapter as l, SelectionRangeAdapter as m, DefinitionAdapter as n, DocumentHighlightAdapter as o, RenameAdapter as p, DiagnosticsAdapter as r, DocumentLinkAdapter as s, CompletionAdapter as t, FoldingRangeAdapter as u, toTextEdit as v };
