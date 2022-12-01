import { o as h, c as _, j as M, n as O, d as x, K as V, r as f, L as q, B as N, w, u as y, M as A, i as D, y as F, b as S, F as T, _ as R, q as j, a as k, t as K } from "./main.d8cebbba.mjs";
import { s as H, a as J } from "./column.esm.df27de59.mjs";
import "./inputtext.esm.a2d500ce.mjs";
var $ = {
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
function U(t, e, c, o, n, u) {
  return h(), _("div", {
    style: M(u.containerStyle),
    class: O(u.containerClass),
    "aria-hidden": "true"
  }, null, 6);
}
function W(t, e) {
  e === void 0 && (e = {});
  var c = e.insertAt;
  if (!(!t || typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", c === "top" && o.firstChild ? o.insertBefore(n, o.firstChild) : o.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t));
  }
}
var E = `
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
W(E);
$.render = U;
function G() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get: (t, e) => JSON.parse(t.get(e.toString()))
  });
}
const Q = /* @__PURE__ */ x({
  __name: "Table",
  props: {
    fields: { type: Object, required: !0 },
    paginator: { type: null, required: !0 },
    resource: { type: null, required: !0 }
  },
  setup(t) {
    const e = t, c = V(), o = f(), n = f(!1);
    let u = f();
    const X = (a) => {
      u.value = a, C();
    };
    let i = f();
    const z = (a) => {
      a.page + 1 === e.paginator.currentPage && a.rows === e.paginator.perPage || (i.value = a, C());
    }, C = () => {
      var a, s, r, m, l;
      A.Inertia.get(
        `/${c.configs.prefix}/${e.resource.pluralLabel.toLowerCase()}`,
        {
          page: i != null && i.value ? ((a = i.value) == null ? void 0 : a.page) + 1 : e.paginator.currentPage,
          perPage: (r = (s = i == null ? void 0 : i.value) == null ? void 0 : s.rows) != null ? r : e.paginator.perPage,
          sort: JSON.stringify(
            (l = (m = u == null ? void 0 : u.value) == null ? void 0 : m.multiSortMeta) == null ? void 0 : l.map((p) => (p.field = p.field.replace("_", "."), p))
          )
        },
        {
          preserveScroll: !0,
          preserveState: !0,
          replace: !0,
          onStart: () => n.value = !0,
          onFinish: () => n.value = !1
        }
      );
    }, v = f([]), b = f([]);
    return q(() => {
      var m;
      const { fields: a, paginator: s } = e, r = G();
      b.value = [];
      for (const l of (m = r.sort) != null ? m : [])
        b.value.push({
          field: l.field.replace(".", "_"),
          order: l.order
        });
      v.value = [];
      for (const l of s.data) {
        let p = {};
        for (const B in a) {
          const d = a[B], I = d.columnName.replace(".", "_");
          if (d.relationshipName) {
            const L = d.relationshipName.split(".");
            let g = l;
            for (let P = 0; P < L.length; P++)
              g !== null && (g = g[L[P]]);
            p[I] = g !== null ? g[d.title] : null;
          } else
            p[d.columnName] = l[d.columnName];
        }
        v.value.push(p);
      }
    }), (a, s) => (h(), N(y(H), {
      paginatorTemplate: {
        "640px": "PrevPageLink CurrentPageReport NextPageLink",
        default: "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      },
      currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
      ref_key: "dt",
      ref: o,
      value: v.value,
      lazy: !0,
      paginator: !0,
      loading: n.value,
      rows: t.paginator.perPage,
      first: (t.paginator.currentPage - 1) * t.paginator.perPage,
      totalRecords: t.paginator.totalCount,
      rowsPerPageOptions: y(c).configs.rowsPerPageOptions,
      responsiveLayout: "scroll",
      stateKey: t.resource.pluralLabel,
      onPage: s[0] || (s[0] = (r) => z(r)),
      removableSort: "",
      sortMode: "multiple",
      multiSortMeta: b.value,
      onSort: s[1] || (s[1] = (r) => X(r))
    }, {
      loading: w(() => []),
      default: w(() => [
        (h(!0), _(T, null, D(t.fields, (r) => (h(), N(y(J), {
          field: r.columnName.replace(".", "_"),
          header: r.label,
          key: r.title,
          sortable: r.sortable != null
        }, F({ _: 2 }, [
          n.value ? {
            name: "body",
            fn: w(() => [
              S(y($))
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["field", "header", "sortable"]))), 128))
      ]),
      _: 1
    }, 8, ["value", "loading", "rows", "first", "totalRecords", "rowsPerPageOptions", "stateKey", "multiSortMeta"]));
  }
});
const Y = /* @__PURE__ */ R(Q, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Components/Table.vue"]]), Z = { class: "grid" }, ee = { class: "col-12" }, te = { class: "card" }, ne = /* @__PURE__ */ x({
  __name: "Index",
  setup(t) {
    return (e, c) => {
      const o = j("AppHead");
      return h(), _(T, null, [
        S(o, {
          title: e.$page.props.controller.resource.pluralLabel
        }, null, 8, ["title"]),
        k("div", Z, [
          k("div", ee, [
            k("div", te, [
              k("h5", null, K(e.$page.props.controller.resource.pluralLabel), 1),
              S(Y, {
                paginator: e.$page.props.controller.paginator,
                fields: e.$page.props.controller.fields,
                resource: e.$page.props.controller.resource
              }, null, 8, ["paginator", "fields", "resource"])
            ])
          ])
        ])
      ], 64);
    };
  }
}), se = /* @__PURE__ */ R(ne, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Index.vue"]]);
export {
  se as default
};
