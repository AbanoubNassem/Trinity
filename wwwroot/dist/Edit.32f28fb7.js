import { R as p, u as y, a as h, r as c, A as v, l as u, b as x, j as e, B as b, F as D, H as E } from "./main.39d08f6f.js";
import { u as R, t as V, T as I } from "./trinity_resource_fields.97868387.js";
const W = () => {
  const m = y(), { resource: i, errors: s, data: d } = h(), N = R(), { components: l } = c.exports.useContext(v), n = c.exports.useMemo(() => {
    var t;
    let a = {};
    for (const o of N)
      a[u(o.columnName.split("."))] = (t = d[u(o.columnName.split("."))]) != null ? t : "";
    return a;
  }, [m]), r = x(n), T = (a, t) => {
    n[a] = t;
  }, f = () => {
    r.setDefaults(n), r.reset(), console.log(r.data), r.put("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, g = /* @__PURE__ */ e("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ e(b, {
        label: "Update",
        className: "m-2 p-button-info",
        disabled: r.processing,
        loading: r.processing,
        onClick: () => f()
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e(b, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => V(`/${m.prefix}/${i == null ? void 0 : i.name}`)
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
  return console.log("render"), /* @__PURE__ */ e(D, {
    children: [
      /* @__PURE__ */ e(E, {
        title: i == null ? void 0 : i.pluralLabel
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
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
              i == null ? void 0 : i.pluralLabel
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ e("form", {
            className: "p-fluid formgrid grid col-12",
            children: i == null ? void 0 : i.schema.map(
              (a, t) => l != null && l.has(a.componentName) ? l == null ? void 0 : l.get(a.componentName)({
                key: `form_${t}_${a.componentName}`,
                component: a,
                formData: n,
                setFieldValue: T,
                errors: s
              }) : /* @__PURE__ */ e("div", {}, `form_${t}_${a.componentName}`, !1, {
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
          /* @__PURE__ */ e("div", {
            className: "grid",
            children: /* @__PURE__ */ e("div", {
              className: "field",
              children: (s == null ? void 0 : s.value[""]) && /* @__PURE__ */ e("small", {
                className: "p-error",
                children: s == null ? void 0 : s.value[""].map((a, t) => /* @__PURE__ */ e("span", {
                  className: "flex",
                  children: a
                }, t, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
                  lineNumber: 97,
                  columnNumber: 37
                }, globalThis))
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
                lineNumber: 95,
                columnNumber: 29
              }, globalThis)
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
              lineNumber: 93,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ e("div", {
            className: "mt-3",
            children: /* @__PURE__ */ e(I, {
              right: g
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
              lineNumber: 110,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
            lineNumber: 109,
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
}, F = p.memo(W);
export {
  F as default
};
