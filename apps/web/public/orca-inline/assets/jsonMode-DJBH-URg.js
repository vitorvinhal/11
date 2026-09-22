import { h as languages, p as editor } from "./editor.api2-B26FOp3A.js";
import { t as createWebWorker } from "./workers-CfXxeJ6j.js";
import { _ as toRange, a as DocumentFormattingEditProvider, c as DocumentRangeFormattingEditProvider, d as HoverAdapter, f as ReferenceAdapter, g as fromRange, h as fromPosition, i as DocumentColorAdapter, l as DocumentSymbolAdapter, m as SelectionRangeAdapter, n as DefinitionAdapter, o as DocumentHighlightAdapter, p as RenameAdapter, r as DiagnosticsAdapter, s as DocumentLinkAdapter, t as CompletionAdapter, u as FoldingRangeAdapter, v as toTextEdit } from "./lspLanguageFeatures-D-aFFhCl.js";
var STOP_WHEN_IDLE_FOR = 120 * 1e3, WorkerManager = class {
	constructor(s) {
		this._defaults = s, this._worker = null, this._client = null, this._idleCheckInterval = window.setInterval(() => this._checkIfIdle(), 30 * 1e3), this._lastUsedTime = 0, this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker());
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
			moduleId: "vs/language/json/jsonWorker",
			createWorker: () => new Worker(new URL(
				/* @vite-ignore */
				"" + new URL("json.worker-8s-oaqZ8.js", import.meta.url).href,
				"" + import.meta.url
			), { type: "module" }),
			label: this._defaults.languageId,
			createData: {
				languageSettings: this._defaults.diagnosticsOptions,
				languageId: this._defaults.languageId,
				enableSchemaRequest: this._defaults.diagnosticsOptions.enableSchemaRequest
			}
		}), this._worker.getProxy()), this._client;
	}
	getLanguageServiceWorker(...s) {
		let I;
		return this._getClient().then((s) => {
			I = s;
		}).then((I) => {
			if (this._worker) return this._worker.withSyncedResources(s);
		}).then((s) => I);
	}
};
function createScanner$1(s, I = !1) {
	let L = s.length, R = 0, z = "", B = 0, V = 16, H = 0, U = 0, W = 0, G = 0, K = 0;
	function q(I, L) {
		let z = 0, B = 0;
		for (; z < I;) {
			let I = s.charCodeAt(R);
			if (I >= 48 && I <= 57) B = B * 16 + I - 48;
			else if (I >= 65 && I <= 70) B = B * 16 + I - 65 + 10;
			else if (I >= 97 && I <= 102) B = B * 16 + I - 97 + 10;
			else break;
			R++, z++;
		}
		return z < I && (B = -1), B;
	}
	function J(s) {
		R = s, z = "", B = 0, V = 16, K = 0;
	}
	function Y() {
		let I = R;
		if (s.charCodeAt(R) === 48) R++;
		else for (R++; R < s.length && isDigit(s.charCodeAt(R));) R++;
		if (R < s.length && s.charCodeAt(R) === 46) if (R++, R < s.length && isDigit(s.charCodeAt(R))) for (R++; R < s.length && isDigit(s.charCodeAt(R));) R++;
		else return K = 3, s.substring(I, R);
		let L = R;
		if (R < s.length && (s.charCodeAt(R) === 69 || s.charCodeAt(R) === 101)) if (R++, (R < s.length && s.charCodeAt(R) === 43 || s.charCodeAt(R) === 45) && R++, R < s.length && isDigit(s.charCodeAt(R))) {
			for (R++; R < s.length && isDigit(s.charCodeAt(R));) R++;
			L = R;
		} else K = 3;
		return s.substring(I, L);
	}
	function X() {
		let I = "", z = R;
		for (;;) {
			if (R >= L) {
				I += s.substring(z, R), K = 2;
				break;
			}
			let B = s.charCodeAt(R);
			if (B === 34) {
				I += s.substring(z, R), R++;
				break;
			}
			if (B === 92) {
				if (I += s.substring(z, R), R++, R >= L) {
					K = 2;
					break;
				}
				switch (s.charCodeAt(R++)) {
					case 34:
						I += "\"";
						break;
					case 92:
						I += "\\";
						break;
					case 47:
						I += "/";
						break;
					case 98:
						I += "\b";
						break;
					case 102:
						I += "\f";
						break;
					case 110:
						I += "\n";
						break;
					case 114:
						I += "\r";
						break;
					case 116:
						I += "	";
						break;
					case 117:
						let s = q(4);
						s >= 0 ? I += String.fromCharCode(s) : K = 4;
						break;
					default: K = 5;
				}
				z = R;
				continue;
			}
			if (B >= 0 && B <= 31) if (isLineBreak(B)) {
				I += s.substring(z, R), K = 2;
				break;
			} else K = 6;
			R++;
		}
		return I;
	}
	function Z() {
		if (z = "", K = 0, B = R, U = H, G = W, R >= L) return B = L, V = 17;
		let I = s.charCodeAt(R);
		if (isWhiteSpace(I)) {
			do
				R++, z += String.fromCharCode(I), I = s.charCodeAt(R);
			while (isWhiteSpace(I));
			return V = 15;
		}
		if (isLineBreak(I)) return R++, z += String.fromCharCode(I), I === 13 && s.charCodeAt(R) === 10 && (R++, z += "\n"), H++, W = R, V = 14;
		switch (I) {
			case 123: return R++, V = 1;
			case 125: return R++, V = 2;
			case 91: return R++, V = 3;
			case 93: return R++, V = 4;
			case 58: return R++, V = 6;
			case 44: return R++, V = 5;
			case 34: return R++, z = X(), V = 10;
			case 47:
				let U = R - 1;
				if (s.charCodeAt(R + 1) === 47) {
					for (R += 2; R < L && !isLineBreak(s.charCodeAt(R));) R++;
					return z = s.substring(U, R), V = 12;
				}
				if (s.charCodeAt(R + 1) === 42) {
					R += 2;
					let I = L - 1, B = !1;
					for (; R < I;) {
						let I = s.charCodeAt(R);
						if (I === 42 && s.charCodeAt(R + 1) === 47) {
							R += 2, B = !0;
							break;
						}
						R++, isLineBreak(I) && (I === 13 && s.charCodeAt(R) === 10 && R++, H++, W = R);
					}
					return B || (R++, K = 1), z = s.substring(U, R), V = 13;
				}
				return z += String.fromCharCode(I), R++, V = 16;
			case 45: if (z += String.fromCharCode(I), R++, R === L || !isDigit(s.charCodeAt(R))) return V = 16;
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57: return z += Y(), V = 11;
			default:
				for (; R < L && Q(I);) R++, I = s.charCodeAt(R);
				if (B !== R) {
					switch (z = s.substring(B, R), z) {
						case "true": return V = 8;
						case "false": return V = 9;
						case "null": return V = 7;
					}
					return V = 16;
				}
				return z += String.fromCharCode(I), R++, V = 16;
		}
	}
	function Q(s) {
		if (isWhiteSpace(s) || isLineBreak(s)) return !1;
		switch (s) {
			case 125:
			case 93:
			case 123:
			case 91:
			case 34:
			case 58:
			case 44:
			case 47: return !1;
		}
		return !0;
	}
	function $() {
		let s;
		do
			s = Z();
		while (s >= 12 && s <= 15);
		return s;
	}
	return {
		setPosition: J,
		getPosition: () => R,
		scan: I ? $ : Z,
		getToken: () => V,
		getTokenValue: () => z,
		getTokenOffset: () => B,
		getTokenLength: () => R - B,
		getTokenStartLine: () => U,
		getTokenStartCharacter: () => B - G,
		getTokenError: () => K
	};
}
function isWhiteSpace(s) {
	return s === 32 || s === 9;
}
function isLineBreak(s) {
	return s === 10 || s === 13;
}
function isDigit(s) {
	return s >= 48 && s <= 57;
}
var CharacterCodes;
(function(s) {
	s[s.lineFeed = 10] = "lineFeed", s[s.carriageReturn = 13] = "carriageReturn", s[s.space = 32] = "space", s[s._0 = 48] = "_0", s[s._1 = 49] = "_1", s[s._2 = 50] = "_2", s[s._3 = 51] = "_3", s[s._4 = 52] = "_4", s[s._5 = 53] = "_5", s[s._6 = 54] = "_6", s[s._7 = 55] = "_7", s[s._8 = 56] = "_8", s[s._9 = 57] = "_9", s[s.a = 97] = "a", s[s.b = 98] = "b", s[s.c = 99] = "c", s[s.d = 100] = "d", s[s.e = 101] = "e", s[s.f = 102] = "f", s[s.g = 103] = "g", s[s.h = 104] = "h", s[s.i = 105] = "i", s[s.j = 106] = "j", s[s.k = 107] = "k", s[s.l = 108] = "l", s[s.m = 109] = "m", s[s.n = 110] = "n", s[s.o = 111] = "o", s[s.p = 112] = "p", s[s.q = 113] = "q", s[s.r = 114] = "r", s[s.s = 115] = "s", s[s.t = 116] = "t", s[s.u = 117] = "u", s[s.v = 118] = "v", s[s.w = 119] = "w", s[s.x = 120] = "x", s[s.y = 121] = "y", s[s.z = 122] = "z", s[s.A = 65] = "A", s[s.B = 66] = "B", s[s.C = 67] = "C", s[s.D = 68] = "D", s[s.E = 69] = "E", s[s.F = 70] = "F", s[s.G = 71] = "G", s[s.H = 72] = "H", s[s.I = 73] = "I", s[s.J = 74] = "J", s[s.K = 75] = "K", s[s.L = 76] = "L", s[s.M = 77] = "M", s[s.N = 78] = "N", s[s.O = 79] = "O", s[s.P = 80] = "P", s[s.Q = 81] = "Q", s[s.R = 82] = "R", s[s.S = 83] = "S", s[s.T = 84] = "T", s[s.U = 85] = "U", s[s.V = 86] = "V", s[s.W = 87] = "W", s[s.X = 88] = "X", s[s.Y = 89] = "Y", s[s.Z = 90] = "Z", s[s.asterisk = 42] = "asterisk", s[s.backslash = 92] = "backslash", s[s.closeBrace = 125] = "closeBrace", s[s.closeBracket = 93] = "closeBracket", s[s.colon = 58] = "colon", s[s.comma = 44] = "comma", s[s.dot = 46] = "dot", s[s.doubleQuote = 34] = "doubleQuote", s[s.minus = 45] = "minus", s[s.openBrace = 123] = "openBrace", s[s.openBracket = 91] = "openBracket", s[s.plus = 43] = "plus", s[s.slash = 47] = "slash", s[s.formFeed = 12] = "formFeed", s[s.tab = 9] = "tab";
})(CharacterCodes ||= {}), Array(20).fill(0).map((s, I) => " ".repeat(I));
var maxCachedValues = 200;
Array(maxCachedValues).fill(0).map((s, I) => "\n" + " ".repeat(I)), Array(maxCachedValues).fill(0).map((s, I) => "\r" + " ".repeat(I)), Array(maxCachedValues).fill(0).map((s, I) => "\r\n" + " ".repeat(I)), Array(maxCachedValues).fill(0).map((s, I) => "\n" + "	".repeat(I)), Array(maxCachedValues).fill(0).map((s, I) => "\r" + "	".repeat(I)), Array(maxCachedValues).fill(0).map((s, I) => "\r\n" + "	".repeat(I));
var ParseOptions;
(function(s) {
	s.DEFAULT = { allowTrailingComma: !1 };
})(ParseOptions ||= {});
var createScanner = createScanner$1, ScanError;
(function(s) {
	s[s.None = 0] = "None", s[s.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", s[s.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", s[s.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", s[s.InvalidUnicode = 4] = "InvalidUnicode", s[s.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", s[s.InvalidCharacter = 6] = "InvalidCharacter";
})(ScanError ||= {});
var SyntaxKind;
(function(s) {
	s[s.OpenBraceToken = 1] = "OpenBraceToken", s[s.CloseBraceToken = 2] = "CloseBraceToken", s[s.OpenBracketToken = 3] = "OpenBracketToken", s[s.CloseBracketToken = 4] = "CloseBracketToken", s[s.CommaToken = 5] = "CommaToken", s[s.ColonToken = 6] = "ColonToken", s[s.NullKeyword = 7] = "NullKeyword", s[s.TrueKeyword = 8] = "TrueKeyword", s[s.FalseKeyword = 9] = "FalseKeyword", s[s.StringLiteral = 10] = "StringLiteral", s[s.NumericLiteral = 11] = "NumericLiteral", s[s.LineCommentTrivia = 12] = "LineCommentTrivia", s[s.BlockCommentTrivia = 13] = "BlockCommentTrivia", s[s.LineBreakTrivia = 14] = "LineBreakTrivia", s[s.Trivia = 15] = "Trivia", s[s.Unknown = 16] = "Unknown", s[s.EOF = 17] = "EOF";
})(SyntaxKind ||= {});
var ParseErrorCode;
(function(s) {
	s[s.InvalidSymbol = 1] = "InvalidSymbol", s[s.InvalidNumberFormat = 2] = "InvalidNumberFormat", s[s.PropertyNameExpected = 3] = "PropertyNameExpected", s[s.ValueExpected = 4] = "ValueExpected", s[s.ColonExpected = 5] = "ColonExpected", s[s.CommaExpected = 6] = "CommaExpected", s[s.CloseBraceExpected = 7] = "CloseBraceExpected", s[s.CloseBracketExpected = 8] = "CloseBracketExpected", s[s.EndOfFileExpected = 9] = "EndOfFileExpected", s[s.InvalidCommentToken = 10] = "InvalidCommentToken", s[s.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", s[s.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", s[s.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", s[s.InvalidUnicode = 14] = "InvalidUnicode", s[s.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", s[s.InvalidCharacter = 16] = "InvalidCharacter";
})(ParseErrorCode ||= {});
function createTokenizationSupport(s) {
	return {
		getInitialState: () => new JSONState(null, null, !1, null),
		tokenize: (I, L) => tokenize(s, I, L)
	};
}
var TOKEN_DELIM_OBJECT = "delimiter.bracket.json", TOKEN_DELIM_ARRAY = "delimiter.array.json", TOKEN_DELIM_COLON = "delimiter.colon.json", TOKEN_DELIM_COMMA = "delimiter.comma.json", TOKEN_VALUE_BOOLEAN = "keyword.json", TOKEN_VALUE_NULL = "keyword.json", TOKEN_VALUE_STRING = "string.value.json", TOKEN_VALUE_NUMBER = "number.json", TOKEN_PROPERTY_NAME = "string.key.json", TOKEN_COMMENT_BLOCK = "comment.block.json", TOKEN_COMMENT_LINE = "comment.line.json", ParentsStack = class s {
	constructor(s, I) {
		this.parent = s, this.type = I;
	}
	static pop(s) {
		return s ? s.parent : null;
	}
	static push(I, L) {
		return new s(I, L);
	}
	static equals(s, I) {
		if (!s && !I) return !0;
		if (!s || !I) return !1;
		for (; s && I;) {
			if (s === I) return !0;
			if (s.type !== I.type) return !1;
			s = s.parent, I = I.parent;
		}
		return !0;
	}
}, JSONState = class s {
	constructor(s, I, L, R) {
		this._state = s, this.scanError = I, this.lastWasColon = L, this.parents = R;
	}
	clone() {
		return new s(this._state, this.scanError, this.lastWasColon, this.parents);
	}
	equals(I) {
		return I === this ? !0 : !I || !(I instanceof s) ? !1 : this.scanError === I.scanError && this.lastWasColon === I.lastWasColon && ParentsStack.equals(this.parents, I.parents);
	}
	getStateData() {
		return this._state;
	}
	setStateData(s) {
		this._state = s;
	}
};
function tokenize(s, I, L, R = 0) {
	let z = 0, B = !1;
	switch (L.scanError) {
		case 2:
			I = "\"" + I, z = 1;
			break;
		case 1:
			I = "/*" + I, z = 2;
			break;
	}
	let V = createScanner(I), H = L.lastWasColon, U = L.parents, W = {
		tokens: [],
		endState: L.clone()
	};
	for (;;) {
		let s = R + V.getPosition(), G = "", K = V.scan();
		if (K === 17) break;
		if (s === R + V.getPosition()) throw Error("Scanner did not advance, next 3 characters are: " + I.substr(V.getPosition(), 3));
		switch (B && (s -= z), B = z > 0, K) {
			case 1:
				U = ParentsStack.push(U, 0), G = TOKEN_DELIM_OBJECT, H = !1;
				break;
			case 2:
				U = ParentsStack.pop(U), G = TOKEN_DELIM_OBJECT, H = !1;
				break;
			case 3:
				U = ParentsStack.push(U, 1), G = TOKEN_DELIM_ARRAY, H = !1;
				break;
			case 4:
				U = ParentsStack.pop(U), G = TOKEN_DELIM_ARRAY, H = !1;
				break;
			case 6:
				G = TOKEN_DELIM_COLON, H = !0;
				break;
			case 5:
				G = TOKEN_DELIM_COMMA, H = !1;
				break;
			case 8:
			case 9:
				G = TOKEN_VALUE_BOOLEAN, H = !1;
				break;
			case 7:
				G = TOKEN_VALUE_NULL, H = !1;
				break;
			case 10:
				let s = (U ? U.type : 0) === 1;
				G = H || s ? TOKEN_VALUE_STRING : TOKEN_PROPERTY_NAME, H = !1;
				break;
			case 11:
				G = TOKEN_VALUE_NUMBER, H = !1;
				break;
		}
		switch (K) {
			case 12:
				G = TOKEN_COMMENT_LINE;
				break;
			case 13:
				G = TOKEN_COMMENT_BLOCK;
				break;
		}
		W.endState = new JSONState(L.getStateData(), V.getTokenError(), H, U), W.tokens.push({
			startIndex: s,
			scopes: G
		});
	}
	return W;
}
var worker;
function getWorker() {
	return new Promise((s, I) => {
		if (!worker) return I("JSON not registered!");
		s(worker);
	});
}
var JSONDiagnosticsAdapter = class extends DiagnosticsAdapter {
	constructor(s, L, R) {
		super(s, L, R.onDidChange), this._disposables.push(editor.onWillDisposeModel((s) => {
			this._resetSchema(s.uri);
		})), this._disposables.push(editor.onDidChangeModelLanguage((s) => {
			this._resetSchema(s.model.uri);
		}));
	}
	_resetSchema(s) {
		this._worker().then((I) => {
			I.resetSchema(s.toString());
		});
	}
};
function setupMode(I) {
	let L = [], R = [], H = new WorkerManager(I);
	L.push(H), worker = (...s) => H.getLanguageServiceWorker(...s);
	function U() {
		let { languageId: L, modeConfiguration: H } = I;
		disposeAll(R), H.documentFormattingEdits && R.push(languages.registerDocumentFormattingEditProvider(L, new DocumentFormattingEditProvider(worker))), H.documentRangeFormattingEdits && R.push(languages.registerDocumentRangeFormattingEditProvider(L, new DocumentRangeFormattingEditProvider(worker))), H.completionItems && R.push(languages.registerCompletionItemProvider(L, new CompletionAdapter(worker, [
			" ",
			":",
			"\""
		]))), H.hovers && R.push(languages.registerHoverProvider(L, new HoverAdapter(worker))), H.documentSymbols && R.push(languages.registerDocumentSymbolProvider(L, new DocumentSymbolAdapter(worker))), H.tokens && R.push(languages.setTokensProvider(L, createTokenizationSupport(!0))), H.colors && R.push(languages.registerColorProvider(L, new DocumentColorAdapter(worker))), H.foldingRanges && R.push(languages.registerFoldingRangeProvider(L, new FoldingRangeAdapter(worker))), H.diagnostics && R.push(new JSONDiagnosticsAdapter(L, worker, I)), H.selectionRanges && R.push(languages.registerSelectionRangeProvider(L, new SelectionRangeAdapter(worker)));
	}
	U(), L.push(languages.setLanguageConfiguration(I.languageId, richEditConfiguration));
	let W = I.modeConfiguration;
	return I.onDidChange((s) => {
		s.modeConfiguration !== W && (W = s.modeConfiguration, U());
	}), L.push(asDisposable(R)), asDisposable(L);
}
function asDisposable(s) {
	return { dispose: () => disposeAll(s) };
}
function disposeAll(s) {
	for (; s.length;) s.pop().dispose();
}
var richEditConfiguration = {
	wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
	comments: {
		lineComment: "//",
		blockComment: ["/*", "*/"]
	},
	brackets: [["{", "}"], ["[", "]"]],
	autoClosingPairs: [
		{
			open: "{",
			close: "}",
			notIn: ["string"]
		},
		{
			open: "[",
			close: "]",
			notIn: ["string"]
		},
		{
			open: "\"",
			close: "\"",
			notIn: ["string"]
		}
	]
};
export { CompletionAdapter, DefinitionAdapter, DiagnosticsAdapter, DocumentColorAdapter, DocumentFormattingEditProvider, DocumentHighlightAdapter, DocumentLinkAdapter, DocumentRangeFormattingEditProvider, DocumentSymbolAdapter, FoldingRangeAdapter, HoverAdapter, ReferenceAdapter, RenameAdapter, SelectionRangeAdapter, WorkerManager, fromPosition, fromRange, getWorker, setupMode, toRange, toTextEdit };
