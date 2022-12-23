<template>
  <BaseFieldComponent :component="props.component" :errors="errors">
    <InputMask
      :id="props.component.columnName"
      :name="props.component.columnName"
      :modelValue="form.data()[props.component.columnName]"
      @update:modelValue="
        (value) => props.setFieldValue(props.component.columnName, value)
      "
      v-tooltip.top.focus="props.component.toolTip"
      :disabled="props.component.disabled"
      :placeholder="props.component.placeholder"
      type="text"
      :class="{ 'p-invalid': errors?.value[props.component.columnName] }"
      :mask="props.component.inputMask"
      :slotChar="props.component.slotChar ?? '_'"
      :autoClear="props.component.autoClear"
    />
  </BaseFieldComponent>
</template>

<script lang="ts" setup>
import InputMask from "primevue/inputmask";

import type MaskField from "@/Types/Models/MaskField";
import type FieldProps from "@/Types/Props/FieldProps";
import BaseFieldComponent from "@/Fields/BaseFieldComponent.vue";

const props = defineProps<FieldProps<MaskField>>();
</script>

<style scoped></style>
