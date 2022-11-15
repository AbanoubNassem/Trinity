import "./assets/main.css";

import { createApp, h } from "vue";
import { createPinia } from "pinia";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import Layout from "./Shared/Layout.vue";
import AppHead from "./Components/AppHead.vue";
import AppLink from "./Components/AppLink.vue";

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
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(createPinia())
      .component("AppHead", AppHead)
      .component("AppLink", AppLink)
      .mount(el);
  },
});
