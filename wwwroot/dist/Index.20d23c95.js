import { j as t, c as le, T as se, F as p, r as u, A as ne, u as re, a as A, y as L, k as oe, R as O, B as d, x as me, z as ce, S as _, d as ue, H as be } from "./main.96aef409.js";
import { t as j, T as Ne } from "./trinity_link.1c87d127.js";
import { D as Te, C as I } from "./column.esm.db98a570.js";
function de() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get(i, s) {
      return i.get(s.toString());
    }
  });
}
const pe = ({ column: i, record: s, children: b, resource: a }) => {
  var T;
  const l = `${i.columnName}_${s[a.primaryKeyColumn]}_tooltip`;
  return /* @__PURE__ */ t("div", {
    ...s[`${i.columnName}_extraAttributes`],
    className: le(s[`${i.columnName}_extraAttributes`] && "className" in s[`${i.columnName}_extraAttributes`] ? s[`${i.columnName}_extraAttributes`].className : "", {
      [`text-${i.color}-600`]: i.color
    }),
    style: { fontFamily: i.fontFamily },
    children: [
      (s[`${i.columnName}_tooltip`] || i.tooltip) && /* @__PURE__ */ t(se, {
        target: `#${l}`
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
        lineNumber: 18,
        columnNumber: 76
      }, globalThis),
      /* @__PURE__ */ t("div", {
        id: l,
        "data-pr-tooltip": (T = s[`${i.columnName}_tooltip`]) != null ? T : i.tooltip,
        "data-pr-position": "top",
        children: [
          i.descriptionPosition === "above" ? /* @__PURE__ */ t("div", {
            className: "text-sm text-gray-500 mb-1",
            children: /* @__PURE__ */ t("p", {
              children: i.description
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
              lineNumber: 27,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 26,
            columnNumber: 21
          }, globalThis) : /* @__PURE__ */ t(p, {}, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 30,
            columnNumber: 21
          }, globalThis),
          /* @__PURE__ */ t("div", {
            className: "flex justify-content-start align-items-center",
            children: [
              i.icon && i.iconPosition == "before" && /* @__PURE__ */ t("i", {
                className: `mx-2 ${i.icon}`
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
                lineNumber: 34,
                columnNumber: 72
              }, globalThis),
              b,
              i.icon && i.iconPosition == "after" && /* @__PURE__ */ t("i", {
                className: `mx-2 ${i.icon}`
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
                lineNumber: 36,
                columnNumber: 71
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 33,
            columnNumber: 17
          }, globalThis),
          i.descriptionPosition === "bellow" ? /* @__PURE__ */ t("div", {
            className: "text-sm text-gray-500 mt-1",
            children: /* @__PURE__ */ t("p", {
              children: i.description
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
              lineNumber: 41,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 40,
            columnNumber: 21
          }, globalThis) : /* @__PURE__ */ t(p, {}, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
            lineNumber: 44,
            columnNumber: 21
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/columns/BaseColumnComponent.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, globalThis);
}, fe = () => {
  var w, $, B, k, M;
  const { columns: i, components: s } = u.exports.useContext(ne), b = re(), { resource: a, data: l } = A(), T = (w = a == null ? void 0 : a.columns) != null ? w : [], x = de(), [f, D] = u.exports.useState(!1), V = u.exports.useRef(null), m = u.exports.useRef(null), C = u.exports.useRef(), W = u.exports.useRef(null), [G, H] = u.exports.useState(null);
  u.exports.useEffect(() => {
    m.current && !f && (m.current.value = x.globalSearch);
  }, [f, l]);
  const v = T.flatMap((e) => e.toggleable ? {
    field: e.columnName,
    header: e.label,
    isToggledHiddenByDefault: e.isToggledHiddenByDefault
  } : []), [S, K] = u.exports.useState(v.filter((e) => !e.isToggledHiddenByDefault)), J = T.filter((e) => !e.toggleable || S.find((o) => o.field === e.columnName));
  let n;
  const P = (e) => {
    n = e, g();
  }, z = L(() => g(), 300), F = Array();
  for (const e of ($ = JSON.parse(x.sort)) != null ? $ : [])
    F.push({
      field: e.field,
      order: e.order
    });
  let c = {};
  const E = (B = JSON.parse(x.columnsSearch)) != null ? B : {};
  T.forEach((e) => {
    (e.customFilter || e.searchable && !e.isGloballySearchable) && (c[e.columnName] = {
      value: E[e.columnName],
      matchMode: oe.CUSTOM
    });
  });
  const U = L((e) => {
    c = {}, Object.entries(e.filters).forEach((o) => {
      c[o[0]] = o[1];
    }), console.log(c), g();
  }, 300), g = () => {
    var o, h, r, y;
    let e = {};
    if (e.page = n === void 0 || n.page === void 0 ? (o = l == null ? void 0 : l.currentPage) != null ? o : 1 : n.page + 1, e.perPage = (r = (h = n == null ? void 0 : n.rows) != null ? h : l == null ? void 0 : l.perPage) != null ? r : 10, n != null && n.multiSortMeta && (e.sort = JSON.stringify(n.multiSortMeta)), (y = m.current) != null && y.value && (e.globalSearch = m.current.value), c) {
      const N = {};
      Object.entries(c).forEach(([ae, R]) => {
        "value" in R && R.value && (N[ae] = R.value);
      }), Object.keys(N).length && (e.columnsSearch = JSON.stringify(N));
    }
    ue.Inertia.get(`/${b.prefix}/${a == null ? void 0 : a.pluralLabel.toLowerCase()}`, e, {
      preserveState: !0,
      preserveScroll: !0,
      replace: !0,
      onStart: () => D(!0),
      onFinish: () => {
        D(!1);
      }
    });
  }, q = ((k = m.current) == null ? void 0 : k.value) || (n == null ? void 0 : n.multiSortMeta) || !!Object.entries(c).filter(([, e]) => e.value).length;
  function Q() {
    c = {}, m.current.value = "", n = void 0, g();
  }
  let X = T.filter((e) => e.exportable);
  const Y = (e) => {
    var o;
    (o = V.current) == null || o.exportCSV(e);
  }, Z = /* @__PURE__ */ t(O.Fragment, {}, void 0, !1, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 139,
    columnNumber: 33
  }, globalThis), ee = /* @__PURE__ */ t(O.Fragment, {
    children: [
      /* @__PURE__ */ t(d, {
        className: "p-button-success mr-2",
        icon: "pi pi-plus",
        label: "New",
        onClick: () => j(`/${b.prefix}/${a == null ? void 0 : a.name}/create`)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(d, {
        className: "p-button-danger",
        icon: "pi pi-trash",
        label: "Delete"
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 142,
    columnNumber: 9
  }, globalThis), te = /* @__PURE__ */ t("div", {
    className: "flex justify-content-between flex-column sm:flex-row",
    children: [
      /* @__PURE__ */ t("div", {
        className: "flex mb-3",
        children: [
          !!X.length && /* @__PURE__ */ t(d, {
            icon: "pi pi-external-link",
            className: "p-button-primary  mr-2",
            label: "Export",
            onClick: Y
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 161,
            columnNumber: 21
          }, globalThis),
          q && /* @__PURE__ */ t(d, {
            type: "button",
            icon: "pi pi-filter-slash",
            label: "Clear",
            className: "p-button-outlined",
            onClick: Q
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 169,
            columnNumber: 21
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 159,
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
                  lineNumber: 181,
                  columnNumber: 25
                }, globalThis),
                /* @__PURE__ */ t(me, {
                  ref: m,
                  placeholder: "Keyword Search",
                  onChange: z
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 182,
                  columnNumber: 25
                }, globalThis),
                m.current && m.current.value && f && /* @__PURE__ */ t("i", {
                  className: "pi pi-spin pi-spinner global-search-icon"
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 187,
                  columnNumber: 101
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 180,
              columnNumber: 21
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ t("div", {
            id: "toggleableFields",
            className: "mx-2",
            ref: C,
            children: v.length > 0 && /* @__PURE__ */ t(p, {
              children: [
                /* @__PURE__ */ t(d, {
                  className: "p-button-rounded p-button-text",
                  icon: "pi pi-table",
                  onClick: () => W.current.show()
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 198,
                  columnNumber: 29
                }, globalThis),
                /* @__PURE__ */ t(ce, {
                  ref: W,
                  appendTo: C.current,
                  className: "hidden",
                  optionLabel: "header",
                  panelClassName: "toggleableFields",
                  options: v,
                  value: S,
                  multiple: !0,
                  onChange: (e) => {
                    K(e.value);
                  }
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 204,
                  columnNumber: 29
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 197,
              columnNumber: 25
            }, globalThis)
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 191,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 158,
    columnNumber: 9
  }, globalThis), ie = (e) => /* @__PURE__ */ t(p, {
    children: [
      /* @__PURE__ */ t(d, {
        icon: "pi pi-pencil",
        className: "p-button-rounded p-button-success mr-2",
        onClick: () => {
          j(`/${b == null ? void 0 : b.prefix}/${a == null ? void 0 : a.name}/edit/${e[a == null ? void 0 : a.primaryKeyColumn]}`, !1, !1);
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 227,
        columnNumber: 17
      }, globalThis),
      /* @__PURE__ */ t(d, {
        icon: "pi pi-trash",
        className: "p-button-rounded p-button-danger",
        onClick: () => {
        }
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 234,
        columnNumber: 17
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 226,
    columnNumber: 13
  }, globalThis);
  return /* @__PURE__ */ t(p, {
    children: [
      /* @__PURE__ */ t(Ne, {
        left: Z,
        right: ee
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 245,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ t(Te, {
        ref: V,
        dataKey: (M = a == null ? void 0 : a.primaryKeyColumn) != null ? M : "id",
        selection: G,
        onSelectionChange: (e) => H(e.value),
        header: te,
        size: "small",
        first: (l.currentPage - 1) * l.perPage,
        lazy: !0,
        loading: f,
        multiSortMeta: F,
        paginator: !0,
        paginatorTemplate: "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
        rows: l == null ? void 0 : l.perPage,
        rowsPerPageOptions: b.rowsPerPageOptions,
        showGridlines: a == null ? void 0 : a.showGridlines,
        stripedRows: a == null ? void 0 : a.stripedRows,
        totalRecords: l == null ? void 0 : l.totalCount,
        value: l == null ? void 0 : l.data,
        currentPageReportTemplate: "Showing {first} to {last} of {totalRecords}",
        filterDisplay: "menu",
        globalFilter: "contains",
        removableSort: !0,
        responsiveLayout: "scroll",
        sortMode: "multiple",
        onSort: P,
        onPage: P,
        onFilter: U,
        filters: c,
        children: [
          /* @__PURE__ */ t(I, {
            exportable: !1,
            selectionMode: "multiple",
            style: { width: "3rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 280,
            columnNumber: 17
          }, globalThis),
          J.map((e) => {
            var h;
            return /* @__PURE__ */ t(I, {
              body: (r) => {
                var y, N;
                return f ? /* @__PURE__ */ t(_, {}, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 289,
                  columnNumber: 29
                }, globalThis) : /* @__PURE__ */ t(pe, {
                  resource: a,
                  column: e,
                  columnValue: r[e.columnName],
                  record: r,
                  children: i != null && i.has(e.componentName) ? i == null ? void 0 : i.get(e.componentName)({
                    column: e,
                    columnValue: (y = r[e.columnName]) != null ? y : r.defaultValue,
                    record: r,
                    resource: a
                  }) : /* @__PURE__ */ t("div", {
                    children: (N = r[e.columnName]) != null ? N : r.defaultValue
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                    lineNumber: 305,
                    columnNumber: 37
                  }, globalThis)
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 291,
                  columnNumber: 29
                }, globalThis);
              },
              field: e.columnName,
              header: e.label,
              sortable: e.sortable,
              showFilterMatchModes: !1,
              showClearButton: !0,
              filterMatchMode: "custom",
              excludeGlobalFilter: !e.isGloballySearchable,
              filterField: e.columnName,
              style: { minWidth: "8rem" },
              exportable: e.exportable,
              hidden: e.hidden,
              filter: !!e.customFilter || e.searchable && !e.isGloballySearchable,
              filterPlaceholder: (h = e.searchPlaceholder) != null ? h : `Search by ${e.label}`,
              filterElement: e.customFilter ? (r) => /* @__PURE__ */ t("div", {
                children: s != null && s.has(e.customFilter.componentName) ? s == null ? void 0 : s.get(e.customFilter.componentName)({
                  key: `${e.columnName}_filter`,
                  component: e.customFilter,
                  setFieldValue: (y, N) => {
                    r.filterCallback(N);
                  },
                  formData: { [e.columnName]: r.value }
                }) : /* @__PURE__ */ t(p, {
                  children: e.customFilter.componentName
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                  lineNumber: 348,
                  columnNumber: 55
                }, globalThis)
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
                lineNumber: 337,
                columnNumber: 47
              }, globalThis) : void 0
            }, e.columnName, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 312,
              columnNumber: 25
            }, globalThis);
          }),
          /* @__PURE__ */ t(I, {
            body: f ? /* @__PURE__ */ t(_, {}, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
              lineNumber: 376,
              columnNumber: 37
            }, globalThis) : ie,
            headerStyle: { minWidth: "10rem" },
            filter: !1
          }, void 0, !1, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
            lineNumber: 375,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
        lineNumber: 250,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/components/Table.tsx",
    lineNumber: 244,
    columnNumber: 9
  }, globalThis);
}, xe = () => {
  const { resource: i } = A();
  return /* @__PURE__ */ t(p, {
    children: [
      /* @__PURE__ */ t(be, {
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
          children: /* @__PURE__ */ t("div", {
            className: "card",
            children: [
              /* @__PURE__ */ t("h5", {
                children: i == null ? void 0 : i.pluralLabel
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                lineNumber: 16,
                columnNumber: 25
              }, globalThis),
              /* @__PURE__ */ t(fe, {}, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
                lineNumber: 18,
                columnNumber: 25
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Index.tsx",
            lineNumber: 15,
            columnNumber: 21
          }, globalThis)
        }, void 0, !1, {
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
  xe as default
};
