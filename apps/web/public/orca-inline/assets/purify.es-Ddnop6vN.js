function _arrayLikeToArray(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function _arrayWithHoles(e) {
	if (Array.isArray(e)) return e;
}
function _iterableToArrayLimit(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function _nonIterableRest() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(e, i) {
	return _arrayWithHoles(e) || _iterableToArrayLimit(e, i) || _unsupportedIterableToArray(e, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(t, n) {
	if (t) {
		if (typeof t == "string") return _arrayLikeToArray(t, n);
		var r = {}.toString.call(t).slice(8, -1);
		return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(t, n) : void 0;
	}
}
var entries = Object.entries, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, freeze = Object.freeze, seal = Object.seal, create = Object.create, _ref = typeof Reflect < "u" && Reflect, apply = _ref.apply, construct = _ref.construct;
freeze ||= function(e) {
	return e;
}, seal ||= function(e) {
	return e;
}, apply ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, construct ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var arrayForEach = unapply(Array.prototype.forEach), arrayLastIndexOf = unapply(Array.prototype.lastIndexOf), arrayPop = unapply(Array.prototype.pop), arrayPush = unapply(Array.prototype.push), arraySplice = unapply(Array.prototype.splice), arrayIsArray = Array.isArray, stringToLowerCase = unapply(String.prototype.toLowerCase), stringToString = unapply(String.prototype.toString), stringMatch = unapply(String.prototype.match), stringReplace = unapply(String.prototype.replace), stringIndexOf = unapply(String.prototype.indexOf), stringTrim = unapply(String.prototype.trim), numberToString = unapply(Number.prototype.toString), booleanToString = unapply(Boolean.prototype.toString), bigintToString = typeof BigInt > "u" ? null : unapply(BigInt.prototype.toString), symbolToString = typeof Symbol > "u" ? null : unapply(Symbol.prototype.toString), objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty), objectToString = unapply(Object.prototype.toString), regExpTest = unapply(RegExp.prototype.test), typeErrorCreate = unconstruct(TypeError);
function unapply(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return apply(e, t, n);
	};
}
function unconstruct(e) {
	return function() {
		return construct(e, [...arguments]);
	};
}
function addToSet(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
	if (setPrototypeOf && setPrototypeOf(e, null), !arrayIsArray(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (isFrozen(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function cleanArray(e) {
	for (let t = 0; t < e.length; t++) objectHasOwnProperty(e, t) || (e[t] = null);
	return e;
}
function clone(e) {
	let t = create(null);
	for (let r of entries(e)) {
		var n = _slicedToArray(r, 2);
		let a = n[0], o = n[1];
		objectHasOwnProperty(e, a) && (arrayIsArray(o) ? t[a] = cleanArray(o) : o && typeof o == "object" && o.constructor === Object ? t[a] = clone(o) : t[a] = o);
	}
	return t;
}
function stringifyValue(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return numberToString(e);
		case "boolean": return booleanToString(e);
		case "bigint": return bigintToString ? bigintToString(e) : "0";
		case "symbol": return symbolToString ? symbolToString(e) : "Symbol()";
		case "undefined": return objectToString(e);
		case "function":
		case "object": {
			if (e === null) return objectToString(e);
			let t = e, n = lookupGetter(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : objectToString(e);
			}
			return objectToString(e);
		}
		default: return objectToString(e);
	}
}
function lookupGetter(e, t) {
	for (; e !== null;) {
		let n = getOwnPropertyDescriptor(e, t);
		if (n) {
			if (n.get) return unapply(n.get);
			if (typeof n.value == "function") return unapply(n.value);
		}
		e = getPrototypeOf(e);
	}
	function n() {
		return null;
	}
	return n;
}
function isRegex(e) {
	try {
		return regExpTest(e, ""), !0;
	} catch {
		return !1;
	}
}
var html$1 = freeze(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), svg$1 = freeze(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), svgFilters = freeze([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), svgDisallowed = freeze([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), mathMl$1 = freeze(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), mathMlDisallowed = freeze([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), text = freeze(["#text"]), html = freeze(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), svg = freeze(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), mathMl = freeze(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), xml = freeze([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g), ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g), TMPLIT_EXPR = seal(/\${[\w\W]*/g), DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/), ARIA_ATTR = seal(/^aria-[\-\w]+$/), IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i), ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), DOCTYPE_NAME = seal(/^html$/i), CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i), ELEMENT_MARKUP_PROBE = seal(/<[/\w!]/g), COMMENT_MARKUP_PROBE = seal(/<[/\w]/g), FALLBACK_TAG_CLOSE = seal(/<\/no(script|embed|frames)/i), SELF_CLOSING_TAG = seal(/\/>/i), NODE_TYPE = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, LITERAL_TEXT_ELEMENT_NAMES = [
	"style",
	"script",
	"xmp",
	"iframe",
	"noembed",
	"noframes",
	"plaintext",
	"noscript"
], LITERAL_TEXT_ELEMENTS = freeze(addToSet({}, LITERAL_TEXT_ELEMENT_NAMES)), LITERAL_TEXT_CLOSE = function() {
	let e = {};
	return arrayForEach(LITERAL_TEXT_ELEMENT_NAMES, (t) => {
		e[t] = seal(RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
	}), freeze(e);
}(), getGlobal = function() {
	return typeof window > "u" ? null : window;
}, _createTrustedTypesPolicy = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, _createHooksMap = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
}, _resolveSetOption = function(e, t, n, r) {
	return objectHasOwnProperty(e, t) && arrayIsArray(e[t]) ? addToSet(r.base ? clone(r.base) : {}, e[t], r.transform) : n;
}, _resolveObjectOption = function(e, t, n) {
	let r = objectHasOwnProperty(e, t) ? e[t] : void 0;
	return r && typeof r == "object" ? clone(r) : n();
};
function createDOMPurify() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal(), t = (e) => createDOMPurify(e);
	if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== NODE_TYPE.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, s = e.Node, c = e.Element, l = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let u = e.DOMParser, nt = e.trustedTypes, f = c.prototype, rt = lookupGetter(f, "cloneNode"), it = lookupGetter(f, "remove"), at = lookupGetter(f, "nextSibling"), p = lookupGetter(f, "childNodes"), m = lookupGetter(f, "parentNode"), ot = lookupGetter(f, "shadowRoot"), st = lookupGetter(f, "attributes"), h = s && s.prototype ? lookupGetter(s.prototype, "nodeType") : null, g = s && s.prototype ? lookupGetter(s.prototype, "nodeName") : null, _ = s && s.prototype ? lookupGetter(s.prototype, "ownerDocument") : null, v = function(e) {
		return h ? h(e) : e.nodeType;
	}, ct = function(e) {
		return g ? g(e) : e.nodeName;
	};
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let y, b = "", lt, ut = !1, x = 0, dt = function() {
		if (x > 0) throw typeErrorCreate("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, S = function(e) {
		dt(), x++;
		try {
			return y.createHTML(e);
		} finally {
			x--;
		}
	}, ft = function(e) {
		dt(), x++;
		try {
			return y.createScriptURL(e);
		} finally {
			x--;
		}
	}, pt = function() {
		return ut ||= (lt = _createTrustedTypesPolicy(nt, i), !0), lt;
	}, C = n, mt = C.implementation, ht = C.createNodeIterator, gt = C.createDocumentFragment, _t = C.getElementsByTagName, vt = r.importNode, w = _createHooksMap();
	t.isSupported = typeof entries == "function" && typeof m == "function" && mt && mt.createHTMLDocument !== void 0;
	let yt = MUSTACHE_EXPR, bt = ERB_EXPR, xt = TMPLIT_EXPR, St = DATA_ATTR, Ct = ARIA_ATTR, wt = IS_SCRIPT_OR_DATA, Tt = ATTR_WHITESPACE, Et = CUSTOM_ELEMENT, Dt = IS_ALLOWED_URI, T = null, Ot = addToSet({}, [
		...html$1,
		...svg$1,
		...svgFilters,
		...mathMl$1,
		...text
	]), E = null, kt = addToSet({}, [
		...html,
		...svg,
		...mathMl,
		...xml
	]), D = Object.seal(create(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), O = null, At = null, k = Object.seal(create(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), jt = !0, Mt = !0, Nt = !1, Pt = !0, A = !1, j = !0, M = !1, Ft = !1, N = null, It = null, Lt = !1, P = !1, F = !1, I = !1, Rt = !0, zt = !1, Bt = "user-content-", Vt = !0, Ht = !1, L = {}, R = null, Ut = addToSet({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), Wt = null, Gt = addToSet({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Kt = null, qt = addToSet({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), z = "http://www.w3.org/1998/Math/MathML", B = "http://www.w3.org/2000/svg", V = "http://www.w3.org/1999/xhtml", H = V, Jt = !1, Yt = null, Xt = addToSet({}, [
		z,
		B,
		V
	], stringToString), Zt = freeze([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Qt = addToSet({}, Zt), $t = freeze(["annotation-xml"]), en = addToSet({}, $t), tn = addToSet({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), U = null, nn = ["application/xhtml+xml", "text/html"], W = null, G = null, rn = n.createElement("form"), an = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, on = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (G && G === e) return;
		(!e || typeof e != "object") && (e = {}), e = clone(e), U = nn.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, W = U === "application/xhtml+xml" ? stringToString : stringToLowerCase, T = _resolveSetOption(e, "ALLOWED_TAGS", Ot, { transform: W }), E = _resolveSetOption(e, "ALLOWED_ATTR", kt, { transform: W }), Yt = _resolveSetOption(e, "ALLOWED_NAMESPACES", Xt, { transform: stringToString }), Kt = _resolveSetOption(e, "ADD_URI_SAFE_ATTR", qt, {
			transform: W,
			base: qt
		}), Wt = _resolveSetOption(e, "ADD_DATA_URI_TAGS", Gt, {
			transform: W,
			base: Gt
		}), R = _resolveSetOption(e, "FORBID_CONTENTS", Ut, { transform: W }), O = _resolveSetOption(e, "FORBID_TAGS", clone({}), { transform: W }), At = _resolveSetOption(e, "FORBID_ATTR", clone({}), { transform: W }), L = objectHasOwnProperty(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? clone(e.USE_PROFILES) : e.USE_PROFILES : !1, jt = e.ALLOW_ARIA_ATTR !== !1, Mt = e.ALLOW_DATA_ATTR !== !1, Nt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Pt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, A = e.SAFE_FOR_TEMPLATES || !1, j = e.SAFE_FOR_XML !== !1, M = e.WHOLE_DOCUMENT || !1, P = e.RETURN_DOM || !1, F = e.RETURN_DOM_FRAGMENT || !1, I = e.RETURN_TRUSTED_TYPE || !1, Lt = e.FORCE_BODY || !1, Rt = e.SANITIZE_DOM !== !1, zt = e.SANITIZE_NAMED_PROPS || !1, Vt = e.KEEP_CONTENT !== !1, Ht = e.IN_PLACE || !1, Dt = isRegex(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : IS_ALLOWED_URI, H = typeof e.NAMESPACE == "string" ? e.NAMESPACE : V, Qt = _resolveObjectOption(e, "MATHML_TEXT_INTEGRATION_POINTS", () => addToSet({}, Zt)), en = _resolveObjectOption(e, "HTML_INTEGRATION_POINTS", () => addToSet({}, $t));
		let t = _resolveObjectOption(e, "CUSTOM_ELEMENT_HANDLING", () => create(null));
		if (D = create(null), objectHasOwnProperty(t, "tagNameCheck") && an(t.tagNameCheck) && (D.tagNameCheck = t.tagNameCheck), objectHasOwnProperty(t, "attributeNameCheck") && an(t.attributeNameCheck) && (D.attributeNameCheck = t.attributeNameCheck), objectHasOwnProperty(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), seal(D), A && (Mt = !1), F && (P = !0), L && (T = addToSet({}, text), E = create(null), L.html === !0 && (addToSet(T, html$1), addToSet(E, html)), L.svg === !0 && (addToSet(T, svg$1), addToSet(E, svg), addToSet(E, xml)), L.svgFilters === !0 && (addToSet(T, svgFilters), addToSet(E, svg), addToSet(E, xml)), L.mathMl === !0 && (addToSet(T, mathMl$1), addToSet(E, mathMl), addToSet(E, xml))), k.tagCheck = null, k.attributeCheck = null, objectHasOwnProperty(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? k.tagCheck = e.ADD_TAGS : arrayIsArray(e.ADD_TAGS) && (T === Ot && (T = clone(T)), addToSet(T, e.ADD_TAGS, W))), objectHasOwnProperty(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? k.attributeCheck = e.ADD_ATTR : arrayIsArray(e.ADD_ATTR) && (E === kt && (E = clone(E)), addToSet(E, e.ADD_ATTR, W))), objectHasOwnProperty(e, "ADD_FORBID_CONTENTS") && arrayIsArray(e.ADD_FORBID_CONTENTS) && (R === Ut && (R = clone(R)), addToSet(R, e.ADD_FORBID_CONTENTS, W)), Vt && (T["#text"] = !0), M && addToSet(T, [
			"html",
			"head",
			"body"
		]), T.table && (addToSet(T, ["tbody"]), delete O.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = y;
			y = e.TRUSTED_TYPES_POLICY;
			try {
				b = S("");
			} catch (e) {
				throw y = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (y = void 0, b = "") : (y === void 0 && (y = pt()), y && typeof b == "string" && (b = S("")));
		freeze && freeze(e), G = e;
	}, sn = addToSet({}, [
		...svg$1,
		...svgFilters,
		...svgDisallowed
	]), cn = addToSet({}, [...mathMl$1, ...mathMlDisallowed]), ln = function(e, t, n) {
		return t.namespaceURI === V ? e === "svg" : t.namespaceURI === z ? e === "svg" && (n === "annotation-xml" || Qt[n]) : !!sn[e];
	}, un = function(e, t, n) {
		return t.namespaceURI === V ? e === "math" : t.namespaceURI === B ? e === "math" && en[n] : !!cn[e];
	}, dn = function(e, t, n) {
		return t.namespaceURI === B && !en[n] || t.namespaceURI === z && !Qt[n] ? !1 : !cn[e] && (tn[e] || !sn[e]);
	}, fn = function(e) {
		let t = m(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: H,
			tagName: "template"
		});
		let n = stringToLowerCase(e.tagName), r = stringToLowerCase(t.tagName);
		return Yt[e.namespaceURI] ? e.namespaceURI === B ? ln(n, t, r) : e.namespaceURI === z ? un(n, t, r) : e.namespaceURI === V ? dn(n, t, r) : !!(U === "application/xhtml+xml" && Yt[e.namespaceURI]) : !1;
	}, K = function(e) {
		arrayPush(t.removed, { element: e });
		try {
			m(e).removeChild(e);
		} catch {
			if (it(e), !m(e)) throw typeErrorCreate("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, pn = function(e, t, n) {
		try {
			e.removeAttributeNode(t);
		} catch {
			try {
				e.removeAttribute(n);
			} catch {}
		}
	}, q = function(e) {
		Y(e);
		let t = p(e);
		if (t) {
			let e = [];
			arrayForEach(t, (t) => {
				arrayPush(e, t);
			}), arrayForEach(e, (e) => {
				try {
					it(e);
				} catch {}
			});
		}
		let n = st(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			typeof i == "string" && pn(e, r, i);
		}
	}, J = function(e, n, r) {
		if (!r) try {
			r = n.getAttributeNode(e);
		} catch {
			r = null;
		}
		arrayPush(t.removed, {
			attribute: r || null,
			from: n
		});
		try {
			r ? n.removeAttributeNode(r) : n.removeAttribute(e);
		} catch {
			try {
				n.removeAttribute(e);
			} catch {}
		}
		if (e === "is") if (P || F) try {
			K(n);
		} catch {}
		else try {
			n.setAttribute(e, "");
		} catch {}
	}, mn = function(e) {
		let t = st(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			typeof i != "string" || E[W(i)] || pn(e, r, i);
		}
	}, Y = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			v(e) === NODE_TYPE.element && mn(e);
			let n = p(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, hn = function(e, t) {
		return j ? e === "patchsrc" ? !0 : e === "for" && t !== "label" && t !== "output" : !1;
	}, gn = function(e) {
		if (!j) return;
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop(), n = v(e);
			if (n === NODE_TYPE.processingInstruction || n === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, e.data)) {
				try {
					it(e);
				} catch {}
				continue;
			}
			if (n === NODE_TYPE.element) {
				let t = e, n = W(ct(e));
				try {
					t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && hn("for", n) && t.removeAttribute("for");
				} catch {}
			}
			let r = p(e);
			if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
		}
	}, _n = function(e) {
		let t = null, r = null;
		if (Lt) e = "<remove></remove>" + e;
		else {
			let t = stringMatch(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		U === "application/xhtml+xml" && H === V && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = y ? S(e) : e;
		if (H === V) try {
			t = new u().parseFromString(i, U);
		} catch {}
		if (!t || !t.documentElement) {
			t = mt.createDocument(H, "template", null);
			try {
				t.documentElement.innerHTML = Jt ? b : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), H === V ? _t.call(t, M ? "html" : "body")[0] : M ? t.documentElement : a;
	}, vn = function(e) {
		let t = _ ? _(e) : e.ownerDocument;
		return ht.call(t || e, e, l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION, null);
	}, yn = function(e) {
		return e = stringReplace(e, yt, " "), e = stringReplace(e, bt, " "), e = stringReplace(e, xt, " "), e;
	}, bn = function(e) {
		e.normalize();
		let t = _ ? _(e) : e.ownerDocument, n = ht.call(t || e, e, l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION, null), r = n.nextNode();
		for (; r;) r.data = yn(r.data), r = n.nextNode();
		let i = e.querySelectorAll?.call(e, "template");
		i && arrayForEach(i, (e) => {
			X(e.content) && bn(e.content);
		});
	}, xn = function(e) {
		let t = g ? g(e) : null;
		return typeof t != "string" || W(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== st(e) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== h(e) || e.childNodes !== p(e);
	}, X = function(e) {
		if (!h || typeof e != "object" || !e) return !1;
		try {
			return h(e) === NODE_TYPE.documentFragment;
		} catch {
			return !1;
		}
	}, Z = function(e) {
		if (!h || typeof e != "object" || !e) return !1;
		try {
			return typeof h(e) == "number";
		} catch {
			return !1;
		}
	};
	function Q(e, n, r) {
		e.length !== 0 && arrayForEach(e, (e) => {
			e.call(t, n, r, G);
		});
	}
	let Sn = function(e, t) {
		return !!(j && e.hasChildNodes() && !Z(e.firstElementChild) && regExpTest(ELEMENT_MARKUP_PROBE, e.textContent) && regExpTest(ELEMENT_MARKUP_PROBE, e.innerHTML) || j && e.namespaceURI === V && LITERAL_TEXT_ELEMENTS[t] && (Z(e.firstElementChild) || typeof e.textContent == "string" && regExpTest(LITERAL_TEXT_CLOSE[t], e.textContent)) || e.nodeType === NODE_TYPE.processingInstruction || j && e.nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, e.data));
	}, Cn = function(e, t) {
		return e instanceof RegExp ? regExpTest(e, t) : e instanceof Function ? !!e(t, ...[...arguments].slice(2)) : !1;
	}, wn = function(e, t, n) {
		if (!O[t] && An(t) && Cn(D.tagNameCheck, t)) return !1;
		if (Vt && !R[t]) {
			let t = m(e), r = p(e);
			if (r && t) {
				let i = r.length;
				for (let a = i - 1; a >= 0; --a) {
					let i = e === n ? rt(r[a], !0) : r[a];
					t.insertBefore(i, at(e));
				}
			}
		}
		return K(e), !0;
	}, Tn = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? clone(t) : t;
	}, En = function(e, t) {
		return e === t || m(e) !== null ? !1 : (Ht && Y(e), !0);
	}, Dn = function(e, n) {
		if (Q(w.beforeSanitizeElements, e, null), En(e, n)) return !0;
		if (xn(e)) return K(e), !0;
		let r = W(ct(e));
		if (T = Tn(w.uponSanitizeElement, T, Ot, N), Q(w.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: T
		}), En(e, n)) return !0;
		if (Sn(e, r)) return K(e), !0;
		if (O[r] || !(k.tagCheck instanceof Function && k.tagCheck(r)) && !T[r]) {
			let t = wn(e, r, n);
			return t === !1 && Q(w.afterSanitizeElements, e, null), t;
		}
		if (v(e) === NODE_TYPE.element && !fn(e) || (r === "noscript" || r === "noembed" || r === "noframes") && regExpTest(FALLBACK_TAG_CLOSE, e.innerHTML)) return K(e), !0;
		if (A && e.nodeType === NODE_TYPE.text) {
			let n = yn(e.textContent);
			e.textContent !== n && (arrayPush(t.removed, { element: e.cloneNode() }), e.textContent = n);
		}
		return Q(w.afterSanitizeElements, e, null), !1;
	}, On = function(e, t, r) {
		if (At[t] || hn(t, e) || Rt && (t === "id" || t === "name") && (r in n || r in rn)) return !1;
		let i = E[t] || k.attributeCheck instanceof Function && k.attributeCheck(t, e);
		return Mt && regExpTest(St, t) || jt && regExpTest(Ct, t) ? !0 : i ? Kt[t] || regExpTest(Dt, stringReplace(r, Tt, "")) || (t === "src" || t === "xlink:href" || t === "href") && e !== "script" && stringIndexOf(r, "data:") === 0 && Wt[e] || Nt && !regExpTest(wt, stringReplace(r, Tt, "")) ? !0 : !r : An(e) && Cn(D.tagNameCheck, e) && Cn(D.attributeNameCheck, t, e) || t === "is" && D.allowCustomizedBuiltInElements && Cn(D.tagNameCheck, r);
	}, kn = addToSet({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), An = function(e) {
		return !kn[stringToLowerCase(e)] && regExpTest(Et, e);
	}, jn = function(e, t, n, r) {
		if (y && typeof nt == "object" && typeof nt.getAttributeType == "function" && !n) switch (nt.getAttributeType(e, t)) {
			case "TrustedHTML": return S(r);
			case "TrustedScriptURL": return ft(r);
		}
		return r;
	}, Mn = function(e, n, r, i) {
		try {
			r ? e.setAttributeNS(r, n, i) : e.setAttribute(n, i), xn(e) ? K(e) : arrayPop(t.removed);
		} catch {
			J(n, e);
		}
	}, Nn = function(e) {
		Q(w.beforeSanitizeAttributes, e, null);
		let t = e.attributes;
		if (!t || xn(e)) return;
		E = Tn(w.uponSanitizeAttribute, E, kt, It);
		let n = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: E,
			forceKeepAttr: void 0
		}, r = t.length, i = W(e.nodeName);
		for (; r--;) {
			let a = t[r], o = a.name, s = a.namespaceURI, c = a.value, l = W(o), u = c, d = o === "value" ? u : stringTrim(u);
			if (n.attrName = l, n.attrValue = d, n.keepAttr = !0, n.forceKeepAttr = void 0, Q(w.uponSanitizeAttribute, e, n), d = n.attrValue, zt && (l === "id" || l === "name") && stringIndexOf(d, Bt) !== 0 && (J(o, e, a), d = Bt + d), j && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, d)) {
				J(o, e, a);
				continue;
			}
			if (l === "attributename" && stringMatch(d, "href")) {
				J(o, e, a);
				continue;
			}
			if (!n.forceKeepAttr) {
				if (!n.keepAttr) {
					J(o, e, a);
					continue;
				}
				if (!Pt && regExpTest(SELF_CLOSING_TAG, d)) {
					J(o, e, a);
					continue;
				}
				if (A && (d = yn(d)), !On(i, l, d)) {
					J(o, e, a);
					continue;
				}
				d = jn(i, l, s, d), d !== u && Mn(e, o, s, d);
			}
		}
		Q(w.afterSanitizeAttributes, e, null);
	}, $ = function(e) {
		let t = null, n = vn(e);
		for (Q(w.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if (Q(w.uponSanitizeShadowNode, t, null), Dn(t, e), Nn(t), X(t.content) && $(t.content), v(t) === NODE_TYPE.element) {
			let e = ot(t);
			X(e) && (Pn(e), $(e));
		}
		Q(w.afterSanitizeShadowDOM, e, null);
	}, Pn = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				$(e.shadow);
				continue;
			}
			let n = e.node, r = v(n) === NODE_TYPE.element, i = p(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = g ? g(n) : null;
				if (typeof e == "string" && W(e) === "template") {
					let e = n.content;
					X(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = ot(n);
				X(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, a = null, o = null, s = null;
		if (Jt = !e, Jt && (e = "<!-->"), typeof e != "string" && !Z(e) && (e = stringifyValue(e), typeof e != "string")) throw typeErrorCreate("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		Ft ? (T = N, E = It) : on(n), (w.uponSanitizeElement.length > 0 || w.uponSanitizeAttribute.length > 0) && (T = clone(T)), w.uponSanitizeAttribute.length > 0 && (E = clone(E)), t.removed = [];
		let c = Ht && typeof e != "string" && Z(e);
		if (c) {
			gn(e);
			let t = ct(e);
			if (typeof t == "string") {
				let n = W(t);
				if (!T[n] || O[n]) throw q(e), typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
			}
			if (xn(e)) throw q(e), typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
			try {
				Pn(e);
			} catch (t) {
				throw q(e), t;
			}
		} else if (Z(e)) i = _n("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === NODE_TYPE.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), Pn(a);
		else {
			if (!P && !A && !M && e.indexOf("<") === -1) return y && I ? S(e) : e;
			if (i = _n(e), !i) return P ? null : I ? b : "";
		}
		i && Lt && K(i.firstChild);
		let l = c ? e : i;
		try {
			let e = vn(l);
			for (; o = e.nextNode();) Dn(o, l), Nn(o), X(o.content) && $(o.content);
		} catch (n) {
			throw c && (q(e), arrayForEach(t.removed, (e) => {
				e.element && Y(e.element);
			})), n;
		}
		if (c) return arrayForEach(t.removed, (e) => {
			e.element && Y(e.element);
		}), A && bn(e), e;
		if (P) {
			if (A && bn(i), F) for (s = gt.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (E.shadowroot || E.shadowrootmode) && (s = vt.call(r, s, !0)), s;
		}
		let u = M ? i.outerHTML : i.innerHTML;
		return M && T["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, i.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u), A && (u = yn(u)), y && I ? S(u) : u;
	}, t.setConfig = function() {
		on(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}), Ft = !0, N = T, It = E;
	}, t.clearConfig = function() {
		G = null, Ft = !1, N = null, It = null, y = lt, b = "";
	}, t.isValidAttribute = function(e, t, n) {
		return G || on({}), On(W(e), W(t), n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && objectHasOwnProperty(w, e) && arrayPush(w[e], t);
	}, t.removeHook = function(e, t) {
		if (objectHasOwnProperty(w, e)) {
			if (t !== void 0) {
				let n = arrayLastIndexOf(w[e], t);
				return n === -1 ? void 0 : arraySplice(w[e], n, 1)[0];
			}
			return arrayPop(w[e]);
		}
	}, t.removeHooks = function(e) {
		objectHasOwnProperty(w, e) && (w[e] = []);
	}, t.removeAllHooks = function() {
		w = _createHooksMap();
	}, t;
}
var purify = createDOMPurify();
export { purify as t };
