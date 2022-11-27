import { p as h, q as p, J as w, d as _, w as P, u as i, o as u, i as g, v as k, c as x, j as y, F as N, K as C, L, b as c, t as F, r as B } from "./main.bc71fd1d.mjs";
import { a as R, b as T } from "./column.esm.aa876922.mjs";
const $ = /* @__PURE__ */ h({
  __name: "Table",
  props: {
    fields: null,
    paginator: null
  },
  setup(d) {
    const n = d, e = p([]);
    return w(() => {
      const { fields: o, paginator: s } = n;
      e.value = [];
      for (const t of s.data) {
        let r = {};
        for (const m in o) {
          const a = o[m], b = a.columnName.replace(".", "_");
          if (a.relationshipName) {
            const v = a.relationshipName.split(".");
            let l = t;
            for (let f = 0; f < v.length; f++)
              l !== null && (l = l[v[f]]);
            r[b] = l !== null ? l[a.title] : null;
          } else
            r[a.columnName] = t[a.columnName];
        }
        e.value.push(r);
      }
    }), (o, s) => (u(), _(i(T), {
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
      paginatorstart: P(() => [
        g(i(k), {
          type: "button",
          icon: "pi pi-refresh",
          class: "p-button-text"
        })
      ]),
      paginatorend: P(() => [
        g(i(k), {
          type: "button",
          icon: "pi pi-cloud",
          class: "p-button-text"
        })
      ]),
      default: P(() => [
        (u(!0), x(N, null, y(d.fields, (t) => (u(), _(i(R), {
          field: t.columnName.replace(".", "_"),
          header: t.title,
          key: t.title
        }, null, 8, ["field", "header"]))), 128))
      ]),
      _: 1
    }, 8, ["value", "paginator"]));
  }
}), A = { class: "grid" }, D = { class: "col-12" }, E = { class: "card" }, S = /* @__PURE__ */ h({
  __name: "Index",
  setup(d) {
    const { props: n } = C(), e = p(L(() => n.value.controller.resource)), o = p(L(() => n.value.controller.paginator)), s = p(L(() => n.value.controller.fields));
    return (t, r) => {
      const m = B("AppHead");
      return u(), x(N, null, [
        g(m, {
          title: e.value.pluralLabel
        }, null, 8, ["title"]),
        c("div", A, [
          c("div", D, [
            c("div", E, [
              c("h5", null, F(e.value.pluralLabel), 1),
              g($, {
                paginator: o.value,
                fields: s.value
              }, null, 8, ["paginator", "fields"])
            ])
          ])
        ])
      ], 64);
    };
  }
});
export {
  S as default
};
