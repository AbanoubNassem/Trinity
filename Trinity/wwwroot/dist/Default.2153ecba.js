import { u as h, b as N, a as g, j as t, F as v, c, H as f, t as m, d as p } from "./main.eb17ea8a.js";
const j = () => {
  var a, n, i;
  const r = h(), { page: s } = N(), l = g();
  return /* @__PURE__ */ t(v, {
    children: [
      /* @__PURE__ */ c(f, {
        title: (a = s == null ? void 0 : s.label) != null ? a : s == null ? void 0 : s.slug
      }),
      /* @__PURE__ */ c("div", {
        className: "grid",
        children: /* @__PURE__ */ c("div", {
          className: "col-12",
          children: /* @__PURE__ */ t("div", {
            className: "card",
            children: [
              /* @__PURE__ */ c("h5", {
                children: (n = s == null ? void 0 : s.label) != null ? n : s == null ? void 0 : s.slug
              }),
              /* @__PURE__ */ c("div", {
                className: "grid",
                children: (i = s == null ? void 0 : s.schema) == null ? void 0 : i.map(
                  (e, u) => {
                    var o, d;
                    return (o = m.registeredWidgets) != null && o.has(e.componentName) ? /* @__PURE__ */ c("div", {
                      className: p("col-12 md:col-6", e.columnSpan > 0 && e.columnSpan < 12 ? `lg:col-${e.columnSpan}` : "lg:col-4"),
                      children: (d = m.registeredWidgets) == null ? void 0 : d.get(e.componentName)({
                        configs: r,
                        widget: e,
                        localize: l
                      })
                    }, `widget_${u}_${e.componentName}`) : /* @__PURE__ */ c("div", {
                      children: l("unknown_widget", e.componentName)
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
  j as default
};
