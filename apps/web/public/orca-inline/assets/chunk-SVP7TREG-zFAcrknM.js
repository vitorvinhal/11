import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log } from "./src-DXrlgw8l.js";
import { D as getThemeVariables3, a as clear, b as getConfig, c as configureSvgSize, x as getConfig2, z as sanitizeText } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import { t as selectSvgElement } from "./chunk-CLGD4ZFX--a6S7Yag.js";
var diagramTitle = "", accTitle = "", accDescription = "", rules = [], ruleMap = /* @__PURE__ */ new Map(), sanitizeText2 = /* @__PURE__ */ __name((e) => sanitizeText(e, getConfig2()), "sanitizeText"), sanitizeAstNode = /* @__PURE__ */ __name((e) => {
	switch (e.type) {
		case "terminal": return {
			...e,
			value: sanitizeText2(e.value)
		};
		case "nonterminal": return {
			...e,
			name: sanitizeText2(e.name)
		};
		case "sequence": return {
			...e,
			elements: e.elements.map(sanitizeAstNode)
		};
		case "choice": return {
			...e,
			alternatives: e.alternatives.map(sanitizeAstNode)
		};
		case "optional": return {
			...e,
			element: sanitizeAstNode(e.element)
		};
		case "repetition": return {
			...e,
			element: sanitizeAstNode(e.element),
			separator: e.separator ? sanitizeAstNode(e.separator) : void 0
		};
		case "special": return {
			...e,
			text: sanitizeText2(e.text)
		};
	}
}, "sanitizeAstNode"), clear2 = /* @__PURE__ */ __name(() => {
	diagramTitle = "", accTitle = "", accDescription = "", rules.length = 0, ruleMap.clear(), clear(), log.debug("[Railroad] Database cleared");
}, "clear"), setTitle = /* @__PURE__ */ __name((e) => {
	diagramTitle = sanitizeText2(e), log.debug("[Railroad] Title set:", e);
}, "setTitle"), getTitle = /* @__PURE__ */ __name(() => diagramTitle, "getTitle"), db = {
	clear: clear2,
	setTitle,
	getTitle,
	addRule: /* @__PURE__ */ __name((e) => {
		let S = {
			...e,
			name: sanitizeText2(e.name),
			definition: sanitizeAstNode(e.definition),
			comment: e.comment ? sanitizeText2(e.comment) : void 0
		};
		log.debug("[Railroad] Adding rule:", S.name), ruleMap.has(S.name) && log.warn(`[Railroad] Rule '${S.name}' is already defined. Overwriting.`), rules.push(S), ruleMap.set(S.name, S);
	}, "addRule"),
	getRules: /* @__PURE__ */ __name(() => rules, "getRules"),
	getRule: /* @__PURE__ */ __name((e) => ruleMap.get(e), "getRule"),
	setAccTitle: /* @__PURE__ */ __name((e) => {
		accTitle = sanitizeText2(e).replace(/^\s+/g, ""), log.debug("[Railroad] Accessibility title set:", e);
	}, "setAccTitle"),
	getAccTitle: /* @__PURE__ */ __name(() => accTitle, "getAccTitle"),
	setAccDescription: /* @__PURE__ */ __name((e) => {
		accDescription = sanitizeText2(e).replace(/\n\s+/g, "\n"), log.debug("[Railroad] Accessibility description set:", e);
	}, "setAccDescription"),
	getAccDescription: /* @__PURE__ */ __name(() => accDescription, "getAccDescription"),
	setDiagramTitle: setTitle,
	getDiagramTitle: getTitle
}, DEFAULT_RAILROAD_CONFIG = {
	compactMode: !1,
	padding: 10,
	verticalSeparation: 8,
	horizontalSeparation: 10,
	arcRadius: 10,
	fontSize: 14,
	fontFamily: "monospace",
	terminalFill: "#FFFFC0",
	terminalStroke: "#000000",
	terminalTextColor: "#000000",
	nonTerminalFill: "#FFFFFF",
	nonTerminalStroke: "#000000",
	nonTerminalTextColor: "#000000",
	lineColor: "#000000",
	strokeWidth: 2,
	markerFill: "#000000",
	commentFill: "#E8E8E8",
	commentStroke: "#888888",
	commentTextColor: "#666666",
	specialFill: "#F0E0FF",
	specialStroke: "#8800CC",
	ruleNameColor: "#000066",
	showMarkers: !0,
	markerRadius: 5
}, COLOR_VALUE_PATTERN = /^#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$|^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch)\([\d\s%+,./-]+\)$|^[a-z]+$/i, FONT_FAMILY_PATTERN = /^[\w "',.-]+$/, RAILROAD_STYLE_OPTION_KEYS = /* @__PURE__ */ new Set([
	"compactMode",
	"padding",
	"verticalSeparation",
	"horizontalSeparation",
	"arcRadius",
	"fontSize",
	"fontFamily",
	"terminalFill",
	"terminalStroke",
	"terminalTextColor",
	"nonTerminalFill",
	"nonTerminalStroke",
	"nonTerminalTextColor",
	"lineColor",
	"strokeWidth",
	"markerFill",
	"commentFill",
	"commentStroke",
	"commentTextColor",
	"specialFill",
	"specialStroke",
	"ruleNameColor",
	"showMarkers",
	"markerRadius"
]), isRailroadStyleOptions = /* @__PURE__ */ __name((e) => e ? Object.keys(e).every((e) => e === "railroad" || RAILROAD_STYLE_OPTION_KEYS.has(e)) : !1, "isRailroadStyleOptions"), extractRailroadOverrides = /* @__PURE__ */ __name((e) => e ? "railroad" in e && e.railroad ? e.railroad : isRailroadStyleOptions(e) ? e : {} : {}, "extractRailroadOverrides"), extractThemeOverrides = /* @__PURE__ */ __name((e) => {
	if (!e || isRailroadStyleOptions(e)) return {};
	let { railroad: x, svgId: S, theme: C, look: w, ...T } = e;
	return T;
}, "extractThemeOverrides"), sanitizeColorValue = /* @__PURE__ */ __name((e, x) => {
	if (typeof e != "string") return x;
	let S = e.trim();
	return COLOR_VALUE_PATTERN.test(S) ? S : x;
}, "sanitizeColorValue"), sanitizeFontFamilyValue = /* @__PURE__ */ __name((e, x) => {
	if (typeof e != "string") return x;
	let S = e.trim();
	return FONT_FAMILY_PATTERN.test(S) ? S : x;
}, "sanitizeFontFamilyValue"), sanitizeNumberValue = /* @__PURE__ */ __name((e, x) => {
	let S = typeof e == "number" ? e : typeof e == "string" ? Number.parseFloat(e) : NaN;
	return Number.isFinite(S) && S >= 0 ? S : x;
}, "sanitizeNumberValue"), parseThemeFontSize = /* @__PURE__ */ __name((e) => {
	let x = typeof e == "number" ? e : typeof e == "string" ? Number.parseFloat(e) : NaN;
	return Number.isFinite(x) && x > 0 ? x : void 0;
}, "parseThemeFontSize"), buildThemeDefaults = /* @__PURE__ */ __name((e) => {
	let x = sanitizeFontFamilyValue(e.fontFamily, DEFAULT_RAILROAD_CONFIG.fontFamily), S = parseThemeFontSize(e.fontSize) ?? DEFAULT_RAILROAD_CONFIG.fontSize;
	return {
		...DEFAULT_RAILROAD_CONFIG,
		fontFamily: x,
		fontSize: S,
		terminalFill: sanitizeColorValue(e.secondBkg ?? e.secondaryColor, DEFAULT_RAILROAD_CONFIG.terminalFill),
		terminalStroke: sanitizeColorValue(e.secondaryBorderColor ?? e.lineColor, DEFAULT_RAILROAD_CONFIG.terminalStroke),
		terminalTextColor: sanitizeColorValue(e.secondaryTextColor ?? e.textColor, DEFAULT_RAILROAD_CONFIG.terminalTextColor),
		nonTerminalFill: sanitizeColorValue(e.mainBkg ?? e.background, DEFAULT_RAILROAD_CONFIG.nonTerminalFill),
		nonTerminalStroke: sanitizeColorValue(e.primaryBorderColor ?? e.lineColor, DEFAULT_RAILROAD_CONFIG.nonTerminalStroke),
		nonTerminalTextColor: sanitizeColorValue(e.primaryTextColor ?? e.textColor, DEFAULT_RAILROAD_CONFIG.nonTerminalTextColor),
		lineColor: sanitizeColorValue(e.lineColor, DEFAULT_RAILROAD_CONFIG.lineColor),
		markerFill: sanitizeColorValue(e.lineColor, DEFAULT_RAILROAD_CONFIG.markerFill),
		commentFill: sanitizeColorValue(e.labelBackground ?? e.tertiaryColor, DEFAULT_RAILROAD_CONFIG.commentFill),
		commentStroke: sanitizeColorValue(e.tertiaryBorderColor ?? e.lineColor, DEFAULT_RAILROAD_CONFIG.commentStroke),
		commentTextColor: sanitizeColorValue(e.tertiaryTextColor ?? e.textColor, DEFAULT_RAILROAD_CONFIG.commentTextColor),
		specialFill: sanitizeColorValue(e.tertiaryColor ?? e.secondaryColor, DEFAULT_RAILROAD_CONFIG.specialFill),
		specialStroke: sanitizeColorValue(e.tertiaryBorderColor ?? e.secondaryBorderColor, DEFAULT_RAILROAD_CONFIG.specialStroke),
		ruleNameColor: sanitizeColorValue(e.titleColor ?? e.textColor, DEFAULT_RAILROAD_CONFIG.ruleNameColor)
	};
}, "buildThemeDefaults"), buildRailroadStyleOptions = /* @__PURE__ */ __name((e) => {
	let x = getConfig(), C = buildThemeDefaults({
		...getThemeVariables3(),
		...x.themeVariables ?? {},
		...extractThemeOverrides(e)
	}), T = {
		...x.railroad ?? {},
		...extractRailroadOverrides(e)
	};
	return {
		compactMode: T.compactMode ?? C.compactMode,
		padding: sanitizeNumberValue(T.padding, C.padding),
		verticalSeparation: sanitizeNumberValue(T.verticalSeparation, C.verticalSeparation),
		horizontalSeparation: sanitizeNumberValue(T.horizontalSeparation, C.horizontalSeparation),
		arcRadius: sanitizeNumberValue(T.arcRadius, C.arcRadius),
		fontSize: sanitizeNumberValue(T.fontSize, C.fontSize),
		fontFamily: sanitizeFontFamilyValue(T.fontFamily, C.fontFamily),
		terminalFill: sanitizeColorValue(T.terminalFill, C.terminalFill),
		terminalStroke: sanitizeColorValue(T.terminalStroke, C.terminalStroke),
		terminalTextColor: sanitizeColorValue(T.terminalTextColor, C.terminalTextColor),
		nonTerminalFill: sanitizeColorValue(T.nonTerminalFill, C.nonTerminalFill),
		nonTerminalStroke: sanitizeColorValue(T.nonTerminalStroke, C.nonTerminalStroke),
		nonTerminalTextColor: sanitizeColorValue(T.nonTerminalTextColor, C.nonTerminalTextColor),
		lineColor: sanitizeColorValue(T.lineColor, C.lineColor),
		strokeWidth: sanitizeNumberValue(T.strokeWidth, C.strokeWidth),
		markerFill: sanitizeColorValue(T.markerFill, C.markerFill),
		commentFill: sanitizeColorValue(T.commentFill, C.commentFill),
		commentStroke: sanitizeColorValue(T.commentStroke, C.commentStroke),
		commentTextColor: sanitizeColorValue(T.commentTextColor, C.commentTextColor),
		specialFill: sanitizeColorValue(T.specialFill, C.specialFill),
		specialStroke: sanitizeColorValue(T.specialStroke, C.specialStroke),
		ruleNameColor: sanitizeColorValue(T.ruleNameColor, C.ruleNameColor),
		showMarkers: T.showMarkers ?? C.showMarkers,
		markerRadius: sanitizeNumberValue(T.markerRadius, C.markerRadius)
	};
}, "buildRailroadStyleOptions"), getStyles = /* @__PURE__ */ __name((e) => {
	let { fontFamily: x, fontSize: S, terminalFill: C, terminalStroke: w, terminalTextColor: T, nonTerminalFill: E, nonTerminalStroke: D, nonTerminalTextColor: O, lineColor: k, strokeWidth: A, markerFill: j, commentFill: M, commentStroke: N, commentTextColor: P, specialFill: F, specialStroke: I, ruleNameColor: L } = buildRailroadStyleOptions(e);
	return `
  .railroad-diagram {
    font-family: ${x};
    font-size: ${S}px;
  }

  .railroad-terminal rect {
    fill: ${C};
    stroke: ${w};
    stroke-width: ${A}px;
  }

  .railroad-terminal text {
    fill: ${T};
    font-family: ${x};
    font-size: ${S}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-nonterminal rect {
    fill: ${E};
    stroke: ${D};
    stroke-width: ${A}px;
  }

  .railroad-nonterminal text {
    fill: ${O};
    font-family: ${x};
    font-size: ${S}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-line {
    stroke: ${k};
    stroke-width: ${A}px;
    fill: none;
  }

  .railroad-start circle,
  .railroad-end circle {
    fill: ${j};
  }

  .railroad-comment ellipse {
    fill: ${M};
    stroke: ${N};
    stroke-width: ${A}px;
  }

  .railroad-comment text {
    fill: ${P};
    font-style: italic;
    font-family: ${x};
    font-size: ${S}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-special rect {
    fill: ${F};
    stroke: ${I};
    stroke-width: ${A}px;
    stroke-dasharray: 5,3;
  }

  .railroad-special text {
    fill: ${O};
    font-family: ${x};
    font-size: ${S}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-rule-name {
    font-weight: bold;
    fill: ${L};
    font-family: ${x};
    font-size: ${S}px;
  }

  .railroad-group {
    /* Grouping container, no specific styles */
  }
`;
}, "getStyles"), PathBuilder = class {
	constructor() {
		this.d = "";
	}
	static #e = __name(this, "PathBuilder");
	moveTo(e, x) {
		return this.d += `M ${e} ${x} `, this;
	}
	lineTo(e, x) {
		return this.d += `L ${e} ${x} `, this;
	}
	horizontalTo(e) {
		return this.d += `H ${e} `, this;
	}
	verticalTo(e) {
		return this.d += `V ${e} `, this;
	}
	arcTo(e, x, S, C, w, T, E) {
		return this.d += `A ${e} ${x} ${S} ${C ? 1 : 0} ${w ? 1 : 0} ${T} ${E} `, this;
	}
	build() {
		return this.d.trim();
	}
}, RailroadRenderer = class {
	constructor(e, x = buildRailroadStyleOptions()) {
		this.textCache = /* @__PURE__ */ new Map(), this.svg = e, this.config = x;
	}
	static #e = __name(this, "RailroadRenderer");
	measureText(e) {
		if (this.textCache.has(e)) return this.textCache.get(e);
		let x = this.svg.append("text").attr("font-family", this.config.fontFamily).attr("font-size", this.config.fontSize).text(e), S = x.node().getBBox(), C = {
			width: S.width,
			height: S.height
		};
		return x.remove(), this.textCache.set(e, C), C;
	}
	renderTerminal(e, x) {
		let S = this.measureText(x), C = S.width + this.config.padding * 2, w = S.height + this.config.padding * 2, T = e.append("g").attr("class", "railroad-terminal");
		return T.append("rect").attr("x", 0).attr("y", 0).attr("width", C).attr("height", w).attr("rx", 10).attr("ry", 10), T.append("text").attr("x", C / 2).attr("y", w / 2).text(x), {
			element: T.node(),
			dimensions: {
				width: C,
				height: w,
				up: w / 2,
				down: w / 2
			}
		};
	}
	renderNonTerminal(e, x) {
		let S = this.measureText(x), C = S.width + this.config.padding * 2, w = S.height + this.config.padding * 2, T = e.append("g").attr("class", "railroad-nonterminal");
		return T.append("rect").attr("x", 0).attr("y", 0).attr("width", C).attr("height", w), T.append("text").attr("x", C / 2).attr("y", w / 2).text(x), {
			element: T.node(),
			dimensions: {
				width: C,
				height: w,
				up: w / 2,
				down: w / 2
			}
		};
	}
	renderSequence(e, x) {
		let S = x.map((x) => this.renderExpression(e, x)), C = 0, w = 0, T = 0;
		for (let e of S) C += e.dimensions.width, w = Math.max(w, e.dimensions.up), T = Math.max(T, e.dimensions.down);
		C += (S.length - 1) * this.config.horizontalSeparation;
		let E = e.append("g").attr("class", "railroad-sequence"), D = 0;
		for (let e = 0; e < S.length; e++) {
			let x = S[e], C = w - x.dimensions.up;
			if (E.node().appendChild(x.element).setAttribute("transform", `translate(${D}, ${C})`), e < S.length - 1) {
				let e = D + x.dimensions.width, S = e + this.config.horizontalSeparation, C = w;
				E.append("path").attr("class", "railroad-line").attr("d", new PathBuilder().moveTo(e, C).lineTo(S, C).build());
			}
			D += x.dimensions.width + this.config.horizontalSeparation;
		}
		return {
			element: E.node(),
			dimensions: {
				width: C,
				height: w + T,
				up: w,
				down: T
			}
		};
	}
	renderChoice(e, x) {
		let S = x.map((x) => this.renderExpression(e, x)), C = 0, w = 0;
		for (let e of S) C = Math.max(C, e.dimensions.width), w += e.dimensions.height;
		w += (S.length - 1) * this.config.verticalSeparation;
		let T = this.config.arcRadius, E = T * 4, D = C + E, O = e.append("g").attr("class", "railroad-choice"), k = 0, A = w / 2;
		for (let e of S) {
			let x = k, S = x + e.dimensions.up, w = T * 2 + (C - e.dimensions.width) / 2;
			O.node().appendChild(e.element).setAttribute("transform", `translate(${w}, ${x})`);
			let E = new PathBuilder(), j = S > A;
			S === A ? E.moveTo(0, A).lineTo(w, S) : E.moveTo(0, A).arcTo(T, T, 0, !1, j, T, A + (j ? T : -T)).lineTo(T, S - (j ? T : -T)).arcTo(T, T, 0, !1, !j, T * 2, S).lineTo(w, S), O.append("path").attr("class", "railroad-line").attr("d", E.build());
			let M = new PathBuilder(), N = w + e.dimensions.width, P = D - T * 2;
			S === A ? M.moveTo(N, S).lineTo(D, A) : M.moveTo(N, S).lineTo(P, S).arcTo(T, T, 0, !1, !j, D - T, S + (j ? -T : T)).lineTo(D - T, A + (j ? T : -T)).arcTo(T, T, 0, !1, j, D, A), O.append("path").attr("class", "railroad-line").attr("d", M.build()), k += e.dimensions.height + this.config.verticalSeparation;
		}
		return {
			element: O.node(),
			dimensions: {
				width: D,
				height: w,
				up: A,
				down: w - A
			}
		};
	}
	renderOptional(e, x) {
		let S = this.renderExpression(e, x), C = this.config.arcRadius, w = C * 2, T = S.dimensions.width + C * 4, E = S.dimensions.height + w, D = e.append("g").attr("class", "railroad-optional"), O = C * 2, k = w;
		D.node().appendChild(S.element).setAttribute("transform", `translate(${O}, ${k})`);
		let A = k + S.dimensions.up, j = new PathBuilder().moveTo(0, A).lineTo(C * 2, A);
		D.append("path").attr("class", "railroad-line").attr("d", j.build());
		let M = new PathBuilder().moveTo(O + S.dimensions.width, A).lineTo(T, A);
		D.append("path").attr("class", "railroad-line").attr("d", M.build());
		let N = new PathBuilder().moveTo(0, A).arcTo(C, C, 0, !1, !1, C, A - C).lineTo(C, C).arcTo(C, C, 0, !1, !0, C * 2, 0).lineTo(T - C * 2, 0).arcTo(C, C, 0, !1, !0, T - C, C).lineTo(T - C, A - C).arcTo(C, C, 0, !1, !1, T, A);
		return D.append("path").attr("class", "railroad-line").attr("d", N.build()), {
			element: D.node(),
			dimensions: {
				width: T,
				height: E,
				up: A,
				down: E - A
			}
		};
	}
	renderRepetition(e, x, S) {
		let C = this.renderExpression(e, x), w = this.config.arcRadius, T = w * 2, E = C.dimensions.width + w * 4, D = S === 0, O = C.dimensions.height + T + (D ? T : 0), k = e.append("g").attr("class", "railroad-repetition"), A = w * 2, j = D ? T : 0;
		k.node().appendChild(C.element).setAttribute("transform", `translate(${A}, ${j})`);
		let M = j + C.dimensions.up;
		k.append("path").attr("class", "railroad-line").attr("d", new PathBuilder().moveTo(0, M).lineTo(w * 2, M).build()), k.append("path").attr("class", "railroad-line").attr("d", new PathBuilder().moveTo(A + C.dimensions.width, M).lineTo(E, M).build());
		let N = j + C.dimensions.height + w, P = new PathBuilder().moveTo(A + C.dimensions.width, M).arcTo(w, w, 0, !1, !0, A + C.dimensions.width + w, M + w).lineTo(A + C.dimensions.width + w, N).arcTo(w, w, 0, !1, !0, A + C.dimensions.width, N + w).lineTo(w * 2, N + w).arcTo(w, w, 0, !1, !0, w, N).lineTo(w, M + w).arcTo(w, w, 0, !1, !0, w * 2, M);
		if (k.append("path").attr("class", "railroad-line").attr("d", P.build()), D) {
			let e = new PathBuilder().moveTo(0, M).arcTo(w, w, 0, !1, !1, w, M - w).lineTo(w, w).arcTo(w, w, 0, !1, !0, w * 2, 0).lineTo(E - w * 2, 0).arcTo(w, w, 0, !1, !0, E - w, w).lineTo(E - w, M - w).arcTo(w, w, 0, !1, !1, E, M);
			k.append("path").attr("class", "railroad-line").attr("d", e.build());
		}
		return {
			element: k.node(),
			dimensions: {
				width: E,
				height: O,
				up: M,
				down: O - M
			}
		};
	}
	renderSpecial(e, x) {
		let S = this.measureText("? " + x + " ?"), C = S.width + this.config.padding * 2, w = S.height + this.config.padding * 2, T = e.append("g").attr("class", "railroad-special");
		return T.append("rect").attr("x", 0).attr("y", 0).attr("width", C).attr("height", w), T.append("text").attr("x", C / 2).attr("y", w / 2).text("? " + x + " ?"), {
			element: T.node(),
			dimensions: {
				width: C,
				height: w,
				up: w / 2,
				down: w / 2
			}
		};
	}
	renderExpression(e, x) {
		switch (x.type) {
			case "terminal": return this.renderTerminal(e, x.value);
			case "nonterminal": return this.renderNonTerminal(e, x.name);
			case "sequence": return this.renderSequence(e, x.elements);
			case "choice": return this.renderChoice(e, x.alternatives);
			case "optional": return this.renderOptional(e, x.element);
			case "repetition": return this.renderRepetition(e, x.element, x.min);
			case "special": return this.renderSpecial(e, x.text);
			default: throw Error(`Unknown node type: ${x.type}`);
		}
	}
	renderRule(e, x) {
		let S = this.svg.append("g").attr("class", "railroad-rule").attr("transform", `translate(0, ${x})`), C = e.name + " =", w = this.measureText(C).width + 20, T = w + 20, E = S.append("g"), D = this.renderExpression(E, e.definition), O = Math.max(20, D.dimensions.up), k = O - D.dimensions.up;
		return E.attr("transform", `translate(${T}, ${k})`), S.append("g").attr("class", "railroad-rule-name-group").append("text").attr("class", "railroad-rule-name").attr("x", 0).attr("y", O).text(C), S.append("g").attr("class", "railroad-start").append("circle").attr("cx", w).attr("cy", O).attr("r", this.config.markerRadius), S.append("g").attr("class", "railroad-end").append("circle").attr("cx", T + D.dimensions.width + 10).attr("cy", O).attr("r", this.config.markerRadius), S.append("path").attr("class", "railroad-line").attr("d", new PathBuilder().moveTo(w + this.config.markerRadius, O).lineTo(T, O).build()), S.append("path").attr("class", "railroad-line").attr("d", new PathBuilder().moveTo(T + D.dimensions.width, O).lineTo(T + D.dimensions.width + 10 - this.config.markerRadius, O).build()), {
			height: Math.max(40, k + D.dimensions.height + this.config.padding * 2),
			width: T + D.dimensions.width + 10 + this.config.markerRadius
		};
	}
	renderDiagram(e) {
		let x = this.config.padding, S = 0;
		for (let C of e) {
			let e = this.renderRule(C, x);
			x += e.height + this.config.verticalSeparation, S = Math.max(S, e.width);
		}
		return {
			width: S + this.config.padding * 2,
			height: x + this.config.padding
		};
	}
}, configureRailroadSvgSize = /* @__PURE__ */ __name((e, x, S) => {
	configureSvgSize(e, x.height, x.width, S), e.attr("viewBox", `0 0 ${x.width} ${x.height}`);
}, "configureRailroadSvgSize"), renderer = { draw: /* @__PURE__ */ __name((e, S, C) => {
	log.debug("[Railroad] Rendering diagram\n" + e);
	try {
		let e = selectSvgElement(S);
		e.attr("class", "railroad-diagram");
		let C = getConfig().railroad?.useMaxWidth ?? !0, T = db.getRules();
		if (log.debug(`[Railroad] Rendering ${T.length} rules`), T.length === 0) {
			log.warn("[Railroad] No rules to render"), configureRailroadSvgSize(e, {
				height: 100,
				width: 200
			}, C);
			return;
		}
		configureRailroadSvgSize(e, new RailroadRenderer(e, buildRailroadStyleOptions()).renderDiagram(T), C), log.debug("[Railroad] Render complete");
	} catch (e) {
		throw log.error("[Railroad] Render error:", e), e;
	}
}, "draw") };
export { getStyles as n, renderer as r, db as t };
