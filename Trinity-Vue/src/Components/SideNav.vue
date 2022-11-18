<template>
  <v-navigation-drawer app :rail="rail" @click="rail = false">
    <v-list-item
      @click.prevent="useTrinityLink('/')"
      prepend-icon="mdi-monitor-dashboard"
      title="Dashboard"
      :active="$page.component === 'Home'"
      nav
      class="pl-5"
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
import { useTrinityLink } from "@/Composables/trinity-link";
import { ref } from "vue";

const configStore = useConfigStore();

// defineProps<{
//   drawer: boolean;
// }>();

let rail = ref(false);
</script>
