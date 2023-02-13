import { j as b, e as U, b as o, z as gt, F as G, r as l, U as bt, o as re, v as f, p as vt, h as Ee, Z as Re, P as ne, d as ht, O as ae, y as yt, C as xt, m as St, k as Ie, A as Ct, u as Nt, a as $e, G as Oe, n as Dt, R as we, B as _, g as Te, E as Et, J as Rt, T as wt, S as Fe, H as kt } from "./main.d5262881.js";
import { D as Pt, C as ke } from "./column.esm.d965a8a1.js";
import { t as _e } from "./trinity_link.3d190891.js";
function zt() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get(r, s) {
      return r.get(s.toString());
    }
  });
}
const Lt = ({ column: r, record: s, children: e, resource: a }) => {
  var D;
  const d = `${r.columnName}_${s[a.primaryKeyColumn]}_tooltip`;
  return /* @__PURE__ */ b("div", {
    ...s[`${r.columnName}_extraAttributes`],
    className: U(s[`${r.columnName}_extraAttributes`] && "className" in s[`${r.columnName}_extraAttributes`] ? s[`${r.columnName}_extraAttributes`].className : "", {
      [`text-${r.color}-600`]: r.color
    }),
    style: { fontFamily: r.fontFamily },
    children: [
      (s[`${r.columnName}_tooltip`] || r.tooltip) && /* @__PURE__ */ o(gt, {
        target: `#${d}`
      }),
      /* @__PURE__ */ b("div", {
        id: d,
        "data-pr-tooltip": (D = s[`${r.columnName}_tooltip`]) != null ? D : r.tooltip,
        "data-pr-position": "top",
        children: [
          r.descriptionPosition === "above" ? /* @__PURE__ */ o("div", {
            className: "text-sm text-gray-500 mb-1",
            children: /* @__PURE__ */ o("p", {
              children: r.description
            })
          }) : /* @__PURE__ */ o(G, {}),
          /* @__PURE__ */ b("div", {
            className: "flex justify-content-start align-items-center",
            children: [
              r.icon && r.iconPosition == "before" && /* @__PURE__ */ o("i", {
                className: `mx-2 ${r.icon}`
              }),
              e,
              r.icon && r.iconPosition == "after" && /* @__PURE__ */ o("i", {
                className: `mx-2 ${r.icon}`
              })
            ]
          }),
          r.descriptionPosition === "bellow" ? /* @__PURE__ */ o("div", {
            className: "text-sm text-gray-500 mt-1",
            children: /* @__PURE__ */ o("p", {
              children: r.description
            })
          }) : /* @__PURE__ */ o(G, {})
        ]
      })
    ]
  });
};
function Pe() {
  return Pe = Object.assign ? Object.assign.bind() : function(r) {
    for (var s = 1; s < arguments.length; s++) {
      var e = arguments[s];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, Pe.apply(this, arguments);
}
function ze(r, s) {
  (s == null || s > r.length) && (s = r.length);
  for (var e = 0, a = new Array(s); e < s; e++)
    a[e] = r[e];
  return a;
}
function Mt(r) {
  if (Array.isArray(r))
    return ze(r);
}
function It(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Ae(r, s) {
  if (!!r) {
    if (typeof r == "string")
      return ze(r, s);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if (e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set")
      return Array.from(r);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return ze(r, s);
  }
}
function Ot() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tt(r) {
  return Mt(r) || It(r) || Ae(r) || Ot();
}
function Ft(r) {
  if (Array.isArray(r))
    return r;
}
function _t(r, s) {
  var e = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (e != null) {
    var a, d, D, h, R = [], P = !0, w = !1;
    try {
      if (D = (e = e.call(r)).next, s === 0) {
        if (Object(e) !== e)
          return;
        P = !1;
      } else
        for (; !(P = (a = D.call(e)).done) && (R.push(a.value), R.length !== s); P = !0)
          ;
    } catch (S) {
      w = !0, d = S;
    } finally {
      try {
        if (!P && e.return != null && (h = e.return(), Object(h) !== h))
          return;
      } finally {
        if (w)
          throw d;
      }
    }
    return R;
  }
}
function $t() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $(r, s) {
  return Ft(r) || _t(r, s) || Ae(r, s) || $t();
}
var ve = {
  defaultProps: {
    __TYPE: "Dialog",
    appendTo: null,
    ariaCloseIconLabel: null,
    baseZIndex: 0,
    blockScroll: !1,
    breakpoints: null,
    className: null,
    closable: !0,
    closeOnEscape: !0,
    contentClassName: null,
    contentStyle: null,
    dismissableMask: !1,
    draggable: !0,
    focusOnShow: !0,
    footer: null,
    header: null,
    headerClassName: null,
    headerStyle: null,
    icons: null,
    id: null,
    keepInViewport: !0,
    maskClassName: null,
    maskStyle: null,
    maximizable: !1,
    maximized: !1,
    minX: 0,
    minY: 0,
    modal: !0,
    onClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragStart: null,
    onHide: null,
    onMaskClick: null,
    onMaximize: null,
    onResize: null,
    onResizeEnd: null,
    onResizeStart: null,
    onShow: null,
    position: "center",
    resizable: !0,
    rtl: !1,
    showHeader: !0,
    style: null,
    transitionOptions: null,
    visible: !1,
    children: void 0
  },
  getProps: function(s) {
    return ae.getMergedProps(s, ve.defaultProps);
  },
  getOtherProps: function(s) {
    return ae.getDiffProps(s, ve.defaultProps);
  }
}, He = /* @__PURE__ */ l.exports.forwardRef(function(r, s) {
  var e = ve.getProps(r), a = e.id ? e.id : bt(), d = l.exports.useState(a), D = $(d, 2), h = D[0];
  D[1];
  var R = l.exports.useState(!1), P = $(R, 2), w = P[0], S = P[1], ie = l.exports.useState(!1), J = $(ie, 2), I = J[0], Z = J[1], he = l.exports.useState(e.maximized), A = $(he, 2), O = A[0], X = A[1], c = l.exports.useRef(null), z = l.exports.useRef(null), le = l.exports.useRef(null), oe = l.exports.useRef(null), v = l.exports.useRef(null), Y = l.exports.useRef(null), j = l.exports.useRef(!1), B = l.exports.useRef(!1), y = l.exports.useRef(null), T = l.exports.useRef(null), W = l.exports.useRef(null), V = l.exports.useRef(a), L = e.onMaximize ? e.maximized : O, ye = re({
    type: "keydown",
    listener: function(t) {
      return Ve(t);
    }
  }), se = $(ye, 2), xe = se[0], Se = se[1], Ce = re({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Ue(t);
    }
  }), ce = $(Ce, 2), Ne = ce[0], De = ce[1], ue = re({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Je(t);
    }
  }), q = $(ue, 2), de = q[0], me = q[1], pe = re({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Ge(t);
    }
  }), Q = $(pe, 2), n = Q[0], x = Q[1], F = re({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Xe(t);
    }
  }), g = $(F, 2), H = g[0], E = g[1], ee = function(t) {
    e.onHide(), t.preventDefault();
  }, te = function() {
    var t = document.activeElement, u = t && c.current && c.current.contains(t);
    !u && e.closable && e.showHeader && Y.current.focus();
  }, je = function(t) {
    e.dismissableMask && e.modal && z.current === t.target && ee(t), e.onMaskClick && e.onMaskClick(t);
  }, Be = function(t) {
    e.onMaximize ? e.onMaximize({
      originalEvent: t,
      maximized: !L
    }) : X(function(u) {
      return !u;
    }), t.preventDefault();
  }, Ve = function(t) {
    var u = t.currentTarget;
    if (!(!u || !u.primeDialogParams)) {
      var m = u.primeDialogParams, N = m.length, M = m[N - 1] ? m[N - 1].id : void 0;
      if (M === h) {
        var k = document.getElementById(M);
        if (e.closable && e.closeOnEscape && t.key === "Escape")
          ee(t), t.stopImmediatePropagation(), m.splice(N - 1, 1);
        else if (t.key === "Tab") {
          t.preventDefault();
          var p = f.getFocusableElements(k);
          if (p && p.length > 0)
            if (!document.activeElement)
              p[0].focus();
            else {
              var C = p.indexOf(document.activeElement);
              t.shiftKey ? C === -1 || C === 0 ? p[p.length - 1].focus() : p[C - 1].focus() : C === -1 || C === p.length - 1 ? p[0].focus() : p[C + 1].focus();
            }
        }
      }
    }
  }, Ke = function(t) {
    f.hasClass(t.target, "p-dialog-header-icon") || f.hasClass(t.target.parentElement, "p-dialog-header-icon") || e.draggable && (j.current = !0, y.current = t.pageX, T.current = t.pageY, c.current.style.margin = "0", f.addClass(document.body, "p-unselectable-text"), e.onDragStart && e.onDragStart(t));
  }, Ge = function(t) {
    if (j.current) {
      var u = f.getOuterWidth(c.current), m = f.getOuterHeight(c.current), N = t.pageX - y.current, M = t.pageY - T.current, k = c.current.getBoundingClientRect(), p = k.left + N, C = k.top + M, K = f.getViewport();
      c.current.style.position = "fixed", e.keepInViewport ? (p >= e.minX && p + u < K.width && (y.current = t.pageX, c.current.style.left = p + "px"), C >= e.minY && C + m < K.height && (T.current = t.pageY, c.current.style.top = C + "px")) : (y.current = t.pageX, c.current.style.left = p + "px", T.current = t.pageY, c.current.style.top = C + "px"), e.onDrag && e.onDrag(t);
    }
  }, Xe = function(t) {
    j.current && (j.current = !1, f.removeClass(document.body, "p-unselectable-text"), e.onDragEnd && e.onDragEnd(t));
  }, Ye = function(t) {
    e.resizable && (B.current = !0, y.current = t.pageX, T.current = t.pageY, f.addClass(document.body, "p-unselectable-text"), e.onResizeStart && e.onResizeStart(t));
  }, Le = function(t, u, m) {
    !m && (m = f.getViewport());
    var N = parseInt(t);
    return /^(\d+|(\.\d+))(\.\d+)?%$/.test(t) ? N * (m[u] / 100) : N;
  }, Ue = function(t) {
    if (B.current) {
      var u = t.pageX - y.current, m = t.pageY - T.current, N = f.getOuterWidth(c.current), M = f.getOuterHeight(c.current), k = c.current.getBoundingClientRect(), p = f.getViewport(), C = !parseInt(c.current.style.top) || !parseInt(c.current.style.left), K = Le(c.current.style.minWidth, "width", p), fe = Le(c.current.style.minHeight, "height", p), ge = N + u, be = M + m;
      C && (ge += u, be += m), (!K || ge > K) && k.left + ge < p.width && (c.current.style.width = ge + "px"), (!fe || be > fe) && k.top + be < p.height && (c.current.style.height = be + "px"), y.current = t.pageX, T.current = t.pageY, e.onResize && e.onResize(t);
    }
  }, Je = function(t) {
    B.current && (B.current = !1, f.removeClass(document.body, "p-unselectable-text"), e.onResizeEnd && e.onResizeEnd(t));
  }, Ze = function() {
    c.current.style.position = "", c.current.style.left = "", c.current.style.top = "", c.current.style.margin = "";
  }, We = function() {
    var t = ["center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"], u = t.find(function(m) {
      return m === e.position || m.replace("-", "") === e.position;
    });
    return u ? "p-dialog-".concat(u) : "";
  }, qe = function() {
    c.current.setAttribute(V.current, "");
  }, Qe = function() {
    e.onShow && e.onShow(), e.focusOnShow && te(), rt();
  }, et = function() {
    e.modal && f.addClass(z.current, "p-component-overlay-leave"), e.blockScroll && f.removeClass(document.body, "p-overflow-hidden");
  }, tt = function() {
    j.current = !1, Re.clear(z.current), S(!1), Me();
  }, rt = function() {
    nt(), (e.blockScroll || e.maximizable && L) && f.addClass(document.body, "p-overflow-hidden");
  }, Me = function() {
    at();
    var t = e.maximizable && L;
    if (e.modal) {
      var u = document.primeDialogParams && document.primeDialogParams.some(function(m) {
        return m.hasBlockScroll;
      });
      (u || t) && f.removeClass(document.body, "p-overflow-hidden");
    } else
      (e.blockScroll || t) && f.removeClass(document.body, "p-overflow-hidden");
  }, nt = function() {
    e.draggable && (n(), H()), e.resizable && (Ne(), de()), xe();
    var t = {
      id: h,
      hasBlockScroll: e.blockScroll
    };
    document.primeDialogParams = document.primeDialogParams ? [].concat(Tt(document.primeDialogParams), [t]) : [t];
  }, at = function() {
    x(), E(), De(), me(), Se(), document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function(t) {
      return t.id !== h;
    });
  }, it = function() {
    W.current = f.createInlineStyle(ne.nonce);
    var t = "";
    for (var u in e.breakpoints)
      t += `
                @media screen and (max-width: `.concat(u, `) {
                    .p-dialog[`).concat(V.current, `] {
                        width: `).concat(e.breakpoints[u], ` !important;
                    }
                }
            `);
    W.current.innerHTML = t;
  }, lt = function() {
    if (!e.blockScroll) {
      var t = L ? "addClass" : "removeClass";
      f[t](document.body, "p-overflow-hidden");
    }
  };
  vt(function() {
    e.visible && S(!0), e.breakpoints && it();
  }), Ee(function() {
    e.visible && !w && S(!0), e.visible !== I && w && Z(e.visible);
  }), Ee(function() {
    w && (Re.set("modal", z.current, ne.autoZIndex, e.baseZIndex || ne.zIndex.modal), Z(!0));
  }, [w]), Ee(function() {
    lt();
  }, [e.maximized, O]), ht(function() {
    Me(), f.removeInlineStyle(W.current), Re.clear(z.current);
  }), l.exports.useImperativeHandle(s, function() {
    return {
      props: e,
      resetPosition: Ze,
      getElement: function() {
        return c.current;
      },
      getMask: function() {
        return z.current;
      },
      getContent: function() {
        return le.current;
      },
      getHeader: function() {
        return oe.current;
      },
      getFooter: function() {
        return v.current;
      },
      getCloseButton: function() {
        return Y.current;
      }
    };
  });
  var ot = function() {
    if (e.closable) {
      var t = e.ariaCloseIconLabel || St("close");
      return /* @__PURE__ */ l.exports.createElement("button", {
        ref: Y,
        type: "button",
        className: "p-dialog-header-icon p-dialog-header-close p-link",
        "aria-label": t,
        onClick: ee
      }, /* @__PURE__ */ l.exports.createElement("span", {
        className: "p-dialog-header-close-icon pi pi-times",
        "aria-hidden": "true"
      }), /* @__PURE__ */ l.exports.createElement(Ie, null));
    }
    return null;
  }, st = function() {
    var t = U("p-dialog-header-maximize-icon pi", {
      "pi-window-maximize": !L,
      "pi-window-minimize": L
    });
    return e.maximizable ? /* @__PURE__ */ l.exports.createElement("button", {
      type: "button",
      className: "p-dialog-header-icon p-dialog-header-maximize p-link",
      onClick: Be
    }, /* @__PURE__ */ l.exports.createElement("span", {
      className: t
    }), /* @__PURE__ */ l.exports.createElement(Ie, null)) : null;
  }, ct = function() {
    if (e.showHeader) {
      var t = ot(), u = st(), m = ae.getJSXElement(e.icons, e), N = ae.getJSXElement(e.header, e), M = h + "_header", k = U("p-dialog-header", e.headerClassName);
      return /* @__PURE__ */ l.exports.createElement("div", {
        ref: oe,
        style: e.headerStyle,
        className: k,
        onMouseDown: Ke
      }, /* @__PURE__ */ l.exports.createElement("div", {
        id: M,
        className: "p-dialog-title"
      }, N), /* @__PURE__ */ l.exports.createElement("div", {
        className: "p-dialog-header-icons"
      }, m, u, t));
    }
    return null;
  }, ut = function() {
    var t = U("p-dialog-content", e.contentClassName), u = h + "_content";
    return /* @__PURE__ */ l.exports.createElement("div", {
      id: u,
      ref: le,
      className: t,
      style: e.contentStyle
    }, e.children);
  }, dt = function() {
    var t = ae.getJSXElement(e.footer, e);
    return t && /* @__PURE__ */ l.exports.createElement("div", {
      ref: v,
      className: "p-dialog-footer"
    }, t);
  }, mt = function() {
    return e.resizable ? /* @__PURE__ */ l.exports.createElement("span", {
      className: "p-resizable-handle",
      style: {
        zIndex: 90
      },
      onMouseDown: Ye
    }) : null;
  }, pt = function() {
    var t = ve.getOtherProps(e), u = U("p-dialog p-component", e.className, {
      "p-dialog-rtl": e.rtl,
      "p-dialog-maximized": L,
      "p-dialog-default": !L,
      "p-input-filled": ne.inputStyle === "filled",
      "p-ripple-disabled": ne.ripple === !1
    }), m = U("p-dialog-mask", We(), {
      "p-component-overlay p-component-overlay-enter": e.modal,
      "p-dialog-visible": w,
      "p-dialog-draggable": e.draggable,
      "p-dialog-resizable": e.resizable
    }, e.maskClassName), N = ct(), M = ut(), k = dt(), p = mt(), C = h + "_header", K = h + "_content", fe = {
      enter: e.position === "center" ? 150 : 300,
      exit: e.position === "center" ? 150 : 300
    };
    return /* @__PURE__ */ l.exports.createElement("div", {
      ref: z,
      style: e.maskStyle,
      className: m,
      onClick: je
    }, /* @__PURE__ */ l.exports.createElement(xt, {
      nodeRef: c,
      classNames: "p-dialog",
      timeout: fe,
      in: I,
      options: e.transitionOptions,
      unmountOnExit: !0,
      onEnter: qe,
      onEntered: Qe,
      onExiting: et,
      onExited: tt
    }, /* @__PURE__ */ l.exports.createElement("div", Pe({
      ref: c,
      id: h,
      className: u,
      style: e.style,
      onClick: e.onClick,
      role: "dialog"
    }, t, {
      "aria-labelledby": C,
      "aria-describedby": K,
      "aria-modal": e.modal
    }), N, M, k, p)));
  }, ft = function() {
    var t = pt();
    return /* @__PURE__ */ l.exports.createElement(yt, {
      element: t,
      appendTo: e.appendTo,
      visible: !0
    });
  };
  return w && ft();
});
He.displayName = "Dialog";
const At = () => {
  var ue, q, de, me, pe, Q;
  const { columns: r, components: s } = l.exports.useContext(Ct), e = Nt(), { resource: a, data: d } = $e(), D = (ue = a == null ? void 0 : a.columns) != null ? ue : [], h = zt(), [R, P] = l.exports.useState(!1), w = l.exports.useRef(null), S = l.exports.useRef(null), ie = l.exports.useRef(), J = l.exports.useRef(null), [I, Z] = l.exports.useState([]), [he, A] = l.exports.useState(!1), [O, X] = l.exports.useState(null);
  l.exports.useEffect(() => {
    S.current && !R && (S.current.value = h.globalSearch);
  }, [R, d]);
  const c = D.flatMap((n) => n.toggleable ? {
    field: n.columnName,
    header: n.label,
    isToggledHiddenByDefault: n.isToggledHiddenByDefault
  } : []), [z, le] = l.exports.useState(c.filter((n) => !n.isToggledHiddenByDefault)), oe = D.filter((n) => !n.toggleable || z.find((x) => x.field === n.columnName));
  let v;
  const Y = (n) => {
    v = n, V();
  }, j = Oe(() => V(), 300), B = Array();
  for (const n of (q = JSON.parse(h.sort)) != null ? q : [])
    B.push({
      field: n.field,
      order: n.order
    });
  let y = {};
  const T = (de = JSON.parse(h.columnsSearch)) != null ? de : {};
  D.forEach((n) => {
    (n.customFilter || n.searchable && !n.isGloballySearchable) && (y[n.columnName] = {
      value: T[n.columnName],
      matchMode: Dt.CUSTOM
    });
  });
  const W = Oe((n) => {
    y = {}, Object.entries(n.filters).forEach((x) => {
      y[x[0]] = x[1];
    }), V();
  }, 300), V = () => {
    var x, F, g, H;
    let n = {};
    if (n.page = v === void 0 || v.page === void 0 ? (x = d == null ? void 0 : d.currentPage) != null ? x : 1 : v.page + 1, n.perPage = (g = (F = v == null ? void 0 : v.rows) != null ? F : d == null ? void 0 : d.perPage) != null ? g : 10, v != null && v.multiSortMeta) {
      const E = JSON.stringify(v.multiSortMeta);
      E.length > 2 && (n.sort = E);
    }
    if ((H = S.current) != null && H.value && (n.globalSearch = S.current.value), y) {
      const E = {};
      Object.entries(y).forEach(([ee, te]) => {
        "value" in te && te.value && (E[ee] = te.value);
      }), Object.keys(E).length && (n.columnsSearch = JSON.stringify(E));
    }
    Te.get(`/${e.prefix}/${a == null ? void 0 : a.pluralLabel.toLowerCase()}`, n, {
      preserveState: !0,
      preserveScroll: !0,
      replace: !0,
      onStart: () => P(!0),
      onFinish: () => {
        P(!1);
      }
    });
  }, L = ((me = S.current) == null ? void 0 : me.value) || (v == null ? void 0 : v.multiSortMeta) || !!Object.entries(y).filter(([, n]) => n.value).length;
  function ye() {
    y = {}, S.current.value = "", v = void 0, V();
  }
  let se = D.filter((n) => n.exportable);
  const xe = (n) => {
    var x;
    (x = w.current) == null || x.exportCSV(n);
  }, Se = /* @__PURE__ */ b(we.Fragment, {
    children: [
      /* @__PURE__ */ o(_, {
        label: "No",
        icon: "pi pi-times",
        className: "p-button-text",
        onClick: () => {
          A(!1), X(null);
        }
      }),
      /* @__PURE__ */ o(_, {
        label: "Yes",
        icon: "pi pi-check",
        className: "p-button-text",
        onClick: () => {
          var n, x;
          (O !== null || I !== null) && Te.delete("", {
            data: {
              [(n = a == null ? void 0 : a.primaryKeyColumn) != null ? n : "id"]: O !== null ? [String(O[(x = a == null ? void 0 : a.primaryKeyColumn) != null ? x : "id"])] : I.map((F) => {
                var g;
                return String(F[(g = a == null ? void 0 : a.primaryKeyColumn) != null ? g : "id"]);
              })
            },
            preserveState: !0,
            preserveScroll: !0
          }), Z([]), X(null), A(!1);
        }
      })
    ]
  }), Ce = /* @__PURE__ */ o(we.Fragment, {}), ce = /* @__PURE__ */ b(we.Fragment, {
    children: [
      /* @__PURE__ */ o(_, {
        className: "p-button-success mr-2",
        icon: "pi pi-plus",
        label: "New",
        onClick: () => _e(`/${e.prefix}/${a == null ? void 0 : a.name}/create`)
      }),
      /* @__PURE__ */ o(_, {
        className: "p-button-danger",
        icon: "pi pi-trash",
        label: "Delete",
        onClick: () => {
          I.length && A(!0);
        }
      })
    ]
  }), Ne = /* @__PURE__ */ b("div", {
    className: "flex justify-content-between flex-column sm:flex-row",
    children: [
      /* @__PURE__ */ b("div", {
        className: "flex mb-3",
        children: [
          !!se.length && /* @__PURE__ */ o(_, {
            icon: "pi pi-external-link",
            className: "p-button-primary  mr-2",
            label: "Export",
            onClick: xe
          }),
          L && /* @__PURE__ */ o(_, {
            type: "button",
            icon: "pi pi-filter-slash",
            label: "Clear",
            className: "p-button-outlined",
            onClick: ye
          })
        ]
      }),
      /* @__PURE__ */ b("div", {
        className: "flex",
        children: [
          /* @__PURE__ */ o("div", {
            children: /* @__PURE__ */ b("span", {
              className: "p-input-icon-left",
              children: [
                /* @__PURE__ */ o("i", {
                  className: "pi pi-search"
                }),
                /* @__PURE__ */ o(Et, {
                  ref: S,
                  placeholder: "Keyword Search",
                  onChange: j
                }),
                S.current && S.current.value && R && /* @__PURE__ */ o("i", {
                  className: "pi pi-spin pi-spinner global-search-icon"
                })
              ]
            })
          }),
          /* @__PURE__ */ o("div", {
            id: "toggleableFields",
            className: "mx-2",
            ref: ie,
            children: c.length > 0 && /* @__PURE__ */ b(G, {
              children: [
                /* @__PURE__ */ o(_, {
                  className: "p-button-rounded p-button-text",
                  icon: "pi pi-table",
                  onClick: () => J.current.show()
                }),
                /* @__PURE__ */ o(Rt, {
                  ref: J,
                  appendTo: ie.current,
                  className: "hidden",
                  optionLabel: "header",
                  panelClassName: "toggleableFields",
                  options: c,
                  value: z,
                  multiple: !0,
                  onChange: (n) => {
                    le(n.value);
                  }
                })
              ]
            })
          })
        ]
      })
    ]
  }), De = (n) => /* @__PURE__ */ b(G, {
    children: [
      /* @__PURE__ */ o(_, {
        icon: "pi pi-pencil",
        className: "p-button-rounded p-button-success mr-2",
        onClick: () => {
          _e(`/${e == null ? void 0 : e.prefix}/${a == null ? void 0 : a.name}/edit/${n[a == null ? void 0 : a.primaryKeyColumn]}`, !1, !1);
        }
      }),
      /* @__PURE__ */ o(_, {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-danger",
        onClick: () => {
          X(n), A(!0);
        }
      })
    ]
  });
  return /* @__PURE__ */ b(G, {
    children: [
      /* @__PURE__ */ o(wt, {
        start: Ce,
        end: ce
      }),
      /* @__PURE__ */ b(Pt, {
        ref: w,
        dataKey: (pe = a == null ? void 0 : a.primaryKeyColumn) != null ? pe : "id",
        selection: I,
        onSelectionChange: (n) => Z(n.value),
        header: Ne,
        size: "small",
        first: (d.currentPage - 1) * d.perPage,
        lazy: !0,
        loading: R,
        multiSortMeta: B,
        paginator: !0,
        paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
        rows: d == null ? void 0 : d.perPage,
        rowsPerPageOptions: e.rowsPerPageOptions,
        showGridlines: a == null ? void 0 : a.showGridlines,
        stripedRows: a == null ? void 0 : a.stripedRows,
        totalRecords: d == null ? void 0 : d.totalCount,
        value: d == null ? void 0 : d.data,
        currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
        filterDisplay: "menu",
        globalFilter: "contains",
        removableSort: !0,
        responsiveLayout: "scroll",
        sortMode: "multiple",
        onSort: Y,
        onPage: Y,
        onFilter: W,
        filters: y,
        children: [
          /* @__PURE__ */ o(ke, {
            exportable: !1,
            selectionMode: "multiple",
            style: { width: "3rem" },
            filter: !1
          }),
          oe.map((n) => {
            var F;
            return /* @__PURE__ */ o(ke, {
              body: (g) => {
                var H, E;
                return R ? /* @__PURE__ */ o(Fe, {}) : /* @__PURE__ */ o(Lt, {
                  resource: a,
                  column: n,
                  columnValue: g[n.columnName],
                  record: g,
                  children: r != null && r.has(n.componentName) ? r == null ? void 0 : r.get(n.componentName)({
                    column: n,
                    columnValue: (H = g[n.columnName]) != null ? H : g.defaultValue,
                    record: g,
                    resource: a
                  }) : /* @__PURE__ */ o("div", {
                    children: (E = g[n.columnName]) != null ? E : g.defaultValue
                  })
                });
              },
              field: n.columnName,
              header: n.label,
              sortable: n.sortable,
              showFilterMatchModes: !1,
              showClearButton: !0,
              filterMatchMode: "custom",
              excludeGlobalFilter: !n.isGloballySearchable,
              filterField: n.columnName,
              style: { minWidth: "8rem" },
              exportable: n.exportable,
              hidden: n.hidden,
              filter: !!n.customFilter || n.searchable && !n.isGloballySearchable,
              filterPlaceholder: (F = n.searchPlaceholder) != null ? F : `Search by ${n.label}`,
              filterElement: n.customFilter ? (g) => /* @__PURE__ */ o("div", {
                children: s != null && s.has(n.customFilter.componentName) ? s == null ? void 0 : s.get(n.customFilter.componentName)({
                  key: `${n.columnName}_filter`,
                  component: n.customFilter,
                  setFieldValue: (H, E) => {
                    g.filterCallback(E);
                  },
                  formData: { [n.columnName]: g.value },
                  errors: {}
                }) : /* @__PURE__ */ o(G, {
                  children: n.customFilter.componentName
                })
              }) : void 0
            }, n.columnName);
          }),
          /* @__PURE__ */ o(ke, {
            body: R ? /* @__PURE__ */ o(Fe, {}) : De,
            headerStyle: { minWidth: "10rem" },
            filter: !1
          })
        ]
      }),
      /* @__PURE__ */ o(He, {
        visible: he,
        style: { width: "450px" },
        header: "Confirm",
        modal: !0,
        footer: Se,
        onHide: () => {
          A(!1), X(null);
        },
        children: /* @__PURE__ */ b("div", {
          className: "confirmation-content",
          children: [
            /* @__PURE__ */ o("i", {
              className: "pi pi-exclamation-triangle mr-3",
              style: { fontSize: "2rem" }
            }),
            O && /* @__PURE__ */ b("span", {
              children: [
                "Are you sure you want to delete ",
                /* @__PURE__ */ o("b", {
                  children: O[(Q = a == null ? void 0 : a.titleColumn) != null ? Q : "id"]
                }),
                "?"
              ]
            }),
            O === null && I.length && /* @__PURE__ */ b("span", {
              children: [
                "Are you sure you want to delete the ",
                /* @__PURE__ */ b("b", {
                  children: [
                    I.length,
                    " selected records"
                  ]
                }),
                "?"
              ]
            })
          ]
        })
      })
    ]
  });
}, Vt = () => {
  const { resource: r } = $e();
  return /* @__PURE__ */ b(G, {
    children: [
      /* @__PURE__ */ o(kt, {
        title: r == null ? void 0 : r.pluralLabel
      }),
      /* @__PURE__ */ o("div", {
        className: "grid",
        children: /* @__PURE__ */ o("div", {
          className: "col-12",
          children: /* @__PURE__ */ b("div", {
            className: "card",
            children: [
              /* @__PURE__ */ o("h5", {
                children: r == null ? void 0 : r.pluralLabel
              }),
              /* @__PURE__ */ o(At, {})
            ]
          })
        })
      })
    ]
  });
};
export {
  Vt as default
};
