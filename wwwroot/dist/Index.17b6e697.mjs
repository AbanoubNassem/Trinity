import { d as l, u as s, r as t, b as r, o as c, c as p, e as u, F as d, f as e, g as m } from "./main.11fdb405.mjs";
const i = /* @__PURE__ */ e("div", { class: "dropdown" }, [
  /* @__PURE__ */ e("label", {
    tabindex: "0",
    class: "btn m-1"
  }, "Click"),
  /* @__PURE__ */ e("ul", {
    tabindex: "0",
    class: "dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
  }, [
    /* @__PURE__ */ e("li", null, [
      /* @__PURE__ */ e("a", null, "Item 1")
    ]),
    /* @__PURE__ */ e("li", null, [
      /* @__PURE__ */ e("a", null, "Item 2")
    ])
  ])
], -1), g = /* @__PURE__ */ l({
  __name: "Index",
  setup(_) {
    const { props: o } = s(), a = t(r(() => o.value.controller.resource));
    return (b, f) => {
      const n = m("AppHead");
      return c(), p(d, null, [
        u(n, {
          title: a.value.pluralLabel
        }, null, 8, ["title"]),
        i
      ], 64);
    };
  }
});
export {
  g as default
};
