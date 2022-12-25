import { u as f, a as g, r as u, A as p, l as y, b as h, j as e, B as n, F as C, H as v } from "./main.c6c28297.js";
import { u as x, t as D, T as R } from "./trinity_resource_fields.01609cb6.js";
const W = () => {
  const b = f(), { resource: a, errors: s } = g(), N = x(), { components: t } = u.exports.useContext(p), [m, d] = u.exports.useState(!1), o = {};
  for (const i of N)
    o[y(i.columnName.split("."))] = void 0;
  const l = h(a.name, o), c = (i = !1) => {
    d(i), l.post("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, T = /* @__PURE__ */ e("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ e(n, {
        label: "Create",
        className: "m-2 p-button-primary",
        disabled: l.processing,
        loading: l.processing && !m,
        onClick: () => c(!1)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e(n, {
        label: "Create & create another",
        className: "m-2 p-button-help",
        disabled: l.processing,
        loading: l.processing && m,
        onClick: () => c(!0)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e(n, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => D(`/${b.prefix}/${a == null ? void 0 : a.name}`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, globalThis);
  return /* @__PURE__ */ e(C, {
    children: [
      /* @__PURE__ */ e(v, {
        title: a == null ? void 0 : a.pluralLabel
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e("div", {
        className: "card",
        children: [
          /* @__PURE__ */ e("h5", {
            className: "mb-6",
            children: [
              "Create ",
              a == null ? void 0 : a.pluralLabel
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ e("form", {
            className: "p-fluid formgrid grid col-12",
            children: a == null ? void 0 : a.schema.map(
              (i, r) => t != null && t.has(i.componentName) ? t == null ? void 0 : t.get(i.componentName)({
                key: `form_${r}_${i.componentName}`,
                component: i,
                form: l,
                errors: s
              }) : /* @__PURE__ */ e("div", {}, `form_${r}_${i.componentName}`, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
                lineNumber: 76,
                columnNumber: 29
              }, globalThis)
            )
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ e("div", {
            className: "grid",
            children: /* @__PURE__ */ e("div", {
              className: "field",
              children: (s == null ? void 0 : s.value[""]) && /* @__PURE__ */ e("small", {
                className: "p-error",
                children: s == null ? void 0 : s.value[""].map((i, r) => /* @__PURE__ */ e("span", {
                  className: "flex",
                  children: i
                }, r, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
                  lineNumber: 86,
                  columnNumber: 37
                }, globalThis))
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
                lineNumber: 84,
                columnNumber: 29
              }, globalThis)
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
              lineNumber: 82,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ e("div", {
            className: "mt-3",
            children: /* @__PURE__ */ e(R, {
              right: T
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
              lineNumber: 99,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, globalThis);
};
export {
  W as default
};
