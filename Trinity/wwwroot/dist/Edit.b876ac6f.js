import { R as v, u as _, a as k, r as x, l as g, _ as F, j as l, F as j, b as s, H as D, t as u, T as E, B as N } from "./main.8650d7d3.js";
import { t as R } from "./trinity_link.96e1fe55.js";
import { u as T } from "./trinity_resource_fields.9868bff4.js";
const B = () => {
  var m, d, c;
  const n = _(), { resource: a, errors: b, data: r } = k(), h = T(), i = x.exports.useMemo(() => {
    let t = {};
    for (const e of h)
      t[g(e.columnName.split("."))] = r[g(e.columnName.split("."))];
    return t;
  }, [n]), o = F(i), C = (t, e) => {
    i[t] = e;
  }, $ = () => {
    o.setData(i), o.put("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, y = /* @__PURE__ */ l("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ s(N, {
        label: "Update",
        className: "m-2 p-button-info",
        disabled: o.processing,
        loading: o.processing,
        onClick: () => $()
      }),
      /* @__PURE__ */ s(N, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => R(`/${n.prefix}/${a == null ? void 0 : a.name}`)
      })
    ]
  });
  return /* @__PURE__ */ l(j, {
    children: [
      /* @__PURE__ */ s(D, {
        title: `Edit - ${r[(d = (m = a == null ? void 0 : a.titleColumn) != null ? m : a == null ? void 0 : a.primaryKeyColumn) != null ? d : "id"]}`
      }),
      /* @__PURE__ */ l("div", {
        className: "card",
        children: [
          /* @__PURE__ */ l("h5", {
            className: "mb-6",
            children: [
              "Create ",
              a == null ? void 0 : a.pluralLabel
            ]
          }),
          /* @__PURE__ */ s("form", {
            className: "p-fluid formgrid grid col-12",
            children: (c = a == null ? void 0 : a.schema) == null ? void 0 : c.map(
              (t, e) => {
                var p, f;
                return (p = u.registeredComponents) != null && p.has(t.componentName) ? (f = u.registeredComponents) == null ? void 0 : f.get(t.componentName)({
                  key: `form_${e}_${t.componentName}`,
                  configs: n,
                  resource: a,
                  component: t,
                  record: r,
                  formData: i,
                  setFieldValue: C,
                  errors: b
                }) : /* @__PURE__ */ s("div", {}, `form_${e}_${t.componentName}`);
              }
            )
          }),
          /* @__PURE__ */ s("div", {
            className: "mt-3",
            children: /* @__PURE__ */ s(E, {
              end: y
            })
          })
        ]
      })
    ]
  });
}, S = v.memo(B);
export {
  S as default
};
