import { o as a, c as o, n as p } from "./main.de3ae21b.mjs";
var r = {
  name: "InputText",
  emits: ["update:modelValue"],
  props: {
    modelValue: null
  },
  methods: {
    onInput(t) {
      this.$emit("update:modelValue", t.target.value);
    }
  },
  computed: {
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    }
  }
};
const d = ["value"];
function s(t, l, n, m, i, e) {
  return a(), o("input", {
    class: p(["p-inputtext p-component", { "p-filled": e.filled }]),
    value: n.modelValue,
    onInput: l[0] || (l[0] = (...u) => e.onInput && e.onInput(...u))
  }, null, 42, d);
}
r.render = s;
export {
  r as s
};
