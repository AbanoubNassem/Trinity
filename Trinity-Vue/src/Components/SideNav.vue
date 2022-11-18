<template>
  <v-navigation-drawer :model-value="drawer" :rail="rail" @click="rail = false">
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
      nav
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <AppLink
        href="/"
        prepend-icon="mdi-monitor-dashboard"
        title="Dashboard"
        :active="$page.component === 'Home'"
      />

      <AppLink
        v-for="resource of configStore.resources"
        :key="resource.label"
        :href="`/${resource.pluralLabel.toLowerCase()}`"
        :title="resource.pluralLabel"
        :prepend-icon="resource.icon ?? 'mdi-semantic-web'"
        :active="
          $page.props.controller?.resource?.pluralLabel.toLowerCase() ===
          resource.pluralLabel.toLowerCase()
        "
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useConfigStore } from "@/Stores/ConfigStore";
import { ref } from "vue";

const configStore = useConfigStore();

defineProps<{
  drawer: boolean;
}>();

let rail = ref(false);
</script>
