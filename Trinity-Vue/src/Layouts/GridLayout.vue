<template>
  <div
    class="p-fluid grid px-0 mx-0 col-12"
    :class="[
      component.columnSpan > 0 && component.columnSpan < 12
        ? `md:col-${component.columnSpan}`
        : '',
    ]"
  >
    <template
      v-for="(innerComponent, index) of component.schema"
      :key="`gird_${index}_${innerComponent.componentName}`"
    >
      <component
        :is="innerComponent.componentName"
        :component="innerComponent"
        :extraClasses="
          component.columns ? `md:col-${12 / component.columns}` : ''
        "
      ></component>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type GridLayout from "@/Models/Layouts/GridLayout";
import type Field from "@/Models/Field";

defineProps<{ component: GridLayout | Field }>();
</script>

<style scoped></style>
