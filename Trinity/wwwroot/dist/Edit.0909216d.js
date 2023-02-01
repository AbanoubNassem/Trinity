import { R as p, u as y, a as h, r as c, A as x, l as u, K as v, j as i, F as D, H as E, B as b } from "./main.74d2364d.js";
import { T as R, t as V } from "./trinity_link.6e8f244f.js";
import { u as I } from "./trinity_resource_fields.c6ff4e9f.js";
const W = () => {
  var o;
  const n = y(), { resource: e, errors: d, data: m } = h(), N = I(), { components: s } = c.exports.useContext(x), l = c.exports.useMemo(() => {
    let a = {};
    for (const t of N)
      a[u(t.columnName.split("."))] = m[u(t.columnName.split("."))];
    return a;
  }, [n]), r = v(l), f = (a, t) => {
    l[a] = t;
  }, T = () => {
    r.setData(l), r.put("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, g = /* @__PURE__ */ i("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ i(b, {
        label: "Update",
        className: "m-2 p-button-info",
        disabled: r.processing,
        loading: r.processing,
        onClick: () => T()
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(b, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => V(`/${n.prefix}/${e == null ? void 0 : e.name}`)
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
  return /* @__PURE__ */ i(D, {
    children: [
      /* @__PURE__ */ i(E, {
        title: e == null ? void 0 : e.pluralLabel
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
            children: (o = e == null ? void 0 : e.schema) == null ? void 0 : o.map(
              (a, t) => s != null && s.has(a.componentName) ? s == null ? void 0 : s.get(a.componentName)({
                key: `form_${t}_${a.componentName}`,
                configs: n,
                resource: e,
                component: a,
                record: m,
                formData: l,
                setFieldValue: f,
                errors: d
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
            children: /* @__PURE__ */ i(R, {
              end: g
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
}, k = p.memo(W);
export {
  k as default
};
