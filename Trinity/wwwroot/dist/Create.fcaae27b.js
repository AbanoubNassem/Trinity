import { R as y, u as _, a as k, r as d, l as A, _ as F, g as j, j as i, F as D, b as t, H as L, t as h, T as R, B as c } from "./main.8650d7d3.js";
import { t as u } from "./trinity_link.96e1fe55.js";
import { u as S } from "./trinity_resource_fields.9868bff4.js";
const T = () => {
  var f;
  const s = _(), { resource: e, errors: C, data: n } = k(), N = S(), [m, $] = d.exports.useState(!1);
  let o = d.exports.useMemo(() => {
    let a = {};
    for (const l of N)
      a[A(l.columnName.split("."))] = void 0;
    return a;
  }, [s]);
  const r = F(o);
  d.exports.useEffect(() => {
    n && (m ? j.get("") : u(`/${s == null ? void 0 : s.prefix}/${e == null ? void 0 : e.name}/edit/${n}`, !1, !1));
  }, [n]);
  const v = (a, l) => {
    o[a] = l;
  }, p = (a = !1) => {
    r.setData(o), $(a), r.post("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, x = /* @__PURE__ */ i("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ t(c, {
        label: "Create",
        className: "m-2 p-button-primary",
        disabled: r.processing,
        loading: r.processing && !m,
        onClick: () => p(!1)
      }),
      /* @__PURE__ */ t(c, {
        label: "Create & create another",
        className: "m-2 p-button-help",
        disabled: r.processing,
        loading: r.processing && m,
        onClick: () => p(!0)
      }),
      /* @__PURE__ */ t(c, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => u(`/${s.prefix}/${e == null ? void 0 : e.name}`)
      })
    ]
  });
  return /* @__PURE__ */ i(D, {
    children: [
      /* @__PURE__ */ t(L, {
        title: `Create - ${e == null ? void 0 : e.pluralLabel}`
      }),
      /* @__PURE__ */ i("div", {
        className: "card",
        children: [
          /* @__PURE__ */ i("h5", {
            className: "mb-6",
            children: [
              "Create ",
              e == null ? void 0 : e.pluralLabel
            ]
          }),
          /* @__PURE__ */ t("form", {
            className: "p-fluid formgrid grid col-12",
            children: (f = e == null ? void 0 : e.schema) == null ? void 0 : f.map(
              (a, l) => {
                var g, b;
                return (g = h.registeredComponents) != null && g.has(a.componentName) ? (b = h.registeredComponents) == null ? void 0 : b.get(a.componentName)({
                  key: `form_${l}_${a.componentName}`,
                  configs: s,
                  resource: e,
                  component: a,
                  record: {},
                  formData: o,
                  setFieldValue: v,
                  errors: C
                }) : /* @__PURE__ */ t("div", {}, `form_${l}_${a.componentName}`);
              }
            )
          }),
          /* @__PURE__ */ t("div", {
            className: "mt-3",
            children: /* @__PURE__ */ t(R, {
              end: x
            })
          })
        ]
      })
    ]
  });
}, E = y.memo(T);
export {
  E as default
};
