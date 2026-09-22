var sides = [
	"top",
	"right",
	"bottom",
	"left"
], min = Math.min, max = Math.max, round = Math.round, floor = Math.floor, createCoords = (e) => ({
	x: e,
	y: e
}), oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function clamp(e, g, _) {
	return max(e, min(g, _));
}
function evaluate(e, m) {
	return typeof e == "function" ? e(m) : e;
}
function getSide(e) {
	return e.split("-")[0];
}
function getAlignment(e) {
	return e.split("-")[1];
}
function getOppositeAxis(e) {
	return e === "x" ? "y" : "x";
}
function getAxisLength(e) {
	return e === "y" ? "height" : "width";
}
function getSideAxis(e) {
	let m = e[0];
	return m === "t" || m === "b" ? "y" : "x";
}
function getAlignmentAxis(e) {
	return getOppositeAxis(getSideAxis(e));
}
function getAlignmentSides(e, m, h) {
	h === void 0 && (h = !1);
	let g = getAlignment(e), _ = getAlignmentAxis(e), v = getAxisLength(_), y = _ === "x" ? g === (h ? "end" : "start") ? "right" : "left" : g === "start" ? "bottom" : "top";
	return m.reference[v] > m.floating[v] && (y = getOppositePlacement(y)), [y, getOppositePlacement(y)];
}
function getExpandedPlacements(e) {
	let m = getOppositePlacement(e);
	return [
		getOppositeAlignmentPlacement(e),
		m,
		getOppositeAlignmentPlacement(m)
	];
}
function getOppositeAlignmentPlacement(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(e, m, h) {
	switch (e) {
		case "top":
		case "bottom": return h ? m ? rlPlacement : lrPlacement : m ? lrPlacement : rlPlacement;
		case "left":
		case "right": return m ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(e, m, h, g) {
	let _ = getAlignment(e), v = getSideList(getSide(e), h === "start", g);
	return _ && (v = v.map((e) => e + "-" + _), m && (v = v.concat(v.map(getOppositeAlignmentPlacement)))), v;
}
function getOppositePlacement(e) {
	let m = getSide(e);
	return oppositeSideMap[m] + e.slice(m.length);
}
function expandPaddingObject(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function getPaddingObject(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : expandPaddingObject(e);
}
function rectToClientRect(e) {
	let { x: m, y: h, width: g, height: _ } = e;
	return {
		width: g,
		height: _,
		top: h,
		left: m,
		right: m + g,
		bottom: h + _,
		x: m,
		y: h
	};
}
function computeCoordsFromPlacement(e, m, h) {
	let { reference: g, floating: _ } = e, v = getSideAxis(m), y = getAlignmentAxis(m), b = getAxisLength(y), x = getSide(m), w = v === "y", O = g.x + g.width / 2 - _.width / 2, k = g.y + g.height / 2 - _.height / 2, A = g[b] / 2 - _[b] / 2, j;
	switch (x) {
		case "top":
			j = {
				x: O,
				y: g.y - _.height
			};
			break;
		case "bottom":
			j = {
				x: O,
				y: g.y + g.height
			};
			break;
		case "right":
			j = {
				x: g.x + g.width,
				y: k
			};
			break;
		case "left":
			j = {
				x: g.x - _.width,
				y: k
			};
			break;
		default: j = {
			x: g.x,
			y: g.y
		};
	}
	switch (getAlignment(m)) {
		case "start":
			j[y] -= A * (h && w ? -1 : 1);
			break;
		case "end":
			j[y] += A * (h && w ? -1 : 1);
			break;
	}
	return j;
}
async function detectOverflow(e, m) {
	m === void 0 && (m = {});
	let { x: h, y: g, platform: _, rects: v, elements: y, strategy: b } = e, { boundary: S = "clippingAncestors", rootBoundary: C = "viewport", elementContext: w = "floating", altBoundary: T = !1, padding: E = 0 } = evaluate(m, e), D = getPaddingObject(E), O = y[T ? w === "floating" ? "reference" : "floating" : w], k = rectToClientRect(await _.getClippingRect({
		element: await (_.isElement == null ? void 0 : _.isElement(O)) ?? !0 ? O : O.contextElement || await (_.getDocumentElement == null ? void 0 : _.getDocumentElement(y.floating)),
		boundary: S,
		rootBoundary: C,
		strategy: b
	})), A = w === "floating" ? {
		x: h,
		y: g,
		width: v.floating.width,
		height: v.floating.height
	} : v.reference, j = await (_.getOffsetParent == null ? void 0 : _.getOffsetParent(y.floating)), M = await (_.isElement == null ? void 0 : _.isElement(j)) && await (_.getScale == null ? void 0 : _.getScale(j)) || {
		x: 1,
		y: 1
	}, N = rectToClientRect(_.convertOffsetParentRelativeRectToViewportRelativeRect ? await _.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: y,
		rect: A,
		offsetParent: j,
		strategy: b
	}) : A);
	return {
		top: (k.top - N.top + D.top) / M.y,
		bottom: (N.bottom - k.bottom + D.bottom) / M.y,
		left: (k.left - N.left + D.left) / M.x,
		right: (N.right - k.right + D.right) / M.x
	};
}
var MAX_RESET_COUNT = 50, computePosition = async (e, m, h) => {
	let { placement: g = "bottom", strategy: _ = "absolute", middleware: v = [], platform: y } = h, b = y.detectOverflow ? y : {
		...y,
		detectOverflow
	}, x = await (y.isRTL == null ? void 0 : y.isRTL(m)), S = await y.getElementRects({
		reference: e,
		floating: m,
		strategy: _
	}), { x: C, y: w } = computeCoordsFromPlacement(S, g, x), T = g, E = 0, D = {};
	for (let h = 0; h < v.length; h++) {
		let O = v[h];
		if (!O) continue;
		let { name: k, fn: A } = O, { x: j, y: M, data: N, reset: P } = await A({
			x: C,
			y: w,
			initialPlacement: g,
			placement: T,
			strategy: _,
			middlewareData: D,
			rects: S,
			platform: b,
			elements: {
				reference: e,
				floating: m
			}
		});
		C = j ?? C, w = M ?? w, D[k] = {
			...D[k],
			...N
		}, P && E < MAX_RESET_COUNT && (E++, typeof P == "object" && (P.placement && (T = P.placement), P.rects && (S = P.rects === !0 ? await y.getElementRects({
			reference: e,
			floating: m,
			strategy: _
		}) : P.rects), {x: C, y: w} = computeCoordsFromPlacement(S, T, x)), h = -1);
	}
	return {
		x: C,
		y: w,
		placement: T,
		strategy: _,
		middlewareData: D
	};
}, arrow = (e) => ({
	name: "arrow",
	options: e,
	async fn(h) {
		let { x: g, y: _, placement: v, rects: y, platform: S, elements: w, middlewareData: E } = h, { element: O, padding: k = 0 } = evaluate(e, h) || {};
		if (O == null) return {};
		let A = getPaddingObject(k), j = {
			x: g,
			y: _
		}, M = getAlignmentAxis(v), N = getAxisLength(M), P = await S.getDimensions(O), F = M === "y", I = F ? "top" : "left", L = F ? "bottom" : "right", R = F ? "clientHeight" : "clientWidth", B = y.reference[N] + y.reference[M] - j[M] - y.floating[N], V = j[M] - y.reference[M], H = await (S.getOffsetParent == null ? void 0 : S.getOffsetParent(O)), U = H ? H[R] : 0;
		(!U || !await (S.isElement == null ? void 0 : S.isElement(H))) && (U = w.floating[R] || y.floating[N]);
		let W = B / 2 - V / 2, G = U / 2 - P[N] / 2 - 1, K = min(A[I], G), q = min(A[L], G), J = K, Y = U - P[N] - q, X = U / 2 - P[N] / 2 + W, Z = clamp(J, X, Y), Q = !E.arrow && getAlignment(v) != null && X !== Z && y.reference[N] / 2 - (X < J ? K : q) - P[N] / 2 < 0, $ = Q ? X < J ? X - J : X - Y : 0;
		return {
			[M]: j[M] + $,
			data: {
				[M]: Z,
				centerOffset: X - Z - $,
				...Q && { alignmentOffset: $ }
			},
			reset: Q
		};
	}
}), flip = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(m) {
			var h;
			let { placement: g, middlewareData: _, rects: v, initialPlacement: y, platform: b, elements: C } = m, { mainAxis: w = !0, crossAxis: T = !0, fallbackPlacements: D, fallbackStrategy: A = "bestFit", fallbackAxisSideDirection: j = "none", flipAlignment: M = !0, ...N } = evaluate(e, m);
			if ((h = _.arrow) != null && h.alignmentOffset) return {};
			let P = getSide(g), F = getSideAxis(y), R = getSide(y) === y, z = await (b.isRTL == null ? void 0 : b.isRTL(C.floating)), B = D || (R || !M ? [getOppositePlacement(y)] : getExpandedPlacements(y)), V = j !== "none";
			!D && V && B.push(...getOppositeAxisPlacements(y, M, j, z));
			let H = [y, ...B], U = await b.detectOverflow(m, N), W = [], G = _.flip?.overflows || [];
			if (w && W.push(U[P]), T) {
				let e = getAlignmentSides(g, v, z);
				W.push(U[e[0]], U[e[1]]);
			}
			if (G = [...G, {
				placement: g,
				overflows: W
			}], !W.every((e) => e <= 0)) {
				let e = (_.flip?.index || 0) + 1, m = H[e];
				if (m && (!(T === "alignment" && F !== getSideAxis(m)) || G.every((e) => getSideAxis(e.placement) === F ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: G
					},
					reset: { placement: m }
				};
				let h = G.filter((e) => e.overflows[0] <= 0).sort((e, m) => e.overflows[1] - m.overflows[1])[0]?.placement;
				if (!h) switch (A) {
					case "bestFit": {
						let e = G.filter((e) => {
							if (V) {
								let m = getSideAxis(e.placement);
								return m === F || m === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, m) => e + m, 0)]).sort((e, m) => e[1] - m[1])[0]?.[0];
						e && (h = e);
						break;
					}
					case "initialPlacement":
						h = y;
						break;
				}
				if (g !== h) return { reset: { placement: h } };
			}
			return {};
		}
	};
};
function getSideOffsets(e, m) {
	return {
		top: e.top - m.height,
		right: e.right - m.width,
		bottom: e.bottom - m.height,
		left: e.left - m.width
	};
}
function isAnySideFullyClipped(m) {
	return sides.some((e) => m[e] >= 0);
}
var hide = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(m) {
			let { rects: h, platform: g } = m, { strategy: _ = "referenceHidden", ...v } = evaluate(e, m);
			switch (_) {
				case "referenceHidden": {
					let e = getSideOffsets(await g.detectOverflow(m, {
						...v,
						elementContext: "reference"
					}), h.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: isAnySideFullyClipped(e)
					} };
				}
				case "escaped": {
					let e = getSideOffsets(await g.detectOverflow(m, {
						...v,
						altBoundary: !0
					}), h.floating);
					return { data: {
						escapedOffsets: e,
						escaped: isAnySideFullyClipped(e)
					} };
				}
				default: return {};
			}
		}
	};
}, originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(e, m) {
	let { placement: h, platform: g, elements: _ } = e, v = await (g.isRTL == null ? void 0 : g.isRTL(_.floating)), y = getSide(h), b = getAlignment(h), w = getSideAxis(h) === "y", T = originSides.has(y) ? -1 : 1, D = v && w ? -1 : 1, O = evaluate(m, e), { mainAxis: k, crossAxis: A, alignmentAxis: j } = typeof O == "number" ? {
		mainAxis: O,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: O.mainAxis || 0,
		crossAxis: O.crossAxis || 0,
		alignmentAxis: O.alignmentAxis
	};
	return b && typeof j == "number" && (A = b === "end" ? j * -1 : j), w ? {
		x: A * D,
		y: k * T
	} : {
		x: k * T,
		y: A * D
	};
}
var offset = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(m) {
			var h;
			let { x: g, y: _, placement: v, middlewareData: y } = m, b = await convertValueToCoords(m, e);
			return v === y.offset?.placement && (h = y.arrow) != null && h.alignmentOffset ? {} : {
				x: g + b.x,
				y: _ + b.y,
				data: {
					...b,
					placement: v
				}
			};
		}
	};
}, shift = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(m) {
			let { x: h, y: g, placement: _, platform: v } = m, { mainAxis: y = !0, crossAxis: C = !1, limiter: T = { fn: (e) => {
				let { x: m, y: h } = e;
				return {
					x: m,
					y: h
				};
			} }, ...D } = evaluate(e, m), O = {
				x: h,
				y: g
			}, k = await v.detectOverflow(m, D), A = getSideAxis(getSide(_)), j = getOppositeAxis(A), M = O[j], N = O[A];
			if (y) {
				let e = j === "y" ? "top" : "left", m = j === "y" ? "bottom" : "right", h = M + k[e], g = M - k[m];
				M = clamp(h, M, g);
			}
			if (C) {
				let e = A === "y" ? "top" : "left", m = A === "y" ? "bottom" : "right", h = N + k[e], g = N - k[m];
				N = clamp(h, N, g);
			}
			let P = T.fn({
				...m,
				[j]: M,
				[A]: N
			});
			return {
				...P,
				data: {
					x: P.x - h,
					y: P.y - g,
					enabled: {
						[j]: y,
						[A]: C
					}
				}
			};
		}
	};
}, limitShift = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(m) {
			let { x: h, y: g, placement: _, rects: v, middlewareData: y } = m, { offset: b = 0, mainAxis: C = !0, crossAxis: T = !0 } = evaluate(e, m), D = {
				x: h,
				y: g
			}, O = getSideAxis(_), k = getOppositeAxis(O), A = D[k], j = D[O], M = evaluate(b, m), N = typeof M == "number" ? {
				mainAxis: M,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...M
			};
			if (C) {
				let e = k === "y" ? "height" : "width", m = v.reference[k] - v.floating[e] + N.mainAxis, h = v.reference[k] + v.reference[e] - N.mainAxis;
				A < m ? A = m : A > h && (A = h);
			}
			if (T) {
				let e = k === "y" ? "width" : "height", m = originSides.has(getSide(_)), h = v.reference[O] - v.floating[e] + (m && y.offset?.[O] || 0) + (m ? 0 : N.crossAxis), g = v.reference[O] + v.reference[e] + (m ? 0 : y.offset?.[O] || 0) - (m ? N.crossAxis : 0);
				j < h ? j = h : j > g && (j = g);
			}
			return {
				[k]: A,
				[O]: j
			};
		}
	};
}, size = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(g) {
			var _, v;
			let { placement: y, rects: b, platform: w, elements: T } = g, { apply: D = () => {}, ...O } = evaluate(e, g), k = await w.detectOverflow(g, O), A = getSide(y), j = getAlignment(y), M = getSideAxis(y) === "y", { width: N, height: P } = b.floating, F, I;
			A === "top" || A === "bottom" ? (F = A, I = j === (await (w.isRTL == null ? void 0 : w.isRTL(T.floating)) ? "start" : "end") ? "left" : "right") : (I = A, F = j === "end" ? "top" : "bottom");
			let L = P - k.top - k.bottom, R = N - k.left - k.right, z = min(P - k[F], L), B = min(N - k[I], R), V = !g.middlewareData.shift, H = z, U = B;
			if ((_ = g.middlewareData.shift) != null && _.enabled.x && (U = R), (v = g.middlewareData.shift) != null && v.enabled.y && (H = L), V && !j) {
				let e = max(k.left, 0), m = max(k.right, 0), g = max(k.top, 0), _ = max(k.bottom, 0);
				M ? U = N - 2 * (e !== 0 || m !== 0 ? e + m : max(k.left, k.right)) : H = P - 2 * (g !== 0 || _ !== 0 ? g + _ : max(k.top, k.bottom));
			}
			await D({
				...g,
				availableWidth: U,
				availableHeight: H
			});
			let W = await w.getDimensions(T.floating);
			return N !== W.width || P !== W.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function hasWindow() {
	return typeof window < "u";
}
function getNodeName(e) {
	return isNode(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function getWindow(e) {
	var m;
	return (e == null || (m = e.ownerDocument) == null ? void 0 : m.defaultView) || window;
}
function getDocumentElement(e) {
	return ((isNode(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function isNode(e) {
	return hasWindow() ? e instanceof Node || e instanceof getWindow(e).Node : !1;
}
function isElement(e) {
	return hasWindow() ? e instanceof Element || e instanceof getWindow(e).Element : !1;
}
function isHTMLElement(e) {
	return hasWindow() ? e instanceof HTMLElement || e instanceof getWindow(e).HTMLElement : !1;
}
function isShadowRoot(e) {
	return !hasWindow() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof getWindow(e).ShadowRoot;
}
function isOverflowElement(e) {
	let { overflow: m, overflowX: h, overflowY: g, display: _ } = getComputedStyle$1(e);
	return /auto|scroll|overlay|hidden|clip/.test(m + g + h) && _ !== "inline" && _ !== "contents";
}
function isTableElement(e) {
	return /^(table|td|th)$/.test(getNodeName(e));
}
function isTopLayer(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/, containRe = /paint|layout|strict|content/, isNotNone = (e) => !!e && e !== "none", isWebKitValue;
function isContainingBlock(e) {
	let m = isElement(e) ? getComputedStyle$1(e) : e;
	return isNotNone(m.transform) || isNotNone(m.translate) || isNotNone(m.scale) || isNotNone(m.rotate) || isNotNone(m.perspective) || !isWebKit() && (isNotNone(m.backdropFilter) || isNotNone(m.filter)) || willChangeRe.test(m.willChange || "") || containRe.test(m.contain || "");
}
function getContainingBlock(e) {
	let m = getParentNode(e);
	for (; isHTMLElement(m) && !isLastTraversableNode(m);) {
		if (isContainingBlock(m)) return m;
		if (isTopLayer(m)) return null;
		m = getParentNode(m);
	}
	return null;
}
function isWebKit() {
	return isWebKitValue ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), isWebKitValue;
}
function isLastTraversableNode(e) {
	return /^(html|body|#document)$/.test(getNodeName(e));
}
function getComputedStyle$1(e) {
	return getWindow(e).getComputedStyle(e);
}
function getNodeScroll(e) {
	return isElement(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function getParentNode(e) {
	if (getNodeName(e) === "html") return e;
	let m = e.assignedSlot || e.parentNode || isShadowRoot(e) && e.host || getDocumentElement(e);
	return isShadowRoot(m) ? m.host : m;
}
function getNearestOverflowAncestor(e) {
	let m = getParentNode(e);
	return isLastTraversableNode(m) ? e.ownerDocument ? e.ownerDocument.body : e.body : isHTMLElement(m) && isOverflowElement(m) ? m : getNearestOverflowAncestor(m);
}
function getOverflowAncestors(e, m, h) {
	m === void 0 && (m = []), h === void 0 && (h = !0);
	let g = getNearestOverflowAncestor(e), _ = g === e.ownerDocument?.body, v = getWindow(g);
	if (_) {
		let e = getFrameElement(v);
		return m.concat(v, v.visualViewport || [], isOverflowElement(g) ? g : [], e && h ? getOverflowAncestors(e) : []);
	} else return m.concat(g, getOverflowAncestors(g, [], h));
}
function getFrameElement(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function getCssDimensions(e) {
	let m = getComputedStyle$1(e), h = parseFloat(m.width) || 0, _ = parseFloat(m.height) || 0, v = isHTMLElement(e), y = v ? e.offsetWidth : h, b = v ? e.offsetHeight : _, x = round(h) !== y || round(_) !== b;
	return x && (h = y, _ = b), {
		width: h,
		height: _,
		$: x
	};
}
function unwrapElement(e) {
	return isElement(e) ? e : e.contextElement;
}
function getScale(e) {
	let m = unwrapElement(e);
	if (!isHTMLElement(m)) return createCoords(1);
	let h = m.getBoundingClientRect(), { width: _, height: y, $: b } = getCssDimensions(m), x = (b ? round(h.width) : h.width) / _, S = (b ? round(h.height) : h.height) / y;
	return (!x || !Number.isFinite(x)) && (x = 1), (!S || !Number.isFinite(S)) && (S = 1), {
		x,
		y: S
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(e) {
	let m = getWindow(e);
	return !isWebKit() || !m.visualViewport ? noOffsets : {
		x: m.visualViewport.offsetLeft,
		y: m.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(e, m, h) {
	return m === void 0 && (m = !1), !h || m && h !== getWindow(e) ? !1 : m;
}
function getBoundingClientRect(e, m, h, g) {
	m === void 0 && (m = !1), h === void 0 && (h = !1);
	let _ = e.getBoundingClientRect(), y = unwrapElement(e), b = createCoords(1);
	m && (g ? isElement(g) && (b = getScale(g)) : b = getScale(e));
	let x = shouldAddVisualOffsets(y, h, g) ? getVisualOffsets(y) : createCoords(0), S = (_.left + x.x) / b.x, C = (_.top + x.y) / b.y, w = _.width / b.x, T = _.height / b.y;
	if (y) {
		let e = getWindow(y), m = g && isElement(g) ? getWindow(g) : g, h = e, _ = getFrameElement(h);
		for (; _ && g && m !== h;) {
			let e = getScale(_), m = _.getBoundingClientRect(), g = getComputedStyle$1(_), v = m.left + (_.clientLeft + parseFloat(g.paddingLeft)) * e.x, y = m.top + (_.clientTop + parseFloat(g.paddingTop)) * e.y;
			S *= e.x, C *= e.y, w *= e.x, T *= e.y, S += v, C += y, h = getWindow(_), _ = getFrameElement(h);
		}
	}
	return rectToClientRect({
		width: w,
		height: T,
		x: S,
		y: C
	});
}
function getWindowScrollBarX(e, m) {
	let h = getNodeScroll(e).scrollLeft;
	return m ? m.left + h : getBoundingClientRect(getDocumentElement(e)).left + h;
}
function getHTMLOffset(e, m) {
	let h = e.getBoundingClientRect();
	return {
		x: h.left + m.scrollLeft - getWindowScrollBarX(e, h),
		y: h.top + m.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(e) {
	let { elements: m, rect: h, offsetParent: g, strategy: _ } = e, y = _ === "fixed", b = getDocumentElement(g), x = m ? isTopLayer(m.floating) : !1;
	if (g === b || x && y) return h;
	let S = {
		scrollLeft: 0,
		scrollTop: 0
	}, C = createCoords(1), w = createCoords(0), T = isHTMLElement(g);
	if ((T || !T && !y) && ((getNodeName(g) !== "body" || isOverflowElement(b)) && (S = getNodeScroll(g)), T)) {
		let e = getBoundingClientRect(g);
		C = getScale(g), w.x = e.x + g.clientLeft, w.y = e.y + g.clientTop;
	}
	let E = b && !T && !y ? getHTMLOffset(b, S) : createCoords(0);
	return {
		width: h.width * C.x,
		height: h.height * C.y,
		x: h.x * C.x - S.scrollLeft * C.x + w.x + E.x,
		y: h.y * C.y - S.scrollTop * C.y + w.y + E.y
	};
}
function getClientRects(e) {
	return Array.from(e.getClientRects());
}
function getDocumentRect(e) {
	let m = getDocumentElement(e), g = getNodeScroll(e), _ = e.ownerDocument.body, v = max(m.scrollWidth, m.clientWidth, _.scrollWidth, _.clientWidth), y = max(m.scrollHeight, m.clientHeight, _.scrollHeight, _.clientHeight), b = -g.scrollLeft + getWindowScrollBarX(e), x = -g.scrollTop;
	return getComputedStyle$1(_).direction === "rtl" && (b += max(m.clientWidth, _.clientWidth) - v), {
		width: v,
		height: y,
		x: b,
		y: x
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(e, m) {
	let h = getWindow(e), g = getDocumentElement(e), _ = h.visualViewport, v = g.clientWidth, y = g.clientHeight, b = 0, x = 0;
	if (_) {
		v = _.width, y = _.height;
		let e = isWebKit();
		(!e || e && m === "fixed") && (b = _.offsetLeft, x = _.offsetTop);
	}
	let S = getWindowScrollBarX(g);
	if (S <= 0) {
		let e = g.ownerDocument, m = e.body, h = getComputedStyle(m), _ = e.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, y = Math.abs(g.clientWidth - m.clientWidth - _);
		y <= SCROLLBAR_MAX && (v -= y);
	} else S <= SCROLLBAR_MAX && (v += S);
	return {
		width: v,
		height: y,
		x: b,
		y: x
	};
}
function getInnerBoundingClientRect(e, m) {
	let h = getBoundingClientRect(e, !0, m === "fixed"), g = h.top + e.clientTop, _ = h.left + e.clientLeft, y = isHTMLElement(e) ? getScale(e) : createCoords(1);
	return {
		width: e.clientWidth * y.x,
		height: e.clientHeight * y.y,
		x: _ * y.x,
		y: g * y.y
	};
}
function getClientRectFromClippingAncestor(e, m, h) {
	let g;
	if (m === "viewport") g = getViewportRect(e, h);
	else if (m === "document") g = getDocumentRect(getDocumentElement(e));
	else if (isElement(m)) g = getInnerBoundingClientRect(m, h);
	else {
		let h = getVisualOffsets(e);
		g = {
			x: m.x - h.x,
			y: m.y - h.y,
			width: m.width,
			height: m.height
		};
	}
	return rectToClientRect(g);
}
function hasFixedPositionAncestor(e, m) {
	let h = getParentNode(e);
	return h === m || !isElement(h) || isLastTraversableNode(h) ? !1 : getComputedStyle$1(h).position === "fixed" || hasFixedPositionAncestor(h, m);
}
function getClippingElementAncestors(e, m) {
	let h = m.get(e);
	if (h) return h;
	let g = getOverflowAncestors(e, [], !1).filter((e) => isElement(e) && getNodeName(e) !== "body"), _ = null, v = getComputedStyle$1(e).position === "fixed", y = v ? getParentNode(e) : e;
	for (; isElement(y) && !isLastTraversableNode(y);) {
		let m = getComputedStyle$1(y), h = isContainingBlock(y);
		!h && m.position === "fixed" && (_ = null), (v ? !h && !_ : !h && m.position === "static" && _ && (_.position === "absolute" || _.position === "fixed") || isOverflowElement(y) && !h && hasFixedPositionAncestor(e, y)) ? g = g.filter((e) => e !== y) : _ = m, y = getParentNode(y);
	}
	return m.set(e, g), g;
}
function getClippingRect(e) {
	let { element: g, boundary: _, rootBoundary: v, strategy: y } = e, b = [..._ === "clippingAncestors" ? isTopLayer(g) ? [] : getClippingElementAncestors(g, this._c) : [].concat(_), v], x = getClientRectFromClippingAncestor(g, b[0], y), S = x.top, C = x.right, w = x.bottom, T = x.left;
	for (let e = 1; e < b.length; e++) {
		let _ = getClientRectFromClippingAncestor(g, b[e], y);
		S = max(_.top, S), C = min(_.right, C), w = min(_.bottom, w), T = max(_.left, T);
	}
	return {
		width: C - T,
		height: w - S,
		x: T,
		y: S
	};
}
function getDimensions(e) {
	let { width: m, height: h } = getCssDimensions(e);
	return {
		width: m,
		height: h
	};
}
function getRectRelativeToOffsetParent(e, m, h) {
	let g = isHTMLElement(m), _ = getDocumentElement(m), y = h === "fixed", b = getBoundingClientRect(e, !0, y, m), x = {
		scrollLeft: 0,
		scrollTop: 0
	}, S = createCoords(0);
	function C() {
		S.x = getWindowScrollBarX(_);
	}
	if (g || !g && !y) if ((getNodeName(m) !== "body" || isOverflowElement(_)) && (x = getNodeScroll(m)), g) {
		let e = getBoundingClientRect(m, !0, y, m);
		S.x = e.x + m.clientLeft, S.y = e.y + m.clientTop;
	} else _ && C();
	y && !g && _ && C();
	let w = _ && !g && !y ? getHTMLOffset(_, x) : createCoords(0);
	return {
		x: b.left + x.scrollLeft - S.x - w.x,
		y: b.top + x.scrollTop - S.y - w.y,
		width: b.width,
		height: b.height
	};
}
function isStaticPositioned(e) {
	return getComputedStyle$1(e).position === "static";
}
function getTrueOffsetParent(e, m) {
	if (!isHTMLElement(e) || getComputedStyle$1(e).position === "fixed") return null;
	if (m) return m(e);
	let h = e.offsetParent;
	return getDocumentElement(e) === h && (h = h.ownerDocument.body), h;
}
function getOffsetParent(e, m) {
	let h = getWindow(e);
	if (isTopLayer(e)) return h;
	if (!isHTMLElement(e)) {
		let m = getParentNode(e);
		for (; m && !isLastTraversableNode(m);) {
			if (isElement(m) && !isStaticPositioned(m)) return m;
			m = getParentNode(m);
		}
		return h;
	}
	let g = getTrueOffsetParent(e, m);
	for (; g && isTableElement(g) && isStaticPositioned(g);) g = getTrueOffsetParent(g, m);
	return g && isLastTraversableNode(g) && isStaticPositioned(g) && !isContainingBlock(g) ? h : g || getContainingBlock(e) || h;
}
var getElementRects = async function(e) {
	let m = this.getOffsetParent || getOffsetParent, h = this.getDimensions, g = await h(e.floating);
	return {
		reference: getRectRelativeToOffsetParent(e.reference, await m(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: g.width,
			height: g.height
		}
	};
};
function isRTL(e) {
	return getComputedStyle$1(e).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(e, m) {
	return e.x === m.x && e.y === m.y && e.width === m.width && e.height === m.height;
}
function observeMove(e, g) {
	let v = null, y, b = getDocumentElement(e);
	function x() {
		var e;
		clearTimeout(y), (e = v) == null || e.disconnect(), v = null;
	}
	function S(C, w) {
		C === void 0 && (C = !1), w === void 0 && (w = 1), x();
		let T = e.getBoundingClientRect(), { left: E, top: D, width: O, height: k } = T;
		if (C || g(), !O || !k) return;
		let A = floor(D), j = floor(b.clientWidth - (E + O)), M = floor(b.clientHeight - (D + k)), N = floor(E), P = {
			rootMargin: -A + "px " + -j + "px " + -M + "px " + -N + "px",
			threshold: max(0, min(1, w)) || 1
		}, F = !0;
		function I(m) {
			let h = m[0].intersectionRatio;
			if (h !== w) {
				if (!F) return S();
				h ? S(!1, h) : y = setTimeout(() => {
					S(!1, 1e-7);
				}, 1e3);
			}
			h === 1 && !rectsAreEqual(T, e.getBoundingClientRect()) && S(), F = !1;
		}
		try {
			v = new IntersectionObserver(I, {
				...P,
				root: b.ownerDocument
			});
		} catch {
			v = new IntersectionObserver(I, P);
		}
		v.observe(e);
	}
	return S(!0), x;
}
function autoUpdate(e, m, h, g) {
	g === void 0 && (g = {});
	let { ancestorScroll: _ = !0, ancestorResize: v = !0, elementResize: y = typeof ResizeObserver == "function", layoutShift: b = typeof IntersectionObserver == "function", animationFrame: x = !1 } = g, S = unwrapElement(e), C = _ || v ? [...S ? getOverflowAncestors(S) : [], ...m ? getOverflowAncestors(m) : []] : [];
	C.forEach((e) => {
		_ && e.addEventListener("scroll", h, { passive: !0 }), v && e.addEventListener("resize", h);
	});
	let w = S && b ? observeMove(S, h) : null, T = -1, E = null;
	y && (E = new ResizeObserver((e) => {
		let [g] = e;
		g && g.target === S && E && m && (E.unobserve(m), cancelAnimationFrame(T), T = requestAnimationFrame(() => {
			var e;
			(e = E) == null || e.observe(m);
		})), h();
	}), S && !x && E.observe(S), m && E.observe(m));
	let D, O = x ? getBoundingClientRect(e) : null;
	x && k();
	function k() {
		let m = getBoundingClientRect(e);
		O && !rectsAreEqual(O, m) && h(), O = m, D = requestAnimationFrame(k);
	}
	return h(), () => {
		var e;
		C.forEach((e) => {
			_ && e.removeEventListener("scroll", h), v && e.removeEventListener("resize", h);
		}), w?.(), (e = E) == null || e.disconnect(), E = null, x && cancelAnimationFrame(D);
	};
}
var offset$1 = offset, shift$1 = shift, flip$1 = flip, size$1 = size, hide$1 = hide, arrow$1 = arrow, limitShift$1 = limitShift, computePosition$1 = (e, m, h) => {
	let g = /* @__PURE__ */ new Map(), _ = {
		platform,
		...h
	}, v = {
		..._.platform,
		_c: g
	};
	return computePosition(e, m, {
		..._,
		platform: v
	});
};
export { hide$1 as a, shift$1 as c, flip$1 as i, size$1 as l, autoUpdate as n, limitShift$1 as o, computePosition$1 as r, offset$1 as s, arrow$1 as t };
