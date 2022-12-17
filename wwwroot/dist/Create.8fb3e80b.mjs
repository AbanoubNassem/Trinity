import { d as u, u as d, r as m, o as t, c as l, a as f, b as o, e, t as g, F as i, f as h, g as C, h as v, _ as b } from "./main.8bf9fcd3.mjs";
const y = { class: "grid" }, k = { class: "col-12" }, B = { class: "mb-6" }, N = { class: "p-fluid formgrid grid col-12" }, V = /* @__PURE__ */ u({
  __name: "Create",
  setup(x) {
    const s = d();
    return (D, L) => {
      var r, n, c;
      const _ = m("AppHead");
      return t(), l(i, null, [
        f(_, {
          title: (r = o(s).resource) == null ? void 0 : r.pluralLabel
        }, null, 8, ["title"]),
        e("div", y, [
          e("div", k, [
            e("h5", B, "Create " + g((n = o(s).resource) == null ? void 0 : n.pluralLabel), 1),
            e("div", N, [
              (t(!0), l(i, null, h((c = o(s).resource) == null ? void 0 : c.schema, (a, p) => (t(), C(v(a.componentName), {
                key: `form_${p}_${a.componentName}`,
                component: a
              }, null, 8, ["component"]))), 128))
            ])
          ])
        ])
      ], 64);
    };
  }
}), A = /* @__PURE__ */ b(V, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Create.vue"]]);
export {
  A as default
};
