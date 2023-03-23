import { R as D, u as x, a as E, b as R, r as V, l as N, _ as I, j as i, B as f, F as W, H as $, t as p, T as C } from "./main.97f0ecd7.js";
import { t as _ } from "./trinity_link.6f1b763d.js";
import { u as k } from "./trinity_resource_fields.3390302c.js";
const F = () => {
  var o, c, u;
  const n = x(), s = E(), { resource: e, errors: g, data: m } = R(), T = k(), l = V.exports.useMemo(() => {
    let t = {};
    for (const a of T)
      t[N(a.columnName.split("."))] = m[N(a.columnName.split("."))];
    return t;
  }, [n]), r = I(l), y = (t, a) => {
    l[t] = a;
  }, h = () => {
    r.setData(l), r.put("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, v = /* @__PURE__ */ i("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ i(f, {
        label: s("update"),
        className: "m-2 p-button-info",
        disabled: r.processing,
        loading: r.processing,
        onClick: () => h()
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i(f, {
        label: s("cancel"),
        className: "m-2 p-button-secondary",
        onClick: () => _(`/${n.prefix}/${e == null ? void 0 : e.name}`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
    lineNumber: 43,
    columnNumber: 9
  }, globalThis);
  return /* @__PURE__ */ i(W, {
    children: [
      /* @__PURE__ */ i($, {
        title: `${s("edit")} - ${m[(c = (o = e == null ? void 0 : e.titleColumn) != null ? o : e == null ? void 0 : e.primaryKeyColumn) != null ? c : "id"]}`
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ i("div", {
        className: "card",
        children: [
          /* @__PURE__ */ i("h5", {
            className: "mb-6",
            children: [
              s("edit"),
              " ",
              e == null ? void 0 : e.pluralLabel
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ i("form", {
            className: "p-fluid formgrid grid col-12",
            children: (u = e == null ? void 0 : e.schema) == null ? void 0 : u.map(
              (t, a) => {
                var d, b;
                return (d = p.registeredComponents) != null && d.has(t.componentName) ? (b = p.registeredComponents) == null ? void 0 : b.get(t.componentName)({
                  key: `form_${a}_${t.componentName}`,
                  configs: n,
                  resource: e,
                  component: t,
                  record: m,
                  formData: l,
                  setFieldValue: y,
                  errors: g,
                  localize: s
                }) : /* @__PURE__ */ i("div", {}, `form_${a}_${t.componentName}`, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
                  lineNumber: 83,
                  columnNumber: 29
                }, globalThis);
              }
            )
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ i("div", {
            className: "mt-3",
            children: /* @__PURE__ */ i(C, {
              end: v
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
              lineNumber: 89,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 88,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
    lineNumber: 60,
    columnNumber: 9
  }, globalThis);
}, B = D.memo(F);
export {
  B as default
};
