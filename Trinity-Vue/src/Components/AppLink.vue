<template>
  <v-list-item
    :href="`/${configStore.configs.prefix}${href}`"
    @click.prevent="
      $inertia.visit(`/${configStore.configs.prefix}${href}`, {
        preserveState: true,
        preserveScroll: true,
      })
    "
  ></v-list-item>
</template>

<script lang="ts" setup>
import { useConfigStore } from "@/Stores/ConfigStore";

defineProps({ href: String });

const configStore = useConfigStore();
</script>
