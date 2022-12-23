<template>
  <TextField
    :component="props.component"
    :form="form"
    :errors="errors"
    :setFieldValue="setFieldValue"
  />
</template>

<script lang="ts" setup>
import type FieldProps from "@/Types/Props/FieldProps";
import type BaseField from "@/Types/Models/BaseField";

const props = defineProps<FieldProps<BaseField>>();
</script>

<style scoped></style>
