<template>
  <div class="field w-full md:col">
    <label :for="component.columnName">{{ component.label }}</label>
    <InputText :id="component.columnName" type="text" />
  </div>
</template>

<script lang="ts" setup>
import type Field from "@/Models/Field";
import InputText from "primevue/inputtext";
defineProps<{ component: Field }>();
</script>

<style scoped></style>
