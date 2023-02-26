import { u as c, r as m, A as t, b as e, e as l, j as r } from "./main.8e9066d4.js";
const d = () => {
  const n = c(), { widgets: o } = m.exports.useContext(t);
  return /* @__PURE__ */ e("div", {
    className: "grid",
    children: n.dashboardPage.schema.map(
      (a, s) => o != null && o.has(a.componentName) ? /* @__PURE__ */ e("div", {
        className: l("col-12 md:col-6", a.columnSpan > 0 && a.columnSpan < 12 ? `lg:col-${a.columnSpan}` : "lg:col-4"),
        children: o == null ? void 0 : o.get(a.componentName)({
          configs: n,
          widget: a
        })
      }, `widget_${s}_${a.componentName}`) : /* @__PURE__ */ r("div", {
        children: [
          "Unknown Widget ",
          a.componentName
        ]
      })
    )
  });
};
export {
  d as default
};
