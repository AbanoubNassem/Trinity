<template>
  <Fieldset
    class="col-12"
    :class="`md:col-${component.columnSpan}`"
    :legend="component.label"
    :toggleable="component.toggleable"
    :collapsed="component.isToggledHiddenByDefault"
  >
    <div class="p-fluid formgrid grid px-0 mx-0 col-12">
      <template
        v-for="(innerComponent, index) of component.schema"
        :key="`fieldset_${index}_${innerComponent.componentName}`"
      >
        <component
          :is="innerComponent.componentName"
          :component="innerComponent"
          :extraClasses="
            component.columns ? `md:col-${12 / component.columns}` : ''
          "
        />
      </template>
    </div>
  </Fieldset>
</template>

<script lang="ts" setup>
import type Field from "@/Models/Field";
import type BaseLayout from "@/Models/BaseLayout";
import Fieldset from "primevue/fieldset";

defineProps<{ component: BaseLayout | Field }>();
</script>

<style scoped></style>
