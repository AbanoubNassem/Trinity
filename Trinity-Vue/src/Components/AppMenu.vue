<template>
  <div class="layout-menu-container">
    <AppSubmenu
      :items="items"
      class="layout-menu"
      :root="true"
      @menuitem-click="onMenuItemClick"
      @keydown="onKeyDown"
    />
    <!--    <a href="https://www.primefaces.org/primeblocks-vue" class="block mt-3">-->
    <!--      <img alt="primeblocks" :src="bannerImage()" class="w-full" />-->
    <!--    </a>-->
  </div>
</template>

<script lang="ts" setup>
import AppSubmenu from "@/Components/AppSubmenu.vue";

import { inject } from "vue";

let $appState = inject<any>("appState");

defineProps<{
  items: Array<any>;
}>();

const emit = defineEmits(["menuitem-click"]);

function onMenuItemClick(event: any) {
  emit("menuitem-click", event);
}

function onKeyDown(event: Event | any) {
  const nodeElement = event.target;
  if (event.code === "Enter" || event.code === "Space") {
    nodeElement.click();
    event.preventDefault();
  }
}
function bannerImage() {
  return $appState.darkTheme
    ? "images/banner-primeblocks-dark.png"
    : "https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg";
}
</script>
