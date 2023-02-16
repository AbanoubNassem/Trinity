import { r, c as D, e as I, O as h, L as V, j as e, F as W, B as g, M as y } from "./main.8cc25648.js";
import { D as H, C as b } from "./datatable.esm.c8506c7a.js";
function f() {
  return f = Object.assign ? Object.assign.bind() : function(a) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (a[n] = i[n]);
    }
    return a;
  }, f.apply(this, arguments);
}
var N = {
  defaultProps: {
    __TYPE: "Chart",
    id: null,
    type: null,
    data: null,
    options: null,
    plugins: null,
    width: null,
    height: null,
    style: null,
    className: null,
    children: void 0
  },
  getProps: function(t) {
    return h.getMergedProps(t, N.defaultProps);
  },
  getOtherProps: function(t) {
    return h.getDiffProps(t, N.defaultProps);
  }
}, p = function() {
  try {
    return Chart;
  } catch {
    return null;
  }
}(), x = /* @__PURE__ */ r.exports.memo(/* @__PURE__ */ r.exports.forwardRef(function(a, t) {
  var i = N.getProps(a), n = r.exports.useRef(null), s = r.exports.useRef(null), m = r.exports.useRef(null), d = function() {
    c();
    var T = {
      type: i.type,
      data: i.data,
      options: i.options,
      plugins: i.plugins
    };
    p ? s.current = new p(m.current, T) : import("./auto.15017637.js").then(function(u) {
      c(), !!m.current && u && (u.default ? s.current = new u.default(m.current, T) : s.current = new u(m.current, T));
    });
  }, c = function() {
    s.current && (s.current.destroy(), s.current = null);
  };
  r.exports.useImperativeHandle(t, function() {
    return {
      props: i,
      getCanvas: function() {
        return m.current;
      },
      getChart: function() {
        return s.current;
      },
      getBase64Image: function() {
        return s.current.toBase64Image();
      },
      getElement: function() {
        return n.current;
      },
      generateLegend: function() {
        return s.current && s.current.generateLegend();
      },
      refresh: function() {
        return s.current && s.current.update();
      }
    };
  }), r.exports.useEffect(function() {
    d();
  }), D(function() {
    c();
  });
  var l = N.getOtherProps(i), v = I("p-chart", i.className), R = Object.assign({
    width: i.width,
    height: i.height
  }, i.style);
  return /* @__PURE__ */ r.exports.createElement("div", f({
    id: i.id,
    ref: n,
    style: R,
    className: v
  }, l), /* @__PURE__ */ r.exports.createElement("canvas", {
    ref: m,
    width: i.width,
    height: i.height
  }));
}), function(a, t) {
  return a.data === t.data && a.options === t.options && a.type === t.type;
});
x.displayName = "Chart";
const w = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: !1,
      backgroundColor: "#2f4860",
      borderColor: "#2f4860",
      tension: 0.4
    },
    {
      label: "Second Dataset",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: !1,
      backgroundColor: "#00bb7e",
      borderColor: "#00bb7e",
      tension: 0.4
    }
  ]
}, j = () => {
  const a = r.exports.useRef(null), t = r.exports.useRef(null), [i, n] = r.exports.useState(null), { layoutConfig: s } = r.exports.useContext(V), m = () => {
    n({
      plugins: {
        legend: {
          labels: {
            color: "#495057"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#495057"
          },
          grid: {
            color: "#ebedef"
          }
        },
        y: {
          ticks: {
            color: "#495057"
          },
          grid: {
            color: "#ebedef"
          }
        }
      }
    });
  }, d = () => {
    n({
      plugins: {
        legend: {
          labels: {
            color: "#ebedef"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#ebedef"
          },
          grid: {
            color: "rgba(160, 167, 181, .3)"
          }
        },
        y: {
          ticks: {
            color: "#ebedef"
          },
          grid: {
            color: "rgba(160, 167, 181, .3)"
          }
        }
      }
    });
  };
  r.exports.useEffect(() => {
    s.colorScheme === "light" ? m() : d();
  }, [s.colorScheme]);
  const c = (l) => l.toLocaleString("en-US", { style: "currency", currency: "USD" });
  return /* @__PURE__ */ e("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ e("div", {
        className: "col-12 lg:col-6 xl:col-3",
        children: /* @__PURE__ */ e("div", {
          className: "card mb-0",
          children: [
            /* @__PURE__ */ e("div", {
              className: "flex justify-content-between mb-3",
              children: [
                /* @__PURE__ */ e("div", {
                  children: [
                    /* @__PURE__ */ e("span", {
                      className: "block text-500 font-medium mb-3",
                      children: "Orders"
                    }, void 0, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                      lineNumber: 119,
                      columnNumber: 29
                    }, globalThis),
                    /* @__PURE__ */ e("div", {
                      className: "text-900 font-medium text-xl",
                      children: "152"
                    }, void 0, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                      lineNumber: 120,
                      columnNumber: 29
                    }, globalThis)
                  ]
                }, void 0, !0, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                  lineNumber: 118,
                  columnNumber: 25
                }, globalThis),
                /* @__PURE__ */ e("div", {
                  className: "flex align-items-center justify-content-center bg-blue-100 border-round",
                  style: { width: "2.5rem", height: "2.5rem" },
                  children: /* @__PURE__ */ e("i", {
                    className: "pi pi-shopping-cart text-blue-500 text-xl"
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 126,
                    columnNumber: 29
                  }, globalThis)
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                  lineNumber: 122,
                  columnNumber: 25
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
              lineNumber: 117,
              columnNumber: 21
            }, globalThis),
            /* @__PURE__ */ e("span", {
              className: "text-green-500 font-medium",
              children: "24 new "
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
              lineNumber: 129,
              columnNumber: 21
            }, globalThis),
            /* @__PURE__ */ e("span", {
              className: "text-500",
              children: "since last visit"
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
              lineNumber: 130,
              columnNumber: 21
            }, globalThis)
          ]
        }, void 0, !0, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
          lineNumber: 116,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
        lineNumber: 115,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e("div", {
        className: "col-12 lg:col-6 xl:col-3",
        children: /* @__PURE__ */ e("div", {
          className: "card mb-0",
          children: [
            /* @__PURE__ */ e("div", {
              className: "flex justify-content-between mb-3",
              children: [
                /* @__PURE__ */ e("div", {
                  children: [
                    /* @__PURE__ */ e("span", {
                      className: "block text-500 font-medium mb-3",
                      children: "Revenue"
                    }, void 0, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                      lineNumber: 137,
                      columnNumber: 29
                    }, globalThis),
                    /* @__PURE__ */ e("div", {
                      className: "text-900 font-medium text-xl",
                      children: "$2.100"
                    }, void 0, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                      lineNumber: 138,
                      columnNumber: 29
                    }, globalThis)
                  ]
                }, void 0, !0, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                  lineNumber: 136,
                  columnNumber: 25
                }, globalThis),
                /* @__PURE__ */ e("div", {
                  className: "flex align-items-center justify-content-center bg-orange-100 border-round",
                  style: { width: "2.5rem", height: "2.5rem" },
                  children: /* @__PURE__ */ e("i", {
                    className: "pi pi-map-marker text-orange-500 text-xl"
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 144,
                    columnNumber: 29
                  }, globalThis)
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                  lineNumber: 140,
                  columnNumber: 25
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
              lineNumber: 135,
              columnNumber: 21
            }, globalThis),
            /* @__PURE__ */ e("span", {
              className: "text-green-500 font-medium",
              children: "%52+ "
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
              lineNumber: 147,
              columnNumber: 21
            }, globalThis),
            /* @__PURE__ */ e("span", {
              className: "text-500",
              children: "since last week"
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
              lineNumber: 148,
              columnNumber: 21
            }, globalThis)
          ]
        }, void 0, !0, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e("div", {
        className: "col-12 lg:col-6 xl:col-3",
        children: /* @__PURE__ */ e("div", {
          className: "card mb-0",
          children: [
            /* @__PURE__ */ e("div", {
              className: "flex justify-content-between mb-3",
              children: [
                /* @__PURE__ */ e("div", {
                  children: [
                    /* @__PURE__ */ e("span", {
                      className: "block text-500 font-medium mb-3",
                      children: "Customers"
                    }, void 0, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                      lineNumber: 155,
                      columnNumber: 29
                    }, globalThis),
                    /* @__PURE__ */ e("div", {
                      className: "text-900 font-medium text-xl",
                      children: "28441"
                    }, void 0, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                      lineNumber: 156,
                      columnNumber: 29
                    }, globalThis)
                  ]
                }, void 0, !0, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                  lineNumber: 154,
                  columnNumber: 25
                }, globalThis),
                /* @__PURE__ */ e("div", {
                  className: "flex align-items-center justify-content-center bg-cyan-100 border-round",
                  style: { width: "2.5rem", height: "2.5rem" },
                  children: /* @__PURE__ */ e("i", {
                    className: "pi pi-inbox text-cyan-500 text-xl"
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 162,
                    columnNumber: 29
                  }, globalThis)
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                  lineNumber: 158,
                  columnNumber: 25
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
              lineNumber: 153,
              columnNumber: 21
            }, globalThis),
            /* @__PURE__ */ e("span", {
              className: "text-green-500 font-medium",
              children: "520 "
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
              lineNumber: 165,
              columnNumber: 21
            }, globalThis),
            /* @__PURE__ */ e("span", {
              className: "text-500",
              children: "newly registered"
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
              lineNumber: 166,
              columnNumber: 21
            }, globalThis)
          ]
        }, void 0, !0, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
          lineNumber: 152,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e("div", {
        className: "col-12 lg:col-6 xl:col-3",
        children: /* @__PURE__ */ e("div", {
          className: "card mb-0",
          children: [
            /* @__PURE__ */ e("div", {
              className: "flex justify-content-between mb-3",
              children: [
                /* @__PURE__ */ e("div", {
                  children: [
                    /* @__PURE__ */ e("span", {
                      className: "block text-500 font-medium mb-3",
                      children: "Comments"
                    }, void 0, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                      lineNumber: 173,
                      columnNumber: 29
                    }, globalThis),
                    /* @__PURE__ */ e("div", {
                      className: "text-900 font-medium text-xl",
                      children: "152 Unread"
                    }, void 0, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                      lineNumber: 174,
                      columnNumber: 29
                    }, globalThis)
                  ]
                }, void 0, !0, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                  lineNumber: 172,
                  columnNumber: 25
                }, globalThis),
                /* @__PURE__ */ e("div", {
                  className: "flex align-items-center justify-content-center bg-purple-100 border-round",
                  style: { width: "2.5rem", height: "2.5rem" },
                  children: /* @__PURE__ */ e("i", {
                    className: "pi pi-comment text-purple-500 text-xl"
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 180,
                    columnNumber: 29
                  }, globalThis)
                }, void 0, !1, {
                  fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                  lineNumber: 176,
                  columnNumber: 25
                }, globalThis)
              ]
            }, void 0, !0, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
              lineNumber: 171,
              columnNumber: 21
            }, globalThis),
            /* @__PURE__ */ e("span", {
              className: "text-green-500 font-medium",
              children: "85 "
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
              lineNumber: 183,
              columnNumber: 21
            }, globalThis),
            /* @__PURE__ */ e("span", {
              className: "text-500",
              children: "responded"
            }, void 0, !1, {
              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
              lineNumber: 184,
              columnNumber: 21
            }, globalThis)
          ]
        }, void 0, !0, {
          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
          lineNumber: 170,
          columnNumber: 17
        }, globalThis)
      }, void 0, !1, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
        lineNumber: 169,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e("div", {
        className: "col-12 xl:col-6",
        children: [
          /* @__PURE__ */ e("div", {
            className: "card",
            children: [
              /* @__PURE__ */ e("h5", {
                children: "Recent Sales"
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                lineNumber: 190,
                columnNumber: 21
              }, globalThis),
              /* @__PURE__ */ e(H, {
                rows: 5,
                paginator: !0,
                responsiveLayout: "scroll",
                children: [
                  /* @__PURE__ */ e(b, {
                    header: "Image",
                    body: (l) => /* @__PURE__ */ e("img", {
                      className: "shadow-2",
                      src: `/demo/images/product/${l.image}`,
                      alt: l.image,
                      width: "50"
                    }, void 0, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                      lineNumber: 199,
                      columnNumber: 33
                    }, globalThis)
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 196,
                    columnNumber: 25
                  }, globalThis),
                  /* @__PURE__ */ e(b, {
                    field: "name",
                    header: "Name",
                    sortable: !0,
                    style: { width: "35%" }
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 207,
                    columnNumber: 25
                  }, globalThis),
                  /* @__PURE__ */ e(b, {
                    field: "price",
                    header: "Price",
                    sortable: !0,
                    style: { width: "35%" },
                    body: (l) => c(l.price)
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 213,
                    columnNumber: 25
                  }, globalThis),
                  /* @__PURE__ */ e(b, {
                    header: "View",
                    style: { width: "15%" },
                    body: () => /* @__PURE__ */ e(W, {
                      children: /* @__PURE__ */ e(g, {
                        icon: "pi pi-search",
                        type: "button",
                        className: "p-button-text"
                      }, void 0, !1, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 225,
                        columnNumber: 37
                      }, globalThis)
                    }, void 0, !1, {
                      fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                      lineNumber: 224,
                      columnNumber: 33
                    }, globalThis)
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 220,
                    columnNumber: 25
                  }, globalThis)
                ]
              }, void 0, !0, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                lineNumber: 191,
                columnNumber: 21
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
            lineNumber: 189,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ e("div", {
            className: "card",
            children: [
              /* @__PURE__ */ e("div", {
                className: "flex justify-content-between align-items-center mb-5",
                children: [
                  /* @__PURE__ */ e("h5", {
                    children: "Best Selling Products"
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 237,
                    columnNumber: 25
                  }, globalThis),
                  /* @__PURE__ */ e("div", {
                    children: [
                      /* @__PURE__ */ e(g, {
                        type: "button",
                        icon: "pi pi-ellipsis-v",
                        className: "p-button-rounded p-button-text p-button-plain",
                        onClick: (l) => a.current.toggle(l)
                      }, void 0, !1, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 239,
                        columnNumber: 29
                      }, globalThis),
                      /* @__PURE__ */ e(y, {
                        ref: a,
                        popup: !0,
                        model: [
                          { label: "Add New", icon: "pi pi-fw pi-plus" },
                          { label: "Remove", icon: "pi pi-fw pi-minus" }
                        ]
                      }, void 0, !1, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 245,
                        columnNumber: 29
                      }, globalThis)
                    ]
                  }, void 0, !0, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 238,
                    columnNumber: 25
                  }, globalThis)
                ]
              }, void 0, !0, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                lineNumber: 236,
                columnNumber: 21
              }, globalThis),
              /* @__PURE__ */ e("ul", {
                className: "list-none p-0 m-0",
                children: [
                  /* @__PURE__ */ e("li", {
                    className: "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4",
                    children: [
                      /* @__PURE__ */ e("div", {
                        children: [
                          /* @__PURE__ */ e("span", {
                            className: "text-900 font-medium mr-2 mb-1 md:mb-0",
                            children: "Space T-Shirt"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 258,
                            columnNumber: 33
                          }, globalThis),
                          /* @__PURE__ */ e("div", {
                            className: "mt-1 text-600",
                            children: "Clothing"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 259,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 257,
                        columnNumber: 29
                      }, globalThis),
                      /* @__PURE__ */ e("div", {
                        className: "mt-2 md:mt-0 flex align-items-center",
                        children: [
                          /* @__PURE__ */ e("div", {
                            className: "surface-300 border-round overflow-hidden w-10rem lg:w-6rem",
                            style: { height: "8px" },
                            children: /* @__PURE__ */ e("div", {
                              className: "bg-orange-500 h-full",
                              style: { width: "50%" }
                            }, void 0, !1, {
                              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                              lineNumber: 266,
                              columnNumber: 37
                            }, globalThis)
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 262,
                            columnNumber: 33
                          }, globalThis),
                          /* @__PURE__ */ e("span", {
                            className: "text-orange-500 ml-3 font-medium",
                            children: "%50"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 271,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 261,
                        columnNumber: 29
                      }, globalThis)
                    ]
                  }, void 0, !0, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 256,
                    columnNumber: 25
                  }, globalThis),
                  /* @__PURE__ */ e("li", {
                    className: "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4",
                    children: [
                      /* @__PURE__ */ e("div", {
                        children: [
                          /* @__PURE__ */ e("span", {
                            className: "text-900 font-medium mr-2 mb-1 md:mb-0",
                            children: "Portal Sticker"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 276,
                            columnNumber: 33
                          }, globalThis),
                          /* @__PURE__ */ e("div", {
                            className: "mt-1 text-600",
                            children: "Accessories"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 277,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 275,
                        columnNumber: 29
                      }, globalThis),
                      /* @__PURE__ */ e("div", {
                        className: "mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center",
                        children: [
                          /* @__PURE__ */ e("div", {
                            className: "surface-300 border-round overflow-hidden w-10rem lg:w-6rem",
                            style: { height: "8px" },
                            children: /* @__PURE__ */ e("div", {
                              className: "bg-cyan-500 h-full",
                              style: { width: "16%" }
                            }, void 0, !1, {
                              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                              lineNumber: 284,
                              columnNumber: 37
                            }, globalThis)
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 280,
                            columnNumber: 33
                          }, globalThis),
                          /* @__PURE__ */ e("span", {
                            className: "text-cyan-500 ml-3 font-medium",
                            children: "%16"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 289,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 279,
                        columnNumber: 29
                      }, globalThis)
                    ]
                  }, void 0, !0, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 274,
                    columnNumber: 25
                  }, globalThis),
                  /* @__PURE__ */ e("li", {
                    className: "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4",
                    children: [
                      /* @__PURE__ */ e("div", {
                        children: [
                          /* @__PURE__ */ e("span", {
                            className: "text-900 font-medium mr-2 mb-1 md:mb-0",
                            children: "Supernova Sticker"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 294,
                            columnNumber: 33
                          }, globalThis),
                          /* @__PURE__ */ e("div", {
                            className: "mt-1 text-600",
                            children: "Accessories"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 295,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 293,
                        columnNumber: 29
                      }, globalThis),
                      /* @__PURE__ */ e("div", {
                        className: "mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center",
                        children: [
                          /* @__PURE__ */ e("div", {
                            className: "surface-300 border-round overflow-hidden w-10rem lg:w-6rem",
                            style: { height: "8px" },
                            children: /* @__PURE__ */ e("div", {
                              className: "bg-pink-500 h-full",
                              style: { width: "67%" }
                            }, void 0, !1, {
                              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                              lineNumber: 302,
                              columnNumber: 37
                            }, globalThis)
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 298,
                            columnNumber: 33
                          }, globalThis),
                          /* @__PURE__ */ e("span", {
                            className: "text-pink-500 ml-3 font-medium",
                            children: "%67"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 307,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 297,
                        columnNumber: 29
                      }, globalThis)
                    ]
                  }, void 0, !0, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 292,
                    columnNumber: 25
                  }, globalThis),
                  /* @__PURE__ */ e("li", {
                    className: "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4",
                    children: [
                      /* @__PURE__ */ e("div", {
                        children: [
                          /* @__PURE__ */ e("span", {
                            className: "text-900 font-medium mr-2 mb-1 md:mb-0",
                            children: "Wonders Notebook"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 312,
                            columnNumber: 33
                          }, globalThis),
                          /* @__PURE__ */ e("div", {
                            className: "mt-1 text-600",
                            children: "Office"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 313,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 311,
                        columnNumber: 29
                      }, globalThis),
                      /* @__PURE__ */ e("div", {
                        className: "mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center",
                        children: [
                          /* @__PURE__ */ e("div", {
                            className: "surface-300 border-round overflow-hidden w-10rem lg:w-6rem",
                            style: { height: "8px" },
                            children: /* @__PURE__ */ e("div", {
                              className: "bg-green-500 h-full",
                              style: { width: "35%" }
                            }, void 0, !1, {
                              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                              lineNumber: 320,
                              columnNumber: 37
                            }, globalThis)
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 316,
                            columnNumber: 33
                          }, globalThis),
                          /* @__PURE__ */ e("span", {
                            className: "text-green-500 ml-3 font-medium",
                            children: "%35"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 325,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 315,
                        columnNumber: 29
                      }, globalThis)
                    ]
                  }, void 0, !0, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 310,
                    columnNumber: 25
                  }, globalThis),
                  /* @__PURE__ */ e("li", {
                    className: "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4",
                    children: [
                      /* @__PURE__ */ e("div", {
                        children: [
                          /* @__PURE__ */ e("span", {
                            className: "text-900 font-medium mr-2 mb-1 md:mb-0",
                            children: "Mat Black Case"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 330,
                            columnNumber: 33
                          }, globalThis),
                          /* @__PURE__ */ e("div", {
                            className: "mt-1 text-600",
                            children: "Accessories"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 331,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 329,
                        columnNumber: 29
                      }, globalThis),
                      /* @__PURE__ */ e("div", {
                        className: "mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center",
                        children: [
                          /* @__PURE__ */ e("div", {
                            className: "surface-300 border-round overflow-hidden w-10rem lg:w-6rem",
                            style: { height: "8px" },
                            children: /* @__PURE__ */ e("div", {
                              className: "bg-purple-500 h-full",
                              style: { width: "75%" }
                            }, void 0, !1, {
                              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                              lineNumber: 338,
                              columnNumber: 37
                            }, globalThis)
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 334,
                            columnNumber: 33
                          }, globalThis),
                          /* @__PURE__ */ e("span", {
                            className: "text-purple-500 ml-3 font-medium",
                            children: "%75"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 343,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 333,
                        columnNumber: 29
                      }, globalThis)
                    ]
                  }, void 0, !0, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 328,
                    columnNumber: 25
                  }, globalThis),
                  /* @__PURE__ */ e("li", {
                    className: "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4",
                    children: [
                      /* @__PURE__ */ e("div", {
                        children: [
                          /* @__PURE__ */ e("span", {
                            className: "text-900 font-medium mr-2 mb-1 md:mb-0",
                            children: "Robots T-Shirt"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 348,
                            columnNumber: 33
                          }, globalThis),
                          /* @__PURE__ */ e("div", {
                            className: "mt-1 text-600",
                            children: "Clothing"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 349,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 347,
                        columnNumber: 29
                      }, globalThis),
                      /* @__PURE__ */ e("div", {
                        className: "mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center",
                        children: [
                          /* @__PURE__ */ e("div", {
                            className: "surface-300 border-round overflow-hidden w-10rem lg:w-6rem",
                            style: { height: "8px" },
                            children: /* @__PURE__ */ e("div", {
                              className: "bg-teal-500 h-full",
                              style: { width: "40%" }
                            }, void 0, !1, {
                              fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                              lineNumber: 356,
                              columnNumber: 37
                            }, globalThis)
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 352,
                            columnNumber: 33
                          }, globalThis),
                          /* @__PURE__ */ e("span", {
                            className: "text-teal-500 ml-3 font-medium",
                            children: "%40"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 361,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 351,
                        columnNumber: 29
                      }, globalThis)
                    ]
                  }, void 0, !0, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 346,
                    columnNumber: 25
                  }, globalThis)
                ]
              }, void 0, !0, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                lineNumber: 255,
                columnNumber: 21
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
            lineNumber: 235,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
        lineNumber: 188,
        columnNumber: 13
      }, globalThis),
      /* @__PURE__ */ e("div", {
        className: "col-12 xl:col-6",
        children: [
          /* @__PURE__ */ e("div", {
            className: "card",
            children: [
              /* @__PURE__ */ e("h5", {
                children: "Sales Overview"
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                lineNumber: 370,
                columnNumber: 21
              }, globalThis),
              /* @__PURE__ */ e(x, {
                type: "line",
                data: w,
                options: i
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                lineNumber: 371,
                columnNumber: 21
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
            lineNumber: 369,
            columnNumber: 17
          }, globalThis),
          /* @__PURE__ */ e("div", {
            className: "card",
            children: [
              /* @__PURE__ */ e("div", {
                className: "flex align-items-center justify-content-between mb-4",
                children: [
                  /* @__PURE__ */ e("h5", {
                    children: "Notifications"
                  }, void 0, !1, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 380,
                    columnNumber: 25
                  }, globalThis),
                  /* @__PURE__ */ e("div", {
                    children: [
                      /* @__PURE__ */ e(g, {
                        type: "button",
                        icon: "pi pi-ellipsis-v",
                        className: "p-button-rounded p-button-text p-button-plain",
                        onClick: (l) => t.current.toggle(l)
                      }, void 0, !1, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 382,
                        columnNumber: 29
                      }, globalThis),
                      /* @__PURE__ */ e(y, {
                        ref: t,
                        popup: !0,
                        model: [
                          { label: "Add New", icon: "pi pi-fw pi-plus" },
                          { label: "Remove", icon: "pi pi-fw pi-minus" }
                        ]
                      }, void 0, !1, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 388,
                        columnNumber: 29
                      }, globalThis)
                    ]
                  }, void 0, !0, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 381,
                    columnNumber: 25
                  }, globalThis)
                ]
              }, void 0, !0, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                lineNumber: 379,
                columnNumber: 21
              }, globalThis),
              /* @__PURE__ */ e("span", {
                className: "block text-600 font-medium mb-3",
                children: "TODAY"
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                lineNumber: 399,
                columnNumber: 21
              }, globalThis),
              /* @__PURE__ */ e("ul", {
                className: "p-0 mx-0 mt-0 mb-4 list-none",
                children: [
                  /* @__PURE__ */ e("li", {
                    className: "flex align-items-center py-2 border-bottom-1 surface-border",
                    children: [
                      /* @__PURE__ */ e("div", {
                        className: "w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0",
                        children: /* @__PURE__ */ e("i", {
                          className: "pi pi-dollar text-xl text-blue-500"
                        }, void 0, !1, {
                          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                          lineNumber: 403,
                          columnNumber: 33
                        }, globalThis)
                      }, void 0, !1, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 402,
                        columnNumber: 29
                      }, globalThis),
                      /* @__PURE__ */ e("span", {
                        className: "text-900 line-height-3",
                        children: [
                          "Richard Jones",
                          /* @__PURE__ */ e("span", {
                            className: "text-700",
                            children: [
                              " ",
                              "has purchased a blue t-shirt for ",
                              /* @__PURE__ */ e("span", {
                                className: "text-blue-500",
                                children: "79$"
                              }, void 0, !1, {
                                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                                lineNumber: 409,
                                columnNumber: 70
                              }, globalThis)
                            ]
                          }, void 0, !0, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 407,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 405,
                        columnNumber: 29
                      }, globalThis)
                    ]
                  }, void 0, !0, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 401,
                    columnNumber: 25
                  }, globalThis),
                  /* @__PURE__ */ e("li", {
                    className: "flex align-items-center py-2",
                    children: [
                      /* @__PURE__ */ e("div", {
                        className: "w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0",
                        children: /* @__PURE__ */ e("i", {
                          className: "pi pi-download text-xl text-orange-500"
                        }, void 0, !1, {
                          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                          lineNumber: 415,
                          columnNumber: 33
                        }, globalThis)
                      }, void 0, !1, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 414,
                        columnNumber: 29
                      }, globalThis),
                      /* @__PURE__ */ e("span", {
                        className: "text-700 line-height-3",
                        children: [
                          "Your request for withdrawal of ",
                          /* @__PURE__ */ e("span", {
                            className: "text-blue-500 font-medium",
                            children: "2500$"
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 418,
                            columnNumber: 64
                          }, globalThis),
                          " has been initiated."
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 417,
                        columnNumber: 29
                      }, globalThis)
                    ]
                  }, void 0, !0, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 413,
                    columnNumber: 25
                  }, globalThis)
                ]
              }, void 0, !0, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                lineNumber: 400,
                columnNumber: 21
              }, globalThis),
              /* @__PURE__ */ e("span", {
                className: "block text-600 font-medium mb-3",
                children: "YESTERDAY"
              }, void 0, !1, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                lineNumber: 423,
                columnNumber: 21
              }, globalThis),
              /* @__PURE__ */ e("ul", {
                className: "p-0 m-0 list-none",
                children: [
                  /* @__PURE__ */ e("li", {
                    className: "flex align-items-center py-2 border-bottom-1 surface-border",
                    children: [
                      /* @__PURE__ */ e("div", {
                        className: "w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0",
                        children: /* @__PURE__ */ e("i", {
                          className: "pi pi-dollar text-xl text-blue-500"
                        }, void 0, !1, {
                          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                          lineNumber: 427,
                          columnNumber: 33
                        }, globalThis)
                      }, void 0, !1, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 426,
                        columnNumber: 29
                      }, globalThis),
                      /* @__PURE__ */ e("span", {
                        className: "text-900 line-height-3",
                        children: [
                          "Keyser Wick",
                          /* @__PURE__ */ e("span", {
                            className: "text-700",
                            children: [
                              " ",
                              "has purchased a black jacket for ",
                              /* @__PURE__ */ e("span", {
                                className: "text-blue-500",
                                children: "59$"
                              }, void 0, !1, {
                                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                                lineNumber: 433,
                                columnNumber: 70
                              }, globalThis)
                            ]
                          }, void 0, !0, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 431,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 429,
                        columnNumber: 29
                      }, globalThis)
                    ]
                  }, void 0, !0, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 425,
                    columnNumber: 25
                  }, globalThis),
                  /* @__PURE__ */ e("li", {
                    className: "flex align-items-center py-2 border-bottom-1 surface-border",
                    children: [
                      /* @__PURE__ */ e("div", {
                        className: "w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0",
                        children: /* @__PURE__ */ e("i", {
                          className: "pi pi-question text-xl text-pink-500"
                        }, void 0, !1, {
                          fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                          lineNumber: 439,
                          columnNumber: 33
                        }, globalThis)
                      }, void 0, !1, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 438,
                        columnNumber: 29
                      }, globalThis),
                      /* @__PURE__ */ e("span", {
                        className: "text-900 line-height-3",
                        children: [
                          "Jane Davis",
                          /* @__PURE__ */ e("span", {
                            className: "text-700",
                            children: " has posted a new questions about your product."
                          }, void 0, !1, {
                            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                            lineNumber: 443,
                            columnNumber: 33
                          }, globalThis)
                        ]
                      }, void 0, !0, {
                        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                        lineNumber: 441,
                        columnNumber: 29
                      }, globalThis)
                    ]
                  }, void 0, !0, {
                    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                    lineNumber: 437,
                    columnNumber: 25
                  }, globalThis)
                ]
              }, void 0, !0, {
                fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
                lineNumber: 424,
                columnNumber: 21
              }, globalThis)
            ]
          }, void 0, !0, {
            fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
            lineNumber: 378,
            columnNumber: 17
          }, globalThis)
        ]
      }, void 0, !0, {
        fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
        lineNumber: 368,
        columnNumber: 13
      }, globalThis)
    ]
  }, void 0, !0, {
    fileName: "/Volumes/Data/Websites/Inertia/Trinity/Trinity-React/src/pages/Home.tsx",
    lineNumber: 114,
    columnNumber: 9
  }, globalThis);
};
export {
  j as default
};
