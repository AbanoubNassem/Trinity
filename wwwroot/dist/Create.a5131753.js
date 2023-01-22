import { R as h, u as C, a as x, r as m, A as v, l as D, b as R, d as V, j as e, B as b, F as I, H as W } from "./main.a8bc792d.js";
import { t as f, T as $ } from "./trinity_link.27bde703.js";
import { u as A } from "./trinity_resource_fields.2e4b57de.js";
const k = () => {
  var d;
  const r = C(), { resource: a, errors: s, data: o } = x(), T = A(), { components: l } = m.exports.useContext(v), [c, g] = m.exports.useState(!1);
  let u = m.exports.useMemo(() => {
    let i = {};
    for (const t of T)
      i[D(t.columnName.split("."))] = void 0;
    return i;
  }, [r]);
  const n = R(u);
  m.exports.useEffect(() => {
    o && (c ? V.Inertia.get("") : f(`/${r == null ? void 0 : r.prefix}/${a == null ? void 0 : a.name}/edit/${o}`, !1, !1));
  }, [o]);
  const p = (i, t) => {
    u[i] = t;
  }, N = (i = !1) => {
    g(i), n.post("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, y = /* @__PURE__ */ e("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ e(b, {
        label: "Create",
        className: "m-2 p-button-primary",
        disabled: n.processing,
        loading: n.processing && !c,
        onClick: () => N(!1)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e(b, {
        label: "Create & create another",
        className: "m-2 p-button-help",
        disabled: n.processing,
        loading: n.processing && c,
        onClick: () => N(!0)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e(b, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => f(`/${r.prefix}/${a == null ? void 0 : a.name}`)
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
  return /* @__PURE__ */ e(I, {
    children: [
      /* @__PURE__ */ e(W, {
        title: a == null ? void 0 : a.pluralLabel
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e("div", {
        className: "card",
        children: [
          /* @__PURE__ */ e("h5", {
            className: "mb-6",
            children: [
              "Create ",
              a == null ? void 0 : a.pluralLabel
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ e("form", {
            className: "p-fluid formgrid grid col-12",
            children: (d = a == null ? void 0 : a.schema) == null ? void 0 : d.map(
              (i, t) => l != null && l.has(i.componentName) ? l == null ? void 0 : l.get(i.componentName)({
                key: `form_${t}_${i.componentName}`,
                component: i,
                formData: u,
                setFieldValue: p,
                errors: s
              }) : /* @__PURE__ */ e("div", {}, `form_${t}_${i.componentName}`, !1, {
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
          /* @__PURE__ */ e("div", {
            className: "grid",
            children: /* @__PURE__ */ e("div", {
              className: "field",
              children: (s == null ? void 0 : s.value[""]) && /* @__PURE__ */ e("small", {
                className: "p-error",
                children: s == null ? void 0 : s.value[""].map((i, t) => /* @__PURE__ */ e("span", {
                  className: "flex",
                  children: i
                }, t, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
                  lineNumber: 105,
                  columnNumber: 37
                }, globalThis))
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
                lineNumber: 103,
                columnNumber: 29
              }, globalThis)
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
              lineNumber: 101,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ e("div", {
            className: "mt-3",
            children: /* @__PURE__ */ e($, {
              right: y
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
              lineNumber: 118,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Create.tsx",
            lineNumber: 117,
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
