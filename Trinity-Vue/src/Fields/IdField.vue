<template>
  <TextField :component="component" :extraClasses="extraClasses" />
</template>

<script lang="ts" setup>
import type Field from "@/Models/Field";
import TextField from "@/Fields/TextField.vue";

defineProps<{ component: Field; extraClasses?: string }>();
</script>

<style scoped></style>
