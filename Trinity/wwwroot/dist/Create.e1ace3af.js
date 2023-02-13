import { R as x, u as v, a as A, r as n, A as k, l as y, K as _, g as F, j as d, F as j, b as t, H as D, T as L, B as p } from "./main.d5262881.js";
import { t as h } from "./trinity_link.3d190891.js";
import { u as R } from "./trinity_resource_fields.e20080e0.js";
const S = () => {
  var g;
  const s = v(), { resource: e, errors: u, data: m } = A(), b = R(), { components: r } = n.exports.useContext(k), [c, C] = n.exports.useState(!1);
  let o = n.exports.useMemo(() => {
    let a = {};
    for (const i of b)
      a[y(i.columnName.split("."))] = void 0;
    return a;
  }, [s]);
  const l = _(o);
  n.exports.useEffect(() => {
    m && (c ? F.get("") : h(`/${s == null ? void 0 : s.prefix}/${e == null ? void 0 : e.name}/edit/${m}`, !1, !1));
  }, [m]);
  const N = (a, i) => {
    o[a] = i;
  }, f = (a = !1) => {
    l.setData(o), C(a), l.post("", {
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
        onClick: () => h(`/${s.prefix}/${e == null ? void 0 : e.name}`)
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
              (a, i) => r != null && r.has(a.componentName) ? r == null ? void 0 : r.get(a.componentName)({
                key: `form_${i}_${a.componentName}`,
                configs: s,
                resource: e,
                component: a,
                record: {},
                formData: o,
                setFieldValue: N,
                errors: u
              }) : /* @__PURE__ */ t("div", {}, `form_${i}_${a.componentName}`)
            )
          }),
          /* @__PURE__ */ t("div", {
            className: "mt-3",
            children: /* @__PURE__ */ t(L, {
              right: $
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
