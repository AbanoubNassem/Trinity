import { r as a, O as n, c as m, d as c } from "./main.96aef409.js";
function s() {
  return s = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
    }
    return e;
  }, s.apply(this, arguments);
}
var o = /* @__PURE__ */ a.exports.memo(/* @__PURE__ */ a.exports.forwardRef(function(e, r) {
  var t = a.exports.useRef(null), l = n.findDiffKeys(e, o.defaultProps), i = m("p-toolbar p-component", e.className), u = n.getJSXElement(e.left, e), f = n.getJSXElement(e.right, e);
  return a.exports.useImperativeHandle(r, function() {
    return {
      props: e,
      getElement: function() {
        return t.current;
      }
    };
  }), /* @__PURE__ */ a.exports.createElement("div", s({
    id: e.id,
    ref: t,
    className: i,
    style: e.style,
    role: "toolbar"
  }, l), /* @__PURE__ */ a.exports.createElement("div", {
    className: "p-toolbar-group-left"
  }, u), /* @__PURE__ */ a.exports.createElement("div", {
    className: "p-toolbar-group-right"
  }, f));
}));
o.displayName = "Toolbar";
o.defaultProps = {
  __TYPE: "Toolbar",
  id: null,
  style: null,
  className: null,
  left: null,
  right: null
};
function v(e, r = !1, t = !0) {
  c.Inertia.visit(e, {
    preserveState: t,
    preserveScroll: r
  });
}
export {
  o as T,
  v as t
};
