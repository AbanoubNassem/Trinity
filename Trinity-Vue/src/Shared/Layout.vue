<template>
  <AppHead />

  <NavBar />

  <div class="bg-base-100 drawer drawer-mobile">
    <input id="side-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-1 flex-col">
      <div class="card max-h-full mx-5 my-8 lg:m-10 bg-base-200 shadow-2xl">
        <div class="card-body">
          <slot />
        </div>
      </div>
    </div>
    <SideNav />
  </div>
</template>

<script setup lang="ts">
import Configs from "@/Models/Configs";
import type { Resource } from "@/Models/Resource";
import { useConfigStore } from "@/Stores/ConfigStore";
import { InertiaProgress } from "@inertiajs/progress";
import { ref } from "vue";

import NavBar from "@/Components/NavBar.vue";
import SideNav from "@/Components/SideNav.vue";

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
</script>
