import { R as x, u as v, a as A, r as n, A as _, l as k, _ as y, g as F, j as d, F as j, b as t, H as D, T as L, B as p } from "./main.8e9066d4.js";
import { t as u } from "./trinity_link.1d0709d3.js";
import { u as R } from "./trinity_resource_fields.854a4401.js";
const S = () => {
  var g;
  const s = v(), { resource: e, errors: b, data: m } = A(), h = R(), { components: r } = n.exports.useContext(_), [c, C] = n.exports.useState(!1);
  let i = n.exports.useMemo(() => {
    let a = {};
    for (const o of h)
      a[k(o.columnName.split("."))] = void 0;
    return a;
  }, [s]);
  const l = y(i);
  n.exports.useEffect(() => {
    m && (c ? F.get("") : u(`/${s == null ? void 0 : s.prefix}/${e == null ? void 0 : e.name}/edit/${m}`, !1, !1));
  }, [m]);
  const N = (a, o) => {
    i[a] = o;
  }, f = (a = !1) => {
    l.setData(i), C(a), l.post("", {
      preserveScroll: !0,
      preserveState: !0
    });
  }, $ = /* @__PURE__ */ d("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ t(p, {
        label: "Create",
        className: "m-2 p-button-primary",
        disabled: l.processing,
        loading: l.processing && !c,
        onClick: () => f(!1)
      }),
      /* @__PURE__ */ t(p, {
        label: "Create & create another",
        className: "m-2 p-button-help",
        disabled: l.processing,
        loading: l.processing && c,
        onClick: () => f(!0)
      }),
      /* @__PURE__ */ t(p, {
        label: "Cancel",
        className: "m-2 p-button-secondary",
        onClick: () => u(`/${s.prefix}/${e == null ? void 0 : e.name}`)
      })
    ]
  });
  return /* @__PURE__ */ d(j, {
    children: [
      /* @__PURE__ */ t(D, {
        title: `Create - ${e == null ? void 0 : e.pluralLabel}`
      }),
      /* @__PURE__ */ d("div", {
        className: "card",
        children: [
          /* @__PURE__ */ d("h5", {
            className: "mb-6",
            children: [
              "Create ",
              e == null ? void 0 : e.pluralLabel
            ]
          }),
          /* @__PURE__ */ t("form", {
            className: "p-fluid formgrid grid col-12",
            children: (g = e == null ? void 0 : e.schema) == null ? void 0 : g.map(
              (a, o) => r != null && r.has(a.componentName) ? r == null ? void 0 : r.get(a.componentName)({
                key: `form_${o}_${a.componentName}`,
                configs: s,
                resource: e,
                component: a,
                record: {},
                formData: i,
                setFieldValue: N,
                errors: b
              }) : /* @__PURE__ */ t("div", {}, `form_${o}_${a.componentName}`)
            )
          }),
          /* @__PURE__ */ t("div", {
            className: "mt-3",
            children: /* @__PURE__ */ t(L, {
              end: $
            })
          })
        ]
      })
    ]
  });
}, P = x.memo(S);
export {
  P as default
};
