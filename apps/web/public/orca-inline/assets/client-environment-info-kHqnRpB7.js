import { t as getRendererAppPlatform } from "./renderer-app-platform--nJ6HYmL.js";
var FOOTER_MARKER = "---", ORCA_LINE_PREFIX = "Orca:", CLIENT_ENVIRONMENT_FOOTER_BLOCK = /(^|\r?\n)---\r?\nOrca:[^\r\n]*\r?\nOS:[^\r\n]*(?:\r?\nShell:[^\r\n]*)?/;
function normalizeEnvironmentValue(e) {
	return e.trim().replace(/[\r\n]+/g, " ");
}
function formatClientEnvironmentInfo(e) {
	let s = normalizeEnvironmentValue(e.appVersion) || "unknown", l = normalizeEnvironmentValue(e.platform) || "unknown", u = normalizeEnvironmentValue(e.osRelease), d = normalizeEnvironmentValue(e.arch), f = [
		l,
		u,
		d ? `(${d})` : ""
	].filter(Boolean), p = [`${ORCA_LINE_PREFIX} ${s}`, `OS: ${f.join(" ")}`], m = e.shell ? normalizeEnvironmentValue(e.shell) : "";
	return m && p.push(`Shell: ${m}`), p.join("\n");
}
function formatClientEnvironmentFooter(e) {
	return `${FOOTER_MARKER}\n${formatClientEnvironmentInfo(e)}`;
}
function hasClientEnvironmentFooter(e) {
	return CLIENT_ENVIRONMENT_FOOTER_BLOCK.test(e);
}
function stripClientEnvironmentFooter(e) {
	return e.replace(CLIENT_ENVIRONMENT_FOOTER_BLOCK, "$1");
}
function appendClientEnvironmentFooter(e) {
	if (hasClientEnvironmentFooter(e.message)) return e.message;
	let s = formatClientEnvironmentFooter(e.info), c = e.message.trimEnd();
	return c.length > 0 ? `${c}\n\n${s}` : s;
}
async function resolveClientEnvironmentInfo() {
	let e = resolvePlatformInfo();
	return {
		appVersion: await resolveAppVersion(),
		platform: e?.platform ?? resolveFallbackPlatform(),
		osRelease: e?.osRelease ?? "",
		arch: e?.arch ?? "",
		...e?.shell ? { shell: e.shell } : {}
	};
}
function resolvePlatformInfo() {
	try {
		return window.api?.platform?.get?.() ?? null;
	} catch {
		return null;
	}
}
function resolveFallbackPlatform() {
	try {
		return getRendererAppPlatform();
	} catch {
		return "unknown";
	}
}
async function resolveClientEnvironmentFooter() {
	return formatClientEnvironmentFooter(await resolveClientEnvironmentInfo());
}
async function resolveAppVersion() {
	try {
		let e = await window.api?.updater?.getVersion?.();
		if (typeof e == "string" && e.trim()) return e.trim();
	} catch {}
	return "unknown";
}
export { stripClientEnvironmentFooter as a, hasClientEnvironmentFooter as i, resolveClientEnvironmentInfo as n, appendClientEnvironmentFooter as r, resolveClientEnvironmentFooter as t };
