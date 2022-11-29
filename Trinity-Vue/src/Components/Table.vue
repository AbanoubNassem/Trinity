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
    :stateKey="resource.pluralLabel"
    @page="onPage($event)"
    removableSort
    sortMode="multiple"
    :multiSortMeta="multiSortMeta"
    @sort="onSort($event)"
  >
    <Column
      v-for="field in fields"
      :field="field.columnName.replace('.', '_')"
      :header="field.label"
      :key="field.title"
      :sortable="field.sortable != null"
    >
      <template #body v-if="loading">
        <Skeleton></Skeleton>
      </template>
    </Column>

    <template #loading> </template>
  </DataTable>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { Inertia } from "@inertiajs/inertia";
import type Field from "@/Models/Field";
import type IPaginator from "@/Models/Paginator";
import type { Resource } from "@/Models/Resource";
import { useConfigStore } from "@/Stores/ConfigStore";

import DataTable, {
  DataTablePageEvent,
  DataTableSortEvent,
} from "primevue/datatable";
import Column from "primevue/column";
import Skeleton from "primevue/skeleton";
import { useUrlParams } from "@/Composables/trinity_url_params";

const configStore = useConfigStore();

const props = defineProps<{
  fields: { [key: string]: Field };
  paginator: IPaginator;
  resource: Resource;
}>();

const dt = ref();
const loading = ref(false);

let sortEvent = ref<DataTableSortEvent>();
const onSort = (event: DataTableSortEvent) => {
  sortEvent.value = event;
  fetchTable();
};

let pageEvent = ref<DataTablePageEvent>();
const onPage = (event: DataTablePageEvent) => {
  if (
    event.page + 1 === props.paginator.currentPage &&
    event.rows === props.paginator.perPage
  )
    return;

  pageEvent.value = event;
  fetchTable();
};

const fetchTable = () => {
  Inertia.get(
    `/${
      configStore.configs.prefix
    }/${props.resource.pluralLabel.toLowerCase()}`,
    {
      page: pageEvent?.value
        ? pageEvent.value?.page + 1
        : props.paginator.currentPage,
      perPage: pageEvent?.value?.rows ?? props.paginator.perPage,
      sort: JSON.stringify(
        sortEvent?.value?.multiSortMeta?.map((s) => {
          s.field = s.field.replace("_", ".");
          return s;
        })
      ),
    },
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
const multiSortMeta = ref<Array<any>>([]);
watchEffect(() => {
  const { fields, paginator } = props;
  const urlParams = useUrlParams();

  multiSortMeta.value = [];
  for (const sortable of urlParams.sort ?? []) {
    multiSortMeta.value.push({
      field: sortable.field.replace(".", "_"),
      order: sortable.order,
    });
  }

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
