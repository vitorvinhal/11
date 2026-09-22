import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as CircleAlert } from "./circle-alert-xAjxBVzK.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as Plus } from "./plus-DZ00_r0s.js";
import { t as ShieldCheck } from "./shield-check-BRmwlPnk.js";
import { ai as removeMobilePairingCustomAddress, ii as normalizeMobilePairingCustomAddresses, ni as addMobilePairingCustomAddress, oi as parseManualNetworkAddress, ri as normalizeMobilePairingCustomAddress, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Label } from "./label-CA70r2No.js";
import { a as PopoverTrigger, i as PopoverContent, t as Popover } from "./popover-DHL-338i.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { t as isTailnetIPv4Address } from "./tailnet-address-BDtXyCFm.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { t as Badge } from "./badge-D7sahA2a.js";
import { i as CommandGroup, o as CommandItem, s as CommandList, t as Command } from "./command-QScw0gM9.js";
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function IosBrandIcon({ className: r } = {}) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: r ?? "mp-platform-brand-icon",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		focusable: "false",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" })
	});
}
function AndroidLogo({ className: r } = {}) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: r ?? "mp-platform-brand-icon",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		focusable: "false",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z" })
	});
}
var import_react = /* @__PURE__ */ __toESM(require_react());
function CustomAddressDialog({ open: r, onOpenChange: a, initialValue: o, validate: c, copy: l, inputId: u, onConfirm: d }) {
	let [f, m] = (0, import_react.useState)(o ?? ""), [h, g] = (0, import_react.useState)(!1), [_, v] = (0, import_react.useState)(!1);
	(0, import_react.useEffect)(() => {
		r && m(o ?? "");
	}, [r, o]);
	let y = () => {
		g(!1), v(!1), a(!1);
	}, b = (r) => {
		r ? a(!0) : h || y();
	}, x = c(f), S = f.trim() !== "" && !x.ok, C = async () => {
		if (!(!x.ok || h)) {
			g(!0), v(!1);
			try {
				await d(x.value) === !1 ? v(!0) : y();
			} catch {
				v(!0);
			} finally {
				g(!1);
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: r,
		onOpenChange: b,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: l.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: l.description })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: u,
							children: l.inputLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: u,
							autoFocus: !0,
							value: f,
							disabled: h,
							"aria-invalid": S,
							placeholder: l.placeholder,
							onChange: (r) => {
								m(r.target.value), v(!1);
							},
							onKeyDown: (r) => {
								r.key === "Enter" && (r.preventDefault(), C());
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: l.hint
						}),
						_ ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-destructive",
							role: "alert",
							children: l.confirmationError ?? l.hint
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					disabled: h,
					onClick: y,
					children: l.cancel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					disabled: !x.ok || h,
					onClick: () => void C(),
					children: [h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						className: "size-4 animate-spin",
						"aria-hidden": !0
					}) : null, l.confirm]
				})] })
			]
		})
	});
}
var EMPTY_ADDRESS_OPTIONS = [];
function AddressPickerItem({ option: r, selected: a, commandValue: o, onSelect: l, onRemove: d, removeLabel: f }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
			value: o,
			onSelect: l,
			"data-current": a ? "true" : void 0,
			className: cn("peer min-w-0", d && "pr-8", a && "bg-accent"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: cn("size-3.5 shrink-0", !a && "invisible"),
				"aria-hidden": !0
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1 truncate",
				children: r.label
			})]
		}), d ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon-xs",
				"aria-label": f,
				onKeyDown: (r) => {
					(r.key === "Enter" || r.key === " ") && r.stopPropagation();
				},
				onClick: (r) => {
					r.stopPropagation(), d();
				},
				className: "absolute top-1/2 right-1 -translate-y-1/2 text-muted-foreground opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 peer-data-[selected=true]:opacity-100 hover:text-destructive focus-visible:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": !0 })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
			side: "top",
			sideOffset: 4,
			children: f
		})] }) : null]
	});
}
function AddressPicker({ options: r, customOptions: a = EMPTY_ADDRESS_OPTIONS, value: o, valueIsCustom: l, onValueChange: u, onCustomValueChange: f, onCustomRemove: p, beforeCustomConfirm: h, formatCustomLabel: g, addCustomLabel: _, customSectionLabel: v, removeCustomLabel: y, customDialogCopy: b, validateCustom: x, customInputId: S, placeholder: C, triggerAriaLabel: w, disabled: O = !1, className: k, id: A }) {
	let [j, M] = (0, import_react.useState)(!1), [N, P] = (0, import_react.useState)(!1), [F, I] = (0, import_react.useState)(""), [L, R] = (0, import_react.useState)(), z = (0, import_react.useRef)(null), B = (0, import_react.useRef)(!1), V = (0, import_react.useRef)({
		query: "",
		updatedAt: 0
	}), H = (0, import_react.useCallback)((r) => {
		z.current = r, R(r?.id);
	}, []), U = o !== void 0 && o !== "" && (l ?? !r.some((r) => r.value === o)), W = (0, import_react.useMemo)(() => !U || o === void 0 || a.some((r) => r.value === o) ? a : [...a, {
		value: o,
		label: g(o)
	}], [
		a,
		g,
		U,
		o
	]), G = (U ? W.find((r) => r.value === o) : r.find((r) => r.value === o)) ?? W.find((r) => r.value === o), K = o ? `${U ? "custom" : "detected"}:${o}` : "", q = f ?? u, J = K || (r[0] ? `detected:${r[0].value}` : W[0] ? `custom:${W[0].value}` : "add-custom-address");
	(0, import_react.useEffect)(() => {
		j && (F === "add-custom-address" || r.some((r) => F === `detected:${r.value}`) || W.some((r) => F === `custom:${r.value}`) || I(J));
	}, [
		F,
		W,
		J,
		r,
		j
	]), (0, import_react.useEffect)(() => {
		!j || !B.current || (B.current = !1, z.current?.focus());
	}, [W, j]), (0, import_react.useEffect)(() => {
		if (!j) return;
		let r = window.requestAnimationFrame(() => {
			let r = z.current, a = r?.querySelector("[cmdk-item][aria-selected=\"true\"]");
			r && a?.id && r.setAttribute("aria-activedescendant", a.id);
		});
		return () => window.cancelAnimationFrame(r);
	}, [
		F,
		W,
		r,
		j
	]);
	let Y = (r) => {
		V.current = {
			query: "",
			updatedAt: 0
		}, r && I(J), M(r);
	}, Z = (a) => {
		if (a.key === " ") {
			a.preventDefault(), z.current?.querySelector("[cmdk-item][aria-selected=\"true\"]")?.click();
			return;
		}
		if (a.key.length !== 1 || a.altKey || a.ctrlKey || a.metaKey || a.nativeEvent.isComposing) return;
		a.preventDefault();
		let o = Date.now(), s = V.current, c = o - s.updatedAt > 700 ? a.key : s.query + a.key;
		V.current = {
			query: c,
			updatedAt: o
		};
		let l = ([...c].every((r) => r === c[0]) ? a.key : c).toLocaleLowerCase(), u = [
			...r.map((r) => ({
				command: `detected:${r.value}`,
				label: r.label
			})),
			...W.map((r) => ({
				command: `custom:${r.value}`,
				label: r.label
			})),
			{
				command: "add-custom-address",
				label: _
			}
		], d = u.findIndex((r) => r.command === F), f = [...u.slice(d + 1), ...u.slice(0, d + 1)].find((r) => r.label.toLocaleLowerCase().startsWith(l));
		f && I(f.command);
	}, Q = (r, a) => {
		M(!1), a ? q(r) : u(r);
	}, $ = async (r) => h && !await h(r) ? !1 : (q(r), !0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
		open: j,
		onOpenChange: Y,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				id: A,
				type: "button",
				variant: "outline",
				size: "sm",
				role: "combobox",
				"aria-controls": j ? L : void 0,
				"aria-expanded": j,
				"aria-label": w,
				disabled: O,
				className: cn("w-fit min-w-0 justify-between px-3 font-normal", k),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-0 flex-1 truncate text-left",
					children: G?.label ?? C
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: "size-4 shrink-0 text-muted-foreground",
					"aria-hidden": !0
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
			align: "start",
			sideOffset: 4,
			className: "w-[var(--radix-popover-trigger-width)] min-w-[14rem] p-0",
			onOpenAutoFocus: (r) => {
				r.preventDefault(), z.current?.focus();
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, {
				shouldFilter: !1,
				loop: !0,
				value: F,
				onValueChange: I,
				onKeyDown: Z,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, {
					ref: H,
					label: w,
					className: "max-h-72 py-1",
					children: [
						r.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, { children: r.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddressPickerItem, {
							option: r,
							selected: !U && r.value === o,
							commandValue: `detected:${r.value}`,
							onSelect: () => Q(r.value, !1)
						}, r.value)) }) : null,
						W.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
							heading: v,
							className: cn(r.length > 0 && "border-t border-border pt-1"),
							children: W.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddressPickerItem, {
								option: r,
								selected: U && r.value === o,
								commandValue: `custom:${r.value}`,
								onSelect: () => Q(r.value, !0),
								onRemove: p ? () => {
									B.current = !0, p(r.value);
								} : void 0,
								removeLabel: y?.(r.value)
							}, r.value))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandGroup, {
							className: cn((r.length > 0 || W.length > 0) && "border-t border-border pt-1"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
								value: "add-custom-address",
								onSelect: () => {
									M(!1), P(!0);
								},
								className: "text-muted-foreground data-[selected=true]:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
									className: "size-3.5",
									"aria-hidden": !0
								}), _]
							})
						})
					]
				})
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomAddressDialog, {
		open: N,
		onOpenChange: P,
		initialValue: U ? o : void 0,
		validate: x,
		copy: b,
		inputId: S,
		onConfirm: $
	})] });
}
function formatCustomAddressLabel(r) {
	return translate("auto.components.mobile.NetworkInterfacePicker.custom-option", "{{address}} (custom)", { address: r });
}
function NetworkInterfacePicker({ networkInterfaces: r, customAddresses: a, selectedAddress: s, selectedAddressIsCustom: c, onSelectedAddressChange: l, onCustomAddressSelect: u, onCustomAddressRemove: d, beforeCustomAddressChange: f, disabled: p = !1, className: m, id: h }) {
	let g = (0, import_react.useMemo)(() => r.map((r) => ({
		value: r.address,
		label: `${r.address} (${r.name})`
	})), [r]), _ = (0, import_react.useMemo)(() => a.map((r) => ({
		value: r,
		label: formatCustomAddressLabel(r)
	})), [a]), v = g.length > 0 || _.length > 0 ? translate("auto.components.mobile.NetworkInterfacePicker.no-address-selected", "No address selected") : translate("auto.components.settings.MobileNetworkInterfaceSection.b2c384cfd6", "No interfaces found");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddressPicker, {
		options: g,
		customOptions: _,
		value: s,
		valueIsCustom: c,
		onValueChange: l,
		onCustomValueChange: u,
		onCustomRemove: d,
		beforeCustomConfirm: f,
		disabled: p,
		className: m,
		id: h,
		formatCustomLabel: formatCustomAddressLabel,
		customSectionLabel: translate("auto.components.mobile.NetworkInterfacePicker.custom-section", "Custom"),
		removeCustomLabel: (r) => translate("auto.components.mobile.NetworkInterfacePicker.remove-custom", "Remove {{address}}", { address: r }),
		addCustomLabel: translate("auto.components.mobile.NetworkInterfacePicker.add-custom", "Add custom address…"),
		placeholder: v,
		triggerAriaLabel: translate("auto.components.mobile.NetworkInterfacePicker.trigger-label", "Network address to advertise"),
		customInputId: "custom-network-address-input",
		validateCustom: (r) => {
			let a = parseManualNetworkAddress(r);
			return a.ok ? {
				ok: !0,
				value: a.address
			} : { ok: !1 };
		},
		customDialogCopy: {
			title: translate("auto.components.mobile.CustomNetworkAddressDialog.title", "Custom network address"),
			description: translate("auto.components.mobile.CustomNetworkAddressDialog.description", "Advertise an address your phone can reach — for example a Tailscale hostname, IP address, or reverse-proxy URL."),
			inputLabel: translate("auto.components.mobile.CustomNetworkAddressDialog.label", "Address"),
			placeholder: translate("auto.components.mobile.CustomNetworkAddressDialog.placeholder", "home.example.com:8443 or https://example.com/orca"),
			hint: translate("auto.components.mobile.CustomNetworkAddressDialog.hint", "Enter an IPv4/IPv6 address, hostname, or full HTTP(S)/WebSocket URL. Ports are optional."),
			cancel: translate("auto.components.mobile.CustomNetworkAddressDialog.cancel", "Cancel"),
			confirm: translate("auto.components.mobile.CustomNetworkAddressDialog.use", "Use address"),
			confirmationError: translate("auto.components.mobile.CustomNetworkAddressDialog.confirmationError", "This address could not produce a scannable pairing code. Check the address and try again.")
		}
	});
}
function useOrcaProfileAuthStatusRefresh() {
	let r = useAppStore((r) => r.fetchOrcaProfileAuthStatus);
	(0, import_react.useEffect)(() => {
		r();
	}, [r]);
}
function MobilePairingPathOption({ selected: r, onSelect: a, title: o, description: s, trailing: l, tabIndex: u, disabled: d = !1, positionInSet: f, setSize: p, optionRef: m }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: m,
		role: "radio",
		tabIndex: u,
		"aria-checked": r,
		"aria-disabled": d,
		"aria-posinset": f,
		"aria-setsize": p,
		onClick: d ? void 0 : a,
		onKeyDown: (r) => {
			d || (r.key === " " || r.key === "Enter") && (r.preventDefault(), a());
		},
		className: cn("flex cursor-pointer items-start gap-3 px-3 py-2.5 outline-none transition-colors", "focus-visible:bg-accent/50 focus-visible:ring-[3px] focus-visible:ring-ring/50", d && "cursor-not-allowed opacity-60", r ? "bg-accent/40" : "hover:bg-accent/20"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full border", r ? "border-foreground bg-foreground" : "border-muted-foreground/40"),
			"aria-hidden": !0,
			children: r ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-background" }) : null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium leading-none",
					children: o
				}), l]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: s
			})]
		})]
	});
}
function relayStatusLabel(r) {
	return r === "registered" ? translate("auto.components.settings.MobilePairingConnectionOptions.ready", "Ready") : r === "connecting" ? translate("auto.components.settings.MobilePairingConnectionOptions.connecting", "Connecting") : r === "standby" ? translate("auto.components.settings.MobilePairingConnectionOptions.available", "Available") : r === "draining" ? translate("auto.components.settings.MobilePairingConnectionOptions.reconnecting", "Reconnecting") : translate("auto.components.settings.MobilePairingConnectionOptions.unavailable", "Unavailable");
}
function relayCellLabel(r) {
	try {
		return new URL(r).host || null;
	} catch {
		return null;
	}
}
function MobilePairingConnectionOptions({ value: r, onChange: a, compact: l = !1, relayMintFailed: u = !1, relayMintRetrying: d = !1 }) {
	let f = useAppStore((r) => r.orcaProfileAuthStatus), p = useAppStore((r) => r.connectCurrentOrcaProfile), [m, h] = (0, import_react.useState)("offline"), [g, _] = (0, import_react.useState)(void 0), v = f?.state === "connected", y = f?.state === "reconnect-required", b = f?.configured !== !1, S = r === "automatic" && !v && b, C = !v && !b, w = d || C, T = (0, import_react.useRef)({
		automatic: null,
		"local-only": null
	}), E = (o) => {
		if (![
			"ArrowUp",
			"ArrowDown",
			"ArrowLeft",
			"ArrowRight"
		].includes(o.key)) return;
		let s = o.target;
		if (!(s instanceof HTMLElement) || s.getAttribute("role") !== "radio" || w && r !== "automatic") return;
		o.preventDefault();
		let c = w || r === "automatic" ? "local-only" : "automatic";
		a(c), T.current[c]?.focus();
	}, D = g ? relayCellLabel(g) : null;
	return useOrcaProfileAuthStatusRefresh(), (0, import_react.useEffect)(() => {
		let r = !1, a = !0, o = (r) => {
			h(r.status), _(r.cellUrl);
		}, s = window.api.mobile.onRelayStatusChanged((s) => {
			r = !0, a && o(s);
		});
		return window.api.mobile.getRelayStatus().then((s) => {
			a && !r && o(s);
		}).catch(() => {}), () => {
			a = !1, s();
		};
	}, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("space-y-2", l && "space-y-1.5"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "radiogroup",
			"aria-label": translate("auto.components.settings.MobilePairingConnectionOptions.pathGroup", "How the phone reaches this computer"),
			onKeyDown: E,
			className: "overflow-hidden rounded-md border border-border",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePairingPathOption, {
					selected: r === "automatic",
					tabIndex: r === "automatic" && !w ? 0 : -1,
					disabled: w,
					positionInSet: 1,
					setSize: 2,
					optionRef: (r) => {
						T.current.automatic = r;
					},
					onSelect: () => a("automatic"),
					title: translate("auto.components.settings.MobilePairingConnectionOptions.anywhereTitle", "Orca Relay"),
					description: C ? translate("auto.components.settings.MobilePairingConnectionOptions.relayUnavailable", "Orca Relay isn’t available in this build. Use LAN.") : translate("auto.components.settings.MobilePairingConnectionOptions.anywhereDescription", "Phone can be on cellular or any Wi‑Fi. Sign-in required for Relay only."),
					trailing: C ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "text-[11px]",
						children: translate("auto.components.settings.MobilePairingConnectionOptions.unavailable", "Unavailable")
					}) : v && r === "automatic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "text-[11px]",
						children: d ? translate("auto.components.settings.MobilePairingConnectionOptions.retrying", "Retrying") : u ? translate("auto.components.settings.MobilePairingConnectionOptions.unavailable", "Unavailable") : relayStatusLabel(m)
					}) : null
				}),
				S ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onKeyDown: (r) => {
						[
							"ArrowUp",
							"ArrowDown",
							"ArrowLeft",
							"ArrowRight"
						].includes(r.key) && r.stopPropagation();
					},
					className: "flex flex-wrap items-center justify-between gap-2 border-t border-border/60 bg-accent/40 py-2.5 pl-10 pr-3",
					"data-testid": "anywhere-sign-in-panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "min-w-0 flex-1 text-xs text-muted-foreground",
						children: translate("auto.components.settings.MobilePairingConnectionOptions.signInRequired", "Relay only — LAN does not need an account.")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: "sm",
						className: "shrink-0",
						onClick: () => {
							a("automatic"), p();
						},
						children: y ? translate("auto.components.settings.MobilePairingConnectionOptions.signInAgain", "Sign in again for Relay") : translate("auto.components.settings.MobilePairingConnectionOptions.signIn", "Sign in for Relay")
					})]
				}) : null,
				r === "automatic" && D ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "border-t border-border/60 py-2 pl-10 pr-3 text-xs text-muted-foreground",
					"data-testid": "relay-cell-line",
					children: [translate("auto.components.settings.MobilePairingConnectionOptions.relayCell", "Relay cell"), `: ${D}`]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobilePairingPathOption, {
					selected: r === "local-only",
					tabIndex: r === "local-only" || w ? 0 : -1,
					positionInSet: 2,
					setSize: 2,
					optionRef: (r) => {
						T.current["local-only"] = r;
					},
					onSelect: () => a("local-only"),
					title: translate("auto.components.settings.MobilePairingConnectionOptions.localTitle", "LAN"),
					description: translate("auto.components.settings.MobilePairingConnectionOptions.localDescription", "Phone must be on this Wi‑Fi or connected through Tailscale. No account needed.")
				})
			]
		})
	});
}
function MobileRelayBetaNotice({ className: r }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-[11px] text-muted-foreground", r),
		children: translate("auto.components.settings.MobileRelayBetaNotice.notice", "Orca Relay is in beta.")
	});
}
function MobileRelayMintFailureNotice({ failure: r, onUseLan: a, onRetry: l, onCopyDiagnostics: u, className: d, compact: m = !1, busy: h = !1 }) {
	let g = r.stage === "provider_missing", _ = useAppStore((r) => r.orcaProfileAuthStatus?.state === "reconnect-required"), [v, y] = (0, import_react.useState)(!1);
	(0, import_react.useEffect)(() => {
		if (!h) {
			y(!1);
			return;
		}
		let r = window.setTimeout(() => y(!0), 200);
		return () => window.clearTimeout(r);
	}, [h]);
	let b = h && v, S = b ? translate("auto.components.mobile.MobileRelayMintFailureNotice.retryingTitle", "Retrying Orca Relay…") : g ? translate("auto.components.mobile.MobileRelayMintFailureNotice.unavailableTitle", "Orca Relay isn’t available on this desktop.") : _ ? translate("auto.components.mobile.MobileRelayMintFailureNotice.reconnectTitle", "Your Orca account session expired.") : translate("auto.components.mobile.MobileRelayMintFailureNotice.title", "Couldn’t create a Relay pairing code."), C = b ? translate("auto.components.mobile.MobileRelayMintFailureNotice.retryingBody", "Creating a new pairing code. This can take a moment over a remote connection.") : g ? translate("auto.components.mobile.MobileRelayMintFailureNotice.unavailableBody", "Use LAN to pair over Tailscale or the same Wi‑Fi.") : _ ? translate("auto.components.mobile.MobileRelayMintFailureNotice.reconnectBody", "Sign in again to use Orca Relay, or use LAN to pair over Tailscale or the same Wi‑Fi.") : translate("auto.components.mobile.MobileRelayMintFailureNotice.body", "Retry, or use LAN to pair over Tailscale or the same Wi‑Fi.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex w-full min-w-0 items-start gap-2 rounded-lg border p-3 text-xs", b ? "border-border bg-muted/40 text-foreground" : "border-destructive/30 bg-destructive/10 text-destructive", d),
		"data-testid": "relay-mint-failure-notice",
		children: [b ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
			className: "mt-0.5 size-3.5 shrink-0 animate-spin",
			"aria-hidden": !0
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
			className: "mt-0.5 size-3.5 shrink-0",
			"aria-hidden": !0
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1 space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "min-w-0",
				role: b ? "status" : "alert",
				"aria-live": b ? "polite" : "assertive",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: S
					}),
					" ",
					C
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: m ? "xs" : "sm",
						onClick: a,
						children: translate("auto.components.mobile.MobileRelayMintFailureNotice.useLan", "Use LAN")
					}),
					!g && !_ ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						size: m ? "xs" : "sm",
						variant: "outline",
						onClick: l,
						disabled: h,
						className: "w-28",
						children: [b ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : null, b ? translate("auto.components.mobile.MobileRelayMintFailureNotice.retrying", "Retrying…") : translate("auto.components.mobile.MobileRelayMintFailureNotice.retry", "Retry Relay")]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: m ? "xs" : "sm",
						variant: "ghost",
						onClick: u,
						children: translate("auto.components.mobile.MobileRelayMintFailureNotice.copyDiagnostics", "Copy diagnostics")
					})
				]
			})]
		})]
	});
}
function WindowsFirewallNotice({ pairingReady: r, address: a, usingRelay: u = !1, className: d }) {
	let [m, g] = (0, import_react.useState)(null), [_, v] = (0, import_react.useState)(!1), y = useMountedRef(), b = (0, import_react.useRef)(0), x = (0, import_react.useCallback)(async () => {
		let o = ++b.current;
		if (!r) return g(null), null;
		try {
			let r = await window.api.mobile.getWindowsFirewallStatus(a ? { address: a } : void 0);
			return y.current && b.current === o && g(r), r;
		} catch {
			return y.current && b.current === o && g(null), null;
		}
	}, [
		a,
		y,
		r
	]);
	if ((0, import_react.useEffect)(() => (x(), window.addEventListener("focus", x), () => window.removeEventListener("focus", x)), [x]), !m?.supported) return null;
	let S = m, C = S.networkCategory === "public", w = S.blockingRuleDetected;
	if (!r || S.networkCategory === "domain" || !C && (!S.privateFirewallEnabled || S.ruleAllowed && !w)) return null;
	async function T() {
		v(!0);
		try {
			let r = await window.api.mobile.repairWindowsFirewall();
			if (!y.current) return;
			if (r.ok) {
				let r = await x();
				if (!y.current) return;
				if (r?.supported && (!r.privateFirewallEnabled || r.ruleAllowed && !r.blockingRuleDetected && r.inspectionAvailable)) {
					toast.success(translate("auto.components.mobile.WindowsFirewallNotice.repair-success", "Windows Firewall now allows Orca Mobile on private networks"));
					return;
				}
				r || g(S), toast.error(translate("auto.components.mobile.WindowsFirewallNotice.repair-unverified", "Windows Firewall access could not be verified"));
				return;
			}
			r.reason !== "cancelled" && toast.error(translate("auto.components.mobile.WindowsFirewallNotice.repair-failed", "Could not update the Windows Firewall rules"));
		} catch {
			y.current && toast.error(translate("auto.components.mobile.WindowsFirewallNotice.repair-failed", "Could not update the Windows Firewall rules"));
		} finally {
			y.current && v(!1);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-lg border border-border bg-muted/40 p-3", d),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 size-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: C ? translate("auto.components.mobile.WindowsFirewallNotice.public-title", "Windows marks this network as public") : w ? translate("auto.components.mobile.WindowsFirewallNotice.blocked-title", "Windows may be blocking Orca Mobile") : translate("auto.components.mobile.WindowsFirewallNotice.missing-title", "Allow phone connections through Windows Firewall")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: C ? translate("auto.components.mobile.WindowsFirewallNotice.public-description", "Change this trusted Wi-Fi network to Private before allowing Orca Mobile connections.") : w ? translate("auto.components.mobile.WindowsFirewallNotice.blocked-description", "An existing inbound Block rule can override the pairing exception. Repair removes conflicting TCP rules for this Orca app, then allows port {{port}} on Private networks.", { port: S.port }) : translate("auto.components.mobile.WindowsFirewallNotice.missing-description", "Windows may block the pairing server. Add a rule for this Orca app and TCP port {{port}} on Private networks.", { port: S.port })
						}),
						u ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: translate("auto.components.mobile.WindowsFirewallNotice.relay-note", "Pairing still works over Orca Relay — allowing this only adds the faster local connection.")
						}) : null
					]
				}), C ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					size: "sm",
					variant: "outline",
					onClick: () => void window.api.mobile.openWindowsNetworkSettings(),
					children: translate("auto.components.mobile.WindowsFirewallNotice.open-settings", "Open network settings")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					size: "sm",
					onClick: () => void T(),
					disabled: _,
					children: [_ ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { "aria-hidden": "true" }), _ ? translate("auto.components.mobile.WindowsFirewallNotice.waiting", "Waiting for Windows…") : w ? translate("auto.components.mobile.WindowsFirewallNotice.repair", "Repair firewall access") : translate("auto.components.mobile.WindowsFirewallNotice.allow", "Allow phone connections")]
				})]
			})]
		})
	});
}
function resolveMobilePairingConnectionMode(r) {
	return r === "local-only" ? "local-only" : "automatic";
}
function canMintMobilePairingOffer(r) {
	return !(r.connectionMode === "automatic" && !r.signedIn);
}
function useMobilePairingConnectionMode() {
	let r = useAppStore((r) => r.settings?.mobilePairingConnectionMode), [a, o] = (0, import_react.useState)(() => resolveMobilePairingConnectionMode(r));
	return (0, import_react.useEffect)(() => {
		o(resolveMobilePairingConnectionMode(r));
	}, [r]), [a, o];
}
function shouldPollMobilePairingDevices({ deviceCountAtQr: r, currentDeviceCount: a, visibilityState: o, focused: s }) {
	return r !== null && a <= r && o === "visible" && s;
}
function useMobilePairingDevicePolling({ deviceCountAtQr: r, currentDeviceCount: a, loadDevices: o }) {
	(0, import_react.useEffect)(() => {
		if (r === null || a > r) return;
		let s = !1, c = !1, l = null, u = () => {
			l !== null && (window.clearTimeout(l), l = null);
		}, d = () => shouldPollMobilePairingDevices({
			deviceCountAtQr: r,
			currentDeviceCount: a,
			visibilityState: document.visibilityState,
			focused: document.hasFocus()
		}), f = () => {
			u(), !(s || !d()) && (l = window.setTimeout(() => {
				if (l = null, !(s || !d())) {
					if (c) {
						f();
						return;
					}
					c = !0, o().finally(() => {
						c = !1, f();
					});
				}
			}, 3e3));
		}, p = () => {
			if (!d()) {
				u();
				return;
			}
			c || (c = !0, o().finally(() => {
				c = !1, f();
			}));
		};
		return f(), window.addEventListener("focus", p), document.addEventListener("visibilitychange", p), () => {
			s = !0, u(), window.removeEventListener("focus", p), document.removeEventListener("visibilitychange", p);
		};
	}, [
		r,
		a,
		o
	]);
}
var VIRTUAL_BRIDGE_INTERFACE_PATTERN = /^(?:docker|br-|virbr|vmnet|vboxnet|veth|lxcbr|cni|flannel|cali|bridge)|VMware Network Adapter|VirtualBox Host-Only/i, HYPER_V_INTERFACE_PATTERN = /^vEthernet /i, HOST_LOCAL_HYPER_V_INTERFACE_PATTERN = /^vEthernet \((?:Default Switch|WSL(?: \(Hyper-V firewall\))?)\)$/i;
function isVirtualBridgeInterface(r, a) {
	return HOST_LOCAL_HYPER_V_INTERFACE_PATTERN.test(r) ? !0 : HYPER_V_INTERFACE_PATTERN.test(r) ? a !== !0 : VIRTUAL_BRIDGE_INTERFACE_PATTERN.test(r);
}
function selectAutoAdvertisedPairingAddress(r) {
	let a = r.filter((r) => !isVirtualBridgeInterface(r.name, r.hasDefaultRoute));
	return a.find((r) => isTailnetIPv4Address(r.address))?.address ?? a[0]?.address;
}
function selectRefreshedNetworkAddress(r, a, o = !1, s = !1) {
	if (a.length === 0) return o || s ? r : void 0;
	if (o) return r;
	let c = a.find((a) => a.address === r);
	return c && (s || !isVirtualBridgeInterface(c.name, c.hasDefaultRoute)) ? r : selectAutoAdvertisedPairingAddress(a);
}
function useMobilePairingCustomAddress() {
	return normalizeMobilePairingCustomAddress(useAppStore((r) => r.settings?.mobilePairingCustomAddress)) ?? void 0;
}
function useMobilePairingCustomAddresses() {
	let r = useAppStore((r) => r.settings?.mobilePairingCustomAddresses), a = useAppStore((r) => r.settings?.mobilePairingCustomAddress);
	return (0, import_react.useMemo)(() => {
		let o = normalizeMobilePairingCustomAddresses(r);
		return typeof a == "string" ? addMobilePairingCustomAddress(o, a) : o;
	}, [a, r]);
}
function haveSameAddresses(r, a) {
	return r.length === a.length && r.every((r, o) => r === a[o]);
}
function useMobilePairingAddressPreference(r) {
	let { networkInterfaces: a, onSelectionInvalidated: o } = r, s = useAppStore((r) => r.updateSettings), c = useMobilePairingCustomAddress(), l = useMobilePairingCustomAddresses(), [u, d] = (0, import_react.useState)(c), [f, p] = (0, import_react.useState)(c !== void 0), [m, h] = (0, import_react.useState)(l), _ = (0, import_react.useRef)(u), y = (0, import_react.useRef)(c !== void 0), b = (0, import_react.useRef)(c !== void 0), S = (0, import_react.useRef)(l), C = (0, import_react.useRef)(c), w = (0, import_react.useRef)([]), T = (0, import_react.useCallback)((r) => {
		let a = selectRefreshedNetworkAddress(_.current, r, y.current, b.current);
		if (a === _.current) return;
		let s = _.current !== void 0;
		_.current = a, y.current = !1, b.current = !1, d(a), p(!1), s && o({
			address: a,
			source: "refresh"
		});
	}, [o]), E = (0, import_react.useCallback)((r, a) => {
		let c = _.current !== r;
		if (!c && y.current === a && b.current) return;
		_.current = r, y.current = a, b.current = !0, d(r), p(a);
		let l = a ? r : void 0, u = w.current;
		if (l !== (u.length > 0 ? u.at(-1) : C.current)) if (u.push(l), l) {
			let r = addMobilePairingCustomAddress(S.current, l);
			S.current = r, h(r), s({
				mobilePairingCustomAddress: l,
				mobilePairingCustomAddresses: r
			});
		} else s({ mobilePairingCustomAddress: null });
		c && o({
			address: r,
			source: "user"
		});
	}, [o, s]), D = (0, import_react.useCallback)((r) => {
		E(r, !a.some((a) => a.address === r));
	}, [E, a]), O = (0, import_react.useCallback)((r) => E(r, !0), [E]), k = (0, import_react.useCallback)((r) => {
		let c = removeMobilePairingCustomAddress(S.current, r);
		if (haveSameAddresses(c, S.current)) return;
		if (S.current = c, h(c), !(y.current && _.current === r)) {
			s({ mobilePairingCustomAddresses: c });
			return;
		}
		let l = selectRefreshedNetworkAddress(void 0, a), u = _.current !== l;
		_.current = l, y.current = !1, b.current = !1, d(l), p(!1), w.current.push(void 0), s({
			mobilePairingCustomAddress: null,
			mobilePairingCustomAddresses: c
		}), u && o({
			address: l,
			source: "user"
		});
	}, [
		a,
		o,
		s
	]);
	return (0, import_react.useEffect)(() => {
		if (c === C.current) return;
		C.current = c;
		let r = w.current, s = r.indexOf(c);
		if (s !== -1) {
			r.splice(0, s + 1);
			return;
		}
		r.length = 0;
		let l = c ?? selectRefreshedNetworkAddress(void 0, a), u = _.current !== l;
		_.current = l, y.current = c !== void 0, b.current = c !== void 0, d(l), p(c !== void 0), u && o({
			address: l,
			source: "external"
		});
	}, [
		a,
		o,
		c
	]), (0, import_react.useEffect)(() => {
		w.current.length > 0 || haveSameAddresses(l, S.current) || (S.current = l, h(l));
	}, [l]), {
		selectedAddress: u,
		selectedAddressIsCustom: f,
		customAddresses: m,
		selectAddress: D,
		selectCustomAddress: O,
		removeCustomAddress: k,
		selectAddressAfterRefresh: T
	};
}
export { WindowsFirewallNotice as a, MobilePairingConnectionOptions as c, AddressPicker as d, AndroidLogo as f, canMintMobilePairingOffer as i, useOrcaProfileAuthStatusRefresh as l, useMobilePairingDevicePolling as n, MobileRelayMintFailureNotice as o, IosBrandIcon as p, useMobilePairingConnectionMode as r, MobileRelayBetaNotice as s, useMobilePairingAddressPreference as t, NetworkInterfacePicker as u };
