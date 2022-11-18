<template>
  <v-data-table
    :headers="headers"
    :items="items"
    sort-by="calories"
    class="elevation-1"
  >
  </v-data-table>
</template>

<script lang="ts" setup>
import type Field from "@/Models/Field";
import { ref } from "vue";

import { VDataTable } from "vuetify/lib/components/VDataTable";

defineProps<{
  fields: { [key: string]: Field };
  data: [];
}>();

const headers = ref([]);
const items = ref([]);
</script>
