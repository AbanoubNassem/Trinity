import { u, a as N, j as e, F as b, H as g, t as m, c as d } from "./main.f043a176.js";
const T = () => {
  var s, t, l;
  const o = u(), i = N().page;
  return /* @__PURE__ */ e(b, {
    children: [
      /* @__PURE__ */ e(g, {
        title: (s = i.label) != null ? s : i.pageName
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e("div", {
        className: "grid",
        children: /* @__PURE__ */ e("div", {
          className: "col-12",
          children: /* @__PURE__ */ e("div", {
            className: "card",
            children: [
              /* @__PURE__ */ e("h5", {
                children: (t = i.label) != null ? t : i.pageName
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
                lineNumber: 20,
                columnNumber: 25
              }, globalThis),
              /* @__PURE__ */ e("div", {
                className: "grid",
                children: (l = i.schema) == null ? void 0 : l.map(
                  (a, c) => {
                    var r, n;
                    return (r = m.registeredWidgets) != null && r.has(a.componentName) ? /* @__PURE__ */ e("div", {
                      className: d("col-12 md:col-6", a.columnSpan > 0 && a.columnSpan < 12 ? `lg:col-${a.columnSpan}` : "lg:col-4"),
                      children: (n = m.registeredWidgets) == null ? void 0 : n.get(a.componentName)({
                        configs: o,
                        widget: a
                      })
                    }, `widget_${c}_${a.componentName}`, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
                      lineNumber: 24,
                      columnNumber: 37
                    }, globalThis) : /* @__PURE__ */ e("div", {
                      children: [
                        "Unknown Widget ",
                        a.componentName
                      ]
                    }, void 0, !0, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
                      lineNumber: 34,
                      columnNumber: 37
                    }, globalThis);
                  }
                )
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
                lineNumber: 21,
                columnNumber: 25
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
            lineNumber: 19,
            columnNumber: 21
          }, globalThis)
        }, void 0, !1, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
          lineNumber: 18,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Default.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, globalThis);
};
export {
  T as default
};
