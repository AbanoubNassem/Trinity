<template>
  <Toolbar class="mb-4">
    <template #end>
      <Button
        class="p-button-success mr-2"
        icon="pi pi-plus"
        label="New"
        @click="useTrinityLink(`/${props.resource?.name}/create`)"
      />
      <Button class="p-button-danger" icon="pi pi-trash" label="Delete" />
    </template>
  </Toolbar>

  <DataTable
    ref="dt"
    v-model:selection="selectedItems"
    :first="(paginator.currentPage - 1) * paginator.perPage"
    :lazy="true"
    :loading="loading"
    :multiSortMeta="multiSortMeta"
    :paginator="true"
    :paginatorTemplate="{
      '640px': 'PrevPageLink CurrentPageReport NextPageLink',
      default:
        'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
    }"
    :rows="paginator.perPage"
    :rowsPerPageOptions="configStore.configs.rowsPerPageOptions"
    :showGridlines="props.resource?.showGridlines"
    :stripedRows="props.resource?.stripedRows"
    :totalRecords="paginator.totalCount"
    :value="items"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
    filterDisplay="row"
    removableSort
    responsiveLayout="scroll"
    sortMode="multiple"
    @page="onPage($event)"
    @sort="onSort($event)"
  >
    <template #header>
      <div class="flex justify-content-between flex-column sm:flex-row">
        <div>
          <Button
            v-if="exportableFields.length"
            icon="pi pi-external-link"
            class="p-button-primary mb-2 mr-2"
            label="Export"
            @click="exportCSV($event)"
          />
          <Button
            v-if="showClearFilters"
            class="p-button-outlined mb-2"
            icon="pi pi-filter-slash"
            label="Clear"
            type="button"
            @click="clearFilters()"
          />
        </div>
        <div class="flex">
          <span
            v-if="globalSearchFields.length > 0"
            class="p-input-icon-left mb-2"
          >
            <i class="pi pi-search" />
            <InputText
              v-model="globalSearchInput"
              :disabled="globalSearchInput !== null && loading"
              placeholder="Keyword Search"
              style="width: 100%"
            />
            <i
              v-if="globalSearchInput !== null && loading"
              class="pi pi-spin pi-spinner global-search-icon"
            />
          </span>

          <div id="toggleableFields" class="mx-2">
            <Button
              v-if="toggleableFields.length"
              class="p-button-rounded p-button-text"
              icon="pi pi-table"
              @click="toggleableMultiSelect.show()"
            />

            <MultiSelect
              ref="toggleableMultiSelect"
              :modelValue="selectedColumns"
              :options="toggleableFields"
              appendTo="#toggleableFields"
              class="hidden"
              optionLabel="header"
              panelClass="toggleableFields"
              @update:modelValue="onToggle"
            />
          </div>
        </div>
      </div>
    </template>

    <Column :exportable="false" selectionMode="multiple" style="width: 3rem" />

    <Column
      v-for="[, field] in columns"
      :key="field.columnName"
      :field="field.columnName"
      :header="field.label"
      :sortable="field.sortable"
      :showFilterMenu="false"
      filterMatchMode="contains"
      :exportable="field.exportable"
    >
      <template #body="slotProps">
        <Skeleton v-if="loading" />
        <template v-else>
          <div v-html="slotProps.data[field.columnName]"></div>
        </template>
      </template>

      <template v-if="field.searchable && !field.isGloballySearchable" #filter>
        <InputText
          v-model="filters[field.columnName]"
          v-tooltip.top.focus="'Hit enter key to filter'"
          :placeholder="`Search by ${field.label}`"
          class="p-column-filter"
          type="text"
          @keydown.enter="onFilter(field.columnName)"
        />
      </template>
    </Column>

    <Column :exportable="false" headerStyle="min-width:10rem;">
      <template #body>
        <Skeleton v-if="loading" />
        <template v-else>
          <Button
            class="p-button-rounded p-button-warning mr-2"
            icon="pi pi-pencil"
          />
          <Button
            class="p-button-rounded p-button-danger mt-2"
            icon="pi pi-trash"
          />
        </template>
      </template>
    </Column>

    <template #loading></template>
    <template #footer>
      <ScrollTop />
    </template>
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
import ScrollTop from "primevue/scrolltop";
import Toolbar from "primevue/toolbar";
import { useUrlParams } from "@/Composables/trinity_url_params";
import { usePageProps } from "@/Composables/trinity_page_props";
import type { Resource } from "@/Models/Resource";
import { useTrinityLink } from "@/Composables/trinity_link";

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

let exportableFields = computed(() =>
  Object.entries(props.value.fields ?? {}).filter(([, f]) => f.exportable)
);

function exportCSV(event: any) {
  dt.value.exportCSV(event);
}

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
      preserveScroll: true,
      replace: true,
      onStart: () => (loading.value = true),
      onFinish: () => (loading.value = false),
    }
  );
};

const items = ref<Array<any>>([]);
const selectedItems = ref([]);
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
