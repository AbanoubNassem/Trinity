<template>
  <AppHead />

  <v-app>
    <v-layout>
      <NavBar :onIconPress="toggleDrawer" />
      <SideNav v-model="drawer" />
      <v-main>
        <div class="ma-4 ma-lg-12">
          <slot />
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import Configs, { ThemeMode } from "@/Models/Configs";
import type { Resource } from "@/Models/Resource";
import { useConfigStore } from "@/Stores/ConfigStore";
import { InertiaProgress } from "@inertiajs/progress";
import { ref } from "vue";
import SideNav from "@/Components/SideNav.vue";
import NavBar from "@/Components/NavBar.vue";

let props = defineProps<{
  controller: {
    configs: Configs;
    resources: Array<Resource>;
    resource?: Resource;
  };
}>();

const configStore = useConfigStore();

configStore.$state = ref(props.controller).value;

const theme = useTheme();

theme.global.name.value =
  props.controller.configs.themeMode === ThemeMode.Dark ? "dark" : "light";

InertiaProgress.init(props.controller.configs.progressSettings);

let drawer = ref(true);
let toggleDrawer = (value?: boolean) => (drawer.value = value ?? !drawer.value);
</script>
