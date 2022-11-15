<template>
  <Head
    :title="
      title
        ? `${title} - ${configStore.configs.title}`
        : configStore.configs.title
    "
  >
    <slot />
  </Head>
</template>

<script lang="ts" setup>
import { Head } from "@inertiajs/inertia-vue3";
import { useConfigStore } from "@/Stores/ConfigStore";

defineProps({ title: String });
const configStore = useConfigStore();
</script>
