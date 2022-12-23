<template>
  <BaseFieldComponent :component="props.component" :errors="errors">
    <InputText
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
    />
  </BaseFieldComponent>
</template>

<script lang="ts" setup>
import InputText from "primevue/inputtext";
import BaseFieldComponent from "@/Fields/BaseFieldComponent.vue";
import type FieldProps from "@/Types/Props/FieldProps";
import type BaseField from "@/Types/Models/BaseField";

const props = defineProps<FieldProps<BaseField>>();
</script>

<style scoped></style>
