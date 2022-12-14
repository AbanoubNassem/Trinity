import { K as X, o as S, c as x, j as ie, n as le, d as Y, L as se, M as ue, r as w, N as ce, P as de, Q as fe, x as pe, B as z, w as I, u as b, S as me, a as O, b as V, s as ge, V as be, k as D, i as ve, y as he, z as ye, H as Se, F as G, g as ke, t as Z, _ as ee, v as Te } from "./main.de3ae21b.mjs";
import { s as we, a as _e } from "./column.esm.487a02bf.mjs";
import { s as W } from "./inputtext.esm.bc856366.mjs";
function Pe(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var te = Pe, $e = typeof X == "object" && X && X.Object === Object && X, je = $e, xe = je, Oe = typeof self == "object" && self && self.Object === Object && self, Ne = xe || Oe || Function("return this")(), re = Ne, Ce = re, Le = function() {
  return Ce.Date.now();
}, Ie = Le, Re = /\s/;
function Ve(e) {
  for (var r = e.length; r-- && Re.test(e.charAt(r)); )
    ;
  return r;
}
var Me = Ve, Fe = Me, Xe = /^\s+/;
function ze(e) {
  return e && e.slice(0, Fe(e) + 1).replace(Xe, "");
}
var Be = ze, Ge = re, Ae = Ge.Symbol, ne = Ae, U = ne, ae = Object.prototype, De = ae.hasOwnProperty, We = ae.toString, R = U ? U.toStringTag : void 0;
function Ue(e) {
  var r = De.call(e, R), a = e[R];
  try {
    e[R] = void 0;
    var l = !0;
  } catch {
  }
  var u = We.call(e);
  return l && (r ? e[R] = a : delete e[R]), u;
}
var He = Ue, Ke = Object.prototype, Ee = Ke.toString;
function Je(e) {
  return Ee.call(e);
}
var qe = Je, H = ne, Qe = He, Ye = qe, Ze = "[object Null]", et = "[object Undefined]", K = H ? H.toStringTag : void 0;
function tt(e) {
  return e == null ? e === void 0 ? et : Ze : K && K in Object(e) ? Qe(e) : Ye(e);
}
var rt = tt;
function nt(e) {
  return e != null && typeof e == "object";
}
var at = nt, ot = rt, it = at, lt = "[object Symbol]";
function st(e) {
  return typeof e == "symbol" || it(e) && ot(e) == lt;
}
var ut = st, ct = Be, E = te, dt = ut, J = 0 / 0, ft = /^[-+]0x[0-9a-f]+$/i, pt = /^0b[01]+$/i, mt = /^0o[0-7]+$/i, gt = parseInt;
function bt(e) {
  if (typeof e == "number")
    return e;
  if (dt(e))
    return J;
  if (E(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = E(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ct(e);
  var a = pt.test(e);
  return a || mt.test(e) ? gt(e.slice(2), a ? 2 : 8) : ft.test(e) ? J : +e;
}
var vt = bt, ht = te, B = Ie, q = vt, yt = "Expected a function", St = Math.max, kt = Math.min;
function Tt(e, r, a) {
  var l, u, c, f, p, o, _ = 0, M = !1, d = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(yt);
  r = q(r) || 0, ht(a) && (M = !!a.leading, d = "maxWait" in a, c = d ? St(q(a.maxWait) || 0, r) : c, v = "trailing" in a ? !!a.trailing : v);
  function N(t) {
    var s = l, m = u;
    return l = u = void 0, _ = t, f = e.apply(m, s), f;
  }
  function A(t) {
    return _ = t, p = setTimeout(k, r), M ? N(t) : f;
  }
  function P(t) {
    var s = t - o, m = t - _, h = r - s;
    return d ? kt(h, c - m) : h;
  }
  function $(t) {
    var s = t - o, m = t - _;
    return o === void 0 || s >= r || s < 0 || d && m >= c;
  }
  function k() {
    var t = B();
    if ($(t))
      return C(t);
    p = setTimeout(k, P(t));
  }
  function C(t) {
    return p = void 0, v && l ? N(t) : (l = u = void 0, f);
  }
  function n() {
    p !== void 0 && clearTimeout(p), _ = 0, l = o = u = p = void 0;
  }
  function i() {
    return p === void 0 ? f : C(B());
  }
  function g() {
    var t = B(), s = $(t);
    if (l = arguments, u = this, o = t, s) {
      if (p === void 0)
        return A(o);
      if (d)
        return clearTimeout(p), p = setTimeout(k, r), N(o);
    }
    return p === void 0 && (p = setTimeout(k, r)), f;
  }
  return g.cancel = n, g.flush = i, g;
}
var wt = Tt, oe = {
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
function _t(e, r, a, l, u, c) {
  return S(), x("div", {
    style: ie(c.containerStyle),
    class: le(c.containerClass),
    "aria-hidden": "true"
  }, null, 6);
}
function Pt(e, r) {
  r === void 0 && (r = {});
  var a = r.insertAt;
  if (!(!e || typeof document > "u")) {
    var l = document.head || document.getElementsByTagName("head")[0], u = document.createElement("style");
    u.type = "text/css", a === "top" && l.firstChild ? l.insertBefore(u, l.firstChild) : l.appendChild(u), u.styleSheet ? u.styleSheet.cssText = e : u.appendChild(document.createTextNode(e));
  }
}
var $t = `
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
Pt($t);
oe.render = _t;
function Q() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get: (e, r) => e.get(r.toString())
  });
}
const jt = { class: "flex justify-content-between flex-column sm:flex-row" }, xt = {
  key: 0,
  class: "p-input-icon-left mb-2"
}, Ot = /* @__PURE__ */ O("i", { class: "pi pi-search" }, null, -1), Nt = {
  key: 0,
  class: "pi pi-spin pi-spinner global-search-icon"
}, Ct = /* @__PURE__ */ Y({
  __name: "Table",
  props: {
    fields: { type: Object, required: !0 },
    paginator: { type: null, required: !0 },
    resource: { type: null, required: !0 }
  },
  setup(e) {
    var C;
    const r = se(), a = ue(), l = Q(), u = w(), c = w(!1);
    let f = w();
    const p = (n) => {
      f.value = n, P();
    };
    let o = w();
    const _ = (n) => {
      var i, g;
      n.page + 1 === ((i = a.value.paginator) == null ? void 0 : i.currentPage) && n.rows === ((g = a.value.paginator) == null ? void 0 : g.perPage) || (o.value = n, P());
    };
    let M = ce(
      () => {
        var n;
        return Object.entries((n = a.value.fields) != null ? n : {}).filter(
          ([, i]) => i.isGloballySearchable
        );
      }
    ), d = w(l.globalSearch), v = w((C = JSON.parse(l.columnsSearch)) != null ? C : {});
    function N(n) {
      v.value[n] !== void 0 && v.value[n].trim() === "" && delete v.value[n], P();
    }
    function A() {
    }
    de(
      d,
      wt(() => {
        P();
      }, 300)
    );
    const P = () => {
      var i, g, t, s, m, h, F, y, L, T, j;
      let n = {};
      o != null && o.value && (n.page = o != null && o.value ? ((i = o.value) == null ? void 0 : i.page) + 1 : (t = (g = a.value.paginator) == null ? void 0 : g.currentPage) != null ? t : 1), (s = o == null ? void 0 : o.value) != null && s.rows && (n.perPage = (y = (F = (m = o == null ? void 0 : o.value) == null ? void 0 : m.rows) != null ? F : (h = a.value.paginator) == null ? void 0 : h.perPage) != null ? y : 10), (L = f == null ? void 0 : f.value) != null && L.multiSortMeta && (n.sort = JSON.stringify((T = f == null ? void 0 : f.value) == null ? void 0 : T.multiSortMeta)), d.value && (n.globalSearch = d.value), Object.keys(v.value).length && (n.columnsSearch = JSON.stringify(v.value)), me.Inertia.get(
        `/${r.configs.prefix}/${(j = a.value.resource) == null ? void 0 : j.pluralLabel.toLowerCase()}`,
        n,
        {
          preserveState: !0,
          replace: !0,
          onStart: () => c.value = !0,
          onFinish: () => c.value = !1
        }
      );
    }, $ = w([]), k = w([]);
    return fe(() => {
      var t, s;
      const { fields: n, paginator: i } = a.value, g = Q();
      k.value = [];
      for (const m of (t = JSON.parse(g.sort)) != null ? t : [])
        k.value.push({
          field: m.field,
          order: m.order
        });
      $.value = [];
      for (const m of (s = i == null ? void 0 : i.data) != null ? s : []) {
        let h = {};
        for (const F in n) {
          const y = n[F];
          if (y.relationshipName) {
            const L = y.relationshipName.split(".");
            let T = m;
            for (let j = 0; j < L.length; j++)
              T !== null && (T = T[L[j]]);
            h[y.columnName] = T !== null ? T[y.title] : null;
          } else
            h[y.columnName] = m[y.columnName];
        }
        $.value.push(h);
      }
    }), (n, i) => {
      const g = pe("tooltip");
      return S(), z(b(we), {
        paginatorTemplate: {
          "640px": "PrevPageLink CurrentPageReport NextPageLink",
          default: "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        },
        currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
        ref_key: "dt",
        ref: u,
        value: $.value,
        lazy: !0,
        paginator: !0,
        loading: c.value,
        rows: e.paginator.perPage,
        first: (e.paginator.currentPage - 1) * e.paginator.perPage,
        totalRecords: e.paginator.totalCount,
        rowsPerPageOptions: b(r).configs.rowsPerPageOptions,
        responsiveLayout: "scroll",
        onPage: i[2] || (i[2] = (t) => _(t)),
        removableSort: "",
        sortMode: "multiple",
        multiSortMeta: k.value,
        onSort: i[3] || (i[3] = (t) => p(t)),
        filterDisplay: "row",
        globalFilterFields: ["customerNumber"]
      }, {
        header: I(() => [
          O("div", jt, [
            V(b(ge), {
              type: "button",
              icon: "pi pi-filter-slash",
              label: "Clear",
              class: "p-button-outlined mb-2",
              onClick: i[0] || (i[0] = (t) => void 0)
            }),
            b(M).length > 0 ? (S(), x("span", xt, [
              Ot,
              V(b(W), {
                modelValue: b(d),
                "onUpdate:modelValue": i[1] || (i[1] = (t) => be(d) ? d.value = t : d = t),
                placeholder: "Keyword Search",
                style: { width: "100%" },
                disabled: b(d) !== null && c.value
              }, null, 8, ["modelValue", "disabled"]),
              b(d) !== null && c.value ? (S(), x("i", Nt)) : D("v-if", !0)
            ])) : D("v-if", !0)
          ])
        ]),
        loading: I(() => []),
        default: I(() => [
          (S(!0), x(G, null, ve(e.fields, (t) => (S(), z(b(_e), {
            field: t.columnName,
            header: t.label,
            key: t.columnName,
            sortable: t.sortable,
            showFilterMenu: !1,
            filterMatchMode: "contains"
          }, he({
            body: I((s) => [
              c.value ? (S(), z(b(oe), { key: 0 })) : (S(), x(G, { key: 1 }, [
                ke(Z(s.data[t.columnName]), 1)
              ], 64))
            ]),
            _: 2
          }, [
            t.searchable && !t.isGloballySearchable ? {
              name: "filter",
              fn: I(() => [
                ye(V(b(W), {
                  type: "text",
                  class: "p-column-filter",
                  modelValue: b(v)[t.columnName],
                  "onUpdate:modelValue": (s) => b(v)[t.columnName] = s,
                  onKeydown: Se((s) => N(t.columnName), ["enter"]),
                  placeholder: `Search by ${t.label}`
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown", "placeholder"]), [
                  [
                    g,
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
const Lt = /* @__PURE__ */ ee(Ct, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Components/Table.vue"]]), It = { class: "grid" }, Rt = { class: "col-12" }, Vt = { class: "card" }, Mt = /* @__PURE__ */ Y({
  __name: "Index",
  setup(e) {
    return (r, a) => {
      const l = Te("AppHead");
      return S(), x(G, null, [
        V(l, {
          title: r.$page.props.controller.resource.pluralLabel
        }, null, 8, ["title"]),
        O("div", It, [
          O("div", Rt, [
            O("div", Vt, [
              O("h5", null, Z(r.$page.props.controller.resource.pluralLabel), 1),
              V(Lt, {
                paginator: r.$page.props.controller.paginator,
                fields: r.$page.props.controller.fields,
                resource: r.$page.props.controller.resource
              }, null, 8, ["paginator", "fields", "resource"])
            ])
          ])
        ])
      ], 64);
    };
  }
}), Bt = /* @__PURE__ */ ee(Mt, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Index.vue"]]);
export {
  Bt as default
};
