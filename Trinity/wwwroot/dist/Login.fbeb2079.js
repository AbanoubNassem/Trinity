import { r as a, q as k, O as m, h as Le, c as C, z as De, T as Ve, f as _, p as Pe, b as Ae, Z, w as re, P as A, C as We, s as je, m as $e, u as Fe, a as Me, L as _e, E as He, K as Ke, j as i, F as Ue, H as Be, G as qe, B as Ze } from "./main.74d2364d.js";
function W() {
  return W = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
    }
    return e;
  }, W.apply(this, arguments);
}
function ze(e) {
  if (Array.isArray(e))
    return e;
}
function Je(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var l, f, d, c, s = [], u = !0, v = !1;
    try {
      if (d = (t = t.call(e)).next, n === 0) {
        if (Object(t) !== t)
          return;
        u = !1;
      } else
        for (; !(u = (l = d.call(t)).done) && (s.push(l.value), s.length !== n); u = !0)
          ;
    } catch (N) {
      v = !0, f = N;
    } finally {
      try {
        if (!u && t.return != null && (c = t.return(), Object(c) !== c))
          return;
      } finally {
        if (v)
          throw f;
      }
    }
    return s;
  }
}
function ne(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, l = new Array(n); t < n; t++)
    l[t] = e[t];
  return l;
}
function Xe(e, n) {
  if (!!e) {
    if (typeof e == "string")
      return ne(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ne(e, n);
  }
}
function Ye() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ge(e, n) {
  return ze(e) || Je(e, n) || Xe(e, n) || Ye();
}
var H = /* @__PURE__ */ a.exports.memo(/* @__PURE__ */ a.exports.forwardRef(function(e, n) {
  var t = a.exports.useState(!1), l = Ge(t, 2), f = l[0], d = l[1], c = a.exports.useRef(null), s = a.exports.useRef(e.inputRef), u = function(b) {
    if (!e.disabled && !e.readOnly && e.onChange) {
      var $ = T(), F = b.target instanceof HTMLDivElement || b.target instanceof HTMLSpanElement, M = b.target === s.current, B = F && b.target.checked !== $;
      if (M || B) {
        var p = $ ? e.falseValue : e.trueValue;
        e.onChange({
          originalEvent: b,
          value: e.value,
          checked: p,
          stopPropagation: function() {
          },
          preventDefault: function() {
          },
          target: {
            type: "checkbox",
            name: e.name,
            id: e.id,
            value: e.value,
            checked: p
          }
        });
      }
      k.focus(s.current), b.preventDefault();
    }
  }, v = function() {
    d(!0);
  }, N = function() {
    d(!1);
  }, E = function(b) {
    (b.code === "Space" || b.key === " ") && u(b);
  }, T = function() {
    return e.checked === e.trueValue;
  };
  a.exports.useImperativeHandle(n, function() {
    return {
      props: e,
      focus: function() {
        return k.focus(s.current);
      },
      getElement: function() {
        return c.current;
      },
      getInput: function() {
        return s.current;
      }
    };
  }), a.exports.useEffect(function() {
    m.combinedRefs(s, e.inputRef);
  }, [s, e.inputRef]), Le(function() {
    s.current.checked = T();
  }, [e.checked, e.trueValue]);
  var h = T(), g = m.isNotEmpty(e.tooltip), S = m.findDiffKeys(e, H.defaultProps), I = m.reduceKeys(S, k.ARIA_PROPS), P = C("p-checkbox p-component", {
    "p-checkbox-checked": h,
    "p-checkbox-disabled": e.disabled,
    "p-checkbox-focused": f
  }, e.className), U = C("p-checkbox-box", {
    "p-highlight": h,
    "p-disabled": e.disabled,
    "p-focus": f
  }), j = De.getJSXIcon(h ? e.icon : "", {
    className: "p-checkbox-icon p-c"
  }, {
    props: e,
    checked: h
  });
  return /* @__PURE__ */ a.exports.createElement(a.exports.Fragment, null, /* @__PURE__ */ a.exports.createElement("div", W({
    ref: c,
    id: e.id,
    className: P,
    style: e.style
  }, S, {
    onClick: u,
    onContextMenu: e.onContextMenu,
    onMouseDown: e.onMouseDown
  }), /* @__PURE__ */ a.exports.createElement("div", {
    className: "p-hidden-accessible"
  }, /* @__PURE__ */ a.exports.createElement("input", W({
    ref: s,
    type: "checkbox",
    id: e.inputId,
    name: e.name,
    tabIndex: e.tabIndex,
    defaultChecked: h,
    onFocus: v,
    onBlur: N,
    onKeyDown: E,
    disabled: e.disabled,
    readOnly: e.readOnly,
    required: e.required
  }, I))), /* @__PURE__ */ a.exports.createElement("div", {
    className: U
  }, j)), g && /* @__PURE__ */ a.exports.createElement(Ve, W({
    target: c,
    content: e.tooltip
  }, e.tooltipOptions)));
}));
H.displayName = "Checkbox";
H.defaultProps = {
  __TYPE: "Checkbox",
  id: null,
  inputRef: null,
  inputId: null,
  value: null,
  name: null,
  checked: !1,
  trueValue: !0,
  falseValue: !1,
  style: null,
  className: null,
  disabled: !1,
  required: !1,
  readOnly: !1,
  tabIndex: null,
  icon: "pi pi-check",
  tooltip: null,
  tooltipOptions: null,
  onChange: null,
  onMouseDown: null,
  onContextMenu: null
};
function z() {
  return z = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
    }
    return e;
  }, z.apply(this, arguments);
}
function Qe(e) {
  if (Array.isArray(e))
    return e;
}
function et(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var l, f, d, c, s = [], u = !0, v = !1;
    try {
      if (d = (t = t.call(e)).next, n === 0) {
        if (Object(t) !== t)
          return;
        u = !1;
      } else
        for (; !(u = (l = d.call(t)).done) && (s.push(l.value), s.length !== n); u = !0)
          ;
    } catch (N) {
      v = !0, f = N;
    } finally {
      try {
        if (!u && t.return != null && (c = t.return(), Object(c) !== c))
          return;
      } finally {
        if (v)
          throw f;
      }
    }
    return s;
  }
}
function ae(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, l = new Array(n); t < n; t++)
    l[t] = e[t];
  return l;
}
function tt(e, n) {
  if (!!e) {
    if (typeof e == "string")
      return ae(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ae(e, n);
  }
}
function nt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V(e, n) {
  return Qe(e) || et(e, n) || tt(e, n) || nt();
}
var K = /* @__PURE__ */ a.exports.memo(/* @__PURE__ */ a.exports.forwardRef(function(e, n) {
  var t = e.promptLabel || _("passwordPrompt"), l = e.weakLabel || _("weak"), f = e.mediumLabel || _("medium"), d = e.strongLabel || _("strong"), c = a.exports.useState(!1), s = V(c, 2), u = s[0], v = s[1], N = a.exports.useState(null), E = V(N, 2), T = E[0], h = E[1], g = a.exports.useState(t), S = V(g, 2), I = S[0], P = S[1], U = a.exports.useState(!1), j = V(U, 2), w = j[0], b = j[1], $ = a.exports.useState(!1), F = V($, 2), M = F[0], B = F[1], p = a.exports.useRef(null), x = a.exports.useRef(null), R = a.exports.useRef(e.inputRef), J = a.exports.useRef(new RegExp(e.mediumRegex)), X = a.exports.useRef(new RegExp(e.strongRegex)), le = M ? "text" : "password", ie = Pe({
    target: p,
    overlay: x,
    listener: function(r, y) {
      var O = y.valid;
      O && te();
    },
    when: u
  }), Y = V(ie, 2), se = Y[0], oe = Y[1], G = R.current && R.current.value, q = a.exports.useMemo(function() {
    return m.isNotEmpty(e.value) || m.isNotEmpty(e.defaultValue) || m.isNotEmpty(G);
  }, [e.value, e.defaultValue, G]), ue = function() {
    if (T) {
      var r = null;
      switch (T.strength) {
        case "weak":
          r = l;
          break;
        case "medium":
          r = f;
          break;
        case "strong":
          r = d;
          break;
      }
      r && I !== r && P(r);
    } else
      I !== t && P(t);
  }, ce = function(r) {
    e.feedback && $e.emit("overlay-click", {
      originalEvent: r,
      target: p.current
    });
  }, Q = function() {
    B(function(r) {
      return !r;
    });
  }, ee = function() {
    ue(), v(!0);
  }, te = function() {
    v(!1);
  }, me = function() {
    R.current && k.alignOverlay(x.current, R.current.parentElement, e.appendTo || A.appendTo);
  }, fe = function() {
    Z.set("overlay", x.current, A.autoZIndex, A.zIndex.overlay), me();
  }, de = function() {
    se(), e.onShow && e.onShow();
  }, ge = function() {
    oe();
  }, be = function() {
    Z.clear(x.current), e.onHide && e.onHide();
  }, ve = function(r) {
    b(!0), e.feedback && ee(), e.onFocus && e.onFocus(r);
  }, ye = function(r) {
    b(!1), e.feedback && te(), e.onBlur && e.onBlur(r);
  }, pe = function(r) {
    var y = r.keyCode || r.which;
    if (e.feedback) {
      var O = r.target.value, L = null, D = null;
      switch (xe(O)) {
        case 1:
          L = l, D = {
            strength: "weak",
            width: "33.33%"
          };
          break;
        case 2:
          L = f, D = {
            strength: "medium",
            width: "66.66%"
          };
          break;
        case 3:
          L = d, D = {
            strength: "strong",
            width: "100%"
          };
          break;
        default:
          L = t, D = null;
          break;
      }
      h(D), P(L), !!y && !u && ee();
    }
    e.onKeyUp && e.onKeyUp(r);
  }, he = function(r, y) {
    e.onInput && e.onInput(r, y), e.onChange || (m.isNotEmpty(r.target.value) ? k.addClass(p.current, "p-inputwrapper-filled") : k.removeClass(p.current, "p-inputwrapper-filled"));
  }, xe = function(r) {
    return X.current.test(r) ? 3 : J.current.test(r) ? 2 : r.length ? 1 : 0;
  };
  a.exports.useImperativeHandle(n, function() {
    return {
      props: e,
      focus: function() {
        return k.focus(R.current);
      },
      getElement: function() {
        return p.current;
      },
      getOverlay: function() {
        return x.current;
      },
      getInput: function() {
        return R.current;
      }
    };
  }), a.exports.useEffect(function() {
    m.combinedRefs(R, e.inputRef);
  }, [R, e.inputRef]), a.exports.useEffect(function() {
    J.current = new RegExp(e.mediumRegex);
  }, [e.mediumRegex]), a.exports.useEffect(function() {
    X.current = new RegExp(e.strongRegex);
  }, [e.strongRegex]), a.exports.useEffect(function() {
    !q && k.hasClass(p.current, "p-inputwrapper-filled") && k.removeClass(p.current, "p-inputwrapper-filled");
  }, [q]), Ae(function() {
    Z.clear(x.current);
  });
  var Ne = function() {
    if (e.toggleMask) {
      var r = M ? "pi pi-eye-slash" : "pi pi-eye", y = /* @__PURE__ */ a.exports.createElement("i", {
        className: r,
        onClick: Q
      });
      if (e.icon) {
        var O = {
          onClick: Q,
          className: r,
          element: y,
          props: e
        };
        y = m.getJSXElement(e.icon, O);
      }
      return y;
    }
    return null;
  }, Te = function() {
    var r = C("p-password-panel p-component", e.panelClassName, {
      "p-input-filled": A.inputStyle === "filled",
      "p-ripple-disabled": A.ripple === !1
    }), y = T || {
      strength: "",
      width: "0%"
    }, O = y.strength, L = y.width, D = m.getJSXElement(e.header, e), Ie = m.getJSXElement(e.footer, e), Oe = e.content ? m.getJSXElement(e.content, e) : /* @__PURE__ */ a.exports.createElement(a.exports.Fragment, null, /* @__PURE__ */ a.exports.createElement("div", {
      className: "p-password-meter"
    }, /* @__PURE__ */ a.exports.createElement("div", {
      className: "p-password-strength ".concat(O),
      style: {
        width: L
      }
    })), /* @__PURE__ */ a.exports.createElement("div", {
      className: "p-password-info ".concat(O)
    }, I)), Ce = /* @__PURE__ */ a.exports.createElement(We, {
      nodeRef: x,
      classNames: "p-connected-overlay",
      in: u,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: e.transitionOptions,
      unmountOnExit: !0,
      onEnter: fe,
      onEntered: de,
      onExit: ge,
      onExited: be
    }, /* @__PURE__ */ a.exports.createElement("div", {
      ref: x,
      className: r,
      style: e.panelStyle,
      onClick: ce
    }, D, Oe, Ie));
    return /* @__PURE__ */ a.exports.createElement(je, {
      element: Ce,
      appendTo: e.appendTo
    });
  }, we = C("p-password p-component p-inputwrapper", {
    "p-inputwrapper-filled": q,
    "p-inputwrapper-focus": w,
    "p-input-icon-right": e.toggleMask
  }, e.className), Re = C("p-password-input", e.inputClassName), ke = m.findDiffKeys(e, K.defaultProps), Ee = Ne(), Se = Te();
  return /* @__PURE__ */ a.exports.createElement("div", {
    ref: p,
    id: e.id,
    className: we,
    style: e.style
  }, /* @__PURE__ */ a.exports.createElement(re, z({
    ref: R,
    id: e.inputId
  }, ke, {
    type: le,
    className: Re,
    style: e.inputStyle,
    onFocus: ve,
    onBlur: ye,
    onKeyUp: pe,
    onInput: he,
    tooltip: e.tooltip,
    tooltipOptions: e.tooltipOptions
  })), Ee, Se);
}));
K.displayName = "Password";
K.defaultProps = {
  __TYPE: "Password",
  id: null,
  inputId: null,
  inputRef: null,
  promptLabel: null,
  weakLabel: null,
  mediumLabel: null,
  strongLabel: null,
  mediumRegex: "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
  strongRegex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
  feedback: !0,
  toggleMask: !1,
  appendTo: null,
  header: null,
  content: null,
  footer: null,
  icon: null,
  tooltip: null,
  tooltipOptions: null,
  style: null,
  className: null,
  inputStyle: null,
  inputClassName: null,
  panelStyle: null,
  panelClassName: null,
  transitionOptions: null,
  onInput: null,
  onShow: null,
  onHide: null
};
const at = () => {
  const e = Fe(), { errors: n, data: t } = Me(), [l, f] = a.exports.useState(""), [d, c] = a.exports.useState(!1), { layoutConfig: s } = a.exports.useContext(_e), u = He(), v = C("surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden", { "p-input-filled": s.inputStyle === "filled" }), { data: N, setData: E, submit: T, processing: h } = Ke({
    email: "",
    password: "",
    remember: !1
  });
  return a.exports.useEffect(() => {
    t && (location.href = String(t));
  }, [t]), /* @__PURE__ */ i(Ue, {
    children: [
      /* @__PURE__ */ i(Be, {}, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i("div", {
        className: v,
        children: /* @__PURE__ */ i("div", {
          className: "flex flex-column align-items-center justify-content-center",
          children: [
            /* @__PURE__ */ i("img", {
              src: u,
              alt: e.title,
              className: "mb-5 w-6rem flex-shrink-0"
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
              lineNumber: 42,
              columnNumber: 21
            }, globalThis),
            /* @__PURE__ */ i("div", {
              style: {
                borderRadius: "56px",
                padding: "0.3rem",
                background: "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"
              },
              children: /* @__PURE__ */ i("form", {
                className: "w-full surface-card py-8 px-5 sm:px-8",
                style: { borderRadius: "53px" },
                onSubmit: (g) => {
                  g.preventDefault(), T(qe.POST, "");
                },
                children: /* @__PURE__ */ i("div", {
                  children: [
                    /* @__PURE__ */ i("div", {
                      className: "field",
                      children: [
                        /* @__PURE__ */ i("label", {
                          htmlFor: "email1",
                          className: "block text-900 text-xl font-medium mb-2",
                          children: "Email"
                        }, void 0, !1, {
                          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                          lineNumber: 64,
                          columnNumber: 37
                        }, globalThis),
                        /* @__PURE__ */ i(re, {
                          type: "email",
                          required: !0,
                          placeholder: "Email address",
                          className: C("w-full md:w-30rem mb-3", { "p-invalid": n.email }),
                          value: N.email,
                          onChange: (g) => E("email", g.target.value),
                          style: { padding: "1rem" }
                        }, void 0, !1, {
                          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                          lineNumber: 70,
                          columnNumber: 37
                        }, globalThis),
                        n.email && /* @__PURE__ */ i("small", {
                          className: "p-error w-full block md:w-30rem",
                          children: n.email
                        }, void 0, !1, {
                          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                          lineNumber: 79,
                          columnNumber: 54
                        }, globalThis)
                      ]
                    }, void 0, !0, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                      lineNumber: 63,
                      columnNumber: 33
                    }, globalThis),
                    /* @__PURE__ */ i("div", {
                      className: "field",
                      children: [
                        /* @__PURE__ */ i("label", {
                          className: "block text-900 font-medium text-xl mb-2",
                          children: "Password"
                        }, void 0, !1, {
                          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                          lineNumber: 82,
                          columnNumber: 37
                        }, globalThis),
                        /* @__PURE__ */ i(K, {
                          value: l,
                          onChange: (g) => {
                            f(g.target.value), E("password", g.target.value);
                          },
                          placeholder: "Password",
                          type: "password",
                          required: !0,
                          toggleMask: !0,
                          className: C("w-full mb-3", { "p-invalid": n.password }),
                          inputClassName: "w-full p-3 md:w-30rem"
                        }, void 0, !1, {
                          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                          lineNumber: 83,
                          columnNumber: 37
                        }, globalThis),
                        n.password && /* @__PURE__ */ i("small", {
                          className: "p-error w-full block md:w-30rem",
                          children: n.password
                        }, void 0, !1, {
                          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                          lineNumber: 96,
                          columnNumber: 57
                        }, globalThis)
                      ]
                    }, void 0, !0, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                      lineNumber: 81,
                      columnNumber: 33
                    }, globalThis),
                    /* @__PURE__ */ i("div", {
                      className: "flex align-items-center justify-content-between mb-5 gap-5",
                      children: [
                        /* @__PURE__ */ i("div", {
                          className: "flex align-items-center",
                          children: [
                            /* @__PURE__ */ i(H, {
                              checked: d,
                              onChange: (g) => {
                                var S, I;
                                c((S = g.checked) != null ? S : !1), E("remember", (I = g.checked) != null ? I : !1);
                              },
                              className: "mr-2"
                            }, void 0, !1, {
                              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                              lineNumber: 100,
                              columnNumber: 41
                            }, globalThis),
                            /* @__PURE__ */ i("label", {
                              htmlFor: "rememberme1",
                              children: "Remember me"
                            }, void 0, !1, {
                              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                              lineNumber: 108,
                              columnNumber: 41
                            }, globalThis)
                          ]
                        }, void 0, !0, {
                          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                          lineNumber: 99,
                          columnNumber: 37
                        }, globalThis),
                        /* @__PURE__ */ i("a", {
                          className: "font-medium no-underline ml-2 text-right cursor-pointer",
                          style: { color: "var(--primary-color)" },
                          children: "Forgot password?"
                        }, void 0, !1, {
                          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                          lineNumber: 110,
                          columnNumber: 37
                        }, globalThis)
                      ]
                    }, void 0, !0, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                      lineNumber: 98,
                      columnNumber: 33
                    }, globalThis),
                    /* @__PURE__ */ i(Ze, {
                      label: "Sign In",
                      className: "w-full p-3 text-xl",
                      type: "submit",
                      loading: h,
                      disabled: h
                    }, void 0, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                      lineNumber: 118,
                      columnNumber: 33
                    }, globalThis)
                  ]
                }, void 0, !0, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                  lineNumber: 62,
                  columnNumber: 29
                }, globalThis)
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
                lineNumber: 54,
                columnNumber: 25
              }, globalThis)
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
              lineNumber: 47,
              columnNumber: 21
            }, globalThis)
          ]
        }, void 0, !0, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Login.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, globalThis);
};
at.layout = null;
export {
  at as default
};
