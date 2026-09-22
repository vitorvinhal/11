function formatPlanLabel(e) {
	let t = e?.trim();
	return t ? t.split(/[\s_-]+/).map((e) => {
		let t = e.toLowerCase();
		return t === "chatgpt" ? "ChatGPT" : t.charAt(0).toUpperCase() + t.slice(1);
	}).join(" ") : null;
}
function usageTextColorClass(e) {
	return e >= 80 ? "text-red-500" : e >= 60 ? "text-yellow-500" : "text-foreground";
}
export { usageTextColorClass as n, formatPlanLabel as t };
