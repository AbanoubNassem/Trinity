import { o as h, c as _, h as M, n as O, p as R, J as A, q as f, K as F, d as N, w as S, u as k, L as I, j as J, y as K, i as b, F as $, b as v, t as j, r as D } from "./main.dc407183.mjs";
import { s as H, a as U } from "./column.esm.d049bfc6.mjs";
import "./inputtext.esm.f9cb7d7d.mjs";
var x = {
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
function V(t, e, c, o, n, u) {
  return h(), _("div", {
    style: M(u.containerStyle),
    class: O(u.containerClass),
    "aria-hidden": "true"
  }, null, 6);
}
function q(t, e) {
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
q(E);
x.render = V;
function G() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get: (t, e) => JSON.parse(t.get(e.toString()))
  });
}
const Q = /* @__PURE__ */ R({
  __name: "Table",
  props: {
    fields: null,
    paginator: null,
    resource: null
  },
  setup(t) {
    const e = t, c = A(), o = f(), n = f(!1);
    let u = f();
    const X = (r) => {
      u.value = r, L();
    };
    let l = f();
    const z = (r) => {
      r.page + 1 === e.paginator.currentPage && r.rows === e.paginator.perPage || (l.value = r, L());
    }, L = () => {
      var r, s, a, m, i;
      I.Inertia.get(
        `/${c.configs.prefix}/${e.resource.pluralLabel.toLowerCase()}`,
        {
          page: l != null && l.value ? ((r = l.value) == null ? void 0 : r.page) + 1 : e.paginator.currentPage,
          perPage: (a = (s = l == null ? void 0 : l.value) == null ? void 0 : s.rows) != null ? a : e.paginator.perPage,
          sort: JSON.stringify(
            (i = (m = u == null ? void 0 : u.value) == null ? void 0 : m.multiSortMeta) == null ? void 0 : i.map((p) => (p.field = p.field.replace("_", "."), p))
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
    }, y = f([]), P = f([]);
    return F(() => {
      var m;
      const { fields: r, paginator: s } = e, a = G();
      P.value = [];
      for (const i of (m = a.sort) != null ? m : [])
        P.value.push({
          field: i.field.replace(".", "_"),
          order: i.order
        });
      y.value = [];
      for (const i of s.data) {
        let p = {};
        for (const T in r) {
          const d = r[T], B = d.columnName.replace(".", "_");
          if (d.relationshipName) {
            const C = d.relationshipName.split(".");
            let g = i;
            for (let w = 0; w < C.length; w++)
              g !== null && (g = g[C[w]]);
            p[B] = g !== null ? g[d.title] : null;
          } else
            p[d.columnName] = i[d.columnName];
        }
        y.value.push(p);
      }
    }), (r, s) => (h(), N(k(H), {
      paginatorTemplate: {
        "640px": "PrevPageLink CurrentPageReport NextPageLink",
        default: "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      },
      currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
      ref_key: "dt",
      ref: o,
      value: y.value,
      lazy: !0,
      paginator: !0,
      loading: n.value,
      rows: t.paginator.perPage,
      first: (t.paginator.currentPage - 1) * t.paginator.perPage,
      totalRecords: t.paginator.totalCount,
      rowsPerPageOptions: k(c).configs.rowsPerPageOptions,
      responsiveLayout: "scroll",
      stateKey: t.resource.pluralLabel,
      onPage: s[0] || (s[0] = (a) => z(a)),
      removableSort: "",
      sortMode: "multiple",
      multiSortMeta: P.value,
      onSort: s[1] || (s[1] = (a) => X(a))
    }, {
      loading: S(() => []),
      default: S(() => [
        (h(!0), _($, null, J(t.fields, (a) => (h(), N(k(U), {
          field: a.columnName.replace(".", "_"),
          header: a.label,
          key: a.title,
          sortable: a.sortable != null
        }, K({ _: 2 }, [
          n.value ? {
            name: "body",
            fn: S(() => [
              b(k(x))
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["field", "header", "sortable"]))), 128))
      ]),
      _: 1
    }, 8, ["value", "loading", "rows", "first", "totalRecords", "rowsPerPageOptions", "stateKey", "multiSortMeta"]));
  }
});
const W = { class: "grid" }, Y = { class: "col-12" }, Z = { class: "card" }, ae = /* @__PURE__ */ R({
  __name: "Index",
  setup(t) {
    return (e, c) => {
      const o = D("AppHead");
      return h(), _($, null, [
        b(o, {
          title: e.$page.props.controller.resource.pluralLabel
        }, null, 8, ["title"]),
        v("div", W, [
          v("div", Y, [
            v("div", Z, [
              v("h5", null, j(e.$page.props.controller.resource.pluralLabel), 1),
              b(Q, {
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
});
export {
  ae as default
};
