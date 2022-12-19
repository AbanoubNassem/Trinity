<template>
  <BaseField
    :is="Dropdown"
    :extraClasses="extraClasses"
    :component="component"
    :form="form"
    :setFieldValue="setFieldValue"
    :errors="errors"
  >
  </BaseField>
</template>

<script lang="ts" setup>
import type { InertiaFormProps } from "@inertiajs/inertia-vue3";
import type Errors from "@/Types/errors";
import BaseField from "@/Fields/BaseField.vue";
import type SelectField from "@/Types/SelectField";
import Dropdown from "primevue/dropdown";

defineProps<{
  component: SelectField;
  extraClasses?: string;
  form?: InertiaFormProps<any>;
  errors?: Errors;
  setFieldValue?: (attr: string, value: any) => void;
}>();
</script>

<style scoped></style>
