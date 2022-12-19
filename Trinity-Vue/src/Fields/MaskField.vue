<template>
  <BaseField
    :is="InputMask"
    :component="component"
    :containerClass="containerClass"
    :form="form"
    :errors="errors"
    :setFieldValue="setFieldValue"
    :attrs="{
      mask: component.inputMask,
      slotChar: component.slotChar ?? '_',
      autoClear: component.autoClear,
    }"
  >
  </BaseField>
</template>

<script lang="ts" setup>
import type { InertiaFormProps } from "@inertiajs/inertia-vue3";
import type Errors from "@/Types/errors";
import BaseField from "@/Fields/BaseField.vue";
import InputMask from "primevue/inputmask";
import type MaskField from "@/Types/MaskField";

defineProps<{
  component: MaskField;
  containerClass?: string;
  form?: InertiaFormProps<any>;
  errors?: Errors;
  setFieldValue?: (attr: string, value: any) => void;
}>();
</script>

<style scoped></style>
