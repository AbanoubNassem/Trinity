import { o as a, c as p, k as M, b as w, F as R, j as E, n as x, h as O, f as g, Z as W, O as y, D as f, C as se, x as Q, U as ee, R as N, r as v, a as j, m as T, l as H, t as D, i as B, w as z, T as oe, y as $, e as V, s as re, z as X, d as b, A as Z, B as ne, E as U, G as q, g as F } from "./main.dc407183.mjs";
import { O as _, s as ae, a as Pe } from "./inputtext.esm.f9cb7d7d.mjs";
var te = {
  name: "VirtualScroller",
  emits: ["update:numToleratedItems", "scroll", "scroll-index-change", "lazy-load"],
  props: {
    id: {
      type: String,
      default: null
    },
    style: null,
    class: null,
    items: {
      type: Array,
      default: null
    },
    itemSize: {
      type: [Number, Array],
      default: 0
    },
    scrollHeight: null,
    scrollWidth: null,
    orientation: {
      type: String,
      default: "vertical"
    },
    numToleratedItems: {
      type: Number,
      default: null
    },
    delay: {
      type: Number,
      default: 0
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loaderDisabled: {
      type: Boolean,
      default: !1
    },
    columns: {
      type: Array,
      default: null
    },
    loading: {
      type: Boolean,
      default: !1
    },
    showSpacer: {
      type: Boolean,
      default: !0
    },
    showLoader: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      first: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      last: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      numItemsInViewport: this.isBoth() ? { rows: 0, cols: 0 } : 0,
      lastScrollPos: this.isBoth() ? { top: 0, left: 0 } : 0,
      d_numToleratedItems: this.numToleratedItems,
      d_loading: this.loading,
      loaderArr: [],
      spacerStyle: {},
      contentStyle: {}
    };
  },
  element: null,
  content: null,
  lastScrollPos: null,
  scrollTimeout: null,
  watch: {
    numToleratedItems(e) {
      this.d_numToleratedItems = e;
    },
    loading(e) {
      this.d_loading = e;
    },
    items(e, t) {
      (!t || t.length !== (e || []).length) && this.init();
    },
    orientation() {
      this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0;
    }
  },
  mounted() {
    this.init(), this.lastScrollPos = this.isBoth() ? { top: 0, left: 0 } : 0;
  },
  methods: {
    init() {
      this.setSize(), this.calculateOptions(), this.setSpacerSize();
    },
    isVertical() {
      return this.orientation === "vertical";
    },
    isHorizontal() {
      return this.orientation === "horizontal";
    },
    isBoth() {
      return this.orientation === "both";
    },
    scrollTo(e) {
      this.element && this.element.scrollTo(e);
    },
    scrollToIndex(e, t = "auto") {
      const i = this.isBoth(), s = this.isHorizontal(), n = this.first, { numToleratedItems: l } = this.calculateNumItems(), o = this.itemSize, d = (m = 0, h) => m <= h ? 0 : m, u = (m, h) => m * h, r = (m = 0, h = 0) => this.scrollTo({ left: m, top: h, behavior: t });
      if (i) {
        const m = { rows: d(e[0], l[0]), cols: d(e[1], l[1]) };
        (m.rows !== n.rows || m.cols !== n.cols) && r(u(m.cols, o[1]), u(m.rows, o[0]));
      } else {
        const m = d(e, l);
        m !== n && (s ? r(u(m, o), 0) : r(0, u(m, o)));
      }
    },
    scrollInView(e, t, i = "auto") {
      if (t) {
        const s = this.isBoth(), n = this.isHorizontal(), { first: l, viewport: o } = this.getRenderedRange(), d = (m = 0, h = 0) => this.scrollTo({ left: m, top: h, behavior: i }), u = t === "to-start", r = t === "to-end";
        if (u) {
          if (s)
            o.first.rows - l.rows > e[0] ? d(o.first.cols * this.itemSize[1], (o.first.rows - 1) * this.itemSize[0]) : o.first.cols - l.cols > e[1] && d((o.first.cols - 1) * this.itemSize[1], o.first.rows * this.itemSize[0]);
          else if (o.first - l > e) {
            const m = (o.first - 1) * this.itemSize;
            n ? d(m, 0) : d(0, m);
          }
        } else if (r) {
          if (s)
            o.last.rows - l.rows <= e[0] + 1 ? d(o.first.cols * this.itemSize[1], (o.first.rows + 1) * this.itemSize[0]) : o.last.cols - l.cols <= e[1] + 1 && d((o.first.cols + 1) * this.itemSize[1], o.first.rows * this.itemSize[0]);
          else if (o.last - l <= e + 1) {
            const m = (o.first + 1) * this.itemSize;
            n ? d(m, 0) : d(0, m);
          }
        }
      } else
        this.scrollToIndex(e, i);
    },
    getRenderedRange() {
      const e = (s, n) => Math.floor(s / (n || s));
      let t = this.first, i = 0;
      if (this.element) {
        const s = this.isBoth(), n = this.isHorizontal(), l = this.element.scrollTop, o = this.element.scrollLeft;
        s ? (t = { rows: e(l, this.itemSize[0]), cols: e(o, this.itemSize[1]) }, i = { rows: t.rows + this.numItemsInViewport.rows, cols: t.cols + this.numItemsInViewport.cols }) : (t = e(n ? o : l, this.itemSize), i = t + this.numItemsInViewport);
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: t,
          last: i
        }
      };
    },
    calculateNumItems() {
      const e = this.isBoth(), t = this.isHorizontal(), i = this.itemSize, s = this.getContentPosition(), n = this.element ? this.element.offsetWidth - s.left : 0, l = this.element ? this.element.offsetHeight - s.top : 0, o = (m, h) => Math.ceil(m / (h || m)), d = (m) => Math.ceil(m / 2), u = e ? { rows: o(l, i[0]), cols: o(n, i[1]) } : o(t ? n : l, i), r = this.d_numToleratedItems || (e ? [d(u.rows), d(u.cols)] : d(u));
      return { numItemsInViewport: u, numToleratedItems: r };
    },
    calculateOptions() {
      const e = this.isBoth(), t = this.first, { numItemsInViewport: i, numToleratedItems: s } = this.calculateNumItems(), n = (o, d, u, r) => this.getLast(o + d + (o < u ? 2 : 3) * u, r), l = e ? { rows: n(t.rows, i.rows, s[0]), cols: n(t.cols, i.cols, s[1], !0) } : n(t, i, s);
      this.last = l, this.numItemsInViewport = i, this.d_numToleratedItems = s, this.$emit("update:numToleratedItems", this.d_numToleratedItems), this.showLoader && (this.loaderArr = e ? Array.from({ length: i.rows }).map(() => Array.from({ length: i.cols })) : Array.from({ length: i })), this.lazy && this.$emit("lazy-load", { first: t, last: l });
    },
    getLast(e = 0, t) {
      return this.items ? Math.min(t ? (this.columns || this.items[0]).length : this.items.length, e) : 0;
    },
    getContentPosition() {
      if (this.content) {
        const e = getComputedStyle(this.content), t = parseInt(e.paddingLeft, 10) + Math.max(parseInt(e.left, 10), 0), i = parseInt(e.paddingRight, 10) + Math.max(parseInt(e.right, 10), 0), s = parseInt(e.paddingTop, 10) + Math.max(parseInt(e.top, 10), 0), n = parseInt(e.paddingBottom, 10) + Math.max(parseInt(e.bottom, 10), 0);
        return { left: t, right: i, top: s, bottom: n, x: t + i, y: s + n };
      }
      return { left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
    },
    setSize() {
      if (this.element) {
        const e = this.isBoth(), t = this.isHorizontal(), i = this.element.parentElement, s = this.scrollWidth || `${this.element.offsetWidth || i.offsetWidth}px`, n = this.scrollHeight || `${this.element.offsetHeight || i.offsetHeight}px`, l = (o, d) => this.element.style[o] = d;
        e || t ? (l("height", n), l("width", s)) : l("height", n);
      }
    },
    setSpacerSize() {
      const e = this.items;
      if (e) {
        const t = this.isBoth(), i = this.isHorizontal(), s = this.getContentPosition(), n = (l, o, d, u = 0) => this.spacerStyle = { ...this.spacerStyle, [`${l}`]: (o || []).length * d + u + "px" };
        t ? (n("height", e, this.itemSize[0], s.y), n("width", this.columns || e[1], this.itemSize[1], s.x)) : i ? n("width", this.columns || e, this.itemSize, s.x) : n("height", e, this.itemSize, s.y);
      }
    },
    setContentPosition(e) {
      if (this.content) {
        const t = this.isBoth(), i = this.isHorizontal(), s = e ? e.first : this.first, n = (o, d) => o * d, l = (o = 0, d = 0) => {
          this.contentStyle = { ...this.contentStyle, transform: `translate3d(${o}px, ${d}px, 0)` };
        };
        if (t)
          l(n(s.cols, this.itemSize[1]), n(s.rows, this.itemSize[0]));
        else {
          const o = n(s, this.itemSize);
          i ? l(o, 0) : l(0, o);
        }
      }
    },
    onScrollPositionChange(e) {
      const t = e.target, i = this.isBoth(), s = this.isHorizontal(), n = this.getContentPosition(), l = (S, k) => S ? S > k ? S - k : S : 0, o = (S, k) => Math.floor(S / (k || S)), d = (S, k, I, K, A, G) => S <= A ? A : G ? I - K - A : k + A - 1, u = (S, k, I, K, A, G, J) => S <= G ? 0 : Math.max(0, J ? S < k ? I : S - G : S > k ? I : S - 2 * G), r = (S, k, I, K, A, G) => {
        let J = k + K + 2 * A;
        return S >= A && (J += A + 1), this.getLast(J, G);
      }, m = l(t.scrollTop, n.top), h = l(t.scrollLeft, n.left);
      let c = i ? { rows: 0, cols: 0 } : 0, C = this.last, L = !1, P = this.lastScrollPos;
      if (i) {
        const S = this.lastScrollPos.top <= m, k = this.lastScrollPos.left <= h, I = { rows: o(m, this.itemSize[0]), cols: o(h, this.itemSize[1]) }, K = {
          rows: d(I.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], S),
          cols: d(I.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], k)
        };
        c = {
          rows: u(I.rows, K.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], S),
          cols: u(I.cols, K.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], k)
        }, C = {
          rows: r(I.rows, c.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
          cols: r(I.cols, c.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], !0)
        }, L = c.rows !== this.first.rows || C.rows !== this.last.rows || c.cols !== this.first.cols || C.cols !== this.last.cols, P = { top: m, left: h };
      } else {
        const S = s ? h : m, k = this.lastScrollPos <= S, I = o(S, this.itemSize), K = d(I, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, k);
        c = u(I, K, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, k), C = r(I, c, this.last, this.numItemsInViewport, this.d_numToleratedItems), L = c !== this.first || C !== this.last, P = S;
      }
      return {
        first: c,
        last: C,
        isRangeChanged: L,
        scrollPos: P
      };
    },
    onScrollChange(e) {
      const { first: t, last: i, isRangeChanged: s, scrollPos: n } = this.onScrollPositionChange(e);
      if (s) {
        const l = { first: t, last: i };
        this.setContentPosition(l), this.first = t, this.last = i, this.lastScrollPos = n, this.$emit("scroll-index-change", l), this.lazy && this.$emit("lazy-load", l);
      }
    },
    onScroll(e) {
      if (this.$emit("scroll", e), this.delay) {
        if (this.scrollTimeout && clearTimeout(this.scrollTimeout), !this.d_loading && this.showLoader) {
          const { isRangeChanged: t } = this.onScrollPositionChange(e);
          t && (this.d_loading = !0);
        }
        this.scrollTimeout = setTimeout(() => {
          this.onScrollChange(e), this.d_loading && this.showLoader && !this.lazy && (this.d_loading = !1);
        }, this.delay);
      } else
        this.onScrollChange(e);
    },
    getOptions(e) {
      const t = (this.items || []).length, i = this.isBoth() ? this.first.rows + e : this.first + e;
      return {
        index: i,
        count: t,
        first: i === 0,
        last: i === t - 1,
        even: i % 2 === 0,
        odd: i % 2 !== 0
      };
    },
    getLoaderOptions(e, t) {
      let i = this.loaderArr.length;
      return {
        index: e,
        count: i,
        first: e === 0,
        last: e === i - 1,
        even: e % 2 === 0,
        odd: e % 2 !== 0,
        ...t
      };
    },
    elementRef(e) {
      this.element = e;
    },
    contentRef(e) {
      this.content = e;
    }
  },
  computed: {
    containerClass() {
      return [
        "p-virtualscroller",
        {
          "p-both-scroll": this.isBoth(),
          "p-horizontal-scroll": this.isHorizontal()
        },
        this.class
      ];
    },
    contentClass() {
      return [
        "p-virtualscroller-content",
        {
          "p-virtualscroller-loading": this.d_loading
        }
      ];
    },
    loaderClass() {
      return [
        "p-virtualscroller-loader",
        {
          "p-component-overlay": !this.$slots.loader
        }
      ];
    },
    loadedItems() {
      const e = this.items;
      return e && !this.d_loading ? this.isBoth() ? e.slice(this.first.rows, this.last.rows).map((t) => this.columns ? t : t.slice(this.first.cols, this.last.cols)) : this.isHorizontal() && this.columns ? e : e.slice(this.first, this.last) : [];
    },
    loadedRows() {
      return this.d_loading ? this.loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    },
    loadedColumns() {
      if (this.columns) {
        const e = this.isBoth(), t = this.isHorizontal();
        if (e || t)
          return this.d_loading && this.loaderDisabled ? e ? this.loaderArr[0] : this.loaderArr : this.columns.slice(e ? this.first.cols : this.first, e ? this.last.cols : this.last);
      }
      return this.columns;
    }
  }
};
const De = ["tabindex"], Ee = {
  key: 1,
  class: "p-virtualscroller-loading-icon pi pi-spinner pi-spin"
};
function Oe(e, t, i, s, n, l) {
  return i.disabled ? (a(), p(R, { key: 1 }, [
    M(e.$slots, "default"),
    M(e.$slots, "content", {
      items: i.items,
      rows: i.items,
      columns: l.loadedColumns
    })
  ], 64)) : (a(), p("div", {
    key: 0,
    ref: l.elementRef,
    class: x(l.containerClass),
    tabindex: i.tabindex,
    style: O(i.style),
    onScroll: t[0] || (t[0] = (...o) => l.onScroll && l.onScroll(...o))
  }, [
    M(e.$slots, "content", {
      styleClass: l.contentClass,
      items: l.loadedItems,
      getItemOptions: l.getOptions,
      loading: n.d_loading,
      getLoaderOptions: l.getLoaderOptions,
      itemSize: i.itemSize,
      rows: l.loadedRows,
      columns: l.loadedColumns,
      contentRef: l.contentRef,
      spacerStyle: n.spacerStyle,
      contentStyle: n.contentStyle,
      vertical: l.isVertical(),
      horizontal: l.isHorizontal(),
      both: l.isBoth()
    }, () => [
      w("div", {
        ref: l.contentRef,
        class: x(l.contentClass),
        style: O(n.contentStyle)
      }, [
        (a(!0), p(R, null, E(l.loadedItems, (o, d) => M(e.$slots, "item", {
          key: d,
          item: o,
          options: l.getOptions(d)
        })), 128))
      ], 6)
    ]),
    i.showSpacer ? (a(), p("div", {
      key: 0,
      class: "p-virtualscroller-spacer",
      style: O(n.spacerStyle)
    }, null, 4)) : g("", !0),
    !i.loaderDisabled && i.showLoader && n.d_loading ? (a(), p("div", {
      key: 1,
      class: x(l.loaderClass)
    }, [
      e.$slots && e.$slots.loader ? (a(!0), p(R, { key: 0 }, E(n.loaderArr, (o, d) => M(e.$slots, "loader", {
        key: d,
        options: l.getLoaderOptions(d, l.isBoth() && { numCols: e.d_numItemsInViewport.cols })
      })), 128)) : (a(), p("i", Ee))
    ], 2)) : g("", !0)
  ], 46, De));
}
function Fe(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var s = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", i === "top" && s.firstChild ? s.insertBefore(n, s.firstChild) : s.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
var Le = `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}
.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    contain: content;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}
.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
    pointer-events: none;
}
.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.p-virtualscroller-loader.p-component-overlay {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
`;
Fe(Le);
te.render = Oe;
var Y = {
  name: "Dropdown",
  emits: ["update:modelValue", "change", "focus", "blur", "before-show", "before-hide", "show", "hide", "filter"],
  props: {
    modelValue: null,
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      default: "200px"
    },
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    filterMatchMode: {
      type: String,
      default: "contains"
    },
    filterFields: {
      type: Array,
      default: null
    },
    editable: Boolean,
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    dataKey: null,
    showClear: {
      type: Boolean,
      default: !1
    },
    inputId: {
      type: String,
      default: null
    },
    inputClass: {
      type: String,
      default: null
    },
    inputStyle: {
      type: null,
      default: null
    },
    inputProps: {
      type: null,
      default: null
    },
    panelClass: {
      type: String,
      default: null
    },
    panelStyle: {
      type: null,
      default: null
    },
    panelProps: {
      type: null,
      default: null
    },
    filterInputProps: {
      type: null,
      default: null
    },
    clearIconProps: {
      type: null,
      default: null
    },
    appendTo: {
      type: String,
      default: "body"
    },
    loading: {
      type: Boolean,
      default: !1
    },
    clearIcon: {
      type: String,
      default: "pi pi-times"
    },
    dropdownIcon: {
      type: String,
      default: "pi pi-chevron-down"
    },
    filterIcon: {
      type: String,
      default: "pi pi-search"
    },
    loadingIcon: {
      type: String,
      default: "pi pi-spinner pi-spin"
    },
    resetFilterOnHide: {
      type: Boolean,
      default: !1
    },
    virtualScrollerOptions: {
      type: Object,
      default: null
    },
    autoOptionFocus: {
      type: Boolean,
      default: !0
    },
    autoFilterFocus: {
      type: Boolean,
      default: !1
    },
    selectOnFocus: {
      type: Boolean,
      default: !1
    },
    filterMessage: {
      type: String,
      default: null
    },
    selectionMessage: {
      type: String,
      default: null
    },
    emptySelectionMessage: {
      type: String,
      default: null
    },
    emptyFilterMessage: {
      type: String,
      default: null
    },
    emptyMessage: {
      type: String,
      default: null
    },
    tabindex: {
      type: Number,
      default: 0
    },
    "aria-label": {
      type: String,
      default: null
    },
    "aria-labelledby": {
      type: String,
      default: null
    }
  },
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  overlay: null,
  list: null,
  virtualScroller: null,
  searchTimeout: null,
  searchValue: null,
  isModelValueChanged: !1,
  focusOnHover: !1,
  data() {
    return {
      focused: !1,
      focusedOptionIndex: -1,
      filterValue: null,
      overlayVisible: !1
    };
  },
  watch: {
    modelValue() {
      this.isModelValueChanged = !0;
    },
    options() {
      this.autoUpdateModel();
    }
  },
  mounted() {
    this.autoUpdateModel();
  },
  updated() {
    this.overlayVisible && this.isModelValueChanged && this.scrollInView(this.findSelectedOptionIndex()), this.isModelValueChanged = !1;
  },
  beforeUnmount() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && (W.clear(this.overlay), this.overlay = null);
  },
  methods: {
    getOptionIndex(e, t) {
      return this.virtualScrollerDisabled ? e : t && t(e).index;
    },
    getOptionLabel(e) {
      return this.optionLabel ? y.resolveFieldData(e, this.optionLabel) : e;
    },
    getOptionValue(e) {
      return this.optionValue ? y.resolveFieldData(e, this.optionValue) : e;
    },
    getOptionRenderKey(e, t) {
      return (this.dataKey ? y.resolveFieldData(e, this.dataKey) : this.getOptionLabel(e)) + "_" + t;
    },
    isOptionDisabled(e) {
      return this.optionDisabled ? y.resolveFieldData(e, this.optionDisabled) : !1;
    },
    isOptionGroup(e) {
      return this.optionGroupLabel && e.optionGroup && e.group;
    },
    getOptionGroupLabel(e) {
      return y.resolveFieldData(e, this.optionGroupLabel);
    },
    getOptionGroupChildren(e) {
      return y.resolveFieldData(e, this.optionGroupChildren);
    },
    getAriaPosInset(e) {
      return (this.optionGroupLabel ? e - this.visibleOptions.slice(0, e).filter((t) => this.isOptionGroup(t)).length : e) + 1;
    },
    show(e) {
      this.$emit("before-show"), this.overlayVisible = !0, this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, e && f.focus(this.$refs.focusInput);
    },
    hide(e) {
      const t = () => {
        this.$emit("before-hide"), this.overlayVisible = !1, this.focusedOptionIndex = -1, this.searchValue = "", this.resetFilterOnHide && (this.filterValue = null), e && f.focus(this.$refs.focusInput);
      };
      setTimeout(() => {
        t();
      }, 0);
    },
    onFocus(e) {
      this.focused = !0, this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, this.overlayVisible && this.scrollInView(this.focusedOptionIndex), this.$emit("focus", e);
    },
    onBlur(e) {
      this.focused = !1, this.focusedOptionIndex = -1, this.searchValue = "", this.$emit("blur", e);
    },
    onKeyDown(e) {
      const t = e.metaKey || e.ctrlKey;
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e, this.editable);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(e, this.editable);
          break;
        case "Home":
          this.onHomeKey(e, this.editable);
          break;
        case "End":
          this.onEndKey(e, this.editable);
          break;
        case "PageDown":
          this.onPageDownKey(e);
          break;
        case "PageUp":
          this.onPageUpKey(e);
          break;
        case "Space":
          this.onSpaceKey(e, this.editable);
          break;
        case "Enter":
          this.onEnterKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
        case "Backspace":
          this.onBackspaceKey(e, this.editable);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !t && y.isPrintableCharacter(e.key) && (!this.overlayVisible && this.show(), !this.editable && this.searchOptions(e, e.key));
          break;
      }
    },
    onEditableInput(e) {
      const t = e.target.value;
      this.searchValue = "", !this.searchOptions(e, t) && (this.focusedOptionIndex = -1), this.$emit("update:modelValue", t);
    },
    onContainerClick(e) {
      this.disabled || this.loading || f.hasClass(e.target, "p-dropdown-clear-icon") || e.target.tagName === "INPUT" || (!this.overlay || !this.overlay.contains(e.target)) && (this.overlayVisible ? this.hide(!0) : this.show(!0));
    },
    onClearClick(e) {
      this.updateModel(e, null);
    },
    onFirstHiddenFocus(e) {
      if (e.relatedTarget === this.$refs.focusInput) {
        const i = f.getFirstFocusableElement(this.overlay, ":not(.p-hidden-focusable)");
        f.focus(i);
      } else
        f.focus(this.$refs.focusInput);
    },
    onLastHiddenFocus() {
      f.focus(this.$refs.firstHiddenFocusableElementOnOverlay);
    },
    onOptionSelect(e, t, i = !0) {
      const s = this.getOptionValue(t);
      this.updateModel(e, s), i && this.hide(!0);
    },
    onOptionMouseMove(e, t) {
      this.focusOnHover && this.changeFocusedOptionIndex(e, t);
    },
    onFilterChange(e) {
      const t = e.target.value;
      this.filterValue = t, this.focusedOptionIndex = -1, this.$emit("filter", { originalEvent: e, value: t }), !this.virtualScrollerDisabled && this.virtualScroller.scrollToIndex(0);
    },
    onFilterKeyDown(e) {
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e, !0);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(e, !0);
          break;
        case "Home":
          this.onHomeKey(e, !0);
          break;
        case "End":
          this.onEndKey(e, !0);
          break;
        case "Enter":
          this.onEnterKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e, !0);
          break;
      }
    },
    onFilterBlur() {
      this.focusedOptionIndex = -1;
    },
    onFilterUpdated() {
      this.overlayVisible && this.alignOverlay();
    },
    onOverlayClick(e) {
      _.emit("overlay-click", {
        originalEvent: e,
        target: this.$el
      });
    },
    onOverlayKeyDown(e) {
      switch (e.code) {
        case "Escape":
          this.onEscapeKey(e);
          break;
      }
    },
    onArrowDownKey(e) {
      const t = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(e, t), !this.overlayVisible && this.show(), e.preventDefault();
    },
    onArrowUpKey(e, t = !1) {
      if (e.altKey && !t)
        this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(), e.preventDefault();
      else {
        const i = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(e, i), !this.overlayVisible && this.show(), e.preventDefault();
      }
    },
    onArrowLeftKey(e, t = !1) {
      t && (this.focusedOptionIndex = -1);
    },
    onHomeKey(e, t = !1) {
      t ? (e.currentTarget.setSelectionRange(0, 0), this.focusedOptionIndex = -1) : (this.changeFocusedOptionIndex(e, this.findFirstOptionIndex()), !this.overlayVisible && this.show()), e.preventDefault();
    },
    onEndKey(e, t = !1) {
      if (t) {
        const i = e.currentTarget, s = i.value.length;
        i.setSelectionRange(s, s), this.focusedOptionIndex = -1;
      } else
        this.changeFocusedOptionIndex(e, this.findLastOptionIndex()), !this.overlayVisible && this.show();
      e.preventDefault();
    },
    onPageUpKey(e) {
      this.scrollInView(0), e.preventDefault();
    },
    onPageDownKey(e) {
      this.scrollInView(this.visibleOptions.length - 1), e.preventDefault();
    },
    onEnterKey(e) {
      this.overlayVisible ? (this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.hide()) : this.onArrowDownKey(e), e.preventDefault();
    },
    onSpaceKey(e, t = !1) {
      !t && this.onEnterKey(e);
    },
    onEscapeKey(e) {
      this.overlayVisible && this.hide(!0), e.preventDefault();
    },
    onTabKey(e, t = !1) {
      t || (this.overlayVisible && this.hasFocusableElements() ? (f.focus(this.$refs.firstHiddenFocusableElementOnOverlay), e.preventDefault()) : (this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(this.filter)));
    },
    onBackspaceKey(e, t = !1) {
      t && !this.overlayVisible && this.show();
    },
    onOverlayEnter(e) {
      W.set("overlay", e, this.$primevue.config.zIndex.overlay), this.alignOverlay(), this.scrollInView(), this.autoFilterFocus && f.focus(this.$refs.filterInput);
    },
    onOverlayAfterEnter() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onOverlayLeave() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.overlay = null;
    },
    onOverlayAfterLeave(e) {
      W.clear(e);
    },
    alignOverlay() {
      this.appendTo === "self" ? f.relativePosition(this.overlay, this.$el) : (this.overlay.style.minWidth = f.getOuterWidth(this.$el) + "px", f.absolutePosition(this.overlay, this.$el));
    },
    bindOutsideClickListener() {
      this.outsideClickListener || (this.outsideClickListener = (e) => {
        this.overlayVisible && this.overlay && !this.$el.contains(e.target) && !this.overlay.contains(e.target) && this.hide();
      }, document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener), this.outsideClickListener = null);
    },
    bindScrollListener() {
      this.scrollHandler || (this.scrollHandler = new se(this.$refs.container, () => {
        this.overlayVisible && this.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener() {
      this.resizeListener || (this.resizeListener = () => {
        this.overlayVisible && !f.isTouchDevice() && this.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    hasFocusableElements() {
      return f.getFocusableElements(this.overlay, ":not(.p-hidden-focusable)").length > 0;
    },
    isOptionMatched(e) {
      return this.isValidOption(e) && this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
    },
    isValidOption(e) {
      return e && !(this.isOptionDisabled(e) || this.isOptionGroup(e));
    },
    isValidSelectedOption(e) {
      return this.isValidOption(e) && this.isSelected(e);
    },
    isSelected(e) {
      return y.equals(this.modelValue, this.getOptionValue(e), this.equalityKey);
    },
    findFirstOptionIndex() {
      return this.visibleOptions.findIndex((e) => this.isValidOption(e));
    },
    findLastOptionIndex() {
      return y.findLastIndex(this.visibleOptions, (e) => this.isValidOption(e));
    },
    findNextOptionIndex(e) {
      const t = e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex((i) => this.isValidOption(i)) : -1;
      return t > -1 ? t + e + 1 : e;
    },
    findPrevOptionIndex(e) {
      const t = e > 0 ? y.findLastIndex(this.visibleOptions.slice(0, e), (i) => this.isValidOption(i)) : -1;
      return t > -1 ? t : e;
    },
    findSelectedOptionIndex() {
      return this.hasSelectedOption ? this.visibleOptions.findIndex((e) => this.isValidSelectedOption(e)) : -1;
    },
    findFirstFocusedOptionIndex() {
      const e = this.findSelectedOptionIndex();
      return e < 0 ? this.findFirstOptionIndex() : e;
    },
    findLastFocusedOptionIndex() {
      const e = this.findSelectedOptionIndex();
      return e < 0 ? this.findLastOptionIndex() : e;
    },
    searchOptions(e, t) {
      this.searchValue = (this.searchValue || "") + t;
      let i = -1, s = !1;
      return this.focusedOptionIndex !== -1 ? (i = this.visibleOptions.slice(this.focusedOptionIndex).findIndex((n) => this.isOptionMatched(n)), i = i === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex((n) => this.isOptionMatched(n)) : i + this.focusedOptionIndex) : i = this.visibleOptions.findIndex((n) => this.isOptionMatched(n)), i !== -1 && (s = !0), i === -1 && this.focusedOptionIndex === -1 && (i = this.findFirstFocusedOptionIndex()), i !== -1 && this.changeFocusedOptionIndex(e, i), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(() => {
        this.searchValue = "", this.searchTimeout = null;
      }, 500), s;
    },
    changeFocusedOptionIndex(e, t) {
      this.focusedOptionIndex !== t && (this.focusedOptionIndex = t, this.scrollInView(), this.selectOnFocus && this.onOptionSelect(e, this.visibleOptions[t], !1));
    },
    scrollInView(e = -1) {
      const t = e !== -1 ? `${this.id}_${e}` : this.focusedOptionId, i = f.findSingle(this.list, `li[id="${t}"]`);
      i ? i.scrollIntoView && i.scrollIntoView({ block: "nearest", inline: "start" }) : this.virtualScrollerDisabled || setTimeout(() => {
        this.virtualScroller && this.virtualScroller.scrollToIndex(e !== -1 ? e : this.focusedOptionIndex);
      }, 0);
    },
    autoUpdateModel() {
      this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption && (this.focusedOptionIndex = this.findFirstFocusedOptionIndex(), this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], !1));
    },
    updateModel(e, t) {
      this.$emit("update:modelValue", t), this.$emit("change", { originalEvent: e, value: t });
    },
    flatOptions(e) {
      return (e || []).reduce((t, i, s) => {
        t.push({ optionGroup: i, group: !0, index: s });
        const n = this.getOptionGroupChildren(i);
        return n && n.forEach((l) => t.push(l)), t;
      }, []);
    },
    overlayRef(e) {
      this.overlay = e;
    },
    listRef(e, t) {
      this.list = e, t && t(e);
    },
    virtualScrollerRef(e) {
      this.virtualScroller = e;
    }
  },
  computed: {
    containerClass() {
      return [
        "p-dropdown p-component p-inputwrapper",
        {
          "p-disabled": this.disabled,
          "p-dropdown-clearable": this.showClear && !this.disabled,
          "p-focus": this.focused,
          "p-inputwrapper-filled": this.modelValue,
          "p-inputwrapper-focus": this.focused || this.overlayVisible,
          "p-overlay-open": this.overlayVisible
        }
      ];
    },
    inputStyleClass() {
      return [
        "p-dropdown-label p-inputtext",
        this.inputClass,
        {
          "p-placeholder": !this.editable && this.label === this.placeholder,
          "p-dropdown-label-empty": !this.editable && !this.$slots.value && (this.label === "p-emptylabel" || this.label.length === 0)
        }
      ];
    },
    panelStyleClass() {
      return [
        "p-dropdown-panel p-component",
        this.panelClass,
        {
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === !1
        }
      ];
    },
    dropdownIconClass() {
      return ["p-dropdown-trigger-icon", this.loading ? this.loadingIcon : this.dropdownIcon];
    },
    visibleOptions() {
      const e = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      if (this.filterValue) {
        const t = Q.filter(e, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          const i = this.options || [], s = [];
          return i.forEach((n) => {
            const l = n.items.filter((o) => t.includes(o));
            l.length > 0 && s.push({ ...n, items: [...l] });
          }), this.flatOptions(s);
        }
        return t;
      }
      return e;
    },
    hasSelectedOption() {
      return y.isNotEmpty(this.modelValue);
    },
    label() {
      const e = this.findSelectedOptionIndex();
      return e !== -1 ? this.getOptionLabel(this.visibleOptions[e]) : this.placeholder || "p-emptylabel";
    },
    editableInputValue() {
      const e = this.findSelectedOptionIndex();
      return e !== -1 ? this.getOptionLabel(this.visibleOptions[e]) : this.modelValue || "";
    },
    equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields() {
      return this.filterFields || [this.optionLabel];
    },
    filterResultMessageText() {
      return y.isNotEmpty(this.visibleOptions) ? this.filterMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptyFilterMessageText;
    },
    filterMessageText() {
      return this.filterMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptyFilterMessageText() {
      return this.emptyFilterMessage || this.$primevue.config.locale.emptySearchMessage || this.$primevue.config.locale.emptyFilterMessage || "";
    },
    emptyMessageText() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage || "";
    },
    selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText() {
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll("{0}", "1") : this.emptySelectionMessageText;
    },
    id() {
      return this.$attrs.id || ee();
    },
    focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? `${this.id}_${this.focusedOptionIndex}` : null;
    },
    ariaSetSize() {
      return this.visibleOptions.filter((e) => !this.isOptionGroup(e)).length;
    },
    virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    }
  },
  directives: {
    ripple: N
  },
  components: {
    VirtualScroller: te,
    Portal: ae
  }
};
const Be = ["id"], Te = ["id", "value", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant"], ze = ["id", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-disabled"], Ve = { class: "p-dropdown-trigger" }, Ke = {
  key: 0,
  class: "p-dropdown-header"
}, Ae = { class: "p-dropdown-filter-container" }, He = ["value", "placeholder", "aria-owns", "aria-activedescendant"], _e = {
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
}, Ge = ["id"], Ne = ["id"], je = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove"], We = {
  key: 0,
  class: "p-dropdown-empty-message",
  role: "option"
}, Ue = {
  key: 1,
  class: "p-dropdown-empty-message",
  role: "option"
}, qe = {
  key: 0,
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
}, Je = {
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
};
function Xe(e, t, i, s, n, l) {
  const o = v("VirtualScroller"), d = v("Portal"), u = j("ripple");
  return a(), p("div", {
    ref: "container",
    id: l.id,
    class: x(l.containerClass),
    onClick: t[16] || (t[16] = (...r) => l.onContainerClick && l.onContainerClick(...r))
  }, [
    i.editable ? (a(), p("input", T({
      key: 0,
      ref: "focusInput",
      id: i.inputId,
      type: "text",
      style: i.inputStyle,
      class: l.inputStyleClass,
      value: l.editableInputValue,
      placeholder: i.placeholder,
      tabindex: i.disabled ? -1 : i.tabindex,
      disabled: i.disabled,
      autocomplete: "off",
      role: "combobox",
      "aria-label": e.ariaLabel,
      "aria-labelledby": e.ariaLabelledby,
      "aria-haspopup": "listbox",
      "aria-expanded": n.overlayVisible,
      "aria-controls": l.id + "_list",
      "aria-activedescendant": n.focused ? l.focusedOptionId : void 0,
      onFocus: t[0] || (t[0] = (...r) => l.onFocus && l.onFocus(...r)),
      onBlur: t[1] || (t[1] = (...r) => l.onBlur && l.onBlur(...r)),
      onKeydown: t[2] || (t[2] = (...r) => l.onKeyDown && l.onKeyDown(...r)),
      onInput: t[3] || (t[3] = (...r) => l.onEditableInput && l.onEditableInput(...r))
    }, i.inputProps), null, 16, Te)) : (a(), p("span", T({
      key: 1,
      ref: "focusInput",
      id: i.inputId,
      style: i.inputStyle,
      class: l.inputStyleClass,
      tabindex: i.disabled ? -1 : i.tabindex,
      role: "combobox",
      "aria-label": e.ariaLabel || (l.label === "p-emptylabel" ? void 0 : l.label),
      "aria-labelledby": e.ariaLabelledby,
      "aria-haspopup": "listbox",
      "aria-expanded": n.overlayVisible,
      "aria-controls": l.id + "_list",
      "aria-activedescendant": n.focused ? l.focusedOptionId : void 0,
      "aria-disabled": i.disabled,
      onFocus: t[4] || (t[4] = (...r) => l.onFocus && l.onFocus(...r)),
      onBlur: t[5] || (t[5] = (...r) => l.onBlur && l.onBlur(...r)),
      onKeydown: t[6] || (t[6] = (...r) => l.onKeyDown && l.onKeyDown(...r))
    }, i.inputProps), [
      M(e.$slots, "value", {
        value: i.modelValue,
        placeholder: i.placeholder
      }, () => [
        H(D(l.label === "p-emptylabel" ? "\xA0" : l.label || "empty"), 1)
      ])
    ], 16, ze)),
    i.showClear && i.modelValue != null ? (a(), p("i", T({
      key: 2,
      class: ["p-dropdown-clear-icon", i.clearIcon],
      onClick: t[7] || (t[7] = (...r) => l.onClearClick && l.onClearClick(...r))
    }, i.clearIconProps), null, 16)) : g("", !0),
    w("div", Ve, [
      M(e.$slots, "indicator", {}, () => [
        w("span", {
          class: x(l.dropdownIconClass),
          "aria-hidden": "true"
        }, null, 2)
      ])
    ]),
    B(d, { appendTo: i.appendTo }, {
      default: z(() => [
        B(oe, {
          name: "p-connected-overlay",
          onEnter: l.onOverlayEnter,
          onAfterEnter: l.onOverlayAfterEnter,
          onLeave: l.onOverlayLeave,
          onAfterLeave: l.onOverlayAfterLeave
        }, {
          default: z(() => [
            n.overlayVisible ? (a(), p("div", T({
              key: 0,
              ref: l.overlayRef,
              style: i.panelStyle,
              class: l.panelStyleClass,
              onClick: t[14] || (t[14] = (...r) => l.onOverlayClick && l.onOverlayClick(...r)),
              onKeydown: t[15] || (t[15] = (...r) => l.onOverlayKeyDown && l.onOverlayKeyDown(...r))
            }, i.panelProps), [
              w("span", {
                ref: "firstHiddenFocusableElementOnOverlay",
                role: "presentation",
                "aria-hidden": "true",
                class: "p-hidden-accessible p-hidden-focusable",
                tabindex: 0,
                onFocus: t[8] || (t[8] = (...r) => l.onFirstHiddenFocus && l.onFirstHiddenFocus(...r))
              }, null, 544),
              M(e.$slots, "header", {
                value: i.modelValue,
                options: l.visibleOptions
              }),
              i.filter ? (a(), p("div", Ke, [
                w("div", Ae, [
                  w("input", T({
                    ref: "filterInput",
                    type: "text",
                    value: n.filterValue,
                    onVnodeUpdated: t[9] || (t[9] = (...r) => l.onFilterUpdated && l.onFilterUpdated(...r)),
                    class: "p-dropdown-filter p-inputtext p-component",
                    placeholder: i.filterPlaceholder,
                    role: "searchbox",
                    autocomplete: "off",
                    "aria-owns": l.id + "_list",
                    "aria-activedescendant": l.focusedOptionId,
                    onKeydown: t[10] || (t[10] = (...r) => l.onFilterKeyDown && l.onFilterKeyDown(...r)),
                    onBlur: t[11] || (t[11] = (...r) => l.onFilterBlur && l.onFilterBlur(...r)),
                    onInput: t[12] || (t[12] = (...r) => l.onFilterChange && l.onFilterChange(...r))
                  }, i.filterInputProps), null, 16, He),
                  w("span", {
                    class: x(["p-dropdown-filter-icon", i.filterIcon])
                  }, null, 2)
                ]),
                w("span", _e, D(l.filterResultMessageText), 1)
              ])) : g("", !0),
              w("div", {
                class: "p-dropdown-items-wrapper",
                style: O({ "max-height": l.virtualScrollerDisabled ? i.scrollHeight : "" })
              }, [
                B(o, T({ ref: l.virtualScrollerRef }, i.virtualScrollerOptions, {
                  items: l.visibleOptions,
                  style: { height: i.scrollHeight },
                  tabindex: -1,
                  disabled: l.virtualScrollerDisabled
                }), $({
                  content: z(({ styleClass: r, contentRef: m, items: h, getItemOptions: c, contentStyle: C, itemSize: L }) => [
                    w("ul", {
                      ref: (P) => l.listRef(P, m),
                      id: l.id + "_list",
                      class: x(["p-dropdown-items", r]),
                      style: O(C),
                      role: "listbox"
                    }, [
                      (a(!0), p(R, null, E(h, (P, S) => (a(), p(R, {
                        key: l.getOptionRenderKey(P, l.getOptionIndex(S, c))
                      }, [
                        l.isOptionGroup(P) ? (a(), p("li", {
                          key: 0,
                          id: l.id + "_" + l.getOptionIndex(S, c),
                          style: O({ height: L ? L + "px" : void 0 }),
                          class: "p-dropdown-item-group",
                          role: "option"
                        }, [
                          M(e.$slots, "optiongroup", {
                            option: P.optionGroup,
                            index: l.getOptionIndex(S, c)
                          }, () => [
                            H(D(l.getOptionGroupLabel(P.optionGroup)), 1)
                          ])
                        ], 12, Ne)) : V((a(), p("li", {
                          key: 1,
                          id: l.id + "_" + l.getOptionIndex(S, c),
                          style: O({ height: L ? L + "px" : void 0 }),
                          class: x(["p-dropdown-item", { "p-highlight": l.isSelected(P), "p-focus": n.focusedOptionIndex === l.getOptionIndex(S, c), "p-disabled": l.isOptionDisabled(P) }]),
                          role: "option",
                          "aria-label": l.getOptionLabel(P),
                          "aria-selected": l.isSelected(P),
                          "aria-disabled": l.isOptionDisabled(P),
                          "aria-setsize": l.ariaSetSize,
                          "aria-posinset": l.getAriaPosInset(l.getOptionIndex(S, c)),
                          onClick: (k) => l.onOptionSelect(k, P),
                          onMousemove: (k) => l.onOptionMouseMove(k, l.getOptionIndex(S, c))
                        }, [
                          M(e.$slots, "option", {
                            option: P,
                            index: l.getOptionIndex(S, c)
                          }, () => [
                            H(D(l.getOptionLabel(P)), 1)
                          ])
                        ], 46, je)), [
                          [u]
                        ])
                      ], 64))), 128)),
                      n.filterValue && (!h || h && h.length === 0) ? (a(), p("li", We, [
                        M(e.$slots, "emptyfilter", {}, () => [
                          H(D(l.emptyFilterMessageText), 1)
                        ])
                      ])) : !i.options || i.options && i.options.length === 0 ? (a(), p("li", Ue, [
                        M(e.$slots, "empty", {}, () => [
                          H(D(l.emptyMessageText), 1)
                        ])
                      ])) : g("", !0)
                    ], 14, Ge),
                    !i.options || i.options && i.options.length === 0 ? (a(), p("span", qe, D(l.emptyMessageText), 1)) : g("", !0),
                    w("span", Je, D(l.selectedMessageText), 1)
                  ]),
                  _: 2
                }, [
                  e.$slots.loader ? {
                    name: "loader",
                    fn: z(({ options: r }) => [
                      M(e.$slots, "loader", { options: r })
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040, ["items", "style", "disabled"])
              ], 4),
              M(e.$slots, "footer", {
                value: i.modelValue,
                options: l.visibleOptions
              }),
              w("span", {
                ref: "lastHiddenFocusableElementOnOverlay",
                role: "presentation",
                "aria-hidden": "true",
                class: "p-hidden-accessible p-hidden-focusable",
                tabindex: 0,
                onFocus: t[13] || (t[13] = (...r) => l.onLastHiddenFocus && l.onLastHiddenFocus(...r))
              }, null, 544)
            ], 16)) : g("", !0)
          ]),
          _: 3
        }, 8, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])
      ]),
      _: 3
    }, 8, ["appendTo"])
  ], 10, Be);
}
function Ze(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var s = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", i === "top" && s.firstChild ? s.insertBefore(n, s.firstChild) : s.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
var Ye = `
.p-dropdown {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    cursor: pointer;
    position: relative;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}
.p-dropdown-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-dropdown-trigger {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dropdown-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
}
.p-dropdown-label-empty {
    overflow: hidden;
    opacity: 0;
}
input.p-dropdown-label {
    cursor: default;
}
.p-dropdown .p-dropdown-panel {
    min-width: 100%;
}
.p-dropdown-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-dropdown-items-wrapper {
    overflow: auto;
}
.p-dropdown-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-dropdown-item-group {
    cursor: auto;
}
.p-dropdown-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-dropdown-filter {
    width: 100%;
}
.p-dropdown-filter-container {
    position: relative;
}
.p-dropdown-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-fluid .p-dropdown {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.p-fluid .p-dropdown .p-dropdown-label {
    width: 1%;
}
`;
Ze(Ye);
Y.render = Xe;
var de = {
  name: "InputNumber",
  emits: ["update:modelValue", "input", "focus", "blur"],
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    format: {
      type: Boolean,
      default: !0
    },
    showButtons: {
      type: Boolean,
      default: !1
    },
    buttonLayout: {
      type: String,
      default: "stacked"
    },
    incrementButtonClass: {
      type: String,
      default: null
    },
    decrementButtonClass: {
      type: String,
      default: null
    },
    incrementButtonIcon: {
      type: String,
      default: "pi pi-angle-up"
    },
    decrementButtonIcon: {
      type: String,
      default: "pi pi-angle-down"
    },
    locale: {
      type: String,
      default: void 0
    },
    localeMatcher: {
      type: String,
      default: void 0
    },
    mode: {
      type: String,
      default: "decimal"
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    currency: {
      type: String,
      default: void 0
    },
    currencyDisplay: {
      type: String,
      default: void 0
    },
    useGrouping: {
      type: Boolean,
      default: !0
    },
    minFractionDigits: {
      type: Number,
      default: void 0
    },
    maxFractionDigits: {
      type: Number,
      default: void 0
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    step: {
      type: Number,
      default: 1
    },
    allowEmpty: {
      type: Boolean,
      default: !0
    },
    highlightOnFocus: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: null
    },
    inputId: {
      type: String,
      default: null
    },
    inputClass: {
      type: String,
      default: null
    },
    inputStyle: {
      type: null,
      default: null
    },
    inputProps: {
      type: null,
      default: null
    },
    incrementButtonProps: {
      type: null,
      default: null
    },
    decrementButtonProps: {
      type: null,
      default: null
    },
    "aria-labelledby": {
      type: String,
      default: null
    },
    "aria-label": {
      type: String,
      default: null
    }
  },
  numberFormat: null,
  _numeral: null,
  _decimal: null,
  _group: null,
  _minusSign: null,
  _currency: null,
  _suffix: null,
  _prefix: null,
  _index: null,
  groupChar: "",
  isSpecialChar: null,
  prefixChar: null,
  suffixChar: null,
  timer: null,
  data() {
    return {
      d_modelValue: this.modelValue,
      focused: !1
    };
  },
  watch: {
    modelValue(e) {
      this.d_modelValue = e;
    },
    locale(e, t) {
      this.updateConstructParser(e, t);
    },
    localeMatcher(e, t) {
      this.updateConstructParser(e, t);
    },
    mode(e, t) {
      this.updateConstructParser(e, t);
    },
    currency(e, t) {
      this.updateConstructParser(e, t);
    },
    currencyDisplay(e, t) {
      this.updateConstructParser(e, t);
    },
    useGrouping(e, t) {
      this.updateConstructParser(e, t);
    },
    minFractionDigits(e, t) {
      this.updateConstructParser(e, t);
    },
    maxFractionDigits(e, t) {
      this.updateConstructParser(e, t);
    },
    suffix(e, t) {
      this.updateConstructParser(e, t);
    },
    prefix(e, t) {
      this.updateConstructParser(e, t);
    }
  },
  created() {
    this.constructParser();
  },
  methods: {
    getOptions() {
      return {
        localeMatcher: this.localeMatcher,
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        useGrouping: this.useGrouping,
        minimumFractionDigits: this.minFractionDigits,
        maximumFractionDigits: this.maxFractionDigits
      };
    },
    constructParser() {
      this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
      const e = [...new Intl.NumberFormat(this.locale, { useGrouping: !1 }).format(9876543210)].reverse(), t = new Map(e.map((i, s) => [i, s]));
      this._numeral = new RegExp(`[${e.join("")}]`, "g"), this._group = this.getGroupingExpression(), this._minusSign = this.getMinusSignExpression(), this._currency = this.getCurrencyExpression(), this._decimal = this.getDecimalExpression(), this._suffix = this.getSuffixExpression(), this._prefix = this.getPrefixExpression(), this._index = (i) => t.get(i);
    },
    updateConstructParser(e, t) {
      e !== t && this.constructParser();
    },
    escapeRegExp(e) {
      return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    },
    getDecimalExpression() {
      const e = new Intl.NumberFormat(this.locale, { ...this.getOptions(), useGrouping: !1 });
      return new RegExp(`[${e.format(1.1).replace(this._currency, "").trim().replace(this._numeral, "")}]`, "g");
    },
    getGroupingExpression() {
      const e = new Intl.NumberFormat(this.locale, { useGrouping: !0 });
      return this.groupChar = e.format(1e6).trim().replace(this._numeral, "").charAt(0), new RegExp(`[${this.groupChar}]`, "g");
    },
    getMinusSignExpression() {
      const e = new Intl.NumberFormat(this.locale, { useGrouping: !1 });
      return new RegExp(`[${e.format(-1).trim().replace(this._numeral, "")}]`, "g");
    },
    getCurrencyExpression() {
      if (this.currency) {
        const e = new Intl.NumberFormat(this.locale, { style: "currency", currency: this.currency, currencyDisplay: this.currencyDisplay, minimumFractionDigits: 0, maximumFractionDigits: 0 });
        return new RegExp(`[${e.format(1).replace(/\s/g, "").replace(this._numeral, "").replace(this._group, "")}]`, "g");
      }
      return new RegExp("[]", "g");
    },
    getPrefixExpression() {
      if (this.prefix)
        this.prefixChar = this.prefix;
      else {
        const e = new Intl.NumberFormat(this.locale, { style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay });
        this.prefixChar = e.format(1).split("1")[0];
      }
      return new RegExp(`${this.escapeRegExp(this.prefixChar || "")}`, "g");
    },
    getSuffixExpression() {
      if (this.suffix)
        this.suffixChar = this.suffix;
      else {
        const e = new Intl.NumberFormat(this.locale, { style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay, minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.suffixChar = e.format(1).split("1")[1];
      }
      return new RegExp(`${this.escapeRegExp(this.suffixChar || "")}`, "g");
    },
    formatValue(e) {
      if (e != null) {
        if (e === "-")
          return e;
        if (this.format) {
          let i = new Intl.NumberFormat(this.locale, this.getOptions()).format(e);
          return this.prefix && (i = this.prefix + i), this.suffix && (i = i + this.suffix), i;
        }
        return e.toString();
      }
      return "";
    },
    parseValue(e) {
      let t = e.replace(this._suffix, "").replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "").replace(this._group, "").replace(this._minusSign, "-").replace(this._decimal, ".").replace(this._numeral, this._index);
      if (t) {
        if (t === "-")
          return t;
        let i = +t;
        return isNaN(i) ? null : i;
      }
      return null;
    },
    repeat(e, t, i) {
      if (this.readonly)
        return;
      let s = t || 500;
      this.clearTimer(), this.timer = setTimeout(() => {
        this.repeat(e, 40, i);
      }, s), this.spin(e, i);
    },
    spin(e, t) {
      if (this.$refs.input) {
        let i = this.step * t, s = this.parseValue(this.$refs.input.$el.value) || 0, n = this.validateValue(s + i);
        this.updateInput(n, null, "spin"), this.updateModel(e, n), this.handleOnInput(e, s, n);
      }
    },
    onUpButtonMouseDown(e) {
      this.disabled || (this.$refs.input.$el.focus(), this.repeat(e, null, 1), e.preventDefault());
    },
    onUpButtonMouseUp() {
      this.disabled || this.clearTimer();
    },
    onUpButtonMouseLeave() {
      this.disabled || this.clearTimer();
    },
    onUpButtonKeyUp() {
      this.disabled || this.clearTimer();
    },
    onUpButtonKeyDown(e) {
      (e.keyCode === 32 || e.keyCode === 13) && this.repeat(e, null, 1);
    },
    onDownButtonMouseDown(e) {
      this.disabled || (this.$refs.input.$el.focus(), this.repeat(e, null, -1), e.preventDefault());
    },
    onDownButtonMouseUp() {
      this.disabled || this.clearTimer();
    },
    onDownButtonMouseLeave() {
      this.disabled || this.clearTimer();
    },
    onDownButtonKeyUp() {
      this.disabled || this.clearTimer();
    },
    onDownButtonKeyDown(e) {
      (e.keyCode === 32 || e.keyCode === 13) && this.repeat(e, null, -1);
    },
    onUserInput() {
      this.isSpecialChar && (this.$refs.input.$el.value = this.lastValue), this.isSpecialChar = !1;
    },
    onInputKeyDown(e) {
      if (this.readonly)
        return;
      if (this.lastValue = e.target.value, e.shiftKey || e.altKey) {
        this.isSpecialChar = !0;
        return;
      }
      let t = e.target.selectionStart, i = e.target.selectionEnd, s = e.target.value, n = null;
      switch (e.altKey && e.preventDefault(), e.which) {
        case 38:
          this.spin(e, 1), e.preventDefault();
          break;
        case 40:
          this.spin(e, -1), e.preventDefault();
          break;
        case 37:
          this.isNumeralChar(s.charAt(t - 1)) || e.preventDefault();
          break;
        case 39:
          this.isNumeralChar(s.charAt(t)) || e.preventDefault();
          break;
        case 9:
        case 13:
          n = this.validateValue(this.parseValue(s)), this.$refs.input.$el.value = this.formatValue(n), this.$refs.input.$el.setAttribute("aria-valuenow", n), this.updateModel(e, n);
          break;
        case 8: {
          if (e.preventDefault(), t === i) {
            const l = s.charAt(t - 1), { decimalCharIndex: o, decimalCharIndexWithoutPrefix: d } = this.getDecimalCharIndexes(s);
            if (this.isNumeralChar(l)) {
              const u = this.getDecimalLength(s);
              if (this._group.test(l))
                this._group.lastIndex = 0, n = s.slice(0, t - 2) + s.slice(t - 1);
              else if (this._decimal.test(l))
                this._decimal.lastIndex = 0, u ? this.$refs.input.$el.setSelectionRange(t - 1, t - 1) : n = s.slice(0, t - 1) + s.slice(t);
              else if (o > 0 && t > o) {
                const r = this.isDecimalMode() && (this.minFractionDigits || 0) < u ? "" : "0";
                n = s.slice(0, t - 1) + r + s.slice(t);
              } else
                d === 1 ? (n = s.slice(0, t - 1) + "0" + s.slice(t), n = this.parseValue(n) > 0 ? n : "") : n = s.slice(0, t - 1) + s.slice(t);
            }
            this.updateValue(e, n, null, "delete-single");
          } else
            n = this.deleteRange(s, t, i), this.updateValue(e, n, null, "delete-range");
          break;
        }
        case 46:
          if (e.preventDefault(), t === i) {
            const l = s.charAt(t), { decimalCharIndex: o, decimalCharIndexWithoutPrefix: d } = this.getDecimalCharIndexes(s);
            if (this.isNumeralChar(l)) {
              const u = this.getDecimalLength(s);
              if (this._group.test(l))
                this._group.lastIndex = 0, n = s.slice(0, t) + s.slice(t + 2);
              else if (this._decimal.test(l))
                this._decimal.lastIndex = 0, u ? this.$refs.input.$el.setSelectionRange(t + 1, t + 1) : n = s.slice(0, t) + s.slice(t + 1);
              else if (o > 0 && t > o) {
                const r = this.isDecimalMode() && (this.minFractionDigits || 0) < u ? "" : "0";
                n = s.slice(0, t) + r + s.slice(t + 1);
              } else
                d === 1 ? (n = s.slice(0, t) + "0" + s.slice(t + 1), n = this.parseValue(n) > 0 ? n : "") : n = s.slice(0, t) + s.slice(t + 1);
            }
            this.updateValue(e, n, null, "delete-back-single");
          } else
            n = this.deleteRange(s, t, i), this.updateValue(e, n, null, "delete-range");
          break;
        case 36:
          this.min && (this.updateModel(e, this.min), e.preventDefault());
          break;
        case 35:
          this.max && (this.updateModel(e, this.max), e.preventDefault());
          break;
      }
    },
    onInputKeyPress(e) {
      if (this.readonly)
        return;
      e.preventDefault();
      let t = e.which || e.keyCode, i = String.fromCharCode(t);
      const s = this.isDecimalSign(i), n = this.isMinusSign(i);
      (48 <= t && t <= 57 || n || s) && this.insert(e, i, { isDecimalSign: s, isMinusSign: n });
    },
    onPaste(e) {
      e.preventDefault();
      let t = (e.clipboardData || window.clipboardData).getData("Text");
      if (t) {
        let i = this.parseValue(t);
        i != null && this.insert(e, i.toString());
      }
    },
    allowMinusSign() {
      return this.min === null || this.min < 0;
    },
    isMinusSign(e) {
      return this._minusSign.test(e) || e === "-" ? (this._minusSign.lastIndex = 0, !0) : !1;
    },
    isDecimalSign(e) {
      return this._decimal.test(e) ? (this._decimal.lastIndex = 0, !0) : !1;
    },
    isDecimalMode() {
      return this.mode === "decimal";
    },
    getDecimalCharIndexes(e) {
      let t = e.search(this._decimal);
      this._decimal.lastIndex = 0;
      const s = e.replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "").search(this._decimal);
      return this._decimal.lastIndex = 0, { decimalCharIndex: t, decimalCharIndexWithoutPrefix: s };
    },
    getCharIndexes(e) {
      const t = e.search(this._decimal);
      this._decimal.lastIndex = 0;
      const i = e.search(this._minusSign);
      this._minusSign.lastIndex = 0;
      const s = e.search(this._suffix);
      this._suffix.lastIndex = 0;
      const n = e.search(this._currency);
      return this._currency.lastIndex = 0, { decimalCharIndex: t, minusCharIndex: i, suffixCharIndex: s, currencyCharIndex: n };
    },
    insert(e, t, i = { isDecimalSign: !1, isMinusSign: !1 }) {
      const s = t.search(this._minusSign);
      if (this._minusSign.lastIndex = 0, !this.allowMinusSign() && s !== -1)
        return;
      const n = this.$refs.input.$el.selectionStart, l = this.$refs.input.$el.selectionEnd;
      let o = this.$refs.input.$el.value.trim();
      const { decimalCharIndex: d, minusCharIndex: u, suffixCharIndex: r, currencyCharIndex: m } = this.getCharIndexes(o);
      let h;
      if (i.isMinusSign)
        n === 0 && (h = o, (u === -1 || l !== 0) && (h = this.insertText(o, t, 0, l)), this.updateValue(e, h, t, "insert"));
      else if (i.isDecimalSign)
        d > 0 && n === d ? this.updateValue(e, o, t, "insert") : d > n && d < l ? (h = this.insertText(o, t, n, l), this.updateValue(e, h, t, "insert")) : d === -1 && this.maxFractionDigits && (h = this.insertText(o, t, n, l), this.updateValue(e, h, t, "insert"));
      else {
        const c = this.numberFormat.resolvedOptions().maximumFractionDigits, C = n !== l ? "range-insert" : "insert";
        if (d > 0 && n > d) {
          if (n + t.length - (d + 1) <= c) {
            const L = m >= n ? m - 1 : r >= n ? r : o.length;
            h = o.slice(0, n) + t + o.slice(n + t.length, L) + o.slice(L), this.updateValue(e, h, t, C);
          }
        } else
          h = this.insertText(o, t, n, l), this.updateValue(e, h, t, C);
      }
    },
    insertText(e, t, i, s) {
      if ((t === "." ? t : t.split(".")).length === 2) {
        const l = e.slice(i, s).search(this._decimal);
        return this._decimal.lastIndex = 0, l > 0 ? e.slice(0, i) + this.formatValue(t) + e.slice(s) : e || this.formatValue(t);
      } else
        return s - i === e.length ? this.formatValue(t) : i === 0 ? t + e.slice(s) : s === e.length ? e.slice(0, i) + t : e.slice(0, i) + t + e.slice(s);
    },
    deleteRange(e, t, i) {
      let s;
      return i - t === e.length ? s = "" : t === 0 ? s = e.slice(i) : i === e.length ? s = e.slice(0, t) : s = e.slice(0, t) + e.slice(i), s;
    },
    initCursor() {
      let e = this.$refs.input.$el.selectionStart, t = this.$refs.input.$el.value, i = t.length, s = null, n = (this.prefixChar || "").length;
      t = t.replace(this._prefix, ""), e = e - n;
      let l = t.charAt(e);
      if (this.isNumeralChar(l))
        return e + n;
      let o = e - 1;
      for (; o >= 0; )
        if (l = t.charAt(o), this.isNumeralChar(l)) {
          s = o + n;
          break;
        } else
          o--;
      if (s !== null)
        this.$refs.input.$el.setSelectionRange(s + 1, s + 1);
      else {
        for (o = e; o < i; )
          if (l = t.charAt(o), this.isNumeralChar(l)) {
            s = o + n;
            break;
          } else
            o++;
        s !== null && this.$refs.input.$el.setSelectionRange(s, s);
      }
      return s || 0;
    },
    onInputClick() {
      const e = this.$refs.input.$el.value;
      !this.readonly && e !== f.getSelection() && this.initCursor();
    },
    isNumeralChar(e) {
      return e.length === 1 && (this._numeral.test(e) || this._decimal.test(e) || this._group.test(e) || this._minusSign.test(e)) ? (this.resetRegex(), !0) : !1;
    },
    resetRegex() {
      this._numeral.lastIndex = 0, this._decimal.lastIndex = 0, this._group.lastIndex = 0, this._minusSign.lastIndex = 0;
    },
    updateValue(e, t, i, s) {
      let n = this.$refs.input.$el.value, l = null;
      t != null && (l = this.parseValue(t), l = !l && !this.allowEmpty ? 0 : l, this.updateInput(l, i, s, t), this.handleOnInput(e, n, l));
    },
    handleOnInput(e, t, i) {
      this.isValueChanged(t, i) && this.$emit("input", { originalEvent: e, value: i, formattedValue: t });
    },
    isValueChanged(e, t) {
      if (t === null && e !== null)
        return !0;
      if (t != null) {
        let i = typeof e == "string" ? this.parseValue(e) : e;
        return t !== i;
      }
      return !1;
    },
    validateValue(e) {
      return e === "-" || e == null ? null : this.min != null && e < this.min ? this.min : this.max != null && e > this.max ? this.max : e;
    },
    updateInput(e, t, i, s) {
      t = t || "";
      let n = this.$refs.input.$el.value, l = this.formatValue(e), o = n.length;
      if (l !== s && (l = this.concatValues(l, s)), o === 0) {
        this.$refs.input.$el.value = l, this.$refs.input.$el.setSelectionRange(0, 0);
        const u = this.initCursor() + t.length;
        this.$refs.input.$el.setSelectionRange(u, u);
      } else {
        let d = this.$refs.input.$el.selectionStart, u = this.$refs.input.$el.selectionEnd;
        this.$refs.input.$el.value = l;
        let r = l.length;
        if (i === "range-insert") {
          const m = this.parseValue((n || "").slice(0, d)), c = (m !== null ? m.toString() : "").split("").join(`(${this.groupChar})?`), C = new RegExp(c, "g");
          C.test(l);
          const L = t.split("").join(`(${this.groupChar})?`), P = new RegExp(L, "g");
          P.test(l.slice(C.lastIndex)), u = C.lastIndex + P.lastIndex, this.$refs.input.$el.setSelectionRange(u, u);
        } else if (r === o)
          i === "insert" || i === "delete-back-single" ? this.$refs.input.$el.setSelectionRange(u + 1, u + 1) : i === "delete-single" ? this.$refs.input.$el.setSelectionRange(u - 1, u - 1) : (i === "delete-range" || i === "spin") && this.$refs.input.$el.setSelectionRange(u, u);
        else if (i === "delete-back-single") {
          let m = n.charAt(u - 1), h = n.charAt(u), c = o - r, C = this._group.test(h);
          C && c === 1 ? u += 1 : !C && this.isNumeralChar(m) && (u += -1 * c + 1), this._group.lastIndex = 0, this.$refs.input.$el.setSelectionRange(u, u);
        } else if (n === "-" && i === "insert") {
          this.$refs.input.$el.setSelectionRange(0, 0);
          const h = this.initCursor() + t.length + 1;
          this.$refs.input.$el.setSelectionRange(h, h);
        } else
          u = u + (r - o), this.$refs.input.$el.setSelectionRange(u, u);
      }
      this.$refs.input.$el.setAttribute("aria-valuenow", e);
    },
    concatValues(e, t) {
      if (e && t) {
        let i = t.search(this._decimal);
        return this._decimal.lastIndex = 0, this.suffixChar ? e.replace(this.suffixChar, "").split(this._decimal)[0] + t.replace(this.suffixChar, "").slice(i) + this.suffixChar : i !== -1 ? e.split(this._decimal)[0] + t.slice(i) : e;
      }
      return e;
    },
    getDecimalLength(e) {
      if (e) {
        const t = e.split(this._decimal);
        if (t.length === 2)
          return t[1].replace(this._suffix, "").trim().replace(/\s/g, "").replace(this._currency, "").length;
      }
      return 0;
    },
    updateModel(e, t) {
      this.d_modelValue = t, this.$emit("update:modelValue", t);
    },
    onInputFocus(e) {
      this.focused = !0, !this.disabled && !this.readonly && this.$refs.input.$el.value !== f.getSelection() && this.highlightOnFocus && e.target.select(), this.$emit("focus", e);
    },
    onInputBlur(e) {
      this.focused = !1;
      let t = e.target, i = this.validateValue(this.parseValue(t.value));
      this.$emit("blur", { originalEvent: e, value: t.value }), t.value = this.formatValue(i), t.setAttribute("aria-valuenow", i), this.updateModel(e, i);
    },
    clearTimer() {
      this.timer && clearInterval(this.timer);
    },
    maxBoundry() {
      return this.d_modelValue >= this.max;
    },
    minBoundry() {
      return this.d_modelValue <= this.min;
    }
  },
  computed: {
    containerClass() {
      return [
        "p-inputnumber p-component p-inputwrapper",
        {
          "p-inputwrapper-filled": this.filled,
          "p-inputwrapper-focus": this.focused,
          "p-inputnumber-buttons-stacked": this.showButtons && this.buttonLayout === "stacked",
          "p-inputnumber-buttons-horizontal": this.showButtons && this.buttonLayout === "horizontal",
          "p-inputnumber-buttons-vertical": this.showButtons && this.buttonLayout === "vertical"
        }
      ];
    },
    upButtonClass() {
      return [
        "p-inputnumber-button p-inputnumber-button-up",
        this.incrementButtonClass,
        {
          "p-disabled": this.showButtons && this.max !== null && this.maxBoundry()
        }
      ];
    },
    downButtonClass() {
      return [
        "p-inputnumber-button p-inputnumber-button-down",
        this.decrementButtonClass,
        {
          "p-disabled": this.showButtons && this.min !== null && this.minBoundry()
        }
      ];
    },
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    upButtonListeners() {
      return {
        mousedown: (e) => this.onUpButtonMouseDown(e),
        mouseup: (e) => this.onUpButtonMouseUp(e),
        mouseleave: (e) => this.onUpButtonMouseLeave(e),
        keydown: (e) => this.onUpButtonKeyDown(e),
        keyup: (e) => this.onUpButtonKeyUp(e)
      };
    },
    downButtonListeners() {
      return {
        mousedown: (e) => this.onDownButtonMouseDown(e),
        mouseup: (e) => this.onDownButtonMouseUp(e),
        mouseleave: (e) => this.onDownButtonMouseLeave(e),
        keydown: (e) => this.onDownButtonKeyDown(e),
        keyup: (e) => this.onDownButtonKeyUp(e)
      };
    },
    formattedValue() {
      const e = !this.modelValue && !this.allowEmpty ? 0 : this.modelValue;
      return this.formatValue(e);
    },
    getFormatter() {
      return this.numberFormat;
    }
  },
  components: {
    INInputText: Pe,
    INButton: re
  }
};
const Qe = {
  key: 0,
  class: "p-inputnumber-button-group"
};
function $e(e, t, i, s, n, l) {
  const o = v("INInputText"), d = v("INButton");
  return a(), p("span", {
    class: x(l.containerClass)
  }, [
    B(o, T({
      ref: "input",
      id: i.inputId,
      class: ["p-inputnumber-input", i.inputClass],
      role: "spinbutton",
      style: i.inputStyle,
      value: l.formattedValue,
      "aria-valuemin": i.min,
      "aria-valuemax": i.max,
      "aria-valuenow": i.modelValue,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: i.placeholder,
      "aria-labelledby": e.ariaLabelledby,
      "aria-label": e.ariaLabel,
      onInput: l.onUserInput,
      onKeydown: l.onInputKeyDown,
      onKeypress: l.onInputKeyPress,
      onPaste: l.onPaste,
      onClick: l.onInputClick,
      onFocus: l.onInputFocus,
      onBlur: l.onInputBlur
    }, i.inputProps), null, 16, ["id", "class", "style", "value", "aria-valuemin", "aria-valuemax", "aria-valuenow", "disabled", "readonly", "placeholder", "aria-labelledby", "aria-label", "onInput", "onKeydown", "onKeypress", "onPaste", "onClick", "onFocus", "onBlur"]),
    i.showButtons && i.buttonLayout === "stacked" ? (a(), p("span", Qe, [
      B(d, T({
        class: l.upButtonClass,
        icon: i.incrementButtonIcon
      }, X(l.upButtonListeners), {
        disabled: i.disabled,
        tabindex: -1,
        "aria-hidden": "true"
      }, i.incrementButtonProps), null, 16, ["class", "icon", "disabled"]),
      B(d, T({
        class: l.downButtonClass,
        icon: i.decrementButtonIcon
      }, X(l.downButtonListeners), {
        disabled: i.disabled,
        tabindex: -1,
        "aria-hidden": "true"
      }, i.decrementButtonProps), null, 16, ["class", "icon", "disabled"])
    ])) : g("", !0),
    i.showButtons && i.buttonLayout !== "stacked" ? (a(), b(d, T({
      key: 1,
      class: l.upButtonClass,
      icon: i.incrementButtonIcon
    }, X(l.upButtonListeners), {
      disabled: i.disabled,
      tabindex: -1,
      "aria-hidden": "true"
    }, i.incrementButtonProps), null, 16, ["class", "icon", "disabled"])) : g("", !0),
    i.showButtons && i.buttonLayout !== "stacked" ? (a(), b(d, T({
      key: 2,
      class: l.downButtonClass,
      icon: i.decrementButtonIcon
    }, X(l.downButtonListeners), {
      disabled: i.disabled,
      tabindex: -1,
      "aria-hidden": "true"
    }, i.decrementButtonProps), null, 16, ["class", "icon", "disabled"])) : g("", !0)
  ], 2);
}
function et(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var s = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", i === "top" && s.firstChild ? s.insertBefore(n, s.firstChild) : s.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
var tt = `
.p-inputnumber {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}
.p-inputnumber-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
}
.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {
    display: none;
}
.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0;
}
.p-inputnumber-buttons-stacked .p-inputnumber-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0;
}
.p-inputnumber-buttons-stacked .p-inputnumber-button-group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}
.p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
}
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
    -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
            order: 3;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.p-inputnumber-buttons-horizontal .p-inputnumber-input {
    -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
            order: 2;
    border-radius: 0;
}
.p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
    -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
            order: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.p-inputnumber-buttons-vertical {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}
.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {
    -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
            order: 1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
}
.p-inputnumber-buttons-vertical .p-inputnumber-input {
    -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
            order: 2;
    border-radius: 0;
    text-align: center;
}
.p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {
    -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
            order: 3;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 100%;
}
.p-inputnumber-input {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
}
.p-fluid .p-inputnumber {
    width: 100%;
}
.p-fluid .p-inputnumber .p-inputnumber-input {
    width: 1%;
}
.p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
    width: 100%;
}
`;
et(tt);
de.render = $e;
var ue = {
  name: "CurrentPageReport",
  inheritAttrs: !1,
  props: {
    pageCount: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 0
    },
    first: {
      type: Number,
      default: 0
    },
    rows: {
      type: Number,
      default: 0
    },
    totalRecords: {
      type: Number,
      default: 0
    },
    template: {
      type: String,
      default: "({currentPage} of {totalPages})"
    }
  },
  computed: {
    text() {
      return this.template.replace("{currentPage}", this.currentPage).replace("{totalPages}", this.pageCount).replace("{first}", this.pageCount > 0 ? this.first + 1 : 0).replace("{last}", Math.min(this.first + this.rows, this.totalRecords)).replace("{rows}", this.rows).replace("{totalRecords}", this.totalRecords);
    }
  }
};
const it = { class: "p-paginator-current" };
function lt(e, t, i, s, n, l) {
  return a(), p("span", it, D(l.text), 1);
}
ue.render = lt;
var he = {
  name: "FirstPageLink",
  computed: {
    containerClass() {
      return [
        "p-paginator-first p-paginator-element p-link",
        {
          "p-disabled": this.$attrs.disabled
        }
      ];
    }
  },
  directives: {
    ripple: N
  }
};
const nt = /* @__PURE__ */ w("span", { class: "p-paginator-icon pi pi-angle-double-left" }, null, -1), st = [
  nt
];
function ot(e, t, i, s, n, l) {
  const o = j("ripple");
  return V((a(), p("button", {
    class: x(l.containerClass),
    type: "button"
  }, st, 2)), [
    [o]
  ]);
}
he.render = ot;
var ce = {
  name: "JumpToPageDropdown",
  inheritAttrs: !1,
  emits: ["page-change"],
  props: {
    page: Number,
    pageCount: Number,
    disabled: Boolean
  },
  methods: {
    onChange(e) {
      this.$emit("page-change", e);
    }
  },
  computed: {
    pageOptions() {
      let e = [];
      for (let t = 0; t < this.pageCount; t++)
        e.push({ label: String(t + 1), value: t });
      return e;
    }
  },
  components: {
    JTPDropdown: Y
  }
};
function rt(e, t, i, s, n, l) {
  const o = v("JTPDropdown");
  return a(), b(o, {
    modelValue: i.page,
    options: l.pageOptions,
    optionLabel: "label",
    optionValue: "value",
    "onUpdate:modelValue": t[0] || (t[0] = (d) => l.onChange(d)),
    class: "p-paginator-page-options",
    disabled: i.disabled
  }, null, 8, ["modelValue", "options", "disabled"]);
}
ce.render = rt;
var pe = {
  name: "JumpToPageInput",
  inheritAttrs: !1,
  emits: ["page-change"],
  props: {
    page: Number,
    pageCount: Number,
    disabled: Boolean
  },
  methods: {
    onChange(e) {
      this.$emit("page-change", e - 1);
    }
  },
  components: {
    JTPInput: de
  }
};
function at(e, t, i, s, n, l) {
  const o = v("JTPInput");
  return a(), b(o, {
    modelValue: i.page,
    "onUpdate:modelValue": t[0] || (t[0] = (d) => l.onChange(d)),
    class: "p-paginator-page-input",
    disabled: i.disabled
  }, null, 8, ["modelValue", "disabled"]);
}
pe.render = at;
var fe = {
  name: "LastPageLink",
  computed: {
    containerClass() {
      return [
        "p-paginator-last p-paginator-element p-link",
        {
          "p-disabled": this.$attrs.disabled
        }
      ];
    }
  },
  directives: {
    ripple: N
  }
};
const dt = /* @__PURE__ */ w("span", { class: "p-paginator-icon pi pi-angle-double-right" }, null, -1), ut = [
  dt
];
function ht(e, t, i, s, n, l) {
  const o = j("ripple");
  return V((a(), p("button", {
    class: x(l.containerClass),
    type: "button"
  }, ut, 2)), [
    [o]
  ]);
}
fe.render = ht;
var me = {
  name: "NextPageLink",
  computed: {
    containerClass() {
      return [
        "p-paginator-next p-paginator-element p-link",
        {
          "p-disabled": this.$attrs.disabled
        }
      ];
    }
  },
  directives: {
    ripple: N
  }
};
const ct = /* @__PURE__ */ w("span", { class: "p-paginator-icon pi pi-angle-right" }, null, -1), pt = [
  ct
];
function ft(e, t, i, s, n, l) {
  const o = j("ripple");
  return V((a(), p("button", {
    class: x(l.containerClass),
    type: "button"
  }, pt, 2)), [
    [o]
  ]);
}
me.render = ft;
var ge = {
  name: "PageLinks",
  inheritAttrs: !1,
  emits: ["click"],
  props: {
    value: Array,
    page: Number
  },
  methods: {
    onPageLinkClick(e, t) {
      this.$emit("click", {
        originalEvent: e,
        value: t
      });
    }
  },
  directives: {
    ripple: N
  }
};
const mt = { class: "p-paginator-pages" }, gt = ["onClick"];
function yt(e, t, i, s, n, l) {
  const o = j("ripple");
  return a(), p("span", mt, [
    (a(!0), p(R, null, E(i.value, (d) => V((a(), p("button", {
      key: d,
      class: x(["p-paginator-page p-paginator-element p-link", { "p-highlight": d - 1 === i.page }]),
      type: "button",
      onClick: (u) => l.onPageLinkClick(u, d)
    }, [
      H(D(d), 1)
    ], 10, gt)), [
      [o]
    ])), 128))
  ]);
}
ge.render = yt;
var ye = {
  name: "PrevPageLink",
  computed: {
    containerClass() {
      return [
        "p-paginator-prev p-paginator-element p-link",
        {
          "p-disabled": this.$attrs.disabled
        }
      ];
    }
  },
  directives: {
    ripple: N
  }
};
const bt = /* @__PURE__ */ w("span", { class: "p-paginator-icon pi pi-angle-left" }, null, -1), wt = [
  bt
];
function xt(e, t, i, s, n, l) {
  const o = j("ripple");
  return V((a(), p("button", {
    class: x(l.containerClass),
    type: "button"
  }, wt, 2)), [
    [o]
  ]);
}
ye.render = xt;
var be = {
  name: "RowsPerPageDropdown",
  inheritAttrs: !1,
  emits: ["rows-change"],
  props: {
    options: Array,
    rows: Number,
    disabled: Boolean
  },
  methods: {
    onChange(e) {
      this.$emit("rows-change", e);
    }
  },
  computed: {
    rowsOptions() {
      let e = [];
      if (this.options)
        for (let t = 0; t < this.options.length; t++)
          e.push({ label: String(this.options[t]), value: this.options[t] });
      return e;
    }
  },
  components: {
    RPPDropdown: Y
  }
};
function Ct(e, t, i, s, n, l) {
  const o = v("RPPDropdown");
  return a(), b(o, {
    modelValue: i.rows,
    options: l.rowsOptions,
    optionLabel: "label",
    optionValue: "value",
    "onUpdate:modelValue": t[0] || (t[0] = (d) => l.onChange(d)),
    class: "p-paginator-rpp-options",
    disabled: i.disabled
  }, null, 8, ["modelValue", "options", "disabled"]);
}
be.render = Ct;
var we = {
  name: "Paginator",
  emits: ["update:first", "update:rows", "page"],
  props: {
    totalRecords: {
      type: Number,
      default: 0
    },
    rows: {
      type: Number,
      default: 0
    },
    first: {
      type: Number,
      default: 0
    },
    pageLinkSize: {
      type: Number,
      default: 5
    },
    rowsPerPageOptions: {
      type: Array,
      default: null
    },
    template: {
      type: [Object, String],
      default: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    },
    currentPageReportTemplate: {
      type: null,
      default: "({currentPage} of {totalPages})"
    },
    alwaysShow: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      d_first: this.first,
      d_rows: this.rows
    };
  },
  watch: {
    first(e) {
      this.d_first = e;
    },
    rows(e) {
      this.d_rows = e;
    },
    totalRecords(e) {
      this.page > 0 && e && this.d_first >= e && this.changePage(this.pageCount - 1);
    }
  },
  mounted() {
    this.setPaginatorAttribute(), this.createStyle();
  },
  methods: {
    changePage(e) {
      const t = this.pageCount;
      if (e >= 0 && e < t) {
        this.d_first = this.d_rows * e;
        const i = {
          page: e,
          first: this.d_first,
          rows: this.d_rows,
          pageCount: t
        };
        this.$emit("update:first", this.d_first), this.$emit("update:rows", this.d_rows), this.$emit("page", i);
      }
    },
    changePageToFirst(e) {
      this.isFirstPage || this.changePage(0), e.preventDefault();
    },
    changePageToPrev(e) {
      this.changePage(this.page - 1), e.preventDefault();
    },
    changePageLink(e) {
      this.changePage(e.value - 1), e.originalEvent.preventDefault();
    },
    changePageToNext(e) {
      this.changePage(this.page + 1), e.preventDefault();
    },
    changePageToLast(e) {
      this.isLastPage || this.changePage(this.pageCount - 1), e.preventDefault();
    },
    onRowChange(e) {
      this.d_rows = e, this.changePage(this.page);
    },
    createStyle() {
      if (this.hasBreakpoints()) {
        this.styleElement = document.createElement("style"), this.styleElement.type = "text/css", document.head.appendChild(this.styleElement);
        let e = "";
        const t = Object.keys(this.template), i = {};
        t.sort((s, n) => parseInt(s) - parseInt(n)).forEach((s) => {
          i[s] = this.template[s];
        });
        for (const [s, [n]] of Object.entries(Object.entries(i))) {
          const l = Object.entries(i)[s - 1] ? `and (min-width:${Object.keys(i)[s - 1]})` : "";
          n === "default" ? e += `
                            @media screen ${l} {
                                .paginator[${this.attributeSelector}],
                                .p-paginator-default{
                                    display: flex !important;
                                }
                            }
                        ` : e += `
                        .paginator[${this.attributeSelector}], .p-paginator-${n} {
                                display: none !important;
                            }
                        @media screen ${l} and (max-width: ${n}) {
                            .paginator[${this.attributeSelector}], .p-paginator-${n} {
                                display: flex !important;
                            }
                            .paginator[${this.attributeSelector}],
                            .p-paginator-default{
                                display: none !important;
                            }
                        }
                    `;
        }
        this.styleElement.innerHTML = e;
      }
    },
    hasBreakpoints() {
      return typeof this.template == "object";
    },
    getPaginatorClasses(e) {
      return [
        {
          "p-paginator-default": !this.hasBreakpoints(),
          [`p-paginator-${e}`]: this.hasBreakpoints()
        }
      ];
    },
    setPaginatorAttribute() {
      this.$refs.paginator && this.$refs.paginator.length >= 0 && [...this.$refs.paginator].forEach((e) => {
        e.setAttribute(this.attributeSelector, "");
      });
    }
  },
  computed: {
    templateItems() {
      let e = {};
      if (this.hasBreakpoints()) {
        e = this.template, e.default || (e.default = "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown");
        for (const t in e)
          e[t] = this.template[t].split(" ").map((i) => i.trim());
        return e;
      }
      return e.default = this.template.split(" ").map((t) => t.trim()), e;
    },
    page() {
      return Math.floor(this.d_first / this.d_rows);
    },
    pageCount() {
      return Math.ceil(this.totalRecords / this.d_rows);
    },
    isFirstPage() {
      return this.page === 0;
    },
    isLastPage() {
      return this.page === this.pageCount - 1;
    },
    calculatePageLinkBoundaries() {
      const e = this.pageCount, t = Math.min(this.pageLinkSize, e);
      let i = Math.max(0, Math.ceil(this.page - t / 2)), s = Math.min(e - 1, i + t - 1);
      const n = this.pageLinkSize - (s - i + 1);
      return i = Math.max(0, i - n), [i, s];
    },
    pageLinks() {
      let e = [], t = this.calculatePageLinkBoundaries, i = t[0], s = t[1];
      for (var n = i; n <= s; n++)
        e.push(n + 1);
      return e;
    },
    currentState() {
      return {
        page: this.page,
        first: this.d_first,
        rows: this.d_rows
      };
    },
    empty() {
      return this.pageCount === 0;
    },
    currentPage() {
      return this.pageCount > 0 ? this.page + 1 : 0;
    },
    attributeSelector() {
      return ee();
    }
  },
  components: {
    CurrentPageReport: ue,
    FirstPageLink: he,
    LastPageLink: fe,
    NextPageLink: me,
    PageLinks: ge,
    PrevPageLink: ye,
    RowsPerPageDropdown: be,
    JumpToPageDropdown: ce,
    JumpToPageInput: pe
  }
};
const St = { key: 0 }, vt = {
  key: 0,
  class: "p-paginator-left-content"
}, Rt = {
  key: 1,
  class: "p-paginator-right-content"
};
function kt(e, t, i, s, n, l) {
  const o = v("FirstPageLink"), d = v("PrevPageLink"), u = v("NextPageLink"), r = v("LastPageLink"), m = v("PageLinks"), h = v("CurrentPageReport"), c = v("RowsPerPageDropdown"), C = v("JumpToPageDropdown"), L = v("JumpToPageInput");
  return i.alwaysShow || l.pageLinks && l.pageLinks.length > 1 ? (a(), p("div", St, [
    (a(!0), p(R, null, E(l.templateItems, (P, S) => (a(), p("div", {
      key: S,
      ref_for: !0,
      ref: "paginator",
      class: x(["p-paginator p-component", l.getPaginatorClasses(S)])
    }, [
      e.$slots.start ? (a(), p("div", vt, [
        M(e.$slots, "start", { state: l.currentState })
      ])) : g("", !0),
      (a(!0), p(R, null, E(P, (k) => (a(), p(R, { key: k }, [
        k === "FirstPageLink" ? (a(), b(o, {
          key: 0,
          onClick: t[0] || (t[0] = (I) => l.changePageToFirst(I)),
          disabled: l.isFirstPage || l.empty
        }, null, 8, ["disabled"])) : k === "PrevPageLink" ? (a(), b(d, {
          key: 1,
          onClick: t[1] || (t[1] = (I) => l.changePageToPrev(I)),
          disabled: l.isFirstPage || l.empty
        }, null, 8, ["disabled"])) : k === "NextPageLink" ? (a(), b(u, {
          key: 2,
          onClick: t[2] || (t[2] = (I) => l.changePageToNext(I)),
          disabled: l.isLastPage || l.empty
        }, null, 8, ["disabled"])) : k === "LastPageLink" ? (a(), b(r, {
          key: 3,
          onClick: t[3] || (t[3] = (I) => l.changePageToLast(I)),
          disabled: l.isLastPage || l.empty
        }, null, 8, ["disabled"])) : k === "PageLinks" ? (a(), b(m, {
          key: 4,
          value: l.pageLinks,
          page: l.page,
          onClick: t[4] || (t[4] = (I) => l.changePageLink(I))
        }, null, 8, ["value", "page"])) : k === "CurrentPageReport" ? (a(), b(h, {
          key: 5,
          template: i.currentPageReportTemplate,
          currentPage: l.currentPage,
          page: l.page,
          pageCount: l.pageCount,
          first: n.d_first,
          rows: n.d_rows,
          totalRecords: i.totalRecords
        }, null, 8, ["template", "currentPage", "page", "pageCount", "first", "rows", "totalRecords"])) : k === "RowsPerPageDropdown" && i.rowsPerPageOptions ? (a(), b(c, {
          key: 6,
          rows: n.d_rows,
          options: i.rowsPerPageOptions,
          onRowsChange: t[5] || (t[5] = (I) => l.onRowChange(I)),
          disabled: l.empty
        }, null, 8, ["rows", "options", "disabled"])) : k === "JumpToPageDropdown" ? (a(), b(C, {
          key: 7,
          page: l.page,
          pageCount: l.pageCount,
          onPageChange: t[6] || (t[6] = (I) => l.changePage(I)),
          disabled: l.empty
        }, null, 8, ["page", "pageCount", "disabled"])) : k === "JumpToPageInput" ? (a(), b(L, {
          key: 8,
          page: l.currentPage,
          onPageChange: t[7] || (t[7] = (I) => l.changePage(I)),
          disabled: l.empty
        }, null, 8, ["page", "disabled"])) : g("", !0)
      ], 64))), 128)),
      e.$slots.end ? (a(), p("div", Rt, [
        M(e.$slots, "end", { state: l.currentState })
      ])) : g("", !0)
    ], 2))), 128))
  ])) : g("", !0);
}
function It(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var s = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", i === "top" && s.firstChild ? s.insertBefore(n, s.firstChild) : s.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
var Mt = `
.p-paginator-default {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.p-paginator {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
}
.p-paginator-left-content {
    margin-right: auto;
}
.p-paginator-right-content {
    margin-left: auto;
}
.p-paginator-page,
.p-paginator-next,
.p-paginator-last,
.p-paginator-first,
.p-paginator-prev,
.p-paginator-current {
    cursor: pointer;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    line-height: 1;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    overflow: hidden;
    position: relative;
}
.p-paginator-element:focus {
    z-index: 1;
    position: relative;
}
`;
It(Mt);
we.render = kt;
var xe = {
  name: "RowRadioButton",
  inheritAttrs: !1,
  emits: ["change"],
  props: {
    value: null,
    checked: null
  },
  data() {
    return {
      focused: !1
    };
  },
  methods: {
    onClick(e) {
      this.disabled || this.checked || this.$emit("change", {
        originalEvent: e,
        data: this.value
      });
    },
    onFocus() {
      this.focused = !0;
    },
    onBlur() {
      this.focused = !1;
    }
  }
};
const Pt = ["aria-checked"], Dt = /* @__PURE__ */ w("div", { class: "p-radiobutton-icon" }, null, -1), Et = [
  Dt
];
function Ot(e, t, i, s, n, l) {
  return a(), p("div", {
    class: x(["p-radiobutton p-component", { "p-radiobutton-focused": n.focused }]),
    onClick: t[0] || (t[0] = (...o) => l.onClick && l.onClick(...o)),
    tabindex: "0",
    onFocus: t[1] || (t[1] = (o) => l.onFocus(o)),
    onBlur: t[2] || (t[2] = (o) => l.onBlur(o)),
    onKeydown: t[3] || (t[3] = U(q((...o) => l.onClick && l.onClick(...o), ["prevent"]), ["space"]))
  }, [
    w("div", {
      ref: "box",
      class: x(["p-radiobutton-box p-component", { "p-highlight": i.checked, "p-disabled": e.$attrs.disabled, "p-focus": n.focused }]),
      role: "radio",
      "aria-checked": i.checked
    }, Et, 10, Pt)
  ], 34);
}
xe.render = Ot;
var Ce = {
  name: "RowCheckbox",
  inheritAttrs: !1,
  emits: ["change"],
  props: {
    value: null,
    checked: null
  },
  data() {
    return {
      focused: !1
    };
  },
  methods: {
    onClick(e) {
      this.$attrs.disabled || (this.focused = !0, this.$emit("change", {
        originalEvent: e,
        data: this.value
      }));
    },
    onFocus() {
      this.focused = !0;
    },
    onBlur() {
      this.focused = !1;
    }
  }
};
const Ft = ["aria-checked", "tabindex"];
function Lt(e, t, i, s, n, l) {
  return a(), p("div", {
    class: x(["p-checkbox p-component", { "p-checkbox-focused": n.focused }]),
    onClick: t[3] || (t[3] = q((...o) => l.onClick && l.onClick(...o), ["stop", "prevent"]))
  }, [
    w("div", {
      ref: "box",
      class: x(["p-checkbox-box p-component", { "p-highlight": i.checked, "p-disabled": e.$attrs.disabled, "p-focus": n.focused }]),
      role: "checkbox",
      "aria-checked": i.checked,
      tabindex: e.$attrs.disabled ? null : "0",
      onKeydown: t[0] || (t[0] = U(q((...o) => l.onClick && l.onClick(...o), ["prevent"]), ["space"])),
      onFocus: t[1] || (t[1] = (o) => l.onFocus(o)),
      onBlur: t[2] || (t[2] = (o) => l.onBlur(o))
    }, [
      w("span", {
        class: x(["p-checkbox-icon", { "pi pi-check": i.checked }])
      }, null, 2)
    ], 42, Ft)
  ], 2);
}
Ce.render = Lt;
var Se = {
  name: "BodyCell",
  emits: ["cell-edit-init", "cell-edit-complete", "cell-edit-cancel", "row-edit-init", "row-edit-save", "row-edit-cancel", "row-toggle", "radio-change", "checkbox-change", "editing-meta-change"],
  props: {
    rowData: {
      type: Object,
      default: null
    },
    column: {
      type: Object,
      default: null
    },
    frozenRow: {
      type: Boolean,
      default: !1
    },
    rowIndex: {
      type: Number,
      default: null
    },
    index: {
      type: Number,
      default: null
    },
    rowTogglerIcon: {
      type: Array,
      default: null
    },
    selected: {
      type: Boolean,
      default: !1
    },
    editing: {
      type: Boolean,
      default: !1
    },
    editingMeta: {
      type: Object,
      default: null
    },
    editMode: {
      type: String,
      default: null
    },
    responsiveLayout: {
      type: String,
      default: "stack"
    },
    virtualScrollerContentProps: {
      type: Object,
      default: null
    }
  },
  documentEditListener: null,
  selfClick: !1,
  overlayEventListener: null,
  data() {
    return {
      d_editing: this.editing,
      styleObject: {}
    };
  },
  watch: {
    editing(e) {
      this.d_editing = e;
    },
    "$data.d_editing": function(e) {
      this.$emit("editing-meta-change", { data: this.rowData, field: this.field || `field_${this.index}`, index: this.rowIndex, editing: e });
    }
  },
  mounted() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  updated() {
    if (this.columnProp("frozen") && this.updateStickyPosition(), this.d_editing && (this.editMode === "cell" || this.editMode === "row" && this.columnProp("rowEditor"))) {
      const e = f.getFirstFocusableElement(this.$el);
      e && e.focus();
    }
  },
  beforeUnmount() {
    this.overlayEventListener && (_.off("overlay-click", this.overlayEventListener), this.overlayEventListener = null);
  },
  methods: {
    columnProp(e) {
      return y.getVNodeProp(this.column, e);
    },
    resolveFieldData() {
      return y.resolveFieldData(this.rowData, this.field);
    },
    toggleRow(e) {
      this.$emit("row-toggle", {
        originalEvent: e,
        data: this.rowData
      });
    },
    toggleRowWithRadio(e, t) {
      this.$emit("radio-change", { originalEvent: e.originalEvent, index: t, data: e.data });
    },
    toggleRowWithCheckbox(e, t) {
      this.$emit("checkbox-change", { originalEvent: e.originalEvent, index: t, data: e.data });
    },
    isEditable() {
      return this.column.children && this.column.children.editor != null;
    },
    bindDocumentEditListener() {
      this.documentEditListener || (this.documentEditListener = (e) => {
        this.selfClick || this.completeEdit(e, "outside"), this.selfClick = !1;
      }, document.addEventListener("click", this.documentEditListener));
    },
    unbindDocumentEditListener() {
      this.documentEditListener && (document.removeEventListener("click", this.documentEditListener), this.documentEditListener = null, this.selfClick = !1);
    },
    switchCellToViewMode() {
      this.d_editing = !1, this.unbindDocumentEditListener(), _.off("overlay-click", this.overlayEventListener), this.overlayEventListener = null;
    },
    onClick(e) {
      this.editMode === "cell" && this.isEditable() && (this.selfClick = !0, this.d_editing || (this.d_editing = !0, this.bindDocumentEditListener(), this.$emit("cell-edit-init", { originalEvent: e, data: this.rowData, field: this.field, index: this.rowIndex }), this.overlayEventListener = (t) => {
        this.$el && this.$el.contains(t.target) && (this.selfClick = !0);
      }, _.on("overlay-click", this.overlayEventListener)));
    },
    completeEdit(e, t) {
      const i = {
        originalEvent: e,
        data: this.rowData,
        newData: this.editingRowData,
        value: this.rowData[this.field],
        newValue: this.editingRowData[this.field],
        field: this.field,
        index: this.rowIndex,
        type: t,
        defaultPrevented: !1,
        preventDefault: function() {
          this.defaultPrevented = !0;
        }
      };
      this.$emit("cell-edit-complete", i), i.defaultPrevented || this.switchCellToViewMode();
    },
    onKeyDown(e) {
      if (this.editMode === "cell")
        switch (e.which) {
          case 13:
            this.completeEdit(e, "enter");
            break;
          case 27:
            this.switchCellToViewMode(), this.$emit("cell-edit-cancel", { originalEvent: e, data: this.rowData, field: this.field, index: this.rowIndex });
            break;
          case 9:
            this.completeEdit(e, "tab"), e.shiftKey ? this.moveToPreviousCell(e) : this.moveToNextCell(e);
            break;
        }
    },
    moveToPreviousCell(e) {
      let t = this.findCell(e.target), i = this.findPreviousEditableColumn(t);
      i && (f.invokeElementMethod(i, "click"), e.preventDefault());
    },
    moveToNextCell(e) {
      let t = this.findCell(e.target), i = this.findNextEditableColumn(t);
      i && (f.invokeElementMethod(i, "click"), e.preventDefault());
    },
    findCell(e) {
      if (e) {
        let t = e;
        for (; t && !f.hasClass(t, "p-cell-editing"); )
          t = t.parentElement;
        return t;
      } else
        return null;
    },
    findPreviousEditableColumn(e) {
      let t = e.previousElementSibling;
      if (!t) {
        let i = e.parentElement.previousElementSibling;
        i && (t = i.lastElementChild);
      }
      return t ? f.hasClass(t, "p-editable-column") ? t : this.findPreviousEditableColumn(t) : null;
    },
    findNextEditableColumn(e) {
      let t = e.nextElementSibling;
      if (!t) {
        let i = e.parentElement.nextElementSibling;
        i && (t = i.firstElementChild);
      }
      return t ? f.hasClass(t, "p-editable-column") ? t : this.findNextEditableColumn(t) : null;
    },
    isEditingCellValid() {
      return f.find(this.$el, ".p-invalid").length === 0;
    },
    onRowEditInit(e) {
      this.$emit("row-edit-init", { originalEvent: e, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
    },
    onRowEditSave(e) {
      this.$emit("row-edit-save", { originalEvent: e, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
    },
    onRowEditCancel(e) {
      this.$emit("row-edit-cancel", { originalEvent: e, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
    },
    editorInitCallback(e) {
      this.$emit("row-edit-init", { originalEvent: e, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex });
    },
    editorSaveCallback(e) {
      this.editMode === "row" ? this.$emit("row-edit-save", { originalEvent: e, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex }) : this.completeEdit(e, "enter");
    },
    editorCancelCallback(e) {
      this.editMode === "row" ? this.$emit("row-edit-cancel", { originalEvent: e, data: this.rowData, newData: this.editingRowData, field: this.field, index: this.rowIndex }) : (this.switchCellToViewMode(), this.$emit("cell-edit-cancel", { originalEvent: e, data: this.rowData, field: this.field, index: this.rowIndex }));
    },
    updateStickyPosition() {
      if (this.columnProp("frozen"))
        if (this.columnProp("alignFrozen") === "right") {
          let t = 0, i = this.$el.nextElementSibling;
          i && (t = f.getOuterWidth(i) + parseFloat(i.style.right || 0)), this.styleObject.right = t + "px";
        } else {
          let t = 0, i = this.$el.previousElementSibling;
          i && (t = f.getOuterWidth(i) + parseFloat(i.style.left || 0)), this.styleObject.left = t + "px";
        }
    },
    getVirtualScrollerProp(e) {
      return this.virtualScrollerContentProps ? this.virtualScrollerContentProps[e] : null;
    }
  },
  computed: {
    editingRowData() {
      return this.editingMeta[this.rowIndex] ? this.editingMeta[this.rowIndex].data : this.rowData;
    },
    field() {
      return this.columnProp("field");
    },
    containerClass() {
      return [
        this.columnProp("bodyClass"),
        this.columnProp("class"),
        {
          "p-selection-column": this.columnProp("selectionMode") != null,
          "p-editable-column": this.isEditable(),
          "p-cell-editing": this.d_editing,
          "p-frozen-column": this.columnProp("frozen")
        }
      ];
    },
    containerStyle() {
      let e = this.columnProp("bodyStyle"), t = this.columnProp("style");
      return this.columnProp("frozen") ? [t, e, this.styleObject] : [t, e];
    },
    loading() {
      return this.getVirtualScrollerProp("loading");
    },
    loadingOptions() {
      const e = this.getVirtualScrollerProp("getLoaderOptions");
      return e && e(this.rowIndex, {
        cellIndex: this.index,
        cellFirst: this.index === 0,
        cellLast: this.index === this.getVirtualScrollerProp("columns").length - 1,
        cellEven: this.index % 2 === 0,
        cellOdd: this.index % 2 !== 0,
        column: this.column,
        field: this.field
      });
    }
  },
  components: {
    DTRadioButton: xe,
    DTCheckbox: Ce
  },
  directives: {
    ripple: N
  }
};
const Bt = {
  key: 0,
  class: "p-column-title"
}, Tt = /* @__PURE__ */ w("span", { class: "p-row-editor-init-icon pi pi-fw pi-pencil" }, null, -1), zt = [
  Tt
], Vt = /* @__PURE__ */ w("span", { class: "p-row-editor-save-icon pi pi-fw pi-check" }, null, -1), Kt = [
  Vt
], At = /* @__PURE__ */ w("span", { class: "p-row-editor-cancel-icon pi pi-fw pi-times" }, null, -1), Ht = [
  At
];
function _t(e, t, i, s, n, l) {
  const o = v("DTRadioButton"), d = v("DTCheckbox"), u = j("ripple");
  return l.loading ? (a(), p("td", {
    key: 0,
    style: O(l.containerStyle),
    class: x(l.containerClass)
  }, [
    (a(), b(F(i.column.children.loading), {
      data: i.rowData,
      column: i.column,
      field: l.field,
      index: i.rowIndex,
      frozenRow: i.frozenRow,
      loadingOptions: l.loadingOptions
    }, null, 8, ["data", "column", "field", "index", "frozenRow", "loadingOptions"]))
  ], 6)) : (a(), p("td", {
    key: 1,
    style: O(l.containerStyle),
    class: x(l.containerClass),
    onClick: t[6] || (t[6] = (...r) => l.onClick && l.onClick(...r)),
    onKeydown: t[7] || (t[7] = (...r) => l.onKeyDown && l.onKeyDown(...r)),
    role: "cell"
  }, [
    i.responsiveLayout === "stack" ? (a(), p("span", Bt, D(l.columnProp("header")), 1)) : g("", !0),
    i.column.children && i.column.children.body && !n.d_editing ? (a(), b(F(i.column.children.body), {
      key: 1,
      data: i.rowData,
      column: i.column,
      field: l.field,
      index: i.rowIndex,
      frozenRow: i.frozenRow,
      editorInitCallback: l.editorInitCallback
    }, null, 8, ["data", "column", "field", "index", "frozenRow", "editorInitCallback"])) : i.column.children && i.column.children.editor && n.d_editing ? (a(), b(F(i.column.children.editor), {
      key: 2,
      data: l.editingRowData,
      column: i.column,
      field: l.field,
      index: i.rowIndex,
      frozenRow: i.frozenRow,
      editorSaveCallback: l.editorSaveCallback,
      editorCancelCallback: l.editorCancelCallback
    }, null, 8, ["data", "column", "field", "index", "frozenRow", "editorSaveCallback", "editorCancelCallback"])) : i.column.children && i.column.children.body && !i.column.children.editor && n.d_editing ? (a(), b(F(i.column.children.body), {
      key: 3,
      data: l.editingRowData,
      column: i.column,
      field: l.field,
      index: i.rowIndex,
      frozenRow: i.frozenRow
    }, null, 8, ["data", "column", "field", "index", "frozenRow"])) : l.columnProp("selectionMode") ? (a(), p(R, { key: 4 }, [
      l.columnProp("selectionMode") === "single" ? (a(), b(o, {
        key: 0,
        value: i.rowData,
        checked: i.selected,
        onChange: t[0] || (t[0] = (r) => l.toggleRowWithRadio(r, i.rowIndex))
      }, null, 8, ["value", "checked"])) : l.columnProp("selectionMode") === "multiple" ? (a(), b(d, {
        key: 1,
        value: i.rowData,
        checked: i.selected,
        onChange: t[1] || (t[1] = (r) => l.toggleRowWithCheckbox(r, i.rowIndex))
      }, null, 8, ["value", "checked"])) : g("", !0)
    ], 64)) : l.columnProp("rowReorder") ? (a(), p("i", {
      key: 5,
      class: x(["p-datatable-reorderablerow-handle", l.columnProp("rowReorderIcon") || "pi pi-bars"])
    }, null, 2)) : l.columnProp("expander") ? V((a(), p("button", {
      key: 6,
      class: "p-row-toggler p-link",
      onClick: t[2] || (t[2] = (...r) => l.toggleRow && l.toggleRow(...r)),
      type: "button"
    }, [
      w("span", {
        class: x(i.rowTogglerIcon)
      }, null, 2)
    ])), [
      [u]
    ]) : i.editMode === "row" && l.columnProp("rowEditor") ? (a(), p(R, { key: 7 }, [
      n.d_editing ? g("", !0) : V((a(), p("button", {
        key: 0,
        class: "p-row-editor-init p-link",
        onClick: t[3] || (t[3] = (...r) => l.onRowEditInit && l.onRowEditInit(...r)),
        type: "button"
      }, zt)), [
        [u]
      ]),
      n.d_editing ? V((a(), p("button", {
        key: 1,
        class: "p-row-editor-save p-link",
        onClick: t[4] || (t[4] = (...r) => l.onRowEditSave && l.onRowEditSave(...r)),
        type: "button"
      }, Kt)), [
        [u]
      ]) : g("", !0),
      n.d_editing ? V((a(), p("button", {
        key: 2,
        class: "p-row-editor-cancel p-link",
        onClick: t[5] || (t[5] = (...r) => l.onRowEditCancel && l.onRowEditCancel(...r)),
        type: "button"
      }, Ht)), [
        [u]
      ]) : g("", !0)
    ], 64)) : (a(), p(R, { key: 8 }, [
      H(D(l.resolveFieldData()), 1)
    ], 64))
  ], 38));
}
Se.render = _t;
var ve = {
  name: "TableBody",
  emits: [
    "rowgroup-toggle",
    "row-click",
    "row-dblclick",
    "row-rightclick",
    "row-touchend",
    "row-keydown",
    "row-mousedown",
    "row-dragstart",
    "row-dragover",
    "row-dragleave",
    "row-dragend",
    "row-drop",
    "row-toggle",
    "radio-change",
    "checkbox-change",
    "cell-edit-init",
    "cell-edit-complete",
    "cell-edit-cancel",
    "row-edit-init",
    "row-edit-save",
    "row-edit-cancel",
    "editing-meta-change"
  ],
  props: {
    value: {
      type: Array,
      default: null
    },
    columns: {
      type: null,
      default: null
    },
    frozenRow: {
      type: Boolean,
      default: !1
    },
    empty: {
      type: Boolean,
      default: !1
    },
    rowGroupMode: {
      type: String,
      default: null
    },
    groupRowsBy: {
      type: [Array, String, Function],
      default: null
    },
    expandableRowGroups: {
      type: Boolean,
      default: !1
    },
    expandedRowGroups: {
      type: Array,
      default: null
    },
    dataKey: {
      type: String,
      default: null
    },
    expandedRowIcon: {
      type: String,
      default: null
    },
    collapsedRowIcon: {
      type: String,
      default: null
    },
    expandedRows: {
      type: Array,
      default: null
    },
    expandedRowKeys: {
      type: null,
      default: null
    },
    selection: {
      type: [Array, Object],
      default: null
    },
    selectionKeys: {
      type: null,
      default: null
    },
    selectionMode: {
      type: String,
      default: null
    },
    contextMenu: {
      type: Boolean,
      default: !1
    },
    contextMenuSelection: {
      type: Object,
      default: null
    },
    rowClass: {
      type: null,
      default: null
    },
    rowStyle: {
      type: null,
      default: null
    },
    editMode: {
      type: String,
      default: null
    },
    compareSelectionBy: {
      type: String,
      default: "deepEquals"
    },
    editingRows: {
      type: Array,
      default: null
    },
    editingRowKeys: {
      type: null,
      default: null
    },
    editingMeta: {
      type: Object,
      default: null
    },
    templates: {
      type: null,
      default: null
    },
    scrollable: {
      type: Boolean,
      default: !1
    },
    responsiveLayout: {
      type: String,
      default: "stack"
    },
    virtualScrollerContentProps: {
      type: Object,
      default: null
    },
    isVirtualScrollerDisabled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      rowGroupHeaderStyleObject: {}
    };
  },
  watch: {
    virtualScrollerContentProps(e, t) {
      !this.isVirtualScrollerDisabled && this.getVirtualScrollerProp("vertical") && this.getVirtualScrollerProp("itemSize", t) !== this.getVirtualScrollerProp("itemSize", e) && this.updateVirtualScrollerPosition();
    }
  },
  mounted() {
    this.frozenRow && this.updateFrozenRowStickyPosition(), this.scrollable && this.rowGroupMode === "subheader" && this.updateFrozenRowGroupHeaderStickyPosition(), !this.isVirtualScrollerDisabled && this.getVirtualScrollerProp("vertical") && this.updateVirtualScrollerPosition();
  },
  updated() {
    this.frozenRow && this.updateFrozenRowStickyPosition(), this.scrollable && this.rowGroupMode === "subheader" && this.updateFrozenRowGroupHeaderStickyPosition();
  },
  methods: {
    columnProp(e, t) {
      return y.getVNodeProp(e, t);
    },
    shouldRenderRowGroupHeader(e, t, i) {
      let s = y.resolveFieldData(t, this.groupRowsBy), n = e[i - 1];
      if (n) {
        let l = y.resolveFieldData(n, this.groupRowsBy);
        return s !== l;
      } else
        return !0;
    },
    getRowKey(e, t) {
      return this.dataKey ? y.resolveFieldData(e, this.dataKey) : t;
    },
    getRowIndex(e) {
      const t = this.getVirtualScrollerProp("getItemOptions");
      return t ? t(e).index : e;
    },
    getRowClass(e) {
      let t = [];
      if (this.selectionMode && t.push("p-selectable-row"), this.selection && t.push({
        "p-highlight": this.isSelected(e)
      }), this.contextMenuSelection && t.push({
        "p-highlight-contextmenu": this.isSelectedWithContextMenu(e)
      }), this.rowClass) {
        let i = this.rowClass(e);
        i && t.push(i);
      }
      return t;
    },
    shouldRenderRowGroupFooter(e, t, i) {
      if (this.expandableRowGroups && !this.isRowGroupExpanded(t))
        return !1;
      {
        let s = y.resolveFieldData(t, this.groupRowsBy), n = e[i + 1];
        if (n) {
          let l = y.resolveFieldData(n, this.groupRowsBy);
          return s !== l;
        } else
          return !0;
      }
    },
    shouldRenderBodyCell(e, t, i) {
      if (this.rowGroupMode) {
        if (this.rowGroupMode === "subheader")
          return this.groupRowsBy !== this.columnProp(t, "field");
        if (this.rowGroupMode === "rowspan")
          if (this.isGrouped(t)) {
            let s = e[i - 1];
            if (s) {
              let n = y.resolveFieldData(e[i], this.columnProp(t, "field")), l = y.resolveFieldData(s, this.columnProp(t, "field"));
              return n !== l;
            } else
              return !0;
          } else
            return !0;
      } else
        return !this.columnProp(t, "hidden");
    },
    calculateRowGroupSize(e, t, i) {
      if (this.isGrouped(t)) {
        let s = y.resolveFieldData(e[i], this.columnProp(t, "field")), n = s, l = 0;
        for (; s === n; ) {
          l++;
          let o = e[++i];
          if (o)
            n = y.resolveFieldData(o, this.columnProp(t, "field"));
          else
            break;
        }
        return l === 1 ? null : l;
      } else
        return null;
    },
    rowTogglerIcon(e) {
      return ["p-row-toggler-icon pi", this.isRowExpanded(e) ? this.expandedRowIcon : this.collapsedRowIcon];
    },
    rowGroupTogglerIcon(e) {
      return ["p-row-toggler-icon pi", this.isRowGroupExpanded(e) ? this.expandedRowIcon : this.collapsedRowIcon];
    },
    isGrouped(e) {
      return this.groupRowsBy && this.columnProp(e, "field") ? Array.isArray(this.groupRowsBy) ? this.groupRowsBy.indexOf(e.props.field) > -1 : this.groupRowsBy === e.props.field : !1;
    },
    isRowEditing(e) {
      return e && this.editingRows ? this.dataKey ? this.editingRowKeys ? this.editingRowKeys[y.resolveFieldData(e, this.dataKey)] !== void 0 : !1 : this.findIndex(e, this.editingRows) > -1 : !1;
    },
    isRowExpanded(e) {
      return e && this.expandedRows ? this.dataKey ? this.expandedRowKeys ? this.expandedRowKeys[y.resolveFieldData(e, this.dataKey)] !== void 0 : !1 : this.findIndex(e, this.expandedRows) > -1 : !1;
    },
    isRowGroupExpanded(e) {
      if (this.expandableRowGroups && this.expandedRowGroups) {
        let t = y.resolveFieldData(e, this.groupRowsBy);
        return this.expandedRowGroups.indexOf(t) > -1;
      }
      return !1;
    },
    isSelected(e) {
      return e && this.selection ? this.dataKey ? this.selectionKeys ? this.selectionKeys[y.resolveFieldData(e, this.dataKey)] !== void 0 : !1 : this.selection instanceof Array ? this.findIndexInSelection(e) > -1 : this.equals(e, this.selection) : !1;
    },
    isSelectedWithContextMenu(e) {
      return e && this.contextMenuSelection ? this.equals(e, this.contextMenuSelection, this.dataKey) : !1;
    },
    findIndexInSelection(e) {
      return this.findIndex(e, this.selection);
    },
    findIndex(e, t) {
      let i = -1;
      if (t && t.length) {
        for (let s = 0; s < t.length; s++)
          if (this.equals(e, t[s])) {
            i = s;
            break;
          }
      }
      return i;
    },
    equals(e, t) {
      return this.compareSelectionBy === "equals" ? e === t : y.equals(e, t, this.dataKey);
    },
    onRowGroupToggle(e, t) {
      this.$emit("rowgroup-toggle", { originalEvent: e, data: t });
    },
    onRowClick(e, t, i) {
      this.$emit("row-click", { originalEvent: e, data: t, index: i });
    },
    onRowDblClick(e, t, i) {
      this.$emit("row-dblclick", { originalEvent: e, data: t, index: i });
    },
    onRowRightClick(e, t, i) {
      this.$emit("row-rightclick", { originalEvent: e, data: t, index: i });
    },
    onRowTouchEnd(e) {
      this.$emit("row-touchend", e);
    },
    onRowKeyDown(e, t, i) {
      this.$emit("row-keydown", { originalEvent: e, data: t, index: i });
    },
    onRowMouseDown(e) {
      this.$emit("row-mousedown", e);
    },
    onRowDragStart(e, t) {
      this.$emit("row-dragstart", { originalEvent: e, index: t });
    },
    onRowDragOver(e, t) {
      this.$emit("row-dragover", { originalEvent: e, index: t });
    },
    onRowDragLeave(e) {
      this.$emit("row-dragleave", e);
    },
    onRowDragEnd(e) {
      this.$emit("row-dragend", e);
    },
    onRowDrop(e) {
      this.$emit("row-drop", e);
    },
    onRowToggle(e) {
      this.$emit("row-toggle", e);
    },
    onRadioChange(e) {
      this.$emit("radio-change", e);
    },
    onCheckboxChange(e) {
      this.$emit("checkbox-change", e);
    },
    onCellEditInit(e) {
      this.$emit("cell-edit-init", e);
    },
    onCellEditComplete(e) {
      this.$emit("cell-edit-complete", e);
    },
    onCellEditCancel(e) {
      this.$emit("cell-edit-cancel", e);
    },
    onRowEditInit(e) {
      this.$emit("row-edit-init", e);
    },
    onRowEditSave(e) {
      this.$emit("row-edit-save", e);
    },
    onRowEditCancel(e) {
      this.$emit("row-edit-cancel", e);
    },
    onEditingMetaChange(e) {
      this.$emit("editing-meta-change", e);
    },
    updateFrozenRowStickyPosition() {
      this.$el.style.top = f.getOuterHeight(this.$el.previousElementSibling) + "px";
    },
    updateFrozenRowGroupHeaderStickyPosition() {
      let e = f.getOuterHeight(this.$el.previousElementSibling);
      this.rowGroupHeaderStyleObject.top = e + "px";
    },
    updateVirtualScrollerPosition() {
      const e = f.getOuterHeight(this.$el.previousElementSibling);
      this.$el.style.top = (this.$el.style.top || 0) + e + "px";
    },
    getVirtualScrollerProp(e, t) {
      return t = t || this.virtualScrollerContentProps, t ? t[e] : null;
    },
    bodyRef(e) {
      const t = this.getVirtualScrollerProp("contentRef");
      t && t(e);
    }
  },
  computed: {
    columnsLength() {
      let e = 0;
      return this.columns.forEach((t) => {
        this.columnProp(t, "hidden") && e++;
      }), this.columns ? this.columns.length - e : 0;
    },
    rowGroupHeaderStyle() {
      return this.scrollable ? { top: this.rowGroupHeaderStyleObject.top } : null;
    },
    bodyStyle() {
      return this.getVirtualScrollerProp("contentStyle");
    }
  },
  components: {
    DTBodyCell: Se
  }
};
const Gt = ["colspan"], Nt = ["onClick"], jt = ["onClick", "onDblclick", "onContextmenu", "onKeydown", "tabindex", "onDragstart", "onDragover"], Wt = ["colspan"], Ut = {
  key: 1,
  class: "p-datatable-emptymessage",
  role: "row"
}, qt = ["colspan"];
function Jt(e, t, i, s, n, l) {
  const o = v("DTBodyCell");
  return a(), p("tbody", {
    ref: l.bodyRef,
    class: "p-datatable-tbody",
    role: "rowgroup",
    style: O(l.bodyStyle)
  }, [
    i.empty ? (a(), p("tr", Ut, [
      w("td", { colspan: l.columnsLength }, [
        i.templates.empty ? (a(), b(F(i.templates.empty), { key: 0 })) : g("", !0)
      ], 8, qt)
    ])) : (a(!0), p(R, { key: 0 }, E(i.value, (d, u) => (a(), p(R, {
      key: l.getRowKey(d, l.getRowIndex(u)) + "_subheader"
    }, [
      i.templates.groupheader && i.rowGroupMode === "subheader" && l.shouldRenderRowGroupHeader(i.value, d, l.getRowIndex(u)) ? (a(), p("tr", {
        key: 0,
        class: "p-rowgroup-header",
        style: O(l.rowGroupHeaderStyle),
        role: "row"
      }, [
        w("td", {
          colspan: l.columnsLength - 1
        }, [
          i.expandableRowGroups ? (a(), p("button", {
            key: 0,
            class: "p-row-toggler p-link",
            onClick: (r) => l.onRowGroupToggle(r, d),
            type: "button"
          }, [
            w("span", {
              class: x(l.rowGroupTogglerIcon(d))
            }, null, 2)
          ], 8, Nt)) : g("", !0),
          (a(), b(F(i.templates.groupheader), {
            data: d,
            index: l.getRowIndex(u)
          }, null, 8, ["data", "index"]))
        ], 8, Gt)
      ], 4)) : g("", !0),
      !i.expandableRowGroups || l.isRowGroupExpanded(d) ? (a(), p("tr", {
        key: l.getRowKey(d, l.getRowIndex(u)),
        class: x(l.getRowClass(d)),
        style: O(i.rowStyle),
        onClick: (r) => l.onRowClick(r, d, l.getRowIndex(u)),
        onDblclick: (r) => l.onRowDblClick(r, d, l.getRowIndex(u)),
        onContextmenu: (r) => l.onRowRightClick(r, d, l.getRowIndex(u)),
        onTouchend: t[9] || (t[9] = (r) => l.onRowTouchEnd(r)),
        onKeydown: (r) => l.onRowKeyDown(r, d, l.getRowIndex(u)),
        tabindex: i.selectionMode || i.contextMenu ? "0" : null,
        onMousedown: t[10] || (t[10] = (r) => l.onRowMouseDown(r)),
        onDragstart: (r) => l.onRowDragStart(r, l.getRowIndex(u)),
        onDragover: (r) => l.onRowDragOver(r, l.getRowIndex(u)),
        onDragleave: t[11] || (t[11] = (r) => l.onRowDragLeave(r)),
        onDragend: t[12] || (t[12] = (r) => l.onRowDragEnd(r)),
        onDrop: t[13] || (t[13] = (r) => l.onRowDrop(r)),
        role: "row"
      }, [
        (a(!0), p(R, null, E(i.columns, (r, m) => (a(), p(R, {
          key: l.columnProp(r, "columnKey") || l.columnProp(r, "field") || m
        }, [
          l.shouldRenderBodyCell(i.value, r, l.getRowIndex(u)) ? (a(), b(o, {
            key: 0,
            rowData: d,
            column: r,
            rowIndex: l.getRowIndex(u),
            index: m,
            selected: l.isSelected(d),
            rowTogglerIcon: l.columnProp(r, "expander") ? l.rowTogglerIcon(d) : null,
            frozenRow: i.frozenRow,
            rowspan: i.rowGroupMode === "rowspan" ? l.calculateRowGroupSize(i.value, r, l.getRowIndex(u)) : null,
            editMode: i.editMode,
            editing: i.editMode === "row" && l.isRowEditing(d),
            responsiveLayout: i.responsiveLayout,
            onRadioChange: t[0] || (t[0] = (h) => l.onRadioChange(h)),
            onCheckboxChange: t[1] || (t[1] = (h) => l.onCheckboxChange(h)),
            onRowToggle: t[2] || (t[2] = (h) => l.onRowToggle(h)),
            onCellEditInit: t[3] || (t[3] = (h) => l.onCellEditInit(h)),
            onCellEditComplete: t[4] || (t[4] = (h) => l.onCellEditComplete(h)),
            onCellEditCancel: t[5] || (t[5] = (h) => l.onCellEditCancel(h)),
            onRowEditInit: t[6] || (t[6] = (h) => l.onRowEditInit(h)),
            onRowEditSave: t[7] || (t[7] = (h) => l.onRowEditSave(h)),
            onRowEditCancel: t[8] || (t[8] = (h) => l.onRowEditCancel(h)),
            editingMeta: i.editingMeta,
            onEditingMetaChange: l.onEditingMetaChange,
            virtualScrollerContentProps: i.virtualScrollerContentProps
          }, null, 8, ["rowData", "column", "rowIndex", "index", "selected", "rowTogglerIcon", "frozenRow", "rowspan", "editMode", "editing", "responsiveLayout", "editingMeta", "onEditingMetaChange", "virtualScrollerContentProps"])) : g("", !0)
        ], 64))), 128))
      ], 46, jt)) : g("", !0),
      i.templates.expansion && i.expandedRows && l.isRowExpanded(d) ? (a(), p("tr", {
        key: l.getRowKey(d, l.getRowIndex(u)) + "_expansion",
        class: "p-datatable-row-expansion",
        role: "row"
      }, [
        w("td", { colspan: l.columnsLength }, [
          (a(), b(F(i.templates.expansion), {
            data: d,
            index: l.getRowIndex(u)
          }, null, 8, ["data", "index"]))
        ], 8, Wt)
      ])) : g("", !0),
      i.templates.groupfooter && i.rowGroupMode === "subheader" && l.shouldRenderRowGroupFooter(i.value, d, l.getRowIndex(u)) ? (a(), p("tr", {
        key: l.getRowKey(d, l.getRowIndex(u)) + "_subfooter",
        class: "p-rowgroup-footer",
        role: "row"
      }, [
        (a(), b(F(i.templates.groupfooter), {
          data: d,
          index: l.getRowIndex(u)
        }, null, 8, ["data", "index"]))
      ])) : g("", !0)
    ], 64))), 128))
  ], 4);
}
ve.render = Jt;
var Re = {
  name: "FooterCell",
  props: {
    column: {
      type: null,
      default: null
    }
  },
  data() {
    return {
      styleObject: {}
    };
  },
  mounted() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  updated() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  methods: {
    columnProp(e) {
      return y.getVNodeProp(this.column, e);
    },
    updateStickyPosition() {
      if (this.columnProp("frozen"))
        if (this.columnProp("alignFrozen") === "right") {
          let t = 0, i = this.$el.nextElementSibling;
          i && (t = f.getOuterWidth(i) + parseFloat(i.style.left)), this.styleObject.right = t + "px";
        } else {
          let t = 0, i = this.$el.previousElementSibling;
          i && (t = f.getOuterWidth(i) + parseFloat(i.style.left)), this.styleObject.left = t + "px";
        }
    }
  },
  computed: {
    containerClass() {
      return [
        this.columnProp("footerClass"),
        this.columnProp("class"),
        {
          "p-frozen-column": this.columnProp("frozen")
        }
      ];
    },
    containerStyle() {
      let e = this.columnProp("footerStyle"), t = this.columnProp("style");
      return this.columnProp("frozen") ? [t, e, this.styleObject] : [t, e];
    }
  }
};
const Xt = ["colspan", "rowspan"];
function Zt(e, t, i, s, n, l) {
  return a(), p("td", {
    style: O(l.containerStyle),
    class: x(l.containerClass),
    role: "cell",
    colspan: l.columnProp("colspan"),
    rowspan: l.columnProp("rowspan")
  }, [
    i.column.children && i.column.children.footer ? (a(), b(F(i.column.children.footer), {
      key: 0,
      column: i.column
    }, null, 8, ["column"])) : g("", !0),
    H(" " + D(l.columnProp("footer")), 1)
  ], 14, Xt);
}
Re.render = Zt;
var ke = {
  name: "TableFooter",
  props: {
    columnGroup: {
      type: null,
      default: null
    },
    columns: {
      type: null,
      default: null
    }
  },
  methods: {
    columnProp(e, t) {
      return y.getVNodeProp(e, t);
    },
    getFooterRows() {
      let e = [], t = this.columnGroup;
      if (t.children && t.children.default) {
        for (let i of t.children.default())
          i.type.name === "Row" ? e.push(i) : i.children && i.children instanceof Array && (e = i.children);
        return e;
      }
    },
    getFooterColumns(e) {
      let t = [];
      if (e.children && e.children.default)
        return e.children.default().forEach((i) => {
          i.children && i.children instanceof Array ? t = [...t, ...i.children] : i.type.name === "Column" && t.push(i);
        }), t;
    }
  },
  computed: {
    hasFooter() {
      let e = !1;
      if (this.columnGroup)
        e = !0;
      else if (this.columns) {
        for (let t of this.columns)
          if (this.columnProp(t, "footer") || t.children && t.children.footer) {
            e = !0;
            break;
          }
      }
      return e;
    }
  },
  components: {
    DTFooterCell: Re
  }
};
const Yt = {
  key: 0,
  class: "p-datatable-tfoot",
  role: "rowgroup"
}, Qt = {
  key: 0,
  role: "row"
};
function $t(e, t, i, s, n, l) {
  const o = v("DTFooterCell");
  return l.hasFooter ? (a(), p("tfoot", Yt, [
    i.columnGroup ? (a(!0), p(R, { key: 1 }, E(l.getFooterRows(), (d, u) => (a(), p("tr", {
      key: u,
      role: "row"
    }, [
      (a(!0), p(R, null, E(l.getFooterColumns(d), (r, m) => (a(), p(R, {
        key: l.columnProp(r, "columnKey") || l.columnProp(r, "field") || m
      }, [
        l.columnProp(r, "hidden") ? g("", !0) : (a(), b(o, {
          key: 0,
          column: r
        }, null, 8, ["column"]))
      ], 64))), 128))
    ]))), 128)) : (a(), p("tr", Qt, [
      (a(!0), p(R, null, E(i.columns, (d, u) => (a(), p(R, {
        key: l.columnProp(d, "columnKey") || l.columnProp(d, "field") || u
      }, [
        l.columnProp(d, "hidden") ? g("", !0) : (a(), b(o, {
          key: 0,
          column: d
        }, null, 8, ["column"]))
      ], 64))), 128))
    ]))
  ])) : g("", !0);
}
ke.render = $t;
var ie = {
  name: "HeaderCheckbox",
  inheritAttrs: !1,
  emits: ["change"],
  props: {
    checked: null
  },
  data() {
    return {
      focused: !1
    };
  },
  methods: {
    onClick(e) {
      this.$attrs.disabled || (this.focused = !0, this.$emit("change", {
        originalEvent: e,
        checked: !this.checked
      }));
    },
    onFocus() {
      this.focused = !0;
    },
    onBlur() {
      this.focused = !1;
    }
  }
};
const ei = ["aria-checked", "tabindex"];
function ti(e, t, i, s, n, l) {
  return a(), p("div", {
    class: x(["p-checkbox p-component", { "p-checkbox-focused": n.focused, "p-disabled": e.$attrs.disabled }]),
    onClick: t[2] || (t[2] = (...o) => l.onClick && l.onClick(...o)),
    onKeydown: t[3] || (t[3] = U(q((...o) => l.onClick && l.onClick(...o), ["prevent"]), ["space"]))
  }, [
    w("div", {
      ref: "box",
      class: x(["p-checkbox-box p-component", { "p-highlight": i.checked, "p-disabled": e.$attrs.disabled, "p-focus": n.focused }]),
      role: "checkbox",
      "aria-checked": i.checked,
      tabindex: e.$attrs.disabled ? null : "0",
      onFocus: t[0] || (t[0] = (o) => l.onFocus(o)),
      onBlur: t[1] || (t[1] = (o) => l.onBlur(o))
    }, [
      w("span", {
        class: x(["p-checkbox-icon", { "pi pi-check": i.checked }])
      }, null, 2)
    ], 42, ei)
  ], 34);
}
ie.render = ti;
var le = {
  name: "ColumnFilter",
  emits: ["filter-change", "filter-apply", "operator-change", "matchmode-change", "constraint-add", "constraint-remove", "filter-clear", "apply-click"],
  props: {
    field: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    display: {
      type: String,
      default: null
    },
    showMenu: {
      type: Boolean,
      default: !0
    },
    matchMode: {
      type: String,
      default: null
    },
    showOperator: {
      type: Boolean,
      default: !0
    },
    showClearButton: {
      type: Boolean,
      default: !0
    },
    showApplyButton: {
      type: Boolean,
      default: !0
    },
    showMatchModes: {
      type: Boolean,
      default: !0
    },
    showAddButton: {
      type: Boolean,
      default: !0
    },
    matchModeOptions: {
      type: Array,
      default: null
    },
    maxConstraints: {
      type: Number,
      default: 2
    },
    filterElement: null,
    filterHeaderTemplate: null,
    filterFooterTemplate: null,
    filterClearTemplate: null,
    filterApplyTemplate: null,
    filters: {
      type: Object,
      default: null
    },
    filtersStore: {
      type: Object,
      default: null
    },
    filterMenuClass: {
      type: String,
      default: null
    },
    filterMenuStyle: {
      type: null,
      default: null
    }
  },
  data() {
    return {
      overlayVisible: !1,
      defaultMatchMode: null,
      defaultOperator: null
    };
  },
  overlay: null,
  selfClick: !1,
  overlayEventListener: null,
  beforeUnmount() {
    this.overlayEventListener && (_.off("overlay-click", this.overlayEventListener), this.overlayEventListener = null), this.overlay && (W.clear(this.overlay), this.onOverlayHide());
  },
  mounted() {
    if (this.filters && this.filters[this.field]) {
      let e = this.filters[this.field];
      e.operator ? (this.defaultMatchMode = e.constraints[0].matchMode, this.defaultOperator = e.operator) : this.defaultMatchMode = this.filters[this.field].matchMode;
    }
  },
  methods: {
    clearFilter() {
      let e = { ...this.filters };
      e[this.field].operator ? (e[this.field].constraints.splice(1), e[this.field].operator = this.defaultOperator, e[this.field].constraints[0] = { value: null, matchMode: this.defaultMatchMode }) : (e[this.field].value = null, e[this.field].matchMode = this.defaultMatchMode), this.$emit("filter-clear"), this.$emit("filter-change", e), this.$emit("filter-apply"), this.hide();
    },
    applyFilter() {
      this.$emit("apply-click", { field: this.field, constraints: this.filters[this.field] }), this.$emit("filter-apply"), this.hide();
    },
    hasFilter() {
      if (this.filtersStore) {
        let e = this.filtersStore[this.field];
        if (e)
          return e.operator ? !this.isFilterBlank(e.constraints[0].value) : !this.isFilterBlank(e.value);
      }
      return !1;
    },
    hasRowFilter() {
      return this.filters[this.field] && !this.isFilterBlank(this.filters[this.field].value);
    },
    isFilterBlank(e) {
      return e != null ? typeof e == "string" && e.trim().length == 0 || e instanceof Array && e.length == 0 : !0;
    },
    toggleMenu() {
      this.overlayVisible = !this.overlayVisible;
    },
    onToggleButtonKeyDown(e) {
      switch (e.key) {
        case "Escape":
        case "Tab":
          this.overlayVisible = !1;
          break;
        case "ArrowDown":
          if (this.overlayVisible) {
            let t = f.getFocusableElements(this.overlay);
            t && t[0].focus(), e.preventDefault();
          } else
            e.altKey && (this.overlayVisible = !0, e.preventDefault());
          break;
      }
    },
    onEscape() {
      this.overlayVisible = !1, this.$refs.icon && this.$refs.icon.focus();
    },
    onRowMatchModeChange(e) {
      let t = { ...this.filters };
      t[this.field].matchMode = e, this.$emit("matchmode-change", { field: this.field, matchMode: e }), this.$emit("filter-change", t), this.$emit("filter-apply"), this.hide();
    },
    onRowMatchModeKeyDown(e) {
      let t = e.target;
      switch (e.key) {
        case "ArrowDown":
          var i = this.findNextItem(t);
          i && (t.removeAttribute("tabindex"), i.tabIndex = "0", i.focus()), e.preventDefault();
          break;
        case "ArrowUp":
          var s = this.findPrevItem(t);
          s && (t.removeAttribute("tabindex"), s.tabIndex = "0", s.focus()), e.preventDefault();
          break;
      }
    },
    isRowMatchModeSelected(e) {
      return this.filters[this.field].matchMode === e;
    },
    onOperatorChange(e) {
      let t = { ...this.filters };
      t[this.field].operator = e, this.$emit("filter-change", t), this.$emit("operator-change", { field: this.field, operator: e }), this.showApplyButton || this.$emit("filter-apply");
    },
    onMenuMatchModeChange(e, t) {
      let i = { ...this.filters };
      i[this.field].constraints[t].matchMode = e, this.$emit("matchmode-change", { field: this.field, matchMode: e, index: t }), this.showApplyButton || this.$emit("filter-apply");
    },
    addConstraint() {
      let e = { ...this.filters }, t = { value: null, matchMode: this.defaultMatchMode };
      e[this.field].constraints.push(t), this.$emit("constraint-add", { field: this.field, constraing: t }), this.$emit("filter-change", e), this.showApplyButton || this.$emit("filter-apply");
    },
    removeConstraint(e) {
      let t = { ...this.filters }, i = t[this.field].constraints.splice(e, 1);
      this.$emit("constraint-remove", { field: this.field, constraing: i }), this.$emit("filter-change", t), this.showApplyButton || this.$emit("filter-apply");
    },
    filterCallback() {
      this.$emit("filter-apply");
    },
    findNextItem(e) {
      let t = e.nextElementSibling;
      return t ? f.hasClass(t, "p-column-filter-separator") ? this.findNextItem(t) : t : e.parentElement.firstElementChild;
    },
    findPrevItem(e) {
      let t = e.previousElementSibling;
      if (t)
        f.hasClass(t, "p-column-filter-separator") && this.findPrevItem(t);
      else
        return e.parentElement.lastElementChild;
    },
    hide() {
      this.overlayVisible = !1;
    },
    onContentClick(e) {
      this.selfClick = !0, _.emit("overlay-click", {
        originalEvent: e,
        target: this.overlay
      });
    },
    onContentMouseDown() {
      this.selfClick = !0;
    },
    onOverlayEnter(e) {
      this.filterMenuStyle && f.applyStyle(this.overlay, this.filterMenuStyle), W.set("overlay", e, this.$primevue.config.zIndex.overlay), f.absolutePosition(this.overlay, this.$refs.icon), this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.overlayEventListener = (t) => {
        this.isOutsideClicked(t.target) || (this.selfClick = !0);
      }, _.on("overlay-click", this.overlayEventListener);
    },
    onOverlayLeave() {
      this.onOverlayHide();
    },
    onOverlayAfterLeave(e) {
      W.clear(e);
    },
    onOverlayHide() {
      this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindScrollListener(), this.overlay = null, _.off("overlay-click", this.overlayEventListener), this.overlayEventListener = null;
    },
    overlayRef(e) {
      this.overlay = e;
    },
    isOutsideClicked(e) {
      return !this.isTargetClicked(e) && this.overlay && !(this.overlay.isSameNode(e) || this.overlay.contains(e));
    },
    isTargetClicked(e) {
      return this.$refs.icon && (this.$refs.icon.isSameNode(e) || this.$refs.icon.contains(e));
    },
    bindOutsideClickListener() {
      this.outsideClickListener || (this.outsideClickListener = (e) => {
        this.overlayVisible && !this.selfClick && this.isOutsideClicked(e.target) && (this.overlayVisible = !1), this.selfClick = !1;
      }, document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener), this.outsideClickListener = null, this.selfClick = !1);
    },
    bindScrollListener() {
      this.scrollHandler || (this.scrollHandler = new se(this.$refs.icon, () => {
        this.overlayVisible && this.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener() {
      this.resizeListener || (this.resizeListener = () => {
        this.overlayVisible && !f.isTouchDevice() && this.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    }
  },
  computed: {
    containerClass() {
      return [
        "p-column-filter p-fluid",
        {
          "p-column-filter-row": this.display === "row",
          "p-column-filter-menu": this.display === "menu"
        }
      ];
    },
    overlayClass() {
      return [
        this.filterMenuClass,
        {
          "p-column-filter-overlay p-component p-fluid": !0,
          "p-column-filter-overlay-menu": this.display === "menu",
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === !1
        }
      ];
    },
    showMenuButton() {
      return this.showMenu && (this.display === "row" ? this.type !== "boolean" : !0);
    },
    matchModes() {
      return this.matchModeOptions || this.$primevue.config.filterMatchModeOptions[this.type].map((e) => ({ label: this.$primevue.config.locale[e], value: e }));
    },
    isShowMatchModes() {
      return this.type !== "boolean" && this.showMatchModes && this.matchModes;
    },
    operatorOptions() {
      return [
        { label: this.$primevue.config.locale.matchAll, value: Z.AND },
        { label: this.$primevue.config.locale.matchAny, value: Z.OR }
      ];
    },
    noFilterLabel() {
      return this.$primevue.config.locale.noFilter;
    },
    isShowOperator() {
      return this.showOperator && this.filters[this.field].operator;
    },
    operator() {
      return this.filters[this.field].operator;
    },
    fieldConstraints() {
      return this.filters[this.field].constraints || [this.filters[this.field]];
    },
    showRemoveIcon() {
      return this.fieldConstraints.length > 1;
    },
    removeRuleButtonLabel() {
      return this.$primevue.config.locale.removeRule;
    },
    addRuleButtonLabel() {
      return this.$primevue.config.locale.addRule;
    },
    isShowAddConstraint() {
      return this.showAddButton && this.filters[this.field].operator && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints;
    },
    clearButtonLabel() {
      return this.$primevue.config.locale.clear;
    },
    applyButtonLabel() {
      return this.$primevue.config.locale.apply;
    }
  },
  components: {
    CFDropdown: Y,
    CFButton: re,
    Portal: ae
  }
};
const ii = {
  key: 0,
  class: "p-fluid p-column-filter-element"
}, li = ["aria-expanded"], ni = /* @__PURE__ */ w("span", { class: "pi pi-filter-icon pi-filter" }, null, -1), si = [
  ni
], oi = /* @__PURE__ */ w("span", { class: "pi pi-filter-slash" }, null, -1), ri = [
  oi
], ai = {
  key: 0,
  class: "p-column-filter-row-items"
}, di = ["onClick", "onKeydown", "tabindex"], ui = /* @__PURE__ */ w("li", { class: "p-column-filter-separator" }, null, -1), hi = {
  key: 0,
  class: "p-column-filter-operator"
}, ci = { class: "p-column-filter-constraints" }, pi = {
  key: 1,
  class: "p-column-filter-add-rule"
}, fi = { class: "p-column-filter-buttonbar" };
function mi(e, t, i, s, n, l) {
  const o = v("CFDropdown"), d = v("CFButton"), u = v("Portal");
  return a(), p("div", {
    class: x(l.containerClass)
  }, [
    i.display === "row" ? (a(), p("div", ii, [
      (a(), b(F(i.filterElement), {
        field: i.field,
        filterModel: i.filters[i.field],
        filterCallback: l.filterCallback
      }, null, 8, ["field", "filterModel", "filterCallback"]))
    ])) : g("", !0),
    l.showMenuButton ? (a(), p("button", {
      key: 1,
      ref: "icon",
      type: "button",
      class: x(["p-column-filter-menu-button p-link", { "p-column-filter-menu-button-open": n.overlayVisible, "p-column-filter-menu-button-active": l.hasFilter() }]),
      "aria-haspopup": "true",
      "aria-expanded": n.overlayVisible,
      onClick: t[0] || (t[0] = (r) => l.toggleMenu()),
      onKeydown: t[1] || (t[1] = (r) => l.onToggleButtonKeyDown(r))
    }, si, 42, li)) : g("", !0),
    i.showClearButton && i.display === "row" ? (a(), p("button", {
      key: 2,
      class: x([{ "p-hidden-space": !l.hasRowFilter() }, "p-column-filter-clear-button p-link"]),
      type: "button",
      onClick: t[2] || (t[2] = (r) => l.clearFilter())
    }, ri, 2)) : g("", !0),
    B(u, null, {
      default: z(() => [
        B(oe, {
          name: "p-connected-overlay",
          onEnter: l.onOverlayEnter,
          onLeave: l.onOverlayLeave,
          onAfterLeave: l.onOverlayAfterLeave
        }, {
          default: z(() => [
            n.overlayVisible ? (a(), p("div", {
              key: 0,
              ref: l.overlayRef,
              class: x(l.overlayClass),
              onKeydown: t[11] || (t[11] = U((...r) => l.onEscape && l.onEscape(...r), ["escape"])),
              onClick: t[12] || (t[12] = (...r) => l.onContentClick && l.onContentClick(...r)),
              onMousedown: t[13] || (t[13] = (...r) => l.onContentMouseDown && l.onContentMouseDown(...r))
            }, [
              (a(), b(F(i.filterHeaderTemplate), {
                field: i.field,
                filterModel: i.filters[i.field],
                filterCallback: l.filterCallback
              }, null, 8, ["field", "filterModel", "filterCallback"])),
              i.display === "row" ? (a(), p("ul", ai, [
                (a(!0), p(R, null, E(l.matchModes, (r, m) => (a(), p("li", {
                  key: r.label,
                  class: x(["p-column-filter-row-item", { "p-highlight": l.isRowMatchModeSelected(r.value) }]),
                  onClick: (h) => l.onRowMatchModeChange(r.value),
                  onKeydown: [
                    t[3] || (t[3] = (h) => l.onRowMatchModeKeyDown(h)),
                    U(q((h) => l.onRowMatchModeChange(r.value), ["prevent"]), ["enter"])
                  ],
                  tabindex: m === 0 ? "0" : null
                }, D(r.label), 43, di))), 128)),
                ui,
                w("li", {
                  class: "p-column-filter-row-item",
                  onClick: t[4] || (t[4] = (r) => l.clearFilter()),
                  onKeydown: [
                    t[5] || (t[5] = (r) => l.onRowMatchModeKeyDown(r)),
                    t[6] || (t[6] = U((r) => e.onRowClearItemClick(), ["enter"]))
                  ]
                }, D(l.noFilterLabel), 33)
              ])) : (a(), p(R, { key: 1 }, [
                l.isShowOperator ? (a(), p("div", hi, [
                  B(o, {
                    options: l.operatorOptions,
                    modelValue: l.operator,
                    "onUpdate:modelValue": t[7] || (t[7] = (r) => l.onOperatorChange(r)),
                    class: "p-column-filter-operator-dropdown",
                    optionLabel: "label",
                    optionValue: "value"
                  }, null, 8, ["options", "modelValue"])
                ])) : g("", !0),
                w("div", ci, [
                  (a(!0), p(R, null, E(l.fieldConstraints, (r, m) => (a(), p("div", {
                    key: m,
                    class: "p-column-filter-constraint"
                  }, [
                    l.isShowMatchModes ? (a(), b(o, {
                      key: 0,
                      options: l.matchModes,
                      modelValue: r.matchMode,
                      optionLabel: "label",
                      optionValue: "value",
                      "onUpdate:modelValue": (h) => l.onMenuMatchModeChange(h, m),
                      class: "p-column-filter-matchmode-dropdown"
                    }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])) : g("", !0),
                    i.display === "menu" ? (a(), b(F(i.filterElement), {
                      key: 1,
                      field: i.field,
                      filterModel: r,
                      filterCallback: l.filterCallback
                    }, null, 8, ["field", "filterModel", "filterCallback"])) : g("", !0),
                    w("div", null, [
                      l.showRemoveIcon ? (a(), b(d, {
                        key: 0,
                        type: "button",
                        icon: "pi pi-trash",
                        class: "p-column-filter-remove-button p-button-text p-button-danger p-button-sm",
                        onClick: (h) => l.removeConstraint(m),
                        label: l.removeRuleButtonLabel
                      }, null, 8, ["onClick", "label"])) : g("", !0)
                    ])
                  ]))), 128))
                ]),
                l.isShowAddConstraint ? (a(), p("div", pi, [
                  B(d, {
                    type: "button",
                    label: l.addRuleButtonLabel,
                    icon: "pi pi-plus",
                    class: "p-column-filter-add-button p-button-text p-button-sm",
                    onClick: t[8] || (t[8] = (r) => l.addConstraint())
                  }, null, 8, ["label"])
                ])) : g("", !0),
                w("div", fi, [
                  !i.filterClearTemplate && i.showClearButton ? (a(), b(d, {
                    key: 0,
                    type: "button",
                    class: "p-button-outlined p-button-sm",
                    onClick: t[9] || (t[9] = (r) => l.clearFilter()),
                    label: l.clearButtonLabel
                  }, null, 8, ["label"])) : (a(), b(F(i.filterClearTemplate), {
                    key: 1,
                    field: i.field,
                    filterModel: i.filters[i.field],
                    filterCallback: l.clearFilter
                  }, null, 8, ["field", "filterModel", "filterCallback"])),
                  i.showApplyButton ? (a(), p(R, { key: 2 }, [
                    i.filterApplyTemplate ? (a(), b(F(i.filterApplyTemplate), {
                      key: 1,
                      field: i.field,
                      filterModel: i.filters[i.field],
                      filterCallback: l.applyFilter
                    }, null, 8, ["field", "filterModel", "filterCallback"])) : (a(), b(d, {
                      key: 0,
                      type: "button",
                      class: "p-button-sm",
                      onClick: t[10] || (t[10] = (r) => l.applyFilter()),
                      label: l.applyButtonLabel
                    }, null, 8, ["label"]))
                  ], 64)) : g("", !0)
                ])
              ], 64)),
              (a(), b(F(i.filterFooterTemplate), {
                field: i.field,
                filterModel: i.filters[i.field],
                filterCallback: l.filterCallback
              }, null, 8, ["field", "filterModel", "filterCallback"]))
            ], 34)) : g("", !0)
          ]),
          _: 1
        }, 8, ["onEnter", "onLeave", "onAfterLeave"])
      ]),
      _: 1
    })
  ], 2);
}
le.render = mi;
var Ie = {
  name: "HeaderCell",
  emits: [
    "column-click",
    "column-mousedown",
    "column-dragstart",
    "column-dragover",
    "column-dragleave",
    "column-drop",
    "column-resizestart",
    "checkbox-change",
    "filter-change",
    "filter-apply",
    "operator-change",
    "matchmode-change",
    "constraint-add",
    "constraint-remove",
    "filter-clear",
    "apply-click"
  ],
  props: {
    column: {
      type: Object,
      default: null
    },
    resizableColumns: {
      type: Boolean,
      default: !1
    },
    groupRowsBy: {
      type: [Array, String, Function],
      default: null
    },
    sortMode: {
      type: String,
      default: "single"
    },
    groupRowSortField: {
      type: [String, Function],
      default: null
    },
    sortField: {
      type: [String, Function],
      default: null
    },
    sortOrder: {
      type: Number,
      default: null
    },
    multiSortMeta: {
      type: Array,
      default: null
    },
    allRowsSelected: {
      type: Boolean,
      default: !1
    },
    empty: {
      type: Boolean,
      default: !1
    },
    filterDisplay: {
      type: String,
      default: null
    },
    filters: {
      type: Object,
      default: null
    },
    filtersStore: {
      type: Object,
      default: null
    },
    filterColumn: {
      type: Boolean,
      default: !1
    },
    reorderableColumns: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      styleObject: {}
    };
  },
  mounted() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  updated() {
    this.columnProp("frozen") && this.updateStickyPosition();
  },
  methods: {
    columnProp(e) {
      return y.getVNodeProp(this.column, e);
    },
    onClick(e) {
      this.$emit("column-click", { originalEvent: e, column: this.column });
    },
    onKeyDown(e) {
      e.which === 13 && e.currentTarget.nodeName === "TH" && f.hasClass(e.currentTarget, "p-sortable-column") && this.$emit("column-click", { originalEvent: e, column: this.column });
    },
    onMouseDown(e) {
      this.$emit("column-mousedown", { originalEvent: e, column: this.column });
    },
    onDragStart(e) {
      this.$emit("column-dragstart", e);
    },
    onDragOver(e) {
      this.$emit("column-dragover", e);
    },
    onDragLeave(e) {
      this.$emit("column-dragleave", e);
    },
    onDrop(e) {
      this.$emit("column-drop", e);
    },
    onResizeStart(e) {
      this.$emit("column-resizestart", e);
    },
    getMultiSortMetaIndex() {
      return this.multiSortMeta.findIndex((e) => e.field === this.columnProp("field") || e.field === this.columnProp("sortField"));
    },
    getBadgeValue() {
      let e = this.getMultiSortMetaIndex();
      return this.groupRowsBy && this.groupRowsBy === this.groupRowSortField && e > -1 ? e : e + 1;
    },
    isMultiSorted() {
      return this.sortMode === "multiple" && this.columnProp("sortable") && this.getMultiSortMetaIndex() > -1;
    },
    isColumnSorted() {
      return this.sortMode === "single" ? this.sortField && (this.sortField === this.columnProp("field") || this.sortField === this.columnProp("sortField")) : this.isMultiSorted();
    },
    updateStickyPosition() {
      if (this.columnProp("frozen")) {
        if (this.columnProp("alignFrozen") === "right") {
          let i = 0, s = this.$el.nextElementSibling;
          s && (i = f.getOuterWidth(s) + parseFloat(s.style.right || 0)), this.styleObject.right = i + "px";
        } else {
          let i = 0, s = this.$el.previousElementSibling;
          s && (i = f.getOuterWidth(s) + parseFloat(s.style.left || 0)), this.styleObject.left = i + "px";
        }
        let t = this.$el.parentElement.nextElementSibling;
        if (t) {
          let i = f.index(this.$el);
          t.children[i].style.left = this.styleObject.left, t.children[i].style.right = this.styleObject.right;
        }
      }
    },
    onHeaderCheckboxChange(e) {
      this.$emit("checkbox-change", e);
    }
  },
  computed: {
    containerClass() {
      return [
        this.filterColumn ? this.columnProp("filterHeaderClass") : this.columnProp("headerClass"),
        this.columnProp("class"),
        {
          "p-sortable-column": this.columnProp("sortable"),
          "p-resizable-column": this.resizableColumns,
          "p-highlight": this.isColumnSorted(),
          "p-filter-column": this.filterColumn,
          "p-frozen-column": this.columnProp("frozen"),
          "p-reorderable-column": this.reorderableColumns
        }
      ];
    },
    containerStyle() {
      let e = this.filterColumn ? this.columnProp("filterHeaderStyle") : this.columnProp("headerStyle"), t = this.columnProp("style");
      return this.columnProp("frozen") ? [t, e, this.styleObject] : [t, e];
    },
    sortableColumnIcon() {
      let e = !1, t = null;
      if (this.sortMode === "single")
        e = this.sortField && (this.sortField === this.columnProp("field") || this.sortField === this.columnProp("sortField")), t = e ? this.sortOrder : 0;
      else if (this.sortMode === "multiple") {
        let i = this.getMultiSortMetaIndex();
        i > -1 && (e = !0, t = this.multiSortMeta[i].order);
      }
      return [
        "p-sortable-column-icon pi pi-fw",
        {
          "pi-sort-alt": !e,
          "pi-sort-amount-up-alt": e && t > 0,
          "pi-sort-amount-down": e && t < 0
        }
      ];
    },
    ariaSort() {
      if (this.columnProp("sortable")) {
        const e = this.sortableColumnIcon;
        return e[1]["pi-sort-amount-down"] ? "descending" : e[1]["pi-sort-amount-up-alt"] ? "ascending" : "none";
      } else
        return null;
    }
  },
  components: {
    DTHeaderCheckbox: ie,
    DTColumnFilter: le
  }
};
const gi = ["tabindex", "colspan", "rowspan", "aria-sort"], yi = { class: "p-column-header-content" }, bi = {
  key: 1,
  class: "p-column-title"
}, wi = {
  key: 3,
  class: "p-sortable-column-badge"
};
function xi(e, t, i, s, n, l) {
  const o = v("DTHeaderCheckbox"), d = v("DTColumnFilter");
  return a(), p("th", {
    style: O(l.containerStyle),
    class: x(l.containerClass),
    tabindex: l.columnProp("sortable") ? "0" : null,
    role: "cell",
    onClick: t[8] || (t[8] = (...u) => l.onClick && l.onClick(...u)),
    onKeydown: t[9] || (t[9] = (...u) => l.onKeyDown && l.onKeyDown(...u)),
    onMousedown: t[10] || (t[10] = (...u) => l.onMouseDown && l.onMouseDown(...u)),
    onDragstart: t[11] || (t[11] = (...u) => l.onDragStart && l.onDragStart(...u)),
    onDragover: t[12] || (t[12] = (...u) => l.onDragOver && l.onDragOver(...u)),
    onDragleave: t[13] || (t[13] = (...u) => l.onDragLeave && l.onDragLeave(...u)),
    onDrop: t[14] || (t[14] = (...u) => l.onDrop && l.onDrop(...u)),
    colspan: l.columnProp("colspan"),
    rowspan: l.columnProp("rowspan"),
    "aria-sort": l.ariaSort
  }, [
    i.resizableColumns && !l.columnProp("frozen") ? (a(), p("span", {
      key: 0,
      class: "p-column-resizer",
      onMousedown: t[0] || (t[0] = (...u) => l.onResizeStart && l.onResizeStart(...u))
    }, null, 32)) : g("", !0),
    w("div", yi, [
      i.column.children && i.column.children.header ? (a(), b(F(i.column.children.header), {
        key: 0,
        column: i.column
      }, null, 8, ["column"])) : g("", !0),
      l.columnProp("header") ? (a(), p("span", bi, D(l.columnProp("header")), 1)) : g("", !0),
      l.columnProp("sortable") ? (a(), p("span", {
        key: 2,
        class: x(l.sortableColumnIcon)
      }, null, 2)) : g("", !0),
      l.isMultiSorted() ? (a(), p("span", wi, D(l.getBadgeValue()), 1)) : g("", !0),
      l.columnProp("selectionMode") === "multiple" && i.filterDisplay !== "row" ? (a(), b(o, {
        key: 4,
        checked: i.allRowsSelected,
        onChange: l.onHeaderCheckboxChange,
        disabled: i.empty
      }, null, 8, ["checked", "onChange", "disabled"])) : g("", !0),
      i.filterDisplay === "menu" && i.column.children && i.column.children.filter ? (a(), b(d, {
        key: 5,
        field: l.columnProp("filterField") || l.columnProp("field"),
        type: l.columnProp("dataType"),
        display: "menu",
        showMenu: l.columnProp("showFilterMenu"),
        filterElement: i.column.children && i.column.children.filter,
        filterHeaderTemplate: i.column.children && i.column.children.filterheader,
        filterFooterTemplate: i.column.children && i.column.children.filterfooter,
        filterClearTemplate: i.column.children && i.column.children.filterclear,
        filterApplyTemplate: i.column.children && i.column.children.filterapply,
        filters: i.filters,
        filtersStore: i.filtersStore,
        onFilterChange: t[1] || (t[1] = (u) => e.$emit("filter-change", u)),
        onFilterApply: t[2] || (t[2] = (u) => e.$emit("filter-apply")),
        filterMenuStyle: l.columnProp("filterMenuStyle"),
        filterMenuClass: l.columnProp("filterMenuClass"),
        showOperator: l.columnProp("showFilterOperator"),
        showClearButton: l.columnProp("showClearButton"),
        showApplyButton: l.columnProp("showApplyButton"),
        showMatchModes: l.columnProp("showFilterMatchModes"),
        showAddButton: l.columnProp("showAddButton"),
        matchModeOptions: l.columnProp("filterMatchModeOptions"),
        maxConstraints: l.columnProp("maxConstraints"),
        onOperatorChange: t[3] || (t[3] = (u) => e.$emit("operator-change", u)),
        onMatchmodeChange: t[4] || (t[4] = (u) => e.$emit("matchmode-change", u)),
        onConstraintAdd: t[5] || (t[5] = (u) => e.$emit("constraint-add", u)),
        onConstraintRemove: t[6] || (t[6] = (u) => e.$emit("constraint-remove", u)),
        onApplyClick: t[7] || (t[7] = (u) => e.$emit("apply-click", u))
      }, null, 8, ["field", "type", "showMenu", "filterElement", "filterHeaderTemplate", "filterFooterTemplate", "filterClearTemplate", "filterApplyTemplate", "filters", "filtersStore", "filterMenuStyle", "filterMenuClass", "showOperator", "showClearButton", "showApplyButton", "showMatchModes", "showAddButton", "matchModeOptions", "maxConstraints"])) : g("", !0)
    ])
  ], 46, gi);
}
Ie.render = xi;
var Me = {
  name: "TableHeader",
  emits: [
    "column-click",
    "column-mousedown",
    "column-dragstart",
    "column-dragover",
    "column-dragleave",
    "column-drop",
    "column-resizestart",
    "checkbox-change",
    "filter-change",
    "filter-apply",
    "operator-change",
    "matchmode-change",
    "constraint-add",
    "constraint-remove",
    "filter-clear",
    "apply-click"
  ],
  props: {
    columnGroup: {
      type: null,
      default: null
    },
    columns: {
      type: null,
      default: null
    },
    rowGroupMode: {
      type: String,
      default: null
    },
    groupRowsBy: {
      type: [Array, String, Function],
      default: null
    },
    resizableColumns: {
      type: Boolean,
      default: !1
    },
    allRowsSelected: {
      type: Boolean,
      default: !1
    },
    empty: {
      type: Boolean,
      default: !1
    },
    sortMode: {
      type: String,
      default: "single"
    },
    groupRowSortField: {
      type: [String, Function],
      default: null
    },
    sortField: {
      type: [String, Function],
      default: null
    },
    sortOrder: {
      type: Number,
      default: null
    },
    multiSortMeta: {
      type: Array,
      default: null
    },
    filterDisplay: {
      type: String,
      default: null
    },
    filters: {
      type: Object,
      default: null
    },
    filtersStore: {
      type: Object,
      default: null
    },
    reorderableColumns: {
      type: Boolean,
      default: !1
    }
  },
  methods: {
    columnProp(e, t) {
      return y.getVNodeProp(e, t);
    },
    getFilterColumnHeaderClass(e) {
      return [
        "p-filter-column",
        this.columnProp(e, "filterHeaderClass"),
        this.columnProp(e, "class"),
        {
          "p-frozen-column": this.columnProp(e, "frozen")
        }
      ];
    },
    getFilterColumnHeaderStyle(e) {
      return [this.columnProp(e, "filterHeaderStyle"), this.columnProp(e, "style")];
    },
    getHeaderRows() {
      let e = [], t = this.columnGroup;
      if (t.children && t.children.default) {
        for (let i of t.children.default())
          i.type.name === "Row" ? e.push(i) : i.children && i.children instanceof Array && (e = i.children);
        return e;
      }
    },
    getHeaderColumns(e) {
      let t = [];
      if (e.children && e.children.default)
        return e.children.default().forEach((i) => {
          i.children && i.children instanceof Array ? t = [...t, ...i.children] : i.type.name === "Column" && t.push(i);
        }), t;
    }
  },
  components: {
    DTHeaderCell: Ie,
    DTHeaderCheckbox: ie,
    DTColumnFilter: le
  }
};
const Ci = {
  class: "p-datatable-thead",
  role: "rowgroup"
}, Si = { role: "row" }, vi = {
  key: 0,
  role: "row"
};
function Ri(e, t, i, s, n, l) {
  const o = v("DTHeaderCell"), d = v("DTHeaderCheckbox"), u = v("DTColumnFilter");
  return a(), p("thead", Ci, [
    i.columnGroup ? (a(!0), p(R, { key: 1 }, E(l.getHeaderRows(), (r, m) => (a(), p("tr", {
      key: m,
      role: "row"
    }, [
      (a(!0), p(R, null, E(l.getHeaderColumns(r), (h, c) => (a(), p(R, {
        key: l.columnProp(h, "columnKey") || l.columnProp(h, "field") || c
      }, [
        !l.columnProp(h, "hidden") && (i.rowGroupMode !== "subheader" || i.groupRowsBy !== l.columnProp(h, "field")) && typeof h.children != "string" ? (a(), b(o, {
          key: 0,
          column: h,
          onColumnClick: t[23] || (t[23] = (C) => e.$emit("column-click", C)),
          onColumnMousedown: t[24] || (t[24] = (C) => e.$emit("column-mousedown", C)),
          groupRowsBy: i.groupRowsBy,
          groupRowSortField: i.groupRowSortField,
          sortMode: i.sortMode,
          sortField: i.sortField,
          sortOrder: i.sortOrder,
          multiSortMeta: i.multiSortMeta,
          allRowsSelected: i.allRowsSelected,
          empty: i.empty,
          onCheckboxChange: t[25] || (t[25] = (C) => e.$emit("checkbox-change", C)),
          filters: i.filters,
          filterDisplay: i.filterDisplay,
          filtersStore: i.filtersStore,
          onFilterChange: t[26] || (t[26] = (C) => e.$emit("filter-change", C)),
          onFilterApply: t[27] || (t[27] = (C) => e.$emit("filter-apply")),
          onOperatorChange: t[28] || (t[28] = (C) => e.$emit("operator-change", C)),
          onMatchmodeChange: t[29] || (t[29] = (C) => e.$emit("matchmode-change", C)),
          onConstraintAdd: t[30] || (t[30] = (C) => e.$emit("constraint-add", C)),
          onConstraintRemove: t[31] || (t[31] = (C) => e.$emit("constraint-remove", C)),
          onApplyClick: t[32] || (t[32] = (C) => e.$emit("apply-click", C))
        }, null, 8, ["column", "groupRowsBy", "groupRowSortField", "sortMode", "sortField", "sortOrder", "multiSortMeta", "allRowsSelected", "empty", "filters", "filterDisplay", "filtersStore"])) : g("", !0)
      ], 64))), 128))
    ]))), 128)) : (a(), p(R, { key: 0 }, [
      w("tr", Si, [
        (a(!0), p(R, null, E(i.columns, (r, m) => (a(), p(R, {
          key: l.columnProp(r, "columnKey") || l.columnProp(r, "field") || m
        }, [
          !l.columnProp(r, "hidden") && (i.rowGroupMode !== "subheader" || i.groupRowsBy !== l.columnProp(r, "field")) ? (a(), b(o, {
            key: 0,
            column: r,
            onColumnClick: t[0] || (t[0] = (h) => e.$emit("column-click", h)),
            onColumnMousedown: t[1] || (t[1] = (h) => e.$emit("column-mousedown", h)),
            onColumnDragstart: t[2] || (t[2] = (h) => e.$emit("column-dragstart", h)),
            onColumnDragover: t[3] || (t[3] = (h) => e.$emit("column-dragover", h)),
            onColumnDragleave: t[4] || (t[4] = (h) => e.$emit("column-dragleave", h)),
            onColumnDrop: t[5] || (t[5] = (h) => e.$emit("column-drop", h)),
            groupRowsBy: i.groupRowsBy,
            groupRowSortField: i.groupRowSortField,
            reorderableColumns: i.reorderableColumns,
            resizableColumns: i.resizableColumns,
            onColumnResizestart: t[6] || (t[6] = (h) => e.$emit("column-resizestart", h)),
            sortMode: i.sortMode,
            sortField: i.sortField,
            sortOrder: i.sortOrder,
            multiSortMeta: i.multiSortMeta,
            allRowsSelected: i.allRowsSelected,
            empty: i.empty,
            onCheckboxChange: t[7] || (t[7] = (h) => e.$emit("checkbox-change", h)),
            filters: i.filters,
            filterDisplay: i.filterDisplay,
            filtersStore: i.filtersStore,
            onFilterChange: t[8] || (t[8] = (h) => e.$emit("filter-change", h)),
            onFilterApply: t[9] || (t[9] = (h) => e.$emit("filter-apply")),
            onOperatorChange: t[10] || (t[10] = (h) => e.$emit("operator-change", h)),
            onMatchmodeChange: t[11] || (t[11] = (h) => e.$emit("matchmode-change", h)),
            onConstraintAdd: t[12] || (t[12] = (h) => e.$emit("constraint-add", h)),
            onConstraintRemove: t[13] || (t[13] = (h) => e.$emit("constraint-remove", h)),
            onApplyClick: t[14] || (t[14] = (h) => e.$emit("apply-click", h))
          }, null, 8, ["column", "groupRowsBy", "groupRowSortField", "reorderableColumns", "resizableColumns", "sortMode", "sortField", "sortOrder", "multiSortMeta", "allRowsSelected", "empty", "filters", "filterDisplay", "filtersStore"])) : g("", !0)
        ], 64))), 128))
      ]),
      i.filterDisplay === "row" ? (a(), p("tr", vi, [
        (a(!0), p(R, null, E(i.columns, (r, m) => (a(), p(R, {
          key: l.columnProp(r, "columnKey") || l.columnProp(r, "field") || m
        }, [
          !l.columnProp(r, "hidden") && (i.rowGroupMode !== "subheader" || i.groupRowsBy !== l.columnProp(r, "field")) ? (a(), p("th", {
            key: 0,
            style: O(l.getFilterColumnHeaderStyle(r)),
            class: x(l.getFilterColumnHeaderClass(r))
          }, [
            l.columnProp(r, "selectionMode") === "multiple" ? (a(), b(d, {
              key: 0,
              checked: i.allRowsSelected,
              onChange: t[15] || (t[15] = (h) => e.$emit("checkbox-change", h)),
              disabled: i.empty
            }, null, 8, ["checked", "disabled"])) : g("", !0),
            r.children && r.children.filter ? (a(), b(u, {
              key: 1,
              field: l.columnProp(r, "filterField") || l.columnProp(r, "field"),
              type: l.columnProp(r, "dataType"),
              display: "row",
              showMenu: l.columnProp(r, "showFilterMenu"),
              filterElement: r.children && r.children.filter,
              filterHeaderTemplate: r.children && r.children.filterheader,
              filterFooterTemplate: r.children && r.children.filterfooter,
              filterClearTemplate: r.children && r.children.filterclear,
              filterApplyTemplate: r.children && r.children.filterapply,
              filters: i.filters,
              filtersStore: i.filtersStore,
              onFilterChange: t[16] || (t[16] = (h) => e.$emit("filter-change", h)),
              onFilterApply: t[17] || (t[17] = (h) => e.$emit("filter-apply")),
              filterMenuStyle: l.columnProp(r, "filterMenuStyle"),
              filterMenuClass: l.columnProp(r, "filterMenuClass"),
              showOperator: l.columnProp(r, "showFilterOperator"),
              showClearButton: l.columnProp(r, "showClearButton"),
              showApplyButton: l.columnProp(r, "showApplyButton"),
              showMatchModes: l.columnProp(r, "showFilterMatchModes"),
              showAddButton: l.columnProp(r, "showAddButton"),
              matchModeOptions: l.columnProp(r, "filterMatchModeOptions"),
              maxConstraints: l.columnProp(r, "maxConstraints"),
              onOperatorChange: t[18] || (t[18] = (h) => e.$emit("operator-change", h)),
              onMatchmodeChange: t[19] || (t[19] = (h) => e.$emit("matchmode-change", h)),
              onConstraintAdd: t[20] || (t[20] = (h) => e.$emit("constraint-add", h)),
              onConstraintRemove: t[21] || (t[21] = (h) => e.$emit("constraint-remove", h)),
              onApplyClick: t[22] || (t[22] = (h) => e.$emit("apply-click", h))
            }, null, 8, ["field", "type", "showMenu", "filterElement", "filterHeaderTemplate", "filterFooterTemplate", "filterClearTemplate", "filterApplyTemplate", "filters", "filtersStore", "filterMenuStyle", "filterMenuClass", "showOperator", "showClearButton", "showApplyButton", "showMatchModes", "showAddButton", "matchModeOptions", "maxConstraints"])) : g("", !0)
          ], 6)) : g("", !0)
        ], 64))), 128))
      ])) : g("", !0)
    ], 64))
  ]);
}
Me.render = Ri;
var ki = {
  name: "DataTable",
  emits: [
    "value-change",
    "update:first",
    "update:rows",
    "page",
    "update:sortField",
    "update:sortOrder",
    "update:multiSortMeta",
    "sort",
    "filter",
    "row-click",
    "row-dblclick",
    "update:selection",
    "row-select",
    "row-unselect",
    "update:contextMenuSelection",
    "row-contextmenu",
    "row-unselect-all",
    "row-select-all",
    "select-all-change",
    "column-resize-end",
    "column-reorder",
    "row-reorder",
    "update:expandedRows",
    "row-collapse",
    "row-expand",
    "update:expandedRowGroups",
    "rowgroup-collapse",
    "rowgroup-expand",
    "update:filters",
    "state-restore",
    "state-save",
    "cell-edit-init",
    "cell-edit-complete",
    "cell-edit-cancel",
    "update:editingRows",
    "row-edit-init",
    "row-edit-save",
    "row-edit-cancel"
  ],
  props: {
    value: {
      type: Array,
      default: null
    },
    dataKey: {
      type: [String, Function],
      default: null
    },
    rows: {
      type: Number,
      default: 0
    },
    first: {
      type: Number,
      default: 0
    },
    totalRecords: {
      type: Number,
      default: 0
    },
    paginator: {
      type: Boolean,
      default: !1
    },
    paginatorPosition: {
      type: String,
      default: "bottom"
    },
    alwaysShowPaginator: {
      type: Boolean,
      default: !0
    },
    paginatorTemplate: {
      type: [Object, String],
      default: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    },
    pageLinkSize: {
      type: Number,
      default: 5
    },
    rowsPerPageOptions: {
      type: Array,
      default: null
    },
    currentPageReportTemplate: {
      type: String,
      default: "({currentPage} of {totalPages})"
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    loadingIcon: {
      type: String,
      default: "pi pi-spinner"
    },
    sortField: {
      type: [String, Function],
      default: null
    },
    sortOrder: {
      type: Number,
      default: null
    },
    defaultSortOrder: {
      type: Number,
      default: 1
    },
    multiSortMeta: {
      type: Array,
      default: null
    },
    sortMode: {
      type: String,
      default: "single"
    },
    removableSort: {
      type: Boolean,
      default: !1
    },
    filters: {
      type: Object,
      default: null
    },
    filterDisplay: {
      type: String,
      default: null
    },
    globalFilterFields: {
      type: Array,
      default: null
    },
    filterLocale: {
      type: String,
      default: void 0
    },
    selection: {
      type: [Array, Object],
      default: null
    },
    selectionMode: {
      type: String,
      default: null
    },
    compareSelectionBy: {
      type: String,
      default: "deepEquals"
    },
    metaKeySelection: {
      type: Boolean,
      default: !0
    },
    contextMenu: {
      type: Boolean,
      default: !1
    },
    contextMenuSelection: {
      type: Object,
      default: null
    },
    selectAll: {
      type: Boolean,
      default: null
    },
    rowHover: {
      type: Boolean,
      default: !1
    },
    csvSeparator: {
      type: String,
      default: ","
    },
    exportFilename: {
      type: String,
      default: "download"
    },
    exportFunction: {
      type: Function,
      default: null
    },
    autoLayout: {
      type: Boolean,
      default: !1
    },
    resizableColumns: {
      type: Boolean,
      default: !1
    },
    columnResizeMode: {
      type: String,
      default: "fit"
    },
    reorderableColumns: {
      type: Boolean,
      default: !1
    },
    expandedRows: {
      type: Array,
      default: null
    },
    expandedRowIcon: {
      type: String,
      default: "pi-chevron-down"
    },
    collapsedRowIcon: {
      type: String,
      default: "pi-chevron-right"
    },
    rowGroupMode: {
      type: String,
      default: null
    },
    groupRowsBy: {
      type: [Array, String, Function],
      default: null
    },
    expandableRowGroups: {
      type: Boolean,
      default: !1
    },
    expandedRowGroups: {
      type: Array,
      default: null
    },
    stateStorage: {
      type: String,
      default: "session"
    },
    stateKey: {
      type: String,
      default: null
    },
    editMode: {
      type: String,
      default: null
    },
    editingRows: {
      type: Array,
      default: null
    },
    rowClass: {
      type: null,
      default: null
    },
    rowStyle: {
      type: null,
      default: null
    },
    scrollable: {
      type: Boolean,
      default: !1
    },
    scrollDirection: {
      type: String,
      default: "vertical"
    },
    virtualScrollerOptions: {
      type: Object,
      default: null
    },
    scrollHeight: {
      type: String,
      default: null
    },
    frozenValue: {
      type: Array,
      default: null
    },
    responsiveLayout: {
      type: String,
      default: "stack"
    },
    breakpoint: {
      type: String,
      default: "960px"
    },
    showGridlines: {
      type: Boolean,
      default: !1
    },
    stripedRows: {
      type: Boolean,
      default: !1
    },
    tableStyle: {
      type: null,
      default: null
    },
    tableClass: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      d_first: this.first,
      d_rows: this.rows,
      d_sortField: this.sortField,
      d_sortOrder: this.sortOrder,
      d_multiSortMeta: this.multiSortMeta ? [...this.multiSortMeta] : [],
      d_groupRowsSortMeta: null,
      d_selectionKeys: null,
      d_expandedRowKeys: null,
      d_columnOrder: null,
      d_editingRowKeys: null,
      d_editingMeta: {},
      d_filters: this.cloneFilters(this.filters)
    };
  },
  rowTouched: !1,
  anchorRowIndex: null,
  rangeRowIndex: null,
  documentColumnResizeListener: null,
  documentColumnResizeEndListener: null,
  lastResizeHelperX: null,
  resizeColumnElement: null,
  columnResizing: !1,
  colReorderIconWidth: null,
  colReorderIconHeight: null,
  draggedColumn: null,
  draggedRowIndex: null,
  droppedRowIndex: null,
  rowDragging: null,
  columnWidthsState: null,
  tableWidthState: null,
  columnWidthsRestored: !1,
  watch: {
    first(e) {
      this.d_first = e;
    },
    rows(e) {
      this.d_rows = e;
    },
    sortField(e) {
      this.d_sortField = e;
    },
    sortOrder(e) {
      this.d_sortOrder = e;
    },
    multiSortMeta(e) {
      this.d_multiSortMeta = e;
    },
    selection: {
      immediate: !0,
      handler(e) {
        this.dataKey && this.updateSelectionKeys(e);
      }
    },
    expandedRows(e) {
      this.dataKey && this.updateExpandedRowKeys(e);
    },
    editingRows(e) {
      this.dataKey && this.updateEditingRowKeys(e);
    },
    filters: {
      deep: !0,
      handler: function(e) {
        this.d_filters = this.cloneFilters(e);
      }
    }
  },
  beforeMount() {
    this.isStateful() && this.restoreState();
  },
  mounted() {
    this.$el.setAttribute(this.attributeSelector, ""), this.responsiveLayout === "stack" && !this.scrollable && this.createResponsiveStyle(), this.isStateful() && this.resizableColumns && this.restoreColumnWidths(), this.editMode === "row" && this.dataKey && !this.d_editingRowKeys && this.updateEditingRowKeys(this.editingRows);
  },
  beforeUnmount() {
    this.unbindColumnResizeEvents(), this.destroyStyleElement(), this.destroyResponsiveStyle();
  },
  updated() {
    this.isStateful() && this.saveState(), this.editMode === "row" && this.dataKey && !this.d_editingRowKeys && this.updateEditingRowKeys(this.editingRows);
  },
  methods: {
    columnProp(e, t) {
      return y.getVNodeProp(e, t);
    },
    onPage(e) {
      this.clearEditingMetaData(), this.d_first = e.first, this.d_rows = e.rows;
      let t = this.createLazyLoadEvent(e);
      t.pageCount = e.pageCount, t.page = e.page, this.$emit("update:first", this.d_first), this.$emit("update:rows", this.d_rows), this.$emit("page", t), this.$emit("value-change", this.processedData);
    },
    onColumnHeaderClick(e) {
      const t = e.originalEvent, i = e.column;
      if (this.columnProp(i, "sortable")) {
        const s = t.target, n = this.columnProp(i, "sortField") || this.columnProp(i, "field");
        (f.hasClass(s, "p-sortable-column") || f.hasClass(s, "p-column-title") || f.hasClass(s, "p-column-header-content") || f.hasClass(s, "p-sortable-column-icon") || f.hasClass(s.parentElement, "p-sortable-column-icon")) && (f.clearSelection(), this.sortMode === "single" ? (this.d_sortField === n ? this.removableSort && this.d_sortOrder * -1 === this.defaultSortOrder ? (this.d_sortOrder = null, this.d_sortField = null) : this.d_sortOrder = this.d_sortOrder * -1 : (this.d_sortOrder = this.defaultSortOrder, this.d_sortField = n), this.$emit("update:sortField", this.d_sortField), this.$emit("update:sortOrder", this.d_sortOrder), this.resetPage()) : this.sortMode === "multiple" && (t.metaKey || t.ctrlKey || (this.d_multiSortMeta = this.d_multiSortMeta.filter((o) => o.field === n)), this.addMultiSortField(n), this.$emit("update:multiSortMeta", this.d_multiSortMeta)), this.$emit("sort", this.createLazyLoadEvent(t)), this.$emit("value-change", this.processedData));
      }
    },
    sortSingle(e) {
      if (this.clearEditingMetaData(), this.groupRowsBy && this.groupRowsBy === this.sortField)
        return this.d_multiSortMeta = [
          { field: this.sortField, order: this.sortOrder || this.defaultSortOrder },
          { field: this.d_sortField, order: this.d_sortOrder }
        ], this.sortMultiple(e);
      let t = [...e];
      return t.sort((i, s) => {
        let n = y.resolveFieldData(i, this.d_sortField), l = y.resolveFieldData(s, this.d_sortField), o = null;
        return n == null && l != null ? o = -1 : n != null && l == null ? o = 1 : n == null && l == null ? o = 0 : typeof n == "string" && typeof l == "string" ? o = n.localeCompare(l, void 0, { numeric: !0 }) : o = n < l ? -1 : n > l ? 1 : 0, this.d_sortOrder * o;
      }), t;
    },
    sortMultiple(e) {
      if (this.clearEditingMetaData(), this.groupRowsBy && (this.d_groupRowsSortMeta || this.d_multiSortMeta.length && this.groupRowsBy === this.d_multiSortMeta[0].field)) {
        const i = this.d_multiSortMeta[0];
        !this.d_groupRowsSortMeta && (this.d_groupRowsSortMeta = i), i.field !== this.d_groupRowsSortMeta.field && (this.d_multiSortMeta = [this.d_groupRowsSortMeta, ...this.d_multiSortMeta]);
      }
      let t = [...e];
      return t.sort((i, s) => this.multisortField(i, s, 0)), t;
    },
    multisortField(e, t, i) {
      const s = y.resolveFieldData(e, this.d_multiSortMeta[i].field), n = y.resolveFieldData(t, this.d_multiSortMeta[i].field);
      let l = null;
      if (typeof s == "string" || s instanceof String) {
        if (s.localeCompare && s !== n)
          return this.d_multiSortMeta[i].order * s.localeCompare(n, void 0, { numeric: !0 });
      } else
        l = s < n ? -1 : 1;
      return s === n ? this.d_multiSortMeta.length - 1 > i ? this.multisortField(e, t, i + 1) : 0 : this.d_multiSortMeta[i].order * l;
    },
    addMultiSortField(e) {
      let t = this.d_multiSortMeta.findIndex((i) => i.field === e);
      t >= 0 ? this.removableSort && this.d_multiSortMeta[t].order * -1 === this.defaultSortOrder ? this.d_multiSortMeta.splice(t, 1) : this.d_multiSortMeta[t] = { field: e, order: this.d_multiSortMeta[t].order * -1 } : this.d_multiSortMeta.push({ field: e, order: this.defaultSortOrder }), this.d_multiSortMeta = [...this.d_multiSortMeta];
    },
    filter(e) {
      if (!e)
        return;
      this.clearEditingMetaData();
      let t;
      this.filters.global && (t = this.globalFilterFields || this.columns.map((n) => this.columnProp(n, "filterField") || this.columnProp(n, "field")));
      let i = [];
      for (let n = 0; n < e.length; n++) {
        let l = !0, o = !1, d = !1;
        for (let r in this.filters)
          if (Object.prototype.hasOwnProperty.call(this.filters, r) && r !== "global") {
            d = !0;
            let m = r, h = this.filters[m];
            if (h.operator) {
              for (let c of h.constraints)
                if (l = this.executeLocalFilter(m, e[n], c), h.operator === Z.OR && l || h.operator === Z.AND && !l)
                  break;
            } else
              l = this.executeLocalFilter(m, e[n], h);
            if (!l)
              break;
          }
        if (this.filters.global && !o && t)
          for (let r = 0; r < t.length; r++) {
            let m = t[r];
            if (o = Q.filters[this.filters.global.matchMode || ne.CONTAINS](y.resolveFieldData(e[n], m), this.filters.global.value, this.filterLocale), o)
              break;
          }
        let u;
        this.filters.global ? u = d ? d && l && o : o : u = d && l, u && i.push(e[n]);
      }
      i.length === this.value.length && (i = e);
      let s = this.createLazyLoadEvent();
      return s.filteredValue = i, this.$emit("filter", s), this.$emit("value-change", i), i;
    },
    executeLocalFilter(e, t, i) {
      let s = i.value, n = i.matchMode || ne.STARTS_WITH, l = y.resolveFieldData(t, e), o = Q.filters[n];
      return o(l, s, this.filterLocale);
    },
    onRowClick(e) {
      const t = e.originalEvent;
      if (!f.isClickable(t.target)) {
        if (this.$emit("row-click", e), this.selectionMode) {
          const i = e.data, s = this.d_first + e.index;
          if (this.isMultipleSelectionMode() && t.shiftKey && this.anchorRowIndex != null)
            f.clearSelection(), this.rangeRowIndex = s, this.selectRange(t);
          else {
            const n = this.isSelected(i), l = this.rowTouched ? !1 : this.metaKeySelection;
            if (this.anchorRowIndex = s, this.rangeRowIndex = s, l) {
              let o = t.metaKey || t.ctrlKey;
              if (n && o) {
                if (this.isSingleSelectionMode())
                  this.$emit("update:selection", null);
                else {
                  const d = this.findIndexInSelection(i), u = this.selection.filter((r, m) => m != d);
                  this.$emit("update:selection", u);
                }
                this.$emit("row-unselect", { originalEvent: t, data: i, index: s, type: "row" });
              } else {
                if (this.isSingleSelectionMode())
                  this.$emit("update:selection", i);
                else if (this.isMultipleSelectionMode()) {
                  let d = o ? this.selection || [] : [];
                  d = [...d, i], this.$emit("update:selection", d);
                }
                this.$emit("row-select", { originalEvent: t, data: i, index: s, type: "row" });
              }
            } else if (this.selectionMode === "single")
              n ? (this.$emit("update:selection", null), this.$emit("row-unselect", { originalEvent: t, data: i, index: s, type: "row" })) : (this.$emit("update:selection", i), this.$emit("row-select", { originalEvent: t, data: i, index: s, type: "row" }));
            else if (this.selectionMode === "multiple")
              if (n) {
                const o = this.findIndexInSelection(i), d = this.selection.filter((u, r) => r != o);
                this.$emit("update:selection", d), this.$emit("row-unselect", { originalEvent: t, data: i, index: s, type: "row" });
              } else {
                const o = this.selection ? [...this.selection, i] : [i];
                this.$emit("update:selection", o), this.$emit("row-select", { originalEvent: t, data: i, index: s, type: "row" });
              }
          }
        }
        this.rowTouched = !1;
      }
    },
    onRowDblClick(e) {
      const t = e.originalEvent;
      f.isClickable(t.target) || this.$emit("row-dblclick", e);
    },
    onRowRightClick(e) {
      f.clearSelection(), e.originalEvent.target.focus(), this.$emit("update:contextMenuSelection", e.data), this.$emit("row-contextmenu", e);
    },
    onRowTouchEnd() {
      this.rowTouched = !0;
    },
    onRowKeyDown(e) {
      const t = e.originalEvent, i = e.data, s = e.index;
      if (this.selectionMode) {
        const o = t.target;
        switch (t.which) {
          case 40:
            var n = this.findNextSelectableRow(o);
            n && n.focus(), t.preventDefault();
            break;
          case 38:
            var l = this.findPrevSelectableRow(o);
            l && l.focus(), t.preventDefault();
            break;
          case 13:
            this.onRowClick({ originalEvent: t, data: i, index: s });
            break;
        }
      }
    },
    findNextSelectableRow(e) {
      let t = e.nextElementSibling;
      return t ? f.hasClass(t, "p-selectable-row") ? t : this.findNextSelectableRow(t) : null;
    },
    findPrevSelectableRow(e) {
      let t = e.previousElementSibling;
      return t ? f.hasClass(t, "p-selectable-row") ? t : this.findPrevSelectableRow(t) : null;
    },
    toggleRowWithRadio(e) {
      const t = e.data;
      this.isSelected(t) ? (this.$emit("update:selection", null), this.$emit("row-unselect", { originalEvent: e.originalEvent, data: t, index: e.index, type: "radiobutton" })) : (this.$emit("update:selection", t), this.$emit("row-select", { originalEvent: e.originalEvent, data: t, index: e.index, type: "radiobutton" }));
    },
    toggleRowWithCheckbox(e) {
      const t = e.data;
      if (this.isSelected(t)) {
        const i = this.findIndexInSelection(t), s = this.selection.filter((n, l) => l != i);
        this.$emit("update:selection", s), this.$emit("row-unselect", { originalEvent: e.originalEvent, data: t, index: e.index, type: "checkbox" });
      } else {
        let i = this.selection ? [...this.selection] : [];
        i = [...i, t], this.$emit("update:selection", i), this.$emit("row-select", { originalEvent: e.originalEvent, data: t, index: e.index, type: "checkbox" });
      }
    },
    toggleRowsWithCheckbox(e) {
      if (this.selectAll !== null)
        this.$emit("select-all-change", e);
      else {
        const { originalEvent: t, checked: i } = e;
        let s = [];
        i ? (s = this.frozenValue ? [...this.frozenValue, ...this.processedData] : this.processedData, this.$emit("row-select-all", { originalEvent: t, data: s })) : this.$emit("row-unselect-all", { originalEvent: t }), this.$emit("update:selection", s);
      }
    },
    isSingleSelectionMode() {
      return this.selectionMode === "single";
    },
    isMultipleSelectionMode() {
      return this.selectionMode === "multiple";
    },
    isSelected(e) {
      return e && this.selection ? this.dataKey ? this.d_selectionKeys ? this.d_selectionKeys[y.resolveFieldData(e, this.dataKey)] !== void 0 : !1 : this.selection instanceof Array ? this.findIndexInSelection(e) > -1 : this.equals(e, this.selection) : !1;
    },
    findIndexInSelection(e) {
      return this.findIndex(e, this.selection);
    },
    findIndex(e, t) {
      let i = -1;
      if (t && t.length) {
        for (let s = 0; s < t.length; s++)
          if (this.equals(e, t[s])) {
            i = s;
            break;
          }
      }
      return i;
    },
    updateSelectionKeys(e) {
      if (this.d_selectionKeys = {}, Array.isArray(e))
        for (let t of e)
          this.d_selectionKeys[String(y.resolveFieldData(t, this.dataKey))] = 1;
      else
        this.d_selectionKeys[String(y.resolveFieldData(e, this.dataKey))] = 1;
    },
    updateExpandedRowKeys(e) {
      if (e && e.length) {
        this.d_expandedRowKeys = {};
        for (let t of e)
          this.d_expandedRowKeys[String(y.resolveFieldData(t, this.dataKey))] = 1;
      } else
        this.d_expandedRowKeys = null;
    },
    updateEditingRowKeys(e) {
      if (e && e.length) {
        this.d_editingRowKeys = {};
        for (let t of e)
          this.d_editingRowKeys[String(y.resolveFieldData(t, this.dataKey))] = 1;
      } else
        this.d_editingRowKeys = null;
    },
    equals(e, t) {
      return this.compareSelectionBy === "equals" ? e === t : y.equals(e, t, this.dataKey);
    },
    selectRange(e) {
      let t, i;
      this.rangeRowIndex > this.anchorRowIndex ? (t = this.anchorRowIndex, i = this.rangeRowIndex) : this.rangeRowIndex < this.anchorRowIndex ? (t = this.rangeRowIndex, i = this.anchorRowIndex) : (t = this.rangeRowIndex, i = this.rangeRowIndex), this.lazy && this.paginator && (t -= this.first, i -= this.first);
      const s = this.processedData;
      let n = [];
      for (let l = t; l <= i; l++) {
        let o = s[l];
        n.push(o), this.$emit("row-select", { originalEvent: e, data: o, type: "row" });
      }
      this.$emit("update:selection", n);
    },
    exportCSV(e, t) {
      let i = "\uFEFF";
      t || (t = this.processedData, e && e.selectionOnly ? t = this.selection || [] : this.frozenValue && (t = t ? [...this.frozenValue, ...t] : this.frozenValue));
      let s = !1;
      for (let l = 0; l < this.columns.length; l++) {
        let o = this.columns[l];
        this.columnProp(o, "exportable") !== !1 && this.columnProp(o, "field") && (s ? i += this.csvSeparator : s = !0, i += '"' + (this.columnProp(o, "exportHeader") || this.columnProp(o, "header") || this.columnProp(o, "field")) + '"');
      }
      t && t.forEach((l) => {
        i += `
`;
        let o = !1;
        for (let d = 0; d < this.columns.length; d++) {
          let u = this.columns[d];
          if (this.columnProp(u, "exportable") !== !1 && this.columnProp(u, "field")) {
            o ? i += this.csvSeparator : o = !0;
            let r = y.resolveFieldData(l, this.columnProp(u, "field"));
            r != null ? this.exportFunction ? r = this.exportFunction({
              data: r,
              field: this.columnProp(u, "field")
            }) : r = String(r).replace(/"/g, '""') : r = "", i += '"' + r + '"';
          }
        }
      });
      let n = !1;
      for (let l = 0; l < this.columns.length; l++) {
        let o = this.columns[l];
        l === 0 && (i += `
`), this.columnProp(o, "exportable") !== !1 && this.columnProp(o, "field") && (n ? i += this.csvSeparator : n = !0, i += '"' + (this.columnProp(o, "exportFooter") || this.columnProp(o, "footer") || this.columnProp(o, "field")) + '"');
      }
      f.exportCSV(i, this.exportFilename);
    },
    resetPage() {
      this.d_first = 0, this.$emit("update:first", this.d_first);
    },
    onColumnResizeStart(e) {
      let t = f.getOffset(this.$el).left;
      this.resizeColumnElement = e.target.parentElement, this.columnResizing = !0, this.lastResizeHelperX = e.pageX - t + this.$el.scrollLeft, this.bindColumnResizeEvents();
    },
    onColumnResize(e) {
      let t = f.getOffset(this.$el).left;
      f.addClass(this.$el, "p-unselectable-text"), this.$refs.resizeHelper.style.height = this.$el.offsetHeight + "px", this.$refs.resizeHelper.style.top = 0 + "px", this.$refs.resizeHelper.style.left = e.pageX - t + this.$el.scrollLeft + "px", this.$refs.resizeHelper.style.display = "block";
    },
    onColumnResizeEnd() {
      let e = this.$refs.resizeHelper.offsetLeft - this.lastResizeHelperX, t = this.resizeColumnElement.offsetWidth, i = t + e, s = this.resizeColumnElement.style.minWidth || 15;
      if (t + e > parseInt(s, 10)) {
        if (this.columnResizeMode === "fit") {
          let l = this.resizeColumnElement.nextElementSibling.offsetWidth - e;
          i > 15 && l > 15 && this.resizeTableCells(i, l);
        } else if (this.columnResizeMode === "expand") {
          const n = this.$refs.table.offsetWidth + e + "px", l = (o) => {
            o && (o.style.width = o.style.minWidth = n);
          };
          if (l(this.$refs.table), !this.virtualScrollerDisabled) {
            const o = this.$refs.bodyRef && this.$refs.bodyRef.$el, d = this.$refs.frozenBodyRef && this.$refs.frozenBodyRef.$el;
            l(o), l(d);
          }
          this.resizeTableCells(i);
        }
        this.$emit("column-resize-end", {
          element: this.resizeColumnElement,
          delta: e
        });
      }
      this.$refs.resizeHelper.style.display = "none", this.resizeColumn = null, f.removeClass(this.$el, "p-unselectable-text"), this.unbindColumnResizeEvents(), this.isStateful() && this.saveState();
    },
    resizeTableCells(e, t) {
      let i = f.index(this.resizeColumnElement), s = [];
      f.find(this.$refs.table, ".p-datatable-thead > tr > th").forEach((o) => s.push(f.getOuterWidth(o))), this.destroyStyleElement(), this.createStyleElement();
      let l = "";
      s.forEach((o, d) => {
        let u = d === i ? e : t && d === i + 1 ? t : o, r = this.scrollable ? `flex: 1 1 ${u}px !important` : `width: ${u}px !important`;
        l += `
                    .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th:nth-child(${d + 1}),
                    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:nth-child(${d + 1}),
                    .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td:nth-child(${d + 1}) {
                        ${r}
                    }
                `;
      }), this.styleElement.innerHTML = l;
    },
    bindColumnResizeEvents() {
      this.documentColumnResizeListener || (this.documentColumnResizeListener = document.addEventListener("mousemove", () => {
        this.columnResizing && this.onColumnResize(event);
      })), this.documentColumnResizeEndListener || (this.documentColumnResizeEndListener = document.addEventListener("mouseup", () => {
        this.columnResizing && (this.columnResizing = !1, this.onColumnResizeEnd());
      }));
    },
    unbindColumnResizeEvents() {
      this.documentColumnResizeListener && (document.removeEventListener("document", this.documentColumnResizeListener), this.documentColumnResizeListener = null), this.documentColumnResizeEndListener && (document.removeEventListener("document", this.documentColumnResizeEndListener), this.documentColumnResizeEndListener = null);
    },
    onColumnHeaderMouseDown(e) {
      const t = e.originalEvent, i = e.column;
      this.reorderableColumns && this.columnProp(i, "reorderableColumn") !== !1 && (t.target.nodeName === "INPUT" || t.target.nodeName === "TEXTAREA" || f.hasClass(t.target, "p-column-resizer") ? t.currentTarget.draggable = !1 : t.currentTarget.draggable = !0);
    },
    onColumnHeaderDragStart(e) {
      if (this.columnResizing) {
        e.preventDefault();
        return;
      }
      this.colReorderIconWidth = f.getHiddenElementOuterWidth(this.$refs.reorderIndicatorUp), this.colReorderIconHeight = f.getHiddenElementOuterHeight(this.$refs.reorderIndicatorUp), this.draggedColumn = this.findParentHeader(e.target), e.dataTransfer.setData("text", "b");
    },
    onColumnHeaderDragOver(e) {
      let t = this.findParentHeader(e.target);
      if (this.reorderableColumns && this.draggedColumn && t) {
        e.preventDefault();
        let i = f.getOffset(this.$el), s = f.getOffset(t);
        if (this.draggedColumn !== t) {
          let n = s.left - i.left, l = s.left + t.offsetWidth / 2;
          this.$refs.reorderIndicatorUp.style.top = s.top - i.top - (this.colReorderIconHeight - 1) + "px", this.$refs.reorderIndicatorDown.style.top = s.top - i.top + t.offsetHeight + "px", e.pageX > l ? (this.$refs.reorderIndicatorUp.style.left = n + t.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + "px", this.$refs.reorderIndicatorDown.style.left = n + t.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + "px", this.dropPosition = 1) : (this.$refs.reorderIndicatorUp.style.left = n - Math.ceil(this.colReorderIconWidth / 2) + "px", this.$refs.reorderIndicatorDown.style.left = n - Math.ceil(this.colReorderIconWidth / 2) + "px", this.dropPosition = -1), this.$refs.reorderIndicatorUp.style.display = "block", this.$refs.reorderIndicatorDown.style.display = "block";
        }
      }
    },
    onColumnHeaderDragLeave(e) {
      this.reorderableColumns && this.draggedColumn && (e.preventDefault(), this.$refs.reorderIndicatorUp.style.display = "none", this.$refs.reorderIndicatorDown.style.display = "none");
    },
    onColumnHeaderDrop(e) {
      if (e.preventDefault(), this.draggedColumn) {
        let t = f.index(this.draggedColumn), i = f.index(this.findParentHeader(e.target)), s = t !== i;
        s && (i - t === 1 && this.dropPosition === -1 || i - t === -1 && this.dropPosition === 1) && (s = !1), s && (y.reorderArray(this.columns, t, i), this.updateReorderableColumns(), this.$emit("column-reorder", {
          originalEvent: e,
          dragIndex: t,
          dropIndex: i
        })), this.$refs.reorderIndicatorUp.style.display = "none", this.$refs.reorderIndicatorDown.style.display = "none", this.draggedColumn.draggable = !1, this.draggedColumn = null, this.dropPosition = null;
      }
    },
    findParentHeader(e) {
      if (e.nodeName === "TH")
        return e;
      {
        let t = e.parentElement;
        for (; t.nodeName !== "TH" && (t = t.parentElement, !!t); )
          ;
        return t;
      }
    },
    findColumnByKey(e, t) {
      if (e && e.length)
        for (let i = 0; i < e.length; i++) {
          let s = e[i];
          if (this.columnProp(s, "columnKey") === t || this.columnProp(s, "field") === t)
            return s;
        }
      return null;
    },
    onRowMouseDown(e) {
      f.hasClass(e.target, "p-datatable-reorderablerow-handle") ? e.currentTarget.draggable = !0 : e.currentTarget.draggable = !1;
    },
    onRowDragStart(e) {
      const t = e.originalEvent, i = e.index;
      this.rowDragging = !0, this.draggedRowIndex = i, t.dataTransfer.setData("text", "b");
    },
    onRowDragOver(e) {
      const t = e.originalEvent, i = e.index;
      if (this.rowDragging && this.draggedRowIndex !== i) {
        let s = t.currentTarget, n = f.getOffset(s).top + f.getWindowScrollTop(), l = t.pageY, o = n + f.getOuterHeight(s) / 2, d = s.previousElementSibling;
        l < o ? (f.removeClass(s, "p-datatable-dragpoint-bottom"), this.droppedRowIndex = i, d ? f.addClass(d, "p-datatable-dragpoint-bottom") : f.addClass(s, "p-datatable-dragpoint-top")) : (d ? f.removeClass(d, "p-datatable-dragpoint-bottom") : f.addClass(s, "p-datatable-dragpoint-top"), this.droppedRowIndex = i + 1, f.addClass(s, "p-datatable-dragpoint-bottom")), t.preventDefault();
      }
    },
    onRowDragLeave(e) {
      let t = e.currentTarget, i = t.previousElementSibling;
      i && f.removeClass(i, "p-datatable-dragpoint-bottom"), f.removeClass(t, "p-datatable-dragpoint-bottom"), f.removeClass(t, "p-datatable-dragpoint-top");
    },
    onRowDragEnd(e) {
      this.rowDragging = !1, this.draggedRowIndex = null, this.droppedRowIndex = null, e.currentTarget.draggable = !1;
    },
    onRowDrop(e) {
      if (this.droppedRowIndex != null) {
        let t = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1, i = [...this.processedData];
        y.reorderArray(i, this.draggedRowIndex, t), this.$emit("row-reorder", {
          originalEvent: e,
          dragIndex: this.draggedRowIndex,
          dropIndex: t,
          value: i
        });
      }
      this.onRowDragLeave(e), this.onRowDragEnd(e), e.preventDefault();
    },
    toggleRow(e) {
      let t = e.data, i, s, n = this.expandedRows ? [...this.expandedRows] : [];
      this.dataKey ? i = this.d_expandedRowKeys ? this.d_expandedRowKeys[y.resolveFieldData(t, this.dataKey)] !== void 0 : !1 : (s = this.findIndex(t, this.expandedRows), i = s > -1), i ? (s == null && (s = this.findIndex(t, this.expandedRows)), n.splice(s, 1), this.$emit("update:expandedRows", n), this.$emit("row-collapse", e)) : (n.push(t), this.$emit("update:expandedRows", n), this.$emit("row-expand", e));
    },
    toggleRowGroup(e) {
      const t = e.originalEvent, i = e.data, s = y.resolveFieldData(i, this.groupRowsBy);
      let n = this.expandedRowGroups ? [...this.expandedRowGroups] : [];
      this.isRowGroupExpanded(i) ? (n = n.filter((l) => l !== s), this.$emit("update:expandedRowGroups", n), this.$emit("rowgroup-collapse", { originalEvent: t, data: s })) : (n.push(s), this.$emit("update:expandedRowGroups", n), this.$emit("rowgroup-expand", { originalEvent: t, data: s }));
    },
    isRowGroupExpanded(e) {
      if (this.expandableRowGroups && this.expandedRowGroups) {
        let t = y.resolveFieldData(e, this.groupRowsBy);
        return this.expandedRowGroups.indexOf(t) > -1;
      }
      return !1;
    },
    isStateful() {
      return this.stateKey != null;
    },
    getStorage() {
      switch (this.stateStorage) {
        case "local":
          return window.localStorage;
        case "session":
          return window.sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    },
    saveState() {
      const e = this.getStorage();
      let t = {};
      this.paginator && (t.first = this.d_first, t.rows = this.d_rows), this.d_sortField && (t.sortField = this.d_sortField, t.sortOrder = this.d_sortOrder), this.d_multiSortMeta && (t.multiSortMeta = this.d_multiSortMeta), this.hasFilters && (t.filters = this.filters), this.resizableColumns && this.saveColumnWidths(t), this.reorderableColumns && (t.columnOrder = this.d_columnOrder), this.expandedRows && (t.expandedRows = this.expandedRows, t.expandedRowKeys = this.d_expandedRowKeys), this.expandedRowGroups && (t.expandedRowGroups = this.expandedRowGroups), this.selection && (t.selection = this.selection, t.selectionKeys = this.d_selectionKeys), Object.keys(t).length && e.setItem(this.stateKey, JSON.stringify(t)), this.$emit("state-save", t);
    },
    restoreState() {
      const t = this.getStorage().getItem(this.stateKey), i = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/, s = function(n, l) {
        return typeof l == "string" && i.test(l) ? new Date(l) : l;
      };
      if (t) {
        let n = JSON.parse(t, s);
        this.paginator && (this.d_first = n.first, this.d_rows = n.rows), n.sortField && (this.d_sortField = n.sortField, this.d_sortOrder = n.sortOrder), n.multiSortMeta && (this.d_multiSortMeta = n.multiSortMeta), n.filters && this.$emit("update:filters", n.filters), this.resizableColumns && (this.columnWidthsState = n.columnWidths, this.tableWidthState = n.tableWidth), this.reorderableColumns && (this.d_columnOrder = n.columnOrder), n.expandedRows && (this.d_expandedRowKeys = n.expandedRowKeys, this.$emit("update:expandedRows", n.expandedRows)), n.expandedRowGroups && this.$emit("update:expandedRowGroups", n.expandedRowGroups), n.selection && (this.d_selectionKeys = n.d_selectionKeys, this.$emit("update:selection", n.selection)), this.$emit("state-restore", n);
      }
    },
    saveColumnWidths(e) {
      let t = [];
      f.find(this.$el, ".p-datatable-thead > tr > th").forEach((s) => t.push(f.getOuterWidth(s))), e.columnWidths = t.join(","), this.columnResizeMode === "expand" && (e.tableWidth = f.getOuterWidth(this.$refs.table) + "px");
    },
    restoreColumnWidths() {
      if (this.columnWidthsState) {
        let e = this.columnWidthsState.split(",");
        if (this.columnResizeMode === "expand" && this.tableWidthState && (this.$refs.table.style.width = this.tableWidthState, this.$refs.table.style.minWidth = this.tableWidthState, this.$el.style.width = this.tableWidthState), y.isNotEmpty(e)) {
          this.createStyleElement();
          let t = "";
          e.forEach((i, s) => {
            let n = this.scrollable ? `flex: 1 1 ${i}px !important` : `width: ${i}px !important`;
            t += `
                            .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th:nth-child(${s + 1}),
                            .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:nth-child(${s + 1}),
                            .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td:nth-child(${s + 1}) {
                                ${n}
                            }
                        `;
          }), this.styleElement.innerHTML = t;
        }
      }
    },
    onCellEditInit(e) {
      this.$emit("cell-edit-init", e);
    },
    onCellEditComplete(e) {
      this.$emit("cell-edit-complete", e);
    },
    onCellEditCancel(e) {
      this.$emit("cell-edit-cancel", e);
    },
    onRowEditInit(e) {
      let t = this.editingRows ? [...this.editingRows] : [];
      t.push(e.data), this.$emit("update:editingRows", t), this.$emit("row-edit-init", e);
    },
    onRowEditSave(e) {
      let t = [...this.editingRows];
      t.splice(this.findIndex(e.data, t), 1), this.$emit("update:editingRows", t), this.$emit("row-edit-save", e);
    },
    onRowEditCancel(e) {
      let t = [...this.editingRows];
      t.splice(this.findIndex(e.data, t), 1), this.$emit("update:editingRows", t), this.$emit("row-edit-cancel", e);
    },
    onEditingMetaChange(e) {
      let { data: t, field: i, index: s, editing: n } = e, l = { ...this.d_editingMeta }, o = l[s];
      if (n)
        !o && (o = l[s] = { data: { ...t }, fields: [] }), o.fields.push(i);
      else if (o) {
        const d = o.fields.filter((u) => u !== i);
        d.length ? o.fields = d : delete l[s];
      }
      this.d_editingMeta = l;
    },
    clearEditingMetaData() {
      this.editMode && (this.d_editingMeta = {});
    },
    createLazyLoadEvent(e) {
      return {
        originalEvent: e,
        first: this.d_first,
        rows: this.d_rows,
        sortField: this.d_sortField,
        sortOrder: this.d_sortOrder,
        multiSortMeta: this.d_multiSortMeta,
        filters: this.d_filters
      };
    },
    hasGlobalFilter() {
      return this.filters && Object.prototype.hasOwnProperty.call(this.filters, "global");
    },
    getChildren() {
      return this.$slots.default ? this.$slots.default() : null;
    },
    onFilterChange(e) {
      this.d_filters = e;
    },
    onFilterApply() {
      this.d_first = 0, this.$emit("update:first", this.d_first), this.$emit("update:filters", this.d_filters), this.lazy && this.$emit("filter", this.createLazyLoadEvent());
    },
    cloneFilters() {
      let e = {};
      return this.filters && Object.entries(this.filters).forEach(([t, i]) => {
        e[t] = i.operator ? {
          operator: i.operator,
          constraints: i.constraints.map((s) => ({ ...s }))
        } : { ...i };
      }), e;
    },
    updateReorderableColumns() {
      let e = [];
      this.columns.forEach((t) => e.push(this.columnProp(t, "columnKey") || this.columnProp(t, "field"))), this.d_columnOrder = e;
    },
    createStyleElement() {
      this.styleElement = document.createElement("style"), this.styleElement.type = "text/css", document.head.appendChild(this.styleElement);
    },
    createResponsiveStyle() {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = document.createElement("style"), this.responsiveStyleElement.type = "text/css", document.head.appendChild(this.responsiveStyleElement);
        let e = `
@media screen and (max-width: ${this.breakpoint}) {
    .p-datatable[${this.attributeSelector}] .p-datatable-thead > tr > th,
    .p-datatable[${this.attributeSelector}] .p-datatable-tfoot > tr > td {
        display: none !important;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td {
        display: flex;
        width: 100% !important;
        align-items: center;
        justify-content: space-between;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td:not(:last-child) {
        border: 0 none;
    }

    .p-datatable[${this.attributeSelector}].p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
        border-top: 0;
        border-right: 0;
        border-left: 0;
    }

    .p-datatable[${this.attributeSelector}] .p-datatable-tbody > tr > td > .p-column-title {
        display: block;
    }
}
`;
        this.responsiveStyleElement.innerHTML = e;
      }
    },
    destroyResponsiveStyle() {
      this.responsiveStyleElement && (document.head.removeChild(this.responsiveStyleElement), this.responsiveStyleElement = null);
    },
    destroyStyleElement() {
      this.styleElement && (document.head.removeChild(this.styleElement), this.styleElement = null);
    },
    recursiveGetChildren(e, t) {
      return t || (t = []), e && e.length && e.forEach((i) => {
        i.children instanceof Array ? t.concat(this.recursiveGetChildren(i.children, t)) : i.type.name == "Column" && t.push(i);
      }), t;
    },
    dataToRender(e) {
      const t = e || this.processedData;
      if (t && this.paginator) {
        const i = this.lazy ? 0 : this.d_first;
        return t.slice(i, i + this.d_rows);
      }
      return t;
    },
    getVirtualScrollerRef() {
      return this.$refs.virtualScroller;
    }
  },
  computed: {
    containerClass() {
      return [
        "p-datatable p-component",
        {
          "p-datatable-hoverable-rows": this.rowHover || this.selectionMode,
          "p-datatable-auto-layout": this.autoLayout,
          "p-datatable-resizable": this.resizableColumns,
          "p-datatable-resizable-fit": this.resizableColumns && this.columnResizeMode === "fit",
          "p-datatable-scrollable": this.scrollable,
          "p-datatable-scrollable-vertical": this.scrollable && this.scrollDirection === "vertical",
          "p-datatable-scrollable-horizontal": this.scrollable && this.scrollDirection === "horizontal",
          "p-datatable-scrollable-both": this.scrollable && this.scrollDirection === "both",
          "p-datatable-flex-scrollable": this.scrollable && this.scrollHeight === "flex",
          "p-datatable-responsive-stack": this.responsiveLayout === "stack",
          "p-datatable-responsive-scroll": this.responsiveLayout === "scroll",
          "p-datatable-striped": this.stripedRows,
          "p-datatable-gridlines": this.showGridlines,
          "p-datatable-grouped-header": this.headerColumnGroup != null,
          "p-datatable-grouped-footer": this.footerColumnGroup != null
        }
      ];
    },
    columns() {
      let e = this.getChildren();
      if (!e)
        return;
      const t = this.recursiveGetChildren(e, []);
      if (this.reorderableColumns && this.d_columnOrder) {
        let i = [];
        for (let s of this.d_columnOrder) {
          let n = this.findColumnByKey(t, s);
          n && !this.columnProp(n, "hidden") && i.push(n);
        }
        return [...i, ...t.filter((s) => i.indexOf(s) < 0)];
      }
      return t;
    },
    headerColumnGroup() {
      const e = this.getChildren();
      if (e) {
        for (let t of e)
          if (t.type.name === "ColumnGroup" && this.columnProp(t, "type") === "header")
            return t;
      }
      return null;
    },
    footerColumnGroup() {
      const e = this.getChildren();
      if (e) {
        for (let t of e)
          if (t.type.name === "ColumnGroup" && this.columnProp(t, "type") === "footer")
            return t;
      }
      return null;
    },
    hasFilters() {
      return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object;
    },
    processedData() {
      let e = this.value || [];
      return this.lazy || e && e.length && (this.hasFilters && (e = this.filter(e)), this.sorted && (this.sortMode === "single" ? e = this.sortSingle(e) : this.sortMode === "multiple" && (e = this.sortMultiple(e)))), e;
    },
    totalRecordsLength() {
      if (this.lazy)
        return this.totalRecords;
      {
        const e = this.processedData;
        return e ? e.length : 0;
      }
    },
    empty() {
      const e = this.processedData;
      return !e || e.length === 0;
    },
    paginatorTop() {
      return this.paginator && (this.paginatorPosition !== "bottom" || this.paginatorPosition === "both");
    },
    paginatorBottom() {
      return this.paginator && (this.paginatorPosition !== "top" || this.paginatorPosition === "both");
    },
    sorted() {
      return this.d_sortField || this.d_multiSortMeta && this.d_multiSortMeta.length > 0;
    },
    loadingIconClass() {
      return ["p-datatable-loading-icon pi-spin", this.loadingIcon];
    },
    allRowsSelected() {
      if (this.selectAll !== null)
        return this.selectAll;
      {
        const e = this.frozenValue ? [...this.frozenValue, ...this.processedData] : this.processedData;
        return y.isNotEmpty(e) && this.selection && Array.isArray(this.selection) && e.every((t) => this.selection.some((i) => this.equals(i, t)));
      }
    },
    attributeSelector() {
      return ee();
    },
    groupRowSortField() {
      return this.sortMode === "single" ? this.sortField : this.d_groupRowsSortMeta ? this.d_groupRowsSortMeta.field : null;
    },
    virtualScrollerDisabled() {
      return y.isEmpty(this.virtualScrollerOptions) || !this.scrollable;
    }
  },
  components: {
    DTPaginator: we,
    DTTableHeader: Me,
    DTTableBody: ve,
    DTTableFooter: ke,
    DTVirtualScroller: te
  }
};
const Ii = {
  key: 0,
  class: "p-datatable-loading-overlay p-component-overlay"
}, Mi = {
  key: 1,
  class: "p-datatable-header"
}, Pi = {
  key: 4,
  class: "p-datatable-footer"
}, Di = {
  ref: "resizeHelper",
  class: "p-column-resizer-helper",
  style: { display: "none" }
}, Ei = {
  key: 5,
  ref: "reorderIndicatorUp",
  class: "pi pi-arrow-down p-datatable-reorder-indicator-up",
  style: { position: "absolute", display: "none" }
}, Oi = {
  key: 6,
  ref: "reorderIndicatorDown",
  class: "pi pi-arrow-up p-datatable-reorder-indicator-down",
  style: { position: "absolute", display: "none" }
};
function Fi(e, t, i, s, n, l) {
  const o = v("DTPaginator"), d = v("DTTableHeader"), u = v("DTTableBody"), r = v("DTTableFooter"), m = v("DTVirtualScroller");
  return a(), p("div", {
    class: x(l.containerClass),
    "data-scrollselectors": ".p-datatable-wrapper"
  }, [
    M(e.$slots, "default"),
    i.loading ? (a(), p("div", Ii, [
      e.$slots.loading ? M(e.$slots, "loading", { key: 0 }) : (a(), p("i", {
        key: 1,
        class: x(l.loadingIconClass)
      }, null, 2))
    ])) : g("", !0),
    e.$slots.header ? (a(), p("div", Mi, [
      M(e.$slots, "header")
    ])) : g("", !0),
    l.paginatorTop ? (a(), b(o, {
      key: 2,
      rows: n.d_rows,
      first: n.d_first,
      totalRecords: l.totalRecordsLength,
      pageLinkSize: i.pageLinkSize,
      template: i.paginatorTemplate,
      rowsPerPageOptions: i.rowsPerPageOptions,
      currentPageReportTemplate: i.currentPageReportTemplate,
      class: "p-paginator-top",
      onPage: t[0] || (t[0] = (h) => l.onPage(h)),
      alwaysShow: i.alwaysShowPaginator
    }, $({ _: 2 }, [
      e.$slots.paginatorstart ? {
        name: "start",
        fn: z(() => [
          M(e.$slots, "paginatorstart")
        ]),
        key: "0"
      } : void 0,
      e.$slots.paginatorend ? {
        name: "end",
        fn: z(() => [
          M(e.$slots, "paginatorend")
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "alwaysShow"])) : g("", !0),
    w("div", {
      class: "p-datatable-wrapper",
      style: O({ maxHeight: l.virtualScrollerDisabled ? i.scrollHeight : "" })
    }, [
      B(m, T({ ref: "virtualScroller" }, i.virtualScrollerOptions, {
        items: l.processedData,
        columns: l.columns,
        style: { height: i.scrollHeight },
        disabled: l.virtualScrollerDisabled,
        loaderDisabled: "",
        showSpacer: !1
      }), {
        content: z((h) => [
          w("table", {
            ref: "table",
            role: "table",
            class: x([i.tableClass, "p-datatable-table"]),
            style: O([i.tableStyle, h.spacerStyle])
          }, [
            B(d, {
              columnGroup: l.headerColumnGroup,
              columns: h.columns,
              rowGroupMode: i.rowGroupMode,
              groupRowsBy: i.groupRowsBy,
              groupRowSortField: l.groupRowSortField,
              reorderableColumns: i.reorderableColumns,
              resizableColumns: i.resizableColumns,
              allRowsSelected: l.allRowsSelected,
              empty: l.empty,
              sortMode: i.sortMode,
              sortField: n.d_sortField,
              sortOrder: n.d_sortOrder,
              multiSortMeta: n.d_multiSortMeta,
              filters: n.d_filters,
              filtersStore: i.filters,
              filterDisplay: i.filterDisplay,
              onColumnClick: t[1] || (t[1] = (c) => l.onColumnHeaderClick(c)),
              onColumnMousedown: t[2] || (t[2] = (c) => l.onColumnHeaderMouseDown(c)),
              onFilterChange: l.onFilterChange,
              onFilterApply: l.onFilterApply,
              onColumnDragstart: t[3] || (t[3] = (c) => l.onColumnHeaderDragStart(c)),
              onColumnDragover: t[4] || (t[4] = (c) => l.onColumnHeaderDragOver(c)),
              onColumnDragleave: t[5] || (t[5] = (c) => l.onColumnHeaderDragLeave(c)),
              onColumnDrop: t[6] || (t[6] = (c) => l.onColumnHeaderDrop(c)),
              onColumnResizestart: t[7] || (t[7] = (c) => l.onColumnResizeStart(c)),
              onCheckboxChange: t[8] || (t[8] = (c) => l.toggleRowsWithCheckbox(c))
            }, null, 8, ["columnGroup", "columns", "rowGroupMode", "groupRowsBy", "groupRowSortField", "reorderableColumns", "resizableColumns", "allRowsSelected", "empty", "sortMode", "sortField", "sortOrder", "multiSortMeta", "filters", "filtersStore", "filterDisplay", "onFilterChange", "onFilterApply"]),
            i.frozenValue ? (a(), b(u, {
              key: 0,
              ref: "frozenBodyRef",
              value: i.frozenValue,
              frozenRow: !0,
              class: "p-datatable-frozen-tbody",
              columns: h.columns,
              dataKey: i.dataKey,
              selection: i.selection,
              selectionKeys: n.d_selectionKeys,
              selectionMode: i.selectionMode,
              contextMenu: i.contextMenu,
              contextMenuSelection: i.contextMenuSelection,
              rowGroupMode: i.rowGroupMode,
              groupRowsBy: i.groupRowsBy,
              expandableRowGroups: i.expandableRowGroups,
              rowClass: i.rowClass,
              rowStyle: i.rowStyle,
              editMode: i.editMode,
              compareSelectionBy: i.compareSelectionBy,
              scrollable: i.scrollable,
              expandedRowIcon: i.expandedRowIcon,
              collapsedRowIcon: i.collapsedRowIcon,
              expandedRows: i.expandedRows,
              expandedRowKeys: n.d_expandedRowKeys,
              expandedRowGroups: i.expandedRowGroups,
              editingRows: i.editingRows,
              editingRowKeys: n.d_editingRowKeys,
              templates: e.$slots,
              responsiveLayout: i.responsiveLayout,
              onRowgroupToggle: l.toggleRowGroup,
              onRowClick: t[9] || (t[9] = (c) => l.onRowClick(c)),
              onRowDblclick: t[10] || (t[10] = (c) => l.onRowDblClick(c)),
              onRowRightclick: t[11] || (t[11] = (c) => l.onRowRightClick(c)),
              onRowTouchend: l.onRowTouchEnd,
              onRowKeydown: l.onRowKeyDown,
              onRowMousedown: l.onRowMouseDown,
              onRowDragstart: t[12] || (t[12] = (c) => l.onRowDragStart(c)),
              onRowDragover: t[13] || (t[13] = (c) => l.onRowDragOver(c)),
              onRowDragleave: t[14] || (t[14] = (c) => l.onRowDragLeave(c)),
              onRowDragend: t[15] || (t[15] = (c) => l.onRowDragEnd(c)),
              onRowDrop: t[16] || (t[16] = (c) => l.onRowDrop(c)),
              onRowToggle: t[17] || (t[17] = (c) => l.toggleRow(c)),
              onRadioChange: t[18] || (t[18] = (c) => l.toggleRowWithRadio(c)),
              onCheckboxChange: t[19] || (t[19] = (c) => l.toggleRowWithCheckbox(c)),
              onCellEditInit: t[20] || (t[20] = (c) => l.onCellEditInit(c)),
              onCellEditComplete: t[21] || (t[21] = (c) => l.onCellEditComplete(c)),
              onCellEditCancel: t[22] || (t[22] = (c) => l.onCellEditCancel(c)),
              onRowEditInit: t[23] || (t[23] = (c) => l.onRowEditInit(c)),
              onRowEditSave: t[24] || (t[24] = (c) => l.onRowEditSave(c)),
              onRowEditCancel: t[25] || (t[25] = (c) => l.onRowEditCancel(c)),
              editingMeta: n.d_editingMeta,
              onEditingMetaChange: l.onEditingMetaChange,
              isVirtualScrollerDisabled: !0
            }, null, 8, ["value", "columns", "dataKey", "selection", "selectionKeys", "selectionMode", "contextMenu", "contextMenuSelection", "rowGroupMode", "groupRowsBy", "expandableRowGroups", "rowClass", "rowStyle", "editMode", "compareSelectionBy", "scrollable", "expandedRowIcon", "collapsedRowIcon", "expandedRows", "expandedRowKeys", "expandedRowGroups", "editingRows", "editingRowKeys", "templates", "responsiveLayout", "onRowgroupToggle", "onRowTouchend", "onRowKeydown", "onRowMousedown", "editingMeta", "onEditingMetaChange"])) : g("", !0),
            B(u, {
              ref: "bodyRef",
              value: l.dataToRender(h.rows),
              class: x(h.styleClass),
              columns: h.columns,
              empty: l.empty,
              dataKey: i.dataKey,
              selection: i.selection,
              selectionKeys: n.d_selectionKeys,
              selectionMode: i.selectionMode,
              contextMenu: i.contextMenu,
              contextMenuSelection: i.contextMenuSelection,
              rowGroupMode: i.rowGroupMode,
              groupRowsBy: i.groupRowsBy,
              expandableRowGroups: i.expandableRowGroups,
              rowClass: i.rowClass,
              rowStyle: i.rowStyle,
              editMode: i.editMode,
              compareSelectionBy: i.compareSelectionBy,
              scrollable: i.scrollable,
              expandedRowIcon: i.expandedRowIcon,
              collapsedRowIcon: i.collapsedRowIcon,
              expandedRows: i.expandedRows,
              expandedRowKeys: n.d_expandedRowKeys,
              expandedRowGroups: i.expandedRowGroups,
              editingRows: i.editingRows,
              editingRowKeys: n.d_editingRowKeys,
              templates: e.$slots,
              responsiveLayout: i.responsiveLayout,
              onRowgroupToggle: l.toggleRowGroup,
              onRowClick: t[26] || (t[26] = (c) => l.onRowClick(c)),
              onRowDblclick: t[27] || (t[27] = (c) => l.onRowDblClick(c)),
              onRowRightclick: t[28] || (t[28] = (c) => l.onRowRightClick(c)),
              onRowTouchend: l.onRowTouchEnd,
              onRowKeydown: l.onRowKeyDown,
              onRowMousedown: l.onRowMouseDown,
              onRowDragstart: t[29] || (t[29] = (c) => l.onRowDragStart(c)),
              onRowDragover: t[30] || (t[30] = (c) => l.onRowDragOver(c)),
              onRowDragleave: t[31] || (t[31] = (c) => l.onRowDragLeave(c)),
              onRowDragend: t[32] || (t[32] = (c) => l.onRowDragEnd(c)),
              onRowDrop: t[33] || (t[33] = (c) => l.onRowDrop(c)),
              onRowToggle: t[34] || (t[34] = (c) => l.toggleRow(c)),
              onRadioChange: t[35] || (t[35] = (c) => l.toggleRowWithRadio(c)),
              onCheckboxChange: t[36] || (t[36] = (c) => l.toggleRowWithCheckbox(c)),
              onCellEditInit: t[37] || (t[37] = (c) => l.onCellEditInit(c)),
              onCellEditComplete: t[38] || (t[38] = (c) => l.onCellEditComplete(c)),
              onCellEditCancel: t[39] || (t[39] = (c) => l.onCellEditCancel(c)),
              onRowEditInit: t[40] || (t[40] = (c) => l.onRowEditInit(c)),
              onRowEditSave: t[41] || (t[41] = (c) => l.onRowEditSave(c)),
              onRowEditCancel: t[42] || (t[42] = (c) => l.onRowEditCancel(c)),
              editingMeta: n.d_editingMeta,
              onEditingMetaChange: l.onEditingMetaChange,
              virtualScrollerContentProps: h,
              isVirtualScrollerDisabled: l.virtualScrollerDisabled
            }, null, 8, ["value", "class", "columns", "empty", "dataKey", "selection", "selectionKeys", "selectionMode", "contextMenu", "contextMenuSelection", "rowGroupMode", "groupRowsBy", "expandableRowGroups", "rowClass", "rowStyle", "editMode", "compareSelectionBy", "scrollable", "expandedRowIcon", "collapsedRowIcon", "expandedRows", "expandedRowKeys", "expandedRowGroups", "editingRows", "editingRowKeys", "templates", "responsiveLayout", "onRowgroupToggle", "onRowTouchend", "onRowKeydown", "onRowMousedown", "editingMeta", "onEditingMetaChange", "virtualScrollerContentProps", "isVirtualScrollerDisabled"]),
            B(r, {
              columnGroup: l.footerColumnGroup,
              columns: h.columns
            }, null, 8, ["columnGroup", "columns"])
          ], 6)
        ]),
        _: 1
      }, 16, ["items", "columns", "style", "disabled"])
    ], 4),
    l.paginatorBottom ? (a(), b(o, {
      key: 3,
      rows: n.d_rows,
      first: n.d_first,
      totalRecords: l.totalRecordsLength,
      pageLinkSize: i.pageLinkSize,
      template: i.paginatorTemplate,
      rowsPerPageOptions: i.rowsPerPageOptions,
      currentPageReportTemplate: i.currentPageReportTemplate,
      class: "p-paginator-bottom",
      onPage: t[43] || (t[43] = (h) => l.onPage(h)),
      alwaysShow: i.alwaysShowPaginator
    }, $({ _: 2 }, [
      e.$slots.paginatorstart ? {
        name: "start",
        fn: z(() => [
          M(e.$slots, "paginatorstart")
        ]),
        key: "0"
      } : void 0,
      e.$slots.paginatorend ? {
        name: "end",
        fn: z(() => [
          M(e.$slots, "paginatorend")
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "alwaysShow"])) : g("", !0),
    e.$slots.footer ? (a(), p("div", Pi, [
      M(e.$slots, "footer")
    ])) : g("", !0),
    w("div", Di, null, 512),
    i.reorderableColumns ? (a(), p("span", Ei, null, 512)) : g("", !0),
    i.reorderableColumns ? (a(), p("span", Oi, null, 512)) : g("", !0)
  ], 2);
}
function Li(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var s = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", i === "top" && s.firstChild ? s.insertBefore(n, s.firstChild) : s.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
var Bi = `
.p-datatable {
    position: relative;
}
.p-datatable table {
    border-collapse: collapse;
    min-width: 100%;
    table-layout: fixed;
}
.p-datatable .p-sortable-column {
    cursor: pointer;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}
.p-datatable .p-sortable-column .p-column-title,
.p-datatable .p-sortable-column .p-sortable-column-icon,
.p-datatable .p-sortable-column .p-sortable-column-badge {
    vertical-align: middle;
}
.p-datatable .p-sortable-column .p-sortable-column-badge {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-datatable-responsive-scroll > .p-datatable-wrapper {
    overflow-x: auto;
}
.p-datatable-responsive-scroll > .p-datatable-wrapper > table,
.p-datatable-auto-layout > .p-datatable-wrapper > table {
    table-layout: auto;
}
.p-datatable-hoverable-rows .p-selectable-row {
    cursor: pointer;
}

/* Scrollable */
.p-datatable-scrollable .p-datatable-wrapper {
    position: relative;
    overflow: auto;
}
.p-datatable-scrollable .p-datatable-thead,
.p-datatable-scrollable .p-datatable-tbody,
.p-datatable-scrollable .p-datatable-tfoot {
    display: block;
}
.p-datatable-scrollable .p-datatable-thead > tr,
.p-datatable-scrollable .p-datatable-tbody > tr,
.p-datatable-scrollable .p-datatable-tfoot > tr {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    width: 100%;
}
.p-datatable-scrollable .p-datatable-thead > tr > th,
.p-datatable-scrollable .p-datatable-tbody > tr > td,
.p-datatable-scrollable .p-datatable-tfoot > tr > td {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
            flex: 1 1 0;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-datatable-scrollable .p-datatable-thead {
    position: sticky;
    top: 0;
    z-index: 1;
}
.p-datatable-scrollable .p-datatable-frozen-tbody {
    position: sticky;
    z-index: 1;
}
.p-datatable-scrollable .p-datatable-tfoot {
    position: sticky;
    bottom: 0;
    z-index: 1;
}
.p-datatable-scrollable .p-frozen-column {
    position: sticky;
    background: inherit;
}
.p-datatable-scrollable th.p-frozen-column {
    z-index: 1;
}
.p-datatable-scrollable-both .p-datatable-thead > tr > th,
.p-datatable-scrollable-both .p-datatable-tbody > tr > td,
.p-datatable-scrollable-both .p-datatable-tfoot > tr > td,
.p-datatable-scrollable-horizontal .p-datatable-thead > tr > th .p-datatable-scrollable-horizontal .p-datatable-tbody > tr > td,
.p-datatable-scrollable-horizontal .p-datatable-tfoot > tr > td {
    -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
            flex: 1 0 auto;
}
.p-datatable-flex-scrollable {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    height: 100%;
}
.p-datatable-flex-scrollable .p-datatable-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    height: 100%;
}
.p-datatable-scrollable .p-rowgroup-header {
    position: sticky;
    z-index: 1;
}
.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead,
.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot {
    display: table;
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}
.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead > tr,
.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot > tr {
    display: table-row;
}
.p-datatable-scrollable.p-datatable-grouped-header .p-datatable-thead > tr > th,
.p-datatable-scrollable.p-datatable-grouped-footer .p-datatable-tfoot > tr > td {
    display: table-cell;
}
.p-datatable-scrollable .p-virtualscroller > .p-datatable-table {
    display: inline-block; /* For Safari */
}

/* Resizable */
.p-datatable-resizable > .p-datatable-wrapper {
    overflow-x: auto;
}
.p-datatable-resizable .p-datatable-thead > tr > th,
.p-datatable-resizable .p-datatable-tfoot > tr > td,
.p-datatable-resizable .p-datatable-tbody > tr > td {
    overflow: hidden;
    white-space: nowrap;
}
.p-datatable-resizable .p-resizable-column:not(.p-frozen-column) {
    background-clip: padding-box;
    position: relative;
}
.p-datatable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
    display: none;
}
.p-datatable .p-column-resizer {
    display: block;
    position: absolute !important;
    top: 0;
    right: 0;
    margin: 0;
    width: 0.5rem;
    height: 100%;
    padding: 0px;
    cursor: col-resize;
    border: 1px solid transparent;
}
.p-datatable .p-column-header-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-datatable .p-column-resizer-helper {
    width: 1px;
    position: absolute;
    z-index: 10;
    display: none;
}
.p-datatable .p-row-editor-init,
.p-datatable .p-row-editor-save,
.p-datatable .p-row-editor-cancel {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Expand */
.p-datatable .p-row-toggler {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Reorder */
.p-datatable-reorder-indicator-up,
.p-datatable-reorder-indicator-down {
    position: absolute;
    display: none;
}
.p-reorderable-column,
.p-datatable-reorderablerow-handle {
    cursor: move;
}

/* Loader */
.p-datatable .p-datatable-loading-overlay {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    z-index: 2;
}

/* Filter */
.p-column-filter-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 100%;
}
.p-column-filter-menu {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin-left: auto;
}
.p-column-filter-row .p-column-filter-element {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    width: 1%;
}
.p-column-filter-menu-button,
.p-column-filter-clear-button {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-column-filter-overlay {
    position: absolute;
    top: 0;
    left: 0;
}
.p-column-filter-row-items {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-column-filter-row-item {
    cursor: pointer;
}
.p-column-filter-add-button,
.p-column-filter-remove-button {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-column-filter-add-button .p-button-label,
.p-column-filter-remove-button .p-button-label {
    -webkit-box-flex: 0;
        -ms-flex-positive: 0;
            flex-grow: 0;
}
.p-column-filter-buttonbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
}
.p-column-filter-buttonbar .p-button:not(.p-button-icon-only) {
    width: auto;
}

/* Responsive */
.p-datatable .p-datatable-tbody > tr > td > .p-column-title {
    display: none;
}

/* VirtualScroller */
.p-datatable .p-virtualscroller-loading {
    -webkit-transform: none !important;
            transform: none !important;
    min-height: 0;
    position: sticky;
    top: 0;
    left: 0;
}
`;
Li(Bi);
ki.render = Fi;
var Vi = {
  name: "Column",
  props: {
    columnKey: {
      type: null,
      default: null
    },
    field: {
      type: [String, Function],
      default: null
    },
    sortField: {
      type: [String, Function],
      default: null
    },
    filterField: {
      type: [String, Function],
      default: null
    },
    dataType: {
      type: String,
      default: "text"
    },
    sortable: {
      type: Boolean,
      default: !1
    },
    header: {
      type: null,
      default: null
    },
    footer: {
      type: null,
      default: null
    },
    style: {
      type: null,
      default: null
    },
    class: {
      type: String,
      default: null
    },
    headerStyle: {
      type: null,
      default: null
    },
    headerClass: {
      type: String,
      default: null
    },
    bodyStyle: {
      type: null,
      default: null
    },
    bodyClass: {
      type: String,
      default: null
    },
    footerStyle: {
      type: null,
      default: null
    },
    footerClass: {
      type: String,
      default: null
    },
    showFilterMenu: {
      type: Boolean,
      default: !0
    },
    showFilterOperator: {
      type: Boolean,
      default: !0
    },
    showClearButton: {
      type: Boolean,
      default: !0
    },
    showApplyButton: {
      type: Boolean,
      default: !0
    },
    showFilterMatchModes: {
      type: Boolean,
      default: !0
    },
    showAddButton: {
      type: Boolean,
      default: !0
    },
    filterMatchModeOptions: {
      type: Array,
      default: null
    },
    maxConstraints: {
      type: Number,
      default: 2
    },
    excludeGlobalFilter: {
      type: Boolean,
      default: !1
    },
    filterHeaderClass: {
      type: String,
      default: null
    },
    filterHeaderStyle: {
      type: null,
      default: null
    },
    filterMenuClass: {
      type: String,
      default: null
    },
    filterMenuStyle: {
      type: null,
      default: null
    },
    selectionMode: {
      type: String,
      default: null
    },
    expander: {
      type: Boolean,
      default: !1
    },
    colspan: {
      type: Number,
      default: null
    },
    rowspan: {
      type: Number,
      default: null
    },
    rowReorder: {
      type: Boolean,
      default: !1
    },
    rowReorderIcon: {
      type: String,
      default: "pi pi-bars"
    },
    reorderableColumn: {
      type: Boolean,
      default: !0
    },
    rowEditor: {
      type: Boolean,
      default: !1
    },
    frozen: {
      type: Boolean,
      default: !1
    },
    alignFrozen: {
      type: String,
      default: "left"
    },
    exportable: {
      type: Boolean,
      default: !0
    },
    exportHeader: {
      type: String,
      default: null
    },
    exportFooter: {
      type: String,
      default: null
    },
    filterMatchMode: {
      type: String,
      default: null
    },
    hidden: {
      type: Boolean,
      default: !1
    }
  },
  render() {
    return null;
  }
};
export {
  Vi as a,
  ki as s
};
