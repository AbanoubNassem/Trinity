import { r as n, O as l, c as m, d, a as g } from "./main.b59fcee8.js";
function o() {
  return o = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, o.apply(this, arguments);
}
var i = /* @__PURE__ */ n.exports.memo(/* @__PURE__ */ n.exports.forwardRef(function(e, t) {
  var r = n.exports.useRef(null), a = l.findDiffKeys(e, i.defaultProps), s = m("p-toolbar p-component", e.className), c = l.getJSXElement(e.left, e), f = l.getJSXElement(e.right, e);
  return n.exports.useImperativeHandle(t, function() {
    return {
      props: e,
      getElement: function() {
        return r.current;
      }
    };
  }), /* @__PURE__ */ n.exports.createElement("div", o({
    id: e.id,
    ref: r,
    className: s,
    style: e.style,
    role: "toolbar"
  }, a), /* @__PURE__ */ n.exports.createElement("div", {
    className: "p-toolbar-group-left"
  }, c), /* @__PURE__ */ n.exports.createElement("div", {
    className: "p-toolbar-group-right"
  }, f));
}));
i.displayName = "Toolbar";
i.defaultProps = {
  __TYPE: "Toolbar",
  id: null,
  style: null,
  className: null,
  left: null,
  right: null
};
function v(e, t = !1, r = !0) {
  d.Inertia.visit(e, {
    preserveState: r,
    preserveScroll: t
  });
}
function h() {
  var r, a;
  const e = g(), t = [];
  for (const s of (a = (r = e.resource) == null ? void 0 : r.schema) != null ? a : [])
    u(t, s);
  return t;
}
function u(e, t) {
  switch (t.type) {
    case "Field":
      e.push(t);
      break;
    case "Layout": {
      for (const r of t.schema)
        u(e, r);
      break;
    }
  }
}
export {
  i as T,
  v as t,
  h as u
};
