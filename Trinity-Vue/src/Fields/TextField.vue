<template>
  <BaseField
    :is="InputText"
    :component="component"
    :containerClass="containerClass"
    :form="form"
    :errors="errors"
    :setFieldValue="setFieldValue"
  >
  </BaseField>
</template>

<script lang="ts" setup>
import type { InertiaFormProps } from "@inertiajs/inertia-vue3";
import type Errors from "@/Types/errors";
import BaseField from "@/Fields/BaseField.vue";
import InputText from "primevue/inputtext";
import type Field from "@/Types/Field";

defineProps<{
  component: Field;
  containerClass?: string;
  form?: InertiaFormProps<any>;
  errors?: Errors;
  setFieldValue?: (attr: string, value: any) => void;
}>();
</script>

<style scoped></style>
