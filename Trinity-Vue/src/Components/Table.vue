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
    :stateKey="props.resource?.pluralLabel"
    @page="onPage($event)"
    removableSort
    sortMode="multiple"
    :multiSortMeta="multiSortMeta"
    @sort="onSort($event)"
    filterDisplay="row"
    :globalFilterFields="['customerNumber']"
    @filter="onFilter($event)"
  >
    <template #header>
      <div class="flex justify-content-between flex-column sm:flex-row">
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Clear"
          class="p-button-outlined mb-2"
          @click="clearFilters()"
        />
        <span
          class="p-input-icon-left mb-2"
          v-if="globalSearchFields.length > 0"
        >
          <i class="pi pi-search" />
          <InputText
            v-model="globalSearchInput"
            placeholder="Keyword Search"
            style="width: 100%"
            :disabled="globalSearchInput !== null && loading"
          />
          <i
            class="pi pi-spin pi-spinner global-search-icon"
            v-if="globalSearchInput !== null && loading"
          />
        </span>
      </div>
    </template>

    <Column
      v-for="field in fields"
      :field="field.columnName.replace('.', '_')"
      :header="field.label"
      :key="field.title"
      :sortable="field.sortable"
      :showFilterMenu="false"
      filterMatchMode="contains"
    >
      <template #body v-if="loading">
        <Skeleton></Skeleton>
      </template>

      <template
        #filter="{ filterCallback }"
        v-if="field.searchable && !field.isGloballySearchable"
      >
        <InputText
          type="text"
          class="p-column-filter"
          v-model="filters[field.columnName]"
          @keydown.enter="filterCallback()"
          :placeholder="`Search by name ${field.label}`"
          v-tooltip.top.focus="'Hit enter key to filter'"
        />
      </template>
    </Column>

    <template #loading></template>
  </DataTable>
</template>

<script lang="ts" setup>
import { computed, ref, watch, watchEffect } from "vue";
import { Inertia } from "@inertiajs/inertia";
import type Field from "@/Models/Field";
import type IPaginator from "@/Models/Paginator";
import debounce from "lodash/debounce";

import { useConfigStore } from "@/Stores/ConfigStore";

import DataTable, {
  DataTablePageEvent,
  DataTableSortEvent,
} from "primevue/datatable";
import Column from "primevue/column";
import Skeleton from "primevue/skeleton";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { useUrlParams } from "@/Composables/trinity_url_params";
import { usePageProps } from "@/Composables/trinity_page_props";
import type { Resource } from "@/Models/Resource";

const configStore = useConfigStore();

defineProps<{
  fields: { [key: string]: Field };
  paginator: IPaginator;
  resource: Resource;
}>();

const props = usePageProps();

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
    event.page + 1 === props.value.paginator?.currentPage &&
    event.rows === props.value.paginator?.perPage
  )
    return;

  pageEvent.value = event;
  fetchTable();
};

let globalSearchFields = computed(() =>
  Object.entries(props.value.fields ?? {}).filter(
    ([, f]) => f.isGloballySearchable
  )
);

let globalSearchInput = ref(useUrlParams().globalSearch);
let filters = ref({});

function clearFilters() {}

watch(
  globalSearchInput,
  debounce(() => {
    fetchTable();
  }, 300)
);

function onFilter(event: any) {
  console.log(filters, event);
}

const fetchTable = () => {
  Inertia.get(
    `/${
      configStore.configs.prefix
    }/${props.value.resource?.pluralLabel.toLowerCase()}`,
    {
      page: pageEvent?.value
        ? pageEvent.value?.page + 1
        : props.value.paginator?.currentPage ?? 1,
      perPage: pageEvent?.value?.rows ?? props.value.paginator?.perPage ?? 10,
      sort: JSON.stringify(
        sortEvent?.value?.multiSortMeta?.map((s) => {
          s.field = s.field.replace("_", ".");
          return s;
        })
      ),
      globalSearch: globalSearchInput.value,
    },
    {
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
  const { fields, paginator } = props.value;
  const urlParams = useUrlParams();

  // globalSearchInput.value = urlParams.globalSearch;

  multiSortMeta.value = [];
  for (const sortable of JSON.parse(urlParams.sort) ?? []) {
    multiSortMeta.value.push({
      field: sortable.field.replace(".", "_"),
      order: sortable.order,
    });
  }

  items.value = [];
  for (const it of paginator?.data ?? []) {
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
