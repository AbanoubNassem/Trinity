import { j as i, e as F, z as gt, F as K, r as o, U as Nt, m as te, s as f, n as yt, c as Re, Z as Se, t as ae, o as Tt, O as ne, y as ht, C as vt, i as xt, h as ze, A as Oe, u as _e, a as $e, G as Pe, k as Dt, R as Ie, B as M, g as we, E as Rt, J as St, T as It, S as Le, H as Ct } from "./main.cc3d6ba0.js";
import { D as Vt, C as Ce } from "./datatable.esm.c506727c.js";
import { t as Me } from "./trinity_link.24040162.js";
function Et() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get(a, l) {
      return a.get(l.toString());
    }
  });
}
const Wt = ({ column: a, record: l, children: e, resource: r }) => {
  var m;
  const u = `${a.columnName}_${l[r.primaryKeyColumn]}_tooltip`;
  return /* @__PURE__ */ i("div", {
    ...l[`${a.columnName}_extraAttributes`],
    className: F(l[`${a.columnName}_extraAttributes`] && "className" in l[`${a.columnName}_extraAttributes`] ? l[`${a.columnName}_extraAttributes`].className : "", {
      [`text-${a.color}-600`]: a.color
    }),
    style: { fontFamily: a.fontFamily },
    children: [
      (l[`${a.columnName}_tooltip`] || a.tooltip) && /* @__PURE__ */ i(gt, {
        target: `#${u}`
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
        lineNumber: 18,
        columnNumber: 76
      }, globalThis),
      /* @__PURE__ */ i("div", {
        id: u,
        "data-pr-tooltip": (m = l[`${a.columnName}_tooltip`]) != null ? m : a.tooltip,
        "data-pr-position": "top",
        children: [
          a.descriptionPosition === "above" ? /* @__PURE__ */ i("div", {
            className: "text-sm text-gray-500 mb-1",
            children: /* @__PURE__ */ i("p", {
              children: a.description
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
              lineNumber: 27,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 26,
            columnNumber: 21
          }, globalThis) : /* @__PURE__ */ i(K, {}, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 30,
            columnNumber: 21
          }, globalThis),
          /* @__PURE__ */ i("div", {
            className: "flex justify-content-start align-items-center",
            children: [
              a.icon && a.iconPosition == "before" && /* @__PURE__ */ i("i", {
                className: `mx-2 ${a.icon}`
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
                lineNumber: 34,
                columnNumber: 72
              }, globalThis),
              e,
              a.icon && a.iconPosition == "after" && /* @__PURE__ */ i("i", {
                className: `mx-2 ${a.icon}`
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
          a.descriptionPosition === "bellow" ? /* @__PURE__ */ i("div", {
            className: "text-sm text-gray-500 mt-1",
            children: /* @__PURE__ */ i("p", {
              children: a.description
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
              lineNumber: 41,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 40,
            columnNumber: 21
          }, globalThis) : /* @__PURE__ */ i(K, {}, void 0, !1, {
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
  return Ve = Object.assign ? Object.assign.bind() : function(a) {
    for (var l = 1; l < arguments.length; l++) {
      var e = arguments[l];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]);
    }
    return a;
  }, Ve.apply(this, arguments);
}
function Ee(a, l) {
  (l == null || l > a.length) && (l = a.length);
  for (var e = 0, r = new Array(l); e < l; e++)
    r[e] = a[e];
  return r;
}
function kt(a) {
  if (Array.isArray(a))
    return Ee(a);
}
function zt(a) {
  if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null)
    return Array.from(a);
}
function Fe(a, l) {
  if (!!a) {
    if (typeof a == "string")
      return Ee(a, l);
    var e = Object.prototype.toString.call(a).slice(8, -1);
    if (e === "Object" && a.constructor && (e = a.constructor.name), e === "Map" || e === "Set")
      return Array.from(a);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return Ee(a, l);
  }
}
function Pt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wt(a) {
  return kt(a) || zt(a) || Fe(a) || Pt();
}
function Lt(a) {
  if (Array.isArray(a))
    return a;
}
function Mt(a, l) {
  var e = a == null ? null : typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (e != null) {
    var r, u, m, g, S = [], V = !0, I = !1;
    try {
      if (m = (e = e.call(a)).next, l === 0) {
        if (Object(e) !== e)
          return;
        V = !1;
      } else
        for (; !(V = (r = m.call(e)).done) && (S.push(r.value), S.length !== l); V = !0)
          ;
    } catch (v) {
      I = !0, u = v;
    } finally {
      try {
        if (!V && e.return != null && (g = e.return(), Object(g) !== g))
          return;
      } finally {
        if (I)
          throw u;
      }
    }
    return S;
  }
}
function Ot() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function O(a, l) {
  return Lt(a) || Mt(a, l) || Fe(a, l) || Ot();
}
var ge = {
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
  getProps: function(l) {
    return ne.getMergedProps(l, ge.defaultProps);
  },
  getOtherProps: function(l) {
    return ne.getDiffProps(l, ge.defaultProps);
  }
}, Be = /* @__PURE__ */ o.exports.forwardRef(function(a, l) {
  var e = ge.getProps(a), r = e.id ? e.id : Nt(), u = o.exports.useState(r), m = O(u, 2), g = m[0];
  m[1];
  var S = o.exports.useState(!1), V = O(S, 2), I = V[0], v = V[1], ie = o.exports.useState(!1), X = O(ie, 2), E = X[0], Y = X[1], Ne = o.exports.useState(e.maximized), _ = O(Ne, 2), P = _[0], G = _[1], c = o.exports.useRef(null), W = o.exports.useRef(null), re = o.exports.useRef(null), le = o.exports.useRef(null), y = o.exports.useRef(null), U = o.exports.useRef(null), B = o.exports.useRef(!1), A = o.exports.useRef(!1), T = o.exports.useRef(null), w = o.exports.useRef(null), J = o.exports.useRef(null), H = o.exports.useRef(r), k = e.onMaximize ? e.maximized : P, ye = te({
    type: "keydown",
    listener: function(t) {
      return je(t);
    }
  }), se = O(ye, 2), Te = se[0], he = se[1], ve = te({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Ye(t);
    }
  }), oe = O(ve, 2), xe = oe[0], De = oe[1], ce = te({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Je(t);
    }
  }), Z = O(ce, 2), ue = Z[0], me = Z[1], de = te({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Ge(t);
    }
  }), q = O(de, 2), n = q[0], h = q[1], L = te({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Ue(t);
    }
  }), N = O(L, 2), $ = N[0], R = N[1], Q = function(t) {
    e.onHide(), t.preventDefault();
  }, ee = function() {
    var t = document.activeElement, d = t && c.current && c.current.contains(t);
    !d && e.closable && e.showHeader && U.current.focus();
  }, Ae = function(t) {
    e.dismissableMask && e.modal && W.current === t.target && Q(t), e.onMaskClick && e.onMaskClick(t);
  }, He = function(t) {
    e.onMaximize ? e.onMaximize({
      originalEvent: t,
      maximized: !k
    }) : G(function(d) {
      return !d;
    }), t.preventDefault();
  }, je = function(t) {
    var d = t.currentTarget;
    if (!(!d || !d.primeDialogParams)) {
      var b = d.primeDialogParams, D = b.length, z = b[D - 1] ? b[D - 1].id : void 0;
      if (z === g) {
        var C = document.getElementById(z);
        if (e.closable && e.closeOnEscape && t.key === "Escape")
          Q(t), t.stopImmediatePropagation(), b.splice(D - 1, 1);
        else if (t.key === "Tab") {
          t.preventDefault();
          var p = f.getFocusableElements(C);
          if (p && p.length > 0)
            if (!document.activeElement)
              p[0].focus();
            else {
              var x = p.indexOf(document.activeElement);
              t.shiftKey ? x === -1 || x === 0 ? p[p.length - 1].focus() : p[x - 1].focus() : x === -1 || x === p.length - 1 ? p[0].focus() : p[x + 1].focus();
            }
        }
      }
    }
  }, Ke = function(t) {
    f.hasClass(t.target, "p-dialog-header-icon") || f.hasClass(t.target.parentElement, "p-dialog-header-icon") || e.draggable && (B.current = !0, T.current = t.pageX, w.current = t.pageY, c.current.style.margin = "0", f.addClass(document.body, "p-unselectable-text"), e.onDragStart && e.onDragStart(t));
  }, Ge = function(t) {
    if (B.current) {
      var d = f.getOuterWidth(c.current), b = f.getOuterHeight(c.current), D = t.pageX - T.current, z = t.pageY - w.current, C = c.current.getBoundingClientRect(), p = C.left + D, x = C.top + z, j = f.getViewport();
      c.current.style.position = "fixed", e.keepInViewport ? (p >= e.minX && p + d < j.width && (T.current = t.pageX, c.current.style.left = p + "px"), x >= e.minY && x + b < j.height && (w.current = t.pageY, c.current.style.top = x + "px")) : (T.current = t.pageX, c.current.style.left = p + "px", w.current = t.pageY, c.current.style.top = x + "px"), e.onDrag && e.onDrag(t);
    }
  }, Ue = function(t) {
    B.current && (B.current = !1, f.removeClass(document.body, "p-unselectable-text"), e.onDragEnd && e.onDragEnd(t));
  }, Xe = function(t) {
    e.resizable && (A.current = !0, T.current = t.pageX, w.current = t.pageY, f.addClass(document.body, "p-unselectable-text"), e.onResizeStart && e.onResizeStart(t));
  }, We = function(t, d, b) {
    !b && (b = f.getViewport());
    var D = parseInt(t);
    return /^(\d+|(\.\d+))(\.\d+)?%$/.test(t) ? D * (b[d] / 100) : D;
  }, Ye = function(t) {
    if (A.current) {
      var d = t.pageX - T.current, b = t.pageY - w.current, D = f.getOuterWidth(c.current), z = f.getOuterHeight(c.current), C = c.current.getBoundingClientRect(), p = f.getViewport(), x = !parseInt(c.current.style.top) || !parseInt(c.current.style.left), j = We(c.current.style.minWidth, "width", p), be = We(c.current.style.minHeight, "height", p), pe = D + d, fe = z + b;
      x && (pe += d, fe += b), (!j || pe > j) && C.left + pe < p.width && (c.current.style.width = pe + "px"), (!be || fe > be) && C.top + fe < p.height && (c.current.style.height = fe + "px"), T.current = t.pageX, w.current = t.pageY, e.onResize && e.onResize(t);
    }
  }, Je = function(t) {
    A.current && (A.current = !1, f.removeClass(document.body, "p-unselectable-text"), e.onResizeEnd && e.onResizeEnd(t));
  }, Ze = function() {
    c.current.style.position = "", c.current.style.left = "", c.current.style.top = "", c.current.style.margin = "";
  }, qe = function() {
    var t = ["center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"], d = t.find(function(b) {
      return b === e.position || b.replace("-", "") === e.position;
    });
    return d ? "p-dialog-".concat(d) : "";
  }, Qe = function() {
    c.current.setAttribute(H.current, "");
  }, et = function() {
    e.onShow && e.onShow(), e.focusOnShow && ee(), nt();
  }, tt = function() {
    e.modal && f.addClass(W.current, "p-component-overlay-leave"), e.blockScroll && f.removeClass(document.body, "p-overflow-hidden");
  }, at = function() {
    B.current = !1, Se.clear(W.current), v(!1), ke();
  }, nt = function() {
    it(), (e.blockScroll || e.maximizable && k) && f.addClass(document.body, "p-overflow-hidden");
  }, ke = function() {
    rt();
    var t = e.maximizable && k;
    if (e.modal) {
      var d = document.primeDialogParams && document.primeDialogParams.some(function(b) {
        return b.hasBlockScroll;
      });
      (d || t) && f.removeClass(document.body, "p-overflow-hidden");
    } else
      (e.blockScroll || t) && f.removeClass(document.body, "p-overflow-hidden");
  }, it = function() {
    e.draggable && (n(), $()), e.resizable && (xe(), ue()), Te();
    var t = {
      id: g,
      hasBlockScroll: e.blockScroll
    };
    document.primeDialogParams = document.primeDialogParams ? [].concat(wt(document.primeDialogParams), [t]) : [t];
  }, rt = function() {
    h(), R(), De(), me(), he(), document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function(t) {
      return t.id !== g;
    });
  }, lt = function() {
    J.current = f.createInlineStyle(ae.nonce);
    var t = "";
    for (var d in e.breakpoints)
      t += `
                @media screen and (max-width: `.concat(d, `) {
                    .p-dialog[`).concat(H.current, `] {
                        width: `).concat(e.breakpoints[d], ` !important;
                    }
                }
            `);
    J.current.innerHTML = t;
  }, st = function() {
    if (!e.blockScroll) {
      var t = k ? "addClass" : "removeClass";
      f[t](document.body, "p-overflow-hidden");
    }
  };
  yt(function() {
    e.visible && v(!0), e.breakpoints && lt();
  }), Re(function() {
    e.visible && !I && v(!0), e.visible !== E && I && Y(e.visible);
  }), Re(function() {
    I && (Se.set("modal", W.current, ae.autoZIndex, e.baseZIndex || ae.zIndex.modal), Y(!0));
  }, [I]), Re(function() {
    st();
  }, [e.maximized, P]), Tt(function() {
    ke(), f.removeInlineStyle(J.current), Se.clear(W.current);
  }), o.exports.useImperativeHandle(l, function() {
    return {
      props: e,
      resetPosition: Ze,
      getElement: function() {
        return c.current;
      },
      getMask: function() {
        return W.current;
      },
      getContent: function() {
        return re.current;
      },
      getHeader: function() {
        return le.current;
      },
      getFooter: function() {
        return y.current;
      },
      getCloseButton: function() {
        return U.current;
      }
    };
  });
  var ot = function() {
    if (e.closable) {
      var t = e.ariaCloseIconLabel || xt("close");
      return /* @__PURE__ */ o.exports.createElement("button", {
        ref: U,
        type: "button",
        className: "p-dialog-header-icon p-dialog-header-close p-link",
        "aria-label": t,
        onClick: Q
      }, /* @__PURE__ */ o.exports.createElement("span", {
        className: "p-dialog-header-close-icon pi pi-times",
        "aria-hidden": "true"
      }), /* @__PURE__ */ o.exports.createElement(ze, null));
    }
    return null;
  }, ct = function() {
    var t = F("p-dialog-header-maximize-icon pi", {
      "pi-window-maximize": !k,
      "pi-window-minimize": k
    });
    return e.maximizable ? /* @__PURE__ */ o.exports.createElement("button", {
      type: "button",
      className: "p-dialog-header-icon p-dialog-header-maximize p-link",
      onClick: He
    }, /* @__PURE__ */ o.exports.createElement("span", {
      className: t
    }), /* @__PURE__ */ o.exports.createElement(ze, null)) : null;
  }, ut = function() {
    if (e.showHeader) {
      var t = ot(), d = ct(), b = ne.getJSXElement(e.icons, e), D = ne.getJSXElement(e.header, e), z = g + "_header", C = F("p-dialog-header", e.headerClassName);
      return /* @__PURE__ */ o.exports.createElement("div", {
        ref: le,
        style: e.headerStyle,
        className: C,
        onMouseDown: Ke
      }, /* @__PURE__ */ o.exports.createElement("div", {
        id: z,
        className: "p-dialog-title"
      }, D), /* @__PURE__ */ o.exports.createElement("div", {
        className: "p-dialog-header-icons"
      }, b, d, t));
    }
    return null;
  }, mt = function() {
    var t = F("p-dialog-content", e.contentClassName), d = g + "_content";
    return /* @__PURE__ */ o.exports.createElement("div", {
      id: d,
      ref: re,
      className: t,
      style: e.contentStyle
    }, e.children);
  }, dt = function() {
    var t = ne.getJSXElement(e.footer, e);
    return t && /* @__PURE__ */ o.exports.createElement("div", {
      ref: y,
      className: "p-dialog-footer"
    }, t);
  }, bt = function() {
    return e.resizable ? /* @__PURE__ */ o.exports.createElement("span", {
      className: "p-resizable-handle",
      style: {
        zIndex: 90
      },
      onMouseDown: Xe
    }) : null;
  }, pt = function() {
    var t = ge.getOtherProps(e), d = F("p-dialog p-component", e.className, {
      "p-dialog-rtl": e.rtl,
      "p-dialog-maximized": k,
      "p-dialog-default": !k,
      "p-input-filled": ae.inputStyle === "filled",
      "p-ripple-disabled": ae.ripple === !1
    }), b = F("p-dialog-mask", qe(), {
      "p-component-overlay p-component-overlay-enter": e.modal,
      "p-dialog-visible": I,
      "p-dialog-draggable": e.draggable,
      "p-dialog-resizable": e.resizable
    }, e.maskClassName), D = ut(), z = mt(), C = dt(), p = bt(), x = g + "_header", j = g + "_content", be = {
      enter: e.position === "center" ? 150 : 300,
      exit: e.position === "center" ? 150 : 300
    };
    return /* @__PURE__ */ o.exports.createElement("div", {
      ref: W,
      style: e.maskStyle,
      className: b,
      onClick: Ae
    }, /* @__PURE__ */ o.exports.createElement(vt, {
      nodeRef: c,
      classNames: "p-dialog",
      timeout: be,
      in: E,
      options: e.transitionOptions,
      unmountOnExit: !0,
      onEnter: Qe,
      onEntered: et,
      onExiting: tt,
      onExited: at
    }, /* @__PURE__ */ o.exports.createElement("div", Ve({
      ref: c,
      id: g,
      className: d,
      style: e.style,
      onClick: e.onClick,
      role: "dialog"
    }, t, {
      "aria-labelledby": x,
      "aria-describedby": j,
      "aria-modal": e.modal
    }), D, z, C, p)));
  }, ft = function() {
    var t = pt();
    return /* @__PURE__ */ o.exports.createElement(ht, {
      element: t,
      appendTo: e.appendTo,
      visible: !0
    });
  };
  return I && ft();
});
Be.displayName = "Dialog";
const _t = () => {
  var ce, Z, ue, me, de, q;
  const { columns: a, components: l } = o.exports.useContext(Oe), e = _e(), { resource: r, data: u } = $e(), m = (ce = r == null ? void 0 : r.columns) != null ? ce : [], g = Et(), [S, V] = o.exports.useState(!1), I = o.exports.useRef(null), v = o.exports.useRef(null), ie = o.exports.useRef(), X = o.exports.useRef(null), [E, Y] = o.exports.useState([]), [Ne, _] = o.exports.useState(!1), [P, G] = o.exports.useState(null);
  o.exports.useEffect(() => {
    v.current && !S && (v.current.value = g.globalSearch);
  }, [S, u]);
  const c = m.flatMap((n) => n.toggleable ? {
    field: n.columnName,
    header: n.label,
    isToggledHiddenByDefault: n.isToggledHiddenByDefault
  } : []), [W, re] = o.exports.useState(c.filter((n) => !n.isToggledHiddenByDefault)), le = m.filter((n) => !n.toggleable || W.find((h) => h.field === n.columnName));
  let y;
  const U = (n) => {
    y = n, H();
  }, B = Pe(() => H(), 300), A = Array();
  for (const n of (Z = JSON.parse(g.sort)) != null ? Z : [])
    A.push({
      field: n.field,
      order: n.order
    });
  let T = {};
  const w = (ue = JSON.parse(g.columnsSearch)) != null ? ue : {};
  m.forEach((n) => {
    (n.customFilter || n.searchable && !n.isGloballySearchable) && (T[n.columnName] = {
      value: w[n.columnName],
      matchMode: Dt.CUSTOM
    });
  });
  const J = Pe((n) => {
    T = {}, Object.entries(n.filters).forEach((h) => {
      T[h[0]] = h[1];
    }), H();
  }, 300), H = () => {
    var h, L, N, $;
    let n = {};
    if (n.page = y === void 0 || y.page === void 0 ? (h = u == null ? void 0 : u.currentPage) != null ? h : 1 : y.page + 1, n.perPage = (N = (L = y == null ? void 0 : y.rows) != null ? L : u == null ? void 0 : u.perPage) != null ? N : 10, y != null && y.multiSortMeta) {
      const R = JSON.stringify(y.multiSortMeta);
      R.length > 2 && (n.sort = R);
    }
    if (($ = v.current) != null && $.value && (n.globalSearch = v.current.value), T) {
      const R = {};
      Object.entries(T).forEach(([Q, ee]) => {
        "value" in ee && ee.value && (R[Q] = ee.value);
      }), Object.keys(R).length && (n.columnsSearch = JSON.stringify(R));
    }
    we.get(`/${e.prefix}/${r == null ? void 0 : r.pluralLabel.toLowerCase()}`, n, {
      preserveState: !0,
      preserveScroll: !0,
      replace: !0,
      onStart: () => V(!0),
      onFinish: () => {
        V(!1);
      }
    });
  }, k = ((me = v.current) == null ? void 0 : me.value) || (y == null ? void 0 : y.multiSortMeta) || !!Object.entries(T).filter(([, n]) => n.value).length;
  function ye() {
    T = {}, v.current.value = "", y = void 0, H();
  }
  let se = m.filter((n) => n.exportable);
  const Te = (n) => {
    var h;
    (h = I.current) == null || h.exportCSV(n);
  }, he = /* @__PURE__ */ i(Ie.Fragment, {
    children: [
      /* @__PURE__ */ i(M, {
        label: "No",
        icon: "pi pi-times",
        className: "p-button-text",
        onClick: () => {
          _(!1), G(null);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 147,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(M, {
        label: "Yes",
        icon: "pi pi-check",
        className: "p-button-text",
        onClick: () => {
          var n, h;
          (P !== null || E !== null) && we.delete("", {
            data: {
              [(n = r == null ? void 0 : r.primaryKeyColumn) != null ? n : "id"]: P !== null ? [String(P[(h = r == null ? void 0 : r.primaryKeyColumn) != null ? h : "id"])] : E.map((L) => {
                var N;
                return String(L[(N = r == null ? void 0 : r.primaryKeyColumn) != null ? N : "id"]);
              })
            },
            preserveState: !0,
            preserveScroll: !0
          }), Y([]), G(null), _(!1);
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
  }, globalThis), ve = /* @__PURE__ */ i(Ie.Fragment, {}, void 0, !1, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 178,
    columnNumber: 33
  }, globalThis), oe = /* @__PURE__ */ i(Ie.Fragment, {
    children: [
      /* @__PURE__ */ i(M, {
        className: "p-button-success mr-2",
        icon: "pi pi-plus",
        label: "Create",
        onClick: () => Me(`/${e.prefix}/${r == null ? void 0 : r.name}/create`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(M, {
        className: "p-button-danger",
        icon: "pi pi-trash",
        label: "Delete",
        disabled: E.length === 0,
        onClick: () => {
          E.length && _(!0);
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
  }, globalThis), xe = /* @__PURE__ */ i("div", {
    className: "flex justify-content-between flex-column sm:flex-row",
    children: [
      /* @__PURE__ */ i("div", {
        className: "flex mb-3",
        children: [
          !!se.length && /* @__PURE__ */ i(M, {
            icon: "pi pi-external-link",
            className: "p-button-primary  mr-2",
            label: "Export",
            onClick: Te
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 204,
            columnNumber: 21
          }, globalThis),
          k && /* @__PURE__ */ i(M, {
            type: "button",
            icon: "pi pi-filter-slash",
            label: "Clear",
            className: "p-button-outlined",
            onClick: ye
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 212,
            columnNumber: 21
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 202,
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
                  lineNumber: 224,
                  columnNumber: 25
                }, globalThis),
                /* @__PURE__ */ i(Rt, {
                  ref: v,
                  placeholder: "Keyword Search",
                  onChange: B
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 225,
                  columnNumber: 25
                }, globalThis),
                v.current && v.current.value && S && /* @__PURE__ */ i("i", {
                  className: "pi pi-spin pi-spinner global-search-icon"
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 230,
                  columnNumber: 101
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 223,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 222,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ i("div", {
            id: "toggleableFields",
            className: "mx-2",
            ref: ie,
            children: c.length > 0 && /* @__PURE__ */ i(K, {
              children: [
                /* @__PURE__ */ i(M, {
                  className: "p-button-rounded p-button-text",
                  icon: "pi pi-table",
                  onClick: () => X.current.show()
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 241,
                  columnNumber: 29
                }, globalThis),
                /* @__PURE__ */ i(St, {
                  ref: X,
                  appendTo: ie.current,
                  className: "hidden",
                  optionLabel: "header",
                  panelClassName: "toggleableFields",
                  options: c,
                  value: W,
                  multiple: !0,
                  onChange: (n) => {
                    re(n.value);
                  }
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 247,
                  columnNumber: 29
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 240,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 234,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 221,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 201,
    columnNumber: 9
  }, globalThis), De = (n) => /* @__PURE__ */ i(K, {
    children: [
      /* @__PURE__ */ i(M, {
        icon: "pi pi-pencil",
        className: "p-button-rounded p-button-success mr-2",
        onClick: () => {
          Me(`/${e == null ? void 0 : e.prefix}/${r == null ? void 0 : r.name}/edit/${n[r == null ? void 0 : r.primaryKeyColumn]}`, !1, !1);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 270,
        columnNumber: 17
      }, globalThis),
      /* @__PURE__ */ i(M, {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-danger",
        onClick: () => {
          G(n), _(!0);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 277,
        columnNumber: 17
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 269,
    columnNumber: 13
  }, globalThis);
  return /* @__PURE__ */ i(K, {
    children: [
      /* @__PURE__ */ i(It, {
        start: ve,
        end: oe
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 291,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(Vt, {
        ref: I,
        dataKey: (de = r == null ? void 0 : r.primaryKeyColumn) != null ? de : "id",
        selection: E,
        onSelectionChange: (n) => Y(n.value),
        header: xe,
        size: "small",
        first: (u.currentPage - 1) * u.perPage,
        lazy: !0,
        loading: S,
        multiSortMeta: A,
        paginator: !0,
        paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
        rows: u == null ? void 0 : u.perPage,
        rowsPerPageOptions: e.rowsPerPageOptions,
        showGridlines: r == null ? void 0 : r.showGridlines,
        stripedRows: r == null ? void 0 : r.stripedRows,
        totalRecords: u == null ? void 0 : u.totalCount,
        value: u == null ? void 0 : u.data,
        currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
        filterDisplay: "menu",
        globalFilter: "contains",
        removableSort: !0,
        responsiveLayout: "scroll",
        sortMode: "multiple",
        onSort: U,
        onPage: U,
        onFilter: J,
        filters: T,
        children: [
          /* @__PURE__ */ i(Ce, {
            exportable: !1,
            selectionMode: "multiple",
            style: { width: "3rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 326,
            columnNumber: 17
          }, globalThis),
          le.map((n) => {
            var L;
            return /* @__PURE__ */ i(Ce, {
              body: (N) => {
                var $, R;
                return S ? /* @__PURE__ */ i(Le, {}, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 335,
                  columnNumber: 29
                }, globalThis) : /* @__PURE__ */ i(Wt, {
                  resource: r,
                  column: n,
                  columnValue: N[n.columnName],
                  record: N,
                  children: a != null && a.has(n.componentName) ? a == null ? void 0 : a.get(n.componentName)({
                    column: n,
                    columnValue: ($ = N[n.columnName]) != null ? $ : N.defaultValue,
                    record: N,
                    resource: r
                  }) : /* @__PURE__ */ i("div", {
                    children: (R = N[n.columnName]) != null ? R : N.defaultValue
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                    lineNumber: 351,
                    columnNumber: 37
                  }, globalThis)
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 337,
                  columnNumber: 29
                }, globalThis);
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
              filterPlaceholder: (L = n.searchPlaceholder) != null ? L : `Search by ${n.label}`,
              filterElement: n.customFilter ? (N) => /* @__PURE__ */ i("div", {
                children: l != null && l.has(n.customFilter.componentName) ? l == null ? void 0 : l.get(n.customFilter.componentName)({
                  key: `${n.columnName}_filter`,
                  component: n.customFilter,
                  setFieldValue: ($, R) => {
                    N.filterCallback(R);
                  },
                  formData: { [n.columnName]: N.value },
                  errors: {}
                }) : /* @__PURE__ */ i(K, {
                  children: n.customFilter.componentName
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 392,
                  columnNumber: 55
                }, globalThis)
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                lineNumber: 380,
                columnNumber: 47
              }, globalThis) : void 0
            }, n.columnName, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 358,
              columnNumber: 25
            }, globalThis);
          }),
          /* @__PURE__ */ i(Ce, {
            body: S ? /* @__PURE__ */ i(Le, {}, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 403,
              columnNumber: 37
            }, globalThis) : De,
            headerStyle: { minWidth: "10rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 402,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 296,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(Be, {
        visible: Ne,
        style: { width: "450px" },
        header: "Confirm",
        modal: !0,
        footer: he,
        onHide: () => {
          _(!1), G(null);
        },
        children: /* @__PURE__ */ i("div", {
          className: "confirmation-content",
          children: [
            /* @__PURE__ */ i("i", {
              className: "pi pi-exclamation-triangle mr-3",
              style: { fontSize: "2rem" }
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 421,
              columnNumber: 21
            }, globalThis),
            P && /* @__PURE__ */ i("span", {
              children: [
                "Are you sure you want to delete ",
                /* @__PURE__ */ i("b", {
                  children: P[(q = r == null ? void 0 : r.titleColumn) != null ? q : "id"]
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 427,
                  columnNumber: 61
                }, globalThis),
                "?"
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 426,
              columnNumber: 25
            }, globalThis),
            P === null && E.length && /* @__PURE__ */ i("span", {
              children: [
                "Are you sure you want to delete the ",
                /* @__PURE__ */ i("b", {
                  children: [
                    E.length,
                    " selected records"
                  ]
                }, void 0, !0, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 432,
                  columnNumber: 65
                }, globalThis),
                "?"
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 431,
              columnNumber: 25
            }, globalThis)
          ]
        }, void 0, !0, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
          lineNumber: 420,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 409,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 290,
    columnNumber: 9
  }, globalThis);
}, At = () => {
  var r, u;
  const { resource: a } = $e(), { widgets: l } = o.exports.useContext(Oe), e = _e();
  return /* @__PURE__ */ i(K, {
    children: [
      /* @__PURE__ */ i(Ct, {
        title: a == null ? void 0 : a.pluralLabel
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
        lineNumber: 16,
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
                children: a == null ? void 0 : a.pluralLabel
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                lineNumber: 21,
                columnNumber: 25
              }, globalThis),
              /* @__PURE__ */ i("div", {
                className: "grid",
                children: (r = a == null ? void 0 : a.topWidgets) == null ? void 0 : r.map(
                  (m, g) => l != null && l.has(m.componentName) ? /* @__PURE__ */ i("div", {
                    className: F("col-12", m.columnSpan > 0 && m.columnSpan < 12 ? `md:col-${m.columnSpan}` : "md:col"),
                    children: l == null ? void 0 : l.get(m.componentName)({
                      configs: e,
                      resource: a,
                      widget: m
                    })
                  }, `widget_${g}_${m.componentName}`, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                    lineNumber: 26,
                    columnNumber: 37
                  }, globalThis) : /* @__PURE__ */ i("div", {
                    children: "Unknown Widget"
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                    lineNumber: 37,
                    columnNumber: 37
                  }, globalThis)
                )
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                lineNumber: 23,
                columnNumber: 25
              }, globalThis),
              /* @__PURE__ */ i(_t, {}, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                lineNumber: 42,
                columnNumber: 25
              }, globalThis),
              /* @__PURE__ */ i("div", {
                className: "grid",
                children: (u = a == null ? void 0 : a.bottomWidgets) == null ? void 0 : u.map(
                  (m, g) => l != null && l.has(m.componentName) ? /* @__PURE__ */ i("div", {
                    className: F("col-12", m.columnSpan > 0 && m.columnSpan < 12 ? `md:col-${m.columnSpan}` : "md:col"),
                    children: l == null ? void 0 : l.get(m.componentName)({
                      configs: e,
                      resource: a,
                      widget: m
                    })
                  }, `widget_${g}_${m.componentName}`, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                    lineNumber: 47,
                    columnNumber: 37
                  }, globalThis) : /* @__PURE__ */ i("div", {
                    children: "Unknown Widget"
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                    lineNumber: 58,
                    columnNumber: 37
                  }, globalThis)
                )
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                lineNumber: 44,
                columnNumber: 25
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
            lineNumber: 20,
            columnNumber: 21
          }, globalThis)
        }, void 0, !1, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
          lineNumber: 19,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, globalThis);
};
export {
  At as default
};
