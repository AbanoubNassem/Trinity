<template>
  <div class="p-fluid col-12 formgrid grid">
    <template
      v-for="(innerComponent, index) of component.schema"
      :key="`gird_${index}_${innerComponent.componentName}`"
    >
      <component
        :is="innerComponent.componentName"
        :component="innerComponent"
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
