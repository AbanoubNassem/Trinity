import { R as h, u as C, a as x, r as n, A as v, l as D, K as R, g as V, j as t, F as I, H as W, B as u } from "./main.a6341423.js";
import { t as d, T as $ } from "./trinity_link.f1e94ed9.js";
import { u as A } from "./trinity_resource_fields.a47aaf75.js";
const k = () => {
  var N;
  const r = C(), { resource: e, errors: f, data: m } = x(), g = A(), { components: i } = n.exports.useContext(v), [o, p] = n.exports.useState(!1);
  let c = n.exports.useMemo(() => {
    let a = {};
    for (const s of g)
      a[D(s.columnName.split("."))] = void 0;
    return a;
  }, [r]);
  const l = R(c);
  n.exports.useEffect(() => {
    m && (o ? V.get("") : d(`/${r == null ? void 0 : r.prefix}/${e == null ? void 0 : e.name}/edit/${m}`, !1, !1));
  }, [m]);
  const T = (a, s) => {
    c[a] = s;
  }, b = (a = !1) => {
    p(a), l.post("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, y = /* @__PURE__ */ t("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ t(u, {
        label: "Create",
        className: "m-2 p-button-primary",
        disabled: l.processing,
        loading: l.processing && !o,
        onClick: () => b(!1)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(u, {
        label: "Create & create another",
        className: "m-2 p-button-help",
        disabled: l.processing,
        loading: l.processing && o,
        onClick: () => b(!0)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(u, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => d(`/${r.prefix}/${e == null ? void 0 : e.name}`)
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
  return /* @__PURE__ */ t(I, {
    children: [
      /* @__PURE__ */ t(W, {
        title: e == null ? void 0 : e.pluralLabel
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
            children: (N = e == null ? void 0 : e.schema) == null ? void 0 : N.map(
              (a, s) => i != null && i.has(a.componentName) ? i == null ? void 0 : i.get(a.componentName)({
                key: `form_${s}_${a.componentName}`,
                component: a,
                formData: c,
                setFieldValue: T,
                errors: f
              }) : /* @__PURE__ */ t("div", {}, `form_${s}_${a.componentName}`, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
                lineNumber: 95,
                columnNumber: 29
              }, globalThis)
            )
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ t("div", {
            className: "mt-3",
            children: /* @__PURE__ */ t($, {
              right: y
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
              lineNumber: 101,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 100,
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
}, S = h.memo(k);
export {
  S as default
};
