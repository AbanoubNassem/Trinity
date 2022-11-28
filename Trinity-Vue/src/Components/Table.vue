<template>
  <DataTable
    :paginatorTemplate="{
      '640px': 'PrevPageLink CurrentPageReport NextPageLink',
      default:
        'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
    }"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    ref="dt"
    :value="items"
    :lazy="true"
    :paginator="true"
    :loading="loading"
    :rows="paginator.perPage"
    :first="(paginator.currentPage - 1) * paginator.perPage"
    :totalRecords="paginator.totalCount"
    :rowsPerPageOptions="configStore.configs.rowsPerPageOptions"
    responsiveLayout="scroll"
    stateStorage="session"
    :stateKey="resource.pluralLabel"
    @page="onPage($event)"
  >
    <Column
      v-for="field in fields"
      :field="field.columnName.replace('.', '_')"
      :header="field.label"
      :key="field.title"
    >
      <template #body v-if="loading">
        <Skeleton></Skeleton>
      </template>
    </Column>

    <template #loading> </template>
    <template #paginatorstart>
      <Button type="button" icon="pi pi-refresh" class="p-button-text" />
    </template>
    <template #paginatorend>
      <Button type="button" icon="pi pi-cloud" class="p-button-text" />
    </template>
  </DataTable>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { Inertia } from "@inertiajs/inertia";
import type Field from "@/Models/Field";
import type IPaginator from "@/Models/Paginator";
import type { Resource } from "@/Models/Resource";
import { useConfigStore } from "@/Stores/ConfigStore";

import Button from "primevue/button";
import DataTable, { DataTablePageEvent } from "primevue/datatable";
import Column from "primevue/column";
import Skeleton from "primevue/skeleton";

const configStore = useConfigStore();

const props = defineProps<{
  fields: { [key: string]: Field };
  paginator: IPaginator;
  resource: Resource;
}>();

const dt = ref();
const loading = ref(false);
const onPage = (event: DataTablePageEvent) => {
  if (
    event.page + 1 === props.paginator.currentPage &&
    event.rows === props.paginator.perPage
  )
    return;

  Inertia.get(
    `/${
      configStore.configs.prefix
    }/${props.resource.pluralLabel.toLowerCase()}`,
    { page: event.page + 1, perPage: event.rows },
    {
      preserveScroll: true,
      preserveState: true,
      replace: true,
      onStart: () => (loading.value = true),
      onFinish: () => (loading.value = false),
    }
  );
};

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

<style lang="scss">
.p-datatable .p-datatable-loading-overlay {
  display: none !important;
}
</style>
