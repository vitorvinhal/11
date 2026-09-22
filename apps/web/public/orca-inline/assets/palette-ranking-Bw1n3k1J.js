import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
function isWorktreePaletteQueryTooLarge(W, G = 2048) {
	return isClipboardTextByteLengthOverLimit(W, G);
}
var ASCII_FAST_PATH = /^[\t\n\v\f\r -~]*$/, ASCII_CONTROL_SPACE = /[\t\n\v\f\r]/g, COMBINING_MARK = /\p{M}/u, UNICODE_SPACE = /\s/u;
function isCombiningMark(h) {
	return COMBINING_MARK.test(String.fromCodePoint(h));
}
function foldChunk(h) {
	return UNICODE_SPACE.test(h) && h.trim() === "" ? " " : h.normalize("NFC").toLowerCase();
}
function normalizePaletteText(h) {
	if (ASCII_FAST_PATH.test(h)) return {
		original: h,
		normalized: h.toLowerCase().replace(ASCII_CONTROL_SPACE, " "),
		starts: null,
		ends: null
	};
	let W = "", q = [], J = [], Z = !0, Q = 0;
	for (; Q < h.length;) {
		let G = h.codePointAt(Q), K = Q + (G > 65535 ? 2 : 1);
		for (; K < h.length;) {
			let W = h.codePointAt(K);
			if (!isCombiningMark(W)) break;
			K += W > 65535 ? 2 : 1;
		}
		let $ = foldChunk(h.slice(Q, K));
		$.length !== K - Q && (Z = !1);
		for (let h = 0; h < $.length; h += 1) q.push(Q), J.push(K);
		W += $, Q = K;
	}
	return Z ? {
		original: h,
		normalized: W,
		starts: null,
		ends: null
	} : {
		original: h,
		normalized: W,
		starts: Int32Array.from(q),
		ends: Int32Array.from(J)
	};
}
function mapNormalizedRange(h, W, G) {
	if (G <= W) return {
		start: 0,
		end: 0
	};
	if (!h.starts || !h.ends) return {
		start: W,
		end: G
	};
	let K = Math.max(0, Math.min(W, h.normalized.length - 1)), q = Math.max(K, Math.min(G, h.normalized.length) - 1);
	return {
		start: h.starts[K],
		end: h.ends[q]
	};
}
function mergeMatchRanges(h) {
	if (h.length <= 1) return [...h];
	let W = [...h].sort((h, W) => h.start - W.start || h.end - W.end), G = [{ ...W[0] }];
	for (let h of W.slice(1)) {
		let W = G.at(-1);
		h.start <= W.end ? W.end = Math.max(W.end, h.end) : G.push({ ...h });
	}
	return G;
}
var ALPHANUMERIC$1 = /[\p{L}\p{N}]/u, LETTER = /\p{L}/u, DIGIT$1 = /\p{N}/u, UPPERCASE = /\p{Lu}/u;
function isAlphanumeric(h) {
	return ALPHANUMERIC$1.test(h);
}
function originalIndexAt(h, W) {
	return h.starts ? h.starts[W] : W;
}
function isCamelBoundary(h, W) {
	if (W <= 0) return !1;
	let G = h.original, K = originalIndexAt(h, W), q = originalIndexAt(h, W - 1);
	return K === q ? !1 : UPPERCASE.test(G[K] ?? "") && !UPPERCASE.test(G[q] ?? "");
}
function splitComponentIntoWords(h, W) {
	let G = [], K = h.normalized, q = W.start;
	for (let J = W.start + 1; J < W.end; J += 1) {
		let W = K[J - 1], Y = K[J];
		(LETTER.test(W) && DIGIT$1.test(Y) || DIGIT$1.test(W) && LETTER.test(Y) || isCamelBoundary(h, J)) && (G.push({
			start: q,
			end: J,
			text: K.slice(q, J)
		}), q = J);
	}
	return G.push({
		start: q,
		end: W.end,
		text: K.slice(q, W.end)
	}), G;
}
function buildAtom(h, W, G) {
	let K = h.normalized, q = [], J = "", Y = [], X = -1;
	for (let h = W; h <= G; h += 1) h < G && isAlphanumeric(K[h]) ? (X === -1 && (X = h), J += K[h], Y.push(h)) : X !== -1 && (q.push({
		start: X,
		end: h,
		text: K.slice(X, h)
	}), X = -1);
	return {
		start: W,
		end: G,
		components: q,
		compact: J,
		compactOffsets: Int32Array.from(Y)
	};
}
function segmentPaletteText(h) {
	let W = h.normalized, G = [], K = [], q = -1;
	for (let J = 0; J <= W.length; J += 1) {
		if (!(J === W.length || W[J] === " ")) {
			q === -1 && (q = J);
			continue;
		}
		if (q !== -1) {
			let W = buildAtom(h, q, J);
			G.push(W);
			for (let G of W.components) K.push(...splitComponentIntoWords(h, G));
			q = -1;
		}
	}
	return {
		atoms: G,
		words: K
	};
}
var IDENTIFIER_PREFIX_KINDS = new Set([
	"port",
	"sha",
	"key"
]);
function identifierKindAllowsPrefix(h) {
	return IDENTIFIER_PREFIX_KINDS.has(h);
}
var STRUCTURED_LABEL_QUALITIES = [
	"field-exact",
	"word-exact",
	"field-prefix",
	"word-prefix",
	"boundary-substring",
	"literal-substring",
	"compact",
	"typo"
], IDENTIFIER_QUALITIES = [
	"field-exact",
	"word-exact",
	"field-prefix",
	"word-prefix",
	"compact"
], PATH_QUALITIES = [
	"field-exact",
	"word-exact",
	"field-prefix",
	"word-prefix",
	"boundary-substring",
	"literal-substring"
], PROSE_QUALITIES = [
	"field-exact",
	"word-exact",
	"field-prefix",
	"word-prefix",
	"boundary-substring",
	"literal-substring",
	"typo"
], EXACT_ALIAS_QUALITIES = [
	"field-exact",
	"word-exact",
	"field-prefix",
	"word-prefix"
], QUALITIES_BY_PROFILE = {
	"structured-label": STRUCTURED_LABEL_QUALITIES,
	identifier: IDENTIFIER_QUALITIES,
	path: PATH_QUALITIES,
	prose: PROSE_QUALITIES,
	"exact-alias": EXACT_ALIAS_QUALITIES
};
function paletteProfileAllowedQualities(h) {
	return QUALITIES_BY_PROFILE[h];
}
function indexPaletteField(h, W = 0) {
	let G = h.text.trim();
	if (!G) return null;
	let K = normalizePaletteText(G), q = segmentPaletteText(K);
	return {
		id: h.id,
		sourceOrder: W,
		profile: h.profile,
		text: K,
		atoms: q.atoms,
		words: q.words,
		evidenceId: h.evidenceId ?? null,
		identifier: h.identifier ?? null,
		role: h.role ?? null,
		destinationEligible: h.destinationEligible === !0
	};
}
function indexPaletteFields(h) {
	let W = [], G = /* @__PURE__ */ new Set();
	for (let K of h) {
		if (!K) continue;
		let h = indexPaletteField(K, W.length);
		h && !G.has(h.id) && (G.add(h.id), W.push(h));
	}
	return W;
}
const PALETTE_QUERY_MAX_TOKENS = 16;
var DIGIT = /\p{N}/u, ALPHANUMERIC = /[\p{L}\p{N}\p{S}\p{Extended_Pictographic}]/u, LETTERS_ONLY = /^\p{L}+$/u, LATIN_OR_DIGIT = /^[\p{Script=Latin}\p{Nd}]$/u, IDENTIFIER_PUNCTUATION = /[./#!_-]/;
function splitComponents(h) {
	let W = [], G = "";
	for (let K of h) ALPHANUMERIC.test(K) ? G += K : G &&= (W.push(G), "");
	return G && W.push(G), W;
}
function parseRepoBranch(h) {
	let W = h.indexOf("/");
	return W <= 0 || W >= h.length - 1 ? null : {
		repo: h.slice(0, W),
		branch: h.slice(W + 1)
	};
}
function createPaletteQueryToken(h, W) {
	let G = splitComponents(h), K = [...h];
	return {
		index: W,
		text: h,
		components: G,
		compact: G.join(""),
		isIdentifierLike: DIGIT.test(h) || IDENTIFIER_PUNCTUATION.test(h),
		isLetterOnly: LETTERS_ONLY.test(h),
		isPunctuationOnly: !ALPHANUMERIC.test(h),
		isSingleLatinCharacter: K.length === 1 && LATIN_OR_DIGIT.test(h),
		repoBranch: parseRepoBranch(h)
	};
}
function preparePaletteQuery(h) {
	if (isWorktreePaletteQueryTooLarge(h)) return {
		state: "invalid",
		reason: "too-large"
	};
	let G = normalizePaletteText(h).normalized.replace(/ +/g, " ").trim();
	if (!G) return { state: "empty" };
	let K = /* @__PURE__ */ new Set(), q = [], J = G.split(" ").filter(Boolean);
	for (let h of J) if (!(!h || K.has(h)) && (K.add(h), q.push(createPaletteQueryToken(h, q.length)), q.length > 16)) return {
		state: "invalid",
		reason: "too-many-tokens"
	};
	return q.length ? {
		state: "ready",
		normalized: G,
		tokens: q,
		tokenCountBeforeDeduplication: J.length
	} : { state: "empty" };
}
function isLetterOnlyWord(h) {
	return LETTERS_ONLY.test(h);
}
function isWithinOnePaletteEdit(h, W) {
	let G = h.length - W.length;
	if (G > 1 || G < -1) return !1;
	if (h === W) return !0;
	let [K, q] = h.length <= W.length ? [h, W] : [W, h], J = 0, Y = 0, X = 0;
	for (; J < K.length && Y < q.length;) {
		if (K[J] === q[Y]) {
			J += 1, Y += 1;
			continue;
		}
		if (X += 1, X > 1) return !1;
		K.length === q.length && (J += 1), Y += 1;
	}
	return X + (q.length - Y) + (K.length - J) <= 1;
}
function isPaletteTypoCandidate(h) {
	return h.length >= 4;
}
var SHORT_TOKEN_QUALITIES = new Set([
	"field-exact",
	"word-exact",
	"field-prefix",
	"word-prefix"
]), PREFIX_QUALITIES = new Set(["field-prefix", "word-prefix"]), MIN_COMPACT_LENGTH = 2, SIGILS = new Set(["#", "!"]);
function allowedQualities(h, W) {
	let G = paletteProfileAllowedQualities(h.profile);
	return h.identifier && !identifierKindAllowsPrefix(h.identifier.kind) && (G = G.filter((h) => !PREFIX_QUALITIES.has(h))), W.isSingleLatinCharacter && (G = G.filter((h) => SHORT_TOKEN_QUALITIES.has(h))), W.isIdentifierLike && (G = G.filter((h) => h !== "typo")), G;
}
function passesSigilGate(h, W) {
	let G = W.text[0];
	return SIGILS.has(G) && h.identifier ? h.identifier.sigil === G : !0;
}
function isWordStart(h, W) {
	return h.words.some((h) => h.start === W) || W === 0;
}
function matchAtomComponentRun(h, W) {
	let G = h.components;
	for (let h = 0; h < G.length; h += 1) {
		let K = "";
		for (let q = h; q < G.length && (K += G[q].text, !(K.length > W.length)); q += 1) if (K === W) return [G[h].start, G[q].end];
	}
	return null;
}
function toRanges(h, W, G) {
	return [mapNormalizedRange(h.text, W, G)];
}
function matchLiteral(h, W, G) {
	let K = h.text.normalized, q = W.text;
	if (G.includes("field-exact") && K === q) return {
		quality: "field-exact",
		ranges: toRanges(h, 0, K.length)
	};
	if (G.includes("word-exact")) {
		let W = h.words.find((h) => h.text === q);
		if (W) return {
			quality: "word-exact",
			ranges: toRanges(h, W.start, W.end)
		};
		let G = h.atoms.find((h) => K.slice(h.start, h.end) === q);
		if (G) return {
			quality: "word-exact",
			ranges: toRanges(h, G.start, G.end)
		};
	}
	if (G.includes("field-prefix") && K.startsWith(q)) return {
		quality: "field-prefix",
		ranges: toRanges(h, 0, q.length)
	};
	if (G.includes("word-prefix")) {
		let W = h.words.find((h) => h.text.startsWith(q)), G = h.atoms.find((h) => K.startsWith(q, h.start)), J = W && G ? Math.min(W.start, G.start) : W?.start ?? G?.start;
		if (J !== void 0) return {
			quality: "word-prefix",
			ranges: toRanges(h, J, J + q.length)
		};
	}
	let J = K.indexOf(q);
	return J === -1 ? null : G.includes("boundary-substring") && isWordStart(h, J) ? {
		quality: "boundary-substring",
		ranges: toRanges(h, J, J + q.length)
	} : G.includes("literal-substring") ? {
		quality: "literal-substring",
		ranges: toRanges(h, J, J + q.length)
	} : null;
}
function matchCompact(h, W, G) {
	if (!G.includes("compact") || W.compact.length < MIN_COMPACT_LENGTH) return null;
	for (let G of h.atoms) {
		let K = matchAtomComponentRun(G, W.compact);
		if (K) return {
			quality: "compact",
			ranges: toRanges(h, K[0], K[1])
		};
	}
	return null;
}
function matchTypo(h, W, G) {
	if (!G.includes("typo") || !W.isLetterOnly || !isPaletteTypoCandidate(W.text)) return null;
	for (let G of h.words) if (!(!isPaletteTypoCandidate(G.text) || !isLetterOnlyWord(G.text)) && isWithinOnePaletteEdit(W.text, G.text)) return {
		quality: "typo",
		ranges: toRanges(h, G.start, G.end)
	};
	return null;
}
function matchPaletteField(h, W) {
	if (W.isPunctuationOnly || !passesSigilGate(h, W)) return null;
	let G = allowedQualities(h, W);
	return matchLiteral(h, W, G) ?? matchCompact(h, W, G) ?? matchTypo(h, W, G);
}
new Map([
	"field-exact",
	"word-exact",
	"field-prefix",
	"word-prefix",
	"boundary-substring",
	"literal-substring",
	"compact",
	"typo"
].map((h, W) => [h, W]));
function isFuzzyPaletteMatchQuality(h) {
	return h === "typo";
}
function isExactPaletteMatchQuality(h) {
	return h === "field-exact" || h === "word-exact";
}
function isPrefixOrBoundaryPaletteMatchQuality(h) {
	return h === "field-prefix" || h === "word-prefix" || h === "boundary-substring";
}
const PALETTE_RESULT_QUALITY_CLASSES = [
	"exact-intent",
	"exact-visible",
	"visible-prefix",
	"exact-evidence",
	"partial-evidence",
	"fuzzy-evidence"
];
var CLASS_RANK = new Map(PALETTE_RESULT_QUALITY_CLASSES.map((h, W) => [h, W]));
function paletteResultQualityClassRank(h) {
	return CLASS_RANK.get(h) ?? PALETTE_RESULT_QUALITY_CLASSES.length;
}
function resolvePaletteResultQualityClass(h) {
	let { worstQuality: W, usesSupportingEvidence: G, isContainerOnly: K } = h;
	return isFuzzyPaletteMatchQuality(W) ? "fuzzy-evidence" : K || G ? isExactPaletteMatchQuality(W) ? "exact-evidence" : "partial-evidence" : isExactPaletteMatchQuality(W) ? "exact-visible" : isPrefixOrBoundaryPaletteMatchQuality(W) ? "visible-prefix" : "partial-evidence";
}
function buildPaletteDocument(h) {
	let W = [], G = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
	for (let q of h.evidence) {
		let h = q.fields.filter((h) => !!h?.text.trim());
		if (h.length && !G.has(q.unit.id)) {
			G.set(q.unit.id, q.unit);
			for (let G of h) W.push(G), K.has(G.id) || K.set(G.id, G.renderOffset);
		}
	}
	let q = indexPaletteFields([...h.visibleFields, ...W]), J = [], Y = /* @__PURE__ */ new Map();
	for (let h of q) Y.set(h.id, h), h.evidenceId || J.push(h);
	let X = new Set(q.map((h) => h.id));
	return {
		id: h.id,
		fields: q,
		compositePairs: (h.compositePairs ?? []).filter((h) => X.has(h.leftFieldId) && X.has(h.rightFieldId)),
		evidenceUnits: G,
		renderOffsetByFieldId: K,
		visibleFields: J,
		fieldById: Y
	};
}
var RANK_KEYS = [
	"destination",
	"recovery",
	"wordMatch",
	"coverage",
	"containerOnlyTokenCount",
	"recoveryTokenCount",
	"strength",
	"placement"
], SEMANTIC_RANK_KEYS = [
	"destination",
	"recovery",
	"wordMatch",
	"coverage",
	"containerOnlyTokenCount",
	"recoveryTokenCount",
	"strength"
];
function compareRankKeys(h, W, G) {
	for (let K of G) {
		let G = h[K] - W[K];
		if (G !== 0) return G;
	}
	return 0;
}
function comparePaletteSemanticRank(h, W) {
	return compareRankKeys(h, W, SEMANTIC_RANK_KEYS);
}
function comparePaletteDocumentRank(h, W) {
	return compareRankKeys(h, W, RANK_KEYS);
}
function createRecognizedPaletteRank() {
	return {
		destination: 0,
		recovery: 0,
		wordMatch: 0,
		coverage: 0,
		containerOnlyTokenCount: 0,
		recoveryTokenCount: 0,
		strength: 0,
		placement: 0
	};
}
function createPaletteFallbackRank() {
	return {
		destination: 3,
		recovery: 0,
		wordMatch: 0,
		coverage: 0,
		containerOnlyTokenCount: 0,
		recoveryTokenCount: 0,
		strength: 0,
		placement: 0
	};
}
var CANDIDATE_METRICS = [
	"recovery",
	"wordMatch",
	"coverage",
	"containerOnly",
	"strength"
], SELECTION_STEPS = [
	{
		key: "recovery",
		aggregate: "maximum"
	},
	{
		key: "wordMatch",
		aggregate: "maximum"
	},
	{
		key: "coverage",
		aggregate: "maximum"
	},
	{
		key: "containerOnly",
		aggregate: "total"
	},
	{
		key: "recovery",
		aggregate: "total"
	},
	{
		key: "strength",
		aggregate: "maximum"
	}
];
function isDominatedBy(h, W) {
	return CANDIDATE_METRICS.every((G) => W[G] <= h[G]);
}
function phrasePlacement(h, W) {
	let G = h.text.normalized;
	if (G.startsWith(W)) return 0;
	let K = G.indexOf(W, 1), q = 0;
	for (; K !== -1;) {
		let J = h.words[q]?.start;
		for (; J !== void 0 && J < K;) q += 1, J = h.words[q]?.start;
		if (J === void 0) break;
		if (J === K) return 1;
		K = G.indexOf(W, J);
	}
	return 2;
}
function selectThresholdAssignment(h, W) {
	if (h.some((h) => h.length === 0)) return null;
	let G = h.map((h) => [...h]);
	for (let { key: h, aggregate: K } of SELECTION_STEPS) {
		if (K === "total") {
			G = G.map((G) => {
				let K = Infinity;
				for (let q of G) W && (W.selectionCandidateVisits += 1), K = Math.min(K, q[h]);
				return G.filter((G) => (W && (W.selectionCandidateVisits += 1), G[h] === K));
			});
			continue;
		}
		let q = 0;
		for (let K of G) {
			let G = Infinity;
			for (let q of K) W && (W.selectionCandidateVisits += 1), G = Math.min(G, q[h]);
			q = Math.max(q, G);
		}
		G = G.map((G) => G.filter((G) => (W && (W.selectionCandidateVisits += 1), G[h] <= q)));
	}
	return G.map((h) => h[0]);
}
function candidateMetricKey(h) {
	return (((h.recovery * 2 + h.wordMatch) * 4 + h.coverage) * 2 + h.containerOnly) * 6 + h.strength | 0;
}
function summarizeCandidates(h, W) {
	if (h.length < 2) return [...h];
	let G = /* @__PURE__ */ new Map();
	for (let K of h) {
		W && (W.selectionCandidateVisits += 1);
		let h = candidateMetricKey(K);
		G.has(h) || G.set(h, K);
	}
	return [...G.values()];
}
function assignmentPlacement(h, W, G) {
	let K = W[0]?.hits.length === 1 ? W[0].hits[0].field.id : null;
	if (!K || W.some((h) => h.hits.length !== 1 || h.hits[0].field.id !== K)) return 2;
	let q = h.fieldById.get(K);
	return q && !q.evidenceId ? phrasePlacement(q, G) : 2;
}
function rankSelected(h, W, G) {
	return {
		destination: W,
		recovery: Math.max(...h.map((h) => h.recovery)),
		wordMatch: Math.max(...h.map((h) => h.wordMatch)),
		coverage: Math.max(...h.map((h) => h.coverage)),
		containerOnlyTokenCount: h.filter((h) => h.containerOnly === 1).length,
		recoveryTokenCount: h.filter((h) => h.recovery > 0).length,
		strength: Math.max(...h.map((h) => h.strength)),
		placement: G
	};
}
function addRankedAssignment(h, W, G, K, q, J = 2) {
	G && h.push({
		selected: G,
		rank: rankSelected(G, J, assignmentPlacement(W, G, K)),
		evidenceId: q
	});
}
function collectScopeAssignments(h) {
	let W = !1, G = h.visibleSummaries.map((G, K) => {
		let q = (h.evidenceSummaries[K].get(h.evidenceId) ?? []).filter((h) => !G.some((W) => isDominatedBy(h, W)));
		return q.length ? (W = !0, summarizeCandidates([...G, ...q], h.diagnostics)) : G;
	});
	if (!W) return [];
	let K = [], q = selectThresholdAssignment(G, h.diagnostics);
	return q?.some((W) => W.hits.some((W) => W.field.evidenceId === h.evidenceId)) && addRankedAssignment(K, h.document, q, h.normalizedQuery, h.evidenceId), K;
}
function collectCompleteVisibleAssignments(h) {
	let W = h.candidates.map((W) => {
		let G = /* @__PURE__ */ new Map();
		for (let K of W.visible) h.diagnostics && (h.diagnostics.selectionCandidateVisits += 1), K.hits.length === 1 && G.set(K.hits[0].field.id, K);
		return G;
	}), G = [];
	for (let K of h.document.visibleFields) {
		let q = W.map((h) => h.get(K.id));
		q.some((h) => !h) || addRankedAssignment(G, h.document, q, h.normalizedQuery, null, K.destinationEligible && K.text.normalized === h.normalizedQuery ? 1 : 2);
	}
	return G;
}
function collectRecognizedIdentifierAssignments(h) {
	let W = [];
	if (h.normalizedQuery[0] !== "#" && h.normalizedQuery[0] !== "!") return W;
	for (let G of h.candidates) for (let K of [G.visible, ...G.byEvidenceId.values()]) for (let G of K) {
		if (h.diagnostics && (h.diagnostics.selectionCandidateVisits += 1), G.hits.length !== 1) continue;
		let K = G.hits[0].field;
		K?.identifier?.kind === "number" && K.text.normalized === h.normalizedQuery && G.hits[0].match.quality === "field-exact" && K.identifier.sigil === h.normalizedQuery[0] && addRankedAssignment(W, h.document, [G], h.normalizedQuery, K.evidenceId, 0);
	}
	return W;
}
function buildSupportingEvidence(h, W, G) {
	let K = G ? h.evidenceUnits.get(G) : void 0;
	if (!K) return [];
	let q = [];
	for (let G of W) {
		let W = h.renderOffsetByFieldId.get(G.fieldId);
		if (W !== void 0) for (let h of G.ranges) {
			let G = Math.min(h.start + W, K.text.length), J = Math.min(h.end + W, K.text.length);
			G < J && q.push({
				start: G,
				end: J
			});
		}
	}
	return q.length ? [{
		...K,
		ranges: mergeMatchRanges(q)
	}] : [];
}
function buildRangesByField(h) {
	let W = /* @__PURE__ */ new Map();
	for (let G of h) {
		let h = W.get(G.fieldId);
		h ? h.push(...G.ranges) : W.set(G.fieldId, [...G.ranges]);
	}
	return new Map([...W].map(([h, W]) => [h, mergeMatchRanges(W)]));
}
function assignmentsAreContainerOnly(h, W) {
	let G = /* @__PURE__ */ new Map();
	for (let K of W) {
		let W = h.fieldById.get(K.fieldId)?.role === "container";
		G.set(K.tokenIndex, (G.get(K.tokenIndex) ?? !0) && W);
	}
	return G.size > 0 && [...G.values()].every(Boolean);
}
function compareSelectedSourceOrder(h, W) {
	for (let G = 0; G < h.length; G += 1) {
		let K = h[G].hits, q = W[G].hits;
		for (let h = 0; h < Math.max(K.length, q.length); h += 1) {
			if (h >= K.length || h >= q.length) return K.length - q.length;
			let W = K[h].field.sourceOrder - q[h].field.sourceOrder;
			if (W !== 0) return W;
		}
	}
	return 0;
}
var STRENGTH = {
	"field-exact": 0,
	"word-exact": 0,
	"field-prefix": 1,
	"word-prefix": 1,
	"boundary-substring": 2,
	"literal-substring": 3,
	compact: 4,
	typo: 5
};
function fieldCoverage(h) {
	return h.evidenceId ? 3 : h.role === "primary" ? 0 : h.role === "secondary" || h.role === "alias" ? 1 : 2;
}
function toCandidate(h) {
	let W = h[0].match.quality, G = STRENGTH[W], K = G >= STRENGTH.compact ? 1 : 0, q = G >= STRENGTH["literal-substring"] ? 1 : 0, J = fieldCoverage(h[0].field);
	for (let Y = 1; Y < h.length; Y += 1) {
		let X = h[Y], Z = STRENGTH[X.match.quality];
		Z > G && (G = Z, W = X.match.quality), Z >= STRENGTH.compact && (K = 1), Z >= STRENGTH["literal-substring"] && (q = 1), J = Math.max(J, fieldCoverage(X.field));
	}
	return {
		hits: h,
		quality: W,
		recovery: K,
		wordMatch: q,
		coverage: J,
		containerOnly: h.every((h) => h.field.role === "container") ? 1 : 0,
		strength: G
	};
}
function matchCompositePairs(h, W, G) {
	if (!W.repoBranch || !h.compositePairs.length) return [];
	let K = createPaletteQueryToken(W.repoBranch.repo, W.index), q = createPaletteQueryToken(W.repoBranch.branch, W.index), J = [];
	for (let W of h.compositePairs) {
		let Y = h.fieldById.get(W.leftFieldId), X = h.fieldById.get(W.rightFieldId);
		if (!Y || !X || G && (!G(Y) || !G(X))) continue;
		let Z = matchPaletteField(Y, K), Q = matchPaletteField(X, q);
		Z && Q && J.push(toCandidate([{
			field: Y,
			match: Z
		}, {
			field: X,
			match: Q
		}]));
	}
	return J;
}
function collectTokenCandidates(h, W, G) {
	let K = {
		visible: matchCompositePairs(h, W, G),
		byEvidenceId: /* @__PURE__ */ new Map()
	}, q = K.visible.length > 0;
	for (let J of h.fields) {
		if (G && !G(J)) continue;
		let h = matchPaletteField(J, W);
		if (!h) continue;
		q = !0;
		let Y = toCandidate([{
			field: J,
			match: h
		}]);
		if (!J.evidenceId) K.visible.push(Y);
		else {
			let h = K.byEvidenceId.get(J.evidenceId);
			h ? h.push(Y) : K.byEvidenceId.set(J.evidenceId, [Y]);
		}
	}
	return q ? K : null;
}
function toTokenAssignments(h, W) {
	let G = [];
	return W.forEach((W, K) => {
		for (let q of W.hits) G.push({
			tokenIndex: h[K].index,
			fieldId: q.field.id,
			quality: q.match.quality,
			ranges: q.match.ranges
		});
	}), G;
}
function matchPaletteDocument(h) {
	let W = [];
	for (let G of h.tokens) {
		let K = collectTokenCandidates(h.document, G, h.isFieldAllowed);
		if (!K) return null;
		W.push(K);
	}
	let G = W.map((W) => summarizeCandidates(W.visible, h.diagnostics)), K = W.map((W) => new Map([...W.byEvidenceId].map(([W, G]) => [W, summarizeCandidates(G, h.diagnostics)]))), q = [...collectCompleteVisibleAssignments({
		document: h.document,
		candidates: W,
		normalizedQuery: h.normalizedQuery,
		diagnostics: h.diagnostics
	})];
	addRankedAssignment(q, h.document, selectThresholdAssignment(G, h.diagnostics), h.normalizedQuery, null);
	let J = /* @__PURE__ */ new Set();
	for (let h of W) for (let W of h.byEvidenceId.keys()) J.add(W);
	for (let W of J) q.push(...collectScopeAssignments({
		document: h.document,
		visibleSummaries: G,
		evidenceSummaries: K,
		normalizedQuery: h.normalizedQuery,
		evidenceId: W,
		diagnostics: h.diagnostics
	}));
	if ((h.tokenCountBeforeDeduplication ?? h.tokens.length) === 1 && q.push(...collectRecognizedIdentifierAssignments({
		document: h.document,
		candidates: W,
		normalizedQuery: h.normalizedQuery,
		diagnostics: h.diagnostics
	})), !q.length) return null;
	q.sort((h, W) => {
		let G = comparePaletteDocumentRank(h.rank, W.rank);
		return G === 0 ? compareSelectedSourceOrder(h.selected, W.selected) : G;
	});
	let Y = q[0], X = h.exactIntent ? {
		...Y.rank,
		destination: 0
	} : Y.rank, Z = toTokenAssignments(h.tokens, Y.selected), Q = Y.selected.reduce((h, W) => STRENGTH[W.quality] > STRENGTH[h] ? W.quality : h, "field-exact"), $ = Z.some((W) => h.document.fieldById.get(W.fieldId)?.evidenceId);
	return {
		qualityClass: X.destination === 0 ? "exact-intent" : resolvePaletteResultQualityClass({
			worstQuality: Q,
			usesSupportingEvidence: $,
			isContainerOnly: assignmentsAreContainerOnly(h.document, Z)
		}),
		rank: X,
		assignments: Z,
		rangesByField: buildRangesByField(Z),
		supportingEvidence: buildSupportingEvidence(h.document, Z, Y.evidenceId)
	};
}
var HOUR_MS = 3600 * 1e3, DAY_MS = 24 * HOUR_MS, WEEK_MS = 7 * DAY_MS;
function createPaletteSearchContext(h) {
	if (!Number.isFinite(h) || h <= 0) throw Error("Palette search context requires a finite positive nowMs");
	return { nowMs: h };
}
function preparePaletteActivity(h, W) {
	if (!Number.isFinite(h) || (h ?? 0) <= 0) return {
		ageBucket: null,
		timestamp: 0
	};
	let G = Math.min(h, W.nowMs), K = W.nowMs - G;
	return {
		ageBucket: K < HOUR_MS ? 0 : K < DAY_MS ? 1 : K < WEEK_MS ? 2 : 3 + Math.floor((K - WEEK_MS) / WEEK_MS),
		timestamp: G
	};
}
function maxValidPaletteActivityTimestamp(h) {
	let W = null;
	for (let G of h) typeof G == "number" && Number.isFinite(G) && G > 0 && (W === null || G > W) && (W = G);
	return W;
}
function compareCodeUnits(h, W) {
	return h < W ? -1 : h > W ? 1 : 0;
}
function encodePaletteIdentity(h) {
	return h.map((h) => `${h.length}:${h}`).join("");
}
function comparePaletteEntityRanks(h, W) {
	let G = comparePaletteSemanticRank(h.rank, W.rank);
	if (G !== 0) return G;
	if (h.activity.ageBucket !== W.activity.ageBucket) return h.activity.ageBucket === null ? 1 : W.activity.ageBucket === null ? -1 : h.activity.ageBucket - W.activity.ageBucket;
	if (h.rank.placement !== W.rank.placement) return h.rank.placement - W.rank.placement;
	if (h.activity.timestamp !== W.activity.timestamp) return W.activity.timestamp - h.activity.timestamp;
	let K = typeof h.position == "number" ? [h.position] : h.position, q = typeof W.position == "number" ? [W.position] : W.position, J = Math.max(K.length, q.length);
	for (let h = 0; h < J; h += 1) {
		let W = (K[h] ?? 0) - (q[h] ?? 0);
		if (W !== 0) return W;
	}
	return compareCodeUnits(h.identity, W.identity);
}
export { preparePaletteActivity as a, createPaletteFallbackRank as c, PALETTE_QUERY_MAX_TOKENS as d, preparePaletteQuery as f, isWorktreePaletteQueryTooLarge as g, normalizePaletteText as h, maxValidPaletteActivityTimestamp as i, createRecognizedPaletteRank as l, mergeMatchRanges as m, createPaletteSearchContext as n, matchPaletteDocument as o, mapNormalizedRange as p, encodePaletteIdentity as r, buildPaletteDocument as s, comparePaletteEntityRanks as t, paletteResultQualityClassRank as u };
