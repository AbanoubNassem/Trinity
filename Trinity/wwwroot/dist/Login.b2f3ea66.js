import { r as n, m as S, O as i, d as $e, c as N, E as Me, y as Fe, h as V, q as De, o as _e, Z as X, z as le, P as F, C as Be, x as He, p as Ue, u as Ve, a as Ke, L as qe, G as Ze, _ as ze, j as L, F as Je, b as f, H as Xe, B as We } from "./main.8650d7d3.js";
function D() {
  return D = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, D.apply(this, arguments);
}
function Ye(t) {
  if (Array.isArray(t))
    return t;
}
function Ge(t, r) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var o, m, v, c, p = [], l = !0, d = !1;
    try {
      if (v = (e = e.call(t)).next, r === 0) {
        if (Object(e) !== e)
          return;
        l = !1;
      } else
        for (; !(l = (o = v.call(e)).done) && (p.push(o.value), p.length !== r); l = !0)
          ;
    } catch (x) {
      d = !0, m = x;
    } finally {
      try {
        if (!l && e.return != null && (c = e.return(), Object(c) !== c))
          return;
      } finally {
        if (d)
          throw m;
      }
    }
    return p;
  }
}
function ae(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var e = 0, o = new Array(r); e < r; e++)
    o[e] = t[e];
  return o;
}
function Qe(t, r) {
  if (!!t) {
    if (typeof t == "string")
      return ae(t, r);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return ae(t, r);
  }
}
function et() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tt(t, r) {
  return Ye(t) || Ge(t, r) || Qe(t, r) || et();
}
var K = {
  defaultProps: {
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
    onContextMenu: null,
    children: void 0
  },
  getProps: function(r) {
    return i.getMergedProps(r, K.defaultProps);
  },
  getOtherProps: function(r) {
    return i.getDiffProps(r, K.defaultProps);
  }
}, se = /* @__PURE__ */ n.exports.memo(/* @__PURE__ */ n.exports.forwardRef(function(t, r) {
  var e = K.getProps(t), o = n.exports.useState(!1), m = tt(o, 2), v = m[0], c = m[1], p = n.exports.useRef(null), l = n.exports.useRef(e.inputRef), d = function(g) {
    if (!e.disabled && !e.readOnly && e.onChange) {
      var B = b(), H = g.target instanceof HTMLDivElement || g.target instanceof HTMLSpanElement, U = g.target === l.current, z = H && g.target.checked !== B;
      if (U || z) {
        var y = B ? e.falseValue : e.trueValue;
        e.onChange({
          originalEvent: g,
          value: e.value,
          checked: y,
          stopPropagation: function() {
          },
          preventDefault: function() {
          },
          target: {
            type: "checkbox",
            name: e.name,
            id: e.id,
            value: e.value,
            checked: y
          }
        });
      }
      S.focus(l.current), g.preventDefault();
    }
  }, x = function() {
    c(!0);
  }, C = function() {
    c(!1);
  }, T = function(g) {
    (g.code === "Space" || g.key === " ") && d(g);
  }, b = function() {
    return e.checked === e.trueValue;
  };
  n.exports.useImperativeHandle(r, function() {
    return {
      props: e,
      focus: function() {
        return S.focus(l.current);
      },
      getElement: function() {
        return p.current;
      },
      getInput: function() {
        return l.current;
      }
    };
  }), n.exports.useEffect(function() {
    i.combinedRefs(l, e.inputRef);
  }, [l, e.inputRef]), $e(function() {
    l.current.checked = b();
  }, [e.checked, e.trueValue]);
  var u = b(), A = i.isNotEmpty(e.tooltip), R = K.getOtherProps(e), $ = i.reduceKeys(R, S.ARIA_PROPS), M = N("p-checkbox p-component", {
    "p-checkbox-checked": u,
    "p-checkbox-disabled": e.disabled,
    "p-checkbox-focused": v
  }, e.className), Z = N("p-checkbox-box", {
    "p-highlight": u,
    "p-disabled": e.disabled,
    "p-focus": v
  }), _ = Me.getJSXIcon(u ? e.icon : "", {
    className: "p-checkbox-icon p-c"
  }, {
    props: e,
    checked: u
  });
  return /* @__PURE__ */ n.exports.createElement(n.exports.Fragment, null, /* @__PURE__ */ n.exports.createElement("div", D({
    ref: p,
    id: e.id,
    className: M,
    style: e.style
  }, R, {
    onClick: d,
    onContextMenu: e.onContextMenu,
    onMouseDown: e.onMouseDown
  }), /* @__PURE__ */ n.exports.createElement("div", {
    className: "p-hidden-accessible"
  }, /* @__PURE__ */ n.exports.createElement("input", D({
    ref: l,
    type: "checkbox",
    id: e.inputId,
    name: e.name,
    tabIndex: e.tabIndex,
    defaultChecked: u,
    onFocus: x,
    onBlur: C,
    onKeyDown: T,
    disabled: e.disabled,
    readOnly: e.readOnly,
    required: e.required
  }, $))), /* @__PURE__ */ n.exports.createElement("div", {
    className: Z
  }, _)), A && /* @__PURE__ */ n.exports.createElement(Fe, D({
    target: p,
    content: e.tooltip
  }, e.tooltipOptions)));
}));
se.displayName = "Checkbox";
function W() {
  return W = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, W.apply(this, arguments);
}
function rt(t) {
  if (Array.isArray(t))
    return t;
}
function nt(t, r) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var o, m, v, c, p = [], l = !0, d = !1;
    try {
      if (v = (e = e.call(t)).next, r === 0) {
        if (Object(e) !== e)
          return;
        l = !1;
      } else
        for (; !(l = (o = v.call(e)).done) && (p.push(o.value), p.length !== r); l = !0)
          ;
    } catch (x) {
      d = !0, m = x;
    } finally {
      try {
        if (!l && e.return != null && (c = e.return(), Object(c) !== c))
          return;
      } finally {
        if (d)
          throw m;
      }
    }
    return p;
  }
}
function oe(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var e = 0, o = new Array(r); e < r; e++)
    o[e] = t[e];
  return o;
}
function at(t, r) {
  if (!!t) {
    if (typeof t == "string")
      return oe(t, r);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return oe(t, r);
  }
}
function ot() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function j(t, r) {
  return rt(t) || nt(t, r) || at(t, r) || ot();
}
var q = {
  defaultProps: {
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
    onHide: null,
    children: void 0
  },
  getProps: function(r) {
    return i.getMergedProps(r, q.defaultProps);
  },
  getOtherProps: function(r) {
    return i.getDiffProps(r, q.defaultProps);
  }
}, ue = /* @__PURE__ */ n.exports.memo(/* @__PURE__ */ n.exports.forwardRef(function(t, r) {
  var e = q.getProps(t), o = e.promptLabel || V("passwordPrompt"), m = e.weakLabel || V("weak"), v = e.mediumLabel || V("medium"), c = e.strongLabel || V("strong"), p = n.exports.useState(!1), l = j(p, 2), d = l[0], x = l[1], C = n.exports.useState(null), T = j(C, 2), b = T[0], u = T[1], A = n.exports.useState(o), R = j(A, 2), $ = R[0], M = R[1], Z = n.exports.useState(!1), _ = j(Z, 2), k = _[0], g = _[1], B = n.exports.useState(!1), H = j(B, 2), U = H[0], z = H[1], y = n.exports.useRef(null), w = n.exports.useRef(null), E = n.exports.useRef(e.inputRef), Y = n.exports.useRef(new RegExp(e.mediumRegex)), G = n.exports.useRef(new RegExp(e.strongRegex)), ie = U ? "text" : "password", ce = De({
    target: y,
    overlay: w,
    listener: function(a, h) {
      var O = h.valid;
      O && ne();
    },
    when: d
  }), Q = j(ce, 2), pe = Q[0], fe = Q[1], ee = E.current && E.current.value, J = n.exports.useMemo(function() {
    return i.isNotEmpty(e.value) || i.isNotEmpty(e.defaultValue) || i.isNotEmpty(ee);
  }, [e.value, e.defaultValue, ee]), de = function() {
    if (b) {
      var a = null;
      switch (b.strength) {
        case "weak":
          a = m;
          break;
        case "medium":
          a = v;
          break;
        case "strong":
          a = c;
          break;
      }
      a && $ !== a && M(a);
    } else
      $ !== o && M(o);
  }, me = function(a) {
    e.feedback && Ue.emit("overlay-click", {
      originalEvent: a,
      target: y.current
    });
  }, te = function() {
    z(function(a) {
      return !a;
    });
  }, re = function() {
    de(), x(!0);
  }, ne = function() {
    x(!1);
  }, ve = function() {
    E.current && S.alignOverlay(w.current, E.current.parentElement, e.appendTo || F.appendTo);
  }, ge = function() {
    X.set("overlay", w.current, F.autoZIndex, F.zIndex.overlay), ve();
  }, he = function() {
    pe(), e.onShow && e.onShow();
  }, ye = function() {
    fe();
  }, xe = function() {
    X.clear(w.current), e.onHide && e.onHide();
  }, be = function(a) {
    g(!0), e.feedback && re(), e.onFocus && e.onFocus(a);
  }, we = function(a) {
    g(!1), e.feedback && ne(), e.onBlur && e.onBlur(a);
  }, ke = function(a) {
    var h = a.keyCode || a.which;
    if (e.feedback) {
      var O = a.target.value, P = null, I = null;
      switch (Se(O)) {
        case 1:
          P = m, I = {
            strength: "weak",
            width: "33.33%"
          };
          break;
        case 2:
          P = v, I = {
            strength: "medium",
            width: "66.66%"
          };
          break;
        case 3:
          P = c, I = {
            strength: "strong",
            width: "100%"
          };
          break;
        default:
          P = o, I = null;
          break;
      }
      u(I), M(P), !!h && !d && re();
    }
    e.onKeyUp && e.onKeyUp(a);
  }, Ee = function(a, h) {
    e.onInput && e.onInput(a, h), e.onChange || (i.isNotEmpty(a.target.value) ? S.addClass(y.current, "p-inputwrapper-filled") : S.removeClass(y.current, "p-inputwrapper-filled"));
  }, Se = function(a) {
    return G.current.test(a) ? 3 : Y.current.test(a) ? 2 : a.length ? 1 : 0;
  };
  n.exports.useImperativeHandle(r, function() {
    return {
      props: e,
      focus: function() {
        return S.focus(E.current);
      },
      getElement: function() {
        return y.current;
      },
      getOverlay: function() {
        return w.current;
      },
      getInput: function() {
        return E.current;
      }
    };
  }), n.exports.useEffect(function() {
    i.combinedRefs(E, e.inputRef);
  }, [E, e.inputRef]), n.exports.useEffect(function() {
    Y.current = new RegExp(e.mediumRegex);
  }, [e.mediumRegex]), n.exports.useEffect(function() {
    G.current = new RegExp(e.strongRegex);
  }, [e.strongRegex]), n.exports.useEffect(function() {
    !J && S.hasClass(y.current, "p-inputwrapper-filled") && S.removeClass(y.current, "p-inputwrapper-filled");
  }, [J]), _e(function() {
    X.clear(w.current);
  });
  var Re = function() {
    if (e.toggleMask) {
      var a = U ? "pi pi-eye-slash" : "pi pi-eye", h = /* @__PURE__ */ n.exports.createElement("i", {
        className: a,
        onClick: te
      });
      if (e.icon) {
        var O = {
          onClick: te,
          className: a,
          element: h,
          props: e
        };
        h = i.getJSXElement(e.icon, O);
      }
      return h;
    }
    return null;
  }, Oe = function() {
    var a = N("p-password-panel p-component", e.panelClassName, {
      "p-input-filled": F.inputStyle === "filled",
      "p-ripple-disabled": F.ripple === !1
    }), h = b || {
      strength: "",
      width: "0%"
    }, O = h.strength, P = h.width, I = i.getJSXElement(e.header, e), Te = i.getJSXElement(e.footer, e), Ae = e.content ? i.getJSXElement(e.content, e) : /* @__PURE__ */ n.exports.createElement(n.exports.Fragment, null, /* @__PURE__ */ n.exports.createElement("div", {
      className: "p-password-meter"
    }, /* @__PURE__ */ n.exports.createElement("div", {
      className: "p-password-strength ".concat(O),
      style: {
        width: P
      }
    })), /* @__PURE__ */ n.exports.createElement("div", {
      className: "p-password-info ".concat(O)
    }, $)), je = /* @__PURE__ */ n.exports.createElement(Be, {
      nodeRef: w,
      classNames: "p-connected-overlay",
      in: d,
      timeout: {
        enter: 120,
        exit: 100
      },
      options: e.transitionOptions,
      unmountOnExit: !0,
      onEnter: ge,
      onEntered: he,
      onExit: ye,
      onExited: xe
    }, /* @__PURE__ */ n.exports.createElement("div", {
      ref: w,
      className: a,
      style: e.panelStyle,
      onClick: me
    }, I, Ae, Te));
    return /* @__PURE__ */ n.exports.createElement(He, {
      element: je,
      appendTo: e.appendTo
    });
  }, Ne = N("p-password p-component p-inputwrapper", {
    "p-inputwrapper-filled": J,
    "p-inputwrapper-focus": k,
    "p-input-icon-right": e.toggleMask
  }, e.className), Ce = N("p-password-input", e.inputClassName), Pe = q.getOtherProps(e), Ie = Re(), Le = Oe();
  return /* @__PURE__ */ n.exports.createElement("div", {
    ref: y,
    id: e.id,
    className: Ne,
    style: e.style
  }, /* @__PURE__ */ n.exports.createElement(le, W({
    ref: E,
    id: e.inputId
  }, Pe, {
    type: ie,
    className: Ce,
    style: e.inputStyle,
    onFocus: be,
    onBlur: we,
    onKeyUp: ke,
    onInput: Ee,
    tooltip: e.tooltip,
    tooltipOptions: e.tooltipOptions
  })), Ie, Le);
}));
ue.displayName = "Password";
const lt = () => {
  const t = Ve(), { errors: r, data: e } = Ke(), [o, m] = n.exports.useState(""), [v, c] = n.exports.useState(!1), { layoutConfig: p } = n.exports.useContext(qe), l = Ze(), d = N("surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden", { "p-input-filled": p.inputStyle === "filled" }), { data: x, setData: C, post: T, processing: b } = ze({
    email: "",
    password: "",
    remember: !1
  });
  return n.exports.useEffect(() => {
    e && (location.href = String(e));
  }, [e]), /* @__PURE__ */ L(Je, {
    children: [
      /* @__PURE__ */ f(Xe, {}),
      /* @__PURE__ */ f("div", {
        className: d,
        children: /* @__PURE__ */ L("div", {
          className: "flex flex-column align-items-center justify-content-center",
          children: [
            /* @__PURE__ */ f("img", {
              src: l,
              alt: t.title,
              className: "mb-5 w-6rem flex-shrink-0"
            }),
            /* @__PURE__ */ f("div", {
              style: {
                borderRadius: "56px",
                padding: "0.3rem",
                background: "linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"
              },
              children: /* @__PURE__ */ f("form", {
                className: "w-full surface-card py-8 px-5 sm:px-8",
                style: { borderRadius: "53px" },
                onSubmit: (u) => {
                  u.preventDefault(), T("");
                },
                children: /* @__PURE__ */ L("div", {
                  children: [
                    /* @__PURE__ */ L("div", {
                      className: "field",
                      children: [
                        /* @__PURE__ */ f("label", {
                          htmlFor: "email1",
                          className: "block text-900 text-xl font-medium mb-2",
                          children: "Email"
                        }),
                        /* @__PURE__ */ f(le, {
                          type: "email",
                          required: !0,
                          placeholder: "Email address",
                          className: N("w-full md:w-30rem mb-3", { "p-invalid": r.email }),
                          value: x.email,
                          onChange: (u) => C("email", u.target.value),
                          style: { padding: "1rem" }
                        }),
                        r.email && /* @__PURE__ */ f("small", {
                          className: "p-error w-full block md:w-30rem",
                          children: r.email
                        })
                      ]
                    }),
                    /* @__PURE__ */ L("div", {
                      className: "field",
                      children: [
                        /* @__PURE__ */ f("label", {
                          className: "block text-900 font-medium text-xl mb-2",
                          children: "Password"
                        }),
                        /* @__PURE__ */ f(ue, {
                          value: o,
                          onChange: (u) => {
                            m(u.target.value), C("password", u.target.value);
                          },
                          placeholder: "Password",
                          type: "password",
                          required: !0,
                          toggleMask: !0,
                          className: N("w-full mb-3", { "p-invalid": r.password }),
                          inputClassName: "w-full p-3 md:w-30rem"
                        }),
                        r.password && /* @__PURE__ */ f("small", {
                          className: "p-error w-full block md:w-30rem",
                          children: r.password
                        })
                      ]
                    }),
                    /* @__PURE__ */ L("div", {
                      className: "flex align-items-center justify-content-between mb-5 gap-5",
                      children: [
                        /* @__PURE__ */ L("div", {
                          className: "flex align-items-center",
                          children: [
                            /* @__PURE__ */ f(se, {
                              checked: v,
                              onChange: (u) => {
                                var A, R;
                                c((A = u.checked) != null ? A : !1), C("remember", (R = u.checked) != null ? R : !1);
                              },
                              className: "mr-2"
                            }),
                            /* @__PURE__ */ f("label", {
                              htmlFor: "rememberme1",
                              children: "Remember me"
                            })
                          ]
                        }),
                        /* @__PURE__ */ f("a", {
                          className: "font-medium no-underline ml-2 text-right cursor-pointer",
                          style: { color: "var(--primary-color)" },
                          children: "Forgot password?"
                        })
                      ]
                    }),
                    /* @__PURE__ */ f(We, {
                      label: "Sign In",
                      className: "w-full p-3 text-xl",
                      type: "submit",
                      loading: b,
                      disabled: b
                    })
                  ]
                })
              })
            })
          ]
        })
      })
    ]
  });
};
lt.layout = null;
export {
  lt as default
};
