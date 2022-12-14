import { K as te, o as d, c as p, j as Y, n as k, Z as se, O as y, D as S, l as Ce, C as Te, p as Me, U as Ke, R as Pe, q as _e, v as oe, x as ve, a as r, m as J, h as _, F as E, g as q, t as T, i as re, I as De, k as I, b as G, w as R, T as Ae, z as de, y as Oe, d as xe, L as Ee, M as Re, r as C, N as ne, P as Ne, Q as He, B as Z, u as m, S as je, s as ue, V as Be, H as Ge, _ as Se } from "./main.d6ab22b9.mjs";
import { b as ze, s as Ue, a as qe } from "./column.esm.40993e71.mjs";
import { s as ce } from "./inputtext.esm.34af7454.mjs";
function We(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ke = We, Xe = typeof te == "object" && te && te.Object === Object && te, Je = Xe, Ze = Je, Qe = typeof self == "object" && self && self.Object === Object && self, Ye = Ze || Qe || Function("return this")(), Ie = Ye, $e = Ie, et = function() {
  return $e.Date.now();
}, tt = et, it = /\s/;
function lt(e) {
  for (var t = e.length; t-- && it.test(e.charAt(t)); )
    ;
  return t;
}
var st = lt, nt = st, at = /^\s+/;
function ot(e) {
  return e && e.slice(0, nt(e) + 1).replace(at, "");
}
var rt = ot, dt = Ie, ut = dt.Symbol, we = ut, he = we, Le = Object.prototype, ct = Le.hasOwnProperty, ht = Le.toString, Q = he ? he.toStringTag : void 0;
function pt(e) {
  var t = ct.call(e, Q), i = e[Q];
  try {
    e[Q] = void 0;
    var n = !0;
  } catch {
  }
  var a = ht.call(e);
  return n && (t ? e[Q] = i : delete e[Q]), a;
}
var ft = pt, bt = Object.prototype, mt = bt.toString;
function gt(e) {
  return mt.call(e);
}
var yt = gt, pe = we, vt = ft, Ot = yt, xt = "[object Null]", St = "[object Undefined]", fe = pe ? pe.toStringTag : void 0;
function kt(e) {
  return e == null ? e === void 0 ? St : xt : fe && fe in Object(e) ? vt(e) : Ot(e);
}
var It = kt;
function wt(e) {
  return e != null && typeof e == "object";
}
var Lt = wt, Vt = It, Ft = Lt, Ct = "[object Symbol]";
function Tt(e) {
  return typeof e == "symbol" || Ft(e) && Vt(e) == Ct;
}
var Mt = Tt, Kt = rt, be = ke, Pt = Mt, me = 0 / 0, _t = /^[-+]0x[0-9a-f]+$/i, Dt = /^0b[01]+$/i, At = /^0o[0-7]+$/i, Et = parseInt;
function Rt(e) {
  if (typeof e == "number")
    return e;
  if (Pt(e))
    return me;
  if (be(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = be(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Kt(e);
  var i = Dt.test(e);
  return i || At.test(e) ? Et(e.slice(2), i ? 2 : 8) : _t.test(e) ? me : +e;
}
var Nt = Rt, Ht = ke, ae = tt, ge = Nt, jt = "Expected a function", Bt = Math.max, Gt = Math.min;
function zt(e, t, i) {
  var n, a, l, v, h, w, s = 0, N = !1, L = !1, x = !0;
  if (typeof e != "function")
    throw new TypeError(jt);
  t = ge(t) || 0, Ht(i) && (N = !!i.leading, L = "maxWait" in i, l = L ? Bt(ge(i.maxWait) || 0, t) : l, x = "trailing" in i ? !!i.trailing : x);
  function M(b) {
    var V = n, H = a;
    return n = a = void 0, s = b, v = e.apply(H, V), v;
  }
  function K(b) {
    return s = b, h = setTimeout(O, t), N ? M(b) : v;
  }
  function g(b) {
    var V = b - w, H = b - s, W = t - V;
    return L ? Gt(W, l - H) : W;
  }
  function f(b) {
    var V = b - w, H = b - s;
    return w === void 0 || V >= t || V < 0 || L && H >= l;
  }
  function O() {
    var b = ae();
    if (f(b))
      return $(b);
    h = setTimeout(O, g(b));
  }
  function $(b) {
    return h = void 0, x && n ? M(b) : (n = a = void 0, v);
  }
  function ie() {
    h !== void 0 && clearTimeout(h), s = 0, n = w = a = h = void 0;
  }
  function le() {
    return h === void 0 ? v : $(ae());
  }
  function D() {
    var b = ae(), V = f(b);
    if (n = arguments, a = this, w = b, V) {
      if (h === void 0)
        return K(w);
      if (L)
        return clearTimeout(h), h = setTimeout(O, t), M(w);
    }
    return h === void 0 && (h = setTimeout(O, t)), v;
  }
  return D.cancel = ie, D.flush = le, D;
}
var Ut = zt, Ve = {
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
function qt(e, t, i, n, a, l) {
  return d(), p("div", {
    style: Y(l.containerStyle),
    class: k(l.containerClass),
    "aria-hidden": "true"
  }, null, 6);
}
function Wt(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", i === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var Xt = `
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
Wt(Xt);
Ve.render = qt;
var Fe = {
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
    this.unbindOutsideClickListener(), this.unbindResizeListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && (se.clear(this.overlay), this.overlay = null);
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
    getOptionRenderKey(e) {
      return this.dataKey ? y.resolveFieldData(e, this.dataKey) : this.getOptionLabel(e);
    },
    isOptionDisabled(e) {
      return this.maxSelectionLimitReached && !this.isSelected(e) ? !0 : this.optionDisabled ? y.resolveFieldData(e, this.optionDisabled) : !1;
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
      this.$emit("before-show"), this.overlayVisible = !0, this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1, e && S.focus(this.$refs.focusInput);
    },
    hide(e) {
      const t = () => {
        this.$emit("before-hide"), this.overlayVisible = !1, this.focusedOptionIndex = -1, this.searchValue = "", this.resetFilterOnHide && (this.filterValue = null), e && S.focus(this.$refs.focusInput);
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
          !t && y.isPrintableCharacter(e.key) && (!this.overlayVisible && this.show(), this.searchOptions(e), e.preventDefault());
          break;
      }
    },
    onContainerClick(e) {
      this.disabled || this.loading || (!this.overlay || !this.overlay.contains(e.target)) && (this.overlayVisible ? this.hide(!0) : this.show(!0));
    },
    onFirstHiddenFocus(e) {
      const t = e.relatedTarget === this.$refs.focusInput ? S.getFirstFocusableElement(this.overlay, ":not(.p-hidden-focusable)") : this.$refs.focusInput;
      S.focus(t);
    },
    onLastHiddenFocus(e) {
      const t = e.relatedTarget === this.$refs.focusInput ? S.getLastFocusableElement(this.overlay, ":not(.p-hidden-focusable)") : this.$refs.focusInput;
      S.focus(t);
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
      a ? l = this.modelValue.filter((v) => !y.equals(v, this.getOptionValue(t), this.equalityKey)) : l = [...this.modelValue || [], this.getOptionValue(t)], this.updateModel(e, l), i !== -1 && (this.focusedOptionIndex = i), n && S.focus(this.$refs.focusInput);
    },
    onOptionMouseMove(e, t) {
      this.focusOnHover && this.changeFocusedOptionIndex(e, t);
    },
    onOptionSelectRange(e, t = -1, i = -1) {
      if (t === -1 && (t = this.findNearestSelectedOptionIndex(i, !0)), i === -1 && (i = this.findNearestSelectedOptionIndex(t)), t !== -1 && i !== -1) {
        const n = Math.min(t, i), a = Math.max(t, i), l = this.visibleOptions.slice(n, a + 1).filter((v) => this.isValidOption(v)).map((v) => this.getOptionValue(v));
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
      Ce.emit("overlay-click", {
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
      t || (this.overlayVisible && this.hasFocusableElements() ? (S.focus(e.shiftKey ? this.$refs.lastHiddenFocusableElementOnOverlay : this.$refs.firstHiddenFocusableElementOnOverlay), e.preventDefault()) : (this.focusedOptionIndex !== -1 && this.onOptionSelect(e, this.visibleOptions[this.focusedOptionIndex]), this.overlayVisible && this.hide(this.filter)));
    },
    onShiftKey() {
      this.startRangeIndex = this.focusedOptionIndex;
    },
    onOverlayEnter(e) {
      se.set("overlay", e, this.$primevue.config.zIndex.overlay), this.alignOverlay(), this.scrollInView(), this.autoFilterFocus && S.focus(this.$refs.filterInput);
    },
    onOverlayAfterEnter() {
      this.bindOutsideClickListener(), this.bindScrollListener(), this.bindResizeListener(), this.$emit("show");
    },
    onOverlayLeave() {
      this.unbindOutsideClickListener(), this.unbindScrollListener(), this.unbindResizeListener(), this.$emit("hide"), this.overlay = null;
    },
    onOverlayAfterLeave(e) {
      se.clear(e);
    },
    alignOverlay() {
      this.appendTo === "self" ? S.relativePosition(this.overlay, this.$el) : (this.overlay.style.minWidth = S.getOuterWidth(this.$el) + "px", S.absolutePosition(this.overlay, this.$el));
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
      this.scrollHandler || (this.scrollHandler = new Te(this.$refs.container, () => {
        this.overlayVisible && this.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener() {
      this.resizeListener || (this.resizeListener = () => {
        this.overlayVisible && !S.isTouchDevice() && this.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    isOutsideClicked(e) {
      return !(this.$el.isSameNode(e.target) || this.$el.contains(e.target) || this.overlay && this.overlay.contains(e.target));
    },
    getLabelByValue(e) {
      const i = (this.optionGroupLabel ? this.flatOptions(this.options) : this.options || []).find((n) => !this.isOptionGroup(n) && y.equals(this.getOptionValue(n), e, this.equalityKey));
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
      let i = this.modelValue.filter((n) => !y.equals(n, t, this.equalityKey));
      this.updateModel(e, i);
    },
    clearFilter() {
      this.filterValue = null;
    },
    hasFocusableElements() {
      return S.getFocusableElements(this.overlay, ":not(.p-hidden-focusable)").length > 0;
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
      return (this.modelValue || []).some((i) => y.equals(i, t, this.equalityKey));
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
    findFirstSelectedOptionIndex() {
      return this.hasSelectedOption ? this.visibleOptions.findIndex((e) => this.isValidSelectedOption(e)) : -1;
    },
    findLastSelectedOptionIndex() {
      return this.hasSelectedOption ? y.findLastIndex(this.visibleOptions, (e) => this.isValidSelectedOption(e)) : -1;
    },
    findNextSelectedOptionIndex(e) {
      const t = this.hasSelectedOption && e < this.visibleOptions.length - 1 ? this.visibleOptions.slice(e + 1).findIndex((i) => this.isValidSelectedOption(i)) : -1;
      return t > -1 ? t + e + 1 : -1;
    },
    findPrevSelectedOptionIndex(e) {
      const t = this.hasSelectedOption && e > 0 ? y.findLastIndex(this.visibleOptions.slice(0, e), (i) => this.isValidSelectedOption(i)) : -1;
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
      const t = e !== -1 ? `${this.id}_${e}` : this.focusedOptionId, i = S.findSingle(this.list, `li[id="${t}"]`);
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
        const t = Me.filter(e, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          const i = this.options || [], n = [];
          return i.forEach((a) => {
            const l = a.items.filter((v) => t.includes(v));
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
        if (y.isNotEmpty(this.maxSelectedLabels) && this.modelValue.length > this.maxSelectedLabels)
          return this.getSelectedItemsLabel();
        e = "";
        for (let t = 0; t < this.modelValue.length; t++)
          t !== 0 && (e += ", "), e += this.getLabelByValue(this.modelValue[t]);
      } else
        e = this.placeholder;
      return e;
    },
    chipSelectedItems() {
      return y.isNotEmpty(this.maxSelectedLabels) && this.modelValue && this.modelValue.length > this.maxSelectedLabels ? this.modelValue.slice(0, this.maxSelectedLabels) : this.modelValue;
    },
    allSelected() {
      return this.selectAll !== null ? this.selectAll : y.isNotEmpty(this.visibleOptions) && this.visibleOptions.every((e) => this.isOptionGroup(e) || this.isOptionDisabled(e) || this.isSelected(e));
    },
    hasSelectedOption() {
      return y.isNotEmpty(this.modelValue);
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
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll("{0}", this.modelValue.length) : this.emptySelectionMessageText;
    },
    id() {
      return this.$attrs.id || Ke();
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
    ripple: Pe
  },
  components: {
    VirtualScroller: ze,
    Portal: _e
  }
};
const Jt = { class: "p-hidden-accessible" }, Zt = ["id", "disabled", "placeholder", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant"], Qt = { class: "p-multiselect-label-container" }, Yt = { class: "p-multiselect-token-label" }, $t = ["onClick"], ei = { class: "p-multiselect-trigger" }, ti = {
  key: 0,
  class: "p-multiselect-header"
}, ii = { class: "p-hidden-accessible" }, li = ["checked", "aria-label"], si = {
  key: 1,
  class: "p-multiselect-filter-container"
}, ni = ["value", "placeholder", "aria-owns", "aria-activedescendant"], ai = {
  key: 2,
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
}, oi = ["aria-label"], ri = ["id"], di = ["id"], ui = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove"], ci = { class: "p-checkbox p-component" }, hi = {
  key: 0,
  class: "p-multiselect-empty-message",
  role: "option"
}, pi = {
  key: 1,
  class: "p-multiselect-empty-message",
  role: "option"
}, fi = {
  key: 1,
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
}, bi = {
  role: "status",
  "aria-live": "polite",
  class: "p-hidden-accessible"
};
function mi(e, t, i, n, a, l) {
  const v = oe("VirtualScroller"), h = oe("Portal"), w = ve("ripple");
  return d(), p("div", {
    ref: "container",
    class: k(l.containerClass),
    onClick: t[15] || (t[15] = (...s) => l.onContainerClick && l.onContainerClick(...s))
  }, [
    r("div", Jt, [
      r("input", J({
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
      }, i.inputProps), null, 16, Zt)
    ]),
    r("div", Qt, [
      r("div", {
        class: k(l.labelClass)
      }, [
        _(e.$slots, "value", {
          value: i.modelValue,
          placeholder: i.placeholder
        }, () => [
          i.display === "comma" ? (d(), p(E, { key: 0 }, [
            q(T(l.label || "empty"), 1)
          ], 64)) : i.display === "chip" ? (d(), p(E, { key: 1 }, [
            (d(!0), p(E, null, re(l.chipSelectedItems, (s) => (d(), p("div", {
              key: l.getLabelByValue(s),
              class: "p-multiselect-token"
            }, [
              _(e.$slots, "chip", { value: s }, () => [
                r("span", Yt, T(l.getLabelByValue(s)), 1)
              ]),
              i.disabled ? I("", !0) : (d(), p("span", {
                key: 0,
                class: k(["p-multiselect-token-icon", i.removeTokenIcon]),
                onClick: De((N) => l.removeOption(N, s), ["stop"])
              }, null, 10, $t))
            ]))), 128)),
            !i.modelValue || i.modelValue.length === 0 ? (d(), p(E, { key: 0 }, [
              q(T(i.placeholder || "empty"), 1)
            ], 64)) : I("", !0)
          ], 64)) : I("", !0)
        ])
      ], 2)
    ]),
    r("div", ei, [
      _(e.$slots, "indicator", {}, () => [
        r("span", {
          class: k(l.dropdownIconClass),
          "aria-hidden": "true"
        }, null, 2)
      ])
    ]),
    G(h, { appendTo: i.appendTo }, {
      default: R(() => [
        G(Ae, {
          name: "p-connected-overlay",
          onEnter: l.onOverlayEnter,
          onAfterEnter: l.onOverlayAfterEnter,
          onLeave: l.onOverlayLeave,
          onAfterLeave: l.onOverlayAfterLeave
        }, {
          default: R(() => [
            a.overlayVisible ? (d(), p("div", J({
              key: 0,
              ref: l.overlayRef,
              style: i.panelStyle,
              class: l.panelStyleClass,
              onClick: t[13] || (t[13] = (...s) => l.onOverlayClick && l.onOverlayClick(...s)),
              onKeydown: t[14] || (t[14] = (...s) => l.onOverlayKeyDown && l.onOverlayKeyDown(...s))
            }, i.panelProps), [
              r("span", {
                ref: "firstHiddenFocusableElementOnOverlay",
                role: "presentation",
                "aria-hidden": "true",
                class: "p-hidden-accessible p-hidden-focusable",
                tabindex: 0,
                onFocus: t[3] || (t[3] = (...s) => l.onFirstHiddenFocus && l.onFirstHiddenFocus(...s))
              }, null, 544),
              _(e.$slots, "header", {
                value: i.modelValue,
                options: l.visibleOptions
              }),
              i.showToggleAll && i.selectionLimit == null || i.filter ? (d(), p("div", ti, [
                i.showToggleAll && i.selectionLimit == null ? (d(), p("div", {
                  key: 0,
                  class: k(l.headerCheckboxClass),
                  onClick: t[6] || (t[6] = (...s) => l.onToggleAll && l.onToggleAll(...s))
                }, [
                  r("div", ii, [
                    r("input", {
                      type: "checkbox",
                      readonly: "",
                      checked: l.allSelected,
                      "aria-label": l.toggleAllAriaLabel,
                      onFocus: t[4] || (t[4] = (...s) => l.onHeaderCheckboxFocus && l.onHeaderCheckboxFocus(...s)),
                      onBlur: t[5] || (t[5] = (...s) => l.onHeaderCheckboxBlur && l.onHeaderCheckboxBlur(...s))
                    }, null, 40, li)
                  ]),
                  r("div", {
                    class: k(["p-checkbox-box", { "p-highlight": l.allSelected, "p-focus": a.headerCheckboxFocused }])
                  }, [
                    r("span", {
                      class: k(["p-checkbox-icon", { [i.checkboxIcon]: l.allSelected }])
                    }, null, 2)
                  ], 2)
                ], 2)) : I("", !0),
                i.filter ? (d(), p("div", si, [
                  r("input", J({
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
                  }, i.filterInputProps), null, 16, ni),
                  r("span", {
                    class: k(["p-multiselect-filter-icon", i.filterIcon])
                  }, null, 2)
                ])) : I("", !0),
                i.filter ? (d(), p("span", ai, T(l.filterResultMessageText), 1)) : I("", !0),
                de((d(), p("button", J({
                  class: "p-multiselect-close p-link",
                  "aria-label": l.closeAriaLabel,
                  onClick: t[11] || (t[11] = (...s) => l.onCloseClick && l.onCloseClick(...s)),
                  type: "button"
                }, i.closeButtonProps), [
                  r("span", {
                    class: k(["p-multiselect-close-icon", i.closeIcon])
                  }, null, 2)
                ], 16, oi)), [
                  [w]
                ])
              ])) : I("", !0),
              r("div", {
                class: "p-multiselect-items-wrapper",
                style: Y({ "max-height": l.virtualScrollerDisabled ? i.scrollHeight : "" })
              }, [
                G(v, J({ ref: l.virtualScrollerRef }, i.virtualScrollerOptions, {
                  items: l.visibleOptions,
                  style: { height: i.scrollHeight },
                  tabindex: -1,
                  disabled: l.virtualScrollerDisabled
                }), Oe({
                  content: R(({ styleClass: s, contentRef: N, items: L, getItemOptions: x, contentStyle: M, itemSize: K }) => [
                    r("ul", {
                      ref: (g) => l.listRef(g, N),
                      id: l.id + "_list",
                      class: k(["p-multiselect-items p-component", s]),
                      style: Y(M),
                      role: "listbox",
                      "aria-multiselectable": "true"
                    }, [
                      (d(!0), p(E, null, re(L, (g, f) => (d(), p(E, {
                        key: l.getOptionRenderKey(g, l.getOptionIndex(f, x))
                      }, [
                        l.isOptionGroup(g) ? (d(), p("li", {
                          key: 0,
                          id: l.id + "_" + l.getOptionIndex(f, x),
                          style: Y({ height: K ? K + "px" : void 0 }),
                          class: "p-multiselect-item-group",
                          role: "option"
                        }, [
                          _(e.$slots, "optiongroup", {
                            option: g.optionGroup,
                            index: l.getOptionIndex(f, x)
                          }, () => [
                            q(T(l.getOptionGroupLabel(g.optionGroup)), 1)
                          ])
                        ], 12, di)) : de((d(), p("li", {
                          key: 1,
                          id: l.id + "_" + l.getOptionIndex(f, x),
                          style: Y({ height: K ? K + "px" : void 0 }),
                          class: k(["p-multiselect-item", { "p-highlight": l.isSelected(g), "p-focus": a.focusedOptionIndex === l.getOptionIndex(f, x), "p-disabled": l.isOptionDisabled(g) }]),
                          role: "option",
                          "aria-label": l.getOptionLabel(g),
                          "aria-selected": l.isSelected(g),
                          "aria-disabled": l.isOptionDisabled(g),
                          "aria-setsize": l.ariaSetSize,
                          "aria-posinset": l.getAriaPosInset(l.getOptionIndex(f, x)),
                          onClick: (O) => l.onOptionSelect(O, g, l.getOptionIndex(f, x), !0),
                          onMousemove: (O) => l.onOptionMouseMove(O, l.getOptionIndex(f, x))
                        }, [
                          r("div", ci, [
                            r("div", {
                              class: k(["p-checkbox-box", { "p-highlight": l.isSelected(g) }])
                            }, [
                              r("span", {
                                class: k(["p-checkbox-icon", { [i.checkboxIcon]: l.isSelected(g) }])
                              }, null, 2)
                            ], 2)
                          ]),
                          _(e.$slots, "option", {
                            option: g,
                            index: l.getOptionIndex(f, x)
                          }, () => [
                            r("span", null, T(l.getOptionLabel(g)), 1)
                          ])
                        ], 46, ui)), [
                          [w]
                        ])
                      ], 64))), 128)),
                      a.filterValue && (!L || L && L.length === 0) ? (d(), p("li", hi, [
                        _(e.$slots, "emptyfilter", {}, () => [
                          q(T(l.emptyFilterMessageText), 1)
                        ])
                      ])) : !i.options || i.options && i.options.length === 0 ? (d(), p("li", pi, [
                        _(e.$slots, "empty", {}, () => [
                          q(T(l.emptyMessageText), 1)
                        ])
                      ])) : I("", !0)
                    ], 14, ri)
                  ]),
                  _: 2
                }, [
                  e.$slots.loader ? {
                    name: "loader",
                    fn: R(({ options: s }) => [
                      _(e.$slots, "loader", { options: s })
                    ]),
                    key: "0"
                  } : void 0
                ]), 1040, ["items", "style", "disabled"])
              ], 4),
              _(e.$slots, "footer", {
                value: i.modelValue,
                options: l.visibleOptions
              }),
              !i.options || i.options && i.options.length === 0 ? (d(), p("span", fi, T(l.emptyMessageText), 1)) : I("", !0),
              r("span", bi, T(l.selectedMessageText), 1),
              r("span", {
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
function gi(e, t) {
  t === void 0 && (t = {});
  var i = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", i === "top" && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
  }
}
var yi = `
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
gi(yi);
Fe.render = mi;
function ye() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get: (e, t) => e.get(t.toString())
  });
}
const vi = { class: "flex justify-content-between flex-column sm:flex-row" }, Oi = { class: "flex" }, xi = {
  key: 0,
  class: "p-input-icon-left mb-2"
}, Si = /* @__PURE__ */ r("i", { class: "pi pi-search" }, null, -1), ki = {
  key: 0,
  class: "pi pi-spin pi-spinner global-search-icon"
}, Ii = {
  id: "toggleableFields",
  class: "mx-2"
}, wi = /* @__PURE__ */ xe({
  __name: "Table",
  props: {
    fields: { type: Object, required: !0 },
    paginator: { type: null, required: !0 },
    resource: { type: null, required: !0 }
  },
  setup(e) {
    var H, W;
    const t = Ee(), i = Re(), n = ye(), a = C(), l = C(!1);
    let v = C(
      ne(
        () => {
          var o;
          return Object.entries((o = i.value.fields) != null ? o : {}).filter(
            ([, c]) => {
              var F;
              return !c.toggleable || ((F = K.value) == null ? void 0 : F.find((u) => u.field === c.columnName));
            }
          );
        }
      )
    ), h = C();
    const w = (o) => {
      h.value = o, D();
    };
    let s = C();
    const N = (o) => {
      var c, F;
      o.page + 1 === ((c = i.value.paginator) == null ? void 0 : c.currentPage) && o.rows === ((F = i.value.paginator) == null ? void 0 : F.perPage) || (s.value = o, D());
    };
    let L = ne(
      () => {
        var o;
        return Object.entries((o = i.value.fields) != null ? o : {}).filter(
          ([, c]) => c.isGloballySearchable
        );
      }
    ), x = C(null), M = C(
      Object.entries((H = i.value.fields) != null ? H : {}).flatMap(([, o]) => o.toggleable ? {
        field: o.columnName,
        header: o.label,
        isToggledHiddenByDefault: o.isToggledHiddenByDefault
      } : [])
    ), K = C(
      M.value.filter((o) => !o.isToggledHiddenByDefault)
    );
    function g(o) {
      K.value = M.value.filter(
        (c) => o.includes(c)
      );
    }
    let f = C(n.globalSearch), O = C((W = JSON.parse(n.columnsSearch)) != null ? W : {});
    function $(o) {
      O.value[o] !== void 0 && O.value[o].trim() === "" && delete O.value[o], D();
    }
    let ie = ne(
      () => {
        var o;
        return f.value || ((o = h == null ? void 0 : h.value) == null ? void 0 : o.multiSortMeta) || Object.keys(O.value).length;
      }
    );
    function le() {
      O.value = {}, f.value = "", h.value = void 0, s.value = void 0, D();
    }
    Ne(
      f,
      Ut(() => {
        D();
      }, 300)
    );
    const D = () => {
      var c, F, u, P, j, z, ee, A, X, B, U;
      let o = {};
      s != null && s.value && (o.page = s != null && s.value ? ((c = s.value) == null ? void 0 : c.page) + 1 : (u = (F = i.value.paginator) == null ? void 0 : F.currentPage) != null ? u : 1), (P = s == null ? void 0 : s.value) != null && P.rows && (o.perPage = (A = (ee = (j = s == null ? void 0 : s.value) == null ? void 0 : j.rows) != null ? ee : (z = i.value.paginator) == null ? void 0 : z.perPage) != null ? A : 10), (X = h == null ? void 0 : h.value) != null && X.multiSortMeta && (o.sort = JSON.stringify((B = h == null ? void 0 : h.value) == null ? void 0 : B.multiSortMeta)), f.value && (o.globalSearch = f.value), Object.keys(O.value).length && (o.columnsSearch = JSON.stringify(O.value)), je.Inertia.get(
        `/${t.configs.prefix}/${(U = i.value.resource) == null ? void 0 : U.pluralLabel.toLowerCase()}`,
        o,
        {
          preserveState: !0,
          replace: !0,
          onStart: () => l.value = !0,
          onFinish: () => l.value = !1
        }
      );
    }, b = C([]), V = C([]);
    return He(() => {
      var u, P;
      const { fields: o, paginator: c } = i.value, F = ye();
      V.value = [];
      for (const j of (u = JSON.parse(F.sort)) != null ? u : [])
        V.value.push({
          field: j.field,
          order: j.order
        });
      b.value = [];
      for (const j of (P = c == null ? void 0 : c.data) != null ? P : []) {
        let z = {};
        for (const ee in o) {
          const A = o[ee];
          if (A.relationshipName) {
            const X = A.relationshipName.split(".");
            let B = j;
            for (let U = 0; U < X.length; U++)
              B !== null && (B = B[X[U]]);
            z[A.columnName] = B !== null ? B[A.title] : null;
          } else
            z[A.columnName] = j[A.columnName];
        }
        b.value.push(z);
      }
    }), (o, c) => {
      const F = ve("tooltip");
      return d(), Z(m(Ue), {
        paginatorTemplate: {
          "640px": "PrevPageLink CurrentPageReport NextPageLink",
          default: "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        },
        currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
        ref_key: "dt",
        ref: a,
        value: b.value,
        lazy: !0,
        paginator: !0,
        loading: l.value,
        rows: e.paginator.perPage,
        first: (e.paginator.currentPage - 1) * e.paginator.perPage,
        totalRecords: e.paginator.totalCount,
        rowsPerPageOptions: m(t).configs.rowsPerPageOptions,
        responsiveLayout: "scroll",
        onPage: c[3] || (c[3] = (u) => N(u)),
        removableSort: "",
        sortMode: "multiple",
        multiSortMeta: V.value,
        onSort: c[4] || (c[4] = (u) => w(u)),
        filterDisplay: "row",
        globalFilterFields: ["customerNumber"]
      }, {
        header: R(() => [
          r("div", vi, [
            r("div", null, [
              m(ie) ? (d(), Z(m(ue), {
                key: 0,
                type: "button",
                icon: "pi pi-filter-slash",
                label: "Clear",
                class: "p-button-outlined mb-2",
                onClick: c[0] || (c[0] = (u) => le())
              })) : I("v-if", !0)
            ]),
            r("div", Oi, [
              m(L).length > 0 ? (d(), p("span", xi, [
                Si,
                G(m(ce), {
                  modelValue: m(f),
                  "onUpdate:modelValue": c[1] || (c[1] = (u) => Be(f) ? f.value = u : f = u),
                  placeholder: "Keyword Search",
                  style: { width: "100%" },
                  disabled: m(f) !== null && l.value
                }, null, 8, ["modelValue", "disabled"]),
                m(f) !== null && l.value ? (d(), p("i", ki)) : I("v-if", !0)
              ])) : I("v-if", !0),
              r("div", Ii, [
                m(M).length ? (d(), Z(m(ue), {
                  key: 0,
                  icon: "pi pi-table",
                  class: "p-button-rounded p-button-text",
                  onClick: c[2] || (c[2] = (u) => m(x).show())
                })) : I("v-if", !0),
                G(m(Fe), {
                  appendTo: "#toggleableFields",
                  ref_key: "toggleableMultiSelect",
                  ref: x,
                  class: "hidden",
                  panelClass: "toggleableFields",
                  options: m(M),
                  optionLabel: "header",
                  modelValue: m(K),
                  "onUpdate:modelValue": g
                }, null, 8, ["options", "modelValue"])
              ])
            ])
          ])
        ]),
        loading: R(() => []),
        default: R(() => [
          (d(!0), p(E, null, re(m(v), ([, u]) => (d(), Z(m(qe), {
            field: u.columnName,
            header: u.label,
            key: u.columnName,
            sortable: u.sortable,
            showFilterMenu: !1,
            filterMatchMode: "contains"
          }, Oe({
            body: R((P) => [
              l.value ? (d(), Z(m(Ve), { key: 0 })) : (d(), p(E, { key: 1 }, [
                q(T(P.data[u.columnName]), 1)
              ], 64))
            ]),
            _: 2
          }, [
            u.searchable && !u.isGloballySearchable ? {
              name: "filter",
              fn: R(() => [
                de(G(m(ce), {
                  type: "text",
                  class: "p-column-filter",
                  modelValue: m(O)[u.columnName],
                  "onUpdate:modelValue": (P) => m(O)[u.columnName] = P,
                  onKeydown: Ge((P) => $(u.columnName), ["enter"]),
                  placeholder: `Search by ${u.label}`
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown", "placeholder"]), [
                  [
                    F,
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
          ]), 1032, ["field", "header", "sortable"]))), 128))
        ]),
        _: 1
      }, 8, ["value", "loading", "rows", "first", "totalRecords", "rowsPerPageOptions", "multiSortMeta"]);
    };
  }
});
const Li = /* @__PURE__ */ Se(wi, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Components/Table.vue"]]), Vi = { class: "grid" }, Fi = { class: "col-12" }, Ci = { class: "card" }, Ti = /* @__PURE__ */ xe({
  __name: "Index",
  setup(e) {
    return (t, i) => {
      const n = oe("AppHead");
      return d(), p(E, null, [
        G(n, {
          title: t.$page.props.controller.resource.pluralLabel
        }, null, 8, ["title"]),
        r("div", Vi, [
          r("div", Fi, [
            r("div", Ci, [
              r("h5", null, T(t.$page.props.controller.resource.pluralLabel), 1),
              G(Li, {
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
}), _i = /* @__PURE__ */ Se(Ti, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Index.vue"]]);
export {
  _i as default
};
