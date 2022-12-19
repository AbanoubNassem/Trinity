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
        :containerClass="
          component.columns ? `md:col-${12 / component.columns}` : ''
        "
        :form="form"
        :errors="errors"
        :setFieldValue="setFieldValue"
      ></component>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type BaseLayout from "@/Types/BaseLayout";
import type Field from "@/Types/Field";
import type { InertiaFormProps } from "@inertiajs/inertia-vue3";
import type Errors from "@/Types/errors";

defineProps<{
  component: BaseLayout | Field;
  containerClass?: string;
  form?: InertiaFormProps<any>;
  setFieldValue?: (attr: string, value: any) => void;
  errors?: Errors;
}>();
</script>

<style scoped></style>
