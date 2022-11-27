import { O as N, R, r as E, a as F, o as a, c as o, b as d, F as g, d as w, w as v, e as T, n as x, f as y, t as O, g as H, h as A, Z as L, D as u, C as P, U as M, i as h, T as U, m as Z, j as z, k as q, l as I, p as J, q as C, u as c, s as D, v as S } from "./main.bc71fd1d.mjs";
import { O as W, s as Y, a as _, b as G } from "./column.esm.aa876922.mjs";
var B = {
  name: "Menuitem",
  inheritAttrs: !1,
  emits: ["item-click"],
  props: {
    item: null,
    template: null,
    exact: null,
    id: null,
    focusedOptionId: null
  },
  methods: {
    getItemProp(e, t) {
      return e && e.item ? N.getItemValue(e.item[t]) : void 0;
    },
    onItemActionClick(e, t) {
      t && t(e);
    },
    onItemClick(e) {
      const t = this.getItemProp(this.item, "command");
      t && t({ originalEvent: e, item: this.item.item }), this.$emit("item-click", { originalEvent: e, item: this.item, id: this.id });
    },
    containerClass() {
      return ["p-menuitem", this.item.class, { "p-focus": this.id === this.focusedOptionId, "p-disabled": this.disabled() }];
    },
    linkClass(e) {
      return [
        "p-menuitem-link",
        {
          "router-link-active": e && e.isActive,
          "router-link-active-exact": this.exact && e && e.isExactActive
        }
      ];
    },
    visible() {
      return typeof this.item.visible == "function" ? this.item.visible() : this.item.visible !== !1;
    },
    disabled() {
      return typeof this.item.disabled == "function" ? this.item.disabled() : this.item.disabled;
    },
    label() {
      return typeof this.item.label == "function" ? this.item.label() : this.item.label;
    }
  },
  directives: {
    ripple: R
  }
};
const Q = ["id", "aria-label", "aria-disabled"], X = ["href", "onClick"], $ = { class: "p-menuitem-text" }, ee = ["href", "target"], te = { class: "p-menuitem-text" };
function ie(e, t, s, r, l, i) {
  const p = E("router-link"), m = F("ripple");
  return i.visible() ? (a(), o("li", {
    key: 0,
    id: s.id,
    class: x(i.containerClass()),
    role: "menuitem",
    style: A(s.item.style),
    "aria-label": i.label(),
    "aria-disabled": i.disabled()
  }, [
    d("div", {
      class: "p-menuitem-content",
      onClick: t[0] || (t[0] = (n) => i.onItemClick(n))
    }, [
      s.template ? (a(), w(H(s.template), {
        key: 1,
        item: s.item
      }, null, 8, ["item"])) : (a(), o(g, { key: 0 }, [
        s.item.to && !i.disabled() ? (a(), w(p, {
          key: 0,
          to: s.item.to,
          custom: ""
        }, {
          default: v(({ navigate: n, href: f, isActive: b, isExactActive: k }) => [
            T((a(), o("a", {
              href: f,
              class: x(i.linkClass({ isActive: b, isExactActive: k })),
              tabindex: "-1",
              "aria-hidden": "true",
              onClick: (K) => i.onItemActionClick(K, n)
            }, [
              s.item.icon ? (a(), o("span", {
                key: 0,
                class: x(["p-menuitem-icon", s.item.icon])
              }, null, 2)) : y("", !0),
              d("span", $, O(i.label()), 1)
            ], 10, X)), [
              [m]
            ])
          ]),
          _: 1
        }, 8, ["to"])) : T((a(), o("a", {
          key: 1,
          href: s.item.url,
          class: x(i.linkClass()),
          target: s.item.target,
          tabindex: "-1",
          "aria-hidden": "true"
        }, [
          s.item.icon ? (a(), o("span", {
            key: 0,
            class: x(["p-menuitem-icon", s.item.icon])
          }, null, 2)) : y("", !0),
          d("span", te, O(i.label()), 1)
        ], 10, ee)), [
          [m]
        ])
      ], 64))
    ])
  ], 14, Q)) : y("", !0);
}
B.render = ie;
var j = {
  name: "Menu",
  inheritAttrs: !1,
  emits: ["show", "hide", "focus", "blur"],
  props: {
    popup: {
      type: Boolean,
      default: !1
    },
    model: {
      type: Array,
      default: null
    },
    appendTo: {
      type: String,
      default: "body"
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    exact: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    },
    "aria-label": {
      type: String,
      default: null
    },
    "aria-labelledby": {
      type: String,
      default: null
    }
  },
  data() {
    return {
      overlayVisible: !1,
      focused: !1,
      focusedOptionIndex: -1,
      selectedOptionIndex: -1
    };
  },
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  list: null,
  mounted() {
    this.popup || (this.bindResizeListener(), this.bindOutsideClickListener());
  },
  beforeUnmount() {
    this.unbindResizeListener(), this.unbindOutsideClickListener(), this.scrollHandler && (this.scrollHandler.destroy(), this.scrollHandler = null), this.target = null, this.container && this.autoZIndex && L.clear(this.container), this.container = null;
  },
  methods: {
    itemClick(e) {
      const t = e.item;
      this.disabled(t) || (t.command && t.command(e), t.to && e.navigate && e.navigate(e.originalEvent), this.overlayVisible && this.hide(), !this.popup && this.focusedOptionIndex !== e.id && (this.focusedOptionIndex = e.id));
    },
    onListFocus(e) {
      this.focused = !0, this.popup || (this.selectedOptionIndex !== -1 ? (this.changeFocusedOptionIndex(this.selectedOptionIndex), this.selectedOptionIndex = -1) : this.changeFocusedOptionIndex(0)), this.$emit("focus", e);
    },
    onListBlur(e) {
      this.focused = !1, this.focusedOptionIndex = -1, this.$emit("blur", e);
    },
    onListKeyDown(e) {
      switch (e.code) {
        case "ArrowDown":
          this.onArrowDownKey(e);
          break;
        case "ArrowUp":
          this.onArrowUpKey(e);
          break;
        case "Home":
          this.onHomeKey(e);
          break;
        case "End":
          this.onEndKey(e);
          break;
        case "Enter":
          this.onEnterKey(e);
          break;
        case "Space":
          this.onSpaceKey(e);
          break;
        case "Tab":
          this.overlayVisible && this.hide();
          break;
      }
    },
    onArrowDownKey(e) {
      const t = this.findNextOptionIndex(this.focusedOptionIndex);
      this.changeFocusedOptionIndex(t), e.preventDefault();
    },
    onArrowUpKey(e) {
      if (e.altKey && this.popup)
        u.focus(this.target), this.hide(), e.preventDefault();
      else {
        const t = this.findPrevOptionIndex(this.focusedOptionIndex);
        this.changeFocusedOptionIndex(t), e.preventDefault();
      }
    },
    onHomeKey(e) {
      this.changeFocusedOptionIndex(0), e.preventDefault();
    },
    onEndKey(e) {
      this.changeFocusedOptionIndex(u.find(this.container, "li.p-menuitem:not(.p-disabled)").length - 1), e.preventDefault();
    },
    onEnterKey(e) {
      const t = u.findSingle(this.list, `li[id="${`${this.focusedOptionIndex}`}"]`), s = t && u.findSingle(t, ".p-menuitem-link");
      this.popup && u.focus(this.target), s ? s.click() : t && t.click(), e.preventDefault();
    },
    onSpaceKey(e) {
      this.onEnterKey(e);
    },
    findNextOptionIndex(e) {
      const s = [...u.find(this.container, "li.p-menuitem:not(.p-disabled)")].findIndex((r) => r.id === e);
      return s > -1 ? s + 1 : 0;
    },
    findPrevOptionIndex(e) {
      const s = [...u.find(this.container, "li.p-menuitem:not(.p-disabled)")].findIndex((r) => r.id === e);
      return s > -1 ? s - 1 : 0;
    },
    changeFocusedOptionIndex(e) {
      const t = u.find(this.container, "li.p-menuitem:not(.p-disabled)");
      let s = e > t.length ? t.length - 1 : e < 0 ? 0 : e;
      s > -1 && t.length > 0 && (this.focusedOptionIndex = t[s].getAttribute("id"));
    },
    toggle(e) {
      this.overlayVisible ? this.hide() : this.show(e);
    },
    show(e) {
      this.overlayVisible = !0, this.target = e.currentTarget;
    },
    hide() {
      this.overlayVisible = !1, this.target = null;
    },
    onEnter(e) {
      this.alignOverlay(), this.bindOutsideClickListener(), this.bindResizeListener(), this.bindScrollListener(), this.autoZIndex && L.set("menu", e, this.baseZIndex + this.$primevue.config.zIndex.menu), this.popup && (u.focus(this.list), this.changeFocusedOptionIndex(0)), this.$emit("show");
    },
    onLeave() {
      this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindScrollListener(), this.$emit("hide");
    },
    onAfterLeave(e) {
      this.autoZIndex && L.clear(e);
    },
    alignOverlay() {
      u.absolutePosition(this.container, this.target), this.container.style.minWidth = u.getOuterWidth(this.target) + "px";
    },
    bindOutsideClickListener() {
      this.outsideClickListener || (this.outsideClickListener = (e) => {
        const t = this.container && !this.container.contains(e.target), s = !(this.target && (this.target === e.target || this.target.contains(e.target)));
        this.overlayVisible && t && s ? this.hide() : !this.popup && t && s && (this.focusedOptionIndex = -1);
      }, document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener), this.outsideClickListener = null);
    },
    bindScrollListener() {
      this.scrollHandler || (this.scrollHandler = new P(this.target, () => {
        this.overlayVisible && this.hide();
      })), this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener() {
      this.scrollHandler && this.scrollHandler.unbindScrollListener();
    },
    bindResizeListener() {
      this.resizeListener || (this.resizeListener = () => {
        this.overlayVisible && !u.isTouchDevice() && this.hide();
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    visible(e) {
      return typeof e.visible == "function" ? e.visible() : e.visible !== !1;
    },
    disabled(e) {
      return typeof e.disabled == "function" ? e.disabled() : e.disabled;
    },
    label(e) {
      return typeof e.label == "function" ? e.label() : e.label;
    },
    separatorClass(e) {
      return ["p-menuitem-separator", e.class];
    },
    onOverlayClick(e) {
      W.emit("overlay-click", {
        originalEvent: e,
        target: this.target
      });
    },
    containerRef(e) {
      this.container = e;
    },
    listRef(e) {
      this.list = e;
    }
  },
  computed: {
    containerClass() {
      return [
        "p-menu p-component",
        {
          "p-menu-overlay": this.popup,
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === !1
        }
      ];
    },
    id() {
      return this.$attrs.id || M();
    },
    focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
    }
  },
  components: {
    PVMenuitem: B,
    Portal: Y
  }
};
const se = ["id"], ne = ["id", "tabindex", "aria-activedescendant", "aria-label", "aria-labelledby"], le = ["id"];
function ae(e, t, s, r, l, i) {
  const p = E("PVMenuitem"), m = E("Portal");
  return a(), w(m, {
    appendTo: s.appendTo,
    disabled: !s.popup
  }, {
    default: v(() => [
      h(U, {
        name: "p-connected-overlay",
        onEnter: i.onEnter,
        onLeave: i.onLeave,
        onAfterLeave: i.onAfterLeave
      }, {
        default: v(() => [
          !s.popup || l.overlayVisible ? (a(), o("div", Z({
            key: 0,
            ref: i.containerRef,
            id: i.id,
            class: i.containerClass
          }, e.$attrs, {
            onClick: t[3] || (t[3] = (...n) => i.onOverlayClick && i.onOverlayClick(...n))
          }), [
            d("ul", {
              ref: i.listRef,
              id: i.id + "_list",
              class: "p-menu-list p-reset",
              role: "menu",
              tabindex: s.tabindex,
              "aria-activedescendant": l.focused ? i.focusedOptionId : void 0,
              "aria-label": e.ariaLabel,
              "aria-labelledby": e.ariaLabelledby,
              onFocus: t[0] || (t[0] = (...n) => i.onListFocus && i.onListFocus(...n)),
              onBlur: t[1] || (t[1] = (...n) => i.onListBlur && i.onListBlur(...n)),
              onKeydown: t[2] || (t[2] = (...n) => i.onListKeyDown && i.onListKeyDown(...n))
            }, [
              (a(!0), o(g, null, z(s.model, (n, f) => (a(), o(g, {
                key: i.label(n) + f.toString()
              }, [
                n.items && i.visible(n) && !n.separator ? (a(), o(g, { key: 0 }, [
                  n.items ? (a(), o("li", {
                    key: 0,
                    id: i.id + "_" + f,
                    class: "p-submenu-header",
                    role: "none"
                  }, [
                    q(e.$slots, "item", { item: n }, () => [
                      I(O(i.label(n)), 1)
                    ])
                  ], 8, le)) : y("", !0),
                  (a(!0), o(g, null, z(n.items, (b, k) => (a(), o(g, {
                    key: b.label + f + "_" + k
                  }, [
                    i.visible(b) && !b.separator ? (a(), w(p, {
                      key: 0,
                      id: i.id + "_" + f + "_" + k,
                      item: b,
                      template: e.$slots.item,
                      exact: s.exact,
                      focusedOptionId: i.focusedOptionId,
                      onItemClick: i.itemClick
                    }, null, 8, ["id", "item", "template", "exact", "focusedOptionId", "onItemClick"])) : i.visible(b) && b.separator ? (a(), o("li", {
                      key: "separator" + f + k,
                      class: x(i.separatorClass(n)),
                      style: A(b.style),
                      role: "separator"
                    }, null, 6)) : y("", !0)
                  ], 64))), 128))
                ], 64)) : i.visible(n) && n.separator ? (a(), o("li", {
                  key: "separator" + f.toString(),
                  class: x(i.separatorClass(n)),
                  style: A(n.style),
                  role: "separator"
                }, null, 6)) : (a(), w(p, {
                  key: i.label(n) + f.toString(),
                  id: i.id + "_" + f,
                  item: n,
                  template: e.$slots.item,
                  exact: s.exact,
                  focusedOptionId: i.focusedOptionId,
                  onItemClick: i.itemClick
                }, null, 8, ["id", "item", "template", "exact", "focusedOptionId", "onItemClick"]))
              ], 64))), 128))
            ], 40, ne)
          ], 16, se)) : y("", !0)
        ]),
        _: 3
      }, 8, ["onEnter", "onLeave", "onAfterLeave"])
    ]),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
function re(e, t) {
  t === void 0 && (t = {});
  var s = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], l = document.createElement("style");
    l.type = "text/css", s === "top" && r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l), l.styleSheet ? l.styleSheet.cssText = e : l.appendChild(document.createTextNode(e));
  }
}
var de = `
.p-menu-overlay {
    position: absolute;
    top: 0;
    left: 0;
}
.p-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-menu .p-menuitem-link {
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-menu .p-menuitem-text {
    line-height: 1;
}
`;
re(de);
j.render = ae;
var V = {
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
      import("./auto.b3a1bc06.mjs").then((e) => {
        this.chart && (this.chart.destroy(), this.chart = null), e && e.default && (this.chart = new e.default(this.$refs.canvas, {
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
    onCanvasClick(e) {
      if (this.chart) {
        const t = this.chart.getElementsAtEventForMode(e, "nearest", { intersect: !0 }, !1), s = this.chart.getElementsAtEventForMode(e, "dataset", { intersect: !0 }, !1);
        t && t[0] && s && this.$emit("select", { originalEvent: e, element: t[0], dataset: s });
      }
    },
    generateLegend() {
      if (this.chart)
        return this.chart.generateLegend();
    }
  }
};
const oe = { class: "p-chart" }, ce = ["width", "height"];
function me(e, t, s, r, l, i) {
  return a(), o("div", oe, [
    d("canvas", {
      ref: "canvas",
      width: s.width,
      height: s.height,
      onClick: t[0] || (t[0] = (p) => i.onCanvasClick(p))
    }, null, 8, ce)
  ]);
}
function ue(e, t) {
  t === void 0 && (t = {});
  var s = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var r = document.head || document.getElementsByTagName("head")[0], l = document.createElement("style");
    l.type = "text/css", s === "top" && r.firstChild ? r.insertBefore(l, r.firstChild) : r.appendChild(l), l.styleSheet ? l.styleSheet.cssText = e : l.appendChild(document.createTextNode(e));
  }
}
var he = `
.p-chart {
    position: relative;
}
`;
ue(he);
V.render = me;
const pe = { class: "grid" }, fe = /* @__PURE__ */ D('<div class="col-12 lg:col-6 xl:col-3"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Orders</span><div class="text-900 font-medium text-xl">152</div></div><div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-shopping-cart text-blue-500 text-xl"></i></div></div><span class="text-green-500 font-medium">24 new </span><span class="text-500">since last visit</span></div></div><div class="col-12 lg:col-6 xl:col-3"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Revenue</span><div class="text-900 font-medium text-xl">$2.100</div></div><div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-map-marker text-orange-500 text-xl"></i></div></div><span class="text-green-500 font-medium">%52+ </span><span class="text-500">since last week</span></div></div><div class="col-12 lg:col-6 xl:col-3"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Customers</span><div class="text-900 font-medium text-xl">28441</div></div><div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-inbox text-cyan-500 text-xl"></i></div></div><span class="text-green-500 font-medium">520 </span><span class="text-500">newly registered</span></div></div><div class="col-12 lg:col-6 xl:col-3"><div class="card mb-0"><div class="flex justify-content-between mb-3"><div><span class="block text-500 font-medium mb-3">Comments</span><div class="text-900 font-medium text-xl">152 Unread</div></div><div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem;"><i class="pi pi-comment text-purple-500 text-xl"></i></div></div><span class="text-green-500 font-medium">85 </span><span class="text-500">responded</span></div></div>', 4), be = { class: "col-12 xl:col-6" }, ve = { class: "card" }, xe = /* @__PURE__ */ d("h5", null, "Recent Sales", -1), ge = ["src", "alt"], ye = { class: "card" }, ke = { class: "flex justify-content-between align-items-center mb-5" }, we = /* @__PURE__ */ d("h5", null, "Best Selling Products", -1), Ce = /* @__PURE__ */ D('<ul class="list-none p-0 m-0"><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span><div class="mt-1 text-600">Clothing</div></div><div class="mt-2 md:mt-0 flex align-items-center"><div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px;"><div class="bg-orange-500 h-full" style="width:50%;"></div></div><span class="text-orange-500 ml-3 font-medium">%50</span></div></li><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span><div class="mt-1 text-600">Accessories</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center"><div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px;"><div class="bg-cyan-500 h-full" style="width:16%;"></div></div><span class="text-cyan-500 ml-3 font-medium">%16</span></div></li><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span><div class="mt-1 text-600">Accessories</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center"><div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px;"><div class="bg-pink-500 h-full" style="width:67%;"></div></div><span class="text-pink-500 ml-3 font-medium">%67</span></div></li><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span><div class="mt-1 text-600">Office</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center"><div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px;"><div class="bg-green-500 h-full" style="width:35%;"></div></div><span class="text-green-500 ml-3 font-medium">%35</span></div></li><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span><div class="mt-1 text-600">Accessories</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center"><div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px;"><div class="bg-purple-500 h-full" style="width:75%;"></div></div><span class="text-purple-500 ml-3 font-medium">%75</span></div></li><li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4"><div><span class="text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span><div class="mt-1 text-600">Clothing</div></div><div class="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center"><div class="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style="height:8px;"><div class="bg-teal-500 h-full" style="width:40%;"></div></div><span class="text-teal-500 ml-3 font-medium">%40</span></div></li></ul>', 1), _e = { class: "col-12 xl:col-6" }, Ie = { class: "card" }, Oe = /* @__PURE__ */ d("h5", null, "Sales Overview", -1), Le = { class: "card" }, Se = { class: "flex align-items-center justify-content-between mb-4" }, Ee = /* @__PURE__ */ d("h5", null, "Notifications", -1), Ae = /* @__PURE__ */ D('<span class="block text-600 font-medium mb-3">TODAY</span><ul class="p-0 mx-0 mt-0 mb-4 list-none"><li class="flex align-items-center py-2 border-bottom-1 surface-border"><div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0"><i class="pi pi-dollar text-xl text-blue-500"></i></div><span class="text-900 line-height-3">Richard Jones <span class="text-700">has purchased a blue t-shirt for <span class="text-blue-500">79$</span></span></span></li><li class="flex align-items-center py-2"><div class="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0"><i class="pi pi-download text-xl text-orange-500"></i></div><span class="text-700 line-height-3">Your request for withdrawal of <span class="text-blue-500 font-medium">2500$</span> has been initiated.</span></li></ul><span class="block text-600 font-medium mb-3">YESTERDAY</span><ul class="p-0 m-0 list-none"><li class="flex align-items-center py-2 border-bottom-1 surface-border"><div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0"><i class="pi pi-dollar text-xl text-blue-500"></i></div><span class="text-900 line-height-3">Keyser Wick <span class="text-700">has purchased a black jacket for <span class="text-blue-500">59$</span></span></span></li><li class="flex align-items-center py-2 border-bottom-1 surface-border"><div class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0"><i class="pi pi-question text-xl text-pink-500"></i></div><span class="text-900 line-height-3">Jane Davis <span class="text-700">has posted a new questions about your product.</span></span></li></ul>', 4), Te = /* @__PURE__ */ J({
  __name: "Home",
  setup(e) {
    let t = C(null), s = C({
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
    }), r = C([
      { label: "Add New", icon: "pi pi-fw pi-plus" },
      { label: "Remove", icon: "pi pi-fw pi-minus" }
    ]), l = C(null);
    return (i, p) => (a(), o("div", pe, [
      fe,
      d("div", be, [
        d("div", ve, [
          xe,
          h(c(G), {
            value: c(t),
            rows: 5,
            paginator: !0,
            responsiveLayout: "scroll"
          }, {
            default: v(() => [
              h(c(_), { style: { width: "15%" } }, {
                header: v(() => [
                  I(" Image")
                ]),
                body: v((m) => [
                  d("img", {
                    src: "images/product/" + m.data.image,
                    alt: m.data.image,
                    width: "50",
                    class: "shadow-2"
                  }, null, 8, ge)
                ]),
                _: 1
              }),
              h(c(_), {
                field: "name",
                header: "Name",
                sortable: !0,
                style: { width: "35%" }
              }),
              h(c(_), {
                field: "price",
                header: "Price",
                sortable: !0,
                style: { width: "35%" }
              }, {
                body: v((m) => [
                  I(O(i.formatCurrency(m.data.price)), 1)
                ]),
                _: 1
              }),
              h(c(_), { style: { width: "15%" } }, {
                header: v(() => [
                  I(" View")
                ]),
                body: v(() => [
                  h(c(S), {
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
        d("div", ye, [
          d("div", ke, [
            we,
            d("div", null, [
              h(c(S), {
                icon: "pi pi-ellipsis-v",
                class: "p-button-text p-button-plain p-button-rounded",
                onClick: p[0] || (p[0] = (m) => i.$refs.menu2.toggle(m))
              }),
              h(c(j), {
                ref: "menu2",
                popup: !0,
                model: c(r)
              }, null, 8, ["model"])
            ])
          ]),
          Ce
        ])
      ]),
      d("div", _e, [
        d("div", Ie, [
          Oe,
          h(c(V), {
            type: "line",
            data: c(s),
            options: c(l)
          }, null, 8, ["data", "options"])
        ]),
        d("div", Le, [
          d("div", Se, [
            Ee,
            d("div", null, [
              h(c(S), {
                icon: "pi pi-ellipsis-v",
                class: "p-button-text p-button-plain p-button-rounded",
                onClick: p[1] || (p[1] = (m) => i.$refs.menu1.toggle(m))
              }),
              h(c(j), {
                ref: "menu1",
                popup: !0,
                model: c(r)
              }, null, 8, ["model"])
            ])
          ]),
          Ae
        ])
      ])
    ]));
  }
});
export {
  Te as default
};
