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

createInertiaApp({
  resolve: async (name) => {
    const page = (await import(`./Pages/${name}.vue`)).default;

    if (page.layout === undefined) {
      page.layout = Layout;
    }

    return page;
  },
  // @ts-ignore
  setup({ el, App, props, plugin }) {
    // const routes = [{ path: "/", component: App }];
    // const router = createRouter({
    //   history: createWebHashHistory(),
    //   routes,
    // });

    const app = createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(createPinia())
      // .use(router)
      .use(PrimeVue)
      .directive("styleclass", StyleClass)
      .directive("tooltip", Tooltip)
      .directive("ripple", Ripple)
      // .directive('code', CodeHighlight),
      .directive("badge", BadgeDirective)
      .component("AppHead", AppHead);

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
