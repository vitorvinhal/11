import { p as editor } from "./editor.api2-B26FOp3A.js";
function createTrustedTypesPolicy(e, n) {
	let r = globalThis.MonacoEnvironment;
	if (r?.createTrustedTypesPolicy) try {
		return r.createTrustedTypesPolicy(e, n);
	} catch (e) {
		console.error(e);
		return;
	}
	try {
		return globalThis.trustedTypes?.createPolicy(e, n);
	} catch (e) {
		console.error(e);
		return;
	}
}
var ttPolicy = typeof self == "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope" && globalThis.workerttPolicy !== void 0 ? globalThis.workerttPolicy : createTrustedTypesPolicy("defaultWorkerFactory", { createScriptURL: (e) => e });
function getWorker(e) {
	let n = e.label, i = globalThis.MonacoEnvironment;
	if (i) {
		if (typeof i.getWorker == "function") return i.getWorker("workerMain.js", n);
		if (typeof i.getWorkerUrl == "function") {
			let e = i.getWorkerUrl("workerMain.js", n);
			return new Worker(ttPolicy ? ttPolicy.createScriptURL(e) : e, {
				name: n,
				type: "module"
			});
		}
	}
	if (e.createWorker) return e.createWorker();
	throw Error("You must define a function MonacoEnvironment.getWorkerUrl or MonacoEnvironment.getWorker");
}
function createWebWorker(n) {
	let r = Promise.resolve(getWorker({
		label: n.label ?? "monaco-editor-worker",
		moduleId: n.moduleId,
		createWorker: n.createWorker
	})).then((e) => (e.postMessage("ignore"), e.postMessage(n.createData), e));
	return editor.createWebWorker({
		worker: r,
		host: n.host,
		keepIdleModels: n.keepIdleModels
	});
}
export { createWebWorker as t };
