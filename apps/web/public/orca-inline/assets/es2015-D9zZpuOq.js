import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { c as useComposedRefs } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { i as useCallbackRef$1 } from "./dist-BZKlajuP.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount", AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, FOCUS_SCOPE_NAME = "FocusScope", FocusScope = import_react.forwardRef((e, E) => {
	let { loop: O = !1, trapped: I = !1, onMountAutoFocus: L, onUnmountAutoFocus: V, ...H } = e, [U, K] = import_react.useState(null), q = useCallbackRef$1(L), Y = useCallbackRef$1(V), X = import_react.useRef(null), Z = useComposedRefs(E, K), Q = import_react.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	import_react.useEffect(() => {
		if (I) {
			let e = function(e) {
				if (Q.paused || !U) return;
				let E = e.target;
				U.contains(E) ? X.current = E : focus(X.current, { select: !0 });
			}, E = function(e) {
				if (Q.paused || !U) return;
				let E = e.relatedTarget;
				E !== null && (U.contains(E) || focus(X.current, { select: !0 }));
			}, D = function(e) {
				if (document.activeElement === document.body) for (let E of e) E.removedNodes.length > 0 && focus(U);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", E);
			let O = new MutationObserver(D);
			return U && O.observe(U, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", E), O.disconnect();
			};
		}
	}, [
		I,
		U,
		Q.paused
	]), import_react.useEffect(() => {
		if (U) {
			focusScopesStack.add(Q);
			let e = document.activeElement;
			if (!U.contains(e)) {
				let E = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
				U.addEventListener(AUTOFOCUS_ON_MOUNT, q), U.dispatchEvent(E), E.defaultPrevented || (focusFirst(removeLinks(getTabbableCandidates(U)), { select: !0 }), document.activeElement === e && focus(U));
			}
			return () => {
				U.removeEventListener(AUTOFOCUS_ON_MOUNT, q), setTimeout(() => {
					let E = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
					U.addEventListener(AUTOFOCUS_ON_UNMOUNT, Y), U.dispatchEvent(E), E.defaultPrevented || focus(e ?? document.body, { select: !0 }), U.removeEventListener(AUTOFOCUS_ON_UNMOUNT, Y), focusScopesStack.remove(Q);
				}, 0);
			};
		}
	}, [
		U,
		q,
		Y,
		Q
	]);
	let $ = import_react.useCallback((e) => {
		if (!O && !I || Q.paused) return;
		let E = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, D = document.activeElement;
		if (E && D) {
			let E = e.currentTarget, [k, A] = getTabbableEdges(E);
			k && A ? !e.shiftKey && D === A ? (e.preventDefault(), O && focus(k, { select: !0 })) : e.shiftKey && D === k && (e.preventDefault(), O && focus(A, { select: !0 })) : D === E && e.preventDefault();
		}
	}, [
		O,
		I,
		Q.paused
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		tabIndex: -1,
		...H,
		ref: Z,
		onKeyDown: $
	});
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(e, { select: E = !1 } = {}) {
	let D = document.activeElement;
	for (let O of e) if (focus(O, { select: E }), document.activeElement !== D) return;
}
function getTabbableEdges(e) {
	let E = getTabbableCandidates(e);
	return [findVisible(E, e), findVisible(E.reverse(), e)];
}
function getTabbableCandidates(e) {
	let E = [], D = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let E = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || E ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; D.nextNode();) E.push(D.currentNode);
	return E;
}
function findVisible(e, E) {
	let D = typeof E.checkVisibility == "function" && E.checkVisibility({ checkVisibilityCSS: !0 });
	for (let O of e) if (!(D ? !O.checkVisibility({ checkVisibilityCSS: !0 }) : isHidden(O, { upTo: E }))) return O;
}
function isHidden(e, { upTo: E }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (E !== void 0 && e === E) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function isSelectableInput(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function focus(e, { select: E = !1 } = {}) {
	if (e && e.focus) {
		let D = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== D && isSelectableInput(e) && E && e.select();
	}
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let e = [];
	return {
		add(E) {
			let D = e[0];
			E !== D && D?.pause(), e = arrayRemove(e, E), e.unshift(E);
		},
		remove(E) {
			e = arrayRemove(e, E), e[0]?.resume();
		}
	};
}
function arrayRemove(e, E) {
	let D = [...e], O = D.indexOf(E);
	return O !== -1 && D.splice(O, 1), D;
}
function removeLinks(e) {
	return e.filter((e) => e.tagName !== "A");
}
var count = 0, guards = null;
function useFocusGuards() {
	import_react.useEffect(() => {
		guards ||= {
			start: createFocusGuard(),
			end: createFocusGuard()
		};
		let { start: e, end: E } = guards;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== E && document.body.insertAdjacentElement("beforeend", E), count++, () => {
			count === 1 && (guards?.start.remove(), guards?.end.remove(), guards = null), count = Math.max(0, count - 1);
		};
	}, []);
}
function createFocusGuard() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var __assign = function() {
	return __assign = Object.assign || function(e) {
		for (var E, D = 1, O = arguments.length; D < O; D++) for (var k in E = arguments[D], E) Object.prototype.hasOwnProperty.call(E, k) && (e[k] = E[k]);
		return e;
	}, __assign.apply(this, arguments);
};
function __rest(e, E) {
	var D = {};
	for (var O in e) Object.prototype.hasOwnProperty.call(e, O) && E.indexOf(O) < 0 && (D[O] = e[O]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var k = 0, O = Object.getOwnPropertySymbols(e); k < O.length; k++) E.indexOf(O[k]) < 0 && Object.prototype.propertyIsEnumerable.call(e, O[k]) && (D[O[k]] = e[O[k]]);
	return D;
}
function __spreadArray(e, E, D) {
	if (D || arguments.length === 2) for (var O = 0, k = E.length, A; O < k; O++) (A || !(O in E)) && (A ||= Array.prototype.slice.call(E, 0, O), A[O] = E[O]);
	return e.concat(A || Array.prototype.slice.call(E));
}
var zeroRightClassName = "right-scroll-bar-position", fullWidthClassName = "width-before-scroll-bar", noScrollbarsClassName = "with-scroll-bars-hidden", removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(e, E) {
	return typeof e == "function" ? e(E) : e && (e.current = E), e;
}
function useCallbackRef(e, E) {
	var D = (0, import_react.useState)(function() {
		return {
			value: e,
			callback: E,
			facade: {
				get current() {
					return D.value;
				},
				set current(e) {
					var E = D.value;
					E !== e && (D.value = e, D.callback(e, E));
				}
			}
		};
	})[0];
	return D.callback = E, D.facade;
}
var useIsomorphicLayoutEffect = typeof window < "u" ? import_react.useLayoutEffect : import_react.useEffect, currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(e, E) {
	var D = useCallbackRef(E || null, function(E) {
		return e.forEach(function(e) {
			return assignRef(e, E);
		});
	});
	return useIsomorphicLayoutEffect(function() {
		var E = currentValues.get(D);
		if (E) {
			var O = new Set(E), k = new Set(e), A = D.current;
			O.forEach(function(e) {
				k.has(e) || assignRef(e, null);
			}), k.forEach(function(e) {
				O.has(e) || assignRef(e, A);
			});
		}
		currentValues.set(D, e);
	}, [e]), D;
}
function ItoI(e) {
	return e;
}
function innerCreateMedium(e, E) {
	E === void 0 && (E = ItoI);
	var D = [], O = !1;
	return {
		read: function() {
			if (O) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return D.length ? D[D.length - 1] : e;
		},
		useMedium: function(e) {
			var k = E(e, O);
			return D.push(k), function() {
				D = D.filter(function(e) {
					return e !== k;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (O = !0; D.length;) {
				var E = D;
				D = [], E.forEach(e);
			}
			D = {
				push: function(E) {
					return e(E);
				},
				filter: function() {
					return D;
				}
			};
		},
		assignMedium: function(e) {
			O = !0;
			var E = [];
			if (D.length) {
				var k = D;
				D = [], k.forEach(e), E = D;
			}
			var A = function() {
				var D = E;
				E = [], D.forEach(e);
			}, j = function() {
				return Promise.resolve().then(A);
			};
			j(), D = {
				push: function(e) {
					E.push(e), j();
				},
				filter: function(e) {
					return E = E.filter(e), D;
				}
			};
		}
	};
}
function createSidecarMedium(e) {
	e === void 0 && (e = {});
	var E = innerCreateMedium(null);
	return E.options = __assign({
		async: !0,
		ssr: !1
	}, e), E;
}
var SideCar = function(e) {
	var E = e.sideCar, D = __rest(e, ["sideCar"]);
	if (!E) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var O = E.read();
	if (!O) throw Error("Sidecar medium not found");
	return import_react.createElement(O, __assign({}, D));
};
SideCar.isSideCarExport = !0;
function exportSidecar(e, E) {
	return e.useMedium(E), SideCar;
}
var effectCar = createSidecarMedium(), nothing = function() {}, RemoveScroll = import_react.forwardRef(function(e, E) {
	var D = import_react.useRef(null), O = import_react.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), k = O[0], A = O[1], M = e.forwardProps, N = e.children, P = e.className, F = e.removeScrollBar, I = e.enabled, L = e.shards, R = e.sideCar, z = e.noRelative, B = e.noIsolation, V = e.inert, H = e.allowPinchZoom, U = e.as, W = U === void 0 ? "div" : U, G = e.gapMode, K = __rest(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), q = R, J = useMergeRefs([D, E]), Y = __assign(__assign({}, K), k);
	return import_react.createElement(import_react.Fragment, null, I && import_react.createElement(q, {
		sideCar: effectCar,
		removeScrollBar: F,
		shards: L,
		noRelative: z,
		noIsolation: B,
		inert: V,
		setCallbacks: A,
		allowPinchZoom: !!H,
		lockRef: D,
		gapMode: G
	}), M ? import_react.cloneElement(import_react.Children.only(N), __assign(__assign({}, Y), { ref: J })) : import_react.createElement(W, __assign({}, Y, {
		className: P,
		ref: J
	}), N));
});
RemoveScroll.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, RemoveScroll.classNames = {
	fullWidth: fullWidthClassName,
	zeroRight: zeroRightClassName
};
var currentNonce, getNonce = function() {
	if (currentNonce) return currentNonce;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function makeStyleTag() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var E = getNonce();
	return E && e.setAttribute("nonce", E), e;
}
function injectStyles(e, E) {
	e.styleSheet ? e.styleSheet.cssText = E : e.appendChild(document.createTextNode(E));
}
function insertStyleTag(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var stylesheetSingleton = function() {
	var e = 0, E = null;
	return {
		add: function(D) {
			e == 0 && (E = makeStyleTag()) && (injectStyles(E, D), insertStyleTag(E)), e++;
		},
		remove: function() {
			e--, !e && E && (E.parentNode && E.parentNode.removeChild(E), E = null);
		}
	};
}, styleHookSingleton = function() {
	var e = stylesheetSingleton();
	return function(E, D) {
		import_react.useEffect(function() {
			return e.add(E), function() {
				e.remove();
			};
		}, [E && D]);
	};
}, styleSingleton = function() {
	var e = styleHookSingleton();
	return function(E) {
		var D = E.styles, O = E.dynamic;
		return e(D, O), null;
	};
}, zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, parse = function(e) {
	return parseInt(e || "", 10) || 0;
}, getOffset = function(e) {
	var E = window.getComputedStyle(document.body), D = E[e === "padding" ? "paddingLeft" : "marginLeft"], O = E[e === "padding" ? "paddingTop" : "marginTop"], k = E[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(D),
		parse(O),
		parse(k)
	];
}, getGapWidth = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return zeroGap;
	var E = getOffset(e), D = document.documentElement.clientWidth, O = window.innerWidth;
	return {
		left: E[0],
		top: E[1],
		right: E[2],
		gap: Math.max(0, O - D + E[2] - E[0])
	};
}, Style = styleSingleton(), lockAttribute = "data-scroll-locked", getStyles = function(e, E, D, O) {
	var k = e.left, A = e.top, j = e.right, M = e.gap;
	return D === void 0 && (D = "margin"), `
  .${noScrollbarsClassName} {
   overflow: hidden ${O};
   padding-right: ${M}px ${O};
  }
  body[${lockAttribute}] {
    overflow: hidden ${O};
    overscroll-behavior: contain;
    ${[
		E && `position: relative ${O};`,
		D === "margin" && `
    padding-left: ${k}px;
    padding-top: ${A}px;
    padding-right: ${j}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${M}px ${O};
    `,
		D === "padding" && `padding-right: ${M}px ${O};`
	].filter(Boolean).join("")}
  }
  
  .${zeroRightClassName} {
    right: ${M}px ${O};
  }
  
  .${fullWidthClassName} {
    margin-right: ${M}px ${O};
  }
  
  .${zeroRightClassName} .${zeroRightClassName} {
    right: 0 ${O};
  }
  
  .${fullWidthClassName} .${fullWidthClassName} {
    margin-right: 0 ${O};
  }
  
  body[${lockAttribute}] {
    ${removedBarSizeVariable}: ${M}px;
  }
`;
}, getCurrentUseCounter = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, useLockAttribute = function() {
	import_react.useEffect(function() {
		return document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString()), function() {
			var e = getCurrentUseCounter() - 1;
			e <= 0 ? document.body.removeAttribute(lockAttribute) : document.body.setAttribute(lockAttribute, e.toString());
		};
	}, []);
}, RemoveScrollBar = function(e) {
	var E = e.noRelative, D = e.noImportant, O = e.gapMode, k = O === void 0 ? "margin" : O;
	useLockAttribute();
	var A = import_react.useMemo(function() {
		return getGapWidth(k);
	}, [k]);
	return import_react.createElement(Style, { styles: getStyles(A, !E, k, D ? "" : "!important") });
}, passiveSupported = !1;
if (typeof window < "u") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		return passiveSupported = !0, !0;
	} });
	window.addEventListener("test", options, options), window.removeEventListener("test", options, options);
} catch {
	passiveSupported = !1;
}
var nonPassive = passiveSupported ? { passive: !1 } : !1, alwaysContainsScroll = function(e) {
	return e.tagName === "TEXTAREA";
}, elementCanBeScrolled = function(e, E) {
	if (!(e instanceof Element)) return !1;
	var D = window.getComputedStyle(e);
	return D[E] !== "hidden" && !(D.overflowY === D.overflowX && !alwaysContainsScroll(e) && D[E] === "visible");
}, elementCouldBeVScrolled = function(e) {
	return elementCanBeScrolled(e, "overflowY");
}, elementCouldBeHScrolled = function(e) {
	return elementCanBeScrolled(e, "overflowX");
}, locationCouldBeScrolled = function(e, E) {
	var D = E.ownerDocument, O = E;
	do {
		if (typeof ShadowRoot < "u" && O instanceof ShadowRoot && (O = O.host), elementCouldBeScrolled(e, O)) {
			var k = getScrollVariables(e, O);
			if (k[1] > k[2]) return !0;
		}
		O = O.parentNode;
	} while (O && O !== D.body);
	return !1;
}, getVScrollVariables = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, getHScrollVariables = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, elementCouldBeScrolled = function(e, E) {
	return e === "v" ? elementCouldBeVScrolled(E) : elementCouldBeHScrolled(E);
}, getScrollVariables = function(e, E) {
	return e === "v" ? getVScrollVariables(E) : getHScrollVariables(E);
}, getDirectionFactor = function(e, E) {
	return e === "h" && E === "rtl" ? -1 : 1;
}, handleScroll = function(e, E, D, O, k) {
	var A = getDirectionFactor(e, window.getComputedStyle(E).direction), j = A * O, M = D.target, N = E.contains(M), P = !1, F = j > 0, I = 0, L = 0;
	do {
		if (!M) break;
		var R = getScrollVariables(e, M), z = R[0], B = R[1] - R[2] - A * z;
		(z || B) && elementCouldBeScrolled(e, M) && (I += B, L += z);
		var V = M.parentNode;
		M = V && V.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? V.host : V;
	} while (!N && M !== document.body || N && (E.contains(M) || E === M));
	return (F && (k && Math.abs(I) < 1 || !k && j > I) || !F && (k && Math.abs(L) < 1 || !k && -j > L)) && (P = !0), P;
}, getTouchXY = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, getDeltaXY = function(e) {
	return [e.deltaX, e.deltaY];
}, extractRef = function(e) {
	return e && "current" in e ? e.current : e;
}, deltaCompare = function(e, E) {
	return e[0] === E[0] && e[1] === E[1];
}, generateStyle = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, idCounter = 0, lockStack = [];
function RemoveScrollSideCar(e) {
	var E = import_react.useRef([]), D = import_react.useRef([0, 0]), O = import_react.useRef(), k = import_react.useState(idCounter++)[0], A = import_react.useState(styleSingleton)[0], M = import_react.useRef(e);
	import_react.useEffect(function() {
		M.current = e;
	}, [e]), import_react.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${k}`);
			var E = __spreadArray([e.lockRef.current], (e.shards || []).map(extractRef), !0).filter(Boolean);
			return E.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${k}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${k}`), E.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${k}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var N = import_react.useCallback(function(e, E) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !M.current.allowPinchZoom;
		var k = getTouchXY(e), A = D.current, j = "deltaX" in e ? e.deltaX : A[0] - k[0], N = "deltaY" in e ? e.deltaY : A[1] - k[1], P, F = e.target, I = Math.abs(j) > Math.abs(N) ? "h" : "v";
		if ("touches" in e && I === "h" && F.type === "range") return !1;
		var L = window.getSelection(), R = L && L.anchorNode;
		if (R && (R === F || R.contains(F))) return !1;
		var z = locationCouldBeScrolled(I, F);
		if (!z) return !0;
		if (z ? P = I : (P = I === "v" ? "h" : "v", z = locationCouldBeScrolled(I, F)), !z) return !1;
		if (!O.current && "changedTouches" in e && (j || N) && (O.current = P), !P) return !0;
		var B = O.current || P;
		return handleScroll(B, E, e, B === "h" ? j : N, !0);
	}, []), P = import_react.useCallback(function(e) {
		var D = e;
		if (!(!lockStack.length || lockStack[lockStack.length - 1] !== A)) {
			var O = "deltaY" in D ? getDeltaXY(D) : getTouchXY(D), k = E.current.filter(function(e) {
				return e.name === D.type && (e.target === D.target || D.target === e.shadowParent) && deltaCompare(e.delta, O);
			})[0];
			if (k && k.should) {
				D.cancelable && D.preventDefault();
				return;
			}
			if (!k) {
				var j = (M.current.shards || []).map(extractRef).filter(Boolean).filter(function(e) {
					return e.contains(D.target);
				});
				(j.length > 0 ? N(D, j[0]) : !M.current.noIsolation) && D.cancelable && D.preventDefault();
			}
		}
	}, []), F = import_react.useCallback(function(e, D, O, k) {
		var A = {
			name: e,
			delta: D,
			target: O,
			should: k,
			shadowParent: getOutermostShadowParent(O)
		};
		E.current.push(A), setTimeout(function() {
			E.current = E.current.filter(function(e) {
				return e !== A;
			});
		}, 1);
	}, []), I = import_react.useCallback(function(e) {
		D.current = getTouchXY(e), O.current = void 0;
	}, []), L = import_react.useCallback(function(E) {
		F(E.type, getDeltaXY(E), E.target, N(E, e.lockRef.current));
	}, []), R = import_react.useCallback(function(E) {
		F(E.type, getTouchXY(E), E.target, N(E, e.lockRef.current));
	}, []);
	import_react.useEffect(function() {
		return lockStack.push(A), e.setCallbacks({
			onScrollCapture: L,
			onWheelCapture: L,
			onTouchMoveCapture: R
		}), document.addEventListener("wheel", P, nonPassive), document.addEventListener("touchmove", P, nonPassive), document.addEventListener("touchstart", I, nonPassive), function() {
			lockStack = lockStack.filter(function(e) {
				return e !== A;
			}), document.removeEventListener("wheel", P, nonPassive), document.removeEventListener("touchmove", P, nonPassive), document.removeEventListener("touchstart", I, nonPassive);
		};
	}, []);
	var z = e.removeScrollBar, B = e.inert;
	return import_react.createElement(import_react.Fragment, null, B ? import_react.createElement(A, { styles: generateStyle(k) }) : null, z ? import_react.createElement(RemoveScrollBar, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function getOutermostShadowParent(e) {
	for (var E = null; e !== null;) e instanceof ShadowRoot && (E = e.host, e = e.host), e = e.parentNode;
	return E;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar), ReactRemoveScroll = import_react.forwardRef(function(e, E) {
	return import_react.createElement(RemoveScroll, __assign({}, e, {
		ref: E,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll, getDefaultParent = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {}, lockCount = 0, unwrapHost = function(e) {
	return e && (e.host || unwrapHost(e.parentNode));
}, correctTargets = function(e, E) {
	return E.map(function(E) {
		if (e.contains(E)) return E;
		var D = unwrapHost(E);
		return D && e.contains(D) ? D : (console.error("aria-hidden", E, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, applyAttributeToOthers = function(e, E, D, O) {
	var k = correctTargets(E, Array.isArray(e) ? e : [e]);
	markerMap[D] || (markerMap[D] = /* @__PURE__ */ new WeakMap());
	var A = markerMap[D], j = [], M = /* @__PURE__ */ new Set(), N = new Set(k), P = function(e) {
		!e || M.has(e) || (M.add(e), P(e.parentNode));
	};
	k.forEach(P);
	var F = function(e) {
		!e || N.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (M.has(e)) F(e);
			else try {
				var E = e.getAttribute(O), k = E !== null && E !== "false", N = (counterMap.get(e) || 0) + 1, P = (A.get(e) || 0) + 1;
				counterMap.set(e, N), A.set(e, P), j.push(e), N === 1 && k && uncontrolledNodes.set(e, !0), P === 1 && e.setAttribute(D, "true"), k || e.setAttribute(O, "true");
			} catch (E) {
				console.error("aria-hidden: cannot operate on ", e, E);
			}
		});
	};
	return F(E), M.clear(), lockCount++, function() {
		j.forEach(function(e) {
			var E = counterMap.get(e) - 1, k = A.get(e) - 1;
			counterMap.set(e, E), A.set(e, k), E || (uncontrolledNodes.has(e) || e.removeAttribute(O), uncontrolledNodes.delete(e)), k || e.removeAttribute(D);
		}), lockCount--, lockCount || (counterMap = /* @__PURE__ */ new WeakMap(), counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {});
	};
}, hideOthers = function(e, E, D) {
	D === void 0 && (D = "data-aria-hidden");
	var O = Array.from(Array.isArray(e) ? e : [e]), k = E || getDefaultParent(e);
	return k ? (O.push.apply(O, Array.from(k.querySelectorAll("[aria-live], script"))), applyAttributeToOthers(O, k, D, "aria-hidden")) : function() {
		return null;
	};
};
export { FocusScope as i, Combination_default as n, useFocusGuards as r, hideOthers as t };
