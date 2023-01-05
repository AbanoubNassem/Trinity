import { u as y, a as h, r as c, A as C, l as v, b as x, j as e, B as u, F as D, H as V } from "./main.b59fcee8.js";
import { u as R, t as d, T as I } from "./trinity_resource_fields.2a9ae9b3.js";
const A = () => {
  const n = y(), { resource: a, errors: t, data: o } = h(), f = R(), { components: s } = c.exports.useContext(C), [b, T] = c.exports.useState(!1), m = {};
  for (const i of f)
    m[v(i.columnName.split("."))] = void 0;
  const l = x();
  c.exports.useEffect(() => {
    o && d(`/${n == null ? void 0 : n.prefix}/${a == null ? void 0 : a.name}/edit/${o}`, !1, !1);
  }, [o]);
  const g = (i, r) => {
    m[i] = r;
  }, N = (i = !1) => {
    T(i), l.setDefaults(m), l.post("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, p = /* @__PURE__ */ e("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ e(u, {
        label: "Create",
        className: "m-2 p-button-primary",
        disabled: l.processing,
        loading: l.processing && !b,
        onClick: () => N(!1)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e(u, {
        label: "Create & create another",
        className: "m-2 p-button-help",
        disabled: l.processing,
        loading: l.processing && b,
        onClick: () => N(!0)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e(u, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => d(`/${n.prefix}/${a == null ? void 0 : a.name}`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, globalThis);
  return /* @__PURE__ */ e(D, {
    children: [
      /* @__PURE__ */ e(V, {
        title: a == null ? void 0 : a.pluralLabel
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 71,
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
            lineNumber: 74,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ e("form", {
            className: "p-fluid formgrid grid col-12",
            children: a == null ? void 0 : a.schema.map(
              (i, r) => s != null && s.has(i.componentName) ? s == null ? void 0 : s.get(i.componentName)({
                key: `form_${r}_${i.componentName}`,
                component: i,
                formData: m,
                setFieldValue: g,
                errors: t
              }) : /* @__PURE__ */ e("div", {}, `form_${r}_${i.componentName}`, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
                lineNumber: 87,
                columnNumber: 29
              }, globalThis)
            )
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ e("div", {
            className: "grid",
            children: /* @__PURE__ */ e("div", {
              className: "field",
              children: (t == null ? void 0 : t.value[""]) && /* @__PURE__ */ e("small", {
                className: "p-error",
                children: t == null ? void 0 : t.value[""].map((i, r) => /* @__PURE__ */ e("span", {
                  className: "flex",
                  children: i
                }, r, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
                  lineNumber: 97,
                  columnNumber: 37
                }, globalThis))
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
                lineNumber: 95,
                columnNumber: 29
              }, globalThis)
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
              lineNumber: 93,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ e("div", {
            className: "mt-3",
            children: /* @__PURE__ */ e(I, {
              right: p
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
              lineNumber: 110,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
    lineNumber: 70,
    columnNumber: 9
  }, globalThis);
};
export {
  A as default
};
