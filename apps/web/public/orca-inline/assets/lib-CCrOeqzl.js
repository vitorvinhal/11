import { a as __toESM, n as __export, t as __commonJSMin } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { S as unreachable, a as unified, b as VFileMessage, d as remarkParse, m as asciiAlphanumeric, o as VFile, s as visit, x as ok } from "./lib-DEDsinTP.js";
function parse(e) {
	let E = [], D = String(e || ""), O = D.indexOf(","), k = 0, A = !1;
	for (; !A;) {
		O === -1 && (O = D.length, A = !0);
		let e = D.slice(k, O).trim();
		(e || !A) && E.push(e), k = O + 1, O = D.indexOf(",", k);
	}
	return E;
}
function stringify(e, E) {
	let D = E || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((D.padRight ? " " : "") + "," + (D.padLeft === !1 ? "" : " ")).trim();
}
var nameRe = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, nameReJsx = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, emptyOptions$2 = {};
function name(e, E) {
	return ((E || emptyOptions$2).jsx ? nameReJsx : nameRe).test(e);
}
var re = /[ \t\n\f\r]/g;
function whitespace(e) {
	return typeof e == "object" ? e.type === "text" ? empty(e.value) : !1 : empty(e);
}
function empty(e) {
	return e.replace(re, "") === "";
}
var Schema = class {
	constructor(e, E, D) {
		this.normal = E, this.property = e, D && (this.space = D);
	}
};
Schema.prototype.normal = {}, Schema.prototype.property = {}, Schema.prototype.space = void 0;
function merge(e, E) {
	let D = {}, O = {};
	for (let E of e) Object.assign(D, E.property), Object.assign(O, E.normal);
	return new Schema(D, O, E);
}
function normalize(e) {
	return e.toLowerCase();
}
var Info = class {
	constructor(e, E) {
		this.attribute = E, this.property = e;
	}
};
Info.prototype.attribute = "", Info.prototype.booleanish = !1, Info.prototype.boolean = !1, Info.prototype.commaOrSpaceSeparated = !1, Info.prototype.commaSeparated = !1, Info.prototype.defined = !1, Info.prototype.mustUseProperty = !1, Info.prototype.number = !1, Info.prototype.overloadedBoolean = !1, Info.prototype.property = "", Info.prototype.spaceSeparated = !1, Info.prototype.space = void 0;
var types_exports = /* @__PURE__ */ __export({
	boolean: () => boolean,
	booleanish: () => booleanish,
	commaOrSpaceSeparated: () => commaOrSpaceSeparated,
	commaSeparated: () => commaSeparated,
	number: () => number,
	overloadedBoolean: () => overloadedBoolean,
	spaceSeparated: () => spaceSeparated
}, 1), powers = 0;
const boolean = increment(), booleanish = increment(), overloadedBoolean = increment(), number = increment(), spaceSeparated = increment(), commaSeparated = increment(), commaOrSpaceSeparated = increment();
function increment() {
	return 2 ** ++powers;
}
var checks = Object.keys(types_exports), DefinedInfo = class extends Info {
	constructor(e, E, D, O) {
		let k = -1;
		if (super(e, E), mark(this, "space", O), typeof D == "number") for (; ++k < checks.length;) {
			let e = checks[k];
			mark(this, checks[k], (D & types_exports[e]) === types_exports[e]);
		}
	}
};
DefinedInfo.prototype.defined = !0;
function mark(e, E, D) {
	D && (e[E] = D);
}
function create(e) {
	let E = {}, D = {};
	for (let [O, k] of Object.entries(e.properties)) {
		let A = new DefinedInfo(O, e.transform(e.attributes || {}, O), k, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(O) && (A.mustUseProperty = !0), E[O] = A, D[normalize(O)] = O, D[normalize(A.attribute)] = O;
	}
	return new Schema(E, D, e.space);
}
const aria$1 = create({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: booleanish,
		ariaAutoComplete: null,
		ariaBusy: booleanish,
		ariaChecked: booleanish,
		ariaColCount: number,
		ariaColIndex: number,
		ariaColSpan: number,
		ariaControls: spaceSeparated,
		ariaCurrent: null,
		ariaDescribedBy: spaceSeparated,
		ariaDetails: null,
		ariaDisabled: booleanish,
		ariaDropEffect: spaceSeparated,
		ariaErrorMessage: null,
		ariaExpanded: booleanish,
		ariaFlowTo: spaceSeparated,
		ariaGrabbed: booleanish,
		ariaHasPopup: null,
		ariaHidden: booleanish,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: spaceSeparated,
		ariaLevel: number,
		ariaLive: null,
		ariaModal: booleanish,
		ariaMultiLine: booleanish,
		ariaMultiSelectable: booleanish,
		ariaOrientation: null,
		ariaOwns: spaceSeparated,
		ariaPlaceholder: null,
		ariaPosInSet: number,
		ariaPressed: booleanish,
		ariaReadOnly: booleanish,
		ariaRelevant: null,
		ariaRequired: booleanish,
		ariaRoleDescription: spaceSeparated,
		ariaRowCount: number,
		ariaRowIndex: number,
		ariaRowSpan: number,
		ariaSelected: booleanish,
		ariaSetSize: number,
		ariaSort: null,
		ariaValueMax: number,
		ariaValueMin: number,
		ariaValueNow: number,
		ariaValueText: null,
		role: null
	},
	transform(e, E) {
		return E === "role" ? E : "aria-" + E.slice(4).toLowerCase();
	}
});
function caseSensitiveTransform(e, E) {
	return E in e ? e[E] : E;
}
function caseInsensitiveTransform(e, E) {
	return caseSensitiveTransform(e, E.toLowerCase());
}
const html$2 = create({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: commaSeparated,
		acceptCharset: spaceSeparated,
		accessKey: spaceSeparated,
		action: null,
		allow: null,
		allowFullScreen: boolean,
		allowPaymentRequest: boolean,
		allowUserMedia: boolean,
		alt: null,
		as: null,
		async: boolean,
		autoCapitalize: null,
		autoComplete: spaceSeparated,
		autoFocus: boolean,
		autoPlay: boolean,
		blocking: spaceSeparated,
		capture: null,
		charSet: null,
		checked: boolean,
		cite: null,
		className: spaceSeparated,
		cols: number,
		colSpan: null,
		content: null,
		contentEditable: booleanish,
		controls: boolean,
		controlsList: spaceSeparated,
		coords: number | commaSeparated,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: boolean,
		defer: boolean,
		dir: null,
		dirName: null,
		disabled: boolean,
		download: overloadedBoolean,
		draggable: booleanish,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: boolean,
		formTarget: null,
		headers: spaceSeparated,
		height: number,
		hidden: overloadedBoolean,
		high: number,
		href: null,
		hrefLang: null,
		htmlFor: spaceSeparated,
		httpEquiv: spaceSeparated,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: boolean,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: boolean,
		itemId: null,
		itemProp: spaceSeparated,
		itemRef: spaceSeparated,
		itemScope: boolean,
		itemType: spaceSeparated,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: boolean,
		low: number,
		manifest: null,
		max: null,
		maxLength: number,
		media: null,
		method: null,
		min: null,
		minLength: number,
		multiple: boolean,
		muted: boolean,
		name: null,
		nonce: null,
		noModule: boolean,
		noValidate: boolean,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: boolean,
		optimum: number,
		pattern: null,
		ping: spaceSeparated,
		placeholder: null,
		playsInline: boolean,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: boolean,
		referrerPolicy: null,
		rel: spaceSeparated,
		required: boolean,
		reversed: boolean,
		rows: number,
		rowSpan: number,
		sandbox: spaceSeparated,
		scope: null,
		scoped: boolean,
		seamless: boolean,
		selected: boolean,
		shadowRootClonable: boolean,
		shadowRootDelegatesFocus: boolean,
		shadowRootMode: null,
		shape: null,
		size: number,
		sizes: null,
		slot: null,
		span: number,
		spellCheck: booleanish,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: number,
		step: null,
		style: null,
		tabIndex: number,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: boolean,
		useMap: null,
		value: booleanish,
		width: number,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: spaceSeparated,
		axis: null,
		background: null,
		bgColor: null,
		border: number,
		borderColor: null,
		bottomMargin: number,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: boolean,
		declare: boolean,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: number,
		leftMargin: number,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: number,
		marginWidth: number,
		noResize: boolean,
		noHref: boolean,
		noShade: boolean,
		noWrap: boolean,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: number,
		rules: null,
		scheme: null,
		scrolling: booleanish,
		standby: null,
		summary: null,
		text: null,
		topMargin: number,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: number,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: boolean,
		disableRemotePlayback: boolean,
		prefix: null,
		property: null,
		results: number,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: caseInsensitiveTransform
}), svg$1 = create({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: commaOrSpaceSeparated,
		accentHeight: number,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: number,
		amplitude: number,
		arabicForm: null,
		ascent: number,
		attributeName: null,
		attributeType: null,
		azimuth: number,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: number,
		by: null,
		calcMode: null,
		capHeight: number,
		className: spaceSeparated,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: number,
		diffuseConstant: number,
		direction: null,
		display: null,
		dur: null,
		divisor: number,
		dominantBaseline: null,
		download: boolean,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: number,
		enableBackground: null,
		end: null,
		event: null,
		exponent: number,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: number,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: commaSeparated,
		g2: commaSeparated,
		glyphName: commaSeparated,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: number,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: number,
		horizOriginX: number,
		horizOriginY: number,
		id: null,
		ideographic: number,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: number,
		k: number,
		k1: number,
		k2: number,
		k3: number,
		k4: number,
		kernelMatrix: commaOrSpaceSeparated,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: number,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: number,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: number,
		overlineThickness: number,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: number,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: spaceSeparated,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: number,
		pointsAtY: number,
		pointsAtZ: number,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: commaOrSpaceSeparated,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: commaOrSpaceSeparated,
		rev: commaOrSpaceSeparated,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: commaOrSpaceSeparated,
		requiredFeatures: commaOrSpaceSeparated,
		requiredFonts: commaOrSpaceSeparated,
		requiredFormats: commaOrSpaceSeparated,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: number,
		specularExponent: number,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: number,
		strikethroughThickness: number,
		string: null,
		stroke: null,
		strokeDashArray: commaOrSpaceSeparated,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: number,
		strokeOpacity: number,
		strokeWidth: null,
		style: null,
		surfaceScale: number,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: commaOrSpaceSeparated,
		tabIndex: number,
		tableValues: null,
		target: null,
		targetX: number,
		targetY: number,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: commaOrSpaceSeparated,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: number,
		underlineThickness: number,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: number,
		values: null,
		vAlphabetic: number,
		vMathematical: number,
		vectorEffect: null,
		vHanging: number,
		vIdeographic: number,
		version: null,
		vertAdvY: number,
		vertOriginX: number,
		vertOriginY: number,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: number,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: caseSensitiveTransform
}), xlink = create({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, E) {
		return "xlink:" + E.slice(5).toLowerCase();
	}
}), xmlns = create({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: caseInsensitiveTransform
}), xml = create({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, E) {
		return "xml:" + E.slice(3).toLowerCase();
	}
}), hastToReact = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
};
var cap$1 = /[A-Z]/g, dash = /-[a-z]/g, valid = /^data[-\w.:]+$/i;
function find(e, E) {
	let D = normalize(E), O = E, k = Info;
	if (D in e.normal) return e.property[e.normal[D]];
	if (D.length > 4 && D.slice(0, 4) === "data" && valid.test(E)) {
		if (E.charAt(4) === "-") {
			let e = E.slice(5).replace(dash, camelcase);
			O = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = E.slice(4);
			if (!dash.test(e)) {
				let D = e.replace(cap$1, kebab);
				D.charAt(0) !== "-" && (D = "-" + D), E = "data" + D;
			}
		}
		k = DefinedInfo;
	}
	return new k(O, E);
}
function kebab(e) {
	return "-" + e.toLowerCase();
}
function camelcase(e) {
	return e.charAt(1).toUpperCase();
}
const html = merge([
	aria$1,
	html$2,
	xlink,
	xmlns,
	xml
], "html"), svg = merge([
	aria$1,
	svg$1,
	xlink,
	xmlns,
	xml
], "svg");
function parse$1(e) {
	let E = String(e || "").trim();
	return E ? E.split(/[ \t\n\r\f]+/g) : [];
}
function stringify$1(e) {
	return e.join(" ").trim();
}
var require_cjs$2 = /* @__PURE__ */ __commonJSMin(((e, E) => {
	var D = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, O = /\n/g, k = /^\s*/, A = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, j = /^:\s*/, M = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, N = /^[;\s]*/, P = /^\s+|\s+$/g, F = "\n", I = "/", L = "*", R = "", z = "comment", B = "declaration";
	function V(e, E) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		E ||= {};
		var P = 1, V = 1;
		function U(e) {
			var E = e.match(O);
			E && (P += E.length);
			var D = e.lastIndexOf(F);
			V = ~D ? e.length - D : V + e.length;
		}
		function W() {
			var e = {
				line: P,
				column: V
			};
			return function(E) {
				return E.position = new G(e), J(), E;
			};
		}
		function G(e) {
			this.start = e, this.end = {
				line: P,
				column: V
			}, this.source = E.source;
		}
		G.prototype.content = e;
		function K(D) {
			var O = /* @__PURE__ */ Error(E.source + ":" + P + ":" + V + ": " + D);
			if (O.reason = D, O.filename = E.source, O.line = P, O.column = V, O.source = e, !E.silent) throw O;
		}
		function q(E) {
			var D = E.exec(e);
			if (D) {
				var O = D[0];
				return U(O), e = e.slice(O.length), D;
			}
		}
		function J() {
			q(k);
		}
		function Y(e) {
			var E;
			for (e ||= []; E = X();) E !== !1 && e.push(E);
			return e;
		}
		function X() {
			var E = W();
			if (!(I != e.charAt(0) || L != e.charAt(1))) {
				for (var D = 2; R != e.charAt(D) && (L != e.charAt(D) || I != e.charAt(D + 1));) ++D;
				if (D += 2, R === e.charAt(D - 1)) return K("End of comment missing");
				var O = e.slice(2, D - 2);
				return V += 2, U(O), e = e.slice(D), V += 2, E({
					type: z,
					comment: O
				});
			}
		}
		function Z() {
			var e = W(), E = q(A);
			if (E) {
				if (X(), !q(j)) return K("property missing ':'");
				var O = q(M), k = e({
					type: B,
					property: H(E[0].replace(D, R)),
					value: O ? H(O[0].replace(D, R)) : R
				});
				return q(N), k;
			}
		}
		function Q() {
			var e = [];
			Y(e);
			for (var E; E = Z();) E !== !1 && (e.push(E), Y(e));
			return e;
		}
		return J(), Q();
	}
	function H(e) {
		return e ? e.replace(P, R) : R;
	}
	E.exports = V;
})), require_cjs$1 = /* @__PURE__ */ __commonJSMin(((e) => {
	var E = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = O;
	var D = E(require_cjs$2());
	function O(e, E) {
		let O = null;
		if (!e || typeof e != "string") return O;
		let k = (0, D.default)(e), A = typeof E == "function";
		return k.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: D, value: k } = e;
			A ? E(D, k, e) : k && (O ||= {}, O[D] = k);
		}), O;
	}
})), require_utilities = /* @__PURE__ */ __commonJSMin(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var E = /^--[a-zA-Z0-9_-]+$/, D = /-([a-z])/g, O = /^[^-]+$/, k = /^-(webkit|moz|ms|o|khtml)-/, A = /^-(ms)-/, j = function(e) {
		return !e || O.test(e) || E.test(e);
	}, M = function(e, E) {
		return E.toUpperCase();
	}, N = function(e, E) {
		return `${E}-`;
	};
	e.camelCase = function(e, E) {
		return E === void 0 && (E = {}), j(e) ? e : (e = e.toLowerCase(), e = E.reactCompat ? e.replace(A, N) : e.replace(k, N), e.replace(D, M));
	};
})), require_cjs = /* @__PURE__ */ __commonJSMin(((e, E) => {
	var D = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(require_cjs$1()), O = require_utilities();
	function k(e, E) {
		var k = {};
		return !e || typeof e != "string" || (0, D.default)(e, function(e, D) {
			e && D && (k[(0, O.camelCase)(e, E)] = D);
		}), k;
	}
	k.default = k, E.exports = k;
}));
const pointEnd = point$1("end"), pointStart = point$1("start");
function point$1(e) {
	return E;
	function E(E) {
		let D = E && E.position && E.position[e] || {};
		if (typeof D.line == "number" && D.line > 0 && typeof D.column == "number" && D.column > 0) return {
			line: D.line,
			column: D.column,
			offset: typeof D.offset == "number" && D.offset > -1 ? D.offset : void 0
		};
	}
}
function position(e) {
	let E = pointStart(e), D = pointEnd(e);
	if (E && D) return {
		start: E,
		end: D
	};
}
var import_cjs = /* @__PURE__ */ __toESM(require_cjs(), 1), own$5 = {}.hasOwnProperty, emptyMap = /* @__PURE__ */ new Map(), cap = /[A-Z]/g, tableElements = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), tableCellElement = new Set(["td", "th"]), docs = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function toJsxRuntime(e, E) {
	if (!E || E.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let D = E.filePath || void 0, O;
	if (E.development) {
		if (typeof E.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		O = developmentCreate(D, E.jsxDEV);
	} else {
		if (typeof E.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof E.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		O = productionCreate(D, E.jsx, E.jsxs);
	}
	let k = {
		Fragment: E.Fragment,
		ancestors: [],
		components: E.components || {},
		create: O,
		elementAttributeNameCase: E.elementAttributeNameCase || "react",
		evaluater: E.createEvaluater ? E.createEvaluater() : void 0,
		filePath: D,
		ignoreInvalidStyle: E.ignoreInvalidStyle || !1,
		passKeys: E.passKeys !== !1,
		passNode: E.passNode || !1,
		schema: E.space === "svg" ? svg : html,
		stylePropertyNameCase: E.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: E.tableCellAlignToStyle !== !1
	}, A = one$2(k, e, void 0);
	return A && typeof A != "string" ? A : k.create(e, k.Fragment, { children: A || void 0 }, void 0);
}
function one$2(e, E, D) {
	if (E.type === "element") return element$4(e, E, D);
	if (E.type === "mdxFlowExpression" || E.type === "mdxTextExpression") return mdxExpression(e, E);
	if (E.type === "mdxJsxFlowElement" || E.type === "mdxJsxTextElement") return mdxJsxElement(e, E, D);
	if (E.type === "mdxjsEsm") return mdxEsm(e, E);
	if (E.type === "root") return root$4(e, E, D);
	if (E.type === "text") return text$4(e, E);
}
function element$4(e, E, D) {
	let O = e.schema, k = O;
	E.tagName.toLowerCase() === "svg" && O.space === "html" && (k = svg, e.schema = k), e.ancestors.push(E);
	let A = findComponentFromName(e, E.tagName, !1), j = createElementProps(e, E), M = createChildren(e, E);
	return tableElements.has(E.tagName) && (M = M.filter(function(e) {
		return typeof e == "string" ? !whitespace(e) : !0;
	})), addNode(e, j, A, E), addChildren(j, M), e.ancestors.pop(), e.schema = O, e.create(E, A, j, D);
}
function mdxExpression(e, E) {
	if (E.data && E.data.estree && e.evaluater) {
		let D = E.data.estree.body[0];
		return D.type, e.evaluater.evaluateExpression(D.expression);
	}
	crashEstree(e, E.position);
}
function mdxEsm(e, E) {
	if (E.data && E.data.estree && e.evaluater) return e.evaluater.evaluateProgram(E.data.estree);
	crashEstree(e, E.position);
}
function mdxJsxElement(e, E, D) {
	let O = e.schema, k = O;
	E.name === "svg" && O.space === "html" && (k = svg, e.schema = k), e.ancestors.push(E);
	let A = E.name === null ? e.Fragment : findComponentFromName(e, E.name, !0), j = createJsxElementProps(e, E), M = createChildren(e, E);
	return addNode(e, j, A, E), addChildren(j, M), e.ancestors.pop(), e.schema = O, e.create(E, A, j, D);
}
function root$4(e, E, D) {
	let O = {};
	return addChildren(O, createChildren(e, E)), e.create(E, e.Fragment, O, D);
}
function text$4(e, E) {
	return E.value;
}
function addNode(e, E, D, O) {
	typeof D != "string" && D !== e.Fragment && e.passNode && (E.node = O);
}
function addChildren(e, E) {
	if (E.length > 0) {
		let D = E.length > 1 ? E : E[0];
		D && (e.children = D);
	}
}
function productionCreate(e, E, D) {
	return O;
	function O(e, O, k, A) {
		let j = Array.isArray(k.children) ? D : E;
		return A ? j(O, k, A) : j(O, k);
	}
}
function developmentCreate(e, E) {
	return D;
	function D(D, O, k, A) {
		let j = Array.isArray(k.children), M = pointStart(D);
		return E(O, k, A, j, {
			columnNumber: M ? M.column - 1 : void 0,
			fileName: e,
			lineNumber: M ? M.line : void 0
		}, void 0);
	}
}
function createElementProps(e, E) {
	let D = {}, O, k;
	for (k in E.properties) if (k !== "children" && own$5.call(E.properties, k)) {
		let A = createProperty$1(e, k, E.properties[k]);
		if (A) {
			let [k, j] = A;
			e.tableCellAlignToStyle && k === "align" && typeof j == "string" && tableCellElement.has(E.tagName) ? O = j : D[k] = j;
		}
	}
	if (O) {
		let E = D.style ||= {};
		E[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = O;
	}
	return D;
}
function createJsxElementProps(e, E) {
	let D = {};
	for (let O of E.attributes) if (O.type === "mdxJsxExpressionAttribute") if (O.data && O.data.estree && e.evaluater) {
		let E = O.data.estree.body[0];
		E.type;
		let k = E.expression;
		k.type;
		let A = k.properties[0];
		A.type, Object.assign(D, e.evaluater.evaluateExpression(A.argument));
	} else crashEstree(e, E.position);
	else {
		let k = O.name, A;
		if (O.value && typeof O.value == "object") if (O.value.data && O.value.data.estree && e.evaluater) {
			let E = O.value.data.estree.body[0];
			E.type, A = e.evaluater.evaluateExpression(E.expression);
		} else crashEstree(e, E.position);
		else A = O.value === null ? !0 : O.value;
		D[k] = A;
	}
	return D;
}
function createChildren(e, E) {
	let D = [], O = -1, k = e.passKeys ? /* @__PURE__ */ new Map() : emptyMap;
	for (; ++O < E.children.length;) {
		let A = E.children[O], j;
		if (e.passKeys) {
			let e = A.type === "element" ? A.tagName : A.type === "mdxJsxFlowElement" || A.type === "mdxJsxTextElement" ? A.name : void 0;
			if (e) {
				let E = k.get(e) || 0;
				j = e + "-" + E, k.set(e, E + 1);
			}
		}
		let M = one$2(e, A, j);
		M !== void 0 && D.push(M);
	}
	return D;
}
function createProperty$1(e, E, D) {
	let O = find(e.schema, E);
	if (!(D == null || typeof D == "number" && Number.isNaN(D))) {
		if (Array.isArray(D) && (D = O.commaSeparated ? stringify(D) : stringify$1(D)), O.property === "style") {
			let E = typeof D == "object" ? D : parseStyle(e, String(D));
			return e.stylePropertyNameCase === "css" && (E = transformStylesToCssCasing(E)), ["style", E];
		}
		return [e.elementAttributeNameCase === "react" && O.space ? hastToReact[O.property] || O.property : O.attribute, D];
	}
}
function parseStyle(e, E) {
	try {
		return (0, import_cjs.default)(E, { reactCompat: !0 });
	} catch (E) {
		if (e.ignoreInvalidStyle) return {};
		let D = E, O = new VFileMessage("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: D,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw O.file = e.filePath || void 0, O.url = docs + "#cannot-parse-style-attribute", O;
	}
}
function findComponentFromName(e, E, D) {
	let O;
	if (!D) O = {
		type: "Literal",
		value: E
	};
	else if (E.includes(".")) {
		let e = E.split("."), D = -1, k;
		for (; ++D < e.length;) {
			let E = name(e[D]) ? {
				type: "Identifier",
				name: e[D]
			} : {
				type: "Literal",
				value: e[D]
			};
			k = k ? {
				type: "MemberExpression",
				object: k,
				property: E,
				computed: !!(D && E.type === "Literal"),
				optional: !1
			} : E;
		}
		O = k;
	} else O = name(E) && !/^[a-z]/.test(E) ? {
		type: "Identifier",
		name: E
	} : {
		type: "Literal",
		value: E
	};
	if (O.type === "Literal") {
		let E = O.value;
		return own$5.call(e.components, E) ? e.components[E] : E;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(O);
	crashEstree(e);
}
function crashEstree(e, E) {
	let D = new VFileMessage("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: E,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw D.file = e.filePath || void 0, D.url = docs + "#cannot-handle-mdx-estrees-without-createevaluater", D;
}
function transformStylesToCssCasing(e) {
	let E = {}, D;
	for (D in e) own$5.call(e, D) && (E[transformStyleToCssCasing(D)] = e[D]);
	return E;
}
function transformStyleToCssCasing(e) {
	let E = e.replace(cap, toDash);
	return E.slice(0, 3) === "ms-" && (E = "-" + E), E;
}
function toDash(e) {
	return "-" + e.toLowerCase();
}
const urlAttributes = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
};
function normalizeUri(e) {
	let E = [], D = -1, O = 0, k = 0;
	for (; ++D < e.length;) {
		let A = e.charCodeAt(D), j = "";
		if (A === 37 && asciiAlphanumeric(e.charCodeAt(D + 1)) && asciiAlphanumeric(e.charCodeAt(D + 2))) k = 2;
		else if (A < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(A)) || (j = String.fromCharCode(A));
		else if (A > 55295 && A < 57344) {
			let E = e.charCodeAt(D + 1);
			A < 56320 && E > 56319 && E < 57344 ? (j = String.fromCharCode(A, E), k = 1) : j = "�";
		} else j = String.fromCharCode(A);
		j &&= (E.push(e.slice(O, D), encodeURIComponent(j)), O = D + k + 1, ""), k &&= (D += k, 0);
	}
	return E.join("") + e.slice(O);
}
function blockquote(e, E) {
	let D = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(E), !0)
	};
	return e.patch(E, D), e.applyData(E, D);
}
function hardBreak(e, E) {
	let D = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(E, D), [e.applyData(E, D), {
		type: "text",
		value: "\n"
	}];
}
function code(e, E) {
	let D = E.value ? E.value + "\n" : "", O = {}, k = E.lang ? E.lang.split(/\s+/) : [];
	k.length > 0 && (O.className = ["language-" + k[0]]);
	let A = {
		type: "element",
		tagName: "code",
		properties: O,
		children: [{
			type: "text",
			value: D
		}]
	};
	return E.meta && (A.data = { meta: E.meta }), e.patch(E, A), A = e.applyData(E, A), A = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [A]
	}, e.patch(E, A), A;
}
function strikethrough(e, E) {
	let D = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(E)
	};
	return e.patch(E, D), e.applyData(E, D);
}
function emphasis(e, E) {
	let D = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(E)
	};
	return e.patch(E, D), e.applyData(E, D);
}
function footnoteReference(e, E) {
	let D = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", O = String(E.identifier).toUpperCase(), k = normalizeUri(O.toLowerCase()), A = e.footnoteOrder.indexOf(O), j, M = e.footnoteCounts.get(O);
	M === void 0 ? (M = 0, e.footnoteOrder.push(O), j = e.footnoteOrder.length) : j = A + 1, M += 1, e.footnoteCounts.set(O, M);
	let N = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + D + "fn-" + k,
			id: D + "fnref-" + k + (M > 1 ? "-" + M : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(j)
		}]
	};
	e.patch(E, N);
	let P = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [N]
	};
	return e.patch(E, P), e.applyData(E, P);
}
function heading(e, E) {
	let D = {
		type: "element",
		tagName: "h" + E.depth,
		properties: {},
		children: e.all(E)
	};
	return e.patch(E, D), e.applyData(E, D);
}
function html$1(e, E) {
	if (e.options.allowDangerousHtml) {
		let D = {
			type: "raw",
			value: E.value
		};
		return e.patch(E, D), e.applyData(E, D);
	}
}
function revert(e, E) {
	let D = E.referenceType, O = "]";
	if (D === "collapsed" ? O += "[]" : D === "full" && (O += "[" + (E.label || E.identifier) + "]"), E.type === "imageReference") return [{
		type: "text",
		value: "![" + E.alt + O
	}];
	let k = e.all(E), A = k[0];
	A && A.type === "text" ? A.value = "[" + A.value : k.unshift({
		type: "text",
		value: "["
	});
	let j = k[k.length - 1];
	return j && j.type === "text" ? j.value += O : k.push({
		type: "text",
		value: O
	}), k;
}
function imageReference(e, E) {
	let D = String(E.identifier).toUpperCase(), O = e.definitionById.get(D);
	if (!O) return revert(e, E);
	let k = {
		src: normalizeUri(O.url || ""),
		alt: E.alt
	};
	O.title !== null && O.title !== void 0 && (k.title = O.title);
	let A = {
		type: "element",
		tagName: "img",
		properties: k,
		children: []
	};
	return e.patch(E, A), e.applyData(E, A);
}
function image(e, E) {
	let D = { src: normalizeUri(E.url) };
	E.alt !== null && E.alt !== void 0 && (D.alt = E.alt), E.title !== null && E.title !== void 0 && (D.title = E.title);
	let O = {
		type: "element",
		tagName: "img",
		properties: D,
		children: []
	};
	return e.patch(E, O), e.applyData(E, O);
}
function inlineCode(e, E) {
	let D = {
		type: "text",
		value: E.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(E, D);
	let O = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [D]
	};
	return e.patch(E, O), e.applyData(E, O);
}
function linkReference(e, E) {
	let D = String(E.identifier).toUpperCase(), O = e.definitionById.get(D);
	if (!O) return revert(e, E);
	let k = { href: normalizeUri(O.url || "") };
	O.title !== null && O.title !== void 0 && (k.title = O.title);
	let A = {
		type: "element",
		tagName: "a",
		properties: k,
		children: e.all(E)
	};
	return e.patch(E, A), e.applyData(E, A);
}
function link(e, E) {
	let D = { href: normalizeUri(E.url) };
	E.title !== null && E.title !== void 0 && (D.title = E.title);
	let O = {
		type: "element",
		tagName: "a",
		properties: D,
		children: e.all(E)
	};
	return e.patch(E, O), e.applyData(E, O);
}
function listItem(e, E, D) {
	let O = e.all(E), k = D ? listLoose(D) : listItemLoose(E), A = {}, j = [];
	if (typeof E.checked == "boolean") {
		let e = O[0], D;
		e && e.type === "element" && e.tagName === "p" ? D = e : (D = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, O.unshift(D)), D.children.length > 0 && D.children.unshift({
			type: "text",
			value: " "
		}), D.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: E.checked,
				disabled: !0
			},
			children: []
		}), A.className = ["task-list-item"];
	}
	let M = -1;
	for (; ++M < O.length;) {
		let e = O[M];
		(k || M !== 0 || e.type !== "element" || e.tagName !== "p") && j.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !k ? j.push(...e.children) : j.push(e);
	}
	let N = O[O.length - 1];
	N && (k || N.type !== "element" || N.tagName !== "p") && j.push({
		type: "text",
		value: "\n"
	});
	let P = {
		type: "element",
		tagName: "li",
		properties: A,
		children: j
	};
	return e.patch(E, P), e.applyData(E, P);
}
function listLoose(e) {
	let E = !1;
	if (e.type === "list") {
		E = e.spread || !1;
		let D = e.children, O = -1;
		for (; !E && ++O < D.length;) E = listItemLoose(D[O]);
	}
	return E;
}
function listItemLoose(e) {
	return e.spread ?? e.children.length > 1;
}
function list(e, E) {
	let D = {}, O = e.all(E), k = -1;
	for (typeof E.start == "number" && E.start !== 1 && (D.start = E.start); ++k < O.length;) {
		let e = O[k];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			D.className = ["contains-task-list"];
			break;
		}
	}
	let A = {
		type: "element",
		tagName: E.ordered ? "ol" : "ul",
		properties: D,
		children: e.wrap(O, !0)
	};
	return e.patch(E, A), e.applyData(E, A);
}
function paragraph(e, E) {
	let D = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(E)
	};
	return e.patch(E, D), e.applyData(E, D);
}
function root$3(e, E) {
	let D = {
		type: "root",
		children: e.wrap(e.all(E))
	};
	return e.patch(E, D), e.applyData(E, D);
}
function strong(e, E) {
	let D = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(E)
	};
	return e.patch(E, D), e.applyData(E, D);
}
function table(e, E) {
	let D = e.all(E), O = D.shift(), k = [];
	if (O) {
		let D = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([O], !0)
		};
		e.patch(E.children[0], D), k.push(D);
	}
	if (D.length > 0) {
		let O = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(D, !0)
		}, A = pointStart(E.children[1]), j = pointEnd(E.children[E.children.length - 1]);
		A && j && (O.position = {
			start: A,
			end: j
		}), k.push(O);
	}
	let A = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(k, !0)
	};
	return e.patch(E, A), e.applyData(E, A);
}
function tableRow(e, E, D) {
	let O = D ? D.children : void 0, k = (O ? O.indexOf(E) : 1) === 0 ? "th" : "td", A = D && D.type === "table" ? D.align : void 0, j = A ? A.length : E.children.length, M = -1, N = [];
	for (; ++M < j;) {
		let D = E.children[M], O = {}, j = A ? A[M] : void 0;
		j && (O.align = j);
		let P = {
			type: "element",
			tagName: k,
			properties: O,
			children: []
		};
		D && (P.children = e.all(D), e.patch(D, P), P = e.applyData(D, P)), N.push(P);
	}
	let P = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(N, !0)
	};
	return e.patch(E, P), e.applyData(E, P);
}
function tableCell(e, E) {
	let D = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(E)
	};
	return e.patch(E, D), e.applyData(E, D);
}
var tab = 9, space = 32;
function trimLines(e) {
	let E = String(e), D = /\r?\n|\r/g, O = D.exec(E), k = 0, A = [];
	for (; O;) A.push(trimLine(E.slice(k, O.index), k > 0, !0), O[0]), k = O.index + O[0].length, O = D.exec(E);
	return A.push(trimLine(E.slice(k), k > 0, !1)), A.join("");
}
function trimLine(e, E, D) {
	let O = 0, k = e.length;
	if (E) {
		let E = e.codePointAt(O);
		for (; E === tab || E === space;) O++, E = e.codePointAt(O);
	}
	if (D) {
		let E = e.codePointAt(k - 1);
		for (; E === tab || E === space;) k--, E = e.codePointAt(k - 1);
	}
	return k > O ? e.slice(O, k) : "";
}
function text$3(e, E) {
	let D = {
		type: "text",
		value: trimLines(String(E.value))
	};
	return e.patch(E, D), e.applyData(E, D);
}
function thematicBreak(e, E) {
	let D = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(E, D), e.applyData(E, D);
}
const handlers = {
	blockquote,
	break: hardBreak,
	code,
	delete: strikethrough,
	emphasis,
	footnoteReference,
	heading,
	html: html$1,
	imageReference,
	image,
	inlineCode,
	linkReference,
	link,
	listItem,
	list,
	paragraph,
	root: root$3,
	strong,
	table,
	tableCell,
	tableRow,
	text: text$3,
	thematicBreak,
	toml: ignore,
	yaml: ignore,
	definition: ignore,
	footnoteDefinition: ignore
};
function ignore() {}
var env = typeof self == "object" ? self : globalThis, guard = (e, E) => {
	switch (e) {
		case "Function":
		case "SharedWorker":
		case "Worker":
		case "eval":
		case "setInterval":
		case "setTimeout": throw TypeError("unable to deserialize " + e);
	}
	return new env[e](E);
}, deserializer = (e, E) => {
	let D = (E, D) => (e.set(D, E), E), O = (k) => {
		if (e.has(k)) return e.get(k);
		let [A, j] = E[k];
		switch (A) {
			case 0:
			case -1: return D(j, k);
			case 1: {
				let e = D([], k);
				for (let E of j) e.push(O(E));
				return e;
			}
			case 2: {
				let e = D({}, k);
				for (let [E, D] of j) e[O(E)] = O(D);
				return e;
			}
			case 3: return D(new Date(j), k);
			case 4: {
				let { source: e, flags: E } = j;
				return D(new RegExp(e, E), k);
			}
			case 5: {
				let e = D(/* @__PURE__ */ new Map(), k);
				for (let [E, D] of j) e.set(O(E), O(D));
				return e;
			}
			case 6: {
				let e = D(/* @__PURE__ */ new Set(), k);
				for (let E of j) e.add(O(E));
				return e;
			}
			case 7: {
				let { name: e, message: E } = j;
				return D(guard(e, E), k);
			}
			case 8: return D(BigInt(j), k);
			case "BigInt": return D(Object(BigInt(j)), k);
			case "ArrayBuffer": return D(new Uint8Array(j).buffer, j);
			case "DataView": {
				let { buffer: e } = new Uint8Array(j);
				return D(new DataView(e), j);
			}
		}
		return D(guard(A, j), k);
	};
	return O;
};
const deserialize = (e) => deserializer(/* @__PURE__ */ new Map(), e)(0);
var EMPTY = "", { toString } = {}, { keys } = Object, typeOf = (e) => {
	let E = typeof e;
	if (E !== "object" || !e) return [0, E];
	let D = toString.call(e).slice(8, -1);
	switch (D) {
		case "Array": return [1, EMPTY];
		case "Object": return [2, EMPTY];
		case "Date": return [3, EMPTY];
		case "RegExp": return [4, EMPTY];
		case "Map": return [5, EMPTY];
		case "Set": return [6, EMPTY];
		case "DataView": return [1, D];
	}
	return D.includes("Array") ? [1, D] : D.includes("Error") ? [7, D] : [2, D];
}, shouldSkip = ([e, E]) => e === 0 && (E === "function" || E === "symbol"), serializer = (e, E, D, O) => {
	let k = (e, E) => {
		let k = O.push(e) - 1;
		return D.set(E, k), k;
	}, A = (O) => {
		if (D.has(O)) return D.get(O);
		let [j, M] = typeOf(O);
		switch (j) {
			case 0: {
				let E = O;
				switch (M) {
					case "bigint":
						j = 8, E = O.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + M);
						E = null;
						break;
					case "undefined": return k([-1], O);
				}
				return k([j, E], O);
			}
			case 1: {
				if (M) {
					let e = O;
					return M === "DataView" ? e = new Uint8Array(O.buffer) : M === "ArrayBuffer" && (e = new Uint8Array(O)), k([M, [...e]], O);
				}
				let e = [], E = k([j, e], O);
				for (let E of O) e.push(A(E));
				return E;
			}
			case 2: {
				if (M) switch (M) {
					case "BigInt": return k([M, O.toString()], O);
					case "Boolean":
					case "Number":
					case "String": return k([M, O.valueOf()], O);
				}
				if (E && "toJSON" in O) return A(O.toJSON());
				let D = [], N = k([j, D], O);
				for (let E of keys(O)) (e || !shouldSkip(typeOf(O[E]))) && D.push([A(E), A(O[E])]);
				return N;
			}
			case 3: return k([j, O.toISOString()], O);
			case 4: {
				let { source: e, flags: E } = O;
				return k([j, {
					source: e,
					flags: E
				}], O);
			}
			case 5: {
				let E = [], D = k([j, E], O);
				for (let [D, k] of O) (e || !(shouldSkip(typeOf(D)) || shouldSkip(typeOf(k)))) && E.push([A(D), A(k)]);
				return D;
			}
			case 6: {
				let E = [], D = k([j, E], O);
				for (let D of O) (e || !shouldSkip(typeOf(D))) && E.push(A(D));
				return D;
			}
		}
		let { message: N } = O;
		return k([j, {
			name: M,
			message: N
		}], O);
	};
	return A;
};
const serialize = (e, { json: E, lossy: D } = {}) => {
	let O = [];
	return serializer(!(E || D), !!E, /* @__PURE__ */ new Map(), O)(e), O;
};
var esm_default = typeof structuredClone == "function" ? (e, E) => E && ("json" in E || "lossy" in E) ? deserialize(serialize(e, E)) : structuredClone(e) : (e, E) => deserialize(serialize(e, E));
function defaultFootnoteBackContent(e, E) {
	let D = [{
		type: "text",
		value: "↩"
	}];
	return E > 1 && D.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(E)
		}]
	}), D;
}
function defaultFootnoteBackLabel(e, E) {
	return "Back to reference " + (e + 1) + (E > 1 ? "-" + E : "");
}
function footer(e) {
	let E = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", D = e.options.footnoteBackContent || defaultFootnoteBackContent, O = e.options.footnoteBackLabel || defaultFootnoteBackLabel, k = e.options.footnoteLabel || "Footnotes", A = e.options.footnoteLabelTagName || "h2", j = e.options.footnoteLabelProperties || { className: ["sr-only"] }, M = [], N = -1;
	for (; ++N < e.footnoteOrder.length;) {
		let k = e.footnoteById.get(e.footnoteOrder[N]);
		if (!k) continue;
		let A = e.all(k), j = String(k.identifier).toUpperCase(), P = normalizeUri(j.toLowerCase()), F = 0, I = [], L = e.footnoteCounts.get(j);
		for (; L !== void 0 && ++F <= L;) {
			I.length > 0 && I.push({
				type: "text",
				value: " "
			});
			let e = typeof D == "string" ? D : D(N, F);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), I.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + E + "fnref-" + P + (F > 1 ? "-" + F : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof O == "string" ? O : O(N, F),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let R = A[A.length - 1];
		if (R && R.type === "element" && R.tagName === "p") {
			let e = R.children[R.children.length - 1];
			e && e.type === "text" ? e.value += " " : R.children.push({
				type: "text",
				value: " "
			}), R.children.push(...I);
		} else A.push(...I);
		let z = {
			type: "element",
			tagName: "li",
			properties: { id: E + "fn-" + P },
			children: e.wrap(A, !0)
		};
		e.patch(k, z), M.push(z);
	}
	if (M.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: A,
				properties: {
					...esm_default(j),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: k
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(M, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
var own$4 = {}.hasOwnProperty, emptyOptions$1 = {};
function createState(e, E) {
	let D = E || emptyOptions$1, O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), A = {
		all: M,
		applyData,
		definitionById: O,
		footnoteById: k,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...handlers,
			...D.handlers
		},
		one: j,
		options: D,
		patch: patch$3,
		wrap
	};
	return visit(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let E = e.type === "definition" ? O : k, D = String(e.identifier).toUpperCase();
			E.has(D) || E.set(D, e);
		}
	}), A;
	function j(e, E) {
		let D = e.type, O = A.handlers[D];
		if (own$4.call(A.handlers, D) && O) return O(A, e, E);
		if (A.options.passThrough && A.options.passThrough.includes(D)) {
			if ("children" in e) {
				let { children: E, ...D } = e, O = esm_default(D);
				return O.children = A.all(e), O;
			}
			return esm_default(e);
		}
		return (A.options.unknownHandler || defaultUnknownHandler)(A, e, E);
	}
	function M(e) {
		let E = [];
		if ("children" in e) {
			let D = e.children, O = -1;
			for (; ++O < D.length;) {
				let k = A.one(D[O], e);
				if (k) {
					if (O && D[O - 1].type === "break" && (!Array.isArray(k) && k.type === "text" && (k.value = trimMarkdownSpaceStart(k.value)), !Array.isArray(k) && k.type === "element")) {
						let e = k.children[0];
						e && e.type === "text" && (e.value = trimMarkdownSpaceStart(e.value));
					}
					Array.isArray(k) ? E.push(...k) : E.push(k);
				}
			}
		}
		return E;
	}
}
function patch$3(e, E) {
	e.position && (E.position = position(e));
}
function applyData(e, E) {
	let D = E;
	if (e && e.data) {
		let E = e.data.hName, O = e.data.hChildren, k = e.data.hProperties;
		typeof E == "string" && (D.type === "element" ? D.tagName = E : D = {
			type: "element",
			tagName: E,
			properties: {},
			children: "children" in D ? D.children : [D]
		}), D.type === "element" && k && Object.assign(D.properties, esm_default(k)), "children" in D && D.children && O != null && (D.children = O);
	}
	return D;
}
function defaultUnknownHandler(e, E) {
	let D = E.data || {}, O = "value" in E && !(own$4.call(D, "hProperties") || own$4.call(D, "hChildren")) ? {
		type: "text",
		value: E.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(E)
	};
	return e.patch(E, O), e.applyData(E, O);
}
function wrap(e, E) {
	let D = [], O = -1;
	for (E && D.push({
		type: "text",
		value: "\n"
	}); ++O < e.length;) O && D.push({
		type: "text",
		value: "\n"
	}), D.push(e[O]);
	return E && e.length > 0 && D.push({
		type: "text",
		value: "\n"
	}), D;
}
function trimMarkdownSpaceStart(e) {
	let E = 0, D = e.charCodeAt(E);
	for (; D === 9 || D === 32;) E++, D = e.charCodeAt(E);
	return e.slice(E);
}
function toHast(e, E) {
	let D = createState(e, E), O = D.one(e, void 0), k = footer(D), A = Array.isArray(O) ? {
		type: "root",
		children: O
	} : O || {
		type: "root",
		children: []
	};
	return k && ("children" in A, A.children.push({
		type: "text",
		value: "\n"
	}, k)), A;
}
function remarkRehype(e, E) {
	return e && "run" in e ? async function(D, O) {
		let k = toHast(D, {
			file: O,
			...E
		});
		await e.run(k, O);
	} : function(D, O) {
		return toHast(D, {
			file: O,
			...e || E
		});
	};
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
require_react();
var emptyPlugins = [], emptyRemarkRehypeOptions = { allowDangerousHtml: !0 }, safeProtocol$1 = /^(https?|ircs?|mailto|xmpp)$/i, deprecations = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	},
	{
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	},
	{
		from: "className",
		id: "remove-classname"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function Markdown(e) {
	let E = createProcessor(e), D = createFile(e);
	return post(E.runSync(E.parse(D), D), e);
}
function createProcessor(e) {
	let E = e.rehypePlugins || emptyPlugins, D = e.remarkPlugins || emptyPlugins, O = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...emptyRemarkRehypeOptions
	} : emptyRemarkRehypeOptions;
	return unified().use(remarkParse).use(D).use(remarkRehype, O).use(E);
}
function createFile(e) {
	let E = e.children || "", D = new VFile();
	return typeof E == "string" ? D.value = E : "" + E, D;
}
function post(e, E) {
	let D = E.allowedElements, O = E.allowElement, k = E.components, A = E.disallowedElements, j = E.skipHtml, M = E.unwrapDisallowed, N = E.urlTransform || defaultUrlTransform;
	for (let e of deprecations) Object.hasOwn(E, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return visit(e, P), toJsxRuntime(e, {
		Fragment: import_jsx_runtime.Fragment,
		components: k,
		ignoreInvalidStyle: !0,
		jsx: import_jsx_runtime.jsx,
		jsxs: import_jsx_runtime.jsxs,
		passKeys: !0,
		passNode: !0
	});
	function P(e, E, k) {
		if (e.type === "raw" && k && typeof E == "number") return j ? k.children.splice(E, 1) : k.children[E] = {
			type: "text",
			value: e.value
		}, E;
		if (e.type === "element") {
			let E;
			for (E in urlAttributes) if (Object.hasOwn(urlAttributes, E) && Object.hasOwn(e.properties, E)) {
				let D = e.properties[E], O = urlAttributes[E];
				(O === null || O.includes(e.tagName)) && (e.properties[E] = N(String(D || ""), E, e));
			}
		}
		if (e.type === "element") {
			let j = D ? !D.includes(e.tagName) : A ? A.includes(e.tagName) : !1;
			if (!j && O && typeof E == "number" && (j = !O(e, E, k)), j && k && typeof E == "number") return M && e.children ? k.children.splice(E, 1, ...e.children) : k.children.splice(E, 1), E;
		}
	}
}
function defaultUrlTransform(e) {
	let E = e.indexOf(":"), D = e.indexOf("?"), O = e.indexOf("#"), k = e.indexOf("/");
	return E === -1 || k !== -1 && E > k || D !== -1 && E > D || O !== -1 && E > O || safeProtocol$1.test(e.slice(0, E)) ? e : "";
}
var own$3 = {}.hasOwnProperty;
function zwitch(e, E) {
	let D = E || {};
	function O(E, ...D) {
		let k = O.invalid, A = O.handlers;
		if (E && own$3.call(E, e)) {
			let D = String(E[e]);
			k = own$3.call(A, D) ? A[D] : O.unknown;
		}
		if (k) return k.call(this, E, ...D);
	}
	return O.handlers = D.handlers || {}, O.invalid = D.invalid, O.unknown = D.unknown, O;
}
var search = /[#.]/g;
function parseSelector(e, E) {
	let D = e || "", O = {}, k = 0, A, j;
	for (; k < D.length;) {
		search.lastIndex = k;
		let e = search.exec(D), E = D.slice(k, e ? e.index : D.length);
		E && (A ? A === "#" ? O.id = E : Array.isArray(O.className) ? O.className.push(E) : O.className = [E] : j = E, k += E.length), e && (A = e[0], k++);
	}
	return {
		type: "element",
		tagName: j || E || "div",
		properties: O,
		children: []
	};
}
function createH(e, E, D) {
	let O = D ? createAdjustMap(D) : void 0;
	function k(D, k, ...A) {
		let j;
		if (D == null) {
			j = {
				type: "root",
				children: []
			};
			let e = k;
			A.unshift(e);
		} else {
			j = parseSelector(D, E);
			let M = j.tagName.toLowerCase(), N = O ? O.get(M) : void 0;
			if (j.tagName = N || M, isChild(k)) A.unshift(k);
			else for (let [E, D] of Object.entries(k)) addProperty(e, j.properties, E, D);
		}
		for (let e of A) addChild(j.children, e);
		return j.type === "element" && j.tagName === "template" && (j.content = {
			type: "root",
			children: j.children
		}, j.children = []), j;
	}
	return k;
}
function isChild(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !0;
	if (typeof e.type != "string") return !1;
	let E = e, D = Object.keys(e);
	for (let e of D) {
		let D = E[e];
		if (D && typeof D == "object") {
			if (!Array.isArray(D)) return !0;
			let e = D;
			for (let E of e) if (typeof E != "number" && typeof E != "string") return !0;
		}
	}
	return !!("children" in e && Array.isArray(e.children));
}
function addProperty(e, E, D, O) {
	let k = find(e, D), A;
	if (O != null) {
		if (typeof O == "number") {
			if (Number.isNaN(O)) return;
			A = O;
		} else A = typeof O == "boolean" ? O : typeof O == "string" ? k.spaceSeparated ? parse$1(O) : k.commaSeparated ? parse(O) : k.commaOrSpaceSeparated ? parse$1(parse(O).join(" ")) : parsePrimitive(k, k.property, O) : Array.isArray(O) ? [...O] : k.property === "style" ? style(O) : String(O);
		if (Array.isArray(A)) {
			let e = [];
			for (let E of A) e.push(parsePrimitive(k, k.property, E));
			A = e;
		}
		k.property === "className" && Array.isArray(E.className) && (A = E.className.concat(A)), E[k.property] = A;
	}
}
function addChild(e, E) {
	if (E != null) if (typeof E == "number" || typeof E == "string") e.push({
		type: "text",
		value: String(E)
	});
	else if (Array.isArray(E)) for (let D of E) addChild(e, D);
	else if (typeof E == "object" && "type" in E) E.type === "root" ? addChild(e, E.children) : e.push(E);
	else throw Error("Expected node, nodes, or string, got `" + E + "`");
}
function parsePrimitive(e, E, D) {
	if (typeof D == "string") {
		if (e.number && D && !Number.isNaN(Number(D))) return Number(D);
		if ((e.boolean || e.overloadedBoolean) && (D === "" || normalize(D) === normalize(E))) return !0;
	}
	return D;
}
function style(e) {
	let E = [];
	for (let [D, O] of Object.entries(e)) E.push([D, O].join(": "));
	return E.join("; ");
}
function createAdjustMap(e) {
	let E = /* @__PURE__ */ new Map();
	for (let D of e) E.set(D.toLowerCase(), D);
	return E;
}
const svgCaseSensitiveTagNames = /* @__PURE__ */ "altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.solidColor.textArea.textPath".split("."), h = createH(html, "div"), s = createH(svg, "g", svgCaseSensitiveTagNames);
function location(e) {
	let E = String(e), D = [];
	return {
		toOffset: k,
		toPoint: O
	};
	function O(e) {
		if (typeof e == "number" && e > -1 && e <= E.length) {
			let O = 0;
			for (;;) {
				let k = D[O];
				if (k === void 0) {
					let e = next(E, D[O - 1]);
					k = e === -1 ? E.length + 1 : e + 1, D[O] = k;
				}
				if (k > e) return {
					line: O + 1,
					column: e - (O > 0 ? D[O - 1] : 0) + 1,
					offset: e
				};
				O++;
			}
		}
	}
	function k(e) {
		if (e && typeof e.line == "number" && typeof e.column == "number" && !Number.isNaN(e.line) && !Number.isNaN(e.column)) {
			for (; D.length < e.line;) {
				let e = D[D.length - 1], O = next(E, e), k = O === -1 ? E.length + 1 : O + 1;
				if (e === k) break;
				D.push(k);
			}
			let O = (e.line > 1 ? D[e.line - 2] : 0) + e.column - 1;
			if (O < D[e.line - 1]) return O;
		}
	}
}
function next(e, E) {
	let D = e.indexOf("\r", E), O = e.indexOf("\n", E);
	return O === -1 ? D : D === -1 || D + 1 === O ? O : D < O ? D : O;
}
const webNamespaces = {
	html: "http://www.w3.org/1999/xhtml",
	mathml: "http://www.w3.org/1998/Math/MathML",
	svg: "http://www.w3.org/2000/svg",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
var own$2 = {}.hasOwnProperty, proto = Object.prototype;
function fromParse5(e, E) {
	let D = E || {};
	return one$1({
		file: D.file || void 0,
		location: !1,
		schema: D.space === "svg" ? svg : html,
		verbose: D.verbose || !1
	}, e);
}
function one$1(e, E) {
	let D;
	switch (E.nodeName) {
		case "#comment": {
			let O = E;
			return D = {
				type: "comment",
				value: O.data
			}, patch$2(e, O, D), D;
		}
		case "#document":
		case "#document-fragment": {
			let O = E, k = "mode" in O ? O.mode === "quirks" || O.mode === "limited-quirks" : !1;
			if (D = {
				type: "root",
				children: all$2(e, E.childNodes),
				data: { quirksMode: k }
			}, e.file && e.location) {
				let E = String(e.file), O = location(E), k = O.toPoint(0), A = O.toPoint(E.length);
				D.position = {
					start: k,
					end: A
				};
			}
			return D;
		}
		case "#documentType": {
			let O = E;
			return D = { type: "doctype" }, patch$2(e, O, D), D;
		}
		case "#text": {
			let O = E;
			return D = {
				type: "text",
				value: O.value
			}, patch$2(e, O, D), D;
		}
		default: return D = element$3(e, E), D;
	}
}
function all$2(e, E) {
	let D = -1, O = [];
	for (; ++D < E.length;) {
		let k = one$1(e, E[D]);
		O.push(k);
	}
	return O;
}
function element$3(e, E) {
	let D = e.schema;
	e.schema = E.namespaceURI === webNamespaces.svg ? svg : html;
	let O = -1, k = {};
	for (; ++O < E.attrs.length;) {
		let e = E.attrs[O], D = (e.prefix ? e.prefix + ":" : "") + e.name;
		own$2.call(proto, D) || (k[D] = e.value);
	}
	let A = (e.schema.space === "svg" ? s : h)(E.tagName, k, all$2(e, E.childNodes));
	if (patch$2(e, E, A), A.tagName === "template") {
		let D = E, O = D.sourceCodeLocation, k = O && O.startTag && position$1(O.startTag), j = O && O.endTag && position$1(O.endTag), M = one$1(e, D.content);
		k && j && e.file && (M.position = {
			start: k.end,
			end: j.start
		}), A.content = M;
	}
	return e.schema = D, A;
}
function patch$2(e, E, D) {
	if ("sourceCodeLocation" in E && E.sourceCodeLocation && e.file) {
		let O = createLocation(e, D, E.sourceCodeLocation);
		O && (e.location = !0, D.position = O);
	}
}
function createLocation(e, E, D) {
	let O = position$1(D);
	if (E.type === "element") {
		let k = E.children[E.children.length - 1];
		if (O && !D.endTag && k && k.position && k.position.end && (O.end = Object.assign({}, k.position.end)), e.verbose) {
			let O = {}, k;
			if (D.attrs) for (k in D.attrs) own$2.call(D.attrs, k) && (O[find(e.schema, k).property] = position$1(D.attrs[k]));
			D.startTag;
			let A = position$1(D.startTag), j = D.endTag ? position$1(D.endTag) : void 0, M = { opening: A };
			j && (M.closing = j), M.properties = O, E.data = { position: M };
		}
	}
	return O;
}
function position$1(e) {
	let E = point({
		line: e.startLine,
		column: e.startCol,
		offset: e.startOffset
	}), D = point({
		line: e.endLine,
		column: e.endCol,
		offset: e.endOffset
	});
	return E || D ? {
		start: E,
		end: D
	} : void 0;
}
function point(e) {
	return e.line && e.column ? e : void 0;
}
var emptyOptions = {}, own$1 = {}.hasOwnProperty, one = zwitch("type", { handlers: {
	root: root$2,
	element: element$2,
	text: text$2,
	comment: comment$2,
	doctype: doctype$2
} });
function toParse5(e, E) {
	let D = (E || emptyOptions).space;
	return one(e, D === "svg" ? svg : html);
}
function root$2(e, E) {
	let D = {
		nodeName: "#document",
		mode: (e.data || {}).quirksMode ? "quirks" : "no-quirks",
		childNodes: []
	};
	return D.childNodes = all$1(e.children, D, E), patch$1(e, D), D;
}
function fragment(e, E) {
	let D = {
		nodeName: "#document-fragment",
		childNodes: []
	};
	return D.childNodes = all$1(e.children, D, E), patch$1(e, D), D;
}
function doctype$2(e) {
	let E = {
		nodeName: "#documentType",
		name: "html",
		publicId: "",
		systemId: "",
		parentNode: null
	};
	return patch$1(e, E), E;
}
function text$2(e) {
	let E = {
		nodeName: "#text",
		value: e.value,
		parentNode: null
	};
	return patch$1(e, E), E;
}
function comment$2(e) {
	let E = {
		nodeName: "#comment",
		data: e.value,
		parentNode: null
	};
	return patch$1(e, E), E;
}
function element$2(e, E) {
	let D = E, O = D;
	e.type === "element" && e.tagName.toLowerCase() === "svg" && D.space === "html" && (O = svg);
	let k = [], A;
	if (e.properties) {
		for (A in e.properties) if (A !== "children" && own$1.call(e.properties, A)) {
			let E = createProperty(O, A, e.properties[A]);
			E && k.push(E);
		}
	}
	let j = O.space, M = {
		nodeName: e.tagName,
		tagName: e.tagName,
		attrs: k,
		namespaceURI: webNamespaces[j],
		childNodes: [],
		parentNode: null
	};
	return M.childNodes = all$1(e.children, M, O), patch$1(e, M), e.tagName === "template" && e.content && (M.content = fragment(e.content, O)), M;
}
function createProperty(e, E, D) {
	let O = find(e, E);
	if (D === !1 || D == null || typeof D == "number" && Number.isNaN(D) || !D && O.boolean) return;
	Array.isArray(D) && (D = O.commaSeparated ? stringify(D) : stringify$1(D));
	let k = {
		name: O.attribute,
		value: D === !0 ? "" : String(D)
	};
	if (O.space && O.space !== "html" && O.space !== "svg") {
		let e = k.name.indexOf(":");
		e < 0 ? k.prefix = "" : (k.name = k.name.slice(e + 1), k.prefix = O.attribute.slice(0, e)), k.namespace = webNamespaces[O.space];
	}
	return k;
}
function all$1(e, E, D) {
	let O = -1, k = [];
	if (e) for (; ++O < e.length;) {
		let A = one(e[O], D);
		A.parentNode = E, k.push(A);
	}
	return k;
}
function patch$1(e, E) {
	let D = e.position;
	D && D.start && D.end && (D.start.offset, D.end.offset, E.sourceCodeLocation = {
		startLine: D.start.line,
		startCol: D.start.column,
		startOffset: D.start.offset,
		endLine: D.end.line,
		endCol: D.end.column,
		endOffset: D.end.offset
	});
}
const htmlVoidElements = [
	"area",
	"base",
	"basefont",
	"bgsound",
	"br",
	"col",
	"command",
	"embed",
	"frame",
	"hr",
	"image",
	"img",
	"input",
	"keygen",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
];
var UNDEFINED_CODE_POINTS = new Set([
	65534,
	65535,
	131070,
	131071,
	196606,
	196607,
	262142,
	262143,
	327678,
	327679,
	393214,
	393215,
	458750,
	458751,
	524286,
	524287,
	589822,
	589823,
	655358,
	655359,
	720894,
	720895,
	786430,
	786431,
	851966,
	851967,
	917502,
	917503,
	983038,
	983039,
	1048574,
	1048575,
	1114110,
	1114111
]), CODE_POINTS;
(function(e) {
	e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(CODE_POINTS ||= {});
const SEQUENCES = {
	DASH_DASH: "--",
	CDATA_START: "[CDATA[",
	DOCTYPE: "doctype",
	SCRIPT: "script",
	PUBLIC: "public",
	SYSTEM: "system"
};
function isSurrogate(e) {
	return e >= 55296 && e <= 57343;
}
function isSurrogatePair(e) {
	return e >= 56320 && e <= 57343;
}
function getSurrogatePairCodePoint(e, E) {
	return (e - 55296) * 1024 + 9216 + E;
}
function isControlCodePoint(e) {
	return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function isUndefinedCodePoint(e) {
	return e >= 64976 && e <= 65007 || UNDEFINED_CODE_POINTS.has(e);
}
var ERR;
(function(e) {
	e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(ERR ||= {});
var DEFAULT_BUFFER_WATERLINE = 65536, Preprocessor = class {
	constructor(e) {
		this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = DEFAULT_BUFFER_WATERLINE, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
	}
	get col() {
		return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
	}
	get offset() {
		return this.droppedBufferSize + this.pos;
	}
	getError(e, E) {
		let { line: D, col: O, offset: k } = this, A = O + E, j = k + E;
		return {
			code: e,
			startLine: D,
			endLine: D,
			startCol: A,
			endCol: A,
			startOffset: j,
			endOffset: j
		};
	}
	_err(e) {
		this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e, 0)));
	}
	_addGap() {
		this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
	}
	_processSurrogate(e) {
		if (this.pos !== this.html.length - 1) {
			let E = this.html.charCodeAt(this.pos + 1);
			if (isSurrogatePair(E)) return this.pos++, this._addGap(), getSurrogatePairCodePoint(e, E);
		} else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, CODE_POINTS.EOF;
		return this._err(ERR.surrogateInInputStream), e;
	}
	willDropParsedChunk() {
		return this.pos > this.bufferWaterline;
	}
	dropParsedChunk() {
		this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
	}
	write(e, E) {
		this.html.length > 0 ? this.html += e : this.html = e, this.endOfChunkHit = !1, this.lastChunkWritten = E;
	}
	insertHtmlAtCurrentPos(e) {
		this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
	}
	startsWith(e, E) {
		if (this.pos + e.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
		if (E) return this.html.startsWith(e, this.pos);
		for (let E = 0; E < e.length; E++) if ((this.html.charCodeAt(this.pos + E) | 32) !== e.charCodeAt(E)) return !1;
		return !0;
	}
	peek(e) {
		let E = this.pos + e;
		if (E >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, CODE_POINTS.EOF;
		let D = this.html.charCodeAt(E);
		return D === CODE_POINTS.CARRIAGE_RETURN ? CODE_POINTS.LINE_FEED : D;
	}
	advance() {
		if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, CODE_POINTS.EOF;
		let e = this.html.charCodeAt(this.pos);
		return e === CODE_POINTS.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, CODE_POINTS.LINE_FEED) : e === CODE_POINTS.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, isSurrogate(e) && (e = this._processSurrogate(e)), this.handler.onParseError === null || e > 31 && e < 127 || e === CODE_POINTS.LINE_FEED || e === CODE_POINTS.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e);
	}
	_checkForProblematicCharacters(e) {
		isControlCodePoint(e) ? this._err(ERR.controlCharacterInInputStream) : isUndefinedCodePoint(e) && this._err(ERR.noncharacterInInputStream);
	}
	retreat(e) {
		for (this.pos -= e; this.pos < this.lastGapPos;) this.lastGapPos = this.gapStack.pop(), this.pos--;
		this.isEol = !1;
	}
}, TokenType;
(function(e) {
	e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(TokenType ||= {});
function getTokenAttr(e, E) {
	for (let D = e.attrs.length - 1; D >= 0; D--) if (e.attrs[D].name === E) return e.attrs[D].value;
	return null;
}
const htmlDecodeTree = /* @__PURE__ */ new Uint16Array(/* @__PURE__ */ "ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻\"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌".split("").map((e) => e.charCodeAt(0)));
var decodeMap = new Map([
	[0, 65533],
	[128, 8364],
	[130, 8218],
	[131, 402],
	[132, 8222],
	[133, 8230],
	[134, 8224],
	[135, 8225],
	[136, 710],
	[137, 8240],
	[138, 352],
	[139, 8249],
	[140, 338],
	[142, 381],
	[145, 8216],
	[146, 8217],
	[147, 8220],
	[148, 8221],
	[149, 8226],
	[150, 8211],
	[151, 8212],
	[152, 732],
	[153, 8482],
	[154, 353],
	[155, 8250],
	[156, 339],
	[158, 382],
	[159, 376]
]);
String.fromCodePoint;
function replaceCodePoint(e) {
	return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : decodeMap.get(e) ?? e;
}
var CharCodes;
(function(e) {
	e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(CharCodes ||= {});
var TO_LOWER_BIT = 32, BinTrieFlags;
(function(e) {
	e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(BinTrieFlags ||= {});
function isNumber(e) {
	return e >= CharCodes.ZERO && e <= CharCodes.NINE;
}
function isHexadecimalCharacter(e) {
	return e >= CharCodes.UPPER_A && e <= CharCodes.UPPER_F || e >= CharCodes.LOWER_A && e <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric$1(e) {
	return e >= CharCodes.UPPER_A && e <= CharCodes.UPPER_Z || e >= CharCodes.LOWER_A && e <= CharCodes.LOWER_Z || isNumber(e);
}
function isEntityInAttributeInvalidEnd(e) {
	return e === CharCodes.EQUALS || isAsciiAlphaNumeric$1(e);
}
var EntityDecoderState;
(function(e) {
	e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(EntityDecoderState ||= {});
var DecodingMode;
(function(e) {
	e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(DecodingMode ||= {});
var EntityDecoder = class {
	constructor(e, E, D) {
		this.decodeTree = e, this.emitCodePoint = E, this.errors = D, this.state = EntityDecoderState.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = DecodingMode.Strict;
	}
	startEntity(e) {
		this.decodeMode = e, this.state = EntityDecoderState.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
	}
	write(e, E) {
		switch (this.state) {
			case EntityDecoderState.EntityStart: return e.charCodeAt(E) === CharCodes.NUM ? (this.state = EntityDecoderState.NumericStart, this.consumed += 1, this.stateNumericStart(e, E + 1)) : (this.state = EntityDecoderState.NamedEntity, this.stateNamedEntity(e, E));
			case EntityDecoderState.NumericStart: return this.stateNumericStart(e, E);
			case EntityDecoderState.NumericDecimal: return this.stateNumericDecimal(e, E);
			case EntityDecoderState.NumericHex: return this.stateNumericHex(e, E);
			case EntityDecoderState.NamedEntity: return this.stateNamedEntity(e, E);
		}
	}
	stateNumericStart(e, E) {
		return E >= e.length ? -1 : (e.charCodeAt(E) | TO_LOWER_BIT) === CharCodes.LOWER_X ? (this.state = EntityDecoderState.NumericHex, this.consumed += 1, this.stateNumericHex(e, E + 1)) : (this.state = EntityDecoderState.NumericDecimal, this.stateNumericDecimal(e, E));
	}
	addToNumericResult(e, E, D, O) {
		if (E !== D) {
			let k = D - E;
			this.result = this.result * O ** +k + Number.parseInt(e.substr(E, k), O), this.consumed += k;
		}
	}
	stateNumericHex(e, E) {
		let D = E;
		for (; E < e.length;) {
			let O = e.charCodeAt(E);
			if (isNumber(O) || isHexadecimalCharacter(O)) E += 1;
			else return this.addToNumericResult(e, D, E, 16), this.emitNumericEntity(O, 3);
		}
		return this.addToNumericResult(e, D, E, 16), -1;
	}
	stateNumericDecimal(e, E) {
		let D = E;
		for (; E < e.length;) {
			let O = e.charCodeAt(E);
			if (isNumber(O)) E += 1;
			else return this.addToNumericResult(e, D, E, 10), this.emitNumericEntity(O, 2);
		}
		return this.addToNumericResult(e, D, E, 10), -1;
	}
	emitNumericEntity(e, E) {
		var D;
		if (this.consumed <= E) return (D = this.errors) == null || D.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
		if (e === CharCodes.SEMI) this.consumed += 1;
		else if (this.decodeMode === DecodingMode.Strict) return 0;
		return this.emitCodePoint(replaceCodePoint(this.result), this.consumed), this.errors && (e !== CharCodes.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
	}
	stateNamedEntity(e, E) {
		let { decodeTree: D } = this, O = D[this.treeIndex], k = (O & BinTrieFlags.VALUE_LENGTH) >> 14;
		for (; E < e.length; E++, this.excess++) {
			let A = e.charCodeAt(E);
			if (this.treeIndex = determineBranch(D, O, this.treeIndex + Math.max(1, k), A), this.treeIndex < 0) return this.result === 0 || this.decodeMode === DecodingMode.Attribute && (k === 0 || isEntityInAttributeInvalidEnd(A)) ? 0 : this.emitNotTerminatedNamedEntity();
			if (O = D[this.treeIndex], k = (O & BinTrieFlags.VALUE_LENGTH) >> 14, k !== 0) {
				if (A === CharCodes.SEMI) return this.emitNamedEntityData(this.treeIndex, k, this.consumed + this.excess);
				this.decodeMode !== DecodingMode.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
			}
		}
		return -1;
	}
	emitNotTerminatedNamedEntity() {
		var e;
		let { result: E, decodeTree: D } = this, O = (D[E] & BinTrieFlags.VALUE_LENGTH) >> 14;
		return this.emitNamedEntityData(E, O, this.consumed), (e = this.errors) == null || e.missingSemicolonAfterCharacterReference(), this.consumed;
	}
	emitNamedEntityData(e, E, D) {
		let { decodeTree: O } = this;
		return this.emitCodePoint(E === 1 ? O[e] & ~BinTrieFlags.VALUE_LENGTH : O[e + 1], D), E === 3 && this.emitCodePoint(O[e + 2], D), D;
	}
	end() {
		var e;
		switch (this.state) {
			case EntityDecoderState.NamedEntity: return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
			case EntityDecoderState.NumericDecimal: return this.emitNumericEntity(0, 2);
			case EntityDecoderState.NumericHex: return this.emitNumericEntity(0, 3);
			case EntityDecoderState.NumericStart: return (e = this.errors) == null || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
			case EntityDecoderState.EntityStart: return 0;
		}
	}
};
function determineBranch(e, E, D, O) {
	let k = (E & BinTrieFlags.BRANCH_LENGTH) >> 7, A = E & BinTrieFlags.JUMP_TABLE;
	if (k === 0) return A !== 0 && O === A ? D : -1;
	if (A) {
		let E = O - A;
		return E < 0 || E >= k ? -1 : e[D + E] - 1;
	}
	let j = D, M = j + k - 1;
	for (; j <= M;) {
		let E = j + M >>> 1, D = e[E];
		if (D < O) j = E + 1;
		else if (D > O) M = E - 1;
		else return e[E + k];
	}
	return -1;
}
var NS;
(function(e) {
	e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(NS ||= {});
var ATTRS;
(function(e) {
	e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})(ATTRS ||= {});
var DOCUMENT_MODE;
(function(e) {
	e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(DOCUMENT_MODE ||= {});
var TAG_NAMES;
(function(e) {
	e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(TAG_NAMES ||= {});
var TAG_ID;
(function(e) {
	e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
})(TAG_ID ||= {});
var TAG_NAME_TO_ID = new Map([
	[TAG_NAMES.A, TAG_ID.A],
	[TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
	[TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
	[TAG_NAMES.APPLET, TAG_ID.APPLET],
	[TAG_NAMES.AREA, TAG_ID.AREA],
	[TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
	[TAG_NAMES.ASIDE, TAG_ID.ASIDE],
	[TAG_NAMES.B, TAG_ID.B],
	[TAG_NAMES.BASE, TAG_ID.BASE],
	[TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
	[TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
	[TAG_NAMES.BIG, TAG_ID.BIG],
	[TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
	[TAG_NAMES.BODY, TAG_ID.BODY],
	[TAG_NAMES.BR, TAG_ID.BR],
	[TAG_NAMES.BUTTON, TAG_ID.BUTTON],
	[TAG_NAMES.CAPTION, TAG_ID.CAPTION],
	[TAG_NAMES.CENTER, TAG_ID.CENTER],
	[TAG_NAMES.CODE, TAG_ID.CODE],
	[TAG_NAMES.COL, TAG_ID.COL],
	[TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
	[TAG_NAMES.DD, TAG_ID.DD],
	[TAG_NAMES.DESC, TAG_ID.DESC],
	[TAG_NAMES.DETAILS, TAG_ID.DETAILS],
	[TAG_NAMES.DIALOG, TAG_ID.DIALOG],
	[TAG_NAMES.DIR, TAG_ID.DIR],
	[TAG_NAMES.DIV, TAG_ID.DIV],
	[TAG_NAMES.DL, TAG_ID.DL],
	[TAG_NAMES.DT, TAG_ID.DT],
	[TAG_NAMES.EM, TAG_ID.EM],
	[TAG_NAMES.EMBED, TAG_ID.EMBED],
	[TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
	[TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
	[TAG_NAMES.FIGURE, TAG_ID.FIGURE],
	[TAG_NAMES.FONT, TAG_ID.FONT],
	[TAG_NAMES.FOOTER, TAG_ID.FOOTER],
	[TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
	[TAG_NAMES.FORM, TAG_ID.FORM],
	[TAG_NAMES.FRAME, TAG_ID.FRAME],
	[TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
	[TAG_NAMES.H1, TAG_ID.H1],
	[TAG_NAMES.H2, TAG_ID.H2],
	[TAG_NAMES.H3, TAG_ID.H3],
	[TAG_NAMES.H4, TAG_ID.H4],
	[TAG_NAMES.H5, TAG_ID.H5],
	[TAG_NAMES.H6, TAG_ID.H6],
	[TAG_NAMES.HEAD, TAG_ID.HEAD],
	[TAG_NAMES.HEADER, TAG_ID.HEADER],
	[TAG_NAMES.HGROUP, TAG_ID.HGROUP],
	[TAG_NAMES.HR, TAG_ID.HR],
	[TAG_NAMES.HTML, TAG_ID.HTML],
	[TAG_NAMES.I, TAG_ID.I],
	[TAG_NAMES.IMG, TAG_ID.IMG],
	[TAG_NAMES.IMAGE, TAG_ID.IMAGE],
	[TAG_NAMES.INPUT, TAG_ID.INPUT],
	[TAG_NAMES.IFRAME, TAG_ID.IFRAME],
	[TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
	[TAG_NAMES.LABEL, TAG_ID.LABEL],
	[TAG_NAMES.LI, TAG_ID.LI],
	[TAG_NAMES.LINK, TAG_ID.LINK],
	[TAG_NAMES.LISTING, TAG_ID.LISTING],
	[TAG_NAMES.MAIN, TAG_ID.MAIN],
	[TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
	[TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
	[TAG_NAMES.MATH, TAG_ID.MATH],
	[TAG_NAMES.MENU, TAG_ID.MENU],
	[TAG_NAMES.META, TAG_ID.META],
	[TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
	[TAG_NAMES.MI, TAG_ID.MI],
	[TAG_NAMES.MO, TAG_ID.MO],
	[TAG_NAMES.MN, TAG_ID.MN],
	[TAG_NAMES.MS, TAG_ID.MS],
	[TAG_NAMES.MTEXT, TAG_ID.MTEXT],
	[TAG_NAMES.NAV, TAG_ID.NAV],
	[TAG_NAMES.NOBR, TAG_ID.NOBR],
	[TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
	[TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
	[TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
	[TAG_NAMES.OBJECT, TAG_ID.OBJECT],
	[TAG_NAMES.OL, TAG_ID.OL],
	[TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
	[TAG_NAMES.OPTION, TAG_ID.OPTION],
	[TAG_NAMES.P, TAG_ID.P],
	[TAG_NAMES.PARAM, TAG_ID.PARAM],
	[TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
	[TAG_NAMES.PRE, TAG_ID.PRE],
	[TAG_NAMES.RB, TAG_ID.RB],
	[TAG_NAMES.RP, TAG_ID.RP],
	[TAG_NAMES.RT, TAG_ID.RT],
	[TAG_NAMES.RTC, TAG_ID.RTC],
	[TAG_NAMES.RUBY, TAG_ID.RUBY],
	[TAG_NAMES.S, TAG_ID.S],
	[TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
	[TAG_NAMES.SEARCH, TAG_ID.SEARCH],
	[TAG_NAMES.SECTION, TAG_ID.SECTION],
	[TAG_NAMES.SELECT, TAG_ID.SELECT],
	[TAG_NAMES.SOURCE, TAG_ID.SOURCE],
	[TAG_NAMES.SMALL, TAG_ID.SMALL],
	[TAG_NAMES.SPAN, TAG_ID.SPAN],
	[TAG_NAMES.STRIKE, TAG_ID.STRIKE],
	[TAG_NAMES.STRONG, TAG_ID.STRONG],
	[TAG_NAMES.STYLE, TAG_ID.STYLE],
	[TAG_NAMES.SUB, TAG_ID.SUB],
	[TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
	[TAG_NAMES.SUP, TAG_ID.SUP],
	[TAG_NAMES.TABLE, TAG_ID.TABLE],
	[TAG_NAMES.TBODY, TAG_ID.TBODY],
	[TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
	[TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
	[TAG_NAMES.TFOOT, TAG_ID.TFOOT],
	[TAG_NAMES.TD, TAG_ID.TD],
	[TAG_NAMES.TH, TAG_ID.TH],
	[TAG_NAMES.THEAD, TAG_ID.THEAD],
	[TAG_NAMES.TITLE, TAG_ID.TITLE],
	[TAG_NAMES.TR, TAG_ID.TR],
	[TAG_NAMES.TRACK, TAG_ID.TRACK],
	[TAG_NAMES.TT, TAG_ID.TT],
	[TAG_NAMES.U, TAG_ID.U],
	[TAG_NAMES.UL, TAG_ID.UL],
	[TAG_NAMES.SVG, TAG_ID.SVG],
	[TAG_NAMES.VAR, TAG_ID.VAR],
	[TAG_NAMES.WBR, TAG_ID.WBR],
	[TAG_NAMES.XMP, TAG_ID.XMP]
]);
function getTagID(e) {
	return TAG_NAME_TO_ID.get(e) ?? TAG_ID.UNKNOWN;
}
var $ = TAG_ID;
const SPECIAL_ELEMENTS = {
	[NS.HTML]: new Set([
		$.ADDRESS,
		$.APPLET,
		$.AREA,
		$.ARTICLE,
		$.ASIDE,
		$.BASE,
		$.BASEFONT,
		$.BGSOUND,
		$.BLOCKQUOTE,
		$.BODY,
		$.BR,
		$.BUTTON,
		$.CAPTION,
		$.CENTER,
		$.COL,
		$.COLGROUP,
		$.DD,
		$.DETAILS,
		$.DIR,
		$.DIV,
		$.DL,
		$.DT,
		$.EMBED,
		$.FIELDSET,
		$.FIGCAPTION,
		$.FIGURE,
		$.FOOTER,
		$.FORM,
		$.FRAME,
		$.FRAMESET,
		$.H1,
		$.H2,
		$.H3,
		$.H4,
		$.H5,
		$.H6,
		$.HEAD,
		$.HEADER,
		$.HGROUP,
		$.HR,
		$.HTML,
		$.IFRAME,
		$.IMG,
		$.INPUT,
		$.LI,
		$.LINK,
		$.LISTING,
		$.MAIN,
		$.MARQUEE,
		$.MENU,
		$.META,
		$.NAV,
		$.NOEMBED,
		$.NOFRAMES,
		$.NOSCRIPT,
		$.OBJECT,
		$.OL,
		$.P,
		$.PARAM,
		$.PLAINTEXT,
		$.PRE,
		$.SCRIPT,
		$.SECTION,
		$.SELECT,
		$.SOURCE,
		$.STYLE,
		$.SUMMARY,
		$.TABLE,
		$.TBODY,
		$.TD,
		$.TEMPLATE,
		$.TEXTAREA,
		$.TFOOT,
		$.TH,
		$.THEAD,
		$.TITLE,
		$.TR,
		$.TRACK,
		$.UL,
		$.WBR,
		$.XMP
	]),
	[NS.MATHML]: new Set([
		$.MI,
		$.MO,
		$.MN,
		$.MS,
		$.MTEXT,
		$.ANNOTATION_XML
	]),
	[NS.SVG]: new Set([
		$.TITLE,
		$.FOREIGN_OBJECT,
		$.DESC
	]),
	[NS.XLINK]: /* @__PURE__ */ new Set(),
	[NS.XML]: /* @__PURE__ */ new Set(),
	[NS.XMLNS]: /* @__PURE__ */ new Set()
}, NUMBERED_HEADERS = new Set([
	$.H1,
	$.H2,
	$.H3,
	$.H4,
	$.H5,
	$.H6
]);
new Set([
	TAG_NAMES.STYLE,
	TAG_NAMES.SCRIPT,
	TAG_NAMES.XMP,
	TAG_NAMES.IFRAME,
	TAG_NAMES.NOEMBED,
	TAG_NAMES.NOFRAMES,
	TAG_NAMES.PLAINTEXT
]);
var State;
(function(e) {
	e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(State ||= {});
const TokenizerMode = {
	DATA: State.DATA,
	RCDATA: State.RCDATA,
	RAWTEXT: State.RAWTEXT,
	SCRIPT_DATA: State.SCRIPT_DATA,
	PLAINTEXT: State.PLAINTEXT,
	CDATA_SECTION: State.CDATA_SECTION
};
function isAsciiDigit(e) {
	return e >= CODE_POINTS.DIGIT_0 && e <= CODE_POINTS.DIGIT_9;
}
function isAsciiUpper(e) {
	return e >= CODE_POINTS.LATIN_CAPITAL_A && e <= CODE_POINTS.LATIN_CAPITAL_Z;
}
function isAsciiLower(e) {
	return e >= CODE_POINTS.LATIN_SMALL_A && e <= CODE_POINTS.LATIN_SMALL_Z;
}
function isAsciiLetter(e) {
	return isAsciiLower(e) || isAsciiUpper(e);
}
function isAsciiAlphaNumeric(e) {
	return isAsciiLetter(e) || isAsciiDigit(e);
}
function toAsciiLower(e) {
	return e + 32;
}
function isWhitespace(e) {
	return e === CODE_POINTS.SPACE || e === CODE_POINTS.LINE_FEED || e === CODE_POINTS.TABULATION || e === CODE_POINTS.FORM_FEED;
}
function isScriptDataDoubleEscapeSequenceEnd(e) {
	return isWhitespace(e) || e === CODE_POINTS.SOLIDUS || e === CODE_POINTS.GREATER_THAN_SIGN;
}
function getErrorForNumericCharacterReference(e) {
	return e === CODE_POINTS.NULL ? ERR.nullCharacterReference : e > 1114111 ? ERR.characterReferenceOutsideUnicodeRange : isSurrogate(e) ? ERR.surrogateCharacterReference : isUndefinedCodePoint(e) ? ERR.noncharacterCharacterReference : isControlCodePoint(e) || e === CODE_POINTS.CARRIAGE_RETURN ? ERR.controlCharacterReference : null;
}
var Tokenizer = class {
	constructor(e, E) {
		this.options = e, this.handler = E, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = State.DATA, this.returnState = State.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
			name: "",
			value: ""
		}, this.preprocessor = new Preprocessor(E), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new EntityDecoder(htmlDecodeTree, (e, E) => {
			this.preprocessor.pos = this.entityStartPos + E - 1, this._flushCodePointConsumedAsCharacterReference(e);
		}, E.onParseError ? {
			missingSemicolonAfterCharacterReference: () => {
				this._err(ERR.missingSemicolonAfterCharacterReference, 1);
			},
			absenceOfDigitsInNumericCharacterReference: (e) => {
				this._err(ERR.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + e);
			},
			validateNumericCharacterReference: (e) => {
				let E = getErrorForNumericCharacterReference(e);
				E && this._err(E, 1);
			}
		} : void 0);
	}
	_err(e, E = 0) {
		var D, O;
		(O = (D = this.handler).onParseError) == null || O.call(D, this.preprocessor.getError(e, E));
	}
	getCurrentLocation(e) {
		return this.options.sourceCodeLocationInfo ? {
			startLine: this.preprocessor.line,
			startCol: this.preprocessor.col - e,
			startOffset: this.preprocessor.offset - e,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		} : null;
	}
	_runParsingLoop() {
		if (!this.inLoop) {
			for (this.inLoop = !0; this.active && !this.paused;) {
				this.consumedAfterSnapshot = 0;
				let e = this._consume();
				this._ensureHibernation() || this._callState(e);
			}
			this.inLoop = !1;
		}
	}
	pause() {
		this.paused = !0;
	}
	resume(e) {
		if (!this.paused) throw Error("Parser was already resumed");
		this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || e?.());
	}
	write(e, E, D) {
		this.active = !0, this.preprocessor.write(e, E), this._runParsingLoop(), this.paused || D?.();
	}
	insertHtmlAtCurrentPos(e) {
		this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e), this._runParsingLoop();
	}
	_ensureHibernation() {
		return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0) : !1;
	}
	_consume() {
		return this.consumedAfterSnapshot++, this.preprocessor.advance();
	}
	_advanceBy(e) {
		this.consumedAfterSnapshot += e;
		for (let E = 0; E < e; E++) this.preprocessor.advance();
	}
	_consumeSequenceIfMatch(e, E) {
		return this.preprocessor.startsWith(e, E) ? (this._advanceBy(e.length - 1), !0) : !1;
	}
	_createStartTagToken() {
		this.currentToken = {
			type: TokenType.START_TAG,
			tagName: "",
			tagID: TAG_ID.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(1)
		};
	}
	_createEndTagToken() {
		this.currentToken = {
			type: TokenType.END_TAG,
			tagName: "",
			tagID: TAG_ID.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(2)
		};
	}
	_createCommentToken(e) {
		this.currentToken = {
			type: TokenType.COMMENT,
			data: "",
			location: this.getCurrentLocation(e)
		};
	}
	_createDoctypeToken(e) {
		this.currentToken = {
			type: TokenType.DOCTYPE,
			name: e,
			forceQuirks: !1,
			publicId: null,
			systemId: null,
			location: this.currentLocation
		};
	}
	_createCharacterToken(e, E) {
		this.currentCharacterToken = {
			type: e,
			chars: E,
			location: this.currentLocation
		};
	}
	_createAttr(e) {
		this.currentAttr = {
			name: e,
			value: ""
		}, this.currentLocation = this.getCurrentLocation(0);
	}
	_leaveAttrName() {
		var e;
		let E = this.currentToken;
		if (getTokenAttr(E, this.currentAttr.name) === null) {
			if (E.attrs.push(this.currentAttr), E.location && this.currentLocation) {
				let D = (e = E.location).attrs ?? (e.attrs = Object.create(null));
				D[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
			}
		} else this._err(ERR.duplicateAttribute);
	}
	_leaveAttrValue() {
		this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
	}
	prepareToken(e) {
		this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
	}
	emitCurrentTagToken() {
		let e = this.currentToken;
		this.prepareToken(e), e.tagID = getTagID(e.tagName), e.type === TokenType.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(ERR.endTagWithAttributes), e.selfClosing && this._err(ERR.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk();
	}
	emitCurrentComment(e) {
		this.prepareToken(e), this.handler.onComment(e), this.preprocessor.dropParsedChunk();
	}
	emitCurrentDoctype(e) {
		this.prepareToken(e), this.handler.onDoctype(e), this.preprocessor.dropParsedChunk();
	}
	_emitCurrentCharacterToken(e) {
		if (this.currentCharacterToken) {
			switch (e && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e.startLine, this.currentCharacterToken.location.endCol = e.startCol, this.currentCharacterToken.location.endOffset = e.startOffset), this.currentCharacterToken.type) {
				case TokenType.CHARACTER:
					this.handler.onCharacter(this.currentCharacterToken);
					break;
				case TokenType.NULL_CHARACTER:
					this.handler.onNullCharacter(this.currentCharacterToken);
					break;
				case TokenType.WHITESPACE_CHARACTER:
					this.handler.onWhitespaceCharacter(this.currentCharacterToken);
					break;
			}
			this.currentCharacterToken = null;
		}
	}
	_emitEOFToken() {
		let e = this.getCurrentLocation(0);
		e && (e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset), this._emitCurrentCharacterToken(e), this.handler.onEof({
			type: TokenType.EOF,
			location: e
		}), this.active = !1;
	}
	_appendCharToCurrentCharacterToken(e, E) {
		if (this.currentCharacterToken) if (this.currentCharacterToken.type === e) {
			this.currentCharacterToken.chars += E;
			return;
		} else this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
		this._createCharacterToken(e, E);
	}
	_emitCodePoint(e) {
		let E = isWhitespace(e) ? TokenType.WHITESPACE_CHARACTER : e === CODE_POINTS.NULL ? TokenType.NULL_CHARACTER : TokenType.CHARACTER;
		this._appendCharToCurrentCharacterToken(E, String.fromCodePoint(e));
	}
	_emitChars(e) {
		this._appendCharToCurrentCharacterToken(TokenType.CHARACTER, e);
	}
	_startCharacterReference() {
		this.returnState = this.state, this.state = State.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? DecodingMode.Attribute : DecodingMode.Legacy);
	}
	_isCharacterReferenceInAttribute() {
		return this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED;
	}
	_flushCodePointConsumedAsCharacterReference(e) {
		this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e);
	}
	_callState(e) {
		switch (this.state) {
			case State.DATA:
				this._stateData(e);
				break;
			case State.RCDATA:
				this._stateRcdata(e);
				break;
			case State.RAWTEXT:
				this._stateRawtext(e);
				break;
			case State.SCRIPT_DATA:
				this._stateScriptData(e);
				break;
			case State.PLAINTEXT:
				this._statePlaintext(e);
				break;
			case State.TAG_OPEN:
				this._stateTagOpen(e);
				break;
			case State.END_TAG_OPEN:
				this._stateEndTagOpen(e);
				break;
			case State.TAG_NAME:
				this._stateTagName(e);
				break;
			case State.RCDATA_LESS_THAN_SIGN:
				this._stateRcdataLessThanSign(e);
				break;
			case State.RCDATA_END_TAG_OPEN:
				this._stateRcdataEndTagOpen(e);
				break;
			case State.RCDATA_END_TAG_NAME:
				this._stateRcdataEndTagName(e);
				break;
			case State.RAWTEXT_LESS_THAN_SIGN:
				this._stateRawtextLessThanSign(e);
				break;
			case State.RAWTEXT_END_TAG_OPEN:
				this._stateRawtextEndTagOpen(e);
				break;
			case State.RAWTEXT_END_TAG_NAME:
				this._stateRawtextEndTagName(e);
				break;
			case State.SCRIPT_DATA_LESS_THAN_SIGN:
				this._stateScriptDataLessThanSign(e);
				break;
			case State.SCRIPT_DATA_END_TAG_OPEN:
				this._stateScriptDataEndTagOpen(e);
				break;
			case State.SCRIPT_DATA_END_TAG_NAME:
				this._stateScriptDataEndTagName(e);
				break;
			case State.SCRIPT_DATA_ESCAPE_START:
				this._stateScriptDataEscapeStart(e);
				break;
			case State.SCRIPT_DATA_ESCAPE_START_DASH:
				this._stateScriptDataEscapeStartDash(e);
				break;
			case State.SCRIPT_DATA_ESCAPED:
				this._stateScriptDataEscaped(e);
				break;
			case State.SCRIPT_DATA_ESCAPED_DASH:
				this._stateScriptDataEscapedDash(e);
				break;
			case State.SCRIPT_DATA_ESCAPED_DASH_DASH:
				this._stateScriptDataEscapedDashDash(e);
				break;
			case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataEscapedLessThanSign(e);
				break;
			case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
				this._stateScriptDataEscapedEndTagOpen(e);
				break;
			case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
				this._stateScriptDataEscapedEndTagName(e);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPE_START:
				this._stateScriptDataDoubleEscapeStart(e);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED:
				this._stateScriptDataDoubleEscaped(e);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
				this._stateScriptDataDoubleEscapedDash(e);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
				this._stateScriptDataDoubleEscapedDashDash(e);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataDoubleEscapedLessThanSign(e);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPE_END:
				this._stateScriptDataDoubleEscapeEnd(e);
				break;
			case State.BEFORE_ATTRIBUTE_NAME:
				this._stateBeforeAttributeName(e);
				break;
			case State.ATTRIBUTE_NAME:
				this._stateAttributeName(e);
				break;
			case State.AFTER_ATTRIBUTE_NAME:
				this._stateAfterAttributeName(e);
				break;
			case State.BEFORE_ATTRIBUTE_VALUE:
				this._stateBeforeAttributeValue(e);
				break;
			case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
				this._stateAttributeValueDoubleQuoted(e);
				break;
			case State.ATTRIBUTE_VALUE_SINGLE_QUOTED:
				this._stateAttributeValueSingleQuoted(e);
				break;
			case State.ATTRIBUTE_VALUE_UNQUOTED:
				this._stateAttributeValueUnquoted(e);
				break;
			case State.AFTER_ATTRIBUTE_VALUE_QUOTED:
				this._stateAfterAttributeValueQuoted(e);
				break;
			case State.SELF_CLOSING_START_TAG:
				this._stateSelfClosingStartTag(e);
				break;
			case State.BOGUS_COMMENT:
				this._stateBogusComment(e);
				break;
			case State.MARKUP_DECLARATION_OPEN:
				this._stateMarkupDeclarationOpen(e);
				break;
			case State.COMMENT_START:
				this._stateCommentStart(e);
				break;
			case State.COMMENT_START_DASH:
				this._stateCommentStartDash(e);
				break;
			case State.COMMENT:
				this._stateComment(e);
				break;
			case State.COMMENT_LESS_THAN_SIGN:
				this._stateCommentLessThanSign(e);
				break;
			case State.COMMENT_LESS_THAN_SIGN_BANG:
				this._stateCommentLessThanSignBang(e);
				break;
			case State.COMMENT_LESS_THAN_SIGN_BANG_DASH:
				this._stateCommentLessThanSignBangDash(e);
				break;
			case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
				this._stateCommentLessThanSignBangDashDash(e);
				break;
			case State.COMMENT_END_DASH:
				this._stateCommentEndDash(e);
				break;
			case State.COMMENT_END:
				this._stateCommentEnd(e);
				break;
			case State.COMMENT_END_BANG:
				this._stateCommentEndBang(e);
				break;
			case State.DOCTYPE:
				this._stateDoctype(e);
				break;
			case State.BEFORE_DOCTYPE_NAME:
				this._stateBeforeDoctypeName(e);
				break;
			case State.DOCTYPE_NAME:
				this._stateDoctypeName(e);
				break;
			case State.AFTER_DOCTYPE_NAME:
				this._stateAfterDoctypeName(e);
				break;
			case State.AFTER_DOCTYPE_PUBLIC_KEYWORD:
				this._stateAfterDoctypePublicKeyword(e);
				break;
			case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateBeforeDoctypePublicIdentifier(e);
				break;
			case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypePublicIdentifierDoubleQuoted(e);
				break;
			case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypePublicIdentifierSingleQuoted(e);
				break;
			case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateAfterDoctypePublicIdentifier(e);
				break;
			case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
				this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
				break;
			case State.AFTER_DOCTYPE_SYSTEM_KEYWORD:
				this._stateAfterDoctypeSystemKeyword(e);
				break;
			case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateBeforeDoctypeSystemIdentifier(e);
				break;
			case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypeSystemIdentifierDoubleQuoted(e);
				break;
			case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypeSystemIdentifierSingleQuoted(e);
				break;
			case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateAfterDoctypeSystemIdentifier(e);
				break;
			case State.BOGUS_DOCTYPE:
				this._stateBogusDoctype(e);
				break;
			case State.CDATA_SECTION:
				this._stateCdataSection(e);
				break;
			case State.CDATA_SECTION_BRACKET:
				this._stateCdataSectionBracket(e);
				break;
			case State.CDATA_SECTION_END:
				this._stateCdataSectionEnd(e);
				break;
			case State.CHARACTER_REFERENCE:
				this._stateCharacterReference();
				break;
			case State.AMBIGUOUS_AMPERSAND:
				this._stateAmbiguousAmpersand(e);
				break;
			default: throw Error("Unknown state");
		}
	}
	_stateData(e) {
		switch (e) {
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.TAG_OPEN;
				break;
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitCodePoint(e);
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRcdata(e) {
		switch (e) {
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.RCDATA_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRawtext(e) {
		switch (e) {
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.RAWTEXT_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptData(e) {
		switch (e) {
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_statePlaintext(e) {
		switch (e) {
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateTagOpen(e) {
		if (isAsciiLetter(e)) this._createStartTagToken(), this.state = State.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case CODE_POINTS.EXCLAMATION_MARK:
				this.state = State.MARKUP_DECLARATION_OPEN;
				break;
			case CODE_POINTS.SOLIDUS:
				this.state = State.END_TAG_OPEN;
				break;
			case CODE_POINTS.QUESTION_MARK:
				this._err(ERR.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = State.BOGUS_COMMENT, this._stateBogusComment(e);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
				break;
			default: this._err(ERR.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = State.DATA, this._stateData(e);
		}
	}
	_stateEndTagOpen(e) {
		if (isAsciiLetter(e)) this._createEndTagToken(), this.state = State.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingEndTagName), this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
				break;
			default: this._err(ERR.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = State.BOGUS_COMMENT, this._stateBogusComment(e);
		}
	}
	_stateTagName(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				break;
			case CODE_POINTS.SOLIDUS:
				this.state = State.SELF_CLOSING_START_TAG;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentTagToken();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), E.tagName += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: E.tagName += String.fromCodePoint(isAsciiUpper(e) ? toAsciiLower(e) : e);
		}
	}
	_stateRcdataLessThanSign(e) {
		e === CODE_POINTS.SOLIDUS ? this.state = State.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = State.RCDATA, this._stateRcdata(e));
	}
	_stateRcdataEndTagOpen(e) {
		isAsciiLetter(e) ? (this.state = State.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = State.RCDATA, this._stateRcdata(e));
	}
	handleSpecialEndTag(e) {
		if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
		this._createEndTagToken();
		let E = this.currentToken;
		switch (E.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: return this._advanceBy(this.lastStartTagName.length), this.state = State.BEFORE_ATTRIBUTE_NAME, !1;
			case CODE_POINTS.SOLIDUS: return this._advanceBy(this.lastStartTagName.length), this.state = State.SELF_CLOSING_START_TAG, !1;
			case CODE_POINTS.GREATER_THAN_SIGN: return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = State.DATA, !1;
			default: return !this._ensureHibernation();
		}
	}
	_stateRcdataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = State.RCDATA, this._stateRcdata(e));
	}
	_stateRawtextLessThanSign(e) {
		e === CODE_POINTS.SOLIDUS ? this.state = State.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = State.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagOpen(e) {
		isAsciiLetter(e) ? (this.state = State.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = State.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = State.RAWTEXT, this._stateRawtext(e));
	}
	_stateScriptDataLessThanSign(e) {
		switch (e) {
			case CODE_POINTS.SOLIDUS:
				this.state = State.SCRIPT_DATA_END_TAG_OPEN;
				break;
			case CODE_POINTS.EXCLAMATION_MARK:
				this.state = State.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
				break;
			default: this._emitChars("<"), this.state = State.SCRIPT_DATA, this._stateScriptData(e);
		}
	}
	_stateScriptDataEndTagOpen(e) {
		isAsciiLetter(e) ? (this.state = State.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = State.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = State.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStart(e) {
		e === CODE_POINTS.HYPHEN_MINUS ? (this.state = State.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = State.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStartDash(e) {
		e === CODE_POINTS.HYPHEN_MINUS ? (this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = State.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscaped(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDash(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.state = State.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = State.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDashDash(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.SCRIPT_DATA, this._emitChars(">");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.state = State.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = State.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedLessThanSign(e) {
		e === CODE_POINTS.SOLIDUS ? this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : isAsciiLetter(e) ? (this._emitChars("<"), this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = State.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagOpen(e) {
		isAsciiLetter(e) ? (this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = State.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = State.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscapeStart(e) {
		if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, !1) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < SEQUENCES.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
		} else this._ensureHibernation() || (this.state = State.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscaped(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDash(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDashDash(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.SCRIPT_DATA, this._emitChars(">");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedLessThanSign(e) {
		e === CODE_POINTS.SOLIDUS ? (this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateScriptDataDoubleEscapeEnd(e) {
		if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, !1) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < SEQUENCES.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = State.SCRIPT_DATA_ESCAPED;
		} else this._ensureHibernation() || (this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateBeforeAttributeName(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.SOLIDUS:
			case CODE_POINTS.GREATER_THAN_SIGN:
			case CODE_POINTS.EOF:
				this.state = State.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case CODE_POINTS.EQUALS_SIGN:
				this._err(ERR.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = State.ATTRIBUTE_NAME;
				break;
			default: this._createAttr(""), this.state = State.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateAttributeName(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
			case CODE_POINTS.SOLIDUS:
			case CODE_POINTS.GREATER_THAN_SIGN:
			case CODE_POINTS.EOF:
				this._leaveAttrName(), this.state = State.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case CODE_POINTS.EQUALS_SIGN:
				this._leaveAttrName(), this.state = State.BEFORE_ATTRIBUTE_VALUE;
				break;
			case CODE_POINTS.QUOTATION_MARK:
			case CODE_POINTS.APOSTROPHE:
			case CODE_POINTS.LESS_THAN_SIGN:
				this._err(ERR.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.currentAttr.name += "�";
				break;
			default: this.currentAttr.name += String.fromCodePoint(isAsciiUpper(e) ? toAsciiLower(e) : e);
		}
	}
	_stateAfterAttributeName(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.SOLIDUS:
				this.state = State.SELF_CLOSING_START_TAG;
				break;
			case CODE_POINTS.EQUALS_SIGN:
				this.state = State.BEFORE_ATTRIBUTE_VALUE;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentTagToken();
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: this._createAttr(""), this.state = State.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateBeforeAttributeValue(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingAttributeValue), this.state = State.DATA, this.emitCurrentTagToken();
				break;
			default: this.state = State.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e);
		}
	}
	_stateAttributeValueDoubleQuoted(e) {
		switch (e) {
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueSingleQuoted(e) {
		switch (e) {
			case CODE_POINTS.APOSTROPHE:
				this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueUnquoted(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this._leaveAttrValue(), this.state = State.BEFORE_ATTRIBUTE_NAME;
				break;
			case CODE_POINTS.AMPERSAND:
				this._startCharacterReference();
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = State.DATA, this.emitCurrentTagToken();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case CODE_POINTS.QUOTATION_MARK:
			case CODE_POINTS.APOSTROPHE:
			case CODE_POINTS.LESS_THAN_SIGN:
			case CODE_POINTS.EQUALS_SIGN:
			case CODE_POINTS.GRAVE_ACCENT:
				this._err(ERR.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAfterAttributeValueQuoted(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this._leaveAttrValue(), this.state = State.BEFORE_ATTRIBUTE_NAME;
				break;
			case CODE_POINTS.SOLIDUS:
				this._leaveAttrValue(), this.state = State.SELF_CLOSING_START_TAG;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = State.DATA, this.emitCurrentTagToken();
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: this._err(ERR.missingWhitespaceBetweenAttributes), this.state = State.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateSelfClosingStartTag(e) {
		switch (e) {
			case CODE_POINTS.GREATER_THAN_SIGN: {
				let e = this.currentToken;
				e.selfClosing = !0, this.state = State.DATA, this.emitCurrentTagToken();
				break;
			}
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag), this._emitEOFToken();
				break;
			default: this._err(ERR.unexpectedSolidusInTag), this.state = State.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateBogusComment(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentComment(E);
				break;
			case CODE_POINTS.EOF:
				this.emitCurrentComment(E), this._emitEOFToken();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), E.data += "�";
				break;
			default: E.data += String.fromCodePoint(e);
		}
	}
	_stateMarkupDeclarationOpen(e) {
		this._consumeSequenceIfMatch(SEQUENCES.DASH_DASH, !0) ? (this._createCommentToken(SEQUENCES.DASH_DASH.length + 1), this.state = State.COMMENT_START) : this._consumeSequenceIfMatch(SEQUENCES.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(SEQUENCES.DOCTYPE.length + 1), this.state = State.DOCTYPE) : this._consumeSequenceIfMatch(SEQUENCES.CDATA_START, !0) ? this.inForeignNode ? this.state = State.CDATA_SECTION : (this._err(ERR.cdataInHtmlContent), this._createCommentToken(SEQUENCES.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = State.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(ERR.incorrectlyOpenedComment), this._createCommentToken(2), this.state = State.BOGUS_COMMENT, this._stateBogusComment(e));
	}
	_stateCommentStart(e) {
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_START_DASH;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN: {
				this._err(ERR.abruptClosingOfEmptyComment), this.state = State.DATA;
				let e = this.currentToken;
				this.emitCurrentComment(e);
				break;
			}
			default: this.state = State.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentStartDash(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_END;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptClosingOfEmptyComment), this.state = State.DATA, this.emitCurrentComment(E);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment), this.emitCurrentComment(E), this._emitEOFToken();
				break;
			default: E.data += "-", this.state = State.COMMENT, this._stateComment(e);
		}
	}
	_stateComment(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_END_DASH;
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				E.data += "<", this.state = State.COMMENT_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), E.data += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment), this.emitCurrentComment(E), this._emitEOFToken();
				break;
			default: E.data += String.fromCodePoint(e);
		}
	}
	_stateCommentLessThanSign(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.EXCLAMATION_MARK:
				E.data += "!", this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				E.data += "<";
				break;
			default: this.state = State.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentLessThanSignBang(e) {
		e === CODE_POINTS.HYPHEN_MINUS ? this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = State.COMMENT, this._stateComment(e));
	}
	_stateCommentLessThanSignBangDash(e) {
		e === CODE_POINTS.HYPHEN_MINUS ? this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = State.COMMENT_END_DASH, this._stateCommentEndDash(e));
	}
	_stateCommentLessThanSignBangDashDash(e) {
		e !== CODE_POINTS.GREATER_THAN_SIGN && e !== CODE_POINTS.EOF && this._err(ERR.nestedComment), this.state = State.COMMENT_END, this._stateCommentEnd(e);
	}
	_stateCommentEndDash(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_END;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment), this.emitCurrentComment(E), this._emitEOFToken();
				break;
			default: E.data += "-", this.state = State.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEnd(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentComment(E);
				break;
			case CODE_POINTS.EXCLAMATION_MARK:
				this.state = State.COMMENT_END_BANG;
				break;
			case CODE_POINTS.HYPHEN_MINUS:
				E.data += "-";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment), this.emitCurrentComment(E), this._emitEOFToken();
				break;
			default: E.data += "--", this.state = State.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEndBang(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.HYPHEN_MINUS:
				E.data += "--!", this.state = State.COMMENT_END_DASH;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.incorrectlyClosedComment), this.state = State.DATA, this.emitCurrentComment(E);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment), this.emitCurrentComment(E), this._emitEOFToken();
				break;
			default: E.data += "--!", this.state = State.COMMENT, this._stateComment(e);
		}
	}
	_stateDoctype(e) {
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_DOCTYPE_NAME;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
				break;
			case CODE_POINTS.EOF: {
				this._err(ERR.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._err(ERR.missingWhitespaceBeforeDoctypeName), this.state = State.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
		}
	}
	_stateBeforeDoctypeName(e) {
		if (isAsciiUpper(e)) this._createDoctypeToken(String.fromCharCode(toAsciiLower(e))), this.state = State.DOCTYPE_NAME;
		else switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), this._createDoctypeToken("�"), this.state = State.DOCTYPE_NAME;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN: {
				this._err(ERR.missingDoctypeName), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = State.DATA;
				break;
			}
			case CODE_POINTS.EOF: {
				this._err(ERR.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._createDoctypeToken(String.fromCodePoint(e)), this.state = State.DOCTYPE_NAME;
		}
	}
	_stateDoctypeName(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.AFTER_DOCTYPE_NAME;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentDoctype(E);
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), E.name += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: E.name += String.fromCodePoint(isAsciiUpper(e) ? toAsciiLower(e) : e);
		}
	}
	_stateAfterDoctypeName(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentDoctype(E);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: this._consumeSequenceIfMatch(SEQUENCES.PUBLIC, !1) ? this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(SEQUENCES.SYSTEM, !1) ? this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(ERR.invalidCharacterSequenceAfterDoctypeName), E.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e));
		}
	}
	_stateAfterDoctypePublicKeyword(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case CODE_POINTS.QUOTATION_MARK:
				this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword), E.publicId = "", this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword), E.publicId = "", this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypePublicIdentifier), E.forceQuirks = !0, this.state = State.DATA, this.emitCurrentDoctype(E);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier), E.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypePublicIdentifier(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.QUOTATION_MARK:
				E.publicId = "", this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				E.publicId = "", this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypePublicIdentifier), E.forceQuirks = !0, this.state = State.DATA, this.emitCurrentDoctype(E);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier), E.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypePublicIdentifierDoubleQuoted(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), E.publicId += "�";
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypePublicIdentifier), E.forceQuirks = !0, this.emitCurrentDoctype(E), this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: E.publicId += String.fromCodePoint(e);
		}
	}
	_stateDoctypePublicIdentifierSingleQuoted(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.APOSTROPHE:
				this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), E.publicId += "�";
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypePublicIdentifier), E.forceQuirks = !0, this.emitCurrentDoctype(E), this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: E.publicId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypePublicIdentifier(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA, this.emitCurrentDoctype(E);
				break;
			case CODE_POINTS.QUOTATION_MARK:
				this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), E.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), E.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier), E.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBetweenDoctypePublicAndSystemIdentifiers(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(E), this.state = State.DATA;
				break;
			case CODE_POINTS.QUOTATION_MARK:
				E.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				E.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier), E.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateAfterDoctypeSystemKeyword(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case CODE_POINTS.QUOTATION_MARK:
				this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword), E.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword), E.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypeSystemIdentifier), E.forceQuirks = !0, this.state = State.DATA, this.emitCurrentDoctype(E);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier), E.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypeSystemIdentifier(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.QUOTATION_MARK:
				E.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				E.systemId = "", this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypeSystemIdentifier), E.forceQuirks = !0, this.state = State.DATA, this.emitCurrentDoctype(E);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier), E.forceQuirks = !0, this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypeSystemIdentifierDoubleQuoted(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), E.systemId += "�";
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypeSystemIdentifier), E.forceQuirks = !0, this.emitCurrentDoctype(E), this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: E.systemId += String.fromCodePoint(e);
		}
	}
	_stateDoctypeSystemIdentifierSingleQuoted(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.APOSTROPHE:
				this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter), E.systemId += "�";
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypeSystemIdentifier), E.forceQuirks = !0, this.emitCurrentDoctype(E), this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: E.systemId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypeSystemIdentifier(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(E), this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype), E.forceQuirks = !0, this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default: this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = State.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBogusDoctype(e) {
		let E = this.currentToken;
		switch (e) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(E), this.state = State.DATA;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				break;
			case CODE_POINTS.EOF:
				this.emitCurrentDoctype(E), this._emitEOFToken();
				break;
			default:
		}
	}
	_stateCdataSection(e) {
		switch (e) {
			case CODE_POINTS.RIGHT_SQUARE_BRACKET:
				this.state = State.CDATA_SECTION_BRACKET;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInCdata), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateCdataSectionBracket(e) {
		e === CODE_POINTS.RIGHT_SQUARE_BRACKET ? this.state = State.CDATA_SECTION_END : (this._emitChars("]"), this.state = State.CDATA_SECTION, this._stateCdataSection(e));
	}
	_stateCdataSectionEnd(e) {
		switch (e) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				break;
			case CODE_POINTS.RIGHT_SQUARE_BRACKET:
				this._emitChars("]");
				break;
			default: this._emitChars("]]"), this.state = State.CDATA_SECTION, this._stateCdataSection(e);
		}
	}
	_stateCharacterReference() {
		let e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
		if (e < 0) if (this.preprocessor.lastChunkWritten) e = this.entityDecoder.end();
		else {
			this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
			return;
		}
		e === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && isAsciiAlphaNumeric(this.preprocessor.peek(1)) ? State.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
	}
	_stateAmbiguousAmpersand(e) {
		isAsciiAlphaNumeric(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === CODE_POINTS.SEMICOLON && this._err(ERR.unknownNamedCharacterReference), this.state = this.returnState, this._callState(e));
	}
}, IMPLICIT_END_TAG_REQUIRED = new Set([
	TAG_ID.DD,
	TAG_ID.DT,
	TAG_ID.LI,
	TAG_ID.OPTGROUP,
	TAG_ID.OPTION,
	TAG_ID.P,
	TAG_ID.RB,
	TAG_ID.RP,
	TAG_ID.RT,
	TAG_ID.RTC
]), IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = new Set([
	...IMPLICIT_END_TAG_REQUIRED,
	TAG_ID.CAPTION,
	TAG_ID.COLGROUP,
	TAG_ID.TBODY,
	TAG_ID.TD,
	TAG_ID.TFOOT,
	TAG_ID.TH,
	TAG_ID.THEAD,
	TAG_ID.TR
]), SCOPING_ELEMENTS_HTML = new Set([
	TAG_ID.APPLET,
	TAG_ID.CAPTION,
	TAG_ID.HTML,
	TAG_ID.MARQUEE,
	TAG_ID.OBJECT,
	TAG_ID.TABLE,
	TAG_ID.TD,
	TAG_ID.TEMPLATE,
	TAG_ID.TH
]), SCOPING_ELEMENTS_HTML_LIST = new Set([
	...SCOPING_ELEMENTS_HTML,
	TAG_ID.OL,
	TAG_ID.UL
]), SCOPING_ELEMENTS_HTML_BUTTON = new Set([...SCOPING_ELEMENTS_HTML, TAG_ID.BUTTON]), SCOPING_ELEMENTS_MATHML = new Set([
	TAG_ID.ANNOTATION_XML,
	TAG_ID.MI,
	TAG_ID.MN,
	TAG_ID.MO,
	TAG_ID.MS,
	TAG_ID.MTEXT
]), SCOPING_ELEMENTS_SVG = new Set([
	TAG_ID.DESC,
	TAG_ID.FOREIGN_OBJECT,
	TAG_ID.TITLE
]), TABLE_ROW_CONTEXT = new Set([
	TAG_ID.TR,
	TAG_ID.TEMPLATE,
	TAG_ID.HTML
]), TABLE_BODY_CONTEXT = new Set([
	TAG_ID.TBODY,
	TAG_ID.TFOOT,
	TAG_ID.THEAD,
	TAG_ID.TEMPLATE,
	TAG_ID.HTML
]), TABLE_CONTEXT = new Set([
	TAG_ID.TABLE,
	TAG_ID.TEMPLATE,
	TAG_ID.HTML
]), TABLE_CELLS = new Set([TAG_ID.TD, TAG_ID.TH]), OpenElementStack = class {
	get currentTmplContentOrNode() {
		return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
	}
	constructor(e, E, D) {
		this.treeAdapter = E, this.handler = D, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = TAG_ID.UNKNOWN, this.current = e;
	}
	_indexOf(e) {
		return this.items.lastIndexOf(e, this.stackTop);
	}
	_isInTemplate() {
		return this.currentTagId === TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
	}
	_updateCurrentElement() {
		this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
	}
	push(e, E) {
		this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = E, this.currentTagId = E, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e, E, !0);
	}
	pop() {
		let e = this.current;
		this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !0);
	}
	replace(e, E) {
		let D = this._indexOf(e);
		this.items[D] = E, D === this.stackTop && (this.current = E);
	}
	insertAfter(e, E, D) {
		let O = this._indexOf(e) + 1;
		this.items.splice(O, 0, E), this.tagIDs.splice(O, 0, D), this.stackTop++, O === this.stackTop && this._updateCurrentElement(), this.current && this.currentTagId !== void 0 && this.handler.onItemPush(this.current, this.currentTagId, O === this.stackTop);
	}
	popUntilTagNamePopped(e) {
		let E = this.stackTop + 1;
		do
			E = this.tagIDs.lastIndexOf(e, E - 1);
		while (E > 0 && this.treeAdapter.getNamespaceURI(this.items[E]) !== NS.HTML);
		this.shortenToLength(Math.max(E, 0));
	}
	shortenToLength(e) {
		for (; this.stackTop >= e;) {
			let E = this.current;
			this.tmplCount > 0 && this._isInTemplate() && --this.tmplCount, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(E, this.stackTop < e);
		}
	}
	popUntilElementPopped(e) {
		let E = this._indexOf(e);
		this.shortenToLength(Math.max(E, 0));
	}
	popUntilPopped(e, E) {
		let D = this._indexOfTagNames(e, E);
		this.shortenToLength(Math.max(D, 0));
	}
	popUntilNumberedHeaderPopped() {
		this.popUntilPopped(NUMBERED_HEADERS, NS.HTML);
	}
	popUntilTableCellPopped() {
		this.popUntilPopped(TABLE_CELLS, NS.HTML);
	}
	popAllUpToHtmlElement() {
		this.tmplCount = 0, this.shortenToLength(1);
	}
	_indexOfTagNames(e, E) {
		for (let D = this.stackTop; D >= 0; D--) if (e.has(this.tagIDs[D]) && this.treeAdapter.getNamespaceURI(this.items[D]) === E) return D;
		return -1;
	}
	clearBackTo(e, E) {
		let D = this._indexOfTagNames(e, E);
		this.shortenToLength(D + 1);
	}
	clearBackToTableContext() {
		this.clearBackTo(TABLE_CONTEXT, NS.HTML);
	}
	clearBackToTableBodyContext() {
		this.clearBackTo(TABLE_BODY_CONTEXT, NS.HTML);
	}
	clearBackToTableRowContext() {
		this.clearBackTo(TABLE_ROW_CONTEXT, NS.HTML);
	}
	remove(e) {
		let E = this._indexOf(e);
		E >= 0 && (E === this.stackTop ? this.pop() : (this.items.splice(E, 1), this.tagIDs.splice(E, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)));
	}
	tryPeekProperlyNestedBodyElement() {
		return this.stackTop >= 1 && this.tagIDs[1] === TAG_ID.BODY ? this.items[1] : null;
	}
	contains(e) {
		return this._indexOf(e) > -1;
	}
	getCommonAncestor(e) {
		let E = this._indexOf(e) - 1;
		return E >= 0 ? this.items[E] : null;
	}
	isRootHtmlElementCurrent() {
		return this.stackTop === 0 && this.tagIDs[0] === TAG_ID.HTML;
	}
	hasInDynamicScope(e, E) {
		for (let D = this.stackTop; D >= 0; D--) {
			let O = this.tagIDs[D];
			switch (this.treeAdapter.getNamespaceURI(this.items[D])) {
				case NS.HTML:
					if (O === e) return !0;
					if (E.has(O)) return !1;
					break;
				case NS.SVG:
					if (SCOPING_ELEMENTS_SVG.has(O)) return !1;
					break;
				case NS.MATHML:
					if (SCOPING_ELEMENTS_MATHML.has(O)) return !1;
					break;
			}
		}
		return !0;
	}
	hasInScope(e) {
		return this.hasInDynamicScope(e, SCOPING_ELEMENTS_HTML);
	}
	hasInListItemScope(e) {
		return this.hasInDynamicScope(e, SCOPING_ELEMENTS_HTML_LIST);
	}
	hasInButtonScope(e) {
		return this.hasInDynamicScope(e, SCOPING_ELEMENTS_HTML_BUTTON);
	}
	hasNumberedHeaderInScope() {
		for (let e = this.stackTop; e >= 0; e--) {
			let E = this.tagIDs[e];
			switch (this.treeAdapter.getNamespaceURI(this.items[e])) {
				case NS.HTML:
					if (NUMBERED_HEADERS.has(E)) return !0;
					if (SCOPING_ELEMENTS_HTML.has(E)) return !1;
					break;
				case NS.SVG:
					if (SCOPING_ELEMENTS_SVG.has(E)) return !1;
					break;
				case NS.MATHML:
					if (SCOPING_ELEMENTS_MATHML.has(E)) return !1;
					break;
			}
		}
		return !0;
	}
	hasInTableScope(e) {
		for (let E = this.stackTop; E >= 0; E--) if (this.treeAdapter.getNamespaceURI(this.items[E]) === NS.HTML) switch (this.tagIDs[E]) {
			case e: return !0;
			case TAG_ID.TABLE:
			case TAG_ID.HTML: return !1;
		}
		return !0;
	}
	hasTableBodyContextInTableScope() {
		for (let e = this.stackTop; e >= 0; e--) if (this.treeAdapter.getNamespaceURI(this.items[e]) === NS.HTML) switch (this.tagIDs[e]) {
			case TAG_ID.TBODY:
			case TAG_ID.THEAD:
			case TAG_ID.TFOOT: return !0;
			case TAG_ID.TABLE:
			case TAG_ID.HTML: return !1;
		}
		return !0;
	}
	hasInSelectScope(e) {
		for (let E = this.stackTop; E >= 0; E--) if (this.treeAdapter.getNamespaceURI(this.items[E]) === NS.HTML) switch (this.tagIDs[E]) {
			case e: return !0;
			case TAG_ID.OPTION:
			case TAG_ID.OPTGROUP: break;
			default: return !1;
		}
		return !0;
	}
	generateImpliedEndTags() {
		for (; this.currentTagId !== void 0 && IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsThoroughly() {
		for (; this.currentTagId !== void 0 && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsWithExclusion(e) {
		for (; this.currentTagId !== void 0 && this.currentTagId !== e && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId);) this.pop();
	}
}, NOAH_ARK_CAPACITY = 3, EntryType;
(function(e) {
	e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(EntryType ||= {});
var MARKER = { type: EntryType.Marker }, FormattingElementList = class {
	constructor(e) {
		this.treeAdapter = e, this.entries = [], this.bookmark = null;
	}
	_getNoahArkConditionCandidates(e, E) {
		let D = [], O = E.length, k = this.treeAdapter.getTagName(e), A = this.treeAdapter.getNamespaceURI(e);
		for (let e = 0; e < this.entries.length; e++) {
			let E = this.entries[e];
			if (E.type === EntryType.Marker) break;
			let { element: j } = E;
			if (this.treeAdapter.getTagName(j) === k && this.treeAdapter.getNamespaceURI(j) === A) {
				let E = this.treeAdapter.getAttrList(j);
				E.length === O && D.push({
					idx: e,
					attrs: E
				});
			}
		}
		return D;
	}
	_ensureNoahArkCondition(e) {
		if (this.entries.length < NOAH_ARK_CAPACITY) return;
		let E = this.treeAdapter.getAttrList(e), D = this._getNoahArkConditionCandidates(e, E);
		if (D.length < NOAH_ARK_CAPACITY) return;
		let O = new Map(E.map((e) => [e.name, e.value])), k = 0;
		for (let e = 0; e < D.length; e++) {
			let E = D[e];
			E.attrs.every((e) => O.get(e.name) === e.value) && (k += 1, k >= NOAH_ARK_CAPACITY && this.entries.splice(E.idx, 1));
		}
	}
	insertMarker() {
		this.entries.unshift(MARKER);
	}
	pushElement(e, E) {
		this._ensureNoahArkCondition(e), this.entries.unshift({
			type: EntryType.Element,
			element: e,
			token: E
		});
	}
	insertElementAfterBookmark(e, E) {
		let D = this.entries.indexOf(this.bookmark);
		this.entries.splice(D, 0, {
			type: EntryType.Element,
			element: e,
			token: E
		});
	}
	removeEntry(e) {
		let E = this.entries.indexOf(e);
		E !== -1 && this.entries.splice(E, 1);
	}
	clearToLastMarker() {
		let e = this.entries.indexOf(MARKER);
		e === -1 ? this.entries.length = 0 : this.entries.splice(0, e + 1);
	}
	getElementEntryInScopeWithTagName(e) {
		let E = this.entries.find((E) => E.type === EntryType.Marker || this.treeAdapter.getTagName(E.element) === e);
		return E && E.type === EntryType.Element ? E : null;
	}
	getElementEntry(e) {
		return this.entries.find((E) => E.type === EntryType.Element && E.element === e);
	}
};
const defaultTreeAdapter = {
	createDocument() {
		return {
			nodeName: "#document",
			mode: DOCUMENT_MODE.NO_QUIRKS,
			childNodes: []
		};
	},
	createDocumentFragment() {
		return {
			nodeName: "#document-fragment",
			childNodes: []
		};
	},
	createElement(e, E, D) {
		return {
			nodeName: e,
			tagName: e,
			attrs: D,
			namespaceURI: E,
			childNodes: [],
			parentNode: null
		};
	},
	createCommentNode(e) {
		return {
			nodeName: "#comment",
			data: e,
			parentNode: null
		};
	},
	createTextNode(e) {
		return {
			nodeName: "#text",
			value: e,
			parentNode: null
		};
	},
	appendChild(e, E) {
		e.childNodes.push(E), E.parentNode = e;
	},
	insertBefore(e, E, D) {
		let O = e.childNodes.indexOf(D);
		e.childNodes.splice(O, 0, E), E.parentNode = e;
	},
	setTemplateContent(e, E) {
		e.content = E;
	},
	getTemplateContent(e) {
		return e.content;
	},
	setDocumentType(e, E, D, O) {
		let k = e.childNodes.find((e) => e.nodeName === "#documentType");
		if (k) k.name = E, k.publicId = D, k.systemId = O;
		else {
			let k = {
				nodeName: "#documentType",
				name: E,
				publicId: D,
				systemId: O,
				parentNode: null
			};
			defaultTreeAdapter.appendChild(e, k);
		}
	},
	setDocumentMode(e, E) {
		e.mode = E;
	},
	getDocumentMode(e) {
		return e.mode;
	},
	detachNode(e) {
		if (e.parentNode) {
			let E = e.parentNode.childNodes.indexOf(e);
			e.parentNode.childNodes.splice(E, 1), e.parentNode = null;
		}
	},
	insertText(e, E) {
		if (e.childNodes.length > 0) {
			let D = e.childNodes[e.childNodes.length - 1];
			if (defaultTreeAdapter.isTextNode(D)) {
				D.value += E;
				return;
			}
		}
		defaultTreeAdapter.appendChild(e, defaultTreeAdapter.createTextNode(E));
	},
	insertTextBefore(e, E, D) {
		let O = e.childNodes[e.childNodes.indexOf(D) - 1];
		O && defaultTreeAdapter.isTextNode(O) ? O.value += E : defaultTreeAdapter.insertBefore(e, defaultTreeAdapter.createTextNode(E), D);
	},
	adoptAttributes(e, E) {
		let D = new Set(e.attrs.map((e) => e.name));
		for (let O = 0; O < E.length; O++) D.has(E[O].name) || e.attrs.push(E[O]);
	},
	getFirstChild(e) {
		return e.childNodes[0];
	},
	getChildNodes(e) {
		return e.childNodes;
	},
	getParentNode(e) {
		return e.parentNode;
	},
	getAttrList(e) {
		return e.attrs;
	},
	getTagName(e) {
		return e.tagName;
	},
	getNamespaceURI(e) {
		return e.namespaceURI;
	},
	getTextNodeContent(e) {
		return e.value;
	},
	getCommentNodeContent(e) {
		return e.data;
	},
	getDocumentTypeNodeName(e) {
		return e.name;
	},
	getDocumentTypeNodePublicId(e) {
		return e.publicId;
	},
	getDocumentTypeNodeSystemId(e) {
		return e.systemId;
	},
	isTextNode(e) {
		return e.nodeName === "#text";
	},
	isCommentNode(e) {
		return e.nodeName === "#comment";
	},
	isDocumentTypeNode(e) {
		return e.nodeName === "#documentType";
	},
	isElementNode(e) {
		return Object.prototype.hasOwnProperty.call(e, "tagName");
	},
	setNodeSourceCodeLocation(e, E) {
		e.sourceCodeLocation = E;
	},
	getNodeSourceCodeLocation(e) {
		return e.sourceCodeLocation;
	},
	updateNodeSourceCodeLocation(e, E) {
		e.sourceCodeLocation = {
			...e.sourceCodeLocation,
			...E
		};
	}
};
var VALID_DOCTYPE_NAME = "html", VALID_SYSTEM_ID = "about:legacy-compat", QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", QUIRKS_MODE_PUBLIC_ID_PREFIXES = /* @__PURE__ */ "+//silmaril//dtd html pro v0r11 19970101//,-//as//dtd html 3.0 aswedit + extensions//,-//advasoft ltd//dtd html 3.0 aswedit + extensions//,-//ietf//dtd html 2.0 level 1//,-//ietf//dtd html 2.0 level 2//,-//ietf//dtd html 2.0 strict level 1//,-//ietf//dtd html 2.0 strict level 2//,-//ietf//dtd html 2.0 strict//,-//ietf//dtd html 2.0//,-//ietf//dtd html 2.1e//,-//ietf//dtd html 3.0//,-//ietf//dtd html 3.2 final//,-//ietf//dtd html 3.2//,-//ietf//dtd html 3//,-//ietf//dtd html level 0//,-//ietf//dtd html level 1//,-//ietf//dtd html level 2//,-//ietf//dtd html level 3//,-//ietf//dtd html strict level 0//,-//ietf//dtd html strict level 1//,-//ietf//dtd html strict level 2//,-//ietf//dtd html strict level 3//,-//ietf//dtd html strict//,-//ietf//dtd html//,-//metrius//dtd metrius presentational//,-//microsoft//dtd internet explorer 2.0 html strict//,-//microsoft//dtd internet explorer 2.0 html//,-//microsoft//dtd internet explorer 2.0 tables//,-//microsoft//dtd internet explorer 3.0 html strict//,-//microsoft//dtd internet explorer 3.0 html//,-//microsoft//dtd internet explorer 3.0 tables//,-//netscape comm. corp.//dtd html//,-//netscape comm. corp.//dtd strict html//,-//o'reilly and associates//dtd html 2.0//,-//o'reilly and associates//dtd html extended 1.0//,-//o'reilly and associates//dtd html extended relaxed 1.0//,-//sq//dtd html 2.0 hotmetal + extensions//,-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//,-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//,-//spyglass//dtd html 2.0 extended//,-//sun microsystems corp.//dtd hotjava html//,-//sun microsystems corp.//dtd hotjava strict html//,-//w3c//dtd html 3 1995-03-24//,-//w3c//dtd html 3.2 draft//,-//w3c//dtd html 3.2 final//,-//w3c//dtd html 3.2//,-//w3c//dtd html 3.2s draft//,-//w3c//dtd html 4.0 frameset//,-//w3c//dtd html 4.0 transitional//,-//w3c//dtd html experimental 19960712//,-//w3c//dtd html experimental 970421//,-//w3c//dtd w3 html//,-//w3o//dtd w3 html 3.0//,-//webtechs//dtd mozilla html 2.0//,-//webtechs//dtd mozilla html//".split(","), QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
	...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
], QUIRKS_MODE_PUBLIC_IDS = new Set([
	"-//w3o//dtd w3 html strict 3.0//en//",
	"-/w3c/dtd html 4.0 transitional/en",
	"html"
]), LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
	...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
];
function hasPrefix(e, E) {
	return E.some((E) => e.startsWith(E));
}
function isConforming(e) {
	return e.name === VALID_DOCTYPE_NAME && e.publicId === null && (e.systemId === null || e.systemId === VALID_SYSTEM_ID);
}
function getDocumentMode(e) {
	if (e.name !== VALID_DOCTYPE_NAME) return DOCUMENT_MODE.QUIRKS;
	let { systemId: E } = e;
	if (E && E.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) return DOCUMENT_MODE.QUIRKS;
	let { publicId: D } = e;
	if (D !== null) {
		if (D = D.toLowerCase(), QUIRKS_MODE_PUBLIC_IDS.has(D)) return DOCUMENT_MODE.QUIRKS;
		let e = E === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
		if (hasPrefix(D, e)) return DOCUMENT_MODE.QUIRKS;
		if (e = E === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES, hasPrefix(D, e)) return DOCUMENT_MODE.LIMITED_QUIRKS;
	}
	return DOCUMENT_MODE.NO_QUIRKS;
}
var MIME_TYPES = {
	TEXT_HTML: "text/html",
	APPLICATION_XML: "application/xhtml+xml"
}, DEFINITION_URL_ATTR = "definitionurl", ADJUSTED_DEFINITION_URL_ATTR = "definitionURL", SVG_ATTRS_ADJUSTMENT_MAP = new Map((/* @__PURE__ */ "attributeName.attributeType.baseFrequency.baseProfile.calcMode.clipPathUnits.diffuseConstant.edgeMode.filterUnits.glyphRef.gradientTransform.gradientUnits.kernelMatrix.kernelUnitLength.keyPoints.keySplines.keyTimes.lengthAdjust.limitingConeAngle.markerHeight.markerUnits.markerWidth.maskContentUnits.maskUnits.numOctaves.pathLength.patternContentUnits.patternTransform.patternUnits.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.refX.refY.repeatCount.repeatDur.requiredExtensions.requiredFeatures.specularConstant.specularExponent.spreadMethod.startOffset.stdDeviation.stitchTiles.surfaceScale.systemLanguage.tableValues.targetX.targetY.textLength.viewBox.viewTarget.xChannelSelector.yChannelSelector.zoomAndPan".split(".")).map((e) => [e.toLowerCase(), e])), XML_ATTRS_ADJUSTMENT_MAP = new Map([
	["xlink:actuate", {
		prefix: "xlink",
		name: "actuate",
		namespace: NS.XLINK
	}],
	["xlink:arcrole", {
		prefix: "xlink",
		name: "arcrole",
		namespace: NS.XLINK
	}],
	["xlink:href", {
		prefix: "xlink",
		name: "href",
		namespace: NS.XLINK
	}],
	["xlink:role", {
		prefix: "xlink",
		name: "role",
		namespace: NS.XLINK
	}],
	["xlink:show", {
		prefix: "xlink",
		name: "show",
		namespace: NS.XLINK
	}],
	["xlink:title", {
		prefix: "xlink",
		name: "title",
		namespace: NS.XLINK
	}],
	["xlink:type", {
		prefix: "xlink",
		name: "type",
		namespace: NS.XLINK
	}],
	["xml:lang", {
		prefix: "xml",
		name: "lang",
		namespace: NS.XML
	}],
	["xml:space", {
		prefix: "xml",
		name: "space",
		namespace: NS.XML
	}],
	["xmlns", {
		prefix: "",
		name: "xmlns",
		namespace: NS.XMLNS
	}],
	["xmlns:xlink", {
		prefix: "xmlns",
		name: "xlink",
		namespace: NS.XMLNS
	}]
]);
const SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map((/* @__PURE__ */ "altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.textPath".split(".")).map((e) => [e.toLowerCase(), e]));
var EXITS_FOREIGN_CONTENT = new Set([
	TAG_ID.B,
	TAG_ID.BIG,
	TAG_ID.BLOCKQUOTE,
	TAG_ID.BODY,
	TAG_ID.BR,
	TAG_ID.CENTER,
	TAG_ID.CODE,
	TAG_ID.DD,
	TAG_ID.DIV,
	TAG_ID.DL,
	TAG_ID.DT,
	TAG_ID.EM,
	TAG_ID.EMBED,
	TAG_ID.H1,
	TAG_ID.H2,
	TAG_ID.H3,
	TAG_ID.H4,
	TAG_ID.H5,
	TAG_ID.H6,
	TAG_ID.HEAD,
	TAG_ID.HR,
	TAG_ID.I,
	TAG_ID.IMG,
	TAG_ID.LI,
	TAG_ID.LISTING,
	TAG_ID.MENU,
	TAG_ID.META,
	TAG_ID.NOBR,
	TAG_ID.OL,
	TAG_ID.P,
	TAG_ID.PRE,
	TAG_ID.RUBY,
	TAG_ID.S,
	TAG_ID.SMALL,
	TAG_ID.SPAN,
	TAG_ID.STRONG,
	TAG_ID.STRIKE,
	TAG_ID.SUB,
	TAG_ID.SUP,
	TAG_ID.TABLE,
	TAG_ID.TT,
	TAG_ID.U,
	TAG_ID.UL,
	TAG_ID.VAR
]);
function causesExit(e) {
	let E = e.tagID;
	return E === TAG_ID.FONT && e.attrs.some(({ name: e }) => e === ATTRS.COLOR || e === ATTRS.SIZE || e === ATTRS.FACE) || EXITS_FOREIGN_CONTENT.has(E);
}
function adjustTokenMathMLAttrs(e) {
	for (let E = 0; E < e.attrs.length; E++) if (e.attrs[E].name === DEFINITION_URL_ATTR) {
		e.attrs[E].name = ADJUSTED_DEFINITION_URL_ATTR;
		break;
	}
}
function adjustTokenSVGAttrs(e) {
	for (let E = 0; E < e.attrs.length; E++) {
		let D = SVG_ATTRS_ADJUSTMENT_MAP.get(e.attrs[E].name);
		D != null && (e.attrs[E].name = D);
	}
}
function adjustTokenXMLAttrs(e) {
	for (let E = 0; E < e.attrs.length; E++) {
		let D = XML_ATTRS_ADJUSTMENT_MAP.get(e.attrs[E].name);
		D && (e.attrs[E].prefix = D.prefix, e.attrs[E].name = D.name, e.attrs[E].namespace = D.namespace);
	}
}
function adjustTokenSVGTagName(e) {
	let E = SVG_TAG_NAMES_ADJUSTMENT_MAP.get(e.tagName);
	E != null && (e.tagName = E, e.tagID = getTagID(e.tagName));
}
function isMathMLTextIntegrationPoint(e, E) {
	return E === NS.MATHML && (e === TAG_ID.MI || e === TAG_ID.MO || e === TAG_ID.MN || e === TAG_ID.MS || e === TAG_ID.MTEXT);
}
function isHtmlIntegrationPoint(e, E, D) {
	if (E === NS.MATHML && e === TAG_ID.ANNOTATION_XML) {
		for (let e = 0; e < D.length; e++) if (D[e].name === ATTRS.ENCODING) {
			let E = D[e].value.toLowerCase();
			return E === MIME_TYPES.TEXT_HTML || E === MIME_TYPES.APPLICATION_XML;
		}
	}
	return E === NS.SVG && (e === TAG_ID.FOREIGN_OBJECT || e === TAG_ID.DESC || e === TAG_ID.TITLE);
}
function isIntegrationPoint(e, E, D, O) {
	return (!O || O === NS.HTML) && isHtmlIntegrationPoint(e, E, D) || (!O || O === NS.MATHML) && isMathMLTextIntegrationPoint(e, E);
}
var HIDDEN_INPUT_TYPE = "hidden", AA_OUTER_LOOP_ITER = 8, AA_INNER_LOOP_ITER = 3, InsertionMode;
(function(e) {
	e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(InsertionMode ||= {});
var BASE_LOC = {
	startLine: -1,
	startCol: -1,
	startOffset: -1,
	endLine: -1,
	endCol: -1,
	endOffset: -1
}, TABLE_STRUCTURE_TAGS = new Set([
	TAG_ID.TABLE,
	TAG_ID.TBODY,
	TAG_ID.TFOOT,
	TAG_ID.THEAD,
	TAG_ID.TR
]), defaultParserOptions = {
	scriptingEnabled: !0,
	sourceCodeLocationInfo: !1,
	treeAdapter: defaultTreeAdapter,
	onParseError: null
}, Parser = class {
	constructor(e, E, D = null, O = null) {
		this.fragmentContext = D, this.scriptHandler = O, this.currentToken = null, this.stopped = !1, this.insertionMode = InsertionMode.INITIAL, this.originalInsertionMode = InsertionMode.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
			...defaultParserOptions,
			...e
		}, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = E ?? this.treeAdapter.createDocument(), this.tokenizer = new Tokenizer(this.options, this), this.activeFormattingElements = new FormattingElementList(this.treeAdapter), this.fragmentContextID = D ? getTagID(this.treeAdapter.getTagName(D)) : TAG_ID.UNKNOWN, this._setContextModes(D ?? this.document, this.fragmentContextID), this.openElements = new OpenElementStack(this.document, this.treeAdapter, this);
	}
	static parse(e, E) {
		let D = new this(E);
		return D.tokenizer.write(e, !0), D.document;
	}
	static getFragmentParser(e, E) {
		let D = {
			...defaultParserOptions,
			...E
		};
		e ??= D.treeAdapter.createElement(TAG_NAMES.TEMPLATE, NS.HTML, []);
		let O = D.treeAdapter.createElement("documentmock", NS.HTML, []), k = new this(D, O, e);
		return k.fragmentContextID === TAG_ID.TEMPLATE && k.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE), k._initTokenizerForFragmentParsing(), k._insertFakeRootElement(), k._resetInsertionMode(), k._findFormInFragmentContext(), k;
	}
	getFragment() {
		let e = this.treeAdapter.getFirstChild(this.document), E = this.treeAdapter.createDocumentFragment();
		return this._adoptNodes(e, E), E;
	}
	_err(e, E, D) {
		if (!this.onParseError) return;
		let O = e.location ?? BASE_LOC, k = {
			code: E,
			startLine: O.startLine,
			startCol: O.startCol,
			startOffset: O.startOffset,
			endLine: D ? O.startLine : O.endLine,
			endCol: D ? O.startCol : O.endCol,
			endOffset: D ? O.startOffset : O.endOffset
		};
		this.onParseError(k);
	}
	onItemPush(e, E, D) {
		var O, k;
		(k = (O = this.treeAdapter).onItemPush) == null || k.call(O, e), D && this.openElements.stackTop > 0 && this._setContextModes(e, E);
	}
	onItemPop(e, E) {
		var D, O;
		if (this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken), (O = (D = this.treeAdapter).onItemPop) == null || O.call(D, e, this.openElements.current), E) {
			let e, E;
			this.openElements.stackTop === 0 && this.fragmentContext ? (e = this.fragmentContext, E = this.fragmentContextID) : {current: e, currentTagId: E} = this.openElements, this._setContextModes(e, E);
		}
	}
	_setContextModes(e, E) {
		let D = e === this.document || e && this.treeAdapter.getNamespaceURI(e) === NS.HTML;
		this.currentNotInHTML = !D, this.tokenizer.inForeignNode = !D && e !== void 0 && E !== void 0 && !this._isIntegrationPoint(E, e);
	}
	_switchToTextParsing(e, E) {
		this._insertElement(e, NS.HTML), this.tokenizer.state = E, this.originalInsertionMode = this.insertionMode, this.insertionMode = InsertionMode.TEXT;
	}
	switchToPlaintextParsing() {
		this.insertionMode = InsertionMode.TEXT, this.originalInsertionMode = InsertionMode.IN_BODY, this.tokenizer.state = TokenizerMode.PLAINTEXT;
	}
	_getAdjustedCurrentElement() {
		return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
	}
	_findFormInFragmentContext() {
		let e = this.fragmentContext;
		for (; e;) {
			if (this.treeAdapter.getTagName(e) === TAG_NAMES.FORM) {
				this.formElement = e;
				break;
			}
			e = this.treeAdapter.getParentNode(e);
		}
	}
	_initTokenizerForFragmentParsing() {
		if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== NS.HTML)) switch (this.fragmentContextID) {
			case TAG_ID.TITLE:
			case TAG_ID.TEXTAREA:
				this.tokenizer.state = TokenizerMode.RCDATA;
				break;
			case TAG_ID.STYLE:
			case TAG_ID.XMP:
			case TAG_ID.IFRAME:
			case TAG_ID.NOEMBED:
			case TAG_ID.NOFRAMES:
			case TAG_ID.NOSCRIPT:
				this.tokenizer.state = TokenizerMode.RAWTEXT;
				break;
			case TAG_ID.SCRIPT:
				this.tokenizer.state = TokenizerMode.SCRIPT_DATA;
				break;
			case TAG_ID.PLAINTEXT:
				this.tokenizer.state = TokenizerMode.PLAINTEXT;
				break;
			default:
		}
	}
	_setDocumentType(e) {
		let E = e.name || "", D = e.publicId || "", O = e.systemId || "";
		if (this.treeAdapter.setDocumentType(this.document, E, D, O), e.location) {
			let E = this.treeAdapter.getChildNodes(this.document).find((e) => this.treeAdapter.isDocumentTypeNode(e));
			E && this.treeAdapter.setNodeSourceCodeLocation(E, e.location);
		}
	}
	_attachElementToTree(e, E) {
		if (this.options.sourceCodeLocationInfo) {
			let D = E && {
				...E,
				startTag: E
			};
			this.treeAdapter.setNodeSourceCodeLocation(e, D);
		}
		if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e);
		else {
			let E = this.openElements.currentTmplContentOrNode;
			this.treeAdapter.appendChild(E ?? this.document, e);
		}
	}
	_appendElement(e, E) {
		let D = this.treeAdapter.createElement(e.tagName, E, e.attrs);
		this._attachElementToTree(D, e.location);
	}
	_insertElement(e, E) {
		let D = this.treeAdapter.createElement(e.tagName, E, e.attrs);
		this._attachElementToTree(D, e.location), this.openElements.push(D, e.tagID);
	}
	_insertFakeElement(e, E) {
		let D = this.treeAdapter.createElement(e, NS.HTML, []);
		this._attachElementToTree(D, null), this.openElements.push(D, E);
	}
	_insertTemplate(e) {
		let E = this.treeAdapter.createElement(e.tagName, NS.HTML, e.attrs), D = this.treeAdapter.createDocumentFragment();
		this.treeAdapter.setTemplateContent(E, D), this._attachElementToTree(E, e.location), this.openElements.push(E, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(D, null);
	}
	_insertFakeRootElement() {
		let e = this.treeAdapter.createElement(TAG_NAMES.HTML, NS.HTML, []);
		this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, TAG_ID.HTML);
	}
	_appendCommentNode(e, E) {
		let D = this.treeAdapter.createCommentNode(e.data);
		this.treeAdapter.appendChild(E, D), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(D, e.location);
	}
	_insertCharacters(e) {
		let E, D;
		if (this._shouldFosterParentOnInsertion() ? ({parent: E, beforeElement: D} = this._findFosterParentingLocation(), D ? this.treeAdapter.insertTextBefore(E, e.chars, D) : this.treeAdapter.insertText(E, e.chars)) : (E = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(E, e.chars)), !e.location) return;
		let O = this.treeAdapter.getChildNodes(E), k = O[(D ? O.lastIndexOf(D) : O.length) - 1];
		if (this.treeAdapter.getNodeSourceCodeLocation(k)) {
			let { endLine: E, endCol: D, endOffset: O } = e.location;
			this.treeAdapter.updateNodeSourceCodeLocation(k, {
				endLine: E,
				endCol: D,
				endOffset: O
			});
		} else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(k, e.location);
	}
	_adoptNodes(e, E) {
		for (let D = this.treeAdapter.getFirstChild(e); D; D = this.treeAdapter.getFirstChild(e)) this.treeAdapter.detachNode(D), this.treeAdapter.appendChild(E, D);
	}
	_setEndLocation(e, E) {
		if (this.treeAdapter.getNodeSourceCodeLocation(e) && E.location) {
			let D = E.location, O = this.treeAdapter.getTagName(e), k = E.type === TokenType.END_TAG && O === E.tagName ? {
				endTag: { ...D },
				endLine: D.endLine,
				endCol: D.endCol,
				endOffset: D.endOffset
			} : {
				endLine: D.startLine,
				endCol: D.startCol,
				endOffset: D.startOffset
			};
			this.treeAdapter.updateNodeSourceCodeLocation(e, k);
		}
	}
	shouldProcessStartTagTokenInForeignContent(e) {
		if (!this.currentNotInHTML) return !1;
		let E, D;
		return this.openElements.stackTop === 0 && this.fragmentContext ? (E = this.fragmentContext, D = this.fragmentContextID) : {current: E, currentTagId: D} = this.openElements, e.tagID === TAG_ID.SVG && this.treeAdapter.getTagName(E) === TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(E) === NS.MATHML ? !1 : this.tokenizer.inForeignNode || (e.tagID === TAG_ID.MGLYPH || e.tagID === TAG_ID.MALIGNMARK) && D !== void 0 && !this._isIntegrationPoint(D, E, NS.HTML);
	}
	_processToken(e) {
		switch (e.type) {
			case TokenType.CHARACTER:
				this.onCharacter(e);
				break;
			case TokenType.NULL_CHARACTER:
				this.onNullCharacter(e);
				break;
			case TokenType.COMMENT:
				this.onComment(e);
				break;
			case TokenType.DOCTYPE:
				this.onDoctype(e);
				break;
			case TokenType.START_TAG:
				this._processStartTag(e);
				break;
			case TokenType.END_TAG:
				this.onEndTag(e);
				break;
			case TokenType.EOF:
				this.onEof(e);
				break;
			case TokenType.WHITESPACE_CHARACTER:
				this.onWhitespaceCharacter(e);
				break;
		}
	}
	_isIntegrationPoint(e, E, D) {
		return isIntegrationPoint(e, this.treeAdapter.getNamespaceURI(E), this.treeAdapter.getAttrList(E), D);
	}
	_reconstructActiveFormattingElements() {
		let e = this.activeFormattingElements.entries.length;
		if (e) {
			let E = this.activeFormattingElements.entries.findIndex((e) => e.type === EntryType.Marker || this.openElements.contains(e.element)), D = E === -1 ? e - 1 : E - 1;
			for (let e = D; e >= 0; e--) {
				let E = this.activeFormattingElements.entries[e];
				this._insertElement(E.token, this.treeAdapter.getNamespaceURI(E.element)), E.element = this.openElements.current;
			}
		}
	}
	_closeTableCell() {
		this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = InsertionMode.IN_ROW;
	}
	_closePElement() {
		this.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.P), this.openElements.popUntilTagNamePopped(TAG_ID.P);
	}
	_resetInsertionMode() {
		for (let e = this.openElements.stackTop; e >= 0; e--) switch (e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
			case TAG_ID.TR:
				this.insertionMode = InsertionMode.IN_ROW;
				return;
			case TAG_ID.TBODY:
			case TAG_ID.THEAD:
			case TAG_ID.TFOOT:
				this.insertionMode = InsertionMode.IN_TABLE_BODY;
				return;
			case TAG_ID.CAPTION:
				this.insertionMode = InsertionMode.IN_CAPTION;
				return;
			case TAG_ID.COLGROUP:
				this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
				return;
			case TAG_ID.TABLE:
				this.insertionMode = InsertionMode.IN_TABLE;
				return;
			case TAG_ID.BODY:
				this.insertionMode = InsertionMode.IN_BODY;
				return;
			case TAG_ID.FRAMESET:
				this.insertionMode = InsertionMode.IN_FRAMESET;
				return;
			case TAG_ID.SELECT:
				this._resetInsertionModeForSelect(e);
				return;
			case TAG_ID.TEMPLATE:
				this.insertionMode = this.tmplInsertionModeStack[0];
				return;
			case TAG_ID.HTML:
				this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
				return;
			case TAG_ID.TD:
			case TAG_ID.TH:
				if (e > 0) {
					this.insertionMode = InsertionMode.IN_CELL;
					return;
				}
				break;
			case TAG_ID.HEAD:
				if (e > 0) {
					this.insertionMode = InsertionMode.IN_HEAD;
					return;
				}
				break;
		}
		this.insertionMode = InsertionMode.IN_BODY;
	}
	_resetInsertionModeForSelect(e) {
		if (e > 0) for (let E = e - 1; E > 0; E--) {
			let e = this.openElements.tagIDs[E];
			if (e === TAG_ID.TEMPLATE) break;
			if (e === TAG_ID.TABLE) {
				this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
				return;
			}
		}
		this.insertionMode = InsertionMode.IN_SELECT;
	}
	_isElementCausesFosterParenting(e) {
		return TABLE_STRUCTURE_TAGS.has(e);
	}
	_shouldFosterParentOnInsertion() {
		return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
	}
	_findFosterParentingLocation() {
		for (let e = this.openElements.stackTop; e >= 0; e--) {
			let E = this.openElements.items[e];
			switch (this.openElements.tagIDs[e]) {
				case TAG_ID.TEMPLATE:
					if (this.treeAdapter.getNamespaceURI(E) === NS.HTML) return {
						parent: this.treeAdapter.getTemplateContent(E),
						beforeElement: null
					};
					break;
				case TAG_ID.TABLE: {
					let D = this.treeAdapter.getParentNode(E);
					return D ? {
						parent: D,
						beforeElement: E
					} : {
						parent: this.openElements.items[e - 1],
						beforeElement: null
					};
				}
				default:
			}
		}
		return {
			parent: this.openElements.items[0],
			beforeElement: null
		};
	}
	_fosterParentElement(e) {
		let E = this._findFosterParentingLocation();
		E.beforeElement ? this.treeAdapter.insertBefore(E.parent, e, E.beforeElement) : this.treeAdapter.appendChild(E.parent, e);
	}
	_isSpecialElement(e, E) {
		return SPECIAL_ELEMENTS[this.treeAdapter.getNamespaceURI(e)].has(E);
	}
	onCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			characterInForeignContent(this, e);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, e);
				break;
			case InsertionMode.BEFORE_HTML:
				tokenBeforeHtml(this, e);
				break;
			case InsertionMode.BEFORE_HEAD:
				tokenBeforeHead(this, e);
				break;
			case InsertionMode.IN_HEAD:
				tokenInHead(this, e);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				tokenInHeadNoScript(this, e);
				break;
			case InsertionMode.AFTER_HEAD:
				tokenAfterHead(this, e);
				break;
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_TEMPLATE:
				characterInBody(this, e);
				break;
			case InsertionMode.TEXT:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
				this._insertCharacters(e);
				break;
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
				characterInTable(this, e);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				characterInTableText(this, e);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				tokenInColumnGroup(this, e);
				break;
			case InsertionMode.AFTER_BODY:
				tokenAfterBody(this, e);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				tokenAfterAfterBody(this, e);
				break;
			default:
		}
	}
	onNullCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			nullCharacterInForeignContent(this, e);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, e);
				break;
			case InsertionMode.BEFORE_HTML:
				tokenBeforeHtml(this, e);
				break;
			case InsertionMode.BEFORE_HEAD:
				tokenBeforeHead(this, e);
				break;
			case InsertionMode.IN_HEAD:
				tokenInHead(this, e);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				tokenInHeadNoScript(this, e);
				break;
			case InsertionMode.AFTER_HEAD:
				tokenAfterHead(this, e);
				break;
			case InsertionMode.TEXT:
				this._insertCharacters(e);
				break;
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
				characterInTable(this, e);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				tokenInColumnGroup(this, e);
				break;
			case InsertionMode.AFTER_BODY:
				tokenAfterBody(this, e);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				tokenAfterAfterBody(this, e);
				break;
			default:
		}
	}
	onComment(e) {
		if (this.skipNextNewLine = !1, this.currentNotInHTML) {
			appendComment(this, e);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
			case InsertionMode.BEFORE_HTML:
			case InsertionMode.BEFORE_HEAD:
			case InsertionMode.IN_HEAD:
			case InsertionMode.IN_HEAD_NO_SCRIPT:
			case InsertionMode.AFTER_HEAD:
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_COLUMN_GROUP:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
			case InsertionMode.IN_TEMPLATE:
			case InsertionMode.IN_FRAMESET:
			case InsertionMode.AFTER_FRAMESET:
				appendComment(this, e);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, e);
				break;
			case InsertionMode.AFTER_BODY:
				appendCommentToRootHtmlElement(this, e);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
			case InsertionMode.AFTER_AFTER_FRAMESET:
				appendCommentToDocument(this, e);
				break;
			default:
		}
	}
	onDoctype(e) {
		switch (this.skipNextNewLine = !1, this.insertionMode) {
			case InsertionMode.INITIAL:
				doctypeInInitialMode(this, e);
				break;
			case InsertionMode.BEFORE_HEAD:
			case InsertionMode.IN_HEAD:
			case InsertionMode.IN_HEAD_NO_SCRIPT:
			case InsertionMode.AFTER_HEAD:
				this._err(e, ERR.misplacedDoctype);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, e);
				break;
			default:
		}
	}
	onStartTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
	}
	_processStartTag(e) {
		this.shouldProcessStartTagTokenInForeignContent(e) ? startTagInForeignContent(this, e) : this._startTagOutsideForeignContent(e);
	}
	_startTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, e);
				break;
			case InsertionMode.BEFORE_HTML:
				startTagBeforeHtml(this, e);
				break;
			case InsertionMode.BEFORE_HEAD:
				startTagBeforeHead(this, e);
				break;
			case InsertionMode.IN_HEAD:
				startTagInHead(this, e);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				startTagInHeadNoScript(this, e);
				break;
			case InsertionMode.AFTER_HEAD:
				startTagAfterHead(this, e);
				break;
			case InsertionMode.IN_BODY:
				startTagInBody(this, e);
				break;
			case InsertionMode.IN_TABLE:
				startTagInTable(this, e);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, e);
				break;
			case InsertionMode.IN_CAPTION:
				startTagInCaption(this, e);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				startTagInColumnGroup(this, e);
				break;
			case InsertionMode.IN_TABLE_BODY:
				startTagInTableBody(this, e);
				break;
			case InsertionMode.IN_ROW:
				startTagInRow(this, e);
				break;
			case InsertionMode.IN_CELL:
				startTagInCell(this, e);
				break;
			case InsertionMode.IN_SELECT:
				startTagInSelect(this, e);
				break;
			case InsertionMode.IN_SELECT_IN_TABLE:
				startTagInSelectInTable(this, e);
				break;
			case InsertionMode.IN_TEMPLATE:
				startTagInTemplate(this, e);
				break;
			case InsertionMode.AFTER_BODY:
				startTagAfterBody(this, e);
				break;
			case InsertionMode.IN_FRAMESET:
				startTagInFrameset(this, e);
				break;
			case InsertionMode.AFTER_FRAMESET:
				startTagAfterFrameset(this, e);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				startTagAfterAfterBody(this, e);
				break;
			case InsertionMode.AFTER_AFTER_FRAMESET:
				startTagAfterAfterFrameset(this, e);
				break;
			default:
		}
	}
	onEndTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? endTagInForeignContent(this, e) : this._endTagOutsideForeignContent(e);
	}
	_endTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, e);
				break;
			case InsertionMode.BEFORE_HTML:
				endTagBeforeHtml(this, e);
				break;
			case InsertionMode.BEFORE_HEAD:
				endTagBeforeHead(this, e);
				break;
			case InsertionMode.IN_HEAD:
				endTagInHead(this, e);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				endTagInHeadNoScript(this, e);
				break;
			case InsertionMode.AFTER_HEAD:
				endTagAfterHead(this, e);
				break;
			case InsertionMode.IN_BODY:
				endTagInBody(this, e);
				break;
			case InsertionMode.TEXT:
				endTagInText(this, e);
				break;
			case InsertionMode.IN_TABLE:
				endTagInTable(this, e);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, e);
				break;
			case InsertionMode.IN_CAPTION:
				endTagInCaption(this, e);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				endTagInColumnGroup(this, e);
				break;
			case InsertionMode.IN_TABLE_BODY:
				endTagInTableBody(this, e);
				break;
			case InsertionMode.IN_ROW:
				endTagInRow(this, e);
				break;
			case InsertionMode.IN_CELL:
				endTagInCell(this, e);
				break;
			case InsertionMode.IN_SELECT:
				endTagInSelect(this, e);
				break;
			case InsertionMode.IN_SELECT_IN_TABLE:
				endTagInSelectInTable(this, e);
				break;
			case InsertionMode.IN_TEMPLATE:
				endTagInTemplate(this, e);
				break;
			case InsertionMode.AFTER_BODY:
				endTagAfterBody(this, e);
				break;
			case InsertionMode.IN_FRAMESET:
				endTagInFrameset(this, e);
				break;
			case InsertionMode.AFTER_FRAMESET:
				endTagAfterFrameset(this, e);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				tokenAfterAfterBody(this, e);
				break;
			default:
		}
	}
	onEof(e) {
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, e);
				break;
			case InsertionMode.BEFORE_HTML:
				tokenBeforeHtml(this, e);
				break;
			case InsertionMode.BEFORE_HEAD:
				tokenBeforeHead(this, e);
				break;
			case InsertionMode.IN_HEAD:
				tokenInHead(this, e);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				tokenInHeadNoScript(this, e);
				break;
			case InsertionMode.AFTER_HEAD:
				tokenAfterHead(this, e);
				break;
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_COLUMN_GROUP:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
				eofInBody(this, e);
				break;
			case InsertionMode.TEXT:
				eofInText(this, e);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, e);
				break;
			case InsertionMode.IN_TEMPLATE:
				eofInTemplate(this, e);
				break;
			case InsertionMode.AFTER_BODY:
			case InsertionMode.IN_FRAMESET:
			case InsertionMode.AFTER_FRAMESET:
			case InsertionMode.AFTER_AFTER_BODY:
			case InsertionMode.AFTER_AFTER_FRAMESET:
				stopParsing(this, e);
				break;
			default:
		}
	}
	onWhitespaceCharacter(e) {
		if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === CODE_POINTS.LINE_FEED)) {
			if (e.chars.length === 1) return;
			e.chars = e.chars.substr(1);
		}
		if (this.tokenizer.inForeignNode) {
			this._insertCharacters(e);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.IN_HEAD:
			case InsertionMode.IN_HEAD_NO_SCRIPT:
			case InsertionMode.AFTER_HEAD:
			case InsertionMode.TEXT:
			case InsertionMode.IN_COLUMN_GROUP:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
			case InsertionMode.IN_FRAMESET:
			case InsertionMode.AFTER_FRAMESET:
				this._insertCharacters(e);
				break;
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_TEMPLATE:
			case InsertionMode.AFTER_BODY:
			case InsertionMode.AFTER_AFTER_BODY:
			case InsertionMode.AFTER_AFTER_FRAMESET:
				whitespaceCharacterInBody(this, e);
				break;
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
				characterInTable(this, e);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				whitespaceCharacterInTableText(this, e);
				break;
			default:
		}
	}
};
function aaObtainFormattingElementEntry(e, E) {
	let D = e.activeFormattingElements.getElementEntryInScopeWithTagName(E.tagName);
	return D ? e.openElements.contains(D.element) ? e.openElements.hasInScope(E.tagID) || (D = null) : (e.activeFormattingElements.removeEntry(D), D = null) : genericEndTagInBody(e, E), D;
}
function aaObtainFurthestBlock(e, E) {
	let D = null, O = e.openElements.stackTop;
	for (; O >= 0; O--) {
		let k = e.openElements.items[O];
		if (k === E.element) break;
		e._isSpecialElement(k, e.openElements.tagIDs[O]) && (D = k);
	}
	return D || (e.openElements.shortenToLength(Math.max(O, 0)), e.activeFormattingElements.removeEntry(E)), D;
}
function aaInnerLoop(e, E, D) {
	let O = E, k = e.openElements.getCommonAncestor(E);
	for (let A = 0, j = k; j !== D; A++, j = k) {
		k = e.openElements.getCommonAncestor(j);
		let D = e.activeFormattingElements.getElementEntry(j), M = D && A >= AA_INNER_LOOP_ITER;
		!D || M ? (M && e.activeFormattingElements.removeEntry(D), e.openElements.remove(j)) : (j = aaRecreateElementFromEntry(e, D), O === E && (e.activeFormattingElements.bookmark = D), e.treeAdapter.detachNode(O), e.treeAdapter.appendChild(j, O), O = j);
	}
	return O;
}
function aaRecreateElementFromEntry(e, E) {
	let D = e.treeAdapter.getNamespaceURI(E.element), O = e.treeAdapter.createElement(E.token.tagName, D, E.token.attrs);
	return e.openElements.replace(E.element, O), E.element = O, O;
}
function aaInsertLastNodeInCommonAncestor(e, E, D) {
	let O = getTagID(e.treeAdapter.getTagName(E));
	if (e._isElementCausesFosterParenting(O)) e._fosterParentElement(D);
	else {
		let k = e.treeAdapter.getNamespaceURI(E);
		O === TAG_ID.TEMPLATE && k === NS.HTML && (E = e.treeAdapter.getTemplateContent(E)), e.treeAdapter.appendChild(E, D);
	}
}
function aaReplaceFormattingElement(e, E, D) {
	let O = e.treeAdapter.getNamespaceURI(D.element), { token: k } = D, A = e.treeAdapter.createElement(k.tagName, O, k.attrs);
	e._adoptNodes(E, A), e.treeAdapter.appendChild(E, A), e.activeFormattingElements.insertElementAfterBookmark(A, k), e.activeFormattingElements.removeEntry(D), e.openElements.remove(D.element), e.openElements.insertAfter(E, A, k.tagID);
}
function callAdoptionAgency(e, E) {
	for (let D = 0; D < AA_OUTER_LOOP_ITER; D++) {
		let D = aaObtainFormattingElementEntry(e, E);
		if (!D) break;
		let O = aaObtainFurthestBlock(e, D);
		if (!O) break;
		e.activeFormattingElements.bookmark = D;
		let k = aaInnerLoop(e, O, D.element), A = e.openElements.getCommonAncestor(D.element);
		e.treeAdapter.detachNode(k), A && aaInsertLastNodeInCommonAncestor(e, A, k), aaReplaceFormattingElement(e, O, D);
	}
}
function appendComment(e, E) {
	e._appendCommentNode(E, e.openElements.currentTmplContentOrNode);
}
function appendCommentToRootHtmlElement(e, E) {
	e._appendCommentNode(E, e.openElements.items[0]);
}
function appendCommentToDocument(e, E) {
	e._appendCommentNode(E, e.document);
}
function stopParsing(e, E) {
	if (e.stopped = !0, E.location) {
		let D = e.fragmentContext ? 0 : 2;
		for (let O = e.openElements.stackTop; O >= D; O--) e._setEndLocation(e.openElements.items[O], E);
		if (!e.fragmentContext && e.openElements.stackTop >= 0) {
			let D = e.openElements.items[0], O = e.treeAdapter.getNodeSourceCodeLocation(D);
			if (O && !O.endTag && (e._setEndLocation(D, E), e.openElements.stackTop >= 1)) {
				let D = e.openElements.items[1], O = e.treeAdapter.getNodeSourceCodeLocation(D);
				O && !O.endTag && e._setEndLocation(D, E);
			}
		}
	}
}
function doctypeInInitialMode(e, E) {
	e._setDocumentType(E);
	let D = E.forceQuirks ? DOCUMENT_MODE.QUIRKS : getDocumentMode(E);
	isConforming(E) || e._err(E, ERR.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, D), e.insertionMode = InsertionMode.BEFORE_HTML;
}
function tokenInInitialMode(e, E) {
	e._err(E, ERR.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, DOCUMENT_MODE.QUIRKS), e.insertionMode = InsertionMode.BEFORE_HTML, e._processToken(E);
}
function startTagBeforeHtml(e, E) {
	E.tagID === TAG_ID.HTML ? (e._insertElement(E, NS.HTML), e.insertionMode = InsertionMode.BEFORE_HEAD) : tokenBeforeHtml(e, E);
}
function endTagBeforeHtml(e, E) {
	let D = E.tagID;
	(D === TAG_ID.HTML || D === TAG_ID.HEAD || D === TAG_ID.BODY || D === TAG_ID.BR) && tokenBeforeHtml(e, E);
}
function tokenBeforeHtml(e, E) {
	e._insertFakeRootElement(), e.insertionMode = InsertionMode.BEFORE_HEAD, e._processToken(E);
}
function startTagBeforeHead(e, E) {
	switch (E.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, E);
			break;
		case TAG_ID.HEAD:
			e._insertElement(E, NS.HTML), e.headElement = e.openElements.current, e.insertionMode = InsertionMode.IN_HEAD;
			break;
		default: tokenBeforeHead(e, E);
	}
}
function endTagBeforeHead(e, E) {
	let D = E.tagID;
	D === TAG_ID.HEAD || D === TAG_ID.BODY || D === TAG_ID.HTML || D === TAG_ID.BR ? tokenBeforeHead(e, E) : e._err(E, ERR.endTagWithoutMatchingOpenElement);
}
function tokenBeforeHead(e, E) {
	e._insertFakeElement(TAG_NAMES.HEAD, TAG_ID.HEAD), e.headElement = e.openElements.current, e.insertionMode = InsertionMode.IN_HEAD, e._processToken(E);
}
function startTagInHead(e, E) {
	switch (E.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, E);
			break;
		case TAG_ID.BASE:
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.LINK:
		case TAG_ID.META:
			e._appendElement(E, NS.HTML), E.ackSelfClosing = !0;
			break;
		case TAG_ID.TITLE:
			e._switchToTextParsing(E, TokenizerMode.RCDATA);
			break;
		case TAG_ID.NOSCRIPT:
			e.options.scriptingEnabled ? e._switchToTextParsing(E, TokenizerMode.RAWTEXT) : (e._insertElement(E, NS.HTML), e.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT);
			break;
		case TAG_ID.NOFRAMES:
		case TAG_ID.STYLE:
			e._switchToTextParsing(E, TokenizerMode.RAWTEXT);
			break;
		case TAG_ID.SCRIPT:
			e._switchToTextParsing(E, TokenizerMode.SCRIPT_DATA);
			break;
		case TAG_ID.TEMPLATE:
			e._insertTemplate(E), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = InsertionMode.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
			break;
		case TAG_ID.HEAD:
			e._err(E, ERR.misplacedStartTagForHeadElement);
			break;
		default: tokenInHead(e, E);
	}
}
function endTagInHead(e, E) {
	switch (E.tagID) {
		case TAG_ID.HEAD:
			e.openElements.pop(), e.insertionMode = InsertionMode.AFTER_HEAD;
			break;
		case TAG_ID.BODY:
		case TAG_ID.BR:
		case TAG_ID.HTML:
			tokenInHead(e, E);
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(e, E);
			break;
		default: e._err(E, ERR.endTagWithoutMatchingOpenElement);
	}
}
function templateEndTagInHead(e, E) {
	e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== TAG_ID.TEMPLATE && e._err(E, ERR.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(E, ERR.endTagWithoutMatchingOpenElement);
}
function tokenInHead(e, E) {
	e.openElements.pop(), e.insertionMode = InsertionMode.AFTER_HEAD, e._processToken(E);
}
function startTagInHeadNoScript(e, E) {
	switch (E.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, E);
			break;
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.HEAD:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.NOFRAMES:
		case TAG_ID.STYLE:
			startTagInHead(e, E);
			break;
		case TAG_ID.NOSCRIPT:
			e._err(E, ERR.nestedNoscriptInHead);
			break;
		default: tokenInHeadNoScript(e, E);
	}
}
function endTagInHeadNoScript(e, E) {
	switch (E.tagID) {
		case TAG_ID.NOSCRIPT:
			e.openElements.pop(), e.insertionMode = InsertionMode.IN_HEAD;
			break;
		case TAG_ID.BR:
			tokenInHeadNoScript(e, E);
			break;
		default: e._err(E, ERR.endTagWithoutMatchingOpenElement);
	}
}
function tokenInHeadNoScript(e, E) {
	let D = E.type === TokenType.EOF ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
	e._err(E, D), e.openElements.pop(), e.insertionMode = InsertionMode.IN_HEAD, e._processToken(E);
}
function startTagAfterHead(e, E) {
	switch (E.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, E);
			break;
		case TAG_ID.BODY:
			e._insertElement(E, NS.HTML), e.framesetOk = !1, e.insertionMode = InsertionMode.IN_BODY;
			break;
		case TAG_ID.FRAMESET:
			e._insertElement(E, NS.HTML), e.insertionMode = InsertionMode.IN_FRAMESET;
			break;
		case TAG_ID.BASE:
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.NOFRAMES:
		case TAG_ID.SCRIPT:
		case TAG_ID.STYLE:
		case TAG_ID.TEMPLATE:
		case TAG_ID.TITLE:
			e._err(E, ERR.abandonedHeadElementChild), e.openElements.push(e.headElement, TAG_ID.HEAD), startTagInHead(e, E), e.openElements.remove(e.headElement);
			break;
		case TAG_ID.HEAD:
			e._err(E, ERR.misplacedStartTagForHeadElement);
			break;
		default: tokenAfterHead(e, E);
	}
}
function endTagAfterHead(e, E) {
	switch (E.tagID) {
		case TAG_ID.BODY:
		case TAG_ID.HTML:
		case TAG_ID.BR:
			tokenAfterHead(e, E);
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(e, E);
			break;
		default: e._err(E, ERR.endTagWithoutMatchingOpenElement);
	}
}
function tokenAfterHead(e, E) {
	e._insertFakeElement(TAG_NAMES.BODY, TAG_ID.BODY), e.insertionMode = InsertionMode.IN_BODY, modeInBody(e, E);
}
function modeInBody(e, E) {
	switch (E.type) {
		case TokenType.CHARACTER:
			characterInBody(e, E);
			break;
		case TokenType.WHITESPACE_CHARACTER:
			whitespaceCharacterInBody(e, E);
			break;
		case TokenType.COMMENT:
			appendComment(e, E);
			break;
		case TokenType.START_TAG:
			startTagInBody(e, E);
			break;
		case TokenType.END_TAG:
			endTagInBody(e, E);
			break;
		case TokenType.EOF:
			eofInBody(e, E);
			break;
		default:
	}
}
function whitespaceCharacterInBody(e, E) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(E);
}
function characterInBody(e, E) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(E), e.framesetOk = !1;
}
function htmlStartTagInBody(e, E) {
	e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], E.attrs);
}
function bodyStartTagInBody(e, E) {
	let D = e.openElements.tryPeekProperlyNestedBodyElement();
	D && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(D, E.attrs));
}
function framesetStartTagInBody(e, E) {
	let D = e.openElements.tryPeekProperlyNestedBodyElement();
	e.framesetOk && D && (e.treeAdapter.detachNode(D), e.openElements.popAllUpToHtmlElement(), e._insertElement(E, NS.HTML), e.insertionMode = InsertionMode.IN_FRAMESET);
}
function addressStartTagInBody(e, E) {
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._insertElement(E, NS.HTML);
}
function numberedHeaderStartTagInBody(e, E) {
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e.openElements.currentTagId !== void 0 && NUMBERED_HEADERS.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(E, NS.HTML);
}
function preStartTagInBody(e, E) {
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._insertElement(E, NS.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function formStartTagInBody(e, E) {
	let D = e.openElements.tmplCount > 0;
	(!e.formElement || D) && (e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._insertElement(E, NS.HTML), D || (e.formElement = e.openElements.current));
}
function listItemStartTagInBody(e, E) {
	e.framesetOk = !1;
	let D = E.tagID;
	for (let E = e.openElements.stackTop; E >= 0; E--) {
		let O = e.openElements.tagIDs[E];
		if (D === TAG_ID.LI && O === TAG_ID.LI || (D === TAG_ID.DD || D === TAG_ID.DT) && (O === TAG_ID.DD || O === TAG_ID.DT)) {
			e.openElements.generateImpliedEndTagsWithExclusion(O), e.openElements.popUntilTagNamePopped(O);
			break;
		}
		if (O !== TAG_ID.ADDRESS && O !== TAG_ID.DIV && O !== TAG_ID.P && e._isSpecialElement(e.openElements.items[E], O)) break;
	}
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._insertElement(E, NS.HTML);
}
function plaintextStartTagInBody(e, E) {
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._insertElement(E, NS.HTML), e.tokenizer.state = TokenizerMode.PLAINTEXT;
}
function buttonStartTagInBody(e, E) {
	e.openElements.hasInScope(TAG_ID.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(TAG_ID.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(E, NS.HTML), e.framesetOk = !1;
}
function aStartTagInBody(e, E) {
	let D = e.activeFormattingElements.getElementEntryInScopeWithTagName(TAG_NAMES.A);
	D && (callAdoptionAgency(e, E), e.openElements.remove(D.element), e.activeFormattingElements.removeEntry(D)), e._reconstructActiveFormattingElements(), e._insertElement(E, NS.HTML), e.activeFormattingElements.pushElement(e.openElements.current, E);
}
function bStartTagInBody(e, E) {
	e._reconstructActiveFormattingElements(), e._insertElement(E, NS.HTML), e.activeFormattingElements.pushElement(e.openElements.current, E);
}
function nobrStartTagInBody(e, E) {
	e._reconstructActiveFormattingElements(), e.openElements.hasInScope(TAG_ID.NOBR) && (callAdoptionAgency(e, E), e._reconstructActiveFormattingElements()), e._insertElement(E, NS.HTML), e.activeFormattingElements.pushElement(e.openElements.current, E);
}
function appletStartTagInBody(e, E) {
	e._reconstructActiveFormattingElements(), e._insertElement(E, NS.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function tableStartTagInBody(e, E) {
	e.treeAdapter.getDocumentMode(e.document) !== DOCUMENT_MODE.QUIRKS && e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._insertElement(E, NS.HTML), e.framesetOk = !1, e.insertionMode = InsertionMode.IN_TABLE;
}
function areaStartTagInBody(e, E) {
	e._reconstructActiveFormattingElements(), e._appendElement(E, NS.HTML), e.framesetOk = !1, E.ackSelfClosing = !0;
}
function isHiddenInput(e) {
	let E = getTokenAttr(e, ATTRS.TYPE);
	return E != null && E.toLowerCase() === HIDDEN_INPUT_TYPE;
}
function inputStartTagInBody(e, E) {
	e._reconstructActiveFormattingElements(), e._appendElement(E, NS.HTML), isHiddenInput(E) || (e.framesetOk = !1), E.ackSelfClosing = !0;
}
function paramStartTagInBody(e, E) {
	e._appendElement(E, NS.HTML), E.ackSelfClosing = !0;
}
function hrStartTagInBody(e, E) {
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._appendElement(E, NS.HTML), e.framesetOk = !1, E.ackSelfClosing = !0;
}
function imageStartTagInBody(e, E) {
	E.tagName = TAG_NAMES.IMG, E.tagID = TAG_ID.IMG, areaStartTagInBody(e, E);
}
function textareaStartTagInBody(e, E) {
	e._insertElement(E, NS.HTML), e.skipNextNewLine = !0, e.tokenizer.state = TokenizerMode.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = InsertionMode.TEXT;
}
function xmpStartTagInBody(e, E) {
	e.openElements.hasInButtonScope(TAG_ID.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(E, TokenizerMode.RAWTEXT);
}
function iframeStartTagInBody(e, E) {
	e.framesetOk = !1, e._switchToTextParsing(E, TokenizerMode.RAWTEXT);
}
function rawTextStartTagInBody(e, E) {
	e._switchToTextParsing(E, TokenizerMode.RAWTEXT);
}
function selectStartTagInBody(e, E) {
	e._reconstructActiveFormattingElements(), e._insertElement(E, NS.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === InsertionMode.IN_TABLE || e.insertionMode === InsertionMode.IN_CAPTION || e.insertionMode === InsertionMode.IN_TABLE_BODY || e.insertionMode === InsertionMode.IN_ROW || e.insertionMode === InsertionMode.IN_CELL ? InsertionMode.IN_SELECT_IN_TABLE : InsertionMode.IN_SELECT;
}
function optgroupStartTagInBody(e, E) {
	e.openElements.currentTagId === TAG_ID.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(E, NS.HTML);
}
function rbStartTagInBody(e, E) {
	e.openElements.hasInScope(TAG_ID.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(E, NS.HTML);
}
function rtStartTagInBody(e, E) {
	e.openElements.hasInScope(TAG_ID.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.RTC), e._insertElement(E, NS.HTML);
}
function mathStartTagInBody(e, E) {
	e._reconstructActiveFormattingElements(), adjustTokenMathMLAttrs(E), adjustTokenXMLAttrs(E), E.selfClosing ? e._appendElement(E, NS.MATHML) : e._insertElement(E, NS.MATHML), E.ackSelfClosing = !0;
}
function svgStartTagInBody(e, E) {
	e._reconstructActiveFormattingElements(), adjustTokenSVGAttrs(E), adjustTokenXMLAttrs(E), E.selfClosing ? e._appendElement(E, NS.SVG) : e._insertElement(E, NS.SVG), E.ackSelfClosing = !0;
}
function genericStartTagInBody(e, E) {
	e._reconstructActiveFormattingElements(), e._insertElement(E, NS.HTML);
}
function startTagInBody(e, E) {
	switch (E.tagID) {
		case TAG_ID.I:
		case TAG_ID.S:
		case TAG_ID.B:
		case TAG_ID.U:
		case TAG_ID.EM:
		case TAG_ID.TT:
		case TAG_ID.BIG:
		case TAG_ID.CODE:
		case TAG_ID.FONT:
		case TAG_ID.SMALL:
		case TAG_ID.STRIKE:
		case TAG_ID.STRONG:
			bStartTagInBody(e, E);
			break;
		case TAG_ID.A:
			aStartTagInBody(e, E);
			break;
		case TAG_ID.H1:
		case TAG_ID.H2:
		case TAG_ID.H3:
		case TAG_ID.H4:
		case TAG_ID.H5:
		case TAG_ID.H6:
			numberedHeaderStartTagInBody(e, E);
			break;
		case TAG_ID.P:
		case TAG_ID.DL:
		case TAG_ID.OL:
		case TAG_ID.UL:
		case TAG_ID.DIV:
		case TAG_ID.DIR:
		case TAG_ID.NAV:
		case TAG_ID.MAIN:
		case TAG_ID.MENU:
		case TAG_ID.ASIDE:
		case TAG_ID.CENTER:
		case TAG_ID.FIGURE:
		case TAG_ID.FOOTER:
		case TAG_ID.HEADER:
		case TAG_ID.HGROUP:
		case TAG_ID.DIALOG:
		case TAG_ID.DETAILS:
		case TAG_ID.ADDRESS:
		case TAG_ID.ARTICLE:
		case TAG_ID.SEARCH:
		case TAG_ID.SECTION:
		case TAG_ID.SUMMARY:
		case TAG_ID.FIELDSET:
		case TAG_ID.BLOCKQUOTE:
		case TAG_ID.FIGCAPTION:
			addressStartTagInBody(e, E);
			break;
		case TAG_ID.LI:
		case TAG_ID.DD:
		case TAG_ID.DT:
			listItemStartTagInBody(e, E);
			break;
		case TAG_ID.BR:
		case TAG_ID.IMG:
		case TAG_ID.WBR:
		case TAG_ID.AREA:
		case TAG_ID.EMBED:
		case TAG_ID.KEYGEN:
			areaStartTagInBody(e, E);
			break;
		case TAG_ID.HR:
			hrStartTagInBody(e, E);
			break;
		case TAG_ID.RB:
		case TAG_ID.RTC:
			rbStartTagInBody(e, E);
			break;
		case TAG_ID.RT:
		case TAG_ID.RP:
			rtStartTagInBody(e, E);
			break;
		case TAG_ID.PRE:
		case TAG_ID.LISTING:
			preStartTagInBody(e, E);
			break;
		case TAG_ID.XMP:
			xmpStartTagInBody(e, E);
			break;
		case TAG_ID.SVG:
			svgStartTagInBody(e, E);
			break;
		case TAG_ID.HTML:
			htmlStartTagInBody(e, E);
			break;
		case TAG_ID.BASE:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.STYLE:
		case TAG_ID.TITLE:
		case TAG_ID.SCRIPT:
		case TAG_ID.BGSOUND:
		case TAG_ID.BASEFONT:
		case TAG_ID.TEMPLATE:
			startTagInHead(e, E);
			break;
		case TAG_ID.BODY:
			bodyStartTagInBody(e, E);
			break;
		case TAG_ID.FORM:
			formStartTagInBody(e, E);
			break;
		case TAG_ID.NOBR:
			nobrStartTagInBody(e, E);
			break;
		case TAG_ID.MATH:
			mathStartTagInBody(e, E);
			break;
		case TAG_ID.TABLE:
			tableStartTagInBody(e, E);
			break;
		case TAG_ID.INPUT:
			inputStartTagInBody(e, E);
			break;
		case TAG_ID.PARAM:
		case TAG_ID.TRACK:
		case TAG_ID.SOURCE:
			paramStartTagInBody(e, E);
			break;
		case TAG_ID.IMAGE:
			imageStartTagInBody(e, E);
			break;
		case TAG_ID.BUTTON:
			buttonStartTagInBody(e, E);
			break;
		case TAG_ID.APPLET:
		case TAG_ID.OBJECT:
		case TAG_ID.MARQUEE:
			appletStartTagInBody(e, E);
			break;
		case TAG_ID.IFRAME:
			iframeStartTagInBody(e, E);
			break;
		case TAG_ID.SELECT:
			selectStartTagInBody(e, E);
			break;
		case TAG_ID.OPTION:
		case TAG_ID.OPTGROUP:
			optgroupStartTagInBody(e, E);
			break;
		case TAG_ID.NOEMBED:
		case TAG_ID.NOFRAMES:
			rawTextStartTagInBody(e, E);
			break;
		case TAG_ID.FRAMESET:
			framesetStartTagInBody(e, E);
			break;
		case TAG_ID.TEXTAREA:
			textareaStartTagInBody(e, E);
			break;
		case TAG_ID.NOSCRIPT:
			e.options.scriptingEnabled ? rawTextStartTagInBody(e, E) : genericStartTagInBody(e, E);
			break;
		case TAG_ID.PLAINTEXT:
			plaintextStartTagInBody(e, E);
			break;
		case TAG_ID.COL:
		case TAG_ID.TH:
		case TAG_ID.TD:
		case TAG_ID.TR:
		case TAG_ID.HEAD:
		case TAG_ID.FRAME:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
		case TAG_ID.CAPTION:
		case TAG_ID.COLGROUP: break;
		default: genericStartTagInBody(e, E);
	}
}
function bodyEndTagInBody(e, E) {
	if (e.openElements.hasInScope(TAG_ID.BODY) && (e.insertionMode = InsertionMode.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
		let D = e.openElements.tryPeekProperlyNestedBodyElement();
		D && e._setEndLocation(D, E);
	}
}
function htmlEndTagInBody(e, E) {
	e.openElements.hasInScope(TAG_ID.BODY) && (e.insertionMode = InsertionMode.AFTER_BODY, endTagAfterBody(e, E));
}
function addressEndTagInBody(e, E) {
	let D = E.tagID;
	e.openElements.hasInScope(D) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(D));
}
function formEndTagInBody(e) {
	let E = e.openElements.tmplCount > 0, { formElement: D } = e;
	E || (e.formElement = null), (D || E) && e.openElements.hasInScope(TAG_ID.FORM) && (e.openElements.generateImpliedEndTags(), E ? e.openElements.popUntilTagNamePopped(TAG_ID.FORM) : D && e.openElements.remove(D));
}
function pEndTagInBody(e) {
	e.openElements.hasInButtonScope(TAG_ID.P) || e._insertFakeElement(TAG_NAMES.P, TAG_ID.P), e._closePElement();
}
function liEndTagInBody(e) {
	e.openElements.hasInListItemScope(TAG_ID.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.LI), e.openElements.popUntilTagNamePopped(TAG_ID.LI));
}
function ddEndTagInBody(e, E) {
	let D = E.tagID;
	e.openElements.hasInScope(D) && (e.openElements.generateImpliedEndTagsWithExclusion(D), e.openElements.popUntilTagNamePopped(D));
}
function numberedHeaderEndTagInBody(e) {
	e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function appletEndTagInBody(e, E) {
	let D = E.tagID;
	e.openElements.hasInScope(D) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(D), e.activeFormattingElements.clearToLastMarker());
}
function brEndTagInBody(e) {
	e._reconstructActiveFormattingElements(), e._insertFakeElement(TAG_NAMES.BR, TAG_ID.BR), e.openElements.pop(), e.framesetOk = !1;
}
function genericEndTagInBody(e, E) {
	let D = E.tagName, O = E.tagID;
	for (let E = e.openElements.stackTop; E > 0; E--) {
		let k = e.openElements.items[E], A = e.openElements.tagIDs[E];
		if (O === A && (O !== TAG_ID.UNKNOWN || e.treeAdapter.getTagName(k) === D)) {
			e.openElements.generateImpliedEndTagsWithExclusion(O), e.openElements.stackTop >= E && e.openElements.shortenToLength(E);
			break;
		}
		if (e._isSpecialElement(k, A)) break;
	}
}
function endTagInBody(e, E) {
	switch (E.tagID) {
		case TAG_ID.A:
		case TAG_ID.B:
		case TAG_ID.I:
		case TAG_ID.S:
		case TAG_ID.U:
		case TAG_ID.EM:
		case TAG_ID.TT:
		case TAG_ID.BIG:
		case TAG_ID.CODE:
		case TAG_ID.FONT:
		case TAG_ID.NOBR:
		case TAG_ID.SMALL:
		case TAG_ID.STRIKE:
		case TAG_ID.STRONG:
			callAdoptionAgency(e, E);
			break;
		case TAG_ID.P:
			pEndTagInBody(e);
			break;
		case TAG_ID.DL:
		case TAG_ID.UL:
		case TAG_ID.OL:
		case TAG_ID.DIR:
		case TAG_ID.DIV:
		case TAG_ID.NAV:
		case TAG_ID.PRE:
		case TAG_ID.MAIN:
		case TAG_ID.MENU:
		case TAG_ID.ASIDE:
		case TAG_ID.BUTTON:
		case TAG_ID.CENTER:
		case TAG_ID.FIGURE:
		case TAG_ID.FOOTER:
		case TAG_ID.HEADER:
		case TAG_ID.HGROUP:
		case TAG_ID.DIALOG:
		case TAG_ID.ADDRESS:
		case TAG_ID.ARTICLE:
		case TAG_ID.DETAILS:
		case TAG_ID.SEARCH:
		case TAG_ID.SECTION:
		case TAG_ID.SUMMARY:
		case TAG_ID.LISTING:
		case TAG_ID.FIELDSET:
		case TAG_ID.BLOCKQUOTE:
		case TAG_ID.FIGCAPTION:
			addressEndTagInBody(e, E);
			break;
		case TAG_ID.LI:
			liEndTagInBody(e);
			break;
		case TAG_ID.DD:
		case TAG_ID.DT:
			ddEndTagInBody(e, E);
			break;
		case TAG_ID.H1:
		case TAG_ID.H2:
		case TAG_ID.H3:
		case TAG_ID.H4:
		case TAG_ID.H5:
		case TAG_ID.H6:
			numberedHeaderEndTagInBody(e);
			break;
		case TAG_ID.BR:
			brEndTagInBody(e);
			break;
		case TAG_ID.BODY:
			bodyEndTagInBody(e, E);
			break;
		case TAG_ID.HTML:
			htmlEndTagInBody(e, E);
			break;
		case TAG_ID.FORM:
			formEndTagInBody(e);
			break;
		case TAG_ID.APPLET:
		case TAG_ID.OBJECT:
		case TAG_ID.MARQUEE:
			appletEndTagInBody(e, E);
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(e, E);
			break;
		default: genericEndTagInBody(e, E);
	}
}
function eofInBody(e, E) {
	e.tmplInsertionModeStack.length > 0 ? eofInTemplate(e, E) : stopParsing(e, E);
}
function endTagInText(e, E) {
	var D;
	E.tagID === TAG_ID.SCRIPT && ((D = e.scriptHandler) == null || D.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function eofInText(e, E) {
	e._err(E, ERR.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(E);
}
function characterInTable(e, E) {
	if (e.openElements.currentTagId !== void 0 && TABLE_STRUCTURE_TAGS.has(e.openElements.currentTagId)) switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = InsertionMode.IN_TABLE_TEXT, E.type) {
		case TokenType.CHARACTER:
			characterInTableText(e, E);
			break;
		case TokenType.WHITESPACE_CHARACTER:
			whitespaceCharacterInTableText(e, E);
			break;
	}
	else tokenInTable(e, E);
}
function captionStartTagInTable(e, E) {
	e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(E, NS.HTML), e.insertionMode = InsertionMode.IN_CAPTION;
}
function colgroupStartTagInTable(e, E) {
	e.openElements.clearBackToTableContext(), e._insertElement(E, NS.HTML), e.insertionMode = InsertionMode.IN_COLUMN_GROUP;
}
function colStartTagInTable(e, E) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(TAG_NAMES.COLGROUP, TAG_ID.COLGROUP), e.insertionMode = InsertionMode.IN_COLUMN_GROUP, startTagInColumnGroup(e, E);
}
function tbodyStartTagInTable(e, E) {
	e.openElements.clearBackToTableContext(), e._insertElement(E, NS.HTML), e.insertionMode = InsertionMode.IN_TABLE_BODY;
}
function tdStartTagInTable(e, E) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(TAG_NAMES.TBODY, TAG_ID.TBODY), e.insertionMode = InsertionMode.IN_TABLE_BODY, startTagInTableBody(e, E);
}
function tableStartTagInTable(e, E) {
	e.openElements.hasInTableScope(TAG_ID.TABLE) && (e.openElements.popUntilTagNamePopped(TAG_ID.TABLE), e._resetInsertionMode(), e._processStartTag(E));
}
function inputStartTagInTable(e, E) {
	isHiddenInput(E) ? e._appendElement(E, NS.HTML) : tokenInTable(e, E), E.ackSelfClosing = !0;
}
function formStartTagInTable(e, E) {
	!e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(E, NS.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function startTagInTable(e, E) {
	switch (E.tagID) {
		case TAG_ID.TD:
		case TAG_ID.TH:
		case TAG_ID.TR:
			tdStartTagInTable(e, E);
			break;
		case TAG_ID.STYLE:
		case TAG_ID.SCRIPT:
		case TAG_ID.TEMPLATE:
			startTagInHead(e, E);
			break;
		case TAG_ID.COL:
			colStartTagInTable(e, E);
			break;
		case TAG_ID.FORM:
			formStartTagInTable(e, E);
			break;
		case TAG_ID.TABLE:
			tableStartTagInTable(e, E);
			break;
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			tbodyStartTagInTable(e, E);
			break;
		case TAG_ID.INPUT:
			inputStartTagInTable(e, E);
			break;
		case TAG_ID.CAPTION:
			captionStartTagInTable(e, E);
			break;
		case TAG_ID.COLGROUP:
			colgroupStartTagInTable(e, E);
			break;
		default: tokenInTable(e, E);
	}
}
function endTagInTable(e, E) {
	switch (E.tagID) {
		case TAG_ID.TABLE:
			e.openElements.hasInTableScope(TAG_ID.TABLE) && (e.openElements.popUntilTagNamePopped(TAG_ID.TABLE), e._resetInsertionMode());
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(e, E);
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TBODY:
		case TAG_ID.TD:
		case TAG_ID.TFOOT:
		case TAG_ID.TH:
		case TAG_ID.THEAD:
		case TAG_ID.TR: break;
		default: tokenInTable(e, E);
	}
}
function tokenInTable(e, E) {
	let D = e.fosterParentingEnabled;
	e.fosterParentingEnabled = !0, modeInBody(e, E), e.fosterParentingEnabled = D;
}
function whitespaceCharacterInTableText(e, E) {
	e.pendingCharacterTokens.push(E);
}
function characterInTableText(e, E) {
	e.pendingCharacterTokens.push(E), e.hasNonWhitespacePendingCharacterToken = !0;
}
function tokenInTableText(e, E) {
	let D = 0;
	if (e.hasNonWhitespacePendingCharacterToken) for (; D < e.pendingCharacterTokens.length; D++) tokenInTable(e, e.pendingCharacterTokens[D]);
	else for (; D < e.pendingCharacterTokens.length; D++) e._insertCharacters(e.pendingCharacterTokens[D]);
	e.insertionMode = e.originalInsertionMode, e._processToken(E);
}
var TABLE_VOID_ELEMENTS = new Set([
	TAG_ID.CAPTION,
	TAG_ID.COL,
	TAG_ID.COLGROUP,
	TAG_ID.TBODY,
	TAG_ID.TD,
	TAG_ID.TFOOT,
	TAG_ID.TH,
	TAG_ID.THEAD,
	TAG_ID.TR
]);
function startTagInCaption(e, E) {
	let D = E.tagID;
	TABLE_VOID_ELEMENTS.has(D) ? e.openElements.hasInTableScope(TAG_ID.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(TAG_ID.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = InsertionMode.IN_TABLE, startTagInTable(e, E)) : startTagInBody(e, E);
}
function endTagInCaption(e, E) {
	let D = E.tagID;
	switch (D) {
		case TAG_ID.CAPTION:
		case TAG_ID.TABLE:
			e.openElements.hasInTableScope(TAG_ID.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(TAG_ID.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = InsertionMode.IN_TABLE, D === TAG_ID.TABLE && endTagInTable(e, E));
			break;
		case TAG_ID.BODY:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TBODY:
		case TAG_ID.TD:
		case TAG_ID.TFOOT:
		case TAG_ID.TH:
		case TAG_ID.THEAD:
		case TAG_ID.TR: break;
		default: endTagInBody(e, E);
	}
}
function startTagInColumnGroup(e, E) {
	switch (E.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, E);
			break;
		case TAG_ID.COL:
			e._appendElement(E, NS.HTML), E.ackSelfClosing = !0;
			break;
		case TAG_ID.TEMPLATE:
			startTagInHead(e, E);
			break;
		default: tokenInColumnGroup(e, E);
	}
}
function endTagInColumnGroup(e, E) {
	switch (E.tagID) {
		case TAG_ID.COLGROUP:
			e.openElements.currentTagId === TAG_ID.COLGROUP && (e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE);
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(e, E);
			break;
		case TAG_ID.COL: break;
		default: tokenInColumnGroup(e, E);
	}
}
function tokenInColumnGroup(e, E) {
	e.openElements.currentTagId === TAG_ID.COLGROUP && (e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE, e._processToken(E));
}
function startTagInTableBody(e, E) {
	switch (E.tagID) {
		case TAG_ID.TR:
			e.openElements.clearBackToTableBodyContext(), e._insertElement(E, NS.HTML), e.insertionMode = InsertionMode.IN_ROW;
			break;
		case TAG_ID.TH:
		case TAG_ID.TD:
			e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(TAG_NAMES.TR, TAG_ID.TR), e.insertionMode = InsertionMode.IN_ROW, startTagInRow(e, E);
			break;
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE, startTagInTable(e, E));
			break;
		default: startTagInTable(e, E);
	}
}
function endTagInTableBody(e, E) {
	let D = E.tagID;
	switch (E.tagID) {
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			e.openElements.hasInTableScope(D) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE);
			break;
		case TAG_ID.TABLE:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE, endTagInTable(e, E));
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TD:
		case TAG_ID.TH:
		case TAG_ID.TR: break;
		default: endTagInTable(e, E);
	}
}
function startTagInRow(e, E) {
	switch (E.tagID) {
		case TAG_ID.TH:
		case TAG_ID.TD:
			e.openElements.clearBackToTableRowContext(), e._insertElement(E, NS.HTML), e.insertionMode = InsertionMode.IN_CELL, e.activeFormattingElements.insertMarker();
			break;
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
		case TAG_ID.TR:
			e.openElements.hasInTableScope(TAG_ID.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE_BODY, startTagInTableBody(e, E));
			break;
		default: startTagInTable(e, E);
	}
}
function endTagInRow(e, E) {
	switch (E.tagID) {
		case TAG_ID.TR:
			e.openElements.hasInTableScope(TAG_ID.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE_BODY);
			break;
		case TAG_ID.TABLE:
			e.openElements.hasInTableScope(TAG_ID.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE_BODY, endTagInTableBody(e, E));
			break;
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			(e.openElements.hasInTableScope(E.tagID) || e.openElements.hasInTableScope(TAG_ID.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = InsertionMode.IN_TABLE_BODY, endTagInTableBody(e, E));
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TD:
		case TAG_ID.TH: break;
		default: endTagInTable(e, E);
	}
}
function startTagInCell(e, E) {
	let D = E.tagID;
	TABLE_VOID_ELEMENTS.has(D) ? (e.openElements.hasInTableScope(TAG_ID.TD) || e.openElements.hasInTableScope(TAG_ID.TH)) && (e._closeTableCell(), startTagInRow(e, E)) : startTagInBody(e, E);
}
function endTagInCell(e, E) {
	let D = E.tagID;
	switch (D) {
		case TAG_ID.TD:
		case TAG_ID.TH:
			e.openElements.hasInTableScope(D) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(D), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = InsertionMode.IN_ROW);
			break;
		case TAG_ID.TABLE:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
		case TAG_ID.TR:
			e.openElements.hasInTableScope(D) && (e._closeTableCell(), endTagInRow(e, E));
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML: break;
		default: endTagInBody(e, E);
	}
}
function startTagInSelect(e, E) {
	switch (E.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, E);
			break;
		case TAG_ID.OPTION:
			e.openElements.currentTagId === TAG_ID.OPTION && e.openElements.pop(), e._insertElement(E, NS.HTML);
			break;
		case TAG_ID.OPTGROUP:
			e.openElements.currentTagId === TAG_ID.OPTION && e.openElements.pop(), e.openElements.currentTagId === TAG_ID.OPTGROUP && e.openElements.pop(), e._insertElement(E, NS.HTML);
			break;
		case TAG_ID.HR:
			e.openElements.currentTagId === TAG_ID.OPTION && e.openElements.pop(), e.openElements.currentTagId === TAG_ID.OPTGROUP && e.openElements.pop(), e._appendElement(E, NS.HTML), E.ackSelfClosing = !0;
			break;
		case TAG_ID.INPUT:
		case TAG_ID.KEYGEN:
		case TAG_ID.TEXTAREA:
		case TAG_ID.SELECT:
			e.openElements.hasInSelectScope(TAG_ID.SELECT) && (e.openElements.popUntilTagNamePopped(TAG_ID.SELECT), e._resetInsertionMode(), E.tagID !== TAG_ID.SELECT && e._processStartTag(E));
			break;
		case TAG_ID.SCRIPT:
		case TAG_ID.TEMPLATE:
			startTagInHead(e, E);
			break;
		default:
	}
}
function endTagInSelect(e, E) {
	switch (E.tagID) {
		case TAG_ID.OPTGROUP:
			e.openElements.stackTop > 0 && e.openElements.currentTagId === TAG_ID.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === TAG_ID.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === TAG_ID.OPTGROUP && e.openElements.pop();
			break;
		case TAG_ID.OPTION:
			e.openElements.currentTagId === TAG_ID.OPTION && e.openElements.pop();
			break;
		case TAG_ID.SELECT:
			e.openElements.hasInSelectScope(TAG_ID.SELECT) && (e.openElements.popUntilTagNamePopped(TAG_ID.SELECT), e._resetInsertionMode());
			break;
		case TAG_ID.TEMPLATE:
			templateEndTagInHead(e, E);
			break;
		default:
	}
}
function startTagInSelectInTable(e, E) {
	let D = E.tagID;
	D === TAG_ID.CAPTION || D === TAG_ID.TABLE || D === TAG_ID.TBODY || D === TAG_ID.TFOOT || D === TAG_ID.THEAD || D === TAG_ID.TR || D === TAG_ID.TD || D === TAG_ID.TH ? (e.openElements.popUntilTagNamePopped(TAG_ID.SELECT), e._resetInsertionMode(), e._processStartTag(E)) : startTagInSelect(e, E);
}
function endTagInSelectInTable(e, E) {
	let D = E.tagID;
	D === TAG_ID.CAPTION || D === TAG_ID.TABLE || D === TAG_ID.TBODY || D === TAG_ID.TFOOT || D === TAG_ID.THEAD || D === TAG_ID.TR || D === TAG_ID.TD || D === TAG_ID.TH ? e.openElements.hasInTableScope(D) && (e.openElements.popUntilTagNamePopped(TAG_ID.SELECT), e._resetInsertionMode(), e.onEndTag(E)) : endTagInSelect(e, E);
}
function startTagInTemplate(e, E) {
	switch (E.tagID) {
		case TAG_ID.BASE:
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.NOFRAMES:
		case TAG_ID.SCRIPT:
		case TAG_ID.STYLE:
		case TAG_ID.TEMPLATE:
		case TAG_ID.TITLE:
			startTagInHead(e, E);
			break;
		case TAG_ID.CAPTION:
		case TAG_ID.COLGROUP:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			e.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE, e.insertionMode = InsertionMode.IN_TABLE, startTagInTable(e, E);
			break;
		case TAG_ID.COL:
			e.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP, e.insertionMode = InsertionMode.IN_COLUMN_GROUP, startTagInColumnGroup(e, E);
			break;
		case TAG_ID.TR:
			e.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY, e.insertionMode = InsertionMode.IN_TABLE_BODY, startTagInTableBody(e, E);
			break;
		case TAG_ID.TD:
		case TAG_ID.TH:
			e.tmplInsertionModeStack[0] = InsertionMode.IN_ROW, e.insertionMode = InsertionMode.IN_ROW, startTagInRow(e, E);
			break;
		default: e.tmplInsertionModeStack[0] = InsertionMode.IN_BODY, e.insertionMode = InsertionMode.IN_BODY, startTagInBody(e, E);
	}
}
function endTagInTemplate(e, E) {
	E.tagID === TAG_ID.TEMPLATE && templateEndTagInHead(e, E);
}
function eofInTemplate(e, E) {
	e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(E)) : stopParsing(e, E);
}
function startTagAfterBody(e, E) {
	E.tagID === TAG_ID.HTML ? startTagInBody(e, E) : tokenAfterBody(e, E);
}
function endTagAfterBody(e, E) {
	if (E.tagID === TAG_ID.HTML) {
		if (e.fragmentContext || (e.insertionMode = InsertionMode.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === TAG_ID.HTML) {
			e._setEndLocation(e.openElements.items[0], E);
			let D = e.openElements.items[1];
			D && !e.treeAdapter.getNodeSourceCodeLocation(D)?.endTag && e._setEndLocation(D, E);
		}
	} else tokenAfterBody(e, E);
}
function tokenAfterBody(e, E) {
	e.insertionMode = InsertionMode.IN_BODY, modeInBody(e, E);
}
function startTagInFrameset(e, E) {
	switch (E.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, E);
			break;
		case TAG_ID.FRAMESET:
			e._insertElement(E, NS.HTML);
			break;
		case TAG_ID.FRAME:
			e._appendElement(E, NS.HTML), E.ackSelfClosing = !0;
			break;
		case TAG_ID.NOFRAMES:
			startTagInHead(e, E);
			break;
		default:
	}
}
function endTagInFrameset(e, E) {
	E.tagID === TAG_ID.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== TAG_ID.FRAMESET && (e.insertionMode = InsertionMode.AFTER_FRAMESET));
}
function startTagAfterFrameset(e, E) {
	switch (E.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, E);
			break;
		case TAG_ID.NOFRAMES:
			startTagInHead(e, E);
			break;
		default:
	}
}
function endTagAfterFrameset(e, E) {
	E.tagID === TAG_ID.HTML && (e.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET);
}
function startTagAfterAfterBody(e, E) {
	E.tagID === TAG_ID.HTML ? startTagInBody(e, E) : tokenAfterAfterBody(e, E);
}
function tokenAfterAfterBody(e, E) {
	e.insertionMode = InsertionMode.IN_BODY, modeInBody(e, E);
}
function startTagAfterAfterFrameset(e, E) {
	switch (E.tagID) {
		case TAG_ID.HTML:
			startTagInBody(e, E);
			break;
		case TAG_ID.NOFRAMES:
			startTagInHead(e, E);
			break;
		default:
	}
}
function nullCharacterInForeignContent(e, E) {
	E.chars = "�", e._insertCharacters(E);
}
function characterInForeignContent(e, E) {
	e._insertCharacters(E), e.framesetOk = !1;
}
function popUntilHtmlOrIntegrationPoint(e) {
	for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== NS.HTML && e.openElements.currentTagId !== void 0 && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current);) e.openElements.pop();
}
function startTagInForeignContent(e, E) {
	if (causesExit(E)) popUntilHtmlOrIntegrationPoint(e), e._startTagOutsideForeignContent(E);
	else {
		let D = e._getAdjustedCurrentElement(), O = e.treeAdapter.getNamespaceURI(D);
		O === NS.MATHML ? adjustTokenMathMLAttrs(E) : O === NS.SVG && (adjustTokenSVGTagName(E), adjustTokenSVGAttrs(E)), adjustTokenXMLAttrs(E), E.selfClosing ? e._appendElement(E, O) : e._insertElement(E, O), E.ackSelfClosing = !0;
	}
}
function endTagInForeignContent(e, E) {
	if (E.tagID === TAG_ID.P || E.tagID === TAG_ID.BR) {
		popUntilHtmlOrIntegrationPoint(e), e._endTagOutsideForeignContent(E);
		return;
	}
	for (let D = e.openElements.stackTop; D > 0; D--) {
		let O = e.openElements.items[D];
		if (e.treeAdapter.getNamespaceURI(O) === NS.HTML) {
			e._endTagOutsideForeignContent(E);
			break;
		}
		let k = e.treeAdapter.getTagName(O);
		if (k.toLowerCase() === E.tagName) {
			E.tagName = k, e.openElements.shortenToLength(D);
			break;
		}
	}
}
new Set([
	TAG_NAMES.AREA,
	TAG_NAMES.BASE,
	TAG_NAMES.BASEFONT,
	TAG_NAMES.BGSOUND,
	TAG_NAMES.BR,
	TAG_NAMES.COL,
	TAG_NAMES.EMBED,
	TAG_NAMES.FRAME,
	TAG_NAMES.HR,
	TAG_NAMES.IMG,
	TAG_NAMES.INPUT,
	TAG_NAMES.KEYGEN,
	TAG_NAMES.LINK,
	TAG_NAMES.META,
	TAG_NAMES.PARAM,
	TAG_NAMES.SOURCE,
	TAG_NAMES.TRACK,
	TAG_NAMES.WBR
]);
var gfmTagfilterExpression = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi, knownMdxNames = new Set([
	"mdxFlowExpression",
	"mdxJsxFlowElement",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"mdxjsEsm"
]), parseOptions = {
	sourceCodeLocationInfo: !0,
	scriptingEnabled: !1
};
function raw(e, E) {
	let D = documentMode(e), O = zwitch("type", {
		handlers: {
			root: root$1,
			element: element$1,
			text: text$1,
			comment: comment$1,
			doctype: doctype$1,
			raw: handleRaw
		},
		unknown
	}), k = {
		parser: D ? new Parser(parseOptions) : Parser.getFragmentParser(void 0, parseOptions),
		handle(e) {
			O(e, k);
		},
		stitches: !1,
		options: E || {}
	};
	O(e, k), resetTokenizer(k, pointStart());
	let A = fromParse5(D ? k.parser.document : k.parser.getFragment(), { file: k.options.file });
	return k.stitches && visit(A, "comment", function(e, E, D) {
		let O = e;
		if (O.value.stitch && D && E !== void 0) {
			let e = D.children;
			return e[E] = O.value.stitch, E;
		}
	}), A.type === "root" && A.children.length === 1 && A.children[0].type === e.type ? A.children[0] : A;
}
function all(e, E) {
	let D = -1;
	/* istanbul ignore else - invalid nodes, see rehypejs/rehype-raw#7. */
	if (e) for (; ++D < e.length;) E.handle(e[D]);
}
function root$1(e, E) {
	all(e.children, E);
}
function element$1(e, E) {
	startTag(e, E), all(e.children, E), endTag(e, E);
}
function text$1(e, E) {
	E.parser.tokenizer.state > 4 && (E.parser.tokenizer.state = 0);
	let D = {
		type: TokenType.CHARACTER,
		chars: e.value,
		location: createParse5Location(e)
	};
	resetTokenizer(E, pointStart(e)), E.parser.currentToken = D, E.parser._processToken(E.parser.currentToken);
}
function doctype$1(e, E) {
	let D = {
		type: TokenType.DOCTYPE,
		name: "html",
		forceQuirks: !1,
		publicId: "",
		systemId: "",
		location: createParse5Location(e)
	};
	resetTokenizer(E, pointStart(e)), E.parser.currentToken = D, E.parser._processToken(E.parser.currentToken);
}
function stitch(e, E) {
	E.stitches = !0;
	let D = cloneWithoutChildren(e);
	"children" in e && "children" in D && (D.children = raw({
		type: "root",
		children: e.children
	}, E.options).children), comment$1({
		type: "comment",
		value: { stitch: D }
	}, E);
}
function comment$1(e, E) {
	let D = e.value, O = {
		type: TokenType.COMMENT,
		data: D,
		location: createParse5Location(e)
	};
	resetTokenizer(E, pointStart(e)), E.parser.currentToken = O, E.parser._processToken(E.parser.currentToken);
}
function handleRaw(e, E) {
	/* c8 ignore next 12 -- removed in <https://github.com/inikulin/parse5/pull/897> */
	if (E.parser.tokenizer.preprocessor.html = "", E.parser.tokenizer.preprocessor.pos = -1, E.parser.tokenizer.preprocessor.lastGapPos = -2, E.parser.tokenizer.preprocessor.gapStack = [], E.parser.tokenizer.preprocessor.skipNextNewLine = !1, E.parser.tokenizer.preprocessor.lastChunkWritten = !1, E.parser.tokenizer.preprocessor.endOfChunkHit = !1, E.parser.tokenizer.preprocessor.isEol = !1, setPoint(E, pointStart(e)), E.parser.tokenizer.write(E.options.tagfilter ? e.value.replace(gfmTagfilterExpression, "&lt;$1$2") : e.value, !1), E.parser.tokenizer._runParsingLoop(), E.parser.tokenizer.state === 72 || E.parser.tokenizer.state === 78) {
		E.parser.tokenizer.preprocessor.lastChunkWritten = !0;
		let e = E.parser.tokenizer._consume();
		E.parser.tokenizer._callState(e);
	}
}
function unknown(e, E) {
	let D = e;
	if (E.options.passThrough && E.options.passThrough.includes(D.type)) stitch(D, E);
	else {
		let e = "";
		throw knownMdxNames.has(D.type) && (e = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"), Error("Cannot compile `" + D.type + "` node" + e);
	}
}
function resetTokenizer(e, E) {
	setPoint(e, E);
	let D = e.parser.tokenizer.currentCharacterToken;
	D && D.location && (D.location.endLine = e.parser.tokenizer.preprocessor.line, D.location.endCol = e.parser.tokenizer.preprocessor.col + 1, D.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1, e.parser.currentToken = D, e.parser._processToken(e.parser.currentToken)), e.parser.tokenizer.paused = !1, e.parser.tokenizer.inLoop = !1, e.parser.tokenizer.active = !1, e.parser.tokenizer.returnState = TokenizerMode.DATA, e.parser.tokenizer.charRefCode = -1, e.parser.tokenizer.consumedAfterSnapshot = -1, e.parser.tokenizer.currentLocation = null, e.parser.tokenizer.currentCharacterToken = null, e.parser.tokenizer.currentToken = null, e.parser.tokenizer.currentAttr = {
		name: "",
		value: ""
	};
}
function setPoint(e, E) {
	if (E && E.offset !== void 0) {
		let D = {
			startLine: E.line,
			startCol: E.column,
			startOffset: E.offset,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		};
		e.parser.tokenizer.preprocessor.lineStartPos = -E.column + 1, e.parser.tokenizer.preprocessor.droppedBufferSize = E.offset, e.parser.tokenizer.preprocessor.line = E.line, e.parser.tokenizer.currentLocation = D;
	}
}
function startTag(e, E) {
	let D = e.tagName.toLowerCase();
	if (E.parser.tokenizer.state === TokenizerMode.PLAINTEXT) return;
	resetTokenizer(E, pointStart(e));
	let O = E.parser.openElements.current, k = "namespaceURI" in O ? O.namespaceURI : webNamespaces.html;
	k === webNamespaces.html && D === "svg" && (k = webNamespaces.svg);
	let A = toParse5({
		...e,
		children: []
	}, { space: k === webNamespaces.svg ? "svg" : "html" }), j = {
		type: TokenType.START_TAG,
		tagName: D,
		tagID: getTagID(D),
		selfClosing: !1,
		ackSelfClosing: !1,
		attrs: "attrs" in A ? A.attrs : [],
		location: createParse5Location(e)
	};
	E.parser.currentToken = j, E.parser._processToken(E.parser.currentToken), E.parser.tokenizer.lastStartTagName = D;
}
function endTag(e, E) {
	let D = e.tagName.toLowerCase();
	if (!E.parser.tokenizer.inForeignNode && htmlVoidElements.includes(D) || E.parser.tokenizer.state === TokenizerMode.PLAINTEXT) return;
	resetTokenizer(E, pointEnd(e));
	let O = {
		type: TokenType.END_TAG,
		tagName: D,
		tagID: getTagID(D),
		selfClosing: !1,
		ackSelfClosing: !1,
		attrs: [],
		location: createParse5Location(e)
	};
	E.parser.currentToken = O, E.parser._processToken(E.parser.currentToken), D === E.parser.tokenizer.lastStartTagName && (E.parser.tokenizer.state === TokenizerMode.RCDATA || E.parser.tokenizer.state === TokenizerMode.RAWTEXT || E.parser.tokenizer.state === TokenizerMode.SCRIPT_DATA) && (E.parser.tokenizer.state = TokenizerMode.DATA);
}
function documentMode(e) {
	let E = e.type === "root" ? e.children[0] : e;
	return !!(E && (E.type === "doctype" || E.type === "element" && E.tagName.toLowerCase() === "html"));
}
function createParse5Location(e) {
	let E = pointStart(e) || {
		line: void 0,
		column: void 0,
		offset: void 0
	}, D = pointEnd(e) || {
		line: void 0,
		column: void 0,
		offset: void 0
	};
	return {
		startLine: E.line,
		startCol: E.column,
		startOffset: E.offset,
		endLine: D.line,
		endCol: D.column,
		endOffset: D.offset
	};
}
function cloneWithoutChildren(e) {
	return "children" in e ? esm_default({
		...e,
		children: []
	}) : esm_default(e);
}
function rehypeRaw(e) {
	return function(E, D) {
		return raw(E, {
			...e,
			file: D
		});
	};
}
var aria = [
	"ariaDescribedBy",
	"ariaLabel",
	"ariaLabelledBy"
];
const defaultSchema = {
	ancestors: {
		tbody: ["table"],
		td: ["table"],
		th: ["table"],
		thead: ["table"],
		tfoot: ["table"],
		tr: ["table"]
	},
	attributes: {
		a: [
			...aria,
			"dataFootnoteBackref",
			"dataFootnoteRef",
			["className", "data-footnote-backref"],
			"href"
		],
		blockquote: ["cite"],
		code: [["className", /^language-./]],
		del: ["cite"],
		div: ["itemScope", "itemType"],
		dl: [...aria],
		h2: [["className", "sr-only"]],
		img: [
			...aria,
			"longDesc",
			"src"
		],
		input: [["disabled", !0], ["type", "checkbox"]],
		ins: ["cite"],
		li: [["className", "task-list-item"]],
		ol: [...aria, ["className", "contains-task-list"]],
		q: ["cite"],
		section: ["dataFootnotes", ["className", "footnotes"]],
		source: ["srcSet"],
		summary: [...aria],
		table: [...aria],
		ul: [...aria, ["className", "contains-task-list"]],
		"*": /* @__PURE__ */ "abbr.accept.acceptCharset.accessKey.action.align.alt.axis.border.cellPadding.cellSpacing.char.charOff.charSet.checked.clear.colSpan.color.cols.compact.coords.dateTime.dir.encType.frame.hSpace.headers.height.hrefLang.htmlFor.id.isMap.itemProp.label.lang.maxLength.media.method.multiple.name.noHref.noShade.noWrap.open.prompt.readOnly.rev.rowSpan.rows.rules.scope.selected.shape.size.span.start.summary.tabIndex.title.useMap.vAlign.value.width".split(".")
	},
	clobber: [
		"ariaDescribedBy",
		"ariaLabelledBy",
		"id",
		"name"
	],
	clobberPrefix: "user-content-",
	protocols: {
		cite: ["http", "https"],
		href: [
			"http",
			"https",
			"irc",
			"ircs",
			"mailto",
			"xmpp"
		],
		longDesc: ["http", "https"],
		src: ["http", "https"]
	},
	required: { input: {
		disabled: !0,
		type: "checkbox"
	} },
	strip: ["script"],
	tagNames: /* @__PURE__ */ "a.b.blockquote.br.code.dd.del.details.div.dl.dt.em.h1.h2.h3.h4.h5.h6.hr.i.img.input.ins.kbd.li.ol.p.picture.pre.q.rp.rt.ruby.s.samp.section.source.span.strike.strong.sub.summary.sup.table.tbody.td.tfoot.th.thead.tr.tt.ul.var".split(".")
};
var own = {}.hasOwnProperty;
function sanitize(e, E) {
	let D = {
		type: "root",
		children: []
	}, O = transform({
		schema: E ? {
			...defaultSchema,
			...E
		} : defaultSchema,
		stack: []
	}, e);
	return O && (Array.isArray(O) ? O.length === 1 ? D = O[0] : D.children = O : D = O), D;
}
function transform(e, E) {
	if (E && typeof E == "object") {
		let D = E;
		switch (typeof D.type == "string" ? D.type : "") {
			case "comment": return comment(e, D);
			case "doctype": return doctype(e, D);
			case "element": return element(e, D);
			case "root": return root(e, D);
			case "text": return text(e, D);
			default:
		}
	}
}
function comment(e, E) {
	if (e.schema.allowComments) {
		let e = typeof E.value == "string" ? E.value : "", D = e.indexOf("-->"), O = {
			type: "comment",
			value: D < 0 ? e : e.slice(0, D)
		};
		return patch(O, E), O;
	}
}
function doctype(e, E) {
	if (e.schema.allowDoctypes) {
		let e = { type: "doctype" };
		return patch(e, E), e;
	}
}
function element(e, E) {
	let D = typeof E.tagName == "string" ? E.tagName : "";
	e.stack.push(D);
	let O = children(e, E.children), k = properties(e, E.properties);
	e.stack.pop();
	let A = !1;
	if (D && D !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(D)) && (A = !0, e.schema.ancestors && own.call(e.schema.ancestors, D))) {
		let E = e.schema.ancestors[D], O = -1;
		for (A = !1; ++O < E.length;) e.stack.includes(E[O]) && (A = !0);
	}
	if (!A) return e.schema.strip && !e.schema.strip.includes(D) ? O : void 0;
	let j = {
		type: "element",
		tagName: D,
		properties: k,
		children: O
	};
	return patch(j, E), j;
}
function root(e, E) {
	let D = {
		type: "root",
		children: children(e, E.children)
	};
	return patch(D, E), D;
}
function text(e, E) {
	let D = {
		type: "text",
		value: typeof E.value == "string" ? E.value : ""
	};
	return patch(D, E), D;
}
function children(e, E) {
	let D = [];
	if (Array.isArray(E)) {
		let O = E, k = -1;
		for (; ++k < O.length;) {
			let E = transform(e, O[k]);
			E && (Array.isArray(E) ? D.push(...E) : D.push(E));
		}
	}
	return D;
}
function properties(e, E) {
	let D = e.stack[e.stack.length - 1], O = e.schema.attributes, k = e.schema.required, A = O && own.call(O, D) ? O[D] : void 0, j = O && own.call(O, "*") ? O["*"] : void 0, M = E && typeof E == "object" ? E : {}, N = {}, P;
	for (P in M) if (own.call(M, P)) {
		let E = M[P], D = propertyValue(e, findDefinition(A, P), P, E);
		D ??= propertyValue(e, findDefinition(j, P), P, E), D != null && (N[P] = D);
	}
	if (k && own.call(k, D)) {
		let e = k[D];
		for (P in e) own.call(e, P) && !own.call(N, P) && (N[P] = e[P]);
	}
	return N;
}
function propertyValue(e, E, D, O) {
	return E ? Array.isArray(O) ? propertyValueMany(e, E, D, O) : propertyValuePrimitive(e, E, D, O) : void 0;
}
function propertyValueMany(e, E, D, O) {
	let k = -1, A = [];
	for (; ++k < O.length;) {
		let j = propertyValuePrimitive(e, E, D, O[k]);
		(typeof j == "number" || typeof j == "string") && A.push(j);
	}
	return A;
}
function propertyValuePrimitive(e, E, D, O) {
	if (!(typeof O != "boolean" && typeof O != "number" && typeof O != "string") && safeProtocol(e, D, O)) {
		if (typeof E == "object" && E.length > 1) {
			let e = !1, D = 0;
			for (; ++D < E.length;) {
				let k = E[D];
				if (k && typeof k == "object" && "flags" in k) {
					if (k.test(String(O))) {
						e = !0;
						break;
					}
				} else if (k === O) {
					e = !0;
					break;
				}
			}
			if (!e) return;
		}
		return e.schema.clobber && e.schema.clobberPrefix && e.schema.clobber.includes(D) ? e.schema.clobberPrefix + O : O;
	}
}
function safeProtocol(e, E, D) {
	let O = e.schema.protocols && own.call(e.schema.protocols, E) ? e.schema.protocols[E] : void 0;
	if (!O || O.length === 0) return !0;
	let k = String(D), A = k.indexOf(":"), j = k.indexOf("?"), M = k.indexOf("#"), N = k.indexOf("/");
	if (A < 0 || N > -1 && A > N || j > -1 && A > j || M > -1 && A > M) return !0;
	let P = -1;
	for (; ++P < O.length;) {
		let e = O[P];
		if (A === e.length && k.slice(0, e.length) === e) return !0;
	}
	return !1;
}
function patch(e, E) {
	let D = position(E);
	E.data && (e.data = esm_default(E.data)), D && (e.position = D);
}
function findDefinition(e, E) {
	let D, O = -1;
	if (e) for (; ++O < e.length;) {
		let k = e[O], A = typeof k == "string" ? k : k[0];
		if (A === E) return k;
		A === "data*" && (D = k);
	}
	if (E.length > 4 && E.slice(0, 4).toLowerCase() === "data") return D;
}
function rehypeSanitize(e) {
	return function(E) {
		return sanitize(E, e);
	};
}
export { h as a, defaultUrlTransform as c, webNamespaces as i, defaultSchema as n, s as o, rehypeRaw as r, Markdown as s, rehypeSanitize as t };
