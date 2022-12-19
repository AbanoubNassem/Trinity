import { Q as ie, o as d, c as p, z as te, y as w, Z as oe, O as v, D as k, A as Ke, C as De, B as Ae, U as Ee, R as Re, E as Ne, b as ce, G as Ie, g as u, p as Y, n as N, F as H, x as $, t as D, h as ue, P as He, k as I, e as O, w as A, T as je, I as he, H as we, d as Le, l as Be, u as Ve, r as C, S as le, V as Ge, W as Ue, f as r, m as ze, s as J, i as Q, J as me, X as We, N as Xe, _ as Fe } from "./main.a429b92d.mjs";
import { b as qe, s as Je, a as re } from "./column.esm.c04bc334.mjs";
import { u as Ze, s as Qe, a as Ye } from "./trinity_resource_fields.491b87a3.mjs";
function $e(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ce = $e, et = typeof ie == "object" && ie && ie.Object === Object && ie, tt = et, it = tt, lt = typeof self == "object" && self && self.Object === Object && self, st = it || lt || Function("return this")(), Te = st, nt = Te, at = function() {
  return nt.Date.now();
}, ot = at, rt = /\s/;
function dt(e) {
  for (var t = e.length; t-- && rt.test(e.charAt(t)); )
    ;
  return t;
}
var ct = dt, ut = ct, ht = /^\s+/;
function pt(e) {
  return e && e.slice(0, ut(e) + 1).replace(ht, "");
}
var ft = pt, bt = Te, mt = bt.Symbol, Me = mt, ye = Me, _e = Object.prototype, yt = _e.hasOwnProperty, gt = _e.toString, ee = ye ? ye.toStringTag : void 0;
function vt(e) {
  var t = yt.call(e, ee), i = e[ee];
  try {
    e[ee] = void 0;
    var n = !0;
  } catch {
  }
  var a = gt.call(e);
  return n && (t ? e[ee] = i : delete e[ee]), a;
}
var Ot = vt, xt = Object.prototype, St = xt.toString;
function kt(e) {
  return St.call(e);
}
var It = kt, ge = Me, wt = Ot, Lt = It, Vt = "[object Null]", Ft = "[object Undefined]", ve = ge ? ge.toStringTag : void 0;
function Ct(e) {
  return e == null ? e === void 0 ? Ft : Vt : ve && ve in Object(e) ? wt(e) : Lt(e);
}
var Tt = Ct;
function Mt(e) {
  return e != null && typeof e == "object";
}
var _t = Mt, Pt = Tt, Kt = _t, Dt = "[object Symbol]";
function At(e) {
  return typeof e == "symbol" || Kt(e) && Pt(e) == Dt;
}
var Et = At, Rt = ft, Oe = Ce, Nt = Et, xe = 0 / 0, Ht = /^[-+]0x[0-9a-f]+$/i, jt = /^0b[01]+$/i, Bt = /^0o[0-7]+$/i, Gt = parseInt;
function Ut(e) {
  if (typeof e == "number")
    return e;
  if (Nt(e))
    return xe;
  if (Oe(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Oe(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Rt(e);
  var i = jt.test(e);
  return i || Bt.test(e) ? Gt(e.slice(2), i ? 2 : 8) : Ht.test(e) ? xe : +e;
}
var zt = Ut, Wt = Ce, de = ot, Se = zt, Xt = "Expected a function", qt = Math.max, Jt = Math.min;
function Zt(e, t, i) {
  var n, a, l, m, b, T, s = 0, B = !1, f = !1, x = !0;
  if (typeof e != "function")
    throw new TypeError(Xt);
  t = Se(t) || 0, Wt(i) && (B = !!i.leading, f = "maxWait" in i, l = f ? qt(Se(i.maxWait) || 0, t) : l, x = "trailing" in i ? !!i.trailing : x);
  function X(y) {
    var E = n, q = a;
    return n = a = void 0, s = y, m = e.apply(q, E), m;
  }
  function G(y) {
    return s = y, b = setTimeout(L, t), B ? X(y) : m;
  }
  function g(y) {
    var E = y - T, q = y - s, U = t - E;
    return f ? Jt(U, l - q) : U;
  }
  function S(y) {
    var E = y - T, q = y - s;
    return T === void 0 || E >= t || E < 0 || f && q >= l;
  }
  function L() {
    var y = de();
    if (S(y))
      return Z(y);
    b = setTimeout(L, g(y));
  }
  function Z(y) {
    return b = void 0, x && n ? X(y) : (n = a = void 0, m);
  }
  function se() {
    b !== void 0 && clearTimeout(b), s = 0, n = T = a = b = void 0;
  }
  function V() {
    return b === void 0 ? m : Z(de());
  }
  function F() {
    var y = de(), E = S(y);
    if (n = arguments, a = this, T = y, E) {
      if (b === void 0)
        return G(T);
      if (f)
        return clearTimeout(b), b = setTimeout(L, t), X(T);
    }
    return b === void 0 && (b = setTimeout(L, t)), m;
  }
  return F.cancel = se, F.flush = V, F;
}
var Qt = Zt, pe = {
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
function Yt(e, t, i, n, a, l) {
  return d(), p("div", {
    style: te(l.containerStyle),
    class: w(l.containerClass),
    "aria-hidden": "true"
  }, null, 6);
}
function $t(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", i === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var ei = `
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
$t(ei);
pe.render = Yt;
var Pe = {
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
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && (oe.clear(this.overlay), this.overlay = null);
  },
  methods: {
    getOptionIndex(e, t) {
      return this.virtualScrollerDisabled ? e : t && t(e).index;
    },
    getOptionLabel(e) {
      return this.optionLabel ? v.resolveFieldData(e, this.optionLabel) : e;
    },
    getOptionValue(e) {
      return this.optionValue ? v.resolveFieldData(e, this.optionValue) : e;
    },
    getOptionRenderKey(e) {
      return this.dataKey ? v.resolveFieldData(e, this.dataKey) : this.getOptionLabel(e);
    },
    isOptionDisabled(e) {
      return this.maxSelectionLimitReached && !this.isSelected(e) ? !0 : this.optionDisabled ? v.resolveFieldData(e, this.optionDisabled) : !1;
    },
    isOptionGroup(e) {
      return this.optionGroupLabel && e.optionGroup && e.group;
    },
    getOptionGroupLabel(e) {
      return v.resolveFieldData(e, this.optionGroupLabel);
    },
    getOptionGroupChildren(e) {
      return v.resolveFieldData(e, this.optionGroupChildren);
    },
    getAriaPosInset(e) {
      return (this.optionGroupLabel ? e - this.visibleOptions.slice(0, e).filter((t) => this.isOptionGroup(t)).length : e) + 1;
    },
    show(e) {
      this.$emit("before-show"), this.overlayVisible = !0, this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, e && k.focus(this.$refs.focusInput);
    },
    hide(e) {
      const t = () => {
        this.$emit("before-hide"), this.overlayVisible = !1, this.focusedOptionIndex = -1, this.searchValue = "", this.resetFilterOnHide && (this.filterValue = null), e && k.focus(this.$refs.focusInput);
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
          !t && v.isPrintableCharacter(e.key) && (!this.overlayVisible && this.show(), this.searchOptions(e), e.preventDefault());
          break;
      }
    },
    onContainerClick(e) {
      this.disabled || this.loading || (!this.overlay || !this.overlay.contains(e.target)) && (this.overlayVisible ? this.hide(!0) : this.show(!0));
    },
    onFirstHiddenFocus(e) {
      const t = e.relatedTarget === this.$refs.focusInput ? k.getFirstFocusableElement(this.overlay, ":not(.p-hidden-focusable)") : this.$refs.focusInput;
      k.focus(t);
    },
    onLastHiddenFocus(e) {
      const t = e.relatedTarget === this.$refs.focusInput ? k.getLastFocusableElement(this.overlay, ":not(.p-hidden-focusable)") : this.$refs.focusInput;
      k.focus(t);
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
      let a = this.isSelected(t), l = null;
      a ? l = this.modelValue.filter((m) => !v.equals(m, this.getOptionValue(t), this.equalityKey)) : l = [...this.modelValue || [], this.getOptionValue(t)], this.updateModel(e, l), i !== -1 && (this.focusedOptionIndex = i), n && k.focus(this.$refs.focusInput);
    },
    onOptionMouseMove(e, t) {
      this.focusOnHover && this.changeFocusedOptionIndex(e, t);
    },
    onOptionSelectRange(e, t = -1, i = -1) {
      if (t === -1 && (t = this.findNearestSelectedOptionIndex(i, !0)), i === -1 && (i = this.findNearestSelectedOptionIndex(t)), t !== -1 && i !== -1) {
        const n = Math.min(t, i), a = Math.max(t, i), l = this.visibleOptions.slice(n, a + 1).filter((m) => this.isValidOption(m)).map((m) => this.getOptionValue(m));
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
      Ke.emit("overlay-click", {
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
      t || (this.overlayVisible && this.hasFocusableElements() ? (k.focus(e.shiftKey ? this.$refs.lastHiddenFocusableElementOnOverlay : this.$refs.firstHiddenFocusableElementOnOverlay), e.preventDefault()) : (this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(this.filter)));
    },
    onShiftKey() {
      this.startRangeIndex = this.focusedOptionIndex;
    },
    onOverlayEnter(e) {
      oe.set("overlay", e, this.$primevue.config.zIndex.overlay), this.alignOverlay(), this.scrollInView(), this.autoFilterFocus && k.focus(this.$refs.filterInput);
    },
    onOverlayAfterEnter() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onOverlayLeave() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.overlay = null;
    },
    onOverlayAfterLeave(e) {
      oe.clear(e);
    },
    alignOverlay() {
      this.appendTo === "self" ? k.relativePosition(this.overlay, this.$el) : (this.overlay.style.minWidth = k.getOuterWidth(this.$el) + "px", k.absolutePosition(this.overlay, this.$el));
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
      this.scrollHandler || (this.scrollHandler = new De(this.$refs.container, () => {
        this.overlayVisible && this.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener() {
      this.resizeListener || (this.resizeListener = () => {
        this.overlayVisible && !k.isTouchDevice() && this.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    isOutsideClicked(e) {
      return !(this.$el.isSameNode(e.target) || this.$el.contains(e.target) || this.overlay && this.overlay.contains(e.target));
    },
    getLabelByValue(e) {
      const i = (this.optionGroupLabel ? this.flatOptions(this.options) : this.options || []).find((n) => !this.isOptionGroup(n) && v.equals(this.getOptionValue(n), e, this.equalityKey));
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
      let i = this.modelValue.filter((n) => !v.equals(n, t, this.equalityKey));
      this.updateModel(e, i);
    },
    clearFilter() {
      this.filterValue = null;
    },
    hasFocusableElements() {
      return k.getFocusableElements(this.overlay, ":not(.p-hidden-focusable)").length > 0;
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
      return (this.modelValue || []).some((i) => v.equals(i, t, this.equalityKey));
    },
    findFirstOptionIndex() {
      return this.visibleOptions.findIndex((e) => this.isValidOption(e));
    },
    findLastOptionIndex() {
      return v.findLastIndex(this.visibleOptions, (e) => this.isValidOption(e));
    },
    findNextOptionIndex(e) {
      const t = e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex((i) => this.isValidOption(i)) : -1;
      return t > -1 ? t + e + 1 : e;
    },
    findPrevOptionIndex(e) {
      const t = e > 0 ? v.findLastIndex(this.visibleOptions.slice(0, e), (i) => this.isValidOption(i)) : -1;
      return t > -1 ? t : e;
    },
    findFirstSelectedOptionIndex() {
      return this.hasSelectedOption ? this.visibleOptions.findIndex((e) => this.isValidSelectedOption(e)) : -1;
    },
    findLastSelectedOptionIndex() {
      return this.hasSelectedOption ? v.findLastIndex(this.visibleOptions, (e) => this.isValidSelectedOption(e)) : -1;
    },
    findNextSelectedOptionIndex(e) {
      const t = this.hasSelectedOption && e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex((i) => this.isValidSelectedOption(i)) : -1;
      return t > -1 ? t + e + 1 : -1;
    },
    findPrevSelectedOptionIndex(e) {
      const t = this.hasSelectedOption && e > 0 ? v.findLastIndex(this.visibleOptions.slice(0, e), (i) => this.isValidSelectedOption(i)) : -1;
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
      const t = e !== -1 ? `${this.id}_${e}` : this.focusedOptionId, i = k.findSingle(this.list, `li[id="${t}"]`);
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
        const a = this.getOptionGroupChildren(i);
        return a && a.forEach((l) => t.push(l)), t;
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
        const t = Ae.filter(e, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          const i = this.options || [], n = [];
          return i.forEach((a) => {
            const l = a.items.filter((m) => t.includes(m));
            l.length > 0 && n.push({ ...a, items: [...l] });
          }), this.flatOptions(n);
        }
        return t;
      }
      return e;
    },
    label() {
      let e;
      if (this.modelValue && this.modelValue.length) {
        if (v.isNotEmpty(this.maxSelectedLabels) && this.modelValue.length > this.maxSelectedLabels)
          return this.getSelectedItemsLabel();
        e = "";
        for (let t = 0; t < this.modelValue.length; t++)
          t !== 0 && (e += ", "), e += this.getLabelByValue(this.modelValue[t]);
      } else
        e = this.placeholder;
      return e;
    },
    chipSelectedItems() {
      return v.isNotEmpty(this.maxSelectedLabels) && this.modelValue && this.modelValue.length > this.maxSelectedLabels ? this.modelValue.slice(0, this.maxSelectedLabels) : this.modelValue;
    },
    allSelected() {
      return this.selectAll !== null ? this.selectAll : v.isNotEmpty(this.visibleOptions) && this.visibleOptions.every((e) => this.isOptionGroup(e) || this.isOptionDisabled(e) || this.isSelected(e));
    },
    hasSelectedOption() {
      return v.isNotEmpty(this.modelValue);
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
      return v.isNotEmpty(this.visibleOptions) ? this.filterMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptyFilterMessageText;
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
      return this.$attrs.id || Ee();
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
    ripple: Re
  },
  components: {
    VirtualScroller: qe,
    Portal: Ne
  }
};
const ti = { class: "p-hidden-accessible" }, ii = ["id", "disabled", "placeholder", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant"], li = { class: "p-multiselect-label-container" }, si = { class: "p-multiselect-token-label" }, ni = ["onClick"], ai = { class: "p-multiselect-trigger" }, oi = {
  key: 0,
  class: "p-multiselect-header"
}, ri = { class: "p-hidden-accessible" }, di = ["checked", "aria-label"], ci = {
  key: 1,
  class: "p-multiselect-filter-container"
}, ui = ["value", "placeholder", "aria-owns", "aria-activedescendant"], hi = {
  key: 2,
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
}, pi = ["aria-label"], fi = ["id"], bi = ["id"], mi = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove"], yi = { class: "p-checkbox p-component" }, gi = {
  key: 0,
  class: "p-multiselect-empty-message",
  role: "option"
}, vi = {
  key: 1,
  class: "p-multiselect-empty-message",
  role: "option"
}, Oi = {
  key: 1,
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
}, xi = {
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
};
function Si(e, t, i, n, a, l) {
  const m = ce("VirtualScroller"), b = ce("Portal"), T = Ie("ripple");
  return d(), p("div", {
    ref: "container",
    class: w(l.containerClass),
    onClick: t[15] || (t[15] = (...s) => l.onContainerClick && l.onContainerClick(...s))
  }, [
    u("div", ti, [
      u("input", Y({
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
        "aria-expanded": a.overlayVisible,
        "aria-controls": l.id + "_list",
        "aria-activedescendant": a.focused ? l.focusedOptionId : void 0,
        onFocus: t[0] || (t[0] = (...s) => l.onFocus && l.onFocus(...s)),
        onBlur: t[1] || (t[1] = (...s) => l.onBlur && l.onBlur(...s)),
        onKeydown: t[2] || (t[2] = (...s) => l.onKeyDown && l.onKeyDown(...s))
      }, i.inputProps), null, 16, ii)
    ]),
    u("div", li, [
      u("div", {
        class: w(l.labelClass)
      }, [
        N(e.$slots, "value", {
          value: i.modelValue,
          placeholder: i.placeholder
        }, () => [
          i.display === "comma" ? (d(), p(H, { key: 0 }, [
            $(D(l.label || "empty"), 1)
          ], 64)) : i.display === "chip" ? (d(), p(H, { key: 1 }, [
            (d(!0), p(H, null, ue(l.chipSelectedItems, (s) => (d(), p("div", {
              key: l.getLabelByValue(s),
              class: "p-multiselect-token"
            }, [
              N(e.$slots, "chip", { value: s }, () => [
                u("span", si, D(l.getLabelByValue(s)), 1)
              ]),
              i.disabled ? I("", !0) : (d(), p("span", {
                key: 0,
                class: w(["p-multiselect-token-icon", i.removeTokenIcon]),
                onClick: He((B) => l.removeOption(B, s), ["stop"])
              }, null, 10, ni))
            ]))), 128)),
            !i.modelValue || i.modelValue.length === 0 ? (d(), p(H, { key: 0 }, [
              $(D(i.placeholder || "empty"), 1)
            ], 64)) : I("", !0)
          ], 64)) : I("", !0)
        ])
      ], 2)
    ]),
    u("div", ai, [
      N(e.$slots, "indicator", {}, () => [
        u("span", {
          class: w(l.dropdownIconClass),
          "aria-hidden": "true"
        }, null, 2)
      ])
    ]),
    O(b, { appendTo: i.appendTo }, {
      default: A(() => [
        O(je, {
          name: "p-connected-overlay",
          onEnter: l.onOverlayEnter,
          onAfterEnter: l.onOverlayAfterEnter,
          onLeave: l.onOverlayLeave,
          onAfterLeave: l.onOverlayAfterLeave
        }, {
          default: A(() => [
            a.overlayVisible ? (d(), p("div", Y({
              key: 0,
              ref: l.overlayRef,
              style: i.panelStyle,
              class: l.panelStyleClass,
              onClick: t[13] || (t[13] = (...s) => l.onOverlayClick && l.onOverlayClick(...s)),
              onKeydown: t[14] || (t[14] = (...s) => l.onOverlayKeyDown && l.onOverlayKeyDown(...s))
            }, i.panelProps), [
              u("span", {
                ref: "firstHiddenFocusableElementOnOverlay",
                role: "presentation",
                "aria-hidden": "true",
                class: "p-hidden-accessible p-hidden-focusable",
                tabindex: 0,
                onFocus: t[3] || (t[3] = (...s) => l.onFirstHiddenFocus && l.onFirstHiddenFocus(...s))
              }, null, 544),
              N(e.$slots, "header", {
                value: i.modelValue,
                options: l.visibleOptions
              }),
              i.showToggleAll && i.selectionLimit == null || i.filter ? (d(), p("div", oi, [
                i.showToggleAll && i.selectionLimit == null ? (d(), p("div", {
                  key: 0,
                  class: w(l.headerCheckboxClass),
                  onClick: t[6] || (t[6] = (...s) => l.onToggleAll && l.onToggleAll(...s))
                }, [
                  u("div", ri, [
                    u("input", {
                      type: "checkbox",
                      readonly: "",
                      checked: l.allSelected,
                      "aria-label": l.toggleAllAriaLabel,
                      onFocus: t[4] || (t[4] = (...s) => l.onHeaderCheckboxFocus && l.onHeaderCheckboxFocus(...s)),
                      onBlur: t[5] || (t[5] = (...s) => l.onHeaderCheckboxBlur && l.onHeaderCheckboxBlur(...s))
                    }, null, 40, di)
                  ]),
                  u("div", {
                    class: w(["p-checkbox-box", { "p-highlight": l.allSelected, "p-focus": a.headerCheckboxFocused }])
                  }, [
                    u("span", {
                      class: w(["p-checkbox-icon", { [i.checkboxIcon]: l.allSelected }])
                    }, null, 2)
                  ], 2)
                ], 2)) : I("", !0),
                i.filter ? (d(), p("div", ci, [
                  u("input", Y({
                    ref: "filterInput",
                    type: "text",
                    value: a.filterValue,
                    onVnodeUpdated: t[7] || (t[7] = (...s) => l.onFilterUpdated && l.onFilterUpdated(...s)),
                    class: "p-multiselect-filter p-inputtext p-component",
                    placeholder: i.filterPlaceholder,
                    role: "searchbox",
                    autocomplete: "off",
                    "aria-owns": l.id + "_list",
                    "aria-activedescendant": l.focusedOptionId,
                    onKeydown: t[8] || (t[8] = (...s) => l.onFilterKeyDown && l.onFilterKeyDown(...s)),
                    onBlur: t[9] || (t[9] = (...s) => l.onFilterBlur && l.onFilterBlur(...s)),
                    onInput: t[10] || (t[10] = (...s) => l.onFilterChange && l.onFilterChange(...s))
                  }, i.filterInputProps), null, 16, ui),
                  u("span", {
                    class: w(["p-multiselect-filter-icon", i.filterIcon])
                  }, null, 2)
                ])) : I("", !0),
                i.filter ? (d(), p("span", hi, D(l.filterResultMessageText), 1)) : I("", !0),
                he((d(), p("button", Y({
                  class: "p-multiselect-close p-link",
                  "aria-label": l.closeAriaLabel,
                  onClick: t[11] || (t[11] = (...s) => l.onCloseClick && l.onCloseClick(...s)),
                  type: "button"
                }, i.closeButtonProps), [
                  u("span", {
                    class: w(["p-multiselect-close-icon", i.closeIcon])
                  }, null, 2)
                ], 16, pi)), [
                  [T]
                ])
              ])) : I("", !0),
              u("div", {
                class: "p-multiselect-items-wrapper",
                style: te({ "max-height": l.virtualScrollerDisabled ? i.scrollHeight : "" })
              }, [
                O(m, Y({ ref: l.virtualScrollerRef }, i.virtualScrollerOptions, {
                  items: l.visibleOptions,
                  style: { height: i.scrollHeight },
                  tabindex: -1,
                  disabled: l.virtualScrollerDisabled
                }), we({
                  content: A(({ styleClass: s, contentRef: B, items: f, getItemOptions: x, contentStyle: X, itemSize: G }) => [
                    u("ul", {
                      ref: (g) => l.listRef(g, B),
                      id: l.id + "_list",
                      class: w(["p-multiselect-items p-component", s]),
                      style: te(X),
                      role: "listbox",
                      "aria-multiselectable": "true"
                    }, [
                      (d(!0), p(H, null, ue(f, (g, S) => (d(), p(H, {
                        key: l.getOptionRenderKey(g, l.getOptionIndex(S, x))
                      }, [
                        l.isOptionGroup(g) ? (d(), p("li", {
                          key: 0,
                          id: l.id + "_" + l.getOptionIndex(S, x),
                          style: te({ height: G ? G + "px" : void 0 }),
                          class: "p-multiselect-item-group",
                          role: "option"
                        }, [
                          N(e.$slots, "optiongroup", {
                            option: g.optionGroup,
                            index: l.getOptionIndex(S, x)
                          }, () => [
                            $(D(l.getOptionGroupLabel(g.optionGroup)), 1)
                          ])
                        ], 12, bi)) : he((d(), p("li", {
                          key: 1,
                          id: l.id + "_" + l.getOptionIndex(S, x),
                          style: te({ height: G ? G + "px" : void 0 }),
                          class: w(["p-multiselect-item", { "p-highlight": l.isSelected(g), "p-focus": a.focusedOptionIndex === l.getOptionIndex(S, x), "p-disabled": l.isOptionDisabled(g) }]),
                          role: "option",
                          "aria-label": l.getOptionLabel(g),
                          "aria-selected": l.isSelected(g),
                          "aria-disabled": l.isOptionDisabled(g),
                          "aria-setsize": l.ariaSetSize,
                          "aria-posinset": l.getAriaPosInset(l.getOptionIndex(S, x)),
                          onClick: (L) => l.onOptionSelect(L, g, l.getOptionIndex(S, x), !0),
                          onMousemove: (L) => l.onOptionMouseMove(L, l.getOptionIndex(S, x))
                        }, [
                          u("div", yi, [
                            u("div", {
                              class: w(["p-checkbox-box", { "p-highlight": l.isSelected(g) }])
                            }, [
                              u("span", {
                                class: w(["p-checkbox-icon", { [i.checkboxIcon]: l.isSelected(g) }])
                              }, null, 2)
                            ], 2)
                          ]),
                          N(e.$slots, "option", {
                            option: g,
                            index: l.getOptionIndex(S, x)
                          }, () => [
                            u("span", null, D(l.getOptionLabel(g)), 1)
                          ])
                        ], 46, mi)), [
                          [T]
                        ])
                      ], 64))), 128)),
                      a.filterValue && (!f || f && f.length === 0) ? (d(), p("li", gi, [
                        N(e.$slots, "emptyfilter", {}, () => [
                          $(D(l.emptyFilterMessageText), 1)
                        ])
                      ])) : !i.options || i.options && i.options.length === 0 ? (d(), p("li", vi, [
                        N(e.$slots, "empty", {}, () => [
                          $(D(l.emptyMessageText), 1)
                        ])
                      ])) : I("", !0)
                    ], 14, fi)
                  ]),
                  _: 2
                }, [
                  e.$slots.loader ? {
                    name: "loader",
                    fn: A(({ options: s }) => [
                      N(e.$slots, "loader", { options: s })
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040, ["items", "style", "disabled"])
              ], 4),
              N(e.$slots, "footer", {
                value: i.modelValue,
                options: l.visibleOptions
              }),
              !i.options || i.options && i.options.length === 0 ? (d(), p("span", Oi, D(l.emptyMessageText), 1)) : I("", !0),
              u("span", xi, D(l.selectedMessageText), 1),
              u("span", {
                ref: "lastHiddenFocusableElementOnOverlay",
                role: "presentation",
                "aria-hidden": "true",
                class: "p-hidden-accessible p-hidden-focusable",
                tabindex: 0,
                onFocus: t[12] || (t[12] = (...s) => l.onLastHiddenFocus && l.onLastHiddenFocus(...s))
              }, null, 544)
            ], 16)) : I("", !0)
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
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", i === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Ii = `
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
ki(Ii);
Pe.render = Si;
function ke() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get: (e, t) => e.get(t.toString())
  });
}
const wi = { class: "flex justify-content-between flex-column sm:flex-row" }, Li = { class: "flex" }, Vi = {
  key: 0,
  class: "p-input-icon-left mb-2"
}, Fi = /* @__PURE__ */ u("i", { class: "pi pi-search" }, null, -1), Ci = {
  key: 0,
  class: "pi pi-spin pi-spinner global-search-icon"
}, Ti = {
  id: "toggleableFields",
  class: "mx-2"
}, Mi = ["innerHTML"], _i = /* @__PURE__ */ Le({
  __name: "Table",
  setup(e) {
    var be;
    const t = Be(), i = Ve(), n = i.value.resource, a = ke(), l = Ze(), m = C(), b = C(!1);
    let T = C(
      le(
        () => Object.entries(l).filter(
          ([, o]) => {
            var h;
            return !o.toggleable || ((h = Z.value) == null ? void 0 : h.find((M) => M.field === o.columnName));
          }
        )
      )
    ), s = C();
    const B = (o) => {
      s.value = o, U();
    };
    let f = C();
    const x = (o) => {
      var h, M;
      o.page + 1 === ((h = i.value.data) == null ? void 0 : h.currentPage) && o.rows === ((M = i.value.data) == null ? void 0 : M.perPage) || (f.value = o, U());
    };
    let X = le(
      () => Object.entries(l).filter(([, o]) => o.isGloballySearchable)
    ), G = le(
      () => Object.entries(l).filter(([, o]) => o.exportable)
    );
    function g(o) {
      m.value.exportCSV(o);
    }
    let S = C(null), L = C(
      Object.entries(l).flatMap(([, o]) => o.toggleable ? {
        field: o.columnName,
        header: o.label,
        isToggledHiddenByDefault: o.isToggledHiddenByDefault
      } : [])
    ), Z = C(
      L.value.filter((o) => !o.isToggledHiddenByDefault)
    );
    function se(o) {
      Z.value = L.value.filter(
        (h) => o.includes(h)
      );
    }
    let V = C(a.globalSearch), F = C((be = JSON.parse(a.columnsSearch)) != null ? be : {});
    function y(o) {
      F.value[o] !== void 0 && F.value[o].trim() === "" && delete F.value[o], U();
    }
    let E = le(
      () => {
        var o;
        return V.value || ((o = s == null ? void 0 : s.value) == null ? void 0 : o.multiSortMeta) || Object.keys(F.value).length;
      }
    );
    function q() {
      F.value = {}, V.value = "", s.value = void 0, f.value = void 0, U();
    }
    Ge(
      V,
      Qt(() => {
        U();
      }, 300)
    );
    const U = () => {
      var h, M, z, P, j, _, W, K, c, R;
      let o = {};
      f != null && f.value && (o.page = f != null && f.value ? ((h = f.value) == null ? void 0 : h.page) + 1 : (z = (M = i.value.data) == null ? void 0 : M.currentPage) != null ? z : 1), (P = f == null ? void 0 : f.value) != null && P.rows && (o.perPage = (K = (W = (j = f == null ? void 0 : f.value) == null ? void 0 : j.rows) != null ? W : (_ = i.value.data) == null ? void 0 : _.perPage) != null ? K : 10), (c = s == null ? void 0 : s.value) != null && c.multiSortMeta && (o.sort = JSON.stringify((R = s == null ? void 0 : s.value) == null ? void 0 : R.multiSortMeta)), V.value && (o.globalSearch = V.value), Object.keys(F.value).length && (o.columnsSearch = JSON.stringify(F.value)), ze.Inertia.get(
        `/${t.configs.prefix}/${n == null ? void 0 : n.pluralLabel.toLowerCase()}`,
        o,
        {
          preserveState: !0,
          preserveScroll: !0,
          replace: !0,
          onStart: () => b.value = !0,
          onFinish: () => b.value = !1
        }
      );
    }, ne = C([]), fe = C([]), ae = C([]);
    return Ue(() => {
      var M, z;
      const { data: o } = i.value, h = ke();
      ae.value = [];
      for (const P of (M = JSON.parse(h.sort)) != null ? M : [])
        ae.value.push({
          field: P.field,
          order: P.order
        });
      ne.value = [];
      for (const P of (z = o == null ? void 0 : o.data) != null ? z : []) {
        let j = {};
        for (const _ of l)
          if (_.relationshipName) {
            const W = _.relationshipName.split(".");
            let K = P;
            for (let c = 0; c < W.length; c++)
              K !== null && (K = K[W[c]]);
            j[_.columnName] = K !== null ? K[_.title] : null;
          } else
            j[_.columnName] = P[_.columnName];
        ne.value.push(j);
      }
    }), (o, h) => {
      var z, P, j, _, W, K;
      const M = Ie("tooltip");
      return d(), p(H, null, [
        O(r(Qe), { class: "mb-4" }, {
          end: A(() => [
            O(r(J), {
              class: "p-button-success mr-2",
              icon: "pi pi-plus",
              label: "New",
              onClick: h[0] || (h[0] = (c) => {
                var R;
                return r(Ye)(`/${(R = r(i).resource) == null ? void 0 : R.name}/create`);
              })
            }),
            O(r(J), {
              class: "p-button-danger",
              icon: "pi pi-trash",
              label: "Delete"
            })
          ]),
          _: 1
        }),
        O(r(Je), {
          ref_key: "dt",
          ref: m,
          selection: fe.value,
          "onUpdate:selection": h[5] || (h[5] = (c) => fe.value = c),
          first: (((z = r(i).data) == null ? void 0 : z.currentPage) - 1) * ((P = r(i).data) == null ? void 0 : P.perPage),
          lazy: !0,
          loading: b.value,
          multiSortMeta: ae.value,
          paginator: !0,
          paginatorTemplate: {
            "640px": "PrevPageLink CurrentPageReport NextPageLink",
            default: "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          },
          rows: (j = r(i).data) == null ? void 0 : j.perPage,
          rowsPerPageOptions: r(t).configs.rowsPerPageOptions,
          showGridlines: (_ = r(i).resource) == null ? void 0 : _.showGridlines,
          stripedRows: (W = r(i).resource) == null ? void 0 : W.stripedRows,
          totalRecords: (K = r(i).data) == null ? void 0 : K.totalCount,
          value: ne.value,
          currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
          filterDisplay: "row",
          removableSort: "",
          responsiveLayout: "scroll",
          sortMode: "multiple",
          onPage: h[6] || (h[6] = (c) => x(c)),
          onSort: h[7] || (h[7] = (c) => B(c))
        }, {
          header: A(() => [
            u("div", wi, [
              u("div", null, [
                r(G).length ? (d(), Q(r(J), {
                  key: 0,
                  icon: "pi pi-external-link",
                  class: "p-button-primary mb-2 mr-2",
                  label: "Export",
                  onClick: h[1] || (h[1] = (c) => g(c))
                })) : I("v-if", !0),
                r(E) ? (d(), Q(r(J), {
                  key: 1,
                  class: "p-button-outlined mb-2",
                  icon: "pi pi-filter-slash",
                  label: "Clear",
                  type: "button",
                  onClick: h[2] || (h[2] = (c) => q())
                })) : I("v-if", !0)
              ]),
              u("div", Li, [
                r(X).length > 0 ? (d(), p("span", Vi, [
                  Fi,
                  O(r(me), {
                    modelValue: r(V),
                    "onUpdate:modelValue": h[3] || (h[3] = (c) => We(V) ? V.value = c : V = c),
                    disabled: r(V) !== null && b.value,
                    placeholder: "Keyword Search",
                    style: { width: "100%" }
                  }, null, 8, ["modelValue", "disabled"]),
                  r(V) !== null && b.value ? (d(), p("i", Ci)) : I("v-if", !0)
                ])) : I("v-if", !0),
                u("div", Ti, [
                  r(L).length ? (d(), Q(r(J), {
                    key: 0,
                    class: "p-button-rounded p-button-text",
                    icon: "pi pi-table",
                    onClick: h[4] || (h[4] = (c) => r(S).show())
                  })) : I("v-if", !0),
                  O(r(Pe), {
                    ref_key: "toggleableMultiSelect",
                    ref: S,
                    modelValue: r(Z),
                    options: r(L),
                    appendTo: "#toggleableFields",
                    class: "hidden",
                    optionLabel: "header",
                    panelClass: "toggleableFields",
                    "onUpdate:modelValue": se
                  }, null, 8, ["modelValue", "options"])
                ])
              ])
            ])
          ]),
          loading: A(() => []),
          default: A(() => [
            O(r(re), {
              exportable: !1,
              selectionMode: "multiple",
              style: { width: "3rem" }
            }),
            (d(!0), p(H, null, ue(r(T), ([, c]) => (d(), Q(r(re), {
              key: c.columnName,
              field: c.columnName,
              header: c.label,
              sortable: c.sortable,
              showFilterMenu: !1,
              filterMatchMode: "contains",
              exportable: c.exportable
            }, we({
              body: A((R) => [
                b.value ? (d(), Q(r(pe), { key: 0 })) : (d(), p("div", {
                  key: 1,
                  innerHTML: R.data[c.columnName]
                }, null, 8, Mi))
              ]),
              _: 2
            }, [
              c.searchable && !c.isGloballySearchable ? {
                name: "filter",
                fn: A(() => [
                  he(O(r(me), {
                    modelValue: r(F)[c.columnName],
                    "onUpdate:modelValue": (R) => r(F)[c.columnName] = R,
                    placeholder: `Search by ${c.label}`,
                    class: "p-column-filter",
                    type: "text",
                    onKeydown: Xe((R) => y(c.columnName), ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "onKeydown"]), [
                    [
                      M,
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
            O(r(re), {
              exportable: !1,
              headerStyle: "min-width:10rem;"
            }, {
              body: A(() => [
                b.value ? (d(), Q(r(pe), { key: 0 })) : (d(), p(H, { key: 1 }, [
                  O(r(J), {
                    class: "p-button-rounded p-button-warning mr-2",
                    icon: "pi pi-pencil"
                  }),
                  O(r(J), {
                    class: "p-button-rounded p-button-danger mt-2",
                    icon: "pi pi-trash"
                  })
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
const Pi = /* @__PURE__ */ Fe(_i, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Components/Table.vue"]]), Ki = { class: "grid" }, Di = { class: "col-12" }, Ai = { class: "card" }, Ei = /* @__PURE__ */ Le({
  __name: "Index",
  setup(e) {
    const i = Ve().value.resource;
    return (n, a) => {
      var m, b;
      const l = ce("AppHead");
      return d(), p(H, null, [
        O(l, {
          title: (m = r(i)) == null ? void 0 : m.pluralLabel
        }, null, 8, ["title"]),
        u("div", Ki, [
          u("div", Di, [
            u("div", Ai, [
              u("h5", null, D((b = r(i)) == null ? void 0 : b.pluralLabel), 1),
              O(Pi)
            ])
          ])
        ])
      ], 64);
    };
  }
}), ji = /* @__PURE__ */ Fe(Ei, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Index.vue"]]);
export {
  ji as default
};
