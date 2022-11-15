<template>
  <Link :href="`/${configStore.configs.prefix}${href}`">
    <slot />
  </Link>
</template>

<script lang="ts" setup>
import { Link } from "@inertiajs/inertia-vue3";
import { useConfigStore } from "@/Stores/ConfigStore";

defineProps({ href: String });

const configStore = useConfigStore();
</script>
