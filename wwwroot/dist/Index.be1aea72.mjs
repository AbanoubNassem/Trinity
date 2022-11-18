import { d as G, u as se, t as Nt, b as y, p as Ye, e as at, r as D, f as nt, w as de, o as g, c as h, g as _, F as z, h as ve, i as t, n as A, j as q, k as J, l as Z, m as ke, q as Re, s as ce, v as j, x as Ze, y as Ce, z as St, A as Ct, B as It, C as Oe, D as Le, E as pe, G as fe, H as re, I as $t, J as At, _ as rt, K as Bt, L as Tt } from "./main.f5f158de.mjs";
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
    se((m) => ({
      "51ab8a49": t(o)
    }));
    const n = y(() => e.status === "allSelected"), c = () => {
      l("change", !n.value);
    }, o = re("themeColor");
    return (m, r) => (g(), h("div", {
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
    se((n) => ({
      fdaf7e9e: t(e)
    }));
    const e = re("themeColor");
    return (n, c) => (g(), h("div", {
      class: "easy-checkbox",
      onClick: c[0] || (c[0] = Le((o) => l("change"), ["stop", "prevent"]))
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
    se((v) => ({
      "7fe9410c": t(x)
    }));
    const n = D(!1), c = D(!1), o = re("dataTable");
    de(n, (v) => {
      if (v && o) {
        const k = window.innerHeight, P = o.value.getBoundingClientRect().height, E = o.value.getBoundingClientRect().top;
        k - (P + E) <= 100 ? c.value = !0 : c.value = !1;
      }
    });
    const m = y({
      get: () => e.modelValue,
      set: (v) => {
        l("update:modelValue", v);
      }
    }), r = (v) => {
      m.value = v, n.value = !1;
    }, s = (v, k) => {
      let P = v.parentNode;
      for (; P != null; ) {
        if (P.classList && P.classList.contains(k))
          return !0;
        P = P.parentNode;
      }
      return !1;
    }, u = (v) => {
      s(v.target, "easy-data-table__rows-selector") || (n.value = !1);
    };
    nt(() => {
      document.addEventListener("click", u);
    }), $t(() => {
      document.removeEventListener("click", u);
    });
    const x = re("themeColor");
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
          onClick: (E) => r(P)
        }, j(P), 11, Zt))), 128))
      ], 2)
    ]));
  }
});
var ta = /* @__PURE__ */ ee(ea, [["__scopeId", "data-v-09dad912"]]);
const Ie = (a) => (pe("data-v-1fa3a520"), a = a(), fe(), a), aa = { class: "lds-ring" }, na = /* @__PURE__ */ Ie(() => /* @__PURE__ */ _("div", null, null, -1)), ra = /* @__PURE__ */ Ie(() => /* @__PURE__ */ _("div", null, null, -1)), sa = /* @__PURE__ */ Ie(() => /* @__PURE__ */ _("div", null, null, -1)), la = /* @__PURE__ */ Ie(() => /* @__PURE__ */ _("div", null, null, -1)), oa = [
  na,
  ra,
  sa,
  la
], ua = /* @__PURE__ */ G({
  setup(a) {
    se((e) => ({
      26774109: t(l)
    }));
    const l = re("themeColor");
    return (e, n) => (g(), h("div", aa, oa));
  }
});
var ia = /* @__PURE__ */ ee(ua, [["__scopeId", "data-v-1fa3a520"]]);
const ca = { class: "loader-line" }, da = /* @__PURE__ */ G({
  setup(a) {
    se((e) => ({
      "0d327f57": t(l)
    }));
    const l = re("themeColor");
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
    se((r) => ({
      "40dd4f07": t(m)
    }));
    const n = 7, c = (r) => {
      r.type === "button" && !r.active && l("updatePage", r.page);
    }, o = y(() => {
      const r = [];
      if (e.maxPaginationNumber <= n)
        for (let s = 1; s <= e.maxPaginationNumber; s += 1)
          r.push({
            type: "button",
            page: s,
            active: s === e.currentPaginationNumber,
            activePrev: s + 1 === e.currentPaginationNumber
          });
      else if ([1, 2, e.maxPaginationNumber, e.maxPaginationNumber - 1].includes(e.currentPaginationNumber))
        for (let s = 1; s <= n; s += 1)
          if (s <= 3)
            r.push({
              type: "button",
              page: s,
              active: s === e.currentPaginationNumber,
              activePrev: s + 1 === e.currentPaginationNumber
            });
          else if (s === 4)
            r.push({
              type: "omission"
            });
          else {
            const u = e.maxPaginationNumber - (n - s);
            r.push({
              type: "button",
              page: u,
              active: u === e.currentPaginationNumber,
              activePrev: u + 1 === e.currentPaginationNumber
            });
          }
      else if ([3, 4].includes(e.currentPaginationNumber))
        for (let s = 1; s <= n; s += 1)
          s <= 5 ? r.push({
            type: "button",
            page: s,
            active: s === e.currentPaginationNumber,
            activePrev: s + 1 === e.currentPaginationNumber
          }) : s === 6 ? r.push({
            type: "omission"
          }) : r.push({
            type: "button",
            page: e.maxPaginationNumber,
            active: e.maxPaginationNumber === e.currentPaginationNumber,
            activePrev: s + 1 === e.currentPaginationNumber
          });
      else if ([e.maxPaginationNumber - 2, e.maxPaginationNumber - 3].includes(e.currentPaginationNumber))
        for (let s = 1; s <= n; s += 1)
          if (s === 1)
            r.push({
              type: "button",
              page: 1,
              active: e.currentPaginationNumber === 1,
              activePrev: s + 1 === e.currentPaginationNumber
            });
          else if (s === 2)
            r.push({
              type: "omission"
            });
          else {
            const u = e.maxPaginationNumber - (n - s);
            r.push({
              type: "button",
              page: u,
              active: u === e.currentPaginationNumber,
              activePrev: u + 1 === e.currentPaginationNumber
            });
          }
      else
        for (let s = 1; s <= n; s += 1)
          if (s === 1)
            r.push({
              type: "button",
              page: 1,
              active: e.currentPaginationNumber === 1,
              activePrev: s + 1 === e.currentPaginationNumber
            });
          else if (s === 2 || s === 6)
            r.push({
              type: "omission"
            });
          else if (s === 7)
            r.push({
              type: "button",
              page: e.maxPaginationNumber,
              active: e.maxPaginationNumber === e.currentPaginationNumber,
              activePrev: s + 1 === e.currentPaginationNumber
            });
          else {
            const u = 4 - s, x = e.currentPaginationNumber - u;
            r.push({
              type: "button",
              page: x,
              active: x === e.currentPaginationNumber,
              activePrev: x + 1 === e.currentPaginationNumber
            });
          }
      return r;
    }), m = re("themeColor");
    return (r, s) => (g(), h("div", pa, [
      (g(!0), h(z, null, ve(t(o), (u, x) => (g(), h("div", {
        key: x,
        class: A(["item", {
          button: u.type === "button",
          active: u.type === "button" && u.active,
          "active-prev": u.type === "button" && u.activePrev,
          omission: u.type === "omission"
        }]),
        onClick: (v) => c(u)
      }, j(u.type === "button" ? u.page : "..."), 11, fa))), 128))
    ]));
  }
});
var ya = /* @__PURE__ */ ee(ga, [["__scopeId", "data-v-4c681fa2"]]);
const st = (a) => (pe("data-v-c9da5286"), a = a(), fe(), a), ma = /* @__PURE__ */ st(() => /* @__PURE__ */ _("span", { class: "arrow arrow-right" }, null, -1)), ha = [
  ma
], ba = /* @__PURE__ */ st(() => /* @__PURE__ */ _("span", { class: "arrow arrow-left" }, null, -1)), xa = [
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
        onClick: c[0] || (c[0] = (o) => l("clickPrevPage"))
      }, ha, 2),
      t(e).buttonsPagination ? J(n.$slots, "buttonsPagination", { key: 0 }, void 0, !0) : q("", !0),
      _("div", {
        class: A(["next-page__click-button", { "last-page": a.isLastPage }]),
        onClick: c[1] || (c[1] = (o) => l("clickNextPage"))
      }, xa, 2)
    ], 64));
  }
});
var _a = /* @__PURE__ */ ee(Pa, [["__scopeId", "data-v-c9da5286"]]);
function ka(a, l, e, n) {
  return {
    clickRow: (o, m) => {
      if (a.value !== m)
        return;
      const r = U({}, o);
      if (l.value) {
        const { checkbox: s } = o;
        delete r.checkbox, r.isSelected = s;
      }
      if (e.value) {
        const { index: s } = o;
        delete r.index, r.indexInCurrentPage = s;
      }
      n("clickRow", r);
    }
  };
}
function wa(a, l, e) {
  const n = D([]);
  return {
    expandingItemIndexList: n,
    updateExpandingItemIndexList: (m, r, s) => {
      s.stopPropagation();
      const u = n.value.indexOf(m);
      if (u !== -1)
        n.value.splice(u, 1);
      else {
        const x = a.value.findIndex((v) => JSON.stringify(v) === JSON.stringify(r));
        e("expandRow", l.value + x), n.value.push(l.value + x);
      }
    },
    clearExpandingItemIndexList: () => {
      n.value = [];
    }
  };
}
function Na(a) {
  const l = y(() => a.value.filter((c) => c.fixed)), e = y(() => l.value.length ? l.value[l.value.length - 1].value : ""), n = y(() => {
    if (!l.value.length)
      return [];
    const c = l.value.map((o) => {
      var m;
      return (m = o.width) != null ? m : 100;
    });
    return l.value.map((o, m) => {
      var r, s;
      return {
        value: o.value,
        fixed: (r = o.fixed) != null ? r : !0,
        width: (s = o.width) != null ? s : 100,
        distance: m === 0 ? 0 : c.reduce((u, x, v) => {
          let k = u;
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
function Sa(a, l, e, n, c, o, m, r, s, u, x, v, k, P, E, w, $, W) {
  const H = y(() => o.value.findIndex((b) => b.fixed) !== -1), d = y(() => H.value ? o.value.filter((b) => b.fixed) : []), S = y(() => o.value.filter((b) => !b.fixed)), p = D(((b, M) => Array.isArray(b) && Array.isArray(M) ? {
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
      width: r.value
    } : { text: "#", value: "index" }, ...V] : oe = V;
    let ge = [];
    return s.value ? ge = [e.value || H.value ? {
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
      if (M === "none" ? I = "asc" : M === "asc" ? I = "desc" : I = x.value ? "asc" : null, u.value && $(b, I), p.value && Array.isArray(p.value.sortBy) && Array.isArray(p.value.sortDesc)) {
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
function Ca(a, l, e, n, c, o, m, r, s) {
  const u = y(() => (a.value - 1) * c.value + 1), x = y(() => e.value ? Math.min(s.value, a.value * c.value) : Math.min(r.value.length, a.value * c.value)), v = y(() => e.value ? n.value : r.value.slice(u.value - 1, x.value)), k = y(() => m.value ? v.value.map((w, $) => U({ index: u.value + $ }, w)) : v.value), P = y(() => o.value.length === 0 || o.value.every(($) => r.value.findIndex((W) => JSON.stringify($) === JSON.stringify(W)) === -1) ? "noneSelected" : o.value.length === r.value.length && o.value.every((W) => r.value.findIndex((H) => JSON.stringify(W) === JSON.stringify(H)) !== -1) ? "allSelected" : "partSelected"), E = y(() => l.value ? P.value === "allSelected" ? k.value.map((w) => U({ checkbox: !0 }, w)) : P.value === "noneSelected" ? k.value.map((w) => U({ checkbox: !1 }, w)) : k.value.map((w) => {
    const $ = o.value.findIndex((W) => {
      const H = U({}, w);
      return delete H.index, JSON.stringify(W) === JSON.stringify(H);
    }) !== -1;
    return U({ checkbox: $ }, w);
  }) : k.value);
  return {
    currentPageFirstIndex: u,
    currentPageLastIndex: x,
    multipleSelectStatus: P,
    pageItems: E
  };
}
function Ia(a, l, e, n, c, o, m) {
  const r = D(o.value ? o.value.page : a.value), s = y(() => Math.ceil(n.value / c.value)), u = y(() => s.value === 0 || r.value === s.value), x = y(() => r.value === 1);
  return {
    currentPaginationNumber: r,
    maxPaginationNumber: s,
    isLastPage: u,
    isFirstPage: x,
    nextPage: () => {
      if (n.value !== 0 && !u.value && !e.value)
        if (l.value) {
          const w = r.value + 1;
          m(w);
        } else
          r.value += 1;
    },
    prevPage: () => {
      if (n.value !== 0 && !x.value && !e.value)
        if (l.value) {
          const w = r.value - 1;
          m(w);
        } else
          r.value -= 1;
    },
    updatePage: (w) => {
      e.value || (l.value ? m(w) : r.value = w);
    },
    updateCurrentPaginationNumber: (w) => {
      r.value = w;
    }
  };
}
function $a(a, l, e, n) {
  const c = y(() => !a.value && l.value.findIndex((r) => r === n.value) === -1 ? [n.value, ...l.value] : l.value), o = D(e.value ? e.value.rowsPerPage : n.value);
  return {
    rowsItemsComputed: c,
    rowsPerPageRef: o,
    updateRowsPerPage: (r) => {
      o.value = r;
    }
  };
}
function Aa(a, l, e) {
  const n = y({
    get: () => {
      if (a.value) {
        const {
          page: r,
          rowsPerPage: s,
          sortBy: u,
          sortType: x
        } = a.value;
        return {
          page: r,
          rowsPerPage: s,
          sortBy: u != null ? u : null,
          sortType: x != null ? x : null
        };
      }
      return null;
    },
    set: (r) => {
      e("update:serverOptions", r);
    }
  });
  return {
    serverOptionsComputed: n,
    updateServerOptionsPage: (r) => {
      n.value && (n.value = Se(U({}, n.value), {
        page: r
      }));
    },
    updateServerOptionsSort: (r, s) => {
      if (n.value)
        if (l.value && Array.isArray(n.value.sortBy) && Array.isArray(n.value.sortType)) {
          const u = n.value.sortBy.findIndex((x) => x === r);
          u === -1 && s !== null && (n.value.sortBy.push(r), n.value.sortType.push(s)), s === null ? (n.value.sortBy.splice(u, 1), n.value.sortType.splice(u, 1)) : n.value.sortType[u] = s;
        } else
          n.value = Se(U({}, n.value), {
            sortBy: s !== null ? r : null,
            sortType: s
          });
    },
    updateServerOptionsRowsPerPage: (r) => {
      n.value && (n.value = Se(U({}, n.value), {
        page: 1,
        rowsPerPage: r
      }));
    }
  };
}
function F(a, l) {
  if (a.includes(".")) {
    let e = "";
    const n = a.split("."), { length: c } = n;
    let o = 0;
    for (; o < c && (e = o === 0 ? l[n[o]] : e[n[o]], o += 1, e !== void 0); )
      ;
    return e;
  }
  return l[a];
}
function Ba(a, l) {
  const e = F(a, l);
  return Array.isArray(e) ? e.join(",") : e;
}
function Ta(a, l, e, n, c, o, m, r, s, u) {
  const x = (d) => {
    if (typeof o.value == "string" && o.value !== "")
      return F(o.value, d);
    if (Array.isArray(o.value)) {
      let S = "";
      return o.value.forEach((N) => {
        S += F(N, d);
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
      d = d.filter((N) => {
        const { field: p, comparison: B, criteria: C } = S;
        if (typeof B == "function")
          return B(F(p, N), C);
        const R = F(p, N);
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
    l.value && u("updateFilter", d);
  }, { immediate: !0, deep: !0 });
  function P(d, S, N, p) {
    const B = d[p], C = S[p];
    return (p === 0 ? N : P(d, S, N, p - 1)).sort((le, K) => {
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
    const { sortBy: d, sortDesc: S } = a.value, N = [...k.value];
    return s && Array.isArray(d) && Array.isArray(S) ? d.length === 0 ? N : P(d, S, N, d.length - 1) : N.sort((p, B) => F(d, p) < F(d, B) ? S ? 1 : -1 : F(d, p) > F(d, B) ? S ? -1 : 1 : 0);
  }), w = y(() => e.value ? r.value : E.value.length), $ = y({
    get: () => {
      var d;
      return (d = c.value) != null ? d : [];
    },
    set: (d) => {
      u("update:itemsSelected", d);
    }
  });
  return {
    totalItems: E,
    selectItemsComputed: $,
    totalItemsLength: w,
    toggleSelectAll: (d) => {
      $.value = d ? E.value : [];
    },
    toggleSelectItem: (d) => {
      const S = d.checkbox;
      if (delete d.checkbox, delete d.index, S)
        $.value = $.value.filter((N) => JSON.stringify(N) !== JSON.stringify(d));
      else {
        const N = $.value;
        N.unshift(d), $.value = N;
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
    se((f) => ({
      "275a4262": t(ye),
      "56f410fe": t(O)
    }));
    const {
      clickEventType: c,
      bodyTextDirection: o,
      checkboxColumnWidth: m,
      currentPage: r,
      expandColumnWidth: s,
      filterOptions: u,
      fixedCheckbox: x,
      fixedExpand: v,
      fixedHeader: k,
      fixedIndex: P,
      headers: E,
      headerTextDirection: w,
      indexColumnWidth: $,
      items: W,
      itemsSelected: H,
      loading: d,
      mustSort: S,
      multiSort: N,
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
    } = Nt(n), O = y(() => V.value ? `${V.value}px` : null), ye = y(() => `${oe.value}px`);
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
    } = Aa(K, N, e), {
      clientSortOptions: He,
      headerColumns: Me,
      headersForRender: ne,
      updateSortField: pt,
      isMultiSorting: ft,
      getMultiSortNumber: gt
    } = Sa(m, s, x, v, P, E, Fe, $, Ae, ae, S, Be, b, M, I, N, dt, e), {
      rowsItemsComputed: Ve,
      rowsPerPageRef: Y,
      updateRowsPerPage: yt
    } = $a(ae, p, K, B), {
      totalItems: mt,
      selectItemsComputed: ht,
      totalItemsLength: we,
      toggleSelectAll: bt,
      toggleSelectItem: xt
    } = Ta(He, u, ae, W, H, C, R, le, N, e), {
      currentPaginationNumber: Q,
      maxPaginationNumber: me,
      isLastPage: he,
      isFirstPage: be,
      nextPage: xe,
      prevPage: Pe,
      updatePage: _e,
      updateCurrentPaginationNumber: Pt
    } = Ia(r, ae, d, we, Y, K, ct), {
      currentPageFirstIndex: We,
      currentPageLastIndex: qe,
      multipleSelectStatus: je,
      pageItems: ie
    } = Ca(Q, Ae, ae, W, Y, ht, b, mt, we), Ne = y(() => Q.value === 0 ? 0 : (Q.value - 1) * Y.value), {
      expandingItemIndexList: Je,
      updateExpandingItemIndexList: _t,
      clearExpandingItemIndexList: ze
    } = wa(ie, Ne, e), {
      fixedHeaders: Te,
      lastFixedColumn: Ue,
      fixedColumnsInfos: kt
    } = Na(ne), {
      clickRow: Ge
    } = ka(c, Ae, b, e), wt = (f) => {
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
    }), de([Q, He, C, R, u], () => {
      ze();
    }, { deep: !0 }), l({
      currentPageFirstIndex: We,
      currentPageLastIndex: qe,
      clientItemsLength: we,
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
              style: Oe(wt(i))
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
                  class: A(["header", `direction-${t(w)}`])
                }, [
                  t(te)[`header-${i.value}`] ? J(f.$slots, `header-${i.value}`, Z(ke({ key: 0 }, i)), void 0, !0) : (g(), h("span", Fa, j(i.text), 1)),
                  i.sortable ? (g(), h("i", {
                    key: i.sortType ? i.sortType : "none",
                    class: A(["sortType-icon", { desc: i.sortType === "desc" }])
                  }, null, 2)) : q("", !0),
                  t(N) && t(ft)(i.value) ? (g(), h("span", Ea, j(t(gt)(i.value)), 1)) : q("", !0)
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
                  }, typeof f.bodyItemClassName == "string" ? f.bodyItemClassName : f.bodyItemClassName(T, Qe), `direction-${t(o)}`]),
                  onClick: (Xe) => T === "expand" ? t(_t)(L + t(Ne), i, Xe) : null
                }, [
                  t(te)[`item-${T}`] ? J(f.$slots, `item-${T}`, Z(ke({ key: 0 }, i)), void 0, !0) : t(te)[`item-${T.toLowerCase()}`] ? J(f.$slots, `item-${T.toLowerCase()}`, Z(ke({ key: 1 }, i)), void 0, !0) : T === "expand" ? (g(), h("i", {
                    key: 2,
                    class: A(["expand-icon", { expanding: t(Je).includes(t(Ne) + L) }])
                  }, null, 2)) : T === "checkbox" ? (g(), ce(Gt, {
                    key: 3,
                    checked: i[T],
                    onChange: (Xe) => t(xt)(i)
                  }, null, 8, ["checked", "onChange"])) : (g(), h(z, { key: 4 }, [
                    Ze(j(t(Ba)(T, i)), 1)
                  ], 64))
                ], 14, Ha))), 128))
              ], 42, Da),
              t(Fe) && t(Je).includes(L + t(Ne)) ? (g(), h("tr", {
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
        _("div", Ua, j(`${t(We)}\u2013${t(qe)}`) + " " + j(t(ue)) + " " + j(t(we)), 1),
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
      const { fields: c, paginator: o } = l;
      e.value = [];
      for (const m in c) {
        const r = c[m];
        e.value.push({
          text: r.label,
          value: r.attribute
        });
      }
      n.value = [];
      for (const m of o.data) {
        let r = {};
        for (const s in c) {
          const u = c[s].attribute;
          r[u] = m[u];
        }
        n.value.push(r);
      }
    }), (c, o) => (g(), ce(t(lt), {
      class: "elevation-1",
      headers: e.value,
      items: n.value,
      "rows-per-page": a.paginator.perPage
    }, null, 8, ["headers", "items", "rows-per-page"]));
  }
});
const Qa = /* @__PURE__ */ rt(Ka, [["__scopeId", "data-v-12f1e068"], ["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Components/Table.vue"]]), Xa = /* @__PURE__ */ G({
  __name: "Index",
  setup(a) {
    const { props: l } = Bt(), e = D(y(() => l.value.controller.resource)), n = D(y(() => l.value.controller.paginator)), c = D(y(() => l.value.controller.fields));
    return (o, m) => {
      const r = Tt("AppHead");
      return g(), h(z, null, [
        Ce(r, {
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
}), Za = /* @__PURE__ */ rt(Xa, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Index.vue"]]);
export {
  Za as default
};
