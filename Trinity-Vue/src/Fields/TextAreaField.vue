<template>
  <BaseFieldComponent :component="props.component" :errors="errors">
    <TextArea
      :id="props.component.columnName"
      :name="props.component.columnName"
      :modelValue="form.data()[props.component.columnName]"
      @update:modelValue="
        (value) => setFieldValue(props.component.columnName, value)
      "
      v-tooltip.top.focus="props.component.toolTip"
      :disabled="props.component.disabled"
      :placeholder="props.component.placeholder"
      type="text"
      :class="{
        'p-invalid': errors?.value[props.component.columnName],
      }"
      :autoResize="props.component.autoResize"
      :rows="props.component.rows"
      :cols="props.component.cols"
    />
  </BaseFieldComponent>
</template>

<script lang="ts" setup>
import TextArea from "primevue/textarea";
import BaseFieldComponent from "@/Fields/BaseFieldComponent.vue";
import type TextAreaField from "@/Types/Models/TextAreaField";
import type FieldProps from "@/Types/Props/FieldProps";

const props = defineProps<FieldProps<TextAreaField>>();
</script>

<style scoped></style>
