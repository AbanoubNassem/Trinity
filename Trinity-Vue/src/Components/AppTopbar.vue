<template>
  <div class="layout-topbar">
    <a class="layout-topbar-logo">
      <img alt="Logo" :src="logo" />
      <span>{{ configStore.configs.title }}</span>
    </a>
    <Button
      class="p-link layout-menu-button layout-topbar-button"
      @click="onMenuToggle"
    >
      <i class="pi pi-bars"></i>
    </Button>

    <button
      class="p-link layout-topbar-menu-button layout-topbar-button"
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        leaveToClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true,
      }"
    >
      <i class="pi pi-ellipsis-v"></i>
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <Button class="p-link layout-topbar-button">
          <i class="pi pi-calendar"></i>
          <span>Events</span>
        </Button>
      </li>
      <li>
        <Button class="p-link layout-topbar-button">
          <i class="pi pi-cog"></i>
          <span>Settings</span>
        </Button>
      </li>
      <li>
        <Button class="p-link layout-topbar-button">
          <i class="pi pi-user"></i>
          <span>Profile</span>
        </Button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";
import Button from "primevue/button";
import { useConfigStore } from "@/Stores/ConfigStore";
import { useLogo } from "@/Composables/trinity_logo";

const configStore = useConfigStore();

const emit = defineEmits(["menu-toggle", "topbar-menu-toggle"]);

function onMenuToggle(event: Event | undefined) {
  emit("menu-toggle", event);
}

function onTopbarMenuToggle(event: Event | undefined) {
  emit("topbar-menu-toggle", event);
}

const logo = useLogo();
</script>
