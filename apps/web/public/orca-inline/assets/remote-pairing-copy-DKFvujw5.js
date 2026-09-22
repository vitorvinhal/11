import { i as translate } from "./i18n-CakWKPtl.js";
import { _y as parsePairingCode } from "./store-C9f8FDJV.js";
import { t as isTailnetIPv4Address } from "./tailnet-address-BDtXyCFm.js";
var LOOPBACK_HOSTS = new Set([
	"localhost",
	"localhost.localdomain",
	"localhost6",
	"localhost6.localdomain6",
	"ip6-localhost",
	"ip6-loopback",
	"127.0.0.1",
	"::1"
]);
function isPrivateIPv4Address(e) {
	let s = e.split(".").map(Number);
	return s.length !== 4 || s.some((e) => !Number.isInteger(e)) ? !1 : s[0] === 10 || s[0] === 172 && s[1] >= 16 && s[1] <= 31 || s[0] === 192 && s[1] === 168;
}
function isPrivateIPv6Address(e) {
	let s = Number.parseInt(e.split(":")[0] ?? "", 16);
	return Number.isInteger(s) && ((s & 65024) == 64512 || (s & 65472) == 65152);
}
function getEmbeddedIPv4Address(e) {
	let s = e.match(/^::(?:ffff:)?([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
	if (!s) return null;
	let c = Number.parseInt(s[1], 16), l = Number.parseInt(s[2], 16);
	return `${c >> 8}.${c & 255}.${l >> 8}.${l & 255}`;
}
function classifyRemotePairingHostname(e) {
	let s = e.toLowerCase().replace(/^\[|\]$/g, "").replace(/\.$/, ""), d = getEmbeddedIPv4Address(s);
	return d ? classifyRemotePairingHostname(d) : LOOPBACK_HOSTS.has(s) || s.endsWith(".localhost") || s.startsWith("127.") ? "loopback" : isTailnetIPv4Address(s) ? "tailscale" : isPrivateIPv4Address(s) || isPrivateIPv6Address(s) ? "lan" : s.includes(".") || s.includes(":") ? "public" : "custom";
}
function parseHostAccessLink(e) {
	let c = parsePairingCode(e);
	if (!c) return {
		ok: !1,
		kind: "invalid-input",
		message: "Enter an Orca access link or bare pairing code."
	};
	if (c.scope === "mobile") return {
		ok: !1,
		kind: "mobile-only",
		message: "This link grants mobile-only access. Generate a link for another Orca client."
	};
	let l;
	try {
		l = new URL(c.endpoint);
	} catch {
		return {
			ok: !1,
			kind: "invalid-destination",
			message: "This access link contains an invalid destination."
		};
	}
	if (l.protocol !== "ws:" && l.protocol !== "wss:" || !l.hostname || l.hash !== "") return {
		ok: !1,
		kind: "unsupported-destination",
		message: "This access link contains an unsupported destination."
	};
	let u = l.hostname.toLowerCase().replace(/^\[|\]$/g, "");
	return u === "0.0.0.0" || u === "::" || getEmbeddedIPv4Address(u) === "0.0.0.0" || l.port === "0" ? {
		ok: !1,
		kind: "non-connectable-destination",
		message: "This access link contains a non-connectable destination."
	} : {
		ok: !0,
		value: {
			pairing: c,
			displayEndpoint: l.host,
			endpointKind: classifyRemotePairingHostname(l.hostname)
		}
	};
}
function translateHostAccessLinkError(s) {
	switch (s) {
		case "invalid-input": return translate("auto.lib.remotePairingCopy.invalidInput", "Enter an Orca access link or bare pairing code.");
		case "mobile-only": return translate("auto.lib.remotePairingCopy.mobileOnly", "This link grants mobile-only access. Generate a link for another Orca client.");
		case "invalid-destination": return translate("auto.lib.remotePairingCopy.invalidDestination", "This access link contains an invalid destination.");
		case "unsupported-destination": return translate("auto.lib.remotePairingCopy.unsupportedDestination", "This access link contains an unsupported destination.");
		case "non-connectable-destination": return translate("auto.lib.remotePairingCopy.nonConnectableDestination", "This access link contains a non-connectable destination.");
	}
}
function translateRemotePairingEndpointKind(s) {
	switch (s) {
		case "loopback": return translate("auto.lib.remotePairingCopy.loopback", "Loopback");
		case "tailscale": return translate("auto.lib.remotePairingCopy.tailscale", "Tailscale address");
		case "lan": return translate("auto.lib.remotePairingCopy.lan", "Private LAN address");
		case "public": return translate("auto.lib.remotePairingCopy.public", "Public address");
		case "custom": return translate("auto.lib.remotePairingCopy.custom", "Custom hostname");
	}
}
function translateRemotePairingFailureDescription(s, c) {
	switch (s) {
		case "host-identity-mismatch": return translate("auto.components.settings.RuntimeHostAccessForm.identityMismatchHelp", "Orca reached {{endpoint}}, but that host does not match this link. Generate a new link on the other host.", { endpoint: c ?? "Orca" });
		case "access-link-invalid": return translate("auto.components.settings.RuntimeHostAccessForm.invalidLinkHelp", "Generate a new access link on the other host and try again.");
		case "protocol-incompatible": return translate("auto.components.settings.RuntimeHostAccessForm.incompatibleHelp", "Update Orca on this device and the other host, then try again.");
		case "connection-interrupted": return translate("auto.components.settings.RuntimeHostAccessForm.interruptedHelp", "The connection stopped during verification. Check the network or SSH tunnel and try again.");
		case "environment-save-failed": return translate("auto.components.settings.RuntimeHostAccessForm.saveFailedHelp", "The host was verified, but Orca could not save it. Check the name and local settings storage, then try again.");
		case "host-unreachable": return translate("auto.components.settings.RuntimeHostAccessForm.unavailableHelp", "Make sure Orca is running on the other host and that the network or SSH tunnel can reach {{endpoint}}.", { endpoint: c ?? "Orca" });
	}
}
export { parseHostAccessLink as i, translateRemotePairingEndpointKind as n, translateRemotePairingFailureDescription as r, translateHostAccessLinkError as t };
