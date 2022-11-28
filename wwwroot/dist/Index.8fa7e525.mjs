import { o as c, c as v, h as $, n as R, p as S, J as X, q as b, K as z, d as w, w as u, u as l, L as I, i as d, v as _, j as B, A as V, F as C, _ as L, r as A, b as m, t as q } from "./main.f7b4ddd5.mjs";
import { a as D, b as E } from "./column.esm.bd4e7d46.mjs";
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
function F(t, e, s, a, n, f) {
  return c(), v("div", {
    style: $(f.containerStyle),
    class: R(f.containerClass),
    "aria-hidden": "true"
  }, null, 6);
}
function O(t, e) {
  e === void 0 && (e = {});
  var s = e.insertAt;
  if (!(!t || typeof document > "u")) {
    var a = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", s === "top" && a.firstChild ? a.insertBefore(n, a.firstChild) : a.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t));
  }
}
var j = `
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
O(j);
x.render = F;
const K = /* @__PURE__ */ S({
  __name: "Table",
  props: {
    fields: { type: Object, required: !0 },
    paginator: { type: null, required: !0 },
    resource: { type: null, required: !0 }
  },
  setup(t) {
    const e = t, s = X(), a = b(), n = b(!1), f = (r) => {
      r.page + 1 === e.paginator.currentPage && r.rows === e.paginator.perPage || I.Inertia.get(
        `/${s.configs.prefix}/${e.resource.pluralLabel.toLowerCase()}`,
        { page: r.page + 1, perPage: r.rows },
        {
          preserveScroll: !0,
          preserveState: !0,
          replace: !0,
          onStart: () => n.value = !0,
          onFinish: () => n.value = !1
        }
      );
    }, h = b([]);
    return z(() => {
      const { fields: r, paginator: g } = e;
      h.value = [];
      for (const o of g.data) {
        let y = {};
        for (const N in r) {
          const i = r[N], T = i.columnName.replace(".", "_");
          if (i.relationshipName) {
            const P = i.relationshipName.split(".");
            let p = o;
            for (let k = 0; k < P.length; k++)
              p !== null && (p = p[P[k]]);
            y[T] = p !== null ? p[i.title] : null;
          } else
            y[i.columnName] = o[i.columnName];
        }
        h.value.push(y);
      }
    }), (r, g) => (c(), w(l(E), {
      paginatorTemplate: {
        "640px": "PrevPageLink CurrentPageReport NextPageLink",
        default: "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      },
      currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
      ref_key: "dt",
      ref: a,
      value: h.value,
      lazy: !0,
      paginator: !0,
      loading: n.value,
      rows: t.paginator.perPage,
      first: (t.paginator.currentPage - 1) * t.paginator.perPage,
      totalRecords: t.paginator.totalCount,
      rowsPerPageOptions: l(s).configs.rowsPerPageOptions,
      responsiveLayout: "scroll",
      stateStorage: "session",
      stateKey: t.resource.pluralLabel,
      onPage: g[0] || (g[0] = (o) => f(o))
    }, {
      loading: u(() => []),
      paginatorstart: u(() => [
        d(l(_), {
          type: "button",
          icon: "pi pi-refresh",
          class: "p-button-text"
        })
      ]),
      paginatorend: u(() => [
        d(l(_), {
          type: "button",
          icon: "pi pi-cloud",
          class: "p-button-text"
        })
      ]),
      default: u(() => [
        (c(!0), v(C, null, B(t.fields, (o) => (c(), w(l(D), {
          field: o.columnName.replace(".", "_"),
          header: o.label,
          key: o.title
        }, V({ _: 2 }, [
          n.value ? {
            name: "body",
            fn: u(() => [
              d(l(x))
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["field", "header"]))), 128))
      ]),
      _: 1
    }, 8, ["value", "loading", "rows", "first", "totalRecords", "rowsPerPageOptions", "stateKey"]));
  }
});
const H = /* @__PURE__ */ L(K, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Components/Table.vue"]]), W = { class: "grid" }, J = { class: "col-12" }, G = { class: "card" }, M = /* @__PURE__ */ S({
  __name: "Index",
  setup(t) {
    return (e, s) => {
      const a = A("AppHead");
      return c(), v(C, null, [
        d(a, {
          title: e.$page.props.controller.resource.pluralLabel
        }, null, 8, ["title"]),
        m("div", W, [
          m("div", J, [
            m("div", G, [
              m("h5", null, q(e.$page.props.controller.resource.pluralLabel), 1),
              d(H, {
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
}), Y = /* @__PURE__ */ L(M, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Index.vue"]]);
export {
  Y as default
};
