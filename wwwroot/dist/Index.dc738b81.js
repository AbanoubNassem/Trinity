import { j as t, c as ie, T as ae, F as T, r as m, A as le, u as se, a as _, y as M, k as ne, R as k, B as b, x as re, z as oe, S as L, d as me, H as ce } from "./main.de00ce70.js";
import { t as O, T as ue } from "./trinity_link.df74fdf7.js";
import { D as be, C as R } from "./column.esm.a08ab889.js";
function Ne() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get(i, s) {
      return i.get(s.toString());
    }
  });
}
const Te = ({ column: i, record: s, children: a }) => {
  var l;
  return /* @__PURE__ */ t("div", {
    ...s[`${i.columnName}_extraAttributes`],
    className: ie(s[`${i.columnName}_extraAttributes`] && "className" in s[`${i.columnName}_extraAttributes`] ? s[`${i.columnName}_extraAttributes`].className : "", {
      [`text-${i.color}-600`]: i.color
    }),
    style: { fontFamily: i.fontFamily },
    children: [
      (s[`${i.columnName}_tooltip`] || i.tooltip) && /* @__PURE__ */ t(ae, {
        target: `.${i.columnName}_tooltip`
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
        lineNumber: 16,
        columnNumber: 76
      }, globalThis),
      /* @__PURE__ */ t("div", {
        className: `${i.columnName}_tooltip`,
        "data-pr-tooltip": (l = s[`${i.columnName}_tooltip`]) != null ? l : i.tooltip,
        "data-pr-position": "top",
        children: [
          i.descriptionPosition === "above" ? /* @__PURE__ */ t("div", {
            className: "text-sm text-gray-500 mb-1",
            children: /* @__PURE__ */ t("p", {
              children: i.description
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
              lineNumber: 25,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 24,
            columnNumber: 21
          }, globalThis) : /* @__PURE__ */ t(T, {}, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 28,
            columnNumber: 21
          }, globalThis),
          /* @__PURE__ */ t("div", {
            className: "flex justify-content-start align-items-center",
            children: [
              i.icon && i.iconPosition == "before" && /* @__PURE__ */ t("i", {
                className: `mx-2 ${i.icon}`
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
                lineNumber: 32,
                columnNumber: 72
              }, globalThis),
              a,
              i.icon && i.iconPosition == "after" && /* @__PURE__ */ t("i", {
                className: `mx-2 ${i.icon}`
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
                lineNumber: 34,
                columnNumber: 71
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 31,
            columnNumber: 17
          }, globalThis),
          i.descriptionPosition === "bellow" ? /* @__PURE__ */ t("div", {
            className: "text-sm text-gray-500 mt-1",
            children: /* @__PURE__ */ t("p", {
              children: i.description
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
              lineNumber: 39,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 38,
            columnNumber: 21
          }, globalThis) : /* @__PURE__ */ t(T, {}, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 42,
            columnNumber: 21
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, globalThis);
}, de = () => {
  var w, F, B, $;
  const { columns: i } = m.exports.useContext(le), s = se(), { resource: a, data: l } = _(), f = (w = a == null ? void 0 : a.columns) != null ? w : [], y = Ne(), [N, I] = m.exports.useState(!1), D = m.exports.useRef(null), r = m.exports.useRef(null), V = m.exports.useRef(), C = m.exports.useRef(null), [A, j] = m.exports.useState(null);
  m.exports.useEffect(() => {
    r.current && !N && (r.current.value = y.globalSearch);
  }, [N, l]);
  const g = f.flatMap((e) => e.toggleable ? {
    field: e.columnName,
    header: e.label,
    isToggledHiddenByDefault: e.isToggledHiddenByDefault
  } : []), [W, G] = m.exports.useState(g.filter((e) => !e.isToggledHiddenByDefault)), H = f.filter((e) => !e.toggleable || W.find((c) => c.field === e.columnName));
  let n;
  const S = (e) => {
    n = e, h();
  }, J = M(() => h(), 300), P = Array();
  for (const e of (F = JSON.parse(y.sort)) != null ? F : [])
    P.push({
      field: e.field,
      order: e.order
    });
  let u = {};
  const z = (B = JSON.parse(y.columnsSearch)) != null ? B : {};
  f.forEach((e) => {
    e.searchable && !e.isGloballySearchable && (u[e.columnName] = {
      value: z[e.columnName],
      matchMode: ne.CONTAINS
    });
  });
  const K = M((e) => {
    u = e.filters, h();
  }, 300), h = () => {
    var c, d, o, p;
    let e = {};
    if (e.page = n === void 0 || n.page === void 0 ? (c = l == null ? void 0 : l.currentPage) != null ? c : 1 : n.page + 1, e.perPage = (o = (d = n == null ? void 0 : n.rows) != null ? d : l == null ? void 0 : l.perPage) != null ? o : 10, n != null && n.multiSortMeta && (e.sort = JSON.stringify(n.multiSortMeta)), (p = r.current) != null && p.value && (e.globalSearch = r.current.value), u) {
      const x = {};
      Object.entries(u).forEach(([te, v]) => {
        "value" in v && v.value && (x[te] = v.value);
      }), Object.keys(x).length && (e.columnsSearch = JSON.stringify(x));
    }
    me.Inertia.get(`/${s.prefix}/${a == null ? void 0 : a.pluralLabel.toLowerCase()}`, e, {
      preserveState: !0,
      preserveScroll: !0,
      replace: !0,
      onStart: () => I(!0),
      onFinish: () => {
        I(!1);
      }
    });
  }, U = (($ = r.current) == null ? void 0 : $.value) || (n == null ? void 0 : n.multiSortMeta) || !!Object.entries(u).filter(([, e]) => e.value).length;
  function E() {
    u = {}, r.current.value = "", n = void 0, h();
  }
  let q = f.filter((e) => e.exportable);
  const Q = (e) => {
    var c;
    (c = D.current) == null || c.exportCSV(e);
  }, X = /* @__PURE__ */ t(k.Fragment, {}, void 0, !1, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 156,
    columnNumber: 33
  }, globalThis), Y = /* @__PURE__ */ t(k.Fragment, {
    children: [
      /* @__PURE__ */ t(b, {
        className: "p-button-success mr-2",
        icon: "pi pi-plus",
        label: "New",
        onClick: () => O(`/${s.prefix}/${a == null ? void 0 : a.name}/create`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 160,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(b, {
        className: "p-button-danger",
        icon: "pi pi-trash",
        label: "Delete"
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 159,
    columnNumber: 9
  }, globalThis), Z = /* @__PURE__ */ t("div", {
    className: "flex justify-content-between flex-column sm:flex-row",
    children: [
      /* @__PURE__ */ t("div", {
        className: "flex mb-3",
        children: [
          !!q.length && /* @__PURE__ */ t(b, {
            icon: "pi pi-external-link",
            className: "p-button-primary mb-2 mr-2",
            label: "Export",
            onClick: Q
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 178,
            columnNumber: 21
          }, globalThis),
          U && /* @__PURE__ */ t(b, {
            type: "button",
            icon: "pi pi-filter-slash",
            label: "Clear",
            className: "p-button-outlined",
            onClick: E
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 186,
            columnNumber: 21
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 176,
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
                  lineNumber: 198,
                  columnNumber: 25
                }, globalThis),
                /* @__PURE__ */ t(re, {
                  ref: r,
                  placeholder: "Keyword Search",
                  onChange: J
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 199,
                  columnNumber: 25
                }, globalThis),
                r.current && r.current.value && N && /* @__PURE__ */ t("i", {
                  className: "pi pi-spin pi-spinner global-search-icon"
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 204,
                  columnNumber: 101
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 197,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 196,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ t("div", {
            id: "toggleableFields",
            className: "mx-2",
            ref: V,
            children: g.length > 0 && /* @__PURE__ */ t(T, {
              children: [
                /* @__PURE__ */ t(b, {
                  className: "p-button-rounded p-button-text",
                  icon: "pi pi-table",
                  onClick: () => C.current.show()
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 215,
                  columnNumber: 29
                }, globalThis),
                /* @__PURE__ */ t(oe, {
                  ref: C,
                  appendTo: V.current,
                  className: "hidden",
                  optionLabel: "header",
                  panelClassName: "toggleableFields",
                  options: g,
                  value: W,
                  multiple: !0,
                  onChange: (e) => {
                    G(e.value);
                  }
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 221,
                  columnNumber: 29
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 214,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 208,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 195,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 175,
    columnNumber: 9
  }, globalThis), ee = (e) => /* @__PURE__ */ t(T, {
    children: [
      /* @__PURE__ */ t(b, {
        icon: "pi pi-pencil",
        className: "p-button-rounded p-button-success mr-2",
        onClick: () => {
          O(`/${s == null ? void 0 : s.prefix}/${a == null ? void 0 : a.name}/edit/${e[a == null ? void 0 : a.primaryKeyColumn]}`, !1, !1);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 244,
        columnNumber: 17
      }, globalThis),
      /* @__PURE__ */ t(b, {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-danger",
        onClick: () => {
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 251,
        columnNumber: 17
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 243,
    columnNumber: 13
  }, globalThis);
  return /* @__PURE__ */ t(T, {
    children: [
      /* @__PURE__ */ t(ue, {
        left: X,
        right: Y
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 262,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(be, {
        ref: D,
        selection: A,
        onSelectionChange: (e) => j(e.value),
        header: Z,
        first: (l.currentPage - 1) * l.perPage,
        lazy: !0,
        loading: N,
        multiSortMeta: P,
        paginator: !0,
        paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
        rows: l == null ? void 0 : l.perPage,
        rowsPerPageOptions: s.rowsPerPageOptions,
        showGridlines: a == null ? void 0 : a.showGridlines,
        stripedRows: a == null ? void 0 : a.stripedRows,
        totalRecords: l == null ? void 0 : l.totalCount,
        value: l == null ? void 0 : l.data,
        currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
        filterDisplay: "row",
        globalFilter: "contains",
        removableSort: !0,
        responsiveLayout: "scroll",
        sortMode: "multiple",
        onPage: S,
        onFilter: K,
        filters: u,
        onSort: S,
        children: [
          /* @__PURE__ */ t(R, {
            exportable: !1,
            selectionMode: "multiple",
            style: { width: "3rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 295,
            columnNumber: 17
          }, globalThis),
          H.map((e) => {
            var d;
            return /* @__PURE__ */ t(R, {
              body: (o) => {
                var p;
                return N ? /* @__PURE__ */ t(L, {}, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 304,
                  columnNumber: 29
                }, globalThis) : /* @__PURE__ */ t(Te, {
                  column: e,
                  columnValue: o[e.columnName],
                  record: o,
                  children: i != null && i.has(e.componentName) ? i == null ? void 0 : i.get(e.componentName)({
                    column: e,
                    columnValue: o[e.columnName],
                    record: o
                  }) : /* @__PURE__ */ t("div", {
                    children: (p = o[e.columnName]) != null ? p : o.defaultValue
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                    lineNumber: 318,
                    columnNumber: 37
                  }, globalThis)
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 306,
                  columnNumber: 29
                }, globalThis);
              },
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
              filterPlaceholder: (d = e.searchPlaceholder) != null ? d : `Search by ${e.label}`,
              exportable: e.exportable,
              hidden: e.hidden
            }, e.columnName, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 325,
              columnNumber: 25
            }, globalThis);
          }),
          /* @__PURE__ */ t(R, {
            body: N ? /* @__PURE__ */ t(L, {}, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 345,
              columnNumber: 37
            }, globalThis) : ee,
            headerStyle: { minWidth: "10rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 344,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 267,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 261,
    columnNumber: 9
  }, globalThis);
}, ye = () => {
  const { resource: i } = _();
  return /* @__PURE__ */ t(T, {
    children: [
      /* @__PURE__ */ t(ce, {
        title: i == null ? void 0 : i.pluralLabel
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
              children: i == null ? void 0 : i.pluralLabel
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
              lineNumber: 15,
              columnNumber: 21
            }, globalThis),
            /* @__PURE__ */ t(de, {}, void 0, !1, {
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
  ye as default
};
