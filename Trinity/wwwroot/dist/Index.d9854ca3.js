import { j as i, e as X, y as pt, F as j, r as s, U as ft, n as te, t as p, o as gt, f as Re, Z as Se, P as ae, c as yt, O as ne, x as Nt, C as Tt, k as vt, i as Pe, A as ht, u as xt, a as Oe, E as We, m as Dt, R as Ce, B as M, g as ze, z as Rt, G as St, T as Ct, S as Le, H as It } from "./main.2cd52deb.js";
import { D as Vt, C as Ie } from "./datatable.esm.de0c652e.js";
import { t as Me } from "./trinity_link.5486019e.js";
function Et() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get(a, o) {
      return a.get(o.toString());
    }
  });
}
const kt = ({ column: a, record: o, children: e, resource: r }) => {
  var D;
  const m = `${a.columnName}_${o[r.primaryKeyColumn]}_tooltip`;
  return /* @__PURE__ */ i("div", {
    ...o[`${a.columnName}_extraAttributes`],
    className: X(o[`${a.columnName}_extraAttributes`] && "className" in o[`${a.columnName}_extraAttributes`] ? o[`${a.columnName}_extraAttributes`].className : "", {
      [`text-${a.color}-600`]: a.color
    }),
    style: { fontFamily: a.fontFamily },
    children: [
      (o[`${a.columnName}_tooltip`] || a.tooltip) && /* @__PURE__ */ i(pt, {
        target: `#${m}`
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
        lineNumber: 18,
        columnNumber: 76
      }, globalThis),
      /* @__PURE__ */ i("div", {
        id: m,
        "data-pr-tooltip": (D = o[`${a.columnName}_tooltip`]) != null ? D : a.tooltip,
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
          }, globalThis) : /* @__PURE__ */ i(j, {}, void 0, !1, {
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
          }, globalThis) : /* @__PURE__ */ i(j, {}, void 0, !1, {
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
    for (var o = 1; o < arguments.length; o++) {
      var e = arguments[o];
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (a[r] = e[r]);
    }
    return a;
  }, Ve.apply(this, arguments);
}
function Ee(a, o) {
  (o == null || o > a.length) && (o = a.length);
  for (var e = 0, r = new Array(o); e < o; e++)
    r[e] = a[e];
  return r;
}
function wt(a) {
  if (Array.isArray(a))
    return Ee(a);
}
function Pt(a) {
  if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null)
    return Array.from(a);
}
function Fe(a, o) {
  if (!!a) {
    if (typeof a == "string")
      return Ee(a, o);
    var e = Object.prototype.toString.call(a).slice(8, -1);
    if (e === "Object" && a.constructor && (e = a.constructor.name), e === "Map" || e === "Set")
      return Array.from(a);
    if (e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
      return Ee(a, o);
  }
}
function Wt() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zt(a) {
  return wt(a) || Pt(a) || Fe(a) || Wt();
}
function Lt(a) {
  if (Array.isArray(a))
    return a;
}
function Mt(a, o) {
  var e = a == null ? null : typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (e != null) {
    var r, m, D, y, S = [], V = !0, C = !1;
    try {
      if (D = (e = e.call(a)).next, o === 0) {
        if (Object(e) !== e)
          return;
        V = !1;
      } else
        for (; !(V = (r = D.call(e)).done) && (S.push(r.value), S.length !== o); V = !0)
          ;
    } catch (v) {
      C = !0, m = v;
    } finally {
      try {
        if (!V && e.return != null && (y = e.return(), Object(y) !== y))
          return;
      } finally {
        if (C)
          throw m;
      }
    }
    return S;
  }
}
function Ot() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function O(a, o) {
  return Lt(a) || Mt(a, o) || Fe(a, o) || Ot();
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
  getProps: function(o) {
    return ne.getMergedProps(o, ge.defaultProps);
  },
  getOtherProps: function(o) {
    return ne.getDiffProps(o, ge.defaultProps);
  }
}, _e = /* @__PURE__ */ s.exports.forwardRef(function(a, o) {
  var e = ge.getProps(a), r = e.id ? e.id : ft(), m = s.exports.useState(r), D = O(m, 2), y = D[0];
  D[1];
  var S = s.exports.useState(!1), V = O(S, 2), C = V[0], v = V[1], ie = s.exports.useState(!1), Y = O(ie, 2), E = Y[0], U = Y[1], ye = s.exports.useState(e.maximized), F = O(ye, 2), W = F[0], K = F[1], u = s.exports.useRef(null), k = s.exports.useRef(null), re = s.exports.useRef(null), le = s.exports.useRef(null), g = s.exports.useRef(null), G = s.exports.useRef(null), $ = s.exports.useRef(!1), B = s.exports.useRef(!1), N = s.exports.useRef(null), z = s.exports.useRef(null), J = s.exports.useRef(null), A = s.exports.useRef(r), w = e.onMaximize ? e.maximized : W, Ne = te({
    type: "keydown",
    listener: function(t) {
      return Ae(t);
    }
  }), se = O(Ne, 2), Te = se[0], ve = se[1], he = te({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Xe(t);
    }
  }), oe = O(he, 2), xe = oe[0], De = oe[1], ue = te({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Ye(t);
    }
  }), Z = O(ue, 2), ce = Z[0], me = Z[1], be = te({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return je(t);
    }
  }), q = O(be, 2), n = q[0], T = q[1], L = te({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Ke(t);
    }
  }), f = O(L, 2), _ = f[0], R = f[1], Q = function(t) {
    e.onHide(), t.preventDefault();
  }, ee = function() {
    var t = document.activeElement, c = t && u.current && u.current.contains(t);
    !c && e.closable && e.showHeader && G.current.focus();
  }, $e = function(t) {
    e.dismissableMask && e.modal && k.current === t.target && Q(t), e.onMaskClick && e.onMaskClick(t);
  }, Be = function(t) {
    e.onMaximize ? e.onMaximize({
      originalEvent: t,
      maximized: !w
    }) : K(function(c) {
      return !c;
    }), t.preventDefault();
  }, Ae = function(t) {
    var c = t.currentTarget;
    if (!(!c || !c.primeDialogParams)) {
      var b = c.primeDialogParams, x = b.length, P = b[x - 1] ? b[x - 1].id : void 0;
      if (P === y) {
        var I = document.getElementById(P);
        if (e.closable && e.closeOnEscape && t.key === "Escape")
          Q(t), t.stopImmediatePropagation(), b.splice(x - 1, 1);
        else if (t.key === "Tab") {
          t.preventDefault();
          var d = p.getFocusableElements(I);
          if (d && d.length > 0)
            if (!document.activeElement)
              d[0].focus();
            else {
              var h = d.indexOf(document.activeElement);
              t.shiftKey ? h === -1 || h === 0 ? d[d.length - 1].focus() : d[h - 1].focus() : h === -1 || h === d.length - 1 ? d[0].focus() : d[h + 1].focus();
            }
        }
      }
    }
  }, He = function(t) {
    p.hasClass(t.target, "p-dialog-header-icon") || p.hasClass(t.target.parentElement, "p-dialog-header-icon") || e.draggable && ($.current = !0, N.current = t.pageX, z.current = t.pageY, u.current.style.margin = "0", p.addClass(document.body, "p-unselectable-text"), e.onDragStart && e.onDragStart(t));
  }, je = function(t) {
    if ($.current) {
      var c = p.getOuterWidth(u.current), b = p.getOuterHeight(u.current), x = t.pageX - N.current, P = t.pageY - z.current, I = u.current.getBoundingClientRect(), d = I.left + x, h = I.top + P, H = p.getViewport();
      u.current.style.position = "fixed", e.keepInViewport ? (d >= e.minX && d + c < H.width && (N.current = t.pageX, u.current.style.left = d + "px"), h >= e.minY && h + b < H.height && (z.current = t.pageY, u.current.style.top = h + "px")) : (N.current = t.pageX, u.current.style.left = d + "px", z.current = t.pageY, u.current.style.top = h + "px"), e.onDrag && e.onDrag(t);
    }
  }, Ke = function(t) {
    $.current && ($.current = !1, p.removeClass(document.body, "p-unselectable-text"), e.onDragEnd && e.onDragEnd(t));
  }, Ge = function(t) {
    e.resizable && (B.current = !0, N.current = t.pageX, z.current = t.pageY, p.addClass(document.body, "p-unselectable-text"), e.onResizeStart && e.onResizeStart(t));
  }, ke = function(t, c, b) {
    !b && (b = p.getViewport());
    var x = parseInt(t);
    return /^(\d+|(\.\d+))(\.\d+)?%$/.test(t) ? x * (b[c] / 100) : x;
  }, Xe = function(t) {
    if (B.current) {
      var c = t.pageX - N.current, b = t.pageY - z.current, x = p.getOuterWidth(u.current), P = p.getOuterHeight(u.current), I = u.current.getBoundingClientRect(), d = p.getViewport(), h = !parseInt(u.current.style.top) || !parseInt(u.current.style.left), H = ke(u.current.style.minWidth, "width", d), de = ke(u.current.style.minHeight, "height", d), pe = x + c, fe = P + b;
      h && (pe += c, fe += b), (!H || pe > H) && I.left + pe < d.width && (u.current.style.width = pe + "px"), (!de || fe > de) && I.top + fe < d.height && (u.current.style.height = fe + "px"), N.current = t.pageX, z.current = t.pageY, e.onResize && e.onResize(t);
    }
  }, Ye = function(t) {
    B.current && (B.current = !1, p.removeClass(document.body, "p-unselectable-text"), e.onResizeEnd && e.onResizeEnd(t));
  }, Ue = function() {
    u.current.style.position = "", u.current.style.left = "", u.current.style.top = "", u.current.style.margin = "";
  }, Je = function() {
    var t = ["center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"], c = t.find(function(b) {
      return b === e.position || b.replace("-", "") === e.position;
    });
    return c ? "p-dialog-".concat(c) : "";
  }, Ze = function() {
    u.current.setAttribute(A.current, "");
  }, qe = function() {
    e.onShow && e.onShow(), e.focusOnShow && ee(), tt();
  }, Qe = function() {
    e.modal && p.addClass(k.current, "p-component-overlay-leave"), e.blockScroll && p.removeClass(document.body, "p-overflow-hidden");
  }, et = function() {
    $.current = !1, Se.clear(k.current), v(!1), we();
  }, tt = function() {
    at(), (e.blockScroll || e.maximizable && w) && p.addClass(document.body, "p-overflow-hidden");
  }, we = function() {
    nt();
    var t = e.maximizable && w;
    if (e.modal) {
      var c = document.primeDialogParams && document.primeDialogParams.some(function(b) {
        return b.hasBlockScroll;
      });
      (c || t) && p.removeClass(document.body, "p-overflow-hidden");
    } else
      (e.blockScroll || t) && p.removeClass(document.body, "p-overflow-hidden");
  }, at = function() {
    e.draggable && (n(), _()), e.resizable && (xe(), ce()), Te();
    var t = {
      id: y,
      hasBlockScroll: e.blockScroll
    };
    document.primeDialogParams = document.primeDialogParams ? [].concat(zt(document.primeDialogParams), [t]) : [t];
  }, nt = function() {
    T(), R(), De(), me(), ve(), document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function(t) {
      return t.id !== y;
    });
  }, it = function() {
    J.current = p.createInlineStyle(ae.nonce);
    var t = "";
    for (var c in e.breakpoints)
      t += `
                @media screen and (max-width: `.concat(c, `) {
                    .p-dialog[`).concat(A.current, `] {
                        width: `).concat(e.breakpoints[c], ` !important;
                    }
                }
            `);
    J.current.innerHTML = t;
  }, rt = function() {
    if (!e.blockScroll) {
      var t = w ? "addClass" : "removeClass";
      p[t](document.body, "p-overflow-hidden");
    }
  };
  gt(function() {
    e.visible && v(!0), e.breakpoints && it();
  }), Re(function() {
    e.visible && !C && v(!0), e.visible !== E && C && U(e.visible);
  }), Re(function() {
    C && (Se.set("modal", k.current, ae.autoZIndex, e.baseZIndex || ae.zIndex.modal), U(!0));
  }, [C]), Re(function() {
    rt();
  }, [e.maximized, W]), yt(function() {
    we(), p.removeInlineStyle(J.current), Se.clear(k.current);
  }), s.exports.useImperativeHandle(o, function() {
    return {
      props: e,
      resetPosition: Ue,
      getElement: function() {
        return u.current;
      },
      getMask: function() {
        return k.current;
      },
      getContent: function() {
        return re.current;
      },
      getHeader: function() {
        return le.current;
      },
      getFooter: function() {
        return g.current;
      },
      getCloseButton: function() {
        return G.current;
      }
    };
  });
  var lt = function() {
    if (e.closable) {
      var t = e.ariaCloseIconLabel || vt("close");
      return /* @__PURE__ */ s.exports.createElement("button", {
        ref: G,
        type: "button",
        className: "p-dialog-header-icon p-dialog-header-close p-link",
        "aria-label": t,
        onClick: Q
      }, /* @__PURE__ */ s.exports.createElement("span", {
        className: "p-dialog-header-close-icon pi pi-times",
        "aria-hidden": "true"
      }), /* @__PURE__ */ s.exports.createElement(Pe, null));
    }
    return null;
  }, st = function() {
    var t = X("p-dialog-header-maximize-icon pi", {
      "pi-window-maximize": !w,
      "pi-window-minimize": w
    });
    return e.maximizable ? /* @__PURE__ */ s.exports.createElement("button", {
      type: "button",
      className: "p-dialog-header-icon p-dialog-header-maximize p-link",
      onClick: Be
    }, /* @__PURE__ */ s.exports.createElement("span", {
      className: t
    }), /* @__PURE__ */ s.exports.createElement(Pe, null)) : null;
  }, ot = function() {
    if (e.showHeader) {
      var t = lt(), c = st(), b = ne.getJSXElement(e.icons, e), x = ne.getJSXElement(e.header, e), P = y + "_header", I = X("p-dialog-header", e.headerClassName);
      return /* @__PURE__ */ s.exports.createElement("div", {
        ref: le,
        style: e.headerStyle,
        className: I,
        onMouseDown: He
      }, /* @__PURE__ */ s.exports.createElement("div", {
        id: P,
        className: "p-dialog-title"
      }, x), /* @__PURE__ */ s.exports.createElement("div", {
        className: "p-dialog-header-icons"
      }, b, c, t));
    }
    return null;
  }, ut = function() {
    var t = X("p-dialog-content", e.contentClassName), c = y + "_content";
    return /* @__PURE__ */ s.exports.createElement("div", {
      id: c,
      ref: re,
      className: t,
      style: e.contentStyle
    }, e.children);
  }, ct = function() {
    var t = ne.getJSXElement(e.footer, e);
    return t && /* @__PURE__ */ s.exports.createElement("div", {
      ref: g,
      className: "p-dialog-footer"
    }, t);
  }, mt = function() {
    return e.resizable ? /* @__PURE__ */ s.exports.createElement("span", {
      className: "p-resizable-handle",
      style: {
        zIndex: 90
      },
      onMouseDown: Ge
    }) : null;
  }, bt = function() {
    var t = ge.getOtherProps(e), c = X("p-dialog p-component", e.className, {
      "p-dialog-rtl": e.rtl,
      "p-dialog-maximized": w,
      "p-dialog-default": !w,
      "p-input-filled": ae.inputStyle === "filled",
      "p-ripple-disabled": ae.ripple === !1
    }), b = X("p-dialog-mask", Je(), {
      "p-component-overlay p-component-overlay-enter": e.modal,
      "p-dialog-visible": C,
      "p-dialog-draggable": e.draggable,
      "p-dialog-resizable": e.resizable
    }, e.maskClassName), x = ot(), P = ut(), I = ct(), d = mt(), h = y + "_header", H = y + "_content", de = {
      enter: e.position === "center" ? 150 : 300,
      exit: e.position === "center" ? 150 : 300
    };
    return /* @__PURE__ */ s.exports.createElement("div", {
      ref: k,
      style: e.maskStyle,
      className: b,
      onClick: $e
    }, /* @__PURE__ */ s.exports.createElement(Tt, {
      nodeRef: u,
      classNames: "p-dialog",
      timeout: de,
      in: E,
      options: e.transitionOptions,
      unmountOnExit: !0,
      onEnter: Ze,
      onEntered: qe,
      onExiting: Qe,
      onExited: et
    }, /* @__PURE__ */ s.exports.createElement("div", Ve({
      ref: u,
      id: y,
      className: c,
      style: e.style,
      onClick: e.onClick,
      role: "dialog"
    }, t, {
      "aria-labelledby": h,
      "aria-describedby": H,
      "aria-modal": e.modal
    }), x, P, I, d)));
  }, dt = function() {
    var t = bt();
    return /* @__PURE__ */ s.exports.createElement(Nt, {
      element: t,
      appendTo: e.appendTo,
      visible: !0
    });
  };
  return C && dt();
});
_e.displayName = "Dialog";
const Ft = () => {
  var ue, Z, ce, me, be, q;
  const { columns: a, components: o } = s.exports.useContext(ht), e = xt(), { resource: r, data: m } = Oe(), D = (ue = r == null ? void 0 : r.columns) != null ? ue : [], y = Et(), [S, V] = s.exports.useState(!1), C = s.exports.useRef(null), v = s.exports.useRef(null), ie = s.exports.useRef(), Y = s.exports.useRef(null), [E, U] = s.exports.useState([]), [ye, F] = s.exports.useState(!1), [W, K] = s.exports.useState(null);
  s.exports.useEffect(() => {
    v.current && !S && (v.current.value = y.globalSearch);
  }, [S, m]);
  const u = D.flatMap((n) => n.toggleable ? {
    field: n.columnName,
    header: n.label,
    isToggledHiddenByDefault: n.isToggledHiddenByDefault
  } : []), [k, re] = s.exports.useState(u.filter((n) => !n.isToggledHiddenByDefault)), le = D.filter((n) => !n.toggleable || k.find((T) => T.field === n.columnName));
  let g;
  const G = (n) => {
    g = n, A();
  }, $ = We(() => A(), 300), B = Array();
  for (const n of (Z = JSON.parse(y.sort)) != null ? Z : [])
    B.push({
      field: n.field,
      order: n.order
    });
  let N = {};
  const z = (ce = JSON.parse(y.columnsSearch)) != null ? ce : {};
  D.forEach((n) => {
    (n.customFilter || n.searchable && !n.isGloballySearchable) && (N[n.columnName] = {
      value: z[n.columnName],
      matchMode: Dt.CUSTOM
    });
  });
  const J = We((n) => {
    N = {}, Object.entries(n.filters).forEach((T) => {
      N[T[0]] = T[1];
    }), A();
  }, 300), A = () => {
    var T, L, f, _;
    let n = {};
    if (n.page = g === void 0 || g.page === void 0 ? (T = m == null ? void 0 : m.currentPage) != null ? T : 1 : g.page + 1, n.perPage = (f = (L = g == null ? void 0 : g.rows) != null ? L : m == null ? void 0 : m.perPage) != null ? f : 10, g != null && g.multiSortMeta) {
      const R = JSON.stringify(g.multiSortMeta);
      R.length > 2 && (n.sort = R);
    }
    if ((_ = v.current) != null && _.value && (n.globalSearch = v.current.value), N) {
      const R = {};
      Object.entries(N).forEach(([Q, ee]) => {
        "value" in ee && ee.value && (R[Q] = ee.value);
      }), Object.keys(R).length && (n.columnsSearch = JSON.stringify(R));
    }
    ze.get(`/${e.prefix}/${r == null ? void 0 : r.pluralLabel.toLowerCase()}`, n, {
      preserveState: !0,
      preserveScroll: !0,
      replace: !0,
      onStart: () => V(!0),
      onFinish: () => {
        V(!1);
      }
    });
  }, w = ((me = v.current) == null ? void 0 : me.value) || (g == null ? void 0 : g.multiSortMeta) || !!Object.entries(N).filter(([, n]) => n.value).length;
  function Ne() {
    N = {}, v.current.value = "", g = void 0, A();
  }
  let se = D.filter((n) => n.exportable);
  const Te = (n) => {
    var T;
    (T = C.current) == null || T.exportCSV(n);
  }, ve = /* @__PURE__ */ i(Ce.Fragment, {
    children: [
      /* @__PURE__ */ i(M, {
        label: "No",
        icon: "pi pi-times",
        className: "p-button-text",
        onClick: () => {
          F(!1), K(null);
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
          var n, T;
          (W !== null || E !== null) && ze.delete("", {
            data: {
              [(n = r == null ? void 0 : r.primaryKeyColumn) != null ? n : "id"]: W !== null ? [String(W[(T = r == null ? void 0 : r.primaryKeyColumn) != null ? T : "id"])] : E.map((L) => {
                var f;
                return String(L[(f = r == null ? void 0 : r.primaryKeyColumn) != null ? f : "id"]);
              })
            },
            preserveState: !0,
            preserveScroll: !0
          }), U([]), K(null), F(!1);
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
  }, globalThis), he = /* @__PURE__ */ i(Ce.Fragment, {}, void 0, !1, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 178,
    columnNumber: 33
  }, globalThis), oe = /* @__PURE__ */ i(Ce.Fragment, {
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
          E.length && F(!0);
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
          w && /* @__PURE__ */ i(M, {
            type: "button",
            icon: "pi pi-filter-slash",
            label: "Clear",
            className: "p-button-outlined",
            onClick: Ne
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
                  onChange: $
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
            children: u.length > 0 && /* @__PURE__ */ i(j, {
              children: [
                /* @__PURE__ */ i(M, {
                  className: "p-button-rounded p-button-text",
                  icon: "pi pi-table",
                  onClick: () => Y.current.show()
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 241,
                  columnNumber: 29
                }, globalThis),
                /* @__PURE__ */ i(St, {
                  ref: Y,
                  appendTo: ie.current,
                  className: "hidden",
                  optionLabel: "header",
                  panelClassName: "toggleableFields",
                  options: u,
                  value: k,
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
  }, globalThis), De = (n) => /* @__PURE__ */ i(j, {
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
          K(n), F(!0);
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
  return /* @__PURE__ */ i(j, {
    children: [
      /* @__PURE__ */ i(Ct, {
        start: he,
        end: oe
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 291,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(Vt, {
        ref: C,
        dataKey: (be = r == null ? void 0 : r.primaryKeyColumn) != null ? be : "id",
        selection: E,
        onSelectionChange: (n) => U(n.value),
        header: xe,
        size: "small",
        first: (m.currentPage - 1) * m.perPage,
        lazy: !0,
        loading: S,
        multiSortMeta: B,
        paginator: !0,
        paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
        rows: m == null ? void 0 : m.perPage,
        rowsPerPageOptions: e.rowsPerPageOptions,
        showGridlines: r == null ? void 0 : r.showGridlines,
        stripedRows: r == null ? void 0 : r.stripedRows,
        totalRecords: m == null ? void 0 : m.totalCount,
        value: m == null ? void 0 : m.data,
        currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
        filterDisplay: "menu",
        globalFilter: "contains",
        removableSort: !0,
        responsiveLayout: "scroll",
        sortMode: "multiple",
        onSort: G,
        onPage: G,
        onFilter: J,
        filters: N,
        children: [
          /* @__PURE__ */ i(Ie, {
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
            return /* @__PURE__ */ i(Ie, {
              body: (f) => {
                var _, R;
                return S ? /* @__PURE__ */ i(Le, {}, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 335,
                  columnNumber: 29
                }, globalThis) : /* @__PURE__ */ i(kt, {
                  resource: r,
                  column: n,
                  columnValue: f[n.columnName],
                  record: f,
                  children: a != null && a.has(n.componentName) ? a == null ? void 0 : a.get(n.componentName)({
                    column: n,
                    columnValue: (_ = f[n.columnName]) != null ? _ : f.defaultValue,
                    record: f,
                    resource: r
                  }) : /* @__PURE__ */ i("div", {
                    children: (R = f[n.columnName]) != null ? R : f.defaultValue
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
              filterElement: n.customFilter ? (f) => /* @__PURE__ */ i("div", {
                children: o != null && o.has(n.customFilter.componentName) ? o == null ? void 0 : o.get(n.customFilter.componentName)({
                  key: `${n.columnName}_filter`,
                  component: n.customFilter,
                  setFieldValue: (_, R) => {
                    f.filterCallback(R);
                  },
                  formData: { [n.columnName]: f.value },
                  errors: {}
                }) : /* @__PURE__ */ i(j, {
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
          /* @__PURE__ */ i(Ie, {
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
      /* @__PURE__ */ i(_e, {
        visible: ye,
        style: { width: "450px" },
        header: "Confirm",
        modal: !0,
        footer: ve,
        onHide: () => {
          F(!1), K(null);
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
            W && /* @__PURE__ */ i("span", {
              children: [
                "Are you sure you want to delete ",
                /* @__PURE__ */ i("b", {
                  children: W[(q = r == null ? void 0 : r.titleColumn) != null ? q : "id"]
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
            W === null && E.length && /* @__PURE__ */ i("span", {
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
  const { resource: a } = Oe();
  return /* @__PURE__ */ i(j, {
    children: [
      /* @__PURE__ */ i(It, {
        title: a == null ? void 0 : a.pluralLabel
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
                children: a == null ? void 0 : a.pluralLabel
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                lineNumber: 16,
                columnNumber: 25
              }, globalThis),
              /* @__PURE__ */ i(Ft, {}, void 0, !1, {
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
  At as default
};
