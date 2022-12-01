import { H as d, D as p, k as o, o as r, d as i, I as m, f as c, c as f, n as h } from "./main.dc407183.mjs";
var B = d(), v = {
  name: "Portal",
  props: {
    appendTo: {
      type: String,
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      mounted: !1
    };
  },
  mounted() {
    this.mounted = p.isClient();
  },
  computed: {
    inline() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function V(e, a, l, s, n, t) {
  return t.inline ? o(e.$slots, "default", { key: 0 }) : n.mounted ? (r(), i(m, {
    key: 1,
    to: l.appendTo
  }, [
    o(e.$slots, "default")
  ], 8, ["to"])) : c("", !0);
}
v.render = V;
var k = {
  name: "InputText",
  emits: ["update:modelValue"],
  props: {
    modelValue: null
  },
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value);
    }
  },
  computed: {
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    }
  }
};
const y = ["value"];
function I(e, a, l, s, n, t) {
  return r(), f("input", {
    class: h(["p-inputtext p-component", { "p-filled": t.filled }]),
    value: l.modelValue,
    onInput: a[0] || (a[0] = (...u) => t.onInput && t.onInput(...u))
  }, null, 42, y);
}
k.render = I;
export {
  B as O,
  k as a,
  v as s
};
