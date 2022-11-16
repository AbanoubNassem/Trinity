import { d as L, u as x, r as c, b as p, e as u, o as s, c as o, f as i, w as g, n as h, g as a, F as d, h as w, i as C, t as _, _ as k } from "./main.ca1d2cc4.mjs";
const V = { class: "dropdown" }, A = /* @__PURE__ */ a("label", {
  tabindex: "0",
  class: "btn m-1"
}, "Click", -1), I = {
  tabindex: "0",
  class: "dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
}, y = /* @__PURE__ */ L({
  __name: "Index",
  setup(B) {
    const { props: t } = x(), e = c(p(() => t.value.controller.resource)), l = c(p(() => t.value.controller.data));
    return console.log(l.value), (m, N) => {
      var r, n;
      const b = u("AppHead"), v = u("AppLink");
      return s(), o(d, null, [
        i(b, {
          title: e.value.pluralLabel
        }, null, 8, ["title"]),
        i(v, {
          href: `/${e.value.pluralLabel.toLowerCase()}`,
          class: h({
            active: ((n = (r = m.$page.props.controller) == null ? void 0 : r.resource) == null ? void 0 : n.pluralLabel.toLowerCase()) === e.value.pluralLabel.toLowerCase()
          }),
          "preserve-state": "",
          "preserve-scroll": ""
        }, {
          default: g(() => [
            C(_(e.value.pluralLabel), 1)
          ]),
          _: 1
        }, 8, ["href", "class"]),
        a("div", V, [
          A,
          a("ul", I, [
            (s(!0), o(d, null, w(l.value.data, (f) => (s(), o("li", null, [
              a("a", null, _(f), 1)
            ]))), 256))
          ])
        ])
      ], 64);
    };
  }
}), $ = /* @__PURE__ */ k(y, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Index.vue"]]);
export {
  $ as default
};
