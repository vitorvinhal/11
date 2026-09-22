import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { c as useComposedRefs, n as Button, r as cn, t as useMountedRef, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as Activity } from "./activity-CyJyRYHq.js";
import { in as CircleDot } from "./worktree-activation-u-wSAPlP.js";
import { t as Bell } from "./bell-D62apZuF.js";
import { t as Bot } from "./bot-D4STJTH1.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as Info } from "./info-CS7SIWrO.js";
import { t as Keyboard } from "./keyboard-CGp7JiNG.js";
import { t as Settings } from "./settings-D0EstZRB.js";
import { t as useAppStore, xm as basename } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as Upload } from "./upload-CERi9lcE.js";
import { t as Zap } from "./zap-BQWuXCvY.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { t as createCollection } from "./dist-BmoCFUG3.js";
import { r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-L_K9-Scr.js";
import { t as useDirection } from "./dist-DqysERl8.js";
import { t as usePrevious } from "./dist-DKfCV6tt.js";
import { t as useSize } from "./dist-CFMQL9Z5.js";
import { t as Checkbox } from "./checkbox-Daq-_tqE.js";
import { t as Label } from "./label-CA70r2No.js";
import { t as clamp } from "./dist-P-hJgGS4.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, o as SelectSeparator, s as SelectTrigger, t as Select } from "./select-X9Gmv_Pu.js";
import { t as Switch } from "./switch-iHg-WoiR.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { t as createLocalizedCatalog } from "./localized-catalog-Dsz6wk5E.js";
import { n as getAgentCatalog, t as AgentIcon } from "./agent-catalog-Cgr0_vcs.js";
var AudioWaveform = createLucideIcon("audio-waveform", [["path", {
	d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
	key: "57tc96"
}]]), BellRing = createLucideIcon("bell-ring", [
	["path", {
		d: "M10.268 21a2 2 0 0 0 3.464 0",
		key: "vwvbt9"
	}],
	["path", {
		d: "M22 8c0-2.3-.8-4.3-2-6",
		key: "5bb3ad"
	}],
	["path", {
		d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
		key: "11g9vi"
	}],
	["path", {
		d: "M4 2C2.8 3.7 2 5.7 2 8",
		key: "tap9e0"
	}]
]), FileHeadphone = createLucideIcon("file-headphone", [
	["path", {
		d: "M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343",
		key: "1vfytu"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0",
		key: "1etmh7"
	}]
]), MousePointer2 = createLucideIcon("mouse-pointer-2", [["path", {
	d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
	key: "edeuup"
}]]), Radar = createLucideIcon("radar", [
	["path", {
		d: "M19.07 4.93A10 10 0 0 0 6.99 3.34",
		key: "z3du51"
	}],
	["path", {
		d: "M4 6h.01",
		key: "oypzma"
	}],
	["path", {
		d: "M2.29 9.62A10 10 0 1 0 21.31 8.35",
		key: "qzzz0"
	}],
	["path", {
		d: "M16.24 7.76A6 6 0 1 0 8.23 16.67",
		key: "1yjesh"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M17.99 11.66A6 6 0 0 1 15.77 16.67",
		key: "1u2y91"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}],
	["path", {
		d: "m13.41 10.59 5.66-5.66",
		key: "mhq4k0"
	}]
]), Radio = createLucideIcon("radio", [
	["path", {
		d: "M16.247 7.761a6 6 0 0 1 0 8.478",
		key: "1fwjs5"
	}],
	["path", {
		d: "M19.075 4.933a10 10 0 0 1 0 14.134",
		key: "ehdyv1"
	}],
	["path", {
		d: "M4.925 19.067a10 10 0 0 1 0-14.134",
		key: "1q22gi"
	}],
	["path", {
		d: "M7.753 16.239a6 6 0 0 1 0-8.478",
		key: "r2q7qm"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]), Siren = createLucideIcon("siren", [
	["path", {
		d: "M7 18v-6a5 5 0 1 1 10 0v6",
		key: "pcx96s"
	}],
	["path", {
		d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",
		key: "1b4s83"
	}],
	["path", {
		d: "M21 12h1",
		key: "jtio3y"
	}],
	["path", {
		d: "M18.5 4.5 18 5",
		key: "g5sp9y"
	}],
	["path", {
		d: "M2 12h1",
		key: "1uaihz"
	}],
	["path", {
		d: "M12 2v1",
		key: "11qlp1"
	}],
	["path", {
		d: "m4.929 4.929.707.707",
		key: "1i51kw"
	}],
	["path", {
		d: "M12 12v6",
		key: "3ahymv"
	}]
]), Volume2 = createLucideIcon("volume-2", [
	["path", {
		d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
		key: "uqj9uw"
	}],
	["path", {
		d: "M16 9a5 5 0 0 1 0 6",
		key: "1q6k2b"
	}],
	["path", {
		d: "M19.364 18.364a9 9 0 0 0 0-12.728",
		key: "ijwkga"
	}]
]), Volume1 = createLucideIcon("volume-1", [["path", {
	d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
	key: "uqj9uw"
}], ["path", {
	d: "M16 9a5 5 0 0 1 0 6",
	key: "1q6k2b"
}]]), import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), NAME = "Separator", DEFAULT_ORIENTATION = "horizontal", ORIENTATIONS = ["horizontal", "vertical"], Separator$1 = import_react.forwardRef((e, C) => {
	let { decorative: w, orientation: T = DEFAULT_ORIENTATION, ...E } = e, D = isValidOrientation(T) ? T : DEFAULT_ORIENTATION, O = D === "vertical" ? D : void 0, k = w ? { role: "none" } : {
		"aria-orientation": O,
		role: "separator"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"data-orientation": D,
		...k,
		...E,
		ref: C
	});
});
Separator$1.displayName = NAME;
function isValidOrientation(e) {
	return ORIENTATIONS.includes(e);
}
var Root = Separator$1, PAGE_KEYS = ["PageUp", "PageDown"], ARROW_KEYS = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], BACK_KEYS = {
	"from-left": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-right": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowRight"
	],
	"from-bottom": [
		"Home",
		"PageDown",
		"ArrowDown",
		"ArrowLeft"
	],
	"from-top": [
		"Home",
		"PageDown",
		"ArrowUp",
		"ArrowLeft"
	]
}, SLIDER_NAME = "Slider", [Collection, useCollection, createCollectionScope] = createCollection(SLIDER_NAME), [createSliderContext, createSliderScope] = createContextScope(SLIDER_NAME, [createCollectionScope]), [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME), Slider$1 = import_react.forwardRef((e, C) => {
	let { name: w, min: E = 0, max: D = 100, step: O = 1, orientation: k = "horizontal", disabled: A = !1, minStepsBetweenThumbs: j = 0, defaultValue: M = [E], value: N, onValueChange: P = () => {}, onValueCommit: F = () => {}, inverted: I = !1, form: L, ...R } = e, z = import_react.useRef(/* @__PURE__ */ new Set()), B = import_react.useRef(0), V = import_react.useRef(!1), H = k === "horizontal" ? SliderHorizontal : SliderVertical, [U, W] = import_react.useState(null), G = useComposedRefs(C, W), [K = [], q] = useControllableState({
		prop: N,
		defaultProp: M,
		onChange: (e) => {
			[...z.current][B.current]?.focus({
				preventScroll: !0,
				focusVisible: V.current
			}), V.current = !1, P(e);
		}
	}), J = import_react.useRef(K), Y = import_react.useRef(K);
	import_react.useEffect(() => {
		let e = L ? U?.ownerDocument.getElementById(L) : U?.closest("form");
		if (e instanceof HTMLFormElement) {
			let C = () => q(Y.current);
			return e.addEventListener("reset", C), () => e.removeEventListener("reset", C);
		}
	}, [
		U,
		L,
		q
	]);
	function X(e) {
		$(e, getClosestValueIndex(K, e));
	}
	function Z(e) {
		$(e, B.current);
	}
	function Q() {
		let e = J.current[B.current];
		K[B.current] !== e && F(K);
	}
	function $(e, C, { commit: w } = { commit: !1 }) {
		let T = getDecimalCount(O), k = clamp(roundValue(Math.round((e - E) / O) * O + E, T), [E, D]);
		q((e = []) => {
			let T = getNextSortedValues(e, k, C);
			if (hasMinStepsBetweenValues(T, j * O)) {
				B.current = T.indexOf(k);
				let C = String(T) !== String(e);
				return C && w && F(T), C ? T : e;
			} else return e;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderProvider, {
		scope: e.__scopeSlider,
		name: w,
		disabled: A,
		min: E,
		max: D,
		valueIndexToChangeRef: B,
		thumbs: z.current,
		values: K,
		orientation: k,
		form: L,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
			scope: e.__scopeSlider,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
				scope: e.__scopeSlider,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(H, {
					"aria-disabled": A,
					"data-disabled": A ? "" : void 0,
					...R,
					ref: G,
					onPointerDown: composeEventHandlers(R.onPointerDown, () => {
						A || (J.current = K, V.current = !1);
					}),
					min: E,
					max: D,
					inverted: I,
					onSlideStart: A ? void 0 : X,
					onSlideMove: A ? void 0 : Z,
					onSlideEnd: A ? void 0 : Q,
					onHomeKeyDown: () => {
						A || (V.current = !0, $(E, 0, { commit: !0 }));
					},
					onEndKeyDown: () => {
						A || (V.current = !0, $(D, K.length - 1, { commit: !0 }));
					},
					onStepKeyDown: ({ event: e, direction: C }) => {
						if (!A) {
							V.current = !0;
							let w = PAGE_KEYS.includes(e.key) || e.shiftKey && ARROW_KEYS.includes(e.key) ? 10 : 1, T = B.current, D = K[T];
							$(getNextStepValue(D, {
								min: E,
								step: O,
								direction: C,
								multiplier: w
							}), T, { commit: !0 });
						}
					}
				})
			})
		})
	});
});
Slider$1.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
	startEdge: "left",
	endEdge: "right",
	size: "width",
	direction: 1
}), SliderHorizontal = import_react.forwardRef((e, C) => {
	let { min: w, max: E, dir: D, inverted: O, onSlideStart: k, onSlideMove: A, onSlideEnd: j, onStepKeyDown: M, ...N } = e, [P, F] = import_react.useState(null), I = useComposedRefs(C, F), L = import_react.useRef(void 0), R = useDirection(D), z = R === "ltr", B = z && !O || !z && O;
	function V(e) {
		let C = L.current || P.getBoundingClientRect(), T = linearScale([0, C.width], B ? [w, E] : [E, w]);
		return L.current = C, T(e - C.left);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientationProvider, {
		scope: e.__scopeSlider,
		startEdge: B ? "left" : "right",
		endEdge: B ? "right" : "left",
		direction: B ? 1 : -1,
		size: "width",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderImpl, {
			dir: R,
			"data-orientation": "horizontal",
			...N,
			ref: I,
			style: {
				...N.style,
				"--radix-slider-thumb-transform": "translateX(-50%)"
			},
			onSlideStart: (e) => {
				let C = V(e.clientX);
				k?.(C);
			},
			onSlideMove: (e) => {
				let C = V(e.clientX);
				A?.(C);
			},
			onSlideEnd: () => {
				L.current = void 0, j?.();
			},
			onStepKeyDown: (e) => {
				let C = BACK_KEYS[B ? "from-left" : "from-right"].includes(e.key);
				M?.({
					event: e,
					direction: C ? -1 : 1
				});
			}
		})
	});
}), SliderVertical = import_react.forwardRef((e, C) => {
	let { min: w, max: E, inverted: D, onSlideStart: O, onSlideMove: k, onSlideEnd: A, onStepKeyDown: j, ...M } = e, N = import_react.useRef(null), P = useComposedRefs(C, N), F = import_react.useRef(void 0), I = !D;
	function L(e) {
		let C = F.current || N.current.getBoundingClientRect(), T = linearScale([0, C.height], I ? [E, w] : [w, E]);
		return F.current = C, T(e - C.top);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderOrientationProvider, {
		scope: e.__scopeSlider,
		startEdge: I ? "bottom" : "top",
		endEdge: I ? "top" : "bottom",
		size: "height",
		direction: I ? 1 : -1,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderImpl, {
			"data-orientation": "vertical",
			...M,
			ref: P,
			style: {
				...M.style,
				"--radix-slider-thumb-transform": "translateY(50%)"
			},
			onSlideStart: (e) => {
				let C = L(e.clientY);
				O?.(C);
			},
			onSlideMove: (e) => {
				let C = L(e.clientY);
				k?.(C);
			},
			onSlideEnd: () => {
				F.current = void 0, A?.();
			},
			onStepKeyDown: (e) => {
				let C = BACK_KEYS[I ? "from-bottom" : "from-top"].includes(e.key);
				j?.({
					event: e,
					direction: C ? -1 : 1
				});
			}
		})
	});
}), SliderImpl = import_react.forwardRef((e, C) => {
	let { __scopeSlider: w, onSlideStart: T, onSlideMove: E, onSlideEnd: D, onHomeKeyDown: O, onEndKeyDown: k, onStepKeyDown: A, ...j } = e, M = useSliderContext(SLIDER_NAME, w);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...j,
		ref: C,
		onKeyDown: composeEventHandlers(e.onKeyDown, (e) => {
			e.key === "Home" ? (O(e), e.preventDefault()) : e.key === "End" ? (k(e), e.preventDefault()) : PAGE_KEYS.concat(ARROW_KEYS).includes(e.key) && (A(e), e.preventDefault());
		}),
		onPointerDown: composeEventHandlers(e.onPointerDown, (e) => {
			let C = e.target;
			C.setPointerCapture(e.pointerId), e.preventDefault(), M.thumbs.has(C) ? C.focus({
				preventScroll: !0,
				focusVisible: !1
			}) : T(e);
		}),
		onPointerMove: composeEventHandlers(e.onPointerMove, (e) => {
			e.target.hasPointerCapture(e.pointerId) && E(e);
		}),
		onPointerUp: composeEventHandlers(e.onPointerUp, (e) => {
			let C = e.target;
			C.hasPointerCapture(e.pointerId) && (C.releasePointerCapture(e.pointerId), D(e));
		})
	});
}), TRACK_NAME = "SliderTrack", SliderTrack = import_react.forwardRef((e, C) => {
	let { __scopeSlider: w, ...T } = e, E = useSliderContext(TRACK_NAME, w);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-disabled": E.disabled ? "" : void 0,
		"data-orientation": E.orientation,
		...T,
		ref: C
	});
});
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange", SliderRange = import_react.forwardRef((e, C) => {
	let { __scopeSlider: w, ...E } = e, D = useSliderContext(RANGE_NAME, w), O = useSliderOrientationContext(RANGE_NAME, w), k = useComposedRefs(C, import_react.useRef(null)), A = D.values.length, j = D.values.map((e) => convertValueToPercentage(e, D.min, D.max)), M = A > 1 ? Math.min(...j) : 0, N = 100 - Math.max(...j);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-orientation": D.orientation,
		"data-disabled": D.disabled ? "" : void 0,
		...E,
		ref: k,
		style: {
			...e.style,
			[O.startEdge]: M + "%",
			[O.endEdge]: N + "%"
		}
	});
});
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb", [SliderThumbContextProvider, useSliderThumbContext] = createSliderContext(THUMB_NAME), THUMB_PROVIDER_NAME = "SliderThumbProvider";
function SliderThumbProvider(e) {
	let { __scopeSlider: C, name: w, children: T, internal_do_not_use_render: E } = e, D = useSliderContext(THUMB_PROVIDER_NAME, C), O = useCollection(C), [k, A] = import_react.useState(null), j = import_react.useMemo(() => k ? O().findIndex((e) => e.ref.current === k) : -1, [O, k]), M = useSize(k), N = k ? !!D.form || !!k.closest("form") : !0, P = D.values[j], F = w ?? (D.name ? D.name + (D.values.length > 1 ? "[]" : "") : void 0), I = P === void 0 ? 0 : convertValueToPercentage(P, D.min, D.max);
	import_react.useEffect(() => {
		if (k) return D.thumbs.add(k), () => {
			D.thumbs.delete(k);
		};
	}, [k, D.thumbs]);
	let L = {
		value: P,
		name: F,
		form: D.form,
		isFormControl: N,
		index: j,
		thumb: k,
		onThumbChange: A,
		percent: I,
		size: M
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbContextProvider, {
		scope: C,
		...L,
		children: isFunction(E) ? E(L) : T
	});
}
SliderThumbProvider.displayName = THUMB_PROVIDER_NAME;
var THUMB_TRIGGER_NAME = "SliderThumbTrigger", SliderThumbTrigger = import_react.forwardRef((e, C) => {
	let { __scopeSlider: w, ...E } = e, D = useSliderContext(THUMB_TRIGGER_NAME, w), O = useSliderOrientationContext(THUMB_TRIGGER_NAME, w), { index: k, value: A, percent: j, size: M, onThumbChange: N } = useSliderThumbContext(THUMB_TRIGGER_NAME, w), P = useComposedRefs(C, N), F = getLabel(k, D.values.length), I = M?.[O.size], L = I ? getThumbInBoundsOffset(I, j, O.direction) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		style: {
			transform: "var(--radix-slider-thumb-transform)",
			position: "absolute",
			[O.startEdge]: `calc(${j}% + ${L}px)`
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
			scope: w,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
				role: "slider",
				"aria-label": e["aria-label"] || F,
				"aria-valuemin": D.min,
				"aria-valuenow": A,
				"aria-valuemax": D.max,
				"aria-orientation": D.orientation,
				"data-orientation": D.orientation,
				"data-disabled": D.disabled ? "" : void 0,
				tabIndex: D.disabled ? void 0 : 0,
				...E,
				ref: P,
				style: A === void 0 ? { display: "none" } : e.style,
				onFocus: composeEventHandlers(e.onFocus, () => {
					D.valueIndexToChangeRef.current = k;
				})
			})
		})
	});
});
SliderThumbTrigger.displayName = THUMB_TRIGGER_NAME;
var SliderThumb = import_react.forwardRef((e, C) => {
	let { __scopeSlider: w, name: T, ...E } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbProvider, {
		__scopeSlider: w,
		name: T,
		internal_do_not_use_render: ({ index: e, isFormControl: T }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumbTrigger, {
			...E,
			ref: C,
			__scopeSlider: w
		}), T ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderBubbleInput, { __scopeSlider: w }, e) : null] })
	});
});
SliderThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SliderBubbleInput", SliderBubbleInput = import_react.forwardRef(({ __scopeSlider: e, ...C }, w) => {
	let { value: E, name: D, form: O } = useSliderThumbContext(BUBBLE_INPUT_NAME, e), k = import_react.useRef(null), A = useComposedRefs(k, w), j = usePrevious(E);
	return import_react.useEffect(() => {
		let e = k.current;
		if (!e) return;
		let C = window.HTMLInputElement.prototype, w = Object.getOwnPropertyDescriptor(C, "value").set;
		if (j !== E && w) {
			let C = new Event("input", { bubbles: !0 });
			w.call(e, E), e.dispatchEvent(C);
		}
	}, [j, E]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		style: { display: "none" },
		name: D,
		form: O,
		...C,
		ref: A,
		defaultValue: E
	});
});
SliderBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getNextSortedValues(e = [], C, w) {
	let T = [...e];
	return T[w] = C, T.sort((e, C) => e - C);
}
function convertValueToPercentage(e, C, w) {
	return clamp(100 / (w - C) * (e - C), [0, 100]);
}
function getLabel(e, C) {
	if (C > 2) return `Value ${e + 1} of ${C}`;
	if (C === 2) return ["Minimum", "Maximum"][e];
}
function getClosestValueIndex(e, C) {
	if (e.length === 1) return 0;
	let w = e.map((e) => Math.abs(e - C)), T = Math.min(...w);
	return w.indexOf(T);
}
function getThumbInBoundsOffset(e, C, w) {
	let T = e / 2;
	return (T - linearScale([0, 50], [0, T])(C) * w) * w;
}
function getStepsBetweenValues(e) {
	return e.slice(0, -1).map((C, w) => e[w + 1] - C);
}
function hasMinStepsBetweenValues(e, C) {
	if (C > 0) {
		let w = getStepsBetweenValues(e);
		return Math.min(...w) >= C;
	}
	return !0;
}
function linearScale(e, C) {
	return (w) => {
		if (e[0] === e[1] || C[0] === C[1]) return C[0];
		let T = (C[1] - C[0]) / (e[1] - e[0]);
		return C[0] + T * (w - e[0]);
	};
}
function getDecimalCount(e) {
	if (!Number.isFinite(e)) return 0;
	let C = e.toString();
	if (C.includes("e")) {
		let [e, w] = C.split("e"), T = e.split(".")[1] || "", E = Number(w);
		return Math.max(0, T.length - E);
	}
	let w = C.split(".")[1];
	return w ? w.length : 0;
}
function roundValue(e, C) {
	let w = 10 ** C;
	return Math.round(e * w) / w;
}
function getNextStepValue(e, { min: C, step: w, direction: T, multiplier: E }) {
	let D = getDecimalCount(w), O = (e - C) / w, k = Math.round(O), A = roundValue(k * w + C, D) === roundValue(e, D), j;
	return j = A ? k + E * T : T > 0 ? Math.ceil(O) : Math.floor(O), roundValue(j * w + C, D);
}
function isFunction(e) {
	return typeof e == "function";
}
var AGENT_GRID_MAX_ROWS = 4;
function useAgentGridScrollMaxHeight(e, C) {
	let [w, T] = (0, import_react.useState)(void 0);
	return (0, import_react.useLayoutEffect)(() => {
		let C = e.current;
		if (!C) return;
		let w = () => {
			let e = C.querySelector("[data-agent-card]"), w = e?.closest("[data-agent-grid]");
			if (!e || !w) {
				T(void 0);
				return;
			}
			let E = Number.parseFloat(getComputedStyle(w).rowGap || "10"), D = e.getBoundingClientRect().height;
			T(Math.ceil(AGENT_GRID_MAX_ROWS * D + (AGENT_GRID_MAX_ROWS - 1) * E));
		};
		w();
		let E = new ResizeObserver(w);
		E.observe(C);
		let D = C.querySelector("[data-agent-card]");
		return D && E.observe(D), () => E.disconnect();
	}, [C, e]), w;
}
function AgentStep({ selectedAgent: e, onSelect: C, detectedSet: T, isDetecting: E, yoloPermissions: D = !0, onYoloPermissionsChange: O }) {
	let k = getAgentCatalog(), A = k.filter((e) => T.has(e.id)), j = k.filter((e) => !T.has(e.id)), M = A.length > 0, N = M ? A : k.slice(0, 6), P = M ? j : k.slice(6), I = e && !T.has(e) ? k.find((C) => C.id === e) : void 0, L = e != null && P.some((C) => C.id === e), [R, z] = (0, import_react.useState)(L), [B, V] = (0, import_react.useState)(L);
	L !== B && (V(L), L && !R && z(!0));
	let H = R ? translate("auto.components.onboarding.AgentStep.hideAgents", "Hide agents") : translate("auto.components.onboarding.AgentStep.showMoreAgents", "Show {{value0}} more agents→", { value0: P.length }), U = (0, import_react.useRef)(null), W = useAgentGridScrollMaxHeight(U, `${N.length}:${P.length}:${R}:${M}`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col gap-5",
		children: [
			!M && !E && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0 rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-xs text-amber-700 dark:text-amber-200/90",
				children: translate("auto.components.onboarding.AgentStep.1eee1c7bd8", "No agents detected on your PATH. Pick one to install later, or continue with a blank terminal.")
			}),
			I && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center justify-between gap-3 rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-2.5 text-xs text-amber-700 dark:text-amber-200/90",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: I.label
					}),
					" ",
					translate("auto.components.onboarding.AgentStep.69af7e9c1c", "isn't on your PATH yet. Orca will set it as your default and you can install it any time.")
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "inline-flex shrink-0 items-center gap-1 rounded-md border border-amber-400/40 bg-amber-400/10 px-2 py-1 font-medium text-amber-800 hover:bg-amber-400/20 dark:text-amber-100",
					onClick: () => void window.api.shell.openUrl(I.homepageUrl),
					children: [translate("auto.components.onboarding.AgentStep.9c163bb0e0", "Install instructions"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex min-h-0 flex-1 flex-col gap-3 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					label: M ? translate("auto.components.onboarding.AgentStep.d7b3ef168b", "Detected on your system") : translate("auto.components.onboarding.AgentStep.e6a369bd04", "Popular agents"),
					count: N.length,
					showDetectedIndicator: M
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: U,
					"data-agent-grid-scroll": !0,
					className: "scrollbar-sleek min-h-0 flex-1 overflow-y-auto pr-1",
					style: W ? { maxHeight: W } : void 0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"data-agent-grid": !0,
							className: "grid grid-cols-2 gap-2.5 md:grid-cols-3",
							children: N.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentButton, {
								agent: w,
								selected: e === w.id,
								onClick: () => C(w.id, !1)
							}, w.id))
						}), P.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Collapsible, {
							open: R,
							onOpenChange: z,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger, {
								className: "cursor-pointer text-xs font-medium text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 data-[state=open]:mb-3",
								children: H
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
								className: "collapsible-height-content",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"data-agent-grid": !0,
									className: "grid grid-cols-2 gap-2.5 md:grid-cols-3",
									children: P.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentButton, {
										agent: w,
										selected: e === w.id,
										onClick: () => C(w.id, !0)
									}, w.id))
								})
							})]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YoloPermissionsControl, {
				yoloPermissions: D,
				onYoloPermissionsChange: O
			})
		]
	});
}
function YoloPermissionsControl({ yoloPermissions: e, onYoloPermissionsChange: C }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mt-auto flex shrink-0 cursor-pointer items-center justify-between gap-4 rounded-lg border border-border bg-muted/25 px-4 py-3 transition-colors hover:bg-muted/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
				checked: e,
				onCheckedChange: (e) => C?.(e === !0),
				className: "border-border bg-card data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
				"aria-label": translate("auto.components.onboarding.AgentStep.yoloPermissionsLabel", "Yolo / Dangerously skip permissions")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 text-sm font-medium text-foreground",
				children: translate("auto.components.onboarding.AgentStep.yoloPermissionsLabel", "Yolo / Dangerously skip permissions")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": translate("auto.components.onboarding.AgentStep.yoloPermissionsInfo", "Agent permission info"),
				onPointerDown: (e) => e.preventDefault(),
				className: "grid size-6 shrink-0 place-items-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-3.5" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
			side: "top",
			sideOffset: 6,
			style: { zIndex: 120 },
			children: translate("auto.components.onboarding.AgentStep.yoloPermissionsTooltip", "Skip permission checks for agents for less interruptions")
		})] })]
	});
}
function SectionHeader({ label: e, count: C, showDetectedIndicator: w = !1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex shrink-0 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground",
		children: [
			w && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "size-1.5 shrink-0 rounded-full bg-emerald-500",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground/60",
				children: "·"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums text-muted-foreground",
				children: C
			})
		]
	});
}
function AgentButton({ agent: e, selected: C, onClick: w }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"data-agent-card": !0,
		"aria-pressed": C,
		className: cn("group relative overflow-hidden rounded-xl border p-3.5 text-left transition-all", C ? "border-violet-500/60 bg-violet-500/10 ring-2 ring-violet-500/30" : "border-border bg-muted/30 hover:bg-muted/60"),
		onClick: w,
		children: [C ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute right-2 top-2 grid size-5 place-items-center rounded-full bg-violet-500 text-white shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "size-3",
				strokeWidth: 3
			})
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-start gap-2.5 pr-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-7 shrink-0 place-items-center rounded-md bg-muted text-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
					agent: e.id,
					size: 16
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-sm font-medium text-foreground",
					children: e.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-0.5 truncate font-mono text-[11px] text-muted-foreground",
					children: e.cmd
				})]
			})]
		})]
	});
}
function Separator({ className: e, orientation: C = "horizontal", decorative: w = !0, ...T }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "separator",
		decorative: w,
		orientation: C,
		className: cn("shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e),
		...T
	});
}
var MAC_PROBE_POLL_INTERVAL_MS = 2500, MAC_PROBE_POLL_MAX_ATTEMPTS = 72;
function resolveMacNotificationPermissionState(e, C) {
	return e === "unsupported" ? null : e === "delivered" ? "enabled" : e === "awaiting-decision" ? "awaiting-permission" : C ? "blocked" : "awaiting-permission";
}
function useMacNotificationPermissionState(e = !0) {
	let [C, w] = (0, import_react.useState)(null);
	return (0, import_react.useEffect)(() => {
		if (!e) {
			w(null);
			return;
		}
		let C = !1, T = null, E = 0;
		function D(e) {
			C || E >= MAC_PROBE_POLL_MAX_ATTEMPTS || (T = setTimeout(() => {
				E += 1, window.api.notifications.probeDelivery({ force: !0 }).then((T) => {
					C || (w(resolveMacNotificationPermissionState(T.state, e)), (T.authoritative || T.state !== "delivered") && D(e));
				});
			}, MAC_PROBE_POLL_INTERVAL_MS));
		}
		return (async () => {
			let e = await window.api.notifications.getPermissionStatus();
			if (C || e.platform !== "darwin" || !e.supported) return;
			w("checking");
			let T = await window.api.notifications.probeDelivery();
			if (C) return;
			let E = resolveMacNotificationPermissionState(T.state, e.requested);
			w(E), E !== null && (T.authoritative || E !== "enabled") && D(e.requested);
		})(), () => {
			C = !0, T && clearTimeout(T);
		};
	}, [e]), [C, w];
}
function MacNotificationPermissionCard({ state: e }) {
	return e === "checking" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "rounded-xl border border-border bg-muted/20 px-5 py-4 text-[13px] text-muted-foreground",
		children: translate("auto.components.onboarding.NotificationStep.56b836215c", "Checking notification permission…")
	}) : e === "enabled" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.07] px-5 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			className: "size-4 shrink-0 text-emerald-600 dark:text-emerald-400",
			strokeWidth: 3
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-semibold text-foreground",
				children: translate("auto.components.onboarding.NotificationStep.fd84d3e9b8", "Notifications are enabled")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[13px] leading-relaxed text-muted-foreground",
				children: translate("auto.components.onboarding.NotificationStep.4f7bce5644", "macOS will alert you when agents finish or terminals need attention.")
			})]
		})]
	}) : e === "awaiting-permission" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "rounded-xl border border-border bg-card px-5 py-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm font-semibold text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, { className: "size-4" }), translate("auto.components.onboarding.NotificationStep.95d99b52fa", "Allow notifications for Orca")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-[58ch] text-[13px] leading-relaxed text-muted-foreground",
					children: translate("auto.components.onboarding.mac.notification.permission.card.f696515944", "Click Allow in the macOS dialog.")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "outline",
				size: "sm",
				className: "gap-2",
				onClick: () => void window.api.notifications.openSystemSettings(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-3.5" }), translate("auto.components.onboarding.NotificationStep.4f6a1da718", "Open System Settings")]
			})]
		})
	}) : e === "blocked" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		role: "alert",
		className: "rounded-xl border border-amber-500/40 bg-amber-500/10 px-5 py-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4" }), translate("auto.components.onboarding.NotificationStep.90b5d2e363", "macOS is not delivering Orca notifications")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-[58ch] text-[13px] leading-relaxed text-amber-700/80 dark:text-amber-200/80",
					children: translate("auto.components.onboarding.mac.notification.permission.card.721d2bedb6", "Turn on Allow notifications for Orca in System Settings.")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				size: "sm",
				className: "gap-2",
				onClick: () => void window.api.notifications.openSystemSettings(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-3.5" }), translate("auto.components.onboarding.NotificationStep.4f6a1da718", "Open System Settings")]
			})]
		})
	}) : null;
}
function NotificationSettingToggle({ label: e, description: C, checked: w, onToggle: T, disabled: E = !1, icon: D }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [D, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: e })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: C
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked: w,
			"aria-label": e,
			disabled: E,
			onCheckedChange: T
		})]
	});
}
function Slider({ className: e, value: C, defaultValue: w, thumbLabels: T, thumbValueLabels: E, ...O }) {
	let k = Math.max((C ?? w)?.length ?? 1, 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		"data-slot": "slider",
		className: cn("relative flex w-full touch-none select-none items-center", "data-[disabled]:opacity-50", e),
		value: C,
		defaultValue: w,
		...O,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			"data-slot": "slider-track",
			className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, {
				"data-slot": "slider-range",
				className: "absolute h-full bg-primary"
			})
		}), Array.from({ length: k }, (e, C) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, {
			"data-slot": "slider-thumb",
			"aria-label": T?.[C],
			"aria-valuetext": E?.[C],
			className: cn("block size-4 rounded-full border border-primary/40 bg-background shadow-sm", "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:pointer-events-none disabled:opacity-50")
		}, C))]
	});
}
const getBuiltInNotificationSoundOptions = createLocalizedCatalog(() => [
	{
		id: "system",
		title: translate("auto.components.notification.sound.options.017abebfa6", "System Default"),
		icon: Bell
	},
	{
		id: "two-tone",
		title: translate("auto.components.notification.sound.options.80f7cc95b3", "Two Tone"),
		icon: AudioWaveform
	},
	{
		id: "bong",
		title: translate("auto.components.notification.sound.options.86af8d938c", "Bong"),
		icon: CircleDot
	},
	{
		id: "thump",
		title: translate("auto.components.notification.sound.options.1e4b81d892", "Thump"),
		icon: Volume1
	},
	{
		id: "blip",
		title: translate("auto.components.notification.sound.options.588c90487d", "Blip"),
		icon: Zap
	},
	{
		id: "sonar",
		title: translate("auto.components.notification.sound.options.020826ef17", "Sonar"),
		icon: Radar
	},
	{
		id: "blop",
		title: translate("auto.components.notification.sound.options.2b44847d8d", "Blop"),
		icon: Activity
	},
	{
		id: "ding",
		title: translate("auto.components.notification.sound.options.79919c832d", "Ding"),
		icon: Radio
	},
	{
		id: "clack",
		title: translate("auto.components.notification.sound.options.0acd3d384e", "Clack"),
		icon: Keyboard
	},
	{
		id: "beep",
		title: translate("auto.components.notification.sound.options.e38b0a2e68", "Beep"),
		icon: MousePointer2
	}
]);
function getNotificationSoundOptions(e) {
	return e ? [...getBuiltInNotificationSoundOptions(), {
		id: "custom",
		title: basename(e),
		icon: FileHeadphone
	}] : getBuiltInNotificationSoundOptions();
}
var CHOOSE_CUSTOM_SOUND_VALUE$1 = "choose-custom-file";
function isNotificationSoundId$1(e) {
	return e !== CHOOSE_CUSTOM_SOUND_VALUE$1;
}
function NotificationSoundSection({ notificationSettings: e, notificationsEnabled: C, volumeDraft: T, onVolumeDraftChange: E, onVolumeCommit: D, onUpdateNotificationSettings: k }) {
	let A = useMountedRef(), [j, M] = (0, import_react.useState)(!1), N = async (e) => {
		e !== "system" && ((await window.api.notifications.playSound({
			force: !0,
			volume: T
		})).played || toast.error(translate("auto.components.settings.NotificationsPane.0fadad17ce", "Notification sound could not be played")));
	}, P = async () => {
		M(!0);
		try {
			let e = await window.api.shell.pickAudio();
			e && (await k({
				customSoundId: "custom",
				customSoundPath: e
			}), await N("custom"));
		} finally {
			A.current && M(!1);
		}
	}, F = async (e) => {
		if (!isNotificationSoundId$1(e)) {
			await P();
			return;
		}
		await k({ customSoundId: e }), await N(e);
	}, I = e.customSoundId, L = getNotificationSoundOptions(e.customSoundPath);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileHeadphone, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: translate("auto.components.settings.NotificationsPane.88686e6ca8", "Notification Sound") })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: translate("auto.components.settings.NotificationsPane.2a2033c388", "Choose the alert Orca plays when a desktop notification is delivered.")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: I,
				disabled: !C || j,
				onValueChange: (e) => void F(e),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "w-full max-w-[360px]",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: translate("auto.components.settings.NotificationsPane.c258cb96dc", "Choose notification sound") })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
					align: "start",
					className: "w-[--radix-select-trigger-width]",
					children: [
						L.map((e) => {
							let C = e.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
								value: e.id,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: e.title
								})]
							}, e.id);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
							value: CHOOSE_CUSTOM_SOUND_VALUE$1,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.customSoundPath ? translate("auto.components.settings.NotificationsPane.76e02467b8", "Change Custom File") : translate("auto.components.settings.NotificationsPane.6e6df3a09a", "Choose Custom File") })]
						})
					]
				})]
			}),
			e.customSoundPath ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "truncate font-mono text-[11px] text-muted-foreground",
				title: e.customSoundPath,
				children: [
					translate("auto.components.settings.NotificationsPane.4aa5085cd7", "Custom:"),
					" ",
					e.customSoundPath
				]
			}) : null,
			I === "system" ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 pt-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						value: [T],
						min: 0,
						max: 100,
						step: 5,
						disabled: !C,
						onValueChange: ([e]) => E(e),
						onValueCommit: ([e]) => D(e),
						className: "flex-1",
						"aria-label": translate("auto.components.settings.NotificationsPane.2a42dd8d6f", "Notification sound volume")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "w-10 text-right font-mono text-xs tabular-nums text-muted-foreground",
						children: [T, "%"]
					})
				]
			})
		]
	});
}
function getSystemNotificationSettingsCopy(e) {
	return e === "darwin" ? {
		failureTitle: "macOS did not show the notification",
		failureDescription: "Enable Allow notifications for Orca in System Settings."
	} : e === "win32" ? {
		failureTitle: "Windows did not show the notification",
		failureDescription: "Enable notifications for Orca in Windows Settings."
	} : null;
}
function createNotificationVolumeDraftState(e) {
	return {
		sourceVolume: e,
		draft: e
	};
}
function resolveNotificationVolumeDraftState(e, C) {
	return e.sourceVolume === C ? e : createNotificationVolumeDraftState(C);
}
async function sendNotificationSettingsTestNotification(e, C, T) {
	let E = await window.api.notifications.getPermissionStatus();
	if (!E.supported) return toast.error(translate("auto.components.settings.NotificationsPane.c83b05a055", "Notifications are not supported on this system")), "not-sent";
	let D = await window.api.notifications.dispatch({
		source: "test",
		requireDisplayConfirmation: !0
	});
	if (D.delivered) {
		let D = e.customSoundId === "system" ? null : await window.api.notifications.playSound({
			force: !0,
			volume: C
		});
		if (e.customSoundId !== "system" && D && !D.played) return toast.error(translate("auto.components.settings.NotificationsPane.98d70fb261", "Custom notification sound could not be played")), "delivered";
		if (T?.suppressSystemPermissionToasts) return "delivered";
		let O = getSystemNotificationSettingsCopy(E.platform);
		return E.platform === "darwin" && O ? (toast.message(translate("auto.components.settings.NotificationsPane.7f45542625", "Test notification requested"), {
			description: translate("auto.components.settings.NotificationsPane.115437bc35", "If no macOS banner appeared, enable Allow notifications for Orca."),
			action: {
				label: translate("auto.components.settings.NotificationsPane.145227ca2b", "Open Settings"),
				onClick: () => {
					window.api.notifications.openSystemSettings();
				}
			}
		}), "delivered") : (toast.success(translate("auto.components.settings.NotificationsPane.d3d54e0915", "Test notification sent")), "delivered");
	}
	if (D.reason === "not-displayed" || D.reason === "blocked-by-system") {
		if (T?.suppressSystemPermissionToasts) return "not-displayed";
		let e = getSystemNotificationSettingsCopy(E.platform);
		return e ? toast.error(e.failureTitle, {
			description: e.failureDescription,
			action: {
				label: translate("auto.components.settings.NotificationsPane.145227ca2b", "Open Settings"),
				onClick: () => {
					window.api.notifications.openSystemSettings();
				}
			}
		}) : toast.error(translate("auto.components.settings.NotificationsPane.0cb93240b8", "System did not show the notification"), { description: translate("auto.components.settings.NotificationsPane.4676a95bc3", "Check your desktop notification settings for Orca.") }), "not-displayed";
	}
	return toast.error(D.reason === "disabled" ? translate("auto.components.settings.NotificationsPane.6fc3781729", "Notifications are disabled") : translate("auto.components.settings.NotificationsPane.406feb0aa6", "Test notification was not delivered")), "not-sent";
}
function NotificationsPane({ settings: e, updateSettings: C }) {
	let T = e.notifications, D = (0, import_react.useRef)(T), [O, k] = useMacNotificationPermissionState(T.enabled), A = async (e) => {
		let w = {
			...D.current,
			...e
		};
		D.current = w, await C({ notifications: { ...w } });
	};
	(0, import_react.useEffect)(() => {
		D.current = T;
	}, [T]);
	let [j, M] = (0, import_react.useState)(() => createNotificationVolumeDraftState(T.customSoundVolume)), P = resolveNotificationVolumeDraftState(j, T.customSoundVolume);
	P !== j && M(P);
	let F = P.draft, I = (e) => {
		M((C) => ({
			...resolveNotificationVolumeDraftState(C, T.customSoundVolume),
			draft: e
		}));
	}, L = (e) => {
		D.current.customSoundVolume !== e && A({ customSoundVolume: e });
	}, R = async () => {
		useAppStore.getState().recordFeatureInteraction("notifications");
		let e = O !== null, C = await sendNotificationSettingsTestNotification(T, F, e ? { suppressSystemPermissionToasts: !0 } : void 0);
		e && (C === "delivered" ? k("enabled") : C === "not-displayed" && k("blocked"));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [
			O === null ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MacNotificationPermissionCard, { state: O })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationSettingToggle, {
				label: translate("auto.components.settings.NotificationsPane.841c8c549f", "Enable Notifications"),
				description: translate("auto.components.settings.NotificationsPane.deff6d30da", "Native system notifications for background events."),
				checked: T.enabled,
				onToggle: () => {
					T.enabled || useAppStore.getState().recordFeatureInteraction("notifications"), A({ enabled: !T.enabled });
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationSettingToggle, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "size-4" }),
				label: translate("auto.components.settings.NotificationsPane.ca76d06fd2", "Agent Task Complete"),
				description: translate("auto.components.settings.NotificationsPane.55f901a59b", "A coding agent finishes and becomes idle."),
				checked: T.agentTaskComplete,
				disabled: !T.enabled,
				onToggle: () => void A({ agentTaskComplete: !T.agentTaskComplete })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationSettingToggle, {
				icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "size-4" }),
				label: translate("auto.components.settings.NotificationsPane.591fe605b9", "Terminal Bell"),
				description: translate("auto.components.settings.NotificationsPane.b6fc369244", "A background terminal emits a bell character."),
				checked: T.terminalBell,
				disabled: !T.enabled,
				onToggle: () => void A({ terminalBell: !T.terminalBell })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationSoundSection, {
				notificationSettings: T,
				notificationsEnabled: T.enabled,
				volumeDraft: F,
				onVolumeDraftChange: I,
				onVolumeCommit: L,
				onUpdateNotificationSettings: A
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationSettingToggle, {
				label: translate("auto.components.settings.NotificationsPane.00cd406dbb", "Suppress While Focused"),
				description: translate("auto.components.settings.NotificationsPane.2772d2f257", "Skip notifications when the triggering worktree is already visible."),
				checked: T.suppressWhenFocused,
				disabled: !T.enabled,
				onToggle: () => void A({ suppressWhenFocused: !T.suppressWhenFocused })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap items-center gap-2 pt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					disabled: !T.enabled,
					onClick: () => void R(),
					className: "gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, { className: "size-3.5" }), translate("auto.components.settings.NotificationsPane.906b4afebf", "Send Test Notification")]
				})
			})
		]
	});
}
var CHOOSE_CUSTOM_SOUND_VALUE = "choose-custom-file";
function isNotificationSoundId(e) {
	return e !== CHOOSE_CUSTOM_SOUND_VALUE;
}
function NotificationStep({ settings: e, updateSettings: C }) {
	let T = e?.notifications, D = (0, import_react.useRef)(T), [k, A] = useMacNotificationPermissionState(T?.enabled !== !1), [j, M] = (0, import_react.useState)(!1), [N, P] = (0, import_react.useState)(null), F = (0, import_react.useRef)(T), I = useMountedRef();
	F.current !== T && (F.current = T, D.current = T);
	let L = (0, import_react.useCallback)((e) => {
		P(e?.closest("[data-onboarding-overlay]") ?? e);
	}, []), R = async (e) => {
		let w = D.current;
		if (!w) return;
		let T = {
			...w,
			...e
		};
		D.current = T, await C({ notifications: T });
	}, z = () => D.current?.customSoundVolume ?? 100, B = async (e) => {
		e !== "system" && ((await window.api.notifications.playSound({
			force: !0,
			volume: z()
		})).played || I.current && toast.error(translate("auto.components.onboarding.NotificationStep.b6a994e36e", "Notification sound could not be played")));
	}, V = async () => {
		M(!0);
		try {
			let e = await window.api.shell.pickAudio();
			e && (await R({
				customSoundId: "custom",
				customSoundPath: e
			}), await B("custom"));
		} finally {
			I.current && M(!1);
		}
	}, U = async (e) => {
		if (!isNotificationSoundId(e)) {
			await V();
			return;
		}
		await R({ customSoundId: e }), await B(e);
	}, W = async () => {
		if (!T) {
			toast.error(translate("auto.components.onboarding.NotificationStep.3cd5374e22", "Notification settings are still loading"));
			return;
		}
		let e = k !== null, C = await sendNotificationSettingsTestNotification(T, z(), e ? { suppressSystemPermissionToasts: !0 } : void 0);
		!I.current || !e || (C === "delivered" ? A("enabled") : C === "not-displayed" && A("blocked"));
	};
	if (!T) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-border bg-muted/20 px-5 py-4 text-sm text-muted-foreground",
		children: translate("auto.components.onboarding.NotificationStep.e52aacf380", "Loading notification settings…")
	});
	let G = T.customSoundPath, K = T.customSoundId, q = getNotificationSoundOptions(G);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: L,
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MacNotificationPermissionCard, { state: k }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold text-foreground",
					children: translate("auto.components.onboarding.NotificationStep.0af746e41f", "Choose a sound")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] leading-relaxed text-muted-foreground",
					children: translate("auto.components.onboarding.NotificationStep.0fe570690c", "Pick the alert Orca plays after a desktop notification is delivered.")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm font-medium text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileHeadphone, { className: "size-4" }), translate("auto.components.onboarding.NotificationStep.53aaffe49a", "Notification Sound")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: K,
						disabled: j,
						onValueChange: (e) => void U(e),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "w-[360px] max-w-full",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: translate("auto.components.onboarding.NotificationStep.dc897423e1", "Choose notification sound") })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
							portalContainer: N,
							align: "start",
							className: "w-[--radix-select-trigger-width]",
							children: [
								q.map((e) => {
									let C = e.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
										value: e.id,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(C, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: e.title
										})]
									}, e.id);
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
									value: CHOOSE_CUSTOM_SOUND_VALUE,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: G ? translate("auto.components.onboarding.NotificationStep.ac80d97e02", "Change Custom File") : translate("auto.components.onboarding.NotificationStep.c0692baa52", "Choose Custom File") })]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "gap-2",
						onClick: () => void W(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, { className: "size-3.5" }), translate("auto.components.onboarding.NotificationStep.3bede04483", "Send Test Notification")]
					})]
				})]
			})]
		})]
	});
}
export { AgentStep as a, Separator as i, NotificationsPane as n, MousePointer2 as o, Slider as r, NotificationStep as t };
