import "./assets/layout.scss";

import { createApp, h, reactive } from "vue";
import { createPinia } from "pinia";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import axios from "axios";

import PrimeVue from "primevue/config";
import StyleClass from "primevue/styleclass";

import Layout from "./Shared/Layout.vue";
import AppHead from "./Components/AppHead.vue";

import Tooltip from "primevue/tooltip";
import Ripple from "primevue/ripple";
import BadgeDirective from "primevue/badgedirective";
import { createMemoryHistory, createRouter } from "vue-router";
import GridLayout from "@/Layouts/GridLayout.vue";
import TextField from "@/Fields/TextField.vue";
import FieldsetLayout from "@/Layouts/FieldsetLayout.vue";
import IdField from "@/Fields/IdField.vue";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";

createInertiaApp({
  resolve: async (name) => {
    const page = (
      await import(`./Pages/${name[0].toUpperCase() + name.slice(1)}.vue`)
    ).default;

    if (page.layout === undefined) {
      page.layout = Layout;
    }

    return page;
  },
  // @ts-ignore
  setup({ el, App, props, plugin }) {
    const routes = [{ path: "/:catchAll(.*)", component: App }];
    const router = createRouter({
      history: createMemoryHistory(),
      routes,
    });

    const app = createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(createPinia())
      .use(router)
      .use(PrimeVue, { ripple: true, inputStyle: "outlined" })
      .directive("styleclass", StyleClass)
      .directive("tooltip", Tooltip)
      .directive("ripple", Ripple)
      // .directive('code', CodeHighlight),
      .directive("badge", BadgeDirective)
      .component("InputText", InputText)
      .component("InputMask", InputMask)
      .component("AppHead", AppHead)
      .component("GridLayout", GridLayout)
      .component("FieldsetLayout", FieldsetLayout)
      .component("IdField", IdField)
      .component("TextField", TextField);

    app.provide(
      "appState",
      reactive({
        theme: "tailwind-light",
        darkTheme: false,
      })
    );

    app.mount(el);
  },
});

axios.interceptors.response.use(function (response) {
  // @ts-ignore
  const profiler = window.MiniProfiler as any;

  if (profiler && response.headers["x-miniprofiler-ids"]) {
    profiler.fetchResults(JSON.parse(response.headers["x-miniprofiler-ids"]));
  }
  return response;
});
