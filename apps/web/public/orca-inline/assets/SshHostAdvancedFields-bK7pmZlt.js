import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { n as CollapsibleContent, r as CollapsibleTrigger, t as Collapsible } from "./collapsible-L_K9-Scr.js";
import { t as Label } from "./label-CA70r2No.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { i as MIN_SSH_RELAY_GRACE_PERIOD_SECONDS, n as DEFAULT_SSH_RELAY_GRACE_PERIOD_SECONDS, r as MAX_SSH_RELAY_GRACE_PERIOD_SECONDS, t as DEFAULT_BOUNDED_SSH_RELAY_GRACE_PERIOD_SECONDS } from "./ssh-types-B1wsSHlf.js";
import { s as SettingsSwitch } from "./SettingsFormControls-Btf2QMz3.js";
const EMPTY_FORM = {
	label: "",
	configHost: "",
	host: "",
	port: "22",
	username: "",
	identityFile: "",
	gssapiAuthentication: !1,
	proxyCommand: "",
	jumpHost: "",
	systemSshConnectionReuse: !0,
	relayGracePeriodSeconds: String(DEFAULT_BOUNDED_SSH_RELAY_GRACE_PERIOD_SECONDS),
	relayKeepAliveUntilReset: !0
};
function getEditingTargetForSshTarget(l) {
	let D = l.configHost && l.configHost !== l.host ? l.configHost : "";
	return {
		label: l.label,
		configHost: D,
		host: l.host,
		port: String(l.port),
		username: l.username,
		identityFile: l.identityFile ?? "",
		gssapiAuthentication: l.gssapiAuthentication === !0,
		proxyCommand: l.proxyCommand ?? "",
		jumpHost: l.jumpHost ?? "",
		systemSshConnectionReuse: l.systemSshConnectionReuse !== !1,
		relayGracePeriodSeconds: String(l.relayGracePeriodSeconds === 0 ? DEFAULT_BOUNDED_SSH_RELAY_GRACE_PERIOD_SECONDS : l.relayGracePeriodSeconds ?? 86400),
		relayKeepAliveUntilReset: (l.relayGracePeriodSeconds ?? 0) === 0
	};
}
function getEditingTargetFromSshConfigHost(l) {
	let D = l.alias === l.hostname ? "" : l.alias;
	return {
		...EMPTY_FORM,
		label: l.alias,
		configHost: D,
		host: l.hostname,
		port: String(l.port),
		username: l.username,
		identityFile: "",
		gssapiAuthentication: l.gssapiAuthentication === !0,
		proxyCommand: l.proxyCommand ?? "",
		jumpHost: l.jumpHost ?? ""
	};
}
function parseSshHostInput(l) {
	let D = l.trim();
	if (!D) return null;
	if (/^ssh:\/\//i.test(D)) return parseSshUrl(D);
	let O = D.lastIndexOf("@"), k = O > 0 ? D.slice(0, O).trim() : void 0, A = parseHostAndOptionalPort(O > 0 ? D.slice(O + 1).trim() : D);
	return A.host ? {
		host: A.host,
		username: k,
		port: A.port,
		invalidPort: A.invalidPort,
		configHost: A.host
	} : null;
}
function applyParsedSshHostInput(l) {
	let D = parseSshHostInput(l.host);
	return !D || D.invalidPort ? l : {
		...l,
		host: D.host,
		configHost: l.configHost.trim() || D.configHost,
		username: l.username.trim() || D.username || "",
		port: D.port !== void 0 && isDefaultPortDraft(l.port) ? String(D.port) : l.port
	};
}
function getSshTargetDraftConnectionFields(l) {
	let D = parseSshHostInput(l.host), O = D?.host ?? l.host.trim(), k = l.configHost.trim() || D?.configHost || O, A = l.username.trim() || D?.username || "", j = Number.parseInt(l.port, 10);
	return {
		host: O,
		configHost: k,
		username: A,
		port: D?.invalidPort === !0 ? NaN : D?.port !== void 0 && isDefaultPortDraft(l.port) ? D.port : j
	};
}
function hasAdvancedConnectionValues(l) {
	return l.proxyCommand.trim().length > 0 || l.jumpHost.trim().length > 0 || !l.systemSshConnectionReuse;
}
function isSshTargetFormDirty(l, D) {
	return l.label !== D.label || l.configHost !== D.configHost || l.host !== D.host || l.port !== D.port || l.username !== D.username || l.identityFile !== D.identityFile || l.gssapiAuthentication !== D.gssapiAuthentication || l.proxyCommand !== D.proxyCommand || l.jumpHost !== D.jumpHost || l.systemSshConnectionReuse !== D.systemSshConnectionReuse || l.relayGracePeriodSeconds !== D.relayGracePeriodSeconds || l.relayKeepAliveUntilReset !== D.relayKeepAliveUntilReset;
}
function parseRelayGracePeriodSeconds(l) {
	return l.relayKeepAliveUntilReset ? 0 : Number.parseInt(l.relayGracePeriodSeconds, 10);
}
function isRelayGracePeriodValid(l, D) {
	return l.relayKeepAliveUntilReset || !Number.isNaN(D) && D >= 60 && D <= 604800;
}
function parseSshUrl(l) {
	try {
		let D = new URL(l);
		if (D.protocol !== "ssh:" || !D.hostname) return null;
		let O = D.hostname.replace(/^\[|\]$/g, ""), k = D.port ? parsePort(D.port) : void 0;
		return D.port && k === void 0 ? {
			host: O,
			username: decodeSshUrlUsername(D.username),
			configHost: O,
			invalidPort: !0
		} : {
			host: O,
			username: decodeSshUrlUsername(D.username),
			port: k,
			configHost: O
		};
	} catch {
		return parseSshUrlWithInvalidPort(l);
	}
}
function parseSshUrlWithInvalidPort(l) {
	let D = l.match(/^ssh:\/\/(?:([^@/?#]*)@)?(\[[^\]]+\]|[^:/?#]+):([^/?#]*)(?:[/?#]|$)/i);
	if (!D) return null;
	let O = D[2], k = O.startsWith("[") && O.endsWith("]") ? O.slice(1, -1) : O;
	return parsePort(D[3]) === void 0 ? {
		host: k,
		username: decodeSshUrlUsername(D[1] ?? ""),
		configHost: k,
		invalidPort: !0
	} : null;
}
function decodeSshUrlUsername(l) {
	if (l) try {
		return decodeURIComponent(l);
	} catch {
		return l;
	}
}
function parseHostAndOptionalPort(l) {
	if (l.startsWith("[")) {
		let D = l.indexOf("]");
		if (D > 1) {
			let O = l.slice(1, D), k = l.slice(D + 1);
			if (k.startsWith(":")) {
				let l = parsePort(k.slice(1));
				return l === void 0 ? {
					host: O,
					invalidPort: !0
				} : {
					host: O,
					port: l
				};
			}
			return { host: O };
		}
	}
	let D = l.indexOf(":");
	if (D !== -1 && D === l.lastIndexOf(":")) {
		let O = l.slice(0, D), k = parsePort(l.slice(D + 1));
		if (O) return k === void 0 ? {
			host: O,
			invalidPort: !0
		} : {
			host: O,
			port: k
		};
	}
	return { host: l };
}
function parsePort(l) {
	if (!/^\d+$/.test(l)) return;
	let D = Number(l);
	return isValidPort(D) ? D : void 0;
}
function isValidPort(l) {
	return Number.isInteger(l) && l >= 1 && l <= 65535;
}
function isDefaultPortDraft(l) {
	let D = l.trim();
	return D === "" || D === "22";
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function SshHostAdvancedFields({ open: l, onOpenChange: j, form: M, disabled: N, onFormChange: P }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Collapsible, {
		open: l,
		onOpenChange: j,
		className: "col-span-2 sm:col-span-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "ghost",
				size: "sm",
				className: "px-2 text-xs",
				children: [translate("auto.components.sidebar.AddRemoteHostDialog.advanced", "Advanced"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform", l && "rotate-180") })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent, {
			className: "collapsible-height-content",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "add-ssh-proxy-command",
								children: translate("auto.components.settings.SshTargetForm.c7d0e18ecb", "Proxy Command")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "add-ssh-proxy-command",
								value: M.proxyCommand,
								disabled: N,
								onChange: (l) => P((D) => ({
									...D,
									proxyCommand: l.target.value
								})),
								placeholder: translate("auto.components.settings.SshTargetForm.f42d844544", "e.g. cloudflared access ssh --hostname %h")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: translate("auto.components.settings.SshTargetForm.3b01ca44a0", "Optional. Used for tunneling (e.g. Cloudflare Access, ProxyCommand).")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "add-ssh-jump-host",
								children: translate("auto.components.settings.SshTargetForm.b2ab248ded", "Jump Host")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "add-ssh-jump-host",
								value: M.jumpHost,
								disabled: N,
								onChange: (l) => P((D) => ({
									...D,
									jumpHost: l.target.value
								})),
								placeholder: translate("auto.components.settings.SshTargetForm.11bcb4507a", "bastion.example.com")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: translate("auto.components.settings.SshTargetForm.feae1d1e69", "Optional. Equivalent to ProxyJump / ssh -J.")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4 py-1 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1 space-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-medium",
								children: translate("auto.components.settings.SshTargetForm.8c922dffba", "Reuse SSH connection for faster setup")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: translate("auto.components.settings.SshTargetForm.53e9aabfc0", "Uses OpenSSH multiplexing when available. Turn off for hosts with custom SSH restrictions.")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSwitch, {
							checked: M.systemSshConnectionReuse,
							disabled: N,
							onChange: () => P((l) => ({
								...l,
								systemSshConnectionReuse: !l.systemSshConnectionReuse
							})),
							ariaLabel: translate("auto.components.settings.SshTargetForm.8c922dffba", "Reuse SSH connection for faster setup")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4 py-1 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1 space-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-medium",
								children: translate("auto.components.settings.SshTargetForm.71fc546097", "Keep terminals alive until reset")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: translate("auto.components.settings.SshTargetForm.b574994adc", "Use End Remote Terminals or Reset Relay when you want to stop them.")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSwitch, {
							checked: M.relayKeepAliveUntilReset,
							disabled: N,
							onChange: () => P((l) => ({
								...l,
								relayKeepAliveUntilReset: !l.relayKeepAliveUntilReset
							})),
							ariaLabel: translate("auto.components.settings.SshTargetForm.71fc546097", "Keep terminals alive until reset")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "add-ssh-relay-grace-period",
								className: "text-xs text-muted-foreground",
								children: translate("auto.components.settings.SshTargetForm.55c56cf2c7", "Timeout after disconnect (seconds)")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "add-ssh-relay-grace-period",
								type: M.relayKeepAliveUntilReset ? "text" : "number",
								value: M.relayKeepAliveUntilReset ? translate("auto.components.settings.SshTargetForm.7c13f58c91", "Until reset") : M.relayGracePeriodSeconds,
								disabled: N || M.relayKeepAliveUntilReset,
								onChange: (l) => P((D) => ({
									...D,
									relayGracePeriodSeconds: l.target.value
								})),
								placeholder: String(DEFAULT_BOUNDED_SSH_RELAY_GRACE_PERIOD_SECONDS),
								min: 60,
								max: MAX_SSH_RELAY_GRACE_PERIOD_SECONDS
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: translate("auto.components.settings.SshTargetForm.1b19b00e93", "Bounded timeouts must be between 60 seconds and 7 days.")
							})
						]
					})
				]
			})
		})]
	});
}
export { getEditingTargetFromSshConfigHost as a, isRelayGracePeriodValid as c, getEditingTargetForSshTarget as i, isSshTargetFormDirty as l, EMPTY_FORM as n, getSshTargetDraftConnectionFields as o, applyParsedSshHostInput as r, hasAdvancedConnectionValues as s, SshHostAdvancedFields as t, parseRelayGracePeriodSeconds as u };
