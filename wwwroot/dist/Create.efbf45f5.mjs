import { d as $, u as x, a as B, r as L, b as P, o as i, c, e as d, f as e, g as t, t as k, F as p, h as y, i as A, j as D, k as S, w as T, s as m, _ as w } from "./main.a429b92d.mjs";
import { u as H, s as j, a as E } from "./trinity_resource_fields.491b87a3.mjs";
const G = { class: "grid" }, I = { class: "col-12" }, R = { class: "card" }, W = { class: "mb-6" }, q = { class: "p-fluid formgrid grid col-12" }, z = { class: "grid" }, J = { class: "field" }, K = {
  key: 0,
  class: "p-error"
}, M = { class: "mt-3" }, O = { class: "grid" }, Q = /* @__PURE__ */ $({
  __name: "Create",
  setup(U) {
    const o = x(), N = H(), _ = {};
    for (const a of N)
      _[a.columnName] = null;
    const s = B(_), u = L(!1);
    function V(a, r) {
      s.defaults({ ...s.data(), [a]: r || null });
    }
    function f(a = !1) {
      u.value = a, s.reset(), s.post("", {
        preserveScroll: !0,
        preserveState: !0
      });
    }
    return (a, r) => {
      var g, v, b, C, h;
      const F = P("AppHead");
      return i(), c(p, null, [
        d(F, {
          title: (g = e(o).resource) == null ? void 0 : g.pluralLabel
        }, null, 8, ["title"]),
        t("div", G, [
          t("div", I, [
            t("div", R, [
              t("h5", W, "Create " + k((v = e(o).resource) == null ? void 0 : v.pluralLabel), 1),
              t("form", q, [
                (i(!0), c(p, null, y((b = e(o).resource) == null ? void 0 : b.schema, (l, n) => (i(), A(D(l.componentName), {
                  key: `form_${n}_${l.componentName}`,
                  component: l,
                  form: e(s),
                  errors: e(o).errors,
                  setFieldValue: V,
                  class: "mb-4"
                }, null, 8, ["component", "form", "errors"]))), 128))
              ]),
              t("div", z, [
                t("div", J, [
                  (C = e(o).errors) != null && C.value[""] ? (i(), c("div", K, [
                    (i(!0), c(p, null, y((h = e(o).errors) == null ? void 0 : h.value[""], (l, n) => (i(), c("div", { key: n }, k(l), 1))), 128))
                  ])) : S("v-if", !0)
                ])
              ]),
              t("div", M, [
                d(e(j), { disabled: "" }, {
                  start: T(() => [
                    t("div", O, [
                      d(e(m), {
                        label: "Create",
                        class: "m-2 p-button-primary",
                        onClick: r[0] || (r[0] = () => f()),
                        disabled: e(s).processing,
                        loading: !u.value && e(s).processing
                      }, null, 8, ["disabled", "loading"]),
                      d(e(m), {
                        label: "Create & create another",
                        class: "m-2 p-button-help",
                        onClick: r[1] || (r[1] = () => f(!0)),
                        disabled: e(s).processing,
                        loading: u.value && e(s).processing
                      }, null, 8, ["disabled", "loading"]),
                      d(e(m), {
                        label: "Cancel",
                        class: "m-2 p-button-secondary",
                        onClick: r[2] || (r[2] = (l) => {
                          var n;
                          return e(E)(`/${(n = e(o).resource) == null ? void 0 : n.name}`);
                        }),
                        disabled: e(s).processing
                      }, null, 8, ["disabled"])
                    ])
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ], 64);
    };
  }
}), Z = /* @__PURE__ */ w(Q, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Create.vue"]]);
export {
  Z as default
};
