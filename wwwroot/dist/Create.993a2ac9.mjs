import { d as B, u as L, a as V, r as x, o as i, c as d, b as c, e, f as o, t as k, F as p, g as y, h as A, i as P, j as S, w, k as D, s as m } from "./main.ced9e4dc.mjs";
import { u as H, s as j, a as E } from "./trinity_resource_fields.71b6e108.mjs";
const G = { class: "grid" }, R = { class: "col-12" }, T = { class: "card" }, q = { class: "mb-6" }, z = { class: "p-fluid formgrid grid col-12" }, I = { class: "grid" }, J = { class: "field" }, K = {
  key: 0,
  class: "p-error"
}, M = { class: "mt-3" }, O = { class: "grid" }, X = /* @__PURE__ */ B({
  __name: "Create",
  setup(Q) {
    const t = L(), N = H(), _ = {};
    for (const a of N)
      _[a.columnName] = null;
    const s = V(_), u = x(!1);
    function F(a, r) {
      s.defaults({ ...s.data(), [a]: r || null });
    }
    function f(a = !1) {
      u.value = a, s.reset(), s.post("", {
        preserveScroll: !0,
        preserveState: !0
      });
    }
    return (a, r) => {
      var g, b, v, C, h;
      const $ = D("AppHead");
      return i(), d(p, null, [
        c($, {
          title: (g = e(t).resource) == null ? void 0 : g.pluralLabel
        }, null, 8, ["title"]),
        o("div", G, [
          o("div", R, [
            o("div", T, [
              o("h5", q, "Create " + k((b = e(t).resource) == null ? void 0 : b.pluralLabel), 1),
              o("form", z, [
                (i(!0), d(p, null, y((v = e(t).resource) == null ? void 0 : v.schema, (l, n) => (i(), A(P(l.componentName), {
                  key: `form_${n}_${l.componentName}`,
                  component: l,
                  form: e(s),
                  errors: e(t).errors,
                  setFieldValue: F,
                  class: "mb-4"
                }, null, 8, ["component", "form", "errors"]))), 128))
              ]),
              o("div", I, [
                o("div", J, [
                  (C = e(t).errors) != null && C.value[""] ? (i(), d("div", K, [
                    (i(!0), d(p, null, y((h = e(t).errors) == null ? void 0 : h.value[""], (l, n) => (i(), d("div", { key: n }, k(l), 1))), 128))
                  ])) : S("", !0)
                ])
              ]),
              o("div", M, [
                c(e(j), { disabled: "" }, {
                  start: w(() => [
                    o("div", O, [
                      c(e(m), {
                        label: "Create",
                        class: "m-2 p-button-primary",
                        onClick: r[0] || (r[0] = () => f()),
                        disabled: e(s).processing,
                        loading: !u.value && e(s).processing
                      }, null, 8, ["disabled", "loading"]),
                      c(e(m), {
                        label: "Create & create another",
                        class: "m-2 p-button-help",
                        onClick: r[1] || (r[1] = () => f(!0)),
                        disabled: e(s).processing,
                        loading: u.value && e(s).processing
                      }, null, 8, ["disabled", "loading"]),
                      c(e(m), {
                        label: "Cancel",
                        class: "m-2 p-button-secondary",
                        onClick: r[2] || (r[2] = (l) => {
                          var n;
                          return e(E)(`/${(n = e(t).resource) == null ? void 0 : n.name}`);
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
});
export {
  X as default
};
