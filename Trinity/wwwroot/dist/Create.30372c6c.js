import { R as h, u as C, a as x, r as m, A as v, l as D, _ as R, g as V, j as t, F as I, H as W, T as $, B as u } from "./main.c82dd26e.js";
import { t as N } from "./trinity_link.095b7970.js";
import { u as A } from "./trinity_resource_fields.b365a03e.js";
const _ = () => {
  var d;
  const i = C(), { resource: e, errors: f, data: o } = x(), g = A(), { components: s } = m.exports.useContext(v), [c, p] = m.exports.useState(!1);
  let n = m.exports.useMemo(() => {
    let a = {};
    for (const l of g)
      a[D(l.columnName.split("."))] = void 0;
    return a;
  }, [i]);
  const r = R(n);
  m.exports.useEffect(() => {
    o && (c ? V.get("") : N(`/${i == null ? void 0 : i.prefix}/${e == null ? void 0 : e.name}/edit/${o}`, !1, !1));
  }, [o]);
  const T = (a, l) => {
    n[a] = l;
  }, b = (a = !1) => {
    r.setData(n), p(a), r.post("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, y = /* @__PURE__ */ t("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ t(u, {
        label: "Create",
        className: "m-2 p-button-primary",
        disabled: r.processing,
        loading: r.processing && !c,
        onClick: () => b(!1)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(u, {
        label: "Create & create another",
        className: "m-2 p-button-help",
        disabled: r.processing,
        loading: r.processing && c,
        onClick: () => b(!0)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(u, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => N(`/${i.prefix}/${e == null ? void 0 : e.name}`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
    lineNumber: 55,
    columnNumber: 9
  }, globalThis);
  return /* @__PURE__ */ t(I, {
    children: [
      /* @__PURE__ */ t(W, {
        title: `Create - ${e == null ? void 0 : e.pluralLabel}`
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 80,
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
            lineNumber: 83,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ t("form", {
            className: "p-fluid formgrid grid col-12",
            children: (d = e == null ? void 0 : e.schema) == null ? void 0 : d.map(
              (a, l) => s != null && s.has(a.componentName) ? s == null ? void 0 : s.get(a.componentName)({
                key: `form_${l}_${a.componentName}`,
                configs: i,
                resource: e,
                component: a,
                record: {},
                formData: n,
                setFieldValue: T,
                errors: f
              }) : /* @__PURE__ */ t("div", {}, `form_${l}_${a.componentName}`, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
                lineNumber: 99,
                columnNumber: 29
              }, globalThis)
            )
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ t("div", {
            className: "mt-3",
            children: /* @__PURE__ */ t($, {
              end: y
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
              lineNumber: 105,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
    lineNumber: 79,
    columnNumber: 9
  }, globalThis);
}, S = h.memo(_);
export {
  S as default
};
