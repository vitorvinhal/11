import { n as __export } from "./chunk-BKjlJnyO.js";
import { a as MarkerSeverity, c as Range, d as Token, f as Uri, h as languages, i as KeyMod, l as Selection, m as editor_api2_exports, n as Emitter, o as MarkerTag, p as editor, r as KeyCode, s as Position, t as CancellationTokenSource, u as SelectionDirection } from "./editor.api2-B26FOp3A.js";
import { t as createWebWorker } from "./workers-CfXxeJ6j.js";
import { r as monaco_contribution_exports$3 } from "./monaco.contribution-DqQ6JUf5.js";
var monaco_contribution_exports = /* @__PURE__ */ __export({
	cssDefaults: () => cssDefaults,
	lessDefaults: () => lessDefaults,
	scssDefaults: () => scssDefaults
}, 1), LanguageServiceDefaultsImpl$2 = class {
	constructor(_, K, q) {
		this._onDidChange = new Emitter(), this._languageId = _, this.setOptions(K), this.setModeConfiguration(q);
	}
	get onDidChange() {
		return this._onDidChange.event;
	}
	get languageId() {
		return this._languageId;
	}
	get modeConfiguration() {
		return this._modeConfiguration;
	}
	get diagnosticsOptions() {
		return this.options;
	}
	get options() {
		return this._options;
	}
	setOptions(_) {
		this._options = _ || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(this);
	}
	setDiagnosticsOptions(_) {
		this.setOptions(_);
	}
	setModeConfiguration(_) {
		this._modeConfiguration = _ || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(this);
	}
}, optionsDefault$1 = {
	validate: !0,
	lint: {
		compatibleVendorPrefixes: "ignore",
		vendorPrefix: "warning",
		duplicateProperties: "warning",
		emptyRules: "warning",
		importStatement: "ignore",
		boxModel: "ignore",
		universalSelector: "ignore",
		zeroUnits: "ignore",
		fontFaceProperties: "warning",
		hexColorLength: "error",
		argumentsInColorFunction: "error",
		unknownProperties: "warning",
		ieHack: "ignore",
		unknownVendorSpecificProperties: "ignore",
		propertyIgnoredDueToDisplay: "warning",
		important: "ignore",
		float: "ignore",
		idSelector: "ignore"
	},
	data: { useDefaultDataProvider: !0 },
	format: {
		newlineBetweenSelectors: !0,
		newlineBetweenRules: !0,
		spaceAroundSelectorSeparator: !1,
		braceStyle: "collapse",
		maxPreserveNewLines: void 0,
		preserveNewLines: !0
	}
}, modeConfigurationDefault = {
	completionItems: !0,
	hovers: !0,
	documentSymbols: !0,
	definitions: !0,
	references: !0,
	documentHighlights: !0,
	rename: !0,
	colors: !0,
	foldingRanges: !0,
	diagnostics: !0,
	selectionRanges: !0,
	documentFormattingEdits: !0,
	documentRangeFormattingEdits: !0
}, cssDefaults = new LanguageServiceDefaultsImpl$2("css", optionsDefault$1, modeConfigurationDefault), scssDefaults = new LanguageServiceDefaultsImpl$2("scss", optionsDefault$1, modeConfigurationDefault), lessDefaults = new LanguageServiceDefaultsImpl$2("less", optionsDefault$1, modeConfigurationDefault);
function getMode$2() {
	return import("./cssMode-tBvVpLx0.js");
}
languages.onLanguage("less", () => {
	getMode$2().then((_) => _.setupMode(lessDefaults));
}), languages.onLanguage("scss", () => {
	getMode$2().then((_) => _.setupMode(scssDefaults));
}), languages.onLanguage("css", () => {
	getMode$2().then((_) => _.setupMode(cssDefaults));
});
var monaco_contribution_exports$1 = /* @__PURE__ */ __export({
	handlebarDefaults: () => handlebarDefaults,
	handlebarLanguageService: () => handlebarLanguageService,
	htmlDefaults: () => htmlDefaults,
	htmlLanguageService: () => htmlLanguageService,
	razorDefaults: () => razorDefaults,
	razorLanguageService: () => razorLanguageService,
	registerHTMLLanguageService: () => registerHTMLLanguageService
}, 1), LanguageServiceDefaultsImpl$1 = class {
	constructor(_, K, q) {
		this._onDidChange = new Emitter(), this._languageId = _, this.setOptions(K), this.setModeConfiguration(q);
	}
	get onDidChange() {
		return this._onDidChange.event;
	}
	get languageId() {
		return this._languageId;
	}
	get options() {
		return this._options;
	}
	get modeConfiguration() {
		return this._modeConfiguration;
	}
	setOptions(_) {
		this._options = _ || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(this);
	}
	setModeConfiguration(_) {
		this._modeConfiguration = _ || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(this);
	}
}, optionsDefault = {
	format: {
		tabSize: 4,
		insertSpaces: !1,
		wrapLineLength: 120,
		unformatted: "default\": \"a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var",
		contentUnformatted: "pre",
		indentInnerHtml: !1,
		preserveNewLines: !0,
		maxPreserveNewLines: void 0,
		indentHandlebars: !1,
		endWithNewline: !1,
		extraLiners: "head, body, /html",
		wrapAttributes: "auto"
	},
	suggest: {},
	data: { useDefaultDataProvider: !0 }
};
function getConfigurationDefault(_) {
	return {
		completionItems: !0,
		hovers: !0,
		documentSymbols: !0,
		links: !0,
		documentHighlights: !0,
		rename: !0,
		colors: !0,
		foldingRanges: !0,
		selectionRanges: !0,
		diagnostics: _ === htmlLanguageId,
		documentFormattingEdits: _ === htmlLanguageId,
		documentRangeFormattingEdits: _ === htmlLanguageId
	};
}
var htmlLanguageId = "html", handlebarsLanguageId = "handlebars", razorLanguageId = "razor", htmlLanguageService = registerHTMLLanguageService(htmlLanguageId, optionsDefault, getConfigurationDefault(htmlLanguageId)), htmlDefaults = htmlLanguageService.defaults, handlebarLanguageService = registerHTMLLanguageService(handlebarsLanguageId, optionsDefault, getConfigurationDefault(handlebarsLanguageId)), handlebarDefaults = handlebarLanguageService.defaults, razorLanguageService = registerHTMLLanguageService(razorLanguageId, optionsDefault, getConfigurationDefault(razorLanguageId)), razorDefaults = razorLanguageService.defaults;
function getMode$1() {
	return import("./htmlMode-C3AtEUb1.js");
}
function registerHTMLLanguageService(_, K = optionsDefault, q = getConfigurationDefault(_)) {
	let J = new LanguageServiceDefaultsImpl$1(_, K, q), Y, Z = languages.onLanguage(_, async () => {
		Y = (await getMode$1()).setupMode(J);
	});
	return {
		defaults: J,
		dispose() {
			Z.dispose(), Y?.dispose(), Y = void 0;
		}
	};
}
var monaco_contribution_exports$2 = /* @__PURE__ */ __export({
	getWorker: () => getWorker,
	jsonDefaults: () => jsonDefaults
}, 1), jsonDefaults = new class {
	constructor(_, K, q) {
		this._onDidChange = new Emitter(), this._languageId = _, this.setDiagnosticsOptions(K), this.setModeConfiguration(q);
	}
	get onDidChange() {
		return this._onDidChange.event;
	}
	get languageId() {
		return this._languageId;
	}
	get modeConfiguration() {
		return this._modeConfiguration;
	}
	get diagnosticsOptions() {
		return this._diagnosticsOptions;
	}
	setDiagnosticsOptions(_) {
		this._diagnosticsOptions = _ || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(this);
	}
	setModeConfiguration(_) {
		this._modeConfiguration = _ || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(this);
	}
}("json", {
	validate: !0,
	allowComments: !0,
	schemas: [],
	enableSchemaRequest: !1,
	schemaRequest: "warning",
	schemaValidation: "warning",
	comments: "error",
	trailingCommas: "error"
}, {
	documentFormattingEdits: !0,
	documentRangeFormattingEdits: !0,
	completionItems: !0,
	hovers: !0,
	documentSymbols: !0,
	tokens: !0,
	colors: !0,
	foldingRanges: !0,
	diagnostics: !0,
	selectionRanges: !0
}), getWorker = () => getMode().then((_) => _.getWorker());
function getMode() {
	return import("./jsonMode-DJBH-URg.js");
}
languages.register({
	id: "json",
	extensions: [
		".json",
		".bowerrc",
		".jshintrc",
		".jscsrc",
		".eslintrc",
		".babelrc",
		".har"
	],
	aliases: ["JSON", "json"],
	mimetypes: ["application/json"]
}), languages.onLanguage("json", () => {
	getMode().then((_) => _.setupMode(jsonDefaults));
});
var languageDefinitions = {}, lazyLanguageLoaders = {}, LazyLanguageLoader = class _ {
	static getOrCreate(K) {
		return lazyLanguageLoaders[K] || (lazyLanguageLoaders[K] = new _(K)), lazyLanguageLoaders[K];
	}
	constructor(_) {
		this._languageId = _, this._loadingTriggered = !1, this._lazyLoadPromise = new Promise((_, K) => {
			this._lazyLoadPromiseResolve = _, this._lazyLoadPromiseReject = K;
		});
	}
	load() {
		return this._loadingTriggered || (this._loadingTriggered = !0, languageDefinitions[this._languageId].loader().then((_) => this._lazyLoadPromiseResolve(_), (_) => this._lazyLoadPromiseReject(_))), this._lazyLoadPromise;
	}
};
function registerLanguage(_) {
	let K = _.id;
	languageDefinitions[K] = _, languages.register(_);
	let q = LazyLanguageLoader.getOrCreate(K);
	languages.registerTokensProviderFactory(K, { create: async () => (await q.load()).language }), languages.onLanguageEncountered(K, async () => {
		let _ = await q.load();
		languages.setLanguageConfiguration(K, _.conf);
	});
}
registerLanguage({
	id: "abap",
	extensions: [".abap"],
	aliases: ["abap", "ABAP"],
	loader: () => import("./abap--sF0GNHn.js")
}), registerLanguage({
	id: "apex",
	extensions: [".cls"],
	aliases: ["Apex", "apex"],
	mimetypes: ["text/x-apex-source", "text/x-apex"],
	loader: () => import("./apex-Dpi6p-he.js")
}), registerLanguage({
	id: "azcli",
	extensions: [".azcli"],
	aliases: ["Azure CLI", "azcli"],
	loader: () => import("./azcli-BTmJmakH.js")
}), registerLanguage({
	id: "bat",
	extensions: [".bat", ".cmd"],
	aliases: ["Batch", "bat"],
	loader: () => import("./bat-DRsSx2qa.js")
}), registerLanguage({
	id: "bicep",
	extensions: [".bicep"],
	aliases: ["Bicep"],
	loader: () => import("./bicep-BlfDr99_.js")
}), registerLanguage({
	id: "cameligo",
	extensions: [".mligo"],
	aliases: ["Cameligo"],
	loader: () => import("./cameligo-OGCZUGdV.js")
}), registerLanguage({
	id: "clojure",
	extensions: [
		".clj",
		".cljs",
		".cljc",
		".edn"
	],
	aliases: ["clojure", "Clojure"],
	loader: () => import("./clojure-B4kCxb-E.js")
}), registerLanguage({
	id: "coffeescript",
	extensions: [".coffee"],
	aliases: [
		"CoffeeScript",
		"coffeescript",
		"coffee"
	],
	mimetypes: ["text/x-coffeescript", "text/coffeescript"],
	loader: () => import("./coffee-BVMepJHb.js")
}), registerLanguage({
	id: "c",
	extensions: [".c", ".h"],
	aliases: ["C", "c"],
	loader: () => import("./cpp-TeuywLU-.js")
}), registerLanguage({
	id: "cpp",
	extensions: [
		".cpp",
		".cc",
		".cxx",
		".hpp",
		".hh",
		".hxx"
	],
	aliases: [
		"C++",
		"Cpp",
		"cpp"
	],
	loader: () => import("./cpp-TeuywLU-.js")
}), registerLanguage({
	id: "csharp",
	extensions: [
		".cs",
		".csx",
		".cake"
	],
	aliases: ["C#", "csharp"],
	loader: () => import("./csharp-GpKbfRcA.js")
}), registerLanguage({
	id: "csp",
	extensions: [".csp"],
	aliases: ["CSP", "csp"],
	loader: () => import("./csp-ClASM3Ft.js")
}), registerLanguage({
	id: "css",
	extensions: [".css"],
	aliases: ["CSS", "css"],
	mimetypes: ["text/css"],
	loader: () => import("./css-DRax18Ut.js")
}), registerLanguage({
	id: "cypher",
	extensions: [".cypher", ".cyp"],
	aliases: ["Cypher", "OpenCypher"],
	loader: () => import("./cypher-M7F9Ep8q.js")
}), registerLanguage({
	id: "dart",
	extensions: [".dart"],
	aliases: ["Dart", "dart"],
	mimetypes: ["text/x-dart-source", "text/x-dart"],
	loader: () => import("./dart-CFv8cG2u.js")
}), registerLanguage({
	id: "dockerfile",
	extensions: [".dockerfile"],
	filenames: ["Dockerfile"],
	aliases: ["Dockerfile"],
	loader: () => import("./dockerfile-BX1W4bf1.js")
}), registerLanguage({
	id: "ecl",
	extensions: [".ecl"],
	aliases: [
		"ECL",
		"Ecl",
		"ecl"
	],
	loader: () => import("./ecl-jIXLZshh.js")
}), registerLanguage({
	id: "elixir",
	extensions: [".ex", ".exs"],
	aliases: [
		"Elixir",
		"elixir",
		"ex"
	],
	loader: () => import("./elixir-Ch8NBDNd.js")
}), registerLanguage({
	id: "flow9",
	extensions: [".flow"],
	aliases: [
		"Flow9",
		"Flow",
		"flow9",
		"flow"
	],
	loader: () => import("./flow9-BIxlaOEJ.js")
}), registerLanguage({
	id: "fsharp",
	extensions: [
		".fs",
		".fsi",
		".ml",
		".mli",
		".fsx",
		".fsscript"
	],
	aliases: [
		"F#",
		"FSharp",
		"fsharp"
	],
	loader: () => import("./fsharp-B1nXxhiu.js")
}), registerLanguage({
	id: "freemarker2",
	extensions: [
		".ftl",
		".ftlh",
		".ftlx"
	],
	aliases: ["FreeMarker2", "Apache FreeMarker2"],
	loader: () => import("./freemarker2-DZWmqeft.js").then((_) => _.TagAutoInterpolationDollar)
}), registerLanguage({
	id: "freemarker2.tag-angle.interpolation-dollar",
	aliases: ["FreeMarker2 (Angle/Dollar)", "Apache FreeMarker2 (Angle/Dollar)"],
	loader: () => import("./freemarker2-DZWmqeft.js").then((_) => _.TagAngleInterpolationDollar)
}), registerLanguage({
	id: "freemarker2.tag-bracket.interpolation-dollar",
	aliases: ["FreeMarker2 (Bracket/Dollar)", "Apache FreeMarker2 (Bracket/Dollar)"],
	loader: () => import("./freemarker2-DZWmqeft.js").then((_) => _.TagBracketInterpolationDollar)
}), registerLanguage({
	id: "freemarker2.tag-angle.interpolation-bracket",
	aliases: ["FreeMarker2 (Angle/Bracket)", "Apache FreeMarker2 (Angle/Bracket)"],
	loader: () => import("./freemarker2-DZWmqeft.js").then((_) => _.TagAngleInterpolationBracket)
}), registerLanguage({
	id: "freemarker2.tag-bracket.interpolation-bracket",
	aliases: ["FreeMarker2 (Bracket/Bracket)", "Apache FreeMarker2 (Bracket/Bracket)"],
	loader: () => import("./freemarker2-DZWmqeft.js").then((_) => _.TagBracketInterpolationBracket)
}), registerLanguage({
	id: "freemarker2.tag-auto.interpolation-dollar",
	aliases: ["FreeMarker2 (Auto/Dollar)", "Apache FreeMarker2 (Auto/Dollar)"],
	loader: () => import("./freemarker2-DZWmqeft.js").then((_) => _.TagAutoInterpolationDollar)
}), registerLanguage({
	id: "freemarker2.tag-auto.interpolation-bracket",
	aliases: ["FreeMarker2 (Auto/Bracket)", "Apache FreeMarker2 (Auto/Bracket)"],
	loader: () => import("./freemarker2-DZWmqeft.js").then((_) => _.TagAutoInterpolationBracket)
}), registerLanguage({
	id: "go",
	extensions: [".go"],
	aliases: ["Go"],
	loader: () => import("./go-CreC3GbV.js")
}), registerLanguage({
	id: "graphql",
	extensions: [".graphql", ".gql"],
	aliases: [
		"GraphQL",
		"graphql",
		"gql"
	],
	mimetypes: ["application/graphql"],
	loader: () => import("./graphql-B13i_Z-x.js")
}), registerLanguage({
	id: "handlebars",
	extensions: [".handlebars", ".hbs"],
	aliases: [
		"Handlebars",
		"handlebars",
		"hbs"
	],
	mimetypes: ["text/x-handlebars-template"],
	loader: () => import("./handlebars-DYIzlEYh.js")
}), registerLanguage({
	id: "hcl",
	extensions: [
		".tf",
		".tfvars",
		".hcl"
	],
	aliases: [
		"Terraform",
		"tf",
		"HCL",
		"hcl"
	],
	loader: () => import("./hcl-DBI_waYP.js")
}), registerLanguage({
	id: "html",
	extensions: [
		".html",
		".htm",
		".shtml",
		".xhtml",
		".mdoc",
		".jsp",
		".asp",
		".aspx",
		".jshtm"
	],
	aliases: [
		"HTML",
		"htm",
		"html",
		"xhtml"
	],
	mimetypes: [
		"text/html",
		"text/x-jshtm",
		"text/template",
		"text/ng-template"
	],
	loader: () => import("./html-zVX7-Omn.js")
}), registerLanguage({
	id: "ini",
	extensions: [
		".ini",
		".properties",
		".gitconfig"
	],
	filenames: [
		"config",
		".gitattributes",
		".gitconfig",
		".editorconfig"
	],
	aliases: ["Ini", "ini"],
	loader: () => import("./ini-C_lovRdI.js")
}), registerLanguage({
	id: "java",
	extensions: [".java", ".jav"],
	aliases: ["Java", "java"],
	mimetypes: ["text/x-java-source", "text/x-java"],
	loader: () => import("./java-qddkBJur.js")
}), registerLanguage({
	id: "javascript",
	extensions: [
		".js",
		".es6",
		".jsx",
		".mjs",
		".cjs"
	],
	firstLine: "^#!.*\\bnode",
	filenames: ["jakefile"],
	aliases: [
		"JavaScript",
		"javascript",
		"js"
	],
	mimetypes: ["text/javascript"],
	loader: () => import("./javascript-Cp4C0z_U.js")
}), registerLanguage({
	id: "julia",
	extensions: [".jl"],
	aliases: ["julia", "Julia"],
	loader: () => import("./julia-I_lfyCaW.js")
}), registerLanguage({
	id: "kotlin",
	extensions: [".kt", ".kts"],
	aliases: ["Kotlin", "kotlin"],
	mimetypes: ["text/x-kotlin-source", "text/x-kotlin"],
	loader: () => import("./kotlin-DYM7v-yD.js")
}), registerLanguage({
	id: "less",
	extensions: [".less"],
	aliases: ["Less", "less"],
	mimetypes: ["text/x-less", "text/less"],
	loader: () => import("./less-3l3jioQh.js")
}), registerLanguage({
	id: "lexon",
	extensions: [".lex"],
	aliases: ["Lexon"],
	loader: () => import("./lexon-Dk70J6Va.js")
}), registerLanguage({
	id: "lua",
	extensions: [".lua"],
	aliases: ["Lua", "lua"],
	loader: () => import("./lua-DehkeHoy.js")
}), registerLanguage({
	id: "liquid",
	extensions: [".liquid", ".html.liquid"],
	aliases: ["Liquid", "liquid"],
	mimetypes: ["application/liquid"],
	loader: () => import("./liquid-C5bdycYL.js")
}), registerLanguage({
	id: "m3",
	extensions: [
		".m3",
		".i3",
		".mg",
		".ig"
	],
	aliases: [
		"Modula-3",
		"Modula3",
		"modula3",
		"m3"
	],
	loader: () => import("./m3-DNfz1jtz.js")
}), registerLanguage({
	id: "markdown",
	extensions: [
		".md",
		".markdown",
		".mdown",
		".mkdn",
		".mkd",
		".mdwn",
		".mdtxt",
		".mdtext"
	],
	aliases: ["Markdown", "markdown"],
	loader: () => import("./markdown-C8a58fvv.js")
}), registerLanguage({
	id: "mdx",
	extensions: [".mdx"],
	aliases: ["MDX", "mdx"],
	loader: () => import("./mdx-DfqsjB0F.js")
}), registerLanguage({
	id: "mips",
	extensions: [".s"],
	aliases: ["MIPS", "MIPS-V"],
	mimetypes: [
		"text/x-mips",
		"text/mips",
		"text/plaintext"
	],
	loader: () => import("./mips-CIjwtJtI.js")
}), registerLanguage({
	id: "msdax",
	extensions: [".dax", ".msdax"],
	aliases: ["DAX", "MSDAX"],
	loader: () => import("./msdax-QAUdiW_0.js")
}), registerLanguage({
	id: "mysql",
	extensions: [],
	aliases: ["MySQL", "mysql"],
	loader: () => import("./mysql-CJf0tpgS.js")
}), registerLanguage({
	id: "objective-c",
	extensions: [".m"],
	aliases: ["Objective-C"],
	loader: () => import("./objective-c-ChHlPOYs.js")
}), registerLanguage({
	id: "pascal",
	extensions: [
		".pas",
		".p",
		".pp"
	],
	aliases: ["Pascal", "pas"],
	mimetypes: ["text/x-pascal-source", "text/x-pascal"],
	loader: () => import("./pascal-DQdM2U8E.js")
}), registerLanguage({
	id: "pascaligo",
	extensions: [".ligo"],
	aliases: ["Pascaligo", "ligo"],
	loader: () => import("./pascaligo-qcahW5Yf.js")
}), registerLanguage({
	id: "perl",
	extensions: [".pl", ".pm"],
	aliases: ["Perl", "pl"],
	loader: () => import("./perl-DFPrTayB.js")
}), registerLanguage({
	id: "pgsql",
	extensions: [],
	aliases: [
		"PostgreSQL",
		"postgres",
		"pg",
		"postgre"
	],
	loader: () => import("./pgsql-D10Z6tzJ.js")
}), registerLanguage({
	id: "php",
	extensions: [
		".php",
		".php4",
		".php5",
		".phtml",
		".ctp"
	],
	aliases: ["PHP", "php"],
	mimetypes: ["application/x-php"],
	loader: () => import("./php-CFPcarz6.js")
}), registerLanguage({
	id: "pla",
	extensions: [".pla"],
	loader: () => import("./pla-BQAADhSc.js")
}), registerLanguage({
	id: "postiats",
	extensions: [
		".dats",
		".sats",
		".hats"
	],
	aliases: ["ATS", "ATS/Postiats"],
	loader: () => import("./postiats-BRw_PWYx.js")
}), registerLanguage({
	id: "powerquery",
	extensions: [".pq", ".pqm"],
	aliases: [
		"PQ",
		"M",
		"Power Query",
		"Power Query M"
	],
	loader: () => import("./powerquery-CR-FBofP.js")
}), registerLanguage({
	id: "powershell",
	extensions: [
		".ps1",
		".psm1",
		".psd1"
	],
	aliases: [
		"PowerShell",
		"powershell",
		"ps",
		"ps1"
	],
	loader: () => import("./powershell-nDJpl2Jb.js")
}), registerLanguage({
	id: "proto",
	extensions: [".proto"],
	aliases: ["protobuf", "Protocol Buffers"],
	loader: () => import("./protobuf-CHSZOg41.js")
}), registerLanguage({
	id: "pug",
	extensions: [".jade", ".pug"],
	aliases: [
		"Pug",
		"Jade",
		"jade"
	],
	loader: () => import("./pug-C70M22do.js")
}), registerLanguage({
	id: "python",
	extensions: [
		".py",
		".rpy",
		".pyw",
		".cpy",
		".gyp",
		".gypi"
	],
	aliases: ["Python", "py"],
	firstLine: "^#!/.*\\bpython[0-9.-]*\\b",
	loader: () => import("./python-BdhGN3_o.js")
}), registerLanguage({
	id: "qsharp",
	extensions: [".qs"],
	aliases: ["Q#", "qsharp"],
	loader: () => import("./qsharp-RjA9tY0G.js")
}), registerLanguage({
	id: "r",
	extensions: [
		".r",
		".rhistory",
		".rmd",
		".rprofile",
		".rt"
	],
	aliases: ["R", "r"],
	loader: () => import("./r-jGoAn1Dk.js")
}), registerLanguage({
	id: "razor",
	extensions: [".cshtml"],
	aliases: ["Razor", "razor"],
	mimetypes: ["text/x-cshtml"],
	loader: () => import("./razor-DBUkpSTq.js")
}), registerLanguage({
	id: "redis",
	extensions: [".redis"],
	aliases: ["redis"],
	loader: () => import("./redis-BBSah_Xc.js")
}), registerLanguage({
	id: "redshift",
	extensions: [],
	aliases: ["Redshift", "redshift"],
	loader: () => import("./redshift-gImIl3v4.js")
}), registerLanguage({
	id: "restructuredtext",
	extensions: [".rst"],
	aliases: ["reStructuredText", "restructuredtext"],
	loader: () => import("./restructuredtext-BJ-oYdIA.js")
}), registerLanguage({
	id: "ruby",
	extensions: [
		".rb",
		".rbx",
		".rjs",
		".gemspec",
		".pp"
	],
	filenames: ["rakefile", "Gemfile"],
	aliases: ["Ruby", "rb"],
	loader: () => import("./ruby-DMhEsrlJ.js")
}), registerLanguage({
	id: "rust",
	extensions: [".rs", ".rlib"],
	aliases: ["Rust", "rust"],
	loader: () => import("./rust-B-mpRI0X.js")
}), registerLanguage({
	id: "sb",
	extensions: [".sb"],
	aliases: ["Small Basic", "sb"],
	loader: () => import("./sb-C26Sjbps.js")
}), registerLanguage({
	id: "scala",
	extensions: [
		".scala",
		".sc",
		".sbt"
	],
	aliases: [
		"Scala",
		"scala",
		"SBT",
		"Sbt",
		"sbt",
		"Dotty",
		"dotty"
	],
	mimetypes: [
		"text/x-scala-source",
		"text/x-scala",
		"text/x-sbt",
		"text/x-dotty"
	],
	loader: () => import("./scala-D2NlI7w5.js")
}), registerLanguage({
	id: "scheme",
	extensions: [
		".scm",
		".ss",
		".sch",
		".rkt"
	],
	aliases: ["scheme", "Scheme"],
	loader: () => import("./scheme-oRNeASF1.js")
}), registerLanguage({
	id: "scss",
	extensions: [".scss"],
	aliases: [
		"Sass",
		"sass",
		"scss"
	],
	mimetypes: ["text/x-scss", "text/scss"],
	loader: () => import("./scss-CM7PkRP7.js")
}), registerLanguage({
	id: "shell",
	extensions: [".sh", ".bash"],
	aliases: ["Shell", "sh"],
	loader: () => import("./shell-C5zYFPrK.js")
}), registerLanguage({
	id: "sol",
	extensions: [".sol"],
	aliases: [
		"sol",
		"solidity",
		"Solidity"
	],
	loader: () => import("./solidity-BtS7JYlb.js")
}), registerLanguage({
	id: "aes",
	extensions: [".aes"],
	aliases: [
		"aes",
		"sophia",
		"Sophia"
	],
	loader: () => import("./sophia-A_IveTD3.js")
}), registerLanguage({
	id: "sparql",
	extensions: [".rq"],
	aliases: ["sparql", "SPARQL"],
	loader: () => import("./sparql-DokMR0pH.js")
}), registerLanguage({
	id: "sql",
	extensions: [".sql"],
	aliases: ["SQL"],
	loader: () => import("./sql-BhPxUQuQ.js")
}), registerLanguage({
	id: "st",
	extensions: [
		".st",
		".iecst",
		".iecplc",
		".lc3lib",
		".TcPOU",
		".TcDUT",
		".TcGVL",
		".TcIO"
	],
	aliases: [
		"StructuredText",
		"scl",
		"stl"
	],
	loader: () => import("./st-B0O1uBAN.js")
}), registerLanguage({
	id: "swift",
	aliases: ["Swift", "swift"],
	extensions: [".swift"],
	mimetypes: ["text/swift"],
	loader: () => import("./swift-CTUujajC.js")
}), registerLanguage({
	id: "systemverilog",
	extensions: [".sv", ".svh"],
	aliases: [
		"SV",
		"sv",
		"SystemVerilog",
		"systemverilog"
	],
	loader: () => import("./systemverilog-BGcvSje7.js")
}), registerLanguage({
	id: "verilog",
	extensions: [".v", ".vh"],
	aliases: [
		"V",
		"v",
		"Verilog",
		"verilog"
	],
	loader: () => import("./systemverilog-BGcvSje7.js")
}), registerLanguage({
	id: "tcl",
	extensions: [".tcl"],
	aliases: [
		"tcl",
		"Tcl",
		"tcltk",
		"TclTk",
		"tcl/tk",
		"Tcl/Tk"
	],
	loader: () => import("./tcl-C-AF4JSy.js")
}), registerLanguage({
	id: "twig",
	extensions: [".twig"],
	aliases: ["Twig", "twig"],
	mimetypes: ["text/x-twig"],
	loader: () => import("./twig-CHoQT8Hv.js")
}), registerLanguage({
	id: "typescript",
	extensions: [
		".ts",
		".tsx",
		".cts",
		".mts"
	],
	aliases: [
		"TypeScript",
		"ts",
		"typescript"
	],
	mimetypes: ["text/typescript"],
	loader: () => import("./typescript-BzM7XRt5.js")
}), registerLanguage({
	id: "typespec",
	extensions: [".tsp"],
	aliases: ["TypeSpec"],
	loader: () => import("./typespec-AkK_O4pn.js")
}), registerLanguage({
	id: "vb",
	extensions: [".vb"],
	aliases: ["Visual Basic", "vb"],
	loader: () => import("./vb-Nzxco88v.js")
}), registerLanguage({
	id: "wgsl",
	extensions: [".wgsl"],
	aliases: [
		"WebGPU Shading Language",
		"WGSL",
		"wgsl"
	],
	loader: () => import("./wgsl-CKybIK-m.js")
}), registerLanguage({
	id: "xml",
	extensions: [
		".xml",
		".xsd",
		".dtd",
		".ascx",
		".csproj",
		".config",
		".props",
		".targets",
		".wxi",
		".wxl",
		".wxs",
		".xaml",
		".svg",
		".svgz",
		".opf",
		".xslt",
		".xsl"
	],
	firstLine: "(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",
	aliases: ["XML", "xml"],
	mimetypes: [
		"text/xml",
		"application/xml",
		"application/xaml+xml",
		"application/xml-dtd"
	],
	loader: () => import("./xml-DMEFqiM3.js")
}), registerLanguage({
	id: "yaml",
	extensions: [".yaml", ".yml"],
	aliases: [
		"YAML",
		"yaml",
		"YML",
		"yml"
	],
	mimetypes: ["application/x-yaml", "text/x-yaml"],
	loader: () => import("./yaml-CN8xz4uI.js")
});
var out_exports = /* @__PURE__ */ __export({
	MonacoLspClient: () => MonacoLspClient,
	WebSocketTransport: () => WebSocketTransport,
	createTransportToIFrame: () => createTransportToIFrame,
	createTransportToWorker: () => createTransportToWorker
}, 1), __defProp = Object.defineProperty, __defNormalProp = (_, K, q) => K in _ ? __defProp(_, K, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: q
}) : _[K] = q, __publicField = (_, K, q) => __defNormalProp(_, typeof K == "symbol" ? K : K + "", q), _a, _b, _c, _d, _e;
function isRequestOrNotification(_) {
	return _.method !== void 0;
}
var ErrorObject;
(function(_) {
	function K(_) {
		return _;
	}
	_.create = K;
})(ErrorObject ||= {});
var ErrorCode;
(function(_) {
	_.parseError = -32700, _.invalidRequest = -32600, _.methodNotFound = -32601, _.invalidParams = -32602, _.internalError = -32603;
	function K(_) {
		return -32099 <= _ && _ <= -32e3;
	}
	_.isServerError = K;
	function q(_) {
		if (!K(_)) throw Error("Invalid range for a server error.");
		return _;
	}
	_.serverError = q, _.unexpectedServerError = -32e3;
	function J(_) {
		return !0;
	}
	_.isApplicationError = J;
	function Y(_) {
		return _;
	}
	_.applicationError = Y, _.genericApplicationError = -320100;
})(ErrorCode ||= {});
var EventEmitter = class {
	constructor() {
		__publicField(this, "listeners", /* @__PURE__ */ new Set()), __publicField(this, "event", (_) => (this.listeners.add(_), { dispose: () => {
			this.listeners.delete(_);
		} }));
	}
	fire(_) {
		this.listeners.forEach((K) => K(_));
	}
}, ValueWithChangeEvent = class {
	constructor(_) {
		__publicField(this, "_value"), __publicField(this, "eventEmitter"), this._value = _, this.eventEmitter = new EventEmitter();
	}
	get value() {
		return this._value;
	}
	set value(_) {
		this._value !== _ && (this._value = _, this.eventEmitter.fire(_));
	}
	get onChange() {
		return this.eventEmitter.event;
	}
};
function createTimeout(_, K) {
	let q = setTimeout(K, _);
	return { dispose: () => clearTimeout(q) };
}
function setAndDeleteOnDispose(_, K, q) {
	return _ instanceof Set ? (_.add(K), { dispose: () => _.delete(K) }) : (_.set(K, q), { dispose: () => _.delete(K) });
}
var Deferred = class {
	constructor() {
		__publicField(this, "_state", "none"), __publicField(this, "promise"), __publicField(this, "resolve", () => {}), __publicField(this, "reject", () => {}), this.promise = new Promise((_, K) => {
			this.resolve = _, this.reject = K;
		});
	}
	get state() {
		return this._state;
	}
}, BaseMessageTransport = (_a = class {
	constructor() {
		__publicField(this, "_unprocessedMessages", []), __publicField(this, "_messageListener"), __publicField(this, "id", _a.id++), __publicField(this, "_state", new ValueWithChangeEvent({ state: "open" })), __publicField(this, "state", this._state);
	}
	setListener(_) {
		if (this._messageListener = _, _) for (; this._unprocessedMessages.length > 0 && this._messageListener !== void 0;) {
			let _ = this._unprocessedMessages.shift();
			this._messageListener(_);
		}
	}
	send(_) {
		return this._sendImpl(_);
	}
	_dispatchReceivedMessage(_) {
		this._unprocessedMessages.length === 0 && this._messageListener ? this._messageListener(_) : this._unprocessedMessages.push(_);
	}
	_onConnectionClosed() {
		this._state.value = {
			state: "closed",
			error: void 0
		};
	}
	log(_) {
		return new StreamLogger(this, _ ?? new ConsoleMessageLogger());
	}
}, __publicField(_a, "id", 0), _a), StreamLogger = class {
	constructor(_, K) {
		__publicField(this, "baseStream"), __publicField(this, "logger"), this.baseStream = _, this.logger = K;
	}
	get state() {
		return this.baseStream.state;
	}
	setListener(_) {
		if (_ === void 0) {
			this.baseStream.setListener(void 0);
			return;
		}
		this.baseStream.setListener((K) => {
			this.logger.log(this.baseStream, "incoming", K), _(K);
		});
	}
	send(_) {
		return this.logger.log(this.baseStream, "outgoing", _), this.baseStream.send(_);
	}
	toString() {
		return `StreamLogger/${this.baseStream.toString()}`;
	}
}, ConsoleMessageLogger = class {
	log(_, K, q) {
		let J = K === "incoming" ? "<-" : "->";
		console.log(`${J} [${_.toString()}] ${JSON.stringify(q)}`);
	}
}, Channel = class _ {
	constructor(_) {
		__publicField(this, "connect"), this.connect = _;
	}
	mapContext(K) {
		return new _((_) => this.connect(_ ? mapRequestHandlerContext(_, K) : void 0));
	}
};
function mapRequestHandlerContext(_, K) {
	return {
		handleNotification: (q, J) => _.handleNotification(q, K(J)),
		handleRequest: (q, J, Y) => _.handleRequest(q, J, K(Y))
	};
}
var StreamBasedChannel = class _ {
	constructor(_, K, q) {
		__publicField(this, "_stream"), __publicField(this, "_listener"), __publicField(this, "_logger"), __publicField(this, "_unprocessedResponses", /* @__PURE__ */ new Map()), __publicField(this, "_lastUsedRequestId", 0), this._stream = _, this._listener = K, this._logger = q, this._stream.setListener((_) => {
			isRequestOrNotification(_) ? _.id === void 0 ? this._processNotification(_) : this._processRequest(_) : this._processResponse(_);
		});
	}
	static createChannel(K, q) {
		let J = !1;
		return new Channel((Y) => {
			if (J) throw Error(`A channel to the stream ${K} was already constructed!`);
			return J = !0, new _(K, Y, q);
		});
	}
	get state() {
		return this._stream.state;
	}
	async _processNotification(_) {
		if (_.id !== void 0) throw Error();
		if (!this._listener) {
			this._logger && this._logger.debug({
				text: "Notification ignored",
				message: _
			});
			return;
		}
		try {
			await this._listener.handleNotification({
				method: _.method,
				params: _.params || null
			});
		} catch (K) {
			this._logger && this._logger.warn({
				text: `Exception was thrown while handling notification: ${K}`,
				exception: K,
				message: _
			});
		}
	}
	async _processRequest(_) {
		if (_.id === void 0) throw Error();
		let K;
		if (this._listener) try {
			K = await this._listener.handleRequest({
				method: _.method,
				params: _.params || null
			}, _.id);
		} catch (q) {
			this._logger && this._logger.warn({
				text: `Exception was thrown while handling request: ${q}`,
				message: _,
				exception: q
			}), K = { error: {
				code: ErrorCode.internalError,
				message: "An unexpected exception was thrown.",
				data: void 0
			} };
		}
		else this._logger && this._logger.debug({
			text: "Received request even though not listening for requests",
			message: _
		}), K = { error: {
			code: ErrorCode.methodNotFound,
			message: "This endpoint does not listen for requests or notifications.",
			data: void 0
		} };
		let q;
		q = "result" in K ? {
			jsonrpc: "2.0",
			id: _.id,
			result: K.result
		} : {
			jsonrpc: "2.0",
			id: _.id,
			error: K.error
		}, await this._stream.send(q);
	}
	_processResponse(_) {
		let K = "" + _.id, q = this._unprocessedResponses.get(K);
		if (!q) {
			this._logger && this._logger.debug({
				text: "Got an unexpected response message",
				message: _
			});
			return;
		}
		this._unprocessedResponses.delete(K), q(_);
	}
	_newRequestId() {
		return this._lastUsedRequestId++;
	}
	sendRequest(_, K, q) {
		let J = {
			jsonrpc: "2.0",
			id: this._newRequestId(),
			method: _.method,
			params: _.params || void 0
		};
		return q && q(J.id), new Promise((_, K) => {
			let q = "" + J.id;
			this._unprocessedResponses.set(q, (q) => {
				"result" in q ? _({ result: q.result }) : (q.error || K(/* @__PURE__ */ Error("Response had neither 'result' nor 'error' field set.")), _({ error: q.error }));
			}), this._stream.send(J).then(void 0, (_) => {
				this._unprocessedResponses.delete(q), K(_);
			});
		});
	}
	sendNotification(_, K) {
		let q = {
			jsonrpc: "2.0",
			id: void 0,
			method: _.method,
			params: _.params || void 0
		};
		return this._stream.send(q);
	}
	toString() {
		return "StreamChannel/" + this._stream.toString();
	}
}, Serializers;
(function(_) {
	function K() {
		return {
			deserializeFromJson: (_) => ({
				hasErrors: !1,
				value: _
			}),
			serializeToJson: (_) => _
		};
	}
	_.sAny = K;
	function q() {
		return {
			deserializeFromJson: (_) => ({
				hasErrors: !1,
				value: {}
			}),
			serializeToJson: (_) => ({})
		};
	}
	_.sEmptyObject = q;
	function J() {
		return {
			deserializeFromJson: (_) => ({
				hasErrors: !1,
				value: void 0
			}),
			serializeToJson: (_) => null
		};
	}
	_.sVoidFromNull = J;
})(Serializers ||= {});
var OptionalMethodNotFound = Symbol("OptionalMethodNotFound"), TypedChannelBase = class {
	contextualize(_) {
		return new ContextualizedTypedChannel(this, _);
	}
}, ContextualizedTypedChannel = class extends TypedChannelBase {
	constructor(_, K) {
		super(), __publicField(this, "underylingTypedChannel"), __publicField(this, "converters"), this.underylingTypedChannel = _, this.converters = K;
	}
	async request(_, K, q) {
		let J = await this.converters.getSendContext(q);
		return this.underylingTypedChannel.request(_, K, J);
	}
	async notify(_, K, q) {
		let J = await this.converters.getSendContext(q);
		return this.underylingTypedChannel.notify(_, K, J);
	}
	registerNotificationHandler(_, K) {
		return this.underylingTypedChannel.registerNotificationHandler(_, async (_, q) => await K(_, await this.converters.getNewContext(q)));
	}
	registerRequestHandler(_, K) {
		return this.underylingTypedChannel.registerRequestHandler(_, async (_, q, J) => await K(_, q, await this.converters.getNewContext(J)));
	}
}, TypedChannel = class _ extends TypedChannelBase {
	constructor(_, K = {}) {
		super(), __publicField(this, "channelCtor"), __publicField(this, "_requestSender"), __publicField(this, "_handler", /* @__PURE__ */ new Map()), __publicField(this, "_unknownNotificationHandler", /* @__PURE__ */ new Set()), __publicField(this, "_timeout"), __publicField(this, "sendExceptionDetails", !1), __publicField(this, "_logger"), __publicField(this, "listeningDeferred", new Deferred()), __publicField(this, "onListening", this.listeningDeferred.promise), __publicField(this, "_requestDidErrorEventEmitter", new EventEmitter()), __publicField(this, "onRequestDidError", this._requestDidErrorEventEmitter.event), this.channelCtor = _, this._logger = K.logger, this.sendExceptionDetails = !!K.sendExceptionDetails, this._timeout = createTimeout(1e3, () => {
			this._requestSender || console.warn(`"${this.startListen.name}" has not been called within 1 second after construction of this channel. Did you forget to call it?`, this);
		});
	}
	static fromTransport(K, q = {}) {
		return new _(StreamBasedChannel.createChannel(K, q.logger), q);
	}
	startListen() {
		if (this._requestSender) throw Error(`"${this.startListen.name}" can be called only once, but it already has been called.`);
		this._timeout &&= (this._timeout.dispose(), void 0), this._requestSender = this.channelCtor.connect({
			handleRequest: (_, K, q) => this.handleRequest(_, K, q),
			handleNotification: (_, K) => this.handleNotification(_, K)
		}), this.listeningDeferred.resolve();
	}
	checkChannel(_) {
		if (!_) throw Error(`"${this.startListen.name}" must be called before any messages can be sent or received.`);
		return !0;
	}
	async handleRequest(_, K, q) {
		let J = this._handler.get(_.method);
		if (!J) return this._logger && this._logger.debug({
			text: `No request handler for "${_.method}".`,
			data: { requestObject: _ }
		}), { error: {
			code: ErrorCode.methodNotFound,
			message: `No request handler for "${_.method}".`,
			data: { method: _.method }
		} };
		if (J.kind != "request") {
			let K = `"${_.method}" is registered as notification, but was sent as request.`;
			return this._logger && this._logger.debug({
				text: K,
				data: { requestObject: _ }
			}), { error: {
				code: ErrorCode.invalidRequest,
				message: K,
				data: { method: _.method }
			} };
		}
		let Y = J.requestType.paramsSerializer.deserializeFromJson(_.params);
		if (Y.hasErrors) {
			let K = `Got invalid params: ${Y.errorMessage}`;
			return this._logger && this._logger.debug({
				text: K,
				data: {
					requestObject: _,
					errorMessage: Y.errorMessage
				}
			}), { error: {
				code: ErrorCode.invalidParams,
				message: K,
				data: { errors: Y.errorMessage }
			} };
		} else {
			let X = Y.value, Z;
			try {
				let _ = await J.handler(X, K, q);
				if ("error" in _ || "errorMessage" in _) {
					let K = _.error ? J.requestType.errorSerializer.serializeToJson(_.error) : void 0;
					Z = { error: {
						code: _.errorCode || ErrorCode.genericApplicationError,
						message: _.errorMessage || "An error was returned",
						data: K
					} };
				} else Z = { result: J.requestType.resultSerializer.serializeToJson(_.ok) };
			} catch (K) {
				K instanceof RequestHandlingError ? Z = { error: {
					code: K.code,
					message: K.message
				} } : (this._logger && this._logger.warn({
					text: `An exception was thrown while handling a request: ${K}.`,
					exception: K,
					data: { requestObject: _ }
				}), Z = { error: {
					code: ErrorCode.unexpectedServerError,
					message: this.sendExceptionDetails ? `An exception was thrown while handling a request: ${K}.` : "Server has thrown an unexpected exception"
				} });
			}
			return Z;
		}
	}
	async handleNotification(_, K) {
		let q = this._handler.get(_.method);
		if (!q) {
			for (let K of this._unknownNotificationHandler) K(_);
			this._unknownNotificationHandler.size === 0 && this._logger && this._logger.debug({
				text: `Unhandled notification "${_.method}"`,
				data: { requestObject: _ }
			});
			return;
		}
		if (q.kind != "notification") {
			this._logger && this._logger.debug({
				text: `"${_.method}" is registered as request, but was sent as notification.`,
				data: { requestObject: _ }
			});
			return;
		}
		let J = q.notificationType.paramsSerializer.deserializeFromJson(_.params);
		if (J.hasErrors) {
			this._logger && this._logger.debug({
				text: `Got invalid params: ${J}`,
				data: {
					requestObject: _,
					errorMessage: J.errorMessage
				}
			});
			return;
		}
		let Y = J.value;
		for (let J of q.handlers) try {
			J(Y, K);
		} catch (K) {
			this._logger && this._logger.warn({
				text: `An exception was thrown while handling a notification: ${K}.`,
				exception: K,
				data: { requestObject: _ }
			});
		}
	}
	registerUnknownNotificationHandler(_) {
		return setAndDeleteOnDispose(this._unknownNotificationHandler, _);
	}
	registerRequestHandler(_, K) {
		if (this._handler.get(_.method)) throw Error(`Handler with method "${_.method}" already registered.`);
		return setAndDeleteOnDispose(this._handler, _.method, {
			kind: "request",
			requestType: _,
			handler: K
		});
	}
	registerNotificationHandler(_, K) {
		let q = this._handler.get(_.method);
		if (!q) q = {
			kind: "notification",
			notificationType: _,
			handlers: /* @__PURE__ */ new Set()
		}, this._handler.set(_.method, q);
		else {
			if (q.kind !== "notification") throw Error(`Method "${_.method}" was already registered as request handler.`);
			if (q.notificationType !== _) throw Error(`Method "${_.method}" was registered for a different type.`);
		}
		return setAndDeleteOnDispose(q.handlers, K);
	}
	getRegisteredTypes() {
		let _ = [];
		for (let K of this._handler.values()) K.kind === "notification" ? _.push(K.notificationType) : K.kind === "request" && _.push(K.requestType);
		return _;
	}
	async request(_, K, q) {
		if (!this.checkChannel(this._requestSender)) throw Error("Impossible");
		let J = _.paramsSerializer.serializeToJson(K);
		assertObjectArrayOrNull(J);
		let Y = await this._requestSender.sendRequest({
			method: _.method,
			params: J
		}, q);
		if ("error" in Y) {
			if (_.isOptional && Y.error.code === ErrorCode.methodNotFound) return OptionalMethodNotFound;
			let K;
			if (Y.error.data !== void 0) {
				let q = _.errorSerializer.deserializeFromJson(Y.error.data);
				if (q.hasErrors) throw Error(q.errorMessage);
				K = q.value;
			} else K = void 0;
			let q = new RequestHandlingError(Y.error.message, K, Y.error.code);
			throw this._requestDidErrorEventEmitter.fire({ error: q }), q;
		} else {
			let K = _.resultSerializer.deserializeFromJson(Y.result);
			if (K.hasErrors) throw Error("Could not deserialize response: " + K.errorMessage + `

${JSON.stringify(Y, null, 2)}`);
			return K.value;
		}
	}
	async notify(_, K, q) {
		if (!this.checkChannel(this._requestSender)) throw Error();
		let J = _.paramsSerializer.serializeToJson(K);
		assertObjectArrayOrNull(J), this._requestSender.sendNotification({
			method: _.method,
			params: J
		}, q);
	}
};
function assertObjectArrayOrNull(_) {
	if (_ !== null && Array.isArray(_) && typeof _ != "object") throw Error("Invalid value! Only null, array and object is allowed.");
}
var RequestHandlingError = class _ extends Error {
	constructor(K, q, J = ErrorCode.genericApplicationError) {
		super(K), __publicField(this, "data"), __publicField(this, "code"), this.data = q, this.code = J, Object.setPrototypeOf(this, _.prototype);
	}
}, RequestType = class _ {
	constructor(_, K, q, J, Y = !1) {
		__publicField(this, "method"), __publicField(this, "paramsSerializer"), __publicField(this, "resultSerializer"), __publicField(this, "errorSerializer"), __publicField(this, "isOptional"), __publicField(this, "kind", "request"), this.method = _, this.paramsSerializer = K, this.resultSerializer = q, this.errorSerializer = J, this.isOptional = Y;
	}
	withMethod(K) {
		return new _(K, this.paramsSerializer, this.resultSerializer, this.errorSerializer);
	}
	optional() {
		return new _(this.method, this.paramsSerializer, this.resultSerializer, this.errorSerializer, !0);
	}
}, NotificationType = class _ {
	constructor(_, K) {
		__publicField(this, "method"), __publicField(this, "paramsSerializer"), __publicField(this, "kind", "notification"), this.method = _, this.paramsSerializer = K;
	}
	withMethod(K) {
		return new _(K, this.paramsSerializer);
	}
};
function unverifiedRequest(_) {
	return new RequestType((_ || {}).method, Serializers.sAny(), Serializers.sAny(), Serializers.sAny());
}
function unverifiedNotification(_) {
	return new NotificationType((_ || {}).method, Serializers.sAny());
}
var ErrorWrapper = (_b = Symbol(), _c = class {
	constructor(_) {
		__publicField(this, "error"), __publicField(this, _b), this.error = _;
	}
}, __publicField(_c, "factory", (_) => new _c(_)), _c);
function contract(_) {
	let K = transform(_.server), q = transform(_.client);
	return new Contract(_.tags || [], K, q);
}
function transform(_) {
	let K = {};
	for (let [q, J] of Object.entries(_)) {
		let _ = J.method ? J.method : q;
		K[q] = J.withMethod(_);
	}
	return K;
}
var Contract = class _ {
	constructor(_ = [], K, q) {
		__publicField(this, "tags"), __publicField(this, "server"), __publicField(this, "client"), this.tags = _, this.server = K, this.client = q;
	}
	_onlyDesignTime() {
		return /* @__PURE__ */ Error("This property is not meant to be accessed at runtime");
	}
	get TContractObject() {
		throw this._onlyDesignTime();
	}
	get TClientInterface() {
		throw this._onlyDesignTime();
	}
	get TServerInterface() {
		throw this._onlyDesignTime();
	}
	get TClientHandler() {
		throw this._onlyDesignTime();
	}
	get TServerHandler() {
		throw this._onlyDesignTime();
	}
	get TTags() {
		throw this._onlyDesignTime();
	}
	getInterface(_, K, q, J) {
		let Y = this.buildCounterpart(_, q), X = this.registerHandlers(_, K, J, Y);
		return {
			counterpart: Y,
			dispose: () => X.dispose()
		};
	}
	buildCounterpart(_, K) {
		let q = {};
		for (let [J, Y] of Object.entries(K)) {
			let K;
			K = Y.kind === "request" ? Y.isOptional ? async (K, q) => {
				K === void 0 && (K = {});
				try {
					return await _.request(Y, K, q);
				} catch (_) {
					if (_ && _.code === ErrorCode.methodNotFound) return OptionalMethodNotFound;
					throw _;
				}
			} : (K, q) => (K === void 0 && (K = {}), _.request(Y, K, q)) : (K, q) => (K === void 0 && (K = {}), _.notify(Y, K, q)), q[J] = K;
		}
		return q;
	}
	registerHandlers(_, K, q, J) {
		let Y = [];
		for (let [X, Z] of Object.entries(K)) if (Z.kind === "request") {
			let K = q[X];
			if (!K) continue;
			let Q = this.createRequestHandler(J, K);
			Y.push(_.registerRequestHandler(Z, Q));
		} else {
			let K = q[X];
			K && Y.push(_.registerNotificationHandler(Z, (_, q) => {
				K(_, {
					context: q,
					counterpart: J
				});
			}));
		}
		return { dispose: () => Y.forEach((_) => _.dispose()) };
	}
	createRequestHandler(_, K) {
		return async (q, J, Y) => {
			let X = await K(q, {
				context: Y,
				counterpart: _,
				newErr: ErrorWrapper.factory,
				requestId: J
			});
			return X instanceof ErrorWrapper ? X.error : { ok: X };
		};
	}
	static getServerFromStream(_, K, q, J) {
		let Y = TypedChannel.fromTransport(K, q), { server: X } = _.getServer(Y, J);
		return Y.startListen(), {
			channel: Y,
			server: X
		};
	}
	static registerServerToStream(_, K, q, J) {
		let Y = TypedChannel.fromTransport(K, q), { client: X } = _.registerServer(Y, J);
		return Y.startListen(), {
			channel: Y,
			client: X
		};
	}
	getServer(_, K) {
		let { counterpart: q, dispose: J } = this.getInterface(_, this.client, this.server, K);
		return {
			server: q,
			dispose: J
		};
	}
	registerServer(_, K) {
		let { counterpart: q, dispose: J } = this.getInterface(_, this.server, this.client, K);
		return {
			client: q,
			dispose: J
		};
	}
	withContext() {
		return new _(this.tags, this.server, this.client);
	}
}, FoldingRangeKind = /* @__PURE__ */ (function(_) {
	return _.Comment = "comment", _.Imports = "imports", _.Region = "region", _;
})({}), SymbolKind = /* @__PURE__ */ (function(_) {
	return _[_.File = 1] = "File", _[_.Module = 2] = "Module", _[_.Namespace = 3] = "Namespace", _[_.Package = 4] = "Package", _[_.Class = 5] = "Class", _[_.Method = 6] = "Method", _[_.Property = 7] = "Property", _[_.Field = 8] = "Field", _[_.Constructor = 9] = "Constructor", _[_.Enum = 10] = "Enum", _[_.Interface = 11] = "Interface", _[_.Function = 12] = "Function", _[_.Variable = 13] = "Variable", _[_.Constant = 14] = "Constant", _[_.String = 15] = "String", _[_.Number = 16] = "Number", _[_.Boolean = 17] = "Boolean", _[_.Array = 18] = "Array", _[_.Object = 19] = "Object", _[_.Key = 20] = "Key", _[_.Null = 21] = "Null", _[_.EnumMember = 22] = "EnumMember", _[_.Struct = 23] = "Struct", _[_.Event = 24] = "Event", _[_.Operator = 25] = "Operator", _[_.TypeParameter = 26] = "TypeParameter", _;
})({}), SymbolTag = /* @__PURE__ */ (function(_) {
	return _[_.Deprecated = 1] = "Deprecated", _;
})({}), InlayHintKind = /* @__PURE__ */ (function(_) {
	return _[_.Type = 1] = "Type", _[_.Parameter = 2] = "Parameter", _;
})({}), TextDocumentSyncKind = /* @__PURE__ */ (function(_) {
	return _[_.None = 0] = "None", _[_.Full = 1] = "Full", _[_.Incremental = 2] = "Incremental", _;
})({}), CompletionItemKind = /* @__PURE__ */ (function(_) {
	return _[_.Text = 1] = "Text", _[_.Method = 2] = "Method", _[_.Function = 3] = "Function", _[_.Constructor = 4] = "Constructor", _[_.Field = 5] = "Field", _[_.Variable = 6] = "Variable", _[_.Class = 7] = "Class", _[_.Interface = 8] = "Interface", _[_.Module = 9] = "Module", _[_.Property = 10] = "Property", _[_.Unit = 11] = "Unit", _[_.Value = 12] = "Value", _[_.Enum = 13] = "Enum", _[_.Keyword = 14] = "Keyword", _[_.Snippet = 15] = "Snippet", _[_.Color = 16] = "Color", _[_.File = 17] = "File", _[_.Reference = 18] = "Reference", _[_.Folder = 19] = "Folder", _[_.EnumMember = 20] = "EnumMember", _[_.Constant = 21] = "Constant", _[_.Struct = 22] = "Struct", _[_.Event = 23] = "Event", _[_.Operator = 24] = "Operator", _[_.TypeParameter = 25] = "TypeParameter", _;
})({}), CompletionItemTag = /* @__PURE__ */ (function(_) {
	return _[_.Deprecated = 1] = "Deprecated", _;
})({}), InsertTextFormat = /* @__PURE__ */ (function(_) {
	return _[_.PlainText = 1] = "PlainText", _[_.Snippet = 2] = "Snippet", _;
})({}), DocumentHighlightKind = /* @__PURE__ */ (function(_) {
	return _[_.Text = 1] = "Text", _[_.Read = 2] = "Read", _[_.Write = 3] = "Write", _;
})({}), CodeActionKind = /* @__PURE__ */ (function(_) {
	return _.Empty = "", _.QuickFix = "quickfix", _.Refactor = "refactor", _.RefactorExtract = "refactor.extract", _.RefactorInline = "refactor.inline", _.RefactorRewrite = "refactor.rewrite", _.Source = "source", _.SourceOrganizeImports = "source.organizeImports", _.SourceFixAll = "source.fixAll", _;
})({}), MarkupKind = /* @__PURE__ */ (function(_) {
	return _.PlainText = "plaintext", _.Markdown = "markdown", _;
})({}), DiagnosticSeverity = /* @__PURE__ */ (function(_) {
	return _[_.Error = 1] = "Error", _[_.Warning = 2] = "Warning", _[_.Information = 3] = "Information", _[_.Hint = 4] = "Hint", _;
})({}), DiagnosticTag = /* @__PURE__ */ (function(_) {
	return _[_.Unnecessary = 1] = "Unnecessary", _[_.Deprecated = 2] = "Deprecated", _;
})({}), CompletionTriggerKind = /* @__PURE__ */ (function(_) {
	return _[_.Invoked = 1] = "Invoked", _[_.TriggerCharacter = 2] = "TriggerCharacter", _[_.TriggerForIncompleteCompletions = 3] = "TriggerForIncompleteCompletions", _;
})({}), SignatureHelpTriggerKind = /* @__PURE__ */ (function(_) {
	return _[_.Invoked = 1] = "Invoked", _[_.TriggerCharacter = 2] = "TriggerCharacter", _[_.ContentChange = 3] = "ContentChange", _;
})({}), CodeActionTriggerKind = /* @__PURE__ */ (function(_) {
	return _[_.Invoked = 1] = "Invoked", _[_.Automatic = 2] = "Automatic", _;
})({}), TokenFormat = /* @__PURE__ */ (function(_) {
	return _.Relative = "relative", _;
})({}), Capability = class {
	constructor(_) {
		this.method = _;
	}
}, capabilities = {
	textDocumentImplementation: new Capability("textDocument/implementation"),
	textDocumentTypeDefinition: new Capability("textDocument/typeDefinition"),
	textDocumentDocumentColor: new Capability("textDocument/documentColor"),
	textDocumentColorPresentation: new Capability("textDocument/colorPresentation"),
	textDocumentFoldingRange: new Capability("textDocument/foldingRange"),
	textDocumentDeclaration: new Capability("textDocument/declaration"),
	textDocumentSelectionRange: new Capability("textDocument/selectionRange"),
	textDocumentPrepareCallHierarchy: new Capability("textDocument/prepareCallHierarchy"),
	textDocumentSemanticTokensFull: new Capability("textDocument/semanticTokens/full"),
	textDocumentSemanticTokensFullDelta: new Capability("textDocument/semanticTokens/full/delta"),
	textDocumentLinkedEditingRange: new Capability("textDocument/linkedEditingRange"),
	workspaceWillCreateFiles: new Capability("workspace/willCreateFiles"),
	workspaceWillRenameFiles: new Capability("workspace/willRenameFiles"),
	workspaceWillDeleteFiles: new Capability("workspace/willDeleteFiles"),
	textDocumentMoniker: new Capability("textDocument/moniker"),
	textDocumentPrepareTypeHierarchy: new Capability("textDocument/prepareTypeHierarchy"),
	textDocumentInlineValue: new Capability("textDocument/inlineValue"),
	textDocumentInlayHint: new Capability("textDocument/inlayHint"),
	textDocumentDiagnostic: new Capability("textDocument/diagnostic"),
	textDocumentInlineCompletion: new Capability("textDocument/inlineCompletion"),
	textDocumentWillSaveWaitUntil: new Capability("textDocument/willSaveWaitUntil"),
	textDocumentCompletion: new Capability("textDocument/completion"),
	textDocumentHover: new Capability("textDocument/hover"),
	textDocumentSignatureHelp: new Capability("textDocument/signatureHelp"),
	textDocumentDefinition: new Capability("textDocument/definition"),
	textDocumentReferences: new Capability("textDocument/references"),
	textDocumentDocumentHighlight: new Capability("textDocument/documentHighlight"),
	textDocumentDocumentSymbol: new Capability("textDocument/documentSymbol"),
	textDocumentCodeAction: new Capability("textDocument/codeAction"),
	workspaceSymbol: new Capability("workspace/symbol"),
	textDocumentCodeLens: new Capability("textDocument/codeLens"),
	textDocumentDocumentLink: new Capability("textDocument/documentLink"),
	textDocumentFormatting: new Capability("textDocument/formatting"),
	textDocumentRangeFormatting: new Capability("textDocument/rangeFormatting"),
	textDocumentRangesFormatting: new Capability("textDocument/rangesFormatting"),
	textDocumentOnTypeFormatting: new Capability("textDocument/onTypeFormatting"),
	textDocumentRename: new Capability("textDocument/rename"),
	workspaceExecuteCommand: new Capability("workspace/executeCommand"),
	workspaceDidCreateFiles: new Capability("workspace/didCreateFiles"),
	workspaceDidRenameFiles: new Capability("workspace/didRenameFiles"),
	workspaceDidDeleteFiles: new Capability("workspace/didDeleteFiles"),
	workspaceDidChangeConfiguration: new Capability("workspace/didChangeConfiguration"),
	textDocumentDidOpen: new Capability("textDocument/didOpen"),
	textDocumentDidChange: new Capability("textDocument/didChange"),
	textDocumentDidClose: new Capability("textDocument/didClose"),
	textDocumentDidSave: new Capability("textDocument/didSave"),
	textDocumentWillSave: new Capability("textDocument/willSave"),
	workspaceDidChangeWatchedFiles: new Capability("workspace/didChangeWatchedFiles")
}, api = contract({
	server: {
		textDocumentImplementation: unverifiedRequest({ method: "textDocument/implementation" }),
		textDocumentTypeDefinition: unverifiedRequest({ method: "textDocument/typeDefinition" }),
		textDocumentDocumentColor: unverifiedRequest({ method: "textDocument/documentColor" }),
		textDocumentColorPresentation: unverifiedRequest({ method: "textDocument/colorPresentation" }),
		textDocumentFoldingRange: unverifiedRequest({ method: "textDocument/foldingRange" }),
		textDocumentDeclaration: unverifiedRequest({ method: "textDocument/declaration" }),
		textDocumentSelectionRange: unverifiedRequest({ method: "textDocument/selectionRange" }),
		textDocumentPrepareCallHierarchy: unverifiedRequest({ method: "textDocument/prepareCallHierarchy" }),
		callHierarchyIncomingCalls: unverifiedRequest({ method: "callHierarchy/incomingCalls" }),
		callHierarchyOutgoingCalls: unverifiedRequest({ method: "callHierarchy/outgoingCalls" }),
		textDocumentSemanticTokensFull: unverifiedRequest({ method: "textDocument/semanticTokens/full" }),
		textDocumentSemanticTokensFullDelta: unverifiedRequest({ method: "textDocument/semanticTokens/full/delta" }),
		textDocumentSemanticTokensRange: unverifiedRequest({ method: "textDocument/semanticTokens/range" }),
		textDocumentLinkedEditingRange: unverifiedRequest({ method: "textDocument/linkedEditingRange" }),
		workspaceWillCreateFiles: unverifiedRequest({ method: "workspace/willCreateFiles" }),
		workspaceWillRenameFiles: unverifiedRequest({ method: "workspace/willRenameFiles" }),
		workspaceWillDeleteFiles: unverifiedRequest({ method: "workspace/willDeleteFiles" }),
		textDocumentMoniker: unverifiedRequest({ method: "textDocument/moniker" }),
		textDocumentPrepareTypeHierarchy: unverifiedRequest({ method: "textDocument/prepareTypeHierarchy" }),
		typeHierarchySupertypes: unverifiedRequest({ method: "typeHierarchy/supertypes" }),
		typeHierarchySubtypes: unverifiedRequest({ method: "typeHierarchy/subtypes" }),
		textDocumentInlineValue: unverifiedRequest({ method: "textDocument/inlineValue" }),
		textDocumentInlayHint: unverifiedRequest({ method: "textDocument/inlayHint" }),
		inlayHintResolve: unverifiedRequest({ method: "inlayHint/resolve" }),
		textDocumentDiagnostic: unverifiedRequest({ method: "textDocument/diagnostic" }),
		workspaceDiagnostic: unverifiedRequest({ method: "workspace/diagnostic" }),
		textDocumentInlineCompletion: unverifiedRequest({ method: "textDocument/inlineCompletion" }),
		initialize: unverifiedRequest({ method: "initialize" }),
		shutdown: unverifiedRequest({ method: "shutdown" }),
		textDocumentWillSaveWaitUntil: unverifiedRequest({ method: "textDocument/willSaveWaitUntil" }),
		textDocumentCompletion: unverifiedRequest({ method: "textDocument/completion" }),
		completionItemResolve: unverifiedRequest({ method: "completionItem/resolve" }),
		textDocumentHover: unverifiedRequest({ method: "textDocument/hover" }),
		textDocumentSignatureHelp: unverifiedRequest({ method: "textDocument/signatureHelp" }),
		textDocumentDefinition: unverifiedRequest({ method: "textDocument/definition" }),
		textDocumentReferences: unverifiedRequest({ method: "textDocument/references" }),
		textDocumentDocumentHighlight: unverifiedRequest({ method: "textDocument/documentHighlight" }),
		textDocumentDocumentSymbol: unverifiedRequest({ method: "textDocument/documentSymbol" }),
		textDocumentCodeAction: unverifiedRequest({ method: "textDocument/codeAction" }),
		codeActionResolve: unverifiedRequest({ method: "codeAction/resolve" }),
		workspaceSymbol: unverifiedRequest({ method: "workspace/symbol" }),
		workspaceSymbolResolve: unverifiedRequest({ method: "workspaceSymbol/resolve" }),
		textDocumentCodeLens: unverifiedRequest({ method: "textDocument/codeLens" }),
		codeLensResolve: unverifiedRequest({ method: "codeLens/resolve" }),
		textDocumentDocumentLink: unverifiedRequest({ method: "textDocument/documentLink" }),
		documentLinkResolve: unverifiedRequest({ method: "documentLink/resolve" }),
		textDocumentFormatting: unverifiedRequest({ method: "textDocument/formatting" }),
		textDocumentRangeFormatting: unverifiedRequest({ method: "textDocument/rangeFormatting" }),
		textDocumentRangesFormatting: unverifiedRequest({ method: "textDocument/rangesFormatting" }),
		textDocumentOnTypeFormatting: unverifiedRequest({ method: "textDocument/onTypeFormatting" }),
		textDocumentRename: unverifiedRequest({ method: "textDocument/rename" }),
		textDocumentPrepareRename: unverifiedRequest({ method: "textDocument/prepareRename" }),
		workspaceExecuteCommand: unverifiedRequest({ method: "workspace/executeCommand" }),
		workspaceDidChangeWorkspaceFolders: unverifiedNotification({ method: "workspace/didChangeWorkspaceFolders" }),
		windowWorkDoneProgressCancel: unverifiedNotification({ method: "window/workDoneProgress/cancel" }),
		workspaceDidCreateFiles: unverifiedNotification({ method: "workspace/didCreateFiles" }),
		workspaceDidRenameFiles: unverifiedNotification({ method: "workspace/didRenameFiles" }),
		workspaceDidDeleteFiles: unverifiedNotification({ method: "workspace/didDeleteFiles" }),
		notebookDocumentDidOpen: unverifiedNotification({ method: "notebookDocument/didOpen" }),
		notebookDocumentDidChange: unverifiedNotification({ method: "notebookDocument/didChange" }),
		notebookDocumentDidSave: unverifiedNotification({ method: "notebookDocument/didSave" }),
		notebookDocumentDidClose: unverifiedNotification({ method: "notebookDocument/didClose" }),
		initialized: unverifiedNotification({ method: "initialized" }),
		exit: unverifiedNotification({ method: "exit" }),
		workspaceDidChangeConfiguration: unverifiedNotification({ method: "workspace/didChangeConfiguration" }),
		textDocumentDidOpen: unverifiedNotification({ method: "textDocument/didOpen" }),
		textDocumentDidChange: unverifiedNotification({ method: "textDocument/didChange" }),
		textDocumentDidClose: unverifiedNotification({ method: "textDocument/didClose" }),
		textDocumentDidSave: unverifiedNotification({ method: "textDocument/didSave" }),
		textDocumentWillSave: unverifiedNotification({ method: "textDocument/willSave" }),
		workspaceDidChangeWatchedFiles: unverifiedNotification({ method: "workspace/didChangeWatchedFiles" }),
		setTrace: unverifiedNotification({ method: "$/setTrace" }),
		cancelRequest: unverifiedNotification({ method: "$/cancelRequest" }),
		progress: unverifiedNotification({ method: "$/progress" })
	},
	client: {
		workspaceWorkspaceFolders: unverifiedRequest({ method: "workspace/workspaceFolders" }).optional(),
		workspaceConfiguration: unverifiedRequest({ method: "workspace/configuration" }).optional(),
		workspaceFoldingRangeRefresh: unverifiedRequest({ method: "workspace/foldingRange/refresh" }).optional(),
		windowWorkDoneProgressCreate: unverifiedRequest({ method: "window/workDoneProgress/create" }).optional(),
		workspaceSemanticTokensRefresh: unverifiedRequest({ method: "workspace/semanticTokens/refresh" }).optional(),
		windowShowDocument: unverifiedRequest({ method: "window/showDocument" }).optional(),
		workspaceInlineValueRefresh: unverifiedRequest({ method: "workspace/inlineValue/refresh" }).optional(),
		workspaceInlayHintRefresh: unverifiedRequest({ method: "workspace/inlayHint/refresh" }).optional(),
		workspaceDiagnosticRefresh: unverifiedRequest({ method: "workspace/diagnostic/refresh" }).optional(),
		clientRegisterCapability: unverifiedRequest({ method: "client/registerCapability" }).optional(),
		clientUnregisterCapability: unverifiedRequest({ method: "client/unregisterCapability" }).optional(),
		windowShowMessageRequest: unverifiedRequest({ method: "window/showMessageRequest" }).optional(),
		workspaceCodeLensRefresh: unverifiedRequest({ method: "workspace/codeLens/refresh" }).optional(),
		workspaceApplyEdit: unverifiedRequest({ method: "workspace/applyEdit" }).optional(),
		windowShowMessage: unverifiedNotification({ method: "window/showMessage" }),
		windowLogMessage: unverifiedNotification({ method: "window/logMessage" }),
		telemetryEvent: unverifiedNotification({ method: "telemetry/event" }),
		textDocumentPublishDiagnostics: unverifiedNotification({ method: "textDocument/publishDiagnostics" }),
		logTrace: unverifiedNotification({ method: "$/logTrace" }),
		cancelRequest: unverifiedNotification({ method: "$/cancelRequest" }),
		progress: unverifiedNotification({ method: "$/progress" })
	}
});
function assertTargetTextModel(_, K) {
	if (_.textModel !== K) throw Error(`Expected text model to be ${K}, but got ${_.textModel}`);
	return _;
}
var Disposable = (_d = class {
	constructor() {
		__publicField(this, "_store", new DisposableStore());
	}
	dispose() {
		this._store.dispose();
	}
	_register(_) {
		if (_ === this) throw Error("Cannot register a disposable on itself!");
		return this._store.add(_);
	}
}, __publicField(_d, "None", Object.freeze({ dispose() {} })), _d), DisposableStore = (_e = class {
	constructor() {
		__publicField(this, "_toDispose", /* @__PURE__ */ new Set()), __publicField(this, "_isDisposed", !1);
	}
	dispose() {
		this._isDisposed || (this._isDisposed = !0, this.clear());
	}
	clear() {
		if (this._toDispose.size !== 0) try {
			for (let _ of this._toDispose) _.dispose();
		} finally {
			this._toDispose.clear();
		}
	}
	add(_) {
		if (!_) return _;
		if (_ === this) throw Error("Cannot register a disposable on itself!");
		return this._isDisposed ? _e.DISABLE_DISPOSED_WARNING || console.warn((/* @__PURE__ */ Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!")).stack) : this._toDispose.add(_), _;
	}
}, __publicField(_e, "DISABLE_DISPOSED_WARNING", !1), _e), lspCodeActionKindToMonacoCodeActionKind = /* @__PURE__ */ new Map([
	[CodeActionKind.Empty, ""],
	[CodeActionKind.QuickFix, "quickfix"],
	[CodeActionKind.Refactor, "refactor"],
	[CodeActionKind.RefactorExtract, "refactor.extract"],
	[CodeActionKind.RefactorInline, "refactor.inline"],
	[CodeActionKind.RefactorRewrite, "refactor.rewrite"],
	[CodeActionKind.Source, "source"],
	[CodeActionKind.SourceOrganizeImports, "source.organizeImports"],
	[CodeActionKind.SourceFixAll, "source.fixAll"]
]);
function toMonacoCodeActionKind(_) {
	if (_) return lspCodeActionKindToMonacoCodeActionKind.get(_) ?? _;
}
var monacoCodeActionTriggerTypeToLspCodeActionTriggerKind = /* @__PURE__ */ new Map([[languages.CodeActionTriggerType.Invoke, CodeActionTriggerKind.Invoked], [languages.CodeActionTriggerType.Auto, CodeActionTriggerKind.Automatic]]);
function toLspCodeActionTriggerKind(_) {
	return monacoCodeActionTriggerTypeToLspCodeActionTriggerKind.get(_) ?? CodeActionTriggerKind.Invoked;
}
var lspCompletionItemKindToMonacoCompletionItemKind = /* @__PURE__ */ new Map([
	[CompletionItemKind.Text, languages.CompletionItemKind.Text],
	[CompletionItemKind.Method, languages.CompletionItemKind.Method],
	[CompletionItemKind.Function, languages.CompletionItemKind.Function],
	[CompletionItemKind.Constructor, languages.CompletionItemKind.Constructor],
	[CompletionItemKind.Field, languages.CompletionItemKind.Field],
	[CompletionItemKind.Variable, languages.CompletionItemKind.Variable],
	[CompletionItemKind.Class, languages.CompletionItemKind.Class],
	[CompletionItemKind.Interface, languages.CompletionItemKind.Interface],
	[CompletionItemKind.Module, languages.CompletionItemKind.Module],
	[CompletionItemKind.Property, languages.CompletionItemKind.Property],
	[CompletionItemKind.Unit, languages.CompletionItemKind.Unit],
	[CompletionItemKind.Value, languages.CompletionItemKind.Value],
	[CompletionItemKind.Enum, languages.CompletionItemKind.Enum],
	[CompletionItemKind.Keyword, languages.CompletionItemKind.Keyword],
	[CompletionItemKind.Snippet, languages.CompletionItemKind.Snippet],
	[CompletionItemKind.Color, languages.CompletionItemKind.Color],
	[CompletionItemKind.File, languages.CompletionItemKind.File],
	[CompletionItemKind.Reference, languages.CompletionItemKind.Reference],
	[CompletionItemKind.Folder, languages.CompletionItemKind.Folder],
	[CompletionItemKind.EnumMember, languages.CompletionItemKind.EnumMember],
	[CompletionItemKind.Constant, languages.CompletionItemKind.Constant],
	[CompletionItemKind.Struct, languages.CompletionItemKind.Struct],
	[CompletionItemKind.Event, languages.CompletionItemKind.Event],
	[CompletionItemKind.Operator, languages.CompletionItemKind.Operator],
	[CompletionItemKind.TypeParameter, languages.CompletionItemKind.TypeParameter]
]);
function toMonacoCompletionItemKind(_) {
	return _ ? lspCompletionItemKindToMonacoCompletionItemKind.get(_) ?? languages.CompletionItemKind.Text : languages.CompletionItemKind.Text;
}
var lspCompletionItemTagToMonacoCompletionItemTag = /* @__PURE__ */ new Map([[CompletionItemTag.Deprecated, languages.CompletionItemTag.Deprecated]]);
function toMonacoCompletionItemTag(_) {
	return lspCompletionItemTagToMonacoCompletionItemTag.get(_);
}
var monacoCompletionTriggerKindToLspCompletionTriggerKind = /* @__PURE__ */ new Map([
	[languages.CompletionTriggerKind.Invoke, CompletionTriggerKind.Invoked],
	[languages.CompletionTriggerKind.TriggerCharacter, CompletionTriggerKind.TriggerCharacter],
	[languages.CompletionTriggerKind.TriggerForIncompleteCompletions, CompletionTriggerKind.TriggerForIncompleteCompletions]
]);
function toLspCompletionTriggerKind(_) {
	return monacoCompletionTriggerKindToLspCompletionTriggerKind.get(_) ?? CompletionTriggerKind.Invoked;
}
var lspInsertTextFormatToMonacoInsertTextRules = /* @__PURE__ */ new Map([[InsertTextFormat.Snippet, languages.CompletionItemInsertTextRule.InsertAsSnippet]]);
function toMonacoInsertTextRules(_) {
	if (_) return lspInsertTextFormatToMonacoInsertTextRules.get(_);
}
var lspSymbolKindToMonacoSymbolKind = /* @__PURE__ */ new Map([
	[SymbolKind.File, languages.SymbolKind.File],
	[SymbolKind.Module, languages.SymbolKind.Module],
	[SymbolKind.Namespace, languages.SymbolKind.Namespace],
	[SymbolKind.Package, languages.SymbolKind.Package],
	[SymbolKind.Class, languages.SymbolKind.Class],
	[SymbolKind.Method, languages.SymbolKind.Method],
	[SymbolKind.Property, languages.SymbolKind.Property],
	[SymbolKind.Field, languages.SymbolKind.Field],
	[SymbolKind.Constructor, languages.SymbolKind.Constructor],
	[SymbolKind.Enum, languages.SymbolKind.Enum],
	[SymbolKind.Interface, languages.SymbolKind.Interface],
	[SymbolKind.Function, languages.SymbolKind.Function],
	[SymbolKind.Variable, languages.SymbolKind.Variable],
	[SymbolKind.Constant, languages.SymbolKind.Constant],
	[SymbolKind.String, languages.SymbolKind.String],
	[SymbolKind.Number, languages.SymbolKind.Number],
	[SymbolKind.Boolean, languages.SymbolKind.Boolean],
	[SymbolKind.Array, languages.SymbolKind.Array],
	[SymbolKind.Object, languages.SymbolKind.Object],
	[SymbolKind.Key, languages.SymbolKind.Key],
	[SymbolKind.Null, languages.SymbolKind.Null],
	[SymbolKind.EnumMember, languages.SymbolKind.EnumMember],
	[SymbolKind.Struct, languages.SymbolKind.Struct],
	[SymbolKind.Event, languages.SymbolKind.Event],
	[SymbolKind.Operator, languages.SymbolKind.Operator],
	[SymbolKind.TypeParameter, languages.SymbolKind.TypeParameter]
]);
function toMonacoSymbolKind(_) {
	return lspSymbolKindToMonacoSymbolKind.get(_) ?? languages.SymbolKind.File;
}
var lspSymbolTagToMonacoSymbolTag = /* @__PURE__ */ new Map([[SymbolTag.Deprecated, languages.SymbolTag.Deprecated]]);
function toMonacoSymbolTag(_) {
	return lspSymbolTagToMonacoSymbolTag.get(_);
}
var lspDocumentHighlightKindToMonacoDocumentHighlightKind = /* @__PURE__ */ new Map([
	[DocumentHighlightKind.Text, languages.DocumentHighlightKind.Text],
	[DocumentHighlightKind.Read, languages.DocumentHighlightKind.Read],
	[DocumentHighlightKind.Write, languages.DocumentHighlightKind.Write]
]);
function toMonacoDocumentHighlightKind(_) {
	return _ ? lspDocumentHighlightKindToMonacoDocumentHighlightKind.get(_) ?? languages.DocumentHighlightKind.Text : languages.DocumentHighlightKind.Text;
}
var lspFoldingRangeKindToMonacoFoldingRangeKind = /* @__PURE__ */ new Map([
	[FoldingRangeKind.Comment, languages.FoldingRangeKind.Comment],
	[FoldingRangeKind.Imports, languages.FoldingRangeKind.Imports],
	[FoldingRangeKind.Region, languages.FoldingRangeKind.Region]
]);
function toMonacoFoldingRangeKind(_) {
	if (_) return lspFoldingRangeKindToMonacoFoldingRangeKind.get(_);
}
var monacoMarkerSeverityToLspDiagnosticSeverity = /* @__PURE__ */ new Map([
	[MarkerSeverity.Error, DiagnosticSeverity.Error],
	[MarkerSeverity.Warning, DiagnosticSeverity.Warning],
	[MarkerSeverity.Info, DiagnosticSeverity.Information],
	[MarkerSeverity.Hint, DiagnosticSeverity.Hint]
]);
function toLspDiagnosticSeverity(_) {
	return monacoMarkerSeverityToLspDiagnosticSeverity.get(_) ?? DiagnosticSeverity.Error;
}
var lspDiagnosticSeverityToMonacoMarkerSeverity = /* @__PURE__ */ new Map([
	[DiagnosticSeverity.Error, MarkerSeverity.Error],
	[DiagnosticSeverity.Warning, MarkerSeverity.Warning],
	[DiagnosticSeverity.Information, MarkerSeverity.Info],
	[DiagnosticSeverity.Hint, MarkerSeverity.Hint]
]);
function toMonacoDiagnosticSeverity(_) {
	return _ ? lspDiagnosticSeverityToMonacoMarkerSeverity.get(_) ?? MarkerSeverity.Error : MarkerSeverity.Error;
}
var lspDiagnosticTagToMonacoMarkerTag = /* @__PURE__ */ new Map([[DiagnosticTag.Unnecessary, MarkerTag.Unnecessary], [DiagnosticTag.Deprecated, MarkerTag.Deprecated]]);
function toMonacoDiagnosticTag(_) {
	return lspDiagnosticTagToMonacoMarkerTag.get(_);
}
var monacoSignatureHelpTriggerKindToLspSignatureHelpTriggerKind = /* @__PURE__ */ new Map([
	[languages.SignatureHelpTriggerKind.Invoke, SignatureHelpTriggerKind.Invoked],
	[languages.SignatureHelpTriggerKind.TriggerCharacter, SignatureHelpTriggerKind.TriggerCharacter],
	[languages.SignatureHelpTriggerKind.ContentChange, SignatureHelpTriggerKind.ContentChange]
]);
function toLspSignatureHelpTriggerKind(_) {
	return monacoSignatureHelpTriggerKindToLspSignatureHelpTriggerKind.get(_) ?? SignatureHelpTriggerKind.Invoked;
}
function toMonacoCommand(_) {
	if (_) return {
		id: _.command,
		title: _.title,
		arguments: _.arguments
	};
}
var lspInlayHintKindToMonacoInlayHintKind = /* @__PURE__ */ new Map([[InlayHintKind.Type, languages.InlayHintKind.Type], [InlayHintKind.Parameter, languages.InlayHintKind.Parameter]]);
function toMonacoInlayHintKind(_) {
	return _ ? lspInlayHintKindToMonacoInlayHintKind.get(_) ?? languages.InlayHintKind.Type : languages.InlayHintKind.Type;
}
function toMonacoLocation(_, K) {
	if ("targetUri" in _) {
		let q = K.bridge.translateBackRange({ uri: _.targetUri }, _.targetRange);
		return {
			uri: q.textModel.uri,
			range: q.range,
			originSelectionRange: _.originSelectionRange ? K.bridge.translateBackRange({ uri: _.targetUri }, _.originSelectionRange).range : void 0,
			targetSelectionRange: _.targetSelectionRange ? K.bridge.translateBackRange({ uri: _.targetUri }, _.targetSelectionRange).range : void 0
		};
	} else {
		let q = K.bridge.translateBackRange({ uri: _.uri }, _.range);
		return {
			uri: q.textModel.uri,
			range: q.range
		};
	}
}
function toMonacoLanguageSelector(_) {
	return !_ || _.length === 0 ? { language: "*" } : _.map((_) => "notebook" in _ ? typeof _.notebook == "string" ? {
		notebookType: _.notebook,
		language: _.language
	} : {
		notebookType: _.notebook.notebookType,
		language: _.language,
		pattern: _.notebook.pattern,
		scheme: _.notebook.scheme
	} : {
		language: _.language,
		pattern: _.pattern,
		scheme: _.scheme
	});
}
function matchesDocumentSelector(_, K) {
	if (!K) return !0;
	let q = _.getLanguageId();
	if (_.uri.toString(!0), !K || K.length === 0) return !0;
	for (let _ of K) if (!(_.language && _.language !== "*" && _.language !== q)) return !0;
	return !1;
}
function toDiagnosticMarker(_) {
	let K = {
		severity: toMonacoDiagnosticSeverity(_.severity),
		startLineNumber: _.range.start.line + 1,
		startColumn: _.range.start.character + 1,
		endLineNumber: _.range.end.line + 1,
		endColumn: _.range.end.character + 1,
		message: _.message,
		source: _.source,
		code: typeof _.code == "string" ? _.code : _.code?.toString()
	};
	return _.tags && (K.tags = _.tags.map((_) => toMonacoDiagnosticTag(_)).filter((_) => _ !== void 0)), _.relatedInformation && (K.relatedInformation = _.relatedInformation.map((_) => ({
		resource: Uri.parse(_.location.uri),
		startLineNumber: _.location.range.start.line + 1,
		startColumn: _.location.range.start.character + 1,
		endLineNumber: _.location.range.end.line + 1,
		endColumn: _.location.range.end.character + 1,
		message: _.message
	}))), K;
}
var LspCompletionFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { completion: {
			dynamicRegistration: !0,
			contextSupport: !0,
			completionItemKind: { valueSet: Array.from(lspCompletionItemKindToMonacoCompletionItemKind.keys()) },
			completionItem: {
				tagSupport: { valueSet: Array.from(lspCompletionItemTagToMonacoCompletionItemTag.keys()) },
				commitCharactersSupport: !0,
				deprecatedSupport: !0,
				preselectSupport: !0
			}
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentCompletion, !0, (_) => languages.registerCompletionItemProvider(toMonacoLanguageSelector(_.documentSelector), new LspCompletionProvider(this._connection, _))));
	}
}, LspCompletionProvider = class {
	constructor(_, K) {
		__publicField(this, "resolveCompletionItem"), this._client = _, this._capabilities = K, K.resolveProvider && (this.resolveCompletionItem = async (_, K) => (applyLspCompletionItemProperties(_, await this._client.server.completionItemResolve(_._lspItem), this._client.bridge, _._translated, _._model), _));
	}
	get triggerCharacters() {
		return this._capabilities.triggerCharacters;
	}
	async provideCompletionItems(_, K, q, J) {
		let Y = this._client.bridge.translate(_, K), X = await this._client.server.textDocumentCompletion({
			textDocument: Y.textDocument,
			position: Y.position,
			context: q.triggerCharacter ? {
				triggerKind: toLspCompletionTriggerKind(q.triggerKind),
				triggerCharacter: q.triggerCharacter
			} : void 0
		});
		return X ? { suggestions: (Array.isArray(X) ? X : X.items).map((q) => ({
			...convertLspToMonacoCompletionItem(q, this._client.bridge, Y, _, K),
			_lspItem: q,
			_translated: Y,
			_model: _
		})) } : { suggestions: [] };
	}
};
function convertLspToMonacoCompletionItem(_, K, J, Y, X) {
	let Z = _.insertText || _.label, Q;
	_.textEdit && ("range" in _.textEdit ? (Z = _.textEdit.newText, Q = assertTargetTextModel(K.translateBackRange(J.textDocument, _.textEdit.range), Y).range) : (Z = _.textEdit.newText, Q = {
		insert: assertTargetTextModel(K.translateBackRange(J.textDocument, _.textEdit.insert), Y).range,
		replace: assertTargetTextModel(K.translateBackRange(J.textDocument, _.textEdit.replace), Y).range
	})), Q ||= Range.fromPositions(X, X);
	let $ = {
		label: _.label,
		kind: toMonacoCompletionItemKind(_.kind),
		insertText: Z,
		sortText: _.sortText,
		filterText: _.filterText,
		preselect: _.preselect,
		commitCharacters: _.commitCharacters,
		range: Q
	};
	return applyLspCompletionItemProperties($, _, K, J, Y), $;
}
function applyLspCompletionItemProperties(_, K, q, J, Y) {
	K.detail !== void 0 && (_.detail = K.detail), K.documentation !== void 0 && (_.documentation = toMonacoDocumentation$1(K.documentation)), K.insertTextFormat !== void 0 && (_.insertTextRules = toMonacoInsertTextRules(K.insertTextFormat)), K.tags && K.tags.length > 0 && (_.tags = K.tags.map(toMonacoCompletionItemTag).filter((_) => _ !== void 0)), K.additionalTextEdits && K.additionalTextEdits.length > 0 && (_.additionalTextEdits = K.additionalTextEdits.map((_) => ({
		range: assertTargetTextModel(q.translateBackRange(J.textDocument, _.range), Y).range,
		text: _.newText
	}))), K.command && (_.command = toMonacoCommand(K.command));
}
function toMonacoDocumentation$1(_) {
	if (_) return typeof _ == "string" ? _ : {
		value: _.value,
		isTrusted: !0
	};
}
var LspHoverFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { hover: {
			dynamicRegistration: !0,
			contentFormat: [MarkupKind.Markdown, MarkupKind.PlainText]
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentHover, !0, (_) => languages.registerHoverProvider(toMonacoLanguageSelector(_.documentSelector), new LspHoverProvider(this._connection, _))));
	}
}, LspHoverProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideHover(_, K, q) {
		let J = this._client.bridge.translate(_, K), Y = await this._client.server.textDocumentHover({
			textDocument: J.textDocument,
			position: J.position
		});
		return !Y || !Y.contents ? null : {
			contents: toMonacoMarkdownString(Y.contents),
			range: Y.range ? this._client.bridge.translateBackRange(J.textDocument, Y.range).range : void 0
		};
	}
};
function toMonacoMarkdownString(_) {
	return Array.isArray(_) ? _.map((_) => toSingleMarkdownString(_)) : [toSingleMarkdownString(_)];
}
function toSingleMarkdownString(_) {
	return typeof _ == "string" ? {
		value: _,
		isTrusted: !0
	} : "kind" in _ ? {
		value: _.value,
		isTrusted: !0
	} : {
		value: `\`\`\`${_.language}
${_.value}
\`\`\``,
		isTrusted: !0
	};
}
var LspSignatureHelpFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { signatureHelp: {
			dynamicRegistration: !0,
			contextSupport: !0,
			signatureInformation: {
				documentationFormat: [MarkupKind.Markdown, MarkupKind.PlainText],
				parameterInformation: { labelOffsetSupport: !0 },
				activeParameterSupport: !0
			}
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentSignatureHelp, !0, (_) => languages.registerSignatureHelpProvider(toMonacoLanguageSelector(_.documentSelector), new LspSignatureHelpProvider(this._connection, _))));
	}
}, LspSignatureHelpProvider = class {
	constructor(_, K) {
		__publicField(this, "signatureHelpTriggerCharacters"), __publicField(this, "signatureHelpRetriggerCharacters"), this._client = _, this._capabilities = K, this.signatureHelpTriggerCharacters = K.triggerCharacters, this.signatureHelpRetriggerCharacters = K.retriggerCharacters;
	}
	async provideSignatureHelp(_, K, q, J) {
		let Y = this._client.bridge.translate(_, K), X = await this._client.server.textDocumentSignatureHelp({
			textDocument: Y.textDocument,
			position: Y.position,
			context: {
				triggerKind: toLspSignatureHelpTriggerKind(J.triggerKind),
				triggerCharacter: J.triggerCharacter,
				isRetrigger: J.isRetrigger
			}
		});
		return X ? {
			value: {
				signatures: X.signatures.map((_) => ({
					label: _.label,
					documentation: toMonacoDocumentation(_.documentation),
					parameters: _.parameters?.map((_) => ({
						label: _.label,
						documentation: toMonacoDocumentation(_.documentation)
					})) || [],
					activeParameter: _.activeParameter
				})),
				activeSignature: X.activeSignature || 0,
				activeParameter: X.activeParameter || 0
			},
			dispose: () => {}
		} : null;
	}
};
function toMonacoDocumentation(_) {
	if (_) return typeof _ == "string" ? _ : {
		value: _.value,
		isTrusted: !0
	};
}
var LspDefinitionFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { definition: {
			dynamicRegistration: !0,
			linkSupport: !0
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentDefinition, !0, (_) => languages.registerDefinitionProvider(toMonacoLanguageSelector(_.documentSelector), new LspDefinitionProvider(this._connection, _))));
	}
}, LspDefinitionProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideDefinition(_, K, q) {
		let J = this._client.bridge.translate(_, K), Y = await this._client.server.textDocumentDefinition({
			textDocument: J.textDocument,
			position: J.position
		});
		return Y ? Array.isArray(Y) ? Y.map((_) => toMonacoLocation(_, this._client)) : toMonacoLocation(Y, this._client) : null;
	}
}, LspDeclarationFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { declaration: {
			dynamicRegistration: !0,
			linkSupport: !0
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentDeclaration, !0, (_) => languages.registerDeclarationProvider(toMonacoLanguageSelector(_.documentSelector), new LspDeclarationProvider(this._connection, _))));
	}
}, LspDeclarationProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideDeclaration(_, K, q) {
		let J = this._client.bridge.translate(_, K), Y = await this._client.server.textDocumentDeclaration({
			textDocument: J.textDocument,
			position: J.position
		});
		return Y ? Array.isArray(Y) ? Y.map((_) => toMonacoLocation(_, this._client)) : toMonacoLocation(Y, this._client) : null;
	}
}, LspTypeDefinitionFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { typeDefinition: {
			dynamicRegistration: !0,
			linkSupport: !0
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentTypeDefinition, !0, (_) => languages.registerTypeDefinitionProvider(toMonacoLanguageSelector(_.documentSelector), new LspTypeDefinitionProvider(this._connection, _))));
	}
}, LspTypeDefinitionProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideTypeDefinition(_, K, q) {
		let J = this._client.bridge.translate(_, K), Y = await this._client.server.textDocumentTypeDefinition({
			textDocument: J.textDocument,
			position: J.position
		});
		return Y ? Array.isArray(Y) ? Y.map((_) => toMonacoLocation(_, this._client)) : toMonacoLocation(Y, this._client) : null;
	}
}, LspImplementationFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { implementation: {
			dynamicRegistration: !0,
			linkSupport: !0
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentImplementation, !0, (_) => languages.registerImplementationProvider(toMonacoLanguageSelector(_.documentSelector), new LspImplementationProvider(this._connection, _))));
	}
}, LspImplementationProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideImplementation(_, K, q) {
		let J = this._client.bridge.translate(_, K), Y = await this._client.server.textDocumentImplementation({
			textDocument: J.textDocument,
			position: J.position
		});
		return Y ? Array.isArray(Y) ? Y.map((_) => toMonacoLocation(_, this._client)) : toMonacoLocation(Y, this._client) : null;
	}
}, LspReferencesFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { references: { dynamicRegistration: !0 } } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentReferences, !0, (_) => languages.registerReferenceProvider(toMonacoLanguageSelector(_.documentSelector), new LspReferenceProvider(this._connection, _))));
	}
}, LspReferenceProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideReferences(_, K, q, J) {
		let Y = this._client.bridge.translate(_, K), X = await this._client.server.textDocumentReferences({
			textDocument: Y.textDocument,
			position: Y.position,
			context: { includeDeclaration: q.includeDeclaration }
		});
		return X ? X.map((_) => {
			let K = this._client.bridge.translateBackRange({ uri: _.uri }, _.range);
			return {
				uri: K.textModel.uri,
				range: K.range
			};
		}) : null;
	}
}, LspDocumentHighlightFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { documentHighlight: { dynamicRegistration: !0 } } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentDocumentHighlight, !0, (_) => languages.registerDocumentHighlightProvider(toMonacoLanguageSelector(_.documentSelector), new LspDocumentHighlightProvider(this._connection, _))));
	}
}, LspDocumentHighlightProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideDocumentHighlights(_, K, q) {
		let J = this._client.bridge.translate(_, K), Y = await this._client.server.textDocumentDocumentHighlight({
			textDocument: J.textDocument,
			position: J.position
		});
		return Y ? Y.map((_) => ({
			range: this._client.bridge.translateBackRange(J.textDocument, _.range).range,
			kind: toMonacoDocumentHighlightKind(_.kind)
		})) : null;
	}
}, LspDocumentSymbolFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { documentSymbol: {
			dynamicRegistration: !0,
			hierarchicalDocumentSymbolSupport: !0,
			symbolKind: { valueSet: Array.from(lspSymbolKindToMonacoSymbolKind.keys()) },
			tagSupport: { valueSet: [SymbolTag.Deprecated] }
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentDocumentSymbol, !0, (_) => languages.registerDocumentSymbolProvider(toMonacoLanguageSelector(_.documentSelector), new LspDocumentSymbolProvider(this._connection, _))));
	}
}, LspDocumentSymbolProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideDocumentSymbols(_, K) {
		let q = this._client.bridge.translate(_, new Position(1, 1)), J = await this._client.server.textDocumentDocumentSymbol({ textDocument: q.textDocument });
		return J ? Array.isArray(J) && J.length > 0 ? "location" in J[0] ? J.map((_) => toMonacoSymbolInformation(_, this._client)) : J.map((_) => toMonacoDocumentSymbol(_, this._client, q.textDocument)) : [] : null;
	}
};
function toMonacoDocumentSymbol(_, K, q) {
	return {
		name: _.name,
		detail: _.detail || "",
		kind: toMonacoSymbolKind(_.kind),
		tags: _.tags?.map((_) => toMonacoSymbolTag(_)).filter((_) => _ !== void 0) || [],
		range: K.bridge.translateBackRange(q, _.range).range,
		selectionRange: K.bridge.translateBackRange(q, _.selectionRange).range,
		children: _.children?.map((_) => toMonacoDocumentSymbol(_, K, q)) || []
	};
}
function toMonacoSymbolInformation(_, K) {
	return {
		name: _.name,
		detail: "",
		kind: toMonacoSymbolKind(_.kind),
		tags: _.tags?.map((_) => toMonacoSymbolTag(_)).filter((_) => _ !== void 0) || [],
		range: K.bridge.translateBackRange({ uri: _.location.uri }, _.location.range).range,
		selectionRange: K.bridge.translateBackRange({ uri: _.location.uri }, _.location.range).range,
		children: []
	};
}
var LspRenameFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { rename: {
			dynamicRegistration: !0,
			prepareSupport: !0
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentRename, !0, (_) => languages.registerRenameProvider(toMonacoLanguageSelector(_.documentSelector), new LspRenameProvider(this._connection, _))));
	}
}, LspRenameProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideRenameEdits(_, K, q, J) {
		let Y = this._client.bridge.translate(_, K), X = await this._client.server.textDocumentRename({
			textDocument: Y.textDocument,
			position: Y.position,
			newName: q
		});
		return X ? toMonacoWorkspaceEdit$1(X, this._client) : null;
	}
	async resolveRenameLocation(_, K, q) {
		if (!this._capabilities.prepareProvider) return null;
		let J = this._client.bridge.translate(_, K), Y = await this._client.server.textDocumentPrepareRename({
			textDocument: J.textDocument,
			position: J.position
		});
		if (!Y) return null;
		if ("range" in Y && "placeholder" in Y) return {
			range: this._client.bridge.translateBackRange(J.textDocument, Y.range).range,
			text: Y.placeholder
		};
		if ("defaultBehavior" in Y) return null;
		if ("start" in Y && "end" in Y) {
			let K = this._client.bridge.translateBackRange(J.textDocument, Y).range;
			return {
				range: K,
				text: _.getValueInRange(K)
			};
		}
		return null;
	}
};
function toMonacoWorkspaceEdit$1(_, K) {
	let q = [];
	if (_.changes) for (let J in _.changes) {
		let Y = _.changes[J];
		for (let _ of Y) {
			let Y = K.bridge.translateBackRange({ uri: J }, _.range);
			q.push({
				resource: Y.textModel.uri,
				versionId: void 0,
				textEdit: {
					range: Y.range,
					text: _.newText
				}
			});
		}
	}
	if (_.documentChanges) {
		for (let J of _.documentChanges) if ("textDocument" in J) {
			let _ = J.textDocument.uri;
			for (let Y of J.edits) {
				let X = K.bridge.translateBackRange({ uri: _ }, Y.range);
				q.push({
					resource: X.textModel.uri,
					versionId: J.textDocument.version,
					textEdit: {
						range: X.range,
						text: Y.newText
					}
				});
			}
		}
	}
	return { edits: q };
}
var LspCodeActionFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { codeAction: {
			dynamicRegistration: !0,
			codeActionLiteralSupport: { codeActionKind: { valueSet: Array.from(lspCodeActionKindToMonacoCodeActionKind.keys()) } },
			isPreferredSupport: !0,
			disabledSupport: !0,
			dataSupport: !0,
			resolveSupport: { properties: ["edit"] }
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentCodeAction, !0, (_) => languages.registerCodeActionProvider(toMonacoLanguageSelector(_.documentSelector), new LspCodeActionProvider(this._connection, _))));
	}
}, LspCodeActionProvider = class {
	constructor(_, K) {
		__publicField(this, "resolveCodeAction"), this._client = _, this._capabilities = K, K.resolveProvider && (this.resolveCodeAction = async (_, K) => {
			if (_._lspAction) {
				let K = await this._client.server.codeActionResolve(_._lspAction);
				K.edit && (_.edit = toMonacoWorkspaceEdit(K.edit, this._client)), K.command && (_.command = toMonacoCommand(K.command));
			}
			return _;
		});
	}
	async provideCodeActions(_, K, J, Y) {
		let X = this._client.bridge.translate(_, K.getStartPosition()), Z = await this._client.server.textDocumentCodeAction({
			textDocument: X.textDocument,
			range: this._client.bridge.translateRange(_, K),
			context: {
				diagnostics: J.markers.map((K) => ({
					range: this._client.bridge.translateRange(_, Range.lift(K)),
					message: K.message,
					severity: toLspDiagnosticSeverity(K.severity)
				})),
				triggerKind: toLspCodeActionTriggerKind(J.trigger)
			}
		});
		return Z ? {
			actions: (Array.isArray(Z) ? Z : [Z]).map((_) => {
				if ("title" in _ && !("kind" in _)) {
					let K = _;
					return {
						title: K.title,
						command: toMonacoCommand(K)
					};
				} else {
					let K = _;
					return {
						title: K.title,
						kind: toMonacoCodeActionKind(K.kind),
						isPreferred: K.isPreferred,
						disabled: K.disabled?.reason,
						edit: K.edit ? toMonacoWorkspaceEdit(K.edit, this._client) : void 0,
						command: toMonacoCommand(K.command),
						_lspAction: K
					};
				}
			}),
			dispose: () => {}
		} : null;
	}
};
function toMonacoWorkspaceEdit(_, K) {
	let q = [];
	if (_.changes) for (let J in _.changes) {
		let Y = _.changes[J];
		for (let _ of Y) {
			let Y = K.bridge.translateBackRange({ uri: J }, _.range);
			q.push({
				resource: Y.textModel.uri,
				versionId: void 0,
				textEdit: {
					range: Y.range,
					text: _.newText
				}
			});
		}
	}
	if (_.documentChanges) {
		for (let J of _.documentChanges) if ("textDocument" in J) {
			let _ = J.textDocument.uri;
			for (let Y of J.edits) {
				let X = K.bridge.translateBackRange({ uri: _ }, Y.range);
				q.push({
					resource: X.textModel.uri,
					versionId: J.textDocument.version ?? void 0,
					textEdit: {
						range: X.range,
						text: Y.newText
					}
				});
			}
		}
	}
	return { edits: q };
}
var LspCodeLensFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { codeLens: { dynamicRegistration: !0 } } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentCodeLens, !0, (_) => languages.registerCodeLensProvider(toMonacoLanguageSelector(_.documentSelector), new LspCodeLensProvider(this._connection, _))));
	}
}, LspCodeLensProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideCodeLenses(_, K) {
		let q = this._client.bridge.translate(_, new Position(1, 1)), J = await this._client.server.textDocumentCodeLens({ textDocument: q.textDocument });
		return J ? {
			lenses: J.map((K) => ({
				range: assertTargetTextModel(this._client.bridge.translateBackRange(q.textDocument, K.range), _).range,
				command: toMonacoCommand(K.command),
				_lspCodeLens: K
			})),
			dispose: () => {}
		} : null;
	}
	async resolveCodeLens(_, K, q) {
		if (!this._capabilities.resolveProvider || !K._lspCodeLens) return K;
		let J = await this._client.server.codeLensResolve(K._lspCodeLens);
		return J.command && (K.command = {
			id: J.command.command,
			title: J.command.title,
			arguments: J.command.arguments
		}), K;
	}
}, LspDocumentLinkFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { documentLink: {
			dynamicRegistration: !0,
			tooltipSupport: !0
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentDocumentLink, !0, (_) => languages.registerLinkProvider(toMonacoLanguageSelector(_.documentSelector), new LspDocumentLinkProvider(this._connection, _))));
	}
}, LspDocumentLinkProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideLinks(_, K) {
		let q = this._client.bridge.translate(_, new Position(1, 1)), J = await this._client.server.textDocumentDocumentLink({ textDocument: q.textDocument });
		return J ? { links: J.map((_) => ({
			range: this._client.bridge.translateBackRange(q.textDocument, _.range).range,
			url: _.target,
			tooltip: _.tooltip
		})) } : null;
	}
	async resolveLink(_, K) {
		return this._capabilities.resolveProvider, _;
	}
}, LspFormattingFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { formatting: { dynamicRegistration: !0 } } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentFormatting, !0, (_) => languages.registerDocumentFormattingEditProvider(toMonacoLanguageSelector(_.documentSelector), new LspDocumentFormattingProvider(this._connection, _))));
	}
}, LspDocumentFormattingProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideDocumentFormattingEdits(_, K, q) {
		let J = this._client.bridge.translate(_, new Position(1, 1)), Y = await this._client.server.textDocumentFormatting({
			textDocument: J.textDocument,
			options: {
				tabSize: K.tabSize,
				insertSpaces: K.insertSpaces
			}
		});
		return Y ? Y.map((_) => ({
			range: this._client.bridge.translateBackRange(J.textDocument, _.range).range,
			text: _.newText
		})) : null;
	}
}, LspRangeFormattingFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { rangeFormatting: { dynamicRegistration: !0 } } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentRangeFormatting, !0, (_) => languages.registerDocumentRangeFormattingEditProvider(toMonacoLanguageSelector(_.documentSelector), new LspDocumentRangeFormattingProvider(this._connection, _))));
	}
}, LspDocumentRangeFormattingProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideDocumentRangeFormattingEdits(_, K, q, J) {
		let Y = this._client.bridge.translate(_, K.getStartPosition()), X = await this._client.server.textDocumentRangeFormatting({
			textDocument: Y.textDocument,
			range: this._client.bridge.translateRange(_, K),
			options: {
				tabSize: q.tabSize,
				insertSpaces: q.insertSpaces
			}
		});
		return X ? X.map((_) => ({
			range: this._client.bridge.translateBackRange(Y.textDocument, _.range).range,
			text: _.newText
		})) : null;
	}
}, LspOnTypeFormattingFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { onTypeFormatting: { dynamicRegistration: !0 } } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentOnTypeFormatting, !0, (_) => languages.registerOnTypeFormattingEditProvider(toMonacoLanguageSelector(_.documentSelector), new LspOnTypeFormattingProvider(this._connection, _))));
	}
}, LspOnTypeFormattingProvider = class {
	constructor(_, K) {
		__publicField(this, "autoFormatTriggerCharacters"), this._client = _, this._capabilities = K, this.autoFormatTriggerCharacters = [K.firstTriggerCharacter, ...K.moreTriggerCharacter || []];
	}
	async provideOnTypeFormattingEdits(_, K, q, J, Y) {
		let X = this._client.bridge.translate(_, K), Z = await this._client.server.textDocumentOnTypeFormatting({
			textDocument: X.textDocument,
			position: X.position,
			ch: q,
			options: {
				tabSize: J.tabSize,
				insertSpaces: J.insertSpaces
			}
		});
		return Z ? Z.map((_) => ({
			range: this._client.bridge.translateBackRange(X.textDocument, _.range).range,
			text: _.newText
		})) : null;
	}
}, LspFoldingRangeFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { foldingRange: {
			dynamicRegistration: !0,
			rangeLimit: 5e3,
			lineFoldingOnly: !1,
			foldingRangeKind: { valueSet: [
				FoldingRangeKind.Comment,
				FoldingRangeKind.Imports,
				FoldingRangeKind.Region
			] }
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentFoldingRange, !0, (_) => languages.registerFoldingRangeProvider(toMonacoLanguageSelector(_.documentSelector), new LspFoldingRangeProvider(this._connection, _))));
	}
}, LspFoldingRangeProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideFoldingRanges(_, K, q) {
		let J = this._client.bridge.translate(_, new Position(1, 1)), Y = await this._client.server.textDocumentFoldingRange({ textDocument: J.textDocument });
		return Y ? Y.map((_) => ({
			start: _.startLine + 1,
			end: _.endLine + 1,
			kind: toMonacoFoldingRangeKind(_.kind)
		})) : null;
	}
}, LspSelectionRangeFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { selectionRange: { dynamicRegistration: !0 } } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentSelectionRange, !0, (_) => languages.registerSelectionRangeProvider(toMonacoLanguageSelector(_.documentSelector), new LspSelectionRangeProvider(this._connection, _))));
	}
}, LspSelectionRangeProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	async provideSelectionRanges(_, K, q) {
		let J = this._client.bridge.translate(_, K[0]), Y = await this._client.server.textDocumentSelectionRange({
			textDocument: J.textDocument,
			positions: K.map((K) => this._client.bridge.translate(_, K).position)
		});
		return Y ? Y.map((_) => this.convertSelectionRange(_, J.textDocument)) : null;
	}
	convertSelectionRange(_, K) {
		let q = [], J = _;
		for (; J;) q.push({ range: this._client.bridge.translateBackRange(K, J.range).range }), J = J.parent;
		return q;
	}
}, LspInlayHintsFeature = class extends Disposable {
	constructor(_) {
		super(), __publicField(this, "_providers", /* @__PURE__ */ new Set()), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({
			textDocument: { inlayHint: {
				dynamicRegistration: !0,
				resolveSupport: { properties: [
					"tooltip",
					"textEdits",
					"label.tooltip",
					"label.location",
					"label.command"
				] }
			} },
			workspace: { inlayHint: { refreshSupport: !0 } }
		})), this._register(this._connection.connection.registerRequestHandler(api.client.workspaceInlayHintRefresh, async () => {
			for (let _ of this._providers) _.refresh();
			return { ok: null };
		})), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentInlayHint, !0, (_) => {
			let K = new LspInlayHintsProvider(this._connection, _);
			this._providers.add(K);
			let q = languages.registerInlayHintsProvider(toMonacoLanguageSelector(_.documentSelector), K);
			return { dispose: () => {
				this._providers.delete(K), q.dispose();
			} };
		}));
	}
}, LspInlayHintsProvider = class {
	constructor(_, K) {
		__publicField(this, "_onDidChangeInlayHints", new Emitter()), __publicField(this, "onDidChangeInlayHints", this._onDidChangeInlayHints.event), __publicField(this, "resolveInlayHint"), this._client = _, this._capabilities = K, K.resolveProvider && (this.resolveInlayHint = async (_, K) => {
			let q = await this._client.server.inlayHintResolve(_._lspInlayHint);
			return q.tooltip && (_.tooltip = toMonacoTooltip(q.tooltip)), q.label !== _._lspInlayHint.label && (_.label = toLspInlayHintLabel(q.label)), q.textEdits && (_.textEdits = q.textEdits.map((K) => ({
				range: this._client.bridge.translateBackRange({ uri: _._targetUri }, K.range).range,
				text: K.newText
			}))), _;
		});
	}
	refresh() {
		this._onDidChangeInlayHints.fire();
	}
	async provideInlayHints(_, K, q) {
		let J = this._client.bridge.translate(_, K.getStartPosition()), Y = await retryOnContentModified(async () => await this._client.server.textDocumentInlayHint({
			textDocument: J.textDocument,
			range: this._client.bridge.translateRange(_, K)
		}));
		return Y ? {
			hints: Y.map((K) => ({
				label: toLspInlayHintLabel(K.label),
				position: assertTargetTextModel(this._client.bridge.translateBack(J.textDocument, K.position), _).position,
				kind: toMonacoInlayHintKind(K.kind),
				tooltip: toMonacoTooltip(K.tooltip),
				paddingLeft: K.paddingLeft,
				paddingRight: K.paddingRight,
				textEdits: K.textEdits?.map((K) => ({
					range: assertTargetTextModel(this._client.bridge.translateBackRange(J.textDocument, K.range), _).range,
					text: K.newText
				})),
				_lspInlayHint: K,
				_targetUri: J.textDocument.uri
			})),
			dispose: () => {}
		} : null;
	}
};
async function retryOnContentModified(_) {
	for (let K = 3;; K--) try {
		return await _();
	} catch (_) {
		if (_.message === "content modified" && K > 0) continue;
		throw _;
	}
}
function toLspInlayHintLabel(_) {
	return typeof _ == "string" ? _ : _.map((_) => {
		let K = {
			label: _.value,
			tooltip: toMonacoTooltip(_.tooltip),
			command: toMonacoCommand(_.command)
		};
		return _.location && (K.location = {
			uri: Uri.parse(_.location.uri),
			range: new Range(_.location.range.start.line + 1, _.location.range.start.character + 1, _.location.range.end.line + 1, _.location.range.end.character + 1)
		}), K;
	});
}
function toMonacoTooltip(_) {
	if (_) return typeof _ == "string" ? _ : {
		value: _.value,
		isTrusted: !0
	};
}
var LspSemanticTokensFeature = class extends Disposable {
	constructor(_) {
		super(), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { semanticTokens: {
			dynamicRegistration: !0,
			requests: {
				range: !0,
				full: { delta: !0 }
			},
			tokenTypes: [
				"namespace",
				"type",
				"class",
				"enum",
				"interface",
				"struct",
				"typeParameter",
				"parameter",
				"variable",
				"property",
				"enumMember",
				"event",
				"function",
				"method",
				"macro",
				"keyword",
				"modifier",
				"comment",
				"string",
				"number",
				"regexp",
				"operator",
				"decorator"
			],
			tokenModifiers: [
				"declaration",
				"definition",
				"readonly",
				"static",
				"deprecated",
				"abstract",
				"async",
				"modification",
				"documentation",
				"defaultLibrary"
			],
			formats: [TokenFormat.Relative],
			overlappingTokenSupport: !1,
			multilineTokenSupport: !0
		} } })), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentSemanticTokensFull, !0, (_) => languages.registerDocumentSemanticTokensProvider(toMonacoLanguageSelector(_.documentSelector), new LspSemanticTokensProvider(this._connection, _))));
	}
}, LspSemanticTokensProvider = class {
	constructor(_, K) {
		this._client = _, this._capabilities = K;
	}
	getLegend() {
		return {
			tokenTypes: this._capabilities.legend.tokenTypes,
			tokenModifiers: this._capabilities.legend.tokenModifiers
		};
	}
	releaseDocumentSemanticTokens(_) {}
	async provideDocumentSemanticTokens(_, K, q) {
		let J = this._client.bridge.translate(_, _.getPositionAt(0)), Y = this._capabilities.full;
		if (K && Y && typeof Y == "object" && Y.delta) {
			let _ = await this._client.server.textDocumentSemanticTokensFullDelta({
				textDocument: J.textDocument,
				previousResultId: K
			});
			return _ ? "edits" in _ ? {
				resultId: _.resultId,
				edits: _.edits.map((_) => ({
					start: _.start,
					deleteCount: _.deleteCount,
					data: _.data ? new Uint32Array(_.data) : void 0
				}))
			} : {
				resultId: _.resultId,
				data: new Uint32Array(_.data)
			} : null;
		}
		let X = await this._client.server.textDocumentSemanticTokensFull({ textDocument: J.textDocument });
		return X ? {
			resultId: X.resultId,
			data: new Uint32Array(X.data)
		} : null;
	}
	async provideDocumentSemanticTokensEdits(_, K, q) {
		return this.provideDocumentSemanticTokens(_, K, q);
	}
}, LspDiagnosticsFeature = class extends Disposable {
	constructor(_) {
		super(), __publicField(this, "_diagnosticsMarkerOwner", "lsp"), __publicField(this, "_pullDiagnosticProviders", /* @__PURE__ */ new Map()), this._connection = _, this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: {
			publishDiagnostics: {
				relatedInformation: !0,
				tagSupport: { valueSet: [...lspDiagnosticTagToMonacoMarkerTag.keys()] },
				versionSupport: !0,
				codeDescriptionSupport: !0,
				dataSupport: !0
			},
			diagnostic: {
				dynamicRegistration: !0,
				relatedDocumentSupport: !0
			}
		} })), this._register(this._connection.connection.registerNotificationHandler(api.client.textDocumentPublishDiagnostics, (_) => this._handlePublishDiagnostics(_))), this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentDiagnostic, !0, (_) => {
			let K = new DisposableStore();
			for (let q of editor.getModels()) this._addPullDiagnosticProvider(q, _, K);
			return K.add(editor.onDidCreateModel((q) => {
				this._addPullDiagnosticProvider(q, _, K);
			})), K;
		}));
	}
	_addPullDiagnosticProvider(_, K, q) {
		if (_.getLanguageId(), !matchesDocumentSelector(_, K.documentSelector)) return;
		let J = new ModelDiagnosticProvider(_, this._connection, this._diagnosticsMarkerOwner, K);
		this._pullDiagnosticProviders.set(_, J), q.add(J), q.add(_.onWillDispose(() => {
			this._pullDiagnosticProviders.delete(_);
		}));
	}
	_handlePublishDiagnostics(_) {
		let K = _.uri;
		try {
			let q = this._connection.bridge.translateBack({ uri: K }, {
				line: 0,
				character: 0
			}).textModel;
			if (!q || q.isDisposed()) return;
			let J = _.diagnostics.map((_) => toDiagnosticMarker(_));
			editor.setModelMarkers(q, this._diagnosticsMarkerOwner, J);
		} catch (_) {
			console.debug(`Could not set diagnostics for ${K}:`, _);
		}
	}
}, ModelDiagnosticProvider = class extends Disposable {
	constructor(_, K, q, J) {
		super(), __publicField(this, "_updateHandle"), __publicField(this, "_previousResultId"), this._model = _, this._connection = K, this._markerOwner = q, this._capability = J, this._register(this._model.onDidChangeContent(() => {
			this._scheduleDiagnosticUpdate();
		})), this._scheduleDiagnosticUpdate();
	}
	_scheduleDiagnosticUpdate() {
		this._updateHandle !== void 0 && clearTimeout(this._updateHandle), this._updateHandle = window.setTimeout(() => {
			this._updateHandle = void 0, this._requestDiagnostics();
		}, 500);
	}
	async _requestDiagnostics() {
		if (!this._model.isDisposed()) try {
			let _ = this._connection.bridge.translate(this._model, new Position(1, 1)), K = await this._connection.server.textDocumentDiagnostic({
				textDocument: _.textDocument,
				identifier: this._capability.identifier,
				previousResultId: this._previousResultId
			});
			if (this._model.isDisposed()) return;
			this._handleDiagnosticReport(K);
		} catch (_) {
			console.error("Error requesting diagnostics:", _);
		}
	}
	_handleDiagnosticReport(_) {
		if (_.kind === "full") {
			this._previousResultId = _.resultId;
			let K = _.items.map((_) => toDiagnosticMarker(_));
			editor.setModelMarkers(this._model, this._markerOwner, K), "relatedDocuments" in _ && _.relatedDocuments && this._handleRelatedDocuments(_.relatedDocuments);
		} else _.kind === "unchanged" && (this._previousResultId = _.resultId);
	}
	_handleRelatedDocuments(_) {
		for (let [K, q] of Object.entries(_)) try {
			let _ = this._connection.bridge.translateBack({ uri: K }, {
				line: 0,
				character: 0
			}).textModel;
			if (!_ || _.isDisposed()) continue;
			if (q.kind === "full") {
				let K = q.items.map((_) => toDiagnosticMarker(_));
				editor.setModelMarkers(_, this._markerOwner, K);
			}
		} catch (_) {
			console.debug(`Could not set related diagnostics for ${K}:`, _);
		}
	}
	dispose() {
		this._updateHandle !== void 0 && (clearTimeout(this._updateHandle), this._updateHandle = void 0), super.dispose();
	}
}, LspConnection = class {
	constructor(_, K, q, J) {
		this.server = _, this.bridge = K, this.capabilities = q, this.connection = J;
	}
}, LspCapabilitiesRegistry = class extends Disposable {
	constructor(_) {
		super(), __publicField(this, "_staticCapabilities", /* @__PURE__ */ new Set()), __publicField(this, "_dynamicFromStatic", DynamicFromStaticOptions.create()), __publicField(this, "_registrations", /* @__PURE__ */ new Map()), __publicField(this, "_serverCapabilities"), this._connection = _, this._register(this._connection.registerRequestHandler(api.client.clientRegisterCapability, async (_) => {
			for (let K of _.registrations) {
				let _ = getCapabilityByMethod(K.method), q = new CapabilityRegistration(K.id, _, K.registerOptions, !1);
				this._registerCapabilityOptions(q);
			}
			return { ok: null };
		})), this._register(this._connection.registerRequestHandler(api.client.clientUnregisterCapability, async (_) => {
			for (let K of _.unregisterations) {
				let _ = getCapabilityByMethod(K.method), q = this._registrations.get(_), J = q?.registrations.get(K.id);
				if (!J) throw Error(`No registration for method ${K.method} with id ${K.id}`);
				J?.handlerDisposables.forEach((_) => _.dispose()), q?.registrations.delete(K.id);
			}
			return { ok: null };
		}));
	}
	_registerCapabilityOptions(_) {
		let K = this._registrations.get(_.capability);
		if (K || (K = new CapabilityInfo(), this._registrations.set(_.capability, K)), K.registrations.has(_.id)) throw Error(`Handler for method ${_.capability.method} with id ${_.id} already registered`);
		K.registrations.set(_.id, _);
		for (let q of K.handlers) !q.handleStaticCapability && _.isFromStatic || _.handlerDisposables.set(q, q.handler(_.options));
	}
	setServerCapabilities(_) {
		if (this._serverCapabilities) throw Error("Server capabilities already set");
		this._serverCapabilities = _;
		for (let K of Object.values(capabilities)) {
			let q = this._dynamicFromStatic.getOptions(K, _);
			q && this._registerCapabilityOptions(new CapabilityRegistration(K.method, K, q, !0));
		}
	}
	getClientCapabilities() {
		let _ = {};
		for (let K of this._staticCapabilities) deepAssign(_, K.cap);
		return _;
	}
	addStaticClientCapabilities(_) {
		let K = { cap: _ };
		return this._staticCapabilities.add(K), { dispose: () => {
			this._staticCapabilities.delete(K);
		} };
	}
	registerCapabilityHandler(_, K, q) {
		let J = this._registrations.get(_);
		J || (J = new CapabilityInfo(), this._registrations.set(_, J));
		let Y = new CapabilityHandler(_, K, q);
		J.handlers.add(Y);
		for (let _ of J.registrations.values()) !Y.handleStaticCapability && _.isFromStatic || _.handlerDisposables.set(Y, q(_.options));
		return { dispose: () => {
			J.handlers.delete(Y);
			for (let _ of J.registrations.values()) {
				let K = _.handlerDisposables.get(Y);
				K && (K.dispose(), _.handlerDisposables.delete(Y));
			}
		} };
	}
}, CapabilityHandler = class {
	constructor(_, K, q) {
		this.capability = _, this.handleStaticCapability = K, this.handler = q;
	}
}, CapabilityRegistration = class {
	constructor(_, K, q, J) {
		__publicField(this, "handlerDisposables", /* @__PURE__ */ new Map()), this.id = _, this.capability = K, this.options = q, this.isFromStatic = J;
	}
}, capabilitiesByMethod = new Map([...Object.values(capabilities)].map((_) => [_.method, _]));
function getCapabilityByMethod(_) {
	let K = capabilitiesByMethod.get(_);
	if (!K) throw Error(`No capability found for method ${_}`);
	return K;
}
var CapabilityInfo = class {
	constructor() {
		__publicField(this, "handlers", /* @__PURE__ */ new Set()), __publicField(this, "registrations", /* @__PURE__ */ new Map());
	}
}, DynamicFromStaticOptions = class _ {
	constructor() {
		__publicField(this, "_mappings", /* @__PURE__ */ new Map());
	}
	static create() {
		let K = new _();
		return K.set(capabilities.textDocumentDidChange, (_) => {
			if (_.textDocumentSync !== void 0) return typeof _.textDocumentSync == "object" ? {
				syncKind: _.textDocumentSync.change ?? TextDocumentSyncKind.None,
				documentSelector: null
			} : {
				syncKind: _.textDocumentSync,
				documentSelector: null
			};
		}), K.set(capabilities.textDocumentCompletion, (_) => _.completionProvider), K.set(capabilities.textDocumentHover, (_) => _.hoverProvider), K.set(capabilities.textDocumentSignatureHelp, (_) => _.signatureHelpProvider), K.set(capabilities.textDocumentDefinition, (_) => _.definitionProvider), K.set(capabilities.textDocumentReferences, (_) => _.referencesProvider), K.set(capabilities.textDocumentDocumentHighlight, (_) => _.documentHighlightProvider), K.set(capabilities.textDocumentDocumentSymbol, (_) => _.documentSymbolProvider), K.set(capabilities.textDocumentCodeAction, (_) => _.codeActionProvider), K.set(capabilities.textDocumentCodeLens, (_) => _.codeLensProvider), K.set(capabilities.textDocumentDocumentLink, (_) => _.documentLinkProvider), K.set(capabilities.textDocumentFormatting, (_) => _.documentFormattingProvider), K.set(capabilities.textDocumentRangeFormatting, (_) => _.documentRangeFormattingProvider), K.set(capabilities.textDocumentOnTypeFormatting, (_) => _.documentOnTypeFormattingProvider), K.set(capabilities.textDocumentRename, (_) => _.renameProvider), K.set(capabilities.textDocumentFoldingRange, (_) => _.foldingRangeProvider), K.set(capabilities.textDocumentDeclaration, (_) => _.declarationProvider), K.set(capabilities.textDocumentTypeDefinition, (_) => _.typeDefinitionProvider), K.set(capabilities.textDocumentImplementation, (_) => _.implementationProvider), K.set(capabilities.textDocumentDocumentColor, (_) => _.colorProvider), K.set(capabilities.textDocumentSelectionRange, (_) => _.selectionRangeProvider), K.set(capabilities.textDocumentLinkedEditingRange, (_) => _.linkedEditingRangeProvider), K.set(capabilities.textDocumentPrepareCallHierarchy, (_) => _.callHierarchyProvider), K.set(capabilities.textDocumentSemanticTokensFull, (_) => _.semanticTokensProvider), K.set(capabilities.textDocumentInlayHint, (_) => _.inlayHintProvider), K.set(capabilities.textDocumentInlineValue, (_) => _.inlineValueProvider), K.set(capabilities.textDocumentDiagnostic, (_) => _.diagnosticProvider), K.set(capabilities.textDocumentMoniker, (_) => _.monikerProvider), K.set(capabilities.textDocumentPrepareTypeHierarchy, (_) => _.typeHierarchyProvider), K.set(capabilities.workspaceSymbol, (_) => _.workspaceSymbolProvider), K.set(capabilities.workspaceExecuteCommand, (_) => _.executeCommandProvider), K;
	}
	set(_, K) {
		if (this._mappings.has(_.method)) throw Error(`Capability for method ${_.method} already registered`);
		this._mappings.set(_.method, K);
	}
	getOptions(_, K) {
		let q = this._mappings.get(_.method);
		if (q) return q(K);
	}
};
function deepAssign(_, K) {
	for (let q of Object.keys(K)) {
		let J = K[q];
		if (J === void 0) continue;
		let Y = _[q];
		if (Y === void 0) {
			_[q] = J;
			continue;
		}
		if (typeof J != "object" || !J) {
			_[q] = J;
			continue;
		}
		if (typeof Y != "object" || !Y) {
			_[q] = J;
			continue;
		}
		deepAssign(Y, J);
	}
}
var TextDocumentSynchronizer = class extends Disposable {
	constructor(_, K) {
		super(), __publicField(this, "_managedModels", /* @__PURE__ */ new Map()), __publicField(this, "_managedModelsReverse", /* @__PURE__ */ new Map()), __publicField(this, "_started", !1), this._server = _, this._capabilities = K, this._register(this._capabilities.addStaticClientCapabilities({ textDocument: { synchronization: {
			dynamicRegistration: !0,
			willSave: !1,
			willSaveWaitUntil: !1,
			didSave: !1
		} } })), this._register(K.registerCapabilityHandler(capabilities.textDocumentDidChange, !0, (_) => {
			if (this._started) return { dispose: () => {} };
			this._started = !0, this._register(editor.onDidCreateModel((_) => {
				this._getOrCreateManagedModel(_);
			}));
			for (let _ of editor.getModels()) this._getOrCreateManagedModel(_);
			return { dispose: () => {} };
		}));
	}
	_getOrCreateManagedModel(_) {
		if (!this._started) throw Error("Not started");
		let K = _.uri.toString(!0).toLowerCase(), q = this._managedModels.get(_);
		return q || (q = new ManagedModel(_, this._server), this._managedModels.set(_, q), this._managedModelsReverse.set(K, _)), _.onWillDispose(() => {
			q.dispose(), this._managedModels.delete(_), this._managedModelsReverse.delete(K);
		}), q;
	}
	translateBack(_, K) {
		let q = _.uri.toLowerCase(), J = this._managedModelsReverse.get(q);
		if (!J) throw Error(`No text model for uri ${q}`);
		return {
			textModel: J,
			position: new Position(K.line + 1, K.character + 1)
		};
	}
	translateBackRange(_, K) {
		let J = _.uri.toLowerCase(), Y = this._managedModelsReverse.get(J);
		if (!Y) throw Error(`No text model for uri ${J}`);
		return {
			textModel: Y,
			range: new Range(K.start.line + 1, K.start.character + 1, K.end.line + 1, K.end.character + 1)
		};
	}
	translate(_, K) {
		return {
			textDocument: { uri: _.uri.toString(!0) },
			position: {
				line: K.lineNumber - 1,
				character: K.column - 1
			}
		};
	}
	translateRange(_, K) {
		return {
			start: {
				line: K.startLineNumber - 1,
				character: K.startColumn - 1
			},
			end: {
				line: K.endLineNumber - 1,
				character: K.endColumn - 1
			}
		};
	}
}, ManagedModel = class extends Disposable {
	constructor(_, K) {
		super(), this._textModel = _, this._api = K;
		let q = _.uri.toString(!0).toLowerCase();
		this._api.textDocumentDidOpen({ textDocument: {
			languageId: _.getLanguageId(),
			uri: q,
			version: _.getVersionId(),
			text: _.getValue()
		} }), this._register(_.onDidChangeContent((K) => {
			let J = K.changes.map((_) => toLspTextDocumentContentChangeEvent(_));
			this._api.textDocumentDidChange({
				textDocument: {
					uri: q,
					version: _.getVersionId()
				},
				contentChanges: J
			});
		})), this._register({ dispose: () => {
			this._api.textDocumentDidClose({ textDocument: { uri: q } });
		} });
	}
};
function toLspTextDocumentContentChangeEvent(_) {
	return {
		range: toLspRange(_.range),
		rangeLength: _.rangeLength,
		text: _.text
	};
}
function toLspRange(_) {
	return {
		start: {
			line: _.startLineNumber - 1,
			character: _.startColumn - 1
		},
		end: {
			line: _.endLineNumber - 1,
			character: _.endColumn - 1
		}
	};
}
var MonacoLspClient = class {
	constructor(_) {
		__publicField(this, "_connection"), __publicField(this, "_capabilitiesRegistry"), __publicField(this, "_bridge"), __publicField(this, "_initPromise");
		let K = TypedChannel.fromTransport(_), q = api.getServer(K, {});
		K.startListen(), this._capabilitiesRegistry = new LspCapabilitiesRegistry(K), this._bridge = new TextDocumentSynchronizer(q.server, this._capabilitiesRegistry), this._connection = new LspConnection(q.server, this._bridge, this._capabilitiesRegistry, K), this.createFeatures(), this._initPromise = this._init();
	}
	async _init() {
		let _ = await this._connection.server.initialize({
			processId: null,
			capabilities: this._capabilitiesRegistry.getClientCapabilities(),
			rootUri: null
		});
		this._connection.server.initialized({}), this._capabilitiesRegistry.setServerCapabilities(_.capabilities);
	}
	createFeatures() {
		let _ = new DisposableStore();
		return _.add(new LspCompletionFeature(this._connection)), _.add(new LspHoverFeature(this._connection)), _.add(new LspSignatureHelpFeature(this._connection)), _.add(new LspDefinitionFeature(this._connection)), _.add(new LspDeclarationFeature(this._connection)), _.add(new LspTypeDefinitionFeature(this._connection)), _.add(new LspImplementationFeature(this._connection)), _.add(new LspReferencesFeature(this._connection)), _.add(new LspDocumentHighlightFeature(this._connection)), _.add(new LspDocumentSymbolFeature(this._connection)), _.add(new LspRenameFeature(this._connection)), _.add(new LspCodeActionFeature(this._connection)), _.add(new LspCodeLensFeature(this._connection)), _.add(new LspDocumentLinkFeature(this._connection)), _.add(new LspFormattingFeature(this._connection)), _.add(new LspRangeFormattingFeature(this._connection)), _.add(new LspOnTypeFormattingFeature(this._connection)), _.add(new LspFoldingRangeFeature(this._connection)), _.add(new LspSelectionRangeFeature(this._connection)), _.add(new LspInlayHintsFeature(this._connection)), _.add(new LspSemanticTokensFeature(this._connection)), _.add(new LspDiagnosticsFeature(this._connection)), _;
	}
}, ws = null;
typeof WebSocket < "u" ? ws = WebSocket : typeof MozWebSocket < "u" ? ws = MozWebSocket : typeof global < "u" ? ws = global.WebSocket || global.MozWebSocket : typeof window < "u" ? ws = window.WebSocket || window.MozWebSocket : typeof self < "u" && (ws = self.WebSocket || self.MozWebSocket);
var browser_default = ws;
function normalizeWebSocketOptions(_) {
	return "host" in _ ? { address: `${_.forceTls ? "wss" : "ws"}://${_.host}:${_.port}` } : _;
}
var WebSocketTransport = class _ extends BaseMessageTransport {
	constructor(_) {
		super(), __publicField(this, "socket"), __publicField(this, "errorEmitter", new EventEmitter()), __publicField(this, "onError", this.errorEmitter), this.socket = _, _.onmessage = (_) => {
			try {
				let K = _.data;
				if (typeof K == "string") {
					let _ = JSON.parse(K);
					this._dispatchReceivedMessage(_);
				} else throw Error("Not supported");
			} catch (_) {
				this.errorEmitter.fire({ error: _ });
			}
		}, _.onclose = (_) => {
			this._onConnectionClosed();
		};
	}
	static connectTo(K) {
		let q = new browser_default(normalizeWebSocketOptions(K).address);
		return new Promise((K, J) => {
			q.onerror = (_) => {
				J(_);
			}, q.onopen = () => {
				K(new _(q));
			};
		});
	}
	static fromWebSocket(K) {
		return new _(K);
	}
	close() {
		this.socket.close();
	}
	dispose() {
		this.close();
	}
	_sendImpl(_) {
		let K = JSON.stringify(_);
		return new Promise((_, q) => {
			this.socket.send(K, (K) => {
				K ? q(K) : _();
			});
		});
	}
	toString() {
		return `${this.id}@${this.socket.url}`;
	}
}, WindowLikeTransport = class extends BaseMessageTransport {
	constructor(_, K = void 0, q = void 0) {
		super(), __publicField(this, "_windowLike"), __publicField(this, "_source"), __publicField(this, "_loadingState"), __publicField(this, "_disposed", !1), __publicField(this, "_messageHandler", ({ data: _, source: K }) => {
			this._source && K !== this._source || typeof _ == "object" && _ && this._dispatchReceivedMessage(_);
		}), this._windowLike = _, this._source = K, this._loadingState = q, this._windowLike.addEventListener("message", this._messageHandler);
	}
	async _sendImpl(_) {
		if (this._disposed) throw Error("Transport is disposed");
		this._loadingState && !this._loadingState.loaded && await this._loadingState.onLoaded, this._windowLike.postMessage(_);
	}
	toString() {
		return `${this.id}@${this._windowLike}`;
	}
	dispose() {
		this._disposed || (this._disposed = !0, this._windowLike.removeEventListener("message", this._messageHandler));
	}
};
function createTransportToWorker(_) {
	if (typeof window > "u") throw Error("call this function from the main browser thread");
	return new WindowLikeTransport(_);
}
function createTransportToIFrame(_) {
	if (typeof window > "u") throw Error("call this function from the main browser thread");
	return new WindowLikeTransport(_.contentWindow, _.contentWindow, {
		loaded: window.document.readyState === "complete",
		onLoaded: new Promise((_) => {
			window.addEventListener("load", () => _());
		})
	});
}
function getGlobalMonaco() {
	return editor_api2_exports;
}
globalThis.MonacoEnvironment?.globalAPI && (globalThis.monaco = getGlobalMonaco());
var editor_main_exports = /* @__PURE__ */ __export({
	CancellationTokenSource: () => CancellationTokenSource,
	Emitter: () => Emitter,
	KeyCode: () => KeyCode,
	KeyMod: () => KeyMod,
	MarkerSeverity: () => MarkerSeverity,
	MarkerTag: () => MarkerTag,
	Position: () => Position,
	Range: () => Range,
	Selection: () => Selection,
	SelectionDirection: () => SelectionDirection,
	Token: () => Token,
	Uri: () => Uri,
	createWebWorker: () => createWebWorker,
	css: () => monaco_contribution_exports,
	editor: () => editor,
	html: () => monaco_contribution_exports$1,
	json: () => monaco_contribution_exports$2,
	languages: () => languages,
	lsp: () => out_exports,
	typescript: () => monaco_contribution_exports$3
}, 1), monacoApi = getGlobalMonaco();
monacoApi.languages.css = monaco_contribution_exports, monacoApi.languages.html = monaco_contribution_exports$1, monacoApi.languages.typescript = monaco_contribution_exports$3, monacoApi.languages.json = monaco_contribution_exports$2;
export { editor_main_exports as t };
