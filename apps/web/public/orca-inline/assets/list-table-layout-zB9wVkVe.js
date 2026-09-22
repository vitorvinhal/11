function isPortaledRowMenuClick(e) {
	let c = e.target;
	return c instanceof Node && e.currentTarget instanceof Node ? !e.currentTarget.contains(c) : !1;
}
function isRowActivationKey(e) {
	return e.target === e.currentTarget ? e.key === "Enter" || e.key === " " : !1;
}
const LIST_TABLE_CONTAINER_CLASS = "rounded-md border border-border/50 bg-muted/20", LIST_TABLE_HEADER_CLASS = "sticky top-0 z-30 h-8 items-center gap-3 border-b border-border/50 bg-[color-mix(in_srgb,var(--muted)_40%,var(--background))] px-3 text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground", LIST_TABLE_ROW_CLASS = "group/list-table-row w-full min-h-11 scroll-mt-8 cursor-pointer items-center gap-3 px-3 py-3 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50", LIST_TABLE_ROW_SELECTED_CLASS = "bg-accent text-accent-foreground";
var LIST_TABLE_STICKY_CELL_BASE_CLASS = "sticky left-3 flex min-w-0 self-stretch items-center before:absolute before:-left-3 before:top-0 before:bottom-0 before:w-3 before:bg-inherit after:absolute after:-right-3 after:top-0 after:bottom-0 after:w-3 after:bg-inherit";
const LIST_TABLE_STICKY_HEADER_CELL_CLASS = `${LIST_TABLE_STICKY_CELL_BASE_CLASS} z-10 bg-[color-mix(in_srgb,var(--muted)_40%,var(--background))]`, LIST_TABLE_STICKY_ROW_CELL_CLASS = `${LIST_TABLE_STICKY_CELL_BASE_CLASS} z-20 bg-[color-mix(in_srgb,var(--muted)_20%,var(--background))] transition-colors group-hover/list-table-row:bg-accent group-data-[current=true]/list-table-row:bg-accent`;
export { LIST_TABLE_STICKY_HEADER_CELL_CLASS as a, isRowActivationKey as c, LIST_TABLE_ROW_SELECTED_CLASS as i, LIST_TABLE_HEADER_CLASS as n, LIST_TABLE_STICKY_ROW_CELL_CLASS as o, LIST_TABLE_ROW_CLASS as r, isPortaledRowMenuClick as s, LIST_TABLE_CONTAINER_CLASS as t };
