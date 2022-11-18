<template>
  <AppHead :title="resource.pluralLabel"></AppHead>

  <Table
    table-class-name="customize-table"
    :fields="fields"
    :paginator="paginator"
  />
</template>

<script lang="ts" setup>
import { usePage } from "@inertiajs/inertia-vue3";
import type { Resource } from "@/Models/Resource";
import { computed, ref } from "vue";
import type IPaginator from "@/Models/Paginator";
import Table from "@/Components/Table.vue";
import type Field from "@/Models/Field";

const { props: $props } = usePage<{
  controller: {
    resource: Resource;
    paginator: IPaginator;
    fields: { [key: string]: Field };
  };
}>();

const resource = ref(computed(() => $props.value.controller.resource));
const paginator = ref(computed(() => $props.value.controller.paginator));
const fields = ref(computed(() => $props.value.controller.fields));
</script>
