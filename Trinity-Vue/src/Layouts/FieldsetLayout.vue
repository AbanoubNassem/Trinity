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
          :containerClass="
            component.columns ? `md:col-${12 / component.columns}` : ''
          "
          :form="form"
          :errors="errors"
          :setFieldValue="setFieldValue"
        />
      </template>
    </div>
  </Fieldset>
</template>

<script lang="ts" setup>
import Fieldset from "primevue/fieldset";
import type BaseLayout from "@/Types/BaseLayout";
import type Field from "@/Types/Field";
import type { InertiaFormProps } from "@inertiajs/inertia-vue3";
import type Errors from "@/Types/errors";

defineProps<{
  component: BaseLayout | Field;
  containerClass?: string;
  form?: InertiaFormProps<any>;
  errors?: Errors;
  setFieldValue?: (attr: string, value: any) => void;
}>();
</script>

<style scoped></style>
