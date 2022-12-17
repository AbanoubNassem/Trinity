<template>
  <AppHead :title="props.resource?.pluralLabel"></AppHead>

  <div class="grid">
    <div class="col-12">
      <h5 class="mb-6">Create {{ props.resource?.pluralLabel }}</h5>

      <div class="p-fluid formgrid grid">
        <template
          v-for="(component, index) of props.resource?.schema"
          :key="`form_${index}_${component.componentName}`"
        >
          <component :is="component.componentName" :component="component" />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePageProps } from "@/Composables/trinity_page_props";

const props = usePageProps();
</script>
