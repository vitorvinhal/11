import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button } from "./useMountedRef-De7bTfqf.js";
import { t as CircleStop } from "./circle-stop-DiWyM5Ap.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { r as MonitorSmartphone } from "./runtime-project-refresh-scheduler-BnW4iv1P.js";
import { t as Pencil } from "./pencil-EMomP5i_.js";
import { t as RotateCcw } from "./rotate-ccw-Dz2ARXLO.js";
import { t as ServerOff } from "./server-off-DaMn7a-t.js";
import { t as Server } from "./server-BmPwXRCG.js";
import { iw as Trash2 } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { n as DEFAULT_SSH_RELAY_GRACE_PERIOD_SECONDS } from "./ssh-types-B1wsSHlf.js";
import { n as isConnectingSshStatus } from "./ssh-connection-recoverability-C7czeQrl.js";
function isSshTargetConnecting(e) {
	return isConnectingSshStatus(e);
}
function shouldClearPendingSshReset({ pendingTargetId: e, pendingResetIsBusy: y, connectionStatus: b }) {
	return e !== null && !y && isSshTargetConnecting(b);
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
const STATUS_LABELS = {
	disconnected: "Disconnected",
	connecting: "Connecting…",
	"auth-failed": "Auth failed",
	"deploying-relay": "Deploying relay…",
	connected: "Connected",
	reconnecting: "Reconnecting…",
	"reconnection-failed": "Reconnection failed",
	get error() {
		return translate("auto.components.settings.SshTargetCard.18968ede9e", "Error");
	}
};
function statusColor(e) {
	switch (e) {
		case "connected": return "bg-emerald-500";
		case "connecting":
		case "deploying-relay":
		case "reconnecting": return "bg-yellow-500";
		case "auth-failed":
		case "reconnection-failed":
		case "error": return "bg-red-500";
		case "disconnected": return "bg-muted-foreground/40";
	}
}
function formatGraceDuration(e) {
	return e % 86400 == 0 ? `${e / 86400}d` : e % 3600 == 0 ? `${e / 3600}h` : e % 60 == 0 ? `${e / 60}m` : `${e}s`;
}
function formatTerminalPersistence(e) {
	let y = e.relayGracePeriodSeconds ?? 0;
	return y === 0 ? translate("auto.components.settings.SshTargetCard.8ce71262f4", "terminals until reset") : translate("auto.components.settings.SshTargetCard.a883f5a00f", "terminal timeout: {{value0}}", { value0: formatGraceDuration(y) });
}
function SshTargetCard({ target: e, state: y, testing: x, busyAction: S, onConnect: C, onDisconnect: w, onTerminateSessions: T, onResetRelay: E, onTest: D, onEdit: O, onRemove: k }) {
	let A = y?.status ?? "disconnected", [j, M] = (0, import_react.useState)(null), N = j !== null || S !== void 0, P = j === "terminate" || S === "terminate", F = j === "reset" || S === "reset", I = S === "remove", L = (0, import_react.useRef)(!0), R = e.username ? `${e.username}@${e.host}:${e.port}` : `${e.host}:${e.port}`, z = formatTerminalPersistence(e), B = (0, import_react.useCallback)((e) => {
		L.current = e !== null;
	}, []), V = () => {
		L.current && M(null);
	}, H = () => {
		j || (M("connect"), Promise.resolve(C(e.id)).finally(V));
	}, U = () => {
		j || (M("disconnect"), Promise.resolve(w(e.id)).finally(V));
	}, W = () => {
		j || (M("terminate"), Promise.resolve(T(e.id)).finally(V));
	}, G = () => {
		j || (M("reset"), Promise.resolve(E(e.id)).finally(V));
	}, K = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			onClick: W,
			className: "size-7 text-muted-foreground hover:text-red-400",
			disabled: N,
			"aria-label": P ? translate("auto.components.settings.SshTargetCard.c77f1abfe3", "Ending remote terminals") : translate("auto.components.settings.SshTargetCard.da16e108e6", "End remote terminals"),
			children: P ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleStop, { className: "size-3" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "top",
		sideOffset: 4,
		children: translate("auto.components.settings.SshTargetCard.da16e108e6", "End remote terminals")
	})] }), q = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "ghost",
			size: "icon",
			onClick: G,
			className: "size-7 text-muted-foreground hover:text-red-400",
			disabled: N,
			"aria-label": F ? translate("auto.components.settings.SshTargetCard.97dea4e8cf", "Resetting remote relay") : translate("auto.components.settings.SshTargetCard.762a48c662", "Reset remote relay"),
			children: F ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3" })
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "top",
		sideOffset: 4,
		children: translate("auto.components.settings.SshTargetCard.762a48c662", "Reset remote relay")
	})] }), J = (y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1",
		children: [
			y ? K() : null,
			isSshTargetConnecting(A) ? null : q(),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: () => O(e),
					className: "size-7",
					disabled: N,
					"aria-label": translate("auto.components.settings.SshTargetCard.3d8af2949f", "Edit target"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
				side: "top",
				sideOffset: 4,
				children: translate("auto.components.settings.SshTargetCard.3d8af2949f", "Edit target")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: () => k(e.id),
					className: "size-7 text-muted-foreground hover:text-red-400",
					disabled: N,
					"aria-label": I ? translate("auto.components.settings.SshTargetCard.3d21a22d0e", "Removing target") : translate("auto.components.settings.SshTargetCard.7f7b3d7ab4", "Remove target"),
					children: I ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
				side: "top",
				sideOffset: 4,
				children: translate("auto.components.settings.SshTargetCard.7f7b3d7ab4", "Remove target")
			})] })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: B,
		"data-ssh-target-card": "",
		"data-ssh-target-label": e.label,
		className: "flex items-center gap-3 rounded-lg border border-border/50 bg-card/40 px-4 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-4 shrink-0 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm font-medium",
								children: e.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 shrink-0 rounded-full ${statusColor(A)}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground",
								children: STATUS_LABELS[A]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "truncate text-xs text-muted-foreground",
						children: [
							R,
							e.identityFile ? ` \u2022 ${e.identityFile}` : "",
							` \u2022 ${z}`
						]
					}),
					y?.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-red-400 [overflow-wrap:anywhere]",
						children: y.error
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 items-center gap-1",
				children: A === "connected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [J(!0), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "xs",
					onClick: U,
					className: "gap-1.5",
					disabled: N,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerOff, { className: "size-3" }), translate("auto.components.settings.SshTargetCard.4c86f30877", "Disconnect")]
				})] }) : isSshTargetConnecting(A) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [J(!1), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "xs",
					disabled: !0,
					className: "gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }), translate("auto.components.settings.SshTargetCard.1810b51482", "Connecting")]
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					J(!0),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "xs",
						onClick: () => D(e.id),
						disabled: x || N,
						className: "gap-1.5",
						children: [x ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonitorSmartphone, { className: "size-3" }), translate("auto.components.settings.SshTargetCard.0e53e9f8e8", "Test")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						size: "xs",
						onClick: H,
						className: "gap-1.5",
						disabled: N,
						children: [j === "connect" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-3" }), translate("auto.components.settings.SshTargetCard.ec6543cee9", "Connect")]
					})
				] })
			})
		]
	});
}
export { shouldClearPendingSshReset as a, isSshTargetConnecting as i, SshTargetCard as n, statusColor as r, STATUS_LABELS as t };
