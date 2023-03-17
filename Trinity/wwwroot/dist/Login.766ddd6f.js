import { r, n as O, O as i, e as $e, d as I, G as Me, z as Fe, i as V, s as _e, p as De, Z as X, A as oe, P as F, C as Be, y as He, q as Ue, u as Ve, b as Ke, L as ze, J as qe, a as Je, _ as Ze, j as A, F as Xe, c as f, H as We, B as Ye } from "./main.eb17ea8a.js";
function _() {
  return _ = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var l in e)
        Object.prototype.hasOwnProperty.call(e, l) && (t[l] = e[l]);
    }
    return t;
  }, _.apply(this, arguments);
}
function Ge(t) {
  if (Array.isArray(t))
    return t;
}
function Qe(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var l, d, m, c, p = [], o = !0, u = !1;
    try {
      if (m = (e = e.call(t)).next, n === 0) {
        if (Object(e) !== e)
          return;
        o = !1;
      } else
        for (; !(o = (l = m.call(e)).done) && (p.push(l.value), p.length !== n); o = !0)
          ;
    } catch (x) {
      u = !0, d = x;
    } finally {
      try {
        if (!o && e.return != null && (c = e.return(), Object(c) !== c))
          return;
      } finally {
        if (u)
          throw d;
      }
    }
    return p;
  }
}
function ae(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, l = new Array(n); e < n; e++)
    l[e] = t[e];
  return l;
}
function et(t, n) {
  if (!!t) {
    if (typeof t == "string")
      return ae(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return ae(t, n);
  }
}
function tt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nt(t, n) {
  return Ge(t) || Qe(t, n) || et(t, n) || tt();
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
  getProps: function(n) {
    return i.getMergedProps(n, K.defaultProps);
  },
  getOtherProps: function(n) {
    return i.getDiffProps(n, K.defaultProps);
  }
}, se = /* @__PURE__ */ r.exports.memo(/* @__PURE__ */ r.exports.forwardRef(function(t, n) {
  var e = K.getProps(t), l = r.exports.useState(!1), d = nt(l, 2), m = d[0], c = d[1], p = r.exports.useRef(null), o = r.exports.useRef(e.inputRef), u = function(g) {
    if (!e.disabled && !e.readOnly && e.onChange) {
      var B = k(), H = g.target instanceof HTMLDivElement || g.target instanceof HTMLSpanElement, U = g.target === o.current, J = H && g.target.checked !== B;
      if (U || J) {
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
      O.focus(o.current), g.preventDefault();
    }
  }, x = function() {
    c(!0);
  }, $ = function() {
    c(!1);
  }, R = function(g) {
    (g.code === "Space" || g.key === " ") && u(g);
  }, k = function() {
    return e.checked === e.trueValue;
  };
  r.exports.useImperativeHandle(n, function() {
    return {
      props: e,
      focus: function() {
        return O.focus(o.current);
      },
      getElement: function() {
        return p.current;
      },
      getInput: function() {
        return o.current;
      }
    };
  }), r.exports.useEffect(function() {
    i.combinedRefs(o, e.inputRef);
  }, [o, e.inputRef]), $e(function() {
    o.current.checked = k();
  }, [e.checked, e.trueValue]);
  var b = k(), v = i.isNotEmpty(e.tooltip), C = K.getOtherProps(e), N = i.reduceKeys(C, O.ARIA_PROPS), M = I("p-checkbox p-component", {
    "p-checkbox-checked": b,
    "p-checkbox-disabled": e.disabled,
    "p-checkbox-focused": m
  }, e.className), q = I("p-checkbox-box", {
    "p-highlight": b,
    "p-disabled": e.disabled,
    "p-focus": m
  }), D = Me.getJSXIcon(b ? e.icon : "", {
    className: "p-checkbox-icon p-c"
  }, {
    props: e,
    checked: b
  });
  return /* @__PURE__ */ r.exports.createElement(r.exports.Fragment, null, /* @__PURE__ */ r.exports.createElement("div", _({
    ref: p,
    id: e.id,
    className: M,
    style: e.style
  }, C, {
    onClick: u,
    onContextMenu: e.onContextMenu,
    onMouseDown: e.onMouseDown
  }), /* @__PURE__ */ r.exports.createElement("div", {
    className: "p-hidden-accessible"
  }, /* @__PURE__ */ r.exports.createElement("input", _({
    ref: o,
    type: "checkbox",
    id: e.inputId,
    name: e.name,
    tabIndex: e.tabIndex,
    defaultChecked: b,
    onFocus: x,
    onBlur: $,
    onKeyDown: R,
    disabled: e.disabled,
    readOnly: e.readOnly,
    required: e.required
  }, N))), /* @__PURE__ */ r.exports.createElement("div", {
    className: q
  }, D)), v && /* @__PURE__ */ r.exports.createElement(Fe, _({
    target: p,
    content: e.tooltip
  }, e.tooltipOptions)));
}));
se.displayName = "Checkbox";
function W() {
  return W = Object.assign ? Object.assign.bind() : function(t) {
    for (var n = 1; n < arguments.length; n++) {
      var e = arguments[n];
      for (var l in e)
        Object.prototype.hasOwnProperty.call(e, l) && (t[l] = e[l]);
    }
    return t;
  }, W.apply(this, arguments);
}
function rt(t) {
  if (Array.isArray(t))
    return t;
}
function at(t, n) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var l, d, m, c, p = [], o = !0, u = !1;
    try {
      if (m = (e = e.call(t)).next, n === 0) {
        if (Object(e) !== e)
          return;
        o = !1;
      } else
        for (; !(o = (l = m.call(e)).done) && (p.push(l.value), p.length !== n); o = !0)
          ;
    } catch (x) {
      u = !0, d = x;
    } finally {
      try {
        if (!o && e.return != null && (c = e.return(), Object(c) !== c))
          return;
      } finally {
        if (u)
          throw d;
      }
    }
    return p;
  }
}
function le(t, n) {
  (n == null || n > t.length) && (n = t.length);
  for (var e = 0, l = new Array(n); e < n; e++)
    l[e] = t[e];
  return l;
}
function lt(t, n) {
  if (!!t) {
    if (typeof t == "string")
      return le(t, n);
    var e = Object.prototype.toString.call(t).slice(8, -1);
    if (e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set")
      return Array.from(t);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return le(t, n);
  }
}
function ot() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function j(t, n) {
  return rt(t) || at(t, n) || lt(t, n) || ot();
}
var z = {
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
  getProps: function(n) {
    return i.getMergedProps(n, z.defaultProps);
  },
  getOtherProps: function(n) {
    return i.getDiffProps(n, z.defaultProps);
  }
}, ue = /* @__PURE__ */ r.exports.memo(/* @__PURE__ */ r.exports.forwardRef(function(t, n) {
  var e = z.getProps(t), l = e.promptLabel || V("passwordPrompt"), d = e.weakLabel || V("weak"), m = e.mediumLabel || V("medium"), c = e.strongLabel || V("strong"), p = r.exports.useState(!1), o = j(p, 2), u = o[0], x = o[1], $ = r.exports.useState(null), R = j($, 2), k = R[0], b = R[1], v = r.exports.useState(l), C = j(v, 2), N = C[0], M = C[1], q = r.exports.useState(!1), D = j(q, 2), S = D[0], g = D[1], B = r.exports.useState(!1), H = j(B, 2), U = H[0], J = H[1], y = r.exports.useRef(null), w = r.exports.useRef(null), E = r.exports.useRef(e.inputRef), Y = r.exports.useRef(new RegExp(e.mediumRegex)), G = r.exports.useRef(new RegExp(e.strongRegex)), ie = U ? "text" : "password", ce = _e({
    target: y,
    overlay: w,
    listener: function(a, h) {
      var P = h.valid;
      P && re();
    },
    when: u
  }), Q = j(ce, 2), pe = Q[0], fe = Q[1], ee = E.current && E.current.value, Z = r.exports.useMemo(function() {
    return i.isNotEmpty(e.value) || i.isNotEmpty(e.defaultValue) || i.isNotEmpty(ee);
  }, [e.value, e.defaultValue, ee]), de = function() {
    if (k) {
      var a = null;
      switch (k.strength) {
        case "weak":
          a = d;
          break;
        case "medium":
          a = m;
          break;
        case "strong":
          a = c;
          break;
      }
      a && N !== a && M(a);
    } else
      N !== l && M(l);
  }, me = function(a) {
    e.feedback && Ue.emit("overlay-click", {
      originalEvent: a,
      target: y.current
    });
  }, te = function() {
    J(function(a) {
      return !a;
    });
  }, ne = function() {
    de(), x(!0);
  }, re = function() {
    x(!1);
  }, ve = function() {
    E.current && O.alignOverlay(w.current, E.current.parentElement, e.appendTo || F.appendTo);
  }, ge = function() {
    X.set("overlay", w.current, F.autoZIndex, F.zIndex.overlay), ve();
  }, he = function() {
    pe(), e.onShow && e.onShow();
  }, ye = function() {
    fe();
  }, xe = function() {
    X.clear(w.current), e.onHide && e.onHide();
  }, be = function(a) {
    g(!0), e.feedback && ne(), e.onFocus && e.onFocus(a);
  }, we = function(a) {
    g(!1), e.feedback && re(), e.onBlur && e.onBlur(a);
  }, ke = function(a) {
    var h = a.keyCode || a.which;
    if (e.feedback) {
      var P = a.target.value, L = null, T = null;
      switch (Ee(P)) {
        case 1:
          L = d, T = {
            strength: "weak",
            width: "33.33%"
          };
          break;
        case 2:
          L = m, T = {
            strength: "medium",
            width: "66.66%"
          };
          break;
        case 3:
          L = c, T = {
            strength: "strong",
            width: "100%"
          };
          break;
        default:
          L = l, T = null;
          break;
      }
      b(T), M(L), !!h && !u && ne();
    }
    e.onKeyUp && e.onKeyUp(a);
  }, Se = function(a, h) {
    e.onInput && e.onInput(a, h), e.onChange || (i.isNotEmpty(a.target.value) ? O.addClass(y.current, "p-inputwrapper-filled") : O.removeClass(y.current, "p-inputwrapper-filled"));
  }, Ee = function(a) {
    return G.current.test(a) ? 3 : Y.current.test(a) ? 2 : a.length ? 1 : 0;
  };
  r.exports.useImperativeHandle(n, function() {
    return {
      props: e,
      focus: function() {
        return O.focus(E.current);
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
  }), r.exports.useEffect(function() {
    i.combinedRefs(E, e.inputRef);
  }, [E, e.inputRef]), r.exports.useEffect(function() {
    Y.current = new RegExp(e.mediumRegex);
  }, [e.mediumRegex]), r.exports.useEffect(function() {
    G.current = new RegExp(e.strongRegex);
  }, [e.strongRegex]), r.exports.useEffect(function() {
    !Z && O.hasClass(y.current, "p-inputwrapper-filled") && O.removeClass(y.current, "p-inputwrapper-filled");
  }, [Z]), De(function() {
    X.clear(w.current);
  });
  var Oe = function() {
    if (e.toggleMask) {
      var a = U ? "pi pi-eye-slash" : "pi pi-eye", h = /* @__PURE__ */ r.exports.createElement("i", {
        className: a,
        onClick: te
      });
      if (e.icon) {
        var P = {
          onClick: te,
          className: a,
          element: h,
          props: e
        };
        h = i.getJSXElement(e.icon, P);
      }
      return h;
    }
    return null;
  }, Re = function() {
    var a = I("p-password-panel p-component", e.panelClassName, {
      "p-input-filled": F.inputStyle === "filled",
      "p-ripple-disabled": F.ripple === !1
    }), h = k || {
      strength: "",
      width: "0%"
    }, P = h.strength, L = h.width, T = i.getJSXElement(e.header, e), Te = i.getJSXElement(e.footer, e), Ae = e.content ? i.getJSXElement(e.content, e) : /* @__PURE__ */ r.exports.createElement(r.exports.Fragment, null, /* @__PURE__ */ r.exports.createElement("div", {
      className: "p-password-meter"
    }, /* @__PURE__ */ r.exports.createElement("div", {
      className: "p-password-strength ".concat(P),
      style: {
        width: L
      }
    })), /* @__PURE__ */ r.exports.createElement("div", {
      className: "p-password-info ".concat(P)
    }, N)), je = /* @__PURE__ */ r.exports.createElement(Be, {
      nodeRef: w,
      classNames: "p-connected-overlay",
      in: u,
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
    }, /* @__PURE__ */ r.exports.createElement("div", {
      ref: w,
      className: a,
      style: e.panelStyle,
      onClick: me
    }, T, Ae, Te));
    return /* @__PURE__ */ r.exports.createElement(He, {
      element: je,
      appendTo: e.appendTo
    });
  }, Ce = I("p-password p-component p-inputwrapper", {
    "p-inputwrapper-filled": Z,
    "p-inputwrapper-focus": S,
    "p-input-icon-right": e.toggleMask
  }, e.className), Ne = I("p-password-input", e.inputClassName), Pe = z.getOtherProps(e), Ie = Oe(), Le = Re();
  return /* @__PURE__ */ r.exports.createElement("div", {
    ref: y,
    id: e.id,
    className: Ce,
    style: e.style
  }, /* @__PURE__ */ r.exports.createElement(oe, W({
    ref: E,
    id: e.inputId
  }, Pe, {
    type: ie,
    className: Ne,
    style: e.inputStyle,
    onFocus: be,
    onBlur: we,
    onKeyUp: ke,
    onInput: Se,
    tooltip: e.tooltip,
    tooltipOptions: e.tooltipOptions
  })), Ie, Le);
}));
ue.displayName = "Password";
const st = () => {
  const t = Ve(), { errors: n, data: e } = Ke(), [l, d] = r.exports.useState(""), [m, c] = r.exports.useState(!1), { layoutConfig: p } = r.exports.useContext(ze), o = qe(), u = Je(), x = I("surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden", { "p-input-filled": p.inputStyle === "filled" }), { data: $, setData: R, post: k, processing: b } = Ze({
    email: "",
    password: "",
    remember: !1
  });
  return r.exports.useEffect(() => {
    e && (location.href = String(e));
  }, [e]), /* @__PURE__ */ A(Xe, {
    children: [
      /* @__PURE__ */ f(We, {}),
      /* @__PURE__ */ f("div", {
        className: x,
        children: /* @__PURE__ */ A("div", {
          className: "flex flex-column align-items-center justify-content-center",
          children: [
            /* @__PURE__ */ f("img", {
              src: o,
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
                onSubmit: (v) => {
                  v.preventDefault(), k("");
                },
                children: /* @__PURE__ */ A("div", {
                  children: [
                    /* @__PURE__ */ A("div", {
                      className: "field",
                      children: [
                        /* @__PURE__ */ f("label", {
                          htmlFor: "email1",
                          className: "block text-900 text-xl font-medium mb-2",
                          children: u("email")
                        }),
                        /* @__PURE__ */ f(oe, {
                          type: "email",
                          required: !0,
                          placeholder: u("email_address"),
                          className: I("w-full md:w-30rem mb-3", { "p-invalid": n.email }),
                          value: $.email,
                          onChange: (v) => R("email", v.target.value),
                          style: { padding: "1rem" }
                        }),
                        n.email && /* @__PURE__ */ f("small", {
                          className: "p-error w-full block md:w-30rem",
                          children: n.email
                        })
                      ]
                    }),
                    /* @__PURE__ */ A("div", {
                      className: "field",
                      children: [
                        /* @__PURE__ */ f("label", {
                          className: "block text-900 font-medium text-xl mb-2",
                          children: u("password")
                        }),
                        /* @__PURE__ */ f(ue, {
                          value: l,
                          onChange: (v) => {
                            d(v.target.value), R("password", v.target.value);
                          },
                          placeholder: u("password"),
                          type: "password",
                          required: !0,
                          toggleMask: !0,
                          className: I("w-full mb-3", { "p-invalid": n.password }),
                          inputClassName: "w-full p-3 md:w-30rem"
                        }),
                        n.password && /* @__PURE__ */ f("small", {
                          className: "p-error w-full block md:w-30rem",
                          children: n.password
                        })
                      ]
                    }),
                    /* @__PURE__ */ f("div", {
                      className: "flex align-items-center justify-content-between mb-5 gap-5",
                      children: /* @__PURE__ */ A("div", {
                        className: "flex align-items-center",
                        children: [
                          /* @__PURE__ */ f(se, {
                            checked: m,
                            onChange: (v) => {
                              var C, N;
                              c((C = v.checked) != null ? C : !1), R("remember", (N = v.checked) != null ? N : !1);
                            },
                            className: "mr-2"
                          }),
                          /* @__PURE__ */ f("label", {
                            htmlFor: "rememberme1",
                            children: u("remember_me")
                          })
                        ]
                      })
                    }),
                    /* @__PURE__ */ f(Ye, {
                      label: u("sign_in"),
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
st.layout = null;
export {
  st as default
};
