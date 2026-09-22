const DICTATION_CONTROL_EVENT = "dictation:control";
function dispatchDictationControl(t) {
	document.dispatchEvent(new CustomEvent(DICTATION_CONTROL_EVENT, { detail: t }));
}
export { dispatchDictationControl as n, DICTATION_CONTROL_EVENT as t };
