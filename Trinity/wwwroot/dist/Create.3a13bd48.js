import { R as v, u as x, a as D, r as o, l as R, _ as V, g as I, j as t, F as W, H as $, t as f, T as _, B as c } from "./main.9e183331.js";
import { t as p } from "./trinity_link.a2dc24ab.js";
import { u as k } from "./trinity_resource_fields.dc63c683.js";
const A = () => {
  var b;
  const i = x(), { resource: e, errors: g, data: n } = D(), T = k(), [m, y] = o.exports.useState(!1);
  let l = o.exports.useMemo(() => {
    let a = {};
    for (const r of T)
      a[R(r.columnName.split("."))] = void 0;
    return a;
  }, [i]);
  const s = V(l);
  o.exports.useEffect(() => {
    n && (m ? I.get("") : p(`/${i == null ? void 0 : i.prefix}/${e == null ? void 0 : e.name}/edit/${n}`, !1, !1));
  }, [n]);
  const h = (a, r) => {
    l[a] = r;
  }, u = (a = !1) => {
    s.setData(l), y(a), s.post("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, C = /* @__PURE__ */ t("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ t(c, {
        label: "Create",
        className: "m-2 p-button-primary",
        disabled: s.processing,
        loading: s.processing && !m,
        onClick: () => u(!1)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(c, {
        label: "Create & create another",
        className: "m-2 p-button-help",
        disabled: s.processing,
        loading: s.processing && m,
        onClick: () => u(!0)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(c, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => p(`/${i.prefix}/${e == null ? void 0 : e.name}`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
    lineNumber: 54,
    columnNumber: 9
  }, globalThis);
  return /* @__PURE__ */ t(W, {
    children: [
      /* @__PURE__ */ t($, {
        title: `Create - ${e == null ? void 0 : e.pluralLabel}`
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t("div", {
        className: "card",
        children: [
          /* @__PURE__ */ t("h5", {
            className: "mb-6",
            children: [
              "Create ",
              e == null ? void 0 : e.pluralLabel
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ t("form", {
            className: "p-fluid formgrid grid col-12",
            children: (b = e == null ? void 0 : e.schema) == null ? void 0 : b.map(
              (a, r) => {
                var d, N;
                return (d = f.registeredComponents) != null && d.has(a.componentName) ? (N = f.registeredComponents) == null ? void 0 : N.get(a.componentName)({
                  key: `form_${r}_${a.componentName}`,
                  configs: i,
                  resource: e,
                  component: a,
                  record: {},
                  formData: l,
                  setFieldValue: h,
                  errors: g
                }) : /* @__PURE__ */ t("div", {}, `form_${r}_${a.componentName}`, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
                  lineNumber: 98,
                  columnNumber: 29
                }, globalThis);
              }
            )
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ t("div", {
            className: "mt-3",
            children: /* @__PURE__ */ t(_, {
              end: C
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
              lineNumber: 104,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
    lineNumber: 78,
    columnNumber: 9
  }, globalThis);
}, j = v.memo(A);
export {
  j as default
};
