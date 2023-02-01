import { j as i, c as j, T as bt, F as A, r as l, U as dt, k as q, q as f, o as ft, h as Re, Z as Se, P as Q, b as gt, s as yt, O as fe, C as Nt, f as Tt, e as We, A as vt, u as ht, a as Fe, x as ze, i as pt, R as Ce, B as L, g as Pe, w as xt, y as Dt, S as Le, H as Rt } from "./main.74d2364d.js";
import { t as Me, T as St } from "./trinity_link.6e8f244f.js";
import { D as Ct, C as Ie } from "./column.esm.19bb3ca9.js";
function It() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get(e, s) {
      return e.get(s.toString());
    }
  });
}
const Vt = ({ column: e, record: s, children: o, resource: n }) => {
  var g;
  const m = `${e.columnName}_${s[n.primaryKeyColumn]}_tooltip`;
  return /* @__PURE__ */ i("div", {
    ...s[`${e.columnName}_extraAttributes`],
    className: j(s[`${e.columnName}_extraAttributes`] && "className" in s[`${e.columnName}_extraAttributes`] ? s[`${e.columnName}_extraAttributes`].className : "", {
      [`text-${e.color}-600`]: e.color
    }),
    style: { fontFamily: e.fontFamily },
    children: [
      (s[`${e.columnName}_tooltip`] || e.tooltip) && /* @__PURE__ */ i(bt, {
        target: `#${m}`
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
        lineNumber: 18,
        columnNumber: 76
      }, globalThis),
      /* @__PURE__ */ i("div", {
        id: m,
        "data-pr-tooltip": (g = s[`${e.columnName}_tooltip`]) != null ? g : e.tooltip,
        "data-pr-position": "top",
        children: [
          e.descriptionPosition === "above" ? /* @__PURE__ */ i("div", {
            className: "text-sm text-gray-500 mb-1",
            children: /* @__PURE__ */ i("p", {
              children: e.description
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
              lineNumber: 27,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 26,
            columnNumber: 21
          }, globalThis) : /* @__PURE__ */ i(A, {}, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 30,
            columnNumber: 21
          }, globalThis),
          /* @__PURE__ */ i("div", {
            className: "flex justify-content-start align-items-center",
            children: [
              e.icon && e.iconPosition == "before" && /* @__PURE__ */ i("i", {
                className: `mx-2 ${e.icon}`
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
                lineNumber: 34,
                columnNumber: 72
              }, globalThis),
              o,
              e.icon && e.iconPosition == "after" && /* @__PURE__ */ i("i", {
                className: `mx-2 ${e.icon}`
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
                lineNumber: 36,
                columnNumber: 71
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 33,
            columnNumber: 17
          }, globalThis),
          e.descriptionPosition === "bellow" ? /* @__PURE__ */ i("div", {
            className: "text-sm text-gray-500 mt-1",
            children: /* @__PURE__ */ i("p", {
              children: e.description
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
              lineNumber: 41,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 40,
            columnNumber: 21
          }, globalThis) : /* @__PURE__ */ i(A, {}, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 44,
            columnNumber: 21
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, globalThis);
};
function Ve() {
  return Ve = Object.assign ? Object.assign.bind() : function(e) {
    for (var s = 1; s < arguments.length; s++) {
      var o = arguments[s];
      for (var n in o)
        Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
    }
    return e;
  }, Ve.apply(this, arguments);
}
function Ee(e, s) {
  (s == null || s > e.length) && (s = e.length);
  for (var o = 0, n = new Array(s); o < s; o++)
    n[o] = e[o];
  return n;
}
function Et(e) {
  if (Array.isArray(e))
    return Ee(e);
}
function wt(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Oe(e, s) {
  if (!!e) {
    if (typeof e == "string")
      return Ee(e, s);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set")
      return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return Ee(e, s);
  }
}
function kt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wt(e) {
  return Et(e) || wt(e) || Oe(e) || kt();
}
function zt(e) {
  if (Array.isArray(e))
    return e;
}
function Pt(e, s) {
  var o = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (o != null) {
    var n, m, g, W, R = [], x = !0, z = !1;
    try {
      if (g = (o = o.call(e)).next, s === 0) {
        if (Object(o) !== o)
          return;
        x = !1;
      } else
        for (; !(x = (n = g.call(o)).done) && (R.push(n.value), R.length !== s); x = !0)
          ;
    } catch (S) {
      z = !0, m = S;
    } finally {
      try {
        if (!x && o.return != null && (W = o.return(), Object(W) !== W))
          return;
      } finally {
        if (z)
          throw m;
      }
    }
    return R;
  }
}
function Lt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M(e, s) {
  return zt(e) || Pt(e, s) || Oe(e, s) || Lt();
}
var ge = /* @__PURE__ */ l.exports.forwardRef(function(e, s) {
  var o = e.id ? e.id : dt(), n = l.exports.useState(o), m = M(n, 2), g = m[0];
  m[1];
  var W = l.exports.useState(!1), R = M(W, 2), x = R[0], z = R[1], S = l.exports.useState(!1), K = M(S, 2), X = K[0], P = K[1], ee = l.exports.useState(e.maximized), te = M(ee, 2), F = te[0], O = te[1], u = l.exports.useRef(null), I = l.exports.useRef(null), G = l.exports.useRef(null), ae = l.exports.useRef(null), ie = l.exports.useRef(null), y = l.exports.useRef(null), _ = l.exports.useRef(!1), H = l.exports.useRef(!1), E = l.exports.useRef(null), T = l.exports.useRef(null), Y = l.exports.useRef(null), ne = l.exports.useRef(o), C = e.onMaximize ? e.maximized : F, ye = q({
    type: "keydown",
    listener: function(t) {
      return $e(t);
    }
  }), re = M(ye, 2), Ne = re[0], Te = re[1], ve = q({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Ke(t);
    }
  }), le = M(ve, 2), he = le[0], pe = le[1], xe = q({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Xe(t);
    }
  }), U = M(xe, 2), se = U[0], oe = U[1], ue = q({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Ae(t);
    }
  }), J = M(ue, 2), ce = J[0], a = J[1], v = q({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return He(t);
    }
  }), w = M(v, 2), N = w[0], $ = w[1], h = function(t) {
    e.onHide(), t.preventDefault();
  }, De = function() {
    var t = document.activeElement, c = t && u.current && u.current.contains(t);
    !c && e.closable && e.showHeader && y.current.focus();
  }, Z = function(t) {
    e.dismissableMask && e.modal && I.current === t.target && h(t), e.onMaskClick && e.onMaskClick(t);
  }, _e = function(t) {
    e.onMaximize ? e.onMaximize({
      originalEvent: t,
      maximized: !C
    }) : O(function(c) {
      return !c;
    }), t.preventDefault();
  }, $e = function(t) {
    var c = t.currentTarget;
    if (!(!c || !c.primeDialogParams)) {
      var b = c.primeDialogParams, D = b.length, k = b[D - 1] ? b[D - 1].id : void 0;
      if (k === g) {
        var V = document.getElementById(k);
        if (e.closable && e.closeOnEscape && t.key === "Escape")
          h(t), t.stopImmediatePropagation(), b.splice(D - 1, 1);
        else if (t.key === "Tab") {
          t.preventDefault();
          var d = f.getFocusableElements(V);
          if (d && d.length > 0)
            if (!document.activeElement)
              d[0].focus();
            else {
              var p = d.indexOf(document.activeElement);
              t.shiftKey ? p === -1 || p === 0 ? d[d.length - 1].focus() : d[p - 1].focus() : p === -1 || p === d.length - 1 ? d[0].focus() : d[p + 1].focus();
            }
        }
      }
    }
  }, Be = function(t) {
    f.hasClass(t.target, "p-dialog-header-icon") || f.hasClass(t.target.parentElement, "p-dialog-header-icon") || e.draggable && (_.current = !0, E.current = t.pageX, T.current = t.pageY, u.current.style.margin = "0", f.addClass(document.body, "p-unselectable-text"), e.onDragStart && e.onDragStart(t));
  }, Ae = function(t) {
    if (_.current) {
      var c = f.getOuterWidth(u.current), b = f.getOuterHeight(u.current), D = t.pageX - E.current, k = t.pageY - T.current, V = u.current.getBoundingClientRect(), d = V.left + D, p = V.top + k, B = f.getViewport();
      u.current.style.position = "fixed", e.keepInViewport ? (d >= e.minX && d + c < B.width && (E.current = t.pageX, u.current.style.left = d + "px"), p >= e.minY && p + b < B.height && (T.current = t.pageY, u.current.style.top = p + "px")) : (E.current = t.pageX, u.current.style.left = d + "px", T.current = t.pageY, u.current.style.top = p + "px"), e.onDrag && e.onDrag(t);
    }
  }, He = function(t) {
    _.current && (_.current = !1, f.removeClass(document.body, "p-unselectable-text"), e.onDragEnd && e.onDragEnd(t));
  }, je = function(t) {
    e.resizable && (H.current = !0, E.current = t.pageX, T.current = t.pageY, f.addClass(document.body, "p-unselectable-text"), e.onResizeStart && e.onResizeStart(t));
  }, we = function(t, c, b) {
    !b && (b = f.getViewport());
    var D = parseInt(t);
    return /^(\d+|(\.\d+))(\.\d+)?%$/.test(t) ? D * (b[c] / 100) : D;
  }, Ke = function(t) {
    if (H.current) {
      var c = t.pageX - E.current, b = t.pageY - T.current, D = f.getOuterWidth(u.current), k = f.getOuterHeight(u.current), V = u.current.getBoundingClientRect(), d = f.getViewport(), p = !parseInt(u.current.style.top) || !parseInt(u.current.style.left), B = we(u.current.style.minWidth, "width", d), me = we(u.current.style.minHeight, "height", d), be = D + c, de = k + b;
      p && (be += c, de += b), (!B || be > B) && V.left + be < d.width && (u.current.style.width = be + "px"), (!me || de > me) && V.top + de < d.height && (u.current.style.height = de + "px"), E.current = t.pageX, T.current = t.pageY, e.onResize && e.onResize(t);
    }
  }, Xe = function(t) {
    H.current && (H.current = !1, f.removeClass(document.body, "p-unselectable-text"), e.onResizeEnd && e.onResizeEnd(t));
  }, Ge = function() {
    u.current.style.position = "", u.current.style.left = "", u.current.style.top = "", u.current.style.margin = "";
  }, Ye = function() {
    var t = ["center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"], c = t.find(function(b) {
      return b === e.position || b.replace("-", "") === e.position;
    });
    return c ? "p-dialog-".concat(c) : "";
  }, Ue = function() {
    u.current.setAttribute(ne.current, "");
  }, Je = function() {
    e.onShow && e.onShow(), e.focusOnShow && De(), Qe();
  }, Ze = function() {
    e.modal && f.addClass(I.current, "p-component-overlay-leave"), e.blockScroll && f.removeClass(document.body, "p-overflow-hidden");
  }, qe = function() {
    _.current = !1, Se.clear(I.current), z(!1), ke();
  }, Qe = function() {
    et(), (e.blockScroll || e.maximizable && C) && f.addClass(document.body, "p-overflow-hidden");
  }, ke = function() {
    tt();
    var t = e.maximizable && C;
    if (e.modal) {
      var c = document.primeDialogParams && document.primeDialogParams.some(function(b) {
        return b.hasBlockScroll;
      });
      (c || t) && f.removeClass(document.body, "p-overflow-hidden");
    } else
      (e.blockScroll || t) && f.removeClass(document.body, "p-overflow-hidden");
  }, et = function() {
    e.draggable && (ce(), N()), e.resizable && (he(), se()), Ne();
    var t = {
      id: g,
      hasBlockScroll: e.blockScroll
    };
    document.primeDialogParams = document.primeDialogParams ? [].concat(Wt(document.primeDialogParams), [t]) : [t];
  }, tt = function() {
    a(), $(), pe(), oe(), Te(), document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function(t) {
      return t.id !== g;
    });
  }, at = function() {
    Y.current = f.createInlineStyle(Q.nonce);
    var t = "";
    for (var c in e.breakpoints)
      t += `
                @media screen and (max-width: `.concat(c, `) {
                    .p-dialog[`).concat(ne.current, `] {
                        width: `).concat(e.breakpoints[c], ` !important;
                    }
                }
            `);
    Y.current.innerHTML = t;
  }, it = function() {
    if (!e.blockScroll) {
      var t = C ? "addClass" : "removeClass";
      f[t](document.body, "p-overflow-hidden");
    }
  };
  ft(function() {
    e.visible && z(!0), e.breakpoints && at();
  }), Re(function() {
    e.visible && !x && z(!0), e.visible !== X && x && P(e.visible);
  }), Re(function() {
    x && (Se.set("modal", I.current, Q.autoZIndex, e.baseZIndex || Q.zIndex.modal), P(!0));
  }, [x]), Re(function() {
    it();
  }, [e.maximized, F]), gt(function() {
    ke(), f.removeInlineStyle(Y.current), Se.clear(I.current);
  }), l.exports.useImperativeHandle(s, function() {
    return {
      props: e,
      resetPosition: Ge,
      getElement: function() {
        return u.current;
      },
      getMask: function() {
        return I.current;
      },
      getContent: function() {
        return G.current;
      },
      getHeader: function() {
        return ae.current;
      },
      getFooter: function() {
        return ie.current;
      },
      getCloseButton: function() {
        return y.current;
      }
    };
  });
  var nt = function() {
    if (e.closable) {
      var t = e.ariaCloseIconLabel || Tt("close");
      return /* @__PURE__ */ l.exports.createElement("button", {
        ref: y,
        type: "button",
        className: "p-dialog-header-icon p-dialog-header-close p-link",
        "aria-label": t,
        onClick: h
      }, /* @__PURE__ */ l.exports.createElement("span", {
        className: "p-dialog-header-close-icon pi pi-times",
        "aria-hidden": "true"
      }), /* @__PURE__ */ l.exports.createElement(We, null));
    }
    return null;
  }, rt = function() {
    var t = j("p-dialog-header-maximize-icon pi", {
      "pi-window-maximize": !C,
      "pi-window-minimize": C
    });
    return e.maximizable ? /* @__PURE__ */ l.exports.createElement("button", {
      type: "button",
      className: "p-dialog-header-icon p-dialog-header-maximize p-link",
      onClick: _e
    }, /* @__PURE__ */ l.exports.createElement("span", {
      className: t
    }), /* @__PURE__ */ l.exports.createElement(We, null)) : null;
  }, lt = function() {
    if (e.showHeader) {
      var t = nt(), c = rt(), b = fe.getJSXElement(e.icons, e), D = fe.getJSXElement(e.header, e), k = g + "_header", V = j("p-dialog-header", e.headerClassName);
      return /* @__PURE__ */ l.exports.createElement("div", {
        ref: ae,
        style: e.headerStyle,
        className: V,
        onMouseDown: Be
      }, /* @__PURE__ */ l.exports.createElement("div", {
        id: k,
        className: "p-dialog-title"
      }, D), /* @__PURE__ */ l.exports.createElement("div", {
        className: "p-dialog-header-icons"
      }, b, c, t));
    }
    return null;
  }, st = function() {
    var t = j("p-dialog-content", e.contentClassName), c = g + "_content";
    return /* @__PURE__ */ l.exports.createElement("div", {
      id: c,
      ref: G,
      className: t,
      style: e.contentStyle
    }, e.children);
  }, ot = function() {
    var t = fe.getJSXElement(e.footer, e);
    return t && /* @__PURE__ */ l.exports.createElement("div", {
      ref: ie,
      className: "p-dialog-footer"
    }, t);
  }, ut = function() {
    return e.resizable ? /* @__PURE__ */ l.exports.createElement("span", {
      className: "p-resizable-handle",
      style: {
        zIndex: 90
      },
      onMouseDown: je
    }) : null;
  }, ct = function() {
    var t = fe.findDiffKeys(e, ge.defaultProps), c = j("p-dialog p-component", e.className, {
      "p-dialog-rtl": e.rtl,
      "p-dialog-maximized": C,
      "p-dialog-default": !C,
      "p-input-filled": Q.inputStyle === "filled",
      "p-ripple-disabled": Q.ripple === !1
    }), b = j("p-dialog-mask", Ye(), {
      "p-component-overlay p-component-overlay-enter": e.modal,
      "p-dialog-visible": x,
      "p-dialog-draggable": e.draggable,
      "p-dialog-resizable": e.resizable
    }, e.maskClassName), D = lt(), k = st(), V = ot(), d = ut(), p = g + "_header", B = g + "_content", me = {
      enter: e.position === "center" ? 150 : 300,
      exit: e.position === "center" ? 150 : 300
    };
    return /* @__PURE__ */ l.exports.createElement("div", {
      ref: I,
      style: e.maskStyle,
      className: b,
      onClick: Z
    }, /* @__PURE__ */ l.exports.createElement(Nt, {
      nodeRef: u,
      classNames: "p-dialog",
      timeout: me,
      in: X,
      options: e.transitionOptions,
      unmountOnExit: !0,
      onEnter: Ue,
      onEntered: Je,
      onExiting: Ze,
      onExited: qe
    }, /* @__PURE__ */ l.exports.createElement("div", Ve({
      ref: u,
      id: g,
      className: c,
      style: e.style,
      onClick: e.onClick,
      role: "dialog"
    }, t, {
      "aria-labelledby": p,
      "aria-describedby": B,
      "aria-modal": e.modal
    }), D, k, V, d)));
  }, mt = function() {
    var t = ct();
    return /* @__PURE__ */ l.exports.createElement(yt, {
      element: t,
      appendTo: e.appendTo,
      visible: !0
    });
  };
  return x && mt();
});
ge.displayName = "Dialog";
ge.defaultProps = {
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
  visible: !1
};
const Mt = () => {
  var U, se, oe, ue, J, ce;
  const { columns: e, components: s } = l.exports.useContext(vt), o = ht(), { resource: n, data: m } = Fe(), g = (U = n == null ? void 0 : n.columns) != null ? U : [], W = It(), [R, x] = l.exports.useState(!1), z = l.exports.useRef(null), S = l.exports.useRef(null), K = l.exports.useRef(), X = l.exports.useRef(null), [P, ee] = l.exports.useState([]), [te, F] = l.exports.useState(!1), [O, u] = l.exports.useState(null);
  l.exports.useEffect(() => {
    S.current && !R && (S.current.value = W.globalSearch);
  }, [R, m]);
  const I = g.flatMap((a) => a.toggleable ? {
    field: a.columnName,
    header: a.label,
    isToggledHiddenByDefault: a.isToggledHiddenByDefault
  } : []), [G, ae] = l.exports.useState(I.filter((a) => !a.isToggledHiddenByDefault)), ie = g.filter((a) => !a.toggleable || G.find((v) => v.field === a.columnName));
  let y;
  const _ = (a) => {
    y = a, C();
  }, H = ze(() => C(), 300), E = Array();
  for (const a of (se = JSON.parse(W.sort)) != null ? se : [])
    E.push({
      field: a.field,
      order: a.order
    });
  let T = {};
  const Y = (oe = JSON.parse(W.columnsSearch)) != null ? oe : {};
  g.forEach((a) => {
    (a.customFilter || a.searchable && !a.isGloballySearchable) && (T[a.columnName] = {
      value: Y[a.columnName],
      matchMode: pt.CUSTOM
    });
  });
  const ne = ze((a) => {
    T = {}, Object.entries(a.filters).forEach((v) => {
      T[v[0]] = v[1];
    }), C();
  }, 300), C = () => {
    var v, w, N, $;
    let a = {};
    if (a.page = y === void 0 || y.page === void 0 ? (v = m == null ? void 0 : m.currentPage) != null ? v : 1 : y.page + 1, a.perPage = (N = (w = y == null ? void 0 : y.rows) != null ? w : m == null ? void 0 : m.perPage) != null ? N : 10, y != null && y.multiSortMeta) {
      const h = JSON.stringify(y.multiSortMeta);
      h.length > 2 && (a.sort = h);
    }
    if (($ = S.current) != null && $.value && (a.globalSearch = S.current.value), T) {
      const h = {};
      Object.entries(T).forEach(([De, Z]) => {
        "value" in Z && Z.value && (h[De] = Z.value);
      }), Object.keys(h).length && (a.columnsSearch = JSON.stringify(h));
    }
    Pe.get(`/${o.prefix}/${n == null ? void 0 : n.pluralLabel.toLowerCase()}`, a, {
      preserveState: !0,
      preserveScroll: !0,
      replace: !0,
      onStart: () => x(!0),
      onFinish: () => {
        x(!1);
      }
    });
  }, ye = ((ue = S.current) == null ? void 0 : ue.value) || (y == null ? void 0 : y.multiSortMeta) || !!Object.entries(T).filter(([, a]) => a.value).length;
  function re() {
    T = {}, S.current.value = "", y = void 0, C();
  }
  let Ne = g.filter((a) => a.exportable);
  const Te = (a) => {
    var v;
    (v = z.current) == null || v.exportCSV(a);
  }, ve = /* @__PURE__ */ i(Ce.Fragment, {
    children: [
      /* @__PURE__ */ i(L, {
        label: "No",
        icon: "pi pi-times",
        className: "p-button-text",
        onClick: () => {
          F(!1), u(null);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 147,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(L, {
        label: "Yes",
        icon: "pi pi-check",
        className: "p-button-text",
        onClick: () => {
          var a, v;
          (O !== null || P !== null) && Pe.delete("", {
            data: {
              [(a = n == null ? void 0 : n.primaryKeyColumn) != null ? a : "id"]: O !== null ? [String(O[(v = n == null ? void 0 : n.primaryKeyColumn) != null ? v : "id"])] : P.map((w) => {
                var N;
                return String(w[(N = n == null ? void 0 : n.primaryKeyColumn) != null ? N : "id"]);
              })
            },
            preserveState: !0,
            preserveScroll: !0
          }), ee([]), u(null), F(!1);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 156,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 146,
    columnNumber: 9
  }, globalThis), le = /* @__PURE__ */ i(Ce.Fragment, {}, void 0, !1, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 178,
    columnNumber: 33
  }, globalThis), he = /* @__PURE__ */ i(Ce.Fragment, {
    children: [
      /* @__PURE__ */ i(L, {
        className: "p-button-success mr-2",
        icon: "pi pi-plus",
        label: "New",
        onClick: () => Me(`/${o.prefix}/${n == null ? void 0 : n.name}/create`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(L, {
        className: "p-button-danger",
        icon: "pi pi-trash",
        label: "Delete",
        onClick: () => {
          P.length && F(!0);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 188,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 181,
    columnNumber: 9
  }, globalThis), pe = /* @__PURE__ */ i("div", {
    className: "flex justify-content-between flex-column sm:flex-row",
    children: [
      /* @__PURE__ */ i("div", {
        className: "flex mb-3",
        children: [
          !!Ne.length && /* @__PURE__ */ i(L, {
            icon: "pi pi-external-link",
            className: "p-button-primary  mr-2",
            label: "Export",
            onClick: Te
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 203,
            columnNumber: 21
          }, globalThis),
          ye && /* @__PURE__ */ i(L, {
            type: "button",
            icon: "pi pi-filter-slash",
            label: "Clear",
            className: "p-button-outlined",
            onClick: re
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 211,
            columnNumber: 21
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 201,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i("div", {
        className: "flex",
        children: [
          /* @__PURE__ */ i("div", {
            children: /* @__PURE__ */ i("span", {
              className: "p-input-icon-left",
              children: [
                /* @__PURE__ */ i("i", {
                  className: "pi pi-search"
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 223,
                  columnNumber: 25
                }, globalThis),
                /* @__PURE__ */ i(xt, {
                  ref: S,
                  placeholder: "Keyword Search",
                  onChange: H
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 224,
                  columnNumber: 25
                }, globalThis),
                S.current && S.current.value && R && /* @__PURE__ */ i("i", {
                  className: "pi pi-spin pi-spinner global-search-icon"
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 229,
                  columnNumber: 101
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 222,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 221,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ i("div", {
            id: "toggleableFields",
            className: "mx-2",
            ref: K,
            children: I.length > 0 && /* @__PURE__ */ i(A, {
              children: [
                /* @__PURE__ */ i(L, {
                  className: "p-button-rounded p-button-text",
                  icon: "pi pi-table",
                  onClick: () => X.current.show()
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 240,
                  columnNumber: 29
                }, globalThis),
                /* @__PURE__ */ i(Dt, {
                  ref: X,
                  appendTo: K.current,
                  className: "hidden",
                  optionLabel: "header",
                  panelClassName: "toggleableFields",
                  options: I,
                  value: G,
                  multiple: !0,
                  onChange: (a) => {
                    ae(a.value);
                  }
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 246,
                  columnNumber: 29
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 239,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 233,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 220,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 200,
    columnNumber: 9
  }, globalThis), xe = (a) => /* @__PURE__ */ i(A, {
    children: [
      /* @__PURE__ */ i(L, {
        icon: "pi pi-pencil",
        className: "p-button-rounded p-button-success mr-2",
        onClick: () => {
          Me(`/${o == null ? void 0 : o.prefix}/${n == null ? void 0 : n.name}/edit/${a[n == null ? void 0 : n.primaryKeyColumn]}`, !1, !1);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 269,
        columnNumber: 17
      }, globalThis),
      /* @__PURE__ */ i(L, {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-danger",
        onClick: () => {
          u(a), F(!0);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 276,
        columnNumber: 17
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 268,
    columnNumber: 13
  }, globalThis);
  return /* @__PURE__ */ i(A, {
    children: [
      /* @__PURE__ */ i(St, {
        start: le,
        end: he
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 290,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(Ct, {
        ref: z,
        dataKey: (J = n == null ? void 0 : n.primaryKeyColumn) != null ? J : "id",
        selection: P,
        onSelectionChange: (a) => ee(a.value),
        header: pe,
        size: "small",
        first: (m.currentPage - 1) * m.perPage,
        lazy: !0,
        loading: R,
        multiSortMeta: E,
        paginator: !0,
        paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
        rows: m == null ? void 0 : m.perPage,
        rowsPerPageOptions: o.rowsPerPageOptions,
        showGridlines: n == null ? void 0 : n.showGridlines,
        stripedRows: n == null ? void 0 : n.stripedRows,
        totalRecords: m == null ? void 0 : m.totalCount,
        value: m == null ? void 0 : m.data,
        currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
        filterDisplay: "menu",
        globalFilter: "contains",
        removableSort: !0,
        responsiveLayout: "scroll",
        sortMode: "multiple",
        onSort: _,
        onPage: _,
        onFilter: ne,
        filters: T,
        children: [
          /* @__PURE__ */ i(Ie, {
            exportable: !1,
            selectionMode: "multiple",
            style: { width: "3rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 325,
            columnNumber: 17
          }, globalThis),
          ie.map((a) => {
            var w;
            return /* @__PURE__ */ i(Ie, {
              body: (N) => {
                var $, h;
                return R ? /* @__PURE__ */ i(Le, {}, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 334,
                  columnNumber: 29
                }, globalThis) : /* @__PURE__ */ i(Vt, {
                  resource: n,
                  column: a,
                  columnValue: N[a.columnName],
                  record: N,
                  children: e != null && e.has(a.componentName) ? e == null ? void 0 : e.get(a.componentName)({
                    column: a,
                    columnValue: ($ = N[a.columnName]) != null ? $ : N.defaultValue,
                    record: N,
                    resource: n
                  }) : /* @__PURE__ */ i("div", {
                    children: (h = N[a.columnName]) != null ? h : N.defaultValue
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                    lineNumber: 350,
                    columnNumber: 37
                  }, globalThis)
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 336,
                  columnNumber: 29
                }, globalThis);
              },
              field: a.columnName,
              header: a.label,
              sortable: a.sortable,
              showFilterMatchModes: !1,
              showClearButton: !0,
              filterMatchMode: "custom",
              excludeGlobalFilter: !a.isGloballySearchable,
              filterField: a.columnName,
              style: { minWidth: "8rem" },
              exportable: a.exportable,
              hidden: a.hidden,
              filter: !!a.customFilter || a.searchable && !a.isGloballySearchable,
              filterPlaceholder: (w = a.searchPlaceholder) != null ? w : `Search by ${a.label}`,
              filterElement: a.customFilter ? (N) => /* @__PURE__ */ i("div", {
                children: s != null && s.has(a.customFilter.componentName) ? s == null ? void 0 : s.get(a.customFilter.componentName)({
                  key: `${a.columnName}_filter`,
                  component: a.customFilter,
                  setFieldValue: ($, h) => {
                    N.filterCallback(h);
                  },
                  formData: { [a.columnName]: N.value },
                  errors: {}
                }) : /* @__PURE__ */ i(A, {
                  children: a.customFilter.componentName
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 394,
                  columnNumber: 55
                }, globalThis)
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                lineNumber: 382,
                columnNumber: 47
              }, globalThis) : void 0
            }, a.columnName, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 357,
              columnNumber: 25
            }, globalThis);
          }),
          /* @__PURE__ */ i(Ie, {
            body: R ? /* @__PURE__ */ i(Le, {}, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 405,
              columnNumber: 37
            }, globalThis) : xe,
            headerStyle: { minWidth: "10rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 404,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 295,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(ge, {
        visible: te,
        style: { width: "450px" },
        header: "Confirm",
        modal: !0,
        footer: ve,
        onHide: () => {
          F(!1), u(null);
        },
        children: /* @__PURE__ */ i("div", {
          className: "confirmation-content",
          children: [
            /* @__PURE__ */ i("i", {
              className: "pi pi-exclamation-triangle mr-3",
              style: { fontSize: "2rem" }
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 423,
              columnNumber: 21
            }, globalThis),
            O && /* @__PURE__ */ i("span", {
              children: [
                "Are you sure you want to delete ",
                /* @__PURE__ */ i("b", {
                  children: O[(ce = n == null ? void 0 : n.titleColumn) != null ? ce : "id"]
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 429,
                  columnNumber: 61
                }, globalThis),
                "?"
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 428,
              columnNumber: 25
            }, globalThis),
            O === null && P.length && /* @__PURE__ */ i("span", {
              children: [
                "Are you sure you want to delete the ",
                /* @__PURE__ */ i("b", {
                  children: [
                    P.length,
                    " selected records"
                  ]
                }, void 0, !0, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 434,
                  columnNumber: 65
                }, globalThis),
                "?"
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 433,
              columnNumber: 25
            }, globalThis)
          ]
        }, void 0, !0, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
          lineNumber: 422,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 411,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 289,
    columnNumber: 9
  }, globalThis);
}, $t = () => {
  const { resource: e } = Fe();
  return /* @__PURE__ */ i(A, {
    children: [
      /* @__PURE__ */ i(Rt, {
        title: e == null ? void 0 : e.pluralLabel
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
        lineNumber: 11,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i("div", {
        className: "grid",
        children: /* @__PURE__ */ i("div", {
          className: "col-12",
          children: /* @__PURE__ */ i("div", {
            className: "card",
            children: [
              /* @__PURE__ */ i("h5", {
                children: e == null ? void 0 : e.pluralLabel
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                lineNumber: 16,
                columnNumber: 25
              }, globalThis),
              /* @__PURE__ */ i(Mt, {}, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                lineNumber: 18,
                columnNumber: 25
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
            lineNumber: 15,
            columnNumber: 21
          }, globalThis)
        }, void 0, !1, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
          lineNumber: 14,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, globalThis);
};
export {
  $t as default
};
