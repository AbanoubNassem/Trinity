import { R as x, u as v, a as y, r as f, A as _, l as u, K as k, j as r, F, b as e, H as j, T as D, B as N } from "./main.d5262881.js";
import { t as E } from "./trinity_link.3d190891.js";
import { u as R } from "./trinity_resource_fields.e20080e0.js";
const T = () => {
  var d, c, p;
  const n = v(), { resource: a, errors: g, data: m } = y(), b = R(), { components: l } = f.exports.useContext(_), i = f.exports.useMemo(() => {
    let t = {};
    for (const s of b)
      t[u(s.columnName.split("."))] = m[u(s.columnName.split("."))];
    return t;
  }, [n]), o = k(i), h = (t, s) => {
    i[t] = s;
  }, C = () => {
    o.setData(i), o.put("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, $ = /* @__PURE__ */ r("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ e(N, {
        label: "Update",
        className: "m-2 p-button-info",
        disabled: o.processing,
        loading: o.processing,
        onClick: () => C()
      }),
      /* @__PURE__ */ e(N, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => E(`/${n.prefix}/${a == null ? void 0 : a.name}`)
      })
    ]
  });
  return /* @__PURE__ */ r(F, {
    children: [
      /* @__PURE__ */ e(j, {
        title: `Edit - ${m[(c = (d = a == null ? void 0 : a.titleColumn) != null ? d : a == null ? void 0 : a.primaryKeyColumn) != null ? c : "id"]}`
      }),
      /* @__PURE__ */ r("div", {
        className: "card",
        children: [
          /* @__PURE__ */ r("h5", {
            className: "mb-6",
            children: [
              "Create ",
              a == null ? void 0 : a.pluralLabel
            ]
          }),
          /* @__PURE__ */ e("form", {
            className: "p-fluid formgrid grid col-12",
            children: (p = a == null ? void 0 : a.schema) == null ? void 0 : p.map(
              (t, s) => l != null && l.has(t.componentName) ? l == null ? void 0 : l.get(t.componentName)({
                key: `form_${s}_${t.componentName}`,
                configs: n,
                resource: a,
                component: t,
                record: m,
                formData: i,
                setFieldValue: h,
                errors: g
              }) : /* @__PURE__ */ e("div", {}, `form_${s}_${t.componentName}`)
            )
          }),
          /* @__PURE__ */ e("div", {
            className: "mt-3",
            children: /* @__PURE__ */ e(D, {
              end: $
            })
          })
        ]
      })
    ]
  });
}, K = x.memo(T);
export {
  K as default
};
