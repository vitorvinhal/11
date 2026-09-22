import "./chunk-FOHPRMQF-jGN_mPcr.js";
import "./chunk-6AZGARVD-D1ny8Dca.js";
import "./chunk-6TQVIW2G-CHMlWgIB.js";
import "./chunk-6EIED4P4-DjkGTAw7.js";
import "./chunk-KI3K4JFJ-eCcGGi-s.js";
import "./chunk-5V3GS4D5-DYkDPM7n.js";
import "./chunk-UY3FDG6J-D6_LwW2L.js";
import "./chunk-3Z5EZCMW-B16HwcXn.js";
import "./chunk-I5DQTOEV-rSUAP46y.js";
import "./chunk-OUJLGHUK-D19rLc2h.js";
import "./chunk-XHIXRSVI-CnOf2UBa.js";
import "./chunk-2ZTRR5NV-CKnBemUj.js";
import "./chunk-747NJXEK-CDGJEwRb.js";
import "./chunk-IH6LHLGP-C5FZFsRW.js";
import "./chunk-6K3QC6MW-DZR2s8UO.js";
import "./chunk-ICYGCRZG-CKilpC9B.js";
import { n as __name } from "./chunk-Y2CYZVJY-DRF5oPcR.js";
import { m as log, p as select_default } from "./src-DXrlgw8l.js";
import { H as setAccDescription, K as setDiagramTitle, U as setAccTitle, Y as setupGraphViewbox2, a as clear, b as getConfig, f as defaultConfig_default, s as common_default, v as getAccDescription, w as getDiagramTitle, x as getConfig2, y as getAccTitle } from "./chunk-DU6HZSFF-Rlm_otCx.js";
import "./purify.es-Ddnop6vN.js";
import "./dist-DRK-BflQ.js";
import { _ as utils_default, a as cleanAndMerge, h as random } from "./chunk-75Z2AOVW-DlWr2fif.js";
import { t as populateCommonDb } from "./chunk-JWPE2WC7-Cv3uUh-s.js";
import { n as parse } from "./mermaid-parser.core-D-n-19AD.js";
import { t as ImperativeState } from "./chunk-2Q5K7J3B-9gsxwa9s.js";
var commitType = {
	NORMAL: 0,
	REVERSE: 1,
	HIGHLIGHT: 2,
	MERGE: 3,
	CHERRY_PICK: 4
}, DEFAULT_GITGRAPH_CONFIG = defaultConfig_default.gitGraph, getConfig3 = /* @__PURE__ */ __name(() => cleanAndMerge({
	...DEFAULT_GITGRAPH_CONFIG,
	...getConfig().gitGraph
}), "getConfig"), state = new ImperativeState(() => {
	let i = getConfig3(), N = i.mainBranchName, P = i.mainBranchOrder;
	return {
		mainBranchName: N,
		commits: /* @__PURE__ */ new Map(),
		head: null,
		branchConfig: /* @__PURE__ */ new Map([[N, {
			name: N,
			order: P
		}]]),
		branches: /* @__PURE__ */ new Map([[N, null]]),
		currBranch: N,
		direction: "LR",
		seq: 0,
		options: {}
	};
});
function getID() {
	return random({ length: 7 });
}
__name(getID, "getID");
function uniqBy(i, N) {
	let P = /* @__PURE__ */ Object.create(null);
	return i.reduce((i, F) => {
		let I = N(F);
		return P[I] || (P[I] = !0, i.push(F)), i;
	}, []);
}
__name(uniqBy, "uniqBy");
var setDirection = /* @__PURE__ */ __name(function(i) {
	state.records.direction = i;
}, "setDirection"), setOptions = /* @__PURE__ */ __name(function(i) {
	log.debug("options str", i), i = i?.trim(), i ||= "{}";
	try {
		state.records.options = JSON.parse(i);
	} catch (i) {
		log.error("error while parsing gitGraph options", i.message);
	}
}, "setOptions"), getOptions = /* @__PURE__ */ __name(function() {
	return state.records.options;
}, "getOptions"), commit = /* @__PURE__ */ __name(function(i) {
	let P = i.msg, F = i.id, I = i.type, L = i.tags;
	log.info("commit", P, F, I, L), log.debug("Entering commit:", P, F, I, L);
	let R = getConfig3();
	F = common_default.sanitizeText(F, R), P = common_default.sanitizeText(P, R), L = L?.map((i) => common_default.sanitizeText(i, R));
	let z = {
		id: F || state.records.seq + "-" + getID(),
		message: P,
		seq: state.records.seq++,
		type: I ?? commitType.NORMAL,
		tags: L ?? [],
		parents: state.records.head == null ? [] : [state.records.head.id],
		branch: state.records.currBranch
	};
	state.records.head = z, log.info("main branch", R.mainBranchName), state.records.commits.has(z.id) && log.warn(`Commit ID ${z.id} already exists`), state.records.commits.set(z.id, z), state.records.branches.set(state.records.currBranch, z.id), log.debug("in pushCommit " + z.id);
}, "commit"), branch = /* @__PURE__ */ __name(function(i) {
	let P = i.name, F = i.order;
	if (P = common_default.sanitizeText(P, getConfig3()), state.records.branches.has(P)) throw Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${P}")`);
	state.records.branches.set(P, state.records.head == null ? null : state.records.head.id), state.records.branchConfig.set(P, {
		name: P,
		order: F
	}), checkout(P), log.debug("in createBranch");
}, "branch"), merge = /* @__PURE__ */ __name((i) => {
	let P = i.branch, F = i.id, I = i.type, L = i.tags, R = getConfig3();
	P = common_default.sanitizeText(P, R), F &&= common_default.sanitizeText(F, R);
	let z = state.records.branches.get(state.records.currBranch), B = state.records.branches.get(P), V = z ? state.records.commits.get(z) : void 0, U = B ? state.records.commits.get(B) : void 0;
	if (V && U && V.branch === P) throw Error(`Cannot merge branch '${P}' into itself.`);
	if (state.records.currBranch === P) {
		let i = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Cannot merge a branch to itself");
		throw i.hash = {
			text: `merge ${P}`,
			token: `merge ${P}`,
			expected: ["branch abc"]
		}, i;
	}
	if (V === void 0 || !V) {
		let i = /* @__PURE__ */ Error(`Incorrect usage of "merge". Current branch (${state.records.currBranch})has no commits`);
		throw i.hash = {
			text: `merge ${P}`,
			token: `merge ${P}`,
			expected: ["commit"]
		}, i;
	}
	if (!state.records.branches.has(P)) {
		let i = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Branch to be merged (" + P + ") does not exist");
		throw i.hash = {
			text: `merge ${P}`,
			token: `merge ${P}`,
			expected: [`branch ${P}`]
		}, i;
	}
	if (U === void 0 || !U) {
		let i = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Branch to be merged (" + P + ") has no commits");
		throw i.hash = {
			text: `merge ${P}`,
			token: `merge ${P}`,
			expected: ["\"commit\""]
		}, i;
	}
	if (V === U) {
		let i = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Both branches have same head");
		throw i.hash = {
			text: `merge ${P}`,
			token: `merge ${P}`,
			expected: ["branch abc"]
		}, i;
	}
	if (F && state.records.commits.has(F)) {
		let i = /* @__PURE__ */ Error("Incorrect usage of \"merge\". Commit with id:" + F + " already exists, use different custom id");
		throw i.hash = {
			text: `merge ${P} ${F} ${I} ${L?.join(" ")}`,
			token: `merge ${P} ${F} ${I} ${L?.join(" ")}`,
			expected: [`merge ${P} ${F}_UNIQUE ${I} ${L?.join(" ")}`]
		}, i;
	}
	let W = B || "", G = {
		id: F || `${state.records.seq}-${getID()}`,
		message: `merged branch ${P} into ${state.records.currBranch}`,
		seq: state.records.seq++,
		parents: state.records.head == null ? [] : [state.records.head.id, W],
		branch: state.records.currBranch,
		type: commitType.MERGE,
		customType: I,
		customId: !!F,
		tags: L ?? []
	};
	state.records.head = G, state.records.commits.set(G.id, G), state.records.branches.set(state.records.currBranch, G.id), log.debug(state.records.branches), log.debug("in mergeBranch");
}, "merge"), cherryPick = /* @__PURE__ */ __name(function(i) {
	let P = i.id, F = i.targetId, I = i.tags, L = i.parent;
	log.debug("Entering cherryPick:", P, F, I);
	let R = getConfig3();
	if (P = common_default.sanitizeText(P, R), F = common_default.sanitizeText(F, R), I = I?.map((i) => common_default.sanitizeText(i, R)), L = common_default.sanitizeText(L, R), !P || !state.records.commits.has(P)) {
		let i = /* @__PURE__ */ Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
		throw i.hash = {
			text: `cherryPick ${P} ${F}`,
			token: `cherryPick ${P} ${F}`,
			expected: ["cherry-pick abc"]
		}, i;
	}
	let z = state.records.commits.get(P);
	if (z === void 0 || !z) throw Error("Incorrect usage of \"cherryPick\". Source commit id should exist and provided");
	if (L && !(Array.isArray(z.parents) && z.parents.includes(L))) throw /* @__PURE__ */ Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
	let B = z.branch;
	if (z.type === commitType.MERGE && !L) throw /* @__PURE__ */ Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
	if (!F || !state.records.commits.has(F)) {
		if (B === state.records.currBranch) {
			let i = /* @__PURE__ */ Error("Incorrect usage of \"cherryPick\". Source commit is already on current branch");
			throw i.hash = {
				text: `cherryPick ${P} ${F}`,
				token: `cherryPick ${P} ${F}`,
				expected: ["cherry-pick abc"]
			}, i;
		}
		let i = state.records.branches.get(state.records.currBranch);
		if (i === void 0 || !i) {
			let i = /* @__PURE__ */ Error(`Incorrect usage of "cherry-pick". Current branch (${state.records.currBranch})has no commits`);
			throw i.hash = {
				text: `cherryPick ${P} ${F}`,
				token: `cherryPick ${P} ${F}`,
				expected: ["cherry-pick abc"]
			}, i;
		}
		let R = state.records.commits.get(i);
		if (R === void 0 || !R) {
			let i = /* @__PURE__ */ Error(`Incorrect usage of "cherry-pick". Current branch (${state.records.currBranch})has no commits`);
			throw i.hash = {
				text: `cherryPick ${P} ${F}`,
				token: `cherryPick ${P} ${F}`,
				expected: ["cherry-pick abc"]
			}, i;
		}
		let V = {
			id: state.records.seq + "-" + getID(),
			message: `cherry-picked ${z?.message} into ${state.records.currBranch}`,
			seq: state.records.seq++,
			parents: state.records.head == null ? [] : [state.records.head.id, z.id],
			branch: state.records.currBranch,
			type: commitType.CHERRY_PICK,
			tags: I ? I.filter(Boolean) : [`cherry-pick:${z.id}${z.type === commitType.MERGE ? `|parent:${L}` : ""}`]
		};
		state.records.head = V, state.records.commits.set(V.id, V), state.records.branches.set(state.records.currBranch, V.id), log.debug(state.records.branches), log.debug("in cherryPick");
	}
}, "cherryPick"), checkout = /* @__PURE__ */ __name(function(i) {
	if (i = common_default.sanitizeText(i, getConfig3()), state.records.branches.has(i)) {
		state.records.currBranch = i;
		let N = state.records.branches.get(state.records.currBranch);
		N === void 0 || !N ? state.records.head = null : state.records.head = state.records.commits.get(N) ?? null;
	} else {
		let N = /* @__PURE__ */ Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${i}")`);
		throw N.hash = {
			text: `checkout ${i}`,
			token: `checkout ${i}`,
			expected: [`branch ${i}`]
		}, N;
	}
}, "checkout");
function upsert(i, N, P) {
	let F = i.indexOf(N);
	F === -1 ? i.push(P) : i.splice(F, 1, P);
}
__name(upsert, "upsert");
function prettyPrintCommitHistory(i) {
	let P = i.reduce((i, N) => i.seq > N.seq ? i : N, i[0]), F = "";
	i.forEach(function(i) {
		i === P ? F += "	*" : F += "	|";
	});
	let I = [
		F,
		P.id,
		P.seq
	];
	for (let i in state.records.branches) state.records.branches.get(i) === P.id && I.push(i);
	if (log.debug(I.join(" ")), P.parents && P.parents.length == 2 && P.parents[0] && P.parents[1]) {
		let N = state.records.commits.get(P.parents[0]);
		upsert(i, P, N), P.parents[1] && i.push(state.records.commits.get(P.parents[1]));
	} else if (P.parents.length == 0) return;
	else if (P.parents[0]) {
		let N = state.records.commits.get(P.parents[0]);
		upsert(i, P, N);
	}
	i = uniqBy(i, (i) => i.id), prettyPrintCommitHistory(i);
}
__name(prettyPrintCommitHistory, "prettyPrintCommitHistory");
var prettyPrint = /* @__PURE__ */ __name(function() {
	log.debug(state.records.commits);
	let i = getCommitsArray()[0];
	prettyPrintCommitHistory([i]);
}, "prettyPrint"), clear2 = /* @__PURE__ */ __name(function() {
	state.reset(), clear();
}, "clear"), getBranchesAsObjArray = /* @__PURE__ */ __name(function() {
	return [...state.records.branchConfig.values()].map((i, N) => i.order !== null && i.order !== void 0 ? i : {
		...i,
		order: parseFloat(`0.${N}`)
	}).sort((i, N) => (i.order ?? 0) - (N.order ?? 0)).map(({ name: i }) => ({ name: i }));
}, "getBranchesAsObjArray"), getBranches = /* @__PURE__ */ __name(function() {
	return state.records.branches;
}, "getBranches"), getCommits = /* @__PURE__ */ __name(function() {
	return state.records.commits;
}, "getCommits"), getCommitsArray = /* @__PURE__ */ __name(function() {
	let i = [...state.records.commits.values()];
	return i.forEach(function(i) {
		log.debug(i.id);
	}), i.sort((i, N) => i.seq - N.seq), i;
}, "getCommitsArray"), db = {
	commitType,
	getConfig: getConfig3,
	setDirection,
	setOptions,
	getOptions,
	commit,
	branch,
	merge,
	cherryPick,
	checkout,
	prettyPrint,
	clear: clear2,
	getBranchesAsObjArray,
	getBranches,
	getCommits,
	getCommitsArray,
	getCurrentBranch: /* @__PURE__ */ __name(function() {
		return state.records.currBranch;
	}, "getCurrentBranch"),
	getDirection: /* @__PURE__ */ __name(function() {
		return state.records.direction;
	}, "getDirection"),
	getHead: /* @__PURE__ */ __name(function() {
		return state.records.head;
	}, "getHead"),
	setAccTitle,
	getAccTitle,
	getAccDescription,
	setAccDescription,
	setDiagramTitle,
	getDiagramTitle
}, populate = /* @__PURE__ */ __name((i, N) => {
	populateCommonDb(i, N), i.dir && N.setDirection(i.dir);
	for (let P of i.statements) parseStatement(P, N);
}, "populate"), parseStatement = /* @__PURE__ */ __name((P, F) => {
	let I = {
		Commit: /* @__PURE__ */ __name((i) => F.commit(parseCommit(i)), "Commit"),
		Branch: /* @__PURE__ */ __name((i) => F.branch(parseBranch(i)), "Branch"),
		Merge: /* @__PURE__ */ __name((i) => F.merge(parseMerge(i)), "Merge"),
		Checkout: /* @__PURE__ */ __name((i) => F.checkout(parseCheckout(i)), "Checkout"),
		CherryPicking: /* @__PURE__ */ __name((i) => F.cherryPick(parseCherryPicking(i)), "CherryPicking")
	}[P.$type];
	I ? I(P) : log.error(`Unknown statement type: ${P.$type}`);
}, "parseStatement"), parseCommit = /* @__PURE__ */ __name((i) => ({
	id: i.id,
	msg: i.message ?? "",
	type: i.type === void 0 ? commitType.NORMAL : commitType[i.type],
	tags: i.tags ?? void 0
}), "parseCommit"), parseBranch = /* @__PURE__ */ __name((i) => ({
	name: i.name,
	order: i.order ?? 0
}), "parseBranch"), parseMerge = /* @__PURE__ */ __name((i) => ({
	branch: i.branch,
	id: i.id ?? "",
	type: i.type === void 0 ? void 0 : commitType[i.type],
	tags: i.tags ?? void 0
}), "parseMerge"), parseCheckout = /* @__PURE__ */ __name((i) => i.branch, "parseCheckout"), parseCherryPicking = /* @__PURE__ */ __name((i) => ({
	id: i.id,
	targetId: "",
	tags: i.tags?.length === 0 ? void 0 : i.tags,
	parent: i.parent
}), "parseCherryPicking"), parser = { parse: /* @__PURE__ */ __name(async (i) => {
	let P = await parse("gitGraph", i);
	log.debug(P), populate(P, db);
}, "parse") }, LAYOUT_OFFSET = 10, COMMIT_STEP = 40, PX = 4, PY = 2, THEME_COLOR_LIMIT = 8, REDUX_GEOMETRY_THEMES = /* @__PURE__ */ new Set([
	"redux",
	"redux-dark",
	"redux-color",
	"redux-dark-color"
]), REDUX_BRANCH_LABEL_PADDING_Y = 12, COLOR_THEMES = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), DARK_THEMES = /* @__PURE__ */ new Set([
	"dark",
	"redux-dark",
	"redux-dark-color",
	"neo-dark"
]), calcColorIndex = /* @__PURE__ */ __name((i, N, P = !1) => P && i > 0 ? (i - 1) % (N - 1) + 1 : i % N, "calcColorIndex"), branchPos = /* @__PURE__ */ new Map(), commitPos = /* @__PURE__ */ new Map(), defaultPos = 30, allCommitsDict = /* @__PURE__ */ new Map(), lanes = [], maxPos = 0, dir = "LR", clear3 = /* @__PURE__ */ __name(() => {
	branchPos.clear(), commitPos.clear(), allCommitsDict.clear(), maxPos = 0, lanes = [], dir = "LR";
}, "clear"), drawText = /* @__PURE__ */ __name((i) => {
	let N = document.createElementNS("http://www.w3.org/2000/svg", "text");
	return (typeof i == "string" ? i.split(/\\n|\n|<br\s*\/?>/gi) : i).forEach((i) => {
		let P = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
		P.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), P.setAttribute("dy", "1em"), P.setAttribute("x", "0"), P.setAttribute("class", "row"), P.textContent = i.trim(), N.appendChild(P);
	}), N;
}, "drawText"), findClosestParent = /* @__PURE__ */ __name((N) => {
	let P, F, I;
	return dir === "BT" ? (F = /* @__PURE__ */ __name((i, N) => i <= N, "comparisonFunc"), I = Infinity) : (F = /* @__PURE__ */ __name((i, N) => i >= N, "comparisonFunc"), I = 0), N.forEach((i) => {
		let N = dir === "TB" || dir == "BT" ? commitPos.get(i)?.y : commitPos.get(i)?.x;
		N !== void 0 && F(N, I) && (P = i, I = N);
	}), P;
}, "findClosestParent"), findClosestParentBT = /* @__PURE__ */ __name((i) => {
	let N = "", P = Infinity;
	return i.forEach((i) => {
		let F = commitPos.get(i).y;
		F <= P && (N = i, P = F);
	}), N || void 0;
}, "findClosestParentBT"), setParallelBTPos = /* @__PURE__ */ __name((i, N, P) => {
	let F = P, I = P, L = [];
	i.forEach((i) => {
		let P = N.get(i);
		if (!P) throw Error(`Commit not found for key ${i}`);
		P.parents.length ? (F = calculateCommitPosition(P), I = Math.max(F, I)) : L.push(P), setCommitPosition(P, F);
	}), F = I, L.forEach((i) => {
		setRootPosition(i, F, P);
	}), i.forEach((i) => {
		let P = N.get(i);
		if (P?.parents.length) {
			let i = findClosestParentBT(P.parents);
			F = commitPos.get(i).y - COMMIT_STEP, F <= I && (I = F);
			let N = branchPos.get(P.branch).pos, L = F - LAYOUT_OFFSET;
			commitPos.set(P.id, {
				x: N,
				y: L
			});
		}
	});
}, "setParallelBTPos"), findClosestParentPos = /* @__PURE__ */ __name((i) => {
	let N = findClosestParent(i.parents.filter((i) => i !== null));
	if (!N) throw Error(`Closest parent not found for commit ${i.id}`);
	let P = commitPos.get(N)?.y;
	if (P === void 0) throw Error(`Closest parent position not found for commit ${i.id}`);
	return P;
}, "findClosestParentPos"), calculateCommitPosition = /* @__PURE__ */ __name((i) => findClosestParentPos(i) + COMMIT_STEP, "calculateCommitPosition"), setCommitPosition = /* @__PURE__ */ __name((i, N) => {
	let P = branchPos.get(i.branch);
	if (!P) throw Error(`Branch not found for commit ${i.id}`);
	let F = P.pos, I = N + LAYOUT_OFFSET;
	return commitPos.set(i.id, {
		x: F,
		y: I
	}), {
		x: F,
		y: I
	};
}, "setCommitPosition"), setRootPosition = /* @__PURE__ */ __name((i, N, P) => {
	let F = branchPos.get(i.branch);
	if (!F) throw Error(`Branch not found for commit ${i.id}`);
	let I = N + P, L = F.pos;
	commitPos.set(i.id, {
		x: L,
		y: I
	});
}, "setRootPosition"), drawCommitBullet = /* @__PURE__ */ __name((i, N, P, F, I, L) => {
	let { theme: R } = getConfig2(), z = REDUX_GEOMETRY_THEMES.has(R ?? ""), B = COLOR_THEMES.has(R ?? ""), V = DARK_THEMES.has(R ?? "");
	if (L === commitType.HIGHLIGHT) i.append("rect").attr("x", P.x - 10 + (z ? 3 : 0)).attr("y", P.y - 10 + (z ? 3 : 0)).attr("width", z ? 14 : 20).attr("height", z ? 14 : 20).attr("class", `commit ${N.id} commit-highlight${calcColorIndex(I, THEME_COLOR_LIMIT, B)} ${F}-outer`), i.append("rect").attr("x", P.x - 6 + (z ? 2 : 0)).attr("y", P.y - 6 + (z ? 2 : 0)).attr("width", z ? 8 : 12).attr("height", z ? 8 : 12).attr("class", `commit ${N.id} commit${calcColorIndex(I, THEME_COLOR_LIMIT, B)} ${F}-inner`);
	else if (L === commitType.CHERRY_PICK) i.append("circle").attr("cx", P.x).attr("cy", P.y).attr("r", z ? 7 : 10).attr("class", `commit ${N.id} ${F}`), i.append("circle").attr("cx", P.x - 3).attr("cy", P.y + 2).attr("r", z ? 2.5 : 2.75).attr("fill", V ? "#000000" : "#fff").attr("class", `commit ${N.id} ${F}`), i.append("circle").attr("cx", P.x + 3).attr("cy", P.y + 2).attr("r", z ? 2.5 : 2.75).attr("fill", V ? "#000000" : "#fff").attr("class", `commit ${N.id} ${F}`), i.append("line").attr("x1", P.x + 3).attr("y1", P.y + 1).attr("x2", P.x).attr("y2", P.y - 5).attr("stroke", V ? "#000000" : "#fff").attr("class", `commit ${N.id} ${F}`), i.append("line").attr("x1", P.x - 3).attr("y1", P.y + 1).attr("x2", P.x).attr("y2", P.y - 5).attr("stroke", V ? "#000000" : "#fff").attr("class", `commit ${N.id} ${F}`);
	else {
		let R = i.append("circle");
		if (R.attr("cx", P.x), R.attr("cy", P.y), R.attr("r", z ? 7 : 10), R.attr("class", `commit ${N.id} commit${calcColorIndex(I, THEME_COLOR_LIMIT, B)}`), L === commitType.MERGE) {
			let L = i.append("circle");
			L.attr("cx", P.x), L.attr("cy", P.y), L.attr("r", z ? 5 : 6), L.attr("class", `commit ${F} ${N.id} commit${calcColorIndex(I, THEME_COLOR_LIMIT, B)}`);
		}
		if (L === commitType.REVERSE) {
			let L = i.append("path"), R = z ? 4 : 5;
			L.attr("d", `M ${P.x - R},${P.y - R}L${P.x + R},${P.y + R}M${P.x - R},${P.y + R}L${P.x + R},${P.y - R}`).attr("class", `commit ${F} ${N.id} commit${calcColorIndex(I, THEME_COLOR_LIMIT, B)}`);
		}
	}
}, "drawCommitBullet"), drawCommitLabel = /* @__PURE__ */ __name((i, N, P, F, I) => {
	if (N.type !== commitType.CHERRY_PICK && (N.customId && N.type === commitType.MERGE || N.type !== commitType.MERGE) && I.showCommitLabel) {
		let L = i.append("g"), R = L.insert("rect").attr("class", "commit-label-bkg"), z = L.append("text").attr("x", F).attr("y", P.y + 25).attr("class", "commit-label").text(N.id), B = z.node()?.getBBox();
		if (B && (R.attr("x", P.posWithOffset - B.width / 2 - PY).attr("y", P.y + 13.5).attr("width", B.width + 2 * PY).attr("height", B.height + 2 * PY), dir === "TB" || dir === "BT" ? (R.attr("x", P.x - (B.width + 4 * PX + 5)).attr("y", P.y - 12), z.attr("x", P.x - (B.width + 4 * PX)).attr("y", P.y + B.height - 12)) : z.attr("x", P.posWithOffset - B.width / 2), I.rotateCommitLabel)) if (dir === "TB" || dir === "BT") z.attr("transform", "rotate(-45, " + P.x + ", " + P.y + ")"), R.attr("transform", "rotate(-45, " + P.x + ", " + P.y + ")");
		else {
			let i = -7.5 - (B.width + 10) / 25 * 9.5, N = 10 + B.width / 25 * 8.5;
			L.attr("transform", "translate(" + i + ", " + N + ") rotate(-45, " + F + ", " + P.y + ")");
		}
	}
}, "drawCommitLabel"), drawCommitTags = /* @__PURE__ */ __name((i, N, P, F) => {
	if (N.tags.length > 0) {
		let I = 0, L = 0, R = 0, z = [];
		for (let F of N.tags.reverse()) {
			let N = i.insert("polygon"), B = i.append("circle"), V = i.append("text").attr("y", P.y - 16 - I).attr("class", "tag-label").text(F), H = V.node()?.getBBox();
			if (!H) throw Error("Tag bbox not found");
			L = Math.max(L, H.width), R = Math.max(R, H.height), V.attr("x", P.posWithOffset - H.width / 2), z.push({
				tag: V,
				hole: B,
				rect: N,
				yOffset: I
			}), I += 20;
		}
		for (let { tag: i, hole: N, rect: I, yOffset: B } of z) {
			let z = R / 2, V = P.y - 19.2 - B;
			if (I.attr("class", "tag-label-bkg").attr("points", `
      ${F - L / 2 - PX / 2},${V + PY}  
      ${F - L / 2 - PX / 2},${V - PY}
      ${P.posWithOffset - L / 2 - PX},${V - z - PY}
      ${P.posWithOffset + L / 2 + PX},${V - z - PY}
      ${P.posWithOffset + L / 2 + PX},${V + z + PY}
      ${P.posWithOffset - L / 2 - PX},${V + z + PY}`), N.attr("cy", V).attr("cx", F - L / 2 + PX / 2).attr("r", 1.5).attr("class", "tag-hole"), dir === "TB" || dir === "BT") {
				let R = F + B;
				I.attr("class", "tag-label-bkg").attr("points", `
        ${P.x},${R + 2}
        ${P.x},${R - 2}
        ${P.x + LAYOUT_OFFSET},${R - z - 2}
        ${P.x + LAYOUT_OFFSET + L + 4},${R - z - 2}
        ${P.x + LAYOUT_OFFSET + L + 4},${R + z + 2}
        ${P.x + LAYOUT_OFFSET},${R + z + 2}`).attr("transform", "translate(12,12) rotate(45, " + P.x + "," + F + ")"), N.attr("cx", P.x + PX / 2).attr("cy", R).attr("transform", "translate(12,12) rotate(45, " + P.x + "," + F + ")"), i.attr("x", P.x + 5).attr("y", R + 3).attr("transform", "translate(14,14) rotate(45, " + P.x + "," + F + ")");
			}
		}
	}
}, "drawCommitTags"), getCommitClassType = /* @__PURE__ */ __name((i) => {
	switch (i.customType ?? i.type) {
		case commitType.NORMAL: return "commit-normal";
		case commitType.REVERSE: return "commit-reverse";
		case commitType.HIGHLIGHT: return "commit-highlight";
		case commitType.MERGE: return "commit-merge";
		case commitType.CHERRY_PICK: return "commit-cherry-pick";
		default: return "commit-normal";
	}
}, "getCommitClassType"), calculatePosition = /* @__PURE__ */ __name((i, N, P, F) => {
	let I = {
		x: 0,
		y: 0
	};
	if (i.parents.length > 0) {
		let P = findClosestParent(i.parents);
		if (P) {
			let L = F.get(P) ?? I;
			return N === "TB" ? L.y + COMMIT_STEP : N === "BT" ? (F.get(i.id) ?? I).y - COMMIT_STEP : L.x + COMMIT_STEP;
		}
	} else if (N === "TB") return defaultPos;
	else if (N === "BT") return (F.get(i.id) ?? I).y - COMMIT_STEP;
	else return 0;
	return 0;
}, "calculatePosition"), getCommitPosition = /* @__PURE__ */ __name((i, N, P) => {
	let F = dir === "BT" && P ? N : N + LAYOUT_OFFSET, I = branchPos.get(i.branch)?.pos, L = dir === "TB" || dir === "BT" ? branchPos.get(i.branch)?.pos : F;
	if (L === void 0 || I === void 0) throw Error(`Position were undefined for commit ${i.id}`);
	let R = REDUX_GEOMETRY_THEMES.has(getConfig2().theme ?? "");
	return {
		x: L,
		y: dir === "TB" || dir === "BT" ? F : I + (R ? REDUX_BRANCH_LABEL_PADDING_Y / 2 + 1 : -2),
		posWithOffset: F
	};
}, "getCommitPosition"), drawCommits = /* @__PURE__ */ __name((N, P, F, I) => {
	let L = N.append("g").attr("class", "commit-bullets"), R = N.append("g").attr("class", "commit-labels"), z = dir === "TB" || dir === "BT" ? defaultPos : 0, B = [...P.keys()], V = I.parallelCommits ?? !1, H = /* @__PURE__ */ __name((i, N) => {
		let F = P.get(i)?.seq, I = P.get(N)?.seq;
		return F !== void 0 && I !== void 0 ? F - I : 0;
	}, "sortKeys"), U = B.sort(H);
	dir === "BT" && (V && setParallelBTPos(U, P, z), U = U.reverse()), U.forEach((i) => {
		let N = P.get(i);
		if (!N) throw Error(`Commit not found for key ${i}`);
		V && (z = calculatePosition(N, dir, z, commitPos));
		let B = getCommitPosition(N, z, V);
		if (F) {
			let i = getCommitClassType(N), P = N.customType ?? N.type;
			drawCommitBullet(L, N, B, i, branchPos.get(N.branch)?.index ?? 0, P), drawCommitLabel(R, N, B, z, I), drawCommitTags(R, N, B, z);
		}
		dir === "TB" || dir === "BT" ? commitPos.set(N.id, {
			x: B.x,
			y: B.posWithOffset
		}) : commitPos.set(N.id, {
			x: B.posWithOffset,
			y: B.y
		}), z = dir === "BT" && V ? z + COMMIT_STEP : z + COMMIT_STEP + LAYOUT_OFFSET, z > maxPos && (maxPos = z);
	});
}, "drawCommits"), shouldRerouteArrow = /* @__PURE__ */ __name((N, P, F, I, L) => {
	let R = (dir === "TB" || dir === "BT" ? F.x < I.x : F.y < I.y) ? P.branch : N.branch, z = /* @__PURE__ */ __name((i) => i.branch === R, "isOnBranchToGetCurve"), B = /* @__PURE__ */ __name((i) => i.seq > N.seq && i.seq < P.seq, "isBetweenCommits");
	return [...L.values()].some((i) => B(i) && z(i));
}, "shouldRerouteArrow"), findLane = /* @__PURE__ */ __name((i, N, P = 0) => {
	let F = i + Math.abs(i - N) / 2;
	return P > 5 ? F : lanes.every((i) => Math.abs(i - F) >= 10) ? (lanes.push(F), F) : findLane(i, N - Math.abs(i - N) / 5, P + 1);
}, "findLane"), drawArrow = /* @__PURE__ */ __name((i, N, P, F) => {
	let { theme: I } = getConfig2(), L = COLOR_THEMES.has(I ?? ""), R = commitPos.get(N.id), z = commitPos.get(P.id);
	if (R === void 0 || z === void 0) throw Error(`Commit positions not found for commits ${N.id} and ${P.id}`);
	let B = shouldRerouteArrow(N, P, R, z, F), V = "", H = "", U = 0, W = 0, K = branchPos.get(P.branch)?.index;
	P.type === commitType.MERGE && N.id !== P.parents[0] && (K = branchPos.get(N.branch)?.index);
	let q;
	if (B) {
		V = "A 10 10, 0, 0, 0,", H = "A 10 10, 0, 0, 1,", U = 10, W = 10;
		let i = R.y < z.y ? findLane(R.y, z.y) : findLane(z.y, R.y), P = R.x < z.x ? findLane(R.x, z.x) : findLane(z.x, R.x);
		dir === "TB" ? R.x < z.x ? q = `M ${R.x} ${R.y} L ${P - U} ${R.y} ${H} ${P} ${R.y + W} L ${P} ${z.y - U} ${V} ${P + W} ${z.y} L ${z.x} ${z.y}` : (K = branchPos.get(N.branch)?.index, q = `M ${R.x} ${R.y} L ${P + U} ${R.y} ${V} ${P} ${R.y + W} L ${P} ${z.y - U} ${H} ${P - W} ${z.y} L ${z.x} ${z.y}`) : dir === "BT" ? R.x < z.x ? q = `M ${R.x} ${R.y} L ${P - U} ${R.y} ${V} ${P} ${R.y - W} L ${P} ${z.y + U} ${H} ${P + W} ${z.y} L ${z.x} ${z.y}` : (K = branchPos.get(N.branch)?.index, q = `M ${R.x} ${R.y} L ${P + U} ${R.y} ${H} ${P} ${R.y - W} L ${P} ${z.y + U} ${V} ${P - W} ${z.y} L ${z.x} ${z.y}`) : R.y < z.y ? q = `M ${R.x} ${R.y} L ${R.x} ${i - U} ${V} ${R.x + W} ${i} L ${z.x - U} ${i} ${H} ${z.x} ${i + W} L ${z.x} ${z.y}` : (K = branchPos.get(N.branch)?.index, q = `M ${R.x} ${R.y} L ${R.x} ${i + U} ${H} ${R.x + W} ${i} L ${z.x - U} ${i} ${V} ${z.x} ${i - W} L ${z.x} ${z.y}`);
	} else V = "A 20 20, 0, 0, 0,", H = "A 20 20, 0, 0, 1,", U = 20, W = 20, dir === "TB" ? (R.x < z.x && (q = P.type === commitType.MERGE && N.id !== P.parents[0] ? `M ${R.x} ${R.y} L ${R.x} ${z.y - U} ${V} ${R.x + W} ${z.y} L ${z.x} ${z.y}` : `M ${R.x} ${R.y} L ${z.x - U} ${R.y} ${H} ${z.x} ${R.y + W} L ${z.x} ${z.y}`), R.x > z.x && (V = "A 20 20, 0, 0, 0,", H = "A 20 20, 0, 0, 1,", U = 20, W = 20, q = P.type === commitType.MERGE && N.id !== P.parents[0] ? `M ${R.x} ${R.y} L ${R.x} ${z.y - U} ${H} ${R.x - W} ${z.y} L ${z.x} ${z.y}` : `M ${R.x} ${R.y} L ${z.x + U} ${R.y} ${V} ${z.x} ${R.y + W} L ${z.x} ${z.y}`), R.x === z.x && (q = `M ${R.x} ${R.y} L ${z.x} ${z.y}`)) : dir === "BT" ? (R.x < z.x && (q = P.type === commitType.MERGE && N.id !== P.parents[0] ? `M ${R.x} ${R.y} L ${R.x} ${z.y + U} ${H} ${R.x + W} ${z.y} L ${z.x} ${z.y}` : `M ${R.x} ${R.y} L ${z.x - U} ${R.y} ${V} ${z.x} ${R.y - W} L ${z.x} ${z.y}`), R.x > z.x && (V = "A 20 20, 0, 0, 0,", H = "A 20 20, 0, 0, 1,", U = 20, W = 20, q = P.type === commitType.MERGE && N.id !== P.parents[0] ? `M ${R.x} ${R.y} L ${R.x} ${z.y + U} ${V} ${R.x - W} ${z.y} L ${z.x} ${z.y}` : `M ${R.x} ${R.y} L ${z.x + U} ${R.y} ${H} ${z.x} ${R.y - W} L ${z.x} ${z.y}`), R.x === z.x && (q = `M ${R.x} ${R.y} L ${z.x} ${z.y}`)) : (R.y < z.y && (q = P.type === commitType.MERGE && N.id !== P.parents[0] ? `M ${R.x} ${R.y} L ${z.x - U} ${R.y} ${H} ${z.x} ${R.y + W} L ${z.x} ${z.y}` : `M ${R.x} ${R.y} L ${R.x} ${z.y - U} ${V} ${R.x + W} ${z.y} L ${z.x} ${z.y}`), R.y > z.y && (q = P.type === commitType.MERGE && N.id !== P.parents[0] ? `M ${R.x} ${R.y} L ${z.x - U} ${R.y} ${V} ${z.x} ${R.y - W} L ${z.x} ${z.y}` : `M ${R.x} ${R.y} L ${R.x} ${z.y + U} ${H} ${R.x + W} ${z.y} L ${z.x} ${z.y}`), R.y === z.y && (q = `M ${R.x} ${R.y} L ${z.x} ${z.y}`));
	if (q === void 0) throw Error("Line definition not found");
	i.append("path").attr("d", q).attr("class", "arrow arrow" + calcColorIndex(K, THEME_COLOR_LIMIT, L));
}, "drawArrow"), drawArrows = /* @__PURE__ */ __name((i, N) => {
	let P = i.append("g").attr("class", "commit-arrows");
	[...N.keys()].forEach((i) => {
		let F = N.get(i);
		F.parents && F.parents.length > 0 && F.parents.forEach((i) => {
			drawArrow(P, N.get(i), F, N);
		});
	});
}, "drawArrows"), drawBranches = /* @__PURE__ */ __name((i, N, P, F) => {
	let { look: I, theme: L, themeVariables: R } = getConfig2(), { dropShadow: z, THEME_COLOR_LIMIT: B } = R, V = REDUX_GEOMETRY_THEMES.has(L ?? ""), H = COLOR_THEMES.has(L ?? ""), U = i.append("g");
	N.forEach((i, N) => {
		let L = calcColorIndex(N, V ? B : THEME_COLOR_LIMIT, H), R = branchPos.get(i.name)?.pos;
		if (R === void 0) throw Error(`Position not found for branch ${i.name}`);
		let W = dir === "TB" || dir === "BT" ? R : V ? R + REDUX_BRANCH_LABEL_PADDING_Y / 2 + 1 : R - 2, G = U.append("line");
		G.attr("x1", 0), G.attr("y1", W), G.attr("x2", maxPos), G.attr("y2", W), G.attr("class", "branch branch" + L), dir === "TB" ? (G.attr("y1", defaultPos), G.attr("x1", R), G.attr("y2", maxPos), G.attr("x2", R)) : dir === "BT" && (G.attr("y1", maxPos), G.attr("x1", R), G.attr("y2", defaultPos), G.attr("x2", R)), lanes.push(W);
		let K = i.name, q = drawText(K), J = U.insert("rect"), Y = U.insert("g").attr("class", "branchLabel").insert("g").attr("class", "label branch-label" + L);
		Y.node().appendChild(q);
		let X = q.getBBox(), Z = V ? 0 : 4, Q = V ? 16 : 0, $ = V ? REDUX_BRANCH_LABEL_PADDING_Y : 0;
		I === "neo" && J.attr("data-look", "neo"), J.attr("class", "branchLabelBkg label" + L).attr("style", I === "neo" ? `filter:${V ? `url(#${F}-drop-shadow)` : z}` : "").attr("rx", Z).attr("ry", Z).attr("x", -X.width - 4 - (P.rotateCommitLabel === !0 ? 30 : 0)).attr("y", -X.height / 2 + 10).attr("width", X.width + 18 + Q).attr("height", X.height + 4 + $), Y.attr("transform", "translate(" + (-X.width - 14 - (P.rotateCommitLabel === !0 ? 30 : 0) + Q / 2) + ", " + (W - X.height / 2 - 2) + ")"), dir === "TB" ? (J.attr("x", R - X.width / 2 - 10).attr("y", 0), Y.attr("transform", "translate(" + (R - X.width / 2 - 5) + ", 0)"), V && (J.attr("transform", `translate(${-Q / 2 - 3}, ${-$ - 10})`), Y.attr("transform", "translate(" + (R - X.width / 2 - 5) + ", " + (-$ * 2 + 7) + ")"))) : dir === "BT" ? (J.attr("x", R - X.width / 2 - 10).attr("y", maxPos), Y.attr("transform", "translate(" + (R - X.width / 2 - 5) + ", " + maxPos + ")"), V && (J.attr("transform", `translate(${-Q / 2 - 3}, ${$ + 10})`), Y.attr("transform", "translate(" + (R - X.width / 2 - 5) + ", " + (maxPos + $ * 2 + 4) + ")"))) : J.attr("transform", "translate(-19, " + (W - 12 - $ / 2) + ")");
	});
}, "drawBranches"), setBranchPosition = /* @__PURE__ */ __name(function(i, N, P, F, I) {
	return branchPos.set(i, {
		pos: N,
		index: P
	}), N += 50 + (I ? 40 : 0) + (dir === "TB" || dir === "BT" ? F.width / 2 : 0), N;
}, "setBranchPosition"), gitGraphRenderer_default = { draw: /* @__PURE__ */ __name(function(i, F, I, L) {
	clear3(), log.debug("in gitgraph renderer", i + "\n", "id:", F, I);
	let z = L.db;
	if (!z.getConfig) {
		log.error("getConfig method is not available on db");
		return;
	}
	let B = z.getConfig(), V = B.rotateCommitLabel ?? !1;
	allCommitsDict = z.getCommits();
	let H = z.getBranchesAsObjArray();
	dir = z.getDirection();
	let U = select_default(`[id="${F}"]`), { look: W, theme: K, themeVariables: J } = getConfig2(), { useGradient: Y, gradientStart: X, gradientStop: Z, filterColor: Q } = J;
	if (Y) {
		let i = U.append("defs").append("linearGradient").attr("id", F + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
		i.append("stop").attr("offset", "0%").attr("stop-color", X).attr("stop-opacity", 1), i.append("stop").attr("offset", "100%").attr("stop-color", Z).attr("stop-opacity", 1);
	}
	W === "neo" && REDUX_GEOMETRY_THEMES.has(K ?? "") && U.append("defs").append("filter").attr("id", F + "-drop-shadow").attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", Q);
	let $ = 0;
	H.forEach((i, N) => {
		let P = drawText(i.name), F = U.append("g"), I = F.insert("g").attr("class", "branchLabel"), L = I.insert("g").attr("class", "label branch-label");
		L.node()?.appendChild(P);
		let R = P.getBBox();
		$ = setBranchPosition(i.name, $, N, R, V), L.remove(), I.remove(), F.remove();
	}), drawCommits(U, allCommitsDict, !1, B), B.showBranches && drawBranches(U, H, B, F), drawArrows(U, allCommitsDict), drawCommits(U, allCommitsDict, !0, B), utils_default.insertTitle(U, "gitTitleText", B.titleTopMargin ?? 0, z.getDiagramTitle()), setupGraphViewbox2(void 0, U, B.diagramPadding, B.useMaxWidth);
}, "draw") }, GIT_NAMED_COLOR_COUNT = 8, REDUX_GEOMETRY_THEMES2 = /* @__PURE__ */ new Set([
	"redux",
	"redux-dark",
	"redux-color",
	"redux-dark-color"
]), COLOR_THEMES2 = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), NEO_THEMES = /* @__PURE__ */ new Set(["neo", "neo-dark"]), DARK_THEMES2 = /* @__PURE__ */ new Set([
	"dark",
	"redux-dark",
	"redux-dark-color",
	"neo-dark"
]), NEO_COLOR_GEN_THEMES = /* @__PURE__ */ new Set([
	"redux",
	"redux-dark",
	"redux-color",
	"redux-dark-color",
	"neo",
	"neo-dark"
]), genGitGraphGradient = /* @__PURE__ */ __name((i) => {
	let { svgId: N } = i, P = "";
	if (i.useGradient && N) for (let F = 0; F < i.THEME_COLOR_LIMIT; F++) P += `
      .label${F}  { fill: ${i.mainBkg}; stroke: url(${N}-gradient); stroke-width: ${i.strokeWidth};}
             `;
	return P;
}, "genGitGraphGradient"), genColor = /* @__PURE__ */ __name((i) => {
	let { theme: N, themeVariables: P } = getConfig(), { borderColorArray: F } = P, I = REDUX_GEOMETRY_THEMES2.has(N);
	if (NEO_THEMES.has(N)) {
		let N = "";
		for (let P = 0; P < i.THEME_COLOR_LIMIT; P++) if (P === 0) N += `
        .branch-label${P} { fill: ${i.nodeBorder};}
        .commit${P} { stroke: ${i.nodeBorder};   }
        .commit-highlight${P} { stroke: ${i.nodeBorder}; fill: ${i.nodeBorder}; }
        .arrow${P} { stroke: ${i.nodeBorder}; }
        .commit-bullets { fill: ${i.nodeBorder}; }
        .commit-cherry-pick${P} { stroke: ${i.nodeBorder}; }
        ${genGitGraphGradient(i)}`;
		else {
			let F = P % GIT_NAMED_COLOR_COUNT;
			N += `
        .branch-label${P} { fill: ${i["gitBranchLabel" + F]}; }
        .commit${P} { stroke: ${i["git" + F]}; fill: ${i["git" + F]}; }
        .commit-highlight${P} { stroke: ${i["gitInv" + F]}; fill: ${i["gitInv" + F]}; }
        .arrow${P} { stroke: ${i["git" + F]}; }
        `;
		}
		return N;
	} else if (COLOR_THEMES2.has(N)) {
		let P = "";
		for (let L = 0; L < i.THEME_COLOR_LIMIT; L++) if (L === 0) P += `
        .branch-label${L} { fill: ${i.nodeBorder}; ${I ? `font-weight:${i.noteFontWeight}` : ""} }
        .commit${L} { stroke: ${i.nodeBorder}; }
        .commit-highlight${L} { stroke: ${i.nodeBorder}; fill: ${i.mainBkg}; }
        .label${L}  { fill: ${i.mainBkg}; stroke: ${i.nodeBorder}; stroke-width: ${i.strokeWidth}; ${I ? `font-weight:${i.noteFontWeight}` : ""} }
        .arrow${L} { stroke: ${i.nodeBorder}; }
        .commit-bullets { fill: ${i.nodeBorder}; }
        `;
		else {
			let R = L % F.length;
			P += `
        .branch-label${L} { fill: ${i.nodeBorder}; ${I ? `font-weight:${i.noteFontWeight}` : ""} }
        .commit${L} { stroke: ${F[R]}; fill: ${F[R]}; }
        .commit-highlight${L} { stroke: ${F[R]}; fill: ${F[R]}; }
        .label${L}  { fill: ${DARK_THEMES2.has(N) ? i.mainBkg : F[R]}; stroke: ${F[R]};  stroke-width: ${i.strokeWidth}; }
        .arrow${L} { stroke: ${F[R]}; }
        `;
		}
		return P;
	} else {
		let N = "";
		for (let P = 0; P < i.THEME_COLOR_LIMIT; P++) N += `
        .branch-label${P} { fill: ${i.nodeBorder}; ${I ? `font-weight:${i.noteFontWeight}` : ""} }
        .commit${P} { stroke: ${i.nodeBorder};   }
        .commit-highlight${P} { stroke: ${i.nodeBorder}; fill: ${i.nodeBorder}; }
        .label${P}  { fill: ${i.mainBkg}; stroke: ${i.nodeBorder}; stroke-width: ${i.strokeWidth}; ${I ? `font-weight:${i.noteFontWeight}` : ""}}
        .arrow${P} { stroke: ${i.nodeBorder}; }
        .commit-bullets { fill: ${i.nodeBorder}; }
        .commit-cherry-pick${P} { stroke: ${i.nodeBorder}; }
        `;
		return N;
	}
}, "genColor"), normalTheme = /* @__PURE__ */ __name((i) => `${Array.from({ length: i.THEME_COLOR_LIMIT }, (i, N) => N).map((N) => {
	let P = N % GIT_NAMED_COLOR_COUNT;
	return `
        .branch-label${N} { fill: ${i["gitBranchLabel" + P]}; }
        .commit${N} { stroke: ${i["git" + P]}; fill: ${i["git" + P]}; }
        .commit-highlight${N} { stroke: ${i["gitInv" + P]}; fill: ${i["gitInv" + P]}; }
        .label${N}  { fill: ${i["git" + P]}; }
        .arrow${N} { stroke: ${i["git" + P]}; }
        `;
}).join("\n")}`, "normalTheme"), diagram = {
	parser,
	db,
	renderer: gitGraphRenderer_default,
	styles: /* @__PURE__ */ __name((i) => {
		let { theme: N } = getConfig(), P = NEO_COLOR_GEN_THEMES.has(N);
		return `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  
  ${P ? genColor(i) : normalTheme(i)}

  .branch {
    stroke-width: ${i.strokeWidth};
    stroke: ${i.commitLineColor ?? i.lineColor};
    stroke-dasharray:  ${P ? "4 2" : "2"};
  }
  .commit-label { font-size: ${i.commitLabelFontSize}; fill: ${P ? i.nodeBorder : i.commitLabelColor}; ${P ? `font-weight:${i.noteFontWeight};` : ""}}
  .commit-label-bkg { font-size: ${i.commitLabelFontSize}; fill: ${P ? "transparent" : i.commitLabelBackground}; opacity: ${P ? "" : .5};  }
  .tag-label { font-size: ${i.tagLabelFontSize}; fill: ${i.tagLabelColor};}
  .tag-label-bkg { fill: ${P ? i.mainBkg : i.tagLabelBackground}; stroke: ${P ? i.nodeBorder : i.tagLabelBorder}; ${P ? `filter:${i.dropShadow}` : ""}  }
  .tag-hole { fill: ${i.textColor}; }

  .commit-merge {
    stroke: ${P ? i.mainBkg : i.primaryColor};
    fill: ${P ? i.mainBkg : i.primaryColor};
  }
  .commit-reverse {
    stroke: ${P ? i.mainBkg : i.primaryColor};
    fill: ${P ? i.mainBkg : i.primaryColor};
    stroke-width: ${P ? i.strokeWidth : 3};
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${P ? i.mainBkg : i.primaryColor};
    fill: ${P ? i.mainBkg : i.primaryColor};
  }

  .arrow {
    /* Intentional: neo themes keep the bold 8px arrow (like classic themes); only redux-geometry themes use the thinner options.strokeWidth. */
    stroke-width: ${REDUX_GEOMETRY_THEMES2.has(N) ? i.strokeWidth : 8};
    stroke-linecap: round;
    fill: none
  }
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${i.textColor};
  }
`;
	}, "getStyles")
};
export { diagram };
