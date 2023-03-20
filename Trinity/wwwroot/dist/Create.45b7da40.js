import { R as y, u as k, a as A, b as F, r as d, l as L, _ as j, g as D, j as n, c as t, B as p, F as R, H as S, t as h, T } from "./main.480fd86f.js";
import { t as N } from "./trinity_link.e95ab88d.js";
import { u as z } from "./trinity_resource_fields.c31194b4.js";
const B = () => {
  var g;
  const s = k(), r = A(), { resource: e, errors: $, data: c } = F(), C = z(), [m, _] = d.exports.useState(!1);
  let i = d.exports.useMemo(() => {
    let a = {};
    for (const o of C)
      a[L(o.columnName.split("."))] = void 0;
    return a;
  }, [s]);
  const l = j(i);
  d.exports.useEffect(() => {
    c && (m ? D.get("") : N(`/${s == null ? void 0 : s.prefix}/${e == null ? void 0 : e.name}/edit/${c}`, !1, !1));
  }, [c]);
  const v = (a, o) => {
    i[a] = o;
  }, f = (a = !1) => {
    l.setData(i), _(a), l.post("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, x = /* @__PURE__ */ n("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ t(p, {
        label: r("create"),
        className: "m-2 p-button-primary",
        disabled: l.processing,
        loading: l.processing && !m,
        onClick: () => f(!1)
      }),
      /* @__PURE__ */ t(p, {
        label: r("create_and_another"),
        className: "m-2 p-button-help",
        disabled: l.processing,
        loading: l.processing && m,
        onClick: () => f(!0)
      }),
      /* @__PURE__ */ t(p, {
        label: r("cancel"),
        className: "m-2 p-button-secondary",
        onClick: () => N(`/${s.prefix}/${e == null ? void 0 : e.name}`)
      })
    ]
  });
  return /* @__PURE__ */ n(R, {
    children: [
      /* @__PURE__ */ t(S, {
        title: `${r("create")} - ${e == null ? void 0 : e.pluralLabel}`
      }),
      /* @__PURE__ */ n("div", {
        className: "card",
        children: [
          /* @__PURE__ */ n("h5", {
            className: "mb-6",
            children: [
              r("create"),
              " ",
              e == null ? void 0 : e.pluralLabel
            ]
          }),
          /* @__PURE__ */ t("form", {
            className: "p-fluid formgrid grid col-12",
            children: (g = e == null ? void 0 : e.schema) == null ? void 0 : g.map(
              (a, o) => {
                var u, b;
                return (u = h.registeredComponents) != null && u.has(a.componentName) ? (b = h.registeredComponents) == null ? void 0 : b.get(a.componentName)({
                  key: `form_${o}_${a.componentName}`,
                  configs: s,
                  resource: e,
                  component: a,
                  record: {},
                  formData: i,
                  setFieldValue: v,
                  errors: $,
                  localize: r
                }) : /* @__PURE__ */ t("div", {}, `form_${o}_${a.componentName}`);
              }
            )
          }),
          /* @__PURE__ */ t("div", {
            className: "mt-3",
            children: /* @__PURE__ */ t(T, {
              end: x
            })
          })
        ]
      })
    ]
  });
}, M = y.memo(B);
export {
  M as default
};
