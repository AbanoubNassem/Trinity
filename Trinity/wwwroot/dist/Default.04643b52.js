import { u, a as b, j as i, F as N, H as d, t as m, c as f } from "./main.9e183331.js";
const T = () => {
  var s, l, t;
  const o = u(), { page: e } = b();
  return /* @__PURE__ */ i(N, {
    children: [
      /* @__PURE__ */ i(d, {
        title: (s = e == null ? void 0 : e.label) != null ? s : e == null ? void 0 : e.slug
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
        lineNumber: 15,
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
                children: (l = e == null ? void 0 : e.label) != null ? l : e == null ? void 0 : e.slug
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
                lineNumber: 19,
                columnNumber: 25
              }, globalThis),
              /* @__PURE__ */ i("div", {
                className: "grid",
                children: (t = e == null ? void 0 : e.schema) == null ? void 0 : t.map(
                  (a, c) => {
                    var r, n;
                    return (r = m.registeredWidgets) != null && r.has(a.componentName) ? /* @__PURE__ */ i("div", {
                      className: f("col-12 md:col-6", a.columnSpan > 0 && a.columnSpan < 12 ? `lg:col-${a.columnSpan}` : "lg:col-4"),
                      children: (n = m.registeredWidgets) == null ? void 0 : n.get(a.componentName)({
                        configs: o,
                        widget: a
                      })
                    }, `widget_${c}_${a.componentName}`, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
                      lineNumber: 23,
                      columnNumber: 37
                    }, globalThis) : /* @__PURE__ */ i("div", {
                      children: [
                        "Unknown Widget ",
                        a.componentName
                      ]
                    }, void 0, !0, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
                      lineNumber: 33,
                      columnNumber: 37
                    }, globalThis);
                  }
                )
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
                lineNumber: 20,
                columnNumber: 25
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
            lineNumber: 18,
            columnNumber: 21
          }, globalThis)
        }, void 0, !1, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
          lineNumber: 17,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, globalThis);
};
export {
  T as default
};
