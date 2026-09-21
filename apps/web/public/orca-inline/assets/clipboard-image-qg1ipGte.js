import { xb as ORCA_BROWSER_PARTITION } from "./store-C9f8FDJV.js";
const DEFAULT_LOCAL_ORCA_PROFILE_ID = "local-default";
function createDefaultLocalOrcaProfile(e) {
	return {
		id: DEFAULT_LOCAL_ORCA_PROFILE_ID,
		name: "Personal",
		avatar: {
			kind: "initials",
			initials: "P",
			color: "neutral"
		},
		kind: "local",
		createdAt: e,
		updatedAt: e,
		lastOpenedAt: e
	};
}
function profilePartitionHash(e) {
	let u = 2166136261;
	for (let d = 0; d < e.length; d++) u ^= e.charCodeAt(d), u = Math.imul(u, 16777619);
	return (u >>> 0).toString(16).padStart(8, "0");
}
function getOrcaProfileBrowserPartitionSegment(e) {
	return `${e.replace(/[^A-Za-z0-9_-]/g, "_").slice(0, 48) || "profile"}-${profilePartitionHash(e)}`;
}
function getOrcaProfileBrowserDefaultPartition(u) {
	return u === "local-default" ? ORCA_BROWSER_PARTITION : `persist:orca-profile-${getOrcaProfileBrowserPartitionSegment(u)}-browser-default`;
}
const CLIPBOARD_IMAGE_MAX_BASE64_CHARS = 24 * 1024 * 1024, CLIPBOARD_IMAGE_MAX_SOURCE_BYTES = Math.floor(CLIPBOARD_IMAGE_MAX_BASE64_CHARS / 4 * 3), CLIPBOARD_IMAGE_MAX_PIXELS = 32 * 1024 * 1024, CLIPBOARD_IMAGE_TOO_LARGE_ERROR = "Clipboard image is too large";
function assertClipboardImageByteLengthWithinLimit(e) {
	if (!Number.isFinite(e) || e > CLIPBOARD_IMAGE_MAX_SOURCE_BYTES) throw Error(CLIPBOARD_IMAGE_TOO_LARGE_ERROR);
}
function assertClipboardImageDimensionsWithinLimit({ height: e, width: u }) {
	let d = u * e;
	if (!Number.isFinite(d) || u <= 0 || e <= 0 || d > 33554432) throw Error(CLIPBOARD_IMAGE_TOO_LARGE_ERROR);
}
function clipboardImageThumbnailSize({ height: e, width: u }) {
	let d = Math.max(u, e);
	if (d <= 320) return {
		height: e,
		width: u
	};
	let f = 320 / d;
	return {
		height: Math.max(1, Math.round(e * f)),
		width: Math.max(1, Math.round(u * f))
	};
}
export { assertClipboardImageByteLengthWithinLimit as a, DEFAULT_LOCAL_ORCA_PROFILE_ID as c, CLIPBOARD_IMAGE_TOO_LARGE_ERROR as i, createDefaultLocalOrcaProfile as l, CLIPBOARD_IMAGE_MAX_PIXELS as n, assertClipboardImageDimensionsWithinLimit as o, CLIPBOARD_IMAGE_MAX_SOURCE_BYTES as r, clipboardImageThumbnailSize as s, CLIPBOARD_IMAGE_MAX_BASE64_CHARS as t, getOrcaProfileBrowserDefaultPartition as u };
