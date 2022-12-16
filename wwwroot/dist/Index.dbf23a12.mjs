import { K as ne, o as d, c as p, j as ie, n as k, Z as J, O as g, D as O, l as De, C as Ae, p as Ne, U as Re, R as je, q as He, v as ce, x as we, a as c, m as $, h as T, F as N, g as ee, t as _, i as ue, I as Be, k as S, b as v, w as F, T as Ie, z as he, y as Le, B as W, d as Ce, L as Ge, M as ze, r as V, N as se, P as Ue, Q as qe, u, S as We, s as q, V as Xe, H as Je, _ as Ve } from "./main.033d67b5.mjs";
import { b as Ze, s as Qe, a as re } from "./column.esm.fabffde0.mjs";
import { s as me } from "./inputtext.esm.c02627cf.mjs";
function Ye(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Te = Ye, $e = typeof ne == "object" && ne && ne.Object === Object && ne, et = $e, tt = et, it = typeof self == "object" && self && self.Object === Object && self, lt = tt || it || Function("return this")(), Fe = lt, nt = Fe, st = function() {
  return nt.Date.now();
}, ot = st, at = /\s/;
function rt(e) {
  for (var t = e.length; t-- && at.test(e.charAt(t)); )
    ;
  return t;
}
var dt = rt, ct = dt, ut = /^\s+/;
function ht(e) {
  return e && e.slice(0, ct(e) + 1).replace(ut, "");
}
var pt = ht, ft = Fe, bt = ft.Symbol, Me = bt, ye = Me, Pe = Object.prototype, mt = Pe.hasOwnProperty, yt = Pe.toString, te = ye ? ye.toStringTag : void 0;
function gt(e) {
  var t = mt.call(e, te), i = e[te];
  try {
    e[te] = void 0;
    var n = !0;
  } catch {
  }
  var s = yt.call(e);
  return n && (t ? e[te] = i : delete e[te]), s;
}
var vt = gt, xt = Object.prototype, Ot = xt.toString;
function kt(e) {
  return Ot.call(e);
}
var St = kt, ge = Me, wt = vt, It = St, Lt = "[object Null]", Ct = "[object Undefined]", ve = ge ? ge.toStringTag : void 0;
function Vt(e) {
  return e == null ? e === void 0 ? Ct : Lt : ve && ve in Object(e) ? wt(e) : It(e);
}
var Tt = Vt;
function Ft(e) {
  return e != null && typeof e == "object";
}
var Mt = Ft, Pt = Tt, Et = Mt, Kt = "[object Symbol]";
function _t(e) {
  return typeof e == "symbol" || Et(e) && Pt(e) == Kt;
}
var Dt = _t, At = pt, xe = Te, Nt = Dt, Oe = 0 / 0, Rt = /^[-+]0x[0-9a-f]+$/i, jt = /^0b[01]+$/i, Ht = /^0o[0-7]+$/i, Bt = parseInt;
function Gt(e) {
  if (typeof e == "number")
    return e;
  if (Nt(e))
    return Oe;
  if (xe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = xe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = At(e);
  var i = jt.test(e);
  return i || Ht.test(e) ? Bt(e.slice(2), i ? 2 : 8) : Rt.test(e) ? Oe : +e;
}
var zt = Gt, Ut = Te, de = ot, ke = zt, qt = "Expected a function", Wt = Math.max, Xt = Math.min;
function Jt(e, t, i) {
  var n, s, l, y, f, M, o = 0, B = !1, P = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(qt);
  t = ke(t) || 0, Ut(i) && (B = !!i.leading, P = "maxWait" in i, l = P ? Wt(ke(i.maxWait) || 0, t) : l, w = "trailing" in i ? !!i.trailing : w);
  function U(m) {
    var L = n, j = s;
    return n = s = void 0, o = m, y = e.apply(j, L), y;
  }
  function R(m) {
    return o = m, f = setTimeout(D, t), B ? U(m) : y;
  }
  function b(m) {
    var L = m - M, j = m - o, Q = t - L;
    return P ? Xt(Q, l - j) : Q;
  }
  function x(m) {
    var L = m - M, j = m - o;
    return M === void 0 || L >= t || L < 0 || P && j >= l;
  }
  function D() {
    var m = de();
    if (x(m))
      return I(m);
    f = setTimeout(D, b(m));
  }
  function I(m) {
    return f = void 0, w && n ? U(m) : (n = s = void 0, y);
  }
  function K() {
    f !== void 0 && clearTimeout(f), o = 0, n = M = s = f = void 0;
  }
  function oe() {
    return f === void 0 ? y : I(de());
  }
  function Z() {
    var m = de(), L = x(m);
    if (n = arguments, s = this, M = m, L) {
      if (f === void 0)
        return R(M);
      if (P)
        return clearTimeout(f), f = setTimeout(D, t), U(M);
    }
    return f === void 0 && (f = setTimeout(D, t)), y;
  }
  return Z.cancel = K, Z.flush = oe, Z;
}
var Zt = Jt, pe = {
  name: "Skeleton",
  props: {
    shape: {
      type: String,
      default: "rectangle"
    },
    size: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "1rem"
    },
    borderRadius: {
      type: String,
      default: null
    },
    animation: {
      type: String,
      default: "wave"
    }
  },
  computed: {
    containerClass() {
      return [
        "p-skeleton p-component",
        {
          "p-skeleton-circle": this.shape === "circle",
          "p-skeleton-none": this.animation === "none"
        }
      ];
    },
    containerStyle() {
      return this.size ? { width: this.size, height: this.size, borderRadius: this.borderRadius } : { width: this.width, height: this.height, borderRadius: this.borderRadius };
    }
  }
};
function Qt(e, t, i, n, s, l) {
  return d(), p("div", {
    style: ie(l.containerStyle),
    class: k(l.containerClass),
    "aria-hidden": "true"
  }, null, 6);
}
function Yt(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", i === "top" && n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e));
  }
}
var $t = `
.p-skeleton {
    position: relative;
    overflow: hidden;
}
.p-skeleton::after {
    content: '';
    -webkit-animation: p-skeleton-animation 1.2s infinite;
            animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    z-index: 1;
}
.p-skeleton.p-skeleton-circle {
    border-radius: 50%;
}
.p-skeleton-none::after {
    -webkit-animation: none;
            animation: none;
}
@-webkit-keyframes p-skeleton-animation {
from {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
}
to {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
}
}
@keyframes p-skeleton-animation {
from {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
}
to {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
}
}
`;
Yt($t);
pe.render = Qt;
var Ee = {
  name: "MultiSelect",
  emits: ["update:modelValue", "change", "focus", "blur", "before-show", "before-hide", "show", "hide", "filter", "selectall-change"],
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
    placeholder: String,
    disabled: Boolean,
    inputId: {
      type: String,
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
    closeButtonProps: {
      type: null,
      default: null
    },
    dataKey: null,
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
    appendTo: {
      type: String,
      default: "body"
    },
    display: {
      type: String,
      default: "comma"
    },
    selectedItemsLabel: {
      type: String,
      default: "{0} items selected"
    },
    maxSelectedLabels: {
      type: Number,
      default: null
    },
    selectionLimit: {
      type: Number,
      default: null
    },
    showToggleAll: {
      type: Boolean,
      default: !0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    checkboxIcon: {
      type: String,
      default: "pi pi-check"
    },
    closeIcon: {
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
    removeTokenIcon: {
      type: String,
      default: "pi pi-times-circle"
    },
    selectAll: {
      type: Boolean,
      default: null
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
  startRangeIndex: -1,
  searchTimeout: null,
  searchValue: "",
  selectOnFocus: !1,
  focusOnHover: !1,
  data() {
    return {
      focused: !1,
      focusedOptionIndex: -1,
      headerCheckboxFocused: !1,
      filterValue: null,
      overlayVisible: !1
    };
  },
  watch: {
    options() {
      this.autoUpdateModel();
    }
  },
  mounted() {
    this.autoUpdateModel();
  },
  beforeUnmount() {
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && (J.clear(this.overlay), this.overlay = null);
  },
  methods: {
    getOptionIndex(e, t) {
      return this.virtualScrollerDisabled ? e : t && t(e).index;
    },
    getOptionLabel(e) {
      return this.optionLabel ? g.resolveFieldData(e, this.optionLabel) : e;
    },
    getOptionValue(e) {
      return this.optionValue ? g.resolveFieldData(e, this.optionValue) : e;
    },
    getOptionRenderKey(e) {
      return this.dataKey ? g.resolveFieldData(e, this.dataKey) : this.getOptionLabel(e);
    },
    isOptionDisabled(e) {
      return this.maxSelectionLimitReached && !this.isSelected(e) ? !0 : this.optionDisabled ? g.resolveFieldData(e, this.optionDisabled) : !1;
    },
    isOptionGroup(e) {
      return this.optionGroupLabel && e.optionGroup && e.group;
    },
    getOptionGroupLabel(e) {
      return g.resolveFieldData(e, this.optionGroupLabel);
    },
    getOptionGroupChildren(e) {
      return g.resolveFieldData(e, this.optionGroupChildren);
    },
    getAriaPosInset(e) {
      return (this.optionGroupLabel ? e - this.visibleOptions.slice(0, e).filter((t) => this.isOptionGroup(t)).length : e) + 1;
    },
    show(e) {
      this.$emit("before-show"), this.overlayVisible = !0, this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, e && O.focus(this.$refs.focusInput);
    },
    hide(e) {
      const t = () => {
        this.$emit("before-hide"), this.overlayVisible = !1, this.focusedOptionIndex = -1, this.searchValue = "", this.resetFilterOnHide && (this.filterValue = null), e && O.focus(this.$refs.focusInput);
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
          this.onArrowUpKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "PageDown":
          this.onPageDownKey(e);
          break;
        case "PageUp":
          this.onPageUpKey(e);
          break;
        case "Enter":
        case "Space":
          this.onEnterKey(e);
          break;
        case "Escape":
          this.onEscapeKey(e);
          break;
        case "Tab":
          this.onTabKey(e);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.onShiftKey(e);
          break;
        default:
          if (e.code === "KeyA" && t) {
            const i = this.visibleOptions.filter((n) => this.isValidOption(n)).map((n) => this.getOptionValue(n));
            this.updateModel(e, i), e.preventDefault();
            break;
          }
          !t && g.isPrintableCharacter(e.key) && (!this.overlayVisible && this.show(), this.searchOptions(e), e.preventDefault());
          break;
      }
    },
    onContainerClick(e) {
      this.disabled || this.loading || (!this.overlay || !this.overlay.contains(e.target)) && (this.overlayVisible ? this.hide(!0) : this.show(!0));
    },
    onFirstHiddenFocus(e) {
      const t = e.relatedTarget === this.$refs.focusInput ? O.getFirstFocusableElement(this.overlay, ":not(.p-hidden-focusable)") : this.$refs.focusInput;
      O.focus(t);
    },
    onLastHiddenFocus(e) {
      const t = e.relatedTarget === this.$refs.focusInput ? O.getLastFocusableElement(this.overlay, ":not(.p-hidden-focusable)") : this.$refs.focusInput;
      O.focus(t);
    },
    onCloseClick() {
      this.hide(!0);
    },
    onHeaderCheckboxFocus() {
      this.headerCheckboxFocused = !0;
    },
    onHeaderCheckboxBlur() {
      this.headerCheckboxFocused = !1;
    },
    onOptionSelect(e, t, i = -1, n = !1) {
      if (this.disabled || this.isOptionDisabled(t))
        return;
      let s = this.isSelected(t), l = null;
      s ? l = this.modelValue.filter((y) => !g.equals(y, this.getOptionValue(t), this.equalityKey)) : l = [...this.modelValue || [], this.getOptionValue(t)], this.updateModel(e, l), i !== -1 && (this.focusedOptionIndex = i), n && O.focus(this.$refs.focusInput);
    },
    onOptionMouseMove(e, t) {
      this.focusOnHover && this.changeFocusedOptionIndex(e, t);
    },
    onOptionSelectRange(e, t = -1, i = -1) {
      if (t === -1 && (t = this.findNearestSelectedOptionIndex(i, !0)), i === -1 && (i = this.findNearestSelectedOptionIndex(t)), t !== -1 && i !== -1) {
        const n = Math.min(t, i), s = Math.max(t, i), l = this.visibleOptions.slice(n, s + 1).filter((y) => this.isValidOption(y)).map((y) => this.getOptionValue(y));
        this.updateModel(e, l);
      }
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
      De.emit("overlay-click", {
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
      e.shiftKey && this.onOptionSelectRange(e, this.startRangeIndex, t), this.changeFocusedOptionIndex(e, t), !this.overlayVisible && this.show(), e.preventDefault();
    },
    onArrowUpKey(e, t = !1) {
      if (e.altKey && !t)
        this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(), e.preventDefault();
      else {
        const i = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.findLastFocusedOptionIndex();
        e.shiftKey && this.onOptionSelectRange(e, i, this.startRangeIndex), this.changeFocusedOptionIndex(e, i), !this.overlayVisible && this.show(), e.preventDefault();
      }
    },
    onArrowLeftKey(e, t = !1) {
      t && (this.focusedOptionIndex = -1);
    },
    onHomeKey(e, t = !1) {
      if (t)
        e.currentTarget.setSelectionRange(0, 0), this.focusedOptionIndex = -1;
      else {
        let i = e.metaKey || e.ctrlKey, n = this.findFirstOptionIndex();
        e.shiftKey && i && this.onOptionSelectRange(e, n, this.startRangeIndex), this.changeFocusedOptionIndex(e, n), !this.overlayVisible && this.show();
      }
      e.preventDefault();
    },
    onEndKey(e, t = !1) {
      if (t) {
        const i = e.currentTarget, n = i.value.length;
        i.setSelectionRange(n, n), this.focusedOptionIndex = -1;
      } else {
        let i = e.metaKey || e.ctrlKey, n = this.findLastOptionIndex();
        e.shiftKey && i && this.onOptionSelectRange(e, this.startRangeIndex, n), this.changeFocusedOptionIndex(e, n), !this.overlayVisible && this.show();
      }
      e.preventDefault();
    },
    onPageUpKey(e) {
      this.scrollInView(0), e.preventDefault();
    },
    onPageDownKey(e) {
      this.scrollInView(this.visibleOptions.length - 1), e.preventDefault();
    },
    onEnterKey(e) {
      this.overlayVisible ? this.focusedOptionIndex !== -1 && (e.shiftKey ? this.onOptionSelectRange(e, this.focusedOptionIndex) : this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex])) : this.onArrowDownKey(e), e.preventDefault();
    },
    onEscapeKey(e) {
      this.overlayVisible && this.hide(!0), e.preventDefault();
    },
    onTabKey(e, t = !1) {
      t || (this.overlayVisible && this.hasFocusableElements() ? (O.focus(e.shiftKey ? this.$refs.lastHiddenFocusableElementOnOverlay : this.$refs.firstHiddenFocusableElementOnOverlay), e.preventDefault()) : (this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(this.filter)));
    },
    onShiftKey() {
      this.startRangeIndex = this.focusedOptionIndex;
    },
    onOverlayEnter(e) {
      J.set("overlay", e, this.$primevue.config.zIndex.overlay), this.alignOverlay(), this.scrollInView(), this.autoFilterFocus && O.focus(this.$refs.filterInput);
    },
    onOverlayAfterEnter() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onOverlayLeave() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.overlay = null;
    },
    onOverlayAfterLeave(e) {
      J.clear(e);
    },
    alignOverlay() {
      this.appendTo === "self" ? O.relativePosition(this.overlay, this.$el) : (this.overlay.style.minWidth = O.getOuterWidth(this.$el) + "px", O.absolutePosition(this.overlay, this.$el));
    },
    bindOutsideClickListener() {
      this.outsideClickListener || (this.outsideClickListener = (e) => {
        this.overlayVisible && this.isOutsideClicked(e) && this.hide();
      }, document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener), this.outsideClickListener = null);
    },
    bindScrollListener() {
      this.scrollHandler || (this.scrollHandler = new Ae(this.$refs.container, () => {
        this.overlayVisible && this.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener() {
      this.resizeListener || (this.resizeListener = () => {
        this.overlayVisible && !O.isTouchDevice() && this.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    isOutsideClicked(e) {
      return !(this.$el.isSameNode(e.target) || this.$el.contains(e.target) || this.overlay && this.overlay.contains(e.target));
    },
    getLabelByValue(e) {
      const i = (this.optionGroupLabel ? this.flatOptions(this.options) : this.options || []).find((n) => !this.isOptionGroup(n) && g.equals(this.getOptionValue(n), e, this.equalityKey));
      return i ? this.getOptionLabel(i) : null;
    },
    getSelectedItemsLabel() {
      let e = /{(.*?)}/;
      return e.test(this.selectedItemsLabel) ? this.selectedItemsLabel.replace(this.selectedItemsLabel.match(e)[0], this.modelValue.length + "") : this.selectedItemsLabel;
    },
    onToggleAll(e) {
      if (this.selectAll !== null)
        this.$emit("selectall-change", { originalEvent: e, checked: !this.allSelected });
      else {
        const t = this.allSelected ? [] : this.visibleOptions.filter((i) => this.isValidOption(i)).map((i) => this.getOptionValue(i));
        this.updateModel(e, t);
      }
      this.headerCheckboxFocused = !0;
    },
    removeOption(e, t) {
      let i = this.modelValue.filter((n) => !g.equals(n, t, this.equalityKey));
      this.updateModel(e, i);
    },
    clearFilter() {
      this.filterValue = null;
    },
    hasFocusableElements() {
      return O.getFocusableElements(this.overlay, ":not(.p-hidden-focusable)").length > 0;
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
      const t = this.getOptionValue(e);
      return (this.modelValue || []).some((i) => g.equals(i, t, this.equalityKey));
    },
    findFirstOptionIndex() {
      return this.visibleOptions.findIndex((e) => this.isValidOption(e));
    },
    findLastOptionIndex() {
      return g.findLastIndex(this.visibleOptions, (e) => this.isValidOption(e));
    },
    findNextOptionIndex(e) {
      const t = e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex((i) => this.isValidOption(i)) : -1;
      return t > -1 ? t + e + 1 : e;
    },
    findPrevOptionIndex(e) {
      const t = e > 0 ? g.findLastIndex(this.visibleOptions.slice(0, e), (i) => this.isValidOption(i)) : -1;
      return t > -1 ? t : e;
    },
    findFirstSelectedOptionIndex() {
      return this.hasSelectedOption ? this.visibleOptions.findIndex((e) => this.isValidSelectedOption(e)) : -1;
    },
    findLastSelectedOptionIndex() {
      return this.hasSelectedOption ? g.findLastIndex(this.visibleOptions, (e) => this.isValidSelectedOption(e)) : -1;
    },
    findNextSelectedOptionIndex(e) {
      const t = this.hasSelectedOption && e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex((i) => this.isValidSelectedOption(i)) : -1;
      return t > -1 ? t + e + 1 : -1;
    },
    findPrevSelectedOptionIndex(e) {
      const t = this.hasSelectedOption && e > 0 ? g.findLastIndex(this.visibleOptions.slice(0, e), (i) => this.isValidSelectedOption(i)) : -1;
      return t > -1 ? t : -1;
    },
    findNearestSelectedOptionIndex(e, t = !1) {
      let i = -1;
      return this.hasSelectedOption && (t ? (i = this.findPrevSelectedOptionIndex(e), i = i === -1 ? this.findNextSelectedOptionIndex(e) : i) : (i = this.findNextSelectedOptionIndex(e), i = i === -1 ? this.findPrevSelectedOptionIndex(e) : i)), i > -1 ? i : e;
    },
    findFirstFocusedOptionIndex() {
      const e = this.findFirstSelectedOptionIndex();
      return e < 0 ? this.findFirstOptionIndex() : e;
    },
    findLastFocusedOptionIndex() {
      const e = this.findLastSelectedOptionIndex();
      return e < 0 ? this.findLastOptionIndex() : e;
    },
    searchOptions(e) {
      this.searchValue = (this.searchValue || "") + e.key;
      let t = -1;
      this.focusedOptionIndex !== -1 ? (t = this.visibleOptions.slice(this.focusedOptionIndex).findIndex((i) => this.isOptionMatched(i)), t = t === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex((i) => this.isOptionMatched(i)) : t + this.focusedOptionIndex) : t = this.visibleOptions.findIndex((i) => this.isOptionMatched(i)), t === -1 && this.focusedOptionIndex === -1 && (t = this.findFirstFocusedOptionIndex()), t !== -1 && this.changeFocusedOptionIndex(e, t), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(() => {
        this.searchValue = "", this.searchTimeout = null;
      }, 500);
    },
    changeFocusedOptionIndex(e, t) {
      this.focusedOptionIndex !== t && (this.focusedOptionIndex = t, this.scrollInView());
    },
    scrollInView(e = -1) {
      const t = e !== -1 ? `${this.id}_${e}` : this.focusedOptionId, i = O.findSingle(this.list, `li[id="${t}"]`);
      i ? i.scrollIntoView && i.scrollIntoView({ block: "nearest", inline: "nearest" }) : this.virtualScrollerDisabled || this.virtualScroller && this.virtualScroller.scrollToIndex(e !== -1 ? e : this.focusedOptionIndex);
    },
    autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
        const e = this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);
        this.updateModel(null, [e]);
      }
    },
    updateModel(e, t) {
      this.$emit("update:modelValue", t), this.$emit("change", { originalEvent: e, value: t });
    },
    flatOptions(e) {
      return (e || []).reduce((t, i, n) => {
        t.push({ optionGroup: i, group: !0, index: n });
        const s = this.getOptionGroupChildren(i);
        return s && s.forEach((l) => t.push(l)), t;
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
        "p-multiselect p-component p-inputwrapper",
        {
          "p-multiselect-chip": this.display === "chip",
          "p-disabled": this.disabled,
          "p-focus": this.focused,
          "p-inputwrapper-filled": this.modelValue && this.modelValue.length,
          "p-inputwrapper-focus": this.focused || this.overlayVisible,
          "p-overlay-open": this.overlayVisible
        }
      ];
    },
    labelClass() {
      return [
        "p-multiselect-label",
        {
          "p-placeholder": this.label === this.placeholder,
          "p-multiselect-label-empty": !this.placeholder && (!this.modelValue || this.modelValue.length === 0)
        }
      ];
    },
    dropdownIconClass() {
      return ["p-multiselect-trigger-icon", this.loading ? this.loadingIcon : this.dropdownIcon];
    },
    panelStyleClass() {
      return [
        "p-multiselect-panel p-component",
        this.panelClass,
        {
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === !1
        }
      ];
    },
    headerCheckboxClass() {
      return [
        "p-checkbox p-component",
        {
          "p-checkbox-checked": this.allSelected,
          "p-checkbox-focused": this.headerCheckboxFocused
        }
      ];
    },
    visibleOptions() {
      const e = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      if (this.filterValue) {
        const t = Ne.filter(e, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          const i = this.options || [], n = [];
          return i.forEach((s) => {
            const l = s.items.filter((y) => t.includes(y));
            l.length > 0 && n.push({ ...s, items: [...l] });
          }), this.flatOptions(n);
        }
        return t;
      }
      return e;
    },
    label() {
      let e;
      if (this.modelValue && this.modelValue.length) {
        if (g.isNotEmpty(this.maxSelectedLabels) && this.modelValue.length > this.maxSelectedLabels)
          return this.getSelectedItemsLabel();
        e = "";
        for (let t = 0; t < this.modelValue.length; t++)
          t !== 0 && (e += ", "), e += this.getLabelByValue(this.modelValue[t]);
      } else
        e = this.placeholder;
      return e;
    },
    chipSelectedItems() {
      return g.isNotEmpty(this.maxSelectedLabels) && this.modelValue && this.modelValue.length > this.maxSelectedLabels ? this.modelValue.slice(0, this.maxSelectedLabels) : this.modelValue;
    },
    allSelected() {
      return this.selectAll !== null ? this.selectAll : g.isNotEmpty(this.visibleOptions) && this.visibleOptions.every((e) => this.isOptionGroup(e) || this.isOptionDisabled(e) || this.isSelected(e));
    },
    hasSelectedOption() {
      return g.isNotEmpty(this.modelValue);
    },
    equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields() {
      return this.filterFields || [this.optionLabel];
    },
    maxSelectionLimitReached() {
      return this.selectionLimit && this.modelValue && this.modelValue.length === this.selectionLimit;
    },
    filterResultMessageText() {
      return g.isNotEmpty(this.visibleOptions) ? this.filterMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptyFilterMessageText;
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
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll("{0}", this.modelValue.length) : this.emptySelectionMessageText;
    },
    id() {
      return this.$attrs.id || Re();
    },
    focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? `${this.id}_${this.focusedOptionIndex}` : null;
    },
    ariaSetSize() {
      return this.visibleOptions.filter((e) => !this.isOptionGroup(e)).length;
    },
    toggleAllAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria[this.allSelected ? "selectAll" : "unselectAll"] : void 0;
    },
    closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    },
    virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    }
  },
  directives: {
    ripple: je
  },
  components: {
    VirtualScroller: Ze,
    Portal: He
  }
};
const ei = { class: "p-hidden-accessible" }, ti = ["id", "disabled", "placeholder", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant"], ii = { class: "p-multiselect-label-container" }, li = { class: "p-multiselect-token-label" }, ni = ["onClick"], si = { class: "p-multiselect-trigger" }, oi = {
  key: 0,
  class: "p-multiselect-header"
}, ai = { class: "p-hidden-accessible" }, ri = ["checked", "aria-label"], di = {
  key: 1,
  class: "p-multiselect-filter-container"
}, ci = ["value", "placeholder", "aria-owns", "aria-activedescendant"], ui = {
  key: 2,
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
}, hi = ["aria-label"], pi = ["id"], fi = ["id"], bi = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove"], mi = { class: "p-checkbox p-component" }, yi = {
  key: 0,
  class: "p-multiselect-empty-message",
  role: "option"
}, gi = {
  key: 1,
  class: "p-multiselect-empty-message",
  role: "option"
}, vi = {
  key: 1,
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
}, xi = {
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
};
function Oi(e, t, i, n, s, l) {
  const y = ce("VirtualScroller"), f = ce("Portal"), M = we("ripple");
  return d(), p("div", {
    ref: "container",
    class: k(l.containerClass),
    onClick: t[15] || (t[15] = (...o) => l.onContainerClick && l.onContainerClick(...o))
  }, [
    c("div", ei, [
      c("input", $({
        ref: "focusInput",
        id: i.inputId,
        type: "text",
        readonly: "",
        disabled: i.disabled,
        placeholder: i.placeholder,
        tabindex: i.disabled ? -1 : i.tabindex,
        role: "combobox",
        "aria-label": e.ariaLabel,
        "aria-labelledby": e.ariaLabelledby,
        "aria-haspopup": "listbox",
        "aria-expanded": s.overlayVisible,
        "aria-controls": l.id + "_list",
        "aria-activedescendant": s.focused ? l.focusedOptionId : void 0,
        onFocus: t[0] || (t[0] = (...o) => l.onFocus && l.onFocus(...o)),
        onBlur: t[1] || (t[1] = (...o) => l.onBlur && l.onBlur(...o)),
        onKeydown: t[2] || (t[2] = (...o) => l.onKeyDown && l.onKeyDown(...o))
      }, i.inputProps), null, 16, ti)
    ]),
    c("div", ii, [
      c("div", {
        class: k(l.labelClass)
      }, [
        T(e.$slots, "value", {
          value: i.modelValue,
          placeholder: i.placeholder
        }, () => [
          i.display === "comma" ? (d(), p(N, { key: 0 }, [
            ee(_(l.label || "empty"), 1)
          ], 64)) : i.display === "chip" ? (d(), p(N, { key: 1 }, [
            (d(!0), p(N, null, ue(l.chipSelectedItems, (o) => (d(), p("div", {
              key: l.getLabelByValue(o),
              class: "p-multiselect-token"
            }, [
              T(e.$slots, "chip", { value: o }, () => [
                c("span", li, _(l.getLabelByValue(o)), 1)
              ]),
              i.disabled ? S("", !0) : (d(), p("span", {
                key: 0,
                class: k(["p-multiselect-token-icon", i.removeTokenIcon]),
                onClick: Be((B) => l.removeOption(B, o), ["stop"])
              }, null, 10, ni))
            ]))), 128)),
            !i.modelValue || i.modelValue.length === 0 ? (d(), p(N, { key: 0 }, [
              ee(_(i.placeholder || "empty"), 1)
            ], 64)) : S("", !0)
          ], 64)) : S("", !0)
        ])
      ], 2)
    ]),
    c("div", si, [
      T(e.$slots, "indicator", {}, () => [
        c("span", {
          class: k(l.dropdownIconClass),
          "aria-hidden": "true"
        }, null, 2)
      ])
    ]),
    v(f, { appendTo: i.appendTo }, {
      default: F(() => [
        v(Ie, {
          name: "p-connected-overlay",
          onEnter: l.onOverlayEnter,
          onAfterEnter: l.onOverlayAfterEnter,
          onLeave: l.onOverlayLeave,
          onAfterLeave: l.onOverlayAfterLeave
        }, {
          default: F(() => [
            s.overlayVisible ? (d(), p("div", $({
              key: 0,
              ref: l.overlayRef,
              style: i.panelStyle,
              class: l.panelStyleClass,
              onClick: t[13] || (t[13] = (...o) => l.onOverlayClick && l.onOverlayClick(...o)),
              onKeydown: t[14] || (t[14] = (...o) => l.onOverlayKeyDown && l.onOverlayKeyDown(...o))
            }, i.panelProps), [
              c("span", {
                ref: "firstHiddenFocusableElementOnOverlay",
                role: "presentation",
                "aria-hidden": "true",
                class: "p-hidden-accessible p-hidden-focusable",
                tabindex: 0,
                onFocus: t[3] || (t[3] = (...o) => l.onFirstHiddenFocus && l.onFirstHiddenFocus(...o))
              }, null, 544),
              T(e.$slots, "header", {
                value: i.modelValue,
                options: l.visibleOptions
              }),
              i.showToggleAll && i.selectionLimit == null || i.filter ? (d(), p("div", oi, [
                i.showToggleAll && i.selectionLimit == null ? (d(), p("div", {
                  key: 0,
                  class: k(l.headerCheckboxClass),
                  onClick: t[6] || (t[6] = (...o) => l.onToggleAll && l.onToggleAll(...o))
                }, [
                  c("div", ai, [
                    c("input", {
                      type: "checkbox",
                      readonly: "",
                      checked: l.allSelected,
                      "aria-label": l.toggleAllAriaLabel,
                      onFocus: t[4] || (t[4] = (...o) => l.onHeaderCheckboxFocus && l.onHeaderCheckboxFocus(...o)),
                      onBlur: t[5] || (t[5] = (...o) => l.onHeaderCheckboxBlur && l.onHeaderCheckboxBlur(...o))
                    }, null, 40, ri)
                  ]),
                  c("div", {
                    class: k(["p-checkbox-box", { "p-highlight": l.allSelected, "p-focus": s.headerCheckboxFocused }])
                  }, [
                    c("span", {
                      class: k(["p-checkbox-icon", { [i.checkboxIcon]: l.allSelected }])
                    }, null, 2)
                  ], 2)
                ], 2)) : S("", !0),
                i.filter ? (d(), p("div", di, [
                  c("input", $({
                    ref: "filterInput",
                    type: "text",
                    value: s.filterValue,
                    onVnodeUpdated: t[7] || (t[7] = (...o) => l.onFilterUpdated && l.onFilterUpdated(...o)),
                    class: "p-multiselect-filter p-inputtext p-component",
                    placeholder: i.filterPlaceholder,
                    role: "searchbox",
                    autocomplete: "off",
                    "aria-owns": l.id + "_list",
                    "aria-activedescendant": l.focusedOptionId,
                    onKeydown: t[8] || (t[8] = (...o) => l.onFilterKeyDown && l.onFilterKeyDown(...o)),
                    onBlur: t[9] || (t[9] = (...o) => l.onFilterBlur && l.onFilterBlur(...o)),
                    onInput: t[10] || (t[10] = (...o) => l.onFilterChange && l.onFilterChange(...o))
                  }, i.filterInputProps), null, 16, ci),
                  c("span", {
                    class: k(["p-multiselect-filter-icon", i.filterIcon])
                  }, null, 2)
                ])) : S("", !0),
                i.filter ? (d(), p("span", ui, _(l.filterResultMessageText), 1)) : S("", !0),
                he((d(), p("button", $({
                  class: "p-multiselect-close p-link",
                  "aria-label": l.closeAriaLabel,
                  onClick: t[11] || (t[11] = (...o) => l.onCloseClick && l.onCloseClick(...o)),
                  type: "button"
                }, i.closeButtonProps), [
                  c("span", {
                    class: k(["p-multiselect-close-icon", i.closeIcon])
                  }, null, 2)
                ], 16, hi)), [
                  [M]
                ])
              ])) : S("", !0),
              c("div", {
                class: "p-multiselect-items-wrapper",
                style: ie({ "max-height": l.virtualScrollerDisabled ? i.scrollHeight : "" })
              }, [
                v(y, $({ ref: l.virtualScrollerRef }, i.virtualScrollerOptions, {
                  items: l.visibleOptions,
                  style: { height: i.scrollHeight },
                  tabindex: -1,
                  disabled: l.virtualScrollerDisabled
                }), Le({
                  content: F(({ styleClass: o, contentRef: B, items: P, getItemOptions: w, contentStyle: U, itemSize: R }) => [
                    c("ul", {
                      ref: (b) => l.listRef(b, B),
                      id: l.id + "_list",
                      class: k(["p-multiselect-items p-component", o]),
                      style: ie(U),
                      role: "listbox",
                      "aria-multiselectable": "true"
                    }, [
                      (d(!0), p(N, null, ue(P, (b, x) => (d(), p(N, {
                        key: l.getOptionRenderKey(b, l.getOptionIndex(x, w))
                      }, [
                        l.isOptionGroup(b) ? (d(), p("li", {
                          key: 0,
                          id: l.id + "_" + l.getOptionIndex(x, w),
                          style: ie({ height: R ? R + "px" : void 0 }),
                          class: "p-multiselect-item-group",
                          role: "option"
                        }, [
                          T(e.$slots, "optiongroup", {
                            option: b.optionGroup,
                            index: l.getOptionIndex(x, w)
                          }, () => [
                            ee(_(l.getOptionGroupLabel(b.optionGroup)), 1)
                          ])
                        ], 12, fi)) : he((d(), p("li", {
                          key: 1,
                          id: l.id + "_" + l.getOptionIndex(x, w),
                          style: ie({ height: R ? R + "px" : void 0 }),
                          class: k(["p-multiselect-item", { "p-highlight": l.isSelected(b), "p-focus": s.focusedOptionIndex === l.getOptionIndex(x, w), "p-disabled": l.isOptionDisabled(b) }]),
                          role: "option",
                          "aria-label": l.getOptionLabel(b),
                          "aria-selected": l.isSelected(b),
                          "aria-disabled": l.isOptionDisabled(b),
                          "aria-setsize": l.ariaSetSize,
                          "aria-posinset": l.getAriaPosInset(l.getOptionIndex(x, w)),
                          onClick: (D) => l.onOptionSelect(D, b, l.getOptionIndex(x, w), !0),
                          onMousemove: (D) => l.onOptionMouseMove(D, l.getOptionIndex(x, w))
                        }, [
                          c("div", mi, [
                            c("div", {
                              class: k(["p-checkbox-box", { "p-highlight": l.isSelected(b) }])
                            }, [
                              c("span", {
                                class: k(["p-checkbox-icon", { [i.checkboxIcon]: l.isSelected(b) }])
                              }, null, 2)
                            ], 2)
                          ]),
                          T(e.$slots, "option", {
                            option: b,
                            index: l.getOptionIndex(x, w)
                          }, () => [
                            c("span", null, _(l.getOptionLabel(b)), 1)
                          ])
                        ], 46, bi)), [
                          [M]
                        ])
                      ], 64))), 128)),
                      s.filterValue && (!P || P && P.length === 0) ? (d(), p("li", yi, [
                        T(e.$slots, "emptyfilter", {}, () => [
                          ee(_(l.emptyFilterMessageText), 1)
                        ])
                      ])) : !i.options || i.options && i.options.length === 0 ? (d(), p("li", gi, [
                        T(e.$slots, "empty", {}, () => [
                          ee(_(l.emptyMessageText), 1)
                        ])
                      ])) : S("", !0)
                    ], 14, pi)
                  ]),
                  _: 2
                }, [
                  e.$slots.loader ? {
                    name: "loader",
                    fn: F(({ options: o }) => [
                      T(e.$slots, "loader", { options: o })
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040, ["items", "style", "disabled"])
              ], 4),
              T(e.$slots, "footer", {
                value: i.modelValue,
                options: l.visibleOptions
              }),
              !i.options || i.options && i.options.length === 0 ? (d(), p("span", vi, _(l.emptyMessageText), 1)) : S("", !0),
              c("span", xi, _(l.selectedMessageText), 1),
              c("span", {
                ref: "lastHiddenFocusableElementOnOverlay",
                role: "presentation",
                "aria-hidden": "true",
                class: "p-hidden-accessible p-hidden-focusable",
                tabindex: 0,
                onFocus: t[12] || (t[12] = (...o) => l.onLastHiddenFocus && l.onLastHiddenFocus(...o))
              }, null, 544)
            ], 16)) : S("", !0)
          ]),
          _: 3
        }, 8, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])
      ]),
      _: 3
    }, 8, ["appendTo"])
  ], 2);
}
function ki(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", i === "top" && n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e));
  }
}
var Si = `
.p-multiselect {
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
.p-multiselect-trigger {
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
.p-multiselect-label-container {
    overflow: hidden;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    cursor: pointer;
}
.p-multiselect-label {
    display: block;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
}
.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}
.p-multiselect-token {
    cursor: default;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
}
.p-multiselect-token-icon {
    cursor: pointer;
}
.p-multiselect .p-multiselect-panel {
    min-width: 100%;
}
.p-multiselect-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-multiselect-items-wrapper {
    overflow: auto;
}
.p-multiselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-multiselect-item {
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-multiselect-item-group {
    cursor: auto;
}
.p-multiselect-header {
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
.p-multiselect-filter-container {
    position: relative;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
}
.p-multiselect-filter-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}
.p-multiselect-filter-container .p-inputtext {
    width: 100%;
}
.p-multiselect-close {
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
    overflow: hidden;
    position: relative;
    margin-left: auto;
}
.p-fluid .p-multiselect {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
`;
ki(Si);
Ee.render = Oi;
var Ke = {
  name: "ScrollTop",
  scrollListener: null,
  container: null,
  props: {
    target: {
      type: String,
      default: "window"
    },
    threshold: {
      type: Number,
      default: 400
    },
    icon: {
      type: String,
      default: "pi pi-chevron-up"
    },
    behavior: {
      type: String,
      default: "smooth"
    }
  },
  data() {
    return {
      visible: !1
    };
  },
  mounted() {
    this.target === "window" ? this.bindDocumentScrollListener() : this.target === "parent" && this.bindParentScrollListener();
  },
  beforeUnmount() {
    this.target === "window" ? this.unbindDocumentScrollListener() : this.target === "parent" && this.unbindParentScrollListener(), this.container && (J.clear(this.container), this.overlay = null);
  },
  methods: {
    onClick() {
      (this.target === "window" ? window : this.$el.parentElement).scroll({
        top: 0,
        behavior: this.behavior
      });
    },
    checkVisibility(e) {
      e > this.threshold ? this.visible = !0 : this.visible = !1;
    },
    bindParentScrollListener() {
      this.scrollListener = () => {
        this.checkVisibility(this.$el.parentElement.scrollTop);
      }, this.$el.parentElement.addEventListener("scroll", this.scrollListener);
    },
    bindDocumentScrollListener() {
      this.scrollListener = () => {
        this.checkVisibility(O.getWindowScrollTop());
      }, window.addEventListener("scroll", this.scrollListener);
    },
    unbindParentScrollListener() {
      this.scrollListener && (this.$el.parentElement.removeEventListener("scroll", this.scrollListener), this.scrollListener = null);
    },
    unbindDocumentScrollListener() {
      this.scrollListener && (window.removeEventListener("scroll", this.scrollListener), this.scrollListener = null);
    },
    onEnter(e) {
      J.set("overlay", e, this.$primevue.config.zIndex.overlay);
    },
    onAfterLeave(e) {
      J.clear(e);
    },
    containerRef(e) {
      this.container = e;
    }
  },
  computed: {
    containerClass() {
      return ["p-scrolltop p-link p-component", { "p-scrolltop-sticky": this.target !== "window" }];
    },
    iconClass() {
      return ["p-scrolltop-icon", this.icon];
    },
    scrollTopAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.scrollTop : void 0;
    }
  }
};
const wi = ["aria-label"];
function Ii(e, t, i, n, s, l) {
  return d(), W(Ie, {
    name: "p-scrolltop",
    appear: "",
    onEnter: l.onEnter,
    onAfterLeave: l.onAfterLeave
  }, {
    default: F(() => [
      s.visible ? (d(), p("button", {
        key: 0,
        ref: l.containerRef,
        class: k(l.containerClass),
        onClick: t[0] || (t[0] = (...y) => l.onClick && l.onClick(...y)),
        type: "button",
        "aria-label": l.scrollTopAriaLabel
      }, [
        c("span", {
          class: k(l.iconClass)
        }, null, 2)
      ], 10, wi)) : S("", !0)
    ]),
    _: 1
  }, 8, ["onEnter", "onAfterLeave"]);
}
function Li(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", i === "top" && n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e));
  }
}
var Ci = `
.p-scrolltop {
    position: fixed;
    bottom: 20px;
    right: 20px;
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
.p-scrolltop-sticky {
    position: sticky;
}
.p-scrolltop-sticky.p-link {
    margin-left: auto;
}
.p-scrolltop-enter-from {
    opacity: 0;
}
.p-scrolltop-enter-active {
    -webkit-transition: opacity 0.15s;
    transition: opacity 0.15s;
}
.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}
.p-scrolltop-leave-active {
    -webkit-transition: opacity 0.15s;
    transition: opacity 0.15s;
}
`;
Li(Ci);
Ke.render = Ii;
var _e = {
  name: "Toolbar",
  props: {
    "aria-labelledby": {
      type: String,
      default: null
    }
  }
};
const Vi = ["aria-labelledby"], Ti = { class: "p-toolbar-group-start p-toolbar-group-left" }, Fi = { class: "p-toolbar-group-center" }, Mi = { class: "p-toolbar-group-end p-toolbar-group-right" };
function Pi(e, t, i, n, s, l) {
  return d(), p("div", {
    class: "p-toolbar p-component",
    role: "toolbar",
    "aria-labelledby": e.ariaLabelledby
  }, [
    c("div", Ti, [
      T(e.$slots, "start")
    ]),
    c("div", Fi, [
      T(e.$slots, "center")
    ]),
    c("div", Mi, [
      T(e.$slots, "end")
    ])
  ], 8, Vi);
}
function Ei(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", i === "top" && n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e));
  }
}
var Ki = `
.p-toolbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
}
.p-toolbar-group-start,
.p-toolbar-group-center,
.p-toolbar-group-end {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-toolbar-group-left,
.p-toolbar-group-right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;
Ei(Ki);
_e.render = Pi;
function Se() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get: (e, t) => e.get(t.toString())
  });
}
const _i = { class: "flex justify-content-between flex-column sm:flex-row" }, Di = { class: "flex" }, Ai = {
  key: 0,
  class: "p-input-icon-left mb-2"
}, Ni = /* @__PURE__ */ c("i", { class: "pi pi-search" }, null, -1), Ri = {
  key: 0,
  class: "pi pi-spin pi-spinner global-search-icon"
}, ji = {
  id: "toggleableFields",
  class: "mx-2"
}, Hi = ["innerHTML"], Bi = /* @__PURE__ */ Ce({
  __name: "Table",
  props: {
    fields: { type: Object, required: !0 },
    paginator: { type: null, required: !0 },
    resource: { type: null, required: !0 }
  },
  setup(e) {
    var fe, be;
    const t = Ge(), i = ze(), n = Se(), s = V(), l = V(!1);
    let y = V(
      se(
        () => {
          var a;
          return Object.entries((a = i.value.fields) != null ? a : {}).filter(
            ([, h]) => {
              var E;
              return !h.toggleable || ((E = x.value) == null ? void 0 : E.find((A) => A.field === h.columnName));
            }
          );
        }
      )
    ), f = V();
    const M = (a) => {
      f.value = a, L();
    };
    let o = V();
    const B = (a) => {
      var h, E;
      a.page + 1 === ((h = i.value.paginator) == null ? void 0 : h.currentPage) && a.rows === ((E = i.value.paginator) == null ? void 0 : E.perPage) || (o.value = a, L());
    };
    let P = se(
      () => {
        var a;
        return Object.entries((a = i.value.fields) != null ? a : {}).filter(
          ([, h]) => h.isGloballySearchable
        );
      }
    ), w = se(
      () => {
        var a;
        return Object.entries((a = i.value.fields) != null ? a : {}).filter(([, h]) => h.exportable);
      }
    );
    function U() {
      s.value.exportCSV();
    }
    let R = V(null), b = V(
      Object.entries((fe = i.value.fields) != null ? fe : {}).flatMap(([, a]) => a.toggleable ? {
        field: a.columnName,
        header: a.label,
        isToggledHiddenByDefault: a.isToggledHiddenByDefault
      } : [])
    ), x = V(
      b.value.filter((a) => !a.isToggledHiddenByDefault)
    );
    function D(a) {
      x.value = b.value.filter(
        (h) => a.includes(h)
      );
    }
    let I = V(n.globalSearch), K = V((be = JSON.parse(n.columnsSearch)) != null ? be : {});
    function oe(a) {
      K.value[a] !== void 0 && K.value[a].trim() === "" && delete K.value[a], L();
    }
    let Z = se(
      () => {
        var a;
        return I.value || ((a = f == null ? void 0 : f.value) == null ? void 0 : a.multiSortMeta) || Object.keys(K.value).length;
      }
    );
    function m() {
      K.value = {}, I.value = "", f.value = void 0, o.value = void 0, L();
    }
    Ue(
      I,
      Zt(() => {
        L();
      }, 300)
    );
    const L = () => {
      var h, E, A, G, r, C, le, H, Y, z, X;
      let a = {};
      o != null && o.value && (a.page = o != null && o.value ? ((h = o.value) == null ? void 0 : h.page) + 1 : (A = (E = i.value.paginator) == null ? void 0 : E.currentPage) != null ? A : 1), (G = o == null ? void 0 : o.value) != null && G.rows && (a.perPage = (H = (le = (r = o == null ? void 0 : o.value) == null ? void 0 : r.rows) != null ? le : (C = i.value.paginator) == null ? void 0 : C.perPage) != null ? H : 10), (Y = f == null ? void 0 : f.value) != null && Y.multiSortMeta && (a.sort = JSON.stringify((z = f == null ? void 0 : f.value) == null ? void 0 : z.multiSortMeta)), I.value && (a.globalSearch = I.value), Object.keys(K.value).length && (a.columnsSearch = JSON.stringify(K.value)), We.Inertia.get(
        `/${t.configs.prefix}/${(X = i.value.resource) == null ? void 0 : X.pluralLabel.toLowerCase()}`,
        a,
        {
          preserveState: !0,
          preserveScroll: !0,
          replace: !0,
          onStart: () => l.value = !0,
          onFinish: () => l.value = !1
        }
      );
    }, j = V([]), Q = V([]), ae = V([]);
    return qe(() => {
      var A, G;
      const { fields: a, paginator: h } = i.value, E = Se();
      ae.value = [];
      for (const r of (A = JSON.parse(E.sort)) != null ? A : [])
        ae.value.push({
          field: r.field,
          order: r.order
        });
      j.value = [];
      for (const r of (G = h == null ? void 0 : h.data) != null ? G : []) {
        let C = {};
        for (const le in a) {
          const H = a[le];
          if (H.relationshipName) {
            const Y = H.relationshipName.split(".");
            let z = r;
            for (let X = 0; X < Y.length; X++)
              z !== null && (z = z[Y[X]]);
            C[H.columnName] = z !== null ? z[H.title] : null;
          } else
            C[H.columnName] = r[H.columnName];
        }
        j.value.push(C);
      }
    }), (a, h) => {
      var A, G;
      const E = we("tooltip");
      return d(), p(N, null, [
        v(u(_e), { class: "mb-4" }, {
          end: F(() => [
            v(u(q), {
              class: "p-button-success mr-2",
              icon: "pi pi-plus",
              label: "New",
              onClick: a.openNew
            }, null, 8, ["onClick"]),
            v(u(q), {
              disabled: !a.selectedProducts || !a.selectedProducts.length,
              class: "p-button-danger",
              icon: "pi pi-trash",
              label: "Delete",
              onClick: a.confirmDeleteSelected
            }, null, 8, ["disabled", "onClick"])
          ]),
          _: 1
        }),
        v(u(Qe), {
          ref_key: "dt",
          ref: s,
          selection: Q.value,
          "onUpdate:selection": h[4] || (h[4] = (r) => Q.value = r),
          first: (e.paginator.currentPage - 1) * e.paginator.perPage,
          lazy: !0,
          loading: l.value,
          multiSortMeta: ae.value,
          paginator: !0,
          paginatorTemplate: {
            "640px": "PrevPageLink CurrentPageReport NextPageLink",
            default: "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          },
          rows: e.paginator.perPage,
          rowsPerPageOptions: u(t).configs.rowsPerPageOptions,
          showGridlines: (A = u(i).resource) == null ? void 0 : A.showGridlines,
          stripedRows: (G = u(i).resource) == null ? void 0 : G.stripedRows,
          totalRecords: e.paginator.totalCount,
          value: j.value,
          currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
          filterDisplay: "row",
          removableSort: "",
          responsiveLayout: "scroll",
          sortMode: "multiple",
          onPage: h[5] || (h[5] = (r) => B(r)),
          onSort: h[6] || (h[6] = (r) => M(r))
        }, {
          header: F(() => [
            c("div", _i, [
              c("div", null, [
                u(w).length ? (d(), W(u(q), {
                  key: 0,
                  icon: "pi pi-external-link",
                  class: "p-button-primary mb-2 mr-2",
                  label: "Export",
                  onClick: h[0] || (h[0] = (r) => U(r))
                })) : S("v-if", !0),
                u(Z) ? (d(), W(u(q), {
                  key: 1,
                  class: "p-button-outlined mb-2",
                  icon: "pi pi-filter-slash",
                  label: "Clear",
                  type: "button",
                  onClick: h[1] || (h[1] = (r) => m())
                })) : S("v-if", !0)
              ]),
              c("div", Di, [
                u(P).length > 0 ? (d(), p("span", Ai, [
                  Ni,
                  v(u(me), {
                    modelValue: u(I),
                    "onUpdate:modelValue": h[2] || (h[2] = (r) => Xe(I) ? I.value = r : I = r),
                    disabled: u(I) !== null && l.value,
                    placeholder: "Keyword Search",
                    style: { width: "100%" }
                  }, null, 8, ["modelValue", "disabled"]),
                  u(I) !== null && l.value ? (d(), p("i", Ri)) : S("v-if", !0)
                ])) : S("v-if", !0),
                c("div", ji, [
                  u(b).length ? (d(), W(u(q), {
                    key: 0,
                    class: "p-button-rounded p-button-text",
                    icon: "pi pi-table",
                    onClick: h[3] || (h[3] = (r) => u(R).show())
                  })) : S("v-if", !0),
                  v(u(Ee), {
                    ref_key: "toggleableMultiSelect",
                    ref: R,
                    modelValue: u(x),
                    options: u(b),
                    appendTo: "#toggleableFields",
                    class: "hidden",
                    optionLabel: "header",
                    panelClass: "toggleableFields",
                    "onUpdate:modelValue": D
                  }, null, 8, ["modelValue", "options"])
                ])
              ])
            ])
          ]),
          loading: F(() => []),
          footer: F(() => [
            v(u(Ke))
          ]),
          default: F(() => [
            v(u(re), {
              exportable: !1,
              selectionMode: "multiple",
              style: { width: "3rem" }
            }),
            (d(!0), p(N, null, ue(u(y), ([, r]) => (d(), W(u(re), {
              key: r.columnName,
              field: r.columnName,
              header: r.label,
              sortable: r.sortable,
              showFilterMenu: !1,
              filterMatchMode: "contains",
              exportable: r.exportable
            }, Le({
              body: F((C) => [
                l.value ? (d(), W(u(pe), { key: 0 })) : (d(), p("div", {
                  key: 1,
                  innerHTML: C.data[r.columnName]
                }, null, 8, Hi))
              ]),
              _: 2
            }, [
              r.searchable && !r.isGloballySearchable ? {
                name: "filter",
                fn: F(() => [
                  he(v(u(me), {
                    modelValue: u(K)[r.columnName],
                    "onUpdate:modelValue": (C) => u(K)[r.columnName] = C,
                    placeholder: `Search by ${r.label}`,
                    class: "p-column-filter",
                    type: "text",
                    onKeydown: Je((C) => oe(r.columnName), ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onKeydown"]), [
                    [
                      E,
                      "Hit enter key to filter",
                      void 0,
                      {
                        top: !0,
                        focus: !0
                      }
                    ]
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["field", "header", "sortable", "exportable"]))), 128)),
            v(u(re), {
              exportable: !1,
              headerStyle: "min-width:10rem;"
            }, {
              body: F((r) => [
                l.value ? (d(), W(u(pe), { key: 0 })) : (d(), p(N, { key: 1 }, [
                  v(u(q), {
                    class: "p-button-rounded p-button-warning mr-2",
                    icon: "pi pi-pencil",
                    onClick: (C) => a.editProduct(r.data)
                  }, null, 8, ["onClick"]),
                  v(u(q), {
                    class: "p-button-rounded p-button-danger mt-2",
                    icon: "pi pi-trash",
                    onClick: (C) => a.confirmDeleteProduct(r.data)
                  }, null, 8, ["onClick"])
                ], 64))
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["selection", "first", "loading", "multiSortMeta", "rows", "rowsPerPageOptions", "showGridlines", "stripedRows", "totalRecords", "value"])
      ], 64);
    };
  }
});
const Gi = /* @__PURE__ */ Ve(Bi, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Components/Table.vue"]]), zi = { class: "grid" }, Ui = { class: "col-12" }, qi = { class: "card" }, Wi = /* @__PURE__ */ Ce({
  __name: "Index",
  setup(e) {
    return (t, i) => {
      const n = ce("AppHead");
      return d(), p(N, null, [
        v(n, {
          title: t.$page.props.controller.resource.pluralLabel
        }, null, 8, ["title"]),
        c("div", zi, [
          c("div", Ui, [
            c("div", qi, [
              c("h5", null, _(t.$page.props.controller.resource.pluralLabel), 1),
              v(Gi, {
                paginator: t.$page.props.controller.paginator,
                fields: t.$page.props.controller.fields,
                resource: t.$page.props.controller.resource
              }, null, 8, ["paginator", "fields", "resource"])
            ])
          ])
        ])
      ], 64);
    };
  }
}), Qi = /* @__PURE__ */ Ve(Wi, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Index.vue"]]);
export {
  Qi as default
};
