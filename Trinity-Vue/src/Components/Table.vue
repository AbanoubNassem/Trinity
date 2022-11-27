<template>
  <DataTable
    :value="items"
    :paginator="items.length > 0"
    :rows="10"
    :paginatorTemplate="{
      '640px': 'PrevPageLink CurrentPageReport NextPageLink',
      '960px':
        'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
      '1300px':
        'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
      default:
        'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown',
    }"
    responsiveLayout="scroll"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
  >
    <Column
      v-for="field in fields"
      :field="field.columnName.replace('.', '_')"
      :header="field.title"
      :key="field.title"
    ></Column>

    <template #paginatorstart>
      <Button type="button" icon="pi pi-refresh" class="p-button-text" />
    </template>
    <template #paginatorend>
      <Button type="button" icon="pi pi-cloud" class="p-button-text" />
    </template>
  </DataTable>
</template>

<script lang="ts" setup>
import type Field from "@/Models/Field";
import { ref, watchEffect } from "vue";

import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import type IPaginator from "@/Models/Paginator";

const props = defineProps<{
  fields: { [key: string]: Field };
  paginator: IPaginator;
}>();

const items = ref<Array<any>>([]);

watchEffect(() => {
  const { fields, paginator } = props;

  items.value = [];
  for (const it of paginator.data) {
    let item = {} as any;
    for (const key in fields) {
      const field = fields[key];
      const columnName = field.columnName.replace(".", "_");

      if (field.relationshipName) {
        const relations = field.relationshipName.split(".");
        let record = it;
        for (let i = 0; i < relations.length; i++) {
          if (record === null) continue;

          record = record[relations[i]];
        }

        item[columnName] = record !== null ? record[field.title] : null;
      } else {
        item[field.columnName] = it[field.columnName];
      }
    }
    items.value.push(item);
  }
});
</script>
