import { R as x, u as D, a as R, b as V, r as c, l as I, _ as W, g as $, j as t, B as u, F as _, H as k, t as p, T as A } from "./main.9dd607f9.js";
import { t as g } from "./trinity_link.1c09455f.js";
import { u as F } from "./trinity_resource_fields.68405bff.js";
const L = () => {
  var d;
  const s = D(), i = R(), { resource: e, errors: T, data: o } = V(), y = F(), [m, h] = c.exports.useState(!1);
  let n = c.exports.useMemo(() => {
    let a = {};
    for (const l of y)
      a[I(l.columnName.split("."))] = void 0;
    return a;
  }, [s]);
  const r = W(n);
  c.exports.useEffect(() => {
    o && (m ? $.get("") : g(`/${s == null ? void 0 : s.prefix}/${e == null ? void 0 : e.name}/edit/${o}`, !1, !1));
  }, [o]);
  const C = (a, l) => {
    n[a] = l;
  }, b = (a = !1) => {
    r.setData(n), h(a), r.post("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, v = /* @__PURE__ */ t("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ t(u, {
        label: i("create"),
        className: "m-2 p-button-primary",
        disabled: r.processing,
        loading: r.processing && !m,
        onClick: () => b(!1)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(u, {
        label: i("create_and_another"),
        className: "m-2 p-button-help",
        disabled: r.processing,
        loading: r.processing && m,
        onClick: () => b(!0)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(u, {
        label: i("cancel"),
        className: "m-2 p-button-secondary",
        onClick: () => g(`/${s.prefix}/${e == null ? void 0 : e.name}`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, globalThis);
  return /* @__PURE__ */ t(_, {
    children: [
      /* @__PURE__ */ t(k, {
        title: `${i("create")} - ${e == null ? void 0 : e.pluralLabel}`
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t("div", {
        className: "card",
        children: [
          /* @__PURE__ */ t("h5", {
            className: "mb-6",
            children: [
              i("create"),
              " ",
              e == null ? void 0 : e.pluralLabel
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ t("form", {
            className: "p-fluid formgrid grid col-12",
            children: (d = e == null ? void 0 : e.schema) == null ? void 0 : d.map(
              (a, l) => {
                var N, f;
                return (N = p.registeredComponents) != null && N.has(a.componentName) ? (f = p.registeredComponents) == null ? void 0 : f.get(a.componentName)({
                  key: `form_${l}_${a.componentName}`,
                  configs: s,
                  resource: e,
                  component: a,
                  record: {},
                  formData: n,
                  setFieldValue: C,
                  errors: T,
                  localize: i
                }) : /* @__PURE__ */ t("div", {}, `form_${l}_${a.componentName}`, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
                  lineNumber: 103,
                  columnNumber: 29
                }, globalThis);
              }
            )
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ t("div", {
            className: "mt-3",
            children: /* @__PURE__ */ t(A, {
              end: v
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
              lineNumber: 109,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 108,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
    lineNumber: 80,
    columnNumber: 9
  }, globalThis);
}, B = x.memo(L);
export {
  B as default
};
