<template>
  <v-list-item
    :href="`/${configStore.configs.prefix}${href}`"
    @click.prevent="useTrinityLink(href)"
  >
    <slot name="append"></slot>
  </v-list-item>
</template>

<script lang="ts" setup>
import { useConfigStore } from "@/Stores/ConfigStore";
import { useTrinityLink } from "@/Composables/trinity-link";

defineProps({ href: String });

const configStore = useConfigStore();
</script>
