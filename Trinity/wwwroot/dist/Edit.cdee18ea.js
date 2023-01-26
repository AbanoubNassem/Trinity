import { R as y, u as h, a as x, r as u, A as v, l as c, K as D, j as i, F as E, H as R, B as b } from "./main.a6341423.js";
import { T as V, t as I } from "./trinity_link.f1e94ed9.js";
import { u as W } from "./trinity_resource_fields.a47aaf75.js";
const C = () => {
  var m;
  const n = h(), { resource: e, errors: d, data: N } = x(), f = W(), { components: s } = u.exports.useContext(v), r = u.exports.useMemo(() => {
    var t;
    let a = {};
    for (const o of f)
      a[c(o.columnName.split("."))] = (t = N[c(o.columnName.split("."))]) != null ? t : "";
    return a;
  }, [n]), l = D(r), T = (a, t) => {
    r[a] = t;
  }, g = () => {
    l.setDefaults(r), l.reset(), l.put("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, p = /* @__PURE__ */ i("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ i(b, {
        label: "Update",
        className: "m-2 p-button-info",
        disabled: l.processing,
        loading: l.processing,
        onClick: () => g()
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(b, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => I(`/${n.prefix}/${e == null ? void 0 : e.name}`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, globalThis);
  return /* @__PURE__ */ i(E, {
    children: [
      /* @__PURE__ */ i(R, {
        title: e == null ? void 0 : e.pluralLabel
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i("div", {
        className: "card",
        children: [
          /* @__PURE__ */ i("h5", {
            className: "mb-6",
            children: [
              "Create ",
              e == null ? void 0 : e.pluralLabel
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ i("form", {
            className: "p-fluid formgrid grid col-12",
            children: (m = e == null ? void 0 : e.schema) == null ? void 0 : m.map(
              (a, t) => s != null && s.has(a.componentName) ? s == null ? void 0 : s.get(a.componentName)({
                key: `form_${t}_${a.componentName}`,
                component: a,
                formData: r,
                setFieldValue: T,
                errors: d
              }) : /* @__PURE__ */ i("div", {}, `form_${t}_${a.componentName}`, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
                lineNumber: 87,
                columnNumber: 29
              }, globalThis)
            )
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ i("div", {
            className: "mt-3",
            children: /* @__PURE__ */ i(V, {
              right: p
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
              lineNumber: 93,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 73,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
    lineNumber: 70,
    columnNumber: 9
  }, globalThis);
}, F = y.memo(C);
export {
  F as default
};
