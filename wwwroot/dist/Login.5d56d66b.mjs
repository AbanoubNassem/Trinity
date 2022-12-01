import { Z as k, D as g, C as M, U, o as d, c as u, i as h, m as V, n as p, f as y, b as i, t as b, w as z, r as B, T as H, k as w, h as A, O as R, M as N, q as j, N as Z, p as D, P as K, Q as W, u as a, G, F as _, j as S, S as Q, V as J, s as X } from "./main.dc407183.mjs";
import { O as Y, a as O, s as $ } from "./inputtext.esm.f9cb7d7d.mjs";
var q = {
  name: "Password",
  emits: ["update:modelValue", "change", "focus", "blur", "invalid"],
  props: {
    modelValue: String,
    promptLabel: {
      type: String,
      default: null
    },
    mediumRegex: {
      type: String,
      default: "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    },
    strongRegex: {
      type: String,
      default: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
    },
    weakLabel: {
      type: String,
      default: null
    },
    mediumLabel: {
      type: String,
      default: null
    },
    strongLabel: {
      type: String,
      default: null
    },
    feedback: {
      type: Boolean,
      default: !0
    },
    appendTo: {
      type: String,
      default: "body"
    },
    toggleMask: {
      type: Boolean,
      default: !1
    },
    hideIcon: {
      type: String,
      default: "pi pi-eye-slash"
    },
    showIcon: {
      type: String,
      default: "pi pi-eye"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
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
    panelId: {
      type: String,
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
    "aria-labelledby": {
      type: String,
      default: null
    },
    "aria-label": {
      type: String,
      default: null
    }
  },
  data() {
    return {
      overlayVisible: !1,
      meter: null,
      infoText: null,
      focused: !1,
      unmasked: !1
    };
  },
  mediumCheckRegExp: null,
  strongCheckRegExp: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  mounted() {
    this.infoText = this.promptText, this.mediumCheckRegExp = new RegExp(this.mediumRegex), this.strongCheckRegExp = new RegExp(this.strongRegex);
  },
  beforeUnmount() {
    this.unbindResizeListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.overlay && (k.clear(this.overlay), this.overlay = null);
  },
  methods: {
    onOverlayEnter(e) {
      k.set("overlay", e, this.$primevue.config.zIndex.overlay), this.alignOverlay(), this.bindScrollListener(), this.bindResizeListener();
    },
    onOverlayLeave() {
      this.unbindScrollListener(), this.unbindResizeListener(), this.overlay = null;
    },
    onOverlayAfterLeave(e) {
      k.clear(e);
    },
    alignOverlay() {
      this.appendTo === "self" ? g.relativePosition(this.overlay, this.$refs.input.$el) : (this.overlay.style.minWidth = g.getOuterWidth(this.$refs.input.$el) + "px", g.absolutePosition(this.overlay, this.$refs.input.$el));
    },
    testStrength(e) {
      let t = 0;
      return this.strongCheckRegExp.test(e) ? t = 3 : this.mediumCheckRegExp.test(e) ? t = 2 : e.length && (t = 1), t;
    },
    onInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    onFocus(e) {
      this.focused = !0, this.feedback && (this.setPasswordMeter(this.modelValue), this.overlayVisible = !0), this.$emit("focus", e);
    },
    onBlur(e) {
      this.focused = !1, this.feedback && (this.overlayVisible = !1), this.$emit("blur", e);
    },
    onKeyUp(e) {
      if (this.feedback) {
        const t = e.target.value, { meter: l, label: n } = this.checkPasswordStrength(t);
        if (this.meter = l, this.infoText = n, e.code === "Escape") {
          this.overlayVisible && (this.overlayVisible = !1);
          return;
        }
        this.overlayVisible || (this.overlayVisible = !0);
      }
    },
    setPasswordMeter() {
      if (!this.modelValue)
        return;
      const { meter: e, label: t } = this.checkPasswordStrength(this.modelValue);
      this.meter = e, this.infoText = t, this.overlayVisible || (this.overlayVisible = !0);
    },
    checkPasswordStrength(e) {
      let t = null, l = null;
      switch (this.testStrength(e)) {
        case 1:
          t = this.weakText, l = {
            strength: "weak",
            width: "33.33%"
          };
          break;
        case 2:
          t = this.mediumText, l = {
            strength: "medium",
            width: "66.66%"
          };
          break;
        case 3:
          t = this.strongText, l = {
            strength: "strong",
            width: "100%"
          };
          break;
        default:
          t = this.promptText, l = null;
          break;
      }
      return { label: t, meter: l };
    },
    onInvalid(e) {
      this.$emit("invalid", e);
    },
    bindScrollListener() {
      this.scrollHandler || (this.scrollHandler = new M(this.$refs.input.$el, () => {
        this.overlayVisible && (this.overlayVisible = !1);
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener() {
      this.resizeListener || (this.resizeListener = () => {
        this.overlayVisible && !g.isTouchDevice() && (this.overlayVisible = !1);
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    overlayRef(e) {
      this.overlay = e;
    },
    onMaskToggle() {
      this.unmasked = !this.unmasked;
    },
    onOverlayClick(e) {
      Y.emit("overlay-click", {
        originalEvent: e,
        target: this.$el
      });
    }
  },
  computed: {
    containerClass() {
      return [
        "p-password p-component p-inputwrapper",
        {
          "p-inputwrapper-filled": this.filled,
          "p-inputwrapper-focus": this.focused,
          "p-input-icon-right": this.toggleMask
        }
      ];
    },
    inputFieldClass() {
      return [
        "p-password-input",
        this.inputClass,
        {
          "p-disabled": this.disabled
        }
      ];
    },
    panelStyleClass() {
      return [
        "p-password-panel p-component",
        this.panelClass,
        {
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === !1
        }
      ];
    },
    toggleIconClass() {
      return this.unmasked ? this.hideIcon : this.showIcon;
    },
    strengthClass() {
      return `p-password-strength ${this.meter ? this.meter.strength : ""}`;
    },
    inputType() {
      return this.unmasked ? "text" : "password";
    },
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    weakText() {
      return this.weakLabel || this.$primevue.config.locale.weak;
    },
    mediumText() {
      return this.mediumLabel || this.$primevue.config.locale.medium;
    },
    strongText() {
      return this.strongLabel || this.$primevue.config.locale.strong;
    },
    promptText() {
      return this.promptLabel || this.$primevue.config.locale.passwordPrompt;
    },
    panelUniqueId() {
      return U() + "_panel";
    }
  },
  components: {
    PInputText: O,
    Portal: $
  }
};
const ee = {
  class: "p-hidden-accessible",
  "aria-live": "polite"
}, le = ["id"], te = { class: "p-password-meter" }, se = { class: "p-password-info" };
function ie(e, t, l, n, r, s) {
  const o = B("PInputText"), v = B("Portal");
  return d(), u("div", {
    class: p(s.containerClass)
  }, [
    h(o, V({
      ref: "input",
      id: l.inputId,
      type: s.inputType,
      class: s.inputFieldClass,
      style: l.inputStyle,
      value: l.modelValue,
      "aria-labelledby": e.ariaLabelledby,
      "aria-label": e.ariaLabel,
      "aria-controls": l.panelProps && l.panelProps.id || l.panelId || s.panelUniqueId,
      "aria-expanded": r.overlayVisible,
      "aria-haspopup": !0,
      placeholder: l.placeholder,
      required: l.required,
      onInput: s.onInput,
      onFocus: s.onFocus,
      onBlur: s.onBlur,
      onKeyup: s.onKeyUp,
      onInvalid: s.onInvalid
    }, l.inputProps), null, 16, ["id", "type", "class", "style", "value", "aria-labelledby", "aria-label", "aria-controls", "aria-expanded", "placeholder", "required", "onInput", "onFocus", "onBlur", "onKeyup", "onInvalid"]),
    l.toggleMask ? (d(), u("i", {
      key: 0,
      class: p(s.toggleIconClass),
      onClick: t[0] || (t[0] = (...m) => s.onMaskToggle && s.onMaskToggle(...m))
    }, null, 2)) : y("", !0),
    i("span", ee, b(r.infoText), 1),
    h(v, { appendTo: l.appendTo }, {
      default: z(() => [
        h(H, {
          name: "p-connected-overlay",
          onEnter: s.onOverlayEnter,
          onLeave: s.onOverlayLeave,
          onAfterLeave: s.onOverlayAfterLeave
        }, {
          default: z(() => [
            r.overlayVisible ? (d(), u("div", V({
              key: 0,
              ref: s.overlayRef,
              id: l.panelId || s.panelUniqueId,
              class: s.panelStyleClass,
              style: l.panelStyle,
              onClick: t[1] || (t[1] = (...m) => s.onOverlayClick && s.onOverlayClick(...m))
            }, l.panelProps), [
              w(e.$slots, "header"),
              w(e.$slots, "content", {}, () => [
                i("div", te, [
                  i("div", {
                    class: p(s.strengthClass),
                    style: A({ width: r.meter ? r.meter.width : "" })
                  }, null, 6)
                ]),
                i("div", se, b(r.infoText), 1)
              ]),
              w(e.$slots, "footer")
            ], 16, le)) : y("", !0)
          ]),
          _: 3
        }, 8, ["onEnter", "onLeave", "onAfterLeave"])
      ]),
      _: 3
    }, 8, ["appendTo"])
  ], 2);
}
function ne(e, t) {
  t === void 0 && (t = {});
  var l = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
    r.type = "text/css", l === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
  }
}
var ae = `
.p-password {
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}
.p-password-panel {
    position: absolute;
    top: 0;
    left: 0;
}
.p-password .p-password-panel {
    min-width: 100%;
}
.p-password-meter {
    height: 10px;
}
.p-password-strength {
    height: 100%;
    width: 0;
    -webkit-transition: width 1s ease-in-out;
    transition: width 1s ease-in-out;
}
.p-fluid .p-password {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
`;
ne(ae);
q.render = ie;
var F = {
  name: "Checkbox",
  emits: ["click", "update:modelValue", "change", "input", "focus", "blur"],
  props: {
    value: null,
    modelValue: null,
    binary: Boolean,
    name: {
      type: String,
      default: null
    },
    trueValue: {
      type: null,
      default: !0
    },
    falseValue: {
      type: null,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    required: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
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
    "aria-labelledby": {
      type: String,
      default: null
    },
    "aria-label": {
      type: String,
      default: null
    }
  },
  data() {
    return {
      focused: !1
    };
  },
  methods: {
    onClick(e) {
      if (!this.disabled) {
        let t;
        this.binary ? t = this.checked ? this.falseValue : this.trueValue : this.checked ? t = this.modelValue.filter((l) => !R.equals(l, this.value)) : t = this.modelValue ? [...this.modelValue, this.value] : [this.value], this.$emit("click", e), this.$emit("update:modelValue", t), this.$emit("change", e), this.$emit("input", t), this.$refs.input.focus();
      }
    },
    onFocus(e) {
      this.focused = !0, this.$emit("focus", e);
    },
    onBlur(e) {
      this.focused = !1, this.$emit("blur", e);
    }
  },
  computed: {
    checked() {
      return this.binary ? this.modelValue === this.trueValue : R.contains(this.value, this.modelValue);
    },
    containerClass() {
      return [
        "p-checkbox p-component",
        {
          "p-checkbox-checked": this.checked,
          "p-checkbox-disabled": this.disabled,
          "p-checkbox-focused": this.focused
        }
      ];
    }
  }
};
const re = { class: "p-hidden-accessible" }, oe = ["id", "value", "name", "checked", "tabindex", "disabled", "readonly", "required", "aria-labelledby", "aria-label"];
function de(e, t, l, n, r, s) {
  return d(), u("div", {
    class: p(s.containerClass),
    onClick: t[2] || (t[2] = (o) => s.onClick(o))
  }, [
    i("div", re, [
      i("input", V({
        ref: "input",
        id: l.inputId,
        type: "checkbox",
        value: l.value,
        class: l.inputClass,
        style: l.inputStyle,
        name: l.name,
        checked: s.checked,
        tabindex: l.tabindex,
        disabled: l.disabled,
        readonly: l.readonly,
        required: l.required,
        "aria-labelledby": e.ariaLabelledby,
        "aria-label": e.ariaLabel,
        onFocus: t[0] || (t[0] = (o) => s.onFocus(o)),
        onBlur: t[1] || (t[1] = (o) => s.onBlur(o))
      }, l.inputProps), null, 16, oe)
    ]),
    i("div", {
      ref: "box",
      class: p(["p-checkbox-box", { "p-highlight": s.checked, "p-disabled": l.disabled, "p-focus": r.focused }])
    }, [
      i("span", {
        class: p(["p-checkbox-icon", { "pi pi-check": s.checked }])
      }, null, 2)
    ], 2)
  ], 2);
}
F.render = de;
const ue = () => {
  const { props: e } = N(), t = j({
    ...e.value.controller,
    ...e.value.sharedProps
  });
  return Z(e, (l) => {
    t.value = {
      ...l.controller,
      ...l.sharedProps
    };
  }), t;
}, x = (e) => (Q("data-v-ad446c4f"), e = e(), J(), e), ce = { class: "surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden" }, pe = {
  class: "grid justify-content-center p-2 lg:p-0",
  style: { "min-width": "80%" }
}, he = { class: "col-12 mt-5 xl:mt-0 text-center" }, me = ["src"], fe = {
  class: "col-12 xl:col-6",
  style: { "border-radius": "56px", padding: "0.3rem", background: `linear-gradient(
            180deg,
            var(--primary-color),
            rgba(33, 150, 243, 0) 30%
          )` }
}, ye = {
  class: "h-full w-full m-0 py-7 px-4",
  style: { "border-radius": "53px", background: `linear-gradient(
              180deg,
              var(--surface-50) 38.9%,
              var(--surface-0)
            )` }
}, be = ["onSubmit"], ve = { class: "field" }, ge = /* @__PURE__ */ x(() => /* @__PURE__ */ i("label", {
  for: "email",
  class: "block text-900 text-xl font-medium mb-2"
}, "Email", -1)), xe = {
  key: 0,
  id: "email-help",
  class: "p-error"
}, ke = { class: "field" }, we = /* @__PURE__ */ x(() => /* @__PURE__ */ i("label", {
  for: "password1",
  class: "block text-900 font-medium text-xl mb-2"
}, "Password", -1)), _e = {
  key: 0,
  id: "password-help",
  class: "p-error"
}, Se = { class: "flex align-items-center justify-content-between mb-5" }, Ve = { class: "flex align-items-center" }, Ce = /* @__PURE__ */ x(() => /* @__PURE__ */ i("label", { for: "rememberMe" }, "Remember me", -1)), Le = /* @__PURE__ */ x(() => /* @__PURE__ */ i("a", {
  class: "font-medium no-underline ml-2 text-right cursor-pointer",
  style: { color: "var(--primary-color)" }
}, "Forgot password?", -1)), Pe = { class: "field" }, Ie = {
  key: 0,
  class: "p-error"
}, Te = {
  layout: null
}, Ee = /* @__PURE__ */ D({
  ...Te,
  __name: "Login",
  setup(e) {
    const t = K(), l = ue(), n = W({
      email: null,
      password: null,
      remember: !1
    });
    function r() {
      n.post("", {
        onFinish: () => {
        }
      });
    }
    return (s, o) => {
      var v, m, C, L, P, I, T, E;
      return d(), u("div", ce, [
        i("div", pe, [
          i("div", he, [
            i("img", {
              src: a(t),
              alt: "Trinity Admin Panel",
              class: "mb-5",
              style: { width: "81px", height: "60px" }
            }, null, 8, me)
          ]),
          i("div", fe, [
            i("div", ye, [
              i("form", {
                onSubmit: G(r, ["prevent"]),
                class: "w-full md:w-10 mx-auto"
              }, [
                i("div", ve, [
                  ge,
                  h(a(O), {
                    id: "email",
                    modelValue: a(n).email,
                    "onUpdate:modelValue": o[0] || (o[0] = (c) => a(n).email = c),
                    name: "email",
                    type: "email",
                    class: p(["w-full mb-3", { "p-invalid": (v = a(l).errors) == null ? void 0 : v.value.Email }]),
                    placeholder: "Email",
                    style: { padding: "1rem" },
                    required: ""
                  }, null, 8, ["modelValue", "class"]),
                  (m = a(l).errors) != null && m.value.Email ? (d(), u("div", xe, [
                    (d(!0), u(_, null, S((C = a(l).errors) == null ? void 0 : C.value.Email, (c, f) => (d(), u("div", { key: f }, b(c), 1))), 128))
                  ])) : y("", !0)
                ]),
                i("div", ke, [
                  we,
                  h(a(q), {
                    id: "password1",
                    modelValue: a(n).password,
                    "onUpdate:modelValue": o[1] || (o[1] = (c) => a(n).password = c),
                    name: "password",
                    placeholder: "Password",
                    toggleMask: !0,
                    class: p(["w-full mb-3", { "p-invalid": (L = a(l).errors) == null ? void 0 : L.value.Password }]),
                    inputClass: "w-full",
                    inputStyle: "padding:1rem",
                    required: ""
                  }, null, 8, ["modelValue", "class"]),
                  (P = a(l).errors) != null && P.value.Password ? (d(), u("div", _e, [
                    (d(!0), u(_, null, S((I = a(l).errors) == null ? void 0 : I.value.Password, (c, f) => (d(), u("div", { key: f }, b(c), 1))), 128))
                  ])) : y("", !0)
                ]),
                i("div", Se, [
                  i("div", Ve, [
                    h(a(F), {
                      id: "rememberMe",
                      modelValue: a(n).remember,
                      "onUpdate:modelValue": o[2] || (o[2] = (c) => a(n).remember = c),
                      binary: !0,
                      name: "remember",
                      class: "mr-2"
                    }, null, 8, ["modelValue"]),
                    Ce
                  ]),
                  Le
                ]),
                i("div", Pe, [
                  (T = a(l).errors) != null && T.value[""] ? (d(), u("div", Ie, [
                    (d(!0), u(_, null, S((E = a(l).errors) == null ? void 0 : E.value[""], (c, f) => (d(), u("div", { key: f }, b(c), 1))), 128))
                  ])) : y("", !0)
                ]),
                h(a(X), {
                  label: "Sign In",
                  type: "submit",
                  class: "w-full p-3 text-xl",
                  iconPos: "right",
                  icon: { "pi pi-spin pi-spinner text-xl": a(n).processing },
                  disabled: a(n).processing
                }, null, 8, ["icon", "disabled"])
              ], 40, be)
            ])
          ])
        ])
      ]);
    };
  }
});
const ze = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [n, r] of t)
    l[n] = r;
  return l;
}, Oe = /* @__PURE__ */ ze(Ee, [["__scopeId", "data-v-ad446c4f"]]);
export {
  Oe as default
};
