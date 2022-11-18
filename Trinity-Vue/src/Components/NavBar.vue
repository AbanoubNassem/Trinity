<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      @click.prevent="() => onIconPress()"
      class="d-lg-none"
    />
    <v-app-bar-title>{{ configs.title }}</v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useConfigStore } from "@/Stores/ConfigStore";

const configs = useConfigStore().configs;
defineProps<{
  onIconPress: (v?: boolean) => void;
}>();
</script>
