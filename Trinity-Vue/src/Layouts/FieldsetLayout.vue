<template>
  <Fieldset :class="`col-${component.columnSpan}`">
    <template
      v-for="(innerComponent, index) of component.schema"
      :key="`gird_${index}_${innerComponent.componentName}`"
    >
      <component
        :is="innerComponent.componentName"
        :component="innerComponent"
      ></component>
    </template>
  </Fieldset>
</template>

<script lang="ts" setup>
import type Field from "@/Models/Field";
import type BaseLayout from "@/Models/BaseLayout";
import Fieldset from "primevue/fieldset";

defineProps<{ component: BaseLayout | Field }>();
</script>

<style scoped></style>
