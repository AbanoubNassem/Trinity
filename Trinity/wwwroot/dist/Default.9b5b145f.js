import { u as b, b as N, a as d, j as i, F as f, H as g, t as o, c as T } from "./main.97f0ecd7.js";
const D = () => {
  var l, t, n;
  const c = b(), { page: e } = N(), s = d();
  return /* @__PURE__ */ i(f, {
    children: [
      /* @__PURE__ */ i(g, {
        title: (l = e == null ? void 0 : e.label) != null ? l : e == null ? void 0 : e.slug
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i("div", {
        className: "grid",
        children: /* @__PURE__ */ i("div", {
          className: "col-12",
          children: /* @__PURE__ */ i("div", {
            className: "card",
            children: [
              /* @__PURE__ */ i("h5", {
                children: (t = e == null ? void 0 : e.label) != null ? t : e == null ? void 0 : e.slug
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
                lineNumber: 21,
                columnNumber: 25
              }, globalThis),
              /* @__PURE__ */ i("div", {
                className: "grid",
                children: (n = e == null ? void 0 : e.schema) == null ? void 0 : n.map(
                  (a, u) => {
                    var r, m;
                    return (r = o.registeredWidgets) != null && r.has(a.componentName) ? /* @__PURE__ */ i("div", {
                      className: T("col-12 md:col-6", a.columnSpan > 0 && a.columnSpan < 12 ? `lg:col-${a.columnSpan}` : "lg:col-4"),
                      children: (m = o.registeredWidgets) == null ? void 0 : m.get(a.componentName)({
                        configs: c,
                        widget: a,
                        localize: s
                      })
                    }, `widget_${u}_${a.componentName}`, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
                      lineNumber: 25,
                      columnNumber: 37
                    }, globalThis) : /* @__PURE__ */ i("div", {
                      children: s("unknown_widget", a.componentName)
                    }, void 0, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
                      lineNumber: 36,
                      columnNumber: 37
                    }, globalThis);
                  }
                )
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
                lineNumber: 22,
                columnNumber: 25
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
            lineNumber: 20,
            columnNumber: 21
          }, globalThis)
        }, void 0, !1, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
          lineNumber: 19,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, globalThis);
};
export {
  D as default
};
