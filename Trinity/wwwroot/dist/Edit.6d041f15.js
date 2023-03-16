import { R as v, u as D, a as E, r as x, l as b, _ as R, j as i, F as V, H as I, t as N, T as W, B as f } from "./main.9e183331.js";
import { t as C } from "./trinity_link.a2dc24ab.js";
import { u as $ } from "./trinity_resource_fields.dc63c683.js";
const _ = () => {
  var m, o, c;
  const r = D(), { resource: e, errors: p, data: n } = E(), g = $(), s = x.exports.useMemo(() => {
    let t = {};
    for (const a of g)
      t[b(a.columnName.split("."))] = n[b(a.columnName.split("."))];
    return t;
  }, [r]), l = R(s), T = (t, a) => {
    s[t] = a;
  }, y = () => {
    l.setData(s), l.put("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, h = /* @__PURE__ */ i("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ i(f, {
        label: "Update",
        className: "m-2 p-button-info",
        disabled: l.processing,
        loading: l.processing,
        onClick: () => y()
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(f, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => C(`/${r.prefix}/${e == null ? void 0 : e.name}`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, globalThis);
  return /* @__PURE__ */ i(V, {
    children: [
      /* @__PURE__ */ i(I, {
        title: `Edit - ${n[(o = (m = e == null ? void 0 : e.titleColumn) != null ? m : e == null ? void 0 : e.primaryKeyColumn) != null ? o : "id"]}`
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 59,
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
            lineNumber: 62,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ i("form", {
            className: "p-fluid formgrid grid col-12",
            children: (c = e == null ? void 0 : e.schema) == null ? void 0 : c.map(
              (t, a) => {
                var u, d;
                return (u = N.registeredComponents) != null && u.has(t.componentName) ? (d = N.registeredComponents) == null ? void 0 : d.get(t.componentName)({
                  key: `form_${a}_${t.componentName}`,
                  configs: r,
                  resource: e,
                  component: t,
                  record: n,
                  formData: s,
                  setFieldValue: T,
                  errors: p
                }) : /* @__PURE__ */ i("div", {}, `form_${a}_${t.componentName}`, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
                  lineNumber: 78,
                  columnNumber: 29
                }, globalThis);
              }
            )
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ i("div", {
            className: "mt-3",
            children: /* @__PURE__ */ i(W, {
              end: h
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
              lineNumber: 84,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
    lineNumber: 58,
    columnNumber: 9
  }, globalThis);
}, B = v.memo(_);
export {
  B as default
};
