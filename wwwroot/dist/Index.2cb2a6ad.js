import { u as Z, a as G, r as m, x as L, i as ee, j as t, y as k, B as p, w as te, F as x, z as le, d as ae, S as ie, H as se } from "./main.c6c28297.js";
import { u as re, t as ne, T as oe } from "./trinity_resource_fields.01609cb6.js";
import { D as ce, C as O } from "./column.esm.c14a0771.js";
function me() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get(s, i) {
      return s.get(i.toString());
    }
  });
}
const ue = () => {
  var P, C, F, M;
  const s = Z(), { resource: i, data: l } = G(), N = re(), h = me(), [d, v] = m.exports.useState(!1), R = m.exports.useRef(null), o = m.exports.useRef(null), I = m.exports.useRef(), D = m.exports.useRef(null), [j, B] = m.exports.useState(null), S = Array();
  for (const e of (P = l == null ? void 0 : l.data) != null ? P : []) {
    let r = {};
    for (const n of N)
      if (n.relationshipName) {
        const b = n.relationshipName.split(".");
        let c = e;
        for (let T = 0; T < b.length; T++)
          c !== null && (c = c[b[T]]);
        r[n.columnName] = c !== null ? c[n.title] : null;
      } else
        r[n.columnName] = e[n.columnName];
    S.push(r);
  }
  m.exports.useEffect(() => {
    o.current && !d && (o.current.value = h.globalSearch);
  }, [d, l]);
  const g = N.flatMap((e) => e.toggleable ? {
    field: e.columnName,
    header: e.label,
    isToggledHiddenByDefault: e.isToggledHiddenByDefault
  } : []), [V, H] = m.exports.useState(g.filter((e) => !e.isToggledHiddenByDefault)), $ = N.filter((e) => !e.toggleable || V.find((r) => r.field === e.columnName));
  let a;
  const W = (e) => {
    a = e, f();
  }, J = L(() => f(), 300), w = Array();
  for (const e of (C = JSON.parse(h.sort)) != null ? C : [])
    w.push({
      field: e.field,
      order: e.order
    });
  let u = {};
  const A = (F = JSON.parse(h.columnsSearch)) != null ? F : {};
  N.forEach((e) => {
    e.searchable && !e.isGloballySearchable && (u[e.columnName] = {
      value: A[e.columnName],
      matchMode: ee.CONTAINS
    });
  });
  const z = L((e) => {
    u = e.filters, f();
  }, 300), f = () => {
    var r, n, b, c;
    let e = {};
    if (e.page = a === void 0 || a.page === void 0 ? (r = l == null ? void 0 : l.currentPage) != null ? r : 1 : a.page + 1, e.perPage = (b = (n = a == null ? void 0 : a.rows) != null ? n : l == null ? void 0 : l.perPage) != null ? b : 10, a != null && a.multiSortMeta && (e.sort = JSON.stringify(a.multiSortMeta)), (c = o.current) != null && c.value && (e.globalSearch = o.current.value), u) {
      const T = {};
      Object.entries(u).forEach(([Y, y]) => {
        "value" in y && y.value && (T[Y] = y.value);
      }), Object.keys(T).length && (e.columnsSearch = JSON.stringify(T));
    }
    ae.Inertia.get(`/${s.prefix}/${i == null ? void 0 : i.pluralLabel.toLowerCase()}`, e, {
      preserveState: !0,
      preserveScroll: !0,
      replace: !0,
      onStart: () => v(!0),
      onFinish: () => {
        v(!1);
      }
    });
  }, U = ((M = o.current) == null ? void 0 : M.value) || (a == null ? void 0 : a.multiSortMeta) || !!Object.entries(u).filter(([, e]) => e.value).length;
  function E() {
    u = {}, o.current.value = "", a = void 0, f();
  }
  let K = N.filter((e) => e.exportable);
  const _ = (e) => {
    var r;
    (r = R.current) == null || r.exportCSV(e);
  }, q = /* @__PURE__ */ t(k.Fragment, {}, void 0, !1, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 153,
    columnNumber: 33
  }, globalThis), Q = /* @__PURE__ */ t(k.Fragment, {
    children: [
      /* @__PURE__ */ t(p, {
        className: "p-button-success mr-2",
        icon: "pi pi-plus",
        label: "New",
        onClick: () => ne(`/${s.prefix}/${i == null ? void 0 : i.name}/create`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 157,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(p, {
        className: "p-button-danger",
        icon: "pi pi-trash",
        label: "Delete"
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 156,
    columnNumber: 9
  }, globalThis), X = /* @__PURE__ */ t("div", {
    className: "flex justify-content-between flex-column sm:flex-row",
    children: [
      /* @__PURE__ */ t("div", {
        className: "flex mb-3",
        children: [
          !!K.length && /* @__PURE__ */ t(p, {
            icon: "pi pi-external-link",
            className: "p-button-primary mb-2 mr-2",
            label: "Export",
            onClick: _
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 175,
            columnNumber: 21
          }, globalThis),
          U && /* @__PURE__ */ t(p, {
            type: "button",
            icon: "pi pi-filter-slash",
            label: "Clear",
            className: "p-button-outlined",
            onClick: E
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 183,
            columnNumber: 21
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 173,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t("div", {
        className: "flex",
        children: [
          /* @__PURE__ */ t("div", {
            children: /* @__PURE__ */ t("span", {
              className: "p-input-icon-left",
              children: [
                /* @__PURE__ */ t("i", {
                  className: "pi pi-search"
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 195,
                  columnNumber: 25
                }, globalThis),
                /* @__PURE__ */ t(te, {
                  ref: o,
                  placeholder: "Keyword Search",
                  onChange: J
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 196,
                  columnNumber: 25
                }, globalThis),
                o.current && o.current.value && d && /* @__PURE__ */ t("i", {
                  className: "pi pi-spin pi-spinner global-search-icon"
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 201,
                  columnNumber: 101
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 194,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 193,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ t("div", {
            id: "toggleableFields",
            className: "mx-2",
            ref: I,
            children: g.length > 0 && /* @__PURE__ */ t(x, {
              children: [
                /* @__PURE__ */ t(p, {
                  className: "p-button-rounded p-button-text",
                  icon: "pi pi-table",
                  onClick: () => D.current.show()
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 212,
                  columnNumber: 29
                }, globalThis),
                /* @__PURE__ */ t(le, {
                  ref: D,
                  appendTo: I.current,
                  className: "hidden",
                  optionLabel: "header",
                  panelClassName: "toggleableFields",
                  options: g,
                  value: V,
                  multiple: !0,
                  onChange: (e) => {
                    H(e.value);
                  }
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 218,
                  columnNumber: 29
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 211,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 192,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 172,
    columnNumber: 9
  }, globalThis);
  return /* @__PURE__ */ t(x, {
    children: [
      /* @__PURE__ */ t(oe, {
        left: q,
        right: Q
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 240,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(ce, {
        ref: R,
        selection: j,
        onSelectionChange: (e) => B(e.value),
        header: X,
        first: (l.currentPage - 1) * l.perPage,
        lazy: !0,
        loading: d,
        multiSortMeta: w,
        paginator: !0,
        paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
        rows: l == null ? void 0 : l.perPage,
        rowsPerPageOptions: s.rowsPerPageOptions,
        showGridlines: i == null ? void 0 : i.showGridlines,
        stripedRows: i == null ? void 0 : i.stripedRows,
        totalRecords: l == null ? void 0 : l.totalCount,
        value: S,
        currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
        filterDisplay: "row",
        globalFilter: "contains",
        removableSort: !0,
        responsiveLayout: "scroll",
        sortMode: "multiple",
        onPage: W,
        onFilter: z,
        filters: u,
        onSort: W,
        children: [
          /* @__PURE__ */ t(O, {
            exportable: !1,
            selectionMode: "multiple",
            style: { width: "3rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 273,
            columnNumber: 17
          }, globalThis),
          $.map((e) => {
            var n;
            return /* @__PURE__ */ t(O, {
              body: (b) => d ? /* @__PURE__ */ t(ie, {}, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                lineNumber: 280,
                columnNumber: 60
              }, globalThis) : /* @__PURE__ */ t("div", {
                children: b[e.columnName]
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                lineNumber: 280,
                columnNumber: 75
              }, globalThis),
              field: e.columnName,
              header: e.label,
              sortable: e.sortable,
              showFilterMenu: !1,
              showFilterMatchModes: !1,
              showFilterOperator: !1,
              showClearButton: !0,
              filterMatchMode: "contains",
              excludeGlobalFilter: !e.isGloballySearchable,
              filter: e.searchable && !e.isGloballySearchable,
              filterPlaceholder: (n = e.searchPlaceholder) != null ? n : `Search by ${e.label}`,
              exportable: e.exportable
            }, e.columnName, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 282,
              columnNumber: 25
            }, globalThis);
          })
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 245,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 239,
    columnNumber: 9
  }, globalThis);
}, de = () => {
  const { resource: s } = G();
  return /* @__PURE__ */ t(x, {
    children: [
      /* @__PURE__ */ t(se, {
        title: s == null ? void 0 : s.pluralLabel
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
        lineNumber: 11,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t("div", {
        className: "grid",
        children: /* @__PURE__ */ t("div", {
          className: "col-12",
          children: [
            /* @__PURE__ */ t("h5", {
              children: s == null ? void 0 : s.pluralLabel
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
              lineNumber: 15,
              columnNumber: 21
            }, globalThis),
            /* @__PURE__ */ t(ue, {}, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
              lineNumber: 17,
              columnNumber: 21
            }, globalThis)
          ]
        }, void 0, !0, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
          lineNumber: 14,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, globalThis);
};
export {
  de as default
};
