import { l as i, m as p, o as c, c as d, f as a, n as r, u as b } from "./main.ced9e4dc.mjs";
function $(e, t = !1, s = !0) {
  const n = i();
  p.Inertia.visit(`/${n.configs.prefix}${e}`, {
    preserveState: s,
    preserveScroll: t
  });
}
var f = {
  name: "Toolbar",
  props: {
    "aria-labelledby": {
      type: String,
      default: null
    }
  }
};
const u = ["aria-labelledby"], g = { class: "p-toolbar-group-start p-toolbar-group-left" }, y = { class: "p-toolbar-group-center" }, m = { class: "p-toolbar-group-end p-toolbar-group-right" };
function x(e, t, s, n, o, w) {
  return c(), d("div", {
    class: "p-toolbar p-component",
    role: "toolbar",
    "aria-labelledby": e.ariaLabelledby
  }, [
    a("div", g, [
      r(e.$slots, "start")
    ]),
    a("div", y, [
      r(e.$slots, "center")
    ]),
    a("div", m, [
      r(e.$slots, "end")
    ])
  ], 8, u);
}
function h(e, t) {
  t === void 0 && (t = {});
  var s = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", s === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}
var k = `
.p-toolbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
}
.p-toolbar-group-start,
.p-toolbar-group-center,
.p-toolbar-group-end {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-toolbar-group-left,
.p-toolbar-group-right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;
h(k);
f.render = x;
function C() {
  var s, n;
  const e = b(), t = [];
  for (const o of (n = (s = e.value.resource) == null ? void 0 : s.schema) != null ? n : [])
    l(t, o);
  return t;
}
function l(e, t) {
  switch (t.type) {
    case "Field":
      e.push(t);
      break;
    case "Layout": {
      for (const s of t.schema)
        l(e, s);
      break;
    }
  }
}
export {
  $ as a,
  f as s,
  C as u
};
