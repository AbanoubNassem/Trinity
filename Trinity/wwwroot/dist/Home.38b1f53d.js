import { r as a, d as j, e as O, O as N, L as S, j as t, b as e, F as R, B as b, M as v } from "./main.d5262881.js";
import { D as P, C as u } from "./column.esm.d965a8a1.js";
function g() {
  return g = Object.assign ? Object.assign.bind() : function(s) {
    for (var n = 1; n < arguments.length; n++) {
      var l = arguments[n];
      for (var c in l)
        Object.prototype.hasOwnProperty.call(l, c) && (s[c] = l[c]);
    }
    return s;
  }, g.apply(this, arguments);
}
var f = {
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
  getProps: function(n) {
    return N.getMergedProps(n, f.defaultProps);
  },
  getOtherProps: function(n) {
    return N.getDiffProps(n, f.defaultProps);
  }
}, y = function() {
  try {
    return Chart;
  } catch {
    return null;
  }
}(), w = /* @__PURE__ */ a.exports.memo(/* @__PURE__ */ a.exports.forwardRef(function(s, n) {
  var l = f.getProps(s), c = a.exports.useRef(null), r = a.exports.useRef(null), d = a.exports.useRef(null), p = function() {
    o();
    var x = {
      type: l.type,
      data: l.data,
      options: l.options,
      plugins: l.plugins
    };
    y ? r.current = new y(d.current, x) : import("./auto.15017637.js").then(function(h) {
      o(), !!d.current && h && (h.default ? r.current = new h.default(d.current, x) : r.current = new h(d.current, x));
    });
  }, o = function() {
    r.current && (r.current.destroy(), r.current = null);
  };
  a.exports.useImperativeHandle(n, function() {
    return {
      props: l,
      getCanvas: function() {
        return d.current;
      },
      getChart: function() {
        return r.current;
      },
      getBase64Image: function() {
        return r.current.toBase64Image();
      },
      getElement: function() {
        return c.current;
      },
      generateLegend: function() {
        return r.current && r.current.generateLegend();
      },
      refresh: function() {
        return r.current && r.current.update();
      }
    };
  }), a.exports.useEffect(function() {
    p();
  }), j(function() {
    o();
  });
  var i = f.getOtherProps(l), C = O("p-chart", l.className), k = Object.assign({
    width: l.width,
    height: l.height
  }, l.style);
  return /* @__PURE__ */ a.exports.createElement("div", g({
    id: l.id,
    ref: c,
    style: k,
    className: C
  }, i), /* @__PURE__ */ a.exports.createElement("canvas", {
    ref: d,
    width: l.width,
    height: l.height
  }));
}), function(s, n) {
  return s.data === n.data && s.options === n.options && s.type === n.type;
});
w.displayName = "Chart";
const D = {
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
}, A = () => {
  const s = a.exports.useRef(null), n = a.exports.useRef(null), [l, c] = a.exports.useState(null), { layoutConfig: r } = a.exports.useContext(S), d = () => {
    c({
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
  }, p = () => {
    c({
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
  a.exports.useEffect(() => {
    r.colorScheme === "light" ? d() : p();
  }, [r.colorScheme]);
  const o = (i) => i.toLocaleString("en-US", { style: "currency", currency: "USD" });
  return /* @__PURE__ */ t("div", {
    className: "grid",
    children: [
      /* @__PURE__ */ e("div", {
        className: "col-12 lg:col-6 xl:col-3",
        children: /* @__PURE__ */ t("div", {
          className: "card mb-0",
          children: [
            /* @__PURE__ */ t("div", {
              className: "flex justify-content-between mb-3",
              children: [
                /* @__PURE__ */ t("div", {
                  children: [
                    /* @__PURE__ */ e("span", {
                      className: "block text-500 font-medium mb-3",
                      children: "Orders"
                    }),
                    /* @__PURE__ */ e("div", {
                      className: "text-900 font-medium text-xl",
                      children: "152"
                    })
                  ]
                }),
                /* @__PURE__ */ e("div", {
                  className: "flex align-items-center justify-content-center bg-blue-100 border-round",
                  style: { width: "2.5rem", height: "2.5rem" },
                  children: /* @__PURE__ */ e("i", {
                    className: "pi pi-shopping-cart text-blue-500 text-xl"
                  })
                })
              ]
            }),
            /* @__PURE__ */ e("span", {
              className: "text-green-500 font-medium",
              children: "24 new "
            }),
            /* @__PURE__ */ e("span", {
              className: "text-500",
              children: "since last visit"
            })
          ]
        })
      }),
      /* @__PURE__ */ e("div", {
        className: "col-12 lg:col-6 xl:col-3",
        children: /* @__PURE__ */ t("div", {
          className: "card mb-0",
          children: [
            /* @__PURE__ */ t("div", {
              className: "flex justify-content-between mb-3",
              children: [
                /* @__PURE__ */ t("div", {
                  children: [
                    /* @__PURE__ */ e("span", {
                      className: "block text-500 font-medium mb-3",
                      children: "Revenue"
                    }),
                    /* @__PURE__ */ e("div", {
                      className: "text-900 font-medium text-xl",
                      children: "$2.100"
                    })
                  ]
                }),
                /* @__PURE__ */ e("div", {
                  className: "flex align-items-center justify-content-center bg-orange-100 border-round",
                  style: { width: "2.5rem", height: "2.5rem" },
                  children: /* @__PURE__ */ e("i", {
                    className: "pi pi-map-marker text-orange-500 text-xl"
                  })
                })
              ]
            }),
            /* @__PURE__ */ e("span", {
              className: "text-green-500 font-medium",
              children: "%52+ "
            }),
            /* @__PURE__ */ e("span", {
              className: "text-500",
              children: "since last week"
            })
          ]
        })
      }),
      /* @__PURE__ */ e("div", {
        className: "col-12 lg:col-6 xl:col-3",
        children: /* @__PURE__ */ t("div", {
          className: "card mb-0",
          children: [
            /* @__PURE__ */ t("div", {
              className: "flex justify-content-between mb-3",
              children: [
                /* @__PURE__ */ t("div", {
                  children: [
                    /* @__PURE__ */ e("span", {
                      className: "block text-500 font-medium mb-3",
                      children: "Customers"
                    }),
                    /* @__PURE__ */ e("div", {
                      className: "text-900 font-medium text-xl",
                      children: "28441"
                    })
                  ]
                }),
                /* @__PURE__ */ e("div", {
                  className: "flex align-items-center justify-content-center bg-cyan-100 border-round",
                  style: { width: "2.5rem", height: "2.5rem" },
                  children: /* @__PURE__ */ e("i", {
                    className: "pi pi-inbox text-cyan-500 text-xl"
                  })
                })
              ]
            }),
            /* @__PURE__ */ e("span", {
              className: "text-green-500 font-medium",
              children: "520 "
            }),
            /* @__PURE__ */ e("span", {
              className: "text-500",
              children: "newly registered"
            })
          ]
        })
      }),
      /* @__PURE__ */ e("div", {
        className: "col-12 lg:col-6 xl:col-3",
        children: /* @__PURE__ */ t("div", {
          className: "card mb-0",
          children: [
            /* @__PURE__ */ t("div", {
              className: "flex justify-content-between mb-3",
              children: [
                /* @__PURE__ */ t("div", {
                  children: [
                    /* @__PURE__ */ e("span", {
                      className: "block text-500 font-medium mb-3",
                      children: "Comments"
                    }),
                    /* @__PURE__ */ e("div", {
                      className: "text-900 font-medium text-xl",
                      children: "152 Unread"
                    })
                  ]
                }),
                /* @__PURE__ */ e("div", {
                  className: "flex align-items-center justify-content-center bg-purple-100 border-round",
                  style: { width: "2.5rem", height: "2.5rem" },
                  children: /* @__PURE__ */ e("i", {
                    className: "pi pi-comment text-purple-500 text-xl"
                  })
                })
              ]
            }),
            /* @__PURE__ */ e("span", {
              className: "text-green-500 font-medium",
              children: "85 "
            }),
            /* @__PURE__ */ e("span", {
              className: "text-500",
              children: "responded"
            })
          ]
        })
      }),
      /* @__PURE__ */ t("div", {
        className: "col-12 xl:col-6",
        children: [
          /* @__PURE__ */ t("div", {
            className: "card",
            children: [
              /* @__PURE__ */ e("h5", {
                children: "Recent Sales"
              }),
              /* @__PURE__ */ t(P, {
                rows: 5,
                paginator: !0,
                responsiveLayout: "scroll",
                children: [
                  /* @__PURE__ */ e(u, {
                    header: "Image",
                    body: (i) => /* @__PURE__ */ e("img", {
                      className: "shadow-2",
                      src: `/demo/images/product/${i.image}`,
                      alt: i.image,
                      width: "50"
                    })
                  }),
                  /* @__PURE__ */ e(u, {
                    field: "name",
                    header: "Name",
                    sortable: !0,
                    style: { width: "35%" }
                  }),
                  /* @__PURE__ */ e(u, {
                    field: "price",
                    header: "Price",
                    sortable: !0,
                    style: { width: "35%" },
                    body: (i) => o(i.price)
                  }),
                  /* @__PURE__ */ e(u, {
                    header: "View",
                    style: { width: "15%" },
                    body: () => /* @__PURE__ */ e(R, {
                      children: /* @__PURE__ */ e(b, {
                        icon: "pi pi-search",
                        type: "button",
                        className: "p-button-text"
                      })
                    })
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ t("div", {
            className: "card",
            children: [
              /* @__PURE__ */ t("div", {
                className: "flex justify-content-between align-items-center mb-5",
                children: [
                  /* @__PURE__ */ e("h5", {
                    children: "Best Selling Products"
                  }),
                  /* @__PURE__ */ t("div", {
                    children: [
                      /* @__PURE__ */ e(b, {
                        type: "button",
                        icon: "pi pi-ellipsis-v",
                        className: "p-button-rounded p-button-text p-button-plain",
                        onClick: (i) => s.current.toggle(i)
                      }),
                      /* @__PURE__ */ e(v, {
                        ref: s,
                        popup: !0,
                        model: [
                          { label: "Add New", icon: "pi pi-fw pi-plus" },
                          { label: "Remove", icon: "pi pi-fw pi-minus" }
                        ]
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ t("ul", {
                className: "list-none p-0 m-0",
                children: [
                  /* @__PURE__ */ t("li", {
                    className: "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4",
                    children: [
                      /* @__PURE__ */ t("div", {
                        children: [
                          /* @__PURE__ */ e("span", {
                            className: "text-900 font-medium mr-2 mb-1 md:mb-0",
                            children: "Space T-Shirt"
                          }),
                          /* @__PURE__ */ e("div", {
                            className: "mt-1 text-600",
                            children: "Clothing"
                          })
                        ]
                      }),
                      /* @__PURE__ */ t("div", {
                        className: "mt-2 md:mt-0 flex align-items-center",
                        children: [
                          /* @__PURE__ */ e("div", {
                            className: "surface-300 border-round overflow-hidden w-10rem lg:w-6rem",
                            style: { height: "8px" },
                            children: /* @__PURE__ */ e("div", {
                              className: "bg-orange-500 h-full",
                              style: { width: "50%" }
                            })
                          }),
                          /* @__PURE__ */ e("span", {
                            className: "text-orange-500 ml-3 font-medium",
                            children: "%50"
                          })
                        ]
                      })
                    ]
                  }),
                  /* @__PURE__ */ t("li", {
                    className: "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4",
                    children: [
                      /* @__PURE__ */ t("div", {
                        children: [
                          /* @__PURE__ */ e("span", {
                            className: "text-900 font-medium mr-2 mb-1 md:mb-0",
                            children: "Portal Sticker"
                          }),
                          /* @__PURE__ */ e("div", {
                            className: "mt-1 text-600",
                            children: "Accessories"
                          })
                        ]
                      }),
                      /* @__PURE__ */ t("div", {
                        className: "mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center",
                        children: [
                          /* @__PURE__ */ e("div", {
                            className: "surface-300 border-round overflow-hidden w-10rem lg:w-6rem",
                            style: { height: "8px" },
                            children: /* @__PURE__ */ e("div", {
                              className: "bg-cyan-500 h-full",
                              style: { width: "16%" }
                            })
                          }),
                          /* @__PURE__ */ e("span", {
                            className: "text-cyan-500 ml-3 font-medium",
                            children: "%16"
                          })
                        ]
                      })
                    ]
                  }),
                  /* @__PURE__ */ t("li", {
                    className: "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4",
                    children: [
                      /* @__PURE__ */ t("div", {
                        children: [
                          /* @__PURE__ */ e("span", {
                            className: "text-900 font-medium mr-2 mb-1 md:mb-0",
                            children: "Supernova Sticker"
                          }),
                          /* @__PURE__ */ e("div", {
                            className: "mt-1 text-600",
                            children: "Accessories"
                          })
                        ]
                      }),
                      /* @__PURE__ */ t("div", {
                        className: "mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center",
                        children: [
                          /* @__PURE__ */ e("div", {
                            className: "surface-300 border-round overflow-hidden w-10rem lg:w-6rem",
                            style: { height: "8px" },
                            children: /* @__PURE__ */ e("div", {
                              className: "bg-pink-500 h-full",
                              style: { width: "67%" }
                            })
                          }),
                          /* @__PURE__ */ e("span", {
                            className: "text-pink-500 ml-3 font-medium",
                            children: "%67"
                          })
                        ]
                      })
                    ]
                  }),
                  /* @__PURE__ */ t("li", {
                    className: "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4",
                    children: [
                      /* @__PURE__ */ t("div", {
                        children: [
                          /* @__PURE__ */ e("span", {
                            className: "text-900 font-medium mr-2 mb-1 md:mb-0",
                            children: "Wonders Notebook"
                          }),
                          /* @__PURE__ */ e("div", {
                            className: "mt-1 text-600",
                            children: "Office"
                          })
                        ]
                      }),
                      /* @__PURE__ */ t("div", {
                        className: "mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center",
                        children: [
                          /* @__PURE__ */ e("div", {
                            className: "surface-300 border-round overflow-hidden w-10rem lg:w-6rem",
                            style: { height: "8px" },
                            children: /* @__PURE__ */ e("div", {
                              className: "bg-green-500 h-full",
                              style: { width: "35%" }
                            })
                          }),
                          /* @__PURE__ */ e("span", {
                            className: "text-green-500 ml-3 font-medium",
                            children: "%35"
                          })
                        ]
                      })
                    ]
                  }),
                  /* @__PURE__ */ t("li", {
                    className: "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4",
                    children: [
                      /* @__PURE__ */ t("div", {
                        children: [
                          /* @__PURE__ */ e("span", {
                            className: "text-900 font-medium mr-2 mb-1 md:mb-0",
                            children: "Mat Black Case"
                          }),
                          /* @__PURE__ */ e("div", {
                            className: "mt-1 text-600",
                            children: "Accessories"
                          })
                        ]
                      }),
                      /* @__PURE__ */ t("div", {
                        className: "mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center",
                        children: [
                          /* @__PURE__ */ e("div", {
                            className: "surface-300 border-round overflow-hidden w-10rem lg:w-6rem",
                            style: { height: "8px" },
                            children: /* @__PURE__ */ e("div", {
                              className: "bg-purple-500 h-full",
                              style: { width: "75%" }
                            })
                          }),
                          /* @__PURE__ */ e("span", {
                            className: "text-purple-500 ml-3 font-medium",
                            children: "%75"
                          })
                        ]
                      })
                    ]
                  }),
                  /* @__PURE__ */ t("li", {
                    className: "flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4",
                    children: [
                      /* @__PURE__ */ t("div", {
                        children: [
                          /* @__PURE__ */ e("span", {
                            className: "text-900 font-medium mr-2 mb-1 md:mb-0",
                            children: "Robots T-Shirt"
                          }),
                          /* @__PURE__ */ e("div", {
                            className: "mt-1 text-600",
                            children: "Clothing"
                          })
                        ]
                      }),
                      /* @__PURE__ */ t("div", {
                        className: "mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center",
                        children: [
                          /* @__PURE__ */ e("div", {
                            className: "surface-300 border-round overflow-hidden w-10rem lg:w-6rem",
                            style: { height: "8px" },
                            children: /* @__PURE__ */ e("div", {
                              className: "bg-teal-500 h-full",
                              style: { width: "40%" }
                            })
                          }),
                          /* @__PURE__ */ e("span", {
                            className: "text-teal-500 ml-3 font-medium",
                            children: "%40"
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ t("div", {
        className: "col-12 xl:col-6",
        children: [
          /* @__PURE__ */ t("div", {
            className: "card",
            children: [
              /* @__PURE__ */ e("h5", {
                children: "Sales Overview"
              }),
              /* @__PURE__ */ e(w, {
                type: "line",
                data: D,
                options: l
              })
            ]
          }),
          /* @__PURE__ */ t("div", {
            className: "card",
            children: [
              /* @__PURE__ */ t("div", {
                className: "flex align-items-center justify-content-between mb-4",
                children: [
                  /* @__PURE__ */ e("h5", {
                    children: "Notifications"
                  }),
                  /* @__PURE__ */ t("div", {
                    children: [
                      /* @__PURE__ */ e(b, {
                        type: "button",
                        icon: "pi pi-ellipsis-v",
                        className: "p-button-rounded p-button-text p-button-plain",
                        onClick: (i) => n.current.toggle(i)
                      }),
                      /* @__PURE__ */ e(v, {
                        ref: n,
                        popup: !0,
                        model: [
                          { label: "Add New", icon: "pi pi-fw pi-plus" },
                          { label: "Remove", icon: "pi pi-fw pi-minus" }
                        ]
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ e("span", {
                className: "block text-600 font-medium mb-3",
                children: "TODAY"
              }),
              /* @__PURE__ */ t("ul", {
                className: "p-0 mx-0 mt-0 mb-4 list-none",
                children: [
                  /* @__PURE__ */ t("li", {
                    className: "flex align-items-center py-2 border-bottom-1 surface-border",
                    children: [
                      /* @__PURE__ */ e("div", {
                        className: "w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0",
                        children: /* @__PURE__ */ e("i", {
                          className: "pi pi-dollar text-xl text-blue-500"
                        })
                      }),
                      /* @__PURE__ */ t("span", {
                        className: "text-900 line-height-3",
                        children: [
                          "Richard Jones",
                          /* @__PURE__ */ t("span", {
                            className: "text-700",
                            children: [
                              " ",
                              "has purchased a blue t-shirt for ",
                              /* @__PURE__ */ e("span", {
                                className: "text-blue-500",
                                children: "79$"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  /* @__PURE__ */ t("li", {
                    className: "flex align-items-center py-2",
                    children: [
                      /* @__PURE__ */ e("div", {
                        className: "w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0",
                        children: /* @__PURE__ */ e("i", {
                          className: "pi pi-download text-xl text-orange-500"
                        })
                      }),
                      /* @__PURE__ */ t("span", {
                        className: "text-700 line-height-3",
                        children: [
                          "Your request for withdrawal of ",
                          /* @__PURE__ */ e("span", {
                            className: "text-blue-500 font-medium",
                            children: "2500$"
                          }),
                          " has been initiated."
                        ]
                      })
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ e("span", {
                className: "block text-600 font-medium mb-3",
                children: "YESTERDAY"
              }),
              /* @__PURE__ */ t("ul", {
                className: "p-0 m-0 list-none",
                children: [
                  /* @__PURE__ */ t("li", {
                    className: "flex align-items-center py-2 border-bottom-1 surface-border",
                    children: [
                      /* @__PURE__ */ e("div", {
                        className: "w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0",
                        children: /* @__PURE__ */ e("i", {
                          className: "pi pi-dollar text-xl text-blue-500"
                        })
                      }),
                      /* @__PURE__ */ t("span", {
                        className: "text-900 line-height-3",
                        children: [
                          "Keyser Wick",
                          /* @__PURE__ */ t("span", {
                            className: "text-700",
                            children: [
                              " ",
                              "has purchased a black jacket for ",
                              /* @__PURE__ */ e("span", {
                                className: "text-blue-500",
                                children: "59$"
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  /* @__PURE__ */ t("li", {
                    className: "flex align-items-center py-2 border-bottom-1 surface-border",
                    children: [
                      /* @__PURE__ */ e("div", {
                        className: "w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0",
                        children: /* @__PURE__ */ e("i", {
                          className: "pi pi-question text-xl text-pink-500"
                        })
                      }),
                      /* @__PURE__ */ t("span", {
                        className: "text-900 line-height-3",
                        children: [
                          "Jane Davis",
                          /* @__PURE__ */ e("span", {
                            className: "text-700",
                            children: " has posted a new questions about your product."
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
};
export {
  A as default
};
