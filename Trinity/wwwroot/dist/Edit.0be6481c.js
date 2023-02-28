import { R as h, u as x, a as v, r as d, A as D, l as b, _ as E, j as i, F as R, H as V, T as I, B as N } from "./main.d4a481b6.js";
import { t as W } from "./trinity_link.9f0bf00b.js";
import { u as C } from "./trinity_resource_fields.2e8cc823.js";
const $ = () => {
  var o, u, c;
  const n = x(), { resource: e, errors: f, data: m } = v(), T = C(), { components: s } = d.exports.useContext(D), l = d.exports.useMemo(() => {
    let a = {};
    for (const t of T)
      a[b(t.columnName.split("."))] = m[b(t.columnName.split("."))];
    return a;
  }, [n]), r = E(l), g = (a, t) => {
    l[a] = t;
  }, p = () => {
    r.setData(l), r.put("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, y = /* @__PURE__ */ i("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ i(N, {
        label: "Update",
        className: "m-2 p-button-info",
        disabled: r.processing,
        loading: r.processing,
        onClick: () => p()
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(N, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => W(`/${n.prefix}/${e == null ? void 0 : e.name}`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, globalThis);
  return /* @__PURE__ */ i(R, {
    children: [
      /* @__PURE__ */ i(V, {
        title: `Edit - ${m[(u = (o = e == null ? void 0 : e.titleColumn) != null ? o : e == null ? void 0 : e.primaryKeyColumn) != null ? u : "id"]}`
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 60,
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
            lineNumber: 63,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ i("form", {
            className: "p-fluid formgrid grid col-12",
            children: (c = e == null ? void 0 : e.schema) == null ? void 0 : c.map(
              (a, t) => s != null && s.has(a.componentName) ? s == null ? void 0 : s.get(a.componentName)({
                key: `form_${t}_${a.componentName}`,
                configs: n,
                resource: e,
                component: a,
                record: m,
                formData: l,
                setFieldValue: g,
                errors: f
              }) : /* @__PURE__ */ i("div", {}, `form_${t}_${a.componentName}`, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
                lineNumber: 79,
                columnNumber: 29
              }, globalThis)
            )
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ i("div", {
            className: "mt-3",
            children: /* @__PURE__ */ i(I, {
              end: y
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
              lineNumber: 85,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 84,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
    lineNumber: 59,
    columnNumber: 9
  }, globalThis);
}, j = h.memo($);
export {
  j as default
};
