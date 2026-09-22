import { J as fileUriToFilesystemPath } from "./store-C9f8FDJV.js";
function normalizeSegments(v) {
	let q = v.split(/[\\/]+/), J = [];
	for (let v of q) if (!(!v || v === ".")) {
		if (v === "..") {
			J.length > 0 && J.pop();
			continue;
		}
		J.push(v);
	}
	return J;
}
function normalizeAbsolutePath(v) {
	let J = /^([A-Za-z]):[\\/]*(.*)$/.exec(v);
	if (J) {
		let v = J[1].toUpperCase(), Y = normalizeSegments(J[2]).join("/"), X = Y ? `${v}:/${Y}` : `${v}:/`;
		return {
			normalized: X,
			comparisonKey: X.toLowerCase(),
			rootKind: "windows"
		};
	}
	let Y = /^(?:\\\\|\/\/)([^\\/]+)[\\/]+([^\\/]+)(?:[\\/]*(.*))?$/.exec(v);
	if (Y) {
		let v = Y[1], J = Y[2], X = normalizeSegments(Y[3] ?? "").join("/"), Z = `//${v}/${J}`, Q = X ? `${Z}/${X}` : Z;
		return {
			normalized: Q,
			comparisonKey: Q.toLowerCase(),
			rootKind: "unc"
		};
	}
	if (v.startsWith("/")) {
		let J = `/${normalizeSegments(v).join("/")}`.replace(/\/+$/, "") || "/";
		return {
			normalized: J,
			comparisonKey: J,
			rootKind: "posix"
		};
	}
	return null;
}
function inferHomePathFromCwd(v) {
	let Y = normalizeAbsolutePath(v);
	if (!Y) return null;
	let X = normalizeSegments(Y.normalized);
	if (Y.rootKind === "windows") {
		let [v, q, J] = X;
		return !v || !q || !J || q.toLowerCase() !== "users" ? null : `${v}/${q}/${J}`;
	}
	if (Y.rootKind === "posix") {
		let [v, q] = X;
		if ((v === "Users" || v === "home") && q) return `/${v}/${q}`;
		if (v === "root") return "/root";
	}
	return null;
}
function normalizeExplicitHomePath(v) {
	let q = v?.trim();
	return q ? normalizeAbsolutePath(q)?.normalized ?? null : null;
}
function resolveTildePath(v, q, J) {
	if (!/^~[\\/]/.test(v)) return null;
	let Z = normalizeExplicitHomePath(J) ?? inferHomePathFromCwd(q);
	return Z ? joinAbsolutePath(Z, v.slice(2)) : null;
}
function joinAbsolutePath(v, q) {
	let Y = normalizeAbsolutePath(v);
	return Y ? normalizeJoinedPath(Y, q) : null;
}
function normalizeJoinedPath(v, J) {
	let Y = normalizeSegments(v.normalized), X = normalizeSegments(J), Z = [...Y, ...X];
	if (v.rootKind === "unc") {
		let [v, q, ...J] = Z;
		return J.length > 0 ? `//${v}/${q}/${J.join("/")}` : `//${v}/${q}`;
	}
	if (v.rootKind === "windows") {
		let [v, ...q] = Z;
		return q.length > 0 ? `${v}/${q.join("/")}` : v;
	}
	return `/${Z.join("/")}`.replace(/\/+$/, "") || "/";
}
function parseFileLinkLocation(v) {
	let q = /^(.*?)(?::(\d+))?(?::(\d+))?$/.exec(v), J = q?.[1];
	if (!J) return null;
	let Y = q[2] ? Number.parseInt(q[2], 10) : null, X = q[3] ? Number.parseInt(q[3], 10) : null;
	return Y !== null && Y < 1 || X !== null && X < 1 ? null : {
		pathText: J,
		line: Y,
		column: X
	};
}
function canKeepTrailingSeparator(v) {
	return /^[\\/]+$/.test(v) || /^~[\\/]$/.test(v) || /^[A-Za-z]:[\\/]$/.test(v) ? !1 : /^(?:~[\\/]|[\\/]|[A-Za-z]:[\\/])/.test(v);
}
function parseExplicitFileLinkTarget(v, q = {}) {
	let J = parseFileLinkLocation(v);
	if (!J) return null;
	let { pathText: Y, line: X, column: Z } = J, Q = X !== null || Z !== null;
	if (/^[\\/]\s/.test(Y)) return null;
	if (/[\\/]$/.test(Y)) {
		let v = q.allowRelativeDirectoryPath === !0 && !Q;
		if (Q || !v && !canKeepTrailingSeparator(Y)) return null;
	}
	return {
		pathText: Y,
		line: X,
		column: Z
	};
}
function resolveExplicitFileLinkTargetPath(v, q, Y) {
	return /^~[\\/]/.test(v) ? resolveTildePath(v, q, Y) : normalizeAbsolutePath(v)?.normalized ?? joinAbsolutePath(q, v);
}
function resolveExplicitFileLinkTarget(v, q, J) {
	let Y = resolveExplicitFileLinkTargetPath(v.pathText, q, J);
	return Y ? {
		absolutePath: Y,
		line: v.line,
		column: v.column
	} : null;
}
var LEADING_TRIM_CHARS = new Set([
	"(",
	"[",
	"{",
	"\"",
	"'"
]), TRAILING_TRIM_CHARS = new Set([
	")",
	"]",
	"}",
	"\"",
	"'",
	",",
	";",
	"."
]);
function trimBoundaryPunctuation(v, q) {
	let J = 0, Y = v.length;
	for (; J < Y && LEADING_TRIM_CHARS.has(v[J]);) J += 1;
	for (; Y > J && TRAILING_TRIM_CHARS.has(v[Y - 1]);) --Y;
	return J >= Y ? null : {
		text: v.slice(J, Y),
		startIndex: q + J,
		endIndex: q + Y
	};
}
function* detectTerminalFileLinkRanges(v, q) {
	for (let J of v.matchAll(q)) {
		let v = J.index ?? 0, q = trimBoundaryPunctuation(J[0], v);
		q && (yield q);
	}
}
function mergeTerminalFileLinkRanges(v) {
	if (v.length <= 1) return v;
	let q = v.slice().sort((v, q) => v[0] - q[0] || v[1] - q[1]), J = [];
	for (let v of q) {
		let q = J.at(-1);
		if (!q || v[0] > q[1]) {
			J.push([v[0], v[1]]);
			continue;
		}
		q[1] = Math.max(q[1], v[1]);
	}
	return J;
}
function terminalFileLinkRangesOverlap(v, q) {
	let J = 0, Y = q.length;
	for (; J < Y;) {
		let X = Math.floor((J + Y) / 2);
		q[X][0] < v.endIndex ? J = X + 1 : Y = X;
	}
	let X = q[J - 1];
	return X !== void 0 && X[1] > v.startIndex;
}
function insertTerminalFileLinkClaimedRange(v, q) {
	let J = v.at(-1);
	if (!J || J[0] <= q[0]) {
		v.push(q);
		return;
	}
	let Y = 0, X = v.length;
	for (; Y < X;) {
		let J = Math.floor((Y + X) / 2);
		v[J][0] <= q[0] ? Y = J + 1 : X = J;
	}
	v.splice(Y, 0, q);
}
function toParsedTerminalFileLink(v) {
	let q = parseExplicitFileLinkTarget(v.text);
	return q ? {
		pathText: q.pathText,
		line: q.line,
		column: q.column,
		startIndex: v.startIndex,
		endIndex: v.endIndex,
		displayText: v.text
	} : null;
}
var WORD_TOKEN_REGEX = /[^\s()[\]{}'",;<>|`]+/g, EXTENSIONLESS_FILENAMES = new Set([
	"Makefile",
	"Dockerfile",
	"Rakefile",
	"Gemfile",
	"Procfile",
	"LICENSE",
	"README",
	"CHANGELOG",
	"AUTHORS",
	"NOTICE",
	"CONTRIBUTING"
]), BARE_FILENAME_PATTERN = /^[A-Za-z0-9_][A-Za-z0-9._+-]*$/, MAX_BARE_FILENAME_TOKEN_LENGTH = 120;
function looksLikeFilename(v) {
	return v.length < 2 || v.length > 100 || !BARE_FILENAME_PATTERN.test(v) || /^\d+$/.test(v) ? !1 : v.includes(".") ? !/^\.+$/.test(v) : EXTENSIONLESS_FILENAMES.has(v);
}
function detectBareFilenameLinks(v, q) {
	let J = [];
	for (let Y of detectTerminalFileLinkRanges(v, WORD_TOKEN_REGEX)) {
		if (terminalFileLinkRangesOverlap(Y, q) || Y.text.length > MAX_BARE_FILENAME_TOKEN_LENGTH) continue;
		let v = toParsedTerminalFileLink(Y);
		!v || !looksLikeFilename(v.pathText) || J.push(v);
	}
	return J;
}
function parseFileUrlLineHash(v) {
	let q = v.startsWith("#") ? v.slice(1) : v, J = /^L(\d+)(?:C(\d+))?$/i.exec(q);
	return J ? {
		line: Number(J[1]),
		column: J[2] ? Number(J[2]) : null
	} : null;
}
function parseFilePathTrailingLineTarget(v) {
	let q = /^(.*?)(?::(\d+))(?::(\d+))?$/.exec(v);
	return !q || !q[1] || q[1].endsWith("/") || q[1].endsWith("\\") ? null : {
		filePath: q[1],
		line: Number(q[2]),
		column: q[3] ? Number(q[3]) : null
	};
}
function resolveTerminalFileUrlTarget(q, J = {}) {
	if (q.hostname && q.hostname !== "localhost" && !J.allowUncHost) return null;
	let Y = fileUriToFilesystemPath(q);
	if (!Y) return null;
	let X = parseFileUrlLineHash(q.hash);
	return X ? {
		filePath: Y,
		line: X.line,
		column: X.column
	} : parseFilePathTrailingLineTarget(Y) ?? {
		filePath: Y,
		line: null,
		column: null
	};
}
var MAX_FILE_URI_LENGTH = 2048, FILE_URI_REGEX = /\bfile:\/\/[^\s"`<>|]{1,2049}/gi, TRAILING_PROSE_CHARS = new Set([
	".",
	",",
	";",
	":",
	"!",
	"?",
	">",
	"\"",
	"'",
	"`"
]);
function trimTrailingProse(v) {
	let q = 0, J = 0, Y = 0;
	for (let X of v) q += X === ")" ? 1 : X === "(" ? -1 : 0, J += X === "]" ? 1 : X === "[" ? -1 : 0, Y += X === "}" ? 1 : X === "{" ? -1 : 0;
	let X = v.length;
	for (; X > 0;) {
		let Z = v[X - 1];
		if (TRAILING_PROSE_CHARS.has(Z)) {
			--X;
			continue;
		}
		if (Z === ")" && q > 0) {
			--q, --X;
			continue;
		}
		if (Z === "]" && J > 0) {
			--J, --X;
			continue;
		}
		if (Z === "}" && Y > 0) {
			--Y, --X;
			continue;
		}
		break;
	}
	return v.slice(0, X);
}
function toFileUriLink(v, q) {
	let J;
	try {
		J = new URL(v);
	} catch {
		return null;
	}
	let Y = resolveTerminalFileUrlTarget(J);
	return Y ? {
		pathText: Y.filePath,
		line: Y.line,
		column: Y.column,
		startIndex: q,
		endIndex: q + v.length,
		displayText: v
	} : null;
}
function detectTerminalFileUriLinks(v) {
	let q = [];
	for (let J of v.matchAll(FILE_URI_REGEX)) {
		let v = J.index ?? 0;
		if (J[0].length > MAX_FILE_URI_LENGTH) continue;
		let Y = trimTrailingProse(J[0]);
		if (!Y) continue;
		let X = toFileUriLink(Y, v);
		X && q.push(X);
	}
	return q;
}
var LOCAL_PATH_REGEX = /(?:~[\\/]|[\\/]|\.{1,2}[\\/]|[A-Za-z]:[\\/]|[\p{L}\p{N}\p{M}._-]+[\\/])[\p{L}\p{N}\p{M}._~\-/%+@\\()[\]]*(?::\d+)?(?::\d+)?/gu, SPACED_PATH_WITH_SEPARATOR_REGEX = /(?:~[\\/]|[\\/]|\.{1,2}[\\/]|[A-Za-z]:[\\/]|[A-Za-z0-9._-]+[\\/])[^()[\]{}'",;<>|`\r\n]+(?::\d+)?(?::\d+)?/g, SPACED_PATH_WITH_EXTENSION_REGEX = /(?:~[\\/]|[\\/]|\.{1,2}[\\/]|[A-Za-z]:[\\/]|[A-Za-z0-9._-]+[\\/])[^()[\]{}'",;<>|`\r\n]+(?::\d+)?(?::\d+)?/g, LINE_ENDING_SPACED_PATH_REGEX = /(?:~[\\/]|[\\/]|\.{1,2}[\\/]|[A-Za-z]:[\\/]|[A-Za-z0-9._-]+[\\/])[^()[\]{}'",;<>|`\r\n]+(?::\d+)?(?::\d+)?/g, SPACED_LOCAL_PATH_REGEXES = [
	SPACED_PATH_WITH_SEPARATOR_REGEX,
	SPACED_PATH_WITH_EXTENSION_REGEX,
	LINE_ENDING_SPACED_PATH_REGEX
], URI_PREFIX_CHAR_PATTERN = /^[A-Za-z0-9+./:-]$/;
function hasPathSeparator(v) {
	return v.includes("/") || v.includes("\\");
}
function hasSeparatorAfterWhitespace(v) {
	let q = !1;
	for (let J of v) {
		if (/\s/.test(J)) {
			q = !0;
			continue;
		}
		if (q && (J === "/" || J === "\\")) return !0;
	}
	return !1;
}
function hasInternalWhitespaceBeforeTrimmedEnd(v) {
	let q = v.trimEnd();
	return /\s/.test(q);
}
function isAtTrimmedLineEnd(v, q) {
	return v.slice(q).trim().length === 0;
}
function hasSpacedPathExtension(v) {
	let q = trimSpacedPathTrailingProse({
		text: v,
		startIndex: 0,
		endIndex: v.length
	}).text.trimEnd();
	return /\s/.test(q) && /\.[A-Za-z0-9_+-]+(?::\d+)?(?::\d+)?$/.test(q);
}
function getImmediateUriPrefix(v, q) {
	let J = q;
	for (; J > 0 && URI_PREFIX_CHAR_PATTERN.test(v[J - 1]);) --J;
	return v.slice(J, q);
}
function isInsideUriScheme(v, q) {
	let J = getImmediateUriPrefix(v, q.startIndex);
	return q.text.includes("://") || /[A-Za-z][A-Za-z0-9+.-]*:(?:\/\/)?$/.test(J) && (J.endsWith("://") || q.text.startsWith("//"));
}
function trimSpacedPathTrailingProse(v) {
	let q = null, J = /\.[A-Za-z0-9_+-]+(?::\d+)?(?::\d+)?(?=\s+|$)/g, Y = /(?:^|\s)(?:~[\\/]|[\\/]|\.{1,2}[\\/]|[A-Za-z]:[\\/])/g, X = 0, Z = Y.exec(v.text), Q;
	for (; (Q = J.exec(v.text)) !== null;) {
		let J = Q.index + Q[0].length, $ = v.text.slice(0, J);
		for (; Z && Z.index + Z[0].length <= J;) X += 1, Z = Y.exec(v.text);
		X > 1 || (J < v.text.length || q === null || /[\\/]/.test(v.text.slice(q.length, J))) && (q = $);
	}
	return q ? {
		text: q,
		startIndex: v.startIndex,
		endIndex: v.startIndex + q.length
	} : v;
}
function trimTrailingWhitespace(v) {
	let q = v.text.trimEnd();
	return {
		text: q,
		startIndex: v.startIndex,
		endIndex: v.startIndex + q.length
	};
}
function buildLineEndingSpacedPathPrefixRanges(v) {
	let q = [];
	for (let J of v.text.matchAll(/\s+/g)) {
		let Y = J.index ?? 0, X = v.text.slice(0, Y).trimEnd();
		X.includes(" ") && q.push({
			text: X,
			startIndex: v.startIndex,
			endIndex: v.startIndex + X.length
		});
	}
	return q.toReversed();
}
function detectLocalPathLinks(v, q = !1) {
	if (!hasPathSeparator(v)) return [];
	let J = [], Y = detectSpacedLocalPathLinks(v, q), X = mergeTerminalFileLinkRanges(Y.map(({ startIndex: v, endIndex: q }) => [v, q]));
	for (let v of Y) J.push(v);
	for (let q of detectTerminalFileLinkRanges(v, LOCAL_PATH_REGEX)) {
		if (terminalFileLinkRangesOverlap(q, X) || isInsideUriScheme(v, q) || !/[\\/]/.test(q.text)) continue;
		let Y = toParsedTerminalFileLink(q);
		Y && J.push(Y);
	}
	return J.sort((v, q) => v.startIndex - q.startIndex || q.endIndex - v.endIndex);
}
function detectSpacedLocalPathLinks(v, q = !1) {
	let J = [], Y = [];
	for (let X of SPACED_LOCAL_PATH_REGEXES) for (let Z of detectTerminalFileLinkRanges(v, X)) {
		if (X === SPACED_PATH_WITH_SEPARATOR_REGEX && !hasSeparatorAfterWhitespace(Z.text) || X === SPACED_PATH_WITH_EXTENSION_REGEX && !hasSpacedPathExtension(Z.text) || X === LINE_ENDING_SPACED_PATH_REGEX && (!hasInternalWhitespaceBeforeTrimmedEnd(Z.text) || !isAtTrimmedLineEnd(v, Z.endIndex)) || terminalFileLinkRangesOverlap(Z, Y) || isInsideUriScheme(v, Z)) continue;
		let Q = (q && X === LINE_ENDING_SPACED_PATH_REGEX ? [Z, ...buildLineEndingSpacedPathPrefixRanges(Z)] : [Z]).map((v) => toParsedTerminalFileLink(trimSpacedPathTrailingProse(trimTrailingWhitespace(v)))).filter((v) => v !== null), $ = Q[0];
		if ($) {
			for (let v of Q) J.push(v);
			insertTerminalFileLinkClaimedRange(Y, [$.startIndex, $.endIndex]);
		}
	}
	return J;
}
function assembleFileLinks(v, q) {
	let J = detectTerminalFileUriLinks(v), Y = detectLocalPathLinks(v, q), X = J.length > 0 ? [...J, ...Y] : Y, Z = detectBareFilenameLinks(v, mergeTerminalFileLinkRanges(X.map(({ startIndex: v, endIndex: q }) => [v, q])));
	for (let v of Z) X.push(v);
	return X;
}
function extractTerminalFileLinks(v) {
	return assembleFileLinks(v, !1);
}
function extractTerminalFileLinkCandidates(v) {
	return assembleFileLinks(v, !0);
}
function resolveTerminalFileLink(v, q, J) {
	return resolveExplicitFileLinkTarget(v, q, J);
}
function resolveTerminalFileLinkText(v, q, J) {
	let Y = extractTerminalFileLinks(v).find((q) => q.startIndex === 0 && q.endIndex === v.length);
	return Y ? resolveTerminalFileLink(Y, q, J) : null;
}
function isPathInsideWorktree(v, q) {
	let Y = normalizeAbsolutePath(v), X = normalizeAbsolutePath(q);
	return !Y || !X || Y.rootKind !== X.rootKind ? !1 : Y.comparisonKey === X.comparisonKey ? !0 : Y.comparisonKey.startsWith(`${X.comparisonKey}/`);
}
function toWorktreeRelativePath(v, q) {
	let Y = normalizeAbsolutePath(v), X = normalizeAbsolutePath(q);
	return !Y || !X || Y.rootKind !== X.rootKind ? null : Y.comparisonKey === X.comparisonKey ? "" : Y.comparisonKey.startsWith(`${X.comparisonKey}/`) ? Y.normalized.slice(X.normalized.length + 1) : null;
}
export { resolveTerminalFileLinkText as a, parseExplicitFileLinkTarget as c, normalizeAbsolutePath as d, resolveTerminalFileLink as i, resolveExplicitFileLinkTarget as l, extractTerminalFileLinks as n, toWorktreeRelativePath as o, isPathInsideWorktree as r, resolveTerminalFileUrlTarget as s, extractTerminalFileLinkCandidates as t, parseFileLinkLocation as u };
