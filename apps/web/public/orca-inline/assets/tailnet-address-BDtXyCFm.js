function isTailnetIPv4Address(e) {
	let t = e.split(".");
	if (t.length !== 4) return !1;
	let n = t.map((e) => /^\d+$/.test(e) ? Number(e) : NaN);
	return n.some((e) => !Number.isInteger(e) || e < 0 || e > 255) ? !1 : n[0] === 100 && n[1] >= 64 && n[1] <= 127;
}
export { isTailnetIPv4Address as t };
