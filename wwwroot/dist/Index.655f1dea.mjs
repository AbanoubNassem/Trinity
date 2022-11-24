import { d as G, u as re, t as wt, b as y, p as Ye, e as at, r as D, f as nt, w as de, o as g, c as h, g as _, F as z, h as ve, i as t, n as A, j as q, k as J, l as Z, m as ke, q as Re, s as ce, v as j, x as Ze, y as Ce, z as St, A as Ct, B as It, C as Oe, D as Le, E as pe, G as fe, H as se, I as $t, J as At, _ as st, K as Bt, L as Tt } from "./main.a1346c5e.mjs";
var Rt = Object.defineProperty, Ot = Object.defineProperties, Lt = Object.getOwnPropertyDescriptors, et = Object.getOwnPropertySymbols, Ft = Object.prototype.hasOwnProperty, Et = Object.prototype.propertyIsEnumerable, tt = (a, l, e) => l in a ? Rt(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, U = (a, l) => {
  for (var e in l || (l = {}))
    Ft.call(l, e) && tt(a, e, l[e]);
  if (et)
    for (var e of et(l))
      Et.call(l, e) && tt(a, e, l[e]);
  return a;
}, Se = (a, l) => Ot(a, Lt(l)), ee = (a, l) => {
  const e = a.__vccOpts || a;
  for (const [n, c] of l)
    e[n] = c;
  return e;
};
const Dt = (a) => (pe("data-v-e0a0b7f0"), a = a(), fe(), a), Ht = ["onClick"], Mt = ["checked"], Vt = /* @__PURE__ */ Dt(() => /* @__PURE__ */ _("label", { for: "checbox" }, null, -1)), Wt = /* @__PURE__ */ G({
  props: {
    status: { type: String, required: !0 }
  },
  emits: ["change"],
  setup(a, { emit: l }) {
    const e = a;
    re((m) => ({
      "51ab8a49": t(u)
    }));
    const n = y(() => e.status === "allSelected"), c = () => {
      l("change", !n.value);
    }, u = se("themeColor");
    return (m, s) => (g(), h("div", {
      class: "easy-checkbox",
      onClick: Le(c, ["stop", "prevent"])
    }, [
      _("input", {
        type: "checkbox",
        checked: t(n),
        class: A(a.status)
      }, null, 10, Mt),
      Vt
    ], 8, Ht));
  }
});
var qt = /* @__PURE__ */ ee(Wt, [["__scopeId", "data-v-e0a0b7f0"]]);
const jt = (a) => (pe("data-v-7e69a276"), a = a(), fe(), a), Jt = ["checked"], zt = /* @__PURE__ */ jt(() => /* @__PURE__ */ _("label", { for: "checbox" }, null, -1)), Ut = /* @__PURE__ */ G({
  props: {
    checked: { type: Boolean, required: !0 }
  },
  emits: ["change"],
  setup(a, { emit: l }) {
    re((n) => ({
      fdaf7e9e: t(e)
    }));
    const e = se("themeColor");
    return (n, c) => (g(), h("div", {
      class: "easy-checkbox",
      onClick: c[0] || (c[0] = Le((u) => l("change"), ["stop", "prevent"]))
    }, [
      _("input", {
        type: "checkbox",
        checked: a.checked
      }, null, 8, Jt),
      zt
    ]));
  }
});
var Gt = /* @__PURE__ */ ee(Ut, [["__scopeId", "data-v-7e69a276"]]);
const Kt = (a) => (pe("data-v-09dad912"), a = a(), fe(), a), Qt = { class: "easy-data-table__rows-selector" }, Xt = { class: "rows-input" }, Yt = /* @__PURE__ */ Kt(() => /* @__PURE__ */ _("div", { class: "triangle" }, null, -1)), Zt = ["onClick"], ea = /* @__PURE__ */ G({
  props: {
    modelValue: { type: Number, required: !0 },
    rowsItems: { type: Array, required: !0 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: l }) {
    const e = a;
    re((v) => ({
      "7fe9410c": t(x)
    }));
    const n = D(!1), c = D(!1), u = se("dataTable");
    de(n, (v) => {
      if (v && u) {
        const k = window.innerHeight, P = u.value.getBoundingClientRect().height, E = u.value.getBoundingClientRect().top;
        k - (P + E) <= 100 ? c.value = !0 : c.value = !1;
      }
    });
    const m = y({
      get: () => e.modelValue,
      set: (v) => {
        l("update:modelValue", v);
      }
    }), s = (v) => {
      m.value = v, n.value = !1;
    }, r = (v, k) => {
      let P = v.parentNode;
      for (; P != null; ) {
        if (P.classList && P.classList.contains(k))
          return !0;
        P = P.parentNode;
      }
      return !1;
    }, o = (v) => {
      r(v.target, "easy-data-table__rows-selector") || (n.value = !1);
    };
    nt(() => {
      document.addEventListener("click", o);
    }), $t(() => {
      document.removeEventListener("click", o);
    });
    const x = se("themeColor");
    return (v, k) => (g(), h("div", Qt, [
      _("div", {
        class: "rows-input__wrapper",
        onClick: k[0] || (k[0] = (P) => n.value = !n.value)
      }, [
        _("div", Xt, j(t(m)), 1),
        Yt
      ]),
      _("ul", {
        class: A(["select-items", { show: n.value, inside: c.value }])
      }, [
        (g(!0), h(z, null, ve(a.rowsItems, (P) => (g(), h("li", {
          key: P,
          class: A({ selected: P === t(m) }),
          onClick: (E) => s(P)
        }, j(P), 11, Zt))), 128))
      ], 2)
    ]));
  }
});
var ta = /* @__PURE__ */ ee(ea, [["__scopeId", "data-v-09dad912"]]);
const Ie = (a) => (pe("data-v-1fa3a520"), a = a(), fe(), a), aa = { class: "lds-ring" }, na = /* @__PURE__ */ Ie(() => /* @__PURE__ */ _("div", null, null, -1)), sa = /* @__PURE__ */ Ie(() => /* @__PURE__ */ _("div", null, null, -1)), ra = /* @__PURE__ */ Ie(() => /* @__PURE__ */ _("div", null, null, -1)), la = /* @__PURE__ */ Ie(() => /* @__PURE__ */ _("div", null, null, -1)), oa = [
  na,
  sa,
  ra,
  la
], ua = /* @__PURE__ */ G({
  setup(a) {
    re((e) => ({
      26774109: t(l)
    }));
    const l = se("themeColor");
    return (e, n) => (g(), h("div", aa, oa));
  }
});
var ia = /* @__PURE__ */ ee(ua, [["__scopeId", "data-v-1fa3a520"]]);
const ca = { class: "loader-line" }, da = /* @__PURE__ */ G({
  setup(a) {
    re((e) => ({
      "0d327f57": t(l)
    }));
    const l = se("themeColor");
    return (e, n) => (g(), h("div", ca));
  }
});
var va = /* @__PURE__ */ ee(da, [["__scopeId", "data-v-7d281cac"]]);
const pa = { class: "buttons-pagination" }, fa = ["onClick"], ga = /* @__PURE__ */ G({
  props: {
    maxPaginationNumber: { type: Number, required: !0 },
    currentPaginationNumber: { type: Number, required: !0 }
  },
  emits: ["updatePage"],
  setup(a, { emit: l }) {
    const e = a;
    re((s) => ({
      "40dd4f07": t(m)
    }));
    const n = 7, c = (s) => {
      s.type === "button" && !s.active && l("updatePage", s.page);
    }, u = y(() => {
      const s = [];
      if (e.maxPaginationNumber <= n)
        for (let r = 1; r <= e.maxPaginationNumber; r += 1)
          s.push({
            type: "button",
            page: r,
            active: r === e.currentPaginationNumber,
            activePrev: r + 1 === e.currentPaginationNumber
          });
      else if ([1, 2, e.maxPaginationNumber, e.maxPaginationNumber - 1].includes(e.currentPaginationNumber))
        for (let r = 1; r <= n; r += 1)
          if (r <= 3)
            s.push({
              type: "button",
              page: r,
              active: r === e.currentPaginationNumber,
              activePrev: r + 1 === e.currentPaginationNumber
            });
          else if (r === 4)
            s.push({
              type: "omission"
            });
          else {
            const o = e.maxPaginationNumber - (n - r);
            s.push({
              type: "button",
              page: o,
              active: o === e.currentPaginationNumber,
              activePrev: o + 1 === e.currentPaginationNumber
            });
          }
      else if ([3, 4].includes(e.currentPaginationNumber))
        for (let r = 1; r <= n; r += 1)
          r <= 5 ? s.push({
            type: "button",
            page: r,
            active: r === e.currentPaginationNumber,
            activePrev: r + 1 === e.currentPaginationNumber
          }) : r === 6 ? s.push({
            type: "omission"
          }) : s.push({
            type: "button",
            page: e.maxPaginationNumber,
            active: e.maxPaginationNumber === e.currentPaginationNumber,
            activePrev: r + 1 === e.currentPaginationNumber
          });
      else if ([e.maxPaginationNumber - 2, e.maxPaginationNumber - 3].includes(e.currentPaginationNumber))
        for (let r = 1; r <= n; r += 1)
          if (r === 1)
            s.push({
              type: "button",
              page: 1,
              active: e.currentPaginationNumber === 1,
              activePrev: r + 1 === e.currentPaginationNumber
            });
          else if (r === 2)
            s.push({
              type: "omission"
            });
          else {
            const o = e.maxPaginationNumber - (n - r);
            s.push({
              type: "button",
              page: o,
              active: o === e.currentPaginationNumber,
              activePrev: o + 1 === e.currentPaginationNumber
            });
          }
      else
        for (let r = 1; r <= n; r += 1)
          if (r === 1)
            s.push({
              type: "button",
              page: 1,
              active: e.currentPaginationNumber === 1,
              activePrev: r + 1 === e.currentPaginationNumber
            });
          else if (r === 2 || r === 6)
            s.push({
              type: "omission"
            });
          else if (r === 7)
            s.push({
              type: "button",
              page: e.maxPaginationNumber,
              active: e.maxPaginationNumber === e.currentPaginationNumber,
              activePrev: r + 1 === e.currentPaginationNumber
            });
          else {
            const o = 4 - r, x = e.currentPaginationNumber - o;
            s.push({
              type: "button",
              page: x,
              active: x === e.currentPaginationNumber,
              activePrev: x + 1 === e.currentPaginationNumber
            });
          }
      return s;
    }), m = se("themeColor");
    return (s, r) => (g(), h("div", pa, [
      (g(!0), h(z, null, ve(t(u), (o, x) => (g(), h("div", {
        key: x,
        class: A(["item", {
          button: o.type === "button",
          active: o.type === "button" && o.active,
          "active-prev": o.type === "button" && o.activePrev,
          omission: o.type === "omission"
        }]),
        onClick: (v) => c(o)
      }, j(o.type === "button" ? o.page : "..."), 11, fa))), 128))
    ]));
  }
});
var ya = /* @__PURE__ */ ee(ga, [["__scopeId", "data-v-4c681fa2"]]);
const rt = (a) => (pe("data-v-c9da5286"), a = a(), fe(), a), ma = /* @__PURE__ */ rt(() => /* @__PURE__ */ _("span", { class: "arrow arrow-right" }, null, -1)), ha = [
  ma
], ba = /* @__PURE__ */ rt(() => /* @__PURE__ */ _("span", { class: "arrow arrow-left" }, null, -1)), xa = [
  ba
], Pa = /* @__PURE__ */ G({
  props: {
    isFirstPage: { type: Boolean, required: !1 },
    isLastPage: { type: Boolean, required: !1 }
  },
  emits: ["clickPrevPage", "clickNextPage"],
  setup(a, { emit: l }) {
    const e = at();
    return (n, c) => (g(), h(z, null, [
      _("div", {
        class: A(["previous-page__click-button", { "first-page": a.isFirstPage }]),
        onClick: c[0] || (c[0] = (u) => l("clickPrevPage"))
      }, ha, 2),
      t(e).buttonsPagination ? J(n.$slots, "buttonsPagination", { key: 0 }, void 0, !0) : q("", !0),
      _("div", {
        class: A(["next-page__click-button", { "last-page": a.isLastPage }]),
        onClick: c[1] || (c[1] = (u) => l("clickNextPage"))
      }, xa, 2)
    ], 64));
  }
});
var _a = /* @__PURE__ */ ee(Pa, [["__scopeId", "data-v-c9da5286"]]);
function ka(a, l, e, n) {
  return {
    clickRow: (u, m) => {
      if (a.value !== m)
        return;
      const s = U({}, u);
      if (l.value) {
        const { checkbox: r } = u;
        delete s.checkbox, s.isSelected = r;
      }
      if (e.value) {
        const { index: r } = u;
        delete s.index, s.indexInCurrentPage = r;
      }
      n("clickRow", s);
    }
  };
}
function Na(a, l, e) {
  const n = D([]);
  return {
    expandingItemIndexList: n,
    updateExpandingItemIndexList: (m, s, r) => {
      r.stopPropagation();
      const o = n.value.indexOf(m);
      if (o !== -1)
        n.value.splice(o, 1);
      else {
        const x = a.value.findIndex((v) => JSON.stringify(v) === JSON.stringify(s));
        e("expandRow", l.value + x), n.value.push(l.value + x);
      }
    },
    clearExpandingItemIndexList: () => {
      n.value = [];
    }
  };
}
function wa(a) {
  const l = y(() => a.value.filter((c) => c.fixed)), e = y(() => l.value.length ? l.value[l.value.length - 1].value : ""), n = y(() => {
    if (!l.value.length)
      return [];
    const c = l.value.map((u) => {
      var m;
      return (m = u.width) != null ? m : 100;
    });
    return l.value.map((u, m) => {
      var s, r;
      return {
        value: u.value,
        fixed: (s = u.fixed) != null ? s : !0,
        width: (r = u.width) != null ? r : 100,
        distance: m === 0 ? 0 : c.reduce((o, x, v) => {
          let k = o;
          return v < m && (k += x), k;
        })
      };
    });
  });
  return {
    fixedHeaders: l,
    lastFixedColumn: e,
    fixedColumnsInfos: n
  };
}
function Sa(a, l, e, n, c, u, m, s, r, o, x, v, k, P, E, N, $, W) {
  const H = y(() => u.value.findIndex((b) => b.fixed) !== -1), d = y(() => H.value ? u.value.filter((b) => b.fixed) : []), S = y(() => u.value.filter((b) => !b.fixed)), p = D(((b, M) => Array.isArray(b) && Array.isArray(M) ? {
    sortBy: b,
    sortDesc: M.map((I) => I === "desc")
  } : b !== "" ? {
    sortBy: P.value,
    sortDesc: E.value === "desc"
  } : null)(P.value, E.value)), B = y(() => {
    var b;
    const I = [
      ...d.value,
      ...S.value
    ].map((ue) => {
      const O = Object.assign(ue);
      if (O.sortable && (O.sortType = "none"), v.value)
        if (Array.isArray(v.value.sortBy) && Array.isArray(v.value.sortType) && v.value.sortBy.includes(O.value)) {
          const ye = v.value.sortBy.indexOf(O.value);
          O.sortType = v.value.sortType[ye];
        } else
          O.value === v.value.sortBy && v.value.sortType && (O.sortType = v.value.sortType);
      if (p.value && Array.isArray(p.value.sortBy) && Array.isArray(p.value.sortDesc) && p.value.sortBy.includes(O.value)) {
        const ye = p.value.sortBy.indexOf(O.value);
        O.sortType = p.value.sortDesc[ye] ? "desc" : "asc";
      } else
        p.value && O.value === p.value.sortBy && (O.sortType = p.value.sortDesc ? "desc" : "asc");
      return O;
    });
    let V = [];
    m.value ? V = [n.value || H.value ? {
      text: "",
      value: "expand",
      fixed: !0,
      width: l.value
    } : { text: "", value: "expand" }, ...I] : V = I;
    let oe = [];
    k.value ? oe = [c.value || H.value ? {
      text: "#",
      value: "index",
      fixed: !0,
      width: s.value
    } : { text: "#", value: "index" }, ...V] : oe = V;
    let ge = [];
    return r.value ? ge = [e.value || H.value ? {
      text: "checkbox",
      value: "checkbox",
      fixed: !0,
      width: (b = a.value) != null ? b : 36
    } : { text: "checkbox", value: "checkbox" }, ...oe] : ge = oe, ge;
  }), C = y(() => B.value.map((b) => b.value));
  return {
    clientSortOptions: p,
    headerColumns: C,
    headersForRender: B,
    updateSortField: (b, M) => {
      let I = null;
      if (M === "none" ? I = "asc" : M === "asc" ? I = "desc" : I = x.value ? "asc" : null, o.value && $(b, I), p.value && Array.isArray(p.value.sortBy) && Array.isArray(p.value.sortDesc)) {
        const V = p.value.sortBy.indexOf(b);
        V === -1 ? I !== null && (p.value.sortBy.push(b), p.value.sortDesc.push(I === "desc")) : I === null ? (p.value.sortDesc.splice(V, 1), p.value.sortBy.splice(V, 1)) : p.value.sortDesc[V] = I === "desc";
      } else
        I === null ? p.value = null : p.value = {
          sortBy: b,
          sortDesc: I === "desc"
        };
      W("updateSort", {
        sortType: I,
        sortBy: b
      });
    },
    isMultiSorting: (b) => v.value && Array.isArray(v.value.sortBy) ? v.value.sortBy.includes(b) : p.value && Array.isArray(p.value.sortBy) ? p.value.sortBy.includes(b) : !1,
    getMultiSortNumber: (b) => v.value && Array.isArray(v.value.sortBy) ? v.value.sortBy.indexOf(b) + 1 : p.value && Array.isArray(p.value.sortBy) ? p.value.sortBy.indexOf(b) + 1 : !1
  };
}
function Ca(a, l, e, n, c, u, m, s, r) {
  const o = y(() => (a.value - 1) * c.value + 1), x = y(() => e.value ? Math.min(r.value, a.value * c.value) : Math.min(s.value.length, a.value * c.value)), v = y(() => e.value ? n.value : s.value.slice(o.value - 1, x.value)), k = y(() => m.value ? v.value.map((N, $) => U({ index: o.value + $ }, N)) : v.value), P = y(() => u.value.length === 0 || u.value.every(($) => s.value.findIndex((W) => JSON.stringify($) === JSON.stringify(W)) === -1) ? "noneSelected" : u.value.length === s.value.length && u.value.every((W) => s.value.findIndex((H) => JSON.stringify(W) === JSON.stringify(H)) !== -1) ? "allSelected" : "partSelected"), E = y(() => l.value ? P.value === "allSelected" ? k.value.map((N) => U({ checkbox: !0 }, N)) : P.value === "noneSelected" ? k.value.map((N) => U({ checkbox: !1 }, N)) : k.value.map((N) => {
    const $ = u.value.findIndex((W) => {
      const H = U({}, N);
      return delete H.index, JSON.stringify(W) === JSON.stringify(H);
    }) !== -1;
    return U({ checkbox: $ }, N);
  }) : k.value);
  return {
    currentPageFirstIndex: o,
    currentPageLastIndex: x,
    multipleSelectStatus: P,
    pageItems: E
  };
}
function Ia(a, l, e, n, c, u, m) {
  const s = D(u.value ? u.value.page : a.value), r = y(() => Math.ceil(n.value / c.value)), o = y(() => r.value === 0 || s.value === r.value), x = y(() => s.value === 1);
  return {
    currentPaginationNumber: s,
    maxPaginationNumber: r,
    isLastPage: o,
    isFirstPage: x,
    nextPage: () => {
      if (n.value !== 0 && !o.value && !e.value)
        if (l.value) {
          const N = s.value + 1;
          m(N);
        } else
          s.value += 1;
    },
    prevPage: () => {
      if (n.value !== 0 && !x.value && !e.value)
        if (l.value) {
          const N = s.value - 1;
          m(N);
        } else
          s.value -= 1;
    },
    updatePage: (N) => {
      e.value || (l.value ? m(N) : s.value = N);
    },
    updateCurrentPaginationNumber: (N) => {
      s.value = N;
    }
  };
}
function $a(a, l, e, n) {
  const c = y(() => !a.value && l.value.findIndex((s) => s === n.value) === -1 ? [n.value, ...l.value] : l.value), u = D(e.value ? e.value.rowsPerPage : n.value);
  return {
    rowsItemsComputed: c,
    rowsPerPageRef: u,
    updateRowsPerPage: (s) => {
      u.value = s;
    }
  };
}
function Aa(a, l, e) {
  const n = y({
    get: () => {
      if (a.value) {
        const {
          page: s,
          rowsPerPage: r,
          sortBy: o,
          sortType: x
        } = a.value;
        return {
          page: s,
          rowsPerPage: r,
          sortBy: o != null ? o : null,
          sortType: x != null ? x : null
        };
      }
      return null;
    },
    set: (s) => {
      e("update:serverOptions", s);
    }
  });
  return {
    serverOptionsComputed: n,
    updateServerOptionsPage: (s) => {
      n.value && (n.value = Se(U({}, n.value), {
        page: s
      }));
    },
    updateServerOptionsSort: (s, r) => {
      if (n.value)
        if (l.value && Array.isArray(n.value.sortBy) && Array.isArray(n.value.sortType)) {
          const o = n.value.sortBy.findIndex((x) => x === s);
          o === -1 && r !== null && (n.value.sortBy.push(s), n.value.sortType.push(r)), r === null ? (n.value.sortBy.splice(o, 1), n.value.sortType.splice(o, 1)) : n.value.sortType[o] = r;
        } else
          n.value = Se(U({}, n.value), {
            sortBy: r !== null ? s : null,
            sortType: r
          });
    },
    updateServerOptionsRowsPerPage: (s) => {
      n.value && (n.value = Se(U({}, n.value), {
        page: 1,
        rowsPerPage: s
      }));
    }
  };
}
function F(a, l) {
  if (a.includes(".")) {
    let e = "";
    const n = a.split("."), { length: c } = n;
    let u = 0;
    for (; u < c && (e = u === 0 ? l[n[u]] : e[n[u]], u += 1, e !== void 0); )
      ;
    return e;
  }
  return l[a];
}
function Ba(a, l) {
  const e = F(a, l);
  return Array.isArray(e) ? e.join(",") : e;
}
function Ta(a, l, e, n, c, u, m, s, r, o) {
  const x = (d) => {
    if (typeof u.value == "string" && u.value !== "")
      return F(u.value, d);
    if (Array.isArray(u.value)) {
      let S = "";
      return u.value.forEach((w) => {
        S += F(w, d);
      }), S;
    }
    return Object.values(d).join(" ");
  }, v = y(() => {
    if (!e.value && m.value !== "") {
      const d = new RegExp(m.value, "i");
      return n.value.filter((S) => d.test(x(S)));
    }
    return n.value;
  }), k = y(() => {
    let d = [...v.value];
    return l.value ? (l.value.forEach((S) => {
      d = d.filter((w) => {
        const { field: p, comparison: B, criteria: C } = S;
        if (typeof B == "function")
          return B(F(p, w), C);
        const R = F(p, w);
        switch (B) {
          case "=":
            return R === C;
          case "!=":
            return R !== C;
          case ">":
            return R > C;
          case "<":
            return R < C;
          case "<=":
            return R <= C;
          case ">=":
            return R >= C;
          case "between":
            return R >= Math.min(...C) && R <= Math.max(...C);
          default:
            return R === C;
        }
      });
    }), d) : v.value;
  });
  de(k, (d) => {
    l.value && o("updateFilter", d);
  }, { immediate: !0, deep: !0 });
  function P(d, S, w, p) {
    const B = d[p], C = S[p];
    return (p === 0 ? w : P(d, S, w, p - 1)).sort((le, K) => {
      let b = !0;
      for (let M = 0; M < p; M += 1)
        if (F(d[M], le) !== F(d[M], K)) {
          b = !1;
          break;
        }
      return b ? F(B, le) < F(B, K) ? C ? 1 : -1 : F(B, le) > F(B, K) ? C ? -1 : 1 : 0 : 0;
    });
  }
  const E = y(() => {
    if (e.value)
      return n.value;
    if (a.value === null)
      return k.value;
    const { sortBy: d, sortDesc: S } = a.value, w = [...k.value];
    return r && Array.isArray(d) && Array.isArray(S) ? d.length === 0 ? w : P(d, S, w, d.length - 1) : w.sort((p, B) => F(d, p) < F(d, B) ? S ? 1 : -1 : F(d, p) > F(d, B) ? S ? -1 : 1 : 0);
  }), N = y(() => e.value ? s.value : E.value.length), $ = y({
    get: () => {
      var d;
      return (d = c.value) != null ? d : [];
    },
    set: (d) => {
      o("update:itemsSelected", d);
    }
  });
  return {
    totalItems: E,
    selectItemsComputed: $,
    totalItemsLength: N,
    toggleSelectAll: (d) => {
      $.value = d ? E.value : [];
    },
    toggleSelectItem: (d) => {
      const S = d.checkbox;
      if (delete d.checkbox, delete d.index, S)
        $.value = $.value.filter((w) => JSON.stringify(w) !== JSON.stringify(d));
      else {
        const w = $.value;
        w.unshift(d), $.value = w;
      }
    }
  };
}
var Ra = {
  alternating: {
    type: Boolean,
    default: !1
  },
  buttonsPagination: {
    type: Boolean,
    default: !1
  },
  checkboxColumnWidth: {
    type: Number,
    default: null
  },
  currentPage: {
    type: Number,
    default: 1
  },
  emptyMessage: {
    type: String,
    default: "No Available Data"
  },
  expandColumnWidth: {
    type: Number,
    default: 36
  },
  filterOptions: {
    type: Array,
    default: null
  },
  fixedExpand: {
    type: Boolean,
    default: !1
  },
  fixedHeader: {
    type: Boolean,
    default: !0
  },
  fixedCheckbox: {
    type: Boolean,
    default: !1
  },
  fixedIndex: {
    type: Boolean,
    default: !1
  },
  headerTextDirection: {
    type: String,
    default: "left"
  },
  bodyTextDirection: {
    type: String,
    default: "left"
  },
  hideFooter: {
    type: Boolean,
    default: !1
  },
  hideRowsPerPage: {
    type: Boolean,
    default: !1
  },
  hideHeader: {
    type: Boolean,
    default: !1
  },
  indexColumnWidth: {
    type: Number,
    default: 60
  },
  itemsSelected: {
    type: Array,
    default: null
  },
  loading: {
    type: Boolean,
    deault: !1
  },
  rowsPerPage: {
    type: Number,
    default: 25
  },
  rowsItems: {
    type: Array,
    default: () => [25, 50, 100]
  },
  rowsPerPageMessage: {
    type: String,
    default: "rows per page:"
  },
  searchField: {
    type: [String, Array],
    default: ""
  },
  searchValue: {
    type: String,
    default: ""
  },
  serverOptions: {
    type: Object,
    default: null
  },
  serverItemsLength: {
    type: Number,
    default: 0
  },
  showIndex: {
    type: Boolean,
    default: !1
  },
  sortBy: {
    type: [String, Array],
    default: ""
  },
  sortType: {
    type: [String, Array],
    default: "asc"
  },
  multiSort: {
    type: Boolean,
    default: !1
  },
  tableMinHeight: {
    type: Number,
    default: 180
  },
  tableHeight: {
    type: Number,
    default: null
  },
  themeColor: {
    type: String,
    default: "#42b883"
  },
  tableClassName: {
    type: String,
    default: ""
  },
  headerClassName: {
    type: String,
    default: ""
  },
  headerItemClassName: {
    type: [Function, String],
    default: ""
  },
  bodyRowClassName: {
    type: [Function, String],
    default: ""
  },
  bodyExpandRowClassName: {
    type: [Function, String],
    default: ""
  },
  bodyItemClassName: {
    type: [Function, String],
    default: ""
  },
  noHover: {
    type: Boolean,
    default: !1
  },
  borderCell: {
    type: Boolean,
    default: !1
  },
  mustSort: {
    type: Boolean,
    default: !1
  },
  rowsOfPageSeparatorMessage: {
    type: String,
    default: "of"
  },
  clickEventType: {
    type: String,
    default: "single"
  }
};
const Oa = (a) => (pe("data-v-0c7093ee"), a = a(), fe(), a), La = ["onClick"], Fa = {
  key: 1,
  class: "header-text"
}, Ea = {
  key: 3,
  class: "multi-sort__number"
}, Da = ["onClick", "onDblclick"], Ha = ["onClick"], Ma = ["colspan"], Va = {
  key: 0,
  class: "vue3-easy-data-table__loading"
}, Wa = /* @__PURE__ */ Oa(() => /* @__PURE__ */ _("div", { class: "vue3-easy-data-table__loading-mask" }, null, -1)), qa = { class: "loading-entity" }, ja = {
  key: 1,
  class: "vue3-easy-data-table__message"
}, Ja = {
  key: 0,
  class: "vue3-easy-data-table__footer"
}, za = {
  key: 0,
  class: "pagination__rows-per-page"
}, Ua = { class: "pagination__items-index" }, Ga = /* @__PURE__ */ G({
  props: Se(U({}, Ra), {
    items: {
      type: Array,
      required: !0
    },
    headers: {
      type: Array,
      required: !0
    }
  }),
  emits: [
    "clickRow",
    "expandRow",
    "updateSort",
    "updateFilter",
    "update:itemsSelected",
    "update:serverOptions"
  ],
  setup(a, { expose: l, emit: e }) {
    const n = a;
    re((f) => ({
      "275a4262": t(ye),
      "56f410fe": t(O)
    }));
    const {
      clickEventType: c,
      bodyTextDirection: u,
      checkboxColumnWidth: m,
      currentPage: s,
      expandColumnWidth: r,
      filterOptions: o,
      fixedCheckbox: x,
      fixedExpand: v,
      fixedHeader: k,
      fixedIndex: P,
      headers: E,
      headerTextDirection: N,
      indexColumnWidth: $,
      items: W,
      itemsSelected: H,
      loading: d,
      mustSort: S,
      multiSort: w,
      rowsItems: p,
      rowsPerPage: B,
      searchField: C,
      searchValue: R,
      serverItemsLength: le,
      serverOptions: K,
      showIndex: b,
      sortBy: M,
      sortType: I,
      tableHeight: V,
      tableMinHeight: oe,
      themeColor: ge,
      rowsOfPageSeparatorMessage: ue
    } = wt(n), O = y(() => V.value ? `${V.value}px` : null), ye = y(() => `${oe.value}px`);
    Ye("themeColor", ge.value);
    const te = at(), ot = y(() => !!te.pagination), ut = y(() => !!te.loading), Fe = y(() => !!te.expand), it = y(() => !!te.body), Ee = D(), $e = D();
    Ye("dataTable", Ee);
    const De = D(!1);
    nt(() => {
      $e.value.addEventListener("scroll", () => {
        De.value = $e.value.scrollLeft > 0;
      });
    });
    const Ae = y(() => H.value !== null), ae = y(() => K.value !== null), {
      serverOptionsComputed: Be,
      updateServerOptionsPage: ct,
      updateServerOptionsSort: dt,
      updateServerOptionsRowsPerPage: vt
    } = Aa(K, w, e), {
      clientSortOptions: He,
      headerColumns: Me,
      headersForRender: ne,
      updateSortField: pt,
      isMultiSorting: ft,
      getMultiSortNumber: gt
    } = Sa(m, r, x, v, P, E, Fe, $, Ae, ae, S, Be, b, M, I, w, dt, e), {
      rowsItemsComputed: Ve,
      rowsPerPageRef: Y,
      updateRowsPerPage: yt
    } = $a(ae, p, K, B), {
      totalItems: mt,
      selectItemsComputed: ht,
      totalItemsLength: Ne,
      toggleSelectAll: bt,
      toggleSelectItem: xt
    } = Ta(He, o, ae, W, H, C, R, le, w, e), {
      currentPaginationNumber: Q,
      maxPaginationNumber: me,
      isLastPage: he,
      isFirstPage: be,
      nextPage: xe,
      prevPage: Pe,
      updatePage: _e,
      updateCurrentPaginationNumber: Pt
    } = Ia(s, ae, d, Ne, Y, K, ct), {
      currentPageFirstIndex: We,
      currentPageLastIndex: qe,
      multipleSelectStatus: je,
      pageItems: ie
    } = Ca(Q, Ae, ae, W, Y, ht, b, mt, Ne), we = y(() => Q.value === 0 ? 0 : (Q.value - 1) * Y.value), {
      expandingItemIndexList: Je,
      updateExpandingItemIndexList: _t,
      clearExpandingItemIndexList: ze
    } = Na(ie, we, e), {
      fixedHeaders: Te,
      lastFixedColumn: Ue,
      fixedColumnsInfos: kt
    } = wa(ne), {
      clickRow: Ge
    } = ka(c, Ae, b, e), Nt = (f) => {
      var X;
      const i = (X = f.width) != null ? X : Te.value.length ? 100 : null;
      if (i)
        return `width: ${i}px; min-width: ${i}px;`;
    }, Ke = (f, X = "th") => {
      if (!Te.value.length)
        return;
      const i = kt.value.find((L) => L.value === f);
      if (i)
        return `left: ${i.distance}px;z-index: ${X === "th" ? 3 : 1};position: sticky;`;
    };
    return de(d, (f, X) => {
      Be.value && f === !1 && X === !0 && (Pt(Be.value.page), ze());
    }), de(Y, (f) => {
      ae.value ? vt(f) : _e(1);
    }), de(R, () => {
      ae.value || _e(1);
    }), de([Q, He, C, R, o], () => {
      ze();
    }, { deep: !0 }), l({
      currentPageFirstIndex: We,
      currentPageLastIndex: qe,
      clientItemsLength: Ne,
      maxPaginationNumber: me,
      currentPaginationNumber: Q,
      isLastPage: he,
      isFirstPage: be,
      nextPage: xe,
      prevPage: Pe,
      updatePage: _e,
      rowsPerPageOptions: Ve,
      rowsPerPageActiveOption: Y,
      updateRowsPerPageActiveOption: yt
    }), (f, X) => (g(), h("div", {
      ref_key: "dataTable",
      ref: Ee,
      class: A(["vue3-easy-data-table", [f.tableClassName]])
    }, [
      _("div", {
        ref_key: "tableBody",
        ref: $e,
        class: A(["vue3-easy-data-table__main", {
          "fixed-header": t(k),
          "fixed-height": t(V),
          "show-shadow": De.value,
          "table-fixed": t(Te).length,
          hoverable: !f.noHover,
          "border-cell": f.borderCell
        }])
      }, [
        _("table", null, [
          _("colgroup", null, [
            (g(!0), h(z, null, ve(t(ne), (i, L) => (g(), h("col", {
              key: L,
              style: Oe(Nt(i))
            }, null, 4))), 128))
          ]),
          t(ne).length && !f.hideHeader ? (g(), h("thead", {
            key: 0,
            class: A(["vue3-easy-data-table__header", [f.headerClassName]])
          }, [
            _("tr", null, [
              (g(!0), h(z, null, ve(t(ne), (i, L) => (g(), h("th", {
                key: L,
                class: A([{
                  sortable: i.sortable,
                  none: i.sortable && i.sortType === "none",
                  desc: i.sortable && i.sortType === "desc",
                  asc: i.sortable && i.sortType === "asc",
                  shadow: i.value === t(Ue)
                }, typeof f.headerItemClassName == "string" ? f.headerItemClassName : f.headerItemClassName(i, L)]),
                style: Oe(Ke(i.value)),
                onClick: Le((T) => i.sortable && i.sortType ? t(pt)(i.value, i.sortType) : null, ["stop"])
              }, [
                i.text === "checkbox" ? (g(), ce(qt, {
                  key: t(je),
                  status: t(je),
                  onChange: t(bt)
                }, null, 8, ["status", "onChange"])) : (g(), h("span", {
                  key: 1,
                  class: A(["header", `direction-${t(N)}`])
                }, [
                  t(te)[`header-${i.value}`] ? J(f.$slots, `header-${i.value}`, Z(ke({ key: 0 }, i)), void 0, !0) : (g(), h("span", Fa, j(i.text), 1)),
                  i.sortable ? (g(), h("i", {
                    key: i.sortType ? i.sortType : "none",
                    class: A(["sortType-icon", { desc: i.sortType === "desc" }])
                  }, null, 2)) : q("", !0),
                  t(w) && t(ft)(i.value) ? (g(), h("span", Ea, j(t(gt)(i.value)), 1)) : q("", !0)
                ], 2))
              ], 14, La))), 128))
            ])
          ], 2)) : q("", !0),
          t(it) ? J(f.$slots, "body", Z(ke({ key: 1 }, t(ie))), void 0, !0) : t(Me).length ? (g(), h("tbody", {
            key: 2,
            class: A(["vue3-easy-data-table__body", { "row-alternation": f.alternating }])
          }, [
            J(f.$slots, "body-prepend", Z(Re({
              items: t(ie),
              pagination: {
                isFirstPage: t(be),
                isLastPage: t(he),
                currentPaginationNumber: t(Q),
                maxPaginationNumber: t(me),
                nextPage: t(xe),
                prevPage: t(Pe)
              },
              headers: t(ne)
            })), void 0, !0),
            (g(!0), h(z, null, ve(t(ie), (i, L) => (g(), h(z, { key: L }, [
              _("tr", {
                class: A([
                  { "even-row": (L + 1) % 2 === 0 },
                  typeof f.bodyRowClassName == "string" ? f.bodyRowClassName : f.bodyRowClassName(i, L)
                ]),
                onClick: (T) => t(Ge)(i, "single"),
                onDblclick: (T) => t(Ge)(i, "double")
              }, [
                (g(!0), h(z, null, ve(t(Me), (T, Qe) => (g(), h("td", {
                  key: Qe,
                  style: Oe(Ke(T, "td")),
                  class: A([{
                    shadow: T === t(Ue),
                    "can-expand": T === "expand"
                  }, typeof f.bodyItemClassName == "string" ? f.bodyItemClassName : f.bodyItemClassName(T, Qe), `direction-${t(u)}`]),
                  onClick: (Xe) => T === "expand" ? t(_t)(L + t(we), i, Xe) : null
                }, [
                  t(te)[`item-${T}`] ? J(f.$slots, `item-${T}`, Z(ke({ key: 0 }, i)), void 0, !0) : t(te)[`item-${T.toLowerCase()}`] ? J(f.$slots, `item-${T.toLowerCase()}`, Z(ke({ key: 1 }, i)), void 0, !0) : T === "expand" ? (g(), h("i", {
                    key: 2,
                    class: A(["expand-icon", { expanding: t(Je).includes(t(we) + L) }])
                  }, null, 2)) : T === "checkbox" ? (g(), ce(Gt, {
                    key: 3,
                    checked: i[T],
                    onChange: (Xe) => t(xt)(i)
                  }, null, 8, ["checked", "onChange"])) : (g(), h(z, { key: 4 }, [
                    Ze(j(t(Ba)(T, i)), 1)
                  ], 64))
                ], 14, Ha))), 128))
              ], 42, Da),
              t(Fe) && t(Je).includes(L + t(we)) ? (g(), h("tr", {
                key: 0,
                class: A([
                  { "even-row": (L + 1) % 2 === 0 },
                  typeof f.bodyExpandRowClassName == "string" ? f.bodyExpandRowClassName : f.bodyExpandRowClassName(i, L)
                ])
              }, [
                _("td", {
                  colspan: t(ne).length,
                  class: "expand"
                }, [
                  i.expandLoading ? (g(), ce(va, {
                    key: 0,
                    class: "expand-loading"
                  })) : q("", !0),
                  J(f.$slots, "expand", Z(Re(i)), void 0, !0)
                ], 8, Ma)
              ], 2)) : q("", !0)
            ], 64))), 128)),
            J(f.$slots, "body-append", Z(Re({
              items: t(ie),
              pagination: {
                isFirstPage: t(be),
                isLastPage: t(he),
                currentPaginationNumber: t(Q),
                maxPaginationNumber: t(me),
                nextPage: t(xe),
                prevPage: t(Pe),
                updatePage: t(_e)
              },
              headers: t(ne)
            })), void 0, !0)
          ], 2)) : q("", !0)
        ]),
        t(d) ? (g(), h("div", Va, [
          Wa,
          _("div", qa, [
            t(ut) ? J(f.$slots, "loading", { key: 0 }, void 0, !0) : (g(), ce(ia, { key: 1 }))
          ])
        ])) : q("", !0),
        !t(ie).length && !t(d) ? (g(), h("div", ja, j(f.emptyMessage), 1)) : q("", !0)
      ], 2),
      f.hideFooter ? q("", !0) : (g(), h("div", Ja, [
        f.hideRowsPerPage ? q("", !0) : (g(), h("div", za, [
          Ze(j(f.rowsPerPageMessage) + " ", 1),
          Ce(ta, {
            modelValue: t(Y),
            "onUpdate:modelValue": X[0] || (X[0] = (i) => St(Y) ? Y.value = i : null),
            "rows-items": t(Ve)
          }, null, 8, ["modelValue", "rows-items"])
        ])),
        _("div", Ua, j(`${t(We)}\u2013${t(qe)}`) + " " + j(t(ue)) + " " + j(t(Ne)), 1),
        t(ot) ? J(f.$slots, "pagination", Z(ke({ key: 1 }, {
          isFirstPage: t(be),
          isLastPage: t(he),
          currentPaginationNumber: t(Q),
          maxPaginationNumber: t(me),
          nextPage: t(xe),
          prevPage: t(Pe)
        })), void 0, !0) : (g(), ce(_a, {
          key: 2,
          "is-first-page": t(be),
          "is-last-page": t(he),
          onClickNextPage: t(xe),
          onClickPrevPage: t(Pe)
        }, Ct({ _: 2 }, [
          f.buttonsPagination ? {
            name: "buttonsPagination",
            fn: It(() => [
              Ce(ya, {
                "current-pagination-number": t(Q),
                "max-pagination-number": t(me),
                onUpdatePage: t(_e)
              }, null, 8, ["current-pagination-number", "max-pagination-number", "onUpdatePage"])
            ])
          } : void 0
        ]), 1032, ["is-first-page", "is-last-page", "onClickNextPage", "onClickPrevPage"]))
      ]))
    ], 2));
  }
});
var lt = /* @__PURE__ */ ee(Ga, [["__scopeId", "data-v-0c7093ee"]]);
typeof window < "u" && window.Vue && window.Vue.createApp({}).component("Vue3EasyDataTable", lt);
const Ka = /* @__PURE__ */ G({
  __name: "Table",
  props: {
    fields: { type: Object, required: !0 },
    paginator: { type: null, required: !0 }
  },
  setup(a) {
    const l = a, e = D([]), n = D([]);
    return At(() => {
      const { fields: c, paginator: u } = l;
      e.value = [];
      for (const m in c) {
        const s = c[m];
        e.value.push({
          text: s.label,
          value: s.columnName
        });
      }
      n.value = [];
      for (const m of u.data) {
        let s = {};
        for (const r in c) {
          const o = c[r];
          o.relationshipName ? s[o.columnName] = m[o.relationshipName][o.title] : s[o.columnName] = m[o.columnName];
        }
        n.value.push(s);
      }
    }), (c, u) => (g(), ce(t(lt), {
      class: "elevation-1",
      headers: e.value,
      items: n.value,
      "rows-per-page": a.paginator.perPage
    }, null, 8, ["headers", "items", "rows-per-page"]));
  }
});
const Qa = /* @__PURE__ */ st(Ka, [["__scopeId", "data-v-12f1e068"], ["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Components/Table.vue"]]), Xa = /* @__PURE__ */ G({
  __name: "Index",
  setup(a) {
    const { props: l } = Bt(), e = D(y(() => l.value.controller.resource)), n = D(y(() => l.value.controller.paginator)), c = D(y(() => l.value.controller.fields));
    return (u, m) => {
      const s = Tt("AppHead");
      return g(), h(z, null, [
        Ce(s, {
          title: e.value.pluralLabel
        }, null, 8, ["title"]),
        Ce(Qa, {
          "table-class-name": "customize-table",
          fields: c.value,
          paginator: n.value
        }, null, 8, ["fields", "paginator"])
      ], 64);
    };
  }
}), Za = /* @__PURE__ */ st(Xa, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Index.vue"]]);
export {
  Za as default
};
