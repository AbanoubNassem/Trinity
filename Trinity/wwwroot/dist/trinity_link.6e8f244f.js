import { r, O as n, c as f, g } from "./main.74d2364d.js";
function o() {
  return o = Object.assign ? Object.assign.bind() : function(e) {
    for (var a = 1; a < arguments.length; a++) {
      var t = arguments[a];
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
    }
    return e;
  }, o.apply(this, arguments);
}
var s = /* @__PURE__ */ r.exports.memo(/* @__PURE__ */ r.exports.forwardRef(function(e, a) {
  var t = r.exports.useRef(null), l = n.findDiffKeys(e, s.defaultProps), u = f("p-toolbar p-component", e.className), i = n.getJSXElement(e.left || e.start, e), c = n.getJSXElement(e.center, e), m = n.getJSXElement(e.right || e.end, e);
  return r.exports.useImperativeHandle(a, function() {
    return {
      props: e,
      getElement: function() {
        return t.current;
      }
    };
  }), /* @__PURE__ */ r.exports.createElement("div", o({
    id: e.id,
    ref: t,
    className: u,
    style: e.style,
    role: "toolbar"
  }, l), /* @__PURE__ */ r.exports.createElement("div", {
    className: "p-toolbar-group-start p-toolbar-group-left"
  }, i), /* @__PURE__ */ r.exports.createElement("div", {
    className: "p-toolbar-group-center"
  }, c), /* @__PURE__ */ r.exports.createElement("div", {
    className: "p-toolbar-group-end p-toolbar-group-right"
  }, m));
}));
s.displayName = "Toolbar";
s.defaultProps = {
  __TYPE: "Toolbar",
  id: null,
  style: null,
  className: null,
  left: null,
  right: null,
  start: null,
  center: null,
  end: null
};
function v(e, a = !1, t = !0) {
  g.visit(e, {
    preserveState: t,
    preserveScroll: a
  });
}
export {
  s as T,
  v as t
};
