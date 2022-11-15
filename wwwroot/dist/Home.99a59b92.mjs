import { o as e, c as t, a as c } from "./main.11fdb405.mjs";
const n = (a, r) => {
  const s = a.__vccOpts || a;
  for (const [d, o] of r)
    s[d] = o;
  return s;
}, l = {
  name: "Home"
}, g = {
  role: "status",
  class: "max-w-sm animate-pulse"
}, i = /* @__PURE__ */ c('<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div><div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div><div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div><div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div><div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div><div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div><span class="sr-only">Loading...</span>', 7), m = [
  i
];
function u(a, r, s, d, o, b) {
  return e(), t("div", g, m);
}
const _ = /* @__PURE__ */ n(l, [["render", u]]);
export {
  _ as default
};
