import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { a as createSlot, c as useComposedRefs } from "./useMountedRef-De7bTfqf.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { n as dispatchDiscreteCustomEvent, t as Primitive } from "./dist-qqbILKL5.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { t as createCollection } from "./dist-BmoCFUG3.js";
import { r as composeEventHandlers } from "./dist-DDM3IpIH.js";
import { n as Presence, t as useId } from "./dist-CxjmhSN9.js";
import { t as useDirection } from "./dist-DqysERl8.js";
import { i as useCallbackRef, n as DismissableLayer, t as Portal } from "./dist-BZKlajuP.js";
import { i as FocusScope, n as Combination_default, r as useFocusGuards, t as hideOthers } from "./es2015-D9zZpuOq.js";
import { a as createPopperScope, i as Root2, n as Arrow, r as Content, t as Anchor } from "./dist-CJIJTNCs.js";
import { n as Root, r as createRovingFocusGroupScope, t as Item } from "./dist-Dm7fY9iq.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), SELECTION_KEYS = ["Enter", " "], FIRST_KEYS = [
	"ArrowDown",
	"PageUp",
	"Home"
], LAST_KEYS = [
	"ArrowUp",
	"PageDown",
	"End"
], FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS], SUB_OPEN_KEYS = {
	ltr: [...SELECTION_KEYS, "ArrowRight"],
	rtl: [...SELECTION_KEYS, "ArrowLeft"]
}, SUB_CLOSE_KEYS = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, MENU_NAME = "Menu", [Collection, useCollection, createCollectionScope] = createCollection(MENU_NAME), [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
	createCollectionScope,
	createPopperScope,
	createRovingFocusGroupScope
]), usePopperScope = createPopperScope(), useRovingFocusGroupScope = createRovingFocusGroupScope(), [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME), [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME), Menu = (e) => {
	let { __scopeMenu: g, open: _ = !1, children: v, dir: y, onOpenChange: b, modal: x = !0 } = e, S = usePopperScope(g), [C, w] = import_react.useState(null), T = import_react.useRef(!1), E = useCallbackRef(b), k = useDirection(y);
	return import_react.useEffect(() => {
		let e = () => {
			T.current = !0, document.addEventListener("pointerdown", g, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", g, {
				capture: !0,
				once: !0
			});
		}, g = () => T.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
		};
	}, []), import_react.useEffect(() => {
		if (!_) return;
		let e = () => E(!1);
		return window.addEventListener("blur", e), () => window.removeEventListener("blur", e);
	}, [_, E]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		...S,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuProvider, {
			scope: g,
			open: _,
			onOpenChange: E,
			content: C,
			onContentChange: w,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRootProvider, {
				scope: g,
				onClose: import_react.useCallback(() => E(!1), [E]),
				isUsingKeyboardRef: T,
				dir: k,
				modal: x,
				children: v
			})
		})
	});
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor", MenuAnchor = import_react.forwardRef((e, g) => {
	let { __scopeMenu: _, ...v } = e, y = usePopperScope(_);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, {
		...y,
		...v,
		ref: g
	});
});
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME = "MenuPortal", [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME, { forceMount: void 0 }), MenuPortal = (e) => {
	let { __scopeMenu: g, forceMount: _, children: v, container: y } = e, b = useMenuContext(PORTAL_NAME, g);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: g,
		forceMount: _,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: _ || b.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
				asChild: !0,
				container: y,
				children: v
			})
		})
	});
};
MenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "MenuContent", [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME), MenuContent = import_react.forwardRef((e, g) => {
	let _ = usePortalContext(CONTENT_NAME, e.__scopeMenu), { forceMount: v = _.forceMount, ...y } = e, b = useMenuContext(CONTENT_NAME, e.__scopeMenu), x = useMenuRootContext(CONTENT_NAME, e.__scopeMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: v || b.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
				scope: e.__scopeMenu,
				children: x.modal ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRootContentModal, {
					...y,
					ref: g
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuRootContentNonModal, {
					...y,
					ref: g
				})
			})
		})
	});
}), MenuRootContentModal = import_react.forwardRef((e, g) => {
	let _ = useMenuContext(CONTENT_NAME, e.__scopeMenu), y = import_react.useRef(null), b = useComposedRefs(g, y);
	return import_react.useEffect(() => {
		let e = y.current;
		if (e) return hideOthers(e);
	}, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuContentImpl, {
		...e,
		ref: b,
		trapFocus: _.open,
		disableOutsidePointerEvents: _.open,
		disableOutsideScroll: !0,
		onFocusOutside: composeEventHandlers(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => _.onOpenChange(!1)
	});
}), MenuRootContentNonModal = import_react.forwardRef((e, g) => {
	let _ = useMenuContext(CONTENT_NAME, e.__scopeMenu);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuContentImpl, {
		...e,
		ref: g,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => _.onOpenChange(!1)
	});
}), Slot = createSlot("MenuContent.ScrollLock"), MenuContentImpl = import_react.forwardRef((e, g) => {
	let { __scopeMenu: _, loop: y = !1, trapFocus: b, onOpenAutoFocus: x, onCloseAutoFocus: S, disableOutsidePointerEvents: C, onEntryFocus: T, onEscapeKeyDown: E, onPointerDownOutside: D, onFocusOutside: O, onInteractOutside: A, onDismiss: M, disableOutsideScroll: N, ...P } = e, F = useMenuContext(CONTENT_NAME, _), I = useMenuRootContext(CONTENT_NAME, _), L = usePopperScope(_), R = useRovingFocusGroupScope(_), z = useCollection(_), [B, V] = import_react.useState(null), H = import_react.useRef(null), U = useComposedRefs(g, H, F.onContentChange), W = import_react.useRef(0), G = import_react.useRef(""), K = import_react.useRef(0), q = import_react.useRef(null), J = import_react.useRef("right"), Y = import_react.useRef(0), X = N ? Combination_default : import_react.Fragment, Z = N ? {
		as: Slot,
		allowPinchZoom: !0
	} : void 0, Q = (e) => {
		let g = G.current + e, _ = z().filter((e) => !e.disabled), v = document.activeElement, y = _.find((e) => e.ref.current === v)?.textValue, b = getNextMatch(_.map((e) => e.textValue), g, y), x = _.find((e) => e.textValue === b)?.ref.current;
		(function e(g) {
			G.current = g, window.clearTimeout(W.current), g !== "" && (W.current = window.setTimeout(() => e(""), 1e3));
		})(g), x && setTimeout(() => x.focus());
	};
	import_react.useEffect(() => () => window.clearTimeout(W.current), []), useFocusGuards();
	let $ = import_react.useCallback((e) => J.current === q.current?.side && isPointerInGraceArea(e, q.current?.area), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuContentProvider, {
		scope: _,
		searchRef: G,
		onItemEnter: import_react.useCallback((e) => {
			$(e) && e.preventDefault();
		}, [$]),
		onItemLeave: import_react.useCallback((e) => {
			$(e) || (H.current?.focus(), V(null));
		}, [$]),
		onTriggerLeave: import_react.useCallback((e) => {
			$(e) && e.preventDefault();
		}, [$]),
		pointerGraceTimerRef: K,
		onPointerGraceIntentChange: import_react.useCallback((e) => {
			q.current = e;
		}, []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
			...Z,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
				asChild: !0,
				trapped: b,
				onMountAutoFocus: composeEventHandlers(x, (e) => {
					e.preventDefault(), H.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: S,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: C,
					onEscapeKeyDown: E,
					onPointerDownOutside: D,
					onFocusOutside: O,
					onInteractOutside: A,
					onDismiss: M,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
						asChild: !0,
						...R,
						dir: I.dir,
						orientation: "vertical",
						loop: y,
						currentTabStopId: B,
						onCurrentTabStopIdChange: V,
						onEntryFocus: composeEventHandlers(T, (e) => {
							I.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": getOpenState(F.open),
							"data-radix-menu-content": "",
							dir: I.dir,
							...L,
							...P,
							ref: U,
							style: {
								outline: "none",
								...P.style
							},
							onKeyDown: composeEventHandlers(P.onKeyDown, (e) => {
								let g = e.target.closest("[data-radix-menu-content]") === e.currentTarget, _ = e.ctrlKey || e.altKey || e.metaKey, v = e.key.length === 1;
								g && (e.key === "Tab" && e.preventDefault(), !_ && v && Q(e.key));
								let y = H.current;
								if (e.target !== y || !FIRST_LAST_KEYS.includes(e.key)) return;
								e.preventDefault();
								let b = z().filter((e) => !e.disabled).map((e) => e.ref.current);
								LAST_KEYS.includes(e.key) && b.reverse(), focusFirst(b);
							}),
							onBlur: composeEventHandlers(e.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(W.current), G.current = "");
							}),
							onPointerMove: composeEventHandlers(e.onPointerMove, whenMouse((e) => {
								let g = e.target, _ = Y.current !== e.clientX;
								e.currentTarget.contains(g) && _ && (J.current = e.clientX > Y.current ? "right" : "left", Y.current = e.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
MenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "MenuGroup", MenuGroup = import_react.forwardRef((e, g) => {
	let { __scopeMenu: _, ...v } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		role: "group",
		...v,
		ref: g
	});
});
MenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "MenuLabel", MenuLabel = import_react.forwardRef((e, g) => {
	let { __scopeMenu: _, ...v } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		...v,
		ref: g
	});
});
MenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "MenuItem", ITEM_SELECT = "menu.itemSelect", MenuItem = import_react.forwardRef((e, g) => {
	let { disabled: _ = !1, onSelect: y, ...x } = e, S = import_react.useRef(null), C = useMenuRootContext(ITEM_NAME, e.__scopeMenu), T = useMenuContentContext(ITEM_NAME, e.__scopeMenu), E = useComposedRefs(g, S), D = import_react.useRef(!1), O = () => {
		let e = S.current;
		if (!_ && e) {
			let g = new CustomEvent(ITEM_SELECT, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(ITEM_SELECT, (e) => y?.(e), { once: !0 }), dispatchDiscreteCustomEvent(e, g), g.defaultPrevented ? D.current = !1 : C.onClose();
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItemImpl, {
		...x,
		ref: E,
		disabled: _,
		onClick: composeEventHandlers(e.onClick, O),
		onPointerDown: (g) => {
			e.onPointerDown?.(g), D.current = !0;
		},
		onPointerUp: composeEventHandlers(e.onPointerUp, (e) => {
			D.current || e.currentTarget?.click();
		}),
		onKeyDown: composeEventHandlers(e.onKeyDown, (e) => {
			_ || e.target !== e.currentTarget || T.searchRef.current !== "" && e.key === " " || SELECTION_KEYS.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
MenuItem.displayName = ITEM_NAME;
var MenuItemImpl = import_react.forwardRef((e, g) => {
	let { __scopeMenu: _, disabled: y = !1, textValue: b, ...S } = e, C = useMenuContentContext(ITEM_NAME, _), T = useRovingFocusGroupScope(_), E = import_react.useRef(null), D = useComposedRefs(g, E), [O, k] = import_react.useState(!1), [A, j] = import_react.useState("");
	return import_react.useEffect(() => {
		let e = E.current;
		e && j((e.textContent ?? "").trim());
	}, [S.children]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
		scope: _,
		disabled: y,
		textValue: b ?? A,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
			asChild: !0,
			...T,
			focusable: !y,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				role: "menuitem",
				"data-highlighted": O ? "" : void 0,
				"aria-disabled": y || void 0,
				"data-disabled": y ? "" : void 0,
				...S,
				ref: D,
				onPointerMove: composeEventHandlers(e.onPointerMove, whenMouse((e) => {
					y ? C.onItemLeave(e) : (C.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: composeEventHandlers(e.onPointerLeave, whenMouse((e) => C.onItemLeave(e))),
				onFocus: composeEventHandlers(e.onFocus, () => k(!0)),
				onBlur: composeEventHandlers(e.onBlur, () => k(!1))
			})
		})
	});
}), CHECKBOX_ITEM_NAME = "MenuCheckboxItem", MenuCheckboxItem = import_react.forwardRef((e, g) => {
	let { checked: _ = !1, onCheckedChange: v, ...y } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicatorProvider, {
		scope: e.__scopeMenu,
		checked: _,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
			role: "menuitemcheckbox",
			"aria-checked": isIndeterminate(_) ? "mixed" : _,
			...y,
			ref: g,
			"data-state": getCheckedState(_),
			onSelect: composeEventHandlers(y.onSelect, () => v?.(isIndeterminate(_) ? !0 : !_), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "MenuRadioGroup", [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME, {
	value: void 0,
	onValueChange: () => {}
}), MenuRadioGroup = import_react.forwardRef((e, g) => {
	let { value: _, onValueChange: v, ...y } = e, b = useCallbackRef(v);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupProvider, {
		scope: e.__scopeMenu,
		value: _,
		onValueChange: b,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuGroup, {
			...y,
			ref: g
		})
	});
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "MenuRadioItem", MenuRadioItem = import_react.forwardRef((e, g) => {
	let { value: _, ...v } = e, y = useRadioGroupContext(RADIO_ITEM_NAME, e.__scopeMenu), b = _ === y.value;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicatorProvider, {
		scope: e.__scopeMenu,
		checked: b,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
			role: "menuitemradio",
			"aria-checked": b,
			...v,
			ref: g,
			"data-state": getCheckedState(b),
			onSelect: composeEventHandlers(v.onSelect, () => y.onValueChange?.(_), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuRadioItem.displayName = RADIO_ITEM_NAME;
var ITEM_INDICATOR_NAME = "MenuItemIndicator", [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME, { checked: !1 }), MenuItemIndicator = import_react.forwardRef((e, g) => {
	let { __scopeMenu: _, forceMount: v, ...y } = e, b = useItemIndicatorContext(ITEM_INDICATOR_NAME, _);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: v || isIndeterminate(b.checked) || b.checked === !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
			...y,
			ref: g,
			"data-state": getCheckedState(b.checked)
		})
	});
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME = "MenuSeparator", MenuSeparator = import_react.forwardRef((e, g) => {
	let { __scopeMenu: _, ...v } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...v,
		ref: g
	});
});
MenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "MenuArrow", MenuArrow = import_react.forwardRef((e, g) => {
	let { __scopeMenu: _, ...v } = e, y = usePopperScope(_);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
		...y,
		...v,
		ref: g
	});
});
MenuArrow.displayName = ARROW_NAME;
var SUB_NAME = "MenuSub", [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME), MenuSub = (e) => {
	let { __scopeMenu: g, children: _, open: v = !1, onOpenChange: y } = e, b = useMenuContext(SUB_NAME, g), x = usePopperScope(g), [S, C] = import_react.useState(null), [w, T] = import_react.useState(null), D = useCallbackRef(y);
	return import_react.useEffect(() => (b.open === !1 && D(!1), () => D(!1)), [b.open, D]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		...x,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuProvider, {
			scope: g,
			open: v,
			onOpenChange: D,
			content: w,
			onContentChange: T,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSubProvider, {
				scope: g,
				contentId: useId(),
				triggerId: useId(),
				trigger: S,
				onTriggerChange: C,
				children: _
			})
		})
	});
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "MenuSubTrigger", MenuSubTrigger = import_react.forwardRef((e, g) => {
	let _ = useMenuContext(SUB_TRIGGER_NAME, e.__scopeMenu), y = useMenuRootContext(SUB_TRIGGER_NAME, e.__scopeMenu), b = useMenuSubContext(SUB_TRIGGER_NAME, e.__scopeMenu), x = useMenuContentContext(SUB_TRIGGER_NAME, e.__scopeMenu), S = import_react.useRef(null), { pointerGraceTimerRef: C, onPointerGraceIntentChange: T } = x, E = { __scopeMenu: e.__scopeMenu }, D = import_react.useCallback(() => {
		S.current && window.clearTimeout(S.current), S.current = null;
	}, []);
	import_react.useEffect(() => D, [D]), import_react.useEffect(() => {
		let e = C.current;
		return () => {
			window.clearTimeout(e), T(null);
		};
	}, [C, T]);
	let O = useComposedRefs(g, b.onTriggerChange);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuAnchor, {
		asChild: !0,
		...E,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItemImpl, {
			id: b.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": _.open,
			"aria-controls": _.open ? b.contentId : void 0,
			"data-state": getOpenState(_.open),
			...e,
			ref: O,
			onClick: (g) => {
				e.onClick?.(g), !(e.disabled || g.defaultPrevented) && (g.currentTarget.focus(), _.open || _.onOpenChange(!0));
			},
			onPointerMove: composeEventHandlers(e.onPointerMove, whenMouse((g) => {
				x.onItemEnter(g), !g.defaultPrevented && !e.disabled && !_.open && !S.current && (x.onPointerGraceIntentChange(null), S.current = window.setTimeout(() => {
					_.onOpenChange(!0), D();
				}, 100));
			})),
			onPointerLeave: composeEventHandlers(e.onPointerLeave, whenMouse((e) => {
				D();
				let g = _.content?.getBoundingClientRect();
				if (g) {
					let v = _.content?.dataset.side, y = v === "right", b = y ? -5 : 5, S = g[y ? "left" : "right"], w = g[y ? "right" : "left"];
					x.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + b,
								y: e.clientY
							},
							{
								x: S,
								y: g.top
							},
							{
								x: w,
								y: g.top
							},
							{
								x: w,
								y: g.bottom
							},
							{
								x: S,
								y: g.bottom
							}
						],
						side: v
					}), window.clearTimeout(C.current), C.current = window.setTimeout(() => x.onPointerGraceIntentChange(null), 300);
				} else {
					if (x.onTriggerLeave(e), e.defaultPrevented) return;
					x.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: composeEventHandlers(e.onKeyDown, (g) => {
				e.disabled || g.target !== g.currentTarget || x.searchRef.current !== "" && g.key === " " || SUB_OPEN_KEYS[y.dir].includes(g.key) && (_.onOpenChange(!0), _.content?.focus(), g.preventDefault());
			})
		})
	});
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "MenuSubContent", MenuSubContent = import_react.forwardRef((e, g) => {
	let _ = usePortalContext(CONTENT_NAME, e.__scopeMenu), { forceMount: y = _.forceMount, align: b = "start", ...x } = e, S = useMenuContext(CONTENT_NAME, e.__scopeMenu), C = useMenuRootContext(CONTENT_NAME, e.__scopeMenu), E = useMenuSubContext(SUB_CONTENT_NAME, e.__scopeMenu), D = import_react.useRef(null), O = useComposedRefs(g, D);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: y || S.open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuContentImpl, {
					id: E.contentId,
					"aria-labelledby": E.triggerId,
					...x,
					ref: O,
					align: b,
					side: C.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						C.isUsingKeyboardRef.current && D.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: composeEventHandlers(e.onFocusOutside, (e) => {
						e.target !== E.trigger && S.onOpenChange(!1);
					}),
					onEscapeKeyDown: composeEventHandlers(e.onEscapeKeyDown, (e) => {
						C.onClose(), e.preventDefault();
					}),
					onKeyDown: composeEventHandlers(e.onKeyDown, (e) => {
						let g = e.currentTarget.contains(e.target), _ = SUB_CLOSE_KEYS[C.dir].includes(e.key);
						g && _ && (S.onOpenChange(!1), E.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
MenuSubContent.displayName = SUB_CONTENT_NAME;
function getOpenState(e) {
	return e ? "open" : "closed";
}
function isIndeterminate(e) {
	return e === "indeterminate";
}
function getCheckedState(e) {
	return isIndeterminate(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function focusFirst(e) {
	let g = document.activeElement;
	for (let _ of e) if (_ === g || (_.focus(), document.activeElement !== g)) return;
}
function wrapArray(e, g) {
	return e.map((_, v) => e[(g + v) % e.length]);
}
function getNextMatch(e, g, _) {
	let v = g.length > 1 && Array.from(g).every((e) => e === g[0]) ? g[0] : g, y = _ ? e.indexOf(_) : -1, b = wrapArray(e, Math.max(y, 0));
	v.length === 1 && (b = b.filter((e) => e !== _));
	let x = b.find((e) => e.toLowerCase().startsWith(v.toLowerCase()));
	return x === _ ? void 0 : x;
}
function isPointInPolygon(e, g) {
	let { x: _, y: v } = e, y = !1;
	for (let e = 0, b = g.length - 1; e < g.length; b = e++) {
		let x = g[e], S = g[b], C = x.x, w = x.y, T = S.x, E = S.y;
		w > v != E > v && _ < (T - C) * (v - w) / (E - w) + C && (y = !y);
	}
	return y;
}
function isPointerInGraceArea(e, g) {
	return g ? isPointInPolygon({
		x: e.clientX,
		y: e.clientY
	}, g) : !1;
}
function whenMouse(e) {
	return (g) => g.pointerType === "mouse" ? e(g) : void 0;
}
var Root3 = Menu, Anchor2 = MenuAnchor, Portal$1 = MenuPortal, Content2 = MenuContent, Group = MenuGroup, Label = MenuLabel, Item2 = MenuItem, CheckboxItem = MenuCheckboxItem, RadioGroup = MenuRadioGroup, RadioItem = MenuRadioItem, ItemIndicator = MenuItemIndicator, Separator = MenuSeparator, Arrow2 = MenuArrow, Sub = MenuSub, SubTrigger = MenuSubTrigger, SubContent = MenuSubContent;
export { createMenuScope as _, Group as a, Label as c, RadioItem as d, Root3 as f, SubTrigger as g, SubContent as h, Content2 as i, Portal$1 as l, Sub as m, Arrow2 as n, Item2 as o, Separator as p, CheckboxItem as r, ItemIndicator as s, Anchor2 as t, RadioGroup as u };
