import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { J as fileUriToFilesystemPath, Qy as isWindowsAbsolutePathLike, X as filesystemPathToFileUri, Y as filesystemPathHrefToFileUri, sn as readRuntimeFilePreview } from "./store-C9f8FDJV.js";
function toFileUrl(g) {
	return filesystemPathToFileUri(g);
}
function resolveMarkdownPreviewHref(g, W) {
	if (!g || g.startsWith("#")) return null;
	try {
		return isWindowsAbsolutePathLike(g) ? new URL(filesystemPathHrefToFileUri(g)) : new URL(g, toFileUrl(W));
	} catch {
		return null;
	}
}
function getMarkdownPreviewLinkTarget(g, W) {
	if (!g) return null;
	let G = resolveMarkdownPreviewHref(g, W);
	return G && (G.protocol === "http:" || G.protocol === "https:" || G.protocol === "file:") ? G.toString() : null;
}
function isMarkdownPreviewOpenModifier(g, W) {
	return W ? g.metaKey && !g.ctrlKey : g.ctrlKey && !g.metaKey;
}
function isMarkdownPreviewSystemBrowserModifier(g, W) {
	return g.shiftKey && (W ? g.metaKey : g.ctrlKey);
}
function resolveMarkdownPreviewHttpOpenOptions(g, W, G, K) {
	return isMarkdownPreviewSystemBrowserModifier(g, W) ? {
		worktreeId: G,
		modifierHeld: !0,
		sourceOwner: K
	} : {
		worktreeId: G,
		sourceOwner: K
	};
}
function resolveImageAbsolutePath(g, W) {
	if (!g) return null;
	let K = resolveMarkdownPreviewHref(g, W);
	return !K || K.protocol !== "file:" ? null : fileUriToFilesystemPath(K);
}
function fileUrlToAbsolutePath(g) {
	return g.protocol === "file:" ? fileUriToFilesystemPath(g) : null;
}
function readLocalImagePreview(g, W, G) {
	try {
		return G ? readRuntimeFilePreview({
			...G,
			connectionId: G.connectionId ?? W ?? void 0
		}, g) : window.api.fs.readFile({
			filePath: g,
			connectionId: W ?? void 0
		});
	} catch (g) {
		return Promise.reject(g);
	}
}
var pinnedKeys = /* @__PURE__ */ new Map();
function pinLocalImageCacheKey(g) {
	pinnedKeys.set(g, (pinnedKeys.get(g) ?? 0) + 1);
}
function unpinLocalImageCacheKey(g) {
	let W = pinnedKeys.get(g);
	if (!W || W <= 1) {
		pinnedKeys.delete(g);
		return;
	}
	pinnedKeys.set(g, W - 1);
}
function isLocalImageCacheKeyPinned(g) {
	return pinnedKeys.has(g);
}
function prunePinnedLocalImageCache(g, W, G) {
	for (; g.size > W;) {
		let W = Array.from(g.keys()).find((g) => !isLocalImageCacheKeyPinned(g));
		if (W === void 0) return;
		let K = g.get(W);
		g.delete(W), K && G(K);
	}
}
var BLOB_URL_CACHE_MAX_SIZE = 100, BLOB_URL_CACHE_MAX_BYTES = 128 * 1024 * 1024;
const blobUrlCache = /* @__PURE__ */ new Map();
var blobUrlCacheBytes = /* @__PURE__ */ new Map();
const inFlightBlobUrlLoads = /* @__PURE__ */ new Map();
var cacheKeyVersions = /* @__PURE__ */ new Map();
function getLocalImageCacheKeyVersion(g) {
	return cacheKeyVersions.get(g) ?? 0;
}
function cleanupLocalImageCacheKeyVersion(g) {
	!blobUrlCache.has(g) && !inFlightBlobUrlLoads.has(g) && !isLocalImageCacheKeyPinned(g) && cacheKeyVersions.delete(g);
}
var cacheGeneration = 0, cacheListeners = /* @__PURE__ */ new Set(), pendingBlobUrlRevocations = /* @__PURE__ */ new Set(), pendingBlobUrlRevocationTimer = null;
function pruneImageCache() {
	prunePinnedLocalImageCache(blobUrlCache, BLOB_URL_CACHE_MAX_SIZE, (g) => {
		URL.revokeObjectURL(g);
	});
	for (let g of blobUrlCacheBytes.keys()) blobUrlCache.has(g) || (blobUrlCacheBytes.delete(g), cleanupLocalImageCacheKeyVersion(g));
	let g = 0;
	for (let W of blobUrlCacheBytes.values()) g += W;
	for (; g > BLOB_URL_CACHE_MAX_BYTES;) {
		let W = Array.from(blobUrlCache.keys()).find((g) => !isLocalImageCacheKeyPinned(g));
		if (W === void 0) return;
		let G = blobUrlCache.get(W);
		blobUrlCache.delete(W), g -= blobUrlCacheBytes.get(W) ?? 0, blobUrlCacheBytes.delete(W), G && URL.revokeObjectURL(G), cleanupLocalImageCacheKeyVersion(W);
	}
}
function cacheLocalImageBlob(g, W, G, K) {
	if (K !== void 0 && getLocalImageCacheKeyVersion(g) !== K || G > BLOB_URL_CACHE_MAX_BYTES) return URL.revokeObjectURL(W), cleanupLocalImageCacheKeyVersion(g), !1;
	let q = blobUrlCache.get(g), J = blobUrlCacheBytes.get(g) ?? 0, Y = 0;
	for (let g of blobUrlCacheBytes.values()) Y += g;
	let X = blobUrlCache.size + (q === void 0 ? 1 : 0), Z = Y - J + G;
	for (; X > BLOB_URL_CACHE_MAX_SIZE || Z > BLOB_URL_CACHE_MAX_BYTES;) {
		let G = Array.from(blobUrlCache.keys()).find((W) => W !== g && !isLocalImageCacheKeyPinned(W));
		if (G === void 0) return URL.revokeObjectURL(W), cleanupLocalImageCacheKeyVersion(g), !1;
		let K = blobUrlCache.get(G), q = blobUrlCacheBytes.get(G) ?? 0;
		blobUrlCache.delete(G), blobUrlCacheBytes.delete(G), --X, Z -= q, K && URL.revokeObjectURL(K), cleanupLocalImageCacheKeyVersion(G);
	}
	return q !== void 0 && q !== W && URL.revokeObjectURL(q), blobUrlCacheBytes.delete(g), blobUrlCacheBytes.set(g, G), blobUrlCache.set(g, W), !0;
}
function getLocalImageCacheGeneration() {
	return cacheGeneration;
}
function pinLocalImageCache(g) {
	pinLocalImageCacheKey(g);
}
function unpinLocalImageCache(g) {
	unpinLocalImageCacheKey(g), pruneImageCache(), cleanupLocalImageCacheKeyVersion(g);
}
function subscribeToLocalImageCacheInvalidation(g) {
	return cacheListeners.add(g), () => cacheListeners.delete(g);
}
function revokePendingBlobUrls() {
	pendingBlobUrlRevocationTimer = null;
	for (let g of pendingBlobUrlRevocations) URL.revokeObjectURL(g);
	pendingBlobUrlRevocations.clear();
}
function scheduleBlobUrlRevocation(g) {
	for (let W of g) pendingBlobUrlRevocations.add(W);
	pendingBlobUrlRevocationTimer !== null || pendingBlobUrlRevocations.size === 0 || (pendingBlobUrlRevocationTimer = setTimeout(revokePendingBlobUrls, 3e4));
}
function invalidateLocalImageCache() {
	let g = Array.from(blobUrlCache.values());
	blobUrlCache.clear(), blobUrlCacheBytes.clear(), inFlightBlobUrlLoads.clear(), cacheKeyVersions.clear(), cacheGeneration += 1;
	for (let g of cacheListeners) g();
	g.length > 0 && scheduleBlobUrlRevocation(g);
}
function releaseLocalImageBlob(g) {
	if (isLocalImageCacheKeyPinned(g)) return;
	cacheKeyVersions.set(g, getLocalImageCacheKeyVersion(g) + 1);
	let W = inFlightBlobUrlLoads.get(g);
	W && inFlightBlobUrlLoads.delete(g);
	let G = blobUrlCache.get(g);
	G && (blobUrlCache.delete(g), blobUrlCacheBytes.delete(g), URL.revokeObjectURL(G)), W || cleanupLocalImageCacheKeyVersion(g);
}
typeof window < "u" && window.addEventListener("focus", invalidateLocalImageCache);
var import_react = /* @__PURE__ */ __toESM(require_react());
function getLocalImageCacheKey(g, W, G) {
	return [
		G?.settings?.activeRuntimeEnvironmentId?.trim() ?? "client",
		G?.connectionId ?? W ?? "local",
		G?.expectedExecutionHostId ?? "unknown-host",
		G?.expectedSshTargetId ?? "",
		G?.expectedSshConnectionGeneration?.toString() ?? "",
		G?.expectedExternalSshTargetId ?? "",
		G?.worktreeId ?? "unknown-worktree",
		G?.worktreePath ?? "",
		g
	].join("\0");
}
function base64ToBlobUrl(g, W) {
	let G = atob(g.replace(/\s/g, "")), K = new Uint8Array(G.length);
	for (let g = 0; g < G.length; g += 1) K[g] = G.charCodeAt(g);
	return {
		url: URL.createObjectURL(new Blob([K], { type: W })),
		byteLength: K.byteLength
	};
}
const onImageCacheInvalidated = subscribeToLocalImageCacheInvalidation;
function isExternalUrl(g) {
	return /^(?:https?|data|blob):/i.test(g);
}
function useLocalImageSrc(g, W, G, K) {
	let [q, J] = (0, import_react.useState)(getLocalImageCacheGeneration());
	(0, import_react.useEffect)(() => acquireLocalImageSrcLease(g, W, G, K), [
		g,
		W,
		G,
		K
	]), (0, import_react.useEffect)(() => onImageCacheInvalidated(() => J(getLocalImageCacheGeneration())), []);
	let [Y, X] = (0, import_react.useState)(() => {
		if (!g || K === null) return;
		if (isExternalUrl(g)) return g;
		let q = resolveImageAbsolutePath(g, W);
		if (q) {
			let g = getLocalImageCacheKey(q, G, K);
			if (blobUrlCache.has(g)) return blobUrlCache.get(g);
		}
	});
	return (0, import_react.useEffect)(() => {
		if (!g || K === null) {
			X(void 0);
			return;
		}
		if (isExternalUrl(g)) {
			X(g);
			return;
		}
		let J = resolveImageAbsolutePath(g, W);
		if (!J) {
			X(void 0);
			return;
		}
		let Y = getLocalImageCacheKey(J, G, K);
		if (blobUrlCache.has(Y)) {
			X(blobUrlCache.get(Y));
			return;
		}
		let Z = !1, Q = q;
		return loadLocalImageAbsolutePath(J, G, K).then((g) => {
			Z || X(getLocalImageCacheGeneration() === Q && g ? g : void 0);
		}).catch(() => {
			Z || X(void 0);
		}), () => {
			Z = !0;
		};
	}, [
		g,
		W,
		q,
		G,
		K
	]), Y;
}
async function loadLocalImageSrc(g, W, G, K) {
	if (isExternalUrl(g)) return g;
	if (K === null) return null;
	let q = resolveImageAbsolutePath(g, W);
	if (!q) return null;
	let J = getLocalImageCacheKey(q, G, K);
	return blobUrlCache.get(J) || loadLocalImageAbsolutePath(q, G, K);
}
function loadLocalImageAbsolutePath(g, W, G) {
	if (G === null) return Promise.resolve(null);
	let K = getLocalImageCacheKey(g, W, G), q = blobUrlCache.get(K);
	if (q) return Promise.resolve(q);
	let J = inFlightBlobUrlLoads.get(K);
	if (J) return J;
	let Y = getLocalImageCacheGeneration(), X = getLocalImageCacheKeyVersion(K), Z = readLocalImagePreview(g, W, G).then((g) => {
		if (!g.isBinary || !g.content || getLocalImageCacheGeneration() !== Y) return null;
		let { url: W, byteLength: G } = base64ToBlobUrl(g.content, g.mimeType ?? "image/png");
		return getLocalImageCacheGeneration() === Y ? cacheLocalImageBlob(K, W, G, X) ? W : null : (URL.revokeObjectURL(W), null);
	}).catch(() => null).finally(() => {
		inFlightBlobUrlLoads.get(K) === Z && inFlightBlobUrlLoads.delete(K), cleanupLocalImageCacheKeyVersion(K);
	});
	return inFlightBlobUrlLoads.set(K, Z), Z;
}
function acquireLocalImageSrcLease(g, W, G, K) {
	if (!g || isExternalUrl(g) || K === null) return;
	let q = resolveImageAbsolutePath(g, W);
	if (!q) return;
	let J = getLocalImageCacheKey(q, G, K);
	return pinLocalImageCache(J), () => unpinLocalImageCache(J);
}
function releaseLocalImageSrc(g, W, G, K) {
	if (!g || isExternalUrl(g) || K === null) return;
	let q = resolveImageAbsolutePath(g, W);
	q && releaseLocalImageBlob(getLocalImageCacheKey(q, G, K));
}
export { onImageCacheInvalidated as a, fileUrlToAbsolutePath as c, isMarkdownPreviewSystemBrowserModifier as d, resolveImageAbsolutePath as f, loadLocalImageSrc as i, getMarkdownPreviewLinkTarget as l, resolveMarkdownPreviewHttpOpenOptions as m, getLocalImageCacheKey as n, releaseLocalImageSrc as o, resolveMarkdownPreviewHref as p, loadLocalImageAbsolutePath as r, useLocalImageSrc as s, acquireLocalImageSrcLease as t, isMarkdownPreviewOpenModifier as u };
