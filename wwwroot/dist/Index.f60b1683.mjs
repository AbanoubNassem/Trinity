import { p as h, q as p, J as T, d as L, w as _, u as i, o as u, i as d, v as k, c as x, j as w, F as b, _ as N, K as C, L as P, r as V, b as c, t as F } from "./main.52c0756f.mjs";
import { a as I, b as B } from "./column.esm.15c236d1.mjs";
const D = /* @__PURE__ */ h({
  __name: "Table",
  props: {
    fields: { type: Object, required: !0 },
    paginator: { type: null, required: !0 }
  },
  setup(g) {
    const n = g, e = p([]);
    return T(() => {
      const { fields: s, paginator: o } = n;
      e.value = [];
      for (const t of o.data) {
        let l = {};
        for (const m in s) {
          const a = s[m], y = a.columnName.replace(".", "_");
          if (a.relationshipName) {
            const v = a.relationshipName.split(".");
            let r = t;
            for (let f = 0; f < v.length; f++)
              r !== null && (r = r[v[f]]);
            l[y] = r !== null ? r[a.title] : null;
          } else
            l[a.columnName] = t[a.columnName];
        }
        e.value.push(l);
      }
    }), (s, o) => (u(), L(i(B), {
      value: e.value,
      paginator: e.value.length > 0,
      rows: 10,
      paginatorTemplate: {
        "640px": "PrevPageLink CurrentPageReport NextPageLink",
        "960px": "FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
        "1300px": "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink",
        default: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown"
      },
      responsiveLayout: "scroll",
      currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}"
    }, {
      paginatorstart: _(() => [
        d(i(k), {
          type: "button",
          icon: "pi pi-refresh",
          class: "p-button-text"
        })
      ]),
      paginatorend: _(() => [
        d(i(k), {
          type: "button",
          icon: "pi pi-cloud",
          class: "p-button-text"
        })
      ]),
      default: _(() => [
        (u(!0), x(b, null, w(g.fields, (t) => (u(), L(i(I), {
          field: t.columnName.replace(".", "_"),
          header: t.label,
          key: t.title
        }, null, 8, ["field", "header"]))), 128))
      ]),
      _: 1
    }, 8, ["value", "paginator"]));
  }
}), R = /* @__PURE__ */ N(D, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Components/Table.vue"]]), $ = { class: "grid" }, q = { class: "col-12" }, j = { class: "card" }, A = /* @__PURE__ */ h({
  __name: "Index",
  setup(g) {
    const { props: n } = C(), e = p(P(() => n.value.controller.resource)), s = p(P(() => n.value.controller.paginator)), o = p(P(() => n.value.controller.fields));
    return (t, l) => {
      const m = V("AppHead");
      return u(), x(b, null, [
        d(m, {
          title: e.value.pluralLabel
        }, null, 8, ["title"]),
        c("div", $, [
          c("div", q, [
            c("div", j, [
              c("h5", null, F(e.value.pluralLabel), 1),
              d(R, {
                paginator: s.value,
                fields: o.value
              }, null, 8, ["paginator", "fields"])
            ])
          ])
        ])
      ], 64);
    };
  }
}), J = /* @__PURE__ */ N(A, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Index.vue"]]);
export {
  J as default
};
