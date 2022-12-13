import { K as M, o as w, c as R, j as ae, n as oe, d as J, L as ie, M as le, r as k, N as se, P as ue, Q as ce, x as de, B, w as L, u as d, S as fe, a as $, b as j, s as pe, V as me, k as E, i as ge, y as be, z as ve, H as he, F as Q, _ as Y, v as ye, t as Se } from "./main.95315411.mjs";
import { s as ke, a as Te } from "./column.esm.a1fe31ce.mjs";
import { s as G } from "./inputtext.esm.fd3432e5.mjs";
function we(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Z = we, _e = typeof M == "object" && M && M.Object === Object && M, Pe = _e, $e = Pe, je = typeof self == "object" && self && self.Object === Object && self, xe = $e || je || Function("return this")(), ee = xe, Oe = ee, Ne = function() {
  return Oe.Date.now();
}, Ce = Ne, Le = /\s/;
function Ie(e) {
  for (var t = e.length; t-- && Le.test(e.charAt(t)); )
    ;
  return t;
}
var Re = Ie, Ve = Re, Fe = /^\s+/;
function Me(e) {
  return e && e.slice(0, Ve(e) + 1).replace(Fe, "");
}
var Xe = Me, ze = ee, Be = ze.Symbol, te = Be, A = te, ne = Object.prototype, Ee = ne.hasOwnProperty, Ge = ne.toString, I = A ? A.toStringTag : void 0;
function Ae(e) {
  var t = Ee.call(e, I), o = e[I];
  try {
    e[I] = void 0;
    var u = !0;
  } catch {
  }
  var i = Ge.call(e);
  return u && (t ? e[I] = o : delete e[I]), i;
}
var De = Ae, We = Object.prototype, Ke = We.toString;
function Ue(e) {
  return Ke.call(e);
}
var He = Ue, D = te, qe = De, Je = He, Qe = "[object Null]", Ye = "[object Undefined]", W = D ? D.toStringTag : void 0;
function Ze(e) {
  return e == null ? e === void 0 ? Ye : Qe : W && W in Object(e) ? qe(e) : Je(e);
}
var et = Ze;
function tt(e) {
  return e != null && typeof e == "object";
}
var nt = tt, rt = et, at = nt, ot = "[object Symbol]";
function it(e) {
  return typeof e == "symbol" || at(e) && rt(e) == ot;
}
var lt = it, st = Xe, K = Z, ut = lt, U = 0 / 0, ct = /^[-+]0x[0-9a-f]+$/i, dt = /^0b[01]+$/i, ft = /^0o[0-7]+$/i, pt = parseInt;
function mt(e) {
  if (typeof e == "number")
    return e;
  if (ut(e))
    return U;
  if (K(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = K(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = st(e);
  var o = dt.test(e);
  return o || ft.test(e) ? pt(e.slice(2), o ? 2 : 8) : ct.test(e) ? U : +e;
}
var gt = mt, bt = Z, z = Ce, H = gt, vt = "Expected a function", ht = Math.max, yt = Math.min;
function St(e, t, o) {
  var u, i, f, S, s, h, T = 0, m = !1, y = !1, V = !0;
  if (typeof e != "function")
    throw new TypeError(vt);
  t = H(t) || 0, bt(o) && (m = !!o.leading, y = "maxWait" in o, f = y ? ht(H(o.maxWait) || 0, t) : f, V = "trailing" in o ? !!o.trailing : V);
  function x(n) {
    var c = u, v = i;
    return u = i = void 0, T = n, S = e.apply(v, c), S;
  }
  function O(n) {
    return T = n, s = setTimeout(l, t), m ? x(n) : S;
  }
  function N(n) {
    var c = n - h, v = n - T, p = t - c;
    return y ? yt(p, f - v) : p;
  }
  function _(n) {
    var c = n - h, v = n - T;
    return h === void 0 || c >= t || c < 0 || y && v >= f;
  }
  function l() {
    var n = z();
    if (_(n))
      return a(n);
    s = setTimeout(l, N(n));
  }
  function a(n) {
    return s = void 0, V && u ? x(n) : (u = i = void 0, S);
  }
  function g() {
    s !== void 0 && clearTimeout(s), T = 0, u = h = i = s = void 0;
  }
  function b() {
    return s === void 0 ? S : a(z());
  }
  function r() {
    var n = z(), c = _(n);
    if (u = arguments, i = this, h = n, c) {
      if (s === void 0)
        return O(h);
      if (y)
        return clearTimeout(s), s = setTimeout(l, t), x(h);
    }
    return s === void 0 && (s = setTimeout(l, t)), S;
  }
  return r.cancel = g, r.flush = b, r;
}
var kt = St, re = {
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
function Tt(e, t, o, u, i, f) {
  return w(), R("div", {
    style: ae(f.containerStyle),
    class: oe(f.containerClass),
    "aria-hidden": "true"
  }, null, 6);
}
function wt(e, t) {
  t === void 0 && (t = {});
  var o = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var u = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
    i.type = "text/css", o === "top" && u.firstChild ? u.insertBefore(i, u.firstChild) : u.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e));
  }
}
var _t = `
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
wt(_t);
re.render = Tt;
function q() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get: (e, t) => e.get(t.toString())
  });
}
const Pt = { class: "flex justify-content-between flex-column sm:flex-row" }, $t = {
  key: 0,
  class: "p-input-icon-left mb-2"
}, jt = /* @__PURE__ */ $("i", { class: "pi pi-search" }, null, -1), xt = {
  key: 0,
  class: "pi pi-spin pi-spinner global-search-icon"
}, Ot = /* @__PURE__ */ J({
  __name: "Table",
  props: {
    fields: { type: Object, required: !0 },
    paginator: { type: null, required: !0 },
    resource: { type: null, required: !0 }
  },
  setup(e) {
    const t = ie(), o = le(), u = k(), i = k(!1);
    let f = k();
    const S = (l) => {
      f.value = l, O();
    };
    let s = k();
    const h = (l) => {
      var a, g;
      l.page + 1 === ((a = o.value.paginator) == null ? void 0 : a.currentPage) && l.rows === ((g = o.value.paginator) == null ? void 0 : g.perPage) || (s.value = l, O());
    };
    let T = se(
      () => {
        var l;
        return Object.entries((l = o.value.fields) != null ? l : {}).filter(
          ([, a]) => a.isGloballySearchable
        );
      }
    ), m = k(q().globalSearch), y = k({});
    function V() {
    }
    ue(
      m,
      kt(() => {
        O();
      }, 300)
    );
    function x(l) {
      console.log(y, l);
    }
    const O = () => {
      var l, a, g, b, r, n, c, v, p, F;
      fe.Inertia.get(
        `/${t.configs.prefix}/${(l = o.value.resource) == null ? void 0 : l.pluralLabel.toLowerCase()}`,
        {
          page: s != null && s.value ? ((a = s.value) == null ? void 0 : a.page) + 1 : (b = (g = o.value.paginator) == null ? void 0 : g.currentPage) != null ? b : 1,
          perPage: (v = (c = (r = s == null ? void 0 : s.value) == null ? void 0 : r.rows) != null ? c : (n = o.value.paginator) == null ? void 0 : n.perPage) != null ? v : 10,
          sort: JSON.stringify(
            (F = (p = f == null ? void 0 : f.value) == null ? void 0 : p.multiSortMeta) == null ? void 0 : F.map((P) => (P.field = P.field.replace("_", "."), P))
          ),
          globalSearch: m.value
        },
        {
          preserveState: !0,
          replace: !0,
          onStart: () => i.value = !0,
          onFinish: () => i.value = !1
        }
      );
    }, N = k([]), _ = k([]);
    return ce(() => {
      var b, r;
      const { fields: l, paginator: a } = o.value, g = q();
      _.value = [];
      for (const n of (b = JSON.parse(g.sort)) != null ? b : [])
        _.value.push({
          field: n.field.replace(".", "_"),
          order: n.order
        });
      N.value = [];
      for (const n of (r = a == null ? void 0 : a.data) != null ? r : []) {
        let c = {};
        for (const v in l) {
          const p = l[v], F = p.columnName.replace(".", "_");
          if (p.relationshipName) {
            const P = p.relationshipName.split(".");
            let C = n;
            for (let X = 0; X < P.length; X++)
              C !== null && (C = C[P[X]]);
            c[F] = C !== null ? C[p.title] : null;
          } else
            c[p.columnName] = n[p.columnName];
        }
        N.value.push(c);
      }
    }), (l, a) => {
      var b;
      const g = de("tooltip");
      return w(), B(d(ke), {
        paginatorTemplate: {
          "640px": "PrevPageLink CurrentPageReport NextPageLink",
          default: "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        },
        currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
        ref_key: "dt",
        ref: u,
        value: N.value,
        lazy: !0,
        paginator: !0,
        loading: i.value,
        rows: e.paginator.perPage,
        first: (e.paginator.currentPage - 1) * e.paginator.perPage,
        totalRecords: e.paginator.totalCount,
        rowsPerPageOptions: d(t).configs.rowsPerPageOptions,
        responsiveLayout: "scroll",
        stateKey: (b = d(o).resource) == null ? void 0 : b.pluralLabel,
        onPage: a[2] || (a[2] = (r) => h(r)),
        removableSort: "",
        sortMode: "multiple",
        multiSortMeta: _.value,
        onSort: a[3] || (a[3] = (r) => S(r)),
        filterDisplay: "row",
        globalFilterFields: ["customerNumber"],
        onFilter: a[4] || (a[4] = (r) => x(r))
      }, {
        header: L(() => [
          $("div", Pt, [
            j(d(pe), {
              type: "button",
              icon: "pi pi-filter-slash",
              label: "Clear",
              class: "p-button-outlined mb-2",
              onClick: a[0] || (a[0] = (r) => void 0)
            }),
            d(T).length > 0 ? (w(), R("span", $t, [
              jt,
              j(d(G), {
                modelValue: d(m),
                "onUpdate:modelValue": a[1] || (a[1] = (r) => me(m) ? m.value = r : m = r),
                placeholder: "Keyword Search",
                style: { width: "100%" },
                disabled: d(m) !== null && i.value
              }, null, 8, ["modelValue", "disabled"]),
              d(m) !== null && i.value ? (w(), R("i", xt)) : E("v-if", !0)
            ])) : E("v-if", !0)
          ])
        ]),
        loading: L(() => []),
        default: L(() => [
          (w(!0), R(Q, null, ge(e.fields, (r) => (w(), B(d(Te), {
            field: r.columnName.replace(".", "_"),
            header: r.label,
            key: r.title,
            sortable: r.sortable,
            showFilterMenu: !1,
            filterMatchMode: "contains"
          }, be({ _: 2 }, [
            i.value ? {
              name: "body",
              fn: L(() => [
                j(d(re))
              ]),
              key: "0"
            } : void 0,
            r.searchable && !r.isGloballySearchable ? {
              name: "filter",
              fn: L(({ filterCallback: n }) => [
                ve(j(d(G), {
                  type: "text",
                  class: "p-column-filter",
                  modelValue: d(y)[r.columnName],
                  "onUpdate:modelValue": (c) => d(y)[r.columnName] = c,
                  onKeydown: he((c) => n(), ["enter"]),
                  placeholder: `Search by name ${r.label}`
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
              key: "1"
            } : void 0
          ]), 1032, ["field", "header", "sortable"]))), 128))
        ]),
        _: 1
      }, 8, ["value", "loading", "rows", "first", "totalRecords", "rowsPerPageOptions", "stateKey", "multiSortMeta"]);
    };
  }
});
const Nt = /* @__PURE__ */ Y(Ot, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Components/Table.vue"]]), Ct = { class: "grid" }, Lt = { class: "col-12" }, It = { class: "card" }, Rt = /* @__PURE__ */ J({
  __name: "Index",
  setup(e) {
    return (t, o) => {
      const u = ye("AppHead");
      return w(), R(Q, null, [
        j(u, {
          title: t.$page.props.controller.resource.pluralLabel
        }, null, 8, ["title"]),
        $("div", Ct, [
          $("div", Lt, [
            $("div", It, [
              $("h5", null, Se(t.$page.props.controller.resource.pluralLabel), 1),
              j(Nt, {
                paginator: t.$page.props.controller.paginator,
                fields: t.$page.props.controller.fields,
                resource: t.$page.props.controller.resource
              }, null, 8, ["paginator", "fields", "resource"])
            ])
          ])
        ])
      ], 64);
    };
  }
}), Xt = /* @__PURE__ */ Y(Rt, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Index.vue"]]);
export {
  Xt as default
};
