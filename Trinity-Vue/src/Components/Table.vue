<template>
  <Vue3EasyDataTable
    class="elevation-1"
    :headers="headers"
    :items="items"
    :rows-per-page="paginator.perPage"
  >
  </Vue3EasyDataTable>
</template>

<script lang="ts" setup>
import type Field from "@/Models/Field";
import { ref, watchEffect } from "vue";

import Vue3EasyDataTable, { Header } from "vue3-easy-data-table";
import type IPaginator from "@/Models/Paginator";

const props = defineProps<{
  fields: { [key: string]: Field };
  paginator: IPaginator;
}>();

const headers = ref<Array<Header>>([]);
const items = ref<Array<any>>([]);

watchEffect(() => {
  const { fields, paginator } = props;

  headers.value = [];
  for (const key in fields) {
    const field = fields[key];
    headers.value.push({
      text: field.label,
      value: field.attribute,
    });
  }

  items.value = [];
  for (const it of paginator.data) {
    let item = {} as any;
    for (const key in fields) {
      const attr = fields[key].attribute;
      item[attr] = it[attr];
    }
    items.value.push(item);
  }
});
</script>

<!--suppress CssUnresolvedCustomProperty -->
<style scoped>
.v-theme--dark .customize-table {
  --easy-table-border: 1px solid
    rgba(var(--v-border-color), var(--v-border-opacity));
  --easy-table-row-border: 1px solid
    rgba(var(--v-border-color), var(--v-border-opacity));

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: rgba(
    var(--v-theme-on-surface),
    var(--v-high-emphasis-opacity)
  );
  --easy-table-header-background-color: rgb(var(--v-theme-surface));

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: rgba(
    var(--v-theme-on-surface),
    var(--v-high-emphasis-opacity)
  );
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: rgba(
    var(--v-theme-on-surface),
    var(--v-high-emphasis-opacity)
  );
  --easy-table-body-row-background-color: rgb(var(--v-theme-surface));
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: rgba(
    var(--v-theme-on-surface),
    var(--v-high-emphasis-opacity)
  );
  --easy-table-body-row-hover-background-color: rgba(
    var(--v-theme-on-surface),
    calc(0.04 * var(--v-theme-overlay-multiplier))
  );

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: rgb(var(--v-theme-surface));
  --easy-table-footer-font-color: rgba(
    var(--v-theme-on-surface),
    var(--v-high-emphasis-opacity)
  );
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;

  --easy-table-message-font-color: rgba(
    var(--v-theme-on-surface),
    var(--v-high-emphasis-opacity)
  );
}
</style>
