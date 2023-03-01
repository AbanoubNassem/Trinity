import { u as i, a as l, r as m, A as r, j as n, c } from "./main.c82dd26e.js";
const p = () => {
  const o = i(), { data: s } = l(), { widgets: a } = m.exports.useContext(r);
  return /* @__PURE__ */ n("div", {
    className: "grid",
    children: s == null ? void 0 : s.map(
      (e, t) => a != null && a.has(e.componentName) ? /* @__PURE__ */ n("div", {
        className: c("col-12 md:col-6", e.columnSpan > 0 && e.columnSpan < 12 ? `lg:col-${e.columnSpan}` : "lg:col-4"),
        children: a == null ? void 0 : a.get(e.componentName)({
          configs: o,
          widget: e
        })
      }, `widget_${t}_${e.componentName}`, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
        lineNumber: 17,
        columnNumber: 21
      }, globalThis) : /* @__PURE__ */ n("div", {
        children: [
          "Unknown Widget ",
          e.componentName
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, globalThis)
    )
  }, void 0, !1, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, globalThis);
};
export {
  p as default
};
