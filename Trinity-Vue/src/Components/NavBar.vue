<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click.prevent="onIconPress" class="d-lg-none" />
    <v-app-bar-title>{{ configs.title }}</v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useConfigStore } from "@/Stores/ConfigStore";

const configs = useConfigStore().configs;
let props = defineProps<{
  onIconPress: () => void;
}>();
</script>
