import { R as _, u as k, a as x, b as F, r as j, l as g, _ as D, j as n, c as s, B as N, F as L, H as R, t as b, T } from "./main.480fd86f.js";
import { t as z } from "./trinity_link.e95ab88d.js";
import { u as B } from "./trinity_resource_fields.c31194b4.js";
const E = () => {
  var d, c, p;
  const r = k(), i = x(), { resource: a, errors: h, data: m } = F(), $ = B(), o = j.exports.useMemo(() => {
    let t = {};
    for (const e of $)
      t[g(e.columnName.split("."))] = m[g(e.columnName.split("."))];
    return t;
  }, [r]), l = D(o), y = (t, e) => {
    o[t] = e;
  }, C = () => {
    l.setData(o), l.put("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, v = /* @__PURE__ */ n("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ s(N, {
        label: i("update"),
        className: "m-2 p-button-info",
        disabled: l.processing,
        loading: l.processing,
        onClick: () => C()
      }),
      /* @__PURE__ */ s(N, {
        label: i("cancel"),
        className: "m-2 p-button-secondary",
        onClick: () => z(`/${r.prefix}/${a == null ? void 0 : a.name}`)
      })
    ]
  });
  return /* @__PURE__ */ n(L, {
    children: [
      /* @__PURE__ */ s(R, {
        title: `${i("edit")} - ${m[(c = (d = a == null ? void 0 : a.titleColumn) != null ? d : a == null ? void 0 : a.primaryKeyColumn) != null ? c : "id"]}`
      }),
      /* @__PURE__ */ n("div", {
        className: "card",
        children: [
          /* @__PURE__ */ n("h5", {
            className: "mb-6",
            children: [
              i("edit"),
              " ",
              a == null ? void 0 : a.pluralLabel
            ]
          }),
          /* @__PURE__ */ s("form", {
            className: "p-fluid formgrid grid col-12",
            children: (p = a == null ? void 0 : a.schema) == null ? void 0 : p.map(
              (t, e) => {
                var f, u;
                return (f = b.registeredComponents) != null && f.has(t.componentName) ? (u = b.registeredComponents) == null ? void 0 : u.get(t.componentName)({
                  key: `form_${e}_${t.componentName}`,
                  configs: r,
                  resource: a,
                  component: t,
                  record: m,
                  formData: o,
                  setFieldValue: y,
                  errors: h,
                  localize: i
                }) : /* @__PURE__ */ s("div", {}, `form_${e}_${t.componentName}`);
              }
            )
          }),
          /* @__PURE__ */ s("div", {
            className: "mt-3",
            children: /* @__PURE__ */ s(T, {
              end: v
            })
          })
        ]
      })
    ]
  });
}, A = _.memo(E);
export {
  A as default
};
