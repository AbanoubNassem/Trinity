<template>
  <AppHead :title="$page.props.controller.resource.pluralLabel"></AppHead>

  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>{{ $page.props.controller.resource.pluralLabel }}</h5>
        <Table
          :paginator="$page.props.controller.paginator"
          :fields="$page.props.controller.fields"
          :resource="$page.props.controller.resource"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { usePage } from "@inertiajs/inertia-vue3";
// import type { Resource } from "@/Models/Resource";
// import { computed } from "vue";
// import type IPaginator from "@/Models/Paginator";
// import type Field from "@/Models/Field";
import Table from "@/Components/Table.vue";

// const { props: $props } = usePage<{
//   controller: {
//     resource: Resource;
//     paginator: IPaginator;
//     fields: { [key: string]: Field };
//   };
// }>();

// const resource = computed(() => $props.value.controller.resource);
// const paginator = computed(() => $props.value.controller.paginator);
// const fields = computed(() => $props.value.controller.fields);
</script>
