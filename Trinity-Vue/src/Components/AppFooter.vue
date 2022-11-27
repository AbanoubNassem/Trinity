<template>
  <div class="layout-footer">
    <img alt="Logo" :src="footerImage()" height="20" class="mr-2" />
    by
    <span class="font-medium ml-2">PrimeVue</span>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";

const $appState = inject<any>("appState");
function footerImage() {
  return $appState.darkTheme
    ? "images/logo-white.svg"
    : "https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg";
}

const darkTheme = computed(() => {
  return $appState.darkTheme;
});
</script>
