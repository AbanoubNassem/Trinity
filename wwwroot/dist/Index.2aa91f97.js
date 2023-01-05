import { u as le, a as G, r as c, y as L, k as ie, j as t, R as O, B as N, x as ae, F as h, z as se, S as $, d as ne, H as re } from "./main.b59fcee8.js";
import { u as oe, t as B, T as me } from "./trinity_resource_fields.2a9ae9b3.js";
import { D as ce, C as v } from "./column.esm.82ff96fe.js";
function ue() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get(a, l) {
      return a.get(l.toString());
    }
  });
}
const be = () => {
  var w, F, M, k;
  const a = le(), { resource: l, data: i } = G(), p = oe(), y = ue(), [d, R] = c.exports.useState(!1), I = c.exports.useRef(null), o = c.exports.useRef(null), D = c.exports.useRef(), S = c.exports.useRef(null), [j, H] = c.exports.useState(null), V = Array();
  for (const e of (w = i == null ? void 0 : i.data) != null ? w : []) {
    let n = {};
    for (const r of p)
      if (r.relationshipName) {
        const b = r.relationshipName.split(".");
        let m = e;
        for (let T = 0; T < b.length; T++)
          m !== null && (m = m[b[T]]);
        n[r.columnName] = m !== null ? m[r.title] : null;
      } else
        n[r.columnName] = e[r.columnName];
    n[l == null ? void 0 : l.primaryKeyColumn] = e[l == null ? void 0 : l.primaryKeyColumn], V.push(n);
  }
  c.exports.useEffect(() => {
    o.current && !d && (o.current.value = y.globalSearch);
  }, [d, i]);
  const g = p.flatMap((e) => e.toggleable ? {
    field: e.columnName,
    header: e.label,
    isToggledHiddenByDefault: e.isToggledHiddenByDefault
  } : []), [W, J] = c.exports.useState(g.filter((e) => !e.isToggledHiddenByDefault)), K = p.filter((e) => !e.toggleable || W.find((n) => n.field === e.columnName));
  let s;
  const C = (e) => {
    s = e, f();
  }, A = L(() => f(), 300), P = Array();
  for (const e of (F = JSON.parse(y.sort)) != null ? F : [])
    P.push({
      field: e.field,
      order: e.order
    });
  let u = {};
  const z = (M = JSON.parse(y.columnsSearch)) != null ? M : {};
  p.forEach((e) => {
    e.searchable && !e.isGloballySearchable && (u[e.columnName] = {
      value: z[e.columnName],
      matchMode: ie.CONTAINS
    });
  });
  const U = L((e) => {
    u = e.filters, f();
  }, 300), f = () => {
    var n, r, b, m;
    let e = {};
    if (e.page = s === void 0 || s.page === void 0 ? (n = i == null ? void 0 : i.currentPage) != null ? n : 1 : s.page + 1, e.perPage = (b = (r = s == null ? void 0 : s.rows) != null ? r : i == null ? void 0 : i.perPage) != null ? b : 10, s != null && s.multiSortMeta && (e.sort = JSON.stringify(s.multiSortMeta)), (m = o.current) != null && m.value && (e.globalSearch = o.current.value), u) {
      const T = {};
      Object.entries(u).forEach(([te, x]) => {
        "value" in x && x.value && (T[te] = x.value);
      }), Object.keys(T).length && (e.columnsSearch = JSON.stringify(T));
    }
    ne.Inertia.get(`/${a.prefix}/${l == null ? void 0 : l.pluralLabel.toLowerCase()}`, e, {
      preserveState: !0,
      preserveScroll: !0,
      replace: !0,
      onStart: () => R(!0),
      onFinish: () => {
        R(!1);
      }
    });
  }, E = ((k = o.current) == null ? void 0 : k.value) || (s == null ? void 0 : s.multiSortMeta) || !!Object.entries(u).filter(([, e]) => e.value).length;
  function _() {
    u = {}, o.current.value = "", s = void 0, f();
  }
  let q = p.filter((e) => e.exportable);
  const Q = (e) => {
    var n;
    (n = I.current) == null || n.exportCSV(e);
  }, X = /* @__PURE__ */ t(O.Fragment, {}, void 0, !1, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 154,
    columnNumber: 33
  }, globalThis), Y = /* @__PURE__ */ t(O.Fragment, {
    children: [
      /* @__PURE__ */ t(N, {
        className: "p-button-success mr-2",
        icon: "pi pi-plus",
        label: "New",
        onClick: () => B(`/${a.prefix}/${l == null ? void 0 : l.name}/create`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(N, {
        className: "p-button-danger",
        icon: "pi pi-trash",
        label: "Delete"
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 157,
    columnNumber: 9
  }, globalThis), Z = /* @__PURE__ */ t("div", {
    className: "flex justify-content-between flex-column sm:flex-row",
    children: [
      /* @__PURE__ */ t("div", {
        className: "flex mb-3",
        children: [
          !!q.length && /* @__PURE__ */ t(N, {
            icon: "pi pi-external-link",
            className: "p-button-primary mb-2 mr-2",
            label: "Export",
            onClick: Q
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 176,
            columnNumber: 21
          }, globalThis),
          E && /* @__PURE__ */ t(N, {
            type: "button",
            icon: "pi pi-filter-slash",
            label: "Clear",
            className: "p-button-outlined",
            onClick: _
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 184,
            columnNumber: 21
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 174,
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
                  lineNumber: 196,
                  columnNumber: 25
                }, globalThis),
                /* @__PURE__ */ t(ae, {
                  ref: o,
                  placeholder: "Keyword Search",
                  onChange: A
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 197,
                  columnNumber: 25
                }, globalThis),
                o.current && o.current.value && d && /* @__PURE__ */ t("i", {
                  className: "pi pi-spin pi-spinner global-search-icon"
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 202,
                  columnNumber: 101
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 195,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 194,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ t("div", {
            id: "toggleableFields",
            className: "mx-2",
            ref: D,
            children: g.length > 0 && /* @__PURE__ */ t(h, {
              children: [
                /* @__PURE__ */ t(N, {
                  className: "p-button-rounded p-button-text",
                  icon: "pi pi-table",
                  onClick: () => S.current.show()
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 213,
                  columnNumber: 29
                }, globalThis),
                /* @__PURE__ */ t(se, {
                  ref: S,
                  appendTo: D.current,
                  className: "hidden",
                  optionLabel: "header",
                  panelClassName: "toggleableFields",
                  options: g,
                  value: W,
                  multiple: !0,
                  onChange: (e) => {
                    J(e.value);
                  }
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 219,
                  columnNumber: 29
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 212,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 206,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 193,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 173,
    columnNumber: 9
  }, globalThis), ee = (e) => /* @__PURE__ */ t(h, {
    children: [
      /* @__PURE__ */ t(N, {
        icon: "pi pi-pencil",
        className: "p-button-rounded p-button-success mr-2",
        onClick: () => {
          B(`/${a == null ? void 0 : a.prefix}/${l == null ? void 0 : l.name}/edit/${e[l == null ? void 0 : l.primaryKeyColumn]}`, !1, !1);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 242,
        columnNumber: 17
      }, globalThis),
      /* @__PURE__ */ t(N, {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-danger",
        onClick: () => {
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 249,
        columnNumber: 17
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 241,
    columnNumber: 13
  }, globalThis);
  return /* @__PURE__ */ t(h, {
    children: [
      /* @__PURE__ */ t(me, {
        left: X,
        right: Y
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 260,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(ce, {
        ref: I,
        selection: j,
        onSelectionChange: (e) => H(e.value),
        header: Z,
        first: (i.currentPage - 1) * i.perPage,
        lazy: !0,
        loading: d,
        multiSortMeta: P,
        paginator: !0,
        paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
        rows: i == null ? void 0 : i.perPage,
        rowsPerPageOptions: a.rowsPerPageOptions,
        showGridlines: l == null ? void 0 : l.showGridlines,
        stripedRows: l == null ? void 0 : l.stripedRows,
        totalRecords: i == null ? void 0 : i.totalCount,
        value: V,
        currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
        filterDisplay: "row",
        globalFilter: "contains",
        removableSort: !0,
        responsiveLayout: "scroll",
        sortMode: "multiple",
        onPage: C,
        onFilter: U,
        filters: u,
        onSort: C,
        children: [
          /* @__PURE__ */ t(v, {
            exportable: !1,
            selectionMode: "multiple",
            style: { width: "3rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 293,
            columnNumber: 17
          }, globalThis),
          K.map((e) => {
            var r;
            return /* @__PURE__ */ t(v, {
              body: (b) => d ? /* @__PURE__ */ t($, {}, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                lineNumber: 300,
                columnNumber: 60
              }, globalThis) : /* @__PURE__ */ t("div", {
                children: b[e.columnName]
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                lineNumber: 300,
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
              filterPlaceholder: (r = e.searchPlaceholder) != null ? r : `Search by ${e.label}`,
              exportable: e.exportable
            }, e.columnName, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 302,
              columnNumber: 25
            }, globalThis);
          }),
          /* @__PURE__ */ t(v, {
            body: d ? /* @__PURE__ */ t($, {}, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 321,
              columnNumber: 37
            }, globalThis) : ee,
            headerStyle: { minWidth: "10rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 320,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 265,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 259,
    columnNumber: 9
  }, globalThis);
}, pe = () => {
  const { resource: a } = G();
  return /* @__PURE__ */ t(h, {
    children: [
      /* @__PURE__ */ t(re, {
        title: a == null ? void 0 : a.pluralLabel
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
              children: a == null ? void 0 : a.pluralLabel
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
              lineNumber: 15,
              columnNumber: 21
            }, globalThis),
            /* @__PURE__ */ t(be, {}, void 0, !1, {
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
  pe as default
};
