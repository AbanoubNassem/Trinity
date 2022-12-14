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
    @page="onPage($event)"
    removableSort
    sortMode="multiple"
    :multiSortMeta="multiSortMeta"
    @sort="onSort($event)"
    filterDisplay="row"
    :globalFilterFields="['customerNumber']"
  >
    <template #header>
      <div class="flex justify-content-between flex-column sm:flex-row">
        <div>
          <Button
            v-if="showClearFilters"
            type="button"
            icon="pi pi-filter-slash"
            label="Clear"
            class="p-button-outlined mb-2"
            @click="clearFilters()"
          />
        </div>
        <div class="flex">
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

          <div id="toggleableFields" class="mx-2">
            <Button
              icon="pi pi-table"
              class="p-button-rounded p-button-text"
              v-if="toggleableFields.length"
              @click="toggleableMultiSelect.show()"
            />

            <MultiSelect
              appendTo="#toggleableFields"
              ref="toggleableMultiSelect"
              class="hidden"
              panelClass="toggleableFields"
              :options="toggleableFields"
              optionLabel="header"
              :modelValue="selectedColumns"
              @update:modelValue="onToggle"
            />
          </div>
        </div>
      </div>
    </template>

    <Column
      v-for="[, field] in columns"
      :field="field.columnName"
      :header="field.label"
      :key="field.columnName"
      :sortable="field.sortable"
      :showFilterMenu="false"
      filterMatchMode="contains"
    >
      <template #body="slotProps">
        <Skeleton v-if="loading" />
        <template v-else>
          {{ slotProps.data[field.columnName] }}
        </template>
      </template>

      <template #filter v-if="field.searchable && !field.isGloballySearchable">
        <InputText
          type="text"
          class="p-column-filter"
          v-model="filters[field.columnName]"
          @keydown.enter="onFilter(field.columnName)"
          :placeholder="`Search by ${field.label}`"
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
import MultiSelect from "primevue/multiselect";
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
const urlParams = useUrlParams();
const dt = ref();
const loading = ref(false);

let columns = ref(
  computed(() =>
    Object.entries(props.value.fields ?? {}).filter(
      ([, f]) =>
        !f.toggleable ||
        selectedColumns.value?.find((el: any) => el.field === f.columnName)
    )
  )
);

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

let toggleableMultiSelect = ref(null);
let toggleableFields = ref(
  Object.entries(props.value.fields ?? {}).flatMap(([, f]) => {
    if (f.toggleable) {
      return {
        field: f.columnName,
        header: f.label,
        isToggledHiddenByDefault: f.isToggledHiddenByDefault,
      };
    }

    return [];
  })
);

let selectedColumns = ref(
  toggleableFields.value.filter((col) => !col.isToggledHiddenByDefault)
);

function onToggle(val: any) {
  selectedColumns.value = toggleableFields.value.filter((col) =>
    val.includes(col)
  ) as any;
}

let globalSearchInput = ref(urlParams.globalSearch);
let filters = ref(JSON.parse(urlParams.columnsSearch) ?? {});

function onFilter(column: string) {
  if (
    filters.value[column] !== undefined &&
    filters.value[column].trim() === ""
  ) {
    delete filters.value[column];
  }

  fetchTable();
}

let showClearFilters = computed(
  () =>
    globalSearchInput.value ||
    sortEvent?.value?.multiSortMeta ||
    Object.keys(filters.value).length
);

function clearFilters() {
  filters.value = {};
  globalSearchInput.value = "";
  sortEvent.value = undefined;
  pageEvent.value = undefined;
  fetchTable();
}

watch(
  globalSearchInput,
  debounce(() => {
    fetchTable();
  }, 300)
);

const fetchTable = () => {
  let data = {} as any;

  if (pageEvent?.value) {
    data.page = pageEvent?.value
      ? pageEvent.value?.page + 1
      : props.value.paginator?.currentPage ?? 1;
  }

  if (pageEvent?.value?.rows) {
    data.perPage =
      pageEvent?.value?.rows ?? props.value.paginator?.perPage ?? 10;
  }

  if (sortEvent?.value?.multiSortMeta) {
    data.sort = JSON.stringify(sortEvent?.value?.multiSortMeta);
  }

  if (globalSearchInput.value) {
    data.globalSearch = globalSearchInput.value;
  }

  if (Object.keys(filters.value).length) {
    data.columnsSearch = JSON.stringify(filters.value);
  }

  Inertia.get(
    `/${
      configStore.configs.prefix
    }/${props.value.resource?.pluralLabel.toLowerCase()}`,
    data,
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

  multiSortMeta.value = [];
  for (const sortable of JSON.parse(urlParams.sort) ?? []) {
    multiSortMeta.value.push({
      field: sortable.field,
      order: sortable.order,
    });
  }

  items.value = [];
  for (const it of paginator?.data ?? []) {
    let item = {} as any;
    for (const key in fields) {
      const field = fields[key];

      if (field.relationshipName) {
        const relations = field.relationshipName.split(".");
        let record = it;

        for (let i = 0; i < relations.length; i++) {
          if (record === null) continue;
          record = record[relations[i]];
        }

        item[field.columnName] = record !== null ? record[field.title] : null;
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
.toggleableFields {
  left: unset !important;
  right: 0 !important;
  top: 5rem !important;
}
</style>
