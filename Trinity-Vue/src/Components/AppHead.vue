<template>
  <Head
    :title="
      title
        ? `${title} - ${configStore.configs.title}`
        : configStore.configs.title
    "
  >
    <slot />
    <link
      rel="icon"
      type="image/x-icon"
      :href="configStore.configs.favIcon ?? '/trinity/dist/favicon.ico'"
    />
  </Head>
</template>

<script lang="ts" setup>
import { Head } from "@inertiajs/inertia-vue3";
import { useConfigStore } from "@/Stores/ConfigStore";

defineProps({ title: String });
const configStore = useConfigStore();
</script>
