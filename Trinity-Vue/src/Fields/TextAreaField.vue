<template>
  <BaseField
    :is="TextArea"
    :component="component"
    :containerClass="containerClass"
    :form="form"
    :errors="errors"
    :setFieldValue="setFieldValue"
    :attrs="{
      autoResize: component.autoResize,
      rows: component.rows,
      cols: component.cols,
    }"
  >
  </BaseField>
</template>

<script lang="ts" setup>
import type { InertiaFormProps } from "@inertiajs/inertia-vue3";
import type Errors from "@/Types/errors";
import type TextAreaField from "@/Types/TextAreaField";
import BaseField from "@/Fields/BaseField.vue";
import TextArea from "primevue/textarea";

defineProps<{
  component: TextAreaField;
  containerClass?: string;
  form?: InertiaFormProps<any>;
  errors?: Errors;
  setFieldValue?: (attr: string, value: any) => void;
}>();
</script>

<style scoped></style>
