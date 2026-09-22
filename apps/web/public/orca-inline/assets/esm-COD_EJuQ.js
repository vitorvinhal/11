import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_react_dom } from "./react-dom-Cm0_4y6Q.js";
function createLazyMeasurementsView(e, u, d) {
	let f = Array(e);
	return new Proxy(f, { get(f, p, m) {
		if (typeof p == "string") {
			let m = p.charCodeAt(0);
			if (m >= 48 && m <= 57) {
				let m = +p;
				if (Number.isInteger(m) && m >= 0 && m < e) {
					let e = f[m];
					if (!e) {
						let p = u[m * 2];
						e = f[m] = {
							index: m,
							key: d(m),
							start: p,
							size: u[m * 2 + 1],
							end: p + u[m * 2 + 1],
							lane: 0
						};
					}
					return e;
				}
			}
			if (p === "length") return e;
		}
		return Reflect.get(f, p, m);
	} });
}
function memo(e, u, d) {
	let f = d.initialDeps ?? [], p, m = !0;
	function h() {
		let h = process.env.NODE_ENV !== "production" && !!d.key && !!d.debug?.call(d), g = 0;
		h && (g = Date.now());
		let _ = e();
		if (!(_.length !== f.length || _.some((e, u) => f[u] !== e))) return p;
		f = _;
		let v = 0;
		if (h && (v = Date.now()), p = u(..._), h) {
			let e = Math.round((Date.now() - g) * 100) / 100, u = Math.round((Date.now() - v) * 100) / 100, f = u / 16, p = (e, u) => {
				for (e = String(e); e.length < u;) e = " " + e;
				return e;
			};
			console.info(`%c⏱ ${p(u, 5)} /${p(e, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, d?.key);
		}
		return d?.onChange && !(m && d.skipInitialOnChange) && d.onChange(p), m = !1, p;
	}
	return h.updateDeps = (e) => {
		f = e;
	}, h;
}
function notUndefined(e, u) {
	if (e === void 0) throw Error(`Unexpected undefined${u ? `: ${u}` : ""}`);
	return e;
}
var approxEqual = (e, u) => Math.abs(e - u) < 1.01, debounce = (e, u, d) => {
	let f;
	return Object.assign(function(...p) {
		e.clearTimeout(f), f = e.setTimeout(() => u.apply(this, p), d);
	}, { cancel: () => {
		e.clearTimeout(f);
	} });
}, _isIOSResult, isIOSWebKit = () => {
	if (_isIOSResult !== void 0) return _isIOSResult;
	if (typeof navigator > "u") return _isIOSResult = !1;
	if (/iP(hone|od|ad)/.test(navigator.userAgent)) return _isIOSResult = !0;
	let e = navigator.maxTouchPoints;
	return _isIOSResult = navigator.platform === "MacIntel" && e !== void 0 && e > 0;
}, getRect = (e) => {
	let { offsetWidth: u, offsetHeight: d } = e;
	return {
		width: u,
		height: d
	};
}, defaultKeyExtractor = (e) => e, defaultRangeExtractor = (e) => {
	let u = Math.max(e.startIndex - e.overscan, 0), d = Math.min(e.endIndex + e.overscan, e.count - 1) - u + 1, f = Array(d);
	for (let e = 0; e < d; e++) f[e] = u + e;
	return f;
}, observeElementRect = (e, u) => {
	let d = e.scrollElement;
	if (!d) return;
	let f = e.targetWindow;
	if (!f) return;
	let p = (e) => {
		let { width: d, height: f } = e;
		u({
			width: Math.round(d),
			height: Math.round(f)
		});
	};
	if (p(getRect(d)), !f.ResizeObserver) return () => {};
	let m = new f.ResizeObserver((u) => {
		let f = () => {
			let e = u[0];
			if (e?.borderBoxSize) {
				let u = e.borderBoxSize[0];
				if (u) {
					p({
						width: u.inlineSize,
						height: u.blockSize
					});
					return;
				}
			}
			p(getRect(d));
		};
		e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(f) : f();
	});
	return m.observe(d, { box: "border-box" }), () => {
		m.unobserve(d);
	};
}, addEventListenerOptions = { passive: !0 }, supportsScrollend = typeof window > "u" ? !0 : "onscrollend" in window, observeOffset = (e, u, d) => {
	let f = e.scrollElement;
	if (!f) return;
	let p = e.targetWindow;
	if (!p) return;
	let m = e.options.useScrollendEvent && supportsScrollend, h = 0, _ = m ? null : debounce(p, () => u(h, !1), e.options.isScrollingResetDelay), v = (e) => () => {
		h = d(f), _?.(), u(h, e);
	}, y = v(!0), b = v(!1);
	return f.addEventListener("scroll", y, addEventListenerOptions), m && f.addEventListener("scrollend", b, addEventListenerOptions), () => {
		f.removeEventListener("scroll", y), m && f.removeEventListener("scrollend", b), _?.cancel();
	};
}, observeElementOffset = (e, u) => observeOffset(e, u, (u) => {
	let { horizontal: d, isRtl: f } = e.options;
	return d ? u.scrollLeft * (f && -1 || 1) : u.scrollTop;
}), measureElement = (e, u, d) => {
	if (d.options.useCachedMeasurements) {
		let u = d.indexFromElement(e), f = d.options.getItemKey(u);
		return d.itemSizeCache.get(f) ?? d.options.estimateSize(u);
	}
	if (u?.borderBoxSize) {
		let e = u.borderBoxSize[0];
		if (e) return Math.round(e[d.options.horizontal ? "inlineSize" : "blockSize"]);
	}
	if (!u) {
		let u = d.indexFromElement(e), f = d.options.getItemKey(u), p = d.itemSizeCache.get(f);
		if (p !== void 0) return p;
	}
	return e[d.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, elementScroll = (e, { adjustments: u = 0, behavior: d }, f) => {
	var p, m;
	(m = (p = f.scrollElement)?.scrollTo) == null || m.call(p, {
		[f.options.horizontal ? "left" : "top"]: e + u,
		behavior: d
	});
}, Virtualizer = class {
	constructor(e) {
		this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
			var e;
			return ((e = this.targetWindow?.performance)?.now)?.call(e) ?? Date.now();
		}, this.observer = /* @__PURE__ */ (() => {
			let e = null, u = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((e) => {
				e.forEach((e) => {
					let u = () => {
						let u = e.target, d = this.indexFromElement(u);
						if (!u.isConnected) {
							this.observer.unobserve(u);
							for (let [e, d] of this.elementsCache) if (d === u) {
								this.elementsCache.delete(e);
								break;
							}
							return;
						}
						this.isIndexInRange(d) && this.shouldMeasureDuringScroll(d) && this.resizeItem(d, this.options.measureElement(u, e, this));
					};
					this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(u) : u();
				});
			}));
			return {
				disconnect: () => {
					var d;
					(d = u()) == null || d.disconnect(), e = null;
				},
				observe: (e) => u()?.observe(e, { box: "border-box" }),
				unobserve: (e) => u()?.unobserve(e)
			};
		})(), this.range = null, this.setOptions = (e) => {
			let u = {
				debug: !1,
				initialOffset: 0,
				overscan: 1,
				paddingStart: 0,
				paddingEnd: 0,
				scrollPaddingStart: 0,
				scrollPaddingEnd: 0,
				horizontal: !1,
				getItemKey: defaultKeyExtractor,
				rangeExtractor: defaultRangeExtractor,
				onChange: () => {},
				measureElement,
				initialRect: {
					width: 0,
					height: 0
				},
				scrollMargin: 0,
				gap: 0,
				indexAttribute: "data-index",
				initialMeasurementsCache: [],
				lanes: 1,
				anchorTo: "start",
				followOnAppend: !1,
				scrollEndThreshold: 1,
				isScrollingResetDelay: 150,
				enabled: !0,
				isRtl: !1,
				useScrollendEvent: !1,
				useAnimationFrameWithResizeObserver: !1,
				laneAssignmentMode: "estimate",
				useCachedMeasurements: !1
			};
			for (let d in e) {
				let f = e[d];
				f !== void 0 && (u[d] = f);
			}
			let d = this.options, f = null, p = null, m = !1;
			if (d !== void 0 && d.enabled && u.enabled && u.anchorTo === "end" && this.scrollElement !== null) {
				let e = d.count, h = u.count, g = this.getMeasurements(), _ = e > 0 ? g[0]?.key ?? d.getItemKey(0) : null, v = e > 0 ? g[e - 1]?.key ?? d.getItemKey(e - 1) : null;
				if (h !== e || e > 0 && h > 0 && (u.getItemKey(0) !== _ || u.getItemKey(h - 1) !== v)) {
					m = !0;
					let _ = e > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? g[0] : null;
					_ && (f = [_.key, this.getScrollOffset() - _.start]);
					let y = u.followOnAppend === !0 ? "auto" : u.followOnAppend || null;
					y && h > e && this.isAtEnd(d.scrollEndThreshold) && (e === 0 || u.getItemKey(h - 1) !== v) && (p = y);
				}
			}
			this.options = u, m && (this.pendingMin = 0, this.itemSizeCacheVersion++);
			let h = !1, g = 0;
			if (f && this.scrollOffset !== null) {
				let [e, u] = f, d = this.getMeasurements(), { count: p, getItemKey: m } = this.options, _ = 0;
				for (; _ < p && m(_) !== e;) _++;
				if (_ < p) {
					let e = d[_];
					if (e) {
						let d = Math.max(0, e.start + u);
						d !== this.scrollOffset && (g = d - this.scrollOffset, this.scrollOffset = d, h = !0);
					}
				}
			}
			(h || p) && (this.pendingScrollAnchor = [
				h ? f[0] : null,
				h ? f[1] : 0,
				p,
				g
			]);
		}, this.notify = (e) => {
			var u, d;
			(d = (u = this.options).onChange) == null || d.call(u, this, e);
		}, this.maybeNotify = memo(() => (this.calculateRange(), [
			this.isScrolling,
			this.range ? this.range.startIndex : null,
			this.range ? this.range.endIndex : null
		]), (e) => {
			this.notify(e);
		}, {
			key: process.env.NODE_ENV !== "production" && "maybeNotify",
			debug: () => this.options.debug,
			initialDeps: [
				this.isScrolling,
				this.range ? this.range.startIndex : null,
				this.range ? this.range.endIndex : null
			]
		}), this.cleanup = () => {
			this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.isScrolling = !1, this.scrollDirection = null, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this.scrollElement = null, this.targetWindow = null;
		}, this._didMount = () => () => {
			this.cleanup();
		}, this._willUpdate = () => {
			let e = this.options.enabled ? this.options.getScrollElement() : null;
			if (this.scrollElement !== e) {
				if (this.cleanup(), !e) {
					this.maybeNotify();
					return;
				}
				if (this.scrollElement = e, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = this.scrollElement?.window ?? null, this.elementsCache.forEach((e) => {
					this.observer.observe(e);
				}), this.unsubs.push(this.options.observeElementRect(this, (e) => {
					this.scrollRect = e, this.maybeNotify();
				})), this.unsubs.push(this.options.observeElementOffset(this, (e, u) => {
					if (u && this._intendedScrollOffset === null && e === this.scrollOffset) return;
					this._intendedScrollOffset !== null && Math.abs(e - this._intendedScrollOffset) < 1.5 && (e = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0;
					let d = this.getScrollOffset();
					this.scrollDirection = u ? d === e ? this.scrollDirection : d < e ? "forward" : "backward" : null, this.scrollOffset = e, this.isScrolling = u, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
				})), "addEventListener" in this.scrollElement) {
					let e = this.scrollElement, u = () => {
						this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
					}, d = () => {
						this._iosTouching = !1, !(!isIOSWebKit() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
							this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
						}, 150));
					};
					e.addEventListener("touchstart", u, addEventListenerOptions), e.addEventListener("touchend", d, addEventListenerOptions), this.unsubs.push(() => {
						e.removeEventListener("touchstart", u), e.removeEventListener("touchend", d), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
					});
				}
				this._scrollToOffset(this.getScrollOffset(), {
					adjustments: void 0,
					behavior: void 0
				});
			}
			let u = this.pendingScrollAnchor;
			if (this.pendingScrollAnchor = null, u && this.scrollElement && this.options.enabled) {
				let [e, d, f, p] = u;
				e !== null && !f && (isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? p !== 0 && (this._iosDeferredAdjustment += p) : this._scrollToOffset(this.getScrollOffset(), {
					adjustments: void 0,
					behavior: void 0
				})), f && this.scrollToEnd({ behavior: f });
			}
		}, this._flushIosDeferredIfReady = () => {
			if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
			let e = this.getScrollOffset(), u = this.getMaxScrollOffset();
			if (e < 0 || e > u) return;
			if (this._iosDeferredAdjustment < 0 && e >= u - 1) {
				this._iosDeferredAdjustment = 0;
				return;
			}
			let d = this._iosDeferredAdjustment;
			this._iosDeferredAdjustment = 0, this._scrollToOffset(e, {
				adjustments: this.scrollAdjustments += d,
				behavior: void 0
			});
		}, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getMeasurementOptions = memo(() => [
			this.options.count,
			this.options.paddingStart,
			this.options.scrollMargin,
			this.options.getItemKey,
			this.options.enabled,
			this.options.lanes,
			this.options.laneAssignmentMode,
			this.options.gap
		], (e, u, d, f, p, m, h, g) => (this.prevLanes !== void 0 && this.prevLanes !== m && (this.lanesChangedFlag = !0), this.prevLanes = m, this.pendingMin = null, {
			count: e,
			paddingStart: u,
			scrollMargin: d,
			getItemKey: f,
			enabled: p,
			lanes: m,
			laneAssignmentMode: h,
			gap: g
		}), { key: !1 }), this.isIndexInRange = (e) => e >= 0 && e < this.options.count, this.getMeasurements = memo(() => [this.getMeasurementOptions(), this.itemSizeCacheVersion], ({ count: e, paddingStart: u, scrollMargin: d, getItemKey: p, enabled: m, lanes: h, laneAssignmentMode: g, gap: _ }, v) => {
			let y = this.itemSizeCache;
			if (!m) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
			if (this.laneAssignments.size > e) for (let u of this.laneAssignments.keys()) u >= e && this.laneAssignments.delete(u);
			this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((e) => {
				this.itemSizeCache.set(e.key, e.size);
			}));
			let b = this.lanesSettling ? 0 : this.pendingMin ?? 0;
			if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = !1), h === 1) {
				let m = e * 2, h = this._flatMeasurements;
				if (!h || h.length < m) {
					let e = new Float64Array(m);
					h && b > 0 && e.set(h.subarray(0, b * 2)), h = e, this._flatMeasurements = h;
				}
				let g;
				if (b === 0) g = u + d;
				else {
					let e = b - 1;
					g = h[e * 2] + h[e * 2 + 1] + _;
				}
				for (let u = b; u < e; u++) {
					let e = p(u), d = y.get(e), f = typeof d == "number" ? d : this.options.estimateSize(u);
					h[u * 2] = g, h[u * 2 + 1] = f, g += f + _;
				}
				let v = createLazyMeasurementsView(e, h, p);
				return this.measurementsCache = v, v;
			}
			let x = this.measurementsCache.slice(0, b), S = Array(h).fill(void 0), C = new Float64Array(h), w = 0;
			for (let e = 0; e < b; e++) {
				let u = x[e];
				u && (S[u.lane] === void 0 && w++, S[u.lane] = e, C[u.lane] = u.end);
			}
			for (let f = b; f < e; f++) {
				let e = p(f), m = this.laneAssignments.get(f), v, b, T = g === "estimate" || y.has(e);
				if (m !== void 0 && this.options.lanes > 1) {
					v = m;
					let e = S[v], f = e === void 0 ? void 0 : x[e];
					b = f ? f.end + _ : u + d;
				} else if (w === h) {
					let e = 0, u = C[0], d = S[0];
					for (let f = 1; f < h; f++) {
						let p = C[f];
						(p < u || p === u && S[f] < d) && (e = f, u = p, d = S[f]);
					}
					v = e, b = u + _, T && this.laneAssignments.set(f, v);
				} else v = f % this.options.lanes, b = u + d, T && this.laneAssignments.set(f, v);
				let E = y.get(e), D = typeof E == "number" ? E : this.options.estimateSize(f), O = b + D;
				x[f] = {
					index: f,
					start: b,
					size: D,
					end: O,
					key: e,
					lane: v
				}, S[v] === void 0 && w++, S[v] = f, C[v] = O;
			}
			return this.measurementsCache = x, x;
		}, {
			key: process.env.NODE_ENV !== "production" && "getMeasurements",
			debug: () => this.options.debug
		}), this.calculateRange = memo(() => [
			this.getMeasurements(),
			this.getSize(),
			this.getScrollOffset(),
			this.options.lanes
		], (e, u, d, f) => e.length === 0 || u === 0 ? (this.range = null, null) : (this.range = calculateRangeImpl(e, u, d, f, f === 1 && this._flatMeasurements != null ? this._flatMeasurements : null), this.range), {
			key: process.env.NODE_ENV !== "production" && "calculateRange",
			debug: () => this.options.debug
		}), this.getVirtualIndexes = memo(() => {
			let e = null, u = null, d = this.calculateRange();
			return d && (e = d.startIndex, u = d.endIndex), this.maybeNotify.updateDeps([
				this.isScrolling,
				e,
				u
			]), [
				this.options.rangeExtractor,
				this.options.overscan,
				this.options.count,
				e,
				u
			];
		}, (e, u, d, f, p) => f === null || p === null ? [] : e({
			startIndex: f,
			endIndex: p,
			overscan: u,
			count: d
		}), {
			key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
			debug: () => this.options.debug
		}), this.indexFromElement = (e) => {
			let u = this.options.indexAttribute, d = e.getAttribute(u);
			return d ? parseInt(d, 10) : (console.warn(`Missing attribute name '${u}={index}' on measured element.`), -1);
		}, this.shouldMeasureDuringScroll = (e) => {
			if (!this.scrollState || this.scrollState.behavior !== "smooth") return !0;
			let u = this.scrollState.index ?? this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)?.index;
			if (u !== void 0 && this.range) {
				let d = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)), f = Math.max(0, u - d), p = Math.min(this.options.count - 1, u + d);
				return e >= f && e <= p;
			}
			return !0;
		}, this.measureElement = (e) => {
			if (!e) {
				this.elementsCache.forEach((e, u) => {
					e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(u));
				});
				return;
			}
			let u = this.indexFromElement(e);
			if (!this.isIndexInRange(u)) return;
			let d = this.options.getItemKey(u), f = this.elementsCache.get(d);
			f !== e && (f && this.observer.unobserve(f), this.observer.observe(e), this.elementsCache.set(d, e)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(u) && this.resizeItem(u, this.options.measureElement(e, void 0, this));
		}, this.resizeItem = (e, u) => {
			if (!this.isIndexInRange(e)) return;
			let d, f, p, m = this._flatMeasurements;
			if (this.options.lanes === 1 && m !== null) p = this.options.getItemKey(e), f = m[e * 2], d = m[e * 2 + 1];
			else {
				let u = this.measurementsCache[e];
				if (!u) return;
				p = u.key, f = u.start, d = u.size;
			}
			let h = this.itemSizeCache.get(p) ?? d, g = u - h;
			if (g !== 0) {
				let m = this.options.anchorTo === "end" && this.scrollState?.behavior !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, _ = m ? this.getTotalSize() : 0, v = this.getScrollOffset() + this.scrollAdjustments, y = this.itemSizeCache.has(p) ? f + h <= v && this.scrollDirection !== "backward" : f < v, b = this.scrollState?.behavior !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange === void 0 ? y : this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e] ?? {
					index: e,
					key: p,
					start: f,
					size: d,
					end: f + d,
					lane: 0
				}, g, this));
				(this.pendingMin === null || e < this.pendingMin) && (this.pendingMin = e), this.itemSizeCache.set(p, u), this.itemSizeCacheVersion++;
				let x = !1;
				m ? x = this.applyScrollAdjustment(this.getTotalSize() - _) : b && (x = this.applyScrollAdjustment(g)), this.notify(x);
			}
		}, this.getVirtualItems = memo(() => [this.getVirtualIndexes(), this.getMeasurements()], (e, u) => {
			let d = [];
			for (let f = 0, p = e.length; f < p; f++) {
				let p = u[e[f]];
				d.push(p);
			}
			return d;
		}, {
			key: process.env.NODE_ENV !== "production" && "getVirtualItems",
			debug: () => this.options.debug
		}), this.getVirtualItemForOffset = (e) => {
			let u = this.getMeasurements();
			if (u.length === 0) return;
			let d = this._flatMeasurements, f = this.options.lanes === 1 && d != null;
			return notUndefined(u[findNearestBinarySearch(0, u.length - 1, f ? (e) => d[e * 2] : (e) => notUndefined(u[e]).start, e)]);
		}, this.getMaxScrollOffset = () => {
			if (!this.scrollElement) return 0;
			if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
			{
				let e = this.scrollElement.document.documentElement;
				return this.options.horizontal ? e.scrollWidth - this.scrollElement.innerWidth : e.scrollHeight - this.scrollElement.innerHeight;
			}
		}, this.getVirtualDistanceFromEnd = () => Math.max(this.getTotalSize() - this.getSize() - this.getScrollOffset(), 0), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (e = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= e, this.getOffsetForAlignment = (e, u, d = 0) => {
			if (!this.scrollElement) return 0;
			let f = this.getSize(), p = this.getScrollOffset();
			u === "auto" && (u = e >= p + f ? "end" : "start"), u === "center" ? e += (d - f) / 2 : u === "end" && (e -= f);
			let m = this.getMaxScrollOffset();
			return Math.max(Math.min(m, e), 0);
		}, this.getOffsetForIndex = (e, u = "auto") => {
			e = Math.max(0, Math.min(e, this.options.count - 1));
			let d = this.getSize(), f = this.getScrollOffset(), p = this.measurementsCache[e];
			if (!p) return;
			if (u === "auto") if (p.end >= f + d - this.options.scrollPaddingEnd) u = "end";
			else if (p.start <= f + this.options.scrollPaddingStart) u = "start";
			else return [f, u];
			if (u === "end" && e === this.options.count - 1) return [this.getMaxScrollOffset(), u];
			let m = u === "end" ? p.end + this.options.scrollPaddingEnd : p.start - this.options.scrollPaddingStart;
			return [this.getOffsetForAlignment(m, u, p.size), u];
		}, this.scrollToOffset = (e, { align: u = "start", behavior: d = "auto" } = {}) => {
			this._iosDeferredAdjustment = 0;
			let f = this.getOffsetForAlignment(e, u);
			this.scrollState = {
				index: null,
				align: u,
				behavior: d,
				startedAt: this.now(),
				lastTargetOffset: f,
				stableFrames: 0
			}, this._scrollToOffset(f, {
				adjustments: void 0,
				behavior: d
			}), this.scheduleScrollReconcile();
		}, this.scrollToIndex = (e, { align: u = "auto", behavior: d = "auto" } = {}) => {
			this._iosDeferredAdjustment = 0, e = Math.max(0, Math.min(e, this.options.count - 1));
			let f = this.getOffsetForIndex(e, u);
			if (!f) return;
			let [p, m] = f, h = this.now();
			this.scrollState = {
				index: e,
				align: m,
				behavior: d,
				startedAt: h,
				lastTargetOffset: p,
				stableFrames: 0
			}, this._scrollToOffset(p, {
				adjustments: void 0,
				behavior: d
			}), this.scheduleScrollReconcile();
		}, this.scrollBy = (e, { behavior: u = "auto" } = {}) => {
			let d = this.getScrollOffset() + e;
			this.scrollState = {
				index: null,
				align: "start",
				behavior: u,
				startedAt: this.now(),
				lastTargetOffset: d,
				stableFrames: 0
			}, this._scrollToOffset(d, {
				adjustments: void 0,
				behavior: u
			}), this.scheduleScrollReconcile();
		}, this.scrollToEnd = ({ behavior: e = "auto" } = {}) => {
			if (this.options.count > 0) {
				this.scrollToIndex(this.options.count - 1, {
					align: "end",
					behavior: e
				});
				return;
			}
			this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), { behavior: e });
		}, this.getTotalSize = () => {
			let e = this.getMeasurements(), u;
			if (e.length === 0) u = this.options.paddingStart;
			else if (this.options.lanes === 1) {
				let d = e.length - 1, f = this._flatMeasurements;
				u = f == null ? e[d]?.end ?? 0 : f[d * 2] + f[d * 2 + 1];
			} else {
				let d = Array(this.options.lanes).fill(null), f = e.length - 1;
				for (; f >= 0 && d.some((e) => e === null);) {
					let u = e[f];
					d[u.lane] === null && (d[u.lane] = u.end), f--;
				}
				u = Math.max(...d.filter((e) => e !== null));
			}
			return Math.max(u - this.options.scrollMargin + this.options.paddingEnd, 0);
		}, this.takeSnapshot = () => {
			let e = [];
			if (this.itemSizeCache.size === 0) return e;
			let u = this.getMeasurements();
			for (let d of u) d && this.itemSizeCache.has(d.key) && e.push({
				index: d.index,
				key: d.key,
				start: d.start,
				size: d.size,
				end: d.end,
				lane: d.lane
			});
			return e;
		}, this._scrollToOffset = (e, { adjustments: u, behavior: d }) => {
			this._intendedScrollOffset = e + (u ?? 0), this.options.scrollToFn(e, {
				behavior: d,
				adjustments: u
			}, this);
		}, this.measure = () => {
			this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
		}, this.setOptions(e);
	}
	applyScrollAdjustment(e, u) {
		return e === 0 ? !1 : (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", e), isIOSWebKit() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? (this._iosDeferredAdjustment += e, !1) : (this._scrollToOffset(this.getScrollOffset(), {
			adjustments: this.scrollAdjustments += e,
			behavior: u
		}), this.scrollOffset !== null && (this.scrollOffset += this.scrollAdjustments, this.scrollOffset < 0 && (this.scrollOffset = 0), this.scrollAdjustments = 0), !0));
	}
	scheduleScrollReconcile() {
		if (!this.targetWindow) {
			this.scrollState = null;
			return;
		}
		this.rafId ??= this.targetWindow.requestAnimationFrame(() => {
			this.rafId = null, this.reconcileScroll();
		});
	}
	reconcileScroll() {
		if (!this.scrollState || !this.scrollElement) return;
		if (this.now() - this.scrollState.startedAt > 5e3) {
			this.scrollState = null;
			return;
		}
		let e = this.scrollState.index == null ? void 0 : this.getOffsetForIndex(this.scrollState.index, this.scrollState.align), u = e ? e[0] : this.scrollState.lastTargetOffset, d = u !== this.scrollState.lastTargetOffset;
		if (!d && approxEqual(u, this.getScrollOffset())) {
			if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= 1) {
				this.getScrollOffset() !== u && this._scrollToOffset(u, {
					adjustments: void 0,
					behavior: "auto"
				}), this.scrollState = null;
				return;
			}
		} else if (this.scrollState.stableFrames = 0, d) {
			let e = this.getSize() || 600, d = Math.abs(u - this.getScrollOffset()), f = this.scrollState.behavior === "smooth" && d > e;
			this.scrollState.lastTargetOffset = u, f || (this.scrollState.behavior = "auto"), this._scrollToOffset(u, {
				adjustments: void 0,
				behavior: f ? "smooth" : "auto"
			});
		}
		this.scheduleScrollReconcile();
	}
}, findNearestBinarySearch = (e, u, d, f) => {
	for (; e <= u;) {
		let p = (e + u) / 2 | 0, m = d(p);
		if (m < f) e = p + 1;
		else if (m > f) u = p - 1;
		else return p;
	}
	return e > 0 ? e - 1 : 0;
};
function findNearestBinarySearchFlat(e, u, d) {
	let f = 0;
	for (; f <= u;) {
		let p = (f + u) / 2 | 0, m = e[p * 2];
		if (m < d) f = p + 1;
		else if (m > d) u = p - 1;
		else return p;
	}
	return f > 0 ? f - 1 : 0;
}
function calculateRangeImpl(e, u, d, f, p) {
	let m = e.length - 1;
	if (e.length <= f) return {
		startIndex: 0,
		endIndex: m
	};
	if (f === 1 && p !== null) {
		let e = findNearestBinarySearchFlat(p, m, d), f = e, h = d + u;
		for (; f < m && p[f * 2] + p[f * 2 + 1] < h;) f++;
		return {
			startIndex: e,
			endIndex: f
		};
	}
	let h = findNearestBinarySearch(0, m, (u) => e[u].start, d), g = h;
	if (f === 1) for (; g < m && e[g].end < d + u;) g++;
	else if (f > 1) {
		let p = Array(f).fill(0);
		for (; g < m && p.some((e) => e < d + u);) {
			let u = e[g];
			p[u.lane] = u.end, g++;
		}
		let _ = Array(f).fill(d + u);
		for (; h >= 0 && _.some((e) => e >= d);) {
			let u = e[h];
			_[u.lane] = u.start, h--;
		}
		h = Math.max(0, h - h % f), g = Math.min(m, g + (f - 1 - g % f));
	}
	return {
		startIndex: h,
		endIndex: g
	};
}
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_react_dom = require_react_dom(), useIsomorphicLayoutEffect = typeof document < "u" ? import_react.useLayoutEffect : import_react.useEffect;
function useVirtualizerBase({ useFlushSync: e = !0, directDomUpdates: u = !1, directDomUpdatesMode: d = "transform", ...f }) {
	let p = import_react.useReducer((e) => e + 1, 0)[1], m = import_react.useRef({
		enabled: u,
		mode: d,
		container: null,
		lastSize: null,
		lastPositions: /* @__PURE__ */ new WeakMap(),
		prevRange: null
	});
	m.current.enabled = u, m.current.mode = d;
	let h = (e) => {
		let u = m.current;
		if (!u.enabled || !u.container) return;
		let d = e.getTotalSize();
		if (d !== u.lastSize) {
			u.lastSize = d;
			let f = e.options.horizontal ? "width" : "height";
			u.container.style[f] = `${d}px`;
		}
	}, g = (e) => {
		let u = m.current;
		if (!u.enabled || !u.container) return;
		h(e);
		let d = !!e.options.horizontal, f = u.mode === "transform", p = d ? "left" : "top", g = e.options.scrollMargin, _ = e.getVirtualItems();
		for (let m of _) {
			let h = m.start - g, _ = e.elementsCache.get(m.key);
			_ && u.lastPositions.get(_) !== h && (u.lastPositions.set(_, h), f ? _.style.transform = d ? `translate3d(${h}px, 0, 0)` : `translate3d(0, ${h}px, 0)` : _.style[p] = `${h}px`);
		}
	}, _ = {
		...f,
		onChange: (u, d) => {
			var h;
			let _ = m.current, v = !0;
			if (_.enabled) {
				g(u);
				let e = u.range, d = _.prevRange;
				v = !d || d.isScrolling !== u.isScrolling || d.startIndex !== e?.startIndex || d.endIndex !== e?.endIndex, v && (_.prevRange = e ? {
					startIndex: e.startIndex,
					endIndex: e.endIndex,
					isScrolling: u.isScrolling
				} : null);
			}
			v && (e && d ? (0, import_react_dom.flushSync)(p) : p()), (h = f.onChange) == null || h.call(f, u, d);
		}
	}, [v] = import_react.useState(() => {
		let e = new Virtualizer(_);
		return Object.assign(e, { containerRef: (u) => {
			let d = m.current;
			if (d.container = u, d.lastSize = null, u && d.enabled) {
				let f = e.getTotalSize();
				d.lastSize = f;
				let p = e.options.horizontal ? "width" : "height";
				u.style[p] = `${f}px`;
			}
		} });
	});
	return v.setOptions(_), useIsomorphicLayoutEffect(() => v._didMount(), []), useIsomorphicLayoutEffect(() => (h(v), v._willUpdate())), useIsomorphicLayoutEffect(() => {
		g(v);
	}), v;
}
function useVirtualizer(e) {
	return useVirtualizerBase({
		observeElementRect,
		observeElementOffset,
		scrollToFn: elementScroll,
		...e
	});
}
export { observeElementRect as a, measureElement as i, defaultRangeExtractor as n, elementScroll as r, useVirtualizer as t };
