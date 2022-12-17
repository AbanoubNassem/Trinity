<template>
  <AppHead :title="resource?.pluralLabel"></AppHead>

  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>{{ resource?.pluralLabel }}</h5>
        <Table />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Table from "@/Components/Table.vue";
import { usePageProps } from "@/Composables/trinity_page_props";

const pageProps = usePageProps();
const resource = pageProps.value.resource;
</script>
