import { o as b, c as g, a as t, d as w, r as p, b as l, w as o, u as e, s as h, e as x, f as v, g as f, t as _, _ as k } from "./main.d8cebbba.mjs";
import { s as C, a as u } from "./column.esm.df27de59.mjs";
import "./inputtext.esm.a2d500ce.mjs";
var y = {
  name: "Chart",
  emits: ["select", "loaded"],
  props: {
    type: String,
    data: null,
    options: null,
    plugins: null,
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 150
    }
  },
  chart: null,
  watch: {
    data: {
      handler() {
        this.reinit();
      },
      deep: !0
    },
    type() {
      this.reinit();
    },
    options() {
      this.reinit();
    }
  },
  mounted() {
    this.initChart();
  },
  beforeUnmount() {
    this.chart && (this.chart.destroy(), this.chart = null);
  },
  methods: {
    initChart() {
      import("./auto.b3a1bc06.mjs").then((s) => {
        this.chart && (this.chart.destroy(), this.chart = null), s && s.default && (this.chart = new s.default(this.$refs.canvas, {
          type: this.type,
          data: this.data,
          options: this.options,
          plugins: this.plugins
        })), this.$emit("loaded", this.chart);
      });
    },
    getCanvas() {
      return this.$canvas;
    },
    getChart() {
      return this.chart;
    },
    getBase64Image() {
      return this.chart.toBase64Image();
    },
    refresh() {
      this.chart && this.chart.update();
    },
    reinit() {
      this.initChart();
    },
    onCanvasClick(s) {
      if (this.chart) {
        const i = this.chart.getElementsAtEventForMode(s, "nearest", { intersect: !0 }, !1), a = this.chart.getElementsAtEventForMode(s, "dataset", { intersect: !0 }, !1);
        i && i[0] && a && this.$emit("select", { originalEvent: s, element: i[0], dataset: a });
      }
    },
    generateLegend() {
      if (this.chart)
        return this.chart.generateLegend();
    }
  }
};
const j = { class: "p-chart" }, $ = ["width", "height"];
function S(s, i, a, d, n, m) {
  return b(), g("div", j, [
    t("canvas", {
      ref: "canvas",
      width: a.width,
      height: a.height,
      onClick: i[0] || (i[0] = (c) => m.onCanvasClick(c))
    }, null, 8, $)
  ]);
}
function N(s, i) {
  i === void 0 && (i = {});
  var a = i.insertAt;
  if (!(!s || typeof document > "u")) {
    var d = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", a === "top" && d.firstChild ? d.insertBefore(n, d.firstChild) : d.appendChild(n), n.styleSheet ? n.styleSheet.cssText = s : n.appendChild(document.createTextNode(s));
  }
}
var A = `
.p-chart {
    position: relative;
}
`;
N(A);
y.render = S;
const E = { class: "grid" }, T = /* @__PURE__ */ v('<div class="col-12 lg:col-6 xl:col-3"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Orders</span><div class="text-900 font-medium text-xl">152</div></div><div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-shopping-cart text-blue-500 text-xl"></i></div></div><span class="text-green-500 font-medium">24 new </span><span class="text-500">since last visit</span></div></div><div class="col-12 lg:col-6 xl:col-3"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Revenue</span><div class="text-900 font-medium text-xl">$2.100</div></div><div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-map-marker text-orange-500 text-xl"></i></div></div><span class="text-green-500 font-medium">%52+ </span><span class="text-500">since last week</span></div></div><div class="col-12 lg:col-6 xl:col-3"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Customers</span><div class="text-900 font-medium text-xl">28441</div></div><div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-inbox text-cyan-500 text-xl"></i></div></div><span class="text-green-500 font-medium">520 </span><span class="text-500">newly registered</span></div></div><div class="col-12 lg:col-6 xl:col-3"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Comments</span><div class="text-900 font-medium text-xl">152 Unread</div></div><div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-comment text-purple-500 text-xl"></i></div></div><span class="text-green-500 font-medium">85 </span><span class="text-500">responded</span></div></div>', 4), B = { class: "col-12 xl:col-6" }, R = { class: "card" }, V = /* @__PURE__ */ t("h5", null, "Recent Sales", -1), D = ["src", "alt"], I = { class: "card" }, J = { class: "flex justify-content-between align-items-center mb-5" }, M = /* @__PURE__ */ t("h5", null, "Best Selling Products", -1), O = /* @__PURE__ */ v('<ul class="list-none p-0 m-0"><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span><div class="mt-1 text-600">Clothing</div></div><div class="mt-2 md:mt-0 flex align-items-center"><div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px;"><div class="bg-orange-500 h-full" style="width:50%;"></div></div><span class="text-orange-500 ml-3 font-medium">%50</span></div></li><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span><div class="mt-1 text-600">Accessories</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center"><div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px;"><div class="bg-cyan-500 h-full" style="width:16%;"></div></div><span class="text-cyan-500 ml-3 font-medium">%16</span></div></li><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span><div class="mt-1 text-600">Accessories</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center"><div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px;"><div class="bg-pink-500 h-full" style="width:67%;"></div></div><span class="text-pink-500 ml-3 font-medium">%67</span></div></li><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span><div class="mt-1 text-600">Office</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center"><div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px;"><div class="bg-green-500 h-full" style="width:35%;"></div></div><span class="text-green-500 ml-3 font-medium">%35</span></div></li><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span><div class="mt-1 text-600">Accessories</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center"><div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px;"><div class="bg-purple-500 h-full" style="width:75%;"></div></div><span class="text-purple-500 ml-3 font-medium">%75</span></div></li><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span><div class="mt-1 text-600">Clothing</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center"><div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px;"><div class="bg-teal-500 h-full" style="width:40%;"></div></div><span class="text-teal-500 ml-3 font-medium">%40</span></div></li></ul>', 1), Y = { class: "col-12 xl:col-6" }, q = { class: "card" }, F = /* @__PURE__ */ t("h5", null, "Sales Overview", -1), H = { class: "card" }, L = { class: "flex align-items-center justify-content-between mb-4" }, P = /* @__PURE__ */ t("h5", null, "Notifications", -1), W = /* @__PURE__ */ v('<span class="block text-600 font-medium mb-3">TODAY</span><ul class="p-0 mx-0 mt-0 mb-4 list-none"><li class="flex align-items-center py-2 border-bottom-1 surface-border"><div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0"><i class="pi pi-dollar text-xl text-blue-500"></i></div><span class="text-900 line-height-3">Richard Jones <span class="text-700">has purchased a blue t-shirt for <span class="text-blue-500">79$</span></span></span></li><li class="flex align-items-center py-2"><div class="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0"><i class="pi pi-download text-xl text-orange-500"></i></div><span class="text-700 line-height-3">Your request for withdrawal of <span class="text-blue-500 font-medium">2500$</span> has been initiated.</span></li></ul><span class="block text-600 font-medium mb-3">YESTERDAY</span><ul class="p-0 m-0 list-none"><li class="flex align-items-center py-2 border-bottom-1 surface-border"><div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0"><i class="pi pi-dollar text-xl text-blue-500"></i></div><span class="text-900 line-height-3">Keyser Wick <span class="text-700">has purchased a black jacket for <span class="text-blue-500">59$</span></span></span></li><li class="flex align-items-center py-2 border-bottom-1 surface-border"><div class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0"><i class="pi pi-question text-xl text-pink-500"></i></div><span class="text-900 line-height-3">Jane Davis <span class="text-700">has posted a new questions about your product.</span></span></li></ul>', 4), U = /* @__PURE__ */ w({
  __name: "Home",
  setup(s) {
    let i = p(null), a = p({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Revenue",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: !1,
          backgroundColor: "#2f4860",
          borderColor: "#2f4860",
          tension: 0.4
        },
        {
          label: "Sales",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: !1,
          backgroundColor: "#00bb7e",
          borderColor: "#00bb7e",
          tension: 0.4
        }
      ]
    }), d = p([
      { label: "Add New", icon: "pi pi-fw pi-plus" },
      { label: "Remove", icon: "pi pi-fw pi-minus" }
    ]), n = p(null);
    return (m, c) => (b(), g("div", E, [
      T,
      t("div", B, [
        t("div", R, [
          V,
          l(e(C), {
            value: e(i),
            rows: 5,
            paginator: !0,
            responsiveLayout: "scroll"
          }, {
            default: o(() => [
              l(e(u), { style: { width: "15%" } }, {
                header: o(() => [
                  f(" Image")
                ]),
                body: o((r) => [
                  t("img", {
                    src: "images/product/" + r.data.image,
                    alt: r.data.image,
                    width: "50",
                    class: "shadow-2"
                  }, null, 8, D)
                ]),
                _: 1
              }),
              l(e(u), {
                field: "name",
                header: "Name",
                sortable: !0,
                style: { width: "35%" }
              }),
              l(e(u), {
                field: "price",
                header: "Price",
                sortable: !0,
                style: { width: "35%" }
              }, {
                body: o((r) => [
                  f(_(m.formatCurrency(r.data.price)), 1)
                ]),
                _: 1
              }),
              l(e(u), { style: { width: "15%" } }, {
                header: o(() => [
                  f(" View")
                ]),
                body: o(() => [
                  l(e(h), {
                    icon: "pi pi-search",
                    type: "button",
                    class: "p-button-text"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["value"])
        ]),
        t("div", I, [
          t("div", J, [
            M,
            t("div", null, [
              l(e(h), {
                icon: "pi pi-ellipsis-v",
                class: "p-button-text p-button-plain p-button-rounded",
                onClick: c[0] || (c[0] = (r) => m.$refs.menu2.toggle(r))
              }),
              l(e(x), {
                ref: "menu2",
                popup: !0,
                model: e(d)
              }, null, 8, ["model"])
            ])
          ]),
          O
        ])
      ]),
      t("div", Y, [
        t("div", q, [
          F,
          l(e(y), {
            type: "line",
            data: e(a),
            options: e(n)
          }, null, 8, ["data", "options"])
        ]),
        t("div", H, [
          t("div", L, [
            P,
            t("div", null, [
              l(e(h), {
                icon: "pi pi-ellipsis-v",
                class: "p-button-text p-button-plain p-button-rounded",
                onClick: c[1] || (c[1] = (r) => m.$refs.menu1.toggle(r))
              }),
              l(e(x), {
                ref: "menu1",
                popup: !0,
                model: e(d)
              }, null, 8, ["model"])
            ])
          ]),
          W
        ])
      ])
    ]));
  }
}), Q = /* @__PURE__ */ k(U, [["__file", "/Volumes/Data/Websites/Inertia/Trinity/Trinity-Vue/src/Pages/Home.vue"]]);
export {
  Q as default
};
