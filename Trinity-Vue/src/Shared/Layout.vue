<template>
  <AppHead />
  <div :class="containerClass" @click="onWrapperClick">
    <AppTopBar @menu-toggle="onMenuToggle" />

    <div class="layout-sidebar" @click="onSidebarClick">
      <AppMenu :items="menuItems" @menuitem-click="onMenuItemClick" />
    </div>

    <div class="layout-main-container">
      <div class="layout-main">
        <slot />
      </div>
      <AppFooter />
    </div>

    <transition name="layout-mask">
      <div
        class="layout-mask p-component-overlay"
        v-if="mobileMenuActive"
      ></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import Configs, { ThemeMode } from "@/Models/Configs";
import type { Resource } from "@/Models/Resource";
import { useConfigStore } from "@/Stores/ConfigStore";
import { InertiaProgress } from "@inertiajs/progress";
import { computed, ref } from "vue";

import AppTopBar from "@/Components/AppTopbar.vue";
import AppFooter from "@/Components/AppFooter.vue";
import AppMenu from "@/Components/AppMenu.vue";

let props = defineProps<{
  controller: {
    configs: Configs;
    resources: Array<Resource>;
    resource?: Resource;
  };
}>();

const configStore = useConfigStore();

configStore.$state = ref(props.controller).value;

InertiaProgress.init(props.controller.configs.progressSettings);

let layoutMode = ref("static");
let staticMenuInactive = ref(false);
let overlayMenuActive = ref(false);
let mobileMenuActive = ref(false);
let menuClick = ref(false);

let menuItems = ref([] as Array<any>);
menuItems.value.push({
  label: "Home",
  items: [
    {
      label: "Dashboard",
      icon: "pi pi-fw pi-home",
      to: "/",
    },
  ],
});
menuItems.value.push({
  label: "Resources",
  items: [],
});

for (const r in props.controller.resources) {
  const resource = props.controller.resources[r];
  menuItems.value[1].items.push({
    label: resource.pluralLabel,
    icon: resource.icon,
    to: `/${resource.pluralLabel.toLowerCase()}`,
    resource,
  });
}

const containerClass = computed(() => [
  "layout-wrapper",
  {
    "layout-overlay": layoutMode.value === "overlay",
    "layout-static": layoutMode.value === "static",
    "layout-static-sidebar-inactive":
      staticMenuInactive.value && layoutMode.value === "static",
    "layout-overlay-sidebar-active":
      overlayMenuActive.value && layoutMode.value === "overlay",
    "layout-mobile-sidebar-active": mobileMenuActive.value,
    // 'p-input-filled': $primevue.config.inputStyle === 'filled',
    // 'p-ripple-disabled': $primevue.config.ripple === false
  },
]);

function onMenuItemClick(event: any) {
  if (event.item && !event.item.items) {
    overlayMenuActive.value = false;
    mobileMenuActive.value = false;
  }
}

function onSidebarClick() {
  menuClick.value = true;
}

function onWrapperClick() {
  if (!menuClick.value) {
    overlayMenuActive.value = false;
    mobileMenuActive.value = false;
  }

  menuClick.value = false;
}

function isDesktop() {
  return window.innerWidth >= 992;
}

function onMenuToggle(event: Event | undefined) {
  menuClick.value = true;

  if (isDesktop()) {
    if (layoutMode.value === "overlay") {
      if (mobileMenuActive.value === true) {
        overlayMenuActive.value = true;
      }

      overlayMenuActive.value = !overlayMenuActive.value;
      mobileMenuActive.value = false;
    } else if (layoutMode.value === "static") {
      staticMenuInactive.value = !staticMenuInactive.value;
    }
  } else {
    mobileMenuActive.value = !mobileMenuActive.value;
  }

  event?.preventDefault();
}
</script>
