import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Checkbox } from "./checkbox-Daq-_tqE.js";
import { t as Label } from "./label-CA70r2No.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { i as parseHostAccessLink, n as translateRemotePairingEndpointKind, r as translateRemotePairingFailureDescription, t as translateHostAccessLinkError } from "./remote-pairing-copy-DKFvujw5.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { t as Badge } from "./badge-D7sahA2a.js";
import { a as SSH_CONFIG_HOST_RESULT_LIMIT, r as MAX_SSH_RELAY_GRACE_PERIOD_SECONDS } from "./ssh-types-B1wsSHlf.js";
import { a as getEditingTargetFromSshConfigHost, c as isRelayGracePeriodValid, n as EMPTY_FORM, o as getSshTargetDraftConnectionFields, r as applyParsedSshHostInput, s as hasAdvancedConnectionValues, t as SshHostAdvancedFields, u as parseRelayGracePeriodSeconds } from "./SshHostAdvancedFields-bK7pmZlt.js";
var Lightbulb = createLucideIcon("lightbulb", [
	["path", {
		d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
		key: "1gvzjb"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}]
]), import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), EMPTY_CONFIG_HOSTS = [];
function AddRemoteHostSshConfigPicker({ hosts: e = EMPTY_CONFIG_HOSTS, totalHostCount: t = 0, newHostCount: a = 0, matchesTruncated: o = !1, isLoading: s, isBulkImporting: c, resolvingAlias: l = null, loadError: d, onSelect: f, onQueryChange: p, onRetry: m, onBack: h, onAddAllToOrca: g }) {
	let [y, ue] = (0, import_react.useState)(""), x = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => () => {
		x.current && clearTimeout(x.current);
	}, []);
	let S = l != null, C = c || S, w = c || S, de = !s && !c && !S && d == null && a > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-1 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
				className: "text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerTitle", "Choose from ~/.ssh/config") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerDescription", "Pick a host to fill the form, or add every new host to Orca’s host list.") })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: y,
				onChange: (e) => {
					let t = e.target.value;
					ue(t), x.current && clearTimeout(x.current), x.current = setTimeout(() => p(t), 200);
				},
				placeholder: translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerFilter", "Filter hosts…"),
				autoFocus: !0,
				disabled: C,
				"aria-label": translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerFilter", "Filter hosts…")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scrollbar-sleek min-h-0 flex-1 overflow-y-auto rounded-md border border-border bg-card",
				children: d == null ? s && e.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 py-8 text-center text-sm text-muted-foreground",
					children: translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerLoading", "Reading ~/.ssh/config…")
				}) : e.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-3 py-8 text-center text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-foreground",
						children: t === 0 ? translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerEmpty", "No hosts in ~/.ssh/config") : translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerNoMatch", "No matching hosts")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: t === 0 ? translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerEmptyHint", "Add a Host entry there, or go back and type the details manually.") : translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerNoMatchHint", "Try another filter, or go back and type manually.")
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					"aria-label": translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerHostsLabel", "SSH config hosts"),
					"aria-busy": s || S,
					className: cn("divide-y divide-border/70", s && "opacity-60"),
					children: e.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: w || e.alreadyInOrca,
						className: cn("flex w-full items-start justify-between gap-3 px-3 py-2.5 text-left", "hover:bg-accent focus-visible:bg-accent focus-visible:outline-none", "disabled:cursor-not-allowed disabled:opacity-50"),
						onClick: () => f(e),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-sm font-medium",
									children: e.alias
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-xs text-muted-foreground",
									children: e.username ? `${e.username}@${e.hostname}:${e.port}` : `${e.hostname}:${e.port}`
								}),
								e.identityFile != null && e.identityFile !== "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 truncate font-mono text-[11px] text-muted-foreground/80",
									children: e.identityFile
								}) : null
							]
						}), l === e.alias ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 shrink-0 text-[10.5px] text-muted-foreground",
							children: translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerResolving", "Reading…")
						}) : e.alreadyInOrca ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "mt-0.5 shrink-0 border-emerald-500/40 text-[10.5px] text-emerald-400",
							children: translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerInOrca", "In Orca")
						}) : e.previouslyRemoved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "mt-0.5 shrink-0 text-[10.5px] text-muted-foreground",
							children: translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerPreviouslyRemoved", "Removed from Orca")
						}) : null]
					}) }, e.alias))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-3 py-8 text-center text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: d }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						size: "sm",
						className: "mt-3",
						onClick: m,
						disabled: s || c,
						children: translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerRetry", "Try again")
					})]
				})
			}),
			o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerMoreResults", "Showing the first {{value0}} matches. Narrow your filter to find more.", { value0: 100 })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 border-t border-border pt-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "secondary",
					disabled: !de,
					onClick: g,
					className: "w-full sm:w-auto",
					children: c ? translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerAddingAll", "Adding hosts…") : a > 0 ? translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerAddAll", "Add all {{value0}} to Orca", { value0: a }) : t > 0 ? translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerNoNewHosts", "No new hosts to add") : translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerAddAllEmpty", "Add all to Orca")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: h,
					disabled: c,
					className: "w-full sm:w-auto",
					children: translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerBack", "Back")
				})]
			})
		]
	});
}
function SshHostFields({ form: e, disabled: t, preferAdvancedOpen: r = !1, configIdentityAlias: i = null, onFormChange: a, onSubmit: o }) {
	let [s, c] = (0, import_react.useState)(r);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-3 sm:grid-cols-2",
		onSubmit: (e) => {
			e.preventDefault(), o();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "add-ssh-label",
					children: translate("auto.components.sidebar.AddRemoteHostDialog.label", "Label")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "add-ssh-label",
					value: e.label,
					disabled: t,
					onChange: (e) => a((t) => ({
						...t,
						label: e.target.value
					})),
					placeholder: translate("auto.components.sidebar.AddRemoteHostDialog.sshLabelPlaceholder", "Dev box")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "add-ssh-host",
					children: translate("auto.components.sidebar.AddRemoteHostDialog.sshHost", "Host or alias")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "add-ssh-host",
					value: e.host,
					disabled: t,
					autoFocus: !0,
					onBlur: () => a(applyParsedSshHostInput),
					onChange: (e) => a((t) => ({
						...t,
						host: e.target.value
					})),
					placeholder: translate("auto.components.sidebar.AddRemoteHostDialog.sshHostPlaceholder", "deploy@server:22")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "add-ssh-username",
					children: translate("auto.components.sidebar.AddRemoteHostDialog.username", "Username")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "add-ssh-username",
					value: e.username,
					disabled: t,
					onChange: (e) => a((t) => ({
						...t,
						username: e.target.value
					})),
					placeholder: translate("auto.components.sidebar.AddRemoteHostDialog.usernamePlaceholder", "deploy")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "add-ssh-port",
					children: translate("auto.components.sidebar.AddRemoteHostDialog.port", "Port")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "add-ssh-port",
					value: e.port,
					disabled: t,
					type: "number",
					min: 1,
					max: 65535,
					onChange: (e) => a((t) => ({
						...t,
						port: e.target.value
					})),
					placeholder: "22"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5 sm:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "add-ssh-identity-file",
						children: translate("auto.components.sidebar.AddRemoteHostDialog.identityFile", "Identity file")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "add-ssh-identity-file",
						value: e.identityFile,
						disabled: t,
						onChange: (e) => a((t) => ({
							...t,
							identityFile: e.target.value
						})),
						placeholder: translate("auto.components.sidebar.AddRemoteHostDialog.identityFilePlaceholder", "~/.ssh/id_ed25519 (optional)")
					}),
					i && e.identityFile.trim() === "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: translate("auto.components.sidebar.AddRemoteHostDialog.identityFileFromConfigHint", "Left empty on purpose: Orca uses every key ~/.ssh/config resolves for {{value0}}. Type a path to use just that key.", { value0: i })
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SshHostAdvancedFields, {
				open: s,
				onOpenChange: c,
				form: e,
				disabled: t,
				onFormChange: a
			})
		]
	});
}
function RemoteServerFields({ name: e, pairingCode: t, parsedLink: r, disabled: i, onNameChange: a, onPairingCodeChange: o, allowLoopback: s, onAllowLoopbackChange: d, onSubmit: p }) {
	let h = t.trim() !== "" && !r.ok, g = r.ok && r.value.endpointKind === "loopback" && !s, _ = h ? "add-server-pairing-code-error" : g ? "add-server-loopback-blocked" : "add-server-pairing-code-help";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-3",
		onSubmit: (e) => {
			e.preventDefault(), p();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "add-server-name",
					children: translate("auto.components.sidebar.AddRemoteHostDialog.serverName", "Name in Orca")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "add-server-name",
					value: e,
					disabled: i,
					autoFocus: !0,
					onChange: (e) => a(e.target.value),
					placeholder: translate("auto.components.sidebar.AddRemoteHostDialog.serverNamePlaceholder", "Dev box")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "add-server-pairing-code",
						children: translate("auto.components.sidebar.AddRemoteHostDialog.pairingCode", "Access link")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "add-server-pairing-code",
						"aria-invalid": h || g,
						"aria-describedby": _,
						value: t,
						disabled: i,
						onChange: (e) => o(e.target.value),
						placeholder: translate("auto.components.sidebar.AddRemoteHostDialog.pairingCodePlaceholder", "orca://pair?code=..."),
						className: "font-mono"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: "add-server-pairing-code-help",
						className: "text-xs text-muted-foreground",
						children: translate("auto.components.sidebar.AddRemoteHostDialog.pairingHelpSuffix", "Create this under Settings → Remote Orca Servers → Share this host on the other computer.")
					}),
					h ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: "add-server-pairing-code-error",
						role: "alert",
						className: "text-xs text-destructive",
						children: r.ok ? null : translateHostAccessLinkError(r.kind)
					}) : null
				]
			}),
			r.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1 rounded-md border border-border/60 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs font-medium",
						children: [translate("auto.components.sidebar.AddRemoteHostDialog.linkDestination", "Link destination"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							children: translateRemotePairingEndpointKind(r.value.endpointKind)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-sm",
						children: r.value.displayEndpoint
					}),
					r.value.endpointKind === "loopback" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-2 flex items-start gap-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							checked: s,
							disabled: i,
							onCheckedChange: (e) => d(e === !0)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium",
							children: translate("auto.components.sidebar.AddRemoteHostDialog.sshTunnel", "I am using an SSH tunnel")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: translate("auto.components.sidebar.AddRemoteHostDialog.sshTunnelHelp", "Otherwise, this link points back to this device and cannot identify the other computer.")
						})] })]
					}) : null
				]
			}) : null,
			g ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: "add-server-loopback-blocked",
				role: "alert",
				className: "text-xs text-destructive",
				children: translate("auto.components.sidebar.AddRemoteHostDialog.loopbackBlocked", "Enable the SSH tunnel override or create a new link using the other host’s Tailscale or LAN address.")
			}) : null
		]
	});
}
function AddRemoteHostSshFormPanel({ form: e, disabled: t, preferAdvancedOpen: i, configIdentityAlias: a, onFormChange: o, onSubmit: s, onCancel: c, onFillFromConfig: l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRemoteHostDialog.sshTitle", "Add SSH host") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.AddRemoteHostDialog.sshDescription", "Add a persistent machine you can log into over SSH.") })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SshHostFields, {
			form: e,
			disabled: t,
			preferAdvancedOpen: i,
			configIdentityAlias: a,
			onFormChange: o,
			onSubmit: s
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
			className: "sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "link",
				className: "h-auto self-center justify-start p-0 text-xs text-muted-foreground hover:text-foreground",
				onClick: l,
				disabled: t,
				children: translate("auto.components.sidebar.AddRemoteHostDialog.fillFromSshConfig", "Fill from ~/.ssh/config…")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: c,
					disabled: t,
					children: translate("auto.components.sidebar.AddRemoteHostDialog.cancel", "Cancel")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					onClick: s,
					disabled: t,
					children: t ? translate("auto.components.sidebar.AddRemoteHostDialog.saving", "Saving...") : translate("auto.components.sidebar.AddRemoteHostDialog.save", "Save")
				})]
			})]
		})
	] });
}
function AddRemoteHostServerFormPanel({ name: e, pairingCode: t, parsedLink: i, allowLoopback: a, disabled: o, canSubmit: s, onNameChange: c, onPairingCodeChange: l, onAllowLoopbackChange: u, onSubmit: d, onCancel: f }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRemoteHostDialog.serverTitle", "Add remote server") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.AddRemoteHostDialog.serverDescription", "Pair with Orca running on another computer.") })] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteServerFields, {
			name: e,
			pairingCode: t,
			parsedLink: i,
			disabled: o,
			onNameChange: c,
			onPairingCodeChange: l,
			allowLoopback: a,
			onAllowLoopbackChange: u,
			onSubmit: d
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
			className: "sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					onClick: f,
					disabled: o,
					children: translate("auto.components.sidebar.AddRemoteHostDialog.cancel", "Cancel")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					onClick: d,
					disabled: o || !s,
					children: o ? translate("auto.components.sidebar.AddRemoteHostDialog.saving", "Saving...") : translate("auto.components.sidebar.AddRemoteHostDialog.save", "Save")
				})]
			})]
		})
	] });
}
function normalizeSshConfigAlias(e) {
	return e ? e.trim().toLowerCase() : "";
}
function isDuplicateSshTargetAlias({ existingTargets: e, configHost: t, label: n, host: r }) {
	let i = normalizeSshConfigAlias(t) || normalizeSshConfigAlias(n) || normalizeSshConfigAlias(r);
	return i ? e.some((e) => getOccupiedAliases(e).includes(i)) : !1;
}
function getOccupiedAliases(e) {
	let t = [e.configHost, e.label].map(normalizeSshConfigAlias).filter(Boolean);
	return t.length > 0 ? t : [normalizeSshConfigAlias(e.host)].filter(Boolean);
}
async function saveNewSshHostFromForm({ form: e, ssh: t, recordSshRepoReadoptions: r, setSshTargetsMetadata: i, recordFeatureInteraction: a }) {
	let { host: o, configHost: s, username: c, port: l } = getSshTargetDraftConnectionFields(e);
	if (!o) return toast.error(translate("auto.components.sidebar.AddRemoteHostDialog.sshHostRequired", "Host or SSH config alias is required.")), "validation-failed";
	if (Number.isNaN(l) || l < 1 || l > 65535) return toast.error(translate("auto.components.sidebar.AddRemoteHostDialog.sshPortInvalid", "Port must be between 1 and 65535.")), "validation-failed";
	let u = parseRelayGracePeriodSeconds(e);
	if (!isRelayGracePeriodValid(e, u)) return toast.error(translate("auto.components.sidebar.AddRemoteHostDialog.sshRelayGraceInvalid", "Terminal timeout must be between 60 and {{value0}} seconds.", { value0: MAX_SSH_RELAY_GRACE_PERIOD_SECONDS })), "validation-failed";
	let d = e.identityFile.trim() || void 0, f = e.proxyCommand.trim() || void 0, p = e.jumpHost.trim() || void 0, m = e.systemSshConnectionReuse ? void 0 : !1, g = {
		label: e.label.trim() || (c ? `${c}@${o}` : s || o),
		configHost: s,
		host: o,
		port: l,
		username: c,
		...e.gssapiAuthentication ? { gssapiAuthentication: !0 } : {},
		relayGracePeriodSeconds: u,
		...d ? { identityFile: d } : {},
		...f ? { proxyCommand: f } : {},
		...p ? { jumpHost: p } : {},
		...m === !1 ? { systemSshConnectionReuse: m } : {}
	};
	try {
		return isDuplicateSshTargetAlias({
			existingTargets: await t.listTargets(),
			configHost: g.configHost,
			label: g.label,
			host: g.host
		}) ? (toast.error(translate("auto.components.sidebar.AddRemoteHostDialog.sshAlreadyExists", "That SSH host is already in Orca.")), "validation-failed") : (r((await t.addTarget({ target: g })).repoReadoptions), i(await t.listTargets()), a("ssh"), toast.success(translate("auto.components.sidebar.AddRemoteHostDialog.sshSaved", "SSH host added.")), "saved");
	} catch (e) {
		return toast.error(e instanceof Error ? e.message : translate("auto.components.sidebar.AddRemoteHostDialog.sshSaveFailed", "Failed to add SSH host.")), "failed";
	}
}
async function prefillFormFromSshConfigHost(e, t) {
	if (typeof t.resolveConfigHost != "function") throw Error(translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerRestartRequired", "Restart Orca to finish applying the SSH config picker update."));
	let r = await t.resolveConfigHost({ alias: e.alias });
	if (!r) return null;
	let i = getEditingTargetFromSshConfigHost(r);
	return {
		form: i,
		preferAdvancedOpen: hasAdvancedConnectionValues(i)
	};
}
async function addAllSshConfigHostsToOrca({ ssh: e, recordSshRepoReadoptions: t, setSshTargetsMetadata: r, recordFeatureInteraction: i }) {
	try {
		let a = await e.importConfig();
		return t(a.repoReadoptions), r(await e.listTargets()), i("ssh"), a.targets.length === 0 ? (toast(translate("auto.components.sidebar.AddRemoteHostDialog.sshImportAlreadySynced", "~/.ssh/config already in sync.")), { kind: "already-synced" }) : (toast.success(translate("auto.components.sidebar.AddRemoteHostDialog.sshImportSynced", "Added {{value0}} host{{value1}} to Orca.", {
			value0: a.targets.length,
			value1: a.targets.length > 1 ? "s" : ""
		})), {
			kind: "added",
			count: a.targets.length
		});
	} catch (e) {
		return toast.error(e instanceof Error ? e.message : translate("auto.components.sidebar.AddRemoteHostDialog.sshImportFailed", "Failed to import SSH config.")), { kind: "failed" };
	}
}
async function loadSshConfigHostsForPicker(e, t) {
	try {
		let n = normalizeSshConfigHostListResult(await e.listConfigHosts(t));
		if (!n) throw Error("Invalid SSH config host response");
		return {
			ok: !0,
			result: n
		};
	} catch (e) {
		return {
			ok: !1,
			error: e instanceof Error ? e.message : translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerLoadFailed", "Failed to read ~/.ssh/config.")
		};
	}
}
function normalizeSshConfigHostListResult(e) {
	if (Array.isArray(e)) {
		let t = e.slice(0, 100);
		return {
			hosts: t,
			totalHostCount: e.length,
			newHostCount: e.filter((e) => typeof e == "object" && !!e && e.alreadyInOrca === !1).length,
			matchCount: e.length,
			hasMore: e.length > t.length
		};
	}
	if (!e || typeof e != "object") return null;
	let t = e;
	return Array.isArray(t.hosts) && typeof t.totalHostCount == "number" && typeof t.newHostCount == "number" && typeof t.matchCount == "number" && typeof t.hasMore == "boolean" ? t : null;
}
function AddRemoteHostDialog({ mode: e, onOpenChange: t }) {
	let r = e !== null, [i, a] = (0, import_react.useState)(e ?? "ssh");
	e !== null && e !== i && a(e);
	let [s, c] = (0, import_react.useState)(EMPTY_FORM), [l, u] = (0, import_react.useState)("form"), [f, g] = (0, import_react.useState)([]), [_, v] = (0, import_react.useState)(0), [le, b] = (0, import_react.useState)(0), [x, S] = (0, import_react.useState)(!1), [C, w] = (0, import_react.useState)(!1), [T, E] = (0, import_react.useState)(null), [D, O] = (0, import_react.useState)(!1), [fe, k] = (0, import_react.useState)(null), [pe, A] = (0, import_react.useState)(!1), [j, M] = (0, import_react.useState)(null), [N, P] = (0, import_react.useState)(""), [F, I] = (0, import_react.useState)(""), [L, R] = (0, import_react.useState)(!1), [z, B] = (0, import_react.useState)(!1), V = (0, import_react.useRef)(0), H = (0, import_react.useRef)(""), U = (0, import_react.useRef)(0), W = (0, import_react.useMemo)(() => parseHostAccessLink(F), [F]), me = N.trim() !== "" && W.ok && (W.value.endpointKind !== "loopback" || L), G = useAppStore((e) => e.setSshTargetsMetadata), K = useAppStore((e) => e.recordSshRepoReadoptions), he = useAppStore((e) => e.setRuntimeEnvironments), ge = useAppStore((e) => e.readRuntimeHostStatusSnapshots), q = useAppStore((e) => e.recordFeatureInteraction), J = z || D || T !== null, Y = () => {
		U.current += 1, E(null);
	}, X = () => {
		c(EMPTY_FORM), u("form"), g([]), v(0), b(0), S(!1), k(null), H.current = "", Y(), A(!1), M(null), O(!1), P(""), I(""), R(!1);
	}, Z = () => {
		z || D || (X(), t(null));
	}, _e = async () => {
		B(!0);
		try {
			await saveNewSshHostFromForm({
				form: s,
				ssh: window.api.ssh,
				recordSshRepoReadoptions: K,
				setSshTargetsMetadata: G,
				recordFeatureInteraction: q
			}) === "saved" && (X(), t(null));
		} finally {
			B(!1);
		}
	}, Q = async (e = "", t) => {
		H.current = e;
		let n = V.current + 1;
		V.current = n, w(!0), k(null);
		let r = await loadSshConfigHostsForPicker(window.api.ssh, {
			query: e,
			...t?.refresh ? { refresh: !0 } : {}
		});
		n === V.current && (r.ok ? (g(r.result.hosts), v(r.result.totalHostCount), b(r.result.newHostCount), S(r.result.hasMore)) : (g([]), k(r.error)), w(!1));
	}, ve = async () => {
		u("config-picker"), await Q("", { refresh: !0 });
	}, ye = () => {
		Y(), u("form");
	}, be = async (e) => {
		let t = U.current + 1;
		U.current = t, E(e.alias);
		let r = () => t !== U.current, i;
		try {
			i = await prefillFormFromSshConfigHost(e, window.api.ssh);
		} catch (e) {
			if (r()) return;
			E(null), toast.error(e instanceof Error ? e.message : translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerResolveFailed", "Failed to resolve that SSH config host."));
			return;
		}
		if (r()) return;
		if (E(null), !i) {
			toast.error(translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerResolveFailed", "Failed to resolve that SSH config host."));
			return;
		}
		let { form: a, preferAdvancedOpen: o } = i;
		c(a), A(o), M(e.alias), u("form"), q("ssh"), toast.success(translate("auto.components.sidebar.AddRemoteHostDialog.sshConfigPickerFilled", "Filled from {{value0}}. Review and Save.", { value0: e.alias }));
	}, xe = async () => {
		O(!0);
		try {
			let e = await addAllSshConfigHostsToOrca({
				ssh: window.api.ssh,
				recordSshRepoReadoptions: K,
				setSshTargetsMetadata: G,
				recordFeatureInteraction: q
			});
			if (e.kind === "added") {
				X(), t(null);
				return;
			}
			e.kind === "already-synced" && await Q(H.current);
		} finally {
			O(!1);
		}
	}, Se = async () => {
		let e = N.trim(), r = F.trim();
		if (!e || !r) {
			toast.error(translate("auto.components.sidebar.AddRemoteHostDialog.serverFieldsRequired", "Server name and pairing code are required."));
			return;
		}
		if (!W.ok) {
			toast.error(translateHostAccessLinkError(W.kind));
			return;
		}
		if (W.value.endpointKind === "loopback" && !L) {
			toast.error(translate("auto.components.sidebar.AddRemoteHostDialog.loopbackBlocked", "Enable the SSH tunnel override or create a new link using the other host’s Tailscale or LAN address."));
			return;
		}
		B(!0);
		try {
			let i = await window.api.runtimeEnvironments.verifyAndAddFromPairingCode({
				name: e,
				pairingCode: r,
				allowLoopback: L
			});
			if (!i.ok) {
				toast.error(i.kind === "environment-save-failed" ? i.message : translateRemotePairingFailureDescription(i.kind, W.value.displayEndpoint));
				return;
			}
			he(await window.api.runtimeEnvironments.list()), await ge(), toast.success(translate("auto.components.sidebar.AddRemoteHostDialog.serverSaved", "Remote server added.")), X(), t(null);
		} catch (e) {
			toast.error(e instanceof Error ? e.message : translate("auto.components.sidebar.AddRemoteHostDialog.serverSaveFailed", "Failed to add remote server."));
		} finally {
			B(!1);
		}
	}, $ = i === "ssh" && l === "config-picker";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: r,
		onOpenChange: (e) => {
			e || Z();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: $ ? "flex max-h-[min(90vh,560px)] flex-col gap-0 overflow-hidden sm:max-w-xl" : "scrollbar-sleek max-h-[min(90vh,560px)] overflow-y-auto sm:max-w-xl",
			children: $ ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-0 flex-1 flex-col",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRemoteHostSshConfigPicker, {
					hosts: f,
					totalHostCount: _,
					newHostCount: le,
					matchesTruncated: x,
					isLoading: C,
					isBulkImporting: D,
					resolvingAlias: T,
					loadError: fe,
					onSelect: (e) => void be(e),
					onQueryChange: (e) => void Q(e),
					onRetry: () => void Q(H.current, { refresh: !0 }),
					onBack: ye,
					onAddAllToOrca: () => void xe()
				})
			}) : i === "ssh" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRemoteHostSshFormPanel, {
				form: s,
				disabled: J,
				preferAdvancedOpen: pe,
				configIdentityAlias: j,
				onFormChange: c,
				onSubmit: () => void _e(),
				onCancel: Z,
				onFillFromConfig: () => void ve()
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRemoteHostServerFormPanel, {
				name: N,
				pairingCode: F,
				parsedLink: W,
				allowLoopback: L,
				disabled: J,
				canSubmit: me,
				onNameChange: P,
				onPairingCodeChange: (e) => {
					I(e), R(!1);
				},
				onAllowLoopbackChange: R,
				onSubmit: () => void Se(),
				onCancel: Z
			})
		})
	});
}
export { Lightbulb as n, AddRemoteHostDialog as t };
