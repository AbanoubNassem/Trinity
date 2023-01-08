import { R as y, u as h, a as v, r as u, A as x, l as b, b as D, j as e, B as d, F as E, H as R } from "./main.3b1fb9f4.js";
import { t as V, T as I } from "./trinity_link.6926352f.js";
import { u as W } from "./trinity_resource_fields.6a46c3ad.js";
const C = () => {
  var o;
  const n = h(), { resource: i, errors: s, data: N } = v(), f = W(), { components: l } = u.exports.useContext(x), m = u.exports.useMemo(() => {
    var t;
    let a = {};
    for (const c of f)
      a[b(c.columnName.split("."))] = (t = N[b(c.columnName.split("."))]) != null ? t : "";
    return a;
  }, [n]), r = D(m), T = (a, t) => {
    m[a] = t;
  }, g = () => {
    r.setDefaults(m), r.reset(), r.put("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, p = /* @__PURE__ */ e("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ e(d, {
        label: "Update",
        className: "m-2 p-button-info",
        disabled: r.processing,
        loading: r.processing,
        onClick: () => g()
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Edit.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e(d, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => V(`/${n.prefix}/${i == null ? void 0 : i.name}`)
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
  return /* @__PURE__ */ e(E, {
    children: [
      /* @__PURE__ */ e(R, {
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
            children: (o = i == null ? void 0 : i.schema) == null ? void 0 : o.map(
              (a, t) => l != null && l.has(a.componentName) ? l == null ? void 0 : l.get(a.componentName)({
                key: `form_${t}_${a.componentName}`,
                component: a,
                formData: m,
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
              right: p
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
}, k = y.memo(C);
export {
  k as default
};
