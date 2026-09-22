var baseSensitivityCollator, numericCollator;
function compareBaseSensitivityLocaleText(n, r) {
	return baseSensitivityCollator ??= new Intl.Collator(void 0, { sensitivity: "base" }), baseSensitivityCollator.compare(n, r);
}
function compareNumericLocaleText(e, r) {
	return numericCollator ??= new Intl.Collator(void 0, { numeric: !0 }), numericCollator.compare(e, r);
}
export { compareNumericLocaleText as n, compareBaseSensitivityLocaleText as t };
