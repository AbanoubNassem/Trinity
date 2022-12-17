<template>
  <div class="field col-12 md:col" :class="extraClasses">
    <label :for="component.columnName">{{ component.label }}</label>
    <InputText :id="component.columnName" type="text" class="" />
  </div>
</template>

<script lang="ts" setup>
import type Field from "@/Models/Field";
import InputText from "primevue/inputtext";

defineProps<{ component: Field; extraClasses?: string }>();
</script>

<style scoped></style>
