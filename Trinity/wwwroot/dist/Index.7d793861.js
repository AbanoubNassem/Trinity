import { j as n, c as X, T as bt, F as A, r as l, k as Q, q as f, o as dt, h as De, Z as Re, P as Se, b as ft, U as gt, s as yt, O as de, C as Nt, f as Tt, e as We, A as vt, u as ht, a as Fe, x as ze, i as pt, R as Ce, B as L, g as Pe, w as xt, y as Dt, S as Le, H as Rt } from "./main.a6341423.js";
import { t as Me, T as St } from "./trinity_link.f1e94ed9.js";
import { D as Ct, C as Ie } from "./column.esm.1fb98c86.js";
function It() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get(e, s) {
      return e.get(s.toString());
    }
  });
}
const Vt = ({ column: e, record: s, children: o, resource: i }) => {
  var C;
  const u = `${e.columnName}_${s[i.primaryKeyColumn]}_tooltip`;
  return /* @__PURE__ */ n("div", {
    ...s[`${e.columnName}_extraAttributes`],
    className: X(s[`${e.columnName}_extraAttributes`] && "className" in s[`${e.columnName}_extraAttributes`] ? s[`${e.columnName}_extraAttributes`].className : "", {
      [`text-${e.color}-600`]: e.color
    }),
    style: { fontFamily: e.fontFamily },
    children: [
      (s[`${e.columnName}_tooltip`] || e.tooltip) && /* @__PURE__ */ n(bt, {
        target: `#${u}`
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
        lineNumber: 18,
        columnNumber: 76
      }, globalThis),
      /* @__PURE__ */ n("div", {
        id: u,
        "data-pr-tooltip": (C = s[`${e.columnName}_tooltip`]) != null ? C : e.tooltip,
        "data-pr-position": "top",
        children: [
          e.descriptionPosition === "above" ? /* @__PURE__ */ n("div", {
            className: "text-sm text-gray-500 mb-1",
            children: /* @__PURE__ */ n("p", {
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
          }, globalThis) : /* @__PURE__ */ n(A, {}, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 30,
            columnNumber: 21
          }, globalThis),
          /* @__PURE__ */ n("div", {
            className: "flex justify-content-start align-items-center",
            children: [
              e.icon && e.iconPosition == "before" && /* @__PURE__ */ n("i", {
                className: `mx-2 ${e.icon}`
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
                lineNumber: 34,
                columnNumber: 72
              }, globalThis),
              o,
              e.icon && e.iconPosition == "after" && /* @__PURE__ */ n("i", {
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
          e.descriptionPosition === "bellow" ? /* @__PURE__ */ n("div", {
            className: "text-sm text-gray-500 mt-1",
            children: /* @__PURE__ */ n("p", {
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
          }, globalThis) : /* @__PURE__ */ n(A, {}, void 0, !1, {
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
      for (var i in o)
        Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
  }, Ve.apply(this, arguments);
}
function Ee(e, s) {
  (s == null || s > e.length) && (s = e.length);
  for (var o = 0, i = new Array(s); o < s; o++)
    i[o] = e[o];
  return i;
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
    var i, u, C, W, D = [], p = !0, z = !1;
    try {
      if (C = (o = o.call(e)).next, s === 0) {
        if (Object(o) !== o)
          return;
        p = !1;
      } else
        for (; !(p = (i = C.call(o)).done) && (D.push(i.value), D.length !== s); p = !0)
          ;
    } catch (R) {
      z = !0, u = R;
    } finally {
      try {
        if (!p && o.return != null && (W = o.return(), Object(W) !== W))
          return;
      } finally {
        if (z)
          throw u;
      }
    }
    return D;
  }
}
function Lt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function M(e, s) {
  return zt(e) || Pt(e, s) || Oe(e, s) || Lt();
}
var fe = /* @__PURE__ */ l.exports.forwardRef(function(e, s) {
  var o = l.exports.useState(e.id), i = M(o, 2), u = i[0], C = i[1], W = l.exports.useState(!1), D = M(W, 2), p = D[0], z = D[1], R = l.exports.useState(!1), G = M(R, 2), Y = G[0], P = G[1], ee = l.exports.useState(e.maximized), te = M(ee, 2), F = te[0], O = te[1], c = l.exports.useRef(null), I = l.exports.useRef(null), U = l.exports.useRef(null), ae = l.exports.useRef(null), ne = l.exports.useRef(null), g = l.exports.useRef(null), _ = l.exports.useRef(!1), j = l.exports.useRef(!1), E = l.exports.useRef(null), N = l.exports.useRef(null), H = l.exports.useRef(null), K = l.exports.useRef(""), S = e.onMaximize ? e.maximized : F, ge = Q({
    type: "keydown",
    listener: function(t) {
      return $e(t);
    }
  }), ie = M(ge, 2), ye = ie[0], Ne = ie[1], Te = Q({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Ke(t);
    }
  }), re = M(Te, 2), ve = re[0], he = re[1], pe = Q({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Xe(t);
    }
  }), J = M(pe, 2), le = J[0], se = J[1], oe = Q({
    type: "mousemove",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return Ae(t);
    }
  }), Z = M(oe, 2), ue = Z[0], a = Z[1], T = Q({
    type: "mouseup",
    target: function() {
      return window.document;
    },
    listener: function(t) {
      return je(t);
    }
  }), w = M(T, 2), y = w[0], $ = w[1], v = function(t) {
    e.onHide(), t.preventDefault();
  }, xe = function() {
    var t = document.activeElement, m = t && c.current && c.current.contains(t);
    !m && e.closable && e.showHeader && g.current.focus();
  }, q = function(t) {
    e.dismissableMask && e.modal && I.current === t.target && v(t), e.onMaskClick && e.onMaskClick(t);
  }, _e = function(t) {
    e.onMaximize ? e.onMaximize({
      originalEvent: t,
      maximized: !S
    }) : O(function(m) {
      return !m;
    }), t.preventDefault();
  }, $e = function(t) {
    var m = t.currentTarget;
    if (!(!m || !m.primeDialogParams)) {
      var b = m.primeDialogParams, x = b.length, k = b[x - 1] ? b[x - 1].id : void 0;
      if (k === u) {
        var V = document.getElementById(k);
        if (e.closable && e.closeOnEscape && t.key === "Escape")
          v(t), t.stopImmediatePropagation(), b.splice(x - 1, 1);
        else if (t.key === "Tab") {
          t.preventDefault();
          var d = f.getFocusableElements(V);
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
  }, Be = function(t) {
    f.hasClass(t.target, "p-dialog-header-icon") || f.hasClass(t.target.parentElement, "p-dialog-header-icon") || e.draggable && (_.current = !0, E.current = t.pageX, N.current = t.pageY, c.current.style.margin = "0", f.addClass(document.body, "p-unselectable-text"), e.onDragStart && e.onDragStart(t));
  }, Ae = function(t) {
    if (_.current) {
      var m = f.getOuterWidth(c.current), b = f.getOuterHeight(c.current), x = t.pageX - E.current, k = t.pageY - N.current, V = c.current.getBoundingClientRect(), d = V.left + x, h = V.top + k, B = f.getViewport();
      c.current.style.position = "fixed", e.keepInViewport ? (d >= e.minX && d + m < B.width && (E.current = t.pageX, c.current.style.left = d + "px"), h >= e.minY && h + b < B.height && (N.current = t.pageY, c.current.style.top = h + "px")) : (E.current = t.pageX, c.current.style.left = d + "px", N.current = t.pageY, c.current.style.top = h + "px"), e.onDrag && e.onDrag(t);
    }
  }, je = function(t) {
    _.current && (_.current = !1, f.removeClass(document.body, "p-unselectable-text"), e.onDragEnd && e.onDragEnd(t));
  }, He = function(t) {
    e.resizable && (j.current = !0, E.current = t.pageX, N.current = t.pageY, f.addClass(document.body, "p-unselectable-text"), e.onResizeStart && e.onResizeStart(t));
  }, we = function(t, m, b) {
    !b && (b = f.getViewport());
    var x = parseInt(t);
    return /^(\d+|(\.\d+))(\.\d+)?%$/.test(t) ? x * (b[m] / 100) : x;
  }, Ke = function(t) {
    if (j.current) {
      var m = t.pageX - E.current, b = t.pageY - N.current, x = f.getOuterWidth(c.current), k = f.getOuterHeight(c.current), V = c.current.getBoundingClientRect(), d = f.getViewport(), h = !parseInt(c.current.style.top) || !parseInt(c.current.style.left), B = we(c.current.style.minWidth, "width", d), ce = we(c.current.style.minHeight, "height", d), me = x + m, be = k + b;
      h && (me += m, be += b), (!B || me > B) && V.left + me < d.width && (c.current.style.width = me + "px"), (!ce || be > ce) && V.top + be < d.height && (c.current.style.height = be + "px"), E.current = t.pageX, N.current = t.pageY, e.onResize && e.onResize(t);
    }
  }, Xe = function(t) {
    j.current && (j.current = !1, f.removeClass(document.body, "p-unselectable-text"), e.onResizeEnd && e.onResizeEnd(t));
  }, Ge = function() {
    c.current.style.position = "", c.current.style.left = "", c.current.style.top = "", c.current.style.margin = "";
  }, Ye = function() {
    var t = ["center", "left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"], m = t.find(function(b) {
      return b === e.position || b.replace("-", "") === e.position;
    });
    return m ? "p-dialog-".concat(m) : "";
  }, Ue = function() {
    c.current.setAttribute(K.current, "");
  }, Je = function() {
    e.onShow && e.onShow(), e.focusOnShow && xe(), Qe();
  }, Ze = function() {
    e.modal && f.addClass(I.current, "p-component-overlay-leave"), e.blockScroll && f.removeClass(document.body, "p-overflow-hidden");
  }, qe = function() {
    _.current = !1, Re.clear(I.current), z(!1), ke();
  }, Qe = function() {
    et(), (e.blockScroll || e.maximizable && S) && f.addClass(document.body, "p-overflow-hidden");
  }, ke = function() {
    tt();
    var t = e.maximizable && S;
    if (e.modal) {
      var m = document.primeDialogParams && document.primeDialogParams.some(function(b) {
        return b.hasBlockScroll;
      });
      (m || t) && f.removeClass(document.body, "p-overflow-hidden");
    } else
      (e.blockScroll || t) && f.removeClass(document.body, "p-overflow-hidden");
  }, et = function() {
    e.draggable && (ue(), y()), e.resizable && (ve(), le()), ye();
    var t = {
      id: u,
      hasBlockScroll: e.blockScroll
    };
    document.primeDialogParams = document.primeDialogParams ? [].concat(Wt(document.primeDialogParams), [t]) : [t];
  }, tt = function() {
    a(), $(), he(), se(), Ne(), document.primeDialogParams = document.primeDialogParams && document.primeDialogParams.filter(function(t) {
      return t.id !== u;
    });
  }, at = function() {
    if (!H.current) {
      H.current = f.createInlineStyle(Se.nonce);
      var t = "";
      for (var m in e.breakpoints)
        t += `
                    @media screen and (max-width: `.concat(m, `) {
                        .p-dialog[`).concat(K.current, `] {
                            width: `).concat(e.breakpoints[m], ` !important;
                        }
                    }
                `);
      H.current.innerHTML = t;
    }
  }, nt = function() {
    if (!e.blockScroll) {
      var t = S ? "addClass" : "removeClass";
      f[t](document.body, "p-overflow-hidden");
    }
  };
  dt(function() {
    var r = gt();
    u || C(r), K.current || (K.current = r), e.visible && z(!0), e.breakpoints && at();
  }), De(function() {
    e.visible && !p && z(!0), e.visible !== Y && p && P(e.visible);
  }), De(function() {
    p && (Re.set("modal", I.current, Se.autoZIndex, e.baseZIndex || Se.zIndex.modal), P(!0));
  }, [p]), De(function() {
    nt();
  }, [e.maximized, F]), ft(function() {
    ke(), f.removeInlineStyle(H.current), Re.clear(I.current);
  }), l.exports.useImperativeHandle(s, function() {
    return {
      props: e,
      resetPosition: Ge,
      getElement: function() {
        return c.current;
      },
      getMask: function() {
        return I.current;
      },
      getContent: function() {
        return U.current;
      },
      getHeader: function() {
        return ae.current;
      },
      getFooter: function() {
        return ne.current;
      },
      getCloseButton: function() {
        return g.current;
      }
    };
  });
  var it = function() {
    if (e.closable) {
      var t = e.ariaCloseIconLabel || Tt("close");
      return /* @__PURE__ */ l.exports.createElement("button", {
        ref: g,
        type: "button",
        className: "p-dialog-header-icon p-dialog-header-close p-link",
        "aria-label": t,
        onClick: v
      }, /* @__PURE__ */ l.exports.createElement("span", {
        className: "p-dialog-header-close-icon pi pi-times",
        "aria-hidden": "true"
      }), /* @__PURE__ */ l.exports.createElement(We, null));
    }
    return null;
  }, rt = function() {
    var t = X("p-dialog-header-maximize-icon pi", {
      "pi-window-maximize": !S,
      "pi-window-minimize": S
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
      var t = it(), m = rt(), b = de.getJSXElement(e.icons, e), x = de.getJSXElement(e.header, e), k = u + "_header", V = X("p-dialog-header", e.headerClassName);
      return /* @__PURE__ */ l.exports.createElement("div", {
        ref: ae,
        style: e.headerStyle,
        className: V,
        onMouseDown: Be
      }, /* @__PURE__ */ l.exports.createElement("div", {
        id: k,
        className: "p-dialog-title"
      }, x), /* @__PURE__ */ l.exports.createElement("div", {
        className: "p-dialog-header-icons"
      }, b, m, t));
    }
    return null;
  }, st = function() {
    var t = X("p-dialog-content", e.contentClassName), m = u + "_content";
    return /* @__PURE__ */ l.exports.createElement("div", {
      id: m,
      ref: U,
      className: t,
      style: e.contentStyle
    }, e.children);
  }, ot = function() {
    var t = de.getJSXElement(e.footer, e);
    return t && /* @__PURE__ */ l.exports.createElement("div", {
      ref: ne,
      className: "p-dialog-footer"
    }, t);
  }, ut = function() {
    return e.resizable ? /* @__PURE__ */ l.exports.createElement("span", {
      className: "p-resizable-handle",
      style: {
        zIndex: 90
      },
      onMouseDown: He
    }) : null;
  }, ct = function() {
    var t = de.findDiffKeys(e, fe.defaultProps), m = X("p-dialog p-component", e.className, {
      "p-dialog-rtl": e.rtl,
      "p-dialog-maximized": S,
      "p-dialog-default": !S
    }), b = X("p-dialog-mask", Ye(), {
      "p-component-overlay p-component-overlay-enter": e.modal,
      "p-dialog-visible": p,
      "p-dialog-draggable": e.draggable,
      "p-dialog-resizable": e.resizable
    }, e.maskClassName), x = lt(), k = st(), V = ot(), d = ut(), h = u + "_header", B = u + "_content", ce = {
      enter: e.position === "center" ? 150 : 300,
      exit: e.position === "center" ? 150 : 300
    };
    return /* @__PURE__ */ l.exports.createElement("div", {
      ref: I,
      style: e.maskStyle,
      className: b,
      onClick: q
    }, /* @__PURE__ */ l.exports.createElement(Nt, {
      nodeRef: c,
      classNames: "p-dialog",
      timeout: ce,
      in: Y,
      options: e.transitionOptions,
      unmountOnExit: !0,
      onEnter: Ue,
      onEntered: Je,
      onExiting: Ze,
      onExited: qe
    }, /* @__PURE__ */ l.exports.createElement("div", Ve({
      ref: c,
      id: u,
      className: m,
      style: e.style,
      onClick: e.onClick,
      role: "dialog"
    }, t, {
      "aria-labelledby": h,
      "aria-describedby": B,
      "aria-modal": e.modal
    }), x, k, V, d)));
  }, mt = function() {
    var t = ct();
    return /* @__PURE__ */ l.exports.createElement(yt, {
      element: t,
      appendTo: e.appendTo,
      visible: !0
    });
  };
  return p && mt();
});
fe.displayName = "Dialog";
fe.defaultProps = {
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
  var J, le, se, oe, Z, ue;
  const { columns: e, components: s } = l.exports.useContext(vt), o = ht(), { resource: i, data: u } = Fe(), C = (J = i == null ? void 0 : i.columns) != null ? J : [], W = It(), [D, p] = l.exports.useState(!1), z = l.exports.useRef(null), R = l.exports.useRef(null), G = l.exports.useRef(), Y = l.exports.useRef(null), [P, ee] = l.exports.useState([]), [te, F] = l.exports.useState(!1), [O, c] = l.exports.useState(null);
  l.exports.useEffect(() => {
    R.current && !D && (R.current.value = W.globalSearch);
  }, [D, u]);
  const I = C.flatMap((a) => a.toggleable ? {
    field: a.columnName,
    header: a.label,
    isToggledHiddenByDefault: a.isToggledHiddenByDefault
  } : []), [U, ae] = l.exports.useState(I.filter((a) => !a.isToggledHiddenByDefault)), ne = C.filter((a) => !a.toggleable || U.find((T) => T.field === a.columnName));
  let g;
  const _ = (a) => {
    g = a, S();
  }, j = ze(() => S(), 300), E = Array();
  for (const a of (le = JSON.parse(W.sort)) != null ? le : [])
    E.push({
      field: a.field,
      order: a.order
    });
  let N = {};
  const H = (se = JSON.parse(W.columnsSearch)) != null ? se : {};
  C.forEach((a) => {
    (a.customFilter || a.searchable && !a.isGloballySearchable) && (N[a.columnName] = {
      value: H[a.columnName],
      matchMode: pt.CUSTOM
    });
  });
  const K = ze((a) => {
    N = {}, Object.entries(a.filters).forEach((T) => {
      N[T[0]] = T[1];
    }), S();
  }, 300), S = () => {
    var T, w, y, $;
    let a = {};
    if (a.page = g === void 0 || g.page === void 0 ? (T = u == null ? void 0 : u.currentPage) != null ? T : 1 : g.page + 1, a.perPage = (y = (w = g == null ? void 0 : g.rows) != null ? w : u == null ? void 0 : u.perPage) != null ? y : 10, g != null && g.multiSortMeta) {
      const v = JSON.stringify(g.multiSortMeta);
      v.length > 2 && (a.sort = v);
    }
    if (($ = R.current) != null && $.value && (a.globalSearch = R.current.value), N) {
      const v = {};
      Object.entries(N).forEach(([xe, q]) => {
        "value" in q && q.value && (v[xe] = q.value);
      }), Object.keys(v).length && (a.columnsSearch = JSON.stringify(v));
    }
    Pe.get(`/${o.prefix}/${i == null ? void 0 : i.pluralLabel.toLowerCase()}`, a, {
      preserveState: !0,
      preserveScroll: !0,
      replace: !0,
      onStart: () => p(!0),
      onFinish: () => {
        p(!1);
      }
    });
  }, ge = ((oe = R.current) == null ? void 0 : oe.value) || (g == null ? void 0 : g.multiSortMeta) || !!Object.entries(N).filter(([, a]) => a.value).length;
  function ie() {
    N = {}, R.current.value = "", g = void 0, S();
  }
  let ye = C.filter((a) => a.exportable);
  const Ne = (a) => {
    var T;
    (T = z.current) == null || T.exportCSV(a);
  }, Te = /* @__PURE__ */ n(Ce.Fragment, {
    children: [
      /* @__PURE__ */ n(L, {
        label: "No",
        icon: "pi pi-times",
        className: "p-button-text",
        onClick: () => {
          F(!1), c(null);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 147,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ n(L, {
        label: "Yes",
        icon: "pi pi-check",
        className: "p-button-text",
        onClick: () => {
          var a, T;
          (O !== null || P !== null) && Pe.delete("", {
            data: {
              [(a = i == null ? void 0 : i.primaryKeyColumn) != null ? a : "id"]: O !== null ? [String(O[(T = i == null ? void 0 : i.primaryKeyColumn) != null ? T : "id"])] : P.map((w) => {
                var y;
                return String(w[(y = i == null ? void 0 : i.primaryKeyColumn) != null ? y : "id"]);
              })
            },
            preserveState: !0,
            preserveScroll: !0
          }), ee([]), c(null), F(!1);
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
  }, globalThis), re = /* @__PURE__ */ n(Ce.Fragment, {}, void 0, !1, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 178,
    columnNumber: 33
  }, globalThis), ve = /* @__PURE__ */ n(Ce.Fragment, {
    children: [
      /* @__PURE__ */ n(L, {
        className: "p-button-success mr-2",
        icon: "pi pi-plus",
        label: "New",
        onClick: () => Me(`/${o.prefix}/${i == null ? void 0 : i.name}/create`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 182,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ n(L, {
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
  }, globalThis), he = /* @__PURE__ */ n("div", {
    className: "flex justify-content-between flex-column sm:flex-row",
    children: [
      /* @__PURE__ */ n("div", {
        className: "flex mb-3",
        children: [
          !!ye.length && /* @__PURE__ */ n(L, {
            icon: "pi pi-external-link",
            className: "p-button-primary  mr-2",
            label: "Export",
            onClick: Ne
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 203,
            columnNumber: 21
          }, globalThis),
          ge && /* @__PURE__ */ n(L, {
            type: "button",
            icon: "pi pi-filter-slash",
            label: "Clear",
            className: "p-button-outlined",
            onClick: ie
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
      /* @__PURE__ */ n("div", {
        className: "flex",
        children: [
          /* @__PURE__ */ n("div", {
            children: /* @__PURE__ */ n("span", {
              className: "p-input-icon-left",
              children: [
                /* @__PURE__ */ n("i", {
                  className: "pi pi-search"
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 223,
                  columnNumber: 25
                }, globalThis),
                /* @__PURE__ */ n(xt, {
                  ref: R,
                  placeholder: "Keyword Search",
                  onChange: j
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 224,
                  columnNumber: 25
                }, globalThis),
                R.current && R.current.value && D && /* @__PURE__ */ n("i", {
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
          /* @__PURE__ */ n("div", {
            id: "toggleableFields",
            className: "mx-2",
            ref: G,
            children: I.length > 0 && /* @__PURE__ */ n(A, {
              children: [
                /* @__PURE__ */ n(L, {
                  className: "p-button-rounded p-button-text",
                  icon: "pi pi-table",
                  onClick: () => Y.current.show()
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 240,
                  columnNumber: 29
                }, globalThis),
                /* @__PURE__ */ n(Dt, {
                  ref: Y,
                  appendTo: G.current,
                  className: "hidden",
                  optionLabel: "header",
                  panelClassName: "toggleableFields",
                  options: I,
                  value: U,
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
  }, globalThis), pe = (a) => /* @__PURE__ */ n(A, {
    children: [
      /* @__PURE__ */ n(L, {
        icon: "pi pi-pencil",
        className: "p-button-rounded p-button-success mr-2",
        onClick: () => {
          Me(`/${o == null ? void 0 : o.prefix}/${i == null ? void 0 : i.name}/edit/${a[i == null ? void 0 : i.primaryKeyColumn]}`, !1, !1);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 269,
        columnNumber: 17
      }, globalThis),
      /* @__PURE__ */ n(L, {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-danger",
        onClick: () => {
          c(a), F(!0);
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
  return /* @__PURE__ */ n(A, {
    children: [
      /* @__PURE__ */ n(St, {
        left: re,
        right: ve
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 290,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ n(Ct, {
        ref: z,
        dataKey: (Z = i == null ? void 0 : i.primaryKeyColumn) != null ? Z : "id",
        selection: P,
        onSelectionChange: (a) => ee(a.value),
        header: he,
        size: "small",
        first: (u.currentPage - 1) * u.perPage,
        lazy: !0,
        loading: D,
        multiSortMeta: E,
        paginator: !0,
        paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
        rows: u == null ? void 0 : u.perPage,
        rowsPerPageOptions: o.rowsPerPageOptions,
        showGridlines: i == null ? void 0 : i.showGridlines,
        stripedRows: i == null ? void 0 : i.stripedRows,
        totalRecords: u == null ? void 0 : u.totalCount,
        value: u == null ? void 0 : u.data,
        currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
        filterDisplay: "menu",
        globalFilter: "contains",
        removableSort: !0,
        responsiveLayout: "scroll",
        sortMode: "multiple",
        onSort: _,
        onPage: _,
        onFilter: K,
        filters: N,
        children: [
          /* @__PURE__ */ n(Ie, {
            exportable: !1,
            selectionMode: "multiple",
            style: { width: "3rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 325,
            columnNumber: 17
          }, globalThis),
          ne.map((a) => {
            var w;
            return /* @__PURE__ */ n(Ie, {
              body: (y) => {
                var $, v;
                return D ? /* @__PURE__ */ n(Le, {}, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 334,
                  columnNumber: 29
                }, globalThis) : /* @__PURE__ */ n(Vt, {
                  resource: i,
                  column: a,
                  columnValue: y[a.columnName],
                  record: y,
                  children: e != null && e.has(a.componentName) ? e == null ? void 0 : e.get(a.componentName)({
                    column: a,
                    columnValue: ($ = y[a.columnName]) != null ? $ : y.defaultValue,
                    record: y,
                    resource: i
                  }) : /* @__PURE__ */ n("div", {
                    children: (v = y[a.columnName]) != null ? v : y.defaultValue
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
              filterElement: a.customFilter ? (y) => /* @__PURE__ */ n("div", {
                children: s != null && s.has(a.customFilter.componentName) ? s == null ? void 0 : s.get(a.customFilter.componentName)({
                  key: `${a.columnName}_filter`,
                  component: a.customFilter,
                  setFieldValue: ($, v) => {
                    y.filterCallback(v);
                  },
                  formData: { [a.columnName]: y.value }
                }) : /* @__PURE__ */ n(A, {
                  children: a.customFilter.componentName
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 393,
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
          /* @__PURE__ */ n(Ie, {
            body: D ? /* @__PURE__ */ n(Le, {}, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 404,
              columnNumber: 37
            }, globalThis) : pe,
            headerStyle: { minWidth: "10rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 403,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 295,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ n(fe, {
        visible: te,
        style: { width: "450px" },
        header: "Confirm",
        modal: !0,
        footer: Te,
        onHide: () => {
          F(!1), c(null);
        },
        children: /* @__PURE__ */ n("div", {
          className: "confirmation-content",
          children: [
            /* @__PURE__ */ n("i", {
              className: "pi pi-exclamation-triangle mr-3",
              style: { fontSize: "2rem" }
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 422,
              columnNumber: 21
            }, globalThis),
            O && /* @__PURE__ */ n("span", {
              children: [
                "Are you sure you want to delete ",
                /* @__PURE__ */ n("b", {
                  children: O[(ue = i == null ? void 0 : i.titleColumn) != null ? ue : "id"]
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 428,
                  columnNumber: 61
                }, globalThis),
                "?"
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 427,
              columnNumber: 25
            }, globalThis),
            O === null && P.length && /* @__PURE__ */ n("span", {
              children: [
                "Are you sure you want to delete the ",
                /* @__PURE__ */ n("b", {
                  children: [
                    P.length,
                    " selected records"
                  ]
                }, void 0, !0, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 433,
                  columnNumber: 65
                }, globalThis),
                "?"
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 432,
              columnNumber: 25
            }, globalThis)
          ]
        }, void 0, !0, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
          lineNumber: 421,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 410,
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
  return /* @__PURE__ */ n(A, {
    children: [
      /* @__PURE__ */ n(Rt, {
        title: e == null ? void 0 : e.pluralLabel
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
        lineNumber: 11,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ n("div", {
        className: "grid",
        children: /* @__PURE__ */ n("div", {
          className: "col-12",
          children: /* @__PURE__ */ n("div", {
            className: "card",
            children: [
              /* @__PURE__ */ n("h5", {
                children: e == null ? void 0 : e.pluralLabel
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                lineNumber: 16,
                columnNumber: 25
              }, globalThis),
              /* @__PURE__ */ n(Mt, {}, void 0, !1, {
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
