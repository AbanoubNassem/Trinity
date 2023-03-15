import { u as h, a as u, j as l, F as N, b as c, H as g, t, c as v } from "./main.8650d7d3.js";
const p = () => {
  var n, a, i;
  const m = h(), { page: s } = u();
  return /* @__PURE__ */ l(N, {
    children: [
      /* @__PURE__ */ c(g, {
        title: (n = s == null ? void 0 : s.label) != null ? n : s == null ? void 0 : s.slug
      }),
      /* @__PURE__ */ c("div", {
        className: "grid",
        children: /* @__PURE__ */ c("div", {
          className: "col-12",
          children: /* @__PURE__ */ l("div", {
            className: "card",
            children: [
              /* @__PURE__ */ c("h5", {
                children: (a = s == null ? void 0 : s.label) != null ? a : s == null ? void 0 : s.slug
              }),
              /* @__PURE__ */ c("div", {
                className: "grid",
                children: (i = s == null ? void 0 : s.schema) == null ? void 0 : i.map(
                  (e, r) => {
                    var d, o;
                    return (d = t.registeredWidgets) != null && d.has(e.componentName) ? /* @__PURE__ */ c("div", {
                      className: v("col-12 md:col-6", e.columnSpan > 0 && e.columnSpan < 12 ? `lg:col-${e.columnSpan}` : "lg:col-4"),
                      children: (o = t.registeredWidgets) == null ? void 0 : o.get(e.componentName)({
                        configs: m,
                        widget: e
                      })
                    }, `widget_${r}_${e.componentName}`) : /* @__PURE__ */ l("div", {
                      children: [
                        "Unknown Widget ",
                        e.componentName
                      ]
                    });
                  }
                )
              })
            ]
          })
        })
      })
    ]
  });
};
export {
  p as default
};
